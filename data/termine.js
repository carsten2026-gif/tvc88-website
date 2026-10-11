/**
 * TVC88 GRIESHEIM — Termine & Veranstaltungen
 * ============================================================
 * ANLEITUNG FÜR DIE PFLEGE:
 * Vergangene Termine NICHT löschen – einfach neue oben eintragen.
 * Die Website zeigt automatisch nur zukünftige Termine an.
 *
 * Felder:
 *   id       – eindeutige Nummer (hochzählen)
 *   datum    – Format: "YYYY-MM-DD"
 *   uhrzeit  – z.B. "19:00 Uhr" oder null
 *   typ      – "stammtisch" | "treffen" | "ausfahrt" | "sonstiges"
 *   titel    – Name der Veranstaltung
 *   ort      – Veranstaltungsort
 *   details  – Zusatzinfos oder null
 *   dateifarbe – Farbe der Datumskarte: "rot" | "gruen" | "gold"
 * ============================================================
 */

window.TVC_TERMINE = [

  {
    id: 101,
    datum: "2025-06-06",
    uhrzeit: "19:00 Uhr",
    typ: "stammtisch",
    titel: "Monatlicher Stammtisch",
    ort: "Restaurant TuS · Jahnstraße 20 · Griesheim",
    details: "Gäste herzlich willkommen!",
    dateifarbe: "rot"
  },

  {
    id: 102,
    datum: "2025-06-22",
    uhrzeit: "10:00 Uhr",
    typ: "treffen",
    titel: "Oldtimertreffen Darmstadt-Eberstadt",
    ort: "Festplatz Eberstadt, Darmstadt",
    details: "Anmeldung bis 15. Juni beim Vorstand",
    dateifarbe: "gruen"
  },

  {
    id: 103,
    datum: "2025-07-04",
    uhrzeit: "19:00 Uhr",
    typ: "stammtisch",
    titel: "Monatlicher Stammtisch",
    ort: "Restaurant TuS · Jahnstraße 20 · Griesheim",
    details: null,
    dateifarbe: "rot"
  },

  {
    id: 104,
    datum: "2025-07-19",
    uhrzeit: "09:00 Uhr",
    typ: "ausfahrt",
    titel: "Sommertreffen & Schaufahrt Griesheim",
    ort: "Vereinsgelände TVC88, Griesheim",
    details: "Mit Bewirtung und Publikumsführungen. Aufbau ab 8:00 Uhr.",
    dateifarbe: "gold"
  },

  {
    id: 105,
    datum: "2025-08-01",
    uhrzeit: "19:00 Uhr",
    typ: "stammtisch",
    titel: "Monatlicher Stammtisch",
    ort: "Restaurant TuS · Jahnstraße 20 · Griesheim",
    details: null,
    dateifarbe: "rot"
  },

  {
    id: 106,
    datum: "2025-09-05",
    uhrzeit: "19:00 Uhr",
    typ: "stammtisch",
    titel: "Monatlicher Stammtisch",
    ort: "Restaurant TuS · Jahnstraße 20 · Griesheim",
    details: null,
    dateifarbe: "rot"
  },

  {
    id: 107,
    datum: "2025-09-20",
    uhrzeit: "10:00 Uhr",
    typ: "treffen",
    titel: "Herbstausfahrt 2025",
    ort: "Start: Vereinsgelände Griesheim",
    details: "Route durch den Odenwald. Details folgen.",
    dateifarbe: "gruen"
  },

  {
    id: 108,
    datum: "2025-10-03",
    uhrzeit: "19:00 Uhr",
    typ: "stammtisch",
    titel: "Monatlicher Stammtisch",
    ort: "Restaurant TuS · Jahnstraße 20 · Griesheim",
    details: null,
    dateifarbe: "rot"
  },

  {
    id: 109,
    datum: "2026-10-11",
    uhrzeit: "13:30 Uhr",
    typ: "ausfahrt",
    titel: "419. Goller Kerb · Kerbeumzug",
    ort: "Goddelau",
    details: null,
    dateifarbe: "gruen"
  },

  {
    id: 110,
    datum: "2026-11-06",
    uhrzeit: "19:00 Uhr",
    typ: "stammtisch",
    titel: "Monatlicher Stammtisch",
    ort: "Restaurant TuS · Jahnstraße 20 · Griesheim",
    details: null,
    dateifarbe: "rot"
  }

];
