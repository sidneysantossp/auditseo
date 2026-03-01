import fs from 'node:fs';
import path from 'node:path';

const DOMAIN = 'https://www.auditseo.com.br';
const SITE_DIRS = ['servicos', 'nichos', 'saude', 'b2b', 'blog', 'agencia-de-seo', 'sobre'];
const TOP_LEVEL_FILES = [
  'index.html',
  'conteudos.html',
  'como-atrair-clientes-pela-internet.html',
  'futuro-do-seo.html',
  'por-que-contratar-consultoria-seo.html',
  'seo-demora-quanto-tempo.html',
  'seo-funciona.html',
  'seo-ou-trafego-pago.html',
  'seo-para-pequenas-empresas.html',
  'ni.html'
];

const servicePrefixes = ['servicos/', 'nichos/', 'saude/', 'b2b/'];
const blogPaginationRegex = /blog\/blog-pagina-\d+\.html$/i;

const targetDir = path.resolve(process.cwd(), process.argv[2] || '.');

function walkHtml(dirPath) {
  const out = [];
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkHtml(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      out.push(fullPath);
    }
  }
  return out;
}

function expectedPath(file) {
  const rel = file.replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.replace(/index\.html$/, '')}`;
  return `/${rel.replace(/\.html$/, '/')}`;
}

function expectedUrl(file) {
  return `${DOMAIN}${expectedPath(file)}`;
}

function formatDate(date) {
  return new Date(date).toISOString().slice(0, 10);
}

function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function classify(file) {
  if (file === 'index.html') return 'home';
  if (file.startsWith('blog/')) return file === 'blog/index.html' ? 'blog_hub' : 'blog_article';
  if (servicePrefixes.some((prefix) => file.startsWith(prefix))) return 'service';
  return 'page';
}

function metaForFile(file) {
  const type = classify(file);
  if (type === 'home') return { changefreq: 'weekly', priority: '1.0' };
  if (type === 'blog_hub') return { changefreq: 'weekly', priority: '0.8' };
  if (type === 'blog_article') return { changefreq: 'monthly', priority: '0.7' };
  if (type === 'service') return { changefreq: 'monthly', priority: '0.9' };
  return { changefreq: 'monthly', priority: '0.6' };
}

function buildUrlEntry(file) {
  const stat = fs.statSync(path.join(targetDir, file));
  const { changefreq, priority } = metaForFile(file);
  const loc = expectedUrl(file);
  const lastmod = formatDate(stat.mtime);

  return [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>'
  ].join('\n');
}

function buildUrlset(entries) {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
    ''
  ].join('\n');
}

function buildSitemapIndex(lastmodDate) {
  const files = ['sitemap-blog.xml', 'sitemap-services.xml', 'sitemap-pages.xml'];
  const rows = files.map((file) => {
    const loc = `${DOMAIN}/${file}`;
    return [
      '  <sitemap>',
      `    <loc>${escapeXml(loc)}</loc>`,
      `    <lastmod>${lastmodDate}</lastmod>`,
      '  </sitemap>'
    ].join('\n');
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...rows,
    '</sitemapindex>',
    ''
  ].join('\n');
}

function gatherFiles() {
  const files = [];
  for (const dir of SITE_DIRS) {
    const found = walkHtml(path.join(targetDir, dir)).map((filePath) =>
      path.relative(targetDir, filePath).replace(/\\/g, '/')
    );
    files.push(...found);
  }
  for (const file of TOP_LEVEL_FILES) {
    if (fs.existsSync(path.join(targetDir, file))) files.push(file);
  }
  return [...new Set(files)].sort();
}

const allFiles = gatherFiles().filter((file) => !blogPaginationRegex.test(file));
const blogFiles = allFiles.filter((file) => file.startsWith('blog/') && !blogPaginationRegex.test(file));
const serviceFiles = allFiles.filter((file) => servicePrefixes.some((prefix) => file.startsWith(prefix)));
const pageFiles = allFiles.filter((file) => !blogFiles.includes(file) && !serviceFiles.includes(file));

const blogEntries = blogFiles.map(buildUrlEntry);
const serviceEntries = serviceFiles.map(buildUrlEntry);
const pageEntries = pageFiles.map(buildUrlEntry);
const lastmodDate = formatDate(new Date());

fs.writeFileSync(path.join(targetDir, 'sitemap-blog.xml'), buildUrlset(blogEntries), 'utf8');
fs.writeFileSync(path.join(targetDir, 'sitemap-services.xml'), buildUrlset(serviceEntries), 'utf8');
fs.writeFileSync(path.join(targetDir, 'sitemap-pages.xml'), buildUrlset(pageEntries), 'utf8');
fs.writeFileSync(path.join(targetDir, 'sitemap.xml'), buildSitemapIndex(lastmodDate), 'utf8');

console.log(
  `Sitemaps gerados em ${targetDir}: blog=${blogEntries.length}, services=${serviceEntries.length}, pages=${pageEntries.length}`
);
