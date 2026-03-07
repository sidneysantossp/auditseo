# Onda 1 Comercial Sao Paulo - AUDITSEO

Data de referencia: 2026-03-07

## Tese operacional

A Onda 1 deve dominar um unico territorio comercial antes de abrir muitas frentes setoriais. A melhor forma de fazer isso e combinar:

- um recorte geografico com alta densidade economica
- um segmento com intencao comercial recorrente
- um modelo de pagina replicavel sem gerar doorway pages

Para a AUDITSEO, isso significa:

- foco inicial em Sao Paulo
- foco setorial principal em saude privada
- paginas publicas no padrao `service-first`
- taxonomia interna separada da URL publica

## Por que Sao Paulo vem primeiro

1. Sao Paulo continua sendo a maior concentracao populacional e economica do pais.
2. A Regiao Metropolitana de Sao Paulo segue como a maior do Brasil.
3. O Estado de Sao Paulo concentra o maior volume recente de abertura de empresas.
4. As regioes de Campinas e Sao Jose dos Campos ja aparecem, em fonte oficial, como polos fortes de criacao de empresas dentro do estado.

## Decisao de arquitetura

Nao abrir paginas por estado antes de fechar capital, metropole e polos economicos do estado.

Ordem correta:

1. pagina setorial mae sem geografia
2. pagina local de Sao Paulo capital
3. pagina local complementar de Google Meu Negocio
4. pagina regional de Grande Sao Paulo
5. paginas locais de polos do interior forte

## Onda 1 - 12 paginas comerciais

### Bloco A - Paginas setoriais maes

Essas paginas sao nacionais na leitura da URL, mas fazem parte da Onda 1 porque sustentam semanticamente as derivacoes locais de Sao Paulo.

| Ordem | URL | Tipo | Servico canonico | Papel |
| --- | --- | --- | --- | --- |
| 1 | `/servicos/seo-para-clinicas-medicas/` | setorial mae | `/servicos/seo-local/` | pagina principal para a vertical de saude |
| 2 | `/servicos/seo-para-dermatologistas/` | setorial mae | `/servicos/seo-local/` | especialidade medica de alta aderencia local |
| 3 | `/servicos/seo-para-odontologia/` | setorial mae | `/servicos/seo-local/` | vertical local forte e altamente comercial |

### Bloco B - Sao Paulo capital

Essas paginas capturam intencao de contratacao clara, com busca geografica e proximidade de conversao.

| Ordem | URL | Tipo | Servico canonico | Papel |
| --- | --- | --- | --- | --- |
| 4 | `/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/` | local comercial | `/servicos/seo-local/` | principal pagina local para clinicas medicas |
| 5 | `/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/` | local comercial | `/servicos/google-meu-negocio/` | maps, descoberta local e intencao imediata |
| 6 | `/servicos/seo-local-para-dermatologistas-em-sao-paulo/` | local comercial | `/servicos/seo-local/` | especialidade premium com forte sinal comercial |
| 7 | `/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/` | local comercial | `/servicos/google-meu-negocio/` | complementar para local pack e consultas |
| 8 | `/servicos/seo-local-para-odontologia-em-sao-paulo/` | local comercial | `/servicos/seo-local/` | vertical local com boa elasticidade de busca |
| 9 | `/servicos/google-meu-negocio-para-odontologia-em-sao-paulo/` | local comercial | `/servicos/google-meu-negocio/` | reforco para mapa e conversao de contato |

### Bloco C - Expansao dentro do Estado de Sao Paulo

Aqui entram apenas geografias com justificativa objetiva. Grande Sao Paulo e uma ponte regional. Campinas e Sao Jose dos Campos entram por lastro economico oficial.

| Ordem | URL | Tipo | Servico canonico | Papel |
| --- | --- | --- | --- | --- |
| 10 | `/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/` | ponte regional | `/servicos/seo-local/` | capturar busca metropolitana sem disputar a capital |
| 11 | `/servicos/seo-local-para-clinicas-medicas-em-campinas/` | local comercial | `/servicos/seo-local/` | primeiro polo do interior paulista |
| 12 | `/servicos/seo-local-para-clinicas-medicas-em-sao-jose-dos-campos/` | local comercial | `/servicos/seo-local/` | segundo polo de expansao no estado |

## Por que a Onda 1 nao abre muitos setores ainda

Juridico, energia solar e software B2B continuam estrategicos, mas entram na Onda 2.

Motivo:

- abrir saude primeiro cria densidade topical mais rapida
- a mesma estrutura comercial pode ser replicada com menor custo marginal
- a malha de apoio editorial fica mais coerente
- a chance de canibalizacao cai

## Onda 2 recomendada

Depois da Onda 1 validada:

1. `/servicos/seo-para-escritorios-de-advocacia-em-sao-paulo/`
2. `/servicos/consultoria-seo-para-energia-solar-em-sao-paulo/`
3. `/servicos/consultoria-seo-para-software-b2b-em-sao-paulo/`
4. `/servicos/consultoria-seo-para-empresas-no-interior-de-sao-paulo/`

## Intencao principal por pagina

### Clinicas medicas

- `seo-para-clinicas-medicas`: decisor buscando parceiro especialista
- `seo-local-para-clinicas-medicas-em-sao-paulo`: dono ou gestor com demanda geografica forte
- `google-meu-negocio-para-clinicas-medicas-em-sao-paulo`: necessidade imediata de visibilidade no Maps
- `seo-local-para-clinicas-medicas-na-grande-sao-paulo`: busca metropolitana, nao apenas capital
- `seo-local-para-clinicas-medicas-em-campinas`: expansao para polo relevante do interior
- `seo-local-para-clinicas-medicas-em-sao-jose-dos-campos`: expansao para polo relevante do Vale

### Dermatologistas

- `seo-para-dermatologistas`: vertical setorial de alta concorrencia
- `seo-local-para-dermatologistas-em-sao-paulo`: especialidade premium em mercado denso
- `google-meu-negocio-para-dermatologistas-em-sao-paulo`: busca de descoberta local imediata

### Odontologia

- `seo-para-odontologia`: vertical de forte aderencia local
- `seo-local-para-odontologia-em-sao-paulo`: clinicas e consultorios na capital
- `google-meu-negocio-para-odontologia-em-sao-paulo`: mapa e conversao rapida

## Linkagem interna obrigatoria

### Toda pagina setorial mae deve apontar para

- `/servicos/seo-local/`
- `/servicos/google-meu-negocio/` quando a aplicacao local for central
- 2 artigos BOFU do mesmo setor
- 2 paginas locais derivadas de Sao Paulo

### Toda pagina local deve apontar para

- a pagina setorial mae correspondente
- o servico canonico
- 2 artigos BOFU
- 1 pagina regional ou outra cidade do mesmo bloco, quando fizer sentido

### Toda pagina regional deve apontar para

- Sao Paulo capital
- Campinas
- Sao Jose dos Campos
- pagina setorial mae de clinicas medicas

## Conteudos BOFU que devem nascer junto

Essas 8 URLs de blog devem acompanhar a Onda 1 porque ajudam a qualificar a decisao comercial sem competir com as paginas maes.

1. `/blog/quanto-custa-seo-para-clinicas-medicas/`
2. `/blog/google-meu-negocio-para-clinicas-medicas/`
3. `/blog/seo-local-vale-a-pena-para-clinicas-medicas/`
4. `/blog/agencia-seo-para-clinicas-medicas-como-escolher/`
5. `/blog/seo-para-dermatologistas-vale-a-pena/`
6. `/blog/google-meu-negocio-para-dermatologistas/`
7. `/blog/seo-para-odontologia-como-funciona/`
8. `/blog/google-meu-negocio-para-odontologia/`

## Criterios de publicacao

Uma pagina da Onda 1 so entra quando tiver:

- tese comercial clara
- diferenciais de metodo
- FAQs setoriais reais
- copy local ou setorial propria
- CTA alinhado com o servico canonico
- interlinking minimo com servico, artigo e derivacoes

## Fontes oficiais usadas para a priorizacao

- IBGE, populacao estimada do pais em 2025:
  - https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/44305-populacao-estimada-do-pais-chega-a-213-4-milhoes-de-habitantes-em-2025
- IBGE Educa, estimativas de populacao com destaque para estados em 2024:
  - https://educa.ibge.gov.br/criancas/brasil/2697-ie-ibge-educa/jovens/materias--especiais/22435-projecoes-e-estimativas-de-populacao-voce-sabe-o-que-sao.html
- Seade, abertura de empresas no Estado de Sao Paulo no acumulado de maio de 2024 a abril de 2025:
  - https://trajetoriasocupacionais.seade.gov.br/integra/

## Leitura executiva

O melhor caminho nao e abrir dezenas de paginas para muitos setores ao mesmo tempo.

O melhor caminho e:

1. dominar saude em Sao Paulo
2. provar o modelo em capital + regiao metropolitana + polos do interior
3. so depois replicar o framework para juridico, energia solar e software B2B
