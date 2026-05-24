// MENT (Trestolon) — 19-Nor progestin frame, cross-framed entry of ment-test.
// Same chemistry (7α-methyl-19-nortestosterone), framing shifts to progestogenic
// activity, PR-affinity, contraceptive history. Sources: Sundaram 1993
// PMID 8489761, Anderson 1999 PMID 10522995, Suvisaari 1997 PMID 9194649,
// Beri 1998 PMID 9879986 (PR-binding), Pope-Kanayama 2014 PMID 24423981.

export default {
  "id": "ment-19nor",
  "name": "MENT (Trestolon) — frame 19-Nor progestin",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#D85A30",
  "tagColor": "rgba(216,90,48,0.18)",
  "shortDesc": "Trestolon (7α-metylo-19-nortestosteron, MENT) kandydat antykoncepcji męskiej Population Council. Frame 19-Nor z naciskiem na aktywność progestagenną: umiarkowane powinowactwo PR → supresja spermatogenezy + w kontekście kulturystyki konieczność monitorowania prolaktyny. Cross-framed: frame syntetycznego androgenu [[ment-test]] osobny wpis.",
  "description": "MENT (Trestolon, 7α-metylo-19-nortestosteron) można klasyfikować ZARÓWNO jako syntetyczny androgen JAK i jako pochodną 19-nortestosteronu — ten wpis ujmuje go w ramie 19-Nor (rodzina Nandrolonu): usunięcie 19-węglowej grupy metylowej nadaje cząsteczce nietrywialną AKTYWNOŚĆ PROGESTAGENNĄ (umiarkowane powinowactwo PR-binding, Beri 1998 PMID 9879986), co było głównym mechanizmem rozwoju męskiej antykoncepcji w Population Council (1999-2005, Anderson 1999 PMID 10522995): mediowane progesteronem ujemne sprzężenie zwrotne na osi HPG → trwała azoospermia/oligospermia u 90%+ uczestników badań klinicznych. Substytucja 7α-metylowa hamuje wiązanie substratu 5α-reduktazy (NIE konwertuje do DHT) ORAZ zwiększa powinowactwo do AR (~8-10x Test, Sundaram 1993 PMID 8489761), ale w perspektywie ramy 19-Nor to aktywność PR jest istotnym markerem — wyjaśnia podwyższone poziomy prolaktyny dokumentowane w badaniach klinicznych i wysoką skuteczność efektu antykoncepcyjnego. W kontekście kulturystyki aktywność PR odgrywa centralną rolę w profilu działań niepożądanych: monitorowanie prolaktyny obowiązkowe, gotowość kabergoliny standardowa. Aromatyzacja słabsza niż na Test (7α-metyloestradiol ma niższe powinowactwo do ER). NIE 17α-alkilowany → niska hepatotoksyczność. Dwa warianty: Octan (krótki, ~8h) i Enantat (wolny, ~5-7 dni). Zakazany przez WADA przez cały rok. Cross-framed entry: perspektywa syntetycznego androgenu [[ment-test]] osobny wpis (kolumna Test) — ta sama cząsteczka, inny nacisk.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Pochodna 19-nor-T z umiarkowanym powinowactwem PR + agonista AR (8-10x T); progestagenowo-mediowana supresja HPG"},
    {"label": "Powinowactwo PR (Cook 1996)", "value": "Umiarkowane — quasi-agonista receptora progesteronowego, znaczenie antykoncepcyjne"},
    {"label": "Anaboliczny:Androgenny", "value": "~2300:650 (ekstrapolowane z in vitro AR-binding)"},
    {"label": "Okres półtrwania", "value": "~8 h (Ac), 5-7 d (Enan)"},
    {"label": "Status prawny", "value": "Nigdy nie był Rx (Population Council Faza III wstrzymana). Tylko UGL. Zakazany WADA."}
  ],
  "mechanism": "Perspektywa ramy 19-Nor: usunięcie 19-węglowej grupy metylowej (vs Test) daje AKTYWNOŚĆ PROGESTAGENNĄ (umiarkowane powinowactwo PR-binding, Beri 1998 PMID 9879986 in vitro), charakterystyczne także dla rodziny Nandrolonu (Deca, NPP, Trenbolon, Gestrinon). Dla MENT ta aktywność PR była głównym mechanizmem rozwoju męskiej antykoncepcji w Population Council: mediowane PR ujemne sprzężenie zwrotne na osi HPG → supresja LH/FSH → trwała azoospermia. W badaniach klinicznych (Anderson 1999 PMID 10522995) implant podjęzykowy 4-tygodniowy 8 mg/dzień spowodował supresję spermatogenezy 90%+ u męskich badanych. Grupa 7α-metylowa daje DWIE dodatkowe korzyści strukturalne: (1) hamuje wiązanie substratu 5α-reduktazy (NIE konwertuje do DHT → niższy DHT skóry głowy/aktywność AR prostaty); (2) stabilizuje cząsteczkę przed degradacją oksydatywną mediowaną przez 17β-HSD. Aromatyzuje przez CYP19 do 7α-metyloestradiolu (około 50% konwersji E2 vs Test, metabolit o niższym powinowactwie do ER). W kontekście kulturystyki aktywność PR jest dominującym sterownikiem klinicznych działań niepożądanych: wzrost prolaktyny powszechny → ryzyko ginekomastii (paradoksalne, bo aromatyzacja łagodna).",
  "legalStatus": "Nigdy nie był Rx (rozwój męskiej antykoncepcji w Population Council wstrzymany z powodów finansowych w 2005). USA: Schedule III analog (DEA, designer AAS classification). UE/HU/PL: kontrolowany analog AAS, nielegalny bez recepty. Zakazany WADA przez cały rok (S1.1.a).",
  "onsetTime": "12-24 h (Ac IM), 48-72 h (Enan IM)",
  "halfLife": "~8 h (Ac), 5-7 d (Enan)",
  "halfLifeActive": "~8 h wolny Trestolon (po Ac), depot ~24 h (po Enan)",
  "interactionsWith": ["cabergoline", "nandrolone-info", "trenbolone-info", "ment-test"],
  "aromatization": "Tak — substrat CYP19, metabolit 7α-metyloestradiol (niższe powinowactwo ER niż E2); klinicznie wzrost E2 umiarkowany-niski (Sundaram 1993 PMID 8489761)",
  "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; IM omija first-pass. ALT/AST <2x normy dla cyklu MENT-only (Hartgens-Kuipers 2004 PMID 15248788)",
  "wadaStatus": "banned",
  "androgenicRatio": "~2300:650 (ekstrapolowane z in vitro AR-binding, NIE klasyczny test rat-ventral-prostate)",
  "bindingAffinity": "Wyjątkowo wysokie powinowactwo do AR (~8-10x testosteron in vitro, Sundaram 1993 PMID 8489761) + umiarkowana aktywność PR (Beri 1998 PMID 9879986 — istotne dla ramy 19-Nor).",
  "detectionWindow": "Metabolity Trestolonu (rodzina metabolitów 7α-metylo-19-nor-androstene) w moczu: Ac 2-3 tygodnie, Enan 6-8 tygodni. LC-MS/MS akredytowana przez WADA.",
  "benefits": [
    "Silna mediowana progestagennie supresja HPG (90%+ azoospermia w 4 tygodnie w badaniach klinicznych)",
    "Wyjątkowo wysokie powinowactwo do AR → drastyczny wzrost masy mięśniowej i siły przy niskich dawkach (50-100 mg/tydzień ekwiwalent 500+ mg Test)",
    "NIE jest substratem 5α-reduktazy → niższy DHT skóry głowy i aktywność androgenna prostaty niż na Test",
    "Aromatyzacja łagodniejsza niż na Test (7α-metyloestradiol ma niższe powinowactwo do ER)",
    "Niska hepatotoksyczność (NIE 17α-alkilowany)"
  ],
  "quickStart": [
    "Aktywność PR (znak rozpoznawczy ramy 19-Nor) → monitor prolaktyny + gotowość kabergoliny OBOWIĄZKOWE do pierwszych badań",
    "WYJĄTKOWO SILNY — dawki znacznie niższe niż na Test (50-100 mg/tydzień MENT ekwiwalent 500-1000 mg Test)",
    "Aromatyzacja słabsza niż na Test, ALE NIE zerowa → AI jeśli E2 tego wymaga",
    "PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowe",
    "Cross-framed entry: to frame 19-Nor progestin; frame syntetycznego androgenu [[ment-test]] osobny wpis"
  ],
  "expectations": [
    {"label": "Pierwszy tydzień", "body": "Po iniekcji Ac IM 12-24 h onset, ostry wzrost siły po 5-7 dniach. Enan IM 48-72 h onset, steady-state 3-4 tygodnie."},
    {"label": "Tydzień 3-4", "body": "Drastyczny wzrost masy mięśniowej + silna supresja HPG (LH/FSH niemal zero — mediowane PR). Wzrost prolaktyny oczekiwany (aktywność PR), potrzeba kabergoliny powszechna. Supresja spermatogenezy 90%+ w 4 tygodnie (precedens trial Population Council)."},
    {"label": "Koniec tygodnia 8-10", "body": "Maksymalny efekt, lipidogram spadek HDL umiarkowany-wysoki, monitor prolaktyny krytyczny, planowanie PCT."}
  ],
  "quality": {
    "pure": [
      "UGL Trestolon Octan 50-100 mg/ml fiolka olejowa, sterylnie filtrowany (najczęstszy format UGL)",
      "UGL Trestolon Enantat 100-200 mg/ml fiolka olejowa (rzadziej dostępny niż Ac)",
      "HPLC-testowane źródło OBOWIĄZKOWE — MENT często fałszowany lub niedoważony (drogi surowiec)"
    ],
    "caution": [
      "Wzrost prolaktyny powszechny (aktywność PR — kluczowa cecha ramy 19-Nor) → ryzyko gino paradoksalne, bo aromatyzacja łagodna",
      "Supresja spermatogenezy szybka i głęboka (90%+ w 4 tygodnie, Anderson 1999 PMID 10522995) — odzyskanie płodności 6-12 miesięcy po PCT",
      "Zaburzenia lipidowe: spadek HDL umiarkowany-wysoki",
      "PIP (ból miejsca iniekcji) silniejszy w wariancie Ac niż Enan",
      "Zmiany nastroju (sporadyczne raporty epizodów depresyjnych mediowanych aktywnością PR)"
    ],
    "avoid": [
      "Jakikolwiek istniejący prolaktinoma lub hiperprolaktynemia ABSOLUTNE przeciwwskazanie",
      "Predyspozycja psychiatryczna (depresja, lęk)",
      "Planowane ojcostwo w bliskim horyzoncie czasowym (HPTA + odzyskanie spermatogenezy 6-12 miesięcy)",
      "Stosowanie u kobiet (ekstremalna aktywność androgenna → szybka nieodwracalna wirilizacja)",
      "Ryzyko sercowo-naczyniowe"
    ]
  },
  "interactions": [
    "Kabergolina 0,25-0,5 mg E3D: monitor prolaktyny + leczenie w razie potrzeby (aktywność PR czyni gotowość OBOWIĄZKOWĄ)",
    "Inny stack 19-Nor (Nandrolon, Trenbolon): NIE zalecane — kumulatywna aktywność PR, ryzyko ekstremalnej prolaktyny",
    "Anastrozol 0,25 mg E3D: tylko w przypadku laboratoryjnie potwierdzonego wysokiego E2",
    "Warfaryna: efekt antykoagulacyjny może być nasilony"
  ],
  "studies": [
    {"title": "7 alpha-methyl-19-nortestosterone (MENT): the optimal androgen for male contraception", "authors": "Sundaram K, Kumar N, Bardin CW.", "journal": "Ann Med. 1993;25(2):199-205.", "pmid": "8489761"},
    {"title": "7α-methyl-19-nortestosterone maintains sexual behavior and mood in hypogonadal men", "authors": "Anderson RA, Wallace AM, Sattar N, Kumar N, Sundaram K.", "journal": "J Clin Endocrinol Metab. 1999;84(10):3556-62. PMID 10522995", "pmid": "10522995"},
    {"title": "Pharmacokinetics and pharmacodynamics of 7alpha-methyl-19-nortestosterone after intramuscular administration in healthy men", "authors": "Suvisaari J, Sundaram K, Noé G et al.", "journal": "Hum Reprod. 1997;12(5):967-73.", "pmid": "9194649"},
    {"title": "Estrogenic and progestational activity of 7alpha-methyl-19-nortestosterone, a synthetic androgen", "authors": "Beri R, Kumar N, Savage T et al.", "journal": "J Steroid Biochem Mol Biol. 1998;67(3):275-83.", "pmid": "9879986"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"}
  ],
  "faq": [
    {"q": "Dlaczego umieszczony w ramie 19-Nor, skoro ma substytucję 7α-metylową?", "a": "MENT (7α-metylo-19-nortestosteron) STRUKTURALNIE zawiera ZARÓWNO charakter 19-Nor (usunięcie 19-węglowego metylu vs Test) JAK i substytucję 7α-metylową. Dla klasyfikacji klasy chemicznej 19-Nor jest dominującym elementem ramowym — to on daje aktywność progestagenną, która była głównym mechanizmem rozwoju męskiej antykoncepcji w Population Council (Anderson 1999 PMID 10522995). Substytucja 7α-metylowa to 'plus-feature' na bazie 19-Nor: hamuje 5α-reduktazę + zwiększa powinowactwo do AR. Dlatego biblioteka pokazuje go w dwóch ramach: tej ramie 19-Nor progestin (Beri 1998 PMID 9879986 PR-binding) i ramie syntetycznego androgenu [[ment-test]] w osobnym wpisie (kolumna Test) z naciskiem na AR-binding."},
    {"q": "Jak głęboka jest supresja HPG na cyklu MENT?", "a": "Badanie kliniczne Anderson 1999 PMID 10522995 (implant podjęzykowy 4-tygodniowy 8 mg/dzień) wykazało 90%+ badanych rozwijających trwałą azoospermię/oligospermię w 4 tygodnie — znacznie głębiej niż na cyklu Test przy porównywalnym ekwiwalencie dawki. Powodem jest aktywność PR: mediowane PR ujemne sprzężenie zwrotne na osi HPG to DODATKOWY mechanizm na sprzężenie zwrotne mediowane przez AR. W kontekście kulturystyki oznacza to, że PCT (Clomid + Nolvadex 4-6 tygodni) NIE wystarcza do szybkiego odzyskania płodności — 6-12 miesięcy oczekiwane odzyskanie spermatogenezy po cyklu MENT. Dla planujących ojcostwo MENT absolutnie NIE jest zalecany."},
    {"q": "Protokół monitorowania prolaktyny na cyklu MENT?", "a": "Pre-cykl: baseline prolaktyny + badanie makro-prolaktyny. Od 2 tygodnia: bi-tygodniowy pomiar prolaktyny. Kabergolina (Dostinex) 0,25 mg pn/cz w gotowości — jeśli prolaktyna >25 ng/mL rośnie, lub jeśli pojawią się objawy kliniczne (utrata libido, ED, tkliwość gino), zainicjować. MK-2866/Nolvadex NIE zastępują kabergoliny przeciw prolaktynie. Mid-cycle: powtórny pomiar prolaktyny. Post-cycle: monitor odzyskania prolaktyny 8-12 tygodni."},
    {"q": "MENT vs Nandrolon (Deca) — co wybrać w stack 19-Nor?", "a": "Oba w ramie 19-Nor, ale różne charaktery: Nandrolon (Deca/NPP) to klasyczny steryd bulkingowy, anaboliczny:androgenny ~125:37, niskie powinowactwo do AR, wysoka aktywność progestagenna → retencja wody + smarowanie stawów. MENT ma wyjątkowo wysokie powinowactwo do AR (~8-10x Test), NIŻSZY ekwiwalent dawki dla BARDZIEJ DRASTYCZNEGO efektu, ale aktywność PR w połączeniu z silnym efektem androgenowym daje głębszą supresję HPG + wątpliwą tolerancję leku. Dla nowych użytkowników AAS Nandrolon to bezpieczniejszy punkt wejścia (znany profil kliniczny, historycznie zatwierdzony przez FDA Rx). MENT tylko dla doświadczonych użytkowników, i tylko z monitorowaniem prolaktyny."},
    {"q": "Wariant Octan vs Enantat — różnica w kontekście 19-Nor?", "a": "Wybór estru jest niezależny od klasy chemicznej: Ac (Octan) krótki (~8 h), EOD/codzienne IM, szybki onset, PIP powszechny; Enan (Enantat) długi (~5-7 dni), tygodniowo 1-2x IM, wolniejszy onset (steady-state 3-4 tygodnie), mniej PIP. Aktywność PR identyczna na obu. Ac zalecany dla nowych użytkowników MENT dla lepszej kontroli dawki + szybkiego odstawienia; Enan wygodniejszy dla doświadczonych użytkowników."}
  ],
  "related": ["ment-test", "nandrolone-info", "trenbolone-info", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 50, "medium": 100, "high": 150},
    "unit": "mg/tydzień MENT (IM, Ac EOD lub Enan tygodniowo 1-2x)",
    "note": "Ekwiwalent 500-1500 mg/tydzień Test na podstawie powinowactwa AR-binding. Maksimum 8-10 tygodni cyklu. Kabergolina OBOWIĄZKOWA gotowość (aktywność PR, znak rozpoznawczy ramy 19-Nor). PCT 4-6 tygodni. Odzyskanie płodności 6-12 miesięcy."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cykl",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Panel hormonalny: Total T, Free T, E2, LH, FSH, SHBG, **Prolaktyna (krytyczna z powodu aktywności PR w ramie 19-Nor)**, badanie makro-prolaktyny. Lipidogram. Wątrobowy. PSA. Spermiogram (dla planujących ojcostwo).",
      "purpose": "Baseline prolaktyny + makro-prolaktyna krytyczne z powodu aktywności PR. Baseline spermiogramu jeśli istotne dla płodności."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Tydzień 3-4",
      "markers": "**Prolaktyna (główny trigger kabergoliny)**, E2, Total T, lipidogram, wątrobowy.",
      "purpose": "Prolaktyna >25 ng/mL → eskalacja dawki kabergoliny. Monitor aktywności PR krytyczny w ramie 19-Nor."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Ostatnia dawka: Ac +2-3 dni, Enan +14-21 dni start PCT",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, **Prolaktyna (odzyskanie, 6-12 miesięcy)**, odzyskanie lipidów, spermiogram jeśli istotne dla płodności.",
      "purpose": "Weryfikacja odzyskania HPTA + osi PR. Odzyskanie spermatogenezy 6-12 miesięcy z powodu aktywności PR."
    },
    "cruise": {
      "label": "Podczas cruise (MENT cruise NIE standard)",
      "timing": "MENT cruise nietypowy z powodu aktywności PR + wysokiej potencji",
      "markers": "N/A",
      "purpose": "MENT tylko do użytku cyklicznego. TRT-Test cruise preferowany."
    }
  },
  "variants": [
    {
      "id": "ac",
      "routeId": "ac",
      "routeLabel": {
        "hu": "Trestolone Acetate (MENT-Ac, gyors észter)",
        "en": "Trestolone Acetate (MENT-Ac, fast ester)",
        "pl": "Trestolon Acetate (MENT-Ac, szybki ester)"
      },
      "routeNote": {
        "hu": "Designer 19-Nor AAS (7α-metil-19-nortestosterone) — Population Council Phase II férfi-kontracepció-trial leállt, ma kizárólag UGL. Rövid ~8h felezés ⇒ EOD vagy napi IM-injekció szükséges. Aromatizál 7α-metilestradiollá (alacsonyabb ER-affinitás mint E2) ⇒ kevesebb E2-mellékhatás, DE prolaktin-monitor a 19-Nor framework miatt KÖTELEZŐ. Hatás-erőssége nagyon magas (~10x testosterone anabolic).",
        "en": "Designer 19-Nor AAS (7α-methyl-19-nortestosterone) — Population Council Phase II male-contraception trial halted, today UGL only. Short ~8h half-life ⇒ EOD or daily IM injection required. Aromatizes to 7α-methylestradiol (lower ER affinity than E2) ⇒ fewer E2 side effects, BUT prolactin monitoring is MANDATORY due to 19-Nor framework. Very high potency (~10× testosterone anabolic).",
        "pl": "Designerski 19-Nor AAS (7α-metylo-19-nortestosteron) — badanie Population Council Faza II antykoncepcji męskiej zatrzymane, dziś tylko UGL. Krótki ~8h okres półtrwania ⇒ wymagana iniekcja IM EOD lub codziennie. Aromatyzuje do 7α-metyloestradiolu (niższe powinowactwo ER niż E2) ⇒ mniej skutków E2, ALE monitoring prolaktyny OBOWIĄZKOWY z powodu szkieletu 19-Nor. Bardzo wysoka siła działania (~10× testosteron anaboliczny)."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "~8 h (macierzysty Trestolon po Ac)",
      "halfLifeActive": "~8 h",
      "bioavailability": "~95-100% (IM, szybka hydroliza Ac-estru)",
      "onsetTime": {
        "hu": "12-24 h (IM, fast-acting Ac)",
        "en": "12-24 h (IM, fast-acting Ac)",
        "pl": "12-24 h (IM, szybko działający Ac)"
      },
      "dosing": {
        "hu": "50-100 mg/hét IM, EOD vagy 3x/hét osztva (Mon/Wed/Fri). Tipikus dózis 75 mg/hét. Max 8-10 hét ciklus. PCT utolsó injekció +2-3 nap. Cabergoline + Testosterone-base KÖTELEZŐ.",
        "en": "50-100 mg/week IM, split EOD or 3×/week (Mon/Wed/Fri). Typical dose 75 mg/week. Max 8-10 week cycle. PCT starts last injection +2-3 days. Cabergoline + Testosterone-base MANDATORY.",
        "pl": "50-100 mg/tydzień IM, podzielone EOD lub 3×/tydzień (pon/śr/pt). Typowa dawka 75 mg/tydzień. Maks 8-10 tygodni cyklu. PCT od ostatniej iniekcji +2-3 dni. Cabergolina + Testosteron-baza OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/tydzień",
        "note": {
          "hu": "50-100 mg/hét, EOD vagy E3D IM (rövid felezés). Max 8-10 hét. Cabergoline + Test-base KÖTELEZŐ. PCT utolsó injekció +2-3 nap.",
          "en": "50-100 mg/week, EOD or E3D IM (short half-life). Max 8-10 weeks. Cabergoline + Test-base MANDATORY. PCT starts last injection +2-3 days.",
          "pl": "50-100 mg/tydzień, EOD lub E3D IM (krótki okres półtrwania). Maks 8-10 tygodni. Cabergolina + Test-baza OBOWIĄZKOWE. PCT od ostatniej iniekcji +2-3 dni."
        }
      },
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 75000,
      "hepatotoxicity": "low",
      "aromatization": "low",
      "androgenicRatio": "650:650",
      "legalStatus": "Nigdy nie był Rx (trial antykoncepcji męskiej Faza II Population Council wstrzymany). Tylko UGL. Zakazany WADA.",
      "detectionWindow": "W moczu: 2-3 tygodnie (krótki ester, szybki klirens). Akredytowane WADA LC-MS/MS.",
      "quality": {
        "pure": [
          "Klarowny bladożółty olej, fiolka 10 ml, 50-100 mg/ml stężenie UGL",
          "Źródło HPLC-testowane OBOWIĄZKOWE (designerski AAS, wysokie ryzyko podróbek)"
        ],
        "caution": [
          "EOD lub codzienna iniekcja IM wymagana z powodu krótkiego okresu półtrwania",
          "PIP powszechny (nośnik krótkiego estru, wysokie stężenie mg/ml)",
          "Monitor prolaktyny OBOWIĄZKOWY z powodu szkieletu 19-Nor (ryzyko ginekomastii + spadku libido)",
          "Bardzo wysoka siła działania — niższe zapotrzebowanie na dawkę niż testosteron"
        ],
        "avoid": [
          "Jeśli zmęczenie iniekcyjne wysokie, preferowany wariant Enan (1-2× w tygodniu)",
          "Prolaktinoma lub stan wrażliwy na prolaktynę",
          "Planowane ojcostwo (regeneracja HPTA 19-Nor może być przedłużona)",
          "Pierwszy cykl AAS (designerski compound, wymagana tolerancja TRT)"
        ]
      },
      "interactions": [
        "Kabergolina 0,25-0,5 mg E3D monitor prolaktyny OBOWIĄZKOWY (szkielet 19-Nor)",
        "Stack z bazą testosteronu standardowy (designerski AAS, niższa dawka też wystarcza)",
        "PCT od ostatniej iniekcji Ac +2-3 dni (krótki wash-out)"
      ]
    },
    {
      "id": "en",
      "routeId": "en",
      "routeLabel": {
        "hu": "Trestolone Enanthate (MENT-En, lassú észter)",
        "en": "Trestolone Enanthate (MENT-En, slow ester)",
        "pl": "Trestolon Enanthate (MENT-En, wolny ester)"
      },
      "routeNote": {
        "hu": "Hosszabb felezés (~5-7 nap) ⇒ heti 1-2 IM-injekció elegendő, steady-state 3-4 hét. PIP enyhébb mint Ac-on. Ugyanaz a designer parent Trestolone — magas anabolic erősség + 19-Nor prolaktin-rizikó. Hosszabb detection window (6-8 hét). Minimum 8-10 hét ciklus a steady-state miatt.",
        "en": "Longer half-life (~5-7 days) ⇒ once/twice weekly IM injection sufficient, steady-state 3-4 weeks. PIP milder than Ac. Same designer parent Trestolone — high anabolic potency + 19-Nor prolactin risk. Longer detection window (6-8 weeks). Minimum 8-10 week cycle due to steady-state.",
        "pl": "Dłuższy okres półtrwania (~5-7 dni) ⇒ iniekcja IM raz/dwa razy w tygodniu wystarcza, stan stacjonarny 3-4 tygodnie. PIP łagodniejszy niż Ac. Ten sam designerski macierzysty Trestolon — wysoka siła anaboliczna + ryzyko prolaktyny 19-Nor. Dłuższe okno detekcji (6-8 tygodni). Minimum 8-10 tygodni cyklu z powodu stanu stacjonarnego."
      },
      "image": "/performance/oil-vial-orange.png",
      "halfLife": "5-7 dni (ester Enantatu)",
      "halfLifeActive": "~24 h wolny Trestolon (po hydrolizie)",
      "bioavailability": "~95-100% (IM, wolna hydroliza Enan-estru)",
      "onsetTime": {
        "hu": "48-72 h (IM, slow-acting; steady-state 3-4 hét)",
        "en": "48-72 h (IM, slow-acting; steady-state 3-4 weeks)",
        "pl": "48-72 h (IM, wolno działający; stan stacjonarny 3-4 tygodnie)"
      },
      "dosing": {
        "hu": "100-200 mg/hét IM, heti 1-2x osztva. Tipikus dózis 150 mg/hét. Minimum 8-10 hét ciklus. PCT utolsó injekció +14-21 nap. Cabergoline + Testosterone-base KÖTELEZŐ.",
        "en": "100-200 mg/week IM, split 1-2× weekly. Typical dose 150 mg/week. Minimum 8-10 week cycle. PCT starts last injection +14-21 days. Cabergoline + Testosterone-base MANDATORY.",
        "pl": "100-200 mg/tydzień IM, podzielone 1-2× w tygodniu. Typowa dawka 150 mg/tydzień. Minimum 8-10 tygodni cyklu. PCT od ostatniej iniekcji +14-21 dni. Cabergolina + Testosteron-baza OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 100,
          "medium": 150,
          "high": 200
        },
        "unit": "mg/tydzień",
        "note": {
          "hu": "100-200 mg/hét, heti 1-2x IM. Minimum 8-10 hét ciklus. Cabergoline + Test-base KÖTELEZŐ. PCT utolsó injekció +14-21 nap.",
          "en": "100-200 mg/week, 1-2× weekly IM. Minimum 8-10 week cycle. Cabergoline + Test-base MANDATORY. PCT starts last injection +14-21 days.",
          "pl": "100-200 mg/tydzień, 1-2× w tygodniu IM. Minimum 8-10 tygodni cyklu. Cabergolina + Test-baza OBOWIĄZKOWE. PCT od ostatniej iniekcji +14-21 dni."
        }
      },
      "defaultVialMg": 1000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 150000,
      "hepatotoxicity": "low",
      "aromatization": "low",
      "androgenicRatio": "650:650",
      "legalStatus": "Nigdy nie był Rx. Tylko UGL. Zakazany WADA.",
      "detectionWindow": "W moczu: 6-8 tygodni (dłużej niż Ac z powodu uwalniania depotu).",
      "quality": {
        "pure": [
          "Klarowny żółto-bursztynowy olej, fiolka 10 ml, 100-200 mg/ml stężenie UGL",
          "Źródło HPLC-testowane OBOWIĄZKOWE (designerski AAS, wysokie ryzyko podróbek)"
        ],
        "caution": [
          "Tygodniowo 1-2× iniekcja IM (wygodniejsza niż Ac)",
          "PIP mniejszy niż Ac (dłuższy nośnik estru łagodniejszy)",
          "Stan stacjonarny 3-4 tygodnie — krótki cykl nieefektywny",
          "Monitor prolaktyny OBOWIĄZKOWY z powodu szkieletu 19-Nor"
        ],
        "avoid": [
          "Krótki (4-6 tygodni) cykl nieefektywny (stan stacjonarny nie osiągnięty)",
          "Prolaktinoma lub stan wrażliwy na prolaktynę",
          "Planowane ojcostwo (regeneracja HPTA 19-Nor może być przedłużona)"
        ]
      },
      "interactions": [
        "Kabergolina 0,25-0,5 mg E3D monitor prolaktyny OBOWIĄZKOWY (szkielet 19-Nor)",
        "Stack z bazą testosteronu standardowy",
        "PCT od ostatniej iniekcji Enan +14-21 dni (długi wash-out)"
      ]
    }
  ],
  "defaultVariant": "ac"
}
