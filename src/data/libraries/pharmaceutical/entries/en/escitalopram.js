// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.595Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "escitalopram",
  "name": "Escitalopram",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "SSRI, S-enantiomer of citalopram (Lundbeck Lexapro/Cipralex). First-line Rx for MDD + anxiety disorders. Cipriani 2018 meta-analysis: top-3 efficacy.",
  "description": "Escitalopram is the active S-enantiomer of citalopram (R-enantiomer is pharmacologically inactive and may slightly interfere). Developed by Lundbeck (Lexapro FDA 2002), one of the cleanest SERT-selective SSRIs. Per Cipriani 2018 Lancet (PMID 29477251) network meta-analysis, top-3 of 21 antidepressants for efficacy-tolerability ratio (alongside vortioxetine, mirtazapine). Lader 2004 (PMID 15125014) trial showed MDD superiority over citalopram at 8 weeks. Generally better tolerability than citalopram, with lower QTc-prolongation risk (FDA 2011 warning for citalopram > 40 mg/day, escitalopram > 20 mg/day).",
  "mechanism": "Selective allosteric SERT (serotonin transporter) inhibitor. Higher SERT selectivity than other SSRIs. No significant affinity for other receptors.",
  "legalStatus": "EU/HU: prescription only (Cipralex, Lexapro, generics). USA: FDA Rx.",
  "bioavailability": "~80% (oral, food-independent — FDA Lexapro label)",
  "onsetTime": "2-6 weeks (full antidepressant response)",
  "halfLife": "27-32 h (once-daily dosing)",
  "atcCode": "N06AB10",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Major depressive disorder (MDD)",
    "Generalized anxiety disorder (GAD)",
    "Panic disorder, social anxiety (SAD), OCD"
  ],
  "contraindications": [
    "MAOi within 14 days (serotonin syndrome)",
    "Concurrent pimozide (QT prolongation)",
    "Congenital long-QT syndrome"
  ],
  "commonSideEffects": [
    "GI: nausea (10-15%), diarrhea, dry mouth",
    "Sexual dysfunction (10-20%)",
    "Insomnia or sedation, headache, sweating",
    "Severe, rare: serotonin syndrome, suicidal ideation < 25 yr (FDA boxed), SIADH, QT prolongation > 20 mg/day"
  ],
  "cyp450": [
    "CYP2C19 substrate (primary)",
    "CYP3A4, CYP2D6 (minor)",
    "Mild CYP2D6 inhibitor (clinically less significant than fluoxetine/paroxetine)"
  ],
  "crossMolInteractions": [
    "MAOi: ABSOLUTE contraindication",
    "Tramadol, MDMA, triptans: serotonin syndrome risk",
    "QT-prolonging agents (azithromycin, ondansetron): additive risk > 20 mg/day",
    "Warfarin: mild INR rise possible"
  ],
  "benefits": [
    "Cipriani 2018 meta top-3 efficacy-tolerability",
    "High SERT selectivity (few off-target receptors)",
    "Simple dose escalation (10 mg → 20 mg)"
  ],
  "studies": [
    {
      "title": "Comparative efficacy of 21 antidepressants for MDD",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Escitalopram versus citalopram: the surprising role of the R-enantiomer",
      "authors": "Lader M, Andersen HF, Baekdal T.",
      "journal": "Psychopharmacology. 2005;179(2):461-8.",
      "pmid": "15692804"
    },
    {
      "title": "Efficacy of escitalopram in generalized anxiety disorder",
      "authors": "Davidson JR, Bose A, Korotzer A et al.",
      "journal": "J Clin Psychiatry. 2004;65(8):1059-66.",
      "pmid": "15323590"
    }
  ],
  "related": [
    "fluoxetine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Week 1 (start)",
        "dose": "5"
      },
      {
        "phase": "Week 2+ (MDD target)",
        "dose": "10"
      },
      {
        "phase": "Max dose (GAD/OCD)",
        "dose": "20"
      }
    ],
    "unit": "mg/nap",
    "note": "Morning or evening, food-independent. MDD target 10 mg/day, GAD/OCD 10-20 mg/day. > 20 mg/day NOT recommended due to QT prolongation. Slow taper to avoid discontinuation syndrome."
  }
}
