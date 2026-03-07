import type { CommercialSupportArticleSource } from './commercial-support-articles';

type CityConfig = {
  name: string;
  path: string;
  titleLocation: string;
  sentenceLocation: string;
};

type LocalHealthArticleConfig = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  subtitle: string;
  badge: string;
  city: CityConfig;
  servicePath: string;
  gbpPath: string;
  resourceLabel: string;
  keywords: string[];
};

type CitySupportConfig = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  subtitle: string;
  badge: string;
  city: CityConfig;
  servicePath: string;
  keywords: string[];
};

const rioCity: CityConfig = {
  name: 'Rio de Janeiro',
  path: '/cidades/rio-de-janeiro/',
  titleLocation: 'no Rio de Janeiro',
  sentenceLocation: 'no Rio de Janeiro'
};

const beloHorizonteCity: CityConfig = {
  name: 'Belo Horizonte',
  path: '/cidades/belo-horizonte/',
  titleLocation: 'em Belo Horizonte',
  sentenceLocation: 'em Belo Horizonte'
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
    publishedTime: '2026-03-07T19:00:00-03:00',
    modifiedTime: '2026-03-07T19:00:00-03:00',
    readingTime: 7,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: `Por que ${config.city.name} pede leitura própria`,
        paragraphs: [
          `Não basta citar ${config.city.name} no texto. Quando a cidade participa da decisão, a página precisa traduzir geografia, oferta e descoberta em um mesmo ativo comercial.`,
          'Sem essa camada, a busca local encontra a marca, mas não entende direito quando aquela operação faz sentido para quem está pesquisando.'
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
          `Se ${config.city.name} já pesa na captação, se o mapa participa da comparação e se a operação quer reduzir dependência de mídia paga, a prioridade tende a ser real.`,
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
        question: `${config.resourceLabel} vale a pena para qualquer operação ${config.city.titleLocation}?`,
        answer: 'Na maior parte dos casos, sim, desde que a cidade já influencie descoberta, comparação e geração de contato.'
      },
      {
        question: 'A cidade precisa de uma página própria para isso?',
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
      { label: config.city.name, path: config.city.path }
    ],
    ctaTitle: `QUER VALIDAR SE ${config.city.name.toUpperCase()} JÁ EXIGE UMA CAMADA LOCAL MAIS FORTE?`,
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
    publishedTime: '2026-03-07T19:10:00-03:00',
    modifiedTime: '2026-03-07T19:10:00-03:00',
    readingTime: 7,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: 'Por que o jurídico não deve depender só de página institucional',
        paragraphs: [
          'Escritórios de advocacia normalmente têm marca e reputação, mas isso não significa que o site esteja preparado para capturar busca por área de atuação e intenção comercial.',
          `Em ${config.city.name}, onde o mercado é competitivo, a página precisa explicar melhor quando aquele escritório faz sentido e para quem.`
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
          `Quando ${config.city.name} já concentra demanda qualificada, a cidade deixa de ser detalhe e passa a orientar a leitura comercial da página.`,
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
        question: `${config.title} realmente funciona?`,
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
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: config.title.replace(' Funciona?', ''), path: config.servicePath },
      { label: config.city.name, path: config.city.path }
    ],
    ctaTitle: `QUER VALIDAR A ESTRUTURA COMERCIAL DO SEU ESCRITÓRIO EM ${config.city.name.toUpperCase()}?`,
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
    publishedTime: '2026-03-07T19:20:00-03:00',
    modifiedTime: '2026-03-07T19:20:00-03:00',
    readingTime: 7,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: 'Por que software B2B exige uma leitura própria de busca',
        paragraphs: [
          'SaaS e software B2B raramente convertem com uma home genérica. O comprador pesquisa categoria, problema, solução, comparação e prova antes de falar com vendas.',
          `Em ${config.city.name}, essa leitura ainda se cruza com o contexto do ecossistema local, o que exige uma página comercial mais madura.`
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
          `Quando ${config.city.name} já é uma base real de operação, equipe comercial ou aquisição, vale traduzir isso na arquitetura pública sem virar taxonomia artificial.`,
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
        question: `${config.title} funciona?`,
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
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: config.title.replace(': Como Funciona', '').replace(' Como Funciona', ''), path: config.servicePath },
      { label: config.city.name, path: config.city.path }
    ],
    ctaTitle: `QUER VALIDAR A ESTRUTURA DE DEMANDA DO SEU SOFTWARE EM ${config.city.name.toUpperCase()}?`,
    ctaCopy:
      'Se a operação já precisa ganhar busca por categoria, solução e comparação, o melhor próximo passo é revisar a página comercial específica da praça.',
    ctaPath: config.servicePath,
    ctaLabel: 'Ver a página comercial de software B2B'
  };
}

function createEnergyArticle(config: CitySupportConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'estrategia',
    imagePath: '/images/agencia-de-seo.png',
    publishedTime: '2026-03-07T19:30:00-03:00',
    modifiedTime: '2026-03-07T19:30:00-03:00',
    readingTime: 7,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: 'Por que energia solar precisa de jornada consultiva real',
        paragraphs: [
          'Quem pesquisa energia solar compara investimento, aplicação, retorno e confiança técnica. A página comercial precisa responder a esse nível de comparação.',
          `Quando a operação atua ${config.city.sentenceLocation}, vale traduzir essa praça na arquitetura comercial sem transformar geografia em enfeite.`
        ]
      },
      {
        title: 'Onde a maior parte das empresas perde demanda',
        paragraphs: [
          'Perde quando o site apresenta a empresa, mas não organiza claramente solução, aplicação e próximos passos comerciais.',
          'Nesse cenário, a busca até encontra a marca, mas a geração de lead fica dependente demais de mídia paga e prospecção.'
        ],
        bullets: [
          'Páginas de solução rasas',
          'Pouca diferenciação comercial',
          'Escassez de prova e comparação',
          'Demanda orgânica pouco previsível'
        ]
      },
      {
        title: 'Quando a cidade entra na estrutura comercial',
        paragraphs: [
          `Quando ${config.city.name} já participa da venda, da operação comercial ou do posicionamento da empresa, a praça deixa de ser detalhe e passa a ser contexto útil.`,
          'A cidade não substitui a tese do setor. Ela ajuda a tornar a captura de demanda mais aderente à realidade comercial.'
        ]
      },
      {
        title: 'Qual é o próximo passo para gerar demanda melhor',
        paragraphs: [
          'O próximo passo é alinhar páginas de solução, apoio BOFU e contexto local em uma mesma jornada consultiva.',
          'Sem essa base, a empresa segue com pouca previsibilidade orgânica e excesso de dependência de canais pagos.'
        ]
      }
    ],
    faqItems: [
      {
        question: `${config.title} faz sentido para empresas consultivas?`,
        answer: 'Faz, principalmente quando a operação precisa gerar demanda qualificada e sustentar uma jornada de decisão mais comparativa.'
      },
      {
        question: 'A cidade realmente muda a estratégia?',
        answer: 'Muda quando a praça já faz parte da operação comercial e precisa aparecer na arquitetura pública com função real.'
      },
      {
        question: 'SEO ajuda a reduzir dependência de mídia paga no setor?',
        answer: 'Ajuda quando a empresa passa a capturar melhor busca por solução, categoria e contexto de compra, sem depender só de campanhas.'
      },
      {
        question: 'Essa página compete com a página setorial de energia solar?',
        answer: 'Não. O hub setorial apoia o contexto da vertical. A página da cidade traduz a oferta para uma intenção local e comercial mais aderente.'
      },
      {
        question: 'Qual é o melhor próximo passo?',
        answer: 'Validar a página comercial da praça, a arquitetura por solução e os ativos BOFU que ajudam a reduzir objeção e aumentar confiança.'
      }
    ],
    resourceLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: config.title.replace(': Como Gerar Demanda Qualificada', '').replace(' Como Gerar Demanda Qualificada', ''), path: config.servicePath },
      { label: 'Energia solar', path: '/nichos/energia-solar/' }
    ],
    ctaTitle: `QUER VALIDAR COMO GERAR DEMANDA ORGÂNICA MELHOR EM ${config.city.name.toUpperCase()}?`,
    ctaCopy:
      'Se a operação ainda depende demais de mídia paga ou prospecção, o melhor próximo passo é revisar a página comercial específica da praça e o papel das páginas de solução.',
    ctaPath: config.servicePath,
    ctaLabel: 'Ver a página comercial de energia solar'
  };
}

export const commercialSupportArticlesRioBh: CommercialSupportArticleSource[] = [
  createLocalHealthArticle({
    slug: 'seo-local-para-odontologia-no-rio-de-janeiro-vale-a-pena',
    title: 'SEO Local para Odontologia no Rio de Janeiro Vale a Pena?',
    seoTitle: 'SEO Local para Odontologia no Rio de Janeiro Vale a Pena? | AUDITSEO',
    description: 'Entenda quando faz sentido priorizar SEO local para odontologia no Rio de Janeiro e como a cidade muda a leitura comercial da página.',
    excerpt: 'Em odontologia, cidade, mapa e procedimento influenciam a decisão cedo. No Rio de Janeiro, a página local precisa responder isso com clareza comercial real.',
    subtitle: 'O Rio não deve ser tratado como variação automática da capital paulista. Em odontologia, a praça muda contexto, descoberta e decisão.',
    badge: 'Odontologia Local',
    city: rioCity,
    servicePath: '/servicos/seo-local-para-odontologia-em-rio-de-janeiro/',
    gbpPath: '/servicos/google-meu-negocio-para-odontologia-em-rio-de-janeiro/',
    resourceLabel: 'SEO Local para Odontologia no Rio de Janeiro',
    keywords: ['seo local para odontologia no rio de janeiro', 'seo para dentistas no rio de janeiro', 'google maps para odontologia no rio']
  }),
  createLocalHealthArticle({
    slug: 'seo-local-para-odontologia-em-belo-horizonte-vale-a-pena',
    title: 'SEO Local para Odontologia em Belo Horizonte Vale a Pena?',
    seoTitle: 'SEO Local para Odontologia em Belo Horizonte Vale a Pena? | AUDITSEO',
    description: 'Veja quando vale priorizar SEO local para odontologia em Belo Horizonte e quais sinais tornam a praça uma prioridade comercial real.',
    excerpt: 'Em odontologia, proximidade, especialidade e Google Maps pesam cedo. Em Belo Horizonte, a página local precisa traduzir isso com mais precisão.',
    subtitle: 'Belo Horizonte exige uma leitura própria de cidade, especialidade e descoberta local para odontologia.',
    badge: 'Odontologia Local',
    city: beloHorizonteCity,
    servicePath: '/servicos/seo-local-para-odontologia-em-belo-horizonte/',
    gbpPath: '/servicos/google-meu-negocio-para-odontologia-em-belo-horizonte/',
    resourceLabel: 'SEO Local para Odontologia em Belo Horizonte',
    keywords: ['seo local para odontologia em belo horizonte', 'seo para dentistas em belo horizonte', 'google maps para odontologia em belo horizonte']
  }),
  createLocalHealthArticle({
    slug: 'seo-local-para-dermatologistas-no-rio-de-janeiro-vale-a-pena',
    title: 'SEO Local para Dermatologistas no Rio de Janeiro Vale a Pena?',
    seoTitle: 'SEO Local para Dermatologistas no Rio de Janeiro Vale a Pena? | AUDITSEO',
    description: 'Entenda quando SEO local para dermatologistas no Rio de Janeiro faz sentido e como a cidade muda a camada comercial da dermatologia.',
    excerpt: 'Dermatologia costuma disputar atenção por tratamento, confiança e contexto local. No Rio de Janeiro, a página da cidade ajuda a qualificar melhor essa descoberta.',
    subtitle: 'Em dermatologia, descoberta local forte depende de contexto de tratamento, mapa e clareza comercial da cidade.',
    badge: 'Dermatologia Local',
    city: rioCity,
    servicePath: '/servicos/seo-local-para-dermatologistas-em-rio-de-janeiro/',
    gbpPath: '/servicos/google-meu-negocio-para-dermatologistas-em-rio-de-janeiro/',
    resourceLabel: 'SEO Local para Dermatologistas no Rio de Janeiro',
    keywords: ['seo local para dermatologistas no rio de janeiro', 'seo para dermatologistas no rio', 'maps para dermatologia no rio de janeiro']
  }),
  createLocalHealthArticle({
    slug: 'seo-local-para-dermatologistas-em-belo-horizonte-vale-a-pena',
    title: 'SEO Local para Dermatologistas em Belo Horizonte Vale a Pena?',
    seoTitle: 'SEO Local para Dermatologistas em Belo Horizonte Vale a Pena? | AUDITSEO',
    description: 'Veja quando SEO local para dermatologistas em Belo Horizonte vira prioridade comercial e como a praça altera a lógica da vertical.',
    excerpt: 'Em dermatologia, a cidade muda a forma como tratamento, confiança e proximidade se combinam. Belo Horizonte pede uma página local mais precisa.',
    subtitle: 'A praça só deve entrar quando descoberta local e comparação realmente participam da geração de demanda da vertical.',
    badge: 'Dermatologia Local',
    city: beloHorizonteCity,
    servicePath: '/servicos/seo-local-para-dermatologistas-em-belo-horizonte/',
    gbpPath: '/servicos/google-meu-negocio-para-dermatologistas-em-belo-horizonte/',
    resourceLabel: 'SEO Local para Dermatologistas em Belo Horizonte',
    keywords: ['seo local para dermatologistas em belo horizonte', 'seo para dermatologistas em belo horizonte', 'maps para dermatologia em belo horizonte']
  }),
  createLawArticle({
    slug: 'seo-para-escritorios-de-advocacia-no-rio-de-janeiro-funciona',
    title: 'SEO para Escritórios de Advocacia no Rio de Janeiro Funciona?',
    seoTitle: 'SEO para Escritórios de Advocacia no Rio de Janeiro Funciona? | AUDITSEO',
    description: 'Entenda quando SEO para escritórios de advocacia no Rio de Janeiro faz sentido e quais sinais mostram que a cidade merece uma página comercial própria.',
    excerpt: 'No Rio de Janeiro, a concorrência jurídica pede clareza por área de atuação, autoridade e contexto local. Sem isso, o site fica institucional demais para captar busca comercial.',
    subtitle: 'Escritórios de advocacia no Rio precisam de uma página que traduza a cidade em argumento comercial, não só em menção geográfica.',
    badge: 'Jurídico Comercial',
    city: rioCity,
    servicePath: '/servicos/seo-para-escritorios-de-advocacia-em-rio-de-janeiro/',
    keywords: ['seo para escritorios de advocacia no rio de janeiro', 'seo juridico no rio de janeiro', 'advocacia rio seo']
  }),
  createLawArticle({
    slug: 'seo-para-escritorios-de-advocacia-em-belo-horizonte-funciona',
    title: 'SEO para Escritórios de Advocacia em Belo Horizonte Funciona?',
    seoTitle: 'SEO para Escritórios de Advocacia em Belo Horizonte Funciona? | AUDITSEO',
    description: 'Veja quando SEO para escritórios de advocacia em Belo Horizonte faz sentido e como estruturar melhor a camada comercial jurídica da cidade.',
    excerpt: 'Belo Horizonte concentra demanda jurídica qualificada, mas o site do escritório precisa explicar melhor áreas de atuação e contexto de contratação para capturar essa busca.',
    subtitle: 'Quando a praça já pesa na demanda jurídica, a cidade precisa entrar na arquitetura comercial com função real.',
    badge: 'Jurídico Comercial',
    city: beloHorizonteCity,
    servicePath: '/servicos/seo-para-escritorios-de-advocacia-em-belo-horizonte/',
    keywords: ['seo para escritorios de advocacia em belo horizonte', 'seo juridico em belo horizonte', 'advocacia bh seo']
  }),
  createSoftwareArticle({
    slug: 'seo-para-software-b2b-no-rio-de-janeiro-como-funciona',
    title: 'SEO para Software B2B no Rio de Janeiro: Como Funciona',
    seoTitle: 'SEO para Software B2B no Rio de Janeiro: Como Funciona | AUDITSEO',
    description: 'Entenda como SEO para software B2B no Rio de Janeiro funciona na prática e quando a cidade precisa entrar na arquitetura comercial.',
    excerpt: 'Em software B2B, a cidade não entra para inflar cobertura. Ela entra quando já participa de operação, venda e aquisição de demanda qualificada.',
    subtitle: 'O Rio pode reforçar busca por categoria, solução e comparação quando a praça já faz parte da operação comercial do software.',
    badge: 'Software B2B',
    city: rioCity,
    servicePath: '/servicos/consultoria-seo-para-software-b2b-em-rio-de-janeiro/',
    keywords: ['seo para software b2b no rio de janeiro', 'consultoria seo saas rio de janeiro', 'software b2b rio seo']
  }),
  createSoftwareArticle({
    slug: 'seo-para-software-b2b-em-belo-horizonte-como-funciona',
    title: 'SEO para Software B2B em Belo Horizonte: Como Funciona',
    seoTitle: 'SEO para Software B2B em Belo Horizonte: Como Funciona | AUDITSEO',
    description: 'Veja como SEO para software B2B em Belo Horizonte funciona e quando a praça merece uma página comercial dedicada.',
    excerpt: 'Em Belo Horizonte, software B2B precisa combinar categoria, solução e contexto comercial da praça para ganhar busca mais qualificada.',
    subtitle: 'A cidade só entra quando a operação precisa traduzir melhor categoria, solução e contexto comercial na aquisição orgânica.',
    badge: 'Software B2B',
    city: beloHorizonteCity,
    servicePath: '/servicos/consultoria-seo-para-software-b2b-em-belo-horizonte/',
    keywords: ['seo para software b2b em belo horizonte', 'consultoria seo saas bh', 'software b2b bh seo']
  }),
  createEnergyArticle({
    slug: 'seo-para-energia-solar-no-rio-de-janeiro-como-gerar-demanda-qualificada',
    title: 'SEO para Energia Solar no Rio de Janeiro: Como Gerar Demanda Qualificada',
    seoTitle: 'SEO para Energia Solar no Rio de Janeiro: Como Gerar Demanda Qualificada | AUDITSEO',
    description: 'Entenda como SEO para energia solar no Rio de Janeiro pode gerar demanda orgânica mais útil para empresas consultivas do setor.',
    excerpt: 'No setor de energia solar, demanda útil depende de páginas de solução, contexto comercial e uma jornada menos rasa. No Rio, isso pede uma leitura própria da praça.',
    subtitle: 'A praça entra quando a operação quer traduzir melhor solução, confiança e aplicação para uma jornada consultiva local.',
    badge: 'Energia Solar',
    city: rioCity,
    servicePath: '/servicos/consultoria-seo-para-energia-solar-em-rio-de-janeiro/',
    keywords: ['seo para energia solar no rio de janeiro', 'demanda organica energia solar rio', 'consultoria seo energia solar rio']
  }),
  createEnergyArticle({
    slug: 'seo-para-energia-solar-em-belo-horizonte-como-gerar-demanda-qualificada',
    title: 'SEO para Energia Solar em Belo Horizonte: Como Gerar Demanda Qualificada',
    seoTitle: 'SEO para Energia Solar em Belo Horizonte: Como Gerar Demanda Qualificada | AUDITSEO',
    description: 'Veja como SEO para energia solar em Belo Horizonte pode gerar demanda orgânica mais qualificada para empresas do setor.',
    excerpt: 'Energia solar depende de confiança, solução e leitura consultiva. Em Belo Horizonte, a página comercial precisa refletir isso com mais maturidade.',
    subtitle: 'A cidade vira contexto comercial útil quando ajuda a sustentar descoberta por solução e geração de demanda mais previsível.',
    badge: 'Energia Solar',
    city: beloHorizonteCity,
    servicePath: '/servicos/consultoria-seo-para-energia-solar-em-belo-horizonte/',
    keywords: ['seo para energia solar em belo horizonte', 'demanda organica energia solar bh', 'consultoria seo energia solar belo horizonte']
  })
];
