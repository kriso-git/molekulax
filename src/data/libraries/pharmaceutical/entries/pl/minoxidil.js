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
  "shortDesc": "Aktywator kanałów K, środek miejscowy lub doustny (Rogaine, Loniten + LDOM). Leczenie łysienia androgenowego od 1988 — dwie drogi podania z bardzo różnym profilem ekspozycji systemowej.",
  "description": "Minoxidil został pierwotnie opracowany jako doustny lek przeciwnadciśnieniowy (Loniten, 1979). Hipertrychoza obserwowana jako 'działanie uboczne' doprowadziła do opracowania formulacji miejscowych dla łysienia (Upjohn Rogaine 2% 1988, 5% 1996). Dwie drogi podania mają fundamentalnie odmienne profile farmakokinetyczne: wchłanianie systemowe miejscowe wynosi <2%, więc wpływ na ciśnienie krwi jest minimalny; doustna LDOM (0,25–5 mg/dzień) zapewnia ekspozycję systemową, skuteczniejszą niż miejscowa (Sinclair 2017 PMID 28349541), ale wymaga monitorowania sercowo-naczyniowego.",
  "mechanism": "Otwarcie kanałów K ATP-zależnych → wazodylatacja + perfuzja mieszka włosowego. Wtórnie: aktywny metabolit (siarczan minoxidilu) aktywowany przez sulfotransferazę (SULT1A1), wzrost prostaglandyny E2. Wariancja aktywności enzymu SULT1A1 daje ~40–50% non-responderów na poziomie populacji (Goren 2014).",
  "cyp450": [
    "Aktywacja przez sulfotransferazę (SULT1A1)",
    "Minimalny metabolizm CYP"
  ],
  "crossMolInteractions": [
    "Finasteryd: KOMPLEMENTARNY mechanizm, kombinacja gold-standard (protokół Big-3)",
    "Leki przeciwnadciśnieniowe: addytywna hipotensja przy podaniu doustnym"
  ],
  "benefits": [
    "Forma miejscowa OTC — niski próg wejścia",
    "Doustna LDOM skuteczniejsza niż miejscowa (Sinclair 2017)",
    "Komplementarny z finasterydem (protokół Big-3: Minoxidil + Finasteryd + Ketokonazol)"
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
      "routeLabel": "Doustny",
      "image": "/pharmaceutical/minoxidil-oral.png",
      "legalStatus": "Na receptę (Loniten przeciwnadciśnieniowy + off-label LDOM na łysienie).",
      "bioavailability": "~95% (szybka absorpcja z GI; Cmax 1 godzina). Farmakokinetyka dobrze udokumentowana w ChPL Loniten.",
      "onsetTime": "3–6 miesięcy (widoczny odrost włosów przy LDOM)",
      "halfLife": "~4,2 godziny (osocze)",
      "atcCode": "C02DC01",
      "prescriptionStatus": "Na receptę (Rx), dermatolog lub lekarz rodzinny może przepisać off-label na łysienie",
      "indications": [
        "Off-label łysienie androgenowe (LDOM 0,25–5 mg/dzień)",
        "Nadciśnienie oporne (Loniten doustny, rzadkie wskazanie)"
      ],
      "contraindications": [
        "Ostry zawał serca lub aktywne niedokrwienie",
        "Pheochromocytoma",
        "Aktywny wysięk osierdziowy"
      ],
      "commonSideEffects": [
        "Obrzęk (kostka, miejscowy; częstszy powyżej 2,5 mg)",
        "Tachykardia odruchowa",
        "Hipertrychoza (twarz, ramiona, uogólniona — z powodu ekspozycji systemowej)",
        "Hipotensja ortostatyczna",
        "Początkowe wypadanie (telogenowe effluvium) w ciągu 1–2 miesięcy"
      ],
      "doseCalc": {
        "type": "fixedDose",
        "fixedDose": {
          "low": 0.625,
          "medium": 1.25,
          "high": 5
        },
        "unit": "mg/dzień (LDOM, jedna dawka)",
        "note": "Off-label LDOM: zacznij od 0,625–1,25 mg/dzień, stopniowo titruj do 2,5–5 mg. Jedna dawka dziennie rano. Efekt 3–6 miesięcy. Monitoruj ciśnienie + tętno w pierwszych 4 tygodniach. Wskazanie przeciwnadciśnieniowe: 5–40 mg/dzień, ścisły nadzór lekarski."
      }
    },
    {
      "routeId": "topical",
      "routeLabel": "Miejscowy",
      "image": "/pharmaceutical/minoxidil-topical.png",
      "legalStatus": "OTC UE/USA/PL (roztwory 2% i 5% + pianka 5% dostępne bez recepty).",
      "bioavailability": "<2% (absorpcja systemowa ze skóry głowy; Goren et al. 2014 aktywność enzymu SULT1A1 non-responder ~40–50% populacji).",
      "onsetTime": "12–16 tygodni (wczesny efekt), 24+ tygodni (mierzalny wzrost gęstości)",
      "halfLife": "~22 godziny (retencja w skórze głowy; systemowa minimalna)",
      "atcCode": "D11AX01",
      "prescriptionStatus": "OTC (dostępny bez recepty)",
      "indications": [
        "Łysienie androgenowe (wzór męski, wskazanie podstawowe — Rogaine 5%)",
        "Łysienie androgenowe u kobiet (2% Rogaine lub 5% pianka — mniej drażniące)"
      ],
      "contraindications": [
        "Aktywne zapalenie skóry głowy lub infekcja",
        "Alergia kontaktowa na glikol propylenowy (zależne od formulacji — pianka jest PG-free)"
      ],
      "commonSideEffects": [
        "Podrażnienie skóry głowy, swędzenie, łuszczenie",
        "Kontaktowe zapalenie skóry (częste, z powodu glikolu propylenowego)",
        "Miejscowa hipertrychoza w strefie kontaktu (czoło, twarz)",
        "Paradoksalne wypadanie (telogenowe effluvium 2–4 tygodnie, częstsze niż przy doustnym)"
      ],
      "doseCalc": {
        "type": "fixedDose",
        "fixedDose": {
          "low": 2,
          "medium": 5,
          "high": 5
        },
        "unit": "% roztwór 2× dziennie 1 ml",
        "note": "Standard: roztwór 5% lub pianka, 1 ml stosowany 2× dziennie (rano + wieczór) na suchą skórę głowy. U kobiet 2% mniej drażniący, lub pianka 5% bez glikolu propylenowego. Efekt 3–6 miesięcy. Po odstawieniu odrost cofa się w ciągu 3–4 miesięcy."
      }
    }
  ],
  "defaultVariant": "oral"
}
