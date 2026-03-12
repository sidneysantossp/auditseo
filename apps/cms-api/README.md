# CMS API AUDITSEO

Backend separado do painel administrativo.

## Objetivo

Manter o site publico em `Astro static-first` e mover autenticacao, sessao e persistencia editorial para uma camada isolada.

## Fase atual

- persistencia em arquivo JSON
- autenticacao por email + senha
- sessao por token bearer
- leitura e escrita do estado editorial do painel
- captura privada de leads e eventos do site
- resumo publico anonimo de conversao por pagina e tipo de captura

## Endpoints atuais

- `GET /health`
- `GET /api/bootstrap-status`
- `POST /api/bootstrap`
- `POST /api/login`
- `GET /api/session`
- `POST /api/logout`
- `GET /api/editorial-state`
- `PUT /api/editorial-state/items/:id`
- `GET /api/crm-state` (privado)
- `GET /api/public/crm-summary` (anonimo)
- `POST /api/public/lead-capture`

## Integracao com o site

O frontend do site so envia eventos de captura se a env abaixo estiver definida no build da app Astro:

- `PUBLIC_CMS_CAPTURE_ENDPOINT=https://seu-endpoint/api/public/lead-capture`

## Evolucao prevista

1. trocar persistencia em arquivo por Postgres
2. mover sessao para cookie seguro/httpOnly quando a origem do admin estiver estabilizada
3. adicionar visao privada de leads reais no admin quando o acesso voltar a ser protegido
4. adicionar CRUD de artigos, cases e ferramentas
5. publicar workflow real de draft/review/scheduled/published
