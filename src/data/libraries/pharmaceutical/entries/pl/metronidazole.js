// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.624Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "metronidazole",
  "name": "Metronidazole",
  "image": null,
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Antybiotyk nitroimidazolowy (Flagyl). Infekcje beztlenowcami + pierwotniakami (C. difficile, Trichomonas, Giardia, vaginitis bakteryjny).",
  "description": "Metronidazol to antybiotyk nitroimidazolowy (Sanofi Flagyl, FDA 1963). Selektywnie aktywny przeciw bakteriom beztlenowym i pierwotniakom: bakteryjne/pierwotniakowe enzymy redukujące (pirogronian-ferredoksyna oksydoreduktaza) przekształcają go w reaktywne rodniki uszkadzające DNA. Nieaktywny przeciw tlenowcom. Standardowe wskazania: zapalenie jelita C. difficile (alternatywa wankomycyny dla łagodnych-średnich), vaginitis bakteryjny, trichomonoza, giardioza, amebioza, eradykacja H. pylori w terapii potrójnej. Generalnie dobrze tolerowany, ale reakcja PODOBNA DO DISULFIRAMU z alkoholem — bezwzględny zakaz alkoholu podczas leczenia i 48 h po.",
  "mechanism": "Wchłanianie + redukcja w bakterii/pierwotniaku do reaktywnych rodników → uszkodzenie DNA → śmierć komórki. Nieaktywny przeciw tlenowcom.",
  "legalStatus": "UE/PL: na receptę (Klion, Flagyl, generyki). USA: FDA Rx.",
  "bioavailability": "~100% (doustnie, \"dobrze wchłaniany\", dyspozycja równoważna IV — etykieta FDA Flagyl)",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "~8 h (twice or thrice daily)",
  "atcCode": "J01XD01",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Zapalenie jelita C. difficile (łagodne-średnie, alternatywa wankomycyny)",
    "Vaginitis bakteryjny (Gardnerella)",
    "Trichomonoza (STD, też leczenie partnera)",
    "Giardioza, amebioza (biegunka podróżnych)",
    "Eradykacja H. pylori (PPI + amoksycylina + klarytromycyna/metronidazol)"
  ],
  "contraindications": [
    "Pierwszy trymestr ciąży (względne, korzyść-ryzyko)",
    "Aktywne spożycie alkoholu (reakcja disulfiramowa)"
  ],
  "commonSideEffects": [
    "GI: metaliczny smak, nudności, dyskomfort",
    "Ciemnoczerwony mocz (łagodny)",
    "Ciężkie, rzadkie: neuropatia obwodowa (przewlekła wysoka dawka), aseptyczne zapalenie opon, leukopenia, encefalopatia"
  ],
  "cyp450": [
    "CYP2C9 INHIBITOR",
    "CYP3A4 substrate (minor)"
  ],
  "crossMolInteractions": [
    "ALKOHOL: BEZWZGLĘDNY zakaz podczas leczenia + 48 h po (reakcja disulfiramowa, wymioty, flushing, kołatania)",
    "Warfaryna: znaczący wzrost INR (blok CYP2C9), monitor",
    "Lit: poziom może wzrosnąć"
  ],
  "benefits": [
    "Selektywność beztlenowa i pierwotniakowa (unikalna)",
    "C. diff łagodna-średnia alternatywa wankomycyny",
    "Komponent terapii potrójnej H. pylori"
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
    "note": "C. diff: 500 mg 3x/dzień 10-14 dni. BV: 500 mg 2x/dzień 7 dni. Trichomonas: 2 g jednorazowo LUB 500 mg 2x/dzień 7 dni (też partner). H. pylori: 500 mg 2x/dzień 14 dni (potrójna). ALKOHOL ZAKAZANY podczas + 48 h. Metaliczny smak łagodny."
  }
}
