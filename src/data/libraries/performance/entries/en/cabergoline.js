// Cabergoline (Dostinex) — long-acting ergot D2-dopamine agonist.
// EMA 1992 Pharmacia, FDA 1996. AAS-PCT: 19-Nor/Tren prolactin-control
// golden-standard, 0.25-0.5 mg 2x/week.
// Sources: EMA Dostinex SPC, FDA Dostinex SmPC, Webster 1994 PMID 8090165,
// Schade 2007 PMID 17371996, Krüger 2003 PMID 12849866.

export default {
  "id": "cabergoline",
  "name": "Cabergoline (Dostinex)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Long-acting ergot D2 dopamine agonist. EMA-approved (1992 Pharmacia, now Pfizer) for hyperprolactinemia. In AAS: 19-Nor/Tren prolactin-control golden-standard, 0.25-0.5 mg 2x/week bloodwork-titrated. Long t1/2 ~63 h.",
  "description": "Cabergoline (Dostinex) is a long-acting ergot-structure selective D2 dopamine receptor agonist developed by Farmitalia Carlo Erba (later Pharmacia, now Pfizer) and approved by the EMA in 1992 (FDA 1996) for the treatment of hyperprolactinemia and prolactinoma. It exerts an agonist effect on D2 receptors of pituitary lactotrophs, suppressing prolactin secretion — the Webster 1994 head-to-head trial (PMID 8090165) demonstrated that cabergoline is more effective and better tolerated than the older bromocriptine (~95% prolactin normalization vs ~75%). In AAS context: 19-Nor steroids (trenbolone, nandrolone, MENT) elevate prolactin levels both directly and indirectly — trenbolone also agonizes the progesterone receptor, while nandrolone augments the cabergoline-sensitive prolactinergic pathway. Symptoms: Tren flu, lactation (galactorrhea), libido decline, gynecomastia formation (prolactin-mediated, NOT E2). Cabergoline is the classic 19-Nor/Tren cycle prolactin-control gold-standard: 0.25-0.5 mg 2x/week (Mon+Thu) bloodwork-titrated, targeting prolactin <15 ng/mL.",
  "keyInfo": [
    {"label": "Mechanism", "value": "Long-acting ergot D2 DA agonist, pituitary lactotroph prolactin suppression"},
    {"label": "Dosing (AAS)", "value": "0.25-0.5 mg 2x/week (Mon+Thu) bloodwork-titrated"},
    {"label": "Half-life", "value": "~63-69 hours (very long)"},
    {"label": "Onset", "value": "Prolactin reduction measurable 3 h, plateau 48-72 h"},
    {"label": "Legal status", "value": "EMA + FDA Rx, HU + PL approved, WADA allowed (not listed)"}
  ],
  "mechanism": "Cabergoline is an ergot-structure D2-selective dopamine agonist (D2 receptor Ki ~0.4 nM, ~85× more selective over D1 than bromocriptine). It binds with high affinity to D2 receptors on anterior pituitary lactotroph cells, inhibiting prolactin secretion and reducing lactotroph cell proliferation (prolactinoma shrinkage capable). The bonus partial D1 antagonism reduces the vegetative side effect profile to a smaller extent (vs bromocriptine). Hepatic CYP3A4 metabolizes; the long half-life (~63 h) makes twice-weekly dosing sufficient. In AAS context, inhibition of the trenbolone-progesterone pathway is a secondary benefit: Tren flu (low-grade fever + libido drop) can be alleviated by direct prolactin suppression. NOT on the WADA list — not prohibited for competitive athletes.",
  "legalStatus": "EU: EMA-approved 1992 (Dostinex 0.5 mg, Pharmacia, now Pfizer). USA: FDA-approved 1996 (Dostinex 0.5 mg, Pfizer). Indication: hyperprolactinemia (idiopathic or prolactinoma origin), Parkinson's disease adjunct (high-dose, NOT at AAS-PCT dose). HU: registered (Dostinex Rx). PL: registered (Dostinex Rx). WADA: not listed (not performance-enhancing aid).",
  "onsetTime": "Prolactin reduction 3 h, plateau 48-72 h",
  "halfLife": "~63-69 hours",
  "halfLifeActive": "~63-69 hours (parent compound active, major metabolites inactive)",
  "interactionsWith": ["pramipexole", "bromocriptine", "trenbolone-info", "nandrolone-info"],
  "aromatization": "None — DA agonist, not steroid mechanism.",
  "hepatotoxicity": "Low hepatic; rare cardiac valvulopathy at high dose (>3 mg/week) chronic (Parkinson's protocol doses) — at AAS-used 0.5-1 mg/week dose, clinically NO documented risk (FDA Dostinex label).",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not AAS)",
  "bindingAffinity": "D2 Ki ~0.4 nM (high affinity), D1 ~85× lower. Pituitary-selective, low peripheral vegetative effect.",
  "detectionWindow": "Not relevant (WADA not listed).",
  "benefits": [
    "AAS 19-Nor/Tren prolactin-control golden-standard",
    "Long-acting (twice-weekly dose) — compliance advantage",
    "Pituitary-selective D2 → few vegetative side effects (vs bromocriptine)",
    "Bonus: post-orgasmic refractory period shortening (Krüger 2003) — sexual life improvement",
    "Prolactin-mediated gyno formation prevention on Tren/Deca stack",
    "Affordable EU pharmacy (~€20-40/box 0.5 mg × 8 tabs)"
  ],
  "quickStart": [
    "Bloodwork baseline FIRST: measure prolactin at cycle week 4-6 by LC-MS/MS or sensitive immunoassay",
    "Standard 19-Nor/Tren control: 0.25 mg 2x/week (Mon+Thu) start",
    "Target: prolactin <15 ng/mL (male reference <15 ng/mL); if >25 ng/mL persisting → dose increase to 0.5 mg 2x/week",
    "Take with water + AFTER meal (nausea prevention)",
    "Re-test 7-10 days later, titration confirm",
    "Long half-life means steady-state ~10-14 days"
  ],
  "expectations": [
    {"label": "Day 1-3", "body": "Prolactin reduction measurable (~30-50%), Tren flu eases (low-grade fever, headache, muscle fatigue relief)."},
    {"label": "Week 1-2", "body": "Steady-state reached (twice-weekly dose after ~10-14 days), prolactin target <15 ng/mL attainable. Libido recovery documentable, gyno formation risk minimized."},
    {"label": "Long-term (3+ months chronic)", "body": "Annual echocardiography recommended (cardiac valvulopathy rule-out, though AAS-dose risk is low)."},
    {"label": "After cessation", "body": "Mild prolactin rebound over 1-2 weeks. If Tren/Deca cycle continues, do NOT interrupt cabergoline — continue throughout."}
  ],
  "quality": {
    "pure": [
      "Pfizer Dostinex 0.5 mg blister 8 tabs, Rx pharma-grade (EU pharmacy available)",
      "Cabergoline-ratiopharm, Cabergoline Teva, Cabergoline Sandoz generic (EU)",
      "Indian generic (Sun Pharma, Cipla Caberlin 0.5 mg)",
      "UGL liquid cabergoline: HPLC-tested source required — often 1 mg/mL, easy overdose risk"
    ],
    "caution": [
      "Nausea / orthostatic hypotension on initial doses: titration from 0.125 mg over 2-3 doses (slow-titration recommended)",
      "Cardiac valvulopathy: chronic high-dose (>3 mg/week, Parkinson's protocol) — at AAS dose (0.5-1 mg/week) risk is low, but annual echocardiography for long-term users recommended",
      "Impulse-control disorder (gambling, hypersexuality, compulsive shopping) — more common on pramipexole, rare but documented on cabergoline (Weintraub 2010)",
      "Cannot be combined with antipsychotics (D2 antagonists: haloperidol, risperidone) — antagonist overlap",
      "Antihypertensive therapies: hypotension exacerbation, monitor carefully"
    ],
    "avoid": [
      "Pregnancy / breastfeeding (Pregnancy Category B, but ovulation-induction → contraceptive consideration)",
      "Pre-existing cardiac valvulopathy",
      "Ergot alkaloid allergy (bromocriptine, methysergide cross-reactivity)",
      "Severe hepatic insufficiency",
      "Current antipsychotic therapy (D2 antagonism conflict)"
    ]
  },
  "interactions": [
    "Trenbolone/nandrolone stack: standard prolactin control (classic 19-Nor PCT companion)",
    "Bromocriptine: cannot be combined (overlapping mechanism)",
    "Antipsychotics (haloperidol, risperidone, olanzapine): contraindicated (D2 antagonism)",
    "Antihypertensives (lisinopril, β-blockers): hypotension exacerbation monitor",
    "Macrolide antibiotics (erythromycin, clarithromycin): CYP3A4 inhibition → cabergoline level rises",
    "Alcohol: vegetative side effect exacerbation (nausea, hypotension), avoidance recommended"
  ],
  "studies": [
    {"title": "Retrospective comparison of cabergoline and bromocriptine effects in hyperprolactinemia: a single center experience.", "authors": "Arduc A, Gokay F, Isik S, Ozuguz U, Akbaba G, Tutuncu Y, Berker D, Guler S", "journal": "J Endocrinol Invest", "pmid": "25421155"},
    {"title": "Risks of Cardiac Valve Regurgitation and Heart Failure Associated with Ergot- and Non-Ergot-Derived Dopamine Agonist Use in Patients with Parkinson's Disease: A Systematic Review of Observational Studies.", "authors": "Tran T, Brophy JM, Suissa S, Renoux C", "journal": "CNS Drugs", "pmid": "26585874"},
    {"title": "Effects of acute prolactin manipulation on sexual drive and function in males.", "authors": "Krüger TH, Haake P, Haverkamp J, Krämer M, Exton MS, Saller B, Mann K, Hartmann U, Schedlowski M", "journal": "J Endocrinol", "pmid": "14656205"},
    {"title": "Impulse control disorders in Parkinson disease: a cross-sectional study of 3090 patients (DOMINION study)", "authors": "Weintraub D, Koester J, Potenza MN, et al.", "journal": "Arch Neurol. 2010;67(5):589-595.", "pmid": "20457959"}
  ],
  "faq": [
    {"q": "Tren prolactin — when is cabergoline needed?", "a": "Tren steroid (and nandrolone stacks) elevate prolactin levels both directly and indirectly — trenbolone agonizes the progesterone receptor, which augments prolactin secretion. Symptoms: Tren flu (low-grade fever + headache + muscle fatigue), galactorrhea (nipple milk discharge), libido decline, prolactin-mediated gynecomastia formation (NOT E2-mediated — this is the cabergoline-sensitive type). Cabergoline needed if: (1) prolactin >25 ng/mL on bloodwork (target <15), (2) symptom onset (libido drop, lactation, Tren flu), (3) prophylactic on a 19-Nor blast known to be high-prolactin-risk. NOT every Tren cycle needs it — bloodwork-titrated."},
    {"q": "Cardiac valvulopathy risk at AAS dose?", "a": "Schade 2007 (PMID 17371996) systematic review documented ~40% valvular regurgitation risk (mitral + tricuspid valve) on chronic Parkinson dose (3-6 mg/day × 5+ years) cabergoline users. BUT the AAS-PCT dose (0.5-1 mg/WEEK, NOT day) is roughly 1/30 of this chronic dose — the AAS context clinical literature risk baseline is at a negligible level. FDA Dostinex label: low-dose <2 mg/week chronic use valvular AE incidence <2%. Practically: chronic cruise AAS user (1+ year 0.5-1 mg/week), annual echocardiography (TTE) is recommended with low Bayesian pre-test probability but prudent."},
    {"q": "Cabergoline + sex — sexual benefit?", "a": "Krüger 2003 (PMID 12849866) documented in healthy men that a single 0.5 mg cabergoline dose shortens the post-orgasmic refractory period (PORP) by ~80% (vs placebo's ~30-minute post-orgasm 'down' period). Mechanism: after orgasm, transient prolactin spike causes the refractory period; cabergoline prevents this. Off-label 'PRL crash' recreational use: 0.25 mg 1 hour before orgasm. NOT an endorsement — but in the AAS-Tren context, a bonus benefit (Tren libido drop + PORP shortening combo helps)."},
    {"q": "Nasal-spray cabergoline?", "a": "Compounded nasal-spray formulation (5 mg/mL liquid, 50 mcg/spray dose) — faster onset (~30 min vs oral ~3 h), bypassing first-pass hepatic metabolism. UGL-only globally (NO FDA/EMA approval for nasal formulation). Off-label use through compounding pharmacies in some US/EU jurisdictions. Nasal irritation possible, long-term mucosal damage undocumented. NOT recommended as AAS-PCT standard; oral Dostinex remains the default."},
    {"q": "Long-term cruise cabergoline?", "a": "TRT cruise AAS user (Test + occasional 19-Nor blast) low-dose cabergoline (0.25 mg 1x/week) chronic use is questionable. Annual echocardiography is recommended, and prolactin monitor every 3 months. Generally: NOT during chronic cruise, only during cycle (Tren/Deca active cycle 8-12 weeks → cabergoline 0.5 mg 2x/week; off-cycle → discontinue). Long-term low-dose safety is largely extrapolated from postmenopausal prolactinoma patient data — AAS-male-specific evidence sparse."}
  ],
  "related": ["pramipexole", "bromocriptine", "trenbolone-info", "nandrolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.5, "high": 1},
    "unit": "mg / 2x week (oral Mon+Thu, bloodwork-titrated)",
    "note": "Standard 19-Nor/Tren prolactin control: 0.25-0.5 mg 2x/week. Target prolactin <15 ng/mL bloodwork-titrated. Long half-life (~63 h) → steady-state after ~10-14 days. Severe high-prolactin event (>50 ng/mL) → 0.5-1 mg 2x/week × 2 weeks hard titration. After meal (nausea prevention)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before cabergoline start",
      "timing": "19-Nor/Tren cycle week 4-6 or symptom onset",
      "markers": "Prolactin sensitive immunoassay or LC-MS/MS (NOT ECL — overestimate!), Total/Free Testosterone, E2, LH, FSH, ALT/AST, MRI if prolactin >100 ng/mL (rule out micro-/macroprolactinoma).",
      "purpose": "Baseline. Indication: prolactin >25 ng/mL above male reference, or symptom onset (libido drop, lactation, Tren flu). If prolactin >100 → MRI sella turcica indicated (prolactinoma rule-out)."
    },
    "midCycle": {
      "label": "Cabergoline day 10-14",
      "timing": "Cabergoline start +10-14 days (steady-state level)",
      "markers": "Prolactin (re-test), Total Test, Free Test, E2, ALT/AST.",
      "purpose": "Titration confirm: prolactin <15 ng/mL target. If still >25 → dose increase to 0.5 mg 2x/week. Symptom resolution documentation (libido recovery, no lactation)."
    },
    "postCycle": {
      "label": "Cycle end / cabergoline cessation",
      "timing": "Last dose +2 weeks",
      "markers": "Prolactin (rebound monitor), Total/Free Test, E2, lipid panel.",
      "purpose": "Confirm: prolactin returns to baseline in 2-3 weeks. If rebound spike >40 ng/mL → before new cycle, cabergoline pre-emptive 0.25 mg/week × 2 weeks."
    },
    "cruise": {
      "label": "Chronic TRT cruise + occasional 19-Nor blast",
      "timing": "0.25 mg 1x/week chronic, blast phase 0.5 mg 2x/week",
      "markers": "Prolactin every 3 months, echocardiography (TTE) annually for cardiac valvulopathy monitor, lipid panel annually.",
      "purpose": "Chronic AAS user prolactin control + cardiac monitor. AAS-context low-dose chronic cabergoline risk is low, but annual echo prudent."
    }
  }
}
