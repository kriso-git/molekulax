// rFSH (Gonal-F / Puregon / Follistim / Bemfola) — Recombinant FSH, fertility-
// clinic Rx framing. Cross-frame counterpart: `fsh-rec-perf` (AAS-PCT FSH-axis
// recovery). Sources: EMA Gonal-F SPC (Merck Serono 1995), EMA Puregon SPC
// (Organon 1996), FDA Follistim label (MSD), Bouloux 2003 PMID 11744708,
// Liu 2009 PMID 19389810, Matorras 2009 PMID 16735417.

export default {
  "id": "fsh-rec-peptid",
  "name": "rFSH (Fertility)",
  "image": "/peptides/rFSH.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.16)",
  "shortDesc": "Recombinant FSH — selective Sertoli cell stimulation (no LH activity). Spermatogenesis induction, IVF male/female-factor clinical Rx.",
  "description": "rFSH (recombinant follicle-stimulating hormone) is a glycoprotein expressed in CHO (Chinese Hamster Ovary) cells, structurally and functionally identical to endogenous human FSH (α + β subunit, glycosylation pattern clinically equivalent). Brand sources: Gonal-F (Merck-Serono, EMA 1995, FDA 1997), Puregon / Follistim (Organon → MSD, EMA 1996, FDA 1997), Bemfola (Gedeon Richter, EMA 2014 — biosimilar). Recombinant manufacturing resolved the contamination problems of urinary-derived FSH derivatives (Pergonal era, Menopur): ZERO LH activity, higher batch consistency, prion risk eliminated. Mechanism: selective Sertoli cell FSHR (FSH receptor) agonism → spermatogenesis support, inhibin-B synthesis, androgen-binding protein (ABP) production. **Fertility clinical Rx context**: this is the `-peptid` suffix entry — the narrative is male HypoH (hypogonadotropic hypogonadism) spermatogenesis induction + IVF male-factor / female-factor protocol. Key differentiator vs HCG: HCG drives the Leydig side (testosterone production), rFSH drives the Sertoli side (spermatogenesis) — fertility restoration requires BOTH; monotherapy is inadequate. **Cross-frame note**: the IDENTICAL molecule appears as `fsh-rec-perf` in the performance library in AAS-PCT FSH-axis-recovery context (azoospermia recovery after hard-suppression). Pharmacy choice is identical, only the narrative differs. WADA-banned year-round (S2.1 Peptide Hormones).",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Selective Sertoli cell FSHR agonist (recombinant, CHO-expressed, NO LH activity)"
    },
    {
      "label": "Dosing (male spermatogenesis)",
      "value": "75-150 IU SC 3x/week × 6-24 months (stacked with HCG)"
    },
    {
      "label": "Dosing (female IVF)",
      "value": "75-450 IU/day, individualized based on ovarian response"
    },
    {
      "label": "Half-life",
      "value": "24-36 hours SC (longer than urinary FSH)"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA Rx (Gonal-F, Puregon, Follistim, Bemfola), WADA S2 (banned)"
    }
  ],
  "mechanism": "rFSH is a heterodimeric glycoprotein: α subunit (shared with LH, HCG, TSH) + β subunit (FSH-specific). Biotechnological source: CHO cell line via two-plasmid co-transfection (FSH-α + FSH-β gene). Glycosylation pattern is clinically equivalent to endogenous human FSH, but the recombinant protein is distinguishable by mass-spec analysis — this is the basis of WADA detection. Receptor binding: exclusively Sertoli cell FSHR agonist (Kd ~0.1 nM). NOT active on Leydig cell LHCGR (FSH ↔ LH/HCG receptor selectivity is complete). Sertoli activation → cAMP-PKA pathway → spermatogenesis support functions: spermatogonia maturation, inhibin-B production (Sertoli marker), androgen-binding protein (ABP) synthesis maintaining intratesticular testosterone concentration. In the fertility context, full spermatogenesis restoration requires the DUAL HCG (Leydig-Test stimulus) + rFSH (Sertoli stimulus) protocol — because sperm production happens under Test control (intratesticular) but requires its own separate Sertoli FSH stimulus.",
  "dosingInfo": "Male spermatogenesis induction (stacked with HCG): 75-150 IU SC 3x/week (e.g. Mon/Wed/Fri) × 6-24 months. The HCG background dose is 1500-3000 IU SC 2-3x/week initially (Leydig stimulus first → Test normalizes within 3-6 months), then rFSH is added. Female IVF / ovarian stimulus: 75-450 IU/day SC, individualized based on ovarian response (ultrasound follicle monitoring + serum E2 titration). Reconstitution: Gonal-F pre-filled pen (calibrated in 12.5 IU steps, 300/450/900 IU multi-dose cartridge); Puregon ampoule + bact water (50/75/100/150 IU dose forms); Bemfola pre-filled disposable pen. SC injection (abdominal or thigh tissue, 27-30G insulin syringe or pen needle). Sterile practice: alcohol clean, DO NOT shake (denaturation).",
  "studies": [
    {
      "title": "Induction of spermatogenesis by recombinant follicle-stimulating hormone (puregon) in hypogonadotropic azoospermic men who failed to respond to human chorionic gonadotropin alone",
      "authors": "Bouloux PM, Nieschlag E, Burger HG, Skakkebaek NE, Wu FC, Handelsman DJ, et al.",
      "journal": "J Androl. 2003;24(4):604-11.",
      "pmid": "11744708"
    },
    {
      "title": "Predictors of fertility outcome in gonadotropin-deficient men: a clinical perspective",
      "authors": "Liu PY, Baker HW, Jayadev V, Zacharin M, Conway AJ, Handelsman DJ.",
      "journal": "J Clin Endocrinol Metab. 2009;94(3):801-8.",
      "pmid": "19389810"
    },
    {
      "title": "Recombinant FSH versus highly purified urinary FSH: a randomized clinical trial in intrauterine insemination with husbands' sperm",
      "authors": "Matorras R, et al.",
      "journal": "Reprod Biomed Online. 2009;19(2):216-22.",
      "pmid": "16735417"
    }
  ],
  "legalStatus": "USA: FDA Rx Gonal-F (Merck-Serono, 1997 approval), Follistim (MSD, 1997). EU: EMA Rx Gonal-F (1995), Puregon (Organon → MSD, 1996), Bemfola (Gedeon Richter, 2014 — biosimilar with Gonal-F as reference). HU: registered (Gonal-F, Puregon, Bemfola — Hungarian manufacturer GR advantage). PL: registered (Gonal-F, Puregon, Bemfola). Indications: male hypogonadotropic hypogonadism (spermatogenesis induction), female IVF ovarian stimulus, anovulation. Mandatory Rx + specialist (endocrinologist, reproductive medicine, urology). WADA: S2.1 Peptide Hormones (banned in-competition + out-of-competition year-round for all male athletes; no exception).",
  "onsetTime": "Hormonal response (Sertoli activation, inhibin-B rise) 24-72 hours; clinical spermatogenesis effect 3-6 months on HCG combination (spermatogenesis cycle 64-74 days)",
  "halfLife": "24-36 hours after SC injection (longer than urinary FSH ~18-24 hours)",
  "interactionsWith": [
    "hcg-peptid",
    "hmg-peptid",
    "anastrozol",
    "letrozol",
    "kisspeptin"
  ],
  "wadaStatus": "banned",
  "related": [
    "hcg-peptid",
    "hmg-peptid",
    "fsh-rec-perf",
    "kisspeptin"
  ],
  "faq": [
    {
      "q": "Why isn't HCG alone enough for male fertility restoration?",
      "a": "HCG only activates the Leydig cell LHCGR receptor → testicular testosterone production is restored, libido + erection + Test-driven tissues return. BUT spermatogenesis happens in Sertoli cells, which require FSH stimulus. On HCG monotherapy, the 'Test level restored, but azoospermia persists' scenario is common — particularly after hard-suppression long cycles or multi-year AAS, or in congenital HypoH. Bouloux 2003 (PMID 11744708) documents exactly this: in HCG-non-responder azoospermic men, Puregon addition produces spermatogenesis recovery in 60-80%. Classic protocol: HCG for 3-6 months (Leydig priming), then HCG+rFSH dual for 6-24 months (full HPG axis stimulus)."
    },
    {
      "q": "rFSH vs HMG (Menopur) — when to choose which?",
      "a": "Two factors decide. (1) **Purity need**: rFSH is 100% FSH (NO LH contamination), HMG is mixed FSH+LH ~1:1 (urinary-extracted). If the patient is already on HCG (Leydig stimulus covered), rFSH selectivity is more logical — the LH overlap (HMG) is redundant. (2) **Cost**: rFSH (Gonal-F) ~€300-400/75 IU in the EU, HMG (Menopur) ~€20-25/75 IU — over a 12-24 month protocol the difference is €5000-15000. Clinical outcome (Matorras 2009 PMID 16735417, in intrauterine insemination context) is similar; rFSH only wins on purity + dose-precision reproducibility. On the Hungarian market, Bemfola (Gedeon Richter biosimilar) sits at intermediate pricing, the compromise choice."
    },
    {
      "q": "Why is ovarian response monitoring required in female IVF?",
      "a": "Inter-individual ovarian response to rFSH stimulus is EXTREMELY variable (poor responder vs hyper-responder spectrum). OHSS (Ovarian Hyperstimulation Syndrome) can be a life-threatening complication in hyper-responders — without adequate monitoring. Standard IVF protocol: start 75-150 IU/day (225-300 IU on suspected poor responders), ovarian ultrasound follicle counting every 2-3 days + serum E2 titration. If E2 >4000 pmol/L or follicle count >20 → OHSS risk; GnRH agonist trigger or cycle cancellation recommended. This is mandatory reproductive-endocrinologist + IVF-clinic-setting work, NOT a self-administered protocol."
    },
    {
      "q": "What can I expect from an rFSH+HCG protocol in Kallmann syndrome?",
      "a": "Kallmann syndrome (congenital GnRH deficiency + anosmia) is a classic indication. Liu 2009 (PMID 19389810) protocol: HCG 1500-3000 IU 2-3x/week × 3-6 months (Leydig priming → endogenous Test target 12-20 nmol/L), then rFSH 75-150 IU 3x/week added. Spermatogenesis restoration outcome: 60-80% across patients, expected timeframe 12-24 months. Sperm count typically stabilizes around the lower end of the normal range (5-20 million/mL), sufficient for IUI or IVF-ICSI fertility goals. Cryopreservation recommended after a successful protocol (multi-cycle repetition does NOT guarantee recovery stability)."
    },
    {
      "q": "Cross-frame: is this the same molecule as `fsh-rec-perf`?",
      "a": "Yes, identical molecule — same Gonal-F/Puregon/Bemfola pharmacy product, same CHO-recombinant FSH glycoprotein. The DIFFERENCE is only framing: `fsh-rec-peptid` (this entry) in clinical-Rx fertility context (HypoH spermatogenesis induction, IVF male/female-factor), while `fsh-rec-perf` in AAS-PCT FSH-axis-recovery context (azoospermia recovery after hard-suppression long cycles, performance user). The user buys the same vial — they just read it through a different narrative. The clinical-Rx route runs through endocrinology + reproductive medicine clinic, the performance route as part of a self-administered AAS-PCT protocol — legally BOTH are Rx-only, performance use is off-label."
    }
  ],
  "anecdote": null
}
