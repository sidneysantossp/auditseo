export type SaoPauloWavePageType = 'sectoral-anchor' | 'local-commercial' | 'regional-bridge';

export interface SaoPauloCommercialWaveItem {
  order: number;
  slug: string;
  pageTitle: string;
  pageType: SaoPauloWavePageType;
  segment: 'clinicas-medicas' | 'dermatologistas' | 'odontologia';
  geography: 'national-anchor' | 'sao-paulo-capital' | 'grande-sao-paulo' | 'campinas' | 'sao-jose-dos-campos';
  canonicalService: string;
  primaryIntent: string;
  businessRole: string;
  releaseBatch: 'A' | 'B' | 'C';
  supportArticles: string[];
}

export const saoPauloCommercialWaveOne: SaoPauloCommercialWaveItem[] = [
  {
    order: 1,
    slug: '/servicos/seo-para-clinicas-medicas/',
    pageTitle: 'SEO para Clinicas Medicas',
    pageType: 'sectoral-anchor',
    segment: 'clinicas-medicas',
    geography: 'national-anchor',
    canonicalService: '/servicos/seo-local/',
    primaryIntent: 'Contratar SEO para clinicas medicas com foco em descoberta organica e captacao de pacientes.',
    businessRole: 'Pagina mae da vertical de saude para sustentar as derivacoes locais de Sao Paulo.',
    releaseBatch: 'A',
    supportArticles: [
      '/blog/quanto-custa-seo-para-clinicas-medicas/',
      '/blog/agencia-seo-para-clinicas-medicas-como-escolher/'
    ]
  },
  {
    order: 2,
    slug: '/servicos/seo-para-dermatologistas/',
    pageTitle: 'SEO para Dermatologistas',
    pageType: 'sectoral-anchor',
    segment: 'dermatologistas',
    geography: 'national-anchor',
    canonicalService: '/servicos/seo-local/',
    primaryIntent: 'Contratar SEO especializado para dermatologistas em mercado local de alta competencia.',
    businessRole: 'Abre a especialidade medica premium sem depender ainda de muitas geografias.',
    releaseBatch: 'A',
    supportArticles: ['/blog/seo-para-dermatologistas-vale-a-pena/', '/blog/google-meu-negocio-para-dermatologistas/']
  },
  {
    order: 3,
    slug: '/servicos/seo-para-odontologia/',
    pageTitle: 'SEO para Odontologia',
    pageType: 'sectoral-anchor',
    segment: 'odontologia',
    geography: 'national-anchor',
    canonicalService: '/servicos/seo-local/',
    primaryIntent: 'Contratar SEO para odontologia com foco em Google e Maps.',
    businessRole: 'Cria a base setorial para odontologia antes da expansao local.',
    releaseBatch: 'A',
    supportArticles: ['/blog/seo-para-odontologia-como-funciona/', '/blog/google-meu-negocio-para-odontologia/']
  },
  {
    order: 4,
    slug: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/',
    pageTitle: 'SEO Local para Clinicas Medicas em Sao Paulo',
    pageType: 'local-commercial',
    segment: 'clinicas-medicas',
    geography: 'sao-paulo-capital',
    canonicalService: '/servicos/seo-local/',
    primaryIntent: 'Contratar SEO local para clinicas medicas na cidade de Sao Paulo.',
    businessRole: 'Principal money page local da Onda 1.',
    releaseBatch: 'B',
    supportArticles: ['/blog/seo-local-vale-a-pena-para-clinicas-medicas/', '/blog/google-meu-negocio-para-clinicas-medicas/']
  },
  {
    order: 5,
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/',
    pageTitle: 'Google Meu Negocio para Clinicas Medicas em Sao Paulo',
    pageType: 'local-commercial',
    segment: 'clinicas-medicas',
    geography: 'sao-paulo-capital',
    canonicalService: '/servicos/google-meu-negocio/',
    primaryIntent: 'Contratar gestao de Google Business Profile para clinicas medicas em Sao Paulo.',
    businessRole: 'Captura a demanda mais proxima de Maps, ligacao e rota.',
    releaseBatch: 'B',
    supportArticles: ['/blog/google-meu-negocio-para-clinicas-medicas/', '/blog/quanto-custa-seo-para-clinicas-medicas/']
  },
  {
    order: 6,
    slug: '/servicos/seo-local-para-dermatologistas-em-sao-paulo/',
    pageTitle: 'SEO Local para Dermatologistas em Sao Paulo',
    pageType: 'local-commercial',
    segment: 'dermatologistas',
    geography: 'sao-paulo-capital',
    canonicalService: '/servicos/seo-local/',
    primaryIntent: 'Contratar SEO local para dermatologistas em Sao Paulo.',
    businessRole: 'Converte a especialidade premium em intencao geografica direta.',
    releaseBatch: 'B',
    supportArticles: ['/blog/seo-para-dermatologistas-vale-a-pena/', '/blog/google-meu-negocio-para-dermatologistas/']
  },
  {
    order: 7,
    slug: '/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/',
    pageTitle: 'Google Meu Negocio para Dermatologistas em Sao Paulo',
    pageType: 'local-commercial',
    segment: 'dermatologistas',
    geography: 'sao-paulo-capital',
    canonicalService: '/servicos/google-meu-negocio/',
    primaryIntent: 'Contratar GBP para aumentar descoberta local de dermatologistas em Sao Paulo.',
    businessRole: 'Complementa a pagina de SEO local com foco total em local pack.',
    releaseBatch: 'B',
    supportArticles: ['/blog/google-meu-negocio-para-dermatologistas/', '/blog/seo-para-dermatologistas-vale-a-pena/']
  },
  {
    order: 8,
    slug: '/servicos/seo-local-para-odontologia-em-sao-paulo/',
    pageTitle: 'SEO Local para Odontologia em Sao Paulo',
    pageType: 'local-commercial',
    segment: 'odontologia',
    geography: 'sao-paulo-capital',
    canonicalService: '/servicos/seo-local/',
    primaryIntent: 'Contratar SEO local para clinicas odontologicas em Sao Paulo.',
    businessRole: 'Abre a terceira vertical com alto potencial local.',
    releaseBatch: 'B',
    supportArticles: ['/blog/seo-para-odontologia-como-funciona/', '/blog/google-meu-negocio-para-odontologia/']
  },
  {
    order: 9,
    slug: '/servicos/google-meu-negocio-para-odontologia-em-sao-paulo/',
    pageTitle: 'Google Meu Negocio para Odontologia em Sao Paulo',
    pageType: 'local-commercial',
    segment: 'odontologia',
    geography: 'sao-paulo-capital',
    canonicalService: '/servicos/google-meu-negocio/',
    primaryIntent: 'Contratar Google Meu Negocio para odontologia em Sao Paulo.',
    businessRole: 'Reforca a presenca em Maps para consultas de alta urgencia.',
    releaseBatch: 'B',
    supportArticles: ['/blog/google-meu-negocio-para-odontologia/', '/blog/seo-para-odontologia-como-funciona/']
  },
  {
    order: 10,
    slug: '/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/',
    pageTitle: 'SEO Local para Clinicas Medicas na Grande Sao Paulo',
    pageType: 'regional-bridge',
    segment: 'clinicas-medicas',
    geography: 'grande-sao-paulo',
    canonicalService: '/servicos/seo-local/',
    primaryIntent: 'Contratar SEO local para clinicas com atuacao na Regiao Metropolitana de Sao Paulo.',
    businessRole: 'Ponte regional para buscas metropolitanas sem competir com a capital.',
    releaseBatch: 'C',
    supportArticles: ['/blog/seo-local-vale-a-pena-para-clinicas-medicas/', '/blog/agencia-seo-para-clinicas-medicas-como-escolher/']
  },
  {
    order: 11,
    slug: '/servicos/seo-local-para-clinicas-medicas-em-campinas/',
    pageTitle: 'SEO Local para Clinicas Medicas em Campinas',
    pageType: 'local-commercial',
    segment: 'clinicas-medicas',
    geography: 'campinas',
    canonicalService: '/servicos/seo-local/',
    primaryIntent: 'Contratar SEO local para clinicas medicas em Campinas.',
    businessRole: 'Primeiro polo do interior paulista na expansao da vertical de saude.',
    releaseBatch: 'C',
    supportArticles: ['/blog/quanto-custa-seo-para-clinicas-medicas/', '/blog/google-meu-negocio-para-clinicas-medicas/']
  },
  {
    order: 12,
    slug: '/servicos/seo-local-para-clinicas-medicas-em-sao-jose-dos-campos/',
    pageTitle: 'SEO Local para Clinicas Medicas em Sao Jose dos Campos',
    pageType: 'local-commercial',
    segment: 'clinicas-medicas',
    geography: 'sao-jose-dos-campos',
    canonicalService: '/servicos/seo-local/',
    primaryIntent: 'Contratar SEO local para clinicas medicas em Sao Jose dos Campos.',
    businessRole: 'Segundo polo oficial de expansao no Estado de Sao Paulo.',
    releaseBatch: 'C',
    supportArticles: ['/blog/seo-local-vale-a-pena-para-clinicas-medicas/', '/blog/agencia-seo-para-clinicas-medicas-como-escolher/']
  }
];
