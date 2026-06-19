// LGD-4033 (Ligandrol / Anabolicum) — non-steroidal SARM, Ligand Pharma 2007.
// Sources: Basaria 2013 PMID 23413266 (Phase I healthy men), Hilal 2020
// PMID 32492288 (hepatotoxicity case), Vilaca 2018 PMID 30171122
// (SARM hepatotoxicity review), Bhasin 2012 PMID 22573713,
// Solomon 2019 PMID 31077635, Dalton 2011 PMID 21674508 (SARM general).

export default {
  "id": "lgd-4033",
  "sideEffects": [
    { "hu": "Májkárosodás (drog-indukált májsérülés, DILI): 12+ dokumentált hepatocellularis sérülés-esetjelentés, néhányban sárgaság és ALT >10x normálérték, fulmináns lefolyás stack esetén.", "en": "Liver injury (drug-induced liver injury, DILI): 12+ documented hepatocellular injury case reports, some with jaundice and ALT >10x upper normal, fulminant course when stacked.", "pl": "Uszkodzenie watroby (polekowe uszkodzenie watroby, DILI): ponad 12 udokumentowanych przypadkow uszkodzenia hepatocytow, czesc z zoltaczka i ALT >10x normy, piorunujacy przebieg przy laczeniu." },
    { "hu": "HPTA-szuppresszió: dózisfüggő tesztoszteron-, LH- és FSH-csökkenés (Basaria-vizsgálatban 1 mg/nap-on Total T -23%, LH -47%, FSH -42%); magasabb UGL-dózisokon teljes szuppresszió, PCT szükséges.", "en": "HPTA suppression: dose-dependent drop in testosterone, LH and FSH (in the Basaria trial at 1 mg/day Total T -23%, LH -47%, FSH -42%); full suppression at higher UGL doses, PCT required.", "pl": "Supresja HPTA: zalezny od dawki spadek testosteronu, LH i FSH (w badaniu Basaria przy 1 mg/dobe Total T -23%, LH -47%, FSH -42%); pelna supresja przy wyzszych dawkach UGL, konieczny PCT." },
    { "hu": "Lipidprofil-romlás: HDL-koleszterin jelentős csökkenése (kb. 30-40%), kedvezőtlen kardiovaszkuláris kockázat hosszabb használat mellett.", "en": "Lipid profile worsening: marked decrease in HDL cholesterol (approx. 30-40%), unfavorable cardiovascular risk with prolonged use.", "pl": "Pogorszenie profilu lipidowego: wyrazny spadek cholesterolu HDL (okolo 30-40%), niekorzystne ryzyko sercowo-naczyniowe przy dluzszym stosowaniu." },
    { "hu": "Fertilitás-csökkenés: a HPTA-szuppresszió átmeneti spermiogenezis-gátlást és libidócsökkenést okozhat; teljes helyreállás 3-6 hónapot is igénybe vehet.", "en": "Reduced fertility: HPTA suppression can cause transient impaired spermatogenesis and lowered libido; full recovery may take 3-6 months.", "pl": "Obnizona plodnosc: supresja HPTA moze powodowac przejsciowe zaburzenie spermatogenezy i spadek libido; pelny powrot moze trwac 3-6 miesiecy." },
    { "hu": "Mérsékelt androgén mellékhatások: lehetséges aknésodás, hajzsírosodás és hangulati ingadozás; nőknél magasabb dózison virilizáció (hangmélyülés, hirsutismus) kockázata.", "en": "Mild androgenic effects: possible acne, oily skin and mood changes; in women at higher doses risk of virilization (voice deepening, hirsutism).", "pl": "Lagodne efekty androgenne: mozliwy tradzik, przetluszczanie skory i wahania nastroju; u kobiet przy wyzszych dawkach ryzyko wirylizacji (obnizenie glosu, hirsutyzm)." },
    { "hu": "Fejfájás, fáradtság és vízvisszatartás-érzet UGL-dózisokon (anekdotikus), bár LGD-4033 nem aromatizál, így valódi ösztrogén-eredetű ödéma nem jellemző.", "en": "Headache, fatigue and a sense of water retention at UGL doses (anecdotal), although LGD-4033 does not aromatize so true estrogen-driven edema is not typical.", "pl": "Bol glowy, zmeczenie i uczucie zatrzymania wody przy dawkach UGL (anegdotycznie), choc LGD-4033 nie aromatyzuje, wiec prawdziwy estrogenozalezny obrzek nie jest typowy." }
  ],
  "contraindications": [
    { "hu": "Meglévő máj-diszfunkció vagy emelt baseline ALT/AST: abszolút kontraindikáció a dokumentált DILI-kockázat miatt.", "en": "Pre-existing liver dysfunction or elevated baseline ALT/AST: absolute contraindication due to documented DILI risk.", "pl": "Istniejaca dysfunkcja watroby lub podwyzszone wyjsciowe ALT/AST: bezwzgledne przeciwwskazanie z powodu udokumentowanego ryzyka DILI." },
    { "hu": "Egyidejű alkoholfogyasztás vagy más hepatotoxikus szerek (más orális SARM, 17-alfa-alkilált szteroid) használata: kumulatív májkárosodás.", "en": "Concurrent alcohol use or other hepatotoxic agents (other oral SARMs, 17-alpha-alkylated steroids): cumulative liver injury.", "pl": "Jednoczesne spozywanie alkoholu lub innych srodkow hepatotoksycznych (inne doustne SARM, sterydy 17-alfa-alkilowane): kumulacyjne uszkodzenie watroby." },
    { "hu": "Terhesség és szoptatás: az androgén-receptor-aktiváció magzati virilizációt és fejlődési ártalmat okozhat, használata tilos.", "en": "Pregnancy and breastfeeding: androgen receptor activation can cause fetal virilization and developmental harm, use is prohibited.", "pl": "Ciaza i karmienie piersia: aktywacja receptora androgenowego moze powodowac wirylizacje plodu i szkody rozwojowe, stosowanie zabronione." },
    { "hu": "Tervezett apaság vagy aktív fertilitási kívánság a közeli időhorizonton: a HPTA-szuppresszió átmeneti, de 3-6 hónapos helyreállással.", "en": "Planned fatherhood or active fertility goals in the near term: HPTA suppression is transient but with a 3-6 month recovery.", "pl": "Planowane ojcostwo lub aktywne dazenie do plodnosci w najblizszym czasie: supresja HPTA jest przejsciowa, ale z 3-6 miesiecznym powrotem." },
    { "hu": "Versenysport hatály alatt: WADA 2008 óta tiltott szer (S1.2), vizeletből 2-4 hétig kimutatható, dopping-szankciót von maga után.", "en": "Competitive sport under testing: WADA-banned since 2008 (S1.2), detectable in urine for 2-4 weeks, leads to doping sanctions.", "pl": "Sport wyczynowy objety kontrola: zakazany przez WADA od 2008 (S1.2), wykrywalny w moczu przez 2-4 tygodnie, prowadzi do sankcji dopingowych." },
    { "hu": "Diagnosztizált dyslipidaemia vagy fennálló kardiovaszkuláris betegség: a HDL-csökkenés tovább rontja a kockázati profilt.", "en": "Diagnosed dyslipidemia or existing cardiovascular disease: the HDL decrease further worsens the risk profile.", "pl": "Rozpoznana dyslipidemia lub istniejaca choroba sercowo-naczyniowa: spadek HDL dodatkowo pogarsza profil ryzyka." },
    { "hu": "Antikoaguláns (warfarin) szedése: enyhe antikoaguláns-potenciálás, fokozott INR-monitorozás nélkül kerülendő.", "en": "Anticoagulant (warfarin) therapy: mild anticoagulant potentiation, avoid without increased INR monitoring.", "pl": "Terapia antykoagulacyjna (warfaryna): lagodne nasilenie dzialania przeciwzakrzepowego, unikac bez zwiekszonego monitorowania INR." }
  ],
  "name": "LGD-4033 (Ligandrol)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Non-steroidal SARM, Ligand Pharmaceuticals 2007. Phase I in healthy male subjects (Basaria 2013 PMID 23413266) — dose-dependent lean mass gain, moderate HPTA suppression. The second most famous SARM after RAD-140 on the bodybuilding market. 2017-2020 hepatotoxicity cases documented (Hilal 2020 PMID 32492288). WADA-banned S1.2.",
  "description": "LGD-4033 (Ligandrol, Anabolicum, VK-5211) is a non-steroidal selective androgen receptor modulator (SARM) developed by Ligand Pharmaceuticals in 2007 (Dalton 2011 PMID 21674508 SARM-class review). Structurally a pyrrolidinecarboxamide derivative (NOT a steroid), AR-binding affinity ~50-70% of testosterone-level in vitro (Bhasin 2012 PMID 22573713). Clinical development: Phase I 2012-2013 (Basaria 2013 PMID 23413266 — 76 healthy men, 3 weeks, dose-escalation 0.1-1 mg/day): dose-dependent lean body mass gain (average 1.21 kg at 1 mg), moderate HPTA suppression (Total T -23%, LH/FSH drop), moderate ALT/AST elevation (~2x normal). Phase II 2014 muscle-wasting syndrome (sarcopenia/cachexia) trials (Viking Therapeutics, under VK-5211 name) — results were below clinical-meaningfulness, clinical development continued only in orphan indications. On the bodybuilding market the second most famous SARM (after RAD-140), UGL marketing under 'softer Test' label. 2017-2020 documented hepatotoxicity case reports (12+ known cases, Vilaca 2018 PMID 30171122 review): several with clinically relevant ALT >10x normal + jaundice (Hilal 2020 PMID 32492288 — 47y male on LGD + RAD-140 stack developing fulminant DILI). WADA-banned year-round (S1.2 — other anabolic agents), officially prohibited since 2008.",
  "keyInfo": [
    {"label": "Mechanism", "value": "Non-steroidal selective AR modulator (pyrrolidinecarboxamide). Strong AR agonist in muscle, moderate prostate activity."},
    {"label": "Anabolic activity (Basaria 2013)", "value": "Dose-dependent lean mass gain: 1.21 kg @ 1 mg/day, 3 weeks, healthy men."},
    {"label": "Half-life", "value": "~24-36 h (oral)"},
    {"label": "Onset", "value": "1-2 weeks (anecdotal strength gain)"},
    {"label": "Legal status", "value": "Never an Rx. UGL 'research chemical'. WADA-banned S1.2 since 2008."}
  ],
  "mechanism": "LGD-4033 is a non-steroidal SARM, pyrrolidinecarboxamide structure. In muscle tissue a selective AR agonist — AR-binding affinity ~50-70% of testosterone-level (Bhasin 2012 PMID 22573713 in vitro). MyoD/myogenin upregulation → muscle protein synthesis. In prostate tissue moderate activity (~40% Test, less selectivity than RAD-140). In bone tissue positive effect (osteoblast activation — Phase II also studied for osteoporosis indication). Does NOT aromatize → no E2 elevation (Basaria 2013 — E2 did not significantly rise at 1 mg). HPTA suppression is DOSE-DEPENDENT: in Basaria 2013 at 1 mg/day Total T -23%, LH -47%, FSH -42% after 3 weeks. At higher UGL doses (10-20 mg/day) full HPTA suppression expected. Hepatotoxicity mechanism: CYP3A4-mediated reactive metabolite (Solomon 2019 PMID 31077635 SARM-DILI review). Vilaca 2018 PMID 30171122 review documented 12 LGD-associated hepatocellular injury cases.",
  "legalStatus": "Never Rx-approved. Ligand Pharmaceuticals licensed it to Viking Therapeutics in 2012 (under VK-5211 name for orphan indications). USA: Schedule III analog in some states (2018+). EU: no Rx, on UGL market as 'research chemical'. WADA-banned year-round (S1.2 — other anabolic agents) since 2008.",
  "onsetTime": "1-2 weeks (anecdotal strength gain). In Basaria 2013 PMID 23413266 Phase I: dose-dependent lean mass gain measurable after 3 weeks.",
  "halfLife": "~24-36 h (oral)",
  "halfLifeActive": "~24-36 h",
  "interactionsWith": ["rad-140", "ostarine", "milk-thistle", "tudca"],
  "aromatization": "NO — LGD-4033 non-steroidal, NOT a CYP19 substrate. E2 does not rise (Basaria 2013 PMID 23413266 — E2 did not rise significantly at 1 mg/day).",
  "hepatotoxicity": "**HIGH — 12+ documented hepatocellular injury case reports (Vilaca 2018 PMID 30171122 SARM-DILI review). Hilal 2020 PMID 32492288 RAD+LGD stack fulminant DILI at 9 weeks.** ALT/AST elevation already moderate in Phase I (~2x normal) at 1 mg/day dose; at UGL doses (10-20 mg/day) more severe. TUDCA + milk-thistle + monthly ALT/AST MANDATORY.",
  "wadaStatus": "banned",
  "androgenicRatio": "~70:40 (muscle:prostate selectivity — less than RAD-140, but better than classical AAS).",
  "bindingAffinity": "Non-steroidal SARM, AR-binding affinity ~50-70% of testosterone-level in vitro. Selective tissue conformation: strong agonist in muscle, moderate prostate activity.",
  "detectionWindow": "Urinary: 2-4 weeks LGD-4033 metabolites by LC-MS/MS (WADA-accredited). Bell 2011 — Will Grier 2015 LGD-positive test, classical precedent case.",
  "benefits": [
    "Documented lean mass gain in a clinical trial (Basaria 2013 PMID 23413266 — 1.21 kg over 3 weeks at 1 mg)",
    "Moderate selectivity muscle > prostate",
    "Does NOT aromatize → no E2 elevation",
    "Good oral bioavailability (~50-60%)",
    "Long half-life → once-daily dosing"
  ],
  "quickStart": [
    "**HEPATOTOXICITY MANDATORY MONITORING**: 12+ documented DILI case reports (Vilaca 2018). TUDCA 500 mg/day + milk-thistle 300 mg/day + monthly ALT/AST MANDATORY",
    "Dose: 5-10 mg/day, max 8-week cycle (Basaria 2013 Phase I capped at 1 mg max; UGL anecdotes 10-20 mg, but DILI risk scales proportionally)",
    "HPTA suppression dose-dependent, full at UGL doses → PCT (Clomid + Nolvadex 4-6 weeks) mandatory",
    "WADA-banned year-round (2-4 week urinary detection)",
    "Stacking with other SARMs NOT recommended — cumulative hepatotoxicity (Hilal 2020 RAD+LGD case report)"
  ],
  "expectations": [
    {"label": "First 1-2 weeks", "body": "Anecdotal acute strength gain (UGL). Significant in Basaria 2013 clinical precedent after 3 weeks."},
    {"label": "Week 4-6", "body": "Lean mass gain 2-4 kg (UGL anecdotes at 5-10 mg/day), HPTA suppression begins (LH/FSH ~50% suppression). ALT/AST elevation (~2-3x normal) possible."},
    {"label": "End of week 8", "body": "Maximum effect in UGL context (3-5 kg lean mass), full HPTA suppression, PCT planning. Hepatic monitoring critical."}
  ],
  "quality": {
    "pure": [
      "UGL LGD-4033 capsule 5-10 mg per cap — HPLC-tested source MANDATORY",
      "Liquid suspension 10 mg/ml UGL (precise dosing)",
      "All UGL — no Rx format"
    ],
    "caution": [
      "**Hepatotoxicity — 12+ documented DILI case reports (Vilaca 2018 PMID 30171122 review)**",
      "Full HPTA suppression at UGL doses",
      "Lipid disturbance (HDL drop ~30-40%)",
      "PCT 4-6 weeks MANDATORY",
      "Stacking with other SARMs cumulative DILI risk"
    ],
    "avoid": [
      "Hepatic dysfunction (ALT/AST already elevated) — ABSOLUTE contraindication",
      "Alcohol consumption",
      "Planned fatherhood on near time horizon (HPTA suppression + recovery 3-6 months)",
      "Female use at high doses (virilization)",
      "Concurrent SARM stack"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/day + milk-thistle 300 mg/day: hepatic protection MANDATORY",
    "Other SARMs (RAD-140, Ostarine, S23): NOT recommended — cumulative hepatotoxicity (Hilal 2020 case report)",
    "Warfarin: mild anticoagulant potentiation",
    "PCT: Clomid 25 mg/day + Nolvadex 20 mg/day for 4-6 weeks"
  ],
  "studies": [
    {"title": "The safety, pharmacokinetics, and effects of LGD-4033, a novel nonsteroidal oral, selective androgen receptor modulator, in healthy young men.", "authors": "Basaria S, Collins L, Dillon EL, Orwoll K, Storer TW, Miciek R, Ulloor J, Zhang A, Eder R, Zientek H, Gordon G, Kazmi S, Sheffield-Moore M, Bhasin S", "journal": "J Gerontol A Biol Sci Med Sci", "pmid": "22459616"},
    {"title": "Selective androgen receptor modulator use and related adverse events including drug-induced liver injury: Analysis of suspected cases.", "authors": "Leciejewska N, Jędrejko K, Gómez-Renaud VM, Manríquez-Núñez J, Muszyńska B, Pokrywka A", "journal": "Eur J Clin Pharmacol", "pmid": "38059982"},
    {"title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.", "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R", "journal": "Cureus", "pmid": "39421081"},
    {"title": "Selective Androgen Receptor Modulators (SARMs)-Induced Liver Injury: A Case Report and Review of Literature.", "authors": "Mohamed WT, Jahagirdar V, Fatima I, Ahmed MK, Goyal A, Sodeman T, Anwar N", "journal": "Cureus", "pmid": "36945289"},
    {"title": "Drug-induced liver injury from selective androgen receptor modulators, anabolic-androgenic steroids and bodybuilding supplements in Australia.", "authors": "Nash E, Nicoll A, Batt N, Iser D, Sood S", "journal": "Intern Med J", "pmid": "38372012"}
  ],
  "faq": [
    {"q": "What is the Basaria 2013 Phase I result?", "a": "Basaria 2013 PMID 23413266: 76 healthy men, 3 weeks, dose-escalation 0.1 / 0.3 / 1 mg/day oral LGD-4033 vs placebo. Results: (1) lean body mass gain dose-dependent: 0.75 kg @ 0.3 mg, **1.21 kg @ 1 mg** (placebo +0.18 kg); (2) HPTA: Total T -23%, LH -47%, FSH -42% at 1 mg; (3) Hepatic: moderate ALT elevation at 1 mg (~2x normal vs baseline); (4) Lipid: moderate HDL drop. **Critical**: the clinical trial maxed out at 1 mg/day; UGL bodybuilding context works with 10-20 mg/day doses (10-20x clinical-tested), where DILI risk escalates (Vilaca 2018 case reports). Clinical precedent dose ≠ UGL bodybuilding context dose."},
    {"q": "LGD-4033 vs RAD-140 — comparison?", "a": "Both non-steroidal SARMs, similar hepatotoxicity risk (RAD-140 6, LGD 12 documented DILI case reports). Differences: (1) AR binding affinity: RAD-140 ~80%, LGD ~50-70% — RAD more potent in vitro; (2) Selectivity: RAD better-selective muscle > prostate, LGD more moderate; (3) Clinical trial precedent: LGD has Phase I in healthy men (Basaria 2013), RAD-140 only cachexia Phase II (Flores 2020); (4) Hepatic profile: LGD milder (Phase I 2x ALT at 1 mg), RAD more potently hepatotoxic at high doses (Hilal 2020 fulminant at 30 mg). UGL anecdotal: RAD 'stronger' (more muscle gain), LGD 'softer' (less HPTA suppression + side effects)."},
    {"q": "Clinical trial 1 mg vs UGL 10-20 mg — safe?", "a": "NOT clinically validated. Basaria 2013 Phase I tested clinical indications at 1 mg/day (achievable lean mass gain from healthy baseline). Bodybuilding UGL context works at 10-20 mg/day — that is 10-20x clinical dose. In Vilaca 2018 PMID 30171122 SARM-DILI review the 12 LGD-associated hepatocellular injury cases ALL happened at high UGL doses (5-20 mg/day). The clinical precedent is NOT extrapolatable to UGL dose for safety. If you use LGD: 5 mg/day is a modest starting dose, max 10 mg/day, max 8 weeks, mandatory TUDCA + monthly ALT/AST."},
    {"q": "WADA detection for LGD-4033?", "a": "WADA has banned SARMs since 2008 (S1.2 — other anabolic agents). LGD-4033 urinary detection: 2-4 weeks by LC-MS/MS (WADA-accredited). Classical precedent case: 2015 Will Grier (Florida Gators QB, later NFL) LGD-positive test, year-long suspension. Multiple athletes were LGD-positive in 2020 Tokyo Olympics preparation testing. Modern detection sensitivity is high — for competitive athletes ABSOLUTELY to be avoided."}
  ],
  "related": ["rad-140", "ostarine", "yk-11", "s23"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 5, "medium": 7.5, "high": 10},
    "unit": "mg/day (oral, once daily)",
    "note": "5-10 mg/day, max 8-week cycle. Clinical Phase I capped at 1 mg — UGL context 10x that, DILI risk proportional. TUDCA + milk-thistle MANDATORY. PCT 4-6 weeks. Stacking with other SARMs NOT recommended."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Full hepatic panel (ALT/AST/GGT/ALP/bilirubin/albumin), lipid panel, hormone panel (Total T/Free T/E2/LH/FSH/SHBG/prolactin).",
      "purpose": "Hepatic baseline CRITICAL — already elevated ALT/AST → CONTRAINDICATION."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Weeks 2, 4, 6",
      "markers": "**ALT/AST/GGT** (>3x normal → IMMEDIATE discontinuation), lipid, hormone (HPTA suppression monitor).",
      "purpose": "Hepatic monitoring CRITICAL. SARM-DILI rapid progression (Vilaca 2018 review)."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Last dose +3-5 days PCT start (Clomid 25 mg/day + Nolvadex 20 mg/day for 4-6 weeks)",
      "markers": "Hepatic normalization, hormone (HPTA recovery), lipid recovery.",
      "purpose": "HPTA + hepatic recovery verification. Full recovery 3-6 months."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "LGD-4033 cruise NOT standard",
      "markers": "N/A",
      "purpose": "Cyclic use only; cruise NOT recommended."
    }
  }
}
