export interface ServiceCanonicalDecisionItem {
  title: string;
  copy: string;
}

export interface ServiceCanonicalDecisionLayer {
  eyebrow: string;
  title: string;
  copy: string;
  objections: ServiceCanonicalDecisionItem[];
  ctaTitle: string;
  ctaCopy: string;
  secondaryPath: string;
  secondaryLabel: string;
}

function createBaseDecisionLayer(
  serviceLabel: string,
  objectionOne: string,
  objectionTwo: string,
  objectionThree: string
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
        title: 'Comparacao ruim',
        copy: objectionTwo
      },
      {
        title: 'Escopo pouco claro',
        copy: objectionThree
      }
    ],
    ctaTitle: `QUER VALIDAR SE ${serviceLabel.toUpperCase()} FAZ SENTIDO PARA O MOMENTO DA OPERAÇÃO?`,
    ctaCopy:
      'Se a dúvida hoje é entender timing, escopo e o papel real desse serviço dentro do crescimento, a melhor entrada é um diagnóstico orientado à decisão.',
    secondaryPath: '/contato/',
    secondaryLabel: 'Falar com a AUDITSEO'
  };
}

export const serviceCanonicalDecisionLayer: Record<string, ServiceCanonicalDecisionLayer> = {
  '/servicos/consultoria-seo/': createBaseDecisionLayer(
    'Consultoria SEO',
    'Consultoria SEO gera mais valor quando a operação já tem site, demanda e maturidade suficiente para implementar backlog estratégico com continuidade.',
    'Comparar consultoria apenas com agência ou freelancer tende a esconder a diferença entre direcionamento estratégico, profundidade técnica e capacidade de priorização.',
    'Sem clareza de escopo, a operação compra reunião e relatório. O ganho vem quando diagnóstico, plano e execução passam a conversar.'
  ),
  '/servicos/auditoria-seo/': createBaseDecisionLayer(
    'Auditoria SEO',
    'Auditoria faz sentido quando ainda existe dúvida sobre o que trava a performance. Se o problema já está claro, talvez a operação precise de execução e não de novo diagnóstico.',
    'Comparar auditoria com acompanhamento mensal costuma distorcer a decisão, porque um entrega leitura profunda e o outro sustenta a evolução contínua.',
    'Se o backlog técnico e comercial não for traduzido em prioridade de negócio, a auditoria vira documento e não instrumento de decisão.'
  ),
  '/servicos/seo-local/': createBaseDecisionLayer(
    'SEO Local',
    'SEO local não resolve em dias. Ele funciona melhor quando a empresa aceita construir ativo orgânico local e não apenas procurar atalho imediato.',
    'Muita comparação ruim coloca SEO local contra mídia paga como se ambos servissem ao mesmo horizonte. Um compra urgência, o outro constrói presença recorrente.',
    'Sem alinhar página comercial, Google Maps e sinais locais, o projeto perde clareza e fica reduzido à manutenção de perfil.'
  ),
  '/servicos/google-meu-negocio/': createBaseDecisionLayer(
    'Google Meu Negócio',
    'Perfil local isolado ajuda menos do que parece quando a página comercial do site não sustenta a mesma proposta de valor e a mesma geografia.',
    'A comparação errada trata Google Meu Negócio como substituto de SEO local. Na prática, ele funciona melhor como parte da mesma arquitetura.',
    'Sem critério de categoria, prova, horário, serviços e integração com o site, a operação melhora o perfil, mas não melhora a decisão do cliente.'
  ),
  '/servicos/ai-overview-optimization/': createBaseDecisionLayer(
    'AI Overview Optimization',
    'Esse serviço faz mais sentido quando o site já tem base editorial e comercial suficiente para sustentar citabilidade, clareza semântica e evolução por cluster.',
    'Comparar AI Overview Optimization com SEO técnico puro ou com produção de conteúdo isolada leva a diagnósticos incompletos sobre o que realmente precisa mudar.',
    'Sem amarrar fonte, entidade, arquitetura e conteúdo citável, a operação discute IA sem construir um ativo consistente para respostas generativas.'
  ),
  '/servicos/llm-brand-presence/': createBaseDecisionLayer(
    'LLM Brand Presence',
    'Presença em LLMs não é um botão. Ela depende de entidade, consistência editorial e sinais suficientemente claros para a marca ser interpretada e citada.',
    'Comparar esse serviço com SEO tradicional sem considerar interfaces generativas reduz a discussão a clique e ignora descoberta, referência e citação.',
    'Sem governança editorial, fontes claras e páginas comercialmente coerentes, a marca até aparece, mas não consolida presença nem vantagem.'
  )
};
