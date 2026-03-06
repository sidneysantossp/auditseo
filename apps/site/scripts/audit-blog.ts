import { blogCategories, getBlogCategoryForArticle } from '../src/data/blog-taxonomy';
import { canonicalBlogArticleRedirects } from '../src/data/blog-editorial';
import { getAllBlogArticles, getLegacyArticleBySlug } from '../src/lib/legacy-blog';

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function collectDuplicates<T>(items: T[], selector: (item: T) => string) {
  const buckets = new Map<string, T[]>();
  for (const item of items) {
    const key = normalize(selector(item));
    if (!key) continue;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key)!.push(item);
  }
  return [...buckets.entries()].filter(([, bucket]) => bucket.length > 1);
}

const articles = getAllBlogArticles();
const errors: string[] = [];
const warnings: string[] = [];

const duplicateTitles = collectDuplicates(articles, (article) => article.title);
const duplicateSeoTitles = collectDuplicates(articles, (article) => article.seoTitle);
const duplicateDescriptions = collectDuplicates(articles, (article) => article.description);
const duplicateCanonicals = collectDuplicates(articles, (article) => article.canonicalPath);

for (const [value, bucket] of duplicateTitles) {
  errors.push(`Titulos canonicos duplicados: "${value}" -> ${bucket.map((article) => article.slug).join(', ')}`);
}
for (const [value, bucket] of duplicateSeoTitles) {
  errors.push(`SEO titles duplicados: "${value}" -> ${bucket.map((article) => article.slug).join(', ')}`);
}
for (const [value, bucket] of duplicateDescriptions) {
  errors.push(`Descriptions duplicadas: "${value}" -> ${bucket.map((article) => article.slug).join(', ')}`);
}
for (const [value, bucket] of duplicateCanonicals) {
  errors.push(`Canonicals duplicadas: "${value}" -> ${bucket.map((article) => article.slug).join(', ')}`);
}

for (const article of articles) {
  if (!getBlogCategoryForArticle(article.slug)) {
    errors.push(`Artigo sem categoria explicita na taxonomia: ${article.slug}`);
  }
  if (!article.keywords.length) {
    warnings.push(`Artigo sem keywords explicitas: ${article.slug}`);
  }
  if (article.description.length < 110) {
    warnings.push(`Description curta demais: ${article.slug}`);
  }
  if (article.excerpt.length < 90) {
    warnings.push(`Excerpt curto demais: ${article.slug}`);
  }
}

for (const [slug] of Object.entries(canonicalBlogArticleRedirects)) {
  if (getLegacyArticleBySlug(slug)) {
    errors.push(`Slug que deveria ser alias canonico ainda resolve como artigo: ${slug}`);
  }
}

for (const category of blogCategories) {
  if (!category.articleSlugs.length) {
    errors.push(`Categoria sem artigos: ${category.slug}`);
  }

  const seen = new Set<string>();
  for (const slug of category.articleSlugs) {
    if (seen.has(slug)) {
      errors.push(`Slug repetido dentro da categoria ${category.slug}: ${slug}`);
    }
    seen.add(slug);

    if (canonicalBlogArticleRedirects[slug]) {
      errors.push(`Categoria ${category.slug} referencia um slug que deveria redirecionar: ${slug}`);
    }

    const article = getLegacyArticleBySlug(slug);
    if (!article) {
      errors.push(`Categoria ${category.slug} referencia artigo inexistente: ${slug}`);
    }
  }

  const featured = getLegacyArticleBySlug(category.featuredSlug);
  if (!featured) {
    errors.push(`Featured slug invalido em ${category.slug}: ${category.featuredSlug}`);
  } else if (featured.category.slug !== category.slug) {
    errors.push(`Featured slug fora da categoria ${category.slug}: ${category.featuredSlug}`);
  }

  for (const slug of category.pillarSlugs) {
    const article = getLegacyArticleBySlug(slug);
    if (!article) {
      errors.push(`Pillar slug invalido em ${category.slug}: ${slug}`);
      continue;
    }
    if (article.category.slug !== category.slug) {
      errors.push(`Pillar slug fora da categoria ${category.slug}: ${slug}`);
    }
  }
}

console.log(`Artigos canonicos auditados: ${articles.length}`);
console.log(`Categorias auditadas: ${blogCategories.length}`);

if (warnings.length) {
  console.log('\nAvisos:');
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length) {
  console.error('\nErros:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('\nAuditoria editorial do blog concluida sem erros.');
