// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.956Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "winstrol-info",
  "name": "Winstrol",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Stanozolol, 17α-alkylated DHT derivative. Classic \"cutting\" AAS, SHBG suppressor.",
  "description": "Stanozolol (Winstrol) is a DHT derivative, a 17α-alkylated oral or injectable AAS. The SHBG-reduction mechanism is direct hepatic SHBG-mRNA synthesis inhibition (Pugeat 1981 evidence), raising the free testosterone fraction — significant andro-amplification even on TRT baseline. Does not aromatize, so no estrogenic side effects. Clinically developed for hereditary angioedema and anemia; in sports it is used in \"cutting\" cycles for muscle sparing. The Ben Johnson 1988 Olympic scandal involved this compound. **Pharmacological positioning**: force-amplifier and tissue-quality modulator more than a hypertrophy builder — strength gain is often disproportionate to visible muscle gain. **Connective tissue warning (Liow 1995 PMID 7551762)**: stanozolol-associated tendon-rupture cases are well documented in athlete literature; muscle strength rises faster than tendon collagen crosslink maturity, creating rupture risk especially in sprint/explosive sports.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "AR agonist + SHBG suppressor"
    },
    {
      "label": "Half-life",
      "value": "9 h (oral), 24 h (injectable)"
    },
    {
      "label": "Anabolic ratio",
      "value": "320:30"
    },
    {
      "label": "Legal status",
      "value": "USA: FDA-approved (Winstrol Rx). EU: restricted Rx."
    }
  ],
  "mechanism": "AR agonist with DHT-like character. Directly INHIBITS hepatic SHBG-mRNA synthesis → free testosterone fraction rise (andro-amplification). Does not aromatize (DHT derivative), does not convert to DHT.",
  "legalStatus": "USA: FDA Schedule III. HU/EU: Rx. WADA: banned.",
  "onsetTime": "7-14 days",
  "halfLife": "9 h (oral)",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "warfarin"
  ],
  "aromatization": "No — heterocyclic pyrazole A-ring, NOT a CYP19 substrate; SHBG reduction is the main estrogen-independent effect (Schänzer 1996)",
  "hepatotoxicity": "High — 17α-alkylated; both oral and injectable forms hepatotoxic, transaminase elevation common in cycles >6 weeks (Hartgens-Kuipers 2004)",
  "wadaStatus": "banned",
  "androgenicRatio": "320:30",
  "benefits": [
    "Cutting cycle muscle sparing in caloric deficit",
    "SHBG reduction raises free T fraction",
    "Strength gain for sprinters and athletes",
    "Red blood cell + aerobic capacity boost: erythropoietic effect documented (Pope 2014 review), endurance-performance enhancement in sub-elite athletes"
  ],
  "studies": [
    {
      "title": "Effects of stanozolol on physiological measurements in healthy men",
      "authors": "Stergiopoulos K, Brennan JJ, Mathews R et al.",
      "journal": "Med Sci Sports Exerc. 2008;40(4):574-579.",
      "pmid": "18317369"
    },
    {
      "title": "Anabolic steroid abuse and tendon injuries",
      "authors": "Liow RY, Tavares S.",
      "journal": "BJSM. 1995;29(2):77-79.",
      "pmid": "7551762"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs",
      "authors": "Pope HG Jr, Wood RI, Rogol A et al.",
      "journal": "Endocr Rev. 2014;35(3):341-375.",
      "pmid": "24423981"
    }
  ],
  "related": [
    "testosterone-info",
    "trenbolone-info",
    "anavar-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 0.4,
      "medium": 0.7,
      "high": 1
    },
    "unit": "mg/nap",
    "note": "Oral 30-80 mg/day (Low-High range), injectable Winstrol Depot 50 mg EOD. SHBG suppression raises free T fraction. High hepatotoxicity (17α-alkylated). Max 6-8 week cycle. PCT needed."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2 weeks before",
      "markers": "Hepatic priority: ALT, AST, GGT, bilirubin. Lipid panel, hormone panel, renal function, CBC.",
      "purpose": "Liver baseline critical on 17α-alkylated AAS."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 3-4",
      "markers": "ALT, AST, GGT, bilirubin, lipid panel (HDL drop expected), E2, BP.",
      "purpose": "Emergency detection. ALT/AST >3x indicates cycle interruption."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT week 4 + 8-12",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatic + lipid recovery.",
      "purpose": "Verify HPTA + hepatic recovery."
    },
    "cruise": {
      "label": "On Cruise",
      "timing": "Every 6 weeks",
      "markers": "Hepatic + lipid + hormone panel + EKG reference.",
      "purpose": "Long-term Winstrol cruising NOT recommended due to hepatotoxicity."
    }
  },
  "variants": [
    {
      "routeId": "oral",
      "routeLabel": "Stanozolol oral (tablet)",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: FDA-approved Rx Winstrol tablet (Pfizer Pharmacia/Sanofi-Aventis discontinued 2010); today UGL market dominant. HU/EU: Rx limited. WADA-banned.",
      "bioavailability": "~85-95% (oral, 17α-alkylated first-pass-resistant)",
      "onsetTime": "1-2 h (oral, fast absorption)",
      "halfLife": "9 hours (oral)",
      "halfLifeActive": "9 h",
      "detectionWindow": "3-4 weeks urinary (parent + 3'-OH-stanozolol metabolite, WADA-accredited).",
      "aromatization": "No — heterocyclic pyrazole A-ring, NOT a CYP19 substrate.",
      "hepatotoxicity": "High — 17α-alkylated, hepatic first-pass stress; ALT/AST 2-4x rise common at 6+ week cycle (Hartgens-Kuipers 2004).",
      "quality": {
        "pure": [
          "Clear white, scored tablet (5 mg or 10 mg classic UGL dosing)",
          "HPLC-tested source mandatory — Winstrol tablet often counterfeited"
        ],
        "caution": [
          "Hepatotoxicity (ALT/AST 2-4x rise after 6+ weeks common)",
          "Lipid disturbance: HDL drastic drop (>30% vs baseline)",
          "Joint dryness (\"Winstrol joint pain\") — subjectively excruciating",
          "Tendon rupture risk (Liow 1995 PMID 7551762 case reports in sprinter/explosive sports)"
        ],
        "avoid": [
          "Any existing liver disorder (fatty liver, hepatitis)",
          "Concurrent alcohol or paracetamol use",
          "Sprinter/explosive sport athletes during training cycle (tendon rupture risk)"
        ]
      },
      "interactions": [
        "Other 17α-alkylated AAS (Anadrol, Dianabol, Superdrol) together extremely hepatotoxic",
        "TUDCA 500 mg/day + NAC 1200 mg/day mandatory",
        "PCT starts last tablet +1-2 days"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 30,
          "medium": 50,
          "high": 80
        },
        "unit": "mg/day (oral, 1-2x split)",
        "note": "30-80 mg/day, max 8 weeks cycle. TUDCA + NAC mandatory. Female dose max 5-10 mg/day. PCT last tablet +1-2 days."
      }
    },
    {
      "routeId": "aq",
      "routeLabel": "Stanozolol aqueous suspension (IM, Winstrol Depot)",
      "image": "/performance/water-vial.png",
      "legalStatus": "Sanofi Winstrol Depot (Stanozolol Aqueous Suspension 50 mg/ml, EU Rx limited). USA: today UGL. WADA-banned.",
      "bioavailability": "~95-100% (IM, NO depot, direct absorption from microcrystals)",
      "onsetTime": "12-24 h (IM, slow microcrystalline depot release)",
      "halfLife": "~24 h (parent Stanozolol)",
      "halfLifeActive": "24 h",
      "detectionWindow": "4-6 weeks urinary (longer than oral due to depot absorption).",
      "aromatization": "No — heterocyclic pyrazole A-ring, NOT a CYP19 substrate for either form.",
      "hepatotoxicity": "Moderate-high — surprisingly injectable Winstrol is also hepatotoxic due to 17α-alkyl group (NOT caused by first-pass, but by the molecule's systemic effect). Clinically milder than oral, BUT NOT zero.",
      "quality": {
        "pure": [
          "Clear water-suspended white microcrystals, 1ml ampule, opalescent before shaking",
          "Rx-grade: Sanofi Winstrol Depot 50mg/ml (EU, rare)"
        ],
        "caution": [
          "EXTRA painful injection — crystals physically irritate (PIP, common abscess risk)",
          "EOD injection needed (~24 h half-life)",
          "Hepatotoxicity moderate (17α-alkyl effect present systemically too)",
          "Joint dryness same as oral"
        ],
        "avoid": [
          "Pain sensitivity (crystals cause significant PIP + abscess risk)",
          "Aseptic injection technique lacking",
          "Any liver disorder (moderate hepatotoxicity)"
        ]
      },
      "interactions": [
        "Combination with other AAS potentiates HPTA suppression",
        "TUDCA 500 mg/day recommended (due to moderate hepatotoxicity)",
        "PCT starts last injection +5-7 days"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/EOD (IM)",
        "note": "50-100 mg EOD, max 8 weeks. TUDCA recommended. Aseptic technique critical (abscess risk). PCT last injection +5-7 days."
      }
    }
  ],
  "defaultVariant": "oral",
  "anecdote": "Anecdotal reports describe Winstrol less in terms of dramatic growth and more as producing a distinct dense, tight, performance-enhancing character — with strength increases sometimes seeming disproportionate to visible muscle gain. A recurring theme in community accounts is that Winstrol produces noticeable shifts in muscular hardness, separation, and recomposition, which helped establish its long-standing reputation in physique-focused use. It is frequently described as behaving more like a force-output and tissue-quality modulator than a classic hypertrophy anabolic, giving it a distinct pharmacological niche. At the same time, users emphasize that the 'dry, refined' image can obscure important tradeoffs — particularly harsh lipid effects, hepatic stress in oral form, HPTA suppression, blood pressure concerns, and frequent reports of connective-tissue or joint-related complaints. Winstrol is sometimes underestimated because it does not present as a dramatic mass drug, when in practice it exerts potent effects on tissue performance and presentation — which is largely why it remains one of the more specialized and respected legacy compounds."
}
