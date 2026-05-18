// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.594Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "berberin",
  "name": "Berberin",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Plant alkaloid (Berberis aristata, Coptis chinensis), AMPK activator. Marketed as \"natural metformin\" but pharmacological positioning limited. NOT Rx, OTC supplement.",
  "description": "Berberine is an isoquinoline alkaloid used for centuries in traditional Chinese (Huang Lian) and Ayurvedic (Daruharidra) herbal therapies. Marketed as \"natural metformin\" due to AMPK activation, but clinical evidence is modest and variable in quality. A 2008 RCT (Yin J 2008 PMID 18397984) showed 500 mg 3x/day for 3 months produced -1.0% HbA1c reduction in T2DM (Metformin-comparable). A 2012 meta-analysis (Lan 2012 PMID 22377268) confirmed significant dyslipidemia + hypoglycemic effects, but most trial quality was low. Bioavailability poor (~5%), large doses needed. NOT FDA-approved drug but dietary supplement — significant quality and dose-precision uncertainty.",
  "mechanism": "AMPK activator (like metformin), inhibiting hepatic gluconeogenesis. Secondary effects: gut flora modulation (Lactobacillus, Bifidobacterium increase), LDL reduction via PCSK9 suppression, anti-inflammatory.",
  "legalStatus": "EU/HU/USA: dietary supplement (NOT a drug). OTC available. In China also marketed as Rx for bacterial diarrhea.",
  "onsetTime": "2-4 weeks (HbA1c effect)",
  "halfLife": "~5 h (poor oral bioavailability ~5%)",
  "atcCode": "No ATC assigned (not a registered drug)",
  "prescriptionStatus": "NOT prescription (dietary supplement)",
  "indications": [
    "T2DM adjunct therapy (off-label evidence, NOT FDA indication)",
    "Dyslipidemia (LDL reduction)",
    "Metabolic syndrome, prediabetes"
  ],
  "contraindications": [
    "Pregnancy, lactation (uterotonic + bilirubin displacement in newborn, kernicterus risk)",
    "Severe hepatic or renal impairment"
  ],
  "commonSideEffects": [
    "GI: abdominal discomfort, diarrhea, constipation (~30%)",
    "Headache, dizziness (rare)"
  ],
  "cyp450": [
    "CYP3A4 substrate + INHIBITOR (moderate)",
    "CYP2D6 inhibitor",
    "P-gp inhibitor"
  ],
  "crossMolInteractions": [
    "Cyclosporine, tacrolimus (CYP3A4): plasma levels may rise, monitor",
    "Metformin: synergistic but redundant mechanism"
  ],
  "benefits": [
    "HbA1c reduction ~1.0% (Yin 2008 RCT, metformin-comparable)",
    "LDL reduction 12-25% (via PCSK9 suppression)",
    "OTC, affordable"
  ],
  "studies": [
    {
      "title": "Efficacy of berberine in patients with type 2 diabetes mellitus",
      "authors": "Yin J, Xing H, Ye J.",
      "journal": "Metabolism. 2008;57(5):712-7.",
      "pmid": "18397984"
    },
    {
      "title": "Meta-analysis of the effect and safety of berberine in the treatment of T2DM, hypertension, and hyperlipidemia",
      "authors": "Lan J, Zhao Y, Dong F et al.",
      "journal": "J Ethnopharmacol. 2015;161:69-81.",
      "pmid": "25498346"
    },
    {
      "title": "Berberine and the gut microbiota: implications for diabetes and obesity",
      "authors": "Zhang X, Zhao Y, Zhang M et al.",
      "journal": "Front Pharmacol. 2020;11:588884.",
      "pmid": "33240094"
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 500,
      "medium": 1000,
      "high": 1500
    },
    "unit": "mg/nap",
    "note": "Standard 500 mg 2-3x/day with meals (high dose due to low bioavailability). Dietary supplement, significant quality uncertainty — choose third-party-lab-tested brands (USP, NSF certification). Does NOT replace metformin under medical indication."
  }
}
