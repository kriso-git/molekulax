// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.575Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "lamotrigine",
  "name": "Lamotrigine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Antikonvulzív + bipoláris fenntartó (GSK Lamictal). Feszültség-függő Na-csatorna blokkoló. SJS/TEN kockázat miatt KÖTELEZŐ lassú titráció.",
  "description": "A Lamotrigine egy feszültség-függő Na-csatorna blokkoló antiepilepszikum (GSK Lamictal, FDA 1994 epilepsy, FDA 2003 bipoláris fenntartás). Bipoláris zavarban a depressziós fázis-prevenciója a fő erőssége (kevésbé hatékony akut mánián). A SÚLYOS bőr-reakció (Stevens-Johnson szindróma, toxikus epidermális nekrolízis) kockázata 0,3% pediátriában és 0,1% felnőtt populációban — DE szignifikánsan emelkedik gyors dóziseszkalációnál vagy Valproat-kombinációnál. Ezért az 5-hetes lassú titráció (25 → 50 → 100 → 200 mg) KÖTELEZŐ, és minden bőrkiütésnél AZONNALI STOP.",
  "mechanism": "Feszültség-függő Na-csatorna használat-függő blokádja (membrán-stabilizáció), glutamát-felszabadulás csökkentése. Másodlagos hatás: szelektív presynaptikus szerotonin-felszabadulás emelése (hangulat-stabilizáló hatás magyarázata).",
  "legalStatus": "EU/HU: vényköteles (Lamictal, Lamitrin, Epitrigine, generikus). USA: FDA Rx.",
  "onsetTime": "5+ weeks (slow titration required)",
  "halfLife": "25-33 h (alone), 70 h (with valproate), 13 h (with enzyme inducers)",
  "atcCode": "N03AX09",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Epilepszia (fokális és generalizált, monoterápia vagy adjuváns)",
    "Bipoláris I zavar, hangulat-epizód PREVENCIÓJA (FDA 2003)"
  ],
  "contraindications": [
    "Korábbi SJS/TEN/DRESS bőr-reakció anamnézis",
    "Súlyos máj-funkció-zavar"
  ],
  "commonSideEffects": [
    "Bőrkiütés (10% benign rash, 0,1-0,3% SJS/TEN, főleg titráció során)",
    "Fejfájás, szédülés, ataxia, diplopia",
    "Súlyos, ritka: SJS/TEN (SÜRGŐSSÉGI), DRESS, aszeptikus meningitisz, hemophagocytotikus limfohisztiocitózis"
  ],
  "cyp450": [
    "Glucuronidation primary (UGT1A4)",
    "Strongly affected by inducers (carbamazepine, phenytoin) and inhibitors (valproate)"
  ],
  "crossMolInteractions": [
    "Valproat: GLUCURONIDÁCIÓT GÁTOL, Lamotrigine felezési idő DUPLÁZÓDIK, SJS/TEN-kockázat fokozódik — KÖTELEZŐ a Lamotrigine-dózis 50%-os csökkentése Valproat-kombinációban",
    "Carbamazepine, Phenytoin, Phenobarbital: indukció, Lamotrigine plazma-szint csökkenhet, dóziseszkaláció szükséges",
    "Orális fogamzásgátló: Lamotrigine plazma-szint csökkenhet, fogamzásgátló-cikluson belül változás"
  ],
  "benefits": [
    "Bipoláris depresszió-fázis PREVENCIÓJÁRA leghatékonyabb hangulat-stabilizáló",
    "NEM okoz súlygyarapodást vagy szedációt (vs Olanzapine, Quetiapine)",
    "Nem teratogén szignifikánsan (vs Valproat erős teratogenitás)",
    "Hosszú felezési idő → napi egyszeri/kétszeri adagolás (jó compliance)"
  ],
  "studies": [
    {
      "title": "Lamotrigine for prevention of new manic and depressive episodes in BD (Calabrese 2003)",
      "authors": "Calabrese JR, Bowden CL, Sachs G et al.",
      "journal": "J Clin Psychiatry. 2003;64(9):1013-24.",
      "pmid": "14628976"
    },
    {
      "title": "Lamotrigine in the treatment of bipolar depression",
      "authors": "Geddes JR, Calabrese JR, Goodwin GM.",
      "journal": "Br J Psychiatry. 2009;194(1):4-9.",
      "pmid": "19118318"
    },
    {
      "title": "Stevens-Johnson syndrome and toxic epidermal necrolysis with lamotrigine",
      "authors": "Mockenhaupt M, Messenheimer J, Tennis P, Schlingmann J.",
      "journal": "Neurology. 2005;64(7):1134-8.",
      "pmid": "15824334"
    }
  ],
  "related": [
    "aripiprazole",
    "sertralin"
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
        "phase": "Hét 5",
        "dose": "100"
      },
      {
        "phase": "Hét 6+ (cél)",
        "dose": "200"
      }
    ],
    "unit": "mg/nap",
    "note": "OBLIGATÓRIKUS lassú titráció a SJS/TEN-kockázat mitigálására. Valproat-kombinációban a fenti dózisok 50%-osra csökkentendők. Bármilyen bőrkiütésnél AZONNALI STOP és bőrgyógyász/sürgősségi konzultáció. NE folytassa korábbi dózisszintről, ha > 5 nap szünet volt — újraindítás 25 mg-ról."
  }
}
