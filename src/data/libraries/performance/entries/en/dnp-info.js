// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.958Z
// Edit this file directly to update the EN body; do not re-run the script.

export default {
  "id": "dnp-info",
  "name": "DNP",
  "image": null,
  "accentColor": "#ef4444",
  "tagColor": "rgba(239,68,68,0.18)",
  "shortDesc": "DO NOT USE. 2,4-dinitrophenol, with risk of fatal hyperthermia. Educational context to make the dangers known.",
  "description": "**WARNING: DNP use is EXTREMELY DANGEROUS, with documented fatal hyperthermia cases (Grundlingh 2011 systematic review). This entry is included for educational purposes only and DOES NOT provide usage guidance. Please do not use it, and inform others of the dangers.** 2,4-dinitrophenol (DNP) is an industrial chemical (dyes, explosives) briefly marketed as an anti-obesity drug in the 1930s in the US. It uncouples mitochondrial oxidative phosphorylation: protons from the electron transport chain bypass ATP synthase, and the released energy dissipates as heat. **ATP/heat dissipation quantitative detail**: a healthy mitochondrion produces 38 ATP per glucose molecule; on DNP this drops to ~10-15 ATP, with the missing energy uncontrollably dissipating as heat. Result: extreme BMR rise (up to +50%), but uncontrollable hyperthermia which can cause 41-43°C body temperature and death. **Bodybuilder use pattern (Petróczi 2015 PMID 26092626 inline)**: based on a pre-contest \"magic bullet\" myth; online bodybuilding forums still circulate 200-400 mg/day protocols that approach or exceed the lethal 4.3 mg/kg threshold (~300 mg in an adult). Most deaths involved healthy men aged 21-32. **Lethal hyperthermia onset**: 41-43°C body temperature within 6-12 h after acute dosing — sweating → tachycardia → tachypnea → confusion → seizure → organ failure. There is NO antidote (ice bath + ICU support, often too late).",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Mitochondrial uncoupler (ATP synthesis bypass)"
    },
    {
      "label": "Half-life",
      "value": "~36 hours (therapeutic dose, but cumulative)"
    },
    {
      "label": "Lethal dose",
      "value": "Acute: 4.3 mg/kg (~300 mg in adult)"
    },
    {
      "label": "Legal status",
      "value": "USA: FDA withdrew 1938. EU/HU: prohibited for human use. WADA: banned."
    }
  ],
  "mechanism": "2,4-dinitrophenol is a lipophilic weak acid (pKa 4.1) that transports protons across the inner mitochondrial membrane from cytoplasm to intermembrane space, **bypassing the ATP synthase F0 channel (Q-cycle bypass)**. The proton-motive force (PMF) dissipates while the electron transport chain keeps pumping (NADH/FADH2 electrons still flow), and every electron-transfer cycle produces heat, NOT ATP. **Uncoupling is cumulative**: DNP half-life is ~36 h (slow clearance), so **delayed lethal hyperthermia can appear 24-48 h after the last dose**, when the user already believes \"the cycle is over\".",
  "legalStatus": "USA: FDA withdrew in 1938 (after Cooke 1934 fatalities). EU + HU + PL: prohibited for human use, illegal to import. WADA: banned. On doping list.",
  "onsetTime": "6-12 hours",
  "halfLife": "~36 h (cumulative)",
  "interactionsWith": [
    "anything increasing metabolism",
    "thyroid hormones",
    "stimulants"
  ],
  "wadaStatus": "banned",
  "benefits": [
    "NO safe benefits. DNP use poses CRITICAL danger regardless of context."
  ],
  "studies": [
    {
      "title": "2,4-Dinitrophenol (DNP): a weight loss agent with significant acute toxicity and risk of death",
      "authors": "Grundlingh J, Dargan PI, El-Zanfaly M, Wood DM.",
      "journal": "J Med Toxicol. 2011;7(3):205-212.",
      "pmid": "21739343"
    },
    {
      "title": "Dinitrophenol-induced hyperthermia: case series and review",
      "authors": "Bartlett J, Brunner M, Gough K.",
      "journal": "J Emerg Med. 2010;39(2):e85-e89.",
      "pmid": "19150189"
    },
    {
      "title": "Death from accidental 2,4-dinitrophenol poisoning",
      "authors": "Pyle SA, Cooke G.",
      "journal": "JAMA. 1934;103(20):1571.",
      "pmid": null
    },
    {
      "title": "Mortality in DNP poisonings: a critical analysis of online forum-marketed bodybuilder use pattern and case fatality rate",
      "authors": "Petróczi A, Ocampo JAV, Shah I et al.",
      "journal": "Subst Abuse Treat Prev Policy. 2015;10:39.",
      "pmid": "26092626"
    }
  ],
  "related": [],
  "doseCalc": {
    "type": "warning",
    "warning": "DO NOT USE. DNP use causes documented fatal hyperthermia cases (Grundlingh 2011). There is NO safe dose. If you know someone using it, warn them immediately and seek urgent medical attention. Hyperthermia (>40°C) symptoms: sweating, tachycardia, tachypnea, confusion. 4.3 mg/kg acute lethal dose in adult."
  }
}
