/**
 * TVC88 GRIESHEIM — Galerie-Daten
 * ============================================================
 * ANLEITUNG FÜR DIE PFLEGE:
 *
 * 1. Fotos in den Ordner img/galerie/JAHR/ legen
 *    z.B. img/galerie/2025/fruehjahrstreffen-01.jpg
 *
 * 2. Hier einen neuen Eintrag ergänzen (neueste Events oben)
 *
 * Felder je Event:
 *   id     – eindeutige Nummer (hochzählen)
 *   jahr   – Jahreszahl
 *   event  – Name der Veranstaltung
 *   datum  – "YYYY-MM-DD"
 *   fotos  – Array der Bilder (s. unten)
 *
 * Felder je Foto:
 *   id     – eindeutige Nummer innerhalb des Events
 *   datei  – Pfad: "img/galerie/2025/bild.jpg" oder null
 *   titel  – Bildbeschreibung (erscheint im Lightbox)
 *   farbe  – Platzhalterfarbe 1–8 (wenn kein Bild)
 *   emoji  – Platzhaltersymbol (wenn kein Bild)
 * ============================================================
 */

window.TVC_GALERIE = [
  /* ── 2026 ──────────────────────────────────────────────── */
  {
    id: 27,
    jahr: 2026,
    event: 'Gartenfest Fa. Appel 2026',
    datum: '2026-09-19',
    fotos: [
      { id: 1, datei: "data/img/galerie/2026/260919-appel-002.jpeg", titel: 'Gartenfest Gärtnerei Appel 2026', farbe: 1, emoji: '🚜' }
    ]
  },
  {
    id: 26,
    jahr: 2026,
    event: 'Kerbeumzug Pfungstadt 2026',
    datum: '2026-09-12',
    fotos: [
      { id: 1, datei: "data/img/galerie/2026/260912-pfungstadt-002.jpeg", titel: 'Kerbeumzug Pfungstadt 2026', farbe: 2, emoji: '🚜' }
    ]
  },
  {
    id: 25,
    jahr: 2026,
    event: 'Kerbeumzug Griesheim 2026',
    datum: '2026-08-30',
    fotos: [
      { id: 1, datei: "data/img/galerie/2026/260903-bernd.jpeg", titel: 'Bernd Fahr beim Umzug',        farbe: 1, emoji: '🚜' },
      { id: 2, datei: "data/img/galerie/2026/260903-hans.jpeg", titel: 'Hans beim Umzug',   farbe: 2, emoji: '🚜' },
      { id: 3, datei: "data/img/galerie/2026/260903-norbert.jpeg", titel: 'Norbert beim Umzug',             farbe: 3, emoji: '⚙️' },
      { id: 4, datei: "data/img/galerie/2026/260903-manfred.jpeg", titel: 'Manfred beim Umzug',           farbe: 4, emoji: '🔧' },
      { id: 5, datei: "data/img/galerie/2026/260903-wolfgang.jpeg", titel: 'Wolfgang beim Umzug',           farbe: 5, emoji: '👥' },
      { id: 6, datei: "data/img/galerie/2026/260903-peter.jpeg", titel: 'Peter beim Umzug',     farbe: 6, emoji: '🌾' },
      { id: 7, datei: "data/img/galerie/2026/260830-griesheim-001.jpeg", titel: 'Kerbeumzug Griesheim 2026', farbe: 7, emoji: '🚜' },
      { id: 8, datei: "data/img/galerie/2026/260830-griesheim-002.jpeg", titel: 'Kerbeumzug Griesheim 2026', farbe: 8, emoji: '🚜' },
      { id: 9, datei: "data/img/galerie/2026/260830-griesheim-003.jpeg", titel: 'Kerbeumzug Griesheim 2026', farbe: 1, emoji: '🚜' },
      { id: 10, datei: "data/img/galerie/2026/260903-dany.jpeg", titel: 'Dany beim Umzug', farbe: 2, emoji: '🚜' },
      { id: 11, datei: "data/img/galerie/2026/260903-matthias.jpeg", titel: 'Matthias beim Umzug', farbe: 3, emoji: '🚜' },
      { id: 12, datei: "data/img/galerie/2026/260903-paul.jpeg", titel: 'Paul beim Umzug', farbe: 4, emoji: '🚜' },
      { id: 13, datei: "data/img/galerie/2026/260903-timo.jpeg", titel: 'Timo beim Umzug', farbe: 5, emoji: '🚜' }
    ]
  },
  {
    id: 24,
    jahr: 2026,
    event: 'Kerbeumzug Eberstadt 2026',
    datum: '2026-08-10',
    fotos: [
      { id: 1, datei: "data/img/galerie/2026/260810-eberstadt-001.jpeg", titel: 'Eberstadt 2026 - 1',    farbe: 7, emoji: '🍺' },
    ]
  },
  {
    id: 23,
    jahr: 2026,
    event: 'Blütenfest Fa. Appel 2026',
    datum: '2026-06-13',
    fotos: [
      { id: 1, datei: "data/img/galerie/2026/20260613-appel-01.jpg", titel: 'Blütenfest 2026 - 1',    farbe: 7, emoji: '🚜' },
      { id: 1, datei: "data/img/galerie/2026/20260613-appel-02.jpg", titel: 'Blütenfest 2026 - 2',    farbe: 7, emoji: '🚜' },
      { id: 1, datei: "data/img/galerie/2026/20260613-appel-03.jpg", titel: 'Blütenfest 2026 - 3',    farbe: 7, emoji: '🚜' },
      { id: 1, datei: "data/img/galerie/2026/20260613-appel-04.jpg", titel: 'Blütenfest 2026 - 4',    farbe: 7, emoji: '🚜' },
      { id: 1, datei: "data/img/galerie/2026/20260613-appel-05.jpg", titel: 'Blütenfest 2026 - 5',    farbe: 7, emoji: '🚜' }
    ]
  },

  /* ── 2025 ──────────────────────────────────────────────── */
  {
    id: 22,
    jahr: 2025,
    event: 'Frühjahrstreffen 2025',
    datum: '2025-05-10',
    fotos: [
      { id: 1, datei: null, titel: 'Lanz Bulldog beim Einzug',        farbe: 1, emoji: '🚜' },
      { id: 2, datei: null, titel: 'Fendt Dieselross auf dem Platz',   farbe: 2, emoji: '🚜' },
      { id: 3, datei: null, titel: 'Einachser-Vorführung',             farbe: 3, emoji: '⚙️' },
      { id: 4, datei: null, titel: 'Deutz F1L514 im Detail',           farbe: 4, emoji: '🔧' },
      { id: 5, datei: null, titel: 'Publikum bei der Schau',           farbe: 5, emoji: '👥' },
      { id: 6, datei: null, titel: 'Gesamtansicht Vereinsgelände',     farbe: 6, emoji: '🌾' }
    ]
  },
  {
    id: 21,
    jahr: 2025,
    event: 'Stammtisch Februar 2025',
    datum: '2025-02-07',
    fotos: [
      { id: 1, datei: null, titel: 'Stammtisch im Restaurant TuS',    farbe: 7, emoji: '🍺' },
      { id: 2, datei: null, titel: 'Vereinsmitglieder im Gespräch',   farbe: 8, emoji: '🤝' }
    ]
  },

  /* ── 2024 ──────────────────────────────────────────────── */
  {
    id: 20,
    jahr: 2024,
    event: 'Herbstausfahrt 2024',
    datum: '2024-09-21',
    fotos: [
      { id: 1, datei: null, titel: 'Start der Ausfahrt in Griesheim',  farbe: 2, emoji: '🚜' },
      { id: 2, datei: null, titel: 'Kolonne durch den Odenwald',       farbe: 3, emoji: '🍂' },
      { id: 3, datei: null, titel: 'Rast in Reichelsheim',             farbe: 4, emoji: '☕' },
      { id: 4, datei: null, titel: 'Zündapp KS 601 auf der Route',     farbe: 5, emoji: '🏍️' },
      { id: 5, datei: null, titel: 'Gruppenphoto am Ziel',             farbe: 6, emoji: '📷' }
    ]
  },
  {
    id: 19,
    jahr: 2024,
    event: 'Sommertreffen 2024',
    datum: '2024-07-13',
    fotos: [
      { id: 1, datei: null, titel: 'Aufbau am frühen Morgen',          farbe: 1, emoji: '🌅' },
      { id: 2, datei: null, titel: 'VW Käfer 1200 in Perlweiß',        farbe: 7, emoji: '🚗' },
      { id: 3, datei: null, titel: 'Porsche Junior 108 im Sonnenlicht', farbe: 8, emoji: '🚜' },
      { id: 4, datei: null, titel: 'Besucher am Einachser-Stand',      farbe: 2, emoji: '👀' }
    ]
  },

  /* ── 2023 ──────────────────────────────────────────────── */
  {
    id: 18,
    jahr: 2023,
    event: 'Oldtimertreffen Eberstadt 2023',
    datum: '2023-06-17',
    fotos: [
      { id: 1, datei: null, titel: 'Anfahrt zum Festplatz',            farbe: 3, emoji: '🚜' },
      { id: 2, datei: null, titel: 'Hanomag R 16 im Sonnenschein',     farbe: 4, emoji: '🚜' },
      { id: 3, datei: null, titel: 'NSU Max auf dem Ausstellungsplatz', farbe: 5, emoji: '🏍️' },
      { id: 4, datei: null, titel: 'Kinder beim Traktor bestaunen',    farbe: 6, emoji: '👦' },
      { id: 5, datei: null, titel: 'Abschluss-Korso durch Eberstadt',  farbe: 1, emoji: '🎉' },
      { id: 6, datei: null, titel: 'Vereinsmitglieder nach dem Event', farbe: 2, emoji: '🤝' }
    ]
  },
  {
    id: 17,
    jahr: 2023,
    event: 'Herbstausfahrt 2023',
    datum: '2023-10-07',
    fotos: [
      { id: 1, datei: null, titel: 'Herbststimmung auf den Feldern',   farbe: 7, emoji: '🍂' },
      { id: 2, datei: null, titel: 'Kolonne bei Ober-Ramstadt',        farbe: 8, emoji: '🚜' },
      { id: 3, datei: null, titel: 'Eicher Tiger in herbstlicher Natur', farbe: 3, emoji: '🌳' }
    ]
  },

  /* ── 2022 ──────────────────────────────────────────────── */
  {
    id: 16,
    jahr: 2022,
    event: 'Neustart-Treffen nach Corona 2022',
    datum: '2022-08-06',
    fotos: [
      { id: 1, datei: null, titel: 'Wiedersehen nach langer Pause',   farbe: 1, emoji: '🎉' },
      { id: 2, datei: null, titel: 'Lanz Bulldog nach Restaurierung',  farbe: 2, emoji: '🚜' },
      { id: 3, datei: null, titel: 'Simson Schwalbe im Rampenlicht',   farbe: 5, emoji: '🏍️' },
      { id: 4, datei: null, titel: 'Stimmungsvoller Abend',            farbe: 6, emoji: '🌇' }
    ]
  },
  {
    id: 15,
    jahr: 2022,
    event: 'Einachser-Vorführung 2022',
    datum: '2022-06-11',
    fotos: [
      { id: 1, datei: null, titel: 'Holder A10 in Aktion',             farbe: 3, emoji: '⚙️' },
      { id: 2, datei: null, titel: 'Reform Mäher auf dem Hang',        farbe: 4, emoji: '⚙️' },
      { id: 3, datei: null, titel: 'Rapid 505 Vorführung',             farbe: 7, emoji: '⚙️' }
    ]
  },

  /* ── ARCHIV 2008–2021 (nur Jahres-Platzhalter) ─────────── */
  { id: 14, jahr: 2021, event: 'Treffen 2021',          datum: '2021-08-01', fotos: [] },
  { id: 13, jahr: 2020, event: 'Archiv 2020',           datum: '2020-01-01', fotos: [] },
  { id: 12, jahr: 2019, event: 'Treffen 2019',          datum: '2019-07-01', fotos: [] },
  { id: 11, jahr: 2018, event: '30-Jahres-Jubiläum',   datum: '2018-07-01', fotos: [] },
  { id: 10, jahr: 2017, event: 'Treffen 2017',          datum: '2017-07-01', fotos: [] },
  { id: 9, jahr: 2016, event: 'Treffen 2016',          datum: '2016-07-01', fotos: [] },
  { id: 8, jahr: 2015, event: 'Treffen 2015',          datum: '2015-07-01', fotos: [] },
  { id: 7, jahr: 2014, event: 'Treffen 2014',          datum: '2014-07-01', fotos: [] },
  { id: 6, jahr: 2013, event: 'Treffen 2013',          datum: '2013-07-01', fotos: [] },
  { id: 5, jahr: 2012, event: 'Treffen 2012',          datum: '2012-07-01', fotos: [] },
  { id: 4, jahr: 2011, event: 'Treffen 2011',          datum: '2011-07-01', fotos: [] },
  { id: 3, jahr: 2010, event: 'Treffen 2010',          datum: '2010-07-01', fotos: [] },
  { id: 2, jahr: 2009, event: 'Treffen 2009',          datum: '2009-07-01', fotos: [] },
  { id: 1, jahr: 2008, event: 'Treffen 2008',          datum: '2008-07-01', fotos: [] }
];
