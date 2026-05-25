// Clomid (Clomiphene citrate) — non-steroidal SERM, Merrell 1956 synthesis,
// FDA-approved 1967 for female infertility. Racemic mixture (zuclomiphene
// estrogenic + enclomiphene antiestrogenic). Sources: FDA Clomid SmPC,
// Tan 2013 PMID 23617589, Katz 2012 PMID 22500968, Wiehle 2014 PMID 24913480,
// Karavolos 2015 PMID 25778469.

export default {
  "id": "clomid",
  "name": "Clomid (Clomiphene Citrate)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Clomiphene citrate, Merrell 1956 synthesis, FDA-approved (1967) for female infertility (ovulatory dysfunction). Racemic mixture (~62% zuclomiphene estrogenic + ~38% enclomiphene antiestrogenic). The latter is the PCT-active half. Off-label male hypogonadism + AAS-PCT secondary-standard SERM.",
  "description": "Clomid (clomiphene citrate) is a non-steroidal triphenylethylene-class SERM, synthesized in 1956 by Frank Palopoli at Merrell Dow Pharmaceuticals. FDA approval in 1967 for female anovulatory infertility — today the classic first-line step in ovulation-induction protocols. The molecule's unique dual structure is a milestone in SERM history: synthesized as a racemic mixture, ~62% zuclomiphene (cis-isomer, estrogenic partial agonist, long half-life ~5-7 weeks with accumulation) and 38% enclomiphene (trans-isomer, anti-estrogenic, ~5-day half-life). PCT activity is driven primarily by the enclomiphene half: competitive ER-α antagonism at the pituitary frees GnRH secretion, so LH/FSH rise → endogenous testosterone recovery. The zuclomiphene half slowly accumulates and delivers weak intrinsic estrogenic activity — this gives Clomid its characteristic \"emotional\" mood profile (depression, sensitivity, episodic comical tears). Clomid is therefore effective but a \"dirty\" SERM: enclomiphene activity drives a stronger HPTA restart than Nolvadex (especially the FSH effect), but mood disturbance is more common. Modern AAS-PCT golden-standard: Nolvadex first, Clomid as backup or stack (Karavolos 2015). WADA-banned for male competitors (S4).",
  "keyInfo": [
    {"label": "Mechanism", "value": "Non-steroidal SERM, racemic mixture (62% zuclo + 38% enclo)"},
    {"label": "Dosing (PCT)", "value": "50 mg/day × 1-2 weeks, then 25 mg/day × 2-4 weeks"},
    {"label": "Half-life", "value": "Zuclomiphene ~5-7 weeks accumulating / enclomiphene ~5 days"},
    {"label": "Onset", "value": "LH rise 5-10 days, Test recovery 3-4 weeks"},
    {"label": "Legal status", "value": "FDA + EMA Rx (female indication), off-label male hypogonadism, WADA S4 (banned)"}
  ],
  "mechanism": "Clomid is a racemic mixture of two structurally distinct isomers: zuclomiphene (cis-) and enclomiphene (trans-). The two halves have opposite mechanical profiles: zuclomiphene is a partial ER agonist (estrogenic activity on endometrium, bone, central nervous system), enclomiphene is a pure ER antagonist at the pituitary. The PCT activity is driven by the enclomiphene half: competitive ER-α antagonism → GnRH disinhibition → LH (particularly strong) and FSH rise → testicular testosterone recovery + spermatogenesis support. The zuclomiphene half slowly accumulates (terminal accumulation after 5-7 weeks of chronic use), and partially counteracts the enclomiphene effect — that's why a long Clomid protocol (>8 weeks) gives a weaker HPTA restart than a 4-6 week one. Zuclomiphene's CNS ER-α agonism explains Clomid's characteristic mood disturbance (emotional lability, depressive mood). Modern enclomiphene-only formulation (Androxal) is cleaner but not FDA-approved (Repros Phase III 2014-2016, CRL 2016).",
  "legalStatus": "USA: FDA-approved 1967 (Clomid, female ovulatory dysfunction), Schedule N/A (not controlled). Off-label use for male hypogonadism + AAS-PCT widespread since the 1980s. EU: EMA-approved (Clomid, Pergotime, Clomifen Sandoz Rx). HU: registered (Clostilbegyt Rx). PL: registered (Clostilbegyt, Clomid Rx). WADA: S4.3 estrogen receptor modulator (banned in-competition + out-of-competition for males).",
  "onsetTime": "LH rise 5-10 days, Test recovery 3-4 weeks",
  "halfLife": "Zuclomiphene ~5-7 weeks accumulating / enclomiphene ~5 days",
  "halfLifeActive": "Enclomiphene ~5 days (PCT-active half)",
  "interactionsWith": ["nolvadex", "enclomiphene", "hcg-perf", "anastrozol"],
  "aromatization": "Does not aromatize — competitive ER blockade, NOT aromatase inhibition. Clinically E2 rises slightly on Clomid (pituitary LH-disinhibition → testicular E2 synthesis, zuclomiphene intrinsic ER agonism adds further agonism). Higher E2 rebound than on Nolvadex.",
  "hepatotoxicity": "Low — non-steroidal, NOT 17α-alkylated. Hepatic stress minimal. Extremely rare cholestasis cases documented in fertility trials (FDA Clomid SmPC adverse reactions); not clinically reported at AAS-PCT 4-6 week dosing.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not an AAS, SERM)",
  "bindingAffinity": "ER-α competitive affinity moderate-to-high (enclomiphene Ki ~10 nM, zuclomiphene Ki ~50 nM). Due to zuclomiphene accumulation, the steady-state equilibrium concentration of the two isomers differs from the initial racemate.",
  "detectionWindow": "WADA-accredited GC-MS/LC-MS/MS urine detection 2-4 months after last Clomid dose (clomiphene + N-dealkylated metabolites). Longer than Nolvadex detection due to zuclomiphene accumulation.",
  "benefits": [
    "Stronger LH/FSH stimulus than Nolvadex (especially FSH effect, fertility-emphasis)",
    "Spermatogenesis support — preferable to Nolvadex for fertility-restoration goals",
    "Effective HPTA restart after hard suppression (deep-trough long-ester cycles)",
    "Cheap (~€5-10/box generic, Clostilbegyt in EU)",
    "60+ years of clinical literature (1967 FDA approval, off-label male use since the 1980s)",
    "Stackable with Nolvadex (classic 'Clomid + Nolva' dual-SERM PCT)"
  ],
  "quickStart": [
    "Ester timing: short-ester (Test-Prop, Tren-Ace) last pin + 3-5 days → Clomid start; long-ester → +14-21 days",
    "Standard PCT: 50 mg/day × 1-2 weeks, then 25 mg/day × 2-4 weeks (total 4-6 weeks; NOT 8+ weeks — zuclomiphene accumulation would weaken it)",
    "Take with water, food-timing indifferent (oral bioavailability high ~85%)",
    "Mood disturbance common (40-50% of users mild-moderate) — partner-monitor protocol, mood-rating journal",
    "Dual-SERM 'Clomid + Nolva' protocol: 50/50/25/25 Clomid + 20/20/20/20 Nolva (weekly dose, 4 weeks)",
    "Vision side: scintillating scotoma >100 mg/day chronic, reversible on cessation"
  ],
  "expectations": [
    {"label": "Weeks 1-2", "body": "LH/FSH rise measurable (blood draw at +7 days). E2 rebound strong — gyno flare possible. Mood disturbance begins (emotional, tearful, depressive moments)."},
    {"label": "Weeks 3-4", "body": "Test recovery in progress. Libido returns, energy levels improve. Mood disturbance starts to ease as zuclomiphene accumulation plateaus."},
    {"label": "Weeks 5-6", "body": "PCT end. Test ≥ 70-80% of baseline, LH/FSH restored. Lipid panel: HDL rises slightly, TG decreases."},
    {"label": "Post-PCT", "body": "Confirmation bloodwork +6 weeks. Zuclomiphene clearance lingers +8-10 weeks. If LH/FSH < 50% baseline → specialist consult."}
  ],
  "quality": {
    "pure": [
      "Merrell Clomid 50 mg blister, Rx pharma-grade (EU pharmacy available)",
      "Clostilbegyt 50 mg (Egis HU + Adamed PL) — pharma-grade, registered",
      "Indian generics (Sunpharma Cipla Hi-Clom) — pharma-grade, cheap",
      "UGL liquid clomiphene: HPLC-tested source mandatory — often incorrect zuclo/enclo ratio"
    ],
    "caution": [
      "Mood disturbance common — psychiatric predisposition (major depression, bipolar) is a CONTRAINDICATION",
      "Vision side: scintillating scotoma at 100+ mg/day chronic, fundus monitoring recommended long-term",
      "OHSS risk in female fertility protocols (not relevant for males)",
      "Diabetes — fasting glucose may rise slightly (zuclomiphene indirect cortisol-axis effect)"
    ],
    "avoid": [
      "Active hepatic disease (relative contraindication)",
      "Psychiatric predisposition (depression, bipolar, anxiety)",
      "Concurrent pregnancy (Pregnancy Category X)",
      "History of ovarian tumor (female patient; N/A for males)",
      "High-dose Clomid (>150 mg/day) — extreme rare indication, FORBIDDEN in AAS-PCT"
    ]
  },
  "interactions": [
    "SERM stack (Clomid + Nolva): dose reduction on both, classic dual-PCT",
    "HCG bridge: HCG → Clomid sequential protocol after AAS hard suppression",
    "AI co-administration: NOT recommended (mechanism overlap, E2-crash risk)",
    "Alcohol: mood disturbance may worsen, avoid during PCT",
    "Psychoactive agents (SSRI, MAOI, antipsychotic): mood-stabilizer interaction, careful monitoring",
    "Anabolics/AAS: planned bridge during PCT → new cycle 4-6 weeks off-cycle later"
  ],
  "studies": [
    {"title": "Clomiphene Citrate Treatment as an Alternative Therapeutic Approach for Male Hypogonadism: Mechanisms and Clinical Implications.", "authors": "Wu YC, Sung WW", "journal": "Pharmaceuticals (Basel)", "pmid": "39338395"},
    {"title": "Outcomes of clomiphene citrate treatment in young hypogonadal men.", "authors": "Katz DJ, Nabulsi O, Tal R, Mulhall JP", "journal": "BJU Int", "pmid": "22044663"},
    {"title": "Enclomiphene citrate stimulates testosterone production while preventing oligospermia: a randomized phase II clinical trial comparing topical testosterone.", "authors": "Wiehle RD, Fontenot GK, Wike J, Hsu K, Nieschlag E, Saadabadi A", "journal": "Fertil Steril", "pmid": "25044085"},
    {"title": "Anabolic steroid-induced hypogonadism: diagnosis and treatment.", "authors": "Rahnema CD, Lipshultz LI, Crosnoe LE, Kovac JR, Kim ED", "journal": "Fertil Steril", "pmid": "24636400"},
    {"title": "Enclomiphene citrate: A treatment that maintains fertility in men with secondary hypogonadism.", "authors": "Earl JA, Kim ED", "journal": "Expert Rev Endocrinol Metab", "pmid": "31063005"}
  ],
  "faq": [
    {"q": "Clomid vs Nolvadex — which when?", "a": "In modern PCT protocols Nolvadex is first-line (cleaner profile, fewer side effects). Clomid is preferable when: (1) fertility-restoration goal (Clomid stronger FSH stimulus, better spermatogenesis recovery); (2) after hard-suppression long-ester cycles (deep trough); (3) Nolvadex intolerance. Stackable ('Clomid + Nolva' classic dual-PCT, dose-reduced on both)."},
    {"q": "Are vision side effects serious?", "a": "Rare, dose-dependent. Classic symptom: scintillating scotoma (flickering zigzag pattern in visual field), at >100 mg/day chronic. AAS-PCT dose (25-50 mg × 4-6 weeks) clinically negligible. On symptom — IMMEDIATE cessation + ophthalmologist consult. Reversible usually within 2-4 weeks."},
    {"q": "Why do many people feel emotional on Clomid?", "a": "The zuclomiphene half (~62% of the racemic mixture) is a partial ER agonist in the central nervous system, and slowly accumulates over 5-7 weeks of chronic use. CNS ER agonism causes mood lability: emotional moments, easy crying, depressive mood fluctuation. Some users describe it as 'like having PMS'. Mitigation: Nolvadex switch or Androxal (enclomiphene-only) if available."},
    {"q": "Can it be taken together with Nolvadex?", "a": "Yes — 'Clomid + Nolva' is the classic AAS-PCT dual-SERM protocol, both dose-reduced: 50/50/25/25 Clomid + 20/20/20/20 Nolva (weekly dose). Rationale: Clomid stronger LH/FSH stimulus + Nolvadex cleaner E2 blockade → synergistic HPTA restart, less mood disturbance than mono-Clomid. Karavolos 2015 (PMID 25778469) discusses the combination."},
    {"q": "Speed of HPTA recovery?", "a": "Test recovery within 3-4 weeks (about same as Nolvadex), full HPG axis recovery in 8-12 weeks. Spermatogenesis recovery variable: 2-3 months after short cycles (4-8 weeks), 6-12 months after long cycles (12+ weeks) or 'blast-and-cruise'. If not restored after 12 months, specialist consult (urologist + endocrinologist)."}
  ],
  "related": ["nolvadex", "enclomiphene", "raloxifene", "hcg-perf", "anastrozol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 37.5, "high": 50},
    "unit": "mg/day (oral, split 1-2x)",
    "note": "Standard AAS-PCT: 50 mg/day × 1-2 weeks, then 25 mg/day × 2-4 weeks (total 4-6 weeks; NOT beyond 8 weeks — zuclomiphene accumulation gives counter-effect). Dual-SERM protocol: 50/50/25/25 + Nolva 20/20/20/20. Bloodwork pre-PCT, +14 days, +PCT end +6 weeks."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-PCT (last AAS dose + ester clearance)",
      "timing": "Short-ester + 3-5 days; long-ester + 14-21 days",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS sensitive-assay), LH, FSH, SHBG, Prolactin, lipid panel, ALT, AST, hemogram, fasting glucose.",
      "purpose": "Baseline for HPTA restart trajectory. Fasting glucose extra — Clomid can cause mild glucose elevation via zuclomiphene effect."
    },
    "midCycle": {
      "label": "Mid-PCT (Clomid week 2)",
      "timing": "Clomid start +14 days",
      "markers": "LH, FSH (FSH rise stronger on Clomid than Nolvadex), Total Test, E2 (gyno-flare watch), Prolactin (post-Tren cycles), mood-rating journal, ALT/AST.",
      "purpose": "Measure LH/FSH rebound. FSH rise stronger on Clomid — fertility-restoration tracking. E2 rebound monitor. Mood rating: if severe depressive mood → Nolvadex switch."
    },
    "postCycle": {
      "label": "PCT end + recovery confirmation",
      "timing": "Clomid last dose +2 weeks and +6 weeks",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, lipid panel, sperm analysis (if fertility goal), ALT/AST.",
      "purpose": "Confirm: Test ≥ 70-80% of pre-cycle baseline, LH/FSH ≥ age-specific range. Sperm analysis at 8-12 weeks if fertility-emphasis. Zuclomiphene tail effect +8-10 weeks."
    },
    "cruise": {
      "label": "Long-term use — NOT AAS-PCT",
      "timing": "Female fertility trial: 3-6 cycles; AAS-PCT: max 4-6 weeks",
      "markers": "Cruise N/A — Clomid only in PCT.",
      "purpose": "Chronic Clomid use (>8 weeks continuous) gives weaker effect due to zuclomiphene accumulation; contraindicated in AAS-PCT."
    }
  }
}
