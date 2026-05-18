// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.573Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "venlafaxine",
  "name": "Venlafaxine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Szerotonin-norepinefrin reuptake gátló (SNRI, Wyeth Effexor). MDD + GAD + PD + SAD indikációkkal. Súlyos discontinuation-szindrómáról ismert.",
  "description": "A Venlafaxine az első SNRI (Wyeth Effexor, FDA 1993), amely dózisfüggő pharmakológiát mutat: alacsony dózison (≤ 150 mg) főleg SERT-szelektív (SSRI-szerű), magasabb dózison (> 150 mg) hozzájön a NET-aktivitás (SNRI-szerű). Az ER (extended release) formuláció a stabil plazma-szint és a GI-tolerancia miatt standard. Aktív metabolit a desvenlafaxin (Pristiq, külön gyógyszerként is forgalmazott). A Venlafaxine HÍRES SÚLYOS discontinuation szindrómájáról a rövid felezési idő (5 h) és a SERT/NET kettős receptor-hatás miatt: lassú leépítés 4-6 hét alatt KÖTELEZŐ, gyakran csak Fluoxetine-átállással.",
  "mechanism": "Dose-dependent: < 150 mg főleg SERT-inhibitor (SSRI-szerű); > 150 mg NET is hozzáadódik (SNRI-szerű). DAT-hatás minimális.",
  "legalStatus": "EU/HU: vényköteles (Efectin, Velaxin, Velafax, generikus). USA: FDA Rx.",
  "onsetTime": "2-6 weeks (full antidepressant response)",
  "halfLife": "5 h (parent), 11 h (active O-desmethylvenlafaxine)",
  "atcCode": "N06AX16",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "MDD, GAD, pánikbetegség, szociális szorongás",
    "Off-label: ADHD, krónikus fájdalom, vasomotoros tünet menopausalis nőkben"
  ],
  "contraindications": [
    "MAOi 14 napon belül",
    "Kezeletlen szűk-zugú glaukóma",
    "Súlyos hipertenzió (> 150 mg dózison BP-emelkedés várható)"
  ],
  "commonSideEffects": [
    "GI: hányinger (35%, jelentős), szájszárazság",
    "Vérnyomás-emelkedés (dóziseffekt, > 150 mg gyakoribb)",
    "Szexuális diszfunkció (15-30%)",
    "Súlyos, ritka: szerotonin szindróma, SÚLYOS discontinuation szindróma (brain-zap, szédülés, GI, depresszió-visszatérés)"
  ],
  "cyp450": [
    "CYP2D6 substrate (primary)",
    "CYP3A4 (minor)",
    "Minimal CYP inhibitor activity"
  ],
  "crossMolInteractions": [
    "MAOi: ABSZOLÚT kontraindikált",
    "Tramadol, MDMA, triptánok: szerotonin szindróma",
    "Erős CYP2D6-inhibitor (Fluoxetine, Paroxetine): plazma-Venlafaxin emelkedhet"
  ],
  "benefits": [
    "Magasabb dózison kombinált SERT+NET-hatás GAD/MDD-rezisztens esetekben",
    "GAD-ban kifejezetten hatékony, NICE iránymutatás top választás",
    "Vasomotor menopausal symptoms (off-label, hormone-free alternative)"
  ],
  "studies": [
    {
      "title": "Venlafaxine extended release for the treatment of generalized anxiety disorder",
      "authors": "Davidson JR, DuPont RL, Hedges D et al.",
      "journal": "J Clin Psychiatry. 1999;60(8):528-35.",
      "pmid": "10485636"
    },
    {
      "title": "Comparative efficacy of 21 antidepressants for MDD",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Discontinuation symptoms after treatment with serotonin reuptake inhibitors",
      "authors": "Fava GA, Gatti A, Belaise C et al.",
      "journal": "Psychother Psychosom. 2015;84(2):72-81.",
      "pmid": "25721705"
    }
  ],
  "related": [
    "sertralin",
    "mirtazapine",
    "bupropion"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1 (start, ER)",
        "dose": "37.5"
      },
      {
        "phase": "Hét 2+ (MDD/GAD cél)",
        "dose": "75"
      },
      {
        "phase": "Súlyos eset",
        "dose": "150"
      },
      {
        "phase": "Max-dózis (BP-monitor)",
        "dose": "225"
      }
    ],
    "unit": "mg/nap (ER)",
    "note": "ER-formuláció reggel, étkezéssel. > 150 mg/nap vérnyomás-monitor szükséges. ELHAGYÁSNÁL lassú leépítés 4-6 hét, gyakran Fluoxetine-átállással a discontinuation szindróma mitigálására."
  }
}
