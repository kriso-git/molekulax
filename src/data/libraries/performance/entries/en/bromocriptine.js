// Bromocriptine (Parlodel) — first-generation ergot D2 dopamine agonist.
// Sandoz 1972 (Parlodel), FDA 1978. Cabergoline's predecessor, now niche.
// Cycloset 2009 FDA T2DM indication.
// Sources: FDA Parlodel SmPC, FDA Cycloset SmPC, Webster 1994 PMID 8090165,
// Krupp 1981 PMID 7032404.

export default {
  "id": "bromocriptine",
  "name": "Bromocriptine (Parlodel)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "First-generation ergot D2 dopamine agonist, Sandoz 1972 (Parlodel). Cabergoline's predecessor; shorter half-life (~3-12 h), more vegetative side effects (nausea, hypotension). Also marketed as Cycloset (2009 FDA) for T2DM.",
  "description": "Bromocriptine (Parlodel) is a first-generation ergot-structure dopamine D2 receptor agonist synthesized by Sandoz (now Novartis) in 1972 and FDA-approved in 1978 for hyperprolactinemia (Parlodel 2.5/5 mg). It has a longer clinical history than cabergoline, and although largely superseded by the cleaner D2-selective cabergoline, it has remained in the AAS-PCT arsenal for three reasons: (1) Price — generic ~€3/box (vs cabergoline ~€25-40), particularly attractive on emerging-markets pharmaceutical markets; (2) Cabergoline intolerance fallback (when impulse-control disorder or persisting nausea occurs on cabergoline); (3) Metabolic-benefit secondary application — Cycloset (S2 Therapeutics, FDA 2009) is a special quick-release formulation of bromocriptine mesylate for improving insulin sensitivity in type 2 diabetes (Cincotta 1991/1996 PMIDs basis), which can be incidentally useful in the obese AAS cycler. Mechanistic profile: D1+D2 mixed agonist (vs cabergoline D2-selective), thus more vegetative side effects (nausea, orthostatic hypotension, dyskinesia), shorter half-life (~3-12 h, requiring 2-3× daily dosing).",
  "keyInfo": [
    {"label": "Mechanism", "value": "First-gen ergot D1+D2 mixed DA agonist, prolactin suppression + secondary T2DM insulin sensitivity boost"},
    {"label": "Dosing (AAS prolactin)", "value": "1.25-5 mg/day divided 2-3× (start 1.25 mg with food, slow titration)"},
    {"label": "Half-life", "value": "~3-12 hours"},
    {"label": "Onset", "value": "Prolactin reduction 1-2 h, plateau 8-24 h"},
    {"label": "Legal status", "value": "FDA + EMA Rx, HU + PL approved, WADA allowed"}
  ],
  "mechanism": "Bromocriptine is an ergot-structure D2 agonist (D2 Ki ~5 nM, ~10× less selective over D1 than cabergoline). It binds the D2 receptor on pituitary lactotrophs, inhibiting prolactin secretion. The non-selective D1+D2 activity causes the vegetative profile differential: orthostatic hypotension, nausea/vomiting (peripheral dopaminergic effect), dyskinesia (CNS dopamine modulation). It also acts on D2 receptors of pancreatic β-cells — this is the basis of the Cycloset formulation (quick-release 0.8 mg morning dose) for type 2 diabetes: the morning dopamine pulse improves peripheral insulin sensitivity (Cincotta 1991 mechanism paper). Hepatic CYP3A4 metabolizes, ~30% bioavailability. In AAS context: bromocriptine can substitute for cabergoline in prolactin control, but is second-line due to more side effects.",
  "legalStatus": "USA: FDA-approved Parlodel 1978 (Sandoz, now Novartis), Cycloset 2009 (S2 Therapeutics, T2DM indication). Indications: hyperprolactinemia, prolactinoma, Parkinson's disease adjunct, acromegaly, T2DM (Cycloset). EU: EMA-approved. HU: registered (Parlodel Rx). PL: registered (Bromergon, Parlodel Rx). WADA: not listed.",
  "onsetTime": "Prolactin reduction 1-2 h, plateau 8-24 h",
  "halfLife": "~3-12 hours",
  "halfLifeActive": "~3-12 hours (parent compound active)",
  "interactionsWith": ["cabergoline", "pramipexole", "trenbolone-info", "nandrolone-info"],
  "aromatization": "None — DA agonist.",
  "hepatotoxicity": "Low hepatic; cardiac valvulopathy risk similar to cabergoline at high dose; less commonly documented in AAS-PCT context.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not AAS)",
  "bindingAffinity": "D2 Ki ~5 nM, D1 ~30-50 nM (mixed agonist). Pancreatic β-cell D2 ~10 nM (Cycloset mechanism basis).",
  "detectionWindow": "Not relevant (WADA not listed).",
  "benefits": [
    "Cost emphasis in emerging markets: ~€3/box vs cabergoline ~€25-40",
    "Cabergoline-intolerance fallback (ICD, nausea persisting)",
    "Cycloset T2DM application: insulin sensitivity boost in obese AAS cycler",
    "Long clinical history (since 1972, >50 years)",
    "EU + globally available pharma-grade"
  ],
  "quickStart": [
    "Slow titration MANDATORY: 1.25 mg/evening (before bed + with food) × 3-7 days, then 2×/day, then 3×/day",
    "Standard AAS prolactin control: 2.5 mg 2×/day (morning + evening)",
    "MUST take with food (significant nausea relief)",
    "Bloodwork: prolactin pre-treatment + 7-10 days later re-test",
    "Bromocriptine NOT recommended in cabergoline-naive users (cabergoline is better tolerated)",
    "Switch option in case of cabergoline allergy or cabergoline-ICD history"
  ],
  "expectations": [
    {"label": "Day 1-3", "body": "Significant nausea (orientation side effect), mild orthostatic hypotension. Prolactin reduction measurable (~20-40%)."},
    {"label": "Week 1-2", "body": "Tolerance develops (after titration), nausea eases. Prolactin target <15 ng/mL achievable on stable 2.5-5 mg/day dose."},
    {"label": "Long-term use", "body": "Steady-state, annual cardiac valvulopathy monitor. Cycloset T2DM use case: HbA1c reduction 0.5-1.0% as adjunct therapy to metformin (Pijl 2000)."},
    {"label": "After cessation", "body": "Prolactin rebound over 1-2 weeks. Short half-life means faster washout than cabergoline."}
  ],
  "quality": {
    "pure": [
      "Novartis Parlodel 2.5/5 mg, Rx pharma-grade (EU pharmacy)",
      "Bromocriptine mesylate generic (Sandoz, Teva, Ratiopharm)",
      "Cycloset 0.8 mg (S2 Therapeutics, US T2DM Rx) — quick-release morning dose",
      "Indian generic (Sun Pharma Bromergon, Cipla)",
      "UGL liquid bromocriptine: rare, HPLC-tested source required"
    ],
    "caution": [
      "Nausea management: slow titration from 1.25 mg in 3-7 day steps, always with food",
      "Orthostatic hypotension: rise slowly in the morning, hydration monitor",
      "Cardiac valvulopathy: chronic high-dose (>30 mg/day, Parkinson's protocol) — at AAS dose, risk is low",
      "Dyskinesia: rare, dose-dependent — reversible on cessation",
      "Cannot be combined with antipsychotics (D2 antagonist overlap)",
      "Pregnancy / breastfeeding"
    ],
    "avoid": [
      "Without cabergoline intolerance (cabergoline is first-line)",
      "Hypertensive disorders of pregnancy (eclampsia history)",
      "Ergot alkaloid allergy",
      "Severe hepatic insufficiency",
      "Current antipsychotic therapy"
    ]
  },
  "interactions": [
    "Cabergoline: cannot be combined (overlapping mechanism)",
    "Pramipexole: cannot be combined",
    "Trenbolone/nandrolone stack: standard alternative prolactin control (cabergoline-intolerant user)",
    "Antipsychotics: contraindicated (D2 antagonism)",
    "Antihypertensives: caution for hypotension exacerbation",
    "Macrolide antibiotics (erythromycin, clarithromycin): CYP3A4 inhibition → bromocriptine level rises",
    "Food: MANDATORY with food (nausea prevention)"
  ],
  "studies": [
    {"title": "A comparison of cabergoline and bromocriptine in the treatment of hyperprolactinemic amenorrhea", "authors": "Webster J, Piscitelli G, Polli A, Ferrari CI, Ismail I, Scanlon MF.", "journal": "N Engl J Med. 1994;331(14):904-909.", "pmid": "8090165"},
    {"title": "Bromocriptine: a review of its pharmacological properties and therapeutic use in Parkinson's disease", "authors": "Krupp P, Wesp M.", "journal": "Drugs. 1981;21(3):143-159.", "pmid": "7032404"},
    {"title": "Bromocriptine (Cycloset) for the treatment of type 2 diabetes", "authors": "Cincotta AH, Meier AH.", "journal": "Diabetes Care. 1996;19(6):667-670.", "pmid": "8725867"},
    {"title": "Bromocriptine for diabetes — randomized controlled trial", "authors": "Pijl H, Ohashi S, Matsuda M, et al.", "journal": "Diabetes Care. 2000;23(8):1154-1161.", "pmid": "10937514"}
  ],
  "faq": [
    {"q": "Bromocriptine vs cabergoline — when first-line?", "a": "Cabergoline is the default first-line choice (90% AAS-PCT users). Bromocriptine is first in 3 niche situations: (1) Emerging markets economics — bromocriptine ~€3/box vs cabergoline ~€25-40, more expensive cabergoline at Hungary/Poland pharmacies; (2) Cabergoline intolerance — if impulse-control disorder or persistent nausea on cabergoline, bromocriptine fallback; (3) Cycloset T2DM application — obese AAS cycler (BMI >30, prediabetes HbA1c 5.7-6.4%), Cycloset 0.8 mg morning quick-release for insulin sensitivity boost as side benefit alongside prolactin control. In cabergoline-naive users, NOT bromocriptine — cabergoline tolerates better."},
    {"q": "Nausea management?", "a": "Bromocriptine's #1 side effect. Mitigation strategy: (1) Slow titration MANDATORY — 1.25 mg/evening (before bed) × 3-7 days, then 1.25 mg 2×/day × 3-7 days, then 2.5 mg 2×/day × 7 days, then target dose; (2) MUST take with food (never empty stomach); (3) Evening dosing first (sleep through the nausea peak); (4) Antiemetic (metoclopramide is NOT good — D2 antagonist conflict with bromocriptine mechanism!), prefer ondansetron 4 mg PRN. If nausea persists after 2 weeks → switch to cabergoline."},
    {"q": "Cycloset T2DM application — AAS metabolic benefit?", "a": "Cycloset (bromocriptine mesylate quick-release 0.8 mg morning) in Pijl 2000 (PMID 10937514) and Cincotta 1996 (PMID 8725867) trials documented HbA1c reduction of 0.5-1.0% as adjunct therapy to metformin in type 2 diabetes patients. Mechanism: morning dopamine pulse improves peripheral (adipose + liver) insulin sensitivity. AAS context off-label: obese AAS cycler (BMI >30, glucose intolerance after GH/insulin stack) can apply it as side benefit. Does NOT replace metformin/SGLT2 inhibitor. Cabergoline does NOT have this T2DM application (different mechanism due to D2 selectivity)."},
    {"q": "Sexual benefit similar to cabergoline?", "a": "Yes, but at lower magnitude. The Krüger 2003-style post-orgasmic refractory period shortening is more strongly documented on cabergoline (due to D2 selectivity). On bromocriptine the sexual benefit is smaller, and the side effect profile (nausea, hypotension) can degrade sexual life quality — net effect mixed. If sexual emphasis is the goal, cabergoline > bromocriptine."}
  ],
  "related": ["cabergoline", "pramipexole", "trenbolone-info", "nandrolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 1.25, "medium": 2.5, "high": 5},
    "unit": "mg / day divided 2-3× (oral, with food)",
    "note": "Standard AAS prolactin control: 2.5-5 mg/day divided 2-3×. Slow titration MANDATORY from 1.25 mg (nausea management). Cycloset T2DM application: 0.8 mg morning quick-release. Second-line to cabergoline — first choice only in intolerance/cost-emphasis/Cycloset cases."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before bromocriptine start",
      "timing": "19-Nor/Tren cycle week 4-6 or cabergoline-intolerance onset",
      "markers": "Prolactin, Total/Free Test, E2, lipid panel, ALT/AST, HbA1c if obese (Cycloset T2DM application monitor).",
      "purpose": "Baseline. Indication: prolactin >25 ng/mL AND (cabergoline intolerance OR Cycloset T2DM emphasis OR emerging markets cost emphasis)."
    },
    "midCycle": {
      "label": "Bromocriptine day 10-14",
      "timing": "Bromocriptine titration end +7-14 days",
      "markers": "Prolactin (re-test), Total Test, blood pressure monitor, HbA1c if Cycloset use, ALT/AST.",
      "purpose": "Titration confirm: prolactin <15 ng/mL target. Side effect monitor (nausea tolerance, orthostatic hypotension). For Cycloset T2DM application, HbA1c reduction ~3 months later."
    },
    "postCycle": {
      "label": "Cycle end / bromocriptine cessation",
      "timing": "Last dose +1 week (short half-life → faster washout)",
      "markers": "Prolactin (rebound monitor), Total/Free Test, blood pressure, HbA1c.",
      "purpose": "Confirm: prolactin returns to baseline in 1-2 weeks."
    },
    "cruise": {
      "label": "Chronic Cycloset T2DM application on AAS cruise",
      "timing": "0.8 mg morning quick-release chronic",
      "markers": "HbA1c every 3 months, prolactin every 6 months, blood pressure, echocardiography annually (chronic ergot-use cardiac monitor).",
      "purpose": "Cycloset T2DM cruise off-label application in obese AAS user. Annual cardio monitor prudent."
    }
  }
}
