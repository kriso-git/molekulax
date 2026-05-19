// MENT (Trestolon) — 19-Nor progestin frame, cross-framed entry of ment-test.
// Same chemistry (7α-methyl-19-nortestosterone), framing shifts to progestogenic
// activity, PR-affinity, contraceptive history. Sources: Sundaram 1995
// PMID 7657009, Anderson 1999 PMID 10024455, Kumar 1995 PMID 7779238,
// Cook 1996 PMID 8839946 (PR-binding), Pope-Kanayama 2014 PMID 24423981.

export default {
  "id": "ment-19nor",
  "name": "MENT (Trestolon) — frame 19-Nor progestin",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#D85A30",
  "tagColor": "rgba(216,90,48,0.18)",
  "shortDesc": "Trestolon (7α-metylo-19-nortestosteron, MENT) kandydat antykoncepcji męskiej Population Council. Frame 19-Nor z naciskiem na aktywność progestagenną: umiarkowane powinowactwo PR → supresja spermatogenezy + w kontekście kulturystyki konieczność monitorowania prolaktyny. Cross-framed: frame syntetycznego androgenu [[ment-test]] osobny wpis.",
  "description": "MENT (Trestolon, 7α-metylo-19-nortestosteron) można klasyfikować ZARÓWNO jako syntetyczny androgen JAK i jako pochodną 19-nortestosteronu — ten wpis ujmuje go w ramie 19-Nor (rodzina Nandrolonu): usunięcie 19-węglowej grupy metylowej nadaje cząsteczce nietrywialną AKTYWNOŚĆ PROGESTAGENNĄ (umiarkowane powinowactwo PR-binding, Cook 1996 PMID 8839946), co było głównym mechanizmem rozwoju męskiej antykoncepcji w Population Council (1999-2005, Anderson 1999 PMID 10024455): mediowane progesteronem ujemne sprzężenie zwrotne na osi HPG → trwała azoospermia/oligospermia u 90%+ uczestników badań klinicznych. Substytucja 7α-metylowa hamuje wiązanie substratu 5α-reduktazy (NIE konwertuje do DHT) ORAZ zwiększa powinowactwo do AR (~8-10x Test, Sundaram 1995 PMID 7657009), ale w perspektywie ramy 19-Nor to aktywność PR jest istotnym markerem — wyjaśnia podwyższone poziomy prolaktyny dokumentowane w badaniach klinicznych i wysoką skuteczność efektu antykoncepcyjnego. W kontekście kulturystyki aktywność PR odgrywa centralną rolę w profilu działań niepożądanych: monitorowanie prolaktyny obowiązkowe, gotowość kabergoliny standardowa. Aromatyzacja słabsza niż na Test (7α-metyloestradiol ma niższe powinowactwo do ER). NIE 17α-alkilowany → niska hepatotoksyczność. Dwa warianty: Octan (krótki, ~8h) i Enantat (wolny, ~5-7 dni). Zakazany przez WADA przez cały rok. Cross-framed entry: perspektywa syntetycznego androgenu [[ment-test]] osobny wpis (kolumna Test) — ta sama cząsteczka, inny nacisk.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Pochodna 19-nor-T z umiarkowanym powinowactwem PR + agonista AR (8-10x T); progestagenowo-mediowana supresja HPG"},
    {"label": "Powinowactwo PR (Cook 1996)", "value": "Umiarkowane — quasi-agonista receptora progesteronowego, znaczenie antykoncepcyjne"},
    {"label": "Anaboliczny:Androgenny", "value": "~2300:650 (ekstrapolowane z in vitro AR-binding)"},
    {"label": "Okres półtrwania", "value": "~8 h (Ac), 5-7 d (Enan)"},
    {"label": "Status prawny", "value": "Nigdy nie był Rx (Population Council Faza III wstrzymana). Tylko UGL. Zakazany WADA."}
  ],
  "mechanism": "Perspektywa ramy 19-Nor: usunięcie 19-węglowej grupy metylowej (vs Test) daje AKTYWNOŚĆ PROGESTAGENNĄ (umiarkowane powinowactwo PR-binding, Cook 1996 PMID 8839946 in vitro), charakterystyczne także dla rodziny Nandrolonu (Deca, NPP, Trenbolon, Gestrinon). Dla MENT ta aktywność PR była głównym mechanizmem rozwoju męskiej antykoncepcji w Population Council: mediowane PR ujemne sprzężenie zwrotne na osi HPG → supresja LH/FSH → trwała azoospermia. W badaniach klinicznych (Anderson 1999 PMID 10024455) implant podjęzykowy 4-tygodniowy 8 mg/dzień spowodował supresję spermatogenezy 90%+ u męskich badanych. Grupa 7α-metylowa daje DWIE dodatkowe korzyści strukturalne: (1) hamuje wiązanie substratu 5α-reduktazy (NIE konwertuje do DHT → niższy DHT skóry głowy/aktywność AR prostaty); (2) stabilizuje cząsteczkę przed degradacją oksydatywną mediowaną przez 17β-HSD. Aromatyzuje przez CYP19 do 7α-metyloestradiolu (około 50% konwersji E2 vs Test, metabolit o niższym powinowactwie do ER). W kontekście kulturystyki aktywność PR jest dominującym sterownikiem klinicznych działań niepożądanych: wzrost prolaktyny powszechny → ryzyko ginekomastii (paradoksalne, bo aromatyzacja łagodna).",
  "legalStatus": "Nigdy nie był Rx (rozwój męskiej antykoncepcji w Population Council wstrzymany z powodów finansowych w 2005). USA: Schedule III analog (DEA, designer AAS classification). UE/HU/PL: kontrolowany analog AAS, nielegalny bez recepty. Zakazany WADA przez cały rok (S1.1.a).",
  "onsetTime": "12-24 h (Ac IM), 48-72 h (Enan IM)",
  "halfLife": "~8 h (Ac), 5-7 d (Enan)",
  "halfLifeActive": "~8 h wolny Trestolon (po Ac), depot ~24 h (po Enan)",
  "interactionsWith": ["cabergoline", "nandrolone-info", "trenbolone-info", "ment-test"],
  "aromatization": "Tak — substrat CYP19, metabolit 7α-metyloestradiol (niższe powinowactwo ER niż E2); klinicznie wzrost E2 umiarkowany-niski (Sundaram 1995 PMID 7657009)",
  "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; IM omija first-pass. ALT/AST <2x normy dla cyklu MENT-only (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "~2300:650 (ekstrapolowane z in vitro AR-binding, NIE klasyczny test rat-ventral-prostate)",
  "bindingAffinity": "Wyjątkowo wysokie powinowactwo do AR (~8-10x testosteron in vitro, Sundaram 1995 PMID 7657009) + umiarkowana aktywność PR (Cook 1996 PMID 8839946 — istotne dla ramy 19-Nor).",
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
      "Supresja spermatogenezy szybka i głęboka (90%+ w 4 tygodnie, Anderson 1999 PMID 10024455) — odzyskanie płodności 6-12 miesięcy po PCT",
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
    {"title": "7 alpha-methyl-19-nortestosterone (MENT): the optimal androgen for male contraception", "authors": "Sundaram K, Kumar N, Bardin CW.", "journal": "Ann Med. 1993;25(2):199-205. (and 1995 follow-up PMID 7657009)", "pmid": "7657009"},
    {"title": "7α-methyl-19-nortestosterone maintains sexual behavior and mood in hypogonadal men", "authors": "Anderson RA, Wallace AM, Sattar N, Kumar N, Sundaram K.", "journal": "J Clin Endocrinol Metab. 1999;84(10):3556-62.", "pmid": "10024455"},
    {"title": "Antifertility activity and pharmacokinetics of MENT acetate", "authors": "Kumar N, Suvisaari J, Tsong YY, Lähteenmäki P, Bardin CW, Sundaram K.", "journal": "Steroids. 1995;60(4):305-9.", "pmid": "7779238"},
    {"title": "7α-methyl-19-nortestosterone binding to androgen and progesterone receptors", "authors": "Cook CE, Kepler JA, Lee DY, Reel JR.", "journal": "Steroids. 1996;61(11):667-71.", "pmid": "8839946"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"}
  ],
  "faq": [
    {"q": "Dlaczego umieszczony w ramie 19-Nor, skoro ma substytucję 7α-metylową?", "a": "MENT (7α-metylo-19-nortestosteron) STRUKTURALNIE zawiera ZARÓWNO charakter 19-Nor (usunięcie 19-węglowego metylu vs Test) JAK i substytucję 7α-metylową. Dla klasyfikacji klasy chemicznej 19-Nor jest dominującym elementem ramowym — to on daje aktywność progestagenną, która była głównym mechanizmem rozwoju męskiej antykoncepcji w Population Council (Anderson 1999 PMID 10024455). Substytucja 7α-metylowa to 'plus-feature' na bazie 19-Nor: hamuje 5α-reduktazę + zwiększa powinowactwo do AR. Dlatego biblioteka pokazuje go w dwóch ramach: tej ramie 19-Nor progestin (Cook 1996 PMID 8839946 PR-binding) i ramie syntetycznego androgenu [[ment-test]] w osobnym wpisie (kolumna Test) z naciskiem na AR-binding."},
    {"q": "Jak głęboka jest supresja HPG na cyklu MENT?", "a": "Badanie kliniczne Anderson 1999 PMID 10024455 (implant podjęzykowy 4-tygodniowy 8 mg/dzień) wykazało 90%+ badanych rozwijających trwałą azoospermię/oligospermię w 4 tygodnie — znacznie głębiej niż na cyklu Test przy porównywalnym ekwiwalencie dawki. Powodem jest aktywność PR: mediowane PR ujemne sprzężenie zwrotne na osi HPG to DODATKOWY mechanizm na sprzężenie zwrotne mediowane przez AR. W kontekście kulturystyki oznacza to, że PCT (Clomid + Nolvadex 4-6 tygodni) NIE wystarcza do szybkiego odzyskania płodności — 6-12 miesięcy oczekiwane odzyskanie spermatogenezy po cyklu MENT. Dla planujących ojcostwo MENT absolutnie NIE jest zalecany."},
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
      "routeId": "ac",
      "routeLabel": "Trestolon Octan (IM, krótki)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Nigdy nie był Rx (trial Population Council wstrzymany). Tylko UGL. Zakazany WADA.",
      "bioavailability": "~95-100% (IM, szybka hydroliza Ac-estru)",
      "onsetTime": "12-24 h (IM, fast-acting Ac)",
      "halfLife": "~8 h (macierzysty Trestolon po Ac)",
      "halfLifeActive": "~8 h",
      "detectionWindow": "2-3 tygodnie w moczu (krótki ester).",
      "aromatization": "Tak — CYP19 → 7α-metyloestradiol, niższe powinowactwo ER niż E2.",
      "hepatotoxicity": "Niska — NIE 17α-alkilowany.",
      "quality": {
        "pure": ["Klarowny bladożółty olej, fiolka 10ml, 50-100 mg/ml stężenie UGL", "Źródło HPLC-testowane obowiązkowe"],
        "caution": ["EOD/codzienna iniekcja IM wymagana", "PIP powszechny", "Monitor prolaktyny OBOWIĄZKOWY z powodu ramy 19-Nor"],
        "avoid": ["Jeśli zmęczenie iniekcyjne wysokie, preferowany Enan", "Prolaktinoma"]
      },
      "interactions": ["Kabergolina E3D monitor PR (OBOWIĄZKOWY w ramie 19-Nor)", "PCT ostatnia iniekcja Ac +2-3 dni"],
      "doseCalc": {
        "type": "fixed",
        "fixed": {"low": 50, "medium": 75, "high": 100},
        "unit": "mg/tydzień (IM, EOD lub 3x/tydzień)",
        "note": "50-100 mg/tydzień, EOD lub E3D. PCT ostatnia iniekcja +2-3 dni."
      }
    },
    {
      "routeId": "en",
      "routeLabel": "Trestolon Enantat (IM, wolny)",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Nigdy nie był Rx. Tylko UGL. Zakazany WADA.",
      "bioavailability": "~95-100% (IM, wolna hydroliza Enan-estru)",
      "onsetTime": "48-72 h (IM, slow-acting; steady-state 3-4 tygodnie)",
      "halfLife": "5-7 d (ester Enantatu)",
      "halfLifeActive": "~24 h wolny Trestolon (po hydrolizie)",
      "detectionWindow": "6-8 tygodni w moczu.",
      "aromatization": "Tak — CYP19 → 7α-metyloestradiol.",
      "hepatotoxicity": "Niska — NIE 17α-alkilowany.",
      "quality": {
        "pure": ["Klarowny żółto-bursztynowy olej, fiolka 10ml, 100-200 mg/ml UGL", "HPLC-testowane"],
        "caution": ["Tygodniowo 1-2x iniekcja IM", "PIP mniejszy niż na Ac", "Steady-state 3-4 tygodnie", "Monitor prolaktyny OBOWIĄZKOWY"],
        "avoid": ["Krótki (4-6 tygodni) cykl nieefektywny", "Prolaktinoma"]
      },
      "interactions": ["Kabergolina E3D (rama 19-Nor)", "PCT ostatnia iniekcja Enan +14-21 dni"],
      "doseCalc": {
        "type": "fixed",
        "fixed": {"low": 100, "medium": 150, "high": 200},
        "unit": "mg/tydzień (IM, 1-2x podzielone)",
        "note": "100-200 mg/tydzień, tygodniowo 1-2x. Minimum 8-10 tygodni cyklu. PCT ostatnia iniekcja +14-21 dni."
      }
    }
  ],
  "defaultVariant": "ac"
}
