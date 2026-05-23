// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.966Z
// Edit this file directly to update the PL body; do not re-run the script.
// v0.27 RICH multi-variant expansion — 2026-05-23

export default {
  "id": "winstrol-info",
  "name": "Winstrol",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Stanozolol, 17α-alkilowana pochodna DHT. Klasyczny \"cutting\" AAS, supresor SHBG.",
  "description": "Stanozolol (Winstrol) to pochodna DHT, 17α-alkilowany doustny lub iniekcyjny AAS. Mechanizm obniżenia SHBG to bezpośrednie hamowanie wątrobowej syntezy mRNA SHBG (Sinnecker & Köhler 1990, PMID 2723028), podnosząc frakcję wolnego testosteronu — znaczne wzmocnienie androgenne nawet przy bazie TRT. Nie aromatyzuje, brak efektów estrogenowych. Klinicznie rozwinięty dla wrodzonego obrzęku naczynioruchowego i anemii; w sporcie używany w \"cuttingu\" do ochrony mięśni. Skandal Bena Johnsona 1988. **Pozycjonowanie farmakologiczne**: wzmacniacz siły i modulator jakości tkanek bardziej niż konstruktor hipertrofii — przyrost siły jest często nieproporcjonalny do widocznego przyrostu mięśni. **Ostrzeżenie o tkance łącznej (Liow 1995 PMID 7551764)**: przypadki zerwań ścięgien związane ze stanozololem dobrze udokumentowane; siła mięśni rośnie szybciej niż dojrzałość mostków kolagenowych ścięgna, tworząc ryzyko zerwania zwłaszcza w sportach sprinterskich/eksplozywnych.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR + supresor SHBG"
    },
    {
      "label": "Okres półtrwania",
      "value": "~9 godz (doustnie), ~24 godz (aq IM)"
    },
    {
      "label": "Stosunek anaboliczny:androgenny",
      "value": "320:30"
    },
    {
      "label": "Aromatyzacja",
      "value": "Brak (pochodna DHT)"
    },
    {
      "label": "Hepatotoksyczność",
      "value": "Umiarkowana-wysoka (17α-alkilowany, obie formy)"
    },
    {
      "label": "Status prawny",
      "value": "USA: FDA Schedule III Rx. UE: Rx ograniczony. WADA: zakazany."
    }
  ],
  "mechanism": "Agonista AR podobny do DHT. Bezpośrednio HAMUJE wątrobową syntezę mRNA SHBG → wzrost frakcji wolnego testosteronu (amplifikacja androgenna). Nie aromatyzuje (pochodna DHT z pierścieniem pirazolowym A), nie konwertuje do DHT.",
  "legalStatus": "USA: FDA Schedule III. UE/HU: na receptę. WADA: zakazany.",
  "onsetTime": "7-14 days",
  "halfLife": "~9 h (oral)",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "warfarin"
  ],
  "aromatization": "none",
  "hepatotoxicity": "moderate-high",
  "androgenicRatio": "320:30",
  "wadaStatus": "banned",
  "benefits": [
    "Ochrona masy mięśniowej w cyklu redukcyjnym przy deficycie kalorycznym",
    "Redukcja SHBG podnosi frakcję wolnego T (amplifikacja androgenna)",
    "Wzrost siły dla sprinterów i atletów",
    "Poprawa twardości mięśni i separacji w fazie rekompozycji",
    "Wzrost erytrocytów + wydajności aerobowej: efekt erytropoetyczny udokumentowany (Pope 2014)"
  ],
  "studies": [
    {
      "title": "Effects of androgenic-anabolic steroids in athletes",
      "authors": "Hartgens F, Kuipers H.",
      "journal": "Sports Med. 2004;34(8):513-54.",
      "pmid": "15248788"
    },
    {
      "title": "Bilateral rupture of the quadriceps tendon associated with anabolic steroids",
      "authors": "Liow RY, Tavares S.",
      "journal": "Br J Sports Med. 1995;29(2):77-79.",
      "pmid": "7551764"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A et al.",
      "journal": "Endocr Rev. 2014;35(3):341-375.",
      "pmid": "24423981"
    },
    {
      "title": "Effects of short-term stanozolol administration on serum lipoproteins in hepatic lipase deficiency",
      "authors": "Bausserman LL, Saritelli AL, Herbert PN.",
      "journal": "Metabolism. 1997;46(9):992-6.",
      "pmid": "9284885"
    }
  ],
  "related": [
    "testosterone-info",
    "trenbolone-info",
    "anavar-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 25,
      "medium": 50,
      "high": 80
    },
    "unit": "mg/dzień",
    "note": "Doustnie 25-80 mg/dzień (w 2 dawkach), aq 50 mg EOD lub 100 mg 3×/tydz IM. Supresja SHBG podnosi wolny T. Hepatotoksyczność umiarkowana-wysoka (17α-alkilowany, obie formy). Maks 6-8 tygodni cyklu. PCT wymagane."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2 tygodnie przed",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Lipidogram, panel hormonalny, czynność nerek, CBC.",
      "purpose": "Baseline wątroby krytyczny przy 17α-alkilowanym AAS."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Tydzień 3-4",
      "markers": "ALT, AST, GGT, bilirubina, lipidogram (HDL spadek oczekiwany), E2, ciśnienie.",
      "purpose": "Wykrywanie zmian. ALT/AST >3x = przerwanie cyklu."
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
      "id": "oral",
      "routeId": "oral",
      "routeLabel": {
        "hu": "Stanozolol orális (tabletta)",
        "en": "Stanozolol oral (tablet)",
        "pl": "Stanozolol doustny (tabletka)"
      },
      "routeNote": {
        "hu": "Kényelmes napi tabletta, ~9 órás felezési idő — 2 részre osztott napi dózis az egyenletes szintekhez. 17α-metil csoport ⇒ hepatotoxikus first-pass stressz. Cutting cycle izom-megtartásra és SHBG-szuppresszióra a legelterjedtebb forma. Ínszakadás-veszélyre fokozottan ügyelj explosive/sprint sportoknál.",
        "en": "Convenient daily tablet with ~9 h half-life — split into 2 daily doses for steady levels. 17α-methyl group ⇒ hepatotoxic first-pass stress. Most common form for cutting cycle muscle sparing and SHBG suppression. Watch for tendon rupture risk in explosive/sprint sports.",
        "pl": "Wygodna tabletka dzienna z ~9 h okresem półtrwania — podziel na 2 dawki dziennie dla stabilnych poziomów. Grupa 17α-metylu ⇒ hepatotoksyczny stres first-pass. Najczęstsza forma do ochrony mięśni w cyklu redukcyjnym i supresji SHBG. Uwaga na ryzyko zerwania ścięgna w sportach eksplozywnych/sprinterskich."
      },
      "image": "/performance/tablet-pile-white.png",
      "halfLife": "~9 godz (doustnie)",
      "bioavailability": "~85-95% (doustnie, 17α-alkilowany, oporny na first-pass)",
      "onsetTime": {
        "hu": "1-2 óra (gyors felszívódás)",
        "en": "1-2 h (fast absorption)",
        "pl": "1-2 h (szybkie wchłanianie)"
      },
      "dosing": {
        "hu": "25-50 mg/nap, 2× osztva (reggel + délután). Tipikus cutting dózis 40-50 mg/nap, max 80 mg/nap. Ciklus max 6-8 hét, TUDCA + NAC kötelező. Női dózis max 5-10 mg/nap.",
        "en": "25-50 mg/day split 2× (morning + afternoon). Typical cutting dose 40-50 mg/day, max 80 mg/day. Cycle max 6-8 weeks, TUDCA + NAC mandatory. Female dose max 5-10 mg/day.",
        "pl": "25-50 mg/dzień w 2 dawkach (rano + popołudnie). Typowa dawka cięcia 40-50 mg/dzień, maks 80 mg/dzień. Cykl maks 6-8 tygodni, TUDCA + NAC obowiązkowe. Dawka dla kobiet maks 5-10 mg/dzień."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 25,
          "medium": 50,
          "high": 80
        },
        "unit": "mg/dzień",
        "note": {
          "hu": "25-80 mg/nap, 2× osztva. TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező. PCT utolsó tabletta +1-2 nap. Max 6-8 hét ciklus.",
          "en": "25-80 mg/day split 2×. TUDCA 500 mg/day + NAC 1200 mg/day mandatory. PCT last tablet +1-2 days. Max 6-8 week cycle.",
          "pl": "25-80 mg/dzień w 2 dawkach. TUDCA 500 mg/dzień + NAC 1200 mg/dzień obowiązkowe. PCT ostatnia tabletka +1-2 dni. Maks 6-8 tygodni."
        }
      },
      "hepatotoxicity": "moderate-high",
      "aromatization": "none",
      "androgenicRatio": "320:30",
      "legalStatus": "USA: zatwierdzony przez FDA Rx tabletka Winstrol (Pfizer Pharmacia/Sanofi-Aventis wycofany 2010); dziś dominacja rynku UGL. HU/EU: Rx ograniczony. Zakaz WADA.",
      "halfLifeActive": "~9 h",
      "detectionWindow": "3-4 tygodnie w moczu (macierzysty + metabolit 3'-OH-stanozolol, akredytowane WADA).",
      "quality": {
        "pure": [
          "Klarowna biała, oznaczona tabletka (5 mg lub 10 mg klasyczny dosing UGL)",
          "Źródło testowane HPLC obowiązkowe — tabletka Winstrol często fałszowana"
        ],
        "caution": [
          "Hepatotoksyczność: wzrost ALT/AST 2-4x częsty przy cyklu 6+ tygodni (Hartgens-Kuipers 2004)",
          "Zaburzenia lipidowe: drastyczny spadek HDL (>30% vs baseline) — ryzyko sercowo-naczyniowe",
          "Ryzyko zerwania ścięgna (Liow 1995): siła mięśni rośnie szybciej niż kolagen ścięgien — unikaj sportów eksplozywnych/sprinterskich",
          "Suchość stawów (\"Winstrol joint pain\") — subiektywnie bardzo uciążliwa, redukcja płynu maziowego"
        ],
        "avoid": [
          "Jakiekolwiek istniejące zaburzenia wątroby (stłuszczenie, zapalenie)",
          "Jednoczesne stosowanie alkoholu, paracetamolu lub innych 17α-alkilowanych AAS",
          "Sprinter/sportowiec eksplozywny podczas cyklu treningowego (podwyższone ryzyko zerwania ścięgna)"
        ]
      },
      "interactions": [
        "Inne AAS 17α-alkilowane (Anadrol, Dianabol, Superdrol) razem skrajnie hepatotoksyczne",
        "TUDCA 500 mg/dzień + NAC 1200 mg/dzień obowiązkowe",
        "PCT start ostatnia tabletka +1-2 dni"
      ]
    },
    {
      "id": "aq",
      "routeId": "aq",
      "routeLabel": {
        "hu": "Stanozolol vizes szuszpenzió (IM, Winstrol Depot)",
        "en": "Stanozolol aqueous suspension (IM, Winstrol Depot)",
        "pl": "Stanozolol zawiesina wodna (IM, Winstrol Depot)"
      },
      "routeNote": {
        "hu": "Vizes szuszpenzió IM (NEM olajbázis!) — a stanozolol vízben szuszpendálható mikrokristályok formájában (innen az 'aq' = aqueous). ~24 h felezési idő depot-felszívódásból. FONTOS: az injekció tipikusan nagyon fájdalmas (a kristályok irritálják az izomszövetet — PIP, ödéma). Hepatotoxicitás EGYENLŐ az orálissal, mert ugyanaz a 17α-metil molekula szisztémásan hat.",
        "en": "Aqueous suspension IM (NOT oil-based!) — stanozolol as water-suspended microcrystals (hence 'aq' = aqueous). ~24 h half-life from depot absorption. IMPORTANT: injection is typically very painful (crystals irritate muscle tissue — PIP, edema). Hepatotoxicity is EQUAL to oral because the same 17α-methyl molecule acts systemically.",
        "pl": "Zawiesina wodna IM (NIE na bazie oleju!) — stanozolol jako mikrokryształy zawieszone w wodzie (stąd 'aq' = aqueous). ~24 h okres półtrwania z absorpcji depot. WAŻNE: iniekcja jest zazwyczaj bardzo bolesna (kryształy drażnią tkankę mięśniową — PIP, obrzęk). Hepatotoksyczność RÓWNA doustnej, bo ta sama cząsteczka 17α-metylu działa systemowo."
      },
      "image": "/performance/water-vial.png",
      "halfLife": "~24 godz (IM depot, mikrokrystaliczny)",
      "bioavailability": "~95-100% (IM, bez depot, bezpośrednia absorpcja z mikrokryształów)",
      "onsetTime": {
        "hu": "12-24 óra (IM, lassú mikrokristályos depot-felszívódás)",
        "en": "12-24 h (IM, slow microcrystalline depot release)",
        "pl": "12-24 h (IM, powolne uwalnianie z depot mikrokrystalicznego)"
      },
      "dosing": {
        "hu": "50 mg EOD (minden második nap) IM, vagy 100 mg 3x/hét IM. Tipikus heti dózis 100-200 mg. Max 8 hét. Aszeptikus injekciós technika kritikus (kristályok = abszcessz-veszély).",
        "en": "50 mg EOD (every other day) IM, or 100 mg 3×/week IM. Typical weekly dose 100-200 mg. Max 8 weeks. Aseptic injection technique critical (crystals = abscess risk).",
        "pl": "50 mg EOD (co drugi dzień) IM, lub 100 mg 3×/tydzień IM. Typowa dawka tygodniowa 100-200 mg. Maks 8 tygodni. Aseptyczna technika iniekcji krytyczna (kryształy = ryzyko ropnia)."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/inj",
        "note": {
          "hu": "50-100 mg/injekció EOD (IM). TUDCA 500 mg/nap ajánlott. Aszeptikus technika kritikus. PCT utolsó injekció +5-7 nap. Max 8 hét.",
          "en": "50-100 mg/injection EOD (IM). TUDCA 500 mg/day recommended. Aseptic technique critical. PCT last injection +5-7 days. Max 8 weeks.",
          "pl": "50-100 mg/iniekcja EOD (IM). TUDCA 500 mg/dzień zalecany. Aseptyczna technika kluczowa. PCT ostatnia iniekcja +5-7 dni. Maks 8 tygodni."
        }
      },
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 50000,
      "hepatotoxicity": "moderate-high",
      "aromatization": "none",
      "androgenicRatio": "320:30",
      "legalStatus": "Sanofi Winstrol Depot (zawiesina wodna Stanozolol 50 mg/ml, UE Rx ograniczony). USA: dziś UGL. Zakaz WADA.",
      "halfLifeActive": "~24 h",
      "detectionWindow": "4-6 tygodni w moczu (dłuższe niż doustnie ze względu na absorpcję depot).",
      "quality": {
        "pure": [
          "Klarowne białe mikrokryształy zawieszone w wodzie, fiolka 10 ml (50 mg/ml), opalescentny przed wstrząśnięciem",
          "Rx-grade: Sanofi Winstrol Depot 50 mg/ml (UE, rzadki); kontrola jakości"
        ],
        "caution": [
          "EKSTRA bolesna iniekcja — kryształy fizycznie drażnią tkankę mięśniową (PIP, obrzęk, ryzyko ropnia)",
          "Hepatotoksyczność RÓWNA doustnej — 17α-metyl działa systemowo, NIE tylko przez first-pass (Hartgens-Kuipers 2004)",
          "Drastyczny spadek HDL (Bausserman 1997): zaburzenia lipidowe porównywalne do formy doustnej",
          "Ryzyko zerwania ścięgna takie samo jak doustnie — kolagen ścięgna pozostaje w tyle za siłą mięśni"
        ],
        "avoid": [
          "Wrażliwość na ból (kryształy powodują znaczny PIP + ryzyko ropnia)",
          "Brak aseptycznej techniki iniekcji",
          "Jakiekolwiek zaburzenia wątroby (umiarkowana-wysoka hepatotoksyczność)"
        ]
      },
      "interactions": [
        "Kombinacja z innymi AAS wzmacnia supresję HPTA",
        "TUDCA 500 mg/dzień zalecany (hepatotoksyczność NIE jest zerowa w formie IM)",
        "PCT start ostatnia iniekcja +5-7 dni"
      ]
    }
  ],
  "defaultVariant": "oral",
  "anecdote": "Raporty anegdotyczne opisują Winstrol mniej w kategoriach dramatycznego wzrostu, a bardziej jako wytwarzający wyraźny gęsty, napięty, wzmacniający wydajność charakter — ze wzrostami siły, które czasem wydają się nieproporcjonalne do widocznego przyrostu mięśni. Powracającym motywem jest to, że Winstrol wywołuje zauważalne zmiany w twardości mięśni, separacji i rekompozycji, co pomogło ugruntować jego reputację w zastosowaniach sylwetkowych. Jednocześnie użytkownicy podkreślają, że 'suchy, wyrafinowany' wizerunek może zasłaniać ważne kompromisy — surowe efekty lipidowe, stres wątrobowy w OBIE formach (doustnej i iniekcyjnej; 17α-metyl działa systemowo niezależnie od drogi podania), supresję HPTA i dolegliwości tkanki łącznej. Winstrol jest czasem niedoceniany bo nie prezentuje się jako dramatyczny lek na masę — w praktyce wywiera jednak silne efekty na wydajność i jakość tkanek."
}
