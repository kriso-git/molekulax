// Population Council male contraceptive research (1990s-2000s). Sources:
// Sundaram 1995 PMID 7657009 (MENT pharmacology), Anderson 1999 PMID 10024455
// (MENT contraceptive trial), Pope-Kanayama 2014 PMID 24423981, Hartgens-
// Kuipers 2004 PMID 15233599, Kumar 1995 PMID 7779238. Cross-framed as
// synthetic androgen (Test column); progestin frame (19-Nor) is sub-task 4.

export default {
  "id": "ment-test",
  "name": "MENT (Trestolone) — szintetikus androgén frame",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#1D9E75",
  "tagColor": "rgba(29,158,117,0.18)",
  "shortDesc": "Trestolone (7α-metil-19-nortestosterone, MENT) Population Council 1990-es évek férfi-fogamzásgátló-jelölt. Szintetikus androgén — ~8-10x AR-affinitás vs testosterone, NEM 17α-alkilált → alacsony hepatotoxicitás. Két variant: Acetát (rövid) és Enantát (lassú). Cross-framed: 19-Nor analóg külön entry.",
  "description": "A MENT (Trestolone, 7α-metil-19-nortestosterone) egy szintetikus androgén szteroid, amelyet a Population Council (NYC) fejlesztett 1990-es évek vége - 2000-es évek eleje között férfi-fogamzásgátló-jelöltként (Anderson 1999 PMID 10024455 klinikai trial). Az anabolikus/androgén aktivitás ~8-10x testosterone-hoz képest in vitro AR-binding-assay alapján (Sundaram 1995 PMID 7657009) — az egyik legerősebb szintetikus androgén. A 7α-metil-csoport gátolja az 5α-reduktáz-substrate-binding-et (NEM DHT-konvertál → alacsonyabb scalp-DHT és prosztata-androgén-aktivitás mint a testosterone), miközben a 19-nor-strukturával PROGESZTOGÉN AKTIVITÁS-T is mutat (cross-framed entry-jellegű: itt szintetikus androgén frame, külön entry 19-Nor framework-ban). Aromatizál CYP19-en át 7α-metilestradiollá, ami alacsonyabb ER-affinitású mint a sima E2 → estrogén-effekt gyengébb mint Test-en. NEM 17α-alkilált → alacsony hepatotoxicitás. Klinikai trial-okban (Population Council 1999-2005) 4-hetes implantátum + 8 mg/nap szublinguális készítményekben tesztelték; férfi-fogamzásgátló kifejlesztés a Phase III után LEÁLLT financiális okok miatt. Bodybuilding kontextusban UGL piacon Acetát-észter (Trestolone Acetate, rövid, ~8h felezés) és Enantát-észter (Trestolone Enanthate, lassú, ~5-7 nap felezés) formákban elérhető. WADA tiltott egész évben.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "AR-agonista (8-10x Test) + progeszteron-receptor, 7α-metil-19-nor-T, aromatizál gyengébben"},
    {"label": "Anabolikus:Androgén", "value": "~2300:650 (extrapolált in vitro AR-binding)"},
    {"label": "Felezési idő", "value": "~8 h (Ac), 5-7 d (Enan)"},
    {"label": "Hatáskezdet", "value": "12-24 h (Ac IM), 48-72 h (Enan IM)"},
    {"label": "Jogi státusz", "value": "Soha nem volt Rx, UGL only. Schedule III analógia (USA), WADA tiltott."}
  ],
  "mechanism": "7α-metil-19-nortestosterone AR-agonista. A 7α-metilcsoport HÁROM kritikus szerkezeti módosítást ad: (1) gátolja az 5α-reduktáz-substrate-binding-et → NEM DHT-konvertál (alacsonyabb scalp-DHT, prosztata-androgén-aktivitás); (2) növeli az AR-binding-affinitást (~8-10x Test, Sundaram 1995 PMID 7657009); (3) stabilizálja a molekulát a 17β-HSD-mediated oxidatív lebontás ellen → hosszabb plasma half-life. A 19-nor-strukturális karakter PROGESZTOGÉN AKTIVITÁS-T ad (közepes PR-affinitás), ami a férfi-fogamzásgátló-célnál hasznos (negative-feedback HPG-axisra) DE bodybuilding-context-ben prolaktin-monitor-igényt teremt. Aromatizál CYP19-en át 7α-metilestradiollá (kb. 50%-ra a Test-szintű E2-konverziónál) — de a metabolit ER-affinitása alacsonyabb mint a sima E2-é → estrogén-effekt klinikailag gyengébb.",
  "legalStatus": "Soha nem volt Rx (Population Council férfi-fogamzásgátló-fejlesztés financial-leállás miatt megrekedt). USA: Schedule III analógia (DEA, designer-AAS classification). EU/HU/PL: kontrollált AAS analóg, vény nélkül illegális. WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "12-24 h (Ac IM), 48-72 h (Enan IM)",
  "halfLife": "~8 h (Ac), 5-7 d (Enan)",
  "halfLifeActive": "~8 h szabad Trestolone (Ac után), depot ~24 h (Enan után)",
  "interactionsWith": ["cabergoline", "testosterone", "anastrozole", "warfarin"],
  "aromatization": "Igen — CYP19 szubsztrát, metabolit 7α-metilestradiol (alacsonyabb ER-affinitás mint sima E2); klinikailag E2-emelkedés mérsékelt-alacsony (Sundaram 1995 PMID 7657009, Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; IM bypass-olja a first-pass-t. ALT/AST <2x normál MENT-only ciklusnál (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "~2300:650 (extrapolált in vitro AR-binding-affinity szerint, NEM klasszikus rat-ventral-prostate assay)",
  "bindingAffinity": "Extrém magas AR-affinitás (~8-10x testosterone in vitro, Sundaram 1995 PMID 7657009) + közepes PR-aktivitás.",
  "detectionWindow": "Trestolone-metabolitok (7α-metil-19-nor-androsztén metabolitcsalád) vizeletből: Ac 2-3 hét, Enan 6-8 hét. WADA-akkreditált LC-MS/MS.",
  "benefits": [
    "Extrém magas AR-affinitás → drasztikus izomtömeg- és erő-gyarapodás kis dózisnál (50-100 mg/hét ekvivalens 500+ mg Test-tel)",
    "NEM 5α-reduktáz substrate → alacsonyabb scalp-DHT és prosztata-androgén-aktivitás mint Test-en",
    "Aromatizáció enyhébb (7α-metilestradiol alacsonyabb ER-affinitású)",
    "Alacsony hepatotoxicitás (NEM 17α-alkilált)",
    "Klinikai jelentőség: férfi-fogamzásgátló-jelölt (Population Council Phase III trial-ig jutott)"
  ],
  "quickStart": [
    "EXTRÉM POTENS — dózisok jelentősen alacsonyabbak mint Test-en (50-100 mg/hét Trestolone ekvivalens 500-1000 mg Test-tel)",
    "PR-aktivitás miatt prolaktin-monitor + cabergoline-készenlét",
    "Aromatizáció gyengébb mint Test-en, DE NEM nulla → AI E2-igényesetén",
    "PCT (Clomid + Nolvadex 4-6 hét) kötelező",
    "Cross-framed entry: ez a Test/szintetikus-androgén frame; a 19-Nor framework külön entry"
  ],
  "expectations": [
    {"label": "Első hét", "body": "Ac IM-injekció után 12-24 h onset, akut erő-növekedés 5-7 nap után. Enan IM 48-72 h onset, steady-state 3-4 hét."},
    {"label": "3-4. hét", "body": "Drasztikus izomtömeg-gyarapodás (50-100 mg/hét MENT-Ac → 4-6 kg lean mass 4 hét alatt, dose-equivalent jelentősen alacsonyabb mint Test). Prolaktin emelkedés várható (PR-aktivitás)."},
    {"label": "8-10. hét vége", "body": "Maximum effekt, lipid panel HDL csökkenés mérsékelt-magas, prolaktin-monitor kritikus, PCT-tervezés."}
  ],
  "quality": {
    "pure": [
      "UGL Trestolone Acetate 50-100 mg/ml olajos fiola, sterilen szűrt (a leggyakoribb UGL formátum)",
      "UGL Trestolone Enanthate 100-200 mg/ml olajos fiola (kevésbé elérhető mint Ac)",
      "HPLC-tesztelt forrás KÖTELEZŐ — MENT gyakran hamisított vagy alulkoncentrált (high-cost raw material)"
    ],
    "caution": [
      "Prolaktin-emelkedés gyakori (PR-aktivitás) → gynecomastia-rizikó (paradox, mert aromatizáció enyhe)",
      "Lipid-zavar: HDL csökkenés mérsékelt-magas",
      "PIP (injection site pain) Ac variantnál erősebb mint Enan-nál (alacsonyabb oldhatóság)",
      "Hangulat-változás (PR-aktivitás-driven depresszív epizódok ritka esetjelentések)"
    ],
    "avoid": [
      "Bármilyen meglévő prolaktinóma vagy hyperprolaktinaemia ABSZOLÚT kontraindikáció",
      "Pszichiátriai prediszpozíció (depresszió, anxiety)",
      "Tervezett apaság (HPTA-szuppresszió + PR-aktivitás komplikációk)",
      "Női felhasználás (extrém androgén-aktivitás → gyors irreverzibilis virilizáció)",
      "Kardiovaszkuláris kockázat"
    ]
  },
  "interactions": [
    "Cabergoline 0,25-0,5 mg E3D: prolaktin-monitor + szükség esetén kezelés",
    "Testosterone-base stack: NEM standard (MENT önmagában elég potens), DE TRT-base + MENT-Ac \"hardcore bulk\" stack ismert",
    "Anastrozole 0,25 mg E3D: csak labor-igazolt magas E2 esetén",
    "Warfarin: antikoaguláns hatás fokozódhat"
  ],
  "studies": [
    {"title": "7 alpha-methyl-19-nortestosterone (MENT): the optimal androgen for male contraception", "authors": "Sundaram K, Kumar N, Bardin CW.", "journal": "Ann Med. 1993;25(2):199-205. (and 1995 follow-up PMID 7657009)", "pmid": "7657009"},
    {"title": "7α-methyl-19-nortestosterone maintains sexual behavior and mood in hypogonadal men", "authors": "Anderson RA, Wallace AM, Sattar N, Kumar N, Sundaram K.", "journal": "J Clin Endocrinol Metab. 1999;84(10):3556-62.", "pmid": "10024455"},
    {"title": "Antifertility activity and pharmacokinetics of MENT acetate", "authors": "Kumar N, Suvisaari J, Tsong YY, Lähteenmäki P, Bardin CW, Sundaram K.", "journal": "Steroids. 1995;60(4):305-9.", "pmid": "7779238"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"}
  ],
  "faq": [
    {"q": "Mi az a cross-framed entry?", "a": "A MENT (Trestolone, 7α-metil-19-nortestosterone) strukturálisan EGYSZERRE két kémiai osztályba tartozik: (1) szintetikus androgén — 7α-metil-szubsztitúció ad NEM-DHT-konvertálható egyedi profilt; (2) 19-Nor-származék — a 19-szénatomi metilcsoport eltávolítása progesztogén aktivitást ad. A library-struktúra a HTML-referencia szerint mindkét osztály-oszlopban szerepelteti, KÉT KÜLÖN entry-vel: 'MENT-test' (ez, szintetikus androgén frame, Test-oszlop) és 'MENT-19nor' (külön entry a 19-Nor-oszlopban, sub-task 4-ben jön). A két entry tartalma 80%-ban átfed, az 'AR-binding affinity vs progesztogén aktivitás' framing különbözik."},
    {"q": "Miért állították le a férfi-fogamzásgátló kifejlesztést?", "a": "Population Council 1999-2005 között Phase II-III klinikai trial-eket futtatott a MENT-szublinguális implantátum 4-hetes formulációval (Anderson 1999 PMID 10024455). Az eredmények ígéretesek voltak (90%+ spermatogenezis-szuppresszió, jó tolerálhatóság), DE 2005-ben a Population Council financial-okok miatt LEÁLLÍTOTTA a Phase III-at — a fogamzásgátló-piacon a női-fogamzásgátló dominanciája miatt a kereskedelmi sikertelenség-kockázat magas volt befektetőknek. Ma a MENT férfi-fogamzásgátló-fejlesztése zömmel halott, kivéve néhány akadémikus follow-up vizsgálat."},
    {"q": "MENT vs Testosterone direct comparison?", "a": "AR-affinitásban MENT ~8-10x erősebb (Sundaram 1995 PMID 7657009), tehát 100 mg/hét MENT ekvivalens kb. 800-1000 mg/hét Test-tel. NEM 5α-redukálódik → alacsonyabb scalp-DHT és prosztata-AR-aktivitás (előny a hajhullás- és BPH-prevenció szempontjából). Aromatizáció enyhébb (7α-metilestradiol gyengébb ER-affinitású metabolit). DE: PR-aktivitás (Test nem aktivál PR-t) → prolaktin-monitor + cabergoline-igény. Nettó-pozitív bodybuilding-context-ben tapasztalt felhasználóknak, de NEM első-ciklus."},
    {"q": "Acetát vs Enantát variant — melyiket válassz?", "a": "Ac (Acetát): rövid (~8h felezés), EOD vagy napi IM injekció, gyors onset (12-24 h), PIP gyakori. Bodybuilding-context-ben gyakoribb (jobb kontroll, könnyebb leállás). Enan (Enantát): hosszú (~5-7 nap felezés), heti 1-2x IM, lassabb onset (48-72 h, steady-state 3-4 hét), kevesebb PIP. Új MENT-felhasználónak Ac ajánlott (jobb dose-control + gyors leállíthatóság ha mellékhatás jelentkezik); tapasztaltnál Enan kényelmesebb."},
    {"q": "Modern WADA-detectability?", "a": "MENT-Ac vizelet-detection 2-3 hét, MENT-Enan 6-8 hét (WADA-akkreditált LC-MS/MS). A 7α-metil-19-nor-androsztén-metabolitcsalád 2010-es évek vége óta benne van a WADA-target-listán; modern atléta-teszteknél detektálható. Pre-2010 designer-szteroid-zónaként használták néhányan, ma egyértelmű WADA-tiltás + LC-MS/MS-detection."}
  ],
  "related": ["testosterone-info", "nandrolone-info", "trenbolone-info", "anavar-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 50, "medium": 100, "high": 150},
    "unit": "mg/hét MENT (IM, Ac EOD vagy Enan heti 1-2x)",
    "note": "Ekvivalens 500-1500 mg/hét Test-tel az AR-binding-affinitás alapján. Maximum 8-10 hét ciklus. Cabergoline készenlétben (PR-aktivitás). PCT 4-6 hét."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hormon-panel: Total T, Free T, E2, LH, FSH, SHBG, Prolaktin (PR-aktivitás miatt kritikus). Lipid panel. Hepatikus. PSA.",
      "purpose": "Prolaktin-baseline kritikus a PR-aktivitás miatt."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "3-4. hét",
      "markers": "Prolaktin (cabergoline-igény), E2, Total T, lipid panel, hepatikus.",
      "purpose": "Prolaktin >25 ng/mL → cabergoline-dózisemelés."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó dózis: Ac +2-3 nap, Enan +14-21 nap PCT-indítás",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, Prolaktin (recovery), lipid recovery.",
      "purpose": "HPTA + PR-axis recovery verifikálás."
    },
    "cruise": {
      "label": "Cruise alatt (MENT-cruise NEM standard)",
      "timing": "MENT-cruise atipikus a PR-aktivitás + magas potency miatt",
      "markers": "N/A",
      "purpose": "MENT kizárólag ciklikus használatra. TRT-Test cruise preferált helyette."
    }
  },
  "variants": [
    {
      "routeId": "ac",
      "routeLabel": "Trestolone Acetát (IM, rövid)",
      "image": "/performance/oil-vial-yellow.png",
      "legalStatus": "Sosem volt Rx (Population Council-trial leállt). UGL only. WADA tiltott.",
      "bioavailability": "~95-100% (IM, gyors Ac-ester hidrolízis)",
      "onsetTime": "12-24 h (IM, fast-acting Ac)",
      "halfLife": "~8 h (parent Trestolone Ac után)",
      "halfLifeActive": "~8 h",
      "detectionWindow": "2-3 hét vizelet (rövid ester).",
      "aromatization": "Igen — CYP19 → 7α-metilestradiol, alacsonyabb ER-affinitás mint E2.",
      "hepatotoxicity": "Alacsony — NEM 17α-alkilált.",
      "quality": {
        "pure": ["Tiszta halványsárga olaj, 10ml fiola, 50-100 mg/ml UGL koncentráció", "HPLC-tesztelt forrás kötelező"],
        "caution": ["EOD/napi IM-injekció szükséges", "PIP gyakori", "Prolaktin-monitor"],
        "avoid": ["Erős injection-fárasztás esetén Enan preferált", "Prolaktinóma"]
      },
      "interactions": ["Cabergoline E3D PR-monitor", "PCT utolsó Ac-injekció +2-3 nap után"],
      "doseCalc": {
        "type": "fixed",
        "fixed": {"low": 50, "medium": 75, "high": 100},
        "unit": "mg/hét (IM, EOD vagy 3x/hét)",
        "note": "50-100 mg/hét, EOD vagy E3D. PCT utolsó injekció +2-3 nap."
      }
    },
    {
      "routeId": "en",
      "routeLabel": "Trestolone Enantát (IM, lassú)",
      "image": "/performance/oil-vial-orange.png",
      "legalStatus": "Sosem volt Rx. UGL only. WADA tiltott.",
      "bioavailability": "~95-100% (IM, slow Enan-ester hidrolízis)",
      "onsetTime": "48-72 h (IM, slow-acting; steady-state 3-4 hét)",
      "halfLife": "5-7 d (Enantát ester)",
      "halfLifeActive": "~24 h szabad Trestolone (hidrolízis után)",
      "detectionWindow": "6-8 hét vizelet.",
      "aromatization": "Igen — CYP19 → 7α-metilestradiol.",
      "hepatotoxicity": "Alacsony — NEM 17α-alkilált.",
      "quality": {
        "pure": ["Tiszta sárgás-arany olaj, 10ml fiola, 100-200 mg/ml UGL", "HPLC-tesztelt"],
        "caution": ["Heti 1-2x IM-injekció", "PIP kevesebb mint Ac-on", "Steady-state 3-4 hét"],
        "avoid": ["Rövid (4-6 hét) ciklus nem hatékony", "Prolaktinóma"]
      },
      "interactions": ["Cabergoline E3D", "PCT utolsó Enan-injekció +14-21 nap"],
      "doseCalc": {
        "type": "fixed",
        "fixed": {"low": 100, "medium": 150, "high": 200},
        "unit": "mg/hét (IM, 1-2x osztva)",
        "note": "100-200 mg/hét, heti 1-2x. Minimum 8-10 hét ciklus. PCT utolsó injekció +14-21 nap."
      }
    }
  ],
  "defaultVariant": "ac"
}
