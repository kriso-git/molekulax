// Pramipexole (Mirapex) — non-ergot D3-D2 szelektív DA-agonista.
// FDA 1997 Boehringer. AAS-PCT niche: prolaktin-control + szexuális stim
// (D3-szelektivitás). FDA black-box ICD-rizikó.
// Sources: FDA Mirapex SmPC, Weintraub 2010 PMID 20457959,
// Mansour 2012 PMID 22651823, Romigi 2007 PMID 17646619.

export default {
  "id": "pramipexole",
  "name": "Pramipexole (Mirapex)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Non-ergot D3-D2 szelektív DA-agonista. FDA-jóváhagyott (1997 Boehringer) Parkinsonra + restless leg-re. AAS-PCT niche: prolaktin-control + szexuális stimulácó (D3-szelektivitás). FDA black-box ICD-rizikó (impulzus-kontroll zavar).",
  "description": "A Pramipexole (Mirapex) egy non-ergot dopamin-receptor agonista, amelyet a Boehringer Ingelheim fejlesztett ki, és 1997-ben kapott FDA-jóváhagyást Parkinson-kór és restless leg syndrome (RLS) kezelésére. A Cabergoline-tól eltérően nem ergot-szerkezetű, így a cardiac valvulopathy-rizikó negligible. Egyedi farmakológiai profilja a **D3-szelektivitás** (D3 > D2, ~7-10x affinity-difference) — ez okozza az szexuális-stimulácó-hatást ('RecPharm' off-label libido/orgazmus-quality enhancement community-szinten dokumentált). Pituitár D2-effektus révén prolaktint csökkent, hasonlóan a Cabergoline-hez, DE az AAS-PCT-világban ritkábban első-vonalbeli — két ok miatt: (1) FDA **black-box warning impulse-control disorder (ICD)** rizikóra (gambling, hypersexuality, compulsive shopping, binge eating) — Parkinson-dose-on 17-22% incidencia (Weintraub 2010 DOMINION study, PMID 20457959), AAS-PCT-dose-on alacsonyabb DE létezik; (2) szigorúan-titrálandó dose-window (0.0625 mg ultra-low start). Niche használat: szexuális-emphasis prolaktin-control + RecPharm sub-community recreational. Tier 3.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Non-ergot D3-D2 szelektív DA-agonista (D3 > D2), pituitár prolaktin-szuppresszió + szexuális-stimulácó"},
    {"label": "Adagolás (AAS)", "value": "0.0625 mg evening start, max 0.25-0.5 mg/nap titrálva"},
    {"label": "Felezési idő", "value": "~8-12 óra"},
    {"label": "Hatáskezdet", "value": "Prolaktin-csökkenés 2-4 óra"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx, HU + PL törzskönyvezett, WADA allowed"}
  ],
  "mechanism": "Pramipexole non-ergot benzothiazole-szerkezetű DA-agonista, D3 Ki ~0.5 nM (D2 ~3.6 nM, D4 ~3 nM). A D3-receptor a mezolimbikus dopamin-pathway-en gazdagon expresszált — ez magyarázza az szexuális-stimulácó-effektust (Mansour 2012 PMID 22651823 dokumentálta a Pramipexole+ED case-series-ben az orgasm-quality és libido-emphasis). Pituitár D2-revia prolaktin-szuppresszió a Cabergoline-szerű mechanizmussal. Hepatikus metabolizmus minimális (~10%), 90% vesén keresztül ürül változatlan formában → CrCl <30 ml/min mellett dose-csökkentés. Nincs ergot-szerkezet → nincs cardiac valvulopathy-rizikó (vs Cabergoline/Bromocriptine).",
  "legalStatus": "USA: FDA-jóváhagyott 1997 (Mirapex, Boehringer Ingelheim). Indikációk: Parkinson-kór, restless leg syndrome (RLS). EU: EMA-jóváhagyott. HU: törzskönyvezett (Mirapexin Rx). PL: törzskönyvezett (Mirapexin, Sifrol Rx). WADA: nem listán.",
  "onsetTime": "Prolaktin-csökkenés 2-4 óra",
  "halfLife": "~8-12 óra",
  "halfLifeActive": "~8-12 óra (parent compound aktív)",
  "interactionsWith": ["cabergoline", "bromocriptine", "trenbolone-info"],
  "aromatization": "Nincs — D2/D3 agonista.",
  "hepatotoxicity": "Alacsony hepatikus; FDA black-box warning for **impulse-control disorder** (gambling, hypersexuality, compulsive shopping) — incidence 17-22% in Parkinson dose ranges, lower at AAS-PCT-dose.",
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
    {"label": "1-2. hét", "body": "Toleráció kialakul, dose-titration target eléri. Prolaktin <15 ng/mL elérhető 0.25-0.5 mg-on. Szexuális-stimulácó (libidó-boost, orgazmus-quality) érzékelhető — a D3-szelektivitás hatása."},
    {"label": "Hosszú használat", "body": "ICD-symptom monitor folyamatos (3 havonta self-screen Yale-Brown OCD-scale rövidített). Ha ICD-symptom-onset → AZONNALI leállítás."},
    {"label": "Leállítás után", "body": "Prolaktin-rebound 1-2 hét alatt. ICD-symptom-relief 2-4 hét alatt (ha kialakult)."}
  ],
  "quality": {
    "pure": [
      "Boehringer Ingelheim Mirapex/Mirapexin 0.25/1 mg, Rx pharma-grade (EU-pharmacy)",
      "Pramipexole-ratiopharm, Pramipexole Teva, Pramipexole Sandoz generic (EU)",
      "Indiai generikum (Sun Pharma, Cipla)",
      "UGL ritkán — Rx pharma-grade ajánlott a tightening titration miatt"
    ],
    "caution": [
      "**FDA black-box: impulse-control disorder (ICD)** — gambling, hypersexuality, compulsive shopping, binge eating; partner-monitor + self-report napló KÖTELEZŐ; ha ICD-symptom-onset, AZONNALI leállítás",
      "Vese-funkció: CrCl <30 ml/min → dose-csökkentés szükséges (90% vesén ürül)",
      "Orthostatic hypotensio: lassan kelni reggel",
      "Sleep attacks: napi-aluvás dokumentált side-effect — vezetés óvatosság",
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
    "Alkohol: ICD-symptom-rizikó fokozódás + sleep attacks gyakoribb — kerülni javasolt"
  ],
  "studies": [
    {"title": "Impulse control disorders in Parkinson disease: a cross-sectional study of 3090 patients (DOMINION study)", "authors": "Weintraub D, Koester J, Potenza MN, et al.", "journal": "Arch Neurol. 2010;67(5):589-595.", "pmid": "20457959"},
    {"title": "Pramipexole and erectile dysfunction in non-Parkinson patients: case series", "authors": "Mansour A, Allouche S, Khowaja A, et al.", "journal": "Int J Impot Res. 2012;24(3):122-126.", "pmid": "22651823"},
    {"title": "Pramipexole in restless legs syndrome and periodic limb movement disorder", "authors": "Romigi A, Placidi F, Stefani N, et al.", "journal": "Sleep Med. 2007;8(7-8):739-747.", "pmid": "17646619"}
  ],
  "faq": [
    {"q": "Pramipexole vs Cabergoline — mikor választani?", "a": "Pramipexole két niche-szituációban: (1) Szexuális-emphasis user — a D3-szelektivitás libidó/orgazmus-quality boost-ot ad, ami az AAS-Tren-libidó-drop-context-en bonusz; (2) Cardiac valvulopathy-history-val rendelkező felhasználó — Cabergoline/Bromocriptine ergot-szerkezet kontraindikált, Pramipexole non-ergot. DE: ICD-rizikó monitoring KÖTELEZŐ (Weintraub 2010 DOMINION 17-22% Parkinson-dose, AAS-PCT-dose alacsonyabb DE létezik). Cabergoline first-line marad 90%-ban; Pramipexole inkább konkurrens szexuális-recreational use (RecPharm sub-community) és niche-clinical case."},
    {"q": "Impulse-control disorder valóság?", "a": "Igen, valós klinikai jelenség. A Weintraub 2010 DOMINION study (PMID 20457959) 3090 Parkinson-páciens cross-sectional analysis-ban 17-22% ICD-incidenciát dokumentált — pathological gambling, hypersexuality, compulsive shopping, binge eating. Mechanizmus: D3-mezolimbikus-reward-pathway hiperaktiváció. AAS-PCT-dose (0.25-0.5 mg/nap) ennek a Parkinson-dose-nak (~3 mg/nap) ~1/10-1/15-öd része, ICD-rizikó arányosan alacsonyabb DE NEM nulla. **Partner-monitor protokoll**: a felhasználó kérje meg a házastársát/partnerét, hogy figyelje a behavior-változásokat (gambling-pattern, shopping-spree, hypersexuality, binge-eating). Self-report napló heti egyszer (Y-BOCS-rövidített self-test). ICD-symptom-onset → AZONNALI leállítás, NEM dose-csökkentés."},
    {"q": "RecPharm-status — milyen szubreddit-szintű használat?", "a": "Kis online community (r/RecPharm, r/Pramipexole-szub, RxList off-label fórum) recreational használja a Pramipexole-t (0.125-0.25 mg occasional dose) szexuális-stimulációra (orgazmus-quality + libidó-boost), nem AAS-PCT-context-en. NEM endorsement, csak dokumentált community-pattern. A Mansour 2012 (PMID 22651823) case-series 6 non-Parkinson férfit dokumentált, akik 0.125 mg Pramipexole-on jelentős erectile-quality improvement-et tapasztaltak. **NEM ajánlott a recreational protokoll**: ICD-rizikó + sleep-attack + orthostatic-hypotensio side-effect-profil meghaladja a recreational benefit-et a legtöbb felhasználón."},
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
      "purpose": "Pramipexole chronic AAS-cruise-on NEM ajánlott — ICD-rizikó kumulatív, cardio-monitor pozícionálódik a long-term Cabergoline-mal szemben. Csak ciklus-specifikus prolaktin-event-re (max 8-12 hét)."
    }
  }
}
