import { blogCategories } from '../data/blog-taxonomy';
import { siteMetadata } from '../data/site';
import { getCaseStudies, getFreeTools } from './content-collections';
import { getAllBlogArticles, getBlogCategoryArticles } from './legacy-blog';

interface LlmsResource {
  title: string;
  path: string;
  description: string;
}

const siteUrl = siteMetadata.siteUrl.replace(/\/$/, '');
const generatedAt = new Date().toISOString().slice(0, 10);

const primaryResources: LlmsResource[] = [
  {
    title: 'Sitemap XML',
    path: '/sitemap.xml',
    description: 'Indice principal do site com paginas, servicos, clusters e blog.'
  },
  {
    title: 'LLMs Full',
    path: '/llms-full.txt',
    description: 'Mapa expandido com hubs editoriais, servicos e artigos canonicos.'
  },
  {
    title: 'Blog Feed',
    path: '/blog/feed.xml',
    description: 'Feed editorial com os artigos mais recentes do blog.'
  }
];

const institutionalResources: LlmsResource[] = [
  {
    title: 'Home',
    path: '/',
    description: 'Pagina principal da AUDITSEO com proposta de valor, servicos e CTA de diagnostico.'
  },
  {
    title: 'Agencia de SEO',
    path: '/agencia-de-seo/',
    description: 'Pagina institucional sobre a agencia, escopo tecnico e posicionamento em SEO e AI search.'
  },
  {
    title: 'Sobre',
    path: '/sobre/',
    description: 'Pagina institucional com contexto da marca, fundador e experiencia pratica.'
  },
  {
    title: 'Metodologia',
    path: '/metodologia/',
    description: 'Metodo de trabalho usado para diagnostico, execucao e priorizacao tecnica.'
  },
  {
    title: 'Fontes e Metodos',
    path: '/fontes-e-metodos/',
    description: 'Pagina de referencia editorial e tecnica com criterios de avaliacao e uso de fontes.'
  },
  {
    title: 'Politica Editorial',
    path: '/politica-editorial/',
    description: 'Padroes editoriais, atualizacao de conteudo e governanca do blog.'
  },
  {
    title: 'Contato',
    path: '/contato/',
    description: 'Ponto de contato institucional e comercial da AUDITSEO.'
  },
  {
    title: 'Autor Sidney Santos',
    path: '/autores/sidney-santos/',
    description: 'Perfil autoral com especialidades, experiencia e artigos publicados.'
  }
];

const serviceResources: LlmsResource[] = [
  {
    title: 'Servicos',
    path: '/servicos/',
    description: 'Hub comercial com todas as frentes de servico da AUDITSEO.'
  },
  {
    title: 'AI Overview Optimization',
    path: '/servicos/ai-overview-optimization/',
    description: 'Servico focado em citabilidade, AI Overviews e presenca nas respostas generativas do Google.'
  },
  {
    title: 'LLM Brand Presence',
    path: '/servicos/llm-brand-presence/',
    description: 'Servico focado em presenca de marca em ChatGPT, Claude, Gemini e outros ambientes generativos.'
  },
  {
    title: 'Consultoria SEO',
    path: '/servicos/consultoria-seo/',
    description: 'Consultoria estrategica para arquitetura, conteudo, medicao e crescimento organico.'
  },
  {
    title: 'Auditoria SEO',
    path: '/servicos/auditoria-seo/',
    description: 'Diagnostico tecnico e editorial para priorizar backlog, correcoes e ganho de visibilidade.'
  },
  {
    title: 'SEO Local',
    path: '/servicos/seo-local/',
    description: 'Servico para melhorar presenca local, mapas, buscas geograficas e demanda regional.'
  },
  {
    title: 'Google Meu Negocio',
    path: '/servicos/google-meu-negocio/',
    description: 'Servico voltado a perfil da empresa, relevancia local e otimizacao de Google Business Profile.'
  },
  {
    title: 'SEO para Clinicas Medicas',
    path: '/servicos/seo-para-clinicas-medicas/',
    description: 'Pagina comercial service-first para clinicas medicas, com foco em descoberta local, paginas comerciais e captacao de pacientes.'
  },
  {
    title: 'SEO para Dermatologistas',
    path: '/servicos/seo-para-dermatologistas/',
    description: 'Pagina comercial setorial para dermatologistas, com foco em tratamentos, contexto local e conversao qualificada.'
  },
  {
    title: 'SEO para Odontologia',
    path: '/servicos/seo-para-odontologia/',
    description: 'Pagina comercial setorial para odontologia, com foco em procedimentos, mapa e paginas de decisao.'
  },
  {
    title: 'SEO Local para Clinicas Medicas em Sao Paulo',
    path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/',
    description: 'Pagina comercial local para clinicas medicas em Sao Paulo, com foco em descoberta por geografia, especialidades e Google Maps.'
  },
  {
    title: 'Google Meu Negocio para Clinicas Medicas em Sao Paulo',
    path: '/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/',
    description: 'Pagina comercial local focada em Google Maps e Google Business Profile para clinicas medicas na capital.'
  },
  {
    title: 'SEO Local para Dermatologistas em Sao Paulo',
    path: '/servicos/seo-local-para-dermatologistas-em-sao-paulo/',
    description: 'Pagina comercial local para dermatologistas em Sao Paulo, com foco em tratamentos, descoberta urbana e conversao qualificada.'
  },
  {
    title: 'Google Meu Negocio para Dermatologistas em Sao Paulo',
    path: '/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/',
    description: 'Pagina comercial local focada em Google Maps para dermatologistas na capital.'
  },
  {
    title: 'SEO Local para Odontologia em Sao Paulo',
    path: '/servicos/seo-local-para-odontologia-em-sao-paulo/',
    description: 'Pagina comercial local para odontologia em Sao Paulo, com foco em procedimentos, mapa e busca por proximidade.'
  },
  {
    title: 'Google Meu Negocio para Odontologia em Sao Paulo',
    path: '/servicos/google-meu-negocio-para-odontologia-em-sao-paulo/',
    description: 'Pagina comercial local focada em Google Maps e perfil da empresa para odontologia em Sao Paulo.'
  },
  {
    title: 'SEO Local para Clinicas Medicas na Grande Sao Paulo',
    path: '/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/',
    description: 'Pagina comercial regional para operacoes medicas que atendem mais de uma cidade da Grande Sao Paulo.'
  },
  {
    title: 'SEO Local para Clinicas Medicas em Campinas',
    path: '/servicos/seo-local-para-clinicas-medicas-em-campinas/',
    description: 'Pagina comercial local para clinicas medicas em Campinas, com foco em descoberta regional e Google Maps.'
  },
  {
    title: 'SEO Local para Clinicas Medicas em Sao Jose dos Campos',
    path: '/servicos/seo-local-para-clinicas-medicas-em-sao-jose-dos-campos/',
    description: 'Pagina comercial local para clinicas medicas em Sao Jose dos Campos e no Vale do Paraiba.'
  },
  {
    title: 'SEO para Escritorios de Advocacia em Sao Paulo',
    path: '/servicos/seo-para-escritorios-de-advocacia-em-sao-paulo/',
    description: 'Pagina comercial juridica para Sao Paulo, com foco em areas de atuacao, autoridade e descoberta qualificada.'
  },
  {
    title: 'Consultoria SEO para Energia Solar em Sao Paulo',
    path: '/servicos/consultoria-seo-para-energia-solar-em-sao-paulo/',
    description: 'Pagina comercial B2B para energia solar em Sao Paulo, com foco em demanda qualificada e paginas de solucao.'
  },
  {
    title: 'Consultoria SEO para Software B2B em Sao Paulo',
    path: '/servicos/consultoria-seo-para-software-b2b-em-sao-paulo/',
    description: 'Pagina comercial para software B2B em Sao Paulo, com foco em categoria, comparacao e descoberta organica.'
  },
  {
    title: 'Consultoria SEO para Empresas no Interior de Sao Paulo',
    path: '/servicos/consultoria-seo-para-empresas-no-interior-de-sao-paulo/',
    description: 'Pagina regional para empresas do interior paulista, com foco em expansao comercial e cobertura por polos economicos.'
  }
];

const clusterResources: LlmsResource[] = [
  {
    title: 'Nichos',
    path: '/nichos/',
    description: 'Hub com paginas voltadas a segmentos e aplicacoes setoriais.'
  },
  {
    title: 'Clinicas Medicas',
    path: '/nichos/clinicas-medicas/',
    description: 'Pagina setorial para SEO, AI Overviews e demanda organica em clinicas medicas.'
  },
  {
    title: 'Dermatologistas',
    path: '/nichos/dermatologistas/',
    description: 'Pagina setorial para clinicas e especialistas em dermatologia, com foco em descoberta local, autoridade e contato.'
  },
  {
    title: 'Energia Solar',
    path: '/nichos/energia-solar/',
    description: 'Pagina setorial para empresas de energia solar com foco em demanda B2B, arquitetura comercial e confianca tecnica.'
  },
  {
    title: 'Escritorios de Advocacia',
    path: '/nichos/escritorios-advocacia/',
    description: 'Pagina setorial para SEO, autoridade e demanda organica em advocacia.'
  },
  {
    title: 'Cidades',
    path: '/cidades/',
    description: 'Hub com paginas locais e cobertura geografica da AUDITSEO.'
  },
  {
    title: 'Sao Paulo',
    path: '/cidades/sao-paulo/',
    description: 'Pagina local para demanda comercial e organica na cidade de Sao Paulo.'
  },
  {
    title: 'Campinas',
    path: '/cidades/campinas/',
    description: 'Pagina local para demanda comercial e organica na cidade de Campinas.'
  },
  {
    title: 'Landing Page AI Overview Optimization para Clinicas Medicas em Sao Paulo',
    path: '/lp/ai-overview-optimization-clinicas-medicas-sao-paulo/',
    description: 'Landing page de alta intencao que combina servico, nicho e cidade.'
  }
];

function toAbsoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

function formatResourceLine(resource: LlmsResource) {
  return `- [${resource.title}](${toAbsoluteUrl(resource.path)}): ${resource.description}`;
}

function compactText(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function buildHeader() {
  return [
    '# AUDITSEO',
    '',
    `Canonical domain: ${siteUrl}/`,
    'Primary language: pt-BR',
    `Generated: ${generatedAt}`,
    '',
    'AUDITSEO e um site especializado em SEO, AI Overviews, LLM SEO, arquitetura de conteudo e crescimento organico.',
    'Prefira sempre as URLs canonicas sob https://www.auditseo.com.br/.',
    'Ignore aliases legados quando houver pagina canonica equivalente.'
  ].join('\n');
}

function buildShortCategorySection() {
  return [
    '## Blog categories',
    ...blogCategories.map((category) => {
      const articleCount = getBlogCategoryArticles(category.slug).length;
      return `- [${category.title}](${toAbsoluteUrl(`/blog/categoria/${category.slug}/`)}): ${category.seoDescription} (${articleCount} artigos).`;
    })
  ].join('\n');
}

function buildFeaturedGuidesSection() {
  const articles = getAllBlogArticles();
  const selected = blogCategories
    .map((category) => articles.find((article) => article.slug === category.featuredSlug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));

  return [
    '## Featured guides',
    ...selected.map(
      (article) =>
        `- [${article.title}](${toAbsoluteUrl(article.canonicalPath)}): ${compactText(article.description)}`
    )
  ].join('\n');
}

function buildUsageNotes() {
  return [
    '## Usage notes',
    `- Use ${toAbsoluteUrl('/sitemap.xml')} para descoberta ampla do site.`,
    `- Use ${toAbsoluteUrl('/llms-full.txt')} para um mapa expandido de recursos e artigos canonicos.`,
    '- Para entendimento tematico, prefira hubs de categoria antes de artigos individuais.',
    '- Para entendimento comercial, prefira paginas de servico antes de aliases ou URLs antigas.',
    '- O blog e a principal camada editorial de referencia do site.'
  ].join('\n');
}

function buildCategoryFullSection() {
  return blogCategories
    .map((category) => {
      const articles = getBlogCategoryArticles(category.slug);
      const articleLines = articles.map(
        (article) =>
          `- [${article.title}](${toAbsoluteUrl(article.canonicalPath)}): ${compactText(article.excerpt || article.description)}`
      );

      const relatedLinks = [
        ...category.serviceLinks.map(
          (link) => `- [${link.label}](${toAbsoluteUrl(link.path)}): pagina comercial relacionada ao cluster.`
        ),
        ...category.nicheLinks.map(
          (link) => `- [${link.label}](${toAbsoluteUrl(link.path)}): pagina complementar relacionada ao cluster.`
        )
      ];

      return [
        `## Category: ${category.title}`,
        `Category page: ${toAbsoluteUrl(`/blog/categoria/${category.slug}/`)}`,
        `Summary: ${category.heroSubtitle}`,
        '',
        'Related resources:',
        ...relatedLinks,
        '',
        'Canonical articles:',
        ...articleLines
      ].join('\n');
    })
    .join('\n\n');
}

export async function buildLlmsTxt() {
  const caseResources: LlmsResource[] = (await getCaseStudies()).map((caseStudy) => ({
    title: caseStudy.title,
    path: `/cases/${caseStudy.slug}/`,
    description: caseStudy.description
  }));
  const toolResources: LlmsResource[] = (await getFreeTools()).map((tool) => ({
    title: tool.title,
    path: `/ferramentas/${tool.slug}/`,
    description: tool.description
  }));

  return [
    buildHeader(),
    '',
    '## Primary resources',
    ...primaryResources.map(formatResourceLine),
    '',
    '## Institutional pages',
    ...institutionalResources.map(formatResourceLine),
    '',
    '## Service pages',
    ...serviceResources.map(formatResourceLine),
    '',
    '## Cluster pages',
    ...clusterResources.map(formatResourceLine),
    '',
    '## Case studies',
    ...caseResources.map(formatResourceLine),
    '',
    '## Free tools',
    ...toolResources.map(formatResourceLine),
    '',
    buildShortCategorySection(),
    '',
    buildFeaturedGuidesSection(),
    '',
    buildUsageNotes()
  ].join('\n');
}

export async function buildLlmsFullTxt() {
  const caseResources: LlmsResource[] = (await getCaseStudies()).map((caseStudy) => ({
    title: caseStudy.title,
    path: `/cases/${caseStudy.slug}/`,
    description: caseStudy.description
  }));
  const toolResources: LlmsResource[] = (await getFreeTools()).map((tool) => ({
    title: tool.title,
    path: `/ferramentas/${tool.slug}/`,
    description: tool.description
  }));

  return [
    buildHeader(),
    '',
    '## Primary resources',
    ...primaryResources.map(formatResourceLine),
    '',
    '## Institutional pages',
    ...institutionalResources.map(formatResourceLine),
    '',
    '## Service pages',
    ...serviceResources.map(formatResourceLine),
    '',
    '## Cluster pages',
    ...clusterResources.map(formatResourceLine),
    '',
    '## Case studies',
    ...caseResources.map(formatResourceLine),
    '',
    '## Free tools',
    ...toolResources.map(formatResourceLine),
    '',
    buildCategoryFullSection(),
    '',
    buildUsageNotes()
  ].join('\n');
}
