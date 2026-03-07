export type ClusterLayer =
  | 'service'
  | 'category'
  | 'pillar-article'
  | 'supporting-article'
  | 'niche'
  | 'city'
  | 'landing-page'
  | 'case-study'
  | 'tool';

export type SearchIntent =
  | 'informational'
  | 'technical'
  | 'comparative'
  | 'commercial'
  | 'local'
  | 'sectoral';

export type ClusterStatus = 'live' | 'planned' | 'in-progress';

export interface ClusterPriorityAsset {
  type: ClusterLayer;
  label: string;
  path?: string;
  slug?: string;
  status: ClusterStatus;
}

export interface InterlinkingRule {
  sourceType: ClusterLayer;
  targetType: ClusterLayer;
  minimumLinks: number;
  notes: string;
}

export interface ClusterDefinition {
  id: string;
  title: string;
  thesis: string;
  businessPriority: 1 | 2 | 3 | 4;
  editorialPriority: 1 | 2 | 3 | 4;
  status: ClusterStatus;
  dominantIntents: SearchIntent[];
  canonicalService?: ClusterPriorityAsset;
  canonicalCategory?: ClusterPriorityAsset;
  priorityAssets: ClusterPriorityAsset[];
  publicationOrder: string[];
  interlinkingRules: InterlinkingRule[];
}

export const firstTwelveClusters: ClusterDefinition[] = [
  {
    id: 'ai-overviews',
    title: 'AI Overviews',
    thesis:
      'Cluster principal para consolidar autoridade em respostas generativas do Google, citabilidade e estrutura de conteudo para AI Overviews.',
    businessPriority: 1,
    editorialPriority: 1,
    status: 'live',
    dominantIntents: ['informational', 'technical', 'commercial'],
    canonicalService: {
      type: 'service',
      label: 'AI Overview Optimization',
      path: '/servicos/ai-overview-optimization/',
      status: 'live'
    },
    canonicalCategory: {
      type: 'category',
      label: 'AI Overviews',
      path: '/blog/categoria/ai-overviews/',
      status: 'live'
    },
    priorityAssets: [
      { type: 'pillar-article', label: 'O Que Sao AI Overviews', slug: 'o-que-sao-ai-overviews', status: 'live' },
      { type: 'pillar-article', label: 'Como Aparecer em AI Overviews', slug: 'como-aparecer-ai-overviews', status: 'live' },
      { type: 'pillar-article', label: 'Estruturar Conteudo para AI Overviews', slug: 'estruturar-conteudo-ai-overviews', status: 'live' },
      { type: 'niche', label: 'Clinicas Medicas', path: '/nichos/clinicas-medicas/', status: 'live' },
      { type: 'niche', label: 'Dermatologistas', path: '/nichos/dermatologistas/', status: 'live' },
      { type: 'city', label: 'Sao Paulo', path: '/cidades/sao-paulo/', status: 'live' },
      {
        type: 'landing-page',
        label: 'AI Overview Optimization para Clinicas Medicas em Sao Paulo',
        path: '/lp/ai-overview-optimization-clinicas-medicas-sao-paulo/',
        status: 'live'
      },
      {
        type: 'tool',
        label: 'Checklist AI SEO',
        path: '/ferramentas/checklist-ai-seo/',
        status: 'live'
      }
    ],
    publicationOrder: [
      'Fortalecer a pagina de servico.',
      'Atualizar os 3 artigos pilares com exemplos proprietarios.',
      'Adicionar um case centrado em citabilidade ou visibilidade em AI Overviews.',
      'Expandir para uma segunda LP de interseccao apos prova comercial.'
    ],
    interlinkingRules: [
      {
        sourceType: 'service',
        targetType: 'pillar-article',
        minimumLinks: 3,
        notes: 'A pagina canonica deve apontar para os 3 pilares do cluster.'
      },
      {
        sourceType: 'pillar-article',
        targetType: 'service',
        minimumLinks: 1,
        notes: 'Cada artigo pilar deve empurrar para o servico canonico.'
      },
      {
        sourceType: 'niche',
        targetType: 'service',
        minimumLinks: 1,
        notes: 'O nicho nao compete com o servico; ele qualifica a aplicacao setorial.'
      }
    ]
  },
  {
    id: 'llm-brand-presence',
    title: 'LLM Brand Presence',
    thesis:
      'Cluster para consolidar autoridade em presenca de marca em ChatGPT, Claude, Gemini e outros ambientes de descoberta assistida por LLMs.',
    businessPriority: 1,
    editorialPriority: 1,
    status: 'live',
    dominantIntents: ['informational', 'technical', 'commercial'],
    canonicalService: {
      type: 'service',
      label: 'LLM Brand Presence',
      path: '/servicos/llm-brand-presence/',
      status: 'live'
    },
    canonicalCategory: {
      type: 'category',
      label: 'LLM SEO',
      path: '/blog/categoria/llm-seo/',
      status: 'live'
    },
    priorityAssets: [
      { type: 'pillar-article', label: 'O Que E LLM SEO', slug: 'o-que-e-llm-seo', status: 'live' },
      { type: 'pillar-article', label: 'SEO para ChatGPT e Claude', slug: 'seo-chatgpt-claude', status: 'live' },
      { type: 'pillar-article', label: 'Como Aparecer no ChatGPT', slug: 'como-aparecer-chatgpt', status: 'live' },
      { type: 'supporting-article', label: 'Monitorar Citacoes em IA', slug: 'monitorar-citacoes-ia', status: 'live' },
      { type: 'case-study', label: 'Migracao do site AUDITSEO para Astro', path: '/cases/migracao-site-auditseo-astro/', status: 'live' },
      { type: 'tool', label: 'Gerador de FAQ Schema', path: '/ferramentas/gerador-schema-faq/', status: 'live' },
      { type: 'niche', label: 'Escritorios de Advocacia', path: '/nichos/escritorios-advocacia/', status: 'live' },
      { type: 'city', label: 'Campinas', path: '/cidades/campinas/', status: 'live' }
    ],
    publicationOrder: [
      'Consolidar LLM SEO e brand presence como tese editorial unica.',
      'Adicionar um case centrado em descoberta de marca em ambientes generativos.',
      'Abrir uma LP setorial apenas se houver linguagem e prova especificas.'
    ],
    interlinkingRules: [
      {
        sourceType: 'service',
        targetType: 'category',
        minimumLinks: 1,
        notes: 'A pagina de servico precisa explicitar o hub editorial do tema.'
      },
      {
        sourceType: 'supporting-article',
        targetType: 'tool',
        minimumLinks: 1,
        notes: 'Artigos operacionais devem empurrar para ferramenta ou checklist.'
      },
      {
        sourceType: 'case-study',
        targetType: 'service',
        minimumLinks: 1,
        notes: 'Todo case precisa reforcar o servico associado.'
      }
    ]
  },
  {
    id: 'technical-seo-for-ai',
    title: 'SEO Tecnico para IA',
    thesis:
      'Cluster tecnico dedicado a rastreabilidade, HTML semantico, schema, sitemap, canonicals e performance para busca e LLMs.',
    businessPriority: 1,
    editorialPriority: 1,
    status: 'live',
    dominantIntents: ['technical', 'informational', 'commercial'],
    canonicalService: {
      type: 'service',
      label: 'Auditoria SEO',
      path: '/servicos/auditoria-seo/',
      status: 'live'
    },
    canonicalCategory: {
      type: 'category',
      label: 'SEO Tecnico',
      path: '/blog/categoria/seo-tecnico/',
      status: 'live'
    },
    priorityAssets: [
      { type: 'pillar-article', label: 'Auditoria Tecnica para AI SEO', slug: 'auditoria-tecnica-ai-seo', status: 'live' },
      { type: 'pillar-article', label: 'Crawlers de IA', slug: 'crawlers-ia', status: 'live' },
      { type: 'supporting-article', label: 'Checklist Tecnico de AI SEO', slug: 'checklist-prompt-optimization', status: 'live' },
      { type: 'tool', label: 'Checklist AI SEO', path: '/ferramentas/checklist-ai-seo/', status: 'live' },
      { type: 'tool', label: 'Simulador de Snippet', path: '/ferramentas/simulador-title-meta/', status: 'live' },
      { type: 'case-study', label: 'Migracao do site AUDITSEO para Astro', path: '/cases/migracao-site-auditseo-astro/', status: 'live' }
    ],
    publicationOrder: [
      'Transformar o cluster tecnico no backlog de referencia do site.',
      'Adicionar ferramenta de validacao de canonical e schema.',
      'Publicar um case tecnico focado em melhoria estrutural e indexacao.'
    ],
    interlinkingRules: [
      {
        sourceType: 'service',
        targetType: 'tool',
        minimumLinks: 1,
        notes: 'O servico tecnico deve provar capacidade com ferramenta ou auditor.'
      },
      {
        sourceType: 'supporting-article',
        targetType: 'case-study',
        minimumLinks: 1,
        notes: 'Conteudo tecnico ganha prova quando aponta para implementacoes reais.'
      }
    ]
  },
  {
    id: 'analytics-and-monitoring',
    title: 'Analytics e Monitoramento em IA',
    thesis:
      'Cluster para mensurar citacoes, presenca de marca, impacto em AI search e leitura operacional de ganho/perda por superficie generativa.',
    businessPriority: 2,
    editorialPriority: 1,
    status: 'planned',
    dominantIntents: ['informational', 'technical', 'commercial'],
    canonicalCategory: {
      type: 'category',
      label: 'Analytics',
      path: '/blog/categoria/analytics/',
      status: 'live'
    },
    priorityAssets: [
      { type: 'pillar-article', label: 'Monitorar Citacoes da Marca em IAs', slug: 'monitorar-citacoes-ia', status: 'live' },
      { type: 'pillar-article', label: 'Benchmark Competitivo em IA', slug: 'benchmark-competitivo-ia', status: 'live' },
      { type: 'supporting-article', label: 'Thresholds para Alertas de Mudanca', slug: 'threshold-alertas-mudanca', status: 'live' },
      { type: 'tool', label: 'Auditor rapido de links internos', status: 'planned' },
      { type: 'case-study', label: 'Case de observabilidade de citacoes em IA', status: 'planned' }
    ],
    publicationOrder: [
      'Definir uma tese unica de medicao para IA e busca.',
      'Lancar uma ferramenta simples de monitoramento ou checklist de observabilidade.',
      'Conectar o cluster aos servicos de consultoria e auditoria.'
    ],
    interlinkingRules: [
      {
        sourceType: 'category',
        targetType: 'service',
        minimumLinks: 2,
        notes: 'A categoria deve distribuir para auditoria e consultoria.'
      },
      {
        sourceType: 'tool',
        targetType: 'pillar-article',
        minimumLinks: 1,
        notes: 'Ferramenta sem explicacao editorial nao sustenta referencia.'
      }
    ]
  },
  {
    id: 'prompt-optimization',
    title: 'Prompt Optimization e Estruturacao de Conteudo',
    thesis:
      'Cluster editorial e tecnico para estruturar paginas mais claras, citaveis e recuperaveis por LLMs e respostas generativas.',
    businessPriority: 2,
    editorialPriority: 1,
    status: 'live',
    dominantIntents: ['informational', 'technical'],
    canonicalCategory: {
      type: 'category',
      label: 'Prompt Optimization',
      path: '/blog/categoria/prompt-optimization/',
      status: 'live'
    },
    priorityAssets: [
      { type: 'pillar-article', label: 'O Que E Prompt Optimization', slug: 'o-que-e-prompt-optimization', status: 'live' },
      { type: 'pillar-article', label: 'Checklist de Prompt Optimization', slug: 'checklist-prompt-optimization', status: 'live' },
      { type: 'supporting-article', label: 'Estruturar Conteudo para AI Overviews', slug: 'estruturar-conteudo-ai-overviews', status: 'live' },
      { type: 'tool', label: 'Gerador de FAQ Schema', path: '/ferramentas/gerador-schema-faq/', status: 'live' }
    ],
    publicationOrder: [
      'Conectar o tema a clareza semantica, e nao a hype de engenharia de prompt.',
      'Usar exemplos antes/depois e frameworks replicaveis.',
      'Ligar o cluster diretamente ao servico de AI Overview Optimization.'
    ],
    interlinkingRules: [
      {
        sourceType: 'pillar-article',
        targetType: 'service',
        minimumLinks: 1,
        notes: 'Os pilares precisam empurrar para o servico certo.'
      }
    ]
  },
  {
    id: 'editorial-governance',
    title: 'Governanca Editorial para Conteudo de IA',
    thesis:
      'Cluster de confianca e processo para mostrar como a AUDITSEO pesquisa, valida, atualiza e governa conteudo tecnico e comercial sobre IA.',
    businessPriority: 2,
    editorialPriority: 1,
    status: 'planned',
    dominantIntents: ['informational', 'technical', 'commercial'],
    priorityAssets: [
      { type: 'service', label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', status: 'live' },
      { type: 'supporting-article', label: 'Estrategia SEO para IA', slug: 'estrategia-seo-ia', status: 'live' },
      { type: 'supporting-article', label: 'Futuro do LLM SEO', slug: 'futuro-llm-seo', status: 'live' },
      { type: 'case-study', label: 'Case de governanca editorial', status: 'planned' },
      { type: 'tool', label: 'Checklist de publicacao editorial', status: 'planned' }
    ],
    publicationOrder: [
      'Conectar metodologia, fontes e politica editorial em uma narrativa unificada.',
      'Publicar um artigo pilar sobre governance de conteudo em AI search.',
      'Criar um checklist publico de qualidade editorial.'
    ],
    interlinkingRules: [
      {
        sourceType: 'supporting-article',
        targetType: 'case-study',
        minimumLinks: 1,
        notes: 'Governanca sem prova tende a parecer abstrata.'
      }
    ]
  },
  {
    id: 'healthcare-ai-search',
    title: 'AI Search para Saude',
    thesis:
      'Cluster vertical para provar aplicacao de AI search e SEO em clinicas, especialidades medicas e descoberta local de servicos de saude.',
    businessPriority: 1,
    editorialPriority: 2,
    status: 'in-progress',
    dominantIntents: ['sectoral', 'commercial', 'local'],
    priorityAssets: [
      { type: 'niche', label: 'Clinicas Medicas', path: '/nichos/clinicas-medicas/', status: 'live' },
      { type: 'niche', label: 'Dermatologistas', path: '/nichos/dermatologistas/', status: 'live' },
      { type: 'city', label: 'Sao Paulo', path: '/cidades/sao-paulo/', status: 'live' },
      {
        type: 'landing-page',
        label: 'AI Overview Optimization para Clinicas Medicas em Sao Paulo',
        path: '/lp/ai-overview-optimization-clinicas-medicas-sao-paulo/',
        status: 'live'
      },
      { type: 'service', label: 'SEO Local', path: '/servicos/seo-local/', status: 'live' },
      { type: 'service', label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', status: 'live' }
    ],
    publicationOrder: [
      'Fechar a camada de saude com clinicas medicas e dermatologistas.',
      'Adicionar uma segunda LP local ou setorial.',
      'Publicar case ou estudo proprio sobre descoberta local em saude.'
    ],
    interlinkingRules: [
      {
        sourceType: 'landing-page',
        targetType: 'niche',
        minimumLinks: 1,
        notes: 'A LP precisa receber contexto do nicho e da cidade.'
      },
      {
        sourceType: 'city',
        targetType: 'service',
        minimumLinks: 2,
        notes: 'Cidades de saude devem apontar para SEO Local e Google Meu Negocio.'
      }
    ]
  },
  {
    id: 'legal-ai-search',
    title: 'AI Search para Juridico',
    thesis:
      'Cluster vertical para escritorio de advocacia com foco em descoberta, credibilidade e presenca de marca em ambientes de IA e busca local.',
    businessPriority: 2,
    editorialPriority: 2,
    status: 'in-progress',
    dominantIntents: ['sectoral', 'commercial', 'local'],
    priorityAssets: [
      { type: 'niche', label: 'Escritorios de Advocacia', path: '/nichos/escritorios-advocacia/', status: 'live' },
      { type: 'service', label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/', status: 'live' },
      { type: 'service', label: 'SEO Local', path: '/servicos/seo-local/', status: 'live' },
      { type: 'city', label: 'Sao Paulo', path: '/cidades/sao-paulo/', status: 'live' },
      { type: 'landing-page', label: 'LLM Brand Presence para Juridico em Sao Paulo', status: 'planned' }
    ],
    publicationOrder: [
      'Fortalecer a pagina de nicho com FAQs e provas especificas.',
      'Adicionar artigos que traduzam IA para contexto juridico sem promessas genéricas.',
      'Criar uma LP local somente quando houver diferenciais claros.'
    ],
    interlinkingRules: [
      {
        sourceType: 'niche',
        targetType: 'category',
        minimumLinks: 1,
        notes: 'O nicho precisa apontar para um hub editorial relevante, preferencialmente LLM SEO.'
      }
    ]
  },
  {
    id: 'energy-solar-ai-search',
    title: 'AI Search para Energia Solar',
    thesis:
      'Cluster B2B para capturar empresas de energia solar que dependem de descoberta consultiva, reputacao tecnica e demanda qualificada.',
    businessPriority: 2,
    editorialPriority: 2,
    status: 'in-progress',
    dominantIntents: ['sectoral', 'commercial'],
    priorityAssets: [
      { type: 'niche', label: 'Energia Solar', path: '/nichos/energia-solar/', status: 'live' },
      { type: 'service', label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', status: 'live' },
      { type: 'service', label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/', status: 'live' },
      { type: 'city', label: 'Sao Paulo', path: '/cidades/sao-paulo/', status: 'live' },
      { type: 'landing-page', label: 'Consultoria SEO para Energia Solar em Sao Paulo', status: 'planned' }
    ],
    publicationOrder: [
      'Reforcar a narrativa B2B de ticket maior.',
      'Publicar comparativos e artigos de decisao comercial para o setor.',
      'Abrir LP apenas quando copy e prova forem suficientes.'
    ],
    interlinkingRules: [
      {
        sourceType: 'niche',
        targetType: 'service',
        minimumLinks: 2,
        notes: 'O nicho precisa distribuir entre consultoria e AI Overview Optimization.'
      }
    ]
  },
  {
    id: 'software-b2b-ai-search',
    title: 'AI Search para Software B2B',
    thesis:
      'Cluster planejado para software B2B com foco em marca, comparacao, demanda qualificada e descoberta via LLMs.',
    businessPriority: 2,
    editorialPriority: 2,
    status: 'planned',
    dominantIntents: ['sectoral', 'informational', 'commercial'],
    priorityAssets: [
      { type: 'service', label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/', status: 'live' },
      { type: 'service', label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', status: 'live' },
      { type: 'niche', label: 'Software B2B', status: 'planned' },
      { type: 'city', label: 'Sao Paulo', path: '/cidades/sao-paulo/', status: 'live' },
      { type: 'landing-page', label: 'LLM Brand Presence para Software B2B em Sao Paulo', status: 'planned' }
    ],
    publicationOrder: [
      'Criar a pagina de nicho apenas com exemplos e copy realmente B2B.',
      'Produzir artigos sobre comparativos, presenca de marca e descoberta consultiva.',
      'Depois abrir a LP local.'
    ],
    interlinkingRules: [
      {
        sourceType: 'supporting-article',
        targetType: 'niche',
        minimumLinks: 1,
        notes: 'Artigos decisorios devem empurrar para o nicho B2B.'
      }
    ]
  },
  {
    id: 'multi-location-local-search',
    title: 'SEO Local para Operacoes Multilocal',
    thesis:
      'Cluster para negocios com mais de uma unidade, focado em padronizacao local, Google Business, citacao e governanca de paginas de cidade.',
    businessPriority: 3,
    editorialPriority: 2,
    status: 'planned',
    dominantIntents: ['local', 'technical', 'commercial'],
    priorityAssets: [
      { type: 'service', label: 'SEO Local', path: '/servicos/seo-local/', status: 'live' },
      { type: 'service', label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', status: 'live' },
      { type: 'tool', label: 'Checklist de pagina local', status: 'planned' },
      { type: 'city', label: 'Campinas', path: '/cidades/campinas/', status: 'live' },
      { type: 'city', label: 'Sao Paulo', path: '/cidades/sao-paulo/', status: 'live' }
    ],
    publicationOrder: [
      'Publicar guia pilar para operacoes com varias unidades.',
      'Adicionar checklist local e modelo de governanca.',
      'Expandir cidades apenas depois disso.'
    ],
    interlinkingRules: [
      {
        sourceType: 'city',
        targetType: 'tool',
        minimumLinks: 1,
        notes: 'Paginas locais devem levar para assets reutilizaveis e checklists.'
      }
    ]
  },
  {
    id: 'ai-content-governance-for-enterprise',
    title: 'Governanca de Conteudo para Times e Empresas',
    thesis:
      'Cluster corporativo para empresas que precisam coordenar conteudo, SEO, IA e governanca entre times, templates e backlog.',
    businessPriority: 3,
    editorialPriority: 2,
    status: 'planned',
    dominantIntents: ['technical', 'commercial', 'comparative'],
    priorityAssets: [
      { type: 'service', label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', status: 'live' },
      { type: 'supporting-article', label: 'Estrategia SEO para IA', slug: 'estrategia-seo-ia', status: 'live' },
      { type: 'supporting-article', label: 'Benchmark Competitivo em IA', slug: 'benchmark-competitivo-ia', status: 'live' },
      { type: 'case-study', label: 'Case de governanca para times multifuncionais', status: 'planned' }
    ],
    publicationOrder: [
      'Usar o proprio site da AUDITSEO como referencia estrutural.',
      'Amarrar metodologia, backlog, QA e governanca em uma oferta consultiva unica.',
      'Produzir um case com antes/depois da arquitetura.'
    ],
    interlinkingRules: [
      {
        sourceType: 'case-study',
        targetType: 'supporting-article',
        minimumLinks: 2,
        notes: 'Cases de governanca devem reforcar metodologia e artigo pilar.'
      }
    ]
  },
  {
    id: 'ai-search-comparison-and-decision',
    title: 'Comparativos e Decisao em AI Search',
    thesis:
      'Cluster transversal para capturar buscas de comparacao, trade-off e decisao entre superficies, formatos e caminhos de investimento em AI search.',
    businessPriority: 3,
    editorialPriority: 2,
    status: 'planned',
    dominantIntents: ['comparative', 'informational', 'commercial'],
    priorityAssets: [
      { type: 'supporting-article', label: 'AI Overviews vs Featured Snippets', slug: 'ai-overviews-vs-featured-snippets', status: 'live' },
      { type: 'supporting-article', label: 'ChatGPT, Claude e Perplexity', slug: 'chatgpt-claude-perplexity', status: 'live' },
      { type: 'service', label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/', status: 'live' },
      { type: 'service', label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/', status: 'live' }
    ],
    publicationOrder: [
      'Agrupar comparativos em um hub decisorio.',
      'Usar esses ativos como ponte entre topo de funil e paginas comerciais.',
      'Criar CTAs orientados a diagnostico, nao a venda agressiva.'
    ],
    interlinkingRules: [
      {
        sourceType: 'supporting-article',
        targetType: 'service',
        minimumLinks: 2,
        notes: 'Comparativos devem distribuir entre os dois servicos relacionados ao trade-off.'
      }
    ]
  }
];
