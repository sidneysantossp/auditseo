import { blogCategories } from '../data/blog-taxonomy';
import { firstTwelveClusters, type ClusterDefinition, type ClusterPriorityAsset, type ClusterStatus } from '../data/cluster-strategy';
import { getCaseStudies, getFreeTools } from './content-collections';
import { getAllBlogArticles, type LegacyBlogArticle } from './legacy-blog';

export interface AdminMetric {
  label: string;
  value: string;
  copy: string;
}

export interface AdminPublishedAsset {
  label: string;
  type: 'article' | 'service' | 'category' | 'niche' | 'city' | 'landing-page' | 'case-study' | 'tool';
  path: string;
  status: ClusterStatus | 'published';
  clusterId?: string;
  clusterTitle?: string;
  updatedAt?: string;
  meta?: string;
}

export interface AdminCategoryCoverage {
  slug: string;
  title: string;
  articlesCount: number;
  pillarCoverage: number;
  pillarTarget: number;
  latestUpdate: string;
  serviceLinksCount: number;
}

export interface AdminClusterSnapshot {
  id: string;
  title: string;
  thesis: string;
  status: ClusterStatus;
  businessPriority: number;
  editorialPriority: number;
  dominantIntents: string[];
  completionRate: number;
  liveAssets: number;
  inProgressAssets: number;
  plannedAssets: number;
  canonicalServicePath?: string;
  canonicalCategoryPath?: string;
  nextActions: string[];
  priorityAssets: ClusterPriorityAsset[];
}

export interface AdminWorkflowLane {
  id: 'published' | 'in-progress' | 'planned';
  title: string;
  copy: string;
  items: Array<{
    label: string;
    type: string;
    clusterTitle: string;
    path?: string;
    notes: string;
  }>;
}

export type AdminWorkflowStatus = 'draft' | 'review' | 'scheduled' | 'published';

export interface AdminManagedItem {
  id: string;
  label: string;
  type: AdminPublishedAsset['type'] | 'planned';
  clusterTitle: string;
  path?: string;
  workflowStatus: AdminWorkflowStatus;
  priority: string;
  notes: string;
}

export interface AdminDashboardData {
  metrics: AdminMetric[];
  recentUpdates: LegacyBlogArticle[];
  categoryCoverage: AdminCategoryCoverage[];
  clusterSnapshots: AdminClusterSnapshot[];
  workflowLanes: AdminWorkflowLane[];
  publishedAssets: AdminPublishedAsset[];
  publicationQueue: Array<{
    label: string;
    type: string;
    clusterTitle: string;
    priority: string;
    notes: string;
    path?: string;
  }>;
  managedItems: AdminManagedItem[];
}

function formatDateLabel(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return 'Sem data';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(date);
}

function compareDatesDesc(left?: string, right?: string) {
  const leftTime = left ? new Date(left).getTime() : 0;
  const rightTime = right ? new Date(right).getTime() : 0;
  return rightTime - leftTime;
}

function uniqueAssetsByPath(items: AdminPublishedAsset[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.path)) return false;
    seen.add(item.path);
    return true;
  });
}

function getClusterCompletion(cluster: ClusterDefinition) {
  const total = cluster.priorityAssets.length;
  const liveAssets = cluster.priorityAssets.filter((asset) => asset.status === 'live').length;
  const inProgressAssets = cluster.priorityAssets.filter((asset) => asset.status === 'in-progress').length;
  const plannedAssets = cluster.priorityAssets.filter((asset) => asset.status === 'planned').length;

  return {
    total,
    liveAssets,
    inProgressAssets,
    plannedAssets,
    completionRate: total === 0 ? 0 : Math.round((liveAssets / total) * 100)
  };
}

function buildClusterSnapshots() {
  return firstTwelveClusters
    .map((cluster) => {
      const completion = getClusterCompletion(cluster);

      return {
        id: cluster.id,
        title: cluster.title,
        thesis: cluster.thesis,
        status: cluster.status,
        businessPriority: cluster.businessPriority,
        editorialPriority: cluster.editorialPriority,
        dominantIntents: cluster.dominantIntents,
        completionRate: completion.completionRate,
        liveAssets: completion.liveAssets,
        inProgressAssets: completion.inProgressAssets,
        plannedAssets: completion.plannedAssets,
        canonicalServicePath: cluster.canonicalService?.path,
        canonicalCategoryPath: cluster.canonicalCategory?.path,
        nextActions: cluster.publicationOrder,
        priorityAssets: cluster.priorityAssets
      } satisfies AdminClusterSnapshot;
    })
    .sort((left, right) => {
      if (left.businessPriority !== right.businessPriority) {
        return left.businessPriority - right.businessPriority;
      }
      return left.editorialPriority - right.editorialPriority;
    });
}

function buildWorkflowLanes(clusterSnapshots: AdminClusterSnapshot[]): AdminWorkflowLane[] {
  const published: AdminWorkflowLane['items'] = [];
  const inProgress: AdminWorkflowLane['items'] = [];
  const planned: AdminWorkflowLane['items'] = [];

  for (const cluster of clusterSnapshots) {
    for (const asset of cluster.priorityAssets) {
      const item = {
        label: asset.label,
        type: asset.type,
        clusterTitle: cluster.title,
        path: asset.path,
        notes: cluster.nextActions[0] ?? 'Sem proxima acao definida'
      };

      if (asset.status === 'live') {
        published.push(item);
      } else if (asset.status === 'in-progress') {
        inProgress.push(item);
      } else {
        planned.push(item);
      }
    }
  }

  return [
    {
      id: 'published',
      title: 'Publicado',
      copy: 'Ativos ja materializados na arquitetura nova.',
      items: published
    },
    {
      id: 'in-progress',
      title: 'Em maturacao',
      copy: 'Ativos com contexto real, mas ainda pedindo prova, copy ou conexao mais forte.',
      items: inProgress
    },
    {
      id: 'planned',
      title: 'Planejado',
      copy: 'Fila que ainda nao deve virar URL sem tese, prova e canonicidade.',
      items: planned
    }
  ];
}

function buildPublicationQueue(clusterSnapshots: AdminClusterSnapshot[]) {
  return clusterSnapshots
    .flatMap((cluster) =>
      cluster.priorityAssets
        .filter((asset) => asset.status !== 'live')
        .map((asset) => ({
          label: asset.label,
          type: asset.type,
          clusterTitle: cluster.title,
          priority: `B${cluster.businessPriority}/E${cluster.editorialPriority}`,
          notes: cluster.nextActions[0] ?? 'Sem proxima acao definida',
          path: asset.path
        }))
    )
    .sort((left, right) => left.priority.localeCompare(right.priority));
}

function buildManagedItems(
  publishedAssets: AdminPublishedAsset[],
  publicationQueue: AdminDashboardData['publicationQueue']
): AdminManagedItem[] {
  const publishedItems: AdminManagedItem[] = publishedAssets.map((asset) => ({
    id: asset.path,
    label: asset.label,
    type: asset.type,
    clusterTitle: asset.clusterTitle ?? 'Base publica',
    path: asset.path,
    workflowStatus: 'published',
    priority: 'B0/E0',
    notes: asset.meta ?? 'Ativo ja publicado'
  }));

  const queuedItems: AdminManagedItem[] = publicationQueue.map((item) => ({
    id: item.path ?? `${item.clusterTitle}::${item.label}`,
    label: item.label,
    type: item.type === 'landing-page' ? 'landing-page' : 'planned',
    clusterTitle: item.clusterTitle,
    path: item.path,
    workflowStatus: 'draft',
    priority: item.priority,
    notes: item.notes
  }));

  const items = [...publishedItems, ...queuedItems];
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function buildPublishedAssets(
  articles: LegacyBlogArticle[],
  clusterSnapshots: AdminClusterSnapshot[],
  caseStudies: Awaited<ReturnType<typeof getCaseStudies>>,
  tools: Awaited<ReturnType<typeof getFreeTools>>
) {
  const articleAssets: AdminPublishedAsset[] = articles.map((article) => ({
    label: article.title,
    type: 'article',
    path: article.canonicalPath,
    status: 'published',
    clusterId: article.category.slug,
    clusterTitle: article.category.title,
    updatedAt: article.modifiedTime,
    meta: article.category.shortTitle
  }));

  const strategyAssets: AdminPublishedAsset[] = clusterSnapshots.flatMap((cluster) =>
    cluster.priorityAssets
      .filter((asset) => asset.status === 'live' && asset.path)
      .map((asset) => ({
        label: asset.label,
        type: asset.type as AdminPublishedAsset['type'],
        path: asset.path as string,
        status: asset.status,
        clusterId: cluster.id,
        clusterTitle: cluster.title
      }))
  );

  const caseAssets: AdminPublishedAsset[] = caseStudies.map((caseStudy) => ({
    label: caseStudy.title,
    type: 'case-study',
    path: `/cases/${caseStudy.slug}/`,
    status: 'published',
    updatedAt: new Date().toISOString(),
    meta: caseStudy.badge
  }));

  const toolAssets: AdminPublishedAsset[] = tools.map((tool) => ({
    label: tool.title,
    type: 'tool',
    path: `/ferramentas/${tool.slug}/`,
    status: 'published',
    updatedAt: new Date().toISOString(),
    meta: tool.categoryLabel
  }));

  return uniqueAssetsByPath([...strategyAssets, ...caseAssets, ...toolAssets, ...articleAssets]).sort((left, right) => {
    if (left.type !== right.type) {
      return left.type.localeCompare(right.type);
    }
    return compareDatesDesc(left.updatedAt, right.updatedAt) || left.label.localeCompare(right.label);
  });
}

function buildCategoryCoverage(articles: LegacyBlogArticle[]) {
  return blogCategories.map((category) => {
    const categoryArticles = articles.filter((article) => article.category.slug === category.slug);
    const latestArticle = [...categoryArticles].sort((left, right) => compareDatesDesc(left.modifiedTime, right.modifiedTime))[0];

    return {
      slug: category.slug,
      title: category.title,
      articlesCount: categoryArticles.length,
      pillarCoverage: category.pillarSlugs.filter((slug) => categoryArticles.some((article) => article.slug === slug)).length,
      pillarTarget: category.pillarSlugs.length,
      latestUpdate: latestArticle ? formatDateLabel(latestArticle.modifiedTime) : 'Sem artigo',
      serviceLinksCount: category.serviceLinks.length
    } satisfies AdminCategoryCoverage;
  });
}

export async function getAdminDashboardData(): Promise<AdminDashboardData> {
  const [articles, caseStudies, tools] = await Promise.all([getAllBlogArticles(), getCaseStudies(), getFreeTools()]);
  const clusterSnapshots = buildClusterSnapshots();
  const publishedAssets = buildPublishedAssets(articles, clusterSnapshots, caseStudies, tools);
  const categoryCoverage = buildCategoryCoverage(articles);
  const publicationQueue = buildPublicationQueue(clusterSnapshots);
  const workflowLanes = buildWorkflowLanes(clusterSnapshots);
  const managedItems = buildManagedItems(publishedAssets, publicationQueue);

  const liveClusters = clusterSnapshots.filter((cluster) => cluster.status === 'live').length;
  const inProgressClusters = clusterSnapshots.filter((cluster) => cluster.status === 'in-progress').length;
  const averageCompletion =
    clusterSnapshots.reduce((accumulator, cluster) => accumulator + cluster.completionRate, 0) / clusterSnapshots.length;

  const servicesCount = new Set(
    clusterSnapshots
      .flatMap((cluster) => cluster.priorityAssets.filter((asset) => asset.type === 'service' && asset.status === 'live'))
      .map((asset) => asset.path)
      .filter(Boolean)
  ).size;
  const nicheCount = new Set(
    clusterSnapshots
      .flatMap((cluster) => cluster.priorityAssets.filter((asset) => asset.type === 'niche' && asset.status === 'live'))
      .map((asset) => asset.path)
      .filter(Boolean)
  ).size;
  const cityCount = new Set(
    clusterSnapshots
      .flatMap((cluster) => cluster.priorityAssets.filter((asset) => asset.type === 'city' && asset.status === 'live'))
      .map((asset) => asset.path)
      .filter(Boolean)
  ).size;

  return {
    metrics: [
      {
        label: 'Ativos publicados',
        value: String(publishedAssets.length),
        copy: 'Soma de artigos, servicos, hubs, nichos, cidades, tools e cases conectados ao sistema.'
      },
      {
        label: 'Fila editorial',
        value: String(publicationQueue.length),
        copy: 'Ativos planejados ou em maturacao que ainda pedem prova, copy ou contexto estrutural.'
      },
      {
        label: 'Clusters em producao',
        value: `${liveClusters} + ${inProgressClusters}`,
        copy: 'Clusters totalmente ativos ou em maturacao real dentro da nova arquitetura.'
      },
      {
        label: 'Maturidade media',
        value: `${Math.round(averageCompletion)}%`,
        copy: 'Percentual medio de ativos publicados dentro dos 12 clusters prioritarios.'
      },
      {
        label: 'Base editorial',
        value: `${articles.length} artigos`,
        copy: `${blogCategories.length} categorias ativas, conectadas a servicos e clusters comerciais.`
      },
      {
        label: 'Cobertura comercial',
        value: `${servicesCount}/${nicheCount}/${cityCount}`,
        copy: 'Servicos, nichos e cidades ja materializados no sistema.'
      }
    ],
    recentUpdates: [...articles].sort((left, right) => compareDatesDesc(left.modifiedTime, right.modifiedTime)).slice(0, 8),
    categoryCoverage,
    clusterSnapshots,
    workflowLanes,
    publishedAssets,
    publicationQueue,
    managedItems
  };
}
