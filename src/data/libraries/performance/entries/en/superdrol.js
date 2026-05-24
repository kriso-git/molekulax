// Phase C — multi-variant entry (oral + injectable). v0.27 RICH expansion.
// See docs/superpowers/specs/2026-05-19-route-toggle-design.md for shape rules.
// Sources for Lab Terminal hard-fail fields (aromatization, hepatotoxicity):
// Singh 2009 (PMID 18813027), Shah 2008 (PMID 18187367), Jasiurkowski 2006
// (PMID 16952289), Nasr 2009 (PMID 18720005), Kazlauskas 2010 (PMID 20020364).
// Injectable framing: 17α-methyl class extrapolation + methyldrostanolone
// in-oil UGL prep convention.

export default {
  "id": "superdrol",
  "name": "Superdrol",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Methasterone (2α,17α-dimethyl DHT derivative). Two market formats: oral 17α-methylated tablet with extreme hepatotoxicity, and underground in-oil injectable with reduced (but NOT eliminated) hepatic stress.",
  "description": "Superdrol (chemically Methasterone, 2α,17α-dimethyl-17β-hydroxy-5α-androstan-3-one) was originally synthesized in 1956. Designer Supplements LLC marketed the oral form as a dietary supplement in 2005; the FDA classified it as a Schedule III controlled substance in 2012 (DASCA) and pulled it from the supplement market. An injectable variant later appeared on the underground market — methyldrostanolone dissolved in oil (NOT esterified) — which bypasses hepatic first-pass and lowers hepatic stress, but the 17α-methyl group means hepatotoxicity is NOT fully eliminated. Strong AR agonist (anabolic 400, androgenic 20 vs. testosterone reference); the 2α,17α-dimethyl structure means it does NOT aromatize in either form.",
  "keyInfo": [
    { "label": "Mechanism", "value": "AR agonist (anabolic 400 / androgenic 20)" },
    { "label": "Anabolic ratio", "value": "400:20" },
    { "label": "Legal status", "value": "USA: Schedule III (2012 DASCA). EU: controlled, illegal without prescription." }
  ],
  "mechanism": "Direct AR-receptor agonist. The 2α-methyl + 17α-methyl DOUBLE metabolic block: the 2α-methyl group blocks aromatase (does NOT convert to estrogen); the 17α-methyl group resists hepatic 17β-HSD oxidation. Orally the 17α-methyl blocks first-pass hepatic clearance (oral bioavailability ~75%) but produces prolonged cholestatic stress. Injectable form bypasses first-pass, drastically reducing hepatic stress, but the 17α-methyl group still produces measurable hepatotoxicity during depot release.",
  "androgenicRatio": "400:20",
  "bindingAffinity": "Strong AR agonist, ~5× stronger binding than testosterone in vitro.",
  "interactionsWith": ["alcohol", "NSAIDs", "paracetamol", "liver-stress hepatotoxins"],
  "benefits": [
    "Rapid muscle mass growth (4–7 kg fat-free mass over 4 weeks per anecdotal reports)",
    "Strong strength growth, bench press and deadlift PRs",
    "No aromatization in either form, so no estrogen side effects (water retention, gyno)",
    "Dry, vascular look (cutting cycle compatible)"
  ],
  "quickStart": [
    "Educational context: Superdrol use in Hungary and the EU is illegal without prescription",
    "If still used: max 4–6 week cycle depending on format, hepatotoxicity is cumulative",
    "Liver support (TUDCA 500–1000 mg/day, NAC 1200 mg/day) mandatory throughout the cycle",
    "PCT (Clomid + Nolvadex 4–6 weeks) required for HPTA recovery"
  ],
  "expectations": [
    { "label": "Week 1", "body": "Acute effect minimal. Some report mild aggression, 'pump' during training." },
    { "label": "Weeks 2–3", "body": "Marked strength growth (10–20% 1RM), rapid dry muscle gain. Lipid panel HDL drops sharply (>30% decrease documented)." },
    { "label": "End of week 4", "body": "Maximum muscle growth. With the oral form, hepatotoxicity often manifests at this point (ALT/AST 3–5× elevation) — MANDATORY cycle interruption. With the injectable form, liver-marker rise is milder and slower." }
  ],
  "studies": [
    { "title": "Severe hepatotoxicity caused by a methasteron-containing performance-enhancing supplement", "authors": "Singh V, Rudraraju M, Carey EJ, Byrne TJ, Vargas HE, Williams JE, Balan V, Douglas DD, Rakela J.", "journal": "J Clin Gastroenterol. 2009;43(3):287.", "pmid": "18813027" },
    { "title": "Methasteron-associated cholestatic liver injury: clinicopathologic findings in 5 cases", "authors": "Shah NL, Zacharias I, Khettry U, Afdhal N, Gordon FD.", "journal": "Clin Gastroenterol Hepatol. 2008;6(2):255-258.", "pmid": "18187367" },
    { "title": "Designer steroids", "authors": "Kazlauskas R.", "journal": "Handb Exp Pharmacol. 2010;195:155-185.", "pmid": "20020364" },
    { "title": "Cholestatic jaundice and IgA nephropathy induced by OTC muscle building agent superdrol", "authors": "Jasiurkowski B, Raj J, Wisinger D, Carlson R, Zou L, Nadir A.", "journal": "Am J Gastroenterol. 2006;101(11):2659-2662.", "pmid": "16952289" },
    { "title": "Severe cholestasis and renal failure associated with the use of the designer steroid Superdrol (methasteron): a case report and literature review", "authors": "Nasr J, Ahmad J.", "journal": "Dig Dis Sci. 2009;54(5):1144-1146.", "pmid": "18720005" }
  ],
  "faq": [
    { "q": "Why is Superdrol banned by the FDA?", "a": "Multiple cholestatic jaundice cases reported to the FDA between 2008–2011 (Singh 2009, Shah 2008, Jasiurkowski 2006) demonstrated Methasterone's acute hepatotoxicity in healthy young men. The 2012 DASCA act classified it as Schedule III." },
    { "q": "How does it differ from Anavar?", "a": "Both are 17α-alkylated oral AAS, but Superdrol is doubly methylated (2α + 17α), giving extreme AR affinity, while hepatotoxicity is ~10× higher at clinical case level vs. Anavar. Anavar 320:24 anabolic:androgenic ratio, Superdrol 400:20." },
    { "q": "Is injectable Superdrol safer?", "a": "Hepatically YES, substantially — bypassing first-pass significantly lowers peak hepatic concentration. BUT due to the 17α-methyl group, full safety does NOT exist — measurable liver-marker rise is expected throughout the cycle because of prolonged depot release. Cardiovascular (HDL drop) and HPTA suppression risks are identical to the oral form." },
    { "q": "What does ALT/AST 3× upper normal mean?", "a": "Significant hepatocellular damage. IMMEDIATE cycle stop, TUDCA dose-up 1000 mg/day, NAC 1800 mg/day, hydration, retest 2 weeks later. If not normalized or bilirubin rises, hepatologist consultation." }
  ],
  "related": ["methylstenbolone", "anavar-info", "dianabol-info", "testosterone-info"],
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2–3 weeks before cycle start",
      "markers": "Hepatic priority: ALT, AST, GGT, ALP, bilirubin (direct + total), albumin, INR. Also: lipid panel (LDL/HDL/TG), hormone panel (Total T, Free T, E2, LH, FSH, SHBG), HbA1c, CBC, renal function.",
      "purpose": "Hepatic baseline critical for both formats. Any existing liver dysfunction (fatty liver, ALT/AST baseline elevated) is absolute contraindication."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Oral: end of week 2. Injectable: end of week 3.",
      "markers": "Hepatic priority: ALT, AST, GGT, bilirubin. Also: lipid panel (HDL can drop sharply), E2, blood pressure (home, daily).",
      "purpose": "Emergency detection. ALT/AST >3× upper normal or bilirubin rise = IMMEDIATE cycle stop indication in both forms. HDL <25 mg/dL is cardiovascular red flag."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "PCT week 4 + weeks 8–12 full HPTA + liver recovery check",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatic panel (ALT/AST/GGT/bilirubin recovery), lipid panel (HDL recovery), CBC.",
      "purpose": "Verify HPTA recovery and HEPATIC recovery. If ALT/AST not normalized after 12 weeks, mandatory hepatologist consultation."
    },
    "cruise": null
  },
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": "Oral (tablet)",
      "routeNote": "Classic Superdrol format: 17α-methylated tablet, ~6–8 h half-life. Dramatic mass gain and strength, BUT this is the most hepatotoxic mainstream oral AAS. Stick to short cycles (max 4 weeks) with mandatory liver monitoring.",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: Schedule III controlled substance (DASCA 2012). EU: controlled anabolic steroid, illegal without prescription, not marketable in HU/PL. WADA: banned in competitive sport.",
      "bioavailability": "~75% (oral, 17α-methyl group is first-pass resistant; c17-AA class reference data)",
      "onsetTime": "7–14 days (muscle mass)",
      "halfLife": "6–8 hours (parent compound, no active metabolite)",
      "halfLifeActive": "6–8 h",
      "detectionWindow": "4–6 weeks urine (methylated metabolites: 17α-methyl-5α-androstan-3α-ol-17β-one, WADA-accredited lab).",
      "aromatization": "none",
      "hepatotoxicity": "very-high",
      "androgenicRatio": "400:20",
      "dosing": "10–30 mg/day orally, split into 1–2 doses. Maximum 4–6 week cycle — hepatotoxicity is cumulative. Loss of appetite and 'Superdrol-flu' are common above 20 mg/day. TUDCA 500–750 mg/day + NAC 1200 mg/day mandatory throughout the cycle.",
      "quality": {
        "pure": [
          "Pure white powder or capsules",
          "Independent HPLC-tested source (UGL market often counterfeit)"
        ],
        "caution": [
          "EXTREME HYPERTENSION: daily blood pressure monitoring mandatory; systolic >150 mmHg is cycle-stop indication",
          "Hepatotoxicity (ALT/AST elevation, rarely cholestatic jaundice, documented liver tissue necrosis cases)",
          "Severe lipid deterioration: HDL crashes sharply (>30%, cardiovascular risk)",
          "Loss of appetite, nausea, headache ('Superdrol-flu') — especially above 20 mg/day",
          "Cholestasis: bile acid accumulation in liver cells; skin itching is a warning sign",
          "Psychological: aggression, irritation, anxiety",
          "Acute kidney injury (AKI): Nasr 2009 case report (PMID 18720005) documented Methasterone-induced cholestatic jaundice + AKI"
        ],
        "avoid": [
          "Any existing liver dysfunction (fatty liver, hepatitis, ALT/AST elevated baseline) absolute contraindication",
          "Alcohol, NSAIDs, paracetamol concurrent use strictly forbidden",
          "Other 17α-alkylated AAS (Dianabol, Anadrol, Winstrol) combination extremely hepatotoxic",
          "Cardiovascular risk (family history, high LDL, hypertension) absolute contraindication"
        ]
      },
      "interactions": [
        "Other 17α-alkylated AAS (Dianabol, Anadrol, Winstrol) combination extremely hepatotoxic",
        "Testosterone-base addition reduces endogenous T-suppression symptoms",
        "PCT (Clomid 50mg/day + Nolvadex 20mg/day, 4 weeks) mandatory",
        "Statin therapy contraindicated (combined hepatotoxicity)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 10,
          "medium": 20,
          "high": 30
        },
        "unit": "mg/day",
        "note": "MAXIMUM 4 week cycle — NEVER longer. TUDCA 500–750 mg/day + NAC 1200 mg/day throughout the cycle. ALT/AST 3× upper normal = IMMEDIATE stop + liver labs within 2 weeks. PCT (Clomid + Nolvadex 4 weeks) mandatory. Blood pressure daily."
      }
    },
    {
      "id": "injectable",
      "routeId": "injectable",
      "routeLabel": "Intramuscular (injection)",
      "routeNote": "Rare UGL 'Methyl-Drol' in-oil format: bypassing hepatic first-pass reduces — but does NOT eliminate — liver stress. The 17α-methyl group remains hepatotoxic via the IM route. Slower onset (depot kinetics), longer detection window. Consider only if oral hepatotoxicity is intolerable; risk is non-zero.",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Not a licensed format — exclusively UGL (underground lab) underground market. Illegal everywhere to manufacture, possess, or use. WADA: banned.",
      "bioavailability": "~100% (IM injection bypasses first-pass; methyldrostanolone dissolved in oil with slow depot release)",
      "onsetTime": "10–21 days (slower ramp than oral, depot kinetics)",
      "halfLife": "8–12 hours (in-oil depot release; non-esterified methyldrostanolone)",
      "halfLifeActive": "8–12 h",
      "detectionWindow": "6–12 weeks urine (longer than oral due to depot absorption, WADA-accredited lab).",
      "aromatization": "none",
      "hepatotoxicity": "very-high",
      "androgenicRatio": "400:20",
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 50000,
      "dosing": "50 mg EOD (every other day) IM, typically vastus lateralis or ventrogluteal. UGL standard: 50 mg/ml × 10 ml vial. Maximum 6 week cycle. TUDCA 500 mg/day + NAC 1200 mg/day mandatory throughout the cycle.",
      "quality": {
        "pure": [
          "Pure pale lemon oil (~#fef08a tone), 10 ml vial, sterile-filtered",
          "UGL HPLC-tested source mandatory (counterfeiting and overdosing common)"
        ],
        "caution": [
          "EXTREME HYPERTENSION: same as oral — daily blood pressure monitoring mandatory (17α-methyl class effect)",
          "Injection site irritation/pain (IM methyldrostanolone in-oil is notoriously painful — vastus lateralis or ventrogluteal preferred)",
          "Hepatotoxicity (17α-methyl group is active via IM route): ALT/AST elevation, cholestasis risk reduced but NOT zero",
          "Severe lipid deterioration: HDL crashes sharply (cardiovascular risk — same as oral)",
          "Loss of appetite, nausea ('Superdrol-flu' symptoms can occur with injectable too)",
          "Psychological: aggression, irritation, anxiety",
          "Slow ramp + long detection — particularly risky near competition"
        ],
        "avoid": [
          "Any existing liver dysfunction absolute contraindication (reduced but non-zero hepatotoxicity)",
          "Alcohol, NSAIDs concurrent use strictly forbidden",
          "Cardiovascular risk (family history, high LDL, hypertension) absolute contraindication",
          "Lack of aseptic injection technique (abscess, wound infection risk)"
        ]
      },
      "interactions": [
        "Concurrent other AAS use increases HPTA suppression and lipid disorder",
        "Testosterone-base addition reduces endogenous T-suppression symptoms",
        "PCT (Clomid 50mg/day + Nolvadex 20mg/day, 4–6 weeks) mandatory",
        "Aromatase inhibitor (Anastrozole, Letrozole) NOT needed (no aromatization)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 25,
          "medium": 50,
          "high": 100
        },
        "unit": "mg/inj",
        "note": "50 mg EOD (every other day) IM — maximum 6 week cycle. TUDCA 500 mg/day + NAC 1200 mg/day mandatory (17α-methyl group warrants liver support even with injectable). ALT/AST 3× upper normal = IMMEDIATE stop. PCT (Clomid + Nolvadex 4–6 weeks) mandatory. Blood pressure daily."
      }
    }
  ],
  "defaultVariant": "oral"
}
