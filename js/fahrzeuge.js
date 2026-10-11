/**
 * TVC88 GRIESHEIM — Fahrzeug-Seiten Script
 * Wird von allen vier Fahrzeug-Seiten eingebunden.
 * Die jeweilige Seite setzt vorab:
 *   const TVC_FAHRZEUG_TYP = 'traktoren'; // oder einachser | automobile | zweiraeder
 */
 
document.addEventListener('DOMContentLoaded', function () {
 
  /* ── Scroll-Reveal ─────────────────────────────────────── */
  var ro = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(function (el) { ro.observe(el); });
 
  /* ── Daten holen ─────────────────────────────────────── */
  // const-Variablen landen nicht auf window → direkt abfragen
  var typ = (typeof TVC_FAHRZEUG_TYP !== 'undefined') ? TVC_FAHRZEUG_TYP : window.TVC_FAHRZEUG_TYP;
  if (!window.TVC_FAHRZEUGE || !typ) return;
  var kat = window.TVC_FAHRZEUGE[typ];
  if (!kat) return;
 
  /* ── Farbpaletten für Platzhalter ────────────────────── */
  var FARBEN = [
    'linear-gradient(135deg,#3d5a3e,#5c7c40)',
    'linear-gradient(135deg,#7a4420,#c9922a)',
    'linear-gradient(135deg,#2a3d4a,#4a6575)',
    'linear-gradient(135deg,#4a3a20,#7a5c35)',
    'linear-gradient(135deg,#3d4a60,#5c6a8a)',
    'linear-gradient(135deg,#4a3060,#7a4a8a)'
  ];
 
  function thumbBg(f) {
    return FARBEN[(f.farbe || 1) - 1];
  }
 
  /* ── Intro-Text ──────────────────────────────────────── */
  var introEl = document.getElementById('fz-intro');
  if (introEl) {
    introEl.textContent = kat.intro;
  }
 
  /* ── Gesamtzahl eintragen ────────────────────────────── */
  var countEl = document.getElementById('fz-count');
  if (countEl) {
    countEl.textContent = kat.fahrzeuge.length + ' Fahrzeuge';
  }
 
  /* ── Highlight-Fahrzeug (Featured) ──────────────────── */
  var featEl = document.getElementById('fz-featured');
  var highlighted = kat.fahrzeuge.filter(function (f) { return f.highlight; })[0]
                 || kat.fahrzeuge[0];
 
  if (featEl && highlighted) {
    featEl.innerHTML = `
<div class="fz-featured-thumb" style="background:${thumbBg(highlighted)}">
  ${highlighted.bild
      ? `<img src="${highlighted.bild}" alt="${highlighted.name}" loading="lazy">`
      : `<span class="fz-ph">${highlighted.emoji || kat.emoji}</span>`}
  <span class="fz-feat-badge">Highlight</span>
</div>
<div class="fz-featured-body">
  <span class="section-label">${kat.label} · Baujahr ${highlighted.baujahr}</span>
  <h2>${highlighted.hersteller} ${highlighted.name}</h2>
  <div class="fz-meta">
    <span>📅 ${highlighted.baujahr}</span>
    <span>👤 ${highlighted.besitzer}</span>
  </div>
  <p>${highlighted.beschreibung}</p>
</div>`;
  }
 
  /* ── Fahrzeug-Grid ───────────────────────────────────── */
  var gridEl = document.getElementById('fz-grid');
  if (!gridEl) return;
 
  // Alle Fahrzeuge außer dem Highlight
  var rest = kat.fahrzeuge.filter(function (f) {
    return !highlighted || f.id !== highlighted.id;
  });
 
  if (rest.length === 0) {
    gridEl.innerHTML = `
<p style="color:var(--muted);font-size:14px;grid-column:1/-1">
  Weitere Fahrzeuge werden bald ergänzt.
</p>`;
    return;
  }
 
  gridEl.innerHTML = rest.map(function (f) {
    return `
<article class="fz-grid-card">
  <div class="fz-grid-thumb" style="background:${thumbBg(f)}">
    ${f.bild
      ? `<img src="${f.bild}" alt="${f.name}" loading="lazy">`
      : `<span class="fz-ph">${f.emoji || kat.emoji}</span>`}
    <span class="fz-yr-badge">${f.baujahr}</span>
  </div>
  <div class="fz-grid-body">
    <div class="fz-hersteller">${f.hersteller}</div>
    <h3>${f.name}</h3>
    <div class="fz-meta">
      <span>👤 ${f.besitzer}</span>
    </div>
    <p>${f.beschreibung}</p>
  </div>
</article>`;
  }).join('');
 
  /* Karten staggered einblenden */
  var cards = gridEl.querySelectorAll('.fz-grid-card');
  var co = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var i = Array.from(cards).indexOf(entry.target);
      setTimeout(function () {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'none';
      }, i * 80);
      co.unobserve(entry.target);
    });
  }, { threshold: 0.06 });
 
  cards.forEach(function (c) {
    c.style.opacity    = '0';
    c.style.transform  = 'translateY(14px)';
    c.style.transition = 'opacity .5s ease, transform .5s ease';
    co.observe(c);
  });
 
});
 