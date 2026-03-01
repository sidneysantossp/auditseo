# AUDITSEO - Site Static-First

Projeto preparado para fluxo profissional com:
- `HTML/CSS/JS` estático (sem alterar o design)
- build para `dist/` (deploy na Vercel)
- padronização progressiva de blocos (header/footer da home)

## Requisitos
- Node.js 20+
- npm 10+

## Scripts
- `npm run build:home`: gera POC apenas da home em `dist/`
- `npm run build:site`: gera versão estática completa em `dist/`
- `npm run build`: alias para `build:site` (usado pela Vercel)
- `npm run preview:dist`: sobe servidor local da pasta `dist` em `http://localhost:4173`

## Como rodar local
```bash
npm install
npm run build
npm run preview:dist
```

## Deploy na Vercel
1. Suba o projeto no GitHub.
2. Na Vercel, importe o repositório.
3. Framework Preset: `Other`.
4. Build Command: `npm run build` (já definido em [`vercel.json`](./vercel.json)).
5. Output Directory: `dist` (já definido em [`vercel.json`](./vercel.json)).
6. Faça deploy.

## GitHub
`.gitignore` já configurado para não subir:
- `node_modules/`
- `dist/`
- `.env` e variantes
- logs e arquivos temporários

## Segurança (obrigatório antes do push)
- Chaves de API removidas de hardcode em `apresentacao/server.js` e migradas para variáveis de ambiente.
- Se essas chaves já foram usadas/publicadas antes, **rotacione imediatamente** no provedor.

## Observações importantes
- Arquivos PHP (`sitemap.php`, `teste.php`) não são usados no deploy estático.
- O build copia `sitemap-data.xml` para `dist/sitemap.xml`.
- Backend Node do gerador (`apresentacao/server.js`) não é parte do deploy estático da Vercel e deve ficar em serviço separado se for usado em produção.
# auditseo
