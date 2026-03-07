import type { CommercialSupportArticleSource } from './commercial-support-articles';

type LocalHealthArticleConfig = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  subtitle: string;
  badge: string;
  cityDisplay: string;
  cityPath: string;
  servicePath: string;
  gbpPath: string;
  resourceLabel: string;
  keywordSet: string[];
};

type CitySupportConfig = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  subtitle: string;
  badge: string;
  cityDisplay: string;
  cityPath: string;
  servicePath: string;
  canonicalPath: string;
  keywords: string[];
};

function createLocalHealthArticle(config: LocalHealthArticleConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'estrategia',
    imagePath: '/images/google-meu-negocio.jpeg',
    publishedTime: '2026-03-07T18:10:00-03:00',
    modifiedTime: '2026-03-07T18:10:00-03:00',
    readingTime: 7,
    keywords: config.keywordSet,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: `Por que ${config.cityDisplay} pede leitura própria`,
        paragraphs: [
          `Não basta citar ${config.cityDisplay} no texto. Quando a cidade participa da decisão, a página precisa traduzir geografia, oferta e descoberta em um mesmo ativo comercial.`,
          `Sem essa camada, a busca local encontra a marca, mas não entende direito quando aquela operação faz sentido para quem está pesquisando.`
        ],
        bullets: [
          'Página local com mensagem própria',
          'Contexto urbano coerente com a oferta',
          'Integração com Maps e com a vertical principal',
          'CTA adaptado à intenção local'
        ]
      },
      {
        title: 'O que normalmente bloqueia a geração de demanda',
        paragraphs: [
          'O problema mais comum é tentar resolver a cidade com uma página nacional genérica ou com um perfil local isolado, sem apoio comercial suficiente no site.',
          'Nessa situação, a presença aparece, mas a descoberta não amadurece em contato qualificado.'
        ]
      },
      {
        title: 'Como saber se vale priorizar agora',
        paragraphs: [
          `Se ${config.cityDisplay} já pesa na captação, se o mapa participa da comparação e se a operação quer reduzir dependência de mídia paga, a prioridade tende a ser real.`,
          'O caminho mais seguro é organizar a camada local antes de escalar novas URLs sem função comercial clara.'
        ]
      },
      {
        title: 'Qual é o próximo passo prático',
        paragraphs: [
          'O próximo passo é olhar para a relação entre página local, vertical setorial, perfil no Google e contexto de decisão do comprador.',
          'Quando essas peças estão bem alinhadas, a cidade deixa de ser só menção e passa a funcionar como captura comercial organizada.'
        ]
      }
    ],
    faqItems: [
      {
        question: `${config.resourceLabel} vale a pena para qualquer operação em ${config.cityDisplay}?`,
        answer: `Na maior parte dos casos, sim, desde que a cidade já influencie descoberta, comparação e geração de contato.`
      },
      {
        question: `A cidade precisa de uma página própria para ${config.resourceLabel.toLowerCase()}?`,
        answer: 'Sim, quando a praça tem função comercial real e não deve ficar escondida atrás de uma página nacional genérica.'
      },
      {
        question: 'Google Meu Negócio entra junto nessa estratégia?',
        answer: 'Na maioria dos cenários locais, sim. Perfil e página comercial tendem a funcionar melhor quando são tratados como um sistema único.'
      },
      {
        question: 'Vale começar por essa camada mesmo sem um blog enorme?',
        answer: 'Sim. Em muitos casos, a camada comercial local é mais urgente do que escalar conteúdo sem base de conversão.'
      },
      {
        question: 'Como validar se a cidade já virou prioridade?',
        answer: 'Observe se a praça já participa da demanda, se o mapa influencia a descoberta e se a operação quer transformar buscas locais em contatos mais previsíveis.'
      }
    ],
    resourceLinks: [
      { label: config.resourceLabel, path: config.servicePath },
      { label: 'Google Meu Negócio local', path: config.gbpPath },
      { label: config.cityDisplay, path: config.cityPath }
    ],
    ctaTitle: `QUER VALIDAR SE ${config.cityDisplay.toUpperCase()} JÁ EXIGE UMA CAMADA LOCAL MAIS FORTE?`,
    ctaCopy:
      'Se a praça já participa da geração de demanda, o próximo passo é revisar a página comercial específica da cidade e o papel que ela deve cumprir no cluster.',
    ctaPath: config.servicePath,
    ctaLabel: 'Ver a página comercial da cidade'
  };
}

function createLawArticle(config: CitySupportConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'estrategia',
    imagePath: '/images/agencia-de-seo.png',
    publishedTime: '2026-03-07T18:20:00-03:00',
    modifiedTime: '2026-03-07T18:20:00-03:00',
    readingTime: 7,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: 'Por que o jurídico não deve depender só de página institucional',
        paragraphs: [
          'Escritórios de advocacia normalmente têm marca e reputação, mas isso não significa que o site esteja preparado para capturar busca por área de atuação e intenção comercial.',
          `Em ${config.cityDisplay}, onde o mercado é competitivo, a página precisa explicar melhor quando aquele escritório faz sentido e para quem.`
        ]
      },
      {
        title: 'Onde os escritórios mais perdem tração orgânica',
        paragraphs: [
          'Perdem quando tentam concentrar tudo em uma única página institucional ou quando publicam áreas de atuação sem função comercial clara.',
          'A consequência é baixa clareza para o Google e para o potencial cliente que já está comparando opções.'
        ],
        bullets: [
          'Áreas de atuação sem hierarquia',
          'Pouca diferenciação entre oferta e reputação',
          'Mensagem vaga para problemas jurídicos reais',
          'Dependência excessiva de networking e indicação'
        ]
      },
      {
        title: 'Como saber se a praça local justifica a página',
        paragraphs: [
          `Quando ${config.cityDisplay} já concentra demanda qualificada, a cidade deixa de ser detalhe e passa a orientar a leitura comercial da página.`,
          'Nessa hora, vale separar melhor o papel da página setorial, das páginas por área e da camada geográfica.'
        ]
      },
      {
        title: 'Qual é o próximo passo para o escritório',
        paragraphs: [
          'O próximo passo é revisar arquitetura por área de atuação, clareza de oferta e contexto local antes de aumentar volume de páginas.',
          'A meta não é parecer maior. É ser mais encontrável nas buscas que já sinalizam intenção de contratação.'
        ]
      }
    ],
    faqItems: [
      {
        question: `SEO funciona para escritórios de advocacia em ${config.cityDisplay}?`,
        answer: 'Funciona quando áreas de atuação, mensagem comercial e contexto local estão bem estruturados no site.'
      },
      {
        question: 'A página da cidade substitui páginas por área de atuação?',
        answer: 'Não. Ela organiza a camada geográfica e comercial. As áreas de atuação continuam tendo papel próprio.'
      },
      {
        question: 'Essa frente é só para grandes escritórios?',
        answer: 'Não. Escritórios menores também podem depender bastante de busca orgânica qualificada para crescer.'
      },
      {
        question: 'Quando a estratégia costuma falhar?',
        answer: 'Quando a arquitetura jurídica fica rasa, institucional demais e sem função clara para cada página principal.'
      },
      {
        question: 'Qual é o melhor próximo passo?',
        answer: 'Validar a página comercial da cidade, a hierarquia por serviço jurídico e o interlinking com ativos de decisão.'
      }
    ],
    resourceLinks: [
      { label: 'Consultoria SEO', path: config.canonicalPath },
      { label: config.title.replace(' funciona', ''), path: config.servicePath },
      { label: config.cityDisplay, path: config.cityPath }
    ],
    ctaTitle: `QUER VALIDAR A ESTRUTURA COMERCIAL DO SEU ESCRITÓRIO EM ${config.cityDisplay.toUpperCase()}?`,
    ctaCopy:
      'Se a praça já importa para a geração de demanda, o melhor próximo passo é revisar a página comercial específica da cidade e o papel das áreas de atuação.',
    ctaPath: config.servicePath,
    ctaLabel: 'Ver a página comercial jurídica'
  };
}

function createSoftwareArticle(config: CitySupportConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'estrategia',
    imagePath: '/images/agencia-de-seo.png',
    publishedTime: '2026-03-07T18:30:00-03:00',
    modifiedTime: '2026-03-07T18:30:00-03:00',
    readingTime: 7,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: 'Por que software B2B exige uma leitura própria de busca',
        paragraphs: [
          'SaaS e software B2B raramente convertem com uma home genérica. O comprador pesquisa categoria, problema, solução, comparação e prova antes de falar com vendas.',
          `Em ${config.cityDisplay}, essa leitura ainda se cruza com o contexto do ecossistema local, o que exige uma página comercial mais madura.`
        ]
      },
      {
        title: 'Onde a maior parte das operações trava',
        paragraphs: [
          'Trava quando o site fala só do produto e não da intenção de busca que antecede a comparação e a decisão.',
          'Nesses casos, a marca pode até ter boa narrativa institucional, mas perde presença nas buscas de categoria e solução.'
        ],
        bullets: [
          'Falta de páginas por categoria e solução',
          'Comparações sem função clara',
          'Dependência alta de outbound',
          'Baixa conexão entre SEO e descoberta assistida por IA'
        ]
      },
      {
        title: 'Quando a praça local passa a importar',
        paragraphs: [
          `Quando ${config.cityDisplay} já é uma base real de operação, equipe comercial ou aquisição, vale traduzir isso na arquitetura pública sem virar taxonomia artificial.`,
          'A cidade não substitui a tese da vertical. Ela reforça contexto, prova e aderência comercial.'
        ]
      },
      {
        title: 'Qual é o próximo passo mais racional',
        paragraphs: [
          'O próximo passo é organizar a relação entre páginas de categoria, solução, apoio BOFU e descoberta assistida por IA.',
          'Sem isso, a empresa continua disputando pipeline com excesso de mídia paga e pouca previsibilidade orgânica.'
        ]
      }
    ],
    faqItems: [
      {
        question: `SEO funciona para software B2B em ${config.cityDisplay}?`,
        answer: 'Funciona quando categoria, solução, comparação e mensagem comercial são organizadas para a forma como o comprador pesquisa.'
      },
      {
        question: 'Essa página local compete com a página canônica de consultoria SEO?',
        answer: 'Não. A página canônica apresenta o serviço amplo. A página da cidade traduz a oferta para um contexto operacional específico.'
      },
      {
        question: 'LLM Brand Presence entra junto nessa estratégia?',
        answer: 'Em muitos casos, sim. Principalmente quando a descoberta assistida por IA reforça comparações e presença de categoria.'
      },
      {
        question: 'Quando a empresa ainda não deveria abrir a página da cidade?',
        answer: 'Quando a praça ainda não tem função comercial real e a empresa está tentando usar geografia só para inflar cobertura aparente.'
      },
      {
        question: 'Qual é o melhor próximo passo?',
        answer: 'Revisar a página comercial da cidade, as páginas por categoria e a malha BOFU que sustenta a comparação.'
      }
    ],
    resourceLinks: [
      { label: 'Consultoria SEO', path: config.canonicalPath },
      { label: config.title.replace(' como funciona', ''), path: config.servicePath },
      { label: config.cityDisplay, path: config.cityPath }
    ],
    ctaTitle: `QUER VALIDAR A ESTRUTURA DE DEMANDA DO SEU SOFTWARE EM ${config.cityDisplay.toUpperCase()}?`,
    ctaCopy:
      'Se a operação já precisa ganhar busca por categoria, solução e comparação, o melhor próximo passo é revisar a página comercial específica da praça.',
    ctaPath: config.servicePath,
    ctaLabel: 'Ver a página comercial de software B2B'
  };
}

export const commercialSupportArticlesCuritibaBrasilia: CommercialSupportArticleSource[] = [
  createLocalHealthArticle({
    slug: 'seo-local-para-odontologia-em-curitiba-vale-a-pena',
    title: 'SEO Local para Odontologia em Curitiba Vale a Pena?',
    seoTitle: 'SEO Local para Odontologia em Curitiba Vale a Pena? | AUDITSEO',
    description: 'Entenda quando faz sentido priorizar SEO local para odontologia em Curitiba e como a cidade muda a leitura comercial da página.',
    excerpt: 'Em odontologia, cidade, mapa e procedimento influenciam a decisão cedo. Em Curitiba, a página local precisa responder isso com clareza comercial real.',
    subtitle: 'Curitiba não deve ser tratada como variação automática da capital. Em odontologia, a praça muda contexto, descoberta e decisão.',
    badge: 'Odontologia Local',
    cityDisplay: 'Curitiba',
    cityPath: '/cidades/curitiba/',
    servicePath: '/servicos/seo-local-para-odontologia-em-curitiba/',
    gbpPath: '/servicos/google-meu-negocio-para-odontologia-em-curitiba/',
    resourceLabel: 'SEO Local para Odontologia em Curitiba',
    keywordSet: ['seo local para odontologia em curitiba', 'seo para dentistas em curitiba', 'google maps para odontologia em curitiba']
  }),
  createLocalHealthArticle({
    slug: 'seo-local-para-odontologia-em-brasilia-vale-a-pena',
    title: 'SEO Local para Odontologia em Brasília Vale a Pena?',
    seoTitle: 'SEO Local para Odontologia em Brasília Vale a Pena? | AUDITSEO',
    description: 'Veja quando vale priorizar SEO local para odontologia em Brasília e quais sinais tornam a praça uma prioridade comercial real.',
    excerpt: 'Em odontologia, proximidade, especialidade e Google Maps pesam cedo. Em Brasília, a página local precisa traduzir isso com mais precisão.',
    subtitle: 'A capital federal exige uma leitura própria de cidade, especialidade e descoberta local para odontologia.',
    badge: 'Odontologia Local',
    cityDisplay: 'Brasília',
    cityPath: '/cidades/brasilia/',
    servicePath: '/servicos/seo-local-para-odontologia-em-brasilia/',
    gbpPath: '/servicos/google-meu-negocio-para-odontologia-em-brasilia/',
    resourceLabel: 'SEO Local para Odontologia em Brasília',
    keywordSet: ['seo local para odontologia em brasilia', 'seo para dentistas em brasilia', 'google maps para odontologia em brasilia']
  }),
  createLocalHealthArticle({
    slug: 'seo-local-para-dermatologistas-em-curitiba-vale-a-pena',
    title: 'SEO Local para Dermatologistas em Curitiba Vale a Pena?',
    seoTitle: 'SEO Local para Dermatologistas em Curitiba Vale a Pena? | AUDITSEO',
    description: 'Entenda quando SEO local para dermatologistas em Curitiba faz sentido e como a cidade muda a camada comercial da dermatologia.',
    excerpt: 'Dermatologia costuma disputar atenção por tratamento, confiança e contexto local. Em Curitiba, a página da cidade ajuda a qualificar melhor essa descoberta.',
    subtitle: 'Em dermatologia, descoberta local forte depende de contexto de tratamento, mapa e clareza comercial da cidade.',
    badge: 'Dermatologia Local',
    cityDisplay: 'Curitiba',
    cityPath: '/cidades/curitiba/',
    servicePath: '/servicos/seo-local-para-dermatologistas-em-curitiba/',
    gbpPath: '/servicos/google-meu-negocio-para-dermatologistas-em-curitiba/',
    resourceLabel: 'SEO Local para Dermatologistas em Curitiba',
    keywordSet: ['seo local para dermatologistas em curitiba', 'seo para dermatologistas em curitiba', 'maps para dermatologia em curitiba']
  }),
  createLocalHealthArticle({
    slug: 'seo-local-para-dermatologistas-em-brasilia-vale-a-pena',
    title: 'SEO Local para Dermatologistas em Brasília Vale a Pena?',
    seoTitle: 'SEO Local para Dermatologistas em Brasília Vale a Pena? | AUDITSEO',
    description: 'Veja quando SEO local para dermatologistas em Brasília vira prioridade comercial e como a praça altera a lógica da vertical.',
    excerpt: 'Em dermatologia, a cidade muda a forma como tratamento, confiança e proximidade se combinam. Brasília pede uma página local mais precisa.',
    subtitle: 'Brasília precisa ser tratada como praça própria quando a vertical de dermatologia depende de descoberta local e comparação rápida.',
    badge: 'Dermatologia Local',
    cityDisplay: 'Brasília',
    cityPath: '/cidades/brasilia/',
    servicePath: '/servicos/seo-local-para-dermatologistas-em-brasilia/',
    gbpPath: '/servicos/google-meu-negocio-para-dermatologistas-em-brasilia/',
    resourceLabel: 'SEO Local para Dermatologistas em Brasília',
    keywordSet: ['seo local para dermatologistas em brasilia', 'seo para dermatologistas em brasilia', 'maps para dermatologia em brasilia']
  }),
  createLawArticle({
    slug: 'seo-para-escritorios-de-advocacia-em-curitiba-funciona',
    title: 'SEO para Escritórios de Advocacia em Curitiba Funciona?',
    seoTitle: 'SEO para Escritórios de Advocacia em Curitiba Funciona? | AUDITSEO',
    description: 'Entenda quando SEO para escritórios de advocacia em Curitiba faz sentido e quais sinais mostram que a cidade merece uma página comercial própria.',
    excerpt: 'Em Curitiba, a concorrência jurídica pede clareza por área de atuação, autoridade e contexto local. Sem isso, o site fica institucional demais para captar busca comercial.',
    subtitle: 'Escritórios de advocacia em Curitiba precisam de uma página que traduza a cidade em argumento comercial, não só em menção geográfica.',
    badge: 'Jurídico Comercial',
    cityDisplay: 'Curitiba',
    cityPath: '/cidades/curitiba/',
    servicePath: '/servicos/seo-para-escritorios-de-advocacia-em-curitiba/',
    canonicalPath: '/servicos/consultoria-seo/',
    keywords: ['seo para escritorios de advocacia em curitiba', 'seo juridico em curitiba', 'advocacia curitiba seo']
  }),
  createLawArticle({
    slug: 'seo-para-escritorios-de-advocacia-em-brasilia-funciona',
    title: 'SEO para Escritórios de Advocacia em Brasília Funciona?',
    seoTitle: 'SEO para Escritórios de Advocacia em Brasília Funciona? | AUDITSEO',
    description: 'Veja quando SEO para escritórios de advocacia em Brasília faz sentido e como estruturar melhor a camada comercial jurídica da cidade.',
    excerpt: 'Brasília concentra demanda jurídica qualificada, mas o site do escritório precisa explicar melhor áreas de atuação e contexto de contratação para capturar essa busca.',
    subtitle: 'Quando a praça já pesa na demanda jurídica, a cidade precisa entrar na arquitetura comercial com função real.',
    badge: 'Jurídico Comercial',
    cityDisplay: 'Brasília',
    cityPath: '/cidades/brasilia/',
    servicePath: '/servicos/seo-para-escritorios-de-advocacia-em-brasilia/',
    canonicalPath: '/servicos/consultoria-seo/',
    keywords: ['seo para escritorios de advocacia em brasilia', 'seo juridico em brasilia', 'advocacia brasilia seo']
  }),
  createSoftwareArticle({
    slug: 'seo-para-software-b2b-em-curitiba-como-funciona',
    title: 'SEO para Software B2B em Curitiba: Como Funciona',
    seoTitle: 'SEO para Software B2B em Curitiba: Como Funciona | AUDITSEO',
    description: 'Entenda como SEO para software B2B em Curitiba funciona na prática e quando a cidade precisa entrar na arquitetura comercial.',
    excerpt: 'Em software B2B, a cidade não entra para inflar cobertura. Ela entra quando já participa de operação, venda e aquisição de demanda qualificada.',
    subtitle: 'Curitiba pode reforçar busca por categoria, solução e comparação quando a praça já faz parte da operação comercial do software.',
    badge: 'Software B2B',
    cityDisplay: 'Curitiba',
    cityPath: '/cidades/curitiba/',
    servicePath: '/servicos/consultoria-seo-para-software-b2b-em-curitiba/',
    canonicalPath: '/servicos/consultoria-seo/',
    keywords: ['seo para software b2b em curitiba', 'consultoria seo saas curitiba', 'software b2b curitiba seo']
  }),
  createSoftwareArticle({
    slug: 'seo-para-software-b2b-em-brasilia-como-funciona',
    title: 'SEO para Software B2B em Brasília: Como Funciona',
    seoTitle: 'SEO para Software B2B em Brasília: Como Funciona | AUDITSEO',
    description: 'Veja como SEO para software B2B em Brasília funciona e quando a praça merece uma página comercial dedicada.',
    excerpt: 'Em Brasília, software B2B precisa combinar categoria, solução e contexto comercial da praça para ganhar busca mais qualificada.',
    subtitle: 'A cidade só entra quando a operação precisa traduzir melhor categoria, solução e contexto comercial na aquisição orgânica.',
    badge: 'Software B2B',
    cityDisplay: 'Brasília',
    cityPath: '/cidades/brasilia/',
    servicePath: '/servicos/consultoria-seo-para-software-b2b-em-brasilia/',
    canonicalPath: '/servicos/consultoria-seo/',
    keywords: ['seo para software b2b em brasilia', 'consultoria seo saas brasilia', 'software b2b brasilia seo']
  })
];
