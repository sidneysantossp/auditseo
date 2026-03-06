import type { APIRoute } from 'astro';
import { buildSitemapIndex } from '../lib/sitemaps';

export const GET: APIRoute = async () =>
  new Response(await buildSitemapIndex(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
