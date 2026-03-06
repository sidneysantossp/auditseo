import fs from 'node:fs';
import path from 'node:path';
import { blogCategories, blogPageSize } from '../src/data/blog-taxonomy';
import { siteMetadata } from '../src/data/site';
import { getAllBlogArticles, getBlogArchivePage, getBlogCategoryArticles } from '../src/lib/legacy-blog';

const distDir = path.join(process.cwd(), 'dist');
const errors: string[] = [];
const warnings: string[] = [];

function fail(message: string) {
  errors.push(message);
}

function warn(message: string) {
  warnings.push(message);
}

function readDistFile(relativePath: string) {
  const filepath = path.join(distDir, relativePath);
  if (!fs.existsSync(filepath)) {
    fail(`Arquivo gerado nao encontrado: ${relativePath}`);
    return '';
  }
  return fs.readFileSync(filepath, 'utf8');
}

function findMetaContent(html: string, attributeName: 'name' | 'property', attributeValue: string) {
  const escaped = attributeValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [
    new RegExp(`<meta[^>]*${attributeName}="${escaped}"[^>]*content="([^"]+)"`, 'i'),
    new RegExp(`<meta[^>]*content="([^"]+)"[^>]*${attributeName}="${escaped}"`, 'i')
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return match[1];
  }

  return '';
}

function findCanonical(html: string) {
  return html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] ?? '';
}

function extractJsonLdNodes(html: string) {
  const matches = Array.from(html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi));
  const nodes: Array<Record<string, unknown>> = [];

  for (const match of matches) {
    const raw = match[1]?.trim();
    if (!raw) continue;

    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        parsed.forEach((item) => {
          if (item && typeof item === 'object') nodes.push(item as Record<string, unknown>);
        });
        continue;
      }
      if (parsed && typeof parsed === 'object' && Array.isArray((parsed as Record<string, unknown>)['@graph'])) {
        ((parsed as Record<string, unknown>)['@graph'] as unknown[]).forEach((item) => {
          if (item && typeof item === 'object') nodes.push(item as Record<string, unknown>);
        });
        continue;
      }
      if (parsed && typeof parsed === 'object') nodes.push(parsed as Record<string, unknown>);
    } catch {
      fail('JSON-LD invalido encontrado em uma pagina do blog.');
    }
  }

  return nodes;
}

function getNodeTypes(nodes: Array<Record<string, unknown>>) {
  const types = new Set<string>();
  for (const node of nodes) {
    const type = node['@type'];
    if (Array.isArray(type)) {
      type.forEach((entry) => {
        if (typeof entry === 'string') types.add(entry);
      });
      continue;
    }
    if (typeof type === 'string') {
      types.add(type);
    }
  }
  return types;
}

function findNodeByType(nodes: Array<Record<string, unknown>>, expectedType: string) {
  return nodes.find((node) => {
    const type = node['@type'];
    return Array.isArray(type) ? type.includes(expectedType) : type === expectedType;
  });
}

function assertHasTypes(pageLabel: string, html: string, requiredTypes: string[]) {
  const nodeTypes = getNodeTypes(extractJsonLdNodes(html));
  for (const expectedType of requiredTypes) {
    if (!nodeTypes.has(expectedType)) {
      fail(`${pageLabel}: schema ausente para ${expectedType}`);
    }
  }
}

function assertCanonical(pageLabel: string, html: string, expectedPath: string) {
  const expected = new URL(expectedPath, siteMetadata.siteUrl).toString();
  const canonical = findCanonical(html);
  if (canonical !== expected) {
    fail(`${pageLabel}: canonical incorreta. Esperado ${expected}, obtido ${canonical || 'vazio'}`);
  }
}

function assertContainsLinks(pageLabel: string, html: string, paths: string[], minimum = paths.length) {
  const count = paths.filter((linkPath) => html.includes(`href="${linkPath}"`)).length;
  if (count < minimum) {
    fail(`${pageLabel}: links internos insuficientes. Encontrados ${count}, esperado ao menos ${minimum}.`);
  }
}

function assertBlogHome() {
  const html = readDistFile('blog/index.html');
  if (!html) return;

  assertCanonical('Blog home', html, '/blog/');
  assertHasTypes('Blog home', html, ['Organization', 'WebSite', 'WebPage', 'BreadcrumbList', 'Blog', 'CollectionPage', 'ItemList', 'FAQPage']);

  const keywords = findMetaContent(html, 'name', 'keywords');
  if (!keywords) fail('Blog home: meta keywords ausente.');

  assertContainsLinks(
    'Blog home',
    html,
    blogCategories.map((category) => `/blog/categoria/${category.slug}/`)
  );

  const collectionNode = findNodeByType(extractJsonLdNodes(html), 'CollectionPage');
  const hasPart = Array.isArray(collectionNode?.hasPart) ? collectionNode.hasPart.length : 0;
  if (hasPart === 0) {
    fail('Blog home: CollectionPage sem hasPart.');
  }
}

function assertCategoryPages() {
  for (const category of blogCategories) {
    const relative = `blog/categoria/${category.slug}/index.html`;
    const html = readDistFile(relative);
    if (!html) continue;

    assertCanonical(`Categoria ${category.slug}`, html, `/blog/categoria/${category.slug}/`);
    assertHasTypes(`Categoria ${category.slug}`, html, [
      'Organization',
      'WebSite',
      'WebPage',
      'BreadcrumbList',
      'Blog',
      'CollectionPage',
      'ItemList',
      'FAQPage',
      'DefinedTerm'
    ]);

    const keywords = findMetaContent(html, 'name', 'keywords');
    if (!keywords) {
      fail(`Categoria ${category.slug}: meta keywords ausente.`);
    }

    const expectedLinks = [
      ...category.serviceLinks.map((item) => item.path),
      ...category.nicheLinks.map((item) => item.path),
      ...getBlogCategoryArticles(category.slug).map((article) => article.canonicalPath)
    ];
    assertContainsLinks(`Categoria ${category.slug}`, html, expectedLinks, Math.min(expectedLinks.length, 6));

    const itemListNode = findNodeByType(extractJsonLdNodes(html), 'ItemList');
    const items = Array.isArray(itemListNode?.itemListElement) ? itemListNode.itemListElement.length : 0;
    if (items !== getBlogCategoryArticles(category.slug).length) {
      fail(`Categoria ${category.slug}: ItemList com ${items} itens, esperado ${getBlogCategoryArticles(category.slug).length}.`);
    }
  }
}

function assertPaginationPages() {
  const totalPages = Math.max(1, Math.ceil(getAllBlogArticles().length / blogPageSize));
  for (let page = 2; page <= totalPages; page += 1) {
    const archivePage = getBlogArchivePage(page);
    const html = readDistFile(`blog/pagina/${page}/index.html`);
    if (!html) continue;

    assertCanonical(`Paginacao ${page}`, html, `/blog/pagina/${page}/`);
    assertHasTypes(`Paginacao ${page}`, html, ['Organization', 'WebSite', 'WebPage', 'BreadcrumbList', 'Blog', 'CollectionPage', 'ItemList']);

    const robots = findMetaContent(html, 'name', 'robots');
    if (robots !== 'noindex, follow') {
      fail(`Paginacao ${page}: robots incorreto. Esperado "noindex, follow", obtido "${robots || 'vazio'}".`);
    }

    const itemListNode = findNodeByType(extractJsonLdNodes(html), 'ItemList');
    const items = Array.isArray(itemListNode?.itemListElement) ? itemListNode.itemListElement.length : 0;
    if (items !== archivePage.items.length) {
      fail(`Paginacao ${page}: ItemList com ${items} itens, esperado ${archivePage.items.length}.`);
    }
  }
}

function assertArticlePages() {
  for (const article of getAllBlogArticles()) {
    const relative = article.canonicalPath.replace(/^\//, '').replace(/\/$/, '/index.html');
    const html = readDistFile(relative);
    if (!html) continue;

    assertCanonical(`Artigo ${article.slug}`, html, article.canonicalPath);
    assertHasTypes(`Artigo ${article.slug}`, html, [
      'Organization',
      'WebSite',
      'WebPage',
      'BreadcrumbList',
      'Blog',
      'DefinedTerm',
      'Person',
      'BlogPosting'
    ]);

    if (article.faqItems.length > 0) {
      assertHasTypes(`Artigo ${article.slug}`, html, ['FAQPage']);
    }

    const keywords = findMetaContent(html, 'name', 'keywords');
    if (!keywords) {
      fail(`Artigo ${article.slug}: meta keywords ausente.`);
    }

    const articleSection = findMetaContent(html, 'property', 'article:section');
    if (articleSection !== article.category.title) {
      fail(
        `Artigo ${article.slug}: article:section incorreto. Esperado "${article.category.title}", obtido "${articleSection || 'vazio'}".`
      );
    }

    if (!html.includes(`href="/blog/categoria/${article.category.slug}/"`)) {
      fail(`Artigo ${article.slug}: link para hub da categoria ausente.`);
    }

    const relatedPaths = [...article.category.serviceLinks.map((item) => item.path), ...article.category.nicheLinks.map((item) => item.path)];
    assertContainsLinks(`Artigo ${article.slug}`, html, relatedPaths, Math.min(relatedPaths.length, 2));

    const nodes = extractJsonLdNodes(html);
    const blogPosting = findNodeByType(nodes, 'BlogPosting');
    if ((blogPosting?.url as string | undefined) !== new URL(article.canonicalPath, siteMetadata.siteUrl).toString()) {
      fail(`Artigo ${article.slug}: BlogPosting.url incorreta.`);
    }

    if ((blogPosting?.articleSection as string | undefined) !== article.category.title) {
      fail(`Artigo ${article.slug}: BlogPosting.articleSection incorreto.`);
    }

    const mentions = Array.isArray(blogPosting?.mentions) ? blogPosting.mentions.length : 0;
    if (mentions < 2) {
      warn(`Artigo ${article.slug}: BlogPosting com poucas referencias em mentions (${mentions}).`);
    }
  }
}

if (!fs.existsSync(distDir)) {
  fail('Diretorio dist ausente. Rode "npm run build" antes da auditoria de output do blog.');
}

assertBlogHome();
assertCategoryPages();
assertPaginationPages();
assertArticlePages();

console.log(`Artigos canonicos verificados no HTML gerado: ${getAllBlogArticles().length}`);
console.log(`Categorias verificadas no HTML gerado: ${blogCategories.length}`);

if (warnings.length > 0) {
  console.log('\nAvisos:');
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (errors.length > 0) {
  console.error('\nErros:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('\nAuditoria estrutural do blog concluida sem erros.');
