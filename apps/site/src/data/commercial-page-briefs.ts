import { curitibaBrasiliaCommercialBriefs } from './commercial-page-briefs-curitiba-brasilia';

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

export const saoPauloWaveTwoCommercialBriefs: CommercialPageBrief[] = [
  {
    slug: '/servicos/seo-para-escritorios-de-advocacia-em-sao-paulo/',
    pageTitle: 'SEO para Escritórios de Advocacia em São Paulo',
    pageType: 'local-commercial',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Sócios, gestores e times de marketing de escritórios de advocacia em São Paulo.',
    primaryKeyword: 'seo para escritorios de advocacia em sao paulo',
    secondaryKeywords: ['consultoria seo juridico em sao paulo', 'agencia seo para advogados em sao paulo', 'seo para escritorio de advocacia'],
    dominantIntent: 'local',
    heroAngle: 'Fortalecer a descoberta orgânica de escritórios de advocacia em uma das praças jurídicas mais competitivas do país.',
    coreOffer: 'Consultoria de SEO para escritórios de advocacia com foco em áreas de atuação, autoridade, busca local e captação qualificada em São Paulo.',
    painPoints: [
      'Baixa visibilidade orgânica para áreas de atuação relevantes.',
      'Dependência de indicação e networking para gerar novas oportunidades.',
      'Site institucional sem páginas comerciais claras por serviço jurídico.',
      'Mercado altamente competitivo na capital.'
    ],
    proofAssets: ['Página de consultoria SEO', 'Página de escritórios de advocacia', 'Página de São Paulo', 'Página de metodologia'],
    faqAngles: [
      'SEO funciona para escritórios de advocacia em São Paulo',
      'Como estruturar áreas de atuação sem canibalização',
      'Diferença entre página institucional e página comercial jurídica',
      'Quando contratar consultoria SEO para o jurídico'
    ],
    internalLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'Escritórios de advocacia', path: '/nichos/escritorios-advocacia/', reason: 'Hub setorial de apoio já existente.' },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
      { label: 'Como escolher agência SEO', path: '/blog/como-escolher-agencia-seo/', reason: 'Apoio BOFU de decisão.' }
    ],
    ctaPrimary: 'Solicitar diagnóstico para escritório em São Paulo',
    ctaSecondary: 'Falar com a AUDITSEO sobre o setor jurídico',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/nichos/escritorios-advocacia/', '/servicos/consultoria-seo/']
  },
  {
    slug: '/servicos/consultoria-seo-para-energia-solar-em-sao-paulo/',
    pageTitle: 'Consultoria SEO para Energia Solar em São Paulo',
    pageType: 'local-commercial',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Empresas de energia solar e integradores fotovoltaicos com atuação comercial em São Paulo.',
    primaryKeyword: 'consultoria seo para energia solar em sao paulo',
    secondaryKeywords: ['seo para energia solar em sao paulo', 'agencia seo para energia solar', 'consultoria seo b2b energia solar'],
    dominantIntent: 'local',
    heroAngle: 'Captar demanda qualificada para energia solar em São Paulo com páginas comerciais e estrutura orientada a jornada B2B.',
    coreOffer: 'Consultoria SEO para energia solar com foco em demanda regional, páginas de solução, intenção consultiva e autoridade comercial.',
    painPoints: [
      'Leads orgânicos escassos ou pouco qualificados.',
      'Dependência alta de mídia paga e geração fria.',
      'Site sem páginas fortes para solução, segmento e intenção comercial.',
      'Jornada de decisão longa sem conteúdo de apoio adequado.'
    ],
    proofAssets: ['Página de consultoria SEO', 'Página de energia solar', 'Página de São Paulo', 'Página de metodologia'],
    faqAngles: [
      'SEO funciona para energia solar em São Paulo',
      'Como SEO ajuda em vendas consultivas',
      'Que tipo de página uma empresa de energia solar precisa',
      'Quanto tempo leva para gerar demanda orgânica'
    ],
    internalLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'Energia solar', path: '/nichos/energia-solar/', reason: 'Hub setorial de apoio já publicado.' },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
      { label: 'Quanto custa SEO', path: '/blog/quanto-custa-seo/', reason: 'Apoio de decisão comercial.' }
    ],
    ctaPrimary: 'Solicitar diagnóstico para energia solar em São Paulo',
    ctaSecondary: 'Entender a estratégia comercial para energia solar',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/nichos/energia-solar/', '/servicos/consultoria-seo/']
  },
  {
    slug: '/servicos/consultoria-seo-para-software-b2b-em-sao-paulo/',
    pageTitle: 'Consultoria SEO para Software B2B em São Paulo',
    pageType: 'local-commercial',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Empresas de software B2B, SaaS e tecnologia com operação comercial em São Paulo.',
    primaryKeyword: 'consultoria seo para software b2b em sao paulo',
    secondaryKeywords: ['seo para software b2b em sao paulo', 'consultoria seo saas', 'agencia seo para software b2b'],
    dominantIntent: 'local',
    heroAngle: 'Ajudar empresas de software B2B em São Paulo a ganhar visibilidade para buscas comparativas, técnicas e comerciais de alta complexidade.',
    coreOffer: 'Consultoria SEO para software B2B com foco em categoria, solução, comparação, marca e jornada consultiva.',
    painPoints: [
      'Ciclo comercial longo e com muitas etapas de comparação.',
      'Baixa visibilidade para termos de categoria, problema e solução.',
      'Site com copy técnica, mas sem estrutura comercial clara.',
      'Dependência excessiva de outbound e mídia paga.'
    ],
    proofAssets: ['Página de consultoria SEO', 'Página de LLM Brand Presence', 'Página de São Paulo', 'Página de metodologia'],
    faqAngles: [
      'SEO funciona para software B2B em São Paulo',
      'Como lidar com ciclo longo de decisão',
      'Quais páginas um SaaS B2B precisa publicar',
      'SEO e LLM Brand Presence se complementam'
    ],
    internalLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/', reason: 'Complemento estratégico para descoberta assistida por IA.' },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
      { label: 'O que é LLM SEO', path: '/blog/o-que-e-llm-seo/', reason: 'Apoio editorial de contexto técnico.' }
    ],
    ctaPrimary: 'Solicitar diagnóstico para software B2B em São Paulo',
    ctaSecondary: 'Falar sobre captação orgânica para SaaS',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/consultoria-seo/', '/servicos/llm-brand-presence/']
  },
  {
    slug: '/servicos/consultoria-seo-para-empresas-no-interior-de-sao-paulo/',
    pageTitle: 'Consultoria SEO para Empresas no Interior de São Paulo',
    pageType: 'regional-bridge',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Empresas de serviços e B2B com atuação em polos econômicos do interior de São Paulo.',
    primaryKeyword: 'consultoria seo para empresas no interior de sao paulo',
    secondaryKeywords: ['seo para empresas no interior de sao paulo', 'consultoria seo regional no interior paulista', 'agencia seo para empresas no interior'],
    dominantIntent: 'local',
    heroAngle: 'Organizar a expansão comercial em polos do interior paulista sem depender só da capital ou de páginas genéricas.',
    coreOffer: 'Consultoria SEO para empresas do interior de São Paulo com foco em polos econômicos, páginas comerciais e cobertura regional planejada.',
    painPoints: [
      'Presença orgânica fraca fora da capital.',
      'Estrutura comercial concentrada em uma página genérica.',
      'Falta de prioridade clara entre polos do interior.',
      'Dependência de canais pagos para gerar demanda regional.'
    ],
    proofAssets: ['Página de consultoria SEO', 'Página de Campinas', 'Página de metodologia', 'Páginas comerciais da Onda 1 em polos do interior'],
    faqAngles: [
      'Vale criar página para interior de São Paulo',
      'Como decidir quais cidades do interior priorizar',
      'Quando uma empresa precisa de página regional',
      'Diferença entre página regional e página por cidade'
    ],
    internalLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
      { label: 'Campinas', path: '/cidades/campinas/', reason: 'Polo econômico já publicado.' },
      { label: 'SEO local para clínicas médicas em Campinas', path: '/servicos/seo-local-para-clinicas-medicas-em-campinas/', reason: 'Exemplo real de expansão para o interior.' },
      { label: 'Como escolher agência SEO', path: '/blog/como-escolher-agencia-seo/', reason: 'Apoio BOFU de decisão.' }
    ],
    ctaPrimary: 'Solicitar diagnóstico para o interior de São Paulo',
    ctaSecondary: 'Falar sobre expansão regional',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/cidades/campinas/', '/servicos/consultoria-seo/']
  }
];

export const southeastExpansionWaveOneCommercialBriefs: CommercialPageBrief[] = [
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-em-rio-de-janeiro/',
    pageTitle: 'SEO Local para Clinicas Medicas no Rio de Janeiro',
    pageType: 'local-commercial',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas com atuacao na cidade do Rio de Janeiro e foco em novos pacientes por geografia.',
    primaryKeyword: 'seo local para clinicas medicas no rio de janeiro',
    secondaryKeywords: ['seo para clinicas medicas no rio de janeiro', 'agencia seo local para clinicas no rio', 'marketing no google para clinicas no rio'],
    dominantIntent: 'local',
    heroAngle: 'Captar mais pacientes no Rio de Janeiro com uma estrutura local orientada a busca, mapa e paginas comerciais.',
    coreOffer: 'Operacao de SEO local para clinicas medicas com foco em visibilidade, local pack e paginas de alta intencao no Rio.',
    painPoints: [
      'Baixa presenca em buscas geograficas e de bairro na cidade.',
      'Falta de integracao entre GBP, paginas do site e especialidades.',
      'Concorrencia local forte em regioes de maior densidade comercial.',
      'Baixa conversao do trafego organico atual.'
    ],
    proofAssets: ['Pagina do Rio de Janeiro', 'Pagina de clinicas medicas', 'Artigos de GBP para clinicas', 'Pagina de metodologia'],
    faqAngles: [
      'SEO local funciona para clinicas no Rio de Janeiro',
      'O que muda entre pagina local do Rio e pagina nacional',
      'Google Meu Negocio entra junto',
      'Quando uma clinica deve priorizar a cidade'
    ],
    internalLinks: [
      { label: 'SEO para clinicas medicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Pagina setorial mae.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico canonico principal.' },
      { label: 'Rio de Janeiro', path: '/cidades/rio-de-janeiro/', reason: 'Contexto geografico principal.' },
      { label: 'SEO local vale a pena para clinicas medicas', path: '/blog/seo-local-vale-a-pena-para-clinicas-medicas/', reason: 'Apoio BOFU de decisao.' }
    ],
    ctaPrimary: 'Solicitar diagnostico local no Rio de Janeiro',
    ctaSecondary: 'Falar com a AUDITSEO sobre clinicas no Rio',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/seo-para-clinicas-medicas/', '/servicos/google-meu-negocio-para-clinicas-medicas-em-rio-de-janeiro/']
  },
  {
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-rio-de-janeiro/',
    pageTitle: 'Google Meu Negocio para Clinicas Medicas no Rio de Janeiro',
    pageType: 'local-commercial',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas medicas do Rio de Janeiro que dependem de descoberta local, rota e comparacao rapida.',
    primaryKeyword: 'google meu negocio para clinicas medicas no rio de janeiro',
    secondaryKeywords: ['google business profile para clinicas no rio', 'gbp para clinicas medicas no rio', 'maps para clinicas no rio de janeiro'],
    dominantIntent: 'local',
    heroAngle: 'Fortalecer a descoberta local de clinicas medicas no Rio por meio de Google Maps e Google Business Profile.',
    coreOffer: 'Estrutura, gestao e integracao de Google Meu Negocio com as paginas comerciais da clinica no Rio de Janeiro.',
    painPoints: [
      'Perfil local desatualizado ou sem estrategia de conversao.',
      'Baixa relevancia por regiao e proximidade.',
      'Inconsistencia entre perfil, site e especialidades.',
      'Pouca geracao de rotas e contatos qualificados.'
    ],
    proofAssets: ['Pagina de Google Meu Negocio', 'Pagina local de clinicas medicas no Rio', 'Artigo BOFU de GBP', 'Pagina institucional'],
    faqAngles: [
      'GBP sozinho resolve a descoberta local',
      'Qual a diferenca entre GBP e SEO local',
      'Quanto tempo leva para melhorar o perfil',
      'A pagina do site interfere no mapa'
    ],
    internalLinks: [
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', reason: 'Servico canonico principal.' },
      { label: 'SEO local para clinicas medicas no Rio de Janeiro', path: '/servicos/seo-local-para-clinicas-medicas-em-rio-de-janeiro/', reason: 'Pagina complementar local.' },
      { label: 'Google Meu Negocio para clinicas medicas', path: '/blog/google-meu-negocio-para-clinicas-medicas/', reason: 'BOFU direto.' },
      { label: 'Rio de Janeiro', path: '/cidades/rio-de-janeiro/', reason: 'Contexto geografico principal.' }
    ],
    ctaPrimary: 'Solicitar diagnostico de GBP no Rio de Janeiro',
    ctaSecondary: 'Entender a estrategia de Maps no Rio',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/google-meu-negocio/', '/blog/google-meu-negocio-para-clinicas-medicas/']
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-em-belo-horizonte/',
    pageTitle: 'SEO Local para Clinicas Medicas em Belo Horizonte',
    pageType: 'local-commercial',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas com atuacao em Belo Horizonte e foco em novos pacientes por geografia.',
    primaryKeyword: 'seo local para clinicas medicas em belo horizonte',
    secondaryKeywords: ['seo para clinicas medicas em belo horizonte', 'agencia seo local para clinicas em bh', 'marketing no google para clinicas em bh'],
    dominantIntent: 'local',
    heroAngle: 'Captar mais pacientes em Belo Horizonte com uma estrutura local orientada a descoberta, mapa e paginas comerciais.',
    coreOffer: 'Operacao de SEO local para clinicas medicas com foco em visibilidade organica, local pack e paginas comerciais em BH.',
    painPoints: [
      'Baixa presenca em buscas geograficas dentro de Belo Horizonte.',
      'Especialidades e pagina local sem integracao clara.',
      'Dependencia alta de indicacao ou midia paga.',
      'Site sem paginas com intencao local suficiente.'
    ],
    proofAssets: ['Pagina de Belo Horizonte', 'Pagina de clinicas medicas', 'Artigos de SEO local para clinicas', 'Pagina de metodologia'],
    faqAngles: [
      'SEO local funciona para clinicas em Belo Horizonte',
      'O que muda entre BH e Sao Paulo na estrategia local',
      'Google Meu Negocio entra junto',
      'Que tipo de pagina uma clinica em BH precisa'
    ],
    internalLinks: [
      { label: 'SEO para clinicas medicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Pagina setorial mae.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico canonico principal.' },
      { label: 'Belo Horizonte', path: '/cidades/belo-horizonte/', reason: 'Contexto geografico principal.' },
      { label: 'SEO local vale a pena para clinicas medicas', path: '/blog/seo-local-vale-a-pena-para-clinicas-medicas/', reason: 'Apoio BOFU de decisao.' }
    ],
    ctaPrimary: 'Solicitar diagnostico local em Belo Horizonte',
    ctaSecondary: 'Falar com a AUDITSEO sobre clinicas em BH',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/seo-para-clinicas-medicas/', '/servicos/google-meu-negocio-para-clinicas-medicas-em-belo-horizonte/']
  },
  {
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-belo-horizonte/',
    pageTitle: 'Google Meu Negocio para Clinicas Medicas em Belo Horizonte',
    pageType: 'local-commercial',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas medicas de Belo Horizonte que dependem de descoberta local, rota e comparacao rapida.',
    primaryKeyword: 'google meu negocio para clinicas medicas em belo horizonte',
    secondaryKeywords: ['google business profile para clinicas em bh', 'gbp para clinicas medicas em bh', 'maps para clinicas em belo horizonte'],
    dominantIntent: 'local',
    heroAngle: 'Fortalecer a descoberta de clinicas medicas em Belo Horizonte por meio de Google Maps e Google Business Profile.',
    coreOffer: 'Estrutura, gestao e integracao de Google Meu Negocio com as paginas comerciais da clinica em Belo Horizonte.',
    painPoints: [
      'Perfil local sem sinais suficientes de relevancia e conversao.',
      'Baixa consistencia entre perfil, site e especialidades.',
      'Perda de contatos locais em pesquisas de proximidade.',
      'Pouca geracao de ligacoes e rotas qualificadas.'
    ],
    proofAssets: ['Pagina de Google Meu Negocio', 'Pagina local de clinicas medicas em BH', 'Artigo BOFU de GBP', 'Pagina institucional'],
    faqAngles: [
      'GBP sozinho resolve a descoberta local',
      'Qual a diferenca entre GBP e SEO local em BH',
      'Quanto tempo leva para melhorar o perfil',
      'A pagina do site interfere no mapa'
    ],
    internalLinks: [
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', reason: 'Servico canonico principal.' },
      { label: 'SEO local para clinicas medicas em Belo Horizonte', path: '/servicos/seo-local-para-clinicas-medicas-em-belo-horizonte/', reason: 'Pagina complementar local.' },
      { label: 'Google Meu Negocio para clinicas medicas', path: '/blog/google-meu-negocio-para-clinicas-medicas/', reason: 'BOFU direto.' },
      { label: 'Belo Horizonte', path: '/cidades/belo-horizonte/', reason: 'Contexto geografico principal.' }
    ],
    ctaPrimary: 'Solicitar diagnostico de GBP em Belo Horizonte',
    ctaSecondary: 'Entender a estrategia de Maps em BH',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/google-meu-negocio/', '/blog/google-meu-negocio-para-clinicas-medicas/']
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-em-curitiba/',
    pageTitle: 'SEO Local para Clinicas Medicas em Curitiba',
    pageType: 'local-commercial',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas com atuacao em Curitiba e foco em novos pacientes por geografia.',
    primaryKeyword: 'seo local para clinicas medicas em curitiba',
    secondaryKeywords: ['seo para clinicas medicas em curitiba', 'agencia seo local para clinicas em curitiba', 'marketing no google para clinicas em curitiba'],
    dominantIntent: 'local',
    heroAngle: 'Captar mais pacientes em Curitiba com uma estrutura local orientada a descoberta, mapa e paginas comerciais.',
    coreOffer: 'Operacao de SEO local para clinicas medicas com foco em visibilidade organica, local pack e paginas comerciais em Curitiba.',
    painPoints: [
      'Baixa presenca em buscas geograficas dentro de Curitiba.',
      'Especialidades e pagina local sem integracao clara.',
      'Dependencia alta de indicacao ou midia paga.',
      'Site sem paginas com intencao local suficiente.'
    ],
    proofAssets: ['Pagina de Curitiba', 'Pagina de clinicas medicas', 'Artigos de SEO local para clinicas', 'Pagina de metodologia'],
    faqAngles: [
      'SEO local funciona para clinicas em Curitiba',
      'O que muda entre Curitiba e Sao Paulo na estrategia local',
      'Google Meu Negocio entra junto',
      'Que tipo de pagina uma clinica em Curitiba precisa'
    ],
    internalLinks: [
      { label: 'SEO para clinicas medicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Pagina setorial mae.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico canonico principal.' },
      { label: 'Curitiba', path: '/cidades/curitiba/', reason: 'Contexto geografico principal.' },
      { label: 'SEO local vale a pena para clinicas medicas', path: '/blog/seo-local-vale-a-pena-para-clinicas-medicas/', reason: 'Apoio BOFU de decisao.' }
    ],
    ctaPrimary: 'Solicitar diagnostico local em Curitiba',
    ctaSecondary: 'Falar com a AUDITSEO sobre clinicas em Curitiba',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/seo-para-clinicas-medicas/', '/servicos/google-meu-negocio-para-clinicas-medicas-em-curitiba/']
  },
  {
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-curitiba/',
    pageTitle: 'Google Meu Negocio para Clinicas Medicas em Curitiba',
    pageType: 'local-commercial',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas medicas de Curitiba que dependem de descoberta local, rota e comparacao rapida.',
    primaryKeyword: 'google meu negocio para clinicas medicas em curitiba',
    secondaryKeywords: ['google business profile para clinicas em curitiba', 'gbp para clinicas medicas em curitiba', 'maps para clinicas em curitiba'],
    dominantIntent: 'local',
    heroAngle: 'Fortalecer a descoberta de clinicas medicas em Curitiba por meio de Google Maps e Google Business Profile.',
    coreOffer: 'Estrutura, gestao e integracao de Google Meu Negocio com as paginas comerciais da clinica em Curitiba.',
    painPoints: [
      'Perfil local sem sinais suficientes de relevancia e conversao.',
      'Baixa consistencia entre perfil, site e especialidades.',
      'Perda de contatos locais em pesquisas de proximidade.',
      'Pouca geracao de ligacoes e rotas qualificadas.'
    ],
    proofAssets: ['Pagina de Google Meu Negocio', 'Pagina local de clinicas medicas em Curitiba', 'Artigo BOFU de GBP', 'Pagina institucional'],
    faqAngles: [
      'GBP sozinho resolve a descoberta local',
      'Qual a diferenca entre GBP e SEO local em Curitiba',
      'Quanto tempo leva para melhorar o perfil',
      'A pagina do site interfere no mapa'
    ],
    internalLinks: [
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', reason: 'Servico canonico principal.' },
      { label: 'SEO local para clinicas medicas em Curitiba', path: '/servicos/seo-local-para-clinicas-medicas-em-curitiba/', reason: 'Pagina complementar local.' },
      { label: 'Google Meu Negocio para clinicas medicas', path: '/blog/google-meu-negocio-para-clinicas-medicas/', reason: 'BOFU direto.' },
      { label: 'Curitiba', path: '/cidades/curitiba/', reason: 'Contexto geografico principal.' }
    ],
    ctaPrimary: 'Solicitar diagnostico de GBP em Curitiba',
    ctaSecondary: 'Entender a estrategia de Maps em Curitiba',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/google-meu-negocio/', '/blog/google-meu-negocio-para-clinicas-medicas/']
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-em-brasilia/',
    pageTitle: 'SEO Local para Clinicas Medicas em Brasilia',
    pageType: 'local-commercial',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas com atuacao em Brasilia e foco em novos pacientes por geografia.',
    primaryKeyword: 'seo local para clinicas medicas em brasilia',
    secondaryKeywords: ['seo para clinicas medicas em brasilia', 'agencia seo local para clinicas em brasilia', 'marketing no google para clinicas em brasilia'],
    dominantIntent: 'local',
    heroAngle: 'Captar mais pacientes em Brasilia com uma estrutura local orientada a descoberta, mapa e paginas comerciais.',
    coreOffer: 'Operacao de SEO local para clinicas medicas com foco em visibilidade organica, local pack e paginas comerciais em Brasilia.',
    painPoints: [
      'Baixa presenca em buscas geograficas dentro de Brasilia.',
      'Especialidades e pagina local sem integracao clara.',
      'Dependencia alta de indicacao ou midia paga.',
      'Site sem paginas com intencao local suficiente.'
    ],
    proofAssets: ['Pagina de Brasilia', 'Pagina de clinicas medicas', 'Artigos de SEO local para clinicas', 'Pagina de metodologia'],
    faqAngles: [
      'SEO local funciona para clinicas em Brasilia',
      'O que muda entre Brasilia e Sao Paulo na estrategia local',
      'Google Meu Negocio entra junto',
      'Que tipo de pagina uma clinica em Brasilia precisa'
    ],
    internalLinks: [
      { label: 'SEO para clinicas medicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Pagina setorial mae.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Servico canonico principal.' },
      { label: 'Brasilia', path: '/cidades/brasilia/', reason: 'Contexto geografico principal.' },
      { label: 'SEO local vale a pena para clinicas medicas', path: '/blog/seo-local-vale-a-pena-para-clinicas-medicas/', reason: 'Apoio BOFU de decisao.' }
    ],
    ctaPrimary: 'Solicitar diagnostico local em Brasilia',
    ctaSecondary: 'Falar com a AUDITSEO sobre clinicas em Brasilia',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/seo-para-clinicas-medicas/', '/servicos/google-meu-negocio-para-clinicas-medicas-em-brasilia/']
  },
  {
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-brasilia/',
    pageTitle: 'Google Meu Negocio para Clinicas Medicas em Brasilia',
    pageType: 'local-commercial',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas medicas de Brasilia que dependem de descoberta local, rota e comparacao rapida.',
    primaryKeyword: 'google meu negocio para clinicas medicas em brasilia',
    secondaryKeywords: ['google business profile para clinicas em brasilia', 'gbp para clinicas medicas em brasilia', 'maps para clinicas em brasilia'],
    dominantIntent: 'local',
    heroAngle: 'Fortalecer a descoberta de clinicas medicas em Brasilia por meio de Google Maps e Google Business Profile.',
    coreOffer: 'Estrutura, gestao e integracao de Google Meu Negocio com as paginas comerciais da clinica em Brasilia.',
    painPoints: [
      'Perfil local sem sinais suficientes de relevancia e conversao.',
      'Baixa consistencia entre perfil, site e especialidades.',
      'Perda de contatos locais em pesquisas de proximidade.',
      'Pouca geracao de ligacoes e rotas qualificadas.'
    ],
    proofAssets: ['Pagina de Google Meu Negocio', 'Pagina local de clinicas medicas em Brasilia', 'Artigo BOFU de GBP', 'Pagina institucional'],
    faqAngles: [
      'GBP sozinho resolve a descoberta local',
      'Qual a diferenca entre GBP e SEO local em Brasilia',
      'Quanto tempo leva para melhorar o perfil',
      'A pagina do site interfere no mapa'
    ],
    internalLinks: [
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/', reason: 'Servico canonico principal.' },
      { label: 'SEO local para clinicas medicas em Brasilia', path: '/servicos/seo-local-para-clinicas-medicas-em-brasilia/', reason: 'Pagina complementar local.' },
      { label: 'Google Meu Negocio para clinicas medicas', path: '/blog/google-meu-negocio-para-clinicas-medicas/', reason: 'BOFU direto.' },
      { label: 'Brasilia', path: '/cidades/brasilia/', reason: 'Contexto geografico principal.' }
    ],
    ctaPrimary: 'Solicitar diagnostico de GBP em Brasilia',
    ctaSecondary: 'Entender a estrategia de Maps em Brasilia',
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList'],
    avoidOverlapWith: ['/servicos/google-meu-negocio/', '/blog/google-meu-negocio-para-clinicas-medicas/']
  }
];

export const allCommercialBriefs = [
  ...saoPauloWaveOneCommercialBriefs,
  ...saoPauloWaveTwoCommercialBriefs,
  ...southeastExpansionWaveOneCommercialBriefs,
  ...curitibaBrasiliaCommercialBriefs
];
