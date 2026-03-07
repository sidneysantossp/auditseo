# Roadmap de 30 URLs Comerciais em Padrao Service-First

Data de referencia: 2026-03-07

Objetivo:

- esconder a taxonomia interna de cluster na URL publica
- apresentar arquitetura comercial mais natural para o mercado
- manter consistencia entre servico canonico, recorte setorial, cidade e regiao

## Convencao publica

- servico canonico: `/servicos/[servico]/`
- servico + setor: `/servicos/[servico]-para-[segmento]/`
- servico + cidade: `/servicos/[servico]-em-[cidade]/`
- servico + setor + cidade: `/servicos/[servico]-para-[segmento]-em-[cidade]/`
- servico + setor + regiao: `/servicos/[servico]-para-[segmento]-na-[regiao]/`

## Regras

1. o slug sempre comeca pelo servico
2. cidade e regiao entram depois do contexto comercial
3. a pagina canonica do servico continua existindo
4. paginas derivadas reforcam a canonica, nao competem com ela
5. paginas regionais so entram depois do lastro local

## 1. Nacionais

| Prioridade | URL | Servico canonico | Uso |
| --- | --- | --- | --- |
| 1 | `/servicos/seo-para-clinicas-medicas/` | `/servicos/seo-local/` | vertical mae de saude |
| 2 | `/servicos/seo-para-dermatologistas/` | `/servicos/seo-local/` | vertical medica especializada |
| 3 | `/servicos/seo-para-odontologia/` | `/servicos/seo-local/` | vertical local muito comercial |
| 4 | `/servicos/seo-para-cirurgia-plastica/` | `/servicos/seo-local/` | nicho premium de saude |
| 5 | `/servicos/seo-para-ginecologia/` | `/servicos/seo-local/` | saude feminina com contexto proprio |
| 6 | `/servicos/seo-para-fisioterapia/` | `/servicos/seo-local/` | clinicas e atendimento recorrente |
| 7 | `/servicos/seo-para-escritorios-de-advocacia/` | `/servicos/consultoria-seo/` | juridico |
| 8 | `/servicos/consultoria-seo-para-energia-solar/` | `/servicos/consultoria-seo/` | vertical B2B |
| 9 | `/servicos/consultoria-seo-para-software-b2b/` | `/servicos/consultoria-seo/` | software e demanda consultiva |
| 10 | `/servicos/llm-brand-presence-para-empresas-b2b/` | `/servicos/llm-brand-presence/` | descoberta em IA para B2B |

## 2. Locais

| Prioridade | URL | Servico canonico | Uso |
| --- | --- | --- | --- |
| 11 | `/servicos/seo-local-para-clinicas-medicas-em-sao-paulo/` | `/servicos/seo-local/` | pagina local critica de saude |
| 12 | `/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-paulo/` | `/servicos/google-meu-negocio/` | maps e descoberta local |
| 13 | `/servicos/seo-local-para-dermatologistas-em-sao-paulo/` | `/servicos/seo-local/` | vertical local especializada |
| 14 | `/servicos/google-meu-negocio-para-dermatologistas-em-sao-paulo/` | `/servicos/google-meu-negocio/` | complemento de GBP |
| 15 | `/servicos/seo-local-para-odontologia-em-campinas/` | `/servicos/seo-local/` | cidade ja existente na arquitetura |
| 16 | `/servicos/google-meu-negocio-para-odontologia-em-campinas/` | `/servicos/google-meu-negocio/` | maps em Campinas |
| 17 | `/servicos/seo-local-para-clinicas-medicas-em-barueri/` | `/servicos/seo-local/` | cidade prioritaria da Grande SP |
| 18 | `/servicos/google-meu-negocio-para-clinicas-medicas-em-barueri/` | `/servicos/google-meu-negocio/` | GBP em Barueri |
| 19 | `/servicos/seo-local-para-clinicas-medicas-em-sao-jose-dos-campos/` | `/servicos/seo-local/` | Vale do Paraiba |
| 20 | `/servicos/google-meu-negocio-para-clinicas-medicas-em-sao-jose-dos-campos/` | `/servicos/google-meu-negocio/` | GBP no Vale do Paraiba |
| 21 | `/servicos/consultoria-seo-para-energia-solar-em-sao-paulo/` | `/servicos/consultoria-seo/` | B2B local |
| 22 | `/servicos/seo-para-escritorios-de-advocacia-em-sao-paulo/` | `/servicos/consultoria-seo/` | juridico local |
| 23 | `/servicos/llm-brand-presence-para-escritorios-de-advocacia-em-sao-paulo/` | `/servicos/llm-brand-presence/` | juridico + IA |
| 24 | `/servicos/consultoria-seo-para-software-b2b-em-sao-paulo/` | `/servicos/consultoria-seo/` | software B2B local |

## 3. Regionais

| Prioridade | URL | Servico canonico | Uso |
| --- | --- | --- | --- |
| 25 | `/servicos/seo-local-para-clinicas-medicas-na-grande-sao-paulo/` | `/servicos/seo-local/` | regiao metropolitana |
| 26 | `/servicos/google-meu-negocio-para-clinicas-medicas-na-grande-sao-paulo/` | `/servicos/google-meu-negocio/` | maps regional |
| 27 | `/servicos/seo-para-odontologia-em-campinas-e-regiao/` | `/servicos/seo-local/` | recorte regional reconhecivel |
| 28 | `/servicos/consultoria-seo-para-empresas-no-interior-de-sao-paulo/` | `/servicos/consultoria-seo/` | regional empresarial |
| 29 | `/servicos/seo-para-escritorios-de-advocacia-na-grande-sao-paulo/` | `/servicos/consultoria-seo/` | juridico regional |
| 30 | `/servicos/consultoria-seo-para-energia-solar-no-interior-de-sao-paulo/` | `/servicos/consultoria-seo/` | B2B regional |

## 4. Ordem de execucao

### Onda 1

- 1 a 6
- 11 a 16

### Onda 2

- 7 a 10
- 17 a 24

### Onda 3

- 25 a 30

## 5. Regras de entrada

### Nacional

- pode entrar quando houver copy comercial forte e prova setorial suficiente

### Local

- exige contexto geografico, CTA local, prova de entrega e ponte clara com GBP ou SEO Local

### Regional

- so entra quando ja houver paginas locais abaixo dela
- nao deve ser publicada como atalho para cobrir muitas cidades sem profundidade

## 6. Observacao tatico-estrategica

Mesmo usando apenas `/servicos/` na URL publica, a classificacao interna no CMS e na arquitetura deve continuar existindo:

- segmento
- cidade
- regiao
- servico canonico
- cluster editorial dominante

Isso protege a leitura estrutural do projeto sem expor sua taxonomia pela URL.
