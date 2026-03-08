export interface ServiceCanonicalOperationalProofCard {
  label: string;
  title: string;
  copy: string;
  items: string[];
}

export interface ServiceCanonicalOperationalProof {
  eyebrow: string;
  title: string;
  copy: string;
  cards: ServiceCanonicalOperationalProofCard[];
  signals: string[];
}

function createProofGroup(
  title: string,
  copy: string,
  cards: ServiceCanonicalOperationalProofCard[],
  signals: string[]
): ServiceCanonicalOperationalProof {
  return {
    eyebrow: 'Prova operacional',
    title,
    copy,
    cards,
    signals
  };
}

export const serviceCanonicalOperationalProof: Record<string, ServiceCanonicalOperationalProof> = {
  '/servicos/consultoria-seo/': createProofGroup(
    'COMO A CONSULTORIA SEO VIRA ROTINA DE DECISÃO',
    'Sem depender de case antigo, a prova mais honesta está na forma como a operação lê contexto, organiza prioridade e transforma hipótese em plano executável.',
    [
      {
        label: 'Leitura',
        title: 'O que entra no diagnóstico da frente',
        copy: 'A consultoria não começa com recomendação pronta. Ela parte de leitura comercial, técnica e editorial da operação.',
        items: [
          'Inventário das páginas e consultas que mais deveriam sustentar negócio',
          'Leitura de gargalos de descoberta, página e conversão',
          'Capacidade interna para implementação, conteúdo e priorização'
        ]
      },
      {
        label: 'Artefatos',
        title: 'O que a operação recebe de forma prática',
        copy: 'O serviço precisa sair do campo da opinião e entrar no campo do material de trabalho.',
        items: [
          'Mapa de prioridade por impacto, esforço e dependência',
          'Direção para páginas, clusters e ativos comerciais',
          'Backlog de execução com ordem real de ataque'
        ]
      },
      {
        label: 'Decisão',
        title: 'O que muda depois da leitura',
        copy: 'A consultoria precisa reduzir ruído decisório, não aumentar volume de tarefa sem direção.',
        items: [
          'Mais clareza sobre o próximo ciclo de crescimento orgânico',
          'Menos disputa entre demanda técnica, conteúdo e comercial',
          'Critério mais forte para decidir o que entra e o que não entra'
        ]
      }
    ],
    ['Prioridade rastreável', 'Leitura comercial', 'Backlog acionável', 'Evolução contínua']
  ),
  '/servicos/auditoria-seo/': createProofGroup(
    'COMO A AUDITORIA SEO DEIXA DE VIRAR DOCUMENTO PARADO',
    'A melhor prova aqui não é prometer resultado antes do tempo. É mostrar como o diagnóstico é lido, devolvido e transformado em prioridade operacional.',
    [
      {
        label: 'Varredura',
        title: 'O que é inspecionado',
        copy: 'A auditoria parte de sinais que travam rastreabilidade, descoberta e capacidade comercial do site.',
        items: [
          'Crawlabilidade, canonização, profundidade e estrutura',
          'Páginas órfãs, intenção mal distribuída e arquitetura fraca',
          'Ruído entre problema técnico e impacto real de negócio'
        ]
      },
      {
        label: 'Saída',
        title: 'O que você recebe no fechamento',
        copy: 'O serviço precisa devolver clareza operacional e não uma lista genérica de problemas.',
        items: [
          'Achados organizados por criticidade e dependência',
          'Prioridades traduzidas para backlog técnico e comercial',
          'Indicação do que pode esperar e do que exige ação imediata'
        ]
      },
      {
        label: 'Aplicação',
        title: 'Como o diagnóstico vira ação',
        copy: 'A utilidade da auditoria está na forma como o achado orienta decisão e não só na profundidade da análise.',
        items: [
          'Sequência de correções com lógica de impacto',
          'Separação clara entre ajuste estrutural e evolução editorial',
          'Base mais limpa para consultoria, execução ou reestruturação'
        ]
      }
    ],
    ['Critério técnico', 'Priorização executável', 'Leitura de impacto', 'Diagnóstico útil']
  ),
  '/servicos/seo-local/': createProofGroup(
    'COMO O SEO LOCAL VIRA ATIVO COMERCIAL E NÃO SÓ PRESENÇA',
    'Sem case público recente, a prova mais forte está em mostrar a lógica operacional da frente local: leitura da praça, ativos envolvidos e decisão que sai disso.',
    [
      {
        label: 'Praça',
        title: 'O que é lido antes de abrir a frente local',
        copy: 'A página local só faz sentido quando a praça participa da aquisição e quando o ativo local conversa com o serviço certo.',
        items: [
          'Cidade, região e vertical com função comercial própria',
          'Papel do site, da página local e do perfil local na mesma jornada',
          'Consulta que pede presença real e não só tráfego genérico'
        ]
      },
      {
        label: 'Estrutura',
        title: 'O que é organizado na operação local',
        copy: 'SEO local exige coordenação de ativos. Não é um bloco solto dentro do marketing.',
        items: [
          'Página comercial compatível com a praça e a vertical',
          'Ligação entre ativo local, conteúdo BOFU e serviço canônico',
          'Critério de expansão para novas cidades sem canibalização'
        ]
      },
      {
        label: 'Gestão',
        title: 'O que a operação passa a acompanhar',
        copy: 'Sem governança, a frente local fica reativa e perde força rápido.',
        items: [
          'Consultas locais que realmente trazem contexto comercial',
          'Consistência entre perfil local, página e prova',
          'Ganhos de presença recorrente sem depender só de mídia paga'
        ]
      }
    ],
    ['Leitura por praça', 'Arquitetura local', 'Governança de ativos', 'Decisão geográfica']
  ),
  '/servicos/google-meu-negocio/': createProofGroup(
    'COMO O GOOGLE MEU NEGÓCIO ENTRA COMO PEÇA DE SISTEMA',
    'A prova aqui não é dizer que o perfil resolve tudo. É deixar claro como ele é auditado, ligado à página comercial e tratado como parte da estrutura local.',
    [
      {
        label: 'Perfil',
        title: 'O que é lido no ativo local',
        copy: 'A análise do perfil vai além do cadastro e observa aderência comercial e coerência da praça.',
        items: [
          'Categoria, descrição, serviços, horário e coerência da oferta',
          'Relação entre perfil, geografia e proposta comercial',
          'Sinais de confiança que sustentam a decisão do usuário'
        ]
      },
      {
        label: 'Conexão',
        title: 'Como o perfil conversa com o site',
        copy: 'O ganho real vem quando o ativo local deixa de competir com a página e passa a reforçá-la.',
        items: [
          'Ligação entre perfil local e página comercial correta',
          'Compatibilidade entre vertical, praça e oferta principal',
          'Apoio de conteúdos de decisão para filtrar objeção local'
        ]
      },
      {
        label: 'Operação',
        title: 'O que precisa ser mantido com critério',
        copy: 'Sem rotina mínima, o perfil melhora por pouco tempo e volta a perder força.',
        items: [
          'Coerência de serviços, atualizações e sinais de contexto',
          'Leitura do papel do perfil dentro da aquisição local',
          'Critério para expandir para novas praças ou novas verticais'
        ]
      }
    ],
    ['Leitura do perfil', 'Integração com o site', 'Governança local', 'Sinal de contexto']
  ),
  '/servicos/ai-overview-optimization/': createProofGroup(
    'COMO A OPERAÇÃO É PREPARADA PARA CITABILIDADE EM AI OVERVIEWS',
    'Sem inventar prova pública que ainda não existe, a camada abaixo mostra a estrutura operacional que sustenta essa frente: leitura de entidade, fonte, arquitetura e conteúdo citável.',
    [
      {
        label: 'Leitura',
        title: 'O que é auditado na base do site',
        copy: 'A frente não começa com buzzword. Ela começa com leitura do que o site sustenta ou não sustenta semanticamente.',
        items: [
          'Clareza de entidade, autoridade e consistência editorial',
          'Arquitetura de páginas comerciais, hubs e conteúdos de apoio',
          'Fontes, provas e estrutura que ajudam ou atrapalham a citação'
        ]
      },
      {
        label: 'Modelagem',
        title: 'O que é reorganizado na camada de conteúdo',
        copy: 'A estrutura precisa facilitar compreensão, citação e recuperação do contexto certo.',
        items: [
          'Páginas com papel claro dentro do cluster',
          'Conteúdo mais citável, objetivo e semanticamente limpo',
          'Sinais de autoria, método e consistência institucional'
        ]
      },
      {
        label: 'Operação',
        title: 'O que passa a ser observado continuamente',
        copy: 'AI Overview Optimization exige disciplina de evolução e não intervenção única.',
        items: [
          'Páginas com maior potencial de reforço ou reestruturação',
          'Relação entre query, intenção e tipo de ativo usado',
          'Necessidade de fortalecer prova, fonte e lastro comercial'
        ]
      }
    ],
    ['Entidade clara', 'Conteúdo citável', 'Arquitetura semântica', 'Evolução por cluster']
  ),
  '/servicos/llm-brand-presence/': createProofGroup(
    'COMO A PRESENÇA DE MARCA EM LLMS É TRATADA COMO SISTEMA',
    'A prova operacional aqui está em mostrar como entidade, páginas canônicas, consistência editorial e sinais institucionais são organizados para reforçar presença de marca.',
    [
      {
        label: 'Entidade',
        title: 'O que é lido na camada de marca',
        copy: 'LLM Brand Presence depende de coerência entre quem a marca é, o que oferece e como isso aparece no site.',
        items: [
          'Clareza de posicionamento, serviços e narrativa institucional',
          'Consistência entre páginas comerciais, editoriais e institucionais',
          'Sinais de autoria, responsabilidade e estrutura de confiança'
        ]
      },
      {
        label: 'Arquitetura',
        title: 'Como a presença é organizada no site',
        copy: 'Presença em LLMs exige que as páginas corretas existam e conversem entre si sem ruído.',
        items: [
          'Serviços canônicos fortes e derivados sem canibalização',
          'Clusters editoriais ligados a páginas comerciais reais',
          'Camada institucional preparada para sustentar reputação'
        ]
      },
      {
        label: 'Governança',
        title: 'O que a operação passa a proteger',
        copy: 'Sem disciplina editorial, a marca aparece de forma fragmentada e perde consistência.',
        items: [
          'Vocabulário estável entre serviço, conteúdo e oferta',
          'Atualização de páginas que sustentam entidade e descoberta',
          'Leitura contínua do que reforça ou enfraquece a marca'
        ]
      }
    ],
    ['Entidade consistente', 'Serviços claros', 'Governança editorial', 'Presença coerente']
  )
};
