// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.967Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "epo-info",
  "name": "EPO",
  "image": null,
  "accentColor": "#ef4444",
  "tagColor": "rgba(239,68,68,0.18)",
  "shortDesc": "Rekombinowana ludzka erytropoetyna (rhEPO). Stymuluje produkcję erytrocytów, zakazana przez WADA.",
  "description": "Rekombinowana erytropoetyna (rhEPO) to biologicznie identyczna forma naturalnej EPO nerek. Zatwierdzona FDA dla CKD i anemii chemoterapeutycznej. W sportach wytrzymałościowych podnosi hematokryt, anegdotycznie +8-10% VO2max (Lundby 2011), ale placebo-kontrolowane BLINDED RCT pokazują realistycznie +1-3% (Heuberger 2013). WADA-zakazana. **Analogia stabilizacji HIF-α**: endogenną EPO aktywuje HIF-α indukowany hipoksją (Nobel Semenza 2019). **Kontekst historyczny**: era EPO w Tour de France 1990-2000, skandal Festina 1998, protokół Armstrong/USPS udokumentowany (USADA 2012). **Przełom detekcji**: Lasne & de Ceaurriz 2000 Nature (PMID 10864312) test IEF. **Dynamika hematokrytu**: 7-10 dni do szczytu retikulocytów, 21-28 dni do szczytu hematokrytu — stąd protokoły mikrodawkowania (20-30 IU/kg co 2 dni) poniżej okna detekcji.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista receptora EPO"
    },
    {
      "label": "Okres półtrwania",
      "value": "5-13 godzin"
    },
    {
      "label": "Czas wystąpienia",
      "value": "7-14 dni"
    },
    {
      "label": "Status prawny",
      "value": "USA/UE: Rx. WADA: zakazany."
    }
  ],
  "mechanism": "Agonista receptora EPO (receptor cytokin typu 1, jak receptor GH) na prekursorach erytrocytów (BFU-E, CFU-E) w szpiku. Dimeryzacja receptora → **JAK2 → STAT5 → aktywacja genów antyapoptotycznych i proliferacyjnych**. Sygnał hipoksji: różnicowanie i proliferacja, uwolnienie retikulocytów w 7-10 dni.",
  "legalStatus": "USA/UE: Rx. WADA: zakazany.",
  "onsetTime": "7-14 days",
  "halfLife": "5-13 h (subcutaneous)",
  "interactionsWith": [
    "iron supplements",
    "ACE inhibitors"
  ],
  "aromatization": "Nie dotyczy — 165-aminokwasowa glikoproteina (erytropoetyna), NIE steroid; brak substratu aromatazy",
  "hepatotoxicity": "Niska — brak bezpośredniej hepatotoksyczności; dominuje wzrost hematokrytu z ryzykiem zakrzepicy (zdarzenia CV, udar) (ostrzeżenie black-box FDA Epogen)",
  "wadaStatus": "banned",
  "detectionWindow": "Test bezpośredni: 3-4 dni. Biomarker (ABP) 4-6 tygodni.",
  "benefits": [
    "Wzrost VO2max: anegdotycznie 8-10% (Lundby 2011), ale placebo-kontrolowane BLINDED RCT pokazują 1-3% (Heuberger 2013) — subiektywne odczucie sportowców znacznie zawyża mierzalny efekt",
    "Wzrost hematokrytu",
    "Wzrost hemoglobiny"
  ],
  "studies": [
    {
      "title": "Erythropoietin treatment elevates haemoglobin concentration",
      "authors": "Lundby C, Olsen NV.",
      "journal": "J Physiol. 2011;589(Pt 6):1265-1271.",
      "pmid": "21224229"
    },
    {
      "title": "Erythropoietin doping in cycling: history and detection",
      "authors": "Lasne F, de Ceaurriz J.",
      "journal": "Nature. 2000;405(6787):635.",
      "pmid": "10864312"
    },
    {
      "title": "Blood doping at the Olympics",
      "authors": "Eichner ER.",
      "journal": "Curr Sports Med Rep. 2007;6(4):237-238.",
      "pmid": "17617999"
    },
    {
      "title": "Effects of erythropoietin on cycling performance of well-trained cyclists: a double-blind, randomised, placebo-controlled trial",
      "authors": "Heuberger JAAC, Rotmans JI, Gal P et al.",
      "journal": "Lancet Haematol. 2017;4(8):e374-e386.",
      "pmid": "23252630"
    }
  ],
  "related": [
    "testosterone-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 20,
      "medium": 50,
      "high": 100
    },
    "unit": "IU/hét",
    "note": "Klinicznie 50-100 IU/kg/tydzień. Hematokryt >55% = ryzyko zakrzepowe. Suplementacja żelaza obowiązkowa."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "1 tydzień przed",
      "markers": "CBC, retikulocyty, żelazo (ferrytyna, TIBC), B12 + folian, endogenne EPO.",
      "purpose": "Baseline. Niedobór żelaza skoryguj przed cyklem."
    },
    "midCycle": {
      "label": "W trakcie",
      "timing": "Tydzień 2-3",
      "markers": "Hematokryt (cel <55%), hemoglobina, ciśnienie, żelazo.",
      "purpose": "Hematokryt >55% = ryzyko zakrzepowe."
    },
    "postCycle": null,
    "cruise": null
  }
}
