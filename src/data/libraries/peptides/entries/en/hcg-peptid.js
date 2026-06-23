// HCG (Pregnyl / Ovidrel / Choragon) – Human Chorionic Gonadotropin,
// fertility-clinic (Rx) framing. Cross-frame entry: the `hcg-perf` counterpart
// covers the same molecule in AAS-PCT framing. Sources: FDA Pregnyl SmPC
// (Organon 1973), EMA Ovitrelle SPC, Crosnoe 2013 (Transl Androl Urol – no PMID),
// Hill 2018 (Int J Impot Res – no PMID), Coviello 2005 PMID 15713727.

export default {
  "id": "hcg-peptid",
  "name": "HCG (Fertility)",
  "image": "/peptides/hcg-peptid.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.16)",
  "shortDesc": "Human Chorionic Gonadotropin – LH-receptor agonist glycoprotein. Fertility induction (male hypogonadism + IVF), spermatogenesis restoration, HPTA-recovery in clinical Rx framing.",
  "description": "HCG (Human Chorionic Gonadotropin) is a 244-amino-acid heterodimeric glycoprotein (α + β subunit), structurally an LH analog with ~80% sequence identity on the β subunit. Endogenous source: pregnancy placental syncytiotrophoblast. In the fertility-clinic context, HCG functions as exogenous LH replacement: a Leydig-cell LHCGR receptor agonist that activates testosterone biosynthesis and plays a critical role in maintaining intratesticular testosterone (ITT) – the ITT concentration is 50-100× higher than serum testosterone (~600-1200 nmol/L vs. ~10-30 nmol/L serum), and this high-ITT environment is an absolute requirement for Sertoli-supported spermatogenesis. Clinical HCG sources: (1) urinary-extracted (uHCG) – purified from pregnant women's urine (Pregnyl Organon 1973, Novarel Ferring, Choragon Ferring EU); (2) recombinant (rHCG / choriogonadotropin alfa) – CHO-cell-expressed, higher purity, lower immunogenicity (Ovidrel Serono/Merck USA, Ovitrelle EMA). Clinical indications: (a) male hypogonadotropic hypogonadism (HH, Kallmann syndrome, pituitary insufficiency) – testosterone restoration via the Leydig-cell pathway; (b) spermatogenesis induction in HH patients (HCG monotherapy is often insufficient; HMG or rFSH co-administration is required for complete spermatogenesis initiation); (c) clinical HPTA-recovery protocol after endogenous testosterone suppression (idiopathic secondary hypogonadism, corticosteroid- or opioid-induced HPTA suppression); (d) IVF male-factor – oligospermia / azoospermia treated with a combined gonadotropin protocol. Cross-frame note: this is the `hcg-peptid` entry – fertility-clinic Rx framing. The `hcg-perf` counterpart entry (performance library) covers the same molecule in the AAS-PCT bridge context (atrophy prevention, doping narrative). IDENTICAL molecule, different narrative: the patient/user receives the same Pregnyl/Ovitrelle vial – only with a different intent and a different medical framing.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "LHCGR receptor agonist (Leydig cell) → ITT elevation → Sertoli-supported spermatogenesis"
    },
    {
      "label": "Clinical dose (HH)",
      "value": "1500-2500 IU SC/IM 2-3x/week × 6-24 months"
    },
    {
      "label": "HPTA-recovery dose",
      "value": "500-1500 IU SC 2-3x/week × 4-6 weeks, then SERM transition"
    },
    {
      "label": "Half-life",
      "value": "uHCG ~24-36 h; rHCG (Ovidrel/Ovitrelle) ~38 h"
    },
    {
      "label": "Onset",
      "value": "Acute Test rise 24-48 h; spermatogenesis recovery 3-6 months"
    },
    {
      "label": "Storage",
      "value": "Lyophilized vial at room temp; reconstituted solution 2-8°C max 30 days"
    }
  ],
  "mechanism": "HCG is a 244-amino-acid heterodimeric glycoprotein: α subunit (shared with LH/FSH/TSH) + β subunit (HCG-specific, ~80% LH-β identity + extra C-terminal ~24-amino-acid tail, CTP). The CTP tail gives HCG its long t1/2 (~24-38 h) compared to LH's ~30-minute half-life. Receptor binding: Leydig-cell LHCGR (LH / chorionic gonadotropin receptor) agonist → Gs-cAMP-PKA pathway → upregulation of steroidogenic enzymes (StAR, CYP11A1, CYP17A1, 3β-HSD) → cholesterol → pregnenolone → testosterone. Fertility-clinic key insight: HCG stimulus elevates intratesticular testosterone (ITT) concentration, which is 50-100× serum testosterone (~600-1200 nmol/L vs. ~10-30 nmol/L serum). This high-ITT environment is critical for the maturation of Sertoli cells and the germinal epithelium (spermatogonia → spermatocyte → spermatid → spermatozoon). Complete spermatogenesis induction, however, also requires an FSH signal (Sertoli-cell activation), which is why HCG + HMG or HCG + rFSH combinations are the standard in HH patients.",
  "dosingInfo": "Male hypogonadotropic hypogonadism (HH) Rx: 1500-2500 IU SC or IM 2-3x/week × 6-24 months. Target: serum testosterone 400-700 ng/dL + sperm concentration ≥15 million/mL. Maintenance dose titration based on bloodwork. – Spermatogenesis induction (HCG monotherapy insufficient): HCG 1500-2500 IU 2-3x/week + HMG (Menopur) 75-150 IU 3x/week OR rFSH (Gonal-F, Puregon) 150 IU 3x/week × 6-24 months. A complete spermatogenic cycle takes 72-74 days, so a minimum of 3-6 months is required for first measurable results. – HPTA-recovery clinical Rx (NOT AAS-PCT): 500-1500 IU SC 2-3x/week × 4-6 weeks for secondary hypogonadism or corticosteroid/opioid-induced HPTA suppression, followed by SERM transition (Clomid 25-50 mg/day × 4 weeks or Tamoxifen 20 mg/day × 4 weeks) for full axis restart. – IVF male-factor: HCG + HMG combined gonadotropin protocol, individualized dosing under reproductive-endocrinology supervision. – Pediatric cryptorchidism: separate pediatric protocol (1000-1500 IU 2x/week × 4-5 weeks), exclusively on pediatric-endocrinology indication.",
  "studies": [
    {
      "title": "Use of human chorionic gonadotropin in men",
      "authors": "Crosnoe LE, Grober E, Ohl D, Kim ED.",
      "journal": "Transl Androl Urol. 2013;2(3):195-202."
    },
    {
      "title": "Hypogonadism therapy and fertility outcomes",
      "authors": "Hill ED, Honig SC, Tabb KE, et al.",
      "journal": "Int J Impot Res. 2018;30(6):262-269."
    },
    {
      "title": "Low-dose human chorionic gonadotropin maintains intratesticular testosterone in normal men with testosterone-induced gonadotropin suppression",
      "authors": "Coviello AD, Matsumoto AM, Bremner WJ, et al.",
      "journal": "J Clin Endocrinol Metab. 2005;90(5):2595-2602.",
      "pmid": "15713727"
    },
    {
      "title": "Maintenance of spermatogenesis in hypogonadotropic hypogonadal men with human chorionic gonadotropin alone",
      "authors": "Depenbusch M, von Eckardstein S, Simoni M, Nieschlag E.",
      "journal": "Eur J Endocrinol. 2002;147(5):617-624.",
      "pmid": "12444893"
    }
  ],
  "legalStatus": "HU: Pregnyl 1500/5000 IU (Organon/Merck) + Choragon 5000 IU (Ferring) + Ovitrelle 250 µg (Merck Serono) – registered, Rx-only, requires andrology / reproductive-endocrinology specialist indication. EU (EMA): Pregnyl, Choragon, Ovitrelle – Rx, with fertility indications (male hypogonadism, anovulation, IVF). USA (FDA): Pregnyl (Organon/Merck), Novarel (Ferring), Ovidrel (Serono) – Rx, indications include female ovulation induction, male hypogonadism, prepubertal cryptorchidism. PL: Pregnyl, Choragon, Ovitrelle – registered Rx (NFZ reimbursement partially available for fertility indications). WADA: S2.1 Peptide Hormones – banned in-competition + out-of-competition for all male athletes year-round. Fertility patients in competitive sport need a Therapeutic Use Exemption (TUE).",
  "onsetTime": "Acute Test rise 24-48 h; spermatogenesis recovery 3-6 months",
  "halfLife": "uHCG ~24-36 h; rHCG ~38 h",
  "interactionsWith": [
    "hmg-peptid",
    "hcg-perf",
    "gonadorelin"
  ],
  "wadaStatus": "banned",
  "related": [
    "hmg-peptid",
    "hcg-perf",
    "gonadorelin"
  ],
  "faq": [
    {
      "q": "What's the difference between the `hcg-peptid` and `hcg-perf` entries?",
      "a": "Identical molecule, different framing. Both entries cover the same HCG (Pregnyl / Ovitrelle / Choragon) – identical chemical structure (244-AA heterodimeric glycoprotein), identical pharmacology (LHCGR agonist), identical route of administration (SC or IM injection). The DIFFERENCE is purely narrative: `hcg-peptid` (this entry) – fertility-clinic Rx framing: male hypogonadotropic hypogonadism, spermatogenesis induction for IVF male-factor, HPTA-recovery clinical protocol (corticosteroid- or opioid-induced hypogonadism). `hcg-perf` – AAS-PCT bridge context: mid-cycle testicular atrophy prevention, post-cycle HPTA restart via Leydig bypass, doping narrative. The patient receives the same Pregnyl vial at the pharmacy – only with a different diagnosis code and a different intended outcome."
    },
    {
      "q": "How long does fertility recovery take?",
      "a": "A complete spermatogenic cycle takes 72-74 days (germ-cell maturation from spermatogonium to mature spermatozoon + epididymal transit). Therefore, after initiating HCG therapy (or HCG + HMG/rFSH combination), a minimum of 3-6 months is required to measure the first sperm-count rise. Full recovery (sperm concentration ≥15 million/mL, the WHO 2010 normospermia threshold) can take 6-24 months, depending on baseline severity (azoospermia vs. severe oligospermia vs. mild oligospermia) and indication (congenital HH is often slower than acquired steroid-induced HPTA suppression). Monitoring: quarterly spermiogram (WHO protocol), quarterly serum testosterone + LH/FSH, optionally annual testicular ultrasound."
    },
    {
      "q": "Why is HCG WADA-banned even with a fertility Rx indication?",
      "a": "The WADA S2.1 Peptide Hormones category bans HCG for all male athletes year-round because, as an exogenous LH mimetic, it raises endogenous male testosterone synthesis – this confers a performance-enhancing effect regardless of whether the indication is fertility or intentional doping. A competitive athlete with a fertility condition (HH, IVF male-factor) must apply for a Therapeutic Use Exemption (TUE) at their national anti-doping organization (US: USADA; UK: UKAD; HU: HUNADO; PL: POLADA), requiring: andrology / reproductive-endocrinology specialist diagnosis, lab evidence (baseline LH/FSH/Test/sperm concentration), and a treatment plan. Once the TUE is approved, the athlete can lawfully use HCG. For female athletes, HCG is banned only in-competition (S2.1 footnote), which is relevant in the context of IVF protocols."
    },
    {
      "q": "Is HCG monotherapy sufficient to induce spermatogenesis?",
      "a": "Generally no. Complete spermatogenesis requires two signals: (1) HCG/LH → Leydig cell → ITT (intratesticular testosterone) – HCG alone covers this; (2) FSH → Sertoli cell → germ-cell support (androgen-binding protein, inhibin B, tubular microenvironment). HCG monotherapy suffices only if endogenous FSH secretion is preserved (e.g. mild / partial HH, post-AAS recovery). For complete HH (Kallmann syndrome, pituitary insufficiency, post-pituitary surgery), HCG + HMG (human menopausal gonadotropin, containing FSH+LH) or HCG + rFSH (recombinant FSH: Gonal-F, Puregon) combination is required for 6-24 months. The Depenbusch 2002 study (PMID 12444893) shows that in certain HH subtypes HCG monotherapy can long-term sustain spermatogenesis (especially after FSH priming), but the clinical standard is the combined protocol."
    }
  ],
  "anecdote": null
}
