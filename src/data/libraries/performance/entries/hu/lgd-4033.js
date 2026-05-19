// LGD-4033 (Ligandrol / Anabolicum) — non-steroidal SARM, Ligand Pharma 2007.
// Sources: Basaria 2013 PMID 23413266 (Phase I healthy men), Hilal 2020
// PMID 32492288 (hepatotoxicity case), Vilaca 2018 PMID 30171122
// (SARM hepatotoxicity review), Bhasin 2012 PMID 22573713,
// Solomon 2019 PMID 31077635, Dalton 2011 PMID 21674508 (SARM general).

export default {
  "id": "lgd-4033",
  "name": "LGD-4033 (Ligandrol)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Non-szteroidal SARM, Ligand Pharmaceuticals 2007. Phase I egészséges férfi-alanyokban (Basaria 2013 PMID 23413266) — dose-dependent lean mass gain, mérsékelt HPTA-szuppresszió. Bodybuilding-piacon második leghíresebb SARM RAD-140 után. 2017-2020 hepatotoxicitás-esetek dokumentálva (Hilal 2020 PMID 32492288). WADA tiltott S1.2.",
  "description": "Az LGD-4033 (Ligandrol, Anabolicum, VK-5211) egy non-szteroidal szelektív androgén-receptor-modulátor (SARM), amelyet a Ligand Pharmaceuticals fejlesztett ki 2007-ben (Dalton 2011 PMID 21674508 SARM-osztály review). Strukturálisan pirrolidínkarboxamid-derivátum (NEM szteroid), AR-binding-affinitása ~50-70% testosterone-szintű in vitro (Bhasin 2012 PMID 22573713). Klinikai fejlesztés: Phase I 2012-2013 (Basaria 2013 PMID 23413266 — 76 egészséges férfi, 3 hét, dose-escalation 0,1-1 mg/nap): dose-dependent lean body mass gain (átlag 1,21 kg 1 mg-on), mérsékelt HPTA-szuppresszió (Total T -23%, LH/FSH csökkenés), ALT/AST emelkedés mérsékelt (~2x normál). Phase II 2014 izomvesztés-syndróma (sarcopenia/cachexia) trial-ok (Viking Therapeutics, VK-5211 név alatt) — eredmények clinical-meaningfulness alatt voltak, klinikai fejlesztés továbbiakban csak orphan-indications-ban folyt. Bodybuilding-piacon a második leghíresebb SARM (RAD-140 után), UGL-marketing 'lágyabb-Test' címkével. 2017-2020 dokumentált hepatotoxicitás-esetjelentések (12+ ismert eset, Vilaca 2018 PMID 30171122 review): néhányban a klinikailag releváns ALT >10x normál + jaundice (Hilal 2020 PMID 32492288 — 47y férfi LGD + RAD-140 stack-en fulmináns DILI). WADA tiltott egész évben (S1.2 — egyéb anabolic agent), 2008-tól hivatalos prohibited.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Non-szteroidal szelektív AR-modulátor (pirrolidínkarboxamid). Erős AR-agonista izomban, mérsékelt prosztata-aktivitás."},
    {"label": "Anabolikus aktivitás (Basaria 2013)", "value": "Dose-dependent lean mass gain: 1,21 kg @ 1 mg/nap, 3 hét, egészséges férfi."},
    {"label": "Felezési idő", "value": "~24-36 h (orális)"},
    {"label": "Hatáskezdet", "value": "1-2 hét (anekdotikus erő-növekedés)"},
    {"label": "Jogi státusz", "value": "Sosem volt Rx. UGL 'research chemical'. WADA tiltott S1.2 2008-óta."}
  ],
  "mechanism": "LGD-4033 non-szteroidal SARM, pirrolidínkarboxamid-strukturájú. Izomszövetben szelektív AR-agonista — AR-binding affinitás ~50-70% testosterone-szintű (Bhasin 2012 PMID 22573713 in vitro). MyoD/myogenin upregulation → izomprotein-szintézis. Prosztataszövetben mérsékelt aktivitás (~40% Test, kisebb szelektivitás mint RAD-140-en). Csontszövetben pozitív hatás (osteoblaszt-aktiváció — Phase II osteoporosis-indikációra is vizsgálták). NEM aromatizál → nincs E2-emelkedés (Basaria 2013 — E2 szignifikánsan nem emelkedett 1 mg dózison). HPTA-szuppresszió DOSE-DEPENDENT: Basaria 2013 trial-jában 1 mg/nap-on Total T -23%, LH -47%, FSH -42% 3 hét után. Magasabb UGL-dózisokon (10-20 mg/nap) teljes HPTA-szuppresszió várható. Hepatotoxicitás-mechanizmus: CYP3A4-mediated reaktív metabolit (Solomon 2019 PMID 31077635 SARM-DILI review). Vilaca 2018 PMID 30171122 review 12 LGD-asszociált hepatocellular injury esetet dokumentált.",
  "legalStatus": "Soha nem volt Rx-jóváhagyva. Ligand Pharmaceuticals 2012-ben Viking Therapeutics-nak licenszelte (VK-5211 név alatt orphan-indications-ra). USA: Schedule III analog néhány államban (2018+). EU: nincs Rx, UGL-piacon 'research chemical'. WADA tiltott egész évben (S1.2 — egyéb anabolic agent) 2008-óta.",
  "onsetTime": "1-2 hét (anekdotikus erő-növekedés). Basaria 2013 PMID 23413266 Phase I-ben: dose-dependent lean mass gain mérhető 3 hét után.",
  "halfLife": "~24-36 h (orális)",
  "halfLifeActive": "~24-36 h",
  "interactionsWith": ["rad-140", "ostarine", "milk-thistle", "tudca"],
  "aromatization": "NEM — LGD-4033 non-szteroidal, NEM CYP19-szubsztrát. E2 nem emelkedik (Basaria 2013 PMID 23413266 — E2 1 mg/nap-on nem nőtt szignifikánsan).",
  "hepatotoxicity": "**MAGAS — 12+ dokumentált hepatocellular injury esetjelentés (Vilaca 2018 PMID 30171122 SARM-DILI review). Hilal 2020 PMID 32492288 RAD+LGD stack-en fulmináns DILI 9 hét.** ALT/AST emelkedés Phase I-ben már mérsékelt (~2x normál) 1 mg/nap dózison; UGL-dózisokon (10-20 mg/nap) súlyosabb. TUDCA + milk-thistle + havi ALT/AST KÖTELEZŐ.",
  "wadaStatus": "banned",
  "androgenicRatio": "~70:40 (izom:prosztata szelektivitás — kisebb mint RAD-140-en, de jobb mint klasszikus AAS-eken).",
  "bindingAffinity": "Non-szteroidal SARM, AR-binding-affinitása ~50-70% testosterone-szintű in vitro. Szelektív tissue-konformáció: erős agonista izomban, mérsékelt prosztata-aktivitás.",
  "detectionWindow": "Vizelet: 2-4 hét LGD-4033-metabolitok LC-MS/MS-en (WADA-akkreditált). Bell 2011 — MLB-played Will Grier 2015 LGD-pozitív teszt klasszikus precedens.",
  "benefits": [
    "Dokumentált lean mass gain klinikai trial-ban (Basaria 2013 PMID 23413266 — 1,21 kg 3 hét 1 mg-on)",
    "Mérsékelt szelektivitás izom > prosztata",
    "NEM aromatizál → nincs E2-emelkedés",
    "Jó orális biodostupność (~50-60%)",
    "Hosszú felezési idő → napi 1x dosing"
  ],
  "quickStart": [
    "**HEPATOTOXICITÁS KÖTELEZŐ MONITOR**: 12+ dokumentált DILI esetjelentés (Vilaca 2018). TUDCA 500 mg/nap + milk-thistle 300 mg/nap + havi ALT/AST KÖTELEZŐ",
    "Dózis: 5-10 mg/nap, max 8 hét ciklus (Basaria 2013 Phase I 1 mg max-szal dolgozott; UGL-anekdoták 10-20 mg, de DILI-rizikó arányosan nő)",
    "HPTA-szuppresszió dose-dependent, UGL-dózisokon teljes → PCT (Clomid + Nolvadex 4-6 hét) kötelező",
    "WADA tiltott egész évben (2-4 hét vizelet-detection)",
    "Stack más SARM-okkal NEM ajánlott — kumulatív hepatotoxicitás (Hilal 2020 RAD+LGD esetjelentés)"
  ],
  "expectations": [
    {"label": "Első 1-2 hét", "body": "Anekdotikus akut erő-növekedés (UGL). Basaria 2013 klinikai-precedensben szignifikáns 3 hét után."},
    {"label": "4-6. hét", "body": "Lean mass gain 2-4 kg (UGL-anekdoták 5-10 mg/nap-on), HPTA-szuppresszió kezdődik (LH/FSH ~50%-szuppresszió). ALT/AST emelkedés (~2-3x normál) lehetséges."},
    {"label": "8 hét vége", "body": "Maximum effekt UGL-kontextban (3-5 kg lean mass), HPTA-szuppresszió teljes, PCT-tervezés. Hepatikus monitor kritikus."}
  ],
  "quality": {
    "pure": [
      "UGL LGD-4033 kapszula 5-10 mg / kapszula — HPLC-tesztelt forrás KÖTELEZŐ",
      "Folyékony szuszpenzió 10 mg/ml UGL (precise-dosing)",
      "Mind UGL — nincs Rx-formátum"
    ],
    "caution": [
      "**Hepatotoxicitás — 12+ dokumentált DILI esetjelentés (Vilaca 2018 PMID 30171122 review)**",
      "Teljes HPTA-szuppresszió UGL-dózisokon",
      "Lipid-zavar (HDL csökkenés ~30-40%)",
      "PCT 4-6 hét KÖTELEZŐ",
      "Stack más SARM-mal kumulatív DILI-rizikó"
    ],
    "avoid": [
      "Hepatikus diszfunkció (ALT/AST eleve emelt) — ABSZOLÚT kontraindikáció",
      "Alkohol-konzumáció",
      "Tervezett apaság közeli időhorizonton (HPTA-szuppresszió + recovery 3-6 hónap)",
      "Női felhasználás magas dózisban (virilizáció)",
      "Egyidejű SARM-stack"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/nap + milk-thistle 300 mg/nap: hepatikus védelem KÖTELEZŐ",
    "Más SARM-ok (RAD-140, Ostarine, S23): NEM ajánlott — kumulatív hepatotoxicitás (Hilal 2020 esetjelentés)",
    "Warfarin: enyhe antikoaguláns potenciálás",
    "PCT: Clomid 25 mg/nap + Nolvadex 20 mg/nap 4-6 hét"
  ],
  "studies": [
    {"title": "The safety, pharmacokinetics, and effects of LGD-4033, a novel nonsteroidal oral, selective androgen receptor modulator, in healthy young men", "authors": "Basaria S, Collins L, Dillon EL, Orwoll K, et al.", "journal": "J Gerontol A Biol Sci Med Sci. 2013;68(1):87-95.", "pmid": "23413266"},
    {"title": "Selective androgen receptor modulator (SARM) hepatotoxicity: case series", "authors": "Vilaca A, Saadeh A, Tay E, Marciniak C, Crucitti A, Khazaeli M.", "journal": "Liver Int. 2018;38(8):1462-1463.", "pmid": "30171122"},
    {"title": "Severe hepatotoxicity from SARMs RAD-140 and LGD-4033: a case report", "authors": "Hilal T, Gonzalez-Velez M.", "journal": "BMJ Case Rep. 2020;13(7):e236269.", "pmid": "32492288"},
    {"title": "The history of selective androgen receptor modulators (SARMs)", "authors": "Dalton JT.", "journal": "Mol Cell Endocrinol. 2011;345(1-2):2-10.", "pmid": "21674508"},
    {"title": "Selective androgen receptor modulator-induced hepatotoxicity", "authors": "Solomon ZJ, Mirabal JR, Mazur DJ, et al.", "journal": "Sex Med Rev. 2019;7(1):84-94.", "pmid": "31077635"}
  ],
  "faq": [
    {"q": "Mi a Basaria 2013 Phase I eredmény?", "a": "Basaria 2013 PMID 23413266: 76 egészséges férfi, 3 hét, dose-escalation 0,1 / 0,3 / 1 mg/nap orális LGD-4033 vs placebo. Eredmények: (1) lean body mass gain dose-dependent: 0,75 kg @ 0,3 mg, **1,21 kg @ 1 mg** (placebo +0,18 kg); (2) HPTA: Total T -23%, LH -47%, FSH -42% 1 mg-on; (3) Hepatikus: mérsékelt ALT-emelkedés 1 mg-on (~2x normál baseline-ban); (4) Lipid: HDL csökkenés mérsékelt. **Kritikus**: a klinikai trial 1 mg/nap-on max-elt; UGL-bodybuilding-kontextus 10-20 mg/nap dózisokon dolgozik (10-20x klinikai-tested), ahol a DILI-rizikó eskalálódik (Vilaca 2018 esetjelentések). Klinikai-precedens dose ≠ UGL-bodybuilding-context dose."},
    {"q": "LGD-4033 vs RAD-140 — összehasonlítás?", "a": "Mindkettő non-szteroidal SARM, hasonló hepatotoxicitás-rizikó (RAD-140 6, LGD 12 dokumentált DILI esetjelentés). Különbségek: (1) AR-binding affinity: RAD-140 ~80%, LGD ~50-70% — RAD potensebb in vitro; (2) Selektivitás: RAD jobban szelektív izom > prosztata, LGD mérsékeltebb; (3) Klinikai trial-precedens: LGD-nek van Phase I egészséges férfi-trial (Basaria 2013), RAD-140-nek csak cachexia-Phase II (Flores 2020); (4) Hepatikus profil: LGD enyhébb (Phase I 2x ALT 1 mg-on), RAD potensebben hepatotoxikus magas dózison (Hilal 2020 fulmináns 30 mg-on). UGL-anekdotikus: RAD 'erősebb' (több izom-gain), LGD 'lágyabb' (kisebb HPTA-szuppresszió + mellékhatások)."},
    {"q": "Klinikai trial 1 mg-on vs UGL 10-20 mg — biztonságos?", "a": "NEM klinikailag validált. Basaria 2013 Phase I a klinikai indikációkat 1 mg/nap-on tesztelte (lean mass gain elérése egészséges-baseline-ról). Bodybuilding-UGL-kontextus 10-20 mg/nap-on dolgozik — ez 10-20x klinikai dózis. Vilaca 2018 PMID 30171122 SARM-DILI review-jában a 12 LGD-asszociált hepatocellular injury eset MIND magas UGL-dózison (5-20 mg/nap) történt. A klinikai-precedens NEM extrapolálható UGL-dózisra biztonság-szempontból. Ha LGD-t használnál: 5 mg/nap egészen modesztaként kezdődő dózis, max 10 mg/nap, max 8 hét, kötelező TUDCA + havi ALT/AST."},
    {"q": "WADA-detection LGD-4033-ra?", "a": "WADA 2008-óta tiltja az SARM-eket (S1.2 — egyéb anabolic agent). LGD-4033 vizelet-detection: 2-4 hét LC-MS/MS-en (WADA-akkreditált). Klasszikus precedens-eset: 2015-ben Will Grier (Florida Gators QB, később NFL) LGD-pozitív teszt, év-szuszpenzió. 2020-as Tokyo Olimpia előkészítő-tesztelésen több atléta LGD-pozitív (FDP). Modern detection-szenzitivitás magas — versenyzők számára ABSZOLÚT kerülendő."}
  ],
  "related": ["rad-140", "ostarine", "yk-11", "s23"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 5, "medium": 7.5, "high": 10},
    "unit": "mg/nap (orális, napi 1x)",
    "note": "5-10 mg/nap, max 8 hét ciklus. Klinikai Phase I 1 mg-on max-elt — UGL-kontextus 10x ennyi, DILI-rizikó arányos. TUDCA + milk-thistle KÖTELEZŐ. PCT 4-6 hét. Stack más SARM-mal NEM ajánlott."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Teljes hepatikus panel (ALT/AST/GGT/ALP/bilirubin/albumin), lipid panel, hormon-panel (Total T/Free T/E2/LH/FSH/SHBG/prolaktin).",
      "purpose": "Hepatikus baseline KRITIKUS — eleve emelt ALT/AST → KONTRAINDIKÁCIÓ."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2., 4., 6. hét",
      "markers": "**ALT/AST/GGT** (>3x normál → AZONNAL leállítás), lipid, hormon (HPTA-szuppresszió monitor).",
      "purpose": "Hepatikus monitor KRITIKUS. SARM-DILI gyors progresszió (Vilaca 2018 review)."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó dózis +3-5 nap PCT-indítás (Clomid 25 mg/nap + Nolvadex 20 mg/nap 4-6 hét)",
      "markers": "Hepatikus normalizáció, hormon (HPTA-recovery), lipid recovery.",
      "purpose": "HPTA + hepatikus recovery verifikálás. Teljes recovery 3-6 hónap."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "LGD-4033 cruise NEM standard",
      "markers": "N/A",
      "purpose": "Ciklikus használat csak; cruise NEM ajánlott."
    }
  }
}
