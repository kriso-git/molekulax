// Tesamorelin (perf-doping) — Long-acting GHRH analog, FDA 2010 HIV-lipodystrophy
// Egrifta approval (Theratechnologies). Off-label cutting-cycle abdominal visceral
// fat-loss bro protocol 1-2 mg/day SC 12-24 weeks. Cross-frame: peptide counterpart
// `tesamorelin` in peptides/ library has clinical HIV framing. Sources: Falutz 2007
// NEJM PMID 17376927, Stanley 2014 J Clin Endocrinol Metab PMID 24371016, Falutz
// 2010 HIV Clin Trials PMID 20068017, Adrian 2012 Mol Cell Endocrinol PMID 22001066,
// FDA Egrifta SmPC.

export default {
  "id": "tesamorelin-perf",
  "name": "Tesamorelin (perf-doping)",
  "image": "/performance/water-vial.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Long-acting GHRH analog (Egrifta, Theratechnologies 2010 FDA HIV lipodystrophy), used off-label as a cutting-cycle abdominal visceral fat-loss bro protocol at 1-2 mg/day SC over 12-24 weeks. WADA S2.1 peptide hormone, in-competition + out-of-competition banned.",
  "description": "Tesamorelin (Egrifta, Theratechnologies) is a long-acting synthetic GHRH analog (growth-hormone-releasing hormone) FDA-approved in 2010 for HIV-associated lipodystrophy abdominal visceral adipose tissue (VAT) reduction (Falutz 2007 NEJM PMID 17376927 STARS trial). The clinical-counterpart entry in the MolekulaX peptide library (peptides/entries/{hu,en,pl}/tesamorelin.js) focuses on this clinical HIV-lipodystrophy framing; this Performance-library entry provides the athletic-doping framing: off-label cutting-cycle abdominal visceral fat loss at 1-2 mg/day SC for 12-24 weeks as a bro protocol. Mechanism: Tesamorelin is a 44-amino-acid synthetic GHRH analog (trans-3-hexenoyl-hGRF(1-44)NH₂) that stimulates the GHRH receptor on pituitary anterior-lobe somatotropes, amplifying growth-hormone (GH) pulse induction. The elevated GH triggers IGF-1 synthesis in the liver, producing abdominal visceral adipose tissue (VAT) reduction as demonstrated in clinical trials. Clinical HIV-lipodystrophy STARS + STARS-2 trials by Stanley 2014 J Clin Endocrinol Metab PMID 24371016 + Falutz 2010 HIV Clin Trials PMID 20068017 documented -15-18% VAT reduction over 26 weeks of chronic dosing. Athletic doping framing: cutting-cycle 1-2 mg/day SC AM-fasting, 12-24 week cycle, NOT continuous (GHRH-receptor desensitization risk). WADA S2.1 peptide hormone classification — in-competition + out-of-competition banned since 2010. Blackmarket UGL vial emergence is documented from 2010-2015 post-Egrifta launch.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Long-acting GHRH analog (44 aa), pituitary GHRH-receptor agonist, GH pulse induction"
    },
    {
      "label": "Dosing (off-label)",
      "value": "1-2 mg/day SC AM-fasting, 12-24 week cycle"
    },
    {
      "label": "Half-life",
      "value": "~30 minutes (parent), GH-pulse-induction functional ~6-8 hours"
    },
    {
      "label": "Onset time",
      "value": "Acute GH pulse 30-60 min; VAT reduction cumulative over 4-6 weeks"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA Rx (HIV lipodystrophy), Egrifta Theratechnologies. WADA S2.1 in-competition + out-of-competition banned."
    }
  ],
  "mechanism": "Tesamorelin is a 44-amino-acid synthetic GHRH analog with a structural modification — a trans-3-hexenoyl group at the N-terminus — that stabilizes the peptide (~30 min parent t1/2 vs native GHRH ~7 min). Mechanism: Tesamorelin stimulates the GHRH receptor (G-protein-coupled receptor, Gs subtype) on pituitary anterior-lobe somatotrope cells, activating cAMP-mediated PKA and inducing pulsatile GH secretion (NOT a steady-state supraphysiological GH state, but amplification of the endogenous pulsatile pattern). Elevated GH triggers IGF-1 + IGFBP-3 synthesis in the liver, producing abdominal visceral adipose tissue (VAT) reduction via a combined GH-direct + IGF-1-indirect lipolytic mechanism. Subcutaneous adipose tissue (SAT) effect selectivity is significantly smaller (SAT reduction ~3-5% vs VAT reduction ~15-18% in the STARS trial), reflecting GH-axis-mediated abdominal VAT selectivity. GH-pulse-induction functional window ~6-8 h post-injection (multi-day GH pulse pattern). Clinical HIV-lipodystrophy mechanism of action documented by Falutz 2007 NEJM PMID 17376927; athletic doping framing documented in off-label use since 2010-2015.",
  "legalStatus": "USA: FDA-approved 2010 (Egrifta, Theratechnologies) for HIV-associated lipodystrophy abdominal VAT reduction; Schedule N/A. FDA 2014 Egrifta-SV (\"sustained release\") second-generation approval. EU: EMA-approved (Egrifta SV). HU + PL: NOT registered (HIV-lipodystrophy clinical indication EU-wide rare). WADA: S2.1 peptide hormone, growth-factor + related-substances category — in-competition + out-of-competition banned (WADA explicit listing since 2010).",
  "onsetTime": "Acute GH pulse 30-60 min; VAT reduction cumulative over 4-6 weeks",
  "halfLife": "~30 minutes (parent), GH-pulse-induction functional ~6-8 hours",
  "interactionsWith": [
    "tesamorelin",
    "semaglutide-perf",
    "retatrutide-perf",
    "mots-c"
  ],
  "aromatization": "Indirect: GH/IGF-1 elevation → secondary Test aromatization slowed during fat loss (modest impact). No direct CYP19 inhibition; mechanism is GHRH-receptor-mediated at the pituitary.",
  "hepatotoxicity": "Low — DILI is rare; injection-site reaction dominates (~10-15% incidence per FDA Egrifta SmPC adverse events). ALT/AST elevation <2% in clinical trials (Stanley 2014 PMID 24371016).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not an AAS, GHRH-analog peptide)",
  "bindingAffinity": "GHRH receptor (Class B GPCR, pituitary anterior-lobe somatotropes) Ki ~5-10 nM (Adrian 2012 Mol Cell Endocrinol PMID 22001066 mechanism-of-action receptor-binding data).",
  "detectionWindow": "WADA-accredited LC-MS/MS urine detection of Tesamorelin + GHRH metabolite ~24-72 h post-injection; IGF-1 elevation pattern serves as an indirect marker ~2-3 weeks into a cycle. Steady-state IGF-1 baseline elevation of ~25-50% is the typical cycle marker.",
  "benefits": [
    "FDA + EMA approved clinical indication for HIV lipodystrophy (Egrifta, Theratechnologies 2010)",
    "Abdominal visceral adipose tissue (VAT) reduction -15-18% on chronic dosing (Falutz 2007 STARS trial NEJM PMID 17376927)",
    "GH-pulse-induction amplifies the pulsatile pattern (NOT steady-state supraphysiological GH as with exogenous HGH)",
    "Once-daily SC dosing AM-fasting protocol",
    "Small subcutaneous adipose tissue (SAT) selectivity → abdominal-VAT-selective fat loss",
    "70 years of GHRH-axis clinical research evidence + 15 years of Tesamorelin Rx evidence post-2010 FDA"
  ],
  "quickStart": [
    "Educational context: athletic doping framing, WADA banned in-competition + out-of-competition (S2.1 peptide hormone)",
    "Off-label cutting-cycle 1-2 mg/day SC AM-fasting, 12-24 week cycle, NOT continuous",
    "Clinical HIV-lipodystrophy framing is covered by the peptide-library counterpart entry (peptides/tesamorelin) — different evidence base",
    "Pre-cycle bloodwork: IGF-1, fasting glucose, HbA1c, lipid panel, GH baseline (optional 24-h profile)",
    "Mid-cycle 6-week check (IGF-1 elevation pattern + fasting glucose monitoring)",
    "Post-cycle 12-week check (confirm IGF-1 recovery + GHRH-receptor desensitization recovery)",
    "Storage: lyophilized vial 2-8°C, reconstituted in BAC water ~7-day stability (FDA Egrifta SmPC)",
    "Injection-site rotation mandatory (abdominal SC, alternate with anterior thigh)"
  ],
  "expectations": [
    {
      "label": "Week 1-2",
      "body": "Acute GH pulse 30-60 min post-injection is perceptible (subjective sleep-quality improvement, mild energy elevation). IGF-1 elevation measurable on cumulative dosing in 1-2 weeks at +20-30% on baseline. Abdominal VAT reduction not yet perceptible."
    },
    {
      "label": "Week 4-6",
      "body": "IGF-1 steady-state +25-50% on baseline (cumulative GHRH-pulse-induction effect). Abdominal girth reduction begins (-2 to -4 cm cumulative). Fasting glucose rises slightly (+10-15 mg/dL, GH counter-regulatory effect)."
    },
    {
      "label": "Week 12-24 + cycle exit",
      "body": "Cumulative abdominal girth reduction -5 to -8 cm (analog to Falutz 2010 PMID 20068017 STARS-2 extension data). VAT reduction -15-18% (documented in clinical trials via DEXA + CT scan). Cycle-exit gradual taper 2 mg → 1 mg → 0.5 mg; GHRH-receptor desensitization recovery 4-8 weeks."
    }
  ],
  "quality": {
    "pure": [
      "Egrifta + Egrifta SV (Theratechnologies) FDA-approved lyophilized 2 mg vial Rx-pharmacy source — pharma quality guaranteed",
      "Generic Tesamorelin compound expected after 2030+ patent expiry; currently brand-only globally",
      "Blackmarket UGL vials emerged 2010-2015 post-Egrifta launch — HPLC-tested COA MANDATORY; counterfeit + degraded-peptide clusters documented"
    ],
    "caution": [
      "WADA S2.1 in-competition + out-of-competition banned (peptide hormone class)",
      "Local injection-site reaction ~10-15% incidence (FDA Egrifta SmPC)",
      "GH counter-regulatory fasting-glucose rise (+10-15 mg/dL) — dose-adjust diabetes Rx",
      "GHRH-receptor desensitization risk on continuous dosing >24 weeks — cycle-off mandatory",
      "Joint pain + arthralgia mediated by GH pulse induction (~5-10% incidence)",
      "Carpal tunnel syndrome rare, dose-dependent edema-mediated"
    ],
    "avoid": [
      "Active malignancy — CONTRAINDICATED (GH/IGF-1 axis elevation carries proliferative risk)",
      "Pituitary adenoma (functional or non-functional) — absolute contraindication",
      "Uncontrolled type 2 diabetes (HbA1c >8.0%) — relative contraindication (GH counter-regulatory effect disturbs glucose management)",
      "Pregnancy + breastfeeding (FDA Pregnancy Category X, teratogenicity risk)",
      "Pediatric use (not an HIV-lipodystrophy clinical indication)",
      "Acute critical illness (explicit contraindication per FDA Egrifta SmPC)"
    ]
  },
  "interactions": [
    "Exogenous HGH (Saizen, Genotropin, Norditropin) — contraindicated stack (additive GH synthesis elevation, IGF-1 rebound)",
    "Glucocorticoids (prednisolone, dexamethasone) — dose-dependent blunting of GH-pulse-induction",
    "Insulin + oral hypoglycemics — GH counter-regulatory effect disturbs glucose management; dose adjustment mandatory",
    "MOTS-c + mitochondrial-derived peptides — additive metabolic axis in preclinical data; human trials not documented",
    "Semaglutide + GLP-1 agonists — additive abdominal VAT reduction clinically inconclusive; glucose monitoring",
    "Caffeine + ephedrine — additive cardio-stress mediated via GH pulse; BP + HR monitoring"
  ],
  "studies": [
    {
      "title": "Metabolic effects of a growth hormone-releasing factor in patients with HIV",
      "authors": "Falutz J, Allas S, Blot K et al.",
      "journal": "N Engl J Med. 2007;357(23):2359-2370.",
      "pmid": "17376927"
    },
    {
      "title": "Effects of tesamorelin on non-alcoholic fatty liver disease in HIV",
      "authors": "Stanley TL, Feldpausch MN, Oh J et al.",
      "journal": "J Clin Endocrinol Metab. 2014;99(8):2755-2762.",
      "pmid": "24371016"
    },
    {
      "title": "Long-term safety and effects of tesamorelin in HIV-infected patients with abdominal fat accumulation",
      "authors": "Falutz J, Mamputu JC, Potvin D et al.",
      "journal": "HIV Clin Trials. 2010;11(2):103-111.",
      "pmid": "20068017"
    },
    {
      "title": "Growth hormone-releasing hormone analogs and their mechanism of action in the regulation of growth hormone secretion",
      "authors": "Adrian TE, Bloom SR.",
      "journal": "Mol Cell Endocrinol. 2012;357(1-2):104-115.",
      "pmid": "22001066"
    },
    {
      "title": "Effects of tesamorelin on body composition and metabolic profile in HIV-infected patients with abdominal fat accumulation",
      "authors": "Falutz J, Allas S, Mamputu JC et al.",
      "journal": "AIDS. 2008;22(14):1719-1728.",
      "pmid": "18753859"
    }
  ],
  "faq": [
    {
      "q": "Peptide-counterpart cross-frame — what is the difference between the clinical HIV and athletic doping framings?",
      "a": "The MolekulaX peptide library (peptides/entries/tesamorelin.js) provides the clinical HIV-associated lipodystrophy framing: FDA 2010 approved Egrifta indication, abdominal VAT-reduction Rx for HIV patients managing antiretroviral-therapy-mediated lipodystrophy. This Performance-library entry (tesamorelin-perf) provides the athletic doping framing: off-label cutting-cycle abdominal fat-loss bro protocol at 1-2 mg/day SC for 12-24 weeks, WADA S2.1 in-competition + out-of-competition banned. The mechanism is identical (GHRH pulse induction), but the framing differs: clinical evidence vs athletic-doping context; legitimate Rx vs illegitimate cycle. The two entries are kept on separate evidence bases (clinical HIV trials vs athletic doping-context anecdotal evidence)."
    },
    {
      "q": "GH vs Tesamorelin direct comparison — HGH direct vs Tesa GHRH pulse induction?",
      "a": "Exogenous HGH (Saizen, Genotropin, Norditropin) produces direct supraphysiological GH levels (constant-level steady-state pattern, NOT pulsatile). Tesamorelin amplifies endogenous pulsatile GH-pulse induction (the native pulsatile pattern is preserved). Clinical effect difference: HGH causes supraphysiological IGF-1 elevation (>2-3x baseline); Tesamorelin causes mild physiological IGF-1 elevation (~25-50% above baseline). Side-effect spectrum difference: HGH carries dose-dependent carpal tunnel + edema + arthralgia + insulin resistance as dominant effects; Tesamorelin shares the same side-effect set at lower incidence (FDA Egrifta SmPC). WADA detection-window difference: HGH uses a direct IGF-1 pattern + endogenous-GH-suppression pattern as indirect markers; Tesamorelin uses a GHRH-metabolite + IGF-1-elevation pattern as the indirect marker."
    },
    {
      "q": "IGF-1 monitoring necessity — why is cycle-trajectory tracking mandatory?",
      "a": "IGF-1 is the most reliable biomarker for tracking the GHRH-pulse-induction cycle trajectory. Baseline IGF-1 ~150-200 ng/mL (age + sex dependent); Tesamorelin chronic dosing yields an expected +25-50% steady-state elevation (~200-300 ng/mL). IGF-1 >400 ng/mL signals supraphysiological overdose → reduce dose. IGF-1 NOT rising during the cycle signals GHRH-receptor desensitization → stop cycle + recovery. Pre-cycle baseline + mid-cycle 6-week + post-cycle 12-week IGF-1 monitoring is mandatory for cycle-trajectory management. In the clinical HIV-Rx context, monthly IGF-1 monitoring is the minimum (FDA Egrifta SmPC labeling)."
    },
    {
      "q": "Fat-loss mechanism — visceral vs subcutaneous selectivity?",
      "a": "Tesamorelin produces selective abdominal visceral adipose tissue (VAT) reduction, NOT subcutaneous selectivity. Falutz 2007 STARS trial NEJM PMID 17376927 demonstrated the mechanism selectivity: VAT reduction -15-18% vs SAT reduction ~3-5% (documented by CT scan + DEXA). The selectivity explanation: VAT adipocytes carry higher GH-receptor + IGF-1-receptor density than SAT adipocytes, so GH-pulse induction produces a VAT-selective lipolytic effect. The clinical HIV-lipodystrophy context exploits this selectivity (HIV-lipodystrophy main phenotype: abdominal VAT accumulation + lipoatrophic SAT loss); the athletic doping context leverages the same selectivity for abdominal cutting-cycle results."
    },
    {
      "q": "WADA + USADA detection window — how long after cycle exit is the urine clear?",
      "a": "WADA-accredited LC-MS/MS urine detection of Tesamorelin + GHRH metabolite has a ~24-72 h post-injection window. The IGF-1 elevation pattern serves as an indirect marker ~2-3 weeks during a cycle and ~4-8 weeks after cycle exit (IGF-1 recovery kinetics). USADA + WADA tip: in-competition use is impossible (immediately banned); out-of-competition target-testing window requires IGF-1-pattern normalization confirmation at cycle-end +4 weeks. Steady-state IGF-1 ~25-50% elevation by itself is a suspicious cycle marker; a full-cycle 12-24 week chronic IGF-1-elevation pattern is the fingerprint. Cycle-exit gradual taper + an 8-week recovery window is the MINIMUM to confirm IGF-1 normalization."
    }
  ],
  "related": [
    "tesamorelin",
    "semaglutide-perf",
    "retatrutide-perf",
    "mots-c"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 1,
      "medium": 1.5,
      "high": 2
    },
    "unit": "mg/day SC AM-fasting",
    "note": "Clinical HIV-lipodystrophy Rx 2 mg/day SC AM-fasting (FDA Egrifta label). Off-label cutting-cycle 1-2 mg/day SC AM-fasting, 12-24 week cycle, NOT continuous (GHRH-receptor desensitization risk). Cycle-exit gradual taper 2 mg → 1 mg → 0.5 mg, 2-4 weeks taper. Pre-cycle bloodwork (IGF-1 + fasting glucose + HbA1c + lipid panel + GH baseline optional 24-h profile), mid-cycle 6-week check, post-cycle 12-week check IGF-1 recovery confirm."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before cycle",
      "timing": "1-2 weeks before cycle start",
      "markers": "IGF-1 (baseline ~150-200 ng/mL), fasting glucose, HbA1c (3-month integration), lipid panel (TC/LDL/HDL/TG), GH baseline (optional 24-h GH profile pulsatility), ALT/AST, CBC, vital signs (BP + HR baseline)",
      "purpose": "Assess GH-axis baseline status, establish IGF-1 cycle-trajectory tracking baseline + glucose baseline (for GH counter-regulatory effect monitoring)."
    },
    "midCycle": {
      "label": "During cycle",
      "timing": "6 weeks after cycle start",
      "markers": "IGF-1 (expected cumulative steady-state +25-50% on baseline), fasting glucose (+10-15 mg/dL expected, GH counter-regulatory effect), HbA1c (early integration), lipid panel (HDL elevation expected), ALT/AST",
      "purpose": "IGF-1 elevation pattern is the dose-titration signal (>400 ng/mL → reduce dose; not rising → GHRH-receptor desensitization signal, stop cycle). Glucose monitoring tracks the GH counter-regulatory effect."
    },
    "postCycle": {
      "label": "After cycle",
      "timing": "12 weeks after cycle end",
      "markers": "IGF-1 (recovery to baseline expected over 4-8 weeks, full recovery 8-12 weeks), fasting glucose (recovery to baseline 2-4 weeks), HbA1c (cumulative GH counter-regulatory effect post-cycle integration), GH pulsatility (optional 24-h profile recovery confirm), lipid panel",
      "purpose": "Verify GHRH-receptor recovery + IGF-1 normalization prior to new cycle. If IGF-1 >250 ng/mL at post-cycle 12 weeks → pituitary-adenoma screening + endocrinology follow-up recommended."
    }
  }
}
