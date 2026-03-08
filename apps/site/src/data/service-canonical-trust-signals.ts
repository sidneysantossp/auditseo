export interface ServiceCanonicalTrustCard {
  label: string;
  path: string;
  title: string;
  description: string;
}

export interface ServiceCanonicalTrustGroup {
  eyebrow: string;
  title: string;
  copy: string;
  cards: ServiceCanonicalTrustCard[];
}

function createBaseTrustCards(serviceLabel: string): ServiceCanonicalTrustCard[] {
  return [
    {
      label: 'Metodologia',
      path: '/metodologia/',
      title: `Como a AUDITSEO estrutura ${serviceLabel.toLowerCase()}`,
      description: 'Explica critérios de priorização, leitura comercial, arquitetura e forma de evolução da operação.'
    },
    {
      label: 'Fontes e métodos',
      path: '/fontes-e-metodos/',
      title: 'Como tratamos pesquisa, validação e fontes',
      description: 'Mostra como a base técnica e editorial é organizada para não depender de opinião solta ou copy genérica.'
    },
    {
      label: 'Autor',
      path: '/autores/sidney-santos/',
      title: 'Quem assina a camada estratégica e editorial',
      description: 'Apresenta a autoria, a especialidade e o responsável pela linha técnica e comercial do projeto.'
    },
    {
      label: 'Política editorial',
      path: '/politica-editorial/',
      title: 'Como conteúdo e serviço se conectam sem ruído',
      description: 'Define padrões de publicação, atualização, revisão e vínculo entre conteúdo, serviço e cluster.'
    },
    {
      label: 'Contato',
      path: '/contato/',
      title: 'Canal direto para diagnóstico e próximos passos',
      description: 'Página de contato institucional para avançar a conversa com base em contexto real da operação.'
    }
  ];
}

export const serviceCanonicalTrustSignals: Record<string, ServiceCanonicalTrustGroup> = {
  '/servicos/consultoria-seo/': {
    eyebrow: 'Confiança operacional',
    title: 'PROVA, MÉTODO E GOVERNANÇA PARA CONSULTORIA SEO',
    copy:
      'Consultoria SEO só faz sentido quando existe clareza sobre quem orienta, com qual método, quais fontes sustentam a visão e como a operação será conduzida sem ruído.',
    cards: createBaseTrustCards('Consultoria SEO')
  },
  '/servicos/auditoria-seo/': {
    eyebrow: 'Confiança diagnóstica',
    title: 'CRITÉRIO TÉCNICO E LEITURA COMERCIAL PARA AUDITORIA SEO',
    copy:
      'Auditoria SEO precisa de método e rastreabilidade. Esta camada mostra como a AUDITSEO trata diagnóstico, priorização e tradução do achado técnico para decisão de negócio.',
    cards: createBaseTrustCards('Auditoria SEO')
  },
  '/servicos/seo-local/': {
    eyebrow: 'Confiança local',
    title: 'COMO A AUDITSEO TRATA BUSCA LOCAL COM ESTRUTURA E CRITÉRIO',
    copy:
      'SEO local não é só mapa ou menção geográfica. A seção abaixo mostra a base metodológica, editorial e operacional usada para transformar descoberta local em ativo comercial.',
    cards: createBaseTrustCards('SEO Local')
  },
  '/servicos/google-meu-negocio/': {
    eyebrow: 'Confiança local',
    title: 'GOVERNANÇA E MÉTODO PARA GOOGLE MEU NEGÓCIO',
    copy:
      'Google Meu Negócio ganha força quando perfil local, página comercial e governança editorial operam juntos. Esta camada mostra como a AUDITSEO sustenta essa leitura.',
    cards: createBaseTrustCards('Google Meu Negócio')
  },
  '/servicos/ai-overview-optimization/': {
    eyebrow: 'Confiança AI-first',
    title: 'COMO A AUDITSEO SUSTENTA AI OVERVIEW OPTIMIZATION',
    copy:
      'Em AI Overviews, o diferencial real não está em buzzword. Está em metodologia, observação aplicada, governança editorial e leitura consistente das fontes que sustentam a operação.',
    cards: createBaseTrustCards('AI Overview Optimization')
  },
  '/servicos/llm-brand-presence/': {
    eyebrow: 'Confiança AI-first',
    title: 'COMO A AUDITSEO TRATA PRESENÇA DE MARCA EM LLMS',
    copy:
      'LLM Brand Presence exige estrutura, consistência de entidade e disciplina editorial. Esta camada mostra a fundação usada para tratar esse serviço sem improviso.',
    cards: createBaseTrustCards('LLM Brand Presence')
  }
};
