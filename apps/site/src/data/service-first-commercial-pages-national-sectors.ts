import type { CommercialPageBrief } from './commercial-page-briefs';
import type { ServiceFirstCommercialPage } from './service-first-commercial-pages';

type RequireBrief = (slug: string) => CommercialPageBrief;

export function buildNationalSectorCommercialPages(requireBrief: RequireBrief): ServiceFirstCommercialPage[] {
  return [
    {
      slug: '/servicos/seo-para-escritorios-de-advocacia/',
      seoTitle: 'SEO para Escritórios de Advocacia | AUDITSEO',
      description:
        'SEO para escritórios de advocacia com foco em áreas de atuação, autoridade, descoberta orgânica e geração de oportunidades comerciais mais previsíveis.',
      imagePath: '/images/agencia-de-seo.png',
      badge: 'Jurídico, Autoridade e Busca Comercial',
      heroTitlePrefix: 'SEO PARA ESCRITÓRIOS DE ',
      heroTitleAccent: 'ADVOCACIA',
      heroSubtitle:
        'Escritórios de advocacia não precisam só de reputação institucional. Precisam de uma estrutura que transforme áreas de atuação, autoridade e clareza de serviço em descoberta orgânica mais previsível.',
      highlights: ['Jurídico', 'Áreas de Atuação', 'Busca Qualificada', 'Aquisição Previsível'],
      heroCard: {
        title: 'Quando essa página faz sentido',
        copy:
          'Quando o escritório quer depender menos de indicação isolada, ganhar visibilidade para áreas estratégicas e organizar melhor a relação entre autoridade, serviço e intenção de busca.',
        links: [
          { label: 'Ver Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
          { label: 'Ver hub jurídico', path: '/nichos/escritorios-advocacia/', reason: 'Contexto setorial de apoio.' },
          { label: 'Ver São Paulo', path: '/cidades/sao-paulo/', reason: 'Principal praça derivada já publicada.' }
        ]
      },
      stats: [
        { value: '1', label: 'Vertical jurídica', copy: 'Página nacional que organiza a tese comercial do setor.' },
        { value: '3', label: 'Camadas centrais', copy: 'Área de atuação, confiança e intenção precisam operar juntas.' },
        { value: '0', label: 'Espaço para institucional vazio', copy: 'Página vaga não sustenta busca jurídica qualificada.' },
        { value: '100%', label: 'Foco em clareza', copy: 'O decisor precisa entender rápido o serviço e a especialidade.' }
      ],
      marketCards: [
        {
          title: 'Áreas de atuação e intenção',
          copy:
            'Quem procura um escritório normalmente cruza problema jurídico, especialidade e confiança. A página precisa responder a esse nível de intenção sem se esconder atrás de texto institucional.'
        },
        {
          title: 'Autoridade sem excesso institucional',
          copy:
            'O jurídico costuma exagerar no institucional e esquecer a camada comercial. O resultado é um site profissional, mas fraco para captar busca qualificada.'
        },
        {
          title: 'Escala por praça e serviço',
          copy:
            'A vertical nacional só faz sentido quando organiza como cidade, área de atuação e conteúdo de decisão passam a se reforçar sem canibalização.'
        }
      ],
      coreOffer:
        'Arquitetura SEO para escritórios de advocacia, conectando áreas de atuação, descoberta orgânica, autoridade e páginas comerciais de alta intenção.',
      painPoints: [
        'Baixa visibilidade para áreas de atuação relevantes.',
        'Site institucional sem estrutura comercial por serviço jurídico.',
        'Dificuldade em transformar autoridade em descoberta orgânica recorrente.',
        'Falta de clareza sobre como expandir por praça sem repetir a mesma tese.'
      ],
      deliveryItems: [
        'Arquitetura comercial para áreas de atuação e páginas de serviço jurídico.',
        'Ajuste da mensagem para confiança, clareza e busca qualificada.',
        'Integração entre vertical nacional, praças prioritárias e apoio BOFU.',
        'FAQ comercial para objeções, escopo e diferenciação.',
        'Critérios de governança para crescer sem canibalizar cidade e área jurídica.'
      ],
      methodSteps: [
        {
          title: 'Diagnóstico da demanda',
          copy: 'Mapeamos como o escritório é encontrado hoje, quais áreas de atuação têm tração e onde a arquitetura atual desperdiça intenção comercial.'
        },
        {
          title: 'Arquitetura por área de atuação',
          copy: 'Definimos a função da página principal e das páginas derivadas sem canibalizar intenção nem repetir copy jurídica.'
        },
        {
          title: 'Posicionamento comercial',
          copy: 'Ajustamos a mensagem para explicar o serviço com clareza e sem depender apenas de tom institucional.'
        },
        {
          title: 'Ligação entre vertical e praça',
          copy: 'Conectamos a página nacional às principais praças derivadas para sustentar expansão com mais coerência.'
        },
        {
          title: 'Escala controlada',
          copy: 'Usamos desempenho real para decidir quando abrir novas páginas por área, cidade ou frente editorial.'
        }
      ],
      differentiators: [
        'Leitura comercial adaptada ao setor jurídico.',
        'Arquitetura pensada para áreas de atuação sem canibalização.',
        'Equilíbrio entre autoridade institucional e demanda orgânica.',
        'Base preparada para derivar a vertical por praça com mais rigor.'
      ],
      proofPoints: [
        'Serviço canônico de Consultoria SEO já publicado.',
        'Hub setorial de escritórios de advocacia já ativo.',
        'Página local de São Paulo já existente como principal derivação da vertical.',
        'Base institucional e metodológica da AUDITSEO já pública.'
      ],
      relatedLinks: [
        { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
        { label: 'Escritórios de advocacia', path: '/nichos/escritorios-advocacia/', reason: 'Hub setorial de apoio.' },
        { label: 'SEO para escritórios de advocacia em São Paulo', path: '/servicos/seo-para-escritorios-de-advocacia-em-sao-paulo/', reason: 'Contexto geográfico principal e principal derivação local.' },
        { label: 'SEO para escritórios de advocacia funciona?', path: '/blog/seo-para-escritorios-de-advocacia-funciona/', reason: 'Apoio BOFU setorial para decisão.' },
        { label: 'Quanto custa SEO para escritórios de advocacia?', path: '/blog/quanto-custa-seo-para-escritorios-de-advocacia/', reason: 'Objeção de orçamento diretamente ligada ao setor jurídico.' },
        { label: 'Em quanto tempo SEO gera resultado para escritórios de advocacia?', path: '/blog/em-quanto-tempo-seo-gera-resultado-para-escritorios-de-advocacia/', reason: 'Objeção de prazo ligada à vertical jurídica.' },
        { label: 'SEO para escritórios de advocacia ou indicação?', path: '/blog/seo-para-escritorios-de-advocacia-ou-indicacao/', reason: 'Comparação contra o principal motor histórico de aquisição do setor.' }
      ],
      faqItems: [
        {
          question: 'SEO funciona para escritórios de advocacia?',
          answer:
            'Funciona quando o escritório estrutura corretamente áreas de atuação, autoridade, contexto comercial e páginas com função clara. O erro comum é depender só de uma página institucional genérica.'
        },
        {
          question: 'Qual a diferença entre esta página e uma página institucional do escritório?',
          answer:
            'A página institucional apresenta a marca. Esta página organiza a intenção comercial e a descoberta orgânica para áreas de atuação e busca qualificada.'
        },
        {
          question: 'Vale criar páginas por área de atuação?',
          answer:
            'Na maioria dos casos, sim. Mas só quando existe demanda real e uma diferença clara de intenção, escopo e mensagem entre as áreas.'
        },
        {
          question: 'Essa estratégia também depende de SEO local?',
          answer:
            'Depende quando a geografia influencia a decisão. A página nacional organiza a vertical; as páginas por praça entram quando o contexto local altera a descoberta ou a contratação.'
        },
        {
          question: 'Quanto tempo leva para SEO gerar resultado para um escritório?',
          answer:
            'Depende da base atual, da concorrência e da profundidade da arquitetura. O foco correto é medir aumento de oportunidades qualificadas e não só visitas.'
        },
        {
          question: 'O setor jurídico exige algum cuidado especial na copy?',
          answer:
            'Exige. A página precisa ser clara, confiável e profissional, sem promessas vazias nem exagero institucional que esconda a oferta real.'
        },
        {
          question: 'Essa página substitui uma estratégia de conteúdo para o blog?',
          answer:
            'Não. A página comercial captura intenção de contratação. O blog entra para qualificar decisão, reforçar autoridade e apoiar áreas de atuação.'
        },
        {
          question: 'Quando contratar SEO para advocacia faz mais sentido?',
          answer:
            'Quando o escritório quer depender menos de indicação isolada, ganhar visibilidade orgânica em áreas estratégicas e transformar busca em novas oportunidades comerciais.'
        }
      ],
      ctaTitle: 'QUER VALIDAR A ARQUITETURA COMERCIAL DO SEU ESCRITÓRIO?',
      ctaCopy:
        'Se hoje a autoridade do escritório não está se convertendo em descoberta orgânica recorrente, o melhor início é um diagnóstico orientado a áreas de atuação, mensagem e busca qualificada.',
      ctaPrimaryLabel: 'Solicitar diagnóstico para advocacia',
      ctaSecondaryPath: '/contato/',
      ctaSecondaryLabel: 'Falar com a AUDITSEO',
      areaServedName: 'Brasil',
      brief: requireBrief('/servicos/seo-para-escritorios-de-advocacia/')
    },
    {
      slug: '/servicos/consultoria-seo-para-energia-solar/',
      seoTitle: 'Consultoria SEO para Energia Solar | AUDITSEO',
      description:
        'Consultoria SEO para energia solar com foco em demanda B2B, páginas comerciais, intenção consultiva e geração de oportunidades orgânicas.',
      imagePath: '/images/agencia-de-seo.png',
      badge: 'B2B, Energia Solar e Demanda Qualificada',
      heroTitlePrefix: 'CONSULTORIA SEO PARA ',
      heroTitleAccent: 'ENERGIA SOLAR',
      heroSubtitle:
        'Empresas de energia solar não precisam só de tráfego. Precisam de uma estrutura que atraia demanda qualificada, organize soluções comerciais e sustente uma jornada B2B mais longa e comparativa.',
      highlights: ['Energia Solar', 'B2B', 'Demanda Qualificada', 'Jornada Consultiva'],
      heroCard: {
        title: 'Quando essa página faz sentido',
        copy:
          'Quando a empresa atua com vendas consultivas, depende de captação recorrente e precisa transformar o site em um ativo comercial que responda melhor a problemas, soluções e comparações.',
        links: [
          { label: 'Ver Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
          { label: 'Ver energia solar', path: '/nichos/energia-solar/', reason: 'Hub setorial de apoio.' },
          { label: 'Ver São Paulo', path: '/cidades/sao-paulo/', reason: 'Principal praça derivada já publicada.' }
        ]
      },
      stats: [
        { value: '1', label: 'Mercado consultivo', copy: 'A venda exige contexto, confiança e páginas que eduquem sem dispersar.' },
        { value: '3', label: 'Camadas críticas', copy: 'Problema, solução e prova precisam aparecer na mesma arquitetura.' },
        { value: '0', label: 'Espaço para lead frio', copy: 'Volume sem qualificação tende a desperdiçar time comercial.' },
        { value: '100%', label: 'Foco em demanda útil', copy: 'A meta é oportunidade comercial, não tráfego decorativo.' }
      ],
      marketCards: [
        {
          title: 'Jornada B2B mais longa',
          copy:
            'Quem busca energia solar costuma comparar investimento, escopo, retorno e modelo de contratação. Isso exige páginas mais maduras que uma apresentação institucional simples.'
        },
        {
          title: 'Soluções e segmentos',
          copy:
            'Empresas de energia solar precisam organizar soluções, aplicações e diferenciais de forma que a busca entenda claramente o que está sendo ofertado.'
        },
        {
          title: 'Captação comercial previsível',
          copy:
            'Sem uma base orgânica melhor estruturada, o negócio tende a depender demais de mídia paga, base fria e ações pontuais de prospecção.'
        }
      ],
      coreOffer:
        'Consultoria SEO para energia solar, conectando páginas de solução, prova comercial, apoio BOFU e derivação por praça com mais rigor.',
      painPoints: [
        'Baixa geração de leads orgânicos qualificados.',
        'Site sem páginas fortes para solução, aplicação e comparação.',
        'Dependência alta de mídia paga e prospecção ativa.',
        'Jornada comercial mais longa sem conteúdo de apoio adequado.'
      ],
      deliveryItems: [
        'Arquitetura comercial para soluções, aplicações e intenção consultiva.',
        'Organização da jornada de descoberta para buscas B2B regionais.',
        'Blocos de prova e FAQ para reduzir atrito comercial.',
        'Interlinking entre consultoria, segmento, praça e conteúdos de decisão.',
        'Critérios de governança para escalar a vertical sem ruído.'
      ],
      methodSteps: [
        {
          title: 'Mapeamento de oferta',
          copy: 'Mapeamos como a empresa apresenta soluções, segmentos e diferenciais hoje, e onde a arquitetura atual perde demanda útil.'
        },
        {
          title: 'Arquitetura comercial',
          copy: 'Definimos quais páginas precisam existir para capturar problema, solução e comparação sem dispersar a jornada.'
        },
        {
          title: 'Mensagem orientada à venda consultiva',
          copy: 'Ajustamos copy e oferta para transformar busca em oportunidade comercial qualificada.'
        },
        {
          title: 'Base de apoio editorial',
          copy: 'Conectamos a página comercial a ativos que ajudam a reduzir objeção e aumentar a confiança do decisor.'
        },
        {
          title: 'Escala por prioridade',
          copy: 'Evoluímos a malha com base em desempenho por segmento, praça e tipo de busca que gera negócio.'
        }
      ],
      differentiators: [
        'Leitura comercial adaptada a vendas consultivas B2B.',
        'Arquitetura pensada para problema, solução e prova.',
        'Base preparada para derivar a vertical por praça sem depender da capital como página-mãe.',
        'Captação orgânica orientada a oportunidade, não só tráfego.'
      ],
      proofPoints: [
        'Serviço canônico de Consultoria SEO já publicado.',
        'Hub setorial de energia solar já ativo.',
        'Página local de São Paulo já existente como principal derivação da vertical.',
        'Base metodológica da AUDITSEO já pública.'
      ],
      relatedLinks: [
        { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
        { label: 'Energia solar', path: '/nichos/energia-solar/', reason: 'Hub setorial de apoio.' },
        { label: 'Consultoria SEO para energia solar em São Paulo', path: '/servicos/consultoria-seo-para-energia-solar-em-sao-paulo/', reason: 'Contexto geográfico principal e principal derivação local.' },
        { label: 'SEO para energia solar: como gerar demanda qualificada', path: '/blog/seo-para-energia-solar-como-gerar-demanda-qualificada/', reason: 'Apoio BOFU setorial para decisão.' },
        { label: 'Consultoria SEO para energia solar vale a pena?', path: '/blog/consultoria-seo-para-energia-solar-vale-a-pena/', reason: 'Artigo BOFU de ROI ligado à vertical.' },
        { label: 'Quanto custa SEO para energia solar?', path: '/blog/quanto-custa-seo-para-energia-solar/', reason: 'Objeção de orçamento ligada ao setor.' },
        { label: 'Em quanto tempo SEO gera demanda para energia solar?', path: '/blog/em-quanto-tempo-seo-gera-demanda-para-energia-solar/', reason: 'Objeção de prazo ligada à geração de demanda.' },
        { label: 'SEO para energia solar ou mídia paga?', path: '/blog/seo-para-energia-solar-ou-midia-paga/', reason: 'Comparação contra o canal que mais disputa verba no setor.' }
      ],
      faqItems: [
        {
          question: 'SEO funciona para empresas de energia solar?',
          answer:
            'Funciona quando a empresa organiza corretamente páginas de solução, segmentos, comparações e contexto comercial. Sem isso, a demanda tende a entrar pouco qualificada.'
        },
        {
          question: 'Essa página é para venda B2B ou também atende residencial?',
          answer:
            'A estrutura pode apoiar os dois cenários, mas aqui o foco principal é a lógica consultiva e a geração de oportunidades comerciais com maior profundidade.'
        },
        {
          question: 'Que tipo de página uma empresa de energia solar precisa ter?',
          answer:
            'Precisa de páginas claras por solução, aplicação e contexto comercial, além de ativos que apoiem comparação e decisão.'
        },
        {
          question: 'Quanto tempo leva para SEO gerar demanda em energia solar?',
          answer:
            'Depende da base atual e da velocidade de execução. O importante é medir avanço em oportunidades qualificadas e não apenas sessões orgânicas.'
        },
        {
          question: 'Essa página compete com as páginas locais da vertical?',
          answer:
            'Não deve competir. A página nacional organiza a tese da vertical; as páginas locais traduzem isso para a intenção de contratação da praça.'
        },
        {
          question: 'Vale combinar essa frente com Google Meu Negócio?',
          answer:
            'Em alguns cenários locais, sim. Mas para muitas empresas do setor a camada principal está em páginas comerciais e arquitetura consultiva.'
        },
        {
          question: 'SEO ajuda a reduzir dependência de mídia paga no setor?',
          answer:
            'Ajuda quando a empresa passa a capturar mais demanda recorrente por solução, categoria e intenção de compra, sem depender só de campanhas.'
        },
        {
          question: 'Quando contratar consultoria SEO para energia solar faz mais sentido?',
          answer:
            'Quando a empresa quer estruturar melhor sua captação orgânica, gerar mais oportunidades qualificadas e transformar o site em um ativo comercial mais consistente.'
        }
      ],
      ctaTitle: 'QUER FAZER A SUA EMPRESA DE ENERGIA SOLAR GERAR MAIS DEMANDA ORGÂNICA?',
      ctaCopy:
        'Se hoje a operação depende demais de mídia paga ou prospecção, o melhor início é um diagnóstico comercial orientado a páginas, solução e geração de oportunidades qualificadas.',
      ctaPrimaryLabel: 'Solicitar diagnóstico para energia solar',
      ctaSecondaryPath: '/contato/',
      ctaSecondaryLabel: 'Falar com a AUDITSEO',
      areaServedName: 'Brasil',
      brief: requireBrief('/servicos/consultoria-seo-para-energia-solar/')
    },
    {
      slug: '/servicos/consultoria-seo-para-software-b2b/',
      seoTitle: 'Consultoria SEO para Software B2B | AUDITSEO',
      description:
        'Consultoria SEO para software B2B com foco em categoria, solução, comparação, autoridade e geração de demanda orgânica qualificada.',
      imagePath: '/images/agencia-de-seo.png',
      badge: 'Software B2B, Categoria e Busca Complexa',
      heroTitlePrefix: 'CONSULTORIA SEO PARA ',
      heroTitleAccent: 'SOFTWARE B2B',
      heroSubtitle:
        'Software B2B exige uma arquitetura que capture busca por categoria, problema, comparação e solução. Não basta ter uma página institucional elegante se o produto não é encontrado nos momentos certos da jornada.',
      highlights: ['Software B2B', 'Busca de Categoria', 'Demanda Consultiva', 'Comparação'],
      heroCard: {
        title: 'Quando software B2B perde tração orgânica',
        copy:
          'Quando o site fala muito de produto, mas pouco da intenção real de busca do comprador. Isso costuma enfraquecer categoria, comparação e páginas de solução.',
        links: [
          { label: 'Ver Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
          { label: 'Ver LLM Brand Presence', path: '/servicos/llm-brand-presence/', reason: 'Complemento relevante para descoberta assistida por IA.' },
          { label: 'Ver São Paulo', path: '/cidades/sao-paulo/', reason: 'Principal praça derivada já publicada.' }
        ]
      },
      stats: [
        { value: '1', label: 'Mercado complexo', copy: 'Busca por software B2B costuma envolver comparação, categoria e prova.' },
        { value: '3', label: 'Camadas de captura', copy: 'Problema, solução e categoria precisam ter páginas com função própria.' },
        { value: '0', label: 'Espaço para home genérica', copy: 'Home sozinha não sustenta descoberta para produto complexo.' },
        { value: '100%', label: 'Dependência de contexto', copy: 'Comprador B2B exige clareza, prova e leitura técnica da solução.' }
      ],
      marketCards: [
        {
          title: 'Categoria e comparação',
          copy:
            'O decisor B2B costuma pesquisar categoria, contexto de uso e alternativas antes de falar com vendas. A arquitetura precisa refletir isso com precisão.'
        },
        {
          title: 'Venda consultiva',
          copy:
            'A jornada é mais longa e menos impulsiva. O site precisa preparar comparação, confiança e narrativa comercial em múltiplas páginas.'
        },
        {
          title: 'Descoberta em IA e busca tradicional',
          copy:
            'Para software B2B, descoberta orgânica e presença em respostas de IA tendem a se reforçar quando a entidade e a solução estão bem estruturadas.'
        }
      ],
      coreOffer:
        'Consultoria SEO para software B2B, conectando busca de categoria, solução, comparação, presença em IA e derivação por praça com mais rigor.',
      painPoints: [
        'Baixa visibilidade para termos de categoria e solução.',
        'Site com copy técnica, mas sem malha comercial suficiente.',
        'Dependência de outbound e mídia paga para manter pipeline.',
        'Jornada comparativa sem páginas adequadas para suportar decisão.'
      ],
      deliveryItems: [
        'Arquitetura comercial para categoria, solução, casos de uso e comparação.',
        'Integração entre SEO consultivo e presença de marca em IA.',
        'Blocos de prova e FAQ para reduzir atrito no funil.',
        'Interlinking entre páginas de serviço, apoio editorial e ativos institucionais.',
        'Governança para crescer sem canibalizar categoria, vertical e praça.'
      ],
      methodSteps: [
        {
          title: 'Mapeamento de busca',
          copy: 'Levantamos como o mercado procura a categoria, os problemas e as soluções que o software resolve.'
        },
        {
          title: 'Arquitetura comercial',
          copy: 'Definimos o papel de páginas de categoria, solução, comparação e apoio editorial para construir descoberta útil.'
        },
        {
          title: 'Posicionamento do produto',
          copy: 'Ajustamos a mensagem para tornar a oferta mais compreensível, comparável e orientada à decisão.'
        },
        {
          title: 'Integração com IA',
          copy: 'Conectamos a base SEO à lógica de descoberta assistida por LLMs quando isso reforça a presença da marca.'
        },
        {
          title: 'Evolução por pipeline',
          copy: 'Usamos sinais de demanda, consultas e conversão para priorizar a próxima leva de páginas e conteúdos.'
        }
      ],
      differentiators: [
        'Leitura comercial adaptada a software B2B e SaaS.',
        'Integração entre SEO tradicional e descoberta assistida por IA.',
        'Arquitetura pensada para categoria, solução e comparação.',
        'Base preparada para derivar a vertical por praça sem usar a capital como página-mãe.'
      ],
      proofPoints: [
        'Serviço canônico de Consultoria SEO já publicado.',
        'Serviço de LLM Brand Presence já ativo.',
        'Página local de São Paulo já existente como principal derivação da vertical.',
        'Base institucional e metodológica da AUDITSEO já pública.'
      ],
      relatedLinks: [
        { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/', reason: 'Serviço canônico principal.' },
        { label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/', reason: 'Complemento estratégico de descoberta.' },
        { label: 'Consultoria SEO para software B2B em São Paulo', path: '/servicos/consultoria-seo-para-software-b2b-em-sao-paulo/', reason: 'Contexto geográfico principal e principal derivação local.' },
        { label: 'SEO para software B2B: como funciona', path: '/blog/seo-para-software-b2b-como-funciona/', reason: 'Apoio BOFU setorial para decisão.' },
        { label: 'Consultoria SEO para software B2B vale a pena?', path: '/blog/consultoria-seo-para-software-b2b-vale-a-pena/', reason: 'Artigo de ROI e maturidade comercial da vertical.' },
        { label: 'Quanto custa SEO para software B2B?', path: '/blog/quanto-custa-seo-para-software-b2b/', reason: 'Objeção de orçamento ligada à vertical.' },
        { label: 'Em quanto tempo SEO gera pipeline para software B2B?', path: '/blog/em-quanto-tempo-seo-gera-pipeline-para-software-b2b/', reason: 'Objeção de prazo ligada à geração de pipeline.' },
        { label: 'SEO para software B2B ou outbound?', path: '/blog/seo-para-software-b2b-ou-outbound/', reason: 'Comparação contra o motor de prospecção mais comum da vertical.' }
      ],
      faqItems: [
        {
          question: 'SEO funciona para software B2B?',
          answer:
            'Funciona quando a empresa estrutura corretamente categoria, solução, comparação e mensagem comercial. Produto complexo precisa de mais do que uma home bem escrita.'
        },
        {
          question: 'Qual a diferença entre SEO para software B2B e SEO genérico?',
          answer:
            'Software B2B exige leitura de busca mais comparativa, técnica e consultiva. A arquitetura precisa responder a uma jornada de decisão mais longa.'
        },
        {
          question: 'Essa estratégia serve para SaaS e software enterprise?',
          answer:
            'Serve para ambos, desde que a página reflita corretamente a complexidade da oferta, o ciclo de venda e a intenção principal de busca.'
        },
        {
          question: 'LLM Brand Presence entra junto nessa estratégia?',
          answer:
            'Em muitos casos, sim. Principalmente quando a marca quer aparecer melhor em respostas geradas por IA e reforçar descoberta em comparações complexas.'
        },
        {
          question: 'Que tipo de página um software B2B precisa publicar?',
          answer:
            'Normalmente precisa de páginas por categoria, solução, caso de uso, comparação e conteúdos de decisão que ajudem o comprador a avançar no funil.'
        },
        {
          question: 'Quanto tempo leva para SEO gerar demanda em software B2B?',
          answer:
            'Depende da base atual, da categoria e da competição. O correto é medir avanço em consultas qualificadas, pipeline assistido e influência no funil.'
        },
        {
          question: 'Essa página compete com as páginas locais da vertical?',
          answer:
            'Não deve competir. A página nacional apresenta a tese da vertical; as páginas locais traduzem a oferta para a praça e o contexto comercial específico.'
        },
        {
          question: 'Quando contratar consultoria SEO para software B2B faz mais sentido?',
          answer:
            'Quando a empresa quer construir uma base orgânica mais previsível, reduzir dependência de outbound e sustentar melhor a busca por categoria e solução.'
        }
      ],
      ctaTitle: 'QUER FAZER O SEU SOFTWARE B2B GANHAR MAIS DESCOBERTA ORGÂNICA?',
      ctaCopy:
        'Se o produto ainda depende demais de outbound ou mídia paga para sustentar pipeline, o melhor início é um diagnóstico comercial orientado a categoria, solução e demanda qualificada.',
      ctaPrimaryLabel: 'Solicitar diagnóstico para software B2B',
      ctaSecondaryPath: '/contato/',
      ctaSecondaryLabel: 'Falar com a AUDITSEO',
      areaServedName: 'Brasil',
      brief: requireBrief('/servicos/consultoria-seo-para-software-b2b/')
    }
  ];
}
