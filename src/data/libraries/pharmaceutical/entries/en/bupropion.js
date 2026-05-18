// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.590Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "bupropion",
  "name": "Bupropion",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Norepinephrine-dopamine reuptake inhibitor (NDRI) atypical antidepressant. Indications: MDD, seasonal affective disorder, smoking cessation (Zyban). No sexual dysfunction, minimally sedating.",
  "description": "Bupropion is an atypical antidepressant developed by GlaxoSmithKline (Wellbutrin, FDA 1989). Its NDRI (norepinephrine-dopamine reuptake inhibitor) and nicotinic receptor antagonist mechanism distinguishes from SSRI/SNRI: no sexual dysfunction or weight gain, not sedating, supports smoking cessation (Zyban brand FDA 1997). FDA-approved indications: MDD, seasonal affective disorder (SAD), smoking cessation. Jorenby 1999 (NEJM PMID 10080847) trial showed 1-year abstinence 30.3% on bupropion+nicotine patch, vs 16.4% placebo. Hewett 2010 meta-analysis of 6 MDD trials demonstrated SSRI-comparable efficacy with better tolerability.",
  "keyInfo": [
    {
      "label": "ATC code",
      "value": "N06AX12"
    },
    {
      "label": "Prescription",
      "value": "Prescription only (Rx)"
    },
    {
      "label": "Mechanism",
      "value": "NDRI + nicotinic receptor antagonist"
    },
    {
      "label": "Half-life",
      "value": "~21 h (hydroxybupropion metabolite 20-37 h)"
    },
    {
      "label": "Onset",
      "value": "1-2 weeks (motivation, focus), 4-6 weeks (full AD effect)"
    }
  ],
  "mechanism": "Moderate norepinephrine and dopamine reuptake inhibition (NDRI, ~3x DAT/NET selectivity vs SERT), plus neuronal nicotinic receptor (α3β2, α4β2) antagonism. The nicotinic block explains smoking-cessation effect: reduces the dysphoric component of nicotine withdrawal. Active metabolite (hydroxybupropion) similarly active, with CYP2B6-catalyzed formation showing major interindividual variability.",
  "legalStatus": "EU/HU: prescription only (Wellbutrin, Zyban smoking-cessation, generics). USA: FDA Rx, not scheduled. SR (sustained release) and XL (extended release) formulations standard. Generic forms widely available.",
  "bioavailability": "Not characterized as absolute (no IV formulation exists); rapid oral absorption, Tmax ~3 h — FDA Wellbutrin label",
  "onsetTime": "1-2 weeks (motivation, focus, energy), 4-6 weeks (full antidepressant response)",
  "halfLife": "~21 h (parent); hydroxybupropion metabolite 20-37 h, similar activity",
  "atcCode": "N06AX12",
  "prescriptionStatus": "Prescription only (Rx), prescribed for MDD and smoking cessation",
  "indications": [
    "Major depressive disorder (MDD), especially with low motivation/anergia",
    "Seasonal affective disorder (SAD)",
    "Smoking cessation (Zyban, FDA 1997)",
    "SSRI-induced sexual dysfunction augmentation (off-label)",
    "ADHD (off-label, second-line after stimulants)"
  ],
  "contraindications": [
    "Seizure disorder (epilepsy) history or known predisposition",
    "Eating disorders (bulimia, anorexia nervosa) — elevated seizure risk",
    "Acute alcohol or benzodiazepine withdrawal (seizure risk)",
    "Concurrent or within-14-days MAOi use (hypertensive crisis)"
  ],
  "commonSideEffects": [
    "Insomnia (15-20%), dry mouth (10-15%), headache (10%)",
    "Agitation, anxiety increase (5-10%) — mainly in first weeks",
    "Blood pressure elevation (moderate, dose-dependent)",
    "Tremor, sweating, weight loss (5-8%)",
    "Severe, rare: seizure (0.1% at standard dose, 0.4% at 450 mg — DOSE-DEPENDENT), psychotic symptoms, mania (in BD patients)"
  ],
  "cyp450": [
    "CYP2B6 substrate (primary metabolism)",
    "CYP2D6 inhibitor (strong, clinically significant)",
    "Multiple CYP interactions"
  ],
  "crossMolInteractions": [
    "MAOi (selegiline, phenelzine, linezolid): ABSOLUTE contraindication, hypertensive crisis",
    "CYP2D6 substrates (metoprolol, tamoxifen, codeine, risperidone): plasma levels may rise",
    "CYP2B6 inhibitors (ticlopidine, clopidogrel): bupropion AUC may rise, seizure risk",
    "Alcohol: lowers seizure threshold, avoid",
    "Tramadol, theophylline, trazodone: lower seizure threshold, cautious combination"
  ],
  "benefits": [
    "MDD remission similar to SSRI (Hewett 2010 meta) but with LESS sexual dysfunction",
    "Weight NEUTRAL or weight loss (vs SSRI common weight gain)",
    "Smoking cessation 30.3% 1-year abstinence (Jorenby 1999 NEJM)",
    "Not sedating, improves motivation and energy",
    "As SSRI augmentation, mitigates sexual side effects"
  ],
  "quickStart": [
    "Start with SR formulation: 150 mg/day (morning) for 4 days, then 150 mg 2x/day",
    "XL formulation: 150 mg/day morning for 7 days, then 300 mg/day morning",
    "DO NOT take in evening (insomnia risk) — last dose by 5 PM",
    "Max SR 400 mg/day, XL 450 mg/day — above this seizure risk grows EXPONENTIALLY",
    "DO NOT crush tablet (SR/XL formulation dose-dumping risk)"
  ],
  "expectations": [
    {
      "label": "Weeks 1-2",
      "body": "Motivation and energy improvement already noticeable. Dry mouth, mild anxiety increase. To mitigate insomnia adjust timing (morning)."
    },
    {
      "label": "Weeks 4-6",
      "body": "Full antidepressant response develops. PHQ-9 or HAM-D tracking. Slow dose escalation; do not exceed 450 mg/day."
    },
    {
      "label": "Smoking cessation weeks 7-12",
      "body": "Zyban protocol: start 1-2 weeks before target \"quit date\", continue 7-12 weeks. Nicotine patch combination doubles 1-year abstinence rate."
    }
  ],
  "quality": {
    "pure": [
      "GSK Wellbutrin XL (originator), Zyban (smoking-cessation), generic forms bioequivalent",
      "Hungarian market: Wellbutrin XR 150/300 mg, Zyban 150 mg"
    ],
    "caution": [
      "Seizure threshold lowering is DOSE-DEPENDENT: 300 mg/day = 0.1%, 450 mg/day = 0.4%, > 450 mg/day rises exponentially",
      "BP monitoring at initiation (mild elevation possible)",
      "Bipolar disorder: NDRI mania-induction risk, mood stabilizer required"
    ],
    "avoid": [
      "Seizure disorder (epilepsy) history",
      "Bulimia or anorexia nervosa",
      "Active alcohol or benzo withdrawal",
      "MAOi (concurrent or within 14 days)",
      "Linezolid or IV methylene blue (MAOI activity, serotonin syndrome risk)",
      "Abrupt antiepileptic or sedative-hypnotic withdrawal (lowered seizure threshold)",
      "Severe hepatic impairment (Child-Pugh ≥10) — contraindicated per FDA label"
    ]
  },
  "interactions": [
    "SSRI (sertraline, fluoxetine) augmentation: mitigates sexual dysfunction",
    "Naltrexone + bupropion (Contrave) — FDA weight management indication for obesity",
    "Nicotine patch: 30.3% 1-year abstinence (vs 16.4% placebo)",
    "Varenicline (Chantix): combination NOT recommended (additive CV risk)",
    "Stimulant ADHD drug (methylphenidate, lisdexamfetamine): cautious combination (seizure and CV risk)"
  ],
  "studies": [
    {
      "title": "A controlled trial of sustained-release bupropion, a nicotine patch, or both for smoking cessation",
      "authors": "Jorenby DE, Leischow SJ, Nides MA et al.",
      "journal": "N Engl J Med. 1999;340(9):685-91.",
      "pmid": "10080847"
    },
    {
      "title": "Bupropion versus paroxetine for the treatment of major depressive disorder",
      "authors": "Weihs KL, Settle EC Jr, Batey SR et al.",
      "journal": "J Clin Psychiatry. 2000;61(3):196-202.",
      "pmid": "10817105"
    },
    {
      "title": "Comparative efficacy and acceptability of 21 antidepressant drugs for major depressive disorder",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Bupropion sustained release in the treatment of seasonal affective disorder",
      "authors": "Modell JG, Rosenthal NE, Harriett AE et al.",
      "journal": "Biol Psychiatry. 2005;58(8):658-67.",
      "pmid": "16271317"
    },
    {
      "title": "Effects of naltrexone-bupropion on weight loss (COR-I trial)",
      "authors": "Greenway FL, Fujioka K, Plodkowski RA et al.",
      "journal": "Lancet. 2010;376(9741):595-605.",
      "pmid": "20673995"
    },
    {
      "title": "Bupropion and seizure risk: a systematic review",
      "authors": "Davidson J.",
      "journal": "J Clin Psychiatry. 1989;50(7):256-61.",
      "pmid": "2500425"
    },
    {
      "title": "Effects of bupropion sustained release on sexual function in nondepressed subjects with sexual side effects from SSRIs",
      "authors": "Clayton AH, Warnock JK, Kornstein SG et al.",
      "journal": "J Clin Psychiatry. 2004;65(1):62-7.",
      "pmid": "14744170"
    }
  ],
  "faq": [
    {
      "q": "Why doesn't bupropion cause sexual dysfunction, unlike SSRIs?",
      "a": "SSRI sexual dysfunction (libido decrease, delayed ejaculation, anorgasmia) occurs via high synaptic serotonin activating 5-HT2 receptors, inhibiting central sexual reactivity. Bupropion does NOT raise serotonin but raises DOPAMINE and NOREPINEPHRINE, which are pro-mediators of sexual arousal and libido. Therefore not only does it not cause sexual side effects, but as SSRI augmentation it can mitigate existing sexual dysfunction (Clayton 2004 PMID 14744170)."
    },
    {
      "q": "How real is the seizure risk?",
      "a": "At standard dose (SR ≤ 300 mg/day, XL ≤ 300 mg/day) seizure incidence is 0.1%, comparable to other antidepressants. At 400 mg/day 0.3%, 450 mg/day 0.4%, becoming significant. Predisposing factors: bulimia, anorexia, acute alcohol withdrawal, seizure history, epilepsy, head trauma. Prevention: slow titration, respect max SR 400 / XL 450 mg/day, choose SR over XL if twice-daily tolerable."
    },
    {
      "q": "How is Zyban used for smoking cessation?",
      "a": "Zyban protocol: 150 mg/day (morning) for 3 days, then 150 mg 2x/day (morning + afternoon, min. 8 h apart). Set \"quit date\" for day 7-14, NOT immediately. Continue 7-12 weeks with absolute abstinence. Nicotine patch combination doubles 1-year abstinence rate (Jorenby 1999 NEJM, 30.3% vs 16.4%). Acute insomnia, dry mouth, headache in initial weeks."
    },
    {
      "q": "Can it be combined with an SSRI?",
      "a": "Yes, common clinical strategy: SSRI (e.g. sertraline) + bupropion to mitigate SSRI-induced sexual dysfunction and/or augment incomplete AD response. NDRI mechanism complements SERT (dopamine+norepinephrine rise alongside serotonin). EXCEPTION: fluoxetine + bupropion combination needs added caution (fluoxetine is strong CYP2D6 inhibitor, bupropion is strong CYP2D6 inhibitor — cumulative CYP block)."
    },
    {
      "q": "Risk of weight gain?",
      "a": "Bupropion is weight NEUTRAL or mildly weight-reducing, contrary to SSRIs (sertraline: ~1-2 kg gain over 6 months; paroxetine: 2-4 kg). Naltrexone + bupropion (Contrave brand) has FDA-approved weight management indication for obesity: COR-I trial (Greenway 2010 Lancet PMID 20673995) showed 6.1% body weight loss on Contrave at 56 weeks vs 1.3% placebo. Clinical difference: switching from SSRI to bupropion is favorable for weight control."
    }
  ],
  "related": [
    "sertralin",
    "modafinil"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Week 1 (start, SR)",
        "dose": "150"
      },
      {
        "phase": "Week 2+",
        "dose": "300"
      },
      {
        "phase": "Incomplete response (max)",
        "dose": "450"
      }
    ],
    "unit": "mg/nap",
    "note": "SR 150 mg/day morning for 4 days, then 150 mg 2x/day (8+ h apart). XL 150 mg/day morning for 7 days, then 300 mg/day. Max SR 400 / XL 450 mg/day — above seizure risk grows EXPONENTIALLY. DO NOT take in evening. DO NOT crush tablet."
  }
}
