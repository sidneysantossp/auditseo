import fs from 'node:fs';
import path from 'node:path';
import { siteMetadata } from '../src/data/site';

const distDir = path.join(process.cwd(), 'dist');
const siteOrigin = new URL(siteMetadata.siteUrl).origin;
const supportedHtmlExtensions = new Set(['.html']);
const supportedStaticExtensions = new Set([
  '.css',
  '.js',
  '.mjs',
  '.svg',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.gif',
  '.ico',
  '.xml',
  '.txt',
  '.json',
  '.pdf',
  '.woff',
  '.woff2'
]);

const errors: string[] = [];
const warnings: string[] = [];

function walk(dirpath: string): string[] {
  const entries = fs.readdirSync(dirpath, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const absolutePath = path.join(dirpath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(absolutePath));
      continue;
    }
    files.push(absolutePath);
  }

  return files;
}

function toPosix(value: string) {
  return value.split(path.sep).join('/');
}

function normalizeRoutePath(pathname: string) {
  if (!pathname) return '/';
  if (pathname === '/') return '/';

  const extension = path.extname(pathname);
  if (supportedStaticExtensions.has(extension)) {
    return pathname;
  }

  if (pathname.endsWith('/')) {
    return pathname;
  }

  return `${pathname}/`;
}

function routeFromFile(filePath: string) {
  const relativePath = toPosix(path.relative(distDir, filePath));

  if (relativePath === 'index.html') return '/';

  if (relativePath.endsWith('/index.html')) {
    const directoryPath = relativePath.slice(0, -'index.html'.length);
    return `/${directoryPath}`;
  }

  if (supportedHtmlExtensions.has(path.extname(relativePath))) {
    return `/${relativePath.replace(/\.html$/, '/')}`;
  }

  return `/${relativePath}`;
}

function extractInternalCandidates(html: string) {
  const matches = Array.from(html.matchAll(/<[^>]+\b(?:href|src)=["']([^"']+)["'][^>]*>/gi));
  return matches.map((match) => match[1]).filter(Boolean);
}

function shouldIgnoreReference(reference: string) {
  return (
    reference.startsWith('#') ||
    reference.startsWith('mailto:') ||
    reference.startsWith('tel:') ||
    reference.startsWith('javascript:') ||
    reference.startsWith('data:')
  );
}

function resolveInternalReference(reference: string, currentRoute: string) {
  if (shouldIgnoreReference(reference)) {
    return null;
  }

  try {
    const currentUrl = new URL(currentRoute, siteOrigin);
    const resolvedUrl = new URL(reference, currentUrl);

    if (resolvedUrl.origin !== siteOrigin) {
      return null;
    }

    return normalizeRoutePath(resolvedUrl.pathname);
  } catch {
    warnings.push(`Referencia invalida ignorada em ${currentRoute}: ${reference}`);
    return null;
  }
}

function buildPublicPathIndex() {
  if (!fs.existsSync(distDir)) {
    errors.push('Diretorio dist ausente. Rode npm run build antes da auditoria de links internos.');
    return new Set<string>();
  }

  return new Set(walk(distDir).map(routeFromFile));
}

const publicPaths = buildPublicPathIndex();
const htmlFiles = fs.existsSync(distDir) ? [...walk(distDir)].filter((filePath) => filePath.endsWith('.html')) : [];

for (const filePath of htmlFiles) {
  const route = routeFromFile(filePath);
  const html = fs.readFileSync(filePath, 'utf8');
  const references = extractInternalCandidates(html);
  const seen = new Set<string>();

  for (const reference of references) {
    const resolvedPath = resolveInternalReference(reference, route);
    if (!resolvedPath || seen.has(resolvedPath)) continue;
    seen.add(resolvedPath);

    if (!publicPaths.has(resolvedPath)) {
      errors.push(`${route}: referencia interna quebrada -> ${reference} (resolve para ${resolvedPath})`);
    }
  }
}

console.log(`Arquivos HTML verificados: ${htmlFiles.length}`);
console.log(`Rotas/ativos mapeados no dist: ${publicPaths.size}`);

if (warnings.length) {
  console.log('\nAvisos:');
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (errors.length) {
  console.error('\nErros:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('\nAuditoria de links e ativos internos concluida sem erros.');
