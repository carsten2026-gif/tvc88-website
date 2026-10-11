/**
 * TVC88 GRIESHEIM — Fahrzeug-Daten
 * ============================================================
 * ANLEITUNG FÜR DIE PFLEGE:
 * Neues Fahrzeug in die passende Kategorie eintragen.
 * Die Seite zeigt es automatisch an.
 *
 * Felder:
 *   id          – eindeutige Nummer (je Kategorie durchzählen)
 *   name        – Modellname / Typbezeichnung
 *   hersteller  – z.B. "Lanz", "Fendt", "VW"
 *   baujahr     – Zahl, z.B. 1958
 *   besitzer    – Vorname + Nachname-Anfang, z.B. "Karl-Heinz M."
 *   beschreibung – kurzer Beschreibungstext (1–3 Sätze)
 *   bild        – Bildpfad z.B. "img/fahrzeuge/lanz-bulldog.jpg"
 *                 oder null wenn kein Bild
 *   farbe       – Platzhalterfarbe 1–6 (wenn kein Bild)
 *   emoji       – Symbol wenn kein Bild vorhanden
 *   highlight   – true = wird oben hervorgehoben
 * ============================================================
 */
 
window.TVC_FAHRZEUGE = {
 
  /* ══════════════════════════════════════════════════════════
     TRAKTOREN
  ══════════════════════════════════════════════════════════ */
  traktoren: {
    label:      'Traktoren',
    emoji:      '🚜',
    farbe:      'forest',
    intro: `Traktoren bilden das Herzstück unserer Sammlung. Vom legendären Lanz Bulldog
            bis zum frühen Fendt Dieselross spiegeln unsere Fahrzeuge die Geschichte
            der deutschen Landtechnik vom Vorkriegsbulldog bis in die 1970er Jahre wider.`,
    fahrzeuge: [
      {
        id: 1,
        name:         'Puma ES 201',
        hersteller:   'Eicher',
        baujahr:      1965,
        besitzer:     'Klaus Ö.',
        beschreibung: '2 Zylinder Motor, luftgekühlt. '
                    + 'Leistung 28 PS',
        bild: "data/img/fahrzeuge/261008-puma-01.jpeg", farbe: 1, emoji: '🚜', highlight: true
      },
      {
        id: 2,
        name:         'Tiger EM 200 L',
        hersteller:   'Eicher',
        baujahr:      1968,
        besitzer:     'Klaus Ö.',
        beschreibung: '2 Zylinder Motor, luftgekühlt. '
                    + 'Leistung 27 PS und 20 km/h Höchstgeschwindigkeit.',
        bild: "data/img/fahrzeuge/261008-tiger-01.jpeg", farbe: 1, emoji: '🚜', highlight: false
      },
      {
        id: 3,
        name:         'Tiger EM 200',
        hersteller:   'Eicher',
        baujahr:      1962,
        besitzer:     'Carsten H.',
        beschreibung: 'Ein unrestaurierter Arbeitstraktor der im Westerwald '
                    + 'zuletzt mehrere Jahre für jagdliche Zwecke genutzt wurde.',
        bild: "data/img/fahrzeuge/260919-eicher-ch-01.jpg", farbe: 1, emoji: '🚜', highlight: false
      },
      {
        id: 4,
        name:         'Hanomag R 16',
        hersteller:   'Hanomag',
        baujahr:      1958,
        besitzer:     'Friedhelm K.',
        beschreibung: 'Der R 16 war einer der erfolgreichsten Hanomag-Schlepper. '
                    + 'Dieses Exemplar ist komplett fahrbereit und regelmäßig bei Ausfahrten dabei.',
        bild:   null, farbe: 4, emoji: '🚜', highlight: false
      },
      {
        id: 5,
        name:         'Porsche Junior 108',
        hersteller:   'Porsche-Diesel',
        baujahr:      1961,
        besitzer:     'Günter L.',
        beschreibung: 'Seltenes Exemplar des Porsche-Diesel Junior aus der letzten '
                    + 'Produktionsphase. Luftgekühlter Einzylinder, 14 PS.',
        bild:   null, farbe: 5, emoji: '🚜', highlight: false
      },
      {
        id: 6,
        name:         'Eicher Tiger EM 300',
        hersteller:   'Eicher',
        baujahr:      1965,
        besitzer:     'Rudolf W.',
        beschreibung: 'Charakteristischer Eicher Tiger mit dem markanten grünen Lack. '
                    + 'Vollständig restauriert, läuft einwandfrei.',
        bild:   null, farbe: 6, emoji: '🚜', highlight: false
      }
    ]
  },
 
  /* ══════════════════════════════════════════════════════════
     EINACHSER
  ══════════════════════════════════════════════════════════ */
  einachser: {
    label:      'Einachser',
    emoji:      '⚙️',
    farbe:      'rust',
    intro: `Einachser – auch Motormäher oder Zweiradschlepper genannt – waren das
            Arbeitstier auf kleineren Höfen und steilem Gelände. Unsere Sammlung
            zeigt die Vielfalt dieser kompakten Maschinen aus den 1950er bis 1980er Jahren.`,
    fahrzeuge: [
      {
        id: 1,
        name:         'Agriette 1',
        hersteller:   'Agria',
        baujahr:      1960,
        besitzer:     'Klaus Ö.',
        beschreibung: 'Mit Original Anhänger, Motor von NSU (Quickly), '
                    + 'Zweitaktmotor Leistung 2,6 PS und 50 ccm Hubraum.',
        bild: "data/img/fahrzeuge/261008-agria-01.jpeg", farbe: 1, emoji: '⚙️', highlight: true
      },
      {
        id: 2,
        name:         'Agria 1800D',
        hersteller:   'Agria',
        baujahr:      1956,
        besitzer:     'Klaus Ö.',
        beschreibung: 'Hirth Dieselmotor, luftgekühlt, '
                    + 'Zweitaktmotor Leistung 7 PS und Vmax ca. 11 km/h. ',
        bild: "data/img/fahrzeuge/261009-agria1800.jpeg", farbe: 2, emoji: '⚙️', highlight: false
      },
      {
        id: 3,
        name:         'Hakotrac T8',
        hersteller:   'Hako',
        baujahr:      1962,
        besitzer:     'Klaus Ö.',
        beschreibung: 'Motor Ilo L252, 247 ccm luftgekühlt, Gewicht ca. 230 kg, '
                    + 'Einzylinder Zweitaktmotor, 8 PS und Vmax ca. 15 km/h. ',
        bild: "data/img/fahrzeuge/261009-hakotrac.jpeg", farbe: 3, emoji: '⚙️', highlight: false
      },
      {
        id: 4,
        name:         'Agria 400',
        hersteller:   'Agria',
        baujahr:      1971,
        besitzer:     'Erwin T.',
        beschreibung: 'Klassischer Agria-Einachser mit Zapfwelle und Mähwerk. '
                    + 'Im Originalzustand, regelmäßig gewartet.',
        bild:   null, farbe: 4, emoji: '⚙️', highlight: false
      },
      {
        id: 5,
        name:         'BCS 620',
        hersteller:   'BCS',
        baujahr:      1978,
        besitzer:     'Harald N.',
        beschreibung: 'Italienischer BCS-Einachser, in Deutschland sehr verbreitet. '
                    + 'Mit Rotations-Mähwerk und Zapfwelle.',
        bild:   null, farbe: 5, emoji: '⚙️', highlight: false
      }
    ]
  },
 
  /* ══════════════════════════════════════════════════════════
     AUTOMOBILE
  ══════════════════════════════════════════════════════════ */
  automobile: {
    label:      'Automobile',
    emoji:      '🚗',
    farbe:      'gold',
    intro: `Neben Traktoren und Landmaschinen pflegen unsere Mitglieder eine Reihe
            klassischer Automobile. Vom Käfer bis zum Opel Rekord – diese Fahrzeuge
            erzählen die Geschichte der deutschen Automobilgeschichte der Nachkriegszeit.`,
    fahrzeuge: [
      {
        id: 1,
        name:         '220 S',
        hersteller:   'Mercedes Benz',
        baujahr:      1956,
        besitzer:     'Carsten H.',
        beschreibung: 'Erstzugelassener Direktionswagen der Binding Brauerei Frankfurt. '
                    + 'Mit Faltdach und Hydrak Kupplung unrestaurierter Originalzustand.',
        bild: "data/img/fahrzeuge/260403-ponton-002.jpeg", farbe: 5, emoji: '🚗', highlight: false
      },
      {
        id: 2,
        name:         'Opel Rekord A',
        hersteller:   'Opel',
        baujahr:      1963,
        besitzer:     'Franz-Josef B.',
        beschreibung: 'Der Opel Rekord A war in den 1960ern eines der meistgekauften '
                    + 'deutschen Autos. Dieses Exemplar ist im Originalzustand erhalten.',
        bild:   null, farbe: 2, emoji: '🚗', highlight: false
      },
      {
        id: 3,
        name:         'Ford Taunus 12M',
        hersteller:   'Ford',
        baujahr:      1962,
        besitzer:     'Siegfried O.',
        beschreibung: 'Der "Badewannentaunus" in charakteristischer zwei-farbiger Lackierung. '
                    + 'Vollständig restauriert, alle Chromteile aufgearbeitet.',
        bild:   null, farbe: 3, emoji: '🚗', highlight: false
      },
      {
        id: 4,
        name:         'Mercedes-Benz 180',
        hersteller:   'Mercedes-Benz',
        baujahr:      1959,
        besitzer:     'Peter D.',
        beschreibung: 'Erster Ponton-Mercedes mit dem klassischen Heckflossen-Design. '
                    + 'Fahrbereit, im gepflegten Originalzustand.',
        bild:   null, farbe: 4, emoji: '🚗', highlight: false
      }
    ]
  },
 
  /* ══════════════════════════════════════════════════════════
     ZWEIRÄDER
  ══════════════════════════════════════════════════════════ */
  zweiraeder: {
    label:      'Zweiräder',
    emoji:      '🏍️',
    farbe:      'muted',
    intro: `Motorräder, Mopeds und Fahrräder mit Hilfsmotor ergänzen unsere Sammlung
            um ein weiteres Kapitel der Mobilitätsgeschichte. Viele dieser Zweiräder
            waren in der Nachkriegszeit das einzige Fortbewegungsmittel vieler Familien.`,
    fahrzeuge: [
      {
        id: 1,
        name:         'Quickly S',
        hersteller:   'NSU',
        baujahr:      1969,
        besitzer:     'Klaus Ö.',
        beschreibung: '3 Gang Schaltung, Vmax. 50 km/h, '
                    + 'Leistung 1,4 PS und 50 ccm Hubraum.',
        bild: "data/img/fahrzeuge/261008-nsu-01.jpeg", emoji: '🏍️', highlight: true
      },
      {
        id: 2,
        name:         'Quick',
        hersteller:   'NSU',
        baujahr:      1953,
        besitzer:     'Klaus Ö.',
        beschreibung: 'Vmax. 45 km/h mit Glück und Rückenwind, '
                    + 'Leistung 3 PS Zweitaktmotor und 98 ccm Hubraum.',
        bild: "data/img/fahrzeuge/261008-quick-01.jpeg", emoji: '🏍️', highlight: false
      },
      {
        id: 3,
        name:         'NSU Max Standard',
        hersteller:   'NSU',
        baujahr:      1953,
        besitzer:     'Klaus Ö.',
        beschreibung: 'Gespann mit Beiwagen Steib LS 200, Vmax 110 km/h, '
                    + '4-Takt-Motor, 250 ccm und 17 PS. ',
        bild: "data/img/fahrzeuge/261009-nsugespann.jpeg", farbe: 3, emoji: '🏍️', highlight: false
      },
      {
        id: 4,
        name:         'NSU Max Spezial',
        hersteller:   'NSU',
        baujahr:      1954,
        besitzer:     'Klaus Ö.',
        beschreibung: '1-Zylinder 4-Takt luftgekühlt, Vmax 120 km/h, '
                    + '250 ccm und 17 PS. ',
        bild: "data/img/fahrzeuge/261009-nsumax.jpeg", farbe: 4, emoji: '🏍️', highlight: false
      },
      {
        id: 5,
        name:         'XL 600 RM',
        hersteller:   'Honda',
        baujahr:      1987,
        besitzer:     'Klaus Ö.',
        beschreibung: '1-Zylinder 4-Takt luftgekühlt, Vmax 160 km/h, '
                    + '600 ccm und 44 PS. ',
        bild: "data/img/fahrzeuge/261009-xl600.jpeg", farbe: 5, emoji: '🏍️', highlight: false
      },
      {
        id: 6,
        name:         'Africa Twin 650',
        hersteller:   'Honda',
        baujahr:      1989,
        besitzer:     'Klaus Ö.',
        beschreibung: '2-Zylinder XRV 650 RD03, '
                    + '660 ccm und 56 PS. ',
        bild: "data/img/fahrzeuge/261009-twin.jpeg", farbe: 6, emoji: '🏍️', highlight: false
      }
    ]
  }
 
};
 