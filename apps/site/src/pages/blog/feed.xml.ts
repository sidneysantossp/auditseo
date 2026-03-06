import type { APIRoute } from 'astro';
import { siteMetadata } from '../../data/site';
import { getAllBlogArticles } from '../../lib/legacy-blog';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const articles = getAllBlogArticles().slice(0, 50);
  const siteUrl = siteMetadata.siteUrl.replace(/\/$/, '');
  const feedUrl = `${siteUrl}/blog/feed.xml`;
  const lastBuildDate = articles[0]?.modifiedTime ? new Date(articles[0].modifiedTime).toUTCString() : new Date().toUTCString();

  const items = articles
    .map((article) => {
      const url = `${siteUrl}${article.canonicalPath}`;
      const categories = [article.category.title, ...article.keywords.slice(0, 3)]
        .map((value) => `<category>${escapeXml(value)}</category>`)
        .join('');

      return `\n    <item>\n      <title>${escapeXml(article.title)}</title>\n      <link>${url}</link>\n      <guid isPermaLink="true">${url}</guid>\n      <description>${escapeXml(article.description)}</description>\n      <pubDate>${new Date(article.publishedTime).toUTCString()}</pubDate>${categories}\n    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>Blog AUDITSEO</title>\n    <link>${siteUrl}/blog/</link>\n    <description>Feed editorial da AUDITSEO com artigos sobre SEO, AI Overviews, LLM SEO, analytics e arquitetura de conteudo.</description>\n    <language>pt-BR</language>\n    <lastBuildDate>${lastBuildDate}</lastBuildDate>\n    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />${items}\n  </channel>\n</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
};
