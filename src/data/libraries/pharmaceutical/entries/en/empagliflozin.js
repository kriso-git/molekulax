// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.593Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "empagliflozin",
  "name": "Empagliflozin",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "SGLT2 inhibitor (Jardiance), Boehringer Ingelheim/Eli Lilly. Cardio-reno-protective drug for T2DM + HFrEF/HFpEF + CKD.",
  "description": "Empagliflozin is a selective SGLT2 inhibitor (sodium-glucose cotransporter 2) that blocks glucose reabsorption in proximal renal tubule, causing 60-90 g/day urinary glucose loss (glycosuria). FDA-approved for T2DM (2014), HFrEF (EMPEROR-Reduced 2020 PMID 32865377), HFpEF (EMPEROR-Preserved 2021 PMID 34449189), and CKD (EMPA-KIDNEY 2023 PMID 36331190). The EMPA-REG OUTCOME trial (Zinman 2015 NEJM PMID 26378978) was the first MACE-positive SGLT2i trial — showed 38% relative cardiovascular mortality reduction in T2DM + ASCVD.",
  "mechanism": "Selective SGLT2 (sodium-glucose cotransporter 2) inhibition in proximal renal tubule. Result: 60-90 g/day glucose loss in urine, lowering HbA1c by insulin-independent mechanism. Secondary effects: osmotic diuresis (BP reduction), nephron-level effect (intraglomerular pressure drop, CKD-protective), mild ketone elevation (cardio-protective).",
  "legalStatus": "EU/HU: prescription only (Jardiance, Synjardy = Empagliflozin + Metformin). USA: FDA Rx.",
  "onsetTime": "1-2 weeks (BP, HbA1c)",
  "halfLife": "~12.4 h (once-daily dosing)",
  "atcCode": "A10BK03",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Type 2 diabetes, adjunct to metformin or alone",
    "Heart failure (HFrEF + HFpEF, regardless of T2DM)",
    "Chronic kidney disease (CKD, eGFR ≥ 20)"
  ],
  "contraindications": [
    "Severe renal impairment (eGFR < 20 ml/min/1.73 m²)",
    "Diabetic ketoacidosis history (eu-DKA risk)",
    "Volume depletion, sepsis"
  ],
  "commonSideEffects": [
    "Genital mycotic infections (vulvovaginitis, balanitis, ~5-10%)",
    "Urinary tract infections (UTI, > 2-3% incidence)",
    "Volume depletion, hypotension (elderly, on diuretics)",
    "Severe, rare: eu-DKA (glucose can be < 250 mg/dl), Fournier gangrene (perineal necrotizing fasciitis, FDA warning)"
  ],
  "cyp450": [
    "Glucuronidation primary metabolism (UGT2B7, UGT1A3, UGT1A8, UGT1A9)",
    "No significant CYP interaction"
  ],
  "crossMolInteractions": [
    "Diuretics (loop, thiazide): additive volume depletion",
    "Insulin, sulfonylureas: hypoglycemia risk, dose reduction",
    "Metformin: synergistic (Synjardy fixed combo)"
  ],
  "benefits": [
    "MACE reduction 38% (EMPA-REG OUTCOME)",
    "HFrEF/HFpEF hospitalization and CV mortality reduction",
    "CKD progression reduction (EMPA-KIDNEY)",
    "Weight loss (~2-3 kg), BP reduction (~3-5 mmHg)"
  ],
  "studies": [
    {
      "title": "Empagliflozin, cardiovascular outcomes, and mortality in T2DM (EMPA-REG OUTCOME)",
      "authors": "Zinman B, Wanner C, Lachin JM et al.",
      "journal": "N Engl J Med. 2015;373(22):2117-28.",
      "pmid": "26378978"
    },
    {
      "title": "Cardiovascular and renal outcomes with empagliflozin in heart failure (EMPEROR-Reduced)",
      "authors": "Packer M, Anker SD, Butler J et al.",
      "journal": "N Engl J Med. 2020;383(15):1413-1424.",
      "pmid": "32865377"
    },
    {
      "title": "Empagliflozin in heart failure with a preserved ejection fraction (EMPEROR-Preserved)",
      "authors": "Anker SD, Butler J, Filippatos G et al.",
      "journal": "N Engl J Med. 2021;385(16):1451-1461.",
      "pmid": "34449189"
    },
    {
      "title": "Empagliflozin in patients with chronic kidney disease (EMPA-KIDNEY)",
      "authors": "EMPA-KIDNEY Collaborative Group.",
      "journal": "N Engl J Med. 2023;388(2):117-127.",
      "pmid": "36331190"
    }
  ],
  "related": [
    "metformin",
    "semaglutide"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 10,
      "medium": 10,
      "high": 25
    },
    "unit": "mg/nap",
    "note": "Standard 10 mg/day morning, up to 25 mg/day for HbA1c target. HFrEF/HFpEF indication fixed at 10 mg/day, no escalation. eGFR < 30: dose reduction or discontinuation. Food-independent."
  }
}
