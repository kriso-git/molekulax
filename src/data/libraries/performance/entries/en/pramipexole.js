// Pramipexole (Mirapex) – non-ergot D3-D2 selective DA agonist.
// FDA 1997 Boehringer. AAS-PCT niche: prolactin control + sexual stim
// (D3 selectivity). FDA black-box ICD risk.
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
  "shortDesc": "Non-ergot D3-D2 selective DA agonist. FDA-approved (1997 Boehringer) for Parkinson's + restless legs. AAS-PCT niche: prolactin control + sexual stimulation (D3 selectivity). FDA black-box ICD risk (impulse-control disorder).",
  "description": "Pramipexole (Mirapex) is a non-ergot dopamine receptor agonist developed by Boehringer Ingelheim and FDA-approved in 1997 for Parkinson's disease and restless legs syndrome (RLS). Unlike cabergoline, it is not ergot-structured, so cardiac valvulopathy risk is negligible. Its unique pharmacological profile is **D3 selectivity** (D3 > D2, ~7-10× affinity differential) – this drives the sexual-stimulation effect ('RecPharm' off-label libido/orgasm-quality enhancement documented at community level). Through the pituitary D2 effect it lowers prolactin, similar to cabergoline, but is rarely first-line in the AAS-PCT world – for two reasons: (1) FDA **black-box warning for impulse-control disorder (ICD)** risk (gambling, hypersexuality, compulsive shopping, binge eating) – 17-22% incidence at Parkinson dose (Weintraub 2010 DOMINION study, PMID 20457959), lower at AAS-PCT dose but exists; (2) strict titration dose window (0.0625 mg ultra-low start). Niche use: sexual-emphasis prolactin control + RecPharm sub-community recreational. Tier 3.",
  "keyInfo": [
    {"label": "Mechanism", "value": "Non-ergot D3-D2 selective DA agonist (D3 > D2), pituitary prolactin suppression + sexual stimulation"},
    {"label": "Dosing (AAS)", "value": "0.0625 mg evening start, max 0.25-0.5 mg/day titrated"},
    {"label": "Half-life", "value": "~8-12 hours"},
    {"label": "Onset", "value": "Prolactin reduction 2-4 h"},
    {"label": "Legal status", "value": "FDA + EMA Rx, HU + PL approved, WADA allowed"}
  ],
  "mechanism": "Pramipexole is a non-ergot benzothiazole-structure DA agonist, D3 Ki ~0.5 nM (D2 ~3.6 nM, D4 ~3 nM). The D3 receptor is richly expressed in the mesolimbic dopamine pathway – explaining the sexual-stimulation effect (Mansour 2012 PMID 22651823 documented in a Pramipexole+ED case series the orgasm-quality and libido emphasis). Pituitary D2-via prolactin suppression by a cabergoline-like mechanism. Hepatic metabolism minimal (~10%), 90% urinary excretion as unchanged drug → dose reduction required at CrCl <30 mL/min. No ergot structure → no cardiac valvulopathy risk (vs cabergoline/bromocriptine).",
  "legalStatus": "USA: FDA-approved 1997 (Mirapex, Boehringer Ingelheim). Indications: Parkinson's disease, restless legs syndrome (RLS). EU: EMA-approved. HU: registered (Mirapexin Rx). PL: registered (Mirapexin, Sifrol Rx). WADA: not listed.",
  "onsetTime": "Prolactin reduction 2-4 h",
  "halfLife": "~8-12 hours",
  "halfLifeActive": "~8-12 hours (parent compound active)",
  "interactionsWith": ["cabergoline", "bromocriptine", "trenbolone-info"],
  "aromatization": "None – D2/D3 agonist.",
  "hepatotoxicity": "Low hepatic; FDA black-box warning for **impulse-control disorder** (gambling, hypersexuality, compulsive shopping) – incidence 17-22% in Parkinson dose ranges, lower at AAS-PCT-dose.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not AAS)",
  "bindingAffinity": "D3 Ki ~0.5 nM, D2 ~3.6 nM, D4 ~3 nM. Non-ergot benzothiazole structure.",
  "detectionWindow": "Not relevant (WADA not listed).",
  "benefits": [
    "No ergot structure → cardiac valvulopathy risk negligible (vs cabergoline/bromocriptine)",
    "D3 selectivity → bonus sexual stimulation (libido boost, orgasm quality)",
    "Prolactin control alternative",
    "Pharma-grade FDA + EMA Rx"
  ],
  "quickStart": [
    "ULTRA-LOW start MANDATORY: 0.0625 mg (= 1/4 tablet of 0.25 mg) evening, with food",
    "Titration in 3-4 day steps: 0.0625 → 0.125 → 0.25 mg/day",
    "AAS-PCT max target dose: 0.25-0.5 mg/day",
    "ICD symptom log: compulsive behaviors (gambling, shopping, hypersexuality, binge eating) self-report + partner monitor",
    "Kidney function (CrCl) pre-treatment: if <30 mL/min, dose reduction needed",
    "Bloodwork: prolactin pre-treatment + 7-10 days later"
  ],
  "expectations": [
    {"label": "Day 1-3", "body": "Mild nausea + lethargy expected (mild at ultra-low dose). Prolactin reduction ~20-30%."},
    {"label": "Week 1-2", "body": "Tolerance develops, dose titration reaches target. Prolactin <15 ng/mL achievable at 0.25-0.5 mg. Sexual stimulation (libido boost, orgasm quality) noticeable – the D3 selectivity effect."},
    {"label": "Long-term use", "body": "Continuous ICD symptom monitor (every 3 months self-screen Yale-Brown OCD scale abbreviated). If ICD symptom onset → IMMEDIATE cessation."},
    {"label": "After cessation", "body": "Prolactin rebound over 1-2 weeks. ICD symptom relief over 2-4 weeks (if developed)."}
  ],
  "quality": {
    "pure": [
      "Boehringer Ingelheim Mirapex/Mirapexin 0.25/1 mg, Rx pharma-grade (EU pharmacy)",
      "Pramipexole-ratiopharm, Pramipexole Teva, Pramipexole Sandoz generic (EU)",
      "Indian generic (Sun Pharma, Cipla)",
      "UGL rarely – Rx pharma-grade recommended due to tight titration"
    ],
    "caution": [
      "**FDA black-box: impulse-control disorder (ICD)** – gambling, hypersexuality, compulsive shopping, binge eating; partner monitor + self-report log MANDATORY; if ICD symptom onset, IMMEDIATE cessation",
      "Kidney function: CrCl <30 mL/min → dose reduction needed (90% renally excreted)",
      "Orthostatic hypotension: rise slowly in the morning",
      "Sleep attacks: daytime sleep documented side effect – driving caution",
      "Cannot be combined with antipsychotics (D2/D3 antagonist conflict)",
      "Antiemetic metoclopramide contraindicated (D2 antagonist conflict)"
    ],
    "avoid": [
      "Users with ICD history (gambling addiction, OCD spectrum, hypersexuality history)",
      "Severe renal insufficiency (CrCl <30 mL/min) without dose adjustment",
      "Antipsychotic therapy",
      "Pregnancy / breastfeeding",
      "Cabergoline-naive users (cabergoline first-line, for safety reasons)"
    ]
  },
  "interactions": [
    "Cabergoline / bromocriptine: cannot be combined (overlapping mechanism)",
    "Antipsychotics: contraindicated",
    "Metoclopramide / domperidone: contraindicated (D2 antagonist conflict)",
    "Antihypertensives: hypotension exacerbation",
    "Cimetidine: renal-function interaction (pramipexole level rises)",
    "Alcohol: ICD symptom risk exacerbation + more frequent sleep attacks – avoidance recommended"
  ],
  "studies": [
    {"title": "Impulse control disorders in Parkinson disease: a cross-sectional study of 3090 patients (DOMINION study)", "authors": "Weintraub D, Koester J, Potenza MN, et al.", "journal": "Arch Neurol. 2010;67(5):589-595.", "pmid": "20457959"},
    {"title": "Effects of acute prolactin manipulation on sexual drive and function in males.", "authors": "Krüger TH, Haake P, Haverkamp J, Krämer M, Exton MS, Saller B, Mann K, Hartmann U, Schedlowski M", "journal": "J Endocrinol", "pmid": "14656205"},
    {"title": "Treatment of restless legs syndrome and periodic limb movement disorder: an American Academy of Sleep Medicine clinical practice guideline.", "authors": "Winkelman JW, Berkowski JA, DelRosso LM, Koo BB, Scharf MT, Sharon D, Zak RS, Kazmi U, Falck-Ytter Y, Shelgikar AV, Trotti LM, Walters AS", "journal": "J Clin Sleep Med", "pmid": "39324694"}
  ],
  "faq": [
    {"q": "Pramipexole vs cabergoline – when to choose?", "a": "Pramipexole in two niche situations: (1) Sexual-emphasis user – D3 selectivity provides a libido/orgasm-quality boost, which is a bonus in the AAS-Tren libido-drop context; (2) User with cardiac valvulopathy history – cabergoline/bromocriptine ergot structure is contraindicated, pramipexole is non-ergot. BUT: ICD risk monitoring is MANDATORY (Weintraub 2010 DOMINION 17-22% at Parkinson dose, lower at AAS-PCT dose but exists). Cabergoline remains first-line in 90% of cases; pramipexole is more for concurrent sexual-recreational use (RecPharm sub-community) and niche clinical cases."},
    {"q": "Is impulse-control disorder real?", "a": "Yes, real clinical phenomenon. Weintraub 2010 DOMINION study (PMID 20457959) documented 17-22% ICD incidence in a cross-sectional analysis of 3090 Parkinson patients – pathological gambling, hypersexuality, compulsive shopping, binge eating. Mechanism: D3 mesolimbic-reward-pathway hyperactivation. AAS-PCT dose (0.25-0.5 mg/day) is roughly 1/10-1/15 of the Parkinson dose (~3 mg/day); ICD risk is proportionally lower but NOT zero. **Partner monitor protocol**: ask spouse/partner to watch for behavior changes (gambling pattern, shopping spree, hypersexuality, binge eating). Self-report log weekly (Y-BOCS abbreviated self-test). ICD symptom onset → IMMEDIATE cessation, NOT dose reduction."},
    {"q": "RecPharm status – what subreddit-level use?", "a": "Small online community (r/RecPharm, r/Pramipexole sub, RxList off-label forum) recreationally uses pramipexole (0.125-0.25 mg occasional dose) for sexual stimulation (orgasm quality + libido boost), not in AAS-PCT context. NOT endorsement, only documented community pattern. Mansour 2012 (PMID 22651823) case series documented 6 non-Parkinson men who experienced significant erectile-quality improvement on 0.125 mg pramipexole. **NOT recommended as recreational protocol**: ICD risk + sleep attack + orthostatic hypotension side effect profile outweighs recreational benefit for most users."},
    {"q": "AAS-PCT protocol practical dosing?", "a": "ULTRA-LOW start: 0.0625 mg (1/4 tablet of 0.25 mg) evening, with food × 3-4 days. Titration: 0.125 mg/day evening × 3-4 days, then 0.25 mg/day evening. Max AAS-PCT target: 0.25-0.5 mg/day. Prolactin monitor: pre-treatment + 10-14 days later. Goal: prolactin <15 ng/mL AND NO ICD symptom onset. If prolactin >25 ng/mL persisting → switch to cabergoline (pramipexole cannot go >0.5 mg/day in AAS context due to ICD risk)."}
  ],
  "related": ["cabergoline", "bromocriptine", "trenbolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.0625, "medium": 0.25, "high": 0.5},
    "unit": "mg / day (oral evening, with food, ultra-low titrated)",
    "note": "ULTRA-LOW start from 0.0625 mg (1/4 tablet of 0.25 mg). Titration in 3-4 day steps, max 0.25-0.5 mg/day in AAS-PCT context. ICD monitor MANDATORY. Kidney function (CrCl) pre-treatment for dose adjustment."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before pramipexole start",
      "timing": "Cabergoline intolerance OR sexual-emphasis goal",
      "markers": "Prolactin, Total/Free Test, kidney function (CrCl, creatinine), psychiatric history screen (ICD prerequisite!), Y-BOCS abbreviated baseline.",
      "purpose": "Baseline + ICD risk stratification. If ICD history (gambling, OCD spectrum, hypersexuality) → pramipexole contraindicated."
    },
    "midCycle": {
      "label": "Pramipexole day 10-14",
      "timing": "Pramipexole titration end +7 days",
      "markers": "Prolactin (re-test), Y-BOCS self-test (ICD screen), blood pressure, partner-monitor narrative.",
      "purpose": "Titration confirm + ICD symptom screen. If behavior change (gambling, compulsive shopping, hypersexuality) → IMMEDIATE cessation."
    },
    "postCycle": {
      "label": "Pramipexole cessation",
      "timing": "Last dose +1 week",
      "markers": "Prolactin (rebound), Y-BOCS post-test (ICD relief monitor).",
      "purpose": "Confirm: prolactin returns to baseline, ICD symptom (if developed) relief over 2-4 weeks."
    },
    "cruise": {
      "label": "Not recommended on chronic AAS cruise",
      "timing": "N/A",
      "markers": "N/A",
      "purpose": "Pramipexole on chronic AAS cruise NOT recommended – ICD risk is cumulative, cardio-monitor positions against long-term cabergoline. Only for cycle-specific prolactin events (max 8-12 weeks)."
    }
  }
}
