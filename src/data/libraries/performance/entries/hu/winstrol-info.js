// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.944Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "winstrol-info",
  "name": "Winstrol",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Stanozolol, 17α-alkilált DHT-származék. Klasszikus \"cutting\" AAS, SHBG-szuppresszor.",
  "description": "A Stanozolol (Winstrol) DHT-származék, 17α-alkilezett orális vagy injekciós AAS. Az SHBG-csökkenés mechanizmusa direkt hepatikus SHBG-mRNA-szintézis-gátlás (Pugeat 1981 evidencia), ami emeli a szabad tesztoszteron-frakciót — még TRT-baseline mellett is jelentős andro-amplifikáció. Nem aromatizál, így nincs ösztrogén-mellékhatás. Klinikailag hereditary angioedema és anémia kezelésére fejlesztették, sportkontextusban \"cutting\" cikluson izom-megtartás céljából használt. A Ben Johnson 1988 olimpiai szkandallum ezt a vegyületet érintette. **Pharmakológiai pozícionálás**: force-amplifier és tissue-quality modulátor inkább, mint hypertrophy-builder — az erő-növekedés gyakran aránytalan a látható izomtömeg-gyarapodáshoz. **Connective tissue figyelmeztetés (Liow 1995 PMID 7551762)**: stanozolol-asszociált ínszakadás-esetek atléta-irodalomban jól dokumentáltak; az izomerő gyorsabban nő mint az ínszövet kollagén-keresztkötés-érettsége, ami szakadás-veszélyt teremt különösen sprinter/explosive-sportokban.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista + SHBG-szuppresszor"
    },
    {
      "label": "Felezési idő",
      "value": "9 óra (oral), 24 óra (injekciós)"
    },
    {
      "label": "Anabolikus arány",
      "value": "320:30"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: FDA-engedélyezett (Winstrol Rx). EU: Rx korlátozott."
    }
  ],
  "mechanism": "AR-agonista DHT-szerű karakterrel. Direkt hepatikus SHBG-mRNA-szintézist GÁTOL → szabad tesztoszteron-frakció emelkedés (andro-amplifikáció). Nem aromatizál (DHT-származék), nem konvertál DHT-vé.",
  "legalStatus": "USA: FDA Schedule III. HU/EU: Rx. WADA: tiltott.",
  "onsetTime": "7-14 days",
  "halfLife": "9 h (oral)",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "warfarin"
  ],
  "aromatization": "Nem — heterociklusos pirazol A-gyűrű, NEM CYP19 szubsztrát; SHBG-csökkentés a fő ösztrogén-független hatás (Schänzer 1996)",
  "hepatotoxicity": "Magas — 17α-alkilált; oral és injektálható forma is hepatotoxikus, transzamináz-elevation gyakori 6+ hetes ciklusban (Hartgens-Kuipers 2004)",
  "wadaStatus": "banned",
  "androgenicRatio": "320:30",
  "benefits": [
    "Cutting cycle izom-megtartás kalória-deficitben",
    "SHBG-csökkenés emeli a szabad T-frakciót",
    "Erő-növekedés sprintereknek és atlétáknak",
    "Vörösvérsejt + aerob kapacitás emelés: erythropoietikus hatás dokumentált (Pope 2014 review), endurance-performance enhancement sub-elite atlétáknál"
  ],
  "studies": [
    {
      "title": "Effects of stanozolol on physiological measurements in healthy men",
      "authors": "Stergiopoulos K, Brennan JJ, Mathews R et al.",
      "journal": "Med Sci Sports Exerc. 2008;40(4):574-579.",
      "pmid": "18317369"
    },
    {
      "title": "Anabolic steroid abuse and tendon injuries",
      "authors": "Liow RY, Tavares S.",
      "journal": "BJSM. 1995;29(2):77-79.",
      "pmid": "7551762"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs",
      "authors": "Pope HG Jr, Wood RI, Rogol A et al.",
      "journal": "Endocr Rev. 2014;35(3):341-375.",
      "pmid": "24423981"
    }
  ],
  "related": [
    "testosterone-info",
    "trenbolone-info",
    "anavar-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 0.4,
      "medium": 0.7,
      "high": 1
    },
    "unit": "mg/nap",
    "note": "Oral 30-80 mg/nap (Alacsony-Magas tartomány), injekciós Winstrol Depot 50 mg EOD. SHBG-szuppressziós hatása miatt szabad T-frakció emelkedik. Hepatotoxicitás magas (17α-alkilált). Maximum 6-8 hét ciklus. PCT szükséges."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2 héttel előtt",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, bilirubin. Lipid panel, hormon-panel, vesefunkció, CBC.",
      "purpose": "Máj-baseline kritikus 17α-alkilált AAS-en."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "3-4. hét",
      "markers": "ALT, AST, GGT, bilirubin, lipid panel (HDL drasztikus csökkenés várható), E2, vérnyomás.",
      "purpose": "Vész-detektálás. ALT/AST >3x indikál ciklus-megszakítást."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT 4. + 8-12. hét",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatikus + lipid recovery.",
      "purpose": "HPTA + hepatikus recovery verifikálás."
    },
    "cruise": {
      "label": "Cruise alatt",
      "timing": "6 hetente",
      "markers": "Hepatikus + lipid + hormon-panel + EKG referencia.",
      "purpose": "Hosszú-távú Winstrol-cruise NEM ajánlott a hepatotoxicitás miatt."
    }
  },
  "variants": [
    {
      "routeId": "oral",
      "routeLabel": "Stanozolol orális (tabletta)",
      "image": "/performance/tablet-pile-white.png",
      "legalStatus": "USA: FDA-jóváhagyott Rx Winstrol tabletta (Pfizer Pharmacia/Sanofi-Aventis discontinued 2010); ma UGL piacon dominans. HU/EU: Rx korlátozott. WADA tiltott.",
      "bioavailability": "~85-95% (orális, 17α-alkilált first-pass-rezisztens)",
      "onsetTime": "1-2 óra (orális, fast-absorption)",
      "halfLife": "9 óra (orális)",
      "halfLifeActive": "9 óra",
      "detectionWindow": "3-4 hét vizelet (parent + 3'-OH-stanozolol metabolit, WADA-akkreditált).",
      "aromatization": "Nem — heterociklusos pirazol A-gyűrű, NEM CYP19 szubsztrát.",
      "hepatotoxicity": "Magas — 17α-alkilált, hepatikus first-pass-stressz; ALT/AST 2-4x emelkedés 6+ hetes ciklusban gyakori (Hartgens-Kuipers 2004).",
      "quality": {
        "pure": [
          "Tiszta fehér, jelölt tabletta (5 mg vagy 10 mg klasszikus UGL dosing)",
          "HPLC-tesztelt forrás kötelező — Winstrol-tabletta gyakran hamisított"
        ],
        "caution": [
          "Hepatotoxicitás (ALT/AST 2-4x emelkedés 6+ hét után gyakori)",
          "Lipid-zavar: HDL drasztikus csökkenés (>30% baseline-hez képest)",
          "Ízületi szárazság (\"Winstrol joint pain\") — szubjektíven kínzó",
          "Ínszakadás-veszély (Liow 1995 PMID 7551762 esetjelentések sprinter/explosive sportokban)"
        ],
        "avoid": [
          "Bármilyen meglévő máj-zavar (zsírmáj, hepatitis)",
          "Alkohol, paracetamol egyidejű használata",
          "Sprinter/explosive sportoló edzésciklus alatt (ínszakadás-veszély)"
        ]
      },
      "interactions": [
        "Más 17α-alkilált AAS (Anadrol, Dianabol, Superdrol) együtt extrém hepatotoxikus",
        "TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező",
        "PCT utolsó tabletta +1-2 nap után indul"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 30,
          "medium": 50,
          "high": 80
        },
        "unit": "mg/nap (orális, 1-2x osztva)",
        "note": "30-80 mg/nap, max 8 hét ciklus. TUDCA + NAC kötelező. Női dózis 5-10 mg/nap maximum. PCT utolsó tabletta +1-2 nap."
      }
    },
    {
      "routeId": "aq",
      "routeLabel": "Stanozolol vizes szuszpenzió (IM, Winstrol Depot)",
      "image": "/performance/water-vial.png",
      "legalStatus": "Sanofi Winstrol Depot (Stanozolol Aqueous Suspension 50 mg/ml, EU Rx korlátozott). USA: ma UGL. WADA tiltott.",
      "bioavailability": "~95-100% (IM, depot NÉLKÜLI direct absorption mikrokristályokból)",
      "onsetTime": "12-24 óra (IM, slow microcristalline depot release)",
      "halfLife": "~24 óra (parent Stanozolol)",
      "halfLifeActive": "24 óra",
      "detectionWindow": "4-6 hét vizelet (hosszabb mint orálnál, depot-felszívódás).",
      "aromatization": "Nem — heterociklusos pirazol A-gyűrű, NEM CYP19 szubsztrát egyik formánál sem.",
      "hepatotoxicity": "Mérsékelt-magas — meglepő módon az injektábilis Winstrol is hepatotoxikus a 17α-alkil-csoport miatt (NEM a first-pass okozza, hanem maga a molekula szisztémás hatása). Klinikailag enyhébb mint az orál, DE NEM nulla.",
      "quality": {
        "pure": [
          "Tiszta vízben suspendált fehér mikrokristályok, 1ml ampulla, rázás előtt opálos",
          "Rx-grade: Sanofi Winstrol Depot 50mg/ml (EU, ritka)"
        ],
        "caution": [
          "EXTRA fájdalmas injekció — kristályok fizikailag irritálják (PIP, gyakori abszcessz-rizikó)",
          "EOD injekció szükséges (~24 óra felezés)",
          "Hepatotoxicitás mérsékelt (a 17α-alkil hatása szisztémásan is jelen)",
          "Ízületi szárazság ugyanaz mint orálnál"
        ],
        "avoid": [
          "Fájdalom-érzékenység (a kristályok jelentős PIP-et + abszcessz-rizikót okoznak)",
          "Aszeptikus injekciós technika hiánya",
          "Bármilyen máj-zavar (mérsékelt hepatotoxicitás)"
        ]
      },
      "interactions": [
        "Más AAS-szal kombinálva fokozza HPTA-szuppressziót",
        "TUDCA 500 mg/nap ajánlott (mérsékelt hepatotoxicitás miatt)",
        "PCT utolsó injekció +5-7 nap után indul"
      ],
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/EOD (IM)",
        "note": "50-100 mg EOD, max 8 hét. TUDCA ajánlott. Aszeptikus technika kritikus (abszcessz-rizikó). PCT utolsó injekció +5-7 nap."
      }
    }
  ],
  "defaultVariant": "oral",
  "anecdote": "Az anekdotikus beszámolók a Winstrolt kevésbé drámai növekedéssel és inkább jellegzetes sűrű, feszes, teljesítményfokozó karakterrel írják le — az erőnövekedés néha aránytalannak tűnik a látható izomgyarapodáshoz képest. Visszatérő téma a közösségi beszámolókban, hogy a Winstrol észrevehető eltolódásokat okoz az izomkeménységben, a szeparációban és a rekompozícióban, ami megalapozta hosszú távú hírnevét a fizikai megjelenésre összpontosító használatban. Gyakran úgy írják le, hogy inkább erőkifejtés- és szövetminőség-modulátorként viselkedik, semmint klasszikus hipertrófia-anabolikumként, ami megkülönböztetett farmakológiai rést ad neki. Ugyanakkor a felhasználók hangsúlyozzák, hogy a 'száraz, finomított' kép elfedheti a fontos kompromisszumokat — különösen a kemény lipid-hatásokat, az orális forma máj-stresszét, a HPTA-szuppressziót, a vérnyomás-aggályokat és a gyakori kötőszövet- vagy ízületi panaszokat. A Winstrolt néha alábecsülik, mert nem drámai tömegnövelő szerként mutatkozik be, miközben a gyakorlatban erőteljes hatást gyakorol a szövet teljesítményére és megjelenésére — ez nagyrészt az ok, amiért az egyik legspecializáltabb és legtekintélyesebb hagyományos vegyület maradt."
}
