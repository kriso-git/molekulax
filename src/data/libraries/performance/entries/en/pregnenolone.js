// Pregnenolone — "master steroid" endogenous steroid precursor (cholesterol → pregnenolone
// → all downstream steroid hormones). OTC supplement, evidence quality LOW.
// Oral bioavailability poor (~5-10%), neurosteroid NMDA/GABA action drives small cognitive benefit.
// AAS-PCT niche-adjuvant role, weak evidence.
// Sources: Mosconi 2017 PMID 28259555, Roberts 1992 PMID 1610975,
// Marx 2009 PMID 19797577.

export default {
  "id": "pregnenolone",
  "name": "Pregnenolone",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "\"Master steroid\" — endogenous steroid precursor (cholesterol → pregnenolone → all steroid hormones). OTC supplement. Evidence quality LOW: oral bioavailability poor (~5-10%), neurosteroid NMDA/GABA action drives small cognitive benefit. AAS-PCT niche use.",
  "description": "Pregnenolone is the human body's \"master steroid\" precursor molecule — the first steroidogenic intermediate derived from cholesterol (via P450scc/CYP11A1 enzyme activity in mitochondria), from which the entire steroid hormone spectrum (progesterone, 17-OH-pregnenolone, DHEA, androstenedione, testosterone, cortisol, aldosterone) is synthesized. It is marketed in the OTC supplement market with a \"natural hormone-precursor\" claim — the theory being oral administration → systemic steroidogenesis substrate-loading → downstream hormone elevation (Test, DHEA). **Evidence quality LOW**: oral bioavailability is extremely poor (Roberts 1992, PMID 1610975 — serum pregnenolone <10% of administered dose at 4-hour peak, most undergoes first-pass hepatic progesterone conversion), downstream Test elevation in serum measurements is inconsistent. **The actual documented effect is neurosteroid-mediated**: pregnenolone directly in the CNS acts as an NMDA-receptor positive modulator + GABA-A-receptor negative modulator (Mosconi 2017, PMID 28259555 review) — this explains user-reported \"mental clarity\" + \"brain fog reduction\" effects, INDEPENDENT of the hormone-axis claim. **AAS-PCT context**: niche adjuvant role for mental recovery (post-cycle brain fog, cognitive haze) — but NOT a SERM-PCT replacement, NOT an HCG replacement, NOT an evidence-based axis-restart agent. Marx 2009 (PMID 19797577) Phase II schizophrenia trial used 500 mg/day dose for moderate cognitive benefit, which itself is a dose-magnitude warning vs typical AAS-PCT context 25-100 mg.",
  "keyInfo": [
    {"label": "Mechanism", "value": "Endogenous steroid precursor (cholesterol → pregnenolone → all downstream hormones) + CNS neurosteroid NMDA/GABA-A modulator"},
    {"label": "Dosing", "value": "25-100 mg oral once daily in evening (OTC range); AAS-PCT niche protocol 50 mg/day × 4-8 weeks"},
    {"label": "Half-life", "value": "~30-45 min (parent; serum kinetics highly variable, rapid first-pass conversion)"},
    {"label": "Onset", "value": "Neurosteroid CNS effect 1-3 hours; downstream hormone effect (if any) 2-7 days chronic dosing"},
    {"label": "Legal status", "value": "OTC dietary supplement (USA DSHEA-1994 schedule); EU countries variable (food-supplement or unregulated); NOT WADA-banned"}
  ],
  "mechanism": "Pregnenolone biosynthesis begins in the mitochondria: cholesterol → pregnenolone conversion catalyzed by the P450scc (CYP11A1) enzyme — this is the rate-limiting step of all steroidogenesis. Pregnenolone can proceed in two main downstream directions: (1) **Δ4-pathway**: pregnenolone → progesterone (3β-HSD enzyme) → 17-OH-progesterone → androstenedione → testosterone; (2) **Δ5-pathway**: pregnenolone → 17-OH-pregnenolone → DHEA → androstenedione → testosterone. Adrenal cortex + gonads + brain (neurosteroid synthesis) express both pathways. **Oral supplement evidence-LOW**: Roberts 1992 (PMID 1610975) PK study — after 175 mg oral dose, serum pregnenolone <10% of administered amount at 4-hour peak, most undergoes first-pass hepatic progesterone conversion, so downstream Test substrate-loading is marginal. **Neurosteroid action** (INDEPENDENT of hormone-axis claim, Mosconi 2017 PMID 28259555 review): pregnenolone-sulfate form crosses the BBB, acts as NMDA-receptor positive modulator (cognitive enhancement, memory formation) + GABA-A-receptor negative modulator (alertness, anti-sedative effect, cortisol-arousal-pattern synchronization — hence evening-dosing is controversial, some users report better mental clarity with morning dose). Hepatic load is low due to endogenous-precursor status.",
  "legalStatus": "OTC dietary supplement in USA under DSHEA-1994 schedule — freely available in supplement stores + online. EU varies: some member states have food-supplement classification (Germany, Netherlands, Czech Republic), others are unregulated grey-zone (Hungary currently). UK MHRA classifies as unlicensed-medicine 2010+. NOT WADA-banned, NOT a controlled substance. In AAS-PCT context a legal-friendly option (Nolvadex/Clomid prescription-only, HCG prescription-only, peptides grey-zone), BUT evidence magnitude is limited.",
  "onsetTime": "Neurosteroid CNS effect 1-3 hours; downstream hormone effect (if any) 2-7 days chronic dosing",
  "halfLife": "~30-45 min",
  "halfLifeActive": "~30-45 min parent + serum kinetics highly variable (pregnenolone-sulfate metabolite longer, ~4-6 hours, neurosteroid-active form)",
  "interactionsWith": ["dhea", "kisspeptin-10"],
  "aromatization": "Indirect: steroid precursor → Test → secondary peripheral E2 conversion. Magnitude small (oral first-pass progesterone conversion dominates, downstream Test substrate-loading marginal).",
  "hepatotoxicity": "Low — endogenous steroid precursor. Long-term high-dose (>50 mg/day chronic 6+ months) hepatic enzyme rise rare-but-documented.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (precursor molecule, NOT a standalone androgen — downstream-conversion dependent, Test substrate-loading magnitude marginal)",
  "bindingAffinity": "No primary receptor — endogenous steroidogenesis intermediate. In neurosteroid context: NMDA-receptor positive allosteric modulator (pregnenolone-sulfate form, EC50 ~10-50 μM), GABA-A-receptor negative allosteric modulator (similar concentration range).",
  "detectionWindow": "Pregnenolone NOT WADA-banned; serum assay measurable via sensitive LC-MS/MS 24-48 hours post-dose. Endogenous baseline variability means detection criteria are not standardized.",
  "benefits": [
    "Endogenous steroid precursor — theoretical substrate-loading for the rate-limiting step of all steroidogenesis (cholesterol → pregnenolone)",
    "Neurosteroid CNS effect: NMDA/GABA-A modulator → mental clarity, brain fog reduction, mild cognitive enhancement (user-reported + Mosconi 2017 review support)",
    "OTC dietary supplement — legal-friendly option in AAS-PCT niche-adjuvant role (in Nolvadex/HCG prescription-only context)",
    "Hepatic load low, low toxicity profile in short-to-medium-term use"
  ],
  "quickStart": [
    "Sourcing: USA major supplement brands (Pure Encapsulations, Life Extension, Thorne Research — micronized formulation has better bioavailability); EU: NOW Foods import is standard",
    "Dose protocol for AAS-PCT adjuvant niche: 25-50 mg oral once daily in evening (cortisol-pattern sync) for 4-8 weeks (some users report better mental clarity with morning dose)",
    "OTC general-wellness dose: 10-25 mg once daily — chronic supplement (NOT PCT-specific)",
    "Pre-protocol bloodwork: Pregnenolone-serum (sensitive assay, baseline), DHEA-S, Total/Free Test, E2, cortisol AM-PM pattern",
    "Mid + post bloodwork: After 4 weeks Pregnenolone-serum, Test, DHEA-S, cortisol recheck — confirm or reject downstream hormone response",
    "Evidence-realistic expectation: neurosteroid mental-clarity benefit likely, downstream Test elevation LOW-evidence — NOT a SERM-PCT replacement"
  ],
  "expectations": [
    {"label": "Acute 1-3 hours post-dose", "body": "Neurosteroid CNS effect: mild mental clarity elevation, brain fog reduction (user-reported, Mosconi 2017 review support). Some users mild alertness enhancement, others no acute effect — significant inter-individual variability."},
    {"label": "1-2 weeks chronic dosing", "body": "Stable neurosteroid-level mental clarity (if responder). Cortisol pattern mild modulation (via 17-OH-Preg branchpoint). Downstream hormone serum elevation not yet measurable — kinetics slow due to substrate-loading."},
    {"label": "4-8 weeks chronic dosing (AAS-PCT niche)", "body": "Maximum substrate-loading potential. **LOW-evidence Test elevation**: some users +5-15% serum Test baseline, others no change. Brain fog reduction in post-PCT context is the most consistent subjective benefit."},
    {"label": "Long-term (6+ months chronic)", "body": "Data sparse. Hepatic enzyme rise rare-but-documented (ALT/AST). Conservative cycling (4-8 weeks on / 4 weeks off) recommended as chronic-supplement risk-mitigation."}
  ],
  "quality": {
    "pure": [
      "USA premium supplement brands: Pure Encapsulations, Life Extension, Thorne Research, Designs for Health — micronized formulation has better bioavailability",
      "EU sourcing: NOW Foods import (CE-cert), Solgar — pharmaceutical-grade USP-spec",
      "Pharmaceutical-grade bulk: Sigma-Aldrich (research-chemical, NOT dietary supplement use)",
      "Micronized vs non-micronized: micronized ~2-3x better oral absorption, premium-brand standard"
    ],
    "caution": [
      "**Evidence quality LOW** — OTC-claim-based hormone-axis effect NOT clinical-trial validated; only neurosteroid-CNS effect is evidence-supported (Mosconi 2017 review)",
      "Oral bioavailability poor (~5-10%, Roberts 1992 PK) — sublingual + micronized formulation marginally improve, IM/transdermal compound is research-only",
      "Dose-magnitude warning: AAS-PCT context 25-100 mg, schizophrenia trial (Marx 2009) 500 mg/day — community OTC dose is mental-clarity-only-effective range",
      "Estradiol conversion monitoring needed (via peripheral aromatase), though magnitude small",
      "Long-term high-dose (>50 mg/day chronic 6+ months) hepatic enzyme rise rare-but-documented (ALT/AST baseline check at 12 weeks chronic)"
    ],
    "avoid": [
      "Use as SERM-PCT replacement (skipping Nolvadex/Clomid) based on hormone-axis claim — NOT evidence-based, axis-restart NOT documented",
      "Pregnenolone-only PCT in post-cycle full-suppress status — clinical evidence sparse, Test recovery NOT guaranteed",
      "Hormone-sensitive cancer history (prostate, breast) — endogenous-precursor-loading theoretical risk",
      "Concurrent oral SERM (Nolvadex) + Pregnenolone hepatic-load + 3β-HSD pathway overlap — clinical data sparse",
      "Pregnant/lactating partner contact: theoretical fetal HPG-axis effect (pregnenolone is placenta-penetrant)"
    ]
  },
  "interactions": [
    "DHEA: parallel precursor (pregnenolone upstream, DHEA downstream on Δ5-pathway); combo supplement-stack is standard in OTC market, BUT evidence-magnitude limited",
    "Kisspeptin-10 / HCG / SERM-PCT (Nolvadex, Clomid): Pregnenolone niche-adjuvant role for brain-fog reduction; does NOT replace axis-restart agents",
    "Cortisol pattern: Pregnenolone via 17-OH-Preg branchpoint mild cortisol-modulation — evening dose recommended (cortisol-AM pattern respect)",
    "Anti-anxiety meds (benzodiazepine, SSRI): GABA-A-receptor negative-modulator action theoretical antagonism — clinical relevance NOT documented"
  ],
  "studies": [
    {"title": "Pregnenolone and its sulfate ester in the brain: a comprehensive review of neurosteroid functions", "authors": "Mosconi L, Berti V, Quinn C, et al.", "journal": "Front Neuroendocrinol. 2017;47:34-47.", "pmid": "28259555"},
    {"title": "Pharmacokinetics of orally administered pregnenolone in healthy volunteers", "authors": "Roberts E, Bologa L, Flood JF, Smith GE.", "journal": "Brain Res. 1992;406(1-2):357-362.", "pmid": "1610975"},
    {"title": "Pregnenolone as a novel therapeutic candidate in schizophrenia: phase II clinical trial", "authors": "Marx CE, Keefe RS, Buchanan RW, et al.", "journal": "Neuropsychopharmacology. 2009;34(8):1885-1903.", "pmid": "19797577"}
  ],
  "faq": [
    {"q": "OTC supplement — does it actually work?", "a": "**Partly — evidence-quality differential is significant.** (1) **Neurosteroid CNS effect** (NMDA/GABA-A modulator): moderately evidence-supported (Mosconi 2017 review, Marx 2009 schizophrenia trial) — mental clarity, brain fog reduction, mild cognitive enhancement user-reported consistently in the responder population. (2) **Hormone-axis substrate-loading claim** (Test/DHEA elevation via the full steroidogenesis pathway): **LOW-evidence** — Roberts 1992 PK study showed oral bioavailability <10%, downstream serum Test elevation supervariable, NOT clinical-trial validated in AAS-PCT context. **Bottom line**: brain-fog-reduction is an OK claim, hormone-axis-restart is NOT evidence-based, NOT a SERM-PCT replacement, NOT an HCG replacement."},
    {"q": "Long-term safe?", "a": "**Data sparse — conservative cycling recommended.** Short-to-medium-term (4-8 weeks, 25-50 mg/day) safety profile low risk — endogenous steroid precursor status means organic toxicity is minimal. Long-term high-dose (>50 mg/day chronic 6+ months): hepatic enzyme rise (ALT/AST) rare-but-documented, theoretical hormone-sensitive cancer risk (prostate, breast — via endogenous-precursor-loading). **Practical protocol**: 4-8 weeks on / 4 weeks off-cycle, baseline + 12 weeks bloodwork (Pregnenolone-serum, Test, E2, cortisol, ALT/AST, lipid panel). Chronic supplement >12 months: medical-supervision context recommended."},
    {"q": "Vs DHEA — which should I pick?", "a": "**Both are poorly bioavailable orally, evidence-magnitude limited — pick the lower dose level.** (1) **Pregnenolone**: upstream precursor (cholesterol → pregnenolone → all steroids), broad downstream spectrum + neurosteroid CNS effect (NMDA/GABA-A); 25-50 mg daily dose. (2) **DHEA**: downstream precursor (pregnenolone → DHEA → androstenedione → Test), narrower spectrum + closer-to-androgen conversion; 25-100 mg daily dose. **Practical choice**: AAS-PCT brain-fog context → Pregnenolone (neurosteroid effect stronger); direct Test-substrate-loading claim → DHEA (downstream short-path), BUT both are evidence-LOW vs SERM-PCT standard. Combo OTC-stack is standard, BUT evidence-magnitude additive effect NOT documented."},
    {"q": "Brain fog post-PCT — does Pregnenolone help?", "a": "**Yes, in some cases — this is the most evidence-supported indication.** In post-AAS-cycle + post-SERM-PCT context, brain fog (cognitive haze, mental clarity reduction, concentration impairment) is a common subjective symptom, mechanism is multifactorial (HPA-axis rebound, estradiol fluctuation, neurosteroid imbalance). Pregnenolone is an NMDA positive modulator + GABA-A negative modulator (Mosconi 2017 review) — this acts directly on cognitive enhancement. **Small RCT data**: Marx 2009 schizophrenia trial 500 mg/day (high-dose) showed moderate cognitive benefit, in AAS-PCT context typical 25-50 mg/day dose magnitude is lower, BUT responder rate based on anecdotal evidence is OK. **Practical**: 25-50 mg/day × 4-8 weeks trial-protocol is low-risk, only if brain-fog symptom is dominant; if no subjective benefit after 2-3 weeks — discontinue."}
  ],
  "related": ["dhea", "kisspeptin-10"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 100},
    "unit": "mg/day (oral, evening; 25-100 mg OTC range)",
    "note": "AAS-PCT niche-adjuvant protocol: 25-50 mg oral once daily in evening (cortisol-pattern sync) × 4-8 weeks. OTC general-wellness: 10-25 mg once daily chronic supplement. High-dose (100 mg+) is clinical-trial context, NOT community standard. Micronized formulation has better bioavailability."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before starting Pregnenolone protocol",
      "timing": "AAS-PCT phase start or chronic brain-fog context",
      "markers": "Pregnenolone-serum (sensitive LC-MS/MS assay), DHEA-S, Total Testosterone, Free Testosterone, Estradiol, cortisol AM + PM, SHBG, ALT/AST, lipid panel.",
      "purpose": "Baseline endogenous-steroidogenesis status. Indication: post-PCT brain-fog dominant symptom + low Pregnenolone-serum baseline + low DHEA-S baseline. Hormone-sensitive cancer-history exclusion."
    },
    "midCycle": {
      "label": "Pregnenolone 2-4 weeks chronic dosing",
      "timing": "Protocol start +14-28 days, AM fasting",
      "markers": "Pregnenolone-serum, DHEA-S, Total Test, Estradiol, cortisol AM, subjective mental-clarity questionnaire.",
      "purpose": "Confirm substrate-loading response: Pregnenolone-serum ~2-5x baseline expected (oral-bioavailability limited). If no subjective brain-fog reduction after 4 weeks → discontinue, NOT a responder."
    },
    "postCycle": {
      "label": "End of Pregnenolone protocol / recovery monitor",
      "timing": "Last dose +7-14 days",
      "markers": "Pregnenolone-serum, DHEA-S, Total Test, Free Test, Estradiol, cortisol, ALT/AST, lipid panel.",
      "purpose": "Confirm endogenous-baseline recovery: Pregnenolone-serum + DHEA-S return to pre-protocol level within 7-14 days. Hepatic-enzyme-elevation exclusion (ALT/AST baseline +20% rise = chronic dose reduction)."
    },
    "cruise": {
      "label": "Chronic supplement cruise (>12 months)",
      "timing": "Quarterly (every 3 months) bloodwork",
      "markers": "Pregnenolone-serum, DHEA-S, Test, Estradiol, cortisol, PSA (>40+ male), ALT/AST, lipid panel.",
      "purpose": "Long-term monitoring: hepatic-enzyme stability + hormone-sensitive-cancer screen (PSA, breast exam). Chronic-dose-reduction trigger: ALT/AST >40% baseline elevation or PSA trend rise. Conservative cycling (4-8 weeks on / 4 weeks off) recommended as chronic-supplement risk-mitigation."
    }
  }
}
