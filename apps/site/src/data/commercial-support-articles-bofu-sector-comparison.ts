import type { CommercialSupportArticleSource } from './commercial-support-articles';

type SectorComparisonConfig = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  subtitle: string;
  badge: string;
  imagePath: string;
  sectorLabel: string;
  sectorLower: string;
  comparisonLabel: string;
  comparisonLower: string;
  sectorPath: string;
  canonicalPath: string;
  cityPath: string;
  keywords: string[];
};

function createComparisonArticle(config: SectorComparisonConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'estrategia',
    imagePath: config.imagePath,
    publishedTime: '2026-03-07T23:30:00-03:00',
    modifiedTime: '2026-03-07T23:30:00-03:00',
    readingTime: 8,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: `Quando ${config.comparisonLower} tende a parecer suficiente`,
        paragraphs: [
          `${config.comparisonLabel} tende a parecer suficiente quando a operação ainda encontra resultado razoável no curto prazo e não sente tanta pressão por previsibilidade orgânica.`,
          `O problema é que ${config.comparisonLower} raramente constrói sozinha uma base de descoberta própria para ${config.sectorLower}.`
        ]
      },
      {
        title: `O que SEO acrescenta em ${config.sectorLower}`,
        paragraphs: [
          `SEO acrescenta estrutura comercial, páginas com função clara e um sistema mais estável de descoberta para ${config.sectorLower}.`,
          'Ele não substitui automaticamente outros canais, mas reduz dependência excessiva e melhora a qualidade da demanda ao longo do tempo.'
        ],
        bullets: [
          'Páginas mais fortes para intenção de contratação',
          'Base de descoberta menos volátil',
          'Melhor leitura da jornada comercial',
          'Apoio editorial para comparação e objeção'
        ]
      },
      {
        title: `Quando os dois devem conviver`,
        paragraphs: [
          `Na maior parte dos cenários, SEO e ${config.comparisonLower} devem conviver por um tempo. Um tende a sustentar urgência ou relacionamento; o outro constrói ativo de aquisição mais previsível.`,
          'A decisão madura não pergunta qual canal “vence”, e sim qual papel cada um deve cumprir no estágio atual do negócio.'
        ]
      },
      {
        title: 'Como decidir com mais rigor',
        paragraphs: [
          `Se a operação ainda depende demais de ${config.comparisonLower} e quer reduzir fragilidade comercial, SEO tende a ganhar prioridade.`,
          `Se a urgência de curto prazo domina completamente a decisão, ${config.comparisonLower} pode continuar relevante, mas o ideal é não adiar demais a construção orgânica.`
        ]
      }
    ],
    faqItems: [
      {
        question: `${config.title} é uma escolha entre um e outro?`,
        answer: 'Na maioria dos casos, não. O ponto correto é decidir qual papel cada frente cumpre na aquisição.'
      },
      {
        question: `${config.comparisonLabel} resolve tudo sozinha?`,
        answer: `Normalmente não. ${config.comparisonLabel} pode sustentar parte da geração de demanda, mas tende a deixar a operação mais dependente de um único motor.`
      },
      {
        question: `SEO demora demais para ${config.sectorLower}?`,
        answer: 'Depende da base atual. Em operações bem estruturadas, ele costuma ganhar tração mais rápido do que parece quando as páginas certas entram primeiro.'
      },
      {
        question: 'Quando a combinação faz mais sentido?',
        answer: 'Quando a empresa quer manter alguma urgência de captação, mas já entende que precisa construir ativo próprio de descoberta.'
      },
      {
        question: 'Qual é o melhor próximo passo?',
        answer: `Revisar a página comercial principal de ${config.sectorLower} e decidir como SEO e ${config.comparisonLower} devem coexistir na estratégia.`
      }
    ],
    resourceLinks: [
      { label: 'Serviço canônico', path: config.canonicalPath },
      { label: 'Página comercial da vertical', path: config.sectorPath },
      { label: 'Praça principal', path: config.cityPath }
    ],
    ctaTitle: `QUER DECIDIR COMO ${config.sectorLabel.toUpperCase()} DEVE COMBINAR SEO E ${config.comparisonLabel.toUpperCase()}?`,
    ctaCopy:
      'Se a operação quer parar de depender de comparação rasa entre canais, o próximo passo é revisar o papel que cada frente deve cumprir na aquisição.',
    ctaPath: config.sectorPath,
    ctaLabel: 'Ver a página comercial da vertical'
  };
}

export const commercialSupportArticlesBofuSectorComparison: CommercialSupportArticleSource[] = [
  createComparisonArticle({
    slug: 'seo-para-escritorios-de-advocacia-ou-indicacao',
    title: 'SEO para Escritórios de Advocacia ou Indicação?',
    seoTitle: 'SEO para Escritórios de Advocacia ou Indicação? | AUDITSEO',
    description:
      'Compare SEO e indicação para escritórios de advocacia e veja quando a operação precisa parar de depender só de relacionamento para gerar oportunidades.',
    excerpt:
      'Indicação continua forte no jurídico, mas depender apenas dela costuma limitar previsibilidade. SEO entra para transformar busca qualificada em novo motor de descoberta.',
    subtitle:
      'No jurídico, a escolha madura não é abandonar indicação. É decidir quando ela deixa de ser suficiente como principal motor de aquisição.',
    badge: 'Jurídico e Aquisição',
    imagePath: '/images/agencia-de-seo.png',
    sectorLabel: 'escritórios de advocacia',
    sectorLower: 'escritórios de advocacia',
    comparisonLabel: 'Indicação',
    comparisonLower: 'indicação',
    sectorPath: '/servicos/seo-para-escritorios-de-advocacia-em-sao-paulo/',
    canonicalPath: '/servicos/consultoria-seo/',
    cityPath: '/cidades/sao-paulo/',
    keywords: [
      'seo para escritorios de advocacia ou indicacao',
      'advocacia seo ou indicacao',
      'escritorio de advocacia depende de indicacao',
      'seo para advogados ou indicacao'
    ]
  }),
  createComparisonArticle({
    slug: 'seo-para-energia-solar-ou-midia-paga',
    title: 'SEO para Energia Solar ou Mídia Paga?',
    seoTitle: 'SEO para Energia Solar ou Mídia Paga? | AUDITSEO',
    description:
      'Compare SEO e mídia paga para energia solar e entenda quando a empresa precisa sair da dependência exclusiva de anúncios para gerar demanda mais estável.',
    excerpt:
      'Mídia paga pode acelerar demanda em energia solar, mas SEO entra para construir descoberta mais previsível e menos vulnerável a leilão e custo de clique.',
    subtitle:
      'No mercado de energia solar, a escolha madura não é entre curto prazo e longo prazo. É entender quando a dependência de mídia paga começa a custar mais do que deveria.',
    badge: 'Energia Solar e Aquisição',
    imagePath: '/images/agencia-de-seo.png',
    sectorLabel: 'energia solar',
    sectorLower: 'energia solar',
    comparisonLabel: 'Mídia paga',
    comparisonLower: 'mídia paga',
    sectorPath: '/servicos/consultoria-seo-para-energia-solar-em-sao-paulo/',
    canonicalPath: '/servicos/consultoria-seo/',
    cityPath: '/cidades/sao-paulo/',
    keywords: [
      'seo para energia solar ou midia paga',
      'energia solar seo ou google ads',
      'seo vs midia paga energia solar',
      'energia solar seo ou anuncios'
    ]
  }),
  createComparisonArticle({
    slug: 'seo-para-software-b2b-ou-outbound',
    title: 'SEO para Software B2B ou Outbound?',
    seoTitle: 'SEO para Software B2B ou Outbound? | AUDITSEO',
    description:
      'Compare SEO e outbound para software B2B e entenda quando a empresa precisa complementar prospecção ativa com um motor mais previsível de descoberta orgânica.',
    excerpt:
      'Outbound continua importante para software B2B, mas SEO entra para reduzir dependência exclusiva de prospecção ativa e fortalecer descoberta por categoria e solução.',
    subtitle:
      'Em software B2B, o ponto não é trocar outbound por SEO. É decidir quando o pipeline precisa de um canal menos dependente de contato ativo.',
    badge: 'Software B2B e Aquisição',
    imagePath: '/images/agencia-de-seo.png',
    sectorLabel: 'software B2B',
    sectorLower: 'software B2B',
    comparisonLabel: 'Outbound',
    comparisonLower: 'outbound',
    sectorPath: '/servicos/consultoria-seo-para-software-b2b-em-sao-paulo/',
    canonicalPath: '/servicos/consultoria-seo/',
    cityPath: '/cidades/sao-paulo/',
    keywords: [
      'seo para software b2b ou outbound',
      'seo ou outbound software b2b',
      'saas seo ou outbound',
      'software b2b seo versus outbound'
    ]
  })
];
