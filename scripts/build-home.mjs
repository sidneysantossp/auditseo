import fs from 'node:fs';
import path from 'node:path';
import { printLegacyNotice } from './legacy-notice.mjs';

printLegacyNotice('scripts/build-home.mjs', 'npm run dev');

const root = process.cwd();
const sourceFile = path.join(root, 'index.html');
const outputDir = path.join(root, 'dist');
const outputFile = path.join(outputDir, 'index.html');
const headerPartialFile = path.join(root, 'partials', 'header.home.html');
const footerPartialFile = path.join(root, 'partials', 'footer.home.html');

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`Nao foi possivel localizar o bloco ${label} em index.html`);
  }
  return html.replace(pattern, replacement);
}

function copyPathIfExists(relativePath) {
  const src = path.join(root, relativePath);
  const dest = path.join(outputDir, relativePath);
  if (!fs.existsSync(src)) return;

  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.cpSync(src, dest, { recursive: true });
    return;
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

const headerPattern = /^[ \t]*<nav class="nav" role="navigation" aria-label="Navegação principal">[\s\S]*?<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Menu mobile">[\s\S]*?<\/div>/m;
const footerPattern = /^[ \t]*<footer class="footer" role="contentinfo">[\s\S]*?<\/footer>/m;

const sourceHtml = readText(sourceFile);
const eol = sourceHtml.includes('\r\n') ? '\r\n' : '\n';
const toSourceEol = (text) => text.replace(/\r\n/g, '\n').replace(/\n/g, eol);
const headerPartial = toSourceEol(readText(headerPartialFile)).trimEnd();
const footerPartial = toSourceEol(readText(footerPartialFile)).trimEnd();
const shellAssetsPattern = /^[ \t]*<link rel="stylesheet" href="\/assets\/site-shell\.css">\r?\n[ \t]*<script defer src="\/assets\/site-shell\.js"><\/script>\r?\n?/m;

let builtHtml = sourceHtml;
builtHtml = replaceOnce(builtHtml, headerPattern, headerPartial, 'header/mobile');
builtHtml = replaceOnce(builtHtml, footerPattern, footerPartial, 'footer');
builtHtml = builtHtml.replace(shellAssetsPattern, '');

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, builtHtml, 'utf8');

// Copia assets necessarios para validar a home em /dist.
copyPathIfExists('assets');
copyPathIfExists('images');
copyPathIfExists('eu2.jpg');
copyPathIfExists('google6754be2bd8f61c83.html');

console.log(`Build da home concluido: ${outputFile}`);
