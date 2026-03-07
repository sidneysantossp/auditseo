import fs from 'node:fs';
import path from 'node:path';
import { sidneySantos } from '../data/authors';
import { blogEditorialOverrides, canonicalBlogArticleRedirects } from '../data/blog-editorial';
import {
  commercialSupportArticles,
  getCommercialSupportArticleToc,
  renderCommercialSupportArticleHtml,
  type CommercialSupportArticleSource
} from '../data/commercial-support-articles';
import {
  blogCategories,
  blogFeaturedArticleSlug,
  blogPageSize,
  getBlogCategoryBySlug,
  getBlogCategoryForArticle,
  type BlogCategoryDefinition,
  type BlogCategoryFaq
} from '../data/blog-taxonomy';
import { legacyBlogSlugRedirects, legacyPathRedirects } from '../data/legacy-aliases';

const blogDir = path.join(process.cwd(), 'src', 'legacy', 'blog');
const publicDir = path.join(process.cwd(), 'public');

export interface LegacyBlogArticle {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  canonicalPath: string;
  contentHtml: string;
  imagePath: string;
  publishedTime: string;
  modifiedTime: string;
  publishedLabel: string;
  readingTime: number;
  readingTimeLabel: string;
  legacySection: string;
  category: BlogCategoryDefinition;
  keywords: string[];
  tableOfContents: Array<{
    id: string;
    label: string;
  }>;
  faqItems: BlogCategoryFaq[];
  wordCount: number;
  author: typeof sidneySantos;
}

export interface BlogArchivePage {
  currentPage: number;
  totalPages: number;
  items: LegacyBlogArticle[];
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  previousPagePath: string | null;
  nextPagePath: string | null;
  pageLinks: Array<{
    label: string;
    path: string;
    isCurrent: boolean;
  }>;
}

const slugCache = Array.from(
  new Set(
    fs
      .readdirSync(blogDir)
      .filter((filename: string) => filename.endsWith('.html'))
      .filter((filename: string) => filename !== 'index.html')
      .filter((filename: string) => !/^blog-pagina-\d+\.html$/.test(filename))
      .map((filename: string) => filename.replace(/\.html$/, ''))
  )
).sort();
const canonicalSlugCache = slugCache.filter((slug) => !canonicalBlogArticleRedirects[slug]);
const commercialSupportSlugCache = commercialSupportArticles.map((article) => article.slug).sort();

let articleCache: LegacyBlogArticle[] | null = null;

function normalizeInternalUrl(value: string) {
  return value
    .replace('https://www.auditseo.com.br', '')
    .replace('http://www.auditseo.com.br', '')
    .replace('https://auditseo.com.br', '')
    .replace('http://auditseo.com.br', '');
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

function stripTags(value: string) {
  return decodeHtmlEntities(value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function normalizeImagePath(value: string | undefined) {
  if (!value) {
    return '/images/agencia-de-seo.png';
  }

  let normalized = normalizeInternalUrl(value);
  if (normalized.startsWith('/blog/images/')) {
    normalized = normalized.replace('/blog/images/', '/images/');
  }
  if (!normalized.startsWith('/')) {
    normalized = `/${normalized}`;
  }

  const targetPath = path.join(publicDir, normalized.replace(/^\//, ''));
  return fs.existsSync(targetPath) ? normalized : '/images/agencia-de-seo.png';
}

function rewriteLegacyLinks(contentHtml: string) {
  let normalized = contentHtml;

  for (const [from, to] of Object.entries(legacyPathRedirects)) {
    normalized = normalized.split(`href="${from}"`).join(`href="${to}"`);
    normalized = normalized.split(`href="${from.replace(/\/$/, '.html')}"`).join(`href="${to}"`);
  }

  return normalized;
}

function extractJsonLdBlocks(html: string) {
  const matches = Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g));
  return matches
    .map((match) => match[1]?.trim())
    .filter(Boolean)
    .flatMap((value) => {
      try {
        const parsed = JSON.parse(value as string);
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch {
        return [];
      }
    });
}

function getFallbackCategory(slug: string) {
  if (/ai-overviews|google-ai-mode|queries-ai-overviews/.test(slug)) {
    return getBlogCategoryBySlug('ai-overviews');
  }
  if (/chatgpt|claude|llm|treinar-ia-reconhecer-marca|fontes-dados-ll/.test(slug)) {
    return getBlogCategoryBySlug('llm-seo');
  }
  if (/schema|sitemap|robots|core-web-vitals|auditoria|html|javascript|velocidade|crawlers/.test(slug)) {
    return getBlogCategoryBySlug('seo-tecnico');
  }
  if (/prompt|paragrafos|listas|definicoes|queries-ia-otimizar|linguagem-natural/.test(slug)) {
    return getBlogCategoryBySlug('prompt-optimization');
  }
  if (/analytics|metricas|monitorar|relatorios|alertas|brand-mentions|benchmark|dashboard|roi|ferramentas-monitoramento/.test(slug)) {
    return getBlogCategoryBySlug('analytics');
  }
  return getBlogCategoryBySlug('estrategia');
}

function normalizeCategory(slug: string) {
  return getBlogCategoryForArticle(slug) ?? getFallbackCategory(slug) ?? blogCategories[0];
}

function extractContentHtml(html: string, slug: string) {
  const richStart = html.indexOf('<header class="article-header">');
  const richEnd = richStart !== -1 ? html.indexOf('<footer class="footer"', richStart) : -1;
  const simpleMainStart = html.indexOf('<main');
  const simpleMainOpenEnd = simpleMainStart !== -1 ? html.indexOf('>', simpleMainStart) : -1;
  const simpleMainEnd = simpleMainOpenEnd !== -1 ? html.indexOf('</main>', simpleMainOpenEnd) : -1;
  const clusterStart = html.indexOf('<!-- SEO_CLUSTER_LINKS_START -->');
  const clusterEnd = clusterStart !== -1 ? html.indexOf('<!-- SEO_CLUSTER_LINKS_END -->', clusterStart) : -1;

  let contentHtml = '';

  if (richStart !== -1 && richEnd !== -1) {
    contentHtml = html.slice(richStart, richEnd).trim();
  } else if (simpleMainOpenEnd !== -1 && simpleMainEnd !== -1) {
    const simpleContent = html.slice(simpleMainOpenEnd + 1, simpleMainEnd).trim();
    const clusterContent =
      clusterStart !== -1 && clusterEnd !== -1
        ? html.slice(clusterStart, clusterEnd + '<!-- SEO_CLUSTER_LINKS_END -->'.length).trim()
        : '';

    contentHtml = ['<article class="legacy-article-fallback">', simpleContent, '</article>', clusterContent]
      .filter(Boolean)
      .join('\n');
  } else {
    throw new Error(`Estrutura de artigo legado invalida para ${slug}`);
  }

  contentHtml = contentHtml.replace(/href="https:\/\/www\.auditseo\.com\.br\//g, 'href="/');
  contentHtml = contentHtml.replace(/src="https:\/\/www\.auditseo\.com\.br\//g, 'src="/');
  contentHtml = contentHtml.replace(/src="\/assets\/images\//g, 'src="/images/');
  contentHtml = contentHtml.replace(/src="\/blog\/images\//g, 'src="/images/');

  return rewriteLegacyLinks(contentHtml);
}

function formatPublishedLabel(dateString: string, fallbackLabel: string) {
  if (!dateString) return fallbackLabel;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return fallbackLabel;
  return new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(date);
}

function buildFallbackKeywords(article: LegacyBlogArticle) {
  return Array.from(
    new Set(
      [
        article.slug.replace(/-/g, ' '),
        article.title,
        article.category.title,
        ...article.category.categoryKeywords
      ]
        .map((value) => normalizeInternalUrl(String(value)).trim().toLowerCase())
        .filter(Boolean)
    )
  ).slice(0, 6);
}

function uniqueArticles(items: LegacyBlogArticle[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });
}

function applyEditorialOverride(article: LegacyBlogArticle) {
  const override = blogEditorialOverrides[article.slug];
  const title = override?.title ?? article.title;
  const seoTitle = override?.seoTitle ?? article.seoTitle;
  const description = override?.description ?? article.description;
  const excerpt = override?.excerpt ?? article.excerpt;
  const keywords = override?.keywords ?? (article.keywords.length > 0 ? article.keywords : buildFallbackKeywords(article));

  return {
    ...article,
    title,
    seoTitle,
    description,
    excerpt,
    keywords
  };
}

function buildCommercialSupportArticle(source: CommercialSupportArticleSource): LegacyBlogArticle {
  const category = getBlogCategoryBySlug(source.categorySlug) ?? normalizeCategory(source.slug);
  const contentHtml = renderCommercialSupportArticleHtml(source, {
    categoryTitle: category.title,
    authorImagePath: sidneySantos.imagePath
  });

  return applyEditorialOverride({
    slug: source.slug,
    title: source.title,
    seoTitle: source.seoTitle,
    description: source.description,
    excerpt: source.excerpt,
    canonicalPath: `/blog/${source.slug}/`,
    contentHtml,
    imagePath: normalizeImagePath(source.imagePath),
    publishedTime: source.publishedTime,
    modifiedTime: source.modifiedTime,
    publishedLabel: formatPublishedLabel(source.publishedTime, 'Março 2026'),
    readingTime: source.readingTime,
    readingTimeLabel: `${source.readingTime} minutos`,
    legacySection: source.badge,
    category,
    keywords: source.keywords,
    tableOfContents: getCommercialSupportArticleToc(source),
    faqItems: source.faqItems,
    wordCount: stripTags(contentHtml)
      .split(/\s+/)
      .filter(Boolean).length,
    author: sidneySantos
  } satisfies LegacyBlogArticle);
}

function getLegacyFileArticles() {
  return canonicalSlugCache
    .map((slug) => {
      const filepath = path.join(blogDir, `${slug}.html`);
      const html = fs.readFileSync(filepath, 'utf8');
      const jsonLdBlocks = extractJsonLdBlocks(html);
      const articleSchema = jsonLdBlocks.find((node) => {
        const type = Array.isArray((node as Record<string, unknown>)['@type'])
          ? ((node as Record<string, unknown>)['@type'] as string[]).join(',')
          : ((node as Record<string, unknown>)['@type'] as string | undefined);
        return type?.includes('Article');
      }) as Record<string, unknown> | undefined;
      const faqSchema = jsonLdBlocks.find((node) => {
        const type = Array.isArray((node as Record<string, unknown>)['@type'])
          ? ((node as Record<string, unknown>)['@type'] as string[]).join(',')
          : ((node as Record<string, unknown>)['@type'] as string | undefined);
        return type === 'FAQPage';
      }) as Record<string, unknown> | undefined;

      const titleMatch = html.match(/<h1 class="article-title">([\s\S]*?)<\/h1>/);
      const seoTitleMatch = html.match(/<title>([^<]+)<\/title>/);
      const descriptionMatch = html.match(/<meta name="description" content="([^"]+)"/);
      const keywordsMatch = html.match(/<meta name="keywords" content="([^"]+)"/);
      const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
      const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
      const excerptMatch = html.match(/<p class="article-excerpt">([\s\S]*?)<\/p>/);
      const publishedTimeMatch = html.match(/<meta property="article:published_time" content="([^"]+)"/);
      const modifiedTimeMatch = html.match(/"dateModified":"([^"]+)"/);
      const sectionMatch = html.match(/<meta property="article:section" content="([^"]+)"/);
      const visibleCategoryMatch = html.match(/<span class="article-category">([\s\S]*?)<\/span>/);
      const publishedLabelMatch = html.match(/<strong>Publicado<\/strong>\s*([^<]+)/);
      const readingTimeMatch = html.match(/<strong>Tempo de leitura<\/strong>\s*([^<]+)/);
      const tocListMatch = html.match(/<ul class="toc-list">([\s\S]*?)<\/ul>/);
      const schemaImage = typeof articleSchema?.image === 'string'
        ? articleSchema.image
        : (articleSchema?.image as Record<string, unknown> | undefined)?.url;
      const faqItems = Array.isArray(faqSchema?.mainEntity)
        ? (faqSchema.mainEntity as Record<string, unknown>[])
            .map((item) => ({
              question: String(item.name ?? '').trim(),
              answer: String((item.acceptedAnswer as Record<string, unknown> | undefined)?.text ?? '').trim()
            }))
            .filter((item) => item.question && item.answer)
        : [];

      const canonicalPath = canonicalMatch
        ? normalizeInternalUrl(canonicalMatch[1]) || `/blog/${slug}/`
        : `/blog/${slug}/`;
      const contentHtml = extractContentHtml(html, slug);
      const publishedTime = publishedTimeMatch?.[1] ?? String(articleSchema?.datePublished ?? '2026-01-01');
      const modifiedTime = modifiedTimeMatch?.[1] ?? String(articleSchema?.dateModified ?? publishedTime);
      const readingTimeLabel = stripTags(readingTimeMatch?.[1] ?? '8 minutos');
      const readingTime = Number.parseInt(readingTimeLabel, 10) || 8;
      const publishedLabel = stripTags(publishedLabelMatch?.[1] ?? '') || formatPublishedLabel(publishedTime, 'Janeiro 2026');
      const tableOfContents = Array.from((tocListMatch?.[1] ?? '').matchAll(/<a href="#([^"]+)">([\s\S]*?)<\/a>/g)).map((match) => ({
        id: match[1],
        label: stripTags(match[2])
      }));
      const category = normalizeCategory(slug);
      const keywords = (keywordsMatch?.[1] ?? '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
      const wordCount = stripTags(contentHtml)
        .split(/\s+/)
        .filter(Boolean).length;

      return applyEditorialOverride({
        slug,
        title: stripTags(titleMatch?.[1] ?? slug),
        seoTitle: stripTags(seoTitleMatch?.[1] ?? titleMatch?.[1] ?? slug),
        description: descriptionMatch?.[1] ?? 'Artigo da AUDITSEO sobre SEO, AI search e arquitetura de conteudo.',
        excerpt: stripTags(excerptMatch?.[1] ?? descriptionMatch?.[1] ?? ''),
        canonicalPath,
        contentHtml,
        imagePath: normalizeImagePath((ogImageMatch?.[1] as string | undefined) ?? (schemaImage as string | undefined)),
        publishedTime,
        modifiedTime,
        publishedLabel,
        readingTime,
        readingTimeLabel,
        legacySection: stripTags(visibleCategoryMatch?.[1] ?? sectionMatch?.[1] ?? category.title),
        category,
        keywords,
        tableOfContents,
        faqItems,
        wordCount,
        author: sidneySantos
      } satisfies LegacyBlogArticle);
    });
}

function getArticles() {
  if (articleCache) return articleCache;

  articleCache = uniqueArticles([
    ...commercialSupportArticles.map((article) => buildCommercialSupportArticle(article)),
    ...getLegacyFileArticles()
  ])
    .sort((left, right) => {
      const leftTime = new Date(left.publishedTime).getTime();
      const rightTime = new Date(right.publishedTime).getTime();
      if (leftTime !== rightTime) return rightTime - leftTime;
      return left.title.localeCompare(right.title, 'pt-BR');
    });

  return articleCache;
}

export function getLegacyArticleSlugs() {
  return Array.from(
    new Set([...canonicalSlugCache, ...commercialSupportSlugCache, ...Object.keys(legacyBlogSlugRedirects)])
  ).sort();
}

export function getLegacyArticleBySlug(slug: string): LegacyBlogArticle | null {
  return getArticles().find((article) => article.slug === slug) ?? null;
}

export function getAllBlogArticles() {
  return getArticles();
}

export function getFeaturedBlogArticle() {
  return getLegacyArticleBySlug(blogFeaturedArticleSlug) ?? getArticles()[0] ?? null;
}

export function getBlogCategoryArticles(categorySlug: string) {
  return getArticles().filter((article) => article.category.slug === categorySlug);
}

export function getRelatedBlogArticles(slug: string, limit = 3) {
  const current = getLegacyArticleBySlug(slug);
  if (!current) return [];

  const prioritySlugs = [current.category.featuredSlug, ...current.category.pillarSlugs].filter((item) => item !== slug);
  const priorityArticles = prioritySlugs
    .map((articleSlug) => getLegacyArticleBySlug(articleSlug))
    .filter((article): article is LegacyBlogArticle => Boolean(article))
    .filter((article) => article.slug !== slug);
  const sameCategory = getBlogCategoryArticles(current.category.slug).filter((article) => article.slug !== slug);
  const relatedByKeyword = getArticles().filter((article) => {
    if (article.slug === slug || article.category.slug === current.category.slug) return false;
    return article.keywords.some((keyword) => current.keywords.includes(keyword));
  });

  return uniqueArticles([...priorityArticles, ...sameCategory, ...relatedByKeyword]).slice(0, limit);
}

export function getBlogArchivePage(page: number, pageSize = blogPageSize): BlogArchivePage {
  const items = getArticles();
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * pageSize;
  const pageItems = items.slice(start, start + pageSize);

  return {
    currentPage: safePage,
    totalPages,
    items: pageItems,
    hasPreviousPage: safePage > 1,
    hasNextPage: safePage < totalPages,
    previousPagePath: safePage === 2 ? '/blog/' : safePage > 2 ? `/blog/pagina/${safePage - 1}/` : null,
    nextPagePath: safePage < totalPages ? `/blog/pagina/${safePage + 1}/` : null,
    pageLinks: Array.from({ length: totalPages }, (_, index) => {
      const targetPage = index + 1;
      return {
        label: String(targetPage),
        path: targetPage === 1 ? '/blog/' : `/blog/pagina/${targetPage}/`,
        isCurrent: targetPage === safePage
      };
    })
  };
}

export function getBlogCategoryStats(categorySlug: string) {
  const articles = getBlogCategoryArticles(categorySlug);
  const totalReadingTime = articles.reduce((sum, article) => sum + article.readingTime, 0);
  const averageReadingTime = articles.length > 0 ? Math.round(totalReadingTime / articles.length) : 0;
  const newestArticle = articles[0] ?? null;

  return {
    articleCount: articles.length,
    averageReadingTime,
    newestArticle
  };
}

export const blogCategoryPlaceholders = blogCategories.map((category) => ({
  slug: category.slug,
  title: category.title
}));
