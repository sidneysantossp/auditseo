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
    eyebrow: 'Decisao comercial',
    title: `OBJECOES QUE MAIS ATRASAM A CONTRATACAO DE ${serviceLabel.toUpperCase()}`,
    copy:
      'A camada abaixo antecipa as travas mais comuns da decisao. O objetivo nao e pressionar a contratacao, mas reduzir ruido antes do proximo passo comercial.',
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
    ctaTitle: `QUER VALIDAR SE ${serviceLabel.toUpperCase()} FAZ SENTIDO PARA O MOMENTO DA OPERACAO?`,
    ctaCopy:
      'Se a duvida hoje e entender timing, escopo e o papel real desse servico dentro do crescimento, a melhor entrada e um diagnostico orientado a decisao.',
    secondaryPath: '/contato/',
    secondaryLabel: 'Falar com a AUDITSEO'
  };
}

export const serviceCanonicalDecisionLayer: Record<string, ServiceCanonicalDecisionLayer> = {
  '/servicos/consultoria-seo/': createBaseDecisionLayer(
    'Consultoria SEO',
    'Consultoria SEO gera mais valor quando a operacao ja tem site, demanda e maturidade suficiente para implementar backlog estrategico com continuidade.',
    'Comparar consultoria apenas com agencia ou freelancer tende a esconder a diferenca entre direcionamento estrategico, profundidade tecnica e capacidade de priorizacao.',
    'Sem clareza de escopo, a operacao compra reuniao e relatorio. O ganho vem quando diagnostico, plano e execucao passam a conversar.'
  ),
  '/servicos/auditoria-seo/': createBaseDecisionLayer(
    'Auditoria SEO',
    'Auditoria faz sentido quando ainda existe duvida sobre o que trava a performance. Se o problema ja esta claro, talvez a operacao precise de execucao e nao de novo diagnostico.',
    'Comparar auditoria com acompanhamento mensal costuma distorcer a decisao, porque um entrega leitura profunda e o outro sustenta a evolucao continua.',
    'Se o backlog tecnico e comercial nao for traduzido em prioridade de negocio, a auditoria vira documento e nao instrumento de decisao.'
  ),
  '/servicos/seo-local/': createBaseDecisionLayer(
    'SEO Local',
    'SEO local nao resolve em dias. Ele funciona melhor quando a empresa aceita construir ativo organico local e nao apenas procurar atalho imediato.',
    'Muita comparacao ruim coloca SEO local contra media paga como se ambos servissem ao mesmo horizonte. Um compra urgencia, o outro constroi presenca recorrente.',
    'Sem alinhar pagina comercial, Google Maps e sinais locais, o projeto perde clareza e fica reduzido a manutencao de perfil.'
  ),
  '/servicos/google-meu-negocio/': createBaseDecisionLayer(
    'Google Meu Negocio',
    'Perfil local isolado ajuda menos do que parece quando a pagina comercial do site nao sustenta a mesma proposta de valor e a mesma geografia.',
    'A comparacao errada trata Google Meu Negocio como substituto de SEO local. Na pratica, ele funciona melhor como parte da mesma arquitetura.',
    'Sem criterio de categoria, prova, horario, servicos e integracao com o site, a operacao melhora o perfil, mas nao melhora a decisao do cliente.'
  ),
  '/servicos/ai-overview-optimization/': createBaseDecisionLayer(
    'AI Overview Optimization',
    'Esse servico faz mais sentido quando o site ja tem base editorial e comercial suficiente para sustentar citabilidade, clareza semantica e evolucao por cluster.',
    'Comparar AI Overview Optimization com SEO tecnico puro ou com producao de conteudo isolada leva a diagnosticos incompletos sobre o que realmente precisa mudar.',
    'Sem amarrar fonte, entidade, arquitetura e conteudo citavel, a operacao discute IA sem construir um ativo consistente para respostas generativas.'
  ),
  '/servicos/llm-brand-presence/': createBaseDecisionLayer(
    'LLM Brand Presence',
    'Presenca em LLMs nao e um botao. Ela depende de entidade, consistencia editorial e sinais suficientemente claros para a marca ser interpretada e citada.',
    'Comparar esse servico com SEO tradicional sem considerar interfaces generativas reduz a discussao a clique e ignora descoberta, referencia e citacao.',
    'Sem governanca editorial, fontes claras e paginas comercialmente coerentes, a marca ate aparece, mas nao consolida presenca nem vantagem.'
  )
};
