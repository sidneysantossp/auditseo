export interface BlogCategoryFaq {
  question: string;
  answer: string;
}

export interface BlogResourceLink {
  label: string;
  path: string;
}

export interface BlogCategoryDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  seoTitle: string;
  seoDescription: string;
  introCards: Array<{
    title: string;
    copy: string;
  }>;
  serviceLinks: BlogResourceLink[];
  nicheLinks: BlogResourceLink[];
  categoryKeywords: string[];
  faqs: BlogCategoryFaq[];
  featuredSlug: string;
  pillarSlugs: string[];
  articleSlugs: string[];
}

export const blogCategories: BlogCategoryDefinition[] = [
  {
    slug: 'ai-overviews',
    title: 'AI Overviews',
    shortTitle: 'AI Overviews',
    badge: 'Cluster Google AI',
    heroTitle: 'ARTIGOS SOBRE AI OVERVIEWS, SERP GENERATIVA E CITABILIDADE',
    heroSubtitle:
      'Base editorial dedicada ao ecossistema de AI Overviews do Google: conceitos, criterios de citacao, formatos de resposta, impacto em SERP e caminhos praticos para aumentar a chance de aparecer nas respostas geradas por IA.',
    seoTitle: 'AI Overviews: Artigos, Guias e Estrategias | Blog AUDITSEO',
    seoDescription:
      'Leia artigos e guias sobre AI Overviews do Google, citabilidade, estrutura de conteudo e criterios para aparecer nas respostas de IA da busca.',
    introCards: [
      {
        title: 'O que esta categoria cobre',
        copy:
          'Conceito, funcionamento, impacto organico, formatos de citacao e criterios praticos para paginas que querem entrar nas respostas generativas do Google.'
      },
      {
        title: 'Para quem ela serve',
        copy:
          'Times de SEO, conteudo e growth que precisam entender AI Overviews sem tratar o tema como hype ou repetir tatica superficial.'
      },
      {
        title: 'Como ela se conecta ao negocio',
        copy:
          'Os artigos desta categoria alimentam paginas comerciais de AI Overview Optimization e ajudam a reduzir a distancia entre teoria, execucao e leads.'
      }
    ],
    serviceLinks: [
      { label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/' },
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: 'Auditoria SEO', path: '/servicos/auditoria-seo/' }
    ],
    nicheLinks: [
      { label: 'Clinicas medicas', path: '/nichos/clinicas-medicas/' },
      { label: 'Sao Paulo', path: '/cidades/sao-paulo/' }
    ],
    categoryKeywords: ['ai overviews', 'google ai overviews', 'como aparecer ai overviews', 'citabilidade em ia'],
    faqs: [
      {
        question: 'Esta categoria fala so sobre o conceito de AI Overviews?',
        answer:
          'Nao. Ela cobre conceito, impacto em SEO, estrutura de conteudo, citabilidade, consultas acionadoras e criterios de pagina que reforcam a chance de ser citada.'
      },
      {
        question: 'Os artigos daqui servem para paginas comerciais?',
        answer:
          'Sim. O objetivo e ligar aprendizado editorial a pagina comercial e ao plano de execucao, nao manter o conteudo informativo isolado da estrategia.'
      },
      {
        question: 'AI Overviews e tratado aqui como substituto do SEO?',
        answer:
          'Nao. A categoria trata AI Overviews como extensao do ecossistema de busca e como camada adicional de visibilidade dentro da estrategia organica.'
      }
    ],
    featuredSlug: 'o-que-sao-ai-overviews',
    pillarSlugs: ['como-aparecer-ai-overviews', 'estruturar-conteudo-ai-overviews', 'ai-overviews-vs-featured-snippets'],
    articleSlugs: [
      'o-que-sao-ai-overviews',
      'o-que-sao-ai-overviews-google',
      'como-aparecer-ai-overviews',
      'ai-overviews-vs-featured-snippets',
      'queries-ai-overviews',
      'estruturar-conteudo-ai-overviews',
      'case-study-ai-overviews',
      'google-ai-mode'
    ]
  },
  {
    slug: 'llm-seo',
    title: 'LLM SEO',
    shortTitle: 'LLM SEO',
    badge: 'Cluster Modelos de Linguagem',
    heroTitle: 'LLM SEO, CHATGPT, CLAUDE E PRESENCA DE MARCA EM IAS',
    heroSubtitle:
      'Hub editorial voltado a LLM SEO, aparicao em modelos de linguagem, citacao de marca, dados que alimentam respostas e caminhos para tornar o site mais compreensivel para interfaces generativas.',
    seoTitle: 'LLM SEO: ChatGPT, Claude e Busca Generativa | Blog AUDITSEO',
    seoDescription:
      'Explore artigos sobre LLM SEO, ChatGPT, Claude, fontes de dados, citacao de marca e presenca em ambientes generativos.',
    introCards: [
      {
        title: 'Escopo editorial',
        copy:
          'Conteudos sobre como LLMs constroem resposta, interpretam marca, incorporam fontes e citam sites em contextos conversacionais.'
      },
      {
        title: 'Leitura pratica',
        copy:
          'A categoria separa taticas validas de ruído, conectando conceito, paginas comerciais e sinais que realmente ajudam a marca a aparecer.'
      },
      {
        title: 'Relacao com o portfolio',
        copy:
          'Os artigos reforcam a frente de LLM Brand Presence e sustentam a proposta de posicionar a marca em ChatGPT, Claude, Gemini e interfaces similares.'
      }
    ],
    serviceLinks: [
      { label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/' },
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/' }
    ],
    nicheLinks: [
      { label: 'Escritorios de advocacia', path: '/nichos/escritorios-advocacia/' },
      { label: 'Campinas', path: '/cidades/campinas/' }
    ],
    categoryKeywords: ['llm seo', 'chatgpt seo', 'claude seo', 'presenca em ia'],
    faqs: [
      {
        question: 'LLM SEO e o mesmo que SEO tradicional com outro nome?',
        answer:
          'Nao. Ele aproveita a base do SEO tradicional, mas adiciona sinais de citabilidade, framing de entidade, clareza semantica e interpretacao por modelos de linguagem.'
      },
      {
        question: 'Esta categoria cobre apenas ChatGPT?',
        answer:
          'Nao. O escopo inclui ChatGPT, Claude, Gemini, Perplexity e outros ambientes em que respostas generativas dependem de fontes, entidades e contexto.'
      },
      {
        question: 'O foco aqui e trafego ou presenca de marca?',
        answer:
          'Os dois. O hub trata presenca de marca, descoberta e citacao como parte da estrategia organica, sem reduzir a discussao apenas a clique imediato.'
      }
    ],
    featuredSlug: 'o-que-e-llm-seo',
    pillarSlugs: ['seo-chatgpt-claude', 'como-aparecer-chatgpt', 'fontes-dados-ll'],
    articleSlugs: [
      'o-que-e-llm-seo',
      'chatgpt-claude-perplexity',
      'seo-chatgpt-claude',
      'como-aparecer-chatgpt',
      'fontes-dados-ll',
      'futuro-llm-seo',
      'treinar-ia-reconhecer-marca'
    ]
  },
  {
    slug: 'seo-tecnico',
    title: 'SEO Tecnico',
    shortTitle: 'SEO Tecnico',
    badge: 'Cluster Implementacao',
    heroTitle: 'SEO TECNICO PARA IA, RASTREABILIDADE E BASE DE PERFORMANCE',
    heroSubtitle:
      'Categoria focada em arquitetura, HTML, schema, sitemap, robots, performance, renderizacao e sinais tecnicos que sustentam indexacao, leitura por bots e consistencia do site.',
    seoTitle: 'SEO Tecnico para AI Search e Sites Escalaveis | Blog AUDITSEO',
    seoDescription:
      'Leia artigos sobre SEO tecnico, schema, sitemap, robots, performance, HTML e rastreabilidade para AI search e busca organica.',
    introCards: [
      {
        title: 'Base estrutural',
        copy:
          'Tudo que afeta renderizacao, indexacao, consistencia semantica e capacidade do site de crescer sem quebrar navegacao, schema e descoberta.'
      },
      {
        title: 'Impacto comercial',
        copy:
          'Sem base tecnica, pagina comercial, cluster de conteudo e citabilidade em IA perdem capacidade de competir e escalar.'
      },
      {
        title: 'Como usar estes artigos',
        copy:
          'A categoria foi pensada para servir como referencia de backlog tecnico para dev, SEO, produto e conteudo trabalhando na mesma fundacao.'
      }
    ],
    serviceLinks: [
      { label: 'Auditoria SEO', path: '/servicos/auditoria-seo/' },
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: 'SEO Local', path: '/servicos/seo-local/' }
    ],
    nicheLinks: [
      { label: 'Metodologia', path: '/metodologia/' },
      { label: 'Fontes e metodos', path: '/fontes-e-metodos/' }
    ],
    categoryKeywords: ['seo tecnico', 'schema markup', 'sitemap', 'robots txt', 'core web vitals'],
    faqs: [
      {
        question: 'SEO tecnico para IA e diferente de SEO tecnico classico?',
        answer:
          'A base e a mesma, mas a leitura inclui tambem clareza de estrutura para modelos de linguagem, citabilidade e consistencia semantica mais rigorosa.'
      },
      {
        question: 'Esta categoria serve so para desenvolvedores?',
        answer:
          'Nao. Dev, SEO, conteudo e produto usam esta base para tomar decisoes melhores sobre template, performance, schema e rastreabilidade.'
      },
      {
        question: 'Os artigos daqui se conectam a auditoria?',
        answer:
          'Sim. Eles servem como biblioteca de criterios para diagnostico tecnico, priorizacao e validacao do que realmente precisa entrar no backlog.'
      }
    ],
    featuredSlug: 'auditoria-tecnica-ai-seo',
    pillarSlugs: ['schema-markup-ai-overviews', 'estrutura-html-para-ia', 'core-web-vitals-ai-overviews'],
    articleSlugs: [
      'auditoria-tecnica-ai-seo',
      'core-web-vitals-ai-overviews',
      'core-web-vitals-guia',
      'crawlers-ia',
      'estrutura-html-para-ia',
      'javascript-llms',
      'robots-txt-para-ia',
      'schema-markup-ai-overviews',
      'sitemap-para-ia',
      'velocidade-pagina-ia'
    ]
  },
  {
    slug: 'prompt-optimization',
    title: 'Prompt Optimization',
    shortTitle: 'Prompt Optimization',
    badge: 'Cluster Clareza Semantica',
    heroTitle: 'PROMPT OPTIMIZATION, ESTRUTURA DE RESPOSTA E CONTEUDO CITAVEL',
    heroSubtitle:
      'Hub dedicado a clareza semantica, formatacao, listas, definicoes, perguntas, linguagem e blocos de conteudo que ajudam humanos e modelos a entender melhor a pagina.',
    seoTitle: 'Prompt Optimization e Conteudo Citavel | Blog AUDITSEO',
    seoDescription:
      'Artigos sobre prompt optimization, clareza semantica, listas, paragrafos citaveis e estrutura de conteudo para IA e busca.',
    introCards: [
      {
        title: 'Foco da categoria',
        copy:
          'Nao e sobre engenharia de prompt para chat isolado. E sobre como estruturar a pagina para que perguntas e respostas fiquem mais legiveis, recuperaveis e citaveis.'
      },
      {
        title: 'Onde isso entra no site',
        copy:
          'A categoria conversa diretamente com artigos de AI Overviews e LLM SEO, porque a forma do conteudo impacta a forma como a resposta e montada.'
      },
      {
        title: 'Leitura orientada a execucao',
        copy:
          'Cada artigo tenta transformar criterio abstrato em checklist de copy, bloco de resposta, FAQ, subtitulo, tabela ou paragrafos que podem ser reaplicados no site.'
      }
    ],
    serviceLinks: [
      { label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/' },
      { label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/' },
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' }
    ],
    nicheLinks: [
      { label: 'Politica editorial', path: '/politica-editorial/' },
      { label: 'Fontes e metodos', path: '/fontes-e-metodos/' }
    ],
    categoryKeywords: ['prompt optimization', 'conteudo citavel', 'paragrafos citaveis', 'clareza semantica'],
    faqs: [
      {
        question: 'Prompt Optimization aqui significa escrever prompts para ferramentas de IA?',
        answer:
          'Nao apenas. No contexto do blog, significa estruturar conteudo e perguntas de um jeito que melhore interpretacao, resposta e citacao em ambientes generativos.'
      },
      {
        question: 'Essa categoria serve para time de conteudo?',
        answer:
          'Sim. Ela foi pensada principalmente para conteudo, SEO editorial e estrategistas que precisam aumentar a clareza das paginas sem empobrecer a profundidade.'
      },
      {
        question: 'Prompt Optimization substitui schema e SEO tecnico?',
        answer:
          'Nao. Ele complementa a base tecnica ao melhorar a forma como a informacao e organizada e percebida por humanos e modelos.'
      }
    ],
    featuredSlug: 'o-que-e-prompt-optimization',
    pillarSlugs: ['checklist-prompt-optimization', 'definicoes-claras-ia', 'paragrafos-citaveis'],
    articleSlugs: [
      'o-que-e-prompt-optimization',
      'checklist-prompt-optimization',
      'definicoes-claras-ia',
      'linguagem-natural-keywords',
      'listas-tabelas-ia',
      'paragrafos-citaveis',
      'queries-ia-otimizar'
    ]
  },
  {
    slug: 'analytics',
    title: 'Analytics',
    shortTitle: 'Analytics',
    badge: 'Cluster Medicao',
    heroTitle: 'ANALYTICS, MONITORAMENTO E PROVA DE PRESENCA EM IA',
    heroSubtitle:
      'Categoria dedicada a medicao, dashboards, benchmark, metricas, alertas, relatorios e instrumentos de leitura para acompanhar visibilidade organica e presenca de marca em respostas generativas.',
    seoTitle: 'Analytics para SEO e Presenca em IA | Blog AUDITSEO',
    seoDescription:
      'Aprenda a monitorar citacoes, dashboards, metricas, benchmark e ROI de SEO e presenca de marca em IA.',
    introCards: [
      {
        title: 'Medir antes de escalar',
        copy:
          'A categoria trata medicao como infra basica para decidir onde insistir, o que corrigir e como provar impacto para negocio sem depender de vaidade.'
      },
      {
        title: 'Do GSC ao monitoramento de marca',
        copy:
          'Os artigos atravessam Search Console, dashboards, citacoes em LLMs, relatios executivos e benchmark para leitura competitiva.'
      },
      {
        title: 'Conexao com oferta comercial',
        copy:
          'A base editorial ajuda a qualificar demanda para auditoria, consultoria e projetos que precisam transformar sinais difusos em criterio de priorizacao.'
      }
    ],
    serviceLinks: [
      { label: 'Auditoria SEO', path: '/servicos/auditoria-seo/' },
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/' }
    ],
    nicheLinks: [
      { label: 'Cases', path: '/cases/' },
      { label: 'Ferramentas', path: '/ferramentas/' }
    ],
    categoryKeywords: ['analytics seo', 'monitorar citacoes ia', 'share of voice ia', 'relatorios de presenca'],
    faqs: [
      {
        question: 'Analytics para IA e so contar citacoes?',
        answer:
          'Nao. O objetivo e medir aparicao, tendencia, concorrencia, variacao, impacto em negocio e capacidade de usar esses dados para decidir o proximo passo.'
      },
      {
        question: 'Esta categoria fala so de ferramentas?',
        answer:
          'Nao. Ferramenta e apenas um dos blocos. O foco principal e criterio de leitura, dashboard, benchmark, alerta e prova comercial do que foi observado.'
      },
      {
        question: 'O blog usa estes conteudos para amarrar offpage e reputacao?',
        answer:
          'Sim. Medicao de marca, mencoes e citacoes ajuda a conectar reputacao, conteudo, autoridade percebida e futuras iniciativas de divulgacao externa.'
      }
    ],
    featuredSlug: 'monitorar-citacoes-ia',
    pillarSlugs: ['analytics-ai-overviews', 'dashboard-seo-ia', 'benchmark-competitivo-ia'],
    articleSlugs: [
      'monitorar-citacoes-ia',
      'alertas-citacao-ia',
      'analytics-ai-overviews',
      'benchmark-competitivo-ia',
      'brand-mentions-ia',
      'dashboard-seo-ia',
      'ferramentas-monitoramento-ai-overviews',
      'metricas-presenca-ia',
      'monitorar-citacoes-marca-ia',
      'relatorios-presenca-ia',
      'roi-seo-ia'
    ]
  },
  {
    slug: 'estrategia',
    title: 'Estrategia',
    shortTitle: 'Estrategia',
    badge: 'Cluster Gestao e Crescimento',
    heroTitle: 'ESTRATEGIA SEO, GOVERNANCA EDITORIAL E CRESCIMENTO COM IA',
    heroSubtitle:
      'Categoria mais ampla do blog, voltada a visao estrategica: planejamento, funil, priorizacao, custos, equipe, integracao entre SEO tradicional e AI search, e leitura de negocio por tras da arquitetura.',
    seoTitle: 'Estrategia SEO, Governanca e Crescimento Organico | Blog AUDITSEO',
    seoDescription:
      'Artigos sobre estrategia SEO, governanca editorial, custos, priorizacao, equipe, SEO local e integracao entre busca organica e IA.',
    introCards: [
      {
        title: 'Onde esta categoria atua',
        copy:
          'Ela faz a ponte entre conteudo, produto, comercial, paginas de servico e backlog tecnico. E a camada que organiza prioridade e evita esforco disperso.'
      },
      {
        title: 'Para quem ela e mais util',
        copy:
          'Fundadores, gestores de marketing, lideres de SEO e profissionais que precisam tomar decisao de investimento e arquitetura com criterio de negocio.'
      },
      {
        title: 'Ligacao com o restante do site',
        copy:
          'Os artigos desta categoria amarram metodologia, paginas institucionais, servicos, categorias do blog e futuras landing pages por nicho e cidade.'
      }
    ],
    serviceLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: 'SEO Local', path: '/servicos/seo-local/' },
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/' }
    ],
    nicheLinks: [
      { label: 'Metodologia', path: '/metodologia/' },
      { label: 'Agencia de SEO', path: '/agencia-de-seo/' }
    ],
    categoryKeywords: ['estrategia seo', 'seo para ia', 'quanto custa seo', 'roadmap seo'],
    faqs: [
      {
        question: 'Esta categoria mistura SEO tradicional e SEO para IA?',
        answer:
          'Sim. O foco estrategico exige justamente integrar as duas camadas para nao construir operacoes paralelas e conflitantes.'
      },
      {
        question: 'Os artigos daqui ajudam na contratacao de servico?',
        answer:
          'Sim. Eles ajudam a qualificar decisao, entender escopo, custo, prioridades e maturidade antes de um projeto comercial.'
      },
      {
        question: 'Estrategia aqui significa teoria sem execucao?',
        answer:
          'Nao. A categoria existe para ligar contexto de negocio a execucao pratica, backlog, paginas comerciais e organizacao editorial do site.'
      }
    ],
    featuredSlug: 'estrategia-seo-ia',
    pillarSlugs: ['guia-definitivo-seo-2026', 'roadmap-seo-ia', 'quanto-custa-seo'],
    articleSlugs: [
      'guia-definitivo-seo-2026',
      'estrategia-seo-ia',
      'integrar-seo-tradicional-ia',
      'roadmap-seo-ia',
      'futuro-seo-tendencias',
      'cases-sucesso-seo-ia',
      'erros-comuns-seo-ia',
      'seo-ia-vs-tradicional',
      'como-comecar-seo-ia',
      'equipe-seo-ia-skills',
      'checklist-final-presenca-ia',
      'como-escolher-agencia-seo',
      'agencia-seo-ou-consultoria-seo',
      'especialista-em-seo',
      'quanto-custa-seo',
      'consultoria-seo-ou-auditoria-seo',
      'quando-nao-contratar-seo',
      'geo-vs-seo',
      'google-meu-negocio-guia-completo',
      'quanto-custa-seo-para-clinicas-medicas',
      'em-quanto-tempo-seo-local-gera-resultado-para-clinicas-medicas',
      'seo-local-ou-google-ads-para-clinicas-medicas',
      'seo-local-ou-google-meu-negocio-para-clinicas-medicas',
      'google-meu-negocio-para-clinicas-medicas',
      'seo-local-vale-a-pena-para-clinicas-medicas',
      'agencia-seo-para-clinicas-medicas-como-escolher',
      'seo-para-cirurgia-plastica-como-funciona',
      'google-meu-negocio-para-cirurgia-plastica',
      'seo-local-ou-google-meu-negocio-para-cirurgia-plastica',
      'seo-para-dermatologistas-vale-a-pena',
      'seo-local-ou-google-meu-negocio-para-dermatologistas',
      'google-meu-negocio-para-dermatologistas',
      'seo-para-odontologia-como-funciona',
      'seo-local-ou-google-meu-negocio-para-odontologia',
      'google-meu-negocio-para-odontologia',
      'seo-para-escritorios-de-advocacia-funciona',
      'quanto-custa-seo-para-escritorios-de-advocacia',
      'em-quanto-tempo-seo-gera-resultado-para-escritorios-de-advocacia',
      'seo-para-escritorios-de-advocacia-ou-indicacao',
      'seo-para-energia-solar-como-gerar-demanda-qualificada',
      'quanto-custa-seo-para-energia-solar',
      'em-quanto-tempo-seo-gera-demanda-para-energia-solar',
      'seo-para-energia-solar-ou-midia-paga',
      'consultoria-seo-para-energia-solar-vale-a-pena',
      'seo-para-software-b2b-como-funciona',
      'quanto-custa-seo-para-software-b2b',
      'em-quanto-tempo-seo-gera-pipeline-para-software-b2b',
      'seo-para-software-b2b-ou-outbound',
      'seo-ou-trafego-pago-para-software-b2b',
      'consultoria-seo-para-software-b2b-vale-a-pena',
      'agencia-seo-para-empresas-em-barueri-como-escolher',
      'consultoria-seo-em-barueri-vale-a-pena',
      'auditoria-seo-em-barueri-quando-faz-sentido',
      'quando-criar-pagina-regional-no-interior-de-sao-paulo',
      'seo-local-para-clinicas-medicas-no-rio-de-janeiro-vale-a-pena',
      'seo-local-para-clinicas-medicas-em-belo-horizonte-vale-a-pena',
      'seo-local-para-clinicas-medicas-em-curitiba-vale-a-pena',
      'seo-local-para-clinicas-medicas-em-brasilia-vale-a-pena',
      'seo-local-para-clinicas-medicas-em-porto-alegre-vale-a-pena',
      'seo-local-para-odontologia-em-porto-alegre-vale-a-pena',
      'seo-local-para-dermatologistas-em-porto-alegre-vale-a-pena',
      'seo-para-escritorios-de-advocacia-em-porto-alegre-funciona',
      'seo-para-software-b2b-em-porto-alegre-como-funciona',
      'seo-para-energia-solar-em-porto-alegre-como-gerar-demanda-qualificada',
      'seo-local-para-odontologia-em-curitiba-vale-a-pena',
      'seo-local-para-odontologia-em-brasilia-vale-a-pena',
      'seo-local-para-dermatologistas-em-curitiba-vale-a-pena',
      'seo-local-para-dermatologistas-em-brasilia-vale-a-pena',
      'seo-para-escritorios-de-advocacia-em-curitiba-funciona',
      'seo-para-escritorios-de-advocacia-em-brasilia-funciona',
      'seo-para-software-b2b-em-curitiba-como-funciona',
      'seo-para-software-b2b-em-brasilia-como-funciona',
      'seo-local-para-odontologia-no-rio-de-janeiro-vale-a-pena',
      'seo-local-para-odontologia-em-belo-horizonte-vale-a-pena',
      'seo-local-para-dermatologistas-no-rio-de-janeiro-vale-a-pena',
      'seo-local-para-dermatologistas-em-belo-horizonte-vale-a-pena',
      'seo-para-escritorios-de-advocacia-no-rio-de-janeiro-funciona',
      'seo-para-escritorios-de-advocacia-em-belo-horizonte-funciona',
      'seo-para-software-b2b-no-rio-de-janeiro-como-funciona',
      'seo-para-software-b2b-em-belo-horizonte-como-funciona',
      'seo-para-energia-solar-no-rio-de-janeiro-como-gerar-demanda-qualificada',
      'seo-para-energia-solar-em-belo-horizonte-como-gerar-demanda-qualificada'
    ]
  }
];

export const blogFeaturedArticleSlug = 'estrategia-seo-ia';
export const blogPageSize = 24;

const categoryBySlug = new Map(blogCategories.map((category) => [category.slug, category]));
const articleToCategory = new Map<string, BlogCategoryDefinition>();

for (const category of blogCategories) {
  for (const slug of category.articleSlugs) {
    articleToCategory.set(slug, category);
  }
}

export function getBlogCategoryBySlug(slug: string) {
  return categoryBySlug.get(slug) ?? null;
}

export function getBlogCategoryForArticle(slug: string) {
  return articleToCategory.get(slug) ?? null;
}

export function getBlogCategoryNavigation() {
  return blogCategories.map((category) => ({
    slug: category.slug,
    title: category.shortTitle,
    path: `/blog/categoria/${category.slug}/`
  }));
}
