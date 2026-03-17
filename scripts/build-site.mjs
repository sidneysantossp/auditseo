import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { printLegacyNotice } from './legacy-notice.mjs';

printLegacyNotice('scripts/build-site.mjs', 'npm run build');

const root = process.cwd();
const distDir = path.join(root, 'dist');
const headerPartialFile = path.join(root, 'partials', 'header.home.html');
const footerPartialFile = path.join(root, 'partials', 'footer.home.html');

const excludedDirs = new Set([
  '.git',
  'dist',
  'node_modules',
  'scripts',
  'partials',
  'to-do'
]);

const excludedFiles = new Set([
  '.DS_Store',
  '.env',
  '.env.example',
  'php.ini',
  'footer.php',
  'teste.php',
  'sitemap.php',
  'sitemap-test.txt',
  'package.json',
  'package-lock.json',
  'vercel.json',
  'README.md'
]);

const excludedByPath = new Set([
  'apresentacao/server.js'
]);

const allowedExtensions = new Set([
  '.html',
  '.css',
  '.js',
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
  '.svg',
  '.ico',
  '.xml',
  '.txt',
  '.woff',
  '.woff2',
  '.ttf',
  '.avif',
  '.json'
]);

function isAllowedFile(filePath) {
  const relative = path.relative(root, filePath).replace(/\\/g, '/');
  const base = path.basename(filePath);
  if (excludedFiles.has(base)) return false;
  if (excludedByPath.has(relative)) return false;
  if (base.startsWith('.')) return false;

  const ext = path.extname(base).toLowerCase();
  return allowedExtensions.has(ext);
}

function copyTree(sourceDir, targetDir) {
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      if (excludedDirs.has(entry.name) || entry.name.startsWith('.')) continue;
      fs.mkdirSync(targetPath, { recursive: true });
      copyTree(sourcePath, targetPath);
      continue;
    }

    if (!entry.isFile()) continue;
    if (!isAllowedFile(sourcePath)) continue;

    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(sourcePath, targetPath);
  }
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`Nao foi possivel localizar o bloco ${label}`);
  }
  return html.replace(pattern, replacement);
}

function patchHomeFile() {
  const homeFile = path.join(distDir, 'index.html');
  if (!fs.existsSync(homeFile)) {
    throw new Error('index.html nao encontrado em dist');
  }

  const sourceHtml = readText(homeFile);
  const eol = sourceHtml.includes('\r\n') ? '\r\n' : '\n';
  const toSourceEol = (text) => text.replace(/\r\n/g, '\n').replace(/\n/g, eol);
  const headerPartial = toSourceEol(readText(headerPartialFile)).trimEnd();
  const footerPartial = toSourceEol(readText(footerPartialFile)).trimEnd();

  const headerPattern = /^[ \t]*<nav class="nav" role="navigation" aria-label="Navegação principal">[\s\S]*?<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Menu mobile">[\s\S]*?<\/div>/m;
  const footerPattern = /^[ \t]*<footer class="footer" role="contentinfo">[\s\S]*?<\/footer>/m;
  const shellAssetsPattern = /^[ \t]*<link rel="stylesheet" href="\/assets\/site-shell\.css">\r?\n[ \t]*<script defer src="\/assets\/site-shell\.js"><\/script>\r?\n?/m;

  let html = sourceHtml;
  html = replaceOnce(html, headerPattern, headerPartial, 'header/home');
  html = replaceOnce(html, footerPattern, footerPartial, 'footer/home');
  html = html.replace(shellAssetsPattern, '');

  fs.writeFileSync(homeFile, html, 'utf8');
}

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

copyTree(root, distDir);
patchHomeFile();
execFileSync('node', [path.join(root, 'scripts', 'generate-sitemaps.mjs'), distDir], { stdio: 'inherit' });

console.log(`Build do site concluido: ${distDir}`);
