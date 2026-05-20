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
      "value": "Agonista AR, 17α-alkilowany"
    },
    {
      "label": "Okres półtrwania",
      "value": "3-6 godzin"
    },
    {
      "label": "Stosunek",
      "value": "210:60"
    },
    {
      "label": "Status prawny",
      "value": "USA: Schedule III."
    }
  ],
  "mechanism": "17α-alkilowany agonista AR. Aromataza konwertuje do E2 ORAZ do 17α-metyloestradiolu (ten ostatni niezwykle potentny, oporny na anastrozol metabolit → wysokie ryzyko ginekomastii nawet na AI). 5α-reduktaza minimalnie tworzy metabolit podobny do DHT. Wewnątrzkomórkowa synteza glikogenu plus volumizacja jako pośrednie sygnały anaboliczne (aktywacja mTOR).",
  "legalStatus": "USA: Schedule III. UE: nielegalny. WADA: zakazany.",
  "onsetTime": "3-7 days",
  "halfLife": "3-6 h",
  "interactionsWith": [
    "aromatase inhibitors",
    "alcohol",
    "NSAIDs"
  ],
  "aromatization": "Tak — umiarkowane-wysokie powinowactwo do CYP19; \"wet gains\" (retencja wody, ginekomastia) częste, inhibitor aromatazy konieczny w długich cyklach (Schänzer 1996)",
  "hepatotoxicity": "Wysoka — 17α-alkilowany, zależny od dawki wzrost ALT/AST; cholestatyczne zapalenie wątroby i peliosis hepatis rzadkie ciężkie przypadki (Hartgens-Kuipers 2004)",
  "wadaStatus": "banned",
  "androgenicRatio": "210:60",
  "benefits": [
    "Szybki przyrost + retencja",
    "Wzrost siły w \"kickstart\"",
    "Podniesienie nastroju (dopaminergiczne + estrogenowe): częste doniesienia w fazie \"kickstart\", euforia + wzrost motywacji treningowej"
  ],
  "studies": [
    {
      "title": "Methandrostenolone effects on body composition and strength",
      "authors": "Hervey GR, Knibbs AV, Burkinshaw L et al.",
      "journal": "Clin Sci. 1981;60(4):457-461.",
      "pmid": "6263593"
    },
    {
      "title": "Cholestatic hepatitis associated with methandrostenolone",
      "authors": "Søe KL, Søe M, Gluud C.",
      "journal": "Pharmacol Toxicol. 1992;70(4):293-294.",
      "pmid": "1502619"
    },
    {
      "title": "Anabolic steroid cardiovascular toxicity",
      "authors": "Baggish AL, Weiner RB, Kanayama G et al.",
      "journal": "Circulation. 2017;135(21):1991-2002.",
      "pmid": "28533317"
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
    "unit": "mg/nap",
    "note": "\"Kickstart\" 4-6 tygodni. 2-3 dawki dziennie. Inhibitor aromatazy często wymagany. TUDCA 500-750 mg/dzień."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2 tygodnie przed",
      "markers": "Priorytet wątrobowy + reszta.",
      "purpose": "Baseline wątroby krytyczny."
    },
    "midCycle": {
      "label": "W trakcie",
      "timing": "Tydzień 2-3",
      "markers": "ALT, AST, GGT, bilirubina, lipidogram, E2, ciśnienie.",
      "purpose": "ALT/AST >3x = przerwanie. Wzrost E2 = AI."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT tydzień 4 + 8-12",
      "markers": "Total T, LH, FSH, E2, recovery wątroby i lipidów.",
      "purpose": "Weryfikacja recovery."
    },
    "cruise": null
  },
  "variants": [
    {
      "routeId": "oral",
      "routeLabel": "Methandrostenolone doustny (tabletka)",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: FDA Rx (Ciba 1958, wycofany 1983); Schedule III. UE: dominacja rynku UGL, nielegalny bez recepty. Zakaz WADA.",
      "bioavailability": "~80% (doustnie, 17α-metyl oporny na first-pass)",
      "onsetTime": "1-2 h (doustnie, szybkie wchłanianie)",
      "halfLife": "5 godzin (doustnie, związek macierzysty)",
      "halfLifeActive": "5 h",
      "detectionWindow": "3-6 tygodni w moczu (macierzysty + długoterminowe metabolity Schänzer 2006 6β-OH-metandienon).",
      "aromatization": "Tak — substrat CYP19, klinicznie silna konwersja E2 (Pope-Kanayama 2014).",
      "hepatotoxicity": "Wysoka — stres first-pass wątrobowy 17α-metyl, wzrost ALT/AST 3-5x częsty przy cyklu 4+ tygodni.",
      "quality": {
        "pure": [
          "Klarowna biała oznaczona tabletka (5 mg lub 10 mg klasyczny dosing UGL)",
          "Oryginalna tabletka Ciba Dianabol (1958-1983, dziś kolekcjonerska)"
        ],
        "caution": [
          "Hepatotoksyczność (wzrost ALT/AST 3-5x)",
          "Retencja wody + ryzyko ginekomastii (silna aromatyzacja)",
          "Wzrost ciśnienia krwi (retencja wody + AKI nerek)",
          "Zaburzenia lipidowe dramatyczne: HDL do 50% spadek"
        ],
        "avoid": [
          "Jakiekolwiek istniejące zaburzenia wątroby bezwzględne przeciwwskazanie",
          "Jednoczesny alkohol, NSAID, paracetamol ściśle zakazane",
          "Więcej niż 6 tygodni ciągłego cyklu",
          "Stosowanie przez kobiety (wirylizacja)"
        ]
      },
      "interactions": [
        "Anastrozol 0,5 mg EOD lub E3D: kontrola E2 obowiązkowa",
        "Nolvadex (SERM) 20 mg/dzień w gotowości na zapobieganie ginekomastii",
        "TUDCA 1000 mg/dzień + NAC 1800 mg/dzień obowiązkowe",
        "PCT (Clomid + Nolvadex 4 tygodnie) ostatnia tabletka +1-2 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 20,
          "medium": 30,
          "high": 50
        },
        "unit": "mg/dzień (doustnie, 2-3x podzielone)",
        "note": "Maks 6 tygodni cyklu. 20-50 mg/dzień, 2-3x podzielone (5h okres półtrwania). TUDCA + NAC obowiązkowe. PCT 4 tygodnie."
      }
    },
    {
      "routeId": "oil",
      "routeLabel": "Methandrostenolone w oleju (IM, UGL)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Nie licencjonowany format — wyłącznie underground UGL. Wszędzie nielegalny. Zakaz WADA.",
      "bioavailability": "~95-100% (IM pomija first-pass; methandrostenolone zawieszony w oleju z powolną absorpcją depot)",
      "onsetTime": "12-24 h (IM, kinetyka depot)",
      "halfLife": "1-2 dni (zawiesina w oleju; nieestryfikowany methandrostenolone)",
      "halfLifeActive": "1-2 dni",
      "detectionWindow": "4-6 tygodni w moczu (dłuższe niż doustnie ze względu na absorpcję depot).",
      "aromatization": "Tak — strukturalnie taki sam jak doustnie; poziom aromatyzacji identyczny.",
      "hepatotoxicity": "Umiarkowana — nie zero ze względu na grupę 17α-metylową, ale unikanie first-pass redukuje peak hepatic koncentracji. Profil podobny do Superdrol iniekcyjny (Pope-Kanayama 2014 ekstrapolowane dane klasy c17-AA iniekcyjnych).",
      "quality": {
        "pure": [
          "Klarowny żółtawy olej, fiolka 10 ml, sterylnie filtrowana, 50-75 mg/ml koncentracja UGL",
          "Źródło UGL testowane HPLC OBOWIĄZKOWE"
        ],
        "caution": [
          "PIP (ból w miejscu wstrzyknięcia) częsty, methandrostenolone-w-oleju notorycznie bolesny",
          "Zaburzenia lipidowe dramatyczne: spadek HDL taki sam jak doustnie",
          "Retencja wody + ryzyko ginekomastii (aromatyzacja niezmieniona)",
          "Hepatotoksyczność zredukowana ALE nie zero"
        ],
        "avoid": [
          "Silna wrażliwość w miejscu wstrzyknięcia",
          "Jakiekolwiek zaburzenia wątroby (umiarkowana hepatotoksyczność)",
          "Brak aseptycznej techniki iniekcji (ryzyko ropnia)",
          "Więcej niż 8 tygodni cyklu"
        ]
      },
      "interactions": [
        "Anastrozol 0,5 mg E3D: kontrola E2",
        "TUDCA 500 mg/dzień zalecany (ze względu na umiarkowaną hepatotoksyczność)",
        "PCT start ostatnia iniekcja +5-7 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 100,
          "high": 150
        },
        "unit": "mg/tydzień (IM, podzielone 2-3x)",
        "note": "Maks 8 tygodni cyklu. 50-150 mg/tydzień, 2-3x podzielone (krótki okres półtrwania mimo depot). TUDCA zalecany. PCT 4 tygodnie ostatnia iniekcja +5-7 dni."
      }
    }
  ],
  "defaultVariant": "oral",
  "anecdote": "Dianabol ma niemal legendarny status w tradycji AAS. Użytkownicy często zgłaszają bardzo szybką zmianę w pełności, dźwigni, regeneracji i wynikach na siłowni w zaskakująco krótkich ramach czasowych. Cechą charakterystyczną jest to, jak 'anabolicznie' się go odczuwa — dość oczywiście, nie subtelnie. Siła zazwyczaj szybko rośnie wraz z dramatycznymi efektami pompy i wolumizacji. Wiele z tego, co potocznie nazywa się 'wodą', to faktycznie wewnątrzmięśniowy glikogen i nawodnienie komórek, co nie jest równoważne bezsensownemu wzdęciu i samo może przyczyniać się do sygnalizacji anabolicznej. Doniesienia społeczności wskazują na nieproporcjonalny wpływ Dianabolu na rozpęd treningowy — bardziej produktywne sesje, szybsza regeneracja i wynikający z tego skumulowany wzrost. Apetyt również często rośnie. Kompromisy są znaczące: zauważalne efekty estrogenowe (ginekomastia, retencja wody), podwyższone ciśnienie krwi, zaburzenia lipidowe i obciążenie wątroby 17α-alkilowane. Niektóre relacje i pojawiające się dowody sugerują, że Dianabol metabolizuje się do niezwykle silnego metabolitu estrogenowego, co warto mieć na uwadze przy planowaniu wsparcia AI/SERM."
}
