// Population Council male contraceptive research (1990s-2000s). Sources:
// Sundaram 1993 PMID 8489761 (MENT pharmacology), Anderson 1999 PMID 10522995
// (MENT contraceptive trial), Pope-Kanayama 2014 PMID 24423981, Hartgens-
// Kuipers 2004 PMID 15248788, Suvisaari 1997 PMID 9194649. Cross-framed as
// synthetic androgen (Test column); progestin frame (19-Nor) is sub-task 4.

export default {
  "id": "ment-test",
  "name": "MENT (Trestolone) — frame syntetycznego androgenu",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#1D9E75",
  "tagColor": "rgba(29,158,117,0.18)",
  "shortDesc": "Trestolon (7α-metylo-19-nortestosteron, MENT), kandydat antykoncepcji męskiej Population Council z lat 90. Syntetyczny androgen — ~8-10x powinowactwo AR vs testosteron, NIE 17α-alkilowany → niska hepatotoksyczność. Dwa warianty: Octan (krótki) i Enantat (powolny). Cross-framed: analog 19-Nor osobny wpis.",
  "description": "MENT (Trestolon, 7α-metylo-19-nortestosteron) to syntetyczny steryd androgenny opracowany przez Population Council (NYC) w późnych latach 90.-wczesnych 2000. jako kandydat antykoncepcji męskiej (Anderson 1999 PMID 10522995 badanie kliniczne). Aktywność anaboliczno-androgenna wynosi ~8-10x testosteron in vitro w teście wiązania AR (Sundaram 1993 PMID 8489761) — jeden z najsilniejszych syntetycznych androgenów. Grupa 7α-metylowa hamuje wiązanie substratu 5α-reduktazy (NIE konwertuje do DHT → niższa aktywność DHT skóry głowy i androgenna prostaty niż testosteron), podczas gdy struktura 19-nor wykazuje również AKTYWNOŚĆ PROGESTOGENOWĄ (charakter wpisu cross-framed: tutaj we frame syntetycznego androgenu, osobny wpis we frame 19-Nor). Aromatyzuje przez CYP19 do 7α-metyloestradiolu, który ma niższe powinowactwo do ER niż zwykły E2 → efekt estrogenny słabszy niż na Test. NIE 17α-alkilowany → niska hepatotoksyczność. W badaniach klinicznych (Population Council 1999-2005) testowano go jako 4-tygodniowy implant + formulację 8 mg/dzień sublingwalną; rozwój antykoncepcji męskiej został ZATRZYMANY po Phase III ze względów finansowych. W kontekście kulturystycznym rynek UGL oferuje ester octanowy (Trestolone Octan, krótki, ~8h okres półtrwania) i ester enantatowy (Trestolone Enantat, powolny, ~5-7 dni okres półtrwania). Zakaz WADA cały rok.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista AR (8-10x Test) + receptor progesteronu, 7α-metylo-19-nor-T, słabo aromatyzuje"},
    {"label": "Anaboliczny:Androgenny", "value": "~2300:650 (ekstrapolowane in vitro AR-binding)"},
    {"label": "Okres półtrwania", "value": "~8 h (Ac), 5-7 d (Enan)"},
    {"label": "Początek", "value": "12-24 h (Ac IM), 48-72 h (Enan IM)"},
    {"label": "Status prawny", "value": "Nigdy nie Rx, tylko UGL. Schedule III analog (USA), zakaz WADA."}
  ],
  "mechanism": "Agonista AR 7α-metylo-19-nortestosteron. Grupa 7α-metylowa zapewnia TRZY kluczowe modyfikacje strukturalne: (1) hamuje wiązanie substratu 5α-reduktazy → NIE konwertuje do DHT (niższa aktywność DHT skóry głowy, androgenna prostaty); (2) zwiększa powinowactwo wiązania AR (~8-10x Test, Sundaram 1993 PMID 8489761); (3) stabilizuje cząsteczkę przeciwko oksydacyjnemu rozkładowi 17β-HSD → dłuższy okres półtrwania w osoczu. Strukturalny charakter 19-nor zapewnia AKTYWNOŚĆ PROGESTOGENOWĄ (umiarkowane powinowactwo PR), użyteczną dla celu antykoncepcji męskiej (negatywne sprzężenie zwrotne na osi HPG) ALE w kontekście kulturystycznym tworzy potrzebę monitora prolaktyny. Aromatyzuje przez CYP19 do 7α-metyloestradiolu (około 50% poziomu konwersji E2 Test) — ale powinowactwo metabolitu do ER jest niższe niż zwykłego E2 → efekt estrogenny klinicznie słabszy.",
  "legalStatus": "Nigdy nie Rx (rozwój antykoncepcji męskiej Population Council utknął ze względów finansowych). USA: Schedule III analog (DEA, klasyfikacja designer AAS). UE/HU/PL: kontrolowany analog AAS, nielegalny bez recepty. Zakaz WADA cały rok (S1.1.a).",
  "onsetTime": "12-24 h (Ac IM), 48-72 h (Enan IM)",
  "halfLife": "~8 h (Ac), 5-7 d (Enan)",
  "halfLifeActive": "~8 h wolny Trestolon (po Ac), depot ~24 h (po Enan)",
  "interactionsWith": ["cabergoline", "testosterone", "anastrozole", "warfarin"],
  "aromatization": "Tak — substrat CYP19, metabolit 7α-metyloestradiol (niższe powinowactwo ER niż zwykły E2); klinicznie wzrost E2 umiarkowany-niski (Sundaram 1993 PMID 8489761, Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; IM pomija first-pass. ALT/AST <2x normalne dla cyklu tylko-MENT (Hartgens-Kuipers 2004 PMID 15248788)",
  "wadaStatus": "banned",
  "androgenicRatio": "~2300:650 (ekstrapolowane z powinowactwa wiązania AR in vitro, NIE klasyczny test prostaty brzusznej szczura)",
  "bindingAffinity": "Skrajnie wysokie powinowactwo do AR (~8-10x testosteron in vitro, Sundaram 1993 PMID 8489761) + umiarkowana aktywność PR.",
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
    {"title": "7 alpha-methyl-19-nortestosterone (MENT): the optimal androgen for male contraception", "authors": "Sundaram K, Kumar N, Bardin CW.", "journal": "Ann Med. 1993;25(2):199-205.", "pmid": "8489761"},
    {"title": "7α-methyl-19-nortestosterone maintains sexual behavior and mood in hypogonadal men", "authors": "Anderson RA, Wallace AM, Sattar N, Kumar N, Sundaram K.", "journal": "J Clin Endocrinol Metab. 1999;84(10):3556-62.", "pmid": "10522995"},
    {"title": "Pharmacokinetics and pharmacodynamics of 7alpha-methyl-19-nortestosterone after intramuscular administration in healthy men", "authors": "Suvisaari J, Sundaram K, Noé G et al.", "journal": "Hum Reprod. 1997;12(5):967-73.", "pmid": "9194649"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15248788"}
  ],
  "faq": [
    {"q": "Co to jest wpis cross-framed?", "a": "MENT (Trestolon, 7α-metylo-19-nortestosteron) strukturalnie należy JEDNOCZEŚNIE do DWÓCH klas chemicznych: (1) syntetyczny androgen — substytucja 7α-metyl daje unikalny profil nie-DHT-konwertowalny; (2) pochodna 19-Nor — usunięcie grupy metylowej 19-węgla daje aktywność progestogenową. Struktura biblioteki według referencji HTML wymienia go w obu kolumnach klasy z DWOMA OSOBNYMI wpisami: 'MENT-test' (ten, frame syntetycznego androgenu, kolumna Test) i 'MENT-19nor' (osobny wpis w kolumnie 19-Nor, w sub-task 4). Treść dwóch wpisów pokrywa się w ~80%, ale framing 'powinowactwo wiązania AR vs aktywność progestogenowa' różni się."},
    {"q": "Dlaczego zatrzymano rozwój antykoncepcji męskiej?", "a": "Population Council prowadził badania kliniczne Phase II-III w latach 1999-2005 z formulacją MENT sublingwalnego implantu 4-tygodniowego (Anderson 1999 PMID 10522995). Wyniki były obiecujące (90%+ supresja spermatogenezy, dobra tolerancja), ALE w 2005 r. Population Council ZATRZYMAŁ Phase III ze względów finansowych — biorąc pod uwagę dominację antykoncepcji żeńskiej na rynku, ryzyko niepowodzenia komercyjnego było zbyt wysokie dla inwestorów. Dziś rozwój MENT antykoncepcji męskiej jest w dużej mierze martwy, z wyjątkiem niektórych akademickich badań follow-up."},
    {"q": "MENT vs Testosteron bezpośrednie porównanie?", "a": "W powinowactwie AR MENT jest ~8-10x silniejszy (Sundaram 1993 PMID 8489761), więc 100 mg/tydzień MENT ekwiwalent około 800-1000 mg/tydzień Test. NIE 5α-redukuje → niższa aktywność DHT skóry głowy i AR prostaty (korzyść dla zapobiegania wypadaniu włosów i BPH). Aromatyzacja łagodniejsza (7α-metyloestradiol słabszy metabolit ER). ALE: aktywność PR (Test nie aktywuje PR) → monitor prolaktyny + potrzeba cabergoline. Netto-pozytywny dla doświadczonych użytkowników kulturystycznych, ale NIE pierwszy cykl."},
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
      "id": "ac",
      "routeId": "ac",
      "routeLabel": {
        "hu": "MENT + Test Acetate mixture (gyors észter)",
        "en": "MENT + Test Acetate mixture (fast ester)",
        "pl": "MENT + Test Acetate mieszanka (szybki ester)"
      },
      "routeNote": {
        "hu": "Designer kombinált compound — Trestolone (MENT, 7α-metil-19-nortestosterone) + Testosterone Acetate ester mixture, jellemzően 50/50 vagy 60/40 arányban. Cél: a MENT magas anabolic erősség + a Test androgén-baseline egyetlen olajban. Rövid Ac-ester ⇒ EOD vagy napi IM-injekció. Prolaktin-monitor a 19-Nor MENT-komponens miatt KÖTELEZŐ. Hamisítás-rizikó az UGL-piacon nagyon magas (nem tudod mit kapsz konkrétan).",
        "en": "Designer combined compound — Trestolone (MENT, 7α-methyl-19-nortestosterone) + Testosterone Acetate ester mixture, typically 50/50 or 60/40 ratio. Goal: high MENT anabolic potency + Test androgen baseline in a single oil. Short Ac ester ⇒ EOD or daily IM injection. Prolactin monitoring MANDATORY due to 19-Nor MENT component. Counterfeit risk on UGL market very high (you don't know what's actually inside).",
        "pl": "Designerski połączony compound — Trestolon (MENT, 7α-metylo-19-nortestosteron) + Testosteron Acetate mieszanka estrów, zazwyczaj proporcja 50/50 lub 60/40. Cel: wysoka siła anaboliczna MENT + baseline androgenny Test w jednym oleju. Krótki ester Ac ⇒ iniekcja IM EOD lub codziennie. Monitor prolaktyny OBOWIĄZKOWY z powodu komponentu MENT 19-Nor. Ryzyko podróbek na rynku UGL bardzo wysokie (nie wiesz co dokładnie dostajesz)."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "~8 h (macierzysty MENT + Test po Ac)",
      "halfLifeActive": "~8 h (mieszanka Ac)",
      "bioavailability": "~95-100% (IM, szybka hydroliza estru Ac obu komponentów)",
      "onsetTime": {
        "hu": "12-24 h (IM, fast-acting Ac mixture)",
        "en": "12-24 h (IM, fast-acting Ac mixture)",
        "pl": "12-24 h (IM, szybko działająca mieszanka Ac)"
      },
      "dosing": {
        "hu": "75-150 mg/hét IM, EOD vagy 3x/hét osztva. A magasabb dózis a Test-komponensből származik (~50% MENT-effective dose). Max 8-10 hét ciklus. Test-base NEM szükséges (már benne van). Cabergoline + PCT KÖTELEZŐ.",
        "en": "75-150 mg/week IM, split EOD or 3×/week. Higher dose comes from Test component (~50% MENT-effective dose). Max 8-10 week cycle. Test-base NOT needed (already included). Cabergoline + PCT MANDATORY.",
        "pl": "75-150 mg/tydzień IM, podzielone EOD lub 3×/tydzień. Wyższa dawka wynika z komponentu Test (~50% MENT-effective dose). Maks 8-10 tygodni cyklu. Baza Test niewymagana (już zawarta). Cabergolina + PCT OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 75,
          "medium": 100,
          "high": 150
        },
        "unit": "mg/tydzień",
        "note": {
          "hu": "75-150 mg/hét, EOD vagy E3D IM (rövid felezés). Max 8-10 hét. Test-base mixture-ben, NEM kell külön. Cabergoline KÖTELEZŐ. PCT utolsó injekció +2-3 nap.",
          "en": "75-150 mg/week, EOD or E3D IM (short half-life). Max 8-10 weeks. Test-base in mixture, NOT needed separately. Cabergoline MANDATORY. PCT starts last injection +2-3 days.",
          "pl": "75-150 mg/tydzień, EOD lub E3D IM (krótki okres półtrwania). Maks 8-10 tygodni. Baza Test w mieszance, niewymagana osobno. Cabergolina OBOWIĄZKOWA. PCT od ostatniej iniekcji +2-3 dni."
        }
      },
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 100000,
      "hepatotoxicity": "low",
      "aromatization": "moderate",
      "androgenicRatio": "varies (MENT 650:650 + Test 100:100 mixture)",
      "legalStatus": "Nigdy nie Rx (designerska mieszanka, tylko UGL). Zakaz WADA.",
      "detectionWindow": "W moczu: 2-3 tygodnie (krótki ester Ac; metabolity zarówno MENT jak i Test wykrywalne przez LC-MS/MS).",
      "quality": {
        "pure": [
          "Klarowny jasnożółty olej, fiolka 10 ml, 75-150 mg/ml całkowite stężenie UGL",
          "Źródło testowane HPLC ABSOLUTNIE OBOWIĄZKOWE — dwa aktywne komponenty utrudniają weryfikację niż czysty MENT-Ac"
        ],
        "caution": [
          "EOD lub codzienna iniekcja IM wymagana (oba komponenty mają krótki okres półtrwania)",
          "PIP powszechny (krótki nośnik estru Ac)",
          "Monitor prolaktyny OBOWIĄZKOWY (komponent MENT 19-Nor)",
          "Aromatyzacja z komponentu Test (CYP19) ⇒ monitor E2, może być wymagana AI",
          "Proporcja MENT/Test różni się w zależności od mieszanki — nie standardyzowana"
        ],
        "avoid": [
          "Prolaktynoma lub stan wrażliwy na prolaktynę",
          "Planowane ojcostwo (połączona supresja HPTA przez 19-Nor + Test jest cięższa)",
          "Pierwszy cykl AAS (designerska mieszanka, nieznana dokładna proporcja)",
          "Ryzyko podróbek — używaj tylko niezawodnego UGL testowanego HPLC"
        ]
      },
      "interactions": [
        "Kabergolina 0,25-0,5 mg E3D monitor prolaktyny OBOWIĄZKOWY (komponent MENT 19-Nor)",
        "Anastrozol 0,25-0,5 mg E3D monitor E2 (komponent Test aromatyzuje)",
        "Baza testosteronu niewymagana (mieszanka już zawiera Test-Ac)",
        "PCT od ostatniej iniekcji Ac +2-3 dni (krótki wash-out)"
      ]
    },
    {
      "id": "en",
      "routeId": "en",
      "routeLabel": {
        "hu": "MENT + Test Enanthate mixture (lassú észter)",
        "en": "MENT + Test Enanthate mixture (slow ester)",
        "pl": "MENT + Test Enanthate mieszanka (wolny ester)"
      },
      "routeNote": {
        "hu": "Hosszabb Enan-észter mixture (~5-7 nap felezés) ⇒ heti 1-2 IM-injekció elegendő, steady-state 3-4 hét. Ugyanaz a designer compound (MENT + Test) csak lassú-onset esterekkel. Kényelmesebb mint Ac-mixture, de longer detection window (6-8 hét) + steady-state-hez 3-4 hét kell. Aromatizáció + prolaktin-monitor mindkettő KÖTELEZŐ.",
        "en": "Longer Enan-ester mixture (~5-7 day half-life) ⇒ once/twice weekly IM injection sufficient, steady-state 3-4 weeks. Same designer compound (MENT + Test) just with slow-onset esters. More convenient than Ac mixture, but longer detection window (6-8 weeks) + 3-4 weeks needed for steady-state. Aromatization + prolactin monitoring BOTH MANDATORY.",
        "pl": "Dłuższa mieszanka estru Enan (~5-7 dni okresu półtrwania) ⇒ iniekcja IM raz/dwa razy w tygodniu wystarcza, stan stacjonarny 3-4 tygodnie. Ten sam designerski compound (MENT + Test) tylko z estrami wolno działającymi. Wygodniejszy niż mieszanka Ac, ale dłuższe okno detekcji (6-8 tygodni) + 3-4 tygodnie potrzebne do stanu stacjonarnego. Aromatyzacja + monitor prolaktyny OBA OBOWIĄZKOWE."
      },
      "image": "/performance/oil-vial-orange.png",
      "halfLife": "5-7 dni (mieszanka estru Enantatowego)",
      "halfLifeActive": "~24 h wolny MENT + Test (po hydrolizie)",
      "bioavailability": "~95-100% (IM, powolna hydroliza estru Enan obu komponentów)",
      "onsetTime": {
        "hu": "48-72 h (IM, slow-acting Enan; steady-state 3-4 hét)",
        "en": "48-72 h (IM, slow-acting Enan; steady-state 3-4 weeks)",
        "pl": "48-72 h (IM, wolno działający Enan; stan stacjonarny 3-4 tygodnie)"
      },
      "dosing": {
        "hu": "200-400 mg/hét IM, heti 1-2x osztva. Magasabb dózis mint MENT-only (Test-komponens miatt). Minimum 8-10 hét ciklus. Test-base NEM szükséges. Cabergoline + Anastrozole + PCT KÖTELEZŐ.",
        "en": "200-400 mg/week IM, split 1-2× weekly. Higher dose than MENT-only (due to Test component). Minimum 8-10 week cycle. Test-base NOT needed. Cabergoline + Anastrozole + PCT MANDATORY.",
        "pl": "200-400 mg/tydzień IM, podzielone 1-2× w tygodniu. Wyższa dawka niż MENT-only (z powodu komponentu Test). Minimum 8-10 tygodni cyklu. Baza Test niewymagana. Cabergolina + Anastrozol + PCT OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 200,
          "medium": 300,
          "high": 400
        },
        "unit": "mg/tydzień",
        "note": {
          "hu": "200-400 mg/hét, heti 1-2x IM (Enan-mixture). Minimum 8-10 hét ciklus. Test-base mixture-ben, NEM kell külön. Cabergoline + Anastrozole KÖTELEZŐ. PCT utolsó injekció +14-21 nap.",
          "en": "200-400 mg/week, 1-2× weekly IM (Enan mixture). Minimum 8-10 week cycle. Test-base in mixture, NOT needed separately. Cabergoline + Anastrozole MANDATORY. PCT starts last injection +14-21 days.",
          "pl": "200-400 mg/tydzień, 1-2× w tygodniu IM (mieszanka Enan). Minimum 8-10 tygodni cyklu. Baza Test w mieszance, niewymagana osobno. Cabergolina + Anastrozol OBOWIĄZKOWE. PCT od ostatniej iniekcji +14-21 dni."
        }
      },
      "defaultVialMg": 2000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 300000,
      "hepatotoxicity": "low",
      "aromatization": "moderate",
      "androgenicRatio": "varies (MENT 650:650 + Test 100:100 mixture)",
      "legalStatus": "Nigdy nie Rx (designerska mieszanka). Tylko UGL. Zakaz WADA.",
      "detectionWindow": "W moczu: 6-8 tygodni (dłuższy ester Enan, rodziny metabolitów obu komponentów wykrywalne).",
      "quality": {
        "pure": [
          "Klarowny żółtawo-złoty olej, fiolka 10 ml, 200-400 mg/ml całkowite stężenie UGL",
          "Źródło testowane HPLC ABSOLUTNIE OBOWIĄZKOWE — dwa aktywne komponenty, proporcja mieszanki nie standardyzowana"
        ],
        "caution": [
          "Tygodniowa 1-2× iniekcja IM (wygodniejsza niż mieszanka Ac)",
          "PIP łagodniejszy niż Ac (dłuższy nośnik estru)",
          "Stan stacjonarny 3-4 tygodnie — krótki cykl nieefektywny",
          "Monitor prolaktyny + E2 OBA OBOWIĄZKOWE (oba komponenty)",
          "Proporcja mieszanki różni się w zależności od UGL — nie znasz dokładnego podziału MENT/Test"
        ],
        "avoid": [
          "Krótki (4-6 tygodni) cykl nieefektywny (stan stacjonarny nie osiągnięty)",
          "Prolaktynoma lub stan wrażliwy na prolaktynę",
          "Planowane ojcostwo (połączona supresja HPTA przez 19-Nor + Test jest cięższa)",
          "Ryzyko podróbek — używaj tylko niezawodnego UGL testowanego HPLC"
        ]
      },
      "interactions": [
        "Kabergolina 0,25-0,5 mg E3D monitor prolaktyny OBOWIĄZKOWY (komponent MENT 19-Nor)",
        "Anastrozol 0,25-0,5 mg E3D monitor E2 (komponent Test aromatyzuje)",
        "Baza testosteronu niewymagana (mieszanka już zawiera Test-Enan)",
        "PCT od ostatniej iniekcji Enan +14-21 dni (długi wash-out)"
      ]
    }
  ],
  "defaultVariant": "ac"
}
