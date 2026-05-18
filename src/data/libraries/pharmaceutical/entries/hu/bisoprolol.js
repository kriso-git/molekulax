// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.577Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "bisoprolol",
  "name": "Bisoprolol",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Kardio-szelektív β1 blokkoló (Merck Concor). Hipertenzió + HFrEF + post-MI standard. CIBIS-II trial mortalitás-csökkentés.",
  "description": "A Bisoprolol egy magas-szelektivitású β1-adrenerg receptor antagonista (Merck Concor, FDA 1992). A β1/β2 szelektivitás ~75:1, ami a légúti és perifériás β2-mediált mellékhatásokat (bronchospasmus, vazokonstrikció) jelentősen csökkenti vs nem-szelektív β-blokkolók (Propranolol). A CIBIS-II trial (CIBIS-II 1999 Lancet PMID 9988345) szerint HFrEF-betegen 34%-os relatív mortalitás-csökkenést okoz. Standard a hipertenzió-, HFrEF- és post-MI-portfolió.",
  "mechanism": "β1-szelektív kompetitív antagonista. Negatív chronotrop (HR-csökkenés), negatív inotrop, negatív dromotop (AV-konduktancia-lassítás). Renin-csökkentés (juxtaglomeruláris β1-blokk).",
  "legalStatus": "EU/HU: vényköteles (Concor, Bisocard, generikus). USA: FDA Rx (Zebeta).",
  "bioavailability": "~80% (orális, 10 mg dózis — FDA Zebeta label)",
  "onsetTime": "1-2 h (acute HR), 1-2 weeks (steady BP)",
  "halfLife": "10-12 h (once-daily)",
  "atcCode": "C07AB07",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Hipertenzió, stabil angina",
    "HFrEF (CIBIS-II evidencia)",
    "Post-MI szekunder prevenció"
  ],
  "contraindications": [
    "Súlyos bradycardia (HR < 50), II-III fokú AV-blokk, sinusbradycardia",
    "Súlyos hipotenzió, kardiogén sokk",
    "Súlyos asztma, COPD (β2-bronchospasmus relatív kockázat)",
    "Akut dekompenzált HFrEF (csak stabil állapotban indítható)"
  ],
  "commonSideEffects": [
    "Bradycardia, ortosztatikus hipotenzió, fáradtság",
    "Hideg végtagok, Raynaud-szerű tünet",
    "Élénk álmok, depresszió-rizikó (mérsékelt)",
    "Súlyos, ritka: bronchospasmus szelektivitás-elvesztésnél magas dózison, hipoglikémia-tünet-maszkolás diabétesz mellett"
  ],
  "cyp450": [
    "CYP3A4, CYP2D6 substrate (mixed)",
    "No significant CYP inhibition"
  ],
  "crossMolInteractions": [
    "CCB non-DHP (Verapamil, Diltiazem): bradycardia + AV-blokk additivitás",
    "Klasszikus β-blokkoló-tüneti gyógyszerek (Digoxin, Amiodarone): additív hatás",
    "Inzulin/orális antidiabetikum: hipoglikémia-tünet-maszkolás"
  ],
  "benefits": [
    "HFrEF-mortalitás 34% relatív csökkenés (CIBIS-II)",
    "Magas β1-szelektivitás → kevés tüdő/perifériás mellékhatás",
    "Napi egyszer (jó compliance)"
  ],
  "studies": [
    {
      "title": "The Cardiac Insufficiency Bisoprolol Study II (CIBIS-II)",
      "authors": "CIBIS-II Investigators.",
      "journal": "Lancet. 1999;353(9146):9-13.",
      "pmid": "9988345"
    },
    {
      "title": "Effect of carvedilol versus bisoprolol on heart failure outcomes",
      "authors": "Frommeyer G, Eckardt L.",
      "journal": "Eur Heart J. 2017;38(33):2624-2627.",
      "pmid": "28645164"
    }
  ],
  "related": [
    "ramipril",
    "amlodipine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1-2 (HFrEF start)",
        "dose": "1.25"
      },
      {
        "phase": "Hipertenzió standard",
        "dose": "5"
      },
      {
        "phase": "Max-dózis",
        "dose": "10"
      }
    ],
    "unit": "mg/nap",
    "note": "Reggel. HFrEF-titrációban 2 hét/dózisszint a hemodinamikai-tolerancia érdekében. HR + BP otthoni monitor. NE hagyja abba hirtelen (rebound tachycardia, ischémia)."
  }
}
