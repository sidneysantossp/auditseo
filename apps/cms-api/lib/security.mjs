import crypto from 'node:crypto';

export function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const derived = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${derived}`;
}

export function verifyPassword(password, passwordHash) {
  const [salt, stored] = String(passwordHash || '').split(':');
  if (!salt || !stored) return false;
  const derived = crypto.scryptSync(password, salt, 64).toString('hex');
  const left = Buffer.from(stored, 'hex');
  const right = Buffer.from(derived, 'hex');
  if (left.length !== right.length) return false;
  return crypto.timingSafeEqual(left, right);
}

export function generateSessionToken() {
  return crypto.randomUUID().replace(/-/g, '') + crypto.randomBytes(12).toString('hex');
}

export function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}
