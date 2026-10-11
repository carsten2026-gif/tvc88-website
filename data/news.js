/**
 * TVC88 GRIESHEIM — News & Berichte
 * ============================================================
 * ANLEITUNG FÜR DIE PFLEGE:
 * Neuen Beitrag ganz oben in die Liste eintragen.
 * Das erste Element erscheint als "Featured" auf der Startseite.
 *
 * Felder:
 *   id       – eindeutige Nummer (einfach hochzählen)
 *   datum    – Format: "YYYY-MM-DD" (Jahr-Monat-Tag)
 *   kategorie – z.B. "Vereinsleben", "Veranstaltung", "Presse"
 *   titel    – Überschrift des Beitrags
 *   teaser   – Kurzer Einleitungstext (1-2 Sätze) für die Kacheln
 *   inhalt   – Längerer Text auf der Detailseite (HTML erlaubt)
 *   bild     – Pfad zum Bild, z.B. "img/news/fruehjahrstreffen-2025.jpg"
 *              oder null wenn kein Bild vorhanden
 *   farbe    – Platzhalterfarbe falls kein Bild: 1, 2, 3 oder 4
 *   emoji    – Symbol wenn kein Bild vorhanden
 * ============================================================
 */

window.TVC_NEWS = [

 {
    id: 9,
    datum: "2026-09-19",
    kategorie: "Gärtnerei Appel",
    titel: "Gartenfest der Gärtnerei Appel Herbst 2026: Historische Traktoren bei bestem Wetter in der Gärtnerei ausgestellt",
    teaser: "Im Rahmen des Gartenfestes der Gärtnerei Appel war neben der Ausstellung Gelegenheit für Gespräche mit den Besuchern.",
    inhalt: `<p>Bestes Wetter und eine tolle kulinarische Versorgung prägten den Tag.</p>
<p>Der Verein dankt allen Besuchern für ihr IUnteresse und der Gärtnerei Appel für die Gelegenheit.</p>`,
    bild: "data/img/galerie/2026/260919-appel-001.jpeg",
    farbe: 1,
    emoji: "🚜"
  },

  {
    id: 8,
    datum: "2026-09-12",
    kategorie: "Kerbeumzug Pfungstadt",
    titel: "Kerbeumzug Pfungstadt 2026: Historische Traktoren bei bestem Wetter quer durch Pfungstadt",
    teaser: "Im Rahmen des Kerbeumzugs nehmen eine Vielzahl unserer Traktoren teil und begeistern die Zuschauer.",
    inhalt: `<p>Bestes Wetter während des Umzuges sorgte für eine fröhliche Stimmung der Zuschauer und Zugteilnehmer.</p>
<p>Der Verein dankt allen Mitgliedern und Helfern, die diesen Tag möglich gemacht haben.</p>`,
    bild: "data/img/galerie/2026/260912-pfungstadt-001.jpeg",
    farbe: 1,
    emoji: "🚜"
  },

  {
    id: 7,
    datum: "2026-08-30",
    kategorie: "Kerbeumzug Griesheim",
    titel: "Kerbeumzug Griesheim 2026: Historische Traktoren bei bestem Wetter quer durch Griesheim",
    teaser: "Im Rahmen des Kerbeumzugs nehmen eine Vielzahl unserer Traktoren teil und begeistern die Zuschauer.",
    inhalt: `<p>Bestes Wetter während des Umzuges sorgte für eine fröhliche Stimmung der Zuschauer und Zugteilnehmer.</p>
<p>Besonderes Highlight war das anschliessende Treffen an der Halle mit Salaten vom Feinsten.</p>
<p>Der Verein dankt allen Mitgliedern und Helfern, die diesen Tag möglich gemacht haben.</p>`,
    bild: "data/img/galerie/2026/260903-kerbeumzug.jpeg",
    farbe: 1,
    emoji: "🚜"
  },

  {
    id: 6,
    datum: "2026-08-10",
    kategorie: "Kerbeumzug Eberstadt",
    titel: "Kerbeumzug Eberstadt 2026: Historische Traktoren bei bestem Wetter quer durch Eberstadt",
    teaser: "Im Rahmen des Kerbeumzugs nehmen eine Vielzahl unserer Traktoren teil und begeistern die Zuschauer.",
    inhalt: `<p>Bestes Wetter während des Umzuges sorgte für eine fröhliche Stimmung der Zuschauer und Zugteilnehmer.</p>
<p>Besonderes Highlight war das anschliessende Treffen bei einem Vereinsmitglied.</p>
<p>Der Verein dankt dem freundlichen Gastgeber.</p>`,
    bild: "data/img/galerie/2026/260810-eberstadt-001.jpeg",
    farbe: 1,
    emoji: "🚜"
  },

  {
    id: 5,
    datum: "2025-05-14",
    kategorie: "Vereinsleben",
    titel: "Frühjahrstreffen 2025: Über 40 historische Fahrzeuge auf dem Vereinsgelände",
    teaser: "Das diesjährige Frühjahrstreffen war ein voller Erfolg. Mitglieder und Gäste aus der ganzen Region präsentierten ihre Schätze der Öffentlichkeit.",
    inhalt: `<p>Ein strahlend blauer Himmel empfing die Besucher des diesjährigen Frühjahrstreffens auf dem Vereinsgelände in Griesheim. Über 40 historische Fahrzeuge aus fünf Jahrzehnten standen an diesem Wochenende blank geputzt Spalier.</p>
<p>Besonderes Highlight war der restaurierte Lanz Bulldog aus dem Jahr 1952, den Vereinsmitglied Karl-Heinz Müller nach zweijähriger Restaurierungsarbeit erstmals öffentlich vorstellte.</p>
<p>Der Verein dankt allen Mitgliedern und Helfern, die diesen Tag möglich gemacht haben.</p>`,
    bild: "data/img/galerie/2026/260903-bernd.jpeg",
    farbe: 1,
    emoji: "🚜"
  },

  {
    id: 4,
    datum: "2025-05-02",
    kategorie: "Vereinsleben",
    titel: "Neues Stammtisch-Lokal: TuS Restaurant ab sofort unser Treffpunkt",
    teaser: "Seit Beginn 2025 trifft sich der TVC88 im Restaurant TuS in der Jahnstraße – mehr Platz und ein herzliches Ambiente.",
    inhalt: `<p>Der Vorstand freut sich, das neue Stammtisch-Lokal vorzustellen: Ab sofort trifft sich der Traktor Veteranen Club 88 jeden ersten Freitag im Monat im Restaurant TuS, Jahnstraße 20, 64347 Griesheim.</p>
<p>Beginn ist jeweils um 19:00 Uhr. Gäste und Interessenten sind herzlich willkommen!</p>`,
    bild: null,
    farbe: 2,
    emoji: "🍺"
  },

  {
    id: 3,
    datum: "2025-04-20",
    kategorie: "Presse",
    titel: "Echo Online berichtet über Einachser-Vorführung in Griesheim",
    teaser: "Der Darmstädter Echo Online widmete dem diesjährigen Einachsertreffen einen ausführlichen Bericht mit beeindruckenden Bildern.",
    inhalt: `<p>Die Lokalredaktion des Darmstädter Echos war beim diesjährigen Einachsertreffen vor Ort und hat ausführlich berichtet. Der Artikel erschien am 20. April 2025 in der Onlineausgabe.</p>
<p>Wir freuen uns über die Aufmerksamkeit und danken der Redaktion für die positive Berichterstattung.</p>`,
    bild: null,
    farbe: 3,
    emoji: "📰"
  },

  {
    id: 2,
    datum: "2025-03-10",
    kategorie: "Veranstaltung",
    titel: "Hauptversammlung 2025: Vorstand einstimmig wiedergewählt",
    teaser: "Bei der Hauptversammlung wurde der gesamte Vorstand für weitere zwei Jahre bestätigt. Außerdem wurden neue Veranstaltungstermine beschlossen.",
    inhalt: `<p>Die Jahreshauptversammlung 2025 des TVC88 fand am 10. März im Vereinslokal statt. Alle Vorstandsmitglieder wurden einstimmig für weitere zwei Jahre bestätigt.</p>
<p>Neben der Entlastung des Vorstands wurden auch die Termine für die kommenden Veranstaltungen festgelegt.</p>`,
    bild: null,
    farbe: 4,
    emoji: "📋"
  },

  {
    id: 1,
    datum: "2024-09-15",
    kategorie: "Vereinsleben",
    titel: "Herbstausfahrt 2024: Malerische Tour durch den Odenwald",
    teaser: "Bei herrlichem Herbstwetter erkundeten rund 25 Fahrzeuge auf einer Tagesausfahrt das Odenwälder Hinterland.",
    inhalt: `<p>Rund 25 historische Fahrzeuge machten sich bei herrlichem Herbstwetter auf den Weg durch das Odenwälder Hinterland. Die Route führte über Ober-Ramstadt, Reichelsheim und zurück nach Griesheim.</p>`,
    bild: null,
    farbe: 1,
    emoji: "🍂"
  }

];
