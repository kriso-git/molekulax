// East German Stasi doping program (1968-1989). Sources: Franke-Berendonk
// 1997 PMID 9302891 (GDR doping program review), Schänzer 2006 PMID 17042466
// (extended-detection metabolites), Pope-Kanayama 2014 PMID 24423981,
// Hartgens-Kuipers 2004 PMID 15233599, Stasi BStU archives 2005 release.

export default {
  "id": "turinabol",
  "name": "Turinabol (4-Chlorodehydromethyltestosterone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Oral-Turinabol (Chlorodehydromethyltestosteron, CDMT), 17α-alkilowany chlorowany doustny AAS analog Dianabolu. Jenapharm 1962, niesławny jako główny środek programu dopingowego NRD 1968-1989 (\"Komplex 08\"). Notoryczny ze względu na długotrwałe metabolity detekcyjne.",
  "description": "Turinabol (4-chlorodehydromethyltestosteron, CDMT) to 17α-alkilowany chlorowany doustny AAS analog strukturalny Dianabolu, zsyntetyzowany przez Jenapharm (Wschodnie Niemcy, Jena) w 1962 r., sprzedawany w 1965 r. jako Oral-Turinabol Rx. Stał się GŁÓWNYM środkiem państwowego programu dopingowego NRD (\"Staatsplanthema 14.25\", kod Stasi \"Komplex 08\", 1968-1989); ~10,000+ sportowców NRD otrzymało Turinabol bez wiedzy lub niedokumentowane, głównie w pływaniu, lekkoatletyce, wioślarstwie. Otwarcia archiwów Stasi w latach 90. dokumentują szkody (uszkodzenie wątroby, kardiomiopatia, wirylizacja u sportowczyń, wrodzone wady u dzieci dopingowanych matek). Stosunek anaboliczno-androgenny 53:6 — wysoki anaboliczny, praktycznie zero androgenny (\"bardziej suchy Anavar\"). NIE aromatyzuje (substytucja 4-chloro blokuje wiązanie substratu CYP19). 17α-metyl → umiarkowana hepatotoksyczność (4-chloro redukuje, podobna do Anavar). Schänzer 2006 (PMID 17042466) opisuje ekstra-długie metabolity detekcyjne (6β-OH-CDMT i inne) — możliwa 12-18 miesięczna detekcja w moczu, podstawa retestu IOC w Rio 2016: 100+ sportowców retrospektywnie zdyskwalifikowanych po ponownej ocenie próbek 2008-2012. Zakaz WADA cały rok.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista AR, 17α-metyl-4-chloro-Δ1-T, NIE aromatyzuje"},
    {"label": "Anaboliczny:Androgenny", "value": "53:6"},
    {"label": "Okres półtrwania", "value": "16 godzin (doustnie)"},
    {"label": "Początek", "value": "2-3 h (doustnie)"},
    {"label": "Status prawny", "value": "Jenapharm Rx (DE) wycofany 1994; UGL dziś. Schedule III."}
  ],
  "mechanism": "Agonista AR 17α-metyl-4-chloro-Δ1-androsten-17β-ol-3-on. Substytucja 4-chloro zapewnia dwa bloki: (1) hamuje wiązanie substratu CYP19 → NIE aromatyzuje; (2) hamuje 3α-HSD-mediowaną inaktywację androgenów w tkankach docelowych → stabilniejszy agonista AR. Grupa 17α-metylowa → doustna stabilność (~80% oporność first-pass wątrobowy). Wiązanie podwójne Δ1 odziedziczone z Dianabolu. Schänzer 2006 opisuje ekstra-długie metabolity detekcyjne (6β-OH-CDMT, 3α-hydroksy-1-en-3-on-CDMT i dodatkowo 6α-OH-CDMT), które stały się klasycznymi celami w dopingu sportowym w akredytowanych przez WADA laboratoriach.",
  "legalStatus": "DE/UE: Jenapharm Oral-Turinabol Rx wycofany po 1994. USA: Schedule III kontrolowana substancja (DEA, nigdy nie zatwierdzony przez FDA). HU/PL: nielegalny bez recepty, dominacja rynku UGL. Zakaz WADA cały rok (S1.1.a).",
  "onsetTime": "2-3 h (doustnie)",
  "halfLife": "16 h (doustnie)",
  "halfLifeActive": "16 h (macierzysty), plus 6β-OH i 3α-OH metabolity ~24-48 h",
  "interactionsWith": ["tudca", "warfarin", "testosterone", "alcohol"],
  "aromatization": "Nie — substytucja 4-chloro blokuje wiązanie CYP19; klinicznie wzrost E2 zasadniczo zero (Pope-Kanayama 2014 PMID 24423981, Schänzer 2006 PMID 17042466)",
  "hepatotoxicity": "Umiarkowana — grupa 17α-metylowa stres first-pass wątrobowy, ALE 4-chloro redukuje hepatotoksyczność vs inne AAS 17α-alkilowane (Dianabol, Anadrol). Wzrost ALT/AST 2-3x częsty przy cyklu 6+ tygodni, klinicznie łagodniejszy niż Dianabol czy Anadrol (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "53:6",
  "bindingAffinity": "Umiarkowane-wysokie powinowactwo do AR; praktycznie zero substrat 5α-reduktazy → BRAK aktywności DHT; brak ryzyka androgennego skóry głowy lub prostaty.",
  "detectionWindow": "EKSTRA DŁUGIE — w moczu 12-18 miesięcy (Schänzer 2006 6β-OH-CDMT i metabolity 3α-hydroksy-3-on). Retrospektywny retest Rio 2016 zdyskwalifikował 100+ sportowców na podstawie ponownej oceny 2008-2012. Akredytowane WADA LC-MS/MS.",
  "benefits": [
    "Czysty przyrost masy beztłuszczowej (3-5 kg w 6-8 tygodni, MINIMALNA retencja wody)",
    "NIE aromatyzuje → brak ginekomastii, brak retencji wody",
    "Zero aktywności androgennej skóry głowy/prostaty (BRAK konwersji DHT)",
    "Hepatotoksyczność łagodniejsza niż Dianabol/Anadrol (ochrona 4-chloro)",
    "Wzrost wytrzymałości udokumentowany w sub-elite sportach wytrzymałościowych (wioślarstwo NRD, lekkoatletyka)"
  ],
  "quickStart": [
    "EKSTRA DŁUGIE OKNO DETEKCJI — 12-18 miesięcy w moczu; sportowcy testowani WADA potrzebują min. 18 miesięcy fade-out off-season",
    "Monitor wątrobowy co 4 tygodnie (umiarkowana, ale 17α-metyl)",
    "TUDCA 500 mg/dzień + NAC 1200 mg/dzień zalecane",
    "Typowa dawka 30-60 mg/dzień, cykl 6-8 tygodni",
    "PCT (Clomid + Nolvadex 4 tygodnie) obowiązkowe"
  ],
  "expectations": [
    {"label": "Pierwszy tydzień", "body": "Efekt ostry minimalny. Wzrost siły wyczuwalny po 3-5 dniach, przyrost masy beztłuszczowej jeszcze nie."},
    {"label": "Tydzień 4-6", "body": "Maksymalny przyrost masy 3-5 kg, wzrost siły 10-15% 1RM. HDL spadek umiarkowany (15-25%)."},
    {"label": "Post-cykl", "body": "Zachowanie masy relatywnie dobre (utrata wody minimalna). Recovery wątrobowy 4-6 tygodni. Okno detekcji 12-18 miesięcy w laboratoriach WADA."}
  ],
  "quality": {
    "pure": [
      "Oryginalna tabletka Jenapharm Oral-Turinabol 5 mg (1962-1994, dziś kolekcjonerska)",
      "Tabletka UGL: źródło testowane HPLC obowiązkowe — Turinabol często fałszowany (zastępowanie Anavarem/Dianabolem)"
    ],
    "caution": [
      "EKSTRA długie okno detekcji — ryzyko sportowca wysokie",
      "Hepatotoksyczność (wzrost ALT/AST 2-3x)",
      "Zaburzenia lipidowe: spadek HDL umiarkowany",
      "Zmiany nastroju (depresja, irytacja) przerwij jeśli zaobserwowane"
    ],
    "avoid": [
      "Sportowiec testowany WADA na dowolnym etapie kariery (18-miesięczna detekcja)",
      "Jakiekolwiek zaburzenia wątroby (umiarkowana hepatotoksyczność)",
      "Jednoczesne stosowanie alkoholu lub paracetamolu",
      "Stosowanie przez kobiety >10 mg/dzień (ryzyko wirylizacji utrzymuje się, choć niższe niż innych AAS)",
      "Predyspozycja psychiatryczna"
    ]
  },
  "interactions": [
    "Stack z bazą testosteronu: synergistyczny przyrost masy, klasyczny cykl Turinabol+Test",
    "TUDCA + NAC zalecane (umiarkowana hepatotoksyczność)",
    "Anastrozol: NIE potrzebny dla cyklu tylko-Turinabol (brak aromatyzacji)",
    "Kombinacja z innymi AAS 17α-alkilowanymi zwiększa stres wątrobowy"
  ],
  "studies": [
    {"title": "Hormonal doping and androgenization of athletes: a secret program of the German Democratic Republic government", "authors": "Franke WW, Berendonk B.", "journal": "Clin Chem. 1997;43(7):1262-79.", "pmid": "9302891"},
    {"title": "Long-term detection of methandienone, stanozolol, dehydrochloromethyltestosterone metabolites in human urine by LC-MS/MS", "authors": "Schänzer W, Geyer H, Gotzmann A et al.", "journal": "Drug Test Anal. 2006;46(5):1071-1076.", "pmid": "17042466"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"},
    {"title": "Anabolic-androgenic steroid dependence: an emerging disorder", "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.", "journal": "Addiction. 2009;104(12):1966-78.", "pmid": "19922565"}
  ],
  "faq": [
    {"q": "Czym był program dopingowy NRD \"Komplex 08\"?", "a": "Państwowy program dopingowy NRD z lat 1968-1989 (oficjalny kod Staatsplanthema 14.25, kod Stasi \"Komplex 08\") był koordynowany przez Sportmedizinischer Dienst der DDR (SMD) i Stasi. ~10,000+ sportowców NRD (w tym nastoletnie dziewczęta!) otrzymało Turinabol bez wiedzy lub niedokumentowane, głównie w pływaniu, lekkoatletyce, wioślarstwie. Otwarcia archiwów Stasi w latach 1990-1992 dokumentują niedokumentację, która do dziś przyczynia się do rewizji certyfikatów sportowych i medali olimpijskich. Franke-Berendonk 1997 PMID 9302891 to klasyczny przegląd."},
    {"q": "Dlaczego 18-miesięczna detekcja?", "a": "Schänzer 2006 (PMID 17042466) odkrył, że Turinabol tworzy nieklasyczne długoterminowe metabolity (6β-OH-CDMT, 3α-hydroksy-1-en-3-on-CDMT), które utrzymują się w moczu przez tygodnie-miesiące po oczyszczeniu związku macierzystego. Metody LC-MS/MS dają 12-18 miesięczne okno detekcji, podstawa retestu IOC Rio 2016: próbki olimpijskie 2008-2012 zostały retrospektywnie ponownie przetestowane, 100+ pozytywnych wyników Turinabolu z dyskwalifikacją i redystrybucją medali."},
    {"q": "Turinabol vs Dianabol?", "a": "Strukturalnie podobne (CDMT = 4-chloro-Dianabol), ALE różne: Dianabol AROMATYZUJE (substrat CYP19, wzrost E2, retencja wody, ryzyko ginekomastii); Turinabol NIE aromatyzuje (blok 4-chloro). W hepatotoksyczności Turinabol jest łagodniejszy (ochrona 4-chloro). W sile anabolicznej Dianabol jest silniejszy (~250:60 vs 53:6 stosunek). Typowy wybór: Turinabol \"bardziej suchy\" cykl, Dianabol \"bardziej mokry\" bulker."},
    {"q": "Stosowanie przez kobiety?", "a": "Historia NRD pokazuje, że sportowczynie (Heidi Krieger, medalistka olimpijska w pchnięciu kulą, dobrze udokumentowany przypadek) otrzymywały Turinabol bez wiedzy w dawkach 10-20 mg/dzień — wirylizacyjne efekty uboczne (nieodwracalne pogłębienie głosu, przerost łechtaczki, hirsutyzm) WYSTĄPIŁY. Krieger przeszła operację zmiany płci w 1997 (Andreas Krieger). Wniosek kliniczny: chociaż Turinabol ma niski stosunek androgenny (6 vs 100 testosteron), przy wyższych dawkach (>10 mg/dzień) i dłuższej ekspozycji wirylizacja może być NIEODWRACALNA. Jedyny bezpieczny protokół dla kobiet: nie używaj."},
    {"q": "Wzrost wytrzymałości w sportach wioślarskich?", "a": "Dominacja olimpijska zespołu wioślarskiego NRD 1968-1988 (~30 medali) była w dużej mierze napędzana Turinabolem (Franke-Berendonk 1997 PMID 9302891). Mechanizm: efekt erytropoetynowy AAS 17α-metylowych + wzrost sprawności nerwowo-mięśniowej + przyspieszenie regeneracji. Zakaz WADA w nowoczesnych sportach wytrzymałościowych, a metabolity Schänzer 2006 przynoszą ekstra-ryzyko detekcji."}
  ],
  "related": ["dianabol-info", "anavar-info", "testosterone-info", "winstrol-info", "primobolan"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 30, "medium": 45, "high": 60},
    "unit": "mg/dzień (doustnie, 2-3x podzielone)",
    "note": "Maksimum 8 tygodni cyklu. 30-60 mg/dzień, 2-3x podzielone (16 h okres półtrwania). TUDCA 500 mg/dzień + NAC 1200 mg/dzień zalecane. PCT (Clomid + Nolvadex) 4 tygodnie. Dawka dla kobiet maks. 5-10 mg/dzień (ryzyko wirylizacji przy dłuższej ekspozycji)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Wątrobowe: ALT, AST, GGT, ALP, bilirubina. Lipidogram (LDL/HDL/TG). Panel hormonów (Total T, Free T, E2, LH, FSH, SHBG). CBC + hematokryt. Funkcja nerek.",
      "purpose": "Baseline wątrobowy ze względu na grupę 17α-metylową, baseline lipidogramu dla detekcji trendu."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Koniec tygodnia 4",
      "markers": "Wątrobowe: ALT, AST, GGT. Lipidogram (HDL), E2 (podczas Test-stacku), ciśnienie krwi.",
      "purpose": "ALT/AST <3x normalne oczekiwane dla cyklu tylko-Turinabol. Spadek HDL umiarkowany."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Ostatnia tabletka +1-2 dni start PCT. PCT tydzień 4 + 8-12 kontrole recovery.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, recovery wątrobowy + lipidowy.",
      "purpose": "Weryfikacja recovery HPTA + wątrobowego. Recovery SHBG 4-6 tygodni."
    },
    "cruise": {
      "label": "Na cruise (cruise Turinabolem NIE standardowy)",
      "timing": "Cruise Turinabolem atypowy ze względu na 17α-metyl + długą detekcję",
      "markers": "N/A",
      "purpose": "Turinabol wyłącznie zalecany do użytku cyklicznego. Długi cruise = hepatotoksyczny + ryzyko detekcji WADA."
    }
  }
}
