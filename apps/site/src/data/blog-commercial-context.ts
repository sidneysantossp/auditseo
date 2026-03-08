import { commercialSupportArticles } from './commercial-support-articles';

export type CommercialArticleMarket =
  | 'generic'
  | 'clinicas-medicas'
  | 'dermatologistas'
  | 'odontologia'
  | 'escritorios-de-advocacia'
  | 'energia-solar'
  | 'software-b2b';

export type CommercialArticleScopeType = 'national' | 'city' | 'region';

export type CommercialArticleIntent =
  | 'pricing'
  | 'timeline'
  | 'comparison'
  | 'selection'
  | 'service-choice'
  | 'fit'
  | 'local-worth'
  | 'explainer'
  | 'regional-expansion';

export type CommercialArticleService =
  | 'generic-seo'
  | 'agencia-seo'
  | 'consultoria-seo'
  | 'auditoria-seo'
  | 'seo-local'
  | 'google-meu-negocio'
  | 'seo-setorial';

export interface CommercialArticleContext {
  slug: string;
  market: CommercialArticleMarket;
  scopeType: CommercialArticleScopeType;
  scopeSlug: string;
  scopeLabel: string;
  intent: CommercialArticleIntent;
  primaryService: CommercialArticleService;
  focusKey: string;
}

const commercialSupportSlugs = new Set(commercialSupportArticles.map((article) => article.slug));

const cityMatchers = [
  { token: 'no-rio-de-janeiro', slug: 'rio-de-janeiro', label: 'Rio de Janeiro' },
  { token: 'em-rio-de-janeiro', slug: 'rio-de-janeiro', label: 'Rio de Janeiro' },
  { token: 'em-belo-horizonte', slug: 'belo-horizonte', label: 'Belo Horizonte' },
  { token: 'em-curitiba', slug: 'curitiba', label: 'Curitiba' },
  { token: 'em-brasilia', slug: 'brasilia', label: 'Brasilia' },
  { token: 'em-porto-alegre', slug: 'porto-alegre', label: 'Porto Alegre' }
] as const;

const regionMatchers = [
  { token: 'interior-de-sao-paulo', slug: 'interior-de-sao-paulo', label: 'Interior de Sao Paulo' }
] as const;

const complementaryIntents: Record<CommercialArticleIntent, CommercialArticleIntent[]> = {
  pricing: ['timeline', 'selection', 'service-choice', 'comparison', 'fit'],
  timeline: ['pricing', 'comparison', 'fit'],
  comparison: ['pricing', 'timeline', 'selection', 'fit', 'service-choice', 'explainer'],
  selection: ['pricing', 'comparison', 'service-choice', 'fit'],
  'service-choice': ['pricing', 'selection', 'comparison', 'fit'],
  fit: ['pricing', 'comparison', 'selection', 'timeline', 'service-choice'],
  'local-worth': ['comparison', 'pricing', 'timeline', 'fit'],
  explainer: ['comparison', 'pricing', 'fit'],
  'regional-expansion': ['comparison', 'fit', 'explainer']
};

function resolveScope(slug: string) {
  const regionMatch = regionMatchers.find((item) => slug.includes(item.token));
  if (regionMatch) {
    return {
      scopeType: 'region' as const,
      scopeSlug: regionMatch.slug,
      scopeLabel: regionMatch.label
    };
  }

  const cityMatch = cityMatchers.find((item) => slug.includes(item.token));
  if (cityMatch) {
    return {
      scopeType: 'city' as const,
      scopeSlug: cityMatch.slug,
      scopeLabel: cityMatch.label
    };
  }

  return {
    scopeType: 'national' as const,
    scopeSlug: 'brasil',
    scopeLabel: 'Brasil'
  };
}

function resolveMarket(slug: string): CommercialArticleMarket {
  if (slug.includes('clinicas-medicas')) return 'clinicas-medicas';
  if (slug.includes('dermatologistas')) return 'dermatologistas';
  if (slug.includes('odontologia')) return 'odontologia';
  if (slug.includes('escritorios-de-advocacia')) return 'escritorios-de-advocacia';
  if (slug.includes('energia-solar')) return 'energia-solar';
  if (slug.includes('software-b2b')) return 'software-b2b';
  return 'generic';
}

function resolveIntent(slug: string): CommercialArticleIntent {
  if (slug.startsWith('quanto-custa')) return 'pricing';
  if (slug.startsWith('em-quanto-tempo')) return 'timeline';
  if (slug.startsWith('agencia-seo-para-') && slug.endsWith('como-escolher')) return 'selection';
  if (slug === 'consultoria-seo-ou-auditoria-seo' || slug === 'agencia-seo-ou-consultoria-seo') return 'service-choice';
  if (slug === 'quando-nao-contratar-seo') return 'fit';
  if (slug === 'quando-criar-pagina-regional-no-interior-de-sao-paulo') return 'regional-expansion';
  if (slug.includes('vale-a-pena')) return 'local-worth';
  if (slug.includes('-ou-')) return 'comparison';
  return 'explainer';
}

function resolvePrimaryService(slug: string): CommercialArticleService {
  if (slug.includes('google-meu-negocio')) return 'google-meu-negocio';
  if (slug.includes('seo-local')) return 'seo-local';
  if (slug.includes('consultoria-seo')) return 'consultoria-seo';
  if (slug.includes('auditoria-seo')) return 'auditoria-seo';
  if (slug.includes('agencia-seo')) return 'agencia-seo';
  return 'seo-setorial';
}

function resolveFocusKey(slug: string) {
  if (slug === 'consultoria-seo-ou-auditoria-seo') return 'consultoria-vs-auditoria';
  if (slug === 'agencia-seo-ou-consultoria-seo') return 'agencia-vs-consultoria';
  if (slug === 'quando-nao-contratar-seo') return 'nao-contratar-seo';
  if (slug === 'seo-local-ou-google-ads-para-clinicas-medicas') return 'seo-local-vs-google-ads';
  if (slug === 'seo-local-ou-google-meu-negocio-para-clinicas-medicas') return 'seo-local-vs-google-meu-negocio';
  if (slug === 'seo-local-ou-google-meu-negocio-para-dermatologistas') return 'seo-local-vs-google-meu-negocio';
  if (slug === 'seo-local-ou-google-meu-negocio-para-odontologia') return 'seo-local-vs-google-meu-negocio';
  if (slug === 'seo-ou-trafego-pago-para-software-b2b') return 'seo-vs-trafego-pago';
  if (slug === 'seo-para-software-b2b-ou-outbound') return 'seo-vs-outbound';
  if (slug === 'seo-para-energia-solar-ou-midia-paga') return 'seo-vs-midia-paga';
  if (slug === 'seo-para-escritorios-de-advocacia-ou-indicacao') return 'seo-vs-indicacao';
  if (slug === 'quando-criar-pagina-regional-no-interior-de-sao-paulo') return 'regional-expansion';
  if (slug.startsWith('quanto-custa')) return 'pricing';
  if (slug.startsWith('em-quanto-tempo')) return 'timeline';
  if (slug.startsWith('agencia-seo-para-') && slug.endsWith('como-escolher')) return 'selection';
  if (slug.includes('vale-a-pena')) return 'local-worth';
  if (slug.includes('como-gerar-demanda-qualificada')) return 'demand-generation';
  if (slug.endsWith('como-funciona') || slug.endsWith('funciona')) return 'how-it-works';
  return resolveIntent(slug);
}

function buildContext(slug: string): CommercialArticleContext {
  const scope = resolveScope(slug);

  return {
    slug,
    market: resolveMarket(slug),
    scopeType: scope.scopeType,
    scopeSlug: scope.scopeSlug,
    scopeLabel: scope.scopeLabel,
    intent: resolveIntent(slug),
    primaryService: resolvePrimaryService(slug),
    focusKey: resolveFocusKey(slug)
  };
}

const contextMap = new Map(
  [...commercialSupportSlugs].map((slug) => [slug, buildContext(slug)] satisfies [string, CommercialArticleContext])
);

export const commercialArticleContexts = [...contextMap.values()];

export function getCommercialArticleContext(slug: string) {
  return contextMap.get(slug) ?? null;
}

export function getCommercialArticleContextKey(context: CommercialArticleContext) {
  return [context.market, context.scopeType, context.scopeSlug, context.intent, context.primaryService, context.focusKey].join('|');
}

function isCompatibleMarket(current: CommercialArticleContext, candidate: CommercialArticleContext) {
  if (current.market === 'generic') {
    return candidate.market === 'generic';
  }

  return candidate.market === current.market || candidate.market === 'generic';
}

function isCompatibleScope(current: CommercialArticleContext, candidate: CommercialArticleContext) {
  if (current.scopeType === 'city' && candidate.scopeType === 'city') {
    return current.scopeSlug === candidate.scopeSlug;
  }

  if (current.scopeType === 'region' && candidate.scopeType === 'city') {
    return false;
  }

  if (current.scopeType === 'national' && candidate.scopeType === 'city' && candidate.market !== current.market) {
    return false;
  }

  return true;
}

export function getCommercialArticleRelationScore(currentSlug: string, candidateSlug: string) {
  const current = getCommercialArticleContext(currentSlug);
  const candidate = getCommercialArticleContext(candidateSlug);

  if (!current || !candidate) {
    return -1;
  }

  if (!isCompatibleMarket(current, candidate) || !isCompatibleScope(current, candidate)) {
    return -1;
  }

  if (current.market === candidate.market && current.intent === candidate.intent && current.focusKey === candidate.focusKey) {
    return -1;
  }

  let score = 0;

  if (candidate.market === current.market) {
    score += 60;
  } else if (candidate.market === 'generic') {
    score += 22;
  }

  if (candidate.scopeType === current.scopeType && candidate.scopeSlug === current.scopeSlug) {
    score += 24;
  } else if (current.scopeType === 'city' && candidate.scopeType === 'national') {
    score += 18;
  } else if (current.scopeType === 'national' && candidate.scopeType === 'national') {
    score += 14;
  } else if (current.scopeType === 'region' && candidate.scopeType === 'national') {
    score += 16;
  } else if (current.scopeType === 'national' && candidate.scopeType === 'region') {
    score += 8;
  }

  if (current.primaryService === candidate.primaryService) {
    score += 8;
  } else if (candidate.primaryService === 'generic-seo') {
    score += 4;
  }

  if (candidate.intent !== current.intent) {
    score += 14;
  }

  if (complementaryIntents[current.intent].includes(candidate.intent)) {
    score += 12;
  }

  return score;
}
