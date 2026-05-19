// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.966Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "nandrolone-info",
  "name": "Nandrolone",
  "image": "/performance/oil-vial-yellow.png",
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
  "aromatization": "Minimalna — steroid 19-nor, 5-10% konwersja CYP19 do E2 (vs testosteron); dominuje aktywność progestogenowa (Bhasin-Kanayama 2003)",
  "hepatotoxicity": "Niska — sterydy macierzysty, NIE 17α-alkilowany; postać iniekcyjna omija first-pass wątrobowy (Pope-Kanayama 2014)",
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
  },
  "variants": [
    {
      "routeId": "deca",
      "routeLabel": "Nandrolon Dekanonat (Deca-Durabolin, wolny)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "HU/PL/UE: Rx (Deca-Durabolin Organon SmPC). USA: Schedule III. Zakazany WADA.",
      "bioavailability": "~95% (IM, wolna hydroliza estru dekanonowego)",
      "onsetTime": "2-3 tygodnie (steady-state 4-6 tygodni)",
      "halfLife": "15 dni (ester dekanonowy)",
      "halfLifeActive": "~24 h wolny Nandrolon (po hydrolizie, wolne uwalnianie typu depot)",
      "detectionWindow": "W moczu: 12-18 miesięcy (długoterminowy metabolit Deca 19-norandrosteron, LC-MS/MS akredytowane WADA — najdłuższe okno detekcji wśród AAS)",
      "aromatization": "Minimalna — ~10% w porównaniu do aromatyzacji testosteronu",
      "hepatotoxicity": "Niska — NIE 17α-alkilowany, IM omija first-pass",
      "quality": {
        "pure": ["Organon Deca-Durabolin 50 mg/ml ampułka (UE Rx)", "UGL Nandrolon Dekanonat 200-300 mg/ml fiolka olejowa, HPLC-testowane"],
        "caution": ["Długoterminowa supresja HPTA 12-16 tygodni", "Wzrost prolaktyny (gotowość kabergoliny)", "Deca-dick utrata libido powszechna"],
        "avoid": ["Planowane ojcostwo w bliskim horyzoncie czasowym (odzyskanie HPTA 6-12 miesięcy po Deca)", "Testowanie sportu wyczynowego w ciągu 12-18 miesięcy"]
      },
      "interactions": ["Kabergolina 0,25 mg 2x/tydzień monitor prolaktyny", "Stack z bazą testosteronu standardowy (Deca samodzielnie ryzyko ED)", "PCT ostatnia iniekcja Deca +3 tygodnie"],
      "doseCalc": {
        "type": "bodyweight",
        "perKg": {"low": 2, "medium": 4, "high": 6},
        "unit": "mg/tydzień (IM, tygodniowo 1x)",
        "note": "100-150 mg/tydzień (Deca-bridge), 300-600 mg/tydzień (bulking). Tygodniowo 1x iniekcja IM z powodu 15-dniowego okresu półtrwania."
      }
    },
    {
      "routeId": "npp",
      "routeLabel": "Nandrolon Fenylopropionian (NPP, szybki)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "UE: Rx (Durabolin, Phenylprop) regionalne. USA: Schedule III. Zakazany WADA.",
      "bioavailability": "~95% (IM, szybsza hydroliza estru fenylopropionianowego)",
      "onsetTime": "1-2 tygodnie (steady-state 2-3 tygodnie)",
      "halfLife": "~5 dni (ester fenylopropionianowy)",
      "halfLifeActive": "~24 h wolny Nandrolon (szybsze uwalnianie niż Deca)",
      "detectionWindow": "W moczu: 10-14 miesięcy (metabolit 19-norandrosteronu, podobny do Deca, długoterminowy)",
      "aromatization": "Minimalna — ~10% w porównaniu do aromatyzacji testosteronu (ten sam macierzysty Nandrolon)",
      "hepatotoxicity": "Niska — NIE 17α-alkilowany",
      "quality": {
        "pure": ["UGL NPP 100 mg/ml fiolka olejowa (HPLC-testowane)", "Niektóre apteki UE Durabolin (regionalne Rx) 25-50 mg/ml"],
        "caution": ["EOD lub 2x tygodniowo iniekcja IM wymagana (krótki okres półtrwania)", "Wzrost prolaktyny na poziomie Deca", "PIP silniejszy na NPP niż Deca"],
        "avoid": ["Planowane ojcostwo w bliskim horyzoncie czasowym", "Jeśli zmęczenie iniekcyjne wysokie, preferowany Deca (tygodniowo 1x)"]
      },
      "interactions": ["Kabergolina 0,25 mg 2x/tydzień", "Stack z bazą testosteronu standardowy", "PCT ostatnia iniekcja NPP +5-7 dni (szybszy klirens niż Deca)"],
      "doseCalc": {
        "type": "bodyweight",
        "perKg": {"low": 2, "medium": 4, "high": 6},
        "unit": "mg/tydzień (IM, EOD lub 2x tygodniowo)",
        "note": "100-150 mg/tydzień (bridge), 300-600 mg/tydzień (bulking). EOD lub 2x tygodniowo iniekcja IM. Szybsze on/off niż Deca → bardziej odpowiednie dla 'krótszych' cykli."
      }
    }
  ],
  "defaultVariant": "deca"
}
