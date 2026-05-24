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
      "id": "prop",
      "routeId": "prop",
      "routeLabel": {
        "hu": "Drostanolone Propionate (Masteron-Prop, gyors észter)",
        "en": "Drostanolone Propionate (Masteron-Prop, fast ester)",
        "pl": "Drostanolon Propionian (Masteron-Prop, szybki ester)"
      },
      "routeNote": {
        "hu": "A klasszikus 'cutting' kozmetikai DHT-származék — szárazság, izom-keménység, enyhe AI-hatás. ~2-3 napos felezés ⇒ heti 3x EOD IM-injekció (Mon/Wed/Fri vagy E2D). NEM 17α-alkilált ⇒ alacsony hepatotoxicitás. PIP gyakran fájdalmas a propionát alkohol-tartalmú vehikulum miatt. Rövid detection window (~3 hét) ⇒ contest-prep preferált variánsa.",
        "en": "The classic 'cutting' cosmetic DHT-derivative — dryness, muscle hardness, mild AI effect. ~2-3 day half-life ⇒ 3× EOD IM injection weekly (Mon/Wed/Fri or E2D). NOT 17α-alkylated ⇒ low hepatotoxicity. PIP often painful due to propionate's alcohol-containing vehicle. Short detection window (~3 weeks) ⇒ preferred contest-prep variant.",
        "pl": "Klasyczna 'tnąca' kosmetyczna pochodna DHT — suchość, twardość mięśni, łagodne działanie AI. ~2-3-dniowy okres półtrwania ⇒ iniekcja IM 3× EOD tygodniowo (pon/śr/pt lub E2D). NIE 17α-alkilowany ⇒ niska hepatotoksyczność. PIP często bolesny z powodu wehikułu propionianu zawierającego alkohol. Krótkie okno detekcji (~3 tygodnie) ⇒ preferowany wariant contest-prep."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "2-3 dni (Propionat ester; wolny drostanolon t½ ~1-2 d po hydrolizie)",
      "halfLifeActive": "1-2 dni",
      "bioavailability": "~95-100% (iniekcja IM pomija first-pass; propionat ester szybka hydroliza ~2-3 dni)",
      "onsetTime": {
        "hu": "24-48 óra (IM, propionát fast-acting észter)",
        "en": "24-48 h (IM, propionate fast-acting ester)",
        "pl": "24-48 h (IM, propionian szybko działający ester)"
      },
      "dosing": {
        "hu": "300-600 mg/hét IM, 3x EOD osztva (Mon/Wed/Fri). Tipikus cutting dózis 400 mg/hét. Max 8 hét ciklus. Test-Prop base + opcionális Tren-Ace stack. PCT 4 hét utolsó injekció +3-5 nap.",
        "en": "300-600 mg/week IM, split 3× EOD (Mon/Wed/Fri). Typical cutting dose 400 mg/week. Max 8 week cycle. Test-Prop base + optional Tren-Ace stack. PCT 4 weeks last injection +3-5 days.",
        "pl": "300-600 mg/tydzień IM, podzielone 3× EOD (pon/śr/pt). Typowa dawka cięcia 400 mg/tydzień. Maks 8 tygodni cyklu. Baza Test-Prop + opcjonalny stack Tren-Ace. PCT 4 tygodnie od ostatniej iniekcji +3-5 dni."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 400,
          "high": 600
        },
        "unit": "mg/tydzień",
        "note": {
          "hu": "300-600 mg/hét, 3x EOD osztva IM (2-3 nap felezés). Max 8 hét. TUDCA NEM kötelező (alacsony hepatotox), DE lipid + vérnyomás monitor. PCT utolsó injekció +3-5 nap.",
          "en": "300-600 mg/week, 3× EOD split IM (2-3 day half-life). Max 8 weeks. TUDCA not required (low hepatotox), BUT lipid + BP monitor essential. PCT starts last injection +3-5 days.",
          "pl": "300-600 mg/tydzień, 3× EOD podzielone IM (2-3-dniowy okres półtrwania). Maks 8 tygodni. TUDCA niewymagana (niska hepatotoks), ALE monitor lipidów + ciśnienia konieczny. PCT od ostatniej iniekcji +3-5 dni."
        }
      },
      "defaultVialMg": 1000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 100000,
      "hepatotoxicity": "low",
      "aromatization": "none",
      "androgenicRatio": "62:25",
      "legalStatus": "Wycofany Rx (Drolban nie produkowany po 1993), dostępny tylko na rynku UGL. UE/HU/PL: nielegalny bez recepty, zakazany przez WADA.",
      "detectionWindow": "W moczu: 3 tygodnie (krótsze niż Enantat ze względu na krótki ester propionatowy). Akredytowane WADA GC-MS i LC-MS/MS.",
      "quality": {
        "pure": [
          "Klarowny jasnożółty lub wodno-klarowny olej, fiolka 10 ml, sterylnie filtrowana",
          "Źródło UGL testowane HPLC obowiązkowe — ester propionatowy charakterystycznie bolesny PIP, odróżnialnie inny niż enantat"
        ],
        "caution": [
          "Ból w miejscu wstrzyknięcia (PIP): propionat w pojeździe alkoholowym często bolesny, obrzęk 24-48 h",
          "Wymaga 3× tygodniowo EOD iniekcji ze względu na krótki okres półtrwania (pon/śr/pt lub E2D)",
          "Spadek HDL, wzrost LDL (umiarkowane)",
          "Przyspieszenie wypadania włosów w alopecji androgenowej (pochodna DHT)"
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
        "Tren-Acetat stack: klasyczny 'cutting stack', wszystkie trzy krótkie estry",
        "PCT (Clomid 50mg/dzień + Nolvadex 20mg/dzień, 4 tygodnie) start ostatnia iniekcja Prop +3-5 dni"
      ]
    },
    {
      "id": "enan",
      "routeId": "enan",
      "routeLabel": {
        "hu": "Drostanolone Enanthate (Masteron-E, lassú észter)",
        "en": "Drostanolone Enanthate (Masteron-E, slow ester)",
        "pl": "Drostanolon Enanthate (Masteron-E, wolny ester)"
      },
      "routeNote": {
        "hu": "Hosszabb felezés (~7-10 nap) ⇒ heti 1-2 IM-injekció elegendő, steady-state 4-5 hét. Sokkal kevésbé fáj mint a Propionát (nincs alkohol-vehikulum). Ugyanaz a parent drostanolone, így a cutting/cosmetic hatás azonos. Hátulütő: 2-3 hónapos detection window ⇒ contest-period <3 hónappal kerülendő. Bulking-cycle Mast-E-stack tipikus 10-12 hét.",
        "en": "Longer half-life (~7-10 days) ⇒ once/twice weekly IM injection sufficient, steady-state 4-5 weeks. Much less painful than Propionate (no alcohol vehicle). Same parent drostanolone, so cutting/cosmetic effects identical. Drawback: 2-3 month detection window ⇒ avoid <3 months before contest period. Bulking-cycle Mast-E stack typically 10-12 weeks.",
        "pl": "Dłuższy okres półtrwania (~7-10 dni) ⇒ iniekcja IM raz/dwa razy w tygodniu wystarcza, stan stacjonarny 4-5 tygodni. Znacznie mniej bolesny niż Propionian (brak wehikułu alkoholu). Ten sam macierzysty drostanolon, więc działanie cięcia/kosmetyczne identyczne. Wada: 2-3-miesięczne okno detekcji ⇒ unikać <3 miesięcy przed okresem zawodów. Cykl bulking ze stackiem Mast-E zazwyczaj 10-12 tygodni."
      },
      "image": "/performance/oil-vial-orange.png",
      "halfLife": "7-10 dni (Enantat ester; wolny drostanolon t½ ~1-2 d po hydrolizie)",
      "halfLifeActive": "1-2 dni (powolna absorpcja depot, plasma stabilizuje się po 1-2 tygodniach)",
      "bioavailability": "~95-100% (iniekcja IM pomija first-pass; enantat ester wolna hydroliza ~7-10 dni)",
      "onsetTime": {
        "hu": "48-72 óra (IM, enantát slow-acting; steady-state 4-5 hét)",
        "en": "48-72 h (IM, enanthate slow-acting; steady-state 4-5 weeks)",
        "pl": "48-72 h (IM, enantat wolno działający; stan stacjonarny 4-5 tygodni)"
      },
      "dosing": {
        "hu": "300-700 mg/hét IM, heti 1-2x. Tipikus cutting dózis 400-500 mg/hét. Minimum 8-10 hét ciklus a steady-state miatt. PCT utolsó injekció +14-21 nap.",
        "en": "300-700 mg/week IM, 1-2× weekly. Typical cutting dose 400-500 mg/week. Minimum 8-10 week cycle due to steady-state. PCT starts last injection +14-21 days.",
        "pl": "300-700 mg/tydzień IM, 1-2× w tygodniu. Typowa dawka cięcia 400-500 mg/tydzień. Minimum 8-10 tygodni cyklu z powodu stanu stacjonarnego. PCT od ostatniej iniekcji +14-21 dni."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 500,
          "high": 700
        },
        "unit": "mg/tydzień",
        "note": {
          "hu": "300-700 mg/hét, heti 1-2x IM (7-10 nap felezés). Minimum 8-10 hét. TUDCA NEM kötelező, DE lipid + vérnyomás monitor. PCT utolsó injekció +14-21 nap.",
          "en": "300-700 mg/week, 1-2× weekly IM (7-10 day half-life). Minimum 8-10 weeks. TUDCA not required, BUT lipid + BP monitor essential. PCT starts last injection +14-21 days.",
          "pl": "300-700 mg/tydzień, 1-2× w tygodniu IM (7-10-dniowy okres półtrwania). Minimum 8-10 tygodni. TUDCA niewymagana, ALE monitor lipidów + ciśnienia konieczny. PCT od ostatniej iniekcji +14-21 dni."
        }
      },
      "defaultVialMg": 2000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 500000,
      "hepatotoxicity": "low",
      "aromatization": "none",
      "androgenicRatio": "62:25",
      "legalStatus": "Nigdy nie licencjonowany jako ludzki Rx — tylko rynek UGL. Wszędzie nielegalny, zakaz WADA.",
      "detectionWindow": "W moczu: 2-3 miesiące (znacznie dłużej niż propionat ze względu na długi ester enantatowy). Akredytowane WADA GC-MS i LC-MS/MS.",
      "quality": {
        "pure": [
          "Klarowny żółtawo-brązowy olej (~#f59e0b ton), fiolka 10 ml, sterylnie filtrowana",
          "Źródło UGL testowane HPLC obowiązkowe — enantat ester znacznie mniej bolesny niż propionat"
        ],
        "caution": [
          "Powolny początek: zmiana estetyczna wyczuwalna dopiero po 4-5 tygodniach (steady-state)",
          "Tygodniowa 1-2× iniekcja wystarcza (pon lub pon+czw)",
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
        "Test-Enantat stack: dopasowanie okresu półtrwania estru, tygodniowy harmonogram iniekcji 1-2×",
        "Tren-Enantat stack: 'long-ester cutting' 10-12 tygodni",
        "PCT (Clomid + Nolvadex 4-6 tygodni) start ostatnia iniekcja Enan +14-21 dni"
      ]
    }
  ],
  "defaultVariant": "prop",
  "anecdote": "Raporty anegdotyczne opisują Masteron jako wywołujący wyraźne efekty diuretyczne, użytkownicy często zauważają znacznie zwiększone oddawanie moczu. Doniesienia społeczności wskazują również na zmniejszone objawy wysokiego E2 nawet przy znacznych dawkach testosteronu, co jest zgodne z jego znaną aktywnością anty-estrogenową na poziomie receptora. Jednak Masteron jest notorycznie znany z przyspieszania androgenowego wypadania włosów; użytkownicy podatni na łysienie typu męskiego często zgłaszają natychmiastowe przerzedzenie linii włosów po rozpoczęciu stosowania. Jest ogólnie postrzegany jako 'kosmetyczny anabolik' — przydatny do twardości, suchości i poprawy sylwetki, a nie do znaczącego przyrostu mięśni. Ogólnie uznawany za solidny anabolik pochodny DHT z wyraźną niszą przy odpowiednim stosowaniu, ale androgenowe kompromisy (zwłaszcza wypadanie włosów) są poważnym rozważaniem dla genetycznie predysponowanych użytkowników."
}
