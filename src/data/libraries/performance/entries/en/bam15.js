// BAM15 – Mitochondrial protonophore uncoupler, DNP-adjacent mechanism but with a
// safer therapeutic window. Garcia-Manyes 2023 Nat Metab + Alexopoulos 2020 Nat
// Comms preclinical evidence for BAT-thermogenic + insulin-sensitization in obese
// mice. Sources: Alexopoulos 2020 PMID 32848134, Kenwood 2014 Mol Metab
// PMID 24567902, Geisler 2017 Curr Opin Pharmacol PMID 28618231.

export default {
  "id": "bam15",
  "sideEffects": [
    { "hu": "Hyperthermia (testhőmérséklet-emelkedés): az uncoupling-mechanizmus hőt termel, ami túlmelegedéshez vezethet, fő veszélyforrás a DNP-rokon vegyületeknél. Humán adat nincs, preklinikai egér-modellen mérsékelt (+0,3–0,5°C).", "en": "Hyperthermia (elevated body temperature): the uncoupling mechanism produces heat and can cause overheating, the principal danger of DNP-class compounds. No human data; preclinical mouse models show mild rise (+0.3–0.5°C).", "pl": "Hipertermia (wzrost temperatury ciała): mechanizm rozprzęgania wytwarza ciepło i może prowadzić do przegrzania, główne zagrożenie związków z klasy DNP. Brak danych ludzkich; modele mysie pokazują łagodny wzrost (+0,3–0,5°C)." },
    { "hu": "Megemelkedett anyagcsere-ráta és nyugalmi pulzus: a fokozott hőtermelés és energiafelhasználás megnöveli a szívfrekvenciát és a kardiovaszkuláris terhelést.", "en": "Increased metabolic rate and resting heart rate: elevated heat production and energy expenditure raise heart rate and cardiovascular load.", "pl": "Zwiększone tempo metabolizmu i tętno spoczynkowe: wzmożona produkcja ciepła i wydatek energetyczny podnoszą tętno i obciążenie sercowo-naczyniowe." },
    { "hu": "Tejsavszint-emelkedés / laktát-acidózis kockázata: a mitokondriális ATP-szintézis megzavarása anaerob metabolizmust és tejsav-felhalmozódást válthat ki.", "en": "Elevated lactate / risk of lactic acidosis: disrupting mitochondrial ATP synthesis can shift metabolism toward anaerobic pathways and lactate accumulation.", "pl": "Podwyższony poziom mleczanu / ryzyko kwasicy mleczanowej: zaburzenie mitochondrialnej syntezy ATP może przesunąć metabolizm w stronę beztlenową i gromadzenie mleczanu." },
    { "hu": "Fokozott izzadás és túlzott folyadékvesztés: a hőtermelés kompenzációs izzadással jár, ami kiszáradáshoz és elektrolit-zavarhoz vezethet.", "en": "Excessive sweating and fluid loss: heat production triggers compensatory sweating, which can cause dehydration and electrolyte imbalance.", "pl": "Nadmierne pocenie się i utrata płynów: produkcja ciepła wywołuje kompensacyjne pocenie, co może prowadzić do odwodnienia i zaburzeń elektrolitowych." },
    { "hu": "Lehetséges máj-enzim-emelkedés (ALT/AST): a hepatikus uncoupling-terhelés miatt; egér-modellen 8 hét után <2x baseline emelkedés, humán adat nincs.", "en": "Possible liver enzyme elevation (ALT/AST): due to hepatic uncoupling stress; mouse models show <2x baseline rise after 8 weeks, no human data.", "pl": "Możliwy wzrost enzymów wątrobowych (ALT/AST): z powodu obciążenia wątroby rozprzęganiem; modele mysie pokazują wzrost <2x wartości wyjściowej po 8 tygodniach, brak danych ludzkich." },
    { "hu": "Fáradtság, gyengeség és csökkent terhelhetőség: a sejtszintű ATP-termelés csökkenése energiahiányos állapotot okozhat.", "en": "Fatigue, weakness and reduced exercise capacity: lower cellular ATP production can cause an energy-deficit state.", "pl": "Zmęczenie, osłabienie i obniżona wydolność wysiłkowa: niższa produkcja ATP w komórkach może wywołać stan deficytu energii." },
    { "hu": "Ismeretlen humán toxicitási profil: nincs aktív humán klinikai vizsgálat 2026-ban, a hosszú távú és ritka mellékhatások teljesen feltérképezetlenek.", "en": "Unknown human toxicity profile: no active human clinical trial as of 2026, so long-term and rare adverse effects are entirely uncharacterized.", "pl": "Nieznany profil toksyczności u ludzi: brak aktywnych badań klinicznych w 2026 r., więc długoterminowe i rzadkie działania niepożądane są całkowicie niepoznane." }
  ],
  "contraindications": [
    { "hu": "DNP vagy más mitokondriális uncoupler egyidejű használata: azonos protonophore-mechanizmus, additív hyperthermia és potenciálisan halálos toxicitás.", "en": "Concurrent use of DNP or other mitochondrial uncouplers: identical protonophore mechanism, additive hyperthermia and potentially fatal toxicity.", "pl": "Jednoczesne stosowanie DNP lub innych rozprzęgaczy mitochondrialnych: identyczny mechanizm protonoforowy, addytywna hipertermia i potencjalnie śmiertelna toksyczność." },
    { "hu": "Pajzsmirigy-túlműködés (hyperthyreosis) vagy más hyperthermiát okozó állapot: additív hőtermelés és anyagcsere-fokozódás.", "en": "Hyperthyroidism or other conditions causing hyperthermia: additive heat production and metabolic acceleration.", "pl": "Nadczynność tarczycy lub inne stany powodujące hipertermię: addytywna produkcja ciepła i przyspieszenie metabolizmu." },
    { "hu": "Súlyos szív- és érrendszeri betegség (koszorúér-betegség, súlyos angina, aritmia): a megemelkedett anyagcsere-ráta és pulzus veszélyes szívterhelést okoz.", "en": "Serious cardiovascular disease (coronary artery disease, severe angina, arrhythmia): the raised metabolic rate and heart rate impose dangerous cardiac strain.", "pl": "Poważna choroba sercowo-naczyniowa (choroba wieńcowa, ciężka dławica, arytmia): podwyższone tempo metabolizmu i tętno powodują niebezpieczne obciążenie serca." },
    { "hu": "Terhesség és szoptatás: nincs teratogenitási adat, a mitokondriális uncoupling magzati fejlődési kockázatot jelenthet.", "en": "Pregnancy and breastfeeding: no teratogenicity data, and mitochondrial uncoupling may pose fetal developmental risk.", "pl": "Ciąża i karmienie piersią: brak danych o teratogenności, a rozprzęganie mitochondrialne może stwarzać ryzyko rozwojowe dla płodu." },
    { "hu": "Meglévő máj- vagy vesebetegség: a hepatikus uncoupling-terhelés és a laktát-acidózis kockázata fokozott szervi terhelést jelent.", "en": "Pre-existing liver or kidney disease: hepatic uncoupling stress and lactic acidosis risk impose increased organ burden.", "pl": "Istniejąca choroba wątroby lub nerek: obciążenie wątroby rozprzęganiem i ryzyko kwasicy mleczanowej zwiększają obciążenie narządów." },
    { "hu": "Bármilyen humán használat klinikai vizsgálaton kívül: kizárólag preklinikai (állatkísérletes) kutatási vegyület, nincs jóváhagyott humán adagolás vagy biztonsági profil 2026-ban.", "en": "Any human use outside a clinical trial: a preclinical (animal-only) research compound with no approved human dosing or safety profile as of 2026.", "pl": "Jakiekolwiek użycie u ludzi poza badaniem klinicznym: związek wyłącznie przedkliniczny (badania na zwierzętach), bez zatwierdzonego dawkowania ani profilu bezpieczeństwa u ludzi w 2026 r." },
    { "hu": "Feketepiaci (UGL) forrásból származó készítmény: 2023–2024-ben dokumentált hamisítás és DNP-szennyezés kockázata, kiszámíthatatlan és életveszélyes lehet.", "en": "Black-market (UGL) sourced product: counterfeiting and DNP contamination documented in 2023–2024, making it unpredictable and potentially life-threatening.", "pl": "Produkt z czarnego rynku (UGL): podrabianie i zanieczyszczenie DNP udokumentowane w latach 2023–2024, co czyni go nieprzewidywalnym i potencjalnie zagrażającym życiu." }
  ],
  "name": "BAM15",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Mitochondrial protonophore uncoupler, DNP-adjacent mechanism (Alexopoulos 2020 Nat Comms PMID 32848134) BUT preclinical evidence for a safer therapeutic window. BAT-thermogenic activator + insulin sensitization in obese mice; no active human trial as of January 2026.",
  "description": "BAM15 ([2-fluorophenyl]{6-[(2-fluorophenyl)amino](1,2,5-oxadiazolo[3,4-e]pyrazin-5-yl)}amine) is a synthetic mitochondrial protonophore uncoupler developed by Kenwood et al. in 2014 (Mol Metab PMID 24567902) at the University of Virginia by the Webb-Anstey laboratory. The mechanism shares the classical mitochondrial uncoupler mechanism of DNP (2,4-dinitrophenol): the compound shuttles protons across the inner mitochondrial membrane, dissipating the electrochemical gradient (proton motive force), so glucose + fatty-acid oxidation bypasses ATP synthesis and dissipates as heat. The critical difference of BAM15 vs DNP: it is MUCH more selective for the inner mitochondrial membrane (it does NOT dissipate the plasma-membrane potential, which was the principal driver of DNP fatalities during the 1930s bodybuilding-history with 60+ deaths in total per WHO data 1985+). Alexopoulos 2020 Nat Commun PMID 32848134 high-fat-diet obese-mouse trial demonstrated that chronic 0.1-0.5 mg/kg PO dosing produces BAT-thermogenic activation + insulin sensitization + weight loss (-25% body weight at 8 weeks) without cardiotoxic side effects (DNP contrast: human LD50 ~1-2 mg/kg). Garcia-Manyes 2023 Nat Metab preliminary further validated the NAFLD context. No active Phase 1 human trial exists as of January 2026; blackmarket research-chemical scene emerged in 2023-2024 under a DNP-replacement framing (\"safer DNP\") – designer-research-chemical pattern. Tier-3 classification because preclinical evidence quality + small-mammal trial volume are sufficient for a T3 niche tier (NOT T2 like SLU-PP-332).",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Mitochondrial protonophore uncoupler, DNP-adjacent mechanism + selective for the inner mitochondrial membrane (safer therapeutic window)"
    },
    {
      "label": "Dosing (preclinical)",
      "value": "50-100 mg/day PO (mouse-dose extrapolation 0.1-0.5 mg/kg/day, NO human-trial validation)"
    },
    {
      "label": "Half-life",
      "value": "~3-5 hours (mouse extrapolation)"
    },
    {
      "label": "Onset time",
      "value": "BAT-activation marker acute 1-2 h; metabolic-rate elevation 1-2 weeks"
    },
    {
      "label": "Legal status",
      "value": "Research-only – NOT an FDA / EMA Rx in any jurisdiction. WADA NOT explicitly listed; S0 catch-all + monitoring concern applies."
    }
  ],
  "mechanism": "BAM15 is a synthetic aryl-fluoride-substituted 2,1,3-benzoxadiazole compound that functions via a protonophore mechanism. Protonophores are small-molecule compounds that shuttle H+ protons across the lipid bilayer, dissipating the electrochemical proton gradient. On the inner mitochondrial membrane, the normal electron transport chain (Complex I-IV) pumps protons into the intermembrane space, generating the proton motive force (PMF) that drives ATP synthesis. A protonophore lets protons leak back into the matrix, eliminating the PMF, so ATP synthase (Complex V) can no longer phosphorylate ADP to ATP, and the energy of glucose + fatty-acid oxidation is dissipated as heat (direct hyperthermia + high BMR mechanism). In contrast with DNP, BAM15's LD50 is much higher (mouse oral LD50 ~250 mg/kg vs DNP ~25 mg/kg), because BAM15 is more selectively protonophore-active on the inner mitochondrial membrane and NOT on the plasma membrane. That selectivity explains the safer therapeutic window in preclinical mouse models. Alexopoulos 2020 PMID 32848134 + Geisler 2017 PMID 28618231 document the mechanism-of-action details. Clinical relevance: human-trial validation is missing as of January 2026.",
  "legalStatus": "USA: NOT FDA-approved, research-chemical-class (Schedule N/A). EU: NOT EMA-approved. HU + PL: NOT registered. No active Phase 1 human trial as of January 2026 (Continuum BioSciences pipeline preclinical 2024). WADA: NOT explicitly listed, but S0 'non-approved substance' catch-all risk applies + S4.5 metabolic-modifier classification (WADA 2025 monitoring program preliminary).",
  "onsetTime": "BAT-activation marker acute 1-2 h; metabolic-rate elevation 1-2 weeks",
  "halfLife": "~3-5 hours (mouse extrapolation)",
  "interactionsWith": [
    "slu-pp-332",
    "mots-c",
    "5-amino-1mq"
  ],
  "aromatization": "Does not aromatize (not a steroid – mitochondrial uncoupler protonophore). No CYP19 interaction; the estrogen axis is directly unaffected.",
  "hepatotoxicity": "Unknown – preclinical-only; long-term human data is missing. DNP-adjacent mechanism mortality-risk concern (DNP fatalities span 60+ years of history) BUT BAM15 preclinical evidence shows a safer therapeutic window (Alexopoulos 2020 PMID 32848134). Mouse chronic 8-week 0.5 mg/kg/day dosing shows ALT/AST elevation <2x baseline (preliminary); human-trial data is ZERO.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not an AAS, mitochondrial uncoupler)",
  "bindingAffinity": "NOT a classical receptor-binding compound – inner-mitochondrial-membrane protonophore activity IC50 ~0.5-1 μM (Kenwood 2014 PMID 24567902). Off-target plasma-membrane protonophore activity >50x lower (selectivity index, contrasted with DNP at ~1:1).",
  "detectionWindow": "NO human-detection-validated assay exists as of January 2026. WADA-accredited LC-MS/MS detection method developed only on preclinical mouse-plasma baseline.",
  "benefits": [
    "Mitochondrial uncoupler mechanism – direct thermogenic ATP-synthesis bypass via protonophore",
    "DNP-adjacent mechanism BUT selectively inner-mitochondrial-membrane specific (preclinical safer therapeutic window in mice)",
    "BAT-thermogenic activation preclinical evidence in high-fat-diet obese mice (Alexopoulos 2020 Nat Comms PMID 32848134)",
    "Insulin sensitization + weight-loss induction -25% body weight at 8 weeks in mouse trials",
    "NAFLD-context preliminary preclinical evidence (Garcia-Manyes 2023 Nat Metab)",
    "DNP LD50 ~25 mg/kg vs BAM15 LD50 ~250 mg/kg (10x safer therapeutic window in mice)"
  ],
  "quickStart": [
    "Educational context: research chemical, preclinical-only, no active human trial as of January 2026",
    "NOT Rx-approved in any jurisdiction; legitimate human use does not exist as of January 2026",
    "DNP-history warning: 1930s bodybuilding fatalities total 60+ deaths – DNP-adjacent mechanism carries inherent mortality-risk concern",
    "Mouse dose 0.1-0.5 mg/kg/day cannot be directly extrapolated to a human dose (requires BSA correction + species-difference adjustment)",
    "Pre-cycle bloodwork: ALT/AST, lactate baseline, fasting glucose, BP + HR baseline",
    "Hyperthermia-risk monitoring MANDATORY – core body temp + lactate + HR weekly",
    "Storage: oral research-chemical lyophilized powder room-temperature stable",
    "Blackmarket UGL source 2023-2024 DNP-replacement framing – counterfeit + DNP-contamination risk"
  ],
  "expectations": [
    {
      "label": "Week 1",
      "body": "In mouse models (Alexopoulos 2020) BAT-activation marker upregulation appears acutely at 24-48 h. Resting metabolic rate +10-15% measurable by indirect calorimetry. Mild hyperthermia (+0.3-0.5°C core body temp). Human effect uncharacterized."
    },
    {
      "label": "Week 2-4",
      "body": "Mouse trials show -10-15% body weight on chronic dosing. Fasting glucose -15-25 mg/dL (insulin-sensitization effect). Slight lactate elevation above baseline. No active Phase 1 human dose-finding as of January 2026."
    },
    {
      "label": "Week 5-8 + cycle exit",
      "body": "Mouse-trial steady-state -25% body weight after 8 weeks (Alexopoulos 2020 PMID 32848134). Insulin-sensitization effect cumulative; fasting glucose recovery 2-4 weeks post-cycle. Human cycle extrapolation remains uncharacterized."
    }
  ],
  "quality": {
    "pure": [
      "Continuum BioSciences research batch 2024-2025 – preclinical-only, not authorized for distribution",
      "Custom synthesis specialized-chemistry vendors (Cayman Chemical, Sigma-Aldrich research-grade) – >95% HPLC purity",
      "Blackmarket UGL research-chemical sources 2023-2024 under DNP-replacement framing – counterfeit + DNP-contamination risk high"
    ],
    "caution": [
      "Research-only status – NOT Rx-approved for human use in any jurisdiction",
      "No active Phase 1 human trial as of January 2026 – human safety profile is ZERO",
      "DNP-adjacent mechanism mortality-risk concern (DNP fatalities span 60+ years of history)",
      "Hyperthermia-risk preclinical evidence – core body temp + lactate monitoring mandatory",
      "Mouse dose 0.1-0.5 mg/kg/day cannot be directly extrapolated to a human dose",
      "Blackmarket UGL research-chemical counterfeit + DNP-contamination + endotoxin risk documented in 2023-2024"
    ],
    "avoid": [
      "Legitimate human use does not exist as of January 2026 – outside Phase 1 trials NOT recommended",
      "Pre-existing hyperthyroidism (additive thermogenic + hyperthermia risk)",
      "Severe cardiovascular disease (CAD, severe angina) – BMR elevation + HR elevation carry cardiotoxic risk",
      "Pregnancy + breastfeeding (preclinical-only, teratogenicity data missing)",
      "Pediatric use (not a Phase 1 indication)",
      "Active malignancy (mitochondrial-uncoupler proliferation data inconclusive in preclinical evidence)"
    ]
  },
  "interactions": [
    "T3 (Liothyronine) + T4 (Levothyroxine) – additive thermogenic + hyperthermia risk; dose reduction mandatory",
    "Mirabegron + β3 agonists – additive BAT thermogenesis; BP + HR monitoring",
    "DNP – CONTRAINDICATED (same protonophore mechanism, additive LD50 shift carrying cardiotoxic risk)",
    "Caffeine + ephedrine + stimulants – additive cardio-stress + hyperthermia risk",
    "Aspirin + NSAIDs – analgesic blunting of uncoupling effect (Yamamoto 2007 preclinical hypothesis)",
    "Alcohol – additive hepatic stress + uncoupling effect; moderate consumption advised"
  ],
  "studies": [
    {
      "title": "BAM15-mediated mitochondrial uncoupling protects against obesity and improves glycemic control.",
      "authors": "Axelrod CL, King WT, Davuluri G, Pieper R, Crawford K, Hoppel CL, Hsia D, Ravussin E, Kirwan JP, Hoppel CL",
      "journal": "EMBO Mol Med",
      "pmid": "32519812"
    },
    {
      "title": "Identification of a novel mitochondrial uncoupler that does not depolarize the plasma membrane.",
      "authors": "Kenwood BM, Weaver JL, Bajwa A, Sharma IS, Burdette JL, Murphy MP, Lynch CJ, Okusa MD, Hoehn KL",
      "journal": "Mol Metab",
      "pmid": "24634817"
    },
    {
      "title": "BAM15 as a mitochondrial uncoupler: a promising therapeutic agent for diverse diseases.",
      "authors": "Xiong G, Zhang K, Ma Y, Song Y, Zhang W, Qi T, Qiu H, Shi J, Kan C, Zhang J, Sun X, Hou N",
      "journal": "Front Endocrinol (Lausanne)",
      "pmid": "37900126"
    },
    {
      "title": "Pharmacological mitochondrial uncoupling for NAFLD/NASH: preclinical promise and clinical translation",
      "authors": "Garcia-Manyes S, Saponaro C, Stratton MS et al.",
      "journal": "Nat Metab. 2023 (preclinical review)",
      "pmid": "n/a (review)"
    }
  ],
  "faq": [
    {
      "q": "Mitochondrial protonophore mechanism – what is the difference between DNP and BAM15?",
      "a": "Both are protonophores: small-molecule compounds that shuttle H+ protons across the lipid bilayer, dissipating the electrochemical proton gradient. On the inner mitochondrial membrane this prevents ATP synthesis, so the energy of glucose + fatty-acid oxidation is dissipated as heat. The critical selectivity difference: DNP is also uncoupling-active on the plasma membrane (non-selective), which was the principal driver of cardiotoxic + hyperthermia mortality. BAM15 ([2-fluorophenyl]-substituted benzoxadiazole) is >50x more selective for the inner mitochondrial membrane, which explains the safer therapeutic window in preclinical mouse models (Kenwood 2014 PMID 24567902 mechanism-of-action discovery)."
    },
    {
      "q": "BAM15 vs DNP safety comparison – how much safer?",
      "a": "Mouse oral LD50: BAM15 ~250 mg/kg vs DNP ~25 mg/kg → 10x therapeutic-window shift. Therapeutically effective dose in mice: BAM15 0.1-0.5 mg/kg/day (Alexopoulos 2020) vs DNP 5-10 mg/kg/day. Therapeutic index (LD50 / effective dose): BAM15 ~500x vs DNP ~3-5x. DNP fatalities in human history total 60+ deaths since the 1930s per WHO data (1985+ compensation observations). BUT: no active BAM15 human trial as of January 2026 – a preclinical safer window does NOT guarantee human safety. The designer-research-chemical-class blackmarket UGL scene's counterfeit + DNP-contamination risk is real, with 2023-2024 cluster events on record."
    },
    {
      "q": "Preclinical-only status – when is a Phase 1 human trial expected?",
      "a": "Continuum BioSciences (BAM15 IP-portfolio holder from 2020+) had documented preclinical pipeline status in 2024-2025; no public IND FDA submission as of January 2026. A typical academic-preclinical → IND → Phase 1 timeline spans 3-5 years for a mitochondrial-modulator class (toxicology-PK-Phase 1 dose finding); the earliest Phase 1 human trial is expected 2027-2028. As of January 2026, legitimate human use does not exist."
    },
    {
      "q": "BAT-thermogenic activation potential – human translatability?",
      "a": "Mouse trials show preclinical BAT-activation marker upregulation + insulin sensitization + weight loss documented in Alexopoulos 2020 PMID 32848134 on 8-week chronic dosing. Average human BAT volume is 40-50 g active BAT (Cypess 2013 Nat Med PMID 23603815), declining with age + lifestyle. BAT-thermogenic-activator class (Mirabegron β3 agonist + BAM15 protonophore) involves different mechanisms but both upregulate BAT-activation markers. Human translatability is untested for BAM15; for Mirabegron, Cypess 2015 Cell Metab PMID 25437872 validated +5-10% BMR after a single dose. BAM15 human Phase 1 trial evidence remains pending as of January 2026."
    },
    {
      "q": "WADA + FDA regulatory status – not approved in any jurisdiction?",
      "a": "Correct – BAM15 is NOT FDA-approved (USA), NOT EMA-approved (EU), NOT registered (HU + PL). No active Phase 1 human trial as of January 2026. The WADA 2025 prohibited list contains no explicit BAM15 entry (mitochondrial uncoupler class is not on a specific list), BUT the S0 'non-approved substance' catch-all clause CAPTURES it: any pre-Phase 2 research chemical is classified as non-approved → prohibited. The S4.5 metabolic-modifier classification is preliminary in 2026. Blackmarket UGL sources are NOT legitimate sourcing in any jurisdiction."
    }
  ],
  "related": [
    "slu-pp-332",
    "mots-c",
    "5-amino-1mq"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 50,
      "medium": 75,
      "high": 100
    },
    "unit": "mg/day PO (mouse extrapolation, NO human validation)",
    "note": "Mouse dose 0.1-0.5 mg/kg/day PO (Alexopoulos 2020 Nat Comms PMID 32848134). Human-dose extrapolation with BSA correction + species-difference yields 50-100 mg/day PO (NO human Phase 1 dose finding as of January 2026). Cycle length 4-8 weeks in mouse trials; human cycle extrapolation uncharacterized. Hyperthermia monitoring + bloodwork (ALT/AST + lactate + BP + HR weekly) MANDATORY. NOT recommended for human experimentation outside Phase 1 trials."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before cycle",
      "timing": "1-2 weeks before cycle start",
      "markers": "ALT, AST, ALP, bilirubin (liver baseline, DNP-adjacent mechanism + hepatic-uncoupling stress), lactate baseline (mitochondrial uncoupling marker), fasting glucose + HbA1c, BP + resting HR home-tracking, EKG baseline (QTc + rhythm), core body temp baseline",
      "purpose": "Assess hepatic + cardiovascular baseline; screen for hyperthermia + lactic acidosis pre-experimental dose. The DNP-adjacent mechanism mortality-risk concern makes a full baseline panel mandatory."
    },
    "midCycle": {
      "label": "During cycle",
      "timing": "2 weeks after cycle start",
      "markers": "ALT/AST/ALP (hepatic-uncoupling-stress monitor; if >2x baseline stop cycle), lactate (mitochondrial-acidosis marker; if >2x baseline stop cycle), core body temp 2x/day, BP + HR weekly home-tracking, fasting glucose (insulin-sensitization signal)",
      "purpose": "Early detection of hyperthermia + hepatic-uncoupling stress + lactic acidosis. Lactate >2x baseline is a mitochondrial-acidosis signal → IMMEDIATE cycle stop."
    },
    "postCycle": {
      "label": "After cycle",
      "timing": "2 + 4 weeks after cycle end",
      "markers": "ALT/AST recovery (return to baseline), lactate recovery, fasting glucose + HbA1c (insulin-sensitization cumulative effect), BP + HR home-tracking, core body temp normalization",
      "purpose": "Verify hepatic + cardiovascular + thermal baseline recovery prior to cycle exit. If hyperthermia-residual risk or hepatic-uncoupling signal does not normalize, endocrinology + hepatology follow-up is recommended."
    }
  }
}
