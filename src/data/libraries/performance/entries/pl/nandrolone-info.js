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
      "id": "deca",
      "routeId": "deca",
      "routeLabel": {
        "hu": "Nandrolone Decanoate (Deca-Durabolin, lassú észter)",
        "en": "Nandrolone Decanoate (Deca-Durabolin, slow ester)",
        "pl": "Nandrolon Dekanian (Deca-Durabolin, wolny ester)"
      },
      "routeNote": {
        "hu": "A klasszikus bulking-választás 'lassú' progesztogén AAS-stack-ekhez. ~15 napos felezés ⇒ heti 1x IM-injekció elegendő. NEM 17α-alkilált, IM bypass-olja first-pass-t. Minimális aromatizáció (~10%), de a progesztogén receptor-aktivitás miatt 'Deca-dick' libidó-csökkenés és prolaktin-emelkedés gyakori. A leghosszabb detection-ablak AAS-ek közül (12-18 hó).",
        "en": "The classic bulking choice for 'slow' progestogenic AAS stacks. ~15-day half-life ⇒ once-weekly IM injection sufficient. NOT 17α-alkylated, IM bypasses first-pass. Minimal aromatization (~10%), but progestogenic receptor activity causes 'Deca-dick' libido loss and prolactin elevation. Longest detection window among AAS (12-18 months).",
        "pl": "Klasyczny wybór bulking dla 'wolnych' progestagennych stacków AAS. ~15-dniowy okres półtrwania ⇒ wystarczy iniekcja IM raz w tygodniu. NIE 17α-alkilowany, IM omija first-pass. Minimalna aromatyzacja (~10%), ale aktywność progestagenna powoduje 'Deca-dick' (utratę libido) i wzrost prolaktyny. Najdłuższe okno detekcji wśród AAS (12-18 miesięcy)."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "15 dni (ester dekanonowy)",
      "halfLifeActive": "~24 h wolny Nandrolon (po hydrolizie, wolne uwalnianie typu depot)",
      "bioavailability": "~95% (IM, wolna hydroliza estru dekanonowego)",
      "onsetTime": {
        "hu": "2-3 hét (steady-state 4-6 hét)",
        "en": "2-3 weeks (steady-state 4-6 weeks)",
        "pl": "2-3 tygodnie (stan stacjonarny 4-6 tygodni)"
      },
      "dosing": {
        "hu": "200-400 mg/hét IM, heti 1x. Bulking 400-600 mg/hét. Deca-bridge 100-150 mg/hét. Minimum 12-16 hét ciklus a hosszú felezés miatt. PCT utolsó injekció +3 hét. Cabergoline + Testosterone-base KÖTELEZŐ.",
        "en": "200-400 mg/week IM, once weekly. Bulking 400-600 mg/week. Deca-bridge 100-150 mg/week. Minimum 12-16 week cycle due to long half-life. PCT starts last injection +3 weeks. Cabergoline + Testosterone-base MANDATORY.",
        "pl": "200-400 mg/tydzień IM, raz w tygodniu. Bulking 400-600 mg/tydzień. Deca-bridge 100-150 mg/tydzień. Minimum 12-16 tygodni cyklu z powodu długiego okresu półtrwania. PCT od ostatniej iniekcji +3 tygodnie. Cabergolina + Testosteron-baza OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 200,
          "medium": 400,
          "high": 600
        },
        "unit": "mg/tydzień",
        "note": {
          "hu": "200-600 mg/hét, heti 1x IM (15 napos felezés). Bulking 400-600, bridge 100-200. PCT utolsó injekció +3 hét. Apaság-tervezés esetén kerülendő (HPTA-recovery 6-12 hó).",
          "en": "200-600 mg/week, once weekly IM (15-day half-life). Bulking 400-600, bridge 100-200. PCT starts last injection +3 weeks. Avoid if planning fatherhood (HPTA recovery 6-12 months).",
          "pl": "200-600 mg/tydzień, raz w tygodniu IM (15-dniowy okres półtrwania). Bulking 400-600, bridge 100-200. PCT od ostatniej iniekcji +3 tygodnie. Unikać przy planowanym ojcostwie (regeneracja HPTA 6-12 miesięcy)."
        }
      },
      "defaultVialMg": 2000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 400000,
      "hepatotoxicity": "low",
      "aromatization": "low",
      "androgenicRatio": "125:37",
      "legalStatus": "HU/PL/UE: Rx (Deca-Durabolin Organon SmPC, wskazanie: osteoporoza, anemia). USA: Schedule III. Zakazany WADA.",
      "detectionWindow": "W moczu: 12-18 miesięcy (długoterminowy metabolit Deca 19-norandrosteron, LC-MS/MS akredytowane WADA — NAJDŁUŻSZE okno detekcji wśród AAS).",
      "quality": {
        "pure": [
          "Organon Deca-Durabolin 50 mg/ml jasno-żółta olejowa ampułka (UE Rx, klasyka od 1962)",
          "UGL Nandrolon Dekanonat 200-300 mg/ml jasno-żółta fiolka olejowa, HPLC-testowane źródło obowiązkowe"
        ],
        "caution": [
          "Długoterminowa supresja HPTA po 12-16 tygodniach — regeneracja może trwać 6-12 miesięcy",
          "Wzrost prolaktyny z powodu powinowactwa do receptora progestagennego (gotowość kabergoliny)",
          "'Deca-dick' utrata libido + ED powszechne (de Souza 2011)",
          "Długie okno detekcji (12-18 miesięcy) — unikać LATA przed testowaniem sportu wyczynowego"
        ],
        "avoid": [
          "Planowane ojcostwo w bliskim horyzoncie czasowym (regeneracja HPTA 6-12 miesięcy po Deca)",
          "Testowanie sportu wyczynowego w ciągu 12-18 miesięcy",
          "Stan wrażliwy na prolaktynę (prolactinoma, ginekomastia)"
        ]
      },
      "interactions": [
        "Kabergolina 0,25 mg 2x/tydzień monitor prolaktyny OBOWIĄZKOWY",
        "Stack z bazą testosteronu OBOWIĄZKOWY (Deca samodzielnie ryzyko ED)",
        "PCT od ostatniej iniekcji Deca +3 tygodnie (długi wash-out z powodu 15-dniowego okresu półtrwania)"
      ]
    },
    {
      "id": "npp",
      "routeId": "npp",
      "routeLabel": {
        "hu": "Nandrolone Phenylpropionate (NPP, gyors észter)",
        "en": "Nandrolone Phenylpropionate (NPP, fast ester)",
        "pl": "Nandrolon Fenylopropionian (NPP, szybki ester)"
      },
      "routeNote": {
        "hu": "Gyorsabb Phenylpropionate-ester ~5 napos felezéssel ⇒ EOD vagy 2x heti IM-injekció szükséges. Ugyanaz a parent Nandrolone, így a progesztogén-prolaktin profil azonos a Deca-éval, csak gyorsabb on/off. Rövidebb (8-10 hetes) ciklusokra alkalmasabb mint a Deca. PIP NPP-n jellemzően erősebb. Néhány felhasználó alacsony dózisú NPP-t (~140 mg/hét) ízületi-support célra futtatja.",
        "en": "Faster Phenylpropionate ester with ~5-day half-life ⇒ EOD or twice-weekly IM injection required. Same parent Nandrolone, so progestogenic-prolactin profile is identical to Deca, just faster on/off. More suitable for shorter (8-10 week) cycles than Deca. PIP typically stronger on NPP. Some users run low-dose NPP (~140 mg/week) for joint support.",
        "pl": "Szybszy ester Fenylopropionianowy z ~5-dniowym okresem półtrwania ⇒ wymagana iniekcja IM EOD lub dwa razy w tygodniu. Ten sam macierzysty Nandrolon, więc profil progestagenno-prolaktynowy identyczny z Deca, tylko szybsze on/off. Bardziej odpowiedni do krótszych cykli (8-10 tygodni) niż Deca. PIP zazwyczaj silniejszy na NPP. Niektórzy użytkownicy stosują NPP w niskich dawkach (~140 mg/tydzień) na wsparcie stawów."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "~5 dni (ester fenylopropionianowy)",
      "halfLifeActive": "~24 h wolny Nandrolon (szybsze uwalnianie niż Deca)",
      "bioavailability": "~95% (IM, szybsza hydroliza estru fenylopropionianowego)",
      "onsetTime": {
        "hu": "1-2 hét (steady-state 2-3 hét)",
        "en": "1-2 weeks (steady-state 2-3 weeks)",
        "pl": "1-2 tygodnie (stan stacjonarny 2-3 tygodnie)"
      },
      "dosing": {
        "hu": "100-150 mg EOD vagy 200-400 mg/hét IM, 2x heti osztva. Bulking 300-600 mg/hét. Ízületi-bridge 100-150 mg/hét. 8-10 hét ciklus. PCT utolsó injekció +5-7 nap. Cabergoline + Testosterone-base KÖTELEZŐ.",
        "en": "100-150 mg EOD or 200-400 mg/week IM, split 2× weekly. Bulking 300-600 mg/week. Joint-bridge 100-150 mg/week. 8-10 week cycle. PCT starts last injection +5-7 days. Cabergoline + Testosterone-base MANDATORY.",
        "pl": "100-150 mg EOD lub 200-400 mg/tydzień IM, podzielone 2× w tygodniu. Bulking 300-600 mg/tydzień. Joint-bridge 100-150 mg/tydzień. 8-10 tygodni cyklu. PCT od ostatniej iniekcji +5-7 dni. Cabergolina + Testosteron-baza OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 100,
          "medium": 200,
          "high": 300
        },
        "unit": "mg/inj",
        "note": {
          "hu": "100-150 mg EOD vagy 200-400 mg/hét, 2x heti IM (5 napos felezés). Bulking 300-600/hét, bridge 100-150. PCT utolsó injekció +5-7 nap (rövid wash-out mint Deca).",
          "en": "100-150 mg EOD or 200-400 mg/week, split 2× weekly IM (5-day half-life). Bulking 300-600/week, bridge 100-150. PCT starts last injection +5-7 days (shorter wash-out than Deca).",
          "pl": "100-150 mg EOD lub 200-400 mg/tydzień, podzielone 2× w tygodniu IM (5-dniowy okres półtrwania). Bulking 300-600/tydzień, bridge 100-150. PCT od ostatniej iniekcji +5-7 dni (krótszy wash-out niż Deca)."
        }
      },
      "defaultVialMg": 1000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 100000,
      "hepatotoxicity": "low",
      "aromatization": "low",
      "androgenicRatio": "125:37",
      "legalStatus": "UE: Rx (Durabolin, Phenylprop) regionalne. USA: Schedule III. HU/PL: rzadko dostępne Rx, zazwyczaj UGL. Zakazany WADA.",
      "detectionWindow": "W moczu: 10-14 miesięcy (metabolit 19-norandrosteronu, podobny do Deca, długoterminowy).",
      "quality": {
        "pure": [
          "UGL NPP 100 mg/ml jasno-żółta fiolka olejowa (HPLC-testowane źródło obowiązkowe)",
          "Niektóre apteki UE Durabolin (regionalne Rx) 25-50 mg/ml — rzadkie"
        ],
        "caution": [
          "EOD lub 2× tygodniowo iniekcja IM wymagana (krótki okres półtrwania)",
          "Wzrost prolaktyny na poziomie Deca (gotowość kabergoliny)",
          "PIP silniejszy na NPP niż Deca (nośnik krótkiego estru gęstszy)",
          "Okno detekcji długie (10-14 miesięcy) — unikać lata przed sportem wyczynowym"
        ],
        "avoid": [
          "Planowane ojcostwo w bliskim horyzoncie czasowym (regeneracja HPTA 4-8 miesięcy po NPP)",
          "Jeśli zmęczenie iniekcyjne wysokie, preferowany Deca (tygodniowo 1× vs EOD)"
        ]
      },
      "interactions": [
        "Kabergolina 0,25 mg 2x/tydzień monitor prolaktyny OBOWIĄZKOWY",
        "Stack z bazą testosteronu OBOWIĄZKOWY",
        "PCT od ostatniej iniekcji NPP +5-7 dni (szybszy klirens niż Deca)"
      ]
    }
  ],
  "defaultVariant": "deca",
  "anecdote": "Raporty anegdotyczne opisują użytkowników prowadzących cykle Nandrolonu (estry NPP lub Deca) przez 3-5 miesięcznych faz masowych z istotnymi przyrostami. Doniesienia społeczności wskazują, że podwyższona prolaktyna jest częsta, czasem dodawany jest P5P lub kabergolina jako środek zaradczy. Deca to dłużej działający ester i jest bardziej kojarzony z retencją wody, podczas gdy NPP działa krócej i anegdotycznie wywołuje mniejszą retencję wody, choć indywidualna zmienność jest duża. Niektórzy użytkownicy zgłaszają łagodne objawy depresyjne około 3 miesiąca stosowania NPP, co w literaturze powiązano z aktywnością neurosteroidową i progestagenną. Niskodawkowy NPP (około 140 mg/tydzień) jest czasami stosowany cały rok jako wsparcie stawów u użytkowników z przewlekłymi problemami stawowymi. Ogólnie estry Nandrolonu pozostają fundamentalnym związkiem w cyklach masowych, a działania niepożądane związane z prolaktyną i zdrowiem psychicznym są najczęściej wymienianymi kompromisami."
}
