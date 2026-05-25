// Gonadorelin (Factrel / Lutrelef) — synthetic 10-amino-acid GnRH (gonadotropin-
// releasing hormone), endogenous hypothalamic peptide replica. Direct pituitary
// GnRH-receptor agonist. FDA Factrel 1982 Wyeth (US-discontinued 2008),
// EMA Lutrelef Ferring pulsatile-pump hypothalamic-hypogonadism Rx.
// Sources: FDA Factrel SmPC (Wyeth 1982), EMA Lutrelef SPC (Ferring),
// Smals 1986 PMID 3093469, Hayes 2000 PMID 10721060.

export default {
  "id": "gonadorelin",
  "name": "Gonadorelin (Factrel / Lutrelef)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Synthetic 10-aa GnRH — direct pituitary GnRH-R stimulus, LH/FSH release. FDA Factrel 1982 (US-discontinued 2008); EMA Lutrelef pulsatile-pump Rx for hypothalamic hypogonadism. Continuous dose paradox-downregulation in prostate cancer therapy.",
  "description": "Gonadorelin is a synthetic replica of the 10-amino-acid decapeptide GnRH (gonadotropin-releasing hormone, also known as LHRH) — sequentially IDENTICAL to endogenous hypothalamic GnRH (pyroGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH₂). The hypothalamic arcuate nucleus + median eminence GnRH neurons naturally secrete GnRH in a ~90-120-minute pulsatile pattern into the hypothalamo-pituitary portal circuit; SC or IV injection of Gonadorelin replicates this pulse signal and binds directly to the GnRH receptor on pituitary anterior-lobe gonadotrope cells → LH + FSH release. **Clinical history**: FDA Factrel approval (Wyeth 1982) — original indication was pituitary LH/FSH diagnostic stimulation testing (to discriminate hypothalamic vs pituitary hypogonadism). US discontinued 2008 (commercial-viability reasons, NOT safety). EMA Lutrelef (Ferring) remains available across the EU on a pulsatile-pump protocol as an Rx for hypothalamic hypogonadism (Kallmann syndrome + acquired GnRH deficiency). **Paradox mechanism with continuous dosing**: a chronically elevated GnRH signal (vs pulsatile) downregulates the GnRH receptor → this is the mechanism of GnRH-agonist therapy in prostate cancer treatment (Lupron/Leuprolide, Zoladex/Goserelin) — same molecular family, opposite-direction effect based on the dosing pattern. **AAS-PCT context**: Gonadorelin sits 1 axis level below Kisspeptin-10 (Kisspeptin upstream GPR54 → GnRH stimulus; Gonadorelin direct pituitary GnRH-R stimulus). The practical problem is identical: pulsatile-pump impractical for self-administration, single bolus has limited efficacy. UGL peptide sourcing is standard; EU pharmacy availability via Lutrelef protocol.",
  "keyInfo": [
    {"label": "Mechanism", "value": "Direct pituitary anterior-lobe GnRH-receptor (LHRH-R) agonist → LH + FSH release → testicular Test"},
    {"label": "Dosing", "value": "100 mcg SC every 90-120 min (pulse-pump, impractical) or 100-500 mcg SC bolus pre-cycle (community protocol, limited efficacy)"},
    {"label": "Half-life", "value": "~10-40 min (very short — pulsatility pattern is essential)"},
    {"label": "Onset", "value": "LH/FSH spike 15-60 min after SC"},
    {"label": "Legal status", "value": "FDA Factrel withdrawn 2008; EMA Lutrelef Ferring Rx (pulsatile-pump hypothalamic hypogonadism); WADA S2 Peptide Hormones banned"}
  ],
  "mechanism": "GnRH (gonadotropin-releasing hormone, LHRH) is a 10-amino-acid decapeptide hypothalamic hormone, secreted by arcuate-nucleus + preoptic-area GnRH neurons in a pulsatile pattern (~90-120-minute cycles) into the hypothalamo-pituitary portal circuit. Gonadorelin is the synthetic replica of THIS 10-amino-acid peptide — sequence (pyroGlu¹-His²-Trp³-Ser⁴-Tyr⁵-Gly⁶-Leu⁷-Arg⁸-Pro⁹-Gly¹⁰-NH₂) IDENTICAL to endogenous GnRH. Its receptor is GnRH-R (LHRH-R) — a G-protein-coupled receptor on pituitary anterior-lobe gonadotrope cells. Binding → Gq/11 pathway → PLC activation → IP3 + DAG → intracellular Ca²⁺ mobilization + PKC activation → LH-vesicle + FSH-vesicle exocytosis. **Pulsatility paradox**: pituitary gonadotrope cell GnRH-receptor sensitivity is dosing-pattern dependent — pulsatile stimulus (90-min cycles) maintains receptor density and LH/FSH release continuity, WHILE a continuous-elevated GnRH signal (or long-acting GnRH analog like Leuprolide) → receptor downregulation + desensitization → LH/FSH suppression. THIS is the mechanism of GnRH-agonist therapy in the prostate cancer context (chemical castration). No hepatic stress from peptide SC injection.",
  "legalStatus": "USA: FDA Factrel (Wyeth 1982) approved for diagnostic LH/FSH stimulation testing; commercial-discontinued 2008 (NOT safety-related, market viability). Compounding pharmacy sourcing limited in 2026. EU: EMA Lutrelef (Ferring) Rx still available on pulsatile-pump protocol for hypothalamic hypogonadism (Kallmann syndrome) + acquired GnRH deficiency. HU + PL: Lutrelef special-import possible via endocrinologist specialist Rx. WADA: S2 Peptide Hormones — banned in-competition + out-of-competition year-round.",
  "onsetTime": "LH/FSH spike 15-60 min after SC",
  "halfLife": "~10-40 min",
  "halfLifeActive": "~10-40 min (parent peptide active; metabolite fragments inactive)",
  "interactionsWith": ["kisspeptin-10", "hcg-perf", "hmg-perf", "fsh-rec-perf"],
  "aromatization": "Indirect — GnRH → LH/FSH → testicular Test → secondary peripheral E2 conversion (CYP19 aromatase). Magnitude similar to HCG rebound; moderate on a pulsatile protocol.",
  "hepatotoxicity": "None — peptide SC injection.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (hypothalamic peptide replica, NOT AAS)",
  "bindingAffinity": "Pituitary GnRH-R (LHRH-R) Kd ~1-5 nM, high-affinity natural-ligand binding.",
  "detectionWindow": "WADA-accredited LC-MS/MS sparse — urinary peptide detection 12-24 h (due to very short t1/2). Detection confounded by endogenous GnRH baseline.",
  "benefits": [
    "Direct pituitary GnRH-R stimulus — 1 axis level below Kisspeptin-10, closer to downstream LH/FSH release",
    "EMA Lutrelef pharmaceutical-grade pulsatile-pump protocol evidence (Kallmann syndrome + hypothalamic hypogonadism Rx)",
    "Sequence identical to endogenous GnRH — optimal receptor fit",
    "No hepatic stress — peptide SC"
  ],
  "quickStart": [
    "Sourcing: EU Lutrelef protocol (Ferring pulsatile-pump) on endocrinologist Rx; UGL peptide CDMO (Bachem, Lipotec, AmbioPharm) HPLC + mass-spec tested",
    "Reconstitution: 100 mcg/vial or 500 mcg/vial lyophilized → 1-2 mL bacteriostatic water; 100 mcg/mL or 500 mcg/mL concentration",
    "Pulse-pump protocol (research/clinical Rx): 100 mcg SC every 90-120 min, ~12-16 doses/24 h — pump-protocol ONLY",
    "Bolus protocol (community DIY-PCT): 100-500 mcg SC once daily AM, limited efficacy — single LH spike",
    "Pre-treatment bloodwork: Total Test, Free Test, LH, FSH, Estradiol, SHBG, Prolactin baseline",
    "Mid + post bloodwork: 30-60 min post-injection LH/FSH spike confirm, 7-14 days Total Test recovery"
  ],
  "expectations": [
    {"label": "15-60 min after SC", "body": "Measurable LH spike (~3-6x baseline rise, Smals 1986 + Hayes 2000 data). FSH spike milder (~2-4x). Serum Test rise with ~2-6 h delay."},
    {"label": "12-24 h", "body": "LH/FSH levels return to baseline (very short half-life). Test rise sustained ~1-2 days. Pulsatility-simulating effect can extend with a second dose."},
    {"label": "Chronic pulse-pump protocol (Lutrelef, 1-2 weeks)", "body": "Full physiological pulsatile-pattern restart of the HPG axis. In a hypothalamic-hypogonadism context, endogenous-level LH/FSH is achievable."},
    {"label": "Bolus DIY-protocol AAS-PCT", "body": "Limited efficacy — dose-per-single-LH-spike, NOT a chronic axis restart. SERM-PCT-replacement role is currently NOT evidence-based."}
  ],
  "quality": {
    "pure": [
      "EU pharmaceutical-grade: Ferring Lutrelef pulsatile-pump kit (special-import on endocrinologist Rx)",
      "USA peptide CDMO: Bachem, Lipotec, AmbioPharm — HPLC + mass-spec tested (>98% purity), R&D-grade vials",
      "EU peptide CDMO: PolyPeptide Group (Belgium), Bachem Bubendorf (Switzerland) — pharmaceutical-grade",
      "UGL peptide vendor (Asian sourcing): HPLC cert mandatory — purity often <90%, avoid without mass-spec confirmation"
    ],
    "caution": [
      "Pulse-pump protocol impractical for self-administration (90-120-min cyclic injection 24/7) — research/clinical setting only",
      "Bolus dose limited efficacy — single LH spike vs chronic HPG axis restart",
      "Very short t1/2 (~10-40 min) — single-dose-window effect, dosing-frequency critical",
      "Bacteriostatic-water storage: 4°C reconstituted peptide stable for 14-21 days; <7 days at 25°C room temperature",
      "UGL sourcing without mass-spec cert: degraded fragments + pseudo-peptide are frequent"
    ],
    "avoid": [
      "Continuous-dosing protocol (>30 days chronically elevated signal): receptor-downregulation paradox → LH/FSH suppression (the mechanism of GnRH-agonist therapy)",
      "Co-administration of GnRH-agonist therapy (Lupron/Leuprolide, Zoladex/Goserelin): receptor-occupancy overlap, NOT recommended",
      "Self-administration of pulse-pump protocol by an untrained user (sterile technique critical, infection risk)",
      "Pituitary tumor (prolactinoma) suspicion: GnRH stimulation test is contraindicated",
      "Pregnant partner contact: theoretical fetal HPG axis effect"
    ]
  },
  "interactions": [
    "Kisspeptin-10: NOT recommended in combination (overlap mechanism, redundant GnRH-pathway stimulation — Kisspeptin upstream, Gonadorelin downstream on the same pathway)",
    "HCG-perf: potential synergy — Gonadorelin pituitary LH release + HCG testicular LHCGR stimulus combo (pituitary + testicular dual stimulus)",
    "SERM (Nolvadex, Clomid): theoretical synergy (Gonadorelin pituitary stimulus + SERM ER blockade), but clinical evidence sparse",
    "GnRH-agonist therapy (Lupron, Zoladex): CONTRAINDICATED — receptor-occupancy overlap + paradox-receptor-downregulation amplification"
  ],
  "studies": [
    {"title": "Factrel (gonadorelin hydrochloride) for injection — FDA Label", "authors": "Wyeth-Ayerst Laboratories", "journal": "FDA NDA 18123 (1982); US-discontinued 2008.", "pmid": "FDA-Factrel-SmPC"},
    {"title": "Lutrelef (gonadorelin acetate) — EMA Summary of Product Characteristics", "authors": "Ferring Pharmaceuticals", "journal": "EMA SPC, pulsatile-pump hypothalamic-hypogonadism indication.", "pmid": "EMA-Lutrelef-SPC"},
    {"title": "Therapeutic effects of a pulsatile GnRH pump on adult male patients with congenital hypogonadotropic hypogonadism (CHH): a retrospective study.", "authors": "Jiang H, Li BJ, Jin DC", "journal": "Transl Androl Urol", "pmid": "40800099"},
    {"title": "[Effect and safety of pulsatile GnRH therapy for male congenital hypogonadotropic hypogonadism].", "authors": "Niu YH, Xu H, Chen YW", "journal": "Zhonghua Nan Ke Xue", "pmid": "39210488"}
  ],
  "faq": [
    {"q": "Gonadorelin vs Kisspeptin-10 — what's the difference?", "a": "Axis-level hierarchy difference: **Gonadorelin** acts directly on the pituitary GnRH-R (1 axis level below Kisspeptin) — direct LH/FSH-release stimulus; **Kisspeptin-10** acts on the hypothalamic GPR54 → endogenous GnRH-pulse trigger → pituitary GnRH-R stimulus (highest upstream point). Molecular nature: Gonadorelin is SEQUENTIALLY IDENTICAL to endogenous GnRH (10-amino-acid decapeptide); Kisspeptin-10 is the 10-amino-acid C-terminal fragment of a 145-amino-acid precursor protein (KISS1). Clinical practice: Gonadorelin EMA Lutrelef is pharmaceutical-grade available (pulsatile-pump protocol), while Kisspeptin-10 is still research-emerging (Imperial College Phase II). Magnitude: similar LH/FSH-spike pattern."},
    {"q": "Continuous infusion vs pulse — opposite effect?", "a": "Yes, a **paradox mechanism** dependent on the dosing pattern. Pulsatile protocol (90-120-min cycles, mimicking natural hypothalamic GnRH secretion): maintains pituitary GnRH-R receptor density and LH/FSH-release continuity → physiological stimulation. Continuous-elevated signal (long-acting GnRH analog like Leuprolide/Lupron or Goserelin/Zoladex chronic infusion): receptor downregulation + desensitization → LH/FSH suppression → testicular Test suppression → this is the **chemical castration** mechanism in prostate cancer treatment + endometriosis Rx. Same molecular family, opposite-direction effect — this is the GnRH pulsatility paradox, a gold-standard pituitary pharmacology example."},
    {"q": "Availability in 2026?", "a": "EU: **Lutrelef** (Ferring) available as pharmaceutical-grade on pulsatile-pump protocol — endocrinologist specialist Rx, special-import (Kallmann syndrome + acquired GnRH-deficiency Rx indication). HU + PL: rare-disease-protocol via possible, NOT standard pharmacy. USA: Factrel commercially discontinued 2008 — compounding pharmacy sourcing limited (Wedgewood, Empower Pharmacy). Research-chemical: peptide CDMO standard (Bachem, Lipotec, AmbioPharm USA; PolyPeptide Group EU), HPLC + mass-spec tested ~$20-40/mg. UGL peptide (Asian sourcing) frequent, but HPLC cert mandatory — purity often <90%."},
    {"q": "Can it be a substitute for SERM in AAS-PCT?", "a": "**Evidence base is currently limited**, SERM replacement is NOT recommended. Practical problems: (1) pulsatile-pump protocol impractical in a self-administration context (90-120-min cycles 24/7); (2) bolus dose limited efficacy (single LH spike vs chronic axis restart); (3) very short t1/2 (~10-40 min) — frequent dosing required. Clinical standard AAS-PCT in 2026: **SERM (Nolvadex 40/20/20/20 mg/day × 4 weeks) ± HCG (1500-2500 IU EOD × 10-14 days)** — better documented, more practical, identical end-result (HPG axis restart). Gonadorelin niche-option: SERM-PCT-failure case + experimental pulse-pump protocol in research setting. Imperial College Phase II + Hayes 2000 evidence base mostly hypogonadism Rx context, NOT AAS-PCT."}
  ],
  "related": ["kisspeptin-10", "hcg-perf", "hmg-perf", "fsh-rec-perf"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 100, "medium": 250, "high": 500},
    "unit": "mcg SC once daily (bolus protocol, limited outside pulsatile-pump)",
    "note": "Pulse-pump protocol (Lutrelef clinical): 100 mcg SC every 90-120 min × 24-h cycles. Bolus DIY-protocol (AAS-PCT): 100-500 mcg SC once daily AM × 7-14 days. Reconstitution: 100 mcg/vial → 1 mL bacteriostatic water (100 mcg/mL). Storage: 4°C reconstituted stable 14-21 days."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before starting Gonadorelin treatment",
      "timing": "Start of PCT phase or hypothalamic/pituitary hypogonadism context",
      "markers": "Total Testosterone, Free Testosterone, LH, FSH, Estradiol, SHBG, Prolactin, inhibin-B (if available), lipid panel, ALT/AST, CBC.",
      "purpose": "Baseline HPG axis status. Indication: discriminate hypothalamic vs pituitary suppression (Factrel original diagnostic indication), or AAS-PCT-context post-cycle pituitary restart. Niche option in SERM-PCT-failure case."
    },
    "midCycle": {
      "label": "Gonadorelin 30-60 min post-injection",
      "timing": "SC bolus +15-60 min (LH/FSH spike) + 2-6 h delayed (Test rise)",
      "markers": "LH (acute spike confirm), FSH, Total Test, Free Test, Estradiol (secondary rise).",
      "purpose": "Acute-response confirm: LH ~3-6x baseline spike expected per Smals 1986. If there is NO LH spike → pituitary-level failure (not hypothalamic) or peptide-quality issue. Diagnostic discriminator for hypothalamic vs pituitary hypogonadism."
    },
    "postCycle": {
      "label": "End of Gonadorelin protocol / recovery monitor",
      "timing": "Last dose +7-14 days",
      "markers": "Total Test, Free Test, LH, FSH, Estradiol, SHBG, lipid panel.",
      "purpose": "Confirm sustained HPG axis restart: LH/FSH ≥ age-specific baseline-low, Test ≥ pre-treatment +25%. If sustained recovery NOT present → SERM-PCT (Nolvadex 4-6 weeks) adjuvant warranted."
    },
    "cruise": {
      "label": "Chronic AAS cruise — NOT recommended",
      "timing": "N/A",
      "markers": "N/A",
      "purpose": "Gonadorelin chronic-cruise NOT recommended — continuous-dosing paradox mechanism (receptor downregulation → LH/FSH suppression). Only acute PCT-phase bolus or pulse-pump clinical Rx-protocol setting."
    }
  }
}
