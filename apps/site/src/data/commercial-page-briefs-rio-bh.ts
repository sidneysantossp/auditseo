import type { CommercialPageBrief } from './commercial-page-briefs';

type CityConfig = {
  name: string;
  path: string;
  slugPrefix: string;
  titleLocation: string;
  sentenceLocation: string;
};

type LocalHealthSeoBriefConfig = {
  slug: string;
  pageTitle: string;
  city: CityConfig;
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

type CityCommercialBriefConfig = {
  slug: string;
  pageTitle: string;
  city: CityConfig;
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetAudience: string;
  localArticlePath: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const rioCity: CityConfig = {
  name: 'Rio de Janeiro',
  path: '/cidades/rio-de-janeiro/',
  slugPrefix: 'rio-de-janeiro',
  titleLocation: 'no Rio de Janeiro',
  sentenceLocation: 'no Rio de Janeiro'
};

const beloHorizonteCity: CityConfig = {
  name: 'Belo Horizonte',
  path: '/cidades/belo-horizonte/',
  slugPrefix: 'belo-horizonte',
  titleLocation: 'em Belo Horizonte',
  sentenceLocation: 'em Belo Horizonte'
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
    heroAngle: `Fortalecer a descoberta orgânica de ${config.sectorDisplay.toLowerCase()} ${config.city.sentenceLocation} com uma camada local mais clara, rastreável e pronta para gerar contato.`,
    coreOffer: `Operação de SEO local para ${config.sectorDisplay.toLowerCase()} com foco em visibilidade orgânica, Google Maps e páginas comerciais ${config.city.sentenceLocation}.`,
    painPoints: [
      `Baixa visibilidade para ${config.sectorDisplay.toLowerCase()} em buscas geográficas ${config.city.sentenceLocation}.`,
      'Site sem páginas com intenção local suficiente.',
      'Perfil local e site operando sem coerência comercial.',
      'Dependência alta de indicação, mídia paga ou redes sociais.'
    ],
    proofAssets: [
      `Página setorial de ${config.sectorDisplay}`,
      'Serviço canônico de SEO Local',
      `Página da cidade de ${config.city.name}`,
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
      { label: config.city.name, path: config.city.path, reason: 'Contexto geográfico principal.' },
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
    heroAngle: `Aumentar a descoberta local de ${config.sectorDisplay.toLowerCase()} ${config.city.sentenceLocation} com uma operação mais forte de Google Maps, perfil e página comercial.`,
    coreOffer: `Gestão e integração de Google Meu Negócio para ${config.sectorDisplay.toLowerCase()} ${config.city.sentenceLocation}, conectando perfil, página local e descoberta qualificada.`,
    painPoints: [
      'Perfil local sem sinais claros de relevância e conversão.',
      'Baixa consistência entre perfil, site e oferta principal.',
      'Pouca geração de rotas, ligações e contatos mais qualificados.',
      'Página local sem reforçar corretamente o contexto do mapa.'
    ],
    proofAssets: [
      'Serviço canônico de Google Meu Negócio',
      config.pageTitle.replace('Google Meu Negócio', 'SEO Local'),
      `Página da cidade de ${config.city.name}`,
      'Página de metodologia'
    ],
    faqAngles: [
      `${config.pageTitle} ajuda mesmo sem várias unidades`,
      `Qual a diferença entre GBP e SEO local ${config.city.titleLocation}`,
      'Como a página do site interfere no mapa',
      'Quanto tempo leva para melhorar descoberta e ação no perfil'
    ],
    internalLinks: [
      { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
      { label: config.pageTitle.replace('Google Meu Negócio', 'SEO Local'), path: config.complementaryPath, reason: 'Página local complementar.' },
      { label: config.city.name, path: config.city.path, reason: 'Contexto geográfico principal.' },
      { label: `${config.pageTitle.replace('Google Meu Negócio para ', '').replace(` ${config.city.titleLocation}`, '')}: vale a pena?`, path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' },
      { label: `Guia de GBP para ${config.sectorDisplay.toLowerCase()}`, path: config.genericGbpArticlePath, reason: 'Apoio BOFU temático.' }
    ],
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary,
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/google-meu-negocio/', config.complementaryPath]
  };
}

function createLawCityBrief(config: CityCommercialBriefConfig): CommercialPageBrief {
  return {
    slug: config.slug,
    pageTitle: config.pageTitle,
    pageType: 'local-commercial',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: config.targetAudience,
    primaryKeyword: config.primaryKeyword,
    secondaryKeywords: config.secondaryKeywords,
    dominantIntent: 'local',
    heroAngle: `Fortalecer a descoberta orgânica de escritórios de advocacia ${config.city.sentenceLocation} com páginas por área de atuação, autoridade e mensagem comercial mais clara.`,
    coreOffer: `Consultoria de SEO para escritórios de advocacia ${config.city.sentenceLocation}, com foco em autoridade, áreas de atuação e captação orgânica qualificada.`,
    painPoints: [
      'Baixa visibilidade para áreas de atuação com intenção comercial.',
      'Site institucional forte na marca, mas fraco em páginas comerciais.',
      'Dependência alta de networking e indicação para gerar novas oportunidades.',
      `Pouca profundidade local para sustentar descoberta ${config.city.sentenceLocation}.`
    ],
    proofAssets: ['Consultoria SEO', 'Página de escritórios de advocacia', `Página de ${config.city.name}`, 'Página de metodologia'],
    faqAngles: [
      `${config.pageTitle} funciona em uma praça competitiva`,
      'Como estruturar áreas de atuação sem canibalização',
      'Diferença entre página institucional e página comercial jurídica',
      'Quando a praça local merece páginas próprias'
    ],
    internalLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'Escritórios de advocacia', path: '/nichos/escritorios-advocacia/', reason: 'Hub setorial de apoio.' },
      { label: config.city.name, path: config.city.path, reason: 'Contexto geográfico principal.' },
      { label: `${config.pageTitle} funciona?`, path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' }
    ],
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary,
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/nichos/escritorios-advocacia/', '/servicos/consultoria-seo/']
  };
}

function createSoftwareCityBrief(config: CityCommercialBriefConfig): CommercialPageBrief {
  return {
    slug: config.slug,
    pageTitle: config.pageTitle,
    pageType: 'local-commercial',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: config.targetAudience,
    primaryKeyword: config.primaryKeyword,
    secondaryKeywords: config.secondaryKeywords,
    dominantIntent: 'local',
    heroAngle: `Ajudar empresas de software B2B ${config.city.sentenceLocation} a ganhar descoberta orgânica para categoria, solução e comparação com uma arquitetura comercial mais madura.`,
    coreOffer: `Consultoria SEO para software B2B ${config.city.sentenceLocation}, com foco em categoria, solução, comparação e demanda orgânica qualificada.`,
    painPoints: [
      'Baixa visibilidade para termos de categoria, problema e solução.',
      'Dependência excessiva de outbound e mídia paga para sustentar pipeline.',
      'Site com copy técnica, mas sem páginas comerciais suficientes.',
      `Falta de leitura local para conectar a operação à praça de ${config.city.name}.`
    ],
    proofAssets: ['Consultoria SEO', 'LLM Brand Presence', `Página de ${config.city.name}`, 'Página de metodologia'],
    faqAngles: [
      `${config.pageTitle} funciona para SaaS e software enterprise`,
      'Como lidar com ciclo comercial longo e busca comparativa',
      'Quais páginas um software B2B precisa publicar',
      'Quando SEO e descoberta em IA se complementam'
    ],
    internalLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/', reason: 'Complemento de descoberta assistida por IA.' },
      { label: config.city.name, path: config.city.path, reason: 'Contexto geográfico principal.' },
      { label: `${config.pageTitle} como funciona?`, path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' }
    ],
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary,
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/consultoria-seo/', '/servicos/llm-brand-presence/']
  };
}

function createEnergyCityBrief(config: CityCommercialBriefConfig): CommercialPageBrief {
  return {
    slug: config.slug,
    pageTitle: config.pageTitle,
    pageType: 'local-commercial',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: config.targetAudience,
    primaryKeyword: config.primaryKeyword,
    secondaryKeywords: config.secondaryKeywords,
    dominantIntent: 'local',
    heroAngle: `Ajudar empresas de energia solar ${config.city.sentenceLocation} a ganhar descoberta orgânica para solução, aplicação e geração de demanda mais qualificada.`,
    coreOffer: `Consultoria SEO para energia solar ${config.city.sentenceLocation}, com foco em solução, jornada consultiva e demanda orgânica útil.`,
    painPoints: [
      'Baixa geração de leads orgânicos qualificados.',
      'Páginas de solução e aplicação pouco maduras.',
      'Dependência alta de mídia paga e prospecção ativa.',
      `Pouca leitura da praça de ${config.city.name} dentro da arquitetura comercial.`
    ],
    proofAssets: ['Consultoria SEO', 'Página de energia solar', `Página de ${config.city.name}`, 'Página de metodologia'],
    faqAngles: [
      `${config.pageTitle} funciona para venda consultiva`,
      'Que tipo de página uma empresa de energia solar precisa publicar',
      'Quando a cidade entra na arquitetura comercial',
      'Como reduzir dependência de mídia paga com SEO'
    ],
    internalLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'Energia solar', path: '/nichos/energia-solar/', reason: 'Hub setorial de apoio.' },
      { label: config.city.name, path: config.city.path, reason: 'Contexto geográfico principal.' },
      { label: `${config.pageTitle} como gerar demanda qualificada?`, path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' }
    ],
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary,
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/nichos/energia-solar/', '/servicos/consultoria-seo/']
  };
}

export const rioBhCommercialBriefs: CommercialPageBrief[] = [
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-odontologia-em-rio-de-janeiro/',
    pageTitle: 'SEO Local para Odontologia no Rio de Janeiro',
    city: rioCity,
    sectorDisplay: 'Odontologia',
    sectorServicePath: '/servicos/seo-para-odontologia/',
    localArticlePath: '/blog/seo-local-para-odontologia-no-rio-de-janeiro-vale-a-pena/',
    primaryKeyword: 'seo local para odontologia no rio de janeiro',
    secondaryKeywords: ['seo para dentistas no rio de janeiro', 'agencia seo para odontologia no rio de janeiro', 'google maps para odontologia no rio de janeiro'],
    targetAudience: 'Clínicas odontológicas, consultórios e redes de odontologia com atuação no Rio de Janeiro.',
    ctaPrimary: 'Solicitar diagnóstico para odontologia no Rio',
    ctaSecondary: 'Entender a estratégia local para odontologia',
    complementaryPath: '/servicos/google-meu-negocio-para-odontologia-em-rio-de-janeiro/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-odontologia-em-rio-de-janeiro/',
    pageTitle: 'Google Meu Negócio para Odontologia no Rio de Janeiro',
    city: rioCity,
    sectorDisplay: 'Odontologia',
    sectorServicePath: '/servicos/seo-para-odontologia/',
    localArticlePath: '/blog/seo-local-para-odontologia-no-rio-de-janeiro-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-odontologia/',
    primaryKeyword: 'google meu negocio para odontologia no rio de janeiro',
    secondaryKeywords: ['gbp para odontologia no rio de janeiro', 'maps para dentistas no rio de janeiro', 'perfil da empresa para odontologia no rio de janeiro'],
    targetAudience: 'Clínicas odontológicas e consultórios no Rio de Janeiro que dependem de Google Maps e comparação local.',
    ctaPrimary: 'Solicitar diagnóstico de GBP para odontologia no Rio',
    ctaSecondary: 'Entender a estratégia de Maps para odontologia',
    complementaryPath: '/servicos/seo-local-para-odontologia-em-rio-de-janeiro/'
  }),
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-odontologia-em-belo-horizonte/',
    pageTitle: 'SEO Local para Odontologia em Belo Horizonte',
    city: beloHorizonteCity,
    sectorDisplay: 'Odontologia',
    sectorServicePath: '/servicos/seo-para-odontologia/',
    localArticlePath: '/blog/seo-local-para-odontologia-em-belo-horizonte-vale-a-pena/',
    primaryKeyword: 'seo local para odontologia em belo horizonte',
    secondaryKeywords: ['seo para dentistas em belo horizonte', 'agencia seo para odontologia em belo horizonte', 'google maps para odontologia em belo horizonte'],
    targetAudience: 'Clínicas odontológicas, consultórios e redes de odontologia com atuação em Belo Horizonte.',
    ctaPrimary: 'Solicitar diagnóstico para odontologia em Belo Horizonte',
    ctaSecondary: 'Entender a estratégia local para odontologia',
    complementaryPath: '/servicos/google-meu-negocio-para-odontologia-em-belo-horizonte/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-odontologia-em-belo-horizonte/',
    pageTitle: 'Google Meu Negócio para Odontologia em Belo Horizonte',
    city: beloHorizonteCity,
    sectorDisplay: 'Odontologia',
    sectorServicePath: '/servicos/seo-para-odontologia/',
    localArticlePath: '/blog/seo-local-para-odontologia-em-belo-horizonte-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-odontologia/',
    primaryKeyword: 'google meu negocio para odontologia em belo horizonte',
    secondaryKeywords: ['gbp para odontologia em belo horizonte', 'maps para dentistas em belo horizonte', 'perfil da empresa para odontologia em belo horizonte'],
    targetAudience: 'Clínicas odontológicas e consultórios em Belo Horizonte que dependem de Google Maps e comparação local.',
    ctaPrimary: 'Solicitar diagnóstico de GBP para odontologia em Belo Horizonte',
    ctaSecondary: 'Entender a estratégia de Maps para odontologia',
    complementaryPath: '/servicos/seo-local-para-odontologia-em-belo-horizonte/'
  }),
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-dermatologistas-em-rio-de-janeiro/',
    pageTitle: 'SEO Local para Dermatologistas no Rio de Janeiro',
    city: rioCity,
    sectorDisplay: 'Dermatologistas',
    sectorServicePath: '/servicos/seo-para-dermatologistas/',
    localArticlePath: '/blog/seo-local-para-dermatologistas-no-rio-de-janeiro-vale-a-pena/',
    primaryKeyword: 'seo local para dermatologistas no rio de janeiro',
    secondaryKeywords: ['seo para dermatologistas no rio de janeiro', 'agencia seo para clinica dermatologica no rio', 'google maps para dermatologia no rio de janeiro'],
    targetAudience: 'Dermatologistas, clínicas dermatológicas e operações de dermatologia com atuação no Rio de Janeiro.',
    ctaPrimary: 'Solicitar diagnóstico para dermatologia no Rio',
    ctaSecondary: 'Entender a estratégia local para dermatologistas',
    complementaryPath: '/servicos/google-meu-negocio-para-dermatologistas-em-rio-de-janeiro/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-dermatologistas-em-rio-de-janeiro/',
    pageTitle: 'Google Meu Negócio para Dermatologistas no Rio de Janeiro',
    city: rioCity,
    sectorDisplay: 'Dermatologistas',
    sectorServicePath: '/servicos/seo-para-dermatologistas/',
    localArticlePath: '/blog/seo-local-para-dermatologistas-no-rio-de-janeiro-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-dermatologistas/',
    primaryKeyword: 'google meu negocio para dermatologistas no rio de janeiro',
    secondaryKeywords: ['gbp para dermatologistas no rio de janeiro', 'maps para dermatologia no rio de janeiro', 'perfil da empresa para dermatologista no rio'],
    targetAudience: 'Dermatologistas e clínicas dermatológicas no Rio de Janeiro que dependem de Google Maps e descoberta local.',
    ctaPrimary: 'Solicitar diagnóstico de GBP para dermatologia no Rio',
    ctaSecondary: 'Entender a estratégia de Maps para dermatologistas',
    complementaryPath: '/servicos/seo-local-para-dermatologistas-em-rio-de-janeiro/'
  }),
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-dermatologistas-em-belo-horizonte/',
    pageTitle: 'SEO Local para Dermatologistas em Belo Horizonte',
    city: beloHorizonteCity,
    sectorDisplay: 'Dermatologistas',
    sectorServicePath: '/servicos/seo-para-dermatologistas/',
    localArticlePath: '/blog/seo-local-para-dermatologistas-em-belo-horizonte-vale-a-pena/',
    primaryKeyword: 'seo local para dermatologistas em belo horizonte',
    secondaryKeywords: ['seo para dermatologistas em belo horizonte', 'agencia seo para clinica dermatologica em belo horizonte', 'google maps para dermatologia em belo horizonte'],
    targetAudience: 'Dermatologistas, clínicas dermatológicas e operações de dermatologia com atuação em Belo Horizonte.',
    ctaPrimary: 'Solicitar diagnóstico para dermatologia em Belo Horizonte',
    ctaSecondary: 'Entender a estratégia local para dermatologistas',
    complementaryPath: '/servicos/google-meu-negocio-para-dermatologistas-em-belo-horizonte/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-dermatologistas-em-belo-horizonte/',
    pageTitle: 'Google Meu Negócio para Dermatologistas em Belo Horizonte',
    city: beloHorizonteCity,
    sectorDisplay: 'Dermatologistas',
    sectorServicePath: '/servicos/seo-para-dermatologistas/',
    localArticlePath: '/blog/seo-local-para-dermatologistas-em-belo-horizonte-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-dermatologistas/',
    primaryKeyword: 'google meu negocio para dermatologistas em belo horizonte',
    secondaryKeywords: ['gbp para dermatologistas em belo horizonte', 'maps para dermatologia em belo horizonte', 'perfil da empresa para dermatologista em belo horizonte'],
    targetAudience: 'Dermatologistas e clínicas dermatológicas em Belo Horizonte que dependem de Google Maps e descoberta local.',
    ctaPrimary: 'Solicitar diagnóstico de GBP para dermatologia em Belo Horizonte',
    ctaSecondary: 'Entender a estratégia de Maps para dermatologistas',
    complementaryPath: '/servicos/seo-local-para-dermatologistas-em-belo-horizonte/'
  }),
  createLawCityBrief({
    slug: '/servicos/seo-para-escritorios-de-advocacia-em-rio-de-janeiro/',
    pageTitle: 'SEO para Escritórios de Advocacia no Rio de Janeiro',
    city: rioCity,
    primaryKeyword: 'seo para escritorios de advocacia no rio de janeiro',
    secondaryKeywords: ['consultoria seo juridico no rio de janeiro', 'agencia seo para advogados no rio', 'seo para escritorio de advocacia no rio de janeiro'],
    targetAudience: 'Sócios, gestores e times de marketing de escritórios de advocacia no Rio de Janeiro.',
    localArticlePath: '/blog/seo-para-escritorios-de-advocacia-no-rio-de-janeiro-funciona/',
    ctaPrimary: 'Solicitar diagnóstico para escritório no Rio',
    ctaSecondary: 'Falar com a AUDITSEO sobre advocacia no Rio'
  }),
  createLawCityBrief({
    slug: '/servicos/seo-para-escritorios-de-advocacia-em-belo-horizonte/',
    pageTitle: 'SEO para Escritórios de Advocacia em Belo Horizonte',
    city: beloHorizonteCity,
    primaryKeyword: 'seo para escritorios de advocacia em belo horizonte',
    secondaryKeywords: ['consultoria seo juridico em belo horizonte', 'agencia seo para advogados em belo horizonte', 'seo para escritorio de advocacia em belo horizonte'],
    targetAudience: 'Sócios, gestores e times de marketing de escritórios de advocacia em Belo Horizonte.',
    localArticlePath: '/blog/seo-para-escritorios-de-advocacia-em-belo-horizonte-funciona/',
    ctaPrimary: 'Solicitar diagnóstico para escritório em Belo Horizonte',
    ctaSecondary: 'Falar com a AUDITSEO sobre advocacia em Belo Horizonte'
  }),
  createSoftwareCityBrief({
    slug: '/servicos/consultoria-seo-para-software-b2b-em-rio-de-janeiro/',
    pageTitle: 'Consultoria SEO para Software B2B no Rio de Janeiro',
    city: rioCity,
    primaryKeyword: 'consultoria seo para software b2b no rio de janeiro',
    secondaryKeywords: ['seo para software b2b no rio de janeiro', 'consultoria seo saas no rio de janeiro', 'agencia seo para software no rio'],
    targetAudience: 'Empresas de software B2B, SaaS e tecnologia com operação comercial no Rio de Janeiro.',
    localArticlePath: '/blog/seo-para-software-b2b-no-rio-de-janeiro-como-funciona/',
    ctaPrimary: 'Solicitar diagnóstico para software B2B no Rio',
    ctaSecondary: 'Falar sobre captação orgânica para SaaS no Rio'
  }),
  createSoftwareCityBrief({
    slug: '/servicos/consultoria-seo-para-software-b2b-em-belo-horizonte/',
    pageTitle: 'Consultoria SEO para Software B2B em Belo Horizonte',
    city: beloHorizonteCity,
    primaryKeyword: 'consultoria seo para software b2b em belo horizonte',
    secondaryKeywords: ['seo para software b2b em belo horizonte', 'consultoria seo saas em belo horizonte', 'agencia seo para software em belo horizonte'],
    targetAudience: 'Empresas de software B2B, SaaS e tecnologia com operação comercial em Belo Horizonte.',
    localArticlePath: '/blog/seo-para-software-b2b-em-belo-horizonte-como-funciona/',
    ctaPrimary: 'Solicitar diagnóstico para software B2B em Belo Horizonte',
    ctaSecondary: 'Falar sobre captação orgânica para SaaS em Belo Horizonte'
  }),
  createEnergyCityBrief({
    slug: '/servicos/consultoria-seo-para-energia-solar-em-rio-de-janeiro/',
    pageTitle: 'Consultoria SEO para Energia Solar no Rio de Janeiro',
    city: rioCity,
    primaryKeyword: 'consultoria seo para energia solar no rio de janeiro',
    secondaryKeywords: ['seo para energia solar no rio de janeiro', 'agencia seo para energia solar no rio', 'marketing organico para energia solar no rio'],
    targetAudience: 'Empresas de energia solar e integradores fotovoltaicos com atuação comercial no Rio de Janeiro.',
    localArticlePath: '/blog/seo-para-energia-solar-no-rio-de-janeiro-como-gerar-demanda-qualificada/',
    ctaPrimary: 'Solicitar diagnóstico para energia solar no Rio',
    ctaSecondary: 'Entender a estratégia comercial para energia solar no Rio'
  }),
  createEnergyCityBrief({
    slug: '/servicos/consultoria-seo-para-energia-solar-em-belo-horizonte/',
    pageTitle: 'Consultoria SEO para Energia Solar em Belo Horizonte',
    city: beloHorizonteCity,
    primaryKeyword: 'consultoria seo para energia solar em belo horizonte',
    secondaryKeywords: ['seo para energia solar em belo horizonte', 'agencia seo para energia solar em belo horizonte', 'marketing organico para energia solar em belo horizonte'],
    targetAudience: 'Empresas de energia solar e integradores fotovoltaicos com atuação comercial em Belo Horizonte.',
    localArticlePath: '/blog/seo-para-energia-solar-em-belo-horizonte-como-gerar-demanda-qualificada/',
    ctaPrimary: 'Solicitar diagnóstico para energia solar em Belo Horizonte',
    ctaSecondary: 'Entender a estratégia comercial para energia solar em Belo Horizonte'
  })
];
