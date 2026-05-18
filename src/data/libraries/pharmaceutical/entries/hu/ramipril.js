// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.577Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "ramipril",
  "name": "Ramipril",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "ACE-inhibitor (Sanofi Tritace/Altace). Hipertenzió + HFrEF + szekunder MI-prevenció. HOPE-trial-evidencia 1999 óta.",
  "description": "A Ramipril egy pro-drug ACE-inhibitor (aktív metabolit Ramiprilat), amelyet a Sanofi-Aventis fejlesztett ki (Tritace EU, Altace USA, FDA 1991). Az angiotenzin-konvertáló enzim szelektív gátlása csökkenti az angiotenzin-II képződését, ami vazodilatációhoz és aldoszteron-szuppresszióhoz vezet. A HOPE-trial (Yusuf 2000 NEJM PMID 10639539) szerint a Ramipril szignifikáns MACE-csökkenést okoz magas-rizikó kardiovaszkuláris betegekben, függetlenül a vérnyomás-csökkentő hatástól (pleiotróp endotel-funkció-javítás).",
  "mechanism": "ACE-enzim szelektív gátlása → angiotenzin-II csökkenés → vazodilatáció + aldoszteron-szuppresszió + bradykinin-akkumuláció (köhögés-mechanizmus).",
  "legalStatus": "EU/HU: vényköteles (Tritace, Amprilan, Piramil, generikus). USA: FDA Rx (Altace).",
  "bioavailability": "28% (orális, ramipril prodrug; 44% ramiprilat aktív metabolitra — FDA Altace label, 5 mg dózis)",
  "onsetTime": "1-2 h (acute BP), 3-4 weeks (steady-state)",
  "halfLife": "13-17 h (active ramiprilat, once-daily)",
  "atcCode": "C09AA05",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Hipertenzió, HFrEF",
    "Szekunder MI- és stroke-prevenció (HOPE-evidencia)",
    "Diabéteszes nefropátia"
  ],
  "contraindications": [
    "Terhesség (FDA D-X kategória, fetális vesekárosodás)",
    "Bilaterális artéria renalis stenosis",
    "Angioedéma anamnézis (különösen örökletes)"
  ],
  "commonSideEffects": [
    "Száraz, irritáló köhögés (5-20%, bradykinin-mechanizmus — ARB-cserével mitigálható)",
    "Hyperkalémia (különösen vesefunkció-zavarnál vagy K-spóroló diuretikummal)",
    "Ortosztatikus hipotenzió (első dózis), szédülés",
    "Súlyos, ritka: angioedéma (~0,1-0,7%, sürgősségi), akut vesekárosodás bilaterális renalis-stenosisban"
  ],
  "cyp450": [
    "Hydrolyzed by hepatic carboxylesterase (not CYP-dependent)",
    "Active ramiprilat eliminated renally"
  ],
  "crossMolInteractions": [
    "K-spóroló diuretikum (Spironolactone): hyperkalémia kockázat fokozása",
    "NSAID: vesefunkció-romlás, BP-csökkentő hatás csökkenése",
    "ARB (Losartan), DRI (Aliskiren): dupla RAS-blokk — kerülendő",
    "Lithium: lithium-szint emelkedhet, monitor"
  ],
  "benefits": [
    "MACE-redukció magas-rizikójú betegen (HOPE, 22%)",
    "HFrEF-mortalitás csökkentés",
    "Diabéteszes nefropátia-progresszió csökkentés"
  ],
  "studies": [
    {
      "title": "Effects of ramipril on cardiovascular and microvascular outcomes (HOPE)",
      "authors": "Yusuf S, Sleight P, Pogue J et al.",
      "journal": "N Engl J Med. 2000;342(3):145-53.",
      "pmid": "10639539"
    },
    {
      "title": "Ramipril versus placebo in patients with left ventricular dysfunction post-MI (AIRE)",
      "authors": "AIRE Study Investigators.",
      "journal": "Lancet. 1993;342(8875):821-8.",
      "pmid": "8104270"
    }
  ],
  "related": [
    "bisoprolol",
    "amlodipine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1-2 (start)",
        "dose": "2.5"
      },
      {
        "phase": "Hét 3+ (cél)",
        "dose": "5"
      },
      {
        "phase": "Max-dózis",
        "dose": "10"
      }
    ],
    "unit": "mg/nap",
    "note": "Reggel bevenni. Első dózisnál ortosztázis-figyelmeztetés. Kreatinin és K+ kontroll 2-4 hét után. Köhögés esetén ARB-csere (Losartan, Telmisartan)."
  }
}
