// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.944Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "nandrolone-info",
  "name": "Nandrolone",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Nandrolone Decanoate (Deca-Durabolin), 19-nor-AAS. Klasszikus \"bulking\" AAS, ízületi recovery hatással.",
  "description": "A Nandrolone Decanoate egy 19-nor-tesztoszteron származék, hosszú-hatású injekciós AAS. **Észter-variánsok**: Decanoate (Deca-Durabolin) ~15 napos t1/2, depo-jellegű lassú stabil release, 1x heti injekció elegendő, több vízretenció; Phenylpropionate (NPP) ~5 napos t1/2, gyorsabb on/off profil, 2x heti injekció, anekdotálisan kevesebb vízretenció. Klinikailag anémia és cachexia kezelésére használt. Bodybuildingban \"bulking\" cikluson izomtömeg-növelésre és ízületi recovery-re használt (kollagén-szintézis-emelés). Az aromatáz minimálisan konvertálja ösztrogénné (~10% Testosterone-hoz képest), és 5α-reduktáz dihydronandrolone-é alakítja, ami csak ~20%-os AR-aktivitású (vs DHT, mely STARK AR-agonista) — **ez a fiziológiás prosztata-védelem alapja, Nandrolone egyik fő előnye Testosterone-nal szemben**. \"Deca-dick\" libidó-csökkenés gyakori panasz (prolactin-emelés), \"Deca-blues\" hangulati-anekdota: krónikus 19-nor használat dopamin-szerotonin balance shift gyanúja (3+ hónap után észlelhető depresszív tünetek egyéni jelentésekben).",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "19-nor-AAS, AR-agonista, gyenge aromatizáció"
    },
    {
      "label": "Felezési idő",
      "value": "15 nap (decanoate)"
    },
    {
      "label": "Anabolikus arány",
      "value": "125:37"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: Schedule III. HU/EU: Rx (Deca-Durabolin)."
    }
  ],
  "mechanism": "19-nor-AAS, közvetlen AR-agonista. Aromatáz minimálisan ösztrogénné konvertálja (~10% Testosterone-hoz képest). 5α-reduktáz dihydronandrolone-é alakítja, ami csak ~20%-os AR-aktivitású (vs DHT mely STARK AR-agonista) — fiziológiásan prosztata-védő, Nandrolone egyik fő pharmakológiai előnye. Másodlagosan progeszteron-receptor parciális agonista (prolactin-emelkedés).",
  "legalStatus": "USA: Schedule III. HU/PL/EU: Rx (Deca-Durabolin gyógyszertári forgalom). WADA: tiltott.",
  "onsetTime": "2-3 weeks",
  "halfLife": "15 days (decanoate)",
  "interactionsWith": [
    "cabergoline (prolactin)",
    "aromatase inhibitors"
  ],
  "aromatization": "Minimális — 19-nor szteroid, 5-10% CYP19 konverzió E2-vé (testosterone-hez képest); progesztogén-aktivitás dominál (Bhasin-Kanayama 2003)",
  "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; injektált észter forma hepatikus first-pass-t kerüli (Pope-Kanayama 2014)",
  "wadaStatus": "banned",
  "androgenicRatio": "125:37",
  "benefits": [
    "Izomtömeg-növekedés \"bulking\" cikluson",
    "Ízületi recovery: kollagén-szintézis emelő hatás",
    "Prosztata-mellékhatások ritkábbak (gyenge DHT-konverzió)",
    "Kollagén-szintézis és kötőszövet-támogatás: nandrolone direkten emeli a 1-es típusú prokollagén-szintézist (Hartgens 2004 BJSM PMID 15155420), krónikus alacsony dózis (100-150 mg/hét) ízületi fájdalom enyhítésére dokumentáltan használt"
  ],
  "studies": [
    {
      "title": "The effects of supraphysiologic doses of testosterone on muscle size and strength in normal men",
      "authors": "Bhasin S, Storer TW, Berman N et al.",
      "journal": "N Engl J Med. 1996;335(1):1-7.",
      "pmid": "8637535"
    },
    {
      "title": "Effects of nandrolone decanoate on serum lipoprotein profile",
      "authors": "Hartgens F, Rietjens G, Keizer HA et al.",
      "journal": "BJSM. 2004;38(3):253-259.",
      "pmid": "15155420"
    },
    {
      "title": "Anabolic steroid-induced hypogonadism: diagnosis and treatment",
      "authors": "Rahnema CD, Lipshultz LI, Crosnoe LE et al.",
      "journal": "Fertil Steril. 2014;101(5):1271-9.",
      "pmid": "24636400"
    }
  ],
  "related": [
    "testosterone-info",
    "trenbolone-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 2,
      "medium": 4,
      "high": 6
    },
    "unit": "mg/hét",
    "note": "Deca-bridge 100-150 mg/hét (Alacsony tartomány alatti), bulking 300-600 mg/hét. Decanoate-észter 15 napos felezési idejű, heti 1x injekció elegendő. \"Deca-dick\" libidó-csökkenés prevenció: cabergoline 0.25 mg 2x/hét + Testosterone-bázis együtt. Prolactin-monitoring kötelező."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 hét előtt",
      "markers": "Teljes CBC, lipid panel, májfunkció, hormon-panel (Total T, Free T, E2, LH, FSH, SHBG, Prolactin), HbA1c, vesefunkció, PSA.",
      "purpose": "Baseline. Prolactin-emelkedett baseline kontraindikáció."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "6-8. hét",
      "markers": "Lipid panel, májfunkció, E2, Prolactin (Deca-dick prevenció), vérnyomás.",
      "purpose": "Prolactin >25 ng/mL: cabergoline 0.25 mg 2x/hét. HDL drasztikus csökkenés esetén ciklus-megszakítás."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Utolsó injekció után 3 héttel + 12-16. hét",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, Prolactin, lipid recovery.",
      "purpose": "Deca-szuppresszió 12-16 hétig dokumentált; PCT hosszabb mint rövid-felezésű AAS-eken."
    },
    "cruise": {
      "label": "Cruise alatt",
      "timing": "6 hetente",
      "markers": "Total T, E2, Prolactin, lipid panel, HbA1c, PSA.",
      "purpose": "Hosszú-távú Deca-cruise lehetséges alacsony dózison (100-150mg/hét), de prolactin-monitoring kötelező."
    }
  },
  "variants": [
    {
      "id": "deca",
      "routeId": "deca",
      "routeLabel": {
        "hu": "Nandrolone Decanoate (Deca-Durabolin, lassú észter)",
        "en": "Nandrolone Decanoate (Deca-Durabolin, slow ester)",
        "pl": "Nandrolon Dekanian (Deca-Durabolin, wolny ester)"
      },
      "routeNote": {
        "hu": "A klasszikus bulking-választás 'lassú' progesztogén AAS-stack-ekhez. ~15 napos felezés ⇒ heti 1x IM-injekció elegendő. NEM 17α-alkilált, IM bypass-olja first-pass-t. Minimális aromatizáció (~10%), de a progesztogén receptor-aktivitás miatt 'Deca-dick' libidó-csökkenés és prolaktin-emelkedés gyakori. A leghosszabb detection-ablak AAS-ek közül (12-18 hó).",
        "en": "The classic bulking choice for 'slow' progestogenic AAS stacks. ~15-day half-life ⇒ once-weekly IM injection sufficient. NOT 17α-alkylated, IM bypasses first-pass. Minimal aromatization (~10%), but progestogenic receptor activity causes 'Deca-dick' libido loss and prolactin elevation. Longest detection window among AAS (12-18 months).",
        "pl": "Klasyczny wybór bulking dla 'wolnych' progestagennych stacków AAS. ~15-dniowy okres półtrwania ⇒ wystarczy iniekcja IM raz w tygodniu. NIE 17α-alkilowany, IM omija first-pass. Minimalna aromatyzacja (~10%), ale aktywność progestagenna powoduje 'Deca-dick' (utratę libido) i wzrost prolaktyny. Najdłuższe okno detekcji wśród AAS (12-18 miesięcy)."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "15 nap (Decanoate-ester)",
      "halfLifeActive": "~24 h szabad Nandrolone (hidrolízis után, depo-jellegű lassú release)",
      "bioavailability": "~95% (IM, lassú decanoate-ester hidrolízis)",
      "onsetTime": {
        "hu": "2-3 hét (steady-state 4-6 hét)",
        "en": "2-3 weeks (steady-state 4-6 weeks)",
        "pl": "2-3 tygodnie (stan stacjonarny 4-6 tygodni)"
      },
      "dosing": {
        "hu": "200-400 mg/hét IM, heti 1x. Bulking 400-600 mg/hét. Deca-bridge 100-150 mg/hét. Minimum 12-16 hét ciklus a hosszú felezés miatt. PCT utolsó injekció +3 hét. Cabergoline + Testosterone-base KÖTELEZŐ.",
        "en": "200-400 mg/week IM, once weekly. Bulking 400-600 mg/week. Deca-bridge 100-150 mg/week. Minimum 12-16 week cycle due to long half-life. PCT starts last injection +3 weeks. Cabergoline + Testosterone-base MANDATORY.",
        "pl": "200-400 mg/tydzień IM, raz w tygodniu. Bulking 400-600 mg/tydzień. Deca-bridge 100-150 mg/tydzień. Minimum 12-16 tygodni cyklu z powodu długiego okresu półtrwania. PCT od ostatniej iniekcji +3 tygodnie. Cabergolina + Testosteron-baza OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 200,
          "medium": 400,
          "high": 600
        },
        "unit": "mg/hét",
        "note": {
          "hu": "200-600 mg/hét, heti 1x IM (15 napos felezés). Bulking 400-600, bridge 100-200. PCT utolsó injekció +3 hét. Apaság-tervezés esetén kerülendő (HPTA-recovery 6-12 hó).",
          "en": "200-600 mg/week, once weekly IM (15-day half-life). Bulking 400-600, bridge 100-200. PCT starts last injection +3 weeks. Avoid if planning fatherhood (HPTA recovery 6-12 months).",
          "pl": "200-600 mg/tydzień, raz w tygodniu IM (15-dniowy okres półtrwania). Bulking 400-600, bridge 100-200. PCT od ostatniej iniekcji +3 tygodnie. Unikać przy planowanym ojcostwie (regeneracja HPTA 6-12 miesięcy)."
        }
      },
      "defaultVialMg": 2000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 400000,
      "hepatotoxicity": "low",
      "aromatization": "low",
      "androgenicRatio": "125:37",
      "legalStatus": "HU/PL/EU: Rx (Deca-Durabolin Organon SmPC, indikáció: osteoporosis, anemia). USA: Schedule III. WADA tiltott.",
      "detectionWindow": "Vizelet: 12-18 hónap (Deca hosszú-távú metabolit 19-norandrosterone, WADA-akkreditált LC-MS/MS — LEGHOSSZABB detection-ablak AAS-ek közül).",
      "quality": {
        "pure": [
          "Organon Deca-Durabolin 50 mg/ml halvány-sárga olajos ampulla (EU Rx, klasszikus 1962 óta forgalomban)",
          "UGL Nandrolone Decanoate 200-300 mg/ml halvány-sárga olajos fiola, HPLC-tesztelt forrás kötelező"
        ],
        "caution": [
          "Hosszú-távú HPTA-szuppresszió 12-16 hét után — recovery 6-12 hó lehet",
          "Prolaktin-emelkedés a progesztogén receptor-affinitás miatt (cabergoline készenlét)",
          "'Deca-dick' libidó-csökkenés + ED gyakori (de Souza 2011)",
          "Hosszú detection-ablak (12-18 hó) — versenysport-tesztelés előtt EVEKKEL kerülendő"
        ],
        "avoid": [
          "Apaság-tervezés közeli időhorizonton (HPTA-recovery 6-12 hónap Deca után)",
          "Versenysport-tesztelés 12-18 hónap előtt",
          "Prolaktin-érzékeny állapot (prolactinoma, gynecomastia)"
        ]
      },
      "interactions": [
        "Cabergoline 0,25 mg 2x/hét prolaktin-monitor KÖTELEZŐ",
        "Testosterone-base stack KÖTELEZŐ (Deca standalone ED-rizikó miatt)",
        "PCT utolsó Deca-injekció +3 hét (15-napos felezés miatt hosszú wash-out)"
      ]
    },
    {
      "id": "npp",
      "routeId": "npp",
      "routeLabel": {
        "hu": "Nandrolone Phenylpropionate (NPP, gyors észter)",
        "en": "Nandrolone Phenylpropionate (NPP, fast ester)",
        "pl": "Nandrolon Fenylopropionian (NPP, szybki ester)"
      },
      "routeNote": {
        "hu": "Gyorsabb Phenylpropionate-ester ~5 napos felezéssel ⇒ EOD vagy 2x heti IM-injekció szükséges. Ugyanaz a parent Nandrolone, így a progesztogén-prolaktin profil azonos a Deca-éval, csak gyorsabb on/off. Rövidebb (8-10 hetes) ciklusokra alkalmasabb mint a Deca. PIP NPP-n jellemzően erősebb. Néhány felhasználó alacsony dózisú NPP-t (~140 mg/hét) ízületi-support célra futtatja.",
        "en": "Faster Phenylpropionate ester with ~5-day half-life ⇒ EOD or twice-weekly IM injection required. Same parent Nandrolone, so progestogenic-prolactin profile is identical to Deca, just faster on/off. More suitable for shorter (8-10 week) cycles than Deca. PIP typically stronger on NPP. Some users run low-dose NPP (~140 mg/week) for joint support.",
        "pl": "Szybszy ester Fenylopropionianowy z ~5-dniowym okresem półtrwania ⇒ wymagana iniekcja IM EOD lub dwa razy w tygodniu. Ten sam macierzysty Nandrolon, więc profil progestagenno-prolaktynowy identyczny z Deca, tylko szybsze on/off. Bardziej odpowiedni do krótszych cykli (8-10 tygodni) niż Deca. PIP zazwyczaj silniejszy na NPP. Niektórzy użytkownicy stosują NPP w niskich dawkach (~140 mg/tydzień) na wsparcie stawów."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "~5 nap (Phenylpropionate-ester)",
      "halfLifeActive": "~24 h szabad Nandrolone (gyorsabb release mint Deca)",
      "bioavailability": "~95% (IM, gyorsabb Phenylpropionate-ester hidrolízis)",
      "onsetTime": {
        "hu": "1-2 hét (steady-state 2-3 hét)",
        "en": "1-2 weeks (steady-state 2-3 weeks)",
        "pl": "1-2 tygodnie (stan stacjonarny 2-3 tygodnie)"
      },
      "dosing": {
        "hu": "100-150 mg EOD vagy 200-400 mg/hét IM, 2x heti osztva. Bulking 300-600 mg/hét. Ízületi-bridge 100-150 mg/hét. 8-10 hét ciklus. PCT utolsó injekció +5-7 nap. Cabergoline + Testosterone-base KÖTELEZŐ.",
        "en": "100-150 mg EOD or 200-400 mg/week IM, split 2× weekly. Bulking 300-600 mg/week. Joint-bridge 100-150 mg/week. 8-10 week cycle. PCT starts last injection +5-7 days. Cabergoline + Testosterone-base MANDATORY.",
        "pl": "100-150 mg EOD lub 200-400 mg/tydzień IM, podzielone 2× w tygodniu. Bulking 300-600 mg/tydzień. Joint-bridge 100-150 mg/tydzień. 8-10 tygodni cyklu. PCT od ostatniej iniekcji +5-7 dni. Cabergolina + Testosteron-baza OBOWIĄZKOWE."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 100,
          "medium": 200,
          "high": 300
        },
        "unit": "mg/inj",
        "note": {
          "hu": "100-150 mg EOD vagy 200-400 mg/hét, 2x heti IM (5 napos felezés). Bulking 300-600/hét, bridge 100-150. PCT utolsó injekció +5-7 nap (rövid wash-out mint Deca).",
          "en": "100-150 mg EOD or 200-400 mg/week, split 2× weekly IM (5-day half-life). Bulking 300-600/week, bridge 100-150. PCT starts last injection +5-7 days (shorter wash-out than Deca).",
          "pl": "100-150 mg EOD lub 200-400 mg/tydzień, podzielone 2× w tygodniu IM (5-dniowy okres półtrwania). Bulking 300-600/tydzień, bridge 100-150. PCT od ostatniej iniekcji +5-7 dni (krótszy wash-out niż Deca)."
        }
      },
      "defaultVialMg": 1000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 100000,
      "hepatotoxicity": "low",
      "aromatization": "low",
      "androgenicRatio": "125:37",
      "legalStatus": "EU: Rx (Durabolin, Phenylprop) regional. USA: Schedule III. HU/PL: alig elérhető Rx, jellemzően UGL. WADA tiltott.",
      "detectionWindow": "Vizelet: 10-14 hónap (19-norandrosterone-metabolit, hasonló mint Deca-é, hosszú-távú).",
      "quality": {
        "pure": [
          "UGL NPP 100 mg/ml halvány-sárga olajos fiola (HPLC-tesztelt forrás kötelező)",
          "Némely EU-pharmacy Durabolin (regional Rx) 25-50 mg/ml — ritka"
        ],
        "caution": [
          "EOD vagy 2x heti IM-injekció szükséges (rövid felezés)",
          "Prolaktin-emelkedés Deca-szintű (cabergoline készenlét)",
          "PIP NPP-n erősebb mint Deca-n (rövid-ester carrier sűrűbb)",
          "Detection-ablak hosszú (10-14 hó) — versenysport előtt évekkel kerülendő"
        ],
        "avoid": [
          "Apaság-tervezés közeli időhorizonton (HPTA-recovery 4-8 hó NPP után)",
          "Erős injection-fárasztás esetén Deca preferált (heti 1x vs EOD)"
        ]
      },
      "interactions": [
        "Cabergoline 0,25 mg 2x/hét prolaktin-monitor KÖTELEZŐ",
        "Testosterone-base stack KÖTELEZŐ",
        "PCT utolsó NPP-injekció +5-7 nap (gyorsabb clearance mint Deca-n)"
      ]
    }
  ],
  "defaultVariant": "deca",
  "anecdote": "Az anekdotikus beszámolók szerint a felhasználók 3-5 hónapos tömegnövelő fázisokban futtatják a Nandrolone-t (NPP vagy Deca észterek) jelentős méretnövekedéssel. Közösségi beszámolók szerint a prolaktin-emelkedés gyakori, néha P5P vagy cabergolin hozzáadásával mérséklik. A Deca a hosszabban ható észter és inkább a vízvisszatartással hozható összefüggésbe, míg az NPP rövidebben hat és anekdotikusan kevesebb vízvisszatartást okoz, bár az egyéni változékonyság nagy. Néhány felhasználó enyhe depressziós tünetekről számol be az NPP 3. hónapjának környékén, amit a szakirodalom a neuroszteroid és progesztogén aktivitással hoz összefüggésbe. Alacsony dózisú NPP-t (körülbelül 140 mg/hét) időnként egész évben futtatnak ízületi támogatásra a krónikus ízületi problémákkal küzdő felhasználók. Összességében a Nandrolone-észterek továbbra is alapvető tömegciklus-vegyületek, a prolaktin és mentális egészségi mellékhatások a leggyakrabban emlegetett kompromisszumok."
}
