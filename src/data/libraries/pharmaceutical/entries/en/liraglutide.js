// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.594Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "liraglutide",
  "name": "Liraglutide",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Daily GLP-1 receptor agonist, Novo Nordisk Victoza (T2DM) and Saxenda (obesity). Semaglutide predecessor, ~13 h half-life.",
  "description": "Liraglutide is Novo Nordisk's first long-acting GLP-1 RA (Victoza T2DM FDA 2010, Saxenda obesity FDA 2014). Once-daily SC dosing (~13 h half-life, vs semaglutide ~7 days). LEADER trial (Marso 2016 NEJM PMID 27295427) confirmed MACE reduction in T2DM. SCALE trial (Pi-Sunyer 2015 NEJM PMID 26132939) showed 8% body weight loss over 56 weeks in non-diabetic obesity. Modern semaglutide/tirzepatide have largely replaced liraglutide in clinical practice by efficacy (weekly vs daily, better weight loss), but pediatric indication (Saxenda 12+ yr FDA 2020) and specific cases needing daily dosing keep it relevant.",
  "mechanism": "GLP-1 receptor agonist (like semaglutide), 97% sequence homology with native GLP-1. Fatty acid conjugation provides albumin binding and slow elimination (~13 h vs native 1-2 min).",
  "legalStatus": "EU/HU: prescription only (Victoza T2DM, Saxenda obesity). USA: FDA Rx.",
  "bioavailability": "~55% (subcutaneous injection — FDA Victoza/Saxenda label, Section 12.3)",
  "onsetTime": "1-2 weeks (appetite), 8-12 weeks (HbA1c steady-state)",
  "halfLife": "~13 h (once-daily SC dosing)",
  "atcCode": "A10BJ02",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Type 2 diabetes (Victoza 0.6-1.8 mg daily)",
    "Chronic weight management in obesity (Saxenda 0.6-3.0 mg daily)",
    "Pediatric obesity ages 12-17 (Saxenda, FDA 2020)"
  ],
  "contraindications": [
    "MTC/MEN-2 history (FDA boxed warning)",
    "Active pancreatitis",
    "Pregnancy, lactation"
  ],
  "commonSideEffects": [
    "GI: nausea, vomiting, diarrhea (20-30% during titration)",
    "Severe, rare: pancreatitis, gallstones, retinopathy progression"
  ],
  "cyp450": [
    "Not CYP-metabolized",
    "No major drug interactions"
  ],
  "crossMolInteractions": [
    "Insulin, sulfonylureas: hypoglycemia risk, dose reduction"
  ],
  "benefits": [
    "HbA1c reduction 1.0-1.5%, weight loss averaging 8% (SCALE)",
    "MACE reduction in T2DM (LEADER, HR 0.87)",
    "Pediatric obesity FDA-approved (12+ yr)"
  ],
  "studies": [
    {
      "title": "Liraglutide and cardiovascular outcomes in T2DM (LEADER)",
      "authors": "Marso SP, Daniels GH, Brown-Frandsen K et al.",
      "journal": "N Engl J Med. 2016;375(4):311-22.",
      "pmid": "27295427"
    },
    {
      "title": "A randomized, controlled trial of 3.0 mg of liraglutide in weight management (SCALE)",
      "authors": "Pi-Sunyer X, Astrup A, Fujioka K et al.",
      "journal": "N Engl J Med. 2015;373(1):11-22.",
      "pmid": "26132939"
    },
    {
      "title": "Liraglutide for children 12 to less than 18 years of age with obesity (FDA approval, Kelly 2020)",
      "authors": "Kelly AS, Auerbach P, Barrientos-Perez M et al.",
      "journal": "N Engl J Med. 2020;382(22):2117-2128.",
      "pmid": "32233338"
    }
  ],
  "related": [
    "semaglutide",
    "tirzepatide",
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Week 1 (start)",
        "dose": "0.6"
      },
      {
        "phase": "Week 2 (T2DM)",
        "dose": "1.2"
      },
      {
        "phase": "Week 3+ (T2DM)",
        "dose": "1.8"
      },
      {
        "phase": "Obesity target (Saxenda)",
        "dose": "3"
      }
    ],
    "unit": "mg/nap SC",
    "note": "Daily SC injection. Slow titration 1 wk per dose for GI tolerance. T2DM target 1.2-1.8 mg/day, obesity target 3.0 mg/day."
  }
}
