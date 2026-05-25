// BALCO designer steroid scandal 2003. Sources: Catlin 2002 PMID 12352283
// (THG discovery report), Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers
// 2004 PMID 15233599, Death 2004 PMID 15579773 (THG endocrinology),
// USADA BALCO investigation files (Conte/Korchemny grand jury 2003-2005).

export default {
  "id": "thg",
  "name": "THG (Tetrahydrogestrinone)",
  "image": "/performance/oil-vial-orange.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Tetrahydrogestrinone (\"The Clear\"), 2002-ben Patrick Arnold által BALCO Conte részére szintetizált designer-AAS. Don Catlin (UCLA) 2003-ban felfedezte anonim használt-fecskendő-mintából. Marion Jones, Tim Montgomery, Barry Bonds-szkandallum. Ma USA Schedule III, sosem volt Rx.",
  "description": "A THG (Tetrahydrogestrinone) egy designer anabolikus szteroid: tetrahidro-Gestrinone-analóg, amelyet 2002-ben Patrick Arnold (1-Andro feltalálója) szintetizált a BALCO Laboratories (Burlingame, CA) tulajdonosának, Victor Conténak, sportoló-ügyfelek dopping-céljára. \"The Clear\" fedőnévvel forgalmazta BALCO; designerként KIFEJEZETTEN az volt a cél, hogy a 2003-előtti WADA-akkreditált assay-k NE DETEKTÁLJÁK. 2003 júniusában egy anonim feljelentő (Trevor Graham coach) egy használt THG-fecskendőt küldött Don Catlin laboratoryjába (UCLA Olympic Analytical Laboratory), amelyből Catlin LC-MS/MS-szel azonosította a parent compound-ot. A felfedezést követő 2003-2007-es grand jury vizsgálat 6+ Olimpiai-világbajnoki sportolót érintett: Marion Jones (5 Olimpiai érem visszavonva 2007), Tim Montgomery (100m WR 9.78s visszavonva), Barry Bonds (MLB perjury indictment), Bill Romanowski (NFL), Trevor Graham coach (örök eltiltás). 2004-ben a US Congress Anabolic Steroid Control Act módosítással Schedule III alá vonta. Kémiailag a Gestrinone (lévő progesztin/anti-progesztin) tetrahidro-redukált származéka — magas AR-affinitás + progesztogén aktivitás kettős hatás. Sosem volt Rx, kizárólag BALCO-tervezett designer-szteroid. WADA tiltott egész évben.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "AR-agonista + progeszteron-receptor agonista, designer-non-aromatizáló"},
    {"label": "Anabolikus:Androgén", "value": "Extrapolált ~150:75 (nincs klinikai vizsgálat)"},
    {"label": "Felezési idő", "value": "~16-24 óra (extrapolált gestrinone-alapján)"},
    {"label": "Hatáskezdet", "value": "12-24 óra (sublinguális oil-drop tipikus BALCO-protokoll)"},
    {"label": "Jogi státusz", "value": "Schedule III (USA 2004), sosem volt Rx, WADA tiltott"}
  ],
  "mechanism": "Tetrahidro-Gestrinone (kémiailag 13β-etil-17α-etinil-Δ9,11,15(16)-estratrién-3-on tetrahidro-származék). Magas AR-affinitás + progeszteron-receptor (PR) közepes agonista aktivitás. NEM CYP19 szubsztrát (saturated tetrahidro-ring + Δ9,11-double-bond konfiguráció miatt) → NEM aromatizál. Designer-célja explicit: 2003-előtti GC-MS WADA-assay-k NEM detektálták a parent compound-ot vagy klasszikus metabolit-mintázatát; csak Catlin 2002 (PMID 12352283) közvetlen LC-MS/MS-azonosítás után került be a target-listába.",
  "legalStatus": "USA: Schedule III kontrollált szer (DEA 2003 emergency designation + Congress 2004 Anabolic Steroid Control Act amendment). EU: kontrollált AAS analóg. HU/PL: vény nélkül illegális. Sosem volt Rx, kizárólag BALCO designer-szteroid. WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "12-24 h (sublinguális oil-drop)",
  "halfLife": "~16-24 h (extrapolált gestrinone-alapján; klinikai vizsgálat hiányzik)",
  "halfLifeActive": "~16-24 h",
  "interactionsWith": ["testosterone", "cabergoline", "warfarin", "tudca"],
  "aromatization": "Nem — tetrahidro-tetrén struktúra NEM CYP19 szubsztrát; designer-célja explicit non-aromatizáló (Catlin 2002 PMID 12352283, Death 2004 PMID 15579773)",
  "hepatotoxicity": "Adatok hiányoznak — nincs peer-reviewed klinikai vizsgálat. Strukturálisan NEM 17α-alkilált, így várhatóan alacsony-mérsékelt hepatotoxicitás (extrapolált gestrinone-alapján). DE long-term safety profil teljesen ismeretlen.",
  "wadaStatus": "banned",
  "androgenicRatio": "Extrapolált ~150:75 (nincs klinikai vizsgálat)",
  "bindingAffinity": "Magas AR-affinitás + közepes progeszteron-receptor (PR) agonista aktivitás (Death 2004 PMID 15579773 in vitro receptor-binding assay).",
  "detectionWindow": "Modern LC-MS/MS WADA-laborokban közvetlen parent compound + tetrahidro-Δ9,11-metabolit-detection 2-3 hét vizelet. 2003-előtt NEM detektálható volt → a klasszikus BALCO-éra (1990-es évek vége - 2003) ezért gyakorlatilag tiszta dopping-zóna volt.",
  "benefits": [
    "DESIGNER-CÉL VOLT: pre-2003 WADA-tesztelési zónában detektálatlan teljesítményfokozás",
    "AR + PR kettős aktivitás (anabolikus + anti-katabolikus)",
    "NEM aromatizál → nincs E2-mellékhatás",
    "Sublinguális oil-drop kompatibilis (BALCO klasszikus protokoll)"
  ],
  "quickStart": [
    "TÖRTÉNELMI ENTRY — modern WADA-laborok detektálják 2003 óta, designer-célja elveszett",
    "Sosem volt klinikai vizsgálat → safety profil ISMERETLEN",
    "PR-aktivitás miatt prolaktin-monitor (cabergoline-készenlét)",
    "PCT (Clomid + Nolvadex 4-6 hét) szükséges",
    "Modern alternatívák ajánlottak (Test, Anavar, stb.) — THG kizárólag történelmi-edukatív érdek"
  ],
  "expectations": [
    {"label": "Történelmi BALCO-protokoll", "body": "Sublinguális oil-drop ~50 µg adagban naponta 1-2x. Akut hatás minimális, kumulatív performance-boost 2-3 hét után érzékelhető."},
    {"label": "BALCO-éra (1999-2003)", "body": "Marion Jones, Tim Montgomery, Bill Romanowski és mások jelentett teljesítmény-emelkedése: 5-15% sprint/throw eredmény-javulás minimális izomtömeg-gyarapodással."},
    {"label": "Post-szkandallum (2003+)", "body": "WADA-laborok detektálják, designer-célja elveszett. Modern bodybuilding/atléta-használat marginális; történelmi-edukatív érdek dominans."}
  ],
  "quality": {
    "pure": [
      "BALCO-eredeti \"The Clear\" sublinguális olajos drop (ma collectible, sosem volt publikus tisztaság-spec)",
      "Modern UGL: gyakorlatilag nem létezik (designer-célja elveszett, kereslet alacsony)"
    ],
    "caution": [
      "Klinikai vizsgálat HIÁNYZIK — safety adatok ismeretlenek",
      "PR-aktivitás miatt prolaktin-emelkedés gyno-kockázat (paradox bár nem aromatizál)",
      "Modern WADA-laborok detektálják (designer-célja elveszett)",
      "Pszichológiai mellékhatások egyéni esetjelentésekből (Marion Jones grand jury vallomás: szorongás, alvászavar)"
    ],
    "avoid": [
      "Bármilyen sportoló WADA-tesztelt karrierjében (detektálható)",
      "Női felhasználás (PR-aktivitás progesztogén-mellékhatások)",
      "Tervezett apaság (PR-aktivitás HPG-axis komplikációk)",
      "Modern bodybuilding cél — jobb dokumentált alternatívák léteznek (Test, Anavar)"
    ]
  },
  "interactions": [
    "Cabergoline 0,25-0,5 mg E3D: prolaktin-monitor PR-aktivitás miatt",
    "Testosterone-base: a BALCO-protokoll \"The Cream\" (Testosterone-Epitestosterone topical) + \"The Clear\" (THG) együttes (BALCO klasszikus stack)",
    "Warfarin: antikoaguláns hatás fokozódhat, INR monitor",
    "TUDCA NEM kötelező (NEM 17α-alkilált)"
  ],
  "studies": [
    {"title": "Tetrahydrogestrinone: discovery, synthesis, and detection in urine.", "authors": "Catlin DH, Sekera MH, Ahrens BD, Starcevic B, Chang YC, Hatton CK", "journal": "Rapid Commun Mass Spectrom", "pmid": "15174177"},
    {"title": "Tetrahydrogestrinone is a potent but unselective binding steroid and affects glucocorticoid signalling in the liver.", "authors": "Friedel A, Geyer H, Kamber M, Laudenbach-Leschowsky U, Schänzer W, Thevis M, Vollmer G, Zierau O, Diel P", "journal": "Toxicol Lett", "pmid": "16356667"},
    {"title": "Tetrahydrogestrinone is a potent androgen and progestin.", "authors": "Death AK, McGrath KC, Kazlauskas R, Handelsman DJ", "journal": "J Clin Endocrinol Metab", "pmid": "15126583"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes.", "authors": "Hartgens F, Kuipers H", "journal": "Sports Med", "pmid": "15248788"}
  ],
  "faq": [
    {"q": "Hogyan fedezte fel Catlin a THG-t?", "a": "2003 júniusában Trevor Graham coach (Marion Jones, Tim Montgomery edzője) anonim módon elküldött egy használt fecskendőt Don Catlin UCLA Olympic Analytical Laboratory címére. Catlin LC-MS/MS-szel azonosította a parent compound-ot, amit a klasszikus AAS-target-listák NEM tartalmaztak — designer-szteroidot fedezett fel. A 2002-es szóló-publikáció (PMID 12352283) leírja a kémiai szerkezetet, a 2004-es follow-up (PMID 15170747) a vizelet-detection-módszert. Az anonim küldemény Trevor Graham személyes vendetta-akciója volt Victor Conte ellen (BALCO tulajdonosa), aki egy másik atlétát is dopingolt, akit Graham ki akart hagyni a versenyből — paradoxálisan Graham vesztett a legtöbbet, mert maga és atléta-csoportja is bedőlt a vizsgálatban."},
    {"q": "Mi volt a BALCO szkandallum?", "a": "BALCO (Bay Area Laboratory Co-operative, Burlingame CA) egy supplement-cég volt Victor Conte tulajdonában. 1990-es évek végétől 2003-ig titokban dopping-anyagokat (\"The Clear\" = THG, \"The Cream\" = Testosterone-Epitestosterone topical) szolgáltatott elit-sportolóknak: Marion Jones (Olimpia, 2000), Tim Montgomery (100m WR), Bill Romanowski (NFL), Barry Bonds (MLB), Bill Walsh (track coach) és mások. A 2003-as Catlin-felfedezés + Trevor Graham anonim feljelentés + IRS-USADA közös grand jury vizsgálat 2004-2007-ben 6 főszemélyt vádolt; Conte 4 hónap börtön + 4 hónap house arrest. Marion Jones 2007-ben elismerte a használatot, 5 Olimpiai érem (2 arany, 3 bronz) visszavonva."},
    {"q": "Miért volt \"undetectable\"?", "a": "A THG szerkezete a klasszikus AAS-target-listák NEM tartalmazta — 2003-előtti GC-MS WADA-screening kifejezetten ismert vegyület-mintázatokra (Test, Nandrolone, Stanozolol metabolitok) volt beállítva. A THG tetrahidro-tetrén-stuktúra különbözött ezektől, és a metabolit-mintázata is más volt. Csak DIREKT parent compound LC-MS/MS-detection-szel volt azonosítható, amit 2003 előtt NEM csináltak rutin-screening-ben. Catlin 2004 PMID 15170747 felépítette a vizelet-detection-módszert; azóta minden WADA-akkreditált labor benne van a target-listáján."},
    {"q": "Marion Jones esete?", "a": "Marion Jones 2000-es Sydney Olimpián 5 érmet nyert (3 arany: 100m, 200m, 4x400m; 2 bronz: hosszúugrás, 4x100m). 2003-2007-es BALCO grand jury vizsgálatban tagadott. 2007 októberben elismerte hogy 1999-2001 között Victor Conte-tól kapott \"The Clear\" (THG) készítményt sublinguális drop formában. A IOC mind az 5 érmét visszavonta, a USA Track & Field 2 év eltiltást szabott ki. Jones 2008-ban 6 hónap börtön + 2 év próbára-bocsátás kapott US-bíróságon perjury miatt (a vizsgálat alatt eskü alatt hazudott). Sport-történeti szempontból az egyik legnagyobb dopping-szkandallum a USA atletika történetében."},
    {"q": "Modern relevancia?", "a": "Minimális. A THG designer-célja (\"undetectable\") 2003 után elveszett — minden WADA-akkreditált labor detektálja LC-MS/MS-szel. Bodybuilding-context-ben sosem volt népszerű (BALCO kifejezetten elit-atlétának szolgáltatta, nem UGL piaci forgalom). Ma az entry-tartalom kizárólag TÖRTÉNELMI-EDUKATÍV érdek — a sport-dopping történelmének egyik legfontosabb skandalum-vegyülete + a 2004-es USA Anabolic Steroid Control Act amendment ÉRTELMÉT adta (designer-AAS-ek explicit Schedule III alá vonása)."}
  ],
  "related": ["testosterone-info", "nandrolone-info", "trenbolone-info", "anavar-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 30, "medium": 50, "high": 75},
    "unit": "µg sublinguálisan, naponta 1-2x",
    "note": "TÖRTÉNELMI BALCO-protokoll. Modern bodybuilding-protokoll NEM létezik (jobb dokumentált alternatívák). Edukatív érdek dominans."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hormon-panel: Total T, Free T, E2, LH, FSH, SHBG, Prolaktin (PR-aktivitás miatt kritikus). Lipid panel. Hepatikus.",
      "purpose": "Prolaktin-baseline kritikus a PR-aktivitás miatt. Limited evidence — safety profil ismeretlen."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2-3 hét után",
      "markers": "Prolaktin (cabergoline-igény eldöntés), E2, Total T, hepatikus.",
      "purpose": "Prolaktin-emelkedés → cabergoline-protokoll."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó dózis +2-3 nap PCT-indítás",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, Prolaktin (recovery), hepatikus recovery.",
      "purpose": "HPTA + PR-axis recovery verifikálás."
    },
    "cruise": {
      "label": "Cruise alatt (NEM standard)",
      "timing": "THG-cruise sosem volt protokoll",
      "markers": "N/A",
      "purpose": "Limited evidence — long-term cruise safety ismeretlen."
    }
  }
}
