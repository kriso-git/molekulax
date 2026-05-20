// DHEA (Dehydroepiandrosteron) — Endogenny prekursor androgenu nadnerczowego.
// Cholesterol → Pregnenolon → 17-OH-Pregnenolon → DHEA → Androstendion → Test.
// USA: DSHEA-listed OTC suplement; UE: tylko na receptę.
// WADA S1.1.b Endogenne Steroidy Anaboliczno-Androgenne — wymieniony explicit.
// Źródła: Wiehle 2014 Phase II PMID 24913480, Morales 1994 PMID 7910820,
// Yen 1995 PMID 7726309, Allolio 1999 PMID 10468979.

export default {
  "id": "dhea",
  "name": "DHEA (Dehydroepiandrosterone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Endogenny prekursor androgenu nadnerczowego (cholesterol → DHEA → androstendion → testosteron). USA-OTC, UE-Rx. Lepsze dowody niż Pregnenolon, ale u młodych zdrowych mężczyzn minimalny wzrost Test + ~15-20% wzrost E2. WADA S1.1.b wymieniony (zakazany).",
  "description": "DHEA (Dehydroepiandrosteron) to endogenny steroid C19 produkowany w strefie siatkowatej kory nadnerczy — kluczowy węzeł prekursorowy androgenu w kaskadzie steroidogenezy. Szlak biosyntezy: cholesterol → pregnenolon (CYP11A1) → 17-OH-pregnenolon (CYP17A1) → DHEA (aktywność CYP17A1 17,20-liaza) → androstendion (3β-HSD) → testosteron (17β-HSD). Sam DHEA ma słabą aktywność androgenną, ALE na poziomie tkanek obwodowych (tkanka tłuszczowa, wątroba, prostata) enzymatyczna konwersja w kierunku Test + DHT + Estradiolu jest znacząca. **Status OTC suplementu jest nietypowy**: w USA DHEA jest swobodnie sprzedawany jako suplement diety pod ustawą DSHEA z 1994 r., podczas gdy w krajach członkowskich UE (HU, DE, FR, IT) jest regulowany jako lek wyłącznie na receptę. W kontekście AAS-PCT pozycjonowanie DHEA jest dyskusyjne: **Wiehle 2014 (PMID 24913480) badanie Phase II** wykazało, że u starszych mężczyzn (>50 lat, niskie bazowe DHEA-S) protokół 100 mg/dzień × 6 miesięcy produkuje 5-10% wzrost Test w surowicy, równolegle z ~15-20% wzrostem E2. **Morales 1994 (PMID 7910820) historyczne badanie replacement** pokazało podobne wyniki — ALE u młodych, zdrowych mężczyzn z normalnym bazowym DHEA-S wzrost Test jest minimalny lub zerowy, podczas gdy aromatyzacja inicjuje wzrost E2. Klinicznie: DHEA ma lepsze dowody niż Pregnenolon (krok bliższy androgenowi w kaskadzie), ALE u młodych użytkowników z normalną osią HPG korzyść jest ograniczona + ryzyko aromatyzacji pozostaje. **WADA S1.1.b Endogenne Steroidy Anaboliczno-Androgenne** wymieniony explicit — absolutnie zakazane dla sportowców rywalizujących (wykrywalność w moczu 7-14 dni po ostatniej dawce).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Endogenny prekursor steroidu C19 z nadnerczy → konwersja obwodowa androstendion → Test + E2"},
    {"label": "Dawkowanie", "value": "25-50 mg/dzień doustnie, rano (naśladowanie endogennego wzorca dobowego). Górny zakres AAS-PCT 50 mg."},
    {"label": "Okres półtrwania", "value": "DHEA macierzysty ~25 min; DHEA-S (siarczan, aktywny metabolit) ~10 godzin."},
    {"label": "Początek działania", "value": "Wzrost DHEA-S w surowicy 1-2 godziny po dawce doustnej; wsparcie osi Test mierzalne po 2-4 tygodniach przewlekłego dawkowania."},
    {"label": "Status prawny", "value": "USA: OTC suplement diety (DSHEA 1994); UE (HU, DE, FR, IT): lek wyłącznie na receptę. WADA S1.1.b zakazany."}
  ],
  "mechanism": "Biosynteza DHEA zaczyna się w strefie siatkowatej kory nadnerczy: cholesterol → pregnenolon (CYP11A1 odcinanie łańcucha bocznego) → 17-OH-pregnenolon (CYP17A1 17α-hydroksylaza) → DHEA (CYP17A1 17,20-liaza). W krążeniu enzym sulfotransferazy SULT2A1 przekształca DHEA w DHEA-S (sprzężony siarczan), który jest stabilną, mierzalną formą magazynową — poziomy DHEA-S w surowicy są ~250-500× wyższe niż wolny DHEA. Na poziomie tkanek obwodowych (tłuszcz, wątroba, prostata, mózg) enzym sulfataza steroidów (STS) odwraca DHEA-S → DHEA, następnie 3β-HSD konwertuje do androstendionu, który jest dalej konwertowany przez 17β-HSD do testosteronu, a równolegle przez CYP19A1 aromatazę w kierunku estronu/estradiolu. **Znaczenie kliniczne w kontekście AAS-PCT**: dawka 100 mg doustna — ze względu na metabolizm pierwszego przejścia w wątrobie — produkuje tylko ~5-10% wzrost Test w surowicy z konwersji obwodowej, podczas gdy w tkankach bogatych w aromatazę (tłuszcz, wątroba) zachodzi równoległy ~15-20% wzrost E2. **Lepsze dowody niż Pregnenolon** — DHEA to krok bliższy androgenowi w kaskadzie (1 enzym do androstendionu vs 3 enzymy w przypadku Pregnenolonu), ALE u młodych mężczyzn z normalną osią HPG korzyść jest ograniczona. Obciążenie wątroby jest niskie przy dawce doustnej <50 mg/dzień.",
  "legalStatus": "USA: swobodnie sprzedawany OTC suplement diety pod DSHEA 1994 (GNC, iHerb, Amazon — 25-50 mg standardowo). UE: lek wyłącznie na receptę (HU, DE, FR, IT, ES) — wskazania: niewydolność nadnerczy + hypoandrogenizm pomenopauzalny. Protokół recepty UE: tylko na zalecenie specjalisty endokrynologa. **WADA: S1.1.b Endogenne Steroidy Anaboliczno-Androgenne — wymieniony explicit, zakazany w/poza zawodami**. Wykrywalność w moczu 7-14 dni po ostatniej dawce (LC-MS/MS monitoring DHEA-S + Test/Epitest ratio).",
  "onsetTime": "Wzrost DHEA-S w surowicy 1-2 godziny po dawce doustnej; wsparcie osi Test mierzalne po 2-4 tygodniach przewlekłego dawkowania.",
  "halfLife": "~25 min (DHEA macierzysty)",
  "halfLifeActive": "~10 godzin (DHEA-S sprzężony siarczan, aktywny metabolit — klinicznie mierzona stabilna forma)",
  "interactionsWith": ["pregnenolone", "testosterone-info"],
  "aromatization": "Aromatyzuje — DHEA → androstendion → Test → E2 konwersja obwodowa przez CYP19A1 aromatazę. Wielkość umiarkowana: wzrost E2 ~15-20% powyżej bazowego, u użytkowników wrażliwych na ginekomastię może uzasadniać współpodawanie AI (Aromasin 12.5 mg co drugi dzień). Tkanki bogate w aromatazę (tłuszcz, wątroba) to główne miejsca konwersji.",
  "hepatotoxicity": "Niskie obciążenie wątroby przy dawce doustnej <50 mg/dzień. Protokoły przewlekłe wysokodawkowe (>50 mg/dzień >6 miesięcy) wykazują wzrost enzymów wątrobowych (ALT/AST) jako rzadkie-ale-udokumentowane w raportach FDA Cellgevity OTC monograph supplement adverse-event. Monitoring ALT/AST co 8-12 tygodni przy przewlekłym dawkowaniu.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (endogenny prekursor steroidu, NIE egzogenny AAS — konwersja obwodowa w kierunku Test/DHT/E2)",
  "bindingAffinity": "Sam DHEA ma słabe powinowactwo do AR (Ki ~1 μM, klinicznie nieistotne); efekt biologiczny zdominowany przez konwersję obwodową do Test/E2. DHEA-S nie ma obecnie zidentyfikowanego celu receptorowego endogennego (rola transport/magazyn).",
  "detectionWindow": "WADA-akredytowane LC-MS/MS wykrywanie w moczu 7-14 dni po ostatniej dawce. Monitoring T/E (testosteron/epitestosteron) ratio + DHEA-S/DHEA ratio — podwyższony ratio DHEA-S podnosi podejrzenie egzogennej suplementacji.",
  "benefits": [
    "Endogenny prekursor — krok bliższy androgenowi w kaskadzie niż Pregnenolon (1 enzym do androstendionu)",
    "Lepsze dowody dla wsparcia osi Test niż Pregnenolon (Wiehle 2014 Phase II PMID 24913480 u starszych mężczyzn)",
    "OTC suplement diety w USA (DSHEA 1994) — łatwo dostępny kontekst prawny",
    "Niskie obciążenie wątroby przy dawce doustnej <50 mg/dzień",
    "Niewydolność nadnerczy + hypoandrogenizm pomenopauzalny — wskazania on-label (Allolio 1999 PMID 10468979)"
  ],
  "quickStart": [
    "Pozyskanie USA: GNC, iHerb, Amazon — 25-50 mg micronized-DHEA standardowo OTC (Pure Encapsulations, Life Extension, Now Foods to wiarygodne marki)",
    "Pozyskanie UE: recepta specjalisty endokrynologa → preparat magistralny w aptece (drożej, ~€30-50/miesiąc)",
    "Dawka: 25-50 mg/dzień doustnie, rano (naśladowanie endogennego wzorca dobowego — naturalny DHEA-S osiąga peak we wczesnych godzinach porannych)",
    "Protokół AAS-PCT: 25 mg/dzień × 4-6 tygodni; u użytkowników wrażliwych na aromatyzację dodać współpodawanie AI (Aromasin 12.5 mg co drugi dzień)",
    "Badania przed cyklem: Total/Free Test, DHEA-S (NIE wolny DHEA — DHEA-S jest stabilnym mierzonym wskaźnikiem), E2, lipidogram, ALT/AST, kortyzol bazowy",
    "Badania mid + post: 4 tygodnie confirm DHEA-S + monitoring wzrostu E2, 8 tygodni pełny panel confirm recovery"
  ],
  "expectations": [
    {"label": "1-2 godziny po dawce doustnej", "body": "Wzrost DHEA-S w surowicy mierzalny (peak 2-4 godziny). Wzrost wolnego DHEA jest przejściowy, szybki clearance ze względu na ~25 min okres półtrwania macierzysty."},
    {"label": "2-4 tygodnie przewlekłego dawkowania", "body": "Osiągnięcie steady-state poziomu DHEA-S. U starszych/low-baseline mężczyzn wzrost Test 5-10% mierzalny (Wiehle 2014). U młodych, normal-baseline użytkowników wzrost Test minimalny lub zerowy."},
    {"label": "4-6 tygodni protokołu AAS-PCT", "body": "Łagodne wsparcie osi HPG, ALE NIE zastępuje SERM-PCT (Nolvadex/Clomid). Wzrost E2 ~15-20% powyżej bazowego; u użytkowników wrażliwych na ginekomastię AI uzasadnione. DHEA-axis-restart ma ograniczoną skuteczność u młodych użytkowników."},
    {"label": "Przewlekła wysoka dawka (>50 mg/dzień >6 miesięcy)", "body": "Wzrost enzymów wątrobowych (ALT/AST) rzadki-ale-udokumentowany. Monitoring PSA specyficzny dla prostaty u mężczyzn >50 lat (teoretyczne ryzyko wzrostu poprzez konwersję DHT). Lipidogram kardio — spadek HDL umiarkowany, zależny od dawki."}
  ],
  "quality": {
    "pure": [
      "USA OTC: Pure Encapsulations, Life Extension, Now Foods, Douglas Labs — micronized-DHEA HPLC-tested (USP-grade), 25-50 mg dawka standardowa",
      "UE apteka magistralna (recepta): pharmaceutical-grade DHEA — ~€30-50/miesiąc, wymaga zalecenia specjalisty endokrynologa",
      "GNC, iHerb, Amazon US-shipping: standardowe pozyskanie OTC-vendor — preferowane etykiety third-party-tested",
      "Bulk-powder UGL źródła: unikać bez HPLC-cert — czystość często <90%, ryzyko zanieczyszczeń (androstendion + Test-spike)"
    ],
    "caution": [
      "Młodzi mężczyźni z normal-baseline-DHEA-S: minimalny wzrost Test + ryzyko aromatyzacji — bilans cost-benefit wątpliwy",
      "Użytkownicy wrażliwi na ginekomastię: wzrost E2 ~15-20% powyżej bazowego, współpodawanie AI (Aromasin 12.5 mg co drugi dzień) uzasadnione",
      "Mężczyźni z historią prostaty (BPH, podwyższone PSA, rak prostaty w rodzinie): teoretyczne ryzyko wzrostu przez konwersję DHT — przeciwwskazanie",
      "Przewlekła wysoka dawka (>50 mg/dzień >6 miesięcy): wzrost enzymów wątrobowych, spadek HDL, wymagany monitoring PSA",
      "Kontekst UE (HU, DE, FR): import OTC to szara strefa — ryzyko konfiskaty celnej ze względu na status wyłącznie na receptę"
    ],
    "avoid": [
      "Aktywny rak prostaty, ciężkie BPH (Qmax <10 mL/s), rak piersi u mężczyzn — bezwzględne przeciwwskazanie",
      "Nowotwory hormonozależne (macica, jajnik, pierś) — bezwzględne przeciwwskazanie",
      "Sportowiec rywalizujący (WADA-tested): S1.1.b zakazany, wykrywalność w moczu 7-14 dni po ostatniej dawce",
      "Kontakt z partnerką w ciąży/karmiącą — teoretyczne ryzyko ekspozycji płodu na androgeny",
      "Przewlekła wysoka dawka (>100 mg/dzień >12 miesięcy) bez nadzoru endokrynologa — ryzyko wątrobowe + kardio-lipidowe"
    ]
  },
  "interactions": [
    "Pregnenolon: redundantny prekursor upstream — nakładający się szlak, NIE zalecane razem",
    "Inhibitor aromatazy (Aromasin, Anastrozole): kontrola wzrostu E2 uzasadniona u użytkowników wrażliwych na ginekomastię",
    "SERM (Nolvadex, Clomid): teoretyczna synergia w kontekście AAS-PCT, ALE dowody kliniczne skąpe",
    "Inhibitor 5α-reduktazy (Finasteride): blokuje konwersję DHT, zmniejszając stres DHT w prostacie, ale efekt wsparcia osi Test pozostaje",
    "Kortyzol/Prednizon: nakładanie osi nadnerczowej, użytkownicy przewlekłych glikokortykoidów mają niedobór DHEA-S — wskazanie replacement (Allolio 1999)"
  ],
  "studies": [
    {"title": "DHEA effects on physical and psychological functioning in androgen-deficient men: a randomized controlled trial", "authors": "Wiehle RD, Fontenot GK, Wike J, et al.", "journal": "J Clin Endocrinol Metab. 2014;99(9):3266-3275.", "pmid": "24913480"},
    {"title": "Effects of replacement dose of dehydroepiandrosterone in men and women of advancing age", "authors": "Morales AJ, Nolan JJ, Nelson JC, Yen SS.", "journal": "J Clin Endocrinol Metab. 1994;78(6):1360-1367.", "pmid": "7910820"},
    {"title": "Replacement of DHEA in aging men and women. Potential remedial effects", "authors": "Yen SS, Morales AJ, Khorram O.", "journal": "Ann N Y Acad Sci. 1995;774:128-142.", "pmid": "7726309"},
    {"title": "DHEA replacement in patients with adrenal insufficiency", "authors": "Allolio B, Arlt W, Hahner S.", "journal": "Ann Endocrinol (Paris). 1999;60(2):157-162.", "pmid": "10468979"}
  ],
  "faq": [
    {"q": "DHEA vs Pregnenolon — jaka różnica?", "a": "Różnica na poziomie kaskady. **Pregnenolon**: 1. krok po cholesterolu (produkt CYP11A1), 3 kroki enzymatyczne do androstendionu (Pregnenolon → 17-OH-Pregnenolon → DHEA → Androstendion). **DHEA**: 1 krok enzymatyczny do androstendionu (DHEA → Androstendion, 3β-HSD). DHEA jest bliższy androgenowi → lepsze dowody dla wsparcia osi Test (Wiehle 2014 Phase II vs skąpe dane badawcze Pregnenolonu). Wybór kliniczny: jeśli celem jest wsparcie osi Test, preferowany jest DHEA; jeśli celem jest wsparcie neurosteroidowe + kognitywne, preferowany jest Pregnenolon. Oba mają ograniczoną skuteczność u młodych użytkowników z normal-baseline."},
    {"q": "WADA-banned-listed — sportowcy uwaga!", "a": "**Tak, DHEA jest wymieniony explicit pod WADA S1.1.b Endogenne Steroidy Anaboliczno-Androgenne — zakazany w/poza zawodami.** Sportowcy rywalizujący (IFBB pro, NPC tested-division, IPF powerlifting, Olympic-tier) bezwzględnie zakazane. Wykrywalność w moczu 7-14 dni po ostatniej dawce metodą LC-MS/MS: wzrost DHEA-S w surowicy + monitoring T/E (testosteron/epitestosteron) ratio + DHEA-S/DHEA ratio. Testowanie `Carbon-13 isotope ratio mass spectrometry` (IRMS) różnicuje egzogenny suplement DHEA od endogennej produkcji — suplement-DHEA jest typowo syntetyzowany ze stigmasterolu sojowego, który ma stosunek izotopu C13 odmienny od endogennego DHEA. OK na untested-division (większość amerykańskich federacji bodybuildingu)."},
    {"q": "Czy warto dla zdrowego młodego mężczyzny?", "a": "**Nie zalecane dla młodych (20-40 lat), z normal-baseline-DHEA-S, z normalną osią HPG mężczyzn.** Powody: (1) wzrost Test minimalny lub zerowy — Wiehle 2014 Phase II udokumentował 5-10% wzrost Test u starszych mężczyzn (>50 lat, low-baseline DHEA-S), co nie ekstrapoluje na młodszych użytkowników; (2) ryzyko aromatyzacji — wzrost E2 ~15-20% powyżej bazowego bez uzasadnienia; (3) teoretyczne ryzyko sprzężenia zwrotnego osi HPG — przewlekła egzogenna suplementacja DHEA może wywołać supresję pętli przysadkowej (skąpe dane). Wskazanie kliniczne: udokumentowane niskie DHEA-S (<100 μg/dL mężczyźni, <50 μg/dL kobiety) + niewydolność nadnerczy lub >50 lat kontekst niskiego bazowego T. U młodych użytkowników z normal-baseline marketing suplementów Test-Booster nie jest oparty na dowodach."},
    {"q": "Czy z DHEA potrzebny jest inhibitor aromatazy?", "a": "**Tak dla użytkowników wrażliwych na ginekomastię, nie dla mainstreamowego użytkownika.** Uzasadnienie: obwodowa konwersja DHEA w tkankach bogatych w aromatazę (tłuszcz, wątroba) wywołuje ~15-20% wzrost E2 przy przewlekłym dawkowaniu. Profil użytkownika wrażliwego na aromatyzację: (1) historia ginekomastii w przeszłości (objawy E2-rebound w cyklu); (2) wyższe bazowe BMI (>25, tkanka tłuszczowa bogata w aromatazę); (3) genetyczna nadwrażliwość aromatazy (polimorfizm CYP19A1). Dla tych użytkowników dodać AI: Aromasin (Exemestane) 12.5 mg co drugi dzień, monitoring E2 w surowicy (cel 20-30 pg/mL). Użytkownik mainstreamowy (normalne BMI, gyno-naive): AI NIE jest konieczne przy dawce 25-50 mg/dzień DHEA, wzrost E2 jest klinicznie bezobjawowy."}
  ],
  "related": ["pregnenolone", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 50},
    "unit": "mg/dzień (doustnie, rano; zakres AAS-PCT 25-50 mg)",
    "note": "Protokół AAS-PCT: 25-50 mg/dzień doustnie × 4-6 tygodni, rano (naśladowanie endogennego wzorca dobowego). Kontekst replacement u starszych/low-baseline: 50 mg/dzień × 3-6 miesięcy pod nadzorem endokrynologa. Nie zalecane dla młodych użytkowników z normal-baseline. Użytkownicy wrażliwi na ginekomastię powinni dodać współpodawanie AI (Aromasin 12.5 mg co drugi dzień). NIE przekraczać 50 mg/dzień w kontekście AAS-PCT — ryzyko aromatyzacji + wątrobowe."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed rozpoczęciem protokołu DHEA",
      "timing": "Start fazy PCT lub kontekst przewlekłego replacement low-DHEA-S",
      "markers": "Total Testosteron, Free Testosteron, DHEA-S (NIE wolny DHEA — DHEA-S jest stabilnym mierzonym wskaźnikiem), Estradiol, SHBG, lipidogram (HDL/LDL), ALT/AST, kortyzol bazowy, PSA (mężczyźni >40 lat).",
      "purpose": "Dokumentacja bazowego poziomu DHEA-S (norma: mężczyźni 20-50 lat 280-640 μg/dL, >50 lat 80-300 μg/dL). Wskazanie: udokumentowany niski bazowy + niewydolność nadnerczy lub >50 lat kontekst niskiego T. U młodych użytkowników z normal-baseline bilans cost-benefit wątpliwy."
    },
    "midCycle": {
      "label": "DHEA po 4 tygodniach przewlekłego dawkowania",
      "timing": "Po 4 tygodniach przewlekłego dawkowania, surowica poranna (8:00)",
      "markers": "DHEA-S (confirm steady-state), Total Test, Free Test, Estradiol (monitoring aromatyzacji), SHBG.",
      "purpose": "Potwierdzenie osiągnięcia steady-state poziomu DHEA-S (cel mężczyźni: wiekowo-specyficzny górny tertyl). Wzrost Test u starszych/low-baseline użytkowników 5-10% oczekiwany wg Wiehle 2014. Monitoring wzrostu E2 ~15-20% — u użytkowników wrażliwych na ginekomastię może być potrzebna korekta AI."
    },
    "postCycle": {
      "label": "Koniec protokołu DHEA / monitor recovery",
      "timing": "Ostatnia dawka +4-6 tygodni",
      "markers": "Total Test, Free Test, DHEA-S, LH, FSH, Estradiol, SHBG, lipidogram, ALT/AST, PSA (>40 lat).",
      "purpose": "Potwierdzenie statusu osi HPG (LH/FSH ≥ wiekowo-specyficzny baseline-low). Monitor HDL w lipidogramie (przewlekły DHEA powoduje umiarkowany spadek HDL zależny od dawki). ALT/AST wyklucza przewlekły stres wątrobowy. U młodych użytkowników potwierdzenie powrotu bazowego Test — wykluczenie supresji sprzężenia zwrotnego przysadki przez przewlekły egzogenny DHEA."
    },
    "cruise": {
      "label": "Ostrożność przy przewlekłym AAS-cruise",
      "timing": "Jeśli DHEA jest współpodawane w trakcie AAS-cruise, co 3 miesiące",
      "markers": "DHEA-S, Total/Free Test, E2, SHBG, lipidogram, ALT/AST, PSA.",
      "purpose": "W kontekście AAS-on-cruise DHEA dodaje addytywne ryzyko aromatyzacji + obciążenie wątroby. NIE zalecane w przewlekłym kontekście AAS-on, ponieważ egzogenny poziom Test dominuje nad obwodową konwersją pochodzącą z DHEA. Wskazanie kliniczne marginalne — specyficzne dla fazy AAS-PCT."
    }
  }
}
