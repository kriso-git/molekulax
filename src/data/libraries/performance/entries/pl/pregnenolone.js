// Pregnenolon — "steroid macierzysty" endogenny prekursor steroidowy (cholesterol → pregnenolon
// → wszystkie hormony steroidowe downstream). Suplement OTC, jakość dowodów NISKA.
// Biodostępność doustna słaba (~5-10%), działanie neurosterodowe NMDA/GABA daje małą korzyść poznawczą.
// Nisza w PCT po AAS, słabe dowody.
// Źródła: Mosconi 2017 PMID 28259555, Roberts 1992 PMID 1610975,
// Marx 2009 PMID 19797577.

export default {
  "id": "pregnenolone",
  "sideEffects": [
    { "hu": "Neurosztereoid CNS-hatás: némelyeknél alvászavar / éberség-fokozódás (GABA-A negatív moduláció), ezért az esti adagolás egyeseknél rontja az alvást.", "en": "Neurosteroid CNS effect: insomnia / heightened alertness in some users (GABA-A negative modulation), so evening dosing can worsen sleep in certain individuals.", "pl": "Neurosteroidowy efekt OUN: bezsenność / wzmożona czujność u części osób (negatywna modulacja GABA-A), dlatego dawkowanie wieczorne może pogarszać sen u niektórych." },
    { "hu": "Fejfájás, ingerlékenység, szorongás vagy nyugtalanság – neurosztereoid-érzékeny egyéneknél, dózisfüggő.", "en": "Headache, irritability, anxiety or restlessness in neurosteroid-sensitive individuals, dose-dependent.", "pl": "Ból głowy, drażliwość, lęk lub niepokój u osób wrażliwych na neurosteroidy, zależne od dawki." },
    { "hu": "Hangulati ingadozás és nem kívánt downstream hormonális hatások (akne, fokozott faggyútermelés), mivel a pregnenolone androgén- és ösztrogén-prekurzor.", "en": "Mood swings and unwanted downstream hormonal effects (acne, increased sebum) since pregnenolone is a precursor to both androgens and estrogens.", "pl": "Wahania nastroju i niepożądane efekty hormonalne (trądzik, zwiększone wydzielanie łoju), ponieważ pregnenolon jest prekursorem androgenów i estrogenów." },
    { "hu": "Indirekt ösztrogén-konverzió (perifériás aromatizáció a downstream tesztoszteronon át): vízretenció, érzékeny mellbimbó – a magnitúdó kicsi, mert az orális first-pass progeszteron-konverzió dominál.", "en": "Indirect estrogen conversion (peripheral aromatization via downstream testosterone): water retention, nipple sensitivity. Magnitude is small as oral first-pass progesterone conversion dominates.", "pl": "Pośrednia konwersja do estrogenu (obwodowa aromatyzacja przez downstream testosteron): zatrzymanie wody, tkliwość sutków. Skala mała, bo dominuje doustna konwersja first-pass do progesteronu." },
    { "hu": "Ritka, de dokumentált májenzim-emelkedés (ALT/AST) tartós, magas dózisú (>50 mg/nap, 6+ hónap) használatnál.", "en": "Rare but documented liver enzyme elevation (ALT/AST) with chronic high-dose use (>50 mg/day for 6+ months).", "pl": "Rzadkie, ale udokumentowane podwyższenie enzymów wątrobowych (ALT/AST) przy przewlekłym stosowaniu wysokich dawek (>50 mg/dobę przez 6+ miesięcy)." },
    { "hu": "Erősen variábilis, gyakran elmaradó hatás: a gyenge orális biohasznosulás (~5-10%) miatt sok felhasználónál semmilyen mérhető hormonális vagy szubjektív hatás nincs.", "en": "Highly variable, often absent effect: due to poor oral bioavailability (~5-10%), many users see no measurable hormonal or subjective benefit.", "pl": "Silnie zmienny, często nieobecny efekt: z powodu słabej biodostępności doustnej (~5-10%) wielu użytkowników nie odczuwa żadnego mierzalnego efektu hormonalnego ani subiektywnego." }
  ],
  "contraindications": [
    { "hu": "Hormonérzékeny daganat anamnézisében vagy fennállásakor (prosztata-, emlőrák): a downstream szteroid-prekurzor-terhelés elméleti kockázatot jelent.", "en": "History or presence of hormone-sensitive cancer (prostate, breast): downstream steroid precursor loading poses a theoretical risk.", "pl": "Nowotwór hormonozależny w wywiadzie lub obecnie (prostata, pierś): obciążenie downstream prekursorami steroidów stanowi teoretyczne ryzyko." },
    { "hu": "Terhesség és szoptatás: a pregnenolone placenta-penetráns, elméleti hatás a magzati HPG-tengelyre; partnerre is átvihető elméleti kockázat.", "en": "Pregnancy and breastfeeding: pregnenolone crosses the placenta, theoretical effect on fetal HPG axis; theoretical risk also via partner contact.", "pl": "Ciąża i karmienie piersią: pregnenolon przenika przez łożysko, teoretyczny wpływ na płodową oś HPG; teoretyczne ryzyko także przez kontakt z partnerką." },
    { "hu": "NEM helyettesíti az evidence-alapú PCT-t: full-suppress státuszú post-cycle állapotban önálló PCT-ként (SERM/HCG helyett) használva nem dokumentált a tengely-helyreállás.", "en": "Does NOT replace evidence-based PCT: used as standalone PCT (instead of a SERM/HCG) in fully suppressed post-cycle state, axis recovery is undocumented.", "pl": "NIE zastępuje PCT opartego na dowodach: stosowany jako samodzielne PCT (zamiast SERM/HCG) przy pełnej supresji po cyklu, odbudowa osi jest nieudokumentowana." },
    { "hu": "Fennálló májbetegség vagy emelkedett ALT/AST baseline: tartós, magas dózis ronthatja a májfunkciót.", "en": "Pre-existing liver disease or elevated baseline ALT/AST: chronic high-dose use may worsen liver function.", "pl": "Istniejąca choroba wątroby lub podwyższone wyjściowe ALT/AST: przewlekłe stosowanie wysokich dawek może pogorszyć funkcję wątroby." },
    { "hu": "Egyidejű GABA-erg / szorongásoldó gyógyszerek (benzodiazepin, SSRI): elméleti GABA-A negatív-modulátor antagonizmus, klinikai relevanciája nem tisztázott, óvatosság indokolt.", "en": "Concurrent GABAergic / anxiolytic medications (benzodiazepines, SSRIs): theoretical GABA-A negative-modulator antagonism, clinical relevance unclear, caution warranted.", "pl": "Jednoczesne leki GABA-ergiczne / przeciwlękowe (benzodiazepiny, SSRI): teoretyczny antagonizm negatywnego modulatora GABA-A, znaczenie kliniczne niejasne, zalecana ostrożność." },
    { "hu": "Ismeretlen, kontrollálatlan hormonális rendellenesség: a széles downstream szteroid-spektrum (tesztoszteron, DHEA, kortizol, ösztrogén) miatt orvosi felügyelet nélkül nem ajánlott.", "en": "Unknown, uncontrolled hormonal disorder: due to the broad downstream steroid spectrum (testosterone, DHEA, cortisol, estrogen), not advised without medical supervision.", "pl": "Nieznane, niekontrolowane zaburzenie hormonalne: ze względu na szerokie downstream spektrum steroidów (testosteron, DHEA, kortyzol, estrogen) niezalecane bez nadzoru lekarskiego." }
  ],
  "name": "Pregnenolone",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "\"Steroid macierzysty\" — endogenny prekursor steroidowy (cholesterol → pregnenolon → wszystkie hormony steroidowe). Suplement OTC. Jakość dowodów NISKA: biodostępność doustna słaba (~5-10%), działanie neurosterodowe NMDA/GABA daje małą korzyść poznawczą. Nisza w PCT po AAS.",
  "description": "Pregnenolon to cząsteczka prekursora typu \"steroid macierzysty\" w organizmie człowieka — pierwszy steroidogenny związek pośredni wywodzący się z cholesterolu (poprzez aktywność enzymu P450scc/CYP11A1 w mitochondriach), z którego syntetyzowane jest całe spektrum hormonów steroidowych (progesteron, 17-OH-pregnenolon, DHEA, androstendion, testosteron, kortyzol, aldosteron). Jest sprzedawany na rynku suplementów OTC z deklaracją \"naturalnego prekursora hormonalnego\" — teoria zakłada, że podanie doustne → systemowe ładowanie substratu steroidogenezy → wzrost hormonów downstream (Test, DHEA). **Jakość dowodów NISKA**: biodostępność doustna jest skrajnie słaba (Roberts 1992, PMID 1610975 — surowiczy pregnenolon <10% podanej dawki w szczycie po 4 godzinach, większość ulega first-pass hepatycznej konwersji do progesteronu), wzrost downstream Test w pomiarach surowiczych jest niespójny. **Faktyczny udokumentowany efekt jest neurosterodowy**: pregnenolon bezpośrednio w CNS działa jako pozytywny modulator receptora NMDA + negatywny modulator receptora GABA-A (Mosconi 2017, PMID 28259555 review) — to wyjaśnia zgłaszane przez użytkowników efekty \"mental clarity\" + \"brain fog reduction\", NIEZALEŻNIE od deklaracji hormone-axis. **Kontekst PCT po AAS**: niszowa rola wspomagająca przy odzyskiwaniu funkcji mentalnych (mgła mózgowa po cyklu, mgła poznawcza) — ale NIE zastępuje SERM-PCT, NIE zastępuje HCG, NIE jest opartym na dowodach środkiem axis-restart. Marx 2009 (PMID 19797577) trial Phase II w schizofrenii zastosował dawkę 500 mg/dzień dla umiarkowanej korzyści poznawczej, co samo w sobie jest ostrzeżeniem co do magnitude dawki vs typowy kontekst PCT po AAS 25-100 mg.",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Endogenny prekursor steroidowy (cholesterol → pregnenolon → wszystkie hormony downstream) + neurosterodowy modulator NMDA/GABA-A w CNS"},
    {"label": "Dawkowanie", "value": "25-100 mg doustnie raz dziennie wieczorem (zakres OTC); niszowy protokół PCT po AAS 50 mg/dzień × 4-8 tygodni"},
    {"label": "Okres półtrwania", "value": "~30-45 min (forma macierzysta; kinetyka surowicza wysoce zmienna, szybka konwersja first-pass)"},
    {"label": "Początek działania", "value": "Efekt neurosterodowy CNS 1-3 godziny; efekt downstream hormonalny (jeśli jest) 2-7 dni dawkowania przewlekłego"},
    {"label": "Status prawny", "value": "Suplement diety OTC (USA wg DSHEA-1994); kraje UE zmiennie (food-supplement lub nieuregulowany); NIE na liście WADA"}
  ],
  "mechanism": "Biosynteza pregnenolonu rozpoczyna się w mitochondriach: konwersja cholesterol → pregnenolon katalizowana przez enzym P450scc (CYP11A1) — to jest etap ograniczający tempo całej steroidogenezy. Pregnenolon może rozwijać się w dwóch głównych kierunkach downstream: (1) **Δ4-pathway**: pregnenolon → progesteron (enzym 3β-HSD) → 17-OH-progesteron → androstendion → testosteron; (2) **Δ5-pathway**: pregnenolon → 17-OH-pregnenolon → DHEA → androstendion → testosteron. Kora nadnerczy + gonady + mózg (synteza neurosterodów) wyrażają obie ścieżki. **Suplement doustny evidence-LOW**: Roberts 1992 (PMID 1610975) badanie PK — po dawce doustnej 175 mg, surowiczy pregnenolon <10% podanej ilości w szczycie 4-godzinnym, większość ulega first-pass hepatycznej konwersji do progesteronu, więc downstream substrate-loading do Test jest marginalne. **Działanie neurosterodowe** (NIEZALEŻNE od deklaracji hormone-axis, Mosconi 2017 PMID 28259555 review): forma pregnenolone-sulfate przenika BBB, działa jako pozytywny modulator receptora NMDA (wzmocnienie poznawcze, formowanie pamięci) + negatywny modulator receptora GABA-A (czujność, efekt anty-sedatywny, synchronizacja z wzorem cortisol-arousal — dlatego dawkowanie wieczorne jest kontrowersyjne, niektórzy użytkownicy zgłaszają lepszą mental clarity przy dawce porannej). Obciążenie hepatyczne niskie ze względu na status endogennego prekursora.",
  "legalStatus": "Suplement diety OTC w USA wg harmonogramu DSHEA-1994 — swobodnie dostępny w sklepach z suplementami + online. UE zmiennie: niektóre państwa członkowskie mają klasyfikację food-supplement (Niemcy, Holandia, Czechy), inne są w nieuregulowanej grey-zone (Węgry obecnie). UK MHRA klasyfikuje jako unlicensed-medicine od 2010+. NIE na liście WADA, NIE substancja kontrolowana. W kontekście PCT po AAS to opcja legal-friendly (Nolvadex/Clomid tylko na receptę, HCG tylko na receptę, peptydy w szarej strefie), ALE magnitude dowodów ograniczona.",
  "onsetTime": "Efekt neurosterodowy CNS 1-3 godziny; efekt downstream hormonalny (jeśli jest) 2-7 dni dawkowania przewlekłego",
  "halfLife": "~30-45 min",
  "halfLifeActive": "~30-45 min forma macierzysta + kinetyka surowicza wysoce zmienna (metabolit pregnenolone-sulfate dłuższy, ~4-6 godzin, forma neurosterodowo-aktywna)",
  "interactionsWith": ["dhea", "kisspeptin-10"],
  "aromatization": "Pośrednia: prekursor steroidowy → Test → wtórna obwodowa konwersja E2. Magnitude małe (doustna first-pass konwersja do progesteronu dominuje, downstream substrate-loading do Test marginalne).",
  "hepatotoxicity": "Niska — endogenny prekursor steroidowy. Długoterminowa wysoka dawka (>50 mg/dzień przewlekle 6+ miesięcy) wzrost enzymów hepatycznych rzadko-ale-udokumentowany.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (cząsteczka prekursora, NIE samodzielny androgen — zależne od konwersji downstream, magnitude substrate-loading do Test marginalne)",
  "bindingAffinity": "Brak głównego receptora — endogenny związek pośredni steroidogenezy. W kontekście neurosterodowym: pozytywny allosteryczny modulator receptora NMDA (forma pregnenolone-sulfate, EC50 ~10-50 μM), negatywny allosteryczny modulator receptora GABA-A (podobny zakres stężeń).",
  "detectionWindow": "Pregnenolon NIE na liście WADA; surowiczy assay mierzalny przez czuły LC-MS/MS 24-48 godzin po dawce. Zmienność baseline endogenna oznacza, że kryteria detekcji nie są ustandaryzowane.",
  "benefits": [
    "Endogenny prekursor steroidowy — teoretyczne ładowanie substratu dla etapu ograniczającego tempo całej steroidogenezy (cholesterol → pregnenolon)",
    "Efekt neurosterodowy CNS: modulator NMDA/GABA-A → mental clarity, redukcja brain fog, łagodne wzmocnienie poznawcze (zgłaszane przez użytkowników + wsparcie Mosconi 2017 review)",
    "Suplement diety OTC — opcja legal-friendly w niszowej roli wspomagającej PCT po AAS (w kontekście Nolvadex/HCG tylko na receptę)",
    "Obciążenie hepatyczne niskie, niski profil toksyczności w użyciu krótko- do średnioterminowym"
  ],
  "quickStart": [
    "Zaopatrzenie: główne marki suplementów USA (Pure Encapsulations, Life Extension, Thorne Research — formulacja micronized ma lepszą biodostępność); UE: standardem jest import NOW Foods",
    "Protokół dawkowania w niszy PCT po AAS: 25-50 mg doustnie raz dziennie wieczorem (synchronizacja cortisol-pattern) przez 4-8 tygodni (niektórzy użytkownicy zgłaszają lepszą mental clarity przy dawce porannej)",
    "Dawka OTC general-wellness: 10-25 mg raz dziennie — suplement przewlekły (NIE specyficzny dla PCT)",
    "Bloodwork przed protokołem: Pregnenolone-serum (czuły assay, baseline), DHEA-S, Total/Free Test, E2, kortyzol wzorzec AM-PM",
    "Bloodwork mid + post: Po 4 tygodniach Pregnenolone-serum, Test, DHEA-S, kortyzol — potwierdź lub odrzuć odpowiedź downstream hormonalną",
    "Oczekiwanie evidence-realistic: korzyść neurosterodowa mental-clarity prawdopodobna, wzrost downstream Test LOW-evidence — NIE zastępuje SERM-PCT"
  ],
  "expectations": [
    {"label": "Acute 1-3 godziny po dawce", "body": "Efekt neurosterodowy CNS: łagodny wzrost mental clarity, redukcja brain fog (zgłaszane przez użytkowników, wsparcie Mosconi 2017 review). Niektórzy użytkownicy łagodne wzmocnienie czujności, inni żadnego efektu acute — znaczna zmienność międzyosobnicza."},
    {"label": "1-2 tygodnie dawkowania przewlekłego", "body": "Stabilna mental clarity na poziomie neurosterodowym (jeśli responder). Łagodna modulacja wzoru kortyzolu (przez branchpoint 17-OH-Preg). Wzrost downstream hormonu w surowicy jeszcze nie mierzalny — kinetyka wolna z powodu substrate-loading."},
    {"label": "4-8 tygodni dawkowania przewlekłego (nisza PCT po AAS)", "body": "Maksymalny potencjał substrate-loading. **Wzrost Test LOW-evidence**: niektórzy użytkownicy +5-15% surowiczy Test baseline, inni bez zmian. Redukcja brain fog w kontekście post-PCT to najbardziej spójna subiektywna korzyść."},
    {"label": "Długoterminowo (6+ miesięcy przewlekle)", "body": "Dane sparse. Wzrost enzymów hepatycznych rzadko-ale-udokumentowany (ALT/AST). Konserwatywne cyklowanie (4-8 tygodni on / 4 tygodnie off) zalecane jako risk-mitigation dla suplementu przewlekłego."}
  ],
  "quality": {
    "pure": [
      "Premium marki suplementów USA: Pure Encapsulations, Life Extension, Thorne Research, Designs for Health — formulacja micronized ma lepszą biodostępność",
      "Zaopatrzenie UE: import NOW Foods (CE-cert), Solgar — pharmaceutical-grade USP-spec",
      "Pharmaceutical-grade bulk: Sigma-Aldrich (research-chemical, NIE do użytku jako suplement diety)",
      "Micronized vs non-micronized: micronized ~2-3x lepsza absorpcja doustna, standard premium-marek"
    ],
    "caution": [
      "**Jakość dowodów NISKA** — efekt hormone-axis oparty na deklaracji OTC NIE jest walidowany klinicznie; tylko efekt neurosterodowy-CNS jest wsparty dowodami (Mosconi 2017 review)",
      "Biodostępność doustna słaba (~5-10%, Roberts 1992 PK) — sublingual + formulacja micronized poprawia marginalnie, związek IM/transdermalny tylko research",
      "Ostrzeżenie co do magnitude dawki: kontekst PCT po AAS 25-100 mg, trial w schizofrenii (Marx 2009) 500 mg/dzień — dawka OTC społecznościowa to zakres skuteczny tylko dla mental-clarity",
      "Monitoring konwersji estradiolu konieczny (przez aromatazę obwodową), choć magnitude małe",
      "Długoterminowa wysoka dawka (>50 mg/dzień przewlekle 6+ miesięcy) wzrost enzymów hepatycznych rzadko-ale-udokumentowany (ALT/AST baseline-check po 12 tygodniach przewlekłych)"
    ],
    "avoid": [
      "Stosowanie jako zamiennik SERM-PCT (pominięcie Nolvadex/Clomid) na podstawie deklaracji hormone-axis — NIE oparte na dowodach, axis-restart NIE udokumentowany",
      "Pregnenolon-only PCT w statusie post-cycle full-suppress — dowody kliniczne sparse, recovery Test NIE gwarantowany",
      "Historia nowotworu zależnego od hormonów (prostata, pierś) — teoretyczne ryzyko endogenous-precursor-loading",
      "Równoczesny doustny SERM (Nolvadex) + Pregnenolon obciążenie hepatyczne + nakładanie się ścieżki 3β-HSD — dane kliniczne sparse",
      "Kontakt z partnerem w ciąży/karmiącym: teoretyczny efekt na płodową oś HPG (pregnenolon penetruje przez łożysko)"
    ]
  },
  "interactions": [
    "DHEA: równoległy prekursor (pregnenolon upstream, DHEA downstream na ścieżce Δ5); combo supplement-stack to standard na rynku OTC, ALE magnitude dowodów ograniczone",
    "Kisspeptin-10 / HCG / SERM-PCT (Nolvadex, Clomid): Pregnenolon niszowa rola wspomagająca dla redukcji brain-fog; NIE zastępuje środków axis-restart",
    "Wzór kortyzolu: Pregnenolon przez branchpoint 17-OH-Preg łagodna modulacja kortyzolu — dawka wieczorna zalecana (respekt dla wzoru cortisol-AM)",
    "Leki anty-anxiety (benzodiazepine, SSRI): działanie negatywnego modulatora receptora GABA-A teoretyczny antagonizm — istotność kliniczna NIE udokumentowana"
  ],
  "studies": [
    {"title": "Neurosteroids Progesterone and Dehydroepiandrosterone: Molecular Mechanisms of Action in Neuroprotection and Neuroinflammation.", "authors": "Fedotcheva TA, Shimanovsky NL", "journal": "Pharmaceuticals (Basel)", "pmid": "40732235"},
    {"title": "Therapeutic potential of enzymes, neurosteroids, and synthetic steroids in neurodegenerative disorders: A critical review.", "authors": "Servi R, Akkoç RF, Aksu F", "journal": "J Steroid Biochem Mol Biol", "pmid": "40288591"},
    {"title": "Advancements in Non-Dopaminergic Treatments for Schizophrenia: A Systematic Review of Pipeline Developments.", "authors": "Komatsu Y, Takehara M, Hart X", "journal": "Pharmacopsychiatry", "pmid": "38710208"}
  ],
  "faq": [
    {"q": "Suplement OTC — czy naprawdę działa?", "a": "**Częściowo — różnica jakości dowodów jest znacząca.** (1) **Efekt neurosterodowy CNS** (modulator NMDA/GABA-A): umiarkowanie wsparty dowodami (Mosconi 2017 review, trial w schizofrenii Marx 2009) — mental clarity, redukcja brain fog, łagodne wzmocnienie poznawcze zgłaszane przez użytkowników spójnie w populacji respondera. (2) **Deklaracja hormone-axis substrate-loading** (wzrost Test/DHEA przez pełną ścieżkę steroidogenezy): **LOW-evidence** — badanie PK Roberts 1992 pokazało biodostępność doustną <10%, wzrost downstream Test w surowicy supervariable, NIE walidowane klinicznie w kontekście PCT po AAS. **Bottom line**: redukcja brain-fog to OK-deklaracja, restart hormone-axis NIE oparty na dowodach, NIE zastępuje SERM-PCT, NIE zastępuje HCG."},
    {"q": "Bezpieczny długoterminowo?", "a": "**Dane sparse — zalecane konserwatywne cyklowanie.** Profil bezpieczeństwa krótko- do średnioterminowy (4-8 tygodni, 25-50 mg/dzień) niski ryzyko — status endogennego prekursora steroidowego oznacza minimalną toksyczność organiczną. Długoterminowa wysoka dawka (>50 mg/dzień przewlekle 6+ miesięcy): wzrost enzymów hepatycznych (ALT/AST) rzadko-ale-udokumentowany, teoretyczne ryzyko nowotworu zależnego od hormonów (prostata, pierś — przez endogenous-precursor-loading). **Protokół praktyczny**: 4-8 tygodni on / 4 tygodnie off-cycle, baseline + 12 tygodni bloodwork (Pregnenolone-serum, Test, E2, kortyzol, ALT/AST, panel lipidowy). Suplement przewlekły >12 miesięcy: zalecany kontekst medical-supervision."},
    {"q": "Vs DHEA — co wybrać?", "a": "**Oba są słabo biodostępne doustnie, magnitude dowodów ograniczone — wybierz niższy poziom dawki.** (1) **Pregnenolon**: prekursor upstream (cholesterol → pregnenolon → wszystkie steroidy), szerokie spektrum downstream + efekt neurosterodowy CNS (NMDA/GABA-A); dawka 25-50 mg dziennie. (2) **DHEA**: prekursor downstream (pregnenolon → DHEA → androstendion → Test), węższe spektrum + bliższa konwersja do androgenu; dawka 25-100 mg dziennie. **Wybór praktyczny**: kontekst PCT po AAS brain-fog → Pregnenolon (efekt neurosterodowy silniejszy); deklaracja direct Test-substrate-loading → DHEA (downstream short-path), ALE oba są evidence-LOW vs standard SERM-PCT. Combo OTC-stack to standard, ALE efekt additive magnitude dowodów NIE udokumentowany."},
    {"q": "Brain fog po PCT — czy Pregnenolon pomaga?", "a": "**Tak, w niektórych przypadkach — to najbardziej wsparta dowodami indykacja.** W kontekście post-AAS-cycle + post-SERM-PCT brain fog (mgła poznawcza, redukcja mental clarity, zaburzenie koncentracji) to częsty subiektywny objaw, mechanizm jest wieloczynnikowy (rebound osi HPA, fluktuacja estradiolu, zaburzenie równowagi neurosterodowej). Pregnenolon jest pozytywnym modulatorem NMDA + negatywnym modulatorem GABA-A (Mosconi 2017 review) — to działa bezpośrednio na wzmocnienie poznawcze. **Małe dane RCT**: trial w schizofrenii Marx 2009 500 mg/dzień (high-dose) pokazał umiarkowaną korzyść poznawczą, w kontekście PCT po AAS typowa magnitude dawki 25-50 mg/dzień jest niższa, ALE responder rate na podstawie dowodów anegdotycznych jest OK. **Praktycznie**: 25-50 mg/dzień × 4-8 tygodni próbny protokół low-risk, tylko jeśli objaw brain-fog jest dominujący; jeśli brak subiektywnej korzyści po 2-3 tygodniach — discontinue."}
  ],
  "related": ["dhea", "kisspeptin-10"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 100},
    "unit": "mg/dzień (doustnie, wieczorem; 25-100 mg zakres OTC)",
    "note": "Niszowy protokół wspomagający PCT po AAS: 25-50 mg doustnie raz dziennie wieczorem (synchronizacja cortisol-pattern) × 4-8 tygodni. OTC general-wellness: 10-25 mg raz dziennie suplement przewlekły. Wysoka dawka (100 mg+) kontekst trial klinicznego, NIE standard społecznościowy. Formulacja micronized ma lepszą biodostępność."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed rozpoczęciem protokołu Pregnenolonu",
      "timing": "Start fazy PCT po AAS lub kontekst przewlekłego brain-fog",
      "markers": "Pregnenolone-serum (czuły assay LC-MS/MS), DHEA-S, Total Testosterone, Free Testosterone, Estradiol, kortyzol AM + PM, SHBG, ALT/AST, panel lipidowy.",
      "purpose": "Status baseline endogennej steroidogenezy. Indykacja: post-PCT brain-fog jako objaw dominujący + niski baseline Pregnenolone-serum + niski baseline DHEA-S. Wykluczenie historii nowotworu zależnego od hormonów."
    },
    "midCycle": {
      "label": "Pregnenolon 2-4 tygodnie dawkowania przewlekłego",
      "timing": "Start protokołu +14-28 dni, AM-fasting",
      "markers": "Pregnenolone-serum, DHEA-S, Total Test, Estradiol, kortyzol AM, subiektywny kwestionariusz mental-clarity.",
      "purpose": "Potwierdź odpowiedź substrate-loading: Pregnenolone-serum ~2-5x baseline oczekiwane (ograniczone przez oral-bioavailability). Jeśli brak subiektywnej redukcji brain-fog po 4 tygodniach → discontinue, NIE responder."
    },
    "postCycle": {
      "label": "Koniec protokołu Pregnenolonu / monitor recovery",
      "timing": "Ostatnia dawka +7-14 dni",
      "markers": "Pregnenolone-serum, DHEA-S, Total Test, Free Test, Estradiol, kortyzol, ALT/AST, panel lipidowy.",
      "purpose": "Potwierdź recovery do endogennego baseline: Pregnenolone-serum + DHEA-S wracają do poziomu pre-protokoł w 7-14 dni. Wykluczenie elevation enzymów hepatycznych (ALT/AST +20% baseline-wzrost = redukcja dawki przewlekłej)."
    },
    "cruise": {
      "label": "Cruise suplementu przewlekłego (>12 miesięcy)",
      "timing": "Bloodwork kwartalnie (co 3 miesiące)",
      "markers": "Pregnenolone-serum, DHEA-S, Test, Estradiol, kortyzol, PSA (>40+ mężczyźni), ALT/AST, panel lipidowy.",
      "purpose": "Monitoring długoterminowy: stabilność enzymów hepatycznych + screening nowotworu zależnego od hormonów (PSA, badanie piersi). Trigger redukcji dawki przewlekłej: ALT/AST >40% baseline-wzrost lub trend wzrostu PSA. Konserwatywne cyklowanie (4-8 tygodni on / 4 tygodnie off) zalecane jako risk-mitigation dla suplementu przewlekłego."
    }
  }
}
