export interface BlogEditorialOverride {
  title?: string;
  seoTitle?: string;
  description?: string;
  excerpt?: string;
  keywords?: string[];
}

export const canonicalBlogArticleRedirects: Record<string, string> = {
  'checklist-tecnico-ai-seo': '/blog/auditoria-tecnica-ai-seo/',
  'ferramentas-rastreamento-llm': '/blog/monitorar-citacoes-ia/'
};

export const blogEditorialOverrides: Record<string, BlogEditorialOverride> = {
  'auditoria-tecnica-ai-seo': {
    title: 'Auditoria Tecnica para AI SEO',
    seoTitle: 'Auditoria Tecnica para AI SEO: Framework de Diagnostico | AUDITSEO',
    description:
      'Framework de auditoria tecnica para AI SEO com foco em rastreabilidade, HTML, schema, renderizacao, conteudo citavel e sinais de autoridade.',
    excerpt:
      'Use este framework para diagnosticar gargalos de rastreabilidade, estrutura tecnica e citabilidade antes de priorizar correcoes em projetos de AI SEO.',
    keywords: ['auditoria tecnica ai seo', 'framework ai seo', 'diagnostico ai search', 'rastreabilidade llm', 'schema ai seo']
  },
  'monitorar-citacoes-ia': {
    title: 'Como Monitorar Citacoes da Sua Marca em IAs',
    seoTitle: 'Como Monitorar Citacoes da Sua Marca em IAs | AUDITSEO',
    description:
      'Metodos para acompanhar quando ChatGPT, Claude, Perplexity e AI Overviews citam sua marca, com criterios de tracking, frequencia e leitura executiva.',
    excerpt:
      'Aprenda a montar um processo recorrente para rastrear citacoes da sua marca em IAs e transformar observacoes difusas em sinais operacionais.',
    keywords: ['monitorar citacoes ia', 'citacoes de marca em ias', 'tracking llm', 'chatgpt brand mentions', 'ai overviews tracking']
  },
  'crawlers-ia': {
    title: 'Crawlers de IA: Como Bots Generativos Leem e Priorizam Seu Site',
    seoTitle: 'Crawlers de IA: Como Bots Generativos Leem Seu Site | AUDITSEO',
    description:
      'Entenda como crawlers de IA acessam, interpretam e priorizam paginas, e quais ajustes tecnicos ajudam seu site a ficar rastreavel para LLMs e AI search.',
    excerpt:
      'Veja como bots generativos descobrem, leem e priorizam paginas, e o que precisa existir no HTML para facilitar rastreabilidade e citacao.'
  },
  'benchmark-competitivo-ia': {
    title: 'Benchmark Competitivo em IA: Como Comparar Presenca de Marca e Citacoes',
    seoTitle: 'Benchmark Competitivo em IA: Presenca de Marca e Citacoes | AUDITSEO',
    description:
      'Guia pratico para benchmark competitivo em IA com foco em citacoes de marca, share of voice, leitura de concorrencia e oportunidades de ganho.',
    excerpt:
      'Aprenda a comparar sua presenca em IAs com a dos concorrentes usando citacoes, share of voice e sinais operacionais de visibilidade.'
  },
  'o-que-e-prompt-optimization': {
    title: 'O Que E Prompt Optimization em SEO para IA',
    seoTitle: 'O Que E Prompt Optimization em SEO para IA | AUDITSEO',
    description:
      'Entenda prompt optimization como disciplina editorial para deixar paginas mais claras, citaveis e recuperaveis por modelos de linguagem e AI Overviews.',
    excerpt:
      'Veja como prompt optimization conecta clareza semantica, estrutura de resposta e SEO para IA sem confundir o tema com engenharia de prompt isolada.',
    keywords: ['prompt optimization seo', 'seo para ia', 'conteudo citavel', 'clareza semantica', 'llm seo']
  },
  'checklist-prompt-optimization': {
    title: 'Checklist de Prompt Optimization para Conteudo Citavel',
    seoTitle: 'Checklist de Prompt Optimization para Conteudo Citavel | AUDITSEO',
    description:
      'Checklist operacional para revisar paragrafos, definicoes, FAQs, headings e blocos de resposta antes de publicar conteudo focado em citabilidade por IA.',
    excerpt:
      'Use este checklist para revisar estrutura, definicoes, FAQs e formatacao antes de publicar conteudo pensado para AI Overviews e LLMs.',
    keywords: ['checklist prompt optimization', 'conteudo citavel', 'checklist seo ia', 'faq para ia', 'paragrafos citaveis']
  },
  'o-que-sao-ai-overviews': {
    seoTitle: 'O Que Sao AI Overviews e Como Aparecer Neles | AUDITSEO'
  },
  'o-que-e-llm-seo': {
    seoTitle: 'O Que E LLM SEO e Como Ganhar Presenca em IAs | AUDITSEO'
  },
  'estrategia-seo-ia': {
    seoTitle: 'Estrategia SEO para IA: Framework de Crescimento Organico | AUDITSEO',
    excerpt:
      'Framework estrategico para integrar SEO tradicional, AI search, governanca editorial e backlog tecnico em uma unica operacao de crescimento.'
  }
};
