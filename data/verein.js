/**
 * TVC88 GRIESHEIM — Vereinsdaten
 * ============================================================
 * Hier Vorstandsmitglieder und Vereinschronik pflegen.
 * Änderungen erscheinen automatisch auf den entsprechenden Seiten.
 * ============================================================
 */

/* ── VORSTAND ───────────────────────────────────────────────
 * Felder:
 *   funktion  – z.B. "1. Vorsitzender"
 *   name      – Vollständiger Name
 *   telefon   – optional, z.B. "06155 12345" oder null
 *   email     – optional oder null
 *   seit      – Jahr der Amtsübernahme
 *   bild      – Bildpfad oder null
 *   emoji     – Platzhalter-Symbol
 * ──────────────────────────────────────────────────────── */
window.TVC_VORSTAND = [
  {
    funktion: '1. Vorsitzender',
    name:     'Norbert Heydt',
    telefon:  '06155 830685',
    email:    'vorsitzender@tvc88.de',
    seit:     2024,
    bild:     null,
    emoji:    '👤'
  },
  {
    funktion: '2. Vorsitzender',
    name:     'NN',
    telefon:  null,
    email:    null,
    seit:     2020,
    bild:     null,
    emoji:    '👤'
  },
  {
    funktion: 'Schatzmeister',
    name:     'NN',
    telefon:  null,
    email:    'kasse@tvc88.de',
    seit:     2016,
    bild:     null,
    emoji:    '👤'
  },
  {
    funktion: 'Schriftführer',
    name:     'NN',
    telefon:  null,
    email:    null,
    seit:     2022,
    bild:     null,
    emoji:    '👤'
  },
  {
    funktion: 'Beisitzer',
    name:     'NN',
    telefon:  null,
    email:    null,
    seit:     2020,
    bild:     null,
    emoji:    '👤'
  },
  {
    funktion: 'Beisitzer',
    name:     'NN',
    telefon:  null,
    email:    null,
    seit:     2022,
    bild:     null,
    emoji:    '👤'
  }
];

/* ── VEREINSCHRONIK ─────────────────────────────────────────
 * Felder:
 *   jahr      – Jahreszahl
 *   titel     – Kurze Bezeichnung des Meilensteins
 *   text      – Beschreibungstext (1–3 Sätze)
 *   highlight – true = besonders hervorgehoben (Jubiläen etc.)
 * ──────────────────────────────────────────────────────── */
window.TVC_CHRONIK = [
  {
    jahr:      1988,
    titel:     'Gründung des TVC88',
    text:      'Am 14. März 1988 gründen zwölf Oldtimer-Enthusiasten aus Griesheim und Umgebung den Traktor Veteranen Club 88 Griesheim e.V. Erster Vorsitzender wird Georg Hartmann.',
    highlight: true
  },
  {
    jahr:      1990,
    titel:     'Erstes Oldtimertreffen',
    text:      'Das erste öffentliche Oldtimertreffen auf dem Festplatz Griesheim lockt über 200 Besucher an. 18 Fahrzeuge werden präsentiert.',
    highlight: false
  },
  {
    jahr:      1993,
    titel:     'Vereinssatzung überarbeitet',
    text:      'Die Satzung wird erweitert, um neben Traktoren auch Automobile und Zweiräder in den Vereinszweck aufzunehmen.',
    highlight: false
  },
  {
    jahr:      1996,
    titel:     'Stammtisch ins Leben gerufen',
    text:      'Auf Initiative mehrerer Mitglieder wird der monatliche Stammtisch eingeführt – zunächst im Gasthaus Zur Linde, später in verschiedenen Lokalitäten.',
    highlight: false
  },
  {
    jahr:      1998,
    titel:     '10-jähriges Jubiläum',
    text:      'Mit einem großen Festwochenende feiert der Verein sein zehnjähriges Bestehen. Über 40 Fahrzeuge und mehr als 500 Besucher machen das Jubiläumstreffen zum bislang größten Event.',
    highlight: true
  },
  {
    jahr:      2002,
    titel:     'Erste Ausfahrt in den Odenwald',
    text:      'Die traditionelle Herbstausfahrt durch den Odenwald wird erstmals durchgeführt und wird schnell zur beliebtesten Jahresveranstaltung des Clubs.',
    highlight: false
  },
  {
    jahr:      2005,
    titel:     'Website tvc88.de geht online',
    text:      'Der Verein bekommt seine erste eigene Website und ist damit im Internet präsent. Fotos der Treffen werden fortan auch digital zugänglich gemacht.',
    highlight: false
  },
  {
    jahr:      2008,
    titel:     '20-jähriges Jubiläum',
    text:      'Zum zwanzigsten Jubiläum wächst die Sammlung auf über 60 Fahrzeuge an. Die Galerie auf der Website wird gestartet.',
    highlight: true
  },
  {
    jahr:      2012,
    titel:     'Kooperation mit Landwirtschaftsmuseum',
    text:      'Der TVC88 schließt eine Kooperationsvereinbarung mit dem Landwirtschaftsmuseum Darmstadt-Eberstadt und beteiligt sich fortan an dortigen Ausstellungen.',
    highlight: false
  },
  {
    jahr:      2018,
    titel:     '30-jähriges Jubiläum',
    text:      'Dreißig Jahre TVC88: Mit inzwischen über 35 Mitgliedern und mehr als 80 Fahrzeugen ist der Verein so groß wie nie. Ein Festwochenende mit Fremdvereinen aus der Region zieht über 1.000 Besucher an.',
    highlight: true
  },
  {
    jahr:      2020,
    titel:     'Pause durch Corona',
    text:      'Die Pandemie macht öffentliche Treffen unmöglich. Der Stammtisch findet zeitweise online statt – die Gemeinschaft hält zusammen.',
    highlight: false
  },
  {
    jahr:      2022,
    titel:     'Neustart nach der Pandemie',
    text:      'Mit dem Sommertreffen 2022 meldet sich der TVC88 eindrucksvoll zurück. Neuer Stammtisch-Ort: Restaurant TuS in der Jahnstraße.',
    highlight: false
  },
  {
    jahr:      2025,
    titel:     'Neue Website und Relaunch',
    text:      'Die Vereinswebsite wird vollständig neu gestaltet – mit aktueller Terminübersicht, Galerie und moderner Fahrzeugpräsentation.',
    highlight: false
  }
];
