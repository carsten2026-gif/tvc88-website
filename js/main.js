/**
 * TVC88 GRIESHEIM — Haupt-JavaScript
 * Startseite: Termine und News dynamisch aus den Datendateien rendern
 * + Scroll-Animationen für alle Seiten
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Scroll-Reveal für alle .reveal-Elemente ─────────────── */
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ── Karten-Stagger beim Einblenden ─────────────────────── */
  const cardObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var cards = entry.target.querySelectorAll(
        '.termin-card, .news-card, .fz-card, .gal-item'
      );
      cards.forEach(function (card, i) {
        card.style.opacity       = '0';
        card.style.transform     = 'translateY(14px)';
        card.style.transition    = 'opacity .5s ' + (i * 0.08) + 's ease, transform .5s ' + (i * 0.08) + 's ease';
        setTimeout(function () {
          card.style.opacity   = '1';
          card.style.transform = 'none';
        }, 80 + i * 80);
      });
      cardObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(
    '.termine-grid, .news-grid, .fahrzeuge-grid, .galerie-grid'
  ).forEach(function (el) {
    cardObserver.observe(el);
  });

  /* ── Startseite: Galerie-Vorschau aus data/galerie.js ───── */
  /* Zeigt automatisch die neuesten Fotos (mit Bilddatei).
     Ohne Daten/Bilder bleibt die Platzhalter-Vorschau im HTML stehen. */
  var galGrid = document.querySelector('#galerie-preview .galerie-grid');
  if (galGrid && window.TVC_GALERIE) {
    var esc = function (s) {
      return String(s).replace(/[&<>"]/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
      });
    };
    var fotos = [];
    window.TVC_GALERIE.slice()
      .sort(function (a, b) { return new Date(b.datum) - new Date(a.datum); })
      .forEach(function (ev) {
        (ev.fotos || []).forEach(function (f) {
          if (f.datei) fotos.push({ f: f, ev: ev });
        });
      });
    if (fotos.length > 0) {
      var anzahl = fotos.length >= 8 ? 8 : Math.min(4, fotos.length); /* volle Reihen à 4 */
      galGrid.innerHTML = fotos.slice(0, anzahl).map(function (x, i) {
        return '<a class="gal-item g' + (i % 8 + 1) + '" href="galerie.html?jahr=' + x.ev.jahr + '">' +
          '<img src="' + esc(x.f.datei) + '" alt="' + esc(x.f.titel || x.ev.event) + '" loading="lazy">' +
          '<div class="gal-overlay">' + esc(x.ev.jahr) + '</div></a>';
      }).join('');
    }
  }

  /* ── Startseite: Fahrzeug-Kacheln mit Foto aus data/fahrzeuge.js ── */
  /* Zeigt je Kategorie das Foto des ERSTEN Fahrzeugs in der Liste.
     Hat das erste Fahrzeug kein Bild, wird das nächste mit Bild genommen.
     Ohne Bild bleibt das Emoji-Platzhalterbild stehen. */
  if (window.TVC_FAHRZEUGE) {
    document.querySelectorAll('.fz-card[data-kategorie]').forEach(function (card) {
      var kat   = window.TVC_FAHRZEUGE[card.getAttribute('data-kategorie')];
      var thumb = card.querySelector('.fz-thumb');
      if (!kat || !thumb || !kat.fahrzeuge) return;
      var fz = kat.fahrzeuge[0] && kat.fahrzeuge[0].bild
        ? kat.fahrzeuge[0]
        : kat.fahrzeuge.filter(function (f) { return f.bild; })[0];
      if (!fz) return;
      var img = document.createElement('img');
      img.src     = fz.bild;
      img.alt     = (fz.hersteller ? fz.hersteller + ' ' : '') + fz.name;
      img.loading = 'lazy';
      img.onerror = function () { img.remove(); };   /* Bild fehlt → Emoji bleibt */
      thumb.insertBefore(img, thumb.firstChild);
    });
  }

  /* ── Startseite: Termine rendern ─────────────────────────── */
  var termineContainer = document.getElementById('termine-grid');
  if (termineContainer && window.TVC_TERMINE) {
    var heute = new Date();
    heute.setHours(0, 0, 0, 0);

    // Nur zukünftige Termine, max. 4 Stück
    var kommende = window.TVC_TERMINE
      .filter(function (t) {
        return new Date(t.datum) >= heute;
      })
      .sort(function (a, b) {
        return new Date(a.datum) - new Date(b.datum);
      })
      .slice(0, 4);

    if (kommende.length === 0) {
      termineContainer.innerHTML =
        '<p style="color:var(--muted);font-size:14px">Aktuell sind keine Termine eingetragen.</p>';
    } else {
      termineContainer.innerHTML = kommende.map(function (t) {
        var d     = new Date(t.datum);
        var day   = d.getDate().toString().padStart(2, '0');
        var month = ['Jan','Feb','Mär','Apr','Mai','Jun',
                     'Jul','Aug','Sep','Okt','Nov','Dez'][d.getMonth()];
        var year  = d.getFullYear();

        var typeMap = {
          stammtisch: 'Stammtisch',
          treffen:    'Treffen',
          ausfahrt:   'Ausfahrt',
          sonstiges:  'Veranstaltung'
        };
        var tagLabel = typeMap[t.typ] || 'Veranstaltung';

        return `
<article class="termin-card">
  <div class="termin-date ${t.dateifarbe === 'gruen' ? 'gruen' : t.dateifarbe === 'gold' ? 'gold' : ''}">
    <div class="day">${day}</div>
    <div class="month">${month}</div>
    <div class="year">${year}</div>
  </div>
  <div class="termin-body">
    <span class="termin-tag ${t.typ === 'stammtisch' ? 'stammtisch' : ''}">${tagLabel}</span>
    <h4>${t.titel}</h4>
    ${t.uhrzeit ? `<div class="termin-meta">🕐 ${t.uhrzeit}</div>` : ''}
    <div class="termin-meta">📍 ${t.ort}</div>
    ${t.details ? `<div class="termin-meta" style="font-size:11px;margin-top:2px;font-style:italic">${t.details}</div>` : ''}
    <div class="termin-link"><a href="aktuelles-termine.html">Details →</a></div>
  </div>
</article>`;
      }).join('');
    }
  }

  /* ── Startseite: News rendern ────────────────────────────── */
  var newsContainer = document.getElementById('news-grid');
  if (newsContainer && window.TVC_NEWS) {
    // Neueste 3 Einträge (nach Datum sortiert, neueste zuerst)
    var sorted = window.TVC_NEWS
      .slice()
      .sort(function (a, b) { return new Date(b.datum) - new Date(a.datum); })
      .slice(0, 3);

    newsContainer.innerHTML = sorted.map(function (n, index) {
      var d    = new Date(n.datum);
      var dateStr = d.getDate() + '. ' +
        ['Januar','Februar','März','April','Mai','Juni',
         'Juli','August','September','Oktober','November','Dezember'][d.getMonth()] +
        ' ' + d.getFullYear();

      var isFeatured = index === 0;
      var colorClass = 'news-thumb-color-' + (n.farbe || 1);

      return `
<article class="news-card ${isFeatured ? 'featured' : ''}">
  <div class="news-thumb ${colorClass}">
    ${n.bild
      ? `<img src="${n.bild}" alt="${n.titel}" loading="lazy">`
      : `<span class="news-thumb-placeholder">${n.emoji || '📰'}</span>`}
    ${isFeatured ? '<span class="featured-badge">Aktuell</span>' : ''}
  </div>
  <div class="news-body">
    <div class="news-meta">
      <span class="news-cat">${n.kategorie}</span> · ${dateStr}
    </div>
    <h3>${n.titel}</h3>
    <p>${n.teaser}</p>
    <a class="news-mehr" href="aktuelles-news.html">Weiterlesen →</a>
  </div>
</article>`;
    }).join('');
  }

});
