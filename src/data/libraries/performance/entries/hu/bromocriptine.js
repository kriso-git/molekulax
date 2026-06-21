// Bromocriptine (Parlodel) – első generációs ergot-D2-dopamin agonista.
// Sandoz 1972 (Parlodel), FDA 1978. Cabergoline elődje, ma niche-választás.
// Cycloset 2009 FDA T2DM-indikációval.
// Sources: FDA Parlodel SmPC, FDA Cycloset SmPC, Webster 1994 PMID 8090165,
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
  "name": "Bromocriptine (Parlodel)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Első generációs ergot-D2-DA-agonista, Sandoz 1972 (Parlodel). Cabergoline elődje; rövidebb felezés (~3-12 h), több vegetatív mellékhatás (nausea, hypotensio). Cycloset (2009 FDA) T2DM-indikációval is.",
  "description": "A Bromocriptine (Parlodel) az első generációs ergot-szerkezetű dopamin D2-receptor agonista, amelyet a Sandoz (ma Novartis) szintetizált 1972-ben, és 1978-ban kapott FDA-jóváhagyást hyperprolaktinémiára (Parlodel 2.5/5 mg). Hosszabb klinikai múlttal rendelkezik mint a Cabergoline, és bár nagyrészt szupersedáltatták a tisztább D2-szelektivitású Cabergoline-nel, három okból megmaradt az AAS-PCT-arzenálban: (1) Ár – generikum ~€3/box (vs Cabergoline ~€25-40), különösen emerging-markets gyógyszer-piacon vonzó; (2) Cabergoline-intolerancia fallback (Cabergoline-on impulse-control disorder vagy nausea-persisting esetén); (3) Metabolic-benefit szekunder application – a Cycloset (S2 Therapeutics, FDA 2009) Bromocriptine-mesylát-egy különleges quick-release formulációja Type-2-diabetes inzulin-szenzitivitás-javításra (Cincotta 1991/1996 PMIDs alapján), ami az obese AAS-cyclerön mellékesen jól jöhet. Mechanikus profil: D1+D2 mixed agonist (vs Cabergoline D2-szelektív), így több vegetatív side-effect (nausea, orthostatic hypotensio, dyskinesia), rövidebb felezés (~3-12 h, 2-3x napi dose szükséges).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Első generációs ergot D1+D2-mixed DA-agonista, prolaktin-szuppresszió + szekunder T2DM-inzulin-szenzitivitás-javítás"},
    {"label": "Adagolás (AAS prolaktin)", "value": "1.25-5 mg/nap divided 2-3x (kezdés 1.25 mg étkezéssel, lassú-titrálás)"},
    {"label": "Felezési idő", "value": "~3-12 óra"},
    {"label": "Hatáskezdet", "value": "Prolaktin-csökkenés 1-2 óra, plateau 8-24 óra"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx, HU + PL törzskönyvezett, WADA allowed"}
  ],
  "mechanism": "A Bromocriptine ergot-szerkezetű D2-agonista (D2 Ki ~5 nM, ~10x kevésbé szelektív D1 felett mint Cabergoline). A pituitár lactotrof D2-receptorhoz kötődik, gátolva a prolaktin-szekréciót. A nem-szelektív D1+D2-aktivitás okozza a vegetatív profil-különbséget: orthostatic hypotensio, nausea/vomiting (perifériás dopaminerg-effekt), dyskinesia (CNS-dopamin-modulation). Pancreatic β-sejtek D2-receptorára is hat – ez a Cycloset-formuláció (quick-release 0.8 mg morning-dose) Type-2-diabetes-applikáció alapja: a morning dopamine-pulse javítja a perifériás inzulin-szenzitivitást (Cincotta 1991 mechanism paper). Hepatikus CYP3A4 metabolizál, ~30%-os bioavailability. AAS-kontextusban: a Bromocriptine helyettesítheti a Cabergoline-t prolaktin-control-ra, DE a több mellékhatás miatt second-line választás.",
  "legalStatus": "USA: FDA-jóváhagyott Parlodel 1978 (Sandoz, ma Novartis), Cycloset 2009 (S2 Therapeutics, T2DM-indikáció). Indikációk: hyperprolaktinémia, prolaktinoma, Parkinson-kór adjuváns, akromegália, T2DM (Cycloset). EU: EMA-jóváhagyott. HU: törzskönyvezett (Parlodel Rx). PL: törzskönyvezett (Bromergon, Parlodel Rx). WADA: nem listán.",
  "onsetTime": "Prolaktin-csökkenés 1-2 óra, plateau 8-24 óra",
  "halfLife": "~3-12 óra",
  "halfLifeActive": "~3-12 óra (parent compound aktív)",
  "interactionsWith": ["cabergoline", "pramipexole", "trenbolone-info", "nandrolone-info"],
  "aromatization": "Nincs – DA-agonista.",
  "hepatotoxicity": "Alacsony hepatikus; cardiac valvulopathy risk hasonló mint Cabergoline magas dózison; ritkábban dokumentált AAS-PCT kontextusban.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS)",
  "bindingAffinity": "D2 Ki ~5 nM, D1 ~30-50 nM (mixed agonist). Pancreatic β-sejt D2 ~10 nM (Cycloset-mechanism alapja).",
  "detectionWindow": "Nem releváns (WADA nem listán).",
  "benefits": [
    "Cost-emphasis emerging markets: ~€3/box vs Cabergoline ~€25-40",
    "Cabergoline-intolerancia fallback (ICD, nausea-persisting)",
    "Cycloset T2DM-applikáció: inzulin-szenzitivitás-javítás obese AAS-cycleren",
    "Long clinical history (1972 óta, >50 év)",
    "EU + globally available pharma-grade"
  ],
  "quickStart": [
    "Lassú-titrálás KÖTELEZŐ: 1.25 mg/este (lefekvés előtt + étkezéssel) × 3-7 nap, majd 2x/nap, majd 3x/nap",
    "Standard AAS-prolaktin-control: 2.5 mg 2x/nap (reggel + este)",
    "Étkezéssel KÖTELEZŐ (nausea jelentős enyhítés)",
    "Bloodwork: prolaktin pre-treatment + 7-10 nap múlva re-test",
    "Cabergoline-naive felhasználón Bromocriptine NEM ajánlott (Cabergoline jobban tolerált)",
    "Cabergoline-allergia vagy Cabergoline-ICD-history esetén switch-megoldás"
  ],
  "expectations": [
    {"label": "1-3. nap", "body": "Nausea jelentős (orientációs side-effect), orthostatic hypotensio mild. Prolaktin-csökkenés mérhető (~20-40%)."},
    {"label": "1-2. hét", "body": "Toleráció kialakul (titrálás után), nausea enyhül. Prolaktin target <15 ng/mL elérhető 2.5-5 mg/nap stabil dose-on."},
    {"label": "Hosszú használat", "body": "Steady-state, cardiac valvulopathy-monitor évente. Cycloset-T2DM-use case: HbA1c csökkenés 0.5-1.0% adjuváns therapy-ként metforminra (Pijl 2000)."},
    {"label": "Leállítás után", "body": "Prolaktin-rebound 1-2 hét alatt. Rövid felezés miatt gyorsabb wash-out mint Cabergoline."}
  ],
  "quality": {
    "pure": [
      "Novartis Parlodel 2.5/5 mg, Rx pharma-grade (EU-pharmacy)",
      "Bromocriptine-mesylát generic (Sandoz, Teva, Ratiopharm)",
      "Cycloset 0.8 mg (S2 Therapeutics, US T2DM-Rx) – quick-release morning-dose",
      "Indiai generikum (Sun Pharma Bromergon, Cipla)",
      "UGL liquid bromocriptine: rare, HPLC-tested forrás kötelező"
    ],
    "caution": [
      "Nausea kezelése: lassú-titrálás 1.25 mg-tól indítva 3-7 napos lépcsőkben, mindig étkezéssel",
      "Orthostatic hypotensio: lassan kelni reggel, hydration-monitor",
      "Cardiac valvulopathy: chronic high-dose (>30 mg/nap, Parkinson-protokoll) – AAS-dose-on rizikó alacsony",
      "Dyskinesia: ritka, dose-dependent – leállítás reverzibilis",
      "Antipszichotikumokkal NEM kombinálható (D2-antagonist-overlap)",
      "Pregnancy / breastfeeding"
    ],
    "avoid": [
      "Cabergoline-intolerancia hiányában (Cabergoline first-line)",
      "Hypertensive disorders of pregnancy (eclampsia history)",
      "Ergot-alkaloid allergia",
      "Súlyos hepatikus insufficiencia",
      "Antipszichotikum-terápia"
    ]
  },
  "interactions": [
    "Cabergoline: NEM kombinálható (overlap-mechanism)",
    "Pramipexole: NEM kombinálható",
    "Trenbolone/nandrolone stack: standard alternative prolaktin-control (Cabergoline-intoleráns user)",
    "Antipszichotikumok: kontraindikált (D2-antagonizmus)",
    "Antihypertenzív: hypotensio-fokozódás óvatos",
    "Macrolid-antibiotikumok (erythromycin, clarithromycin): CYP3A4-gátlás → Bromocriptine-szint emelkedik",
    "Étkezés: KÖTELEZŐ étkezéssel (nausea-prevention)"
  ],
  "studies": [
    {"title": "Impact of menopause on outcomes in prolactinomas after dopamine agonist treatment withdrawal.", "authors": "Santharam S, Fountas A, Tampourlou M", "journal": "Clin Endocrinol (Oxf)", "pmid": "29894000"},
    {"title": "Evidence-based practice use of quick-release bromocriptine across the natural history of type 2 diabetes mellitus.", "authors": "Schwartz SS, Zangeneh F", "journal": "Postgrad Med", "pmid": "27458683"},
    {"title": "Bromocriptine in type 2 diabetes: a promising alternative, a systematic review and meta-analysis.", "authors": "Dara T, Zabihi M, Hoseinzade F", "journal": "Cardiovasc Diabetol Endocrinol Rep", "pmid": "41013660"},
    {"title": "Bromocriptine for diabetes – randomized controlled trial", "authors": "Pijl H, Ohashi S, Matsuda M, et al.", "journal": "Diabetes Care. 2000;23(8):1154-1161.", "pmid": "10937514"}
  ],
  "faq": [
    {"q": "Bromocriptine vs Cabergoline – mikor első választás?", "a": "Cabergoline a default első-vonalbeli választás (90% AAS-PCT-felhasználó). Bromocriptine 3 niche-szituációban első: (1) Emerging-markets economics – Bromocriptine ~€3/box vs Cabergoline ~€25-40, Hungary/Poland-pharmacy-on Cabergoline drágább; (2) Cabergoline-intolerancia – ha Cabergoline-on impulse-control disorder vagy persistent-nausea van, Bromocriptine fallback; (3) Cycloset-T2DM-application – obese AAS-cycler (BMI >30, prediabetes HbA1c 5.7-6.4%), Cycloset 0.8 mg morning quick-release inzulin-szenzitivitás-javítás mellékhatásként prolaktin-control mellett. Cabergoline-naive felhasználónak NEM Bromocriptine – Cabergoline jobb tolerábilitás."},
    {"q": "Nausea-management?", "a": "Bromocriptine #1 mellékhatása. Mitigációs stratégia: (1) Lassú-titrálás KÖTELEZŐ – 1.25 mg/este (lefekvés előtt) × 3-7 nap, majd 1.25 mg 2x/nap × 3-7 nap, majd 2.5 mg 2x/nap × 7 nap, majd target dose; (2) Étkezéssel KÖTELEZŐ (sosem üres-gyomor); (3) Evening dosing first (alvás kihagy a nausea peak-tájékot); (4) Antiemetikum (metoclopramide NEM jó – D2-antagonist konfliktus a Bromocriptine-mechanizmussal!), inkább ondansetron 4 mg PRN. Ha nausea persistens 2 hét után → switch Cabergoline-re."},
    {"q": "Cycloset T2DM-application – AAS metabolic-benefit?", "a": "A Cycloset (Bromocriptine-mesylát quick-release 0.8 mg morning) Pijl 2000 (PMID 10937514) és Cincotta 1996 (PMID 8725867) trial-jain Type-2-diabetes-felhasználón HbA1c csökkenést 0.5-1.0% dokumentált adjuváns-therapy-ként metforminre. Mechanizmus: morning dopamine-pulse a perifériás (zsírszövet + máj) inzulin-szenzitivitást javítja. AAS-context off-label: obese AAS-cycler (BMI >30, glükóz-intolerancia GH/Insulin-stack után) mellékelőnyként alkalmazható. NEM helyettesíti a metformint/SGLT2-inhibitort. Cabergoline-nak NINCS ezen T2DM-applikációja (D2-szelektivitás miatt másmilyen mechanism)."},
    {"q": "Sexual benefit hasonló Cabergolinhoz?", "a": "Igen, DE alacsonyabb magnitúdóval. A Krüger 2003-szerű post-orgasmic refractory period-shortening Cabergoline-nál erősebben dokumentált (D2-szelektivitás miatt). Bromocriptine-on a sexual-benefit kisebb, és a mellékhatás-profil (nausea, hypotensio) ronthatja a szexuális élet-minőséget – net effect mixed. Ha sexual-emphasis cél, Cabergoline > Bromocriptine."}
  ],
  "related": ["cabergoline", "pramipexole", "trenbolone-info", "nandrolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 1.25, "medium": 2.5, "high": 5},
    "unit": "mg / nap divided 2-3x (orális, étkezéssel)",
    "note": "Standard AAS-prolaktin-control: 2.5-5 mg/nap divided 2-3x. Lassú-titrálás KÖTELEZŐ 1.25 mg-tól (nausea-management). Cycloset T2DM-application: 0.8 mg morning quick-release. Cabergoline second-line – első választás csak intolerancia/cost-emphasis/Cycloset-case-en."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Bromocriptine-indítás előtt",
      "timing": "19-Nor/Tren ciklus 4-6. hét vagy Cabergoline-intolerancia-onset",
      "markers": "Prolaktin, Total/Free Test, E2, lipid panel, ALT/AST, HbA1c ha obese (Cycloset-T2DM-application monitor).",
      "purpose": "Baseline. Indikáció: prolaktin >25 ng/mL ÉS (Cabergoline-intolerancia VAGY Cycloset-T2DM-emphasis VAGY emerging-markets cost-emphasis)."
    },
    "midCycle": {
      "label": "Bromocriptine 10-14. nap",
      "timing": "Bromocriptine-titration vége +7-14 nap",
      "markers": "Prolaktin (re-test), Total Test, vérnyomás-monitor, HbA1c ha Cycloset-use, ALT/AST.",
      "purpose": "Titration confirm: prolaktin <15 ng/mL target. Mellékhatás-monitor (nausea-tolerance, orthostatic hypotensio). Cycloset-T2DM-application esetén HbA1c-csökkenés ~3 hónap után."
    },
    "postCycle": {
      "label": "Ciklus vége / Bromocriptine leállítás",
      "timing": "Utolsó dose +1 hét (rövid felezés miatt gyorsabb wash-out)",
      "markers": "Prolaktin (rebound monitor), Total/Free Test, vérnyomás, HbA1c.",
      "purpose": "Confirm: prolaktin baseline-re visszatér 1-2 hét alatt."
    },
    "cruise": {
      "label": "Chronic Cycloset-T2DM-application AAS-cruise-on",
      "timing": "0.8 mg morning quick-release chronic",
      "markers": "HbA1c 3 havonta, prolaktin 6 havonta, vérnyomás, echocardiográfia évente (chronic ergot-use cardiac monitor).",
      "purpose": "Cycloset T2DM-cruise off-label application obese AAS-felhasználón. Évi cardio monitor prudent."
    }
  }
}
