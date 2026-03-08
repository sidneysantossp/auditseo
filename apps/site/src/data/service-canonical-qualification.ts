export interface ServiceCanonicalQualification {
  eyebrow: string;
  title: string;
  copy: string;
  fitSignals: string[];
  deflectionSignals: string[];
}

function createQualification(
  serviceLabel: string,
  fitSignals: string[],
  deflectionSignals: string[]
): ServiceCanonicalQualification {
  return {
    eyebrow: 'Qualificação comercial',
    title: `QUANDO ${serviceLabel.toUpperCase()} É A ENTRADA CERTA`,
    copy:
      'Esta camada filtra timing, expectativa e tipo de demanda antes da contratação. O objetivo é deixar claro quando o serviço faz sentido agora e quando a operação deveria começar por outro ponto.',
    fitSignals,
    deflectionSignals
  };
}

export const serviceCanonicalQualification: Record<string, ServiceCanonicalQualification> = {
  '/servicos/consultoria-seo/': createQualification(
    'Consultoria SEO',
    [
      'Quando a operação já tem demanda, backlog potencial e precisa de direcionamento contínuo para priorizar melhor.',
      'Quando a empresa quer evoluir a arquitetura comercial e editorial sem depender de ação isolada.',
      'Quando o gargalo principal já não é descobrir o problema, mas decidir o que fazer primeiro.'
    ],
    [
      'Se a dúvida principal ainda é diagnosticar o que trava o site, auditoria SEO pode ser a entrada mais correta.',
      'Se a expectativa é delegar execução inteira sem maturidade interna mínima, a operação pode precisar de outro formato.',
      'Se a busca hoje é apenas por preço ou urgência, vale qualificar melhor a demanda antes de contratar consultoria.'
    ]
  ),
  '/servicos/auditoria-seo/': createQualification(
    'Auditoria SEO',
    [
      'Quando a operação ainda não tem clareza sobre os gargalos técnicos, semânticos ou comerciais do site.',
      'Quando é preciso traduzir problema difuso em backlog priorizado e defensável.',
      'Quando a empresa quer uma leitura profunda antes de escalar conteúdo, local ou arquitetura.'
    ],
    [
      'Se o problema já está identificado e o desafio agora é acompanhar execução, consultoria SEO pode ser mais adequada.',
      'Se a expectativa é impacto imediato sem implementação posterior, auditoria tende a ser mal interpretada.',
      'Se o site ainda está em fase muito inicial, pode ser cedo para um diagnóstico mais profundo.'
    ]
  ),
  '/servicos/seo-local/': createQualification(
    'SEO Local',
    [
      'Quando geografia, proximidade e descoberta no Google participam diretamente da geração de demanda.',
      'Quando página comercial, perfil local e mapa precisam parar de operar de forma solta.',
      'Quando a empresa quer construir ativo local recorrente e não apenas comprar urgência.'
    ],
    [
      'Se a operação ainda não depende de busca local para vender, a frente pode entrar antes da hora.',
      'Se a expectativa é resultado imediato sem alinhar site, perfil e contexto local, a premissa está errada.',
      'Se a dúvida principal ainda é sobre canal ou modelo de contratação, vale começar por comparativos e diagnóstico.'
    ]
  ),
  '/servicos/google-meu-negocio/': createQualification(
    'Google Meu Negócio',
    [
      'Quando o perfil local pesa na comparação, na rota, na ligação e na validação rápida da empresa.',
      'Quando o mapa já influencia a descoberta, mas ainda falta integração com a página comercial certa.',
      'Quando a empresa precisa estruturar melhor categoria, prova, horário, serviços e consistência local.'
    ],
    [
      'Se a expectativa é tratar GBP como substituto do site, a entrada está equivocada.',
      'Se o problema principal é arquitetura local do domínio, SEO local pode ser a frente mais completa.',
      'Se a empresa ainda não validou geografia, oferta e conversão local, o perfil sozinho tende a render pouco.'
    ]
  ),
  '/servicos/ai-overview-optimization/': createQualification(
    'AI Overview Optimization',
    [
      'Quando o site já tem base editorial ou comercial suficiente para sustentar citabilidade e evolução por cluster.',
      'Quando a operação quer transformar IA em descoberta estruturada, e não em experimento solto.',
      'Quando conteúdo, entidade e arquitetura precisam conversar para aumentar a chance de aparição em respostas generativas.'
    ],
    [
      'Se a base técnica ainda está frágil, talvez auditoria ou SEO técnico sejam a entrada correta.',
      'Se a operação ainda não publica com consistência, AI Overview Optimization pode entrar cedo demais.',
      'Se a expectativa é aparição imediata sem governança editorial, a leitura do serviço está incompleta.'
    ]
  ),
  '/servicos/llm-brand-presence/': createQualification(
    'LLM Brand Presence',
    [
      'Quando a marca precisa ser interpretada com mais consistência em ambientes generativos.',
      'Quando descoberta, entidade e clareza semântica já viraram prioridade real da operação.',
      'Quando o objetivo não é apenas tráfego, mas também citação, referência e presença de marca em LLMs.'
    ],
    [
      'Se a base comercial do site ainda está desorganizada, a entrada pode precisar ser consultoria ou auditoria.',
      'Se a expectativa é performance imediata de clique, a leitura do serviço ainda está estreita demais.',
      'Se a marca não tem consistência editorial nem institucional, o serviço entra sem fundação mínima.'
    ]
  )
};
