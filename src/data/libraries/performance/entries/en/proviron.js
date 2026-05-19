// Bayer Proviron-25 Rx (DE, AT, PL). Sources: Bayer Proviron SmPC (EMA),
// Nieschlag-Behre 2012 "Testosterone: Action, Deficiency, Substitution" (4th ed.),
// Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599,
// Mauss 1984 PMID 6442150 (mesterolone monograph).

export default {
  "id": "proviron",
  "name": "Proviron (Mesterolone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Mesterolone, 1α-methyl-DHT oral androgen Bayer Rx (Proviron-25, registered in DE/AT/PL markets). NOT 17α-alkylated → low hepatotoxicity. During AAS cycle a SHBG suppressor and \"AI mimicker\" adjunct; NOT a standalone bulker.",
  "description": "Proviron (Mesterolone) is a 1α-methyl-dihydrotestosterone derivative oral androgen, synthesized by Schering AG in 1966 and marketed under the Proviron brand (Bayer since 2006). Bayer Rx in Germany, Austria, Poland (Proviron-25, 25 mg tablet) — original clinical indications: male subfertility, delayed puberty, hypogonadism, libido decline in older men. Anabolic:androgenic ratio ~100:30-40 (weak anabolic, moderate androgenic). NOT 17α-alkylated (only 1α-methyl) → low hepatotoxicity. Does NOT aromatize (NOT a CYP19 substrate). HIGH SHBG affinity → \"AI mimicker\" effect: Proviron bound to SHBG reduces the SHBG-T fraction, so free-T (and free-E2) rises alongside stack-partner Test. In bodybuilding context typically AAS-cycle adjunct (25-50 mg/day), NOT a standalone bulker. WADA-banned year-round.",
  "keyInfo": [
    {"label": "Mechanism", "value": "AR agonist (weak) + SHBG suppressor + mild AI"},
    {"label": "Anabolic:Androgenic", "value": "100:30-40"},
    {"label": "Half-life", "value": "12-13 hours"},
    {"label": "Onset", "value": "1-2 h (oral)"},
    {"label": "Legal status", "value": "Bayer Rx (DE/AT/PL), WADA-banned"}
  ],
  "mechanism": "1α-methyl-dihydrotestosterone AR agonist. The 1α-methyl group (Δ1, NOT 17α!) provides oral stability via hepatic first-pass resistance — but at lower extent than 17α-methyl. NOT a CYP19 substrate → does NOT aromatize. NOT a 5α-reductase substrate (already reduced). THREE clinically relevant effects: (1) weak direct AR agonist activity (minimal muscle-building on its own); (2) high SHBG affinity → outcompetes SHBG-bound testosterone, indirectly inducing free-T elevation alongside stack-partner Test; (3) mild aromatase-inhibitor activity → reduces E2 rise during Test stacks. Hence typically used at 25-50 mg/day dose as AAS-cycle adjunct, NOT as standalone bulker.",
  "legalStatus": "DE/AT/PL: Bayer Proviron-25 Rx (25 mg tablet). HU: not registered (rarely import-Rx). USA: not FDA-approved, underground only. WADA-banned year-round (S1.1.a). Available on Polish prescription as Proviron-25.",
  "onsetTime": "1-2 h (oral)",
  "halfLife": "12-13 h",
  "halfLifeActive": "12-13 h",
  "interactionsWith": ["testosterone", "anastrozole", "tamoxifen", "warfarin"],
  "aromatization": "No — 1α-methyl-DHT structure, NOT a CYP19 substrate; clinically also shows mild AI activity via its high SHBG affinity (Nieschlag-Behre 2012 testosterone monograph, Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Low — 1α-methyl group (NOT 17α!) provides weak hepatic first-pass stress; clinical ALT/AST rise rarely documented, much milder than Anavar or Dianabol. Long-term use (Bayer SmPC chronic Rx indication) hepatic profile relatively safe (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:30-40",
  "bindingAffinity": "AR affinity weak (~10% vs testosterone). HIGH SHBG affinity (DHT structural analog) → indirectly frees SHBG-bound testosterone.",
  "detectionWindow": "Mesterolone metabolites (1α-methyl-5α-androstan-3-one metabolite family) urinary 4-5 weeks (Schänzer 1996 GC-MS methods). WADA-accredited.",
  "benefits": [
    "Indirect free-testosterone elevation (via SHBG occupation) during AAS cycle",
    "Mild AI effect → reduces adjunct Anastrozole need during Test stacks",
    "Libido and erectile function improvement (clinical Bayer SmPC indication)",
    "Low hepatotoxicity — long-term application safety profile more favorable",
    "Does NOT aromatize → no gynecomastia risk on its own"
  ],
  "quickStart": [
    "Standalone bulker NOT — Proviron is always an adjunct alongside stack-partner AAS",
    "Typical dose 25-50 mg/day (1-2 tablets), 6-12 weeks",
    "DHT structural analog → hair-loss acceleration in androgenic alopecia",
    "Lipid panel monitoring (HDL may drop, moderately)",
    "Clinical libido-boost effect — Bayer SmPC TRT-adjunct indication is real"
  ],
  "expectations": [
    {"label": "First week", "body": "Onset 1-2 h, acute effect minimal. Subjective libido increase and free-T feeling (\"better mood\") common after 3-5 days."},
    {"label": "Week 3-4", "body": "Alongside stack-partner Test, free-T elevation marked, E2 elevation moderate (Proviron AI effect). Esthetic \"hardening\" mild (Proviron alone is NOT a hardening steroid)."},
    {"label": "End of week 8-12", "body": "Maximum adjunct effect. Lipid panel HDL ~10-15% drop expected. HPTA suppression moderate when standalone (Proviron alone is NOT a complete HPTA suppressor)."}
  ],
  "quality": {
    "pure": [
      "Bayer Proviron-25 original Rx tablet, 25 mg (registered in DE/AT/PL markets)",
      "UGL tablet: HPLC-tested source mandatory, less commonly counterfeited than Anavar/Primobolan (lower market value)"
    ],
    "caution": [
      "Not a bulker on its own — user expectation-reality gap is the most common frustration source",
      "Hair-loss acceleration in androgenic alopecia (DHT structural analog)",
      "Lipid disturbance: HDL drop (moderate)",
      "Voice deepening and hirsutism in women (virilization risk even at lower doses)"
    ],
    "avoid": [
      "Family history of androgenic alopecia",
      "Prostate hypertrophy, prostate cancer (DHT analog)",
      "Female use (low anabolic, high virilization risk ratio not esthetically worth it)",
      "Bulking/mass gain goal — Proviron is NOT a standalone bulker"
    ]
  },
  "interactions": [
    "Testosterone base: standard stack pairing, indirect free-T elevation via SHBG occupation",
    "Anastrozole (AI): combinable, Proviron's mild AI effect allows lower Anastrozole dose",
    "Tamoxifen (SERM): combinable for gyno prevention alongside Test-aromatizing AAS stack partners",
    "Warfarin: anticoagulant effect may be potentiated (moderately), INR monitor"
  ],
  "studies": [
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"},
    {"title": "Effect of mesterolone treatment on pituitary, thyroid, and gonadal function", "authors": "Mauss J, Borsch G, Bormacher K, Richter E, Leyendecker G, Nocke W.", "journal": "Acta Endocrinol (Copenh). 1975;78(2):373-384.", "pmid": "168752"},
    {"title": "Mesterolone for male infertility", "authors": "Aafjes JH, van der Vijver JC, Schenck PE.", "journal": "Lancet. 1981;317(8221):683.", "pmid": "6109840"},
    {"title": "Bayer Proviron-25 SmPC (Summary of Product Characteristics)", "authors": "Bayer AG", "journal": "EMA / German Federal Institute for Drugs (BfArM)", "pmid": null}
  ],
  "faq": [
    {"q": "Is it true Proviron is an \"AI mimicker\"?", "a": "Partially. Its high SHBG affinity reduces the SHBG-bound testosterone fraction, which indirectly reduces SHBG-bound estradiol levels too. PLUS it has direct, weak aromatase-inhibitor activity. BUT the effect is NOT as strong as Anastrozole or Letrozole — at high Test doses (>500 mg/week) Proviron alone is NOT enough for E2 control, only Anastrozole dose reduction."},
    {"q": "Why is it NOT a good standalone bulker?", "a": "Anabolic activity is weak (~100 vs 320 Anavar vs 400 Superdrol). After standalone Proviron cycle 25-50 mg/day for 8 weeks typically 1-2 kg lean mass gain expected (Anavar 4-5 kg, Dianabol 8-10 kg) — markedly low. Proviron is always for adjunct role, NOT a bulker."},
    {"q": "Legally available on the Polish market?", "a": "Yes, Bayer Proviron-25 (25 mg tablet) is Rx on the Polish market, prescribable by Polish physicians for male infertility, hypogonadism, libido decline indications. Not registered on the HU market, not prescribable by Hungarian prescription — but import-Rx rarely obtainable."},
    {"q": "Hair-loss risk?", "a": "Moderate-high if genetic predisposition for androgenic alopecia. Proviron is a 1α-methyl-DHT structural analog that bypasses scalp 5α-reductase and directly activates the hair follicle AR. Finasteride does NOT protect (Proviron is already reduced). The only protection: if genetically sensitive, DO NOT use DHT-derivative AAS."},
    {"q": "Is Bayer Proviron safe long-term?", "a": "Per Bayer SmPC for male infertility and hypogonadism indications, long-term (12+ months) continuous use is documented safe with proper monitoring (lipid, ALT/AST, PSA). BUT bodybuilding off-label supraphysiological doses (100+ mg/day) do NOT belong here — Bayer therapeutic 25-75 mg/day dose range is what the safety data is interpretable within."}
  ],
  "related": ["masteron", "primobolan", "anavar-info", "testosterone-info", "winstrol-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 75},
    "unit": "mg/day (oral, 1-2x split)",
    "note": "Adjunct dose 25-50 mg/day, max 75 mg/day. Typically 6-12 weeks alongside Test stack partner. TUDCA NOT mandatory (low hepatotoxicity). Lipid monitor + PSA (over 30) recommended. PCT only if standalone (Test-stack PCT is sufficient)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hormone panel: Total T, Free T, E2, LH, FSH, SHBG (baseline critical for Proviron mechanism assessment), Prolactin. Lipid panel (LDL/HDL/TG). Hepatic: ALT/AST/GGT. PSA (over 30).",
      "purpose": "SHBG baseline critical: must re-measure after 4-6 weeks to assess Proviron effect. Lipid baseline for HDL drop trend detection."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 4-6, mid-cycle",
      "markers": "Total T, Free T (the main marker of Proviron effect), SHBG (drop expected), E2, lipid panel (HDL), hepatic (ALT/AST <2x normal expected for Proviron-only cycle).",
      "purpose": "Free-T elevation is indicator of Proviron activity (SHBG-drop-driven). E2 based on Test stack partner. ALT/AST elevation mild — if >3x normal, suspect additional AAS."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "From last tablet +1-2 days PCT start (mild HPTA suppression on its own). Stack-partner Test PCT protocol dominates.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG (recovery), lipid panel.",
      "purpose": "HPTA recovery for Proviron-only cycle typically 4-6 weeks, fast. With stack-partner Test, PCT depends on the longer Test-ester half-life."
    },
    "cruise": {
      "label": "On cruise",
      "timing": "During TRT-Test cruise, Proviron adjunct 25-50 mg/day typically acceptable, monitor every 6-8 weeks",
      "markers": "Lipid panel, SHBG, Total T, Free T, E2, PSA (over 30).",
      "purpose": "Alongside TRT cruise, Proviron is a \"libido boost\" adjunct: free-T elevation and mild AI effect. Long-term continuous use tolerable (per Bayer SmPC), but lipid + PSA monitor every 6-8 weeks."
    }
  }
}
