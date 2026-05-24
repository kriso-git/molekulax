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
      "id": "ac",
      "routeId": "ac",
      "routeLabel": {
        "hu": "MENT + Test Acetate mixture (gyors észter)",
        "en": "MENT + Test Acetate mixture (fast ester)",
        "pl": "MENT + Test Acetate mieszanka (szybki ester)"
      },
      "routeNote": {
        "hu": "Designer kombinált compound — Trestolone (MENT, 7α-metil-19-nortestosterone) + Testosterone Acetate ester mixture, jellemzően 50/50 vagy 60/40 arányban. Cél: a MENT magas anabolic erősség + a Test androgén-baseline egyetlen olajban. Rövid Ac-ester ⇒ EOD vagy napi IM-injekció. Prolaktin-monitor a 19-Nor MENT-komponens miatt KÖTELEZŐ. Hamisítás-rizikó az UGL-piacon nagyon magas (nem tudod mit kapsz konkrétan).",
        "en": "Designer combined compound — Trestolone (MENT, 7α-methyl-19-nortestosterone) + Testosterone Acetate ester mixture, typically 50/50 or 60/40 ratio. Goal: high MENT anabolic potency + Test androgen baseline in a single oil. Short Ac ester ⇒ EOD or daily IM injection. Prolactin monitoring MANDATORY due to 19-Nor MENT component. Counterfeit risk on UGL market very high (you don't know what's actually inside).",
        "pl": "Designerski połączony compound — Trestolon (MENT, 7α-metylo-19-nortestosteron) + Testosteron Acetate mieszanka estrów, zazwyczaj proporcja 50/50 lub 60/40. Cel: wysoka siła anaboliczna MENT + baseline androgenny Test w jednym oleju. Krótki ester Ac ⇒ iniekcja IM EOD lub codziennie. Monitor prolaktyny OBOWIĄZKOWY z powodu komponentu MENT 19-Nor. Ryzyko podróbek na rynku UGL bardzo wysokie (nie wiesz co dokładnie dostajesz)."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "~8 h (parent MENT + Test Ac után)",
      "halfLifeActive": "~8 h (Ac-mixture)",
      "bioavailability": "~95-100% (IM, gyors Ac-ester hidrolízis mindkét komponens)",
      "onsetTime": {
        "hu": "12-24 h (IM, fast-acting Ac mixture)",
        "en": "12-24 h (IM, fast-acting Ac mixture)",
        "pl": "12-24 h (IM, szybko działająca mieszanka Ac)"
      },
      "dosing": {
        "hu": "75-150 mg/hét IM, EOD vagy 3x/hét osztva. A magasabb dózis a Test-komponensből származik (~50% MENT-effective dose). Max 8-10 hét ciklus. Test-base NEM szükséges (már benne van). Cabergoline + PCT KÖTELEZŐ.",
        "en": "75-150 mg/week IM, split EOD or 3×/week. Higher dose comes from Test component (~50% MENT-effective dose). Max 8-10 week cycle. Test-base NOT needed (already included). Cabergoline + PCT MANDATORY.",
        "pl": "75-150 mg/tydzień IM, podzielone EOD lub 3×/tydzień. Wyższa dawka wynika z komponentu Test (~50% MENT-effective dose). Maks 8-10 tygodni cyklu. Baza Test niewymagana (już zawarta). Cabergolina + PCT OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 75,
          "medium": 100,
          "high": 150
        },
        "unit": "mg/hét",
        "note": {
          "hu": "75-150 mg/hét, EOD vagy E3D IM (rövid felezés). Max 8-10 hét. Test-base mixture-ben, NEM kell külön. Cabergoline KÖTELEZŐ. PCT utolsó injekció +2-3 nap.",
          "en": "75-150 mg/week, EOD or E3D IM (short half-life). Max 8-10 weeks. Test-base in mixture, NOT needed separately. Cabergoline MANDATORY. PCT starts last injection +2-3 days.",
          "pl": "75-150 mg/tydzień, EOD lub E3D IM (krótki okres półtrwania). Maks 8-10 tygodni. Baza Test w mieszance, niewymagana osobno. Cabergolina OBOWIĄZKOWA. PCT od ostatniej iniekcji +2-3 dni."
        }
      },
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 100000,
      "hepatotoxicity": "low",
      "aromatization": "moderate",
      "androgenicRatio": "varies (MENT 650:650 + Test 100:100 mixture)",
      "legalStatus": "Sosem volt Rx (designer mixture, csak UGL). WADA tiltott.",
      "detectionWindow": "Vizelet: 2-3 hét (rövid Ac-ester; MENT + Test metabolit egyaránt LC-MS/MS-detektálható).",
      "quality": {
        "pure": [
          "Tiszta halványsárga olaj, 10ml fiola, 75-150 mg/ml total UGL koncentráció",
          "HPLC-tesztelt forrás ABSZOLÚT KÖTELEZŐ — két aktív komponens miatt nehezebben verifikálható mint a tiszta MENT-Ac"
        ],
        "caution": [
          "EOD vagy napi IM-injekció szükséges (mindkét komponens rövid felezés)",
          "PIP gyakori (rövid Ac-ester carrier)",
          "Prolaktin-monitor KÖTELEZŐ (19-Nor MENT-komponens)",
          "Aromatizáció a Test-komponensből (CYP19) ⇒ E2-emelkedés monitor, AI esetleg szükséges",
          "MENT/Test arány mixture-enként változik — nem standardizált"
        ],
        "avoid": [
          "Prolaktinóma vagy prolaktin-érzékeny állapot",
          "Apaság-tervezés (19-Nor + Test együtt HPTA-szuppresszió szigorúbb)",
          "Első-AAS-ciklus (designer mixture, ismeretlen pontos arány)",
          "Hamisítás-rizikó miatt csak megbízható HPLC-tesztelt UGL"
        ]
      },
      "interactions": [
        "Cabergoline 0,25-0,5 mg E3D prolaktin-monitor KÖTELEZŐ (MENT 19-Nor komponens)",
        "Anastrozole 0,25-0,5 mg E3D E2-monitor (Test-komponens aromatizál)",
        "Testosterone-base NEM szükséges (a mixture már tartalmaz Test-Ac-ot)",
        "PCT utolsó Ac-injekció +2-3 nap (rövid wash-out)"
      ]
    },
    {
      "id": "en",
      "routeId": "en",
      "routeLabel": {
        "hu": "MENT + Test Enanthate mixture (lassú észter)",
        "en": "MENT + Test Enanthate mixture (slow ester)",
        "pl": "MENT + Test Enanthate mieszanka (wolny ester)"
      },
      "routeNote": {
        "hu": "Hosszabb Enan-észter mixture (~5-7 nap felezés) ⇒ heti 1-2 IM-injekció elegendő, steady-state 3-4 hét. Ugyanaz a designer compound (MENT + Test) csak lassú-onset esterekkel. Kényelmesebb mint Ac-mixture, de longer detection window (6-8 hét) + steady-state-hez 3-4 hét kell. Aromatizáció + prolaktin-monitor mindkettő KÖTELEZŐ.",
        "en": "Longer Enan-ester mixture (~5-7 day half-life) ⇒ once/twice weekly IM injection sufficient, steady-state 3-4 weeks. Same designer compound (MENT + Test) just with slow-onset esters. More convenient than Ac mixture, but longer detection window (6-8 weeks) + 3-4 weeks needed for steady-state. Aromatization + prolactin monitoring BOTH MANDATORY.",
        "pl": "Dłuższa mieszanka estru Enan (~5-7 dni okresu półtrwania) ⇒ iniekcja IM raz/dwa razy w tygodniu wystarcza, stan stacjonarny 3-4 tygodnie. Ten sam designerski compound (MENT + Test) tylko z estrami wolno działającymi. Wygodniejszy niż mieszanka Ac, ale dłuższe okno detekcji (6-8 tygodni) + 3-4 tygodnie potrzebne do stanu stacjonarnego. Aromatyzacja + monitor prolaktyny OBA OBOWIĄZKOWE."
      },
      "image": "/performance/oil-vial-orange.png",
      "halfLife": "5-7 nap (Enanthate ester mixture)",
      "halfLifeActive": "~24 h szabad MENT + Test (hidrolízis után)",
      "bioavailability": "~95-100% (IM, slow Enan-ester hidrolízis mindkét komponens)",
      "onsetTime": {
        "hu": "48-72 h (IM, slow-acting Enan; steady-state 3-4 hét)",
        "en": "48-72 h (IM, slow-acting Enan; steady-state 3-4 weeks)",
        "pl": "48-72 h (IM, wolno działający Enan; stan stacjonarny 3-4 tygodnie)"
      },
      "dosing": {
        "hu": "200-400 mg/hét IM, heti 1-2x osztva. Magasabb dózis mint MENT-only (Test-komponens miatt). Minimum 8-10 hét ciklus. Test-base NEM szükséges. Cabergoline + Anastrozole + PCT KÖTELEZŐ.",
        "en": "200-400 mg/week IM, split 1-2× weekly. Higher dose than MENT-only (due to Test component). Minimum 8-10 week cycle. Test-base NOT needed. Cabergoline + Anastrozole + PCT MANDATORY.",
        "pl": "200-400 mg/tydzień IM, podzielone 1-2× w tygodniu. Wyższa dawka niż MENT-only (z powodu komponentu Test). Minimum 8-10 tygodni cyklu. Baza Test niewymagana. Cabergolina + Anastrozol + PCT OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 200,
          "medium": 300,
          "high": 400
        },
        "unit": "mg/hét",
        "note": {
          "hu": "200-400 mg/hét, heti 1-2x IM (Enan-mixture). Minimum 8-10 hét ciklus. Test-base mixture-ben, NEM kell külön. Cabergoline + Anastrozole KÖTELEZŐ. PCT utolsó injekció +14-21 nap.",
          "en": "200-400 mg/week, 1-2× weekly IM (Enan mixture). Minimum 8-10 week cycle. Test-base in mixture, NOT needed separately. Cabergoline + Anastrozole MANDATORY. PCT starts last injection +14-21 days.",
          "pl": "200-400 mg/tydzień, 1-2× w tygodniu IM (mieszanka Enan). Minimum 8-10 tygodni cyklu. Baza Test w mieszance, niewymagana osobno. Cabergolina + Anastrozol OBOWIĄZKOWE. PCT od ostatniej iniekcji +14-21 dni."
        }
      },
      "defaultVialMg": 2000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 300000,
      "hepatotoxicity": "low",
      "aromatization": "moderate",
      "androgenicRatio": "varies (MENT 650:650 + Test 100:100 mixture)",
      "legalStatus": "Sosem volt Rx (designer mixture). UGL only. WADA tiltott.",
      "detectionWindow": "Vizelet: 6-8 hét (hosszabb Enan-ester, mindkét komponens metabolit-családja detektálható).",
      "quality": {
        "pure": [
          "Tiszta sárgás-arany olaj, 10ml fiola, 200-400 mg/ml total UGL koncentráció",
          "HPLC-tesztelt forrás ABSZOLÚT KÖTELEZŐ — két aktív komponens, mixture-arány nem standardizált"
        ],
        "caution": [
          "Heti 1-2x IM-injekció (kényelmesebb mint Ac-mixture)",
          "PIP enyhébb mint Ac-on (hosszabb ester carrier)",
          "Steady-state 3-4 hét — rövid ciklus nem hatékony",
          "Prolaktin + E2 monitor mindkettő KÖTELEZŐ (mindkét komponens)",
          "Mixture-arány UGL-enként változik — nem tudod a pontos MENT/Test megoszlást"
        ],
        "avoid": [
          "Rövid (4-6 hét) ciklus nem hatékony (steady-state nem éri el)",
          "Prolaktinóma vagy prolaktin-érzékeny állapot",
          "Apaság-tervezés (19-Nor + Test HPTA-szuppresszió szigorúbb)",
          "Hamisítás-rizikó miatt csak megbízható HPLC-tesztelt UGL"
        ]
      },
      "interactions": [
        "Cabergoline 0,25-0,5 mg E3D prolaktin-monitor KÖTELEZŐ (MENT 19-Nor komponens)",
        "Anastrozole 0,25-0,5 mg E3D E2-monitor (Test-komponens aromatizál)",
        "Testosterone-base NEM szükséges (a mixture már tartalmaz Test-Enan-t)",
        "PCT utolsó Enan-injekció +14-21 nap (hosszú wash-out)"
      ]
    }
  ],
  "defaultVariant": "ac"
}
