import type { CommercialSupportArticleSource } from './commercial-support-articles';

type AiOverviewCommercialConfig = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  subtitle: string;
  badge: string;
  imagePath: string;
  keywords: string[];
  resourceLinks: Array<{
    label: string;
    path: string;
  }>;
  ctaTitle: string;
  ctaCopy: string;
  ctaPath: string;
  ctaLabel: string;
};

function createAiOverviewCommercialArticle(config: AiOverviewCommercialConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'ai-overviews',
    imagePath: config.imagePath,
    publishedTime: '2026-03-21T08:00:00-03:00',
    modifiedTime: '2026-03-21T08:00:00-03:00',
    readingTime: 7,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: 'Quando a escolha deixa de ser teorica',
        paragraphs: [
          'A escolha deixa de ser teorica quando a empresa ja percebe que AI Overviews nao e so um tema editorial. Ele passou a influenciar descoberta, comparacao e a leitura do site como fonte.',
          'Nesse ponto, a pergunta certa deixa de ser se o tema importa e passa a ser qual modelo de operacao consegue sustentar o resultado com mais clareza.'
        ]
      },
      {
        title: 'O que uma boa frente comercial precisa sustentar',
        paragraphs: [
          'Uma frente comercial de AI Overviews precisa conectar entidade, arquitetura, pagina comercial e governanca. Sem isso, a operacao discute visibilidade, mas nao constrói um sistema consistente para ser citada.',
          'O que importa e se a oferta consegue sair do nivel de discurso e virar paginas, criterios e rotina de priorizacao.'
        ],
        bullets: [
          'Tese comercial clara para a oferta',
          'Papel definido para pagina, blog e servico',
          'Clareza sobre quando a camada tecnica vem antes',
          'Capacidade de medir o que realmente aproxima a citacao'
        ]
      },
      {
        title: 'Onde a maioria das operacoes erra',
        paragraphs: [
          'O erro mais comum e tratar AI Overviews como uma camada isolada, sem amarrar isso ao resto da arquitetura comercial.',
          'Outro erro e abrir novas URLs por sinonimo antes de consolidar a pagina que ja carrega a tese principal.'
        ],
        bullets: [
          'Muita promessa e pouca estrutura',
          'Canibalizacao entre paginas parecidas',
          'Falta de criterio entre agencia, consultoria e auditoria',
          'Ausencia de links e provas que sustentem a decisao'
        ]
      },
      {
        title: 'Qual e a porta de entrada mais racional',
        paragraphs: [
          'A porta de entrada mais racional depende de maturidade. Se a empresa precisa de execucao mais ampla, agencia tende a fazer mais sentido. Se precisa de direcao, consultoria tende a ganhar. Se falta diagnostico, auditoria entra primeiro.',
          'O erro e tentar resolver todos os cenarios com a mesma pagina ou com um unico discurso comercial.'
        ]
      }
    ],
    faqItems: [
      {
        question: 'AI Overviews sao um assunto de conteudo ou de negocio?',
        answer: 'Os dois. O tema afeta estrutura de conteudo, citabilidade, descoberta e a forma como a oferta aparece na disputa comercial.'
      },
      {
        question: 'Preciso de agencia, consultoria ou auditoria?',
        answer: 'Depende do estágio da operação. Agencia ajuda mais quando falta execucao. Consultoria ajuda mais quando falta direcao. Auditoria ajuda mais quando falta diagnostico.'
      },
      {
        question: 'AI Overviews exigem novas URLs toda hora?',
        answer: 'Nao. Primeiro vale consolidar a pagina com maior intenção e reforcar o cluster ao redor dela.'
      },
      {
        question: 'O que mais pesa nessa decisao?',
        answer: 'Tese comercial, governanca editorial, qualidade da arquitetura e capacidade de transformar descoberta em oportunidade.'
      },
      {
        question: 'Qual e o melhor proximo passo?',
        answer: 'Revisar a pagina comercial que deve liderar a tese e escolher a frente que a operação realmente consegue sustentar.'
      }
    ],
    resourceLinks: config.resourceLinks,
    ctaTitle: config.ctaTitle,
    ctaCopy: config.ctaCopy,
    ctaPath: config.ctaPath,
    ctaLabel: config.ctaLabel
  };
}

export const commercialSupportArticlesAiOverviewsCommercial: CommercialSupportArticleSource[] = [
  createAiOverviewCommercialArticle({
    slug: 'agencia-seo-para-ai-overviews-como-escolher',
    title: 'Agencia SEO para AI Overviews: Como Escolher',
    seoTitle: 'Agencia SEO para AI Overviews: Como Escolher | AUDITSEO',
    description:
      'Veja o que avaliar antes de contratar uma agencia SEO para AI Overviews e como separar tese, execucao e capacidade real de citacao.',
    excerpt:
      'Escolher uma agencia para AI Overviews exige olhar para autoridade topical, arquitetura, governanca editorial e capacidade de transformar descoberta em demanda.',
    subtitle:
      'Nem toda agencia que fala em IA tem estrutura para sustentar citabilidade. O criterio certo separa discurso generico de execucao que conecta AI Overviews, SEO tecnico e conversao.',
    badge: 'AI Overviews Comercial',
    imagePath: '/images/ai-overviews.jpg',
    keywords: [
      'agencia seo para ai overviews',
      'agencia especializada em ai overviews',
      'como escolher agencia de seo para ai overviews',
      'agencia de seo ai overviews'
    ],
    resourceLinks: [
      { label: 'Agencia de SEO', path: '/agencia-de-seo/' },
      { label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/' },
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' }
    ],
    ctaTitle: 'QUER ESCOLHER UMA AGENCIA QUE CONSEGUE SUSTENTAR AI OVERVIEWS?',
    ctaCopy:
      'Se a decisao ainda depende de provar tese, estrutura e capacidade de execucao, a pagina da agencia e o melhor ponto de partida para fechar o criterio.',
    ctaPath: '/agencia-de-seo/',
    ctaLabel: 'Ver a pagina da agencia'
  }),
  createAiOverviewCommercialArticle({
    slug: 'consultoria-seo-para-ai-overviews',
    title: 'Consultoria SEO para AI Overviews',
    seoTitle: 'Consultoria SEO para AI Overviews | AUDITSEO',
    description:
      'Entenda quando consultoria SEO para AI Overviews faz sentido e como ela organiza backlog, autoridade e citabilidade em uma operacao real.',
    excerpt:
      'Consultoria entra quando a empresa ja precisa de governanca continua para AI Overviews, sem transformar a busca generativa em experimento solto.',
    subtitle:
      'Se a base ja existe, a consultoria organiza prioridade, criterio editorial e evolucao do cluster. Se a base ainda e fraca, a entrada correta pode ser outra.',
    badge: 'AI Overviews e Governanca',
    imagePath: '/images/seo.jpeg',
    keywords: [
      'consultoria seo para ai overviews',
      'consultoria ai overviews',
      'consultor seo ai overviews',
      'governanca de ai overviews'
    ],
    resourceLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/' },
      { label: 'Auditoria SEO', path: '/servicos/auditoria-seo/' }
    ],
    ctaTitle: 'QUER ORGANIZAR AI OVERVIEWS COM GOVERNANCA CONTINUA?',
    ctaCopy:
      'Se o seu problema e priorizacao, acompanhamento e evolucao do cluster, a pagina de consultoria mostra melhor a frente correta.',
    ctaPath: '/servicos/consultoria-seo/',
    ctaLabel: 'Ver consultoria SEO'
  }),
  createAiOverviewCommercialArticle({
    slug: 'auditoria-seo-para-ai-overviews',
    title: 'Auditoria SEO para AI Overviews',
    seoTitle: 'Auditoria SEO para AI Overviews | AUDITSEO',
    description:
      'Saiba quando auditoria SEO para AI Overviews e a entrada correta para descobrir gargalos de tecnica, entidade e citabilidade.',
    excerpt:
      'Auditoria vale antes da expansao quando a operacao precisa diagnosticar o que trava indexacao, clareza e chance de ser citada em respostas generativas.',
    subtitle:
      'Antes de escalar AI Overviews, a operacao precisa saber se o problema esta na tecnica, na arquitetura ou na propria leitura editorial do site.',
    badge: 'AI Overviews e Diagnostico',
    imagePath: '/images/coreweb-vitals.jpeg',
    keywords: [
      'auditoria seo para ai overviews',
      'diagnostico ai overviews',
      'auditoria tecnica ai overviews',
      'citabilidade em ai overviews'
    ],
    resourceLinks: [
      { label: 'Auditoria SEO', path: '/servicos/auditoria-seo/' },
      { label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/' },
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' }
    ],
    ctaTitle: 'QUER SABER O QUE TRAVA AI OVERVIEWS ANTES DE ESCALAR?',
    ctaCopy:
      'Se ainda falta clareza sobre tecnica, entidade ou estrutura, a pagina de auditoria e a forma mais segura de priorizar a proxima etapa.',
    ctaPath: '/servicos/auditoria-seo/',
    ctaLabel: 'Ver auditoria SEO'
  }),
  createAiOverviewCommercialArticle({
    slug: 'agencia-seo-ou-consultoria-seo-para-ai-overviews',
    title: 'Agencia SEO ou Consultoria SEO para AI Overviews?',
    seoTitle: 'Agencia SEO ou Consultoria SEO para AI Overviews? | AUDITSEO',
    description:
      'Compare agencia SEO e consultoria SEO para AI Overviews e veja qual modelo faz mais sentido para o estagio atual da sua operacao.',
    excerpt:
      'Para AI Overviews, a decisao madura nao e escolher um rotulo. E entender quando a operacao precisa de execucao e quando precisa de direcao.',
    subtitle:
      'AI Overviews exige clareza de papel. Agencia executa mais. Consultoria orienta mais. O melhor modelo depende do que a operacao precisa agora.',
    badge: 'AI Overviews e Decisao',
    imagePath: '/images/agencia-de-seo.png',
    keywords: [
      'agencia seo ou consultoria seo para ai overviews',
      'agencia vs consultoria ai overviews',
      'consultoria vs agencia ai overviews',
      'modelo de contratacao ai overviews'
    ],
    resourceLinks: [
      { label: 'Agencia de SEO', path: '/agencia-de-seo/' },
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/' }
    ],
    ctaTitle: 'QUER DECIDIR O MODELO CERTO PARA AI OVERVIEWS?',
    ctaCopy:
      'Se a discussão ainda esta entre mais execucao ou mais direcao, a pagina de AI Overview Optimization ajuda a fechar o melhor caminho comercial.',
    ctaPath: '/servicos/ai-overview-optimization/',
    ctaLabel: 'Ver AI Overview Optimization'
  })
];
