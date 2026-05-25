// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.568Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "amoxicillin",
  "name": "Amoxicillin",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Széles spektrumú β-laktám penicillin-osztálybeli antibiotikum. WHO Essential Medicines, az egyik legtöbbet felírt antibiotikum a világon. Standard első-vonal otitisz, sinusitis, pneumonia, UTI, dentális prophylaxis és H. pylori eradikáció.",
  "description": "Az Amoxicillin egy amino-penicillin, az Ampicillin szájon át jól felszívódó származéka, amelyet a Beecham fejlesztett ki 1972-ben (Amoxil). β-laktám-gyűrűs antibiotikumként a baktérium-sejtfal transzpeptidáz-enzimet (PBP, penicillin-binding protein) gátolja, ami a peptidoglikán-keresztkötés megszakítását és a baktériumlízist okozza. Spektrum: Gram-pozitív (Streptococcus, Enterococcus), Gram-negatív (H. influenzae, E. coli, H. pylori, Helicobacter, Borrelia). β-laktamáz-termelő baktériumokra rezisztens (Staphylococcus, Klebsiella, anaerobok), ezért gyakran kombinált Clavulansav-val (Augmentin) a spektrum-bővítésre. WHO Essential Medicines listán, EU/USA-ban antibiotikum-resistancia-kontextusban szabályozott felírású.",
  "keyInfo": [
    {
      "label": "ATC kód",
      "value": "J01CA04"
    },
    {
      "label": "Vény-státusz",
      "value": "Vényköteles (Rx), antibiotikum-stewardship"
    },
    {
      "label": "Hatásmechanizmus",
      "value": "β-laktám, PBP-transzpeptidáz gátló, baktericid"
    },
    {
      "label": "Felezési idő",
      "value": "1-1,5 óra (vesefunkció-függő)"
    },
    {
      "label": "Hatáskezdet",
      "value": "1-2 óra (plazma-csúcs), 24-72 óra (klinikai válasz)"
    }
  ],
  "mechanism": "A β-laktám-gyűrű kötődik a baktérium sejtfal-szintézis kulcsenzimeinek aktív centrumába (PBP, penicillin-binding protein, transzpeptidázok), gátolva a peptidoglikán-keresztkötést. A baktérium-sejtfal gyengül, az ozmotikus stressz okozta lízishez vezet. Baktericid hatású szuszceptibilis organizmusokon. Az osztott pszeudo-irreverzibilis kötés miatt a hatás dózis-függő és idő-függő (T > MIC az AUC fontosabb prediktora a klinikai válasznak).",
  "legalStatus": "EU/HU: vényköteles (Amoxil, Ospamox, Hiconcil, Duomox, generikus). USA: FDA Rx. Antibiotikum-stewardship-program szigorú felírási feltételekkel — empirikus felírás csak megerősített bakteriális infekcióra. WHO AWaRe kategória: ACCESS (széles körű, alacsony rezisztencia-kockázattal).",
  "bioavailability": "~74-92% (orális, étkezéstől kis mértékben függő — FDA Amoxil label)",
  "onsetTime": "1-2 h (plasma peak), 24-72 h (clinical symptom response)",
  "halfLife": "1-1.5 h (normal renal function); extends to 7-21 h in renal failure",
  "atcCode": "J01CA04",
  "prescriptionStatus": "Vényköteles (Rx), antibiotikum-stewardship-protokoll",
  "indications": [
    "Akut otitis media (gyermek, felnőtt)",
    "Bakteriális sinusitis (közösségi)",
    "Közösségi pneumónia (CAP, mild-moderate)",
    "Húgyúti infekció (UTI, akut cystitis nőknél)",
    "Helicobacter pylori eradikáció (PPI + Clarithromycin + Amoxicillin triple)",
    "Streptococcus pyogenes pharyngitis (skarlát, akut tonsillitisz)",
    "Lyme-borreliózis korai stádium, dentális prophylaxis (endokarditisz-rizikójú szívbetegen)"
  ],
  "contraindications": [
    "Ismert penicillin- vagy β-laktám-allergia (anaphylaxia anamnézis)",
    "Súlyos hipersenzitivitás (Stevens-Johnson, TEN, DRESS) anamnézis",
    "Mononukleózis (EBV) infekció — Amoxicillin makulopapuláris bőrkiütést okoz 80-95%-ban"
  ],
  "commonSideEffects": [
    "GI: hasmenés (10%, antibiotikum-asszociált), hányinger (5%), hányás (3%)",
    "Bőrkiütés (3-5%, makulopapuláris, ami nem mindig allergiás)",
    "Vaginális candidiasis (a normál flóra megzavarása miatt)",
    "Súlyos, ritka: anafilaxia (< 0,05%), Stevens-Johnson szindróma, akut interstitiális nefritisz, Clostridioides difficile colitis",
    "Kristalluria magas-dózisú terápiánál (ritka, hidratáció megelőzi)"
  ],
  "cyp450": [
    "Not significantly CYP-metabolized",
    "Renal excretion (60-70% unchanged)"
  ],
  "crossMolInteractions": [
    "Methotrexate: vese-clearance csökken, toxicitás-kockázat fokozása",
    "Warfarin: INR-emelkedés lehetséges (bél-flóra-K-vitamin szintézis csökkenés), monitor",
    "Orális fogamzásgátló: korábbi anekdotikus interakció vita; CDC szerint NEM klinikailag szignifikáns, kivéve hasmenés esetén",
    "Allopurinol: bőrkiütés-kockázat szignifikánsan emelkedik (additív hipersenzitivitás-mechanizmus)",
    "Probenecid: vese-tubuláris szekréció gátlása, plazma-Amoxicillin-szint emelkedhet"
  ],
  "benefits": [
    "Széles spektrum, alacsony toxicitás-profil, jó orális biodostupnost (90%)",
    "H. pylori eradikáció (triple therapy): 80-90% sikerráta",
    "Olcsó generikus formák, hosszú-távú elérhetőség, gyermekekben is biztonságos",
    "Klinikai válasz általában 48-72 órán belül, antibiotikum-stewardship-kompatibilis",
    "Dentális endocarditisz-prophylaxis ABZS gold-standard (AHA 2007 guideline)"
  ],
  "quickStart": [
    "Diagnózis MEGERŐSÍTÉS előbb — antibiotikumot CSAK megerősített bakteriális infekcióra (nem virális)",
    "Standard felnőtt dózis 500 mg 8 óránként (q8h) vagy 875 mg 12 óránként (q12h)",
    "Súlyos infekcióban 1000 mg q8h vagy q12h, akár Augmentin-formában (Amoxicillin + Clavulansav)",
    "Étkezéssel vagy anélkül, hidratáció (2 L/nap) a kristalluria mitigálására",
    "Teljes kezelési idő befejezni (5-14 nap indikációtól függően), korai elhagyás rezisztencia-fejlődést okoz"
  ],
  "expectations": [
    {
      "label": "24-48. óra",
      "body": "Klinikai válasz kezdődik: láz csökken, lokális tünet (otitisz-fájdalom, sinusitisz-nyomás) mérséklődik. GI-tünet (laza szék) lehet az első napokban a normál flóra megzavarása miatt."
    },
    {
      "label": "3-5. nap",
      "body": "Tüneti remisszió kifejlődik. Ha NEM javul, klinikai felülvizsgálat: rezisztens kórokozó, vírusos etiológia, vagy más diagnózis. Bőrkiütés esetén AZONNAL STOP és allergológus-konzultáció."
    },
    {
      "label": "7-14. nap (kúra-vég)",
      "body": "Teljes kezelési idő befejezve. Re-evaluáció: ha tünet visszatér, kultúra + szenzitivitás-vizsgálat indokolt. Probiotikum (Lactobacillus, Saccharomyces boulardii) az antibiotikum után a flóra-helyreállításra."
    }
  ],
  "quality": {
    "pure": [
      "GSK Amoxil (originator), Ospamox, Duomox, Hiconcil, generikus Sandoz/Krka/Teva bioekvivalensek",
      "Augmentin (Amoxicillin + Clavulansav) a β-laktamáz-rezisztens kórokozók ellen",
      "Tabletta, kapszula, oldat-szuszpenzió (pediátriai), iv. (kórházi)"
    ],
    "caution": [
      "Penicillin-allergia anamnézis: cefalosporin keresztreaktivitás 1-10%, részletes allergológiai értékelés ajánlott",
      "Mononukleózis (EBV) gyanújánál NE adni — 80-95%-os bőrkiütés-kockázat",
      "Vesefunkció-zavar (eGFR < 30): dóziscsökkentés és/vagy adagolási intervallum-meghosszabbítás szükséges",
      "Antibiotikum-asszociált hasmenés (Clostridioides difficile colitis figyelmeztető jelei)"
    ],
    "avoid": [
      "Ismert penicillin- vagy β-laktám-anafylaxia",
      "Súlyos hipersenzitivitás (SJS, TEN, DRESS) anamnézis",
      "Mononukleózis vagy egyéb virális tetszetős infekció (közönséges nátha, influenza)",
      "Önkezelés sub-terápiás dózisokkal (rezisztencia-fejlődés)",
      "Korábbi amoxicillin/clavulansav-indukált kolestatikus sárgaság vagy májfunkció-zavar anamnézis",
      "Súlyos vesekárosodás (CrCl <30 ml/min) dóziskorrekció nélkül — akkumuláció és toxicitás-kockázat",
      "Korábbi C. difficile-asszociált pszeudomembranózus colitis béta-laktám antibiotikum után"
    ]
  },
  "interactions": [
    "Clavulansav (Augmentin): β-laktamáz-gátló kombináció, spektrum-bővítés",
    "Clarithromycin + PPI (Omeprazole, Pantoprazole): H. pylori triple-terápia",
    "Metronidazol: anaerob-széleskörűsítés komplex infekcióban",
    "Probiotikum (Lactobacillus, Saccharomyces): antibiotikum-asszociált hasmenés mitigálása",
    "Vakcinák: gyengített élő-vírusos vakcina időbeli elválasztása az antibiotikum-terápiától ajánlott (~2 hét)"
  ],
  "studies": [
    {
      "title": "Antibiotic prescribing patterns and resistance: Amoxicillin in community-acquired infections",
      "authors": "Costelloe C, Metcalfe C, Lovering A et al.",
      "journal": "BMJ. 2010;340:c2096.",
      "pmid": "20483949"
    },
    {
      "title": "Amoxicillin vs amoxicillin-clavulanate for acute otitis media in children",
      "authors": "Hoberman A, Paradise JL, Rockette HE et al.",
      "journal": "N Engl J Med. 2011;364(2):105-15.",
      "pmid": "21226576"
    },
    {
      "title": "Effectiveness of amoxicillin and amoxicillin-clavulanate for the treatment of community-acquired pneumonia in adults and children: a systematic review and meta-analysis.",
      "authors": "Potter-Schwartz L, Swe MM, Sharland M",
      "journal": "BMJ Open",
      "pmid": "42097647"
    },
    {
      "title": "Non-Bismuth Quadruple Concomitant Treatment for Helicobacter pylori Eradication: A Systematic Review and Meta-Analysis.",
      "authors": "Parra P, Nyssen OP, Gisbert JP",
      "journal": "Helicobacter",
      "pmid": "41498306"
    },
    {
      "title": "Prevention of infective endocarditis: AHA scientific statement",
      "authors": "Wilson W, Taubert KA, Gewitz M et al.",
      "journal": "Circulation. 2007;116(15):1736-54.",
      "pmid": "17446442"
    },
    {
      "title": "Amoxicillin for Lyme disease in children and pregnancy",
      "authors": "Lantos PM, Rumbaugh J, Bockenstedt LK et al.",
      "journal": "Clin Infect Dis. 2021;72(1):e1-e48.",
      "pmid": "33417672"
    },
    {
      "title": "Antibiotic stewardship and WHO AWaRe classification",
      "authors": "Sharland M, Pulcini C, Harbarth S et al.",
      "journal": "Lancet Infect Dis. 2018;18(1):18-20.",
      "pmid": "29303731"
    }
  ],
  "faq": [
    {
      "q": "Mikor NE szedjek antibiotikumot?",
      "a": "Virális infekciókban NEM hatékony: közönséges nátha (rhinovírus), influenza (myxovírus), legtöbb pharyngitis (90% virális), bronchitis akut (90% virális), gastroenteritisz (90% virális). A felesleges antibiotikum-felírás antibiotikum-rezisztencia kialakulását gyorsítja és mellékhatás-kockázatot okoz minden indikáció nélkül. Megerősített bakteriális infekciónál (klinikai tünetek, esetleg PCR, kultúra, vagy CRP/procalcitonin-irányítás) indokolt. Beszéljen orvosával minden lázas tünetnél."
    },
    {
      "q": "Mit jelent az \"Amoxicillin-bőrkiütés EBV-vel\"?",
      "a": "Az infectious mononukleózis (Epstein-Barr vírus, \"kissing disease\") egyik klasszikus jele a makulopapuláris bőrkiütés Amoxicillin (vagy Ampicillin) adásakor — 80-95%-os incidencia. NEM IgE-mediált penicillin-allergia, hanem virális szuperinfekciós immunkomplex-mechanizmus. A betegnek később NEM lesz penicillin-allergiás. Mégis a kezelést azonnal le kell állítani, és az EBV-szerológia (heterofil ellenanyag, anti-VCA IgM) ellenőrzendő. Más antibiotikum-választás (vagy nincs szükség egyáltalán, mert EBV virális)."
    },
    {
      "q": "Miért kell befejezni a teljes antibiotikum-kúrát?",
      "a": "A hagyományos elv (és WHO-ajánlás 2024-ig) szerint a sub-terápiás dózis idő-rövidítése a túlélő, kis-szuszceptibilitású baktérium-populációt felgazdagítja, ami a rezisztens törzs domináns kialakulását indítja a következő infekcióra. ÚJABB ADATOK (Spellberg 2016, BMJ): számos infekcióban (pneumónia, UTI) a \"shortest effective course\" elv jobb (5 vs 7-10 nap), mert kevesebb kollaterális kár a normál flórán. A KONKLÚZIÓ: orvosi UTASÍTÁS szerint folytatni (NEM ÖNDÖNTÉS alapján), és orvossal egyeztetni, hogy az adott indikációra a rövidebb-vagy hosszabb-kúra protokoll a megfelelő."
    },
    {
      "q": "Mi a teendő antibiotikum-asszociált hasmenésnél?",
      "a": "Enyhe, ön-limitáló hasmenés gyakori (~10%) az antibiotikum-asszociált flóra-zavar miatt. Mitigáció: hidratáció (oralis rehidráló oldat), probiotikum (Lactobacillus rhamnosus GG, Saccharomyces boulardii) az antibiotikum-időszakban és utána 1-2 hétig. SÜRGŐSSÉGI: VÉRES hasmenés, hasi görcsök, magas láz, dehidráció = lehetséges Clostridioides difficile colitis. Toxin-PCR-teszt, és vancomycin/fidaxomicin-terápia indokolt. Antiperisztaltikus szer (Loperamid) C. diff-gyanúnál TILOS."
    },
    {
      "q": "Penicillin-allergia anamnézis: mit jelent az Amoxicillin szempontjából?",
      "a": "Az \"allergia anamnézis\" 10-15%-ban valódi IgE-mediált anaphylaxia-kockázatot jelez, és ezekben kontraindikált az Amoxicillin. A nagyobb többségben (85-90%) a \"penicillin-allergia\" valójában: gyermekkori virális bőrkiütés helytelenül allergiásnak címkézve, vagy nem-IgE-mediált tünet (GI, fejfájás). RÉSZLETES ALLERGOLÓGIAI VIZSGÁLAT: bőrteszt + IgE-kvantifikáció + lépcsős kihívás-teszt 50-70%-ban kihúzza az allergia-címkét. Tipikus eljárás: 1) penicilin-bőrteszt, 2) cefalosporin keresztreaktivitás-becslés (1-10%), 3) carbapenem (Meropenem) alternatíva súlyos infekcióban."
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 500,
      "medium": 875,
      "high": 1000
    },
    "unit": "mg",
    "note": "Alacsony (500 mg q8h, 3x/nap): standard otitis media, sinusitis, akut UTI, mild infekció. Mérsékelt (875 mg q12h, 2x/nap): közösségi pneumónia, súlyosabb infekció — egyszerűbb compliance miatt sokszor előnyösebb. Magas (1000 mg q8h, 3x/nap): súlyos infekció, H. pylori-eradikáció triple-terápia, dentális endocarditisz-prophylaxis 2 g egyszerre. Étkezéssel vagy anélkül, hidratáció. Teljes kúra-idő befejezni — orvosi utasítás szerint, általában 5-14 nap."
  }
}
