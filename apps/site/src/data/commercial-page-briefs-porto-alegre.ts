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
      { label: `SEO local para ${config.sectorDisplay.toLowerCase()} em ${config.cityDisplay} vale a pena`, path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' },
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

function createEnergyCityBrief(config: LocalProfessionalBriefConfig): CommercialPageBrief {
  return {
    slug: config.slug,
    pageTitle: config.pageTitle,
    pageType: 'local-commercial',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: config.targetAudience,
    primaryKeyword: config.primaryKeyword,
    secondaryKeywords: config.secondaryKeywords,
    dominantIntent: 'local',
    heroAngle: `Ajudar empresas de energia solar em ${config.cityDisplay} a ganhar descoberta orgânica para solução, aplicação e geração de demanda mais qualificada.`,
    coreOffer: `Consultoria SEO para energia solar em ${config.cityDisplay}, com foco em solução, jornada consultiva e demanda orgânica útil.`,
    painPoints: [
      'Baixa geração de leads orgânicos qualificados.',
      'Páginas de solução e aplicação pouco maduras.',
      'Dependência alta de mídia paga e prospecção ativa.',
      `Pouca leitura da praça de ${config.cityDisplay} dentro da arquitetura comercial.`
    ],
    proofAssets: ['Consultoria SEO', 'Página de energia solar', `Página de ${config.cityDisplay}`, 'Página de metodologia'],
    faqAngles: [
      `SEO funciona para energia solar em ${config.cityDisplay}`,
      'Que tipo de página uma empresa de energia solar precisa publicar',
      'Quando a cidade entra na arquitetura comercial',
      'Como reduzir dependência de mídia paga com SEO'
    ],
    internalLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'Energia solar', path: '/nichos/energia-solar/', reason: 'Hub setorial de apoio.' },
      { label: config.cityDisplay, path: config.cityPath, reason: 'Contexto geográfico principal.' },
      { label: `${config.pageTitle} como gerar demanda qualificada?`, path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' }
    ],
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary,
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/nichos/energia-solar/', '/servicos/consultoria-seo/']
  };
}

export const portoAlegreCommercialBriefs: CommercialPageBrief[] = [
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-clinicas-medicas-em-porto-alegre/',
    pageTitle: 'SEO Local para Clínicas Médicas em Porto Alegre',
    cityDisplay: 'Porto Alegre',
    cityPath: '/cidades/porto-alegre/',
    sectorDisplay: 'Clínicas Médicas',
    sectorServicePath: '/servicos/seo-para-clinicas-medicas/',
    localArticlePath: '/blog/seo-local-para-clinicas-medicas-em-porto-alegre-vale-a-pena/',
    primaryKeyword: 'seo local para clinicas medicas em porto alegre',
    secondaryKeywords: [
      'seo para clinicas medicas em porto alegre',
      'agencia seo local para clinicas em porto alegre',
      'google maps para clinicas medicas em porto alegre'
    ],
    targetAudience: 'Clínicas médicas e operações de saúde privada com atuação em Porto Alegre e na região metropolitana.',
    ctaPrimary: 'Solicitar diagnóstico local em Porto Alegre',
    ctaSecondary: 'Entender a estratégia local para clínicas médicas',
    complementaryPath: '/servicos/google-meu-negocio-para-clinicas-medicas-em-porto-alegre/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-porto-alegre/',
    pageTitle: 'Google Meu Negócio para Clínicas Médicas em Porto Alegre',
    cityDisplay: 'Porto Alegre',
    cityPath: '/cidades/porto-alegre/',
    sectorDisplay: 'Clínicas Médicas',
    sectorServicePath: '/servicos/seo-para-clinicas-medicas/',
    localArticlePath: '/blog/seo-local-para-clinicas-medicas-em-porto-alegre-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-clinicas-medicas/',
    primaryKeyword: 'google meu negocio para clinicas medicas em porto alegre',
    secondaryKeywords: [
      'google business profile para clinicas medicas em porto alegre',
      'gbp para clinicas medicas em porto alegre',
      'maps para clinicas em porto alegre'
    ],
    targetAudience: 'Clínicas médicas em Porto Alegre que dependem de Google Maps, comparação local e descoberta por proximidade.',
    ctaPrimary: 'Solicitar diagnóstico de GBP em Porto Alegre',
    ctaSecondary: 'Entender a estratégia de Maps para clínicas',
    complementaryPath: '/servicos/seo-local-para-clinicas-medicas-em-porto-alegre/'
  }),
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-odontologia-em-porto-alegre/',
    pageTitle: 'SEO Local para Odontologia em Porto Alegre',
    cityDisplay: 'Porto Alegre',
    cityPath: '/cidades/porto-alegre/',
    sectorDisplay: 'Odontologia',
    sectorServicePath: '/servicos/seo-para-odontologia/',
    localArticlePath: '/blog/seo-local-para-odontologia-em-porto-alegre-vale-a-pena/',
    primaryKeyword: 'seo local para odontologia em porto alegre',
    secondaryKeywords: ['seo para dentistas em porto alegre', 'agencia seo para odontologia em porto alegre', 'google maps para odontologia em porto alegre'],
    targetAudience: 'Clínicas odontológicas, consultórios e redes de odontologia com atuação em Porto Alegre.',
    ctaPrimary: 'Solicitar diagnóstico para odontologia em Porto Alegre',
    ctaSecondary: 'Entender a estratégia local para odontologia',
    complementaryPath: '/servicos/google-meu-negocio-para-odontologia-em-porto-alegre/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-odontologia-em-porto-alegre/',
    pageTitle: 'Google Meu Negócio para Odontologia em Porto Alegre',
    cityDisplay: 'Porto Alegre',
    cityPath: '/cidades/porto-alegre/',
    sectorDisplay: 'Odontologia',
    sectorServicePath: '/servicos/seo-para-odontologia/',
    localArticlePath: '/blog/seo-local-para-odontologia-em-porto-alegre-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-odontologia/',
    primaryKeyword: 'google meu negocio para odontologia em porto alegre',
    secondaryKeywords: ['gbp para odontologia em porto alegre', 'maps para dentistas em porto alegre', 'perfil da empresa para odontologia em porto alegre'],
    targetAudience: 'Clínicas odontológicas e consultórios em Porto Alegre que dependem de Google Maps e comparação local.',
    ctaPrimary: 'Solicitar diagnóstico de GBP para odontologia em Porto Alegre',
    ctaSecondary: 'Entender a estratégia de Maps para odontologia',
    complementaryPath: '/servicos/seo-local-para-odontologia-em-porto-alegre/'
  }),
  createLocalHealthSeoBrief({
    slug: '/servicos/seo-local-para-dermatologistas-em-porto-alegre/',
    pageTitle: 'SEO Local para Dermatologistas em Porto Alegre',
    cityDisplay: 'Porto Alegre',
    cityPath: '/cidades/porto-alegre/',
    sectorDisplay: 'Dermatologistas',
    sectorServicePath: '/servicos/seo-para-dermatologistas/',
    localArticlePath: '/blog/seo-local-para-dermatologistas-em-porto-alegre-vale-a-pena/',
    primaryKeyword: 'seo local para dermatologistas em porto alegre',
    secondaryKeywords: ['seo para dermatologistas em porto alegre', 'agencia seo para dermatologistas em porto alegre', 'google maps para dermatologistas em porto alegre'],
    targetAudience: 'Dermatologistas e clínicas dermatológicas com atuação em Porto Alegre.',
    ctaPrimary: 'Solicitar diagnóstico para dermatologia em Porto Alegre',
    ctaSecondary: 'Entender a estratégia local para dermatologistas',
    complementaryPath: '/servicos/google-meu-negocio-para-dermatologistas-em-porto-alegre/'
  }),
  createLocalHealthGbpBrief({
    slug: '/servicos/google-meu-negocio-para-dermatologistas-em-porto-alegre/',
    pageTitle: 'Google Meu Negócio para Dermatologistas em Porto Alegre',
    cityDisplay: 'Porto Alegre',
    cityPath: '/cidades/porto-alegre/',
    sectorDisplay: 'Dermatologistas',
    sectorServicePath: '/servicos/seo-para-dermatologistas/',
    localArticlePath: '/blog/seo-local-para-dermatologistas-em-porto-alegre-vale-a-pena/',
    genericGbpArticlePath: '/blog/google-meu-negocio-para-dermatologistas/',
    primaryKeyword: 'google meu negocio para dermatologistas em porto alegre',
    secondaryKeywords: ['gbp para dermatologistas em porto alegre', 'maps para dermatologistas em porto alegre', 'perfil da empresa para dermatologistas em porto alegre'],
    targetAudience: 'Dermatologistas e clínicas dermatológicas em Porto Alegre que dependem de Google Maps e comparação local.',
    ctaPrimary: 'Solicitar diagnóstico de GBP para dermatologistas em Porto Alegre',
    ctaSecondary: 'Entender a estratégia de Maps para dermatologia',
    complementaryPath: '/servicos/seo-local-para-dermatologistas-em-porto-alegre/'
  }),
  createLawCityBrief({
    slug: '/servicos/seo-para-escritorios-de-advocacia-em-porto-alegre/',
    pageTitle: 'SEO para Escritórios de Advocacia em Porto Alegre',
    cityDisplay: 'Porto Alegre',
    cityPath: '/cidades/porto-alegre/',
    primaryKeyword: 'seo para escritorios de advocacia em porto alegre',
    secondaryKeywords: ['agencia seo para advogados em porto alegre', 'seo juridico em porto alegre', 'marketing juridico organico em porto alegre'],
    targetAudience: 'Escritórios de advocacia e operações jurídicas com foco em descoberta orgânica e geração de oportunidades em Porto Alegre.',
    localArticlePath: '/blog/seo-para-escritorios-de-advocacia-em-porto-alegre-funciona/',
    ctaPrimary: 'Solicitar diagnóstico jurídico em Porto Alegre',
    ctaSecondary: 'Entender a estratégia para advocacia'
  }),
  createSoftwareCityBrief({
    slug: '/servicos/consultoria-seo-para-software-b2b-em-porto-alegre/',
    pageTitle: 'Consultoria SEO para Software B2B em Porto Alegre',
    cityDisplay: 'Porto Alegre',
    cityPath: '/cidades/porto-alegre/',
    primaryKeyword: 'consultoria seo para software b2b em porto alegre',
    secondaryKeywords: ['seo para software b2b em porto alegre', 'seo para saas em porto alegre', 'consultoria seo para tecnologia em porto alegre'],
    targetAudience: 'Empresas de software B2B, SaaS e tecnologia com operação comercial em Porto Alegre.',
    localArticlePath: '/blog/seo-para-software-b2b-em-porto-alegre-como-funciona/',
    ctaPrimary: 'Solicitar diagnóstico para software B2B em Porto Alegre',
    ctaSecondary: 'Entender a estratégia para tecnologia'
  }),
  createEnergyCityBrief({
    slug: '/servicos/consultoria-seo-para-energia-solar-em-porto-alegre/',
    pageTitle: 'Consultoria SEO para Energia Solar em Porto Alegre',
    cityDisplay: 'Porto Alegre',
    cityPath: '/cidades/porto-alegre/',
    primaryKeyword: 'consultoria seo para energia solar em porto alegre',
    secondaryKeywords: ['seo para energia solar em porto alegre', 'agencia seo para energia solar em porto alegre', 'demanda organica para energia solar em porto alegre'],
    targetAudience: 'Empresas de energia solar e operações comerciais com atuação em Porto Alegre e região.',
    localArticlePath: '/blog/seo-para-energia-solar-em-porto-alegre-como-gerar-demanda-qualificada/',
    ctaPrimary: 'Solicitar diagnóstico para energia solar em Porto Alegre',
    ctaSecondary: 'Entender a estratégia para energia solar'
  })
];
