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
      { href: '/agencia-de-seo/', label: 'Agência' },
      { href: '/servicos/', label: 'Serviços' },
      { href: '/nichos/', label: 'Nichos' },
      { href: '/cidades/', label: 'Cidades' },
      { href: '/blog/', label: 'Blog' },
      { href: '/sobre/', label: 'Sobre' }
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
            '<section>' +
              '<h3 class="as-footer-title">AUDITSEO</h3>' +
              '<p class="as-footer-text">Search Intelligence AI para SEO, AI Overviews e presença em LLMs.</p>' +
              '<p class="as-footer-text">Rua Baronesa de Bela Vista, 411 · São Paulo, SP</p>' +
              '<p class="as-footer-text"><a class="as-footer-link" href="tel:+5511996384376">+55 11 99638-4376</a> · <a class="as-footer-link" href="mailto:contato@auditseo.com.br">contato@auditseo.com.br</a></p>' +
            '</section>' +
            '<nav>' +
              '<h3 class="as-footer-title">Serviços</h3>' +
              '<div class="as-footer-list">' +
                '<a class="as-footer-link" href="/servicos/consultoria-seo/">Consultoria SEO</a>' +
                '<a class="as-footer-link" href="/servicos/ai-overview-optimization/">AI Overview Optimization</a>' +
                '<a class="as-footer-link" href="/servicos/llm-brand-presence/">LLM Brand Presence</a>' +
                '<a class="as-footer-link" href="/servicos/seo-local/">SEO Local</a>' +
              '</div>' +
            '</nav>' +
            '<nav>' +
              '<h3 class="as-footer-title">Empresa</h3>' +
              '<div class="as-footer-list">' +
                '<a class="as-footer-link" href="/blog/">Blog</a>' +
                '<a class="as-footer-link" href="/agencia-de-seo/">Agência</a>' +
                '<a class="as-footer-link" href="/sobre/">Sobre</a>' +
                '<a class="as-footer-link" href="/servicos/">Todos os serviços</a>' +
              '</div>' +
            '</nav>' +
          '</div>' +
          '<div class="as-footer-bottom">' +
            '<p class="as-footer-copy">© 2024–2026 AUDITSEO. Todos os direitos reservados.</p>' +
            '<p class="as-footer-copy">Search Intelligence AI Consultancy</p>' +
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
          '<a class="as-cta" href="https://wa.me/5511996384376?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20AUDITSEO%20e%20quero%20um%20diagn%C3%B3stico." target="_blank" rel="noopener">Diagnóstico Grátis</a>' +
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
            '<a class="as-cta" href="https://wa.me/5511996384376?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20AUDITSEO%20e%20quero%20um%20diagn%C3%B3stico." target="_blank" rel="noopener">Falar no WhatsApp</a>' +
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
