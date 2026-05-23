// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.959Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "testosterone-info",
  "name": "Testosterone",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Endogenny męski hormon płciowy i molekuła referencyjna wszystkich AAS. Zatwierdzony przez FDA TRT (terapia zastępcza testosteronem) dla hipogonadyzmu.",
  "description": "Testosteron to pierwotny steryd androgenny ludzkiego organizmu, wytwarzany przez komórki Leydiga w jądrach pod wpływem LH. Stosunek anaboliczno-androgenny 100:100, punkt odniesienia dla wszystkich syntetycznych AAS. Zatwierdzone wskazanie FDA: hipogonadyzm pierwotny i wtórny (Testosteron Cypionate, Enanthate, Undecanoate, żele transdermalne). W kontekście sportowym zakazany przez WADA, ale długoterminowe użycie medyczne w TRT jest coraz szerzej udokumentowane. Badanie TRAVERSE (Lincoff 2023, NEJM) potwierdziło bezpieczeństwo sercowo-naczyniowe transdermalnego TRT u mężczyzn z hipogonadyzmem i podwyższonym ryzykiem CV, co stanowi przełomową rewizję wcześniejszego ostrzeżenia FDA z 2014 r.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR, aromatyzuje do E2"
    },
    {
      "label": "Anaboliczny:Androgenny",
      "value": "100:100"
    },
    {
      "label": "Okres półtrwania",
      "value": "8 dni (Cyp), 10,5 dni (Ena)"
    },
    {
      "label": "Początek",
      "value": "24-72 h (ester iniekcyjny)"
    },
    {
      "label": "Status prawny",
      "value": "Rx FDA TRT, zakazany przez WADA"
    }
  ],
  "mechanism": "Bezpośredni agonista receptora androgenowego (AR); konwertowany do estradiolu (E2) przez aromatazę i do DHT przez 5α-reduktazę.",
  "legalStatus": "UE: na receptę (Nebido, Sustanon). PL: Rx dla TRT. USA: zatwierdzony przez FDA, Schedule III (DEA). Zakazany przez WADA przez cały rok.",
  "onsetTime": "24-72 h (injected ester)",
  "halfLife": "8 d (Cypionate), 10.5 d (Enanthate)",
  "halfLifeActive": "~24 h free testosterone after ester hydrolysis",
  "interactionsWith": [
    "anastrozole",
    "hcg",
    "finasteride",
    "warfarin"
  ],
  "aromatization": "Tak — CYP19 (aromataza) → estradiol; zależnie od dawki, hamowane inhibitorem aromatazy (anastrozol) (Bhasin 1996 NEJM)",
  "hepatotoxicity": "Niska — sterydy macierzysty, NIE 17α-alkilowany; postać iniekcyjna omija first-pass wątrobowy (Pope-Kanayama 2014)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:100",
  "bindingAffinity": "Powinowactwo do AR referencyjne 100% (wszystkie inne AAS mierzone względem tego).",
  "detectionWindow": "Ester iniekcyjny: 3-4 miesiące w moczu. Stosunek T/E (IRMS izotop węgla) do 6 miesięcy.",
  "benefits": [
    "Udokumentowany wzrost masy mięśniowej i siły (Bhasin 1996 NEJM)",
    "Zwiększona gęstość kości i liczba erytrocytów",
    "Przywrócenie libido i funkcji erekcyjnej u mężczyzn z hipogonadyzmem",
    "Poprawa nastroju, energii i funkcji poznawczych przy niskim T",
    "Poprawa wrażliwości na insulinę i kompozycji ciała"
  ],
  "quickStart": [
    "Najpierw badania krwi. Bez baseline nie ma świadomego użycia",
    "Inhibitor aromatazy (Anastrozole) w gotowości, tylko jeśli E2 rośnie",
    "HCG 250-500 IU 2x w tygodniu, by zapobiec atrofii jąder przy dłuższych cyklach",
    "Ciśnienie krwi w domu codziennie, hematokryt co 6 tygodni",
    "Plan PCT GOTOWY przed startem cyklu (protokół Clomid/Nolvadex)"
  ],
  "expectations": [
    {
      "label": "Pierwsza dawka",
      "body": "Dla estru iniekcyjnego efekt ostry minimalny, hydroliza estru trwa 24-72 h. Subiektywne odczucie rzadkie w pierwszym tygodniu."
    },
    {
      "label": "4 tygodnie",
      "body": "Stan stacjonarny osiągnięty. Zauważalny wzrost siły, libido, nastroju. Monitoring E2 obowiązkowy."
    },
    {
      "label": "8 tygodni",
      "body": "Przyrost masy mięśniowej 3-6 kg udokumentowany (Bhasin 1996). Lipidogram i hematokryt do monitorowania."
    }
  ],
  "quality": {
    "pure": [
      "Fiolka UGL/Rx: olejowa, czysta, bez osadu",
      "Weryfikacja etykiety holograficznej (Bayer Nebido, Pfizer Depo-Testosterone)"
    ],
    "caution": [
      "E2 za wysokie: ginekomastia, retencja wody, wahania nastroju",
      "Hematokryt >54%: ryzyko zakrzepicy, konieczna flebotomia",
      "Spadek HDL, wzrost LDL zwiększa ryzyko sercowo-naczyniowe"
    ],
    "avoid": [
      "Rak prostaty lub piersi (przeciwwskazane)",
      "Ciężka niewydolność serca, nieleczony bezdech senny",
      "W okresie planowanego ojcostwa (supresja spermatogenezy)",
      "Czerwienica (hematokryt >54%) — ryzyko zakrzepicy, udaru, MI",
      "Nieleczone nadciśnienie, choroba wieńcowa, ciężka niewydolność serca (NYHA III-IV)",
      "Ciąża i karmienie piersią (wirylizacja i ryzyko teratogenne dla rozwoju płodu żeńskiego)"
    ]
  },
  "interactions": [
    "Anastrozol (AI): kontrola E2, tylko gdy badania potwierdzą wysokie E2",
    "HCG: utrzymanie objętości jąder i intratestykularnego T",
    "Finasteryd: inhibitor 5α-reduktazy, obniża DHT (ryzyko utraty włosów)",
    "Warfaryna: efekt antykoagulacyjny może się nasilić, ścisłe monitorowanie INR",
    "Insulina/doustny przeciwcukrzycowy: może być potrzebna redukcja dawki"
  ],
  "studies": [
    {
      "title": "The effects of supraphysiologic doses of testosterone on muscle size and strength in normal men",
      "authors": "Bhasin S, Storer TW, Berman N et al.",
      "journal": "N Engl J Med. 1996;335(1):1-7.",
      "pmid": "8637535"
    },
    {
      "title": "Testosterone dose-response relationships in healthy young men",
      "authors": "Bhasin S, Woodhouse L, Casaburi R et al.",
      "journal": "Am J Physiol Endocrinol Metab. 2001;281(6):E1172-81.",
      "pmid": "11701431"
    },
    {
      "title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline",
      "authors": "Bhasin S, Brito JP, Cunningham GR et al.",
      "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.",
      "pmid": "29562364"
    },
    {
      "title": "Anabolic-androgenic steroid dependence: an emerging disorder",
      "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.",
      "journal": "Addiction. 2009;104(12):1966-78.",
      "pmid": "19922565"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Effects of testosterone treatment in older men (Testosterone Trials)",
      "authors": "Snyder PJ, Bhasin S, Cunningham GR et al.",
      "journal": "N Engl J Med. 2016;374(7):611-624.",
      "pmid": "26886521"
    },
    {
      "title": "Cardiovascular safety of testosterone-replacement therapy (TRAVERSE)",
      "authors": "Lincoff AM, Bhasin S, Flevaris P et al.",
      "journal": "N Engl J Med. 2023;389(2):107-117.",
      "pmid": "37326322"
    }
  ],
  "faq": [
    {
      "q": "Jaka jest różnica między TRT a blastem?",
      "a": "TRT: protokół medyczny utrzymujący fizjologiczny baseline T (500-1000 ng/dL), zwykle 100-200 mg/tydzień. Blast: dawka suprafizjologiczna (300-600+ mg/tydzień) dla budowy mięśni, bez wskazania medycznego."
    },
    {
      "q": "Czy potrzebny jest inhibitor aromatazy przy TRT?",
      "a": "Nie automatycznie. AI tylko gdy badania potwierdzą wysokie E2 plus objawy (ginekomastia, zaburzenia nastroju). Ślepe użycie AI obniża E2 poniżej poziomu potrzebnego dla funkcji poznawczej i kostnej."
    },
    {
      "q": "Czy naturalna produkcja T może wrócić po cyklu?",
      "a": "Zwykle tak, w 3-12 miesięcy z protokołem PCT (Clomid/Nolvadex). Rahnema 2014: po długich cyklach odzyskiwanie HPTA może być opóźnione, u kilku procent może rozwinąć się trwała supresja."
    },
    {
      "q": "Czy TRT jest niebezpieczne długoterminowo?",
      "a": "Przy odpowiednim monitorowaniu (lipidy, hematokryt, PSA, E2) bilans korzyść-ryzyko jest korzystny u mężczyzn z hipogonadyzmem. W długoterminowych kohortach TRT ryzyko sercowo-naczyniowe nie przekraczało kontroli (Bhasin 2018)."
    },
    {
      "q": "Co pokazało badanie TRAVERSE w sprawie TRT?",
      "a": "Badanie Lincoff 2023 NEJM TRAVERSE randomizowane, kontrolowane placebo, śledziło 5246 mężczyzn z hipogonadyzmem (wiek 45-80, podwyższone ryzyko CV, mediana follow-up 22 miesięcy). Transdermalny żel testosteronowy NIE zwiększał ryzyka MACE vs placebo (HR 0,96). To przełomowa rewizja wcześniejszego ostrzeżenia FDA z 2014 r.; przy odpowiednim monitoringu TRT jest bezpieczne sercowo-naczyniowo u mężczyzn z hipogonadyzmem."
    }
  ],
  "related": [
    "trenbolone-info",
    "anavar-info",
    "winstrol-info",
    "nandrolone-info",
    "dianabol-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 1.5,
      "medium": 3,
      "high": 5
    },
    "unit": "mg/hét",
    "note": "TRT (przepisana przez lekarza) zwykle 100-200 mg/tydzień, blisko zakresu Niska. Cykle AAS w sporcie 300-500+ mg/tydzień, wyłącznie pod nadzorem lekarza. Dawkę tygodniową dzieli się zwykle na 2x EOD lub 1x tygodniowo."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem",
      "markers": "Pełna morfologia (CBC) z hematokrytem, lipidogram (LDL/HDL/TG), próby wątrobowe (ALT/AST/GGT), panel hormonalny (Total T, Free T, E2, LH, FSH, SHBG, Prolaktyna), HbA1c, czynność nerek (Kreatynina, eGFR), PSA (powyżej 30 lat).",
      "purpose": "Pomiar bazowy. Bez zdrowego baseline zmiany w trakcie cyklu są nieinterpretowalne."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "4-6 tygodni po starcie",
      "markers": "Lipidogram (HDL może drastycznie spaść na AAS), próby wątrobowe (ALT/AST), E2 (aktywność aromatazy), hematokryt, ciśnienie krwi (w domu, codziennie).",
      "purpose": "Wykrywanie nagłych zmian. Poważne odchylenie wymaga przerwania cyklu."
    },
    "postCycle": {
      "label": "Po cyklu (PCT)",
      "timing": "Tydzień 4 PCT oraz tydzień 8-12 sprawdzenie powrotu HPTA",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, lipidogram (powrót HDL), próby wątrobowe (regeneracja).",
      "purpose": "Weryfikacja powrotu HPTA. Jeśli T nie wraca do baseline w tygodniu 12, konsultacja endokrynologiczna."
    },
    "cruise": {
      "label": "Podczas Cruise",
      "timing": "Ciągłe monitorowanie co 6 tygodni",
      "markers": "Total T, E2, lipidogram, hematokryt (>54% flebotomia), HbA1c, PSA (powyżej 30 lat), dziennik ciśnienia.",
      "purpose": "Podczas długotrwałej stabilnej supresji markery sercowo-naczyniowe i hormonalne muszą być stale monitorowane, ze szczególną uwagą na hematokryt i PSA."
    }
  },
  "variants": [
    {
      "routeId": "prop",
      "routeLabel": "Testosteron Propionat (IM, szybki)",
      "routeNote": "Szybki ester (~19h okres półtrwania), wymagany harmonogram EOD; szybkie przejście do PCT (ostatnia iniekcja +3-5 dni).",
      "dosing": "300–700 mg/tydzień IM, podzielone 3× EOD (pon/śr/pt). Standardowa dawka kulturystyczna powyżej zakresu TRT.",
      "androgenicRatio": "100:100",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Rx (Testosteron Propionat, rzadziej produkowany niż Cyp/Enan, Rx w niektórych krajach UE). Zakaz WADA.",
      "bioavailability": "~95-100% (IM)",
      "onsetTime": "24-48 h (IM, fast-acting propionat)",
      "halfLife": "~19 h (ester propionat; krótszy niż Enan/Cyp)",
      "halfLifeActive": "~19 h",
      "detectionWindow": "2-3 tygodnie w moczu (krótsze niż Enan/Cyp).",
      "aromatization": "Tak — macierzysty steroid Test, substrat CYP19; wszystkie estry Test mają ten sam wskaźnik aromatyzacji.",
      "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; IM pomija first-pass.",
      "quality": {
        "pure": [
          "Klarowny jasnożółty lub wodno-klarowny olej, fiolka 10 ml, sterylnie filtrowana",
          "Rx-grade: Bayer Testoviron-Depot Prop (DE), Schering Testovis (IT)"
        ],
        "caution": [
          "Ból w miejscu wstrzyknięcia (PIP): propionat w pojeździe alkoholowym często bolesny",
          "Wymaga 3x tygodniowo EOD iniekcji ze względu na krótki okres półtrwania"
        ],
        "avoid": [
          "Silna wrażliwość w miejscu wstrzyknięcia (alternatywa: Enan/Cyp tygodniowo 1-2x)",
          "Nieregularny harmonogram (iniekcja EOD jest wrażliwa na harmonogram)"
        ]
      },
      "interactions": [
        "Anastrozol: tylko jeśli laboratoryjnie potwierdzone wysokie E2",
        "PCT (Clomid + Nolvadex 4 tygodnie) start ostatnia iniekcja +3-5 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 500,
          "high": 700
        },
        "unit": "mg/tydzień (IM, podzielone 3x EOD)",
        "note": "300-700 mg/tydzień, 3x EOD podzielone (pon/śr/pt). PCT ostatnia iniekcja +3-5 dni."
      }
    },
    {
      "routeId": "enan",
      "routeLabel": "Testosteron Enantat (IM, wolny)",
      "routeNote": "Średni ester (10,5 dnia), wystarczy 1-2× tygodniowo; steady-state po 4-5 tygodniach. Standard UE dla TRT i cykli masowych.",
      "dosing": "250–750 mg/tydzień IM, podzielone 1-2× tygodniowo (pon lub pon+czw). Cykle krótsze niż 4-6 tygodni NIE są efektywne.",
      "androgenicRatio": "100:100",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Bayer Testoviron-Depot 250 mg/ml Enan (DE/UE szeroko Rx). Zakaz WADA.",
      "bioavailability": "~95-100% (IM)",
      "onsetTime": "48-72 h (IM, steady-state 4-5 tygodni)",
      "halfLife": "10,5 dnia (ester enantatowy)",
      "halfLifeActive": "~24 h wolny T (po hydrolizie estru)",
      "detectionWindow": "3-4 miesiące w moczu (długi ester).",
      "aromatization": "Tak — ten sam wskaźnik dla wszystkich estrów Test.",
      "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany.",
      "quality": {
        "pure": [
          "Klarowny żółtawo-brązowy olej (~#f59e0b ton), fiolka 10 ml",
          "Rx-grade: Bayer Testoviron-Depot (DE), Aspen Sustanon alternatywa"
        ],
        "caution": [
          "Powolny początek: efekt wyczuwalny po 2-4 tygodniach",
          "Tygodniowa 1-2x iniekcja (pon lub pon+czw)"
        ],
        "avoid": [
          "Krótki cykl (4-6 tygodni) NIE skuteczny — steady-state dopiero po 4-5 tygodniach",
          "Zawody testowane WADA <4 miesiące po planowanym końcu"
        ]
      },
      "interactions": [
        "Anastrozol 0,5 mg E3D dose titration dla wysokiego E2",
        "PCT start ostatnia iniekcja Enan +14-21 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 250,
          "medium": 500,
          "high": 750
        },
        "unit": "mg/tydzień (IM, podzielone 1-2x)",
        "note": "250-750 mg/tydzień, tygodniowo 1-2x. PCT ostatnia iniekcja +14-21 dni."
      }
    },
    {
      "routeId": "cyp",
      "routeLabel": "Testosteron Cypionat (IM, wolny, USA-preferowany)",
      "routeNote": "Średni ester (~8 dni), dominacja na rynku USA; klinicznie ≈ Enantat (~2-dniowa różnica jest minimalna w praktyce). PCT ostatnia iniekcja +14-21 dni.",
      "dosing": "250–750 mg/tydzień IM, podzielone 1-2× tygodniowo. Standard USA dla TRT i kulturystyki.",
      "androgenicRatio": "100:100",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Pfizer Depo-Testosterone Cyp 200 mg/ml (dominacja rynku USA). HU/EU: rzadszy, Enan preferowany. Zakaz WADA.",
      "bioavailability": "~95-100% (IM)",
      "onsetTime": "48-72 h (IM, steady-state 4-5 tygodni)",
      "halfLife": "8 dni (ester cypionatowy, ~2 dni krótszy niż Enan)",
      "halfLifeActive": "~24 h wolny T",
      "detectionWindow": "3-4 miesiące w moczu.",
      "aromatization": "Tak — ten sam wskaźnik dla wszystkich estrów Test.",
      "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany.",
      "quality": {
        "pure": [
          "Klarowny jasnożółty olej, fiolka 10 ml, pojazd olejowy z nasion bawełny częsty",
          "Rx-grade: Pfizer Depo-Testosterone (USA), Watson Cyp (USA)"
        ],
        "caution": [
          "Klinicznie NIE różni się znacząco od Enantatu (8 vs 10,5 dnia minimalna praktyczna różnica)",
          "USA-preferowany, rzadki w UE — na rynku UGL często wymienny z Enantatem"
        ],
        "avoid": [
          "Tak samo jak Enantat (krótki cykl nieskuteczny, detekcja WADA 4 miesiące)"
        ]
      },
      "interactions": [
        "Anastrozol 0,5 mg E3D dla wysokiego E2",
        "PCT start ostatnia iniekcja Cyp +14-21 dni"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 250,
          "medium": 500,
          "high": 750
        },
        "unit": "mg/tydzień (IM, podzielone 1-2x)",
        "note": "250-750 mg/tydzień, tygodniowo 1-2x. PCT ostatnia iniekcja +14-21 dni."
      }
    },
    {
      "routeId": "sus",
      "routeLabel": "Sustanon-250 (mieszanka 4-estrowa Organon)",
      "routeNote": "Mieszanka 4-estrowa (Prop+PhenylProp+Isokaproat+Dekanoat); zarządzanie peakami bardziej złożone niż w single-ester. PCT ostatnia iniekcja +18-21 dni (powolny klirens Dekanoatu).",
      "dosing": "250–750 mg/tydzień IM, podzielone 1-2× tygodniowo (NIE raz w miesiącu jak w TRT). Alternatywa single-ester w dawce kulturystycznej.",
      "androgenicRatio": "100:100",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Aspen/Organon Sustanon-250 (ampułka 1 ml, 30mg Prop + 60mg PhenylProp + 60mg Isocaproate + 100mg Decanoate). UE Rx (HU/PL dostępny na polskiej/czeskiej recepcie). Zakaz WADA.",
      "bioavailability": "~95-100% (IM)",
      "onsetTime": "24-48 h (komponent propionatowy fast-acting, Decanoate slow-acting)",
      "halfLife": "Mieszany: 19h (Prop) - 15 dni (Decanoate); średni efektywny t½ ~7-8 dni",
      "halfLifeActive": "~24 h wolny T (depot-driven)",
      "detectionWindow": "3-4 miesiące w moczu (ze względu na komponent Decanoate).",
      "aromatization": "Tak — wszystkie komponenty aromatyzują (baza Test).",
      "hepatotoxicity": "Niska — mieszanka sterydów macierzystych, NIE 17α-alkilowana.",
      "quality": {
        "pure": [
          "Aspen Sustanon-250 ampułka 1 ml (zakład Bilbao, etykieta holograficzna)",
          "Pakistański Karachi-Sustanon (Organon-licencjonowany, ~6 EUR/ampułka, autentyczny)"
        ],
        "caution": [
          "4-komponentowy peak-shifting: niestabilny poziom plasma single-dose (kombinacja peak-trough)",
          "Pierwotnie opracowany dla TRT miesięcznej 1x iniekcji; tygodniowy dosing kulturystyczny osiągalny ALE peak-management bardziej złożony niż single-ester"
        ],
        "avoid": [
          "Reakcja alergiczna na olej kokosowy lub jeden z estrów",
          "Preferencja single-ester (Enan/Cyp prostszy peak-management)"
        ]
      },
      "interactions": [
        "Monitor E2 Anastrozol — Sustanon ma większe fluktuacje E2",
        "PCT start ostatnia iniekcja Sustanon +18-21 dni (komponent Decanoate slow clearance)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 250,
          "medium": 500,
          "high": 750
        },
        "unit": "mg/tydzień (IM, podzielone 1-2x)",
        "note": "250-750 mg/tydzień, tygodniowo 1-2x zalecane (NIE miesięcznie 1x jak TRT). PCT ostatnia iniekcja +18-21 dni."
      }
    },
    {
      "routeId": "aq",
      "routeLabel": "Zawiesina Testosteronu (wodna, ultra-szybka)",
      "routeNote": "Parent T (NIE jest estryfikowany), 1-3 godzinny onset; pre-workout boost. EKSTREMALNIE bolesna iniekcja (PIP od kryształów). Harmonogram dzienny/EOD.",
      "dosing": "50–200 mg/iniekcję IM dziennie lub EOD. Pre-workout boost: 50-100 mg przyjęte 1-2 godziny przed treningiem.",
      "androgenicRatio": "100:100",
      "image": "/performance/water-vial.png",
      "legalStatus": "Rx rzadko (USA: Aquaviron), głównie UGL underground. UE: nie zarejestrowany. Zakaz WADA.",
      "bioavailability": "~95-100% (IM, BEZ depot, bezpośrednia absorpcja)",
      "onsetTime": "1-3 h (IM, ultra-szybki, NIE estryfikowany)",
      "halfLife": "~24 h (macierzysty T, NIE ester)",
      "halfLifeActive": "~24 h",
      "detectionWindow": "1-2 tygodnie w moczu (krótsze niż formy estryfikowane).",
      "aromatization": "Tak — macierzysty T, substrat CYP19.",
      "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany.",
      "quality": {
        "pure": [
          "Klarowne białe mikrokryształy zawieszone w wodzie, fiolka 10 ml, opalescentny przed wstrząśnięciem",
          "Rx-grade: Aquaviron 25mg/ml (USA, rzadki)"
        ],
        "caution": [
          "EKSTRA bolesna iniekcja — kryształy fizycznie podrażniają tkankę mięśniową (PIP)",
          "EOD lub codzienna iniekcja potrzebna ze względu na krótki okres półtrwania",
          "Używana jako pre-workout boost (początek 1-3 h bezpośrednio zwiększa wydajność)"
        ],
        "avoid": [
          "Jeśli nie chcesz wstrzykiwać codziennie (alternatywa: Prop EOD lub Enan tygodniowo 1x)",
          "Wrażliwy na ból (kryształy powodują znaczny PIP)"
        ]
      },
      "interactions": [
        "Anastrozol — monitor ze względu na szybki wzrost E2",
        "PCT start ostatnia iniekcja zawiesiny +24-48 godzin (szybki klirens)"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 100,
          "high": 200
        },
        "unit": "mg/iniekcja (IM, codziennie lub EOD)",
        "note": "50-200 mg/iniekcja codziennie lub EOD. Pre-workout boost 50-100 mg 1-2 godziny przed treningiem. PCT ostatnia iniekcja +24-48 godzin."
      }
    }
  ],
  "defaultVariant": "enan",
  "anecdote": "Testosteron jest molekułą referencyjną wszystkich AAS i fundamentem protokołów TRT. Raporty anegdotyczne opisują użytkowników stosujących testosteron jako protokół na całe życie, zwykle poprzez nadzorowane medycznie TRT. Zarówno Testosterone Propionate, jak i Cypionate są powszechnie stosowane. Doniesienia społeczności wskazują, że Propionate działa szybciej i daje bardziej 'na żądanie' uczucie napędu z mniejszą retencją wody lub wahaniami hormonów, podczas gdy Cypionate jest preferowany do całorocznego stabilnego stosowania ze spójnymi poziomami w surowicy. Wielu użytkowników zgłasza, że cykle wyłącznie testosteronowe zwykle dają najlepsze długoterminowe rezultaty według doświadczenia społeczności, z mniejszą liczbą zmiennych do zarządzania. Ogólnie testosteron pozostaje fundamentem praktyki AAS i TRT oraz punktem odniesienia, względem którego porównuje się inne związki."
}
