// Phase C multi-variant entry (oral Acetate + injectable Enanthate). Sources:
// Bayer Primobolan Depot SmPC (DE/ES), Schering AG historical literature
// (Methenolone acetate 1962, Methenolone enanthate Primobolan Depot 1962),
// Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599,
// Schänzer 1996 PMID 8616181 (detection).

export default {
  "id": "primobolan",
  "name": "Primobolan (Methenolone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Methenolone, \"łagodny\" AAS pochodny 1-metylo-DHT w dwóch formach estrowych: doustny octan (krótki, niska biodostępność) i iniekcyjny enantat (Bayer Primobolan Depot, Rx w Niemczech + Hiszpanii). Klasyczny steryd na cięcie.",
  "description": "Primobolan (Methenolone) to pochodna 1-metylo-dihydrotestosteronu zsyntetyzowana przez Schering AG w 1962 r. Dwie sprzedawane formy: ester octanowy (Primobolan, tabletka doustna, pierwotnie 5 mg) i ester enantatowy (Primobolan Depot, IM olej 100 mg/ml). Pierwotne zatwierdzenie FDA (1962) dotyczyło niedokrwistości, osteoporozy i powrotu po ciężkich chorobach wyniszczających; wycofany z rynku USA do 1965 r., ale Bayer nadal produkuje Primobolan Depot jako Rx w Niemczech i Hiszpanii (niedokrwistość, stany kataboliczne wcześniaków). Stosunek anaboliczno-androgenny 88:44, wskazujący na umiarkowany anaboliczny i niski profil androgenny. NIE 17α-alkilowany, więc hepatotoksyczność minimalna. NIE aromatyzuje. Powinowactwo do AR niskie (~28% vs testosteron in vitro), ALE w tkance mięśniowej pośrednio podnosi wolny T poprzez supresję SHBG. Doustny octan ma biodostępność tylko ~6% (szybki metabolizm wątrobowy estru 17β-OH-octanu), więc skrajnie wysokie dawki (50-100 mg/dzień) są potrzebne do dorównania efektowi iniekcyjnego enantatu 100 mg/tydzień. Zakazany przez WADA cały rok.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR, 1-metylo-DHT, NIE aromatyzuje"
    },
    {
      "label": "Anaboliczny:Androgenny",
      "value": "88:44"
    },
    {
      "label": "Okres półtrwania",
      "value": "4-6 h (Ac doustny), 5-7 d (Enan IM)"
    },
    {
      "label": "Początek",
      "value": "1-2 h (Ac doustny), 48-72 h (Enan IM)"
    },
    {
      "label": "Status prawny",
      "value": "Bayer Primobolan Depot DE/ES Rx, USA: wycofany"
    }
  ],
  "mechanism": "Agonista AR 1-metylo-dihydrotestosteron. Grupa 1-metylowa — szczególnie w pozycji Δ1 — blokuje oksydacyjny rozkład 17β-HSD i jest wyraźnie oporna na metabolizm wątrobowy. Ester octanowy 17β-OH (forma doustna) szybko hydrolizuje w żyle wrotnej do wolnego methenolonu, który jest następnie szybko metabolizowany przez wątrobę (niska biodostępność ~6%). Ester enantatowy (forma Depot) jest magazynowany jako depot poprzez iniekcję IM, powolna hydroliza daje stabilne poziomy w osoczu. NIE 17α-alkilowany → minimalny stres wątrobowy. NIE substrat CYP19 → NIE aromatyzuje do estrogenu.",
  "legalStatus": "USA: wycofany po 1965 (FDA), Schedule III kontrolowany. DE/ES: Bayer Primobolan Depot Rx (niedokrwistość, stany kataboliczne wcześniaków). HU/PL: nielegalny bez recepty, kontrolowany AAS. Zakazany przez WADA cały rok (S1.1.a).",
  "onsetTime": "1-2 h (Ac doustny), 48-72 h (Enan IM)",
  "halfLife": "4-6 h (Ac doustny), 5-7 d (Enan IM)",
  "halfLifeActive": "~4-6 h wolny methenolon (po Ac), zależny od depot ~24 h (po Enan)",
  "interactionsWith": [
    "testosterone",
    "anastrozole",
    "finasteride",
    "warfarin"
  ],
  "aromatization": "Nie — struktura 1-metylo-DHT, NIE substrat CYP19 dla żadnego estru; klinicznie nie oczekiwany wzrost E2 (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; forma enantatowa iniekcyjna ma minimalny stres wątrobowy. Doustny octan również tylko łagodny, bo grupa 1-metylowa nie jest 17α (tylko 1-metyl zapewnia doustną stabilność), ALE wysoka dawka (50-100 mg/dzień) wymaga monitoringu (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "88:44",
  "bindingAffinity": "Umiarkowane powinowactwo do AR (~28% vs testosteron in vitro). Wysokie powinowactwo do SHBG (strukturalny analog DHT) → pośredni wzrost wolnego T.",
  "detectionWindow": "Metabolity methenolonu (rodzina metabolitów 1-metylo-5α-androstan-3-on) w moczu: doustny octan 4-5 tygodni, iniekcyjny enantat 4-6 miesięcy (Schänzer 1996 PMID 8616181). Akredytowane WADA GC-MS i LC-MS/MS.",
  "benefits": [
    "Naczyniowy, twardy estetyczny wygląd (niska retencja wody)",
    "NIE aromatyzuje → brak efektów ubocznych E2",
    "Niska hepatotoksyczność (szczególnie forma enantatowa)",
    "Pośredni wzrost wolnego T poprzez zajęcie SHBG",
    "Pierwotne wskazanie medyczne: niedokrwistość, stany kataboliczne wcześniaków (Bayer)"
  ],
  "quickStart": [
    "Realistyczne oczekiwania: Primobolan to ŁAGODNY AAS, nie oczekuj wyników Dianabol-podobnych 10 kg/4 tygodnie",
    "Dawka Ac doustnego jest WYSOKA (50-100 mg/dzień) ze względu na niską biodostępność — źródło wysokiej jakości kluczowe",
    "Strukturalny analog DHT → ŚCISŁE ryzyko wypadania włosów przy genetycznej predyspozycji",
    "Lipidogram (HDL/LDL) baseline + 4 tygodnie + post-cycle OBOWIĄZKOWY",
    "PCT (Clomid + Nolvadex 4 tygodnie) potrzebne u mężczyzn ze względu na supresję HPTA"
  ],
  "expectations": [
    {
      "label": "Pierwszy tydzień",
      "body": "Doustny Ac początek 1-2 h, iniekcyjny Enan 48-72 h. Ostra zmiana estetyczna nie oczekiwana, plasma steady-state Ac 2-3 dni, Enan 3-4 tygodnie."
    },
    {
      "label": "Tydzień 4-6",
      "body": "Subiektywnie \"twardszy\" tonus mięśniowy, naczyniowość. SHBG spada, przyrost masy mięśniowej 1-2 kg (NIE ekstremalne — Primobolan to łagodny AAS)."
    },
    {
      "label": "Koniec tygodnia 10-12",
      "body": "Maksymalny efekt estetycznego \"hardening\". HDL ~15-25% spadek oczekiwany. Zachowanie masy podczas cięcia (minimalna utrata mięśni mimo deficytu kalorycznego)."
    }
  ],
  "quality": {
    "pure": [
      "Bayer Primobolan Depot oryginalny Rx (DE/ES, 100 mg/ml, ampułka 1 ml) — autentyczne źródło enantatu",
      "Tabletka octanu UGL: źródło testowane HPLC obowiązkowe, często fałszowane (zastępowanie Anavarem lub Winstrolem)"
    ],
    "caution": [
      "Wysoka dzienna dawka Ac doustnego (50-100 mg/dzień) — kosztowna i krytyczna jakościowo",
      "Przyspieszenie wypadania włosów w alopecji androgenowej (strukturalny analog DHT)",
      "Zaburzenia lipidowe: spadek HDL (umiarkowany)",
      "Pogłębienie głosu i hirsutyzm u kobiet (ryzyko wirylizacji utrzymuje się nawet przy niższych dawkach)"
    ],
    "avoid": [
      "Rodzinna historia alopecji androgenowej",
      "Przerost prostaty, rak prostaty (analog DHT)",
      "Stosowanie przez kobiety przy wyższych dawkach (>10 mg/dzień doustny Ac, >50 mg/tydzień Enan)",
      "Ryzyko sercowo-naczyniowe (rodzinna historia, wysokie LDL)",
      "Cel bulking/przyrost masy — Primobolan to steryd cięciowy i kondycyjny, NIE budujący masę"
    ]
  },
  "interactions": [
    "Stack z bazą testosteronu: standardowy, wzmacnia syntezę białek mięśniowych; dopasowanie okresu półtrwania estru zalecane (Test-Prop+Primo-Ac lub Test-Enan+Primo-Enan)",
    "Anastrozol (AI): NIE potrzebny dla cyklu tylko-Primo (brak aromatyzacji); podczas Test-stacku tylko jeśli laboratoryjnie potwierdzone wysokie E2",
    "Finasteryd: NIE hamuje efektu Primobolanu (już 5α-zredukowany), NIE chroni przed DHT skóry głowy — bezużyteczny",
    "Warfaryna: efekt antykoagulacyjny może być wzmocniony, monitoring INR"
  ],
  "studies": [
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
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
      "title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline",
      "authors": "Bhasin S, Brito JP, Cunningham GR et al.",
      "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.",
      "pmid": "29562364"
    }
  ],
  "faq": [
    {
      "q": "Dlaczego Primobolan jest tak drogi?",
      "a": "Dwa powody: (1) surowiec (methenolon) jest drogi do syntezy, niewiele laboratoriów UGL potrafi go wyprodukować czysto; (2) fałszerstwo jest skrajnie częste — wiele Primo z UGL to w rzeczywistości Anavar lub Winstrol. Bayer Primobolan Depot oryginalny DE/ES Rx cena czarnorynkowa ~150-250 EUR/ml. Doustny Ac jest jeszcze droższy, ponieważ dzienny koszt jest wysoki ze względu na wymóg 50-100 mg/dzień."
    },
    {
      "q": "Czy to naprawdę \"łagodny\" AAS, jak mówią?",
      "a": "Tak, wśród klasycznych AAS jeden z najłagodniejszych pod względem hepatotoksyczności i profilu sercowo-naczyniowego. ALE ze względu na łagodność NIE oczekuj spektakularnych przyrostów masy mięśniowej — Primobolan to środek na cięcie i kondycję, NIE bulker. Pope-Kanayama 2014 podkreśla: rozdźwięk między oczekiwaniami a rzeczywistością użytkowników jest głównym źródłem frustracji."
    },
    {
      "q": "Dlaczego biodostępność doustnego octanu jest tak niska?",
      "a": "Ester octanowy (17β-OH-octan) SZYBKO hydrolizuje w żyle wrotnej do wolnego methenolonu, który jest następnie szybko metabolizowany przez wątrobę (NIE 17α-alkilowany, więc brak ochrony first-pass). Stąd biodostępność doustnego Primobolanu wynosi tylko ~6% — w porównaniu z np. 30-40% Anavaru ze względu na ochronę first-pass 17α-alkilowaną."
    },
    {
      "q": "Dlaczego kobiety również używają Primobolanu?",
      "a": "Niski potencjał androgenny (44% vs testosteron) oznacza, że ryzyko wirylizacji należy do najniższych wśród AAS (Anavar i Primobolan to klasyczna \"przyjazna kobietom\" para AAS). ALE wirylizacja NIE wynosi zero — przy wyższych dawkach (>10 mg/dzień doustnie lub >50 mg/tydzień Enan) udokumentowano pogłębienie głosu i hirsutyzm. Jakikolwiek objaw wirylizacji = natychmiastowe przerwanie cyklu."
    },
    {
      "q": "Czy to prawda, że Arnold Schwarzenegger go używał?",
      "a": "Tak, Arnold Schwarzenegger przyznał w kilku wywiadach, że podczas zawodów kulturystycznych lat 1970-80 (Mr. Olympia) używał Primobolanu i Dianabolu, wtedy jeszcze legalnie dostępnych jako leki Rx. Ta tradycja uczyniła Primobolan \"klasycznym sterydem pro-kulturystycznym\" w kulturze."
    }
  ],
  "related": [
    "masteron",
    "anavar-info",
    "testosterone-info",
    "winstrol-info",
    "trenbolone-info"
  ],
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Panel hormonów: Total T, Free T, E2, LH, FSH, SHBG, Prolaktyna. Lipidogram (LDL/HDL/TG). Wątrobowe: ALT/AST/GGT/ALP. CBC + hematokryt. Funkcja nerek. PSA (powyżej 30 lat).",
      "purpose": "Baseline lipidogramu i SHBG kluczowy. Primobolan NIE aromatyzuje, więc monitor E2 baseline ze względu na partnera stacku Test."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Tydzień 4-6, połowa cyklu",
      "markers": "Lipidogram (umiarkowany spadek HDL), E2 (jeśli z Test), SHBG, panel wątrobowy (szczególnie z Ac doustnym), dziennik ciśnienia.",
      "purpose": "HDL <35 mg/dL alarm sercowo-naczyniowy. ALT/AST <2x norma górna oczekiwana dla cyklu tylko-Primo (czasami wyższa z doustnym). E2 oparte na partnerze Test."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Od ostatniej dawki: doustny Ac +1-2 dni, IM Enan +14-21 dni start PCT. PCT tydzień 4 i 8-12 kontrole recovery.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, lipidogram (HDL recovery), panel wątrobowy.",
      "purpose": "Weryfikacja recovery HPTA. Recovery SHBG zazwyczaj w 4-6 tygodni. PCT dla cyklu tylko-Primo jest łagodniejsze niż dla zawierającego Test (mniejsza supresja HPTA)."
    },
    "cruise": {
      "label": "Na cruise (cruise z Primobolanem NIE standardowy)",
      "timing": "Cruise z Primo atypowy; jeśli na cruise, monitoring co 6-8 tygodni",
      "markers": "Lipidogram, SHBG, Total T, E2, dziennik ciśnienia, PSA.",
      "purpose": "Przedłużona ekspozycja Primobolanu akumuluje zaburzenia lipidowe, buduje aktywację AR prostaty. Na cruise TRT-Test Primobolan zazwyczaj pomijany (efekt estetyczny tylko wartościowy podczas contest-prep)."
    }
  },
  "variants": [
    {
      "routeId": "ac-oral",
      "routeLabel": "Methenolone Octan (tabletka doustna)",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "Wycofany Rx wszędzie; dostępny tylko na rynku UGL. UE/HU/PL/USA: nielegalny bez recepty, zakaz WADA.",
      "bioavailability": "~6% (niska — ester octanowy szybko hydrolizowany w żyle wrotnej, następnie metabolizm wątrobowy macierzystego methenolonu; stąd wysokie zapotrzebowanie na dawkę)",
      "onsetTime": "1-2 h (doustnie, szybkie wchłanianie)",
      "halfLife": "4-6 h (macierzysty methenolon, brak aktywnego metabolitu)",
      "halfLifeActive": "4-6 h",
      "detectionWindow": "4-5 tygodni w moczu (krótsze niż enantat, szybki klirens). Akredytowane WADA GC-MS i LC-MS/MS.",
      "aromatization": "Nie — struktura 1-metylo-DHT, NIE substrat CYP19; klinicznie nie oczekiwany wzrost E2.",
      "hepatotoxicity": "Niska-umiarkowana — NIE 17α-alkilowany, ale wysokie zapotrzebowanie na dawkę (50-100 mg/dzień) powoduje łagodny wzrost ALT/AST; klinicznie znacznie łagodniejszy niż Anavar czy Dianabol.",
      "quality": {
        "pure": [
          "Klarowna biała, oznaczona tabletka (25 mg lub 50 mg częsty dosing UGL)",
          "Testowanie HPLC BEZWZGLĘDNIE OBOWIĄZKOWE — Primobolan-Ac to najczęściej fałszowana tabletka AAS (zastępowanie Anavarem/Winstrolem)"
        ],
        "caution": [
          "Wysoka dzienna dawka (50-100 mg/dzień) — często 5-10 tabletek rozłożonych w ciągu dnia",
          "Przyspieszenie wypadania włosów w alopecji androgenowej",
          "Zaburzenia lipidowe: spadek HDL (umiarkowany)",
          "Koszt: dzienny koszt Ac doustnego 5-15 EUR w zależności od jakości UGL"
        ],
        "avoid": [
          "Jakiekolwiek istniejące podwyższenie ALT/AST (forma doustna ze względu na wysokie zapotrzebowanie na dawkę)",
          "Jednoczesne stosowanie alkoholu lub paracetamolu",
          "Wysokie ryzyko fałszerstwa — jeśli brak źródła testowanego HPLC, NIE stosować",
          "Stosowanie przez kobiety >10 mg/dzień (ryzyko wirylizacji)"
        ]
      },
      "interactions": [
        "Test-Prop stack: dopasowanie okresu półtrwania estru, iniekcja EOD Test + dzienny Primo-Ac",
        "Anavar stack: połączona kombinacja doustna 17α-alkilowana + 1-metylo, stres wątrobowy rośnie",
        "PCT (Clomid + Nolvadex 4 tygodnie) start ostatnia tabletka +1-2 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/dzień (doustnie, 2-3x podzielone)",
        "note": "Maksimum 8 tygodni cyklu. 50-100 mg/dzień, 2-3x podzielone dawki (krótki okres półtrwania). TUDCA 500 mg/dzień opcjonalny (niska hepatotoksyczność, ale bezpieczne ze względu na wysoką dawkę). Dawka dla kobiet maks. 5-10 mg/dzień. PCT 4 tygodnie ostatnia tabletka +1-2 dni."
      }
    },
    {
      "routeId": "enan-oil",
      "routeLabel": "Methenolone Enantat (IM Depot)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Bayer Primobolan Depot DE/ES Rx (niedokrwistość, stany kataboliczne wcześniaków). UE/HU/PL: rzadko import-Rx, głównie UGL. Zakaz WADA.",
      "bioavailability": "~95-100% (iniekcja IM pomija first-pass; enantat ester powolna hydroliza ~5-7 d)",
      "onsetTime": "48-72 h (IM, enantat slow-acting; steady-state 3-4 tygodnie)",
      "halfLife": "5-7 d (Enantat ester; wolny methenolon t½ ~24 h po hydrolizie)",
      "halfLifeActive": "~24 h (depot-driven)",
      "detectionWindow": "4-6 miesięcy w moczu (bardzo długie, ester enantatowy + rodzina metabolitów 1-metylowych). Akredytowane WADA GC-MS i LC-MS/MS.",
      "aromatization": "Nie — struktura 1-metylo-DHT, NIE substrat CYP19.",
      "hepatotoxicity": "Bardzo niska — steryd macierzysty, NIE 17α-alkilowany, forma IM pomija first-pass. Wśród najbezpieczniejszych profili wątrobowych AAS.",
      "quality": {
        "pure": [
          "Bayer Primobolan Depot 100 mg/ml, ampułka 1 ml — autentyczne źródło z holograficznym oznaczeniem",
          "Alternatywa UGL: klarowny żółtawo-złoty olej, fiolka 10 ml, testowany HPLC"
        ],
        "caution": [
          "Cena Bayer Depot: ~150-250 EUR/ml czarny rynek (skrajnie drogi)",
          "Fałszerstwo UGL: często zastępowanie Test-Enan lub Nandrolon-Decanoate",
          "Zaburzenia lipidowe: spadek HDL (umiarkowany, bardziej kumulatywny niż Ac doustny ze względu na dłuższą ekspozycję)",
          "Bardzo długie okno detekcji: zawody testowane WADA <6 miesięcy po planowanym końcu zabronione"
        ],
        "avoid": [
          "Krótki cykl (4-6 tygodni) NIE skuteczny — Enan steady-state dopiero po 3-4 tygodniach",
          "Więcej niż 12-14 tygodni ciągłego cyklu (ciężka supresja HPTA)",
          "Sportowiec testowany WADA przez cały off-season (okno detekcji 6 miesięcy)",
          "Ryzyko sercowo-naczyniowe, stosowanie przez kobiety (>50 mg/tydzień wirylizacja)"
        ]
      },
      "interactions": [
        "Test-Enan stack: dopasowanie okresu półtrwania estru, tygodniowa 1-2x iniekcja",
        "Tren-Enan stack: \"long-ester cutting\" 10-12 tygodni",
        "PCT (Clomid + Nolvadex 4-6 tygodni) start ostatnia iniekcja Enan +14-21 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 500,
          "high": 700
        },
        "unit": "mg/tydzień (IM, podzielone 1-2x)",
        "note": "Minimum 10 tygodni cyklu ze względu na steady-state. 300-700 mg/tydzień, tygodniowo 1-2x iniekcja. TUDCA / NAC NIE potrzebne (najniższy AAS hepatotoksyczności). Dawka dla kobiet maks. 50-100 mg/tydzień. PCT 4-6 tygodni od ostatniej iniekcji +14-21 dni."
      }
    }
  ],
  "defaultVariant": "enan-oil",
  "anecdote": "Primobolan jest anegdotycznie opisywany jako doskonały drugorzędny anabolik dla większości cykli, często łączony z wysokimi dawkami testosteronu dla synergii, ponieważ sam Primobolan nie aromatyzuje znacząco i może pomóc moderować obciążenie estrogenowe. Jest szerzej znany jako 'kosmetyczny' steryd, użytkownicy opisują suchy, twardy, estetyczny wygląd zamiast dramatycznych przyrostów masy. Doniesienia społeczności wskazują, że jest bardzo dobrze tolerowany, ma stosunkowo łagodny profil działań niepożądanych i działa zarówno w fazach masowych, jak i redukcyjnych. Główne wady to wysoka cena i powolne działanie, zwykle występując w postaci estru Enanthate. Ogólnie Primobolan jest uznawany za solidny element dobrze zaprojektowanego cyklu, ale generalnie nie jest wybierany jako samodzielny budulec masy."
}
