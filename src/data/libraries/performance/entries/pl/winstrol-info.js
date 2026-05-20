// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.966Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "winstrol-info",
  "name": "Winstrol",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Stanozolol, 17α-alkilowana pochodna DHT. Klasyczny \"cutting\" AAS, supresor SHBG.",
  "description": "Stanozolol (Winstrol) to pochodna DHT, 17α-alkilowany doustny lub iniekcyjny AAS. Mechanizm obniżenia SHBG to bezpośrednie hamowanie wątrobowej syntezy mRNA SHBG (dowody Pugeat 1981), podnosząc frakcję wolnego testosteronu — znaczne wzmocnienie androgenne nawet przy bazie TRT. Nie aromatyzuje. Klinicznie rozwinięty dla wrodzonego obrzęku naczynioruchowego i anemii; w sporcie używany w \"cuttingu\". Skandal Bena Johnsona 1988. **Pozycjonowanie farmakologiczne**: wzmacniacz siły i modulator jakości tkanek bardziej niż konstruktor hipertrofii — przyrost siły jest często nieproporcjonalny do widocznego przyrostu mięśni. **Ostrzeżenie o tkance łącznej (Liow 1995 PMID 7551762)**: przypadki zerwań ścięgien związane ze stanozololem dobrze udokumentowane w literaturze sportowej; siła mięśni rośnie szybciej niż dojrzałość mostków kolagenowych ścięgna, tworząc ryzyko zerwania zwłaszcza w sportach sprinterskich/eksplozywnych.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR + supresor SHBG"
    },
    {
      "label": "Okres półtrwania",
      "value": "9 godz (doustnie)"
    },
    {
      "label": "Stosunek",
      "value": "320:30"
    },
    {
      "label": "Status prawny",
      "value": "USA: FDA Rx. UE: ograniczone"
    }
  ],
  "mechanism": "Agonista AR podobny do DHT. Bezpośrednio HAMUJE wątrobową syntezę mRNA SHBG → wzrost frakcji wolnego testosteronu. Nie aromatyzuje, nie konwertuje do DHT.",
  "legalStatus": "USA: Schedule III. UE: na receptę. WADA: zakazany.",
  "onsetTime": "7-14 days",
  "halfLife": "9 h (oral)",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "warfarin"
  ],
  "aromatization": "Nie — heterocykliczny pierścień pirazolowy A, NIE substrat CYP19; obniżenie SHBG to główny efekt niezależny od estrogenów (Schänzer 1996)",
  "hepatotoxicity": "Wysoka — 17α-alkilowany; obie postacie (doustna i iniekcyjna) hepatotoksyczne, wzrost transaminaz częsty przy cyklach >6 tygodni (Hartgens-Kuipers 2004)",
  "wadaStatus": "banned",
  "androgenicRatio": "320:30",
  "benefits": [
    "Ochrona masy w cyklu redukcyjnym",
    "Redukcja SHBG podnosi wolny T",
    "Wzrost siły dla sprinterów",
    "Wzrost erytrocytów + wydajności aerobowej: efekt erytropoetyczny udokumentowany (przegląd Pope 2014), poprawa wytrzymałości u sportowców sub-elite"
  ],
  "studies": [
    {
      "title": "Effects of stanozolol on physiological measurements in healthy men",
      "authors": "Stergiopoulos K, Brennan JJ, Mathews R et al.",
      "journal": "Med Sci Sports Exerc. 2008;40(4):574-579.",
      "pmid": "18317369"
    },
    {
      "title": "Anabolic steroid abuse and tendon injuries",
      "authors": "Liow RY, Tavares S.",
      "journal": "BJSM. 1995;29(2):77-79.",
      "pmid": "7551762"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs",
      "authors": "Pope HG Jr, Wood RI, Rogol A et al.",
      "journal": "Endocr Rev. 2014;35(3):341-375.",
      "pmid": "24423981"
    }
  ],
  "related": [
    "testosterone-info",
    "trenbolone-info",
    "anavar-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 0.4,
      "medium": 0.7,
      "high": 1
    },
    "unit": "mg/nap",
    "note": "Doustnie 30-80 mg/dzień, iniekcyjnie 50 mg EOD. Wysoka hepatotoksyczność. Maks. 6-8 tygodni. PCT wymagane."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2 tygodnie przed",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Plus lipidogram, panel hormonalny, czynność nerek, CBC.",
      "purpose": "Baseline wątroby krytyczny przy 17α-alkilowanym AAS."
    },
    "midCycle": {
      "label": "W trakcie",
      "timing": "Tydzień 3-4",
      "markers": "ALT, AST, GGT, bilirubina, lipidogram (HDL spadek), E2, ciśnienie.",
      "purpose": "Wykrywanie zmian. ALT/AST >3x = przerwanie."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT tydzień 4 + 8-12",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, recovery wątroby i lipidów.",
      "purpose": "Weryfikacja recovery HPTA + wątroby."
    },
    "cruise": {
      "label": "Podczas Cruise",
      "timing": "Co 6 tygodni",
      "markers": "Wątroba + lipidy + hormony + EKG.",
      "purpose": "Długoterminowy cruise z Winstrolem NIE zalecany z powodu hepatotoksyczności."
    }
  },
  "variants": [
    {
      "routeId": "oral",
      "routeLabel": "Stanozolol doustny (tabletka)",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: zatwierdzony przez FDA Rx tabletka Winstrol (Pfizer Pharmacia/Sanofi-Aventis wycofany 2010); dziś dominacja rynku UGL. HU/EU: Rx ograniczony. Zakaz WADA.",
      "bioavailability": "~85-95% (doustnie, 17α-alkilowany oporny na first-pass)",
      "onsetTime": "1-2 h (doustnie, szybkie wchłanianie)",
      "halfLife": "9 godzin (doustnie)",
      "halfLifeActive": "9 h",
      "detectionWindow": "3-4 tygodnie w moczu (macierzysty + metabolit 3'-OH-stanozolol, akredytowane WADA).",
      "aromatization": "Nie — heterocykliczny pierścień A pirazolowy, NIE substrat CYP19.",
      "hepatotoxicity": "Wysoka — 17α-alkilowany, stres first-pass wątrobowy; wzrost ALT/AST 2-4x częsty przy cyklu 6+ tygodni (Hartgens-Kuipers 2004).",
      "quality": {
        "pure": [
          "Klarowna biała, oznaczona tabletka (5 mg lub 10 mg klasyczny dosing UGL)",
          "Źródło testowane HPLC obowiązkowe — tabletka Winstrol często fałszowana"
        ],
        "caution": [
          "Hepatotoksyczność (wzrost ALT/AST 2-4x po 6+ tygodniach częsty)",
          "Zaburzenia lipidowe: drastyczny spadek HDL (>30% vs baseline)",
          "Suchość stawów (\"Winstrol joint pain\") — subiektywnie męcząca",
          "Ryzyko zerwania ścięgna (Liow 1995 PMID 7551762 raporty w sprinter/explosive sportach)"
        ],
        "avoid": [
          "Jakiekolwiek istniejące zaburzenia wątroby (stłuszczenie wątroby, zapalenie)",
          "Jednoczesne stosowanie alkoholu lub paracetamolu",
          "Sprinter/explosive sportowiec podczas cyklu treningowego (ryzyko zerwania ścięgna)"
        ]
      },
      "interactions": [
        "Inne AAS 17α-alkilowane (Anadrol, Dianabol, Superdrol) razem skrajnie hepatotoksyczne",
        "TUDCA 500 mg/dzień + NAC 1200 mg/dzień obowiązkowe",
        "PCT start ostatnia tabletka +1-2 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 30,
          "medium": 50,
          "high": 80
        },
        "unit": "mg/dzień (doustnie, 1-2x podzielone)",
        "note": "30-80 mg/dzień, maks 8 tygodni cyklu. TUDCA + NAC obowiązkowe. Dawka dla kobiet maks 5-10 mg/dzień. PCT ostatnia tabletka +1-2 dni."
      }
    },
    {
      "routeId": "aq",
      "routeLabel": "Stanozolol zawiesina wodna (IM, Winstrol Depot)",
      "image": "/performance/water-vial.png",
      "legalStatus": "Sanofi Winstrol Depot (zawiesina wodna Stanozolol 50 mg/ml, UE Rx ograniczony). USA: dziś UGL. Zakaz WADA.",
      "bioavailability": "~95-100% (IM, BEZ depot, bezpośrednia absorpcja z mikrokryształów)",
      "onsetTime": "12-24 h (IM, powolne uwalnianie z depot mikrokrystalicznego)",
      "halfLife": "~24 h (macierzysty Stanozolol)",
      "halfLifeActive": "24 h",
      "detectionWindow": "4-6 tygodni w moczu (dłuższe niż doustnie ze względu na absorpcję depot).",
      "aromatization": "Nie — heterocykliczny pierścień A pirazolowy, NIE substrat CYP19 dla żadnej z form.",
      "hepatotoxicity": "Umiarkowana-wysoka — zaskakująco iniekcyjny Winstrol jest również hepatotoksyczny ze względu na grupę 17α-alkilową (NIE spowodowane first-pass, ale systemowym efektem cząsteczki). Klinicznie łagodniejszy niż doustny, ALE NIE zero.",
      "quality": {
        "pure": [
          "Klarowne białe mikrokryształy zawieszone w wodzie, ampułka 1 ml, opalescentny przed wstrząśnięciem",
          "Rx-grade: Sanofi Winstrol Depot 50mg/ml (UE, rzadki)"
        ],
        "caution": [
          "EKSTRA bolesna iniekcja — kryształy fizycznie podrażniają (PIP, częste ryzyko ropnia)",
          "Iniekcja EOD potrzebna (~24 h okres półtrwania)",
          "Hepatotoksyczność umiarkowana (efekt 17α-alkilu obecny systemowo również)",
          "Suchość stawów taka sama jak doustnie"
        ],
        "avoid": [
          "Wrażliwość na ból (kryształy powodują znaczny PIP + ryzyko ropnia)",
          "Brak aseptycznej techniki iniekcji",
          "Jakiekolwiek zaburzenia wątroby (umiarkowana hepatotoksyczność)"
        ]
      },
      "interactions": [
        "Kombinacja z innymi AAS wzmacnia supresję HPTA",
        "TUDCA 500 mg/dzień zalecany (ze względu na umiarkowaną hepatotoksyczność)",
        "PCT start ostatnia iniekcja +5-7 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/EOD (IM)",
        "note": "50-100 mg EOD, maks 8 tygodni. TUDCA zalecany. Aseptyczna technika kluczowa (ryzyko ropnia). PCT ostatnia iniekcja +5-7 dni."
      }
    }
  ],
  "defaultVariant": "oral",
  "anecdote": "Raporty anegdotyczne opisują Winstrol mniej w kategoriach dramatycznego wzrostu, a bardziej jako wytwarzający wyraźny gęsty, napięty, wzmacniający wydajność charakter — ze wzrostami siły, które czasem wydają się nieproporcjonalne do widocznego przyrostu mięśni. Powracającym motywem w doniesieniach społeczności jest to, że Winstrol wywołuje zauważalne zmiany w twardości mięśni, separacji i rekompozycji, co pomogło ugruntować jego długotrwałą reputację w zastosowaniach sylwetkowych. Często opisywany jest jako zachowujący się bardziej jak modulator wydajności siłowej i jakości tkanki niż klasyczny anabolik hipertroficzny, co daje mu odrębną niszę farmakologiczną. Jednocześnie użytkownicy podkreślają, że 'suchy, wyrafinowany' wizerunek może zasłaniać ważne kompromisy — szczególnie surowe efekty lipidowe, stres wątrobowy w formie doustnej, supresję HPTA, problemy z ciśnieniem krwi i częste raporty dolegliwości związanych z tkanką łączną lub stawami. Winstrol jest czasem niedoceniany, ponieważ nie prezentuje się jako dramatyczny lek na masę, podczas gdy w praktyce wywiera silne efekty na wydajność i prezentację tkanek — co w dużej mierze tłumaczy, dlaczego pozostaje jednym z bardziej wyspecjalizowanych i szanowanych związków klasycznych."
}
