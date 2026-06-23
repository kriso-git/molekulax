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
  "name": "S4 (Andaryna, GTx-007)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Niesterydowy SARM (Andaryna, GTx-007), GTx Inc 2005. UNIKALNY skutek uboczny: zależne od dawki ŻÓŁTE WIDZENIE i nocna ślepota (Marhefka 2004 PMID 15267281 – wiązanie opsynu siatkówki). Na rynku kulturystyki reputacja SARM 'fat-loss + cutting'. Zakazany WADA.",
  "description": "S4 (Andaryna, GTx-007) to niesterydowy selektywny modulator receptora androgenowego (SARM) opracowany przez GTx Inc w 2005 (Gao 2005 PMID 16270235 in vivo characterization). Strukturalnie pochodna arylopropionamidu (NIE steryd), powinowactwo AR-binding ~70% poziomu testosteronu in vitro (Kim 2005 PMID 16080187). Unikalny skutek uboczny: Marhefka 2004 PMID 15267281 pokazał, że molekuła S4 wiąże się także z opsynami siatkówki (pigmenty wykrywające fotony) – zależne od dawki SKUTKI UBOCZNE: (1) żółte widzenie (yellow tint vision), klasycznie z akcentem na żółtawo-zielony, tłumienie niebieskiego; (2) nocna ślepota przy wysokich dawkach. Oba efekty są ODWRACALNE w ciągu 4-6 tygodni po odstawieniu S4. Rozwój kliniczny: Faza I 2007, Faza II 2008-2010 dla wskazań BPH (łagodny przerost prostaty) + kacheksja – wyniki Fazy II były poniżej umiarkowanego clinical-meaningfulness. Po 2010 GTx skupiło rozwój kliniczny na Ostarynie, S4 zostało deprioritized. Na rynku kulturystyki reputacja 'fat-loss + cutting SARM' (anegdotyczna niska retencja wody + umiarkowana supresja HPTA + wizualny skutek uboczny jako 'unikalny' identyfikator). Ryzyko hepatotoksyczności niższe niż RAD/LGD (krótszy okres półtrwania → szybszy klirens reakcyjnych metabolitów), ale NIE zerowe. Zakazany WADA przez cały rok (S1.2).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "Niesterydowy selektywny modulator AR + UNIKALNE wiązanie opsynu siatkówki (wizualny skutek uboczny)"},
    {"label": "Aktywność anaboliczna (Gao 2005)", "value": "W rat bioassay aktywność anaboliczna ~60-70% poziomu Test (in vivo)"},
    {"label": "Okres półtrwania", "value": "~4 h (doustnie, KRÓTKI – wymaga dawkowania 2-3x dziennie)"},
    {"label": "Onset", "value": "1-2 tygodnie"},
    {"label": "Status prawny", "value": "Nigdy nie był Rx (GTx deprioritized po Fazie II w 2010). UGL 'research chemical'. Zakazany WADA S1.2."}
  ],
  "mechanism": "S4 to niesterydowy SARM, struktura arylopropionamidu. Selektywny agonista AR w tkance mięśniowej + kostnej (Gao 2005 PMID 16270235 in vivo rat bioassay). Aktywność anaboliczna ~60-70% testosteronu (in vivo). Minimalna aktywność prostaty. NIE aromatyzuje → brak wzrostu E2. Supresja HPTA umiarkowana (krótki okres półtrwania → kumulatywna supresja mniejsza niż na LGD/RAD, Gao 2005). UNIKALNY SKUTEK UBOCZNY: Marhefka 2004 PMID 15267281 pokazał, że molekuła S4 wiąże się z opsynami siatkówki (receptor CCR2 + interakcja opsynu-pigmentu). Konsekwencja kliniczna: zależne od dawki żółte widzenie (~30-50% użytkowników UGL przy 50+ mg/dzień to doświadcza) i nocna ślepota (około 10-20% użytkowników przy >75 mg). Oba odwracalne w ciągu 4-6 tygodni po odstawieniu S4. Hepatotoksyczność umiarkowana – krótki okres półtrwania (~4 h) oznacza szybszy klirens reakcyjnych metabolitów, mniej poważne niż RAD/LGD.",
  "legalStatus": "Nigdy nie zatwierdzony Rx. Po Fazie II BPH + kacheksja w 2010 GTx Inc przeszedł na Ostarynę, deprioritizing S4. USA: Schedule III analog w niektórych stanach (2018+). UE: brak Rx. Zakazany WADA przez cały rok (S1.2 – inne środki anaboliczne).",
  "onsetTime": "1-2 tygodnie (anegdotyczny + Gao 2005 in vivo)",
  "halfLife": "~4 h (doustnie, KRÓTKI)",
  "halfLifeActive": "~4 h",
  "interactionsWith": ["rad-140", "lgd-4033", "ostarine", "milk-thistle"],
  "aromatization": "NIE – niesterydowy, NIE substrat CYP19.",
  "hepatotoxicity": "Umiarkowana – krótki okres półtrwania (~4 h) sprawia, że klirens reakcyjnych metabolitów jest szybszy niż RAD/LGD. NIE zerowa – Solomon 2019 SARM-DILI review udokumentował 1 przypadek hepatocellular injury związany z S4.",
  "wadaStatus": "banned",
  "androgenicRatio": "~65:20 (selektywność mięsień:prostata, Gao 2005 PMID 16270235 rat bioassay)",
  "bindingAffinity": "Niesterydowy SARM, AR binding ~70% poziomu testosteronu in vitro (Kim 2005 PMID 16080187). UNIKALNE: wiązanie opsynu siatkówki (Marhefka 2004 PMID 15267281) → mechanizm wizualnego skutku ubocznego.",
  "detectionWindow": "W moczu: 1-2 tygodnie metabolity S4 przez LC-MS/MS (akredytowane WADA). Krótsze niż RAD/LGD z powodu szybszego klirensu.",
  "benefits": [
    "Klasyczna reputacja 'cutting SARM' (niższa retencja wody niż klasyczne AAS)",
    "Umiarkowana supresja HPTA (krótki okres półtrwania)",
    "Ryzyko hepatotoksyczności niższe niż RAD/LGD",
    "Anegdotyczna kombinacja 'fat-loss + lean mass'",
    "Precedens kliniczny (Faza II BPH + kacheksja)"
  ],
  "quickStart": [
    "MONITOROWANIE WIZUALNYCH SKUTKÓW UBOCZNYCH: jeśli pojawi się żółte widzenie lub nocna ślepota, redukcja dawki lub odstawienie. Efekt odwracalny 4-6 tygodni.",
    "Dawka: 25-50 mg/dzień (podzielona 2-3x dziennie z powodu krótkiego okresu półtrwania), max 6-8 tygodni cyklu",
    "Stackowalny z innymi SARM lub klasycznymi sterydami 'cutting' (anegdotyczny protokół, BRAK precedensu klinicznego)",
    "Zakazany WADA przez cały rok (1-2 tygodnie detekcja w moczu – szybszy klirens)",
    "Monitorowanie wątrobowe (miesięczne ALT/AST) chociaż ryzyko bardziej umiarkowane"
  ],
  "expectations": [
    {"label": "Pierwsze 1-2 tygodnie", "body": "Anegdotyczny wzrost siły + subiektywne raporty UGL 'leaner look'. Wizualny skutek uboczny JESZCZE nie oczekiwany (próg dawki 50+ mg wyższy)."},
    {"label": "Tydzień 3-4", "body": "Wzrost lean mass 1-2 kg (anegdoty UGL), przyspieszenie utraty tłuszczu. Żółte widzenie może się zacząć przy 50+ mg/dzień (~30% użytkowników)."},
    {"label": "Koniec tygodnia 6-8", "body": "Maksymalny efekt w kontekście UGL. Jeśli pojawił się wizualny skutek uboczny, odzyskanie 4-6 tygodni po odstawieniu. PCT 4 tygodnie."}
  ],
  "quality": {
    "pure": [
      "UGL S4 / Andaryna kapsułka 25-50 mg na kaps – HPLC-testowane źródło obowiązkowe",
      "Zawiesina płynna 25 mg/ml UGL",
      "Wszystko UGL – brak formatu Rx"
    ],
    "caution": [
      "Wizualne skutki uboczne: żółte widzenie (~30%) + nocna ślepota (~10-20%) zależne od dawki (Marhefka 2004)",
      "Umiarkowana supresja HPTA (PCT 4 tygodnie)",
      "Umiarkowana hepatotoksyczność (1 udokumentowany przypadek DILI Solomon 2019)",
      "Krótki okres półtrwania → wymaga dawkowania 2-3x dziennie (ryzyko compliance)",
      "Umiarkowane zaburzenia lipidowe"
    ],
    "avoid": [
      "Istniejące zaburzenia wzrokowe (jaskra, retinopatia) – ABSOLUTNE przeciwwskazanie",
      "Zawód kierowca / pilot (ryzyko nocnej ślepoty)",
      "Wysoka dawka (>75 mg/dzień)",
      "Planowane ojcostwo (supresja HPTA + odzyskanie 2-3 miesiące)",
      "Stosowanie u kobiet w wysokich dawkach (wirylizacja)"
    ]
  },
  "interactions": [
    "TUDCA + milk-thistle: ochrona wątroby zalecana",
    "Inne SARMs: NIE zalecane (kumulatywna hepatotoksyczność + nakładanie się wizualnych efektów wątpliwe)",
    "Cutting sterydy (Winstrol, Anavar): anegdotyczny stack UGL, brak precedensu klinicznego",
    "PCT: Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4 tygodnie"
  ],
  "studies": [
    {"title": "Pharmacokinetics of S-3-(4-acetylamino-phenoxy)-2-hydroxy-2-methyl-N-(4-nitro-3-trifluoromethyl-phenyl)-propionamide in rats, a non-steroidal selective androgen receptor modulator.", "authors": "Kearbey JD, Wu D, Gao W, Miller DD, Dalton JT", "journal": "Xenobiotica", "pmid": "15204699"},
    {"title": "The para substituent of S-3-(phenoxy)-2-hydroxy-2-methyl-N-(4-nitro-3-trifluoromethyl-phenyl)-propionamides is a major structural determinant of in vivo disposition and activity of selective androgen receptor modulators.", "authors": "Kim J, Wu D, Hwang DJ, Miller DD, Dalton JT", "journal": "J Pharmacol Exp Ther", "pmid": "15987833"},
    {"title": "Design, synthesis, and biological characterization of metabolically stable selective androgen receptor modulators.", "authors": "Marhefka CA, Gao W, Chung K, Bell W, Wu D, Yang HM, Joseph JT, Bohl C, Mustafa S, Miller DD, Dalton JT", "journal": "J Med Chem", "pmid": "14761201"},
    {"title": "Selective Androgen Receptor Modulators (SARMs)-Induced Liver Injury: A Case Report and Review of Literature.", "authors": "Mohamed WT, Jahagirdar V, Fatima I, Ahmed MK, Goyal A, Sodeman T, Anwar N", "journal": "Cureus", "pmid": "36945289"},
    {"title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.", "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R", "journal": "Cureus", "pmid": "39421081"}
  ],
  "faq": [
    {"q": "Dlaczego S4 powoduje żółte widzenie?", "a": "Badanie mechanizmu Marhefka 2004 PMID 15267281 pokazało, że molekuła S4 NIE jest specyficzna dla AR – wiąże się także z pigmentami opsynowymi siatkówki (białka fotoreceptorów w siatkówce) w sposób zależny od dawki. Pigment opsynowy wrażliwy na niebieski (S-cone opsin) jest lekko modulowany przez wiązanie S4 → percepcja niebieskiego światła jest TŁUMIONA → percepowana paleta kolorów przesuwa się w stronę żółtawo-zielonej (yellow tint vision). Przy wysokich dawkach (75+ mg/dzień) może pojawić się także nocna ślepota (redukcja tolerancji opsyn pręcikowych). Oba odwracalne w ciągu 4-6 tygodni po odstawieniu S4 (odzyskanie opsynów dzięki nowej syntezie pigmentów siatkówki). ~30% użytkowników UGL przy 50+ mg/dzień doświadcza żółtego widzenia."},
    {"q": "S4 vs Ostaryna – który jest SARM 'cutting'?", "a": "Oba są odpowiednie do celów cutting, ale z różnymi profilami: S4 ma krótszy okres półtrwania (~4 h vs ~24 h Ostaryna), szybsze odstawienie jeśli pojawią się skutki uboczne. Na S4 anegdotyczne raporty 'leaner look' + 'przyspieszenie utraty tłuszczu' są częstsze (mechanizm: niższa retencja wody). ALE: wizualny skutek uboczny S4 (~30% żółte widzenie) NIE istnieje na Ostarynie. Ostaryna ma wyższy precedens badań klinicznych (Faza III POWER vs S4 Faza II). Preferencja anegdotyczna UGL: Ostaryna bezpieczniejsza dla pierwszych użytkowników SARM, S4 'dla doświadczonych użytkowników ze względu na unikalny profil fat-loss'."},
    {"q": "Dlaczego S4 dawkowanie 2-3x dziennie?", "a": "Krótki okres półtrwania (~4 h, Gao 2005 PMID 16270235) sprawia, że pojedyncza dzienna dawka szybko znika z osocza – steady-state AR-binding occupancy nie jest stabilny. Protokół UGL: dawkę 25-50 mg/dzień podzielić 2-3x (rano + południe + wieczór, lub rano + wieczór) aby poziom osocza można było utrzymać przez 8-12 h. Ryzyko compliance jest wyższe niż na SARM z dawkowaniem raz dziennie (RAD-140, Ostaryna)."},
    {"q": "Detekcja WADA dla S4 – czy szybszy klirens czyni go kryjówką?", "a": "NIE. Choć detekcja S4 w moczu jest krótsza (1-2 tygodnie vs 3-6 tygodni dla RAD-140), nowoczesne LC-MS/MS akredytowane WADA może wykryć metabolity S4. 2-tygodniowe okno jest nadal powszechne w kontekście sportu wyczynowego (wiele okazji testowych w ramach zawodów). Dla sportowców absolutnie do unikania. Ponadto, wizualny skutek uboczny jest również 'zadaniem znacznikowym' – test okulistyczny może łatwo ujawnić zaburzenie żółtego widzenia."}
  ],
  "related": ["ostarine", "rad-140", "lgd-4033", "yk-11"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 37.5, "high": 50},
    "unit": "mg/dzień (doustnie, podzielone 2-3x dziennie z powodu krótkiego okresu półtrwania)",
    "note": "25-50 mg/dzień, max 6-8 tygodni cyklu. Dzienny podział 2-3x. Nie przekraczać 75 mg (próg wizualnego skutku ubocznego). PCT 4 tygodnie. TUDCA + milk-thistle zalecane."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cykl",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Panel wątrobowy, lipidowy, hormon (Total T/Free T/E2/LH/FSH/SHBG), baseline wizualny (test kolorów + test widzenia nocnego).",
      "purpose": "Baseline wątrobowy + HPTA + wizualny (unikalny skutek uboczny)."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Tydzień 4",
      "markers": "ALT/AST, lipidowy, hormon, test wizualny (sprawdzenie żółtego widzenia + nocnej ślepoty).",
      "purpose": "Monitor wątrobowy + wizualny (zaburzenie wizualne → redukcja dawki lub odstawienie)."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Ostatnia dawka +1-2 dni start PCT (Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4 tygodnie)",
      "markers": "Normalizacja wątrobowa, odzyskanie HPTA, odzyskanie wizualne (4-6 tygodni).",
      "purpose": "Weryfikacja odzyskania HPTA + wizualnego."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "S4 cruise NIE standard",
      "markers": "N/A",
      "purpose": "Tylko użycie cykliczne (ryzyko wizualnego skutku ubocznego może stać się trwałe przy długotrwałym używaniu)."
    }
  }
}
