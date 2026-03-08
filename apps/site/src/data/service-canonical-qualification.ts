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
    eyebrow: 'Qualificacao comercial',
    title: `QUANDO ${serviceLabel.toUpperCase()} E A ENTRADA CERTA`,
    copy:
      'Esta camada filtra timing, expectativa e tipo de demanda antes da contratacao. O objetivo e deixar claro quando o servico faz sentido agora e quando a operacao deveria comecar por outro ponto.',
    fitSignals,
    deflectionSignals
  };
}

export const serviceCanonicalQualification: Record<string, ServiceCanonicalQualification> = {
  '/servicos/consultoria-seo/': createQualification(
    'Consultoria SEO',
    [
      'Quando a operacao ja tem demanda, backlog potencial e precisa de direcionamento continuo para priorizar melhor.',
      'Quando a empresa quer evoluir a arquitetura comercial e editorial sem depender de acao isolada.',
      'Quando o gargalo principal ja nao e descobrir o problema, mas decidir o que fazer primeiro.'
    ],
    [
      'Se a duvida principal ainda e diagnosticar o que trava o site, auditoria SEO pode ser a entrada mais correta.',
      'Se a expectativa e delegar execucao inteira sem maturidade interna minima, a operacao pode precisar de outro formato.',
      'Se a busca hoje e apenas por preco ou urgencia, vale qualificar melhor a demanda antes de contratar consultoria.'
    ]
  ),
  '/servicos/auditoria-seo/': createQualification(
    'Auditoria SEO',
    [
      'Quando a operacao ainda nao tem clareza sobre os gargalos tecnicos, semanticos ou comerciais do site.',
      'Quando e preciso traduzir problema difuso em backlog priorizado e defendivel.',
      'Quando a empresa quer uma leitura profunda antes de escalar conteudo, local ou arquitetura.'
    ],
    [
      'Se o problema ja esta identificado e o desafio agora e acompanhar execucao, consultoria SEO pode ser mais adequada.',
      'Se a expectativa e impacto imediato sem implementacao posterior, auditoria tende a ser mal interpretada.',
      'Se o site ainda esta em fase muito inicial, pode ser cedo para um diagnostico mais profundo.'
    ]
  ),
  '/servicos/seo-local/': createQualification(
    'SEO Local',
    [
      'Quando geografia, proximidade e descoberta no Google participam diretamente da geracao de demanda.',
      'Quando pagina comercial, perfil local e mapa precisam parar de operar de forma solta.',
      'Quando a empresa quer construir ativo local recorrente e nao apenas comprar urgencia.'
    ],
    [
      'Se a operacao ainda nao depende de busca local para vender, a frente pode entrar antes da hora.',
      'Se a expectativa e resultado imediato sem alinhar site, perfil e contexto local, a premissa esta errada.',
      'Se a duvida principal ainda e sobre canal ou modelo de contratacao, vale começar por comparativos e diagnostico.'
    ]
  ),
  '/servicos/google-meu-negocio/': createQualification(
    'Google Meu Negocio',
    [
      'Quando o perfil local pesa na comparacao, na rota, na ligacao e na validacao rapida da empresa.',
      'Quando o mapa ja influencia a descoberta, mas ainda falta integracao com a pagina comercial certa.',
      'Quando a empresa precisa estruturar melhor categoria, prova, horario, servicos e consistencia local.'
    ],
    [
      'Se a expectativa e tratar GBP como substituto do site, a entrada esta equivocada.',
      'Se o problema principal e arquitetura local do dominio, SEO local pode ser a frente mais completa.',
      'Se a empresa ainda nao validou geografia, oferta e conversao local, o perfil sozinho tende a render pouco.'
    ]
  ),
  '/servicos/ai-overview-optimization/': createQualification(
    'AI Overview Optimization',
    [
      'Quando o site ja tem base editorial ou comercial suficiente para sustentar citabilidade e evolucao por cluster.',
      'Quando a operacao quer transformar IA em descoberta estruturada, e nao em experimento solto.',
      'Quando conteudo, entidade e arquitetura precisam conversar para aumentar a chance de aparicao em respostas generativas.'
    ],
    [
      'Se a base tecnica ainda esta fragil, talvez auditoria ou SEO tecnico sejam a entrada correta.',
      'Se a operacao ainda nao publica com consistencia, AI Overview Optimization pode entrar cedo demais.',
      'Se a expectativa e aparicao imediata sem governanca editorial, a leitura do servico esta incompleta.'
    ]
  ),
  '/servicos/llm-brand-presence/': createQualification(
    'LLM Brand Presence',
    [
      'Quando a marca precisa ser interpretada com mais consistencia em ambientes generativos.',
      'Quando descoberta, entidade e clareza semantica ja viraram prioridade real da operacao.',
      'Quando o objetivo nao e apenas trafego, mas tambem citacao, referencia e presenca de marca em LLMs.'
    ],
    [
      'Se a base comercial do site ainda esta desorganizada, a entrada pode precisar ser consultoria ou auditoria.',
      'Se a expectativa e performance imediata de clique, a leitura do servico ainda esta estreita demais.',
      'Se a marca nao tem consistencia editorial nem institucional, o servico entra sem fundacao minima.'
    ]
  )
};
