// Phase C multi-variant entry (Propionate + Enanthate). Lab Terminal hard-fail
// sources: Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599,
// Schänzer 1996 PMID 8616181 (detection), Mottram 2008 doping handbook,
// Eli Lilly Drolban DESI review (FDA 1979, discontinued early 1990s).

export default {
  "id": "masteron",
  "name": "Masteron (Drostanolone)",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Drostanolon, iniekcyjny AAS pochodny 2α-metylo-DHT. Pierwotnie zatwierdzony przez FDA (Drolban, Lilly 1959) na nieoperacyjnego raka piersi u kobiet po menopauzie; dziś tylko underground market. Klasyczny \"hardening\" steryd na cięcie.",
  "description": "Masteron (Drostanolon) to pochodna 2α-metylo-dihydrotestosteronu, wspólnie zsyntetyzowana przez Syntex i Eli Lilly w 1959 r. i zatwierdzona przez FDA w 1961 r. pod marką Drolban do paliatywnego leczenia nieoperacyjnego raka piersi po menopauzie. Wyparta przez nowoczesną terapię tamoksyfenem; Lilly wycofał w 1993 r. Stosunek anaboliczno-androgenny ~62:25 (niski anaboliczny, umiarkowany androgenny). Grupa 2α-metylowa blokuje zarówno aktywność 5α-reduktazy jak i aromatazy — NIE konwertuje do estrogenu i wykazuje unikalny łagodny efekt inhibitora aromatazy (Bhasin 2018 klasyfikacja AAS). NIE 17α-alkilowany, więc hepatotoksyczność minimalna. W kontekście kulturystycznym klasyczny steryd cięciowy do osiągnięcia \"twardości\" i estetyki naczyniowej, często w ostatnich 6-8 tygodniach przygotowań do zawodów. Zakazany przez WADA cały rok.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR, 2α-metylo-DHT, NIE aromatyzuje"
    },
    {
      "label": "Anaboliczny:Androgenny",
      "value": "62:25"
    },
    {
      "label": "Okres półtrwania",
      "value": "2-3 d (Prop), 7-10 d (Enan)"
    },
    {
      "label": "Początek",
      "value": "24-72 h (IM ester)"
    },
    {
      "label": "Status prawny",
      "value": "Wycofany Rx, tylko UGL. Zakaz WADA."
    }
  ],
  "mechanism": "Agonista AR 2α-metylo-dihydrotestosteron (5α-zredukowany). Metylacja 2α zapewnia trzy bloki metaboliczne: (1) hamuje aromatazę (CYP19), więc molekuła NIE konwertuje do estradiolu i klinicznie wykazuje łagodny efekt inhibitora aromatazy; (2) opiera się oksydacyjnemu rozkładowi 17β-HSD (dłuższy okres półtrwania); (3) nie ulega bezpośredniej 5α-redukcji (już zredukowany). Forma estryfikowana 17β-OH (Propionat lub Enantat) po wstrzyknięciu IM powoli hydrolizuje w depocie tłuszczowym do wolnego drostanolonu, który ma wysokie powinowactwo do SHBG i redukuje frakcję testosteronu związanego z SHBG → pośredni wzrost wolnego T.",
  "legalStatus": "USA: Schedule III kontrolowana substancja (DEA, wycofany Rx — Drolban nie produkowany po 1993). UE: kontrolowany steryd anaboliczny, nielegalny bez recepty. HU/PL: posiadanie i sprzedaż przestępstwo. Zakazany przez WADA cały rok w sporcie wyczynowym (S1.1.a sterydy anaboliczno-androgenne).",
  "onsetTime": "24-72 h (IM, zależnie od hydrolizy estru)",
  "halfLife": "2-3 d (Propionat), 7-10 d (Enantat)",
  "halfLifeActive": "~1-2 d wolny drostanolon po hydrolizie estru",
  "interactionsWith": [
    "anastrozole",
    "finasteride",
    "testosterone",
    "warfarin"
  ],
  "aromatization": "Nie — steryczne zawady grupy 2α-metylowej oznaczają, że NIE jest substratem CYP19; klinicznie wykazuje łagodny efekt inhibitora aromatazy (Pope-Kanayama 2014 PMID 24423981 przegląd designer AAS)",
  "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; forma estru iniekcyjna pomija first-pass wątrobowy. Umiarkowane zaburzenia lipidowe (spadek HDL, wzrost LDL) pozostają głównym ryzykiem sercowo-naczyniowym (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "62:25",
  "bindingAffinity": "Umiarkowane powinowactwo do AR; wysokie powinowactwo do SHBG (strukturalny analog DHT) → wypiera testosteron związany z SHBG, indukując pośrednio wzrost wolnego T.",
  "detectionWindow": "Metabolity drostanolonu (rodzina metabolitów 2α-metylo-5α-androstan-3-on) w moczu 3 tygodnie (Prop) – 3 miesiące (Enan). Schänzer 1996 (PMID 8616181) akredytowane WADA GC-MS i LC-MS/MS.",
  "benefits": [
    "Naczyniowy, twardy \"estetyczny\" wygląd podczas przygotowań do zawodów (subiektywne doświadczenie kulturystyczne)",
    "Pośredni wzrost wolnego testosteronu poprzez zajęcie SHBG (wzmacniacz efektu innych AAS)",
    "NIE aromatyzuje → brak efektów ubocznych E2 (ginekomastia, minimalna retencja wody)",
    "Łagodny efekt anty-aromatazowy → redukuje zapotrzebowanie na adiunktywne AI podczas stacków testosteronu",
    "Niska hepatotoksyczność (strukturalny analog DHT, NIE 17α-alkilowany)"
  ],
  "quickStart": [
    "Tylko dla użytkowników z istniejącym doświadczeniem kulturystycznym, NIE pierwszy cykl",
    "Zazwyczaj stackowany z bazą testosteronu (Test-Prop + Mast-Prop, Test-Enan + Mast-Enan dla dopasowania okresu półtrwania estru)",
    "Strukturalny analog DHT → ŚCISŁE ryzyko wypadania włosów: konwersja DHT skóry głowy przyspiesza alopecję androgenową przy genetycznej predyspozycji",
    "Lipidogram (HDL/LDL) baseline + 4 tygodnie + post-cycle OBOWIĄZKOWY",
    "PCT (Clomid + Nolvadex 4 tygodnie) timing zależy od okresu półtrwania partnera stacku"
  ],
  "expectations": [
    {
      "label": "Pierwszy tydzień",
      "body": "Efekt ostry minimalny. Zmiana estetyczna jeszcze niewyczuwalna; hydroliza estru trwa 24-72 h, plasma steady-state Prop 1 tydzień, Enan 4-5 tygodni."
    },
    {
      "label": "3-4 tygodnie",
      "body": "Steady-state Prop. Subiektywnie \"twardszy\" tonus mięśniowy, zwiększona naczyniowość. SHBG spada (~30-50%), wolny T rośnie obok partnera stacku."
    },
    {
      "label": "6-8 tygodni",
      "body": "Szczyt contest-prep — kontur mięśni pod skórą maksymalnie wyróżniony. HDL ~20-30% spadek oczekiwany. Osoby podatne na wypadanie włosów mogą zauważyć przyspieszoną miniaturyzację."
    }
  ],
  "quality": {
    "pure": [
      "Klarowny żółtawy lub jasnożółty olej (~#fef08a ton), bez osadu, fiolka 10 ml",
      "Źródło UGL testowane HPLC obowiązkowe — Drostanolon Propionat i Enantat mają różny profil bólu PIP, fałszerstwa (zastępowanie Test-Prop) są częste"
    ],
    "caution": [
      "Przyspieszenie wypadania włosów u użytkowników z genetyką alopecji androgenowej (strukturalny analog DHT)",
      "Zaburzenia lipidowe: spadek HDL, wzrost LDL (umiarkowane, NIE ekstremalne)",
      "Ból w miejscu wstrzyknięcia (szczególnie Propionat, ze względu na pojazd alkoholowy)",
      "Pogłębienie głosu i hirsutyzm u kobiet (po 1 cyklu może być NIEODWRACALNE — ściśle przeciwwskazany)"
    ],
    "avoid": [
      "Rodzinna historia alopecji androgenowej (skóra głowy wrażliwa na DHT)",
      "Przerost prostaty, rak prostaty (analog DHT → aktywacja AR prostaty)",
      "Stosowanie przez kobiety (ryzyko wirylizacji ekstremalne, korzyść estetyczna mała ze względu na niski wskaźnik anaboliczny)",
      "Ryzyko sercowo-naczyniowe (rodzinna historia, wysokie LDL, miażdżyca) bezwzględne przeciwwskazanie",
      "Jakikolwiek \"pierwszy cykl\" — Masteron jest zawsze partnerem stacku, nigdy samodzielnym pierwszym AAS"
    ]
  },
  "interactions": [
    "Baza testosteronu (dopasowanie Prop+Prop lub Enan+Enan): standardowy stack, wzmacnia syntezę białek mięśniowych",
    "Anastrozol (AI): NIE potrzebny dla cyklu tylko-Masteron (łagodne własne AI); podczas Test-stacku tylko jeśli laboratoryjnie potwierdzone wysokie E2",
    "Finasteryd: NIE hamuje efektu Masteronu (już 5α-zredukowany), i NIE chroni przed DHT skóry głowy — bezużyteczny dla zapobiegania wypadaniu włosów",
    "Warfaryna: efekt antykoagulacyjny może być wzmocniony, monitoring INR",
    "Kombinacja z innymi AAS wzmacnia supresję HPTA, PCT staje się niezbędne"
  ],
  "studies": [
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline",
      "authors": "Bhasin S, Brito JP, Cunningham GR et al.",
      "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.",
      "pmid": "29562364"
    },
    {
      "title": "Effects of androgenic-anabolic steroids in athletes",
      "authors": "Hartgens F, Kuipers H.",
      "journal": "Sports Med. 2004;34(8):513-554.",
      "pmid": "15233599"
    },
    {
      "title": "Metabolism of anabolic androgenic steroids",
      "authors": "Schänzer W.",
      "journal": "Clin Chem. 1996;42(7):1001-20.",
      "pmid": "8616181"
    },
    {
      "title": "Anabolic-androgenic steroid dependence: an emerging disorder",
      "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.",
      "journal": "Addiction. 2009;104(12):1966-78.",
      "pmid": "19922565"
    },
    {
      "title": "Drostanolone propionate in advanced breast cancer",
      "authors": "Gordan GS, Halden A, Horn Y, Fuery JJ, Parsons RJ, Walter RM.",
      "journal": "Cancer. 1964;17:1056-62.",
      "pmid": "14201858"
    }
  ],
  "faq": [
    {
      "q": "Dlaczego nazywa się go sterydem \"hardening\"?",
      "a": "Masteron NIE aromatyzuje i redukuje retencję wody dzięki wysokiemu powinowactwu do SHBG, więc przy niskim procencie tłuszczu (<10-12%) warstwa wody pod skórą kurczy się do minimum, dając naczyniowo zaakcentowany, \"twardy\" wygląd. Przy wyższym tłuszczu (>15%) efekt estetyczny niewidoczny — stąd specyfika contest-prep."
    },
    {
      "q": "Czy to prawda, że jest też inhibitorem aromatazy?",
      "a": "Częściowo. Steryczne zawady grupy 2α-metylowej dają Masteronowi klinicznie łagodny efekt inhibitora aromatazy — może redukować zapotrzebowanie na adiunktywny Anastrozol podczas stacków Test. ALE efekt NIE jest silny (Letrozol/Anastrozol-poziomu kompletna blokada NIE oczekiwana), a przy wysokich dawkach Test (>500 mg/tydzień) sam NIE wystarcza do kontroli E2."
    },
    {
      "q": "Czy ryzyko wypadania włosów jest naprawdę tak wysokie?",
      "a": "Tak, jeśli istnieje genetyczna predyspozycja do alopecji androgenowej. Masteron jest strukturalnie 2α-metylo-DHT, który omija 5α-reduktazę skóry głowy i bezpośrednio aktywuje AR mieszka włosowego. Finasteryd NIE chroni (Masteron już zredukowany). Jedyna ochrona: jeśli jesteś genetycznie wrażliwy, NIE używaj AAS pochodnych DHT."
    },
    {
      "q": "Dlaczego stosować ester zamiast wolnego drostanolonu?",
      "a": "Macierzysty drostanolon jest nierozpuszczalny w wodzie i szybko się oczyszcza (nierozpuszczalny wolny steryd). Ester (Prop-propionat lub Enan-enantat) estryfikuje grupę 17β-OH, czyniąc cząsteczkę rozpuszczalną w oleju, magazynowalną jako depot poprzez iniekcję IM, a endogenne esterazy ciągle hydrolizują wolny drostanolon, dając stabilne poziomy w osoczu."
    },
    {
      "q": "Zagrożenia długotrwałego stosowania?",
      "a": "Przewlekłe stosowanie AAS powoduje supresję HPTA (możliwie przedłużony wtórny hipogonadyzm wg kohortu Rasmussen-Christofferides 2016 PMID 27568523), ryzyko sercowo-naczyniowe (wzrost LDL, przerost lewej komory), efekty psychologiczne (Kanayama 2009 PMID 19922565 — uzależnienie od AAS). Sam Masteron nie jest skrajnie hepatotoksyczny, ALE skumulowana ekspozycja AAS (Test+Mast+inny stack) jest znacząca."
    }
  ],
  "related": [
    "testosterone-info",
    "anavar-info",
    "winstrol-info",
    "trenbolone-info",
    "superdrol"
  ],
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Panel hormonów: Total T, Free T, E2 (ultraczułe), LH, FSH, SHBG, Prolaktyna. Lipidogram (LDL/HDL/TG). Wątrobowe: ALT/AST/GGT/ALP. CBC + hematokryt. Funkcja nerek (kreatynina, eGFR). PSA (powyżej 30 lat).",
      "purpose": "Baseline lipidogramu i SHBG kluczowy dla unikalnego pośredniego mechanizmu Masteronu (supresja SHBG). Jakiekolwiek LDL >130 mg/dL lub HDL <40 mg/dL jest względnym przeciwwskazaniem."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Tydzień 4-6, połowa cyklu",
      "markers": "Lipidogram (HDL może drastycznie spaść), E2 (jeśli z Test), SHBG (oczekiwany spadek napędzany Masteronem), dziennik ciśnienia, panel wątrobowy (ALT/AST), hematokryt.",
      "purpose": "HDL <30 mg/dL jest alarmem sercowo-naczyniowym. Spadek SHBG (>50%) potwierdza aktywność Masteronu. E2 (podczas Test-stacku) jeśli rośnie, decyduje o potrzebie AI — łagodne własne AI Masteronu NIE wystarcza przy wysokich dawkach Test."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Od ostatniej iniekcji: Prop +3-5 dni, Enan +14-21 dni start PCT. PCT tydzień 4 i 8-12 kontrole recovery.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG (recovery), lipidogram (HDL recovery), panel wątrobowy.",
      "purpose": "Weryfikacja recovery HPTA i SHBG. Jeśli T nie wraca do baseline w 12 tygodni, konsultacja endokrynologa. Recovery SHBG zazwyczaj w 4-6 tygodni."
    },
    "cruise": {
      "label": "Na cruise (cruise zawierający Masteron NIE standardowy)",
      "timing": "Cruise z Masteronem atypowy; jeśli na cruise, monitoring co 6-8 tygodni",
      "markers": "Lipidogram (HDL), SHBG, Total T, E2, dziennik ciśnienia, PSA (powyżej 30 lat).",
      "purpose": "Przedłużona ekspozycja Masteronu akumuluje zaburzenia lipidowe i aktywację AR prostaty. Na cruise TRT-Test Masteron jest zazwyczaj pomijany — efekt estetyczny tylko wartościowy podczas contest-prep."
    }
  },
  "variants": [
    {
      "routeId": "prop",
      "routeLabel": "Drostanolon Propionat (IM, szybki)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Wycofany Rx (Drolban nie produkowany po 1993), dostępny tylko na rynku UGL. UE/HU/PL: nielegalny bez recepty, zakazany przez WADA.",
      "bioavailability": "~95-100% (iniekcja IM pomija first-pass; propionat ester szybka hydroliza ~2-3 d)",
      "onsetTime": "24-48 h (IM, propionat fast-acting ester)",
      "halfLife": "2-3 d (Propionat ester; wolny drostanolon t½ ~1-2 d po hydrolizie)",
      "halfLifeActive": "1-2 d",
      "detectionWindow": "3 tygodnie w moczu (krótsze niż Enantat ze względu na krótki ester propionatowy). Akredytowane WADA GC-MS i LC-MS/MS.",
      "aromatization": "Nie — struktura 2α-metylo-DHT NIE jest substratem CYP19; łagodny efekt AI (Pope-Kanayama 2014).",
      "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; iniekcyjny ester pomija first-pass (Hartgens-Kuipers 2004).",
      "quality": {
        "pure": [
          "Klarowny jasnożółty lub wodno-klarowny olej, fiolka 10 ml, sterylnie filtrowana",
          "Źródło UGL testowane HPLC obowiązkowe — ester propionatowy charakterystycznie bolesny PIP, odróżnialnie inny niż enantat"
        ],
        "caution": [
          "Ból w miejscu wstrzyknięcia (PIP): propionat w pojeździe alkoholowym często bolesny, obrzęk 24-48 h",
          "Wymaga 3x tygodniowo EOD iniekcji ze względu na krótki okres półtrwania (pon/śr/pt lub E2D)",
          "Spadek HDL, wzrost LDL (umiarkowane)",
          "Przyspieszenie wypadania włosów w alopecji androgenowej"
        ],
        "avoid": [
          "Silna wrażliwość w miejscu wstrzyknięcia (preferuj wariant Enantat jeśli każda iniekcja IM jest silnie bolesna)",
          "Więcej niż 8 tygodni ciągłego cyklu (supresja HPTA kumulatywna)",
          "Ryzyko sercowo-naczyniowe (rodzinna historia, wysokie LDL)",
          "Stosowanie przez kobiety (ekstremalne ryzyko wirylizacji)"
        ]
      },
      "interactions": [
        "Test-Propionat stack: dopasowanie okresu półtrwania estru, harmonogram iniekcji EOD",
        "Tren-Acetat stack: klasyczny \"cutting stack\", wszystkie trzy krótkie estry",
        "PCT (Clomid 50mg/dzień + Nolvadex 20mg/dzień, 4 tygodnie) start ostatnia iniekcja Prop +3-5 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 400,
          "high": 600
        },
        "unit": "mg/tydzień (IM, podzielone 3x EOD)",
        "note": "Maksimum 8 tygodni cyklu. 300-600 mg/tydzień, 3x EOD podzielone iniekcje (krótki okres półtrwania). TUDCA / NAC NIE obowiązkowe (niska hepatotoksyczność), ALE monitoring lipidogramu i dziennik ciśnienia niezbędne. PCT 4 tygodnie (Clomid + Nolvadex) od ostatniej iniekcji +3-5 dni."
      }
    },
    {
      "routeId": "enan",
      "routeLabel": "Drostanolon Enantat (IM, wolny)",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Nigdy nie licencjonowany jako ludzki Rx — tylko rynek UGL. Wszędzie nielegalny, zakaz WADA.",
      "bioavailability": "~95-100% (iniekcja IM pomija first-pass; enantat ester wolna hydroliza ~7-10 d)",
      "onsetTime": "48-72 h (IM, enantat slow-acting ester; steady-state 4-5 tygodni)",
      "halfLife": "7-10 d (Enantat ester; wolny drostanolon t½ ~1-2 d po hydrolizie)",
      "halfLifeActive": "1-2 d (powolna absorpcja depot, plasma stabilizuje się po 1-2 tygodniach)",
      "detectionWindow": "2-3 miesiące w moczu (znacznie dłużej niż propionat ze względu na długi ester enantatowy). Akredytowane WADA GC-MS i LC-MS/MS.",
      "aromatization": "Nie — struktura 2α-metylo-DHT NIE substrat CYP19 dla żadnego z estrów; łagodny efekt AI (Pope-Kanayama 2014).",
      "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; iniekcyjny ester pomija first-pass (Hartgens-Kuipers 2004).",
      "quality": {
        "pure": [
          "Klarowny żółtawo-brązowy olej (~#f59e0b ton), fiolka 10 ml, sterylnie filtrowana",
          "Źródło UGL testowane HPLC obowiązkowe — enantat ester znacznie mniej bolesny niż propionat"
        ],
        "caution": [
          "Powolny początek: zmiana estetyczna wyczuwalna dopiero po 4-5 tygodniach (steady-state)",
          "Tygodniowa 1-2x iniekcja wystarcza (pon lub pon+czw)",
          "Spadek HDL, wzrost LDL (umiarkowane, bardziej kumulatywne niż Prop ze względu na dłuższą ekspozycję)",
          "Długie okno detekcji: preferuj Prop podczas okresu zawodów"
        ],
        "avoid": [
          "Krótki cykl (4-6 tygodni) NIE skuteczny — Enan steady-state tylko po 4-5 tygodniach",
          "Więcej niż 12 tygodni ciągłego cyklu (ciężka supresja HPTA)",
          "Zawody testowane WADA <3 miesiące po planowanym końcu (okno detekcji)",
          "Ryzyko sercowo-naczyniowe, stosowanie przez kobiety (patrz Propionat)"
        ]
      },
      "interactions": [
        "Test-Enantat stack: dopasowanie okresu półtrwania estru, tygodniowy harmonogram iniekcji 1-2x",
        "Tren-Enantat stack: \"long-ester cutting\" 10-12 tygodni",
        "PCT (Clomid + Nolvadex 4-6 tygodni) start ostatnia iniekcja Enan +14-21 dni (klirens steady-state)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 500,
          "high": 700
        },
        "unit": "mg/tydzień (IM, podzielone 1-2x)",
        "note": "Minimum 8-10 tygodni cyklu ze względu na steady-state. 300-700 mg/tydzień, tygodniowo 1-2x iniekcja. TUDCA / NAC NIE obowiązkowe, ALE monitoring lipidogramu i dziennik ciśnienia niezbędne. PCT 4-6 tygodni (Clomid + Nolvadex) od ostatniej iniekcji +14-21 dni."
      }
    }
  ],
  "defaultVariant": "prop"
}
