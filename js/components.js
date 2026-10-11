/**
 * TVC88 GRIESHEIM — Navigation & Footer (Helles Design)
 * Setzt const TVC_PAGE = 'home' | 'aktuelles' | 'verein' | 'fahrzeuge' | 'galerie' | 'kontakt'
 */
(function () {

  const NAV_HTML = `
<header id="site-header">
  <div class="header-top">
    <a class="site-branding" href="index.html" aria-label="TVC88 Startseite">
      <img class="site-logo" src="data/img/logo/tvc88-logo.svg" alt="" aria-hidden="true" width="64" height="64">
      <div>
        <div class="site-name">Traktor Veteranen Club 88</div>
        <div class="site-sub">Griesheim e.V. · Gegründet 1988</div>
      </div>
    </a>
    <div class="header-stammtisch" aria-label="Stammtisch-Info">
      <strong>📅 Nächster Stammtisch</strong>
      Jeden 1. Freitag im Monat · 19:00 Uhr<br>
      Restaurant TuS · Jahnstraße 20 · Griesheim
    </div>
    <button class="menu-toggle" id="menuToggle" aria-label="Menü öffnen" aria-expanded="false">☰</button>
  </div>
  <nav class="header-nav" id="headerNav" aria-label="Hauptnavigation">
    <ul class="nav-list">
      <li class="nav-item" data-page="home">
        <a class="nav-link" href="index.html">Home</a>
      </li>
      <li class="nav-item nav-aktuell" data-page="aktuelles">
        <a class="nav-link" href="aktuelles-news.html">Aktuelles</a>
        <div class="dropdown" role="menu">
          <a href="aktuelles-news.html"       role="menuitem"><span class="drop-icon">📰</span> News &amp; Berichte</a>
          <a href="aktuelles-termine.html"    role="menuitem"><span class="drop-icon">📅</span> Termine &amp; Veranstaltungen</a>
          <a href="aktuelles-stammtisch.html" role="menuitem"><span class="drop-icon">🍺</span> Stammtisch</a>
          <a href="aktuelles-presse.html"     role="menuitem"><span class="drop-icon">📄</span> Presseberichte</a>
        </div>
      </li>
      <li class="nav-item" data-page="verein">
        <a class="nav-link" href="verein-geschichte.html">Der Verein</a>
        <div class="dropdown" role="menu">
          <a href="verein-geschichte.html" role="menuitem"><span class="drop-icon">ℹ️</span> Geschichte &amp; Chronik</a>
          <a href="verein-vorstand.html"   role="menuitem"><span class="drop-icon">👥</span> Vorstand</a>
          <a href="verein-mitglied.html"   role="menuitem"><span class="drop-icon">🤝</span> Mitglied werden</a>
        </div>
      </li>
      <li class="nav-item" data-page="fahrzeuge">
        <a class="nav-link" href="fahrzeuge-traktoren.html">Fahrzeuge</a>
        <div class="dropdown" role="menu">
          <a href="fahrzeuge-traktoren.html"  role="menuitem"><span class="drop-icon">🚜</span> Traktoren</a>
          <a href="fahrzeuge-einachser.html"  role="menuitem"><span class="drop-icon">⚙️</span> Einachser</a>
          <a href="fahrzeuge-automobile.html" role="menuitem"><span class="drop-icon">🚗</span> Automobile</a>
          <a href="fahrzeuge-zweiraeder.html" role="menuitem"><span class="drop-icon">🏍️</span> Zweiräder</a>
        </div>
      </li>
      <li class="nav-item" data-page="galerie">
        <a class="nav-link" href="galerie.html">Galerie</a>
        <div class="dropdown" role="menu">
          <a href="galerie.html?jahr=2026" role="menuitem"><span class="drop-icon">📸</span> 2026</a>
          <a href="galerie.html?jahr=2025" role="menuitem"><span class="drop-icon">📸</span> 2025</a>
          <a href="galerie.html?jahr=2024" role="menuitem"><span class="drop-icon">📸</span> 2024</a>
          <a href="galerie.html?jahr=2023" role="menuitem"><span class="drop-icon">📸</span> 2023</a>
          <a href="galerie.html?archiv=1"  role="menuitem"><span class="drop-icon">🗂️</span> Archiv 2008–2022</a>
        </div>
      </li>
      <li class="nav-item" data-page="kontakt">
        <a class="nav-link" href="kontakt.html">Kontakt</a>
      </li>
    </ul>
  </nav>
</header>`;

  const FOOTER_HTML = `
<footer id="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo"><img src="data/img/logo/tvc88-logo.svg" alt="" aria-hidden="true" width="44" height="44"> Traktor Veteranen Club 88</div>
      <p>Griesheim e.V. — Wir erhalten historische Landmaschinen, Traktoren und Oldtimer und präsentieren sie bei Treffen und Ausstellungen in der Region Rhein-Main.</p>
      <div class="footer-addr">
        📍 Restaurant TuS · Jahnstraße 20 · 64347 Griesheim<br>
        📧 <a href="mailto:info@tvc88.de">info@tvc88.de</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Aktuelles</h4>
      <ul>
        <li><a href="aktuelles-news.html">News &amp; Berichte</a></li>
        <li><a href="aktuelles-termine.html">Termine</a></li>
        <li><a href="aktuelles-stammtisch.html">Stammtisch</a></li>
        <li><a href="aktuelles-presse.html">Presseberichte</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Der Verein</h4>
      <ul>
        <li><a href="verein-geschichte.html">Geschichte</a></li>
        <li><a href="verein-vorstand.html">Vorstand</a></li>
        <li><a href="verein-mitglied.html">Mitglied werden</a></li>
        <li><a href="galerie.html">Galerie</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Fahrzeuge</h4>
      <ul>
        <li><a href="fahrzeuge-traktoren.html">Traktoren</a></li>
        <li><a href="fahrzeuge-einachser.html">Einachser</a></li>
        <li><a href="fahrzeuge-automobile.html">Automobile</a></li>
        <li><a href="fahrzeuge-zweiraeder.html">Zweiräder</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© ${new Date().getFullYear()} Traktor Veteranen Club 88 Griesheim e.V.</p>
    <div class="footer-legal">
      <a href="kontakt.html">Kontakt</a>
      <a href="impressum.html">Impressum</a>
      <a href="datenschutz.html">Datenschutz</a>
      <a href="links.html">Links</a>
    </div>
  </div>
</footer>`;

  function injectComponents() {
    const navWrapper = document.createElement('div');
    navWrapper.innerHTML = NAV_HTML;
    document.body.insertBefore(navWrapper.firstElementChild, document.body.firstChild);

    const footerWrapper = document.createElement('div');
    footerWrapper.innerHTML = FOOTER_HTML;
    document.body.appendChild(footerWrapper.firstElementChild);

    const currentPage = window.TVC_PAGE || 'home';
    document.querySelectorAll('.nav-item[data-page]').forEach(function (item) {
      if (item.dataset.page === currentPage) item.classList.add('active');
    });

    const toggle = document.getElementById('menuToggle');
    const nav    = document.getElementById('headerNav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.textContent = open ? '✕' : '☰';
      });
    }

    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth > 768) return;
        const item = this.closest('.nav-item');
        if (!item.querySelector('.dropdown')) return;
        e.preventDefault();
        item.classList.toggle('open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
  } else {
    injectComponents();
  }
})();
