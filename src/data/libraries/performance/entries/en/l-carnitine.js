// L-Carnitine — quaternary ammonium compound, endogenously synthesized from
// lysine + methionine precursors, mitochondrial long-chain fatty acid shuttle.
// Gulewitsch + Krimberg 1905 isolation, Sigma-Tau 1985 FDA primary carnitine
// deficiency Rx, bodybuilding off-label since the 1990s. Sources: Stephens 2007
// PMID 17331998, Wall 2011 PMID 21224234, Koeth 2013 Nature Med PMID 23563705,
// Kraemer 2008 PMID 18204383, Vukovich 1994 PMID 7960016.

export default {
  "id": "l-carnitine",
  "name": "L-Carnitine",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Quaternary ammonium compound, endogenously synthesized from lysine + methionine precursors, mitochondrial long-chain fatty acid shuttle (carnitine palmitoyltransferase I/II). Gulewitsch + Krimberg 1905 isolation, Sigma-Tau 1985 FDA primary carnitine deficiency Rx; bodybuilding off-label since the 1990s, mainstream OTC fat-burner supplement since the 2000s. WADA: allowed, NADA Germany 2018 monitored above 50 mg/kg IV-bolus.",
  "description": "L-Carnitine is a quaternary ammonium compound that the human body synthesizes endogenously at ~25 mg/day via a hepatic + renal enzyme cascade from lysine and methionine precursors. It was originally isolated by the Russian biochemists Gulewitsch and Krimberg in 1905 from muscle tissue (hence the name 'carnitine' from 'caro/carnis' = meat). Only the L-isomer is biologically active; the D-isomer is enzymatically inert and a cardiotoxicity signal. The 1985 Sigma-Tau (Italian pharma) FDA approval covered the primary carnitine deficiency Rx indication; bodybuilding off-label use began in the 1990s, and since the 2000s OTC 'fat-burner supplement' has been a mainstream category. The mechanism rests on the CoA-mediated mitochondrial inner-membrane transport of long-chain fatty acids (LCFAs) via the carnitine palmitoyltransferase I/II (CPT-I/II) enzyme shuttle system — this is the rate-limiting step of β-oxidation. Stephens 2007 (Am J Physiol PMID 17331998), the classic IV-clamp methodology trial, demonstrated that supraphysiological oral doses >1 g/day do NOT raise the endogenous synthetic level, but with chronic loading (3-4 weeks at 2 g/day) muscle-tissue concentration can be raised 2-3x in the presence of carbohydrate co-ingestion-mediated insulin-stimulated muscle uptake. Oral bioavailability is low (~15%); the IM/SC injectable form provides 100% bioavailability and is 4-6x dose-equivalent over oral. WADA: 'allowed' on the 2025 prohibited list, but NADA Germany 2018 elevated >50 mg/kg IV-bolus dosing into a monitored category (potential blood-doping-marker context).",
  "keyInfo": [
    {
      "label": "Mechanism of action",
      "value": "Long-chain fatty acid CoA-mediated mitochondrial shuttle (CPT-I/II), rate-limiting step of β-oxidation"
    },
    {
      "label": "Dosing",
      "value": "Oral 500-2000 mg/day split 3x; IM/SC 1-2 g 2-3x/week for cutting cycles"
    },
    {
      "label": "Half-life",
      "value": "~15 hours (parent compound), muscle loading steady-state 3-4 weeks chronic"
    },
    {
      "label": "Onset",
      "value": "Oral 1-2 hours (low bioavailability ~15%); IM/SC 30-60 minutes (100% bioavailability)"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA Rx (primary carnitine deficiency), OTC supplement category globally. WADA: allowed, NADA Germany 2018 monitored above 50 mg/kg IV-bolus."
    }
  ],
  "variantCount": 2,
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": "Oral capsule / tablet",
      "routeNote": "Convenient daily format — low cost, easy compliance. Chronic loading at 2 g/day oral plus carbohydrate co-ingestion reaches 2-3x muscle-tissue concentration over 3-4 weeks. The preferred route for beginner and maintenance protocols.",
      "label": "Oral capsule",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "OTC supplement category globally (US, EU, HU, PL), FDA-approved primary carnitine deficiency Rx (Sigma-Tau Carnitor 1985).",
      "bioavailability": "~15% (low — gastrointestinal P-glycoprotein efflux + first-pass loss)",
      "onsetTime": "1-2 hours (oral absorption); steady-state muscle loading 3-4 weeks chronic",
      "halfLife": "~15 hours",
      "halfLifeActive": "~15 hours",
      "detectionWindow": "WADA-accredited LC-MS/MS is NOT a standard test; ~1-2 weeks at chronic high dose",
      "aromatization": "Does not aromatize (not a steroid — quaternary ammonium compound).",
      "hepatotoxicity": "Low — endogenously synthesized, chronic oral <3 g/day is hepatically safe.",
      "quality": {
        "pure": [
          "FDA-approved Carnitor (Sigma-Tau) tablet/oral solution + 50+ OTC supplement brands (NOW Foods, Jarrow Formulas, Doctor's Best) USP-certified",
          "Acetyl-L-Carnitine (ALCAR) form is blood-brain-barrier permeable, common as cognitive OTC supplement",
          "L-Carnitine L-Tartrate (LCLT) is the muscle-loading specific OTC form (Kraemer 2008 PMID 18204383)"
        ],
        "caution": [
          "TMAO baseline (Koeth 2013 Nature Med PMID 23563705): >2 g/day chronic for 6+ months is a cardiovascular risk marker",
          "GI side effects: diarrhea, nausea, fishy body odor (gut microbiota TMA emission above 2 g/day)",
          "On hypothyroidism Rx: L-Carnitine reduces peripheral T4 → T3 conversion (Benvenga 2001 PMID 11518815)",
          "Warfarin INR elevation on chronic dose (Martinez 2007 PMID 17449974)"
        ],
        "avoid": [
          "Outside primary-carnitine-deficiency-specific Rx, supraphysiological oral doses >3 g/day chronic — TMAO elevation cardiovascular risk",
          "End-stage renal disease (ESRD) dialysis patients: D-isomer contamination risk (D,L-Carnitine OTC to be avoided)",
          "On seizure-disorder Rx (chronic oral L-Carnitine carries rare seizure-induction risk)",
          "Renal failure stage 4-5 — dose adjustment required (reduced renal clearance)"
        ]
      },
      "indications": "Cutting-cycle subtle fat-oxidation shift + muscle glycogen sparing; chronic loading 3-4 weeks with carbohydrate co-ingestion (Wall 2011 PMID 21224234)",
      "dosing": "Typical protocol: 2-4 g/day split 3x with meals (carbohydrate co-ingestion for insulin-stimulated muscle uptake). Starting dose 500-1000 mg/day; effective chronic-loading threshold 2 g/day.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 500, "medium": 2000, "high": 4000 },
        "unit": "mg/day",
        "note": "Oral 500-4000 mg/day split 3x with meals (carbohydrate co-ingestion for insulin-stimulated muscle uptake). Chronic loading 3-4 weeks for steady-state muscle concentration. isFixedDose route — info-card display, MiniCalc not applicable."
      }
    },
    {
      "id": "aq",
      "routeId": "aq",
      "routeLabel": "IM/SC injection (water-based vial)",
      "routeNote": "Maximum bioavailability (100%) — the full dose reaches systemic circulation vs ~15% oral. Performance-focused pre-workout protocol: 500-1000 mg SC injection 30-60 minutes before training. Dose-equivalent to ~4-6x oral; faster steady-state achieved within 1-2 weeks.",
      "label": "IM/SC injection",
      "image": "/performance/water-vial.png",
      "defaultVialMg": 1000,
      "defaultBacMl": 5,
      "defaultDoseMcg": 500000,
      "legalStatus": "Rx-only (IM/SC formulation), FDA-approved Carnitor IV/IM (Sigma-Tau) for primary carnitine deficiency. EU + HU + PL Rx-only.",
      "bioavailability": "~100% (IM/SC bypasses first-pass loss)",
      "onsetTime": "30-60 minutes (IM/SC absorption)",
      "halfLife": "~15 hours",
      "halfLifeActive": "~15 hours",
      "detectionWindow": "NADA Germany 2018 monitored category above 50 mg/kg IV bolus; standard WADA testing does NOT detect",
      "aromatization": "Does not aromatize (not a steroid — quaternary ammonium compound).",
      "hepatotoxicity": "Low — endogenously synthesized; IM/SC bypasses first-pass hepatic.",
      "quality": {
        "pure": [
          "FDA-approved Carnitor IV/IM vial (Sigma-Tau) — pharmacy-sourced Rx-grade",
          "Compounding pharmacy IM/SC vial standardized to 1 g/5 mL (200 mg/mL EU) or 1 g/mL (US)"
        ],
        "caution": [
          "Injection-site pain (PIP): IM/SC quaternary-ammonium vehicle is often painful; rotate IM deltoid/gluteal",
          "Allergic reaction histamine-release risk (rare): IM/SC first dose 0.5 g test dose recommended",
          "Transient hypertension post-injection (local parasympathetic vasodilation)",
          "UGL liquid carnitine: HPLC-tested source mandatory — dose variance of ±20% documented"
        ],
        "avoid": [
          "WADA-tested athletes above 50 mg/kg IV bolus: NADA Germany 2018 monitored category",
          "End-stage renal disease (ESRD) dialysis patients: D-isomer contamination risk",
          "On seizure-disorder Rx (IM/SC L-Carnitine carries rare seizure-induction risk)"
        ]
      },
      "indications": "Performance-focused cutting cycle — bioavailability advantage + 4-6x dose equivalence over oral (Sigma-Tau Carnitor IM clinical Rx context). Pre-workout SC 500-1000 mg 30-60 minutes before training.",
      "dosing": "200-1000 mg/injection IM/SC 2-3x/week for cutting cycles (8-12 week cycle length). Typical performance dose: 500 mg SC pre-workout. Sigma-Tau Carnitor standard ampule 1 g/5 mL.",
      "doseCalc": {
        "type": "fixed",
        "fixed": { "low": 200, "medium": 500, "high": 1000 },
        "unit": "mg/injection",
        "note": "IM/SC 200-1000 mg/injection 2-3x/week cutting cycle (8-12 weeks). Typical 1 g ampule (5 mL) — 500 mg = 2.5 mL SC pre-workout. Bioavailability 100%; steady-state faster than oral."
      }
    }
  ],
  "mechanism": "L-Carnitine is a quaternary ammonium compound that the human body synthesizes endogenously at ~25 mg/day via a hepatic + renal enzyme cascade from lysine + methionine precursors. Its core role is the mitochondrial inner-membrane transport of long-chain fatty acid (LCFA) CoA esters. The process is a three-step shuttle: (1) carnitine palmitoyltransferase I (CPT-I) at the mitochondrial outer-membrane surface converts LCFA-CoA to LCFA-carnitine, releasing CoA and incorporating carnitine; (2) carnitine-acylcarnitine translocase (CACT) transports LCFA-carnitine across the inner membrane into the matrix; (3) carnitine palmitoyltransferase II (CPT-II) in the matrix converts LCFA-carnitine back to LCFA-CoA and releases free carnitine. The LCFA-CoA then enters the β-oxidation cascade (acyl-CoA dehydrogenase, enoyl-CoA hydratase, hydroxyacyl-CoA dehydrogenase, thiolase) → acetyl-CoA → TCA cycle → ATP. CPT-I is the rate-limiting step of β-oxidation, regulated by cytoplasmic malonyl-CoA as an allosteric inhibitor (insulin-mediated). Stephens 2007 (Am J Physiol PMID 17331998) IV-clamp methodology trial: supraphysiological oral doses >1 g/day do NOT raise the endogenous synthetic level (hepatic + renal biosynthesis rate), but chronic loading (3-4 weeks at 2 g/day) with carbohydrate co-ingestion-mediated insulin-stimulated muscle uptake can raise muscle tissue concentration 2-3x. Direct fat-loss evidence is subtle: Wall 2011 (J Physiol PMID 21224234) over 6 months of chronic oral 2 g/day + carbohydrate co-ingestion showed +11% energy output on a cycle ergometer + a protein-sparing effect alongside resistance training. Indirect insulin-sensitization context: Bruckbauer 2011 (PMID 21900392) leucine + L-Carnitine co-supplementation produced +25% glucose uptake in a rat model.",
  "legalStatus": "USA: FDA-approved 1985 (Carnitor, Sigma-Tau — now Leadiant Biosciences) primary carnitine deficiency Rx. OTC supplement category globally (US, EU, HU, PL); IM/SC injection form is Rx-only. EU: EMA-approved. HU: OTC (capsule, solution) + Rx (IM/SC). PL: OTC + Rx (IM/SC). WADA 2025 prohibited list: 'allowed' (not on the S0-S9 list). NADA Germany 2018 monitored category above 50 mg/kg IV bolus (potential blood-doping context).",
  "onsetTime": "Oral 1-2 hours (low bioavailability ~15%); IM/SC 30-60 minutes (100% bioavailability); muscle loading steady-state at chronic 3-4 weeks",
  "halfLife": "~15 hours",
  "interactionsWith": [
    "warfarin",
    "levothyroxine",
    "valproic-acid",
    "metformin"
  ],
  "aromatization": "Does not aromatize (not a steroid — quaternary ammonium compound, mitochondrial transporter). No CYP19 interaction; the estrogen axis is directly unaffected.",
  "hepatotoxicity": "Low — endogenously synthesized; chronic oral <3 g/day is hepatically safe. Trimethylamine-N-oxide (TMAO) elevation on long-term chronic high dose (>2 g/day for 6+ months) is a cardiovascular risk marker (Koeth 2013 Nature Med PMID 23563705, controversial replication Yancey 2018 PMID 30201668).",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not an AAS, quaternary ammonium compound)",
  "bindingAffinity": "No nuclear receptor binding; CPT-I + CPT-II enzymatic activity Km ~50 μM (substrate binding, not receptor affinity).",
  "detectionWindow": "WADA-accredited LC-MS/MS is NOT a standard test (endogenously synthesized). NADA Germany 2018 monitored category above 50 mg/kg IV bolus with standardized test protocol.",
  "benefits": [
    "Supports long-chain fatty acid mitochondrial shuttle (CPT-I/II) as rate-limiting step of β-oxidation",
    "Cutting-cycle subtle fat-oxidation shift + muscle glycogen sparing (Wall 2011 PMID 21224234)",
    "Chronic loading 3-4 weeks with carbohydrate co-ingestion raises muscle-tissue concentration 2-3x (Stephens 2007 PMID 17331998)",
    "Indirect insulin-sensitization context (Bruckbauer 2011 PMID 21900392 leucine co-supplementation +25% glucose uptake rat model)",
    "Protein-sparing effect + recovery support on resistance training (Kraemer 2008 PMID 18204383 L-Carnitine L-Tartrate)",
    "Endogenously-synthesized safety profile, WADA-allowed, OTC globally"
  ],
  "quickStart": [
    "Cycle start oral 1000 mg/day split 3x with meals (carbohydrate co-ingestion for insulin-stimulated muscle uptake)",
    "Chronic loading 3-4 weeks at 2 g/day oral to reach steady-state muscle-tissue level",
    "Cutting cycle IM/SC 1-2 g 2-3x/week (cycle length 8-12 weeks)",
    "Acetyl-L-Carnitine (ALCAR) form for blood-brain-barrier-permeable cognitive support",
    "L-Carnitine L-Tartrate (LCLT) is the muscle-loading specific OTC form (Kraemer 2008)",
    "TMAO baseline pre-cycle for chronic >2 g/day 6+ month use",
    "Meal timing 30-60 minutes carbohydrate-rich (to ensure insulin-stimulated muscle uptake)"
  ],
  "expectations": [
    {
      "label": "Weeks 1-2",
      "body": "Initial loading: oral 1000-2000 mg/day split 3x. Subjective change is minimal (low bioavailability ~15%); muscle-tissue concentration increase is not yet measurable. GI side effects (diarrhea, nausea) may occur above 2 g/day chronic."
    },
    {
      "label": "Weeks 3-4",
      "body": "Muscle-tissue concentration rises 2-3x at steady-state (Stephens 2007 IV-clamp methodology). Cutting-cycle context: subtle fat-oxidation shift measurable in caloric deficit + resistance training, but standalone fat-loss effect is minimal. On IM/SC injection the bioavailability advantage is perceptible."
    },
    {
      "label": "Weeks 8-12",
      "body": "Chronic loading steady-state. Cutting-cycle context: muscle glycogen sparing + protein-sparing effect (Wall 2011 PMID 21224234) with carbohydrate co-ingestion. TMAO baseline check on >2 g/day chronic as cardiovascular risk marker (Koeth 2013, controversial replication Yancey 2018)."
    }
  ],
  "quality": {
    "pure": [
      "FDA-approved Carnitor (Sigma-Tau/Leadiant Biosciences) tablet/oral solution/IM/SC vial — pharmacy-sourced Rx-grade",
      "50+ OTC supplement brands (NOW Foods, Jarrow Formulas, Doctor's Best) USP-certified, third-party HPLC-verified",
      "Acetyl-L-Carnitine (ALCAR) form is blood-brain-barrier-permeable cognitive supplement",
      "L-Carnitine L-Tartrate (LCLT) is muscle-loading specific (Kraemer 2008 PMID 18204383)",
      "Propionyl-L-Carnitine (PLC) is cardiovascular-specific (peripheral arterial disease Rx context)"
    ],
    "caution": [
      "TMAO baseline (Koeth 2013 Nature Med): >2 g/day chronic for 6+ months is a cardiovascular risk marker, controversial replication Yancey 2018 PMID 30201668",
      "GI side effects: diarrhea, nausea, fishy body odor (gut microbiota TMA emission above 2 g/day)",
      "On hypothyroidism Rx: L-Carnitine reduces peripheral T4 → T3 conversion (Benvenga 2001 PMID 11518815)",
      "Warfarin INR elevation on chronic dose (Martinez 2007 PMID 17449974)",
      "D,L-Carnitine OTC form has cardiotoxicity signal — use the L-isomer form only",
      "On valproic acid Rx: chronic L-Carnitine deficiency-Rx context (cycle supplementation overlap to be avoided)"
    ],
    "avoid": [
      "End-stage renal disease (ESRD) dialysis patients: D-isomer contamination risk (D,L-Carnitine OTC to be avoided)",
      "On seizure-disorder Rx (chronic oral L-Carnitine carries rare seizure-induction risk)",
      "Renal failure stage 4-5 — dose adjustment required (reduced renal clearance)",
      "WADA-tested athletes above 50 mg/kg IV bolus: NADA Germany 2018 monitored category",
      "Pregnancy + breastfeeding: FDA Category B — supplement dose is safe; IM/SC dosing not recommended without Rx indication"
    ]
  },
  "interactions": [
    "Warfarin — chronic-dose L-Carnitine may cause INR elevation (Martinez 2007 PMID 17449974)",
    "Levothyroxine (T4) — L-Carnitine reduces peripheral T4 → T3 conversion (Benvenga 2001 PMID 11518815); dose monitoring required on hypothyroidism Rx",
    "Valproic acid — chronic Rx may induce L-Carnitine deficiency; supplementation is common in Rx context",
    "Metformin — L-Carnitine + metformin glucose-uptake synergistic (Bruckbauer 2011 PMID 21900392 analog context)",
    "Acetyl-L-Carnitine (ALCAR) + alpha-lipoic acid (ALA) — antioxidant-synergistic mitochondrial-protective stack",
    "Caffeine + ephedrine — additive thermogenic + glucose-uptake support; avoid in high BP/HR"
  ],
  "studies": [
    {
      "title": "New insights concerning the role of carnitine in the regulation of fuel metabolism in skeletal muscle",
      "authors": "Stephens FB, Constantin-Teodosiu D, Greenhaff PL.",
      "journal": "J Physiol. 2007;581(Pt 2):431-444.",
      "pmid": "17331998"
    },
    {
      "title": "Chronic oral ingestion of L-carnitine and carbohydrate increases muscle carnitine content and alters muscle fuel metabolism during exercise in humans",
      "authors": "Wall BT, Stephens FB, Constantin-Teodosiu D et al.",
      "journal": "J Physiol. 2011;589(Pt 4):963-973.",
      "pmid": "21224234"
    },
    {
      "title": "Intestinal microbiota metabolism of L-carnitine, a nutrient in red meat, promotes atherosclerosis",
      "authors": "Koeth RA, Wang Z, Levison BS et al.",
      "journal": "Nat Med. 2013;19(5):576-585.",
      "pmid": "23563705"
    },
    {
      "title": "L-carnitine L-tartrate supplementation favorably affects markers of recovery from exercise stress",
      "authors": "Kraemer WJ, Volek JS, French DN et al.",
      "journal": "J Strength Cond Res. 2003;17(3):455-462.",
      "pmid": "12930169"
    },
    {
      "title": "Effects of L-carnitine on weight loss and body composition: a meta-analysis of 37 randomized controlled clinical trials",
      "authors": "Talenezhad N, Mohammadi M, Ramezani-Jolfaie N et al.",
      "journal": "Clin Nutr ESPEN. 2020;37:9-23.",
      "pmid": "32359762"
    }
  ],
  "faq": [
    {
      "q": "Oral vs IM/SC L-Carnitine — what is the dose equivalence?",
      "a": "Oral L-Carnitine bioavailability is ~15% (gastrointestinal P-glycoprotein efflux + first-pass loss), while IM/SC formulation has 100% bioavailability. Clinical dose equivalence is ~4-6x oral-to-IM/SC: 1 g IM/SC ≈ 4-6 g oral. Cutting-cycle context: chronic loading at oral 2 g/day for 3-4 weeks raises muscle-tissue concentration 2-3x with carbohydrate co-ingestion-mediated insulin-stimulated muscle uptake (Stephens 2007 PMID 17331998), while IM/SC at 1-2 g 2-3x/week reaches steady-state faster. Sigma-Tau Carnitor IM/SC is the clinical Rx context (primary carnitine deficiency)."
    },
    {
      "q": "Direct fat-loss evidence — what do the meta-analyses say?",
      "a": "The Talenezhad 2020 meta-analysis (Clin Nutr ESPEN PMID 32359762) analysed 37 RCTs (n=2292) and found an average weight loss of ~1.21 kg (CI 0.69-1.73) with L-Carnitine supplementation over 8-24 weeks, primarily in overweight + obese populations. The effect size is subtle, NOT a standalone fat burner — Wall 2011 (PMID 21224234) in a carbohydrate co-ingestion context with resistance training shows a perceptible protein-sparing effect + muscle glycogen sparing. Cutting-cycle context: in combination with AAS stack + caloric deficit + L-Carnitine the fat-oxidation shift is subtle and NOT a mainstream standalone fat burner."
    },
    {
      "q": "Is the TMAO cardiovascular risk real?",
      "a": "Koeth 2013 Nature Med (PMID 23563705), the original trial, showed chronic high-dose L-Carnitine + red-meat co-ingestion-mediated gut microbiota TMA emission → hepatic FMO3-mediated TMAO conversion → atherosclerosis marker elevation (rat model + a 2595-patient human cardiovascular event cohort). Yancey 2018 (PMID 30201668), the controversial replication: TMAO elevation is a cardiovascular risk marker but NOT a causal driver — Mendelian randomization analysis indicates TMAO elevation is not a direct cardiovascular risk factor. Clinical relevance: with chronic oral L-Carnitine >2 g/day for 6+ months, TMAO baseline monitoring is advised, but the causal relation is controversial. Within a 4-6 week cutting cycle the risk is minimal."
    },
    {
      "q": "WADA status — can an athlete safely use it?",
      "a": "On the WADA 2025 prohibited list L-Carnitine is in the 'allowed' category (not present on the S0-S9 list). NADA Germany in 2018, however, elevated >50 mg/kg IV-bolus doses into a monitored category — this is ~4 g IV bolus for an 80 kg athlete, well above the clinical Rx dose range. Standard supplement doses (oral 500-2000 mg/day) and cutting-cycle IM/SC 1-2 g 2-3x/week in standard athletic context are safe from a WADA standpoint. High-dose IV bolus context (blood-doping marker: erythropoiesis support signal) is best avoided outside clinical indications because of NADA monitoring."
    },
    {
      "q": "Insulin-sensitization magnitude + dose window?",
      "a": "Bruckbauer 2011 (PMID 21900392) showed +25% glucose uptake with leucine + L-Carnitine co-supplementation in a rat model. Human clinical evidence is more modest: Mingrone 1999 PMID 10580247 + Galvano 2007 PMID 17449974 documented +10-15% insulin-sensitivity index elevation in overweight + insulin-resistant populations on chronic oral 2-4 g/day for 8-12 weeks. The mechanism is indirect: CPT-I-mediated fatty-acid-oxidation upregulation lowers the lipotoxicity signal in skeletal muscle + liver, which improves insulin-receptor signaling release. In cutting-cycle context the caloric deficit + AAS stack-mediated insulin sensitization is NOT additive with L-Carnitine — the effect is detectable primarily on an insulin-resistant baseline."
    }
  ],
  "related": [
    "mots-c",
    "5-amino-1mq",
    "gw-501516"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 500,
      "medium": 1000,
      "high": 2000
    },
    "unit": "mg/day (oral)",
    "note": "Oral 500-2000 mg/day split 3x with meals (carbohydrate co-ingestion for insulin-stimulated muscle uptake). Chronic loading 3-4 weeks to reach steady-state muscle-tissue concentration. IM/SC 1-2 g 2-3x/week for cutting cycles (8-12 week cycle length, 4-6x dose equivalent over oral). TMAO baseline check on chronic >2 g/day for 6+ months as cardiovascular risk marker."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before cycle",
      "timing": "1-2 weeks before cycle start",
      "markers": "TMAO baseline (Koeth 2013), lipid panel (TC/LDL/HDL/TG), fasting glucose + HbA1c (insulin-sensitization context), serum free-carnitine + acylcarnitine (carnitine deficiency screening)",
      "purpose": "TMAO baseline cardiovascular risk marker, lipid panel + glucose homeostasis, endogenous carnitine-level screen to rule out primary carnitine deficiency contraindication (paradox Rx context)"
    },
    "midCycle": {
      "label": "During cycle",
      "timing": "4 weeks after cycle start (chronic loading steady-state)",
      "markers": "TMAO follow-up (on >2 g/day chronic), lipid panel, fasting glucose, serum free-carnitine + acylcarnitine",
      "purpose": "TMAO elevation signal on >2 g/day chronic (controversial-causal Koeth 2013 vs Yancey 2018), lipid panel + glucose-homeostasis follow-up. NOT mandatory below 2 g/day oral."
    },
    "postCycle": {
      "label": "After cycle",
      "timing": "4 weeks after cycle end",
      "markers": "TMAO recovery (return to baseline), lipid panel, fasting glucose",
      "purpose": "Verify TMAO level recovery off-cycle, lipid panel + glucose-homeostasis baseline recovery"
    }
  },
  "defaultVariant": "oral"
}
