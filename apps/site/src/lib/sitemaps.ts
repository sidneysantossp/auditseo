import { siteMetadata } from '../data/site';
import { getCaseStudies, getFreeTools } from './content-collections';
import { blogCategories } from '../data/blog-taxonomy';
import { getAllBlogArticles, getBlogCategoryArticles } from './legacy-blog';

export interface SitemapUrlEntry {
  path: string;
  lastmod?: string;
}

export interface SitemapFileDefinition {
  slug: string;
  path: string;
  entries: SitemapUrlEntry[];
}

const siteUrl = siteMetadata.siteUrl.replace(/\/$/, '');

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toAbsoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

function normalizeDate(value?: string) {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

async function getPagesEntries() {
  const caseStudies = await getCaseStudies();
  const freeTools = await getFreeTools();

  const pagesEntries: SitemapUrlEntry[] = [
    { path: '/' },
    { path: '/agencia-de-seo/' },
    { path: '/sobre/' },
    { path: '/metodologia/' },
    { path: '/fontes-e-metodos/' },
    { path: '/politica-editorial/' },
    { path: '/contato/' },
    { path: '/autores/sidney-santos/' },
    { path: '/cases/' },
    ...caseStudies.map((caseStudy) => ({ path: `/cases/${caseStudy.slug}/` })),
    { path: '/ferramentas/' },
    ...freeTools.map((tool) => ({ path: `/ferramentas/${tool.slug}/` }))
  ];

  return pagesEntries;
}

const serviceEntries: SitemapUrlEntry[] = [
  { path: '/servicos/' },
  { path: '/servicos/consultoria-seo/' },
  { path: '/servicos/auditoria-seo/' },
  { path: '/servicos/seo-local/' },
  { path: '/servicos/google-meu-negocio/' },
  { path: '/servicos/ai-overview-optimization/' },
  { path: '/servicos/llm-brand-presence/' },
  { path: '/servicos/seo-para-clinicas-medicas/' },
  { path: '/servicos/seo-para-dermatologistas/' },
  { path: '/servicos/seo-para-odontologia/' },
  { path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/' },
  { path: '/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/' },
  { path: '/servicos/seo-local-para-dermatologistas-em-sao-paulo/' },
  { path: '/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/' },
  { path: '/servicos/seo-local-para-odontologia-em-sao-paulo/' },
  { path: '/servicos/google-meu-negocio-para-odontologia-em-sao-paulo/' },
  { path: '/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/' },
  { path: '/servicos/seo-local-para-clinicas-medicas-em-campinas/' },
  { path: '/servicos/seo-local-para-clinicas-medicas-em-sao-jose-dos-campos/' },
  { path: '/servicos/seo-para-escritorios-de-advocacia/' },
  { path: '/servicos/consultoria-seo-para-energia-solar/' },
  { path: '/servicos/consultoria-seo-para-software-b2b/' },
  { path: '/servicos/seo-para-escritorios-de-advocacia-em-sao-paulo/' },
  { path: '/servicos/consultoria-seo-para-energia-solar-em-sao-paulo/' },
  { path: '/servicos/consultoria-seo-para-software-b2b-em-sao-paulo/' },
  { path: '/servicos/consultoria-seo-para-empresas-no-interior-de-sao-paulo/' },
  { path: '/servicos/seo-local-para-clinicas-medicas-em-rio-de-janeiro/' },
  { path: '/servicos/google-meu-negocio-para-clinicas-medicas-em-rio-de-janeiro/' },
  { path: '/servicos/seo-local-para-clinicas-medicas-em-belo-horizonte/' },
  { path: '/servicos/google-meu-negocio-para-clinicas-medicas-em-belo-horizonte/' },
  { path: '/servicos/seo-local-para-clinicas-medicas-em-curitiba/' },
  { path: '/servicos/google-meu-negocio-para-clinicas-medicas-em-curitiba/' },
  { path: '/servicos/seo-local-para-clinicas-medicas-em-brasilia/' },
  { path: '/servicos/google-meu-negocio-para-clinicas-medicas-em-brasilia/' },
  { path: '/servicos/seo-local-para-clinicas-medicas-em-porto-alegre/' },
  { path: '/servicos/google-meu-negocio-para-clinicas-medicas-em-porto-alegre/' },
  { path: '/servicos/seo-local-para-odontologia-em-porto-alegre/' },
  { path: '/servicos/google-meu-negocio-para-odontologia-em-porto-alegre/' },
  { path: '/servicos/seo-local-para-dermatologistas-em-porto-alegre/' },
  { path: '/servicos/google-meu-negocio-para-dermatologistas-em-porto-alegre/' },
  { path: '/servicos/seo-para-escritorios-de-advocacia-em-porto-alegre/' },
  { path: '/servicos/consultoria-seo-para-software-b2b-em-porto-alegre/' },
  { path: '/servicos/consultoria-seo-para-energia-solar-em-porto-alegre/' },
  { path: '/servicos/seo-local-para-odontologia-em-curitiba/' },
  { path: '/servicos/google-meu-negocio-para-odontologia-em-curitiba/' },
  { path: '/servicos/seo-local-para-odontologia-em-brasilia/' },
  { path: '/servicos/google-meu-negocio-para-odontologia-em-brasilia/' },
  { path: '/servicos/seo-local-para-dermatologistas-em-curitiba/' },
  { path: '/servicos/google-meu-negocio-para-dermatologistas-em-curitiba/' },
  { path: '/servicos/seo-local-para-dermatologistas-em-brasilia/' },
  { path: '/servicos/google-meu-negocio-para-dermatologistas-em-brasilia/' },
  { path: '/servicos/seo-para-escritorios-de-advocacia-em-curitiba/' },
  { path: '/servicos/seo-para-escritorios-de-advocacia-em-brasilia/' },
  { path: '/servicos/consultoria-seo-para-software-b2b-em-curitiba/' },
  { path: '/servicos/consultoria-seo-para-software-b2b-em-brasilia/' },
  { path: '/servicos/seo-local-para-odontologia-em-rio-de-janeiro/' },
  { path: '/servicos/google-meu-negocio-para-odontologia-em-rio-de-janeiro/' },
  { path: '/servicos/seo-local-para-odontologia-em-belo-horizonte/' },
  { path: '/servicos/google-meu-negocio-para-odontologia-em-belo-horizonte/' },
  { path: '/servicos/seo-local-para-dermatologistas-em-rio-de-janeiro/' },
  { path: '/servicos/google-meu-negocio-para-dermatologistas-em-rio-de-janeiro/' },
  { path: '/servicos/seo-local-para-dermatologistas-em-belo-horizonte/' },
  { path: '/servicos/google-meu-negocio-para-dermatologistas-em-belo-horizonte/' },
  { path: '/servicos/seo-para-escritorios-de-advocacia-em-rio-de-janeiro/' },
  { path: '/servicos/seo-para-escritorios-de-advocacia-em-belo-horizonte/' },
  { path: '/servicos/consultoria-seo-para-software-b2b-em-rio-de-janeiro/' },
  { path: '/servicos/consultoria-seo-para-software-b2b-em-belo-horizonte/' },
  { path: '/servicos/consultoria-seo-para-energia-solar-em-rio-de-janeiro/' },
  { path: '/servicos/consultoria-seo-para-energia-solar-em-belo-horizonte/' }
];

const clusterEntries: SitemapUrlEntry[] = [
  { path: '/nichos/' },
  { path: '/nichos/clinicas-medicas/' },
  { path: '/nichos/dermatologistas/' },
  { path: '/nichos/energia-solar/' },
  { path: '/nichos/escritorios-advocacia/' },
  { path: '/cidades/' },
  { path: '/cidades/sao-paulo/' },
  { path: '/cidades/campinas/' },
  { path: '/cidades/rio-de-janeiro/' },
  { path: '/cidades/belo-horizonte/' },
  { path: '/cidades/curitiba/' },
  { path: '/cidades/brasilia/' },
  { path: '/cidades/porto-alegre/' },
  { path: '/lp/ai-overview-optimization-clinicas-medicas-sao-paulo/' }
];

const blogEntries: SitemapUrlEntry[] = [
  {
    path: '/blog/',
    lastmod: normalizeDate(getAllBlogArticles()[0]?.modifiedTime)
  },
  ...blogCategories.map((category) => ({
    path: `/blog/categoria/${category.slug}/`,
    lastmod: normalizeDate(getBlogCategoryArticles(category.slug)[0]?.modifiedTime)
  })),
  ...getAllBlogArticles().map((article) => ({
    path: article.canonicalPath,
    lastmod: normalizeDate(article.modifiedTime)
  }))
];

export async function getSitemapFiles() {
  const pagesEntries = await getPagesEntries();

  return [
    {
      slug: 'pages',
      path: '/sitemaps/pages.xml',
      entries: pagesEntries
    },
    {
      slug: 'services',
      path: '/sitemaps/services.xml',
      entries: serviceEntries
    },
    {
      slug: 'clusters',
      path: '/sitemaps/clusters.xml',
      entries: clusterEntries
    },
    {
      slug: 'blog',
      path: '/sitemaps/blog.xml',
      entries: blogEntries
    }
  ] satisfies SitemapFileDefinition[];
}

export async function getSitemapFileBySlug(slug: string) {
  const sitemapFiles = await getSitemapFiles();
  return sitemapFiles.find((file) => file.slug === slug) ?? null;
}

export function buildUrlset(entries: SitemapUrlEntry[]) {
  const body = entries
    .map((entry) => {
      const lines = ['  <url>', `    <loc>${escapeXml(toAbsoluteUrl(entry.path))}</loc>`];
      const normalizedLastmod = normalizeDate(entry.lastmod);
      if (normalizedLastmod) {
        lines.push(`    <lastmod>${normalizedLastmod}</lastmod>`);
      }
      lines.push('  </url>');
      return lines.join('\n');
    })
    .join('\n');

  return ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', body, '</urlset>'].join('\n');
}

export async function buildSitemapIndex() {
  const sitemapFiles = await getSitemapFiles();
  const body = sitemapFiles
    .map((file) => {
      const lastmod = file.entries
        .map((entry) => normalizeDate(entry.lastmod))
        .filter((value): value is string => Boolean(value))
        .sort()
        .reverse()[0];

      const lines = ['  <sitemap>', `    <loc>${escapeXml(toAbsoluteUrl(file.path))}</loc>`];
      if (lastmod) {
        lines.push(`    <lastmod>${lastmod}</lastmod>`);
      }
      lines.push('  </sitemap>');
      return lines.join('\n');
    })
    .join('\n');

  return ['<?xml version="1.0" encoding="UTF-8"?>', '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', body, '</sitemapindex>'].join('\n');
}
