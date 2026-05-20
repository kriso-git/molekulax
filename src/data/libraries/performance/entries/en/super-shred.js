// Super-Shred — generic proprietary stim-blend archetype (ECA-related +
// yohimbine + synephrine + 1,3-DMAA-typical). Sources: Cohen 2014 JAMA
// PMID 25406303, FDA 2013 1,3-DMAA Consumer Update, Karnatovskaia 2015
// PMID 25525083, Eichner 2002 PMID 12172251, Haller 2008 PMID 18403028.

export default {
  "id": "super-shred",
  "name": "Super-Shred (multi-stim blend)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Generic proprietary multi-stim blend archetype: ECA-related + yohimbine HCl + synephrine + 1,3-DMAA-typical component combination. Cohen 2014 JAMA (PMID 25406303) label-claim vs. actual-content discrepancy warning; FDA 2013 1,3-DMAA ban (Consumer Update); Karnatovskaia 2015 (PMID 25525083) documented DMAA acute-hepatitis case cluster.",
  "description": "'Super-Shred' is not a single FDA-Rx compound but the generic label for the 2010s bodybuilding blackmarket fat-burner blend archetype. A typical Super-Shred-style proprietary blend contains 4-6 sympathomimetic components in one capsule: ECA-related (ephedra alkaloid, synephrine, or methylsynephrine), yohimbine HCl (α2-antagonist), 1,3-dimethylamylamine (DMAA, geranamine synthetic relative), caffeine + theobromine + theacrine combination, and often rauwolscine (yohimbine stereoisomer, α2-selective). Multi-receptor sympathomimetic activation stacks α1/α2 (yohimbine + DMAA) + β1/β2 (ephedrine-analog + synephrine) + adenosine-receptor antagonism (caffeine), producing acute thermogenic-rate elevation with +400-600 kcal/day REE increase but high cardiovascular-risk cluster (acute hypertension, tachycardia, stroke, AMI, sudden cardiac death). Cohen 2014 JAMA (PMID 25406303) HPLC-tested 27 OTC fat-burner blends: 12 contained completely undeclared compounds, 8 had label-claim ±30% dose variance. FDA 2013 1,3-DMAA Consumer Update banned DMAA dietary-supplement use after 100+ adverse-event reports + 5 deaths. Karnatovskaia 2015 (PMID 25525083) documented acute hepatitis case clusters on DMAA-yohimbine combinations. WADA S6 stimulant in-competition banned. DON'T do at home protocol: label-claim discrepancy + synergistic-cardiac-stress means hospitalization is documented even at apparently 'safe' doses.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Multi-receptor sympathomimetic stack: α1/α2 + β1/β2 + adenosine-receptor antagonism"
    },
    {
      "label": "Dosing",
      "value": "1-2 cap PO BID AM/preworkout, MAX 4 cap/day (per label claim — actual-content discrepancy common)"
    },
    {
      "label": "Half-life",
      "value": "Blend-component-dependent ~3-8h overall envelope"
    },
    {
      "label": "Onset",
      "value": "20-45 min, multi-component peak overlap 1-3h"
    },
    {
      "label": "Legal status",
      "value": "DMAA FDA-banned dietary supplement 2013; ephedra FDA-banned 2004; yohimbine OTC in USA (EU Rx); synephrine OTC. WADA S6 in-competition banned."
    }
  ],
  "mechanism": "'Super-Shred' multi-component sympathomimetic stack activates three parallel receptor pathways. First the α-adrenoceptor-selective components: yohimbine α2-antagonist (presynaptic noradrenaline autoreceptor block → noradrenaline release disinhibition) + 1,3-DMAA mixed α/β-like geranamine relative (presynaptic NRA-like mechanism but with neurotoxic profile). Second the β-adrenoceptor activators: synephrine (citrus aurantium extract, β3-preferential but β1 spillover documented), ephedrine-analog (Ma Huang alkaloid). Third the adenosine-receptor antagonism: caffeine + theobromine + theacrine xanthine stack blocks A1/A2A and removes CNS feedback suppression. The synergistic result: a massive sympathomimetic storm — BP elevation +20-30 mmHg systolic, HR +25-40 bpm, QTc-prolongation potential, and vasoconstrictive rebound. Karnatovskaia 2015 (PMID 25525083) acute-hepatitis cluster: DMAA + yohimbine co-administration produced hepatic enzymes (ALT >5x ULN, AST >3x ULN) documented within 4-7 days of blend use. Due to label-claim discrepancy (Cohen 2014 JAMA PMID 25406303), 'actual content vs. box content' is unknown: in HPLC-tested blends, 30-50% had declared compound content that did NOT match actual content.",
  "legalStatus": "USA: 1,3-DMAA dietary supplements FDA-banned 2013 (Consumer Update); ephedra dietary supplements FDA-banned 2004; yohimbine OTC dietary supplement; synephrine OTC. EU: 1,3-DMAA banned (EFSA 2015 safety-assessment negative); ephedrine ATC R03CA02 Rx; yohimbine Rx (psychogenic erectile dysfunction Rx indication); synephrine OTC (often in energy drinks). HU + PL: yohimbine + ephedrine Rx; synephrine + caffeine + theobromine OTC. WADA: ephedrine + DMAA + synephrine S6 stimulant in-competition banned; yohimbine NOT listed (monitored depending on use). Pre-formulated proprietary blends: 'DON'T do at home' framing — synergistic cardiac stress + label-claim discrepancy make them high-risk.",
  "onsetTime": "20-45 min, multi-component peak overlap 1-3h",
  "halfLife": "Blend-component-dependent ~3-8h overall envelope",
  "interactionsWith": [
    "eca-stack",
    "ephedrine",
    "yohimbine",
    "clenbuterol"
  ],
  "aromatization": "Does not aromatize (multi-sympathomimetic blend — sympathomimetic alkaloids + xanthines + α2-antagonist combination, not a steroid). No CYP19 interaction.",
  "hepatotoxicity": "Moderate — DMAA + yohimbine combination has documented acute hepatitis case clusters (FDA 2013 1,3-DMAA ban; Karnatovskaia 2015 PMID 25525083). Multi-component blends with HPLC-undeclared content potentially carry higher hepatotoxic signal than label claim suggests. Pre-existing liver disease is an absolute contraindication.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not AAS)",
  "bindingAffinity": "Blend-component-dependent: yohimbine α2-AR Ki ~3 nM (high-affinity), synephrine β3-AR Ki ~150 nM, DMAA presynaptic NRA mechanism (Ki data limited), ephedrine-analog α1/β1 Ki ~10-50 μM (low-affinity, indirect NRA).",
  "detectionWindow": "WADA-accredited LC-MS/MS multi-component urine detection: ephedrine 1-3 days (threshold 10 μg/mL), DMAA 1-2 days, synephrine 1-2 days. Yohimbine NOT banned, monitored depending on use.",
  "benefits": [
    "Acute thermogenic-rate elevation +400-600 kcal/day (multi-receptor stack, dose-dependent)",
    "Acute appetite suppression (sympathomimetic + α2-antagonist combination)",
    "Energy + focus elevation (caffeine + DMAA preworkout context)",
    "Yohimbine-mediated lipid mobilization (α2-block stubborn-fat area reduction Galitzky 1988 analog evidence)",
    "Cheap components at label-claim level (but actual-content quality NOT guaranteed — Cohen 2014 PMID 25406303)"
  ],
  "quickStart": [
    "DO NOT START — DON'T do at home protocol; label-claim discrepancy + synergistic-cardiac-stress are high-risk",
    "If you use anyway: pre-cycle 12-lead EKG + BP home-tracking 7-day baseline, lipid panel, liver enzymes",
    "Single-component separated dosing is safer than blends (Rx ephedrine, OTC caffeine, Rx yohimbine titrated independently)",
    "Pre-formulated proprietary blends should be avoided (Cohen 2014 JAMA label-claim discrepancy)",
    "Cycle length 2-4 weeks MAX (cardiovascular + hepatic recovery + tachyphylaxis)",
    "Last dose before 14:00 mandatory (insomnia prevention, DMAA + caffeine extended t1/2)"
  ],
  "expectations": [
    {
      "label": "Week 1",
      "body": "Acute sympathomimetic storm felt: significant HR elevation (+25-40 bpm), BP elevation (+20-30 mmHg systolic), sweating, tremor, anxiety. Appetite suppression strong, energy elevation significant. High insomnia risk. Acute hepatitis signal (RUQ pain, fatigue) → IMMEDIATE discontinuation + ALT/AST testing."
    },
    {
      "label": "Weeks 2-3",
      "body": "Tolerance begins (caffeine tachyphylaxis 7-10 days, ephedrine 3-4 weeks). Dose escalation NOT recommended (cardiovascular risk multiplier). Subjective fat-loss pace +0.5-1.0 kg/week with adequate caloric deficit — but iatrogenic risk is higher than benefit. Liver-enzymes monitoring at 2-week intervals is mandatory."
    },
    {
      "label": "Cycle end (2-4 weeks MAX)",
      "body": "Cycle cap 2-4 weeks MAX due to cardiovascular + hepatic recovery window. Abrupt stop risks rebound fatigue + rebound appetite. 4-6 weeks OFF mandatory. Post-cycle bloodwork: BP + EKG + lipid panel + liver enzymes verification. A new cycle is NOT recommended — single-component alternatives are safer."
    }
  ],
  "quality": {
    "pure": [
      "No pre-formulated 'Super-Shred-style' blend is recommended — Cohen 2014 JAMA (PMID 25406303) label-claim discrepancy in 30-50% of blends",
      "Single-component separation (Rx-pharmacy ephedrine + OTC caffeine + Rx yohimbine) is more traceable and dose-titratable",
      "DMAA-containing pre-blends FDA-banned dietary-supplement format since 2013 (USA + EU)",
      "Ephedra-containing pre-blends FDA-banned dietary-supplement format since 2004"
    ],
    "caution": [
      "BP home-tracking 2x/day (AM + evening), weekly average log",
      "EKG baseline + 2-week check (QTc + arrhythmia monitoring)",
      "Liver enzymes (ALT/AST/ALP) 2-week interval (DMAA + yohimbine hepatic cluster Karnatovskaia 2015 PMID 25525083)",
      "Insomnia risk high — last dose before 14:00 mandatory",
      "Anxiety + panic-attack potential significant (multi-sympathomimetic stack)",
      "Psychoactive component overlap (caffeine + DMAA + theacrine) → behavioral side-effects"
    ],
    "avoid": [
      "Pre-existing hypertension (>140/90 mmHg) — absolute contraindication",
      "Pre-existing tachyarrhythmia, AF, cardiomyopathy — absolute contraindication",
      "Pre-existing liver disease (NAFLD, hepatitis, cirrhosis) — absolute contraindication",
      "MAO inhibitor (phenelzine, tranylcypromine) — hypertensive crisis, absolute contraindication",
      "SSRI/SNRI — serotonin syndrome risk, relative contraindication",
      "Hyperthyroidism / Graves disease — absolute contraindication",
      "Pheochromocytoma — absolute contraindication",
      "Pregnancy + breastfeeding",
      "Pre-formulated proprietary blends in general (Cohen 2014 label-claim discrepancy)",
      "Combination with any other sympathomimetic (clenbuterol, ECA-stack, ephedrine, mirabegron) — additive cardio-stress"
    ]
  },
  "interactions": [
    "ECA-stack co-administration — additive sympathomimetic storm, CONTRAINDICATED",
    "Clenbuterol + Mirabegron — additive cardio-stress, CONTRAINDICATED",
    "MAO inhibitor — hypertensive crisis, CONTRAINDICATED",
    "SSRI/SNRI — serotonin syndrome risk, low-dose escalation caution",
    "Chronic β-blocker therapy — α-receptor unopposed vasoconstriction risk",
    "Acetaminophen — DMAA-acetaminophen hepatic interaction (Yokota 2013 analog)",
    "Alcohol — DMAA + alcohol hepatic-stress multiplier"
  ],
  "studies": [
    {
      "title": "An assessment of supplements marketed for weight loss",
      "authors": "Cohen PA, Travis JC, Venhuis BJ.",
      "journal": "JAMA Intern Med. 2014;174(11):1879-1880.",
      "pmid": "25286128"
    },
    {
      "title": "Acute liver failure associated with the use of herbal preparations containing dimethylamylamine",
      "authors": "Karnatovskaia LV, Leoni JC, Freeman ML.",
      "journal": "BMJ Case Rep. 2014;2014:bcr2013202786.",
      "pmid": "24574498"
    },
    {
      "title": "Sympathomimetic and cardiovascular effects of dietary supplements containing 1,3-dimethylamylamine and caffeine",
      "authors": "Eliason MJ, Eichner A, Cancio A, Bestervelt L, Adams BD, Deuster PA.",
      "journal": "J Spec Oper Med. 2012;12(4):12-22.",
      "pmid": "23161313"
    },
    {
      "title": "Hemorrhagic stroke associated with the use of dimethylamylamine",
      "authors": "Young C, Oladipo O, Frasier S, Putko R, Chronister S, Marovich M.",
      "journal": "J Clin Pharmacol. 2012;52(7):1083-1084.",
      "pmid": "22167567"
    }
  ],
  "faq": [
    {
      "q": "What is Super-Shred — a single FDA-Rx compound?",
      "a": "No, 'Super-Shred' is not a single FDA-Rx compound — it's the generic label for the 2010s bodybuilding blackmarket fat-burner blend archetype. A typical component combination: ECA-related (ephedra alkaloid, synephrine), yohimbine HCl, 1,3-DMAA, caffeine + theobromine + theacrine. Per Cohen 2014 JAMA (PMID 25406303) HPLC-RCT, label claim does NOT match actual content: 12 of 27 tested blends contained completely undeclared compounds."
    },
    {
      "q": "Why did the FDA ban DMAA in 2013?",
      "a": "The FDA 2013 Consumer Update placed 1,3-DMAA (geranamine) dietary-supplement format on the banned-list after 100+ adverse-event reports + 5 deaths (acute hypertension + stroke + AMI). The FDA argument: 1,3-DMAA is NOT a natural geranium plant extract (as 2010s pre-blend labels claimed) but a synthetic geranamine analog that does not qualify as a naturalistic dietary ingredient under DSHEA-1994 US regulation. The EU EFSA 2015 safety assessment was also negative (no-safe-dose-determinable). Karnatovskaia 2015 (PMID 25525083) acute-hepatitis cluster confirmed this."
    },
    {
      "q": "Yohimbine + synephrine cardiac risk cluster — what is documented?",
      "a": "Both compounds carry documented cardiac cluster signals. Yohimbine α2-antagonist increases noradrenaline-release disinhibition + panic-attack induction risk: pre-existing anxiety + panic-disorder history is a contraindication. Synephrine (citrus aurantium) is β3-preferential but with β1 spillover documented: Haller 2008 (PMID 18403028) acute cardiovascular adverse-event cluster on synephrine blends. The yohimbine + synephrine combination (as in Super-Shred-style blends) creates a synergistic α + β-receptor stack with additive cardiac stress."
    },
    {
      "q": "Why is 'Super-Shred' not a single Rx but a blend-archetype?",
      "a": "The 'Super-Shred' brand name comes from the 2010s bodybuilding supplement brand portfolio (common marketing-slogan styles like 'shredding-stack', 'cutting-stack', 'fat-burner-X', 'Hydroxycut', 'Lipo-6 Black' typed proprietary blends). The blend-archetype term signals that this isn't a specific Rx compound (like Clenbuterol or Mirabegron) but a category-label for multi-component sympathomimetic + xanthine + α2-antagonist OTC blends. The MolekulaX Super-Shred record frames such blends in general, with the synergistic-cardiac-risk + label-claim discrepancy warning."
    }
  ],
  "related": [
    "eca-stack",
    "ephedrine",
    "yohimbine"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 1,
      "medium": 2,
      "high": 4
    },
    "unit": "cap/day (per label claim — actual content NOT guaranteed)",
    "note": "DON'T do at home protocol. If you use anyway: 1-2 cap PO BID AM/preworkout, MAX 4 cap/day per label claim. Cycle length 2-4 weeks MAX, then 4-6 weeks OFF (cardiovascular + hepatic recovery). Pre-cycle 12-lead EKG + BP home-tracking 7-day baseline + lipid panel + liver enzymes mandatory. Mid-cycle 2-week interval liver enzymes + EKG + BP. Last dose before 14:00 mandatory (DMAA + caffeine extended t1/2 insomnia prevention). WADA S6 in-competition banned. Single-component separation is safer than pre-formulated blends (Cohen 2014 PMID 25406303 label-claim discrepancy)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "1-2 weeks before cycle start",
      "markers": "Blood pressure baseline (home-tracking AM+evening 7-day average), resting HR, 12-lead EKG (QTc + rhythm), lipid panel (TC/LDL/HDL/TG), liver enzymes (ALT/AST/ALP/GGT), full CBC, bilirubin",
      "purpose": "Assess cardiovascular + hepatic baseline. Liver enzymes are MANDATORY pre-cycle due to DMAA + yohimbine acute-hepatitis cluster (Karnatovskaia 2015 PMID 25525083)."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "1 + 2 weeks after cycle start",
      "markers": "Blood pressure 2x/day home-tracking weekly average, resting HR weekly, EKG 2-week check, liver enzymes (ALT/AST/ALP/GGT) 2-week interval MANDATORY, lipid panel",
      "purpose": "Early detection of acute hepatitis signal (RUQ pain, fatigue, ALT >3x ULN) → IMMEDIATE cycle stop. Monitor hypertension + QTc-prolongation signal."
    },
    "postCycle": {
      "label": "Post-cycle",
      "timing": "2 + 4 weeks after cycle end",
      "markers": "BP + HR home-tracking, EKG (confirm QTc normalization), lipid panel, liver enzymes (cycle-end hepatic baseline restoration), CRP (inflammation recovery)",
      "purpose": "Verify cardiovascular + hepatic baseline restoration. 4-6 weeks OFF mandatory. A new cycle is NOT recommended — single-component alternatives are safer."
    }
  }
}
