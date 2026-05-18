// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.595Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "acarbose",
  "name": "Acarbose",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Alpha-glucosidase inhibitor, Bayer Glucobay. Postprandial glucose reducer, popular mainly in Asian T2DM populations.",
  "description": "Acarbose is a pseudotetrasaccharide that competitively inhibits alpha-glucosidase enzyme on small intestinal brush border, slowing carbohydrate hydrolysis and glucose absorption. This reduces postprandial glucose peaks. Beyond UKPDS, key evidence is STOP-NIDDM trial (Chiasson 2002 Lancet PMID 12086760) showing 25% reduction in prediabetes-to-T2DM progression. Acarbose is non-systemic (gut-active only), so monotherapy hypoglycemia risk is essentially zero. Currently popular mainly in Asia (China, Japan) where high-CHO diet makes postprandial glucose management clinically relevant.",
  "mechanism": "Competitive inhibition of alpha-glucosidase enzyme (sucrase, maltase, glucoamylase) on intestinal brush border. Result: complex carbs break down to glucose more slowly, lowering and delaying postprandial glucose peak.",
  "legalStatus": "EU/HU: prescription only (Glucobay). USA: FDA Rx (Precose).",
  "bioavailability": "<2% (oral, active drug — FDA Precose label; ~35% total radioactivity)",
  "onsetTime": "Acute (per-meal effect), 4-8 weeks (HbA1c)",
  "halfLife": "~2 h (minimally absorbed, mostly bowel-active)",
  "atcCode": "A10BF01",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Type 2 diabetes, postprandial glucose management",
    "Prediabetes (T2DM progression reduction, STOP-NIDDM evidence)"
  ],
  "contraindications": [
    "Chronic bowel disease (IBD, ulcerative colitis)",
    "Abdominal dysfunction, bowel obstruction predisposition",
    "Severe renal impairment (eGFR < 25)"
  ],
  "commonSideEffects": [
    "GI: flatulence (30-60%), abdominal bloating, diarrhea (slow dose escalation advised)",
    "Severe, rare: elevated liver enzymes (ALT > 3x ULN), pneumatosis intestinalis"
  ],
  "cyp450": [
    "Minimally absorbed (<2%)",
    "No CYP metabolism"
  ],
  "crossMolInteractions": [
    "Insulin, sulfonylureas: in hypoglycemia ONLY glucose (NOT sucrose/maltose) provides rapid rise",
    "Digoxin: plasma level may decrease, monitor"
  ],
  "benefits": [
    "HbA1c reduction 0.5-1.0% (modest, postprandial-focused)",
    "Weight neutral (vs sulfonylurea weight gain)",
    "Zero hypoglycemia risk in monotherapy",
    "STOP-NIDDM: T2DM prevention in prediabetes"
  ],
  "studies": [
    {
      "title": "Acarbose for prevention of type 2 diabetes mellitus (STOP-NIDDM)",
      "authors": "Chiasson JL, Josse RG, Gomis R et al.",
      "journal": "Lancet. 2002;359(9323):2072-7.",
      "pmid": "12086760"
    },
    {
      "title": "Acarbose vs metformin in newly-diagnosed T2DM Chinese patients (MARCH)",
      "authors": "Yang W, Liu J, Shan Z et al.",
      "journal": "Lancet Diabetes Endocrinol. 2014;2(1):46-55.",
      "pmid": "24622668"
    },
    {
      "title": "Acarbose cardiovascular evaluation (ACE) in patients with coronary heart disease",
      "authors": "Holman RR, Coleman RL, Chan JCN et al.",
      "journal": "Lancet Diabetes Endocrinol. 2017;5(11):877-886.",
      "pmid": "28917545"
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
        "dose": "25"
      },
      {
        "phase": "Weeks 3-4",
        "dose": "50"
      },
      {
        "phase": "Target (3x/day)",
        "dose": "100"
      }
    ],
    "unit": "mg étkezésenként",
    "note": "Take at MEAL START (with first bite). Slow titration for GI tolerance. Hypoglycemia treatment: ONLY pure glucose (NOT sucrose/maltose) raises blood sugar under acarbose."
  }
}
