// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.944Z
// Edit this file directly to update the HU body; do not re-run the script.
// v0.27 RICH multi-variant expansion — 2026-05-23

export default {
  "id": "winstrol-info",
  "name": "Winstrol",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Stanozolol, 17α-alkilált DHT-származék. Klasszikus \"cutting\" AAS, SHBG-szuppresszor.",
  "description": "A Stanozolol (Winstrol) DHT-származék, 17α-alkilezett orális vagy injekciós AAS. Az SHBG-csökkenés mechanizmusa direkt hepatikus SHBG-mRNA-szintézis-gátlás (Sinnecker & Köhler 1990, PMID 2723028), ami emeli a szabad tesztoszteron-frakciót — még TRT-baseline mellett is jelentős andro-amplifikáció. Nem aromatizál, így nincs ösztrogén-mellékhatás. Klinikailag hereditary angioedema és anémia kezelésére fejlesztették, sportkontextusban \"cutting\" cikluson izom-megtartás céljából használt. A Ben Johnson 1988 olimpiai szkandallum ezt a vegyületet érintette. **Pharmakológiai pozícionálás**: force-amplifier és tissue-quality modulátor inkább, mint hypertrophy-builder — az erő-növekedés gyakran aránytalan a látható izomtömeg-gyarapodáshoz. **Connective tissue figyelmeztetés (Liow 1995 PMID 7551764)**: stanozolol-asszociált ínszakadás-esetek atléta-irodalomban jól dokumentáltak; az izomerő gyorsabban nő mint az ínszövet kollagén-keresztkötés-érettsége, ami szakadás-veszélyt teremt különösen sprinter/explosive-sportokban.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista + SHBG-szuppresszor"
    },
    {
      "label": "Felezési idő",
      "value": "~9 óra (oral), ~24 óra (aq IM)"
    },
    {
      "label": "Anabolikus:Androgén arány",
      "value": "320:30"
    },
    {
      "label": "Aromatizáció",
      "value": "Nem (DHT-származék)"
    },
    {
      "label": "Hepatotoxicitás",
      "value": "Mérsékelt-magas (17α-alkilált, mindkét forma)"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: FDA Schedule III Rx. EU: Rx korlátozott. WADA: tiltott."
    }
  ],
  "mechanism": "AR-agonista DHT-szerű karakterrel. Direkt hepatikus SHBG-mRNA-szintézist GÁTOL → szabad tesztoszteron-frakció emelkedés (andro-amplifikáció). Nem aromatizál (DHT-származék pirazol A-gyűrűvel), nem konvertál DHT-vé.",
  "legalStatus": "USA: FDA Schedule III. HU/EU: Rx. WADA: tiltott.",
  "onsetTime": "7-14 days",
  "halfLife": "~9 h (oral)",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "warfarin"
  ],
  "aromatization": "none",
  "hepatotoxicity": "moderate-high",
  "androgenicRatio": "320:30",
  "wadaStatus": "banned",
  "benefits": [
    "Cutting cycle izom-megtartás kalória-deficitben",
    "SHBG-csökkenés emeli a szabad T-frakciót (andro-amplifikáció)",
    "Erő-növekedés sprintereknek és atlétáknak",
    "Izomkeménység és szeparáció javulása rekompozíciós fázisban",
    "Vörösvérsejt + aerob kapacitás emelés: erythropoietikus hatás dokumentált (Pope 2014 review)"
  ],
  "studies": [
    {
      "title": "Effects of androgenic-anabolic steroids in athletes",
      "authors": "Hartgens F, Kuipers H.",
      "journal": "Sports Med. 2004;34(8):513-54.",
      "pmid": "15248788"
    },
    {
      "title": "Bilateral rupture of the quadriceps tendon associated with anabolic steroids",
      "authors": "Liow RY, Tavares S.",
      "journal": "Br J Sports Med. 1995;29(2):77-79.",
      "pmid": "7551764"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A et al.",
      "journal": "Endocr Rev. 2014;35(3):341-375.",
      "pmid": "24423981"
    },
    {
      "title": "Effects of short-term stanozolol administration on serum lipoproteins in hepatic lipase deficiency",
      "authors": "Bausserman LL, Saritelli AL, Herbert PN.",
      "journal": "Metabolism. 1997;46(9):992-6.",
      "pmid": "9284885"
    }
  ],
  "related": [
    "testosterone-info",
    "trenbolone-info",
    "anavar-info"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 25,
      "medium": 50,
      "high": 80
    },
    "unit": "mg/nap",
    "note": "Oral 25-80 mg/nap (2x osztva), aq 50 mg EOD vagy 100 mg 3x/hét IM. SHBG-szuppressziós hatása miatt szabad T-frakció emelkedik. Hepatotoxicitás mérsékelt-magas (17α-alkilált, mindkét forma). Maximum 6-8 hét ciklus. PCT szükséges."
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
      "id": "oral",
      "routeId": "oral",
      "routeLabel": {
        "hu": "Stanozolol orális (tabletta)",
        "en": "Stanozolol oral (tablet)",
        "pl": "Stanozolol doustny (tabletka)"
      },
      "routeNote": {
        "hu": "Kényelmes napi tabletta, ~9 órás felezési idő — 2 részre osztott napi dózis az egyenletes szintekhez. 17α-metil csoport ⇒ hepatotoxikus first-pass stressz. Cutting cycle izom-megtartásra és SHBG-szuppresszióra a legelterjedtebb forma. Ínszakadás-veszélyre fokozottan ügyelj explosive/sprint sportoknál.",
        "en": "Convenient daily tablet with ~9 h half-life — split into 2 daily doses for steady levels. 17α-methyl group ⇒ hepatotoxic first-pass stress. Most common form for cutting cycle muscle sparing and SHBG suppression. Watch for tendon rupture risk in explosive/sprint sports.",
        "pl": "Wygodna tabletka dzienna z ~9 h okresem półtrwania — podziel na 2 dawki dziennie dla stabilnych poziomów. Grupa 17α-metylu ⇒ hepatotoksyczny stres first-pass. Najczęstsza forma do ochrony mięśni w cyklu redukcyjnym i supresji SHBG. Uwaga na ryzyko zerwania ścięgna w sportach eksplozywnych/sprinterskich."
      },
      "image": "/performance/tablet-pile-white.png",
      "halfLife": "~9 h (oral)",
      "bioavailability": "~85-95% (oral, 17α-alkilált, first-pass-rezisztens)",
      "onsetTime": {
        "hu": "1-2 óra (gyors felszívódás)",
        "en": "1-2 h (fast absorption)",
        "pl": "1-2 h (szybkie wchłanianie)"
      },
      "dosing": {
        "hu": "25-50 mg/nap, 2× osztva (reggel + délután). Tipikus cutting dózis 40-50 mg/nap, max 80 mg/nap. Ciklus max 6-8 hét, TUDCA + NAC kötelező. Női dózis max 5-10 mg/nap.",
        "en": "25-50 mg/day split 2× (morning + afternoon). Typical cutting dose 40-50 mg/day, max 80 mg/day. Cycle max 6-8 weeks, TUDCA + NAC mandatory. Female dose max 5-10 mg/day.",
        "pl": "25-50 mg/dzień w 2 dawkach (rano + popołudnie). Typowa dawka cięcia 40-50 mg/dzień, maks 80 mg/dzień. Cykl maks 6-8 tygodni, TUDCA + NAC obowiązkowe. Dawka dla kobiet maks 5-10 mg/dzień."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 25,
          "medium": 50,
          "high": 80
        },
        "unit": "mg/day",
        "note": {
          "hu": "25-80 mg/nap, 2× osztva. TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező. PCT utolsó tabletta +1-2 nap. Max 6-8 hét ciklus.",
          "en": "25-80 mg/day split 2×. TUDCA 500 mg/day + NAC 1200 mg/day mandatory. PCT last tablet +1-2 days. Max 6-8 week cycle.",
          "pl": "25-80 mg/dzień w 2 dawkach. TUDCA 500 mg/dzień + NAC 1200 mg/dzień obowiązkowe. PCT ostatnia tabletka +1-2 dni. Maks 6-8 tygodni."
        }
      },
      "hepatotoxicity": "moderate-high",
      "aromatization": "none",
      "androgenicRatio": "320:30",
      "legalStatus": "USA: FDA-jóváhagyott Rx Winstrol tabletta (Pfizer Pharmacia/Sanofi-Aventis discontinued 2010); ma UGL piacon dominans. HU/EU: Rx korlátozott. WADA tiltott.",
      "halfLifeActive": "~9 h",
      "detectionWindow": "3-4 hét vizelet (parent + 3'-OH-stanozolol metabolit, WADA-akkreditált).",
      "quality": {
        "pure": [
          "Tiszta fehér, jelölt tabletta (5 mg vagy 10 mg klasszikus UGL dosing)",
          "HPLC-tesztelt forrás kötelező — Winstrol-tabletta gyakran hamisított"
        ],
        "caution": [
          "Hepatotoxicitás: ALT/AST 2-4x emelkedés 6+ hetes ciklusban gyakori (Hartgens-Kuipers 2004)",
          "Lipid-zavar: HDL drasztikus csökkenés (>30% baseline-hez képest) — szív-kockázat",
          "Ínszakadás-veszély (Liow 1995): izomerő gyorsabban nő mint az ínkollagén — sprinter/explosive sport kerülendő",
          "Ízületi szárazság (\"Winstrol joint pain\") — szubjektíven kínzó, ízületi folyadék-csökkentő hatás"
        ],
        "avoid": [
          "Bármilyen meglévő máj-zavar (zsírmáj, hepatitis)",
          "Alkohol, paracetamol, más 17α-alkilált AAS egyidejű használata",
          "Sprinter/explosive sportoló edzésciklus alatt (ínszakadás-veszély fokozott)"
        ]
      },
      "interactions": [
        "Más 17α-alkilált AAS (Anadrol, Dianabol, Superdrol) együtt extrém hepatotoxikus",
        "TUDCA 500 mg/nap + NAC 1200 mg/nap kötelező",
        "PCT utolsó tabletta +1-2 nap után indul"
      ]
    },
    {
      "id": "aq",
      "routeId": "aq",
      "routeLabel": {
        "hu": "Stanozolol vizes szuszpenzió (IM, Winstrol Depot)",
        "en": "Stanozolol aqueous suspension (IM, Winstrol Depot)",
        "pl": "Stanozolol zawiesina wodna (IM, Winstrol Depot)"
      },
      "routeNote": {
        "hu": "Vizes szuszpenzió IM (NEM olajbázis!) — a stanozolol vízben szuszpendálható mikrokristályok formájában (innen az 'aq' = aqueous). ~24 h felezési idő depot-felszívódásból. FONTOS: az injekció tipikusan nagyon fájdalmas (a kristályok irritálják az izomszövetet — PIP, ödéma). Hepatotoxicitás EGYENLŐ az orálissal, mert ugyanaz a 17α-metil molekula szisztémásan hat.",
        "en": "Aqueous suspension IM (NOT oil-based!) — stanozolol as water-suspended microcrystals (hence 'aq' = aqueous). ~24 h half-life from depot absorption. IMPORTANT: injection is typically very painful (crystals irritate muscle tissue — PIP, edema). Hepatotoxicity is EQUAL to oral because the same 17α-methyl molecule acts systemically.",
        "pl": "Zawiesina wodna IM (NIE na bazie oleju!) — stanozolol jako mikrokryształy zawieszone w wodzie (stąd 'aq' = aqueous). ~24 h okres półtrwania z absorpcji depot. WAŻNE: iniekcja jest zazwyczaj bardzo bolesna (kryształy drażnią tkankę mięśniową — PIP, obrzęk). Hepatotoksyczność RÓWNA doustnej, bo ta sama cząsteczka 17α-metylu działa systemowo."
      },
      "image": "/performance/water-vial.png",
      "halfLife": "~24 h (IM depot, mikrokristályos)",
      "bioavailability": "~95-100% (IM, depot nélküli direkt absorpció mikrokristályokból)",
      "onsetTime": {
        "hu": "12-24 óra (IM, lassú mikrokristályos depot-felszívódás)",
        "en": "12-24 h (IM, slow microcrystalline depot release)",
        "pl": "12-24 h (IM, powolne uwalnianie z depot mikrokrystalicznego)"
      },
      "dosing": {
        "hu": "50 mg EOD (minden második nap) IM, vagy 100 mg 3x/hét IM. Tipikus heti dózis 100-200 mg. Max 8 hét. Aszeptikus injekciós technika kritikus (kristályok = abszcessz-veszély).",
        "en": "50 mg EOD (every other day) IM, or 100 mg 3×/week IM. Typical weekly dose 100-200 mg. Max 8 weeks. Aseptic injection technique critical (crystals = abscess risk).",
        "pl": "50 mg EOD (co drugi dzień) IM, lub 100 mg 3×/tydzień IM. Typowa dawka tygodniowa 100-200 mg. Maks 8 tygodni. Aseptyczna technika iniekcji krytyczna (kryształy = ryzyko ropnia)."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 50,
          "medium": 75,
          "high": 100
        },
        "unit": "mg/inj",
        "note": {
          "hu": "50-100 mg/injekció EOD (IM). TUDCA 500 mg/nap ajánlott. Aszeptikus technika kritikus. PCT utolsó injekció +5-7 nap. Max 8 hét.",
          "en": "50-100 mg/injection EOD (IM). TUDCA 500 mg/day recommended. Aseptic technique critical. PCT last injection +5-7 days. Max 8 weeks.",
          "pl": "50-100 mg/iniekcja EOD (IM). TUDCA 500 mg/dzień zalecany. Aseptyczna technika kluczowa. PCT ostatnia iniekcja +5-7 dni. Maks 8 tygodni."
        }
      },
      "defaultVialMg": 500,
      "defaultBacMl": 10,
      "defaultDoseMcg": 50000,
      "hepatotoxicity": "moderate-high",
      "aromatization": "none",
      "androgenicRatio": "320:30",
      "legalStatus": "Sanofi Winstrol Depot (Stanozolol Aqueous Suspension 50 mg/ml, EU Rx korlátozott). USA: ma UGL. WADA tiltott.",
      "halfLifeActive": "~24 h",
      "detectionWindow": "4-6 hét vizelet (hosszabb mint orálnál, depot-felszívódás).",
      "quality": {
        "pure": [
          "Tiszta vízben suspendált fehér mikrokristályok, 10ml fiola (50 mg/ml), rázás előtt opálos",
          "Rx-grade: Sanofi Winstrol Depot 50 mg/ml (EU, ritka); minőség-ellenőrzött"
        ],
        "caution": [
          "EXTRA fájdalmas injekció — kristályok fizikailag irritálják az izomszövetet (PIP, ödéma, abszcessz-veszély)",
          "Hepatotoxicitás EGYENLŐ az orálissal — a 17α-metil szisztémásan hat, NEM csak first-pass (Hartgens-Kuipers 2004)",
          "HDL drasztikus csökkenés (Bausserman 1997): lipid-zavar orálhoz hasonló mértékben",
          "Ínszakadás-veszély ugyanaz mint orálnál — ínkollagén lagging az izomerő mögött"
        ],
        "avoid": [
          "Fájdalom-érzékenység (a kristályok jelentős PIP-et + abszcessz-rizikót okoznak)",
          "Aszeptikus injekciós technika hiánya",
          "Bármilyen máj-zavar (mérsékelt-magas hepatotoxicitás)"
        ]
      },
      "interactions": [
        "Más AAS-szal kombinálva fokozza HPTA-szuppressziót",
        "TUDCA 500 mg/nap ajánlott (a hepatotoxicitás miatt — NEM nulla IM-formánál sem)",
        "PCT utolsó injekció +5-7 nap után indul"
      ]
    }
  ],
  "defaultVariant": "oral",
  "anecdote": "Az anekdotikus beszámolók a Winstrolt kevésbé drámai növekedéssel és inkább jellegzetes sűrű, feszes, teljesítményfokozó karakterrel írják le — az erőnövekedés néha aránytalannak tűnik a látható izomgyarapodáshoz képest. Visszatérő téma a közösségi beszámolókban, hogy a Winstrol észrevehető eltolódásokat okoz az izomkeménységben, a szeparációban és a rekompozícióban, ami megalapozta hosszú távú hírnevét a fizikai megjelenésre összpontosító használatban. Ugyanakkor a felhasználók hangsúlyozzák, hogy a 'száraz, finomított' kép elfedheti a fontos kompromisszumokat — különösen a kemény lipid-hatásokat, az orális forma máj-stresszét (és az injekciós formáét is!), a HPTA-szuppressziót és a kötőszöveti panaszokat. Az aq (depot) forma látszólag 'kíméletesebb' útnak tűnik, de a hepatotoxicitás nem csökken — mert ugyanaz a 17α-metil molekula szisztémásan hat."
}
