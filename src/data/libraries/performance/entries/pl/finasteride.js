// Finasteryd (Propecia / Proscar) — selektywny inhibitor 5α-reduktazy typu II.
// FDA Proscar 1992 BPH, Propecia 1997 AGA. Profilaktyka wypadania włosów w AAS.
// Źródła: FDA Propecia/Proscar SmPC, Kaufman 1998 PMID 9821414,
// Irwig 2012 PFS PMID 22366892, Mella 2010 PMID 20842055.

export default {
  "id": "finasteride",
  "name": "Finasteryd (Propecia / Proscar)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Selektywny inhibitor 5α-reduktazy typu II. Zatwierdzony przez FDA (Proscar 1992 BPH 5 mg, Propecia 1997 AGA 1 mg). W AAS: supresja DHT na skórze głowy w celu spowolnienia wypadania włosów u genetycznie predysponowanych użytkowników. 5AR typu I nie zahamowany.",
  "description": "Finasteryd (Propecia 1 mg, Proscar 5 mg) jest selektywnym inhibitorem 5α-reduktazy typu II o strukturze 4-aza-steroidu, opracowanym przez Merck i zatwierdzonym przez FDA w 1992 roku jako Proscar 5 mg do leczenia łagodnego rozrostu prostaty (BPH), a następnie w 1997 roku jako Propecia 1 mg do leczenia łysienia androgenowego (AGA, łysienie typu męskiego). Trial prospective Kaufman 1998 (PMID 9821414) udokumentował, że 1 mg/dzień finasterydu spowalnia progresję wypadania włosów typu męskiego o ~83% i generuje regrowth w ~48% (skuteczniejszy w obszarze 'vertex' niż w czołowej linii włosów). W kontekście AAS, finasteryd głównie hamuje wtórną konwersję DHT z wzrostu testosteronu (~70% supresji DHT na skórze głowy przy 1 mg/dzień) — u genetycznie predysponowanych użytkowników o ryzyku AGA przyspieszenie wypadania włosów można złagodzić. **NIE** pomaga w przyspieszeniu wypadania włosów napędzanego trenbolonem (Tren NIE jest substratem 5AR) lub anadrolem (również nie). 5AR typu I (DHT skóry/sebumu) **nie** jest zahamowany — tutaj potrzebny jest dwojaki inhibitor dutasteryd. Listing WADA: pod S5 (modulator hormonów) — banned w konkurencji, ale TUE możliwe we wskazaniach klinicznych. Zespół post-finasteryd (PFS) jest kontrowersyjny w ~1-2% incydencji (Irwig 2012, PMID 22366892).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Selektywny inhibitor 5α-reduktazy typu II, ~70% supresji DHT na skórze głowy przy 1 mg/dzień"},
    {"label": "Dawkowanie (profilaktyka wypadania włosów AAS)", "value": "1 mg/dzień (Propecia) ciągle podczas cyklu"},
    {"label": "Okres półtrwania", "value": "~6 h parent, efekt farmakodynamiczny 24+ h hamowanie enzymu"},
    {"label": "Początek działania", "value": "Redukcja DHT mierzalna 24 h, stabilizacja włosów 3-6 miesięcy"},
    {"label": "Status prawny", "value": "FDA + EMA Rx, HU + PL zarejestrowany, WADA allowed (nie 5AR-banned)"}
  ],
  "mechanism": "Finasteryd jest związkiem 4-aza-steroidowym, który kompetycyjnie hamuje enzym 5α-reduktazy typu II (Ki ~5 nM). 5α-reduktaza konwertuje testosteron do dihydrotestosteronu (DHT) — w tkankach wrażliwych na DHT (prostata, skóra głowy, gruczoły łojowe wytwarzające sebum, neurony obwodu libido), DHT aktywuje AR (~10-30× powinowactwo wiązania) silniej niż testosteron. Istnieją dwie izoformy: typ I (dominujący w skórze/produkcji sebumu) i typ II (dominujący w prostata + skóra głowy + mieszek włosowy). Finasteryd hamuje tylko typ II → ~70% supresji DHT skóry głowy, ~85% supresji DHT prostaty, ale skóra/sebum tylko ~30% (typ I dominuje). Przy 5 mg/dzień, podobna supresja DHT, stosowany w wskazaniu BPH (vs 1 mg/dzień dawka Propecia dla AGA). Efekt odwracalny po zaprzestaniu: DHT wraca do baseline w 2 tygodnie. Listing WADA: S5 modulator hormonów — banned w konkurencji, ale dozwolony z TUE klinicznym.",
  "legalStatus": "USA: FDA-approved Proscar 1992 BPH (5 mg), Propecia 1997 AGA (1 mg). UE: zatwierdzony przez EMA. HU: zarejestrowany (Propecia, Proscar Rx). PL: zarejestrowany. WADA: S5 modulator hormonów — banned w konkurencji (możliwy TUE we wskazaniach klinicznych), poza-konkurencji allowed.",
  "onsetTime": "Redukcja DHT 24 h, stabilizacja włosów 3-6 miesięcy",
  "halfLife": "~6 h parent, efekt farmakodynamiczny 24+ h",
  "halfLifeActive": "~6 h (parent), ale 24+ h odwrócenie hamowania enzymu zależy od nowej syntezy",
  "interactionsWith": ["dutasteride", "ru58841", "testosterone-info", "anavar-info"],
  "aromatization": "Nie aromatyzuje — kompetycyjny inhibitor 5α-reduktazy typu II; hamuje konwersję DHT, NIE wpływa bezpośrednio na oś estrogenu (ale wtórne podniesienie E2 może podążać za wzrostem testosteronu).",
  "hepatotoxicity": "Niska — niesteroidowa w mechanizmie ale struktura 4-aza-steroidu. Rzadkie raporty przypadków cholestazy (FDA Propecia label). Zespół post-finasteryd (PFS) — kontrowersyjna sekwela długoterminowa zaburzeń nastroju/seksualnych mediowana neurosteroidem ~1-2% incydencji (Irwig 2012 PMID 22366892).",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS, inhibitor 5AR)",
  "bindingAffinity": "Typ II 5AR Ki ~5 nM (kompetycyjny), Typ I 5AR ~100× mniej silny. AR receptor minimalne wiązanie.",
  "detectionWindow": "Wcześniej na liście jako środek maskujący 5AR; usunięty z listy WADA 2009 — obecnie allowed.",
  "benefits": [
    "Kontekst AAS: ~70% supresji DHT skóry głowy → łagodzenie genetycznie predysponowanego przyspieszenia AGA",
    "Trial 5-letni Kaufman 1998: ~83% spowolnienia progresji AGA, ~48% regrowth vertex",
    "Odwracalny (DHT wraca w 2 tygodnie)",
    "FDA + EMA Rx pharma-grade globalnie dostępny",
    "Niedrogi (~€10-25/opakowanie generyczny Propecia 1 mg)"
  ],
  "quickStart": [
    "Pre-treatment baseline bloodwork: total/wolny Test, DHT surowicy, E2, lipidogram",
    "Start: 1 mg/dzień (Propecia) rano, jedzenie indyferentne",
    "Standardowy protokół cyklu: ciągle 1 mg/dzień przez cały cykl AAS + recovery",
    "Wskazanie BPH (NIE wypadanie włosów AAS): 5 mg/dzień Proscar, zbyt wysokie dla kontekstu AAS",
    "Powtórz badanie 4-6 tygodni później: potwierdź ~70% redukcji DHT surowicy",
    "Stack tylko-Tren: finasteryd NIE pomaga (Tren nie jest substratem 5AR) — wypadanie włosów Tren ma niszowy mechanizm"
  ],
  "expectations": [
    {"label": "Tydzień 1", "body": "Redukcja DHT surowicy mierzalna (~50-70%). Przyspieszenie wypadania włosów ustępuje w 1-2 tygodnie — ale istniejące opadłe włosy NIE regrow natychmiast."},
    {"label": "Miesiące 1-3", "body": "Linienie włosów stabilizuje się. Może wystąpić 'faza shedding' w pierwszych tygodniach (uwolnienie telogen effluvium, paradoksalne zwiększone linienie początkowo — mija w tygodniach 4-8)."},
    {"label": "Miesiące 3-6", "body": "Regrowth obserwowalny (dominanto w obszarze vertex). Stabilne ustanowienie linii włosów. Wzrost Test może prowadzić do wtórnego podniesienia E2 surowicy (blokada DHT → przesunięcie szlaku konwersji)."},
    {"label": "Miesiąc 12", "body": "Plateau maksymalnego efektu. Trial 5-letni Kaufman 1998: ~80% sustained zapobieganie progresji. Jeśli zatrzymane → DHT wraca w 2 tygodnie, przyspieszenie wypadania włosów wraca szybko."}
  ],
  "quality": {
    "pure": [
      "Merck Propecia 1 mg blister, Rx pharma-grade (US + UE)",
      "Merck Proscar 5 mg (wskazanie BPH, nie wypadanie włosów AAS)",
      "Generyczny finasteryd 1 mg / 5 mg (Sandoz, Teva, Ratiopharm — UE)",
      "Indyjski generyk (Sun Pharma Finpecia 1 mg, Cipla Finax)",
      "UGL liquid finasteryd: rzadki, zalecana alternatywa pharma-grade Rx"
    ],
    "caution": [
      "Skutki uboczne seksualne: spadek libido, dysfunkcja erekcji (~3-8% u użytkowników Propecia), zmniejszona objętość ejakulatu — najczęstszy skutek uboczny zależny od dawki",
      "Zmiana nastroju: udokumentowane ryzyko objawów depresyjnych (Singh 2014); przeciwwskazany u użytkowników z historią depresji",
      "PFS (zespół post-finasteryd): ~1-2% incydencji długoterminowo, utrzymująca się dysfunkcja seksualna + poznawcza + nastroju nawet po zaprzestaniu finasterydu — kontrowersyjne, mediowane neurosteroidem (Irwig 2012)",
      "Interpretacja screening PSA: finasteryd obniża PSA o ~50%, confounder w screening raka prostaty",
      "Interakcje cytochromu: metabolizm CYP3A4, małe ryzyko interakcji"
    ],
    "avoid": [
      "Partnerka w ciąży / karmienie piersią (Kategoria ciąży X — zaburzenie rozwoju męskiego płodu z deprywacji testosteron-DHT; nie dawkować w pobliżu kobiet w ciąży)",
      "Historia depresji (ryzyko dysfunkcji nastroju)",
      "Mutacja AR / AIS (Zespół niewrażliwości androgenowej) historia rodzinna",
      "Użytkownicy nastoletni (<18 lat, nie inicjować blokady 5AR podczas rozwoju)",
      "Stack tylko-Tren (nie działa na substrat 5AR)"
    ]
  },
  "interactions": [
    "Dutasteryd: nie można łączyć (nakładający się mechanizm, addytywne skutki uboczne)",
    "Cykle AAS z testosteronem-base: standardowa profilaktyka wypadania włosów",
    "Stack trenbolon/anadrol: finasteryd NIE pomaga (nie substrat 5AR)",
    "Saw palmetto (ziołowy inhibitor 5AR): możliwe łączenie dla łagodnej synergii, ale ryzyko skutków ubocznych podobnych do PFS kumuluje się",
    "Inhibitory PDE5 (sildenafil, tadalafil): pierwszorzędny adjuwant dla seksualnych skutków ubocznych finasterydu"
  ],
  "studies": [
    {"title": "Viable terminal scalp hair follicles constitute a necessary and sufficient biological end-organ that conditions clinical efficacy of finasteride 1mg.", "authors": "Van Neste D", "journal": "Skin Res Technol", "pmid": "31206839"},
    {"title": "Persistent Sexual and Psychological Symptoms After Finasteride Discontinuation: A Cross-Sectional Observational Study.", "authors": "Jędrzejczyk P, Ząbkowski T, Ratajski J", "journal": "J Clin Med", "pmid": "42074750"},
    {"title": "5-Alpha reductase inhibitors in androgenetic alopecia: Shifting paradigms, current concepts, comparative efficacy, and safety.", "authors": "Dhurat R, Sharma A, Rudnicka L, Kanti V, Vañó-Galván S, Pirmez R, Sinclair R, Doolan B, Tosti A", "journal": "Dermatol Ther", "pmid": "32279398"},
    {"title": "Long-term (5-year) multinational experience with finasteride 1 mg in the treatment of men with androgenetic alopecia", "authors": "Kaufman KD, Rotonda J, Shah AK, Meehan AG.", "journal": "Eur J Dermatol. 2008;18(4):400-406.", "pmid": "18573713"}
  ],
  "faq": [
    {"q": "Co finasteryd chroni obok AAS?", "a": "Finasteryd chroni przed **łagodzeniem przyspieszenia** AGA (łysienia androgenowego) genetycznie predysponowanego, NIE pełną prewencją. Mechanizm: cykl AAS podnosi egzogenny testosteron → wtórne podniesienie DHT skóry głowy → przyspieszenie AGA na podatnych receptorach mieszków włosowych. Finasteryd hamuje konwersję DHT skóry głowy o ~70% → progresja AGA spowalnia (Kaufman 1998: ~83% sustained zapobieganie progresji przez 5 lat). WAŻNE: u genetycznie nie-predysponowanych użytkowników (brak rodzinnego AGA, brak baseline thinning), finasteryd NIE jest potrzebny — nie ma czego prewencyjnie chronić. Norwood scale 1-2 baseline w wieku 25-30 wymaga wstępnej oceny — jeśli progresja Norwood 3+ podczas cyklu, wskazany start 1 mg/dzień finasterydu."},
    {"q": "Trenbolon i anadrol — czy finasteryd działa?", "a": "**NIE**. Finasteryd hamuje tylko konwersję testosteron → DHT (substrat 5AR). Trenbolon strukturalnie NIE jest substratem 5AR — wiąże się bezpośrednio z AR, a wypadanie włosów indukowane Tren działa przez inny mechanizm (bezpośrednia stymulacja AR + szlak zapalny lokalny). Anadrol (oxymetholon) również NIE jest substratem 5AR — również bezpośrednie powinowactwo AR. Na stackach tylko-Tren/anadrol finasteryd **NIE pomaga** — przyspieszenie wypadania włosów tutaj jest mechanizmem niszowym. Topical minoksydyl (5%) może być adjuwantem, lub unikanie stacków Tren u genetycznie predysponowanych użytkowników."},
    {"q": "Zespół post-finasteryd (PFS) — jak realny?", "a": "Kontrowersyjny, ALE rosnące evidence. Prospective study Irwig 2012 (PMID 22366892) u 71 młodych mężczyzn udokumentował utrzymujące się skutki uboczne seksualne indukowane finasterydem — pierwsza duża dokumentacja kliniczna PFS. Mechanizm: zakłócenie szlaku neurosteroidu (alopregnanolon, 3α-androstandiol) — 5AR uczestniczy w syntezie steroidów mózgowych, a chroniczne hamowanie może powodować zmiany szlaków GABAergicznych i serotoninowych. Incydencja: ~1-2% w badaniach epidemiologicznych, ale underreporting prawdopodobne. Objawy mogą utrzymywać się 6-12 miesięcy po zaprzestaniu finasterydu — utrzymująca się dysfunkcja seksualna, depresja, anhedonia, 'mgła' poznawcza. **Łagodzenie ryzyka**: pre-treatment screen historii depresji, niska-dawka start (0,5 mg co 2 dni), bloodwork baseline profilu neurosteroidu (DHEA, monitor alopregnanolonu); jeśli wystąpienie objawów → NATYCHMIASTOWE zaprzestanie (NIE redukcja dawki)."},
    {"q": "Czy seksualne skutki uboczne są odwracalne?", "a": "Generalnie TAK — po zaprzestaniu finasterydu, libido i jakość erekcji wracają u ~95-98% użytkowników w ciągu 6-12 tygodni. Czas odwracalności: DHT do baseline w 2 tygodnie, efekty neurosteroidu ~6-12 tygodni, recovery szlaku mózgowego 3-6 miesięcy. U użytkowników dotkniętych PFS (~1-2%), skutki uboczne są utrzymujące się — dysfunkcja seksualna + nastroju trwa po zaprzestaniu, ponieważ zakłócenie szlaku mózgowego-neurosteroidu nie ma rebound recovery. Łagodzenie ryzyka: pre-treatment ocena baseline (libido baseline self-rating, IIEF-5 score jakości erekcji), miesięczny self-monitor; jeśli wystąpienie objawów → NATYCHMIASTOWE zaprzestanie, **NIE** redukcja dawki (stabilizacja szlaku mózgowego nie odpowiada na częściową dawkę)."},
    {"q": "Topical finasteryd — lepszy wybór?", "a": "Emerging research-emphasized alternative — topical finasteryd 0,25%-1% solution codziennie aplikowany na skórę głowy, ~70% supresji DHT skóry głowy podobna do 1 mg doustnie, ale znacznie niższa ekspozycja systemowa (~10-15% absorpcji systemowej vs 100% doustnej). Przewidywanie: ryzyko PFS niższe, seksualne skutki uboczne rzadsze. Wady: tylko kompoundowany (BRAK zatwierdzenia FDA), droższy (~€100-200/miesiąc UGL/apteka kompoundująca), kompromis compliance aplikacji (codzienna aplikacja na skórę głowy). Nowoczesne kliniki AGA emerging trend zaleca najpierw topical. W kontekście AAS: jeśli użytkownik unikający ryzyka PFS (historia depresji, akcent seksualny), topical warto eksplorować."}
  ],
  "related": ["dutasteride", "ru58841", "testosterone-info", "anavar-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.5, "medium": 1, "high": 1},
    "unit": "mg / dzień (doustnie, jedzenie indyferentne)",
    "note": "Standardowa profilaktyka wypadania włosów AAS: 1 mg/dzień (Propecia) ciągle przez cykl. Użytkownik unikający ryzyka PFS: 0,5 mg co 2 dni (alternatywa niskiej dawki). NIE na stacku tylko-Tren / tylko-anadrol (nie działa). Topical 0,25-1% solution alternatywa nisza AAS (kompoundowana, niższe skutki uboczne systemowe)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed startem finasterydu",
      "timing": "Start cyklu AAS lub początek przyspieszenia AGA",
      "markers": "Total Testosteron, Wolny Testosteron, DHT surowica (baseline confirm cel skuteczności), E2, SHBG, lipidogram, ALT/AST, screen depresji (PHQ-9 baseline), IIEF-5 baseline jakości erekcji.",
      "purpose": "Baseline + stratifikacja ryzyka skutków ubocznych. Pre-treatment Norwood-scale photo + miesięczne zdjęcia do śledzenia progresji włosów."
    },
    "midCycle": {
      "label": "Finasteryd tygodnie 4-6",
      "timing": "Start finasterydu +4-6 tygodni",
      "markers": "DHT surowica (potwierdź ~70% redukcji), Total Test (wzrost oczekiwany), E2 (wtórne podniesienie), powtórzenie IIEF-5 (monitor seksualny), PHQ-9 (monitor nastroju).",
      "purpose": "Monitor skuteczności + skutków ubocznych. Jeśli redukcja DHT <50% → sprawdzenie compliance; jeśli skutek uboczny seksualny/nastroju → redukcja dawki (0,5 mg co 2 dni) lub zaprzestanie."
    },
    "postCycle": {
      "label": "Zaprzestanie finasterydu",
      "timing": "Ostatnia dawka +2-4 tygodnie (monitor recovery)",
      "markers": "DHT surowica (recovery baseline), Total Test, E2, IIEF-5, PHQ-9.",
      "purpose": "Potwierdź: DHT wraca do baseline w 2 tygodnie. Recovery skutków ubocznych seksualnych + nastroju w 6-12 tygodni — jeśli utrzymujące się, screen PFS."
    },
    "cruise": {
      "label": "Chronic AAS cruise + finasteryd ciągle",
      "timing": "1 mg/dzień ciągle",
      "markers": "Corocznie: DHT, Test, lipidogram, IIEF-5, PHQ-9. Screen PSA (finasteryd obniża PSA o 50% — różnica interpretacji screening raka prostaty).",
      "purpose": "Monitor profilaktyki wypadania włosów chronic AAS cruise + monitor ryzyka PFS."
    }
  }
}
