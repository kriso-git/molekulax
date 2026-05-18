// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.593Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "tirzepatide",
  "name": "Tirzepatide",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Dual GIP + GLP-1 receptor agonist, Eli Lilly Mounjaro (T2DM) and Zepbound (obesity). SURMOUNT-5 trial showed head-to-head superiority over semaglutide.",
  "description": "Tirzepatide is the first dual incretin agonist, simultaneously activating GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptors. Developed by Eli Lilly (Mounjaro T2DM FDA 2022, Zepbound obesity FDA 2023, ~7-day half-life, weekly SC injection). SURPASS-2 (Frías 2021 NEJM PMID 34170647) showed tirzepatide significantly outperforms semaglutide in HbA1c reduction. SURMOUNT-5 (Aronne 2025 NEJM PMID 40353578) head-to-head obesity trial showed 20.2% body weight loss at 72 weeks (vs semaglutide 13.7%, p<0.001). Side effect profile similar, possibly with modestly better GI tolerance.",
  "mechanism": "Dual GIP + GLP-1 receptor agonist. GIP activation causes glucose-dependent insulin secretion, glucagon suppression, and likely adipocyte lipid redistribution. GLP-1 activation (as in semaglutide) slows gastric emptying and centrally reduces appetite.",
  "legalStatus": "EU/HU: prescription only (Mounjaro T2DM, Zepbound obesity). USA: FDA Rx. Global supply shortage 2023-2024.",
  "onsetTime": "1-2 weeks (appetite), 12-16 weeks (HbA1c steady-state)",
  "halfLife": "~5 days (weekly SC dosing)",
  "atcCode": "A10BX16",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Type 2 diabetes (Mounjaro 2.5-15 mg weekly)",
    "Chronic weight management in obesity (Zepbound 2.5-15 mg weekly)",
    "OSA + obesity (Zepbound 2024 FDA expansion, SURMOUNT-OSA)"
  ],
  "contraindications": [
    "MTC or MEN-2 history (as with semaglutide, FDA boxed warning)",
    "Active or recurrent pancreatitis",
    "Pregnancy, lactation"
  ],
  "commonSideEffects": [
    "GI: nausea, vomiting, diarrhea (>20% during titration)",
    "Decreased appetite, dyspepsia, eructation",
    "Severe, rare: acute pancreatitis, gallstones, hypoglycemia (with insulin/SU)"
  ],
  "cyp450": [
    "Not CYP-metabolized (proteolytic degradation)",
    "No major drug interactions"
  ],
  "crossMolInteractions": [
    "Insulin, sulfonylureas: hypoglycemia risk, dose reduction",
    "Oral drugs (levothyroxine, warfarin): slowed gastric emptying shifts absorption"
  ],
  "benefits": [
    "HbA1c reduction up to 2.0-2.5% (SURPASS-2 superior to semaglutide)",
    "Body weight loss averaging 20.2% over 72 weeks (SURMOUNT-5)",
    "Once-weekly SC dosing, convenient compliance"
  ],
  "studies": [
    {
      "title": "Tirzepatide vs semaglutide once weekly in type 2 diabetes (SURPASS-2)",
      "authors": "Frías JP, Davies MJ, Rosenstock J et al.",
      "journal": "N Engl J Med. 2021;385(6):503-515.",
      "pmid": "34170647"
    },
    {
      "title": "Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1)",
      "authors": "Jastreboff AM, Aronne LJ, Ahmad NN et al.",
      "journal": "N Engl J Med. 2022;387(3):205-216.",
      "pmid": "35658024"
    },
    {
      "title": "Tirzepatide once weekly for the treatment of obesity (SURMOUNT-5 head-to-head vs semaglutide)",
      "authors": "Aronne LJ, Horn DB, le Roux CW et al.",
      "journal": "N Engl J Med. 2025.",
      "pmid": "40353578"
    },
    {
      "title": "Tirzepatide for obstructive sleep apnea and obesity (SURMOUNT-OSA)",
      "authors": "Malhotra A, Grunstein RR, Fietze I et al.",
      "journal": "N Engl J Med. 2024;391(13):1193-1205.",
      "pmid": "38912654"
    }
  ],
  "related": [
    "semaglutide",
    "liraglutide",
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Weeks 1-4 (start)",
        "dose": "2.5"
      },
      {
        "phase": "Weeks 5-8",
        "dose": "5"
      },
      {
        "phase": "Weeks 9-12",
        "dose": "7.5"
      },
      {
        "phase": "Weeks 13+",
        "dose": "10"
      },
      {
        "phase": "Max dose",
        "dose": "15"
      }
    ],
    "unit": "mg/hét SC",
    "note": "Weekly SC injection. Slow titration 4 wks per dose for GI tolerance. T2DM target 5-15 mg/wk, obesity target 5-15 mg/wk. On GI symptoms hold dose."
  }
}
