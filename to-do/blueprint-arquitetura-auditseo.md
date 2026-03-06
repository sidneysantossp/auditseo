# Blueprint de Arquitetura AUDITSEO

## Objetivo

Definir a arquitetura-alvo do site da AUDITSEO sem alterar o design, a linguagem visual, a identidade da marca ou o layout validado. A refatoracao deve corrigir fragilidades de arquitetura, SEO tecnico, performance, escalabilidade editorial, UX e governanca de conteudo.

## Principios Inegociaveis

1. O design atual e a referencia visual oficial do projeto.
2. Header, footer, hero, grids, cards, CTAs e tipografia devem ser preservados visualmente.
3. A camada visual deve ser separada da camada estrutural.
4. O site deve ser `static-first`, com JS somente onde houver interacao real.
5. Nenhuma pagina pode depender de injecao de layout no cliente para renderizar header, footer, breadcrumbs ou SEO.
6. Todo SEO tecnico deve nascer do sistema de templates e do modelo de conteudo, nao de HTML manual espalhado.
7. O build publico deve publicar apenas o site publico.
8. Conteudo, rotas, schemas, canonical e linkagem interna devem ser gerados a partir de uma fonte unica de verdade.

## Arquitetura Recomendada

### Stack

- Framework: Astro
- Deploy: Vercel
- Repositorio: GitHub
- Conteudo: MDX + JSON/YAML tipado
- Testes: Playwright + Axe + Lighthouse CI
- Validacao tecnica: link checker + schema validator + duplicate metadata checker

### Justificativa

Astro entrega o melhor equilibrio para este projeto:

- preserva HTML final limpo e rastreavel;
- reduz JS enviado ao cliente;
- permite componentizacao forte sem acoplar o site a um runtime pesado;
- suporta geracao estatica em larga escala;
- facilita colecoes de conteudo para blog, servicos, cidades, nichos e ferramentas;
- permite migracao gradual com paridade visual.

## Estrutura-Alvo do Repositorio

```text
/apps
  /site
    /public
      /fonts
      /icons
      /images
      favicon.ico
      robots.txt
      llms.txt
    /src
      /components
        Header.astro
        Footer.astro
        MobileMenu.astro
        Breadcrumb.astro
        SeoHead.astro
        SchemaGraph.astro
        CtaModal.astro
        HeroBlock.astro
        SectionHeading.astro
        ServiceCard.astro
        ArticleCard.astro
        RelatedLinks.astro
        FAQBlock.astro
        AuthorBox.astro
        ConversionPanel.astro
      /layouts
        BaseLayout.astro
        HomeLayout.astro
        InstitutionalLayout.astro
        ServiceHubLayout.astro
        ServiceDetailLayout.astro
        NicheLayout.astro
        CityLayout.astro
        LandingLayout.astro
        BlogIndexLayout.astro
        ArticleLayout.astro
        ToolLayout.astro
        LegalLayout.astro
      /content
        /institutional
        /services
        /niches
        /cities
        /landing-pages
        /blog
        /tools
        /authors
        /cases
        /legal
      /data
        site.ts
        navigation.ts
        footer.ts
        contact.ts
        social.ts
        internal-linking.ts
        seo-defaults.ts
      /lib
        canonical.ts
        metadata.ts
        schema.ts
        related-content.ts
        content-graph.ts
        slug.ts
        redirects.ts
        breadcrumbs.ts
      /styles
        tokens.css
        base.css
        utilities.css
        legacy-visual-parity.css
      /pages
        index.astro
        agencia-de-seo.astro
        sobre.astro
        metodologia.astro
        contato.astro
        blog/index.astro
        blog/[slug].astro
        servicos/index.astro
        servicos/[slug].astro
        nichos/index.astro
        nichos/[slug].astro
        cidades/index.astro
        cidades/[slug].astro
        ferramentas/index.astro
        ferramentas/[slug].astro
        lp/[slug].astro
        autores/[slug].astro
        cases/[slug].astro
        politica-de-privacidade.astro
        termos-de-uso.astro
  /crm
  /reports
/packages
  /ui
  /seo-core
  /content-schema
  /qa-config
```

## Regra Estrutural Central

O site publico deve sair apenas de `/apps/site`.

CRM, dashboards, relatorios, apresentacoes e qualquer superficie operacional devem ficar fora do build publico do site institucional. Isso elimina:

- vazamento de superfícies internas;
- poluicao de crawl;
- risco de indexacao de paginas erradas;
- complexidade desnecessaria no deploy.

## Modelo de Layout

### Layouts oficiais

- `BaseLayout`: estrutura global, `head`, shell, scripts minimos, modal global.
- `HomeLayout`: home.
- `InstitutionalLayout`: agencia, sobre, metodologia, contato.
- `ServiceHubLayout`: index de servicos.
- `ServiceDetailLayout`: paginas de servicos principais.
- `NicheLayout`: paginas para segmentos e verticais.
- `CityLayout`: paginas locais.
- `LandingLayout`: paginas de alta conversao por combinacao validada.
- `BlogIndexLayout`: index de blog e hubs editoriais.
- `ArticleLayout`: artigos individuais.
- `ToolLayout`: ferramentas gratuitas.
- `LegalLayout`: privacidade, termos, politica editorial.

### Componentes globais obrigatorios

- `Header`
- `Footer`
- `MobileMenu`
- `Breadcrumb`
- `SeoHead`
- `SchemaGraph`
- `CtaModal`

Nenhuma pagina pode ter implementacao manual paralela destes blocos.

## Modelo de Conteudo

### Tipos de conteudo oficiais

- Institucional
- Servico principal
- Pagina de nicho
- Pagina local
- Landing page de conversao
- Artigo
- Ferramenta gratuita
- Autor
- Case
- Pagina legal

### Campos base obrigatorios para qualquer tipo

- `title`
- `slug`
- `canonical`
- `metaTitle`
- `metaDescription`
- `pageType`
- `status`
- `updatedAt`
- `schemaType`
- `hero`
- `primaryKeyword`
- `secondaryKeywords`
- `cluster`
- `ctaType`
- `breadcrumbs`

### Campos relacionais obrigatorios

- `relatedServices`
- `relatedArticles`
- `relatedNiches`
- `relatedCities`
- `relatedCases`
- `author`

### Campos editoriais recomendados

- `summary`
- `faq`
- `proofBlocks`
- `offerBlocks`
- `comparisonBlocks`
- `testimonialBlocks`
- `sources`
- `conversionIntent`

## Tipagem recomendada por colecao

### Servicos

Campos adicionais:

- `serviceCategory`
- `intent`
- `deliverables`
- `targetPlatforms`
- `pricingMode`
- `primaryCta`

### Blog

Campos adicionais:

- `category`
- `tags`
- `readingTime`
- `publishDate`
- `featuredImage`
- `tableOfContents`
- `editorialIntent`

### Nichos

Campos adicionais:

- `segment`
- `painPoints`
- `applicableServices`
- `proofOfFit`

### Cidades

Campos adicionais:

- `city`
- `state`
- `regionalIntent`
- `localSignals`
- `geoModifiers`

### Landings

Campos adicionais:

- `offerVariant`
- `audienceVariant`
- `cityVariant`
- `nicheVariant`
- `conversionGoal`
- `supportingProof`

### Ferramentas

Campos adicionais:

- `toolType`
- `inputModel`
- `resultIndexability`
- `softwareCategory`
- `faq`

## Regras de URL

### Institucionais

- `/`
- `/agencia-de-seo/`
- `/sobre/`
- `/metodologia/`
- `/cases/`
- `/contato/`
- `/politica-de-privacidade/`
- `/termos-de-uso/`
- `/politica-editorial/`
- `/fontes-e-metodos/`

### Servicos

- `/servicos/`
- `/servicos/[slug]/`

### Nichos

- `/nichos/`
- `/nichos/[slug]/`

### Cidades

- `/cidades/`
- `/cidades/[slug]/`

### Blog

- `/blog/`
- `/blog/[slug]/`

### Ferramentas

- `/ferramentas/`
- `/ferramentas/[slug]/`

### Landings

- `/lp/[slug]/`

### Autores

- `/autores/[slug]/`

## Regra Anti-Canibalizacao

Nao criar duas paginas para a mesma intencao principal.

Cada URL deve ter:

- uma intencao primaria unica;
- um keyword target principal unico;
- um conjunto claro de relacionamentos internos;
- um canonical autoexplicativo;
- diferenca editorial real.

### Combinacoes permitidas

Uma landing page combinada de `servico + nicho + cidade` so pode existir se cumprir todos os criterios:

1. Conteudo unico e profundo.
2. CTA especifico para aquela oferta.
3. FAQ especifico daquela combinacao.
4. Provas ou argumentos adaptados ao contexto.
5. Linkagem interna propria.
6. Nao conflitar com a pagina mae do servico.

Se a pagina nao cumprir esses criterios, ela nao deve existir.

## Arquitetura de SEO Tecnico

### O que deve ser gerado automaticamente

- `title`
- `meta description`
- `canonical`
- `robots`
- Open Graph
- Twitter Card
- `hreflang` quando aplicavel
- breadcrumb schema
- article schema
- service schema
- FAQ schema
- author schema
- organization schema
- local business schema quando fizer sentido
- software application schema para ferramentas
- sitemap index
- sitemaps por tipo
- redirects map
- `robots.txt`
- `llms.txt`

### Componente central

O componente `SeoHead` deve ser a unica origem de metadados por pagina.

O componente `SchemaGraph` deve montar o grafo final a partir do tipo da pagina e do conteudo associado.

Isso impede:

- metadados duplicados;
- canonical inconsistente;
- schema quebrado;
- assets OG inexistentes;
- divergencia entre title visivel e title tecnico.

## Arquitetura de Linkagem Interna

### Motor de linkagem

Criar um `content graph` central com relacionamentos declarados e calculados.

Cada pagina deve declarar:

- tipo;
- cluster;
- intencao;
- servico principal relacionado;
- nicho relacionado;
- cidade relacionada;
- artigos de apoio;
- CTA de proximo passo.

### Regras operacionais

- Artigo aponta para 1 servico principal e ate 2 servicos secundarios.
- Artigo aponta para nicho e cidade apenas quando houver relacao semantica real.
- Servico aponta para 3 a 6 artigos relevantes.
- Servico aponta para nichos e cidades com aderencia comercial.
- Nicho aponta para servico principal, artigos de dor e artigos de prova.
- Cidade aponta para servico principal, provas locais e artigos relevantes.
- Ferramenta aponta para servicos e artigos correlatos.
- Cases alimentam servicos, nichos e landings.

### Blocos padrao

- `Servicos relacionados`
- `Artigos relacionados`
- `Leituras complementares`
- `Proximo passo`
- `FAQ relacionada`

Esses blocos devem ser componentes e nao HTML manual.

## Arquitetura de E-E-A-T

### Paginas obrigatorias

- `/autores/sidney-santos/`
- `/politica-editorial/`
- `/fontes-e-metodos/`
- `/metodologia/`
- `/cases/`
- `/contato/`

### Regras

- Todo artigo tem autor e data de atualizacao.
- Toda pagina de servico deve explicitar metodologia.
- Toda afirmacao sensivel deve apontar para fonte primaria quando houver fonte externa.
- Ferramentas devem explicar como funcionam, limites e finalidade.
- Cases devem ser anonimizados quando necessario, mas reais na estrutura.

## Arquitetura de Performance

### Regras

- Nada de header/footer injetado via JS apos o paint.
- Nada de CSS massivo inline em cada pagina.
- Fontes devem ser self-hosted.
- Imagens devem ser centralizadas e tratadas como asset pipeline.
- Scripts devem ser carregados apenas quando houver necessidade real.
- Menu mobile, modal e filtros podem usar hidratacao isolada.

### Metas tecnicas

- LCP menor que 2.5s em paginas principais.
- CLS menor que 0.1.
- INP menor que 200ms.
- JS inicial minimo.
- HTML final limpo e cacheavel.

## Arquitetura de UX e UI sem Redesign

### O que pode mudar

- escala tipografica;
- contraste;
- area de clique;
- espacamento interno;
- responsividade;
- leitura em mobile;
- consistencia entre cards e grids.

### O que nao pode mudar

- identidade visual;
- linguagem de layout;
- atmosfera da marca;
- estrutura macro das paginas aprovadas.

### Regras praticas

- corpo minimo de texto: 16px em mobile.
- navegacao principal: minimo de 14px a 15px.
- toque: minimo de 44x44.
- cards: padding minimo coerente por breakpoint.
- contraste: cumprir WCAG AA nos elementos de leitura.

## Arquitetura das Ferramentas Gratuitas

### Estrutura

- pagina indexavel para a ferramenta;
- explicacao do problema resolvido;
- FAQ;
- schema `SoftwareApplication`;
- interface leve;
- output claro;
- CTA para servico relacionado.

### Regra de indexacao

- pagina da ferramenta: indexavel;
- paginas de resultado altamente variaveis: `noindex` quando fizer sentido;
- resultados permanentes so podem existir se houver valor editorial real.

## Governanca Editorial

### Pipeline de publicacao

1. Definir tipo de pagina.
2. Definir intencao principal.
3. Definir keyword primaria.
4. Definir relacionamento interno.
5. Validar canonical unico.
6. Validar schema.
7. Validar links internos.
8. Validar CTA e conversao.

### Criterios de publicacao

- sem 404 no header/footer;
- sem assets faltando;
- sem title duplicado;
- sem canonical conflitante;
- sem pagina sem autor ou sem data quando aplicavel;
- sem blocos vazios;
- sem links `javascript:void(0)` em CTA rastreavel.

## QA e Observabilidade

### Gates obrigatorios em CI

- lint
- typecheck
- build
- link checker
- teste de schema
- teste de metadados duplicados
- Lighthouse CI
- Axe
- Playwright com screenshots de regressao visual

### Paginas minimas para smoke test

- home
- index de servicos
- 1 pagina de servico
- index de blog
- 1 artigo
- 1 pagina de nicho
- 1 pagina de cidade
- 1 landing
- 1 ferramenta

## Roadmap de Migracao

### Fase 0 - Congelamento visual e inventario

Objetivo:

Preservar o design atual como `golden reference`.

Entregas:

- inventario de paginas atuais;
- inventario de assets;
- mapa de rotas atuais;
- mapa de redirecionamentos necessarios;
- capturas de referencia desktop e mobile;
- lista de componentes repetidos.

### Fase 1 - Fundacao tecnica

Objetivo:

Criar a nova base sem publicar nada novo ainda.

Entregas:

- `apps/site` em Astro;
- `packages/ui`;
- `packages/seo-core`;
- pipeline CI;
- regras de build isoladas;
- self-host de fontes;
- assets centralizados.

### Fase 2 - Shell global

Objetivo:

Extrair header, footer, menu mobile, modal e breadcrumbs para componentes oficiais.

Entregas:

- `Header.astro`
- `Footer.astro`
- `MobileMenu.astro`
- `CtaModal.astro`
- `Breadcrumb.astro`
- `BaseLayout.astro`

### Fase 3 - SEO core e schemas

Objetivo:

Centralizar metadados e structured data.

Entregas:

- `SeoHead.astro`
- `SchemaGraph.astro`
- sitemap index
- sitemaps por colecao
- `robots.txt`
- `llms.txt`

### Fase 4 - Tipagem de conteudo

Objetivo:

Modelar o site por colecoes em vez de HTML solto.

Entregas:

- colecoes de servicos;
- colecoes de artigos;
- colecoes de nichos;
- colecoes de cidades;
- colecoes de ferramentas;
- colecoes institucionais;
- colecoes legais.

### Fase 5 - Migracao por ordem de negocio

Objetivo:

Migrar primeiro o que tem mais impacto em receita, validacao e risco.

Ordem:

1. Home
2. Servicos principais
3. Blog e artigos
4. Paginas institucionais
5. Nichos
6. Cidades
7. Landings
8. Ferramentas
9. Cases

### Fase 6 - Linkagem interna automatizada

Objetivo:

Transformar cluster e relacoes semanticas em sistema.

Entregas:

- `content graph`;
- blocos automaticos de relacionados;
- rotas maes e filhas consistentes;
- validacao de orfandade.

### Fase 7 - Hardening

Objetivo:

Fechar gaps de performance, acessibilidade e qualidade.

Entregas:

- budgets Lighthouse;
- axe clean nas rotas prioritarias;
- contrastes corrigidos;
- responsividade consolidada;
- redirects finais;
- monitoramento pos-deploy.

## Ordem de Implementacao Recomendada

1. Separar build publico de superfices internas.
2. Criar `apps/site` e layouts base.
3. Extrair header/footer/modal/breadcrumb.
4. Centralizar SEO e schemas.
5. Migrar home com paridade visual.
6. Migrar servicos.
7. Migrar blog e artigos.
8. Criar nichos, cidades e landings com regras anti-spam.
9. Adicionar ferramentas gratuitas.
10. Ativar QA e budgets obrigatorios.

## Definicao de Pronto

O projeto so deve ser considerado estabilizado quando:

- todas as paginas publicas sairem da mesma arquitetura;
- nenhum header/footer for montado no cliente;
- nao existirem links primarios quebrados;
- nao existirem assets OG/favicon quebrados;
- canonical, schema e breadcrumbs forem consistentes;
- UX mobile e desktop estiverem legiveis;
- todos os tipos de conteudo estiverem modelados;
- o build publico nao incluir CRM, reports ou apresentacoes;
- o site estiver apto para crescer sem duplicacao estrutural.

## Recomendacao Final

O caminho correto nao e refazer o design. O caminho correto e reconstruir a fundacao:

- componente unico para shell;
- layout unico por tipo de pagina;
- conteudo tipado;
- SEO centralizado;
- build publico isolado;
- QA obrigatorio;
- crescimento orientado por cluster e intencao.

Essa arquitetura permite que a AUDITSEO seja referencia nao so em conteudo, mas em execucao tecnica, rastreabilidade, SEO estrutural, usabilidade e escalabilidade real.
