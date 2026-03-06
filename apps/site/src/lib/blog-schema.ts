import { siteMetadata } from '../data/site';
import type { BlogCategoryDefinition } from '../data/blog-taxonomy';

export const blogRootPath = '/blog/';
export const blogEntityId = `${siteMetadata.siteUrl}/blog/#blog`;
export const blogTaxonomySetId = `${siteMetadata.siteUrl}/blog/#taxonomy`;

export function getBlogCategoryPath(slug: string) {
  return `/blog/categoria/${slug}/`;
}

export function getBlogCategoryEntityId(slug: string) {
  return `${siteMetadata.siteUrl}${getBlogCategoryPath(slug)}#category`;
}

export function buildBlogEntity() {
  return {
    '@type': 'Blog',
    '@id': blogEntityId,
    url: `${siteMetadata.siteUrl}/blog/`,
    name: 'Blog AUDITSEO',
    description:
      'Base editorial da AUDITSEO com artigos sobre SEO, AI Overviews, LLM SEO, analytics, arquitetura tecnica e estrategia de crescimento organico.',
    inLanguage: siteMetadata.locale,
    publisher: {
      '@id': `${siteMetadata.siteUrl}/#organization`
    },
    isPartOf: {
      '@id': `${siteMetadata.siteUrl}/#website`
    }
  };
}

export function buildBlogCategoryEntity(category: BlogCategoryDefinition) {
  return {
    '@type': 'DefinedTerm',
    '@id': getBlogCategoryEntityId(category.slug),
    name: category.title,
    description: category.heroSubtitle,
    url: `${siteMetadata.siteUrl}${getBlogCategoryPath(category.slug)}`,
    inDefinedTermSet: blogTaxonomySetId
  };
}
