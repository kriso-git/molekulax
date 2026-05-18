// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.586Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "metformin",
  "name": "Metformin",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "First-line oral therapy for type 2 diabetes worldwide. WHO Essential Medicines, ADA and EASD guideline anchor since 1957.",
  "description": "Metformin is a biguanide-class oral antidiabetic whose primary action is suppression of hepatic gluconeogenesis via activation of AMP-activated protein kinase (AMPK). Currently the safest and cheapest licensed T2DM agent, with demonstrated cardiovascular outcome benefit in overweight diabetics since UKPDS-34 (1998, Lancet). The ADA/EASD 2022 consensus places Metformin as initial therapy for all T2DM patients without ASCVD, heart failure or CKD-priority (where SGLT2i or GLP-1 RA take precedence). Off-label indications: prediabetes (DPP 2002 NEJM), PCOS anovulation, gestational diabetes, mitigation of antipsychotic-induced weight gain.",
  "keyInfo": [
    {
      "label": "ATC code",
      "value": "A10BA02"
    },
    {
      "label": "Prescription",
      "value": "Prescription only (Rx)"
    },
    {
      "label": "Mechanism",
      "value": "AMPK activator, hepatic gluconeogenesis inhibitor"
    },
    {
      "label": "Half-life",
      "value": "4-9 h (plasma), 17 h (erythrocyte)"
    },
    {
      "label": "Onset",
      "value": "1-3 h (single dose), 4-7 days (steady-state HbA1c)"
    }
  ],
  "mechanism": "Via AMPK activation it inhibits hepatic gluconeogenesis (PEPCK and G6Pase repression), decreases mitochondrial complex I activity (Owen 2000 Biochem J), increases peripheral insulin sensitivity and skeletal muscle glucose uptake. It does not stimulate insulin secretion, therefore monotherapy hypoglycemia risk is minimal.",
  "legalStatus": "EU/HU: prescription only (Glucophage, Siofor, Metfogamma, Adimet). USA: FDA Rx (Glucophage, Fortamet, Glumetza). No abuse potential, not a scheduled substance. PCOS and prediabetes indications are off-label but widespread in clinical practice.",
  "bioavailability": "~50-60% (oral, fasted, 500 mg tablet — FDA Glucophage label)",
  "onsetTime": "1-3 h (single dose), 4-7 days (steady-state HbA1c lowering)",
  "halfLife": "4-9 h (plasma), ~17 h (erythrocyte compartment)",
  "atcCode": "A10BA02",
  "prescriptionStatus": "Prescription only (Rx)",
  "indications": [
    "Type 2 diabetes mellitus (T2DM) first-line therapy",
    "Prediabetes progression prevention (off-label, DPP 2002 evidence)",
    "Polycystic ovary syndrome (PCOS), anovulation and insulin resistance",
    "Gestational diabetes (second line, after insulin)",
    "Mitigation of antipsychotic-induced weight gain"
  ],
  "contraindications": [
    "Severe renal impairment (eGFR < 30 ml/min/1.73 m²)",
    "Acute metabolic acidosis (diabetic ketoacidosis, lactic acidosis history)",
    "Acute severe heart failure, hypoxic states, shock",
    "Severe hepatic impairment",
    "Hold for 48 h around iodinated contrast imaging"
  ],
  "commonSideEffects": [
    "Gastrointestinal: nausea, diarrhea, abdominal discomfort (20-30%, mitigated with food)",
    "Metallic taste (transient)",
    "Reduced B12 absorption with long-term use (annual monitoring)",
    "Severe but rare: lactic acidosis (< 0.03 cases / 1000 patient-years, mainly in renal failure)"
  ],
  "cyp450": [
    "No significant CYP450 metabolism",
    "OCT1/OCT2 transporter substrate",
    "MATE1/MATE2-K renal excretion"
  ],
  "crossMolInteractions": [
    "Iodinated contrast: 48 h hold before and after, renal function check",
    "Alcohol: increases lactic acidosis risk, moderation required",
    "Cimetidine, Dolutegravir: OCT2 inhibition, plasma metformin levels may rise",
    "Furosemide, Hydrochlorothiazide: hyperglycemic tendency (drug effect may be reduced)",
    "GLP-1 RA, SGLT2i: synergistic, rational combination (ADA/EASD 2022)"
  ],
  "benefits": [
    "HbA1c reduction typically 1.0-1.5% (monotherapy)",
    "Weight-neutral or mildly weight-reducing (mean -2 kg)",
    "Cardiovascular outcome benefit in overweight T2DM (UKPDS-34)",
    "Minimal hypoglycemia risk in monotherapy",
    "Cheap, generic, decades of safety data (since 1957)"
  ],
  "quickStart": [
    "Check renal function (eGFR) before start, then every 6-12 months",
    "Always take with meals to reduce GI side effects",
    "Slow titration: 500 mg/day, increasing weekly per tolerance",
    "XR (extended release) form better tolerated than IR",
    "B12 level annually on long-term use"
  ],
  "expectations": [
    {
      "label": "Week 1",
      "body": "500 mg/day with meals. GI side effects (nausea, loose stools) common in 30%, usually subside within 1-2 weeks."
    },
    {
      "label": "Weeks 2-4",
      "body": "Slow dose escalation to 1000-1500 mg/day. GI symptoms abate. Blood glucose monitoring (home FPG and/or CGM)."
    },
    {
      "label": "Months 3-4",
      "body": "HbA1c measurement. Typical reduction 1.0-1.5% in monotherapy. If target (usually < 7%) not reached, ADA/EASD 2022 recommends adding second agent (GLP-1 RA, SGLT2i)."
    }
  ],
  "quality": {
    "pure": [
      "Bayer Glucophage, Merck Siofor, Adimet (HU), Metformax (PL): reference brands",
      "Generic forms are bioequivalent (FDA Orange Book AB rating)"
    ],
    "caution": [
      "Acute illness (fever, dehydration): hold temporarily due to lactic acidosis risk",
      "eGFR 30-45 ml/min: dose reduction required, eGFR < 30: contraindicated",
      "B12 deficiency on long-term use, annual monitoring"
    ],
    "avoid": [
      "Severe renal impairment (eGFR < 30)",
      "Diabetic ketoacidosis or other metabolic acidosis",
      "Severe heart failure (NYHA III-IV), hypoxia, shock",
      "Day of iodinated contrast imaging and 48 h after (lactic acidosis risk, until renal function reassessed)",
      "Acute severe infection, sepsis, dehydration (temporary suspension due to lactic acidosis risk)",
      "Severe hepatic impairment (reduced lactate clearance, contraindicated per FDA label)"
    ]
  },
  "interactions": [
    "GLP-1 RA (Semaglutide, Liraglutide): synergistic, rational combination (ADA/EASD 2022)",
    "SGLT2 inhibitor (Empagliflozin, Dapagliflozin): cardio-renal protective combo",
    "Insulin: combinable but insulin dose reduction may be needed",
    "Iodinated contrast: 48 h hold before imaging, check renal function",
    "Alcohol: lactic acidosis risk, moderation"
  ],
  "studies": [
    {
      "title": "Effect of intensive blood-glucose control with metformin on complications in overweight patients with type 2 diabetes (UKPDS 34)",
      "authors": "UK Prospective Diabetes Study (UKPDS) Group.",
      "journal": "Lancet. 1998;352(9131):854-65.",
      "pmid": "9742977"
    },
    {
      "title": "Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin (DPP)",
      "authors": "Diabetes Prevention Program Research Group.",
      "journal": "N Engl J Med. 2002;346(6):393-403.",
      "pmid": "11832527"
    },
    {
      "title": "Evidence that metformin exerts its anti-diabetic effects through inhibition of complex 1 of the mitochondrial respiratory chain",
      "authors": "Owen MR, Doran E, Halestrap AP.",
      "journal": "Biochem J. 2000;348(Pt 3):607-14.",
      "pmid": "10839993"
    },
    {
      "title": "Role of AMP-activated protein kinase in mechanism of metformin action",
      "authors": "Zhou G, Myers R, Li Y et al.",
      "journal": "J Clin Invest. 2001;108(8):1167-74.",
      "pmid": "11602624"
    },
    {
      "title": "Management of hyperglycaemia in type 2 diabetes, 2022. A consensus report by ADA and EASD",
      "authors": "Davies MJ, Aroda VR, Collins BS et al.",
      "journal": "Diabetologia. 2022;65(12):1925-1966.",
      "pmid": "36151309"
    },
    {
      "title": "Metformin use in pregnancy: promises and concerns",
      "authors": "Lindsay RS, Loeken MR.",
      "journal": "Diabetologia. 2017;60(9):1612-1619.",
      "pmid": "28770325"
    },
    {
      "title": "Long-term metformin use and vitamin B12 deficiency in the Diabetes Prevention Program Outcomes Study",
      "authors": "Aroda VR, Edelstein SL, Goldberg RB et al.",
      "journal": "J Clin Endocrinol Metab. 2016;101(4):1754-61.",
      "pmid": "26900641"
    }
  ],
  "faq": [
    {
      "q": "When should Metformin be switched to Semaglutide or an SGLT2i?",
      "a": "Per ADA/EASD 2022 you usually add rather than switch. With ASCVD or heart failure, GLP-1 RA or SGLT2i is prioritized first-line, possibly without metformin. With CKD priority (albuminuria), SGLT2i."
    },
    {
      "q": "What does the lactic acidosis risk mean?",
      "a": "Modern data show metformin-associated lactic acidosis incidence < 0.03 cases / 1000 patient-years with normal renal function, not comparable to old Phenformin (withdrawn 1977). Severe acute illness, dehydration, renal impairment, alcohol abuse, contrast imaging are separate risk factors."
    },
    {
      "q": "What if GI side effects do not subside?",
      "a": "First slow titration (500 mg/2 wk), choose XR (extended release), always take with food. If no improvement after 4 weeks, consider dose reduction or alternative agent (SGLT2i, GLP-1 RA). DPP records: ~5% permanently intolerant."
    },
    {
      "q": "Can metformin be used in pregnancy?",
      "a": "ACOG and NICE guidelines allow Metformin as second-line gestational diabetes therapy when insulin not an option or per patient preference. The MiG trial (Rowan 2008 NEJM PMID 18463376) demonstrated safety. Long-term child follow-up data favorable, but insulin remains the gold standard."
    },
    {
      "q": "Can lifestyle change replace metformin?",
      "a": "The DPP (2002 NEJM) trial showed intensive lifestyle intervention (7% weight loss, 150+ minutes weekly physical activity) reduced T2DM incidence by 58% in prediabetics vs 31% for metformin. So lifestyle is superior, but metformin is more compliance-durable (DPPOS 10-year follow-up). In established T2DM it does not replace, only complements."
    }
  ],
  "related": [
    "semaglutide"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Week 1-2",
        "dose": "500"
      },
      {
        "phase": "Week 3-4",
        "dose": "1000"
      },
      {
        "phase": "Week 5-8",
        "dose": "1500"
      },
      {
        "phase": "Target",
        "dose": "2000"
      }
    ],
    "unit": "mg/nap",
    "note": "Slow titration for GI tolerance. Always with food, prefer XR (extended release). Max 2000-2550 mg/day, dose reduction per renal function (eGFR)."
  }
}
