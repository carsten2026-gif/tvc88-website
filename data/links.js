/**
 * TVC88 GRIESHEIM — Links
 * ============================================================
 * ANLEITUNG FÜR DIE PFLEGE:
 * Neue Links einfach in die passende Gruppe eintragen.
 * Neue Gruppe: einen weiteren Block { gruppe: ..., links: [...] } anlegen.
 *
 * Felder je Link:
 *   titel        – angezeigter Name
 *   url          – vollständige Adresse inkl. https://
 *   beschreibung – kurze Info oder null
 *
 * Wichtig: Nach jedem Eintrag ein Komma setzen.
 * ============================================================
 */

window.TVC_LINKS = [

  {
    gruppe: "Griesheim & Region",
    icon: "🏛️",
    links: [
      { titel: "Stadt Griesheim", url: "https://www.griesheim.de", beschreibung: "Offizielle Website der Stadt Griesheim" },
      { titel: "Landkreis Darmstadt-Dieburg", url: "https://www.ladadi.de", beschreibung: "Informationen aus dem Landkreis" },
    ]
  },

  {
    gruppe: "Befreundete Vereine & Oldtimer",
    icon: "🚜",
    links: [
      /* Beispiel:
      { titel: "Name des Vereins", url: "https://www.beispiel.de", beschreibung: "Kurze Beschreibung" },
      */
    ]
  },

];
