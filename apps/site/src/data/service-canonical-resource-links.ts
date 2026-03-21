export interface ServiceCanonicalResourceLink {
  label: string;
  path: string;
  description: string;
}

export interface ServiceCanonicalResourceGroup {
  eyebrow: string;
  title: string;
  copy: string;
  links: ServiceCanonicalResourceLink[];
}

export const serviceCanonicalResourceLinks: Record<string, ServiceCanonicalResourceGroup> = {
  '/servicos/consultoria-seo/': {
    eyebrow: 'Recursos de decisão',
    title: 'COMPARATIVOS PARA QUEM ESTÁ AVALIANDO CONSULTORIA SEO',
    copy:
      'Antes de contratar consultoria, vale entender modelo de contratação, diferença para auditoria e o nível de maturidade que a operação já precisa ter.',
    links: [
      {
        label: 'Consultoria SEO para AI Overviews',
        path: '/blog/consultoria-seo-para-ai-overviews/',
        description: 'Mostra quando governança contínua faz mais sentido que experimentação solta em IA.'
      },
      {
        label: 'Consultoria SEO ou auditoria SEO?',
        path: '/blog/consultoria-seo-ou-auditoria-seo/',
        description: 'Ajuda a decidir entre diagnóstico técnico e evolução contínua.'
      },
      {
        label: 'Agência SEO ou consultoria SEO para AI Overviews?',
        path: '/blog/agencia-seo-ou-consultoria-seo-para-ai-overviews/',
        description: 'Compara modelo de operação para empresas que já chegaram na camada comercial de IA.'
      },
      {
        label: 'Quando não contratar SEO',
        path: '/blog/quando-nao-contratar-seo/',
        description: 'Filtra timing e maturidade antes da contratação.'
      },
      {
        label: 'Consultoria SEO em Barueri e Alphaville',
        path: '/servicos/consultoria-seo-em-barueri/',
        description: 'Mostra a aplicação local da consultoria em uma praça empresarial já aberta.'
      }
    ]
  },
  '/servicos/auditoria-seo/': {
    eyebrow: 'Recursos de decisão',
    title: 'COMO DECIDIR SE A PORTA DE ENTRADA É AUDITORIA SEO',
    copy:
      'A auditoria faz mais sentido quando ainda falta clareza sobre o que trava o site. Esses recursos ajudam a separar diagnóstico de acompanhamento contínuo.',
    links: [
      {
        label: 'Auditoria SEO para AI Overviews',
        path: '/blog/auditoria-seo-para-ai-overviews/',
        description: 'Mostra quando IA ainda pede diagnóstico técnico, semântico e editorial antes da execução.'
      },
      {
        label: 'Consultoria SEO ou auditoria SEO?',
        path: '/blog/consultoria-seo-ou-auditoria-seo/',
        description: 'Mostra quando auditoria entra antes da consultoria.'
      },
      {
        label: 'Quando não contratar SEO',
        path: '/blog/quando-nao-contratar-seo/',
        description: 'Ajuda a entender se ainda falta base antes do investimento.'
      },
      {
        label: 'Agência SEO ou consultoria SEO?',
        path: '/blog/agencia-seo-ou-consultoria-seo/',
        description: 'Complementa a decisão de modelo depois do diagnóstico.'
      },
      {
        label: 'Auditoria SEO em Barueri e Alphaville',
        path: '/servicos/auditoria-seo-em-barueri/',
        description: 'Mostra como o diagnóstico local entra antes da expansão em uma praça comercial real.'
      }
    ]
  },
  '/servicos/ai-overview-optimization/': {
    eyebrow: 'Recursos de decisão',
    title: 'COMO TRANSFORMAR AI OVERVIEWS EM SERVIÇO COMERCIAL, NÃO EM MODA',
    copy:
      'AI Overview Optimization rende mais quando a operação entende modelo de contratação, critério de diagnóstico e a diferença entre reforçar agência, consultoria ou auditoria.',
    links: [
      {
        label: 'Como escolher agência de SEO para AI Overviews',
        path: '/blog/agencia-seo-para-ai-overviews-como-escolher/',
        description: 'Ajuda a avaliar especialização real em AI Overviews sem cair em promessa vaga.'
      },
      {
        label: 'Consultoria SEO para AI Overviews',
        path: '/blog/consultoria-seo-para-ai-overviews/',
        description: 'Mostra quando a entrada correta é governança contínua e não só produção de conteúdo.'
      },
      {
        label: 'Auditoria SEO para AI Overviews',
        path: '/blog/auditoria-seo-para-ai-overviews/',
        description: 'Explica quando o site ainda precisa de diagnóstico antes de escalar citabilidade.'
      },
      {
        label: 'Agência SEO ou consultoria SEO para AI Overviews?',
        path: '/blog/agencia-seo-ou-consultoria-seo-para-ai-overviews/',
        description: 'Compara os dois modelos para empresas que já estão na fase BOFU da nova SERP.'
      }
    ]
  },
  '/servicos/seo-local/': {
    eyebrow: 'Recursos de decisão',
    title: 'COMPARATIVOS PARA QUEM QUER FAZER A BUSCA LOCAL GERAR NEGÓCIO',
    copy:
      'SEO local costuma competir com objeções de prazo, mídia paga e mapa. Esses artigos ajudam a decidir com mais critério antes de expandir a frente local.',
    links: [
      {
        label: 'SEO local ou Google Ads para clínicas médicas?',
        path: '/blog/seo-local-ou-google-ads-para-clinicas-medicas/',
        description: 'Compara urgência de mídia e construção de ativo local.'
      },
      {
        label: 'Em quanto tempo SEO local gera resultado para clínicas médicas?',
        path: '/blog/em-quanto-tempo-seo-local-gera-resultado-para-clinicas-medicas/',
        description: 'Endereça a objeção de prazo com leitura comercial.'
      },
      {
        label: 'SEO local ou Google Meu Negócio para clínicas médicas?',
        path: '/blog/seo-local-ou-google-meu-negocio-para-clinicas-medicas/',
        description: 'Compara página comercial e mapa dentro da mesma jornada.'
      }
    ]
  },
  '/servicos/google-meu-negocio/': {
    eyebrow: 'Recursos de decisão',
    title: 'RECURSOS PARA DECIDIR O PAPEL DO GOOGLE MEU NEGÓCIO',
    copy:
      'O perfil local raramente resolve a captação sozinho. Esses materiais ajudam a entender onde ele pesa mais e como se conecta à camada do site.',
    links: [
      {
        label: 'SEO local ou Google Meu Negócio para clínicas médicas?',
        path: '/blog/seo-local-ou-google-meu-negocio-para-clinicas-medicas/',
        description: 'Compara os dois ativos na vertical mais local da operação.'
      },
      {
        label: 'SEO local ou Google Meu Negócio para dermatologistas?',
        path: '/blog/seo-local-ou-google-meu-negocio-para-dermatologistas/',
        description: 'Mostra a diferença de papel na dermatologia.'
      },
      {
        label: 'SEO local ou Google Meu Negócio para odontologia?',
        path: '/blog/seo-local-ou-google-meu-negocio-para-odontologia/',
        description: 'Mostra como mapa e página comercial se completam em odontologia.'
      }
    ]
  }
};
