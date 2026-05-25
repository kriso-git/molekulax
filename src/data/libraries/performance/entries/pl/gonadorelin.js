// Gonadorelin (Factrel / Lutrelef) — syntetyczna 10-aminokwasowa GnRH
// (gonadotropin-releasing hormone), replika endogennego podwzgórzowego peptydu.
// Bezpośredni agonista przysadkowego receptora GnRH. FDA Factrel 1982 Wyeth
// (wycofany w USA 2008), EMA Lutrelef Ferring pulsacyjna-pompa Rx dla
// podwzgórzowej hipogonadyzmu.
// Źródła: FDA Factrel SmPC (Wyeth 1982), EMA Lutrelef SPC (Ferring),
// Smals 1986 PMID 3093469, Hayes 2000 PMID 10721060.

export default {
  "id": "gonadorelin",
  "name": "Gonadorelin (Factrel / Lutrelef)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Syntetyczna 10-aa GnRH — bezpośrednia stymulacja przysadkowych receptorów GnRH-R, uwolnienie LH/FSH. FDA Factrel 1982 (wycofany USA 2008); EMA Lutrelef pulsatile-pompa Rx dla podwzgórzowej hipogonadyzmu. Dawka ciągła paradoks-downregulacja w terapii raka prostaty.",
  "description": "Gonadorelin to syntetyczna replika 10-aminokwasowego dekapeptydu GnRH (gonadotropin-releasing hormone, znanego również jako LHRH) — sekwencyjnie IDENTYCZNA z endogennym podwzgórzowym GnRH (pyroGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH₂). Neurony GnRH w jądrze łukowatym + wyniosłości pośrodkowej podwzgórza naturalnie wydzielają GnRH w pulsacyjnym wzorcu ~90-120 minut do podwzgórzowo-przysadkowego krążenia wrotnego; iniekcja SC lub IV Gonadoreliny replikuje ten sygnał pulsu i wiąże się bezpośrednio z receptorem GnRH na komórkach gonadotropowych płata przedniego przysadki → uwolnienie LH + FSH. **Historia kliniczna**: zatwierdzenie FDA Factrel (Wyeth 1982) — pierwotne wskazanie to przysadkowy test diagnostyczny stymulacji LH/FSH (różnicowanie hipogonadyzmu podwzgórzowego vs przysadkowego). USA wycofany 2008 (powody komercyjnej żywotności, NIE bezpieczeństwa). EMA Lutrelef (Ferring) pozostaje dostępny w UE na protokole pulsacyjnej-pompy jako Rx dla podwzgórzowej hipogonadyzmu (zespół Kallmanna + nabyty niedobór GnRH). **Mechanizm paradoksu z ciągłym dawkowaniem**: chronicznie podwyższony sygnał GnRH (vs pulsacyjny) downreguluje receptor GnRH → to mechanizm terapii GnRH-agonistą w leczeniu raka prostaty (Lupron/Leuprolide, Zoladex/Goserelin) — ta sama rodzina molekularna, przeciwny kierunek efektu zależny od wzorca dawkowania. **Kontekst PCT po AAS**: Gonadorelin znajduje się 1 poziom osi poniżej Kisspeptyny-10 (Kisspeptin upstream GPR54 → stymulacja GnRH; Gonadorelin bezpośrednia stymulacja przysadkowego GnRH-R). Problem praktyczny identyczny: pulsacyjna-pompa niepraktyczna w samodzielnym podawaniu, pojedynczy bolus ma ograniczoną skuteczność. Pozyskiwanie UGL peptydu standardowe; dostępność w aptece UE poprzez protokół Lutrelef.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Bezpośredni agonista przysadkowego receptora GnRH (LHRH-R) płata przedniego → uwolnienie LH + FSH → testikularny Test"},
    {"label": "Dawkowanie", "value": "100 mcg SC co 90-120 min (pulse-pompa, niepraktyczna) lub 100-500 mcg SC bolus przed cyklem (protokół community, ograniczona skuteczność)"},
    {"label": "Okres półtrwania", "value": "~10-40 min (bardzo krótki — wzorzec pulsacyjny istotny)"},
    {"label": "Początek działania", "value": "Pik LH/FSH 15-60 min po SC"},
    {"label": "Status prawny", "value": "FDA Factrel wycofany 2008; EMA Lutrelef Ferring Rx (pulsacyjna-pompa podwzgórzowa hipogonadyzm); WADA S2 Hormony Peptydowe zakazane"}
  ],
  "mechanism": "GnRH (gonadotropin-releasing hormone, LHRH) to 10-aminokwasowy dekapeptyd podwzgórzowy, wydzielany przez neurony GnRH jądra łukowatego + obszaru przedwzrokowego w pulsacyjnym wzorcu (~90-120-minutowe cykle) do podwzgórzowo-przysadkowego krążenia wrotnego. Gonadorelin to syntetyczna replika TEGO 10-aminokwasowego peptydu — sekwencja (pyroGlu¹-His²-Trp³-Ser⁴-Tyr⁵-Gly⁶-Leu⁷-Arg⁸-Pro⁹-Gly¹⁰-NH₂) IDENTYCZNA z endogennym GnRH. Jego receptor to GnRH-R (LHRH-R) — receptor sprzężony z białkiem G na komórkach gonadotropowych płata przedniego przysadki. Wiązanie → ścieżka Gq/11 → aktywacja PLC → IP3 + DAG → wewnątrzkomórkowa mobilizacja Ca²⁺ + aktywacja PKC → egzocytoza pęcherzyków LH + FSH. **Paradoks pulsacyjności**: wrażliwość receptora GnRH komórek gonadotropowych przysadki jest zależna od wzorca dawkowania — bodziec pulsacyjny (90-min cykle) utrzymuje gęstość receptora i ciągłość uwalniania LH/FSH, PODCZAS GDY ciągle podwyższony sygnał GnRH (lub długo-działający analog GnRH jak Leuprolide) → downregulacja receptora + desensytyzacja → supresja LH/FSH. TO jest mechanizm terapii GnRH-agonistą w kontekście raka prostaty (kastracja chemiczna). Brak stresu wątrobowego z peptydowej iniekcji SC.",
  "legalStatus": "USA: FDA Factrel (Wyeth 1982) zatwierdzony dla diagnostycznego testu stymulacji LH/FSH; wycofany komercyjnie 2008 (NIE związane z bezpieczeństwem, żywotność rynkowa). Pozyskiwanie z compounding pharmacy ograniczone w 2026. UE: EMA Lutrelef (Ferring) Rx wciąż dostępny na protokole pulsacyjnej-pompy dla podwzgórzowej hipogonadyzmu (zespół Kallmanna) + nabytego niedoboru GnRH. HU + PL: import specjalny Lutrelef możliwy przez Rx specjalisty endokrynologa. WADA: S2 Hormony Peptydowe — zakazane w zawodach + poza zawodami cały rok.",
  "onsetTime": "Pik LH/FSH 15-60 min po SC",
  "halfLife": "~10-40 min",
  "halfLifeActive": "~10-40 min (rodzicielski peptyd aktywny; fragmenty metabolitów nieaktywne)",
  "interactionsWith": ["kisspeptin-10", "hcg-perf", "hmg-perf", "fsh-rec-perf"],
  "aromatization": "Pośrednia — GnRH → LH/FSH → testikularny Test → wtórna peryferyjna konwersja E2 (aromataza CYP19). Wielkość podobna do rebound HCG; umiarkowana na protokole pulsacyjnym.",
  "hepatotoxicity": "Brak — peptydowa iniekcja SC.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (replika peptydu podwzgórzowego, NIE AAS)",
  "bindingAffinity": "Przysadkowy GnRH-R (LHRH-R) Kd ~1-5 nM, wysokie powinowactwo wiązania ligandu naturalnego.",
  "detectionWindow": "WADA-akredytowany LC-MS/MS rzadki — wykrywanie peptydu w moczu 12-24 h (z powodu bardzo krótkiego t1/2). Wykrywanie zaburzone przez endogenny baseline GnRH.",
  "benefits": [
    "Bezpośrednia stymulacja przysadkowego GnRH-R — 1 poziom osi poniżej Kisspeptyny-10, bliżej downstream uwalniania LH/FSH",
    "EMA Lutrelef pharmaceutical-grade evidence protokołu pulsacyjnej-pompy (zespół Kallmanna + Rx podwzgórzowej hipogonadyzmu)",
    "Sekwencja identyczna z endogennym GnRH — optymalne dopasowanie receptora",
    "Brak stresu wątrobowego — peptyd SC"
  ],
  "quickStart": [
    "Pozyskiwanie: protokół UE Lutrelef (Ferring pulsacyjna-pompa) na Rx endokrynologa; UGL peptide CDMO (Bachem, Lipotec, AmbioPharm) testowane HPLC + mass-spec",
    "Rekonstytucja: 100 mcg/fiolka lub 500 mcg/fiolka liofilizowana → 1-2 mL wody bakteriostatycznej; stężenie 100 mcg/mL lub 500 mcg/mL",
    "Protokół pulse-pump (research/Rx kliniczny): 100 mcg SC co 90-120 min, ~12-16 dawek/24 h — TYLKO protokół-pompowy",
    "Protokół bolus (community DIY-PCT): 100-500 mcg SC raz dziennie rano, ograniczona skuteczność — pojedynczy pik LH",
    "Bloodwork przed leczeniem: Total Test, Free Test, LH, FSH, Estradiol, SHBG, Prolaktyna baseline",
    "Bloodwork mid + post: 30-60 min post-iniekcja potwierdzenie piku LH/FSH, 7-14 dni odbudowa Total Test"
  ],
  "expectations": [
    {"label": "15-60 min po SC", "body": "Mierzalny pik LH (~3-6x wzrost baseline, dane Smals 1986 + Hayes 2000). Pik FSH łagodniejszy (~2-4x). Wzrost Test w surowicy z opóźnieniem ~2-6 h."},
    {"label": "12-24 h", "body": "Poziomy LH/FSH wracają do baseline (bardzo krótki okres półtrwania). Wzrost Test trwały ~1-2 dni. Efekt pulsacyjny-symulujący może się rozszerzyć przy drugiej dawce."},
    {"label": "Chroniczny protokół pulse-pump (Lutrelef, 1-2 tyg)", "body": "Pełny restart fizjologicznego wzorca pulsacyjnego osi HPG. W kontekście podwzgórzowej hipogonadyzmu osiągalny LH/FSH na poziomie endogennym."},
    {"label": "Protokół DIY-bolus AAS-PCT", "body": "Ograniczona skuteczność — dawka-na-pojedynczy-pik-LH, NIE chroniczny restart osi. Rola zastępcy SERM-PCT obecnie NIE evidence-based."}
  ],
  "quality": {
    "pure": [
      "EU pharmaceutical-grade: zestaw pulsacyjna-pompa Ferring Lutrelef (import specjalny na Rx endokrynologa)",
      "USA peptide CDMO: Bachem, Lipotec, AmbioPharm — testowane HPLC + mass-spec (>98% czystość), fiolki R&D-grade",
      "EU peptide CDMO: PolyPeptide Group (Belgia), Bachem Bubendorf (Szwajcaria) — pharmaceutical-grade",
      "UGL vendor peptydowy (Asian sourcing): cert HPLC obowiązkowy — czystość często <90%, unikać bez potwierdzenia mass-spec"
    ],
    "caution": [
      "Protokół pulse-pump niepraktyczny w samodzielnym podawaniu (cykliczna iniekcja 90-120 min 24/7) — tylko setting research/kliniczny",
      "Dawka bolus ograniczona skuteczność — pojedynczy pik LH vs chroniczny restart osi HPG",
      "Bardzo krótki t1/2 (~10-40 min) — efekt okna pojedynczej dawki, częstotliwość dawkowania krytyczna",
      "Przechowywanie wody bakteriostatycznej: peptyd rekonstytowany stabilny w 4°C przez 14-21 dni; <7 dni w 25°C temperatura pokojowa",
      "Pozyskiwanie UGL bez certyfikatu mass-spec: degradowane fragmenty + pseudo-peptyd częste"
    ],
    "avoid": [
      "Protokół ciągłego dawkowania (>30 dni chronicznie podwyższony sygnał): paradoks downregulacji receptora → supresja LH/FSH (mechanizm terapii GnRH-agonistą)",
      "Współpodanie terapii GnRH-agonistą (Lupron/Leuprolide, Zoladex/Goserelin): nakładanie okupacji receptora, NIE zalecane",
      "Samodzielne podanie protokołu pulse-pump przez nieprzeszkolonego użytkownika (krytyczna technika sterylna, ryzyko infekcji)",
      "Podejrzenie guza przysadki (prolactinoma): test stymulacyjny GnRH przeciwwskazany",
      "Kontakt z partnerką ciężarną: teoretyczny efekt na osi HPG płodu"
    ]
  },
  "interactions": [
    "Kisspeptin-10: NIE zalecane w kombinacji (nakładanie mechanizmów, redundantna stymulacja ścieżki GnRH — Kisspeptin upstream, Gonadorelin downstream na tej samej ścieżce)",
    "HCG-perf: potencjalna synergia — uwolnienie LH przysadkowe Gonadorelin + stymulacja LHCGR testikularna HCG combo (dualny bodziec przysadkowy + testikularny)",
    "SERM (Nolvadex, Clomid): teoretyczna synergia (stymulacja przysadkowa Gonadorelin + blokada ER przez SERM), ale evidence kliniczne sparse",
    "Terapia GnRH-agonistą (Lupron, Zoladex): PRZECIWWSKAZANE — nakładanie okupacji receptora + wzmocnienie paradoksu downregulacji receptora"
  ],
  "studies": [
    {"title": "Factrel (gonadorelin hydrochloride) for injection — FDA Label", "authors": "Wyeth-Ayerst Laboratories", "journal": "FDA NDA 18123 (1982); wycofany w USA 2008.", "pmid": "FDA-Factrel-SmPC"},
    {"title": "Lutrelef (gonadorelin acetate) — EMA Summary of Product Characteristics", "authors": "Ferring Pharmaceuticals", "journal": "EMA SPC, wskazanie pulsacyjna-pompa podwzgórzowa hipogonadyzm.", "pmid": "EMA-Lutrelef-SPC"},
    {"title": "Therapeutic effects of a pulsatile GnRH pump on adult male patients with congenital hypogonadotropic hypogonadism (CHH): a retrospective study.", "authors": "Jiang H, Li BJ, Jin DC", "journal": "Transl Androl Urol", "pmid": "40800099"},
    {"title": "[Effect and safety of pulsatile GnRH therapy for male congenital hypogonadotropic hypogonadism].", "authors": "Niu YH, Xu H, Chen YW", "journal": "Zhonghua Nan Ke Xue", "pmid": "39210488"}
  ],
  "faq": [
    {"q": "Gonadorelin vs Kisspeptin-10 — jaka różnica?", "a": "Różnica hierarchii poziomu osi: **Gonadorelin** działa bezpośrednio na przysadkowy GnRH-R (1 poziom osi poniżej Kisspeptyny) — bezpośredni bodziec uwolnienia LH/FSH; **Kisspeptin-10** działa na podwzgórzowy GPR54 → trigger endogennego pulsu GnRH → bodziec przysadkowy GnRH-R (najwyższy punkt upstream). Natura molekularna: Gonadorelin SEKWENCYJNIE IDENTYCZNY z endogennym GnRH (10-aminokwasowy dekapeptyd); Kisspeptin-10 to 10-aminokwasowy C-końcowy fragment 145-aminokwasowego prekursora białka (KISS1). Praktyka kliniczna: Gonadorelin EMA Lutrelef pharmaceutical-grade dostępny (protokół pulsacyjna-pompa), Kisspeptin-10 jeszcze research-emerging (Imperial College Phase II). Wielkość: podobny wzorzec piku LH/FSH."},
    {"q": "Wlew ciągły vs puls — efekt przeciwny?", "a": "Tak, **mechanizm paradoksu** zależny od wzorca dawkowania. Protokół pulsacyjny (90-120-min cykle, naśladujący naturalną podwzgórzową sekrecję GnRH): utrzymuje gęstość receptora GnRH-R przysadki i ciągłość uwalniania LH/FSH → stymulacja fizjologiczna. Sygnał ciągle podwyższony (długo-działający analog GnRH jak Leuprolide/Lupron lub Goserelin/Zoladex chroniczny wlew): downregulacja receptora + desensytyzacja → supresja LH/FSH → supresja testikularnego Test → to mechanizm **chemicznej kastracji** w leczeniu raka prostaty + Rx endometriozy. Ta sama rodzina molekularna, przeciwny kierunek efektu — to paradoks pulsacyjności GnRH, gold-standard przykład farmakologii przysadki."},
    {"q": "Dostępność w 2026?", "a": "UE: **Lutrelef** (Ferring) dostępny jako pharmaceutical-grade na protokole pulsacyjnej-pompy — Rx specjalisty endokrynologa, import specjalny (wskazanie zespół Kallmanna + Rx nabytego niedoboru GnRH). HU + PL: protokół chorób rzadkich możliwy, NIE standardowa apteka. USA: Factrel wycofany komercyjnie 2008 — pozyskiwanie z compounding pharmacy ograniczone (Wedgewood, Empower Pharmacy). Research-chemical: peptide CDMO standard (Bachem, Lipotec, AmbioPharm USA; PolyPeptide Group UE) testowane HPLC + mass-spec ~$20-40/mg. UGL peptide (Asian sourcing) częsty, ale cert HPLC obowiązkowy — czystość często <90%."},
    {"q": "Czy może zastąpić SERM w PCT po AAS?", "a": "**Obecnie baza evidence ograniczona**, zastąpienie SERM NIE zalecane. Problemy praktyczne: (1) protokół pulsacyjnej-pompy niepraktyczny w kontekście samodzielnego podawania (cykle 90-120-min 24/7); (2) dawka bolus ograniczona skuteczność (pojedynczy pik LH vs chroniczny restart osi); (3) bardzo krótki t1/2 (~10-40 min) — wymagane częste dawkowanie. Standard kliniczny PCT po AAS w 2026: **SERM (Nolvadex 40/20/20/20 mg/dzień × 4 tyg) ± HCG (1500-2500 IU EOD × 10-14 dni)** — lepiej udokumentowany, praktyczniejszy, identyczny rezultat końcowy (restart osi HPG). Gonadorelin niche-option: case SERM-PCT-failure + eksperymentalny protokół pulse-pump w setting research. Baza evidence Imperial College Phase II + Hayes 2000 głównie kontekst Rx hipogonadyzmu, NIE PCT po AAS."}
  ],
  "related": ["kisspeptin-10", "hcg-perf", "hmg-perf", "fsh-rec-perf"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 100, "medium": 250, "high": 500},
    "unit": "mcg SC raz dziennie (protokół bolus, ograniczona skuteczność poza pulsacyjną-pompą)",
    "note": "Protokół pulse-pump (Lutrelef kliniczny): 100 mcg SC co 90-120 min × cykle 24-h. Protokół bolus DIY (PCT po AAS): 100-500 mcg SC raz dziennie rano × 7-14 dni. Rekonstytucja: 100 mcg/fiolka → 1 mL wody bakteriostatycznej (100 mcg/mL). Przechowywanie: 4°C rekonstytowany stabilny 14-21 dni."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed rozpoczęciem leczenia Gonadoreliną",
      "timing": "Start fazy PCT lub kontekst podwzgórzowej/przysadkowej hipogonadyzmu",
      "markers": "Total Testosterone, Free Testosterone, LH, FSH, Estradiol, SHBG, Prolaktyna, inhibin-B (jeśli dostępne), profil lipidowy, ALT/AST, morfologia.",
      "purpose": "Baseline status osi HPG. Wskazanie: różnicowanie supresji na poziomie podwzgórzowym vs przysadkowym (pierwotne wskazanie diagnostyczne Factrel), lub kontekst restartu przysadkowego post-cyklu PCT po AAS. Niche option w przypadku SERM-PCT-failure."
    },
    "midCycle": {
      "label": "Gonadorelin 30-60 min post-iniekcja",
      "timing": "Bolus SC +15-60 min (pik LH/FSH) + opóźniony 2-6 h (wzrost Test)",
      "markers": "LH (potwierdzenie acute spike), FSH, Total Test, Free Test, Estradiol (wtórny wzrost).",
      "purpose": "Potwierdzenie odpowiedzi acute: oczekiwany pik LH ~3-6x baseline wg Smals 1986. Jeśli BRAK piku LH → failure na poziomie przysadkowym (nie podwzgórzowym) lub problem jakości peptydu. Discriminator diagnostyczny hipogonadyzmu podwzgórzowego vs przysadkowego."
    },
    "postCycle": {
      "label": "Koniec protokołu Gonadoreliny / monitor odbudowy",
      "timing": "Ostatnia dawka +7-14 dni",
      "markers": "Total Test, Free Test, LH, FSH, Estradiol, SHBG, profil lipidowy.",
      "purpose": "Potwierdzenie utrzymanego restartu osi HPG: LH/FSH ≥ baseline-low specyficzny dla wieku, Test ≥ pre-treatment +25%. Jeśli BRAK utrzymanej odbudowy → adjuvant SERM-PCT (Nolvadex 4-6 tyg) uzasadniony."
    },
    "cruise": {
      "label": "Chroniczny cruise AAS — NIE zalecane",
      "timing": "N/A",
      "markers": "N/A",
      "purpose": "Chroniczny cruise Gonadoreliną NIE zalecany — paradoks mechanizmu ciągłego dawkowania (downregulacja receptora → supresja LH/FSH). Tylko bolus fazy acute-PCT lub setting protokołu klinicznego Rx pulse-pump."
    }
  }
}
