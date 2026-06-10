// L-Carnitine — kvaterner ammónium-vegyület, endogén lizin+metionin-precursorból
// szintetizálódó mitokondriális long-chain fatty acid shuttle. Gulewitsch+Krimberg
// 1905 izolálás, Sigma-Tau 1985 FDA primary carnitine deficiency Rx, bodybuilding
// off-label 1990s. Sources: Stephens 2007 PMID 17331998, Wall 2011 PMID 21224234,
// Koeth 2013 Nature Med PMID 23563705, Kraemer 2008 PMID 18204383,
// Vukovich 1994 PMID 7960016.

export default {
  "id": "l-carnitine",
  "name": "L-Carnitine",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Kvaterner ammónium-vegyület, endogén lizin+metionin-precursorból szintetizálódó mitokondriális long-chain fatty acid shuttle (carnitine palmitoyltransferase I/II). Gulewitsch+Krimberg 1905 izolálás, Sigma-Tau 1985 FDA primary carnitine deficiency Rx; bodybuilding off-label 1990s, OTC fat-burner supplement 2000s. WADA: allowed, NADA Germany 2018 monitored >50 mg/kg IV-bolus.",
  "description": "Az L-Carnitine egy kvaterner ammónium-vegyület, amelyet az emberi test endogén szintetizál ~25 mg/nap mennyiségben a hepatikus + renalis enzimkaszkádon keresztül lizin és metionin precursorokból. Eredetileg Gulewitsch és Krimberg orosz biokémikusok izolálták 1905-ben izomszövetből (innen a 'carnitine' név, 'caro/carnis' = hús). Csak az L-izomer biológiailag aktív; a D-izomer enzimatikusan inert + cardiotoxic-szignál. Az 1985-ös Sigma-Tau (olasz farma) FDA-jóváhagyás a primer karnitin-deficiencia Rx-indikációra szólt; a bodybuilding off-label use a 1990-es években indult, 2000-es évek óta mainstream 'fat-burner supplement' OTC kategória. A mechanizmus alapja a hosszú-szénláncú zsírsavak (LCFA) CoA-mediated mitokondriális belső-membrán transzportja a carnitine palmitoyltransferase I/II (CPT-I/II) enzim shuttle-rendszeren keresztül — ez a β-oxidáció rate-limiting lépése. Stephens 2007 (Am J Physiol PMID 17331998) klasszikus IV-clamp metodológia-trial bizonyította, hogy a szuprafiziológiás oral dose >1 g/nap NEM emeli az endogén szintetikus szintet, de chronic-loading-on (3-4 hét, 2 g/nap) az izomszövet-koncentrációt 2-3x emelheti carbohydrate-co-ingestion-mediated insulin-stimulated muscle-uptake mellett. Az oral bioavailability alacsony (~15%), az IM/SC injekciós forma 100% bioavailability + 4-6x dose-equivalent oral-felett. WADA: 'allowed' a 2025 prohibited listen, de a NADA Germany 2018 monitored-kategóriába emelte a >50 mg/kg IV-bolus dose-okat (potential blood-doping-marker context).",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Long-chain fatty acid CoA-mediated mitokondriális shuttle (CPT-I/II), β-oxidáció rate-limiting-step"
    },
    {
      "label": "Adagolás",
      "value": "Oral 500-2000 mg/nap split 3x; IM/SC 1-2 g 2-3x/hét cutting-cycle"
    },
    {
      "label": "Felezési idő",
      "value": "~15 óra (parent compound), izom-loading steady-state 3-4 hét chronic"
    },
    {
      "label": "Hatáskezdet",
      "value": "Oral 1-2 óra (low-bioavailability ~15%); IM/SC 30-60 perc (100% bioavailability)"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA + EMA Rx (primary carnitine deficiency), OTC supplement-kategória globálisan. WADA: allowed, NADA Germany 2018 monitored >50 mg/kg IV-bolus."
    }
  ],
  "variantCount": 2,
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": {
        "hu": "L-Carnitine Tartrate (orális kapszula, lassú-felszívódás ~15%)",
        "en": "L-Carnitine Tartrate (oral capsule, slow absorption ~15%)",
        "pl": "L-Karnityna Tartrate (kapsułka doustna, wolne wchłanianie ~15%)"
      },
      "routeNote": {
        "hu": "Napi szintű kényelmes és olcsó beadási forma. Chronic-loading 3-4 hét alatt 2 g/nap oral + szénhidrát-ko-ingestion éri el az izomszövet steady-state koncentráció-emelkedését. Kezdő és fenntartó protokollok leggyakoribb választása.",
        "en": "Day-to-day convenient and inexpensive administration form. Chronic-loading reaches muscle-tissue steady-state concentration elevation over 3-4 weeks at 2 g/day oral + carbohydrate co-ingestion. Most common choice for beginner and maintenance protocols.",
        "pl": "Codzienna wygodna i niedroga forma podawania. Chronic-loading osiąga podwyższenie stężenia w tkance mięśniowej w stanie stacjonarnym przez 3-4 tygodnie przy 2 g/dzień doustnie + ko-ingestii węglowodanów. Najczęściej wybierany protokół dla początkujących i utrzymania."
      },
      "label": "Oral kapszula",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "OTC supplement-kategória globálisan (US, EU, HU, PL), FDA-jóváhagyott primary carnitine deficiency Rx (Sigma-Tau Carnitor 1985).",
      "bioavailability": "~15% (alacsony — gastrointestinalis P-glycoprotein efflux + first-pass-loss)",
      "onsetTime": {
        "hu": "1-2 óra (oral abszorpció); steady-state izom-loading 3-4 hét chronic",
        "en": "1-2 hours (oral absorption); steady-state muscle-loading 3-4 weeks chronic",
        "pl": "1-2 godziny (wchłanianie doustne); stan stacjonarny ładowania mięśni 3-4 tygodnie chronic"
      },
      "halfLife": "~15 óra",
      "halfLifeActive": "~15 óra",
      "detectionWindow": "WADA-akkreditált LC-MS/MS NEM standard test, chronic high-dose ~1-2 hét",
      "aromatization": "Nem aromatizál (nem szteroid hatóanyag — kvaterner ammónium-vegyület).",
      "hepatotoxicity": "Alacsony — endogén-szintetizált, krónikus oral <3 g/nap hepatikusan biztonságos.",
      "quality": {
        "pure": [
          "FDA-jóváhagyott Carnitor (Sigma-Tau) tabletta/oral solution + 50+ OTC supplement-brand (NOW Foods, Jarrow Formulas, Doctor's Best) USP-certified",
          "Acetyl-L-Carnitine (ALCAR) forma blood-brain-barrier-permeable, cognitive-szupplement OTC-en gyakori",
          "L-Carnitine L-Tartrate (LCLT) izom-loading specific OTC-forma (Kraemer 2008 PMID 18204383)"
        ],
        "caution": [
          "TMAO baseline (Koeth 2013 Nature Med PMID 23563705) >2 g/nap chronic 6+ hónap cardiovascular-risk-marker",
          "GI-side: hasmenés, hányinger, fishy-body-odor (gut-microbiota TMA-emission >2 g/nap)",
          "Hypothyroidism Rx-on: L-Carnitine T4 → T3 perifériás konverzió-csökkentő (Benvenga 2001 PMID 11518815)",
          "Warfarin INR-emelkedés krónikus dose-on (Martinez 2007 PMID 17449974)"
        ],
        "avoid": [
          "Primary carnitine deficiency-specific Rx-on kívül szuper-supraphysiological oral dose >3 g/nap chronic — TMAO-elevation cardiovascular-risk",
          "End-stage renal disease (ESRD) dialízis-betegnél D-isomer-kontamináció risk (D,L-Carnitine OTC kerülendő)",
          "Seizure-disorder Rx-on (krónikus oral L-Carnitine ritka seizure-induction-risk)",
          "Veseelégtelenség Stage 4-5 — dose-adjust szükséges (renal clearance-csökkenés)"
        ]
      },
      "indications": "Cutting-cycle szubtilis fat-oxidation-shift + izom-glükogén-megőrzés; chronic-loading 3-4 hét carbohydrate-co-ingestion mellett (Wall 2011 PMID 21224234)",
      "dosing": {
        "hu": "Tipikus protokoll: 2-4 g/nap split 3x étkezésekkel (carbohydrate-co-ingestion insulin-stimulated muscle-uptake érdekében). Kezdő dózis 500-1000 mg/nap, hatékonysági határ chronic-loading-on 2 g/nap.",
        "en": "Typical protocol: 2-4 g/day split 3x with meals (carbohydrate co-ingestion for insulin-stimulated muscle uptake). Starting dose 500-1000 mg/day, efficacy plateau on chronic-loading at 2 g/day.",
        "pl": "Typowy protokół: 2-4 g/dzień podzielone 3x z posiłkami (ko-ingestia węglowodanów dla insulino-stymulowanego wychwytu mięśniowego). Dawka początkowa 500-1000 mg/dzień, próg skuteczności na chronic-loading 2 g/dzień."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 500,
          "medium": 2000,
          "high": 4000
        },
        "unit": "mg/nap",
        "note": {
          "hu": "Oral 500-4000 mg/nap split 3x étkezésekkel (carbohydrate-co-ingestion insulin-stimulated muscle-uptake). Chronic-loading steady-state 3-4 hét. Az oral forma isFixedDose — info-card megjelenítés, MiniCalc nem releváns.",
          "en": "Oral 500-4000 mg/day split 3x with meals (carbohydrate co-ingestion for insulin-stimulated muscle uptake). Chronic-loading steady-state 3-4 weeks. The oral form is isFixedDose — info-card display, MiniCalc not relevant.",
          "pl": "Doustnie 500-4000 mg/dzień podzielone 3x z posiłkami (ko-ingestia węglowodanów dla insulino-stymulowanego wychwytu mięśniowego). Chronic-loading stan stacjonarny 3-4 tygodnie. Forma doustna jest isFixedDose — wyświetlanie info-card, MiniCalc nie ma zastosowania."
        }
      }
    },
    {
      "id": "aq",
      "routeId": "aq",
      "routeLabel": {
        "hu": "L-Carnitine Tartrate (IM/SC vizes ampulla, 100% bioavailability)",
        "en": "L-Carnitine Tartrate (IM/SC aqueous ampoule, 100% bioavailability)",
        "pl": "L-Karnityna Tartrate (IM/SC ampułka wodna, 100% biodostępność)"
      },
      "routeNote": {
        "hu": "Maximális bioavailability (100%) — az oral ~15%-ával szemben a teljes dózis bejut. Performance-fókuszú pre-workout protokoll: 500-1000 mg SC injection 30-60 perccel edzés előtt. Dose-equivalent ~4-6x az oralishoz képest, gyorsabb steady-state elérés 1-2 hét alatt.",
        "en": "Maximum bioavailability (100%) — versus oral ~15%, the full dose enters circulation. Performance-focused pre-workout protocol: 500-1000 mg SC injection 30-60 minutes before training. Dose-equivalent ~4-6x oral, faster steady-state reached within 1-2 weeks.",
        "pl": "Maksymalna biodostępność (100%) — w porównaniu do doustnej ~15%, cała dawka trafia do krążenia. Protokół przedtreningowy zorientowany na wydolność: 500-1000 mg iniekcja SC 30-60 minut przed treningiem. Dawka-równoważnik ~4-6x w stosunku do doustnej, szybsze osiągnięcie stanu stacjonarnego w ciągu 1-2 tygodni."
      },
      "label": "IM/SC injekció",
      "image": "/performance/water-vial.png",
      "defaultVialMg": 1000,
      "defaultBacMl": 5,
      "defaultDoseMcg": 500000,
      "legalStatus": "Rx-only (IM/SC formulation), FDA-jóváhagyott Carnitor IV/IM (Sigma-Tau) primary carnitine deficiency-re. EU + HU + PL Rx-only.",
      "bioavailability": "~100% (IM/SC bypass-olja first-pass-loss-t)",
      "onsetTime": {
        "hu": "30-60 perc (IM/SC abszorpció)",
        "en": "30-60 minutes (IM/SC absorption)",
        "pl": "30-60 minut (wchłanianie IM/SC)"
      },
      "halfLife": "~15 óra",
      "halfLifeActive": "~15 óra",
      "detectionWindow": "NADA Germany 2018 monitored-kategória >50 mg/kg IV-bolus dose-on; standard WADA-test NEM detektálja",
      "aromatization": "Nem aromatizál (nem szteroid hatóanyag — kvaterner ammónium-vegyület).",
      "hepatotoxicity": "Alacsony — endogén-szintetizált, IM/SC bypass first-pass hepatikus.",
      "quality": {
        "pure": [
          "FDA-jóváhagyott Carnitor IV/IM vial (Sigma-Tau) — pharmacy-szourzott Rx-grade",
          "Compounding pharmacy IM/SC vial standardizált 1 g/5 mL (200 mg/mL) EU vagy 1 g/mL US"
        ],
        "caution": [
          "Injection-site pain (PIP): IM/SC quaternary-ammonium-vehicle gyakran fájdalmas, IM-deltoid/gluteal rotáció",
          "Allergic-reaction histamine-release risk (ritka): IM/SC first-dose 0.5 g test-dose javasolt",
          "Hypertonia transient post-injection (parasympathetic-vasodilation lokális)",
          "UGL liquid carnitine HPLC-tesztelt forrás kötelező — dose-variance ±20% dokumentált"
        ],
        "avoid": [
          "Athletes WADA-tested >50 mg/kg IV-bolus dose-on NADA Germany 2018 monitored-kategória",
          "End-stage renal disease (ESRD) dialízis-betegnél D-isomer-kontamináció risk",
          "Seizure-disorder Rx-on (IM/SC L-Carnitine ritka seizure-induction-risk)"
        ]
      },
      "indications": "Performance-fókuszú cutting-cycle — bioavailability-előny + dose-equivalent 4-6x oral-felett (Sigma-Tau Carnitor IM clinical Rx-context). Pre-workout SC 500-1000 mg edzés előtt 30-60 perccel.",
      "dosing": {
        "hu": "200-1000 mg/injekció IM/SC 2-3x/hét cutting-cycle (8-12 hét cycle-length). Tipikus performance-dose: 500 mg SC pre-workout. Sigma-Tau Carnitor standard ampulla 1 g/5 mL.",
        "en": "200-1000 mg/injection IM/SC 2-3x/week cutting-cycle (8-12 week cycle length). Typical performance dose: 500 mg SC pre-workout. Sigma-Tau Carnitor standard ampoule 1 g/5 mL.",
        "pl": "200-1000 mg/iniekcja IM/SC 2-3x/tydzień cutting-cycle (długość cyklu 8-12 tygodni). Typowa dawka wydolnościowa: 500 mg SC przed treningiem. Standardowa ampułka Sigma-Tau Carnitor 1 g/5 mL."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 200,
          "medium": 500,
          "high": 1000
        },
        "unit": "mg/injekció",
        "note": {
          "hu": "IM/SC 200-1000 mg/injekció 2-3x/hét cutting-cycle (8-12 hét). Tipikus 1 g ampulla (5 mL) — 500 mg = 2.5 mL pre-workout SC. Bioavailability 100%, steady-state gyorsabb mint oral.",
          "en": "IM/SC 200-1000 mg/injection 2-3x/week cutting-cycle (8-12 weeks). Typical 1 g ampoule (5 mL) — 500 mg = 2.5 mL pre-workout SC. Bioavailability 100%, steady-state faster than oral.",
          "pl": "IM/SC 200-1000 mg/iniekcja 2-3x/tydzień cutting-cycle (8-12 tygodni). Typowa ampułka 1 g (5 mL) — 500 mg = 2.5 mL przed treningiem SC. Biodostępność 100%, stan stacjonarny szybszy niż doustnie."
        }
      }
    }
  ],
  "mechanism": "Az L-Carnitine kvaterner ammónium-vegyület, amelyet az emberi test endogén szintetizál ~25 mg/nap mennyiségben hepatikus + renalis enzimkaszkádon keresztül lizin + metionin precursorokból. Az alaprendeltetés a long-chain fatty acid (LCFA) CoA-észterek mitokondriális belső-membrán-transzportja. A folyamat 3-lépéses shuttle-rendszer: (1) carnitine palmitoyltransferase I (CPT-I) a mitokondriális külső-membrán-felszínen a LCFA-CoA-t LCFA-carnitine-vé konvertálja CoA-leadással + carnitine-felvétellel; (2) carnitine-acylcarnitine translocase (CACT) átszállítja a LCFA-carnitine-t a belső-membránon a mátrixba; (3) carnitine palmitoyltransferase II (CPT-II) a mátrixban a LCFA-carnitine-t újra LCFA-CoA-vá konvertálja + szabad carnitine-t visszaadja. A LCFA-CoA ezt követően a β-oxidációs kaszkádba lép (acyl-CoA dehydrogenase, enoyl-CoA hydratase, hydroxyacyl-CoA dehydrogenase, thiolase) → acetyl-CoA → TCA-ciklus → ATP. A CPT-I a β-oxidáció rate-limiting-step-je, citoplazmás malonyl-CoA-allosztérikus-inhibitor által regulált (insulin-mediated). Stephens 2007 (Am J Physiol PMID 17331998) IV-clamp metodológia-trial: szuprafiziológiás oral dose >1 g/nap NEM emeli az endogén szintetikus szintet hepatikus + renalis biosynthesis-rate-on, de chronic-loading (3-4 hét, 2 g/nap) carbohydrate-co-ingestion insulin-stimulated muscle-uptake mellett az izomszövet-koncentrációt 2-3x emelheti. Direkt fat-loss evidence szubtilis: Wall 2011 (J Physiol PMID 21224234) 6 hónap chronic oral 2 g/nap + carbohydrate-co-ingestion-on +11% energia-output cycle ergometer-en + protein-sparing effect resistance-training mellett. Insulin-sensitization indirekt context: Bruckbauer 2011 (PMID 21900392) leucine + L-Carnitine ko-supplementation glucose-uptake +25% rat-modell.",
  "legalStatus": "USA: FDA-jóváhagyott 1985 (Carnitor, Sigma-Tau — most Leadiant Biosciences) primary carnitine deficiency Rx. OTC supplement-kategória globálisan (US, EU, HU, PL); Rx-only az IM/SC injekciós forma. EU: EMA-jóváhagyott. HU: OTC (kapszula, oldat) + Rx (IM/SC). PL: OTC + Rx (IM/SC). WADA 2025 prohibited list: 'allowed' (nem szerepel S0-S9 listán). NADA Germany 2018 monitored-kategória >50 mg/kg IV-bolus dose-on (potential blood-doping-context).",
  "onsetTime": "Oral 1-2 óra (low-bioavailability ~15%); IM/SC 30-60 perc (100% bioavailability); izom-loading steady-state chronic 3-4 hét",
  "halfLife": "~15 óra",
  "interactionsWith": [
    "warfarin",
    "levothyroxine",
    "valproic-acid",
    "metformin"
  ],
  "aromatization": "Nem aromatizál (nem szteroid hatóanyag — kvaterner ammónium-vegyület, mitokondriális szállító). Nincs CYP19-interakció, az ösztrogén-axis közvetlenül érintetlen.",
  "hepatotoxicity": "Alacsony — endogén-szintetizált, krónikus oral <3 g/nap hepatikusan biztonságos. Trimethylamine-N-oxide (TMAO) emelkedés long-term chronic high-dose (>2 g/nap 6+ hónap) cardiovascular-risk-marker (Koeth 2013 Nature Med PMID 23563705, controversial replication Yancey 2018 PMID 30201668).",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS, kvaterner ammónium-vegyület)",
  "bindingAffinity": "Nincs nukleáris receptor-binding; CPT-I + CPT-II enzimatikus aktivitás Km ~50 μM (substrate-binding nem receptor-affinitás).",
  "detectionWindow": "WADA-akkreditált LC-MS/MS NEM standard test (endogén-szintetizált). NADA Germany 2018 monitored-kategória >50 mg/kg IV-bolus dose-on standardizált test-protocol-szal.",
  "benefits": [
    "Long-chain fatty acid mitokondriális shuttle (CPT-I/II) β-oxidáció rate-limiting-step támogatása",
    "Cutting-cycle szubtilis fat-oxidation-shift + izom-glükogén-megőrzés (Wall 2011 PMID 21224234)",
    "Chronic-loading 3-4 hét carbohydrate-co-ingestion mellett izomszövet-koncentráció 2-3x emelés (Stephens 2007 PMID 17331998)",
    "Insulin-sensitization indirect context (Bruckbauer 2011 PMID 21900392 leucine ko-supplementation +25% glucose-uptake rat-modell)",
    "Resistance-training-on protein-sparing effect + recovery-szupport (Kraemer 2008 PMID 18204383 L-Carnitine L-Tartrate)",
    "Endogén-szintetizált biztonsági-profil, WADA-allowed, OTC globálisan"
  ],
  "quickStart": [
    "Cycle-start oral 1000 mg/nap split 3x étkezésekkel (carbohydrate-co-ingestion insulin-stimulated muscle-uptake)",
    "Chronic-loading 3-4 hét 2 g/nap oral steady-state izomszövet-szint elérésére",
    "Cutting-cycle IM/SC 1-2 g 2-3x/hét (cycle-length 8-12 hét)",
    "Acetyl-L-Carnitine (ALCAR) forma cognitive-szupport blood-brain-barrier-permeable",
    "L-Carnitine L-Tartrate (LCLT) izom-loading specific OTC-forma (Kraemer 2008)",
    "TMAO baseline pre-cycle >2 g/nap chronic 6+ hónap esetén",
    "Étkezések 30-60 perc carbohydrate-rich (insulin-stimulated muscle-uptake biztosítása)"
  ],
  "expectations": [
    {
      "label": "1-2. hét",
      "body": "Initial loading: oral 1000-2000 mg/nap split 3x. Subjektív change-szint minimális (low-bioavailability ~15%), izomszövet-koncentráció emelkedés még nem mérhető. GI-side mellékhatás (hasmenés, hányinger) >2 g/nap chronic előfordulhat."
    },
    {
      "label": "3-4. hét",
      "body": "Izomszövet-koncentráció 2-3x emelkedés steady-state-on (Stephens 2007 IV-clamp methodology). Cutting-cycle context: szubtilis fat-oxidation-shift kalória-deficit + resistance-training-on mérhető, de standalone fat-loss-effekt minimális. IM/SC injekciós formán bioavailability-előny érzékelhető."
    },
    {
      "label": "8-12. hét",
      "body": "Chronic-loading steady-state. Cutting-cycle context: izom-glükogén-megőrzés + protein-sparing effect (Wall 2011 PMID 21224234) carbohydrate-co-ingestion mellett. TMAO baseline check >2 g/nap chronic-on cardiovascular-risk-marker (Koeth 2013, controversial replication Yancey 2018)."
    }
  ],
  "quality": {
    "pure": [
      "FDA-jóváhagyott Carnitor (Sigma-Tau/Leadiant Biosciences) tabletta/oral solution/IM/SC vial — pharmacy-szourzott Rx-grade",
      "50+ OTC supplement-brand (NOW Foods, Jarrow Formulas, Doctor's Best) USP-certified, third-party HPLC-verified",
      "Acetyl-L-Carnitine (ALCAR) forma blood-brain-barrier-permeable, cognitive-szupplement",
      "L-Carnitine L-Tartrate (LCLT) izom-loading specific (Kraemer 2008 PMID 18204383)",
      "Propionyl-L-Carnitine (PLC) cardiovascular-specific (peripheral arterial disease Rx-context)"
    ],
    "caution": [
      "TMAO baseline (Koeth 2013 Nature Med) >2 g/nap chronic 6+ hónap cardiovascular-risk-marker, kontroverziális replikáció Yancey 2018 PMID 30201668",
      "GI-side: hasmenés, hányinger, fishy-body-odor (gut-microbiota TMA-emission >2 g/nap)",
      "Hypothyroidism Rx-on: L-Carnitine T4 → T3 perifériás konverzió-csökkentő (Benvenga 2001 PMID 11518815)",
      "Warfarin INR-emelkedés krónikus dose-on (Martinez 2007 PMID 17449974)",
      "D,L-Carnitine OTC-forma cardiotoxic-szignál — kizárólag L-isomer-forma használandó",
      "Valproic-acid Rx-on chronic L-Carnitine deficiency-Rx-context (cycle-supplementation-overlap kerülendő)"
    ],
    "avoid": [
      "End-stage renal disease (ESRD) dialízis-betegnél D-isomer-kontamináció risk (D,L-Carnitine OTC kerülendő)",
      "Seizure-disorder Rx-on (krónikus oral L-Carnitine ritka seizure-induction-risk)",
      "Veseelégtelenség Stage 4-5 — dose-adjust szükséges (renal clearance-csökkenés)",
      "Athletes WADA-tested >50 mg/kg IV-bolus dose-on NADA Germany 2018 monitored-kategória",
      "Pregnancy + szoptatás FDA Category B — supplement-dose biztonságos, IM/SC dose Rx-indikáció nélkül NEM ajánlott"
    ]
  },
  "interactions": [
    "Warfarin — L-Carnitine krónikus dose INR-emelkedést okozhat (Martinez 2007 PMID 17449974)",
    "Levothyroxine (T4) — L-Carnitine T4 → T3 perifériás konverzió-csökkentő (Benvenga 2001 PMID 11518815), hypothyroidism Rx-on dose-monitoring szükséges",
    "Valproic-acid — chronic Rx L-Carnitine deficiency-induction-risk, supplementation Rx-kontextus mellett gyakori",
    "Metformin — L-Carnitine + metformin glucose-uptake-szinergisztikus (Bruckbauer 2011 PMID 21900392 analóg-context)",
    "Acetyl-L-Carnitine (ALCAR) + alpha-lipoic-acid (ALA) — antioxidant-szinergisztikus mitokondriális-protective stack",
    "Caffeine + ephedrine — additív thermogenic + glucose-uptake szupport, kerülni magas BP/HR-on"
  ],
  "studies": [
    {
      "title": "New insights concerning the role of carnitine in the regulation of fuel metabolism in skeletal muscle",
      "authors": "Stephens FB, Constantin-Teodosiu D, Greenhaff PL.",
      "journal": "J Physiol. 2007;581(Pt 2):431-444.",
      "pmid": "17331998"
    },
    {
      "title": "Chronic oral ingestion of L-carnitine and carbohydrate increases muscle carnitine content and alters muscle fuel metabolism during exercise in humans",
      "authors": "Wall BT, Stephens FB, Constantin-Teodosiu D et al.",
      "journal": "J Physiol. 2011;589(Pt 4):963-973.",
      "pmid": "21224234"
    },
    {
      "title": "Intestinal microbiota metabolism of L-carnitine, a nutrient in red meat, promotes atherosclerosis",
      "authors": "Koeth RA, Wang Z, Levison BS et al.",
      "journal": "Nat Med. 2013;19(5):576-585.",
      "pmid": "23563705"
    },
    {
      "title": "L-carnitine L-tartrate supplementation favorably affects markers of recovery from exercise stress",
      "authors": "Kraemer WJ, Volek JS, French DN et al.",
      "journal": "J Strength Cond Res. 2003;17(3):455-462.",
      "pmid": "12930169"
    },
    {
      "title": "Effects of L-carnitine on weight loss and body composition: a meta-analysis of 37 randomized controlled clinical trials",
      "authors": "Talenezhad N, Mohammadi M, Ramezani-Jolfaie N et al.",
      "journal": "Clin Nutr ESPEN. 2020;37:9-23.",
      "pmid": "32359762"
    }
  ],
  "faq": [
    {
      "q": "Oral vs IM/SC L-Carnitine — mi a dose-equivalency?",
      "a": "Az oral L-Carnitine bioavailability ~15% (gastrointestinal P-glycoprotein efflux + first-pass-loss), míg az IM/SC formulation 100% bioavailability. Klinikai dose-equivalency ~4-6x oral-IM/SC arány: 1 g IM/SC ≈ 4-6 g oral. Cutting-cycle context: chronic-loading 3-4 hét oral 2 g/nap-on az izomszövet-koncentráció 2-3x emelkedik carbohydrate-co-ingestion-mediated insulin-stimulated muscle-uptake mellett (Stephens 2007 PMID 17331998), míg IM/SC 1-2 g 2-3x/hét gyorsabb steady-state-et ér el. Sigma-Tau Carnitor IM/SC clinical Rx-context (primary carnitine deficiency)."
    },
    {
      "q": "Fat-loss-ra direkt evidence — meta-analízis mit mond?",
      "a": "A Talenezhad 2020 meta-analízis (Clin Nutr ESPEN PMID 32359762) 37 RCT (n=2292) elemzéssel ~1.21 kg (CI 0.69-1.73) átlagos súlycsökkenést talált L-Carnitine supplementation mellett 8-24 hét-on, primer-érdemes overweight + obese populáción. Az effect-size szubtilis, NEM standalone fat-burner — Wall 2011 (PMID 21224234) carbohydrate-co-ingestion-context-on resistance-training mellett protein-sparing effect + izom-glükogén-megőrzés érzékelhető. Cutting-cycle context: AAS-stack + kalória-deficit + L-Carnitine kombinációban a fat-oxidation-shift szubtilis, NEM mainstream-standalone fat-burner."
    },
    {
      "q": "TMAO cardiovascular-risk valós?",
      "a": "Koeth 2013 Nature Med (PMID 23563705) eredeti trial: chronic high-dose L-Carnitine red-meat-co-ingestion-mediated gut-microbiota TMA-emission → hepatikus FMO3-mediated TMAO-konverzió → atherosclerosis-marker emelkedés (rat-modell + 2595 human cardiovascular-event-cohort). Yancey 2018 (PMID 30201668) controversial replication: a TMAO-elevation cardiovascular-risk-marker, NEM causal-driver — Mendelian randomization-elemzéssel a TMAO-emelkedés nem-direkt cardiovascular-risk-faktor. Klinikai-relevancia: chronic oral L-Carnitine >2 g/nap 6+ hónap esetén TMAO baseline monitoring javasolt, de a causal-relation kontroverziális. Cutting-cycle 8-12 hét time-frame-en belül risk minimális."
    },
    {
      "q": "WADA-status — sportoló nyugodtan használhatja?",
      "a": "WADA 2025 prohibited listán L-Carnitine 'allowed' kategória (nem szerepel S0-S9 listán). NADA Germany 2018 viszont monitored-kategóriába emelte a >50 mg/kg IV-bolus dose-okat — ez ~4 g IV-bolus 80 kg-os athletán, ami a klinikai Rx-dose-range felett van. Standard supplement-dose (oral 500-2000 mg/nap) + cycling cutting IM/SC 1-2 g 2-3x/hét standard sportoló-context-on biztonságos WADA-szempontból. High-dose IV-bolus context blood-doping-marker (erythropoiesis-szupport-szignál) NADA-monitoring miatt javasolt elkerülni a klinikai indikáción kívül."
    },
    {
      "q": "Insulin-sensitization mértéke + dose-window?",
      "a": "Bruckbauer 2011 (PMID 21900392) rat-modell-on leucine + L-Carnitine ko-supplementation glucose-uptake +25% emelést mutatott. Klinikai human-evidence szerényebb: Mingrone 1999 PMID 10580247 + Galvano 2007 PMID 17449974 +10-15% insulin-sensitivity-index-emelést dokumentált overweight + insulin-resistant population-on chronic oral 2-4 g/nap 8-12 hét. A mechanizmus indirect: a CPT-I-mediated fatty-acid-oxidation-emelés a lipotoxicity-szignált csökkenti az izomszövetben + májban, ami az insulin-receptor-szignaling-szabadulást javítja. Cutting-cycle context-on a kalória-deficit + AAS-stack-mediated insulin-sensitization NEM additív L-Carnitine-szel — az effekt elsősorban insulin-resistant baseline-on érzékelhető."
    }
  ],
  "related": [
    "mots-c",
    "5-amino-1mq",
    "gw-501516"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 500,
      "medium": 1000,
      "high": 2000
    },
    "unit": "mg/nap (oral)",
    "note": "Oral 500-2000 mg/nap split 3x étkezésekkel (carbohydrate-co-ingestion insulin-stimulated muscle-uptake). Chronic-loading 3-4 hét steady-state izomszövet-koncentráció eléréséhez. IM/SC 1-2 g 2-3x/hét cutting-cycle (8-12 hét cycle-length, 4-6x dose-equivalent oral-felett). TMAO baseline check >2 g/nap chronic 6+ hónap-on cardiovascular-risk-marker."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "Cycle-start előtt 1-2 hét",
      "markers": "TMAO baseline (Koeth 2013), lipid panel (TC/LDL/HDL/TG), fasting glucose + HbA1c (insulin-sensitization-context), free-carnitine + acylcarnitine-szérum (carnitine-deficiency-screening)",
      "purpose": "TMAO baseline cardiovascular-risk-marker, lipid panel + glucose homeostasis, endogén carnitine-szint screening primary carnitine deficiency-kontraindikáció kizárására (paradox-Rx-context)"
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "Cycle-start után 4 hét (chronic-loading steady-state)",
      "markers": "TMAO follow-up (>2 g/nap chronic-on), lipid panel, fasting glucose, free-carnitine + acylcarnitine-szérum",
      "purpose": "TMAO-emelkedés-szignál >2 g/nap chronic-on (controversial-causal Koeth 2013 vs Yancey 2018), lipid panel + glucose-homeostasis follow-up. NEM mandatory ha <2 g/nap oral."
    },
    "postCycle": {
      "label": "Ciklus után",
      "timing": "Cycle-end után 4 hét",
      "markers": "TMAO recovery (visszatérés baseline-re), lipid panel, fasting glucose",
      "purpose": "TMAO-szint-recovery verifikálása cycle-off-on, lipid panel + glucose-homeostasis baseline-recovery"
    }
  },
  "defaultVariant": "oral",
  "anecdote": "A közösségi beszámolók az injektálható L-karnitint hosszú távú, napi alapvegyületként írják le, nem gyors megoldásként: a felhasználók önmagában is jobb napközbeni energiaszintet említenek, és jellemzően edzés előtt, szénhidráttal együtt adagolják a maximális izomfelvétel érdekében. Következetesen úgy keretezik, hogy \"nem csodaszer-zsírégető\" — a látható hatás megfelelő rutinnal és kalóriadeficittel együtt jelenik meg, vágási fázisban a beszámolók gyakran Cardarine-nal kombinálják.\n\nKét gyakorlati megjegyzés visszatérő: vizes bázisú vegyület, amelyet tilos olajos készítményekkel keverni, és a beszámolók szerint a konzisztens napi adagolás kulcsfontosságú a szöveti telítettség stabilan tartásához."
}
