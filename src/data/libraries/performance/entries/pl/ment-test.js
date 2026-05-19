// Population Council male contraceptive research (1990s-2000s). Sources:
// Sundaram 1995 PMID 7657009 (MENT pharmacology), Anderson 1999 PMID 10024455
// (MENT contraceptive trial), Pope-Kanayama 2014 PMID 24423981, Hartgens-
// Kuipers 2004 PMID 15233599, Kumar 1995 PMID 7779238. Cross-framed as
// synthetic androgen (Test column); progestin frame (19-Nor) is sub-task 4.

export default {
  "id": "ment-test",
  "name": "MENT (Trestolone) — frame syntetycznego androgenu",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#1D9E75",
  "tagColor": "rgba(29,158,117,0.18)",
  "shortDesc": "Trestolon (7α-metylo-19-nortestosteron, MENT), kandydat antykoncepcji męskiej Population Council z lat 90. Syntetyczny androgen — ~8-10x powinowactwo AR vs testosteron, NIE 17α-alkilowany → niska hepatotoksyczność. Dwa warianty: Octan (krótki) i Enantat (powolny). Cross-framed: analog 19-Nor osobny wpis.",
  "description": "MENT (Trestolon, 7α-metylo-19-nortestosteron) to syntetyczny steryd androgenny opracowany przez Population Council (NYC) w późnych latach 90.-wczesnych 2000. jako kandydat antykoncepcji męskiej (Anderson 1999 PMID 10024455 badanie kliniczne). Aktywność anaboliczno-androgenna wynosi ~8-10x testosteron in vitro w teście wiązania AR (Sundaram 1995 PMID 7657009) — jeden z najsilniejszych syntetycznych androgenów. Grupa 7α-metylowa hamuje wiązanie substratu 5α-reduktazy (NIE konwertuje do DHT → niższa aktywność DHT skóry głowy i androgenna prostaty niż testosteron), podczas gdy struktura 19-nor wykazuje również AKTYWNOŚĆ PROGESTOGENOWĄ (charakter wpisu cross-framed: tutaj we frame syntetycznego androgenu, osobny wpis we frame 19-Nor). Aromatyzuje przez CYP19 do 7α-metyloestradiolu, który ma niższe powinowactwo do ER niż zwykły E2 → efekt estrogenny słabszy niż na Test. NIE 17α-alkilowany → niska hepatotoksyczność. W badaniach klinicznych (Population Council 1999-2005) testowano go jako 4-tygodniowy implant + formulację 8 mg/dzień sublingwalną; rozwój antykoncepcji męskiej został ZATRZYMANY po Phase III ze względów finansowych. W kontekście kulturystycznym rynek UGL oferuje ester octanowy (Trestolone Octan, krótki, ~8h okres półtrwania) i ester enantatowy (Trestolone Enantat, powolny, ~5-7 dni okres półtrwania). Zakaz WADA cały rok.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista AR (8-10x Test) + receptor progesteronu, 7α-metylo-19-nor-T, słabo aromatyzuje"},
    {"label": "Anaboliczny:Androgenny", "value": "~2300:650 (ekstrapolowane in vitro AR-binding)"},
    {"label": "Okres półtrwania", "value": "~8 h (Ac), 5-7 d (Enan)"},
    {"label": "Początek", "value": "12-24 h (Ac IM), 48-72 h (Enan IM)"},
    {"label": "Status prawny", "value": "Nigdy nie Rx, tylko UGL. Schedule III analog (USA), zakaz WADA."}
  ],
  "mechanism": "Agonista AR 7α-metylo-19-nortestosteron. Grupa 7α-metylowa zapewnia TRZY kluczowe modyfikacje strukturalne: (1) hamuje wiązanie substratu 5α-reduktazy → NIE konwertuje do DHT (niższa aktywność DHT skóry głowy, androgenna prostaty); (2) zwiększa powinowactwo wiązania AR (~8-10x Test, Sundaram 1995 PMID 7657009); (3) stabilizuje cząsteczkę przeciwko oksydacyjnemu rozkładowi 17β-HSD → dłuższy okres półtrwania w osoczu. Strukturalny charakter 19-nor zapewnia AKTYWNOŚĆ PROGESTOGENOWĄ (umiarkowane powinowactwo PR), użyteczną dla celu antykoncepcji męskiej (negatywne sprzężenie zwrotne na osi HPG) ALE w kontekście kulturystycznym tworzy potrzebę monitora prolaktyny. Aromatyzuje przez CYP19 do 7α-metyloestradiolu (około 50% poziomu konwersji E2 Test) — ale powinowactwo metabolitu do ER jest niższe niż zwykłego E2 → efekt estrogenny klinicznie słabszy.",
  "legalStatus": "Nigdy nie Rx (rozwój antykoncepcji męskiej Population Council utknął ze względów finansowych). USA: Schedule III analog (DEA, klasyfikacja designer AAS). UE/HU/PL: kontrolowany analog AAS, nielegalny bez recepty. Zakaz WADA cały rok (S1.1.a).",
  "onsetTime": "12-24 h (Ac IM), 48-72 h (Enan IM)",
  "halfLife": "~8 h (Ac), 5-7 d (Enan)",
  "halfLifeActive": "~8 h wolny Trestolon (po Ac), depot ~24 h (po Enan)",
  "interactionsWith": ["cabergoline", "testosterone", "anastrozole", "warfarin"],
  "aromatization": "Tak — substrat CYP19, metabolit 7α-metyloestradiol (niższe powinowactwo ER niż zwykły E2); klinicznie wzrost E2 umiarkowany-niski (Sundaram 1995 PMID 7657009, Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; IM pomija first-pass. ALT/AST <2x normalne dla cyklu tylko-MENT (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "~2300:650 (ekstrapolowane z powinowactwa wiązania AR in vitro, NIE klasyczny test prostaty brzusznej szczura)",
  "bindingAffinity": "Skrajnie wysokie powinowactwo do AR (~8-10x testosteron in vitro, Sundaram 1995 PMID 7657009) + umiarkowana aktywność PR.",
  "detectionWindow": "Metabolity trestolonu (rodzina metabolitów 7α-metylo-19-nor-androstenu) w moczu: Ac 2-3 tygodnie, Enan 6-8 tygodni. Akredytowane WADA LC-MS/MS.",
  "benefits": [
    "Skrajnie wysokie powinowactwo do AR → drastyczny przyrost masy i siły przy niskich dawkach (50-100 mg/tydzień ekwiwalent 500+ mg Test)",
    "NIE substrat 5α-reduktazy → niższa aktywność DHT skóry głowy i androgenna prostaty niż na Test",
    "Aromatyzacja łagodniejsza (7α-metyloestradiol ma niższe powinowactwo ER)",
    "Niska hepatotoksyczność (NIE 17α-alkilowany)",
    "Znaczenie kliniczne: kandydat antykoncepcji męskiej (Population Council dotarł do Phase III badania)"
  ],
  "quickStart": [
    "SKRAJNIE POTENCJALNY — dawki są znacznie niższe niż na Test (50-100 mg/tydzień Trestolon ekwiwalent 500-1000 mg Test)",
    "Aktywność PR wymaga monitora prolaktyny + cabergoline w gotowości",
    "Aromatyzacja słabsza niż na Test, ALE NIE zero → AI jeśli E2 wymaga",
    "PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowe",
    "Wpis cross-framed: to frame Test/syntetycznego androgenu; frame 19-Nor to osobny wpis"
  ],
  "expectations": [
    {"label": "Pierwszy tydzień", "body": "Po iniekcji Ac IM 12-24 h początek, ostry wzrost siły po 5-7 dniach. Enan IM 48-72 h początek, steady-state 3-4 tygodnie."},
    {"label": "Tydzień 3-4", "body": "Drastyczny przyrost masy (50-100 mg/tydzień MENT-Ac → 4-6 kg lean mass w 4 tygodnie, ekwiwalent dawki znacznie niższy niż Test). Wzrost prolaktyny oczekiwany (aktywność PR)."},
    {"label": "Koniec tygodnia 8-10", "body": "Maksymalny efekt, spadek HDL umiarkowany-wysoki, monitor prolaktyny kluczowy, planowanie PCT."}
  ],
  "quality": {
    "pure": [
      "UGL Trestolone Octan 50-100 mg/ml fiolka olejowa, sterylnie filtrowana (najczęstszy format UGL)",
      "UGL Trestolone Enantat 100-200 mg/ml fiolka olejowa (mniej dostępny niż Ac)",
      "Źródło testowane HPLC OBOWIĄZKOWE — MENT często fałszowany lub poddosowany (drogi surowiec)"
    ],
    "caution": [
      "Wzrost prolaktyny częsty (aktywność PR) → ryzyko ginekomastii (paradoksalnie, ponieważ aromatyzacja jest łagodna)",
      "Zaburzenia lipidowe: spadek HDL umiarkowany-wysoki",
      "PIP (ból w miejscu wstrzyknięcia) silniejszy w wariancie Ac niż Enan (niższa rozpuszczalność)",
      "Zmiany nastroju (epizody depresyjne napędzane aktywnością PR rzadkie raporty)"
    ],
    "avoid": [
      "Jakikolwiek istniejący prolaktynoma lub hiperprolaktynemia BEZWZGLĘDNE przeciwwskazanie",
      "Predyspozycja psychiatryczna (depresja, lęk)",
      "Planowane ojcostwo (supresja HPTA + komplikacje aktywności PR)",
      "Stosowanie przez kobiety (ekstremalna aktywność androgenna → szybka nieodwracalna wirylizacja)",
      "Ryzyko sercowo-naczyniowe"
    ]
  },
  "interactions": [
    "Cabergoline 0,25-0,5 mg E3D: monitor prolaktyny + leczenie w razie potrzeby",
    "Stack z bazą testosteronu: NIE standardowy (MENT sam jest wystarczająco potencjalny), ALE baza TRT + MENT-Ac \"hardcore bulk\" stack jest znany",
    "Anastrozol 0,25 mg E3D: tylko jeśli laboratoryjnie potwierdzone wysokie E2",
    "Warfaryna: efekt antykoagulacyjny może być wzmocniony"
  ],
  "studies": [
    {"title": "7 alpha-methyl-19-nortestosterone (MENT): the optimal androgen for male contraception", "authors": "Sundaram K, Kumar N, Bardin CW.", "journal": "Ann Med. 1993;25(2):199-205. (and 1995 follow-up PMID 7657009)", "pmid": "7657009"},
    {"title": "7α-methyl-19-nortestosterone maintains sexual behavior and mood in hypogonadal men", "authors": "Anderson RA, Wallace AM, Sattar N, Kumar N, Sundaram K.", "journal": "J Clin Endocrinol Metab. 1999;84(10):3556-62.", "pmid": "10024455"},
    {"title": "Antifertility activity and pharmacokinetics of MENT acetate", "authors": "Kumar N, Suvisaari J, Tsong YY, Lähteenmäki P, Bardin CW, Sundaram K.", "journal": "Steroids. 1995;60(4):305-9.", "pmid": "7779238"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"}
  ],
  "faq": [
    {"q": "Co to jest wpis cross-framed?", "a": "MENT (Trestolon, 7α-metylo-19-nortestosteron) strukturalnie należy JEDNOCZEŚNIE do DWÓCH klas chemicznych: (1) syntetyczny androgen — substytucja 7α-metyl daje unikalny profil nie-DHT-konwertowalny; (2) pochodna 19-Nor — usunięcie grupy metylowej 19-węgla daje aktywność progestogenową. Struktura biblioteki według referencji HTML wymienia go w obu kolumnach klasy z DWOMA OSOBNYMI wpisami: 'MENT-test' (ten, frame syntetycznego androgenu, kolumna Test) i 'MENT-19nor' (osobny wpis w kolumnie 19-Nor, w sub-task 4). Treść dwóch wpisów pokrywa się w ~80%, ale framing 'powinowactwo wiązania AR vs aktywność progestogenowa' różni się."},
    {"q": "Dlaczego zatrzymano rozwój antykoncepcji męskiej?", "a": "Population Council prowadził badania kliniczne Phase II-III w latach 1999-2005 z formulacją MENT sublingwalnego implantu 4-tygodniowego (Anderson 1999 PMID 10024455). Wyniki były obiecujące (90%+ supresja spermatogenezy, dobra tolerancja), ALE w 2005 r. Population Council ZATRZYMAŁ Phase III ze względów finansowych — biorąc pod uwagę dominację antykoncepcji żeńskiej na rynku, ryzyko niepowodzenia komercyjnego było zbyt wysokie dla inwestorów. Dziś rozwój MENT antykoncepcji męskiej jest w dużej mierze martwy, z wyjątkiem niektórych akademickich badań follow-up."},
    {"q": "MENT vs Testosteron bezpośrednie porównanie?", "a": "W powinowactwie AR MENT jest ~8-10x silniejszy (Sundaram 1995 PMID 7657009), więc 100 mg/tydzień MENT ekwiwalent około 800-1000 mg/tydzień Test. NIE 5α-redukuje → niższa aktywność DHT skóry głowy i AR prostaty (korzyść dla zapobiegania wypadaniu włosów i BPH). Aromatyzacja łagodniejsza (7α-metyloestradiol słabszy metabolit ER). ALE: aktywność PR (Test nie aktywuje PR) → monitor prolaktyny + potrzeba cabergoline. Netto-pozytywny dla doświadczonych użytkowników kulturystycznych, ale NIE pierwszy cykl."},
    {"q": "Wariant Octan vs Enantat — który wybrać?", "a": "Ac (Octan): krótki (~8 h okres półtrwania), EOD lub codzienna iniekcja IM, szybki początek (12-24 h), PIP częsty. Częstszy w kontekście kulturystycznym (lepsza kontrola, łatwiejsze przerwanie). Enan (Enantat): długi (~5-7 dni okres półtrwania), tygodniowo 1-2x IM, wolniejszy początek (48-72 h, steady-state 3-4 tygodnie), mniej PIP. Ac zalecany dla nowych użytkowników MENT (lepsza kontrola dawki + szybkie przerwanie jeśli pojawią się efekty uboczne); Enan wygodniejszy dla doświadczonych."},
    {"q": "Nowoczesna wykrywalność WADA?", "a": "MENT-Ac detekcja w moczu 2-3 tygodnie, MENT-Enan 6-8 tygodni (akredytowane WADA LC-MS/MS). Rodzina metabolitów 7α-metylo-19-nor-androstenu jest na liście celów WADA od późnych lat 2010.; wykrywalne w nowoczesnych testach sportowców. Niektórzy używali go jako pre-2010 strefę designer-sterydu, ale dziś jest jasny zakaz WADA + detekcja LC-MS/MS."}
  ],
  "related": ["testosterone-info", "nandrolone-info", "trenbolone-info", "anavar-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 50, "medium": 100, "high": 150},
    "unit": "mg/tydzień MENT (IM, Ac EOD lub Enan tygodniowo 1-2x)",
    "note": "Ekwiwalent 500-1500 mg/tydzień Test na podstawie powinowactwa wiązania AR. Maksimum 8-10 tygodni cyklu. Cabergoline w gotowości (aktywność PR). PCT 4-6 tygodni."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Panel hormonów: Total T, Free T, E2, LH, FSH, SHBG, Prolaktyna (kluczowa ze względu na aktywność PR). Lipidogram. Wątrobowe. PSA.",
      "purpose": "Baseline prolaktyny kluczowy ze względu na aktywność PR."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Tydzień 3-4",
      "markers": "Prolaktyna (potrzeba cabergoline), E2, Total T, lipidogram, wątrobowe.",
      "purpose": "Prolaktyna >25 ng/mL → zwiększenie dawki cabergoline."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Ostatnia dawka: Ac +2-3 dni, Enan +14-21 dni start PCT",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, Prolaktyna (recovery), lipid recovery.",
      "purpose": "Weryfikacja recovery HPTA + osi PR."
    },
    "cruise": {
      "label": "Na cruise (cruise MENT NIE standardowy)",
      "timing": "Cruise MENT atypowy ze względu na aktywność PR + wysoką moc",
      "markers": "N/A",
      "purpose": "MENT wyłącznie do użytku cyklicznego. Cruise TRT-Test preferowany zamiast."
    }
  },
  "variants": [
    {
      "routeId": "ac",
      "routeLabel": "Trestolone Octan (IM, krótki)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Nigdy nie Rx (badanie Population Council zatrzymane). Tylko UGL. Zakaz WADA.",
      "bioavailability": "~95-100% (IM, szybka hydroliza estru Ac)",
      "onsetTime": "12-24 h (IM, fast-acting Ac)",
      "halfLife": "~8 h (macierzysty Trestolon po Ac)",
      "halfLifeActive": "~8 h",
      "detectionWindow": "2-3 tygodnie w moczu (krótki ester).",
      "aromatization": "Tak — CYP19 → 7α-metyloestradiol, niższe powinowactwo ER niż E2.",
      "hepatotoxicity": "Niska — NIE 17α-alkilowany.",
      "quality": {
        "pure": ["Klarowny jasnożółty olej, fiolka 10 ml, 50-100 mg/ml koncentracja UGL", "Źródło testowane HPLC obowiązkowe"],
        "caution": ["EOD/codzienna iniekcja IM potrzebna", "PIP częsty", "Monitor prolaktyny"],
        "avoid": ["Jeśli silne zmęczenie iniekcją, Enan preferowany", "Prolaktynoma"]
      },
      "interactions": ["Cabergoline E3D monitor PR", "PCT ostatnia iniekcja Ac +2-3 dni"],
      "doseCalc": {
        "type": "fixed",
        "fixed": {"low": 50, "medium": 75, "high": 100},
        "unit": "mg/tydzień (IM, EOD lub 3x/tydzień)",
        "note": "50-100 mg/tydzień, EOD lub E3D. PCT ostatnia iniekcja +2-3 dni."
      }
    },
    {
      "routeId": "en",
      "routeLabel": "Trestolone Enantat (IM, powolny)",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Nigdy nie Rx. Tylko UGL. Zakaz WADA.",
      "bioavailability": "~95-100% (IM, powolna hydroliza estru Enan)",
      "onsetTime": "48-72 h (IM, slow-acting; steady-state 3-4 tygodnie)",
      "halfLife": "5-7 d (ester Enantatowy)",
      "halfLifeActive": "~24 h wolny Trestolon (po hydrolizie)",
      "detectionWindow": "6-8 tygodni w moczu.",
      "aromatization": "Tak — CYP19 → 7α-metyloestradiol.",
      "hepatotoxicity": "Niska — NIE 17α-alkilowany.",
      "quality": {
        "pure": ["Klarowny żółtawo-złoty olej, fiolka 10 ml, 100-200 mg/ml UGL", "Testowany HPLC"],
        "caution": ["Tygodniowa 1-2x iniekcja IM", "PIP mniej niż na Ac", "Steady-state 3-4 tygodnie"],
        "avoid": ["Krótki cykl (4-6 tygodni) NIE skuteczny", "Prolaktynoma"]
      },
      "interactions": ["Cabergoline E3D", "PCT ostatnia iniekcja Enan +14-21 dni"],
      "doseCalc": {
        "type": "fixed",
        "fixed": {"low": 100, "medium": 150, "high": 200},
        "unit": "mg/tydzień (IM, podzielone 1-2x)",
        "note": "100-200 mg/tydzień, tygodniowo 1-2x. Minimum 8-10 tygodni cyklu. PCT ostatnia iniekcja +14-21 dni."
      }
    }
  ],
  "defaultVariant": "ac"
}
