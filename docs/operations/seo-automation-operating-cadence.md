# SEO Automation Operating Cadence

## Objective

Transform the active SEO automations into one operating system.

The goal is not to generate more reports. The goal is to:

- detect local and national opportunity early
- protect winning pages
- catch cannibalization before it spreads
- improve CTR and conversion without inflating URLs
- keep technical integrity stable while the site grows

## Active Automation Map

### Monday 09:00
- `SEO Alphaville Weekly`
- scope:
  - `/servicos/agencia-de-seo-em-barueri/`
  - `/servicos/consultoria-seo-em-barueri/`
  - `/servicos/auditoria-seo-em-barueri/`
  - `/cidades/barueri/`
  - local BOFU for `Barueri / Alphaville`
- primary question:
  - is the local cluster gaining real traction and qualified lead capture?
- primary owner:
  - `Euclid`
- final approval:
  - `Orchestrator`

### Tuesday 09:00
- `National Opportunity Radar`
- scope:
  - commercial pages
  - service hubs
  - city hubs
  - niche pages
  - BOFU support pages
- primary question:
  - which national query families are emerging strongly enough to justify reinforcement or expansion?
- primary owner:
  - `Lagrange`
- final approval:
  - `Orchestrator`

### Tuesday 15:00
- `Cannibalization Watch`
- scope:
  - agency
  - consultancy
  - audit
  - AI Overviews
  - local clusters
  - niche clusters
- primary question:
  - are two or more URLs competing for the same demand family?
- primary owner:
  - `Lagrange`
- final approval:
  - `Orchestrator`

### Wednesday 09:00
- `AI Overviews Weekly`
- scope:
  - `/`
  - `/agencia-de-seo/`
  - `/servicos/consultoria-seo/`
  - `/servicos/auditoria-seo/`
  - `/servicos/ai-overview-optimization/`
  - `/cidades/sao-paulo/`
  - BOFU commercial AI Overviews cluster
- primary question:
  - is the winning `Sao Paulo + AI Overviews` thesis still pulling adjacent pages up?
- primary owner:
  - `Lagrange`
- final approval:
  - `Orchestrator`

### Thursday 09:00
- `CTR Opportunity Watch`
- scope:
  - pages with existing impression volume
  - strong BOFU pages
  - money pages
  - category hubs
- primary question:
  - where can we earn more clicks without changing URL structure?
- primary owner:
  - `James`
- final approval:
  - `Orchestrator`

### Friday 09:00
- `SEO Technical Weekly`
- scope:
  - indexing
  - sitemap
  - canonicals
  - redirects
  - robots
  - schema integrity
  - internal linking integrity
- primary question:
  - did anything technical regress hard enough to weaken rankings or crawl flow?
- primary owner:
  - `QA / Release Controller`
- final approval:
  - `Orchestrator`

### Friday 15:00
- `Content Refresh Watch`
- scope:
  - commercial pages
  - BOFU pages
  - trust pages
  - methodology pages
  - category hubs
- primary question:
  - which strategic assets are losing force and should be refreshed instead of replaced?
- primary owner:
  - `Editorial Architect`
- final approval:
  - `Orchestrator`

## Reading Order

The system should be read in this order:

1. `SEO Technical Weekly`
2. `Cannibalization Watch`
3. `SEO Alphaville Weekly`
4. `AI Overviews Weekly`
5. `National Opportunity Radar`
6. `CTR Opportunity Watch`
7. `Content Refresh Watch`

Reason:

- technical breakage can invalidate everything else
- cannibalization can make growth signals misleading
- local and thesis-specific systems must be protected before expanding nationally
- opportunity and CTR only matter after structural integrity is clear
- refresh comes after diagnosis, not before

## Operating Rules

### Rule 1: Technical issues override growth work

If `SEO Technical Weekly` finds:

- broken canonical strategy
- wrong redirects
- wrong sitemap exposure
- noindex leakage
- schema regressions on strategic pages

then:

- pause expansion work for that affected cluster
- fix technical issues first

### Rule 2: Cannibalization blocks new URLs

If `Cannibalization Watch` shows overlap between:

- home and agency page
- canonical and local page
- BOFU and money page
- local pages inside the same city cluster

then:

- do not create a new URL
- fix with:
  - internal links
  - page reframing
  - FAQ reinforcement
  - title and meta adjustment
  - entity clarification

### Rule 3: Local traction is read before national expansion

If `SEO Alphaville Weekly` shows:

- rising impressions
- right page ownership
- real lead or qualified capture

then:

- reinforce the cluster
- do not split Alphaville into micro-URLs

If it shows weak traction:

- improve copy, FAQ, snippet and internal links
- do not expand the local structure

### Rule 4: A winning thesis must distribute authority

If `AI Overviews Weekly` shows the home page still owns the winning query family:

- preserve that position
- use internal links and support content to lift:
  - `/agencia-de-seo/`
  - `/servicos/consultoria-seo/`
  - `/servicos/auditoria-seo/`
  - `/servicos/ai-overview-optimization/`

Do not replace the winner just because adjacent pages deserve more traffic.

### Rule 5: CTR opportunities are cheaper than new assets

If a page has:

- real impressions
- acceptable page ownership
- weak CTR

then the next move is usually:

- title refinement
- description refinement
- clearer page framing
- FAQ support
- sharper intent matching

before writing a new page.

### Rule 6: Refresh beats expansion when authority already exists

If `Content Refresh Watch` shows a page already has:

- links
- impressions
- semantic ownership

then prefer:

- refresh
- expansion of useful depth
- internal-link recovery

instead of creating a parallel asset.

## URL Expansion Gate

No new URL should be approved unless all three conditions are true:

1. `Demand`
- Search Console or lead data shows real query-family movement

2. `Ownership gap`
- the current site has no clean page owner for that family

3. `No simpler fix`
- internal linking, snippet work, FAQ reinforcement, reframing or refresh are not enough

If any of the three is missing:

- do not open the URL

## Weekly Executive Digest

Every Friday, the final executive read should answer only these questions:

1. what got stronger this week?
2. what got weaker this week?
3. which page or cluster needs intervention now?
4. which opportunity is real enough to prioritize next week?
5. which expansions must stay blocked?

## Priority Ladder

Use this order when multiple actions compete:

1. technical regression
2. wrong page ownership
3. cannibalization
4. CTR fix on pages with impressions
5. refresh of decaying strategic assets
6. new BOFU support
7. new URL creation

## Approved System State

The automation system is considered healthy when:

- each automation has a distinct job
- duplicated routines are paused
- each report feeds a concrete decision
- no automation is allowed to justify URL sprawl alone

## Current Active Set

- `SEO Alphaville Weekly`
- `AI Overviews Weekly`
- `SEO Technical Weekly`
- `National Opportunity Radar`
- `CTR Opportunity Watch`
- `Cannibalization Watch`
- `Content Refresh Watch`

Paused duplicates:

- `seo-alphaville-weekly-2`
- `ai-overviews-weekly-2`
- `ctr-opportunity-watch-2`
