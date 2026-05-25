// Clomid (cytrynian klomifenu) — niesteroidowy SERM, synteza Merrell 1956,
// zatwierdzony przez FDA 1967 dla niepłodności kobiet. Mieszanina racemiczna
// (zuklomifen estrogenny + enklomifen antyestrogenny). Źródła: FDA Clomid SmPC,
// Tan 2013 PMID 23617589, Katz 2012 PMID 22500968, Wiehle 2014 PMID 24913480,
// Karavolos 2015 PMID 25778469.

export default {
  "id": "clomid",
  "name": "Clomid (Clomiphene Citrate)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Cytrynian klomifenu, synteza Merrell 1956, zatwierdzony przez FDA (1967) dla niepłodności kobiet (dysfunkcja owulacji). Mieszanina racemiczna (~62% zuklomifen estrogenny + ~38% enklomifen antyestrogenny). Ten ostatni jest aktywną częścią PCT. Off-label hipogonadyzm męski + drugorzędny standard SERM w PCT po AAS.",
  "description": "Clomid (cytrynian klomifenu) jest niesteroidowym SERM klasy trifenyloetylenu, zsyntetyzowanym w 1956 roku przez Franka Palopoli w Merrell Dow Pharmaceuticals. Zatwierdzenie FDA w 1967 dla niepłodności anowulacyjnej u kobiet — dziś klasyczny pierwszy krok w protokołach indukcji owulacji. Wyjątkowa podwójna struktura cząsteczki jest kamieniem milowym w historii SERM: syntetyzowana jako mieszanina racemiczna, ~62% zuklomifen (cis-izomer, estrogenny częściowy agonista, długi okres półtrwania ~5-7 tygodni z akumulacją) i 38% enklomifen (trans-izomer, antyestrogenny, ~5-dniowy okres półtrwania). Aktywność PCT napędza głównie enklomifen: kompetycyjny antagonizm ER-α na poziomie przysadki uwalnia wydzielanie GnRH, więc LH/FSH wzrasta → endogenna odbudowa testosteronu. Zuklomifen powoli akumuluje się i daje słabą wewnętrzną aktywność estrogenną — to powoduje charakterystyczny \"emocjonalny\" profil nastroju Clomidu (depresja, wrażliwość, epizodyczne komiczne łzy). Clomid jest zatem skuteczny ale \"brudny\" SERM: aktywność enklomifenu napędza silniejszy restart HPTA niż Nolvadex (zwłaszcza efekt FSH), ale zaburzenia nastroju częstsze. Nowoczesny złoty standard PCT po AAS: Nolvadex pierwszy, Clomid jako backup lub stack (Karavolos 2015). Zabroniony przez WADA dla zawodników męskich (S4).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Niesteroidowy SERM, mieszanina racemiczna (62% zuklo + 38% enklo)"},
    {"label": "Dawkowanie (PCT)", "value": "50 mg/dzień × 1-2 tygodnie, potem 25 mg/dzień × 2-4 tygodnie"},
    {"label": "Okres półtrwania", "value": "Zuklomifen ~5-7 tygodni akumulujący / enklomifen ~5 dni"},
    {"label": "Początek działania", "value": "Wzrost LH 5-10 dni, odbudowa Test 3-4 tygodnie"},
    {"label": "Status prawny", "value": "FDA + EMA Rx (wskazanie kobiece), off-label hipogonadyzm męski, WADA S4 (zabroniony)"}
  ],
  "mechanism": "Clomid to mieszanina racemiczna dwóch strukturalnie różnych izomerów: zuklomifen (cis-) i enklomifen (trans-). Obie połówki mają przeciwne profile mechaniczne: zuklomifen jest częściowym agonistą ER (aktywność estrogenna na endometrium, kość, OUN), enklomifen jest czystym antagonistą ER w przysadce. Aktywność PCT napędza enklomifen: kompetycyjny antagonizm ER-α → disinhibicja GnRH → wzrost LH (szczególnie silny) i FSH → odbudowa testikularnego testosteronu + wsparcie spermatogenezy. Zuklomifen powoli akumuluje się (akumulacja terminalna po 5-7 tygodniach chronicznego użycia) i częściowo przeciwdziała efektowi enklomifenu — dlatego długi protokół Clomidu (>8 tygodni) daje słabszy restart HPTA niż 4-6 tygodniowy. Agonizm OUN ER-α zuklomifenu tłumaczy charakterystyczne zaburzenia nastroju Clomidu (labilność emocjonalna, nastrój depresyjny). Nowoczesna formuła enklomifenu-only (Androxal) jest czystsza ale nie zatwierdzona przez FDA (Repros Phase III 2014-2016, CRL 2016).",
  "legalStatus": "USA: zatwierdzony przez FDA 1967 (Clomid, kobieca dysfunkcja owulacji), Schedule N/A (niekontrolowany). Off-label użycie dla hipogonadyzmu męskiego + PCT po AAS powszechne od lat 80. UE: zatwierdzony przez EMA (Clomid, Pergotime, Clomifen Sandoz Rx). HU: zarejestrowany (Clostilbegyt Rx). PL: zarejestrowany (Clostilbegyt, Clomid Rx). WADA: S4.3 modulator receptora estrogenowego (zabroniony w zawodach i poza zawodami dla mężczyzn).",
  "onsetTime": "Wzrost LH 5-10 dni, odbudowa Test 3-4 tygodnie",
  "halfLife": "Zuklomifen ~5-7 tygodni akumulujący / enklomifen ~5 dni",
  "halfLifeActive": "Enklomifen ~5 dni (aktywna część PCT)",
  "interactionsWith": ["nolvadex", "enclomiphene", "hcg-perf", "anastrozol"],
  "aromatization": "Nie aromatyzuje — kompetycyjna blokada ER, NIE hamowanie aromatazy. Klinicznie E2 nieznacznie WZRASTA na Clomidzie (przysadkowa disinhibicja LH → testikularna synteza E2, wewnętrzny agonizm ER zuklomifenu dodaje dalszy agonizm). Wyższy rebound E2 niż na Nolvadexie.",
  "hepatotoxicity": "Niska — niesteroidowy, NIE 17α-alkilowany. Stres wątrobowy minimalny. Skrajnie rzadkie przypadki cholestazy udokumentowane w badaniach płodności (FDA Clomid SmPC działania niepożądane); nie raportowane klinicznie przy dawkowaniu PCT 4-6 tygodni.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS, SERM)",
  "bindingAffinity": "Powinowactwo kompetycyjne do ER-α umiarkowane-wysokie (enklomifen Ki ~10 nM, zuklomifen Ki ~50 nM). Z powodu akumulacji zuklomifenu stężenie równowagowe steady-state obu izomerów różni się od początkowego racematu.",
  "detectionWindow": "WADA-akredytowane wykrywanie GC-MS/LC-MS/MS w moczu 2-4 miesiące po ostatniej dawce Clomidu (klomifen + N-dealkilowane metabolity). Dłuższe niż wykrywanie Nolvadexu z powodu akumulacji zuklomifenu.",
  "benefits": [
    "Silniejszy stymulus LH/FSH niż Nolvadex (szczególnie efekt FSH, akcent na płodność)",
    "Wsparcie spermatogenezy — preferowane od Nolvadexu dla celów odbudowy płodności",
    "Skuteczny restart HPTA po ciężkiej supresji (głębokie troughy długich estrów)",
    "Tani (~€5-10/opakowanie generic, Clostilbegyt UE)",
    "60+ lat literatury klinicznej (zatwierdzenie FDA 1967, użycie męskie off-label od lat 80.)",
    "Można stackować z Nolvadexem (klasyczny 'Clomid + Nolva' dwu-SERM PCT)"
  ],
  "quickStart": [
    "Timing estru: krótki ester (Test-Prop, Tren-Ace) ostatnia iniekcja + 3-5 dni → start Clomidu; długi ester → +14-21 dni",
    "Standardowy PCT: 50 mg/dzień × 1-2 tygodnie, potem 25 mg/dzień × 2-4 tygodnie (łącznie 4-6 tygodni; NIE 8+ tygodni — akumulacja zuklomifenu osłabiłaby go)",
    "Przyjmować z wodą, timing z posiłkiem obojętny (biodostępność doustna wysoka ~85%)",
    "Zaburzenia nastroju częste (40-50% użytkowników łagodne-umiarkowane) — protokół monitora partnera, dziennik oceny nastroju",
    "Protokół dwu-SERM 'Clomid + Nolva': 50/50/25/25 Clomid + 20/20/20/20 Nolva (dawka tygodniowa, 4 tygodnie)",
    "Skutki wzroku: scintillating scotoma >100 mg/dzień chronicznie, odwracalne po odstawieniu"
  ],
  "expectations": [
    {"label": "Tygodnie 1-2", "body": "Wzrost LH/FSH mierzalny (pobranie krwi +7 dni). Silny rebound E2 — możliwy wybuch ginekomastii. Zaburzenia nastroju zaczynają się (emocjonalne, łzawiące, depresyjne chwile)."},
    {"label": "Tygodnie 3-4", "body": "Odbudowa Test w toku. Libido wraca, energia poprawia się. Zaburzenia nastroju zaczynają słabnąć gdy akumulacja zuklomifenu osiąga plateau."},
    {"label": "Tygodnie 5-6", "body": "Koniec PCT. Test ≥ 70-80% baseline, LH/FSH przywrócone. Panel lipidowy: HDL nieznacznie wzrasta, TG się zmniejsza."},
    {"label": "Post-PCT", "body": "Badania potwierdzające +6 tygodni. Klirens zuklomifenu utrzymuje się +8-10 tygodni. Jeśli LH/FSH < 50% baseline → konsultacja specjalistyczna."}
  ],
  "quality": {
    "pure": [
      "Merrell Clomid 50 mg blister, jakość Rx farmaceutyczna (apteka UE dostępna)",
      "Clostilbegyt 50 mg (Egis HU + Adamed PL) — jakość farmaceutyczna, zarejestrowany",
      "Indyjskie generyki (Sunpharma Cipla Hi-Clom) — jakość farmaceutyczna, tanie",
      "UGL liquid clomiphene: HPLC-testowane źródło obowiązkowe — często nieprawidłowy stosunek zuklo/enklo"
    ],
    "caution": [
      "Zaburzenia nastroju częste — predyspozycja psychiatryczna (duża depresja, choroba dwubiegunowa) jest PRZECIWWSKAZANIEM",
      "Skutki wzroku: scintillating scotoma przy 100+ mg/dzień chronicznie, monitoring dna oka zalecany długoterminowo",
      "Ryzyko OHSS w protokołach płodności kobiet (nieistotne dla mężczyzn)",
      "Cukrzyca — glukoza na czczo może nieznacznie wzrastać (pośredni efekt zuklomifenu na oś kortyzolu)"
    ],
    "avoid": [
      "Aktywna choroba wątroby (względne przeciwwskazanie)",
      "Predyspozycja psychiatryczna (depresja, choroba dwubiegunowa, lęk)",
      "Współczesna ciąża (Pregnancy Category X)",
      "Wywiad guza jajnika (pacjentka kobieta; N/A dla mężczyzn)",
      "Wysokie dawki Clomidu (>150 mg/dzień) — skrajnie rzadkie wskazanie, ZAKAZANE w PCT po AAS"
    ]
  },
  "interactions": [
    "Stack SERM (Clomid + Nolva): zmniejszenie dawki obu, klasyczny dwu-PCT",
    "HCG-bridge: HCG → Clomid protokół sekwencyjny po ciężkiej supresji AAS",
    "Współpodanie z AI: NIE zalecane (pokrywający się mechanizm, ryzyko crashed E2)",
    "Alkohol: zaburzenia nastroju mogą się pogorszyć, unikać podczas PCT",
    "Środki psychoaktywne (SSRI, MAOI, antypsychotyk): interakcja stabilizatorów nastroju, ostrożny monitoring",
    "Anaboliki/AAS: planowany bridge podczas PCT → nowy cykl 4-6 tygodni off-cycle później"
  ],
  "studies": [
    {"title": "Clomiphene Citrate Treatment as an Alternative Therapeutic Approach for Male Hypogonadism: Mechanisms and Clinical Implications.", "authors": "Wu YC, Sung WW", "journal": "Pharmaceuticals (Basel)", "pmid": "39338395"},
    {"title": "Outcomes of clomiphene citrate treatment in young hypogonadal men.", "authors": "Katz DJ, Nabulsi O, Tal R, Mulhall JP", "journal": "BJU Int", "pmid": "22044663"},
    {"title": "Enclomiphene citrate stimulates testosterone production while preventing oligospermia: a randomized phase II clinical trial comparing topical testosterone.", "authors": "Wiehle RD, Fontenot GK, Wike J, Hsu K, Nieschlag E, Saadabadi A", "journal": "Fertil Steril", "pmid": "25044085"},
    {"title": "Anabolic steroid-induced hypogonadism: diagnosis and treatment.", "authors": "Rahnema CD, Lipshultz LI, Crosnoe LE, Kovac JR, Kim ED", "journal": "Fertil Steril", "pmid": "24636400"},
    {"title": "Enclomiphene citrate: A treatment that maintains fertility in men with secondary hypogonadism.", "authors": "Earl JA, Kim ED", "journal": "Expert Rev Endocrinol Metab", "pmid": "31063005"}
  ],
  "faq": [
    {"q": "Clomid vs Nolvadex — który kiedy?", "a": "W nowoczesnych protokołach PCT Nolvadex jest pierwszego rzutu (czystszy profil, mniej skutków ubocznych). Clomid jest preferowany gdy: (1) cel odbudowy płodności (Clomid silniejszy stymulus FSH, lepsza odbudowa spermatogenezy); (2) po cyklach hard-suppression z długim estrem (głęboki trough); (3) nietolerancja Nolvadexu. Można stackować ('Clomid + Nolva' klasyczny dwu-PCT, zmniejszone dawki obu)."},
    {"q": "Czy skutki wzroku są poważne?", "a": "Rzadkie, zależne od dawki. Klasyczny objaw: scintillating scotoma (migoczący wzór zigzag w polu widzenia), przy >100 mg/dzień chronicznie. Dawka PCT po AAS (25-50 mg × 4-6 tygodni) klinicznie pomijalna. Przy objawach — NATYCHMIASTOWE odstawienie + konsultacja okulistyczna. Zwykle odwracalne w 2-4 tygodnie."},
    {"q": "Dlaczego wielu czuje się emocjonalnie na Clomidzie?", "a": "Połówka zuklomifenu (~62% mieszaniny racemicznej) jest częściowym agonistą ER w OUN i powoli akumuluje się przez 5-7 tygodni chronicznego użycia. Agonizm ER w OUN powoduje labilność nastroju: chwile emocjonalne, łatwe płakanie, fluktuacja nastroju depresyjna. Niektórzy opisują to jako 'jakbym miał PMS'. Łagodzenie: zmiana na Nolvadex lub Androxal (tylko enklomifen) jeśli dostępny."},
    {"q": "Czy można przyjmować razem z Nolvadexem?", "a": "Tak — 'Clomid + Nolva' to klasyczny protokół dwu-SERM PCT po AAS, oba z zmniejszoną dawką: 50/50/25/25 Clomid + 20/20/20/20 Nolva (dawka tygodniowa). Uzasadnienie: Clomid silniejszy stymulus LH/FSH + czystsza blokada E2 Nolvadexu → synergistyczny restart HPTA, mniej zaburzeń nastroju niż mono-Clomid. Karavolos 2015 (PMID 25778469) omawia kombinację."},
    {"q": "Szybkość odbudowy HPTA?", "a": "Odbudowa Test w 3-4 tygodnie (mniej więcej tyle co Nolvadex), pełna odbudowa osi HPG w 8-12 tygodni. Odbudowa spermatogenezy zmienna: 2-3 miesiące po krótkich cyklach (4-8 tygodni), 6-12 miesięcy po długich cyklach (12+ tygodni) lub 'blast-and-cruise'. Jeśli nie odbudowana po 12 miesiącach, konsultacja specjalistyczna (urolog + endokrynolog)."}
  ],
  "related": ["nolvadex", "enclomiphene", "raloxifene", "hcg-perf", "anastrozol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 37.5, "high": 50},
    "unit": "mg/dzień (doustnie, podzielone 1-2x)",
    "note": "Standardowy PCT po AAS: 50 mg/dzień × 1-2 tygodnie, potem 25 mg/dzień × 2-4 tygodnie (łącznie 4-6 tygodni; NIE powyżej 8 tygodni — akumulacja zuklomifenu daje kontr-efekt). Protokół dwu-SERM: 50/50/25/25 + Nolva 20/20/20/20. Badania krwi pre-PCT, +14 dni, +koniec PCT +6 tygodni."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-PCT (ostatnia dawka AAS + klirens estru)",
      "timing": "Krótki ester + 3-5 dni; długi ester + 14-21 dni",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS sensitive-assay), LH, FSH, SHBG, Prolaktyna, panel lipidowy, ALT, AST, hemogram, glukoza na czczo.",
      "purpose": "Baseline do trajektorii restartu HPTA. Glukoza na czczo dodatkowo — Clomid może spowodować łagodny wzrost glukozy poprzez efekt zuklomifenu."
    },
    "midCycle": {
      "label": "Mid-PCT (Clomid tydzień 2)",
      "timing": "Start Clomidu +14 dni",
      "markers": "LH, FSH (wzrost FSH silniejszy na Clomidzie niż Nolvadex), Total Test, E2 (obserwacja wybuchu ginekomastii), Prolaktyna (po cyklach Tren), dziennik oceny nastroju, ALT/AST.",
      "purpose": "Pomiar rebound LH/FSH. Wzrost FSH silniejszy na Clomidzie — śledzenie odbudowy płodności. Monitor rebound E2. Ocena nastroju: jeśli ciężki nastrój depresyjny → zmiana na Nolvadex."
    },
    "postCycle": {
      "label": "Koniec PCT + potwierdzenie odbudowy",
      "timing": "Ostatnia dawka Clomidu +2 tygodnie i +6 tygodni",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, panel lipidowy, analiza nasienia (jeśli cel płodności), ALT/AST.",
      "purpose": "Potwierdzenie: Test ≥ 70-80% baseline pre-cyklu, LH/FSH ≥ zakres wieko-specyficzny. Analiza nasienia w 8-12 tygodni jeśli akcent na płodność. Klirens zuklomifenu +8-10 tygodni."
    },
    "cruise": {
      "label": "Długoterminowe użycie — NIE PCT po AAS",
      "timing": "Kobiecy trial płodności: 3-6 cykli; PCT po AAS: max 4-6 tygodni",
      "markers": "Cruise N/A — Clomid tylko w PCT.",
      "purpose": "Chroniczne użycie Clomidu (>8 tygodni ciągłych) daje słabszy efekt z powodu akumulacji zuklomifenu; przeciwwskazane w PCT po AAS."
    }
  }
}
