// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.956Z
// Edit this file directly to update the EN body; do not re-run the script.
// v0.27 RICH multi-variant expansion — 2026-05-23

export default {
  "id": "winstrol-info",
  "name": "Winstrol",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Stanozolol, 17α-alkylated DHT derivative. Classic \"cutting\" AAS, SHBG suppressor.",
  "description": "Stanozolol (Winstrol) is a DHT derivative, a 17α-alkylated oral or injectable AAS. The SHBG-reduction mechanism is direct hepatic SHBG-mRNA synthesis inhibition (Sinnecker & Köhler 1990, PMID 2723028), raising the free testosterone fraction — significant andro-amplification even on TRT baseline. Does not aromatize, so no estrogenic side effects. Clinically developed for hereditary angioedema and anemia; in sports it is used in \"cutting\" cycles for muscle sparing. The Ben Johnson 1988 Olympic scandal involved this compound. **Pharmacological positioning**: force-amplifier and tissue-quality modulator more than a hypertrophy builder — strength gain is often disproportionate to visible muscle gain. **Connective tissue warning (Liow 1995 PMID 7551764)**: stanozolol-associated tendon-rupture cases are well documented in athlete literature; muscle strength rises faster than tendon collagen crosslink maturity, creating rupture risk especially in sprint/explosive sports.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "AR agonist + SHBG suppressor"
    },
    {
      "label": "Half-life",
      "value": "~9 h (oral), ~24 h (aq IM)"
    },
    {
      "label": "Anabolic:Androgenic ratio",
      "value": "320:30"
    },
    {
      "label": "Aromatization",
      "value": "None (DHT derivative)"
    },
    {
      "label": "Hepatotoxicity",
      "value": "Moderate-high (17α-alkylated, both forms)"
    },
    {
      "label": "Legal status",
      "value": "USA: FDA Schedule III Rx. EU: restricted Rx. WADA: banned."
    }
  ],
  "mechanism": "AR agonist with DHT-like character. Directly INHIBITS hepatic SHBG-mRNA synthesis → free testosterone fraction rise (andro-amplification). Does not aromatize (DHT derivative with pyrazole A-ring), does not convert to DHT.",
  "legalStatus": "USA: FDA Schedule III. HU/EU: Rx. WADA: banned.",
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
    "Cutting cycle muscle sparing in caloric deficit",
    "SHBG reduction raises free T fraction (andro-amplification)",
    "Strength gain for sprinters and athletes",
    "Muscle hardness and separation improvement in recomposition phase",
    "Red blood cell + aerobic capacity boost: erythropoietic effect documented (Pope 2014 review)"
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
    "unit": "mg/day",
    "note": "Oral 25-80 mg/day (split 2×), aq 50 mg EOD or 100 mg 3×/week IM. SHBG suppression raises free T fraction. Hepatotoxicity moderate-high (17α-alkylated, both forms). Max 6-8 week cycle. PCT required."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2 weeks before",
      "markers": "Hepatic priority: ALT, AST, GGT, bilirubin. Lipid panel, hormone panel, renal function, CBC.",
      "purpose": "Liver baseline critical on 17α-alkylated AAS."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 3-4",
      "markers": "ALT, AST, GGT, bilirubin, lipid panel (HDL drop expected), E2, BP.",
      "purpose": "Emergency detection. ALT/AST >3x indicates cycle interruption."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT week 4 + 8-12",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatic + lipid recovery.",
      "purpose": "Verify HPTA + hepatic recovery."
    },
    "cruise": {
      "label": "On Cruise",
      "timing": "Every 6 weeks",
      "markers": "Hepatic + lipid + hormone panel + EKG reference.",
      "purpose": "Long-term Winstrol cruising NOT recommended due to hepatotoxicity."
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
      "bioavailability": "~85-95% (oral, 17α-alkylated, first-pass-resistant)",
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
      "legalStatus": "USA: FDA-approved Rx Winstrol tablet (Pfizer Pharmacia/Sanofi-Aventis discontinued 2010); today UGL market dominant. HU/EU: Rx limited. WADA-banned.",
      "halfLifeActive": "~9 h",
      "detectionWindow": "3-4 weeks urinary (parent + 3'-OH-stanozolol metabolite, WADA-accredited).",
      "quality": {
        "pure": [
          "Clear white, scored tablet (5 mg or 10 mg classic UGL dosing)",
          "HPLC-tested source mandatory — Winstrol tablet often counterfeited"
        ],
        "caution": [
          "Hepatotoxicity: ALT/AST 2-4x rise common at 6+ week cycle (Hartgens-Kuipers 2004)",
          "Lipid disturbance: HDL drastic drop (>30% vs baseline) — cardiovascular risk",
          "Tendon rupture risk (Liow 1995): muscle strength rises faster than tendon collagen — avoid explosive/sprint sports",
          "Joint dryness (\"Winstrol joint pain\") — subjectively excruciating, synovial fluid reduction effect"
        ],
        "avoid": [
          "Any existing liver disorder (fatty liver, hepatitis)",
          "Concurrent alcohol, paracetamol, or other 17α-alkylated AAS",
          "Sprinter/explosive sport athletes during training cycle (elevated tendon rupture risk)"
        ]
      },
      "interactions": [
        "Other 17α-alkylated AAS (Anadrol, Dianabol, Superdrol) together extremely hepatotoxic",
        "TUDCA 500 mg/day + NAC 1200 mg/day mandatory",
        "PCT starts last tablet +1-2 days"
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
      "halfLife": "~24 h (IM depot, microcrystalline)",
      "bioavailability": "~95-100% (IM, no depot, direct absorption from microcrystals)",
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
      "legalStatus": "Sanofi Winstrol Depot (Stanozolol Aqueous Suspension 50 mg/ml, EU Rx limited). USA: today UGL. WADA-banned.",
      "halfLifeActive": "~24 h",
      "detectionWindow": "4-6 weeks urinary (longer than oral due to depot absorption).",
      "quality": {
        "pure": [
          "Clear water-suspended white microcrystals, 10ml vial (50 mg/ml), opalescent before shaking",
          "Rx-grade: Sanofi Winstrol Depot 50 mg/ml (EU, rare); quality-controlled"
        ],
        "caution": [
          "EXTRA painful injection — crystals physically irritate muscle tissue (PIP, edema, abscess risk)",
          "Hepatotoxicity EQUAL to oral — 17α-methyl acts systemically, NOT just via first-pass (Hartgens-Kuipers 2004)",
          "HDL drastic drop (Bausserman 1997): lipid disturbance comparable to oral form",
          "Tendon rupture risk same as oral — tendon collagen lags behind muscle strength gains"
        ],
        "avoid": [
          "Pain sensitivity (crystals cause significant PIP + abscess risk)",
          "Aseptic injection technique lacking",
          "Any liver disorder (moderate-high hepatotoxicity)"
        ]
      },
      "interactions": [
        "Combination with other AAS potentiates HPTA suppression",
        "TUDCA 500 mg/day recommended (hepatotoxicity NOT zero in IM form)",
        "PCT starts last injection +5-7 days"
      ]
    }
  ],
  "defaultVariant": "oral",
  "anecdote": "Anecdotal reports describe Winstrol less in terms of dramatic growth and more as producing a distinct dense, tight, performance-enhancing character — with strength increases sometimes seeming disproportionate to visible muscle gain. A recurring theme in community accounts is that Winstrol produces noticeable shifts in muscular hardness, separation, and recomposition, which helped establish its long-standing reputation in physique-focused use. At the same time, users emphasize that the 'dry, refined' image can obscure important tradeoffs — particularly harsh lipid effects, hepatic stress in BOTH oral and injectable forms (the 17α-methyl acts systemically regardless of route), HPTA suppression, blood pressure concerns, and frequent reports of connective-tissue or joint-related complaints. Winstrol is sometimes underestimated because it does not present as a dramatic mass drug, when in practice it exerts potent effects on tissue performance and presentation."
}
