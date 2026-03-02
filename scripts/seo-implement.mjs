import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const DOMAIN = 'https://www.auditseo.com.br';
const SHELL_VERSION = '20260302d';
const SHELL_CSS_URL = `/assets/site-shell.css?v=${SHELL_VERSION}`;
const SHELL_JS_URL = `/assets/site-shell.js?v=${SHELL_VERSION}`;
const INCLUDE_DIRS = ['servicos', 'nichos', 'saude', 'b2b', 'blog', 'agencia-de-seo', 'sobre'];
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

const nicheTargets = [
  '/nichos/clinicas-medicas/',
  '/nichos/escritorios-advocacia/',
  '/saude/dermatologistas/',
  '/b2b/energia-solar/'
];

const emptyPageMeta = {
  'nichos/academias.html': {
    title: 'SEO para Academias | Captação de Alunos e Visibilidade Local | AUDITSEO',
    h1: 'SEO para Academias',
    description: 'Estratégia de SEO para academias com foco em captação local, Google Maps e presença em buscas com IA.'
  },
  'nichos/clinicas-odontologicas.html': {
    title: 'SEO para Clínicas Odontológicas | Marketing Digital para Dentistas | AUDITSEO',
    h1: 'SEO para Clínicas Odontológicas',
    description: 'Plano de SEO para clínicas odontológicas com foco em intenção local, autoridade e geração de consultas.'
  },
  'saude/cardiologistas.html': {
    title: 'SEO para Cardiologistas | Autoridade Digital para Especialistas | AUDITSEO',
    h1: 'SEO para Cardiologistas',
    description: 'Estratégia de SEO para cardiologistas com foco em reputação médica, conteúdo técnico e captação local.'
  },
  'saude/cirurgioes-plasticos.html': {
    title: 'SEO para Cirurgiões Plásticos | Crescimento Orgânico e Marca | AUDITSEO',
    h1: 'SEO para Cirurgiões Plásticos',
    description: 'SEO para cirurgiões plásticos com foco em autoridade, demanda qualificada e presença em buscas com IA.'
  },
  'saude/oftalmologistas.html': {
    title: 'SEO para Oftalmologistas | Tráfego Qualificado e Autoridade | AUDITSEO',
    h1: 'SEO para Oftalmologistas',
    description: 'Plano de SEO para oftalmologistas com foco em intenção de busca, confiança e visibilidade local.'
  },
  'saude/ortopedistas.html': {
    title: 'SEO para Ortopedistas | Estratégia Digital para Clínicas e Especialistas | AUDITSEO',
    h1: 'SEO para Ortopedistas',
    description: 'SEO para ortopedistas com foco em autoridade, conteúdo técnico e aquisição de pacientes por busca orgânica.'
  },
  'saude/psiquiatras.html': {
    title: 'SEO para Psiquiatras | Presença Digital com Confiança e Ética | AUDITSEO',
    h1: 'SEO para Psiquiatras',
    description: 'Estratégia de SEO para psiquiatras com foco em confiabilidade, intenção de busca e conversão qualificada.'
  },
  'saude/urologistas.html': {
    title: 'SEO para Urologistas | Crescimento de Consultas por Busca Orgânica | AUDITSEO',
    h1: 'SEO para Urologistas',
    description: 'SEO para urologistas com foco em autoridade temática, presença local e geração de demanda qualificada.'
  },
  'blog/benchmark-competitivo-ia.html': {
    title: 'Benchmark Competitivo em IA | Como Mapear Presença da Marca nos LLMs | AUDITSEO',
    h1: 'Benchmark Competitivo em IA',
    description: 'Guia prático para benchmark competitivo em IA com foco em citações de marca, share of voice e oportunidades de ganho.'
  },
  'blog/crawlers-ia.html': {
    title: 'Crawlers de IA | Como Bots de LLM Descobrem e Usam Seu Conteúdo | AUDITSEO',
    h1: 'Crawlers de IA e Descoberta de Conteúdo',
    description: 'Entenda como crawlers de IA funcionam e como estruturar seu site para ser rastreado e citado por LLMs.'
  }
};

function walkHtml(dirPath) {
  const out = [];
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkHtml(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      out.push(full);
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

function ensureTitle(html, title) {
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  }
  return html.replace(/<\/head>/i, `    <title>${title}</title>\n</head>`);
}

function ensureMetaTag(html, regex, tag) {
  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace(/<\/head>/i, `    ${tag}\n</head>`);
}

function ensureCanonical(html, url) {
  const canonicalTag = `<link rel="canonical" href="${url}">`;
  const canonicalRegex = /<link[^>]+rel=["']canonical["'][^>]*>/i;
  if (canonicalRegex.test(html)) return html.replace(canonicalRegex, canonicalTag);
  return html.replace(/<\/head>/i, `    ${canonicalTag}\n</head>`);
}

function ensureHreflang(html, url) {
  const ptTag = `<link rel="alternate" hreflang="pt-BR" href="${url}">`;
  const xTag = `<link rel="alternate" hreflang="x-default" href="${url}">`;
  html = ensureMetaTag(html, /<link[^>]+hreflang=["']pt-BR["'][^>]*>/i, ptTag);
  html = ensureMetaTag(html, /<link[^>]+hreflang=["']x-default["'][^>]*>/i, xTag);
  return html;
}

function slugTitle(file) {
  const rel = file.replace(/\\/g, '/');
  const base = rel.split('/').pop().replace('.html', '');
  if (base === 'index') {
    const parent = rel.split('/').slice(-2, -1)[0] || 'home';
    return parent === 'home' ? 'AUDITSEO | Search Intelligence AI' : `${parent.replace(/-/g, ' ')} | AUDITSEO`;
  }
  const cleaned = base.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  return `${cleaned} | AUDITSEO`;
}

function pageTypeFromFile(file) {
  if (file.startsWith('blog/') && file !== 'blog/index.html' && !/blog\/blog-pagina-\d+\.html$/i.test(file)) return 'Article';
  if (file.startsWith('servicos/') || file.startsWith('nichos/') || file.startsWith('saude/') || file.startsWith('b2b/')) return 'Service';
  return 'WebPage';
}

function schemaBlock(file, title, url) {
  const type = pageTypeFromFile(file);
  if (type === 'Article') {
    return `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"${title.replace(/"/g, '\\"')}","url":"${url}","publisher":{"@type":"Organization","name":"AUDITSEO","url":"${DOMAIN}/"},"inLanguage":"pt-BR"}</script>`;
  }
  if (type === 'Service') {
    return `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Service","name":"${title.replace(/"/g, '\\"')}","url":"${url}","provider":{"@type":"Organization","name":"AUDITSEO","url":"${DOMAIN}/"},"inLanguage":"pt-BR"}</script>`;
  }
  return `<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"${title.replace(/"/g, '\\"')}","url":"${url}","isPartOf":{"@type":"WebSite","url":"${DOMAIN}/"},"inLanguage":"pt-BR"}</script>`;
}

function ensureSchema(html, file, title, url) {
  if (/<script[^>]+type=["']application\/ld\+json["'][^>]*>/i.test(html)) return html;
  return html.replace(/<\/head>/i, `    ${schemaBlock(file, title, url)}\n</head>`);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJson(text) {
  return String(text).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function isBlogArticle(file) {
  return file.startsWith('blog/') && file !== 'blog/index.html' && !/blog\/blog-pagina-\d+\.html$/i.test(file);
}

function extractFirstH1(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!m) return '';
  return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function breadcrumbCurrentTitle(file, html, titleMeta) {
  const h1 = extractFirstH1(html);
  if (h1) return h1;
  if (titleMeta) return titleMeta.replace(/\s*\|\s*AUDITSEO.*$/i, '').trim();
  const slug = file.split('/').pop().replace(/\.html$/i, '');
  return slug
    .split('-')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ');
}

function breadcrumbVisualBlock(currentTitle) {
  return `<nav class="auditseo-breadcrumb" aria-label="Breadcrumb">
  <a href="${DOMAIN}/">Home</a>
  <span aria-hidden="true">›</span>
  <a href="${DOMAIN}/blog/">Blog</a>
  <span aria-hidden="true">›</span>
  <span class="current">${escapeHtml(currentTitle)}</span>
</nav>`;
}

function breadcrumbSchemaBlock(currentTitle, url) {
  return `<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${DOMAIN}/"},{"@type":"ListItem","position":2,"name":"Blog","item":"${DOMAIN}/blog/"},{"@type":"ListItem","position":3,"name":"${escapeJson(currentTitle)}","item":"${url}"}]}</script>`;
}

function ensureBreadcrumbSchema(html, file, titleMeta, url) {
  if (!isBlogArticle(file)) return html;
  if (/"@type"\s*:\s*"BreadcrumbList"/i.test(html)) return html;

  const currentTitle = breadcrumbCurrentTitle(file, html, titleMeta);
  return html.replace(/<\/head>/i, `    ${breadcrumbSchemaBlock(currentTitle, url)}\n</head>`);
}

function ensureVisualBreadcrumb(html, file, titleMeta) {
  if (!isBlogArticle(file)) return html;
  if (/<nav[^>]+aria-label=["']Breadcrumb["'][^>]*>/i.test(html)) return html;
  if (/class=["'][^"']*\bauditseo-breadcrumb\b[^"']*["']/i.test(html)) return html;
  if (/class=["'][^"']*\bbreadcrumbs\b[^"']*["']/i.test(html)) return html;

  const currentTitle = breadcrumbCurrentTitle(file, html, titleMeta);
  const block = breadcrumbVisualBlock(currentTitle);

  if (/<div[^>]+class=["'][^"']*article-header-content[^"']*["'][^>]*>/i.test(html)) {
    return html.replace(/(<div[^>]+class=["'][^"']*article-header-content[^"']*["'][^>]*>)/i, `$1\n${block}\n`);
  }
  if (/<header[^>]+class=["'][^"']*article-header[^"']*["'][^>]*>/i.test(html)) {
    return html.replace(/(<header[^>]+class=["'][^"']*article-header[^"']*["'][^>]*>)/i, `$1\n${block}\n`);
  }
  if (/<main[^>]*>/i.test(html)) {
    return html.replace(/(<main[^>]*>)/i, `$1\n${block}\n`);
  }
  if (/<body[^>]*>/i.test(html)) {
    return html.replace(/(<body[^>]*>)/i, `$1\n${block}\n`);
  }
  return `${block}\n${html}`;
}

function clusterForArticle(file) {
  const slug = file.toLowerCase();
  const inAny = (arr) => arr.some((k) => slug.includes(k));
  if (inAny(['ai-overviews', 'google-ai-mode'])) return 'AI Overviews';
  if (inAny(['chatgpt', 'claude', 'perplexity', 'gemini', 'llm', 'citacoes', 'prompt', 'queries', 'geo'])) return 'LLM Visibility';
  if (inAny(['core-web-vitals', 'velocidade', 'javascript', 'estrutura-html', 'schema', 'robots-txt', 'sitemap', 'crawlers', 'auditoria-tecnica'])) return 'Technical AI SEO';
  if (inAny(['roi', 'benchmark', 'dashboard', 'analytics', 'metricas', 'roadmap', 'cases', 'relatorios'])) return 'Strategy and Measurement';
  if (inAny(['google-meu-negocio', 'seo-local'])) return 'Local SEO';
  return 'Commercial and SEO General';
}

function isServiceRelatedFile(file) {
  return (
    file.startsWith('servicos/') ||
    file.startsWith('nichos/') ||
    file.startsWith('saude/') ||
    file.startsWith('b2b/')
  );
}

function labelFromPath(target) {
  const slug = target.replace(/^\/|\/$/g, '').split('/').pop() || '';
  return slug
    .split('-')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ');
}

function targetsForCluster(cluster) {
  const map = {
    'AI Overviews': ['/servicos/ai-overview-optimization/', '/servicos/aparecer-no-google-ai-overviews/', '/servicos/geo-generative-engine-optimization/'],
    'LLM Visibility': ['/servicos/llm-brand-presence/', '/servicos/seo-para-ia/', '/servicos/aparecer-chatgpt-claude-perplexity/'],
    'Technical AI SEO': ['/servicos/auditoria-seo/', '/servicos/seo-para-ia/', '/servicos/geo-generative-engine-optimization/'],
    'Strategy and Measurement': ['/servicos/consultoria-seo/', '/servicos/llm-brand-presence/'],
    'Local SEO': ['/servicos/seo-local/', '/servicos/google-meu-negocio/'],
    'Commercial and SEO General': ['/servicos/consultoria-seo/', '/servicos/auditoria-seo/']
  };
  return map[cluster] || ['/servicos/consultoria-seo/'];
}

function pickNicheTarget(file) {
  let hash = 0;
  for (const c of file) hash = (hash * 31 + c.charCodeAt(0)) >>> 0;
  return nicheTargets[hash % nicheTargets.length];
}

function injectClusterLinks(html, file) {
  if (!isBlogArticle(file)) return html;

  const cluster = clusterForArticle(file);
  const serviceTargets = targetsForCluster(cluster);
  const nicheTarget = pickNicheTarget(file);
  const block = `<!-- SEO_CLUSTER_LINKS_START -->\n<section class="seo-cluster-links" aria-label="Links internos estratégicos">\n  <h2>Serviços relacionados a este conteúdo</h2>\n  <p>Se você quer aplicar esta estratégia no seu negócio, comece por estes serviços da AUDITSEO:</p>\n  <ul>\n    ${serviceTargets.map((target) => `<li><a href="${target}">${labelFromPath(target)}</a></li>`).join('\n    ')}\n  </ul>\n  <p>Para aplicação setorial, veja também: <a href="${nicheTarget}">${labelFromPath(nicheTarget)}</a></p>\n</section>\n<!-- SEO_CLUSTER_LINKS_END -->`;

  html = html.replace(/\s*<!-- SEO_CLUSTER_LINKS_START -->[\s\S]*?<!-- SEO_CLUSTER_LINKS_END -->\s*/g, '\n');

  if (/<footer\b/i.test(html)) return html.replace(/<footer\b/i, `\n${block}\n<footer`);
  if (/<\/body>/i.test(html)) return html.replace(/<\/body>/i, `\n${block}\n</body>`);
  return `${html}\n${block}\n`;
}

function serviceLinkTargets(file) {
  const slug = file.toLowerCase();
  const isSegment = slug.startsWith('nichos/') || slug.startsWith('saude/') || slug.startsWith('b2b/');
  const isAI = ['ai-overview', 'llm', 'chatgpt', 'claude', 'gemini', 'perplexity', 'seo-para-ia', 'geo-generative']
    .some((k) => slug.includes(k));

  if (isSegment) {
    return ['/servicos/seo-local/', '/servicos/google-meu-negocio/', '/servicos/consultoria-seo/', '/servicos/seo-para-ia/'];
  }

  if (isAI) {
    return ['/servicos/seo-para-ia/', '/servicos/ai-overview-optimization/', '/servicos/llm-brand-presence/', '/servicos/geo-generative-engine-optimization/'];
  }

  if (slug.includes('auditoria')) {
    return ['/servicos/consultoria-seo/', '/servicos/seo-para-ia/', '/servicos/ai-overview-optimization/'];
  }

  if (slug.includes('consultoria')) {
    return ['/servicos/auditoria-seo/', '/servicos/seo-local/', '/servicos/seo-para-ia/'];
  }

  if (slug.includes('seo-local') || slug.includes('google-meu-negocio')) {
    return ['/servicos/consultoria-seo/', '/servicos/auditoria-seo/', '/servicos/seo-para-ia/'];
  }

  return ['/servicos/consultoria-seo/', '/servicos/auditoria-seo/', '/servicos/seo-para-ia/'];
}

function serviceBlogTargets(file) {
  const slug = file.toLowerCase();
  const isSegment = slug.startsWith('nichos/') || slug.startsWith('saude/') || slug.startsWith('b2b/');
  const isAI = ['ai-overview', 'llm', 'chatgpt', 'claude', 'gemini', 'perplexity', 'seo-para-ia', 'geo-generative']
    .some((k) => slug.includes(k));

  if (isSegment) {
    return ['/blog/google-meu-negocio-guia-completo/', '/blog/como-escolher-agencia-seo/', '/blog/guia-definitivo-seo-2026/'];
  }

  if (isAI) {
    return ['/blog/o-que-sao-ai-overviews/', '/blog/como-aparecer-ai-overviews/', '/blog/o-que-e-llm-seo/'];
  }

  if (slug.includes('auditoria')) {
    return ['/blog/auditoria-tecnica-ai-seo/', '/blog/core-web-vitals-guia/', '/blog/schema-markup-ai-overviews/'];
  }

  if (slug.includes('consultoria')) {
    return ['/blog/estrategia-seo-ia/', '/blog/roadmap-seo-ia/', '/blog/seo-ia-vs-tradicional/'];
  }

  return ['/blog/guia-definitivo-seo-2026/', '/blog/estrategia-seo-ia/', '/blog/seo-ia-vs-tradicional/'];
}

function ensureServiceInternalLinks(html, file) {
  if (!isServiceRelatedFile(file)) return html;

  // Páginas já estruturadas com sessão própria de relacionados não precisam de bloco extra.
  if (/class=["'][^"']*\brelated-section\b[^"']*["']/i.test(html)) return html;

  const current = expectedPath(file);
  const serviceTargets = serviceLinkTargets(file).filter((target) => target !== current).slice(0, 3);
  const blogTargets = serviceBlogTargets(file).slice(0, 3);

  const block = `<!-- SERVICE_CLUSTER_LINKS_START -->\n<section class="service-cluster-links" aria-label="Links internos estratégicos de serviços" style="margin:48px auto 0;max-width:980px;padding:28px;border:1px solid rgba(127,127,127,.25);border-radius:14px;background:rgba(127,127,127,.08)">\n  <h2 style="margin:0 0 10px;">Páginas relacionadas para avançar nesta estratégia</h2>\n  <p style="margin:0 0 12px;">Serviços complementares:</p>\n  <ul>\n    ${serviceTargets.map((target) => `<li><a href="${target}">${labelFromPath(target)}</a></li>`).join('\n    ')}\n  </ul>\n  <p style="margin:14px 0 12px;">Artigos recomendados do blog:</p>\n  <ul>\n    ${blogTargets.map((target) => `<li><a href="${target}">${labelFromPath(target)}</a></li>`).join('\n    ')}\n  </ul>\n</section>\n<!-- SERVICE_CLUSTER_LINKS_END -->`;

  html = html.replace(/\s*<!-- SERVICE_CLUSTER_LINKS_START -->[\s\S]*?<!-- SERVICE_CLUSTER_LINKS_END -->\s*/g, '\n');

  if (/<footer\b/i.test(html)) return html.replace(/<footer\b/i, `\n${block}\n<footer`);
  if (/<\/main>/i.test(html)) return html.replace(/<\/main>/i, `\n${block}\n</main>`);
  if (/<\/body>/i.test(html)) return html.replace(/<\/body>/i, `\n${block}\n</body>`);
  return `${html}\n${block}\n`;
}

function ensureSiteShell(html, file) {
  if (!isBlogArticle(file) && !/blog\/blog-pagina-\d+\.html$/i.test(file)) return html;

  const cssTag = `<link rel="stylesheet" href="${SHELL_CSS_URL}">`;
  const jsTag = `<script defer src="${SHELL_JS_URL}"></script>`;
  const cssRegex = /<link[^>]+href=["']\/assets\/site-shell\.css(?:\?[^"']*)?["'][^>]*>/i;
  const jsRegex = /<script[^>]+src=["']\/assets\/site-shell\.js(?:\?[^"']*)?["'][^>]*><\/script>/i;

  if (cssRegex.test(html)) {
    html = html.replace(cssRegex, cssTag);
  } else {
    html = html.replace(/<\/head>/i, `    ${cssTag}\n</head>`);
  }

  if (jsRegex.test(html)) {
    html = html.replace(jsRegex, jsTag);
  } else {
    html = html.replace(/<\/head>/i, `    ${jsTag}\n</head>`);
  }
  return html;
}

function createFullPage(file, url) {
  const meta = emptyPageMeta[file];
  const title = meta?.title || slugTitle(file);
  const h1 = meta?.h1 || title.replace(/\s*\|\s*AUDITSEO.*$/, '');
  const description = meta?.description || `Conteúdo de ${h1} na AUDITSEO.`;
  const isBlog = file.startsWith('blog/');
  const mainCta = isBlog ? '/servicos/consultoria-seo/' : '/servicos/seo-para-ia/';
  const breadcrumbTitle = isBlog ? breadcrumbCurrentTitle(file, '', title) : '';
  const breadcrumbNav = isBlog ? `      ${breadcrumbVisualBlock(breadcrumbTitle)}\n` : '';
  const breadcrumbSchema = isBlog ? `    ${breadcrumbSchemaBlock(breadcrumbTitle, url)}\n` : '';

  const shellAssets = isBlog
    ? `    <link rel="stylesheet" href="${SHELL_CSS_URL}">\n    <script defer src="${SHELL_JS_URL}"></script>\n`
    : '';

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="canonical" href="${url}">
    <link rel="alternate" hreflang="pt-BR" href="${url}">
    <link rel="alternate" hreflang="x-default" href="${url}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="AUDITSEO">
    ${schemaBlock(file, title, url)}
${breadcrumbSchema}
${shellAssets}    
    <style>
      body{font-family:Arial,sans-serif;max-width:980px;margin:0 auto;padding:32px 18px;line-height:1.7;color:${isBlog ? '#f2f2f2' : '#1d1d1d'};background:${isBlog ? '#0a0a0a' : '#fff'}}
      h1{font-size:2rem;margin-bottom:12px}
      .box{border:1px solid ${isBlog ? 'rgba(255,255,255,.2)' : '#ddd'};border-radius:10px;padding:20px;background:${isBlog ? '#111' : '#fafafa'}}
      a{color:${isBlog ? '#d4a574' : '#0a58ca'}}
    </style>
</head>
<body>
    <main>
${breadcrumbNav}
      <h1>${h1}</h1>
      <p>${description}</p>
      <div class="box">
        <h2>Próximos passos recomendados</h2>
        <ul>
          <li><a href="${mainCta}">Ver serviço principal relacionado</a></li>
          <li><a href="/servicos/auditoria-seo/">Solicitar auditoria SEO técnica</a></li>
          <li><a href="/blog/">Explorar conteúdos no blog</a></li>
        </ul>
      </div>
    </main>
</body>
</html>
`;
}

function applyForFile(file) {
  const absolute = path.join(root, file);
  let html = fs.existsSync(absolute) ? fs.readFileSync(absolute, 'utf8') : '';
  const url = expectedUrl(file);
  const clean = html.trim();

  if (!clean || clean.length < 20) {
    html = createFullPage(file, url);
    fs.writeFileSync(absolute, html, 'utf8');
    return { file, created: true };
  }

  const titleMeta = emptyPageMeta[file]?.title || extractTitle(html) || slugTitle(file);

  html = ensureTitle(html, titleMeta);
  html = ensureMetaTag(
    html,
    /<meta[^>]+name=["']robots["'][^>]*>/i,
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">'
  );
  html = ensureCanonical(html, url);
  html = ensureHreflang(html, url);
  html = ensureMetaTag(html, /<meta[^>]+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${url}">`);
  html = ensureSchema(html, file, titleMeta, url);
  html = ensureBreadcrumbSchema(html, file, titleMeta, url);
  html = ensureSiteShell(html, file);
  html = ensureVisualBreadcrumb(html, file, titleMeta);
  html = injectClusterLinks(html, file);
  html = ensureServiceInternalLinks(html, file);

  fs.writeFileSync(absolute, html, 'utf8');
  return { file, created: false };
}

function extractTitle(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
}

const files = [];
for (const dir of INCLUDE_DIRS) {
  files.push(...walkHtml(path.join(root, dir)).map((f) => path.relative(root, f).replace(/\\/g, '/')));
}
for (const f of TOP_LEVEL_FILES) {
  if (fs.existsSync(path.join(root, f))) files.push(f);
}

const uniqueFiles = [...new Set(files)].sort();
const results = uniqueFiles.map(applyForFile);

const created = results.filter((r) => r.created).map((r) => r.file);
console.log(`SEO implementado em ${results.length} arquivos.`);
if (created.length) {
  console.log(`Arquivos preenchidos do zero: ${created.join(', ')}`);
}
