// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.567Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "levothyroxin",
  "name": "Levothyroxin (L-T4)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Szintetikus tiroxin (T4) hormon-pótlás hipotireózisra. WHO Essential Medicines, az egyik legtöbbet felírt gyógyszer globálisan. ATA és ETA endokrin-guideline-anchor.",
  "description": "A Levothyroxin (L-T4) az endogén tiroxin szintetikus levo-izomere, amelyet a Knoll AG fejlesztett ki az 1950-es években, a Synthroid 1958-ban kapott FDA-jóváhagyást. A T4 prohormon, ami a perifériás szövetekben deiodinaze-enzimek (D1, D2, D3) hatására aktív T3 trijodothironinné alakul. A heti steady-state plazma-szint a 6-7 napos felezési idő miatt 4-6 hét alatt alakul ki. Az ATA 2014 hipotireózis-guideline (Jonklaas 2014 PMID 25266247) szerint Levothyroxin monoterápia a standard kezelés primer (Hashimoto) és szekunder hipotireózisban; a T3-kiegészítés rutin gyakorlatban nem indokolt, kivéve gondosan dokumentált tüneti vagy T3-konverzió-zavar esetén. A testtömeg-alapú induló dózis ~1,6 µg/kg/nap, 65 év feletteknél vagy iszkémiás szívbetegségnél óvatosabb induló dózis (25-50 µg/nap) javasolt.",
  "keyInfo": [
    {
      "label": "ATC kód",
      "value": "H03AA01"
    },
    {
      "label": "Vény-státusz",
      "value": "Vényköteles (Rx)"
    },
    {
      "label": "Hatásmechanizmus",
      "value": "T4 hormon-pótlás (T3-má konvertál perifériásan)"
    },
    {
      "label": "Felezési idő",
      "value": "6-7 nap (egyszeri napi adagolás)"
    },
    {
      "label": "Hatáskezdet",
      "value": "4-6 hét (steady-state TSH-csökkenés)"
    }
  ],
  "mechanism": "A szintetikus L-T4 azonos a természetes endogén T4-gyel. A perifériás szövetekben (máj, vese, izom) a D1 és D2 deiodinaze-enzimek 5'-deiodálással aktív T3-má alakítják. A T3 a sejtmagi tiroid hormon-receptorra (TR-α, TR-β) kötődik, ahol a tiroid-választható elem-szekvenciákhoz (TRE) kötve transzkripciós módosítást végez, ami az alapanyagcserét, hőtermelést, fehérje-szintézist és számos egyéb metabolikus pathway-t szabályoz.",
  "legalStatus": "EU/HU: vényköteles (Euthyrox, Letrox, L-Thyroxin Berlin-Chemie, Synthroid generikus). USA: FDA Rx (Synthroid, Levoxyl, Tirosint, generikus). Nincs visszaélési potenciálja. EU narrow therapeutic index (NTI) miatt brand-csere kerülendő ugyanazon recepten — magasabb dózis-pontosság szükséges.",
  "bioavailability": "40-80% (orális, éhgyomri; étkezés és kalcium/vas csökkenti — FDA Synthroid label)",
  "onsetTime": "4-6 weeks (steady-state TSH reduction), 7-10 days (initial symptomatic effect)",
  "halfLife": "6-7 days (allowing once-daily dosing; steady-state in 4-6 weeks)",
  "atcCode": "H03AA01",
  "prescriptionStatus": "Vényköteles (Rx), háziorvos vagy endokrinológus felírható",
  "indications": [
    "Primer hipotireózis (Hashimoto autoimmun, post-thyroidectomia, post-radiojod)",
    "Szekunder/centrális hipotireózis (hipofízis-elégtelenség)",
    "Veleszületett hipotireózis (kongenitális)",
    "TSH-szuppresszió differenciált pajzsmirigy-karcinómában (DTC, post-thyroidectomia)",
    "Mírtéz struma (nem-toxikus), TSH-szuppresszió a struma-csökkentésre"
  ],
  "contraindications": [
    "Kezeletlen tireotoxikózis (hipertireózis)",
    "Kezeletlen mellékvese-elégtelenség (Addison) — Levothyroxin előtt kortikoszteroid pótlás kötelező",
    "Akut MI vagy aktív iszkémia (mérlegelendő, óvatos induló dózis)",
    "Ismert hipersenzitivitás a hatóanyag vagy a kötőanyagok iránt"
  ],
  "commonSideEffects": [
    "Túladagolás tüneti: szívdobogás, tremor, izzadás, hőintolerancia, súlyveszteség, szorongás",
    "Inszomnia, fejfájás, hasmenés (gyors túl-pótlásnál)",
    "Hosszú-távú szubklinikus túladagolás: pitvarfibrilláció kockázat (idős), csontsűrűség-csökkenés (post-menopauzális)",
    "Alóreplacement tünete: fáradtság, hidegintolerancia, székrekedés, depresszió, hajhullás, edéma",
    "Súlyos, ritka: anafilaxia (hipersenzitivitás kötőanyagokra, mint laktóz), pszeudotumor cerebri pediatriában"
  ],
  "cyp450": [
    "Not significantly CYP-metabolized",
    "Eliminated via biliary deiodination and conjugation"
  ],
  "crossMolInteractions": [
    "Vas, kalcium, magnézium, alumínium-tartalmú savkötők, többvitaminok: ABSZORPCIÓ-CSÖKKENTÉS, 4 órás távolság szükséges",
    "PPI (Omeprazole), H2-blokkoló (Famotidine): gyomor-pH emelkedés, abszorpció ~30%-kal csökken, dózis-növelés szükséges",
    "Szoja, magas-rosttartalmú étrend, kávé (espresso): abszorpció-csökkenés, ÉHGYOMORRA bevétel 30-60 perccel reggeli előtt",
    "Warfarin: T4-emelkedés a vitamin-K-függő alvadási faktorok lebontását gyorsítja, INR-emelkedés, dóziscsökkentés",
    "Ösztrogén (HRT, orális fogamzásgátló): TBG-emelkedés a teljes T4-szintet emeli, free T4 szabad maradhat; monitor TSH-val"
  ],
  "benefits": [
    "Hipotireózis-tünetek (fáradtság, hidegintolerancia, székrekedés, depresszió) javulása 4-8 hét után",
    "TSH normalizálódik (0,4-4,0 mIU/L) 4-6 hét alatt steady-state dózison",
    "Pajzsmirigy-karcinóma recidíva-csökkentés TSH-szuppressziós dózison",
    "Krónikus betegség, élethosszig tartó kezelés, kiszámítható farmakokinetika",
    "Olcsó generikus formák, hosszú-távú biztonsági adat (60+ év)"
  ],
  "quickStart": [
    "TSH (és free T4) mérése a kezdés előtt, majd 6-8 hét után új steady-state ellenőrzése",
    "Reggel ÉHGYOMORRA bevenni, 30-60 perccel reggeli ELŐTT, vízzel",
    "Kálcium-, vas-, magnézium-tartalmú szerek és multivitaminok 4 órával ELTOLVA",
    "Kávé (espresso) min. 60 perccel a Levothyroxin után — vagy érdemes este bevenni (Bolk 2010)",
    "Dóziseszkaláció lassú 65 év feletteknél vagy iszkémiás szívbetegségben (25 µg/2-4 hét)"
  ],
  "expectations": [
    {
      "label": "1-2. hét",
      "body": "Kezdeti tüneti javulás csak enyhén, alvás-energia már jobb lehet. Steady-state plazma-szint NEM érte el. Túl gyors emelkedés kerülendő."
    },
    {
      "label": "6-8. hét",
      "body": "TSH ÚJ-MÉRÉS. Cél TSH 0,4-2,5 mIU/L tüneti hipotireózisban, 0,1-0,5 mIU/L TSH-szuppresszióra DTC-nél. Dózis-titráció ennek megfelelően. Steady-state most már elért, klinikai döntés alapja."
    },
    {
      "label": "6-12 hónap (stabilizáció)",
      "body": "Stabil dózison TSH évente, vagy 6 havonta változás esetén (testsúlyváltozás, terhesség, új gyógyszer). Krónikus, élethosszig tartó kezelés. Brand-csere kerülendő (narrow therapeutic index)."
    }
  ],
  "quality": {
    "pure": [
      "Merck Euthyrox/L-Thyrox (EU/HU referencia), Berlin-Chemie L-Thyroxin (HU széles körű)",
      "AbbVie Synthroid (USA reference), Lloyd Pharmaceutical Levoxyl, Pfizer Tirosint (laktóz-mentes)",
      "12,5/25/50/75/88/100/112/125/137/150/175/200 µg tabletták — finom-titrációs lépések"
    ],
    "caution": [
      "Narrow therapeutic index (NTI): brand-csere kerülendő, ugyanaz a generikus brand jobb",
      "Túlságosan agresszív induló dózis: idős vagy iszkémiás szívbetegben CV-esemény-kockázat",
      "Terhesség alatt dózis-emelkedés (általában 20-30%-kal) szükséges, T4-igény fokozódik",
      "Hosszú-távú túl-pótlás (TSH < 0,1 mIU/L): pitvarfibrilláció és csontritkulás kockázat"
    ],
    "avoid": [
      "Kezeletlen mellékvese-elégtelenség (kortikoszteroid előbb)",
      "Akut MI vagy aktív iszkémia (kardiológus-konzultáció)",
      "Tireotoxikózis (hipertireózis aktív állapot)",
      "Levothyroxin használata súlyveszteségre normofunkciós pajzsmirigynél (visszaélés)",
      "Kezeletlen hypophysis-elégtelenség (előbb glukokortikoid-pótlás, addiszoni krízis-megelőzés)",
      "Ismert hipersenzitivitás a hatóanyagra vagy bármely segédanyagra",
      "Túlfeszített szuppresszív dózis (TSH <0,1) szubklinikus betegségben, posztmenopauzális csontritkulással vagy pitvarfibrillációval"
    ]
  },
  "interactions": [
    "Liothyronine (T3): kombináció ritka, csak gondosan dokumentált T3-konverzió-zavar esetén",
    "Warfarin: INR-monitor a Levothyroxin-dózis változásnál",
    "PPI (Omeprazole, Esomeprazole): dóziscsökkenés szükséges lehet (~25%-os emelés)",
    "Ösztrogén HRT, orális fogamzásgátló: dóziseszkaláció (TBG-emelkedés)",
    "Metformin: TSH-szint enyhe csökkenése lehet, dóziscsökkentés ritkán szükséges"
  ],
  "studies": [
    {
      "title": "Guidelines for the treatment of hypothyroidism: prepared by the American Thyroid Association task force",
      "authors": "Jonklaas J, Bianco AC, Bauer AJ et al.",
      "journal": "Thyroid. 2014;24(12):1670-751.",
      "pmid": "25266247"
    },
    {
      "title": "Consensus statement #1: subclinical thyroid disease",
      "authors": "Surks MI, Ortiz E, Daniels GH et al.",
      "journal": "JAMA. 2004;291(2):228-38.",
      "pmid": "14722150"
    },
    {
      "title": "Levothyroxine timing: morning vs bedtime (RCT)",
      "authors": "Bolk N, Visser TJ, Nijman J et al.",
      "journal": "Arch Intern Med. 2010;170(22):1996-2003.",
      "pmid": "21149757"
    },
    {
      "title": "2017 Guidelines of the American Thyroid Association for the diagnosis and management of thyroid disease during pregnancy",
      "authors": "Alexander EK, Pearce EN, Brent GA et al.",
      "journal": "Thyroid. 2017;27(3):315-389.",
      "pmid": "28056690"
    },
    {
      "title": "Combination treatment with T4 and T3 vs T4 alone in hypothyroidism: meta-analysis",
      "authors": "Grozinsky-Glasberg S, Fraser A, Nahshoni E et al.",
      "journal": "J Clin Endocrinol Metab. 2006;91(7):2592-9.",
      "pmid": "16670166"
    },
    {
      "title": "Levothyroxine dose requirements and TSH in pregnancy",
      "authors": "Alexander EK, Marqusee E, Lawrence J et al.",
      "journal": "N Engl J Med. 2004;351(3):241-9.",
      "pmid": "15254282"
    },
    {
      "title": "2014 ETA Guidelines: the use of L-T4 + L-T3 in the treatment of hypothyroidism",
      "authors": "Wiersinga WM, Duntas L, Fadeyev V et al.",
      "journal": "Eur Thyroid J. 2012;1(2):55-71.",
      "pmid": "24782999"
    }
  ],
  "faq": [
    {
      "q": "Miért nem érzem a Levothyroxin hatását az első hetekben?",
      "a": "A T4 felezési ideje 6-7 nap, ezért a plazma steady-state szint csak 4-6 hét után alakul ki, és a TSH-csökkenés szintén ennyi időt igényel. A tüneti javulás (fáradtság, hidegintolerancia, mentális tisztaság) általában 4-8 hét után jelenik meg klinikailag észlelhető szinten. Az első héten enyhe alvás-energia javulás már lehetséges. Türelem szükséges, és a 6-8. heti TSH-kontroll az igazi dózis-validátor."
    },
    {
      "q": "Miért fontos az éhgyomri bevétel és a kávé időzítése?",
      "a": "A Levothyroxin abszorpciója a vékonybél savas közegében optimális (gyomor-pH < 4). Étel, kávé (espresso), magas-rost étrend, és savkötők/PPI-k a gyomor-pH-t emelik, csökkentve az abszorpciót akár 30-40%-kal. A 30-60 perces éhgyomri ablak biztosítja a maximum biológiai elérhetőséget. Alternatíva: este lefekvés előtt 3-4 órával bevenni (Bolk 2010 RCT PMID 21149757) — egyes betegben jobb compliance."
    },
    {
      "q": "Mit jelent a TSH-szuppresszió DTC-betegen?",
      "a": "Differenciált pajzsmirigy-karcinómában (DTC) post-thyroidectomia + I-131 ablatió után, a fenntartó Levothyroxin dózist úgy állítják be, hogy a TSH alacsony (0,1-0,5 mIU/L, vagy < 0,1 a high-risk eseteken) legyen. Az alacsony TSH csökkenti a maradék DTC-sejtek növekedési stimulációját, ezzel a recidíva kockázatát. Long-term over-replacement-kockázat (AF, csontritkulás) ellensúlyozása fontos, ezért ATA 2015 guideline alapján a TSH-szuppresszió mértéke a kockázati besorolás (low/intermediate/high) szerint változik."
    },
    {
      "q": "Levothyroxin terhességben?",
      "a": "A terhesség alatt a T4-igény ~20-50%-kal megemelkedik az ösztrogén-indukált TBG-emelkedés és placentáris T4-igény miatt. Ismert hipotireózisos terhesnek a Levothyroxin-dózisát azonnal 20-30%-kal emelni kell a terhesség kezdetén (vagy a tervezett fogantatás előtt), majd a TSH-t 4-6 hetente ellenőrizni, célja < 2,5 mIU/L 1. trimeszterben, < 3,0 mIU/L 2.-3. trimeszterben. ATA 2017 (Alexander 2017 PMID 28056690) terhesség-iránymutatás. Krónikus alóreplacement a fetális idegfejlődésre káros."
    },
    {
      "q": "Lehet-e Levothyroxint a súlyveszteséhez használni?",
      "a": "EGYÉRTELMŰ NEM. A Levothyroxin súlyveszteséhez normofunkciós pajzsmirigyűnél VESZÉLYES és klinikailag NEM HATÉKONY: az iatrogén tireotoxikózis pitvarfibrillációt, csontvesztést, izomatrófiát, kardiovaszkuláris stresszt, hangulatzavart okoz, miközben a fogyás csak rövid távú és reverzibilis (víz + izom-veszteség, nem zsír). Súlyveszteség medikációhoz GLP-1 RA (Semaglutide, Liraglutide) vagy egyéb FDA-jóváhagyott obesity-szerek indikáltak. Levothyroxin EU/USA visszaélés-protokoll szigorúan büntetett."
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "tshWeight",
    "tshWeight": {
      "kgFactor": 1.6,
      "unitsPerKg": "µg",
      "adjustForAgeOver65": true
    },
    "unit": "µg/nap",
    "note": "Az ATA 2014 (Jonklaas) testtömeg-alapú induló dózis ~1,6 µg/kg/nap teljes T4-pótlásra (post-thyroidectomia vagy súlyos primer hipotireózis). Szubklinikus hipotireózisnál vagy enyhe primer hipotireózisnál általában 25-50 µg/nap kezdés is elegendő, lassú titrációval. 65 év felett vagy iszkémiás szívbetegségben 25 µg/nap induló dózis, 25 µg/2-4 hét lassú emelkedés. Reggel ÉHGYOMORRA bevenni, 30-60 perccel reggeli előtt."
  }
}
