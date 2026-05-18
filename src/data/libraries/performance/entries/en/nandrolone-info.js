// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.957Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "nandrolone-info",
  "name": "Nandrolone",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Nandrolone Decanoate (Deca-Durabolin), 19-nor AAS. Classic \"bulking\" AAS with joint recovery effect.",
  "description": "Nandrolone Decanoate is a 19-nor testosterone derivative, long-acting injectable AAS. **Ester variants**: Decanoate (Deca-Durabolin) ~15-day t1/2, depo-style slow stable release, 1x weekly injection sufficient, more water retention; Phenylpropionate (NPP) ~5-day t1/2, faster on/off profile, 2x weekly injection, anecdotally less water retention. Clinically used for anemia and cachexia. In bodybuilding it is used in \"bulking\" cycles for muscle mass and joint recovery (collagen synthesis elevation). Aromatase converts it to estrogen minimally (~10% vs testosterone), and 5α-reductase forms dihydronandrolone with only ~20% AR activity (vs DHT, a STRONG AR agonist) — **this is the physiological prostate-sparing basis, one of Nandrolone main advantages over Testosterone**. \"Deca-dick\" libido drop is a common complaint (prolactin elevation); \"Deca-blues\" mood anecdote: chronic 19-nor use suspected of dopamine-serotonin balance shift (depressive symptoms reported in some users after 3+ months).",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "19-nor AAS, AR agonist, weak aromatization"
    },
    {
      "label": "Half-life",
      "value": "15 days (decanoate)"
    },
    {
      "label": "Anabolic ratio",
      "value": "125:37"
    },
    {
      "label": "Legal status",
      "value": "USA: Schedule III. HU/EU: Rx."
    }
  ],
  "mechanism": "19-nor AAS, direct AR agonist. Aromatase converts to estrogen minimally (~10% vs testosterone). 5α-reductase forms dihydronandrolone with only ~20% AR activity (vs DHT, a STRONG AR agonist) — physiologically prostate-sparing, one of Nandrolone main pharmacological advantages. Secondarily a partial progesterone-receptor agonist (prolactin elevation).",
  "legalStatus": "USA: Schedule III. HU/PL/EU: Rx (Deca-Durabolin pharmacy). WADA: banned.",
  "onsetTime": "2-3 weeks",
  "halfLife": "15 days (decanoate)",
  "interactionsWith": [
    "cabergoline (prolactin)",
    "aromatase inhibitors"
  ],
  "wadaStatus": "banned",
  "androgenicRatio": "125:37",
  "benefits": [
    "Muscle mass gain in bulking cycle",
    "Joint recovery: collagen synthesis effect",
    "Prostate side effects rarer (weak DHT conversion)",
    "Collagen synthesis and connective tissue support: nandrolone directly elevates type-1 procollagen synthesis (Geusens 1995 review PMID 7770048), chronic low dose (100-150 mg/week) documented for joint pain relief"
  ],
  "studies": [
    {
      "title": "Nandrolone decanoate: pharmacology, oxidation, and uses",
      "authors": "Geusens P.",
      "journal": "Rheumatol Int. 1995;15(1):27-34.",
      "pmid": "7770048"
    },
    {
      "title": "Effects of nandrolone decanoate on serum lipoprotein profile",
      "authors": "Hartgens F, Rietjens G, Keizer HA et al.",
      "journal": "BJSM. 2004;38(3):253-259.",
      "pmid": "15039244"
    },
    {
      "title": "Anabolic steroid use and erectile dysfunction",
      "authors": "Coward RM, Rajanahally S, Kovac JR et al.",
      "journal": "J Urol. 2013;190(6):2200-2205.",
      "pmid": "23764081"
    }
  ],
  "related": [
    "testosterone-info",
    "trenbolone-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 2,
      "medium": 4,
      "high": 6
    },
    "unit": "mg/hét",
    "note": "Deca-bridge 100-150 mg/week (below Low range), bulking 300-600 mg/week. Decanoate ester has 15-day half-life, 1x weekly injection sufficient. \"Deca-dick\" libido drop prevention: cabergoline 0.25 mg 2x/week + Testosterone base. Prolactin monitoring mandatory."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before",
      "markers": "Full CBC, lipid panel, liver function, hormone panel (Total T, Free T, E2, LH, FSH, SHBG, Prolactin), HbA1c, renal function, PSA.",
      "purpose": "Baseline. Elevated prolactin baseline is a contraindication."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 6-8",
      "markers": "Lipid panel, liver function, E2, Prolactin (Deca-dick prevention), BP.",
      "purpose": "Prolactin >25 ng/mL: cabergoline 0.25 mg 2x/week. HDL drastic drop indicates cycle interruption."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "3 weeks after last injection + week 12-16",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, Prolactin, lipid recovery.",
      "purpose": "Deca suppression documented for 12-16 weeks; PCT longer than short-half-life AAS."
    },
    "cruise": {
      "label": "On Cruise",
      "timing": "Every 6 weeks",
      "markers": "Total T, E2, Prolactin, lipid panel, HbA1c, PSA.",
      "purpose": "Long-term Deca cruising possible at low dose (100-150mg/week), but prolactin monitoring mandatory."
    }
  }
}
