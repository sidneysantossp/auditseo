export const siteMetadata = {
  brandName: 'AUDITSEO',
  legalName: 'AUDITSEO',
  siteUrl: 'https://www.auditseo.com.br',
  locale: 'pt-BR',
  logoPath: '/favicon.svg',
  defaultTitle: 'AUDITSEO | Nova Arquitetura do Site',
  defaultDescription:
    'Base tecnica da nova arquitetura AUDITSEO em Astro, criada para preservar o layout aprovado e corrigir a fundacao estrutural do site.',
  defaultOgImagePath: '/og-default.svg',
  contact: {
    email: 'contato@auditseo.com.br',
    phone: '+55 (11) 99638-4376',
    whatsappUrl:
      'https://wa.me/5511996384376?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20AUDITSEO.'
  },
  address: {
    street: 'Rua Baronesa de Bela Vista, 411',
    city: 'Sao Paulo',
    state: 'SP',
    zip: '01520-000',
    country: 'Brasil'
  },
  social: {
    instagram: 'https://instagram.com/auditseo',
    linkedin: 'https://linkedin.com/company/auditseo',
    facebook: 'https://facebook.com/auditseo'
  },
  forms: {
    diagnosticEndpoint: 'https://formsubmit.co/ajax/sid.websp@gmail.com'
  }
} as const;
