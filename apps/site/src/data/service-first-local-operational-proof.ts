export interface ServiceFirstOperationalProofCard {
  label: string;
  title: string;
  copy: string;
  items: string[];
}

export interface ServiceFirstOperationalProofGroup {
  eyebrow: string;
  title: string;
  copy: string;
  cards: ServiceFirstOperationalProofCard[];
  signals: string[];
}

function createGroup(
  title: string,
  copy: string,
  cards: ServiceFirstOperationalProofCard[],
  signals: string[]
): ServiceFirstOperationalProofGroup {
  return {
    eyebrow: 'Prova operacional',
    title,
    copy,
    cards,
    signals
  };
}

export const serviceFirstLocalOperationalProof: Record<string, ServiceFirstOperationalProofGroup> = {
  '/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/': createGroup(
    'COMO SÃO PAULO É TRABALHADA NESTA FRENTE LOCAL',
    'Na capital, a prova operacional precisa aparecer na forma como a praça é lida, como as especialidades são conectadas à cidade e como a descoberta local vira contato melhor.',
    [
      {
        label: 'Praça',
        title: 'O que São Paulo muda na leitura',
        copy: 'São Paulo não entra aqui como cidade genérica. Ela entra como praça de alta competição, alta fragmentação de demanda e alto peso de clareza comercial.',
        items: [
          'Leitura da capital por especialidade, contexto local e recorte de demanda.',
          'Separação entre busca por clínica, busca por tratamento e busca puramente local.',
          'Filtro para a capital não competir semanticamente com a vertical-mãe.'
        ]
      },
      {
        label: 'Ativos',
        title: 'Quais peças precisam sustentar a operação',
        copy: 'A página só fica legítima quando conversa com os ativos certos da praça e da vertical.',
        items: [
          'Página local alinhada à tese comercial de clínicas médicas.',
          'Integração real com SEO local, Google Maps e conteúdos BOFU da vertical.',
          'Estrutura preparada para reforçar descoberta sem inflar páginas repetidas.'
        ]
      },
      {
        label: 'Gestão',
        title: 'Como a decisão evolui depois da publicação',
        copy: 'A utilidade da página está em orientar próximos movimentos comerciais dentro da capital.',
        items: [
          'Critério para decidir novos reforços locais ou páginas por especialidade.',
          'Leitura contínua das consultas que geram contato de melhor qualidade.',
          'Priorização da capital sem perder a hierarquia do cluster nacional.'
        ]
      }
    ],
    ['São Paulo capital', 'Saúde privada', 'SEO local', 'Demanda fragmentada']
  ),
  '/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/': createGroup(
    'COMO O MAPA GANHA FUNÇÃO COMERCIAL EM SÃO PAULO',
    'Em São Paulo, o Google Meu Negócio precisa deixar de ser cadastro e passar a operar como peça de descoberta, comparação e triagem comercial junto da página certa.',
    [
      {
        label: 'Maps',
        title: 'O que é observado no ativo local',
        copy: 'Na capital, perfil local solto não sustenta descoberta por muito tempo. O ativo precisa conversar com a praça e com a vertical.',
        items: [
          'Coerência entre perfil, cidade, especialidade e proposta comercial.',
          'Leitura do papel do Maps na triagem da busca local em São Paulo.',
          'Filtro entre presença de perfil e capacidade real de gerar contato.'
        ]
      },
      {
        label: 'Conexão',
        title: 'Como o perfil conversa com o site',
        copy: 'O ganho vem quando o mapa empurra o usuário para a mesma leitura comercial da página local.',
        items: [
          'Integração com a página de clínicas médicas em São Paulo.',
          'Compatibilidade entre oferta local, CTA e contexto da praça.',
          'Ligação com conteúdos BOFU que ajudam a remover objeções de descoberta local.'
        ]
      },
      {
        label: 'Rotina',
        title: 'O que precisa ser mantido com disciplina',
        copy: 'A diferença entre perfil forte e perfil reativo está na governança do ativo.',
        items: [
          'Critério para atualização do perfil sem ruído comercial.',
          'Consistência entre o que o usuário encontra no mapa e no site.',
          'Leitura do que reforça ou enfraquece a descoberta local na capital.'
        ]
      }
    ],
    ['Maps', 'São Paulo capital', 'Integração com site', 'Descoberta imediata']
  ),
  '/servicos/seo-local-para-dermatologistas-em-sao-paulo/': createGroup(
    'COMO A DERMATOLOGIA É TRATADA LOCALMENTE EM SÃO PAULO',
    'Aqui a prova operacional precisa mostrar como tratamento, autoridade local e comparação urbana são organizados na mesma frente sem virar copy genérica.',
    [
      {
        label: 'Mercado',
        title: 'Como a especialidade é lida na capital',
        copy: 'Dermatologia em São Paulo exige leitura mais fina de intenção, porque o paciente compara tratamento, confiança e proximidade muito cedo.',
        items: [
          'Mapeamento da demanda por tratamento e por contexto local da capital.',
          'Separação entre busca por especialidade, busca estética e busca clínica.',
          'Filtro para a página local não virar apenas adaptação da vertical nacional.'
        ]
      },
      {
        label: 'Estrutura',
        title: 'Quais ativos precisam reforçar a mesma tese',
        copy: 'A operação fica mais forte quando a página local conversa com a vertical, o mapa e os conteúdos de decisão corretos.',
        items: [
          'Página local aderente à especialidade e à cidade.',
          'Apoio do Google Meu Negócio e dos artigos BOFU de dermatologia.',
          'Clareza de mensagem para reduzir ruído entre descoberta e contato.'
        ]
      },
      {
        label: 'Decisão',
        title: 'O que essa página precisa orientar',
        copy: 'A página local não existe só para capturar busca. Ela existe para ajudar a operação a decidir próximos reforços da praça.',
        items: [
          'Critério para aprofundar tratamentos ou bairros só quando houver função comercial real.',
          'Leitura das consultas que puxam melhor demanda qualificada.',
          'Proteção da hierarquia entre vertical dermatológica e ativos locais.'
        ]
      }
    ],
    ['Dermatologia', 'São Paulo capital', 'Tratamentos', 'Autoridade local']
  ),
  '/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/': createGroup(
    'COMO O MAPA É OPERADO PARA DERMATOLOGIA EM SÃO PAULO',
    'Na dermatologia, o perfil local precisa ajudar a filtrar especialidade, confiança e comparação rápida. Essa prova aparece na forma de integração entre mapa, cidade e página local.',
    [
      {
        label: 'Perfil',
        title: 'O que é lido no GBP',
        copy: 'O ativo local precisa refletir a especialidade com clareza suficiente para a capital.',
        items: [
          'Coerência entre perfil, especialidade e contexto urbano.',
          'Leitura de sinais que ajudam o paciente a comparar com mais rapidez.',
          'Filtro para o perfil não competir com a página local da especialidade.'
        ]
      },
      {
        label: 'Ligação',
        title: 'Como o mapa reforça a página correta',
        copy: 'A força do perfil cresce quando ele empurra o usuário para a mesma mensagem comercial da página local.',
        items: [
          'Integração direta com a página local de dermatologistas em São Paulo.',
          'Conexão com conteúdos BOFU da mesma vertical.',
          'Consistência de proposta entre mapa, especialidade e CTA.'
        ]
      },
      {
        label: 'Governança',
        title: 'O que precisa ser protegido na rotina',
        copy: 'A governança aqui impede que o perfil perca aderência e clareza ao longo do tempo.',
        items: [
          'Revisão contínua de coerência entre oferta, perfil e página.',
          'Leitura do papel do mapa na triagem local da especialidade.',
          'Critério para expansão sem romper a hierarquia da vertical.'
        ]
      }
    ],
    ['Dermatologia', 'Maps', 'São Paulo capital', 'Comparação rápida']
  ),
  '/servicos/seo-local-para-odontologia-em-sao-paulo/': createGroup(
    'COMO A ODONTOLOGIA É TRATADA LOCALMENTE EM SÃO PAULO',
    'Na odontologia, a prova operacional precisa mostrar como procedimento, proximidade e decisão rápida entram no mesmo sistema comercial da capital.',
    [
      {
        label: 'Demanda',
        title: 'O que muda na leitura da praça',
        copy: 'Odontologia responde muito à combinação entre procedimento, proximidade e facilidade de ação.',
        items: [
          'Leitura da capital por procedimento, urgência e contexto local.',
          'Separação entre busca por especialidade, busca por agenda e busca de proximidade.',
          'Filtro para São Paulo não virar só uma cidade inserida no mesmo template.'
        ]
      },
      {
        label: 'Ativos',
        title: 'O que precisa operar junto',
        copy: 'A página local precisa funcionar como peça central da descoberta comercial da praça.',
        items: [
          'Página local de odontologia alinhada à tese da vertical.',
          'Integração com Google Meu Negócio e BOFU de decisão da mesma área.',
          'Estrutura pronta para reforçar procedimento e cidade sem canibalização.'
        ]
      },
      {
        label: 'Evolução',
        title: 'Como a capital orienta os próximos passos',
        copy: 'A página local ajuda a decidir o que merece reforço na praça e o que ainda deve esperar.',
        items: [
          'Critério para abrir novas derivações só quando houver demanda observável.',
          'Leitura das consultas que sustentam agenda mais qualificada.',
          'Proteção da hierarquia entre a vertical odontológica e a cidade.'
        ]
      }
    ],
    ['Odontologia', 'São Paulo capital', 'Procedimentos', 'Busca por proximidade']
  ),
  '/servicos/google-meu-negocio-para-odontologia-em-sao-paulo/': createGroup(
    'COMO O MAPA É TRATADO PARA ODONTOLOGIA EM SÃO PAULO',
    'A prova operacional aqui não está em dizer que o perfil resolve tudo. Está em mostrar como ele é lido, ligado à página local e mantido com função comercial clara.',
    [
      {
        label: 'Maps',
        title: 'O que é lido no perfil local',
        copy: 'Em odontologia, o mapa participa cedo da comparação. O perfil precisa sustentar proximidade, clareza e ação rápida.',
        items: [
          'Leitura do perfil como ativo de comparação local e não só de presença.',
          'Coerência entre cidade, especialidade e proposta comercial.',
          'Filtro para o usuário encontrar no mapa a mesma leitura da página local.'
        ]
      },
      {
        label: 'Integração',
        title: 'Como o perfil conversa com a página',
        copy: 'A integração correta evita ruído entre o que o usuário vê no mapa e no site.',
        items: [
          'Ligação direta com a página local de odontologia em São Paulo.',
          'Compatibilidade entre oferta, contexto da praça e CTA.',
          'Apoio dos conteúdos de BOFU que ajudam a decisão local.'
        ]
      },
      {
        label: 'Rotina',
        title: 'O que precisa ser mantido com critério',
        copy: 'A operação de Maps só se sustenta quando existe disciplina e leitura de contexto comercial.',
        items: [
          'Governança do perfil sem promessas infladas ou sinais contraditórios.',
          'Leitura do papel do mapa dentro da jornada local de odontologia.',
          'Critério para reforçar a capital sem romper a hierarquia do cluster.'
        ]
      }
    ],
    ['Odontologia', 'Maps', 'São Paulo capital', 'Ação rápida']
  ),
  '/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/': createGroup(
    'COMO A GRANDE SÃO PAULO É TRABALHADA COMO PONTE REGIONAL',
    'Aqui a prova operacional precisa mostrar por que a região existe: para organizar uma expansão comercial coerente entre a capital e as demais praças prioritárias.',
    [
      {
        label: 'Região',
        title: 'O que valida a camada regional',
        copy: 'A Grande São Paulo só entra quando ajuda a organizar a demanda de várias praças próximas sem confundir o papel de cada cidade.',
        items: [
          'Separação entre capital, região metropolitana e futuras cidades derivadas.',
          'Leitura da região como ponte comercial e não como página agregada vazia.',
          'Filtro para evitar colisão com a página local da capital.'
        ]
      },
      {
        label: 'Arquitetura',
        title: 'Quais ativos precisam sustentar a ponte',
        copy: 'A camada regional só funciona quando conversa com os ativos certos da vertical e da expansão.',
        items: [
          'Integração com a página local de São Paulo e com a vertical nacional.',
          'Apoio de conteúdos BOFU e de praças prioritárias da mesma malha.',
          'Base para ordenar expansão sem doorway nem dispersão geográfica.'
        ]
      },
      {
        label: 'Expansão',
        title: 'Como a região orienta o próximo passo',
        copy: 'A função da página regional é ajudar a priorizar novas cidades sem romper a lógica comercial do cluster.',
        items: [
          'Critério para decidir quando abrir Campinas, São José e outras praças.',
          'Leitura das consultas que pedem capital, região ou cidade específica.',
          'Proteção da hierarquia entre camada regional e páginas locais.'
        ]
      }
    ],
    ['Grande São Paulo', 'Ponte regional', 'Expansão controlada', 'Saúde privada']
  ),
  '/servicos/seo-local-para-clinicas-medicas-em-campinas/': createGroup(
    'COMO CAMPINAS É TRABALHADA COMO PRAÇA PRÓPRIA',
    'Campinas não entra como extensão automática da capital. Ela entra como praça empresarial e regional própria, com leitura local específica dentro da vertical de saúde.',
    [
      {
        label: 'Praça',
        title: 'O que Campinas muda na operação',
        copy: 'A cidade exige leitura própria de contexto local e não pode ser tratada apenas como derivação de São Paulo.',
        items: [
          'Leitura de Campinas como praça própria da expansão comercial.',
          'Separação entre busca local da cidade, região e capital.',
          'Filtro para a página local ter função comercial clara.'
        ]
      },
      {
        label: 'Sistema',
        title: 'Quais ativos precisam operar juntos',
        copy: 'A página local precisa ser sustentada pelos mesmos ativos certos da vertical, mas com leitura adaptada à praça.',
        items: [
          'Integração com a vertical nacional e a camada de SEO local.',
          'Apoio BOFU coerente com a lógica da cidade.',
          'Estrutura pronta para reforçar descoberta local sem repetir a capital.'
        ]
      },
      {
        label: 'Decisão',
        title: 'Como a praça orienta os próximos movimentos',
        copy: 'Campinas precisa servir de base para decidir expansão, reforço editorial e novas páginas locais.',
        items: [
          'Critério para aprofundar a praça sem inflar a arquitetura.',
          'Leitura da demanda que realmente gera contato melhor na cidade.',
          'Proteção da hierarquia entre Campinas, região e vertical-mãe.'
        ]
      }
    ],
    ['Campinas', 'Praça própria', 'SEO local', 'Expansão seletiva']
  ),
  '/servicos/seo-local-para-clinicas-medicas-em-sao-jose-dos-campos/': createGroup(
    'COMO SÃO JOSÉ DOS CAMPOS ENTRA NA MALHA LOCAL',
    'São José dos Campos entra aqui como praça seletiva da expansão, com função clara dentro da vertical de clínicas médicas e sem depender de adaptação genérica da capital.',
    [
      {
        label: 'Praça',
        title: 'O que valida a cidade na arquitetura',
        copy: 'A cidade entra quando o recorte local melhora a descoberta e ajuda a qualificar melhor a demanda da vertical.',
        items: [
          'Leitura de São José dos Campos como praça com função própria na expansão.',
          'Separação entre busca da cidade, busca regional e busca puramente setorial.',
          'Filtro para a página local existir por função e não por volume.'
        ]
      },
      {
        label: 'Ativos',
        title: 'Como a página conversa com o resto do sistema',
        copy: 'A operação local precisa manter coerência com os ativos nacionais e com as demais praças prioritárias.',
        items: [
          'Integração com a vertical de clínicas médicas e com SEO local.',
          'Apoio de conteúdos BOFU e complementos coerentes com a praça.',
          'Estrutura pronta para reforçar a cidade sem quebrar a hierarquia.'
        ]
      },
      {
        label: 'Gestão',
        title: 'O que essa praça ajuda a decidir',
        copy: 'A utilidade da página está em guiar próximos reforços locais com mais precisão comercial.',
        items: [
          'Critério para reforçar São José dos Campos sem replicar Campinas ou capital.',
          'Leitura das consultas que mostram aderência real da praça.',
          'Proteção da lógica comercial do cluster ao longo da expansão.'
        ]
      }
    ],
    ['São José dos Campos', 'Expansão seletiva', 'Saúde privada', 'Praça validada']
  )
};
