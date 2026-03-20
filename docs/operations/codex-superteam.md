# Codex Superteam

## Executive Model

- `Orchestrator / CEO`: thread principal do Codex
- regra central: nenhum agente aprova o proprio trabalho
- toda entrega precisa de:
  - `owner`
  - `reviewer`
  - `qa gate`

## Core Pods

### Pod Estrategia

- `Lagrange` — SEO Strategist `explorer`
  - dono da tese de rankeamento, cluster, canibalizacao e arquitetura de intencao
  - revisa paginas comerciais e expansoes de cluster
- `Euclid` — Local Market Strategist `explorer`
  - dono de praca, entidade local, NAP, GBP, prova local e risco de doorway
  - tem veto em paginas locais sem base real
- `Editorial Architect` `explorer`
  - transforma tese em brief, IA editorial e relacao entre money page, BOFU e linkagem

### Pod Producao

- `Commercial Pages Builder` `worker`
  - dono das paginas comerciais e blocos de conversao
  - write scope: `apps/site/src/pages`, `apps/site/src/data/commercial-*`, `apps/site/src/components/Commercial*`
- `BOFU Content Builder` `worker`
  - dono de comparativos, paginas de apoio, preco, prazo e contratacao
  - write scope: `apps/site/src/data/commercial-support-*`, `apps/site/src/legacy/blog`, `apps/site/src/lib/legacy-blog.ts`
- `Internal Linking + Schema Builder` `worker`
  - dono de schema, breadcrumbs, interlinking, sitemap e entity layer
  - write scope: `apps/site/src/components/*Schema*`, `apps/site/src/components/SchemaGraph.astro`, `apps/site/src/lib/sitemaps.ts`, `apps/site/src/lib/llms.ts`

### Pod Plataforma

- `CMS/Admin Engineer` `worker`
  - dono do `/admin`, CRM, captura e API do CMS
  - write scope: `apps/site/src/pages/admin`, `apps/site/src/components/admin`, `apps/site/public/admin-*`, `apps/cms-api`
- `Tracking + Data Engineer` `worker`
  - dono de eventos, atribuicao, Search Console mapping e dashboards
  - write scope: `apps/site/src/components/SiteShellScripts.astro`, `apps/site/src/components/CtaModal.astro`, `apps/site/src/components/ContactPageEnhancements.astro`, `apps/cms-api`
- `Deploy/Infra Operator` `worker`
  - dono de build, deploy, redirects, sitemap exposure e ambiente
  - write scope: `vercel.json`, `apps/site/vercel.json`, `apps/cms-api/vercel.json`, build scripts

### Pod Qualidade e Receita

- `James` — RevOps and Analytics Strategist `explorer`
  - define KPIs, regras de qualificacao e leitura comercial das paginas
  - aprova se a operacao esta trazendo lead certo
- `QA / Release Controller` `explorer`
  - dono do checklist final
  - bloqueia release com:
    - rota quebrada
    - canonical errado
    - schema invalido
    - link interno inconsistente
    - copy conflitante
    - falta de medicao

## Approval Matrix

- estrategia SEO: `Lagrange` + `Orchestrator`
- expansao local: `Euclid` + `Orchestrator`
- coerencia editorial: `Editorial Architect`
- implementacao tecnica: `QA / Release Controller`
- tracking e atribuicao: `James` + `Tracking + Data Engineer`
- aprovacao final: `Orchestrator`

## Operating Rules

1. `explorer` pesquisa, audita, revisa e define risco
2. `worker` implementa em write scope isolado
3. dois workers nao editam o mesmo modulo em paralelo
4. nenhuma expansao local nasce sem:
   - tese de intencao
   - prova local
   - plano de schema
   - plano de tracking
5. nenhuma pagina entra sem owner explicito

## Standard Workflow

1. `Orchestrator` abre a missao e define prioridade
2. `Pod Estrategia` fecha tese de busca e arquitetura
3. `Editorial Architect` transforma em brief e mapa de ativos
4. `Pod Producao` implementa
5. `Pod Plataforma` garante tracking, admin e discoverability
6. `QA / Release Controller` valida
7. `Deploy/Infra Operator` publica
8. `James` mede resultado e recomenda manter, expandir ou matar

## Current Mission

### Alphaville / Barueri Local Operation

- objetivo: dominar buscas locais relacionadas a `agencia de seo`, `consultoria seo`, `empresa de seo`, `especialista em seo` e ativos correlatos na praca de Alphaville
- owner executivo: `Orchestrator`
- reviewers obrigatorios:
  - `Lagrange`
  - `Euclid`
  - `James`

### Sprint 1 Deliverables

1. tese de arquitetura local `Alphaville x Barueri`
2. cluster de intencao principal e paginas de apoio
3. mapa exato de arquivos do repo para implementacao
4. plano de tracking e criterios de aprovacao

### Recommended Architecture

- frente comercial: `Alphaville`
- ancora administrativa da entidade: `Barueri`, se esse for o municipio oficial do endereco
- regra de protecao:
  - nao abrir uma URL por sinonimo
  - nao tentar ranquear `agencia`, `empresa`, `consultoria`, `especialista` e `auditoria` como paginas quase identicas na mesma praca

### Suggested Asset Stack

1. pagina money principal
   - `agencia de seo em alphaville`
2. pagina secundaria de servico
   - `consultoria seo em alphaville`
3. pagina secundaria de servico tecnico
   - `auditoria seo em alphaville`
4. apoio geografico e de entidade
   - `Barueri` como base canonica de cidade se a camada de localidade for criada
5. apoio BOFU
   - preco
   - prazo
   - como escolher
   - agencia vs consultoria
   - especialista vs agencia

### Tracking Contract

- eventos obrigatorios
  - `whatsapp-click`
  - envio do `modal de diagnostico`
  - envio do `formulario de contato`
- campos obrigatorios do cluster
  - `cluster_slug`
  - `cluster_city`
  - `cluster_market`
  - `page_type`
  - `service_intent`
  - `entry_url`
  - `first_page_session`
  - `referrer`
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`

### Expansion Gate

- manter a operacao se em ate `90 dias` houver:
  - impressao organica local crescente
  - pelo menos `1` lead claramente atribuido
  - nenhuma canibalizacao forte com paginas maes
- expandir em `120-180 dias` so se houver:
  - pelo menos `3` leads atribuidos ao cluster
  - pelo menos `1` oportunidade comercial valida
  - queries recorrentes de `Barueri/Alphaville` no GSC
  - taxa de qualificacao igual ou melhor que a media organica geral
- bloquear expansao se houver:
  - trafego sem lead
  - lead fora da praca
  - pages com impressao so para termo generico sem componente local
  - dependencia de home/branded em vez das URLs do cluster

### Release Gate

o cluster so entra em producao quando houver:

- URL strategy sem doorway
- prova local suficiente
- schema e interlinking definidos
- atribuicao de lead por pagina
- owner de qualidade nomeado
