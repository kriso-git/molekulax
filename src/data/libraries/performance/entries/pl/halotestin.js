// FDA-approved Rx (Halotestin, Upjohn 1957; Pfizer generic na niektórych
// rynkach UE). Sources: FDA Halotestin SmPC (wycofany USA 1992),
// Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599,
// Schänzer 1996 PMID 8616181, Yesalis 2002 PMID 12047737.

export default {
  "id": "halotestin",
  "name": "Halotestin (Fluoxymesterone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Fluoxymesterone, doustny AAS pochodny 9α-fluoro-11β-hydroksy-17α-metylo-testosteronu. Pierwotnie zatwierdzony przez FDA (Halotestin, Upjohn 1957). Najwyższa aktywność androgenna wśród AAS — boks/powerlifting pre-competition \"strength-amplifier\" z MINIMALNYM budowaniem masy mięśniowej.",
  "description": "Halotestin (Fluoxymesterone) to doustny AAS pochodny 9α-fluoro-11β-hydroksy-17α-metylo-testosteronu, zsyntetyzowany przez Upjohn w 1956 r., zatwierdzony przez FDA w 1957 r. na opóźnione dojrzewanie, męski hipogonadyzm i (dawniej) raka piersi. Wycofany z rynku USA w 1992 r., Pfizer generic nadal dostępny na niektórych rynkach UE. Stosunek anaboliczno-androgenny ~1900:850 (ekstremalny — najwyższa aktywność androgenna wśród AAS). 9α-fluoro + 11β-OH steryczne blokowanie zapobiega aromatyzacji + aktywność agonisty receptora glikokortykoidowego (GR) (stąd efekt \"wysuszający\" i spiczasta agresja). Grupa 17α-metylowa → WYSOKA hepatotoksyczność. NIE jest standardowym użyciem kulturystycznym (NIE bulker, NIE dobry na cięcie); specyficznie boks, powerlifting, strongman pre-competition \"strength + aggression amplifier\" z 5-10% wzrostem 1RM w 1-3 tygodni i minimalnym faktycznym przyrostem masy mięśniowej. Roy Jones Jr. (2003 skandal dopingowy Boxing News) i wielu innych bokserów testowało pozytywnie na Halotestin. Zakaz WADA cały rok.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista AR + GR, 9α-fluoro, NIE aromatyzuje"},
    {"label": "Anaboliczny:Androgenny", "value": "1900:850"},
    {"label": "Okres półtrwania", "value": "9 godzin (doustnie)"},
    {"label": "Początek", "value": "1-2 h (doustnie)"},
    {"label": "Status prawny", "value": "USA wycofany 1992, Pfizer generic UE, Schedule III"}
  ],
  "mechanism": "Agonista AR 9α-fluoro-11β-hydroksy-17α-metylo-testosteron, plus słaba aktywność agonisty receptora glikokortykoidowego (GR). 9α-fluoro hamuje wiązanie CYP19 (aromatazy) + zwiększa metaboliczną stabilność sterydów; 11β-OH zapewnia dodatkowe steryczne blokowanie przeciwko konwersji aromatazowej. Grupa 17α-metylowa zapewnia biodostępność doustną (~80% oporność first-pass wątrobowy). Aktywność GR wyjaśnia unikalne właściwości Halotestinu: (1) drastyczny efekt kortyzolopodobny \"wysuszający\" (utrata wody); (2) psychologiczna spiczasta agresja (\"Halo-rage\"); (3) wzmocnienie siły bez przyrostu masy mięśniowej (kortyzolopodobna degradacja białek + stymulacja CUN kombinacja).",
  "legalStatus": "USA: wycofany (Upjohn 1992); Schedule III kontrolowana substancja (DEA). UE: Pfizer generic Fluoxymesterone na niektórych rynkach (DE/IT) Rx. HU/PL: nie zarejestrowany. Zakaz WADA cały rok (S1.1.a).",
  "onsetTime": "1-2 h (doustnie)",
  "halfLife": "9 h (doustnie, związek macierzysty)",
  "halfLifeActive": "9 h",
  "interactionsWith": ["tudca", "warfarin", "tamoxifen", "alcohol"],
  "aromatization": "Nie — 9α-fluoro-11β-OH steryczne blokowanie przeciwko CYP19; klinicznie wzrost E2 zasadniczo zero (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Bardzo wysoka — grupa 17α-metylowa + 9α-fluoro dodatkowo zwiększa stres wątrobowy; wzrost ALT/AST 3-7x częsty przy cyklu 4+ tygodni, żółtaczka cholestatyczna case-reported (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "1900:850",
  "bindingAffinity": "Skrajnie wysokie powinowactwo do AR (~330% vs testosteron in vitro) plus powinowactwo GR (~10-15% vs kortyzol).",
  "detectionWindow": "Metabolity Halotestinu (rodzina metabolitów 9α-fluoro-11β-hydroksy) w moczu 2 miesiące (akredytowane WADA GC-MS/LC-MS/MS, Schänzer 1996 PMID 8616181).",
  "benefits": [
    "Drastyczny wzrost siły w 1-3 tygodni (5-10% 1RM, sub-elite/elite powerlifter)",
    "Spiczasta agresja + stymulacja CUN (boks, strongman, sport kontaktowy pre-competition)",
    "Efekt \"wysuszający\" kortyzolopodobny (maksymalizacja definicji pod-wodnej)",
    "NIE aromatyzuje → brak efektów ubocznych E2",
    "Minimalny przyrost masy mięśniowej → zawody wagi (boks, powerlifting kategoria wagowa) nie wpływane"
  ],
  "quickStart": [
    "NIE samodzielny bulker, NIE cięcie — Halotestin specyficznie pre-competition strength-amplifier 1-3 tygodnie",
    "EKSTREMALNA HEPATOTOKSYCZNOŚĆ — maksimum 4 tygodnie ciągłego cyklu, NIGDY dłużej",
    "TUDCA 1000 mg/dzień + NAC 1800 mg/dzień OBOWIĄZKOWE przez cały cykl",
    "Psychologiczny efekt uboczny: \"Halo-rage\" — predyspozycja psychiatryczna bezwzględne przeciwwskazanie",
    "Bloodwork pre-cykl + tydzień 2 + post — priorytet ALT/AST"
  ],
  "expectations": [
    {"label": "Pierwszy tydzień", "body": "Efekt ostry: po 3-5 dniach spiczasta agresja, drastyczny wzrost koncentracji treningowej, 1RM wzrost 2-5%."},
    {"label": "Tydzień 2-3", "body": "Maksymalny wzrost siły (5-10% 1RM), efekt \"wysuszający\" wyczuwalny (kontur mięśni pod-wodny zmaksymalizowany). ALT/AST 3-7x norma górna — OBOWIĄZKOWE przerwanie cyklu na koniec tygodnia 3-4."},
    {"label": "Post-cykl", "body": "Spadek siły szybki (powrót do baseline w 1-2 tygodni), zachowanie masy mięśniowej minimalne (nie było co zachować). Recovery wątrobowy 4-8 tygodni."}
  ],
  "quality": {
    "pure": [
      "Pfizer Fluoxymesterone generic tabletka 5 mg lub 10 mg (UE-Rx, rzadko możliwy)",
      "Tabletka UGL: źródło testowane HPLC obowiązkowe — Halotestin często fałszowany (zastępowanie Anavarem/Methyltestosteronem)"
    ],
    "caution": [
      "Ekstremalna hepatotoksyczność (wzrost ALT/AST 3-7x najczęstszy ostry efekt)",
      "Psychologiczne: \"Halo-rage\", agresja, irytacja — ryzyko konfliktów rodzinnych/zawodowych",
      "Zaburzenia lipidowe dramatyczne: HDL do 50% spadek w 4 tygodnie",
      "Wzrost ciśnienia krwi (często >140/90)"
    ],
    "avoid": [
      "Jakiekolwiek istniejące zaburzenia wątroby BEZWZGLĘDNE przeciwwskazanie",
      "Jednoczesny alkohol, NSAID, paracetamol ściśle zakazane",
      "Predyspozycja psychiatryczna (depresja, choroba dwubiegunowa, zaburzenia lękowe, zaburzenia agresji) bezwzględne przeciwwskazanie",
      "Ryzyko sercowo-naczyniowe (rodzinna historia, wysokie LDL, nadciśnienie)",
      "Stosowanie przez kobiety (ekstremalna aktywność androgenna → szybka nieodwracalna wirylizacja)",
      "Cel bulking/kulturystyczny — Halotestin NIE do tego",
      "Więcej niż 4 tygodnie ciągłego cyklu (kumulatywna hepatotoksyczność)"
    ]
  },
  "interactions": [
    "TUDCA + NAC obowiązkowe wsparcie wątroby",
    "Stack z bazą testosteronu: synergistyczny wzrost siły, ALE stres wątrobowy drastyczny",
    "Warfaryna: efekt antykoagulacyjny może być wzmocniony, ścisły monitor INR",
    "Inne AAS 17α-alkilowane (Anadrol, Dianabol) razem = śmiertelna kombinacja",
    "Leki psychoaktywne (SSRI, MAOI) NIE łączalne (\"Halo-rage\" + zaburzenia serotoniny)"
  ],
  "studies": [
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15248788"},
    {"title": "Metabolism of anabolic androgenic steroids", "authors": "Schänzer W.", "journal": "Clin Chem. 1996;42(7):1001-20.", "pmid": "8674183"},
    {"title": "Anabolic-androgenic steroid abuse and performance-enhancing drugs among adolescents", "authors": "Bahrke MS, Yesalis CE, Brower KJ.", "journal": "Child Adolesc Psychiatr Clin N Am. 1998;7(4):821-38.", "pmid": "9894044"},
    {"title": "Anabolic-androgenic steroid dependence: an emerging disorder", "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.", "journal": "Addiction. 2009;104(12):1966-78.", "pmid": "19922565"}
  ],
  "faq": [
    {"q": "Dlaczego nie buduje mięśni, skoro to tak silny androgen?", "a": "Unikalna aktywność agonisty GR (receptora glikokortykoidowego) Halotestinu jest paradoksalna: wysoka aktywność androgenna (AR) jest teoretycznie anaboliczna, ALE aktywność GR jednocześnie indukuje kortyzolopodobną degradację białek. Efekt netto: drastyczny wzrost siły (stymulacja CUN + sprawność nerwowo-mięśniowa) z MINIMALNYM faktycznym przyrostem masy mięśniowej. Pre-competition strength-amplifier, NIE bulker."},
    {"q": "Jak realny jest \"Halo-rage\"?", "a": "Klinicznie udokumentowany. Kanayama 2009 PMID 19922565 kohort + raporty literatury boksu/UFC wskazują, że Halotestin to najbardziej psychotropowy AAS — agresja, irytacja, wahania nastroju bardziej ekstremalne niż Anadrol czy Trenbolon. Kilku bokserów (Roy Jones Jr. 2003, James Toney 2005) testy pozytywne + udokumentowane zmiany zachowania. Predyspozycja psychiatryczna BEZWZGLĘDNE przeciwwskazanie."},
    {"q": "Dlaczego bokserzy/MMA używają Halotestin?", "a": "Trzy powody: (1) ekstremalny wzrost siły w 1-3 tygodni BEZ przyrostu wagi (kategoria wagowa boksu się nie zmienia); (2) spiczasta agresja na psychologię walki; (3) efekt \"wysuszający\" na utratę wody przed ważeniem. Zakaz WADA, testy USADA wykrywają przez 2 miesiące. Ze względu na ciężki profil efektów ubocznych zazwyczaj używany tylko 1-2 tygodnie przed walką (\"peak week\"), maks 10-30 mg/dzień."},
    {"q": "Hepatotoksyczność vs Anadrol?", "a": "Halotestin jest nieco bardziej hepatotoksyczny niż Anadrol — kombinacja 9α-fluoro + 17α-metyl powoduje bardziej ekstremalny stres wątrobowy niż 2-hydroksymetylen + 17α-metyl w Anadrolu. Oba top-3 w rankingu hepatotoksyczności AAS 17α-alkilowanych (Superdrol-Halotestin-Anadrol). Żaden nie zalecany."},
    {"q": "Sprawa Roya Jonesa Jr. 2003?", "a": "Roy Jones Jr. testował pozytywnie na metabolity Halotestinu po walce tytułowej z Antonio Tarverem w 2003 r. Pozytywny test kosztował go tytuły IBF i WBA; Jones zaprzeczył, spór prawny się rozwinął. Sprawa przyczyniła się do reputacji Halotestinu jako \"sterydu boksera\"."}
  ],
  "related": ["dianabol-info", "anadrol", "superdrol", "anavar-info", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 10, "medium": 20, "high": 40},
    "unit": "mg/dzień (doustnie, 1-2x podzielone)",
    "note": "Maksimum 4 tygodnie cyklu, NIGDY dłużej. 10-40 mg/dzień, 1-2x podzielone (krótki okres półtrwania). TUDCA 1000 mg/dzień + NAC 1800 mg/dzień przez cały cykl. ALT/AST co 2 tygodnie. Pre-competition zazwyczaj 1-3 tygodnie, maks 30 mg/dzień (\"peak week\")."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, ALP, bilirubina (bezpośrednia + całkowita), albumina, INR. Plus: lipidogram (LDL/HDL/TG), panel hormonów (Total T, Free T, E2, LH, FSH, SHBG, Kortyzol), HbA1c, funkcja nerek, CBC, dziennik ciśnienia.",
      "purpose": "Baseline wątrobowy BEZWZGLĘDNIE krytyczny. Baseline kortyzolu interesujący ze względu na aktywność GR Halotestinu (post-cykl wzrost kortyzolu oczekiwany)."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Koniec tygodnia 2",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Plus: lipidogram (HDL drastyczny spadek), ciśnienie krwi (dom, codziennie), dziennik nastroju.",
      "purpose": "Detekcja awaryjna. ALT/AST >3x norma górna lub wzrost bilirubiny = NATYCHMIASTOWE przerwanie. Monitor psychologicznych efektów ubocznych komunikowany z partnerem."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Ostatnia tabletka +1-2 dni start PCT. PCT tydzień 4 i 8-12 kontrole recovery wątrobowego + HPTA.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, panel wątrobowy (recovery), lipidogram (HDL recovery), Kortyzol (post-aktywność GR).",
      "purpose": "Weryfikacja recovery WĄTROBOWEGO bezwzględnie krytyczna. Jeśli ALT/AST nie normalizuje się w 12 tygodni, konsultacja hepatologa OBOWIĄZKOWA."
    },
    "cruise": {
      "label": "Na cruise (cruise Halotestinem NIE ISTNIEJE — ściśle cykliczny)",
      "timing": "Cruise Halotestinem ZABRONIONY — obowiązkowe przerwanie po 4 tygodniach. Ciągłe stosowanie = niewydolność wątrobowa.",
      "markers": "N/A — cruise Halotestinem nie standardowy.",
      "purpose": "Halotestin używany wyłącznie w krótkim (maks 4 tygodnie, zazwyczaj 1-3 tygodnie) cyklu pre-competition."
    }
  }
}
