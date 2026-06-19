// Nolvadex (cytrynian tamoksyfenu) — niesteroidowy SERM, ICI Pharmaceuticals
// synteza 1962, zatwierdzony przez FDA 1977 dla ER+ raka piersi (obecnie AstraZeneca).
// Złoty standard PCT po AAS. Źródła: FDA Nolvadex SmPC, Fisher 1998 NSABP P-1
// PMID 9747868, Schäcke 2002 SERM PMID 12433722, Tan 2014 PMID 24716172,
// Karavolos 2015 PMID 25778469.

export default {
  "id": "nolvadex",
  "sideEffects": [
    { "hu": "Vénás thromboembolia (mélyvénás trombózis, tüdőembólia, stroke) – a tamoxifen legsúlyosabb, fekete-keretes (FDA boxed warning) kockázata; prokoaguláns hatás a parciális ösztrogén-agonizmus révén.", "en": "Venous thromboembolism (deep vein thrombosis, pulmonary embolism, stroke) – tamoxifen's most serious, FDA boxed-warning risk; prothrombotic via partial estrogen-agonist activity.", "pl": "Żylna choroba zakrzepowo-zatorowa (zakrzepica żył głębokich, zatorowość płucna, udar) – najpoważniejsze ryzyko tamoksyfenu z ostrzeżeniem w czarnej ramce FDA; działanie prozakrzepowe poprzez częściowy agonizm estrogenowy." },
    { "hu": "Látászavarok: villogó zigzag-mintázat (scintillating scotoma), retinopathia, corneális/retinális kristályos lerakódás és kataraktarizikó – dózisfüggő, magasabb dózison gyakoribb, leállításra általában reverzibilis.", "en": "Visual disturbances: scintillating scotoma, retinopathy, corneal/retinal crystalline deposits and cataract risk – dose-dependent, more common at higher doses, usually reversible on discontinuation.", "pl": "Zaburzenia widzenia: mroczek migocący (scintillating scotoma), retinopatia, krystaliczne złogi w rogówce/siatkówce i ryzyko zaćmy – zależne od dawki, częstsze przy wyższych dawkach, zwykle odwracalne po odstawieniu." },
    { "hu": "Hangulati ingadozás, hőhullámok, fejfájás és influenza-szerű érzés – az ösztrogén-receptor-modulációból és az E2-fluktuációból ered; PCT-ben a HPTA-restart velejárója.", "en": "Mood swings, hot flushes, headache and flu-like feelings – arising from estrogen-receptor modulation and E2 fluctuation; in PCT a by-product of the HPTA restart.", "pl": "Wahania nastroju, uderzenia gorąca, ból głowy i objawy grypopodobne – wynikają z modulacji receptora estrogenowego i wahań E2; w PCT efekt uboczny restartu osi HPTA." },
    { "hu": "Enyhe, általában tranziens májenzim-emelkedés (ALT/AST); ritka, krónikus nagy dózisú használatnál súlyos hepatotoxicitás, steatosis és cirrhosis dokumentált – PCT 4-6 hetes dózisán klinikailag ritka.", "en": "Mild, usually transient liver enzyme elevation (ALT/AST); with rare chronic high-dose use severe hepatotoxicity, steatosis and cirrhosis are documented – clinically rare at the 4-6 week PCT dose.", "pl": "Łagodny, zwykle przejściowy wzrost enzymów wątrobowych (ALT/AST); przy rzadkim przewlekłym stosowaniu dużych dawek opisano ciężką hepatotoksyczność, stłuszczenie i marskość – klinicznie rzadkie przy dawce PCT 4-6 tygodni." },
    { "hu": "Endometrium-hiperplázia, polip és endometrium-karcinóma rizikó (parciális agonista hatás a méhnyálkahártyán) – elsősorban nőknél, hosszú távú használatnál; szintén FDA boxed warning.", "en": "Endometrial hyperplasia, polyps and endometrial carcinoma risk (partial agonist effect on the uterine lining) – primarily in women on long-term use; also an FDA boxed warning.", "pl": "Ryzyko rozrostu endometrium, polipów i raka endometrium (działanie częściowo agonistyczne na błonę śluzową macicy) – głównie u kobiet przy długotrwałym stosowaniu; również ostrzeżenie w ramce FDA." },
    { "hu": "Csökkent terápiás hatás CYP2D6 poor-metabolizer fenotípusnál (kb. 7-10% kaukázusi populáció) és erős CYP2D6-gátló SSRI-k (paroxetin, fluoxetin) együttadásakor – az aktív endoxifen-szint drámaian csökken.", "en": "Reduced therapeutic effect in CYP2D6 poor-metabolizers (about 7-10% of Caucasians) and with strong CYP2D6-inhibitor SSRIs (paroxetine, fluoxetine) co-administered – active endoxifen levels drop dramatically.", "pl": "Zmniejszona skuteczność u osób wolno metabolizujących CYP2D6 (około 7-10% populacji kaukaskiej) oraz przy jednoczesnym stosowaniu silnych inhibitorów CYP2D6 SSRI (paroksetyna, fluoksetyna) – poziom aktywnego endoksyfenu drastycznie spada." },
    { "hu": "Csökkent IGF-1-szint (~10-15%), fáradtság és lassabb regeneráció – a hepatikus IGF-1-jelpálya parciális blokádja miatt; PCT befejezése után 4-6 héttel reverzibilis.", "en": "Reduced IGF-1 levels (~10-15%), fatigue and slower recovery – due to partial blockade of the hepatic IGF-1 signaling pathway; reversible 4-6 weeks after PCT ends.", "pl": "Obniżony poziom IGF-1 (~10-15%), zmęczenie i wolniejsza regeneracja – z powodu częściowej blokady wątrobowego szlaku sygnałowego IGF-1; odwracalne 4-6 tygodni po zakończeniu PCT." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás (Pregnancy Category D) – teratogén, magzati károsodás és vetélés kockázata; a kezelés alatt és után megbízható nem-hormonális fogamzásgátlás kötelező.", "en": "Pregnancy and breastfeeding (Pregnancy Category D) – teratogenic, risk of fetal harm and miscarriage; reliable non-hormonal contraception required during and after treatment.", "pl": "Ciąża i karmienie piersią (kategoria D) – teratogenny, ryzyko uszkodzenia płodu i poronienia; podczas i po leczeniu wymagana niezawodna antykoncepcja niehormonalna." },
    { "hu": "Aktív vagy lezajlott vénás thromboembolia (mélyvénás trombózis, tüdőembólia) az anamnézisben, valamint egyidejű kumarin-típusú antikoaguláns terápia – jelentősen fokozott alvadási kockázat.", "en": "Active or prior venous thromboembolism (deep vein thrombosis, pulmonary embolism) in history, and concurrent coumarin-type anticoagulant therapy – substantially increased clotting risk.", "pl": "Czynna lub przebyta żylna choroba zakrzepowo-zatorowa (zakrzepica żył głębokich, zatorowość płucna) w wywiadzie oraz jednoczesne leczenie antykoagulantami kumarynowymi – znacznie zwiększone ryzyko zakrzepicy." },
    { "hu": "Anamnézisben endometrium-hiperplázia vagy endometrium-karcinóma – a parciális agonista hatás 2-3-szoros relatív rizikó-emelkedést okoz.", "en": "History of endometrial hyperplasia or endometrial carcinoma – the partial agonist effect causes a 2-3 fold relative risk increase.", "pl": "Rozrost endometrium lub rak endometrium w wywiadzie – działanie częściowo agonistyczne powoduje 2-3-krotny wzrost ryzyka względnego." },
    { "hu": "Ismert túlérzékenység tamoxifenre vagy a készítmény bármely segédanyagára.", "en": "Known hypersensitivity to tamoxifen or any excipient of the product.", "pl": "Znana nadwrażliwość na tamoksyfen lub którąkolwiek substancję pomocniczą preparatu." },
    { "hu": "Súlyos májbetegség vagy kontrollálatlan hyperlipidaemia/hypertrigliceridaemia – tamoxifen ritkán súlyos hypertrigliceridaemiát és pancreatitist provokálhat.", "en": "Severe liver disease or uncontrolled hyperlipidemia/hypertriglyceridemia – tamoxifen can rarely provoke severe hypertriglyceridemia and pancreatitis.", "pl": "Ciężka choroba wątroby lub niekontrolowana hiperlipidemia/hipertriglicerydemia – tamoksyfen może rzadko wywołać ciężką hipertriglicerydemię i zapalenie trzustki." },
    { "hu": "Egyidejű erős CYP2D6-gátló SSRI-k (paroxetin, fluoxetin) – az aktív endoxifen-konverziót blokkolják, így a tamoxifen hatástalanná válhat; ha SSRI szükséges, válassz venlafaxint vagy citalopramot.", "en": "Concurrent strong CYP2D6-inhibitor SSRIs (paroxetine, fluoxetine) – they block active endoxifen conversion, potentially rendering tamoxifen ineffective; if an SSRI is needed, choose venlafaxine or citalopram.", "pl": "Jednoczesne stosowanie silnych inhibitorów CYP2D6 SSRI (paroksetyna, fluoksetyna) – blokują konwersję do aktywnego endoksyfenu, co może uczynić tamoksyfen nieskutecznym; jeśli SSRI jest konieczny, wybierz wenlafaksynę lub citalopram." },
    { "hu": "Versenysport WADA-tiltás alatt (S4.3 hormon- és metabolikus modulátor) – versenyen belül és kívül egyaránt tilos, 2-3 hónapos vizelet-detektálási ablakkal.", "en": "Competitive sport under WADA ban (S4.3 hormone and metabolic modulator) – prohibited both in- and out-of-competition, with a 2-3 month urine detection window.", "pl": "Sport wyczynowy objęty zakazem WADA (S4.3 modulator hormonalny i metaboliczny) – zabroniony zarówno w trakcie, jak i poza zawodami, z oknem wykrywalności w moczu 2-3 miesiące." }
  ],
  "name": "Nolvadex (Tamoxifen)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Cytrynian tamoksyfenu, synteza ICI Pharmaceuticals 1962, zatwierdzony przez FDA (1977) dla ER+ raka piersi. Złoty standard SERM w PCT po AAS: blokada ER-α w przysadce → disinhibicja LH/FSH → odbudowa endogennego testosteronu. 60+ lat literatury klinicznej.",
  "description": "Nolvadex (cytrynian tamoksyfenu) jest niesteroidowym selektywnym modulatorem receptora estrogenowego (SERM) klasy trifenyloetylenu, zsyntetyzowanym w 1962 roku przez Arthura Walpole'a i Dorę Richardson w laboratorium ICI Pharmaceuticals (obecnie AstraZeneca) w Macclesfield. Pierwotny cel: antykoncepcja postkoitalna — paradoksalnie okazał się być induktorem owulacji i w 1977 roku uzyskał zatwierdzenie FDA na raka piersi z dodatnim receptorem estrogenowym (ER+). Do dziś leczono nim ponad 30 milionów pacjentów (kobiet i mężczyzn), jest to SERM z najdłuższym dorobkiem klinicznym. W kontekście PCT po AAS (post-cycle therapy) Nolvadex jest klasycznym wyborem pierwszego rzutu: dzięki kompetycyjnemu antagonizmowi ER-α na poziomie przysadki, oś podwzgórze-przysadka (HP) zostaje uwolniona spod ujemnego sprzężenia zwrotnego, wydzielanie LH i FSH zostaje przywrócone, a komórki Leydiga wznawiają endogenną produkcję testosteronu. Selektywność Nolvadexu jest tkankowo-specyficzna: antagonista w tkance piersi, agonista w kości, wątrobie i endometrium (stąd ryzyko raka endometrium przy długoterminowym stosowaniu u kobiet). Wymieniony na liście WADA (S4 modulatory hormonalne) — zabroniony w sporcie wyczynowym.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Niesteroidowy SERM, kompetycyjny antagonista ER-α w przysadce + piersi"
    },
    {
      "label": "Dawkowanie (PCT)",
      "value": "20-40 mg/dzień, 4-6 tygodni"
    },
    {
      "label": "Okres półtrwania",
      "value": "~5-7 dni (parent) / ~14 dni (4-OH-tamoksyfen, aktywny metabolit)"
    },
    {
      "label": "Początek działania",
      "value": "Wzrost LH 24-72 h, odbudowa Test 2-3 tygodnie"
    },
    {
      "label": "Status prawny",
      "value": "FDA + EMA Rx, zarejestrowany w HU + PL, WADA S4 (zabroniony w zawodach)"
    }
  ],
  "mechanism": "Tamoksyfen jest pro-lekiem — wątrobowe enzymy CYP2D6 + CYP3A4 konwertują go do 4-hydroksy-tamoksyfenu (4-OH-tam) i endoksyfenu (N-dezmetylo-4-OH-tam). Aktywne metabolity mają 30-100x silniejsze powinowactwo do ER-α niż parent compound. 4-OH-tam wiąże się kompetycyjnie z receptorem estrogenowym, blokując jego agonistyczną zmianę konformacyjną — w zależności od tkanki działa jak antagonista (pierś, przysadka) lub częściowy agonista (kość, wątroba, endometrium). Blokada ER-α w przysadce znosi ujemne sprzężenie zwrotne na wydzielanie GnRH, więc LH i FSH ponownie są wydzielane swobodnie. Podwyższone LH stymuluje receptor LHCGR komórek Leydiga → przywracana jest endogenna produkcja testosteronu. U pacjentów z fenotypem słabego metabolizera CYP2D6 (ok. 7-10% populacji kaukaskiej) poziomy endoksyfenu są niskie, skuteczność Nolvadexu zmniejszona — wskazane badanie genetyczne w przypadku braku odpowiedzi terapeutycznej.",
  "legalStatus": "USA: zatwierdzony przez FDA 1977 (ER+ rak piersi, rak przewodowy in situ, prewencja u kobiet wysokiego ryzyka), Schedule N/A (nie jest substancją kontrolowaną). UE: zatwierdzony przez EMA. HU: zarejestrowany (Nolvadex, Tamoxifen-ratiopharm, Tamoxifen Sandoz Rx). PL: zarejestrowany (Nolvadex Rx). WADA: S4.3 modulator receptora estrogenowego (zabroniony w zawodach i poza zawodami — zakazany dla wszystkich męskich zawodników WADA).",
  "onsetTime": "Wzrost LH 24-72 h, odbudowa Test 2-3 tygodnie",
  "halfLife": "~5-7 dni (parent tamoksyfen)",
  "halfLifeActive": "~14 dni (4-OH-tamoksyfen + endoksyfen aktywne metabolity)",
  "interactionsWith": [
    "clomid",
    "enclomiphene",
    "raloxifene",
    "hcg-perf",
    "anastrozol",
    "warfarin"
  ],
  "aromatization": "Nie aromatyzuje — kompetycyjna blokada receptora estrogenowego (ER-α), NIE hamuje aromatazy CYP19. Poziomy E2 na Nolvadexie często nieznacznie WZRASTAJĄ (z powodu przysadkowej disinhibicji LH → wtórna synteza testikularnego E2). Nolvadex NIE zastępuje inhibitora aromatazy w trakcie cyklu — odmienny mechanizm.",
  "hepatotoxicity": "Niska — niesteroidowy, NIE 17α-alkilowany. Rzadki łagodny wzrost ALT/AST <2% częstość przy dawce PCT. Ryzyko marskości przy chronicznej wysokiej dawce (>40 mg/dzień, 6+ miesięcy) udokumentowane w liście działań niepożądanych FDA Nolvadex SmPC (długoterminowe użycie u kobiet do prewencji/adiuwacji raka piersi); przy dawce PCT 4-6 tygodni klinicznie nie raportowane.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie jest AAS, SERM)",
  "bindingAffinity": "Wysokie powinowactwo kompetycyjne do ER-α (Ki ~3 nM 4-OH-tamoksyfen), do ER-β nieco niższe. Tkankowo-specyficzny efekt konformacyjny tłumaczy przełącznik agonista/antagonista (pierś antagonista, kość agonista).",
  "detectionWindow": "WADA-akredytowane wykrywanie GC-MS/LC-MS/MS w moczu 2-3 miesiące po ostatniej dawce Nolvadexu (tamoksyfen + N-dezmetylo-tamoksyfen markery metaboliczne).",
  "benefits": [
    "Środek pierwszego rzutu do restartu HPTA w PCT po AAS — 60+ lat literatury klinicznej",
    "Blokada ER-α w przysadce → disinhibicja LH/FSH → odbudowa endogennego Test w 2-3 tygodnie",
    "Profilaktyka ginekomastii podczas cyklu (blokada ER-α w piersi)",
    "Działanie ochronne na kości jako częściowy agonista (redukcja osteoporozy jako efekt uboczny)",
    "Wzrost HDL-cholesterolu (wtórny efekt kardioprotekcyjny)",
    "Tanie (~€5-10/opakowanie generic) + globalnie dostępny"
  ],
  "quickStart": [
    "Timing estru: krótki ester (Test-Prop, Tren-Ace) ostatnia iniekcja + 3-5 dni → start Nolvadexu; długi ester (Test-Enan/Cyp, Deca) → 14-21 dni później",
    "Standardowy PCT: 40 mg/dzień × 1-2 tygodnie, potem 20 mg/dzień × 2-4 tygodnie (łącznie 4-6 tygodni)",
    "Przyjmować z wodą, timing z posiłkiem obojętny (biodostępność doustna ~30-40%)",
    "Opcjonalna kombinacja z Clomidem: 'Clomid 50/50/25/25 + Nolva 20/20/20/20' = klasyczny dwuSERM-owy protokół PCT (zmniejszona dawka obu)",
    "Badania krwi: pre-PCT baseline + koniec PCT +2 tygodnie + koniec PCT +6 tygodni potwierdzenie odbudowy",
    "Zaburzenia wzroku (rzadko): scintillating scotoma >40 mg/dzień chronicznie, odwracalne po odstawieniu"
  ],
  "expectations": [
    {
      "label": "Tydzień 1",
      "body": "Wzrost LH/FSH mierzalny (pobranie krwi +5 dni), zmiana objawowa minimalna. U niektórych użytkowników łagodne odczucie grypopodobne lub ból głowy z powodu wahań E2."
    },
    {
      "label": "Tygodnie 2-3",
      "body": "Endogenna produkcja testosteronu zaczyna wracać — odzysk libido, wzrost energii zauważalny. Test lustra: jeśli pod koniec cyklu pojawiły się objawy ginekomastii, teraz słabną."
    },
    {
      "label": "Tygodnie 4-6",
      "body": "Odbudowa Test kompletna (baseline ±10%), oś HPTA funkcjonalna. Panel lipidowy się poprawia (wzrost HDL). Koniec PCT: ostatnia dawka, +2 tygodnie konserwatywnej przerwy przed planowaniem nowego cyklu."
    },
    {
      "label": "Post-PCT",
      "body": "Badania potwierdzające +6 tygodni: Total/Free Test, LH, FSH, E2, SHBG. Jeśli LH/FSH < 50% wieko-specyficznego baseline → konsultacja specjalistyczna (endokrynolog)."
    }
  ],
  "quality": {
    "pure": [
      "AstraZeneca Nolvadex 10 mg lub 20 mg blister, Rx jakość farmaceutyczna (apteka UE dostępne)",
      "Tamoxifen-ratiopharm, Tamoxifen Sandoz, Tamoxifen Hexal generic odpowiednik (UE)",
      "Indyjskie generyki (Sunpharma, Cipla) — jakość farmaceutyczna, tanie, częste w e-aptekach",
      "UGL liquid tamoxifen: HPLC-testowane źródło obowiązkowe — często zaniżona koncentracja lub hybryda z pre-rozbitym 4-OH-tamoksyfenem"
    ],
    "caution": [
      "Fenotyp słabego metabolizera CYP2D6 (7-10% kaukascy) — skuteczność Nolvadexu zredukowana; bez odpowiedzi klinicznej rozważ test genetyczny",
      "Interakcja z SSRI: paroksetyna + fluoksetyna to silne inhibitory CYP2D6 → poziomy endoksyfenu drastycznie spadają (spadek 50%+, Stearns 2003 PMID 12832537); wybierz wenlafaksynę lub citalopram jeśli SSRI konieczne",
      "Interakcja z warfaryną/Coumadinem: wzrost INR oczekiwany, ścisły monitoring",
      "Ryzyko żylnej choroby zakrzepowo-zatorowej (VTE): ryzyko wiekowe (>50 lat) + wywiad rodzinny VTE/PE → ostrożne rozważenie",
      "Skutki uboczne wzrokowe: scintillating scotoma lub złogi siatkówkowe rzadko, zależne od dawki — natychmiastowa konsultacja okulistyczna przy zaburzeniach wzroku"
    ],
    "avoid": [
      "Współczesna ciąża lub karmienie piersią (Pregnancy Category D)",
      "Wywiad złośliwego raka endometrium (Nolvadex częściowy agonista na endometrium → 2-3x wzrost względnego ryzyka)",
      "Aktywna lub niedawna zakrzepica żył głębokich / zatorowość płucna",
      "Wysokie dawki Nolvadexu (>80 mg/dzień) — używane w skrajnie rzadkich wskazaniach, ZAKAZANE w PCT po AAS"
    ]
  },
  "interactions": [
    "Stack SERM (Clomid + Nolva): klasyczny dwumechaniczny PCT, zmniejsz dawkę obu",
    "Współpodanie z AI (Anastrozol/Letrozol/Exemestane): NIE zalecane razem z Nolvadexem w PCT — pokrywający się mechanizm antagonisty, ryzyko crashed-E2",
    "HCG-bridge: HCG → restart testikularnego Test najpierw, Nolvadex potem na szczyt HPTA — skuteczny protokół sekwencyjny",
    "SSRI (paroksetyna/fluoksetyna): hamowanie CYP2D6 → efekt Nolvadexu spada; przełącz na wenlafaksynę/citalopram",
    "Warfaryna/antykoagulanty: wzrost INR, redukcja dawki konieczna, monitor INR co tydzień",
    "Alkohol: stres wątrobowy wzrasta, zalecane umiarkowane spożycie"
  ],
  "studies": [
    {
      "title": "Tamoxifen for prevention of breast cancer: report of the National Surgical Adjuvant Breast and Bowel Project P-1 Study",
      "authors": "Fisher B, Costantino JP, Wickerham DL, et al.",
      "journal": "J Natl Cancer Inst. 1998;90(18):1371-88.",
      "pmid": "9747868"
    },
    {
      "title": "50th anniversary of the first clinical trial with ICI 46,474 (tamoxifen): then what happened?",
      "authors": "Jordan VC",
      "journal": "Endocr Relat Cancer",
      "pmid": "33151906"
    },
    {
      "title": "Anabolic steroid-induced hypogonadism: diagnosis and treatment.",
      "authors": "Rahnema CD, Lipshultz LI, Crosnoe LE, Kovac JR, Kim ED",
      "journal": "Fertil Steril",
      "pmid": "24636400"
    },
    {
      "title": "Enclomiphene citrate: A treatment that maintains fertility in men with secondary hypogonadism.",
      "authors": "Earl JA, Kim ED",
      "journal": "Expert Rev Endocrinol Metab",
      "pmid": "31063005"
    },
    {
      "title": "CYP2D6 genotype, antidepressant use, and tamoxifen metabolism during adjuvant breast cancer treatment.",
      "authors": "Jin Y, Desta Z, Stearns V, Ward B, Ho H, Lee KH, Skaar T, Storniolo AM, Li L, Araba A, Blanchard R, Nguyen A, Ullmer L, Hayden J, Lemler S, Weinshilboum RM, Rae JM, Hayes DF, Flockhart DA",
      "journal": "J Natl Cancer Inst",
      "pmid": "15632378"
    }
  ],
  "faq": [
    {
      "q": "Jak długo po cyklu należy rozpocząć PCT z Nolvadexem?",
      "a": "Timing oparty o ester: krótki ester (Test-Prop, Tren-Ace, Mast-Prop) ostatnia iniekcja + 3-5 dni; średni ester (Test-Enan, Tren-Enan) + 7-10 dni; długi ester (Test-Cyp, Deca, Eq) + 14-21 dni. Cel: do startu PCT egzogenny androgen z zaniku estru powinien spaść poniżej baseline, pozostawiając wolne sprzężenie HPTA. Zbyt wczesny start → efekt SERM stracony; zbyt późny → niepotrzebne opóźnienie restartu HPTA."
    },
    {
      "q": "Nolvadex vs Clomid — który lepszy do PCT?",
      "a": "Oba to SERM-y o podobnym mechanizmie (blokada ER w przysadce), ale różnych profilach. Nolvadex: czystszy profil nastroju, ER-selektywny, słabszy stymulus płodności, ochronny dla kości. Clomid: silniejszy stymulus LH, lepszy nacisk na płodność (większy efekt FSH), ale akumulacja zuklomifenu sprawia że zaburzenia nastroju częstsze (emocjonalne, depresyjne). Nowoczesny złoty standard PCT po AAS: Nolvadex pierwszy, Clomid jako backup lub stack (Karavolos 2015). Cel odbudowy płodności: Clomid preferowany; cel czystego restartu HPTA: Nolvadex."
    },
    {
      "q": "Czy wpływa na IGF-1?",
      "a": "Tak — udokumentowany umiarkowany spadek IGF-1 (~10-15% od baseline). Mechanizm: ER-α jest częściowym agonistą na hepatocytach, ale tamoksyfen blokuje pełną ścieżkę stymulacji IGF-1. Klinicznie przejściowe — wraca do baseline w 4-6 tygodni po końcu PCT. Jeśli po PCT pojawią się objawy niedoboru IGF-1 (zmęczenie, wolniejsza regeneracja), można rozważyć HGH-bridge (off-label, drogie)."
    },
    {
      "q": "Czy zaburzenia wzroku (scintillating scotoma) są poważne?",
      "a": "Rzadki efekt uboczny, zależny od dawki. Chroniczne stosowanie Nolvadexu >40 mg/dzień (6+ miesięcy) wykazuje 1-3% częstość (FDA Nolvadex SmPC). Przy dawce PCT (20-40 mg × 4-6 tygodni) klinicznie pomijalne. Objawy: scintillating scotoma (migoczący wzór zigzag w polu widzenia), kryształowe złogi siatkówkowe w przypadkach przewlekłych. Odwracalne po odstawieniu. Przy objawach — konsultacja okulistyczna, badanie dna oka wskazane."
    },
    {
      "q": "Wybuch trądziku lub wahania nastroju podczas PCT — co robić?",
      "a": "Oba są częstymi przejściami — NIE bezpośredni efekt uboczny Nolvadexu, ale naturalna konsekwencja restartu HPTA. E2-rebound (synteza testikularnego E2 nagle wznawia się po disinhibicji LH) → wybuch trądziku w tygodniach 2-4. Niestabilność nastroju: fluktuacja psychologiczna podczas restartu testosteronu jest normalna. Łagodzenia: omega-3 + cynk + dieta o niskim E2-rebound; jeśli ciężkie, protokół taper (40 mg → 30 mg → 20 mg → 10 mg, 1 tydzień na dawkę) może wytłumić wahania."
    }
  ],
  "related": [
    "clomid",
    "enclomiphene",
    "raloxifene",
    "hcg-perf",
    "anastrozol"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 20,
      "medium": 30,
      "high": 40
    },
    "unit": "mg/dzień (doustnie, podzielone 1-2x)",
    "note": "Standardowy PCT po AAS: 40 mg/dzień × 1-2 tygodnie, potem 20 mg/dzień × 2-4 tygodnie (łącznie 4-6 tygodni). Po cyklu wysokiego poziomu (stack Test+Tren+Anadrol) protokół taper: 40/30/20/10 mg, 1 tydzień na dawkę. Badania krwi pre-PCT, koniec PCT +2 tygodnie, +6 tygodni potwierdzenie odbudowy."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-PCT (ostatnia dawka AAS + czas klirensu estru)",
      "timing": "Cykl krótkiego estru + 3-5 dni; długi ester + 14-21 dni",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS sensitive-assay), LH, FSH, SHBG, Prolaktyna, panel lipidowy (TC/LDL/HDL/TG), ALT, AST, GGT, hemogram.",
      "purpose": "Baseline do śledzenia trajektorii restartu HPTA. LH/FSH niskie (zahamowane), Test niski (post-supresja), E2 wysoki lub niski (zależnie od użycia AI w cyklu) — odbudowa zaczyna się stąd."
    },
    "midCycle": {
      "label": "Mid-PCT (Nolvadex tydzień 2)",
      "timing": "Start Nolvadexu +14 dni",
      "markers": "LH, FSH (potwierdzenie postępu odbudowy), Total Test (potwierdzenie wczesnego restartu), E2 (monitor rebound — obserwacja wybuchu ginekomastii), Prolaktyna (po cyklach Tren), ALT/AST.",
      "purpose": "Pomiar pośredni: wzrost LH/FSH mierzalny (zwykle +50-200% od baseline), wzrost Test rozpoczyna się (+30-100% post-supresja), monitor E2-rebound. Jeśli E2 >50 pg/mL z objawami ginekomastii → rozważ niskodawkowe dodanie Anastrozolu (NIE standard)."
    },
    "postCycle": {
      "label": "Koniec PCT + potwierdzenie odbudowy",
      "timing": "Ostatnia dawka Nolvadexu +2 tygodnie i +6 tygodni (dwa pomiary)",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, panel lipidowy, ALT/AST, hemogram, ciśnienie krwi.",
      "purpose": "Potwierdzenie: Test ≥ 80% baseline pre-cyklu, LH/FSH ≥ dolny zakres wieko-specyficzny. Poprawa panelu lipidowego (wzrost HDL jest częścią ochronnego działania na kości pośredniczonego przez Nolvadex). Jeśli LH/FSH < 50% baseline → konsultacja specjalistyczna (uporczywa wtórna hipogonadyzm)."
    },
    "cruise": {
      "label": "Długoterminowe użycie — NIE kontekst PCT po AAS",
      "timing": "Kobiece prewencyjne raka piersi: 5-10 lat chronicznie; PCT po AAS: max 4-6 tygodni",
      "markers": "Cruise N/A w PCT po AAS — Nolvadex używany tylko w PCT, nie podczas cruise.",
      "purpose": "Ryzyka chronicznego użycia SERM (rak endometrium, VTE, wzrok) pomijalne w ramach 4-6 tygodni PCT po AAS."
    }
  },
  "anecdote": "Nolvadex (Tamoksyfen) i Raloksyfen są anegdotycznie dwoma najbardziej niezawodnymi związkami do zapobiegania ginekomastii, ponieważ tamoksyfen bezpośrednio blokuje estrogen na poziomie receptora selektywnie w tkance piersi — wysoce ukierunkowany mechanizm. W przeciwieństwie do Arimidexu, nie jest inhibitorem aromatazy, więc korzyści są ukierunkowane na receptor, a nie ogólnoustrojowe. Jest powszechnie stosowany w protokołach PCT, ponieważ bardziej bezpośrednio stymuluje LH/FSH, co może być przydatne do regeneracji HPTA. Zgłaszane skutki uboczne obejmują łagodne wahania nastroju, rzadkie zaburzenia widzenia i długoterminowe ryzyko zakrzepów krwi — choć większość raportów o zakrzepach pochodzi od kobiet po menopauzie stosujących go do profilaktyki raka piersi, więc zastosowanie do użytkowników AAS jest mniej jasne. Ogólnie doniesienia społeczności uznają Nolvadex za solidne narzędzie do blokowania estrogenu w tkance piersi i silną opcję zapobiegania ginekomastii. Podawany doustnie, dawkowanie zwykle strukturyzowane w cyklach wielotygodniowych, szczególnie podczas PCT."
}
