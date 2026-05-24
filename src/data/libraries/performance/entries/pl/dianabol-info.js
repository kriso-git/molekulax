// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.966Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "dianabol-info",
  "name": "Dianabol",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Methandrostenolone, 17α-alkilowany doustny AAS. Klasyczny \"kickstart\" bulking z wysoką hepatotoksycznością.",
  "description": "Dianabol to pierwszy masowo sprzedawany doustny AAS, zsyntetyzowany przez Zieglera w 1955 r. dla amerykańskich ciężarowców. Doustny 17α-alkilowany, szybki retencyjny przyrost masy. **Rewizja mitu \"mokrych zysków\"**: większość przyrostu masy na Dianabolu to nie obrzęk podskórny, ale WEWNĄTRZMIĘŚNIOWE magazynowanie glikogenu plus volumizacja komórki (hydratacja wewnątrzkomórkowa). Pęcznienie komórki samo w sobie to sygnał anaboliczny (hipoteza Häussingera: wzrost objętości komórki aktywuje mTOR i syntezę białek). \"Kickstart\" 4-6 tygodni z dłuższymi AAS iniekcyjnymi. Aromatyzuje — ALE Dianabol tworzy też niezwykle potentny **metabolit 17α-metyloestradiolu oporny na anastrozol**, więc ryzyko ginekomastii pozostaje wysokie nawet na AI, a klasyczna tytracja AI (anastrozol 0,5 mg EOD) jest mniej skuteczna niż na Testosteronie. Wysoka hepatotoksyczność.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR, 17α-alkilowany, aromatyzuje"
    },
    {
      "label": "Okres półtrwania",
      "value": "3-6 godzin (doustnie) / 1-2 doby (olej)"
    },
    {
      "label": "Stosunek anaboliczny:androgenny",
      "value": "40-60:90-210 (testosteron=100:100)"
    },
    {
      "label": "Status prawny",
      "value": "USA: Schedule III. UE: ograniczony Rx. WADA: zakazany."
    }
  ],
  "mechanism": "17α-alkilowany agonista AR. Aromataza konwertuje do E2 ORAZ do 17α-metyloestradiolu (ten ostatni niezwykle potentny, oporny na anastrozol metabolit → wysokie ryzyko ginekomastii nawet na AI). 5α-reduktaza minimalnie tworzy metabolit podobny do DHT. Wewnątrzkomórkowa synteza glikogenu plus volumizacja jako pośrednie sygnały anaboliczne (aktywacja mTOR).",
  "legalStatus": "USA: Schedule III. UE: nielegalny bez recepty. WADA: zakazany.",
  "onsetTime": "3-7 dni",
  "halfLife": "3-6 h (doustnie)",
  "androgenicRatio": "40-60:90-210",
  "interactionsWith": [
    "aromatase inhibitors",
    "alcohol",
    "NSAIDs"
  ],
  "aromatization": "high",
  "hepatotoxicity": "high",
  "wadaStatus": "banned",
  "benefits": [
    "Szybki przyrost masy + retencja wody (3-5 kg / 4 tygodnie)",
    "Wzrost siły w fazie \"kickstart\"",
    "Poprawa nastroju (dopaminergiczne + estrogenowe): częste doniesienia w fazie \"kickstart\", euforia i wzrost motywacji treningowej"
  ],
  "studies": [
    {
      "title": "Effects of methandienone on the performance and body composition of men undergoing athletic training",
      "authors": "Hervey GR, Knibbs AV, Burkinshaw L et al.",
      "journal": "Clin Sci (Lond). 1981;60(4):457-461.",
      "pmid": "7018798"
    },
    {
      "title": "Distinct phenotype of hepatotoxicity associated with illicit use of anabolic androgenic steroids",
      "authors": "Robles-Diaz M, Gonzalez-Jimenez A, Medina-Caliz I et al.",
      "journal": "Aliment Pharmacol Ther. 2015;41(1):116-125.",
      "pmid": "25394890"
    },
    {
      "title": "Anabolic steroid cardiovascular toxicity",
      "authors": "Baggish AL, Weiner RB, Kanayama G et al.",
      "journal": "Circulation. 2017;135(21):1991-2002.",
      "pmid": "28533317"
    },
    {
      "title": "Effects of androgenic-anabolic steroids in athletes",
      "authors": "Hartgens F, Kuipers H.",
      "journal": "Sports Med. 2004;34(8):513-554.",
      "pmid": "15248788"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-375.",
      "pmid": "24423981"
    }
  ],
  "related": [
    "testosterone-info",
    "anavar-info",
    "trenbolone-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 20,
      "medium": 30,
      "high": 50
    },
    "unit": "mg/dzień",
    "note": "\"Kickstart\" 4-6 tygodni z dłuższymi AAS iniekcyjnymi. 2-3 dawki dziennie ze względu na krótki okres półtrwania (3-6 h). Inhibitor aromatazy (anastrozol 0,5 mg EOD) często wymagany. TUDCA 500-750 mg/dzień ochrona wątroby."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2 tygodnie przed",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, bilirubina, INR. Plus: lipidy, panel hormonalny, E2, nerki.",
      "purpose": "Baseline wątroby krytyczny. Podwyższone ALT/AST = przeciwwskazanie."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Tydzień 2-3",
      "markers": "ALT, AST, GGT, bilirubina, lipidogram (drastyczny spadek HDL), E2, ciśnienie krwi.",
      "purpose": "ALT/AST >3x = przerwanie cyklu. Wzrost E2 = AI (anastrozol 0,5 mg EOD)."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT tydzień 4 + 8-12",
      "markers": "Total T, Free T, LH, FSH, E2, recovery wątroby i lipidów.",
      "purpose": "Weryfikacja recovery HPTA i wątroby."
    },
    "cruise": null
  },
  "defaultVariant": "oral",
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": "Methandrostenolone doustny (tabletka)",
      "routeNote": "Klasyczny format: tabletka 17α-metylowa z ~3-6 h okresem półtrwania, szybki szczyt osoczowy w ciągu 1-2 godzin. Zalecane dawkowanie podzielone 2-3x dziennie dla utrzymania stabilnych poziomów. Wysoki stres first-pass wątroby — TUDCA + NAC obowiązkowe. Najszerzej zbadana i stosowana forma Dianabolu.",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: FDA Rx (Ciba 1958, wycofany 1983); Schedule III. UE: dominacja rynku UGL, nielegalny bez recepty. Zakaz WADA.",
      "bioavailability": "~80% (doustnie, 17α-metyl oporny na first-pass)",
      "onsetTime": "1-2 h (doustnie, szybkie wchłanianie)",
      "halfLife": "3-6 h (doustnie, związek macierzysty)",
      "halfLifeActive": "5 h",
      "detectionWindow": "3-6 tygodni w moczu (macierzysty + długoterminowe metabolity 6β-OH-metandienon).",
      "aromatization": "high",
      "hepatotoxicity": "high",
      "dosing": "Typowa dawka 20-50 mg/dzień, podzielona 2-3x dziennie (rano, w południe, opcjonalnie przed treningiem). Początkujący: 20-25 mg/dzień. Zaawansowani: 30-40 mg/dzień. Maksymalnie 50 mg/dzień; cykle powyżej 6 tygodni niezalecane.",
      "quality": {
        "pure": [
          "Klarowna biała oznaczona tabletka (5 mg lub 10 mg klasyczny dosing UGL)",
          "Oryginalna tabletka Ciba Dianabol (1958-1983, dziś kolekcjonerska)"
        ],
        "caution": [
          "Hepatotoksyczność (wzrost ALT/AST 3-5x)",
          "Retencja wody + ryzyko ginekomastii (silna aromatyzacja)",
          "Wzrost ciśnienia krwi (retencja wody + AKI nerek)",
          "Zaburzenia lipidowe dramatyczne: HDL do 50% spadku"
        ],
        "avoid": [
          "Jakiekolwiek istniejące zaburzenia wątroby — bezwzględne przeciwwskazanie",
          "Jednoczesny alkohol, NSAID, paracetamol — ściśle zakazane",
          "Więcej niż 6 tygodni ciągłego cyklu",
          "Stosowanie przez kobiety (wirylizacja)"
        ]
      },
      "interactions": [
        "Anastrozol 0,5 mg EOD lub E3D: kontrola E2 obowiązkowa",
        "Nolvadex (SERM) 20 mg/dzień w gotowości na zapobieganie ginekomastii",
        "TUDCA 1000 mg/dzień + NAC 1800 mg/dzień obowiązkowe",
        "PCT (Clomid + Nolvadex 4 tygodnie) po ostatniej tabletce +1-2 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 20,
          "medium": 30,
          "high": 50
        },
        "unit": "mg/dzień (doustnie, 2-3x podzielone)",
        "note": "Maks 6 tygodni cyklu. 20-50 mg/dzień, 2-3x podzielone (3-6h okres półtrwania). TUDCA + NAC obowiązkowe. PCT 4 tygodnie."
      }
    },
    {
      "id": "oil",
      "routeId": "oil",
      "routeLabel": "Methandrostenolone w oleju (IM, UGL)",
      "routeNote": "Rzadki, alternatywny format (zawiesina typu \"Reforvit-B\"). Omija wątrobowy metabolizm first-pass → nieco niższa, ale NIE zerowa hepatotoksyczność (grupa 17α-metylowa powoduje hepatotoksyczność wewnętrzną nawet bez first-pass). Bardziej stabilne poziomy osoczowe przy dawkowaniu EOD. Notorycznie bolesna iniekcja; wyłącznie źródło UGL.",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Format nielicencjonowany — wyłącznie underground UGL. Wszędzie nielegalny. Zakaz WADA.",
      "bioavailability": "~95-100% (IM pomija first-pass; methandrostenolone zawieszony w oleju z powolną absorpcją depot)",
      "onsetTime": "12-24 h (IM, kinetyka depot)",
      "halfLife": "1-2 doby (zawiesina w oleju; nieestryfikowany methandrostenolone)",
      "halfLifeActive": "1-2 doby",
      "detectionWindow": "4-6 tygodni w moczu (dłuższe niż doustnie ze względu na absorpcję depot).",
      "aromatization": "high",
      "hepatotoxicity": "moderate-high",
      "dosing": "Typowa dawka 50 mg EOD (co drugi dzień) z fiolki 10 ml 50 mg/ml. Niektórzy użytkownicy stosują 75-100 mg EOD. Maksymalnie 8 tygodni cyklu. Wymagana ścisła aseptyczna technika iniekcji.",
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 50000,
      "quality": {
        "pure": [
          "Klarowny żółtawy olej, fiolka 10 ml, sterylnie filtrowana, 50 mg/ml koncentracja UGL",
          "Źródło UGL testowane HPLC — OBOWIĄZKOWE"
        ],
        "caution": [
          "PIP (ból w miejscu wstrzyknięcia) częsty, methandrostenolone-w-oleju notorycznie bolesny",
          "Zaburzenia lipidowe dramatyczne: spadek HDL taki sam jak doustnie",
          "Retencja wody + ryzyko ginekomastii (aromatyzacja niezmieniona)",
          "Hepatotoksyczność zredukowana ALE nie zerowa — TUDCA obowiązkowe"
        ],
        "avoid": [
          "Silna wrażliwość w miejscu wstrzyknięcia",
          "Jakiekolwiek zaburzenia wątroby (umiarkowana-wysoka hepatotoksyczność)",
          "Brak aseptycznej techniki iniekcji (ryzyko ropnia)",
          "Więcej niż 8 tygodni cyklu"
        ]
      },
      "interactions": [
        "Anastrozol 0,5 mg E3D: kontrola E2",
        "TUDCA 500-750 mg/dzień obowiązkowe (umiarkowana-wysoka hepatotoksyczność)",
        "PCT start ostatnia iniekcja +5-7 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/inj (EOD, IM)",
        "note": "Maks 8 tygodni cyklu. 50-100 mg/inj EOD. TUDCA 500-750 mg/dzień obowiązkowe. PCT 4 tygodnie, ostatnia iniekcja +5-7 dni."
      }
    }
  ],
  "anecdote": "Dianabol ma niemal legendarny status w tradycji AAS. Użytkownicy często zgłaszają bardzo szybką zmianę w pełności, dźwigni, regeneracji i wynikach na siłowni w zaskakująco krótkich ramach czasowych. Cechą charakterystyczną jest to, jak 'anabolicznie' się go odczuwa — dość oczywiście, nie subtelnie. Siła zazwyczaj szybko rośnie wraz z dramatycznymi efektami pompy i wolumizacji. Wiele z tego, co potocznie nazywa się 'wodą', to faktycznie wewnątrzmięśniowy glikogen i nawodnienie komórek, co nie jest równoważne bezsensownemu wzdęciu i samo może przyczyniać się do sygnalizacji anabolicznej. Doniesienia społeczności wskazują na nieproporcjonalny wpływ Dianabolu na rozpęd treningowy — bardziej produktywne sesje, szybsza regeneracja i wynikający z tego skumulowany wzrost. Apetyt również często rośnie. Kompromisy są znaczące: zauważalne efekty estrogenowe (ginekomastia, retencja wody), podwyższone ciśnienie krwi, zaburzenia lipidowe i obciążenie wątroby 17α-alkilowane. Niektóre relacje i pojawiające się dowody sugerują, że Dianabol metabolizuje się do niezwykle silnego metabolitu estrogenowego, co warto mieć na uwadze przy planowaniu wsparcia AI/SERM."
}
