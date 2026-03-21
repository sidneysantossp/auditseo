# Barueri / Alphaville Measurement Plan

## Objetivo
Medir se o cluster local de `Barueri / Alphaville` esta ganhando tracao em:

- impressao
- clique
- consulta relevante
- lead atribuido

Sem inflar URLs e sem criar ativos novos cedo demais.

## Ativos que entram na leitura semanal
### Money e apoio local
- `/servicos/agencia-de-seo-em-barueri/`
- `/servicos/consultoria-seo-em-barueri/`
- `/servicos/auditoria-seo-em-barueri/`
- `/cidades/barueri/`

### BOFU local
- `/blog/agencia-seo-para-empresas-em-barueri-como-escolher/`
- `/blog/consultoria-seo-em-barueri-vale-a-pena/`
- `/blog/auditoria-seo-em-barueri-quando-faz-sentido/`
- `/blog/quanto-custa-seo-em-barueri-e-alphaville/`
- `/blog/em-quanto-tempo-seo-gera-resultado-em-barueri-e-alphaville/`
- `/blog/agencia-seo-ou-consultoria-seo-em-barueri-e-alphaville/`

## Consultas que devem ser monitoradas
### Head terms principais
- `agencia de seo em barueri`
- `agencia de seo alphaville`
- `empresa de seo em barueri`
- `consultoria seo em barueri`
- `consultoria seo alphaville`
- `auditoria seo em barueri`

### Variacoes sem abrir URL nova
- `especialista em seo alphaville`
- `consultor seo em barueri`
- `empresa de seo alphaville`
- `especialista seo barueri`
- `consultor seo alphaville`

## Leitura no Search Console
### Toda semana
1. filtrar paginas do cluster local
2. listar consultas que contenham `barueri`, `alphaville`, `seo`, `consultoria`, `auditoria`, `agencia`, `empresa`, `especialista`, `consultor`
3. comparar:
   - impressoes
   - cliques
   - CTR
   - posicao media

### Sinais de acao
- `impressoes sobem e CTR cai`
  - revisar title/meta
- `consulta aparece mas a pagina errada recebe impressoes`
  - corrigir canibalizacao com links internos e copy
- `queries de especialista/consultor crescem`
  - reforcar copy visivel, FAQ e interlinking na pagina existente
- `agencia local cresce, mas apoio BOFU nao`
  - reforcar distribuicao do hub e recursos relacionados

## Leitura no site e no CMS
O tracking ja captura:

- `pagePath`
- `pageUrl`
- `pageTitle`
- `firstLandingUrl`
- `referrer`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `captureType`
- `channel`
- `company`
- `site`
- `serviceIntent`
- `seoInvestment`

Arquivos-base:
- [SiteShellScripts.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/components/SiteShellScripts.astro)
- [CtaModal.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/components/CtaModal.astro)
- [ContactPageEnhancements.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/components/ContactPageEnhancements.astro)
- [server.mjs](/Applications/MAMP/htdocs/auditseo/apps/cms-api/server.mjs)

## Leitura operacional no admin
O `/admin` deve responder 3 perguntas:

1. quais paginas locais estao capturando mais entrada?
2. qual tipo de captura domina a praca?
3. houve lead real ou so clique de WhatsApp?

Bloco novo de leitura local:
- ultimos `7 dias`
- watchlist do cluster `Barueri / Alphaville`
- leads locais
- eventos locais
- formularios locais
- ultimo lead local

## Rito semanal
### Segunda
- revisar Search Console do cluster
- anotar 5 consultas com melhor tracao
- anotar 5 consultas com pior CTR

### Quarta
- ajustar copy, FAQ, interlinking e recursos relacionados
- nunca abrir URL nova no mesmo dia sem antes corrigir a pagina ja existente

### Sexta
- revisar captacao no `/admin`
- classificar qualidade dos leads:
  - empresa real
  - ticket potencial
  - servico buscado
  - aderencia a Barueri / Alphaville

## Gatilhos de decisao
### Ajuste de snippet
- pagina local com `>= 25 impressoes/semana`
- e `CTR < 2%`

### Ajuste de relevancia interna
- query local relevante com `posicao media > 15`
- e pagina certa ja recebe alguma impressao

### Liberar terceira onda de refinamento semantico
- `1 lead qualificado` atribuido ao cluster
- ou `3 semanas seguidas` de aumento em impressoes e cliques

### Travar expansao
- so ha clique generico e nenhuma consulta local relevante
- as impressoes estao indo para pagina canônica errada
- o cluster local nao gera nenhuma captura apos ciclo suficiente de indexacao

## O que nao fazer
- abrir URL para cada sinonimo
- abrir pagina separada para `especialista` ou `consultor`
- tomar clique de BOFU como prova de que a pagina money esta pronta
- confundir clique de WhatsApp com lead qualificado

## Resultado esperado
Com este plano, `Barueri / Alphaville` escala com:

- uma URL money principal
- duas paginas complementares
- um hub geografico
- BOFU local
- mediçao semanal disciplinada

Sem virar colecao de paginas locais infladas.
