(function () {
  'use strict';

  function normalize(pathname) {
    if (!pathname) return '/';
    var p = pathname.replace(/\/index\.html$/i, '/');
    if (!p.startsWith('/')) p = '/' + p;
    if (!p.endsWith('/')) p += '/';
    return p.replace(/\/+/g, '/');
  }

  function isActivePath(current, target) {
    if (target === '/') return current === '/';
    return current.startsWith(target);
  }

  function activeClass(current, target) {
    return isActivePath(current, target) ? ' as-active' : '';
  }

  function removeLegacyLayout() {
    var selectors = [
      'body > nav.nav',
      'body > .mobile-menu',
      'body > #mobileMenu',
      'body > .mobile-sidebar',
      'body > .mobile-sidebar-overlay',
      'body > .hamburger',
      'body > .nav-menu-btn',
      'body > footer',
      'body > .footer'
    ];

    selectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el) {
        if (el.closest('#as-shell-root')) return;
        el.remove();
      });
    });
  }

  function buildShell() {
    if (!document.body || document.getElementById('as-shell-root')) return;

    var current = normalize(window.location.pathname);

    var navLinks = [
      { href: '/', label: 'Home' },
      { href: '/agencia-de-seo/', label: 'Agência de SEO' },
      { href: '/servicos/', label: 'Serviços' },
      { href: '/sobre/', label: 'Sobre' },
      { href: '/blog/', label: 'Blog' }
    ];

    var navDesktop = navLinks.map(function (item) {
      return '<a class="as-nav-link' + activeClass(current, item.href) + '" href="' + item.href + '">' + item.label + '</a>';
    }).join('');

    var navMobile = navLinks.map(function (item) {
      return '<a class="as-mobile-link' + activeClass(current, item.href) + '" href="' + item.href + '">' + item.label + '</a>';
    }).join('');

    var footerHTML = '' +
      '<footer class="as-footer" role="contentinfo">' +
        '<div class="as-footer-inner">' +
          '<div class="as-footer-grid">' +
            '<section class="as-footer-col as-footer-about">' +
              '<h3 class="as-footer-brand">AUDITSEO</h3>' +
              '<p class="as-footer-text">Agência de SEO em São Paulo especializada em Search Intelligence AI. Fundada em 2024 por Sidney Santos. Preparamos marcas para AI Overviews, LLMs e buscas generativas.</p>' +
              '<div class="as-footer-social">' +
                '<a class="as-footer-link" href="https://instagram.com/auditseo" target="_blank" rel="noopener">Instagram</a>' +
                '<a class="as-footer-link" href="https://linkedin.com/company/auditseo" target="_blank" rel="noopener">LinkedIn</a>' +
                '<a class="as-footer-link" href="https://facebook.com/auditseo" target="_blank" rel="noopener">Facebook</a>' +
                '<a class="as-footer-link" href="https://wa.me/5511996384376?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20AUDITSEO." target="_blank" rel="noopener">WhatsApp</a>' +
              '</div>' +
            '</section>' +
            '<nav class="as-footer-col">' +
              '<h4 class="as-footer-title">Serviços</h4>' +
              '<div class="as-footer-list">' +
                '<a class="as-footer-link" href="/servicos/consultoria-seo/">Consultoria SEO</a>' +
                '<a class="as-footer-link" href="/servicos/auditoria-seo/">Auditoria SEO</a>' +
                '<a class="as-footer-link" href="/servicos/seo-local/">SEO Local</a>' +
                '<a class="as-footer-link" href="/servicos/google-meu-negocio/">Google Meu Negócio</a>' +
                '<a class="as-footer-link" href="/servicos/ai-overview-optimization/">AI Overview Optimization</a>' +
                '<a class="as-footer-link" href="/servicos/llm-brand-presence/">LLM Brand Presence</a>' +
              '</div>' +
            '</nav>' +
            '<nav class="as-footer-col">' +
              '<h4 class="as-footer-title">Institucional</h4>' +
              '<div class="as-footer-list">' +
                '<a class="as-footer-link" href="/sobre/">Sobre Nós</a>' +
                '<a class="as-footer-link" href="/agencia-de-seo/">Agência de SEO</a>' +
                '<a class="as-footer-link" href="/blog/">Blog</a>' +
              '</div>' +
            '</nav>' +
            '<section class="as-footer-col">' +
              '<h4 class="as-footer-title">Contato</h4>' +
              '<div class="as-footer-list">' +
                '<a class="as-footer-link" href="https://wa.me/5511996384376" target="_blank" rel="noopener">+55 (11) 99638-4376</a>' +
                '<a class="as-footer-link" href="mailto:contato@auditseo.com.br">contato@auditseo.com.br</a>' +
              '</div>' +
              '<address class="as-footer-address">Rua Baronesa de Bela Vista, 411<br>São Paulo, SP - 01520-000<br>Brasil</address>' +
              '<a class="as-footer-cta" href="https://wa.me/5511996384376?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20AUDITSEO%20e%20quero%20um%20diagn%C3%B3stico." target="_blank" rel="noopener">Diagnóstico Grátis</a>' +
            '</section>' +
          '</div>' +
          '<div class="as-footer-bottom">' +
            '<p class="as-footer-copy">© 2024–2026 AUDITSEO — Todos os direitos reservados. Search Intelligence Consultancy.</p>' +
          '</div>' +
        '</div>' +
      '</footer>';

    var root = document.createElement('div');
    root.id = 'as-shell-root';
    root.innerHTML = '' +
      '<header class="as-header" role="banner">' +
        '<div class="as-header-inner">' +
          '<a class="as-logo" href="/" aria-label="AUDITSEO"><span>AUDITSEO</span></a>' +
          '<nav class="as-nav" aria-label="Navegação principal">' + navDesktop + '</nav>' +
          '<a class="as-cta" href="https://wa.me/5511996384376?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20AUDITSEO%20e%20quero%20um%20diagn%C3%B3stico." target="_blank" rel="noopener">Falar com Especialista</a>' +
          '<button class="as-burger" type="button" aria-label="Abrir menu" aria-expanded="false">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</header>' +
      '<div class="as-mobile" aria-hidden="true">' +
        '<div class="as-mobile-overlay"></div>' +
        '<aside class="as-mobile-panel" aria-label="Menu mobile">' +
          '<div class="as-mobile-top">' +
            '<a class="as-logo" href="/"><span>AUDITSEO</span></a>' +
            '<button class="as-mobile-close" type="button" aria-label="Fechar menu">×</button>' +
          '</div>' +
          '<nav class="as-mobile-nav" aria-label="Navegação mobile">' + navMobile + '</nav>' +
          '<div class="as-mobile-cta">' +
            '<a class="as-cta" href="https://wa.me/5511996384376?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20AUDITSEO%20e%20quero%20um%20diagn%C3%B3stico." target="_blank" rel="noopener">Falar com Especialista</a>' +
          '</div>' +
        '</aside>' +
      '</div>';

    var skipLink = document.querySelector('body > .skip-link');
    if (skipLink) {
      skipLink.insertAdjacentElement('afterend', root);
    } else {
      document.body.prepend(root);
    }

    document.body.classList.add('as-shell-enabled');

    removeLegacyLayout();
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    var burger = root.querySelector('.as-burger');
    var mobile = root.querySelector('.as-mobile');
    var overlay = root.querySelector('.as-mobile-overlay');
    var closeBtn = root.querySelector('.as-mobile-close');

    function closeMenu() {
      document.body.classList.remove('as-mobile-open');
      burger.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
      document.body.classList.add('as-mobile-open');
      burger.setAttribute('aria-expanded', 'true');
    }

    burger.addEventListener('click', function () {
      if (document.body.classList.contains('as-mobile-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener('click', closeMenu);
    closeBtn.addEventListener('click', closeMenu);

    mobile.querySelectorAll('.as-mobile-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && document.body.classList.contains('as-mobile-open')) {
        closeMenu();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildShell);
  } else {
    buildShell();
  }
})();
