// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.598Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "rosuvastatin",
  "name": "Rosuvastatin",
  "image": "/pharmaceutical/blister-pink-small.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Hydrophilic high-intensity statin (AstraZeneca Crestor). JUPITER trial established primary ASCVD prevention even at elevated CRP. Few CYP interactions.",
  "description": "Rosuvastatin is a hydrophilic HMG-CoA reductase inhibitor (AstraZeneca Crestor, FDA 2003). Most potent statin by intensity — 40 mg/day yields ~60-63% LDL reduction (vs atorvastatin 80 mg ~55%). JUPITER trial (Ridker 2008 NEJM PMID 18997196) established primary ASCVD prevention in elevated-CRP, normo-LDL patients. Less CYP-involved than atorvastatin (mainly CYP2C9, minor CYP3A4), so fewer drug interactions. Side effect profile similar to other statins.",
  "mechanism": "Hydrophilic competitive HMG-CoA reductase inhibition. Higher potency, fewer lipophilic-like pleiotropic effects. CRP reduction even at normo-LDL.",
  "legalStatus": "EU/HU: prescription only (Crestor, Roswera, generics). USA: FDA Rx.",
  "bioavailability": "~20% (oral — FDA Crestor label)",
  "onsetTime": "1-2 weeks (lipid), 4 weeks (steady-state LDL)",
  "halfLife": "19 h (once-daily, any time)",
  "atcCode": "C10AA07",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Primary hypercholesterolemia, FH",
    "Secondary ASCVD prevention",
    "Primary prevention with elevated CRP (JUPITER basis)"
  ],
  "contraindications": [
    "Active liver disease, pregnancy, lactation",
    "Severe renal impairment (eGFR < 30 — for 40 mg dose)"
  ],
  "commonSideEffects": [
    "Muscle pain (3-5%), ALT/AST elevation (1-2%)",
    "Slightly increased new-onset T2DM risk",
    "Severe, rare: rhabdomyolysis (proteinuria + hematuria at 40 mg more common than other statins)"
  ],
  "cyp450": [
    "CYP2C9 substrate (minor)",
    "OATP1B1 substrate (significant)",
    "Less CYP3A4-dependent than atorvastatin"
  ],
  "crossMolInteractions": [
    "Cyclosporine: 7x AUC rise, contraindicated above 5 mg",
    "Gemfibrozil: rhabdomyolysis risk, avoid",
    "Warfarin: mild INR rise"
  ],
  "benefits": [
    "Most potent statin (40 mg ~60-63% LDL drop)",
    "Fewer CYP interactions vs atorvastatin",
    "JUPITER: CRP-driven primary ASCVD prevention"
  ],
  "studies": [
    {
      "title": "Rosuvastatin to prevent vascular events in men and women with elevated CRP (JUPITER)",
      "authors": "Ridker PM, Danielson E, Fonseca FA et al.",
      "journal": "N Engl J Med. 2008;359(21):2195-207.",
      "pmid": "18997196"
    },
    {
      "title": "Intensive lipid lowering with atorvastatin in coronary disease (TNT) reference",
      "authors": "LaRosa JC, Grundy SM, Waters DD et al.",
      "journal": "N Engl J Med. 2005;352(14):1425-35.",
      "pmid": "15755765"
    },
    {
      "title": "Efficacy and safety of cholesterol-lowering treatment (CTT)",
      "authors": "Baigent C, Blackwell L, Emberson J et al.",
      "journal": "Lancet. 2010;376(9753):1670-81.",
      "pmid": "21067804"
    }
  ],
  "related": [
    "atorvastatin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 5,
      "medium": 20,
      "high": 40
    },
    "unit": "mg/nap",
    "note": "Low (5 mg ~38%): sensitive patient, start. Moderate (10-20 mg ~46-55%): standard. High (40 mg ~60-63%): FH or high-risk secondary prevention. Food-independent."
  }
}
