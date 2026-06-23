// Pramipexole (Mirapex) – non-ergot D3-D2 szelektív DA-agonista.
// FDA 1997 Boehringer. AAS-PCT niche: prolaktin-control + szexuális stim
// (D3-szelektivitás). FDA black-box ICD-rizikó.
// Sources: FDA Mirapex SmPC, Weintraub 2010 PMID 20457959,
// Mansour 2012 PMID 22651823, Romigi 2007 PMID 17646619.

export default {
  "id": "pramipexole",
  "sideEffects": [
    { "hu": "Impulzus-kontroll zavar (ICD): kóros szerencsejáték, hiperszexualitás, kényszeres vásárlás, falásroham – FDA black-box, dopamin-agonista osztályhatás, leállítást indokol.", "en": "Impulse-control disorder (ICD): pathological gambling, hypersexuality, compulsive shopping, binge eating – FDA black-box, dopamine-agonist class effect, warrants discontinuation.", "pl": "Zaburzenia kontroli impulsów (ICD): patologiczny hazard, hiperseksualność, kompulsywne zakupy, napadowe objadanie się – ostrzeżenie FDA, efekt klasy agonistów dopaminy, wymaga odstawienia." },
    { "hu": "Hirtelen elalvási rohamok (sleep attacks) és nappali aluszékonyság – vezetés és gépkezelés veszélyes lehet, főleg titrálás alatt.", "en": "Sudden sleep attacks and daytime somnolence – driving and operating machinery may be hazardous, especially during titration.", "pl": "Nagłe ataki snu i senność dzienna – prowadzenie pojazdów i obsługa maszyn mogą być niebezpieczne, zwłaszcza podczas titracji." },
    { "hu": "Ortosztatikus hipotenzió: szédülés, ájulásérzés felálláskor, főleg dóziskezdetkor – lassan kelni.", "en": "Orthostatic hypotension: dizziness, lightheadedness on standing, especially at dose initiation – rise slowly.", "pl": "Hipotonia ortostatyczna: zawroty głowy, uczucie omdlewania przy wstawaniu, szczególnie na początku dawkowania – wstawać powoli." },
    { "hu": "Hányinger, gyomorpanasz, étvágytalanság – gyakori a kezdeti napokban, étkezéssel bevéve enyhíthető.", "en": "Nausea, gastric upset, loss of appetite – common in the first days, mitigated by taking with food.", "pl": "Nudności, dolegliwości żołądkowe, utrata apetytu – częste w pierwszych dniach, łagodzone przyjmowaniem z jedzeniem." },
    { "hu": "Fejfájás, fáradtság, levertség és néha vivid álmok vagy hallucinációk (utóbbi inkább magasabb, Parkinson-szintű dózison).", "en": "Headache, fatigue, lethargy, and occasionally vivid dreams or hallucinations (the latter mainly at higher, Parkinson-level doses).", "pl": "Ból głowy, zmęczenie, ospałość oraz czasem wyraziste sny lub halucynacje (te ostatnie głównie przy wyższych, parkinsonowskich dawkach)." },
    { "hu": "Perifériás ödéma (lábdagadás) – dopamin-agonista osztályhatás, hosszabb használatnál figyelendő.", "en": "Peripheral edema (leg swelling) – a dopamine-agonist class effect to watch for with longer use.", "pl": "Obrzęki obwodowe (opuchlizna nóg) – efekt klasy agonistów dopaminy, do obserwacji przy dłuższym stosowaniu." },
    { "hu": "Dopamin-agonista megvonási szindróma (DAWS) hirtelen leállításkor: szorongás, pánik, izzadás, fájdalom, diszfória – fokozatos leállítás javasolt.", "en": "Dopamine agonist withdrawal syndrome (DAWS) on abrupt discontinuation: anxiety, panic, sweating, pain, dysphoria – taper gradually.", "pl": "Zespół odstawienia agonisty dopaminy (DAWS) przy nagłym przerwaniu: lęk, panika, pocenie się, ból, dysforia – odstawiać stopniowo." }
  ],
  "contraindications": [
    { "hu": "Impulzus-kontroll zavar vagy függőség előzménye (szerencsejáték-, OCD-spektrum, hiperszexualitás) – jelentősen emeli az ICD-rizikót, kerülendő.", "en": "History of impulse-control disorder or addiction (gambling, OCD-spectrum, hypersexuality) – markedly raises ICD risk, avoid.", "pl": "Wywiad zaburzeń kontroli impulsów lub uzależnień (hazard, spektrum OCD, hiperseksualność) – znacznie zwiększa ryzyko ICD, unikać." },
    { "hu": "Súlyos veseelégtelenség (CrCl <30 ml/min) dóziscsökkentés nélkül – a hatóanyag ~90%-a változatlanul a vesén ürül, felhalmozódik.", "en": "Severe renal impairment (CrCl <30 ml/min) without dose reduction – ~90% is excreted unchanged renally and accumulates.", "pl": "Ciężka niewydolność nerek (CrCl <30 ml/min) bez redukcji dawki – ~90% wydalane w postaci niezmienionej przez nerki, kumuluje się." },
    { "hu": "Egyidejű antipszichotikum-kezelés (D2/D3-antagonisták) – közvetlen mechanizmus-konfliktus, kioltják egymást.", "en": "Concurrent antipsychotic therapy (D2/D3 antagonists) – direct mechanism conflict, mutually counteracting.", "pl": "Jednoczesne leczenie przeciwpsychotyczne (antagoniści D2/D3) – bezpośredni konflikt mechanizmu, wzajemne znoszenie się." },
    { "hu": "Metoklopramid / domperidon (D2-antagonista antiemetikumok) – mechanizmus-konfliktus, kerülni; hányinger esetén más antiemetikum.", "en": "Metoclopramide / domperidone (D2-antagonist antiemetics) – mechanism conflict, avoid; use a different antiemetic for nausea.", "pl": "Metoklopramid / domperydon (przeciwwymiotne antagonisty D2) – konflikt mechanizmu, unikać; przy nudnościach inny lek przeciwwymiotny." },
    { "hu": "Terhesség és szoptatás – nincs igazolt biztonságosság, a prolaktin-szuppresszió a laktációt is gátolja.", "en": "Pregnancy and breastfeeding – no established safety, and prolactin suppression also inhibits lactation.", "pl": "Ciąża i karmienie piersią – brak ustalonego bezpieczeństwa, a supresja prolaktyny hamuje też laktację." },
    { "hu": "Foglalkozás vagy tevékenység, ahol a hirtelen elalvás kritikus (hivatásos vezetés, magasban munka) – titrálás alatt különösen.", "en": "Occupations or activities where sudden sleep onset is critical (professional driving, working at heights) – especially during titration.", "pl": "Zawody lub czynności, gdzie nagłe zaśnięcie jest krytyczne (zawodowe prowadzenie, praca na wysokości) – zwłaszcza podczas titracji." },
    { "hu": "Alkohollal vagy más szedatívumokkal való kombinálás – fokozza az aluszékonyságot, elalvási rohamokat és az ICD-rizikót.", "en": "Combining with alcohol or other sedatives – increases somnolence, sleep attacks, and ICD risk.", "pl": "Łączenie z alkoholem lub innymi środkami uspokajającymi – zwiększa senność, ataki snu i ryzyko ICD." }
  ],
  "name": "Pramipexole (Mirapex)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Non-ergot D3-D2 szelektív DA-agonista. FDA-jóváhagyott (1997 Boehringer) Parkinsonra + restless leg-re. AAS-PCT niche: prolaktin-control + szexuális stimulácó (D3-szelektivitás). FDA black-box ICD-rizikó (impulzus-kontroll zavar).",
  "description": "A Pramipexole (Mirapex) egy non-ergot dopamin-receptor agonista, amelyet a Boehringer Ingelheim fejlesztett ki, és 1997-ben kapott FDA-jóváhagyást Parkinson-kór és restless leg syndrome (RLS) kezelésére. A Cabergoline-tól eltérően nem ergot-szerkezetű, így a cardiac valvulopathy-rizikó negligible. Egyedi farmakológiai profilja a D3-szelektivitás (D3 > D2, ~7-10x affinity-difference) – ez okozza az szexuális-stimulácó-hatást ('RecPharm' off-label libido/orgazmus-quality enhancement community-szinten dokumentált). Pituitár D2-effektus révén prolaktint csökkent, hasonlóan a Cabergoline-hez, DE az AAS-PCT-világban ritkábban első-vonalbeli – két ok miatt: (1) FDA black-box warning impulse-control disorder (ICD) rizikóra (gambling, hypersexuality, compulsive shopping, binge eating) – Parkinson-dose-on 17-22% incidencia (Weintraub 2010 DOMINION study, PMID 20457959), AAS-PCT-dose-on alacsonyabb DE létezik; (2) szigorúan-titrálandó dose-window (0.0625 mg ultra-low start). Niche használat: szexuális-emphasis prolaktin-control + RecPharm sub-community recreational. Tier 3.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Non-ergot D3-D2 szelektív DA-agonista (D3 > D2), pituitár prolaktin-szuppresszió + szexuális-stimulácó"},
    {"label": "Adagolás (AAS)", "value": "0.0625 mg evening start, max 0.25-0.5 mg/nap titrálva"},
    {"label": "Felezési idő", "value": "~8-12 óra"},
    {"label": "Hatáskezdet", "value": "Prolaktin-csökkenés 2-4 óra"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx, HU + PL törzskönyvezett, WADA allowed"}
  ],
  "mechanism": "Pramipexole non-ergot benzothiazole-szerkezetű DA-agonista, D3 Ki ~0.5 nM (D2 ~3.6 nM, D4 ~3 nM). A D3-receptor a mezolimbikus dopamin-pathway-en gazdagon expresszált – ez magyarázza az szexuális-stimulácó-effektust (Mansour 2012 PMID 22651823 dokumentálta a Pramipexole+ED case-series-ben az orgasm-quality és libido-emphasis). Pituitár D2-revia prolaktin-szuppresszió a Cabergoline-szerű mechanizmussal. Hepatikus metabolizmus minimális (~10%), 90% vesén keresztül ürül változatlan formában → CrCl <30 ml/min mellett dose-csökkentés. Nincs ergot-szerkezet → nincs cardiac valvulopathy-rizikó (vs Cabergoline/Bromocriptine).",
  "legalStatus": "USA: FDA-jóváhagyott 1997 (Mirapex, Boehringer Ingelheim). Indikációk: Parkinson-kór, restless leg syndrome (RLS). EU: EMA-jóváhagyott. HU: törzskönyvezett (Mirapexin Rx). PL: törzskönyvezett (Mirapexin, Sifrol Rx). WADA: nem listán.",
  "onsetTime": "Prolaktin-csökkenés 2-4 óra",
  "halfLife": "~8-12 óra",
  "halfLifeActive": "~8-12 óra (parent compound aktív)",
  "interactionsWith": ["cabergoline", "bromocriptine", "trenbolone-info"],
  "aromatization": "Nincs – D2/D3 agonista.",
  "hepatotoxicity": "Alacsony hepatikus; FDA black-box warning for impulse-control disorder (gambling, hypersexuality, compulsive shopping) – incidence 17-22% in Parkinson dose ranges, lower at AAS-PCT-dose.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS)",
  "bindingAffinity": "D3 Ki ~0.5 nM, D2 ~3.6 nM, D4 ~3 nM. Non-ergot benzothiazole-szerkezet.",
  "detectionWindow": "Nem releváns (WADA nem listán).",
  "benefits": [
    "Nincs ergot-szerkezet → cardiac valvulopathy-rizikó negligible (vs Cabergoline/Bromocriptine)",
    "D3-szelektivitás → bonus szexuális-stimulácó (libidó-boost, orgasm-quality)",
    "Prolaktin-control alternative",
    "Pharma-grade FDA + EMA Rx"
  ],
  "quickStart": [
    "ULTRA-LOW indítás KÖTELEZŐ: 0.0625 mg (= 1/4 tabletta 0.25 mg) este, étkezéssel",
    "Titrálás 3-4 napos lépcsőkben: 0.0625 → 0.125 → 0.25 mg/nap",
    "AAS-PCT max target dose: 0.25-0.5 mg/nap",
    "ICD-symptom napló: compulsive behaviors (gambling, shopping, hypersexuality, binge eating) self-report + partner-monitor",
    "Vese-funkció (CrCl) pre-treatment: ha <30 ml/min, dose-csökkentés szükséges",
    "Bloodwork: prolaktin pre-treatment + 7-10 nap múlva"
  ],
  "expectations": [
    {"label": "1-3. nap", "body": "Mild nausea + lethargy várt (ultra-low dose mellett enyhe). Prolaktin-csökkenés ~20-30%."},
    {"label": "1-2. hét", "body": "Toleráció kialakul, dose-titration target eléri. Prolaktin <15 ng/mL elérhető 0.25-0.5 mg-on. Szexuális-stimulácó (libidó-boost, orgazmus-quality) érzékelhető – a D3-szelektivitás hatása."},
    {"label": "Hosszú használat", "body": "ICD-symptom monitor folyamatos (3 havonta self-screen Yale-Brown OCD-scale rövidített). Ha ICD-symptom-onset → AZONNALI leállítás."},
    {"label": "Leállítás után", "body": "Prolaktin-rebound 1-2 hét alatt. ICD-symptom-relief 2-4 hét alatt (ha kialakult)."}
  ],
  "quality": {
    "pure": [
      "Boehringer Ingelheim Mirapex/Mirapexin 0.25/1 mg, Rx pharma-grade (EU-pharmacy)",
      "Pramipexole-ratiopharm, Pramipexole Teva, Pramipexole Sandoz generic (EU)",
      "Indiai generikum (Sun Pharma, Cipla)",
      "UGL ritkán – Rx pharma-grade ajánlott a tightening titration miatt"
    ],
    "caution": [
      "FDA black-box: impulse-control disorder (ICD) – gambling, hypersexuality, compulsive shopping, binge eating; partner-monitor + self-report napló KÖTELEZŐ; ha ICD-symptom-onset, AZONNALI leállítás",
      "Vese-funkció: CrCl <30 ml/min → dose-csökkentés szükséges (90% vesén ürül)",
      "Orthostatic hypotensio: lassan kelni reggel",
      "Sleep attacks: napi-aluvás dokumentált side-effect – vezetés óvatosság",
      "Antipszichotikumokkal NEM kombinálható (D2/D3-antagonist konfliktus)",
      "Antiemetikum metoclopramide kontraindikált (D2-antagonist konfliktus)"
    ],
    "avoid": [
      "ICD-history-val rendelkező felhasználón (gambling-addiction, OCD-spectrum, hypersexuality-history)",
      "Súlyos vese-insufficiencia (CrCl <30 ml/min) dose-adjustment nélkül",
      "Antipszichotikum-terápia",
      "Pregnancy / breastfeeding",
      "Cabergoline-naive felhasználó (Cabergoline first-line, biztonsági okokból)"
    ]
  },
  "interactions": [
    "Cabergoline / Bromocriptine: NEM kombinálható (overlap-mechanism)",
    "Antipszichotikumok: kontraindikált",
    "Metoclopramide / Domperidon: kontraindikált (D2-antagonist konfliktus)",
    "Antihypertenzív: hypotensio-fokozódás",
    "Cimetidine: vesefunctio-interakció (Pramipexole-szint emelkedik)",
    "Alkohol: ICD-symptom-rizikó fokozódás + sleep attacks gyakoribb – kerülni javasolt"
  ],
  "studies": [
    {"title": "Impulse control disorders in Parkinson disease: a cross-sectional study of 3090 patients (DOMINION study)", "authors": "Weintraub D, Koester J, Potenza MN, et al.", "journal": "Arch Neurol. 2010;67(5):589-595.", "pmid": "20457959"},
    {"title": "Effects of acute prolactin manipulation on sexual drive and function in males.", "authors": "Krüger TH, Haake P, Haverkamp J, Krämer M, Exton MS, Saller B, Mann K, Hartmann U, Schedlowski M", "journal": "J Endocrinol", "pmid": "14656205"},
    {"title": "Treatment of restless legs syndrome and periodic limb movement disorder: an American Academy of Sleep Medicine clinical practice guideline.", "authors": "Winkelman JW, Berkowski JA, DelRosso LM, Koo BB, Scharf MT, Sharon D, Zak RS, Kazmi U, Falck-Ytter Y, Shelgikar AV, Trotti LM, Walters AS", "journal": "J Clin Sleep Med", "pmid": "39324694"}
  ],
  "faq": [
    {"q": "Pramipexole vs Cabergoline – mikor választani?", "a": "Pramipexole két niche-szituációban: (1) Szexuális-emphasis user – a D3-szelektivitás libidó/orgazmus-quality boost-ot ad, ami az AAS-Tren-libidó-drop-context-en bonusz; (2) Cardiac valvulopathy-history-val rendelkező felhasználó – Cabergoline/Bromocriptine ergot-szerkezet kontraindikált, Pramipexole non-ergot. DE: ICD-rizikó monitoring KÖTELEZŐ (Weintraub 2010 DOMINION 17-22% Parkinson-dose, AAS-PCT-dose alacsonyabb DE létezik). Cabergoline first-line marad 90%-ban; Pramipexole inkább konkurrens szexuális-recreational use (RecPharm sub-community) és niche-clinical case."},
    {"q": "Impulse-control disorder valóság?", "a": "Igen, valós klinikai jelenség. A Weintraub 2010 DOMINION study (PMID 20457959) 3090 Parkinson-páciens cross-sectional analysis-ban 17-22% ICD-incidenciát dokumentált – pathological gambling, hypersexuality, compulsive shopping, binge eating. Mechanizmus: D3-mezolimbikus-reward-pathway hiperaktiváció. AAS-PCT-dose (0.25-0.5 mg/nap) ennek a Parkinson-dose-nak (~3 mg/nap) ~1/10-1/15-öd része, ICD-rizikó arányosan alacsonyabb DE NEM nulla. Partner-monitor protokoll: a felhasználó kérje meg a házastársát/partnerét, hogy figyelje a behavior-változásokat (gambling-pattern, shopping-spree, hypersexuality, binge-eating). Self-report napló heti egyszer (Y-BOCS-rövidített self-test). ICD-symptom-onset → AZONNALI leállítás, NEM dose-csökkentés."},
    {"q": "RecPharm-status – milyen szubreddit-szintű használat?", "a": "Kis online community (r/RecPharm, r/Pramipexole-szub, RxList off-label fórum) recreational használja a Pramipexole-t (0.125-0.25 mg occasional dose) szexuális-stimulációra (orgazmus-quality + libidó-boost), nem AAS-PCT-context-en. NEM endorsement, csak dokumentált community-pattern. A Mansour 2012 (PMID 22651823) case-series 6 non-Parkinson férfit dokumentált, akik 0.125 mg Pramipexole-on jelentős erectile-quality improvement-et tapasztaltak. NEM ajánlott a recreational protokoll: ICD-rizikó + sleep-attack + orthostatic-hypotensio side-effect-profil meghaladja a recreational benefit-et a legtöbb felhasználón."},
    {"q": "AAS-PCT-protokoll praktikus dozírozás?", "a": "ULTRA-LOW indítás: 0.0625 mg (1/4 tabletta 0.25 mg) este, étkezéssel × 3-4 nap. Titrálás: 0.125 mg/nap este × 3-4 nap, majd 0.25 mg/nap este. Max AAS-PCT target: 0.25-0.5 mg/nap. Prolaktin-monitor: pre-treatment + 10-14 nap múlva. Cél: prolaktin <15 ng/mL ÉS NO ICD-symptom-onset. Ha prolaktin >25 ng/mL persisting → switch Cabergoline-re (Pramipexole NEM mehet >0.5 mg/nap AAS-context-en az ICD-rizikó miatt)."}
  ],
  "related": ["cabergoline", "bromocriptine", "trenbolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.0625, "medium": 0.25, "high": 0.5},
    "unit": "mg / nap (orális este, étkezéssel, ultra-low-titrálva)",
    "note": "ULTRA-LOW indítás 0.0625 mg-tól (1/4 tabletta 0.25 mg). Titrálás 3-4 napos lépcsőkben max 0.25-0.5 mg/nap AAS-PCT-context-en. ICD-monitor KÖTELEZŐ. Vese-funkció (CrCl) pre-treatment dose-adjustment-hez."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pramipexole-indítás előtt",
      "timing": "Cabergoline-intolerancia VAGY szexuális-emphasis cél",
      "markers": "Prolaktin, Total/Free Test, vese-funkció (CrCl, kreatinin), psychiatric history-screen (ICD-prerequisite!), Y-BOCS rövidített baseline.",
      "purpose": "Baseline + ICD-rizikó-stratification. Ha ICD-history (gambling, OCD-spectrum, hypersexuality) → Pramipexole kontraindikált."
    },
    "midCycle": {
      "label": "Pramipexole 10-14. nap",
      "timing": "Pramipexole-titration vége +7 nap",
      "markers": "Prolaktin (re-test), Y-BOCS self-test (ICD-screen), vérnyomás, partner-monitor narrative.",
      "purpose": "Titration confirm + ICD-symptom-screen. Ha behavior-változás (gambling, compulsive shopping, hypersexuality) → AZONNALI leállítás."
    },
    "postCycle": {
      "label": "Pramipexole leállítás",
      "timing": "Utolsó dose +1 hét",
      "markers": "Prolaktin (rebound), Y-BOCS post-test (ICD-relief monitor).",
      "purpose": "Confirm: prolaktin baseline-re visszatér, ICD-symptom (ha kialakult) relief 2-4 hét alatt."
    },
    "cruise": {
      "label": "Nem ajánlott chronic AAS-cruise-on",
      "timing": "N/A",
      "markers": "N/A",
      "purpose": "Pramipexole chronic AAS-cruise-on NEM ajánlott – ICD-rizikó kumulatív, cardio-monitor pozícionálódik a long-term Cabergoline-mal szemben. Csak ciklus-specifikus prolaktin-event-re (max 8-12 hét)."
    }
  }
}
