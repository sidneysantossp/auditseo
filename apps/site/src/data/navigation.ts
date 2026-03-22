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
  { label: 'Agência de SEO', path: '/agencia-de-seo/' },
  { label: 'Serviços', path: '/servicos/' },
  { label: 'Sobre', path: '/sobre/' },
  { label: 'Blog', path: '/blog/' }
];

export const footerGroups: Array<FooterLinkGroup> = [
  {
    title: 'Serviços',
    links: [
      { label: 'Consultoria SEO', path: '/servicos/consultoria-seo/' },
      { label: 'Auditoria SEO', path: '/servicos/auditoria-seo/' },
      { label: 'SEO Local', path: '/servicos/seo-local/' },
      { label: 'Google Meu Negócio', path: '/servicos/google-meu-negocio/' },
      { label: 'AI Overview Optimization', path: '/servicos/ai-overview-optimization/' },
      { label: 'LLM Brand Presence', path: '/servicos/llm-brand-presence/' }
    ]
  },
  {
    title: 'Institucional',
    links: [
      { label: 'Sobre Nós', path: '/sobre/' },
      { label: 'Agência de SEO', path: '/agencia-de-seo/' },
      { label: 'Metodologia', path: '/metodologia/' },
      { label: 'Fontes e Métodos', path: '/fontes-e-metodos/' },
      { label: 'Política Editorial', path: '/politica-editorial/' },
      { label: 'Contato', path: '/contato/' },
      { label: 'Blog', path: '/blog/' },
      { label: 'Política de Privacidade', path: '/politica-de-privacidade/' },
      { label: 'Termos de Uso', path: '/termos-de-uso/' }
    ]
  }
];

export const headerSecondaryLinks: Array<NavItem> = [
  { label: 'Metodologia', path: '/metodologia/' },
  { label: 'Contato', path: '/contato/' }
];
