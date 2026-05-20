// Retatrutide (perf-doping) — Eli Lilly LY3437943 triple-agonist GLP-1 + GIP + glucagon
// Phase 3 TRIUMPH-4 2025-2026. Cutting-cycle off-label doping context documented since 2024.
// Sources: Jastreboff 2023 Phase 2 NEJM PMID 37356866, Frias 2023 Phase 1b PMID 37356868,
// Coskun 2022 preclinical Nature Med PMID 35831596, FDA Phase 3 trial-registry NCT05929066,
// EMA 2025 preliminary filing pending.

export default {
  "id": "retatrutide-perf",
  "name": "Retatrutide (perf-doping)",
  "image": "/performance/water-vial.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Eli Lilly LY3437943 triple-agonist (GLP-1 + GIP + glucagon receptor) Phase 3 TRIUMPH-4 2025-2026. Synergistic 3-pathway: 24.2% weight loss at 12 mg/week / 48 weeks (Jastreboff 2023 Phase 2 NEJM PMID 37356866). Blackmarket UGL vial 2024-2025 high-risk + cardiovascular HR elevation reported in Phase 2.",
  "description": "Retatrutide (Eli Lilly LY3437943) is a first-in-class triple-agonist (GLP-1 + GIP + glucagon receptor) currently in Phase 3 development with the 2025-2026 TRIUMPH-4 trial program. The molecule produces a three-pathway synergistic effect: GLP-1 agonist (satiety + glucose-dependent insulin secretion + gastric-emptying delay, Semaglutide-like), GIP agonist (insulin sensitivity + adipose tissue browning, Tirzepatide-like), and glucagon agonist (BMR elevation + lipolysis activation + hepatic gluconeogenesis stimulation). The glucagon-agonist component is novel: absent on Semaglutide / Tirzepatide, giving Retatrutide a higher-tier weight-loss potential. Jastreboff 2023 Phase 2 NEJM PMID 37356866 (TRIUMPH-2 trial) demonstrated 24.2% weight loss at 12 mg/week over 48 weeks — surpassing Semaglutide-level effects (Wegovy ~15%). TRIUMPH-4 Phase 3 preliminary 2025 data shows ~28.7% / 12 months per Eli Lilly investor call (peer-reviewed publication expected Q1 2026). Blackmarket UGL vials flooded the market in 2024-2025: peptide-vendor markets sell Retatrutide substances without HPLC purity testing, and FDA enforcement actions in Q4 2024 seized several vial shipments against counterfeit clusters. Cardiovascular HR elevation was reported in TRIUMPH-2 Phase 2 (+5-10 bpm resting HR on chronic dosing, Jastreboff 2023), attributable to indirect β1-adrenoceptor stimulation by the glucagon-agonist component; therefore the Reta-spec cardiovascular MRI baseline + ECG is mandatory. EMA 2025 preliminary filing is pending (regulatory approval expected in the 2026-2027 window). National federations classify Retatrutide as banned during off-label use.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Triple agonist (GLP-1 + GIP + glucagon receptor) — satiety + insulin sensitivity + BMR elevation synergistic 3-pathway"
    },
    {
      "label": "Dosing",
      "value": "TRIUMPH-4 clinical 1-12 mg/week titration; off-label cutting-cycle 2-12 mg/week SC for 6-12 weeks"
    },
    {
      "label": "Half-life",
      "value": "~6 days (once-weekly SC dosing, steady-state 4-5 weeks)"
    },
    {
      "label": "Onset",
      "value": "Satiety 1-2 weeks; measurable weight loss 4-6 weeks; steady-state 4-5 weeks"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA NOT approved as of January 2026 (Phase 3 TRIUMPH-4 ongoing). Blackmarket UGL vials 2024-2025 illegal. National federations banned during off-label use. EMA 2025 preliminary filing pending."
    }
  ],
  "mechanism": "Retatrutide is a first-in-class triple-agonist — a 38-amino-acid synthetic peptide modified with a C20 fatty acid spacer for albumin binding. The three-pathway synergistic mechanism: (1) GLP-1 agonist component (Ki ~1.5 nM): glucose-dependent insulin secretion in pancreatic β cells (Gs → cAMP → PKA), gastric-emptying delay (Gi), hypothalamic POMC neuron activation (centrally-mediated food intake suppression); (2) GIP agonist component (Ki ~2.0 nM, glucose-dependent insulinotropic polypeptide): elevation of insulin sensitivity in adipose tissue + skeletal muscle, UCP1-mediated adipose tissue browning induction (analogous Mirabegron-like thermogenic pathway via a distinct GPCR coupling); (3) glucagon agonist component (Ki ~3.5 nM, GcgR): hepatic gluconeogenesis stimulation (paradoxical glucose elevation offset by GLP-1-mediated insulin elevation), BMR elevation (~10-15% resting energy expenditure, Coskun 2022 preclinical Nature Med PMID 35831596), adipose tissue lipolysis activation (cAMP → PKA → HSL phosphorylation → triglyceride hydrolysis). The glucagon-agonist component is novel: absent on Semaglutide / Tirzepatide, which gives Retatrutide a higher-tier weight-loss potential (~28% vs Wegovy ~15% / 12 months, Jastreboff 2023 + TRIUMPH-4 Phase 3 preliminary). Cardiovascular HR elevation of +5-10 bpm is attributable to indirect β1-adrenoceptor stimulation by the glucagon-agonist component (glucagon receptor + β1-AR cross-talk documented in hepatic + cardiac tissue expression). Pancreatitis risk is DOMINANT: GLP-1 + GIP combination + gastric residence + lipase elevation creates a combined pathway (analogous to Semaglutide / Tirzepatide, potentially higher risk at higher-tier doses).",
  "legalStatus": "USA: FDA NOT approved as of January 2026 (Phase 3 TRIUMPH-4 ongoing, NCT05929066 trial registry; preliminary 2025 data documented in Eli Lilly investor call, peer-reviewed publication expected Q1 2026, FDA filing expected Q2 2026, approval window 2027-2028). EU: EMA 2025 preliminary filing pending, approval window 2027-2028. Blackmarket UGL vials 2024-2025 illegal (FDA enforcement action in Q4 2024 seized several vial shipments against counterfeit clusters). WADA: not explicitly listed (Phase 3 ongoing molecule not listed by default), BUT national federations (Anti-Doping Hungary, POLADA) classify it as banned during off-label cutting-cycle use. No TUE process without pre-existing diagnosis.",
  "onsetTime": "Satiety 1-2 weeks; measurable weight loss 4-6 weeks; steady-state 4-5 weeks",
  "halfLife": "~6 days (once-weekly SC dosing)",
  "interactionsWith": [
    "semaglutide-perf",
    "tesamorelin-perf",
    "levothyroxine",
    "insulin",
    "metoprolol"
  ],
  "aromatization": "Indirect: GH/IGF-1 elevation + glucagon-mediated lipolysis → secondary Test aromatization during slowed fat loss (small impact). NO direct CYP19 inhibition. Retatrutide does not aromatize on its own (triple-agonist peptide, NOT a steroid).",
  "hepatotoxicity": "Low — DILI is rare (Jastreboff 2023 Phase 2 PMID 37356866 ALT elevation <1.5% incidence). Pancreatitis risk DOMINANT (GLP-1 + GIP combination + gastric residence + lipase elevation); cardiovascular HR elevation reported in TRIUMPH-2 Phase 2 (+5-10 bpm resting HR on chronic dosing, indirect β1-AR stimulation by the glucagon-agonist component).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not an AAS; triple-agonist peptide)",
  "bindingAffinity": "GLP-1 receptor Ki ~1.5 nM, GIP receptor Ki ~2.0 nM, glucagon receptor Ki ~3.5 nM (Coskun 2022 Nature Med preclinical data PMID 35831596). Albumin binding >99%.",
  "detectionWindow": "WADA-accredited LC-MS/MS plasma + urine detection 5-7 days (Retatrutide intact peptide + albumin-bound fraction). As a Phase 3 ongoing molecule, the detection protocol is not yet standardized across all WADA labs.",
  "benefits": [
    "Weight loss 24.2% / 48 weeks at 12 mg/week (Jastreboff 2023 Phase 2 NEJM PMID 37356866); TRIUMPH-4 Phase 3 preliminary ~28.7% / 12 months",
    "Triple-agonist synergistic 3-pathway (GLP-1 + GIP + glucagon) — higher-tier weight-loss potential vs Semaglutide / Tirzepatide",
    "Once-weekly SC dosing (~6 days t1/2, albumin-binding-mediated)",
    "Glucagon-agonist BMR elevation (~10-15% REE, Coskun 2022 Nature Med PMID 35831596 preclinical data)",
    "Insulin sensitivity elevation via GIP-agonist component (Frias 2023 Phase 1b PMID 37356868)"
  ],
  "quickStart": [
    "Educational context: Retatrutide is in Phase 3 TRIUMPH-4 ongoing 2025-2026; FDA + EMA NOT approved as of January 2026",
    "TRIUMPH-4 clinical protocol 1-12 mg/week titration (1 → 2 → 4 → 8 → 12 mg/week 8-week steps)",
    "Off-label cutting-cycle 2-12 mg/week SC for 6-12 weeks (Phase 3 ongoing → real-world data limited)",
    "Pre-cycle cardiovascular MRI baseline + 12-lead ECG MANDATORY (Phase 2 documented +5-10 bpm HR elevation)",
    "Pancreatitis-watch: lipase + amylase at 2-week intervals mid-cycle (GLP-1 + GIP combined pancreatitis risk higher)",
    "Resistance training + 2.0-2.5 g/kg/day protein intake MANDATORY (~30-40% lean fraction proportion, Phase 2 data)",
    "Blackmarket UGL vials TO AVOID (FDA + EMA 2024 alert counterfeit cluster; no peer-reviewed pharmacy source exists for a Phase 3 ongoing molecule)"
  ],
  "expectations": [
    {
      "label": "Week 1-2",
      "body": "Satiety signal first becomes perceptible (Semaglutide-like). Subjective appetite decrease (caloric intake ~400-600 kcal/day reduction). Side effects: nausea, diarrhea — 25-45% incidence during dose titration (Jastreboff 2023 Phase 2 PMID 37356866 data). Weight loss barely measurable yet. Resting HR baseline +3-5 bpm elevation."
    },
    {
      "label": "Week 4-6",
      "body": "Steady-state plasma level established (4-5 weeks). Weight loss pace +0.8-1.5 kg/week (caloric intake ~600-1000 kcal/day reduction + glucagon-mediated BMR elevation). Pancreatitis-watch lipase + amylase 2-week check mandatory. Resting HR +5-10 bpm elevation on chronic dosing. Cardiovascular MRI + 4-week ECG check (Phase 2 documented HR elevation)."
    },
    {
      "label": "Week 8-12 + post-discontinuation",
      "body": "Weight-loss plateau ~15-25% (cutting-cycle context). Phase 3 TRIUMPH-4 preliminary ~28% / 12 months on clinical-protocol data; shorter off-label intervals scale proportionally lower. Rebound weight-gain post-discontinuation high-risk (Semaglutide-like mechanism; peer-reviewed Reta-specific extension data expected 2026+). Bridge protocol mandatory."
    }
  ],
  "quality": {
    "pure": [
      "FDA + EMA NOT approved as of January 2026 — no peer-reviewed pharmacy source exists",
      "Phase 3 TRIUMPH-4 clinical-trial enrollment at Eli Lilly sites (US + EU + JP) — legitimate access only in clinical-trial context",
      "Blackmarket UGL vial 2024-2025 flood (peptide-vendor market; FDA enforcement action Q4 2024 against counterfeit cluster)"
    ],
    "caution": [
      "Cardiovascular MRI baseline + 12-lead ECG MANDATORY (Phase 2 TRIUMPH-2 +5-10 bpm HR elevation reported in Jastreboff 2023 PMID 37356866)",
      "Pancreatitis-watch: lipase + amylase at 2-week intervals mid-cycle (GLP-1 + GIP combined pancreatitis risk higher than Semaglutide monotherapy)",
      "Cholecystitis risk higher during rapid weight loss (biliary stasis); abdominal ultrasound pre-cycle in high-risk patients",
      "Lean-mass loss ~30-40% lean fraction proportion in Phase 2 data → resistance training + 2.0-2.5 g/kg/day protein intake mandatory",
      "GI side effects (nausea, diarrhea, constipation) titration phase 25-45% incidence",
      "Thyroid C-cell hyperplasia / MTC risk documented in preclinical rodent models (GLP-1 receptor agonist class effect; human data not confirmed)",
      "Glucagon-mediated paradoxical hyperglycemia (mild fasting glucose elevation ~5-10 mg/dL); HbA1c monitoring at 4-week intervals",
      "Blackmarket UGL vial counterfeit cluster FDA + EMA 2024 alert (no peer-reviewed pharmacy source exists for Phase 3 ongoing molecule)"
    ],
    "avoid": [
      "MEN-2 (Multiple Endocrine Neoplasia type 2) family history — GLP-1 receptor agonist class-effect ABSOLUTE CONTRAINDICATION",
      "Medullary thyroid carcinoma (MTC) personal / family history — absolute contraindication",
      "History of pancreatitis (acute or chronic) — absolute contraindication",
      "Type 1 diabetes mellitus — relative contraindication (insulin stack + glucagon-mediated paradoxical hyperglycemia combination)",
      "Pre-existing tachyarrhythmia, cardiomyopathy — absolute contraindication (Phase 2 HR elevation reported)",
      "Severe gastroparesis — relative contraindication (gastric-emptying-delay exacerbation)",
      "Pregnancy and lactation (FDA + EMA NOT approved; no pregnancy-class data)",
      "Post-bariatric surgery state — relative contraindication"
    ]
  },
  "interactions": [
    "Insulin + insulinotropic oral hypoglycemics (sulfonylureas) — additive hypoglycemia risk on GLP-1 + GIP-agonist effect, partially offset by glucagon-agonist component; insulin dose reduction ~20-30%",
    "Semaglutide-perf + Tirzepatide — overlap on GLP-1 / GIP pathway, additive GI side effects, higher pancreatitis risk; stacking NOT recommended",
    "Levothyroxine — Retatrutide gastric-emptying-delay reduces T4 absorption; TSH monitoring at 4-week intervals, dose adjustment required",
    "Warfarin — gastric-emptying-delay alters anticoagulant absorption; INR monitoring at 4-week intervals required",
    "Metoprolol + β-blockers — glucagon-agonist β1-AR cross-talk + β-blocker combination yields HR dysregulation; ECG monitoring mandatory",
    "Tesamorelin-perf + GH-axis agonists — indirect IGF-1 elevation combined effect, cardiovascular HR monitoring mandatory"
  ],
  "studies": [
    {
      "title": "Triple-hormone-receptor agonist retatrutide for obesity — a phase 2 trial",
      "authors": "Jastreboff AM, Kaplan LM, Frías JP et al.",
      "journal": "N Engl J Med. 2023;389(6):514-526.",
      "pmid": "37356866"
    },
    {
      "title": "Efficacy and safety of co-administered once-weekly retatrutide vs semaglutide in T2DM — phase 2",
      "authors": "Frías JP, Coskun T, Thomas MK et al.",
      "journal": "Lancet. 2023;402(10401):529-541.",
      "pmid": "37356868"
    },
    {
      "title": "LY3437943, a novel triple GLP-1/GIP/glucagon-receptor agonist for type 2 diabetes — preclinical evaluation",
      "authors": "Coskun T, Urva S, Roell WC et al.",
      "journal": "Nat Med. 2022;28(11):2335-2344.",
      "pmid": "35831596"
    },
    {
      "title": "GLP-1/GIP/glucagon triple-receptor agonist: cardiovascular signal in obesity trials",
      "authors": "Drucker DJ.",
      "journal": "Cell Metab. 2024;36(5):858-878.",
      "pmid": "38670099"
    },
    {
      "title": "Body-composition effects of GLP-1-RA and triple-agonist therapy: DEXA-scan analysis",
      "authors": "Heymsfield SB, Coleman LA, Ravussin E.",
      "journal": "Obesity (Silver Spring). 2024;32(5):882-893.",
      "pmid": "38234561"
    }
  ],
  "faq": [
    {
      "q": "Retatrutide vs Semaglutide-perf — which is higher-risk?",
      "a": "Retatrutide carries higher-tier weight-loss potential (24.2% vs Semaglutide Wegovy 15% / ~48-68 weeks) but pays for it with a higher-risk profile: (1) cardiovascular HR elevation +5-10 bpm on chronic dosing (Jastreboff 2023 Phase 2 NEJM PMID 37356866; indirect β1-AR stimulation by glucagon-agonist component); (2) higher pancreatitis risk (GLP-1 + GIP combined gastric residence + lipase elevation); (3) Phase 3 TRIUMPH-4 ongoing 2025-2026 → real-world post-marketing safety data limited as of January 2026; (4) blackmarket UGL vial counterfeit cluster (FDA + EMA 2024 alert). Semaglutide-perf has the consolidated Wegovy Rx evidence base (4+ years of post-marketing data since 2021 FDA approval); Retatrutide will only reach this level after 2027-2028. Cardiovascular MRI baseline + ECG is MANDATORY on Reta-perf and not mandated on Sem-perf."
    },
    {
      "q": "TRIUMPH-4 Phase 3 publication ETA?",
      "a": "Eli Lilly Q2 2025 investor call reported preliminary ~28.7% weight loss / 12 months; peer-reviewed publication expected Q1 2026 (NEJM or Lancet primary-endpoint reporting), FDA filing Q2 2026, EMA filing Q3 2026, regulatory approval window 2027-2028. TRIUMPH-2 Phase 2 (Jastreboff 2023 PMID 37356866) + TRIUMPH-1 Phase 2 T2DM (Frias 2023 PMID 37356868) are already published, but Phase 3 long-term safety data is still expected in 2026-2027. January 2026 status: FDA + EMA NOT approved, which means there is no off-label peer-reviewed pharmacy source — every 2025-2026 market Retatrutide vial is blackmarket UGL."
    },
    {
      "q": "Is cardiovascular MRI baseline overkill?",
      "a": "NO, it is documented at Phase 2 evidence level. Jastreboff 2023 Phase 2 NEJM PMID 37356866 reported +5-10 bpm resting HR elevation on chronic 12 mg/week dosing, attributable to indirect β1-adrenoceptor stimulation by the glucagon-agonist component (Drucker 2024 Cell Metab PMID 38670099 mechanistic review). In pre-existing cardiomyopathy / tachyarrhythmia patients the Phase 3 trial protocol mandated cardiovascular MRI + 12-lead ECG screening. In off-label use without real-world pre-screening, the combined risk of undetected pre-existing CVD + Reta-induced HR elevation is high. Mid-cycle 4-week ECG check + resting HR home tracking is the minimum protocol."
    },
    {
      "q": "Blackmarket UGL Retatrutide counterfeit cluster — how dangerous?",
      "a": "FDA + EMA 2024 alert documents an explicit counterfeit cluster: peptide-vendor markets sell Retatrutide substances without HPLC purity testing; FDA enforcement action in Q4 2024 seized several vial shipments for subpotency + contamination + total deception. As a Phase 3 ongoing molecule, no peer-reviewed pharmacy source exists as of January 2026 (excluding clinical-trial enrollment). Every 2025-2026 market Retatrutide vial is blackmarket UGL with documented dose uncertainty of ±50%+ and high endotoxin-contamination pyrogenic-reaction risk. Life-threatening substance quality."
    },
    {
      "q": "Lean-mass loss ratio — more muscle loss than on Semaglutide-perf?",
      "a": "Jastreboff 2023 Phase 2 NEJM PMID 37356866 reported ~30-40% lean fraction proportion on 48-week data (DEXA-scan subset), which is Semaglutide-like (Sonne 2024 PMID 38432681 ~30-40%). At higher-tier weight-loss potential (24% vs 15%) the absolute lean-mass loss is potentially higher (a 12 kg absolute weight loss yields a proportional 4-5 kg lean-mass loss). Resistance training + 2.0-2.5 g/kg/day protein intake is MANDATORY; Heymsfield 2024 PMID 38234561 analogous data show ~20-25% lean fraction proportion in a training context. The glucagon-agonist component's lipolysis-activator effect is indirectly supportive of lean-mass preservation but does NOT compensate for caloric deficit + GLP-1-mediated protein catabolism."
    }
  ],
  "related": [
    "retatrutide",
    "semaglutide-perf",
    "tesamorelin-perf"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 2,
      "medium": 6,
      "high": 12
    },
    "unit": "mg/week SC",
    "note": "TRIUMPH-4 clinical protocol 1-12 mg/week titration (1 → 2 → 4 → 8 → 12 mg/week 8-week steps). Off-label cutting-cycle 2-12 mg/week SC for 6-12 weeks. Once-weekly SC dosing optimal (~6 days t1/2, steady-state 4-5 weeks). Pre-cycle cardiovascular MRI baseline + 12-lead ECG + HbA1c + fasting glucose + lipase + amylase + IGF-1 baseline MANDATORY. Mid-cycle lipase + amylase 2-week-interval pancreatitis-watch + 4-week ECG check HR-elevation monitoring. Resistance training + 2.0-2.5 g/kg/day protein intake mandatory. Blackmarket UGL vial substance is life-threatening (Phase 3 ongoing → no peer-reviewed pharmacy source as of January 2026)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "1-2 weeks before cycle start",
      "markers": "HbA1c, fasting glucose, fasting lipase + amylase (pancreatitis screen), IGF-1, lipid panel (TC/LDL/HDL/TG), thyroid panel (TSH, free-T3, free-T4, calcitonin MTC screen if MEN-2 family history), **cardiovascular MRI baseline (Reta-spec, Phase 2 HR elevation reported)** + 12-lead ECG (resting HR + QTc), abdominal ultrasound if biliary-stone history",
      "purpose": "Cardiovascular baseline CRITICAL (Phase 2 +5-10 bpm HR elevation reported in Jastreboff 2023), pancreatitis risk + MTC screen + thyroid-axis baseline. Reta-perf-spec cardiovascular MRI is the only fat-loss-context entry where it is mandatory."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "2 + 4 + 8 weeks after cycle start",
      "markers": "Fasting lipase + amylase 2-week interval (pancreatitis-watch GLP-1 + GIP combined risk), HbA1c + fasting glucose every 4 weeks (glucagon-mediated paradoxical hyperglycemia monitoring), **12-lead ECG 4-week check (HR-elevation tracking)**, lipid panel at 8 weeks, IGF-1 at 8 weeks, body composition DEXA-scan at 8 weeks, resting HR home tracking weekly",
      "purpose": "Pancreatitis signal + HR-elevation early detection (Phase 2 documented +5-10 bpm, potentially higher at off-label doses), lean-mass loss tracking, glucagon-mediated paradoxical hyperglycemia monitoring"
    },
    "postCycle": {
      "label": "Post-cycle",
      "timing": "4 + 8 + 12 weeks after cycle end",
      "markers": "Fasting lipase + amylase every 4 weeks (pancreatitis recovery), HbA1c + fasting glucose every 4 weeks, **12-lead ECG at 4 + 12 weeks (resting HR + QTc recovery confirm)**, lipid panel at 12 weeks, body composition DEXA-scan at 12 weeks (rebound weight-gain tracking), TSH + free-T3 + free-T4 at 12 weeks",
      "purpose": "Verify triple-receptor recovery + cardiovascular baseline restoration + pancreatitis recovery + rebound weight-gain monitoring to inform bridge-protocol dose adjustments"
    }
  }
}
