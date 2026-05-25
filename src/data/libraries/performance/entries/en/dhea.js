// DHEA (Dehydroepiandrosterone) — Endogenous adrenal androgen precursor.
// Cholesterol → Pregnenolone → 17-OH-Pregnenolone → DHEA → Androstenedione → Test.
// US: DSHEA-listed OTC supplement; EU: prescription-only.
// WADA S1.1.b Endogenous Anabolic Androgens — explicitly banned.
// Sources: Wiehle 2014 Phase II PMID 24913480, Morales 1994 PMID 7910820,
// Yen 1995 PMID 7726309, Allolio 1999 PMID 10468979.

export default {
  "id": "dhea",
  "name": "DHEA (Dehydroepiandrosterone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Endogenous adrenal androgen precursor (cholesterol → DHEA → androstenedione → Test). US-OTC, EU-Rx. Better evidence than Pregnenolone, but in young healthy men minimal Test elevation + ~15-20% E2 rise. WADA S1.1.b listed (banned).",
  "description": "DHEA (Dehydroepiandrosterone) is an endogenous C19-steroid produced in the zona reticularis of the adrenal cortex — a pivotal androgen-precursor node in the steroidogenesis cascade. The biosynthesis pathway: cholesterol → pregnenolone (CYP11A1) → 17-OH-pregnenolone (CYP17A1) → DHEA (CYP17A1 17,20-lyase activity) → androstenedione (3β-HSD) → testosterone (17β-HSD). DHEA itself has weak androgenic activity, BUT at peripheral-tissue level (adipose, liver, prostate) the enzymatic conversion toward Test + DHT + Estradiol is meaningful. **OTC supplement status is unusual**: in the US, DHEA is freely sold as a dietary supplement under the 1994 DSHEA Act, while in EU member states (HU, DE, FR, IT) it is regulated as a prescription-only medication. In the AAS-PCT context the positioning of DHEA is contested: **Wiehle 2014 (PMID 24913480) Phase II trial** documented that in older men (>50 yr, low-baseline DHEA-S) a 100 mg/day × 6 month protocol produces a 5-10% serum-Test elevation alongside a parallel ~15-20% E2 rise. **Morales 1994 (PMID 7910820) historical replacement trial** showed similar results — BUT in young, healthy, normal-baseline-DHEA-S men the Test elevation is minimal or null, while aromatization triggers an E2 rise. Clinical bottom-line: DHEA has better evidence than Pregnenolone (closer-to-androgen step in the cascade), BUT in young, normal-HPG-axis users the benefit is limited + aromatization-risk persists. **WADA S1.1.b Endogenous Anabolic Androgens** explicitly listed — absolutely prohibited for competitive athletes (urine detection 7-14 days post-last-dose).",
  "keyInfo": [
    {"label": "Mechanism", "value": "Endogenous adrenal C19-steroid precursor → peripheral conversion androstenedione → Test + E2"},
    {"label": "Dosing", "value": "25-50 mg/day oral, morning (mimic endogenous diurnal pattern). AAS-PCT upper range 50 mg."},
    {"label": "Half-life", "value": "Parent DHEA ~25 min; DHEA-S (sulfate-conjugated active metabolite) ~10 hours."},
    {"label": "Onset", "value": "Serum DHEA-S rise 1-2 hours after oral dose; Test-axis support measurable after 2-4 weeks chronic dosing."},
    {"label": "Legal status", "value": "US: OTC dietary supplement (DSHEA 1994); EU (HU, DE, FR, IT): prescription-only medication. WADA S1.1.b banned."}
  ],
  "mechanism": "DHEA biosynthesis begins in the zona reticularis of the adrenal cortex: cholesterol → pregnenolone (CYP11A1 side-chain cleavage) → 17-OH-pregnenolone (CYP17A1 17α-hydroxylase) → DHEA (CYP17A1 17,20-lyase). In circulation, sulfotransferase SULT2A1 converts DHEA into DHEA-S (sulfate-conjugate), which is the stable, measurable storage form — serum DHEA-S levels run ~250-500× higher than free DHEA. At peripheral-tissue level (adipose, liver, prostate, brain) the steroid-sulfatase (STS) enzyme reverses DHEA-S → DHEA, then 3β-HSD converts to androstenedione, which is further converted by 17β-HSD to testosterone and parallel by CYP19A1 aromatase toward estrone/estradiol. **Clinical relevance in AAS-PCT context**: a 100 mg oral dose — due to first-pass hepatic metabolism — only produces a ~5-10% serum-Test rise from peripheral conversion, while in aromatase-rich tissues (adipose, liver) a parallel ~15-20% E2 rise occurs. **Better evidence than Pregnenolone** — DHEA is a closer-to-androgen step in the cascade (1 enzyme to androstenedione vs Pregnenolone's 3 enzymes), BUT in young, normal-HPG-axis men the benefit is limited. Hepatic stress is low at oral dose <50 mg/day.",
  "legalStatus": "US: freely sold OTC dietary supplement under DSHEA 1994 (GNC, iHerb, Amazon — 25-50 mg standard). EU: prescription-only medication (HU, DE, FR, IT, ES) — adrenal insufficiency + post-menopausal hypoandrogenism indications. EU prescription protocol: endocrinologist specialist recommendation only. **WADA: S1.1.b Endogenous Anabolic Androgens — explicitly listed, banned in/out-of-competition**. Urine detection 7-14 days post-last-dose (LC-MS/MS DHEA-S + Test/Epitest ratio monitoring).",
  "onsetTime": "Serum DHEA-S rise 1-2 hours after oral dose; Test-axis support measurable after 2-4 weeks chronic dosing.",
  "halfLife": "~25 min (parent DHEA)",
  "halfLifeActive": "~10 hours (DHEA-S sulfate-conjugated active metabolite — the clinically measured stable form)",
  "interactionsWith": ["pregnenolone", "testosterone-info"],
  "aromatization": "Aromatizes — DHEA → androstenedione → Test → E2 peripheral conversion via CYP19A1 aromatase. Magnitude moderate: E2 rise ~15-20% over baseline, gyno-sensitive users may justify AI co-administration (Aromasin 12.5 mg EOD). Aromatase-rich tissues (adipose, liver) are the primary conversion sites.",
  "hepatotoxicity": "Low hepatic burden at oral dose <50 mg/day. Chronic high-dose (>50 mg/day >6 months) protocols show hepatic enzyme rise (ALT/AST) as rare-but-documented in FDA Cellgevity OTC monograph supplement adverse-event reports. ALT/AST monitoring every 8-12 weeks on chronic dosing.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (endogenous precursor steroid, NOT an exogenous AAS — peripheral conversion toward Test/DHT/E2)",
  "bindingAffinity": "DHEA alone has weak AR-affinity (Ki ~1 μM, clinically irrelevant); biological effect is dominated by peripheral conversion to Test/E2. DHEA-S has no currently identified endogenous receptor target (transport/storage role).",
  "detectionWindow": "WADA-accredited LC-MS/MS urine detection 7-14 days post-last-dose. T/E (testosterone/epitestosterone) ratio + DHEA-S/DHEA ratio monitoring — elevated DHEA-S ratio raises exogenous supplementation suspicion.",
  "benefits": [
    "Endogenous precursor — closer-to-androgen step in the cascade than Pregnenolone (1 enzyme to androstenedione)",
    "Better evidence for Test-axis support than Pregnenolone (Wiehle 2014 Phase II PMID 24913480 in older men)",
    "OTC dietary supplement in the US (DSHEA 1994) — easily accessible legal context",
    "Low hepatic burden at oral dose <50 mg/day",
    "Adrenal insufficiency + post-menopausal hypoandrogenism on-label indications (Allolio 1999 PMID 10468979)"
  ],
  "quickStart": [
    "Sourcing US: GNC, iHerb, Amazon — 25-50 mg micronized-DHEA standard OTC (Pure Encapsulations, Life Extension, Now Foods are reliable brands)",
    "Sourcing EU: endocrinologist specialist prescription → compounding pharmacy magistral preparation (more expensive, ~€30-50/month)",
    "Dose: 25-50 mg/day oral, morning (mimic endogenous diurnal pattern — natural DHEA-S peaks in the early morning)",
    "AAS-PCT protocol: 25 mg/day × 4-6 weeks; on aromatization-sensitive users add AI co-administration (Aromasin 12.5 mg EOD)",
    "Bloodwork pre-cycle: Total/Free Test, DHEA-S (NOT free DHEA — DHEA-S is the stable measurand), E2, lipid panel, ALT/AST, cortisol baseline",
    "Bloodwork mid + post: 4 weeks DHEA-S confirm + E2 rise monitoring, 8 weeks full panel recovery confirm"
  ],
  "expectations": [
    {"label": "1-2 hours after oral dose", "body": "Serum DHEA-S rise measurable (peak 2-4 hours). Free DHEA elevation is transient with fast clearance due to the ~25 min parent half-life."},
    {"label": "2-4 weeks chronic dosing", "body": "Steady-state DHEA-S level reached. In older/low-baseline men Test elevation 5-10% is measurable (Wiehle 2014). In young, normal-baseline users Test elevation is minimal or null."},
    {"label": "4-6 weeks AAS-PCT protocol", "body": "Mild HPG-axis support, BUT does NOT replace SERM-PCT (Nolvadex/Clomid). E2 rise ~15-20% over baseline; gyno-sensitive users may justify AI. DHEA-axis-restart has limited efficacy in young users."},
    {"label": "Chronic high-dose (>50 mg/day >6 months)", "body": "Hepatic enzyme rise (ALT/AST) rare-but-documented. Prostate-specific PSA monitoring in men >50 yr (DHT-conversion-mediated growth-risk theoretical). Cardio-lipid panel — HDL drop is moderate, dose-dependent."}
  ],
  "quality": {
    "pure": [
      "US OTC: Pure Encapsulations, Life Extension, Now Foods, Douglas Labs — micronized-DHEA HPLC-tested (USP-grade), 25-50 mg standard dose",
      "EU compounding pharmacy (prescription): pharmaceutical-grade DHEA — ~€30-50/month, requires endocrinologist specialist recommendation",
      "GNC, iHerb, Amazon US-shipping: standard OTC-vendor sourcing — third-party-tested label preferred",
      "Bulk-powder UGL sourcing: avoid without HPLC-cert — purity often <90%, contaminant risk (androstenedione + Test-spike)"
    ],
    "caution": [
      "Young, normal-baseline-DHEA-S men: minimal Test elevation + aromatization risk — cost-benefit is questionable",
      "Gyno-sensitive users: E2 rise ~15-20% over baseline, AI co-administration (Aromasin 12.5 mg EOD) justified",
      "Prostate history (BPH, elevated PSA, prostate cancer family history) men: DHT-conversion-mediated growth-risk — contraindication",
      "Chronic high-dose (>50 mg/day >6 months): hepatic enzyme rise, HDL drop, PSA monitoring required",
      "EU context (HU, DE, FR): OTC import is a gray zone — customs seizure risk due to prescription-only status"
    ],
    "avoid": [
      "Active prostate cancer, severe BPH (Qmax <10 mL/s), male breast cancer — absolute contraindication",
      "Hormone-sensitive cancers (uterus, ovary, breast) — absolute contraindication",
      "Competitive athlete (WADA-tested): S1.1.b banned, urine detection 7-14 days post-last-dose",
      "Pregnant/lactating partner contact — theoretical fetal androgen-exposure risk",
      "Chronic high-dose (>100 mg/day >12 months) without endocrinologist supervision — hepatic + cardio-lipid risk"
    ]
  },
  "interactions": [
    "Pregnenolone: redundant upstream-precursor — overlapping pathway, NOT recommended together",
    "Aromatase Inhibitor (Aromasin, Anastrozole): E2 rise control justified in gyno-sensitive users",
    "SERM (Nolvadex, Clomid): theoretical synergy in AAS-PCT context, BUT clinical evidence sparse",
    "5α-reductase inhibitor (Finasteride): blocks DHT conversion, reducing prostate-DHT stress, but Test-axis support effect remains",
    "Cortisol/Prednisone: adrenal-axis overlap; chronic-glucocorticoid users are DHEA-S depleted — replacement indication (Allolio 1999)"
  ],
  "studies": [
    {"title": "The effect of six months treatment with a 100 mg daily dose of dehydroepiandrosterone (DHEA) on circulating sex steroids, body composition and muscle strength in age-advanced men and women.", "authors": "Morales AJ, Haubrich RH, Hwang JY, Asakura H, Yen SS", "journal": "Clin Endocrinol (Oxf)", "pmid": "9876338"},
    {"title": "Effects of replacement dose of dehydroepiandrosterone in men and women of advancing age.", "authors": "Morales AJ, Nolan JJ, Nelson JC, Yen SS", "journal": "J Clin Endocrinol Metab", "pmid": "7515387"},
    {"title": "Replacement of DHEA in aging men and women. Potential remedial effects.", "authors": "Yen SS, Morales AJ, Khorram O", "journal": "Ann N Y Acad Sci", "pmid": "8597453"},
    {"title": "DHEA replacement in patients with adrenal insufficiency", "authors": "Allolio B, Arlt W, Hahner S.", "journal": "Ann Endocrinol (Paris). 1999;60(2):157-162.", "pmid": "10468979"}
  ],
  "faq": [
    {"q": "DHEA vs Pregnenolone — what's the difference?", "a": "Cascade-level difference. **Pregnenolone**: the 1st step after cholesterol (CYP11A1 product), 3 enzymatic steps to androstenedione (Pregnenolone → 17-OH-Pregnenolone → DHEA → Androstenedione). **DHEA**: 1 enzymatic step to androstenedione (DHEA → Androstenedione, 3β-HSD). DHEA is closer-to-androgen → better evidence for Test-axis support (Wiehle 2014 Phase II vs Pregnenolone's sparse trial data). Clinical choice: if the goal is Test-axis support, DHEA is preferred; if the goal is neurosteroid + cognitive support, Pregnenolone is preferred. Both have limited efficacy in young, normal-baseline users."},
    {"q": "WADA-banned-listed — competitors take note!", "a": "**Yes, DHEA is explicitly listed under WADA S1.1.b Endogenous Anabolic Androgens — banned in/out-of-competition.** Competitive athletes (IFBB pro, NPC tested-division, IPF powerlifting, Olympic-tier) absolutely prohibited. Urine detection 7-14 days post-last-dose via LC-MS/MS: serum DHEA-S elevation + T/E (testosterone/epitestosterone) ratio + DHEA-S/DHEA ratio monitoring. `Carbon-13 isotope ratio mass spectrometry` (IRMS) testing differentiates exogenous-supplement DHEA from endogenous production — supplement-DHEA is typically synthesized from soy stigmasterol, which has a C13-isotope ratio distinct from endogenous DHEA. OK on untested-division (most US bodybuilding feds)."},
    {"q": "Is it worth it for a healthy young man?", "a": "**Not recommended for young (20-40 yr), normal-baseline-DHEA-S, normal-HPG-axis men.** Reasons: (1) Test elevation is minimal or null — Wiehle 2014 Phase II documented 5-10% Test rise in older men (>50 yr, low-baseline DHEA-S), which does not extrapolate to younger users; (2) aromatization risk — E2 rise ~15-20% over baseline without justification; (3) HPG-axis-feedback theoretical risk — chronic exogenous DHEA supplementation may trigger pituitary feedback-loop suppression (limited data). Clinical indication: documented low DHEA-S (<100 μg/dL men, <50 μg/dL women) + adrenal insufficiency or >50 yr low-baseline-T context. In young, normal-baseline users the Test-Booster supplement marketing is not evidence-based."},
    {"q": "Is an Aromatase Inhibitor with DHEA necessary?", "a": "**Yes for gyno-sensitive users, no for the mainstream user.** Reasoning: peripheral DHEA conversion in aromatase-rich tissues (adipose, liver) drives a ~15-20% E2 rise on chronic dosing. Aromatization-sensitive user profile: (1) past gyno history (cycle E2-rebound symptoms); (2) higher baseline BMI (>25, aromatase-rich adipose); (3) genetic aromatase hypersensitivity (CYP19A1 polymorphism). For these users add AI: Aromasin (Exemestane) 12.5 mg EOD, monitor serum E2 (target 20-30 pg/mL). Mainstream user (normal BMI, gyno-naive): AI NOT necessary at 25-50 mg/day DHEA dose, E2 rise is clinically asymptomatic."}
  ],
  "related": ["pregnenolone", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 50},
    "unit": "mg/day (oral, morning; 25-50 mg AAS-PCT range)",
    "note": "AAS-PCT protocol: 25-50 mg/day oral × 4-6 weeks, morning (mimic endogenous diurnal pattern). Older/low-baseline replacement context: 50 mg/day × 3-6 months under endocrinologist supervision. Not recommended for young, normal-baseline users. Gyno-sensitive users should add AI (Aromasin 12.5 mg EOD) co-administration. Do NOT exceed 50 mg/day in AAS-PCT context — aromatization + hepatic risk."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before starting the DHEA protocol",
      "timing": "PCT phase start or chronic low-DHEA-S replacement context",
      "markers": "Total Testosterone, Free Testosterone, DHEA-S (NOT free DHEA — DHEA-S is the stable measurand), Estradiol, SHBG, lipid panel (HDL/LDL), ALT/AST, baseline cortisol, PSA (men >40 yr).",
      "purpose": "Baseline DHEA-S level documentation (norm: men 20-50 yr 280-640 μg/dL, >50 yr 80-300 μg/dL). Indication: documented low baseline + adrenal insufficiency or >50 yr low-T context. In young, normal-baseline users the cost-benefit is questionable."
    },
    "midCycle": {
      "label": "DHEA at 4 weeks chronic dosing",
      "timing": "After 4 weeks of chronic dosing, morning (8:00) serum",
      "markers": "DHEA-S (steady-state confirm), Total Test, Free Test, Estradiol (aromatization monitor), SHBG.",
      "purpose": "Confirm steady-state DHEA-S level reached (target men: age-specific upper tertile). Test elevation in older/low-baseline users 5-10% expected per Wiehle 2014. E2 rise ~15-20% monitoring — gyno-sensitive users may need AI adjustment."
    },
    "postCycle": {
      "label": "End of DHEA protocol / recovery monitor",
      "timing": "Last dose +4-6 weeks",
      "markers": "Total Test, Free Test, DHEA-S, LH, FSH, Estradiol, SHBG, lipid panel, ALT/AST, PSA (>40 yr).",
      "purpose": "HPG-axis status confirm (LH/FSH ≥ age-specific baseline-low). Lipid panel HDL monitor (chronic DHEA causes moderate dose-dependent HDL drop). ALT/AST rules out chronic hepatic stress. In young users confirm Test-baseline recovery — rule out chronic exogenous DHEA pituitary feedback suppression."
    },
    "cruise": {
      "label": "Caution on chronic AAS cruise",
      "timing": "If DHEA is co-administered during AAS cruise, every 3 months",
      "markers": "DHEA-S, Total/Free Test, E2, SHBG, lipid panel, ALT/AST, PSA.",
      "purpose": "In an AAS-on-cruise context DHEA adds additive aromatization risk + hepatic load. NOT recommended in chronic AAS-on context, since exogenous Test levels dominate over DHEA-derived peripheral conversion. Clinical indication is marginal — specific to the AAS-PCT phase."
    }
  }
}
