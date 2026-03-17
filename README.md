# AUDITSEO - Astro-first workspace

Este repositório tem **duas camadas ativas**:

1. site público em Astro
2. API/CMS separada para operação editorial e CRM

O fluxo atual de produção é **Astro-first**. O conteúdo legado em HTML estático ainda existe no repositório apenas como superfície de migração e compatibilidade, não como fonte principal de verdade.

## Fonte de verdade

- Site público: [`/Applications/MAMP/htdocs/auditseo/apps/site`](/Applications/MAMP/htdocs/auditseo/apps/site)
- API/CMS: [`/Applications/MAMP/htdocs/auditseo/apps/cms-api`](/Applications/MAMP/htdocs/auditseo/apps/cms-api)
- Deploy principal do site: [`/Applications/MAMP/htdocs/auditseo/vercel.json`](/Applications/MAMP/htdocs/auditseo/vercel.json)

Diretórios legados na raiz como `blog/`, `servicos/`, `nichos/`, `saude/`, `b2b/`, `dist/`, `crm.auditseo.com.br/` e `reports.auditseo.com.br/` não devem ser tratados como base principal para novas mudanças.

## Estrutura

```text
apps/
  site/        Site público em Astro
  cms-api/     API do CMS / CRM / captura de leads

assets/        Recursos legados ainda referenciados por conteúdo migrado
blog/          HTML legado
servicos/      HTML legado
nichos/        HTML legado
dist/          Saída do build estático antigo
scripts/       Scripts legados de build/migração/SEO
to-do/         Planejamento, blueprint e roadmap editorial/comercial
```

## Scripts principais

### Site público

- `npm run dev` -> alias para `site:dev`
- `npm run build` -> alias para `site:build`
- `npm run preview` -> alias para `site:preview`
- `npm run check` -> alias para `site:check`
- `npm run qa` -> alias para `site:qa`

- `npm run site:dev`
- `npm run site:build`
- `npm run site:preview`
- `npm run site:check`
- `npm run site:qa`

### CMS / API

- `npm run cms:dev`
- `npm run cms:start`
- `npm run cms:reset`

### Legado

Os scripts abaixo ainda existem para suporte ao acervo antigo, mas **não** representam o fluxo principal do projeto:

- `npm run legacy:build:home`
- `npm run legacy:build:site`
- `npm run legacy:preview:dist`
- `npm run legacy:map:pages`
- `npm run legacy:seo:implement`
- `npm run legacy:sitemap:generate`

## Como rodar localmente

### Site público

```bash
npm install
npm run dev
```

### API do CMS

```bash
npm run cms:dev
```

## Deploy

### Site principal

- O deploy principal usa [`/Applications/MAMP/htdocs/auditseo/vercel.json`](/Applications/MAMP/htdocs/auditseo/vercel.json)
- Build command:

```bash
npm --prefix apps/site install && npm --prefix apps/site run build
```

- Output:

```bash
apps/site/dist
```

### Deploys auxiliares

- [`/Applications/MAMP/htdocs/auditseo/apps/site/vercel.json`](/Applications/MAMP/htdocs/auditseo/apps/site/vercel.json) existe para deploy direto da app Astro
- [`/Applications/MAMP/htdocs/auditseo/apps/cms-api/vercel.json`](/Applications/MAMP/htdocs/auditseo/apps/cms-api/vercel.json) é o deploy da API do CMS

## Operação

- Novas páginas públicas devem nascer em `apps/site`
- Novas rotas do admin devem nascer em `apps/site/src/pages/admin`
- Persistência editorial e CRM devem passar por `apps/cms-api`
- Mudanças em conteúdo legado da raiz só devem ocorrer quando fizerem parte de migração, compatibilidade ou redirect

## Riscos conhecidos

- O repositório ainda carrega múltiplas superfícies legadas
- Ainda há conteúdo híbrido entre coleções Astro, registros TS e HTML legado
- O admin/CMS ainda precisa de endurecimento de autenticação e governança de acesso

## Direção recomendada

1. manter Astro como única fonte pública de verdade
2. reduzir o uso operacional dos artefatos legados da raiz
3. seguir migrando blog/serviços para estruturas tipadas
4. endurecer o admin antes de tratar dados sensíveis como CRM final
