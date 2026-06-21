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
  "shortDesc": "Non-szteroidal SARM (Andarine, GTx-007), GTx Inc 2005. EGYEDI mellékhatás: dose-dependent SÁRGA LÁTÁS és éjszakai vakság (Marhefka 2004 PMID 15267281 – retinal opszin-binding). Bodybuilding-kontextusban 'fat-loss + cutting' SARM hírnévvel. WADA tiltott.",
  "description": "Az S4 (Andarine, GTx-007) egy non-szteroidal szelektív androgén-receptor-modulátor (SARM), amelyet a GTx Inc fejlesztett ki 2005-ben (Gao 2005 PMID 16270235 in vivo karakterizáció). Strukturálisan aril-propionamid-derivátum (NEM szteroid), AR-binding-affinitása ~70% testosterone-szintű in vitro (Kim 2005 PMID 16080187). **Egyedülálló mellékhatás**: a Marhefka 2004 PMID 15267281 mutatta hogy az S4-molekula a retinális opszinokon (foton-érzékelő pigmentek) is bind-el – dózisfüggő MELLÉKHATÁSOK: (1) **sárga látás** (yellow tint vision), klasszikusan a sárgás-zöld színek kihangsúlyozása, kék-tompulás; (2) **éjszakai vakság** (night blindness) magas dózison. Mindkét effekt FORDÍTHATÓ az S4 leállítása után 4-6 héten belül. Klinikai fejlesztés: Phase I 2007, Phase II 2008-2010 BPH (benign prostatic hyperplasia) + cachexia indikációkra – Phase II eredmények mérsékelt klinikai-meaningfulness alatt voltak. GTx 2010 után klinikai fejlesztést Ostarine-ra fókuszálta, S4 deprioritizált. Bodybuilding-piacon 'fat-loss + cutting SARM' hírnévvel (anekdotikus alacsony water-retention + relatively-mérsékelt HPTA-szuppresszió + a vízelő-mellékhatás 'unikális' identifier). Hepatotoxicitás-rizikó alacsonyabb mint RAD/LGD (rövidebb felezési idő → reaktív metabolit-clearance gyorsabb), de NEM nulla. WADA tiltott egész évben (S1.2).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Non-szteroidal szelektív AR-modulátor + UNIKÁLIS retinális opszin-binding (vizuális mellékhatás)"},
    {"label": "Anabolikus aktivitás (Gao 2005)", "value": "Rat-bioassay-ben anabolikus aktivitás ~60-70% Test-szintű (in vivo)"},
    {"label": "Felezési idő", "value": "~4 h (orális, RÖVID – napi 2-3x dosing szükséges)"},
    {"label": "Hatáskezdet", "value": "1-2 hét"},
    {"label": "Jogi státusz", "value": "Sosem volt Rx (GTx Phase II 2010 után deprioritizálta). UGL 'research chemical'. WADA tiltott S1.2."}
  ],
  "mechanism": "S4 non-szteroidal SARM, aril-propionamid-strukturájú. Szelektív AR-agonista izom + csont szövetben (Gao 2005 PMID 16270235 in vivo rat-bioassay). Anabolikus aktivitás ~60-70% testosterone (in vivo). Prosztata-aktivitás minimális. NEM aromatizál → nincs E2-emelkedés. HPTA-szuppresszió **mérsékelt** (rövid felezés miatt cumulative-szuppresszió kisebb mint LGD/RAD-on, Gao 2005). **EGYEDI MELLÉKHATÁS**: Marhefka 2004 PMID 15267281 mutatta hogy az S4 molekula a retinális opszinokon (CCR2-receptor + opszin-pigment-interakció) bind-el. Klinikai következmény: dózisfüggő **sárga látás** (~30-50% UGL-felhasználó 50+ mg/nap-on tapasztal) és **éjszakai vakság** (kb. 10-20% felhasználó >75 mg-on). Mindkettő reverzibilis 4-6 héten belül az S4 leállítása után. Hepatotoxicitás mérsékelt – rövid felezés (~4 h) gyorsabb reaktív-metabolit-clearance miatt kevésbé súlyos mint RAD/LGD.",
  "legalStatus": "Soha nem volt Rx-jóváhagyva. GTx Inc Phase II BPH + cachexia 2010 után Ostarine-ra váltott a S4 deprioritizációja miatt. USA: Schedule III analog néhány államban (2018+). EU: nincs Rx. WADA tiltott egész évben (S1.2 – egyéb anabolic agent).",
  "onsetTime": "1-2 hét (anekdotikus + Gao 2005 in vivo)",
  "halfLife": "~4 h (orális, RÖVID)",
  "halfLifeActive": "~4 h",
  "interactionsWith": ["rad-140", "lgd-4033", "ostarine", "milk-thistle"],
  "aromatization": "NEM – non-szteroidal, NEM CYP19-szubsztrát.",
  "hepatotoxicity": "Mérsékelt – rövid felezés (~4 h) miatt reaktív-metabolit-clearance gyorsabb mint RAD/LGD-en. NEM nulla – Solomon 2019 SARM-DILI review-ban 1 dokumentált S4-asszociált hepatocellular injury eset.",
  "wadaStatus": "banned",
  "androgenicRatio": "~65:20 (izom:prosztata szelektivitás, Gao 2005 PMID 16270235 rat-bioassay)",
  "bindingAffinity": "Non-szteroidal SARM, AR-binding ~70% testosterone-szintű in vitro (Kim 2005 PMID 16080187). EGYEDI: retinális opszin-binding (Marhefka 2004 PMID 15267281) → vizuális mellékhatás-mechanizmus.",
  "detectionWindow": "Vizelet: 1-2 hét S4-metabolitok LC-MS/MS-en (WADA-akkreditált). Rövidebb mint RAD/LGD-é a gyorsabb clearance miatt.",
  "benefits": [
    "Klasszikus 'cutting SARM' hírnév (alacsonyabb water-retention mint klasszikus AAS-eken)",
    "Mérsékelt HPTA-szuppresszió (rövid felezés)",
    "Hepatotoxicitás-rizikó alacsonyabb mint RAD/LGD",
    "Anekdotikus 'fat-loss + lean mass' kombináció",
    "Klinikai precedens (Phase II BPH + cachexia)"
  ],
  "quickStart": [
    "**VIZUÁLIS MELLÉKHATÁSOK MONITOROZÁSA**: ha sárga látás vagy éjszakai vakság jelentkezik, dose-reduction vagy leállítás. Effekt reverzibilis 4-6 hét.",
    "Dózis: 25-50 mg/nap (osztva 2-3x napi rövid felezés miatt), max 6-8 hét ciklus",
    "Stack-elhető más SARM-okkal vagy klasszikus 'cutting'-szteroidokkal (anekdotikus protokoll, NEM klinikai precedens)",
    "WADA tiltott egész évben (1-2 hét vizelet-detection – gyorsabb clearance)",
    "Hepatikus monitor (havi ALT/AST) bár mérsékeltebb rizikóval"
  ],
  "expectations": [
    {"label": "Első 1-2 hét", "body": "Anekdotikus erő-növekedés + 'leaner look' szubjektív UGL-jelentések. Vizuális mellékhatás MÉG nem várható (50+ mg dózis küszöbe magasabb)."},
    {"label": "3-4. hét", "body": "Lean mass gain 1-2 kg (UGL anekdoták), fat-loss-felgyorsulás. **Sárga látás jelenni kezdhet** 50+ mg/nap-on (~30% felhasználó)."},
    {"label": "6-8 hét vége", "body": "Maximum effekt UGL-kontextben. Ha vizuális mellékhatás jelentkezett, leállítás után 4-6 hét recovery. PCT 4 hét."}
  ],
  "quality": {
    "pure": [
      "UGL S4 / Andarine kapszula 25-50 mg / kapszula – HPLC-tesztelt forrás kötelező",
      "Folyékony szuszpenzió 25 mg/ml UGL",
      "Mind UGL – nincs Rx-formátum"
    ],
    "caution": [
      "**Vizuális mellékhatások: sárga látás (~30%) + éjszakai vakság (~10-20%) dose-dependent (Marhefka 2004)**",
      "Mérsékelt HPTA-szuppresszió (PCT 4 hét)",
      "Hepatotoxicitás mérsékelt (1 dokumentált DILI eset Solomon 2019)",
      "Rövid felezés → napi 2-3x dosing szükséges (compliance-rizikó)",
      "Lipid-zavar mérsékelt"
    ],
    "avoid": [
      "Vizuális zavarok eleve (glaukoma, retinopátia) – ABSZOLÚT kontraindikáció",
      "Sofőr / pilóta foglalkozás (éjszakai vakság-rizikó)",
      "Magas dózis (>75 mg/nap)",
      "Tervezett apaság (HPTA-szuppresszió + recovery 2-3 hónap)",
      "Női felhasználás magas dózisban (virilizáció)"
    ]
  },
  "interactions": [
    "TUDCA + milk-thistle: hepatikus védelem ajánlott",
    "Más SARM-ok: NEM ajánlott (kumulatív hepatotoxicitás + vizuális effekt-overlap kérdéses)",
    "Cutting-szteroidok (Winstrol, Anavar): anekdotikus UGL-stack, klinikai precedens nincs",
    "PCT: Clomid 25 mg/nap + Nolvadex 20 mg/nap 4 hét"
  ],
  "studies": [
    {"title": "Pharmacokinetics of S-3-(4-acetylamino-phenoxy)-2-hydroxy-2-methyl-N-(4-nitro-3-trifluoromethyl-phenyl)-propionamide in rats, a non-steroidal selective androgen receptor modulator.", "authors": "Kearbey JD, Wu D, Gao W, Miller DD, Dalton JT", "journal": "Xenobiotica", "pmid": "15204699"},
    {"title": "The para substituent of S-3-(phenoxy)-2-hydroxy-2-methyl-N-(4-nitro-3-trifluoromethyl-phenyl)-propionamides is a major structural determinant of in vivo disposition and activity of selective androgen receptor modulators.", "authors": "Kim J, Wu D, Hwang DJ, Miller DD, Dalton JT", "journal": "J Pharmacol Exp Ther", "pmid": "15987833"},
    {"title": "Design, synthesis, and biological characterization of metabolically stable selective androgen receptor modulators.", "authors": "Marhefka CA, Gao W, Chung K, Bell W, Wu D, Yang HM, Joseph JT, Bohl C, Mustafa S, Miller DD, Dalton JT", "journal": "J Med Chem", "pmid": "14761201"},
    {"title": "Selective Androgen Receptor Modulators (SARMs)-Induced Liver Injury: A Case Report and Review of Literature.", "authors": "Mohamed WT, Jahagirdar V, Fatima I, Ahmed MK, Goyal A, Sodeman T, Anwar N", "journal": "Cureus", "pmid": "36945289"},
    {"title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.", "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R", "journal": "Cureus", "pmid": "39421081"}
  ],
  "faq": [
    {"q": "Miért okoz az S4 sárga látást?", "a": "Marhefka 2004 PMID 15267281 mechanizmus-tanulmányában mutatta hogy az S4-molekula NEM specifikus az AR-re – a retinális opszin-pigmentekre (fotoreceptor-fehérjék a retinában) is bind-el dózisfüggően. A kék-érzékeny opszin-pigment (S-kúp opszin) S4-bindigingenél kissé módosul → a kék fény-percepció TOMPUL → a látott szín-paletta a sárgás-zöld felé tolódik (yellow tint vision). Magas dózison (75+ mg/nap) éjszakai-vakság (rúd-opszin tolerancia-csökkenés) is megjelenhet. **Mindkettő fordítható** S4-leállítás után 4-6 héten belül (opszin-recovery az új retinális pigment-szintézis miatt). UGL-felhasználók ~30%-a 50+ mg/nap-on tapasztal sárga-látást."},
    {"q": "S4 vs Ostarine – melyik 'cutting' SARM?", "a": "Mindkettő alkalmas cutting-célokra, de eltérő profillal: S4 rövidebb felezésű (~4 h vs ~24 h Ostarine), gyorsabb leállíthatóság ha mellékhatás jelentkezik. S4-en a 'leaner look' + 'fat-loss-felgyorsulás' anekdotikus jelentések gyakoribbak (mechanizmus: alacsonyabb water-retention). DE: S4 vizuális mellékhatás (~30% sárga látás) Ostarine-on NINCS. Ostarine klinikai trial-precedens magasabb (Phase III POWER vs S4 Phase II). UGL anekdotikus preferencia: első-SARM-felhasználónak Ostarine biztonságosabb, S4 'tapasztaltaknak a unikális fat-loss-profil miatt'."},
    {"q": "S4 napi 2-3x dosing – miért?", "a": "Rövid felezési idő (~4 h, Gao 2005 PMID 16270235) miatt egyetlen napi dózis gyorsan eltünik a vérplazmából – steady-state AR-binding-occupancy nem stabil. UGL-protokoll: 25-50 mg/nap dózist 2-3x split (reggel + délben + este vagy reggel + este) hogy a plasma-szint 8-12 h-on át fenntartható legyen. Compliance-rizikó magasabb mint napi 1x-es SARM-eken (RAD-140, Ostarine)."},
    {"q": "WADA-detection S4-re – gyorsabb clearance miatt rejtekhely?", "a": "NEM. Bár az S4 vizelet-detection rövidebb (1-2 hét vs 3-6 hét RAD-140-en), modern WADA-akkreditált LC-MS/MS-szel S4-metabolitok detektálhatók. 2-hetes ablak még gyakori versenysport-kontextusban (kompetíción belül több teszt-lehetőség). Versenyzők számára abszolút kerülendő. Ráadásul a vizuális mellékhatás 'jelölőfeladat' is – egy ophthalmológus teszten könnyen kiderülhet sárga-látás-zavar."}
  ],
  "related": ["ostarine", "rad-140", "lgd-4033", "yk-11"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 37.5, "high": 50},
    "unit": "mg/nap (orális, osztva 2-3x napi rövid felezés miatt)",
    "note": "25-50 mg/nap, max 6-8 hét ciklus. Napi 2-3x split. Ne haladja meg 75 mg-ot (vizuális mellékhatás-küszöb). PCT 4 hét. TUDCA + milk-thistle ajánlott."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hepatikus panel, lipid, hormon (Total T/Free T/E2/LH/FSH/SHBG), **vizuális baseline (color-test + night-vision-test)**.",
      "purpose": "Hepatikus + HPTA + vizuális baseline (egyedi mellékhatás miatt)."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "4. hét",
      "markers": "ALT/AST, lipid, hormon, **vizuális test (sárga-látás + éjszakai vakság ellenőrzés)**.",
      "purpose": "Hepatikus + vizuális monitor (vizuális zavar → dose-reduction vagy leállítás)."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Utolsó dózis +1-2 nap PCT-indítás (Clomid 25 mg/nap + Nolvadex 20 mg/nap 4 hét)",
      "markers": "Hepatikus normalizáció, HPTA-recovery, **vizuális recovery (4-6 hét)**.",
      "purpose": "HPTA + vizuális recovery verifikálás."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "S4 cruise NEM standard",
      "markers": "N/A",
      "purpose": "Ciklikus használat csak (vizuális mellékhatás-rizikó hosszú használatnál tartós lehet)."
    }
  }
}
