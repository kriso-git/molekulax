// HMG (Menopur / Pergonal) — Human Menopausal Gonadotropin, fertility-Rx
// framing. Cross-frame counterpart: `hmg-perf` with AAS-PCT framing.
// Sources: EMA Menopur SPC (Ferring 2002), Liu 2009 PMID 19389810,
// Liu 2002 rFSH azoospermia PMID 12519877, Hill 2018 PMID 29800218.

export default {
  "id": "hmg-peptid",
  "name": "HMG (Fertility)",
  "image": "/peptides/HMG.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.16)",
  "shortDesc": "Human Menopausal Gonadotropin — 1:1 FSH+LH glycoprotein. Full spermatogenesis induction (dual Leydig + Sertoli axis), IVF superovulation. Clinical Rx for infertility indications (male HypoH + female IVF ovulation induction), NOT doping. Cross-frame: AAS-PCT context covered by the `hmg-perf` entry.",
  "description": "HMG (Human Menopausal Gonadotropin) is a glycoprotein mixture purified from postmenopausal female urine, containing **approximately 75 IU FSH (follicle-stimulating hormone) + 75 IU LH (luteinizing hormone) in 1:1 ratio** per standard ampoule. Modern clinical HMG sources: (1) **urinary-extracted** (Menopur Ferring 2002 EMA, 2005 FDA — higher-purity urinary-purified product; the older Pergonal Serono 1962 was globally withdrawn ~2005 due to vCJD risk mitigation); (2) **recombinant menotropin** (research stage, limited clinical distribution). **Dual gonadotropin-axis stimulus mechanism**: HMG's unique value in clinical fertility treatment is that it stimulates BOTH Leydig cells (LH component → testosterone production) AND Sertoli cells (FSH component → spermatogenesis support + inhibin-B production). HCG monotherapy ONLY activates the Leydig-LH axis (intratesticular testosterone rises, but Sertoli-FSH support is absent) → full spermatogenesis induction requires combined HCG + HMG in hypogonadotropic hypogonadism (HypoH). **Clinical indications** (FDA + EMA Rx): (1) **male spermatogenesis induction** in HypoH (Kallmann syndrome, idiopathic HypoH, pituitary-origin infertility): 75-150 IU SC 3x/week × 6-24 months, stacked with HCG; (2) **female IVF superovulation** and COS (controlled ovarian stimulation): 75-300 IU/day individualized. **Cross-frame note**: same Menopur vial as in AAS-user PCT protocols (`hmg-perf` entry) — different narrative (clinical infertility vs sport-cycle recovery), IDENTICAL pharmacology. WADA-banned year-round (S2 Peptide Hormones).",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "1:1 FSH+LH glycoprotein mixture — Sertoli-FSHR + Leydig-LHCGR receptor double-stimulus, full HPG axis induction"
    },
    {
      "label": "Dosing (male HypoH spermatogenesis)",
      "value": "75-150 IU SC 3x/week × 6-24 months (stacked with HCG)"
    },
    {
      "label": "Dosing (female IVF/COS)",
      "value": "75-300 IU/day (individualized follicle-monitoring-based titration)"
    },
    {
      "label": "Half-life",
      "value": "FSH component ~12-20 h / LH component ~8-12 h"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA Rx Menopur (Ferring), WADA S2 (banned in+out-of-competition)"
    }
  ],
  "mechanism": "HMG is a two-component glycoprotein mixture: (1) **FSH** (follicle-stimulating hormone) — Sertoli-cell FSHR receptor agonist → cAMP-PKA pathway → spermatogenesis stimulus (Sertoli-mediated germ-cell maturation support) + inhibin-B production + androgen-binding-protein (ABP) synthesis; (2) **LH** (luteinizing hormone) — Leydig-cell LHCGR receptor agonist → cAMP-PKA pathway → steroidogenesis (cholesterol → pregnenolone → testosterone). The two components have different biological t1/2: FSH ~12-20 h, LH ~8-12 h (LH similar to endogenous short t1/2, hence clinical protocols use 3x/week or daily dosing). **Clinical dual-axis logic**: for HypoH male spermatogenesis induction, the Sertoli-FSH stimulus is INDISPENSABLE; HCG monotherapy (LH mimicry) raises intratesticular testosterone, but germ-cell maturation WITHOUT Sertoli-FSH support is NOT complete. Standard induction protocol: HCG monotherapy 3-6 months (Leydig-axis buildup, ITT rise), then HCG + HMG combination (FSH-axis addition) → spermatogenesis inducible within 6-24 months in ~70-90% (Liu 2009).",
  "legalStatus": "**USA**: FDA Rx Menopur (Ferring 2005 approval) — indications: COS-IVF, ovulation induction, male HypoH spermatogenesis induction. **EU**: EMA Rx Menopur (Ferring 2002 approval) — same indications. **HU + PL**: registered (Menopur Rx, common IVF clinical use). **Pergonal** (Serono historical product, 1962-2005) globally withdrawn due to vCJD theoretical risk + urinary-source reduction. **WADA**: S2.2 Peptide Hormones — banned in-competition + out-of-competition for all male competitors year-round (exception: documented infertility Rx on TUE protocol).",
  "onsetTime": "Hormonal response 24-48 hours (Test rise + measurable inhibin-B); clinical spermatogenesis induction 3-6 months (on HCG-stacked protocol)",
  "halfLife": "FSH component ~12-20 hours; LH component ~8-12 hours",
  "halfLifeActive": "Clinical effect 2-3 days (after single SC bolus, mixed FSH+LH component decay)",
  "interactionsWith": [
    "hcg-peptid",
    "fsh-rec-peptid",
    "hmg-perf",
    "kisspeptin",
    "anastrozol",
    "gonadorelin"
  ],
  "aromatization": "Indirect: testicular FSH+LH stimulus → endogenous Test rise → secondary peripheral E2 conversion via testicular + adipose CYP19 aromatase. Magnitude moderate (slightly lower than pure HCG protocol, because Sertoli-FSH activity dominates over Leydig-Test rise). In clinical infertility context E2 monitoring is generally not necessary (target Test rise is physiologic induction range, not supraphysiologic), but at high-dose HMG (>150 IU EOD), E2 watch may be warranted in gyno-sensitive male users.",
  "hepatotoxicity": "No hepatic stress — protein-based subcutaneous (SC) or intramuscular (IM) injection, NOT oral, NOT 17α-alkylated. Hepatic enzyme rise not documented in the 60+ year clinical trial database.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not an AAS; indirect testicular Test stimulus + Sertoli spermatogenesis stimulus)",
  "bindingAffinity": "FSH component: FSHR Kd ~0.5 nM (Sertoli cell). LH component: LHCGR Kd ~0.3 nM (Leydig cell). HMG's mixed-receptor-binding profile is unique — in the purified urinary-extracted product the FSH/LH ratio may vary slightly per batch (~70-80 IU FSH : 70-80 IU LH per 75/75-labeled ampoule).",
  "detectionWindow": "WADA-accredited isoelectric focusing (IEF) urinary test — distinguishes urinary-extracted HMG from endogenous pituitary FSH/LH based on isoelectric-point shift. Detectable 5-7 days after single bolus, 10-14 days after chronic protocol. Recombinant FSH (Gonal-F) is more clearly detectable on IEF, urinary HMG harder (endogenous-overlap-related false-negative risk).",
  "benefits": [
    "Full spermatogenesis induction in male HypoH (~70-90% success rate on HCG-stacked protocol, Liu 2009)",
    "Dual FSH+LH axis: Sertoli-FSH support complements HCG-only Leydig-LH stimulus",
    "IVF superovulation (COS) female-infertility protocol: standard EU + USA clinical protocol element",
    "Restoration of inhibin-B production (Sertoli-functionality marker)",
    "60+ years clinical trial database (Pergonal since 1962, Menopur since 2002) — extensive safety data",
    "Cheap (Menopur 75 IU vial ~€25-40 EU pharmacy)"
  ],
  "quickStart": [
    "Male HypoH spermatogenesis induction (stacked with HCG): HCG monotherapy 2000-2500 IU SC 2-3x/week × 3-6 months (Leydig-axis buildup, ITT rise); if azoospermia persists → add HMG 75-150 IU SC 3x/week × 6-24 months (FSH-axis combination). Bloodwork every 3 months (Test, FSH, LH, inhibin-B, sperm count).",
    "Female IVF/COS (clinical protocol): 75-300 IU/day SC, ovarian response monitoring via follicle ultrasound (transvaginal), individualized titration by reproductive endocrinologist.",
    "Reconstitution: included solvent for Menopur 75 IU vial (usually 1 mL sterile water for injection); sterile practice (alcohol clean, do NOT shake, gentle swirl). SC injection with 27-30G insulin syringe (abdominal or thigh tissue).",
    "Storage: lyophilized vial at room temperature (long-term storage 2-8°C); reconstituted solution to be injected IMMEDIATELY or stored at 2-8°C max 28 days.",
    "Bloodwork in male induction: pre-protocol baseline (Test, FSH, LH, inhibin-B, semen analysis), then full panel every 3 months; in female IVF follow the fertility clinic's follicle-monitoring + E2-titration protocol.",
    "TUE (Therapeutic Use Exemption) for competing users: WADA TUE application required BEFORE use in documented infertility-Rx cases."
  ],
  "expectations": [
    {
      "label": "Months 1-3 (HCG monotherapy)",
      "body": "Test rise measurable (3-7 days), testicular volume partially restores (HypoH baseline typically <10 mL → toward 15-20 mL). Spermatogenesis NOT YET activated (Sertoli-FSH stimulus absent)."
    },
    {
      "label": "Months 4-6 (HMG addition)",
      "body": "FSH stimulus initiates Sertoli-cell-mediated germ-cell maturation. Inhibin-B rises (Sertoli-functionality marker). Sperm appearance on semen analysis expected between months 6-9 (individual variation)."
    },
    {
      "label": "Months 6-12",
      "body": "Gradual sperm count rise (oligozoospermia → toward normozoospermia range). Clinical goal: spontaneous conception or IUI-eligible sperm count + motility."
    },
    {
      "label": "Months 12-24",
      "body": "Sustained spermatogenesis stabilization. On successful induction, switch back to HCG monotherapy (FSH stop) — Sertoli axis is by then self-sustaining. ~70-90% clinical success rate (Liu 2009, n=75 HypoH males)."
    }
  ],
  "quality": {
    "pure": [
      "Menopur 75 IU vial (Ferring 2002 EMA / 2005 FDA) — golden-standard urinary-extracted HMG, higher purity, available in EU + USA pharmacies",
      "Menopur 1200 IU multi-dose vial (Ferring) — IVF clinical protocol package",
      "Bemfola 75 IU (Gedeon Richter) — European biosimilar pure FSH (NOT HMG, but rFSH — alternative for those needing pure FSH)",
      "Pergonal — HISTORICAL, globally withdrawn ~2005 (vCJD risk mitigation); if anyone today sells 'Pergonal', it is suspicious grey-market stock or fake",
      "UGL HMG — AVOID for infertility-Rx purposes: clinical protocol requires precise dose titration; UGL batch-level FSH/LH ratio uncertainty can jeopardize induction success"
    ],
    "caution": [
      "Female IVF users: ovarian hyperstimulation syndrome (OHSS) risk at high doses — reproductive endocrinologist supervision mandatory (NOT self-protocol)",
      "During first 3-6 months of male induction protocol, sperm is NOT YET expected (Sertoli-FSH stimulus requires time to initiate) — psychological frustration risk, clinical contact important",
      "TUE documentation for competing users: WADA TUE application must be submitted BEFORE use (retrospective TUE typically denied)",
      "Reconstituted solution at 2-8°C max 28 days (sterile clinical practice mandatory)",
      "High-dose HMG (>150 IU EOD chronic) → E2 rebound and gyno risk in gyno-sensitive male users → AI co-admin worth considering (Anastrozol 0.25 mg EOD)"
    ],
    "avoid": [
      "Active testicular tumor / past testicular cancer (gonadotropin-receptor-positive tumor stimulus risk)",
      "History of prostate carcinoma or high-risk prostate condition",
      "Hypersensitivity to HMG or urinary-extracted excipient (rare)",
      "Female IVF: history of OHSS, severe ovarian cysts, untreated hyperprolactinemia",
      "Pre-pubertal male → CONTRAINDICATED (premature sexual maturation)"
    ]
  },
  "interactions": [
    "**HCG stack partner** (mandatory in spermatogenesis-induction protocol): HCG 2000-2500 IU 2-3x/week + HMG 75-150 IU 3x/week → full HPG axis induction",
    "**Aromatase inhibitor (Anastrozol 0.25 mg EOD)**: optional E2 control on high-dose HMG in gyno-sensitive male users",
    "**SERM (Clomid, Nolvadex)**: NOT co-administered on HMG protocol — different mechanism (SERM = endogenous GnRH stimulus, HMG = exogenous FSH+LH bypass)",
    "**rFSH (Gonal-F, Puregon)**: alternative for pure FSH-axis stimulus (if LH component not needed; e.g. adequate endogenous LH already)",
    "**Gonadorelin/kisspeptin**: NOT stacked (different mechanism — pulsatile GnRH stimulus vs exogenous gonadotropin bypass), but theoretical follow-up protocol element after long-term induction",
    "**TRT (testosterone replacement)**: CONTRAINDICATED on HMG induction protocol — exogenous Test suppresses HPG axis, working against the goal of induction"
  ],
  "studies": [
    {
      "title": "Induction of spermatogenesis and fertility during gonadotropin treatment of gonadotropin-deficient infertile men: predictors of fertility outcome",
      "authors": "Liu PY, Baker HW, Jayadev V, Zacharin M, Conway AJ, Handelsman DJ.",
      "journal": "J Clin Endocrinol Metab. 2009;94(3):801-808.",
      "pmid": "19389810"
    },
    {
      "title": "Efficacy and safety of recombinant human follicle-stimulating hormone in men with hypogonadotropic hypogonadism after HCG-monotherapy",
      "authors": "Liu PY, Turner L, Rushford D, et al.",
      "journal": "Hum Reprod. 2002;17(3):625-633.",
      "pmid": "12519877"
    },
    {
      "title": "Hypogonadism therapy and fertility outcomes",
      "authors": "Hill ED, Honig SC, Tabb KE, et al.",
      "journal": "Int J Impot Res. 2018;30:262-269.",
      "pmid": "29800218"
    }
  ],
  "faq": [
    {
      "q": "Why HMG and not just HCG monotherapy for spermatogenesis induction?",
      "a": "HCG MONOTHERAPY only stimulates the Leydig-LH axis → intratesticular testosterone rises, but Sertoli-cell-mediated germ-cell maturation WITHOUT FSH stimulus is NOT complete. In the HypoH male induction protocol, the standard sequence: (1) HCG monotherapy 3-6 months (Leydig-axis buildup); (2) if azoospermia persists → add HMG (FSH-axis stack add) → spermatogenesis inducible in ~70-90% (Liu 2009). HMG's unique value in clinical protocol is the dual FSH+LH stimulus, mimicking endogenous pituitary gonadotropin secretion."
    },
    {
      "q": "What's the difference between HMG and rFSH (Gonal-F, Puregon)?",
      "a": "**HMG** (Menopur): purified from postmenopausal female urine, 1:1 FSH+LH mixture. Clinical value is the dual gonadotropin stimulus (Leydig+Sertoli simultaneously). **rFSH** (Gonal-F Serono, Puregon Organon): recombinant-DNA-produced PURE FSH, NO LH component. Clinical choice: if the user already has enough endogenous LH (or HCG stacked separately) but the Sertoli-FSH axis is missing → rFSH sufficient. If both axis stimulations are needed (classical HypoH) → HMG delivers both in a single injection. Cost: rFSH ~2-3x pricier (~€60-80/75 IU vs HMG €25-40)."
    },
    {
      "q": "How long does spermatogenesis induction take to succeed?",
      "a": "Slow process: 6-24 months is the clinical trial average (Liu 2009, n=75 HypoH males, median 9 months). The human spermatogenesis cycle is ~74 days (Sertoli-mediated germ-cell maturation), so biologically CANNOT be accelerated — minimum 3 cycles (~9 months) must be waited for steady state. Predictor factors: pre-treatment testicular volume (>4 mL favorable), genetic HypoH origin (Kallmann better prognosis than post-surgical pituitary tumor), induction protocol adherence (skipped pins slow it). Psychological preparation important: during the first 6 months, sperm is NOT YET expected."
    },
    {
      "q": "Can HMG be used alongside TRT or instead of TRT?",
      "a": "**Alongside TRT: CONTRAINDICATED.** Exogenous testosterone (TRT) suppresses the HPG axis (negative feedback on the hypothalamus), working against HMG induction goal. In male-fertility-Rx protocol, TRT MUST be discontinued at least 6 weeks before starting HMG. **Instead of TRT for HypoH induction**: HMG is NOT a TRT substitute — Test rise is indirect (Leydig stimulus), of smaller magnitude than direct TRT, and clinical goal is spermatogenesis induction, NOT symptomatic Test-deficiency treatment. In a HypoH male user prioritizing fertility (family building), HMG+HCG throughout the entire induction protocol (6-24 months), then optionally switching back to TRT afterward (but NOT within the fertility window)."
    },
    {
      "q": "Cross-frame: same Menopur as in AAS-PCT protocols?",
      "a": "Yes — identical molecule. The `hmg-peptid` (this entry, fertility-Rx framing) and `hmg-perf` (AAS-PCT framing) entries have ~80% content overlap (same chemical structure, pharmacology, route of administration). The DIFFERENCE is framing: `hmg-peptid` in clinical infertility-Rx context (HypoH spermatogenesis induction, female IVF COS), while `hmg-perf` in AAS-post-cycle-recovery context (Sertoli-FSH stimulus for spermatogenesis restart after long cycle). The user can buy the same Menopur vial at the fertility clinic on Rx, or as part of an AAS-cycle-recovery protocol — different narrative, identical pharmacology."
    }
  ],
  "related": [
    "hcg-peptid",
    "fsh-rec-peptid",
    "hmg-perf",
    "kisspeptin"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 75,
      "medium": 150,
      "high": 300
    },
    "unit": "IU/dose (SC or IM, dose-frequency protocol-specific)",
    "note": "**Male HypoH spermatogenesis induction (stacked with HCG)**: 75-150 IU SC 3x/week × 6-24 months. **Female IVF/COS**: 75-300 IU/day individualized follicle-monitoring-based titration by reproductive endocrinologist. **Standard induction protocol**: HCG monotherapy 3-6 months → if azoospermia persists, add HMG for FSH-axis stack add. NOT self-protocol: reproductive endocrinologist supervision (especially in female IVF due to OHSS risk)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-induction protocol",
      "timing": "Before starting HCG monotherapy",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS), LH, FSH, Prolactin, SHBG, inhibin-B, semen analysis (sperm count + motility + morphology), testicular volume (palpation + ultrasound), genetic HypoH screening (karyotype + Y-microdeletion).",
      "purpose": "Baseline for fertility-induction trajectory tracking + predictor-factor identification (testicular volume, genetic background)."
    },
    "midCycle": {
      "label": "During induction protocol",
      "timing": "Every 3 months",
      "markers": "Total Test, E2 (gyno watch on high-dose HMG), inhibin-B (Sertoli functionality marker), semen analysis (sperm count + motility trend).",
      "purpose": "Spermatogenesis induction progress monitoring + dose adjustment (if inhibin-B doesn't rise → HMG dose increase or duration extension)."
    },
    "postCycle": {
      "label": "After successful induction (HMG stop)",
      "timing": "6 weeks after spermatogenesis stabilization",
      "markers": "Total Test, LH, FSH, semen analysis, fertility confirmation (IUI-eligible or spontaneous conception).",
      "purpose": "After HMG stop, switch back to HCG monotherapy (Sertoli axis self-sustaining) — confirm that sperm count doesn't fall back to azoospermia level."
    },
    "cruise": {
      "label": "Long-term maintenance (within family-building window)",
      "timing": "Every 6 months",
      "markers": "Full HPG panel + semen analysis.",
      "purpose": "Long-term effect monitoring of multi-year fertility-window HCG monotherapy (HMG-free) protocol."
    }
  },
  "anecdote": null
};
