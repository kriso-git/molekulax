// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.607Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "glimepirid",
  "name": "Glimepirid",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "2nd-generation sulfonylurea, Sanofi Amaryl. Classic T2DM drug, but ADA/EASD 2022 prioritizes modern alternatives (GLP-1 RA, SGLT2i).",
  "description": "Glimepiride is a 2nd-generation sulfonylurea developed by Sanofi-Aventis (Amaryl, FDA 1995). It stimulates β-cell insulin secretion by closing ATP-sensitive K channels, NOT glucose-dependently — so hypoglycemia risk is significant. In the classic T2DM portfolio it is a \"cheap and effective\" element, but lacking CV outcome evidence and with hypoglycemia risk, the ADA/EASD 2022 consensus places it behind GLP-1 RA, SGLT2i, and DPP-4i. Still used in cost-sensitive or compliance-simple regimen patients.",
  "mechanism": "Closes ATP-sensitive K channels (KATP, SUR1/Kir6.2) in pancreatic β-cells → depolarization → Ca²⁺ influx → insulin secretion. NOT glucose-dependent, so hypoglycemia possible even at low glucose.",
  "legalStatus": "EU/HU: prescription only (Amaryl, generics). USA: FDA Rx.",
  "bioavailability": "~100% (oral, complete absorption — FDA Amaryl label)",
  "onsetTime": "1-3 h (acute), 1-2 weeks (steady-state HbA1c)",
  "halfLife": "~5-8 h (once-daily morning dosing)",
  "atcCode": "A10BB12",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Type 2 diabetes, adjunct to or alternative to metformin"
  ],
  "contraindications": [
    "Type 1 diabetes, diabetic ketoacidosis",
    "Severe hepatic or renal impairment",
    "Sulfonamide allergy"
  ],
  "commonSideEffects": [
    "Hypoglycemia (significant, especially elderly, meal-skipping, renal-impaired)",
    "Weight gain (averaging 2-3 kg)",
    "GI: nausea, diarrhea (5%), allergic skin rash"
  ],
  "cyp450": [
    "CYP2C9 substrate (primary)",
    "CYP2C9 polymorphism affects dose response"
  ],
  "crossMolInteractions": [
    "CYP2C9 inhibitors (fluconazole, amiodarone): plasma glimepiride may rise, hypoglycemia risk",
    "Beta-blocker (metoprolol, bisoprolol): masks hypoglycemia symptoms",
    "Alcohol: disulfiram-like reaction + hypoglycemia enhancement"
  ],
  "benefits": [
    "HbA1c reduction 1.0-1.5%, fast onset",
    "Cheap, generic, long-term availability",
    "Once-daily dosing (good compliance)"
  ],
  "studies": [
    {
      "title": "Pharmacokinetics and pharmacodynamics of glimepiride",
      "authors": "Massi-Benedetti M.",
      "journal": "Clin Ther. 2003;25(3):799-816.",
      "pmid": "12852704"
    },
    {
      "title": "Effect of intensive blood-glucose control with sulphonylureas or insulin (UKPDS 33)",
      "authors": "UK Prospective Diabetes Study (UKPDS) Group.",
      "journal": "Lancet. 1998;352(9131):837-53.",
      "pmid": "9742976"
    },
    {
      "title": "Cardiovascular outcomes with glimepiride vs linagliptin in T2DM (CAROLINA)",
      "authors": "Rosenstock J, Kahn SE, Johansen OE et al.",
      "journal": "JAMA. 2019;322(12):1155-1166.",
      "pmid": "31536101"
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Weeks 1-2 (start)",
        "dose": "1"
      },
      {
        "phase": "Week 3+",
        "dose": "2"
      },
      {
        "phase": "Target",
        "dose": "4"
      },
      {
        "phase": "Max dose",
        "dose": "8"
      }
    ],
    "unit": "mg/nap (reggel)",
    "note": "Take BEFORE or WITH breakfast. Due to hypoglycemia risk DO NOT SKIP MEALS. Lower start dose in elderly or renal impairment (0.5-1 mg/day). Avoid alcohol."
  }
}
