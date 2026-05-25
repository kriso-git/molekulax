// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.598Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "methylphenidate",
  "name": "Methylphenidate",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "DAT/NET inhibitor stimulant, ADHD first-line Rx (Novartis Ritalin, Janssen Concerta). DEA Schedule II, significant abuse potential.",
  "description": "Methylphenidate is a psychostimulant synthesized in 1944, approved in 1954 for child hyperactivity, since 1990s the first-line ADHD treatment. DAT and NET reuptake inhibition raises synaptic dopamine and norepinephrine in prefrontal cortex, improving executive function (attention, impulse control, working memory) in ADHD. DEA Schedule II (USA), with corresponding Rx tightening. IR (Ritalin, 3-5 h) and ER/OROS (Concerta 10-12 h) forms. MTA trial (1999 JAMA, 14-month follow-up) showed stimulant + behavioral therapy combination superior. Abuse potential: crushed-inhaled or IV-injected produces amphetamine-like euphoria, hence XR forms preferred.",
  "mechanism": "DAT (dopamine transporter) and NET (norepinephrine transporter) reuptake inhibition. Differs from amphetamine: methylphenidate \"only\" inhibits and does not reverse the transporter (amphetamine causes VMAT2-level DA release, hence stronger euphoria).",
  "legalStatus": "EU/HU: prescription, controlled drug regulation (Ritalin, Concerta, Medikinet). USA: DEA Schedule II.",
  "bioavailability": "22 ± 8% (d-methylphenidate), 5 ± 3% (l-methylphenidate) — oral, children; high first-pass — FDA Ritalin label",
  "onsetTime": "IR: 30-45 min; ER/OROS: 1-2 h; effect lasts 3-5 h (IR), 10-12 h (Concerta OROS)",
  "halfLife": "IR: 3-5 h; ER/OROS: 6-8 h (effective duration 10-12 h via osmotic delivery)",
  "atcCode": "N06BA04",
  "prescriptionStatus": "Prescription only (Rx), DEA Schedule II (USA), HU narcotic Rx",
  "indications": [
    "ADHD (child 6+ yr, adolescent, adult)",
    "Narcolepsy (second-line after modafinil)"
  ],
  "contraindications": [
    "MAOi within 14 days (hypertensive crisis)",
    "Severe CV disease (LV hypertrophy, severe hypertension, coronary insufficiency)",
    "Hyperthyroidism, angle-closure glaucoma",
    "Active substance dependence, psychotic symptom history (relative)"
  ],
  "commonSideEffects": [
    "Decreased appetite (~30%), weight loss, mild growth slowing in children",
    "Insomnia (avoid late-day dosing), anxiety increase, irritability",
    "Tachycardia, BP elevation (moderate)",
    "Severe, rare: psychotic reaction (new-onset), cardiac event (in preexisting disease), Raynaud syndrome (chronic), priapism"
  ],
  "cyp450": [
    "Minimal CYP metabolism (de-esterification by CES1A1)",
    "No major CYP interactions"
  ],
  "crossMolInteractions": [
    "MAOi: ABSOLUTE contraindication",
    "Beta-blocker: extreme hypertensive reaction, avoid combination",
    "Antihypertensives effect may decrease",
    "Alcohol: increased CV risk, avoid"
  ],
  "benefits": [
    "ADHD symptoms (attention, impulse control, working memory) significantly improve",
    "OROS formulation (Concerta) 12-hour effect, ideal for child school day",
    "MTA trial: superior with behavioral therapy combination"
  ],
  "studies": [
    {
      "title": "A 14-month randomized clinical trial of treatment strategies for ADHD (MTA Cooperative Group)",
      "authors": "MTA Cooperative Group.",
      "journal": "Arch Gen Psychiatry. 1999;56(12):1073-86.",
      "pmid": "10591283"
    },
    {
      "title": "Methylphenidate for attention deficit hyperactivity disorder (ADHD) in children and adolescents",
      "authors": "Storebø OJ, Pedersen N, Ramstad E et al.",
      "journal": "Cochrane Database Syst Rev. 2018;5:CD012069.",
      "pmid": "29744873"
    },
    {
      "title": "Attention-deficit hyperactivity disorder, multimodal treatment, and longitudinal outcome: evidence, paradox, and challenge.",
      "authors": "Hinshaw SP, Arnold LE, MTA Cooperative Group",
      "journal": "Wiley Interdiscip Rev Cogn Sci",
      "pmid": "26262927"
    }
  ],
  "related": [
    "modafinil",
    "bupropion"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Week 1 (start, IR)",
        "dose": "5"
      },
      {
        "phase": "Week 2 (IR 2-3x/day)",
        "dose": "10"
      },
      {
        "phase": "Concerta XR (adult target)",
        "dose": "36"
      },
      {
        "phase": "Max dose (adult)",
        "dose": "72"
      }
    ],
    "unit": "mg/nap",
    "note": "IR: 5-10 mg 2-3x/day morning-noon (DO NOT take after 4 PM, insomnia risk). Concerta OROS: once-daily morning, 18-72 mg, max 72 mg/day adult. Strict Rx monitoring due to abuse potential. Annual child growth and BP check."
  },
  "anecdote": "Anecdotal reports describe Methylphenidate as a clean, well-titrated DAT/NET inhibitor for ADHD, with strong dopaminergic wakefulness comparable to first-line stimulants. Community accounts note a smoother, more focused subjective profile than many off-label alternatives, without aggressive mental pressure. Users with poor tolerance to peripheral stimulant effects often report better day-long stability on extended-release formulations (Concerta, Ritalin LA). Rx context emphasizes Schedule II status, abuse potential, and the need for clinician-monitored titration. Sleep architecture impact appears milder than amphetamine-class stimulants, though late-day dosing can still disrupt sleep onset."
}
