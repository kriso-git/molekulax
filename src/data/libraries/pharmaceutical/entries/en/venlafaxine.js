// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.596Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "venlafaxine",
  "name": "Venlafaxine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Serotonin-norepinephrine reuptake inhibitor (SNRI, Wyeth Effexor). For MDD + GAD + PD + SAD. Notorious severe discontinuation syndrome.",
  "description": "Venlafaxine is the first SNRI (Wyeth Effexor, FDA 1993), with dose-dependent pharmacology: at low dose (≤ 150 mg) mainly SERT-selective (SSRI-like), at higher dose (> 150 mg) NET activity adds (SNRI-like). ER (extended release) formulation is standard for stable plasma and GI tolerance. Active metabolite desvenlafaxine (Pristiq, marketed separately). Venlafaxine is NOTORIOUS for severe discontinuation syndrome due to short half-life (5 h) and dual SERT/NET effect: slow taper over 4-6 weeks MANDATORY, often only via fluoxetine bridge.",
  "mechanism": "Dose-dependent: < 150 mg primarily SERT inhibitor (SSRI-like); > 150 mg NET also (SNRI-like). Minimal DAT activity.",
  "legalStatus": "EU/HU: prescription only (Efectin, Velaxin, Velafax, generics). USA: FDA Rx.",
  "onsetTime": "2-6 weeks (full antidepressant response)",
  "halfLife": "5 h (parent), 11 h (active O-desmethylvenlafaxine)",
  "atcCode": "N06AX16",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "MDD, GAD, panic disorder, social anxiety",
    "Off-label: ADHD, chronic pain, vasomotor symptoms in menopausal women"
  ],
  "contraindications": [
    "MAOi within 14 days",
    "Untreated angle-closure glaucoma",
    "Severe hypertension (BP rise expected > 150 mg/day)"
  ],
  "commonSideEffects": [
    "GI: nausea (35%, significant), dry mouth",
    "BP elevation (dose-dependent, more common > 150 mg)",
    "Sexual dysfunction (15-30%)",
    "Severe, rare: serotonin syndrome, SEVERE discontinuation syndrome (brain-zap, dizziness, GI, depression return)"
  ],
  "cyp450": [
    "CYP2D6 substrate (primary)",
    "CYP3A4 (minor)",
    "Minimal CYP inhibitor activity"
  ],
  "crossMolInteractions": [
    "MAOi: ABSOLUTE contraindication",
    "Tramadol, MDMA, triptans: serotonin syndrome",
    "Strong CYP2D6 inhibitors (fluoxetine, paroxetine): plasma venlafaxine may rise"
  ],
  "benefits": [
    "Higher-dose combined SERT+NET effect for GAD/treatment-resistant MDD",
    "Particularly effective in GAD, NICE guideline top choice",
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
        "phase": "Week 1 (start, ER)",
        "dose": "37.5"
      },
      {
        "phase": "Week 2+ (MDD/GAD target)",
        "dose": "75"
      },
      {
        "phase": "Severe case",
        "dose": "150"
      },
      {
        "phase": "Max dose (BP monitor)",
        "dose": "225"
      }
    ],
    "unit": "mg/nap (ER)",
    "note": "ER formulation in morning, with food. > 150 mg/day requires BP monitoring. ON DISCONTINUATION slow taper over 4-6 weeks, often via fluoxetine bridge to mitigate discontinuation syndrome."
  }
}
