// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.569Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "empagliflozin",
  "name": "Empagliflozin",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "SGLT2-inhibitor (Jardiance), Boehringer Ingelheim/Eli Lilly. T2DM + HFrEF/HFpEF + CKD kardio-reno-protektív gyógyszer.",
  "description": "Az Empagliflozin egy szelektív SGLT2-inhibitor (sodium-glucose cotransporter 2), amely a vesetubulus proximális szakaszában gátolja a glükóz-reabszorpciót, ezzel napi 60-90 g glükóz-vesztést okoz vizelettel (glikozúria). FDA-jóváhagyott T2DM-re (2014), HFrEF-re (EMPEROR-Reduced 2020 PMID 32865377), HFpEF-re (EMPEROR-Preserved 2021 PMID 34449189), és CKD-re (EMPA-KIDNEY 2023 PMID 36331190). Az EMPA-REG OUTCOME trial (Zinman 2015 NEJM PMID 26378978) volt az első MACE-pozitív SGLT2-i trial — 38% relatív kardiovaszkuláris halálozás-csökkenést mutatott T2DM + ASCVD-betegen.",
  "mechanism": "SGLT2 (sodium-glucose cotransporter 2) szelektív gátlása a proximális vesetubulusban. Eredmény: 60-90 g/nap glükóz-vesztés vizelettel, ami a HbA1c-t csökkenti és insulin-független mechanizmussal. Másodlagos hatások: ozmotikus diurézis (vérnyomás-csökkentés), nephron-szintű hatás (intraglomeruláris nyomás csökkentés, CKD-protektív), ketonszint enyhe emelése (kardio-protektív).",
  "legalStatus": "EU/HU: vényköteles (Jardiance, Synjardy = Empagliflozin + Metformin). USA: FDA Rx.",
  "bioavailability": "~78% (orális — FDA Jardiance label, Section 12.3)",
  "onsetTime": "1-2 weeks (BP, HbA1c)",
  "halfLife": "~12.4 h (once-daily dosing)",
  "atcCode": "A10BK03",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "2-es típusú cukorbetegség, Metformin-kiegészítés vagy önállóan",
    "Szívelégtelenség (HFrEF + HFpEF, függetlenül T2DM-től)",
    "Krónikus vesebetegség (CKD, eGFR ≥ 20)"
  ],
  "contraindications": [
    "Súlyos vesefunkció-zavar (eGFR < 20 ml/min/1,73 m²)",
    "Diabéteszes ketoacidózis anamnézis (eu-DKA-kockázat)",
    "Volémiás dehidráció, szepszis"
  ],
  "commonSideEffects": [
    "Genitális mycotikus infekciók (vulvovaginitis, balanitis, ~5-10%)",
    "Húgyúti infekciók (UTI, 2-3% feletti incidencia)",
    "Volumen-depléció, hipotenzió (idős, diuretikum-szedő)",
    "Súlyos, ritka: eu-DKA (vércukor < 250 mg/dl is lehet), Fournier-gangréna (perineális nekrotizáló fasciitis, FDA warning)"
  ],
  "cyp450": [
    "Glucuronidation primary metabolism (UGT2B7, UGT1A3, UGT1A8, UGT1A9)",
    "No significant CYP interaction"
  ],
  "crossMolInteractions": [
    "Diuretikum (loop, thiazide): additív volumen-depléció",
    "Insulin, sulfonylureák: hipoglikémia-kockázat, dóziscsökkentés",
    "Metformin: szinergisztikus (Synjardy fix kombináció)"
  ],
  "benefits": [
    "MACE-redukció 38% (EMPA-REG OUTCOME)",
    "HFrEF/HFpEF hospitalizáció és kardiovaszkuláris halálozás csökkentése",
    "CKD progresszió-csökkentés (EMPA-KIDNEY)",
    "Testsúlyvesztés (~2-3 kg), vérnyomás-csökkentés (~3-5 mmHg)"
  ],
  "studies": [
    {
      "title": "Empagliflozin, cardiovascular outcomes, and mortality in T2DM (EMPA-REG OUTCOME)",
      "authors": "Zinman B, Wanner C, Lachin JM et al.",
      "journal": "N Engl J Med. 2015;373(22):2117-28.",
      "pmid": "26378978"
    },
    {
      "title": "Cardiovascular and renal outcomes with empagliflozin in heart failure (EMPEROR-Reduced)",
      "authors": "Packer M, Anker SD, Butler J et al.",
      "journal": "N Engl J Med. 2020;383(15):1413-1424.",
      "pmid": "32865377"
    },
    {
      "title": "Empagliflozin in heart failure with a preserved ejection fraction (EMPEROR-Preserved)",
      "authors": "Anker SD, Butler J, Filippatos G et al.",
      "journal": "N Engl J Med. 2021;385(16):1451-1461.",
      "pmid": "34449189"
    },
    {
      "title": "Empagliflozin in patients with chronic kidney disease (EMPA-KIDNEY)",
      "authors": "EMPA-KIDNEY Collaborative Group.",
      "journal": "N Engl J Med. 2023;388(2):117-127.",
      "pmid": "36331190"
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 10,
      "medium": 10,
      "high": 25
    },
    "unit": "mg/nap",
    "note": "Standard dózis 10 mg/nap reggel, 25 mg/nap-ig emelhető HbA1c-cél elérésére. HFrEF/HFpEF indikációban 10 mg/nap fix, dóziseszkaláció nem indokolt. eGFR < 30: dóziscsökkentés vagy elhagyás. Étkezéstől függetlenül."
  }
}
