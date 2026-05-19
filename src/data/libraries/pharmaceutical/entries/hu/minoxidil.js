// Phase C — multi-variant entry (oral + topical). See
// docs/superpowers/specs/2026-05-19-route-toggle-design.md for shape rules.
// Sources: FDA Loniten + Rogaine Drug Labels, Sinclair 2017/2018 (LDOM PMID
// 28349541), Pirmez 2020 (PMID 32684687), Olsen 2002 (PMID 12196747),
// Suchonwanit 2019 (PMID 31496654), Goren 2014 SULT1A1 enzyme assay.

export default {
  "id": "minoxidil",
  "name": "Minoxidil",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "K-csatorna-aktivátor topikális vagy orális szer (Rogaine, Loniten + LDOM). Androgenetikus alopecia kezelés 1988 óta — két adagolási mód, eltérő szisztémás expozícióval.",
  "description": "A Minoxidil eredetileg orális antihipertenzív szerként (Loniten 1979) lett kifejlesztve, de a \"mellékhatásként\" megjelenő hipertrichózis miatt topikális formulációt fejlesztettek alopecia kezelésére (Upjohn Rogaine 2% 1988, 5% 1996). A két adagolási forma alapjaiban különböző farmakokinetikai profillal rendelkezik: a topikális szisztémás abszorpciója <2%, így a vérnyomás-hatás minimális; az orális LDOM (0,25–5 mg/nap) szisztémás expozíciót ad, hatékonyabb mint a topikális (Sinclair 2017 PMID 28349541), de monitorálandó kardiovaszkuláris profilt igényel.",
  "mechanism": "ATP-érzékeny K-csatorna nyitása → vazodilatáció + hajhagyma-perfúzió. Másodlagos: szulfo-transzferáz (SULT1A1) aktivált aktív metabolit (Minoxidil-szulfát), prosztaglandin-E2 emelkedés. A SULT1A1 enzim-aktivitás populáció-szintű variancia ~40-50% non-responder arányt eredményez (Goren 2014).",
  "cyp450": [
    "Sulfotransferase activation (SULT1A1)",
    "Minimal CYP metabolism"
  ],
  "crossMolInteractions": [
    "Finasteride: KOMPLEMENTER mechanizmus, gold-standard kombináció (Big-3 protokoll)",
    "Antihipertenzív szerek: orális esetén additív hipotenzió"
  ],
  "benefits": [
    "OTC elérhető topikális forma — alacsony belépési küszöb",
    "Orális LDOM hatékonyabb mint topikális (Sinclair 2017)",
    "Komplementer Finasteride-hez (Big-3 protokoll: Minoxidil + Finasteride + Ketoconazole)"
  ],
  "studies": [
    {
      "title": "Low-dose oral minoxidil for hair loss",
      "authors": "Sinclair R.",
      "journal": "J Am Acad Dermatol. 2018;79(1):104-105.",
      "pmid": "28349541"
    },
    {
      "title": "Topical minoxidil for androgenetic alopecia: meta-analysis",
      "authors": "Suchonwanit P, Thammarucha S, Leerunyakul K.",
      "journal": "Drug Des Devel Ther. 2019;13:2777-2786.",
      "pmid": "31496654"
    },
    {
      "title": "Low-dose oral minoxidil for androgenetic alopecia: systematic review",
      "authors": "Pirmez R, Salas-Callo CI.",
      "journal": "Int J Trichology. 2020;12(4):189-191.",
      "pmid": "32684687"
    },
    {
      "title": "A double-blind, randomized clinical trial of 5% minoxidil vs 2% in men",
      "authors": "Olsen EA, Dunlap FE, Funicella T, et al.",
      "journal": "J Am Acad Dermatol. 2002;47(3):377-385.",
      "pmid": "12196747"
    }
  ],
  "related": [
    "finasteride"
  ],
  "variants": [
    {
      "routeId": "oral",
      "routeLabel": "Orális",
      "image": "/pharmaceutical/blister-white-round.png",
      "legalStatus": "Vényköteles (Loniten antihipertenzív + off-label LDOM alopeciára).",
      "bioavailability": "~95% (gyors GI abszorpció; Cmax 1 óra). Pharmakokinetikája jól dokumentált a Loniten SmPC-ben.",
      "onsetTime": "3–6 hónap (látható hajnövekedés LDOM-mal)",
      "halfLife": "~4,2 óra (plazma)",
      "atcCode": "C02DC01",
      "prescriptionStatus": "Vényköteles (Rx), bőrgyógyász vagy háziorvos felírható off-label alopeciára",
      "indications": [
        "Off-label androgenetikus alopecia (LDOM 0,25–5 mg/nap)",
        "Rezisztens hipertenzió (Loniten oral, ritka indikáció)"
      ],
      "contraindications": [
        "Akut myocardialis infarctus vagy aktív iszkémia",
        "Pheochromocytoma",
        "Aktív perikardiális effúzió"
      ],
      "commonSideEffects": [
        "Edéma (boka, lokális; gyakoribb 2,5 mg felett)",
        "Reflex-tachycardia",
        "Hipertrichózis (arc, váll, generalizált — szisztémás expozíció miatt)",
        "Posturalis hipotenzió",
        "Kezdeti shedding (telogén-effluvium) 1–2 hónap körül"
      ],
      "doseCalc": {
        "type": "fixedDose",
        "fixedDose": {
          "low": 0.625,
          "medium": 1.25,
          "high": 5
        },
        "unit": "mg/nap (LDOM, egy dózisban)",
        "note": "Off-label LDOM: kezdés 0,625–1,25 mg/nap, fokozatosan titrálva 2,5–5 mg-ig. Egyszeri napi adag reggel. Hatás 3–6 hónap. Vérnyomás + pulzus monitorálandó az első 4 hétben. Hipertenzió-indikációban 5–40 mg/nap, szigorú orvosi felügyelet alatt."
      }
    },
    {
      "routeId": "topical",
      "routeLabel": "Topikális",
      "image": "/pharmaceutical/minoxidil-topical.png",
      "legalStatus": "OTC EU/USA/HU (2% és 5% oldat + 5% hab elérhető vény nélkül).",
      "bioavailability": "<2% (szisztémás abszorpció a szkalpról; Goren et al. 2014 SULT1A1 enzim-aktivitás non-responder ~40–50% a populációban).",
      "onsetTime": "12–16 hét (korai hatás), 24+ hét (mérhető denzitás-növekedés)",
      "halfLife": "~22 óra (szkalp retenció; szisztémás minimal)",
      "atcCode": "D11AX01",
      "prescriptionStatus": "OTC (vény nélkül elérhető)",
      "indications": [
        "Androgenetikus alopecia (férfi mintázat, primer indikáció — Rogaine 5%)",
        "Női androgenetikus alopecia (2% Rogaine vagy 5% hab — kevésbé irritáló)"
      ],
      "contraindications": [
        "Aktív szkalp dermatitis vagy infekció",
        "Kontakt-allergia propilén-glikolra (formulátum-függő — a habformulátum PG-mentes)"
      ],
      "commonSideEffects": [
        "Szkalp-irritáció, viszketés, hámlás",
        "Kontakt dermatitis (gyakori a propilén-glikol miatt)",
        "Lokális hipertrichózis a contam-zone-ban (homlok, arc)",
        "Paradox shed (telogén-effluvium 2–4 hét körül, gyakoribb mint az orálisnál)"
      ],
      "doseCalc": {
        "type": "fixedDose",
        "fixedDose": {
          "low": 2,
          "medium": 5,
          "high": 5
        },
        "unit": "% oldat 2× napi 1 ml",
        "note": "Standard: 5% oldat vagy hab 1 ml 2× napi (reggel + este) száraz szkalpra. Nőknél a 2% kevésbé irritáló, vagy 5% hab propilén-glikol nélkül. Hatás 3–6 hónap. Elhagyásnál 3–4 hónap alatt visszahúzódik a növekedés."
      }
    }
  ],
  "defaultVariant": "oral"
}
