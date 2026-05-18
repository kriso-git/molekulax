// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.939Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "testosterone-info",
  "name": "Testosterone",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Az endogén férfi nemi hormon és az összes AAS referencia-molekulája. FDA-jóváhagyott TRT (testosterone replacement therapy) hipogonadizmusra.",
  "description": "A Testosterone az emberi szervezet elsődleges androgén szteroidja, a Leydig-sejtek termelik a herében az LH stimulációjára. Anabolikus:androgén arány 100:100, ami minden szintetikus AAS viszonyítási alapja. FDA-jóváhagyott klinikai indikáció: primer és szekunder hipogonadizmus (Testosterone Cypionate, Enanthate, Undecanoate, transdermális gélek). Sportoló-kontextusban WADA-tiltott, de orvosi TRT keretében legitim hosszú távú használata egyre szélesebb körben dokumentált. A 2023-as TRAVERSE trial (Lincoff, NEJM) megerősítette a transdermális TRT kardiovaszkuláris biztonságát hipogonád férfiakon emelt CV-rizikóval, ami a korábbi 2014-es FDA-warning narratíva landmark revíziója.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "AR-agonista, aromatizál E2-vé"
    },
    {
      "label": "Anabolikus:Androgén",
      "value": "100:100"
    },
    {
      "label": "Felezési idő",
      "value": "8 nap (Cyp), 10,5 nap (Ena)"
    },
    {
      "label": "Hatáskezdet",
      "value": "24-72 óra (injektált észter)"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA Rx TRT, WADA tiltott"
    }
  ],
  "mechanism": "Direkt androgén receptor (AR) agonista; aromatáz-enzimen át ösztradiollá (E2), 5α-reduktázon át DHT-vé alakul.",
  "legalStatus": "EU: vényköteles (Nebido, Sustanon). HU: Rx TRT-re. USA: FDA-jóváhagyott Schedule III (DEA). Sportkontextusban WADA tiltott egész évben.",
  "onsetTime": "24-72 h (injected ester)",
  "halfLife": "8 d (Cypionate), 10.5 d (Enanthate)",
  "halfLifeActive": "~24 h free testosterone after ester hydrolysis",
  "interactionsWith": [
    "anastrozole",
    "hcg",
    "finasteride",
    "warfarin"
  ],
  "aromatization": "Igen — CYP19 (aromatáz) → ösztradiol; dózisfüggő, anti-aromatázzal (anastrozole) gátolható (Bhasin 1996 NEJM)",
  "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; injektált észter forma hepatikus first-pass-t kerüli (Pope-Kanayama 2014)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:100",
  "bindingAffinity": "AR-affinitás referencia 100% (minden más AAS ehhez viszonyítva).",
  "detectionWindow": "Injektált észter: 3-4 hónap vizeletből. T/E arány (karbon-izotóp, IRMS) akár 6 hónap.",
  "benefits": [
    "Izomtömeg és erőnövekedés dokumentált (Bhasin 1996 NEJM)",
    "Csontsűrűség és vörösvérsejt-szám emelkedés",
    "Libidó és erektilis funkció helyreállítása hipogonád férfiaknál",
    "Hangulat, energia és kognitív funkció javulása alacsony T-nél",
    "Inzulinérzékenység és testösszetétel javulása"
  ],
  "quickStart": [
    "Bloodwork ELŐSZÖR. Baseline nélkül nincs informált használat",
    "Aromatáz-inhibitor (Anastrozole) készenlétben, csak ha E2 emelkedik",
    "HCG 250-500 IU 2x/hét a here-atrófia megelőzésére hosszabb ciklusban",
    "Vérnyomás otthon naponta, hematokrit 6 hetente",
    "PCT-terv KÉSZEN a ciklus indítása előtt (Clomid/Nolvadex protokoll)"
  ],
  "expectations": [
    {
      "label": "Első bevétel",
      "body": "Injektált észternél akut effekt minimális, az észter-hidrolízis 24-72 órán át tart. Szubjektív érzés ritka az első héten."
    },
    {
      "label": "4 hét",
      "body": "Steady-state plasma testosterone elérve. Erő, libido, hangulat észrevehető emelkedés. E2 monitor kötelező."
    },
    {
      "label": "8 hét",
      "body": "Izomtömeg-gyarapodás 3-6 kg lean mass dokumentált (Bhasin 1996). Lipid panel és hematokrit monitorozandó."
    }
  ],
  "quality": {
    "pure": [
      "UGL/Rx-fiola: olaj-bázis, tiszta, üledék nélküli",
      "Holografikus címke ellenőrzése (Bayer Nebido, Pfizer Depo-Testosterone)"
    ],
    "caution": [
      "E2 túl magas: gynecomastia, vízvisszatartás, hangulatingadozás",
      "Hematokrit >54%: thrombosis-kockázat, vérhajtás (phlebotomy) szükséges",
      "HDL csökkenés, LDL emelkedés kardiovaszkuláris kockázat"
    ],
    "avoid": [
      "Prosztatakarcinóma vagy emlőkarcinóma (kontraindikált)",
      "Súlyos szívelégtelenség, kezeletlen alvási apnoé",
      "Tervezett apaság alatt (spermatogenezis-szuppresszió)",
      "Polycythaemia (hematokrit >54%) — thrombosis, stroke, MI kockázat",
      "Kezeletlen hypertonia, koszorúér-betegség, súlyos szívelégtelenség (NYHA III-IV)",
      "Terhesség és szoptatás (virilizáció és teratogén kockázat magzati nőnemű fejlődésnél)"
    ]
  },
  "interactions": [
    "Anastrozole (AI): E2 kontroll, csak labor-igazolt magas E2 esetén",
    "HCG: here-atrófia és intratesticular T fenntartására",
    "Finasteride: 5α-reductase gátló, DHT csökkentés (hajhullás-kockázat)",
    "Warfarin: antikoaguláns hatás fokozódhat, INR szigorú monitor",
    "Inzulin/orális antidiabetikum: dózis-csökkentés lehet szükséges"
  ],
  "studies": [
    {
      "title": "The effects of supraphysiologic doses of testosterone on muscle size and strength in normal men",
      "authors": "Bhasin S, Storer TW, Berman N et al.",
      "journal": "N Engl J Med. 1996;335(1):1-7.",
      "pmid": "8637535"
    },
    {
      "title": "Testosterone dose-response relationships in healthy young men",
      "authors": "Bhasin S, Woodhouse L, Casaburi R et al.",
      "journal": "Am J Physiol Endocrinol Metab. 2001;281(6):E1172-81.",
      "pmid": "11701431"
    },
    {
      "title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline",
      "authors": "Bhasin S, Brito JP, Cunningham GR et al.",
      "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.",
      "pmid": "29562364"
    },
    {
      "title": "Anabolic-androgenic steroid dependence: an emerging disorder",
      "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.",
      "journal": "Addiction. 2009;104(12):1966-78.",
      "pmid": "19922565"
    },
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Effects of testosterone treatment in older men (Testosterone Trials)",
      "authors": "Snyder PJ, Bhasin S, Cunningham GR et al.",
      "journal": "N Engl J Med. 2016;374(7):611-624.",
      "pmid": "26886521"
    },
    {
      "title": "Cardiovascular safety of testosterone-replacement therapy (TRAVERSE)",
      "authors": "Lincoff AM, Bhasin S, Flevaris P et al.",
      "journal": "N Engl J Med. 2023;389(2):107-117.",
      "pmid": "37326322"
    }
  ],
  "faq": [
    {
      "q": "Mi a különbség TRT és blast között?",
      "a": "TRT: orvosi protokoll, fiziológiás baseline-T (500-1000 ng/dL) fenntartása, tipikusan 100-200 mg/hét. Blast: supraphysiológiás dózis (300-600+ mg/hét) izomtömeg-építés céljából, nem orvosi indikáció."
    },
    {
      "q": "Kell-e aromatáz-inhibitor TRT alatt?",
      "a": "Nem automatikusan. AI csak akkor, ha labor-igazolt magas E2 + tüneti (gynecomastia, hangulatzavar). Vak AI-használat csökkenti az E2-t a kognitív és csontfunkcióhoz szükséges szint alá."
    },
    {
      "q": "Vissza tud-e térni a természetes T-termelés ciklus után?",
      "a": "Általában igen, 3-12 hónap alatt PCT (Clomid/Nolvadex) protokollal. Rahnema 2014 review: tartós ciklusok után HPTA-recovery elhúzódhat, pár százaléknál tartós szuppresszió alakulhat ki."
    },
    {
      "q": "Veszélyes-e a TRT hosszú távon?",
      "a": "Megfelelő monitoringgal (lipid, hematokrit, PSA, E2) hipogonád férfiaknál a kockázat-haszon kedvező. Hosszú távú TRT-cohortokban a kardiovaszkuláris kockázat nem haladta meg a kontrollokét (Bhasin 2018 guideline)."
    },
    {
      "q": "Mi a TRAVERSE trial eredménye TRT-re?",
      "a": "A Lincoff 2023 NEJM TRAVERSE randomizált, placebo-kontrollált trial 5246 hipogonád férfit követett (45-80 év, emelt kardiovaszkuláris rizikóval, medián follow-up 22 hónap). A transdermális testosterone-gel NEM emelte a major adverse cardiovascular event (MACE) kockázatot placebóhoz képest (HR 0,96). Az addigi 2014-es FDA-warning narratíva ezzel landmark szinten revideálandó; megfelelő monitoring mellett a TRT kardiovaszkuláris biztonságos hipogonád férfiakon."
    }
  ],
  "related": [
    "trenbolone-info",
    "anavar-info",
    "winstrol-info",
    "nandrolone-info",
    "dianabol-info"
  ],
  "doseCalc": {
    "type": "bodyweight",
    "perKg": {
      "low": 1.5,
      "medium": 3,
      "high": 5
    },
    "unit": "mg/hét",
    "note": "TRT (orvos által felírva) jellemzően 100-200 mg/hét, az Alacsony tartomány közelében. Sport-AAS-ciklus 300-500+ mg/hét, csak orvosi felügyelet és bloodwork mellett. Heti dózist tipikusan 2x EOD vagy 1x heti injekcióra osztják."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Teljes vérkép (CBC) hematokrittal, lipid panel (LDL/HDL/TG), májfunkció (ALT/AST/GGT), hormon-panel (Total T, Free T, E2, LH, FSH, SHBG, Prolactin), HbA1c, vesefunkció (Kreatinin, eGFR), PSA (30 év felett).",
      "purpose": "Alapvonal-mérés. Egészséges baseline nélkül a ciklus alatti változások értelmezhetetlenek."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "4-6 héttel az indulás után",
      "markers": "Lipid panel (HDL drasztikusan csökkenhet AAS-en), májfunkció (ALT/AST), E2 (aromatáz-aktivitás), hematokrit, vérnyomás (otthon, naponta).",
      "purpose": "Vész-detektálás. Súlyos eltérés esetén ciklus megszakítása."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "PCT 4. hetén és 8-12. hetén HPTA-recovery ellenőrzés",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, lipid panel (HDL recovery), májfunkció (recovery).",
      "purpose": "HPTA-helyreállítás verifikálása. Ha T nem tér vissza baseline-ra 12 hét után, endokrinológus konzultáció."
    },
    "cruise": {
      "label": "Cruise alatt",
      "timing": "6 hetente folyamatos monitoring",
      "markers": "Total T, E2, lipid panel, hematokrit (>54% phlebotomy), HbA1c, PSA (30 év felett), vérnyomás napló.",
      "purpose": "Hosszú távú stabil szuppresszió alatt a kardiovaszkuláris és hormonális markereket folyamatosan ellenőrizni kell, különös tekintettel hematokritra és PSA-ra."
    }
  }
}
