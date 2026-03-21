# Google Business Profile Operacional - AUDITSEO como Service-Area Business em Barueri / Alphaville

## Objetivo
Operar o `Google Business Profile` da AUDITSEO de forma coerente com a realidade do negocio:

- `Barueri - SP` como ancora administrativa
- `Alphaville` como eixo comercial da mesma praca
- atendimento `remoto`
- reunioes presenciais `somente sob agendamento`
- sem fingir storefront aberto ou escritorio tradicional

## Base oficial do Google
Este checklist parte das diretrizes oficiais abaixo:

- [Guidelines for representing your business on Google](https://support.google.com/business/answer/3038177?hl=en)
- [Manage your service areas for service-area & hybrid businesses](https://support.google.com/business/answer/9157481?hl=en)
- [Manage your business address](https://support.google.com/business/answer/7031736?hl=en)
- [Verify your business with a video recording](https://support.google.com/business/answer/14271705?hl=en)

## Decisao operacional aprovada
- modelo do perfil: `Service Area Business`
- endereco publico: `oculto`
- cidade-base: `Barueri - SP`
- contexto comercial prioritario: `Alphaville`
- base operacional interna: `Centro Comercial Alphaville`
- CEP operacional de referencia: `06453-016`
- reuniao presencial: `somente sob agendamento`

## O que o Google permite e o que isso significa aqui
- O Google permite `service-area businesses` com uma unica base central e area de atendimento definida.
- O Google informa que, se a empresa `nao atende clientes no endereco`, ela pode `nao mostrar o endereco` e listar apenas a area de servico.
- O Google permite ate `20 areas de servico`.
- O Google informa que a area de servico `nao pode ser raio`; ela deve ser definida por `cidade, CEP ou outra area`.
- O Google nao permite usar `virtual office` como perfil elegivel.
- O Google tambem nao permite coworking como endereco publico se nao houver, ao mesmo tempo:
  - sinalizacao clara
  - atendimento a clientes no horario declarado
  - equipe propria da empresa no local durante o horario declarado

## Configuracao aprovada do perfil
### Nome
- usar exatamente `AUDITSEO`
- sem inserir palavras-chave artificiais no nome do perfil

### Modelo de atendimento
- marcar como negocio que atende na area de servico
- esconder o endereco publico
- nao prometer atendimento presencial aberto ao publico

### Areas de servico
Comecar enxuto. Fase 1:

- `Barueri`
- `Alphaville`, se a interface aceitar a area explicitamente

Regras:
- nao abrir perfil separado para cada cidade ou micropraca
- nao listar dezenas de areas sem operacao defensavel
- crescer so quando houver sinal real de impressao, clique ou lead

### Site
Usar como destino principal:

- [agencia-de-seo-em-barueri.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/pages/servicos/agencia-de-seo-em-barueri.astro)

Apoios diretos:

- [consultoria-seo-em-barueri.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/pages/servicos/consultoria-seo-em-barueri.astro)
- [auditoria-seo-em-barueri.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/pages/servicos/auditoria-seo-em-barueri.astro)
- [barueri.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/pages/cidades/barueri.astro)

## O que o perfil deve comunicar
- atuacao em `SEO`, `consultoria SEO` e `auditoria SEO`
- atendimento remoto com operacao comercial em `Barueri / Alphaville`
- reunioes presenciais apenas sob agendamento
- foco em empresas, nao em trafego generico de bairro

## O que o perfil nao deve comunicar
- escritorio aberto ao publico em tempo integral
- loja fisica
- recepcao permanente
- endereco compartilhado como se fosse sede tradicional
- perfis separados para `Barueri` e `Alphaville`
- promessas que o site nao sustenta

## Verificacao do perfil
Se o GBP exigir video, o Google pede prova de que voce representa o negocio e opera de verdade.

Para este caso, priorizar:
- acesso ao site e a canais oficiais da AUDITSEO
- materiais de marca
- prova de gestao do dominio e do negocio
- ferramentas, workspace e rotina de trabalho real
- contexto de operacao da equipe

Evitar depender de:
- fachada aberta que nao existe
- tentativa de vender o coworking como storefront

## Alinhamento obrigatorio com o site
O GBP so deve ser publicado se o site continuar coerente com este modelo:

- [barueri-alphaville-local-seo-playbook.md](/Applications/MAMP/htdocs/auditseo/docs/operations/barueri-alphaville-local-seo-playbook.md)
- [site.ts](/Applications/MAMP/htdocs/auditseo/apps/site/src/data/site.ts)
- [SchemaGraph.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/components/SchemaGraph.astro)
- [AgencySeoSchemas.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/components/AgencySeoSchemas.astro)
- [Footer.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/components/Footer.astro)
- [contato.astro](/Applications/MAMP/htdocs/auditseo/apps/site/src/pages/contato.astro)

Checklist minimo:
1. `Barueri` continua como ancora estrutural.
2. `Alphaville` continua como contexto comercial, nao como cidade-base separada.
3. O site nao volta a sugerir storefront aberto.
4. O schema continua em `areaServed`, nao em `PostalAddress` de loja publica.
5. O CTA e o contato seguem dizendo `presencial sob agendamento`.

## Riscos que bloqueiam publicacao
- usar `Centro Comercial Alphaville` como se fosse endereco publico de loja
- exibir endereco no perfil sem operacao presencial real
- abrir outro perfil para variacao semantica ou micropraca
- criar inconsistencia entre GBP, site, schema e contato
- crescer areas de servico sem prova comercial

## Gate para mudar de SAB para perfil com endereco publico
So considerar isso se houver, simultaneamente:

- atendimento presencial recorrente
- equipe propria no local durante horario declarado
- sinalizacao permanente
- aderencia real as diretrizes do Google

Sem esses 4 pontos, manter `service-area business`.
