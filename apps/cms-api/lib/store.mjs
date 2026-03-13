import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.join(process.cwd(), 'data');
const storePath = path.join(dataDir, 'store.json');
const blobStorePath = process.env.CMS_BLOB_PATH || 'cms/store.json';
const MAX_UPDATE_ATTEMPTS = 5;

let blobSdkPromise;

function isRecord(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function shouldUseBlobStore() {
  return process.env.CMS_STORAGE_DRIVER === 'blob' ||
    (Boolean(process.env.BLOB_READ_WRITE_TOKEN) && process.env.CMS_STORAGE_DRIVER !== 'file');
}

function getBlobToken() {
  return process.env.BLOB_READ_WRITE_TOKEN || undefined;
}

async function getBlobSdk() {
  if (!blobSdkPromise) {
    blobSdkPromise = import('@vercel/blob');
  }

  return blobSdkPromise;
}

function isBlobConflictError(error) {
  const status = error?.statusCode || error?.status || error?.cause?.statusCode || error?.cause?.status;
  return status === 412 || /if-?match|precondition/i.test(String(error?.message || ''));
}

function isBlobMissingError(error) {
  const status = error?.statusCode || error?.status || error?.cause?.statusCode || error?.cause?.status;
  return status === 404 || /not found|no such blob/i.test(String(error?.message || ''));
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

function ensureFileStoreSync() {
  fs.mkdirSync(dataDir, { recursive: true });

  if (!fs.existsSync(storePath)) {
    fs.writeFileSync(storePath, JSON.stringify(getDefaultStore(), null, 2), 'utf8');
  }
}

function readFileStoreSync() {
  ensureFileStoreSync();

  try {
    return normalizeStore(JSON.parse(fs.readFileSync(storePath, 'utf8')));
  } catch {
    const defaults = getDefaultStore();
    fs.writeFileSync(storePath, JSON.stringify(defaults, null, 2), 'utf8');
    return defaults;
  }
}

function writeFileStoreSync(store) {
  ensureFileStoreSync();
  const tempPath = `${storePath}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(normalizeStore(store), null, 2), 'utf8');
  fs.renameSync(tempPath, storePath);
}

async function ensureBlobStore() {
  const { get, put } = await getBlobSdk();

  try {
    const existing = await get(blobStorePath, {
      access: 'private',
      token: getBlobToken()
    });

    if (existing) return;
  } catch (error) {
    if (!isBlobMissingError(error)) throw error;
  }

  await put(blobStorePath, JSON.stringify(getDefaultStore(), null, 2), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json; charset=utf-8',
    token: getBlobToken()
  });
}

async function readBlobStore() {
  const { get } = await getBlobSdk();

  try {
    const result = await get(blobStorePath, {
      access: 'private',
      token: getBlobToken()
    });

    if (!result) {
      return {
        store: getDefaultStore(),
        etag: null
      };
    }

    const rawText = await new Response(result.stream).text();
    return {
      store: normalizeStore(JSON.parse(rawText)),
      etag: result.blob?.etag || result.etag || null
    };
  } catch (error) {
    if (isBlobMissingError(error)) {
      return {
        store: getDefaultStore(),
        etag: null
      };
    }

    throw error;
  }
}

async function writeBlobStore(store, etag = null) {
  const { put } = await getBlobSdk();
  const options = {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json; charset=utf-8',
    token: getBlobToken()
  };

  if (etag) {
    options.ifMatch = etag;
  }

  return put(blobStorePath, JSON.stringify(normalizeStore(store), null, 2), options);
}

export async function ensureStore() {
  if (shouldUseBlobStore()) {
    await ensureBlobStore();
    return;
  }

  ensureFileStoreSync();
}

export async function readStore() {
  if (shouldUseBlobStore()) {
    await ensureBlobStore();
    const { store } = await readBlobStore();
    return store;
  }

  return readFileStoreSync();
}

export async function writeStore(store) {
  if (shouldUseBlobStore()) {
    await ensureBlobStore();
    await writeBlobStore(store);
    return;
  }

  writeFileStoreSync(store);
}

export async function resetStore() {
  await writeStore(getDefaultStore());
}

export async function updateStore(mutator) {
  if (!shouldUseBlobStore()) {
    const current = readFileStoreSync();
    const next = normalizeStore(mutator(structuredClone(current)) ?? current);
    writeFileStoreSync(next);
    return next;
  }

  await ensureBlobStore();

  for (let attempt = 0; attempt < MAX_UPDATE_ATTEMPTS; attempt += 1) {
    const { store: current, etag } = await readBlobStore();
    const next = normalizeStore(mutator(structuredClone(current)) ?? current);

    try {
      await writeBlobStore(next, etag);
      return next;
    } catch (error) {
      if (isBlobConflictError(error) && attempt < MAX_UPDATE_ATTEMPTS - 1) {
        continue;
      }

      throw error;
    }
  }

  throw new Error('blob_store_conflict');
}

export function getStoreMode() {
  return shouldUseBlobStore() ? 'blob-store' : 'file-store';
}

export { blobStorePath, storePath };
