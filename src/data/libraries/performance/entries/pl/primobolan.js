// Phase C multi-variant entry (oral Acetate + injectable Enanthate). Sources:
// Bayer Primobolan Depot SmPC (DE/ES), Schering AG historical literature
// (Methenolone acetate 1962, Methenolone enanthate Primobolan Depot 1962),
// Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15248788,
// Schänzer 1996 PMID 8674183 (detection).

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
  "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; forma enantatowa iniekcyjna ma minimalny stres wątrobowy. Doustny octan również tylko łagodny, bo grupa 1-metylowa nie jest 17α (tylko 1-metyl zapewnia doustną stabilność), ALE wysoka dawka (50-100 mg/dzień) wymaga monitoringu (Hartgens-Kuipers 2004 PMID 15248788)",
  "wadaStatus": "banned",
  "androgenicRatio": "88:44",
  "bindingAffinity": "Umiarkowane powinowactwo do AR (~28% vs testosteron in vitro). Wysokie powinowactwo do SHBG (strukturalny analog DHT) → pośredni wzrost wolnego T.",
  "detectionWindow": "Metabolity methenolonu (rodzina metabolitów 1-metylo-5α-androstan-3-on) w moczu: doustny octan 4-5 tygodni, iniekcyjny enantat 4-6 miesięcy (Schänzer 1996 PMID 8674183). Akredytowane WADA GC-MS i LC-MS/MS.",
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
      "pmid": "15248788"
    },
    {
      "title": "Metabolism of anabolic androgenic steroids",
      "authors": "Schänzer W.",
      "journal": "Clin Chem. 1996;42(7):1001-20.",
      "pmid": "8674183"
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
      "id": "ac-oral",
      "routeId": "ac-oral",
      "routeLabel": {
        "hu": "Methenolone Acetate (Primobolan-Ac, orális tabletta)",
        "en": "Methenolone Acetate (Primobolan-Ac, oral tablet)",
        "pl": "Methenolon Acetate (Primobolan-Ac, tabletka doustna)"
      },
      "routeNote": {
        "hu": "Klasszikus 'kozmetikai' AAS orális ága — alacsony hepatotoxicitás (NEM 17α-alkilált), nincs aromatizáció (1-metil-DHT). Hátulütő: alacsony orális bioavailability (~6%) miatt magas napi dózis kell (50-100 mg = 5-10 tabletta). A leggyakrabban hamisított AAS-tabletta (Anavar/Winstrol helyettesítés) — HPLC-tesztelés ABSZOLÚT KÖTELEZŐ. Női-barát alacsony dózisban (5-10 mg/nap).",
        "en": "The oral arm of the classic 'cosmetic' AAS — low hepatotoxicity (NOT 17α-alkylated), no aromatization (1-methyl-DHT). Drawback: low oral bioavailability (~6%) requires high daily dose (50-100 mg = 5-10 tablets). The most commonly counterfeited AAS tablet (Anavar/Winstrol substitution) — HPLC testing ABSOLUTELY MANDATORY. Female-friendly at low doses (5-10 mg/day).",
        "pl": "Doustna część klasycznego 'kosmetycznego' AAS — niska hepatotoksyczność (NIE 17α-alkilowany), brak aromatyzacji (1-metyl-DHT). Wada: niska biodostępność doustna (~6%) wymaga wysokiej dawki dziennej (50-100 mg = 5-10 tabletek). Najczęściej podrabiana tabletka AAS (substytut Anavar/Winstrol) — testowanie HPLC ABSOLUTNIE OBOWIĄZKOWE. Przyjazna dla kobiet w niskich dawkach (5-10 mg/dzień)."
      },
      "image": "/performance/tablet-pile-white.png",
      "halfLife": "4-6 h (macierzysty methenolon, brak aktywnego metabolitu)",
      "halfLifeActive": "4-6 h",
      "bioavailability": "~6% (niska — ester octanowy szybko hydrolizowany w żyle wrotnej, następnie metabolizm wątrobowy macierzystego methenolonu; stąd wysokie zapotrzebowanie na dawkę)",
      "onsetTime": {
        "hu": "1-2 h (orális, fast-absorption)",
        "en": "1-2 h (oral, fast-absorption)",
        "pl": "1-2 h (doustnie, szybkie wchłanianie)"
      },
      "dosing": {
        "hu": "50-100 mg/nap, 2-3x osztva (rövid felezés). Tipikus cutting dózis 75 mg/nap, max 100 mg/nap. Ciklus max 8 hét. Női dózis 5-10 mg/nap maximum (virilizációs küszöb).",
        "en": "50-100 mg/day, split 2-3× (short half-life). Typical cutting dose 75 mg/day, max 100 mg/day. Cycle max 8 weeks. Female dose 5-10 mg/day maximum (virilization threshold).",
        "pl": "50-100 mg/dzień, podzielone 2-3× (krótki okres półtrwania). Typowa dawka cięcia 75 mg/dzień, maks 100 mg/dzień. Cykl maks 8 tygodni. Dawka dla kobiet maks 5-10 mg/dzień (próg wirylizacji)."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/dzień",
        "note": {
          "hu": "50-100 mg/nap, 2-3x osztott (rövid felezés). Max 8 hét ciklus. TUDCA 500 mg/nap opcionális (alacsony hepatotoxicitás). Női dózis max 5-10 mg/nap. PCT utolsó tabletta +1-2 nap.",
          "en": "50-100 mg/day, 2-3× split (short half-life). Max 8 week cycle. TUDCA 500 mg/day optional (low hepatotoxicity). Female dose max 5-10 mg/day. PCT starts last tablet +1-2 days.",
          "pl": "50-100 mg/dzień, podzielone 2-3× (krótki okres półtrwania). Cykl maks 8 tygodni. TUDCA 500 mg/dzień opcjonalnie (niska hepatotoksyczność). Dawka dla kobiet maks 5-10 mg/dzień. PCT od ostatniej tabletki +1-2 dni."
        }
      },
      "hepatotoxicity": "low-moderate",
      "aromatization": "none",
      "androgenicRatio": "88:44",
      "legalStatus": "Wycofany Rx wszędzie; dostępny tylko na rynku UGL. UE/HU/PL/USA: nielegalny bez recepty, zakaz WADA.",
      "detectionWindow": "W moczu: 4-5 tygodni (krótsze niż enantat, szybki klirens). Akredytowane WADA GC-MS i LC-MS/MS.",
      "quality": {
        "pure": [
          "Klarowna biała, oznaczona tabletka (25 mg lub 50 mg częsty dosing UGL)",
          "Testowanie HPLC BEZWZGLĘDNIE OBOWIĄZKOWE — Primobolan-Ac to najczęściej fałszowana tabletka AAS (zastępowanie Anavarem/Winstrolem)"
        ],
        "caution": [
          "Wysoka dzienna dawka (50-100 mg/dzień) — często 5-10 tabletek rozłożonych w ciągu dnia",
          "Przyspieszenie wypadania włosów w alopecji androgenowej (pochodna DHT)",
          "Zaburzenia lipidowe: spadek HDL (umiarkowany)",
          "Koszt: dzienny koszt Ac doustnego 5-15 EUR w zależności od jakości UGL — droższy niż wiele innych doustnych AAS"
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
      ]
    },
    {
      "id": "enan-oil",
      "routeId": "enan-oil",
      "routeLabel": {
        "hu": "Methenolone Enanthate (Primobolan Depot, IM olajos)",
        "en": "Methenolone Enanthate (Primobolan Depot, IM oil)",
        "pl": "Methenolon Enanthate (Primobolan Depot, IM olejowy)"
      },
      "routeNote": {
        "hu": "A kozmetikai AAS preferált formája — IM bypass-olja a first-pass-t ⇒ a legalacsonyabb hepatotoxicitású AAS-ek egyike, női-barát low-dose mellett is. ~5-7 napos felezés ⇒ heti 1-2 injekció, steady-state 3-4 hét. Extra hosszú detection window (4-6 hó) — WADA-tesztelt versenyzőnek tilos. Bayer Primobolan Depot ár: feketepiacon 150-250 EUR/ml (extrém drága) — UGL alternatíva gyakori, de hamisítás magas.",
        "en": "The preferred form of the cosmetic AAS — IM bypasses first-pass ⇒ one of the lowest-hepatotoxicity AAS, female-friendly even at low dose. ~5-7 day half-life ⇒ once/twice weekly injection, steady-state 3-4 weeks. Extra-long detection window (4-6 months) — forbidden for WADA-tested athletes. Bayer Primobolan Depot price: 150-250 EUR/ml on the black market (extremely expensive) — UGL alternative common, but counterfeiting is high.",
        "pl": "Preferowana forma kosmetycznego AAS — IM omija first-pass ⇒ jeden z AAS o najniższej hepatotoksyczności, przyjazny dla kobiet nawet w niskich dawkach. ~5-7-dniowy okres półtrwania ⇒ iniekcja raz/dwa razy w tygodniu, stan stacjonarny 3-4 tygodnie. Bardzo długie okno detekcji (4-6 miesięcy) — zakazany dla sportowców testowanych WADA. Cena Bayer Primobolan Depot: 150-250 EUR/ml na czarnym rynku (bardzo drogo) — alternatywa UGL powszechna, ale podróbki są wysokie."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "5-7 dni (Enantat ester; wolny methenolon t½ ~24 h po hydrolizie)",
      "halfLifeActive": "~24 h (depot-driven)",
      "bioavailability": "~95-100% (iniekcja IM pomija first-pass; enantat ester powolna hydroliza ~5-7 dni)",
      "onsetTime": {
        "hu": "48-72 h (IM, enantát slow-acting; steady-state 3-4 hét)",
        "en": "48-72 h (IM, enanthate slow-acting; steady-state 3-4 weeks)",
        "pl": "48-72 h (IM, enantat wolno działający; stan stacjonarny 3-4 tygodnie)"
      },
      "dosing": {
        "hu": "300-700 mg/hét IM, heti 1-2x. Tipikus cutting dózis 400-500 mg/hét. Minimum 10 hét ciklus a steady-state miatt. Női dózis 50-100 mg/hét maximum. PCT utolsó injekció +14-21 nap.",
        "en": "300-700 mg/week IM, 1-2× weekly. Typical cutting dose 400-500 mg/week. Minimum 10 week cycle due to steady-state. Female dose 50-100 mg/week maximum. PCT starts last injection +14-21 days.",
        "pl": "300-700 mg/tydzień IM, 1-2× w tygodniu. Typowa dawka cięcia 400-500 mg/tydzień. Minimum 10 tygodni cyklu z powodu stanu stacjonarnego. Dawka dla kobiet maks 50-100 mg/tydzień. PCT od ostatniej iniekcji +14-21 dni."
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
          "hu": "300-700 mg/hét, heti 1-2x IM. Minimum 10 hét ciklus. TUDCA NEM szükséges (legalacsonyabb hepatotoxicitás). Női dózis max 50-100 mg/hét. PCT utolsó injekció +14-21 nap.",
          "en": "300-700 mg/week, 1-2× weekly IM. Minimum 10 week cycle. TUDCA not required (lowest hepatotoxicity). Female dose max 50-100 mg/week. PCT starts last injection +14-21 days.",
          "pl": "300-700 mg/tydzień, 1-2× w tygodniu IM. Minimum 10 tygodni cyklu. TUDCA niewymagana (najniższa hepatotoksyczność). Dawka dla kobiet maks 50-100 mg/tydzień. PCT od ostatniej iniekcji +14-21 dni."
        }
      },
      "defaultVialMg": 1000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 500000,
      "hepatotoxicity": "very-low",
      "aromatization": "none",
      "androgenicRatio": "88:44",
      "legalStatus": "Bayer Primobolan Depot DE/ES Rx (niedokrwistość, stany kataboliczne wcześniaków). UE/HU/PL: rzadko import-Rx, głównie UGL. Zakaz WADA.",
      "detectionWindow": "W moczu: 4-6 miesięcy (bardzo długie, ester enantatowy + rodzina metabolitów 1-metylowych). Akredytowane WADA GC-MS i LC-MS/MS.",
      "quality": {
        "pure": [
          "Bayer Primobolan Depot 100 mg/ml, ampułka 1 ml — autentyczne źródło z holograficznym oznaczeniem",
          "Alternatywa UGL: klarowny żółtawo-złoty olej, fiolka 10 ml, testowane HPLC źródło obowiązkowe"
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
        "Tren-Enan stack: 'long-ester cutting' 10-12 tygodni",
        "PCT (Clomid + Nolvadex 4-6 tygodni) start ostatnia iniekcja Enan +14-21 dni"
      ]
    }
  ],
  "defaultVariant": "enan-oil",
  "anecdote": "Primobolan jest anegdotycznie opisywany jako doskonały drugorzędny anabolik dla większości cykli, często łączony z wysokimi dawkami testosteronu dla synergii, ponieważ sam Primobolan nie aromatyzuje znacząco i może pomóc moderować obciążenie estrogenowe. Jest szerzej znany jako 'kosmetyczny' steryd, użytkownicy opisują suchy, twardy, estetyczny wygląd zamiast dramatycznych przyrostów masy. Doniesienia społeczności wskazują, że jest bardzo dobrze tolerowany, ma stosunkowo łagodny profil działań niepożądanych i działa zarówno w fazach masowych, jak i redukcyjnych. Główne wady to wysoka cena i powolne działanie, zwykle występując w postaci estru Enanthate. Ogólnie Primobolan jest uznawany za solidny element dobrze zaprojektowanego cyklu, ale generalnie nie jest wybierany jako samodzielny budulec masy."
}
