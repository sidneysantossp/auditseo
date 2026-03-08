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

type HealthProofCity = {
  name: string;
  slugSuffix: string;
  locationLabel: string;
  locationUpper: string;
  cityContext: string;
  discoveryContext: string;
  mapContext: string;
  signal: string;
};

type HealthProofSector = {
  slugBase: string;
  label: string;
  titleLabel: string;
  demandContext: string;
  structureContext: string;
  mapDecisionContext: string;
  mapComparisonContext: string;
};

function createHealthSeoProof(city: HealthProofCity, sector: HealthProofSector): ServiceFirstOperationalProofGroup {
  return createGroup(
    `COMO ${sector.titleLabel} É TRATADA LOCALMENTE ${city.locationUpper}`,
    `${city.cityContext} ${sector.label} precisa ser organizada com leitura local real, sem virar adaptação genérica da vertical nacional.`,
    [
      {
        label: 'Mercado',
        title: `Como ${sector.label.toLowerCase()} é lida ${city.locationLabel}`,
        copy: `${city.discoveryContext} ${sector.demandContext}`,
        items: [
          `Mapeamento da demanda de ${sector.label.toLowerCase()} com recorte real da praça.`,
          `Separação entre busca local, busca setorial e conteúdo de apoio para ${sector.label.toLowerCase()}.`,
          'Filtro para a página local existir por função comercial e não por simples variação de URL.'
        ]
      },
      {
        label: 'Estrutura',
        title: 'Quais ativos precisam reforçar a mesma tese',
        copy: `${sector.structureContext} ${city.cityContext.toLowerCase()}`,
        items: [
          `Página local de ${sector.label.toLowerCase()} ligada à vertical principal.`,
          `Integração com Google Meu Negócio e BOFU da praça para ${sector.label.toLowerCase()}.`,
          'Clareza de mensagem para reduzir ruído entre descoberta e contato.'
        ]
      },
      {
        label: 'Decisão',
        title: 'O que essa página precisa orientar',
        copy: 'A utilidade da página local está em ajudar a operação a decidir próximos reforços da praça com mais precisão.',
        items: [
          `Critério para aprofundar ${city.name} sem inflar a arquitetura.`,
          'Leitura das consultas que puxam melhor demanda qualificada.',
          `Proteção da hierarquia entre ${sector.label.toLowerCase()} e os ativos locais da praça.`
        ]
      }
    ],
    [sector.label, city.name, 'SEO local', city.signal]
  );
}

function createHealthGbpProof(city: HealthProofCity, sector: HealthProofSector): ServiceFirstOperationalProofGroup {
  return createGroup(
    `COMO O MAPA É OPERADO PARA ${sector.titleLabel} ${city.locationUpper}`,
    `${city.mapContext} o perfil local precisa reforçar a mesma leitura comercial da página certa, sem operar como cadastro isolado.`,
    [
      {
        label: 'Perfil',
        title: 'O que é lido no ativo local',
        copy: `${sector.mapDecisionContext} ${city.locationLabel}`,
        items: [
          'Coerência entre perfil, especialidade, geografia e proposta comercial.',
          `Leitura do papel do Maps na triagem local da busca ${city.locationLabel}.`,
          'Filtro entre presença no perfil e capacidade real de gerar contato.'
        ]
      },
      {
        label: 'Integração',
        title: 'Como o perfil conversa com a página',
        copy: `${sector.mapComparisonContext} o usuário precisa encontrar a mesma proposta no perfil e na página local.`,
        items: [
          `Integração direta com a página local de ${sector.label.toLowerCase()} ${city.locationLabel}.`,
          'Compatibilidade entre contexto da praça, CTA e proposta principal.',
          'Ligação com BOFU da praça para reduzir objeção de descoberta local.'
        ]
      },
      {
        label: 'Governança',
        title: 'O que precisa ser mantido com critério',
        copy: 'A governança do perfil protege a aderência comercial da praça ao longo do tempo.',
        items: [
          'Atualização do perfil sem ruído entre site e Maps.',
          `Leitura do papel do mapa dentro da jornada local de ${sector.label.toLowerCase()}.`,
          `Critério para reforçar ${city.name} sem romper a hierarquia do cluster.`
        ]
      }
    ],
    [sector.label, city.name, 'Maps', city.signal]
  );
}

function createHealthProofSet(city: HealthProofCity, sector: HealthProofSector) {
  return {
    [`/servicos/seo-local-para-${sector.slugBase}-${city.slugSuffix}/`]: createHealthSeoProof(city, sector),
    [`/servicos/google-meu-negocio-para-${sector.slugBase}-${city.slugSuffix}/`]: createHealthGbpProof(city, sector)
  };
}

const rioCityProof: HealthProofCity = {
  name: 'Rio de Janeiro',
  slugSuffix: 'em-rio-de-janeiro',
  locationLabel: 'no Rio de Janeiro',
  locationUpper: 'NO RIO DE JANEIRO',
  cityContext: 'No Rio de Janeiro,',
  discoveryContext: 'No Rio, contexto local, confiança e comparação urbana pesam cedo na decisão.',
  mapContext: 'No Rio,',
  signal: 'Confiança local'
};

const beloHorizonteCityProof: HealthProofCity = {
  name: 'Belo Horizonte',
  slugSuffix: 'em-belo-horizonte',
  locationLabel: 'em Belo Horizonte',
  locationUpper: 'EM BELO HORIZONTE',
  cityContext: 'Em Belo Horizonte,',
  discoveryContext: 'Em BH, clareza de proposta, contexto geográfico e confiança ajudam a qualificar melhor a descoberta.',
  mapContext: 'Em BH,',
  signal: 'Praça própria'
};

const curitibaCityProof: HealthProofCity = {
  name: 'Curitiba',
  slugSuffix: 'em-curitiba',
  locationLabel: 'em Curitiba',
  locationUpper: 'EM CURITIBA',
  cityContext: 'Em Curitiba,',
  discoveryContext: 'Em Curitiba, coerência de oferta e disciplina comercial tendem a pesar mais na qualidade do contato.',
  mapContext: 'Em Curitiba,',
  signal: 'Clareza comercial'
};

const brasiliaCityProof: HealthProofCity = {
  name: 'Brasília',
  slugSuffix: 'em-brasilia',
  locationLabel: 'em Brasília',
  locationUpper: 'EM BRASÍLIA',
  cityContext: 'Em Brasília,',
  discoveryContext: 'Em Brasília, posicionamento, clareza de proposta e confiança institucional pesam cedo na triagem.',
  mapContext: 'Em Brasília,',
  signal: 'Confiança institucional'
};

const portoAlegreCityProof: HealthProofCity = {
  name: 'Porto Alegre',
  slugSuffix: 'em-porto-alegre',
  locationLabel: 'em Porto Alegre',
  locationUpper: 'EM PORTO ALEGRE',
  cityContext: 'Em Porto Alegre,',
  discoveryContext: 'Em Porto Alegre, consistência entre oferta, página e prova local ajuda a filtrar melhor a demanda.',
  mapContext: 'Em Porto Alegre,',
  signal: 'Coerência local'
};

const dermatologiaProofSector: HealthProofSector = {
  slugBase: 'dermatologistas',
  label: 'dermatologia',
  titleLabel: 'DERMATOLOGIA',
  demandContext: 'Tratamento, autoridade local e comparação rápida entram na mesma decisão comercial.',
  structureContext: 'A operação fica mais forte quando a página local conversa com a vertical, o mapa e os conteúdos de decisão corretos.',
  mapDecisionContext: 'O ativo local precisa refletir a especialidade com clareza suficiente para o contexto da praça.',
  mapComparisonContext: 'Na dermatologia, o mapa participa cedo da comparação'
};

const odontologiaProofSector: HealthProofSector = {
  slugBase: 'odontologia',
  label: 'odontologia',
  titleLabel: 'ODONTOLOGIA',
  demandContext: 'Procedimento, proximidade e decisão rápida entram no mesmo sistema comercial da praça.',
  structureContext: 'A página local precisa funcionar como peça central da descoberta comercial da praça.',
  mapDecisionContext: 'Em odontologia, o perfil local precisa sustentar proximidade, clareza e ação rápida.',
  mapComparisonContext: 'Na odontologia, o mapa participa cedo da comparação'
};

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
  ),
  '/servicos/seo-local-para-clinicas-medicas-em-rio-de-janeiro/': createGroup(
    'COMO O RIO DE JANEIRO É TRATADO NESTA FRENTE LOCAL',
    'No Rio de Janeiro, a prova operacional precisa mostrar como contexto local, confiança e descoberta comercial são organizados para a vertical de clínicas médicas.',
    [
      {
        label: 'Praça',
        title: 'O que o Rio muda na leitura',
        copy: 'O Rio entra como praça em que contexto local, clareza de oferta e triagem de confiança pesam cedo na decisão do paciente.',
        items: [
          'Leitura da cidade por intenção local, especialidade e contexto de comparação.',
          'Separação entre busca local do Rio, busca setorial e conteúdo de apoio.',
          'Filtro para a página local não competir com a vertical nacional.'
        ]
      },
      {
        label: 'Ativos',
        title: 'Quais peças precisam sustentar a operação',
        copy: 'A força da praça aparece quando página local, SEO local, mapa e BOFU reforçam a mesma lógica comercial.',
        items: [
          'Página local de clínicas médicas ligada à tese nacional da vertical.',
          'Integração com Google Meu Negócio e conteúdo BOFU da cidade.',
          'Estrutura pronta para descoberta local sem replicar a capital paulista.'
        ]
      },
      {
        label: 'Gestão',
        title: 'Como a cidade orienta o próximo passo',
        copy: 'A utilidade da página está em ajudar a priorizar reforços locais e leitura comercial da praça.',
        items: [
          'Critério para aprofundar o Rio sem inflar a arquitetura.',
          'Leitura das consultas que puxam contato mais qualificado.',
          'Proteção da hierarquia entre cidade, vertical e serviço canônico.'
        ]
      }
    ],
    ['Rio de Janeiro', 'Saúde privada', 'SEO local', 'Confiança local']
  ),
  '/servicos/google-meu-negocio-para-clinicas-medicas-em-rio-de-janeiro/': createGroup(
    'COMO O MAPA É OPERADO PARA CLÍNICAS NO RIO DE JANEIRO',
    'No Rio, o perfil local precisa funcionar como ativo de descoberta e comparação junto da página correta, e não como cadastro isolado.',
    [
      {
        label: 'Perfil',
        title: 'O que é lido no ativo local',
        copy: 'O Maps precisa refletir a mesma clareza comercial que a praça exige para clínicas médicas.',
        items: [
          'Coerência entre perfil, cidade, especialidade e oferta principal.',
          'Leitura do papel do mapa na triagem local da busca no Rio.',
          'Filtro entre presença no perfil e geração real de contato.'
        ]
      },
      {
        label: 'Integração',
        title: 'Como o perfil conversa com a página',
        copy: 'A força do ativo cresce quando o mapa empurra o usuário para a mesma leitura da página local.',
        items: [
          'Integração com a página de clínicas médicas no Rio de Janeiro.',
          'Compatibilidade entre CTA, geografia e contexto da praça.',
          'Apoio de conteúdo BOFU para remover objeções locais.'
        ]
      },
      {
        label: 'Rotina',
        title: 'O que precisa ser mantido com disciplina',
        copy: 'Sem governança, o perfil perde aderência à praça e ao site.',
        items: [
          'Critério para atualização do perfil sem ruído comercial.',
          'Consistência entre o que o usuário encontra no mapa e na página.',
          'Leitura do que fortalece ou enfraquece a descoberta local no Rio.'
        ]
      }
    ],
    ['Rio de Janeiro', 'Maps', 'Integração com site', 'Triagem local']
  ),
  '/servicos/seo-local-para-clinicas-medicas-em-belo-horizonte/': createGroup(
    'COMO BELO HORIZONTE É TRABALHADA NESTA FRENTE LOCAL',
    'Em Belo Horizonte, a prova operacional precisa mostrar como proposta, confiança e contexto geográfico ajudam a qualificar melhor a descoberta orgânica da clínica.',
    [
      {
        label: 'Praça',
        title: 'O que BH muda na leitura',
        copy: 'Belo Horizonte entra como praça em que contexto regional, clareza de proposta e proximidade ajudam a filtrar melhor a demanda.',
        items: [
          'Leitura da cidade por intenção local, contexto de busca e aderência comercial.',
          'Separação entre busca local de BH, busca setorial e conteúdo de decisão.',
          'Filtro para a página local existir por função comercial e não por volume.'
        ]
      },
      {
        label: 'Ativos',
        title: 'Quais peças precisam operar juntas',
        copy: 'A força da praça aparece quando a página local conversa com os ativos certos da vertical.',
        items: [
          'Página local de clínicas médicas ligada ao serviço canônico.',
          'Integração com Google Meu Negócio e conteúdos BOFU da cidade.',
          'Estrutura preparada para reforçar descoberta local sem ruído geográfico.'
        ]
      },
      {
        label: 'Gestão',
        title: 'Como a praça orienta os próximos movimentos',
        copy: 'A página local também serve para guiar a expansão e a leitura da cidade como mercado.',
        items: [
          'Critério para reforçar BH sem repetir a capital ou a região.',
          'Leitura das consultas que geram contato de melhor qualidade.',
          'Proteção da hierarquia entre cidade, vertical e conteúdo de apoio.'
        ]
      }
    ],
    ['Belo Horizonte', 'Saúde privada', 'SEO local', 'Praça própria']
  ),
  '/servicos/google-meu-negocio-para-clinicas-medicas-em-belo-horizonte/': createGroup(
    'COMO O MAPA É OPERADO PARA CLÍNICAS EM BELO HORIZONTE',
    'Em BH, o Google Meu Negócio precisa reforçar proposta, geografia e coerência entre perfil e página local, sem operar como ativo isolado.',
    [
      {
        label: 'Perfil',
        title: 'O que é lido no Maps',
        copy: 'O ativo local precisa refletir a mesma clareza de proposta e contexto geográfico da página da cidade.',
        items: [
          'Coerência entre perfil, especialidade e oferta principal.',
          'Leitura do papel do mapa na triagem da busca local em BH.',
          'Filtro entre visibilidade do perfil e qualidade real do contato.'
        ]
      },
      {
        label: 'Conexão',
        title: 'Como o perfil reforça a página correta',
        copy: 'A operação fica mais forte quando o mapa empurra o usuário para a mesma mensagem da página local.',
        items: [
          'Integração com a página de clínicas médicas em Belo Horizonte.',
          'Compatibilidade entre CTA, contexto da cidade e proposta local.',
          'Ligação com BOFU que ajuda a filtrar objeção de descoberta local.'
        ]
      },
      {
        label: 'Governança',
        title: 'O que precisa ser mantido com critério',
        copy: 'A governança do perfil protege a aderência comercial da praça ao longo do tempo.',
        items: [
          'Atualização do perfil sem ruído entre site e Maps.',
          'Leitura do papel do mapa dentro da jornada local da clínica.',
          'Critério para reforçar BH sem quebrar a hierarquia do cluster.'
        ]
      }
    ],
    ['Belo Horizonte', 'Maps', 'Coerência local', 'Integração com site']
  ),
  '/servicos/seo-local-para-clinicas-medicas-em-curitiba/': createGroup(
    'COMO CURITIBA É TRATADA NESTA FRENTE LOCAL',
    'Em Curitiba, a prova operacional precisa mostrar como disciplina de oferta e coerência entre ativos locais ajudam a gerar contatos melhores para clínicas médicas.',
    [
      {
        label: 'Praça',
        title: 'O que Curitiba muda na leitura',
        copy: 'Curitiba responde melhor a estrutura comercial coerente do que a página local genérica.',
        items: [
          'Leitura da cidade por contexto local, proposta e intenção de busca.',
          'Separação entre busca de Curitiba, vertical setorial e conteúdo de apoio.',
          'Filtro para a praça existir por função comercial clara.'
        ]
      },
      {
        label: 'Ativos',
        title: 'Quais peças precisam sustentar a cidade',
        copy: 'A operação local só ganha força quando a página conversa com os ativos certos da vertical.',
        items: [
          'Página local conectada à tese nacional de clínicas médicas.',
          'Integração com Google Meu Negócio e BOFU da cidade.',
          'Estrutura pronta para reforçar descoberta sem repetir outras praças.'
        ]
      },
      {
        label: 'Gestão',
        title: 'Como a praça orienta a expansão',
        copy: 'A página local ajuda a organizar os próximos movimentos da cidade sem inflar a arquitetura.',
        items: [
          'Critério para reforçar Curitiba com mais precisão comercial.',
          'Leitura das consultas que mostram melhor aderência local.',
          'Proteção da hierarquia entre praça, vertical e serviço canônico.'
        ]
      }
    ],
    ['Curitiba', 'Saúde privada', 'SEO local', 'Clareza comercial']
  ),
  '/servicos/google-meu-negocio-para-clinicas-medicas-em-curitiba/': createGroup(
    'COMO O MAPA É OPERADO PARA CLÍNICAS EM CURITIBA',
    'Em Curitiba, o perfil local precisa reforçar proposta, clareza e contexto da praça junto da página local correta.',
    [
      {
        label: 'Perfil',
        title: 'O que é lido no ativo local',
        copy: 'O Maps precisa refletir o mesmo nível de coerência comercial da página da cidade.',
        items: [
          'Coerência entre perfil, especialidade e proposta principal.',
          'Leitura do papel do mapa na triagem local da busca em Curitiba.',
          'Filtro entre presença no perfil e contato comercial útil.'
        ]
      },
      {
        label: 'Integração',
        title: 'Como o perfil conversa com a página',
        copy: 'A força do ativo aumenta quando o mapa reforça a mesma mensagem da página local.',
        items: [
          'Integração com a página de clínicas médicas em Curitiba.',
          'Compatibilidade entre geografia, CTA e contexto da praça.',
          'Ligação com conteúdo BOFU da cidade para reduzir objeção local.'
        ]
      },
      {
        label: 'Rotina',
        title: 'O que precisa ser mantido com disciplina',
        copy: 'A governança do perfil protege a aderência da praça e a qualidade da descoberta.',
        items: [
          'Atualização coerente entre site, perfil e proposta local.',
          'Leitura do papel do Maps na jornada da clínica em Curitiba.',
          'Critério para reforçar a praça sem perder a hierarquia do cluster.'
        ]
      }
    ],
    ['Curitiba', 'Maps', 'Integração com site', 'Descoberta local']
  ),
  '/servicos/seo-local-para-clinicas-medicas-em-brasilia/': createGroup(
    'COMO BRASÍLIA É TRABALHADA NESTA FRENTE LOCAL',
    'Em Brasília, a prova operacional precisa mostrar como posicionamento, contexto institucional e clareza de proposta ajudam a qualificar a descoberta orgânica da clínica.',
    [
      {
        label: 'Praça',
        title: 'O que Brasília muda na leitura',
        copy: 'Brasília entra como praça em que clareza de posicionamento e percepção de confiança institucional pesam cedo na triagem.',
        items: [
          'Leitura da cidade por contexto local, intenção de busca e clareza de oferta.',
          'Separação entre busca local da praça, busca setorial e conteúdo de apoio.',
          'Filtro para a página local ter função comercial distinta.'
        ]
      },
      {
        label: 'Ativos',
        title: 'Quais peças precisam operar juntas',
        copy: 'A cidade só ganha força quando a página local conversa com a vertical e com os ativos certos do cluster.',
        items: [
          'Página local de clínicas médicas ligada ao serviço canônico.',
          'Integração com Google Meu Negócio e BOFU da própria praça.',
          'Estrutura pronta para reforçar descoberta local sem ruído institucional.'
        ]
      },
      {
        label: 'Gestão',
        title: 'Como a praça orienta o próximo passo',
        copy: 'A utilidade da página está em ajudar a decidir próximos reforços da cidade com mais precisão.',
        items: [
          'Critério para fortalecer Brasília sem romper a hierarquia nacional.',
          'Leitura das consultas que puxam melhor demanda qualificada.',
          'Proteção da relação entre praça, vertical e recursos de decisão.'
        ]
      }
    ],
    ['Brasília', 'Saúde privada', 'SEO local', 'Confiança institucional']
  ),
  '/servicos/google-meu-negocio-para-clinicas-medicas-em-brasilia/': createGroup(
    'COMO O MAPA É OPERADO PARA CLÍNICAS EM BRASÍLIA',
    'Em Brasília, o Google Meu Negócio precisa reforçar clareza institucional e contexto da praça junto da página local correta.',
    [
      {
        label: 'Perfil',
        title: 'O que é lido no Maps',
        copy: 'O ativo local precisa refletir a mesma consistência de proposta e contexto da página da cidade.',
        items: [
          'Coerência entre perfil, geografia e oferta principal.',
          'Leitura do papel do mapa na triagem local da busca em Brasília.',
          'Filtro entre visibilidade no perfil e capacidade real de gerar contato.'
        ]
      },
      {
        label: 'Integração',
        title: 'Como o perfil reforça a página correta',
        copy: 'A força do ativo cresce quando o mapa empurra o usuário para a mesma leitura comercial da página local.',
        items: [
          'Integração com a página de clínicas médicas em Brasília.',
          'Compatibilidade entre CTA, proposta e contexto da praça.',
          'Ligação com conteúdo BOFU para reduzir objeções locais.'
        ]
      },
      {
        label: 'Governança',
        title: 'O que precisa ser mantido com critério',
        copy: 'A governança aqui protege a aderência comercial da praça e evita ruído entre perfil e site.',
        items: [
          'Atualização do perfil sem desencontro entre Maps e página local.',
          'Leitura do papel do mapa dentro da jornada local da clínica.',
          'Critério para reforçar Brasília sem quebrar a hierarquia do cluster.'
        ]
      }
    ],
    ['Brasília', 'Maps', 'Clareza institucional', 'Integração com site']
  ),
  '/servicos/seo-local-para-clinicas-medicas-em-porto-alegre/': createGroup(
    'COMO PORTO ALEGRE É TRATADA NESTA FRENTE LOCAL',
    'Em Porto Alegre, a prova operacional precisa mostrar como consistência entre página, oferta e prova local melhora a qualidade do contato para clínicas médicas.',
    [
      {
        label: 'Praça',
        title: 'O que Porto Alegre muda na leitura',
        copy: 'Porto Alegre entra como praça em que coerência de oferta e contexto local ajudam a filtrar melhor a demanda.',
        items: [
          'Leitura da cidade por contexto local, proposta e aderência comercial.',
          'Separação entre busca local da praça, vertical setorial e conteúdo BOFU.',
          'Filtro para a cidade não virar apenas extensão de outra praça.'
        ]
      },
      {
        label: 'Ativos',
        title: 'Quais peças precisam sustentar a operação',
        copy: 'A cidade fica mais legítima quando a página local conversa com os ativos certos da vertical.',
        items: [
          'Página local de clínicas médicas ligada à vertical nacional.',
          'Integração com Google Meu Negócio e artigo BOFU da cidade.',
          'Estrutura pronta para reforçar descoberta com coerência local.'
        ]
      },
      {
        label: 'Gestão',
        title: 'Como a praça orienta os próximos movimentos',
        copy: 'A utilidade da página está em ajudar a decidir reforços locais sem inflar a malha comercial.',
        items: [
          'Critério para fortalecer Porto Alegre sem repetir outras praças.',
          'Leitura das consultas que mostram melhor aderência da cidade.',
          'Proteção da hierarquia entre cidade, vertical e serviço canônico.'
        ]
      }
    ],
    ['Porto Alegre', 'Saúde privada', 'SEO local', 'Coerência de oferta']
  ),
  '/servicos/google-meu-negocio-para-clinicas-medicas-em-porto-alegre/': createGroup(
    'COMO O MAPA É OPERADO PARA CLÍNICAS EM PORTO ALEGRE',
    'Em Porto Alegre, o perfil local precisa reforçar a mesma lógica comercial da página da cidade, com contexto e clareza de oferta bem amarrados.',
    [
      {
        label: 'Perfil',
        title: 'O que é lido no ativo local',
        copy: 'O Maps precisa refletir a mesma coerência de proposta e contexto comercial da página local.',
        items: [
          'Coerência entre perfil, especialidade e geografia da praça.',
          'Leitura do papel do mapa na triagem da busca local em Porto Alegre.',
          'Filtro entre presença no perfil e contato realmente qualificado.'
        ]
      },
      {
        label: 'Integração',
        title: 'Como o perfil conversa com a página',
        copy: 'A operação fica mais forte quando o mapa empurra o usuário para a mesma leitura comercial da cidade.',
        items: [
          'Integração com a página de clínicas médicas em Porto Alegre.',
          'Compatibilidade entre CTA, contexto local e proposta da clínica.',
          'Ligação com artigo BOFU da própria praça.'
        ]
      },
      {
        label: 'Rotina',
        title: 'O que precisa ser mantido com disciplina',
        copy: 'A governança do perfil protege a coerência da descoberta local ao longo do tempo.',
        items: [
          'Atualização do perfil sem ruído entre site e Maps.',
          'Leitura do papel do ativo dentro da jornada local da clínica.',
          'Critério para reforçar a praça sem romper a hierarquia do cluster.'
        ]
      }
    ],
    ['Porto Alegre', 'Maps', 'Integração com site', 'Coerência local']
  ),
  ...createHealthProofSet(rioCityProof, dermatologiaProofSector),
  ...createHealthProofSet(rioCityProof, odontologiaProofSector),
  ...createHealthProofSet(beloHorizonteCityProof, dermatologiaProofSector),
  ...createHealthProofSet(beloHorizonteCityProof, odontologiaProofSector),
  ...createHealthProofSet(curitibaCityProof, dermatologiaProofSector),
  ...createHealthProofSet(curitibaCityProof, odontologiaProofSector),
  ...createHealthProofSet(brasiliaCityProof, dermatologiaProofSector),
  ...createHealthProofSet(brasiliaCityProof, odontologiaProofSector),
  ...createHealthProofSet(portoAlegreCityProof, dermatologiaProofSector),
  ...createHealthProofSet(portoAlegreCityProof, odontologiaProofSector)
};
