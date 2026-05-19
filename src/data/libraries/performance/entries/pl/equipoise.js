// Veterinary-only Rx (Fort Dodge Animal Health Equipoise 1972-2008).
// Sources: FDA-CVM Boldenone Undecylenate veterinary label, Pope-Kanayama
// 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599, Schänzer 1996
// PMID 8616181, Llewellyn 2017 "Anabolics" UGL reference.

export default {
  "id": "equipoise",
  "name": "Equipoise (Boldenone Undecylenate)",
  "image": "/performance/oil-vial-orange.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Boldenone Undecylenate (Δ1-testosteron Undecylenat), iniekcyjny AAS tylko-weterynaryjny. Pierwotnie Squibb 1949 ludzki Rx, dziś wyłącznie weterynaryjny (konie) — Fort Dodge Equipoise 1972-2008. Wolne, stabilne lean gains; AROMATYZUJE w ~połowie wskaźnika testosteronu. Reputacja \"stymulanta apetytu\".",
  "description": "Equipoise (Boldenone Undecylenat) to estryfikowany Undecylenatem iniekcyjny AAS Δ1-testosteron. Pierwotnie zsyntetyzowany przez Squibb (USA) w 1949 r. jako Parenabol (ludzki Rx) na leczenie osteoporozy + kacheksji u starszych mężczyzn, ALE wycofany w latach 70. ze względu na preferencję estrów Test. W 1972 r. Fort Dodge Animal Health nabył licencję i sprzedawał jako Equipoise tylko-weterynaryjny (regeneracja stawów koni + stymulant apetytu) Rx — również wycofany w 2008 r. Dziś tylko rynek UGL. Stosunek anaboliczno-androgenny 100:50 (umiarkowany anaboliczny, umiarkowany androgenny). NIE 17α-alkilowany → NISKA hepatotoksyczność. AROMATYZUJE (około połowy tak silnie jak testosteron, substrat CYP19). Ester undecylenatowy (kwas undecylenowy 10-węgla) → długi okres półtrwania ~14 dni, depot kompatybilny z iniekcją miesięczną. Klasyczny \"slow lean gainer\" — 3-5 kg suchych mięśni w 8-12 tygodni + udokumentowany efekt stymulanta apetytu (napędzany boldenonem). Zakaz WADA cały rok.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista AR, Δ1-testosteron, AROMATYZUJE we wskaźniku połowy Test"},
    {"label": "Anaboliczny:Androgenny", "value": "100:50"},
    {"label": "Okres półtrwania", "value": "14 dni (ester Undecylenatowy)"},
    {"label": "Początek", "value": "48-72 h (IM)"},
    {"label": "Status prawny", "value": "Tylko-weterynaryjny Rx (wycofany 2008), dziś UGL; Schedule III"}
  ],
  "mechanism": "Agonista AR Δ1-testosteron-undecylenat. Wiązanie podwójne Δ1 (takie samo jak w Dianabolu) zapewnia łagodną stabilność metaboliczną + niższe powinowactwo do substratu 5α-reduktazy (NIE silnie DHT-konwertujący jak zwykły Test). Aromatyzacja przez enzym CYP19 w ~50% poziomu Test — klinicznie wzrost E2 umiarkowany, ryzyko ginekomastii niższe niż na Test. Ester undecylenatowy slow-release IM depot z ~14-dniowym okresem półtrwania. Według doświadczeń kulturystycznych wyraźny efekt stymulanta apetytu (mechanizm nie w pełni zrozumiały — hipoteza: pośrednia modulacja receptorów greliny lub ścieżek apetytu CUN).",
  "legalStatus": "Tylko-weterynaryjny Rx (Fort Dodge Equipoise 1972-2008, dziś wycofany). USA: Schedule III kontrolowana substancja (DEA, off-label ludzkie nielegalne). UE/HU/PL: kontrolowany AAS, nielegalny bez recepty. Zakaz WADA cały rok (S1.1.a).",
  "onsetTime": "48-72 h (IM, steady-state 4-5 tygodni)",
  "halfLife": "14 d (ester Undecylenatowy)",
  "halfLifeActive": "~24 h wolny boldenon (po hydrolizie)",
  "interactionsWith": ["anastrozole", "testosterone", "warfarin", "finasteride"],
  "aromatization": "Tak — substrat CYP19 Δ1-testosteron w ~50% poziomu Test; klinicznie wzrost E2 umiarkowany (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Niska — steryd macierzysty, NIE 17α-alkilowany; IM pomija first-pass. ALT/AST <2x normalne dla cyklu tylko-Equipoise (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:50",
  "bindingAffinity": "Umiarkowane powinowactwo do AR (~50-60% vs testosteron in vitro).",
  "detectionWindow": "Metabolity boldenonu (rodzina metabolitów 1-androsten-3,17-dion + Δ1-androsten) w moczu 5-6 miesięcy (ze względu na powolny klirens Undecylenatu; akredytowane WADA GC-MS/LC-MS/MS, Schänzer 1996 PMID 8616181).",
  "benefits": [
    "Powolny, stabilny przyrost masy (3-5 kg w 8-12 tygodni, MINIMALNA retencja wody)",
    "Efekt stymulanta apetytu (klasyczne doświadczenie kulturystyczne \"bulk-eating helper\")",
    "Niska hepatotoksyczność (NIE 17α-alkilowany)",
    "Aromatyzacja umiarkowana (ryzyko ginekomastii niższe niż na Test)",
    "Wzrost liczby krwinek czerwonych i pojemności tlenowej (efekt erytropoetynowy)"
  ],
  "quickStart": [
    "MINIMUM 10-12 tygodni cyklu ze względu na długi ester Undecylenatowy (steady-state 4-5 tygodni)",
    "Typowa dawka 400-600 mg/tydzień, tygodniowo 1-2x iniekcja",
    "Anastrozol w gotowości na podstawie monitora E2",
    "PCT (Clomid + Nolvadex 4-6 tygodni) start ostatnia iniekcja +21-28 dni",
    "Sportowiec testowany WADA: minimum 6-miesięczny fade-out off-season"
  ],
  "expectations": [
    {"label": "Pierwsze 2 tygodnie", "body": "Efekt ostry minimalny, efekt stymulanta apetytu wyczuwalny po 5-7 dniach. Przyrost masy jeszcze nie."},
    {"label": "Tydzień 5-8", "body": "Steady-state, przyrost masy 2-3 kg, wzrost siły 8-12% 1RM. Wzrost hemoglobiny ~10-15%."},
    {"label": "Koniec tygodnia 12", "body": "Maksymalny efekt, 3-5 kg suchej masy. Spadek HDL umiarkowany. Okno detekcji 5-6 miesięcy zaczyna się."}
  ],
  "quality": {
    "pure": [
      "Fort Dodge Equipoise oryginalna fiolka weterynaryjna (50 mg/ml, dziś kolekcjonerska po wycofaniu 2008)",
      "Ekwiwalent UGL: klarowny złoto-bursztynowy olej, fiolka 10 ml, sterylnie filtrowana (200-300 mg/ml częsta koncentracja UGL)"
    ],
    "caution": [
      "Aromatyzacja: ryzyko ginekomastii (niższe niż na Test, ale NIE zero)",
      "Zaburzenia lipidowe: spadek HDL umiarkowany",
      "Efekt stymulanta apetytu → trudniejsze utrzymanie deficytu kalorycznego podczas cyklu cięciowego",
      "Wzrost liczby krwinek czerwonych (hematokryt >54% ryzyko trombozy)",
      "Długie okno detekcji"
    ],
    "avoid": [
      "Sportowiec testowany WADA w następnych 6 miesiącach",
      "Czerwienica (hematokryt baseline >54%) bezwzględne przeciwwskazanie",
      "Cykl cięciowy (efekt stymulanta apetytu sprzeczny z celem deficytu kalorycznego)",
      "Stosowanie przez kobiety (umiarkowane-wysokie ryzyko wirylizacji)",
      "Ryzyko sercowo-naczyniowe (rodzinna historia, wysokie LDL)"
    ]
  },
  "interactions": [
    "Stack z bazą testosteronu: synergistyczny przyrost masy, klasyczny cykl EQ+Test",
    "Anastrozol 0,25-0,5 mg E3D: kontrola E2 podczas stacku Equipoise + Test",
    "Finasteryd: NIE hamuje efektu Equipoise (NIE silnie DHT-konwertujący)",
    "Warfaryna: efekt antykoagulacyjny może być wzmocniony, monitor INR"
  ],
  "studies": [
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"},
    {"title": "Metabolism of anabolic androgenic steroids", "authors": "Schänzer W.", "journal": "Clin Chem. 1996;42(7):1001-20.", "pmid": "8616181"},
    {"title": "Anabolic-androgenic steroid dependence: an emerging disorder", "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.", "journal": "Addiction. 2009;104(12):1966-78.", "pmid": "19922565"},
    {"title": "FDA-CVM Boldenone Undecylenate veterinary label (Equipoise)", "authors": "FDA Center for Veterinary Medicine", "journal": "Veterinary Pharmacology Database", "pmid": null}
  ],
  "faq": [
    {"q": "Dlaczego nazywany jest sterydem \"stymulującym apetyt\"?", "a": "Klasyczne doświadczenie kulturystyczne: użytkownicy na Equipoise zgłaszają wyraźny wzrost apetytu (anegdotycznie \"unstoppable hunger\"). Mechanizm NIE jest w pełni zrozumiały — hipoteza: boldenon pośrednio moduluje receptory greliny lub ścieżki apetytu CUN. Klinicznie efekt jest idealny dla cykli bulkingowych (więcej kalorii łatwiej spożywanych), ALE przeciwskuteczny w cyklach cięciowych — \"deficytowa dieta\" na Equipoise jest trudniejsza."},
    {"q": "Equipoise vs Dianabol (oba Δ1-T)?", "a": "Strukturalnie pokrewne (Equipoise = Δ1-Test-undecylenat, Dianabol = Δ1-17α-metylo-T), ale różna farmakologia: Equipoise INIEKCYJNY slow-release (ester Undecylenatowy, 14-dniowy okres półtrwania, NIE 17α-alkilowany, niska hepatotoksyczność), Dianabol DOUSTNY rapid (tabletka 17α-metyl, 5-godzinny okres półtrwania, WYSOKA hepatotoksyczność). W aromatyzacji Equipoise jest łagodniejszy (~50% Test), Dianabol silniejszy (~80% Test)."},
    {"q": "Dlaczego wycofany z rynku ludzkiego?", "a": "Squibb wprowadził go jako Parenabol Rx do użytku ludzkiego w 1949 r., ALE w latach 70. pojawienie się dłużej działających estrów Test (Cypionat, Enantat) + długie okno detekcji Boldenonu spowodowały spadek użytkowania ludzkiego Rx. Fort Dodge Animal Health nabył i sprzedawał jako Equipoise tylko-weterynaryjnie w 1972 r. (na wskazania stymulanta apetytu konia + regeneracji stawów), również wycofany w 2008 r. Dziś tylko UGL."},
    {"q": "Co oznacza długie okno detekcji?", "a": "Equipoise-undecylenat ma 5-6 miesięczną detekcję w moczu w laboratoriach WADA (ze względu na długi ester Undecylenatowy + rodzinę metabolitów Δ1-androstenu). Dla sportowców testowanych WADA powinien być unikany nawet podczas off-season — minimum 6-miesięczny fade-out przed planowanymi zawodami. Wzorzec metabolitów Boldenonu niesie też ryzyko konfundu ENDOGENNEGO: w niektórych rzadkich przypadkach 1-androsten-3,17-dion pojawia się w próbkach sportowca ze względu na endogenną zmienność biologiczną, stwarzając ryzyko sporu prawnego (ale laboratoria WADA filtrują przez testy stosunku izotopów)."},
    {"q": "Czy potrzebuje długiego cyklu?", "a": "Tak — minimum 10-12 tygodni, często 14-16 tygodni. Ze względu na slow-release estru Undecylenatowego, steady-state jest wyczuwalny dopiero po 4-5 tygodniach, więc krótki cykl (6-8 tygodni) jest marnotrawny. Typowy protokół: 400-600 mg/tydzień, 12-16 tygodni, miesięczny stack z bazą Test (Test-Enan lub Cyp), PCT po ostatniej iniekcji EQ +21-28 dni."}
  ],
  "related": ["testosterone-info", "dianabol-info", "trenbolone-info", "nandrolone-info", "anavar-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 300, "medium": 500, "high": 700},
    "unit": "mg/tydzień (IM, podzielone 1-2x)",
    "note": "Minimum 10-12 tygodni cyklu (steady-state 4-5 tygodni). 300-700 mg/tydzień, tygodniowo 1-2x iniekcja. TUDCA NIE obowiązkowy. Anastrozol 0,25-0,5 mg E3D obok stacku Test. PCT ostatnia iniekcja +21-28 dni."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Panel hormonów: Total T, Free T, E2, LH, FSH, SHBG. Lipidogram (LDL/HDL/TG). Wątrobowe: ALT/AST/GGT (Equipoise-only rzadko się rusza). CBC + hematokryt (Equipoise jest erytropoetyczny). PSA (powyżej 30 lat).",
      "purpose": "Baseline hematokrytu kluczowy (Equipoise silny efekt erytropoetynopodobny). Baseline lipidogramu dla detekcji trendu."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Tydzień 5-6 (po steady-state)",
      "markers": "CBC + hematokryt (>54% alarm), lipidogram (HDL), E2, dziennik ciśnienia.",
      "purpose": "Ryzyko hematokrytu to specyficzny problem Equipoise — flebotomia jeśli >54%. Spadek HDL umiarkowany."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Ostatnia iniekcja Equipoise +21-28 dni start PCT (powolny klirens Undecylenatu). PCT tydzień 4 + 8-12 kontrole recovery.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, lipidogram (HDL recovery), CBC + hematokryt.",
      "purpose": "Weryfikacja recovery HPTA. Spadek hematokrytu naturalny przez 4-8 tygodni."
    },
    "cruise": {
      "label": "Na cruise",
      "timing": "Obok cruise TRT-Test, adiunkt Equipoise 200-300 mg/tydzień — monitor co 6-8 tygodni",
      "markers": "CBC + hematokryt (kluczowy!), lipidogram, E2, PSA.",
      "purpose": "Długoterminowy Equipoise + wzrost hematokrytu kumulatywny, ryzyko czerwienicy. Flebotomia co 8-12 tygodni standard jeśli hematokryt >54%."
    }
  }
}
