import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.join(process.cwd(), 'data');
const storePath = path.join(dataDir, 'store.json');

function getDefaultStore() {
  return {
    version: 1,
    users: [],
    sessions: [],
    editorialState: {
      items: {},
      updatedAt: new Date().toISOString()
    }
  };
}

export function ensureStore() {
  fs.mkdirSync(dataDir, { recursive: true });

  if (!fs.existsSync(storePath)) {
    fs.writeFileSync(storePath, JSON.stringify(getDefaultStore(), null, 2), 'utf8');
  }
}

export function readStore() {
  ensureStore();
  return JSON.parse(fs.readFileSync(storePath, 'utf8'));
}

export function writeStore(store) {
  ensureStore();
  const tempPath = `${storePath}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(store, null, 2), 'utf8');
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
