export interface ServiceCanonicalIntakeLayer {
  eyebrow: string;
  title: string;
  copy: string;
  prepareItems: string[];
  receiveItems: string[];
  disqualifiers: string[];
}

function createIntakeLayer(
  serviceLabel: string,
  prepareItems: string[],
  receiveItems: string[],
  disqualifiers: string[]
): ServiceCanonicalIntakeLayer {
  return {
    eyebrow: 'Triagem comercial',
    title: `COMO ENTRAR EM ${serviceLabel.toUpperCase()} COM MAIS CLAREZA`,
    copy:
      'Esta camada prepara a conversa comercial para reduzir ruído de timing, escopo e expectativa. A intenção é aumentar a qualidade do contato e deixar claro o que sai da primeira leitura.',
    prepareItems,
    receiveItems,
    disqualifiers
  };
}

export const serviceCanonicalIntake: Record<string, ServiceCanonicalIntakeLayer> = {
  '/servicos/consultoria-seo/': createIntakeLayer(
    'Consultoria SEO',
    [
      'Objetivos de crescimento, principais páginas e gargalos percebidos hoje.',
      'Contexto de quem decide, quem implementa e qual backlog já existe internamente.',
      'Leitura honesta do que já foi tentado em SEO, conteúdo ou mídia.'
    ],
    [
      'Hipóteses prioritárias sobre onde a operação ganha mais clareza primeiro.',
      'Direção inicial de escopo, ritmo e dependências reais para a consultoria funcionar.',
      'Sinal mais claro sobre o que entra agora, o que espera e o que precisa mudar antes.'
    ],
    [
      'Se a empresa só quer terceirizar execução sem nenhuma disponibilidade de alinhamento.',
      'Se o problema central ainda é descobrir o que está travando o site.',
      'Se a conversa está limitada a preço, sem clareza mínima de contexto e prioridade.'
    ]
  ),
  '/servicos/auditoria-seo/': createIntakeLayer(
    'Auditoria SEO',
    [
      'URLs mais críticas, sintomas percebidos e histórico recente de mudanças no site.',
      'Áreas que mais preocupam hoje: técnico, páginas comerciais, conteúdo ou arquitetura.',
      'Quem vai consumir o diagnóstico e transformar isso em backlog depois.'
    ],
    [
      'Leitura mais limpa do que é estrutural, do que é semântico e do que é comercial.',
      'Critérios de priorização para separar urgência real de ruído operacional.',
      'Sinal mais forte sobre se a próxima etapa deve ser execução, consultoria ou reestruturação.'
    ],
    [
      'Se a empresa espera impacto sem implementar nada depois da auditoria.',
      'Se o problema principal já está claramente identificado e o que falta é acompanhamento.',
      'Se o site ainda está tão inicial que uma leitura profunda geraria mais excesso do que decisão.'
    ]
  ),
  '/servicos/seo-local/': createIntakeLayer(
    'SEO Local',
    [
      'Praças prioritárias, oferta principal e quais cidades realmente participam da aquisição.',
      'Como site, perfil local e conteúdo de apoio estão operando hoje.',
      'Quais sinais indicam que a busca local já influencia ligação, rota, formulário ou comparação.'
    ],
    [
      'Leitura mais clara de quais cidades e verticais merecem reforço real.',
      'Indicação do papel de página local, perfil local e apoio BOFU na mesma jornada.',
      'Sinal do que precisa entrar primeiro para a frente local ganhar função comercial.'
    ],
    [
      'Se a operação ainda não depende de geografia para vender.',
      'Se a expectativa é resolver tudo apenas com cadastro ou ajustes rápidos.',
      'Se ainda não existe clareza mínima sobre praça, vertical e proposta local.'
    ]
  ),
  '/servicos/google-meu-negocio/': createIntakeLayer(
    'Google Meu Negócio',
    [
      'Perfil atual, cidades prioritárias, categorias e como o Maps participa da descoberta.',
      'Página comercial que deveria sustentar a mesma oferta do perfil.',
      'Histórico de ajustes, inconsistências ou sintomas de perfil sem tração comercial.'
    ],
    [
      'Leitura mais objetiva do papel real do perfil dentro da jornada local.',
      'Direção de integração entre perfil, página e sinais de contexto da praça.',
      'Sinal mais forte sobre o que precisa ser corrigido agora e o que depende de estrutura do site.'
    ],
    [
      'Se a expectativa é usar o perfil como substituto de página comercial.',
      'Se a operação ainda nem definiu praça, oferta e recorte local.',
      'Se o problema principal está na arquitetura do site e não no ativo local em si.'
    ]
  ),
  '/servicos/ai-overview-optimization/': createIntakeLayer(
    'AI Overview Optimization',
    [
      'Clusters prioritários, páginas mais estratégicas e como o conteúdo é produzido hoje.',
      'Quais ativos já sustentam fonte, método, autoria e papel claro dentro do domínio.',
      'Leitura realista do que o site consegue sustentar em citabilidade neste momento.',
      'Qual é a porta de entrada comercial mais coerente entre agência, consultoria, auditoria e reforço específico de IA.'
    ],
    [
      'Diagnóstico inicial de base semântica, citabilidade e arquitetura por cluster.',
      'Sinal de quais páginas podem ser reforçadas primeiro com menos ruído.',
      'Direção sobre se a entrada correta é AI Overviews, SEO técnico ou reestruturação editorial.',
      'Critério para separar reforço de agência, acompanhamento contínuo e diagnóstico antes da execução.'
    ],
    [
      'Se a operação ainda publica sem consistência nem governança mínima.',
      'Se o site está tecnicamente frágil a ponto de comprometer qualquer reforço de citabilidade.',
      'Se a expectativa é aparição imediata sem reorganização de fonte, entidade e conteúdo.'
    ]
  ),
  '/servicos/llm-brand-presence/': createIntakeLayer(
    'LLM Brand Presence',
    [
      'Páginas canônicas, hubs editoriais e como a marca hoje se apresenta no site.',
      'Vocabulário central da oferta, sinal institucional e pontos de inconsistência percebidos.',
      'Objetivo real com LLMs: descoberta, citação, autoridade ou reforço de marca.'
    ],
    [
      'Leitura inicial de entidade, consistência de marca e ruídos de arquitetura.',
      'Direção sobre quais páginas reforçam presença e quais enfraquecem a interpretação da marca.',
      'Sinal mais forte sobre como priorizar descoberta, citabilidade e governança editorial.'
    ],
    [
      'Se a marca ainda não tem clareza mínima de posicionamento no próprio site.',
      'Se a operação está buscando só tráfego rápido e não presença consistente.',
      'Se não existe base institucional ou editorial suficiente para sustentar entidade.'
    ]
  )
};
