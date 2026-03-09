import type { CommercialSupportArticleSource } from './commercial-support-articles';

type SectorDecisionConfig = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  subtitle: string;
  badge: string;
  imagePath: string;
  sectorLabel: string;
  sectorLower: string;
  sectorPath: string;
  canonicalPath: string;
  cityPath: string;
  keywords: string[];
};

function createPricingArticle(config: SectorDecisionConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'estrategia',
    imagePath: config.imagePath,
    publishedTime: '2026-03-07T23:00:00-03:00',
    modifiedTime: '2026-03-07T23:00:00-03:00',
    readingTime: 8,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: `O que realmente pesa no custo em ${config.sectorLower}`,
        paragraphs: [
          `O custo real não depende só do tamanho do site. Em ${config.sectorLower}, ele depende da profundidade da arquitetura comercial, da concorrência e do quanto a operação ainda está distante do cenário ideal.`,
          'Projetos com poucas páginas úteis, pouca clareza de oferta e forte dependência de mídia paga tendem a exigir um escopo diferente de operações mais organizadas.'
        ],
        bullets: [
          'Quantidade de páginas comerciais que precisam nascer',
          'Complexidade da jornada de compra',
          'Peso da geografia e da comparação',
          'Nível de governança que o projeto vai exigir'
        ]
      },
      {
        title: 'Por que comparar só preço costuma atrapalhar',
        paragraphs: [
          'Comparar só mensalidade costuma esconder escopo, profundidade e qualidade da lógica comercial.',
          `Em ${config.sectorLower}, dois projetos com preço parecido podem gerar impactos muito diferentes se um enfrenta as páginas certas e o outro se limita a execução genérica.`
        ]
      },
      {
        title: 'Como avaliar se o investimento faz sentido',
        paragraphs: [
          'A pergunta correta não é apenas “quanto custa?”, mas “o que precisa ser construído para a busca gerar oportunidade mais qualificada?”.',
          'Quando a operação quer reduzir dependência de outbound, indicação ou mídia paga, SEO costuma entrar como infraestrutura comercial e não como custo isolado.'
        ]
      },
      {
        title: 'Qual é o melhor próximo passo',
        paragraphs: [
          `O próximo passo é validar a página comercial principal de ${config.sectorLower}, o serviço canônico envolvido e o nível de profundidade que a operação realmente precisa.`,
          'Isso evita comparar propostas rasas contra projetos que de fato atacam o problema principal.'
        ]
      }
    ],
    faqItems: [
      {
        question: `Existe um valor padrão de SEO para ${config.sectorLower}?`,
        answer: 'Não. O valor depende de escopo, competição, profundidade da arquitetura e quantidade de páginas comerciais que precisam ser estruturadas.'
      },
      {
        question: 'Comparar só mensalidade é suficiente?',
        answer: 'Não. Sem entender escopo e função das páginas, a comparação de preço costuma ser superficial.'
      },
      {
        question: 'Projeto mais barato pode sair caro?',
        answer: 'Sim. Principalmente quando entrega pouca profundidade comercial e não enfrenta a jornada que realmente gera oportunidade.'
      },
      {
        question: 'Como saber se a proposta está bem montada?',
        answer: 'Verifique se ela cobre arquitetura, mensagem, páginas de decisão, apoio editorial e prioridade por intenção comercial.'
      },
      {
        question: 'Qual é o melhor próximo passo?',
        answer: 'Analisar a página comercial principal, o serviço canônico e o tipo de demanda que a operação quer capturar antes de comparar preço.'
      }
    ],
    resourceLinks: [
      { label: 'Serviço canônico', path: config.canonicalPath },
      { label: 'Página comercial da vertical', path: config.sectorPath },
      { label: 'Praça principal', path: config.cityPath }
    ],
    ctaTitle: `QUER ENTENDER O ESCOPO CERTO PARA ${config.sectorLabel.toUpperCase()}?`,
    ctaCopy:
      'Se a meta é comparar investimento com critério comercial e não por preço isolado, o próximo passo é revisar a base de páginas e a profundidade real do projeto.',
    ctaPath: config.sectorPath,
    ctaLabel: 'Ver a página comercial da vertical'
  };
}

function createTimelineArticle(config: SectorDecisionConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'estrategia',
    imagePath: config.imagePath,
    publishedTime: '2026-03-07T23:10:00-03:00',
    modifiedTime: '2026-03-07T23:10:00-03:00',
    readingTime: 8,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: `Por que prazo não é linear em ${config.sectorLower}`,
        paragraphs: [
          `Em ${config.sectorLower}, prazo depende da base atual, da competição e do quanto a operação precisa corrigir antes de ganhar tração real.`,
          'Projetos com site confuso, páginas rasas e pouca clareza de oferta tendem a levar mais tempo do que operações já relativamente organizadas.'
        ]
      },
      {
        title: 'O que costuma acelerar evolução',
        paragraphs: [
          'Acelera quando a empresa prioriza primeiro as páginas que capturam intenção de contratação e deixa de dispersar energia em volume sem função.',
          'Também acelera quando a operação já tem condições mínimas de converter melhor a demanda que começa a chegar.'
        ],
        bullets: [
          'Página principal da vertical forte',
          'Hierarquia coerente entre serviço, segmento e praça',
          'Apoio editorial de objeção e comparação',
          'Mensuração orientada a oportunidade e não só tráfego'
        ]
      },
      {
        title: 'O que costuma atrasar resultado',
        paragraphs: [
          'Atrasam resultado a execução genérica, a ausência de priorização e a expectativa de que qualquer melhoria orgânica apareça rápido sem uma base comercial sólida.',
          'Também atrasa quando o site ainda não consegue sustentar bem a comparação e a decisão do comprador.'
        ]
      },
      {
        title: 'Como avaliar evolução com mais maturidade',
        paragraphs: [
          'A leitura correta não é só ranking. É observar aumento de descoberta qualificada, consultas melhores e impacto real na geração de oportunidade.',
          `Quando ${config.sectorLower} é tratada como frente comercial séria, o ganho aparece primeiro na qualidade da demanda antes de escalar em volume.`
        ]
      }
    ],
    faqItems: [
      {
        question: `Existe um prazo padrão de SEO para ${config.sectorLower}?`,
        answer: 'Não. O prazo depende da base atual, da concorrência e da velocidade com que as páginas certas entram no ar.'
      },
      {
        question: 'Blog acelera mais do que páginas comerciais?',
        answer: 'Nem sempre. Em muitos casos, as páginas comerciais entram antes na fila porque sustentam melhor a intenção de contratação.'
      },
      {
        question: 'O que normalmente faz parecer que SEO não funciona?',
        answer: 'Falta de priorização, base fraca de páginas e expectativa de prazo linear sem considerar maturidade do site.'
      },
      {
        question: 'Como saber se a evolução está saudável?',
        answer: 'Observe ganho em consultas qualificadas, melhora da jornada comercial e sinais de pipeline ou oportunidade, não apenas tráfego.'
      },
      {
        question: 'Qual é o melhor próximo passo?',
        answer: 'Revisar a página comercial principal da vertical e definir quais ativos precisam entrar antes para reduzir atrito no prazo.'
      }
    ],
    resourceLinks: [
      { label: 'Serviço canônico', path: config.canonicalPath },
      { label: 'Página comercial da vertical', path: config.sectorPath },
      { label: 'Praça principal', path: config.cityPath }
    ],
    ctaTitle: `QUER ENTENDER O QUE PRECISA ACONTECER PARA ${config.sectorLabel.toUpperCase()} GANHAR TRAÇÃO?`,
    ctaCopy:
      'Se a dúvida é prazo real e não promessa genérica, o próximo passo é revisar a base comercial da vertical e o backlog que mais influencia descoberta e conversão.',
    ctaPath: config.sectorPath,
    ctaLabel: 'Ver a página comercial da vertical'
  };
}

export const commercialSupportArticlesBofuSectorPricing: CommercialSupportArticleSource[] = [
  createTimelineArticle({
    slug: 'em-quanto-tempo-seo-gera-resultado-para-escritorios-de-advocacia',
    title: 'Em Quanto Tempo SEO Gera Resultado para Escritórios de Advocacia?',
    seoTitle: 'Em Quanto Tempo SEO Gera Resultado para Escritórios de Advocacia? | AUDITSEO',
    description:
      'Entenda o que realmente influencia prazo em SEO para escritórios de advocacia e por que resultado depende mais de arquitetura jurídica do que de expectativa genérica.',
    excerpt:
      'No jurídico, prazo depende da profundidade das áreas de atuação, da praça e da capacidade do site de capturar busca qualificada com clareza comercial.',
    subtitle:
      'Resultado em SEO jurídico não aparece só porque o site existe. Ele depende de páginas certas, hierarquia correta e leitura comercial mais madura.',
    badge: 'Jurídico e Prazo',
    imagePath: '/images/agencia-de-seo.png',
    sectorLabel: 'escritórios de advocacia',
    sectorLower: 'escritórios de advocacia',
    sectorPath: '/servicos/seo-para-escritorios-de-advocacia/',
    canonicalPath: '/servicos/consultoria-seo/',
    cityPath: '/cidades/sao-paulo/',
    keywords: [
      'em quanto tempo seo gera resultado para escritorios de advocacia',
      'prazo seo juridico',
      'seo para advogados quanto tempo',
      'resultado seo advocacia'
    ]
  }),
  createPricingArticle({
    slug: 'quanto-custa-seo-para-energia-solar',
    title: 'Quanto Custa SEO para Energia Solar?',
    seoTitle: 'Quanto Custa SEO para Energia Solar? | AUDITSEO',
    description:
      'Veja o que realmente influencia custo em SEO para energia solar e como avaliar escopo, profundidade comercial e retorno esperado no setor.',
    excerpt:
      'Em energia solar, preço sem escopo não serve. O custo depende do quanto a empresa precisa estruturar solução, aplicação, comparação e jornada comercial.',
    subtitle:
      'No setor de energia solar, o investimento certo depende menos do tamanho do site e mais da distância entre a operação atual e a estrutura comercial que a busca exige.',
    badge: 'Energia Solar e Orçamento',
    imagePath: '/images/agencia-de-seo.png',
    sectorLabel: 'energia solar',
    sectorLower: 'energia solar',
    sectorPath: '/servicos/consultoria-seo-para-energia-solar/',
    canonicalPath: '/servicos/consultoria-seo/',
    cityPath: '/cidades/sao-paulo/',
    keywords: [
      'quanto custa seo para energia solar',
      'preco seo energia solar',
      'orcamento seo energia solar',
      'consultoria seo energia solar valor'
    ]
  }),
  createTimelineArticle({
    slug: 'em-quanto-tempo-seo-gera-demanda-para-energia-solar',
    title: 'Em Quanto Tempo SEO Gera Demanda para Energia Solar?',
    seoTitle: 'Em Quanto Tempo SEO Gera Demanda para Energia Solar? | AUDITSEO',
    description:
      'Entenda o que influencia prazo em SEO para energia solar e por que resultado depende de páginas comerciais, solução e qualidade da oferta.',
    excerpt:
      'Prazo em SEO para energia solar depende da base comercial, da concorrência e da capacidade do site de explicar solução, aplicação e diferenciação.',
    subtitle:
      'No setor de energia solar, prazo melhora quando a empresa trata SEO como base comercial e não como produção genérica de conteúdo.',
    badge: 'Energia Solar e Prazo',
    imagePath: '/images/agencia-de-seo.png',
    sectorLabel: 'energia solar',
    sectorLower: 'energia solar',
    sectorPath: '/servicos/consultoria-seo-para-energia-solar/',
    canonicalPath: '/servicos/consultoria-seo/',
    cityPath: '/cidades/sao-paulo/',
    keywords: [
      'em quanto tempo seo gera demanda para energia solar',
      'prazo seo energia solar',
      'resultado seo energia solar',
      'seo energia solar quanto tempo'
    ]
  }),
  createPricingArticle({
    slug: 'quanto-custa-seo-para-software-b2b',
    title: 'Quanto Custa SEO para Software B2B?',
    seoTitle: 'Quanto Custa SEO para Software B2B? | AUDITSEO',
    description:
      'Entenda como avaliar custo em SEO para software B2B e por que escopo, categoria, comparação e profundidade comercial pesam mais do que preço isolado.',
    excerpt:
      'Em software B2B, custo depende do quanto a empresa precisa estruturar categoria, solução, comparação e apoio de decisão para gerar pipeline mais previsível.',
    subtitle:
      'Preço em SEO para software B2B só faz sentido quando se entende a jornada consultiva e a quantidade de ativos comerciais que o site ainda precisa ganhar.',
    badge: 'Software B2B e Orçamento',
    imagePath: '/images/agencia-de-seo.png',
    sectorLabel: 'software B2B',
    sectorLower: 'software B2B',
    sectorPath: '/servicos/consultoria-seo-para-software-b2b/',
    canonicalPath: '/servicos/consultoria-seo/',
    cityPath: '/cidades/sao-paulo/',
    keywords: [
      'quanto custa seo para software b2b',
      'preco seo saas',
      'orcamento seo software b2b',
      'consultoria seo software b2b valor'
    ]
  }),
  createTimelineArticle({
    slug: 'em-quanto-tempo-seo-gera-pipeline-para-software-b2b',
    title: 'Em Quanto Tempo SEO Gera Pipeline para Software B2B?',
    seoTitle: 'Em Quanto Tempo SEO Gera Pipeline para Software B2B? | AUDITSEO',
    description:
      'Veja o que realmente influencia prazo em SEO para software B2B e por que pipeline orgânico depende de categoria, solução e páginas com função clara.',
    excerpt:
      'Pipeline em software B2B não nasce de volume vazio. Prazo depende da base comercial do site, da categoria e da capacidade de sustentar busca consultiva.',
    subtitle:
      'Em software B2B, resultado aparece quando a empresa para de depender só de home e passa a tratar categoria, solução e comparação como ativos comerciais reais.',
    badge: 'Software B2B e Prazo',
    imagePath: '/images/agencia-de-seo.png',
    sectorLabel: 'software B2B',
    sectorLower: 'software B2B',
    sectorPath: '/servicos/consultoria-seo-para-software-b2b/',
    canonicalPath: '/servicos/consultoria-seo/',
    cityPath: '/cidades/sao-paulo/',
    keywords: [
      'em quanto tempo seo gera pipeline para software b2b',
      'prazo seo software b2b',
      'seo saas quanto tempo',
      'pipeline seo software b2b'
    ]
  })
];
