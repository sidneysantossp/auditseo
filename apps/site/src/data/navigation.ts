export interface NavItem {
  label: string;
  path: string;
  match?: 'exact' | 'prefix';
}

export interface FooterLinkGroup {
  title: string;
  links: Array<NavItem>;
}

export const mainNavigation: Array<NavItem> = [
  { label: 'Home', path: '/', match: 'exact' },
  { label: 'Agencia de SEO', path: '/agencia-de-seo/' },
  { label: 'Servicos', path: '/servicos/' },
  { label: 'Nichos', path: '/nichos/' },
  { label: 'Cidades', path: '/cidades/' },
  { label: 'Sobre', path: '/sobre/' },
  { label: 'Blog', path: '/blog/' }
];

export const footerGroups: Array<FooterLinkGroup> = [
  {
    title: 'Servicos',
    links: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: 'Auditoria SEO', path: '/servicos/auditoria-seo/' },
      { label: 'SEO Local', path: '/servicos/seo-local/' },
      { label: 'Google Meu Negocio', path: '/servicos/google-meu-negocio/' },
      { label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/' },
      { label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/' }
    ]
  },
  {
    title: 'Clusters',
    links: [
      { label: 'Nichos', path: '/nichos/' },
      { label: 'Cidades', path: '/cidades/' },
      { label: 'Cases', path: '/cases/' },
      { label: 'Ferramentas', path: '/ferramentas/' }
    ]
  },
  {
    title: 'Institucional',
    links: [
      { label: 'Sobre Nos', path: '/sobre/' },
      { label: 'Agencia de SEO', path: '/agencia-de-seo/' },
      { label: 'Metodologia', path: '/metodologia/' },
      { label: 'Fontes e Metodos', path: '/fontes-e-metodos/' },
      { label: 'Politica Editorial', path: '/politica-editorial/' },
      { label: 'Contato', path: '/contato/' },
      { label: 'Blog', path: '/blog/' },
      { label: 'Politica de Privacidade', path: '/politica-de-privacidade/' },
      { label: 'Termos de Uso', path: '/termos-de-uso/' }
    ]
  }
];

export const headerSecondaryLinks: Array<NavItem> = [
  { label: 'Metodologia', path: '/metodologia/' },
  { label: 'Contato', path: '/contato/' }
];
