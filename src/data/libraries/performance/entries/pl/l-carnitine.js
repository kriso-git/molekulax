// L-Carnitine — czwartorzędowy związek amoniowy, syntetyzowany endogennie
// z prekursorów lizyny + metioniny, mitochondrialny shuttle dla długołańcuchowych
// kwasów tłuszczowych. Izolacja Gulewitsch + Krimberg 1905, Sigma-Tau 1985 FDA
// Rx na pierwotny niedobór karnityny, bodybuilding off-label od lat 90.
// Źródła: Stephens 2007 PMID 17331998, Wall 2011 PMID 21224234,
// Koeth 2013 Nature Med PMID 23563705, Kraemer 2008 PMID 18204383,
// Vukovich 1994 PMID 7960016.

export default {
  "id": "l-carnitine",
  "sideEffects": [
    { "hu": "Gastrointestinalis panaszok: hasmenés, hányinger, hasi görcs, gyomorégés, főleg >2 g/nap orális adagon (a leggyakoribb, dózisfüggő mellékhatás).", "en": "Gastrointestinal upset: diarrhea, nausea, abdominal cramps, heartburn, especially at oral doses >2 g/day (the most common, dose-dependent side effect).", "pl": "Dolegliwości żołądkowo-jelitowe: biegunka, nudności, skurcze brzucha, zgaga, zwłaszcza przy dawkach doustnych >2 g/dzień (najczęstszy, zależny od dawki efekt uboczny)." },
    { "hu": "Halszerű testszag (trimetil-amin-uria szerű): a bélflóra a karnitinből trimetil-amint termel, ami a verejtéken, leheleten és vizeleten át halszerű szagot okoz, jellemzően >2 g/nap dózison.", "en": "Fishy body odor (trimethylaminuria-like): gut bacteria produce trimethylamine from carnitine, causing a fishy smell in sweat, breath and urine, typically at >2 g/day.", "pl": "Rybi zapach ciała (przypominający trimetyloaminurię): bakterie jelitowe wytwarzają trimetyloaminę z karnityny, powodując rybi zapach potu, oddechu i moczu, zwykle przy >2 g/dzień." },
    { "hu": "TMAO (trimetil-amin-N-oxid) szérum-emelkedés krónikus, magas dózisú (>2 g/nap, 6+ hónap) szedésnél; ateroszklerózis-rizikómarker, bár ok-okozati szerepe vitatott (Koeth 2013 vs Yancey 2018).", "en": "Elevated serum TMAO (trimethylamine-N-oxide) with chronic high-dose use (>2 g/day, 6+ months); an atherosclerosis risk-marker, though its causal role is debated (Koeth 2013 vs Yancey 2018).", "pl": "Podwyższony TMAO (N-tlenek trimetyloaminy) w surowicy przy przewlekłym stosowaniu wysokich dawek (>2 g/dzień, 6+ miesięcy); marker ryzyka miażdżycy, choć jego rola przyczynowa jest dyskusyjna (Koeth 2013 vs Yancey 2018)." },
    { "hu": "Injekciós forma (IM/SC): fájdalmas beadás (PIP), a kvaterner-ammónium-vehikulum lokális irritációja, ritkán steril tályog vagy átmeneti lokális vörösség, melegségérzet.", "en": "Injectable form (IM/SC): painful injection (PIP), local irritation from the quaternary-ammonium vehicle, rarely sterile abscess or transient local redness and warmth.", "pl": "Forma iniekcyjna (IM/SC): bolesna iniekcja (PIP), miejscowe podrażnienie od nośnika czwartorzędowo-amoniowego, rzadko jałowy ropień lub przejściowe miejscowe zaczerwienienie i uczucie ciepła." },
    { "hu": "Ritka allergiás/hisztamin-felszabadulási reakció parenterális adagnál (bőrpír, viszketés, hipotenzió); IM/SC első dózisnál 0,5 g teszt-dózis ajánlott.", "en": "Rare allergic/histamine-release reaction with parenteral dosing (flushing, itching, hypotension); a 0.5 g test dose is advised for the first IM/SC injection.", "pl": "Rzadka reakcja alergiczna/uwolnienie histaminy przy podaniu pozajelitowym (zaczerwienienie, świąd, hipotensja); przy pierwszej iniekcji IM/SC zalecana dawka testowa 0,5 g." },
    { "hu": "Pajzsmirigy-interakció: a karnitin gátolja a perifériás T4 to T3 konverziót, ami hypothyreosis kezelésén lévőknél a tünetek romlását vagy levotiroxin-dózis-igazolást tehet szükségessé (Benvenga 2001).", "en": "Thyroid interaction: carnitine inhibits peripheral T4-to-T3 conversion, which in patients treated for hypothyroidism may worsen symptoms or require levothyroxine dose adjustment (Benvenga 2001).", "pl": "Interakcja z tarczycą: karnityna hamuje obwodową konwersję T4 do T3, co u pacjentów leczonych z powodu niedoczynności tarczycy może nasilać objawy lub wymagać korekty dawki lewotyroksyny (Benvenga 2001)." },
    { "hu": "Warfarin/antikoaguláns-interakció: krónikus karnitin-adag emelheti az INR-t, fokozott vérzésveszély, INR-monitorozás szükséges (Martinez 2007).", "en": "Warfarin/anticoagulant interaction: chronic carnitine dosing can raise INR, increasing bleeding risk; INR monitoring is required (Martinez 2007).", "pl": "Interakcja z warfaryną/antykoagulantami: przewlekłe dawkowanie karnityny może podwyższać INR, zwiększając ryzyko krwawienia; konieczne monitorowanie INR (Martinez 2007)." },
    { "hu": "Ritkán nyugtalanság, enyhe stimuláló érzés, alvászavar magasabb dózison; epileptogén küszöböt csökkentő hatás miatt görcsroham-prediszponáltaknál fokozott rohamgyakoriság jelenthető.", "en": "Rarely restlessness, mild stimulant-like feeling and sleep disturbance at higher doses; through lowering of the seizure threshold, increased seizure frequency has been reported in predisposed individuals.", "pl": "Rzadko niepokój, łagodne uczucie stymulacji i zaburzenia snu przy wyższych dawkach; poprzez obniżenie progu drgawkowego zgłaszano zwiększoną częstość napadów u osób predysponowanych." }
  ],
  "contraindications": [
    { "hu": "Görcsroham-betegség (epilepszia) vagy görcsrohamra hajlamosító kórállapot: a karnitin ritkán csökkentheti a görcsküszöböt és növelheti a rohamok gyakoriságát, fokozott óvatosság szükséges.", "en": "Seizure disorder (epilepsy) or a condition predisposing to seizures: carnitine may rarely lower the seizure threshold and increase seizure frequency, so caution is required.", "pl": "Padaczka lub stan predysponujący do drgawek: karnityna może rzadko obniżać próg drgawkowy i zwiększać częstość napadów, wymagana zwiększona ostrożność." },
    { "hu": "Súlyos veseelégtelenség / dialízis (ESRD): csökkent renalis clearance miatt dózis-igazolás kell, és D,L-karnitin (racém OTC) szigorúan kerülendő a D-izomer cardiotoxikus/myastheniás kockázata miatt.", "en": "Severe renal failure / dialysis (ESRD): dose adjustment is needed due to reduced renal clearance, and D,L-carnitine (racemic OTC) must be strictly avoided because of the D-isomer's cardiotoxic/myasthenic risk.", "pl": "Ciężka niewydolność nerek / dializy (ESRD): konieczna korekta dawki z powodu obniżonego klirensu nerkowego, a D,L-karnityna (racemiczna OTC) musi być bezwzględnie unikana z powodu kardiotoksycznego/miastenicznego ryzyka D-izomeru." },
    { "hu": "Warfarin vagy más kumarin-antikoaguláns egyidejű szedése: az INR-emelkedés és vérzésveszély miatt csak szoros INR-monitorozással, orvosi felügyelet mellett.", "en": "Concurrent warfarin or other coumarin anticoagulant: due to the risk of elevated INR and bleeding, only with close INR monitoring under medical supervision.", "pl": "Jednoczesne stosowanie warfaryny lub innego antykoagulantu kumarynowego: ze względu na ryzyko podwyższonego INR i krwawień, tylko przy ścisłym monitorowaniu INR pod nadzorem lekarza." },
    { "hu": "Kezelt hypothyreosis (levotiroxinon): a karnitin gyengíti a pajzsmirigyhormon perifériás hatását, ami a kezelés hatékonyságát ronthatja, dózis-monitorozás szükséges.", "en": "Treated hypothyroidism (on levothyroxine): carnitine weakens the peripheral action of thyroid hormone, which can reduce treatment efficacy; dose monitoring is required.", "pl": "Leczona niedoczynność tarczycy (na lewotyroksynie): karnityna osłabia obwodowe działanie hormonu tarczycy, co może zmniejszać skuteczność leczenia; konieczne monitorowanie dawki." },
    { "hu": "Ismert L-karnitin (vagy a készítmény bármely összetevője) iránti túlérzékenység; parenterális forma esetén korábbi hisztamin-/allergiás reakció a beadásra.", "en": "Known hypersensitivity to L-carnitine (or any component of the formulation); for the parenteral form, a prior histamine/allergic reaction to injection.", "pl": "Znana nadwrażliwość na L-karnitynę (lub jakikolwiek składnik preparatu); w przypadku formy pozajelitowej wcześniejsza reakcja histaminowa/alergiczna na iniekcję." },
    { "hu": "Terhesség és szoptatás Rx-indikáció nélkül: a táplálékkiegészítő-dózis FDA kategória B, de a magas dózisú IM/SC parenterális használat orvosi javallat nélkül nem ajánlott.", "en": "Pregnancy and breastfeeding without an Rx indication: supplement-dose is FDA category B, but high-dose IM/SC parenteral use is not recommended without medical indication.", "pl": "Ciąża i karmienie piersią bez wskazania Rx: dawka suplementacyjna to kategoria B FDA, ale wysokodawkowe pozajelitowe stosowanie IM/SC nie jest zalecane bez wskazania medycznego." },
    { "hu": "Valproát-terápia melletti egyidejű karnitin-szupplementáció átfedése: a valproát karnitin-deficienciát okozhat és gyakran terápiásan szuplementálják, ezért ciklus-szintű kiegészítés csak kezelőorvossal egyeztetve.", "en": "Overlap with carnitine supplementation during valproate therapy: valproate can cause carnitine deficiency and is often therapeutically supplemented, so cycle-level supplementation only in consultation with the treating physician.", "pl": "Nakładanie się suplementacji karnityną podczas terapii walproinianem: walproinian może powodować niedobór karnityny i jest często suplementowany terapeutycznie, więc suplementacja na poziomie cyklu tylko w konsultacji z lekarzem prowadzącym." }
  ],
  "name": "L-Carnitine",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Czwartorzędowy związek amoniowy, syntetyzowany endogennie z prekursorów lizyny + metioniny, mitochondrialny shuttle dla długołańcuchowych kwasów tłuszczowych (carnitine palmitoyltransferase I/II). Izolacja Gulewitsch + Krimberg 1905, Sigma-Tau 1985 FDA Rx na pierwotny niedobór karnityny; bodybuilding off-label od lat 90., mainstream OTC fat-burner od lat 2000. WADA: dozwolona, NADA Niemcy 2018 monitored powyżej 50 mg/kg IV-bolus.",
  "description": "L-Karnityna to czwartorzędowy związek amoniowy, który organizm ludzki syntetyzuje endogennie w ilości ~25 mg/dobę poprzez kaskadę enzymatyczną w wątrobie i nerkach z prekursorów lizyny i metioniny. Pierwotnie wyizolowana przez rosyjskich biochemików Gulewitsch i Krimberg w 1905 z tkanki mięśniowej (stąd nazwa 'carnitine' od 'caro/carnis' = mięso). Tylko izomer L jest biologicznie aktywny; izomer D jest enzymatycznie nieaktywny + sygnał kardiotoksyczny. Zatwierdzenie FDA w 1985 przez Sigma-Tau (włoska firma farma) dotyczyło wskazania Rx na pierwotny niedobór karnityny; off-label użycie w bodybuildingu zaczęło się w latach 90., a od lat 2000 mainstreamowa kategoria OTC 'fat-burner supplement'. Mechanizm opiera się na CoA-mediowanym mitochondrialnym transporcie długołańcuchowych kwasów tłuszczowych (LCFA) przez system shuttle carnitine palmitoyltransferase I/II (CPT-I/II) — jest to krok ograniczający tempo β-oksydacji. Stephens 2007 (Am J Physiol PMID 17331998), klasyczne badanie metodologii IV-clamp, wykazało, że supraphysjologiczne dawki doustne >1 g/dobę NIE podnoszą endogennego poziomu syntezy, ale przy ładowaniu przewlekłym (3-4 tygodnie, 2 g/dobę) z węglowodanami stężenie w tkance mięśniowej może wzrosnąć 2-3x dzięki insulin-stimulated muscle uptake. Doustna biodostępność jest niska (~15%), forma iniekcyjna IM/SC ma 100% biodostępność i jest 4-6x ekwiwalentna dawkowo wobec doustnej. WADA: 'dozwolona' na liście prohibited 2025, ale NADA Niemcy 2018 podniosły dawkowanie >50 mg/kg IV-bolus do kategorii monitorowanej (potencjalny kontekst marker doping krwi).",
  "keyInfo": [
    {
      "label": "Mechanizm działania",
      "value": "Mitochondrialny shuttle dla długołańcuchowych kwasów tłuszczowych mediowany CoA (CPT-I/II), krok ograniczający tempo β-oksydacji"
    },
    {
      "label": "Dawkowanie",
      "value": "Doustnie 500-2000 mg/dobę w 3 dawkach; IM/SC 1-2 g 2-3x/tydzień w cuttingu"
    },
    {
      "label": "Okres półtrwania",
      "value": "~15 godzin (substancja macierzysta), steady-state ładowania mięśni 3-4 tygodnie przewlekle"
    },
    {
      "label": "Początek działania",
      "value": "Doustnie 1-2 godziny (niska biodostępność ~15%); IM/SC 30-60 minut (100% biodostępność)"
    },
    {
      "label": "Status prawny",
      "value": "FDA + EMA Rx (pierwotny niedobór karnityny), kategoria OTC suplementu globalnie. WADA: dozwolona, NADA Niemcy 2018 monitored powyżej 50 mg/kg IV-bolus."
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
  "mechanism": "L-Karnityna to czwartorzędowy związek amoniowy, który organizm ludzki syntetyzuje endogennie w ilości ~25 mg/dobę przez kaskadę enzymatyczną w wątrobie i nerkach z prekursorów lizyny + metioniny. Podstawową rolą jest mitochondrialny transport estrów CoA długołańcuchowych kwasów tłuszczowych (LCFA). Proces jest 3-etapowym shuttle: (1) carnitine palmitoyltransferase I (CPT-I) na powierzchni zewnętrznej błony mitochondrialnej konwertuje LCFA-CoA do LCFA-carnitine z uwolnieniem CoA + włączeniem karnityny; (2) carnitine-acylcarnitine translocase (CACT) transportuje LCFA-carnitine przez błonę wewnętrzną do macierzy; (3) carnitine palmitoyltransferase II (CPT-II) w macierzy konwertuje LCFA-carnitine z powrotem do LCFA-CoA + uwalnia wolną karnitynę. LCFA-CoA wchodzi następnie do kaskady β-oksydacji (acyl-CoA dehydrogenaza, enoyl-CoA hydrataza, hydroxyacyl-CoA dehydrogenaza, tiolaza) → acetyl-CoA → cykl TCA → ATP. CPT-I to krok ograniczający tempo β-oksydacji, regulowany cytoplazmatycznym malonyl-CoA jako inhibitorem allosterycznym (mediowany insuliną). Stephens 2007 (Am J Physiol PMID 17331998) IV-clamp methodology: dawki supraphysjologiczne doustne >1 g/dobę NIE podnoszą endogennego tempa syntezy w wątrobie + nerkach, ale ładowanie przewlekłe (3-4 tygodnie, 2 g/dobę) ze współspożyciem węglowodanów mediowanym insulin-stimulated muscle uptake może podnieść stężenie w tkance mięśniowej 2-3x. Bezpośrednie dowody utraty tłuszczu subtelne: Wall 2011 (J Physiol PMID 21224234) 6 miesięcy przewlekłe doustnie 2 g/dobę + współspożycie węglowodanów dało +11% energy output na cykloergometrze + efekt protein-sparing z treningiem oporowym. Pośredni kontekst insulin-sensitization: Bruckbauer 2011 (PMID 21900392) ko-suplementacja leucyna + L-Karnityna +25% glucose uptake w modelu szczura.",
  "legalStatus": "USA: zatwierdzona przez FDA w 1985 (Carnitor, Sigma-Tau — obecnie Leadiant Biosciences) Rx na pierwotny niedobór karnityny. Kategoria OTC suplementu globalnie (US, UE, HU, PL); forma iniekcji IM/SC tylko Rx. UE: zatwierdzona przez EMA. HU: OTC (kapsułka, roztwór) + Rx (IM/SC). PL: OTC + Rx (IM/SC). Lista WADA prohibited 2025: 'dozwolona' (nie ma na liście S0-S9). Kategoria monitorowana NADA Niemcy 2018 powyżej 50 mg/kg IV-bolus (potencjalny kontekst doping krwi).",
  "onsetTime": "Doustnie 1-2 godziny (niska biodostępność ~15%); IM/SC 30-60 minut (100% biodostępność); steady-state ładowania mięśni przy przewlekłym 3-4 tygodnie",
  "halfLife": "~15 godzin",
  "interactionsWith": [
    "warfarin",
    "levothyroxine",
    "valproic-acid",
    "metformin"
  ],
  "aromatization": "Nie aromatyzuje (nie jest sterydem — czwartorzędowy związek amoniowy, transporter mitochondrialny). Brak interakcji z CYP19, oś estrogenowa bezpośrednio nienaruszona.",
  "hepatotoxicity": "Niska — syntetyzowana endogennie; przewlekle doustnie <3 g/dobę bezpieczna wątrobowo. Wzrost trimethylamine-N-oxide (TMAO) przy długoterminowej przewlekłej wysokiej dawce (>2 g/dobę przez 6+ miesięcy) to marker ryzyka sercowo-naczyniowego (Koeth 2013 Nature Med PMID 23563705, kontrowersyjna replikacja Yancey 2018 PMID 30201668).",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nie AAS, czwartorzędowy związek amoniowy)",
  "bindingAffinity": "Brak wiązania z receptorem jądrowym; aktywność enzymatyczna CPT-I + CPT-II Km ~50 μM (wiązanie substratu, nie powinowactwo do receptora).",
  "detectionWindow": "Akredytowane przez WADA LC-MS/MS NIE jest testem standardowym (syntetyzowana endogennie). Kategoria monitorowana NADA Niemcy 2018 powyżej 50 mg/kg IV-bolus ze standaryzowanym protokołem testowym.",
  "benefits": [
    "Wspomaga mitochondrialny shuttle długołańcuchowych kwasów tłuszczowych (CPT-I/II) jako krok ograniczający tempo β-oksydacji",
    "Subtelne przesunięcie utleniania tłuszczu + ochrona glikogenu mięśniowego w cuttingu (Wall 2011 PMID 21224234)",
    "Ładowanie przewlekłe 3-4 tygodnie ze współspożyciem węglowodanów podnosi stężenie tkankowe 2-3x (Stephens 2007 PMID 17331998)",
    "Pośredni kontekst insulin-sensitization (Bruckbauer 2011 PMID 21900392 ko-suplementacja leucyna +25% glucose uptake model szczura)",
    "Efekt protein-sparing + wsparcie regeneracji przy treningu oporowym (Kraemer 2008 PMID 18204383 L-Carnitine L-Tartrate)",
    "Profil bezpieczeństwa endogennie-syntetyzowany, dozwolona WADA, OTC globalnie"
  ],
  "quickStart": [
    "Start cyklu doustnie 1000 mg/dobę w 3 dawkach z posiłkami (współspożycie węglowodanów dla insulin-stimulated muscle uptake)",
    "Ładowanie przewlekłe 3-4 tygodnie 2 g/dobę doustnie dla osiągnięcia steady-state w tkance mięśniowej",
    "Cutting IM/SC 1-2 g 2-3x/tydzień (długość cyklu 8-12 tygodni)",
    "Forma Acetyl-L-Carnitine (ALCAR) dla wsparcia kognitywnego przepuszczalnego dla bariery krew-mózg",
    "L-Carnitine L-Tartrate (LCLT) jest formą OTC specyficzną dla ładowania mięśni (Kraemer 2008)",
    "Baseline TMAO przed cyklem przy przewlekłym >2 g/dobę przez 6+ miesięcy",
    "Timing posiłków 30-60 minut bogato węglowodanowy (zapewnia insulin-stimulated muscle uptake)"
  ],
  "expectations": [
    {
      "label": "1-2. tydzień",
      "body": "Ładowanie początkowe: doustnie 1000-2000 mg/dobę w 3 dawkach. Subiektywna zmiana minimalna (niska biodostępność ~15%), wzrost stężenia tkankowego jeszcze niemierzalny. Działania niepożądane GI (biegunka, nudności) mogą wystąpić powyżej 2 g/dobę przewlekle."
    },
    {
      "label": "3-4. tydzień",
      "body": "Stężenie tkankowe rośnie 2-3x w steady-state (Stephens 2007 IV-clamp methodology). Kontekst cuttingu: subtelne przesunięcie utleniania tłuszczu mierzalne w deficycie kalorycznym + treningu oporowym, ale standalone efekt utraty tłuszczu minimalny. Na iniekcji IM/SC przewaga biodostępności jest odczuwalna."
    },
    {
      "label": "8-12. tydzień",
      "body": "Steady-state ładowania przewlekłego. Kontekst cuttingu: ochrona glikogenu mięśniowego + efekt protein-sparing (Wall 2011 PMID 21224234) ze współspożyciem węglowodanów. Kontrola baseline TMAO przy przewlekłym >2 g/dobę jako marker ryzyka sercowo-naczyniowego (Koeth 2013, kontrowersyjna replikacja Yancey 2018)."
    }
  ],
  "quality": {
    "pure": [
      "Carnitor (Sigma-Tau/Leadiant Biosciences) tabletka/roztwór doustny/fiolka IM/SC zatwierdzone przez FDA — Rx-grade ze źródła aptecznego",
      "50+ marek suplementów OTC (NOW Foods, Jarrow Formulas, Doctor's Best) certyfikowane USP, weryfikowane HPLC przez stronę trzecią",
      "Forma Acetyl-L-Carnitine (ALCAR) jest suplementem kognitywnym przepuszczalnym dla bariery krew-mózg",
      "L-Carnitine L-Tartrate (LCLT) jest specyficzną dla ładowania mięśni (Kraemer 2008 PMID 18204383)",
      "Propionyl-L-Carnitine (PLC) jest specyficzna sercowo-naczyniowo (kontekst Rx choroby tętnic obwodowych)"
    ],
    "caution": [
      "Baseline TMAO (Koeth 2013 Nature Med): >2 g/dobę przewlekle przez 6+ miesięcy to marker ryzyka sercowo-naczyniowego, kontrowersyjna replikacja Yancey 2018 PMID 30201668",
      "Działania niepożądane GI: biegunka, nudności, rybi zapach ciała (emisja TMA z mikrobioty jelitowej powyżej 2 g/dobę)",
      "Przy Rx na niedoczynność tarczycy: L-Karnityna obniża obwodową konwersję T4 → T3 (Benvenga 2001 PMID 11518815)",
      "Wzrost INR przy warfarynie przy dawce przewlekłej (Martinez 2007 PMID 17449974)",
      "Forma D,L-Carnitine OTC ma sygnał kardiotoksyczny — używać wyłącznie formy izomeru L",
      "Przy Rx kwasem walproinowym: przewlekły kontekst Rx niedoboru L-Karnityny (unikać nakładania suplementacji cyklicznej)"
    ],
    "avoid": [
      "Pacjenci dializowani z krańcową niewydolnością nerek (ESRD): ryzyko kontaminacji izomerem D (unikać D,L-Carnitine OTC)",
      "Przy Rx na zaburzenia napadowe (przewlekła doustna L-Karnityna niesie rzadkie ryzyko indukcji napadów)",
      "Niewydolność nerek stadium 4-5 — wymagane dostosowanie dawki (obniżony klirens nerkowy)",
      "Sportowcy testowani WADA powyżej 50 mg/kg IV-bolus: kategoria monitorowana NADA Niemcy 2018",
      "Ciąża + karmienie piersią: FDA Kategoria B — dawka suplementu bezpieczna; dawkowanie IM/SC nie zalecane bez indykacji Rx"
    ]
  },
  "interactions": [
    "Warfaryna — przewlekła dawka L-Karnityny może powodować wzrost INR (Martinez 2007 PMID 17449974)",
    "Levothyroxine (T4) — L-Karnityna obniża obwodową konwersję T4 → T3 (Benvenga 2001 PMID 11518815); monitorowanie dawki wymagane przy Rx niedoczynności tarczycy",
    "Kwas walproinowy — przewlekłe Rx może indukować niedobór L-Karnityny; suplementacja częsta w kontekście Rx",
    "Metformina — L-Karnityna + metformina synergistyczne dla glucose-uptake (Bruckbauer 2011 PMID 21900392 kontekst analogiczny)",
    "Acetyl-L-Carnitine (ALCAR) + kwas alfa-liponowy (ALA) — antyoksydacyjnie-synergistyczny stack mitochondrialnie-protective",
    "Kofeina + efedryna — addycyjne wsparcie termogeniczne + glucose-uptake; unikać przy wysokim BP/HR"
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
      "q": "Doustna vs IM/SC L-Karnityna — jaka jest ekwiwalencja dawki?",
      "a": "Biodostępność doustnej L-Karnityny wynosi ~15% (wyciek P-glikoproteinowy w przewodzie pokarmowym + straty pierwszego przejścia), natomiast formulacja IM/SC ma 100% biodostępności. Kliniczna ekwiwalencja dawki to ~4-6x stosunek doustna-IM/SC: 1 g IM/SC ≈ 4-6 g doustnie. Kontekst cuttingu: ładowanie przewlekłe 3-4 tygodnie doustnie 2 g/dobę podnosi stężenie tkankowe 2-3x ze współspożyciem węglowodanów mediowanym insulin-stimulated muscle uptake (Stephens 2007 PMID 17331998), natomiast IM/SC 1-2 g 2-3x/tydzień osiąga steady-state szybciej. Sigma-Tau Carnitor IM/SC w klinicznym kontekście Rx (pierwotny niedobór karnityny)."
    },
    {
      "q": "Bezpośrednie dowody utraty tłuszczu — co mówi meta-analiza?",
      "a": "Meta-analiza Talenezhad 2020 (Clin Nutr ESPEN PMID 32359762) na 37 RCT (n=2292) znalazła średnią utratę masy ~1.21 kg (CI 0.69-1.73) przy suplementacji L-Karnityną przez 8-24 tygodnie, głównie w populacji nadwagi + otyłości. Wielkość efektu jest subtelna, NIE jest standalone fat-burnerem — Wall 2011 (PMID 21224234) w kontekście współspożycia węglowodanów z treningiem oporowym pokazuje odczuwalny efekt protein-sparing + ochronę glikogenu mięśniowego. Kontekst cuttingu: w kombinacji ze stackiem AAS + deficytem kalorycznym + L-Karnityną przesunięcie utleniania tłuszczu jest subtelne, NIE mainstreamowy standalone fat-burner."
    },
    {
      "q": "Czy ryzyko sercowo-naczyniowe TMAO jest realne?",
      "a": "Koeth 2013 Nature Med (PMID 23563705), oryginalne badanie: chroniczna wysoka dawka L-Karnityny ze współspożyciem czerwonego mięsa mediowane emisją TMA przez mikrobiotę jelitową → wątrobowa konwersja TMAO mediowana FMO3 → wzrost markera miażdżycy (model szczura + kohorta 2595 zdarzeń sercowo-naczyniowych u ludzi). Yancey 2018 (PMID 30201668), kontrowersyjna replikacja: wzrost TMAO jest markerem ryzyka sercowo-naczyniowego, ale NIE driverem przyczynowym — analiza randomizacji Mendlowskiej wskazuje, że wzrost TMAO nie jest bezpośrednim czynnikiem ryzyka sercowo-naczyniowego. Relewancja kliniczna: przy przewlekłym doustnym L-Karnitynie >2 g/dobę przez 6+ miesięcy zalecane monitorowanie baseline TMAO, ale relacja przyczynowa jest kontrowersyjna. W oknie 4-6 tygodniowego cyklu cuttingu ryzyko minimalne."
    },
    {
      "q": "Status WADA — czy sportowiec może bezpiecznie używać?",
      "a": "Na liście WADA prohibited 2025 L-Karnityna jest w kategorii 'dozwolona' (nie jest na liście S0-S9). NADA Niemcy 2018 podniosło jednak dawkowanie >50 mg/kg IV-bolus do kategorii monitorowanej — to ~4 g IV bolus dla sportowca 80 kg, znacznie powyżej zakresu klinicznej dawki Rx. Standardowe dawki suplementu (doustnie 500-2000 mg/dobę) + IM/SC w cuttingu 1-2 g 2-3x/tydzień w standardowym kontekście sportowym są bezpieczne pod względem WADA. Kontekst wysokiej dawki IV bolus (marker doping krwi: sygnał wsparcia erytropoezy) najlepiej unikać poza wskazaniami klinicznymi ze względu na monitorowanie NADA."
    },
    {
      "q": "Skala insulin-sensitization + okno dawkowania?",
      "a": "Bruckbauer 2011 (PMID 21900392) pokazał +25% glucose uptake przy ko-suplementacji leucyna + L-Karnityna w modelu szczura. Dowody kliniczne na ludziach są skromniejsze: Mingrone 1999 PMID 10580247 + Galvano 2007 PMID 17449974 udokumentowały +10-15% wzrost indeksu wrażliwości na insulinę w populacji nadwagi + insulinoopornej przy przewlekłym doustnym 2-4 g/dobę przez 8-12 tygodni. Mechanizm jest pośredni: upregulacja utleniania kwasów tłuszczowych mediowana CPT-I obniża sygnał lipotoksyczności w mięśniach szkieletowych + wątrobie, co poprawia uwalnianie sygnalizacji receptora insuliny. W kontekście cuttingu deficyt kaloryczny + insulin-sensitization mediowana stackiem AAS NIE jest addycyjna z L-Karnityną — efekt wykrywalny głównie na baseline insulinoopornym."
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
    "unit": "mg/dobę (doustnie)",
    "note": "Doustnie 500-2000 mg/dobę w 3 dawkach z posiłkami (współspożycie węglowodanów dla insulin-stimulated muscle uptake). Ładowanie przewlekłe 3-4 tygodnie dla osiągnięcia steady-state stężenia tkankowego. IM/SC 1-2 g 2-3x/tydzień w cuttingu (długość cyklu 8-12 tygodni, ekwiwalent dawki 4-6x wobec doustnej). Kontrola baseline TMAO przy przewlekłym >2 g/dobę przez 6+ miesięcy jako marker ryzyka sercowo-naczyniowego."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "1-2 tygodnie przed startem cyklu",
      "markers": "Baseline TMAO (Koeth 2013), panel lipidowy (TC/LDL/HDL/TG), glukoza na czczo + HbA1c (kontekst insulin-sensitization), wolna karnityna + acylkarnityna w surowicy (screening niedoboru karnityny)",
      "purpose": "Baseline TMAO jako marker ryzyka sercowo-naczyniowego, panel lipidowy + homeostaza glukozy, screening endogennego poziomu karnityny dla wykluczenia przeciwwskazania pierwotnego niedoboru karnityny (paradoksalny kontekst Rx)"
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "4 tygodnie po starcie cyklu (steady-state ładowania przewlekłego)",
      "markers": "Follow-up TMAO (przy >2 g/dobę przewlekle), panel lipidowy, glukoza na czczo, wolna karnityna + acylkarnityna w surowicy",
      "purpose": "Sygnał wzrostu TMAO przy >2 g/dobę przewlekle (kontrowersyjnie-przyczynowy Koeth 2013 vs Yancey 2018), follow-up panelu lipidowego + homeostazy glukozy. NIE jest obowiązkowy poniżej 2 g/dobę doustnie."
    },
    "postCycle": {
      "label": "Po cyklu",
      "timing": "4 tygodnie po końcu cyklu",
      "markers": "Regeneracja TMAO (powrót do baseline), panel lipidowy, glukoza na czczo",
      "purpose": "Weryfikacja regeneracji poziomu TMAO po cyklu, regeneracja baseline panelu lipidowego + homeostazy glukozy"
    }
  },
  "defaultVariant": "oral",
  "anecdote": "Relacje społeczności opisują iniekcyjną L-karnitynę jako długoterminowy, codzienny element protokołu, a nie szybkie rozwiązanie: użytkownicy zgłaszają lepszy poziom energii w ciągu dnia już przy samodzielnym stosowaniu, a zazwyczaj podają ją przed treningiem razem z węglowodanami, by zmaksymalizować wychwyt do mięśni. Konsekwentnie podkreśla się, że to \"nie magiczny spalacz tłuszczu\" — widoczny efekt pojawia się w połączeniu z odpowiednią rutyną i deficytem kalorycznym, a podczas redukcji w relacjach często łączy się ją z Cardarine.\n\nDwie uwagi praktyczne powtarzają się w doniesieniach: to związek na bazie wodnej, którego nie wolno mieszać z preparatami olejowymi, a stałe, codzienne dawkowanie uznaje się za klucz do utrzymania stabilnego wysycenia tkanek."
}
