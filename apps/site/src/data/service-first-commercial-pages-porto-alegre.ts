import type { CommercialPageBrief, CommercialInternalLink } from './commercial-page-briefs';
import type { ServiceFirstCommercialPage } from './service-first-commercial-pages';

type RequireBrief = (slug: string) => CommercialPageBrief;

const portoAlegreCity = {
  name: 'Porto Alegre',
  path: '/cidades/porto-alegre/'
};

function createRelatedLinks(localArticlePath: string, complementPath: string, complementLabel: string): CommercialInternalLink[] {
  return [
    { label: 'Clínicas Médicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Página setorial-mãe da vertical.' },
    { label: portoAlegreCity.name, path: portoAlegreCity.path, reason: 'Contexto geográfico principal.' },
    { label: 'SEO local vale a pena para clínicas médicas', path: '/blog/seo-local-vale-a-pena-para-clinicas-medicas/', reason: 'Apoio BOFU setorial.' },
    { label: 'SEO local para clínicas médicas em Porto Alegre vale a pena', path: localArticlePath, reason: 'Apoio BOFU local para decisão.' },
    { label: complementLabel, path: complementPath, reason: 'Complemento local da mesma frente.' }
  ];
}

export function buildPortoAlegreServiceFirstCommercialPages(requireBrief: RequireBrief): ServiceFirstCommercialPage[] {
  return [
    {
      slug: '/servicos/seo-local-para-clinicas-medicas-em-porto-alegre/',
      seoTitle: 'SEO Local para Clínicas Médicas em Porto Alegre | AUDITSEO',
      description:
        'SEO Local para Clínicas Médicas em Porto Alegre com foco em descoberta urbana, Google Maps, página comercial e geração de contatos mais qualificados.',
      imagePath: '/images/google-meu-negocio.jpeg',
      displayTitle: 'SEO Local para Clínicas Médicas em Porto Alegre',
      badge: 'Clínicas Médicas, Porto Alegre e Busca Local',
      heroTitlePrefix: 'SEO LOCAL PARA ',
      heroTitleAccent: 'CLÍNICAS MÉDICAS',
      heroTitleSuffix: 'EM PORTO ALEGRE',
      heroSubtitle:
        'Em Porto Alegre, a clínica precisa alinhar cidade, especialidade e descoberta local para não depender só de indicação ou mídia paga. Quando a página comercial local é clara, o Google entende melhor quando aquela operação faz sentido.',
      highlights: ['Porto Alegre', 'Busca Local', 'Google Maps', 'Página Comercial'],
      heroCard: {
        title: 'Quando essa página faz sentido',
        copy:
          'Quando a clínica atende Porto Alegre, quer fortalecer descoberta orgânica e ainda não articulou página local, especialidade e mapa numa mesma estrutura comercial.',
        links: [
          { label: 'Ver Clínicas Médicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Página setorial-mãe.' },
          { label: 'Ver SEO Local', path: '/servicos/seo-local/', reason: 'Serviço canônico principal.' },
          { label: 'Ver Porto Alegre', path: portoAlegreCity.path, reason: 'Contexto geográfico principal.' }
        ]
      },
      stats: [
        { value: '1', label: 'Praça priorizada', copy: 'Porto Alegre entra como capital forte da expansão comercial no Sul.' },
        { value: '3', label: 'Camadas críticas', copy: 'Setor, cidade e mapa precisam conversar.' },
        { value: '0', label: 'Espaço para ruído', copy: 'Página local vaga não sustenta busca comercial.' },
        { value: '100%', label: 'Dependência de clareza', copy: 'Mensagem, geografia e próximo passo precisam estar alinhados.' }
      ],
      marketCards: [
        {
          title: 'Busca local com intenção real',
          copy: 'Em Porto Alegre, especialidades, proximidade, avaliação e decisão mais rápida costumam participar cedo da busca. Sem página local forte, essa intenção se dispersa.'
        },
        {
          title: 'Descoberta mais coerente',
          copy: 'Quando cidade, página local e perfil no Google trabalham juntos, a clínica reduz ruído e tende a receber contatos melhores.'
        },
        {
          title: 'Menos dependência de mídia paga',
          copy: 'A camada local bem montada ajuda a transformar busca orgânica em demanda útil sem depender só de campanhas.'
        }
      ],
      coreOffer:
        'SEO Local para Clínicas Médicas em Porto Alegre conectando especialidade, contexto urbano, Google Maps e páginas comerciais para aumentar a geração de contatos qualificados.',
      painPoints: [
        'Baixa visibilidade para clínicas médicas em buscas geográficas de Porto Alegre.',
        'Página comercial sem intenção local suficiente.',
        'Perfil local e site operando de forma desalinhada.',
        'Dependência excessiva de indicação, mídia paga ou redes sociais.'
      ],
      deliveryItems: [
        'Arquitetura local para cidade, especialidades e página comercial.',
        'Integração entre SEO local, GBP e descoberta qualificada.',
        'FAQ comercial para objeções reais de decisão.',
        'Interlinking entre cidade, vertical e ativos BOFU.',
        'Base para expansão controlada da praça.'
      ],
      methodSteps: [
        { title: 'Diagnóstico local', copy: 'Mapeamos como a clínica aparece hoje em Porto Alegre e onde a arquitetura atual desperdiça intenção comercial local.' },
        { title: 'Papel da página da cidade', copy: 'Definimos a função da página local dentro da vertical médica sem duplicar a página nacional.' },
        { title: 'Integração com Maps', copy: 'Alinhamos página, sinais locais e perfil da empresa para reforçar descoberta coerente.' },
        { title: 'Conversão', copy: 'Ajustamos copy, prova e CTA para transformar busca em contato com menos atrito.' },
        { title: 'Escala controlada', copy: 'Usamos desempenho real para decidir se a praça pede novas páginas derivadas ou reforço editorial.' }
      ],
      differentiators: [
        'Leitura local específica para Porto Alegre.',
        'Foco em contato qualificado, não só em visibilidade.',
        'Integração entre mapa, cidade e página comercial.',
        'Base para crescer a praça sem inflar a arquitetura.'
      ],
      proofPoints: [
        'Página setorial de clínicas médicas já publicada.',
        'Serviço canônico de SEO Local já ativo.',
        'Blog BOFU setorial e local integrado à malha comercial.',
        'Página de Porto Alegre já publicada como apoio geográfico.'
      ],
      relatedLinks: createRelatedLinks(
        '/blog/seo-local-para-clinicas-medicas-em-porto-alegre-vale-a-pena/',
        '/servicos/google-meu-negocio-para-clinicas-medicas-em-porto-alegre/',
        'Google Meu Negócio para Clínicas Médicas em Porto Alegre'
      ),
      faqItems: [
        { question: 'SEO Local para Clínicas Médicas em Porto Alegre funciona em uma praça competitiva?', answer: 'Funciona quando cidade, oferta, página comercial e mapa são tratados como um sistema e não como ativos isolados.' },
        { question: 'O que muda entre a página local e a página setorial?', answer: 'A página setorial organiza a tese comercial da vertical. A página local traduz essa tese para a intenção específica de Porto Alegre.' },
        { question: 'Google Meu Negócio entra junto nessa estratégia?', answer: 'Na maioria dos casos, sim. Perfil local e página comercial tendem a se reforçar mutuamente.' },
        { question: 'Vale abrir páginas ainda mais granulares dentro da cidade?', answer: 'Só quando houver demanda observável, função comercial clara e diferença real de contexto.' },
        { question: 'Quanto tempo leva para gerar resultado?', answer: 'Depende da base atual, da concorrência e da velocidade de execução. O foco correto é medir descoberta e contatos qualificados.' },
        { question: 'Essa página compete com a página setorial?', answer: 'Não. A vertical-mãe sustenta a tese comercial; a página local traduz essa tese para a cidade.' },
        { question: 'A clínica precisa ter várias unidades para isso funcionar?', answer: 'Não. Mesmo operações mais enxutas podem depender fortemente da cidade e da descoberta local para gerar novos contatos.' },
        { question: 'Quando contratar essa frente faz mais sentido?', answer: 'Quando Porto Alegre já influencia a geração de demanda e a clínica quer transformar melhor a busca local em contato.' }
      ],
      ctaTitle: 'QUER FAZER SUA CLÍNICA GANHAR MAIS DESCOBERTA ORGÂNICA EM PORTO ALEGRE?',
      ctaCopy:
        'Se Porto Alegre já faz parte da sua geração de demanda, mas o Google ainda não está sustentando essa descoberta com a clareza necessária, o melhor início é um diagnóstico local orientado à página, à cidade e ao mapa.',
      ctaPrimaryLabel: 'Solicitar diagnóstico em Porto Alegre',
      ctaSecondaryPath: '/contato/',
      ctaSecondaryLabel: 'Falar com a AUDITSEO',
      areaServedName: 'Porto Alegre',
      brief: requireBrief('/servicos/seo-local-para-clinicas-medicas-em-porto-alegre/')
    },
    {
      slug: '/servicos/google-meu-negocio-para-clinicas-medicas-em-porto-alegre/',
      seoTitle: 'Google Meu Negócio para Clínicas Médicas em Porto Alegre | AUDITSEO',
      description:
        'Google Meu Negócio para Clínicas Médicas em Porto Alegre com foco em mapa, perfil da empresa, relevância local e integração com páginas comerciais da cidade.',
      imagePath: '/images/google-meu-negocio.jpeg',
      displayTitle: 'Google Meu Negócio para Clínicas Médicas em Porto Alegre',
      badge: 'Maps, Porto Alegre e Descoberta Imediata',
      heroTitlePrefix: 'GOOGLE MEU NEGÓCIO PARA ',
      heroTitleAccent: 'CLÍNICAS MÉDICAS',
      heroTitleSuffix: 'EM PORTO ALEGRE',
      heroSubtitle:
        'Em Porto Alegre, o perfil local ajuda a filtrar descoberta, comparação e rota. Quando o Google Business Profile está alinhado à página comercial certa, a clínica tende a ganhar mais relevância local e mais clareza de oferta.',
      highlights: ['Google Maps', 'Porto Alegre', 'GBP', 'Busca por Proximidade'],
      heroCard: {
        title: 'Quando essa página faz sentido',
        copy:
          'Quando a clínica já depende de mapa e comparação local em Porto Alegre, mas ainda não integrou perfil, especialidade e página comercial em uma mesma lógica operacional.',
        links: [
          { label: 'Ver Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
          { label: 'Ver SEO Local para Clínicas', path: '/servicos/seo-local-para-clinicas-medicas-em-porto-alegre/', reason: 'Página local complementar.' },
          { label: 'Ver Porto Alegre', path: portoAlegreCity.path, reason: 'Contexto geográfico principal.' }
        ]
      },
      stats: [
        { value: '1', label: 'Canal crítico', copy: 'Maps pesa cedo na jornada local.' },
        { value: '3', label: 'Sinais decisivos', copy: 'Consistência, geografia e contexto comercial.' },
        { value: '0', label: 'Espaço para improviso', copy: 'Cadastro solto não sustenta descoberta local.' },
        { value: '100%', label: 'Dependência de coerência', copy: 'Perfil, cidade e página precisam reforçar a mesma intenção.' }
      ],
      marketCards: [
        { title: 'Busca por proximidade', copy: 'Em Porto Alegre, parte relevante da decisão local passa por proximidade, percepção de confiança e facilidade de contato.' },
        { title: 'Perfil e página local', copy: 'Quando o perfil local está desalinhado com a página comercial, a descoberta perde força e a conversão tende a cair.' },
        { title: 'Especialidade e clareza', copy: 'A integração entre perfil, cidade e especialidade ajuda o Google e o usuário a entender melhor quando aquela clínica faz sentido.' }
      ],
      coreOffer:
        'Google Meu Negócio para Clínicas Médicas em Porto Alegre conectando mapa, perfil local e páginas comerciais para reforçar descoberta e ação mais qualificada.',
      painPoints: [
        'Perfil local sem sinais claros de relevância e conversão.',
        'Baixa consistência entre perfil, site e oferta principal.',
        'Perda de contatos locais em pesquisas por proximidade.',
        'Pouca geração de rotas, ligações e contatos mais qualificados.'
      ],
      deliveryItems: [
        'Integração entre GBP, página local e vertical setorial.',
        'Revisão de coerência entre perfil, cidade e oferta.',
        'FAQ comercial para dúvidas de decisão local.',
        'Blocos de apoio para reforçar prova e contato.',
        'Base para evoluir descoberta local com mais consistência.'
      ],
      methodSteps: [
        { title: 'Leitura do perfil', copy: 'Mapeamos como o perfil participa hoje da descoberta local em Porto Alegre e onde perde relevância frente à concorrência.' },
        { title: 'Integração com o site', copy: 'Ajustamos a relação entre perfil local, página comercial da cidade e página setorial da vertical.' },
        { title: 'Sinais de relevância', copy: 'Organizamos os sinais visíveis da operação para reforçar geografia, contexto e especialidade.' },
        { title: 'Conversão local', copy: 'Melhoramos a lógica de contato para que mapa e site empurrem o usuário para o mesmo próximo passo.' },
        { title: 'Acompanhamento', copy: 'Usamos performance real para decidir próximos ajustes de descoberta local e evolução da malha comercial.' }
      ],
      differentiators: [
        'Integração real entre Maps e página comercial.',
        'Leitura orientada à vertical médica, não a negócio local genérico.',
        'Foco em contato qualificado e não só em visualização do perfil.',
        'Base para crescer a praça com disciplina.'
      ],
      proofPoints: [
        'Serviço canônico de Google Meu Negócio já publicado.',
        'Página local de clínicas médicas em Porto Alegre já ativa.',
        'Artigo BOFU local já integrado ao blog.',
        'Base metodológica da AUDITSEO já pública.'
      ],
      relatedLinks: [
        { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/', reason: 'Serviço canônico principal.' },
        { label: 'SEO Local para Clínicas Médicas em Porto Alegre', path: '/servicos/seo-local-para-clinicas-medicas-em-porto-alegre/', reason: 'Página local complementar.' },
        { label: 'Google Meu Negócio para clínicas médicas', path: '/blog/google-meu-negocio-para-clinicas-medicas/', reason: 'Apoio BOFU temático.' },
        { label: 'SEO local para clínicas médicas em Porto Alegre vale a pena', path: '/blog/seo-local-para-clinicas-medicas-em-porto-alegre-vale-a-pena/', reason: 'Apoio BOFU local de decisão.' },
        { label: 'Porto Alegre', path: portoAlegreCity.path, reason: 'Contexto geográfico principal.' },
        { label: 'Clínicas Médicas', path: '/servicos/seo-para-clinicas-medicas/', reason: 'Vertical-mãe da operação.' }
      ],
      faqItems: [
        { question: 'Google Meu Negócio para Clínicas Médicas em Porto Alegre sozinho resolve a descoberta local?', answer: 'Não. O perfil ajuda muito, mas precisa estar alinhado a uma página local forte e à vertical principal da clínica.' },
        { question: 'Qual a diferença entre GBP e SEO local em Porto Alegre?', answer: 'GBP é parte da estratégia. SEO local inclui também página da cidade, estrutura do site e contexto comercial da clínica.' },
        { question: 'A página do site realmente interfere no mapa?', answer: 'Sim. Quando cidade, especialidade e página comercial se reforçam, a descoberta local tende a ganhar mais coerência.' },
        { question: 'Quando essa frente merece prioridade?', answer: 'Quando a clínica já depende de mapa para descoberta e quer aumentar a qualidade dos contatos vindos do Google.' },
        { question: 'Isso vale para clínica com uma única unidade?', answer: 'Sim. Mesmo uma única unidade pode depender bastante de proximidade e perfil local para ser encontrada.' },
        { question: 'Perfil desatualizado realmente prejudica?', answer: 'Prejudica porque reduz confiança, quebra coerência e deixa a clínica mais frágil na comparação local.' },
        { question: 'Essa página compete com a página canônica de GBP?', answer: 'Não. A página canônica apresenta o serviço amplo; esta página traduz a oferta para a cidade e o contexto médico local.' },
        { question: 'Quando contratar essa frente faz mais sentido?', answer: 'Quando a clínica quer reforçar descoberta local em Porto Alegre, integrar melhor mapa e site e melhorar a qualidade do contato vindo do Google.' }
      ],
      ctaTitle: 'QUER FAZER O MAPA AJUDAR MAIS SUA CLÍNICA EM PORTO ALEGRE?',
      ctaCopy:
        'Se o perfil local ainda não sustenta a descoberta e o contato como deveria, o melhor início é um diagnóstico orientado a Google Maps, página comercial e contexto médico local.',
      ctaPrimaryLabel: 'Solicitar diagnóstico de GBP em Porto Alegre',
      ctaSecondaryPath: '/contato/',
      ctaSecondaryLabel: 'Falar com a AUDITSEO',
      areaServedName: 'Porto Alegre',
      brief: requireBrief('/servicos/google-meu-negocio-para-clinicas-medicas-em-porto-alegre/')
    }
  ];
}
