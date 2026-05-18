// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.571Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "acarbose",
  "name": "Acarbose",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Alpha-glükozidáz inhibitor, Bayer Glucobay. Postprandiális glükóz-csökkentő, főleg ázsiai T2DM-populációkban népszerű.",
  "description": "Az Acarbose egy pszeudotetrasacchaaridot, amely a vékonybél kefeszegélyén az alpha-glükozidáz enzimet kompetitíven gátolja, lassítva a szénhidrát-hidrolízist és a glükóz-felszívódást. Ennek eredménye a postprandiális glükóz-csúcsok csökkentése. Az UKPDS-en kívüli legjelentősebb evidencia a STOP-NIDDM trial (Chiasson 2002 Lancet PMID 12086760), ami a prediabétesz T2DM-progressziójának 25%-os csökkentését mutatta. Az Acarbose nem szisztémás (csak bélben aktív), ezért hipoglikémia-kockázat monoterápiában gyakorlatilag nulla. Jelenleg főleg Ázsiában (Kína, Japán) népszerű, ahol a magas-CHO étrend miatt a postprandiális glükóz-management klinikailag releváns.",
  "mechanism": "Alpha-glükozidáz enzim (szacharáz, maltáz, glukoamiláz) kompetitív gátlása a bél kefeszegélyén. Eredmény: a komplex szénhidrátok lassabban bomlanak glükózra, a postprandiális glükóz-csúcs lecsökken és kitolódik.",
  "legalStatus": "EU/HU: vényköteles (Glucobay). USA: FDA Rx (Precose).",
  "onsetTime": "Acute (per-meal effect), 4-8 weeks (HbA1c)",
  "halfLife": "~2 h (minimally absorbed, mostly bowel-active)",
  "atcCode": "A10BF01",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "2-es típusú cukorbetegség, postprandiális glükóz-management",
    "Prediabétesz (T2DM-progresszió csökkentése, STOP-NIDDM evidencia)"
  ],
  "contraindications": [
    "Krónikus bélgyulladás (IBD, colitis ulcerosa)",
    "Hasi diszfunkció, bélelzáródás-hajlam",
    "Súlyos vesefunkció-zavar (eGFR < 25)"
  ],
  "commonSideEffects": [
    "GI: flatulencia (30-60%), hasi puffadás, hasmenés (érdemes lassan emelni a dózist)",
    "Súlyos, ritka: emelkedett májfunkciós értékek (ALT > 3x ULN), pneumatosis intestinalis"
  ],
  "cyp450": [
    "Minimally absorbed (<2%)",
    "No CYP metabolism"
  ],
  "crossMolInteractions": [
    "Insulin, sulfonylureák: hipoglikémia esetén CSAK glükóz (NEM szacharóz/maltóz) gyors emelkedéshez vezet",
    "Digoxin: plazma-szint csökkenhet, monitor"
  ],
  "benefits": [
    "HbA1c-csökkenés 0,5-1,0% (mérsékelt, postprandiális fókuszú)",
    "Súlyneutrális (vs sulfonylureák súlygyarapodás)",
    "Hipoglikémia-rizikó nulla monoterápiában",
    "STOP-NIDDM: T2DM-prevenció prediabétesznél"
  ],
  "studies": [
    {
      "title": "Acarbose for prevention of type 2 diabetes mellitus (STOP-NIDDM)",
      "authors": "Chiasson JL, Josse RG, Gomis R et al.",
      "journal": "Lancet. 2002;359(9323):2072-7.",
      "pmid": "12086760"
    },
    {
      "title": "Acarbose vs metformin in newly-diagnosed T2DM Chinese patients (MARCH)",
      "authors": "Yang W, Liu J, Shan Z et al.",
      "journal": "Lancet Diabetes Endocrinol. 2014;2(1):46-55.",
      "pmid": "24622668"
    },
    {
      "title": "Acarbose cardiovascular evaluation (ACE) in patients with coronary heart disease",
      "authors": "Holman RR, Coleman RL, Chan JCN et al.",
      "journal": "Lancet Diabetes Endocrinol. 2017;5(11):877-886.",
      "pmid": "28917545"
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1-2 (start)",
        "dose": "25"
      },
      {
        "phase": "Hét 3-4",
        "dose": "50"
      },
      {
        "phase": "Cél (3x/nap)",
        "dose": "100"
      }
    ],
    "unit": "mg étkezésenként",
    "note": "Étkezés ELEJÉN bevenni (az első falattal). Lassú titráció a GI-tolerancia érdekében. Hipoglikémia kezelése: CSAK tiszta glükóz (NEM szacharóz/maltóz) emeli a vércukrot Acarbose alatt."
  }
}
