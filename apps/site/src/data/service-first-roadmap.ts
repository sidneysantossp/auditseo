export type CommercialPageLevel = 'national' | 'local' | 'regional';

export interface CommercialRoadmapItem {
  priority: number;
  level: CommercialPageLevel;
  slug: string;
  pageTitle: string;
  canonicalService: string;
  targetAudience: string;
  primaryIntent: string;
  note: string;
}

export const serviceFirstCommercialRoadmap: CommercialRoadmapItem[] = [
  {
    priority: 1,
    level: 'national',
    slug: '/servicos/seo-para-clinicas-medicas/',
    pageTitle: 'SEO para Clinicas Medicas',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas',
    primaryIntent: 'Contratar SEO para captar pacientes e fortalecer descoberta no Google',
    note: 'Pagina comercial setorial mae para saude.'
  },
  {
    priority: 2,
    level: 'national',
    slug: '/servicos/seo-para-dermatologistas/',
    pageTitle: 'SEO para Dermatologistas',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Dermatologistas e clinicas dermatologicas',
    primaryIntent: 'Contratar SEO local e conteudo medico com foco em demanda qualificada',
    note: 'Vertical de saude com alta aderencia local.'
  },
  {
    priority: 3,
    level: 'national',
    slug: '/servicos/seo-para-odontologia/',
    pageTitle: 'SEO para Odontologia',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas odontologicas',
    primaryIntent: 'Contratar SEO para atrair pacientes pelo Google e Maps',
    note: 'Vertical prioritaria pelo potencial local e comercial.'
  },
  {
    priority: 4,
    level: 'national',
    slug: '/servicos/seo-para-cirurgia-plastica/',
    pageTitle: 'SEO para Cirurgia Plastica',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas e medicos de cirurgia plastica',
    primaryIntent: 'Contratar SEO para nicho medico altamente competitivo',
    note: 'Requer copy, prova e FAQs muito especificas.'
  },
  {
    priority: 5,
    level: 'national',
    slug: '/servicos/seo-para-ginecologia/',
    pageTitle: 'SEO para Ginecologia',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Ginecologistas e clinicas de saude feminina',
    primaryIntent: 'Contratar SEO local e autoridade medica para descoberta organica',
    note: 'Vertical complementar dentro de saude.'
  },
  {
    priority: 6,
    level: 'national',
    slug: '/servicos/seo-para-fisioterapia/',
    pageTitle: 'SEO para Fisioterapia',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas de fisioterapia',
    primaryIntent: 'Contratar SEO para captar pacientes e buscas locais',
    note: 'Boa aderencia a GBP e paginas locais.'
  },
  {
    priority: 7,
    level: 'national',
    slug: '/servicos/seo-para-escritorios-de-advocacia/',
    pageTitle: 'SEO para Escritorios de Advocacia',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Escritorios de advocacia',
    primaryIntent: 'Contratar SEO e estrategia de autoridade para juridico',
    note: 'Precisa respeitar o enquadramento do mercado juridico.'
  },
  {
    priority: 8,
    level: 'national',
    slug: '/servicos/consultoria-seo-para-energia-solar/',
    pageTitle: 'Consultoria SEO para Energia Solar',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Empresas de energia solar',
    primaryIntent: 'Contratar consultoria SEO B2B para demanda qualificada',
    note: 'Vertical B2B de ticket maior.'
  },
  {
    priority: 9,
    level: 'national',
    slug: '/servicos/consultoria-seo-para-software-b2b/',
    pageTitle: 'Consultoria SEO para Software B2B',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Empresas de software B2B',
    primaryIntent: 'Contratar consultoria SEO para captacao complexa e comparativa',
    note: 'Preparar terreno para software B2B.'
  },
  {
    priority: 10,
    level: 'national',
    slug: '/servicos/llm-brand-presence-para-empresas-b2b/',
    pageTitle: 'LLM Brand Presence para Empresas B2B',
    canonicalService: '/servicos/llm-brand-presence/',
    targetAudience: 'Empresas B2B com vendas consultivas',
    primaryIntent: 'Contratar presenca de marca para ChatGPT, Claude e IA generativa',
    note: 'Pagina setorial para descoberta assistida por IA.'
  },
  {
    priority: 11,
    level: 'local',
    slug: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/',
    pageTitle: 'SEO Local para Clinicas Medicas em Sao Paulo',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas em Sao Paulo',
    primaryIntent: 'Contratar SEO local para captar pacientes em Sao Paulo',
    note: 'Primeira pagina local critica de saude.'
  },
  {
    priority: 12,
    level: 'local',
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/',
    pageTitle: 'Google Meu Negocio para Clinicas Medicas em Sao Paulo',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas medicas em Sao Paulo',
    primaryIntent: 'Contratar gestao de GBP para aumentar descobertas e chamadas',
    note: 'Forte componente de Maps e local pack.'
  },
  {
    priority: 13,
    level: 'local',
    slug: '/servicos/seo-local-para-dermatologistas-em-sao-paulo/',
    pageTitle: 'SEO Local para Dermatologistas em Sao Paulo',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Dermatologistas em Sao Paulo',
    primaryIntent: 'Contratar SEO local para especialidade medica',
    note: 'Vertical com forte prova local.'
  },
  {
    priority: 14,
    level: 'local',
    slug: '/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/',
    pageTitle: 'Google Meu Negocio para Dermatologistas em Sao Paulo',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Dermatologistas em Sao Paulo',
    primaryIntent: 'Contratar gestao de perfil para maps e descoberta local',
    note: 'Complementa a pagina local de SEO.'
  },
  {
    priority: 15,
    level: 'local',
    slug: '/servicos/seo-local-para-odontologia-em-campinas/',
    pageTitle: 'SEO Local para Odontologia em Campinas',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas odontologicas em Campinas',
    primaryIntent: 'Contratar SEO local para odontologia em Campinas',
    note: 'Abre a frente local de Campinas.'
  },
  {
    priority: 16,
    level: 'local',
    slug: '/servicos/google-meu-negocio-para-odontologia-em-campinas/',
    pageTitle: 'Google Meu Negocio para Odontologia em Campinas',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas odontologicas em Campinas',
    primaryIntent: 'Contratar GBP para odontologia em Campinas',
    note: 'Par comercial da pagina local odontologica.'
  },
  {
    priority: 17,
    level: 'local',
    slug: '/servicos/seo-local-para-clinicas-medicas-em-barueri/',
    pageTitle: 'SEO Local para Clinicas Medicas em Barueri',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas em Barueri',
    primaryIntent: 'Contratar SEO local para demanda da Grande Sao Paulo',
    note: 'Cidade forte para decisor corporativo e saude.'
  },
  {
    priority: 18,
    level: 'local',
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-barueri/',
    pageTitle: 'Google Meu Negocio para Clinicas Medicas em Barueri',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas medicas em Barueri',
    primaryIntent: 'Contratar GBP para clinicas em Barueri',
    note: 'Foco em descoberta local imediata.'
  },
  {
    priority: 19,
    level: 'local',
    slug: '/servicos/seo-local-para-clinicas-medicas-em-sao-jose-dos-campos/',
    pageTitle: 'SEO Local para Clinicas Medicas em Sao Jose dos Campos',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas em Sao Jose dos Campos',
    primaryIntent: 'Contratar SEO local para clinicas no Vale do Paraiba',
    note: 'Expansao local com cidade de maior porte.'
  },
  {
    priority: 20,
    level: 'local',
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-jose-dos-campos/',
    pageTitle: 'Google Meu Negocio para Clinicas Medicas em Sao Jose dos Campos',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas medicas em Sao Jose dos Campos',
    primaryIntent: 'Contratar GBP para clinicas no Vale do Paraiba',
    note: 'Pair local para clinicas medicas.'
  },
  {
    priority: 21,
    level: 'local',
    slug: '/servicos/consultoria-seo-para-energia-solar-em-sao-paulo/',
    pageTitle: 'Consultoria SEO para Energia Solar em Sao Paulo',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Empresas de energia solar em Sao Paulo',
    primaryIntent: 'Contratar consultoria SEO B2B com componente regional forte',
    note: 'Vertical B2B de alta prioridade comercial.'
  },
  {
    priority: 22,
    level: 'local',
    slug: '/servicos/seo-para-escritorios-de-advocacia-em-sao-paulo/',
    pageTitle: 'SEO para Escritorios de Advocacia em Sao Paulo',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Escritorios de advocacia em Sao Paulo',
    primaryIntent: 'Contratar SEO para juridico em mercado altamente competitivo',
    note: 'Pagina local setorial do juridico.'
  },
  {
    priority: 23,
    level: 'local',
    slug: '/servicos/llm-brand-presence-para-escritorios-de-advocacia-em-sao-paulo/',
    pageTitle: 'LLM Brand Presence para Escritorios de Advocacia em Sao Paulo',
    canonicalService: '/servicos/llm-brand-presence/',
    targetAudience: 'Escritorios de advocacia em Sao Paulo',
    primaryIntent: 'Contratar visibilidade de marca em IA para juridico',
    note: 'Pagina comercial diferenciada de IA aplicada ao juridico.'
  },
  {
    priority: 24,
    level: 'local',
    slug: '/servicos/consultoria-seo-para-software-b2b-em-sao-paulo/',
    pageTitle: 'Consultoria SEO para Software B2B em Sao Paulo',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Empresas de software B2B em Sao Paulo',
    primaryIntent: 'Contratar consultoria SEO para mercado SaaS/B2B',
    note: 'Pagina local para frente futura de software.'
  },
  {
    priority: 25,
    level: 'regional',
    slug: '/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/',
    pageTitle: 'SEO Local para Clinicas Medicas na Grande Sao Paulo',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas medicas na Grande Sao Paulo',
    primaryIntent: 'Contratar SEO local em regiao metropolitana',
    note: 'So entra depois de Sao Paulo e Barueri estarem fortes.'
  },
  {
    priority: 26,
    level: 'regional',
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-na-grande-sao-paulo/',
    pageTitle: 'Google Meu Negocio para Clinicas Medicas na Grande Sao Paulo',
    canonicalService: '/servicos/google-meu-negocio/',
    targetAudience: 'Clinicas medicas na Grande Sao Paulo',
    primaryIntent: 'Contratar GBP em recorte regional',
    note: 'Nao deve entrar antes do lastro local.'
  },
  {
    priority: 27,
    level: 'regional',
    slug: '/servicos/seo-para-odontologia-em-campinas-e-regiao/',
    pageTitle: 'SEO para Odontologia em Campinas e Regiao',
    canonicalService: '/servicos/seo-local/',
    targetAudience: 'Clinicas odontologicas em Campinas e regiao',
    primaryIntent: 'Contratar SEO em recorte regional especifico',
    note: 'Regiao comercialmente reconhecivel.'
  },
  {
    priority: 28,
    level: 'regional',
    slug: '/servicos/consultoria-seo-para-empresas-no-interior-de-sao-paulo/',
    pageTitle: 'Consultoria SEO para Empresas no Interior de Sao Paulo',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Empresas do interior de Sao Paulo',
    primaryIntent: 'Contratar consultoria SEO com recorte regional',
    note: 'Abre mercado amplo, mas so depois de cidades-chave.'
  },
  {
    priority: 29,
    level: 'regional',
    slug: '/servicos/seo-para-escritorios-de-advocacia-na-grande-sao-paulo/',
    pageTitle: 'SEO para Escritorios de Advocacia na Grande Sao Paulo',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Escritorios de advocacia na Grande Sao Paulo',
    primaryIntent: 'Contratar SEO setorial em recorte metropolitano',
    note: 'Pagina regional setorial com alto criterio.'
  },
  {
    priority: 30,
    level: 'regional',
    slug: '/servicos/consultoria-seo-para-energia-solar-no-interior-de-sao-paulo/',
    pageTitle: 'Consultoria SEO para Energia Solar no Interior de Sao Paulo',
    canonicalService: '/servicos/consultoria-seo/',
    targetAudience: 'Empresas de energia solar no interior de Sao Paulo',
    primaryIntent: 'Contratar consultoria SEO B2B em recorte regional',
    note: 'Regiao so deve entrar com prova comercial e copy propria.'
  }
];
