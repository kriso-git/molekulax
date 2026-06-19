// Clomid (cytrynian klomifenu) — niesteroidowy SERM, synteza Merrell 1956,
// zatwierdzony przez FDA 1967 dla niepłodności kobiet. Mieszanina racemiczna
// (zuklomifen estrogenny + enklomifen antyestrogenny). Źródła: FDA Clomid SmPC,
// Tan 2013 PMID 23617589, Katz 2012 PMID 22500968, Wiehle 2014 PMID 24913480,
// Karavolos 2015 PMID 25778469.

export default {
  "id": "clomid",
  "sideEffects": [
    { "hu": "Hangulati zavar: érzelmi labilitás, depresszív hangulat, ingerlékenység, sírásra való hajlam (a zuclomiphene-izomer központi idegrendszeri ösztrogén-receptor-agonizmusa miatt, felhasználók 40-50%-án enyhe-közepes mértékben).", "en": "Mood disturbance: emotional lability, depressed mood, irritability, tearfulness (driven by the zuclomiphene isomer's central nervous-system estrogen-receptor agonism, mild-to-moderate in roughly 40-50% of users).", "pl": "Zaburzenia nastroju: chwiejność emocjonalna, obniżony nastrój, drażliwość, skłonność do płaczu (spowodowane agonizmem receptora estrogenowego w ośrodkowym układzie nerwowym przez izomer zuklomifen, łagodne do umiarkowanych u około 40-50% użytkowników)." },
    { "hu": "Látászavarok: villogó scotoma (scintillating scotoma), homályos látás, fényérzékenység, utóképek. Általában dózisfüggő (>100 mg/nap tartós) és leállításkor reverzibilis, de tartós látásromlás ritka esetekben leírt.", "en": "Visual disturbances: scintillating scotoma, blurred vision, light sensitivity, afterimages. Usually dose-dependent (chronic >100 mg/day) and reversible on discontinuation, but persistent visual impairment is reported in rare cases.", "pl": "Zaburzenia widzenia: migoczący mroczek (scintillating scotoma), nieostre widzenie, światłowstręt, powidoki. Zwykle zależne od dawki (przewlekle >100 mg/dobę) i odwracalne po odstawieniu, lecz w rzadkich przypadkach opisano trwałe pogorszenie wzroku." },
    { "hu": "Ösztradiol-emelkedés (E2-rebound): a megnőtt LH révén fokozott herei ösztradiol-termelés plusz a zuclomiphene gyenge belső ösztrogén-aktivitása. Vízvisszatartást, gynecomastia-fellángolást, fejfájást okozhat; Clomidon erősebb mint Nolvadexen.", "en": "Estradiol elevation (E2 rebound): increased testicular estradiol production via raised LH, plus the weak intrinsic estrogenic activity of zuclomiphene. Can cause water retention, gynecomastia flare-ups and headache; more pronounced than with Nolvadex.", "pl": "Wzrost estradiolu (efekt z odbicia E2): zwiększona produkcja estradiolu w jądrach przez podwyższone LH oraz słaba własna aktywność estrogenowa zuklomifenu. Może powodować zatrzymanie wody, nasilenie ginekomastii i bóle głowy; silniejszy niż przy Nolvadexie." },
    { "hu": "Fejfájás, hányinger, hőhullámok és szédülés: gyakori ösztrogén-receptor-modulátor mellékhatások, általában enyhék és dózisfüggőek.", "en": "Headache, nausea, hot flushes and dizziness: common estrogen-receptor-modulator side effects, generally mild and dose-dependent.", "pl": "Bóle głowy, nudności, uderzenia gorąca i zawroty głowy: częste działania niepożądane modulatora receptora estrogenowego, zwykle łagodne i zależne od dawki." },
    { "hu": "Enyhe vércukor-emelkedés (éhomi glükóz): a zuclomiphene közvetett anyagcsere-hatása révén; diabéteszben vagy prediabéteszben fokozott figyelmet igényel.", "en": "Mild rise in blood glucose (fasting glucose) via an indirect metabolic effect of zuclomiphene; warrants extra monitoring in diabetes or prediabetes.", "pl": "Łagodny wzrost glukozy we krwi (na czczo) przez pośredni efekt metaboliczny zuklomifenu; wymaga dodatkowej kontroli w cukrzycy lub stanie przedcukrzycowym." },
    { "hu": "Petefészek-hiperstimulációs szindróma (OHSS) és többes terhesség női ovuláció-indukciós használatkor: hasi feszülés, megnagyobbodott petefészkek, súlyos esetben folyadékfelhalmozódás (férfi PCT-használatkor nem releváns).", "en": "Ovarian hyperstimulation syndrome (OHSS) and multiple pregnancy with female ovulation-induction use: abdominal distension, enlarged ovaries and, in severe cases, fluid accumulation (not relevant to male PCT use).", "pl": "Zespół hiperstymulacji jajników (OHSS) i ciąża mnoga przy stosowaniu do indukcji owulacji u kobiet: wzdęcie brzucha, powiększone jajniki, a w ciężkich przypadkach gromadzenie się płynu (nieistotne przy stosowaniu jako PCT u mężczyzn)." },
    { "hu": "Ritka epeáramlási zavar (cholestasis) és máj-enzim emelkedés: fertilitási vizsgálatokban dokumentált ritka eset; nem 17-alfa-alkilált, ezért a hepatotoxicitás összességében alacsony.", "en": "Rare cholestasis and liver-enzyme elevation: documented as a rare event in fertility trials; it is not 17-alpha-alkylated, so overall hepatotoxicity is low.", "pl": "Rzadka cholestaza i podwyższenie enzymów wątrobowych: udokumentowane jako rzadkie zdarzenie w badaniach nad płodnością; nie jest 17-alfa-alkilowany, więc ogólna hepatotoksyczność jest niska." }
  ],
  "contraindications": [
    { "hu": "Terhesség (Pregnancy Category X): a clomiphene magzati károsodást okozhat, terhesség alatt szigorúan ellenjavallt; nőknél terhesség kizárása szükséges a kezelés előtt.", "en": "Pregnancy (Category X): clomiphene can cause fetal harm and is strictly contraindicated during pregnancy; pregnancy must be excluded before treatment in women.", "pl": "Ciąża (kategoria X): klomifen może powodować uszkodzenie płodu i jest bezwzględnie przeciwwskazany w ciąży; przed leczeniem należy wykluczyć ciążę u kobiet." },
    { "hu": "Pszichiátriai előzmény (major depresszió, bipoláris zavar, súlyos szorongás): a hangulati labilitás és depresszív hatás kiválthatja vagy súlyosbíthatja az állapotot, ezért ellenjavallt vagy fokozott pszichiátriai felügyeletet igényel.", "en": "Psychiatric history (major depression, bipolar disorder, severe anxiety): the mood lability and depressive effect can trigger or worsen the condition, so it is contraindicated or requires close psychiatric supervision.", "pl": "Wywiad psychiatryczny (duża depresja, choroba afektywna dwubiegunowa, ciężki lęk): chwiejność nastroju i działanie depresyjne mogą wywołać lub nasilić chorobę, dlatego jest przeciwwskazany lub wymaga ścisłego nadzoru psychiatrycznego." },
    { "hu": "Aktív máj-betegség vagy máj-működési zavar: a hepatikus metabolizmus és a ritka cholestasis-kockázat miatt relatív ellenjavallat; máj-betegségben kerülendő.", "en": "Active liver disease or hepatic dysfunction: a relative contraindication due to hepatic metabolism and the rare cholestasis risk; avoid in liver disease.", "pl": "Czynna choroba wątroby lub zaburzenie czynności wątroby: względne przeciwwskazanie ze względu na metabolizm wątrobowy i rzadkie ryzyko cholestazy; unikać w chorobach wątroby." },
    { "hu": "Meglévő vagy fennálló látászavar (kivéve fertilitásból eredő): a clomiphene látótér- és látáspanaszokat okozhat, ezért látászavar fennállásakor a kezelés tilos vagy szemészeti kontroll mellett indítható.", "en": "Pre-existing visual disturbance: clomiphene can cause visual-field and vision complaints, so treatment is contraindicated or should be started only under ophthalmologic monitoring if a visual disturbance is present.", "pl": "Istniejące zaburzenie widzenia: klomifen może powodować dolegliwości pola widzenia i wzroku, dlatego leczenie jest przeciwwskazane lub należy je rozpoczynać wyłącznie pod kontrolą okulistyczną przy obecnym zaburzeniu widzenia." },
    { "hu": "Nem diagnosztizált, kóros méhvérzés vagy ösztrogén-függő daganat (pl. petefészek-tumor anamnézisben): a kezelés előtt ki kell zárni, a hormonális stimuláció súlyosbíthatja.", "en": "Undiagnosed abnormal uterine bleeding or estrogen-dependent tumor (e.g. history of ovarian tumor): must be excluded before treatment, as hormonal stimulation may worsen it.", "pl": "Niezdiagnozowane nieprawidłowe krwawienie z macicy lub guz estrogenozależny (np. guz jajnika w wywiadzie): należy je wykluczyć przed leczeniem, ponieważ stymulacja hormonalna może go nasilić." },
    { "hu": "Kezeletlen pajzsmirigy- vagy mellékvese-működési zavar, illetve hypofízis-daganat: ezeket a kezelés előtt diagnosztizálni és kezelni kell, mert torzítják a HPTA-tengely választ.", "en": "Untreated thyroid or adrenal dysfunction, or pituitary tumor: these must be diagnosed and treated before starting, as they distort the HPTA-axis response.", "pl": "Nieleczone zaburzenia tarczycy lub nadnerczy albo guz przysadki: należy je zdiagnozować i leczyć przed rozpoczęciem, ponieważ zaburzają odpowiedź osi HPTA." },
    { "hu": "Versenysport: a WADA tiltólistáján szerepel (S4.3 ösztrogén-receptor-modulátor), versenyen és versenyen kívül egyaránt tilos férfi sportolóknak.", "en": "Competitive sport: listed on the WADA prohibited list (S4.3 estrogen-receptor modulator), banned both in- and out-of-competition for male athletes.", "pl": "Sport wyczynowy: znajduje się na liście zakazanej WADA (S4.3 modulator receptora estrogenowego), zabroniony zarówno w trakcie, jak i poza zawodami u sportowców płci męskiej." }
  ],
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
