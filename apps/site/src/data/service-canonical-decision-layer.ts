export interface ServiceCanonicalDecisionItem {
  title: string;
  copy: string;
}

export interface ServiceCanonicalDecisionCtaCard {
  title: string;
  items: string[];
}

export interface ServiceCanonicalDecisionLayer {
  eyebrow: string;
  title: string;
  copy: string;
  objections: ServiceCanonicalDecisionItem[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaCopy: string;
  ctaCards: ServiceCanonicalDecisionCtaCard[];
  secondaryPath: string;
  secondaryLabel: string;
}

function createBaseDecisionLayer(
  serviceLabel: string,
  objectionOne: string,
  objectionTwo: string,
  objectionThree: string,
  ctaEyebrow: string,
  ctaCards: ServiceCanonicalDecisionCtaCard[]
): ServiceCanonicalDecisionLayer {
  return {
    eyebrow: 'Decisão comercial',
    title: `OBJEÇÕES QUE MAIS ATRASAM A CONTRATAÇÃO DE ${serviceLabel.toUpperCase()}`,
    copy:
      'A camada abaixo antecipa as travas mais comuns da decisão. O objetivo não é pressionar a contratação, mas reduzir ruído antes do próximo passo comercial.',
    objections: [
      {
        title: 'Timing errado',
        copy: objectionOne
      },
      {
        title: 'Comparação ruim',
        copy: objectionTwo
      },
      {
        title: 'Escopo pouco claro',
        copy: objectionThree
      }
    ],
    ctaEyebrow,
    ctaTitle: `QUER VALIDAR SE ${serviceLabel.toUpperCase()} FAZ SENTIDO PARA O MOMENTO DA OPERAÇÃO?`,
    ctaCopy:
      'Se a dúvida hoje é entender timing, escopo e o papel real desse serviço dentro do crescimento, a melhor entrada é um diagnóstico orientado à decisão.',
    ctaCards,
    secondaryPath: '/contato/',
    secondaryLabel: 'Falar com a AUDITSEO'
  };
}

export const serviceCanonicalDecisionLayer: Record<string, ServiceCanonicalDecisionLayer> = {
  '/servicos/consultoria-seo/': createBaseDecisionLayer(
    'Consultoria SEO',
    'Consultoria SEO gera mais valor quando a operação já tem site, demanda e maturidade suficiente para implementar backlog estratégico com continuidade.',
    'Comparar consultoria apenas com agência ou freelancer tende a esconder a diferença entre direcionamento estratégico, profundidade técnica e capacidade de priorização.',
    'Sem clareza de escopo, a operação compra reunião e relatório. O ganho vem quando diagnóstico, plano e execução passam a conversar.',
    'Próximo passo',
    [
      {
        title: 'Esse contato vale mais quando...',
        items: [
          'A empresa já tem backlog, páginas relevantes e algum nível de maturidade operacional.',
          'Existe disponibilidade real para alinhar prioridade, execução e decisão com frequência.',
          'A dúvida principal é arquitetura, priorização e ritmo, não só preço.'
        ]
      },
      {
        title: 'O primeiro escopo normalmente cobre...',
        items: [
          'Leitura dos gargalos mais críticos do crescimento orgânico.',
          'Direção entre técnico, comercial, conteúdo e expansão do backlog.',
          'Critério para o que entra agora, o que espera e o que sai da fila.'
        ]
      },
      {
        title: 'Talvez outro ativo venha antes se...',
        items: [
          'O problema central ainda é descobrir o que trava o site.',
          'A empresa quer delegar tudo sem participação mínima do time interno.',
          'A conversa ainda está limitada a orçamento sem contexto suficiente.'
        ]
      }
    ]
  ),
  '/servicos/auditoria-seo/': createBaseDecisionLayer(
    'Auditoria SEO',
    'Auditoria faz sentido quando ainda existe dúvida sobre o que trava a performance. Se o problema já está claro, talvez a operação precise de execução e não de novo diagnóstico.',
    'Comparar auditoria com acompanhamento mensal costuma distorcer a decisão, porque um entrega leitura profunda e o outro sustenta a evolução contínua.',
    'Se o backlog técnico e comercial não for traduzido em prioridade de negócio, a auditoria vira documento e não instrumento de decisão.',
    'Próximo passo',
    [
      {
        title: 'Esse contato vale mais quando...',
        items: [
          'A empresa ainda não sabe com clareza o que está travando performance e geração de demanda.',
          'Existe um site relevante, páginas importantes e histórico suficiente para leitura aprofundada.',
          'O diagnóstico será usado para virar backlog e não só para validar suspeita.'
        ]
      },
      {
        title: 'O primeiro escopo normalmente cobre...',
        items: [
          'Separação entre gargalo estrutural, semântico e comercial.',
          'Critério de prioridade para correção, reforço e reestruturação.',
          'Leitura objetiva do que pede execução posterior e do que pode esperar.'
        ]
      },
      {
        title: 'Talvez outro ativo venha antes se...',
        items: [
          'O problema principal já está claro e o que falta é acompanhamento.',
          'O site ainda está tão inicial que uma auditoria profunda geraria ruído.',
          'A expectativa é impacto sem implementação posterior.'
        ]
      }
    ]
  ),
  '/servicos/seo-local/': createBaseDecisionLayer(
    'SEO Local',
    'SEO local não resolve em dias. Ele funciona melhor quando a empresa aceita construir ativo orgânico local e não apenas procurar atalho imediato.',
    'Muita comparação ruim coloca SEO local contra mídia paga como se ambos servissem ao mesmo horizonte. Um compra urgência, o outro constrói presença recorrente.',
    'Sem alinhar página comercial, Google Maps e sinais locais, o projeto perde clareza e fica reduzido à manutenção de perfil.',
    'Próximo passo local',
    [
      {
        title: 'Esse contato vale mais quando...',
        items: [
          'Geografia já influencia descoberta, comparação e contato comercial.',
          'A empresa quer alinhar site, página local e ativo complementar na mesma conversa.',
          'O objetivo é ganhar demanda local mais qualificada e menos dependente de mídia.'
        ]
      },
      {
        title: 'O primeiro escopo normalmente cobre...',
        items: [
          'Leitura das cidades e praças que realmente merecem reforço.',
          'Papel da página comercial, perfil local e apoio BOFU na mesma jornada.',
          'Direção de quais ativos precisam entrar primeiro para a frente fazer sentido.'
        ]
      },
      {
        title: 'Talvez outro ativo venha antes se...',
        items: [
          'A operação ainda não depende de geografia para vender.',
          'A expectativa ainda está concentrada em atalho imediato.',
          'Ainda falta clareza mínima sobre praça, oferta e proposta local.'
        ]
      }
    ]
  ),
  '/servicos/google-meu-negocio/': createBaseDecisionLayer(
    'Google Meu Negócio',
    'Perfil local isolado ajuda menos do que parece quando a página comercial do site não sustenta a mesma proposta de valor e a mesma geografia.',
    'A comparação errada trata Google Meu Negócio como substituto de SEO local. Na prática, ele funciona melhor como parte da mesma arquitetura.',
    'Sem critério de categoria, prova, horário, serviços e integração com o site, a operação melhora o perfil, mas não melhora a decisão do cliente.',
    'Próximo passo local',
    [
      {
        title: 'Esse contato vale mais quando...',
        items: [
          'O perfil local já participa da descoberta, mas ainda não sustenta boa triagem comercial.',
          'A empresa quer integrar perfil, página e contexto da praça com mais coerência.',
          'A dúvida principal é como fazer o Maps ajudar a venda, não só como ajustar cadastro.'
        ]
      },
      {
        title: 'O primeiro escopo normalmente cobre...',
        items: [
          'Leitura do papel real do perfil dentro da jornada local.',
          'Direção de integração entre categorias, sinais locais e página comercial.',
          'Critério do que precisa ser corrigido agora e do que depende da estrutura do site.'
        ]
      },
      {
        title: 'Talvez outro ativo venha antes se...',
        items: [
          'O perfil está sendo tratado como substituto da página comercial.',
          'A empresa ainda não definiu praça, oferta e recorte local.',
          'O problema principal está no site e não no ativo local em si.'
        ]
      }
    ]
  ),
  '/servicos/ai-overview-optimization/': createBaseDecisionLayer(
    'AI Overview Optimization',
    'Esse serviço faz mais sentido quando o site já tem base editorial e comercial suficiente para sustentar citabilidade, clareza semântica e evolução por cluster.',
    'Comparar AI Overview Optimization com SEO técnico puro ou com produção de conteúdo isolada leva a diagnósticos incompletos sobre o que realmente precisa mudar.',
    'Sem amarrar fonte, entidade, arquitetura e conteúdo citável, a operação discute IA sem construir um ativo consistente para respostas generativas.',
    'Próximo passo editorial',
    [
      {
        title: 'Esse contato vale mais quando...',
        items: [
          'O domínio já tem base editorial e comercial para sustentar citabilidade.',
          'A operação quer priorizar clusters, fontes e páginas com maior potencial de reforço.',
          'A dúvida principal é arquitetura e semântica, não só produção de conteúdo.',
          'A empresa já sabe se precisa de agência, consultoria ou auditoria antes de refinar a camada de IA.'
        ]
      },
      {
        title: 'O primeiro escopo normalmente cobre...',
        items: [
          'Leitura de citabilidade, entidade e estrutura por cluster.',
          'Priorização das páginas que podem ser reforçadas com menos ruído.',
          'Direção sobre quando a entrada correta é AI Overviews, técnico ou revisão editorial.',
          'Separação entre reforço comercial amplo, acompanhamento contínuo e diagnóstico mais técnico.'
        ]
      },
      {
        title: 'Talvez outro ativo venha antes se...',
        items: [
          'A operação ainda publica sem consistência nem governança mínima.',
          'O site está tecnicamente frágil a ponto de comprometer citabilidade.',
          'A expectativa é aparição imediata sem reorganizar fonte, entidade e conteúdo.'
        ]
      }
    ]
  ),
  '/servicos/llm-brand-presence/': createBaseDecisionLayer(
    'LLM Brand Presence',
    'Presença em LLMs não é um botão. Ela depende de entidade, consistência editorial e sinais suficientemente claros para a marca ser interpretada e citada.',
    'Comparar esse serviço com SEO tradicional sem considerar interfaces generativas reduz a discussão a clique e ignora descoberta, referência e citação.',
    'Sem governança editorial, fontes claras e páginas comercialmente coerentes, a marca até aparece, mas não consolida presença nem vantagem.',
    'Próximo passo editorial',
    [
      {
        title: 'Esse contato vale mais quando...',
        items: [
          'A marca já tem base mínima de páginas canônicas, hubs e sinal institucional.',
          'O objetivo real é descoberta, citação e reforço de entidade.',
          'A operação quer reduzir ruídos de posicionamento antes de expandir presença.'
        ]
      },
      {
        title: 'O primeiro escopo normalmente cobre...',
        items: [
          'Leitura de consistência de marca, entidade e governança editorial.',
          'Direção sobre quais páginas reforçam presença e quais enfraquecem interpretação.',
          'Priorização entre descoberta, citabilidade e fortalecimento de autoridade.'
        ]
      },
      {
        title: 'Talvez outro ativo venha antes se...',
        items: [
          'A marca ainda não tem clareza mínima de posicionamento no site.',
          'A expectativa está restrita a tráfego rápido e não a presença consistente.',
          'Ainda falta base institucional ou editorial suficiente para sustentar entidade.'
        ]
      }
    ]
  )
};
