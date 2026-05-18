// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.595Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "fluoxetine",
  "name": "Fluoxetine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "The first SSRI (Eli Lilly Prozac, FDA 1987). Ultra-long half-life (4-6 days), FDA-approved for pediatric MDD.",
  "description": "Fluoxetine is the SSRI-class pioneer (Eli Lilly Prozac, FDA 1987), the first clinically successful serotonin-selective drug. Ultra-long PK (parent 4-6 days, active metabolite norfluoxetine 4-16 days) means slow steady-state (4-5 weeks) but milder discontinuation syndrome (auto-taper). The ONLY SSRI with FDA approval for PEDIATRIC MDD (age 8+), plus OCD and bulimia nervosa. Stark 2003 (PMID 14692046) trial documented pediatric MDD efficacy. Generic, affordable. Strong CYP2D6 inhibitor causing clinically significant interactions.",
  "mechanism": "Selective SERT inhibition. Moderate 5-HT2C antagonism (may contribute to mild activating-mood effect). The NORFLUOXETINE metabolite is similarly active and pharmacologically identical.",
  "legalStatus": "EU/HU: prescription only (Prozac, Fluctin, Floxet, generics). USA: FDA Rx.",
  "bioavailability": "Not characterized as absolute (no IV formulation); 60-80% relative to oral solution — FDA Prozac label",
  "onsetTime": "4-6 weeks (full antidepressant response)",
  "halfLife": "4-6 days (parent); norfluoxetine 4-16 days",
  "atcCode": "N06AB03",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Major depressive disorder (MDD), including pediatric (8+ yr, ONLY SSRI with this)",
    "Obsessive-compulsive disorder (OCD)",
    "Bulimia nervosa",
    "Panic disorder, PMDD (Sarafem branding)"
  ],
  "contraindications": [
    "MAOi within 14 days (or 5 weeks after fluoxetine stop — due to long half-life)",
    "Concurrent pimozide, thioridazine"
  ],
  "commonSideEffects": [
    "GI: nausea, diarrhea, decreased appetite (weight-loss-leaning, vs mirtazapine/paroxetine)",
    "Insomnia (more common than other SSRIs, dose in morning)",
    "Sexual dysfunction (15-30%)",
    "Severe, rare: serotonin syndrome, suicidal ideation < 25 yr (FDA boxed), SIADH, mania induction in BD"
  ],
  "cyp450": [
    "CYP2D6 STRONG INHIBITOR (clinically significant)",
    "CYP2C9, CYP3A4 inhibitor (moderate)",
    "CYP2D6, CYP2C9 substrate"
  ],
  "crossMolInteractions": [
    "MAOi: 5-WEEK washout required after fluoxetine stop (long half-life)",
    "CYP2D6 substrates (codeine, tamoxifen, risperidone, atomoxetine): plasma may rise, tamoxifen efficacy may fall",
    "Warfarin: common INR rise, monitor",
    "NSAID, antithrombotic: increased GI bleeding risk"
  ],
  "benefits": [
    "Pediatric MDD FDA-approved (8+ yr, only SSRI)",
    "Ultra-long half-life → mild discontinuation syndrome",
    "Bulimia nervosa FDA-approved",
    "Activating profile, appetite-reducing (for anergic depression)"
  ],
  "studies": [
    {
      "title": "Fluoxetine for acute treatment of depression in children and adolescents",
      "authors": "Stark P, Hardison CD.",
      "journal": "J Clin Psychiatry. 1985;46(3 Pt 2):53-8.",
      "pmid": "3155758"
    },
    {
      "title": "Comparative efficacy of 21 antidepressants for MDD",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Fluoxetine in obsessive-compulsive disorder: pooled-trial efficacy and tolerability",
      "authors": "Tollefson GD, Rampey AH Jr, Potvin JH et al.",
      "journal": "Arch Gen Psychiatry. 1994;51(7):559-67.",
      "pmid": "8031229"
    }
  ],
  "related": [
    "sertralin",
    "escitalopram"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Weeks 1-2 (start)",
        "dose": "10"
      },
      {
        "phase": "MDD target",
        "dose": "20"
      },
      {
        "phase": "OCD/bulimia target",
        "dose": "40"
      },
      {
        "phase": "Max dose",
        "dose": "80"
      }
    ],
    "unit": "mg/nap",
    "note": "Take in MORNING (activating profile, mitigates insomnia). MDD target 20 mg/day, OCD/bulimia 40-60 mg/day. Due to ultra-long half-life, steady-state at 4-5 weeks, and on discontinuation ~5-week auto-taper."
  }
}
