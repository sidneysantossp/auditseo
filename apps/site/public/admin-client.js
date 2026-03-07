const LOCAL_BOOTSTRAP_KEY = 'auditseo-admin-bootstrap-v1';
const LOCAL_SESSION_KEY = 'auditseo-admin-session-v1';
const LOCAL_EDITORIAL_KEY = 'auditseo-editorial-state-v1';
const API_SESSION_KEY = 'auditseo-admin-api-session-v1';

const runtime = {
  mode: 'local',
  apiBase: null,
  session: null,
  bootstrapReady: false,
  editorialState: {
    items: {},
    updatedAt: new Date().toISOString()
  }
};

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((item) => item.toString(16).padStart(2, '0'))
    .join('');
}

function inferApiBase() {
  const explicit = window.__AUDITSEO_ADMIN_CONFIG__?.apiBase;
  if (explicit) return explicit;

  const { protocol, hostname } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return `${protocol}//${hostname}:4322`;
  }

  return `${protocol}//cms.auditseo.com.br`;
}

function getLocalBootstrap() {
  return readJson(LOCAL_BOOTSTRAP_KEY, null);
}

function getLocalSession() {
  return readJson(LOCAL_SESSION_KEY, null);
}

function getLocalEditorialState() {
  return readJson(LOCAL_EDITORIAL_KEY, {
    items: {},
    updatedAt: new Date().toISOString()
  });
}

function saveLocalEditorialItem(id, payload) {
  const state = getLocalEditorialState();
  state.items[id] = {
    ...state.items[id],
    ...payload,
    updatedAt: new Date().toISOString()
  };
  state.updatedAt = new Date().toISOString();
  writeJson(LOCAL_EDITORIAL_KEY, state);
  return state;
}

function getApiSessionToken() {
  const session = readJson(API_SESSION_KEY, null);
  return session?.token || null;
}

async function apiRequest(path, options = {}) {
  const headers = {
    ...(options.body ? { 'Content-Type': 'application/json' } : {}),
    ...(options.headers || {})
  };
  const token = getApiSessionToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${runtime.apiBase}${path}`, {
    method: options.method || 'GET',
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  if (response.status === 204) return null;

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const error = new Error(data?.error || 'api_error');
    error.status = response.status;
    throw error;
  }

  return data;
}

async function detectApi() {
  runtime.apiBase = inferApiBase();

  try {
    const response = await fetch(`${runtime.apiBase}/health`, { headers: { Accept: 'application/json' } });
    if (!response.ok) return false;
    const data = await response.json();
    return Boolean(data?.ok);
  } catch {
    return false;
  }
}

async function getBootstrapStatus() {
  if (runtime.mode === 'api') {
    try {
      const data = await apiRequest('/api/bootstrap-status');
      return Boolean(data?.hasUsers);
    } catch {
      return false;
    }
  }

  return Boolean(getLocalBootstrap());
}

async function getSession() {
  if (runtime.mode === 'api') {
    const session = readJson(API_SESSION_KEY, null);
    if (!session?.token) return null;

    try {
      const data = await apiRequest('/api/session');
      return {
        email: data.user.email,
        loggedInAt: session.loggedInAt,
        authMode: 'api',
        expiresAt: data.expiresAt
      };
    } catch {
      localStorage.removeItem(API_SESSION_KEY);
      return null;
    }
  }

  return getLocalSession();
}

async function bootstrapAdmin(email, password) {
  if (runtime.mode === 'api') {
    const data = await apiRequest('/api/bootstrap', {
      method: 'POST',
      body: { email, password }
    });
    writeJson(API_SESSION_KEY, {
      token: data.token,
      loggedInAt: new Date().toISOString()
    });
    return {
      email: data.user.email,
      loggedInAt: new Date().toISOString(),
      authMode: 'api'
    };
  }

  const passwordHash = await sha256(password);
  writeJson(LOCAL_BOOTSTRAP_KEY, {
    email,
    passwordHash,
    createdAt: new Date().toISOString()
  });
  writeJson(LOCAL_SESSION_KEY, {
    email,
    loggedInAt: new Date().toISOString(),
    authMode: 'local'
  });
  return getLocalSession();
}

async function loginAdmin(email, password) {
  if (runtime.mode === 'api') {
    const data = await apiRequest('/api/login', {
      method: 'POST',
      body: { email, password }
    });
    writeJson(API_SESSION_KEY, {
      token: data.token,
      loggedInAt: new Date().toISOString()
    });
    return {
      email: data.user.email,
      loggedInAt: new Date().toISOString(),
      authMode: 'api'
    };
  }

  const bootstrap = getLocalBootstrap();
  const passwordHash = await sha256(password);
  if (!bootstrap || email !== bootstrap.email || passwordHash !== bootstrap.passwordHash) {
    throw new Error('invalid_credentials');
  }

  writeJson(LOCAL_SESSION_KEY, {
    email,
    loggedInAt: new Date().toISOString(),
    authMode: 'local'
  });
  return getLocalSession();
}

async function logoutAdmin() {
  if (runtime.mode === 'api') {
    try {
      await apiRequest('/api/logout', { method: 'POST' });
    } catch {}
    localStorage.removeItem(API_SESSION_KEY);
    return;
  }

  localStorage.removeItem(LOCAL_SESSION_KEY);
}

async function loadEditorialState() {
  if (runtime.mode === 'api') {
    const data = await apiRequest('/api/editorial-state');
    return {
      items: data.items || {},
      updatedAt: data.updatedAt || new Date().toISOString()
    };
  }

  return getLocalEditorialState();
}

async function saveEditorialItem(id, payload) {
  if (runtime.mode === 'api') {
    const data = await apiRequest(`/api/editorial-state/items/${encodeURIComponent(id)}`, {
      method: 'PUT',
      body: payload
    });
    runtime.editorialState.items[id] = data.item;
    runtime.editorialState.updatedAt = data.updatedAt;
    return runtime.editorialState;
  }

  const state = saveLocalEditorialItem(id, payload);
  runtime.editorialState = state;
  return state;
}

function getEditorialItem(id) {
  return runtime.editorialState.items[id] ?? {};
}

function renderSessionBox() {
  const sessionBox = document.querySelector('[data-admin-session-box]');
  if (!sessionBox) return;

  if (!runtime.session) {
    sessionBox.innerHTML = '<span class="admin-session__empty">Sessao bloqueada</span>';
    return;
  }

  sessionBox.innerHTML = `
    <div class="admin-session__meta">
      <span class="admin-session__label">Sessao ${runtime.mode === 'api' ? 'API' : 'Local'}</span>
      <strong>${escapeHtml(runtime.session.email)}</strong>
    </div>
    <button type="button" class="admin-session__button" data-admin-logout>Sair</button>
  `;

  const logout = sessionBox.querySelector('[data-admin-logout]');
  logout?.addEventListener('click', async () => {
    await logoutAdmin();
    window.location.reload();
  });
}

async function applyAuthGate() {
  const auth = document.querySelector('[data-admin-auth]');
  if (!auth) return;

  runtime.bootstrapReady = await getBootstrapStatus();
  runtime.session = await getSession();

  const title = auth.querySelector('[data-admin-auth-title]');
  const copy = auth.querySelector('[data-admin-auth-copy]');
  const modeLabel = auth.querySelector('[data-admin-auth-mode-label]');
  const form = auth.querySelector('[data-admin-auth-form]');
  const submit = auth.querySelector('[data-admin-auth-submit]');
  const error = auth.querySelector('[data-admin-auth-error]');
  const confirmWrap = auth.querySelector('[data-admin-auth-confirm-wrap]');

  if (runtime.session) {
    auth.hidden = true;
    document.body.classList.remove('admin-auth-open');
    renderSessionBox();
    return;
  }

  auth.hidden = false;
  document.body.classList.add('admin-auth-open');

  if (runtime.bootstrapReady) {
    modeLabel.textContent = runtime.mode === 'api' ? 'Entrar na API do CMS' : 'Entrar no painel local';
    title.textContent = 'Sessao administrativa';
    copy.textContent =
      runtime.mode === 'api'
        ? 'A API do CMS esta online. Este login usa autenticacao real do backend e persistencia centralizada.'
        : 'A API nao esta disponivel. O painel segue em modo local para nao travar sua operacao.';
    submit.textContent = 'Entrar';
    confirmWrap.hidden = true;
  } else {
    modeLabel.textContent = runtime.mode === 'api' ? 'Bootstrap da API do CMS' : 'Configurar acesso local';
    title.textContent = 'Inicializar painel';
    copy.textContent =
      runtime.mode === 'api'
        ? 'Nenhum usuario do CMS foi configurado ainda. Esta criacao inicial fica persistida no backend separado.'
        : 'A API nao esta disponivel. O acesso inicial sera salvo neste navegador ate o backend ser ativado.';
    submit.textContent = runtime.mode === 'api' ? 'Criar usuario do CMS' : 'Salvar acesso local';
    confirmWrap.hidden = false;
  }

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    error.hidden = true;
    error.textContent = '';

    const formData = new FormData(form);
    const email = String(formData.get('email') || '').trim().toLowerCase();
    const password = String(formData.get('password') || '');
    const passwordConfirm = String(formData.get('passwordConfirm') || '');

    if (!email || !password) {
      error.hidden = false;
      error.textContent = 'Preencha email e senha.';
      return;
    }

    if (!runtime.bootstrapReady && password !== passwordConfirm) {
      error.hidden = false;
      error.textContent = 'A confirmacao de senha nao confere.';
      return;
    }

    if (!runtime.bootstrapReady && password.length < 8) {
      error.hidden = false;
      error.textContent = 'Use uma senha com pelo menos 8 caracteres.';
      return;
    }

    try {
      runtime.session = runtime.bootstrapReady
        ? await loginAdmin(email, password)
        : await bootstrapAdmin(email, password);
      window.location.reload();
    } catch {
      error.hidden = false;
      error.textContent = runtime.mode === 'api' ? 'Falha na autenticacao do CMS.' : 'Credenciais locais invalidas.';
    }
  });
}

function buildRow(item) {
  const state = getEditorialItem(item.id);
  const workflowStatus = state.workflowStatus || item.workflowStatus;
  const owner = state.owner || '';
  const targetDate = state.targetDate || '';
  const note = state.note || item.notes || '';

  return `
    <tr data-admin-item-row data-item-id="${escapeHtml(item.id)}" data-item-type="${escapeHtml(item.type)}" data-item-status="${escapeHtml(workflowStatus)}">
      <td>
        ${
          item.path
            ? `<a href="${escapeHtml(item.path)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>`
            : `<span>${escapeHtml(item.label)}</span>`
        }
        <div class="admin-helper-text">${escapeHtml(item.priority)}</div>
      </td>
      <td>${escapeHtml(item.type)}</td>
      <td>${escapeHtml(item.clusterTitle)}</td>
      <td>
        <select class="admin-field" data-admin-field="workflowStatus">
          ${['draft', 'review', 'scheduled', 'published']
            .map(
              (status) =>
                `<option value="${status}" ${workflowStatus === status ? 'selected' : ''}>${status}</option>`
            )
            .join('')}
        </select>
      </td>
      <td>
        <input class="admin-field" data-admin-field="owner" type="text" value="${escapeHtml(owner)}" placeholder="Responsavel" />
      </td>
      <td>
        <input class="admin-field" data-admin-field="targetDate" type="date" value="${escapeHtml(targetDate)}" />
      </td>
      <td>
        <textarea class="admin-field admin-field--textarea" data-admin-field="note" rows="3" placeholder="Observacoes operacionais">${escapeHtml(note)}</textarea>
      </td>
    </tr>
  `;
}

function renderWorkflowBoard() {
  const board = document.querySelector('[data-admin-runtime-board]');
  if (!board) return;
  const target = board.querySelector('[data-admin-runtime-board-target]');
  const itemsScript = board.querySelector('[data-admin-items]');
  if (!itemsScript || !target || !(itemsScript.textContent || '').trim()) return;

  const items = JSON.parse(itemsScript.textContent);
  const columns = {
    draft: {
      title: 'Draft',
      copy: 'Pautas e ativos que ainda precisam de estrutura, copy ou prova.'
    },
    review: {
      title: 'Review',
      copy: 'Itens em revisao editorial, tecnica ou de posicionamento.'
    },
    scheduled: {
      title: 'Scheduled',
      copy: 'Fila pronta para publicacao ou atualizacao em janela definida.'
    },
    published: {
      title: 'Published',
      copy: 'Ativos ja publicados e governados pela arquitetura atual.'
    }
  };

  target.innerHTML = Object.entries(columns)
    .map(([status, meta]) => {
      const grouped = items.filter((item) => {
        const state = getEditorialItem(item.id);
        return (state.workflowStatus || item.workflowStatus) === status;
      });

      return `
        <article class="admin-board-column">
          <h2 class="admin-board-title">${meta.title}</h2>
          <p class="admin-board-copy">${meta.copy}</p>
          <ul class="admin-board-list">
            ${grouped
              .map((item) => {
                const state = getEditorialItem(item.id);
                return `
                  <li class="admin-board-card">
                    <strong>${escapeHtml(item.label)}</strong>
                    <div class="admin-list-meta">${escapeHtml(item.type)} • ${escapeHtml(item.clusterTitle)}</div>
                    <p class="admin-list-copy">${escapeHtml(state.note || item.notes || 'Sem observacao registrada.')}</p>
                    <div class="admin-helper-text">${escapeHtml(state.owner || 'Sem responsavel')}${
                  state.targetDate ? ` • alvo ${escapeHtml(state.targetDate)}` : ''
                }</div>
                  </li>
                `;
              })
              .join('')}
          </ul>
        </article>
      `;
    })
    .join('');
}

function attachManagedRowEvents(rowsTarget, items, updateTable) {
  rowsTarget.querySelectorAll('[data-admin-item-row]').forEach((row) => {
    const id = row.getAttribute('data-item-id');
    row.querySelectorAll('[data-admin-field]').forEach((field) => {
      field.addEventListener('change', async () => {
        const item = items.find((entry) => entry.id === id);
        const payload = {
          workflowStatus: row.querySelector('[data-admin-field="workflowStatus"]').value,
          owner: row.querySelector('[data-admin-field="owner"]').value.trim(),
          targetDate: row.querySelector('[data-admin-field="targetDate"]').value,
          note: row.querySelector('[data-admin-field="note"]').value.trim()
        };

        await saveEditorialItem(id, payload);
        if (item) {
          item.workflowStatus = payload.workflowStatus;
        }
        updateTable();
        renderWorkflowBoard();
      });
    });
  });
}

function renderManagedTable() {
  const manager = document.querySelector('[data-admin-content-manager]');
  if (!manager) return;

  const itemsScript = manager.querySelector('[data-admin-items]');
  const rowsTarget = manager.querySelector('[data-admin-managed-rows]');
  const searchInput = manager.querySelector('[data-admin-filter-search]');
  const typeFilter = manager.querySelector('[data-admin-filter-type]');
  const statusFilter = manager.querySelector('[data-admin-filter-status]');
  if (!itemsScript || !rowsTarget || !(itemsScript.textContent || '').trim()) return;

  const items = JSON.parse(itemsScript.textContent);
  const types = Array.from(new Set(items.map((item) => item.type))).sort();
  typeFilter.innerHTML += types.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join('');

  const updateTable = () => {
    const search = String(searchInput.value || '').trim().toLowerCase();
    const type = String(typeFilter.value || '');
    const status = String(statusFilter.value || '');

    const filtered = items.filter((item) => {
      const state = getEditorialItem(item.id);
      const workflowStatus = state.workflowStatus || item.workflowStatus;
      const haystack = `${item.label} ${item.clusterTitle} ${item.type}`.toLowerCase();
      if (search && !haystack.includes(search)) return false;
      if (type && item.type !== type) return false;
      if (status && workflowStatus !== status) return false;
      return true;
    });

    rowsTarget.innerHTML = filtered.map((item) => buildRow(item)).join('');
    attachManagedRowEvents(rowsTarget, items, updateTable);
  };

  searchInput?.addEventListener('input', updateTable);
  typeFilter?.addEventListener('change', updateTable);
  statusFilter?.addEventListener('change', updateTable);
  updateTable();
}

async function init() {
  runtime.mode = (await detectApi()) ? 'api' : 'local';
  await applyAuthGate();
  renderSessionBox();

  if (!runtime.session) return;

  try {
    runtime.editorialState = await loadEditorialState();
  } catch {
    if (runtime.mode === 'api') {
      runtime.mode = 'local';
      runtime.editorialState = getLocalEditorialState();
    }
  }

  renderManagedTable();
  renderWorkflowBoard();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});
