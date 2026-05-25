// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.967Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "hgh-info",
  "name": "HGH",
  "image": "/performance/water-vial.png",
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Rekombinowany ludzki hormon wzrostu (rhGH, Somatropin). Egzogenne wsparcie GH, zakazany przez WADA.",
  "description": "Rekombinowany ludzki hormon wzrostu (rhGH, Somatropin) to biologicznie identyczna forma naturalnego GH. Zatwierdzony FDA dla niedoboru GH, zespołu Turnera, kacheksji AIDS. W sporcie off-label dla masy + recovery + redukcji. WADA-zakazany. **Kluczowe niuanse**: (a) **IGF-1 jako pierwotny efektor** — sam GH mniej anaboliczny, główny mediator to wątrobowy IGF-1 (70-80% anabolizmu sportowego przez IGF-1); (b) **Konwersja T4→reverse T3**: na HGH rT3 rośnie, aktywne T3 spada → ryzyko subklinicznej niedoczynności tarczycy; ko-administracja T4/T3 + panel TSH/fT3/fT4/rT3 mid-cycle OBOWIĄZKOWE; (c) **Zespół cieśni nadgarstka i obrzęki obwodowe**: retencja płynów + Na+ → kompresja nerwów, głównie powyżej 4-6 IU/dzień; (d) **Podanie SC na czczo**: przed snem lub min. 2-4 h po posiłku, bo insulina bezpośrednio antagonizuje GH.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista GH receptora"
    },
    {
      "label": "Okres półtrwania",
      "value": "~3 godziny"
    },
    {
      "label": "Czas wystąpienia",
      "value": "4-8 tygodni"
    },
    {
      "label": "Status prawny",
      "value": "USA/UE: Rx. WADA: zakazany."
    }
  ],
  "mechanism": "Agonista receptora GH (receptor cytokin typu 1): dimeryzacja → **fosforylacja JAK2 → STAT5 → ekspresja IGF-1 w wątrobie**. Wtórnie: lipoliza w tkance tłuszczowej (HSL) + anabolizm mięśni (mTOR + IGF-1 paracrynnie). **Antagonistyczny wpływ na insulinę**: glukoneogeneza + glikogenoliza wątrobowa → wzrost glukozy na czczo, przewlekła insulinooporność. Monitoring HbA1c obowiązkowy.",
  "legalStatus": "USA/UE: Rx. WADA: zakazany.",
  "onsetTime": "4-8 weeks (IGF-1 peak)",
  "halfLife": "~3 h (subcutaneous)",
  "interactionsWith": [
    "insulin",
    "thyroid hormones",
    "glucocorticoids"
  ],
  "aromatization": "Nie dotyczy — 191-aminokwasowy hormon peptydowy (somatotropina), NIE steroid; brak interakcji z CYP19",
  "hepatotoxicity": "Niska — brak bezpośredniej hepatotoksyczności; wzrost IGF-1 pośrednio zwiększa ryzyko T2DM/oporności insulinowej (Mauras 2005)",
  "wadaStatus": "banned",
  "detectionWindow": "~24 h test bezpośredni; biomarker 7-14 dni.",
  "benefits": [
    "Przyrost masy beztłuszczowej",
    "Redukcja tłuszczu",
    "Regeneracja",
    "Poprawa skóry, włosów",
    "Poprawa tkanki łącznej i gęstości kolagenu typu 1 (skóra, powięź, ścięgna, chrząstki) — w kontekście anti-aging główny udokumentowany efekt HGH przy niskich protokołach 1-2 IU/dzień"
  ],
  "studies": [
    {
      "title": "Performance Enhancing Hormone Doping in Sport.",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S",
      "journal": "Endocr Rev",
      "pmid": "26247087"
    },
    {
      "title": "Ghrelin Receptor Deletion or Pharmacological Inhibition Improves Muscle Function in Aging Male Mice.",
      "authors": "Kerr HL, Krumm K, Myree N",
      "journal": "Aging Cell",
      "pmid": "41986945"
    },
    {
      "title": "Acromegaly: clinical features and management",
      "authors": "Melmed S.",
      "journal": "N Engl J Med. 2006;355(24):2558-2573.",
      "pmid": "17167139"
    },
    {
      "title": "Application of the Athlete Biological Passport Approach to the Detection of Growth Hormone Doping.",
      "authors": "Equey T, Pastor A, de la Torre Fornell R, Thuyne WV, Deventer K, Sottas PE",
      "journal": "J Clin Endocrinol Metab",
      "pmid": "34726230"
    }
  ],
  "related": [
    "testosterone-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 0.025,
      "medium": 0.05,
      "high": 0.075
    },
    "unit": "IU/nap",
    "note": "Anti-aging 2 IU/dzień, sport 4-6 IU/dzień. Długoterminowo akromegalia. IGF-1 cel <800 ng/mL. HbA1c monitoring."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2 tygodnie przed",
      "markers": "IGF-1, HbA1c, glukoza, insulina, TSH/fT4, lipidogram.",
      "purpose": "Baseline."
    },
    "midCycle": {
      "label": "W trakcie",
      "timing": "Tydzień 6-8",
      "markers": "IGF-1, HbA1c, glukoza, TSH/fT4.",
      "purpose": "IGF-1 >1000 ng/mL = ryzyko akromegalii."
    },
    "postCycle": null,
    "cruise": null
  }
}
