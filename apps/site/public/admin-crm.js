const CRM_STORE_KEY = 'auditseo-admin-crm-v1';
const API_SESSION_KEY = 'auditseo-admin-api-session-v1';

const CRM_DEFAULT_STATE = {
  config: {
    stages: ['Prospecção', 'Qualificação', 'Levantamento', 'Proposta', 'Negociação', 'Fechamento', 'Ganho', 'Perdido'],
    services: [
      { id: 'audit', name: 'Auditoria SEO' },
      { id: 'tech', name: 'SEO Técnico' },
      { id: 'local', name: 'SEO Local' },
      { id: 'gmb', name: 'Google Meu Negócio' },
      { id: 'consulting', name: 'Consultoria SEO' },
      { id: 'aio', name: 'AI Overviews' },
      { id: 'llm', name: 'LLM Brand Presence' }
    ],
    sources: ['Site', 'WhatsApp', 'Indicação', 'Google Ads', 'LinkedIn', 'Evento', 'Outro'],
    segments: ['Clínica/Saúde', 'Dermatologia', 'Odontologia', 'Advocacia', 'Software B2B', 'Energia Solar', 'Outro']
  },
  leads: [],
  activities: []
};

const crmRuntime = {
  state: readCrmState(),
  capturedLeads: [],
  privateViewActive: false
};

function readCrmState() {
  try {
    const stored = localStorage.getItem(CRM_STORE_KEY);
    if (!stored) return structuredClone(CRM_DEFAULT_STATE);
    const parsed = JSON.parse(stored);
    return {
      ...structuredClone(CRM_DEFAULT_STATE),
      ...parsed,
      config: {
        ...structuredClone(CRM_DEFAULT_STATE.config),
        ...(parsed.config || {})
      },
      leads: Array.isArray(parsed.leads) ? parsed.leads : [],
      activities: Array.isArray(parsed.activities) ? parsed.activities : []
    };
  } catch {
    return structuredClone(CRM_DEFAULT_STATE);
  }
}

function writeCrmState() {
  localStorage.setItem(CRM_STORE_KEY, JSON.stringify(crmRuntime.state));
}

function crmUid() {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

function crmToday() {
  return new Date().toISOString().slice(0, 10);
}

function crmCurrency(value) {
  return `R$ ${Number(value || 0).toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

function crmEscape(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getServiceName(id) {
  return crmRuntime.state.config.services.find((item) => item.id === id)?.name || id || '—';
}

function getLeadById(id) {
  return crmRuntime.state.leads.find((lead) => lead.id === id);
}

function getLeadStageBadge(stage) {
  const status = {
    Prospecção: 'novo',
    Qualificação: 'contato',
    Levantamento: 'reuniao',
    Proposta: 'proposta',
    Negociação: 'proposta',
    Fechamento: 'contato',
    Ganho: 'fechado',
    Perdido: 'perdido'
  }[stage] || 'novo';

  return `<span class="admin-status-badge admin-status-${status}">${crmEscape(stage)}</span>`;
}

function getTempBadge(temp) {
  const tone = temp === 'Hot' ? 'alta' : temp === 'Warm' ? 'media' : 'baixa';
  return `<span class="admin-priority admin-priority-${tone}">${crmEscape(temp)}</span>`;
}

function getActivityTypeLabel(type) {
  return {
    call: 'Ligação',
    email: 'Email',
    meeting: 'Reunião',
    whatsapp: 'WhatsApp',
    followup: 'Follow-up',
    note: 'Nota'
  }[type] || type;
}

function inferCrmLeadsEndpoint() {
  const explicitSummary = window.__AUDITSEO_ADMIN_CONFIG__?.crmSummaryEndpoint;
  const { protocol, hostname } = window.location;

  if (explicitSummary) {
    return explicitSummary.replace(/\/crm-summary\/?$/, '/crm-leads');
  }

  if (hostname === 'localhost') {
    return `${protocol}//127.0.0.1:4322/api/public/crm-leads`;
  }

  if (hostname === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return `${protocol}//${hostname}:4322/api/public/crm-leads`;
  }

  return 'https://auditseo-cms-api.vercel.app/api/public/crm-leads';
}

function inferCrmApiBase() {
  const explicit = window.__AUDITSEO_ADMIN_CONFIG__?.apiBase;
  const { protocol, hostname } = window.location;

  if (explicit) return explicit;

  if (hostname === 'localhost') {
    return `${protocol}//127.0.0.1:4322`;
  }

  if (hostname === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return `${protocol}//${hostname}:4322`;
  }

  return `${protocol}//cms.auditseo.com.br`;
}

function getApiSessionToken() {
  try {
    const session = JSON.parse(localStorage.getItem(API_SESSION_KEY) || 'null');
    return session?.token || null;
  } catch {
    return null;
  }
}

async function fetchPrivateCrmState() {
  const token = getApiSessionToken();
  if (!token) {
    throw new Error('unauthorized');
  }

  const response = await fetch(`${inferCrmApiBase()}/api/crm-state`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(response.status === 401 ? 'unauthorized' : 'crm_state_unavailable');
  }

  return response.json();
}

function buildCrmLeadsUrl(filters = {}) {
  const url = new URL(inferCrmLeadsEndpoint(), window.location.origin);

  if (Array.isArray(filters.paths) && filters.paths.length > 0) {
    url.searchParams.set('paths', filters.paths.join(','));
  }

  if (Number.isFinite(filters.days) && filters.days > 0) {
    url.searchParams.set('days', String(filters.days));
  }

  if (Number.isFinite(filters.limit) && filters.limit > 0) {
    url.searchParams.set('limit', String(filters.limit));
  }

  return url.toString();
}

async function fetchCapturedLeads(filters = {}) {
  const response = await fetch(buildCrmLeadsUrl(filters), {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error('crm_leads_unavailable');
  }

  return response.json();
}

function inferManualLeadEntryType(lead) {
  if (lead.entryType) return lead.entryType;
  if (lead.service === 'audit') return 'Auditoria';
  if (lead.service === 'consulting') return 'Consultoria';
  return 'Agência';
}

function getEntryTypeBadge(value) {
  const entryType = String(value || 'Agência');
  const tone =
    entryType === 'Consultoria'
      ? 'admin-status-proposta'
      : entryType === 'Auditoria'
        ? 'admin-status-reuniao'
        : 'admin-status-contato';

  return `<span class="admin-status-badge ${tone}">${crmEscape(entryType)}</span>`;
}

function getCaptureTypeLabel(type) {
  return {
    'diagnostic-form': 'Diagnóstico',
    'contact-form': 'Contato',
    'whatsapp-click': 'WhatsApp',
    unknown: 'Desconhecido'
  }[type] || type || 'Desconhecido';
}

function formatDateTime(value) {
  const timestamp = new Date(value || '');
  if (Number.isNaN(timestamp.getTime())) return '—';
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(timestamp);
}

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function inferEntryTypeFromCapturedLead(lead) {
  if (lead.entryType) return lead.entryType;

  const haystack = normalizeText(`${lead.pagePath || ''} ${lead.serviceIntent || ''}`);
  if (/auditori|diagnost/.test(haystack)) return 'Auditoria';
  if (/consultori|consultor|especialista/.test(haystack)) return 'Consultoria';
  return 'Agência';
}

function getCapturedServiceLabel(lead) {
  const entryType = inferEntryTypeFromCapturedLead(lead);
  if (entryType === 'Auditoria') return 'Auditoria SEO';
  if (entryType === 'Consultoria') return 'Consultoria SEO';
  return 'Agência SEO';
}

function getPrivateLeadContact(lead) {
  return [lead.name, lead.email, lead.whatsapp].filter(Boolean).join(' • ') || lead.site || 'Lead privado';
}

function filterCapturedLeadItems(items, filters = {}) {
  const pathSet = new Set((filters.paths || []).map((item) => String(item || '').trim()).filter(Boolean));
  const minCreatedAt = Number.isFinite(filters.days) && filters.days > 0
    ? Date.now() - filters.days * 24 * 60 * 60 * 1000
    : null;

  return items
    .filter((item) => {
      if (pathSet.size && !pathSet.has(item.pagePath || '/')) return false;
      if (!minCreatedAt) return true;
      const createdAt = new Date(item.createdAt || '').getTime();
      return Number.isFinite(createdAt) && createdAt >= minCreatedAt;
    })
    .sort((left, right) => new Date(right.createdAt || 0).getTime() - new Date(left.createdAt || 0).getTime())
    .slice(0, filters.limit || 12);
}

function populateSelectOptions(select, values, placeholder) {
  if (!select) return;
  const options = [placeholder ? `<option value="">${crmEscape(placeholder)}</option>` : ''];
  values.forEach((item) => {
    if (typeof item === 'string') {
      options.push(`<option value="${crmEscape(item)}">${crmEscape(item)}</option>`);
    } else {
      options.push(`<option value="${crmEscape(item.id)}">${crmEscape(item.name)}</option>`);
    }
  });
  select.innerHTML = options.join('');
}

function renderCrmKpis(kind) {
  const target = document.querySelector(`[data-admin-crm-kpis="${kind}"]`);
  if (!target) return;

  const leads = crmRuntime.state.leads;
  const activities = crmRuntime.state.activities;
  const activeLeads = leads.filter((lead) => !['Ganho', 'Perdido'].includes(lead.stage));
  const wonLeads = leads.filter((lead) => lead.stage === 'Ganho');
  const overdueActivities = activities.filter((activity) => activity.status === 'pendente' && activity.date < crmToday());

  let cards = [];

  if (kind === 'leads') {
    cards = [
      { label: 'Total leads', value: leads.length, copy: `${activeLeads.length} ativos` },
      { label: 'Pipeline', value: crmCurrency(activeLeads.reduce((sum, lead) => sum + Number(lead.value || 0), 0)), copy: 'receita potencial mensal' },
      { label: 'Ganhos', value: wonLeads.length, copy: crmCurrency(wonLeads.reduce((sum, lead) => sum + Number(lead.value || 0), 0)) },
      { label: 'Follow-ups', value: overdueActivities.length, copy: 'atividades atrasadas' }
    ];
  } else if (kind === 'pipeline') {
    cards = [
      { label: 'Hot leads', value: leads.filter((lead) => lead.temp === 'Hot').length, copy: 'maior urgência comercial' },
      { label: 'Propostas', value: leads.filter((lead) => lead.stage === 'Proposta').length, copy: 'aguardando avanço' },
      { label: 'Negociação', value: leads.filter((lead) => lead.stage === 'Negociação').length, copy: 'oportunidades quentes' },
      { label: 'Receita em aberto', value: crmCurrency(activeLeads.reduce((sum, lead) => sum + Number(lead.value || 0), 0)), copy: 'pipeline atual' }
    ];
  } else {
    const pending = activities.filter((activity) => activity.status === 'pendente');
    const completed = activities.filter((activity) => activity.status === 'concluida');
    cards = [
      { label: 'Atividades', value: activities.length, copy: 'cadência comercial total' },
      { label: 'Pendentes', value: pending.length, copy: 'próximas ações abertas' },
      { label: 'Atrasadas', value: overdueActivities.length, copy: 'pedem intervenção agora' },
      { label: 'Concluídas', value: completed.length, copy: 'execução registrada' }
    ];
  }

  target.innerHTML = cards
    .map(
      (card) => `
        <article class="admin-stat-card">
          <div class="admin-card-eyebrow">${crmEscape(card.label)}</div>
          <div class="admin-stat-value">${crmEscape(card.value)}</div>
          <p class="admin-stat-copy">${crmEscape(card.copy)}</p>
        </article>
      `
    )
    .join('');
}

function renderLeadsPage() {
  const page = document.querySelector('[data-admin-crm-page="leads"]');
  if (!page) return;

  renderCrmKpis('leads');

  const search = page.querySelector('[data-admin-crm-filter="search"]');
  const stage = page.querySelector('[data-admin-crm-filter="stage"]');
  const segment = page.querySelector('[data-admin-crm-filter="segment"]');
  const rows = page.querySelector('[data-admin-crm-leads-rows]');
  const openButton = page.querySelector('[data-admin-crm-open-lead]');

  populateSelectOptions(stage, crmRuntime.state.config.stages, 'Todas as etapas');
  populateSelectOptions(segment, crmRuntime.state.config.segments, 'Todos os segmentos');

  const render = () => {
    const searchTerm = String(search.value || '').trim().toLowerCase();
    const stageValue = String(stage.value || '');
    const segmentValue = String(segment.value || '');

    const filtered = crmRuntime.state.leads.filter((lead) => {
      const haystack = `${lead.company} ${lead.contact} ${lead.email || ''}`.toLowerCase();
      if (searchTerm && !haystack.includes(searchTerm)) return false;
      if (stageValue && lead.stage !== stageValue) return false;
      if (segmentValue && lead.segment !== segmentValue) return false;
      return true;
    });

    if (!filtered.length) {
      rows.innerHTML = '<tr><td colspan="9"><div class="admin-empty-state">Nenhum lead registrado ainda.</div></td></tr>';
      return;
    }

    rows.innerHTML = filtered
      .map(
        (lead) => `
          <tr>
            <td>
              <strong>${crmEscape(lead.company)}</strong>
              ${lead.notes ? `<div class="admin-helper-text">${crmEscape(lead.notes)}</div>` : ''}
            </td>
            <td>${crmEscape(lead.contact)}</td>
            <td>${getEntryTypeBadge(inferManualLeadEntryType(lead))}</td>
            <td>${crmEscape(getServiceName(lead.service))}</td>
            <td>${crmEscape(crmCurrency(lead.value))}</td>
            <td>${getLeadStageBadge(lead.stage)}</td>
            <td>${getTempBadge(lead.temp)}</td>
            <td>
              ${crmEscape(lead.source || '—')}
              ${lead.pagePath ? `<div class="admin-helper-text">${crmEscape(lead.pagePath)}</div>` : ''}
            </td>
            <td>
              <div class="admin-inline-actions">
                <button class="admin-inline-button" type="button" data-admin-crm-edit-lead="${crmEscape(lead.id)}">Editar</button>
                <button class="admin-inline-button admin-inline-button--danger" type="button" data-admin-crm-delete-lead="${crmEscape(lead.id)}">Excluir</button>
              </div>
            </td>
          </tr>
        `
      )
      .join('');
  };

  search.addEventListener('input', render);
  stage.addEventListener('change', render);
  segment.addEventListener('change', render);
  openButton?.addEventListener('click', () => openLeadModal());
  rows.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const editId = target.getAttribute('data-admin-crm-edit-lead');
    if (editId) {
      openLeadModal(editId);
      return;
    }

    const deleteId = target.getAttribute('data-admin-crm-delete-lead');
    if (deleteId) {
      deleteLead(deleteId);
    }
  });

  render();
}

function renderCapturedLeadsSection() {
  const section = document.querySelector('[data-admin-captured-leads]');
  if (!section) return;

  const rows = section.querySelector('[data-admin-captured-leads-rows]');
  const meta = section.querySelector('[data-admin-captured-leads-meta]');
  if (!rows || !meta) return;

  const items = Array.isArray(crmRuntime.capturedLeads) ? crmRuntime.capturedLeads : [];
  const privateCopy = crmRuntime.privateViewActive
    ? `${items.length} entradas privadas do cluster local. Dados reais liberados para operação.`
    : `${items.length} entradas recentes do cluster local. Contato mascarado por segurança enquanto o painel permanecer aberto.`;

  meta.textContent = items.length
    ? privateCopy
    : 'Nenhuma captura automática do cluster local disponível ainda.';

  if (!items.length) {
    rows.innerHTML = '<tr><td colspan="7"><div class="admin-empty-state">Nenhuma captura automática do cluster local disponível ainda.</div></td></tr>';
    return;
  }

  rows.innerHTML = items
    .map(
      (lead) => `
        <tr>
          <td>
            <strong>${crmEscape(lead.company || 'Lead inbound')}</strong>
            ${
              lead.serviceIntent
                ? `<div class="admin-helper-text">${crmEscape(lead.serviceIntent)}</div>`
                : lead.siteHost
                  ? `<div class="admin-helper-text">${crmEscape(lead.siteHost)}</div>`
                  : ''
            }
          </td>
          <td>${crmEscape(lead.contact || (crmRuntime.privateViewActive ? 'lead privado' : 'captura privada'))}</td>
          <td>${getEntryTypeBadge(inferEntryTypeFromCapturedLead(lead))}</td>
          <td>
            ${crmEscape(lead.source || 'site')}
            <div class="admin-helper-text">${crmEscape(lead.serviceLabel || getCapturedServiceLabel(lead))}</div>
          </td>
          <td>
            ${
              lead.pageUrl
                ? `<a href="${crmEscape(lead.pageUrl)}" target="_blank" rel="noreferrer">${crmEscape(lead.pagePath || '/')}</a>`
                : crmEscape(lead.pagePath || '/')
            }
          </td>
          <td>${crmEscape(getCaptureTypeLabel(lead.captureType))}</td>
          <td>${crmEscape(formatDateTime(lead.createdAt))}</td>
        </tr>
      `
    )
    .join('');
}

async function loadCapturedLeadsSection() {
  const section = document.querySelector('[data-admin-captured-leads]');
  if (!section) return;

  const pathsScript = section.querySelector('[data-admin-captured-leads-paths]');
  const days = Number.parseInt(section.getAttribute('data-admin-captured-leads-days') || '30', 10) || 30;
  const limit = Number.parseInt(section.getAttribute('data-admin-captured-leads-limit') || '12', 10) || 12;

  let paths = [];
  if (pathsScript?.textContent) {
    try {
      const items = JSON.parse(pathsScript.textContent);
      paths = Array.isArray(items) ? items.map((item) => item?.path).filter(Boolean) : [];
    } catch {
      paths = [];
    }
  }

  try {
    const privateState = await fetchPrivateCrmState();
    const privateLeads = Array.isArray(privateState?.leads) ? privateState.leads : [];
    crmRuntime.privateViewActive = true;
    crmRuntime.capturedLeads = filterCapturedLeadItems(
      privateLeads.map((lead) => ({
        company: lead.company || lead.site || 'Lead inbound',
        contact: getPrivateLeadContact(lead),
        entryType: inferEntryTypeFromCapturedLead(lead),
        source: lead.source || 'site',
        captureType: lead.captureType || 'unknown',
        pagePath: lead.pagePath || '/',
        pageUrl: lead.pageUrl || '',
        serviceIntent: lead.serviceIntent || lead.message || '',
        serviceLabel: getCapturedServiceLabel(lead),
        siteHost: lead.site || '',
        createdAt: lead.createdAt || ''
      })),
      { paths, days, limit }
    );
  } catch {
    crmRuntime.privateViewActive = false;

    try {
      const payload = await fetchCapturedLeads({ paths, days, limit });
      crmRuntime.capturedLeads = Array.isArray(payload?.items) ? payload.items : [];
    } catch {
      crmRuntime.capturedLeads = [];
    }
  }

  renderCapturedLeadsSection();
}

function renderPipelinePage() {
  const page = document.querySelector('[data-admin-crm-page="pipeline"]');
  if (!page) return;

  renderCrmKpis('pipeline');

  const tempFilter = page.querySelector('[data-admin-crm-filter="temp"]');
  const serviceFilter = page.querySelector('[data-admin-crm-filter="service"]');
  const sourceFilter = page.querySelector('[data-admin-crm-filter="source"]');
  const board = page.querySelector('[data-admin-crm-pipeline-board]');
  const openButton = page.querySelector('[data-admin-crm-open-lead]');

  populateSelectOptions(tempFilter, ['Hot', 'Warm', 'Cold'], 'Todas as temperaturas');
  populateSelectOptions(serviceFilter, crmRuntime.state.config.services, 'Todos os serviços');
  populateSelectOptions(sourceFilter, crmRuntime.state.config.sources, 'Todas as origens');

  const columns = crmRuntime.state.config.stages.filter((stage) => !['Ganho', 'Perdido'].includes(stage));

  const render = () => {
    const tempValue = String(tempFilter.value || '');
    const serviceValue = String(serviceFilter.value || '');
    const sourceValue = String(sourceFilter.value || '');

    const filtered = crmRuntime.state.leads.filter((lead) => {
      if (tempValue && lead.temp !== tempValue) return false;
      if (serviceValue && lead.service !== serviceValue) return false;
      if (sourceValue && lead.source !== sourceValue) return false;
      return !['Ganho', 'Perdido'].includes(lead.stage);
    });

    board.innerHTML = columns
      .map((stage) => {
        const stagedLeads = filtered.filter((lead) => lead.stage === stage);
        return `
          <article class="admin-board-column admin-board-column--pipeline" data-admin-crm-stage="${crmEscape(stage)}">
            <h2 class="admin-board-title">${crmEscape(stage)}</h2>
            <p class="admin-board-copy">${stagedLeads.length} oportunidade(s) nesta etapa.</p>
            <div class="admin-board-list admin-board-list--pipeline">
              ${
                stagedLeads.length
                  ? stagedLeads
                      .map(
                        (lead) => `
                          <div class="admin-pipeline-card" draggable="true" data-admin-crm-drag-lead="${crmEscape(lead.id)}">
                            <strong class="admin-pipeline-card__title">${crmEscape(lead.company)}</strong>
                            <div class="admin-pipeline-card__meta">${crmEscape(lead.contact)} • ${crmEscape(getServiceName(lead.service))}</div>
                            <div class="admin-pipeline-card__footer">
                              <span>${crmEscape(crmCurrency(lead.value))}</span>
                              ${getTempBadge(lead.temp)}
                            </div>
                          </div>
                        `
                      )
                      .join('')
                  : '<div class="admin-empty-state admin-empty-state--compact">Sem leads nesta etapa.</div>'
              }
            </div>
          </article>
        `;
      })
      .join('');

    board.querySelectorAll('[data-admin-crm-drag-lead]').forEach((card) => {
      card.addEventListener('dragstart', (event) => {
        event.dataTransfer?.setData('text/plain', card.getAttribute('data-admin-crm-drag-lead') || '');
      });
    });

    board.querySelectorAll('[data-admin-crm-stage]').forEach((column) => {
      column.addEventListener('dragover', (event) => event.preventDefault());
      column.addEventListener('drop', (event) => {
        event.preventDefault();
        const leadId = event.dataTransfer?.getData('text/plain');
        const nextStage = column.getAttribute('data-admin-crm-stage');
        if (!leadId || !nextStage) return;
        const lead = getLeadById(leadId);
        if (!lead) return;
        lead.stage = nextStage;
        writeCrmState();
        renderCrmKpis('pipeline');
        renderLeadsPage();
        renderPipelinePage();
      });
    });
  };

  tempFilter.addEventListener('change', render);
  serviceFilter.addEventListener('change', render);
  sourceFilter.addEventListener('change', render);
  openButton?.addEventListener('click', () => openLeadModal());

  render();
}

function renderActivitiesPage() {
  const page = document.querySelector('[data-admin-crm-page="activities"]');
  if (!page) return;

  renderCrmKpis('activities');

  const typeFilter = page.querySelector('[data-admin-crm-filter="activityType"]');
  const statusFilter = page.querySelector('[data-admin-crm-filter="activityStatus"]');
  const list = page.querySelector('[data-admin-crm-activities-list]');
  const openButton = page.querySelector('[data-admin-crm-open-activity]');

  populateSelectOptions(typeFilter, ['call', 'email', 'meeting', 'whatsapp', 'followup', 'note'], 'Todos os tipos');

  const render = () => {
    const typeValue = String(typeFilter.value || '');
    const statusValue = String(statusFilter.value || '');

    let items = [...crmRuntime.state.activities].sort((left, right) => `${left.date}${left.time || ''}`.localeCompare(`${right.date}${right.time || ''}`));

    items = items.filter((activity) => {
      const isOverdue = activity.status === 'pendente' && activity.date < crmToday();
      if (typeValue && activity.type !== typeValue) return false;
      if (statusValue === 'atrasada') return isOverdue;
      if (statusValue && statusValue !== 'atrasada' && activity.status !== statusValue) return false;
      return true;
    });

    if (!items.length) {
      list.innerHTML = '<div class="admin-empty-state">Nenhuma atividade registrada.</div>';
      return;
    }

    list.innerHTML = items
      .map((activity) => {
        const lead = getLeadById(activity.leadId);
        const isOverdue = activity.status === 'pendente' && activity.date < crmToday();
        return `
          <article class="admin-activity-card">
            <div>
              <div class="admin-card-eyebrow">${crmEscape(getActivityTypeLabel(activity.type))}</div>
              <strong class="admin-list-title">${crmEscape(lead?.company || 'Lead removido')}</strong>
              <div class="admin-list-meta">${crmEscape(activity.date)}${activity.time ? ` • ${crmEscape(activity.time)}` : ''}</div>
              <p class="admin-list-copy">${crmEscape(activity.desc || 'Sem descrição operacional.')}</p>
            </div>
            <div class="admin-activity-card__actions">
              <span class="admin-status-badge ${isOverdue ? 'admin-status-perdido' : activity.status === 'concluida' ? 'admin-status-fechado' : 'admin-status-contato'}">
                ${isOverdue ? 'Atrasada' : crmEscape(activity.status)}
              </span>
              <div class="admin-inline-actions">
                ${activity.status === 'pendente' ? `<button class="admin-inline-button" type="button" data-admin-crm-complete-activity="${crmEscape(activity.id)}">Concluir</button>` : ''}
                <button class="admin-inline-button" type="button" data-admin-crm-edit-activity="${crmEscape(activity.id)}">Editar</button>
                <button class="admin-inline-button admin-inline-button--danger" type="button" data-admin-crm-delete-activity="${crmEscape(activity.id)}">Excluir</button>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  };

  typeFilter.addEventListener('change', render);
  statusFilter.addEventListener('change', render);
  openButton?.addEventListener('click', () => openActivityModal());
  list.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const completeId = target.getAttribute('data-admin-crm-complete-activity');
    if (completeId) {
      const activity = crmRuntime.state.activities.find((item) => item.id === completeId);
      if (activity) {
        activity.status = 'concluida';
        writeCrmState();
        renderActivitiesPage();
      }
      return;
    }
    const editId = target.getAttribute('data-admin-crm-edit-activity');
    if (editId) {
      openActivityModal(editId);
      return;
    }
    const deleteId = target.getAttribute('data-admin-crm-delete-activity');
    if (deleteId) {
      crmRuntime.state.activities = crmRuntime.state.activities.filter((item) => item.id !== deleteId);
      writeCrmState();
      renderActivitiesPage();
    }
  });

  render();
}

function openModal(name) {
  const modal = document.querySelector(`[data-admin-modal="${name}"]`);
  if (!modal) return;
  modal.hidden = false;
}

function closeModal(name) {
  const modal = document.querySelector(`[data-admin-modal="${name}"]`);
  if (!modal) return;
  modal.hidden = true;
}

function openLeadModal(id) {
  const modal = document.querySelector('[data-admin-modal="lead"]');
  const form = document.querySelector('[data-admin-crm-form="lead"]');
  if (!(modal instanceof HTMLElement) || !(form instanceof HTMLFormElement)) return;

  const lead = id ? getLeadById(id) : null;
  const title = document.querySelector('[data-admin-modal-title="lead"]');
  if (title) title.textContent = lead ? 'Editar lead' : 'Novo lead';

  populateSelectOptions(form.querySelector('[name="service"]'), crmRuntime.state.config.services);
  populateSelectOptions(form.querySelector('[name="stage"]'), crmRuntime.state.config.stages);
  populateSelectOptions(form.querySelector('[name="segment"]'), crmRuntime.state.config.segments, 'Selecionar segmento');
  populateSelectOptions(form.querySelector('[name="source"]'), crmRuntime.state.config.sources, 'Selecionar origem');

  form.reset();
  form.elements.id.value = lead?.id || '';
  form.elements.company.value = lead?.company || '';
  form.elements.contact.value = lead?.contact || '';
  form.elements.email.value = lead?.email || '';
  form.elements.phone.value = lead?.phone || '';
  form.elements.service.value = lead?.service || crmRuntime.state.config.services[0]?.id || '';
  form.elements.value.value = lead?.value || '';
  form.elements.stage.value = lead?.stage || 'Prospecção';
  form.elements.temp.value = lead?.temp || 'Warm';
  form.elements.segment.value = lead?.segment || '';
  form.elements.source.value = lead?.source || '';
  form.elements.notes.value = lead?.notes || '';
  openModal('lead');
}

function openActivityModal(id) {
  const modal = document.querySelector('[data-admin-modal="activity"]');
  const form = document.querySelector('[data-admin-crm-form="activity"]');
  if (!(modal instanceof HTMLElement) || !(form instanceof HTMLFormElement)) return;

  const activity = id ? crmRuntime.state.activities.find((item) => item.id === id) : null;
  const title = document.querySelector('[data-admin-modal-title="activity"]');
  if (title) title.textContent = activity ? 'Editar atividade' : 'Nova atividade';

  populateSelectOptions(
    form.querySelector('[name="leadId"]'),
    crmRuntime.state.leads.map((lead) => ({ id: lead.id, name: lead.company })),
    'Selecionar lead'
  );

  form.reset();
  form.elements.id.value = activity?.id || '';
  form.elements.leadId.value = activity?.leadId || '';
  form.elements.type.value = activity?.type || 'followup';
  form.elements.date.value = activity?.date || crmToday();
  form.elements.time.value = activity?.time || '';
  form.elements.desc.value = activity?.desc || '';
  form.elements.status.value = activity?.status || 'pendente';
  openModal('activity');
}

function deleteLead(id) {
  crmRuntime.state.leads = crmRuntime.state.leads.filter((lead) => lead.id !== id);
  crmRuntime.state.activities = crmRuntime.state.activities.filter((activity) => activity.leadId !== id);
  writeCrmState();
  renderLeadsPage();
  renderPipelinePage();
  renderActivitiesPage();
}

function bindCrmForms() {
  document.querySelectorAll('[data-admin-modal-close]').forEach((button) => {
    button.addEventListener('click', () => closeModal(button.getAttribute('data-admin-modal-close')));
  });

  document.querySelector('[data-admin-crm-form="lead"]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    const payload = {
      id: form.elements.id.value || crmUid(),
      company: form.elements.company.value.trim(),
      contact: form.elements.contact.value.trim(),
      email: form.elements.email.value.trim(),
      phone: form.elements.phone.value.trim(),
      service: form.elements.service.value,
      value: Number(form.elements.value.value || 0),
      stage: form.elements.stage.value,
      temp: form.elements.temp.value,
      segment: form.elements.segment.value,
      source: form.elements.source.value,
      notes: form.elements.notes.value.trim(),
      createdAt: crmToday()
    };

    const existingIndex = crmRuntime.state.leads.findIndex((lead) => lead.id === payload.id);
    if (existingIndex >= 0) {
      crmRuntime.state.leads[existingIndex] = { ...crmRuntime.state.leads[existingIndex], ...payload };
    } else {
      crmRuntime.state.leads.push(payload);
    }

    writeCrmState();
    closeModal('lead');
    renderLeadsPage();
    renderPipelinePage();
    renderActivitiesPage();
  });

  document.querySelector('[data-admin-crm-form="activity"]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    const payload = {
      id: form.elements.id.value || crmUid(),
      leadId: form.elements.leadId.value,
      type: form.elements.type.value,
      date: form.elements.date.value,
      time: form.elements.time.value,
      desc: form.elements.desc.value.trim(),
      status: form.elements.status.value,
      createdAt: crmToday()
    };

    const existingIndex = crmRuntime.state.activities.findIndex((activity) => activity.id === payload.id);
    if (existingIndex >= 0) {
      crmRuntime.state.activities[existingIndex] = { ...crmRuntime.state.activities[existingIndex], ...payload };
    } else {
      crmRuntime.state.activities.push(payload);
    }

    writeCrmState();
    closeModal('activity');
    renderActivitiesPage();
  });
}

async function initAdminCrm() {
  bindCrmForms();
  renderLeadsPage();
  renderPipelinePage();
  renderActivitiesPage();
  await loadCapturedLeadsSection();
}

window.addEventListener('auditseo-admin-session-changed', () => {
  loadCapturedLeadsSection();
});

window.addEventListener('DOMContentLoaded', () => {
  initAdminCrm();
});
