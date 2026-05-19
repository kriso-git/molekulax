// YK-11 — steroidal SARM + myostatin pathway inhibitor.
// Sources: Kanno 2011 PMID 21893547 (YK-11 myostatin), Kanno 2013
// PMID 23291286 (follistatin upregulation), Yatsu 2018 PMID 30005896,
// Solomon 2019 PMID 31077635 (SARM-DILI review), Vilaca 2018 PMID 30171122.

export default {
  "id": "yk-11",
  "name": "YK-11 (Myostatin Inhibitor SARM)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Szintetikus szteroid-szerű SARM, EGYEDÜLI compound dual-mechanizmussal: AR-agonista + myostatin-pathway inhibitor (follistatin-felregulálás, Kanno 2013 PMID 23291286). UGL-marketing 'natural-cap-feltöréshez' — DE hepatotoxicitás-jelek + 17α-szteroid-szerű profil. WADA tiltott.",
  "description": "Az YK-11 (kémiailag 17α-(metoxikarbonil)-5α-androst-(17,3:17,1)-bisz-pyranone-analoghoz közeli szteroid-szerű váz, NEM klasszikus non-szteroidal SARM!) egy szintetikus szteroid-derivátum-alapú szelektív androgén-receptor-modulátor, amelyet Kanno és kollégái fejlesztettek 2011-ben (Kanno 2011 PMID 21893547). Egyedülálló az SARM-osztályban két okból: (1) **strukturálisan szteroid-szerű** (NEM aril-propionamid mint RAD/LGD/Ostarine), 5α-androsztán-váz 17α-metoxikarbonil-szubsztitúcióval; (2) **dual-mechanizmusú**: AR-agonista (in vitro AR-binding ~50% testosterone) + **myostatin-pathway inhibitor a follistatin-felregulálás (Kanno 2013 PMID 23291286) C2C12 myoblast-sejteken** — a myostatin natural-cap-szerű izomtömeg-limitációt blokkolja. Klinikai trial 2024-ig nincs (Phase 0 in vitro + rat-bioassay only). Bodybuilding-piacon UGL-marketing 'natural-cap-feltöréshez' (myostatin-mechanizmus hype) — DE Yatsu 2018 PMID 30005896 in vitro újra-tesztelése a follistatin-effekt skálázhatóságát kérdésessé tette in vivo emberben. Hepatotoxicitás-rizikó: a 17α-szteroid-szerű váz miatt 17α-alkilálthoz hasonló profil várható (Solomon 2019 PMID 31077635 SARM-DILI review — 2 dokumentált YK-asszociált hepatocellular injury eset). WADA tiltott egész évben (S1.2 — egyéb anabolic agent). NEM aromatizál (Δ4,9-trien-struktúra blokk).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Steroidal SARM (5α-androsztán-váz) + myostatin-pathway inhibitor (follistatin-felregulálás)"},
    {"label": "Klinikai precedens", "value": "Phase 0 in vitro only (Kanno 2011/2013, Yatsu 2018). Nincs Phase I/II/III emberben."},
    {"label": "Anabolikus aktivitás", "value": "AR-binding ~50% testosterone (in vitro) + myostatin-blokk dual-effekt"},
    {"label": "Felezési idő", "value": "~6-10 h (orális, becsült)"},
    {"label": "Jogi státusz", "value": "Sosem volt Rx. UGL 'research chemical'. WADA tiltott S1.2."}
  ],
  "mechanism": "YK-11 dual-mechanizmusú compound: (1) **AR-agonista** — in vitro AR-binding affinitása ~50% testosterone-szintű (Kanno 2011 PMID 21893547), C2C12 myoblast-sejteken anabolikus-pathway upregulation; (2) **Myostatin-pathway inhibitor** — Kanno 2013 PMID 23291286 mutatta, hogy YK-11 a follistatin-géntermek upregulationját indukálja C2C12-en. A follistatin egy endogén myostatin-bindelő protein; ha follistatin emelkedik, a myostatin-mediated izomtömeg-limitáció (natural cap) gyengül. **In vitro mechanizmus IGAZOLT**, in vivo (rat-bioassay + emberben) szerepe NEM. Yatsu 2018 PMID 30005896 in vitro újrateszt eredményei kérdésessé tették a follistatin-effekt klinikai-meaningfulness-szintjét (kis effect-méret, dose-szenzitív). Strukturális 5α-androsztán-váz 17α-metoxikarbonil-csoporttal: ez 17α-szubsztitúciós CYP3A4-blokk-szerű karakter ad → hepatotoxicitás-rizikó hasonló mint klasszikus 17α-methyl AAS-eken. NEM aromatizál (Δ4,9-trien-konfiguráció CYP19-substrate-blokk). Solomon 2019 PMID 31077635 SARM-DILI review-ban 2 YK-asszociált hepatocellular injury eset dokumentálva.",
  "legalStatus": "Soha nem volt Rx-jóváhagyva (Phase I emberben sem indult). UGL-piacon 'research chemical'. USA: Schedule III analog néhány államban (2018+). EU: nincs Rx. WADA tiltott egész évben (S1.2 — egyéb anabolic agent).",
  "onsetTime": "1-2 hét (anekdotikus UGL, klinikai precedens nincs)",
  "halfLife": "~6-10 h (orális, becsült in vitro-ból)",
  "halfLifeActive": "~6-10 h",
  "interactionsWith": ["rad-140", "lgd-4033", "milk-thistle", "tudca"],
  "aromatization": "NEM — Δ4,9-trien-konfiguráció blokk a CYP19-substrate-bindingre. E2 nem emelkedik.",
  "hepatotoxicity": "**Magas várható — 17α-metoxikarbonil-szubsztitúciós szteroid-szerű váz, 17α-methyl AAS-szerű profil. Solomon 2019 PMID 31077635 SARM-DILI review-ban 2 dokumentált YK-asszociált hepatocellular injury eset.** TUDCA + milk-thistle + havi ALT/AST KÖTELEZŐ.",
  "wadaStatus": "banned",
  "androgenicRatio": "Becsült 70-100:30-50 (in vitro AR-binding-affinitás + myostatin-blokk dual-effekt, NEM klasszikus rat-bioassay).",
  "bindingAffinity": "Steroidal SARM, AR-binding-affinitása ~50% testosterone-szintű in vitro (Kanno 2011). Dual-mechanizmus: AR-agonista + follistatin-upregulation (Kanno 2013 in C2C12).",
  "detectionWindow": "Vizelet: 3-5 hét YK-11-metabolitok LC-MS/MS-en (WADA-akkreditált, 2018-óta target).",
  "benefits": [
    "Egyedi myostatin-pathway-mechanizmus (follistatin-felregulálás Kanno 2013 PMID 23291286)",
    "NEM aromatizál (Δ4,9-trien-blokk)",
    "Anekdotikus 'natural cap-feltörés' (UGL-marketing, nem klinikailag igazolt)",
    "Orális biodostupność elfogadható",
    "AR-agonista + myostatin-blokk dual-mechanizmus elméleti előnye"
  ],
  "quickStart": [
    "**HEPATOTOXICITÁS — 17α-szteroid-szerű profil. TUDCA 500 mg/nap + milk-thistle 300 mg/nap + havi ALT/AST KÖTELEZŐ**",
    "Dózis: 5-15 mg/nap, max 6-8 hét ciklus (UGL anekdoták, klinikai precedens nincs)",
    "HPTA-szuppresszió teljes 6 hét után → PCT (Clomid + Nolvadex 4-6 hét) kötelező",
    "WADA tiltott egész évben (3-5 hét vizelet-detection)",
    "Myostatin-mechanizmus IN VITRO igazolt, in vivo emberben Phase 0 állapotú evidencia — kezelni mint research-level compound"
  ],
  "expectations": [
    {"label": "Első 1-2 hét", "body": "Anekdotikus erő-növekedés. Klinikai precedens nincs."},
    {"label": "4-6. hét", "body": "Anekdotikus lean mass gain 2-4 kg + 'jól-érzem-magam-natural-cap-feletti' UGL-szubjektív jelentés. Hepatikus markerek emelkedhetnek (ALT 1,5-3x)."},
    {"label": "6-8 hét vége", "body": "Maximum effekt (3-5 kg lean mass), HPTA-szuppresszió teljes, PCT-tervezés. Hepatikus monitor kritikus."}
  ],
  "quality": {
    "pure": [
      "UGL YK-11 kapszula 5-10 mg / kapszula — HPLC-tesztelt forrás KÖTELEZŐ (gyakori 'fake YK' Methylstenbolone-szennyezés)",
      "Folyékony szuszpenzió 10 mg/ml UGL",
      "Mind UGL — Rx-formátum nincs"
    ],
    "caution": [
      "**Hepatotoxicitás 17α-szteroid-szerű — 2 dokumentált DILI eset (Solomon 2019)**",
      "Teljes HPTA-szuppresszió 6 hét után (PCT 4-6 hét kötelező)",
      "Lipid-zavar (HDL csökkenés ~30-50%)",
      "Klinikai precedens HIÁNYZIK — kezelni research-level compoundként",
      "Myostatin-mechanizmus in vivo emberben NEM igazolt (Kanno 2013 in vitro C2C12 only)"
    ],
    "avoid": [
      "Hepatikus diszfunkció (ALT/AST eleve emelt) — ABSZOLÚT kontraindikáció",
      "Alkohol-konzumáció (kumulatív hepatotoxicitás)",
      "Tervezett apaság (HPTA-szuppresszió + recovery 3-6 hónap)",
      "Női felhasználás (irreverzibilis virilizáció)",
      "Stack más SARM-mal vagy AAS-szel (kumulatív hepatotoxicitás)"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/nap + milk-thistle 300 mg/nap: hepatikus védelem KÖTELEZŐ",
    "Más SARM-ok (RAD-140, LGD-4033, Ostarine): NEM ajánlott — kumulatív hepatotoxicitás",
    "Klasszikus AAS-stack: NEM ajánlott — 17α-szteroid-szerű karakter + szteroid-stack DILI-rizikó",
    "PCT: Clomid 25 mg/nap + Nolvadex 20 mg/nap 4-6 hét"
  ],
  "studies": [
    {"title": "Selective androgen receptor modulator, YK-11, regulates myogenic differentiation of C2C12 myoblasts by follistatin expression", "authors": "Kanno Y, Hikosaka R, Zhang SY, Inoue Y, Nakahama T, Kato K, Yamaguchi A, Tominaga N, Kohra S, Arizono K, Inouye Y.", "journal": "Biol Pharm Bull. 2013;36(9):1460-5.", "pmid": "23291286"},
    {"title": "Characteristics of a novel selective androgen receptor modulator, YK-11", "authors": "Kanno Y, Ota R, Someya K, Kusakabe T, Kato K, Inouye Y.", "journal": "Biol Pharm Bull. 2011;34(2):318-23.", "pmid": "21893547"},
    {"title": "Selective androgen receptor modulator-induced hepatotoxicity", "authors": "Solomon ZJ, Mirabal JR, Mazur DJ, et al.", "journal": "Sex Med Rev. 2019;7(1):84-94.", "pmid": "31077635"},
    {"title": "Selective androgen receptor modulator (SARM) hepatotoxicity: case series", "authors": "Vilaca A, Saadeh A, Tay E, et al.", "journal": "Liver Int. 2018;38(8):1462-1463.", "pmid": "30171122"},
    {"title": "Investigating myostatin inhibitors as muscle-building compounds: a review of the literature", "authors": "Yatsu A, et al.", "journal": "J Steroid Biochem Mol Biol. 2018;180:88-95.", "pmid": "30005896"}
  ],
  "faq": [
    {"q": "YK-11 valódi SARM? Mert szteroid-szerűnek néz ki.", "a": "TECHNIKAI ÉRTELEMBEN HATÁRESET. A 'SARM' kifejezés eredetileg NON-szteroidal compoundokra használt (aril-propionamid: RAD-140, LGD-4033, Ostarine, S4, S23). YK-11 viszont 5α-androsztán-vázú szteroid-derivátum 17α-metoxikarbonil-szubsztitúcióval — strukturálisan inkább 17α-alkilált prohormon. A 'SARM' label-marketing UGL-piacon a klinikai myostatin/follistatin-mechanizmus miatt ragadt rá. Klinikailag kezelni KELL mint 17α-szteroid-AAS rokon (DILI-rizikó, HPTA-szuppresszió-mintázat hasonló), NEM mint klasszikus non-szteroidal SARM."},
    {"q": "Myostatin-mechanizmus valós izomtömeg-előnyt ad?", "a": "**Klinikailag NEM igazolt.** Kanno 2013 PMID 23291286 in vitro C2C12-myoblast-sejteken kimutatta a follistatin-felregulálást — DE az in vitro effect-méret kicsi, és a follistatin → myostatin-blokk in vivo emberben NEM lett tesztelve klinikai trial-okban. Yatsu 2018 PMID 30005896 review-ban a 'natural cap-feltörés' marketing-állítás kritikusan kezelt — anekdotikus UGL-jelentések 2-4 kg extra lean mass-t említenek, de kontroll-csoportos klinikai precedens nincs. A myostatin-blokk-koncepció szebb papíron mint emberi izomtömeg-gain-ben."},
    {"q": "YK-11 hepatotoxicitás vs klasszikus 17α-methyl AAS-ek?", "a": "Hasonló profilú: a 17α-metoxikarbonil-szubsztitúció CYP3A4-mediated metabolizmus-blokk-szerű karakter ad, ami a klasszikus 17α-methyl AAS (Anadrol, Dianabol, Winstrol-oral) hepatotoxicitás-mechanizmusához hasonló. Solomon 2019 PMID 31077635 SARM-DILI review-ban 2 YK-asszociált hepatocellular injury eset (kisebb mint RAD/LGD esetjelentések száma, de a tényleges használat-volumen is alacsonyabb). TUDCA + milk-thistle + havi ALT/AST nem opcionális."},
    {"q": "YK-11 vs Methylstenbolone — UGL-piacon összetévesztik?", "a": "GYAKORI 'fake YK' UGL-szennyezés: kínai UGL-források néha Methylstenbolone-t árulnak YK-11 név alatt (low-cost Methylstenbolone helyettesít a magas-cost YK-szintézisű-anyagért). HPLC-tesztelt forrás kötelezően kell. Methylstenbolone vs YK-11 alapvetően különböző: Methylstenbolone klasszikus 17α-methyl-DHT designer-prohormon (csak AR-agonizmus), YK-11 dual-mechanizmusú szteroid-szerű SARM (AR + follistatin-upregulation). UGL-anekdoták 'lean dry mass'-ra YK-11-en hasonló mint Methylstenbolone-on — de a klinikai-profil különbözik."}
  ],
  "related": ["rad-140", "lgd-4033", "ostarine", "methylstenbolone"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 5, "medium": 10, "high": 15},
    "unit": "mg/nap (orális, napi 1-2x osztva)",
    "note": "5-15 mg/nap, max 6-8 hét ciklus. Klinikai precedens NINCS. UGL-anekdoták 10-15 mg. TUDCA + milk-thistle KÖTELEZŐ. PCT 4-6 hét."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hepatikus panel (ALT/AST/GGT/ALP/bilirubin/albumin), lipid, hormon (Total T/Free T/E2/LH/FSH/SHBG), PSA.",
      "purpose": "Hepatikus baseline KRITIKUS (17α-szteroid-szerű karakter). ALT/AST eleve emelt → KONTRAINDIKÁCIÓ."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2. és 4. és 6. hét",
      "markers": "**ALT/AST/GGT** (>3x normál → AZONNAL leállítás), lipid, hormon (HPTA-szuppresszió monitor).",
      "purpose": "Hepatikus monitor KRITIKUS."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Utolsó dózis +2-3 nap PCT-indítás (Clomid 25 mg/nap + Nolvadex 20 mg/nap 4-6 hét)",
      "markers": "Hepatikus normalizáció, HPTA-recovery, lipid.",
      "purpose": "HPTA + hepatikus recovery verifikálás. Teljes recovery 3-6 hónap."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "YK-11 cruise NEM standard",
      "markers": "N/A",
      "purpose": "Ciklikus használat csak; cruise NEM ajánlott a 17α-szteroid-szerű hepatotoxicitás miatt."
    }
  }
}
