// East German Stasi doping program (1968-1989). Sources: Franke-Berendonk
// 1997 PMID 9302891 (GDR doping program review), Schänzer 2006 PMID 17042466
// (extended-detection metabolites), Pope-Kanayama 2014 PMID 24423981,
// Hartgens-Kuipers 2004 PMID 15233599, Stasi BStU archives 2005 release.

export default {
  "id": "turinabol",
  "name": "Turinabol (4-Chlorodehydromethyltestosterone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Oral-Turinabol (Chlorodehydromethyltestosterone, CDMT), 17α-alkilált klorózott Dianabol-analóg orális AAS. Jenapharm 1962, hírhedten az 1968-1989 közötti NDK állami dopping-program (\"Komplex 08\") fő szere. Hosszú-távú detection-metabolitok miatt notórius.",
  "description": "A Turinabol (4-chlorodehydromethyltestosterone, CDMT) egy 17α-alkilált klorózott Dianabol-strukturális analóg orális AAS, amelyet 1962-ben Jenapharm (Kelet-Németország, Jena) szintetizált, és 1965-ben Oral-Turinabol néven Rx-szerként forgalmazott. Az NDK állami dopping-program (\"Staatsplanthema 14.25\", Stasi-fedőnévvel \"Komplex 08\", 1968-1989) FŐ szere lett, ~10,000+ NDK-sportoló kapott Turinabolt tudtán kívül vagy iratlanul; az 1990-es Stasi-archívumok kinyitása dokumentálja a kórokat (májkárosodás, kardiomyopátia, virilizáció női atlétáknál, neonatális rendellenességek a dopping-anyák gyermekeinél). Anabolikus:androgén arány 53:6 — magas anabolikus, gyakorlatilag nulla androgén (\"szárazabb Anavar\"). NEM aromatizál (4-kloro-szubsztitúció miatt NEM CYP19 szubsztrát). 17α-metil → mérsékelt hepatotoxicitás (a 4-kloro csökkenti, az Anavarhez hasonló). Schänzer 2006 (PMID 17042466) extra-hosszú detection-metabolitokat (6β-OH-CDMT és társai) ír le — vizeletből 12-18 hónap detection lehetséges, ami a 2016-os Olimpia (Rio) MOB-revízió alapja: 100+ atléta retrospektíve diszkvalifikálva 2008-2012-es teszt-újraértékelés után. WADA tiltott egész évben.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "AR-agonista, 17α-metil-4-kloro-Δ1-T, NEM aromatizál"},
    {"label": "Anabolikus:Androgén", "value": "53:6"},
    {"label": "Felezési idő", "value": "16 óra (orális)"},
    {"label": "Hatáskezdet", "value": "2-3 óra (orális)"},
    {"label": "Jogi státusz", "value": "Jenapharm Rx-szer (DE) megszüntetve 1994; UGL ma. Schedule III."}
  ],
  "mechanism": "AR-agonista 17α-metil-4-kloro-Δ1-androsztén-17β-ol-3-on. A 4-kloro-szubsztitúció két blokkot ad: (1) gátolja a CYP19-szubsztrát-binding-et → NEM aromatizál; (2) gátolja a 3α-HSD-mediated androgén-inaktiválást a célszövetekben → stabilabb AR-agonista. 17α-metil-csoport → orális stabilitás (~80% hepatic first-pass-rezisztencia). A Δ1-double-bond a Dianabol-tól örökölte. Schänzer 2006 extra-hosszú detection-metabolitokat (6β-OH-CDMT, 3α-hidroxi-1-en-3-on-CDMT és tovább 6α-OH-CDMT) ír le, amik a sport-doppingban azóta klasszikus targetek WADA-akkreditált laborokban.",
  "legalStatus": "DE/EU: Jenapharm Oral-Turinabol Rx-szer megszüntetve 1994 után. USA: Schedule III kontrollált szer (DEA, sosem volt FDA-jóváhagyott). HU/PL: vény nélkül illegális, UGL piacon dominans. WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "2-3 h (orális)",
  "halfLife": "16 h (orális)",
  "halfLifeActive": "16 h (parent), plus 6β-OH és 3α-OH metabolitok ~24-48 h",
  "interactionsWith": ["tudca", "warfarin", "testosterone", "alcohol"],
  "aromatization": "Nem — 4-kloro-szubsztitúció CYP19-binding gátlás; klinikailag E2-emelkedés gyakorlatilag nulla (Pope-Kanayama 2014 PMID 24423981, Schänzer 2006 PMID 17042466)",
  "hepatotoxicity": "Mérsékelt — 17α-metil-csoport hepatikus first-pass-stressz, DE a 4-kloro csökkenti a hepatikus toxicitást más 17α-alkilált AAS-ekkel (Dianabol, Anadrol) szemben. ALT/AST 2-3x emelkedés gyakori 6+ hetes ciklusban, klinikailag enyhébb mint a Dianabol vagy Anadrol (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "53:6",
  "bindingAffinity": "Közepes-magas AR-affinitás; gyakorlatilag nulla 5α-reduktáz substrate → NEM DHT-aktivitás; nincs scalp- vagy prosztata-androgén-rizikó.",
  "detectionWindow": "EXTRA HOSSZÚ — vizeletből 12-18 hónap (Schänzer 2006 6β-OH-CDMT és 3α-hidroxi-3-on metabolitok). 2016-os Rio Olimpia retrospektív teszt-revízió 100+ atléta diszkvalifikálta 2008-2012-es újraértékelés alapján. WADA-akkreditált LC-MS/MS.",
  "benefits": [
    "Tiszta lean mass-gyarapodás (3-5 kg 6-8 hét alatt, MINIMÁLIS víz-retencióval)",
    "NEM aromatizál → nincs gynecomastia, nincs víz-retenció",
    "Nulla scalp/prosztata androgén-aktivitás (NEM DHT-átalakulás)",
    "Hepatotoxicitás enyhébb mint Dianabol/Anadrol (4-kloro-védettség)",
    "Stamina-növekedés sub-elite endurance-sportokban dokumentált (NDK-evezős, atlétika)"
  ],
  "quickStart": [
    "EXTRA HOSSZÚ DETECTION — 12-18 hónap vizelet; WADA-tesztelt sportoló esetén minimum 18 hónap off-season fade-out",
    "Hepatikus monitor 4 hetente (mérsékelt, de 17α-metil)",
    "TUDCA 500 mg/nap + NAC 1200 mg/nap ajánlott",
    "Tipikus dózis 30-60 mg/nap, 6-8 hét ciklus",
    "PCT (Clomid + Nolvadex 4 hét) kötelező"
  ],
  "expectations": [
    {"label": "Első hét", "body": "Akut hatás minimális. Erő-növekedés 3-5 nap után érzékelhető, lean mass-gyarapodás még nem."},
    {"label": "4-6. hét", "body": "Maximum lean mass-gyarapodás 3-5 kg, erő-növekedés 10-15% 1RM. Lipid panel HDL csökkenés mérsékelt (15-25%)."},
    {"label": "Post-ciklus", "body": "Lean mass-megőrzés relatíve jó (víz-vesztés minimális). Hepatikus recovery 4-6 hét. Detection window 12-18 hónap WADA-laborokban."}
  ],
  "quality": {
    "pure": [
      "Eredeti Jenapharm Oral-Turinabol 5 mg tabletta (1962-1994, ma collectible)",
      "UGL tabletta: HPLC-tesztelt forrás kötelező — Turinabol gyakran hamisított (Anavar/Dianabol helyettesítés)"
    ],
    "caution": [
      "EXTRA hosszú detection window — sportoló-kockázat magas",
      "Hepatotoxicitás (ALT/AST 2-3x emelkedés)",
      "Lipid-zavar: HDL csökkenés mérsékelt",
      "Hangulat-változás esetén (depresszió, irritabilitás) leállítás"
    ],
    "avoid": [
      "WADA-tesztelt sportoló bármely karrier-szakaszában (18 hónap detection)",
      "Bármilyen máj-zavar (mérsékelt hepatotoxicitás)",
      "Alkohol, paracetamol egyidejű használata",
      "Női felhasználás >10 mg/nap (virilizációs rizikó marad, bár alacsonyabb mint más AAS-eknél)",
      "Pszichiátriai prediszpozíció"
    ]
  },
  "interactions": [
    "Testosterone-base stack: szinergikus lean mass-gyarapodás, klasszikus Turinabol+Test ciklus",
    "TUDCA + NAC ajánlott (mérsékelt hepatotoxicitás)",
    "Anastrozole: NEM szükséges Turinabol-only ciklusnál (nem aromatizál)",
    "Más 17α-alkilált AAS-szal kombinálás hepatikus stresszt fokoz"
  ],
  "studies": [
    {"title": "Hormonal doping and androgenization of athletes: a secret program of the German Democratic Republic government", "authors": "Franke WW, Berendonk B.", "journal": "Clin Chem. 1997;43(7):1262-79.", "pmid": "9302891"},
    {"title": "Long-term detection of methandienone, stanozolol, dehydrochloromethyltestosterone metabolites in human urine by LC-MS/MS", "authors": "Schänzer W, Geyer H, Gotzmann A et al.", "journal": "Drug Test Anal. 2006;46(5):1071-1076.", "pmid": "17042466"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"},
    {"title": "Anabolic-androgenic steroid dependence: an emerging disorder", "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.", "journal": "Addiction. 2009;104(12):1966-78.", "pmid": "19922565"}
  ],
  "faq": [
    {"q": "Mi volt az NDK \"Komplex 08\" dopping-program?", "a": "Az NDK 1968-1989 közötti állami dopping-programja (hivatalos kódneve Staatsplanthema 14.25, Stasi-fedőnévvel \"Komplex 08\") a Sportmedizinischer Dienst der DDR (SMD) és Stasi koordinációjával működött. ~10,000+ NDK-sportoló (köztük serdülő lányok!) kapott Turinabolt tudtán kívül vagy iratlanul, főleg úszó-, atléta-, evezős-program keretében. Az 1990-1992-es Stasi-archívumok kinyitása dokumentálja az aldokumentációt, ami máig hozzájárult a sport-bizonyítványok és Olimpia-érmek revíziójához. Franke-Berendonk 1997 PMID 9302891 a klasszikus áttekintés."},
    {"q": "Miért 18 hónapos detection?", "a": "Schänzer 2006 (PMID 17042466) felfedezte hogy a Turinabol nem-klasszikus hosszú-távú metabolitokat (6β-OH-CDMT, 3α-hidroxi-1-en-3-on-CDMT) képez, amelyek hetekig-hónapokig perszisztálnak a vizeletben azután hogy a parent compound már elhagyta a szervezetet. LC-MS/MS módszerekkel 12-18 hónap detection-window lehetséges, ami a 2016-os MOB Rio-revízió alapja: 2008-2012-es Olimpiák mintáit retrospektíve újratesztelték, 100+ pozitív Turinabol-eredmény diszkvalifikációval és érem-újraosztással."},
    {"q": "Turinabol vs Dianabol?", "a": "Strukturálisan hasonlók (CDMT = 4-kloro-Dianabol), DE eltérő: Dianabol AROMATIZÁL (CYP19 szubsztrát, E2-emelkedés, víz-retenció, gynecomastia-kockázat); Turinabol NEM aromatizál (4-kloro-blokk). Hepatotoxicitásban a Turinabol enyhébb (4-kloro-védettség). Anabolikus erőben a Dianabol erősebb (~250:60 vs 53:6 arány). Tipikus választás: Turinabol \"szárazabb\" cycle, Dianabol \"nedvesebb\" bulker."},
    {"q": "Női használat?", "a": "Az NDK-történelem szerint női atléták (Heidi Krieger Olimpia-érmes súlyemelő, jó dokumentált eset) tudtán kívül kaptak Turinabolt 10-20 mg/nap dózisban — a virilizációs mellékhatások (irreverzibilis hangmélyülés, klitorisz-hipertrófia, hirsutizmus) ESETÉN. Krieger 1997-ben nemi átalakító műtéten esett át (Andreas Krieger). A klinikai tanulság: bár a Turinabol alacsony androgén-arányú (6 vs 100 testosterone), magasabb dózisnál (>10 mg/nap) és hosszabb expozíciónál a virilizáció IRREVERZIBILIS lehet. Egyetlen biztos női-protokoll: ne használd."},
    {"q": "Stamina-növekedés evezős sportokban?", "a": "Az NDK evezős-csapat 1968-1988 közötti Olimpiai dominanciája (~30 érem) jelentős részben Turinabol-driven volt (Franke-Berendonk 1997 PMID 9302891). A mechanizmus: 17α-metil-AAS-ek erythropoietikus hatása + neuromuszkuláris hatékonyság-növelés + recovery-acceleráció. Modern endurance-sportokban WADA-tiltott, és a Schänzer 2006 metabolitok miatt extra-detection-rizikó."}
  ],
  "related": ["dianabol-info", "anavar-info", "testosterone-info", "winstrol-info", "primobolan"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 30, "medium": 45, "high": 60},
    "unit": "mg/nap (orális, 2-3x osztva)",
    "note": "Maximum 8 hét ciklus. 30-60 mg/nap, 2-3x osztva (16h felezés). TUDCA 500 mg/nap + NAC 1200 mg/nap ajánlott. PCT (Clomid + Nolvadex) 4 hét. Női dózis 5-10 mg/nap maximum (virilizáció-kockázat hosszabb expozíciónál)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hepatikus: ALT, AST, GGT, ALP, bilirubin. Lipid panel (LDL/HDL/TG). Hormon-panel (Total T, Free T, E2, LH, FSH, SHBG). CBC + hematokrit. Vesefunkció.",
      "purpose": "Hepatikus baseline 17α-metil-csoport miatt, lipid baseline trend-detektálásra."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "4. hét végén",
      "markers": "Hepatikus: ALT, AST, GGT. Lipid panel (HDL), E2 (Test-stack mellett), vérnyomás.",
      "purpose": "ALT/AST <3x normál Turinabol-only ciklusnál várható. HDL csökkenés mérsékelt."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó tabletta +1-2 nap PCT-indítás. PCT 4. hetén + 8-12. hetén recovery-check.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatikus + lipid recovery.",
      "purpose": "HPTA + hepatikus recovery verifikálás. SHBG-recovery 4-6 hét."
    },
    "cruise": {
      "label": "Cruise alatt (Turinabol-cruise NEM standard)",
      "timing": "Turinabol-cruise atipikus a 17α-metil + hosszú detection miatt",
      "markers": "N/A",
      "purpose": "Turinabol kizárólag ciklikus használatra ajánlott. Hosszú cruise hepatotoxikus + WADA-detection-rizikó."
    }
  }
}
