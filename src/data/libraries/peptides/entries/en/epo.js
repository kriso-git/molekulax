// EPO (Epogen / Procrit / Aranesp / Mircera) — Erythropoietin, clinical CKD
// anemia framing primary, WADA-banned endurance-doping context secondary.
// Sources: FDA Epogen SmPC (Amgen 1989), EMA EPREX SPC, KDIGO 2024 Anemia
// Guidelines, Lundby 2011 EPO normal humans PMID 20807784, Lippi 2006
// blood-doping review PMID 16769597, Jacobs 2005 ESAM 2003 survey PMID 15824128.

export default {
  "id": "epo",
  "name": "EPO",
  "image": "/peptides/EPO.png",
  "accentColor": "#f87171",
  "tagColor": "rgba(248,113,113,0.16)",
  "shortDesc": "Erythropoietin — EPO-receptor agonist 165-AA glycoprotein. CKD anemia treatment (clinical Rx); WADA-strictly-banned in endurance-doping context.",
  "description": "Erythropoietin (EPO) is a 165-amino-acid glycoprotein cytokine (~30 kDa), endogenously produced by the kidney's peritubular interstitial cells (~90%) and to a small extent by the liver (~10%). The exogenous recombinant EPO (rhEPO) received FDA approval in 1989 from Amgen as Epogen (epoetin-alfa) for the treatment of chronic kidney disease (CKD) anemia — it was the first true recombinant therapeutic peptide blockbuster. Mechanism: EPO binds the EPO receptor (EPO-R) on the surface of erythroid progenitor cells (bone marrow BFU-E + CFU-E) → JAK2/STAT5 signaling cascade activation → erythroid survival + proliferation + differentiation → increase in RBC mass + hematocrit + oxygen-carrying capacity. **Clinical Rx context (primary, ~75% of usage)**: CKD anemia (dialysis + pre-dialysis), chemotherapy-induced anemia (Procrit), HIV/AZT anemia, anemia of prematurity. Target Hb 10-12 g/dL — KDIGO 2024 cautions against Hb >12-13 g/dL targeting (TREAT, CHOIR, CREATE trial data: higher-target → cardiovascular events + stroke risk). **Endurance-doping context (secondary, NOT endorsed)**: micro-dose protocols of 100-300 IU/kg/week documented since the 1990s (Lance Armstrong era), WADA-strictly-banned under S2.1 Erythropoietin-mimetic agents YEAR-ROUND (in + out-of-competition). Detection: serum/urine isoform analysis (IEF + SDS-PAGE) + biological passport hematocrit tracking. Sources: epoetin-alfa (Epogen Amgen, Procrit Janssen — same molecule), darbepoetin-alfa (Aranesp Amgen — hyperglycosylated, longer t1/2), methoxy-PEG-epoetin-beta (Mircera Roche — PEGylated, monthly dosing). **MANDATORY bloodwork**: Hb, Hct, ferritin, transferrin saturation, reticulocyte count, blood pressure (hypertension risk significant).",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "EPO receptor (EPO-R) agonist on erythroid progenitors → JAK2/STAT5 → RBC mass + Hct increase"
    },
    {
      "label": "Dosing (CKD epoetin-alfa)",
      "value": "50-100 IU/kg SC 3x/week, target Hb 10-12 g/dL"
    },
    {
      "label": "Dosing (darbepoetin)",
      "value": "0.45-0.75 mcg/kg SC weekly or biweekly"
    },
    {
      "label": "Half-life",
      "value": "Epoetin-alfa 4-13h SC / Darbepoetin 70-138h / Mircera ~135h"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA Rx (CKD anemia, chemo anemia), WADA S2.1 STRICTLY BANNED (in + out-of-competition)"
    },
    {
      "label": "Mandatory bloodwork",
      "value": "Hb, Hct, ferritin, transferrin-sat, reticulocyte count, blood pressure"
    }
  ],
  "mechanism": "Erythropoietin is a 165-amino-acid single-chain glycoprotein (~30 kDa, 3 N-glycosylation + 1 O-glycosylation sites), with ~40% of its molecular weight from glycan sugars — glycosylation is critical for t1/2 + receptor-affinity regulation. Endogenous production: kidney peritubular interstitial fibroblast cells under HIF-2α (Hypoxia-Inducible Factor) control → hypoxia / bleeding → HIF stabilization → EPO gene transcription. Receptor binding: EPO-R homodimer on erythroid progenitor cells (bone marrow BFU-E early progenitor + CFU-E late progenitor + proerythroblast) → conformational change → JAK2 activation (cross-phosphorylation) → STAT5 + PI3K/AKT + MAPK downstream pathways → BCL-XL antiapoptotic expression + cell-cycle progression + globin gene transcription. Net effect: erythroid lineage survival + division + hemoglobinization → mature RBCs released into peripheral blood. In CKD context, kidney damage reduces endogenous EPO production → normocytic-normochromic anemia → exogenous rhEPO replaces the missing hormone. In doping context, an EPO injection into an already normal-EPO-level healthy individual → supraphysiological erythropoiesis → Hct 50-60%+ → blood viscosity rise → thromboembolic + cardiovascular risk.",
  "legalStatus": "USA: FDA Rx Epogen (Amgen 1989, epoetin-alfa), Procrit (Janssen, epoetin-alfa same molecule), Aranesp (Amgen 2001, darbepoetin-alfa), Mircera (Roche 2007, methoxy-PEG-epoetin-beta). Indications: CKD anemia (dialysis + pre-dialysis), chemotherapy-induced anemia, HIV/AZT anemia, peri-operative autologous blood donation support, anemia of prematurity. EU: EMA Rx (EPREX/Erypo Janssen, NeoRecormon Roche, Binocrit Sandoz biosimilar, Aranesp, Mircera). HU + PL: registered (EPREX, NeoRecormon, Aranesp Rx, only hematologist/nephrologist prescribing). WADA: S2.1 Erythropoietin-mimetic agents — **STRICTLY BANNED YEAR-ROUND** (in-competition + out-of-competition, every sport). WADA-accredited labs detect via isoform analysis (IEF, SDS-PAGE) + Athlete Biological Passport (ABP) Hct tracking.",
  "onsetTime": "Reticulocyte response 3-5 days, measurable Hb rise 2-6 weeks",
  "halfLife": "Epoetin-alfa 4-13h SC (IV ~6-8h); Darbepoetin-alfa 70-138h SC; Mircera (methoxy-PEG-epoetin-beta) ~135h SC",
  "halfLifeActive": "Epoetin-alfa pharmacodynamic effect 5-7 days; Darbepoetin 2-3 weeks; Mircera 4 weeks (monthly dosing)",
  "interactionsWith": [
    "hgh",
    "igf-1-lr3",
    "tesamorelin",
    "mots-c"
  ],
  "aromatization": "N/A — not a steroid, protein-based cytokine, does not aromatize.",
  "hepatotoxicity": "No hepatic stress — subcutaneous (SC) or intravenous (IV) injection, NOT oral, NOT 17α-alkylated. Hepatic enzyme rise not documented in clinical trial database (Epogen + Aranesp 30+ years of safety data).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not an AAS; erythroid stimulus)",
  "bindingAffinity": "EPO-R receptor affinity Kd ~100-200 pM. Darbepoetin-alfa: ~4x reduced receptor affinity vs epoetin-alfa, BUT 3x longer t1/2 from hyperglycosylation → net biological activity higher. Mircera (PEGylated): further reduced receptor affinity + monthly-dosing-compatible.",
  "detectionWindow": "WADA-accredited isoform analysis (IEF + SDS-PAGE Western blot): epoetin-alfa 3-7 days in urine after single bolus; darbepoetin 7-14 days (hyperglycosylation banding pattern distinct from endogenous EPO); Mircera 30+ days (PEG-tag fingerprint). Athlete Biological Passport (ABP): longitudinal Hct + reticulocyte count tracking → flags supraphysiological peaks (even if single-sample analysis is negative).",
  "benefits": [
    "CKD anemia correction (Hb 8 → 10-12 g/dL, dramatic reduction in transfusion need, quality-of-life improvement)",
    "Chemotherapy-induced anemia treatment (Procrit on-label, transfusion sparing)",
    "Anemia of prematurity (transfusion avoidance in neonates)",
    "Peri-operative autologous blood donation support (Jehovah's Witness patient segment)",
    "HIV/AZT anemia correction (zidovudine-induced bone marrow suppression)",
    "Broad clinical trial database (35+ years since Epogen, KDIGO + KDOQI guideline support)"
  ],
  "quickStart": [
    "**Initiation only under medical supervision**. Pre-initiation MANDATORY: ferritin >100 ng/mL + transferrin-sat >20% (iron repletion MANDATORY before EPO initiation, otherwise functional iron deficiency + non-responder)",
    "Epoetin-alfa CKD start: 50-100 IU/kg SC 3x/week, target Hb 10-12 g/dL (NOT higher — CHOIR/TREAT trial CV risk)",
    "Darbepoetin-alfa: 0.45 mcg/kg SC weekly OR 0.75 mcg/kg SC biweekly",
    "Mircera: 0.6 mcg/kg SC monthly (stable chronic patient)",
    "Blood pressure monitor EVERY VISIT (EPO-induced hypertension 20-30% incidence, ACE-inhibitor co-admin often needed)",
    "Bloodwork weekly in the first month (Hb, Hct), then biweekly; ferritin + transferrin-sat quarterly; monthly blood pressure"
  ],
  "expectations": [
    {
      "label": "Days 1-3",
      "body": "Reticulocyte rise measurable (bone marrow response onset). Clinical symptoms not yet noticeable. Iron-status rebound monitor (functional iron deficiency may develop)."
    },
    {
      "label": "Weeks 2-6",
      "body": "Hb rise ~1 g/dL/2-4 weeks (slow-target-titration safer than fast). CKD symptoms (fatigue, dyspnea) improve. Blood pressure rise watchout."
    },
    {
      "label": "Target Hb 10-12 g/dL reached",
      "body": "Maintenance dosing (usually 1/3-1/2 initiation dose) chronic. NOT target a higher Hb value (>12 g/dL CV event risk, CHOIR/CREATE trial)."
    },
    {
      "label": "Long-term chronic",
      "body": "Stable Hb 10-12 g/dL maintenance. Quarterly full panel: Hb, Hct, ferritin, transferrin-sat, iron repletion titration, blood pressure management."
    }
  ],
  "quality": {
    "pure": [
      "Epogen (Amgen) — golden-standard FDA-approved 1989, pharma-grade Rx",
      "Procrit (Janssen) — same molecule as Epogen, brand-name difference",
      "EPREX/Erypo (Janssen EU) — EMA-approved epoetin-alfa",
      "Aranesp (Amgen) — darbepoetin-alfa, weekly/biweekly dosing",
      "Mircera (Roche) — methoxy-PEG-epoetin-beta, monthly dosing",
      "Binocrit (Sandoz), Retacrit (Hospira) — EMA-approved biosimilars",
      "UGL liquid EPO — AVOID, glycosylation pattern critical, cold-chain-broken source → drastic loss of biological activity"
    ],
    "caution": [
      "Hypertension risk significant (20-30% incidence), ACE-inhibitor / ARB co-admin often needed",
      "Thromboembolic risk (DVT, stroke, MI) higher at Hct target >12-13 g/dL",
      "Pure red cell aplasia (PRCA) rare anti-EPO antibody-mediated complication (EPREX 1998-2002 PRCA cluster, formulation change reduced incidence)",
      "Functional iron deficiency: before EPO initiation ferritin >100 ng/mL + transferrin-sat >20% MANDATORY",
      "Chemotherapy-induced anemia: ESA initiation may carry tumor-progression risk for certain solid tumors (FDA black-box warning)"
    ],
    "avoid": [
      "Uncontrolled hypertension (blood pressure stabilization before EPO MANDATORY)",
      "History of EPO-induced pure red cell aplasia (PRCA)",
      "Hb >12 g/dL target — CHOIR/TREAT/CREATE trial evidence shows increased CV event risk",
      "Doping-purpose use — WADA strictly banned, lifetime-ban risk, cardiovascular event risk (Hct >55% → blood viscosity catastrophe)",
      "Active malignancy on curative-intent chemotherapy (ASCO/ASH 2019 guideline: avoid ESA)"
    ]
  },
  "interactions": [
    "Iron repletion MANDATORY co-admin (oral ferrous sulfate 100-200 mg/day OR IV ferric carboxymaltose / ferric gluconate — IV preferred for CKD patients, ferritin >100 + sat >20% target before EPO initiation)",
    "ACE-inhibitor / ARB co-admin often needed for EPO-induced hypertension management (perindopril, ramipril, losartan, valsartan)",
    "Other erythropoietic agents stacking AVOID (don't combine two ESAs)",
    "Heparin / anticoagulant co-admin: dialysis circuit clotting prevention (Hct rise → clotting risk increase)",
    "Chemotherapy (cisplatin, cyclophosphamide): nephrotoxic drugs may raise EPO requirement, dose titration",
    "Other peptides (HGH, IGF-1, BPC-157, Tesamorelin): no direct interaction, BUT in EPO-doping context, stacking → supraphysiological Hct → catastrophic CV risk"
  ],
  "studies": [
    {
      "title": "Effects of recombinant human erythropoietin in normal humans",
      "authors": "Lundby C, Olsen NV.",
      "journal": "J Physiol. 2011;589(Pt 6):1265-71.",
      "pmid": "20807784"
    },
    {
      "title": "Biochemistry, physiology, and complications of blood doping: facts and speculation",
      "authors": "Lippi G, Franchini M, Salvagno GL, Guidi GC.",
      "journal": "Crit Rev Clin Lab Sci. 2006;43(4):349-91.",
      "pmid": "16769597"
    },
    {
      "title": "Results of the European Survey on Anaemia Management 2003 (ESAM 2003): current status of anaemia management in dialysis patients, factors affecting epoetin dosage and changes in anaemia management over the last 5 years",
      "authors": "Jacobs C, Frei D, Perkins AC.",
      "journal": "Nephrol Dial Transplant. 2005;20 Suppl 3:iii3-24.",
      "pmid": "15824128"
    },
    {
      "title": "Correction of anemia with epoetin alfa in chronic kidney disease (CHOIR trial)",
      "authors": "Singh AK, Szczech L, Tang KL, et al.",
      "journal": "N Engl J Med. 2006;355(20):2085-98.",
      "pmid": "17108343"
    }
  ],
  "faq": [
    {
      "q": "Why is EPO so strictly banned by WADA?",
      "a": "EPO is considered the most dramatic performance enhancer in endurance sports: it raises VO2max by 8-12% (Lundby 2007 trial), translating to ~30-second advantage in a 5-minute time trial. WADA categorizes it under S2.1 Erythropoietin-mimetic agents, **BANNED YEAR-ROUND** (in-competition + out-of-competition), in ALL sports. Detection: isoform analysis (IEF + SDS-PAGE) — recombinant EPO shows distinct glycosylation banding pattern vs endogenous; Athlete Biological Passport (ABP) — longitudinal Hct + reticulocyte count tracking flags supraphysiological peaks. Lance Armstrong + the Festina affair (1998 Tour de France) demonstrated EPO doping's historical role. Cardiovascular risk (Hct >55% → blood viscosity catastrophe → thromboembolism, MI, stroke) also justifies the ban."
    },
    {
      "q": "What bloodwork is mandatory before starting EPO?",
      "a": "**MANDATORY before EPO initiation**: (1) Hb + Hct (anemia confirmation + severity), (2) Ferritin >100 ng/mL (iron stores adequate — otherwise functional iron deficiency develops on EPO, non-responder), (3) Transferrin saturation >20% (iron transport adequate), (4) Reticulocyte count (bone marrow response capacity baseline), (5) Blood pressure (uncontrolled hypertension is a contraindication — EPO raises BP in 20-30% of patients), (6) Renal function (eGFR, creatinine — CKD staging), (7) CRP / ESR (inflammation → functional iron deficiency may develop, ESA resistance), (8) B12 + folate (rule out other anemia causes), (9) CBC with differential (rule out myeloproliferative syndromes). **Long-term chronic monitoring**: Hb + Hct weekly on initiation then monthly; ferritin + transferrin-sat quarterly; blood pressure every visit."
    },
    {
      "q": "How significant is the hypertension risk?",
      "a": "Significant. 20-30% of patients on EPO initiation develop new-onset hypertension or worsening of pre-existing hypertension. Mechanism: (1) RBC mass rise → blood viscosity increase → peripheral vascular resistance increase, (2) direct vascular endothelial effect (EPO-R also on endothelium) → vasoconstriction + endothelin-1 rise, (3) partial Na+ retention contribution. Clinical management: pre-EPO baseline blood pressure stabilization (<140/90 mmHg), ACE-inhibitor (perindopril, ramipril) or ARB (losartan, valsartan) co-admin if needed, Hb-target cap 10-12 g/dL (NOT higher — CHOIR/CREATE trial CV-event evidence). Hypertensive crisis (>180/110 mmHg) → stop EPO immediately."
    },
    {
      "q": "Why is the target Hb capped at 12 g/dL (and not higher)?",
      "a": "Three pivotal randomized clinical trials (CHOIR 2006 PMID 17108343, CREATE 2006, TREAT 2009) demonstrated that higher Hb target (13.5-14 g/dL) significantly raises cardiovascular event risk (MI, stroke, death, hospitalization for heart failure) in CKD patients vs the 10.5-11.5 g/dL target. CHOIR (N=1432): high-target arm 17.5% composite CV event vs low-target 13.5% (HR 1.34, p=0.03). TREAT (N=4038, darbepoetin): high-target arm 5% stroke vs placebo 2.6% (HR 1.92). KDIGO 2024 Anemia Guideline therefore **strongly** recommends Hb target 10-12 g/dL (NOT 13+), and ESA dose titration to Hb rise rate (≤1 g/dL/2 weeks). Mechanism hypothesis: supraphysiological Hct → blood viscosity rise → thromboembolic risk; EPO-mediated platelet activation + endothelin-1; iatrogenic hypertension."
    },
    {
      "q": "Epoetin-alfa vs Darbepoetin vs Mircera — which when?",
      "a": "All three are EPO-R agonists with differing pharmacokinetics. **Epoetin-alfa (Epogen/Procrit/EPREX)**: shorter t1/2 (4-13h SC), 3x/week dosing, golden-standard 35+ years of safety data. **Darbepoetin-alfa (Aranesp)**: hyperglycosylated (5 N-glycosylation sites vs native 3), t1/2 70-138h SC, weekly or biweekly dosing → patient convenience advantage, preferred in stable chronic CKD. **Mircera (methoxy-PEG-epoetin-beta)**: PEGylated, t1/2 ~135h SC, **monthly** dosing → maximum patient convenience, standard-of-care in stable chronic dialysis patients. Clinical efficacy nearly identical (NeoRecormon/EPREX/Aranesp/Mircera head-to-head trials non-inferiority). Choice: based on patient compliance + dosing convenience + cost (Mircera pricier but monthly pin → adherence advantage)."
    }
  ],
  "related": [
    "hgh",
    "igf-1-lr3",
    "tesamorelin",
    "mots-c"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 50,
      "medium": 100,
      "high": 150
    },
    "unit": "IU/kg/dose epoetin-alfa SC (clinical CKD anemia protocol)",
    "note": "**Epoetin-alfa CKD**: 50-100 IU/kg SC 3x/week, target Hb 10-12 g/dL. **Darbepoetin-alfa**: 0.45 mcg/kg SC weekly OR 0.75 mcg/kg SC biweekly. **Mircera**: 0.6 mcg/kg SC monthly. **MANDATORY pre-initiation**: ferritin >100 ng/mL + transferrin-sat >20% (iron repletion). **Cap**: Hb rise ≤1 g/dL/2 weeks, target NOT higher than 12 g/dL (CHOIR/TREAT CV evidence). **Doping-purpose use CONTRAINDICATED** — WADA strictly banned, cardiovascular catastrophe risk."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-initiation (before EPO start)",
      "timing": "1-2 weeks before EPO initiation",
      "markers": "Hb, Hct, ferritin (>100 ng/mL target), transferrin saturation (>20% target), reticulocyte count, blood pressure (<140/90 mmHg stabilization), eGFR + creatinine, CRP/ESR (inflammation), B12 + folate, CBC with differential, lipid panel, blood pressure log.",
      "purpose": "Anemia severity baseline + iron status adequate (functional iron deficiency prevention) + hypertension control + rule out other anemia causes."
    },
    "midCycle": {
      "label": "Initiation phase (first 1-3 months)",
      "timing": "Weekly Hb + Hct + blood pressure; every 4 weeks ferritin + transferrin-sat",
      "markers": "Hb (Hb rise ≤1 g/dL/2 weeks target), Hct, blood pressure (every visit, EPO hypertension watch), ferritin + transferrin-sat (iron status rebound), reticulocyte count.",
      "purpose": "Hb rise rate monitor (fast rise → CV event risk), iron status maintenance (EPO depletes iron stores, iron repletion titration), hypertension detection."
    },
    "postCycle": {
      "label": "Maintenance phase (Hb 10-12 g/dL stable target)",
      "timing": "Monthly Hb + Hct + blood pressure; quarterly ferritin + transferrin-sat",
      "markers": "Hb (10-12 g/dL stable), Hct, blood pressure, ferritin (store maintenance), transferrin-sat, eGFR (CKD progression), KDIGO quarterly comprehensive metabolic panel.",
      "purpose": "Long-term EPO dose stable, iron repletion titration, blood pressure management, CKD progression tracking."
    },
    "cruise": {
      "label": "Chronic dialysis patient (long-term Mircera monthly pin)",
      "timing": "Monthly Hb + Hct + blood pressure; quarterly full panel",
      "markers": "Full hematology panel + iron status + KDIGO CKD-MBD panel (Ca, P, PTH, vit-D) + lipid + blood pressure log.",
      "purpose": "Stable dialysis patient long-term ESA management, KDIGO 2024 guideline compliance."
    }
  },
  "anecdote": null
}
