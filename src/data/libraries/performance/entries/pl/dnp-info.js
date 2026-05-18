// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.968Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "dnp-info",
  "name": "DNP",
  "image": null,
  "accentColor": "#ef4444",
  "tagColor": "rgba(239,68,68,0.18)",
  "shortDesc": "NIE STOSUJ. 2,4-dinitrofenol, ryzyko śmiertelnej hipertermii. Kontekst edukacyjny.",
  "description": "**OSTRZEŻENIE: DNP jest SKRAJNIE NIEBEZPIECZNY, z udokumentowanymi przypadkami śmiertelnej hipertermii. Ta pozycja jest wyłącznie edukacyjna, NIE dostarcza wskazówek użycia.** 2,4-dinitrofenol to chemikalia przemysłowa, krótko sprzedawana jako lek odchudzający w latach 30. XX w. Rozprzęga mitochondrialną fosforylację oksydacyjną. **Ilościowo**: zdrowa mitochondria produkuje 38 ATP/glukozę; na DNP spada do ~10-15 ATP, brakująca energia rozprasza się niekontrolowanie jako ciepło. Wzrost BMR do +50%, ale niekontrolowana hipertermia 41-43°C i śmierć. **Wzorzec użycia u kulturystów (Petróczi 2015 PMID 26092626 inline)**: pre-contest \"magiczna kula\", protokoły online 200-400 mg/dzień zbliżają się lub przekraczają śmiertelny próg 4.3 mg/kg (~300 mg u dorosłego). Większość zgonów u zdrowych mężczyzn 21-32 lat. **Początek śmiertelnej hipertermii**: 41-43°C w 6-12 h po dawce ostrej — pocenie → tachykardia → tachypnea → splątanie → drgawki → niewydolność narządów. NIE MA antidotum.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Rozprzęgacz mitochondrialny"
    },
    {
      "label": "Okres półtrwania",
      "value": "~36 godzin (kumulatywny)"
    },
    {
      "label": "Dawka śmiertelna",
      "value": "Ostra: 4.3 mg/kg (~300 mg)"
    },
    {
      "label": "Status prawny",
      "value": "USA: wycofany 1938. UE: zakazany. WADA: zakazany."
    }
  ],
  "mechanism": "2,4-dinitrofenol to lipofilny słaby kwas (pKa 4,1), przekracza wewnętrzną błonę mitochondrialną z cytoplazmy do przestrzeni międzybłonowej, **omijając kanał F0 syntazy ATP (bypass cyklu Q)**. Siła protomotoryczna rozprasza się, łańcuch transportu elektronów pompuje dalej, każdy cykl produkuje ciepło, NIE ATP. **Uncoupling jest kumulatywny**: okres półtrwania ~36 h, więc **opóźniona śmiertelna hipertermia może wystąpić 24-48 h po ostatniej dawce**, gdy użytkownik myśli już, że \"cykl się skończył\".",
  "legalStatus": "USA: wycofany 1938 (po śmiertelnych przypadkach). UE: zakazany do użycia ludzkiego.",
  "onsetTime": "6-12 hours",
  "halfLife": "~36 h (cumulative)",
  "interactionsWith": [
    "anything increasing metabolism",
    "thyroid hormones",
    "stimulants"
  ],
  "aromatization": "Nie dotyczy — przemysłowy związek nitroaromatyczny (2,4-dinitrofenol — odsprzęgacz mitochondrialny), NIE steroid",
  "hepatotoxicity": "Ciężka — toksyczność wielonarządowa; hipertermia (>42°C), rabdomioliza, ostra niewydolność wątroby, MOF; zgony niezależnie od dawki powyżej 600 mg (Grundlingh 2011 PMID 21739343)",
  "wadaStatus": "banned",
  "benefits": [
    "BRAK bezpiecznych korzyści."
  ],
  "studies": [
    {
      "title": "2,4-Dinitrophenol (DNP): a weight loss agent with significant acute toxicity and risk of death",
      "authors": "Grundlingh J, Dargan PI, El-Zanfaly M, Wood DM.",
      "journal": "J Med Toxicol. 2011;7(3):205-212.",
      "pmid": "21739343"
    },
    {
      "title": "Dinitrophenol-induced hyperthermia: case series and review",
      "authors": "Bartlett J, Brunner M, Gough K.",
      "journal": "J Emerg Med. 2010;39(2):e85-e89.",
      "pmid": "19150189"
    },
    {
      "title": "Death from accidental 2,4-dinitrophenol poisoning",
      "authors": "Pyle SA, Cooke G.",
      "journal": "JAMA. 1934;103(20):1571.",
      "pmid": null
    },
    {
      "title": "Mortality in DNP poisonings: a critical analysis of online forum-marketed bodybuilder use pattern and case fatality rate",
      "authors": "Petróczi A, Ocampo JAV, Shah I et al.",
      "journal": "Subst Abuse Treat Prev Policy. 2015;10:39.",
      "pmid": "26092626"
    }
  ],
  "related": [],
  "doseCalc": {
    "type": "warning",
    "warning": "NIE STOSUJ. DNP powoduje udokumentowane przypadki śmiertelnej hipertermii (Grundlingh 2011). NIE MA bezpiecznej dawki. Jeśli ktoś znajomy stosuje, ostrzeż go natychmiast i wezwij pomoc medyczną. Hipertermia (>40°C). Dawka śmiertelna 4.3 mg/kg."
  }
}
