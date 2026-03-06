import type { APIRoute } from 'astro';
import { buildUrlset, getSitemapFileBySlug } from '../../lib/sitemaps';

export const GET: APIRoute = async () =>
  new Response(buildUrlset((await getSitemapFileBySlug('blog'))?.entries ?? []), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
