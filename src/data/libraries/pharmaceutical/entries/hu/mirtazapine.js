// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.573Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "mirtazapine",
  "name": "Mirtazapine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Noradrenerg és specifikus szerotoninerg antidepresszáns (NaSSA, Organon Remeron). Szedáló + étvágyfokozó profil, MDD + inszomnia + súlyveszteség kombinációra ideális.",
  "description": "A Mirtazapine egy tetraciklikus antidepresszáns (NaSSA-osztály, Organon Remeron FDA 1996). Mechanizmus: α2-adrenerg autoreceptor antagonista (szerotonin- és norepinefrin-felszabadulás növelése), valamint 5-HT2A/2C és 5-HT3 antagonista. A 5-HT2C blokk magyarázza az étvágyfokozó hatást, a 5-HT3 blokk az anti-nauseás hatást, az α2-blokk a szedáló profilt (különösen alacsony dózison, 7,5-15 mg). Ideális MDD-betegen, akinek súlyveszteség, inszomnia és nauseaplem-szindrómát kell mitigálni. Cipriani 2018 meta szerint a top-3 hatékonyság-tolerabilitás aránnyal.",
  "mechanism": "α2-adrenerg autoreceptor antagonista (NA + 5-HT felszabadulás emelése), 5-HT2A/2C/3 receptor antagonista, H1-receptor antagonista (szedáció). NEM SERT/NET-inhibitor.",
  "legalStatus": "EU/HU: vényköteles (Remeron, Mirzaten, generikus). USA: FDA Rx.",
  "onsetTime": "1-2 weeks (alvás, étvágy), 2-4 weeks (full AD)",
  "halfLife": "20-40 h (once-nightly dosing)",
  "atcCode": "N06AX11",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Major depresszív zavar, különösen inszomnia + súlyveszteség + szorongás profillal",
    "Off-label: SSRI/SNRI augmentáció szexuális diszfunkció + inszomnia mitigálására"
  ],
  "contraindications": [
    "MAOi 14 napon belül",
    "Súlyos máj- vagy vesefunkció-zavar"
  ],
  "commonSideEffects": [
    "Szedáció, szomnolencia (>50%, főleg 7,5-15 mg-on)",
    "Súlygyarapodás (átlag 2-4 kg, étvágyfokozás miatt)",
    "Szájszárazság, székrekedés, vizeletretenció (mérsékelt antikolinerg hatás)",
    "Súlyos, ritka: agranulocitózis (< 1/1000), Stevens-Johnson, suicidal ideation < 25 év"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary)",
    "CYP1A2, CYP2D6 (minor)",
    "Minimal CYP inhibitor"
  ],
  "crossMolInteractions": [
    "MAOi: ABSZOLÚT kontraindikált",
    "Alkohol, benzodiazepin: szedáció additívan fokozódik",
    "Erős CYP3A4-inhibitor (Ketoconazole): plazma-Mirtazapin emelkedhet"
  ],
  "benefits": [
    "Inszomnia + étvágytalanság-MDD-betegen ideális szer-választás",
    "SSRI/SNRI augmentációként szexuális diszfunkció mitigálása",
    "NEM SERT-inhibitor, nincs hagyományos SSRI-discontinuation szindróma",
    "Cipriani 2018 top-3 hatékonyság-tolerabilitás aránnyal"
  ],
  "studies": [
    {
      "title": "Mirtazapine: a review of its use in major depression",
      "authors": "Anttila SA, Leinonen EV.",
      "journal": "CNS Drug Rev. 2001;7(3):249-64.",
      "pmid": "11607047"
    },
    {
      "title": "Comparative efficacy of 21 antidepressants for MDD",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Mirtazapine versus other antidepressive agents for depression",
      "authors": "Watanabe N, Omori IM, Nakagawa A et al.",
      "journal": "Cochrane Database Syst Rev. 2011;(12):CD006528.",
      "pmid": "22161405"
    }
  ],
  "related": [
    "sertralin",
    "bupropion",
    "venlafaxine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1 (start)",
        "dose": "15"
      },
      {
        "phase": "Hét 2+ (cél)",
        "dose": "30"
      },
      {
        "phase": "Max-dózis",
        "dose": "45"
      }
    ],
    "unit": "mg/nap (este)",
    "note": "ESTE bevenni (a szedáló hatás kihasználására). Alacsony dózis (7,5-15 mg) PARADOX módon szedálóbb (H1-blokk relatív erősebb), magasabb dózisnál (30-45 mg) a NA-felszabadulás aktiváló hatása semlegesít."
  }
}
