import { defineCollection, z } from 'astro:content';

const metricSchema = z.object({
  value: z.string(),
  label: z.string(),
  copy: z.string()
});

const textCardSchema = z.object({
  title: z.string(),
  copy: z.string()
});

const linkSchema = z.object({
  label: z.string(),
  path: z.string().startsWith('/')
});

const faqSchema = z.object({
  question: z.string(),
  answer: z.string()
});

const caseStudies = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number().int().positive(),
    slug: z.string(),
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    badge: z.string(),
    statusLabel: z.string(),
    heroSubtitle: z.string(),
    typeLabel: z.string(),
    durationLabel: z.string(),
    scopeLabel: z.string(),
    evidenceNote: z.string(),
    summaryPoints: z.array(z.string()),
    metrics: z.array(metricSchema),
    overviewCards: z.array(textCardSchema),
    challengePoints: z.array(z.string()),
    interventionSteps: z.array(z.string()),
    outcomes: z.array(textCardSchema),
    lessons: z.array(z.string()),
    serviceLinks: z.array(linkSchema),
    articleLinks: z.array(linkSchema),
    faqs: z.array(faqSchema)
  })
});

const freeTools = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number().int().positive(),
    slug: z.string(),
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    badge: z.string(),
    statusLabel: z.string(),
    heroSubtitle: z.string(),
    kind: z.enum(['snippet-preview', 'faq-schema-generator', 'ai-seo-checklist']),
    categoryLabel: z.string(),
    outputLabel: z.string(),
    summaryPoints: z.array(z.string()),
    metrics: z.array(metricSchema),
    overviewCards: z.array(textCardSchema),
    useCases: z.array(z.string()),
    howItWorks: z.array(z.string()),
    serviceLinks: z.array(linkSchema),
    articleLinks: z.array(linkSchema),
    faqs: z.array(faqSchema)
  })
});

export const collections = {
  caseStudies,
  freeTools
};
