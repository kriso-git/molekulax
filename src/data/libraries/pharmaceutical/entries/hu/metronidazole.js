// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.582Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "metronidazole",
  "name": "Metronidazole",
  "image": null,
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Nitroimidazol antibiotikum (Flagyl). Anaerob baktérium + protozoa-infekciók (C. difficile, Trichomonas, Giardia, bakteriális vaginitisz).",
  "description": "A Metronidazole egy nitroimidazol antibiotikum (Sanofi Flagyl, FDA 1963). Az anaerob baktériumokra és protozoa-organizmusokra szelektíven hat: a bakteriális/protozoa redukáló enzimek (pyruvat-ferredoxin oxidoreductase) reaktív nitro-radikálokká alakítják, ami a DNS-t károsítja. Az aerob organizmusokra hatástalan. Standard indikációk: C. difficile colitis (vancomycin-alternatíva enyhe-mérsékelt esetben), bakteriális vaginitisz, trichomoniasis, giardiasis, amoebiasis, H. pylori eradikáció triple-terápiában. Mellékhatás-profil általában jól tolerált, de DISULFIRAM-szerű reakció alkohollal — abszolút alkohol-tilalom a kúra alatt és 48 óráig utána.",
  "mechanism": "Anaerob baktérium/protozoa felszív + redukció reaktív nitro-radikálokká → DNS-károsodás → sejthalál. Aerob organizmusokra inaktív (nincs redukáló enzim).",
  "legalStatus": "EU/HU: vényköteles (Klion, Flagyl, generikus). USA: FDA Rx.",
  "bioavailability": "~100% (orális, \"well absorbed\", IV-vel ekvivalens diszpozíció — FDA Flagyl label)",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "~8 h (twice or thrice daily)",
  "atcCode": "J01XD01",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "C. difficile colitis (enyhe-mérsékelt, vancomycin-alternatíva)",
    "Bakteriális vaginitisz (Gardnerella)",
    "Trichomoniasis (STD, partner-kezelés is)",
    "Giardiasis, amoebiasis (utazó-diarrhea)",
    "H. pylori eradikáció (PPI + Amoxicillin + Clarithromycin/Metronidazole)"
  ],
  "contraindications": [
    "Első trimeszter terhesség (relatív, kockázat-haszon mérlegelés)",
    "Aktív alkohol-fogyasztás (disulfiram-reakció)"
  ],
  "commonSideEffects": [
    "GI: fémes íz, hányinger, hasi diszkomfort",
    "Sötét-bordó vizelet (jóindulatú)",
    "Súlyos, ritka: perifériás neuropátia (krónikus magas-dózisú terápián), aszeptikus meningitisz, leukopénia, encefalopátia"
  ],
  "cyp450": [
    "CYP2C9 INHIBITOR",
    "CYP3A4 substrate (minor)"
  ],
  "crossMolInteractions": [
    "ALKOHOL: ABSZOLÚT tilos a kúra alatt + 48 h utána (disulfiram-szerű reakció, hányás, flushing, palpitációk)",
    "Warfarin: INR-emelkedés szignifikáns (CYP2C9-blokk), monitor",
    "Lithium: lithium-szint emelkedhet"
  ],
  "benefits": [
    "Anaerob és protozoa-szelektivitás (egyedülálló)",
    "C. diff. enyhe-mérsékelt vancomycin-alternatíva",
    "H. pylori triple-terápia komponens"
  ],
  "studies": [
    {
      "title": "Vancomycin versus metronidazole for Clostridium difficile colitis",
      "authors": "Johnson S, Louie TJ, Gerding DN et al.",
      "journal": "Clin Infect Dis. 2014;59(3):345-54.",
      "pmid": "24799326"
    },
    {
      "title": "Metronidazole for bacterial vaginosis: meta-analysis",
      "authors": "Sherrard J, Donders G, White D et al.",
      "journal": "Int J STD AIDS. 2011;22(8):421-9.",
      "pmid": "21795415"
    }
  ],
  "related": [
    "amoxicillin",
    "doxycycline",
    "azithromycin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 250,
      "medium": 500,
      "high": 750
    },
    "unit": "mg 3x/nap",
    "note": "C. diff: 500 mg 3x/nap 10-14 nap. BV: 500 mg 2x/nap 7 nap. Trichomonas: 2 g egyszeri dózis VAGY 500 mg 2x/nap 7 nap (partner is). H. pylori: 500 mg 2x/nap 14 nap (triple). ALKOHOL TILOS kúra alatt + 48 h. Fémes íz jóindulatú."
  }
}
