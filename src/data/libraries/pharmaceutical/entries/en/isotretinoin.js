// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.606Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "isotretinoin",
  "name": "Isotretinoin",
  "image": null,
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "13-cis-retinoic acid (Roche Roaccutane). Gold standard for severe nodulocystic acne. FDA category X due to severe teratogenicity — iPLEDGE program mandatory.",
  "description": "Isotretinoin (Roche Roaccutane / Accutane, FDA 1982) is the gold-standard treatment for severe nodulocystic acne. 13-cis-retinoic acid (vitamin A metabolite) causes sebaceous gland atrophy, sebum production reduction, and P. acnes growth inhibition. EXTREME TERATOGENICITY (FDA category X) — every female patient must enroll in pregnancy prevention program (USA: iPLEDGE, EU: similar national programs). 2 negative pregnancy tests before start, 2 forms contraception mandatory, monthly testing. Layton 2009 (PMID 20436884) 6-month course produces sustained remission in ~80% of cases. Side effect profile SIGNIFICANT: dryness (mouth, eye, skin, lip), muscle pain, liver function disturbance, depression risk.",
  "mechanism": "Retinoid receptor (RAR) partial agonist. Sebaceous gland atrophy, ~80% sebum production reduction, P. acnes population decrease, normalization of follicular hyperkeratinization. Multimodal anti-acne effect.",
  "legalStatus": "EU/HU: prescription only, dermatologist-strictly-supervised protocol (Roaccutane). USA: FDA Rx iPLEDGE program.",
  "onsetTime": "4-8 weeks (initial improvement), 4-6 months (full course)",
  "halfLife": "~21 h (parent), 24 h (active 4-oxo-isotretinoin)",
  "atcCode": "D10BA01",
  "prescriptionStatus": "Prescription only (Rx), dermatologist protocol + pregnancy prevention",
  "indications": [
    "Severe nodulocystic acne, resistant to conventional treatment",
    "Scarring acne (cicatricial)",
    "Off-label: severe rosacea, hidradenitis suppurativa"
  ],
  "contraindications": [
    "PREGNANCY (FDA category X — severe craniofacial, CV, CNS malformations)",
    "Childbearing age without contraception",
    "Hypervitaminosis A, severe hepatic disease"
  ],
  "commonSideEffects": [
    "Cheilitis (lip dryness, 90%), skin dryness, xerophthalmia (eye), epistaxis (nosebleed)",
    "Triglyceride and cholesterol elevation",
    "Muscle pain, back pain, ALT/AST elevation",
    "Severe: SEVERE TERATOGENICITY (X), psychiatric symptoms (depression, suicidality — FDA warning), pseudotumor cerebri, IBD (debate), retinoid acid syndrome"
  ],
  "cyp450": [
    "CYP2C9, CYP2C8, CYP3A4 (multiple)",
    "Photo-degradation"
  ],
  "crossMolInteractions": [
    "Tetracycline (doxycycline, tetracycline): SEVERE pseudotumor cerebri risk — FORBIDDEN",
    "Vitamin A (multivitamin): hypervitaminosis additivity, avoid",
    "Alcohol: hepatotoxicity + triglyceride additivity, moderation",
    "High-dose corticosteroids: bone mineralization disturbance"
  ],
  "benefits": [
    "~80% sustained remission after 6-month course",
    "ONLY drug targeting all four pathomechanisms of severe acne",
    "Scarring prevention (vs cyclical antibiotic treatment)"
  ],
  "studies": [
    {
      "title": "Isotretinoin: state of the art treatment for acne vulgaris",
      "authors": "Layton AM.",
      "journal": "JEADV. 2009;23(7):768-71.",
      "pmid": "20436884"
    },
    {
      "title": "Isotretinoin and risk for inflammatory bowel disease: systematic review",
      "authors": "Lee SY, Jamal MM, Nguyen ET et al.",
      "journal": "J Crohns Colitis. 2016;10(10):1217-1226.",
      "pmid": "27068147"
    },
    {
      "title": "Psychiatric adverse effects of isotretinoin",
      "authors": "Bremner JD, Shearer KD, McCaffery PJ.",
      "journal": "J Clin Psychiatry. 2012;73(1):37-50.",
      "pmid": "21939615"
    }
  ],
  "related": [
    "tretinoin",
    "minoxidil",
    "finasteride"
  ],
  "doseCalc": {
    "type": "warning",
    "warning": "Isotretinoin is the GOLD STANDARD for SEVERE ACNE, but STRICTLY UNDER DERMATOLOGIST SUPERVISION with pregnancy-prevention protocol (USA: iPLEDGE, EU: national programs). NO STANDALONE DOSE CALCULATOR on this page because: (1) FDA X TERATOGENICITY — a single missed contraception or lab check can lead to severe fetal malformation; (2) cumulative dose (120-150 mg/kg body weight/course) is body-weight-individual, dermatologist-calculated; (3) MONTHLY CBC, liver function + LIPID monitor MANDATORY; (4) Tetracycline COMBINATION FORBIDDEN (pseudotumor cerebri); (5) Psychiatric symptoms (depression-suicidality) FDA warning. Talk to your dermatologist. Emergency symptoms (vision change, persistent headache, mood depression, blood in stool, pregnancy suspicion): IMMEDIATE care."
  }
}
