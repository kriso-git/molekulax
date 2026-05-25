// HCG (Pregnyl / Novarel / Choragon) — Human Chorionic Gonadotropin, AAS-PCT
// framing. Cross-frame entry: the future peptide-library batch will add the
// `hcg-peptid` counterpart with fertility-clinic framing. Sources: FDA Pregnyl
// SmPC (Organon 1973), EMA Choragon SPC, Liu 2002 HCG dose-response PMID
// 12424222, Coviello 2005 PMID 16204261, Hsieh 2013 PMID 23316916.

export default {
  "id": "hcg-perf",
  "name": "HCG (Pregnyl / Novarel / Choragon)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Human Chorionic Gonadotropin — LH structural analog, Leydig-cell LHCGR receptor stimulus. AAS-PCT bridge against testicular atrophy and for HPTA restart. Cross-frame: future peptide library will add `hcg-peptid` with fertility-clinic framing.",
  "description": "HCG (Human Chorionic Gonadotropin) is a 244-amino-acid glycoprotein (α + β subunit), structurally an LH analog with ~80% sequence identity on the β subunit. Endogenous source: pregnancy placental syncytiotrophoblast → blood + urine (peak at weeks 8-12 of pregnancy). Clinical HCG sources: (1) urinary-extracted (uHCG) — purified from pregnant women's urine (Pregnyl Organon 1973, Novarel Ferring 1973, Choragon Ferring EU); (2) recombinant (rHCG / choriogonadotropin alfa) — Serono Ovidrel/Ovitrelle CHO-expressed, higher purity. Mechanism: Leydig-cell LHCGR receptor agonism → exogenous LH mimicry → testicular testosterone production. **AAS-PCT context**: HCG bridges the LH suppression window when the user's own pituitary still isn't secreting enough LH. Two main usage protocols: **mid-cycle HCG** (250-500 IU 2-3x/week throughout the AAS cycle — testicular atrophy prevention); **PCT-blast HCG** (1500-2500 IU EOD × 10-14 days after the last AAS pin, then transition to SERM PCT). **Cross-frame note**: this is the `-perf` suffix entry; the future peptide library batch will add the `hcg-peptid` entry (fertility-clinic framing — IVF male factor + secondary hypogonadism Rx context, IDENTICAL molecule, different narrative). WADA-banned year-round (S2 Peptide Hormones).",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Leydig-cell LHCGR receptor agonist (LH structural analog, ~80% β-subunit identity)"
    },
    {
      "label": "Dosing (PCT-blast)",
      "value": "1500-2500 IU EOD × 10-14 days"
    },
    {
      "label": "Dosing (mid-cycle)",
      "value": "250-500 IU 2-3x/week"
    },
    {
      "label": "Half-life",
      "value": "uHCG: 24-36 h / rHCG (Ovidrel): 30-50 h"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA Rx (fertility indications), WADA S2 (banned in+out-of-competition)"
    }
  ],
  "mechanism": "HCG is a 244-amino-acid heterodimeric glycoprotein: α subunit (shared with LH, FSH, TSH) + β subunit (HCG-specific, ~80% LH-β sequence identity). The β subunit C-terminus has an extra ~24-amino-acid tail (CTP), which gives HCG its longer t1/2 (vs LH ~30 min). Receptor binding: Leydig-cell LHCGR (luteinizing hormone / chorionic gonadotropin receptor) agonist → cAMP-PKA pathway → steroidogenesis activation (cholesterol → pregnenolone → progesterone → 17α-OH-progesterone → testosterone). In the AAS-PCT context, the question: the HPTA axis is suppressed from above (pituitary LH), but Leydig-cell functionality is preserved on the HCG mid-cycle protocol → faster post-cycle recovery.",
  "legalStatus": "USA: FDA Rx Pregnyl (Organon 1973, now Merck), Novarel (Ferring 1973), Ovidrel (Serono recombinant 2000). Indications: female ovulation induction, male hypogonadism, cryptorchidism. EU: EMA Rx (Pregnyl, Choragon, Ovitrelle). HU + PL: registered (Pregnyl, Choragon Rx). WADA: S2.2 Peptide Hormones (banned in-competition + out-of-competition for all male competitors year-round).",
  "onsetTime": "Leydig stimulus 24-48 h, visible Test rise 3-7 days after initial dose",
  "halfLife": "uHCG (Pregnyl/Choragon) ~24-36 h; rHCG (Ovidrel/Ovitrelle) ~30-50 h",
  "halfLifeActive": "uHCG ~24-36 h; clinical effect 5-7 days (after single injection)",
  "interactionsWith": [
    "nolvadex",
    "clomid",
    "enclomiphene",
    "anastrozol",
    "letrozol",
    "testosterone-info"
  ],
  "aromatization": "Indirect: HCG → Leydig Test → peripheral E2 rise via testicular + adipose CYP19 aromatase. Magnitude moderate-to-high (Test rise greater than on TRT), at higher HCG doses (>2000 IU EOD) AI co-administration (Anastrozol 0.25-0.5 mg EOD) is often warranted in gyno-sensitive users. On PCT-blast protocol, E2 rebound watch is mandatory.",
  "hepatotoxicity": "No hepatic stress — protein-based subcutaneous (SC) or intramuscular (IM) injection, NOT oral, NOT 17α-alkylated. Hepatic enzyme rise not documented in trial database.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not an AAS; indirect testicular Test stimulus)",
  "bindingAffinity": "LHCGR receptor affinity Kd ~0.1 nM. Unique property: due to the CTP tail, HCG dissociates from the receptor more slowly than LH → prolonged stimulation per molecule.",
  "detectionWindow": "WADA-accredited immunoassay (urinary β-HCG) detection: 5-7 days after single bolus in urine; 10-14 days after chronic protocol. In female-pregnancy context, HCG is detectable anywhere (idiopathic false-positive rare, only germ-cell tumor).",
  "benefits": [
    "Mid-cycle testicular atrophy prevention (250-500 IU 2-3x/week, retaining small testicular size at AAS cycle end)",
    "PCT-blast HPTA restart with Leydig bypass (1500-2500 IU EOD × 10-14 days, then transition to SERM PCT)",
    "Faster post-cycle Test recovery (preserved Leydig functionality)",
    "Broad clinical trial database (60+ years in fertility-clinic context)",
    "Elevation of endogenous Test level + intratesticular testosterone (ITT) preservation",
    "Cheap (Pregnyl 5000 IU vial ~€20 EU pharmacy)"
  ],
  "quickStart": [
    "Mid-cycle protocol: 250-500 IU 2-3x/week (e.g. Mon + Thu + Sat) throughout the AAS cycle; for gyno-sensitive users, Anastrozol 0.25 mg EOD co-admin",
    "PCT-blast protocol: 10-14 days after the last cycle pin, 1500-2500 IU EOD × 10-14 days; then SERM PCT (Nolvadex 40/20/20/20 mg/day)",
    "Reconstitution: bact water 1-2 mL/vial (5000 IU vial → 5000 IU/mL or 2500 IU/mL concentration); SC or IM injection (SC more comfortable)",
    "Storage: lyophilized vial at room temperature (long-term storage 2-8°C); reconstituted solution at 2-8°C for 30 days",
    "Pre-protocol bloodwork baseline + protocol week 2 (Test + E2 + LH/FSH); post-protocol +2 weeks confirm",
    "ITT tracking indirect: Test/E2 ratio or testicular volume (palpation or ultrasound)"
  ],
  "expectations": [
    {
      "label": "Mid-cycle week 1",
      "body": "Testicular fullness returns (visibly measurable if atrophy already set in). Subjective: 'slightly better' sensation."
    },
    {
      "label": "Mid-cycle chronic",
      "body": "Testicular volume stabilizes at baseline (NOT full regrowth, only prevention). E2 may rise → AI co-admin may be needed."
    },
    {
      "label": "PCT-blast weeks 1-2",
      "body": "Measurable Test rise (3-7 days), endogenous Leydig functionality activates. E2 rebound monitor."
    },
    {
      "label": "PCT-blast end + SERM transition",
      "body": "HCG stop, SERM PCT (Nolvadex) start. HPTA recovery 4-6 weeks."
    }
  ],
  "quality": {
    "pure": [
      "Pregnyl 5000 IU vial (Organon, now Merck) — Rx pharma-grade (EU + USA available)",
      "Novarel 10000 IU vial (Ferring) — Rx pharma-grade (USA)",
      "Choragon 5000 IU vial (Ferring EU) — Rx pharma-grade",
      "Ovidrel/Ovitrelle 250 µg (recombinant HCG, Serono) — higher purity, pricier, pre-filled syringe",
      "UGL liquid HCG — HPLC + immunoassay-tested source mandatory; often under-concentrated (or cold-chain-broken, clinical activity decreased)"
    ],
    "caution": [
      "Long-term high-dose (>2500 IU EOD chronic) → Leydig receptor downregulation risk (>4 weeks continuous contraindicated)",
      "Strong E2 rebound: gyno-sensitive users need AI co-admin (Anastrozol 0.25-0.5 mg EOD)",
      "History of germ-cell tumor (testicular) absolute contraindication (HCG is a tumor marker)",
      "After reconstitution, store at 2-8°C for 30 days (sterile clinical practice mandatory)",
      "Pre-pubertal male → CONTRAINDICATED (premature sexual maturation)"
    ],
    "avoid": [
      "Active testicular tumor / past testicular cancer",
      "History of prostate carcinoma or high-risk prostate condition",
      "Hypersensitivity to HCG or excipient",
      "Long-term chronic monotherapy (>4 weeks) → Leydig downregulation",
      "Pre-pubertal male"
    ]
  },
  "interactions": [
    "AI co-administration (Anastrozol 0.25-0.5 mg EOD): E2 rebound mitigation — recommended for gyno-sensitive users",
    "SERM bridge (Nolvadex 20-40 mg/day, Clomid 25-50 mg/day): PCT protocol, started after HCG blast",
    "Mid-cycle AAS co-admin: compatible with all classical AAS (Test/Tren/Mast/Dianabol/Anavar — atrophy prevention goal)",
    "Testosterone replacement (TRT): co-administration not standard (HCG rescue only in abnormal-recovery cases)",
    "FSH-rec (Gonal-F) co-admin: for azoospermia recovery goal, full HPG axis stimulus",
    "Other peptides (CJC-1295, Ipamorelin, BPC-157): no interaction, compatible"
  ],
  "studies": [
    {
      "title": "Treatment of hypogonadotropic male hypogonadism: Case-based scenarios.",
      "authors": "Crosnoe-Shipley LE, Elkelany OO, Rahnema CD, Kim ED",
      "journal": "World J Nephrol",
      "pmid": "25949938"
    },
    {
      "title": "Low-dose human chorionic gonadotropin maintains intratesticular testosterone in normal men with testosterone-induced gonadotropin suppression.",
      "authors": "Coviello AD, Matsumoto AM, Bremner WJ, Lewis EW, Anawalt BD, Wang C, Yan X, Page ST, Leung A, Berman N, Swerdloff RS",
      "journal": "J Clin Endocrinol Metab",
      "pmid": "15713727"
    },
    {
      "title": "Concomitant intramuscular human chorionic gonadotropin preserves spermatogenesis in men undergoing testosterone replacement therapy.",
      "authors": "Hsieh TC, Pastuszak AW, Hwang K, Lipshultz LI",
      "journal": "J Urol",
      "pmid": "23260550"
    },
    {
      "title": "Maintenance of spermatogenesis in hypogonadotropic hypogonadal men with human chorionic gonadotropin alone",
      "authors": "Depenbusch M, von Eckardstein S, Simoni M, Nieschlag E.",
      "journal": "Eur J Endocrinol. 2002;147(5):617-24.",
      "pmid": "12444893"
    }
  ],
  "faq": [
    {
      "q": "Mid-cycle HCG vs PCT-blast HCG — what does each do?",
      "a": "Two distinct protocols with different goals. **Mid-cycle**: 250-500 IU 2-3x/week throughout the AAS cycle — testicular ATROPHY PREVENTION (preservation of testicular tissue, faster post-cycle recovery). **PCT-blast**: 1500-2500 IU EOD × 10-14 days in the first 2 weeks after cycle end — HPTA RESTART with Leydig bypass (bridges the user's own pituitary LH-suppression window). Both protocols are followed by SERM PCT (Nolvadex) for full HPTA recovery."
    },
    {
      "q": "Does HCG aromatize? How much?",
      "a": "Indirect aromatization: HCG → Leydig Test → peripheral E2 conversion. Magnitude moderate-to-high (Test rise greater than on TRT; HCG induces both testicular and peripheral aromatization). Typical E2 rise +50-100% from baseline, gyno flare possible in gyno-sensitive users. Mitigation: Anastrozol 0.25-0.5 mg EOD co-administration, E2 titrated to 20-30 pg/mL target. High-dose PCT-blast (>2000 IU EOD) particularly requires E2 watch."
    },
    {
      "q": "Lyophilized vial reconstitution?",
      "a": "Standard protocol: 1 mL or 2 mL bact water (BAC, benzyl-alcohol-preserved sterile water) into a 5000 IU vial. 1 mL → 5000 IU/mL concentration; 2 mL → 2500 IU/mL. Sterile practice: alcohol clean, DO NOT shake (denaturation), gentle swirl. SC or IM injection (SC more comfortable, into abdominal or thigh tissue, 27-30G insulin syringe). Store reconstituted solution at 2-8°C for 30 days (clinical activity drops after that)."
    },
    {
      "q": "Pregnyl vs Ovidrel vs UGL — which to choose?",
      "a": "**Pregnyl/Choragon (urinary)**: golden-standard, available at EU pharmacies (~€20/5000 IU), 60+ years of clinical literature. **Ovidrel/Ovitrelle (recombinant)**: higher purity (pre-filled syringe 250 µg), pricier (~€40-60/dose), available in USA. **UGL**: HPLC + immunoassay-tested source MANDATORY — UGL HCG often under-concentrated or cold-chain-broken (activity drops). On clinical value: pharma > UGL >> unknown-source."
    },
    {
      "q": "Cross-frame note: same HCG as in fertility-clinic protocols?",
      "a": "Yes — identical molecule. The `hcg-perf` and future `hcg-peptid` entries have ~80% content overlap (same chemical structure, pharmacology, route of administration). The DIFFERENCE is framing: `hcg-perf` in AAS-PCT bridge context (peripheral Test stimulus, atrophy prevention, doping), while `hcg-peptid` (coming with the future peptide library batch) with fertility-clinic framing (IVF male factor + secondary hypogonadism Rx, clinical Rx context). The user can buy the same Pregnyl vial — they'll just read it through a different narrative."
    }
  ],
  "related": [
    "hmg-perf",
    "fsh-rec-perf",
    "nolvadex",
    "clomid",
    "testosterone-info",
    "anastrozol"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 500,
      "medium": 1500,
      "high": 2500
    },
    "unit": "IU/dose (SC or IM, dose-frequency protocol-specific)",
    "note": "**Mid-cycle**: 250-500 IU 2-3x/week × cycle length (atrophy prevention). **PCT-blast**: 1500-2500 IU EOD × 10-14 days (HPTA restart bridge). **Post-PCT rescue**: 1500 IU 2x/week × 4 weeks (if LH/FSH NOT recovering on SERM alone). Long-term chronic monotherapy (>4 weeks) CONTRAINDICATED (Leydig downregulation risk)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-protocol",
      "timing": "Before AAS cycle start or before PCT-blast",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS sensitive-assay), LH, FSH, SHBG, Prolactin, testicular volume (palpation or ultrasound), lipid panel, ALT, AST.",
      "purpose": "Baseline for Test trajectory + testicular volume + ITT (via Test/E2 ratio indirectly) tracking."
    },
    "midCycle": {
      "label": "Mid-cycle / PCT-blast",
      "timing": "Protocol week 2",
      "markers": "Total Test, E2 (gyno-flare watch, if >40 pg/mL → AI add), Prolactin (on Tren cycles), testicular palpation.",
      "purpose": "E2 rebound monitor + testicular-volume preservation confirm. ITT indirect: Test/E2 ratio stably high → preservation."
    },
    "postCycle": {
      "label": "PCT-blast end + SERM transition",
      "timing": "When HCG stops + Nolvadex/Clomid starts",
      "markers": "Total Test, LH, FSH, E2, SHBG.",
      "purpose": "HCG effect wanes; onset of endogenous HPTA restart measurable. If LH/FSH does NOT rise within 4 weeks on SERM alone → HCG rescue (1500 IU 2x/week × 4 weeks)."
    },
    "cruise": {
      "label": "Long-term mid-cycle (multi-cycle users)",
      "timing": "Every 12 weeks",
      "markers": "Full HPG panel + testicular ultrasound yearly.",
      "purpose": "On multi-cycle/blast-and-cruise users, long-term monitoring of mid-cycle HCG protocol effects."
    }
  },
  "anecdote": "HCG is a prominent peptide for PCT purposes and for restoring impaired testicular function. Users often report fuller testicular size and maintained libido while using it. However, because it directly stimulates testosterone production, estrogen increases via aromatization are expected, so monitoring E2 is key. Overuse can desensitize LH receptors over time, so moderate, cycled dosing is preferred. For users on TRT or anabolics, community accounts recommend using HCG 1-2 times per year to reduce long-term testicular atrophy. Typical anecdotal protocols involve 1-3 month cycles, twice yearly, around 25,000-50,000 IU total over that span. It is generally used right after a cycle rather than during, because using it on-cycle simply adds to E2 load without a clear benefit. HCG is injected subcutaneously, typically 1-3 times per week due to its shorter functional activity in the body."
}
