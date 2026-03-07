# CMS API AUDITSEO

Backend separado do painel administrativo.

## Objetivo

Manter o site publico em `Astro static-first` e mover autenticacao, sessao e persistencia editorial para uma camada isolada.

## Fase atual

- persistencia em arquivo JSON
- autenticacao por email + senha
- sessao por token bearer
- leitura e escrita do estado editorial do painel

## Evolucao prevista

1. trocar persistencia em arquivo por Postgres
2. mover sessao para cookie seguro/httpOnly quando a origem do admin estiver estabilizada
3. adicionar CRUD de artigos, cases e ferramentas
4. publicar workflow real de draft/review/scheduled/published
