// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.596Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "mirtazapine",
  "name": "Mirtazapine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Noradrenergic and specific serotonergic antidepressant (NaSSA, Organon Remeron). Sedating + appetite-stimulating profile, ideal for MDD + insomnia + weight loss combination.",
  "description": "Mirtazapine is a tetracyclic antidepressant (NaSSA class, Organon Remeron FDA 1996). Mechanism: α2-adrenergic autoreceptor antagonist (raising serotonin and norepinephrine release), and 5-HT2A/2C and 5-HT3 antagonist. 5-HT2C block explains appetite stimulation, 5-HT3 block anti-nausea, α2-block sedating profile (especially at low dose, 7.5-15 mg). Ideal for MDD with weight loss, insomnia, nausea cluster. Cipriani 2018 meta places it top-3 for efficacy-tolerability.",
  "mechanism": "α2-adrenergic autoreceptor antagonist (raises NA + 5-HT release), 5-HT2A/2C/3 receptor antagonist, H1 receptor antagonist (sedation). NOT a SERT/NET inhibitor.",
  "legalStatus": "EU/HU: prescription only (Remeron, Mirzaten, generics). USA: FDA Rx.",
  "onsetTime": "1-2 weeks (alvás, étvágy), 2-4 weeks (full AD)",
  "halfLife": "20-40 h (once-nightly dosing)",
  "atcCode": "N06AX11",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Major depressive disorder, especially with insomnia + weight loss + anxiety",
    "Off-label: SSRI/SNRI augmentation for sexual dysfunction + insomnia"
  ],
  "contraindications": [
    "MAOi within 14 days",
    "Severe hepatic or renal impairment"
  ],
  "commonSideEffects": [
    "Sedation, somnolence (>50%, especially at 7.5-15 mg)",
    "Weight gain (averaging 2-4 kg, due to appetite stimulation)",
    "Dry mouth, constipation, urinary retention (mild anticholinergic effect)",
    "Severe, rare: agranulocytosis (< 1/1000), Stevens-Johnson, suicidal ideation < 25 yr"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary)",
    "CYP1A2, CYP2D6 (minor)",
    "Minimal CYP inhibitor"
  ],
  "crossMolInteractions": [
    "MAOi: ABSOLUTE contraindication",
    "Alcohol, benzodiazepine: additive sedation",
    "Strong CYP3A4 inhibitors (ketoconazole): plasma mirtazapine may rise"
  ],
  "benefits": [
    "Ideal choice for MDD with insomnia + anorexia",
    "As SSRI/SNRI augmentation mitigates sexual dysfunction",
    "Not a SERT inhibitor, no classic SSRI discontinuation syndrome",
    "Cipriani 2018 top-3 efficacy-tolerability"
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
        "phase": "Week 1 (start)",
        "dose": "15"
      },
      {
        "phase": "Week 2+ (target)",
        "dose": "30"
      },
      {
        "phase": "Max dose",
        "dose": "45"
      }
    ],
    "unit": "mg/nap (este)",
    "note": "Take in EVENING (use sedating effect). Low dose (7.5-15 mg) is PARADOXICALLY more sedating (relative H1 block stronger); at higher dose (30-45 mg) NA release counterbalances."
  }
}
