// FDA-approved (Anadrol-50, DailyMed/Alaven-Meda Pharmaceuticals). Sources:
// FDA Anadrol-50 prescribing information, Pope-Kanayama 2014 PMID 24423981,
// Hartgens-Kuipers 2004 PMID 15233599, Pavlatos 2001 PMID 11329221 (clinical
// review of oxymetholone in anemia), Schänzer 1996 PMID 8616181.

export default {
  "id": "anadrol",
  "name": "Anadrol (Oxymetholone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Oksymetholon, doustny AAS pochodny 2-hydroksymetyleno-17α-metylo-DHT. Zatwierdzony przez FDA (Anadrol-50) na aplastyczną i hipoplastyczną niedokrwistość. Klasyczny \"mokry\" steryd bulkingowy; wysoka hepatotoksyczność i paradoksalne estrogenopodobne efekty uboczne.",
  "description": "Anadrol (Oksymetholon) to doustny AAS pochodny 2-hydroksymetyleno-17α-metylo-DHT, pierwotnie zsyntetyzowany przez Syntex w 1960 r. Wskazania kliniczne zatwierdzone przez FDA: niedokrwistość aplastyczna, wrodzone i nabyte niedokrwistości z niedoborem krwinek czerwonych (Anadrol-50, obecnie Alaven/Meda Pharmaceuticals). Stosunek anaboliczno-androgenny 320:45 (wysoki anaboliczny, umiarkowany androgenny). Wysoka hepatotoksyczność ze względu na grupę 17α-metylową (jedna z najwyższych wśród AAS). Grupa 2-hydroksymetylenowa NIE jest substratem CYP19 (nie aromatyzuje), ALE wykazuje bezpośrednią aktywność agonisty ER — paradoksalne \"estrogenopodobne\" efekty uboczne (retencja wody, ryzyko ginekomastii) pojawiają się nawet bez aromatyzacji. W kontekście kulturystycznym, \"mokry\" steryd bulkingowy: 10-15 kg przyrostu masy w 4-6 tygodni (znacząco woda + glikogen) udokumentowane. Zakazany przez WADA cały rok.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista AR + bezpośredni agonista ER (paradoksalny)"},
    {"label": "Anaboliczny:Androgenny", "value": "320:45"},
    {"label": "Okres półtrwania", "value": "8-9 godzin (doustnie)"},
    {"label": "Początek", "value": "1-2 h (doustnie)"},
    {"label": "Status prawny", "value": "FDA Rx (Anadrol-50), Schedule III, zakaz WADA"}
  ],
  "mechanism": "Agonista AR 2-hydroksymetyleno-17α-metylo-DHT pochodny. Grupa 17α-metylowa zapewnia biodostępność doustną (oporna na first-pass wątrobowy, ~80% biodostępność). Grupa 2-hydroksymetylenowa zapewnia KILKA niezwykłych efektów: (1) NIE substrat CYP19 → NIE aromatyzuje; (2) ALE bezpośrednia aktywność agonisty ER → paradoksalne estrogenopodobne efekty uboczne (retencja wody, ryzyko ginekomastii) pojawiają się mimo leczenia antyaromatazowego; (3) wysoki efekt erytropoetynopodobny (stąd wskazanie niedokrwistości) — liczba krwinek czerwonych i hemoglobina rosną szybko. Ze względu na aktywność ER, SERM (Nolvadex/Raloksyfen) jest skuteczny w zapobieganiu ginekomastii, AI (Anastrozol) NIE jest skuteczny.",
  "legalStatus": "USA: zatwierdzony przez FDA Rx Anadrol-50 (Alaven/Meda), Schedule III kontrolowana substancja (DEA). UE: rzadko import na receptę, nie zarejestrowany na rynkach HU/PL. HU/PL: nielegalny bez recepty. Zakaz WADA cały rok (S1.1.a).",
  "onsetTime": "1-2 h (doustnie)",
  "halfLife": "8-9 h (doustnie, związek macierzysty)",
  "halfLifeActive": "~16 h (z aktywnymi metabolitami)",
  "interactionsWith": ["tamoxifen", "raloxifene", "tudca", "warfarin"],
  "aromatization": "Nie substrat CYP19 — ALE ze względu na bezpośrednią aktywność agonisty ER, estrogenopodobne efekty uboczne (retencja wody, ginekomastia) pojawiają się mimo leczenia antyaromatazowego. Jedyna ochrona: SERM (Nolvadex 20 mg/dzień lub Raloksyfen 60 mg/dzień) (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Bardzo wysoka — grupa 17α-metylowa ekstremalny stres first-pass wątrobowy, ALT/AST 5-10x wzrost częsty, żółtaczka cholestatyczna case-reported. Wśród AAS o najwyższej hepatotoksyczności wraz z Dianabolem i Superdrolem (Hartgens-Kuipers 2004 PMID 15233599, Pavlatos 2001 PMID 11329221)",
  "wadaStatus": "banned",
  "androgenicRatio": "320:45",
  "bindingAffinity": "Wysokie powinowactwo do AR + atypowa aktywność ER (Pope-Kanayama 2014 przegląd designer AAS).",
  "detectionWindow": "Metabolity oksymetholonu w moczu 6-8 tygodni (akredytowane WADA GC-MS i LC-MS/MS; Schänzer 1996 PMID 8616181).",
  "benefits": [
    "Szybki bulking: 10-15 kg przyrostu masy w 4-6 tygodni (znacząco woda + glikogen)",
    "Drastyczny przyrost siły: bench press i deadlift 1RM 15-25% wzrost (ekstrapolacja Bhasin)",
    "Liczba krwinek czerwonych i hemoglobina szybki wzrost (wskazanie FDA: niedokrwistość)",
    "Komfort stawów: retencja wody zapewnia mechaniczny efekt amortyzatora, mniej bólu treningowego"
  ],
  "quickStart": [
    "EKSTREMALNA HEPATOTOKSYCZNOŚĆ — maksimum 4 tygodnie ciągłego cyklu, NIGDY dłużej",
    "TUDCA 1000-1500 mg/dzień + NAC 1800 mg/dzień OBOWIĄZKOWE przez cały cykl",
    "SERM (Nolvadex 20 mg/dzień) dla zapobiegania ginekomastii — AI NIE skuteczny ze względu na atypową aktywność ER",
    "Próby ALT/AST co 2-3 tygodnie, >3x norma górna = NATYCHMIASTOWE przerwanie",
    "PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowe dla recovery HPTA"
  ],
  "expectations": [
    {"label": "Pierwszy tydzień", "body": "Ostry przyrost masy 2-4 kg (woda + glikogen). Wzrost siły wyraźny, pompa treningowa dramatyczna."},
    {"label": "Tydzień 3-4", "body": "Maksymalny efekt bulkingowy. 8-12 kg całkowitego przyrostu. ALT/AST 3-5x norma górna często manifestuje się tutaj — OBOWIĄZKOWE przerwanie cyklu na koniec tygodnia 4."},
    {"label": "Post-cykl", "body": "Utrata masy 30-50% (utrata wody w ciągu 2-3 tygodni po zatrzymaniu). Czysta masa zachowana ~4-6 kg udokumentowana. Recovery wątrobowy 4-8 tygodni."}
  ],
  "quality": {
    "pure": [
      "Anadrol-50 (Alaven/Meda Pharmaceuticals) oryginalna tabletka Rx, 50 mg",
      "Tabletka UGL: źródło testowane HPLC obowiązkowe — Anadrol często fałszowany (zastępowanie Dianabolem lub Methylstenbolonem)"
    ],
    "caution": [
      "Hepatotoksyczność (wzrost ALT/AST 5-10x najczęstszy ostry efekt)",
      "Retencja wody (\"twarz księżyca\", definicja mięśni utracona)",
      "Wzrost ciśnienia krwi (często >140/90, ze względu na retencję wody + nerkowe AKI)",
      "Zaburzenia nastroju: agresja (\"Anadrol rage\"), irytacja, depresyjne załamania",
      "Zaburzenia lipidowe dramatyczne: HDL do 60% spadek, wzrost LDL"
    ],
    "avoid": [
      "Jakiekolwiek istniejące zaburzenia wątrobowe (stłuszczenie wątroby, zapalenie, podwyższone ALT/AST baseline) BEZWZGLĘDNE przeciwwskazanie",
      "Jednoczesny alkohol, NSAID, paracetamol ściśle zakazane",
      "Ryzyko sercowo-naczyniowe (rodzinna historia, wysokie LDL, nadciśnienie) bezwzględne przeciwwskazanie",
      "Stosowanie przez kobiety (skrajnie szybka wirylizacja ze względu na wysoką aktywność androgenną)",
      "Planowane ojcostwo (supresja HPTA wymaga miesięcy-lat na odzyskanie)",
      "Czerwienica (paradoksalnie — własna aktywność ER może powodować czerwienicę)"
    ]
  },
  "interactions": [
    "Nolvadex (Tamoksyfen) 20 mg/dzień: zapobieganie ginekomastii (SERM skuteczny, AI NIE)",
    "TUDCA 1000-1500 mg/dzień + NAC 1800 mg/dzień: wsparcie wątroby obowiązkowe",
    "Stack z bazą testosteronu: synergistyczny bulking, ALE łączny stres wątrobowy drastyczny",
    "Warfaryna: efekt antykoagulacyjny może być wzmocniony, ścisły monitoring INR",
    "Inne AAS 17α-alkilowane (Dianabol, Superdrol, Winstrol) jednoczesne stosowanie to śmiertelna kombinacja"
  ],
  "studies": [
    {"title": "FDA Anadrol-50 prescribing information", "authors": "FDA / Alaven-Meda Pharmaceuticals", "journal": "DailyMed NDA 12-535 (oxymetholone label)", "pmid": null},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"},
    {"title": "Drug-induced hepatotoxicity", "authors": "Pavlatos AM, Fultz O, Monberg MJ, Vootkur A.", "journal": "Am J Health Syst Pharm. 2001;58(20):1929-37.", "pmid": "11329221"},
    {"title": "Metabolism of anabolic androgenic steroids", "authors": "Schänzer W.", "journal": "Clin Chem. 1996;42(7):1001-20.", "pmid": "8616181"},
    {"title": "Effects of oxymetholone therapy in HIV-infected men", "authors": "Hengge UR, Stocks K, Faulkner S et al.", "journal": "J Infect Dis. 2003;188(11):1628-34.", "pmid": "14639533"}
  ],
  "faq": [
    {"q": "Dlaczego powoduje retencję wody, skoro nie aromatyzuje?", "a": "Grupa 2-hydroksymetylenowa Oksymetholonu zapewnia bezpośrednią aktywność agonisty ER — całkowicie omija enzymy CYP19 i aktywuje receptory estrogenowe bezpośrednio. Stąd antyaromatazowy (Anastrozol, Letrozol) jest TUTAJ BEZUŻYTECZNY; tylko SERM (Nolvadex, Raloksyfen) blokuje receptory ER bezpośrednio. To jest paradoksalny efekt specyficzny dla Anadrolu."},
    {"q": "Czy naprawdę można przybrać 10-15 kg w 4 tygodnie?", "a": "Tak, ALE zdecydowana większość (60-70%) to woda i glikogen, NIE czyste mięśnie. Po końcu cyklu spodziewaj się utraty 30-50% masy w ciągu 2-3 tygodni (utrata wody). Czysta masa zachowana 4-6 kg udokumentowana z odpowiednim treningiem i PCT. Liczba \"10-15 kg\" jest realistyczna, ale końcowy wynik NIE jest taki."},
    {"q": "Dlaczego FDA zatwierdziła, skoro tak toksyczny?", "a": "Zatwierdzone wskazanie FDA (niedokrwistość aplastyczna) jest ratujące życie — stosunek korzyść-ryzyko jest korzystny u tych pacjentów. Off-label użycie w kulturystyce NIE jest częścią zatwierdzenia FDA; u zdrowych młodych osób 50-100 mg/dzień przez 4 tygodnie może powodować zagrażającą życiu hepatotoksyczność (Pavlatos 2001 PMID 11329221 raporty DILI)."},
    {"q": "Anadrol vs Dianabol — który jest gorszy?", "a": "Hepatotoksyczność z grubsza równa (oba top-2 wśród AAS 17α-alkilowanych). Profil aromatyzacji: Dianabol klasyczny CYP19-aromatyzujący (AI skuteczny), Anadrol bezpośredni agonista ER (tylko SERM działa). W efekcie bulkingowym Anadrol szybszy i bardziej dramatyczny, ale Dianabol zachowuje więcej mięśni po zakończeniu cyklu. Żaden nie jest zalecany."},
    {"q": "Czy unikać Anadrolu ze względu na \"rage\"?", "a": "Tak, efekty psychologiczne (agresja, irytacja, ataki wściekłości) są najbardziej intensywne z Anadrolem wśród AAS. Kanayama 2009 PMID 19922565 kohort: 70% użytkowników Anadrolu zgłasza wyraźne zaburzenia nastroju. Jeśli predyspozycja psychiatryczna (depresja, choroba dwubiegunowa, zaburzenia lękowe) jest obecna, bezwzględnie przeciwwskazany."}
  ],
  "related": ["dianabol-info", "superdrol", "testosterone-info", "trenbolone-info", "nandrolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 50, "medium": 75, "high": 100},
    "unit": "mg/dzień (doustnie, 1-2x podzielone)",
    "note": "Maksimum 4 tygodnie cyklu, NIGDY dłużej. 50-100 mg/dzień, 1-2x podzielone (krótki okres półtrwania). TUDCA 1000-1500 mg/dzień + NAC 1800 mg/dzień przez cały cykl. ALT/AST co 2-3 tygodnie. SERM (Nolvadex 20 mg/dzień) zapobieganie ginekomastii. PCT 4-6 tygodni (Clomid + Nolvadex)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, ALP, bilirubina (bezpośrednia + całkowita), albumina, INR. Plus: lipidogram (LDL/HDL/TG), panel hormonów (Total T, Free T, E2, LH, FSH, SHBG, Prolaktyna), HbA1c, funkcja nerek, CBC + hematokryt, dziennik ciśnienia.",
      "purpose": "Baseline wątrobowy BEZWZGLĘDNIE krytyczny ze względu na ekstremalny stres first-pass 17α-metylu. Jakikolwiek wzrost ALT/AST lub oznaki stłuszczenia wątroby = bezwzględne przeciwwskazanie."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Koniec tygodnia 2 i koniec tygodnia 3 (podwójna kontrola ze względu na krótki cykl)",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, bilirubina. Plus: lipidogram (HDL może drastycznie spaść), ciśnienie krwi (dom, codziennie), hematokryt (ryzyko czerwienicy), monitor ginekomastii (wrażliwość piersi + badanie wzrokowe).",
      "purpose": "Detekcja awaryjna KRYTYCZNA. ALT/AST >3x norma górna lub wzrost bilirubiny = NATYCHMIASTOWE przerwanie. BP >150/95 redukcja dawki lub stop. Objaw ginekomastii → zwiększenie dawki SERM."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Od ostatniej tabletki +1-2 dni start PCT. PCT tydzień 4 i 8-12 kontrole recovery wątrobowego + HPTA.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, panel wątrobowy (recovery ALT/AST/GGT/bilirubiny), lipidogram (recovery HDL), CBC.",
      "purpose": "Weryfikacja recovery WĄTROBOWEGO bezwzględnie krytyczna. Jeśli ALT/AST nie normalizuje się w 12 tygodni, konsultacja hepatologa OBOWIĄZKOWA. Recovery HPTA zazwyczaj 8-16 tygodni."
    },
    "cruise": {
      "label": "Na cruise (cruise Anadrolem NIE ISTNIEJE — ściśle cykliczny)",
      "timing": "Anadrol na cruise ZABRONIONY — obowiązkowe przerwanie po 4 tygodniach. Jeśli ktoś próbuje cruise, niewydolność wątrobowa w krótkim czasie.",
      "markers": "N/A — cruise Anadrolem nie standardowy, nie zalecany w żadnym protokole.",
      "purpose": "Anadrol jest używany wyłącznie w krótkim (maks 4 tygodnie) cyklu bulkingowym. Ciągłe stosowanie powoduje fatalne konsekwencje wątrobowe."
    }
  }
}
