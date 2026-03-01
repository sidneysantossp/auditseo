import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputDir = path.join(root, 'to-do');
const outputJson = path.join(outputDir, 'mapeamento-paginas-cluster.json');
const outputCsv = path.join(outputDir, 'mapeamento-paginas-cluster.csv');
const outputMd = path.join(outputDir, 'mapeamento-paginas-cluster.md');

const dirs = ['servicos', 'nichos', 'saude', 'b2b', 'blog'];
const domain = 'https://www.auditseo.com.br';

function walkHtml(dirPath) {
  const out = [];
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkHtml(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      out.push(fullPath);
    }
  }
  return out;
}

function normalizePathname(pathname) {
  if (!pathname) return '/';
  let p = pathname.trim();
  if (!p.startsWith('/')) p = `/${p}`;
  p = p.replace(/\/+/g, '/');
  if (p !== '/' && !p.endsWith('/')) p += '/';
  return p;
}

function expectedPathFromFile(relativePath) {
  if (relativePath.endsWith('/index.html')) {
    return normalizePathname(relativePath.replace(/index\.html$/, ''));
  }
  return normalizePathname(relativePath.replace(/\.html$/, ''));
}

function extractTitle(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!m) return '';
  return m[1].replace(/\s+/g, ' ').trim();
}

function extractCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  return m ? m[1].trim() : '';
}

function canonicalPath(canonical) {
  if (!canonical) return '';
  try {
    const u = new URL(canonical);
    return normalizePathname(u.pathname);
  } catch {
    return normalizePathname(canonical);
  }
}

function extractSchemaTypes(html) {
  const scriptRegex = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const types = new Set();
  let m;
  while ((m = scriptRegex.exec(html)) !== null) {
    const block = m[1];
    const typeRegex = /"@type"\s*:\s*"([^"]+)"/g;
    let t;
    while ((t = typeRegex.exec(block)) !== null) {
      types.add(t[1].trim());
    }
  }
  return [...types].sort();
}

function classify(relativePath) {
  if (relativePath.startsWith('servicos/')) {
    if (relativePath === 'servicos/index.html') return 'service_hub';
    return 'service_main';
  }
  if (relativePath.startsWith('nichos/') || relativePath.startsWith('saude/') || relativePath.startsWith('b2b/')) {
    return 'service_niche';
  }
  if (relativePath.startsWith('blog/')) {
    if (relativePath === 'blog/index.html') return 'blog_hub';
    if (/blog\/blog-pagina-\d+\.html$/i.test(relativePath)) return 'blog_pagination';
    return 'blog_article';
  }
  return 'other';
}

function clusterForArticle(relativePath) {
  const slug = relativePath.toLowerCase();
  const inAny = (arr) => arr.some((k) => slug.includes(k));

  if (inAny(['ai-overviews', 'google-ai-mode'])) return 'AI Overviews';
  if (inAny(['chatgpt', 'claude', 'perplexity', 'gemini', 'llm', 'citacoes', 'marca', 'prompt', 'queries', 'geo'])) {
    return 'LLM Visibility';
  }
  if (inAny(['core-web-vitals', 'velocidade', 'javascript', 'estrutura-html', 'schema', 'robots-txt', 'sitemap', 'crawlers', 'auditoria-tecnica'])) {
    return 'Technical AI SEO';
  }
  if (inAny(['roi', 'benchmark', 'dashboard', 'analytics', 'metricas', 'roadmap', 'cases', 'relatorios'])) {
    return 'Strategy and Measurement';
  }
  if (inAny(['google-meu-negocio', 'seo-local'])) return 'Local SEO';
  return 'Commercial and SEO General';
}

function targetsForCluster(cluster) {
  const map = {
    'AI Overviews': [
      '/servicos/ai-overview-optimization/',
      '/servicos/aparecer-no-google-ai-overviews/',
      '/servicos/geo-generative-engine-optimization/'
    ],
    'LLM Visibility': [
      '/servicos/llm-brand-presence/',
      '/servicos/seo-para-ia/',
      '/servicos/aparecer-chatgpt-claude-perplexity/'
    ],
    'Technical AI SEO': [
      '/servicos/auditoria-seo/',
      '/servicos/seo-para-ia/',
      '/servicos/geo-generative-engine-optimization/'
    ],
    'Strategy and Measurement': [
      '/servicos/consultoria-seo/',
      '/servicos/llm-brand-presence/'
    ],
    'Local SEO': [
      '/servicos/seo-local/',
      '/servicos/google-meu-negocio/'
    ],
    'Commercial and SEO General': [
      '/servicos/consultoria-seo/',
      '/servicos/auditoria-seo/'
    ]
  };
  return map[cluster] || ['/servicos/consultoria-seo/'];
}

function csvEscape(text) {
  const value = String(text ?? '');
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function markdownTable(rows, headers) {
  const mdCell = (value) => String(value ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
  const head = `| ${headers.join(' | ')} |`;
  const sep = `| ${headers.map(() => '---').join(' | ')} |`;
  const body = rows.map((r) => `| ${headers.map((h) => mdCell(r[h])).join(' | ')} |`).join('\n');
  return [head, sep, body].join('\n');
}

const allFiles = dirs.flatMap((dir) => walkHtml(path.join(root, dir)));
const pages = allFiles.map((fullPath) => {
  const relativePath = path.relative(root, fullPath).replace(/\\/g, '/');
  const html = fs.readFileSync(fullPath, 'utf8');
  const title = extractTitle(html);
  const canonical = extractCanonical(html);
  const canonicalPathname = canonicalPath(canonical);
  const expectedPath = expectedPathFromFile(relativePath);
  const schemaTypes = extractSchemaTypes(html);
  const pageType = classify(relativePath);
  const canonicalStatus = !canonical
    ? 'missing'
    : canonicalPathname === expectedPath
      ? 'ok'
      : 'mismatch';

  const articleCluster = pageType === 'blog_article' ? clusterForArticle(relativePath) : '';
  const targetServices = pageType === 'blog_article' ? targetsForCluster(articleCluster) : [];

  return {
    file: relativePath,
    pageType,
    title,
    canonical,
    canonicalPath: canonicalPathname,
    expectedPath,
    canonicalStatus,
    schemaTypes,
    schemaCount: schemaTypes.length,
    articleCluster,
    recommendedTargets: targetServices
  };
}).sort((a, b) => a.file.localeCompare(b.file));

const summary = {
  total: pages.length,
  byType: pages.reduce((acc, p) => {
    acc[p.pageType] = (acc[p.pageType] || 0) + 1;
    return acc;
  }, {}),
  canonical: {
    ok: pages.filter((p) => p.canonicalStatus === 'ok').length,
    mismatch: pages.filter((p) => p.canonicalStatus === 'mismatch').length,
    missing: pages.filter((p) => p.canonicalStatus === 'missing').length
  },
  schemaMissing: pages.filter((p) => p.schemaCount === 0).map((p) => p.file)
};

const payload = { generatedAt: new Date().toISOString(), domain, summary, pages };

const csvHeaders = [
  'file',
  'pageType',
  'title',
  'canonical',
  'canonicalStatus',
  'schemaCount',
  'schemaTypes',
  'articleCluster',
  'recommendedTargets'
];
const csvRows = pages.map((p) => [
  p.file,
  p.pageType,
  p.title,
  p.canonical,
  p.canonicalStatus,
  p.schemaCount,
  p.schemaTypes.join(';'),
  p.articleCluster,
  p.recommendedTargets.join(';')
].map(csvEscape).join(','));

const serviceMain = pages.filter((p) => p.pageType === 'service_main');
const serviceNiche = pages.filter((p) => p.pageType === 'service_niche');
const blogArticles = pages.filter((p) => p.pageType === 'blog_article');

const markdown = [
  '# Mapeamento de Paginas - Cluster IA, Servicos e Blog',
  '',
  `Gerado em: ${payload.generatedAt}`,
  `Dominio de referencia: ${domain}`,
  '',
  '## Resumo',
  '',
  `- Total de paginas mapeadas: ${summary.total}`,
  `- Servicos principais: ${summary.byType.service_main || 0}`,
  `- Servicos nichados/segmentos: ${summary.byType.service_niche || 0}`,
  `- Artigos de blog: ${summary.byType.blog_article || 0}`,
  `- Canonical OK: ${summary.canonical.ok}`,
  `- Canonical mismatch: ${summary.canonical.mismatch}`,
  `- Canonical ausente: ${summary.canonical.missing}`,
  '',
  '## Servicos Principais',
  '',
  markdownTable(
    serviceMain.map((p) => ({
      File: p.file,
      Title: p.title,
      Canonical: p.canonical,
      CanonicalStatus: p.canonicalStatus,
      SchemaTypes: p.schemaTypes.join(', ')
    })),
    ['File', 'Title', 'Canonical', 'CanonicalStatus', 'SchemaTypes']
  ),
  '',
  '## Servicos Nichados e Segmentos',
  '',
  markdownTable(
    serviceNiche.map((p) => ({
      File: p.file,
      Title: p.title,
      Canonical: p.canonical,
      CanonicalStatus: p.canonicalStatus,
      SchemaTypes: p.schemaTypes.join(', ')
    })),
    ['File', 'Title', 'Canonical', 'CanonicalStatus', 'SchemaTypes']
  ),
  '',
  '## Artigos de Blog e Linkagem Recomendada para Servicos',
  '',
  markdownTable(
    blogArticles.map((p) => ({
      File: p.file,
      Cluster: p.articleCluster,
      CanonicalStatus: p.canonicalStatus,
      LinkTargets: p.recommendedTargets.join(', ')
    })),
    ['File', 'Cluster', 'CanonicalStatus', 'LinkTargets']
  ),
  '',
  '## Regras de Linkagem Interna (Execucao)',
  '',
  '- Cada artigo deve apontar para 1 servico principal do mesmo cluster no terco superior da pagina.',
  '- Cada artigo deve apontar para 1 servico comercial no CTA final.',
  '- Cada servico principal deve receber links de pelo menos 6 artigos do cluster.',
  '- Cada pagina nichada deve receber links de pelo menos 2 artigos relevantes + 1 servico principal.',
  '- Manter anchors semanticos e variados: termo principal, variante semantica e anchor de beneficio.',
  '',
  '## Arquivos Gerados',
  '',
  `- JSON: ${path.relative(root, outputJson)}`,
  `- CSV: ${path.relative(root, outputCsv)}`,
  `- Markdown: ${path.relative(root, outputMd)}`
].join('\n');

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputJson, JSON.stringify(payload, null, 2), 'utf8');
fs.writeFileSync(outputCsv, `${csvHeaders.join(',')}\n${csvRows.join('\n')}\n`, 'utf8');
fs.writeFileSync(outputMd, markdown, 'utf8');

console.log(`Mapeamento concluido: ${path.relative(root, outputMd)}`);
