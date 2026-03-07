import type { CommercialSupportArticleSource } from './commercial-support-articles';

type CitySupportConfig = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  subtitle: string;
  badge: string;
  servicePath: string;
  keywords: string[];
};

function createLawArticle(config: CitySupportConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'estrategia',
    imagePath: '/images/agencia-de-seo.png',
    publishedTime: '2026-03-07T20:20:00-03:00',
    modifiedTime: '2026-03-07T20:20:00-03:00',
    readingTime: 7,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: 'Por que o jurídico não deve depender só de página institucional',
        paragraphs: [
          'Escritórios de advocacia podem ter reputação e marca fortes, mas isso não significa que o site esteja preparado para capturar busca por área de atuação e intenção comercial.',
          'Em Porto Alegre, a página precisa explicar melhor quando aquele escritório faz sentido e para quem.'
        ]
      },
      {
        title: 'Onde os escritórios mais perdem tração orgânica',
        paragraphs: [
          'Perdem quando concentram tudo em uma única página institucional ou quando publicam áreas de atuação sem função comercial clara.',
          'A consequência é baixa clareza para o Google e para o potencial cliente que já está comparando opções.'
        ],
        bullets: [
          'Áreas de atuação sem hierarquia',
          'Pouca diferenciação entre oferta e reputação',
          'Mensagem vaga para problemas jurídicos reais',
          'Dependência excessiva de networking e indicação'
        ]
      },
      {
        title: 'Como saber se a praça local justifica a página',
        paragraphs: [
          'Quando Porto Alegre já concentra demanda qualificada, a cidade deixa de ser detalhe e passa a orientar a leitura comercial da página.',
          'Nessa hora, vale separar melhor o papel da página setorial, das páginas por área e da camada geográfica.'
        ]
      },
      {
        title: 'Qual é o próximo passo para o escritório',
        paragraphs: [
          'O próximo passo é revisar arquitetura por área de atuação, clareza de oferta e contexto local antes de aumentar volume de páginas.',
          'A meta não é parecer maior. É ser mais encontrável nas buscas que já sinalizam intenção de contratação.'
        ]
      }
    ],
    faqItems: [
      { question: `${config.title} realmente funciona?`, answer: 'Funciona quando áreas de atuação, mensagem comercial e contexto local estão bem estruturados no site.' },
      { question: 'A página da cidade substitui páginas por área de atuação?', answer: 'Não. Ela organiza a camada geográfica e comercial. As áreas de atuação continuam tendo papel próprio.' },
      { question: 'Essa frente é só para grandes escritórios?', answer: 'Não. Escritórios menores também podem depender bastante de busca orgânica qualificada para crescer.' },
      { question: 'Quando a estratégia costuma falhar?', answer: 'Quando a arquitetura jurídica fica rasa, institucional demais e sem função clara para cada página principal.' },
      { question: 'Qual é o melhor próximo passo?', answer: 'Validar a página comercial da cidade, a hierarquia por serviço jurídico e o interlinking com ativos de decisão.' }
    ],
    resourceLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: config.title.replace(' Funciona?', ''), path: config.servicePath },
      { label: 'Porto Alegre', path: '/cidades/porto-alegre/' }
    ],
    ctaTitle: 'QUER VALIDAR A ESTRUTURA COMERCIAL DO SEU ESCRITÓRIO EM PORTO ALEGRE?',
    ctaCopy:
      'Se a praça já importa para a geração de demanda, o melhor próximo passo é revisar a página comercial específica da cidade e o papel das áreas de atuação.',
    ctaPath: config.servicePath,
    ctaLabel: 'Ver a página comercial jurídica'
  };
}

function createSoftwareArticle(config: CitySupportConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'estrategia',
    imagePath: '/images/agencia-de-seo.png',
    publishedTime: '2026-03-07T20:30:00-03:00',
    modifiedTime: '2026-03-07T20:30:00-03:00',
    readingTime: 7,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: 'Por que software B2B exige uma leitura própria de busca',
        paragraphs: [
          'SaaS e software B2B raramente convertem com uma home genérica. O comprador pesquisa categoria, problema, solução, comparação e prova antes de falar com vendas.',
          'Em Porto Alegre, essa leitura ainda se cruza com o contexto do ecossistema local, o que exige uma página comercial mais madura.'
        ]
      },
      {
        title: 'Onde a maior parte das operações trava',
        paragraphs: [
          'Trava quando o site fala só do produto e não da intenção de busca que antecede a comparação e a decisão.',
          'Nesses casos, a marca pode até ter boa narrativa institucional, mas perde presença nas buscas de categoria e solução.'
        ],
        bullets: [
          'Falta de páginas por categoria e solução',
          'Comparações sem função clara',
          'Dependência alta de outbound',
          'Baixa conexão entre SEO e descoberta assistida por IA'
        ]
      },
      {
        title: 'Quando a praça local passa a importar',
        paragraphs: [
          'Quando Porto Alegre já é uma base real de operação, equipe comercial ou aquisição, vale traduzir isso na arquitetura pública sem virar taxonomia artificial.',
          'A cidade não substitui a tese da vertical. Ela reforça contexto, prova e aderência comercial.'
        ]
      },
      {
        title: 'Qual é o próximo passo mais racional',
        paragraphs: [
          'O próximo passo é organizar a relação entre páginas de categoria, solução, apoio BOFU e descoberta assistida por IA.',
          'Sem isso, a empresa continua disputando pipeline com excesso de mídia paga e pouca previsibilidade orgânica.'
        ]
      }
    ],
    faqItems: [
      { question: `${config.title} funciona?`, answer: 'Funciona quando categoria, solução, comparação e mensagem comercial são organizadas para a forma como o comprador pesquisa.' },
      { question: 'Essa página local compete com a página canônica de consultoria SEO?', answer: 'Não. A página canônica apresenta o serviço amplo. A página da cidade traduz a oferta para um contexto operacional específico.' },
      { question: 'LLM Brand Presence entra junto nessa estratégia?', answer: 'Em muitos casos, sim. Principalmente quando a descoberta assistida por IA reforça comparações e presença de categoria.' },
      { question: 'Quando a empresa ainda não deveria abrir a página da cidade?', answer: 'Quando a praça ainda não tem função comercial real e a empresa está tentando usar geografia só para inflar cobertura aparente.' },
      { question: 'Qual é o melhor próximo passo?', answer: 'Revisar a página comercial da cidade, as páginas por categoria e a malha BOFU que sustenta a comparação.' }
    ],
    resourceLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: config.title.replace(': Como Funciona', '').replace(' Como Funciona', ''), path: config.servicePath },
      { label: 'Porto Alegre', path: '/cidades/porto-alegre/' }
    ],
    ctaTitle: 'QUER VALIDAR A ESTRUTURA DE DEMANDA DO SEU SOFTWARE EM PORTO ALEGRE?',
    ctaCopy:
      'Se a operação já precisa ganhar busca por categoria, solução e comparação, o melhor próximo passo é revisar a página comercial específica da praça.',
    ctaPath: config.servicePath,
    ctaLabel: 'Ver a página comercial de software B2B'
  };
}

function createEnergyArticle(config: CitySupportConfig): CommercialSupportArticleSource {
  return {
    slug: config.slug,
    title: config.title,
    seoTitle: config.seoTitle,
    description: config.description,
    excerpt: config.excerpt,
    categorySlug: 'estrategia',
    imagePath: '/images/agencia-de-seo.png',
    publishedTime: '2026-03-07T20:40:00-03:00',
    modifiedTime: '2026-03-07T20:40:00-03:00',
    readingTime: 7,
    keywords: config.keywords,
    badge: config.badge,
    subtitle: config.subtitle,
    sections: [
      {
        title: 'Por que energia solar precisa de jornada consultiva real',
        paragraphs: [
          'Quem pesquisa energia solar compara investimento, aplicação, retorno e confiança técnica. A página comercial precisa responder a esse nível de comparação.',
          'Quando a operação atua em Porto Alegre, vale traduzir essa praça na arquitetura comercial sem transformar geografia em enfeite.'
        ]
      },
      {
        title: 'Onde a maior parte das empresas perde demanda',
        paragraphs: [
          'Perde quando o site apresenta a empresa, mas não organiza claramente solução, aplicação e próximos passos comerciais.',
          'Nesse cenário, a busca até encontra a marca, mas a geração de lead fica dependente demais de mídia paga e prospecção.'
        ],
        bullets: [
          'Páginas de solução rasas',
          'Pouca diferenciação comercial',
          'Escassez de prova e comparação',
          'Demanda orgânica pouco previsível'
        ]
      },
      {
        title: 'Quando a cidade entra na estrutura comercial',
        paragraphs: [
          'Quando Porto Alegre já participa da venda, da operação comercial ou do posicionamento da empresa, a praça deixa de ser detalhe e passa a ser contexto útil.',
          'A cidade não substitui a tese do setor. Ela ajuda a tornar a captura de demanda mais aderente à realidade comercial.'
        ]
      },
      {
        title: 'Qual é o próximo passo para gerar demanda melhor',
        paragraphs: [
          'O próximo passo é alinhar páginas de solução, apoio BOFU e contexto local em uma mesma jornada consultiva.',
          'Sem essa base, a empresa segue com pouca previsibilidade orgânica e excesso de dependência de canais pagos.'
        ]
      }
    ],
    faqItems: [
      { question: `${config.title} faz sentido para empresas consultivas?`, answer: 'Faz, principalmente quando a operação precisa gerar demanda qualificada e sustentar uma jornada de decisão mais comparativa.' },
      { question: 'A cidade realmente muda a estratégia?', answer: 'Muda quando a praça já faz parte da operação comercial e precisa aparecer na arquitetura pública com função real.' },
      { question: 'SEO ajuda a reduzir dependência de mídia paga no setor?', answer: 'Ajuda quando a empresa passa a capturar melhor busca por solução, categoria e contexto de compra, sem depender só de campanhas.' },
      { question: 'Essa página compete com a página setorial de energia solar?', answer: 'Não. O hub setorial apoia o contexto da vertical. A página da cidade traduz a oferta para uma intenção local e comercial mais aderente.' },
      { question: 'Qual é o melhor próximo passo?', answer: 'Validar a página comercial da praça, a arquitetura por solução e os ativos BOFU que ajudam a reduzir objeção e aumentar confiança.' }
    ],
    resourceLinks: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: config.title.replace(': Como Gerar Demanda Qualificada', '').replace(' Como Gerar Demanda Qualificada', ''), path: config.servicePath },
      { label: 'Energia solar', path: '/nichos/energia-solar/' }
    ],
    ctaTitle: 'QUER VALIDAR COMO GERAR DEMANDA ORGÂNICA MELHOR EM PORTO ALEGRE?',
    ctaCopy:
      'Se a operação ainda depende demais de mídia paga ou prospecção, o melhor próximo passo é revisar a página comercial específica da praça e o papel das páginas de solução.',
    ctaPath: config.servicePath,
    ctaLabel: 'Ver a página comercial de energia solar'
  };
}

export const commercialSupportArticlesPortoAlegre: CommercialSupportArticleSource[] = [
  {
    slug: 'seo-local-para-clinicas-medicas-em-porto-alegre-vale-a-pena',
    title: 'SEO Local para Clínicas Médicas em Porto Alegre Vale a Pena?',
    seoTitle: 'SEO Local para Clínicas Médicas em Porto Alegre Vale a Pena? | AUDITSEO',
    description:
      'Entenda quando Porto Alegre já exige uma camada local mais forte para clínicas médicas e como isso se conecta a Google Maps, página comercial e geração de contatos.',
    excerpt:
      'Quando a cidade participa da decisão, não basta citar Porto Alegre na copy. A clínica precisa de uma página local capaz de conectar geografia, especialidade e descoberta qualificada.',
    categorySlug: 'estrategia',
    imagePath: '/images/google-meu-negocio.jpeg',
    publishedTime: '2026-03-07T20:10:00-03:00',
    modifiedTime: '2026-03-07T20:10:00-03:00',
    readingTime: 7,
    keywords: [
      'seo local para clinicas medicas em porto alegre vale a pena',
      'seo para clinicas medicas em porto alegre',
      'google maps para clinicas em porto alegre',
      'google meu negocio para clinicas medicas em porto alegre'
    ],
    badge: 'Estratégia Local',
    subtitle:
      'Porto Alegre já funciona como praça forte para clínicas médicas que dependem de descoberta orgânica, comparação local e proximidade para gerar novos contatos.',
    sections: [
      {
        title: 'Por que Porto Alegre pede uma leitura própria',
        paragraphs: [
          'Quando a cidade participa da decisão, a página precisa traduzir geografia, especialidade e próxima ação em um mesmo ativo comercial.',
          'Sem isso, a clínica até aparece em algumas buscas, mas o Google e o potencial paciente não entendem com clareza quando aquela operação faz sentido.'
        ],
        bullets: [
          'Página local com mensagem específica',
          'Integração com Google Maps e perfil local',
          'Conexão entre cidade, especialidade e prova',
          'CTA adaptado à intenção urbana'
        ]
      },
      {
        title: 'Onde clínicas médicas perdem mais tração na praça',
        paragraphs: [
          'O erro mais comum é tentar resolver Porto Alegre com uma página nacional genérica ou só com o perfil no Google, sem apoio comercial suficiente no site.',
          'Nessa situação, a descoberta existe, mas a geração de contato qualificado continua abaixo do potencial da praça.'
        ]
      },
      {
        title: 'Quando Porto Alegre vira prioridade real',
        paragraphs: [
          'Se a cidade já pesa na captação, se o mapa participa da comparação e se a clínica quer reduzir dependência de mídia paga, a prioridade local tende a ser clara.',
          'O caminho mais seguro é organizar a camada comercial da cidade antes de multiplicar URLs sem função de negócio.'
        ]
      },
      {
        title: 'Qual é o próximo passo prático',
        paragraphs: [
          'O próximo passo é revisar o papel da página local, do perfil no Google e da página setorial de clínicas médicas dentro da mesma jornada.',
          'Quando essas peças trabalham juntas, Porto Alegre deixa de ser apenas contexto e passa a funcionar como captura comercial organizada.'
        ]
      }
    ],
    faqItems: [
      {
        question: 'SEO local para clínicas médicas em Porto Alegre vale a pena para qualquer operação?',
        answer: 'Vale quando Porto Alegre já participa da geração de demanda e a clínica quer transformar melhor a busca local em contato.'
      },
      {
        question: 'A cidade precisa de uma página própria para isso?',
        answer: 'Sim, quando a praça tem peso comercial real e não deve ficar escondida atrás de uma página nacional genérica.'
      },
      {
        question: 'Google Meu Negócio entra junto nessa estratégia?',
        answer: 'Na maior parte dos casos, sim. Perfil local e página comercial tendem a performar melhor quando são tratados como um sistema único.'
      },
      {
        question: 'Vale priorizar a camada local mesmo sem um blog grande?',
        answer: 'Sim. Em muitos cenários, a camada comercial local é mais urgente do que escalar blog sem base clara de conversão.'
      },
      {
        question: 'Como validar se Porto Alegre já virou prioridade?',
        answer: 'Observe se a cidade já pesa na demanda, se o mapa influencia a descoberta e se a clínica quer aumentar a previsibilidade dos contatos vindos do Google.'
      }
    ],
    resourceLinks: [
      { label: 'SEO Local para Clínicas Médicas em Porto Alegre', path: '/servicos/seo-local-para-clinicas-medicas-em-porto-alegre/' },
      { label: 'Google Meu Negócio para Clínicas Médicas em Porto Alegre', path: '/servicos/google-meu-negocio-para-clinicas-medicas-em-porto-alegre/' },
      { label: 'Porto Alegre', path: '/cidades/porto-alegre/' }
    ],
    ctaTitle: 'QUER VALIDAR SE PORTO ALEGRE JÁ EXIGE UMA CAMADA LOCAL MAIS FORTE?',
    ctaCopy:
      'Se Porto Alegre já influencia a demanda da clínica, o próximo passo é revisar a página comercial específica da cidade e o papel dela na jornada de descoberta local.',
    ctaPath: '/servicos/seo-local-para-clinicas-medicas-em-porto-alegre/',
    ctaLabel: 'Ver a página local de Porto Alegre'
  },
  {
    slug: 'seo-local-para-odontologia-em-porto-alegre-vale-a-pena',
    title: 'SEO Local para Odontologia em Porto Alegre Vale a Pena?',
    seoTitle: 'SEO Local para Odontologia em Porto Alegre Vale a Pena? | AUDITSEO',
    description: 'Entenda quando faz sentido priorizar SEO local para odontologia em Porto Alegre e como a cidade muda a leitura comercial da página.',
    excerpt: 'Em odontologia, cidade, mapa e procedimento influenciam a decisão cedo. Em Porto Alegre, a página local precisa responder isso com clareza comercial real.',
    categorySlug: 'estrategia',
    imagePath: '/images/google-meu-negocio.jpeg',
    publishedTime: '2026-03-07T20:15:00-03:00',
    modifiedTime: '2026-03-07T20:15:00-03:00',
    readingTime: 7,
    keywords: ['seo local para odontologia em porto alegre', 'seo para dentistas em porto alegre', 'google maps para odontologia em porto alegre'],
    badge: 'Odontologia Local',
    subtitle: 'Porto Alegre exige uma leitura própria de cidade, especialidade e descoberta local para odontologia.',
    sections: [
      {
        title: 'Por que a cidade muda a busca por odontologia',
        paragraphs: [
          'Em odontologia, proximidade, procedimento e percepção de confiança participam cedo da decisão.',
          'Sem página local forte, a operação até aparece, mas não traduz direito quando faz sentido para quem está pesquisando em Porto Alegre.'
        ]
      },
      {
        title: 'Onde consultórios perdem mais tração',
        paragraphs: [
          'O maior erro é tentar resolver descoberta local só com perfil no Google ou com uma página nacional genérica.',
          'Sem uma camada comercial própria da cidade, o contato qualificado tende a ficar abaixo do potencial da praça.'
        ]
      },
      {
        title: 'Como validar a prioridade da cidade',
        paragraphs: [
          'Se Porto Alegre já participa da agenda, da comparação e da jornada de decisão, a cidade merece uma página comercial própria.',
          'A estrutura certa conecta página local, GBP e vertical setorial.'
        ]
      },
      {
        title: 'Qual é o próximo passo prático',
        paragraphs: [
          'O próximo passo é revisar a relação entre página local, perfil no Google e página setorial de odontologia.',
          'Quando essas peças funcionam juntas, a cidade deixa de ser menção e vira captura comercial organizada.'
        ]
      }
    ],
    faqItems: [
      { question: 'SEO local para odontologia em Porto Alegre vale a pena?', answer: 'Vale quando a cidade já influencia a agenda e a operação depende de descoberta por proximidade.' },
      { question: 'A cidade precisa de página própria?', answer: 'Sim, quando a praça tem peso comercial real e não deve ficar escondida atrás de uma página nacional.' },
      { question: 'Google Meu Negócio entra nessa estratégia?', answer: 'Sim. Em odontologia, perfil local e página comercial tendem a se reforçar mutuamente.' },
      { question: 'Vale priorizar a camada local antes de ampliar o blog?', answer: 'Em muitos casos, sim. A camada comercial local costuma ser mais urgente para gerar agenda qualificada.' },
      { question: 'Como validar se Porto Alegre já virou prioridade?', answer: 'Observe se a cidade já pesa na captação, se o mapa participa da decisão e se a operação quer aumentar previsibilidade comercial.' }
    ],
    resourceLinks: [
      { label: 'SEO Local para Odontologia em Porto Alegre', path: '/servicos/seo-local-para-odontologia-em-porto-alegre/' },
      { label: 'Google Meu Negócio para Odontologia em Porto Alegre', path: '/servicos/google-meu-negocio-para-odontologia-em-porto-alegre/' },
      { label: 'Porto Alegre', path: '/cidades/porto-alegre/' }
    ],
    ctaTitle: 'QUER VALIDAR A CAMADA LOCAL DE ODONTOLOGIA EM PORTO ALEGRE?',
    ctaCopy: 'Se Porto Alegre já participa da geração de agenda, o próximo passo é revisar a página comercial específica da cidade e o papel dela na descoberta local.',
    ctaPath: '/servicos/seo-local-para-odontologia-em-porto-alegre/',
    ctaLabel: 'Ver a página local de odontologia'
  },
  {
    slug: 'seo-local-para-dermatologistas-em-porto-alegre-vale-a-pena',
    title: 'SEO Local para Dermatologistas em Porto Alegre Vale a Pena?',
    seoTitle: 'SEO Local para Dermatologistas em Porto Alegre Vale a Pena? | AUDITSEO',
    description: 'Entenda quando faz sentido priorizar SEO local para dermatologistas em Porto Alegre e como a praça muda a leitura comercial da página.',
    excerpt: 'Em dermatologia, tratamento, confiança e proximidade entram cedo na busca. Em Porto Alegre, a página local precisa traduzir isso com mais precisão comercial.',
    categorySlug: 'estrategia',
    imagePath: '/images/google-meu-negocio.jpeg',
    publishedTime: '2026-03-07T20:17:00-03:00',
    modifiedTime: '2026-03-07T20:17:00-03:00',
    readingTime: 7,
    keywords: ['seo local para dermatologistas em porto alegre', 'seo para dermatologistas em porto alegre', 'google maps para dermatologistas em porto alegre'],
    badge: 'Dermatologia Local',
    subtitle: 'Porto Alegre exige uma leitura própria de cidade, especialidade e descoberta local para dermatologistas.',
    sections: [
      {
        title: 'Por que a cidade muda a busca por dermatologia',
        paragraphs: [
          'Tratamentos, confiança e comparação local participam cedo da jornada de busca em dermatologia.',
          'Sem página local forte, o Google encontra a marca, mas não entende bem quando aquela operação faz sentido em Porto Alegre.'
        ]
      },
      {
        title: 'Onde clínicas dermatológicas perdem mais tração',
        paragraphs: [
          'Perdem quando tratam a cidade como simples variação de copy ou tentam apoiar toda a descoberta só no perfil local.',
          'Sem arquitetura comercial própria, a praça não amadurece em contato qualificado.'
        ]
      },
      {
        title: 'Como saber se a prioridade é real',
        paragraphs: [
          'Se Porto Alegre já participa da jornada de captação e se o mapa pesa na comparação, a cidade já merece uma camada comercial própria.',
          'Nesse cenário, página local, vertical setorial e GBP precisam trabalhar juntos.'
        ]
      },
      {
        title: 'Qual é o próximo passo para a clínica',
        paragraphs: [
          'O próximo passo é revisar a relação entre página local, perfil e tratamento principal antes de ampliar o volume de URLs.',
          'Com isso, Porto Alegre deixa de ser só contexto e passa a operar como captura comercial organizada.'
        ]
      }
    ],
    faqItems: [
      { question: 'SEO local para dermatologistas em Porto Alegre vale a pena?', answer: 'Vale quando a cidade já influencia busca, comparação e contato em dermatologia.' },
      { question: 'A praça precisa de página própria?', answer: 'Sim, quando a cidade já participa da demanda e exige uma leitura comercial específica.' },
      { question: 'Google Meu Negócio entra nessa estratégia?', answer: 'Na maioria dos casos, sim. Em dermatologia, mapa e página local tendem a se reforçar bastante.' },
      { question: 'Vale priorizar a camada local antes de ampliar o blog?', answer: 'Em muitos casos, sim. A base local costuma ser mais urgente para transformar busca em contato qualificado.' },
      { question: 'Como validar se Porto Alegre já virou prioridade?', answer: 'Observe se a cidade já pesa na captação, se o mapa influencia a comparação e se a clínica quer previsibilidade maior na descoberta.' }
    ],
    resourceLinks: [
      { label: 'SEO Local para Dermatologistas em Porto Alegre', path: '/servicos/seo-local-para-dermatologistas-em-porto-alegre/' },
      { label: 'Google Meu Negócio para Dermatologistas em Porto Alegre', path: '/servicos/google-meu-negocio-para-dermatologistas-em-porto-alegre/' },
      { label: 'Porto Alegre', path: '/cidades/porto-alegre/' }
    ],
    ctaTitle: 'QUER VALIDAR A CAMADA LOCAL DE DERMATOLOGIA EM PORTO ALEGRE?',
    ctaCopy: 'Se Porto Alegre já participa da sua geração de demanda, o próximo passo é revisar a página comercial específica da cidade e o papel dela na descoberta local.',
    ctaPath: '/servicos/seo-local-para-dermatologistas-em-porto-alegre/',
    ctaLabel: 'Ver a página local de dermatologia'
  },
  createLawArticle({
    slug: 'seo-para-escritorios-de-advocacia-em-porto-alegre-funciona',
    title: 'SEO para Escritórios de Advocacia em Porto Alegre Funciona?',
    seoTitle: 'SEO para Escritórios de Advocacia em Porto Alegre Funciona? | AUDITSEO',
    description: 'Veja quando SEO faz sentido para escritórios de advocacia em Porto Alegre e como estruturar melhor páginas jurídicas e contexto local.',
    excerpt: 'Em advocacia, autoridade sem arquitetura comercial não sustenta descoberta recorrente. Porto Alegre pede uma leitura própria de área de atuação, geografia e intenção de contratação.',
    subtitle: 'Porto Alegre exige uma leitura própria de autoridade jurídica, área de atuação e busca comercial.',
    badge: 'Advocacia Local',
    servicePath: '/servicos/seo-para-escritorios-de-advocacia-em-porto-alegre/',
    keywords: ['seo para escritorios de advocacia em porto alegre', 'seo juridico em porto alegre', 'agencia seo para advogados em porto alegre']
  }),
  createSoftwareArticle({
    slug: 'seo-para-software-b2b-em-porto-alegre-como-funciona',
    title: 'SEO para Software B2B em Porto Alegre: Como Funciona',
    seoTitle: 'SEO para Software B2B em Porto Alegre: Como Funciona | AUDITSEO',
    description: 'Entenda como SEO para software B2B funciona em Porto Alegre e quando a praça já exige páginas comerciais próprias para categoria, solução e comparação.',
    excerpt: 'Software B2B não cresce organicamente só com home institucional. Em Porto Alegre, categoria, solução e contexto comercial precisam virar páginas com função clara.',
    subtitle: 'Porto Alegre pede uma leitura própria de categoria, solução e descoberta comercial para software B2B.',
    badge: 'Software B2B Local',
    servicePath: '/servicos/consultoria-seo-para-software-b2b-em-porto-alegre/',
    keywords: ['seo para software b2b em porto alegre', 'consultoria seo para software b2b em porto alegre', 'seo para saas em porto alegre']
  }),
  createEnergyArticle({
    slug: 'seo-para-energia-solar-em-porto-alegre-como-gerar-demanda-qualificada',
    title: 'SEO para Energia Solar em Porto Alegre: Como Gerar Demanda Qualificada',
    seoTitle: 'SEO para Energia Solar em Porto Alegre: Como Gerar Demanda Qualificada | AUDITSEO',
    description: 'Veja como estruturar SEO para energia solar em Porto Alegre para gerar demanda orgânica mais qualificada e menos dependente de mídia paga.',
    excerpt: 'Energia solar exige jornada consultiva, páginas de solução e contexto de praça. Em Porto Alegre, isso precisa entrar na arquitetura comercial com função real.',
    subtitle: 'Porto Alegre pede páginas de solução, apoio BOFU e contexto local para sustentar demanda orgânica em energia solar.',
    badge: 'Energia Solar Local',
    servicePath: '/servicos/consultoria-seo-para-energia-solar-em-porto-alegre/',
    keywords: ['seo para energia solar em porto alegre', 'consultoria seo para energia solar em porto alegre', 'demanda organica energia solar porto alegre']
  })
];
