// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.967Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "hgh-info",
  "name": "HGH",
  "image": null,
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
      "title": "Growth hormone in sport: doping and health implications",
      "authors": "Sigalos JT, Pastuszak AW.",
      "journal": "World J Mens Health. 2017;35(2):109-115.",
      "pmid": "28868816"
    },
    {
      "title": "Effects of growth hormone on muscle and physical function",
      "authors": "Liu H, Bravata DM, Olkin I et al.",
      "journal": "Ann Intern Med. 2008;148(10):747-758.",
      "pmid": "18347257"
    },
    {
      "title": "Acromegaly: clinical features and management",
      "authors": "Melmed S.",
      "journal": "N Engl J Med. 2006;355(24):2558-2573.",
      "pmid": "17167139"
    },
    {
      "title": "Growth hormone, IGF-I and insulin and their abuse in sport",
      "authors": "Holt RIG, Sönksen PH.",
      "journal": "Br J Pharmacol. 2008;154(3):542-556.",
      "pmid": "18450787"
    }
  ],
  "related": [
    "mk-677",
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
