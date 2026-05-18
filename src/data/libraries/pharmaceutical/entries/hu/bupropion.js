// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.566Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "bupropion",
  "name": "Bupropion",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Norepinefrin-dopamin reuptake gátló (NDRI) atipikus antidepresszáns. MDD + szezonális affektív zavar + dohányzás-leszokás (Zyban) indikációkkal. Nem szexuális diszfunkciót okoz, kevéssé szedáló.",
  "description": "A Bupropion egy atipikus antidepresszáns, amelyet a GlaxoSmithKline fejlesztett ki (Wellbutrin, FDA 1989). Az NDRI (norepinefrin-dopamin reuptake-gátló) és nikotin-receptor antagonista mechanizmusa megkülönbözteti az SSRI/SNRI-tól: nem okoz szexuális diszfunkciót vagy súlygyarapodást, nem szedáló, és nikotin-leszokást támogat (Zyban brand FDA 1997). FDA-jóváhagyott indikációi: MDD, szezonális affektív zavar (SAD), dohányzás-leszokás. A Jorenby 1999 (NEJM PMID 10080847) trial szerint 1 év absztinencia 30,3% Bupropion+nikotin-patch kombinációval, vs 16,4% placeboval. A Hewett 2010 meta-analízis 6 trial-en MDD-ben az SSRI-okkal hasonló hatékonyságot mutatott, jobb tolerabilitás-profillal.",
  "keyInfo": [
    {
      "label": "ATC kód",
      "value": "N06AX12"
    },
    {
      "label": "Vény-státusz",
      "value": "Vényköteles (Rx)"
    },
    {
      "label": "Hatásmechanizmus",
      "value": "NDRI + nikotin-receptor antagonista"
    },
    {
      "label": "Felezési idő",
      "value": "~21 óra (hidroxibupropion metabolit 20-37 óra)"
    },
    {
      "label": "Hatáskezdet",
      "value": "1-2 hét (motiváció, koncentráció), 4-6 hét (teljes AD-hatás)"
    }
  ],
  "mechanism": "A norepinefrin és dopamin reuptake gátlása mérsékelt mértékben (NDRI, ~3x DAT/NET szelektivitás SERT-tel szemben), valamint a neurális nikotin-receptor (α3β2, α4β2) antagonista hatása. A nikotin-receptor blokk magyarázza a dohányzás-leszokást támogató hatást: csökkenti a nikotin-elvonás dysphoriás komponensét. Aktív metabolit (hidroxibupropion) hasonlóan aktív, és a CYP2B6-katalizált képződése jelentős inter-individuális variabilitást mutat.",
  "legalStatus": "EU/HU: vényköteles (Wellbutrin, Zyban smoking-cessation, generikus). USA: FDA Rx, nem ütemezett. SR (sustained release) és XL (extended release) formulációk standardak. Generikus formák széles körben hozzáférhetőek.",
  "bioavailability": "Abszolút értékben nem karakterizált (IV formula nincs); gyors orális felszívódás, Tmax ~3 h — FDA Wellbutrin label",
  "onsetTime": "1-2 weeks (motivation, focus, energy), 4-6 weeks (full antidepressant response)",
  "halfLife": "~21 h (parent); hydroxybupropion metabolite 20-37 h, similar activity",
  "atcCode": "N06AX12",
  "prescriptionStatus": "Vényköteles (Rx), MDD-re és dohányzás-leszokásra felírható",
  "indications": [
    "Major depresszív zavar (MDD), különösen alacsony motivációval/anergiával",
    "Szezonális affektív zavar (SAD)",
    "Dohányzás-leszokás (Zyban, FDA 1997)",
    "SSRI-indukált szexuális diszfunkció augmentációja (off-label)",
    "ADHD (off-label, második vonal stimulánsok után)"
  ],
  "contraindications": [
    "Görcsroham-zavar (epilepszia) anamnézis vagy ismert hajlam",
    "Étkezési zavarok (bulimia, anorexia nervosa) — emelt görcs-kockázat",
    "Akut alkohol- vagy benzodiazepin-elvonás (görcs-kockázat)",
    "MAOi egyidejű vagy 14 napon belüli használat (hipertenzív krízis)"
  ],
  "commonSideEffects": [
    "Inszomnia (15-20%), szájszárazság (10-15%), fejfájás (10%)",
    "Agitáció, szorongás-fokozódás (5-10%) — főleg az első hetekben",
    "Vérnyomás-emelkedés (mérsékelt, dóziseffekt)",
    "Tremor, izzadás, súlyveszteség (5-8%)",
    "Súlyos, ritka: görcsroham (0,1% standard dózisnál, 0,4% 450 mg-nál — DÓZISFÜGGŐ), pszichotikus tünet, mánia (BD-betegen)"
  ],
  "cyp450": [
    "CYP2B6 substrate (primary metabolism)",
    "CYP2D6 inhibitor (strong, clinically significant)",
    "Multiple CYP interactions"
  ],
  "crossMolInteractions": [
    "MAOi (Selegiline, Phenelzine, Linezolid): ABSZOLÚT kontraindikált, hipertenzív krízis",
    "CYP2D6-substrátum (Metoprolol, Tamoxifen, Codein, Risperidon): plazma-szint emelkedhet",
    "CYP2B6 inhibitor (Ticlopidine, Clopidogrel): Bupropion AUC megemelkedhet, görcs-kockázat",
    "Alkohol: görcs-küszöböt csökkenti, kerülendő",
    "Tramadol, Theophylline, Trazodone: görcs-küszöb-csökkentő, óvatos kombináció"
  ],
  "benefits": [
    "MDD-remisszió SSRI-okkal hasonló (Hewett 2010 meta), de KEVÉSBÉ szexuális diszfunkció",
    "Súly-NEUTRÁLIS vagy súlyveszteség (vs SSRI gyakori súlygyarapodás)",
    "Dohányzás-leszokás 30,3% 1-éves absztinencia (Jorenby 1999 NEJM)",
    "NEM szedáló, motiváció- és energia-javító",
    "SSRI-augmentációként szexuális mellékhatás-mitigálás"
  ],
  "quickStart": [
    "SR-formulációval indítani: 150 mg/nap (reggel) 4 napig, majd 150 mg 2x/nap",
    "XL-formuláció: 150 mg/nap reggel 7 napig, majd 300 mg/nap reggel",
    "NE adja este (inszomnia-kockázat) — utolsó dózis legkésőbb 17 óráig",
    "Max-dózis SR 400 mg/nap, XL 450 mg/nap — felette EXPONENCIÁLISAN nő a görcs-kockázat",
    "Tablettát NE törje meg (SR/XL formuláció dose-dumping kockázata)"
  ],
  "expectations": [
    {
      "label": "1-2. hét",
      "body": "Motiváció és energia javulása már észlelhető. Szájszárazság, enyhe szorongás-fokozódás. Inszomnia mitigálására dózis-időzítés (reggel)."
    },
    {
      "label": "4-6. hét",
      "body": "Teljes antidepresszáns válasz kifejlődik. PHQ-9 vagy HAM-D követés. Dóziseszkalációhoz lassú approach, ne menjen 450 mg/nap fölé."
    },
    {
      "label": "Dohányzás-leszokás 7-12. hét",
      "body": "Zyban-protokoll: indítás 1-2 héttel a célzott \"quit date\" előtt, folytatás 7-12 hetes kezelés. Nikotin-patch kombináció duplikálja az 1-éves absztinencia esélyét."
    }
  ],
  "quality": {
    "pure": [
      "GSK Wellbutrin XL (originator), Zyban (smoking-cessation), generikus formák bioekvivalensek",
      "Magyar piacon: Wellbutrin XR 150/300 mg, Zyban 150 mg"
    ],
    "caution": [
      "Görcs-küszöb-csökkentés DÓZISFÜGGŐ: 300 mg/nap = 0,1%, 450 mg/nap = 0,4%, > 450 mg/nap exponenciálisan emelkedik",
      "Vérnyomás monitor a kezdéskor (mérsékelt emelkedés lehet)",
      "Bipoláris zavar: NDRI mánia-indukció kockázat, mood-stabilizer kötelező"
    ],
    "avoid": [
      "Görcsroham-zavar (epilepszia) anamnézis",
      "Bulimia vagy anorexia nervosa",
      "Aktív alkohol- vagy benzo-elvonás",
      "MAOi (egyidejű vagy 14 napon belüli)",
      "Linezolid vagy IV metilénkék (MAO-gátló hatás, szerotonin-szindróma kockázat)",
      "Hirtelen antiepileptikum- vagy szedatohipnotikum-elvonás (görcsroham-küszöb csökkenés)",
      "Súlyos májkárosodás (Child-Pugh ≥10) — kontraindikált az FDA-címke szerint"
    ]
  },
  "interactions": [
    "SSRI (Sertralin, Fluoxetin) augmentációja: szexuális diszfunkció mitigálása",
    "Naltrexone + Bupropion (Contrave) — FDA súlykezelés-indikáció obesitásra",
    "Nikotin-patch: 30,3% 1-éves absztinencia (vs 16,4% placebo)",
    "Vareniclin (Chantix): NEM ajánlott kombináció (additív CV-kockázat)",
    "Stimuláns ADHD-gyógyszer (Methylphenidate, Lisdexamfetamine): óvatos kombináció (görcs- és CV-kockázat)"
  ],
  "studies": [
    {
      "title": "A controlled trial of sustained-release bupropion, a nicotine patch, or both for smoking cessation",
      "authors": "Jorenby DE, Leischow SJ, Nides MA et al.",
      "journal": "N Engl J Med. 1999;340(9):685-91.",
      "pmid": "10080847"
    },
    {
      "title": "Bupropion versus paroxetine for the treatment of major depressive disorder",
      "authors": "Weihs KL, Settle EC Jr, Batey SR et al.",
      "journal": "J Clin Psychiatry. 2000;61(3):196-202.",
      "pmid": "10817105"
    },
    {
      "title": "Comparative efficacy and acceptability of 21 antidepressant drugs for major depressive disorder",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Bupropion sustained release in the treatment of seasonal affective disorder",
      "authors": "Modell JG, Rosenthal NE, Harriett AE et al.",
      "journal": "Biol Psychiatry. 2005;58(8):658-67.",
      "pmid": "16271317"
    },
    {
      "title": "Effects of naltrexone-bupropion on weight loss (COR-I trial)",
      "authors": "Greenway FL, Fujioka K, Plodkowski RA et al.",
      "journal": "Lancet. 2010;376(9741):595-605.",
      "pmid": "20673995"
    },
    {
      "title": "Bupropion and seizure risk: a systematic review",
      "authors": "Davidson J.",
      "journal": "J Clin Psychiatry. 1989;50(7):256-61.",
      "pmid": "2500425"
    },
    {
      "title": "Effects of bupropion sustained release on sexual function in nondepressed subjects with sexual side effects from SSRIs",
      "authors": "Clayton AH, Warnock JK, Kornstein SG et al.",
      "journal": "J Clin Psychiatry. 2004;65(1):62-7.",
      "pmid": "14744170"
    }
  ],
  "faq": [
    {
      "q": "Miért nem okoz a Bupropion szexuális diszfunkciót, ellentétben az SSRI-vel?",
      "a": "Az SSRI-szexuális diszfunkció (libidó-csökkenés, ejakulációs késleltetés, anorgazmia) a magas synaptikus szerotonin 5-HT2 receptor aktiválásán keresztül történik, ami a centrális szexuális reaktivitást gátolja. A Bupropion NEM növeli a szerotonint, hanem a DOPAMIN-ot és NOREPINEFRIN-t, amelyek a szexuális izgalom és libidó pro-mediátorai. Ezért nem csak hogy nem okoz szexuális mellékhatást, hanem SSRI-augmentációként a már meglévő szexuális diszfunkciót is mitigálhatja (Clayton 2004 PMID 14744170)."
    },
    {
      "q": "Mennyire valós a görcs-kockázat?",
      "a": "A standard dózisnál (SR ≤ 300 mg/nap, XL ≤ 300 mg/nap) a görcs-incidencia 0,1%, ami megegyezik a többi antidepresszánssal. 400 mg/napon 0,3%, 450 mg/nap 0,4%, ami már jelentősebb. Predispozíciós rizikófaktorok: bulimia, anorexia, akut alkohol-elvonás, görcs-anamnézis, epilepsy, koponyatrauma. Megelőzés: lassú titráció, max-dózis SR 400 / XL 450 mg/nap betartása, SR-formulát választani XL helyett, ha twice-daily-mintázat tolerálható."
    },
    {
      "q": "Hogyan használja Zyban-ként a dohányzás-leszokáshoz?",
      "a": "Zyban-protokoll: 150 mg/nap (reggel) 3 napig, majd 150 mg 2x/nap (reggel + délután, min. 8 órás távolság). A \"quit date\" a 7-14. napra állítandó, NEM rögtön. Folytatás 7-12 hét, abszolút abstinencia mellett. Nikotin-patch kombináció duplikálja az 1-éves absztinencia-rátát (Jorenby 1999 NEJM, 30,3% vs 16,4%). Akut álmatlanság, szájszárazság, fejfájás a kezdeti hetekben."
    },
    {
      "q": "Kombinálható-e SSRI-vel?",
      "a": "Igen, ez egy gyakori klinikai stratégia: SSRI (pl. Sertralin) + Bupropion az SSRI-indukált szexuális diszfunkció mitigálására és/vagy a hiányos AD-válasz augmentációjára. Az NDRI-mechanizmus a SERT-mechanizmus mellett kiegészítő (dopamin+norepinefrin emelkedés szerotonin emelkedés mellett). KIVÉTEL: Fluoxetin + Bupropion kombinációnál fokozott figyelem (Fluoxetin erős CYP2D6-inhibitor, Bupropion erős CYP2D6-inhibitor — kumulatív CYP-blokk)."
    },
    {
      "q": "Súlygyarapodás kockázata?",
      "a": "A Bupropion súly-NEUTRÁLIS vagy enyhén súlycsökkentő, ellentétben a SSRI-okkal (Sertralin: ~1-2 kg gyarapodás 6 hó alatt; Paroxetin: 2-4 kg). A naltrexone + bupropion kombináció (Contrave brand) FDA-jóváhagyott súlykezelés-indikációval rendelkezik obesitásra: COR-I trial (Greenway 2010 Lancet PMID 20673995) 6,1% testsúlyvesztés Contrave-en 56 hét alatt, vs 1,3% placeboval. Klinikailag különbség: SSRI-ról Bupropion-ra csere súlykontroll-szempontból előnyös."
    }
  ],
  "related": [
    "sertralin",
    "modafinil"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1 (start, SR)",
        "dose": "150"
      },
      {
        "phase": "Hét 2+",
        "dose": "300"
      },
      {
        "phase": "Hiányos válasz (max)",
        "dose": "450"
      }
    ],
    "unit": "mg/nap",
    "note": "SR 150 mg/nap reggel 4 nap, majd 150 mg 2x/nap (8+ órás távolság). XL 150 mg/nap reggel 7 nap, majd 300 mg/nap. Max-dózis SR 400 / XL 450 mg/nap — felette EXPONENCIÁLISAN nő a görcs-kockázat. NE adja este. Tablettát NE törje meg."
  }
}
