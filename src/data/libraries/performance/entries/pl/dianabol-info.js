// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.966Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "dianabol-info",
  "name": "Dianabol",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Methandrostenolone, 17α-alkilowany doustny AAS. Klasyczny \"kickstart\" bulking z wysoką hepatotoksycznością.",
  "description": "Dianabol to pierwszy masowo sprzedawany doustny AAS, zsyntetyzowany przez Zieglera w 1955 r. dla amerykańskich ciężarowców. Doustny 17α-alkilowany, szybki retencyjny przyrost masy. **Rewizja mitu \"mokrych zysków\"**: większość przyrostu masy na Dianabolu to nie obrzęk podskórny, ale WEWNĄTRZMIĘŚNIOWE magazynowanie glikogenu plus volumizacja komórki (hydratacja wewnątrzkomórkowa). Pęcznienie komórki samo w sobie to sygnał anaboliczny (hipoteza Häussingera: wzrost objętości komórki aktywuje mTOR i syntezę białek). \"Kickstart\" 4-6 tygodni z dłuższymi AAS iniekcyjnymi. Aromatyzuje — ALE Dianabol tworzy też niezwykle potentny **metabolit 17α-metyloestradiolu oporny na anastrozol**, więc ryzyko ginekomastii pozostaje wysokie nawet na AI, a klasyczna tytracja AI (anastrozol 0,5 mg EOD) jest mniej skuteczna niż na Testosteronie. Wysoka hepatotoksyczność.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR, 17α-alkilowany"
    },
    {
      "label": "Okres półtrwania",
      "value": "3-6 godzin"
    },
    {
      "label": "Stosunek",
      "value": "210:60"
    },
    {
      "label": "Status prawny",
      "value": "USA: Schedule III."
    }
  ],
  "mechanism": "17α-alkilowany agonista AR. Aromataza konwertuje do E2 ORAZ do 17α-metyloestradiolu (ten ostatni niezwykle potentny, oporny na anastrozol metabolit → wysokie ryzyko ginekomastii nawet na AI). 5α-reduktaza minimalnie tworzy metabolit podobny do DHT. Wewnątrzkomórkowa synteza glikogenu plus volumizacja jako pośrednie sygnały anaboliczne (aktywacja mTOR).",
  "legalStatus": "USA: Schedule III. UE: nielegalny. WADA: zakazany.",
  "onsetTime": "3-7 days",
  "halfLife": "3-6 h",
  "interactionsWith": [
    "aromatase inhibitors",
    "alcohol",
    "NSAIDs"
  ],
  "aromatization": "Tak — umiarkowane-wysokie powinowactwo do CYP19; \"wet gains\" (retencja wody, ginekomastia) częste, inhibitor aromatazy konieczny w długich cyklach (Schänzer 1996)",
  "hepatotoxicity": "Wysoka — 17α-alkilowany, zależny od dawki wzrost ALT/AST; cholestatyczne zapalenie wątroby i peliosis hepatis rzadkie ciężkie przypadki (Hartgens-Kuipers 2004)",
  "wadaStatus": "banned",
  "androgenicRatio": "210:60",
  "benefits": [
    "Szybki przyrost + retencja",
    "Wzrost siły w \"kickstart\"",
    "Podniesienie nastroju (dopaminergiczne + estrogenowe): częste doniesienia w fazie \"kickstart\", euforia + wzrost motywacji treningowej"
  ],
  "studies": [
    {
      "title": "Methandrostenolone effects on body composition and strength",
      "authors": "Hervey GR, Knibbs AV, Burkinshaw L et al.",
      "journal": "Clin Sci. 1981;60(4):457-461.",
      "pmid": "6263593"
    },
    {
      "title": "Cholestatic hepatitis associated with methandrostenolone",
      "authors": "Søe KL, Søe M, Gluud C.",
      "journal": "Pharmacol Toxicol. 1992;70(4):293-294.",
      "pmid": "1502619"
    },
    {
      "title": "Anabolic steroid cardiovascular toxicity",
      "authors": "Baggish AL, Weiner RB, Kanayama G et al.",
      "journal": "Circulation. 2017;135(21):1991-2002.",
      "pmid": "28533317"
    }
  ],
  "related": [
    "testosterone-info",
    "anavar-info",
    "trenbolone-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 20,
      "medium": 30,
      "high": 50
    },
    "unit": "mg/nap",
    "note": "\"Kickstart\" 4-6 tygodni. 2-3 dawki dziennie. Inhibitor aromatazy często wymagany. TUDCA 500-750 mg/dzień."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2 tygodnie przed",
      "markers": "Priorytet wątrobowy + reszta.",
      "purpose": "Baseline wątroby krytyczny."
    },
    "midCycle": {
      "label": "W trakcie",
      "timing": "Tydzień 2-3",
      "markers": "ALT, AST, GGT, bilirubina, lipidogram, E2, ciśnienie.",
      "purpose": "ALT/AST >3x = przerwanie. Wzrost E2 = AI."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT tydzień 4 + 8-12",
      "markers": "Total T, LH, FSH, E2, recovery wątroby i lipidów.",
      "purpose": "Weryfikacja recovery."
    },
    "cruise": null
  }
}
