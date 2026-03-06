import { canonicalBlogArticleRedirects } from './blog-editorial';

export const legacyBlogSlugRedirects: Record<string, string> = {
  'ai-overviews-ecommerce': '/blog/como-aparecer-ai-overviews/',
  'ai-overviews-impacto-trafego-organico': '/blog/queries-ai-overviews/',
  'ai-overviews-negocios-locais': '/blog/google-meu-negocio-guia-completo/',
  'analytics-trafego-ia': '/blog/dashboard-seo-ia/',
  'brand-mentions-vs-backlinks': '/blog/brand-mentions-ia/',
  'checklist-ai-overviews': '/blog/checklist-final-presenca-ia/',
  'como-aparecer-chatgpt-claude': '/blog/seo-chatgpt-claude/',
  'contexto-completude-ia': '/blog/definicoes-claras-ia/',
  'e-e-a-t-guia-completo': '/fontes-e-metodos/',
  'eeat-para-llms': '/fontes-e-metodos/',
  'faqs-otimizadas-ia': '/blog/schema-markup-ai-overviews/',
  'ferramentas-tracking-llm': '/blog/ferramentas-rastreamento-llm/',
  'fontes-dados-llm': '/blog/fontes-dados-ll/',
  'formatacao-citacao-ia': '/blog/paragrafos-citaveis/',
  'formatacao-conteudo-ia': '/blog/listas-tabelas-ia/',
  'futuro-ai-overviews': '/blog/google-ai-mode/',
  'impacto-ai-overviews-trafego': '/blog/queries-ai-overviews/',
  'metricas-seo-ia': '/blog/metricas-presenca-ia/',
  'otimizar-conteudo-ai-overviews': '/blog/estruturar-conteudo-ai-overviews/',
  'palavras-chave-ai-overviews': '/blog/linguagem-natural-keywords/',
  'schema-markup-para-ias': '/blog/schema-markup-ai-overviews/',
  'seo-tecnico-para-ia': '/blog/auditoria-tecnica-ai-seo/',
  ...canonicalBlogArticleRedirects
};

export const legacyServiceSlugRedirects: Record<string, string> = {
  'ai-seo': '/servicos/llm-brand-presence/',
  'aparecer-chatgpt-claude-perplexity': '/servicos/llm-brand-presence/',
  'aparecer-no-chatgpt': '/servicos/llm-brand-presence/',
  'aparecer-no-claude': '/servicos/llm-brand-presence/',
  'aparecer-no-gemini': '/servicos/llm-brand-presence/',
  'aparecer-no-google-ai-overviews': '/servicos/ai-overview-optimization/',
  'aparecer-no-perplexity': '/servicos/llm-brand-presence/',
  'geo-generative-engine-optimization': '/servicos/llm-brand-presence/',
  'llm-brand-presence-ias': '/servicos/llm-brand-presence/',
  'monitoramento-ia': '/servicos/llm-brand-presence/',
  'prompt-optimization': '/servicos/consultoria-seo/',
  'seo-tecnico': '/servicos/auditoria-seo/',
  'seo-para-ia': '/servicos/llm-brand-presence/',
  'technical-ai-seo': '/servicos/auditoria-seo/'
};

export const legacyPathRedirects: Record<string, string> = {
  '/saude/dermatologistas/': '/nichos/dermatologistas/',
  '/b2b/energia-solar/': '/nichos/energia-solar/',
  '/servicos/seo-tecnico/': '/servicos/auditoria-seo/',
  ...Object.fromEntries(
    Object.entries(legacyBlogSlugRedirects).map(([slug, destination]) => [`/blog/${slug}/`, destination])
  ),
  ...Object.fromEntries(
    Object.entries(legacyServiceSlugRedirects).map(([slug, destination]) => [
      `/servicos/${slug}/`,
      destination
    ])
  )
};
