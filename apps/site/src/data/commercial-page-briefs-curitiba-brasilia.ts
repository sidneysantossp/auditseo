import type { CommercialPageBrief } from './commercial-page-briefs';

type LocalHealthSeoBriefConfig = {
  slug: string;
  pageTitle: string;
  cityDisplay: string;
  cityPath: string;
  sectorDisplay: string;
  sectorServicePath: string;
  localArticlePath: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetAudience: string;
  ctaPrimary: string;
  ctaSecondary: string;
  complementaryPath: string;
};

type LocalHealthGbpBriefConfig = LocalHealthSeoBriefConfig & {
  genericGbpArticlePath: string;
};

type LocalProfessionalBriefConfig = {
  slug: string;
  pageTitle: string;
  cityDisplay: string;
  cityPath: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetAudience: string;
  localArticlePath: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

function createLocalHealthSeoBrief(config: LocalHealthSeoBriefConfig): CommercialPageBrief {
  return {
    slug: config.slug,
    pageTitle: config.pageTitle,
    pageType: 'local-commercial',
    canonicalService: '/servicos/seo-local/',
    targetAudience: config.targetAudience,
    primaryKeyword: config.primaryKeyword,
    secondaryKeywords: config.secondaryKeywords,
    dominantIntent: 'local',
    heroAngle: `Fortalecer a descoberta orgânica de ${config.sectorDisplay.toLowerCase()} em ${config.cityDisplay} com uma camada local mais clara, rastreável e pronta para gerar contato.`,
    coreOffer: `Operação de SEO local para ${config.sectorDisplay.toLowerCase()} com foco em visibilidade orgânica, Google Maps e páginas comerciais em ${config.cityDisplay}.`,
    painPoints: [
      `Baixa visibilidade para ${config.sectorDisplay.toLowerCase()} em buscas geográficas da cidade.`,
      'Site sem páginas com intenção local suficiente.',
      'Perfil local e site operando sem coerência comercial.',
      'Dependência alta de indicação, mídia paga ou redes sociais.'
    ],
    proofAssets: [
      `Página setorial de ${config.sectorDisplay}`,
      'Serviço canônico de SEO Local',
      `Página da cidade de ${config.cityDisplay}`,
      'Página de metodologia'
    ],
    faqAngles: [
      `${config.pageTitle} funciona mesmo em uma praça competitiva`,
      'O que muda entre a página local e a página setorial',
      'Como Google Meu Negócio entra junto nessa frente',
      'Quando vale publicar mais páginas derivadas por cidade'
    ],
    internalLinks: [
      { label: config.sectorDisplay, path: config.sectorServicePath, reason: 'Página setorial-mãe da vertical.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
      { label: config.cityDisplay, path: config.cityPath, reason: 'Contexto geográfico principal.' },
      { label: `${config.pageTitle} vale a pena?`, path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' },
      { label: 'Google Meu Negócio', path: config.complementaryPath, reason: 'Complemento local de Maps e descoberta imediata.' }
    ],
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary,
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: [config.sectorServicePath, config.complementaryPath]
  };
}

function createLocalHealthGbpBrief(config: LocalHealthGbpBriefConfig): CommercialPageBrief {
  return {
    slug: config.slug,
    pageTitle: config.pageTitle,
    pageType: 'local-commercial',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: config.targetAudience,
    primaryKeyword: config.primaryKeyword,
    secondaryKeywords: config.secondaryKeywords,
    dominantIntent: 'local',
    heroAngle: `Aumentar a descoberta local de ${config.sectorDisplay.toLowerCase()} em ${config.cityDisplay} com uma operação mais forte de Google Maps, perfil e página comercial.`,
    coreOffer: `Gestão e integração de Google Meu Negócio para ${config.sectorDisplay.toLowerCase()} em ${config.cityDisplay}, conectando perfil, página local e descoberta qualificada.`,
    painPoints: [
      'Perfil local sem sinais claros de relevância e conversão.',
      'Baixa consistência entre perfil, site e oferta principal.',
      'Pouca geração de rotas, ligações e contatos mais qualificados.',
      'Página local sem reforçar corretamente o contexto do mapa.'
    ],
    proofAssets: [
      'Serviço canônico de Google Meu Negócio',
      config.pageTitle.replace('Google Meu Negócio', 'SEO Local'),
      `Página da cidade de ${config.cityDisplay}`,
      'Página de metodologia'
    ],
    faqAngles: [
      `${config.pageTitle} ajuda mesmo sem várias unidades`,
      `Qual a diferença entre GBP e SEO local em ${config.cityDisplay}`,
      'Como a página do site interfere no mapa',
      'Quanto tempo leva para melhorar descoberta e ação no perfil'
    ],
    internalLinks: [
      { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
      { label: config.pageTitle.replace('Google Meu Negócio', 'SEO Local'), path: config.complementaryPath, reason: 'Página local complementar.' },
      { label: config.cityDisplay, path: config.cityPath, reason: 'Contexto geográfico principal.' },
      { label: `${config.pageTitle.replace('Google Meu Negócio para ', '').replace(` em ${config.cityDisplay}`, '')}: vale a pena?`, path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' },
      { label: `Guia de GBP para ${config.sectorDisplay.toLowerCase()}`, path: config.genericGbpArticlePath, reason: 'Apoio BOFU temático.' }
    ],
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary,
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/google-meu-negocio/', config.complementaryPath]
  };
}

function createLawCityBrief(config: LocalProfessionalBriefConfig): CommercialPageBrief {
  return {
    slug: config.slug,
    pageTitle: config.pageTitle,
    pageType: 'local-commercial',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: config.targetAudience,
    primaryKeyword: config.primaryKeyword,
    secondaryKeywords: config.secondaryKeywords,
    dominantIntent: 'local',
    heroAngle: `Fortalecer a descoberta orgânica de escritórios de advocacia em ${config.cityDisplay} com páginas de serviço, áreas de atuação e uma mensagem comercial mais clara.`,
    coreOffer: `Consultoria de SEO para escritórios de advocacia em ${config.cityDisplay}, com foco em autoridade, áreas de atuação e captação orgânica qualificada.`,
    painPoints: [
      'Baixa visibilidade para áreas de atuação com intenção comercial.',
      'Site institucional forte na marca, mas fraco em páginas comerciais.',
      'Dependência alta de networking e indicação para gerar novas oportunidades.',
      `Pouca profundidade local para sustentar descoberta em ${config.cityDisplay}.`
    ],
    proofAssets: ['Consultoria SEO', 'Página de escritórios de advocacia', `Página de ${config.cityDisplay}`, 'Página de metodologia'],
    faqAngles: [
      `SEO funciona para escritórios de advocacia em ${config.cityDisplay}`,
      'Como estruturar áreas de atuação sem canibalização',
      'Diferença entre página institucional e página comercial jurídica',
      'Quando a praça local merece páginas próprias'
    ],
    internalLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'Escritórios de advocacia', path: '/nichos/escritorios-advocacia/', reason: 'Hub setorial de apoio.' },
      { label: config.cityDisplay, path: config.cityPath, reason: 'Contexto geográfico principal.' },
      { label: `${config.pageTitle} funciona?`, path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' }
    ],
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary,
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/nichos/escritorios-advocacia/', '/servicos/consultoria-seo/']
  };
}

function createSoftwareCityBrief(config: LocalProfessionalBriefConfig): CommercialPageBrief {
  return {
    slug: config.slug,
    pageTitle: config.pageTitle,
    pageType: 'local-commercial',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: config.targetAudience,
    primaryKeyword: config.primaryKeyword,
    secondaryKeywords: config.secondaryKeywords,
    dominantIntent: 'local',
    heroAngle: `Ajudar empresas de software B2B em ${config.cityDisplay} a ganhar descoberta orgânica para categoria, solução e comparação com uma arquitetura comercial mais madura.`,
    coreOffer: `Consultoria SEO para software B2B em ${config.cityDisplay}, com foco em categoria, solução, comparação e demanda orgânica qualificada.`,
    painPoints: [
      'Baixa visibilidade para termos de categoria, problema e solução.',
      'Dependência excessiva de outbound e mídia paga para sustentar pipeline.',
      'Site com copy técnica, mas sem páginas comerciais suficientes.',
      `Falta de leitura local para conectar a operação à praça de ${config.cityDisplay}.`
    ],
    proofAssets: ['Consultoria SEO', 'LLM Brand Presence', `Página de ${config.cityDisplay}`, 'Página de metodologia'],
    faqAngles: [
      `SEO funciona para software B2B em ${config.cityDisplay}`,
      'Como lidar com ciclo comercial longo e busca comparativa',
      'Quais páginas um software B2B precisa publicar',
      'Quando SEO e descoberta em IA se complementam'
    ],
    internalLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/', reason: 'Complemento de descoberta assistida por IA.' },
      { label: config.cityDisplay, path: config.cityPath, reason: 'Contexto geográfico principal.' },
      { label: `${config.pageTitle} como funciona?`, path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' }
    ],
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary,
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/consultoria-seo/', '/servicos/llm-brand-presence/']
  };
}

export const curitibaBrasiliaCommercialBriefs: CommercialPageBrief[] = [
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-odontologia-em-curitiba/',
    pageTitle: 'SEO Local para Odontologia em Curitiba',
    cityDisplay: 'Curitiba',
    cityPath: '/cidades/curitiba/',
    sectorDisplay: 'Odontologia',
    sectorServicePath: '/servicos/seo-para-odontologia/',
    localArticlePath: '/blog/seo-local-para-odontologia-em-curitiba-vale-a-pena/',
    primaryKeyword: 'seo local para odontologia em curitiba',
    secondaryKeywords: ['seo para dentistas em curitiba', 'agencia seo para odontologia em curitiba', 'google maps para odontologia em curitiba'],
    targetAudience: 'Clínicas odontológicas, consultórios e redes de odontologia com atuação em Curitiba.',
    ctaPrimary: 'Solicitar diagnóstico para odontologia em Curitiba',
    ctaSecondary: 'Entender a estratégia local para odontologia',
    complementaryPath: '/servicos/google-meu-negocio-para-odontologia-em-curitiba/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-odontologia-em-curitiba/',
    pageTitle: 'Google Meu Negócio para Odontologia em Curitiba',
    cityDisplay: 'Curitiba',
    cityPath: '/cidades/curitiba/',
    sectorDisplay: 'Odontologia',
    sectorServicePath: '/servicos/seo-para-odontologia/',
    localArticlePath: '/blog/seo-local-para-odontologia-em-curitiba-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-odontologia/',
    primaryKeyword: 'google meu negocio para odontologia em curitiba',
    secondaryKeywords: ['gbp para odontologia em curitiba', 'maps para dentistas em curitiba', 'perfil da empresa para odontologia em curitiba'],
    targetAudience: 'Clínicas odontológicas e consultórios em Curitiba que dependem de Google Maps e comparação local.',
    ctaPrimary: 'Solicitar diagnóstico de GBP para odontologia em Curitiba',
    ctaSecondary: 'Entender a estratégia de Maps para odontologia',
    complementaryPath: '/servicos/seo-local-para-odontologia-em-curitiba/'
  }),
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-odontologia-em-brasilia/',
    pageTitle: 'SEO Local para Odontologia em Brasília',
    cityDisplay: 'Brasília',
    cityPath: '/cidades/brasilia/',
    sectorDisplay: 'Odontologia',
    sectorServicePath: '/servicos/seo-para-odontologia/',
    localArticlePath: '/blog/seo-local-para-odontologia-em-brasilia-vale-a-pena/',
    primaryKeyword: 'seo local para odontologia em brasilia',
    secondaryKeywords: ['seo para dentistas em brasilia', 'agencia seo para odontologia em brasilia', 'google maps para odontologia em brasilia'],
    targetAudience: 'Clínicas odontológicas, consultórios e redes de odontologia com atuação em Brasília.',
    ctaPrimary: 'Solicitar diagnóstico para odontologia em Brasília',
    ctaSecondary: 'Entender a estratégia local para odontologia',
    complementaryPath: '/servicos/google-meu-negocio-para-odontologia-em-brasilia/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-odontologia-em-brasilia/',
    pageTitle: 'Google Meu Negócio para Odontologia em Brasília',
    cityDisplay: 'Brasília',
    cityPath: '/cidades/brasilia/',
    sectorDisplay: 'Odontologia',
    sectorServicePath: '/servicos/seo-para-odontologia/',
    localArticlePath: '/blog/seo-local-para-odontologia-em-brasilia-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-odontologia/',
    primaryKeyword: 'google meu negocio para odontologia em brasilia',
    secondaryKeywords: ['gbp para odontologia em brasilia', 'maps para dentistas em brasilia', 'perfil da empresa para odontologia em brasilia'],
    targetAudience: 'Clínicas odontológicas e consultórios em Brasília que dependem de Google Maps e comparação local.',
    ctaPrimary: 'Solicitar diagnóstico de GBP para odontologia em Brasília',
    ctaSecondary: 'Entender a estratégia de Maps para odontologia',
    complementaryPath: '/servicos/seo-local-para-odontologia-em-brasilia/'
  }),
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-dermatologistas-em-curitiba/',
    pageTitle: 'SEO Local para Dermatologistas em Curitiba',
    cityDisplay: 'Curitiba',
    cityPath: '/cidades/curitiba/',
    sectorDisplay: 'Dermatologistas',
    sectorServicePath: '/servicos/seo-para-dermatologistas/',
    localArticlePath: '/blog/seo-local-para-dermatologistas-em-curitiba-vale-a-pena/',
    primaryKeyword: 'seo local para dermatologistas em curitiba',
    secondaryKeywords: ['seo para dermatologistas em curitiba', 'agencia seo para clinica dermatologica em curitiba', 'google maps para dermatologia em curitiba'],
    targetAudience: 'Dermatologistas, clínicas dermatológicas e operações de dermatologia com atuação em Curitiba.',
    ctaPrimary: 'Solicitar diagnóstico para dermatologia em Curitiba',
    ctaSecondary: 'Entender a estratégia local para dermatologistas',
    complementaryPath: '/servicos/google-meu-negocio-para-dermatologistas-em-curitiba/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-dermatologistas-em-curitiba/',
    pageTitle: 'Google Meu Negócio para Dermatologistas em Curitiba',
    cityDisplay: 'Curitiba',
    cityPath: '/cidades/curitiba/',
    sectorDisplay: 'Dermatologistas',
    sectorServicePath: '/servicos/seo-para-dermatologistas/',
    localArticlePath: '/blog/seo-local-para-dermatologistas-em-curitiba-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-dermatologistas/',
    primaryKeyword: 'google meu negocio para dermatologistas em curitiba',
    secondaryKeywords: ['gbp para dermatologistas em curitiba', 'maps para dermatologia em curitiba', 'perfil da empresa para dermatologista em curitiba'],
    targetAudience: 'Dermatologistas e clínicas dermatológicas em Curitiba que dependem de Google Maps e descoberta local.',
    ctaPrimary: 'Solicitar diagnóstico de GBP para dermatologia em Curitiba',
    ctaSecondary: 'Entender a estratégia de Maps para dermatologistas',
    complementaryPath: '/servicos/seo-local-para-dermatologistas-em-curitiba/'
  }),
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-dermatologistas-em-brasilia/',
    pageTitle: 'SEO Local para Dermatologistas em Brasília',
    cityDisplay: 'Brasília',
    cityPath: '/cidades/brasilia/',
    sectorDisplay: 'Dermatologistas',
    sectorServicePath: '/servicos/seo-para-dermatologistas/',
    localArticlePath: '/blog/seo-local-para-dermatologistas-em-brasilia-vale-a-pena/',
    primaryKeyword: 'seo local para dermatologistas em brasilia',
    secondaryKeywords: ['seo para dermatologistas em brasilia', 'agencia seo para clinica dermatologica em brasilia', 'google maps para dermatologia em brasilia'],
    targetAudience: 'Dermatologistas, clínicas dermatológicas e operações de dermatologia com atuação em Brasília.',
    ctaPrimary: 'Solicitar diagnóstico para dermatologia em Brasília',
    ctaSecondary: 'Entender a estratégia local para dermatologistas',
    complementaryPath: '/servicos/google-meu-negocio-para-dermatologistas-em-brasilia/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-dermatologistas-em-brasilia/',
    pageTitle: 'Google Meu Negócio para Dermatologistas em Brasília',
    cityDisplay: 'Brasília',
    cityPath: '/cidades/brasilia/',
    sectorDisplay: 'Dermatologistas',
    sectorServicePath: '/servicos/seo-para-dermatologistas/',
    localArticlePath: '/blog/seo-local-para-dermatologistas-em-brasilia-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-dermatologistas/',
    primaryKeyword: 'google meu negocio para dermatologistas em brasilia',
    secondaryKeywords: ['gbp para dermatologistas em brasilia', 'maps para dermatologia em brasilia', 'perfil da empresa para dermatologista em brasilia'],
    targetAudience: 'Dermatologistas e clínicas dermatológicas em Brasília que dependem de Google Maps e descoberta local.',
    ctaPrimary: 'Solicitar diagnóstico de GBP para dermatologia em Brasília',
    ctaSecondary: 'Entender a estratégia de Maps para dermatologistas',
    complementaryPath: '/servicos/seo-local-para-dermatologistas-em-brasilia/'
  }),
  createLawCityBrief({
    slug: '/servicos/seo-para-escritorios-de-advocacia-em-curitiba/',
    pageTitle: 'SEO para Escritórios de Advocacia em Curitiba',
    cityDisplay: 'Curitiba',
    cityPath: '/cidades/curitiba/',
    primaryKeyword: 'seo para escritorios de advocacia em curitiba',
    secondaryKeywords: ['consultoria seo juridico em curitiba', 'agencia seo para advogados em curitiba', 'seo para escritorio de advocacia em curitiba'],
    targetAudience: 'Sócios, gestores e times de marketing de escritórios de advocacia em Curitiba.',
    localArticlePath: '/blog/seo-para-escritorios-de-advocacia-em-curitiba-funciona/',
    ctaPrimary: 'Solicitar diagnóstico para escritório em Curitiba',
    ctaSecondary: 'Falar com a AUDITSEO sobre advocacia em Curitiba'
  }),
  createLawCityBrief({
    slug: '/servicos/seo-para-escritorios-de-advocacia-em-brasilia/',
    pageTitle: 'SEO para Escritórios de Advocacia em Brasília',
    cityDisplay: 'Brasília',
    cityPath: '/cidades/brasilia/',
    primaryKeyword: 'seo para escritorios de advocacia em brasilia',
    secondaryKeywords: ['consultoria seo juridico em brasilia', 'agencia seo para advogados em brasilia', 'seo para escritorio de advocacia em brasilia'],
    targetAudience: 'Sócios, gestores e times de marketing de escritórios de advocacia em Brasília.',
    localArticlePath: '/blog/seo-para-escritorios-de-advocacia-em-brasilia-funciona/',
    ctaPrimary: 'Solicitar diagnóstico para escritório em Brasília',
    ctaSecondary: 'Falar com a AUDITSEO sobre advocacia em Brasília'
  }),
  createSoftwareCityBrief({
    slug: '/servicos/consultoria-seo-para-software-b2b-em-curitiba/',
    pageTitle: 'Consultoria SEO para Software B2B em Curitiba',
    cityDisplay: 'Curitiba',
    cityPath: '/cidades/curitiba/',
    primaryKeyword: 'consultoria seo para software b2b em curitiba',
    secondaryKeywords: ['seo para software b2b em curitiba', 'consultoria seo saas em curitiba', 'agencia seo para software em curitiba'],
    targetAudience: 'Empresas de software B2B, SaaS e tecnologia com operação comercial em Curitiba.',
    localArticlePath: '/blog/seo-para-software-b2b-em-curitiba-como-funciona/',
    ctaPrimary: 'Solicitar diagnóstico para software B2B em Curitiba',
    ctaSecondary: 'Falar sobre captação orgânica para SaaS em Curitiba'
  }),
  createSoftwareCityBrief({
    slug: '/servicos/consultoria-seo-para-software-b2b-em-brasilia/',
    pageTitle: 'Consultoria SEO para Software B2B em Brasília',
    cityDisplay: 'Brasília',
    cityPath: '/cidades/brasilia/',
    primaryKeyword: 'consultoria seo para software b2b em brasilia',
    secondaryKeywords: ['seo para software b2b em brasilia', 'consultoria seo saas em brasilia', 'agencia seo para software em brasilia'],
    targetAudience: 'Empresas de software B2B, SaaS e tecnologia com operação comercial em Brasília.',
    localArticlePath: '/blog/seo-para-software-b2b-em-brasilia-como-funciona/',
    ctaPrimary: 'Solicitar diagnóstico para software B2B em Brasília',
    ctaSecondary: 'Falar sobre captação orgânica para SaaS em Brasília'
  })
];
