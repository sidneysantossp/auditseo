import http from 'node:http';
import { URL } from 'node:url';
import { getCorsHeaders, json, noContent, readJsonBody } from './lib/http.mjs';
import { hashPassword, hashToken, verifyPassword, generateSessionToken } from './lib/security.mjs';
import { ensureStore, readStore, updateStore } from './lib/store.mjs';

const PORT = Number(process.env.PORT || 4322);
const HOST = process.env.HOST || '0.0.0.0';
const SESSION_TTL_DAYS = 7;
const CRM_EVENT_LIMIT = 500;
const CRM_LEAD_LIMIT = 250;
const allowedOrigins = (process.env.CMS_ALLOWED_ORIGINS ||
  'http://localhost:4321,http://127.0.0.1:4321,http://192.168.0.5:4321,https://www.auditseo.com.br,https://auditseo.com.br')
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean);

ensureStore();

function withCleanSessions(store) {
  const now = Date.now();
  store.sessions = (store.sessions || []).filter((session) => new Date(session.expiresAt).getTime() > now);
  return store;
}

function sanitizeUser(user) {
  return {
    email: user.email,
    createdAt: user.createdAt
  };
}

function getTokenFromRequest(request) {
  const header = request.headers.authorization || '';
  if (!header.startsWith('Bearer ')) return null;
  return header.slice('Bearer '.length).trim();
}

function getSessionContext(request) {
  const token = getTokenFromRequest(request);
  if (!token) return null;

  const store = withCleanSessions(readStore());
  const tokenHash = hashToken(token);
  const session = store.sessions.find((item) => item.tokenHash === tokenHash);
  if (!session) return null;

  const user = store.users.find((item) => item.email === session.email);
  if (!user) return null;

  return {
    token,
    session,
    user
  };
}

function requireAuth(request, response, corsHeaders) {
  const context = getSessionContext(request);
  if (!context) {
    json(response, 401, { error: 'unauthorized' }, corsHeaders);
    return null;
  }

  return context;
}

function normalizeEditorialPayload(payload) {
  return {
    workflowStatus: ['draft', 'review', 'scheduled', 'published'].includes(payload.workflowStatus)
      ? payload.workflowStatus
      : 'draft',
    owner: String(payload.owner || '').trim(),
    targetDate: String(payload.targetDate || '').trim(),
    note: String(payload.note || '').trim(),
    updatedAt: new Date().toISOString()
  };
}

function sanitizeText(value, maxLength = 400) {
  return String(value || '')
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, maxLength);
}

function sanitizePath(value) {
  const path = sanitizeText(value, 280);
  if (!path) return '/';
  return path.startsWith('/') ? path : `/${path}`;
}

function sanitizeUrl(value) {
  const raw = sanitizeText(value, 600);
  if (!raw) return '';

  try {
    return new URL(raw).toString();
  } catch {
    return '';
  }
}

function sanitizeUtm(value) {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value)
      .map(([key, item]) => [sanitizeText(key, 40).toLowerCase(), sanitizeText(item, 160)])
      .filter(([key, item]) => key && item)
  );
}

function normalizeLeadCapturePayload(payload, request) {
  const captureType = (() => {
    const value = sanitizeText(payload.captureType, 40).toLowerCase();
    if (['diagnostic-form', 'contact-form', 'whatsapp-click'].includes(value)) return value;
    return 'unknown';
  })();

  const createdAt = new Date().toISOString();
  const utm =
    typeof payload.utm === 'object' && payload.utm !== null
      ? sanitizeUtm(payload.utm)
      : sanitizeUtm(
          Object.fromEntries(
            Object.entries(payload).filter(([key]) => key.toLowerCase().startsWith('utm_'))
          )
        );

  const context = {
    pagePath: sanitizePath(payload.pagePath || payload.Pagina_Atual),
    pageUrl: sanitizeUrl(payload.pageUrl || payload.URL_Atual),
    pageTitle: sanitizeText(payload.pageTitle || payload.Titulo_Pagina, 240),
    firstLandingUrl: sanitizeUrl(payload.firstLandingUrl || payload.Primeira_Pagina_Sessao),
    referrer: sanitizeText(payload.referrer || payload.Referrer || 'direto', 400),
    utm
  };

  const lead = {
    id: `lead_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    captureType,
    channel: sanitizeText(payload.channel || (captureType === 'whatsapp-click' ? 'whatsapp' : 'form'), 40),
    source: sanitizeText(payload.source || 'site', 40),
    name: sanitizeText(payload.name || payload.Nome, 160),
    email: sanitizeText(payload.email || payload.Email, 180).toLowerCase(),
    whatsapp: sanitizeText(payload.whatsapp || payload.WhatsApp, 40),
    company: sanitizeText(payload.company || payload.Empresa, 180),
    site: sanitizeUrl(payload.site || payload.Site),
    message: sanitizeText(payload.message || payload.Mensagem, 3000),
    serviceIntent: sanitizeText(
      payload.serviceIntent || payload.Servicos_Produtos || payload.anchorLabel || payload.anchorText,
      1200
    ),
    seoInvestment: sanitizeText(payload.seoInvestment || payload.Investimento_SEO, 180),
    pagePath: context.pagePath,
    pageUrl: context.pageUrl,
    firstLandingUrl: context.firstLandingUrl,
    referrer: context.referrer,
    utm,
    createdAt,
    ip: sanitizeText(
      request.headers['x-forwarded-for'] || request.socket.remoteAddress || '',
      140
    ),
    userAgent: sanitizeText(request.headers['user-agent'] || '', 400)
  };

  return {
    captureType,
    context,
    lead
  };
}

function buildCrmEvent(record) {
  return {
    id: `evt_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    captureType: record.captureType,
    source: record.source,
    channel: record.channel,
    pagePath: record.pagePath,
    pageUrl: record.pageUrl,
    pageTitle: record.pageTitle || '',
    firstLandingUrl: record.firstLandingUrl,
    referrer: record.referrer,
    utm: record.utm,
    company: record.company,
    site: record.site,
    serviceIntent: record.serviceIntent,
    createdAt: record.createdAt
  };
}

function summarizeCrmState(store) {
  const crmState = store.crmState || { leads: [], events: [] };
  const leads = Array.isArray(crmState.leads) ? crmState.leads : [];
  const events = Array.isArray(crmState.events) ? crmState.events : [];

  const pageMap = new Map();
  const captureMap = new Map();

  events.forEach((event) => {
    const path = event.pagePath || '/';
    pageMap.set(path, (pageMap.get(path) || 0) + 1);
    captureMap.set(event.captureType || 'unknown', (captureMap.get(event.captureType || 'unknown') || 0) + 1);
  });

  return {
    totals: {
      leads: leads.length,
      events: events.length,
      forms: events.filter((event) => event.captureType !== 'whatsapp-click').length,
      whatsappClicks: events.filter((event) => event.captureType === 'whatsapp-click').length
    },
    lastLeadAt: leads[0]?.createdAt || null,
    topPages: Array.from(pageMap.entries())
      .map(([path, count]) => ({ path, count }))
      .sort((left, right) => right.count - left.count)
      .slice(0, 8),
    captureTypes: Array.from(captureMap.entries())
      .map(([captureType, count]) => ({ captureType, count }))
      .sort((left, right) => right.count - left.count),
    updatedAt: crmState.updatedAt || null
  };
}

const server = http.createServer(async (request, response) => {
  const origin = request.headers.origin;
  const corsHeaders = getCorsHeaders(origin, allowedOrigins);
  const url = new URL(request.url || '/', `http://${request.headers.host}`);
  const pathname = url.pathname;

  if (request.method === 'OPTIONS') {
    noContent(response, corsHeaders);
    return;
  }

  try {
    if (request.method === 'GET' && pathname === '/health') {
      json(response, 200, { ok: true, service: 'auditseo-cms-api', mode: 'file-store' }, corsHeaders);
      return;
    }

    if (request.method === 'GET' && pathname === '/api/bootstrap-status') {
      const store = withCleanSessions(readStore());
      json(response, 200, { hasUsers: store.users.length > 0 }, corsHeaders);
      return;
    }

    if (request.method === 'GET' && pathname === '/api/public/crm-summary') {
      const store = withCleanSessions(readStore());
      json(response, 200, summarizeCrmState(store), corsHeaders);
      return;
    }

    if (request.method === 'POST' && pathname === '/api/public/lead-capture') {
      const body = await readJsonBody(request);
      const { lead, context } = normalizeLeadCapturePayload(body, request);
      const event = buildCrmEvent({
        ...lead,
        pageTitle: context.pageTitle
      });

      const nextStore = updateStore((current) => {
        current.crmState.events = [event, ...(current.crmState.events || [])].slice(0, CRM_EVENT_LIMIT);

        if (lead.captureType !== 'whatsapp-click') {
          current.crmState.leads = [lead, ...(current.crmState.leads || [])].slice(0, CRM_LEAD_LIMIT);
        }

        current.crmState.updatedAt = new Date().toISOString();
        return withCleanSessions(current);
      });

      json(
        response,
        202,
        {
          ok: true,
          captureType: lead.captureType,
          totals: {
            leads: nextStore.crmState.leads.length,
            events: nextStore.crmState.events.length
          }
        },
        corsHeaders
      );
      return;
    }

    if (request.method === 'POST' && pathname === '/api/bootstrap') {
      const store = withCleanSessions(readStore());
      if (store.users.length > 0) {
        json(response, 409, { error: 'already_bootstrapped' }, corsHeaders);
        return;
      }

      const body = await readJsonBody(request);
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || '');

      if (!email || password.length < 8) {
        json(response, 400, { error: 'invalid_payload' }, corsHeaders);
        return;
      }

      const createdAt = new Date().toISOString();
      const token = generateSessionToken();
      const tokenHash = hashToken(token);
      const expiresAt = new Date(Date.now() + SESSION_TTL_DAYS * 24 * 60 * 60 * 1000).toISOString();

      const nextStore = updateStore((current) => {
        current.users.push({
          email,
          passwordHash: hashPassword(password),
          createdAt
        });
        current.sessions.push({
          email,
          tokenHash,
          createdAt,
          expiresAt
        });
        return withCleanSessions(current);
      });

      const user = nextStore.users.find((item) => item.email === email);
      json(response, 201, { token, user: sanitizeUser(user) }, corsHeaders);
      return;
    }

    if (request.method === 'POST' && pathname === '/api/login') {
      const body = await readJsonBody(request);
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || '');
      const store = withCleanSessions(readStore());
      const user = store.users.find((item) => item.email === email);

      if (!user || !verifyPassword(password, user.passwordHash)) {
        json(response, 401, { error: 'invalid_credentials' }, corsHeaders);
        return;
      }

      const token = generateSessionToken();
      const tokenHash = hashToken(token);
      const createdAt = new Date().toISOString();
      const expiresAt = new Date(Date.now() + SESSION_TTL_DAYS * 24 * 60 * 60 * 1000).toISOString();

      updateStore((current) => {
        current.sessions.push({
          email,
          tokenHash,
          createdAt,
          expiresAt
        });
        return withCleanSessions(current);
      });

      json(response, 200, { token, user: sanitizeUser(user) }, corsHeaders);
      return;
    }

    if (request.method === 'GET' && pathname === '/api/session') {
      const context = requireAuth(request, response, corsHeaders);
      if (!context) return;
      json(response, 200, { user: sanitizeUser(context.user), expiresAt: context.session.expiresAt }, corsHeaders);
      return;
    }

    if (request.method === 'POST' && pathname === '/api/logout') {
      const token = getTokenFromRequest(request);
      if (!token) {
        json(response, 200, { ok: true }, corsHeaders);
        return;
      }

      updateStore((current) => {
        const tokenHash = hashToken(token);
        current.sessions = current.sessions.filter((item) => item.tokenHash !== tokenHash);
        return withCleanSessions(current);
      });

      json(response, 200, { ok: true }, corsHeaders);
      return;
    }

    if (request.method === 'GET' && pathname === '/api/editorial-state') {
      const context = requireAuth(request, response, corsHeaders);
      if (!context) return;
      const store = withCleanSessions(readStore());
      json(response, 200, store.editorialState, corsHeaders);
      return;
    }

    if (request.method === 'GET' && pathname === '/api/crm-state') {
      const context = requireAuth(request, response, corsHeaders);
      if (!context) return;
      const store = withCleanSessions(readStore());
      json(response, 200, store.crmState, corsHeaders);
      return;
    }

    if (request.method === 'PUT' && pathname.startsWith('/api/editorial-state/items/')) {
      const context = requireAuth(request, response, corsHeaders);
      if (!context) return;

      const id = decodeURIComponent(pathname.replace('/api/editorial-state/items/', ''));
      if (!id) {
        json(response, 400, { error: 'missing_item_id' }, corsHeaders);
        return;
      }

      const body = await readJsonBody(request);
      const payload = normalizeEditorialPayload(body);

      const nextStore = updateStore((current) => {
        current.editorialState.items[id] = payload;
        current.editorialState.updatedAt = new Date().toISOString();
        return withCleanSessions(current);
      });

      json(
        response,
        200,
        {
          id,
          item: nextStore.editorialState.items[id],
          updatedAt: nextStore.editorialState.updatedAt
        },
        corsHeaders
      );
      return;
    }

    json(response, 404, { error: 'not_found' }, corsHeaders);
  } catch (error) {
    if (error instanceof Error && error.message === 'invalid_json') {
      json(response, 400, { error: 'invalid_json' }, corsHeaders);
      return;
    }

    console.error(error);
    json(response, 500, { error: 'internal_error' }, corsHeaders);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`AUDITSEO CMS API em http://${HOST}:${PORT}`);
});
