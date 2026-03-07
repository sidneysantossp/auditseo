export type CommercialBriefPageType = 'sectoral-anchor' | 'local-commercial' | 'regional-bridge';

export interface CommercialInternalLink {
  label: string;
  path: string;
  reason: string;
}

export interface CommercialPageBrief {
  slug: string;
  pageTitle: string;
  pageType: CommercialBriefPageType;
  canonicalService: string;
  targetAudience: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  dominantIntent: 'commercial' | 'local' | 'sectoral';
  heroAngle: string;
  coreOffer: string;
  painPoints: string[];
  proofAssets: string[];
  faqAngles: string[];
  internalLinks: CommercialInternalLink[];
  ctaPrimary: string;
  ctaSecondary: string;
  schemaTypes: string[];
  avoidOverlapWith: string[];
}

export const saoPauloWaveOneCommercialBriefs: CommercialPageBrief[] = [
  {
    slug: '/servicos/seo-para-clinicas-medicas/',
    pageTitle: 'SEO para Clínicas Médicas',
    pageType: 'sectoral-anchor',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Donos de clínicas médicas, gestores de marketing e administradores de unidades de saúde privada.',
    primaryKeyword: 'seo para clinicas medicas',
    secondaryKeywords: ['agencia seo para clinicas medicas', 'consultoria seo para clinicas medicas', 'marketing de busca para clinicas'],
    dominantIntent: 'sectoral',
    heroAngle: 'Transformar a demanda orgânica em agendamentos e contatos qualificados para clínicas médicas.',
    coreOffer: 'Arquitetura SEO comercial e local para clínicas que precisam aparecer melhor no Google, Maps e buscas de alta intenção.',
    painPoints: [
      'Baixa descoberta orgânica para especialidades e procedimentos.',
      'Dependência excessiva de mídia paga ou indicação.',
      'Páginas do site sem intenção comercial clara.',
      'Google Business Profile sem estratégia integrada ao site.'
    ],
    proofAssets: ['Pagina de metodologia', 'Pagina do autor', 'Artigos BOFU de clinicas medicas', 'Servico canonico de SEO Local'],
    faqAngles: [
      'Quanto custa SEO para clinicas medicas',
      'Em quanto tempo SEO comeca a gerar pacientes',
      'SEO local e diferente de Google Meu Negocio',
      'Quando uma clinica precisa de consultoria SEO'
    ],
    internalLinks: [
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico canonico principal da vertical.' },
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', reason: 'Complemento local indispensavel.' },
      { label: 'Quanto custa SEO para clinicas medicas', path: '/blog/quanto-custa-seo-para-clinicas-medicas/', reason: 'Apoio BOFU de decisao.' },
      { label: 'SEO local para clinicas medicas em Sao Paulo', path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/', reason: 'Derivacao local principal.' }
    ],
    ctaPrimary: 'Solicitar diagnóstico para clínica médica',
    ctaSecondary: 'Falar com especialista em SEO para saúde',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/blog/quanto-custa-seo-para-clinicas-medicas/', '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/']
  },
  {
    slug: '/servicos/seo-para-dermatologistas/',
    pageTitle: 'SEO para Dermatologistas',
    pageType: 'sectoral-anchor',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Dermatologistas e clínicas dermatológicas com foco em novos pacientes e autoridade local.',
    primaryKeyword: 'seo para dermatologistas',
    secondaryKeywords: ['agencia seo para dermatologistas', 'seo local para dermatologistas', 'marketing no google para dermatologia'],
    dominantIntent: 'sectoral',
    heroAngle: 'Conquistar mais visibilidade orgânica em uma especialidade médica altamente competitiva.',
    coreOffer: 'Estrutura SEO para dermatologistas com foco em buscas locais, procedimentos e demanda qualificada.',
    painPoints: [
      'Concorrência intensa em procedimentos e especialidades.',
      'Baixa presença no local pack e em buscas de alta intenção.',
      'Site sem página comercial por tratamento ou especialidade.',
      'Dependência de Instagram e mídia paga.'
    ],
    proofAssets: ['Pagina de SEO Local', 'Pagina de Google Meu Negocio', 'Artigos BOFU de dermatologia', 'Pagina institucional da agencia'],
    faqAngles: [
      'SEO funciona para dermatologistas',
      'Qual a diferenca entre SEO local e Google Meu Negocio',
      'Quanto tempo leva para melhorar a visibilidade',
      'Que tipo de pagina um dermatologista precisa publicar'
    ],
    internalLinks: [
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico mae para a vertical.' },
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', reason: 'Ativo critico de descoberta local.' },
      { label: 'SEO local para dermatologistas em Sao Paulo', path: '/servicos/seo-local-para-dermatologistas-em-sao-paulo/', reason: 'Principal pagina local derivada.' },
      { label: 'SEO para dermatologistas vale a pena', path: '/blog/seo-para-dermatologistas-vale-a-pena/', reason: 'Apoio de decisao comercial.' }
    ],
    ctaPrimary: 'Solicitar diagnóstico para dermatologia',
    ctaSecondary: 'Entender a estratégia para dermatologistas',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/blog/seo-para-dermatologistas-vale-a-pena/', '/servicos/seo-local-para-dermatologistas-em-sao-paulo/']
  },
  {
    slug: '/servicos/seo-para-odontologia/',
    pageTitle: 'SEO para Odontologia',
    pageType: 'sectoral-anchor',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clínicas odontológicas, consultórios e redes de odontologia privada.',
    primaryKeyword: 'seo para odontologia',
    secondaryKeywords: ['seo para dentistas', 'agencia seo para odontologia', 'seo local para consultorio odontologico'],
    dominantIntent: 'sectoral',
    heroAngle: 'Aumentar a geração de pacientes para clínicas odontológicas via Google e Maps.',
    coreOffer: 'SEO comercial e local para odontologia, com foco em procedimentos, localização e conversão.',
    painPoints: [
      'Baixa presença orgânica para procedimentos e especialidades.',
      'Concorrentes dominando buscas locais e mapas.',
      'Site institucional sem páginas que ajudam a fechar consultas.',
      'Google Business Profile tratado sem integração com o site.'
    ],
    proofAssets: ['Pagina de SEO Local', 'Pagina de Google Meu Negocio', 'Artigos BOFU de odontologia', 'Pagina de metodologia'],
    faqAngles: [
      'SEO ou Google Meu Negocio para odontologia',
      'Quanto custa SEO para consultorio odontologico',
      'Quais paginas odontologicas ajudam mais a converter',
      'Quanto tempo leva para ganhar visibilidade'
    ],
    internalLinks: [
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Base da oferta local.' },
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', reason: 'Complemento de maps e local pack.' },
      { label: 'SEO local para odontologia em Sao Paulo', path: '/servicos/seo-local-para-odontologia-em-sao-paulo/', reason: 'Derivacao local de maior prioridade.' },
      { label: 'SEO para odontologia como funciona', path: '/blog/seo-para-odontologia-como-funciona/', reason: 'Apoio BOFU.' }
    ],
    ctaPrimary: 'Solicitar diagnóstico para odontologia',
    ctaSecondary: 'Falar com especialista em SEO local',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/blog/seo-para-odontologia-como-funciona/', '/servicos/seo-local-para-odontologia-em-sao-paulo/']
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/',
    pageTitle: 'SEO Local para Clinicas Medicas em Sao Paulo',
    pageType: 'local-commercial',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas com atuacao na cidade de Sao Paulo e foco em novos pacientes por geografia.',
    primaryKeyword: 'seo local para clinicas medicas em sao paulo',
    secondaryKeywords: ['seo para clinicas medicas em sao paulo', 'agencia seo local para clinicas em sao paulo', 'marketing no google para clinicas em sao paulo'],
    dominantIntent: 'local',
    heroAngle: 'Captar mais pacientes em Sao Paulo com estrategia local orientada a busca, mapa e paginas comerciais.',
    coreOffer: 'Operacao de SEO local para clinicas medicas com foco em visibilidade, local pack e paginas de alta intencao.',
    painPoints: [
      'Baixa presenca em buscas geograficas dentro da capital.',
      'Falta de integracao entre GBP, paginas do site e especialidades.',
      'Concorrencia local mais forte nas regioes mais disputadas.',
      'Baixa conversao do trafego organico atual.'
    ],
    proofAssets: ['Pagina de Sao Paulo', 'Pagina de clinicas medicas', 'Artigos de GBP para clinicas', 'Pagina de metodologia'],
    faqAngles: [
      'SEO local funciona para clinicas em Sao Paulo',
      'Quanto tempo leva para clinicas aparecerem melhor no Google',
      'O que muda entre SEO local e SEO nacional',
      'Google Meu Negocio faz parte do trabalho'
    ],
    internalLinks: [
      { label: 'SEO para clinicas medicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Pagina setorial mae.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico canonico.' },
      { label: 'Google Meu Negocio para clinicas medicas em Sao Paulo', path: '/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/', reason: 'Pagina complementar local.' },
      { label: 'SEO local vale a pena para clinicas medicas', path: '/blog/seo-local-vale-a-pena-para-clinicas-medicas/', reason: 'Apoio de decisao.' }
    ],
    ctaPrimary: 'Solicitar diagnostico local em Sao Paulo',
    ctaSecondary: 'Falar com a AUDITSEO sobre clinicas medicas',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/seo-para-clinicas-medicas/', '/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/']
  },
  {
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/',
    pageTitle: 'Google Meu Negocio para Clinicas Medicas em Sao Paulo',
    pageType: 'local-commercial',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas medicas de Sao Paulo que dependem de descoberta local, rota, ligacoes e comparacao rapida.',
    primaryKeyword: 'google meu negocio para clinicas medicas em sao paulo',
    secondaryKeywords: ['google business profile para clinicas medicas em sao paulo', 'gbp para clinicas medicas', 'maps para clinicas em sao paulo'],
    dominantIntent: 'local',
    heroAngle: 'Fortalecer a descoberta de clinicas medicas em Sao Paulo por meio de Google Maps e GBP.',
    coreOffer: 'Estrutura, gestao e integracao de Google Meu Negocio com as paginas comerciais da clinica.',
    painPoints: [
      'Perfil desatualizado ou sem estrategia de conversao.',
      'Baixa relevancia local nas regioes alvo.',
      'Falta de consistencia entre perfil, site e servicos.',
      'Pouca geracao de ligacoes e rotas.'
    ],
    proofAssets: ['Pagina de Google Meu Negocio', 'Pagina local de clinicas medicas em Sao Paulo', 'Artigo BOFU de GBP', 'Pagina institucional'],
    faqAngles: [
      'Google Meu Negocio sozinho resolve',
      'Qual a diferenca entre GBP e SEO local',
      'Quanto tempo leva para melhorar o perfil',
      'A pagina do site interfere no mapa'
    ],
    internalLinks: [
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', reason: 'Servico canonico.' },
      { label: 'SEO local para clinicas medicas em Sao Paulo', path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/', reason: 'Pagina complementar.' },
      { label: 'Google Meu Negocio para clinicas medicas', path: '/blog/google-meu-negocio-para-clinicas-medicas/', reason: 'BOFU direto.' },
      { label: 'SEO para clinicas medicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Pagina setorial mae.' }
    ],
    ctaPrimary: 'Solicitar diagnostico de GBP em Sao Paulo',
    ctaSecondary: 'Entender a estrategia de Maps para clinicas',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/google-meu-negocio/', '/blog/google-meu-negocio-para-clinicas-medicas/']
  },
  {
    slug: '/servicos/seo-local-para-dermatologistas-em-sao-paulo/',
    pageTitle: 'SEO Local para Dermatologistas em Sao Paulo',
    pageType: 'local-commercial',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Dermatologistas e clinicas dermatologicas na cidade de Sao Paulo.',
    primaryKeyword: 'seo local para dermatologistas em sao paulo',
    secondaryKeywords: ['seo para dermatologistas em sao paulo', 'agencia seo para dermatologista em sao paulo', 'seo local para clinica dermatologica'],
    dominantIntent: 'local',
    heroAngle: 'Melhorar a presenca organica de dermatologistas em uma das pracas mais competitivas do pais.',
    coreOffer: 'SEO local orientado a especialidade medica, competencia urbana e descoberta qualificada.',
    painPoints: [
      'Concorrencia forte em procedimentos e especialidades.',
      'Baixa visibilidade em buscas locais de alta intencao.',
      'Site sem estrategia para geografia e tratamento.',
      'Dependencia excessiva de paid social.'
    ],
    proofAssets: ['Pagina setorial de dermatologistas', 'Pagina de SEO Local', 'Artigos de BOFU de dermatologia', 'Pagina do autor'],
    faqAngles: [
      'SEO local e suficiente para dermatologistas',
      'Como competir em Sao Paulo na especialidade',
      'Quanto tempo leva para melhorar a descoberta local',
      'Google Meu Negocio precisa vir junto'
    ],
    internalLinks: [
      { label: 'SEO para dermatologistas', path: '/servicos/seo-para-dermatologistas/', reason: 'Pagina setorial mae.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico canonico.' },
      { label: 'Google Meu Negocio para dermatologistas em Sao Paulo', path: '/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/', reason: 'Complemento local.' },
      { label: 'SEO para dermatologistas vale a pena', path: '/blog/seo-para-dermatologistas-vale-a-pena/', reason: 'Apoio de decisao.' }
    ],
    ctaPrimary: 'Solicitar diagnostico para dermatologia em Sao Paulo',
    ctaSecondary: 'Falar com especialista em dermatologia',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/seo-para-dermatologistas/', '/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/']
  },
  {
    slug: '/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/',
    pageTitle: 'Google Meu Negocio para Dermatologistas em Sao Paulo',
    pageType: 'local-commercial',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Dermatologistas em Sao Paulo que precisam fortalecer Maps, ligacoes e descoberta imediata.',
    primaryKeyword: 'google meu negocio para dermatologistas em sao paulo',
    secondaryKeywords: ['gbp para dermatologistas em sao paulo', 'maps para dermatologistas', 'perfil da empresa para dermatologia'],
    dominantIntent: 'local',
    heroAngle: 'Aumentar a descoberta local de dermatologistas em Sao Paulo com uma operacao forte de GBP.',
    coreOffer: 'Gestao e estrutura de Google Meu Negocio para dermatologia com integracao ao site e paginas locais.',
    painPoints: [
      'Baixa taxa de descoberta por pesquisa e rota.',
      'Perfil sem sinais de relevancia local e conversao.',
      'Informacoes inconsistentes entre perfil e site.',
      'Perda de demanda de alta urgencia.'
    ],
    proofAssets: ['Pagina canonica de Google Meu Negocio', 'Pagina local de dermatologia em Sao Paulo', 'Artigo BOFU de GBP para dermatologistas', 'Pagina de metodologia'],
    faqAngles: [
      'GBP substitui o trabalho de SEO',
      'Como GBP ajuda dermatologistas em Sao Paulo',
      'Quanto tempo leva para melhorar o perfil',
      'Quais sinais no site ajudam o mapa'
    ],
    internalLinks: [
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', reason: 'Servico canonico.' },
      { label: 'SEO local para dermatologistas em Sao Paulo', path: '/servicos/seo-local-para-dermatologistas-em-sao-paulo/', reason: 'Pagina complementar.' },
      { label: 'Google Meu Negocio para dermatologistas', path: '/blog/google-meu-negocio-para-dermatologistas/', reason: 'BOFU.' },
      { label: 'SEO para dermatologistas', path: '/servicos/seo-para-dermatologistas/', reason: 'Contexto setorial mae.' }
    ],
    ctaPrimary: 'Solicitar diagnostico de GBP para dermatologia',
    ctaSecondary: 'Entender a estrategia de Maps para dermatologistas',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/google-meu-negocio/', '/blog/google-meu-negocio-para-dermatologistas/']
  },
  {
    slug: '/servicos/seo-local-para-odontologia-em-sao-paulo/',
    pageTitle: 'SEO Local para Odontologia em Sao Paulo',
    pageType: 'local-commercial',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas odontologicas e consultorios na cidade de Sao Paulo.',
    primaryKeyword: 'seo local para odontologia em sao paulo',
    secondaryKeywords: ['seo para odontologia em sao paulo', 'seo para dentistas em sao paulo', 'agencia seo odontologia sao paulo'],
    dominantIntent: 'local',
    heroAngle: 'Ajudar clinicas odontologicas de Sao Paulo a captar mais pacientes com busca organica local.',
    coreOffer: 'SEO local para odontologia com foco em procedimentos, mapa e paginas comerciais de alta intencao.',
    painPoints: [
      'Baixa visibilidade para consultas e procedimentos em buscas locais.',
      'Concorrencia elevada em bairros e zonas da capital.',
      'Site institucional sem estrutura para conversao.',
      'Google Business Profile operado sem metodo.'
    ],
    proofAssets: ['Pagina setorial de odontologia', 'Pagina de SEO Local', 'Artigos BOFU odontologicos', 'Pagina institucional'],
    faqAngles: [
      'SEO local vale a pena para odontologia em Sao Paulo',
      'Qual a diferenca entre SEO local e GBP',
      'Que tipo de pagina ajuda odontologia a converter',
      'Quanto tempo leva para ganhar visibilidade'
    ],
    internalLinks: [
      { label: 'SEO para odontologia', path: '/servicos/seo-para-odontologia/', reason: 'Pagina setorial mae.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico canonico.' },
      { label: 'Google Meu Negocio para odontologia em Sao Paulo', path: '/servicos/google-meu-negocio-para-odontologia-em-sao-paulo/', reason: 'Complemento local.' },
      { label: 'SEO para odontologia como funciona', path: '/blog/seo-para-odontologia-como-funciona/', reason: 'BOFU.' }
    ],
    ctaPrimary: 'Solicitar diagnostico para odontologia em Sao Paulo',
    ctaSecondary: 'Falar com especialista em SEO local',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/seo-para-odontologia/', '/servicos/google-meu-negocio-para-odontologia-em-sao-paulo/']
  },
  {
    slug: '/servicos/google-meu-negocio-para-odontologia-em-sao-paulo/',
    pageTitle: 'Google Meu Negocio para Odontologia em Sao Paulo',
    pageType: 'local-commercial',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas odontologicas em Sao Paulo que dependem de busca local e Maps.',
    primaryKeyword: 'google meu negocio para odontologia em sao paulo',
    secondaryKeywords: ['gbp para odontologia em sao paulo', 'maps para dentistas', 'perfil da empresa para odontologia'],
    dominantIntent: 'local',
    heroAngle: 'Fortalecer a presenca local de clinicas odontologicas em Sao Paulo dentro do mapa e das buscas proximas.',
    coreOffer: 'Gestao de GBP para odontologia integrada a paginas comerciais e estrategia de descoberta local.',
    painPoints: [
      'Perfil sem consistencia, otimizacao e sinais de relevancia.',
      'Pouca geracao de ligacoes e rotas.',
      'Dependencia de anuncios para demanda imediata.',
      'Falta de alinhamento entre perfil, site e especialidades.'
    ],
    proofAssets: ['Pagina de Google Meu Negocio', 'Pagina local de odontologia em Sao Paulo', 'Artigo BOFU odontologico', 'Pagina do autor'],
    faqAngles: [
      'GBP sozinho resolve para odontologia',
      'Como melhorar a descoberta no mapa',
      'Quanto tempo leva para evoluir um perfil',
      'Qual a relacao entre site e Google Meu Negocio'
    ],
    internalLinks: [
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', reason: 'Servico canonico.' },
      { label: 'SEO local para odontologia em Sao Paulo', path: '/servicos/seo-local-para-odontologia-em-sao-paulo/', reason: 'Complemento local.' },
      { label: 'Google Meu Negocio para odontologia', path: '/blog/google-meu-negocio-para-odontologia/', reason: 'Apoio BOFU.' },
      { label: 'SEO para odontologia', path: '/servicos/seo-para-odontologia/', reason: 'Pagina setorial mae.' }
    ],
    ctaPrimary: 'Solicitar diagnostico de GBP para odontologia',
    ctaSecondary: 'Entender a estrategia de Maps para dentistas',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/google-meu-negocio/', '/blog/google-meu-negocio-para-odontologia/']
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/',
    pageTitle: 'SEO Local para Clinicas Medicas na Grande Sao Paulo',
    pageType: 'regional-bridge',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas que atuam na Regiao Metropolitana de Sao Paulo.',
    primaryKeyword: 'seo local para clinicas medicas na grande sao paulo',
    secondaryKeywords: ['seo para clinicas na grande sao paulo', 'agencia seo para clinicas na regiao metropolitana', 'seo medico grande sp'],
    dominantIntent: 'local',
    heroAngle: 'Atender a busca metropolitana sem diluir a leitura comercial da capital e dos polos locais.',
    coreOffer: 'SEO local para clinicas com operacao em mais de uma cidade da Grande Sao Paulo.',
    painPoints: [
      'Atuacao em varias cidades sem estrutura de busca correspondente.',
      'Competicao entre unidades ou geografias proximas.',
      'Falta de arquitetura para demanda metropolitana.',
      'Site com pouca profundidade local.'
    ],
    proofAssets: ['Pagina de Sao Paulo capital', 'Pagina setorial de clinicas medicas', 'Artigos BOFU de clinicas', 'Pagina de metodologia'],
    faqAngles: [
      'Vale criar pagina para Grande Sao Paulo',
      'Como nao competir com a capital',
      'Quando a clinica precisa de pagina regional',
      'Como SEO local se organiza em multiplas cidades'
    ],
    internalLinks: [
      { label: 'SEO para clinicas medicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Pagina setorial mae.' },
      { label: 'SEO local para clinicas medicas em Sao Paulo', path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/', reason: 'Principal pagina local da capital.' },
      { label: 'SEO local para clinicas medicas em Campinas', path: '/servicos/seo-local-para-clinicas-medicas-em-campinas/', reason: 'Polo complementar da estrategia estadual.' },
      { label: 'Agencia SEO para clinicas medicas: como escolher', path: '/blog/agencia-seo-para-clinicas-medicas-como-escolher/', reason: 'Apoio de decisao.' }
    ],
    ctaPrimary: 'Solicitar diagnostico regional para clinicas',
    ctaSecondary: 'Falar sobre expansao na Grande Sao Paulo',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/', '/servicos/seo-local-para-clinicas-medicas-em-campinas/']
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-em-campinas/',
    pageTitle: 'SEO Local para Clinicas Medicas em Campinas',
    pageType: 'local-commercial',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas em Campinas com foco em busca organica local e conversao regional.',
    primaryKeyword: 'seo local para clinicas medicas em campinas',
    secondaryKeywords: ['seo para clinicas medicas em campinas', 'agencia seo local em campinas', 'marketing no google para clinicas campinas'],
    dominantIntent: 'local',
    heroAngle: 'Abrir a expansao da vertical de saude para um dos polos economicos mais fortes do interior paulista.',
    coreOffer: 'SEO local para clinicas medicas em Campinas, com foco em descoberta, mapa e paginas comerciais.',
    painPoints: [
      'Baixa relevancia em buscas locais na cidade.',
      'Concorrencia crescente por especialidades e procedimentos.',
      'Site sem paginas de decisao comercial.',
      'Maps subaproveitado.'
    ],
    proofAssets: ['Pagina de Campinas', 'Pagina setorial de clinicas medicas', 'Artigos BOFU de clinicas', 'Servico canonico de SEO Local'],
    faqAngles: [
      'SEO local para clinicas funciona em Campinas',
      'O que muda entre capital e interior',
      'Quando Google Meu Negocio entra junto',
      'Quanto tempo leva para melhorar a presenca local'
    ],
    internalLinks: [
      { label: 'SEO para clinicas medicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Pagina setorial mae.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico canonico.' },
      { label: 'Campinas', path: '/cidades/campinas/', reason: 'Contexto geografico ja existente no site.' },
      { label: 'Quanto custa SEO para clinicas medicas', path: '/blog/quanto-custa-seo-para-clinicas-medicas/', reason: 'Apoio BOFU.' }
    ],
    ctaPrimary: 'Solicitar diagnostico local em Campinas',
    ctaSecondary: 'Falar sobre captacao organica em Campinas',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/cidades/campinas/', '/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/']
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-em-sao-jose-dos-campos/',
    pageTitle: 'SEO Local para Clinicas Medicas em Sao Jose dos Campos',
    pageType: 'local-commercial',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas com atuacao em Sao Jose dos Campos e no Vale do Paraiba.',
    primaryKeyword: 'seo local para clinicas medicas em sao jose dos campos',
    secondaryKeywords: ['seo para clinicas medicas em sao jose dos campos', 'agencia seo local no vale do paraiba', 'marketing no google para clinicas sjc'],
    dominantIntent: 'local',
    heroAngle: 'Expandir a estrategia de saude para um polo economico relevante do interior paulista.',
    coreOffer: 'SEO local para clinicas medicas com foco em descoberta regional e conversao em Sao Jose dos Campos.',
    painPoints: [
      'Baixa presenca nas buscas locais do Vale do Paraiba.',
      'Pouca integracao entre site, mapa e especialidades.',
      'Site sem profundidade comercial local.',
      'Dependencia de canais pagos ou indicacao.'
    ],
    proofAssets: ['Pagina setorial de clinicas medicas', 'Servico de SEO Local', 'Artigos BOFU para clinicas', 'Pagina de metodologia'],
    faqAngles: [
      'SEO local funciona para clinicas em Sao Jose dos Campos',
      'Quando vale criar pagina local para a cidade',
      'Google Meu Negocio deve ser tratado junto',
      'Quanto tempo leva para gerar visibilidade local'
    ],
    internalLinks: [
      { label: 'SEO para clinicas medicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Pagina setorial mae.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico canonico.' },
      { label: 'SEO local para clinicas medicas em Sao Paulo', path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/', reason: 'Referencia da capital.' },
      { label: 'SEO local vale a pena para clinicas medicas', path: '/blog/seo-local-vale-a-pena-para-clinicas-medicas/', reason: 'Apoio BOFU.' }
    ],
    ctaPrimary: 'Solicitar diagnostico local em Sao Jose dos Campos',
    ctaSecondary: 'Falar sobre SEO local no Vale do Paraiba',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/', '/servicos/seo-local-para-clinicas-medicas-em-campinas/']
  }
];
