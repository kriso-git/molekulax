// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.957Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "methylstenbolone",
  "name": "Methylstenbolone",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Designer prohormone (2,3α-epithio-17α-methylstenbolone). Strong AR agonist with high hepatotoxicity.",
  "description": "Methylstenbolone (M-Sten, Ultradrol, Methyl-D) is a **designer prohormone with chemical structure 2β,17β-dimethyl-2,3α-epithio-5α-androstane**. The 2,3α-epithio group replaces the aromatizable A-ring → no E2 conversion, hence a clean dry/hard muscle profile. In the US it was sold 2008-2012 as a dietary supplement under brand names like Iron Mag Labs Ultradrol, Antaeus Labs Methyl-D and others. FDA warning letters 2012-2013 targeted multiple manufacturers, then **DASCA 2014** classified it as Schedule III controlled. The **Robles-Diaz 2015 (Liver Int, PMID 25867306)** acute liver failure case-series analysis documented fulminant cholestatic hepatitis at 5-15 mg/day over 3-6 weeks in healthy young men, with several cases progressing to liver transplant. Hepatotoxicity high (17α-methylated oral), prostate side effects more pronounced than Superdrol.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "AR agonist (anabolic 660 / androgenic 660)"
    },
    {
      "label": "Half-life",
      "value": "8-12 hours"
    },
    {
      "label": "Legal status",
      "value": "USA: DASCA 2014 controlled. EU: not uniformly regulated."
    }
  ],
  "mechanism": "Strong AR agonist. **AR selectivity**: the 2,3α-epithio group blocks both aromatase affinity AND 5α-reductase conversion, giving a clean AR-only agonist profile (no E2 or DHT conversion). **The SYMMETRIC 660:660 ratio means prostate androgenicity is AS STRONG as the anabolic effect** — so prostate side effects (acne, aggression, androgenic alopecia, prostate hypertrophy) are more pronounced than Superdrol (400:20 ratio). The 17α-methyl group provides oral bioavailability but causes hepatotoxicity.",
  "legalStatus": "USA: controlled since DASCA 2014. EU: not uniformly regulated, illegal without prescription. WADA: banned.",
  "onsetTime": "7-10 days",
  "halfLife": "8-12 h",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "liver hepatotoxins"
  ],
  "aromatization": "No — 2α,17α-dimethyl designer steroid, NOT a CYP19 substrate; \"dry gains\" typical (Cohen 2014 NEJM letter designer AAS)",
  "hepatotoxicity": "Very high — designer 17α-alkylated, severe DILI cases documented (acute hepatitis within 4-6 weeks) (PubMed Robles-Diaz 2015)",
  "wadaStatus": "banned",
  "androgenicRatio": "660:660",
  "benefits": [
    "Strong muscle gain with dry, hard, vascular look (3-5 kg / 3-4 weeks, Superdrol-like dry profile)",
    "Marked strength gain: bench/deadlift PRs documented after week 2-3",
    "No aromatization AND no DHT conversion (clean AR agonist profile)"
  ],
  "studies": [
    {
      "title": "Designer steroid hepatotoxicity: acute liver failure from methylstenbolone",
      "authors": "Robles-Diaz M, Gonzalez-Jimenez A, Medina-Caliz I et al.",
      "journal": "Liver Int. 2015;35(11):2483-2493.",
      "pmid": "25867306"
    },
    {
      "title": "Designer steroids in dietary supplements",
      "authors": "Geyer H, Schänzer W, Thevis M.",
      "journal": "Mol Cell Endocrinol. 2014;464:99-108.",
      "pmid": "24882754"
    }
  ],
  "related": [
    "superdrol"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 4,
      "medium": 8,
      "high": 16
    },
    "unit": "mg/nap",
    "note": "Max 4 week cycle, no longer. Split into 2 daily doses given 8-12 h half-life. 17α-methylated oral; ALT/AST >2x rise = IMMEDIATE stop. TUDCA 750 mg/day mandatory. PCT (Clomid + Nolvadex) needed."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2 weeks before",
      "markers": "Hepatic priority + lipid + hormone panel.",
      "purpose": "Liver baseline critical."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "End of week 2",
      "markers": "ALT, AST, GGT, bilirubin, lipid panel.",
      "purpose": "ALT/AST >2x = IMMEDIATE stop."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT week 4 + 8-12",
      "markers": "Total T, LH, FSH, E2, hepatic + lipid recovery.",
      "purpose": "Verify HPTA + hepatic recovery."
    },
    "cruise": null
  }
}
