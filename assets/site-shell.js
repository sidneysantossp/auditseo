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
    var BASE_URL = 'https://www.auditseo.com.br';

    var navLinks = [
      { href: BASE_URL + '/', path: '/', label: 'Home' },
      { href: BASE_URL + '/agencia-de-seo/', path: '/agencia-de-seo/', label: 'Agência de SEO' },
      { href: BASE_URL + '/servicos/', path: '/servicos/', label: 'Serviços' },
      { href: BASE_URL + '/sobre/', path: '/sobre/', label: 'Sobre' },
      { href: BASE_URL + '/blog/', path: '/blog/', label: 'Blog' }
    ];

    var navDesktop = navLinks.map(function (item) {
      return '<a class="as-nav-link' + activeClass(current, item.path) + '" href="' + item.href + '">' + item.label + '</a>';
    }).join('');

    var navMobile = navLinks.map(function (item) {
      return '<a class="as-mobile-link' + activeClass(current, item.path) + '" href="' + item.href + '">' + item.label + '</a>';
    }).join('');

    var footerHTML = '' +
      '<footer class="as-footer" role="contentinfo">' +
        '<div class="as-footer-inner">' +
          '<div class="as-footer-grid">' +
            '<section class="as-footer-col as-footer-about">' +
              '<h3 class="as-footer-brand">AUDITSEO</h3>' +
              '<p class="as-footer-desc">Agência de SEO em São Paulo especializada em Search Intelligence AI. Fundada em 2024 por Sidney Santos. Preparamos marcas para a nova era das buscas: AI Overviews, LLMs, assistentes de voz e buscas generativas.</p>' +
              '<div class="as-footer-social">' +
                '<a href="https://instagram.com/auditseo" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none"></circle></svg></a>' +
                '<a href="https://linkedin.com/company/auditseo" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="3"></rect><path d="M7 10v7M7 7v.01M11 10v7m0-4c0-2 1.5-3 3-3s3 1 3 3v4"></path></svg></a>' +
                '<a href="https://facebook.com/auditseo" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"></rect><path d="M15 3v4h-2c-1 0-1 1-1 2v2h3l-1 4h-2v6M10 21v-6H7v-4h3"></path></svg></a>' +
                '<a href="https://wa.me/5511996384376?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20AUDITSEO." target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21l1.5-4.5A9 9 0 1 1 7.5 19.5L3 21"></path><path d="M9 10c.5-1 1.5-1 2 0 .5 1 1.5 1 2 0m-5 3c1.5 2 4 2 5.5 0"></path></svg></a>' +
              '</div>' +
            '</section>' +
            '<nav class="as-footer-col">' +
              '<h4 class="as-footer-title">Serviços</h4>' +
              '<ul class="as-footer-list">' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/servicos/consultoria-seo/">Consultoria SEO</a></li>' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/servicos/auditoria-seo/">Auditoria SEO</a></li>' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/servicos/seo-local/">SEO Local</a></li>' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/servicos/google-meu-negocio/">Google Meu Negócio</a></li>' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/servicos/ai-overview-optimization/">AI Overview Optimization</a></li>' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/servicos/llm-brand-presence/">LLM Brand Presence</a></li>' +
              '</ul>' +
            '</nav>' +
            '<nav class="as-footer-col">' +
              '<h4 class="as-footer-title">Institucional</h4>' +
              '<ul class="as-footer-list">' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/sobre/">Sobre Nós</a></li>' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/agencia-de-seo/">Agência de SEO</a></li>' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/blog/">Blog</a></li>' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/politica-de-privacidade/">Política de Privacidade</a></li>' +
                '<li><a class="as-footer-link" href="' + BASE_URL + '/termos-de-uso/">Termos de Uso</a></li>' +
              '</ul>' +
            '</nav>' +
            '<section class="as-footer-col">' +
              '<h4 class="as-footer-title">Contato</h4>' +
              '<ul class="as-footer-list">' +
                '<li><a class="as-footer-link" href="https://wa.me/5511996384376" target="_blank" rel="noopener">+55 (11) 99638-4376</a></li>' +
                '<li><a class="as-footer-link" href="mailto:contato@auditseo.com.br">contato@auditseo.com.br</a></li>' +
              '</ul>' +
              '<address class="as-footer-address">Rua Baronesa de Bela Vista, 411<br>São Paulo, SP - 01520-000<br>Brasil</address>' +
              '<a class="as-footer-cta" href="' + BASE_URL + '/?diagnostico=1" data-as-open-diagnostic="true">Diagnóstico Grátis</a>' +
            '</section>' +
          '</div>' +
          '<div class="as-footer-bottom">' +
            '<p class="as-footer-copy">&copy; 2024–2026 AUDITSEO — Todos os direitos reservados. Search Intelligence Consultancy. CNPJ: XX.XXX.XXX/0001-XX</p>' +
          '</div>' +
        '</div>' +
      '</footer>';

    var root = document.createElement('div');
    root.id = 'as-shell-root';
    root.innerHTML = '' +
      '<header class="as-header" role="banner">' +
        '<div class="as-header-inner">' +
          '<a class="as-logo" href="' + BASE_URL + '/" aria-label="AUDITSEO"><span>AUDITSEO</span></a>' +
          '<nav class="as-nav" aria-label="Navegação principal">' + navDesktop + '</nav>' +
          '<a class="as-cta" href="' + BASE_URL + '/?diagnostico=1" data-as-open-diagnostic="true">Diagnóstico Grátis</a>' +
          '<button class="as-burger" type="button" aria-label="Abrir menu" aria-expanded="false">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</header>' +
      '<div class="as-mobile" id="asMobile" role="dialog" aria-label="Menu mobile">' +
        '<nav class="as-mobile-nav" aria-label="Navegação mobile">' + navMobile + '</nav>' +
        '<a class="as-cta as-mobile-cta-btn" href="' + BASE_URL + '/?diagnostico=1" data-as-open-diagnostic="true">Diagnóstico Grátis</a>' +
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
    var diagnosticButtons = root.querySelectorAll('[data-as-open-diagnostic]');

    function closeMenu() {
      document.body.classList.remove('as-mobile-open');
      burger.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
      document.body.classList.add('as-mobile-open');
      burger.setAttribute('aria-expanded', 'true');
    }

    function openDiagnosticModal() {
      if (typeof window.openModal === 'function') {
        window.openModal();
        return;
      }

      var inlineModal = document.getElementById('formModal');
      if (inlineModal) {
        inlineModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
      }

      window.location.href = BASE_URL + '/?diagnostico=1';
    }

    burger.addEventListener('click', function () {
      if (document.body.classList.contains('as-mobile-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    diagnosticButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        closeMenu();
        openDiagnosticModal();
      });
    });

    mobile.querySelectorAll('.as-mobile-link, .as-mobile-cta-btn').forEach(function (link) {
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
