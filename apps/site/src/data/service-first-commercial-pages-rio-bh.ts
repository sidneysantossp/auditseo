import type { CommercialPageBrief, CommercialInternalLink } from './commercial-page-briefs';
import type { ServiceFirstCommercialPage } from './service-first-commercial-pages';

type RequireBrief = (slug: string) => CommercialPageBrief;

type CityConfig = {
  name: string;
  path: string;
  titleLocation: string;
  sentenceLocation: string;
  heroLocation: string;
  serviceSlugSuffix: string;
};

type HealthSectorConfig = {
  displayTitle: string;
  heroAccent: string;
  servicePath: string;
  supportPath: string;
  supportLabel: string;
  gbpSupportPath: string;
  gbpSupportLabel: string;
  summaryLabel: string;
  marketFocus: string;
  offerFocus: string;
};

const rioCity: CityConfig = {
  name: 'Rio de Janeiro',
  path: '/cidades/rio-de-janeiro/',
  titleLocation: 'no Rio de Janeiro',
  sentenceLocation: 'no Rio de Janeiro',
  heroLocation: 'NO RIO DE JANEIRO',
  serviceSlugSuffix: 'em-rio-de-janeiro'
};

const beloHorizonteCity: CityConfig = {
  name: 'Belo Horizonte',
  path: '/cidades/belo-horizonte/',
  titleLocation: 'em Belo Horizonte',
  sentenceLocation: 'em Belo Horizonte',
  heroLocation: 'EM BELO HORIZONTE',
  serviceSlugSuffix: 'em-belo-horizonte'
};

const odontologiaSector: HealthSectorConfig = {
  displayTitle: 'Odontologia',
  heroAccent: 'ODONTOLOGIA',
  servicePath: '/servicos/seo-para-odontologia/',
  supportPath: '/blog/seo-para-odontologia-como-funciona/',
  supportLabel: 'SEO para odontologia: como funciona',
  gbpSupportPath: '/blog/google-meu-negocio-para-odontologia/',
  gbpSupportLabel: 'Google Meu Negócio para odontologia',
  summaryLabel: 'odontologia',
  marketFocus: 'procedimentos, agenda, proximidade e decisão rápida',
  offerFocus: 'procedimentos, captação local e geração de consultas qualificadas'
};

const dermatologiaSector: HealthSectorConfig = {
  displayTitle: 'Dermatologistas',
  heroAccent: 'DERMATOLOGISTAS',
  servicePath: '/servicos/seo-para-dermatologistas/',
  supportPath: '/blog/seo-para-dermatologistas-vale-a-pena/',
  supportLabel: 'SEO para dermatologistas vale a pena',
  gbpSupportPath: '/blog/google-meu-negocio-para-dermatologistas/',
  gbpSupportLabel: 'Google Meu Negócio para dermatologistas',
  summaryLabel: 'dermatologistas',
  marketFocus: 'tratamentos, confiança, autoridade local e busca por proximidade',
  offerFocus: 'tratamentos, descoberta urbana e contatos mais qualificados'
};

function getCityHighlights(city: CityConfig) {
  return [city.name, 'Busca Local', 'Google Maps', 'Página Comercial'];
}

function createHealthRelatedLinks(
  city: CityConfig,
  sector: HealthSectorConfig,
  localArticlePath: string,
  localArticleLabel: string,
  complementPath: string,
  complementLabel: string
): CommercialInternalLink[] {
  return [
    { label: sector.displayTitle, path: sector.servicePath, reason: 'Página setorial-mãe da vertical.' },
    { label: city.name, path: city.path, reason: 'Contexto geográfico principal.' },
    { label: sector.supportLabel, path: sector.supportPath, reason: 'Apoio BOFU setorial.' },
    { label: localArticleLabel, path: localArticlePath, reason: 'Apoio BOFU local para decisão.' },
    { label: complementLabel, path: complementPath, reason: 'Complemento local da mesma frente.' }
  ];
}

function createHealthSeoPage(
  requireBrief: RequireBrief,
  city: CityConfig,
  sector: HealthSectorConfig,
  slug: string,
  displayTitle: string,
  localArticlePath: string,
  localArticleLabel: string,
  gbpPath: string
): ServiceFirstCommercialPage {
  return {
    slug,
    seoTitle: `${displayTitle} | AUDITSEO`,
    description: `${displayTitle} com foco em ${sector.offerFocus}, Google Maps e estrutura comercial orientada à cidade.`,
    imagePath: '/images/google-meu-negocio.jpeg',
    displayTitle,
    badge: `${sector.displayTitle}, ${city.name} e Busca Local`,
    heroTitlePrefix: 'SEO LOCAL PARA ',
    heroTitleAccent: sector.heroAccent,
    heroTitleSuffix: city.heroLocation,
    heroSubtitle:
      `${city.sentenceLocation.charAt(0).toUpperCase()}${city.sentenceLocation.slice(1)}, a vertical de ${sector.summaryLabel} precisa alinhar cidade, especialidade e descoberta local para não depender só de indicação ou mídia paga. Quando a página comercial local é clara, o Google entende melhor quando aquela operação faz sentido.`,
    highlights: getCityHighlights(city),
    heroCard: {
      title: 'Quando essa página faz sentido',
      copy:
        `Quando a operação atende ${city.name}, quer fortalecer descoberta orgânica e ainda não articulou página local, especialidade e mapa numa mesma estrutura comercial.`,
      links: [
        { label: `Ver ${sector.displayTitle}`, path: sector.servicePath, reason: 'Página setorial-mãe.' },
        { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
        { label: `Ver ${city.name}`, path: city.path, reason: 'Contexto geográfico principal.' }
      ]
    },
    stats: [
      { value: '1', label: 'Cidade priorizada', copy: `${city.name} já entra como praça validada da expansão comercial.` },
      { value: '3', label: 'Camadas críticas', copy: 'Setor, cidade e mapa precisam conversar.' },
      { value: '0', label: 'Espaço para ruído', copy: 'Página local vaga não sustenta busca comercial.' },
      { value: '100%', label: 'Dependência de clareza', copy: 'Mensagem, geografia e próximo passo precisam estar alinhados.' }
    ],
    marketCards: [
      {
        title: 'Busca local com intenção real',
        copy: `${city.sentenceLocation.charAt(0).toUpperCase()}${city.sentenceLocation.slice(1)}, ${sector.marketFocus} costumam participar cedo da decisão. Sem página local forte, essa intenção se dispersa.`
      },
      {
        title: 'Descoberta mais coerente',
        copy: 'Quando cidade, página local e perfil no Google trabalham juntos, a operação reduz ruído e tende a receber contatos melhores.'
      },
      {
        title: 'Menos dependência de mídia paga',
        copy: 'A camada local bem montada ajuda a transformar busca orgânica em demanda útil sem depender só de campanhas.'
      }
    ],
    coreOffer: `${displayTitle} conectando especialidade, contexto urbano, Google Maps e páginas comerciais para aumentar a geração de contatos qualificados.`,
    painPoints: [
      `Baixa visibilidade para ${sector.summaryLabel} em buscas geográficas ${city.sentenceLocation}.`,
      'Página comercial sem intenção local suficiente.',
      'Perfil local e site operando de forma desalinhada.',
      'Dependência excessiva de indicação, mídia paga ou redes sociais.'
    ],
    deliveryItems: [
      'Arquitetura local para cidade, especialidade e página comercial.',
      'Integração entre SEO local, GBP e descoberta qualificada.',
      'FAQ comercial para objeções reais de decisão.',
      'Interlinking entre cidade, vertical e ativos BOFU.',
      'Base para expansão controlada da praça.'
    ],
    methodSteps: [
      { title: 'Diagnóstico local', copy: `Mapeamos como a operação aparece hoje ${city.sentenceLocation} e onde a arquitetura atual desperdiça intenção comercial local.` },
      { title: 'Papel da página da cidade', copy: 'Definimos a função da página local dentro da vertical setorial sem duplicar a página nacional.' },
      { title: 'Integração com Maps', copy: 'Alinhamos página, sinais locais e perfil da empresa para reforçar descoberta coerente.' },
      { title: 'Conversão', copy: 'Ajustamos copy, prova e CTA para transformar busca em contato com menos atrito.' },
      { title: 'Escala controlada', copy: 'Usamos desempenho real para decidir se a praça pede novas páginas derivadas ou reforço editorial.' }
    ],
    differentiators: [
      `Leitura local específica para ${city.name}.`,
      'Foco em contato qualificado, não só em visibilidade.',
      'Integração entre mapa, cidade e página comercial.',
      'Base para crescer a praça sem inflar a arquitetura.'
    ],
    proofPoints: [
      `Página setorial de ${sector.displayTitle.toLowerCase()} já publicada.`,
      'Serviço canônico de SEO Local já ativo.',
      'Blog BOFU setorial e local integrado à malha comercial.',
      `Página de ${city.name} já publicada como apoio geográfico.`
    ],
    relatedLinks: createHealthRelatedLinks(city, sector, localArticlePath, localArticleLabel, gbpPath, `Google Meu Negócio para ${sector.displayTitle} ${city.titleLocation}`),
    faqItems: [
      { question: `${displayTitle} funciona em uma praça competitiva?`, answer: 'Funciona quando cidade, oferta, página comercial e mapa são tratados como um sistema e não como ativos isolados.' },
      { question: 'O que muda entre a página local e a página setorial?', answer: 'A página setorial organiza a tese comercial da vertical. A página local traduz essa tese para a intenção específica da cidade.' },
      { question: 'Google Meu Negócio entra junto nessa estratégia?', answer: 'Na maioria dos casos, sim. Perfil local e página comercial tendem a se reforçar mutuamente.' },
      { question: 'Vale abrir páginas ainda mais granulares dentro da cidade?', answer: 'Só quando houver demanda observável, função comercial clara e diferença real de contexto.' },
      { question: 'Quanto tempo leva para gerar resultado?', answer: 'Depende da base atual, da concorrência e da velocidade de execução. O foco correto é medir descoberta e contatos qualificados.' },
      { question: 'Essa página compete com a página setorial?', answer: 'Não deve competir. A vertical-mãe sustenta a tese comercial; a página local traduz essa tese para a cidade.' },
      { question: 'A operação precisa ter várias unidades para isso funcionar?', answer: 'Não. Mesmo operações mais enxutas podem depender fortemente da cidade e da descoberta local para gerar novos contatos.' },
      { question: `Quando contratar ${displayTitle.toLowerCase()} faz mais sentido?`, answer: `Quando ${city.name} já influencia a geração de demanda e a operação quer transformar melhor a busca local em contato.` }
    ],
    ctaTitle: `QUER FAZER SUA OPERAÇÃO GANHAR MAIS DESCOBERTA ORGÂNICA EM ${city.name.toUpperCase()}?`,
    ctaCopy:
      `Se ${city.name} já faz parte da sua geração de demanda, mas o Google ainda não está sustentando essa descoberta com a clareza necessária, o melhor início é um diagnóstico local orientado à página, à cidade e ao mapa.`,
    ctaPrimaryLabel: `Solicitar diagnóstico em ${city.name}`,
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: city.name,
    brief: requireBrief(slug)
  };
}

function createHealthGbpPage(
  requireBrief: RequireBrief,
  city: CityConfig,
  sector: HealthSectorConfig,
  slug: string,
  displayTitle: string,
  localArticlePath: string,
  localArticleLabel: string,
  seoLocalPath: string
): ServiceFirstCommercialPage {
  return {
    slug,
    seoTitle: `${displayTitle} | AUDITSEO`,
    description: `${displayTitle} com foco em mapa, perfil da empresa, relevância local e integração com páginas comerciais da cidade.`,
    imagePath: '/images/google-meu-negocio.jpeg',
    displayTitle,
    badge: `Maps, ${city.name} e Descoberta Imediata`,
    heroTitlePrefix: 'GOOGLE MEU NEGÓCIO PARA ',
    heroTitleAccent: sector.heroAccent,
    heroTitleSuffix: city.heroLocation,
    heroSubtitle:
      `${city.sentenceLocation.charAt(0).toUpperCase()}${city.sentenceLocation.slice(1)}, o perfil local ajuda a filtrar descoberta, comparação e rota. Quando o Google Business Profile está alinhado à página comercial certa, a operação tende a ganhar mais relevância local e mais clareza de oferta.`,
    highlights: ['Google Maps', city.name, 'GBP', 'Busca por Proximidade'],
    heroCard: {
      title: 'Quando essa página faz sentido',
      copy: `Quando a operação já depende de mapa e comparação local em ${city.name}, mas ainda não integrou perfil, especialidade e página comercial em uma mesma lógica operacional.`,
      links: [
        { label: 'Ver Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
        { label: `Ver ${sector.displayTitle.toLowerCase()} ${city.titleLocation}`, path: seoLocalPath, reason: 'Página local complementar.' },
        { label: `Ver ${city.name}`, path: city.path, reason: 'Contexto geográfico principal.' }
      ]
    },
    stats: [
      { value: '1', label: 'Canal crítico', copy: 'Maps pesa cedo na jornada local.' },
      { value: '3', label: 'Sinais decisivos', copy: 'Consistência, geografia e contexto comercial.' },
      { value: '0', label: 'Espaço para improviso', copy: 'Cadastro solto não sustenta descoberta local.' },
      { value: '100%', label: 'Dependência de coerência', copy: 'Perfil, cidade e página precisam reforçar a mesma intenção.' }
    ],
    marketCards: [
      { title: 'Busca por proximidade', copy: `${city.sentenceLocation.charAt(0).toUpperCase()}${city.sentenceLocation.slice(1)}, parte relevante da decisão local passa por proximidade, percepção de confiança e facilidade de contato.` },
      { title: 'Perfil e página local', copy: 'Quando o perfil local está desalinhado com a página comercial, a descoberta perde força e a conversão tende a cair.' },
      { title: 'Especialidade e clareza', copy: 'A integração entre perfil, cidade e especialidade ajuda o Google e o usuário a entender melhor quando aquela operação faz sentido.' }
    ],
    coreOffer: `${displayTitle} conectando mapa, perfil local e páginas comerciais para reforçar descoberta e ação mais qualificada.`,
    painPoints: [
      'Perfil local sem sinais claros de relevância e conversão.',
      'Baixa consistência entre perfil, site e oferta principal.',
      'Perda de contatos locais em pesquisas por proximidade.',
      'Pouca geração de rotas, ligações e contatos mais qualificados.'
    ],
    deliveryItems: [
      'Integração entre GBP, página local e vertical setorial.',
      'Revisão de coerência entre perfil, cidade e oferta.',
      'FAQ comercial para dúvidas de decisão local.',
      'Blocos de apoio para reforçar prova e contato.',
      'Base para evoluir descoberta local com mais consistência.'
    ],
    methodSteps: [
      { title: 'Leitura do perfil', copy: `Mapeamos como o perfil participa hoje da descoberta local ${city.sentenceLocation} e onde perde relevância frente à concorrência.` },
      { title: 'Integração com o site', copy: 'Ajustamos a relação entre perfil local, página comercial da cidade e página setorial da vertical.' },
      { title: 'Sinais de relevância', copy: 'Organizamos os sinais visíveis da operação para reforçar geografia, contexto e especialidade.' },
      { title: 'Conversão local', copy: 'Melhoramos a lógica de contato para que mapa e site empurrem o usuário para o mesmo próximo passo.' },
      { title: 'Acompanhamento', copy: 'Usamos performance real para decidir próximos ajustes de descoberta local e evolução da malha comercial.' }
    ],
    differentiators: [
      'Integração real entre Maps e página comercial.',
      'Leitura orientada à vertical, não a negócio local genérico.',
      'Foco em contato qualificado e não só em visualização do perfil.',
      'Base para crescer a praça com disciplina.'
    ],
    proofPoints: [
      'Serviço canônico de Google Meu Negócio já publicado.',
      `Página local de ${sector.displayTitle.toLowerCase()} ${city.titleLocation} já ativa.`,
      'Artigo BOFU local já integrado ao blog.',
      'Base metodológica da AUDITSEO já pública.'
    ],
    relatedLinks: [
      { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
      { label: `SEO Local para ${sector.displayTitle} ${city.titleLocation}`, path: seoLocalPath, reason: 'Página local complementar.' },
      { label: sector.gbpSupportLabel, path: sector.gbpSupportPath, reason: 'Apoio BOFU temático.' },
      { label: localArticleLabel, path: localArticlePath, reason: 'Apoio BOFU local de decisão.' },
      { label: city.name, path: city.path, reason: 'Contexto geográfico principal.' },
      { label: sector.displayTitle, path: sector.servicePath, reason: 'Vertical-mãe da operação.' }
    ],
    faqItems: [
      { question: `${displayTitle} sozinho resolve a descoberta local?`, answer: 'Não. O perfil ajuda muito, mas precisa estar alinhado a uma página local forte e à vertical principal da operação.' },
      { question: `Qual a diferença entre GBP e SEO local ${city.titleLocation}?`, answer: 'GBP é parte da estratégia. SEO local inclui também página da cidade, estrutura do site e contexto comercial da operação.' },
      { question: 'A página do site realmente interfere no mapa?', answer: 'Sim. Quando cidade, especialidade e página comercial se reforçam, a descoberta local tende a ganhar mais coerência.' },
      { question: 'Quando essa frente merece prioridade?', answer: 'Quando a operação já depende de mapa para descoberta e quer aumentar a qualidade dos contatos vindos do Google.' },
      { question: 'Isso vale para uma única unidade?', answer: 'Sim. Mesmo operações mais enxutas podem depender bastante de proximidade e perfil local para serem encontradas.' },
      { question: 'Perfil desatualizado realmente prejudica?', answer: 'Prejudica porque reduz confiança, quebra coerência e deixa a operação mais frágil na comparação local.' },
      { question: 'Essa página compete com a página canônica de GBP?', answer: 'Não. A página canônica apresenta o serviço amplo; esta página traduz a oferta para a cidade e o contexto local.' },
      { question: `Quando contratar ${displayTitle.toLowerCase()} faz mais sentido?`, answer: `Quando a operação quer reforçar descoberta local em ${city.name}, integrar melhor mapa e site e melhorar a qualidade do contato vindo do Google.` }
    ],
    ctaTitle: `QUER FAZER O MAPA AJUDAR MAIS SUA OPERAÇÃO EM ${city.name.toUpperCase()}?`,
    ctaCopy:
      'Se o perfil local ainda não sustenta a descoberta e o contato como deveria, o melhor início é um diagnóstico orientado a Google Maps, página comercial e contexto da cidade.',
    ctaPrimaryLabel: `Solicitar diagnóstico de GBP em ${city.name}`,
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: city.name,
    brief: requireBrief(slug)
  };
}

function createLawCityPage(requireBrief: RequireBrief, city: CityConfig, slug: string): ServiceFirstCommercialPage {
  const displayTitle = `SEO para Escritórios de Advocacia ${city.titleLocation}`;
  const localArticlePath = city.name === 'Rio de Janeiro'
    ? '/blog/seo-para-escritorios-de-advocacia-no-rio-de-janeiro-funciona/'
    : '/blog/seo-para-escritorios-de-advocacia-em-belo-horizonte-funciona/';

  return {
    slug,
    seoTitle: `${displayTitle} | AUDITSEO`,
    description: `${displayTitle} com foco em áreas de atuação, autoridade, busca qualificada e geração de oportunidades comerciais mais previsíveis.`,
    imagePath: '/images/agencia-de-seo.png',
    displayTitle,
    badge: 'Jurídico, Autoridade e Busca Comercial',
    heroTitlePrefix: 'SEO PARA ',
    heroTitleAccent: 'ESCRITÓRIOS DE ADVOCACIA',
    heroTitleSuffix: city.heroLocation,
    heroSubtitle:
      `${city.sentenceLocation.charAt(0).toUpperCase()}${city.sentenceLocation.slice(1)}, o escritório precisa transformar autoridade institucional em descoberta orgânica mais previsível. Isso exige páginas por área de atuação, mensagem comercial clara e leitura local da praça.`,
    highlights: ['Advocacia', city.name, 'Áreas de Atuação', 'Busca Qualificada'],
    heroCard: {
      title: 'Quando essa página faz sentido',
      copy: `Quando o escritório já depende de indicação, quer ganhar visibilidade orgânica em áreas estratégicas e precisa estruturar melhor a presença comercial em ${city.name}.`,
      links: [
        { label: 'Ver Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
        { label: 'Ver advocacia', path: '/nichos/escritorios-advocacia/', reason: 'Hub setorial de apoio.' },
        { label: `Ver ${city.name}`, path: city.path, reason: 'Contexto geográfico principal.' }
      ]
    },
    stats: [
      { value: '1', label: 'Praça prioritária', copy: `${city.name} já entra como praça jurídica priorizada na expansão.` },
      { value: '3', label: 'Camadas críticas', copy: 'Área de atuação, mensagem e contexto local.' },
      { value: '0', label: 'Espaço para institucional vazio', copy: 'Página genérica não sustenta busca jurídica qualificada.' },
      { value: '100%', label: 'Foco em clareza', copy: 'Autoridade e oferta precisam aparecer com mais nitidez.' }
    ],
    marketCards: [
      { title: 'Busca por área de atuação', copy: 'O potencial cliente costuma pesquisar problema, área de atuação e contexto de contratação antes de preencher formulário.' },
      { title: 'Autoridade sem ruído', copy: 'A página precisa equilibrar credibilidade, clareza comercial e estrutura orientada à decisão sem exagero institucional.' },
      { title: 'Captação menos dependente de networking', copy: 'SEO entra para transformar busca qualificada em novas oportunidades sem depender só de relacionamento e indicação.' }
    ],
    coreOffer: `${displayTitle} com foco em áreas de atuação, autoridade, contexto local e geração de oportunidades orgânicas mais qualificadas.`,
    painPoints: [
      'Baixa visibilidade para áreas de atuação relevantes.',
      'Site institucional forte, mas comercialmente raso.',
      'Dependência alta de networking e indicação.',
      `Pouca profundidade local para sustentar descoberta em ${city.name}.`
    ],
    deliveryItems: [
      'Arquitetura por áreas de atuação sem canibalização.',
      'Mensagem comercial ajustada para confiança e clareza.',
      'FAQ comercial para objeções, escopo e diferenciação.',
      'Interlinking entre página setorial, cidade e recursos de decisão.',
      'Base para crescer a vertical jurídica da praça sem ruído.'
    ],
    methodSteps: [
      { title: 'Diagnóstico da demanda', copy: 'Mapeamos como o escritório é encontrado hoje, quais áreas têm tração e onde a arquitetura atual desperdiça intenção comercial.' },
      { title: 'Arquitetura por área de atuação', copy: 'Definimos a função da página principal e das páginas derivadas sem repetir copy jurídica.' },
      { title: 'Posicionamento comercial', copy: 'Ajustamos a mensagem para explicar o serviço com clareza e sem depender só de tom institucional.' },
      { title: 'Autoridade e confiança', copy: 'Conectamos prova, metodologia, equipe e diferenciais à leitura comercial da página.' },
      { title: 'Escala controlada', copy: 'Usamos desempenho real para decidir quando abrir novas páginas por área, cidade ou frente editorial.' }
    ],
    differentiators: [
      'Leitura comercial adaptada ao setor jurídico.',
      'Arquitetura pensada para áreas de atuação sem canibalização.',
      'Equilíbrio entre autoridade institucional e demanda orgânica.',
      `Foco em ${city.name} como praça jurídica relevante.`
    ],
    proofPoints: [
      'Serviço canônico de Consultoria SEO já publicado.',
      'Hub setorial de escritórios de advocacia já ativo.',
      `Página de ${city.name} já existente como suporte geográfico.`,
      'Base institucional e metodológica da AUDITSEO já pública.'
    ],
    relatedLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'SEO para Escritórios de Advocacia', path: '/servicos/seo-para-escritorios-de-advocacia/', reason: 'Página setorial-mãe da vertical.' },
      { label: 'Escritórios de advocacia', path: '/nichos/escritorios-advocacia/', reason: 'Hub setorial de apoio.' },
      { label: city.name, path: city.path, reason: 'Contexto geográfico principal.' },
      { label: 'SEO para escritórios de advocacia funciona?', path: localArticlePath, reason: 'Apoio BOFU local de decisão.' },
      { label: 'Como escolher agência SEO', path: '/blog/como-escolher-agencia-seo/', reason: 'Apoio BOFU complementar.' }
    ],
    faqItems: [
      { question: `${displayTitle} funciona em uma praça competitiva?`, answer: 'Funciona quando áreas de atuação, mensagem comercial e contexto local estão bem estruturados no site.' },
      { question: 'Qual a diferença entre essa página e uma página institucional do escritório?', answer: 'A página institucional apresenta a marca. Esta página organiza a intenção comercial e a descoberta orgânica por área e contexto local.' },
      { question: 'Vale criar páginas por área de atuação?', answer: 'Na maioria dos casos, sim, desde que exista demanda real e diferença clara de intenção e escopo.' },
      { question: 'Essa estratégia também depende de SEO local?', answer: 'Depende quando a geografia influencia a decisão. Em serviços jurídicos, contexto local pode pesar bastante na busca inicial.' },
      { question: 'Quanto tempo leva para gerar resultado?', answer: 'Depende da base atual, da concorrência e da profundidade da arquitetura. O foco correto é medir aumento de oportunidades qualificadas.' },
      { question: 'O setor jurídico exige algum cuidado especial na copy?', answer: 'Exige. A página precisa ser clara, confiável e profissional, sem promessas vazias nem exagero institucional.' },
      { question: 'Essa página substitui a estratégia de conteúdo do blog?', answer: 'Não. A página comercial captura intenção de contratação. O blog qualifica decisão, reforça autoridade e apoia áreas de atuação.' },
      { question: `Quando contratar SEO para escritório em ${city.name} faz mais sentido?`, answer: 'Quando o escritório quer depender menos de indicação isolada e transformar melhor a busca orgânica em novas oportunidades comerciais.' }
    ],
    ctaTitle: `QUER FAZER O SEU ESCRITÓRIO GANHAR MAIS DESCOBERTA ORGÂNICA EM ${city.name.toUpperCase()}?`,
    ctaCopy:
      'Se hoje a autoridade do escritório não está se convertendo em descoberta orgânica recorrente, o melhor início é um diagnóstico comercial orientado a áreas de atuação, mensagem e busca qualificada.',
    ctaPrimaryLabel: `Solicitar diagnóstico para escritório em ${city.name}`,
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: city.name,
    brief: requireBrief(slug)
  };
}

function createSoftwareCityPage(requireBrief: RequireBrief, city: CityConfig, slug: string): ServiceFirstCommercialPage {
  const displayTitle = `Consultoria SEO para Software B2B ${city.titleLocation}`;
  const localArticlePath = city.name === 'Rio de Janeiro'
    ? '/blog/seo-para-software-b2b-no-rio-de-janeiro-como-funciona/'
    : '/blog/seo-para-software-b2b-em-belo-horizonte-como-funciona/';

  return {
    slug,
    seoTitle: `${displayTitle} | AUDITSEO`,
    description: `${displayTitle} com foco em categoria, solução, comparação e geração de demanda orgânica qualificada.`,
    imagePath: '/images/agencia-de-seo.png',
    displayTitle,
    badge: 'Software B2B, Categoria e Busca Complexa',
    heroTitlePrefix: 'CONSULTORIA SEO PARA ',
    heroTitleAccent: 'SOFTWARE B2B',
    heroTitleSuffix: city.heroLocation,
    heroSubtitle:
      `Software B2B ${city.sentenceLocation} exige uma arquitetura que capture busca por categoria, problema, comparação e solução. Não basta ter uma página institucional elegante se o produto não é encontrado nos momentos certos da jornada.`,
    highlights: ['Software B2B', city.name, 'Busca de Categoria', 'Demanda Consultiva'],
    heroCard: {
      title: 'Quando software B2B perde tração orgânica',
      copy: 'Quando o site fala muito de produto, mas pouco da intenção real de busca do comprador. Isso enfraquece categoria, comparação e páginas de solução.',
      links: [
        { label: 'Ver Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
        { label: 'Ver LLM Brand Presence', path: '/servicos/llm-brand-presence/', reason: 'Complemento relevante para descoberta assistida por IA.' },
        { label: `Ver ${city.name}`, path: city.path, reason: 'Contexto geográfico principal.' }
      ]
    },
    stats: [
      { value: '1', label: 'Mercado complexo', copy: 'Busca por software B2B envolve categoria, comparação e prova.' },
      { value: '3', label: 'Camadas de captura', copy: 'Problema, solução e categoria precisam de páginas próprias.' },
      { value: '0', label: 'Espaço para home genérica', copy: 'Home sozinha não sustenta descoberta para produto complexo.' },
      { value: '100%', label: 'Dependência de contexto', copy: 'Comprador B2B exige clareza, prova e leitura técnica da solução.' }
    ],
    marketCards: [
      { title: 'Categoria e comparação', copy: 'O decisor costuma pesquisar categoria, contexto de uso e alternativas antes de falar com vendas. A arquitetura precisa refletir isso com precisão.' },
      { title: 'Venda consultiva', copy: 'A jornada é mais longa e menos impulsiva. O site precisa preparar comparação, confiança e narrativa comercial em múltiplas páginas.' },
      { title: 'Descoberta em IA e busca tradicional', copy: 'Para software B2B, descoberta orgânica e presença em respostas de IA tendem a se reforçar quando a entidade e a solução estão bem estruturadas.' }
    ],
    coreOffer: `${displayTitle} conectando busca de categoria, solução, comparação e demanda orgânica qualificada.`,
    painPoints: [
      'Baixa visibilidade para termos de categoria e solução.',
      'Site com copy técnica, mas sem malha comercial suficiente.',
      'Dependência de outbound e mídia paga para manter pipeline.',
      'Jornada comparativa sem páginas adequadas para suportar decisão.'
    ],
    deliveryItems: [
      'Arquitetura comercial para categoria, solução, comparação e caso de uso.',
      'Integração entre SEO consultivo e presença de marca em IA.',
      'Blocos de prova e FAQ para reduzir atrito no funil.',
      'Interlinking entre serviço, apoio editorial e ativos institucionais.',
      'Governança para crescer sem canibalizar categoria e produto.'
    ],
    methodSteps: [
      { title: 'Mapeamento de busca', copy: 'Levantamos como o mercado procura a categoria, os problemas e as soluções que o software resolve.' },
      { title: 'Arquitetura comercial', copy: 'Definimos o papel de páginas de categoria, solução, comparação e apoio editorial para construir descoberta útil.' },
      { title: 'Posicionamento do produto', copy: 'Ajustamos a mensagem para tornar a oferta mais compreensível, comparável e orientada à decisão.' },
      { title: 'Integração com IA', copy: 'Conectamos a base SEO à lógica de descoberta assistida por LLMs quando isso reforça a presença da marca.' },
      { title: 'Evolução por pipeline', copy: 'Usamos sinais de demanda, consultas e conversão para priorizar a próxima leva de páginas e conteúdos.' }
    ],
    differentiators: [
      'Leitura comercial adaptada a software B2B e SaaS.',
      'Integração entre SEO tradicional e descoberta assistida por IA.',
      'Arquitetura pensada para categoria, solução e comparação.',
      `Foco em ${city.name} como praça relevante de tecnologia e negócios.`
    ],
    proofPoints: [
      'Serviço canônico de Consultoria SEO já publicado.',
      'Serviço de LLM Brand Presence já ativo.',
      `Página de ${city.name} já existente como suporte geográfico.`,
      'Base institucional e metodológica da AUDITSEO já pública.'
    ],
    relatedLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'Consultoria SEO para Software B2B', path: '/servicos/consultoria-seo-para-software-b2b/', reason: 'Página setorial-mãe da vertical.' },
      { label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/', reason: 'Complemento estratégico de descoberta.' },
      { label: city.name, path: city.path, reason: 'Contexto geográfico principal.' },
      { label: 'SEO para software B2B: como funciona', path: localArticlePath, reason: 'Apoio BOFU local de decisão.' },
      { label: 'O que é LLM SEO', path: '/blog/o-que-e-llm-seo/', reason: 'Apoio técnico sobre descoberta em IA.' }
    ],
    faqItems: [
      { question: `${displayTitle} funciona para SaaS e software enterprise?`, answer: 'Serve para ambos, desde que a página reflita corretamente a complexidade da oferta, o ciclo de venda e a intenção principal de busca.' },
      { question: 'Qual a diferença entre SEO para software B2B e SEO genérico?', answer: 'Software B2B exige leitura de busca mais comparativa, técnica e consultiva. A arquitetura precisa responder a uma jornada de decisão mais longa.' },
      { question: 'LLM Brand Presence entra junto nessa estratégia?', answer: 'Em muitos casos, sim. Principalmente quando a marca quer aparecer melhor em respostas geradas por IA e reforçar descoberta em comparações complexas.' },
      { question: 'Que tipo de página um software B2B precisa publicar?', answer: 'Normalmente precisa de páginas por categoria, solução, caso de uso, comparação e conteúdos de decisão que ajudem o comprador a avançar no funil.' },
      { question: 'Quanto tempo leva para SEO gerar demanda?', answer: 'Depende da base atual, da categoria e da competição. O correto é medir avanço em consultas qualificadas, pipeline assistido e influência no funil.' },
      { question: 'Essa página compete com a página de consultoria SEO?', answer: 'Não deve competir. A página canônica apresenta o serviço amplo. Esta página traduz a oferta para a vertical de software B2B na cidade.' },
      { question: 'Quando a cidade realmente faz diferença?', answer: 'Quando a praça já é base de operação, vendas ou aquisição e precisa reforçar contexto comercial na arquitetura pública.' },
      { question: `Quando contratar consultoria SEO para software B2B em ${city.name} faz mais sentido?`, answer: 'Quando a empresa quer construir uma base orgânica mais previsível, reduzir dependência de outbound e sustentar melhor a busca por categoria e solução.' }
    ],
    ctaTitle: `QUER FAZER O SEU SOFTWARE B2B GANHAR MAIS DESCOBERTA ORGÂNICA EM ${city.name.toUpperCase()}?`,
    ctaCopy:
      'Se o produto ainda depende demais de outbound ou mídia paga para sustentar pipeline, o melhor início é um diagnóstico comercial orientado a categoria, solução e demanda qualificada.',
    ctaPrimaryLabel: `Solicitar diagnóstico para software B2B em ${city.name}`,
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: city.name,
    brief: requireBrief(slug)
  };
}

function createEnergyCityPage(requireBrief: RequireBrief, city: CityConfig, slug: string): ServiceFirstCommercialPage {
  const displayTitle = `Consultoria SEO para Energia Solar ${city.titleLocation}`;
  const localArticlePath = city.name === 'Rio de Janeiro'
    ? '/blog/seo-para-energia-solar-no-rio-de-janeiro-como-gerar-demanda-qualificada/'
    : '/blog/seo-para-energia-solar-em-belo-horizonte-como-gerar-demanda-qualificada/';

  return {
    slug,
    seoTitle: `${displayTitle} | AUDITSEO`,
    description: `${displayTitle} com foco em solução, jornada consultiva e geração de demanda orgânica mais qualificada.`,
    imagePath: '/images/agencia-de-seo.png',
    displayTitle,
    badge: 'Energia Solar, B2B e Demanda Qualificada',
    heroTitlePrefix: 'CONSULTORIA SEO PARA ',
    heroTitleAccent: 'ENERGIA SOLAR',
    heroTitleSuffix: city.heroLocation,
    heroSubtitle:
      `Empresas de energia solar ${city.sentenceLocation} não precisam só de tráfego. Precisam de uma estrutura que atraia demanda qualificada, organize soluções comerciais e sustente uma jornada B2B mais longa e comparativa.`,
    highlights: ['Energia Solar', city.name, 'B2B', 'Demanda Qualificada'],
    heroCard: {
      title: 'Quando essa página faz sentido',
      copy: 'Quando a empresa atua com venda consultiva, depende de captação recorrente e precisa transformar o site em um ativo comercial que responda melhor a problemas, soluções e comparações.',
      links: [
        { label: 'Ver Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
        { label: 'Ver energia solar', path: '/nichos/energia-solar/', reason: 'Hub setorial de apoio.' },
        { label: `Ver ${city.name}`, path: city.path, reason: 'Contexto geográfico principal.' }
      ]
    },
    stats: [
      { value: '1', label: 'Mercado consultivo', copy: 'A venda exige contexto, confiança e páginas que eduquem sem dispersar.' },
      { value: '3', label: 'Camadas críticas', copy: 'Problema, solução e prova precisam aparecer na mesma arquitetura.' },
      { value: '0', label: 'Espaço para lead frio', copy: 'Volume sem qualificação tende a desperdiçar time comercial.' },
      { value: '100%', label: 'Foco em demanda útil', copy: 'A meta é oportunidade comercial, não tráfego decorativo.' }
    ],
    marketCards: [
      { title: 'Jornada B2B mais longa', copy: 'Quem busca energia solar costuma comparar investimento, escopo, retorno e modelo de contratação. Isso exige páginas mais maduras que uma apresentação institucional simples.' },
      { title: 'Soluções e segmentos', copy: 'Empresas de energia solar precisam organizar soluções, aplicações e diferenciais de forma que a busca entenda claramente o que está sendo ofertado.' },
      { title: 'Captação comercial previsível', copy: 'Sem uma base orgânica melhor estruturada, o negócio tende a depender demais de mídia paga, base fria e ações pontuais de prospecção.' }
    ],
    coreOffer: `${displayTitle}, conectando demanda regional, páginas de solução, prova comercial e jornada de decisão B2B.`,
    painPoints: [
      'Baixa geração de leads orgânicos qualificados.',
      'Site sem páginas fortes para solução, aplicação e comparação.',
      'Dependência alta de mídia paga e prospecção ativa.',
      'Jornada comercial mais longa sem conteúdo de apoio adequado.'
    ],
    deliveryItems: [
      'Arquitetura comercial para soluções, aplicações e intenção consultiva.',
      'Organização da jornada de descoberta para buscas B2B regionais.',
      'Blocos de prova e FAQ para reduzir atrito comercial.',
      'Interlinking entre consultoria, segmento, cidade e conteúdos de decisão.',
      'Critérios de governança para escalar a vertical sem ruído.'
    ],
    methodSteps: [
      { title: 'Mapeamento de oferta', copy: 'Mapeamos como a empresa apresenta soluções, segmentos e diferenciais hoje, e onde a arquitetura atual perde demanda útil.' },
      { title: 'Arquitetura comercial', copy: 'Definimos quais páginas precisam existir para capturar problema, solução e comparação sem dispersar a jornada.' },
      { title: 'Mensagem orientada a venda consultiva', copy: 'Ajustamos copy e oferta para transformar busca em oportunidade comercial qualificada.' },
      { title: 'Base de apoio editorial', copy: 'Conectamos a página comercial a ativos que ajudam a reduzir objeção e aumentar a confiança do decisor.' },
      { title: 'Escala por prioridade', copy: 'Evoluímos a malha com base em desempenho por segmento, cidade e tipo de busca que gera negócio.' }
    ],
    differentiators: [
      'Leitura comercial adaptada a vendas consultivas B2B.',
      'Arquitetura pensada para problema, solução e prova.',
      `Foco em ${city.name} como praça econômica relevante.`,
      'Captação orgânica orientada a oportunidade, não só tráfego.'
    ],
    proofPoints: [
      'Serviço canônico de Consultoria SEO já publicado.',
      'Hub setorial de energia solar já ativo.',
      `Página de ${city.name} já existente como suporte geográfico.`,
      'Base metodológica da AUDITSEO já pública.'
    ],
    relatedLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'Consultoria SEO para Energia Solar', path: '/servicos/consultoria-seo-para-energia-solar/', reason: 'Página setorial-mãe da vertical.' },
      { label: 'Energia solar', path: '/nichos/energia-solar/', reason: 'Hub setorial de apoio.' },
      { label: city.name, path: city.path, reason: 'Contexto geográfico principal.' },
      { label: 'SEO para energia solar: como gerar demanda qualificada', path: localArticlePath, reason: 'Apoio BOFU local de decisão.' },
      { label: 'Quanto custa SEO', path: '/blog/quanto-custa-seo/', reason: 'Apoio de decisão comercial.' }
    ],
    faqItems: [
      { question: `${displayTitle} funciona para venda consultiva?`, answer: 'Funciona quando a empresa organiza corretamente páginas de solução, segmentos, comparações e contexto comercial.' },
      { question: 'Que tipo de página uma empresa de energia solar precisa ter?', answer: 'Precisa de páginas claras por solução, aplicação e contexto comercial, além de ativos que apoiem comparação e decisão.' },
      { question: 'Quanto tempo leva para SEO gerar demanda no setor?', answer: 'Depende da base atual e da velocidade de execução. O importante é medir avanço em oportunidades qualificadas e não apenas sessões orgânicas.' },
      { question: 'Essa página compete com a página setorial de energia solar?', answer: 'Não deve competir. O hub setorial apoia o contexto da vertical. A página comercial local traduz isso para a intenção de contratação da praça.' },
      { question: 'Vale combinar essa frente com Google Meu Negócio?', answer: 'Em alguns cenários locais, sim. Mas para muitas empresas do setor a camada principal está em páginas comerciais e arquitetura consultiva.' },
      { question: 'SEO ajuda a reduzir dependência de mídia paga?', answer: 'Ajuda quando a empresa passa a capturar mais demanda recorrente por solução, categoria e intenção de compra sem depender só de campanhas.' },
      { question: 'Quando a cidade realmente importa nessa vertical?', answer: 'Quando a praça já influencia venda, operação comercial ou posicionamento e precisa aparecer com função real na arquitetura pública.' },
      { question: `Quando contratar consultoria SEO para energia solar em ${city.name} faz mais sentido?`, answer: 'Quando a empresa quer estruturar melhor sua captação orgânica, gerar mais oportunidades qualificadas e transformar o site em um ativo comercial mais consistente.' }
    ],
    ctaTitle: `QUER FAZER SUA EMPRESA DE ENERGIA SOLAR GERAR MAIS DEMANDA ORGÂNICA EM ${city.name.toUpperCase()}?`,
    ctaCopy:
      'Se hoje a operação depende demais de mídia paga ou prospecção, o melhor início é um diagnóstico comercial orientado a páginas, solução e geração de oportunidades qualificadas.',
    ctaPrimaryLabel: `Solicitar diagnóstico para energia solar em ${city.name}`,
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: city.name,
    brief: requireBrief(slug)
  };
}

export function buildRioBhServiceFirstCommercialPages(requireBrief: RequireBrief): ServiceFirstCommercialPage[] {
  return [
    createHealthSeoPage(requireBrief, rioCity, odontologiaSector, '/servicos/seo-local-para-odontologia-em-rio-de-janeiro/', 'SEO Local para Odontologia no Rio de Janeiro', '/blog/seo-local-para-odontologia-no-rio-de-janeiro-vale-a-pena/', 'SEO local para odontologia no Rio de Janeiro vale a pena?', '/servicos/google-meu-negocio-para-odontologia-em-rio-de-janeiro/'),
    createHealthGbpPage(requireBrief, rioCity, odontologiaSector, '/servicos/google-meu-negocio-para-odontologia-em-rio-de-janeiro/', 'Google Meu Negócio para Odontologia no Rio de Janeiro', '/blog/seo-local-para-odontologia-no-rio-de-janeiro-vale-a-pena/', 'SEO local para odontologia no Rio de Janeiro vale a pena?', '/servicos/seo-local-para-odontologia-em-rio-de-janeiro/'),
    createHealthSeoPage(requireBrief, beloHorizonteCity, odontologiaSector, '/servicos/seo-local-para-odontologia-em-belo-horizonte/', 'SEO Local para Odontologia em Belo Horizonte', '/blog/seo-local-para-odontologia-em-belo-horizonte-vale-a-pena/', 'SEO local para odontologia em Belo Horizonte vale a pena?', '/servicos/google-meu-negocio-para-odontologia-em-belo-horizonte/'),
    createHealthGbpPage(requireBrief, beloHorizonteCity, odontologiaSector, '/servicos/google-meu-negocio-para-odontologia-em-belo-horizonte/', 'Google Meu Negócio para Odontologia em Belo Horizonte', '/blog/seo-local-para-odontologia-em-belo-horizonte-vale-a-pena/', 'SEO local para odontologia em Belo Horizonte vale a pena?', '/servicos/seo-local-para-odontologia-em-belo-horizonte/'),
    createHealthSeoPage(requireBrief, rioCity, dermatologiaSector, '/servicos/seo-local-para-dermatologistas-em-rio-de-janeiro/', 'SEO Local para Dermatologistas no Rio de Janeiro', '/blog/seo-local-para-dermatologistas-no-rio-de-janeiro-vale-a-pena/', 'SEO local para dermatologistas no Rio de Janeiro vale a pena?', '/servicos/google-meu-negocio-para-dermatologistas-em-rio-de-janeiro/'),
    createHealthGbpPage(requireBrief, rioCity, dermatologiaSector, '/servicos/google-meu-negocio-para-dermatologistas-em-rio-de-janeiro/', 'Google Meu Negócio para Dermatologistas no Rio de Janeiro', '/blog/seo-local-para-dermatologistas-no-rio-de-janeiro-vale-a-pena/', 'SEO local para dermatologistas no Rio de Janeiro vale a pena?', '/servicos/seo-local-para-dermatologistas-em-rio-de-janeiro/'),
    createHealthSeoPage(requireBrief, beloHorizonteCity, dermatologiaSector, '/servicos/seo-local-para-dermatologistas-em-belo-horizonte/', 'SEO Local para Dermatologistas em Belo Horizonte', '/blog/seo-local-para-dermatologistas-em-belo-horizonte-vale-a-pena/', 'SEO local para dermatologistas em Belo Horizonte vale a pena?', '/servicos/google-meu-negocio-para-dermatologistas-em-belo-horizonte/'),
    createHealthGbpPage(requireBrief, beloHorizonteCity, dermatologiaSector, '/servicos/google-meu-negocio-para-dermatologistas-em-belo-horizonte/', 'Google Meu Negócio para Dermatologistas em Belo Horizonte', '/blog/seo-local-para-dermatologistas-em-belo-horizonte-vale-a-pena/', 'SEO local para dermatologistas em Belo Horizonte vale a pena?', '/servicos/seo-local-para-dermatologistas-em-belo-horizonte/'),
    createLawCityPage(requireBrief, rioCity, '/servicos/seo-para-escritorios-de-advocacia-em-rio-de-janeiro/'),
    createLawCityPage(requireBrief, beloHorizonteCity, '/servicos/seo-para-escritorios-de-advocacia-em-belo-horizonte/'),
    createSoftwareCityPage(requireBrief, rioCity, '/servicos/consultoria-seo-para-software-b2b-em-rio-de-janeiro/'),
    createSoftwareCityPage(requireBrief, beloHorizonteCity, '/servicos/consultoria-seo-para-software-b2b-em-belo-horizonte/'),
    createEnergyCityPage(requireBrief, rioCity, '/servicos/consultoria-seo-para-energia-solar-em-rio-de-janeiro/'),
    createEnergyCityPage(requireBrief, beloHorizonteCity, '/servicos/consultoria-seo-para-energia-solar-em-belo-horizonte/')
  ];
}
