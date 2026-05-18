// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.576Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "rosuvastatin",
  "name": "Rosuvastatin",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Hidrofil, nagy-intenzitású statin (AstraZeneca Crestor). JUPITER-trial alapján primer ASCVD-prevenció emelt CRP-nél is. Kevés CYP-interakció.",
  "description": "A Rosuvastatin egy hidrofil HMG-CoA reduktáz-inhibitor (AstraZeneca Crestor, FDA 2003). Hatás-intenzitásban a legpotensebb statin — 40 mg/nap ~60-63%-os LDL-csökkenést okoz (vs Atorvastatin 80 mg ~55%). A JUPITER-trial (Ridker 2008 NEJM PMID 18997196) primer ASCVD-prevenciót igazolt emelt CRP-szintű, normo-LDL betegeknél. Kevésbé CYP-érintett mint Atorvastatin (főleg CYP2C9, kis CYP3A4), tehát kevesebb gyógyszer-interakció. Mellékhatás-profil hasonló a többi statinhoz.",
  "mechanism": "HMG-CoA reduktáz hidrofil kompetitív gátlása. Magasabb potencia, kevesebb pleiotróp lipofil-szerű hatás. CRP-csökkentés még normo-LDL-en is.",
  "legalStatus": "EU/HU: vényköteles (Crestor, Roswera, generikus). USA: FDA Rx.",
  "onsetTime": "1-2 weeks (lipid), 4 weeks (steady-state LDL)",
  "halfLife": "19 h (once-daily, any time)",
  "atcCode": "C10AA07",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Primer hipercholesterolémia, FH",
    "Szekunder ASCVD-prevenció",
    "Primer prevenció emelt CRP-vel (JUPITER alapján)"
  ],
  "contraindications": [
    "Aktív májbetegség, terhesség, szoptatás",
    "Súlyos vesefunkció-zavar (eGFR < 30 — 40 mg dózisra)"
  ],
  "commonSideEffects": [
    "Izomfájdalom (3-5%), ALT/AST emelkedés (1-2%)",
    "Új T2DM kockázat enyhe növekedése",
    "Súlyos, ritka: rhabdomyolysis (proteinuria + hematuria 40 mg-on gyakoribb mint más statinoknál)"
  ],
  "cyp450": [
    "CYP2C9 substrate (minor)",
    "OATP1B1 substrate (significant)",
    "Less CYP3A4-dependent than atorvastatin"
  ],
  "crossMolInteractions": [
    "Cyclosporine: AUC 7x emelkedés, kontraindikált 5 mg dózis felett",
    "Gemfibrozil: rhabdomyolysis-kockázat, kerülendő",
    "Warfarin: enyhe INR-emelkedés"
  ],
  "benefits": [
    "Legpotensebb statin (40 mg ~60-63% LDL-csökkenés)",
    "Kevesebb CYP-interakció vs Atorvastatin",
    "JUPITER: primer ASCVD-prevenció CRP-vezérelt"
  ],
  "studies": [
    {
      "title": "Rosuvastatin to prevent vascular events in men and women with elevated CRP (JUPITER)",
      "authors": "Ridker PM, Danielson E, Fonseca FA et al.",
      "journal": "N Engl J Med. 2008;359(21):2195-207.",
      "pmid": "18997196"
    },
    {
      "title": "Intensive lipid lowering with atorvastatin in coronary disease (TNT) reference",
      "authors": "LaRosa JC, Grundy SM, Waters DD et al.",
      "journal": "N Engl J Med. 2005;352(14):1425-35.",
      "pmid": "15755765"
    },
    {
      "title": "Efficacy and safety of cholesterol-lowering treatment (CTT)",
      "authors": "Baigent C, Blackwell L, Emberson J et al.",
      "journal": "Lancet. 2010;376(9753):1670-81.",
      "pmid": "21067804"
    }
  ],
  "related": [
    "atorvastatin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 5,
      "medium": 20,
      "high": 40
    },
    "unit": "mg/nap",
    "note": "Alacsony (5 mg ~38%): érzékeny páciens, indító dózis. Mérsékelt (10-20 mg ~46-55%): standard. Magas (40 mg ~60-63%): FH vagy magas-rizikójú szekunder prevenció. Étkezéstől függetlenül."
  }
}
