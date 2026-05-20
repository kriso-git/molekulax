// Anastrozole (Arimidex) — reversible non-steroidal triazole-class
// aromatase inhibitor (CYP19). FDA-approved 1995 AstraZeneca for postmenopausal
// ER+ breast cancer. AAS-cycle E2-control golden-standard.
// Sources: FDA Arimidex SmPC, Buzdar 2002 ATAC PMID 12081816,
// Geisler 2002 PMID 12351538, Mauras 2003 PMID 12759427.

export default {
  "id": "anastrozol",
  "name": "Anastrozole (Arimidex)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Triazole-class non-steroidal aromatase inhibitor (AI). FDA-approved (1995 AstraZeneca) for postmenopausal ER+ breast cancer. AAS-cycle E2-control golden-standard, 0.25-1 mg EOD-2x/week titrated by bloodwork.",
  "description": "Anastrozole (Arimidex) is a third-generation non-steroidal aromatase inhibitor (AI) of the triazole class developed by AstraZeneca (then Zeneca) and approved by the FDA in 1995 for adjuvant treatment of postmenopausal ER+ breast cancer. The ATAC trial (Buzdar 2002, PMID 12081816) demonstrated approximately 97% serum estradiol suppression at 1 mg/day through reversible competitive inhibition of the enzyme — anastrozole binds the heme group of CYP19 aromatase, blocking conversion of androgens to estrogens. In AAS context, it is the standard E2-control agent during testosterone-base cycles (Test/Tren/Mast/Dianabol): weekly dosing is bloodwork-titrated, with E2 trough target 20-30 pg/mL measured by LC-MS/MS sensitive assay (NOT ECL — ECL overestimates E2 at low levels, leading to falsely elevated readings, unnecessary anastrozole dosing, and crashed E2). Anastrozole is the AAS-PCT golden-standard among aromatase inhibitors: well documented, relatively easy to titrate, moderate lipid impact.",
  "keyInfo": [
    {"label": "Mechanism", "value": "Reversible non-steroidal CYP19 aromatase inhibitor, ~97% serum E2 suppression at 1 mg/day"},
    {"label": "Dosing (AAS)", "value": "0.25-1 mg EOD-2x/week titrated by bloodwork (E2 trough 20-30 pg/mL LC-MS/MS)"},
    {"label": "Half-life", "value": "~50 hours (single daily dose, steady-state day 7)"},
    {"label": "Onset", "value": "E2 reduction measurable 24-48 h, full effect 5-7 days"},
    {"label": "Legal status", "value": "FDA + EMA Rx, HU + PL approved, WADA S4.1 banned"}
  ],
  "mechanism": "Anastrozole reversibly binds the heme iron in the active site of CYP19 aromatase, competitively blocking access of the natural substrates (androstenedione, testosterone). The strong iron-binding affinity of the non-steroidal triazole ring gives the compound an in vitro IC50 of ~15 nM (human placental aromatase submicrosomal preparation). Whole-body aromatization suppression is dose-dependent: 0.5 mg/day yields ~90% E2 suppression, 1 mg/day ~97%, higher doses (10 mg/day) provide no significant additional effect — plateau. Because binding is reversible, a missed dose allows serum E2 to return within 24-48 hours without rebound. Hepatic CYP3A4 + CYP1A2 oxidize the compound; major metabolites are inactive, ~85% renal excretion as glucuronide. NOT an AR agonist, NOT an ER agonist — a clean CYP19 inhibitor.",
  "legalStatus": "USA: FDA-approved 1995 (Arimidex 1 mg, AstraZeneca; generic anastrozole 1 mg 2010). Indication: postmenopausal ER+ breast cancer adjuvant and metastatic treatment. EU: EMA-approved. HU: registered (Arimidex, Anastrozol-ratiopharm, Anastrozol Sandoz Rx). PL: registered (Arimidex Rx). WADA: S4.1 aromatase inhibitor — banned in- and out-of-competition (forbidden for all male WADA athletes).",
  "onsetTime": "E2 reduction 24-48 h, full effect 5-7 days",
  "halfLife": "~50 hours",
  "halfLifeActive": "N/A (parent compound active, metabolites inactive)",
  "interactionsWith": ["letrozol", "exemestane", "nolvadex", "testosterone-info", "trenbolone-info"],
  "aromatization": "Does not aromatize — competitive CYP19 aromatase inhibitor (IC50 ~15 nM in vitro, ~97% serum E2 suppression at 1 mg/day). Anastrozole itself is NOT a substrate of aromatase; it binds directly to the substrate-binding site.",
  "hepatotoxicity": "Low — non-steroidal, NOT 17α-alkylated. FDA Arimidex label: rare ALT/AST elevations (<2% incidence), clinically significant hepatotoxicity extremely rare. Long-term female adjuvant use (5+ years) shows no significant liver injury pattern (ATAC 10-year follow-up).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not AAS, AI)",
  "bindingAffinity": "CYP19 aromatase active-site competitive binding, Ki ~10-15 nM (in vitro human placental microsomes). ER/AR/PR — minimal binding (<1%).",
  "detectionWindow": "WADA-accredited GC-MS/LC-MS/MS urine detection 1-2 months post-last dose (parent + glucuronide metabolite markers).",
  "benefits": [
    "AAS E2-control golden-standard, ~97% serum E2 suppression at 1 mg/day",
    "Gynecomastia prevention during aromatizing cycles (Test, Dianabol)",
    "Water retention reduction → cleaner muscle definition",
    "Reversible binding → easily titrable to E2 trough",
    "30+ years of clinical literature (development since 1990s)",
    "Globally available (FDA + EMA + HU + PL Rx)",
    "Inexpensive (~€10-25/box generic 1 mg)"
  ],
  "quickStart": [
    "Baseline bloodwork FIRST: measure E2 at cycle week 4-6 by LC-MS/MS sensitive assay (NOT ECL)",
    "Dose titration: E2 >40 pg/mL AND gyno symptom → 0.5 mg E3D start; E2 30-40 pg/mL → 0.25 mg E3D",
    "Re-test 10-14 days later, target trough 20-30 pg/mL — lower means reduce dose",
    "DO NOT prophylactic-dose: AI at cycle start without baseline symptom carries crashed-E2 risk",
    "Tren-only or 19-Nor-dominant stack: AI usually unnecessary (low aromatization)",
    "Take with water, morning or evening, food indifferent (oral bioavailability ~85%)"
  ],
  "expectations": [
    {"label": "Day 1-3", "body": "E2 reduction measurable on bloodwork (~30-50% reduction from baseline). Water retention relief noticeable, gyno-symptom tension eases."},
    {"label": "Week 1-2", "body": "Steady-state plasma level, full E2 suppression (~97% target). Water retention minimized, definition improves. Lipid panel monitorable (mild HDL drop expected)."},
    {"label": "Long-term use (3+ months)", "body": "Monitor BMD (bone mineral density) — chronic E2 deficit carries osteopenia risk. Lipid panel monitor, omega-3 + krill oil cardio-protection."},
    {"label": "After cessation", "body": "E2 returns to baseline within 24-48 h (reversible binding). NO rebound expected. PCT phase may start after ester clearance."}
  ],
  "quality": {
    "pure": [
      "AstraZeneca Arimidex 1 mg blister, Rx pharma-grade (EU pharmacies available)",
      "Anastrozol-ratiopharm, Anastrozol Sandoz, Anastrozol Teva generic (EU)",
      "Indian generic (Sun Pharma, Cipla) — pharma-grade, inexpensive",
      "UGL liquid anastrozole: HPLC-tested source required — often poorly diluted and over-concentrated (1 mL = 5 mg, overdose risk)"
    ],
    "caution": [
      "Crashed E2 signs: joint pain, libido drop, lethargy, mood crash — immediate dose reduction/pause",
      "Lipid panel deteriorates: HDL drop and LDL elevation expected at higher doses; omega-3 + krill oil + cardio monitor",
      "BMD (bone density) long-term stressor — DEXA scan every 12 months for chronic users",
      "CYP3A4 inducers (rifampin, phenytoin, carbamazepine) → reduced anastrozole levels; CYP3A4 inhibitors (ketoconazole, ritonavir) may elevate",
      "Tamoxifen co-administration NOT recommended (overlapping mechanism, E2-crash risk)"
    ],
    "avoid": [
      "Premenopausal female use in AAS cycles (ovulatory dysfunction, infertility trigger)",
      "Pregnancy / breastfeeding (Pregnancy Category X)",
      "Severe hepatic insufficiency (Child-Pugh C)",
      "Prophylactic cycle-start anastrozole without baseline bloodwork (crashed-E2 risk)"
    ]
  },
  "interactions": [
    "Tamoxifen (Nolvadex): NOT recommended together in PCT — anastrozole reduces E2, tamoxifen blocks ER → combined effect may produce crashed-E2 syndrome",
    "Testosterone-base cycles: standard E2-control AAS-stack",
    "Dianabol/Anadrol/Trenbolone: Tren does NOT aromatize (anastrozole less effective), Dianabol/Anadrol strongly aromatize → anastrozole strongly effective",
    "SSRIs: paroxetine/fluoxetine minimal interaction (vs. tamoxifen-CYP2D6 issue)",
    "Statins: lipid panel double monitor required, statin dose reduction may be considered",
    "Alcohol: mild hepatic stress, moderate consumption OK"
  ],
  "studies": [
    {"title": "Anastrozole alone or in combination with tamoxifen versus tamoxifen alone for adjuvant treatment of postmenopausal women with early breast cancer: first results of the ATAC randomised trial", "authors": "Buzdar A, Howell A, ATAC Trialists' Group.", "journal": "Lancet. 2002;359(9324):2131-2139.", "pmid": "12081816"},
    {"title": "Influence of letrozole and anastrozole on total body aromatization and plasma estrogen levels in postmenopausal breast cancer patients evaluated in a randomized, cross-over study", "authors": "Geisler J, Haynes B, Anker G, et al.", "journal": "J Clin Oncol. 2002;20(3):751-757.", "pmid": "12351538"},
    {"title": "Pharmacokinetics and dose finding of a potent aromatase inhibitor, aromasin (exemestane), in young males", "authors": "Mauras N, Lima J, Patel D, et al.", "journal": "J Clin Endocrinol Metab. 2003;88(12):5951-5956.", "pmid": "12759427"},
    {"title": "Aromatase inhibitor mechanism: review", "authors": "Brueggemeier RW, Hackett JC, Diaz-Cruz ES.", "journal": "Endocr Rev. 2005;26(3):331-345.", "pmid": "15814851"}
  ],
  "faq": [
    {"q": "When should I start anastrozole in a cycle?", "a": "Never prophylactically at cycle start without baseline bloodwork and gyno symptoms. Correct protocol: test E2 at cycle week 3-4 by LC-MS/MS sensitive assay (NOT ECL — overestimate at low levels). If E2 >40 pg/mL AND gyno symptoms (tender nipples, lipid fluctuation, water retention) → start 0.25-0.5 mg E3D. If E2 <40 pg/mL and NO symptoms → don't start. The 'every Test cycle needs anastrozole' folk belief is realistic only on heavily aromatizing stacks (Dianabol+Test+Anadrol) — a clean TRT-dose Test-Enan 200 mg/week typically doesn't need AI."},
    {"q": "Anastrozole vs. Aromasin (Exemestane) — when to choose which?", "a": "Anastrozole has REVERSIBLE binding, easy titration, E2 returns to baseline 24-48 h after stopping without rebound. Aromasin is a SUICIDE INHIBITOR (irreversible covalent binding), recovery requires de novo aromatase synthesis (5-7 days), but its 17-hydro-exemestane metabolite is MILDLY androgenic — SHBG drop and free-Test rise are bonuses. Default choice: anastrozole (titrability), Aromasin when SHBG emphasis matters or cycle-end taper stability is wanted (no rebound E2 spike on Aromasin)."},
    {"q": "Crashed E2 signs and management?", "a": "Symptoms: joint pain (especially wrists + knees), libido crash, lethargy, sleep disturbance, lipid panel collapse (HDL drop), depressive mood. Measurement: serum E2 LC-MS/MS <15 pg/mL → crashed. Management: IMMEDIATELY pause anastrozole for 7-10 days, re-test E2; if back in 20-30 pg/mL range, restart at half dose (e.g., 0.125 mg instead of 0.25 mg = quartered tablet). Prevention: NEVER prophylactic-dose without baseline; always bloodwork-titrate."},
    {"q": "Lipid panel deteriorates — what do I do?", "a": "HDL drop is expected on anastrozole (~10-20%), mild LDL rise. Cardio monitor: lipid panel pre-cycle + week 6 + post-cycle. Mitigations: omega-3 (EPA 2-3 g/day), krill oil (astaxanthin extra), CoQ10 (200 mg), berberine (LDL reducer), niacin (HDL raiser, niacinic acid). If LDL >190 mg/dL or HDL <30 mg/dL → statin (atorvastatin 20 mg) under specialist consultation. A longer taper protocol (1 mg → 0.5 mg → 0.25 mg) can soften the effect."},
    {"q": "Tier 4 vs. tier 5? Why not tier 5 like Nolvadex?", "a": "Nolvadex (1977 FDA, ~50 years clinical history) and anastrozole (1995 FDA, ~30 years) sit at different maturity levels — Nolvadex has roughly double the clinical literature base. Anastrozole is the AAS-AI golden-standard (foundation of tier 4) but doesn't meet the stricter tier-5 criteria (5+ decades clinical history + zero-debate safety profile). Both compounds are first-line picks in their own category (SERM vs. AI), only the clinical-timeline distance assigns different tier."}
  ],
  "related": ["letrozol", "exemestane", "nolvadex", "testosterone-info", "trenbolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.5, "high": 1},
    "unit": "mg / EOD-2x week (oral, bloodwork-titrated)",
    "note": "Standard AAS E2-control: 0.25-1 mg EOD-2x/week, E2 trough target 20-30 pg/mL by LC-MS/MS. Heavily aromatizing stack (Dianabol+Test+Anadrol): 1 mg EOD; moderate (Test-only): 0.25-0.5 mg E3D; low-aromatization (Tren-dominant, Var, Mast): often no AI needed. Never prophylactic without baseline bloodwork and gyno symptom."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before cycle / before anastrozole start",
      "timing": "Cycle week 3-4 or gyno-symptom onset",
      "markers": "E2 LC-MS/MS sensitive assay (NOT ECL), Total Testosterone, Free Testosterone, SHBG, Prolactin, Estradiol, lipid panel (TC/LDL/HDL/TG), ALT, AST, CBC.",
      "purpose": "Baseline for E2-titration trajectory. If E2 >40 pg/mL AND gyno symptoms (tender nipples, lipid fluctuation, water retention) → start indicated. If E2 ≤40 or no symptoms → don't start."
    },
    "midCycle": {
      "label": "Anastrozole day 10-14",
      "timing": "Anastrozole start +10-14 days",
      "markers": "E2 LC-MS/MS (re-test), Total Test, lipid panel, ALT/AST.",
      "purpose": "Titration confirm: E2 20-30 pg/mL target — <15 = crashed → pause; >40 = dose increase indicated. Lipid panel monitor: HDL drop and mild LDL rise expected."
    },
    "postCycle": {
      "label": "Cycle end + recovery monitor",
      "timing": "Anastrozole last dose +2 weeks",
      "markers": "E2, Total/Free Test, LH, FSH, lipid panel, ALT/AST.",
      "purpose": "Confirm: E2 returns to baseline (reversible binding, 24-48 h, no rebound). Start PCT phase with Nolvadex/Clomid SERM, AI not needed during PCT."
    },
    "cruise": {
      "label": "TRT-cruise low-dose anastrozole",
      "timing": "Weekly or biweekly (individually titrated)",
      "markers": "E2 LC-MS/MS monthly, lipid panel + DEXA scan annually (BMD monitor).",
      "purpose": "On TRT-cruise (Test 100-200 mg/week) low-dose anastrozole (0.125-0.25 mg/week) may be indicated for some users, but many TRT clinics avoid it — low-dose Test rarely needs AI. Long-term E2 suppression raises osteopenia risk, DEXA scan annually."
    }
  }
}
