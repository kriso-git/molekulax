// Exemestane (Aromasin) — steroidal "suicide" (irreversible) AI.
// FDA-approved 1999 Pfizer. 17-hydro-exemestane metabolite mildly androgenic
// — SHBG drop + visible free-Test rise.
// Sources: FDA Aromasin SmPC, Bonneterre 2003 PMID 14523076,
// Geisler 2008 PMID 19012260, Lønning 2005 PMID 16091756.

export default {
  "id": "exemestane",
  "name": "Exemestane (Aromasin)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Steroidal \"suicide\" (irreversible) aromatase inhibitor. FDA-approved (1999 Pfizer). Unique: 17-hydro-exemestane metabolite is mildly androgenic — SHBG drop + visible free-Test rise. In AAS used when E2 stability or SHBG emphasis matters.",
  "description": "Exemestane (Aromasin) is a third-generation steroidal aromatase inhibitor developed by Pharmacia & Upjohn (now Pfizer) and FDA-approved in 1999 for postmenopausal ER+ breast cancer. Pharmacokinetically distinct from non-steroidal triazole AIs (anastrozole/letrozole): it forms an irreversible covalent bond at the active site of CYP19 aromatase — each dose permanently inactivates a portion of the aromatase pool, with recovery requiring de novo enzyme synthesis (~5-7 day half-effect-life). The exemestane parent compound has a steroidal structure (androstadiendione analog), and the 17-hydro-exemestane metabolite is a MILD androgen receptor agonist (clinically negligible anabolic effect, but SHBG-lowering, so free-Test rises measurably — documented by Lønning 2005 PMID 16091756). In AAS context two niches: (1) E2 stability where the non-rebound profile is advantageous (cycle-end taper), and (2) SHBG-emphasis stacks (free-Test boost from the 17-hydro metabolite). Aromasin is the third member of the AAS AI trifecta beside anastrozole + letrozole. WADA S4.1 — banned.",
  "keyInfo": [
    {"label": "Mechanism", "value": "Steroidal \"suicide\" (irreversible covalent) CYP19 aromatase inhibitor — a single dose permanently inactivates a portion of the pool"},
    {"label": "Dosing (AAS)", "value": "12.5-25 mg EOD or 25 mg/day"},
    {"label": "Half-life", "value": "~27 h (parent), ~24-48 h active metabolite; pharmacodynamic effect 5-7 days"},
    {"label": "Onset", "value": "E2 reduction measurable 12-24 h, full effect 3-5 days"},
    {"label": "Legal status", "value": "FDA + EMA Rx, HU + PL approved, WADA S4.1 banned"}
  ],
  "mechanism": "Exemestane is a substrate-analog pro-drug: the androstadiendione-like structure itself binds the active site of CYP19 aromatase, and during the enzyme's catalytic cycle is transformed into a reactive electrophilic intermediate (suicide-inhibitor / mechanism-based irreversible inhibitor). The reactive intermediate covalently binds an active-site lysine/cysteine side chain, permanently inactivating the enzyme molecule. Recovery depends entirely on de novo aromatase synthesis (~5-7 day half-recovery rate). The parent compound is 17-hydroxylated in the liver, and the active 17-hydro-exemestane metabolite is a MILD AR agonist (Lønning 2005), clinically negligible anabolic effect but SHBG-lowering — free-Test measurably rises (+5-10 ng/dL at standard dose). Hepatic CYP3A4 metabolism is the main route, ~30% oral bioavailability. WADA detection ~1 month.",
  "legalStatus": "USA: FDA-approved 1999 (Aromasin 25 mg, Pharmacia, now Pfizer; generic exemestane 2010+). Indication: postmenopausal ER+ breast cancer adjuvant + metastatic, as well as post-tamoxifen 2-3 year switch protocols (Bonneterre 2003 ITA-CL97). EU: EMA-approved. HU: registered (Aromasin Rx). PL: registered (Aromasin Rx). WADA: S4.1 aromatase inhibitor — banned in/out-of-competition.",
  "onsetTime": "E2 reduction 12-24 h, full effect 3-5 days",
  "halfLife": "~27 h (parent)",
  "halfLifeActive": "~24-48 h (17-hydro-exemestane); pharmacodynamic effect 5-7 days (irreversible enzyme inactivation)",
  "interactionsWith": ["anastrozol", "letrozol", "nolvadex", "testosterone-info"],
  "aromatization": "Does not aromatize — steroidal \"suicide inhibitor\" (irreversible covalent CYP19 binding). The parent compound has a steroid structure (androstadiendione analog), not an agonist.",
  "hepatotoxicity": "Low — steroid structure BUT NOT 17α-alkylated. Hepatic AE <2% (FDA Aromasin label). 17-hydro-metabolite mild AR activity does not pose clinically relevant hepatic stress.",
  "wadaStatus": "banned",
  "androgenicRatio": "Negligible — 17-hydro-exemestane has mild AR affinity (~5% testosterone affinity), clinically negligible anabolic effect, BUT SHBG-lowering (measurable free-Test rise).",
  "bindingAffinity": "CYP19 aromatase active-site irreversible covalent binding. 17-hydro-exemestane: AR Ki ~5-50 nM range (weak), ER minimal.",
  "detectionWindow": "WADA-accredited GC-MS/LC-MS/MS urine detection ~1 month post-last dose.",
  "benefits": [
    "Suicide inhibitor: no E2 rebound after stopping — cycle-end taper stability",
    "17-hydro metabolite mildly androgenic — SHBG drop and measurable free-Test rise (+5-10 ng/dL)",
    "Smooth E2 control (no daily fluctuation like anastrozole)",
    "More moderate lipid panel impact than letrozole (intermediate)",
    "FDA + EMA Rx pharma-grade globally available",
    "Affordable (~€30-50/box generic 25 mg)"
  ],
  "quickStart": [
    "Standard AAS E2-control: 12.5-25 mg EOD or 25 mg/day",
    "Cycle-end taper stability: Aromasin is ideal for its non-rebound profile (anastrozole/letrozole stopping causes E2 spike, Aromasin is gradient)",
    "SHBG-emphasis stack (Test+Mast+Var blast): Aromasin gives SHBG-lowering bonus → free-Test boost",
    "Take with water + AFTER meals (food increases bioavailability ~40% vs. empty stomach)",
    "Bloodwork: E2 LC-MS/MS pre-treatment + 7-10 days later",
    "Safer than letrozole for AI-naive users (lower crashed-E2 risk)"
  ],
  "expectations": [
    {"label": "Day 1-3", "body": "E2 reduction measurable (~50-70%). SHBG drop perceptible, free-Test measurably rises (documentable on bloodwork +5 days)."},
    {"label": "Week 1-2", "body": "Steady-state aromatase suppression (~85-90%), slightly milder total-E2 reduction than anastrozole but more stable baseline. Lipid panel modest change."},
    {"label": "Post-cessation week 1", "body": "E2 gradually rises (~5-7 days full recovery — de novo aromatase synthesis). Minimal rebound, NO spike."},
    {"label": "Post-cessation week 2-4", "body": "Baseline E2 restored. PCT phase can start with Nolvadex/Clomid SERM."}
  ],
  "quality": {
    "pure": [
      "Pfizer Aromasin 25 mg tablet, Rx pharma-grade (EU pharmacies available)",
      "Exemestane-ratiopharm, Exemestane Sandoz, Exemestane Teva generic (EU)",
      "Indian generic (Sun Pharma Aromasin analog, Cipla)",
      "UGL liquid exemestane: less commonly used, HPLC-tested source required"
    ],
    "caution": [
      "Food-induced bioavailability boost: consistent dosing timing (always AFTER meals) recommended",
      "17-hydro metabolite mildly androgenic → possible acne push on stacked aromatizing steroids",
      "CYP3A4 inducer/inhibitor interactions (as anastrozole)",
      "Lipid panel double monitor: HDL drop smaller than letrozole but positive",
      "Hepatic stress: combined with chronic 17α-alkylated AAS (Anadrol, Dianabol, Superdrol) requires double liver monitoring"
    ],
    "avoid": [
      "Premenopausal female AAS use (ovulatory dysfunction)",
      "Pregnancy / breastfeeding (Pregnancy Category X)",
      "Severe hepatic insufficiency (Child-Pugh C)",
      "Users with AR-sensitive gyno history (17-hydro mild AR may worsen gyno tendency)",
      "Prophylactic AAS cycle-start Aromasin without baseline bloodwork (crashed-E2 risk lower than letrozole but exists)"
    ]
  },
  "interactions": [
    "Tamoxifen (Nolvadex): NOT recommended together in PCT (overlapping mechanism)",
    "Testosterone + Test-base stack: standard E2 control",
    "Dianabol/Anadrol stack: Aromasin moderately effective against strong aromatization (letrozole is stronger)",
    "Mast+Var stack: Aromasin SHBG-drop bonus → free-Test boost stack synergy",
    "Statins: lipid panel monitor",
    "Food: ~40% bioavailability boost (consistent dosing timing recommended)"
  ],
  "studies": [
    {"title": "Meta-analyses of phase 3 randomised controlled trials of third generation aromatase inhibitors versus tamoxifen as first-line endocrine therapy in postmenopausal women with hormone receptor-positive advanced breast cancer.", "authors": "Robertson JFR, Paridaens RJ, Lichfield J, Bradbury I, Campbell C", "journal": "Eur J Cancer", "pmid": "33418233"},
    {"title": "An integrated view of aromatase and its inhibition.", "authors": "Miller WR, Anderson TJ, Evans DB", "journal": "J Steroid Biochem Mol Biol", "pmid": "14623539"},
    {"title": "Changes in bone and lipid metabolism in postmenopausal women with early breast cancer after terminating 2-year treatment with exemestane: a randomized, placebo-controlled study.", "authors": "Geisler J, Lønning PE, Krag LE, Løkkevik E, Risberg T, Hagen AI, Schlichting E, Lien EA, Ofjord ES, Eide GE, Polli A, di Salle E, Paolini J", "journal": "Eur J Cancer", "pmid": "16963261"},
    {"title": "Pharmacological profiles of exemestane and formestane, steroidal aromatase inhibitors used for treatment of postmenopausal breast cancer.", "authors": "Lønning PE", "journal": "Breast Cancer Res Treat", "pmid": "9797017"}
  ],
  "faq": [
    {"q": "Suicide inhibitor — what does that mean practically?", "a": "A 'suicide inhibitor' (mechanism-based irreversible inhibitor) means exemestane binds the CYP19 aromatase active catalytic cycle as a substrate analog, and during the reaction transforms into a reactive intermediate that covalently and permanently inactivates the enzyme. Pool depletion accumulates — each dose permanently inactivates a fraction of the existing aromatase pool. Recovery depends only on new aromatase synthesis (~5-7 day half-reactivation). Practically: no E2 rebound after stopping (vs. anastrozole/letrozole reversible binding which can cause rapid E2 spike). Cycle-end taper stability and gradient recovery are advantageous."},
    {"q": "Exemestane mild anabolic — what does it give?", "a": "The 17-hydro-exemestane metabolite has mild AR affinity (~5% testosterone) and is SHBG-lowering (Lønning 2005 documented SHBG drop ~15-25% in postmenopausal female population). In AAS users, free Test (NOT total Test) measurably rises +5-10 ng/dL at stable dose. Clinically negligible anabolic boost (NOT cycle replacement), but on SHBG-emphasis stacks (Mast+Var+Aromasin) provides measurable synergy. Free-Test rise = better libido and muscle protein synthesis signal at the subjective level."},
    {"q": "Anastrozole vs. letrozole vs. exemestane — clinical decision tree?", "a": "Default: ANASTROZOLE (1 mg EOD, easy titration, reversible, clinical default). Hard-suppression Tren+Mast stack or gyno reversal: LETROZOLE (stronger, capable of gyno shrinkage). E2 stability/taper-end OR SHBG emphasis: EXEMESTANE (no rebound, free-Test rise bonus). For AI-naive users: choose anastrozole or Aromasin (letrozole crashed-E2 risk is higher). Tren-only stack: often no AI needed (Tren does NOT aromatize)."},
    {"q": "Lipid panel effect?", "a": "Aromasin's lipid panel effect is INTERMEDIATE: HDL drop ~10-15% (vs. anastrozole ~10-20%, letrozole ~20-30%), LDL rise ~5-10%. Significantly milder than letrozole, approaching anastrozole level. Cardio monitor: lipid panel pre-cycle + week 6 + post-cycle. Standard mitigations: omega-3, krill oil, CoQ10. If LDL >180 mg/dL: berberine or statin under specialist consultation."}
  ],
  "related": ["anastrozol", "letrozol", "nolvadex", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 12.5, "medium": 25, "high": 25},
    "unit": "mg / EOD or day (oral, AFTER meals)",
    "note": "Standard AAS E2 control: 12.5-25 mg EOD or 25 mg/day. For cycle-end taper stability + SHBG-emphasis stack synergy, Aromasin is the first choice (no-rebound + free-Test rise bonus). With food: ~40% bioavailability boost vs. empty stomach; consistent timing recommended."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before Aromasin start",
      "timing": "Cycle week 3-4 or gyno-symptom onset",
      "markers": "E2 LC-MS/MS, Total/Free Testosterone, SHBG (Aromasin SHBG monitor especially!), lipid panel, ALT/AST, CBC.",
      "purpose": "Baseline. SHBG baseline is especially important: Aromasin's 17-hydro metabolite is SHBG-lowering, and free-Test rise is captured here."
    },
    "midCycle": {
      "label": "Aromasin day 7-10",
      "timing": "Aromasin start +7-10 days",
      "markers": "E2 LC-MS/MS, SHBG (recovery monitor), Free Test, lipid panel, ALT/AST.",
      "purpose": "Titration confirm: E2 20-30 pg/mL, document SHBG drop and free-Test rise. Lipid panel monitor: mild HDL drop expected."
    },
    "postCycle": {
      "label": "Aromasin end + recovery",
      "timing": "Last dose +1 week",
      "markers": "E2, SHBG (recovery), Total/Free Test, lipid panel.",
      "purpose": "Confirm: E2 gradually returns to baseline (5-7 days, NO rebound). SHBG normalizes over 2-4 weeks."
    },
    "cruise": {
      "label": "Long-term AAS cruise low-dose",
      "timing": "Weekly 12.5-25 mg (individually titrated)",
      "markers": "E2 LC-MS/MS monthly, SHBG, lipid panel, DEXA scan annually.",
      "purpose": "On TRT cruise Aromasin is an alternative to anastrozole when SHBG emphasis or stable-E2 profile is desired. Long-term suppression requires BMD monitoring."
    }
  }
}
