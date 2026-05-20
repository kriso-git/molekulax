// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.944Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "nandrolone-info",
  "name": "Nandrolone",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Nandrolone Decanoate (Deca-Durabolin), 19-nor-AAS. Klasszikus \"bulking\" AAS, ízületi recovery hatással.",
  "description": "A Nandrolone Decanoate egy 19-nor-tesztoszteron származék, hosszú-hatású injekciós AAS. **Észter-variánsok**: Decanoate (Deca-Durabolin) ~15 napos t1/2, depo-jellegű lassú stabil release, 1x heti injekció elegendő, több vízretenció; Phenylpropionate (NPP) ~5 napos t1/2, gyorsabb on/off profil, 2x heti injekció, anekdotálisan kevesebb vízretenció. Klinikailag anémia és cachexia kezelésére használt. Bodybuildingban \"bulking\" cikluson izomtömeg-növelésre és ízületi recovery-re használt (kollagén-szintézis-emelés). Az aromatáz minimálisan konvertálja ösztrogénné (~10% Testosterone-hoz képest), és 5α-reduktáz dihydronandrolone-é alakítja, ami csak ~20%-os AR-aktivitású (vs DHT, mely STARK AR-agonista) — **ez a fiziológiás prosztata-védelem alapja, Nandrolone egyik fő előnye Testosterone-nal szemben**. \"Deca-dick\" libidó-csökkenés gyakori panasz (prolactin-emelés), \"Deca-blues\" hangulati-anekdota: krónikus 19-nor használat dopamin-szerotonin balance shift gyanúja (3+ hónap után észlelhető depresszív tünetek egyéni jelentésekben).",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "19-nor-AAS, AR-agonista, gyenge aromatizáció"
    },
    {
      "label": "Felezési idő",
      "value": "15 nap (decanoate)"
    },
    {
      "label": "Anabolikus arány",
      "value": "125:37"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: Schedule III. HU/EU: Rx (Deca-Durabolin)."
    }
  ],
  "mechanism": "19-nor-AAS, közvetlen AR-agonista. Aromatáz minimálisan ösztrogénné konvertálja (~10% Testosterone-hoz képest). 5α-reduktáz dihydronandrolone-é alakítja, ami csak ~20%-os AR-aktivitású (vs DHT mely STARK AR-agonista) — fiziológiásan prosztata-védő, Nandrolone egyik fő pharmakológiai előnye. Másodlagosan progeszteron-receptor parciális agonista (prolactin-emelkedés).",
  "legalStatus": "USA: Schedule III. HU/PL/EU: Rx (Deca-Durabolin gyógyszertári forgalom). WADA: tiltott.",
  "onsetTime": "2-3 weeks",
  "halfLife": "15 days (decanoate)",
  "interactionsWith": [
    "cabergoline (prolactin)",
    "aromatase inhibitors"
  ],
  "aromatization": "Minimális — 19-nor szteroid, 5-10% CYP19 konverzió E2-vé (testosterone-hez képest); progesztogén-aktivitás dominál (Bhasin-Kanayama 2003)",
  "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; injektált észter forma hepatikus first-pass-t kerüli (Pope-Kanayama 2014)",
  "wadaStatus": "banned",
  "androgenicRatio": "125:37",
  "benefits": [
    "Izomtömeg-növekedés \"bulking\" cikluson",
    "Ízületi recovery: kollagén-szintézis emelő hatás",
    "Prosztata-mellékhatások ritkábbak (gyenge DHT-konverzió)",
    "Kollagén-szintézis és kötőszövet-támogatás: nandrolone direkten emeli a 1-es típusú prokollagén-szintézist (Geusens 1995 review PMID 7770048), krónikus alacsony dózis (100-150 mg/hét) ízületi fájdalom enyhítésére dokumentáltan használt"
  ],
  "studies": [
    {
      "title": "Nandrolone decanoate: pharmacology, oxidation, and uses",
      "authors": "Geusens P.",
      "journal": "Rheumatol Int. 1995;15(1):27-34.",
      "pmid": "7770048"
    },
    {
      "title": "Effects of nandrolone decanoate on serum lipoprotein profile",
      "authors": "Hartgens F, Rietjens G, Keizer HA et al.",
      "journal": "BJSM. 2004;38(3):253-259.",
      "pmid": "15039244"
    },
    {
      "title": "Anabolic steroid use and erectile dysfunction",
      "authors": "Coward RM, Rajanahally S, Kovac JR et al.",
      "journal": "J Urol. 2013;190(6):2200-2205.",
      "pmid": "23764081"
    }
  ],
  "related": [
    "testosterone-info",
    "trenbolone-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 2,
      "medium": 4,
      "high": 6
    },
    "unit": "mg/hét",
    "note": "Deca-bridge 100-150 mg/hét (Alacsony tartomány alatti), bulking 300-600 mg/hét. Decanoate-észter 15 napos felezési idejű, heti 1x injekció elegendő. \"Deca-dick\" libidó-csökkenés prevenció: cabergoline 0.25 mg 2x/hét + Testosterone-bázis együtt. Prolactin-monitoring kötelező."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 hét előtt",
      "markers": "Teljes CBC, lipid panel, májfunkció, hormon-panel (Total T, Free T, E2, LH, FSH, SHBG, Prolactin), HbA1c, vesefunkció, PSA.",
      "purpose": "Baseline. Prolactin-emelkedett baseline kontraindikáció."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "6-8. hét",
      "markers": "Lipid panel, májfunkció, E2, Prolactin (Deca-dick prevenció), vérnyomás.",
      "purpose": "Prolactin >25 ng/mL: cabergoline 0.25 mg 2x/hét. HDL drasztikus csökkenés esetén ciklus-megszakítás."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Utolsó injekció után 3 héttel + 12-16. hét",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, Prolactin, lipid recovery.",
      "purpose": "Deca-szuppresszió 12-16 hétig dokumentált; PCT hosszabb mint rövid-felezésű AAS-eken."
    },
    "cruise": {
      "label": "Cruise alatt",
      "timing": "6 hetente",
      "markers": "Total T, E2, Prolactin, lipid panel, HbA1c, PSA.",
      "purpose": "Hosszú-távú Deca-cruise lehetséges alacsony dózison (100-150mg/hét), de prolactin-monitoring kötelező."
    }
  },
  "variants": [
    {
      "routeId": "deca",
      "routeLabel": "Nandrolone Decanoate (Deca-Durabolin, lassú)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "HU/PL/EU: Rx (Deca-Durabolin Organon SmPC). USA: Schedule III. WADA tiltott.",
      "bioavailability": "~95% (IM, lassú decanoate-ester hidrolízis)",
      "onsetTime": "2-3 hét (steady-state 4-6 hét)",
      "halfLife": "15 nap (Decanoate-ester)",
      "halfLifeActive": "~24 h szabad Nandrolone (hidrolízis után, depo-jellegű lassú release)",
      "detectionWindow": "Vizelet: 12-18 hónap (Deca hosszú-távú metabolit 19-norandrosterone, WADA-akkreditált LC-MS/MS — leghosszabb detection-ablak AAS-ek közül)",
      "aromatization": "Minimális — ~10% Testosterone-aromatizációhoz képest",
      "hepatotoxicity": "Alacsony — NEM 17α-alkilált, IM bypass-olja first-pass-t",
      "quality": {
        "pure": [
          "Organon Deca-Durabolin 50 mg/ml ampulla (EU Rx)",
          "UGL Nandrolone Decanoate 200-300 mg/ml olajos fiola, HPLC-tesztelt"
        ],
        "caution": [
          "Hosszú-távú HPTA-szuppresszió 12-16 hét",
          "Prolaktin-emelkedés (cabergoline készenlét)",
          "Deca-dick libidó-csökkenés gyakori"
        ],
        "avoid": [
          "Apaság-tervezés közeli időhorizonton (HPTA-recovery 6-12 hónap Deca után)",
          "Versenysport-tesztelés 12-18 hónap előtt"
        ]
      },
      "interactions": [
        "Cabergoline 0,25 mg 2x/hét prolaktin-monitor",
        "Testosterone-base stack standard (Deca standalone ED-rizikó miatt)",
        "PCT utolsó Deca-injekció +3 hét"
      ],
      "doseCalc": {
        "type": "bodyweight",
        "perKg": {
          "low": 2,
          "medium": 4,
          "high": 6
        },
        "unit": "mg/hét (IM, heti 1x)",
        "note": "100-150 mg/hét (Deca-bridge), 300-600 mg/hét (bulking). Heti 1x IM injekció a 15 napos felezés miatt."
      }
    },
    {
      "routeId": "npp",
      "routeLabel": "Nandrolone Phenylpropionate (NPP, gyors)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "EU: Rx (Durabolin, Phenylprop) regional. USA: Schedule III. WADA tiltott.",
      "bioavailability": "~95% (IM, gyorsabb Phenylpropionate-ester hidrolízis)",
      "onsetTime": "1-2 hét (steady-state 2-3 hét)",
      "halfLife": "~5 nap (Phenylpropionate-ester)",
      "halfLifeActive": "~24 h szabad Nandrolone (gyorsabb release mint Deca)",
      "detectionWindow": "Vizelet: 10-14 hónap (19-norandrosterone-metabolit, hasonló mint Deca-é, hosszú-távú)",
      "aromatization": "Minimális — ~10% Testosterone-aromatizációhoz képest (azonos parent Nandrolone)",
      "hepatotoxicity": "Alacsony — NEM 17α-alkilált",
      "quality": {
        "pure": [
          "UGL NPP 100 mg/ml olajos fiola (HPLC-tesztelt)",
          "Némely EU-pharmacy Durabolin (regional Rx) 25-50 mg/ml"
        ],
        "caution": [
          "EOD vagy 2x heti IM-injekció szükséges (rövid felezés)",
          "Prolaktin-emelkedés Deca-szintű",
          "PIP NPP-n erősebb mint Deca-n"
        ],
        "avoid": [
          "Apaság-tervezés közeli időhorizonton",
          "Erős injection-fárasztás esetén Deca preferált (heti 1x)"
        ]
      },
      "interactions": [
        "Cabergoline 0,25 mg 2x/hét",
        "Testosterone-base stack standard",
        "PCT utolsó NPP-injekció +5-7 nap (gyorsabb clearance mint Deca-n)"
      ],
      "doseCalc": {
        "type": "bodyweight",
        "perKg": {
          "low": 2,
          "medium": 4,
          "high": 6
        },
        "unit": "mg/hét (IM, EOD vagy 2x heti)",
        "note": "100-150 mg/hét (bridge), 300-600 mg/hét (bulking). EOD vagy 2x heti IM injekció. Gyorsabb on/off mint Deca → 'rövidebb' ciklusra alkalmasabb."
      }
    }
  ],
  "defaultVariant": "deca",
  "anecdote": "Az anekdotikus beszámolók szerint a felhasználók 3-5 hónapos tömegnövelő fázisokban futtatják a Nandrolone-t (NPP vagy Deca észterek) jelentős méretnövekedéssel. Közösségi beszámolók szerint a prolaktin-emelkedés gyakori, néha P5P vagy cabergolin hozzáadásával mérséklik. A Deca a hosszabban ható észter és inkább a vízvisszatartással hozható összefüggésbe, míg az NPP rövidebben hat és anekdotikusan kevesebb vízvisszatartást okoz, bár az egyéni változékonyság nagy. Néhány felhasználó enyhe depressziós tünetekről számol be az NPP 3. hónapjának környékén, amit a szakirodalom a neuroszteroid és progesztogén aktivitással hoz összefüggésbe. Alacsony dózisú NPP-t (körülbelül 140 mg/hét) időnként egész évben futtatnak ízületi támogatásra a krónikus ízületi problémákkal küzdő felhasználók. Összességében a Nandrolone-észterek továbbra is alapvető tömegciklus-vegyületek, a prolaktin és mentális egészségi mellékhatások a leggyakrabban emlegetett kompromisszumok."
}
