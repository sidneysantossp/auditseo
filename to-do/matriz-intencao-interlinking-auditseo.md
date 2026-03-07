# Matriz de Intencao e Interlinking AUDITSEO

Data de referencia: 2026-03-07

## 1. Matriz de intencao por tipo de pagina

| Intencao principal | Melhor tipo de pagina | Papel da pagina | CTA dominante | Nao deve fazer |
| --- | --- | --- | --- | --- |
| Informacional | Artigo pilar ou satelite | Responder, educar e qualificar | Leitura relacionada ou servico canonico | Vender agressivamente logo no primeiro bloco |
| Tecnica | Artigo tecnico, ferramenta, case | Ensinar implementacao e provar metodo | Checklist, ferramenta, auditoria | Ficar abstrata sem exemplo pratico |
| Comparativa | Artigo comparativo ou hub decisorio | Ajudar escolha e framing | Diagnostico ou servico relacionado | Criar comparativo sem ponto de vista |
| Comercial | Pagina de servico | Converter e enquadrar a oferta | Diagnostico, contato, proposta | Competir com blog por mesma query |
| Local | Pagina de cidade ou LP | Qualificar contexto geografico | Servico local ou nicho aderente | Virar doorway page generica |
| Setorial | Pagina de nicho ou LP | Traduzir a oferta para um mercado | Servico canonico do cluster | Repetir copy de outro nicho |

## 2. Regras de linkagem obrigatoria

### Todo artigo deve apontar para

- 1 categoria
- 1 servico canonico
- 1 artigo relacionado do mesmo cluster
- 1 ativo de prova quando existir: case ou ferramenta

### Toda pagina de servico deve apontar para

- 1 categoria editorial dominante
- 3 artigos pilares
- 1 ferramenta
- 1 case
- 2 paginas de nicho ou cidade

### Toda pagina de nicho deve apontar para

- 1 servico principal
- 1 servico secundario quando fizer sentido
- 2 artigos do cluster
- 1 cidade ou LP relevante

### Toda pagina de cidade deve apontar para

- 1 servico local dominante
- 1 nicho aderente
- 2 artigos utilitarios
- 1 prova ou ferramenta se existir

### Toda LP deve apontar para

- servico canonico
- nicho
- cidade
- 2 artigos
- 1 prova

## 3. Mapa de intencao dos 12 clusters

| Cluster | Intencao dominante | Pagina canonica | Hub editorial | Prova minima |
| --- | --- | --- | --- | --- |
| AI Overviews | Informacional + comercial | `/servicos/ai-overview-optimization/` | `/blog/categoria/ai-overviews/` | 1 case ou 1 ferramenta |
| LLM Brand Presence | Informacional + comercial | `/servicos/llm-brand-presence/` | `/blog/categoria/llm-seo/` | 1 case + 1 artigo de monitoramento |
| SEO Tecnico para IA | Tecnica + comercial | `/servicos/auditoria-seo/` | `/blog/categoria/seo-tecnico/` | 1 ferramenta tecnica |
| Analytics e Monitoramento | Tecnica + informacional | Consultoria/Auditoria | `/blog/categoria/analytics/` | 1 checklist ou ferramenta |
| Prompt Optimization | Tecnica + informacional | AI Overview Optimization | `/blog/categoria/prompt-optimization/` | 1 gerador ou checklist |
| Governanca Editorial | Tecnica + comercial | Consultoria SEO | `/blog/categoria/estrategia/` | 1 case metodologico |
| SEO Local e IA | Local + comercial | `/servicos/seo-local/` | `/blog/categoria/estrategia/` | 1 checklist local |
| AI Search para Saude | Setorial + local | Nicho + servico | cluster de AI Overviews/LLM | 1 LP ou case |
| AI Search para Juridico | Setorial + comercial | Nicho + servico | cluster de LLM SEO | 1 comparativo ou case |
| AI Search para Energia Solar | Setorial + comercial | Nicho + servico | cluster de estrategia | 1 artigo decisorio |
| AI Search para Software B2B | Setorial + comparativa | Nicho + servico | cluster de LLM/analytics | 1 comparativo |
| Comparativos e Decisao | Comparativa + comercial | servicos correlatos | hub proprio ou hubs atuais | 2 comparativos fortes |

## 4. Fluxos de interlinking por jornada

### Jornada 1: descoberta editorial

`artigo satelite -> artigo pilar -> categoria -> servico -> contato`

Uso:

- topo e meio de funil
- perguntas conceituais e tecnicas

### Jornada 2: leitura tecnica

`artigo tecnico -> ferramenta -> case -> servico`

Uso:

- profissionais e decisores que querem validacao pratica

### Jornada 3: aplicacao setorial

`artigo pilar -> nicho -> servico -> LP`

Uso:

- usuarios que ja reconhecem o proprio mercado no problema

### Jornada 4: descoberta local

`artigo utilitario -> cidade -> servico local -> contato`

Uso:

- demandas de geografia definida

### Jornada 5: decisao comparativa

`artigo comparativo -> artigo pilar -> servico A/servico B -> diagnostico`

Uso:

- usuarios comparando caminhos de investimento

## 5. Regras para evitar canibalizacao via links internos

- artigo nao deve linkar com ancora principal para outro artigo que disputa a mesma query
- nicho nao deve receber ancora comercial principal se a query pertence ao servico canonico
- cidade nao deve ser tratada como pagina principal do servico
- LP nao deve tentar ranquear para termo generico do servico
- comparativo nao deve substituir pagina comercial ou pilar

## 6. Anchors recomendadas

### Para servicos

- `diagnostico de AI Overviews`
- `consultoria para LLM SEO`
- `auditoria tecnica para AI search`
- `SEO local para negocios com demanda geografica`

### Para categorias

- `guia completo sobre AI Overviews`
- `conteudos sobre LLM SEO`
- `referencia tecnica de SEO para IA`
- `artigos sobre analytics em AI search`

### Para nichos

- `aplicacao em clinicas medicas`
- `estrategia para escritorios de advocacia`
- `SEO para empresas de energia solar`

## 7. Ordem operacional de execucao

1. revisar links internos dos 3 clusters mais importantes
2. reforcar paginas de servico com mais entradas e saidas qualificadas
3. usar cases e ferramentas como conectores centrais
4. so depois expandir novas URLs
