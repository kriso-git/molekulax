// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.966Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "nandrolone-info",
  "name": "Nandrolone",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Nandrolone Decanoate (Deca-Durabolin), 19-nor AAS. Klasyczny \"bulking\" AAS z efektem regeneracji stawów.",
  "description": "Nandrolone Decanoate to pochodna 19-nor testosteronu, długo działający iniekcyjny AAS. **Warianty estru**: Decanoate (Deca-Durabolin) ~15-dniowy t1/2, depo-styl, 1x tygodniowo, więcej retencji wody; Phenylpropionate (NPP) ~5-dniowy t1/2, szybszy profil on/off, 2x tygodniowo, anegdotycznie mniej retencji. Klinicznie dla anemii i kacheksji. W kulturystyce dla masy i regeneracji stawów (wzrost syntezy kolagenu). Słaba aromatyzacja (~10% vs testosteron), a 5α-reduktaza tworzy dihydronandrolon o tylko ~20% aktywności AR (vs DHT) — **to fizjologiczna podstawa ochrony prostaty, jedna z głównych zalet Nandrolonu vs Testosteron**. \"Deca-dick\" spadek libido (wzrost prolaktyny); \"Deca-blues\" anegdota nastrojowa: przewlekłe 19-nor podejrzewane o przesunięcie dopamina-serotonina (depresyjne objawy u części użytkowników po 3+ miesiącach).",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "19-nor AAS, agonista AR"
    },
    {
      "label": "Okres półtrwania",
      "value": "15 dni (dekanian)"
    },
    {
      "label": "Stosunek",
      "value": "125:37"
    },
    {
      "label": "Status prawny",
      "value": "USA: Schedule III. UE: Rx."
    }
  ],
  "mechanism": "19-nor AAS, bezpośredni agonista AR. Słaba aromatyzacja (~10% vs testosteron). 5α-reduktaza tworzy dihydronandrolon o tylko ~20% aktywności AR (vs DHT) — fizjologicznie chroni prostatę, jedna z głównych zalet farmakologicznych. Wtórnie częściowy agonista receptora progesteronowego (wzrost prolaktyny).",
  "legalStatus": "USA: Schedule III. UE: Rx. WADA: zakazany.",
  "onsetTime": "2-3 weeks",
  "halfLife": "15 days (decanoate)",
  "interactionsWith": [
    "cabergoline (prolactin)",
    "aromatase inhibitors"
  ],
  "wadaStatus": "banned",
  "androgenicRatio": "125:37",
  "benefits": [
    "Wzrost masy w \"bulkingu\"",
    "Regeneracja stawów: synteza kolagenu",
    "Rzadsze efekty prostaty",
    "Synteza kolagenu i wsparcie tkanki łącznej: nandrolon bezpośrednio podnosi syntezę prokolagenu typu 1 (przegląd Geusens 1995 PMID 7770048), przewlekła niska dawka (100-150 mg/tydzień) udokumentowana dla ulgi w bólu stawów"
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
    "note": "Deca-bridge 100-150 mg/tydzień, bulking 300-600 mg/tydzień. Ester dekanowy 15-dniowy. Prolaktyna obowiązkowo monitorowana."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed",
      "markers": "Pełna morfologia, lipidogram, czynność wątroby, panel hormonalny, HbA1c, czynność nerek, PSA.",
      "purpose": "Baseline. Podwyższona prolaktyna to przeciwwskazanie."
    },
    "midCycle": {
      "label": "W trakcie",
      "timing": "Tydzień 6-8",
      "markers": "Lipidogram, wątroba, E2, prolaktyna, ciśnienie.",
      "purpose": "Prolaktyna >25 ng/mL: kabergolina. Drastyczny spadek HDL = przerwanie."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "3 tygodnie po ostatniej iniekcji + 12-16 tydzień",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, prolaktyna.",
      "purpose": "Supresja przez 12-16 tygodni; PCT dłuższe."
    },
    "cruise": {
      "label": "Podczas Cruise",
      "timing": "Co 6 tygodni",
      "markers": "Total T, E2, prolaktyna, lipidogram, HbA1c, PSA.",
      "purpose": "Długoterminowy cruise możliwy przy niskiej dawce."
    }
  }
}
