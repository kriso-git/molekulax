// S4 (Andarine, GTx-007) – non-steroidal SARM with retinal vision side
// effects. Sources: Gao 2005 PMID 16270235 (S-4 in vivo), Kim 2005
// PMID 16080187 (selective AR), Marhefka 2004 PMID 15267281 (vision),
// Dalton 2011 PMID 21674508, Solomon 2019 PMID 31077635 (SARM-DILI).

export default {
  "id": "s4",
  "sideEffects": [
    { "hu": "Dózisfüggő sárga látás (yellow tint vision): kék fény-percepció tompul, a szín-paletta a sárgás-zöld felé tolódik. UGL-felhasználók kb. 30%-a tapasztalja 50+ mg/nap dózison (retinális opszin-binding, Marhefka 2004).", "en": "Dose-dependent yellow tint vision: blue-light perception dulls and the color palette shifts toward yellow-green. Reported by roughly 30% of users at 50+ mg/day (retinal opsin binding, Marhefka 2004).", "pl": "Zalezne od dawki zolte widzenie (yellow tint vision): percepcja swiatla niebieskiego slabnie, paleta kolorow przesuwa sie ku zolto-zielonej. Zglaszane przez okolo 30% uzytkownikow przy 50+ mg/dobe (wiazanie z opsyna siatkowki, Marhefka 2004)." },
    { "hu": "Éjszakai vakság (night blindness) magas dózison (>75 mg/nap), a felhasználók kb. 10-20%-ánál. Rúd-opszin érintettség, csökkent gyenge-fényben látás. Reverzibilis a leállítás után 4-6 héten belül.", "en": "Night blindness at high doses (>75 mg/day) in roughly 10-20% of users, due to rod-opsin involvement and reduced low-light vision. Reversible within 4-6 weeks after discontinuation.", "pl": "Slepota nocna przy wysokich dawkach (>75 mg/dobe) u okolo 10-20% uzytkownikow, z powodu zajecia opsyny precikow i pogorszonego widzenia przy slabym swietle. Odwracalna w ciagu 4-6 tygodni po odstawieniu." },
    { "hu": "HPTA-szuppresszió (csökkent endogén tesztoszteron, LH/FSH): mérsékeltebb mint LGD-4033 vagy RAD-140 esetén a rövid (~4 h) felezési idő miatt, de NEM nulla, PCT általában szükséges.", "en": "HPTA suppression (lowered endogenous testosterone, LH/FSH): milder than with LGD-4033 or RAD-140 because of the short (~4 h) half-life, but not zero, PCT is usually needed.", "pl": "Supresja HPTA (obnizony endogenny testosteron, LH/FSH): lagodniejsza niz przy LGD-4033 lub RAD-140 ze wzgledu na krotki (~4 h) okres poltrwania, ale nie zerowa, PCT zwykle konieczne." },
    { "hu": "Kedvezőtlen lipidprofil-eltolódás: HDL-koleszterin csökkenése, a SARM-osztályra jellemzően. A lipid-zavar S4-en mérsékelt, de monitorozandó.", "en": "Adverse lipid shift: drop in HDL cholesterol, typical of the SARM class. Lipid disturbance is moderate on S4 but should be monitored.", "pl": "Niekorzystna zmiana profilu lipidowego: spadek cholesterolu HDL, typowy dla klasy SARM. Zaburzenie lipidowe na S4 jest umiarkowane, ale wymaga monitorowania." },
    { "hu": "Hepatotoxicitás (májkárosodás): mérsékelt, a rövid felezés gyorsabb reaktív-metabolit-clearance miatt enyhébb mint RAD/LGD esetén, de NEM nulla, a SARM-asszociált gyógyszer-indukált májkárosodás (DILI) S4-nél is dokumentált.", "en": "Hepatotoxicity (liver injury): moderate, milder than with RAD/LGD due to faster reactive-metabolite clearance from the short half-life, but not zero, SARM-associated drug-induced liver injury (DILI) is documented with S4 too.", "pl": "Hepatotoksycznosc (uszkodzenie watroby): umiarkowana, lagodniejsza niz przy RAD/LGD dzieki szybszemu klirensowi reaktywnych metabolitow z krotkiego okresu poltrwania, ale nie zerowa, polekowe uszkodzenie watroby (DILI) zwiazane z SARM udokumentowano takze przy S4." },
    { "hu": "Virilizáció nőknél magasabb dózison: mély hang, fokozott szőrnövekedés, akne, menstruációs zavar. Egyes androgén jellegű hatások (pl. hangmélyülés) maradandóak lehetnek.", "en": "Virilization in women at higher doses: voice deepening, increased hair growth, acne, menstrual disruption. Some androgenic effects (e.g. voice changes) can be permanent.", "pl": "Wirylizacja u kobiet przy wyzszych dawkach: obnizenie glosu, nasilony wzrost owlosienia, tradzik, zaburzenia miesiaczki. Niektore efekty androgenne (np. zmiany glosu) moga byc trwale." },
    { "hu": "Compliance- és napi ingadozás-rizikó: a rövid (~4 h) felezés miatt napi 2-3x adagolás szükséges, a kihagyott adagok instabil hatást és kiszámíthatatlan mellékhatás-megjelenést okozhatnak.", "en": "Compliance and daily-fluctuation risk: the short (~4 h) half-life requires 2-3 doses per day, missed doses cause unstable effect and unpredictable onset of side effects.", "pl": "Ryzyko zwiazane z compliance i wahaniami dobowymi: krotki (~4 h) okres poltrwania wymaga 2-3 dawek dziennie, pominiete dawki powoduja niestabilne dzialanie i nieprzewidywalne pojawianie sie dzialan niepozadanych." }
  ],
  "contraindications": [
    { "hu": "Meglévő szembetegség vagy látászavar (glaukóma, retinopátia, retinális/opszin-érintettség): ABSZOLÚT kontraindikáció a S4 retinális opszin-binding okozta vizuális mellékhatása miatt.", "en": "Pre-existing eye disease or visual disorder (glaucoma, retinopathy, retinal/opsin involvement): absolute contraindication because of S4's retinal opsin-binding visual side effect.", "pl": "Istniejaca choroba oczu lub zaburzenie widzenia (jaskra, retinopatia, zajecie siatkowki/opsyny): bezwzgledne przeciwwskazanie ze wzgledu na zaburzenia widzenia wynikajace z wiazania S4 z opsyna siatkowki." },
    { "hu": "Olyan foglalkozás, ahol az éjszakai látás kritikus (sofőr, pilóta, gépkezelő): az éjszakai vakság és sárga látás rizikója balesetveszélyt jelent.", "en": "Occupations where night vision is critical (driver, pilot, machine operator): the risk of night blindness and yellow vision creates an accident hazard.", "pl": "Zawody, w ktorych widzenie nocne jest krytyczne (kierowca, pilot, operator maszyn): ryzyko slepoty nocnej i zoltego widzenia stwarza zagrozenie wypadkiem." },
    { "hu": "Terhesség és szoptatás: androgén hatás magzati virilizációt okozhat, abszolút kerülendő.", "en": "Pregnancy and breastfeeding: androgenic activity can cause fetal virilization, absolutely to be avoided.", "pl": "Ciaza i karmienie piersia: dzialanie androgenne moze powodowac wirylizacje plodu, bezwzglednie unikac." },
    { "hu": "Tervezett apaság vagy meglévő szubfertilitás: HPTA-szuppresszió átmenetileg rontja a spermatogenezist, a recovery 2-3 hónapot vehet igénybe.", "en": "Planned fatherhood or existing subfertility: HPTA suppression transiently impairs spermatogenesis, recovery can take 2-3 months.", "pl": "Planowane ojcostwo lub istniejaca subplodnosc: supresja HPTA przejsciowo uposledza spermatogeneze, powrot moze trwac 2-3 miesiace." },
    { "hu": "Meglévő májbetegség vagy emelkedett májenzimek: a SARM-asszociált hepatotoxicitás rizikóját fokozza.", "en": "Pre-existing liver disease or elevated liver enzymes: increases the risk of SARM-associated hepatotoxicity.", "pl": "Istniejaca choroba watroby lub podwyzszone enzymy watrobowe: zwieksza ryzyko hepatotoksycznosci zwiazanej z SARM." },
    { "hu": "Versenysport WADA-szabályok alatt: az S4 egész évben tiltott (S1.2), a vizeletből 1-2 hétig kimutatható, a gyorsabb clearance nem nyújt rejtekhelyet.", "en": "Competitive sport under WADA rules: S4 is banned year-round (S1.2), detectable in urine for 1-2 weeks, the faster clearance offers no hiding place.", "pl": "Sport wyczynowy pod przepisami WADA: S4 jest zakazany przez caly rok (S1.2), wykrywalny w moczu przez 1-2 tygodnie, szybszy klirens nie daje schronienia." },
    { "hu": "Dyslipidaemia vagy szív-érrendszeri kockázat: a HDL-csökkenés rontja a lipidprofilt, fokozott monitorozás vagy kerülés indokolt.", "en": "Dyslipidemia or cardiovascular risk: the HDL drop worsens the lipid profile, increased monitoring or avoidance is warranted.", "pl": "Dyslipidemia lub ryzyko sercowo-naczyniowe: spadek HDL pogarsza profil lipidowy, wskazane zwiekszone monitorowanie lub unikanie." }
  ],
  "name": "S4 (Andarine, GTx-007)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Non-steroidal SARM (Andarine, GTx-007), GTx Inc 2005. UNIQUE side effect: dose-dependent YELLOW VISION and night blindness (Marhefka 2004 PMID 15267281 – retinal opsin binding). On the bodybuilding market a 'fat-loss + cutting' SARM reputation. WADA-banned.",
  "description": "S4 (Andarine, GTx-007) is a non-steroidal selective androgen receptor modulator (SARM) developed by GTx Inc in 2005 (Gao 2005 PMID 16270235 in vivo characterization). Structurally an aryl-propionamide derivative (NOT a steroid), AR-binding affinity ~70% of testosterone level in vitro (Kim 2005 PMID 16080187). Unique side effect: Marhefka 2004 PMID 15267281 showed that the S4 molecule also binds to retinal opsins (photon-sensing pigments) – dose-dependent SIDE EFFECTS: (1) yellow vision (yellow tint vision), classically with yellowish-green color emphasis, blue dulling; (2) night blindness at high doses. Both effects are REVERSIBLE within 4-6 weeks of stopping S4. Clinical development: Phase I 2007, Phase II 2008-2010 for BPH (benign prostatic hyperplasia) + cachexia indications – Phase II results were below moderate clinical-meaningfulness. After 2010 GTx focused clinical development on Ostarine, S4 deprioritized. On the bodybuilding market a 'fat-loss + cutting SARM' reputation (anecdotal low water retention + relatively moderate HPTA suppression + the vision side effect as 'unique' identifier). Hepatotoxicity risk lower than RAD/LGD (shorter half-life → reactive metabolite clearance faster), but NOT zero. WADA-banned year-round (S1.2).",
  "keyInfo": [
    {"label": "Mechanism", "value": "Non-steroidal selective AR modulator + UNIQUE retinal opsin binding (visual side effect)"},
    {"label": "Anabolic activity (Gao 2005)", "value": "In rat bioassay anabolic activity ~60-70% Test-level (in vivo)"},
    {"label": "Half-life", "value": "~4 h (oral, SHORT – requires 2-3x daily dosing)"},
    {"label": "Onset", "value": "1-2 weeks"},
    {"label": "Legal status", "value": "Never an Rx (GTx deprioritized after Phase II in 2010). UGL 'research chemical'. WADA-banned S1.2."}
  ],
  "mechanism": "S4 is a non-steroidal SARM, aryl-propionamide structure. Selective AR agonist in muscle + bone tissue (Gao 2005 PMID 16270235 in vivo rat bioassay). Anabolic activity ~60-70% testosterone (in vivo). Prostate activity minimal. Does NOT aromatize → no E2 elevation. HPTA suppression moderate (due to short half-life cumulative suppression smaller than on LGD/RAD, Gao 2005). UNIQUE SIDE EFFECT: Marhefka 2004 PMID 15267281 showed that the S4 molecule binds to retinal opsins (CCR2 receptor + opsin-pigment interaction). Clinical consequence: dose-dependent yellow vision (~30-50% of UGL users at 50+ mg/day experience this) and night blindness (about 10-20% of users at >75 mg). Both reversible within 4-6 weeks of stopping S4. Hepatotoxicity moderate – short half-life (~4 h) means faster reactive-metabolite clearance, less severe than RAD/LGD.",
  "legalStatus": "Never Rx-approved. After GTx Inc Phase II BPH + cachexia 2010 switched to Ostarine, deprioritizing S4. USA: Schedule III analog in some states (2018+). EU: no Rx. WADA-banned year-round (S1.2 – other anabolic agents).",
  "onsetTime": "1-2 weeks (anecdotal + Gao 2005 in vivo)",
  "halfLife": "~4 h (oral, SHORT)",
  "halfLifeActive": "~4 h",
  "interactionsWith": ["rad-140", "lgd-4033", "ostarine", "milk-thistle"],
  "aromatization": "NO – non-steroidal, NOT a CYP19 substrate.",
  "hepatotoxicity": "Moderate – short half-life (~4 h) makes reactive-metabolite clearance faster than RAD/LGD. NOT zero – Solomon 2019 SARM-DILI review documented 1 S4-associated hepatocellular injury case.",
  "wadaStatus": "banned",
  "androgenicRatio": "~65:20 (muscle:prostate selectivity, Gao 2005 PMID 16270235 rat bioassay)",
  "bindingAffinity": "Non-steroidal SARM, AR binding ~70% testosterone-level in vitro (Kim 2005 PMID 16080187). UNIQUE: retinal opsin binding (Marhefka 2004 PMID 15267281) → visual side-effect mechanism.",
  "detectionWindow": "Urinary: 1-2 weeks S4 metabolites by LC-MS/MS (WADA-accredited). Shorter than RAD/LGD due to faster clearance.",
  "benefits": [
    "Classic 'cutting SARM' reputation (lower water retention than classical AAS)",
    "Moderate HPTA suppression (short half-life)",
    "Hepatotoxicity risk lower than RAD/LGD",
    "Anecdotal 'fat-loss + lean mass' combination",
    "Clinical precedent (Phase II BPH + cachexia)"
  ],
  "quickStart": [
    "VISUAL SIDE EFFECT MONITORING: if yellow vision or night blindness appears, dose reduction or discontinuation. Effect reversible 4-6 weeks.",
    "Dose: 25-50 mg/day (split 2-3x daily due to short half-life), max 6-8 week cycle",
    "Stackable with other SARMs or classical 'cutting' steroids (anecdotal protocol, NO clinical precedent)",
    "WADA-banned year-round (1-2 week urinary detection – faster clearance)",
    "Hepatic monitoring (monthly ALT/AST) even though risk is more moderate"
  ],
  "expectations": [
    {"label": "First 1-2 weeks", "body": "Anecdotal strength gain + 'leaner look' subjective UGL reports. Visual side effect NOT yet expected (50+ mg dose threshold higher)."},
    {"label": "Week 3-4", "body": "Lean mass gain 1-2 kg (UGL anecdotes), fat loss acceleration. Yellow vision may start at 50+ mg/day (~30% of users)."},
    {"label": "End of week 6-8", "body": "Maximum effect in UGL context. If visual side effect appeared, recovery 4-6 weeks after discontinuation. PCT 4 weeks."}
  ],
  "quality": {
    "pure": [
      "UGL S4 / Andarine capsule 25-50 mg per cap – HPLC-tested source mandatory",
      "Liquid suspension 25 mg/ml UGL",
      "All UGL – no Rx format"
    ],
    "caution": [
      "Visual side effects: yellow vision (~30%) + night blindness (~10-20%) dose-dependent (Marhefka 2004)",
      "Moderate HPTA suppression (PCT 4 weeks)",
      "Moderate hepatotoxicity (1 documented DILI case Solomon 2019)",
      "Short half-life → requires 2-3x daily dosing (compliance risk)",
      "Moderate lipid disturbance"
    ],
    "avoid": [
      "Pre-existing visual disorders (glaucoma, retinopathy) – ABSOLUTE contraindication",
      "Driver / pilot occupation (night blindness risk)",
      "High dose (>75 mg/day)",
      "Planned fatherhood (HPTA suppression + recovery 2-3 months)",
      "Female use at high doses (virilization)"
    ]
  },
  "interactions": [
    "TUDCA + milk-thistle: hepatic protection recommended",
    "Other SARMs: NOT recommended (cumulative hepatotoxicity + visual effect overlap questionable)",
    "Cutting steroids (Winstrol, Anavar): anecdotal UGL stack, no clinical precedent",
    "PCT: Clomid 25 mg/day + Nolvadex 20 mg/day for 4 weeks"
  ],
  "studies": [
    {"title": "Pharmacokinetics of S-3-(4-acetylamino-phenoxy)-2-hydroxy-2-methyl-N-(4-nitro-3-trifluoromethyl-phenyl)-propionamide in rats, a non-steroidal selective androgen receptor modulator.", "authors": "Kearbey JD, Wu D, Gao W, Miller DD, Dalton JT", "journal": "Xenobiotica", "pmid": "15204699"},
    {"title": "The para substituent of S-3-(phenoxy)-2-hydroxy-2-methyl-N-(4-nitro-3-trifluoromethyl-phenyl)-propionamides is a major structural determinant of in vivo disposition and activity of selective androgen receptor modulators.", "authors": "Kim J, Wu D, Hwang DJ, Miller DD, Dalton JT", "journal": "J Pharmacol Exp Ther", "pmid": "15987833"},
    {"title": "Design, synthesis, and biological characterization of metabolically stable selective androgen receptor modulators.", "authors": "Marhefka CA, Gao W, Chung K, Bell W, Wu D, Yang HM, Joseph JT, Bohl C, Mustafa S, Miller DD, Dalton JT", "journal": "J Med Chem", "pmid": "14761201"},
    {"title": "Selective Androgen Receptor Modulators (SARMs)-Induced Liver Injury: A Case Report and Review of Literature.", "authors": "Mohamed WT, Jahagirdar V, Fatima I, Ahmed MK, Goyal A, Sodeman T, Anwar N", "journal": "Cureus", "pmid": "36945289"},
    {"title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.", "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R", "journal": "Cureus", "pmid": "39421081"}
  ],
  "faq": [
    {"q": "Why does S4 cause yellow vision?", "a": "Marhefka 2004 PMID 15267281 mechanism study showed that the S4 molecule is NOT specific to AR – it also binds to retinal opsin pigments (photoreceptor proteins in the retina) in a dose-dependent manner. The blue-sensitive opsin pigment (S-cone opsin) is slightly modulated by S4 binding → blue light perception is DULLED → the perceived color palette shifts toward yellowish-green (yellow tint vision). At high doses (75+ mg/day) night blindness (rod opsin tolerance reduction) may also appear. Both are reversible within 4-6 weeks of stopping S4 (opsin recovery due to new retinal pigment synthesis). ~30% of UGL users at 50+ mg/day experience yellow vision."},
    {"q": "S4 vs Ostarine – which is the 'cutting' SARM?", "a": "Both are suitable for cutting goals, but with different profiles: S4 has shorter half-life (~4 h vs ~24 h Ostarine), faster discontinuation if side effects appear. On S4 the 'leaner look' + 'fat loss acceleration' anecdotal reports are more common (mechanism: lower water retention). BUT: S4 visual side effect (~30% yellow vision) does NOT exist on Ostarine. Ostarine has higher clinical trial precedent (Phase III POWER vs S4 Phase II). UGL anecdotal preference: Ostarine safer for first-SARM users, S4 'for experienced users due to unique fat-loss profile'."},
    {"q": "S4 2-3x daily dosing – why?", "a": "Short half-life (~4 h, Gao 2005 PMID 16270235) means a single daily dose disappears from plasma quickly – steady-state AR-binding occupancy is not stable. UGL protocol: 25-50 mg/day dose split 2-3x (morning + noon + evening, or morning + evening) so plasma level can be maintained over 8-12 h. Compliance risk is higher than on once-daily SARMs (RAD-140, Ostarine)."},
    {"q": "WADA detection on S4 – does the faster clearance make it a hiding place?", "a": "NO. While S4 urinary detection is shorter (1-2 weeks vs 3-6 weeks for RAD-140), modern WADA-accredited LC-MS/MS can detect S4 metabolites. A 2-week window is still common in a competitive sport context (multiple test opportunities within a competition). For athletes absolutely to be avoided. Furthermore, the visual side effect is a 'marker task' too – an ophthalmologist test can easily reveal yellow-vision disturbance."}
  ],
  "related": ["ostarine", "rad-140", "lgd-4033", "yk-11"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 37.5, "high": 50},
    "unit": "mg/day (oral, split 2-3x daily due to short half-life)",
    "note": "25-50 mg/day, max 6-8 week cycle. Daily split 2-3x. Do not exceed 75 mg (visual side effect threshold). PCT 4 weeks. TUDCA + milk-thistle recommended."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hepatic panel, lipid, hormone (Total T/Free T/E2/LH/FSH/SHBG), visual baseline (color test + night-vision test).",
      "purpose": "Hepatic + HPTA + visual baseline (unique side effect)."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 4",
      "markers": "ALT/AST, lipid, hormone, visual test (yellow vision + night blindness check).",
      "purpose": "Hepatic + visual monitor (visual disturbance → dose reduction or discontinuation)."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Last dose +1-2 days PCT start (Clomid 25 mg/day + Nolvadex 20 mg/day for 4 weeks)",
      "markers": "Hepatic normalization, HPTA recovery, visual recovery (4-6 weeks).",
      "purpose": "HPTA + visual recovery verification."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "S4 cruise NOT standard",
      "markers": "N/A",
      "purpose": "Cyclic use only (visual side effect risk may become persistent with long-term use)."
    }
  }
}
