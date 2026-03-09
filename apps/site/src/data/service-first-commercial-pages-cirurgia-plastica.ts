import type { CommercialPageBrief } from './commercial-page-briefs';
import type { ServiceFirstCommercialPage } from './service-first-commercial-pages';

type RequireBrief = (slug: string) => CommercialPageBrief;

export function buildCirurgiaPlasticaServiceFirstCommercialPages(requireBrief: RequireBrief): ServiceFirstCommercialPage[] {
  return [
    {
      slug: '/servicos/seo-para-cirurgia-plastica/',
      seoTitle: 'SEO para Cirurgia Plástica | AUDITSEO',
      description:
        'SEO para cirurgia plástica com foco em descoberta local, procedimentos, confiança premium e páginas comerciais que ajudam a gerar consultas qualificadas.',
      imagePath: '/images/seo.jpeg',
      badge: 'Saúde Premium, Procedimentos e Busca Qualificada',
      heroTitlePrefix: 'SEO PARA ',
      heroTitleAccent: 'CIRURGIA PLÁSTICA',
      heroSubtitle:
        'Cirurgia plástica não depende só de reputação. Depende de uma estrutura que conecte procedimento, descoberta local, confiança e decisão premium sem transformar o site em vitrine genérica.',
      highlights: ['Cirurgia Plástica', 'Busca Premium', 'SEO Local', 'Procedimentos'],
      heroCard: {
        title: 'Quando essa página faz sentido',
        copy:
          'Quando a clínica ou o especialista precisa transformar buscas por procedimento, comparação e confiança em uma arquitetura orgânica mais previsível.',
        links: [
          { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
          { label: 'Ver Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Complemento crítico de descoberta local.' },
          { label: 'Ver São Paulo', path: '/cidades/sao-paulo/', reason: 'Principal praça derivada já publicada.' }
        ]
      },
      stats: [
        { value: '1', label: 'Vertical premium', copy: 'A página organiza uma frente de alta intenção e alto valor por consulta.' },
        { value: '3', label: 'Camadas centrais', copy: 'Procedimento, prova e geografia precisam operar juntos.' },
        { value: '0', label: 'Espaço para genérico', copy: 'Copy rasa enfraquece confiança e descoberta.' },
        { value: '100%', label: 'Peso do contexto', copy: 'Praça, proposta e clareza comercial alteram a qualidade do lead.' }
      ],
      marketCards: [
        {
          title: 'Busca por procedimento e prova',
          copy:
            'Nesta vertical, o usuário tende a cruzar procedimento, contexto premium, confiança e comparação local muito cedo. A página comercial precisa responder a isso sem parecer catálogo superficial.'
        },
        {
          title: 'Decisão altamente comparativa',
          copy:
            'Cirurgia plástica costuma disputar atenção com indicação, social, mídia paga e prova visual. SEO entra para estruturar descoberta mais previsível e filtrada.'
        },
        {
          title: 'Praça e reputação local',
          copy:
            'A vertical nacional só fica legítima quando consegue se ligar a cidades críticas, Google Maps e ativos BOFU sem repetir a mesma tese em cada URL.'
        }
      ],
      coreOffer:
        'Arquitetura SEO comercial para cirurgia plástica, conectando páginas por procedimento, descoberta local, prova e decisão premium.',
      painPoints: [
        'Baixa visibilidade orgânica para procedimentos e intenção premium.',
        'Site institucional sem páginas comerciais fortes por procedimento ou contexto da decisão.',
        'Dependência alta de mídia paga, social e indicação.',
        'Desalinhamento entre Maps, página local e proposta comercial.'
      ],
      deliveryItems: [
        'Arquitetura comercial para procedimentos, especialidades e prova da clínica.',
        'Integração entre vertical nacional, SEO local e Google Maps.',
        'Camada BOFU para prazo, comparação e descoberta local.',
        'Interlinking entre serviço principal, praça e recursos de decisão.',
        'Critérios de governança para escalar a vertical sem ruído.'
      ],
      methodSteps: [
        {
          title: 'Diagnóstico da demanda',
          copy: 'Mapeamos como a clínica é encontrada hoje por procedimento, geografia e contexto premium, e onde a arquitetura atual perde intenção comercial.'
        },
        {
          title: 'Arquitetura da vertical',
          copy: 'Definimos o papel da página setorial, das páginas locais e dos ativos por procedimento sem canibalizar a intenção principal.'
        },
        {
          title: 'Mensagem orientada à decisão',
          copy: 'Ajustamos a copy para responder melhor a confiança, proposta, comparação e consulta qualificada.'
        },
        {
          title: 'Descoberta local',
          copy: 'Conectamos Google Maps, sinais locais, contexto da praça e páginas comerciais como o mesmo sistema.'
        },
        {
          title: 'Escala controlada',
          copy: 'Usamos desempenho real para decidir quando abrir novas cidades, novos procedimentos ou novos ativos BOFU.'
        }
      ],
      differentiators: [
        'Leitura comercial adaptada à saúde premium.',
        'Arquitetura pensada para procedimento, confiança e contexto local.',
        'Base preparada para derivar a vertical por praça sem doorway pages.',
        'SEO orientado a consulta qualificada e não só volume.'
      ],
      proofPoints: [
        'Serviço canônico de SEO Local já publicado.',
        'Serviço canônico de Google Meu Negócio já publicado.',
        'Página local de São Paulo já aberta como principal derivação da vertical.',
        'Base metodológica e editorial da AUDITSEO já pública.'
      ],
      relatedLinks: [
        { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal da vertical.' },
        { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Complemento local importante para a vertical.' },
        { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal da primeira expansão.' },
        { label: 'SEO local para cirurgia plástica em São Paulo', path: '/servicos/seo-local-para-cirurgia-plastica-em-sao-paulo/', reason: 'Principal derivação local da vertical.' },
        { label: 'SEO para cirurgia plástica: como funciona', path: '/blog/seo-para-cirurgia-plastica-como-funciona/', reason: 'Apoio BOFU setorial para decisão.' },
        { label: 'SEO local ou Google Meu Negócio para cirurgia plástica?', path: '/blog/seo-local-ou-google-meu-negocio-para-cirurgia-plastica/', reason: 'Comparação BOFU mais aderente do que recursos genéricos.' }
      ],
      faqItems: [
        {
          question: 'SEO funciona para cirurgia plástica?',
          answer:
            'Funciona quando a clínica estrutura corretamente procedimento, descoberta local, prova e mensagem comercial. O erro comum é depender só de social, indicação ou páginas genéricas.'
        },
        {
          question: 'Qual a diferença entre esta página e uma página local?',
          answer:
            'Esta página organiza a tese setorial da vertical. A página local entra quando a geografia altera a descoberta e a intenção comercial.'
        },
        {
          question: 'Google Meu Negócio faz parte da estratégia para cirurgia plástica?',
          answer:
            'Na maioria dos casos, sim. O mapa participa cedo da comparação, da prova local e da triagem comercial em uma vertical premium.'
        },
        {
          question: 'Vale criar páginas por procedimento?',
          answer:
            'Vale quando existe demanda real e diferença clara de intenção. O objetivo não é inflar inventário, mas capturar busca comercial com mais precisão.'
        },
        {
          question: 'Quanto tempo leva para SEO gerar resultado em cirurgia plástica?',
          answer:
            'Depende da base atual, da praça, da concorrência e da profundidade da arquitetura. O foco correto é medir consultas qualificadas e não apenas tráfego.'
        },
        {
          question: 'Cirurgia plástica precisa de SEO local ou de página setorial primeiro?',
          answer:
            'Na maior parte dos casos, as duas camadas precisam caminhar juntas. A setorial organiza a vertical e a local sustenta a descoberta na praça crítica.'
        },
        {
          question: 'Essa estratégia ajuda a reduzir dependência de mídia paga?',
          answer:
            'Sim, quando a clínica passa a construir descoberta orgânica mais previsível por procedimento, localização e comparação qualificada.'
        },
        {
          question: 'Quando contratar SEO para cirurgia plástica faz mais sentido?',
          answer:
            'Quando a operação já sente limite de crescimento só com social, mídia e indicação, e precisa transformar o site em ativo comercial de busca.'
        }
      ],
      ctaTitle: 'QUER VALIDAR A ESTRUTURA DE BUSCA DA SUA CLÍNICA?',
      ctaCopy:
        'Se a clínica depende de procedimento, busca local e confiança premium para gerar consultas, a melhor entrada é um diagnóstico comercial orientado a estrutura e descoberta.',
      ctaPrimaryLabel: 'Solicitar diagnóstico para cirurgia plástica',
      ctaSecondaryPath: '/contato/',
      ctaSecondaryLabel: 'Falar com a AUDITSEO',
      areaServedName: 'Brasil',
      brief: requireBrief('/servicos/seo-para-cirurgia-plastica/')
    },
    {
      slug: '/servicos/seo-local-para-cirurgia-plastica-em-sao-paulo/',
      seoTitle: 'SEO Local para Cirurgia Plástica em São Paulo | AUDITSEO',
      description:
        'SEO local para cirurgia plástica em São Paulo com foco em Google Maps, procedimentos, confiança premium e descoberta orgânica qualificada na capital.',
      imagePath: '/images/seo.jpeg',
      displayTitle: 'SEO Local para Cirurgia Plástica em São Paulo',
      badge: 'São Paulo, Saúde Premium e Busca Local',
      heroTitlePrefix: 'SEO LOCAL PARA ',
      heroTitleAccent: 'CIRURGIA PLÁSTICA',
      heroTitleSuffix: 'EM SÃO PAULO',
      heroSubtitle:
        'Em São Paulo, cirurgia plástica disputa descoberta por procedimento, confiança, localização e comparação premium. A estrutura local precisa responder a esse nível de exigência sem ruído.',
      highlights: ['São Paulo Capital', 'Cirurgia Plástica', 'SEO Local', 'Google Maps'],
      heroCard: {
        title: 'Quando a capital muda o jogo',
        copy:
          'Quando a clínica compete em uma das praças mais disputadas do país e precisa alinhar página comercial, mapa, prova e proposta premium à mesma tese local.',
        links: [
          { label: 'Ver página setorial', path: '/servicos/seo-para-cirurgia-plastica/', reason: 'Base comercial da vertical.' },
          { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
          { label: 'Ver contexto da cidade', path: '/cidades/sao-paulo/', reason: 'Página local de apoio.' }
        ]
      },
      stats: [
        { value: '1', label: 'Praça premium', copy: 'São Paulo concentra concorrência, comparação e alta exigência comercial.' },
        { value: '4', label: 'Sinais críticos', copy: 'Procedimento, confiança, mapa e clareza da oferta.' },
        { value: '0', label: 'Espaço para genérico', copy: 'Texto vago enfraquece prova e descoberta premium.' },
        { value: '24/7', label: 'Busca ativa', copy: 'A demanda acontece com forte peso de localização e reputação.' }
      ],
      marketCards: [
        {
          title: 'Comparação por procedimento',
          copy:
            'Na capital, a busca cruza procedimento, prova, contexto local e proposta de valor. A página local precisa traduzir essa decisão sem parecer extensão vazia da vertical.'
        },
        {
          title: 'Maps e prova comercial',
          copy:
            'Em São Paulo, o mapa participa cedo da comparação. Perfil, localização, consistência e clareza da proposta premium pesam na triagem da consulta.'
        },
        {
          title: 'Praça de alta exigência',
          copy:
            'A capital exige arquitetura comercial mais disciplinada. A página local precisa justificar por que aquela praça merece uma URL própria.'
        }
      ],
      coreOffer:
        'Operação de SEO local para cirurgia plástica em São Paulo, conectando páginas comerciais, Google Maps, procedimentos e descoberta qualificada na capital.',
      painPoints: [
        'Baixa visibilidade em buscas locais e por procedimento na capital.',
        'Concorrência intensa em uma praça premium e altamente comparativa.',
        'Google Maps sem a mesma proposta da página comercial.',
        'Tráfego orgânico que não vira consulta de melhor valor.'
      ],
      deliveryItems: [
        'Arquitetura local alinhada à lógica premium da capital.',
        'Conexão entre páginas comerciais, procedimento, praça e Google Maps.',
        'FAQ comercial para objeções de confiança, localização e contato.',
        'Interlinking entre página setorial, serviço canônico e cidade.',
        'Critérios de prova e reputação para uma praça de alta concorrência.'
      ],
      methodSteps: [
        {
          title: 'Leitura da praça',
          copy: 'Mapeamos como a clínica aparece hoje por procedimento, geografia e contexto local dentro da capital.'
        },
        {
          title: 'Arquitetura local',
          copy: 'Definimos o papel da página de São Paulo sem disputar a mesma intenção da página setorial nem repetir a mesma tese da vertical.'
        },
        {
          title: 'Páginas de decisão',
          copy: 'Ajustamos a leitura comercial para procedimento, confiança, comparação e contato premium.'
        },
        {
          title: 'Maps e consistência',
          copy: 'Tratamos Google Meu Negócio, dados da entidade, localização e proposta comercial como o mesmo sistema.'
        },
        {
          title: 'Escala com controle',
          copy: 'Usamos desempenho real para decidir quando aprofundar a praça ou abrir novas combinações por procedimento.'
        }
      ],
      differentiators: [
        'Leitura real da concorrência premium em São Paulo.',
        'Arquitetura feita para cirurgia plástica, não para cidade genérica.',
        'Integração entre site, GBP e demanda por procedimento.',
        'Escala preparada sem doorway pages.'
      ],
      proofPoints: [
        'Página setorial nacional já publicada.',
        'Serviço canônico de SEO Local já ativo.',
        'Página da cidade de São Paulo já publicada.',
        'Base metodológica da AUDITSEO já pública.'
      ],
      relatedLinks: [
        { label: 'SEO para cirurgia plástica', path: '/servicos/seo-para-cirurgia-plastica/', reason: 'Página setorial-mãe da vertical.' },
        { label: 'SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
        { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
        { label: 'Google Meu Negócio para cirurgia plástica em São Paulo', path: '/servicos/google-meu-negocio-para-cirurgia-plastica-em-sao-paulo/', reason: 'Complemento local.' },
        { label: 'SEO local ou Google Meu Negócio para cirurgia plástica?', path: '/blog/seo-local-ou-google-meu-negocio-para-cirurgia-plastica/', reason: 'Apoio BOFU local.' },
        { label: 'SEO para cirurgia plástica: como funciona', path: '/blog/seo-para-cirurgia-plastica-como-funciona/', reason: 'Apoio de decisão da vertical.' }
      ],
      faqItems: [
        {
          question: 'SEO local funciona para cirurgia plástica em São Paulo?',
          answer:
            'Funciona quando a clínica conecta bem página local, proposta premium, prova e descoberta no mapa. Em São Paulo, copy genérica tende a falhar mais rápido.'
        },
        {
          question: 'O que muda entre esta página e a página nacional de cirurgia plástica?',
          answer:
            'A página nacional organiza a vertical. Esta página traduz a mesma lógica para uma praça premium e muito competitiva.'
        },
        {
          question: 'Google Meu Negócio entra junto nesta estratégia?',
          answer:
            'Na maioria dos casos, sim. O mapa participa cedo da comparação local e precisa conversar com a página certa.'
        },
        {
          question: 'São Paulo exige páginas por procedimento?',
          answer:
            'Quando existe demanda real e diferença clara de intenção, sim. A cidade costuma pedir mais precisão de arquitetura do que praças menores.'
        },
        {
          question: 'Quanto tempo leva para melhorar a descoberta local?',
          answer:
            'Depende da estrutura atual, da concorrência e do alinhamento entre página, mapa e proposta comercial. O foco correto é consulta qualificada e não só impressão.'
        },
        {
          question: 'Essa página ajuda a reduzir dependência de mídia paga?',
          answer:
            'Ajuda quando a clínica passa a capturar melhor a busca orgânica de alta intenção na capital.'
        },
        {
          question: 'Cirurgia plástica em São Paulo precisa de copy diferente?',
          answer:
            'Precisa. A mensagem precisa ser mais precisa em procedimento, confiança, contexto local e proposta premium.'
        },
        {
          question: 'Quando essa página é a entrada certa?',
          answer:
            'Quando São Paulo já é praça relevante de aquisição e a clínica precisa organizar melhor descoberta, mapa e páginas comerciais dentro da cidade.'
        }
      ],
      ctaTitle: 'QUER VALIDAR A PRESENÇA LOCAL DA SUA CLÍNICA EM SÃO PAULO?',
      ctaCopy:
        'Se a capital já influencia descoberta e consulta qualificada, a melhor entrada é um diagnóstico local orientado a procedimento, praça, mapa e prova comercial.',
      ctaPrimaryLabel: 'Solicitar diagnóstico local em São Paulo',
      ctaSecondaryPath: '/contato/',
      ctaSecondaryLabel: 'Falar com a AUDITSEO',
      areaServedName: 'São Paulo',
      brief: requireBrief('/servicos/seo-local-para-cirurgia-plastica-em-sao-paulo/')
    },
    {
      slug: '/servicos/google-meu-negocio-para-cirurgia-plastica-em-sao-paulo/',
      seoTitle: 'Google Meu Negócio para Cirurgia Plástica em São Paulo | AUDITSEO',
      description:
        'Google Meu Negócio para cirurgia plástica em São Paulo com foco em Maps, prova local, consistência premium e geração de consultas qualificadas.',
      imagePath: '/images/google-meu-negocio.jpeg',
      displayTitle: 'Google Meu Negócio para Cirurgia Plástica em São Paulo',
      badge: 'Maps, São Paulo e Descoberta Premium',
      heroTitlePrefix: 'GOOGLE MEU NEGÓCIO PARA ',
      heroTitleAccent: 'CIRURGIA PLÁSTICA',
      heroTitleSuffix: 'EM SÃO PAULO',
      heroSubtitle:
        'Em cirurgia plástica, o mapa não pode operar como cadastro isolado. Em São Paulo, ele precisa reforçar a mesma proposta premium da página certa e ajudar a triagem comercial desde a descoberta.',
      highlights: ['Google Maps', 'São Paulo Capital', 'Cirurgia Plástica', 'Descoberta Local'],
      heroCard: {
        title: 'Quando o mapa entra cedo demais na decisão',
        copy:
          'Quando o perfil local participa da comparação, da rota, da prova e da confiança antes mesmo do primeiro contato com a clínica.',
        links: [
          { label: 'Ver Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
          { label: 'Ver página local', path: '/servicos/seo-local-para-cirurgia-plastica-em-sao-paulo/', reason: 'Página complementar local.' },
          { label: 'Ver São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' }
        ]
      },
      stats: [
        { value: '1', label: 'Ativo local crítico', copy: 'O perfil entra cedo na comparação premium da praça.' },
        { value: '3', label: 'Camadas da leitura', copy: 'Maps, página local e proposta premium precisam conversar.' },
        { value: '0', label: 'Espaço para cadastro solto', copy: 'Perfil sem sistema enfraquece a descoberta.' },
        { value: '100%', label: 'Peso da consistência', copy: 'A proposta do perfil e da página precisa ser a mesma.' }
      ],
      marketCards: [
        {
          title: 'Prova local imediata',
          copy:
            'Nesta vertical, o usuário cruza perfil, localização, contexto da clínica e percepção de confiança muito cedo. O mapa participa diretamente dessa triagem.'
        },
        {
          title: 'Coerência entre ativo e página',
          copy:
            'Google Maps só ajuda de verdade quando reforça a mesma proposta premium da página local. Sem isso, ele vira ruído operacional.'
        },
        {
          title: 'Praça de comparação intensa',
          copy:
            'Em São Paulo, o ativo local precisa ser tratado com o mesmo rigor da página comercial, porque a comparação acontece rápido e com muito contexto.'
        }
      ],
      coreOffer:
        'Estrutura, gestão e integração de Google Meu Negócio para cirurgia plástica em São Paulo, alinhando Maps, página local e proposta premium.',
      painPoints: [
        'Perfil local sem a mesma proposta da página comercial.',
        'Baixa relevância em buscas locais comparativas.',
        'Desalinhamento entre prova local, geografia e especialidade.',
        'Pouca geração de contato qualificado via mapa.'
      ],
      deliveryItems: [
        'Leitura comercial do perfil local e seu papel na jornada premium.',
        'Integração entre Maps, página local e tese setorial.',
        'FAQ comercial para objeções de mapa, confiança e proposta.',
        'Interlinking entre página local, serviço canônico e apoio BOFU.',
        'Critérios de governança para manter consistência ao longo do tempo.'
      ],
      methodSteps: [
        {
          title: 'Diagnóstico do ativo local',
          copy: 'Mapeamos como o perfil participa hoje da descoberta, comparação e triagem comercial na capital.'
        },
        {
          title: 'Coerência entre perfil e página',
          copy: 'Alinhamos a proposta do mapa à mesma tese premium da página local e da vertical.'
        },
        {
          title: 'Mensagens e prova',
          copy: 'Ajustamos a leitura comercial para reduzir ruído entre descoberta, comparação e contato.'
        },
        {
          title: 'Contexto da praça',
          copy: 'Tratamos São Paulo como praça crítica, não como cidade genérica replicada no perfil.'
        },
        {
          title: 'Governança',
          copy: 'Usamos o diagnóstico para manter coerência entre Maps, página local e próximos movimentos da vertical.'
        }
      ],
      differentiators: [
        'Leitura de Maps como ativo comercial e não só cadastro.',
        'Integração com a página local premium da clínica.',
        'Contexto real de São Paulo como praça comparativa.',
        'Base preparada para reforçar prova e descoberta sem ruído.'
      ],
      proofPoints: [
        'Serviço canônico de Google Meu Negócio já publicado.',
        'Página local de cirurgia plástica em São Paulo já publicada.',
        'Página nacional da vertical já ativa.',
        'Base metodológica da AUDITSEO já pública.'
      ],
      relatedLinks: [
        { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
        { label: 'SEO para cirurgia plástica', path: '/servicos/seo-para-cirurgia-plastica/', reason: 'Página setorial-mãe da vertical.' },
        { label: 'São Paulo', path: '/cidades/sao-paulo/', reason: 'Contexto geográfico principal.' },
        { label: 'SEO local para cirurgia plástica em São Paulo', path: '/servicos/seo-local-para-cirurgia-plastica-em-sao-paulo/', reason: 'Complemento local.' },
        { label: 'Google Meu Negócio para cirurgia plástica', path: '/blog/google-meu-negocio-para-cirurgia-plastica/', reason: 'Apoio BOFU local.' },
        { label: 'SEO local ou Google Meu Negócio para cirurgia plástica?', path: '/blog/seo-local-ou-google-meu-negocio-para-cirurgia-plastica/', reason: 'Comparação de decisão para a mesma vertical.' }
      ],
      faqItems: [
        {
          question: 'Google Meu Negócio funciona para cirurgia plástica em São Paulo?',
          answer:
            'Funciona quando o perfil reforça a mesma proposta premium da página local e participa da descoberta de forma consistente.'
        },
        {
          question: 'Qual a diferença entre esta página e SEO local para cirurgia plástica em São Paulo?',
          answer:
            'Esta página trata o ativo de Maps e Google Business Profile. A página de SEO local organiza a camada comercial mais ampla da praça.'
        },
        {
          question: 'O perfil sozinho resolve a descoberta local?',
          answer:
            'Não. Ele ajuda muito, mas precisa conversar com a página certa, a proposta da clínica e o contexto premium da vertical.'
        },
        {
          question: 'Por que São Paulo exige mais cuidado com Maps?',
          answer:
            'Porque a capital concentra comparação intensa, muitas opções locais e alto peso de consistência entre perfil, prova e proposta.'
        },
        {
          question: 'Quanto tempo leva para melhorar a presença local no mapa?',
          answer:
            'Depende da base atual, da coerência com o site e do nível de concorrência da praça. O foco correto é contato qualificado e não só impressão.'
        },
        {
          question: 'Essa página também ajuda a reduzir dependência de mídia paga?',
          answer:
            'Ajuda quando o perfil passa a reforçar descoberta orgânica e local de forma mais previsível.'
        },
        {
          question: 'Google Meu Negócio precisa de uma página local forte?',
          answer:
            'Precisa. O perfil sozinho enfraquece a proposta comercial e dificulta a consistência da jornada.'
        },
        {
          question: 'Quando esta página é a entrada certa?',
          answer:
            'Quando a clínica já entende que o mapa participa cedo da decisão e precisa alinhar perfil, página e proposta premium na capital.'
        }
      ],
      ctaTitle: 'QUER FAZER O MAPA AJUDAR MAIS SUA CLÍNICA EM SÃO PAULO?',
      ctaCopy:
        'Se o perfil local ainda não sustenta a descoberta e o contato como deveria, a melhor entrada é um diagnóstico orientado a Google Maps, página comercial e contexto premium da praça.',
      ctaPrimaryLabel: 'Solicitar diagnóstico de GBP em São Paulo',
      ctaSecondaryPath: '/contato/',
      ctaSecondaryLabel: 'Falar com a AUDITSEO',
      areaServedName: 'São Paulo',
      brief: requireBrief('/servicos/google-meu-negocio-para-cirurgia-plastica-em-sao-paulo/')
    }
  ];
}
