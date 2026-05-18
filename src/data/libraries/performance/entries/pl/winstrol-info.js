// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.966Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "winstrol-info",
  "name": "Winstrol",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Stanozolol, 17α-alkilowana pochodna DHT. Klasyczny \"cutting\" AAS, supresor SHBG.",
  "description": "Stanozolol (Winstrol) to pochodna DHT, 17α-alkilowany doustny lub iniekcyjny AAS. Mechanizm obniżenia SHBG to bezpośrednie hamowanie wątrobowej syntezy mRNA SHBG (dowody Pugeat 1981), podnosząc frakcję wolnego testosteronu — znaczne wzmocnienie androgenne nawet przy bazie TRT. Nie aromatyzuje. Klinicznie rozwinięty dla wrodzonego obrzęku naczynioruchowego i anemii; w sporcie używany w \"cuttingu\". Skandal Bena Johnsona 1988. **Pozycjonowanie farmakologiczne**: wzmacniacz siły i modulator jakości tkanek bardziej niż konstruktor hipertrofii — przyrost siły jest często nieproporcjonalny do widocznego przyrostu mięśni. **Ostrzeżenie o tkance łącznej (Liow 1995 PMID 7551762)**: przypadki zerwań ścięgien związane ze stanozololem dobrze udokumentowane w literaturze sportowej; siła mięśni rośnie szybciej niż dojrzałość mostków kolagenowych ścięgna, tworząc ryzyko zerwania zwłaszcza w sportach sprinterskich/eksplozywnych.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR + supresor SHBG"
    },
    {
      "label": "Okres półtrwania",
      "value": "9 godz (doustnie)"
    },
    {
      "label": "Stosunek",
      "value": "320:30"
    },
    {
      "label": "Status prawny",
      "value": "USA: FDA Rx. UE: ograniczone"
    }
  ],
  "mechanism": "Agonista AR podobny do DHT. Bezpośrednio HAMUJE wątrobową syntezę mRNA SHBG → wzrost frakcji wolnego testosteronu. Nie aromatyzuje, nie konwertuje do DHT.",
  "legalStatus": "USA: Schedule III. UE: na receptę. WADA: zakazany.",
  "onsetTime": "7-14 days",
  "halfLife": "9 h (oral)",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "warfarin"
  ],
  "aromatization": "Nie — heterocykliczny pierścień pirazolowy A, NIE substrat CYP19; obniżenie SHBG to główny efekt niezależny od estrogenów (Schänzer 1996)",
  "hepatotoxicity": "Wysoka — 17α-alkilowany; obie postacie (doustna i iniekcyjna) hepatotoksyczne, wzrost transaminaz częsty przy cyklach >6 tygodni (Hartgens-Kuipers 2004)",
  "wadaStatus": "banned",
  "androgenicRatio": "320:30",
  "benefits": [
    "Ochrona masy w cyklu redukcyjnym",
    "Redukcja SHBG podnosi wolny T",
    "Wzrost siły dla sprinterów",
    "Wzrost erytrocytów + wydajności aerobowej: efekt erytropoetyczny udokumentowany (przegląd Pope 2014), poprawa wytrzymałości u sportowców sub-elite"
  ],
  "studies": [
    {
      "title": "Effects of stanozolol on physiological measurements in healthy men",
      "authors": "Stergiopoulos K, Brennan JJ, Mathews R et al.",
      "journal": "Med Sci Sports Exerc. 2008;40(4):574-579.",
      "pmid": "18317369"
    },
    {
      "title": "Anabolic steroid abuse and tendon injuries",
      "authors": "Liow RY, Tavares S.",
      "journal": "BJSM. 1995;29(2):77-79.",
      "pmid": "7551762"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs",
      "authors": "Pope HG Jr, Wood RI, Rogol A et al.",
      "journal": "Endocr Rev. 2014;35(3):341-375.",
      "pmid": "24423981"
    }
  ],
  "related": [
    "testosterone-info",
    "trenbolone-info",
    "anavar-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 0.4,
      "medium": 0.7,
      "high": 1
    },
    "unit": "mg/nap",
    "note": "Doustnie 30-80 mg/dzień, iniekcyjnie 50 mg EOD. Wysoka hepatotoksyczność. Maks. 6-8 tygodni. PCT wymagane."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2 tygodnie przed",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Plus lipidogram, panel hormonalny, czynność nerek, CBC.",
      "purpose": "Baseline wątroby krytyczny przy 17α-alkilowanym AAS."
    },
    "midCycle": {
      "label": "W trakcie",
      "timing": "Tydzień 3-4",
      "markers": "ALT, AST, GGT, bilirubina, lipidogram (HDL spadek), E2, ciśnienie.",
      "purpose": "Wykrywanie zmian. ALT/AST >3x = przerwanie."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT tydzień 4 + 8-12",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, recovery wątroby i lipidów.",
      "purpose": "Weryfikacja recovery HPTA + wątroby."
    },
    "cruise": {
      "label": "Podczas Cruise",
      "timing": "Co 6 tygodni",
      "markers": "Wątroba + lipidy + hormony + EKG.",
      "purpose": "Długoterminowy cruise z Winstrolem NIE zalecany z powodu hepatotoksyczności."
    }
  }
}
