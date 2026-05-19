// Designer AAS — limited peer-reviewed evidence. Sources: Pope-Kanayama 2014
// PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599, USADA designer steroid
// alerts 2018-2024, PubChem 1-Testosterone Cypionate (CID 16219612),
// Llewellyn 2017 "Anabolics" (UGL reference). Phenomenological + extrapolated
// from related compounds (Boldenone, Methenolone).

export default {
  "id": "dhb",
  "name": "DHB (Dihydroboldenone)",
  "image": "/performance/oil-vial-orange.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "1-Testosterone (Δ1-DHT) Cypionate, injectable designer AAS. 5α-reduced analog of Boldenone. Never licensed as Rx, UGL market only. Does NOT aromatize, NOT 17α-alkylated, low hepatotoxicity — but notorious for severe PIP (injection site pain).",
  "description": "DHB (Dihydroboldenone, or 1-Testosterone) is a designer anabolic steroid: the 5α-reduced analog of Boldenone (Equipoise), chemically 1-testosterone (17β-hydroxy-androst-1-en-3-one). Available exclusively in UGL underground market format, typically cypionate-esterified as an oily IM suspension (DHB-Cyp 100 mg/ml). Never licensed for human or veterinary Rx — no FDA/EMA approval whatsoever. Anabolic:androgenic ratio ~200:100 (high anabolic, high androgenic). NOT 17α-alkylated → low hepatotoxicity. NOT a CYP19 substrate → does NOT aromatize (Boldenone aromatizes, but DHB is already 5α-reduced, so does not). Notorious for extreme severe injection site pain (PIP) — high crystallinity is the classic cause, often causing 3-5 days of local swelling and pain. Limited peer-reviewed evidence: most clinical pharmacology data is extrapolated from Boldenone and Methenolone class data (Pope-Kanayama 2014 designer AAS review). WADA-banned year-round.",
  "keyInfo": [
    {"label": "Mechanism", "value": "AR agonist, 1-Testosterone (Δ1-DHT), NOT aromatized"},
    {"label": "Anabolic:Androgenic", "value": "200:100"},
    {"label": "Half-life", "value": "8-10 days (Cypionate ester)"},
    {"label": "Onset", "value": "48-72 h (IM)"},
    {"label": "Legal status", "value": "UGL only, no Rx approval. WADA-banned."}
  ],
  "mechanism": "1-Testosterone (Δ1-DHT) AR agonist. The Δ1 double bond is inherited from Boldenone, while 5α-reduction provides DHT-like character. High AR affinity (~200% vs testosterone in vitro). NOT a CYP19 substrate (Boldenone aromatizes, DHB is already 5α-reduced) → does NOT aromatize to estrogen, no gynecomastia risk. NOT 17α-alkylated → minimal hepatic stress. The 17β-OH-cypionate ester provides slow hydrolysis (~8-10 days), giving depot-stable plasma levels.",
  "legalStatus": "Never licensed as human or veterinary Rx — UGL underground market only. USA: USADA designer steroid alert (Schedule III by analogue). EU/HU/PL: controlled AAS analog, illegal without prescription, WADA-banned year-round (S1.1.a).",
  "onsetTime": "48-72 h (IM, Cypionate ester)",
  "halfLife": "8-10 d (Cypionate ester)",
  "halfLifeActive": "~24-36 h (depot-driven, free 1-testosterone after hydrolysis)",
  "interactionsWith": ["testosterone", "anastrozole", "finasteride", "warfarin"],
  "aromatization": "No — 5α-reduced structure, NOT a CYP19 substrate; the parent Boldenone aromatizes, but DHB is already reduced → clinically no E2 elevation expected (Pope-Kanayama 2014 PMID 24423981 designer AAS review, extrapolated Boldenone-Methenolone data)",
  "hepatotoxicity": "Low — parent steroid, NOT 17α-alkylated; injected form bypasses first-pass. Hepatic profile similar to Masteron-Primobolan class (extrapolated, DHB-specific peer-reviewed data missing; Hartgens-Kuipers 2004 PMID 15233599 c17-non-AA injectable AAS class data).",
  "wadaStatus": "banned",
  "androgenicRatio": "200:100",
  "bindingAffinity": "High AR affinity (~200% vs testosterone in vitro, extrapolated). SHBG affinity moderate-high (DHT structural character).",
  "detectionWindow": "DHB metabolites (1-androstene-3,17-dione + 1-testosterone metabolite family) urinary 6-9 months (extra long detection due to Cypionate ester, USADA designer-steroid-alert data). WADA-accredited LC-MS/MS.",
  "benefits": [
    "High AR affinity direct anabolic effect (lean mass gain)",
    "Does NOT aromatize → no E2 side effects (gynecomastia, minimal water retention)",
    "Low hepatotoxicity (NOT 17α-alkylated, IM form)",
    "Esthetic \"hard\" look (Masteron-like hardening, slightly wetter than Masteron due to higher androgenic activity)"
  ],
  "quickStart": [
    "BE READY: DHB is notorious for extreme PIP (injection site pain) — 3-5 days of local swelling and pain common; apply HEAT-PAD on glute after injection",
    "Only for experienced users — NOT a first cycle",
    "Typically stacked with testosterone base + third AAS (Test-Cyp + DHB-Cyp + Tren-E is a common example)",
    "DHT structural analog → STRICT hair-loss risk in genetic predisposition",
    "PCT (Clomid + Nolvadex 4-6 weeks) mandatory; from last DHB injection +14-21 days"
  ],
  "expectations": [
    {"label": "First week", "body": "Acute effect minimal. The first injection often comes with strong PIP, 3-5 days of local pain. Esthetic change not yet perceptible."},
    {"label": "Week 3-4", "body": "Steady-state Cypionate. Subjectively \"harder\" muscle tone, vascular venosity. Lean mass gain 1-2 kg, SHBG drops."},
    {"label": "End of week 10-12", "body": "Maximum esthetic effect. Lipid panel HDL ~20-30% drop expected. Hair-loss-prone users may see accelerated miniaturization."}
  ],
  "quality": {
    "pure": [
      "Clear yellowish-brown or amber oil, 10ml vial, sterile filtered (DHB-Cyp 100 mg/ml classical UGL concentration)",
      "UGL HPLC-tested source MANDATORY — DHB often counterfeited (Test-Cyp or Boldenone-Cyp substitution)"
    ],
    "caution": [
      "PIP (injection site pain) extreme — the most common user complaint, many can't train the target muscle for 3-5 days after",
      "Hair-loss acceleration in androgenic alopecia (DHT structural analog with high androgenic activity)",
      "Lipid disturbance: HDL drop, LDL rise (moderate-high, more cumulative than Masteron-Primobolan due to higher androgenic activity)",
      "Limited peer-reviewed evidence — long-term safety profile NOT known from clinical trials"
    ],
    "avoid": [
      "Anyone who cannot tolerate strong PIP (alternative: Masteron-Enan or Primobolan-Enan with less PIP)",
      "Family history of androgenic alopecia",
      "Prostate hypertrophy, prostate cancer (high androgenic activity)",
      "Female use (extreme virilization risk)",
      "Cardiovascular risk (family history, high LDL)",
      "Any \"first cycle\" — DHB is always a stack partner, never a standalone first AAS"
    ]
  },
  "interactions": [
    "Testosterone-Cyp stack: ester half-life matching, weekly 1-2x injection (same ester)",
    "Trenbolone-E stack: \"hardcore cutting\" 10-12 weeks, all three do NOT aromatize",
    "Anastrozole (AI): NOT needed for DHB-only cycle (no aromatization); during Test-stack based on stack partner",
    "Finasteride: does NOT inhibit DHB effect (DHB is already 5α-reduced)",
    "Warfarin: anticoagulant effect may be potentiated, INR monitor"
  ],
  "studies": [
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"},
    {"title": "Metabolism of anabolic androgenic steroids", "authors": "Schänzer W.", "journal": "Clin Chem. 1996;42(7):1001-20.", "pmid": "8616181"},
    {"title": "Anabolic-androgenic steroid dependence: an emerging disorder", "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.", "journal": "Addiction. 2009;104(12):1966-78.", "pmid": "19922565"},
    {"title": "Designer steroids: over-the-counter supplements and their androgenic component", "authors": "Kazlauskas R.", "journal": "Mol Cell Endocrinol. 2010;316(1):2-7.", "pmid": "19772889"},
    {"title": "PubChem 1-Testosterone Cypionate CID 16219612 monograph", "authors": "NIH PubChem", "journal": "PubChem Open Chemistry Database", "pmid": null}
  ],
  "faq": [
    {"q": "Why does DHB injection hurt so much?", "a": "DHB's high crystallinity + relatively low solubility cause significant PIP (injection site pain). The crystals trigger aseptic inflammation in the muscle tissue, manifesting as 3-5 days of local swelling and pain. Solutions: larger volume (2 ml instead of 1 ml — more vehicle dilutes concentration), gluteus medius or ventrogluteal injection (larger muscle with more space), HEAT-PAD post-injection + daily mild movement."},
    {"q": "DHB vs Boldenone (Equipoise) — what's the difference?", "a": "Boldenone aromatizes (about half as strongly as testosterone, so E2 elevation expected), DHB is already 5α-reduced, so does NOT aromatize. Boldenone is Δ1-double-bond + non-reduced form; DHB is the same Δ1-double-bond + 5α-reduced. Clinically DHB gives a \"harder and drier\" effect than Boldenone, but with much greater PIP."},
    {"q": "Why no Rx approval?", "a": "DHB was never developed for human or veterinary indication. Classically a designer AAS — the 1990s-2000s bodybuilding/UGL market sought a \"new AAS\" as an alternative to aromatizing Boldenone. Since it was never clinically trialed, long-term safety data is missing; all pharmacology data is extrapolated from Boldenone and Methenolone class data."},
    {"q": "Hair-loss risk?", "a": "High if genetic predisposition for androgenic alopecia. DHB with higher androgenic activity (100 vs Masteron 25, Primobolan 44) directly activates the scalp hair follicle AR. Finasteride does NOT protect (DHB is already reduced). The only protection: if genetically sensitive, do NOT use DHT-derivative AAS (and especially NOT DHB, which is more androgenic than the Masteron-Primobolan class)."},
    {"q": "Long detection window — what's the actual fade-out at the end?", "a": "DHB-Cyp 6-9 month urinary detection (USADA designer-steroid-alert) — extra long due to Cypionate long ester + Δ1-1-testosterone metabolite family. For WADA-tested athletes: avoid during off-season, and minimum 9-month fade-out before planned competition. Boldenone-like \"long fade\" clearance pattern."}
  ],
  "related": ["masteron", "primobolan", "testosterone-info", "trenbolone-info", "anavar-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 200, "medium": 400, "high": 600},
    "unit": "mg/week (IM, split 1-2x)",
    "note": "Minimum 10-12 weeks cycle due to Cypionate ester. 200-600 mg/week, weekly 1-2x injection (larger volume preferred due to PIP). TUDCA NOT mandatory (low hepatotoxicity). Lipid monitoring + blood pressure log mandatory. PCT 4-6 weeks (Clomid + Nolvadex) from last injection +14-21 days."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hormone panel: Total T, Free T, E2, LH, FSH, SHBG, Prolactin. Lipid panel (LDL/HDL/TG). Hepatic: ALT/AST/GGT. CBC + hematocrit. PSA (over 30).",
      "purpose": "Lipid baseline critical (DHB's higher androgenic activity makes HDL drop more cumulative than Masteron-Primo). Any LDL >130 mg/dL or HDL <40 mg/dL relative contraindication."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 4-6, mid-cycle",
      "markers": "Lipid panel (HDL can drop drastically), E2 (if Test-stacked), SHBG, blood pressure log, hepatic panel.",
      "purpose": "HDL <30 mg/dL cardiovascular alarm. ALT/AST <2x normal expected for DHB-only cycle (IM bypass). BP >150/95 dose reduction or stop."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Last DHB-Cyp injection +14-21 days PCT start (Cypionate slow clearance). PCT week 4 and 8-12 recovery checks.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG (recovery), lipid panel (HDL recovery), hepatic panel.",
      "purpose": "Verify HPTA recovery. If T does not return to baseline by 12 weeks, endocrinologist consultation. SHBG recovery typically within 4-6 weeks."
    },
    "cruise": {
      "label": "On cruise (DHB cruise NOT standard)",
      "timing": "DHB cruise atypical due to long detection + PIP; if cruising, monitor every 6-8 weeks",
      "markers": "Lipid panel (HDL), SHBG, Total T, E2, blood pressure log, PSA.",
      "purpose": "Prolonged DHB exposure accumulates lipid disturbance and prostate AR activation. On TRT-Test cruise DHB is typically omitted — esthetic effect only valuable during contest prep, and PIP makes weekly injections burdensome."
    }
  }
}
