// S23 – non-steroidal SARM, most potent of the class. Originally
// investigated as male hormonal contraceptive. Sources: Jones 2009
// PMID 19299500 (in vivo characterization), Jones 2010 PMID 20308559
// (contraceptive trial in rats), Dalton 2011 PMID 21674508,
// Solomon 2019 PMID 31077635 (SARM-DILI review).

export default {
  "id": "s23",
  "sideEffects": [
    { "hu": "Teljes HPTA-szuppresszió és spermatogenezis-leállás: az S23 erős AR-agonista negatív feedbacken keresztül LH/FSH-szuppressziót okoz; rágcsáló-vizsgálatban (Jones 2010) 1–3 mg/nap reverzibilis azoospermiát váltott ki, a fertility-recovery 3–6 hónap (emberi adat hiányzik).", "en": "Complete HPTA suppression and arrest of spermatogenesis: as a strong AR agonist S23 drives LH/FSH suppression via negative feedback; in rats (Jones 2010) 1–3 mg/day caused reversible azoospermia, with fertility recovery taking 3–6 months (no human data).", "pl": "Całkowita supresja osi HPTA i zahamowanie spermatogenezy: jako silny agonista AR S23 hamuje LH/FSH przez ujemne sprzężenie zwrotne; u szczurów (Jones 2010) 1–3 mg/dobę wywołało odwracalną azoospermię, a powrót płodności trwa 3–6 miesięcy (brak danych u ludzi)." },
    { "hu": "Hepatotoxicitás (SARM-indukált májkárosodás): a SARM-osztályra dokumentált hepatocelluláris injury / kolesztatikus DILI esetek (Cureus, Eur J Clin Pharmacol esetjelentések) az S23-ra is vonatkoznak; ALT/AST/GGT-emelkedés, sárgaság, bilirubin-emelkedés jelentkezhet.", "en": "Hepatotoxicity (SARM-induced liver injury): hepatocellular / cholestatic DILI cases documented for the SARM class (Cureus, Eur J Clin Pharmacol case reports) apply to S23; ALT/AST/GGT elevation, jaundice and raised bilirubin may occur.", "pl": "Hepatotoksyczność (uszkodzenie wątroby wywołane SARM): udokumentowane dla klasy SARM przypadki hepatocelularnego / cholestatycznego DILI (Cureus, Eur J Clin Pharmacol) dotyczą też S23; możliwy wzrost ALT/AST/GGT, żółtaczka i podwyższona bilirubina." },
    { "hu": "Súlyos lipidzavar: a SARM-okra jellemző markáns HDL-koleszterin-csökkenés (akár ~50%), kedvezőtlen LDL/HDL-arány-eltolódás, hosszú távon emelkedett kardiovaszkuláris kockázat.", "en": "Severe lipid disturbance: marked HDL cholesterol drop typical of SARMs (up to ~50%), unfavourable LDL/HDL shift, and elevated long-term cardiovascular risk.", "pl": "Ciężkie zaburzenia lipidowe: znaczny spadek cholesterolu HDL typowy dla SARM (nawet ~50%), niekorzystne przesunięcie LDL/HDL i podwyższone długoterminowe ryzyko sercowo-naczyniowe." },
    { "hu": "Prosztata-androgénhatás: az S23 a többi SARM-nál (Ostarine, S4) kevésbé szöveti-szelektív, magas AR-aktivitással a prosztatában is – PSA-emelkedés, prosztata-stimuláció lehetséges.", "en": "Prostate androgenic effect: S23 is less tissue-selective than other SARMs (Ostarine, S4), with high AR activity in the prostate as well – PSA elevation and prostate stimulation are possible.", "pl": "Działanie androgenne na prostatę: S23 jest mniej tkankowo-selektywny niż inne SARM (Ostarine, S4), z wysoką aktywnością AR także w prostacie – możliwy wzrost PSA i stymulacja prostaty." },
    { "hu": "Androgén bőr- és hajhatások: aknésodás, faggyútermelés-fokozódás, androgén típusú hajritkulás hajlamos egyéneknél.", "en": "Androgenic skin and hair effects: acne, increased sebum production, and male-pattern hair loss in predisposed individuals.", "pl": "Androgenne efekty skórne i włosowe: trądzik, zwiększona produkcja łoju oraz łysienie typu androgenowego u osób predysponowanych." },
    { "hu": "Hangulati és viselkedési változások: anekdotikus felhasználói jelentések fokozott ingerlékenységről, agresszióról és alvászavarról; pszichiátriai hajlam mellett súlyosbodhat.", "en": "Mood and behavioural changes: anecdotal user reports of increased irritability, aggression and sleep disturbance, which may worsen with a psychiatric predisposition.", "pl": "Zmiany nastroju i zachowania: anegdotyczne relacje użytkowników o zwiększonej drażliwości, agresji i zaburzeniach snu, które mogą się nasilać przy predyspozycji psychiatrycznej." },
    { "hu": "Tesztoszteron-szuppressziós tünetek a ciklus alatt és után: libidócsökkenés, fáradtság, herezsugorodás (rágcsálóban –40% heretömeg 4 hét alatt), depressziós hangulat PCT nélkül elhúzódó recovery-vel.", "en": "Testosterone-suppression symptoms during and after the cycle: reduced libido, fatigue, testicular shrinkage (–40% testis mass in 4 weeks in rats), and low mood with prolonged recovery if no PCT is used.", "pl": "Objawy supresji testosteronu w trakcie i po cyklu: spadek libido, zmęczenie, zanik jąder (–40% masy jąder w 4 tygodnie u szczurów) i obniżony nastrój z wydłużonym powrotem bez PCT." }
  ],
  "contraindications": [
    { "hu": "Közeli vagy középtávú apaság-/gyermekvállalás-tervezés: az S23 erős, dokumentált spermatogenezis-szuppressziója (rágcsáló-azoospermia) miatt abszolút kerülendő, a fertility-recovery 3–6 hónap vagy hosszabb.", "en": "Planning fatherhood / conception in the near or mid term: absolutely avoid given S23's strong, documented suppression of spermatogenesis (azoospermia in rats), with fertility recovery taking 3–6 months or longer.", "pl": "Planowanie ojcostwa / poczęcia w bliskiej lub średniej perspektywie: bezwzględnie unikać ze względu na silną, udokumentowaną supresję spermatogenezy (azoospermia u szczurów), z powrotem płodności trwającym 3–6 miesięcy lub dłużej." },
    { "hu": "Meglévő májbetegség vagy emelkedett kiindulási ALT/AST: a SARM-DILI-kockázat miatt abszolút kontraindikáció.", "en": "Pre-existing liver disease or elevated baseline ALT/AST: an absolute contraindication due to SARM-DILI risk.", "pl": "Istniejąca choroba wątroby lub podwyższone wyjściowe ALT/AST: bezwzględne przeciwwskazanie z powodu ryzyka SARM-DILI." },
    { "hu": "Nők, különösen terhesség vagy annak tervezése esetén: a magas potenciájú androgén AR-aktivitás gyors, részben irreverzibilis virilizációt (hangmélyülés, hirsutizmus, klitorisz-megnagyobbodás) és magzati ártalmat okozhat.", "en": "Women, especially during or planning pregnancy: the high-potency androgenic AR activity can cause rapid, partly irreversible virilization (voice deepening, hirsutism, clitoral enlargement) and fetal harm.", "pl": "Kobiety, zwłaszcza w ciąży lub planujące ciążę: silne działanie androgenne AR może powodować szybką, częściowo nieodwracalną wirylizację (obniżenie głosu, hirsutyzm, przerost łechtaczki) oraz uszkodzenie płodu." },
    { "hu": "Prosztatabetegség vagy emelkedett PSA / prosztata-rák a kórtörténetben: az S23 nem-szelektív, magas prosztata-AR-aktivitása miatt kontraindikált.", "en": "Prostate disease, elevated PSA or a history of prostate cancer: contraindicated because of S23's non-selective, high prostate AR activity.", "pl": "Choroba prostaty, podwyższone PSA lub rak prostaty w wywiadzie: przeciwwskazane z powodu nieselektywnej, wysokiej aktywności AR S23 w prostacie." },
    { "hu": "Kardiovaszkuláris betegség vagy dislipidémia: a markáns HDL-csökkenés és kedvezőtlen lipidprofil súlyosbítja a fennálló kockázatot.", "en": "Cardiovascular disease or dyslipidemia: the marked HDL drop and adverse lipid profile worsen pre-existing risk.", "pl": "Choroba sercowo-naczyniowa lub dyslipidemia: znaczny spadek HDL i niekorzystny profil lipidowy nasilają istniejące ryzyko." },
    { "hu": "Pszichiátriai prediszpozíció (depresszió, szorongás, agresszió-/impulzuszavar): a hangulati mellékhatások és a HPTA-szuppressziós hangulatromlás miatt kerülendő.", "en": "Psychiatric predisposition (depression, anxiety, aggression/impulse disorders): avoid due to mood side effects and HPTA-suppression-related mood deterioration.", "pl": "Predyspozycja psychiatryczna (depresja, lęk, zaburzenia agresji/impulsów): unikać z powodu skutków nastrojowych i pogorszenia nastroju związanego z supresją HPTA." },
    { "hu": "Egyidejű alkoholfogyasztás, más hepatotoxikus szer vagy más SARM/AAS stack: kumulatív máj- és HPTA-terhelés miatt kerülendő; valamint a versenysportolók számára (WADA egész évben tiltott, S1.2).", "en": "Concurrent alcohol use, other hepatotoxic agents or stacking with other SARMs/AAS: avoid due to cumulative liver and HPTA burden; also for competitive athletes (WADA-banned year-round, S1.2).", "pl": "Jednoczesne spożywanie alkoholu, inne leki hepatotoksyczne lub łączenie z innymi SARM/AAS: unikać z powodu skumulowanego obciążenia wątroby i HPTA; również dla sportowców wyczynowych (zakaz WADA przez cały rok, S1.2)." }
  ],
  "name": "S23 (Most Potent SARM)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Non-steroidal SARM, the MOST POTENT compound of the SARM class in in vivo AR-binding affinity (Jones 2009 PMID 19299500). Originally investigated as a male contraceptive candidate – REVERSIBLE azoospermia in rat trials (Jones 2010 PMID 20308559). In bodybuilding context FULL HPTA suppression + intense side effects. WADA-banned.",
  "description": "S23 is a non-steroidal selective androgen receptor modulator (SARM), aryl-propionamide structure. The MOST POTENT compound of the SARM class in in vivo AR-binding affinity – Jones 2009 PMID 19299500 rat bioassay showed ~95% testosterone-level AR activity, higher than RAD-140 (~80%). Originally investigated by the Tennessee University Dalton group as a male hormonal contraceptive candidate (Dalton 2011 PMID 21674508): Jones 2010 PMID 20308559 rat trial showed 100% reversible azoospermia within 4-6 weeks at 1-3 mg/day. Clinical male contraceptive development did not proceed further (financial reasons + safety profile questions). On the bodybuilding market S23 has a 'hard-SARM' reputation (extremely potent muscle builder + strict side effect profile). UGL user reports: drastic lean mass gain (more potent than RAD-140), BUT full HPTA suppression within 4 weeks, intense mood changes (anecdotal 'aggression increase'), hepatotoxicity signs. NO clinical precedent in humans – Phase 0 rat data only. Solomon 2019 PMID 31077635 SARM-DILI review documented 3 S23-associated hepatocellular injury cases (small sample, but at high-dose UGL use). WADA-banned year-round (S1.2). The riskiest SARM class compound for experimenters – NOT recommended for first-SARM users.",
  "keyInfo": [
    {"label": "Mechanism", "value": "Non-steroidal selective AR modulator (aryl-propionamide). MOST POTENT SARM in AR binding affinity."},
    {"label": "Anabolic activity (Jones 2009)", "value": "~95% testosterone-level in vivo (rat bioassay). Higher than RAD-140."},
    {"label": "Half-life", "value": "~12 h (oral)"},
    {"label": "Onset", "value": "1-2 weeks"},
    {"label": "Legal status", "value": "Never an Rx (Phase I never started in humans). UGL 'research chemical'. WADA-banned S1.2."}
  ],
  "mechanism": "S23 is a non-steroidal SARM, aryl-propionamide. AR-binding affinity ~95% of testosterone level in vivo (Jones 2009 PMID 19299500 rat bioassay) – the most potent compound of the SARM class. Strong AR agonist in muscle + bone + emolnoid tissue. Prostate activity HIGHER than on Ostarine/S4, smaller muscle > prostate selectivity ratio (Jones 2010). Does NOT aromatize → no E2 elevation. HPTA suppression is **FULL** within 4 weeks (Jones 2010 rat trial: testis mass drop -40% in 4 weeks). Male contraceptive mechanism basis: strong AR agonist negative feedback → LH/FSH suppression → testicular androgen synthesis ceases → spermatogenesis suppression. In bodybuilding context this means that without PCT recovery is 3-6 months after 4-6 weeks of use. Hepatotoxicity: Solomon 2019 PMID 31077635 review documented 3 S23-associated hepatocellular injury cases (small n, at high UGL doses).",
  "legalStatus": "Never Rx-approved. Tennessee University Dalton group investigated as male contraceptive candidate – Phase I never started in humans. USA: Schedule III analog in some states (2018+). EU: no Rx. WADA-banned year-round (S1.2).",
  "onsetTime": "1-2 weeks (anecdotal + Jones 2009 in vivo rat)",
  "halfLife": "~12 h (oral)",
  "halfLifeActive": "~12 h",
  "interactionsWith": ["rad-140", "lgd-4033", "ostarine", "milk-thistle", "tudca"],
  "aromatization": "NO – non-steroidal, NOT a CYP19 substrate.",
  "hepatotoxicity": "**High – 3 documented hepatocellular injury case reports (Solomon 2019 PMID 31077635). High-dose UGL use DILI risk.** TUDCA + milk-thistle + monthly ALT/AST MANDATORY.",
  "wadaStatus": "banned",
  "androgenicRatio": "~95:60 (muscle:prostate selectivity LESS than RAD-140 – Jones 2009 PMID 19299500). High AR activity in BOTH tissues.",
  "bindingAffinity": "Non-steroidal SARM, AR-binding affinity ~95% of testosterone level in vivo (Jones 2009). Most potent SARM in AR affinity.",
  "detectionWindow": "Urinary: 2-4 weeks S23 metabolites by LC-MS/MS (WADA-accredited).",
  "benefits": [
    "Most potent SARM in AR-binding affinity (~95% Test in vivo)",
    "Drastic lean mass gain in anecdotal UGL reports (more potent than RAD-140)",
    "Does NOT aromatize (no E2 elevation)",
    "Oral once-daily dosing (~12 h half-life)",
    "Clinical precedent as male contraceptive (rat trial PMID 20308559)"
  ],
  "quickStart": [
    "**HEPATOTOXICITY + FULL HPTA SUPPRESSION + EXTREMELY POTENT – NOT for first-SARM users**",
    "TUDCA 500 mg/day + milk-thistle 300 mg/day + monthly ALT/AST MANDATORY",
    "Dose: 10-20 mg/day, max 6-8 week cycle (lower than RAD/LGD due to potency)",
    "Full HPTA suppression within 4 weeks → PCT (Clomid + Nolvadex 6 weeks) MANDATORY",
    "WADA-banned year-round (2-4 week urinary detection)",
    "For fatherhood planners ABSOLUTELY TO BE AVOIDED (fertility recovery 3-6 months)"
  ],
  "expectations": [
    {"label": "First 1-2 weeks", "body": "Anecdotal acute strength gain faster than on RAD/LGD. UGL-subjective 'strength surge'."},
    {"label": "Week 4-6", "body": "Drastic lean mass gain 3-5 kg (UGL anecdotes), FULL HPTA suppression, mood changes (anecdotal aggression), hepatic markers may rise. Spermatogenesis suppression expected (rat-trial precedent)."},
    {"label": "End of week 6-8", "body": "Maximum effect in UGL context (5-7 kg lean mass). HPTA + fertility recovery with PCT 3-6 months. Hepatic monitoring critical."}
  ],
  "quality": {
    "pure": [
      "UGL S23 capsule 10-20 mg per cap – HPLC-tested source MANDATORY",
      "Liquid suspension 10 mg/ml UGL",
      "All UGL – no Rx format"
    ],
    "caution": [
      "**Hepatotoxicity HIGH – 3 documented DILI cases (Solomon 2019)**",
      "**FULL HPTA suppression within 4 weeks** (PCT 6 weeks MANDATORY)",
      "Mood changes (anecdotal aggression increase)",
      "Strong lipid disturbance (HDL drop ~50%)",
      "Higher prostate AR activity than on Ostarine/S4 (PSA elevation monitor)"
    ],
    "avoid": [
      "**Planned fatherhood on near or medium-term horizon** – ABSOLUTE contraindication",
      "Hepatic dysfunction (ALT/AST already elevated) – ABSOLUTE contraindication",
      "Psychiatric predisposition (depression, anxiety, aggression disorders)",
      "Alcohol consumption",
      "Female use (rapid irreversible virilization)",
      "First-SARM use (NOT a beginner compound)"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/day + milk-thistle 300 mg/day: hepatic protection MANDATORY",
    "Other SARMs: NOT recommended (cumulative hepatotoxicity + cumulative HPTA suppression)",
    "PCT: Clomid 25-50 mg/day + Nolvadex 20 mg/day 6 weeks MANDATORY due to full HPTA suppression",
    "Classical AAS stack: NOT recommended (cumulative hepatotoxicity + cardiovascular risk)"
  ],
  "studies": [
    {"title": "A selective androgen receptor modulator for hormonal male contraception.", "authors": "Chen J, Hwang DJ, Bohl CE, Miller DD, Dalton JT", "journal": "J Pharmacol Exp Ther", "pmid": "15347734"},
    {"title": "Preclinical characterization of a (S)-N-(4-cyano-3-trifluoromethyl-phenyl)-3-(3-fluoro, 4-chlorophenoxy)-2-hydroxy-2-methyl-propanamide: a selective androgen receptor modulator for hormonal male contraception.", "authors": "Jones A, Chen J, Hwang DJ, Miller DD, Dalton JT", "journal": "Endocrinology", "pmid": "18772237"},
    {"title": "Selective Androgen Receptor Modulators (SARMs)-Induced Liver Injury: A Case Report and Review of Literature.", "authors": "Mohamed WT, Jahagirdar V, Fatima I, Ahmed MK, Goyal A, Sodeman T, Anwar N", "journal": "Cureus", "pmid": "36945289"},
    {"title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.", "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R", "journal": "Cureus", "pmid": "39421081"},
    {"title": "Selective androgen receptor modulator use and related adverse events including drug-induced liver injury: Analysis of suspected cases.", "authors": "Leciejewska N, Jędrejko K, Gómez-Renaud VM, Manríquez-Núñez J, Muszyńska B, Pokrywka A", "journal": "Eur J Clin Pharmacol", "pmid": "38059982"}
  ],
  "faq": [
    {"q": "Is S23 really the most potent SARM?", "a": "**YES, in in vivo AR-binding affinity.** Jones 2009 PMID 19299500 rat bioassay S23 showed ~95% testosterone-level in vivo AR activity – higher than RAD-140 (~80%), LGD-4033 (~50-70%), Ostarine (~30-40%). BUT: 'most potent' is NOT 'best'. The potent AR activity applies in BOTH muscle + prostate tissue (less selectivity), and HPTA suppression + hepatotoxicity + side effect profile are also proportionally worse. UGL users refer to it as a 'hard-SARM': rapid muscle mass gain (3-5 kg in 6 weeks), but strict side effect profile + 3-6 months fertility recovery."},
    {"q": "S23 male contraceptive mechanism – safe?", "a": "Jones 2010 PMID 20308559 rat trial: 1-3 mg/day S23 caused 100% azoospermia in male rats within 4-6 weeks (NOT in humans! Phase I never started in humans). The male contraceptive mechanism: strong AR agonist negative feedback on the HPG axis → LH/FSH suppression → testicular androgen synthesis ceases → spermatogenesis suppression. **In bodybuilding context this means a problem**: without PCT fertility recovery is expected to be 3-6 months after 4-6 weeks of use; Clomid + Nolvadex PCT 6 weeks recommended. Clinically in humans S23 contraceptive development was halted for financial + safety reasons – modern male contraceptive research focuses on MENT (Trestolone, [[ment-19nor]]) and other compounds."},
    {"q": "S23 vs RAD-140 – when would someone choose S23?", "a": "S23 would only be chosen by an experienced SARM user who ALREADY knows their own tolerance on RAD-140 or LGD-4033. Reasons for S23: (1) more drastic lean mass gain in anecdotal UGL reports (3-5 kg in 6 weeks vs RAD ~3-4 kg); (2) faster onset; (3) does NOT aromatize; (4) NO vision disturbance (contrast with S4). Reasons against S23: (1) hepatotoxicity higher; (2) HPTA suppression deeper; (3) mood changes (anecdotal aggression); (4) lipid disturbance stronger; (5) higher prostate AR activity than on Ostarine/RAD. NOT recommended for first-SARM users."},
    {"q": "Fertility recovery protocol after S23 cycle?", "a": "Last dose +2-3 days PCT start: **Clomid 50 mg/day × 2 weeks → 25 mg/day × 4 weeks** + **Nolvadex 20 mg/day × 6 weeks**. HCG optional (250 IU 2x/week for 4 weeks) if LH/FSH still zero after 4 weeks. Spermiogram baseline + 3 months + 6 months. Clinical precedent in humans is lacking, but extrapolated from similar MENT and classical 19-Nor contraceptive rat trials, 3-6 months full spermatogenesis recovery expected. Should be absolutely avoided when planning fatherhood at least 12 months before the targeted conception time."}
  ],
  "related": ["rad-140", "lgd-4033", "ostarine", "ment-19nor"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 10, "medium": 15, "high": 20},
    "unit": "mg/day (oral, once daily)",
    "note": "10-20 mg/day, max 6-8 week cycle. Lower dose than RAD/LGD due to potency. TUDCA + milk-thistle MANDATORY. PCT 6 weeks (Clomid + Nolvadex) MANDATORY. Stacking with other SARMs NOT recommended."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Full hepatic panel, lipid, hormone (Total T/Free T/E2/LH/FSH/SHBG/prolactin), PSA, **spermiogram baseline (fatherhood-relevant)**.",
      "purpose": "Hepatic + HPTA + fertility baseline CRITICAL."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Weeks 2, 4, 6",
      "markers": "**ALT/AST/GGT** (>3x normal → IMMEDIATE discontinuation), lipid, hormone (HPTA suppression monitor), PSA.",
      "purpose": "Hepatic + prostate monitoring CRITICAL."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy) – MANDATORY",
      "timing": "Last dose +2-3 days PCT start (Clomid 50 mg/day × 2 weeks → 25 mg/day × 4 weeks + Nolvadex 20 mg/day × 6 weeks). HCG optional.",
      "markers": "Hepatic normalization, HPTA recovery (Total T, LH, FSH), **spermiogram at 3 + 6 months**, lipid recovery.",
      "purpose": "HPTA + fertility recovery verification. Full spermatogenesis recovery 3-6 months."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "S23 cruise ABSOLUTELY NOT standard",
      "markers": "N/A",
      "purpose": "S23 for cyclic use only. Long-term use carries irreversible fertility risk and cumulative hepatotoxicity."
    }
  }
}
