// Bromokryptyna (Parlodel) — pierwszej generacji ergotaminowy agonista D2.
// Sandoz 1972 (Parlodel), FDA 1978. Poprzednik kabergoliny, obecnie nisza.
// Cycloset 2009 FDA wskazanie T2DM.
// Źródła: FDA Parlodel SmPC, FDA Cycloset SmPC, Webster 1994 PMID 8090165,
// Krupp 1981 PMID 7032404.

export default {
  "id": "bromocriptine",
  "sideEffects": [
    { "hu": "Hányinger és hányás (a leggyakoribb, akár a betegek többségénél), különösen titrálás elején; étkezéssel és lassú dózisemeléssel mérsékelhető.", "en": "Nausea and vomiting (the most common effect, in a majority of patients), especially at the start of titration; mitigated by taking with food and slow dose escalation.", "pl": "Nudności i wymioty (najczęstszy efekt, u większości pacjentów), zwłaszcza na początku titracji; łagodzone przyjmowaniem z posiłkiem i powolnym zwiększaniem dawki." },
    { "hu": "Ortosztatikus (testhelyzeti) hypotensio, szédülés, ájulás, főleg az első dózisok után; lassan kelj fel ülő vagy fekvő helyzetből.", "en": "Orthostatic (postural) hypotension, dizziness, fainting, especially after the first doses; rise slowly from sitting or lying.", "pl": "Niedociśnienie ortostatyczne (posturalne), zawroty głowy, omdlenia, zwłaszcza po pierwszych dawkach; wstawaj powoli z pozycji siedzącej lub leżącej." },
    { "hu": "Fejfájás, fáradtság, orrdugulás és hasi diszkomfort, az ergot-dopaminerg hatás vegetatív velejárói.", "en": "Headache, fatigue, nasal congestion and abdominal discomfort, vegetative accompaniments of the ergot-dopaminergic effect.", "pl": "Ból głowy, zmęczenie, zatkany nos i dyskomfort w jamie brzusznej, wegetatywne objawy działania ergotaminowo-dopaminergicznego." },
    { "hu": "Impulzuskontroll-zavarok (kényszeres játék, vásárlás, hiperszexualitás, falásrohamok), valamint nappali aluszékonyság vagy hirtelen elalvás, mint a dopaminagonisták osztályhatása.", "en": "Impulse-control disorders (compulsive gambling, shopping, hypersexuality, binge eating) plus daytime somnolence or sudden sleep onset, a class effect of dopamine agonists.", "pl": "Zaburzenia kontroli impulsów (kompulsywny hazard, zakupy, hiperseksualność, napadowe objadanie się) oraz senność w ciągu dnia lub nagłe zaśnięcie, efekt klasy agonistów dopaminy." },
    { "hu": "Pszichés tünetek magasabb dózison: konfúzió, hallucináció, dyskinesia (önkéntelen mozgások), izgatottság; rendszerint dózisfüggő és leállításra visszafordul.", "en": "Psychiatric symptoms at higher doses: confusion, hallucinations, dyskinesia (involuntary movements), agitation; usually dose-dependent and reversible on stopping.", "pl": "Objawy psychiatryczne przy wyższych dawkach: splątanie, halucynacje, dyskinezy (mimowolne ruchy), pobudzenie; zwykle zależne od dawki i odwracalne po odstawieniu." },
    { "hu": "Raynaud-szerű perifériás vazospazmus, hidegérzés és ujjelszíneződés; ritkán súlyos, ergot-osztályspecifikus érösszehúzó hatás.", "en": "Raynaud-like peripheral vasospasm, coldness and digital discoloration; rarely severe, an ergot-class vasoconstrictive effect.", "pl": "Skurcz naczyń obwodowych typu Raynauda, uczucie zimna i przebarwienia palców; rzadko ciężki, naczynioskurczowy efekt klasy ergotaminowej." },
    { "hu": "Krónikus, magas dózisú használatnál (Parkinson-protokoll szint) fibrotikus szövődmények: szívbillentyű-fibrózis, retroperitoneális és tüdő-mellhártya fibrózis; PCT-dózison alacsony, de évenkénti echokardiográfia tartós használatnál indokolt.", "en": "With chronic high-dose use (Parkinson-protocol level) fibrotic complications: cardiac valve fibrosis, retroperitoneal and pleuropulmonary fibrosis; low at PCT doses, but annual echocardiography is warranted with prolonged use.", "pl": "Przy przewlekłym stosowaniu wysokich dawek (poziom protokołu parkinsonowskiego) powikłania zwłókniające: zwłóknienie zastawek serca, zwłóknienie zaotrzewnowe i opłucnowo-płucne; niskie przy dawkach PCT, ale roczna echokardiografia jest uzasadniona przy długim stosowaniu." },
    { "hu": "Cycloset (gyors felszabadulású 0,8 mg reggeli) forma: enyhébb vegetatív profil, de továbbra is hányinger, fáradtság és hypotensio előfordulhat, főleg vérnyomáscsökkentőkkel együtt.", "en": "Cycloset (quick-release 0.8 mg morning) form: milder vegetative profile, but nausea, fatigue and hypotension can still occur, especially combined with antihypertensives.", "pl": "Postać Cycloset (szybkouwalniająca 0,8 mg rano): łagodniejszy profil wegetatywny, ale nudności, zmęczenie i niedociśnienie nadal mogą wystąpić, zwłaszcza w połączeniu z lekami hipotensyjnymi." }
  ],
  "contraindications": [
    { "hu": "Nem kontrollált magas vérnyomás, terhességi hypertonia, eclampsia vagy preeclampsia kórelőzmény, illetve súlyos ischaemiás szívbetegség, mert az ergot-vazospazmus veszélyes (a posztpartum indikációt épp emiatt visszavonták).", "en": "Uncontrolled hypertension, hypertensive disorders of pregnancy, eclampsia or preeclampsia history, and severe ischemic heart disease, because ergot vasospasm is dangerous (the postpartum indication was withdrawn for this reason).", "pl": "Niekontrolowane nadciśnienie, nadciśnieniowe zaburzenia ciąży, eklampsja lub stan przedrzucawkowy w wywiadzie oraz ciężka choroba niedokrwienna serca, ponieważ skurcz naczyń wywołany ergotaminą jest niebezpieczny (z tego powodu wycofano wskazanie poporodowe)." },
    { "hu": "Ergot-alkaloid túlérzékenység (pl. ergotamin, methylergometrin, más ergot-származékok) keresztallergia miatt.", "en": "Ergot-alkaloid hypersensitivity (e.g. ergotamine, methylergometrine, other ergot derivatives) due to cross-allergy.", "pl": "Nadwrażliwość na alkaloidy sporyszu (np. ergotamina, metyloergometryna, inne pochodne sporyszu) z powodu alergii krzyżowej." },
    { "hu": "Antipszichotikumokkal (D2-antagonisták) és más dopaminblokkolókkal (pl. metoclopramid) való együttadás: kölcsönösen kioltó hatás, ezért az antiemézist NEM metoclopramiddal kell végezni.", "en": "Co-administration with antipsychotics (D2 antagonists) and other dopamine blockers (e.g. metoclopramide): mutually antagonistic effect, so antiemesis must NOT use metoclopramide.", "pl": "Jednoczesne stosowanie z lekami przeciwpsychotycznymi (antagoniści D2) i innymi blokerami dopaminy (np. metoklopramid): wzajemne znoszenie działania, dlatego do leczenia wymiotów NIE wolno stosować metoklopramidu." },
    { "hu": "Impulzuskontroll-zavar, kontrollálatlan pszichózis vagy súlyos pszichiátriai kórelőzmény, mert a dopaminagonista súlyosbíthatja (Cabergoline-on jelentkező ICD esetén is óvatosan).", "en": "Impulse-control disorder, uncontrolled psychosis or significant psychiatric history, because the dopamine agonist can worsen them (also caution if ICD occurred on Cabergoline).", "pl": "Zaburzenia kontroli impulsów, niekontrolowana psychoza lub istotny wywiad psychiatryczny, ponieważ agonista dopaminy może je nasilić (ostrożnie także, jeśli ICD wystąpiło przy Cabergoline)." },
    { "hu": "Súlyos máj- vagy veseelégtelenség, mert a CYP3A4-metabolizmus és a kiürülés zavart, a hatóanyagszint megemelkedhet.", "en": "Severe hepatic or renal impairment, because CYP3A4 metabolism and clearance are disturbed and drug levels can rise.", "pl": "Ciężka niewydolność wątroby lub nerek, ponieważ metabolizm CYP3A4 i klirens są zaburzone, a stężenie leku może wzrosnąć." },
    { "hu": "Erős CYP3A4-gátlókkal (makrolid antibiotikumok, azol gombaellenes szerek, proteázgátlók) együtt: a bromocriptin szintje és toxicitása megnő, dóziscsökkentés vagy kerülés szükséges.", "en": "Together with strong CYP3A4 inhibitors (macrolide antibiotics, azole antifungals, protease inhibitors): bromocriptine levels and toxicity rise, requiring dose reduction or avoidance.", "pl": "Razem z silnymi inhibitorami CYP3A4 (antybiotyki makrolidowe, azolowe leki przeciwgrzybicze, inhibitory proteazy): stężenie i toksyczność bromokryptyny wzrastają, wymagane zmniejszenie dawki lub unikanie." },
    { "hu": "Terhesség és szoptatás: a prolaktin elnyomása gátolja a tejtermelést, és terhességben csak szigorú indikációval használható; fertilitást helyreállíthat, ezért nem kívánt teherbeesés is felléphet.", "en": "Pregnancy and breastfeeding: prolactin suppression inhibits lactation, and in pregnancy use only on strict indication; it can restore fertility, so unintended conception may occur.", "pl": "Ciąża i karmienie piersią: supresja prolaktyny hamuje laktację, a w ciąży stosować tylko przy ścisłym wskazaniu; może przywrócić płodność, więc może dojść do nieplanowanego poczęcia." }
  ],
  "name": "Bromokryptyna (Parlodel)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Pierwszej generacji ergotaminowy agonista D2 dopaminy, Sandoz 1972 (Parlodel). Poprzednik kabergoliny; krótszy okres półtrwania (~3-12 h), więcej wegetatywnych skutków ubocznych (nudności, hipotensja). Sprzedawany też jako Cycloset (2009 FDA) na T2DM.",
  "description": "Bromokryptyna (Parlodel) jest pierwszej generacji agonistą receptora D2 dopaminy o strukturze ergotaminowej, zsyntetyzowanym przez Sandoz (obecnie Novartis) w 1972 roku i zatwierdzonym przez FDA w 1978 roku na hiperprolaktynemię (Parlodel 2,5/5 mg). Ma dłuższą historię kliniczną niż kabergolina, i chociaż w dużej mierze została zastąpiona przez czystszą kabergolinę D2-selektywną, pozostała w arsenale AAS-PCT z trzech powodów: (1) Cena — generyk ~€3/opakowanie (vs kabergolina ~€25-40), szczególnie atrakcyjne na rynkach farmaceutycznych krajów rozwijających się; (2) Fallback nietolerancji kabergoliny (gdy występuje zaburzenie kontroli impulsów lub utrzymujące się nudności na kabergolinie); (3) Drugorzędna aplikacja korzyści metabolicznej — Cycloset (S2 Therapeutics, FDA 2009) jest specjalną formulacją quick-release mezylanu bromokryptyny do poprawy wrażliwości insulinowej w cukrzycy typu 2 (podstawy PMID Cincotta 1991/1996), która może być incydentalnie użyteczna u otyłego cyklera AAS. Profil mechanistyczny: agonista mieszany D1+D2 (vs kabergolina selektywna D2), stąd więcej wegetatywnych skutków ubocznych (nudności, hipotensja ortostatyczna, dyskinezja), krótszy okres półtrwania (~3-12 h, wymagający dawkowania 2-3× dziennie).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Pierwszej generacji ergotaminowy mieszany agonista D1+D2 DA, supresja prolaktyny + drugorzędna poprawa wrażliwości insulinowej T2DM"},
    {"label": "Dawkowanie (AAS prolaktyna)", "value": "1,25-5 mg/dzień podzielone 2-3× (start 1,25 mg z jedzeniem, powolne miareczkowanie)"},
    {"label": "Okres półtrwania", "value": "~3-12 godzin"},
    {"label": "Początek działania", "value": "Redukcja prolaktyny 1-2 h, plateau 8-24 h"},
    {"label": "Status prawny", "value": "FDA + EMA Rx, HU + PL zarejestrowany, WADA allowed"}
  ],
  "mechanism": "Bromokryptyna jest agonistą D2 o strukturze ergotaminowej (D2 Ki ~5 nM, ~10× mniej selektywny dla D1 niż kabergolina). Wiąże się z receptorem D2 na laktotrofach przysadki, hamując wydzielanie prolaktyny. Nieselektywna aktywność D1+D2 powoduje różnicę profilu wegetatywnego: hipotensja ortostatyczna, nudności/wymioty (efekt dopaminergiczny obwodowy), dyskinezja (modulacja dopaminy OUN). Działa również na receptory D2 komórek β trzustki — to podstawa formulacji Cycloset (quick-release dawka 0,8 mg rano) dla cukrzycy typu 2: poranny puls dopaminy poprawia obwodową wrażliwość insulinową (paper mechanistyczny Cincotta 1991). Wątrobowy CYP3A4 metabolizuje, ~30% biodostępność. W kontekście AAS: bromokryptyna może zastąpić kabergolinę w kontroli prolaktyny, ale jest drugorzędną opcją ze względu na więcej skutków ubocznych.",
  "legalStatus": "USA: FDA-approved Parlodel 1978 (Sandoz, obecnie Novartis), Cycloset 2009 (S2 Therapeutics, wskazanie T2DM). Wskazania: hiperprolaktynemia, prolaktynoma, adjuvant choroby Parkinsona, akromegalia, T2DM (Cycloset). UE: zatwierdzony przez EMA. HU: zarejestrowany (Parlodel Rx). PL: zarejestrowany (Bromergon, Parlodel Rx). WADA: nie na liście.",
  "onsetTime": "Redukcja prolaktyny 1-2 h, plateau 8-24 h",
  "halfLife": "~3-12 godzin",
  "halfLifeActive": "~3-12 godzin (związek macierzysty aktywny)",
  "interactionsWith": ["cabergoline", "pramipexole", "trenbolone-info", "nandrolone-info"],
  "aromatization": "Brak — agonista DA.",
  "hepatotoxicity": "Niska hepatyczna; ryzyko cardiac valvulopathy podobne do kabergoliny przy wysokich dawkach; rzadziej udokumentowane w kontekście AAS-PCT.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS)",
  "bindingAffinity": "D2 Ki ~5 nM, D1 ~30-50 nM (agonista mieszany). Komórki β trzustki D2 ~10 nM (podstawa mechanizmu Cycloset).",
  "detectionWindow": "Nie istotny (WADA nie na liście).",
  "benefits": [
    "Akcent kosztów rynki rozwijające się: ~€3/opakowanie vs kabergolina ~€25-40",
    "Fallback nietolerancji kabergoliny (ICD, utrzymujące się nudności)",
    "Aplikacja Cycloset T2DM: poprawa wrażliwości insulinowej u otyłego cyklera AAS",
    "Długa historia kliniczna (od 1972, >50 lat)",
    "UE + globalnie dostępna pharma-grade"
  ],
  "quickStart": [
    "Powolne miareczkowanie OBOWIĄZKOWE: 1,25 mg/wieczór (przed snem + z jedzeniem) × 3-7 dni, potem 2×/dzień, potem 3×/dzień",
    "Standardowa kontrola prolaktyny w AAS: 2,5 mg 2×/dzień (rano + wieczór)",
    "MUSI z jedzeniem (znacząca ulga w nudnościach)",
    "Bloodwork: prolaktyna pre-treatment + 7-10 dni później powtórzenie",
    "Bromokryptyna NIE zalecana u użytkowników bez doświadczenia z kabergoliną (kabergolina lepiej tolerowana)",
    "Opcja zamiany w przypadku alergii na kabergolinę lub historii ICD na kabergolinie"
  ],
  "expectations": [
    {"label": "Dzień 1-3", "body": "Znaczące nudności (orientacyjny skutek uboczny), łagodna hipotensja ortostatyczna. Redukcja prolaktyny mierzalna (~20-40%)."},
    {"label": "Tydzień 1-2", "body": "Rozwija się tolerancja (po miareczkowaniu), nudności ustępują. Cel prolaktyny <15 ng/mL osiągalny na stabilnej dawce 2,5-5 mg/dzień."},
    {"label": "Długoterminowe stosowanie", "body": "Stan stacjonarny, coroczny monitor cardiac valvulopathy. Przypadek użycia Cycloset T2DM: redukcja HbA1c 0,5-1,0% jako terapia adjuwantowa do metforminy (Pijl 2000)."},
    {"label": "Po zaprzestaniu", "body": "Rebound prolaktyny przez 1-2 tygodnie. Krótki okres półtrwania → szybszy washout niż kabergolina."}
  ],
  "quality": {
    "pure": [
      "Novartis Parlodel 2,5/5 mg, Rx pharma-grade (apteka UE)",
      "Generyk mezylanu bromokryptyny (Sandoz, Teva, Ratiopharm)",
      "Cycloset 0,8 mg (S2 Therapeutics, US T2DM Rx) — poranna dawka quick-release",
      "Indyjski generyk (Sun Pharma Bromergon, Cipla)",
      "UGL liquid bromokryptyna: rzadkie, wymagane źródło testowane HPLC"
    ],
    "caution": [
      "Zarządzanie nudnościami: powolne miareczkowanie od 1,25 mg w krokach 3-7 dni, zawsze z jedzeniem",
      "Hipotensja ortostatyczna: wstawać powoli rano, monitor nawodnienia",
      "Cardiac valvulopathy: chronic wysoka dawka (>30 mg/dzień, protokół Parkinsona) — przy dawce AAS ryzyko jest niskie",
      "Dyskinezja: rzadka, zależna od dawki — odwracalna po zaprzestaniu",
      "Nie można łączyć z lekami przeciwpsychotycznymi (nakładanie antagonizmu D2)",
      "Ciąża / karmienie piersią"
    ],
    "avoid": [
      "Bez nietolerancji kabergoliny (kabergolina jest pierwszorzędna)",
      "Zaburzenia nadciśnieniowe ciąży (historia rzucawki)",
      "Alergia na alkaloidy ergotu",
      "Ciężka niewydolność wątroby",
      "Aktualna terapia lekami przeciwpsychotycznymi"
    ]
  },
  "interactions": [
    "Kabergolina: nie można łączyć (nakładający się mechanizm)",
    "Pramipexole: nie można łączyć",
    "Stack trenbolon/nandrolon: standardowa alternatywna kontrola prolaktyny (użytkownik nietolerujący kabergoliny)",
    "Leki przeciwpsychotyczne: przeciwwskazane (antagonizm D2)",
    "Przeciwnadciśnieniowe: ostrożność z nasileniem hipotensji",
    "Antybiotyki makrolidowe (erytromycyna, klarytromycyna): hamowanie CYP3A4 → wzrost poziomu bromokryptyny",
    "Jedzenie: OBOWIĄZKOWE z jedzeniem (zapobieganie nudnościom)"
  ],
  "studies": [
    {"title": "Impact of menopause on outcomes in prolactinomas after dopamine agonist treatment withdrawal.", "authors": "Santharam S, Fountas A, Tampourlou M", "journal": "Clin Endocrinol (Oxf)", "pmid": "29894000"},
    {"title": "Evidence-based practice use of quick-release bromocriptine across the natural history of type 2 diabetes mellitus.", "authors": "Schwartz SS, Zangeneh F", "journal": "Postgrad Med", "pmid": "27458683"},
    {"title": "Bromocriptine in type 2 diabetes: a promising alternative, a systematic review and meta-analysis.", "authors": "Dara T, Zabihi M, Hoseinzade F", "journal": "Cardiovasc Diabetol Endocrinol Rep", "pmid": "41013660"},
    {"title": "Bromocriptine for diabetes — randomized controlled trial", "authors": "Pijl H, Ohashi S, Matsuda M, et al.", "journal": "Diabetes Care. 2000;23(8):1154-1161.", "pmid": "10937514"}
  ],
  "faq": [
    {"q": "Bromokryptyna vs kabergolina — kiedy pierwszorzędna?", "a": "Kabergolina jest domyślnym pierwszorzędnym wyborem (90% użytkowników AAS-PCT). Bromokryptyna jest pierwszorzędna w 3 sytuacjach niszowych: (1) Ekonomia rynków rozwijających się — bromokryptyna ~€3/opakowanie vs kabergolina ~€25-40, droższa kabergolina w aptekach na Węgrzech/w Polsce; (2) Nietolerancja kabergoliny — jeśli zaburzenie kontroli impulsów lub utrzymujące się nudności na kabergolinie, fallback bromokryptyną; (3) Aplikacja Cycloset T2DM — otyły cykler AAS (BMI >30, prediabetes HbA1c 5,7-6,4%), Cycloset 0,8 mg poranny quick-release dla poprawy wrażliwości insulinowej jako korzyść uboczna obok kontroli prolaktyny. U użytkowników bez doświadczenia z kabergoliną NIE bromokryptyna — kabergolina lepiej tolerowana."},
    {"q": "Zarządzanie nudnościami?", "a": "Skutek uboczny #1 bromokryptyny. Strategia łagodzenia: (1) Powolne miareczkowanie OBOWIĄZKOWE — 1,25 mg/wieczór (przed snem) × 3-7 dni, potem 1,25 mg 2×/dzień × 3-7 dni, potem 2,5 mg 2×/dzień × 7 dni, potem dawka docelowa; (2) MUSI z jedzeniem (nigdy pusty żołądek); (3) Pierwsze dawkowanie wieczorem (przespanie szczytu nudności); (4) Antiemetyk (metoclopramid NIE jest dobry — konflikt antagonisty D2 z mechanizmem bromokryptyny!), preferuj ondansetron 4 mg PRN. Jeśli nudności utrzymują się po 2 tygodniach → zmiana na kabergolinę."},
    {"q": "Aplikacja Cycloset T2DM — korzyść metaboliczna AAS?", "a": "Cycloset (mezylan bromokryptyny quick-release 0,8 mg rano) w trialach Pijl 2000 (PMID 10937514) i Cincotta 1996 (PMID 8725867) udokumentował redukcję HbA1c 0,5-1,0% jako terapia adjuwantowa do metforminy u pacjentów z cukrzycą typu 2. Mechanizm: poranny puls dopaminy poprawia obwodową (tłuszcz + wątroba) wrażliwość insulinową. AAS context off-label: otyły cykler AAS (BMI >30, nietolerancja glukozy po stack GH/Insulin) może zastosować jako korzyść uboczną. NIE zastępuje metforminy/inhibitora SGLT2. Kabergolina NIE ma tej aplikacji T2DM (inny mechanizm z powodu selektywności D2)."},
    {"q": "Korzyść seksualna podobna do kabergoliny?", "a": "Tak, ale na niższej magnitudzie. Skrócenie okresu refrakcji post-orgazmicznej w stylu Krüger 2003 jest silniej udokumentowane na kabergolinie (z powodu selektywności D2). Na bromokryptynie korzyść seksualna jest mniejsza, a profil skutków ubocznych (nudności, hipotensja) może pogorszyć jakość życia seksualnego — net effect mieszany. Jeśli akcent seksualny jest celem, kabergolina > bromokryptyna."}
  ],
  "related": ["cabergoline", "pramipexole", "trenbolone-info", "nandrolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 1.25, "medium": 2.5, "high": 5},
    "unit": "mg / dzień podzielone 2-3× (doustnie, z jedzeniem)",
    "note": "Standardowa kontrola prolaktyny w AAS: 2,5-5 mg/dzień podzielone 2-3×. Powolne miareczkowanie OBOWIĄZKOWE od 1,25 mg (zarządzanie nudnościami). Aplikacja Cycloset T2DM: 0,8 mg poranny quick-release. Drugorzędna do kabergoliny — pierwszy wybór tylko w przypadku nietolerancji/akcent kosztów/przypadek Cycloset."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed startem bromokryptyny",
      "timing": "Cykl 19-Nor/Tren tydzień 4-6 lub początek nietolerancji kabergoliny",
      "markers": "Prolaktyna, Total/Wolny Test, E2, lipidogram, ALT/AST, HbA1c jeśli otyły (monitor aplikacji Cycloset T2DM).",
      "purpose": "Baseline. Wskazanie: prolaktyna >25 ng/mL ORAZ (nietolerancja kabergoliny LUB akcent T2DM Cycloset LUB akcent kosztów rynki rozwijające się)."
    },
    "midCycle": {
      "label": "Bromokryptyna dzień 10-14",
      "timing": "Koniec miareczkowania bromokryptyny +7-14 dni",
      "markers": "Prolaktyna (powtórzenie), Total Test, monitor ciśnienia krwi, HbA1c jeśli użycie Cycloset, ALT/AST.",
      "purpose": "Potwierdzenie miareczkowania: cel prolaktyny <15 ng/mL. Monitor skutków ubocznych (tolerancja nudności, hipotensja ortostatyczna). Dla aplikacji Cycloset T2DM, redukcja HbA1c ~3 miesiące później."
    },
    "postCycle": {
      "label": "Koniec cyklu / zaprzestanie bromokryptyny",
      "timing": "Ostatnia dawka +1 tydzień (krótki okres półtrwania → szybszy washout)",
      "markers": "Prolaktyna (monitor rebound), Total/Wolny Test, ciśnienie krwi, HbA1c.",
      "purpose": "Potwierdź: prolaktyna wraca do baseline w 1-2 tygodnie."
    },
    "cruise": {
      "label": "Chronic aplikacja Cycloset T2DM na AAS cruise",
      "timing": "0,8 mg poranny quick-release chronic",
      "markers": "HbA1c co 3 miesiące, prolaktyna co 6 miesięcy, ciśnienie krwi, echokardiografia rocznie (chronic ergot-use cardiac monitor).",
      "purpose": "Aplikacja off-label Cycloset T2DM cruise u otyłego użytkownika AAS. Coroczny monitor kardio rozsądny."
    }
  }
}
