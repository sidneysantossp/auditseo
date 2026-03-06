export interface SiteAuthor {
  slug: string;
  name: string;
  role: string;
  url: string;
  imagePath: string;
  sameAs: string[];
  bio: string;
}

export const sidneySantos: SiteAuthor = {
  slug: 'sidney-santos',
  name: 'Sidney Santos',
  role: 'Fundador e Especialista em SEO',
  url: 'https://www.auditseo.com.br/autores/sidney-santos/',
  imagePath: '/eu2.jpg',
  sameAs: [
    'https://www.linkedin.com/in/sidney-especialista-em-seo/',
    'https://www.instagram.com/sidneyespecialistaseo',
    'https://www.facebook.com/auditseoagenciaespecializadaemseo'
  ],
  bio:
    'Especialista em SEO desde 2013, fundador da AUDITSEO e responsavel por estrategia, arquitetura, conteudo tecnico e projetos voltados a AI search.'
};
