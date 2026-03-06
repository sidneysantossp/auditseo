import fs from 'node:fs';
import path from 'node:path';
import { siteMetadata } from '../src/data/site';

const distDir = path.join(process.cwd(), 'dist');
const caseStudiesDir = path.join(process.cwd(), 'src', 'content', 'caseStudies');
const freeToolsDir = path.join(process.cwd(), 'src', 'content', 'freeTools');
const errors: string[] = [];

interface ResourceLink {
  label: string;
  path: string;
}

interface CaseStudy {
  order: number;
  slug: string;
  title: string;
  description: string;
  serviceLinks: ResourceLink[];
  articleLinks: ResourceLink[];
}

interface FreeTool {
  order: number;
  slug: string;
  title: string;
  description: string;
  serviceLinks: ResourceLink[];
  articleLinks: ResourceLink[];
}

function readDistFile(relativePath: string) {
  const filepath = path.join(distDir, relativePath);
  if (!fs.existsSync(filepath)) {
    errors.push(`Arquivo gerado nao encontrado: ${relativePath}`);
    return '';
  }
  return fs.readFileSync(filepath, 'utf8');
}

function extractJsonLdNodes(html: string) {
  const matches = Array.from(html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi));
  const nodes: Array<Record<string, unknown>> = [];

  for (const match of matches) {
    const raw = match[1]?.trim();
    if (!raw) continue;

    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        parsed.forEach((item) => item && typeof item === 'object' && nodes.push(item as Record<string, unknown>));
      } else if (parsed && typeof parsed === 'object' && Array.isArray((parsed as Record<string, unknown>)['@graph'])) {
        ((parsed as Record<string, unknown>)['@graph'] as unknown[]).forEach((item) => item && typeof item === 'object' && nodes.push(item as Record<string, unknown>));
      } else if (parsed && typeof parsed === 'object') {
        nodes.push(parsed as Record<string, unknown>);
      }
    } catch {
      errors.push('JSON-LD invalido encontrado em cases/ferramentas.');
    }
  }

  return nodes;
}

function getNodeTypes(nodes: Array<Record<string, unknown>>) {
  const types = new Set<string>();
  for (const node of nodes) {
    const type = node['@type'];
    if (Array.isArray(type)) {
      type.forEach((item) => typeof item === 'string' && types.add(item));
    } else if (typeof type === 'string') {
      types.add(type);
    }
  }
  return types;
}

function findCanonical(html: string) {
  return html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1] ?? '';
}

function assertCanonical(label: string, html: string, expectedPath: string) {
  const expected = new URL(expectedPath, siteMetadata.siteUrl).toString();
  const canonical = findCanonical(html);
  if (canonical !== expected) {
    errors.push(`${label}: canonical incorreta. Esperado ${expected}, obtido ${canonical || 'vazio'}`);
  }
}

function assertTypes(label: string, html: string, requiredTypes: string[]) {
  const types = getNodeTypes(extractJsonLdNodes(html));
  for (const expectedType of requiredTypes) {
    if (!types.has(expectedType)) {
      errors.push(`${label}: schema ausente para ${expectedType}`);
    }
  }
}

function assertLinks(label: string, html: string, paths: string[]) {
  for (const pathValue of paths) {
    if (!html.includes(`href="${pathValue}"`)) {
      errors.push(`${label}: link ausente para ${pathValue}`);
    }
  }
}

function readJsonCollection<T extends { order: number }>(directoryPath: string) {
  if (!fs.existsSync(directoryPath)) {
    errors.push(`Diretorio de colecao ausente: ${directoryPath}`);
    return [] as T[];
  }

  return fs
    .readdirSync(directoryPath)
    .filter((filename) => filename.endsWith('.json'))
    .map((filename) => JSON.parse(fs.readFileSync(path.join(directoryPath, filename), 'utf8')) as T)
    .sort((left, right) => left.order - right.order);
}

function auditCases(caseStudies: CaseStudy[]) {
  const hubHtml = readDistFile('cases/index.html');
  if (hubHtml) {
    assertCanonical('Hub de cases', hubHtml, '/cases/');
    assertTypes('Hub de cases', hubHtml, ['Organization', 'WebSite', 'WebPage', 'CollectionPage', 'ItemList', 'FAQPage']);
    assertLinks('Hub de cases', hubHtml, caseStudies.map((caseStudy) => `/cases/${caseStudy.slug}/`));
  }

  for (const caseStudy of caseStudies) {
    const html = readDistFile(`cases/${caseStudy.slug}/index.html`);
    if (!html) continue;
    assertCanonical(`Case ${caseStudy.slug}`, html, `/cases/${caseStudy.slug}/`);
    assertTypes(`Case ${caseStudy.slug}`, html, ['Organization', 'WebSite', 'WebPage', 'BreadcrumbList', 'Article', 'FAQPage']);
    assertLinks(
      `Case ${caseStudy.slug}`,
      html,
      [...caseStudy.serviceLinks.map((item) => item.path), ...caseStudy.articleLinks.map((item) => item.path)]
    );
  }
}

function auditTools(freeTools: FreeTool[]) {
  const hubHtml = readDistFile('ferramentas/index.html');
  if (hubHtml) {
    assertCanonical('Hub de ferramentas', hubHtml, '/ferramentas/');
    assertTypes('Hub de ferramentas', hubHtml, ['Organization', 'WebSite', 'WebPage', 'CollectionPage', 'ItemList', 'FAQPage']);
    assertLinks('Hub de ferramentas', hubHtml, freeTools.map((tool) => `/ferramentas/${tool.slug}/`));
  }

  for (const tool of freeTools) {
    const html = readDistFile(`ferramentas/${tool.slug}/index.html`);
    if (!html) continue;
    assertCanonical(`Ferramenta ${tool.slug}`, html, `/ferramentas/${tool.slug}/`);
    assertTypes(`Ferramenta ${tool.slug}`, html, ['Organization', 'WebSite', 'WebPage', 'BreadcrumbList', 'SoftwareApplication', 'FAQPage']);
    assertLinks(
      `Ferramenta ${tool.slug}`,
      html,
      [...tool.serviceLinks.map((item) => item.path), ...tool.articleLinks.map((item) => item.path)]
    );
  }
}

if (!fs.existsSync(distDir)) {
  errors.push('Diretorio dist ausente. Rode npm run build antes da auditoria de resources.');
}

const caseStudies = readJsonCollection<CaseStudy>(caseStudiesDir);
const freeTools = readJsonCollection<FreeTool>(freeToolsDir);

auditCases(caseStudies);
auditTools(freeTools);

console.log(`Cases verificados: ${caseStudies.length}`);
console.log(`Ferramentas verificadas: ${freeTools.length}`);

if (errors.length > 0) {
  console.error('\nErros:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('\nAuditoria estrutural de cases e ferramentas concluida sem erros.');
