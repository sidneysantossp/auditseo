const rawCrmCaptureEndpoint = import.meta.env?.PUBLIC_CMS_CAPTURE_ENDPOINT?.trim?.() || '';

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
  localPresence: {
    model: 'service-area-business',
    operationalBaseLabel: 'Centro Comercial Alphaville',
    city: 'Barueri',
    state: 'SP',
    zip: '06453-016',
    country: 'Brasil',
    publicLabel: 'Atendimento remoto em todo o Brasil, com base operacional em Barueri e reunioes presenciais somente sob agendamento.',
    areasServed: ['Brasil', 'Barueri', 'Alphaville']
  },
  social: {
    instagram: 'https://instagram.com/auditseo',
    linkedin: 'https://linkedin.com/company/auditseo',
    facebook: 'https://facebook.com/auditseo'
  },
  forms: {
    diagnosticEndpoint: 'https://formsubmit.co/ajax/sid.websp@gmail.com',
    crmCaptureEndpoint: rawCrmCaptureEndpoint
  }
} as const;
