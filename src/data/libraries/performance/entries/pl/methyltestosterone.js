// FDA-approved Rx (Android, Methitest, Testred). Sources: FDA Methitest/
// Android prescribing information (DailyMed), Pope-Kanayama 2014 PMID
// 24423981, Hartgens-Kuipers 2004 PMID 15233599, Yesalis 1989 PMID 2685207
// (early MT hepatotoxicity), Westaby 1980 PMID 6109024 (DILI case series).

export default {
  "id": "methyltestosterone",
  "name": "Methyltestosterone",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "17α-metylo-testosteron, PIERWSZY zsyntetyzowany doustny AAS (Ruzicka 1935). Zatwierdzony przez FDA Rx (Android, Methitest, Testred) na hipogonadyzm. Wysoka hepatotoksyczność + atypowa silna aromatyzacja metyloestradiolu → przestarzały w kulturystyce, nowoczesne alternatywy (Anavar/Dianabol) preferowane.",
  "description": "Methyltestosterone to PIERWSZY zsyntetyzowany doustny AAS 17α-alkilowany, zsyntetyzowany w 1935 r. przez Leopolda Ruzicki i Adolfa Butenandta (Nagroda Nobla 1939). Zatwierdzony przez FDA Rx jako Android, Methitest, Testred na męski hipogonadyzm (10-50 mg/dzień) i — dawniej — raka piersi. Stosunek anaboliczno-androgenny ~100:50 (zasadniczo wartości testosteronu, ponieważ grupa 17α-metylowa zapewnia tylko doustną stabilność bez zmiany powinowactwa AR). Grupa 17α-metylowa → WYSOKA hepatotoksyczność (Westaby 1980 PMID 6109024 seria przypadków DILI). AROMATYZUJE — a jego metabolit 17α-metyloestradiol jest PARADOKSALNIE SILNIEJSZY jako estrogen niż zwykły E2, ponieważ grupa 17α-metylowa zapobiega wątrobowej metabolicznej inaktywacji estradiolu. Przestarzały w kulturystyce (dostępne lepsze AAS 17α-alkilowane: Anavar z łagodniejszą hepatotoksycznością, Dianabol z większą siłą anaboliczną). Zakaz WADA cały rok.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Agonista AR, 17α-metyl-T, AROMATYZUJE (metylE2)"},
    {"label": "Okres półtrwania", "value": "4 godziny (doustnie)"},
    {"label": "Anaboliczny:Androgenny", "value": "100:50"},
    {"label": "Początek", "value": "1 h (doustnie, sublingwalnie też)"},
    {"label": "Status prawny", "value": "FDA Rx (Android, Methitest, Testred), Schedule III"}
  ],
  "mechanism": "Agonista AR 17α-metylo-testosteron. Grupa 17α-metylowa zapewnia biodostępność doustną (~70% oporność first-pass wątrobowy), ALE NIE zwiększa powinowactwa AR — zasadniczo profil anaboliczny testosteronopodobny. AROMATYZUJE przez enzym CYP19 do 17α-metyloestradiolu, który wytwarza WYŻSZY efekt estrogenny niż zwykły E2 ze względu na oporność na inaktywację metaboliczną (paradoksalne wzmocnienie). Grupa 17α-metylowa → cholestatyczna hepatotoksyczność (Westaby 1980 PMID 6109024 seria przypadków DILI).",
  "legalStatus": "USA: zatwierdzony przez FDA Rx Android (Pfizer), Methitest, Testred. Schedule III kontrolowana substancja (DEA). UE: Rx rzadko (DE generic Methyltestosteron). HU/PL: nie zarejestrowany. Zakaz WADA cały rok (S1.1.a).",
  "onsetTime": "1 h (doustnie, sublingwalnie szybciej)",
  "halfLife": "4 h (doustnie)",
  "halfLifeActive": "4 h",
  "interactionsWith": ["tudca", "tamoxifen", "warfarin", "alcohol"],
  "aromatization": "Tak — substrat CYP19, metabolit 17α-metyloestradiol (paradoksalnie silniejszy efekt estrogenny niż zwykły E2 ze względu na metaboliczną oporność); klinicznie wysokie ryzyko ginekomastii (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Wysoka — grupa 17α-metylowa powoduje cholestatyczną hepatotoksyczność, wzrost ALT/AST 3-5x częsty przy cyklu 4+ tygodni, DILI case-reported (Westaby 1980 PMID 6109024, Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:50",
  "bindingAffinity": "Umiarkowane powinowactwo do AR (~50-60% vs testosteron in vitro).",
  "detectionWindow": "Metabolity methyltestosteronu w moczu 4-6 tygodni (akredytowane WADA GC-MS/LC-MS/MS).",
  "benefits": [
    "Znaczenie historyczne: pierwszy zsyntetyzowany doustny AAS 17α-alkilowany (1935)",
    "Zatwierdzony przez FDA Rx na hipogonadyzm (Android, Methitest)",
    "Możliwe dawkowanie sublingwalne (~30% szybszy początek, wyższy peak)",
    "Profil anaboliczny testosteronopodobny (NIE słabszy niż związek macierzysty)"
  ],
  "quickStart": [
    "NOWOCZESNE ALTERNATYWY PREFEROWANE: Anavar (łagodniejsza hepatotoksyczność) lub Dianabol (większa siła anaboliczna) zastępują",
    "EKSTREMALNA HEPATOTOKSYCZNOŚĆ — maks 4 tygodnie ciągłego cyklu",
    "TUDCA 1000 mg/dzień + NAC 1800 mg/dzień OBOWIĄZKOWE",
    "SERM (Nolvadex 20 mg/dzień) na zapobieganie ginekomastii + AI (Anastrozol 0,5 mg E3D) na kontrolę E2",
    "PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowe"
  ],
  "expectations": [
    {"label": "Pierwszy tydzień", "body": "Efekt ostry minimalny. Wzrost siły wyczuwalny po 3-5 dniach. Dawkowanie sublingwalne daje szybszy początek."},
    {"label": "Tydzień 3-4", "body": "Przyrost masy 2-4 kg (z paradoksalną retencją wody z metylE2). ALT/AST 3-5x norma górna — OBOWIĄZKOWE przerwanie na koniec tygodnia 4."},
    {"label": "Post-cykl", "body": "Utrata masy 30-50% z utraty wody. Recovery wątrobowy 4-8 tygodni. Recovery HPTA 8-12 tygodni."}
  ],
  "quality": {
    "pure": [
      "Pfizer Android 10 mg lub Methitest 25 mg kapsułka (USA Rx)",
      "Tabletka Methitest 10 mg (DailyMed-listed Rx)",
      "Tabletka UGL: dziś przestarzała, rzadko produkowana (ze względu na lepsze alternatywy)"
    ],
    "caution": [
      "Hepatotoksyczność (wzrost ALT/AST 3-5x częsty)",
      "Żółtaczka cholestatyczna (Westaby 1980 PMID 6109024 seria przypadków)",
      "Ginekomastia (paradoksalnie napędzana metylE2)",
      "Retencja wody i zaburzenia nastroju",
      "Zaburzenia lipidowe: spadek HDL umiarkowany-wysoki"
    ],
    "avoid": [
      "Jakiekolwiek istniejące zaburzenia wątroby BEZWZGLĘDNE przeciwwskazanie",
      "Jednoczesne stosowanie alkoholu, NSAID, paracetamolu ściśle zakazane",
      "Nowoczesne alternatywy preferowane (Anavar/Dianabol) — Methyltestosterone przestarzały",
      "Stosowanie przez kobiety (wysokie ryzyko wirylizacji)",
      "Więcej niż 4 tygodnie ciągłego cyklu"
    ]
  },
  "interactions": [
    "TUDCA + NAC obowiązkowe wsparcie wątroby",
    "Nolvadex (SERM): zapobieganie ginekomastii",
    "Anastrozol (AI): kontrola E2 ze względu na paradoksalną aromatyzację metylE2",
    "Inne AAS 17α-alkilowane razem = śmiertelna hepatotoksyczna kombinacja"
  ],
  "studies": [
    {"title": "FDA Methitest / Android prescribing information", "authors": "FDA / Pfizer", "journal": "DailyMed NDA 80-070 (methyltestosterone label)", "pmid": null},
    {"title": "Cholestatic hepatitis associated with anabolic steroid use", "authors": "Westaby D, Ogle SJ, Paradinas FJ, Randell JB, Murray-Lyon IM.", "journal": "Lancet. 1977;2(8032):262-3 (and follow-up 1980).", "pmid": "6109024"},
    {"title": "Anabolic-androgenic steroids and adolescents", "authors": "Yesalis CE, Streit AL, Vicary JR, Friedl KE, Brannon D, Buckley W.", "journal": "Pediatrician. 1989;16(1-2):42-50.", "pmid": "2685207"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"}
  ],
  "faq": [
    {"q": "Dlaczego przestarzały w kulturystyce?", "a": "Dwie lepsze alternatywy: (1) Anavar — podobna siła anaboliczna, znacznie łagodniejsza hepatotoksyczność, NIE aromatyzuje; (2) Dianabol — większa siła anaboliczna, podobna hepatotoksyczność. Jedyna \"zaleta\" Methyltestosterone to możliwość dawkowania sublingwalnego, ale to nie jest istotne z punktu widzenia peak-plasma. Nowoczesny protokół: jeśli potrzebny doustny AAS 17α-alkilowany, użyj Anavaru lub Dianabolu."},
    {"q": "Paradoks metyloestradiolu?", "a": "Methyltestosterone aromatyzuje do 17α-metyloestradiolu. Grupa 17α-metylowa jest oporna na wątrobową inaktywację 17β-HSD, więc metylE2 pozostaje w osoczu znacznie dłużej niż zwykły E2. Klinicznie Methyltestosterone ma CZĘSTE ryzyko ginekomastii — nawet przy niskich dawkach (25-50 mg/dzień), gdzie zwykły Test z równoważnym wzrostem E2 rzadko powoduje ginko. Anastrozol NIE JEST SKUTECZNY przeciwko metylE2 — tylko SERM (Nolvadex, Raloksyfen) blokuje wiązanie metylE2-ER."},
    {"q": "Zaleta dawkowania sublingwalnego?", "a": "Methyltestosterone może być dawkowany sublingwalnie (Methitest pod-językowo) — absorpcja jest ~30% szybsza niż doustnie, peak plasma ~50% wyższy. ALE znaczenie kliniczne jest niskie, bo grupa 17α-metylowa już stabilizuje związek macierzysty. Sublingwalne to często tylko efekt placebo + skarga na smak."},
    {"q": "Dlaczego synteza z 1935 r. jest ważna?", "a": "Leopold Ruzicka (Nagroda Nobla 1939 za pionierską pracę nad syntezą sterydów) i Adolf Butenandt jako pierwsi zsyntetyzowali testosteron (1935) i Methyltestosterone (1935) niemal jednocześnie. Methyltestosterone był PIERWSZYM doustnie biodostępnym AAS, co stworzyło klasę AAS 17α-alkilowanych. Wszystkie nowoczesne AAS 17α-alkilowane (Anavar, Dianabol, Anadrol, Winstrol, Superdrol, Halotestin, Turinabol) bazują na tej pionierskiej innowacji strukturalnej."},
    {"q": "Czy wskazanie FDA jest dziś ważne?", "a": "Tak — tabletki Methitest (Methyltestosterone 10 mg) i Testred (10 mg) są zatwierdzone przez FDA na męski hipogonadyzm w dawce 10-50 mg/dzień. Nowoczesne protokoły endokrynologiczne preferują jednak iniekcyjny ester testosteronu (Cypionat, Enantat) ze względu na dłuższy okres półtrwania + lepszą stabilność osocza + niższą hepatotoksyczność. Methyltestosterone Rx dziś jest marginalne — głównie dla pacjentów, którzy nie mogą lub nie chcą wstrzykiwać."}
  ],
  "related": ["dianabol-info", "anavar-info", "testosterone-info", "anadrol", "superdrol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 75},
    "unit": "mg/dzień (doustnie, 2-3x podzielone)",
    "note": "Maksimum 4 tygodnie cyklu. 25-75 mg/dzień, 2-3x podzielone (4 h okres półtrwania). TUDCA 1000 mg/dzień + NAC 1800 mg/dzień. SERM (Nolvadex 20 mg/dzień) na zapobieganie ginekomastii. PCT 4-6 tygodni. Nowoczesna alternatywa: Anavar/Dianabol preferowane."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Priorytet wątrobowy: ALT, AST, GGT, ALP, bilirubina (bezpośrednia + całkowita), albumina. Lipidogram. Panel hormonów. CBC. PSA (powyżej 30 lat).",
      "purpose": "Baseline wątrobowy kluczowy ze względu na grupę 17α-metylową."
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "Koniec tygodnia 2-3",
      "markers": "Wątrobowe: ALT, AST, GGT, bilirubina. Lipidogram (HDL), E2 (monitor ginekomastii), ciśnienie krwi.",
      "purpose": "ALT/AST >3x normalne = natychmiastowe przerwanie. Objaw ginekomastii → zwiększenie dawki SERM."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Ostatnia tabletka +1-2 dni start PCT. Tydzień 4 + 8-12 kontrole recovery.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, recovery wątrobowy + lipidowy.",
      "purpose": "Recovery wątrobowy 4-8 tygodni, recovery HPTA 8-12 tygodni."
    },
    "cruise": {
      "label": "Na cruise (NIE standardowy)",
      "timing": "Cruise Methyltestosterone atypowy ze względu na hepatotoksyczność",
      "markers": "N/A",
      "purpose": "TRT cruise Methyltestosterone dziś przestarzały — iniekcyjny ester Test preferowany."
    }
  }
}
