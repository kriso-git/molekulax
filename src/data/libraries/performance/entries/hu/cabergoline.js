// Cabergoline (Dostinex) — long-acting ergot D2-dopamin agonista.
// EMA 1992 Pharmacia, FDA 1996. AAS-PCT: 19-Nor/Tren prolactin-control
// golden-standard, 0.25-0.5 mg 2x/hét.
// Sources: EMA Dostinex SPC, FDA Dostinex SmPC, Webster 1994 PMID 8090165,
// Schade 2007 PMID 17371996, Krüger 2003 PMID 12849866.

export default {
  "id": "cabergoline",
  "name": "Cabergoline (Dostinex)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Long-acting ergot-D2-dopamin agonista. EMA-jóváhagyott (1992 Pharmacia, ma Pfizer) hyperprolaktinémiára. AAS-ban: 19-Nor/Tren prolactin-control golden-standard, 0.25-0.5 mg 2x/hét bloodwork-titrálva. Long t1/2 ~63 h.",
  "description": "A Cabergoline (Dostinex) egy long-acting ergot-szerkezetű szelektív D2-dopamin-receptor agonista, amelyet a Farmitalia Carlo Erba (későbbi Pharmacia, ma Pfizer) fejlesztett ki, és 1992-ben kapott EMA-jóváhagyást Európában (FDA 1996), hyperprolaktinémia és prolaktinoma kezelésére. A pituitár lactotrof D2-receptorokon agonist hatást fejt ki, gátolva a prolaktin-szekréciót — a Webster 1994 head-to-head trial (PMID 8090165) bizonyította, hogy a Cabergoline klinikailag hatékonyabb és jobban tolerált mint a régebbi Bromocriptine (~95% prolaktin-normalizáció vs ~75%). AAS-kontextusban: a 19-Nor szteroidek (Trenbolone, Nandrolone, MENT) közvetve és közvetlenül emelik a prolaktin-szintet — a Trenbolone a progeszteron-receptort is agonistálja, a Nandrolone a Cabergoline-érzékeny prolaktinerg pathway-t fokozza. Tünetek: Tren-flu, lactation (galaktorrea), libidó-csökkenés, gynecomastia-formation (prolaktin-mediated, NEM E2). A Cabergoline a klasszikus 19-Nor/Tren-cycle prolactin-control gold-standard: 0.25-0.5 mg 2x/hét (Mon+Thu) bloodwork-titrálva, célzott prolaktin <15 ng/mL.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Long-acting ergot D2-DA-agonista, pituitár lactotrof prolaktin-szuppresszió"},
    {"label": "Adagolás (AAS)", "value": "0.25-0.5 mg 2x/hét (Mon+Thu) bloodwork-titrálva"},
    {"label": "Felezési idő", "value": "~63-69 óra (very long)"},
    {"label": "Hatáskezdet", "value": "Prolaktin-csökkenés mérhető 3 óra, plateau 48-72 óra"},
    {"label": "Jogi státusz", "value": "EMA + FDA Rx, HU + PL törzskönyvezett, WADA allowed (nem listán)"}
  ],
  "mechanism": "A Cabergoline ergot-szerkezetű D2-szelektív dopamin-agonista (D2-receptor Ki ~0.4 nM, ~85x szelektívebb D1 felett mint a Bromocriptine). A pituitár anterior lactotrof sejtek D2-receptorához nagy-affinitással kötődik, gátolva a prolaktin-szekréciót és csökkentve a lactotrof sejtproliferációt (prolaktinoma-shrinkage képes). Bonus parciális D1-antagonizmus a vegetatív mellékhatás-profilt kisebb mértékűre redukálja (vs Bromocriptine). Hepatikus CYP3A4 metabolizál; a hosszú felezési idő (~63 h) miatt twice-weekly dose elegendő. AAS-kontextusban a Trenbolone-progeszteron-pathway gátlása másodlagos benefit: a Tren-flu (alacsony-lázas állapot + libidó-drop) közvetlen prolaktin-szuppresszióval enyhíthető. NEM WADA-listán — sportoló-versenyző számára nem tilos.",
  "legalStatus": "EU: EMA-jóváhagyott 1992 (Dostinex 0.5 mg, Pharmacia, ma Pfizer). USA: FDA-jóváhagyott 1996 (Dostinex 0.5 mg, Pfizer). Indikáció: hyperprolaktinémia (idiopátiás vagy prolaktinoma-eredetű), Parkinson-kór adjuváns (magas-dose, NEM AAS-PCT-dose-on). HU: törzskönyvezett (Dostinex Rx). PL: törzskönyvezett (Dostinex Rx). WADA: nem szerepel a listán (nem teljesítményfokozó, segítség).",
  "onsetTime": "Prolaktin-csökkenés 3 óra, plateau 48-72 óra",
  "halfLife": "~63-69 óra",
  "halfLifeActive": "~63-69 óra (parent compound aktív, fő metabolitok inaktívak)",
  "interactionsWith": ["pramipexole", "bromocriptine", "trenbolone-info", "nandrolone-info"],
  "aromatization": "Nincs — DA-agonista, nem szteroid-mechanizmus.",
  "hepatotoxicity": "Alacsony hepatikus; ritka cardiac valvulopathy magas dózis (>3 mg/hét) chronic (Parkinson-protokoll dózisai) — AAS-ban használt 0.5-1 mg/hét dose alatt klinikailag NEM dokumentált rizikó (FDA Dostinex label).",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS)",
  "bindingAffinity": "D2 Ki ~0.4 nM (high affinity), D1 ~85x kisebb. Pituitár-szelektív, perifériás vegetatív-effekt alacsony.",
  "detectionWindow": "Nem releváns (WADA nem listán).",
  "benefits": [
    "AAS 19-Nor/Tren prolaktin-control golden-standard",
    "Long-acting (twice-weekly dose) — compliance-előny",
    "Pituitár-szelektív D2 → kevés vegetatív mellékhatás (vs Bromocriptine)",
    "Bonus: post-orgasmic refractory period rövidítése (Krüger 2003) — szexuális élet-javítás",
    "Prolactin-mediated gyno-formation prevenció Tren/Deca-stack-en",
    "Affordable EU-pharmacy (~€20-40/box 0.5 mg × 8 tabletta)"
  ],
  "quickStart": [
    "Bloodwork-baseline ELŐSZÖR: ciklus 4-6. hét prolaktin LC-MS/MS vagy sensitive immunoassay",
    "Standard 19-Nor/Tren-control: 0.25 mg 2x/hét (Mon+Thu) indítás",
    "Cél: prolaktin <15 ng/mL (férfi normálérték <15 ng/mL); ha >25 ng/mL persisting → dose-emelés 0.5 mg 2x/hét",
    "Vízzel + étkezés UTÁN (nausea-prevention)",
    "Re-test 7-10 nap múlva, titration confirm",
    "Hosszú felezés miatt steady-state ~10-14 nap után érhető el"
  ],
  "expectations": [
    {"label": "1-3. nap", "body": "Prolaktin-csökkenés mérhető (~30-50%), Tren-flu enyhülés érzékelhető (alacsony-láz, fejfájás, izomfáradtság enyhülés)."},
    {"label": "1-2. hét", "body": "Steady-state (twice-weekly dose ~10-14 nap után), prolaktin target <15 ng/mL elérhető. Libido-recovery dokumentálható, gyno-formation rizikó minimalizált."},
    {"label": "Hosszú használat (3+ hónap chronic)", "body": "Echocardiográfia ajánlott évente (cardiac valvulopathy rule-out, bár AAS-dose-on rizikó alacsony)."},
    {"label": "Leállítás után", "body": "Prolaktin-rebound enyhe 1-2 hét alatt. Ha Tren/Deca-ciklus folytatódik, NE szakítsd meg a Cabergoline-t — folyamatosan szedd."}
  ],
  "quality": {
    "pure": [
      "Pfizer Dostinex 0.5 mg blister 8 tabletta, Rx pharma-grade (EU-pharmacy elérhető)",
      "Cabergoline-ratiopharm, Cabergoline Teva, Cabergoline Sandoz generic (EU)",
      "Indiai generikum (Sun Pharma, Cipla Caberlin 0.5 mg)",
      "UGL liquid cabergoline: HPLC-tested forrás kötelező — gyakran 1 mg/mL, easy túldozírozás-rizikó"
    ],
    "caution": [
      "Nausea / orthostatic hypotensio első dose-okon: titrálás 0.125 mg-tól indítva 2-3 dose-on át (lassú-titration ajánlott)",
      "Cardiac valvulopathy: chronic high-dose (>3 mg/hét, Parkinson-protokoll) — AAS-dose-on (0.5-1 mg/hét) rizikó alacsony, DE échocardiográfia évente long-term userön ajánlott",
      "Impulse-control disorder (gambling, hypersexuality, compulsive shopping) — Pramipexole-on gyakoribb, Cabergoline-on ritka DE dokumentált (Weintraub 2010)",
      "Antipszichotikumokkal (D2-antagonisták: haloperidol, risperidon) NEM kombinálható — antagonist-overlap",
      "Antihypertenzív therapiák: hypotensio-fokozódás óvatos monitor"
    ],
    "avoid": [
      "Pregnancy / breastfeeding (Pregnancy Category B, DE ovulation-induction → kontraciverzív gondolkodás)",
      "Cardiac valvulopathy preexistente",
      "Ergot-alkaloid allergia (Bromocriptine, Methysergide cross-reactivity)",
      "Súlyos hepatikus insufficiencia",
      "Antipszichotikum-terápia jelenleg (D2-antagonizmus konfliktus)"
    ]
  },
  "interactions": [
    "Trenbolone/Nandrolone stack: standard prolaktin-control (klasszikus 19-Nor PCT-companion)",
    "Bromocriptine: NEM kombinálható (overlap-mechanism)",
    "Antipszichotikumok (haloperidol, risperidon, olanzapin): kontraindikált (D2-antagonizmus)",
    "Antihypertenzív (Lisinopril, β-blokkolók): hypotensio-fokozódás monitor",
    "Macrolid-antibiotikumok (erythromycin, clarithromycin): CYP3A4-gátlás → Cabergoline-szint emelkedik",
    "Alkohol: vegetatív mellékhatás-fokozódás (nausea, hypotensio), kerülni javasolt"
  ],
  "studies": [
    {"title": "Retrospective comparison of cabergoline and bromocriptine effects in hyperprolactinemia: a single center experience.", "authors": "Arduc A, Gokay F, Isik S, Ozuguz U, Akbaba G, Tutuncu Y, Berker D, Guler S", "journal": "J Endocrinol Invest", "pmid": "25421155"},
    {"title": "Risks of Cardiac Valve Regurgitation and Heart Failure Associated with Ergot- and Non-Ergot-Derived Dopamine Agonist Use in Patients with Parkinson's Disease: A Systematic Review of Observational Studies.", "authors": "Tran T, Brophy JM, Suissa S, Renoux C", "journal": "CNS Drugs", "pmid": "26585874"},
    {"title": "Effects of acute prolactin manipulation on sexual drive and function in males.", "authors": "Krüger TH, Haake P, Haverkamp J, Krämer M, Exton MS, Saller B, Mann K, Hartmann U, Schedlowski M", "journal": "J Endocrinol", "pmid": "14656205"},
    {"title": "Impulse control disorders in Parkinson disease: a cross-sectional study of 3090 patients (DOMINION study)", "authors": "Weintraub D, Koester J, Potenza MN, et al.", "journal": "Arch Neurol. 2010;67(5):589-595.", "pmid": "20457959"}
  ],
  "faq": [
    {"q": "Tren-prolactin — mikor szükséges Cabergoline?", "a": "Tren-szteroid (és Nandrolone-stack) közvetve és közvetlenül emeli a prolaktin-szintet — a Trenbolone agonistálja a progeszteron-receptort, ami a prolaktin-szekréciót fokozza. Tünetek: Tren-flu (alacsony-lázas állapot + fejfájás + izomfáradtság), galaktorrea (mellbimbó-tej-elválasztás), libidó-csökkenés, prolaktin-mediated gynecomastia-formation (NEM E2-mediated — ez a Cabergoline-érzékeny típus). Cabergoline szükséges ha: (1) prolaktin >25 ng/mL bloodworkon (target <15), (2) symptom-onset (libidó-drop, lactation, Tren-flu), (3) prophylactic 19-Nor-blast tudottan magas-prolaktin-rizikó esetén. NEM minden Tren-ciklusra kell — bloodwork-titrálva."},
    {"q": "Cardiac valvulopathy rizikó AAS-dose-on?", "a": "A Schade 2007 (PMID 17371996) systematic review chronic Parkinson-dose (3-6 mg/nap × 5+ év) Cabergoline-felhasználón ~40% valvular regurgitation rizikót dokumentált (mitral + tricuspid valve). DE az AAS-PCT-dose (0.5-1 mg/HÉT, NEM nap) ennek a chronic-dose-nak ~1/30-ad része — az AAS-context klinikai-irodalmi rizikó-baseline negligible szinten. FDA Dostinex label: low-dose <2 mg/hét chronic-use valvular AE-incidencia <2%. Praktikusan: chronic-cruise AAS-user (1+ év 0.5-1 mg/hét), évi echocardiográfia (TTE) ajánlott bayesi pre-test probability alacsony, de prudent."},
    {"q": "Cabergoline + Sex — szexuális benefit?", "a": "A Krüger 2003 (PMID 12849866) dokumentálta, hogy egészséges férfiakon 0.5 mg single-dose Cabergoline a post-orgasmic refractory periódust (PORP) ~80%-kal rövidíti (vs placebo ~30 perces orgazmus-utáni 'down' periódus). A mechanizmus: az orgazmus után transient prolaktin-spike okozza a refractory periódust; Cabergoline preventálja ezt. Off-label 'PRL-crash' recreational használat: 0.25 mg orgazmus előtt 1 órával. NEM endorsement — de az AAS-Tren-context-en bonus benefit (Tren-libidó-drop + PORP-shortening kombóban segít)."},
    {"q": "Nasal-spray Cabergoline?", "a": "Compounded nasal-spray formuláció (5 mg/mL liquid, 50 mcg/spray dose) — gyorsabb onset (~30 perc vs orális ~3 óra), bypass first-pass hepatic metabolism. UGL-only globally (NINCS FDA/EMA-jóváhagyás nazális formulára). Off-label use kompoundáló-gyógyszertárak egyes US/EU jurisdictionban. Nasal-irritáció lehet, hosszú-távú nyálkahártya-károsodás dokumentálatlan. NEM ajánlott AAS-PCT-standardként; orális Dostinex marad a default."},
    {"q": "Long-term cruise-Cabergoline?", "a": "TRT-cruise AAS-user (Test + occasional 19-Nor-blast) low-dose Cabergoline (0.25 mg 1x/hét) chronic-use-kérdéses. Echocardiográfia évente ajánlott, és prolaktin-monitor 3 havonta. Általában: NEM chronic-cruise-on, csak ciklus-cycle alatt (Tren/Deca aktív ciklus 8-12 hét → Cabergoline 0.5 mg 2x/hét; off-cycle → leállás). A long-term low-dose biztonsága nagyrészt extrapolated postmenopauzális prolaktinoma-páciens-adatokból — AAS-male-specific evidence sparse."}
  ],
  "related": ["pramipexole", "bromocriptine", "trenbolone-info", "nandrolone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.5, "high": 1},
    "unit": "mg / 2x hét (orális Mon+Thu, bloodwork-titrálva)",
    "note": "Standard 19-Nor/Tren prolactin-control: 0.25-0.5 mg 2x/hét. Cél prolaktin <15 ng/mL bloodwork-titrálva. Hosszú felezés (~63 h) miatt steady-state ~10-14 nap után. Súlyos high-prolaktin-event (>50 ng/mL) → 0.5-1 mg 2x/hét × 2 hét hard-titration. Étkezés UTÁN (nausea-prevention)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Cabergoline-indítás előtt",
      "timing": "19-Nor/Tren ciklus 4-6. hét vagy symptom-onset",
      "markers": "Prolaktin sensitive-immunoassay vagy LC-MS/MS (NEM ECL — overestimate!), Total/Free Testosterone, E2, LH, FSH, ALT/AST, MRI ha prolaktin >100 ng/mL (rule out micro-/macroprolactinoma).",
      "purpose": "Baseline. Indikáció: prolaktin >25 ng/mL férfi-normálérték felett, vagy symptom-onset (libidó-drop, lactation, Tren-flu). Ha prolaktin >100 → MRI sella turcica indokolt (prolactinoma rule-out)."
    },
    "midCycle": {
      "label": "Cabergoline 10-14. nap",
      "timing": "Cabergoline-indítás +10-14 nap (steady-state-szint)",
      "markers": "Prolaktin (re-test), Total Test, Free Test, E2, ALT/AST.",
      "purpose": "Titration confirm: prolaktin <15 ng/mL target. Ha még >25 → dose-emelés 0.5 mg 2x/hét. Symptom-resolution dokumentálás (libido-recovery, no lactation)."
    },
    "postCycle": {
      "label": "Ciklus vége / Cabergoline leállítás",
      "timing": "Utolsó dose +2 hét",
      "markers": "Prolaktin (rebound monitor), Total/Free Test, E2, lipid panel.",
      "purpose": "Confirm: prolaktin baseline-re visszatér 2-3 hét alatt. Ha rebound-spike >40 ng/mL → új cycle előtt Cabergoline-pre-emptív 0.25 mg/hét × 2 hét."
    },
    "cruise": {
      "label": "Chronic TRT-cruise + occasional 19-Nor-blast",
      "timing": "0.25 mg 1x/hét chronic, blast-fázisban 0.5 mg 2x/hét",
      "markers": "Prolaktin 3 havonta, echocardiográfia (TTE) évente cardiac valvulopathy-monitor, lipid panel évente.",
      "purpose": "Chronic AAS-user prolaktin-control + cardiac monitor. AAS-context low-dose chronic Cabergoline rizikó alacsony, de évi echo prudent."
    }
  }
}
