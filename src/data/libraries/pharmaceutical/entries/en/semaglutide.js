// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.587Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "semaglutide",
  "name": "Semaglutide",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "GLP-1 receptor agonist, FDA-approved Rx for T2DM and obesity (Ozempic, Wegovy, Rybelsus). The blockbuster metabolic agent of the past decade.",
  "description": "Semaglutide is a long-half-life (~7 d) human GLP-1 analog developed by Novo Nordisk. Approved for T2DM in 2017 (Ozempic, FDA), for obesity in 2021 (Wegovy, FDA 2.4 mg weekly); oral form Rybelsus available since 2019. It stimulates glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, and centrally reduces appetite (POMC/CART activation). The STEP-1 trial (Wilding 2021 NEJM) showed mean 14.9% body weight loss over 68 weeks on Wegovy in non-diabetic obesity, approaching post-bariatric outcomes. SUSTAIN-6 (Marso 2016 NEJM) and SELECT (Lincoff 2023 NEJM) confirmed cardiovascular outcome benefit.",
  "keyInfo": [
    {
      "label": "ATC code",
      "value": "A10BJ06"
    },
    {
      "label": "Prescription",
      "value": "Prescription only (Rx)"
    },
    {
      "label": "Mechanism",
      "value": "GLP-1 receptor agonist"
    },
    {
      "label": "Half-life",
      "value": "~7 days (weekly dosing)"
    },
    {
      "label": "Onset",
      "value": "1-2 weeks (appetite), 12-16 weeks (HbA1c steady-state)"
    }
  ],
  "mechanism": "GLP-1 receptor agonist that glucose-dependently (only at hyperglycemia) stimulates β-cell insulin secretion, suppresses α-cell glucagon secretion, slows gastric emptying, and in the hypothalamus (POMC/CART neurons) decreases appetite and increases satiety. C18 fatty acid conjugation provides albumin binding and slow elimination, enabling weekly dosing.",
  "legalStatus": "EU/HU: prescription only (Ozempic for T2DM, Wegovy for obesity, Rybelsus oral T2DM). USA: FDA Rx, not scheduled. 2022-2024 global supply shortage, off-label black-market use without medical supervision documented (FDA warning on compounded versions).",
  "bioavailability": "Oral (Rybelsus): ~1% (SNAC permeation enhancer, fasted); subcutaneous (Ozempic/Wegovy): ~89% — FDA labels",
  "onsetTime": "1-2 weeks (appetite suppression), 12-16 weeks (HbA1c steady-state)",
  "halfLife": "~7 days (enables once-weekly subcutaneous dosing)",
  "atcCode": "A10BJ06",
  "prescriptionStatus": "Prescription only (Rx), GLP-1 RA specialist gating in some EU countries",
  "indications": [
    "Type 2 diabetes mellitus (Ozempic 0.25-2.0 mg weekly)",
    "Chronic weight management in obesity (Wegovy 2.4 mg weekly, BMI ≥ 30 or BMI ≥ 27 + comorbidity)",
    "Type 2 diabetes oral form (Rybelsus 3-14 mg daily)",
    "MACE reduction in T2DM (Ozempic FDA cardiovascular indication, based on SUSTAIN-6)",
    "MACE reduction in overweight/obese non-diabetic adults with ASCVD (Wegovy 2024 FDA, based on SELECT)"
  ],
  "contraindications": [
    "Personal or family history of medullary thyroid carcinoma (MTC)",
    "Multiple endocrine neoplasia syndrome type 2 (MEN-2)",
    "Active pancreatitis or history of recurrent pancreatitis",
    "Pregnancy and lactation (teratogenic in animal studies)",
    "Severe gastroparesis or other significant GI motility disorder"
  ],
  "commonSideEffects": [
    "GI side effects (>20%): nausea, vomiting, diarrhea, constipation, eructation",
    "Most pronounced in dose escalation phase, usually subsides over 4-8 weeks",
    "Injection site reaction (Ozempic/Wegovy SC)",
    "Severe, rare: acute pancreatitis (FDA boxed warning), gallstones (rapid weight loss), diabetic retinopathy progression (rapid glycemia drop)",
    "Accelerated weight loss (-5 kg/3 mo) can drive lean mass loss without counterbalancing protein + resistance training"
  ],
  "cyp450": [
    "Not metabolized by CYP450 (proteolytic degradation, similar to native peptides)",
    "No major CYP-mediated drug interactions"
  ],
  "crossMolInteractions": [
    "Insulin, sulfonylureas: increased hypoglycemia risk, dose reduction required",
    "Oral medications (levothyroxine, warfarin, oral contraceptives): absorption may shift due to delayed gastric emptying, clinically usually not significant",
    "Other GLP-1 RA, DPP-4 inhibitor: redundant mechanism, do not combine",
    "Metformin, SGLT2i: synergistic, rational combination (ADA/EASD 2022)",
    "Alcohol: may increase pancreatitis risk, moderation"
  ],
  "benefits": [
    "HbA1c reduction average 1.5-1.8% (SUSTAIN trials)",
    "Body weight reduction averaging 14.9% over 68 weeks on Wegovy 2.4 mg (STEP-1)",
    "MACE reduction in T2DM (SUSTAIN-6, HR 0.74)",
    "MACE reduction in overweight/ASCVD non-diabetics (SELECT 2023, HR 0.80)",
    "Once-weekly SC dosing (vs daily insulin), convenient compliance"
  ],
  "quickStart": [
    "Once-weekly SC injection (abdomen, thigh, upper arm), rotating site plan",
    "Slow titration mandatory to mitigate GI side effects (4 weeks per dose step)",
    "Meals: smaller portions, slower eating, prioritize protein (preserve lean mass)",
    "Resistance training 2-3x weekly to minimize lean mass loss",
    "Strict hydration (1.5-2 L/day), compensate GI losses"
  ],
  "expectations": [
    {
      "label": "Weeks 1-4 (0.25 mg)",
      "body": "Starter dose, sub-therapeutic. Goal: build GI tolerance. Appetite reduction already noticeable. Nausea in 20%, usually mild."
    },
    {
      "label": "Weeks 5-12 (0.5-1.0 mg)",
      "body": "Therapeutic T2DM dose range. HbA1c reduction and weight loss (-3 ... -5 kg) appear. GI side effects subside."
    },
    {
      "label": "Weeks 13-68 (1.7-2.4 mg, Wegovy)",
      "body": "Obesity dose range. STEP-1 trial: average 14.9% weight loss. Goal: reach plateau around weeks 60-68. Bloodwork: lipids, HbA1c, liver, renal function, B12."
    }
  ],
  "quality": {
    "pure": [
      "Novo Nordisk Ozempic (T2DM), Wegovy (obesity), Rybelsus (oral T2DM): originator",
      "FlexTouch pen injector (Ozempic/Wegovy), single-use needles"
    ],
    "caution": [
      "FDA boxed warning: medullary thyroid carcinoma (MTC) in rodents, clinically uncertain",
      "Acute pancreatitis case reports, immediate care for abdominal pain",
      "Diabetic retinopathy progression with rapid HbA1c drop (ophthalmic monitoring)",
      "Lean mass loss with rapid weight loss (DEXA monitoring advised), protein + training to counterbalance",
      "Gallstone (cholelithiasis) risk rises 3-5% due to rapid weight loss"
    ],
    "avoid": [
      "MTC or MEN-2 family history (FDA boxed warning)",
      "Active pancreatitis or recurrent pancreatitis history",
      "Pregnancy, lactation (animal teratogenicity, no human safety data)",
      "Severe gastroparesis (effect may be counterproductive)",
      "Prior severe hypersensitivity (anaphylaxis, angioedema) to semaglutide or any excipient",
      "Concurrent another GLP-1 receptor agonist (liraglutide, dulaglutide, tirzepatide) — redundant risk",
      "Diabetic retinopathy under rapid HbA1c improvement (progression risk, ophthalmologic monitoring required)"
    ]
  },
  "interactions": [
    "Metformin: synergistic, standard ADA/EASD 2022 combo",
    "SGLT2 inhibitor: three-way synergistic mechanism in T2DM",
    "Insulin: combinable but dose reduction (~20%) needed due to hypoglycemia risk",
    "Sulfonylureas: hypoglycemia risk, reduce or discontinue",
    "Oral drugs (levothyroxine, warfarin): absorption may shift due to slowed gastric emptying"
  ],
  "studies": [
    {
      "title": "Once-weekly semaglutide in adults with overweight or obesity (STEP-1)",
      "authors": "Wilding JPH, Batterham RL, Calanna S et al.",
      "journal": "N Engl J Med. 2021;384(11):989-1002.",
      "pmid": "33567185"
    },
    {
      "title": "Semaglutide and cardiovascular outcomes in patients with type 2 diabetes (SUSTAIN-6)",
      "authors": "Marso SP, Bain SC, Consoli A et al.",
      "journal": "N Engl J Med. 2016;375(19):1834-1844.",
      "pmid": "27633186"
    },
    {
      "title": "Semaglutide and cardiovascular outcomes in obesity without diabetes (SELECT)",
      "authors": "Lincoff AM, Brown-Frandsen K, Colhoun HM et al.",
      "journal": "N Engl J Med. 2023;389(24):2221-2232.",
      "pmid": "37952131"
    },
    {
      "title": "Oral semaglutide and cardiovascular outcomes in patients with type 2 diabetes (PIONEER 6)",
      "authors": "Husain M, Birkenfeld AL, Donsmark M et al.",
      "journal": "N Engl J Med. 2019;381(9):841-851.",
      "pmid": "31185157"
    },
    {
      "title": "Tirzepatide versus semaglutide once weekly in patients with type 2 diabetes (SURPASS-2)",
      "authors": "Frías JP, Davies MJ, Rosenstock J et al.",
      "journal": "N Engl J Med. 2021;385(6):503-515.",
      "pmid": "34170647"
    },
    {
      "title": "Tirzepatide once weekly for the treatment of obesity (SURMOUNT-5 head-to-head)",
      "authors": "Aronne LJ, Horn DB, le Roux CW et al.",
      "journal": "N Engl J Med. 2025.",
      "pmid": "40353578"
    },
    {
      "title": "Semaglutide 2.4 mg once a week in adults with overweight or obesity, and type 2 diabetes (STEP 2)",
      "authors": "Davies M, Færch L, Jeppesen OK et al.",
      "journal": "Lancet. 2021;397(10278):971-984.",
      "pmid": "33667417"
    }
  ],
  "faq": [
    {
      "q": "What is the difference between Ozempic and Wegovy?",
      "a": "Both are semaglutide active ingredient in SC injection but with different doses and indications: Ozempic 0.25-2.0 mg/week for T2DM, Wegovy 0.25-2.4 mg/week for obesity (BMI ≥ 30, or BMI ≥ 27 + comorbidity). Rybelsus is the oral form for T2DM (3-14 mg daily). Same semaglutide molecule, only dose level and clinical indication differ."
    },
    {
      "q": "Will weight return after stopping semaglutide?",
      "a": "STEP-4 trial (Rubino 2021 JAMA, PMID 33755728) showed about 2/3 weight regain within 1 year after semaglutide discontinuation. Obesity specialists currently treat the drug as a chronic, lifelong therapy. Non-pharmacological lifestyle change (intensive nutrition coaching + resistance training) supports maintenance but does not fully replace."
    },
    {
      "q": "What is \"Ozempic face\" or \"GLP-1 muscle loss\"?",
      "a": "Rapid weight loss (>1% body weight/week) drives subcutaneous facial fat loss too, causing an older appearance. SURMOUNT-1 and STEP DEXA data show ~25-40% of mass loss is lean mass. To mitigate: 1.4-1.6 g/kg protein daily, 2-3 weekly resistance sessions, creatine monohydrate, slow titration. Similar ratio in surgical weight-loss trials."
    },
    {
      "q": "What does the SELECT trial show in non-diabetic obesity?",
      "a": "The Lincoff 2023 NEJM SELECT randomized placebo-controlled trial followed 17,604 overweight/obese, ASCVD-positive, NON-diabetic adults (mean 3.3 years). Semaglutide 2.4 mg weekly reduced major adverse cardiovascular event (MACE) risk by 20% (HR 0.80, p<0.001). This drove the 2024 FDA indication expansion to non-diabetic ASCVD."
    },
    {
      "q": "What if nausea does not subside?",
      "a": "In 80% of cases nausea peaks during dose escalation and subsides significantly over 4-8 weeks. Mitigation: smaller and slower meals, avoid fatty/sugary food, hydration, inject on empty stomach, stay at dose for 4-8 weeks instead of escalating. If persistent, dose reduction or switching (Tirzepatide similar efficacy, better GI profile)."
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Weeks 1-4 (start)",
        "dose": "0.25"
      },
      {
        "phase": "Weeks 5-8",
        "dose": "0.5"
      },
      {
        "phase": "Weeks 9-12",
        "dose": "1.0"
      },
      {
        "phase": "Weeks 13-16",
        "dose": "1.7"
      },
      {
        "phase": "Wegovy target (obesity)",
        "dose": "2.4"
      }
    ],
    "unit": "mg/hét SC",
    "note": "Once-weekly SC injection. Slow titration MANDATORY for GI tolerance (4 wks per dose). T2DM target Ozempic 0.5-2.0 mg/week, obesity target Wegovy 2.4 mg/week. On GI symptoms stay at dose for 4-8 weeks instead of escalating."
  }
}
