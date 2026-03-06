import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.auditseo.com.br',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  vite: {
    server: {
      host: true
    }
  }
});
