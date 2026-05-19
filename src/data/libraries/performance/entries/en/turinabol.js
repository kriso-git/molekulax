// East German Stasi doping program (1968-1989). Sources: Franke-Berendonk
// 1997 PMID 9302891 (GDR doping program review), Schänzer 2006 PMID 17042466
// (extended-detection metabolites), Pope-Kanayama 2014 PMID 24423981,
// Hartgens-Kuipers 2004 PMID 15233599, Stasi BStU archives 2005 release.

export default {
  "id": "turinabol",
  "name": "Turinabol (4-Chlorodehydromethyltestosterone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Oral-Turinabol (Chlorodehydromethyltestosterone, CDMT), 17α-alkylated chlorinated Dianabol-analog oral AAS. Jenapharm 1962, infamous as the main agent of the GDR state doping program 1968-1989 (\"Komplex 08\"). Notorious for long-term detection metabolites.",
  "description": "Turinabol (4-chlorodehydromethyltestosterone, CDMT) is a 17α-alkylated chlorinated Dianabol structural analog oral AAS, synthesized by Jenapharm (East Germany, Jena) in 1962, marketed in 1965 as Oral-Turinabol Rx. It became the MAIN agent of the GDR state doping program (\"Staatsplanthema 14.25\", Stasi code-named \"Komplex 08\", 1968-1989); ~10,000+ GDR athletes received Turinabol unknowingly or undocumented, mainly in swimming, athletics, rowing programs. The 1990s Stasi archive openings document the harms (liver damage, cardiomyopathy, virilization in female athletes, neonatal anomalies in doped mothers' children). Anabolic:androgenic ratio 53:6 — high anabolic, virtually zero androgenic (\"drier Anavar\"). Does NOT aromatize (4-chloro substitution blocks CYP19 substrate binding). 17α-methyl → moderate hepatotoxicity (the 4-chloro reduces it, similar to Anavar). Schänzer 2006 (PMID 17042466) describes extra-long detection metabolites (6β-OH-CDMT and others) — urinary 12-18 month detection is possible, basis of the 2016 Olympic (Rio) IOC re-test: 100+ athletes retrospectively disqualified after 2008-2012 sample re-evaluation. WADA-banned year-round.",
  "keyInfo": [
    {"label": "Mechanism", "value": "AR agonist, 17α-methyl-4-chloro-Δ1-T, NOT aromatized"},
    {"label": "Anabolic:Androgenic", "value": "53:6"},
    {"label": "Half-life", "value": "16 hours (oral)"},
    {"label": "Onset", "value": "2-3 h (oral)"},
    {"label": "Legal status", "value": "Jenapharm Rx (DE) discontinued 1994; UGL today. Schedule III."}
  ],
  "mechanism": "AR agonist 17α-methyl-4-chloro-Δ1-androstene-17β-ol-3-one. The 4-chloro substitution provides two blocks: (1) inhibits CYP19 substrate binding → does NOT aromatize; (2) inhibits 3α-HSD-mediated androgen inactivation in target tissues → more stable AR agonist. 17α-methyl group → oral stability (~80% hepatic first-pass resistance). The Δ1 double bond is inherited from Dianabol. Schänzer 2006 describes extra-long detection metabolites (6β-OH-CDMT, 3α-hydroxy-1-ene-3-one-CDMT and additionally 6α-OH-CDMT), which have since become classic targets in sport doping at WADA-accredited labs.",
  "legalStatus": "DE/EU: Jenapharm Oral-Turinabol Rx discontinued after 1994. USA: Schedule III controlled substance (DEA, never FDA-approved). HU/PL: illegal without prescription, UGL market dominant. WADA-banned year-round (S1.1.a).",
  "onsetTime": "2-3 h (oral)",
  "halfLife": "16 h (oral)",
  "halfLifeActive": "16 h (parent), plus 6β-OH and 3α-OH metabolites ~24-48 h",
  "interactionsWith": ["tudca", "warfarin", "testosterone", "alcohol"],
  "aromatization": "No — 4-chloro substitution blocks CYP19 binding; clinically E2 elevation essentially zero (Pope-Kanayama 2014 PMID 24423981, Schänzer 2006 PMID 17042466)",
  "hepatotoxicity": "Moderate — 17α-methyl group hepatic first-pass stress, BUT 4-chloro reduces hepatic toxicity vs other 17α-alkylated AAS (Dianabol, Anadrol). ALT/AST 2-3x rise common at 6+ week cycle, clinically milder than Dianabol or Anadrol (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "53:6",
  "bindingAffinity": "Moderate-high AR affinity; virtually zero 5α-reductase substrate → NO DHT activity; no scalp or prostate androgen risk.",
  "detectionWindow": "EXTRA LONG — urinary 12-18 months (Schänzer 2006 6β-OH-CDMT and 3α-hydroxy-3-one metabolites). 2016 Rio Olympics retrospective re-test disqualified 100+ athletes based on 2008-2012 reevaluation. WADA-accredited LC-MS/MS.",
  "benefits": [
    "Clean lean mass gain (3-5 kg in 6-8 weeks, MINIMAL water retention)",
    "Does NOT aromatize → no gynecomastia, no water retention",
    "Zero scalp/prostate androgenic activity (NO DHT conversion)",
    "Hepatotoxicity milder than Dianabol/Anadrol (4-chloro protection)",
    "Stamina gain documented in sub-elite endurance sports (GDR rowing, athletics)"
  ],
  "quickStart": [
    "EXTRA LONG DETECTION — 12-18 months urinary; WADA-tested athletes need minimum 18-month off-season fade-out",
    "Hepatic monitor every 4 weeks (moderate, but 17α-methyl)",
    "TUDCA 500 mg/day + NAC 1200 mg/day recommended",
    "Typical dose 30-60 mg/day, 6-8 week cycle",
    "PCT (Clomid + Nolvadex 4 weeks) mandatory"
  ],
  "expectations": [
    {"label": "First week", "body": "Acute effect minimal. Strength gain perceptible after 3-5 days, lean mass gain not yet."},
    {"label": "Week 4-6", "body": "Maximum lean mass gain 3-5 kg, strength gain 10-15% 1RM. Lipid panel HDL drop moderate (15-25%)."},
    {"label": "Post-cycle", "body": "Lean mass preservation relatively good (water loss minimal). Hepatic recovery 4-6 weeks. Detection window 12-18 months at WADA labs."}
  ],
  "quality": {
    "pure": [
      "Original Jenapharm Oral-Turinabol 5 mg tablet (1962-1994, today collectible)",
      "UGL tablet: HPLC-tested source mandatory — Turinabol often counterfeited (Anavar/Dianabol substitution)"
    ],
    "caution": [
      "EXTRA long detection window — athlete risk high",
      "Hepatotoxicity (ALT/AST 2-3x rise)",
      "Lipid disturbance: HDL drop moderate",
      "Mood changes (depression, irritability) discontinue if observed"
    ],
    "avoid": [
      "WADA-tested athlete at any career stage (18-month detection)",
      "Any liver disorder (moderate hepatotoxicity)",
      "Concurrent alcohol or paracetamol use",
      "Female use >10 mg/day (virilization risk remains, though lower than other AAS)",
      "Psychiatric predisposition"
    ]
  },
  "interactions": [
    "Testosterone-base stack: synergistic lean mass gain, classic Turinabol+Test cycle",
    "TUDCA + NAC recommended (moderate hepatotoxicity)",
    "Anastrozole: NOT needed for Turinabol-only cycle (no aromatization)",
    "Combination with other 17α-alkylated AAS increases hepatic stress"
  ],
  "studies": [
    {"title": "Hormonal doping and androgenization of athletes: a secret program of the German Democratic Republic government", "authors": "Franke WW, Berendonk B.", "journal": "Clin Chem. 1997;43(7):1262-79.", "pmid": "9302891"},
    {"title": "Long-term detection of methandienone, stanozolol, dehydrochloromethyltestosterone metabolites in human urine by LC-MS/MS", "authors": "Schänzer W, Geyer H, Gotzmann A et al.", "journal": "Drug Test Anal. 2006;46(5):1071-1076.", "pmid": "17042466"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"},
    {"title": "Anabolic-androgenic steroid dependence: an emerging disorder", "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.", "journal": "Addiction. 2009;104(12):1966-78.", "pmid": "19922565"}
  ],
  "faq": [
    {"q": "What was the GDR \"Komplex 08\" doping program?", "a": "The GDR's 1968-1989 state doping program (official code Staatsplanthema 14.25, Stasi code-named \"Komplex 08\") was coordinated by the Sportmedizinischer Dienst der DDR (SMD) and Stasi. ~10,000+ GDR athletes (including adolescent girls!) received Turinabol unknowingly or undocumented, mainly in swimming, athletics, rowing programs. The 1990-1992 Stasi archive openings document the under-documentation that contributes to sport certificate and Olympic medal revisions to this day. Franke-Berendonk 1997 PMID 9302891 is the classic review."},
    {"q": "Why 18-month detection?", "a": "Schänzer 2006 (PMID 17042466) discovered that Turinabol forms non-classical long-term metabolites (6β-OH-CDMT, 3α-hydroxy-1-ene-3-one-CDMT) that persist in urine for weeks-to-months after the parent compound has cleared. LC-MS/MS methods give 12-18 month detection window, basis of 2016 IOC Rio re-test: 2008-2012 Olympic samples were retrospectively retested, 100+ positive Turinabol results with disqualification and medal redistribution."},
    {"q": "Turinabol vs Dianabol?", "a": "Structurally similar (CDMT = 4-chloro-Dianabol), BUT different: Dianabol AROMATIZES (CYP19 substrate, E2 elevation, water retention, gynecomastia risk); Turinabol does NOT aromatize (4-chloro block). In hepatotoxicity Turinabol is milder (4-chloro protection). In anabolic strength Dianabol is stronger (~250:60 vs 53:6 ratio). Typical choice: Turinabol \"drier\" cycle, Dianabol \"wetter\" bulker."},
    {"q": "Female use?", "a": "GDR history shows female athletes (Heidi Krieger Olympic medal shot-putter, well-documented case) received Turinabol unknowingly at 10-20 mg/day — virilization side effects (irreversible voice deepening, clitoral hypertrophy, hirsutism) ENSUED. Krieger underwent sex-reassignment surgery in 1997 (Andreas Krieger). Clinical lesson: although Turinabol has a low androgenic ratio (6 vs 100 testosterone), at higher doses (>10 mg/day) and longer exposure virilization can be IRREVERSIBLE. The only safe female protocol: don't use it."},
    {"q": "Stamina gain in rowing sports?", "a": "GDR rowing team's 1968-1988 Olympic dominance (~30 medals) was largely Turinabol-driven (Franke-Berendonk 1997 PMID 9302891). Mechanism: 17α-methyl AAS erythropoietic effect + neuromuscular efficiency increase + recovery acceleration. WADA-banned in modern endurance sports, and Schänzer 2006 metabolites bring extra-detection risk."}
  ],
  "related": ["dianabol-info", "anavar-info", "testosterone-info", "winstrol-info", "primobolan"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 30, "medium": 45, "high": 60},
    "unit": "mg/day (oral, 2-3x split)",
    "note": "Maximum 8 weeks cycle. 30-60 mg/day, 2-3x split (16 h half-life). TUDCA 500 mg/day + NAC 1200 mg/day recommended. PCT (Clomid + Nolvadex) 4 weeks. Female dose max 5-10 mg/day (virilization risk at longer exposure)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hepatic: ALT, AST, GGT, ALP, bilirubin. Lipid panel (LDL/HDL/TG). Hormone panel (Total T, Free T, E2, LH, FSH, SHBG). CBC + hematocrit. Kidney function.",
      "purpose": "Hepatic baseline due to 17α-methyl group, lipid baseline for trend detection."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "End of week 4",
      "markers": "Hepatic: ALT, AST, GGT. Lipid panel (HDL), E2 (during Test stack), blood pressure.",
      "purpose": "ALT/AST <3x normal expected for Turinabol-only cycle. HDL drop moderate."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Last tablet +1-2 days PCT start. PCT week 4 + 8-12 recovery checks.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatic + lipid recovery.",
      "purpose": "Verify HPTA + hepatic recovery. SHBG recovery 4-6 weeks."
    },
    "cruise": {
      "label": "On cruise (Turinabol cruise NOT standard)",
      "timing": "Turinabol cruise atypical due to 17α-methyl + long detection",
      "markers": "N/A",
      "purpose": "Turinabol exclusively recommended for cyclical use. Long cruise = hepatotoxic + WADA detection risk."
    }
  }
}
