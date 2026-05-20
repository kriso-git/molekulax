// Raloxifene (Evista) — benzothiophene-class SERM, Eli Lilly 1997 FDA-approved
// for postmenopausal osteoporosis; 2007 update for ER+ breast cancer
// chemoprevention. AAS-context niche use: REVERSAL of existing gynecomastia
// (stronger breast-selectivity than Nolvadex). Sources: FDA Evista SmPC,
// Lawrence 2004 PMID 14744776, Cummings 1999 MORE PMID 10580020, Vogel 2006
// STAR PMID 16754727, Khan 2002 male gyno PMID 11843724.

export default {
  "id": "raloxifene",
  "name": "Raloxifene (Evista)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Benzothiophene SERM, FDA-approved (1997 Lilly) for postmenopausal osteoporosis + ER+ breast cancer chemoprevention. AAS-context niche use: existing gynecomastia reversal with stronger breast selectivity than Nolvadex. NOT a primary HPTA-restart SERM.",
  "description": "Raloxifene (Evista) is a benzothiophene-class selective estrogen receptor modulator (SERM), chemically distinct from triphenylethylene-class Nolvadex/Clomid. Eli Lilly received FDA approval in 1997 for postmenopausal osteoporosis (MORE trial Cummings 1999 PMID 10580020), and in 2007 the indication was expanded for invasive ER+ breast cancer chemoprevention in high-risk postmenopausal women (STAR trial Vogel 2006 PMID 16754727 — Raloxifene vs Tamoxifen head-to-head: similar prevention efficacy, lower VTE risk). Tissue-specific profile: ER-α antagonist in breast + endometrium, agonist in bone. In AAS context, Raloxifene occupies a niche position: REVERSAL of existing gynecomastia (NOT HPTA axis restart) — Lawrence 2004 PMID 14744776 demonstrated 50%+ reduction of pubertal gyno tissue over 6 months. Provides stronger anti-estrogenic breast-tissue selectivity than Nolvadex, explaining its breast-targeted use. Glucuronidation is the primary metabolism (NOT CYP2D6 like Tamoxifen), avoiding SSRI interaction — one practical advantage. FDA Evista label: venous thromboembolism (VTE) black-box warning, 3-fold relative risk elevation vs placebo (MORE trial data).",
  "keyInfo": [
    {"label": "Mechanism", "value": "Benzothiophene SERM, ER-α antagonist in breast+uterus, agonist in bone"},
    {"label": "Dosing (AAS gyno-reversal)", "value": "60 mg/day × 6-12 weeks"},
    {"label": "Half-life", "value": "~27 h (once-daily dose)"},
    {"label": "Onset", "value": "Gyno-tissue regression 6-12 weeks"},
    {"label": "Legal status", "value": "FDA + EMA Rx (postmenopausal osteo + breast-cancer prevention), WADA S4 (banned)"}
  ],
  "mechanism": "Raloxifene is a benzothiophene-structured SERM, chemically distinct from the triphenylethylene-structured Nolvadex/Clomid. Competitively binds ER-α in the breast and endometrium with antagonist conformational change, but partial agonist in bone (hence the osteo-protective effect). Breast-tissue ER-α selectivity is STRONGER than Nolvadex's — therefore more effective at existing gynecomastia tissue regression (Lawrence 2004 PMID 14744776). Also provides pituitary ER blockade, but mass-effect is weaker than Nolvadex (Raloxifene is NOT a primary HPTA-restart SERM). Glucuronidation is the primary metabolism (UGT1A1/1A8/1A10) — an excellent property: NO CYP2D6 interaction (vs Tamoxifen), so SSRI stack (paroxetine, fluoxetine) freely combinable.",
  "legalStatus": "USA: FDA-approved 1997 (Evista, postmenopausal osteo), 2007 indication expansion (invasive ER+ breast-cancer prevention in high-risk women). EU: EMA-approved (Evista, Optruma Rx). HU + PL: registered (Evista Rx). WADA: S4.3 estrogen receptor modulator (banned in-competition + out-of-competition for males).",
  "onsetTime": "Gyno tissue regression measurable 4-6 weeks, clinically significant 6-12 weeks",
  "halfLife": "~27 hours (once-daily dose)",
  "halfLifeActive": "~27 hours (no active metabolite, parent compound is the main agent)",
  "interactionsWith": ["nolvadex", "clomid", "enclomiphene", "anastrozol", "letrozol"],
  "aromatization": "Does not aromatize — selective ER-α antagonist (breast + uterus), partial agonist in bone. NOT a CYP19 inhibitor. Does not directly affect the aromatase axis.",
  "hepatotoxicity": "Low — non-steroidal, not 17α-alkylated. FDA Evista label hepatic adverse events <2% incidence. Glucuronidation primary metabolism (NOT CYP-mediated → fewer DDIs).",
  "wadaStatus": "restricted",
  "androgenicRatio": "N/A (not an AAS, SERM)",
  "bindingAffinity": "ER-α competitive affinity high (Ki ~50 nM), ER-β lower. Tissue-specific conformational effect explains tissue selectivity (breast antagonist, bone agonist).",
  "detectionWindow": "WADA-accredited GC-MS/LC-MS/MS urine detection ~1-2 months (raloxifene-glucuronide metabolite marker).",
  "benefits": [
    "REVERSAL of existing gynecomastia — stronger breast selectivity than Nolvadex (Lawrence 2004 PMID 14744776 50%+ regression in 6 months)",
    "NO CYP2D6 interaction (vs Tamoxifen) → SSRI stack (paroxetine/fluoxetine) freely combinable",
    "Bone-protective partial agonist effect (osteoporosis reduction as side benefit)",
    "STAR trial data Vogel 2006: similar prevention efficacy to Tamoxifen, lower VTE risk in female patients",
    "Cheap, generic-available across Europe"
  ],
  "quickStart": [
    "Gyno-reversal protocol: 60 mg/day × 6-12 weeks, independent of meals",
    "Pre-protocol bloodwork: D-dimer + INR/PT baseline (VTE screening mandatory), lipid panel, hepatic panel, Total/Free Test, E2, prolactin (post-Tren cycles)",
    "Does NOT replace Nolvadex PCT — Raloxifene is NOT HPTA-restart emphasized; if PCT is also a goal, Nolvadex can be stacked",
    "VTE risk: history of DVT/PE/pulmonary embolism is absolute contraindication; family VTE history requires careful consideration",
    "Mass retention during cycle: Raloxifene + Anastrozol combination (gyno prevention + E2 suppression) niche protocol in gym context"
  ],
  "expectations": [
    {"label": "Weeks 1-2", "body": "Gyno tissue sensitivity begins to decrease. Measurable mirror-test change minimal, BUT subjective compression sensation eases."},
    {"label": "Weeks 3-6", "body": "Visible gyno tissue regression starts (Lawrence 2004 trial: 30-50% reduction over 6 weeks). Bone-protective effect as side benefit."},
    {"label": "Weeks 7-12", "body": "Maximum gyno regression (50%+ reduction on average). Protocol close or maintenance-dose consideration."},
    {"label": "Post-protocol", "body": "Confirmation bloodwork (E2, lipid panel, D-dimer). If gyno tissue still present, +6 weeks extension allowed. Persistent tissue → surgical consult (mastectomy)."}
  ],
  "quality": {
    "pure": [
      "Eli Lilly Evista 60 mg blister, Rx pharma-grade (EU + USA available)",
      "Optruma 60 mg (Eli Lilly EU brand) — pharma-grade, registered",
      "Raloxifene-Sandoz, Raloxifene-Teva generic equivalent (EU)",
      "Indian generic (Cipla Raloxa) — pharma-grade, ePharmacy"
    ],
    "caution": [
      "VTE risk: 3-fold relative risk elevation vs placebo (FDA Evista label black-box warning) — history mandatory",
      "Hot flashes side effect common (~25-30% of users) — typical in women, milder in men",
      "Calf cramps, edema rare",
      "Raloxifene is NOT an HPTA-restart SERM — don't confuse with Nolvadex PCT; different use case"
    ],
    "avoid": [
      "History of DVT/PE/pulmonary embolism (absolute contraindication FDA label)",
      "Active VTE risk factors (postoperative, immobilization, high cholesterol + cardiovascular comorbidity)",
      "Concurrent pregnancy (Pregnancy Category X — female partner)",
      "Active hepatic disease (relative contraindication)"
    ]
  },
  "interactions": [
    "Nolvadex stack: NOT recommended (mechanism overlap, ER blockade mass-effect redundant) — choose one",
    "AI co-administration (Anastrozol/Letrozol/Exemestane): combinable in mass protocol (E2 suppression + gyno-tissue targeting)",
    "SSRI (paroxetine/fluoxetine): FREELY combinable (glucuronidation-only metabolism, NO CYP2D6 interaction — excellent property vs Tamoxifen)",
    "Warfarin: minimal interaction (vs Tamoxifen with strong CYP interaction)",
    "Cholestyramine: 40% absorption decrease — 4-hour spacing between doses",
    "Cardio-protective agents (statin, aspirin): well combinable"
  ],
  "studies": [
    {"title": "The effect of raloxifene on risk of breast cancer in postmenopausal women: results from the MORE randomized trial", "authors": "Cummings SR, Eckert S, Krueger KA, et al.", "journal": "JAMA. 1999;281(23):2189-97.", "pmid": "10580020"},
    {"title": "Effects of tamoxifen vs raloxifene on the risk of developing invasive breast cancer and other disease outcomes: the NSABP Study of Tamoxifen and Raloxifene (STAR) P-2 trial", "authors": "Vogel VG, Costantino JP, Wickerham DL, et al.", "journal": "JAMA. 2006;295(23):2727-41.", "pmid": "16754727"},
    {"title": "A randomized double-blind clinical trial of raloxifene in management of physiological gynecomastia in adolescents", "authors": "Lawrence SE, Faught KA, Vethamuthu J, Lawson ML.", "journal": "J Pediatr. 2004;145(1):71-6.", "pmid": "14744776"},
    {"title": "Raloxifene therapy for severe pubertal gynecomastia: case report", "authors": "Khan HN, Rampaul R, Blamey RW.", "journal": "Breast. 2002;11(1):76-7.", "pmid": "11843724"}
  ],
  "faq": [
    {"q": "Gyno-reversal: Nolvadex vs Raloxifene?", "a": "Nolvadex: prevention + on-cycle pre-emptive (block mechanism); Raloxifene: REVERSAL on existing gyno tissue (stronger breast selectivity). Clinical decision tree: on-cycle gyno prevention → Nolvadex; post-cycle existing gyno rescue (Lawrence 2004 protocol) → Raloxifene. Equally safe, NOT stackable (mechanism overlap)."},
    {"q": "Is VTE risk real in men too?", "a": "Data-limited (Evista trials ended in postmenopausal women). Theoretical: the 3-fold VTE risk elevation is an ER-modulation effect, likely present in men to some extent. Practical protocol: history (family DVT/PE), D-dimer baseline, mobile lifestyle during cycle; if any risk factor (postoperative, immobilization, high LDL + smoking), do not use."},
    {"q": "Can it be used for PCT axis restart?", "a": "Limited evidence — Karavolos 2015 review mentions it, but it's NOT primarily designed for that. Provides pituitary ER blockade, but mass-effect is weaker than Nolvadex/Clomid → suboptimal HPTA restart. If gyno reversal + PCT are both goals, Nolvadex stand-alone or Nolvadex + Raloxifene NOT combined (mechanism overlap), rather Nolvadex alone + post-PCT Raloxifene bridge for residual gyno tissue."},
    {"q": "Bone effect in men?", "a": "Documented positive osteo benefit — bone mineral density (BMD) rise on trabecular bone (Cummings 1999 MORE trial). May be side benefit post-cycle PCT (post-cycle osteoporosis risk slightly reduces). Long-term chronic use not fully studied in male cohorts."}
  ],
  "related": ["nolvadex", "clomid", "enclomiphene", "anastrozol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 60, "medium": 60, "high": 120},
    "unit": "mg/day (oral, once daily)",
    "note": "Gyno-reversal protocol: 60 mg/day × 6-12 weeks. For severe gyno, 120 mg/day × 4-6 weeks off-label (Khan 2002 case-report dose), BUT watch VTE risk. Independent of meals."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-protocol",
      "timing": "2 weeks before starting",
      "markers": "D-dimer + INR/PT (VTE screening), Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS), LH, FSH, SHBG, Prolactin, lipid panel, ALT, AST, hemogram.",
      "purpose": "VTE risk baseline (MANDATORY due to FDA black-box warning). Hormone baseline for gyno tissue context."
    },
    "midCycle": {
      "label": "Mid-protocol (weeks 4-6)",
      "timing": "Start +4-6 weeks",
      "markers": "D-dimer (VTE monitor), Total Test, E2, lipid panel, hot-flashes frequency journal.",
      "purpose": "VTE monitoring + gyno tissue regression tracking (mirror test + optional ultrasound)."
    },
    "postCycle": {
      "label": "Protocol end + recovery",
      "timing": "Last dose +2 weeks and +6 weeks",
      "markers": "D-dimer, Total Test, E2, lipid panel, gyno tissue status confirm (clinical exam or ultrasound).",
      "purpose": "VTE risk returns to baseline. Final gyno tissue regression measurement."
    },
    "cruise": {
      "label": "Long-term — in female indications",
      "timing": "Postmenopausal osteo: 5-10 years chronic; AAS gyno reversal: max 6-12 weeks",
      "markers": "Cruise N/A in AAS context.",
      "purpose": "Chronic Raloxifene use in men is not relevant to AAS protocol; stop after gyno-reversal goal."
    }
  }
}
