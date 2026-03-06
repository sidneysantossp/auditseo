import { getCollection, type CollectionEntry } from 'astro:content';

export type CaseStudy = CollectionEntry<'caseStudies'>['data'];
export type FreeTool = CollectionEntry<'freeTools'>['data'];

function sortByOrder<T extends { order: number }>(items: T[]) {
  return [...items].sort((left, right) => left.order - right.order);
}

export async function getCaseStudies() {
  const entries = await getCollection('caseStudies');
  return sortByOrder(entries.map((entry) => entry.data));
}

export async function getCaseStudyBySlug(slug: string) {
  const caseStudies = await getCaseStudies();
  return caseStudies.find((caseStudy) => caseStudy.slug === slug) ?? null;
}

export async function getFreeTools() {
  const entries = await getCollection('freeTools');
  return sortByOrder(entries.map((entry) => entry.data));
}

export async function getFreeToolBySlug(slug: string) {
  const freeTools = await getFreeTools();
  return freeTools.find((tool) => tool.slug === slug) ?? null;
}
