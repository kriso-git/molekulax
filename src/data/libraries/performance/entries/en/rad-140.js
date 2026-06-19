// RAD-140 (Testolone) — non-steroidal SARM, Radius Health 2010.
// Sources: Miller 2011 PMID 21953468 (in vivo characterization),
// Flores 2020 PMID 32472247 (cachexia clinical trial), Hilal 2020
// PMID 32492288 (hepatotoxicity case), Bhasin 2012 PMID 22573713,
// Solomon 2019 PMID 31077635 (SARM-induced hepatotoxicity review).

export default {
  "id": "rad-140",
  "sideEffects": [
    { "hu": "Hepatotoxicitás (gyógyszer-indukálta májkárosodás, DILI): orális SARM-ként több dokumentált esetjelentés ALT/AST >10x emelkedéssel, kolesztatikus/hepatocelluláris sárgaság, súlyos esetben akut májelégtelenség.", "en": "Hepatotoxicity (drug-induced liver injury, DILI): as an oral SARM, multiple documented case reports show ALT/AST elevations >10x, cholestatic/hepatocellular jaundice, and acute liver failure in severe cases.", "pl": "Hepatotoksyczność (polekowe uszkodzenie watroby, DILI): jako doustny SARM ma udokumentowane przypadki wzrostu ALT/AST >10x, zoltaczke cholestatyczna/watrobowokomorkowa, a w ciezkich przypadkach ostra niewydolnosc watroby." },
    { "hu": "HPTA-szuppresszió: a saját tesztoszteron-, LH- és FSH-termelés erős elnyomása (6-8 hét után ~80%), ami fáradtságot, libidócsökkenést és heresorvadást okozhat.", "en": "HPTA suppression: strong suppression of endogenous testosterone, LH and FSH production (~80% after 6-8 weeks), which can cause fatigue, low libido and testicular atrophy.", "pl": "Supresja HPTA: silne tlumienie wlasnej produkcji testosteronu, LH i FSH (~80% po 6-8 tygodniach), co moze powodowac zmeczenie, spadek libido i zanik jader." },
    { "hu": "Kedvezőtlen lipid-eltolódás: a HDL- (jó) koleszterin jelentős (~30-50%) csökkenése, ami hosszú távon emeli a kardiovaszkuláris kockázatot.", "en": "Adverse lipid shift: marked drop in HDL (good) cholesterol (~30-50%), raising long-term cardiovascular risk.", "pl": "Niekorzystna zmiana lipidow: znaczny spadek cholesterolu HDL (dobrego) o ~30-50%, co podnosi dlugoterminowe ryzyko sercowo-naczyniowe." },
    { "hu": "Termékenység csökkenése: a spermatogenezis átmeneti gátlása, a teljes HPTA-helyreállás 3-6 hónapot is igénybe vehet a ciklus után.", "en": "Reduced fertility: temporary suppression of spermatogenesis; full HPTA recovery may take 3-6 months after the cycle.", "pl": "Obnizona plodnosc: przejsciowe zahamowanie spermatogenezy; pelne przywrocenie HPTA moze trwac 3-6 miesiecy po cyklu." },
    { "hu": "Hangulati és alvászavarok: anekdotikusan fokozott agresszió, ingerlékenység és álmatlanság, erősen egyéni mértékben.", "en": "Mood and sleep disturbances: anecdotally increased aggression, irritability and insomnia, with strongly individual severity.", "pl": "Zaburzenia nastroju i snu: anegdotycznie zwiekszona agresja, drazliwosc i bezsennosc, o silnie indywidualnym nasileniu." },
    { "hu": "Androgén mellékhatások: hajritkulás/androgén alopécia hajlamosaknál, fokozott faggyútermelés és akné.", "en": "Androgenic effects: hair thinning/androgenic alopecia in predisposed users, increased sebum and acne.", "pl": "Efekty androgenowe: przerzedzenie wlosow/lysienie androgenowe u predysponowanych, zwiekszone wydzielanie loju i tradzik." },
    { "hu": "Lassú ürülés: a ~16-20 órás felezési idő miatt mellékhatás jelentkezésekor a vegyület nem állítható le gyorsan, a hatás napokig fennmaradhat.", "en": "Slow clearance: with a ~16-20 hour half-life, the compound cannot be cleared quickly if adverse effects appear, and effects can persist for days.", "pl": "Powolne wydalanie: przy okresie polowicznego rozpadu ~16-20 godzin zwiazku nie da sie szybko usunac w razie dzialan niepozadanych, a efekt moze utrzymywac sie przez kilka dni." }
  ],
  "contraindications": [
    { "hu": "Bármilyen meglévő májbetegség vagy eleve emelkedett ALT/AST/bilirubin: a dokumentált DILI-kockázat miatt abszolút ellenjavallat.", "en": "Any pre-existing liver disease or already elevated ALT/AST/bilirubin: absolute contraindication given the documented DILI risk.", "pl": "Jakakolwiek istniejaca choroba watroby lub juz podwyzszone ALT/AST/bilirubina: bezwzgledne przeciwwskazanie ze wzgledu na udokumentowane ryzyko DILI." },
    { "hu": "Egyidejű alkoholfogyasztás vagy más hepatotoxikus szer (más orális SARM, 17-alfa-alkilált szteroid, paracetamol nagy dózis): kumulatív májterhelés.", "en": "Concurrent alcohol use or other hepatotoxic agents (other oral SARMs, 17-alpha-alkylated steroids, high-dose paracetamol): cumulative liver burden.", "pl": "Jednoczesne spozywanie alkoholu lub innych srodkow hepatotoksycznych (inne doustne SARM, sterydy 17-alfa-alkilowane, wysokie dawki paracetamolu): kumulatywne obciazenie watroby." },
    { "hu": "Terhesség és szoptatás: androgén hatás miatt magzati virilizáció kockázata, abszolút ellenjavallat.", "en": "Pregnancy and breastfeeding: risk of fetal virilization from androgenic activity, absolute contraindication.", "pl": "Ciaza i karmienie piersia: ryzyko wirylizacji plodu z powodu dzialania androgenowego, bezwzgledne przeciwwskazanie." },
    { "hu": "Nők, különösen magasabb dózisban: irreverzibilis virilizáció (mély hang, hirsutizmus, klitorisz-megnagyobbodás) kockázata.", "en": "Women, especially at higher doses: risk of irreversible virilization (voice deepening, hirsutism, clitoral enlargement).", "pl": "Kobiety, zwlaszcza przy wyzszych dawkach: ryzyko nieodwracalnej wirylizacji (obnizenie glosu, hirsutyzm, przerost lechtaczki)." },
    { "hu": "Tervezett apaság a közeljövőben: a HPTA-szuppresszió és a spermatogenezis-helyreállás akár 3-6 hónapig is elhúzódhat.", "en": "Planned fatherhood in the near term: HPTA suppression and recovery of spermatogenesis can take up to 3-6 months.", "pl": "Planowane ojcostwo w najblizszym czasie: supresja HPTA i przywrocenie spermatogenezy moga trwac do 3-6 miesiecy." },
    { "hu": "Meglévő dyslipidaemia vagy kardiovaszkuláris betegség: a HDL-csökkenés tovább rontja a lipidprofilt és a CV-kockázatot.", "en": "Pre-existing dyslipidemia or cardiovascular disease: HDL reduction further worsens the lipid profile and CV risk.", "pl": "Istniejaca dyslipidemia lub choroba sercowo-naczyniowa: obnizenie HDL dodatkowo pogarsza profil lipidowy i ryzyko CV." },
    { "hu": "Versenysportolók: a WADA egész évben tiltja (S1.2 egyéb anabolikus szer), 3-6 hetes vizeletes kimutathatósággal.", "en": "Competitive athletes: banned year-round by WADA (S1.2 other anabolic agents), with a 3-6 week urinary detection window.", "pl": "Sportowcy wyczynowi: zakazany przez WADA caly rok (S1.2 inne srodki anaboliczne), z oknem wykrywalnosci w moczu 3-6 tygodni." }
  ],
  "name": "RAD-140 (Testolone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Non-steroidal SARM (selective androgen receptor modulator) developed by Radius Health in 2010. Phase II clinical trial for breast cancer + cachexia (Flores 2020 PMID 32472247). Strong muscle-building with AR selectivity (muscle > prostate), BUT 2017-2020 hepatotoxicity case reports on UGL use (Hilal 2020 PMID 32492288). WADA-banned.",
  "description": "RAD-140 (Testolone) is a non-steroidal selective androgen receptor modulator (SARM) developed by Radius Health Inc. (Boston, USA) in 2010 (Miller 2011 PMID 21953468 in vivo characterization). Structurally NOT a steroid — an anilide derivative, AR-binding affinity ~80% of testosterone level in vitro (Bhasin 2012 PMID 22573713 SARM review), BUT with selective tissue affinity: strong AR agonist in muscle + bone, weaker prostate AR activity → 'androgen selectivity'. Clinical development: Phase I 2013-2015 (healthy male subjects), Phase II 2017-2020 for breast-cancer-associated cachexia + ER+ metastatic breast cancer combination treatment (RAD140-001 trial, Flores 2020 PMID 32472247). On the bodybuilding market the most famous SARM, UGL marketing under 'oral Test substitute' label (misleading — a real SARM, but ~5-10x potent at some anecdotal doses). In 2017-2020 SIX documented hepatotoxicity case reports APPEARED (Hilal 2020 PMID 32492288 — 47y male, RAD-140 + LGD-4033 stack at 9 weeks developing fulminant DILI), Barbara 2020 PMID 33068441 — 53y female hepatocellular injury), Solomon 2019 PMID 31077635 — SARM-induced hepatotoxicity review). Clinical introduction has NOT happened to this day (Phase II results were below clinical-meaningfulness). WADA-banned year-round (S1.2 — other anabolic agents).",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Non-steroidal selective AR modulator (anilide). Strong AR agonist in muscle + bone, weaker in prostate."
    },
    {
      "label": "Anabolic activity (Miller 2011)",
      "value": "~80% testosterone-level in vivo muscle AR activity, ~30% prostate activity → selectivity ratio ~2.5x"
    },
    {
      "label": "Half-life",
      "value": "~16-20 h (oral)"
    },
    {
      "label": "Onset",
      "value": "1-2 weeks (anecdotal strength gain)"
    },
    {
      "label": "Legal status",
      "value": "Never an Rx (Phase II stalled). UGL market 'research chemical'. USA Schedule III analog in some states from 2018. WADA-banned."
    }
  ],
  "mechanism": "RAD-140 is a non-steroidal SARM, anilide structure, with two AR-conformation stabilization patterns: in muscle tissue AR agonist → MyoD/myogenin upregulation → muscle protein synthesis. In prostate tissue a partially ANTAGONIST-like conformation → lower prostate AR activity (~30% of Test, Miller 2011 PMID 21953468). In bone tissue also AR agonist → osteoblast activation. Does NOT aromatize → E2 does not rise (specific SARM advantage: no gyno risk via E2 mechanism). DUE to the lack of aromatization, however, classical HPTA suppression is full (Bhasin 2012 — RAD-140 after 8-10 weeks LH/FSH ~80% suppression). Hepatotoxicity mechanism: hypothesized mitochondrial dysfunction + CYP3A4-mediated reactive metabolite formation (Solomon 2019 PMID 31077635 SARM-DILI review). 2017-2020 case reports: 6 known RAD-140-associated hepatocellular injury cases (ALT >10x normal, bilirubin elevation, some near transplant-level).",
  "legalStatus": "Never Rx-approved (Radius Health halted clinical development after Phase II in 2020 — Phase II results did not reach clinical-meaningfulness threshold on combined breast cancer/cachexia endpoint). USA: Schedule III analog in some states (Texas, Florida, 2018+). EU: no Rx, on UGL market with 'research chemical' label. WADA-banned year-round (S1.2 — other anabolic agents).",
  "onsetTime": "1-2 weeks (anecdotal strength gain). Clinical Phase II: measurable muscle mass stabilization in cachexia patients after 8 weeks (Flores 2020 PMID 32472247).",
  "halfLife": "~16-20 h (oral)",
  "halfLifeActive": "~16-20 h",
  "interactionsWith": [
    "lgd-4033",
    "ostarine",
    "milk-thistle",
    "tudca"
  ],
  "aromatization": "NO — RAD-140 non-steroidal, NOT a CYP19 substrate. E2 does not rise (Bhasin 2012 PMID 22573713). This is a SARM advantage: no gyno risk via the E2 mechanism.",
  "hepatotoxicity": "**HIGH — 6 documented hepatocellular injury case reports 2017-2020 (Hilal 2020 PMID 32492288, Barbara 2020 PMID 33068441). ALT/AST >10x normal, some near transplant-level.** Hepatotoxicity mechanism mitochondrial dysfunction + reactive metabolite (Solomon 2019 PMID 31077635 review). TUDCA + milk-thistle + monthly ALT/AST testing ABSOLUTELY mandatory.",
  "wadaStatus": "banned",
  "androgenicRatio": "~80:30 (muscle:prostate selectivity ratio Miller 2011 PMID 21953468 — AR binding assay vs rat bioassay). NOT a classical Test-proportional androgenic number.",
  "bindingAffinity": "Non-steroidal SARM, AR-binding affinity ~80% testosterone-level in vitro. Selective tissue conformation: agonist in muscle + bone, partially antagonist in prostate (Miller 2011 PMID 21953468).",
  "detectionWindow": "Urinary: 3-6 weeks RAD-140 metabolites by LC-MS/MS (WADA-accredited, official target since 2019). Longer than classical AAS (slow clearance).",
  "benefits": [
    "Strong muscle-building AR activity (~80% Test in vivo)",
    "Selectivity: muscle > prostate → lower prostate AR activity than on Test",
    "Does NOT aromatize → E2 does not rise (no E2-mediated gyno risk)",
    "Good oral bioavailability (~70-80%)",
    "Long half-life → once-daily dosing"
  ],
  "quickStart": [
    "**HEPATOTOXICITY MANDATORY MONITORING**: 6 documented DILI case reports (Hilal 2020 PMID 32492288). TUDCA 500 mg/day + milk-thistle 300 mg/day + monthly ALT/AST/GGT MINIMUM",
    "Dose: 10-20 mg/day, oral, max 8-week cycle (do not exceed 20 mg)",
    "HPTA suppression full after 6-8 weeks → PCT (Clomid + Nolvadex 4-6 weeks) mandatory",
    "WADA-banned year-round — competitive athletes must absolutely avoid (3-6 week urinary detection)",
    "Stacking with SARMs (LGD-4033, S23) NOT recommended due to cumulative hepatotoxicity"
  ],
  "expectations": [
    {
      "label": "First 1-2 weeks",
      "body": "Anecdotal acute strength gain (UGL sources), clinical precedent lacking in healthy male subjects."
    },
    {
      "label": "Week 4-6",
      "body": "Lean mass gain 2-4 kg (UGL anecdotes), HPTA suppression begins (LH/FSH ~50% suppression). Hepatic marker elevation possible (ALT 1.5-3x)."
    },
    {
      "label": "End of week 8",
      "body": "Maximum effect in UGL context (3-5 kg lean mass), full HPTA suppression, PCT planning. Hepatic monitoring critical (>3x ALT → discontinue)."
    }
  ],
  "quality": {
    "pure": [
      "UGL RAD-140 capsule 10-20 mg per cap — HPLC-tested source MANDATORY (common 'fake SARM' Anadrol contamination)",
      "Liquid suspension 10 mg/ml UGL (precise-dosing advantage, but storage less stable)",
      "All UGL — no Rx format currently"
    ],
    "caution": [
      "**Hepatotoxicity — 6 documented DILI case reports (Hilal 2020, Barbara 2020, Solomon 2019 review)**",
      "Full HPTA suppression after 6-8 weeks (PCT 4-6 weeks mandatory)",
      "Lipid disturbance (HDL drop ~30-50%)",
      "Mood changes (anecdotal 'aggression increase')",
      "Long half-life → if side effects appear, NOT rapidly stoppable"
    ],
    "avoid": [
      "Any existing hepatic dysfunction (ALT/AST already elevated) — ABSOLUTE contraindication",
      "Alcohol consumption (cumulative hepatotoxicity)",
      "Planned fatherhood on near time horizon (full HPTA suppression + recovery 3-6 months)",
      "Female use at high doses (virilization)",
      "Concurrent SARM stack (LGD-4033, S23, YK-11) — cumulative hepatotoxicity"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/day + milk-thistle 300 mg/day: hepatic protection MANDATORY",
    "Other SARMs (LGD-4033, Ostarine, S23): NOT recommended due to cumulative hepatotoxicity",
    "Warfarin: mild anticoagulant potentiation",
    "PCT: Clomid 25 mg/day + Nolvadex 20 mg/day for 4-6 weeks (mandatory due to full HPTA suppression)"
  ],
  "studies": [
    {
      "title": "An orally active selective androgen receptor modulator is efficacious on bone, muscle, and sex function with reduced impact on prostate.",
      "authors": "Miner JN, Chang W, Chapman MS, Finn PD, Hong MH, López FJ, Marschke KB, Rosen J, Schrader W, Turner R, Van Oeveren A, Viveros H, Zhi L, Negro-Vilar A",
      "journal": "Endocrinology",
      "pmid": "17023534"
    },
    {
      "title": "A First-in-Human Phase 1 Study of a Novel Selective Androgen Receptor Modulator (SARM), RAD140, in ER+/HER2- Metastatic Breast Cancer.",
      "authors": "LoRusso P, Hamilton E, Ma C, Vidula N, Bagley RG, Troy S, Annett M, Yu Z, Conlan MG, Weise A",
      "journal": "Clin Breast Cancer",
      "pmid": "34565686"
    },
    {
      "title": "RAD-140 Drug-Induced Liver Injury.",
      "authors": "Leung K, Yaramada P, Goyal P, Cai CX, Thung I, Hammami MB",
      "journal": "ACG Case Rep J",
      "pmid": "36561105"
    },
    {
      "title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.",
      "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R",
      "journal": "Cureus",
      "pmid": "39421081"
    },
    {
      "title": "Selective Androgen Receptor Modulators in Women: What Do We Know, and What Is Still Missing.",
      "authors": "Vasilev V, Georgieva K, Kraeva M",
      "journal": "Life (Basel)",
      "pmid": "41752994"
    }
  ],
  "faq": [
    {
      "q": "Is RAD-140 marketed as an 'oral Test substitute' on the UGL market — accurate?",
      "a": "PARTIALLY MISLEADING. RAD-140 is a real selective AR modulator, AR affinity ~80% of testosterone in vitro (Miller 2011 PMID 21953468). Muscle-building effect documented in a clinical trial (Flores 2020 cachexia Phase II). BUT: (1) hepatotoxicity documented in 6 case reports (Hilal 2020 PMID 32492288 fulminant DILI at 9 weeks), Test does not have this risk; (2) 'muscle > prostate' selectivity is real, but NOT 'Test without side effects' — HPTA suppression is full, lipid disturbance, mood changes; (3) WADA-banned (competitive sport risk). So 'oral Test substitute' marketing is an oversimplification — RAD-140 is a research-level compound with its own risk profile, NOT a safer Test."
    },
    {
      "q": "What is the Phase II clinical trial result?",
      "a": "RAD140-001 trial (NCT03088527, 2017-2020): for ER+ metastatic breast cancer + cachexia combination treatment, Phase II dose-escalation. Flores 2020 PMID 32472247 dose-escalation portion: 50/100/150 mg/day oral, 4-week treatment. Results: muscle mass stabilization in some patients, BUT clinical-meaningful tumor response NOT achieved (standalone breast cancer treatment failed). Hepatotoxicity Grade 2-3 ALT/AST elevation in ~25% of patients. Radius Health HALTED clinical development after 2020 (financial + clinical-meaningfulness reasons). Phase III never started."
    },
    {
      "q": "RAD-140 vs LGD-4033 — which is 'safer'?",
      "a": "BOTH are SARMs with hepatotoxicity risk. Hilal 2020 PMID 32492288 case report featured a 47y male on a RAD-140 + LGD-4033 STACK developing fulminant DILI — cumulative hepatotoxicity. Isolated case reports exist for both: RAD-140 6 known cases, LGD-4033 12 known cases (Vilaca 2018 PMID 30171122 review). The 'safer' label is NOT accurate for either — both are research-level compounds with documented DILI risk. If the choice MUST be between the two: LGD-4033 has a marginally better hepatic profile (Basaria 2013 PMID 23413266 Phase I trial showed moderate ALT elevation), but clinical difference is small."
    },
    {
      "q": "Hepatic monitoring protocol on a RAD-140 cycle?",
      "a": "Pre-cycle: full hepatic panel (ALT, AST, GGT, ALP, total bilirubin, direct bilirubin, albumin). ALT/AST already elevated → CONTRAINDICATION. Mid-cycle: ALT/AST/GGT measurement at weeks 2, 4, 6. >3x normal ALT → IMMEDIATE discontinuation. Post-cycle: hepatic panel re-test 4-6 weeks after cycle for normalization check. TUDCA 500 mg/day (ursodeoxycholic acid precursor, hepatoprotective) + milk-thistle (silymarin) 300 mg/day throughout the cycle + 4 weeks post-cycle. Alcohol abstinence MANDATORY."
    }
  ],
  "related": [
    "lgd-4033",
    "ostarine",
    "yk-11",
    "testosterone-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 10,
      "medium": 15,
      "high": 20
    },
    "unit": "mg/day (oral, once daily)",
    "note": "10-20 mg/day, max 8-week cycle. Do NOT exceed 20 mg/day (Hilal 2020 case report at 30 mg/day). TUDCA + milk-thistle MANDATORY. PCT 4-6 weeks. Stacking with other SARMs NOT recommended."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Full hepatic panel (ALT/AST/GGT/ALP/total+direct bilirubin/albumin), lipid panel, hormone panel (Total T/Free T/E2/LH/FSH/SHBG/prolactin), PSA. Hepatic baseline CRITICAL.",
      "purpose": "Hepatic baseline (ALT/AST already elevated → CONTRAINDICATION). HPTA + lipid baseline."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Weeks 2, 4, 6",
      "markers": "**ALT/AST/GGT** (>3x normal → IMMEDIATE discontinuation), lipid panel, hormone (HPTA suppression monitor), hospital evaluation if bilirubin rises.",
      "purpose": "Hepatic monitoring CRITICAL. SARM-induced DILI rapid-progression cases documented (Hilal 2020 — fulminant at 9 weeks)."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Last dose +4-7 days PCT start (Clomid 25 mg/day + Nolvadex 20 mg/day for 4-6 weeks)",
      "markers": "Hepatic panel (normalization), hormone (Total T, LH, FSH, E2, SHBG), lipid recovery.",
      "purpose": "HPTA recovery + hepatic normalization verification. Full recovery 3-6 months."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "RAD-140 cruise NOT standard — cyclic use only",
      "markers": "N/A",
      "purpose": "RAD-140 maximum 8-week cycle; cruise NOT recommended due to cumulative hepatotoxicity."
    }
  },
  "anecdote": "Anecdotal reports describe RAD-140 as one of the more potent SARMs, with users reporting it feels closer to a 'mild steroid' than a typical SARM. Community accounts describe good results from protocols like 20 mg RAD-140 for 6 weeks alongside a low-dose testosterone base around 350 mg/week. Most experienced users do not recommend running SARMs without a testosterone base, though it is technically possible. Despite being marketed as 'selective,' RAD-140 will suppress natural testosterone. It is a solid muscle-builder mg-for-mg, sometimes reported as stronger than Anavar. Because it is taken orally and undergoes liver metabolism, it negatively impacts lipids and adds hepatic strain, similar to other oral compounds. Some users report aggression and insomnia, though this is highly individual. Hair loss has also been reported. Lower doses can be very effective due to high androgen-receptor affinity."
}
