import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.join(process.cwd(), 'data');
const storePath = path.join(dataDir, 'store.json');

function isRecord(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function getDefaultEditorialState() {
  return {
    items: {},
    updatedAt: new Date().toISOString()
  };
}

function getDefaultCrmState() {
  return {
    leads: [],
    events: [],
    updatedAt: new Date().toISOString()
  };
}

function getDefaultStore() {
  return {
    version: 2,
    users: [],
    sessions: [],
    editorialState: getDefaultEditorialState(),
    crmState: getDefaultCrmState()
  };
}

function normalizeStore(store) {
  const defaults = getDefaultStore();
  const editorialState = isRecord(store?.editorialState) ? store.editorialState : {};
  const crmState = isRecord(store?.crmState) ? store.crmState : {};

  return {
    version: Math.max(Number(store?.version) || 1, defaults.version),
    users: Array.isArray(store?.users) ? store.users : [],
    sessions: Array.isArray(store?.sessions) ? store.sessions : [],
    editorialState: {
      items: isRecord(editorialState.items) ? editorialState.items : defaults.editorialState.items,
      updatedAt:
        typeof editorialState.updatedAt === 'string'
          ? editorialState.updatedAt
          : defaults.editorialState.updatedAt
    },
    crmState: {
      leads: Array.isArray(crmState.leads) ? crmState.leads : defaults.crmState.leads,
      events: Array.isArray(crmState.events) ? crmState.events : defaults.crmState.events,
      updatedAt: typeof crmState.updatedAt === 'string' ? crmState.updatedAt : defaults.crmState.updatedAt
    }
  };
}

export function ensureStore() {
  fs.mkdirSync(dataDir, { recursive: true });

  if (!fs.existsSync(storePath)) {
    fs.writeFileSync(storePath, JSON.stringify(getDefaultStore(), null, 2), 'utf8');
    return;
  }

  const normalized = normalizeStore(JSON.parse(fs.readFileSync(storePath, 'utf8')));
  fs.writeFileSync(storePath, JSON.stringify(normalized, null, 2), 'utf8');
}

export function readStore() {
  ensureStore();
  return normalizeStore(JSON.parse(fs.readFileSync(storePath, 'utf8')));
}

export function writeStore(store) {
  ensureStore();
  const tempPath = `${storePath}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(normalizeStore(store), null, 2), 'utf8');
  fs.renameSync(tempPath, storePath);
}

export function resetStore() {
  writeStore(getDefaultStore());
}

export function updateStore(mutator) {
  const current = readStore();
  const next = mutator(structuredClone(current)) ?? current;
  writeStore(next);
  return next;
}

export { storePath };
