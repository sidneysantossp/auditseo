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
      { label: 'SEO local para clínicas médicas em Porto Alegre vale a pena', path: config.localArticlePath, reason: 'Apoio BOFU local de decisão.' },
      { label: 'Guia de GBP para clínicas médicas', path: config.genericGbpArticlePath, reason: 'Apoio BOFU temático.' }
    ],
    ctaPrimary: config.ctaPrimary,
    ctaSecondary: config.ctaSecondary,
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/google-meu-negocio/', config.complementaryPath]
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
  })
];
