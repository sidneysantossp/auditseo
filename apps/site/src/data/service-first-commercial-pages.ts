import { saoPauloWaveOneCommercialBriefs, type CommercialPageBrief, type CommercialInternalLink } from './commercial-page-briefs';

interface PageStat {
  value: string;
  label: string;
  copy: string;
}

interface PageCard {
  title: string;
  copy: string;
}

interface PageFaq {
  question: string;
  answer: string;
}

interface PageStep {
  title: string;
  copy: string;
}

interface HeroCard {
  title: string;
  copy: string;
  links: CommercialInternalLink[];
}

export interface ServiceFirstCommercialPage {
  slug: string;
  seoTitle: string;
  description: string;
  imagePath: string;
  displayTitle?: string;
  badge: string;
  heroTitlePrefix: string;
  heroTitleAccent: string;
  heroTitleSuffix?: string;
  heroSubtitle: string;
  highlights: string[];
  heroCard: HeroCard;
  stats: PageStat[];
  marketCards: PageCard[];
  coreOffer?: string;
  painPoints?: string[];
  deliveryItems: string[];
  methodSteps: PageStep[];
  differentiators: string[];
  proofPoints: string[];
  relatedLinks: CommercialInternalLink[];
  faqItems: PageFaq[];
  ctaTitle: string;
  ctaCopy: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryPath: string;
  ctaSecondaryLabel: string;
  areaServedName: string;
  brief: CommercialPageBrief;
}

const briefMap = new Map(saoPauloWaveOneCommercialBriefs.map((brief) => [brief.slug, brief]));

function requireBrief(slug: string) {
  const brief = briefMap.get(slug);
  if (!brief) {
    throw new Error(`Brief comercial não encontrado para ${slug}`);
  }

  return brief;
}

export const serviceFirstCommercialPages: ServiceFirstCommercialPage[] = [
  {
    slug: '/servicos/seo-para-clinicas-medicas/',
    seoTitle: 'SEO para Clínicas Médicas | AUDITSEO',
    description:
      'SEO para clínicas médicas com foco em descoberta local, páginas comerciais, Google Maps e estrutura pronta para gerar contatos e agendamentos.',
    imagePath: '/images/google-meu-negocio.jpeg',
    badge: 'Saúde Privada e Busca Comercial',
    heroTitlePrefix: 'SEO PARA ',
    heroTitleAccent: 'CLÍNICAS MÉDICAS',
    heroSubtitle:
      'Clínicas médicas não precisam de volume vazio. Precisam de uma estrutura que conecte especialidades, descoberta local, Google Maps e páginas comerciais para transformar busca em contato.',
    highlights: ['SEO Local', 'Google Maps', 'Páginas Comerciais', 'Busca com Intenção'],
    heroCard: {
      title: 'Quando essa página faz sentido',
      copy:
        'Quando a clínica depende de pacientes pesquisando especialidades, sintomas, tratamentos e comparando opções no Google antes do contato.',
      links: [
        { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
        {
          label: 'Ver Google Meu Negócio',
          path: '/servicos/google-meu-negocio/',
          reason: 'Complemento crítico de descoberta local.'
        },
        {
          label: 'Ver contexto em São Paulo',
          path: '/cidades/sao-paulo/',
          reason: 'Cidade principal da primeira expansão.'
        }
      ]
    },
    stats: [
      { value: '1', label: 'Vertical-mãe', copy: 'Página principal da frente comercial de saúde.' },
      { value: '3', label: 'Entradas principais', copy: 'SEO local, GBP e páginas por especialidade.' },
      { value: '0', label: 'Espaço para genericidade', copy: 'Clínica não converte com texto genérico.' },
      { value: '100%', label: 'Dependência de contexto', copy: 'Mensagem, confiança e geografia importam.' }
    ],
    marketCards: [
      {
        title: 'Demanda por especialidade',
        copy:
          'Pacientes pesquisam especialidade, tratamento, sintomas e comparações. Sem páginas preparadas, a clínica perde demanda orgânica pronta para converter.'
      },
      {
        title: 'Descoberta local e reputação',
        copy:
          'O paciente não avalia só o site. Ele confronta perfil no Google, localização, prova, clareza de serviço e facilidade de contato.'
      },
      {
        title: 'Confiança clínica',
        copy:
          'Em saúde, a página comercial precisa equilibrar critério, clareza e intenção comercial sem inflar promessas nem cair em texto institucional vago.'
      }
    ],
    deliveryItems: [
      'Arquitetura de páginas para especialidades, tratamentos e unidades.',
      'Reforço entre página comercial, SEO local e Google Maps.',
      'Blocos de FAQ para dúvidas reais de decisão e comparação.',
      'Interlinking entre serviço principal, cidade e conteúdos BOFU.',
      'Critérios de E-E-A-T, confiança e rastreabilidade editorial.'
    ],
    methodSteps: [
      {
        title: 'Diagnóstico comercial',
        copy: 'Mapeamos como a clínica é encontrada hoje, onde perde visibilidade e quais páginas deveriam existir para fechar melhor a busca.'
      },
      {
        title: 'Arquitetura de serviços',
        copy: 'Definimos a hierarquia entre página setorial, páginas locais e páginas de serviço sem canibalizar a intenção principal.'
      },
      {
        title: 'Conteúdo BOFU',
        copy: 'Produzimos páginas e FAQs para custo, prazo, diferenciais, especialidades e dúvidas que antecedem o agendamento.'
      },
      {
        title: 'Descoberta local',
        copy: 'Alinhamos Google Meu Negócio, sinais locais, endereço, proximidade e consistência da entidade da clínica.'
      },
      {
        title: 'Acompanhamento',
        copy: 'Revisamos desempenho, consultas que geram negócio e próximas páginas a publicar com base em demanda real.'
      }
    ],
    differentiators: [
      'Foco em páginas comerciais e não apenas tráfego.',
      'Leitura integrada de site, GBP, FAQ e descoberta local.',
      'Arquitetura pensada para escalar por cidade sem doorway pages.',
      'Base técnica compatibilizada com IA, E-E-A-T e rastreabilidade.'
    ],
    proofPoints: [
      'Página de metodologia pública.',
      'Página do autor com especialidade declarada.',
      'Serviço canônico de SEO Local já publicado.',
      'Conteúdos BOFU e locais planejados para suportar a jornada de decisão.'
    ],
    relatedLinks: [
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal da vertical.' },
      {
        label: 'Google Meu Negócio',
        path: '/servicos/google-meu-negocio/',
        reason: 'Complemento local importante para clínicas.'
      },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico prioritário da Onda 1.' },
      {
        label: 'Hub setorial de clínicas médicas',
        path: '/nichos/clinicas-medicas/',
        reason: 'Leitura setorial de apoio, sem competir com a URL comercial.'
      },
      { label: 'Quanto custa SEO', path: '/blog/quanto-custa-seo/', reason: 'Artigo vivo de decisão comercial.' },
      {
        label: 'Guia de Google Meu Negócio',
        path: '/blog/google-meu-negocio-guia-completo/',
        reason: 'Apoio sobre descoberta local e GBP.'
      }
    ],
    faqItems: [
      {
        question: 'SEO para clínicas médicas funciona mesmo sem blog grande?',
        answer:
          'Funciona quando a clínica tem páginas comerciais, estrutura local, FAQs e mensagem clara. O blog ajuda, mas não substitui a camada comercial.'
      },
      {
        question: 'Qual a diferença entre essa página e SEO local para clínicas?',
        answer:
          'Esta página organiza a tese setorial da clínica. A página local entra quando a intenção comercial depende explicitamente da cidade ou região.'
      },
      {
        question: 'Google Meu Negócio faz parte do trabalho para clínicas médicas?',
        answer:
          'Na maioria dos casos, sim. Clínicas dependem de busca local, mapa, rota, ligação e comparação rápida. Ignorar GBP enfraquece a descoberta.'
      },
      {
        question: 'Em quanto tempo SEO pode gerar resultado para uma clínica?',
        answer:
          'Depende da estrutura atual, da concorrência e da capacidade de corrigir páginas, entidade local e conteúdo de decisão. O importante é medir as consultas que geram contato, não apenas tráfego.'
      },
      {
        question: 'Essa página substitui páginas de especialidade?',
        answer:
          'Não. Ela organiza a vertical comercial da clínica. Páginas de especialidade entram quando existe demanda real e diferença clara de mensagem.'
      },
      {
        question: 'Quando contratar SEO para clínicas médicas faz mais sentido?',
        answer:
          'Quando a clínica depende de descoberta orgânica e local para crescer, percebe baixa visibilidade no Google e precisa de uma estrutura comercial mais forte.'
      },
      {
        question: 'SEO local ou páginas por especialidade: o que deve vir primeiro?',
        answer:
          'Na maioria dos casos, os dois precisam caminhar juntos. SEO local sustenta a descoberta por geografia, enquanto páginas por especialidade capturam a intenção de quem já sabe o que procura.'
      },
      {
        question: 'Essa estratégia serve para clínicas com mais de uma unidade?',
        answer:
          'Serve, desde que a arquitetura separe corretamente a página setorial, as páginas por cidade ou unidade e os ativos locais de cada operação. O erro comum é concentrar tudo em uma única página genérica.'
      }
    ],
    ctaTitle: 'QUER VALIDAR A ESTRUTURA COMERCIAL DA SUA CLÍNICA?',
    ctaCopy:
      'Se a clínica depende de descoberta local, comparação no Google e páginas que precisam gerar contato, a melhor entrada é um diagnóstico comercial orientado a estrutura.',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'Brasil',
    brief: requireBrief('/servicos/seo-para-clinicas-medicas/')
  },
  {
    slug: '/servicos/seo-para-dermatologistas/',
    seoTitle: 'SEO para Dermatologistas | AUDITSEO',
    description:
      'SEO para dermatologistas com foco em busca local, tratamentos, páginas comerciais e descoberta qualificada para clínicas e especialistas.',
    imagePath: '/images/seo.jpeg',
    badge: 'Especialidade Médica de Alta Competição',
    heroTitlePrefix: 'SEO PARA ',
    heroTitleAccent: 'DERMATOLOGISTAS',
    heroSubtitle:
      'Dermatologia exige página comercial precisa, descoberta local forte e conteúdo capaz de explicar tratamentos e diferenciais sem virar texto vazio. E um mercado em que contexto e clareza decidem o contato.',
    highlights: ['Dermatologia', 'Busca Local', 'Tratamentos', 'Conversão Qualificada'],
    heroCard: {
      title: 'Onde dermatologia mais perde demanda',
      copy:
        'Em páginas vagas, sem contexto de tratamento, sem reforço local e sem articulação entre o site, o mapa e a jornada de decisão do paciente.',
      links: [
        { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
        { label: 'Ver Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Maps e local pack.' },
        {
          label: 'Ver hub setorial',
          path: '/nichos/dermatologistas/',
          reason: 'Contexto setorial de apoio já publicado.'
        }
      ]
    },
    stats: [
      { value: '1', label: 'Especialidade premium', copy: 'Mercado com maior exigência de mensagem e prova.' },
      { value: '4', label: 'Sinais críticos', copy: 'Tratamento, local, reputação e contexto comercial.' },
      { value: '0', label: 'Margem para ruído', copy: 'Genericidade derruba descoberta e confiança.' },
      { value: '100%', label: 'Dependência de clareza', copy: 'Paciente precisa entender o próximo passo.' }
    ],
    marketCards: [
      {
        title: 'Busca por tratamento',
        copy:
          'O paciente pesquisa procedimentos, sintomas e possibilidades antes de escolher a clínica. A página precisa sustentar essa leitura com precisão.'
      },
      {
        title: 'Mercado local denso',
        copy:
          'Dermatologistas disputam bairros, cidades e comparação rápida no mapa. Sem reforço local, a clínica perde uma parte crítica da demanda.'
      },
      {
        title: 'Confiança sem exagero',
        copy:
          'A copy precisa vender com responsabilidade. Em dermatologia, prometer demais ou generalizar demais enfraquece a leitura da marca.'
      }
    ],
    deliveryItems: [
      'Arquitetura de páginas para tratamentos, especialidade e localização.',
      'Alinhamento entre busca por procedimento e contexto de decisão.',
      'FAQ comercial e técnico para dúvidas recorrentes do paciente.',
      'Conexão entre SEO local, Google Meu Negócio e páginas da clínica.',
      'Reforço de autoridade sem depender apenas de conteúdo informativo.'
    ],
    methodSteps: [
      {
        title: 'Leitura da demanda',
        copy: 'Mapeamos as buscas com maior potencial comercial e os tratamentos que justificam página própria.'
      },
      {
        title: 'Estrutura setorial',
        copy: 'Definimos como a vertical de dermatologia se ancora no serviço principal sem disputar a mesma intenção da página local.'
      },
      {
        title: 'Páginas BOFU',
        copy: 'Criamos páginas e FAQs para capturar comparação, objeções e sinais de prontidão para consulta.'
      },
      {
        title: 'Descoberta urbana',
        copy: 'Tratamos a camada local e a leitura do Google Maps como parte da conversão, não como tarefa separada.'
      },
      {
        title: 'Evolução',
        copy: 'Usamos desempenho comercial e sinais de busca para priorizar novas páginas, cidades e FAQs.'
      }
    ],
    differentiators: [
      'Entendimento de especialidade médica e busca por procedimento.',
      'Operação integrada entre página comercial e SEO local.',
      'Disciplina editorial para não transformar a página em texto promocional vazio.',
      'Arquitetura pronta para derivações por cidade quando houver demanda.'
    ],
    proofPoints: [
      'Página setorial de dermatologistas já existente como apoio cluster.',
      'Página de metodologia e página do autor públicas.',
      'Serviço canônico de SEO Local e Google Meu Negócio ativos.',
      'Artigos BOFU planejados para custo, valor e GBP.'
    ],
    relatedLinks: [
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal da vertical.' },
      {
        label: 'Google Meu Negócio',
        path: '/servicos/google-meu-negocio/',
        reason: 'Maps e local pack fazem parte da descoberta.'
      },
      {
        label: 'Hub setorial de dermatologistas',
        path: '/nichos/dermatologistas/',
        reason: 'Página de apoio editorial e setorial.'
      },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Principal cidade da expansão inicial.' },
      {
        label: 'Guia de Google Meu Negócio',
        path: '/blog/google-meu-negocio-guia-completo/',
        reason: 'Leitura útil para descoberta local.'
      },
      { label: 'Como escolher agência SEO', path: '/blog/como-escolher-agencia-seo/', reason: 'Apoio de decisão comercial.' }
    ],
    faqItems: [
      {
        question: 'SEO para dermatologistas é diferente de uma clínica médica mais ampla?',
        answer:
          'Sim. Dermatologia concentra busca por tratamentos e forte comparação local, o que exige uma arquitetura de página e uma copy comercial mais específicas.'
      },
      {
        question: 'Vale criar página por tratamento em dermatologia?',
        answer:
          'Vale quando existe demanda real, contexto próprio e capacidade de responder melhor a intenção do paciente. Não deve ser feito por volume.'
      },
      {
        question: 'SEO local basta para dermatologistas?',
        answer:
          'Não sozinho. A descoberta local é fundamental, mas ela precisa de páginas comerciais, FAQ, mensagem certa e ligação com o perfil da empresa.'
      },
      {
        question: 'Google Meu Negócio entra junto nessa estratégia?',
        answer:
          'Na maior parte dos casos, sim. Para dermatologia, mapa, avaliação e consistência de perfil costumam pesar bastante na comparação local.'
      },
      {
        question: 'Quanto tempo leva para uma clínica dermatológica sentir melhora?',
        answer:
          'Depende do estado atual do site, da organização das páginas e do nível de concorrência local. A referência correta é ganho em descoberta qualificada, não apenas posição isolada.'
      },
      {
        question: 'Quando contratar SEO para dermatologistas faz sentido?',
        answer:
          'Quando o negócio depende de busca orgânica e local para crescer, precisa melhorar a leitura comercial das páginas e quer captar demanda mais qualificada.'
      },
      {
        question: 'Dermatologia clínica e estética devem ficar na mesma página?',
        answer:
          'Nem sempre. Se a intenção de busca, a mensagem comercial e o perfil de tratamento forem diferentes, vale separar as páginas para responder melhor o que o paciente está comparando.'
      },
      {
        question: 'Vale investir em conteúdo antes de estruturar as páginas comerciais?',
        answer:
          'Não como prioridade. Primeiro a clínica precisa da base comercial correta. Depois o conteúdo entra para aprofundar decisões, responder objeções e ampliar a cobertura de tratamentos e dúvidas.'
      }
    ],
    ctaTitle: 'PRECISA FORTALECER A DESCOBERTA DA SUA CLÍNICA DERMATOLÓGICA?',
    ctaCopy:
      'Se o problema hoje é ser encontrado por tratamentos, comparado melhor no mapa e converter busca em contato, a entrada correta é um diagnóstico comercial da vertical.',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'Brasil',
    brief: requireBrief('/servicos/seo-para-dermatologistas/')
  },
  {
    slug: '/servicos/seo-para-odontologia/',
    seoTitle: 'SEO para Odontologia | AUDITSEO',
    description:
      'SEO para odontologia com foco em descoberta local, Google Maps, páginas por procedimento e estrutura comercial para gerar mais consultas.',
    imagePath: '/images/google-meu-negocio.jpeg',
    badge: 'Odontologia, Busca Local e Conversão',
    heroTitlePrefix: 'SEO PARA ',
    heroTitleAccent: 'ODONTOLOGIA',
    heroSubtitle:
      'Odontologia depende de busca local, comparação rápida e páginas que expliquem procedimentos sem perder objetividade comercial. A estratégia precisa ser comercial e geográfica ao mesmo tempo.',
    highlights: ['Odontologia', 'Google Maps', 'Procedimentos', 'Busca de Proximidade'],
    heroCard: {
      title: 'Quando odontologia vira prioridade',
      copy:
        'Quando a clínica depende de buscas por procedimento, localização e decisão rápida e não consegue transformar o Google em consultas consistentes.',
      links: [
        { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
        { label: 'Ver Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Ativo de mapa e descoberta.' },
        {
          label: 'Ver contexto em São Paulo',
          path: '/cidades/sao-paulo/',
          reason: 'Cidade principal da primeira expansão.'
        }
      ]
    },
    stats: [
      { value: '1', label: 'Vertical local forte', copy: 'Odontologia converte bem quando a busca encontra contexto e proximidade.' },
      { value: '3', label: 'Camadas principais', copy: 'Procedimento, geografia e confiança.' },
      { value: '0', label: 'Espaço para página vaga', copy: 'Texto institucional amplo não sustenta a decisão.' },
      { value: '24/7', label: 'Busca recorrente', copy: 'A demanda aparece ao longo de toda a jornada do paciente.' }
    ],
    marketCards: [
      {
        title: 'Busca por procedimento',
        copy:
          'Pacientes pesquisam limpeza, implante, alinhadores, ortodontia e urgências. Sem páginas comerciais boas, a clínica perde intenção pronta.'
      },
      {
        title: 'Maps pesa muito',
        copy:
          'Em odontologia, localização, horário, avaliação e facilidade de contato pesam bastante na comparação do paciente.'
      },
      {
        title: 'Decisao rápida',
        copy:
          'Muitas consultas acontecem depois de uma busca objetiva. A página precisa ajudar o paciente a entender serviço, local e próximo passo.'
      }
    ],
    deliveryItems: [
      'Arquitetura de páginas para procedimentos com potencial comercial real.',
      'Conexão entre site, SEO local e GBP para reforçar descoberta.',
      'FAQs para custo, prazo, preparo e objeções de consulta.',
      'Página setorial pronta para derivacoes locais e comparativas.',
      'Mediação entre clareza comercial e confiança do conteúdo.'
    ],
    methodSteps: [
      {
        title: 'Mapeamento de demanda',
        copy: 'Identificamos procedimentos, consultas e buscas com maior potencial de gerar agenda real.'
      },
      {
        title: 'Arquitetura comercial',
        copy: 'Definimos como a página setorial se relaciona com SEO local, Google Meu Negócio e futuras páginas geográficas.'
      },
      {
        title: 'Conteúdo de decisão',
        copy: 'Construímos páginas e FAQs que ajudam o paciente a comparar, entender o serviço e agir.'
      },
      {
        title: 'Reforço local',
        copy: 'Tratamos mapa, proximidade e consistência local como parte da experiência comercial da clínica.'
      },
      {
        title: 'Expansão controlada',
        copy: 'A partir dos sinais de negócio, abrimos novas cidades e combinações sem criar massa de páginas iguais.'
      }
    ],
    differentiators: [
      'Foco em agenda e demanda comercial, não apenas tráfego.',
      'Visão integrada de página, procedimento, mapa e comparação.',
      'Framework replicável por cidade sem doorway pages.',
      'Base técnica alinhada a SEO local, schema e IA.'
    ],
    proofPoints: [
      'Serviço canônico de SEO Local e Google Meu Negócio publicados.',
      'Página de metodologia e contato institucional ativos.',
      'Artigos BOFU planejados para funcionamento e GBP.',
      'Estrutura pronta para expandir para São Paulo como primeira cidade.'
    ],
    relatedLinks: [
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal da vertical.' },
      {
        label: 'Google Meu Negócio',
        path: '/servicos/google-meu-negocio/',
        reason: 'Maps e descoberta local fazem parte da jornada.'
      },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Cidade prioritária da Onda 1.' },
      { label: 'Quanto custa SEO', path: '/blog/quanto-custa-seo/', reason: 'Apoio de decisão comercial.' },
      {
        label: 'Guia de Google Meu Negócio',
        path: '/blog/google-meu-negocio-guia-completo/',
        reason: 'Leitura sobre GBP e local pack.'
      }
    ],
    faqItems: [
      {
        question: 'SEO para odontologia funciona melhor com foco local?',
        answer:
          'Na maior parte dos casos, sim. Odontologia costuma depender bastante de busca por proximidade, mapa, horário e comparação rápida.'
      },
      {
        question: 'Qual a diferença entre essa página e a página local de São Paulo?',
        answer:
          'Esta página organiza a oferta para odontologia como vertical. A página local traduz essa mesma lógica para uma geografia específica.'
      },
      {
        question: 'Google Meu Negócio é indispensável para odontologia?',
        answer:
          'Em geral, sim. Maps, ligações, rotas e descoberta imediata costumam ser parte importante da jornada do paciente odontológico.'
      },
      {
        question: 'Vale criar página por procedimento em odontologia?',
        answer:
          'Vale quando existe busca real e capacidade de diferenciar a abordagem. Não vale abrir muitas páginas parecidas só para inflar inventário.'
      },
      {
        question: 'Quanto tempo leva para SEO gerar resultado para odontologia?',
        answer:
          'Depende da estrutura atual do site, do perfil local e da competitividade da cidade. A leitura correta é ganho em visibilidade e consultas qualificadas.'
      },
      {
        question: 'Quando contratar SEO para odontologia faz sentido?',
        answer:
          'Quando a clínica quer reduzir dependência de canais pagos, fortalecer descoberta no Google e criar páginas que gerem mais contato e agenda.'
      },
      {
        question: 'Odontologia precisa de páginas por procedimento para performar melhor?',
        answer:
          'Quando existe busca real e diferença clara entre os procedimentos, sim. Implante, ortodontia, alinhadores e urgência costumam exigir páginas próprias para capturar intenção comercial com mais precisão.'
      },
      {
        question: 'Essa estratégia ajuda a reduzir dependência de mídia paga?',
        answer:
          'Sim, quando a clínica passa a gerar descoberta orgânica recorrente por procedimento, localidade e marca. O objetivo não é excluir mídia paga imediatamente, mas diminuir dependência e elevar a previsibilidade.'
      }
    ],
    ctaTitle: 'QUER FAZER O GOOGLE GERAR MAIS CONSULTAS PARA SUA CLÍNICA?',
    ctaCopy:
      'Se a odontologia depende de busca por proximidade, procedimento e comparação local, a melhor entrada é um diagnóstico comercial com foco em estrutura, mapa e conversão.',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'Brasil',
    brief: requireBrief('/servicos/seo-para-odontologia/')
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/',
    seoTitle: 'SEO Local para Clínicas Médicas em São Paulo | AUDITSEO',
    description:
      'SEO local para clínicas médicas em São Paulo com foco em Google Maps, demanda por especialidade, páginas comerciais e captação qualificada na capital.',
    imagePath: '/images/google-meu-negocio.jpeg',
    displayTitle: 'SEO Local para Clínicas Médicas em São Paulo',
    badge: 'São Paulo, Saúde e Busca Local',
    heroTitlePrefix: 'SEO LOCAL PARA ',
    heroTitleAccent: 'CLÍNICAS MÉDICAS',
    heroTitleSuffix: 'EM SÃO PAULO',
    heroSubtitle:
      'Em São Paulo, a clínica não disputa só presença orgânica. Disputa bairro, mapa, especialidade, confiança e rapidez de decisão. A estrutura local precisa responder a esse nível de competição.',
    highlights: ['São Paulo Capital', 'SEO Local', 'Google Maps', 'Especialidades Médicas'],
    heroCard: {
      title: 'Quando a capital muda o jogo',
      copy:
        'Quando a clínica já compete em uma das praças mais disputadas do país e precisa conectar páginas comerciais, entidade local, perfil no Google e contexto por especialidade.',
      links: [
        { label: 'Ver página setorial', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Base comercial da vertical.' },
        { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
        { label: 'Ver contexto da cidade', path: '/cidades/sao-paulo/', reason: 'Página local de apoio.' }
      ]
    },
    stats: [
      { value: '1', label: 'Praça crítica', copy: 'São Paulo exige leitura local mais precisa que a média.' },
      { value: '4', label: 'Sinais de decisão', copy: 'Localização, especialidade, reputação e clareza comercial.' },
      { value: '0', label: 'Espaço para ruído', copy: 'Página vaga não sustenta descoberta na capital.' },
      { value: '24/7', label: 'Busca ativa', copy: 'A demanda local acontece o dia inteiro e em diferentes bairros.' }
    ],
    marketCards: [
      {
        title: 'Disputa por bairro e região',
        copy:
          'A capital fragmenta a busca por zona, bairro e deslocamento. Sem leitura geográfica real, a clínica perde relevância mesmo quando oferece o serviço certo.'
      },
      {
        title: 'Maps e confiança imediata',
        copy:
          'Em São Paulo, o mapa participa da decisão desde o primeiro clique. Perfil, rota, proximidade e consistência com o site pesam mais cedo na jornada.'
      },
      {
        title: 'Especialidade com contexto local',
        copy:
          'Não basta falar da clínica. A página local precisa mostrar por que a operação faz sentido para quem está pesquisando naquela praça específica.'
      }
    ],
    coreOffer:
      'Operação de SEO local para clínicas médicas em São Paulo, conectando páginas comerciais, Google Maps, especialidades e descoberta por geografia.',
    painPoints: [
      'Baixa visibilidade em buscas locais dentro da capital.',
      'Site sem páginas comerciais fortes para especialidades e tratamentos.',
      'Google Maps sem integração real com o site.',
      'Tráfego orgânico que não vira contato qualificado.'
    ],
    deliveryItems: [
      'Arquitetura local alinhada à lógica da capital e à jornada do paciente.',
      'Conexão entre páginas comerciais, bairro, especialidade e Google Maps.',
      'FAQ comercial para objeções de contato, comparação e localização.',
      'Interlinking entre página setorial, serviço canônico e cidade.',
      'Critérios de prova e confiança para uma praça de alta concorrência.'
    ],
    methodSteps: [
      {
        title: 'Leitura da praça',
        copy: 'Mapeamos como a clínica aparece hoje por bairro, zona, especialidade e contexto local dentro da capital.'
      },
      {
        title: 'Arquitetura local',
        copy: 'Definimos o papel da página de São Paulo sem disputar a mesma intenção da página setorial nem cair em repetição geográfica.'
      },
      {
        title: 'Páginas de decisão',
        copy: 'Ajustamos a leitura comercial para paciente, especialidade, proximidade e contato.'
      },
      {
        title: 'Maps e consistência',
        copy: 'Tratamos Google Meu Negócio, dados da entidade, localização e reforço comercial como um mesmo sistema.'
      },
      {
        title: 'Escala com controle',
        copy: 'Usamos desempenho real para decidir quando abrir novas combinações por tratamento, unidade ou região.'
      }
    ],
    differentiators: [
      'Leitura real de concorrência local na capital.',
      'Arquitetura feita para clínica, não para página geográfica genérica.',
      'Integração entre site, GBP e demanda por especialidade.',
      'Escala preparada sem doorway pages.'
    ],
    proofPoints: [
      'Página setorial de clínicas médicas já publicada.',
      'Serviço canônico de SEO Local ativo.',
      'Página de São Paulo publicada como suporte geográfico.',
      'Base editorial da AUDITSEO pronta para reforçar decisão comercial.'
    ],
    relatedLinks: [
      { label: 'SEO para Clínicas Médicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Página setorial-mãe da vertical.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
      { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Ativo complementar de descoberta local.' },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
      { label: 'Quanto custa SEO', path: '/blog/quanto-custa-seo/', reason: 'Apoio de decisão comercial.' }
    ],
    faqItems: [
      {
        question: 'SEO local para clínicas médicas em São Paulo funciona mesmo em uma praça muito concorrida?',
        answer:
          'Funciona quando a clínica estrutura página, perfil local, especialidades e mensagem comercial de forma integrada. O erro comum é tentar competir só com texto institucional genérico.'
      },
      {
        question: 'O que muda entre SEO para clínicas médicas e a página local de São Paulo?',
        answer:
          'A página setorial organiza a tese comercial da vertical. A página local traduz essa tese para a concorrência, o comportamento de busca e a geografia da capital.'
      },
      {
        question: 'Google Meu Negócio entra junto nessa estratégia?',
        answer:
          'Na maioria dos casos, sim. Em São Paulo, mapa, rota, proximidade e comparação rápida costumam pesar cedo na jornada do paciente.'
      },
      {
        question: 'Vale abrir páginas por bairro dentro da capital?',
        answer:
          'Só quando existe diferença real de intenção, operação ou unidade. Abrir páginas parecidas só para multiplicar geografia costuma gerar ruído, não vantagem.'
      },
      {
        question: 'Quanto tempo leva para melhorar a descoberta local em São Paulo?',
        answer:
          'Depende da estrutura atual, do histórico da marca e do nível de competição na especialidade. O foco correto é aumento de consultas qualificadas e não só posição isolada.'
      },
      {
        question: 'Essa página substitui páginas por especialidade?',
        answer:
          'Não. A página local organiza a geografia principal. As páginas por especialidade entram quando existe demanda própria e diferença clara de mensagem.'
      },
      {
        question: 'Serve para clínicas com mais de uma unidade?',
        answer:
          'Serve, desde que cada unidade tenha papel definido dentro da arquitetura local. O problema começa quando todas as localidades são empilhadas na mesma página.'
      },
      {
        question: 'Quando faz sentido contratar SEO local para clínicas médicas em São Paulo?',
        answer:
          'Quando a clínica quer reduzir dependência de mídia paga, melhorar descoberta no mapa e converter melhor buscas de pacientes que já estão prontos para contato.'
      }
    ],
    ctaTitle: 'QUER MELHORAR A DESCOBERTA LOCAL DA SUA CLÍNICA EM SÃO PAULO?',
    ctaCopy:
      'Se a operação depende da capital para gerar demanda e hoje o Google não está trazendo a qualidade de contato esperada, a melhor entrada é um diagnóstico comercial orientado a SEO local.',
    ctaPrimaryLabel: 'Solicitar diagnóstico local em São Paulo',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'São Paulo',
    brief: requireBrief('/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/')
  },
  {
    slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/',
    seoTitle: 'Google Meu Negócio para Clínicas Médicas em São Paulo | AUDITSEO',
    description:
      'Google Meu Negócio para clínicas médicas em São Paulo com foco em Maps, perfil da empresa, consistência local e geração de contatos mais qualificados.',
    imagePath: '/images/google-meu-negocio.jpeg',
    displayTitle: 'Google Meu Negócio para Clínicas Médicas em São Paulo',
    badge: 'Maps, GBP e Saúde Privada',
    heroTitlePrefix: 'GOOGLE MEU NEGÓCIO PARA ',
    heroTitleAccent: 'CLÍNICAS MÉDICAS',
    heroTitleSuffix: 'EM SÃO PAULO',
    heroSubtitle:
      'Na capital, o perfil da empresa não é detalhe. Ele participa da comparação, da rota, da ligação e da confiança inicial. O trabalho precisa alinhar mapa, reputação e páginas comerciais.',
    highlights: ['Google Maps', 'GBP', 'São Paulo Capital', 'Conversão Local'],
    heroCard: {
      title: 'Quando o mapa vira gargalo',
      copy:
        'Quando a clínica até existe no Google, mas não transforma presença em ligação, rota e contato. Sem integração com o site, o perfil perde força comercial.',
      links: [
        { label: 'Ver Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
        { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Complemento estrutural.' },
        { label: 'Ver São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto da praça prioritária.' }
      ]
    },
    stats: [
      { value: '1', label: 'Perfil crítico', copy: 'O mapa costuma ser a primeira camada de comparação.' },
      { value: '3', label: 'Ações-chave', copy: 'Ligação, rota e clique para o site.' },
      { value: '0', label: 'Espaço para inconsistência', copy: 'Perfil desorganizado enfraquece a descoberta.' },
      { value: '100%', label: 'Dependência de contexto', copy: 'O perfil precisa refletir a oferta real da clínica.' }
    ],
    marketCards: [
      {
        title: 'Comparação instantânea',
        copy:
          'O paciente compara clínica, avaliação, localização e conveniência em segundos. Um perfil fraco perde disputa antes mesmo do clique no site.'
      },
      {
        title: 'Integração com o site',
        copy:
          'Google Meu Negócio performa melhor quando existe uma página comercial consistente sustentando o contexto da oferta e da localização.'
      },
      {
        title: 'Concorrência local intensa',
        copy:
          'Em São Paulo, pequenas inconsistências de perfil, categoria, prova ou mensagem podem fazer diferença na disputa local.'
      }
    ],
    coreOffer:
      'Estruturação de Google Meu Negócio para clínicas médicas em São Paulo, conectando perfil, página comercial e sinais de descoberta local.',
    painPoints: [
      'Perfil no Google sem estratégia clara de conversão.',
      'Informações inconsistentes entre site, mapa e oferta comercial.',
      'Baixa geração de rotas, ligações e contatos.',
      'Pouca força do perfil na comparação local da capital.'
    ],
    deliveryItems: [
      'Diagnóstico do perfil e da leitura comercial no mapa.',
      'Ajuste entre Google Meu Negócio, página local e página setorial.',
      'Refino de sinais de entidade, prova e consistência local.',
      'Blocos de FAQ e interlinking para reforçar intenção comercial.',
      'Plano de evolução do perfil conectado ao site.'
    ],
    methodSteps: [
      {
        title: 'Diagnóstico do perfil',
        copy: 'Lemos como a clínica aparece no mapa, onde perde clique e quais sinais estão desalinhados com a oferta real.'
      },
      {
        title: 'Alinhamento comercial',
        copy: 'Conectamos o perfil à página local e à página setorial para que o paciente encontre a mesma mensagem nas diferentes camadas.'
      },
      {
        title: 'Reforço de conversão',
        copy: 'Tratamos clique, rota, ligação e prova como parte do mesmo sistema de descoberta local.'
      },
      {
        title: 'Consistência operacional',
        copy: 'Ajustamos os pontos que mais geram ruído entre mapa, site e expectativa do paciente.'
      },
      {
        title: 'Monitoramento',
        copy: 'Acompanhamos os sinais que mostram se o perfil está atraindo demanda mais qualificada.'
      }
    ],
    differentiators: [
      'Leitura de GBP integrada à arquitetura comercial do site.',
      'Foco em conversão local, não só em visibilidade do perfil.',
      'Estrutura pensada para uma praça densa como São Paulo.',
      'Conexão entre entidade, páginas e intenção de contato.'
    ],
    proofPoints: [
      'Serviço canônico de Google Meu Negócio já publicado.',
      'Página setorial de clínicas médicas já ativa.',
      'Página de São Paulo como suporte geográfico.',
      'Camada de conteúdo BOFU pronta para sustentar decisão comercial.'
    ],
    relatedLinks: [
      { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Base estrutural da descoberta local.' },
      { label: 'SEO para Clínicas Médicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Página setorial-mãe.' },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
      { label: 'Guia de Google Meu Negócio', path: '/blog/google-meu-negocio-guia-completo/', reason: 'Conteúdo de apoio sobre GBP.' }
    ],
    faqItems: [
      {
        question: 'Google Meu Negócio sozinho resolve a descoberta da clínica em São Paulo?',
        answer:
          'Não. O perfil ajuda muito, mas precisa de páginas comerciais e sinais consistentes no site para sustentar a leitura da oferta e da localização.'
      },
      {
        question: 'Qual a diferença entre essa página e SEO local para clínicas médicas em São Paulo?',
        answer:
          'Aqui o foco é o perfil da empresa e sua capacidade de gerar comparação, rota e ligação. A página de SEO local cobre a estrutura mais ampla do site e da presença orgânica.'
      },
      {
        question: 'Em São Paulo, o mapa pesa mais do que o site?',
        answer:
          'Na prática, os dois trabalham juntos. O mapa costuma entrar primeiro, mas a confiança e a continuidade da decisão dependem de páginas comerciais bem estruturadas.'
      },
      {
        question: 'Vale tratar cada unidade da clínica separadamente?',
        answer:
          'Quando existem operações e buscas próprias por unidade, sim. O importante é não misturar tudo em um único perfil ou em páginas sem diferença real.'
      },
      {
        question: 'Quanto tempo leva para perceber melhora no perfil?',
        answer:
          'Depende da base atual, da consistência do perfil e da força das páginas de apoio. O ponto central é medir melhora em interações qualificadas, não só em visualizações.'
      },
      {
        question: 'Avaliações fazem parte dessa estratégia?',
        answer:
          'Fazem parte do contexto de confiança, mas não são o único fator. Sem boa arquitetura comercial no site, a avaliação sozinha não sustenta a conversão.'
      },
      {
        question: 'A página do site interfere no mapa?',
        answer:
          'Sim. O Google usa sinais da página para entender melhor a oferta, a localização e a consistência da entidade da clínica.'
      },
      {
        question: 'Quando contratar esse serviço faz sentido?',
        answer:
          'Quando a clínica depende fortemente de Maps e quer transformar a presença local em contato mais previsível e qualificado na capital.'
      }
    ],
    ctaTitle: 'QUER FAZER O MAPA GERAR MAIS CONTATOS PARA SUA CLÍNICA?',
    ctaCopy:
      'Se o perfil da clínica hoje não está sustentando a descoberta local como deveria, a melhor entrada é um diagnóstico de Google Meu Negócio orientado a estrutura comercial.',
    ctaPrimaryLabel: 'Solicitar diagnóstico de GBP em São Paulo',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'São Paulo',
    brief: requireBrief('/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/')
  },
  {
    slug: '/servicos/seo-local-para-dermatologistas-em-sao-paulo/',
    seoTitle: 'SEO Local para Dermatologistas em São Paulo | AUDITSEO',
    description:
      'SEO local para dermatologistas em São Paulo com foco em tratamentos, competição urbana, Google Maps e páginas comerciais de alta intenção.',
    imagePath: '/images/seo.jpeg',
    displayTitle: 'SEO Local para Dermatologistas em São Paulo',
    badge: 'Dermatologia, Capital e Alta Concorrência',
    heroTitlePrefix: 'SEO LOCAL PARA ',
    heroTitleAccent: 'DERMATOLOGISTAS',
    heroTitleSuffix: 'EM SÃO PAULO',
    heroSubtitle:
      'Dermatologia em São Paulo exige precisão comercial. O paciente pesquisa tratamento, compara clínica, avalia proximidade e decide rápido. A presença local precisa refletir esse comportamento.',
    highlights: ['Dermatologia', 'São Paulo Capital', 'SEO Local', 'Tratamentos'],
    heroCard: {
      title: 'Onde a especialidade perde força',
      copy:
        'Quando a clínica fala de dermatologia de forma ampla demais, não sustenta a busca por tratamento e ainda perde leitura local em uma praça extremamente densa.',
      links: [
        { label: 'Ver página setorial', path: '/servicos/seo-para-dermatologistas/', reason: 'Base comercial da especialidade.' },
        { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
        { label: 'Ver São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto da praça prioritária.' }
      ]
    },
    stats: [
      { value: '1', label: 'Especialidade premium', copy: 'Dermatologia tende a exigir clareza comercial mais alta.' },
      { value: '4', label: 'Camadas de disputa', copy: 'Tratamento, geografia, mapa e reputação.' },
      { value: '0', label: 'Espaço para texto vago', copy: 'Sem contexto local, a descoberta enfraquece rápido.' },
      { value: '100%', label: 'Busca comparativa', copy: 'Paciente tende a comparar opções antes do contato.' }
    ],
    marketCards: [
      {
        title: 'Tratamento e localização',
        copy:
          'A busca por procedimento em dermatologia costuma vir misturada com geografia. A página local precisa responder as duas camadas ao mesmo tempo.'
      },
      {
        title: 'Capital altamente disputada',
        copy:
          'São Paulo concentra concorrência forte por bairro e por especialidade. Isso eleva a exigência sobre prova, mensagem e consistência local.'
      },
      {
        title: 'Decisão sensível à confiança',
        copy:
          'Em dermatologia, clareza e percepção de credibilidade pesam bastante na comparação. A página precisa vender sem soar genérica.'
      }
    ],
    coreOffer:
      'SEO local para dermatologistas em São Paulo, estruturando tratamento, geografia, Google Maps e páginas comerciais para aumentar descoberta qualificada.',
    painPoints: [
      'Baixa visibilidade em buscas locais por tratamento e especialidade.',
      'Concorrência forte em bairros e regiões de alta demanda.',
      'Site sem estrutura comercial para a especialidade.',
      'Descoberta local fragmentada entre site, mapa e mensagem.'
    ],
    deliveryItems: [
      'Arquitetura local orientada a especialidade médica e capital.',
      'Conexão entre página setorial, páginas de apoio e Google Maps.',
      'FAQs de decisão para tratamento, localização e comparação.',
      'Refino de leitura comercial para procedimentos e contato.',
      'Interlinking entre serviço, cidade e conteúdo BOFU.'
    ],
    methodSteps: [
      {
        title: 'Leitura da intenção',
        copy: 'Mapeamos as buscas locais que mais aproximam tratamento, geografia e intenção de consulta.'
      },
      {
        title: 'Arquitetura da especialidade',
        copy: 'Organizamos a relação entre página setorial, página local e possíveis expansões por tratamento.'
      },
      {
        title: 'Reforço comercial',
        copy: 'Ajustamos a mensagem para competir melhor em uma praça onde a comparação é rápida e constante.'
      },
      {
        title: 'Maps e prova',
        copy: 'Conectamos sinais locais, perfil da empresa e consistência de oferta para fortalecer a descoberta.'
      },
      {
        title: 'Evolução guiada',
        copy: 'Priorizamos novas páginas e FAQs a partir do que realmente gera demanda mais qualificada.'
      }
    ],
    differentiators: [
      'Leitura específica de especialidade médica e capital.',
      'Integração real entre páginas comerciais e descoberta local.',
      'Foco em tratamento, não só em visibilidade genérica.',
      'Arquitetura pronta para crescer sem repetição rasa.'
    ],
    proofPoints: [
      'Página setorial de dermatologistas já publicada.',
      'Serviços canônicos de SEO Local e Google Meu Negócio ativos.',
      'Página de São Paulo já existente como suporte geográfico.',
      'Modelo editorial preparado para apoiar a especialidade.'
    ],
    relatedLinks: [
      { label: 'SEO para Dermatologistas', path: '/servicos/seo-para-dermatologistas/', reason: 'Página setorial-mãe.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
      { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Complemento de descoberta local.' },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
      { label: 'Como escolher agência SEO', path: '/blog/como-escolher-agencia-seo/', reason: 'Apoio de decisão comercial.' }
    ],
    faqItems: [
      {
        question: 'SEO local para dermatologistas em São Paulo é diferente da página setorial?',
        answer:
          'Sim. A página setorial organiza a oferta da especialidade. A página local traduz essa oferta para a competição, a geografia e a busca comercial da capital.'
      },
      {
        question: 'Vale criar páginas por tratamento em dermatologia na capital?',
        answer:
          'Vale quando há busca real, contexto próprio e capacidade de responder melhor à intenção do paciente. Sem isso, a expansão vira massa de páginas parecidas.'
      },
      {
        question: 'Google Meu Negócio entra junto nessa operação?',
        answer:
          'Na maior parte dos casos, sim. Mapa, avaliação, proximidade e clique para rota costumam participar bastante da descoberta local em dermatologia.'
      },
      {
        question: 'Quanto tempo leva para melhorar a visibilidade local?',
        answer:
          'Depende da estrutura atual da clínica, da concorrência e da clareza da arquitetura local. O indicador mais útil é avanço em descoberta qualificada e contato, não só posição.'
      },
      {
        question: 'Essa página funciona para dermatologia clínica e estética?',
        answer:
          'Funciona como base local. Mas, se houver diferenças fortes de intenção e oferta, pode fazer sentido abrir páginas próprias para sustentar melhor a busca.'
      },
      {
        question: 'É possível competir em São Paulo sem mídia paga?',
        answer:
          'Sim, mas isso exige estrutura local consistente, boa leitura comercial e reforço entre páginas, mapa e mensagem. Não é um cenário para páginas rasas.'
      },
      {
        question: 'Quando faz sentido contratar SEO local para dermatologistas em São Paulo?',
        answer:
          'Quando a clínica quer melhorar descoberta por tratamento e localização, reduzir dependência de paid social e ganhar previsibilidade orgânica.'
      },
      {
        question: 'A reputação local interfere nessa estratégia?',
        answer:
          'Interfere como parte do contexto de confiança. Mas ela precisa ser sustentada por páginas comerciais coerentes e por um perfil local bem alinhado ao site.'
      }
    ],
    ctaTitle: 'QUER AUMENTAR A DESCOBERTA LOCAL DA SUA CLÍNICA DE DERMATOLOGIA?',
    ctaCopy:
      'Se a especialidade compete forte em São Paulo e o Google ainda não está trazendo a qualidade de paciente esperada, a entrada correta é um diagnóstico local da vertical.',
    ctaPrimaryLabel: 'Solicitar diagnóstico para dermatologia em São Paulo',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'São Paulo',
    brief: requireBrief('/servicos/seo-local-para-dermatologistas-em-sao-paulo/')
  },
  {
    slug: '/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/',
    seoTitle: 'Google Meu Negócio para Dermatologistas em São Paulo | AUDITSEO',
    description:
      'Google Meu Negócio para dermatologistas em São Paulo com foco em Maps, descoberta local, comparação por tratamento e consistência entre perfil e site.',
    imagePath: '/images/google-meu-negocio.jpeg',
    displayTitle: 'Google Meu Negócio para Dermatologistas em São Paulo',
    badge: 'Dermatologia, Maps e Descoberta Urbana',
    heroTitlePrefix: 'GOOGLE MEU NEGÓCIO PARA ',
    heroTitleAccent: 'DERMATOLOGISTAS',
    heroTitleSuffix: 'EM SÃO PAULO',
    heroSubtitle:
      'Em dermatologia, o perfil no Google participa da comparação por confiança, localização e conveniência. Em São Paulo, isso precisa estar conectado à página comercial certa.',
    highlights: ['Google Maps', 'Dermatologia', 'São Paulo Capital', 'Perfil da Empresa'],
    heroCard: {
      title: 'Quando o perfil não sustenta a especialidade',
      copy:
        'Quando a clínica aparece no mapa, mas não transforma essa presença em clique qualificado, ligação e contato por tratamento ou localização.',
      links: [
        { label: 'Ver Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
        { label: 'Ver SEO para Dermatologistas', path: '/servicos/seo-para-dermatologistas/', reason: 'Base setorial da vertical.' },
        { label: 'Ver São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' }
      ]
    },
    stats: [
      { value: '1', label: 'Perfil decisivo', copy: 'O mapa entra cedo na jornada de comparação.' },
      { value: '3', label: 'Ações principais', copy: 'Ligação, rota e clique para o site.' },
      { value: '0', label: 'Margem para ruído', copy: 'Inconsistência local enfraquece a confiança.' },
      { value: '100%', label: 'Busca comparativa', copy: 'Paciente tende a comparar antes de decidir.' }
    ],
    marketCards: [
      {
        title: 'Especialidade altamente sensível',
        copy:
          'Dermatologia depende bastante de contexto e percepção de credibilidade. O perfil no mapa precisa reforçar, e não contradizer, a mensagem do site.'
      },
      {
        title: 'Concorrência urbana intensa',
        copy:
          'Pequenas diferenças de categoria, consistência ou oferta já impactam a comparação em uma praça como São Paulo.'
      },
      {
        title: 'Perfil como ponte para contato',
        copy:
          'O objetivo não é só aparecer. É transformar o mapa em ligação, rota e visita à página comercial certa.'
      }
    ],
    coreOffer:
      'Gestão de Google Meu Negócio para dermatologistas em São Paulo, conectando perfil, especialidade, localização e páginas comerciais.',
    painPoints: [
      'Perfil com pouca força comercial no mapa.',
      'Informações desalinhadas entre GBP, site e especialidade.',
      'Baixa geração de interações qualificadas.',
      'Concorrência local melhor posicionada na comparação rápida.'
    ],
    deliveryItems: [
      'Diagnóstico do perfil da especialidade na capital.',
      'Integração entre mapa, páginas comerciais e contexto de tratamento.',
      'Refino de consistência local, prova e leitura da oferta.',
      'Interlinking com página setorial e serviço canônico.',
      'Plano de evolução da presença local no mapa.'
    ],
    methodSteps: [
      {
        title: 'Leitura do perfil',
        copy: 'Avaliamos como o perfil aparece, o que comunica e onde perde força na comparação local.'
      },
      {
        title: 'Ajuste com o site',
        copy: 'Conectamos o perfil às páginas que realmente sustentam a especialidade e a localização.'
      },
      {
        title: 'Reforço de descoberta',
        copy: 'Tratamos clique, rota, ligação e reputação como parte da mesma camada de presença local.'
      },
      {
        title: 'Consistência da oferta',
        copy: 'Reduzimos ruído entre perfil, página setorial e leitura comercial da clínica.'
      },
      {
        title: 'Prioridade por demanda',
        copy: 'Acompanhamos os sinais do mapa e ajustamos a operação com foco em demanda qualificada.'
      }
    ],
    differentiators: [
      'Leitura específica de GBP para especialidade médica.',
      'Integração entre perfil, geografia e tratamento.',
      'Foco em descoberta comercial, não só em preenchimento de perfil.',
      'Arquitetura compatível com escala futura por cidade.'
    ],
    proofPoints: [
      'Serviço canônico de Google Meu Negócio já ativo.',
      'Página setorial de dermatologistas publicada.',
      'Página local de São Paulo já existente.',
      'Base editorial pronta para apoiar decisão comercial.'
    ],
    relatedLinks: [
      { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
      { label: 'SEO para Dermatologistas', path: '/servicos/seo-para-dermatologistas/', reason: 'Base setorial da vertical.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Camada estrutural complementar.' },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
      { label: 'Guia de Google Meu Negócio', path: '/blog/google-meu-negocio-guia-completo/', reason: 'Apoio conceitual sobre GBP.' }
    ],
    faqItems: [
      {
        question: 'Google Meu Negócio substitui o trabalho de SEO para dermatologistas?',
        answer:
          'Não. O perfil ajuda bastante na descoberta local, mas precisa de páginas comerciais fortes e de sinais consistentes no site para sustentar a decisão.'
      },
      {
        question: 'Essa página é diferente da página local de SEO para dermatologistas?',
        answer:
          'Sim. Aqui o foco é o perfil no mapa e sua força comercial. A página de SEO local cobre a estrutura mais ampla da presença orgânica da clínica.'
      },
      {
        question: 'Avaliações locais fazem parte da estratégia?',
        answer:
          'Fazem parte do contexto de confiança, mas não resolvem sozinhas. Sem boa arquitetura comercial no site, a comparação continua fraca.'
      },
      {
        question: 'Em São Paulo, o mapa interfere muito na descoberta da clínica?',
        answer:
          'Sim. Em dermatologia, mapa, proximidade e percepção de confiança costumam entrar cedo na jornada do paciente.'
      },
      {
        question: 'A página do site interfere no desempenho do perfil?',
        answer:
          'Sim. O Google usa sinais do site para entender melhor a oferta, a especialidade e a coerência da entidade local.'
      },
      {
        question: 'Quanto tempo leva para melhorar um perfil de dermatologia?',
        answer:
          'Depende da base atual e da conexão com as páginas corretas. O foco deve estar na melhora das interações qualificadas, não apenas em métricas superficiais.'
      },
      {
        question: 'Quando contratar esse serviço faz sentido?',
        answer:
          'Quando o perfil da clínica existe, mas não está convertendo presença em contato, rota e descoberta local mais previsível.'
      },
      {
        question: 'Esse trabalho funciona melhor quando vem junto com SEO local?',
        answer:
          'Na maioria dos casos, sim. Google Meu Negócio performa melhor quando está alinhado a uma arquitetura local consistente no site.'
      }
    ],
    ctaTitle: 'QUER FAZER O PERFIL DA SUA CLÍNICA GERAR MAIS DESCOBERTA LOCAL?',
    ctaCopy:
      'Se o mapa hoje não está convertendo a presença da especialidade em contato qualificado, vale começar por um diagnóstico de Google Meu Negócio orientado à vertical.',
    ctaPrimaryLabel: 'Solicitar diagnóstico de GBP para dermatologia',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'São Paulo',
    brief: requireBrief('/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/')
  },
  {
    slug: '/servicos/seo-local-para-odontologia-em-sao-paulo/',
    seoTitle: 'SEO Local para Odontologia em São Paulo | AUDITSEO',
    description:
      'SEO local para odontologia em São Paulo com foco em procedimentos, mapa, busca por proximidade e estrutura comercial para gerar mais consultas.',
    imagePath: '/images/google-meu-negocio.jpeg',
    displayTitle: 'SEO Local para Odontologia em São Paulo',
    badge: 'Odontologia, Capital e Busca de Proximidade',
    heroTitlePrefix: 'SEO LOCAL PARA ',
    heroTitleAccent: 'ODONTOLOGIA',
    heroTitleSuffix: 'EM SÃO PAULO',
    heroSubtitle:
      'Em odontologia, a busca por proximidade e procedimento costuma ser objetiva. Em São Paulo, a página local precisa equilibrar mapa, clareza comercial e confiança em uma praça muito competitiva.',
    highlights: ['Odontologia', 'São Paulo Capital', 'Busca Local', 'Procedimentos'],
    heroCard: {
      title: 'Quando a clínica precisa de leitura local',
      copy:
        'Quando o paciente pesquisa implante, alinhadores, ortodontia ou urgência com forte dependência de geografia, conveniência e decisão rápida.',
      links: [
        { label: 'Ver página setorial', path: '/servicos/seo-para-odontologia/', reason: 'Base comercial da vertical.' },
        { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
        { label: 'Ver São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' }
      ]
    },
    stats: [
      { value: '1', label: 'Vertical local forte', copy: 'Odontologia costuma reagir bem à descoberta por proximidade.' },
      { value: '4', label: 'Sinais de decisão', copy: 'Procedimento, mapa, confiança e conveniência.' },
      { value: '0', label: 'Espaço para página rasa', copy: 'Texto institucional genérico não sustenta a busca.' },
      { value: '24/7', label: 'Demanda constante', copy: 'A busca local aparece ao longo de toda a jornada do paciente.' }
    ],
    marketCards: [
      {
        title: 'Busca por procedimento',
        copy:
          'Muitas consultas nascem de buscas por procedimento já com intenção clara. A página local precisa capturar essa leitura sem dispersão.'
      },
      {
        title: 'Maps e conveniência',
        copy:
          'Na capital, localização, rota e facilidade de contato pesam muito. Isso faz do mapa uma camada decisiva da jornada.'
      },
      {
        title: 'Decisão mais rápida',
        copy:
          'Em odontologia, o paciente tende a agir mais rápido quando encontra clareza sobre serviço, localidade e próximo passo.'
      }
    ],
    coreOffer:
      'SEO local para odontologia em São Paulo, conectando procedimentos, Google Maps e páginas comerciais para gerar mais consultas qualificadas.',
    painPoints: [
      'Baixa visibilidade em buscas locais por procedimento.',
      'Concorrência alta em bairros e regiões estratégicas da capital.',
      'Site sem estrutura para transformar busca em consulta.',
      'Google Maps e página comercial sem integração real.'
    ],
    deliveryItems: [
      'Arquitetura local para procedimentos com intenção comercial forte.',
      'Integração entre página setorial, página local e mapa.',
      'FAQ de decisão para procedimento, localização e contato.',
      'Refino de mensagem para uma praça de alta competição.',
      'Escala futura preparada para novas combinações geográficas.'
    ],
    methodSteps: [
      {
        title: 'Leitura da demanda',
        copy: 'Mapeamos procedimentos, buscas de proximidade e sinais locais com maior potencial de consulta.'
      },
      {
        title: 'Arquitetura local',
        copy: 'Definimos como a página de São Paulo se ancora na vertical de odontologia sem repetir a mesma intenção.'
      },
      {
        title: 'Conversão comercial',
        copy: 'Ajustamos a mensagem para facilitar comparação, clareza do serviço e próximo passo.'
      },
      {
        title: 'Maps e proximidade',
        copy: 'Tratamos o mapa como parte da experiência comercial, e não como canal separado.'
      },
      {
        title: 'Expansão guiada',
        copy: 'Abrimos novas páginas e combinações apenas quando a demanda justificar essa profundidade.'
      }
    ],
    differentiators: [
      'Foco em agenda e consulta, não só em tráfego.',
      'Leitura conjunta de procedimento, mapa e geografia.',
      'Arquitetura preparada para a capital sem doorway pages.',
      'Base técnica compatível com SEO local e IA.'
    ],
    proofPoints: [
      'Página setorial de odontologia já publicada.',
      'Serviços canônicos de SEO Local e GBP ativos.',
      'Página de São Paulo já existente no site.',
      'Base editorial pronta para reforçar objeções e decisão comercial.'
    ],
    relatedLinks: [
      { label: 'SEO para Odontologia', path: '/servicos/seo-para-odontologia/', reason: 'Página setorial-mãe.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
      { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Complemento importante para mapa.' },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
      { label: 'Quanto custa SEO', path: '/blog/quanto-custa-seo/', reason: 'Apoio de decisão comercial.' }
    ],
    faqItems: [
      {
        question: 'SEO local para odontologia em São Paulo funciona melhor do que uma página geral?',
        answer:
          'Para intenção geográfica, sim. A página local traduz a oferta da vertical para a lógica de busca da capital, onde proximidade e conveniência pesam bastante.'
      },
      {
        question: 'Quais procedimentos costumam justificar páginas próprias?',
        answer:
          'Quando existe busca real e intenção comercial diferente, como implante, ortodontia, alinhadores e urgência. O ponto central é responder melhor à intenção.'
      },
      {
        question: 'Google Meu Negócio entra nessa estratégia?',
        answer:
          'Na maioria dos casos, sim. Em odontologia, mapa, rota e clique para contato participam fortemente da decisão.'
      },
      {
        question: 'Quanto tempo leva para melhorar a descoberta local?',
        answer:
          'Depende da estrutura atual do site, da força do perfil local e da competitividade da praça. O foco correto é aumento de consultas qualificadas.'
      },
      {
        question: 'Essa página substitui a página setorial de odontologia?',
        answer:
          'Não. A página setorial organiza a oferta da vertical. A página local conecta essa oferta à busca da cidade.'
      },
      {
        question: 'Vale criar páginas por bairro em odontologia?',
        answer:
          'Só quando existe diferença real de intenção ou operação. Multiplicar páginas geográficas sem diferenciação tende a fragilizar a arquitetura.'
      },
      {
        question: 'Quando contratar SEO local para odontologia em São Paulo faz sentido?',
        answer:
          'Quando a clínica quer reduzir dependência de mídia paga, melhorar descoberta no Google e aumentar previsibilidade de consultas locais.'
      },
      {
        question: 'A estratégia ajuda a reduzir o custo de aquisição?',
        answer:
          'Pode ajudar quando a clínica passa a capturar demanda orgânica mais qualificada. O ganho vem da redução gradual de dependência de canais pagos.'
      }
    ],
    ctaTitle: 'QUER FAZER O GOOGLE GERAR MAIS CONSULTAS LOCAIS PARA SUA CLÍNICA?',
    ctaCopy:
      'Se a clínica depende da capital para gerar demanda e a busca local ainda não está convertendo como deveria, a melhor entrada é um diagnóstico comercial orientado à praça.',
    ctaPrimaryLabel: 'Solicitar diagnóstico para odontologia em São Paulo',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'São Paulo',
    brief: requireBrief('/servicos/seo-local-para-odontologia-em-sao-paulo/')
  },
  {
    slug: '/servicos/google-meu-negocio-para-odontologia-em-sao-paulo/',
    seoTitle: 'Google Meu Negócio para Odontologia em São Paulo | AUDITSEO',
    description:
      'Google Meu Negócio para odontologia em São Paulo com foco em Maps, perfil da empresa, procedimentos e geração de contatos mais qualificados.',
    imagePath: '/images/google-meu-negocio.jpeg',
    displayTitle: 'Google Meu Negócio para Odontologia em São Paulo',
    badge: 'Odontologia, Maps e Conversão Local',
    heroTitlePrefix: 'GOOGLE MEU NEGÓCIO PARA ',
    heroTitleAccent: 'ODONTOLOGIA',
    heroTitleSuffix: 'EM SÃO PAULO',
    heroSubtitle:
      'Na odontologia, o mapa costuma entrar cedo na jornada. Em São Paulo, perfil, localização e mensagem comercial precisam trabalhar em conjunto para gerar mais contatos.',
    highlights: ['Google Maps', 'Odontologia', 'São Paulo Capital', 'Perfil da Empresa'],
    heroCard: {
      title: 'Quando o perfil vira prioridade',
      copy:
        'Quando a clínica existe no Google, mas o perfil não está ajudando a transformar busca em ligação, rota e clique para o serviço certo.',
      links: [
        { label: 'Ver Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
        { label: 'Ver SEO para Odontologia', path: '/servicos/seo-para-odontologia/', reason: 'Base setorial da vertical.' },
        { label: 'Ver São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' }
      ]
    },
    stats: [
      { value: '1', label: 'Perfil central', copy: 'O mapa costuma ser uma das primeiras camadas da decisão.' },
      { value: '3', label: 'Interações-chave', copy: 'Ligação, rota e clique para o site.' },
      { value: '0', label: 'Espaço para inconsistência', copy: 'Perfil desalinhado enfraquece a conversão.' },
      { value: '100%', label: 'Busca por conveniência', copy: 'Proximidade e clareza pesam bastante na jornada.' }
    ],
    marketCards: [
      {
        title: 'Busca objetiva por serviço',
        copy:
          'Em odontologia, o paciente costuma pesquisar com forte intenção de ação. Isso faz do perfil uma ponte importante para a decisão rápida.'
      },
      {
        title: 'Maps como filtro comercial',
        copy:
          'O mapa ajuda o paciente a eliminar opções cedo. Sem consistência entre perfil, localidade e página comercial, a clínica perde força nessa filtragem.'
      },
      {
        title: 'Capital e competição alta',
        copy:
          'São Paulo aumenta a exigência sobre categoria, coerência da oferta e capacidade do perfil de sustentar a comparação.'
      }
    ],
    coreOffer:
      'Gestão de Google Meu Negócio para odontologia em São Paulo, alinhando perfil, procedimentos, geografia e páginas comerciais.',
    painPoints: [
      'Perfil fraco para gerar descoberta local e contatos.',
      'Pouca consistência entre site, oferta e Google Maps.',
      'Baixa geração de ligações e rotas qualificadas.',
      'Concorrência local mais forte na comparação do paciente.'
    ],
    deliveryItems: [
      'Diagnóstico do perfil e da sua leitura comercial na capital.',
      'Integração entre página local, página setorial e mapa.',
      'Ajuste de sinais de consistência e contexto da oferta.',
      'Reforço de descoberta para procedimentos e proximidade.',
      'Plano de evolução do perfil conectado ao site.'
    ],
    methodSteps: [
      {
        title: 'Leitura do mapa',
        copy: 'Identificamos como o perfil aparece hoje, o que comunica e onde deixa a clínica vulnerável na comparação.'
      },
      {
        title: 'Alinhamento com a oferta',
        copy: 'Conectamos o perfil às páginas comerciais certas para melhorar coerência e intenção.'
      },
      {
        title: 'Reforço de conversão',
        copy: 'Tratamos ligação, rota e clique como sinais centrais de desempenho local.'
      },
      {
        title: 'Consistência operacional',
        copy: 'Reduzimos ruído entre site, mapa, especialidade e jornada real do paciente.'
      },
      {
        title: 'Monitoramento',
        copy: 'Acompanhamos sinais do perfil e ajustamos a operação em função do que gera mais contato qualificado.'
      }
    ],
    differentiators: [
      'Foco em descoberta local com intenção comercial real.',
      'Integração entre perfil, procedimentos e páginas de apoio.',
      'Leitura adaptada à capital e à vertical de odontologia.',
      'Execução pensada para reduzir ruído entre mapa e site.'
    ],
    proofPoints: [
      'Serviço canônico de Google Meu Negócio já publicado.',
      'Página setorial de odontologia já ativa.',
      'Página de São Paulo já existente como suporte geográfico.',
      'Base comercial pronta para conectar perfil e página.'
    ],
    relatedLinks: [
      { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
      { label: 'SEO para Odontologia', path: '/servicos/seo-para-odontologia/', reason: 'Página setorial-mãe.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Camada estrutural complementar.' },
      { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
      { label: 'Guia de Google Meu Negócio', path: '/blog/google-meu-negocio-guia-completo/', reason: 'Apoio conceitual sobre GBP.' }
    ],
    faqItems: [
      {
        question: 'Google Meu Negócio é indispensável para odontologia em São Paulo?',
        answer:
          'Na maioria dos casos, sim. O mapa costuma participar cedo da comparação por proximidade, conveniência e contato rápido.'
      },
      {
        question: 'Essa página é diferente da página de SEO local para odontologia?',
        answer:
          'Sim. Aqui o foco é o perfil da empresa no mapa. A página de SEO local cobre a estrutura mais ampla da presença orgânica na cidade.'
      },
      {
        question: 'O perfil precisa estar alinhado às páginas do site?',
        answer:
          'Precisa. O Google usa sinais do site para entender melhor a oferta da clínica e a coerência da entidade local.'
      },
      {
        question: 'Quanto tempo leva para melhorar um perfil de odontologia?',
        answer:
          'Depende da base atual e da qualidade das páginas que apoiam o perfil. O mais importante é medir evolução em interações comerciais úteis.'
      },
      {
        question: 'Maps sozinho já resolve a captação?',
        answer:
          'Não. O perfil ajuda bastante, mas a conversão melhora quando há uma página comercial clara sustentando a intenção da busca.'
      },
      {
        question: 'Vale tratar cada unidade odontológica separadamente?',
        answer:
          'Quando existem operações distintas e intenção local específica, sim. O importante é manter arquitetura e diferenciação reais.'
      },
      {
        question: 'Quando contratar esse serviço faz sentido?',
        answer:
          'Quando a clínica quer melhorar sua presença no mapa, gerar mais ligações e rotas e reduzir perda de demanda local para concorrentes mais bem organizados.'
      },
      {
        question: 'Esse trabalho funciona melhor junto com SEO local?',
        answer:
          'Na maior parte dos casos, sim. Perfil e páginas comerciais se reforçam mutuamente quando a arquitetura está correta.'
      }
    ],
    ctaTitle: 'QUER FAZER O PERFIL DA SUA CLÍNICA ODONTOLÓGICA GERAR MAIS CONTATOS?',
    ctaCopy:
      'Se o mapa hoje ainda não está sustentando a descoberta local da clínica na capital, vale começar por um diagnóstico de Google Meu Negócio orientado à conversão.',
    ctaPrimaryLabel: 'Solicitar diagnóstico de GBP para odontologia',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'São Paulo',
    brief: requireBrief('/servicos/google-meu-negocio-para-odontologia-em-sao-paulo/')
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/',
    seoTitle: 'SEO Local para Clínicas Médicas na Grande São Paulo | AUDITSEO',
    description:
      'SEO local para clínicas médicas na Grande São Paulo com foco em operação multiunidade, descoberta metropolitana, Google Maps e páginas comerciais por geografia.',
    imagePath: '/images/google-meu-negocio.jpeg',
    displayTitle: 'SEO Local para Clínicas Médicas na Grande São Paulo',
    badge: 'Expansão Metropolitana e Saúde Privada',
    heroTitlePrefix: 'SEO LOCAL PARA CLÍNICAS MÉDICAS NA ',
    heroTitleAccent: 'GRANDE SÃO PAULO',
    heroSubtitle:
      'Quando a clínica atende mais de uma cidade da região metropolitana, a estrutura precisa refletir demanda, unidade, proximidade e contexto comercial sem repetir páginas vazias nem disputar a mesma intenção da capital.',
    highlights: ['Grande São Paulo', 'Multiunidade', 'Busca Metropolitana', 'Arquitetura Comercial'],
    heroCard: {
      title: 'Quando a página regional faz sentido',
      copy:
        'Quando a operação atende mais de uma praça metropolitana, precisa coordenar páginas locais e não pode depender só da capital para capturar toda a demanda orgânica.',
      links: [
        { label: 'Ver página setorial', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Base comercial da vertical.' },
        {
          label: 'Ver São Paulo capital',
          path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/',
          reason: 'Página local principal da capital.'
        },
        {
          label: 'Ver SEO Local',
          path: '/servicos/seo-local/',
          reason: 'Serviço canônico que sustenta a vertical.'
        }
      ]
    },
    stats: [
      { value: '1', label: 'Leitura regional', copy: 'A página regional organiza a expansão sem duplicar a capital.' },
      { value: '2+', label: 'Praças ativas', copy: 'Faz mais sentido quando a clínica atua em mais de uma cidade.' },
      { value: '0', label: 'Espaço para repetição', copy: 'Página regional não pode ser uma cópia de páginas locais.' },
      { value: '360°', label: 'Coordenação', copy: 'Site, mapa, unidade e mensagem precisam operar como um sistema.' }
    ],
    marketCards: [
      {
        title: 'Busca metropolitana',
        copy:
          'Pacientes cruzam cidades da região para consultar especialidades, comparar reputação e escolher unidades com melhor acesso e disponibilidade.'
      },
      {
        title: 'Operação multiunidade',
        copy:
          'Sem uma camada regional, a clínica costuma concentrar tudo na capital ou pulverizar URLs quase iguais. Os dois cenários enfraquecem a leitura comercial.'
      },
      {
        title: 'Governança local',
        copy:
          'Grande São Paulo exige clareza sobre quais páginas capturam a intenção regional, quais capturam a capital e quando abrir novas páginas locais.'
      }
    ],
    coreOffer:
      'SEO local para clínicas médicas com operação metropolitana, conectando página regional, páginas locais, Google Maps e estrutura comercial por geografia.',
    painPoints: [
      'Atuação em mais de uma cidade sem arquitetura de busca correspondente.',
      'Competição entre unidades ou regiões próximas.',
      'Capital concentrando toda a mensagem comercial.',
      'Pouca profundidade local para sustentar a expansão.'
    ],
    deliveryItems: [
      'Definição do papel da página regional dentro da malha comercial.',
      'Coordenação entre capital, polos locais e páginas de apoio.',
      'Critérios para abrir ou não novas páginas por cidade.',
      'Conexão entre site, unidade, geografia e descoberta local.',
      'Interlinking entre página setorial, capital e expansão metropolitana.'
    ],
    methodSteps: [
      {
        title: 'Diagnóstico regional',
        copy: 'Mapeamos quais cidades realmente participam da operação, da demanda e da jornada de decisão dos pacientes.'
      },
      {
        title: 'Arquitetura metropolitana',
        copy: 'Separamos o papel da página regional, da capital e das páginas locais para reduzir sobreposição e ruído.'
      },
      {
        title: 'Estrutura comercial',
        copy: 'Organizamos a mensagem para multiunidade, deslocamento, especialidade e intenção de contato.'
      },
      {
        title: 'Sinais locais',
        copy: 'Alinhamos Google Maps, endereço, cobertura, proximidade e consistência comercial com o que o site promete.'
      },
      {
        title: 'Escala controlada',
        copy: 'Usamos desempenho real para decidir quais novas páginas locais devem nascer e quais não merecem existir.'
      }
    ],
    differentiators: [
      'Leitura regional sem doorway pages.',
      'Separação clara entre capital, região e polos locais.',
      'Arquitetura pensada para clínica multiunidade.',
      'Critério comercial acima de volume de páginas.'
    ],
    proofPoints: [
      'Página setorial de clínicas médicas já ativa.',
      'Página local da capital já publicada.',
      'Serviço canônico de SEO Local já existente.',
      'Base editorial da AUDITSEO pronta para apoiar expansão metropolitana.'
    ],
    relatedLinks: [
      { label: 'SEO para Clínicas Médicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Página setorial-mãe.' },
      {
        label: 'SEO Local para Clínicas Médicas em São Paulo',
        path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/',
        reason: 'Principal página local da capital.'
      },
      {
        label: 'SEO Local para Clínicas Médicas em Campinas',
        path: '/servicos/seo-local-para-clinicas-medicas-em-campinas/',
        reason: 'Polo complementar da malha paulista.'
      },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
      { label: 'Como escolher agência SEO', path: '/blog/como-escolher-agencia-seo/', reason: 'Apoio BOFU de decisão.' }
    ],
    faqItems: [
      {
        question: 'Quando vale criar uma página para a Grande São Paulo?',
        answer:
          'Quando a clínica realmente atende mais de uma cidade da região metropolitana e precisa organizar a demanda sem depender só da capital.'
      },
      {
        question: 'Essa página compete com a página de São Paulo capital?',
        answer:
          'Não deve competir. A página da capital captura a intenção da cidade. A página regional organiza a atuação metropolitana e a expansão multiunidade.'
      },
      {
        question: 'Ela serve para clínicas com mais de uma unidade?',
        answer:
          'Sim. Principalmente quando as unidades atendem cidades diferentes e a clínica precisa coordenar descoberta local sem repetir conteúdo.'
      },
      {
        question: 'Ainda preciso de páginas por cidade?',
        answer:
          'Em muitos casos, sim. A página regional não substitui cidades estratégicas. Ela ajuda a organizar a camada acima delas.'
      },
      {
        question: 'Google Meu Negócio entra nessa estratégia regional?',
        answer:
          'Entra, porque unidade, endereço e proximidade continuam sendo sinais críticos. A diferença é que agora eles precisam ser governados em conjunto.'
      },
      {
        question: 'Quanto tempo leva para a estrutura regional gerar resultado?',
        answer:
          'Depende da base atual e do número de cidades envolvidas. O importante é medir expansão de consultas qualificadas e cobertura real da região.'
      },
      {
        question: 'Essa página faz sentido para uma clínica com só uma unidade?',
        answer:
          'Normalmente não. Nesse cenário, a página local da cidade tende a ser suficiente e mais precisa para a intenção principal.'
      },
      {
        question: 'Qual o erro mais comum em SEO regional para clínicas?',
        answer:
          'Criar páginas quase iguais para várias geografias sem diferença real de operação, mensagem ou intenção. Isso aumenta ruído e não melhora a conversão.'
      }
    ],
    ctaTitle: 'QUER ORGANIZAR A PRESENÇA DA SUA CLÍNICA NA GRANDE SÃO PAULO?',
    ctaCopy:
      'Se a operação atende mais de uma cidade da região e hoje a estrutura não traduz isso no Google, o melhor início é um diagnóstico regional orientado à arquitetura comercial.',
    ctaPrimaryLabel: 'Solicitar diagnóstico regional para clínicas',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'Grande São Paulo',
    brief: requireBrief('/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/')
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-em-campinas/',
    seoTitle: 'SEO Local para Clínicas Médicas em Campinas | AUDITSEO',
    description:
      'SEO local para clínicas médicas em Campinas com foco em descoberta regional, Google Maps, páginas comerciais e captação orgânica qualificada.',
    imagePath: '/images/seo.jpeg',
    displayTitle: 'SEO Local para Clínicas Médicas em Campinas',
    badge: 'Campinas, Interior Estratégico e Saúde',
    heroTitlePrefix: 'SEO LOCAL PARA CLÍNICAS MÉDICAS EM ',
    heroTitleAccent: 'CAMPINAS',
    heroSubtitle:
      'Campinas não deve ser tratada como extensão automática da capital. A praça tem dinâmica própria, concorrência forte e exige uma leitura local orientada a especialidades, mapa e decisão comercial.',
    highlights: ['Campinas', 'SEO Local', 'Google Maps', 'Captação Regional'],
    heroCard: {
      title: 'Por que Campinas merece página própria',
      copy:
        'Porque é um polo econômico relevante do interior paulista, com demanda local suficiente para justificar uma página comercial específica e uma leitura diferente da capital.',
      links: [
        { label: 'Ver página setorial', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Base comercial da vertical.' },
        { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
        { label: 'Ver contexto da cidade', path: '/cidades/campinas/', reason: 'Página geográfica de apoio já publicada.' }
      ]
    },
    stats: [
      { value: '1', label: 'Polo estratégico', copy: 'Campinas é uma das praças mais importantes da expansão paulista.' },
      { value: '4', label: 'Sinais de decisão', copy: 'Especialidade, proximidade, confiança e facilidade de contato.' },
      { value: '0', label: 'Espaço para improviso', copy: 'Página local genérica não sustenta descoberta qualificada.' },
      { value: '24/7', label: 'Busca local', copy: 'A demanda acontece de forma recorrente em especialidades e procedimentos.' }
    ],
    marketCards: [
      {
        title: 'Polo regional forte',
        copy:
          'Campinas concentra demanda empresarial e médica relevante. Isso exige uma página local com mensagem clara e não apenas uma adaptação superficial da capital.'
      },
      {
        title: 'Maps e confiança local',
        copy:
          'O mapa participa da jornada desde cedo. Endereço, proximidade, reputação e coerência com o site influenciam a escolha antes do contato.'
      },
      {
        title: 'Captação por especialidade',
        copy:
          'Clínicas médicas em Campinas precisam conectar páginas comerciais, especialidades e contexto local para capturar melhor a intenção de busca.'
      }
    ],
    coreOffer:
      'SEO local para clínicas médicas em Campinas, integrando descoberta orgânica, Google Maps e páginas comerciais para aumentar a geração de contatos qualificados.',
    painPoints: [
      'Baixa relevância em buscas locais da cidade.',
      'Pouca profundidade comercial nas páginas da clínica.',
      'Perfil local sem integração real com o site.',
      'Dependência excessiva de mídia paga para gerar demanda.'
    ],
    deliveryItems: [
      'Estrutura local pensada para a realidade comercial de Campinas.',
      'Conexão entre página da cidade, especialidades e Google Maps.',
      'Blocos de FAQ orientados a decisão e comparação.',
      'Interlinking com a vertical setorial e o serviço canônico.',
      'Critérios de expansão para novas páginas locais do interior.'
    ],
    methodSteps: [
      {
        title: 'Leitura da praça',
        copy: 'Mapeamos como a clínica aparece hoje em Campinas, quais sinais locais existem e onde a descoberta está falhando.'
      },
      {
        title: 'Arquitetura local',
        copy: 'Definimos o papel da página de Campinas sem misturar a intenção da capital ou da página regional.'
      },
      {
        title: 'Mensagem comercial',
        copy: 'Ajustamos a página para converter busca local em contato, com foco em clareza de serviço e confiança.'
      },
      {
        title: 'Maps e consistência',
        copy: 'Tratamos perfil da empresa, site, especialidades e localização como um sistema único de descoberta.'
      },
      {
        title: 'Escala por prioridade',
        copy: 'Decidimos os próximos desdobramentos com base em demanda real e desempenho da página local.'
      }
    ],
    differentiators: [
      'Leitura específica para Campinas, não cópia da capital.',
      'Integração entre cidade, especialidade e Google Maps.',
      'Arquitetura comercial pensada para gerar contato, não só tráfego.',
      'Base pronta para expansão controlada do interior paulista.'
    ],
    proofPoints: [
      'Página setorial de clínicas médicas já publicada.',
      'Página de Campinas já ativa no cluster geográfico.',
      'Serviço canônico de SEO Local já publicado.',
      'Malha comercial da Onda 1 estruturada para apoiar a cidade.'
    ],
    relatedLinks: [
      { label: 'SEO para Clínicas Médicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Página setorial-mãe.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
      { label: 'Campinas', path: '/cidades/campinas/', reason: 'Contexto geográfico já existente no site.' },
      {
        label: 'SEO Local para Clínicas Médicas em São Paulo',
        path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/',
        reason: 'Referência da capital para comparação de arquitetura.'
      },
      { label: 'Quanto custa SEO', path: '/blog/quanto-custa-seo/', reason: 'Apoio BOFU de decisão.' }
    ],
    faqItems: [
      {
        question: 'SEO local para clínicas médicas funciona bem em Campinas?',
        answer:
          'Funciona quando a clínica estrutura corretamente a página local, as especialidades e os sinais do mapa. Sem isso, a demanda existe, mas não converte no site.'
      },
      {
        question: 'O que muda entre a página de Campinas e a de São Paulo?',
        answer:
          'A capital exige uma leitura urbana e competitiva diferente. Campinas precisa de contexto local próprio, sem replicar a mensagem da cidade de São Paulo.'
      },
      {
        question: 'Google Meu Negócio entra junto nessa estratégia?',
        answer:
          'Na maior parte dos casos, sim. Perfil, proximidade, rota e consistência com o site participam da decisão desde cedo.'
      },
      {
        question: 'Vale criar páginas por especialidade também em Campinas?',
        answer:
          'Vale quando a especialidade tem demanda suficiente e diferença clara de mensagem. A página local não substitui toda a camada de especialidades.'
      },
      {
        question: 'Quanto tempo leva para a clínica ganhar visibilidade local em Campinas?',
        answer:
          'Depende da base atual, da concorrência e da velocidade de implementação. O foco deve estar em consultas qualificadas e não apenas em posição isolada.'
      },
      {
        question: 'Essa página serve para clínica com uma unidade só?',
        answer:
          'Sim. Se a unidade atua em Campinas e depende da cidade para gerar demanda, a página local faz sentido mesmo sem uma operação multiunidade.'
      },
      {
        question: 'Essa página compete com a página setorial de clínicas médicas?',
        answer:
          'Não deve competir. A página setorial cobre a tese comercial da vertical. A página local traduz essa tese para a cidade.'
      },
      {
        question: 'Quando contratar SEO local para clínicas médicas em Campinas faz mais sentido?',
        answer:
          'Quando a clínica quer reduzir dependência de anúncios, melhorar presença no mapa e converter melhor buscas locais que já indicam intenção de contato.'
      }
    ],
    ctaTitle: 'QUER FAZER A SUA CLÍNICA APARECER MELHOR EM CAMPINAS?',
    ctaCopy:
      'Se a captação local em Campinas ainda depende demais de mídia paga ou do boca a boca, o melhor início é um diagnóstico de SEO local orientado à geração de contatos qualificados.',
    ctaPrimaryLabel: 'Solicitar diagnóstico local em Campinas',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'Campinas',
    brief: requireBrief('/servicos/seo-local-para-clinicas-medicas-em-campinas/')
  },
  {
    slug: '/servicos/seo-local-para-clinicas-medicas-em-sao-jose-dos-campos/',
    seoTitle: 'SEO Local para Clínicas Médicas em São José dos Campos | AUDITSEO',
    description:
      'SEO local para clínicas médicas em São José dos Campos com foco em descoberta no Google, captação regional e estrutura comercial para o Vale do Paraíba.',
    imagePath: '/images/google-meu-negocio.jpeg',
    displayTitle: 'SEO Local para Clínicas Médicas em São José dos Campos',
    badge: 'Vale do Paraíba e Saúde Local',
    heroTitlePrefix: 'SEO LOCAL PARA CLÍNICAS MÉDICAS EM ',
    heroTitleAccent: 'SÃO JOSÉ DOS CAMPOS',
    heroSubtitle:
      'São José dos Campos é uma praça estratégica do interior paulista. Para clínicas médicas, a oportunidade está em transformar busca local, mapa e especialidades em uma presença comercial mais forte no Vale do Paraíba.',
    highlights: ['São José dos Campos', 'Vale do Paraíba', 'SEO Local', 'Clínicas Médicas'],
    heroCard: {
      title: 'Quando a cidade entra no radar',
      copy:
        'Quando a clínica depende da praça local para crescer, percebe concorrência maior no Google e precisa estruturar a descoberta orgânica com lógica própria para a região.',
      links: [
        { label: 'Ver página setorial', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Base comercial da vertical.' },
        { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
        {
          label: 'Ver referência da capital',
          path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/',
          reason: 'Referência principal da malha local paulista.'
        }
      ]
    },
    stats: [
      { value: '1', label: 'Polo estratégico', copy: 'A cidade sustenta busca local relevante no Vale do Paraíba.' },
      { value: '3', label: 'Entradas principais', copy: 'Mapa, especialidade e páginas comerciais locais.' },
      { value: '0', label: 'Espaço para páginas vazias', copy: 'A cidade precisa de contexto real, não adaptação superficial.' },
      { value: '100%', label: 'Dependência de coerência', copy: 'Site, mapa e mensagem precisam operar juntos.' }
    ],
    marketCards: [
      {
        title: 'Polo regional de decisão',
        copy:
          'São José dos Campos atrai demanda da própria cidade e de parte do Vale do Paraíba. Isso aumenta a importância da página local e do mapa.'
      },
      {
        title: 'Busca por especialidade',
        copy:
          'Clínicas médicas precisam responder a buscas por especialidade, proximidade e credibilidade com uma página comercial claramente orientada à cidade.'
      },
      {
        title: 'Concorrência local organizada',
        copy:
          'Quem articula melhor site, perfil local e contexto comercial tende a capturar mais contatos mesmo sem depender exclusivamente de mídia paga.'
      }
    ],
    coreOffer:
      'SEO local para clínicas médicas em São José dos Campos, articulando páginas comerciais, Google Maps e contexto regional para gerar mais contatos qualificados.',
    painPoints: [
      'Baixa presença nas buscas locais da cidade e da região.',
      'Site sem profundidade comercial local.',
      'Pouca integração entre mapa, especialidades e páginas de apoio.',
      'Dependência de indicação ou mídia paga para manter demanda.'
    ],
    deliveryItems: [
      'Leitura local orientada à cidade e ao Vale do Paraíba.',
      'Conexão entre página comercial, especialidade e descoberta local.',
      'FAQ comercial para comparação, prazo, confiança e contato.',
      'Interlinking com a página setorial e o serviço canônico.',
      'Base pronta para futuras expansões locais do interior.'
    ],
    methodSteps: [
      {
        title: 'Diagnóstico da cidade',
        copy: 'Mapeamos como a clínica aparece hoje no Google, no mapa e nas buscas por especialidade dentro da praça.'
      },
      {
        title: 'Arquitetura local',
        copy: 'Organizamos o papel da página de São José dos Campos dentro da malha comercial, sem competir com a capital ou a página regional.'
      },
      {
        title: 'Mensagem de conversão',
        copy: 'Ajustamos a página para clareza comercial, confiança e resposta à intenção de quem já está pesquisando a cidade.'
      },
      {
        title: 'Maps e consistência',
        copy: 'Alinhamos perfil da empresa, localização, sinais locais e páginas comerciais para aumentar a coerência da entidade.'
      },
      {
        title: 'Próximos desdobramentos',
        copy: 'A partir do desempenho real, decidimos se a expansão deve seguir para novas cidades, especialidades ou reforço de GBP.'
      }
    ],
    differentiators: [
      'Leitura local pensada para o Vale do Paraíba.',
      'Integração entre descoberta orgânica, mapa e página comercial.',
      'Arquitetura comercial sem repetir a lógica da capital.',
      'Planejamento para expandir sem criar ruído estrutural.'
    ],
    proofPoints: [
      'Página setorial de clínicas médicas já ativa.',
      'Serviço canônico de SEO Local já publicado.',
      'Página local da capital como referência estrutural.',
      'Base editorial e metodológica da AUDITSEO já disponível.'
    ],
    relatedLinks: [
      { label: 'SEO para Clínicas Médicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Página setorial-mãe.' },
      { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
      {
        label: 'SEO Local para Clínicas Médicas em São Paulo',
        path: '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/',
        reason: 'Referência da capital para a malha local.'
      },
      {
        label: 'SEO Local para Clínicas Médicas em Campinas',
        path: '/servicos/seo-local-para-clinicas-medicas-em-campinas/',
        reason: 'Comparação com outro polo estratégico do interior.'
      },
      { label: 'Especialista em SEO', path: '/blog/especialista-em-seo/', reason: 'Apoio BOFU de decisão.' }
    ],
    faqItems: [
      {
        question: 'SEO local para clínicas médicas funciona bem em São José dos Campos?',
        answer:
          'Funciona quando a clínica estrutura corretamente a página local, a mensagem comercial e os sinais do mapa para responder à intenção da cidade e da região.'
      },
      {
        question: 'Por que criar uma página específica para São José dos Campos?',
        answer:
          'Porque a cidade tem contexto regional próprio e pode sustentar uma intenção local diferente da capital. Sem essa página, a clínica tende a depender de uma estrutura genérica.'
      },
      {
        question: 'Google Meu Negócio deve ser trabalhado junto nessa cidade?',
        answer:
          'Na maioria dos casos, sim. O mapa influencia a decisão de quem procura clínica por proximidade, rota e confiança local.'
      },
      {
        question: 'Essa página compete com a de São Paulo capital?',
        answer:
          'Não deve competir. A página da capital captura uma intenção urbana diferente. A de São José dos Campos traduz a tese comercial para a praça local.'
      },
      {
        question: 'Quanto tempo leva para gerar visibilidade local na cidade?',
        answer:
          'Depende da base atual e da velocidade de execução. O foco correto é medir aumento de contatos qualificados e cobertura da busca local.'
      },
      {
        question: 'Serve para clínica com uma única unidade?',
        answer:
          'Sim. Se essa unidade depende da cidade para gerar demanda, a página local é uma camada comercial importante.'
      },
      {
        question: 'Vale combinar essa página com páginas por especialidade?',
        answer:
          'Vale quando houver demanda clara por especialidade. A página local organiza a geografia; as páginas de especialidade aprofundam a intenção.'
      },
      {
        question: 'Quando contratar SEO local em São José dos Campos faz mais sentido?',
        answer:
          'Quando a clínica quer fortalecer sua presença no Google, reduzir dependência de canais pagos e converter melhor buscas já orientadas a contato.'
      }
    ],
    ctaTitle: 'QUER FAZER SUA CLÍNICA GANHAR MAIS FORÇA NO GOOGLE EM SÃO JOSÉ DOS CAMPOS?',
    ctaCopy:
      'Se a operação depende da cidade para crescer e hoje o Google ainda não está gerando a qualidade de contatos esperada, a melhor entrada é um diagnóstico comercial orientado à busca local.',
    ctaPrimaryLabel: 'Solicitar diagnóstico local em São José dos Campos',
    ctaSecondaryPath: '/contato/',
    ctaSecondaryLabel: 'Falar com a AUDITSEO',
    areaServedName: 'São José dos Campos',
    brief: requireBrief('/servicos/seo-local-para-clinicas-medicas-em-sao-jose-dos-campos/')
  }
];

export function getServiceFirstCommercialPageBySlug(slug: string) {
  return serviceFirstCommercialPages.find((page) => page.slug === slug) ?? null;
}
