// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.566Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "sertralin",
  "name": "Sertralin",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Szelektív szerotonin reuptake-gátló (SSRI), az MDD és szorongásos zavarok első-vonal Rx kezelése. Cipriani 2018 antidepresszáns-meta szerint a legkedvezőbb hatékonyság-tolerabilitás arány.",
  "description": "A Sertralin egy SSRI antidepresszáns, amelyet a Pfizer fejlesztett ki (Zoloft, FDA 1991). A SERT (szerotonin transzporter) szelektív gátlásával növeli a synaptikus szerotonin-szintet, ami a poszt-szinaptikus 5-HT1A receptor de-szenzitizálásán keresztül 2-6 hét alatt antidepresszáns hatást fejt ki. Cipriani 2018 (Lancet PMID 29477251) Network Meta-Analízis 21 antidepresszáns + 116477 beteg adatából a Sertralin-t az egyik legjobb első-vonal opciónak találta hatékonyság-tolerabilitás aránya alapján. FDA-jóváhagyott indikációi: MDD, OCD, pánikbetegség, PTSD, szociális szorongás (SAD), premenstruális diszforikus zavar (PMDD). Off-label: GAD, perzisztens depresszív zavar, BDD.",
  "keyInfo": [
    {
      "label": "ATC kód",
      "value": "N06AB06"
    },
    {
      "label": "Vény-státusz",
      "value": "Vényköteles (Rx)"
    },
    {
      "label": "Hatásmechanizmus",
      "value": "SERT-gátlás (SSRI), mild DAT-aktivitás"
    },
    {
      "label": "Felezési idő",
      "value": "~26 óra (N-desmetil metabolit 62-104 óra)"
    },
    {
      "label": "Hatáskezdet",
      "value": "2-6 hét (teljes antidepresszáns válasz)"
    }
  ],
  "mechanism": "A SERT (5-HT transporter) szelektív gátlása növeli a synaptikus szerotonin-koncentrációt. Az akut SERT-blokk azonnali, de a klinikai antidepresszáns hatás 2-6 hét után jelenik meg a poszt-szinaptikus 5-HT1A autoreceptor de-szenzitizálódásának köszönhetően. Mérsékelt DAT (dopamin transporter) aktivitása megkülönbözteti a többi SSRI-tól, hozzájárulhat a kevésbé szedáló profilhoz.",
  "legalStatus": "EU/HU: vényköteles (Zoloft, Stimuloton, Asentra, Serlift, generikus). USA: FDA Rx, nem ütemezett. Generikus formák széles körben hozzáférhetőek (originator patent 2006-ban lejárt). Nincs visszaélési potenciálja.",
  "bioavailability": "~44% (orális, étkezéssel csökken; tabletta ≈ oldat bioekvivalens — FDA Zoloft label)",
  "onsetTime": "2-6 weeks (full antidepressant response), 1-2 weeks (early efficacy signal)",
  "halfLife": "~26 h (parent), N-desmethylsertraline metabolite 62-104 h",
  "atcCode": "N06AB06",
  "prescriptionStatus": "Vényköteles (Rx), pszichiáter vagy háziorvos felírható",
  "indications": [
    "Major depresszív zavar (MDD)",
    "Obszesszív-kompulzív zavar (OCD)",
    "Pánikbetegség (PD), agorafóbiával vagy nélküle",
    "Poszttraumás stressz zavar (PTSD)",
    "Szociális szorongás (SAD), premenstruális diszforikus zavar (PMDD)"
  ],
  "contraindications": [
    "MAOi (Selegiline, Phenelzine, Tranylcypromine) egyidejű vagy 14 napon belüli használat (szerotonin szindróma kockázat)",
    "Pimozide egyidejű használat (QT-prolongáció, ventrikuláris aritmia)",
    "Ismert Sertralin-túlérzékenység, korábbi szerotonin szindróma anamnézis",
    "Súlyos májfunkció-zavar (dóziscsökkentés szükséges, Child-Pugh B-C)"
  ],
  "commonSideEffects": [
    "GI: hányinger (20-25%), hasmenés (15-20%), kezdetben, általában 1-2 hét alatt enyhül",
    "Szexuális diszfunkció (15-30%): libidó-csökkenés, ejakulációs késleltetés, anorgazmia",
    "Izzadás (8-10%), tremor (5-10%), szédülés (5-8%)",
    "Alvászavar: kezdetben inszomnia, később szedáció lehet, dózis-időzítés módosítható",
    "Súlyos, ritka: szerotonin szindróma (hipertermia, klónus, hiperaktív reflexek), öngyilkossági gondolat fokozás < 25 év (FDA boxed warning), SIADH-hiponatrémia (idős nőknél), QT-prolongáció"
  ],
  "cyp450": [
    "CYP2D6 substrate (primary)",
    "CYP3A4, CYP2B6, CYP2C9, CYP2C19 substrates (minor)",
    "Mild CYP2D6 inhibitor (clinical relevance moderate)"
  ],
  "crossMolInteractions": [
    "MAOi (Selegiline, Phenelzine, Linezolid antibiotikum): ABSZOLÚT kontraindikált, szerotonin szindróma",
    "Egyéb serotoninerg szerek (Tramadol, Triptánok, MDMA, kokain, dextromethorphan): kockázat fokozása, óvatos kombináció",
    "Warfarin: 8%-os INR-emelkedés, monitor",
    "NSAID, antitrombotikum: GI-vérzés kockázat fokozása",
    "Alkohol: szedáció fokozódhat, kerülendő"
  ],
  "benefits": [
    "MDD-remisszió ~40-50% (vs placebo ~30%) 8-12 hét után",
    "OCD- és PD-tünet-redukció (Y-BOCS és PDSS skálákon dokumentált)",
    "PTSD core-cluster (intruzív, hiperarousal, kerülő) javulása",
    "Pszichoterápiával kombinálva (CBT) szinergisztikus hatás",
    "Generikus, megfizethető, hosszú-távú biztonsági adat (30+ év)"
  ],
  "quickStart": [
    "Lassú titráció: 25 mg/nap 7 napig, majd 50 mg/nap (cél-dózis MDD-ben)",
    "OCD- vagy súlyosabb tünetek esetén tovább emelhető 100-200 mg/napra",
    "Reggel vagy este (egyéni alvás-mintázat szerint), étkezéssel vagy anélkül",
    "Hatás 2-6 hét után, ne hagyja abba türelmetlenül",
    "Discontinuáció: lassú leépítés (4-8 hét), elkerülve a discontinuation szindrómát"
  ],
  "expectations": [
    {
      "label": "1-2. hét",
      "body": "GI-mellékhatások (hányinger, hasmenés) leggyakoribbak. Antidepresszáns hatás még nem mérhető. Inszomnia vagy szedáció lehet, dózis-időzítés módosítható."
    },
    {
      "label": "2-6. hét",
      "body": "Antidepresszáns válasz kifejlődik. PHQ-9 vagy HAM-D követés. Ha 6 hét után nincs javulás (50%-os tünet-redukció), dóziseszkaláció vagy szer-csere mérlegelendő."
    },
    {
      "label": "6-12. hónap (folytatás)",
      "body": "Akut válasz után 6-12 hónapos folytatási fázis a relapszus prevenciójára. Első MDD-epizódnál a teljes kezelési idő 9-12 hónap. Rekurrens MDD-ben hosszabb fenntartó kezelés."
    }
  ],
  "quality": {
    "pure": [
      "Pfizer Zoloft (originator), generikus formák (Stimuloton, Asentra, Serlift, Sertralin Krka) bioekvivalensek",
      "25, 50, 100 mg tabletták standard, oldat-forma is elérhető"
    ],
    "caution": [
      "FDA boxed warning: öngyilkossági gondolat fokozása < 25 év, szoros monitorozás az első hetekben",
      "Discontinuation syndrome: szédülés, GI, ingerlékenység, \"brain-zap\" élmény, lassú leépítés szükséges",
      "Bipoláris zavar: SSRI alone-rizikó mániát indukálni, mood-stabilizer kötelező",
      "SIADH-hiponatrémia (idős nőknél), QT-prolongáció rizikó beteg-szelektálással"
    ],
    "avoid": [
      "Aktív vagy 14 napon belül használt MAOi (Selegiline, Linezolid)",
      "Pimozide (QT-prolongáció)",
      "Egyéb erős serotoninerg szer (Tramadol, MDMA) hosszú távú kombinálása",
      "Linezolid vagy IV metilénkék (MAO-gátló hatás, szerotonin-szindróma kockázata)",
      "Súlyos májkárosodás (Child-Pugh C) — clearance jelentősen csökkent",
      "Egyidejű disulfiram orális koncentrátum-formula (etanol-tartalom) esetén"
    ]
  },
  "interactions": [
    "CBT (kognitív-viselkedés terápia): szinergisztikus hatás, gold standard kombináció",
    "Bupropion (NDRI): SSRI-indukált szexuális diszfunkció augmentálására adható",
    "Benzodiazepin (Lorazepam, Clonazepam): rövid távon szorongás-átmenetre, hosszú távon kerülendő",
    "Lithium, kvetiapin: augmentációs stratégia rezisztens MDD-ben",
    "Pregabalin, gabapentin: GAD-augmentáció lehetséges"
  ],
  "studies": [
    {
      "title": "Comparative efficacy and acceptability of 21 antidepressant drugs for major depressive disorder",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Evaluation of outcomes with citalopram for depression using measurement-based care in STAR*D",
      "authors": "Trivedi MH, Rush AJ, Wisniewski SR et al.",
      "journal": "Am J Psychiatry. 2006;163(1):28-40.",
      "pmid": "16390886"
    },
    {
      "title": "Sertraline pharmacokinetics and dosing in depression",
      "authors": "Hiemke C, Härtter S.",
      "journal": "Pharmacol Ther. 2000;85(1):11-28.",
      "pmid": "10674711"
    },
    {
      "title": "Treatment of PTSD: a randomized trial of sertraline",
      "authors": "Brady K, Pearlstein T, Asnis GM et al.",
      "journal": "JAMA. 2000;283(14):1837-44.",
      "pmid": "10770145"
    },
    {
      "title": "Sertraline for OCD: a multicenter, double-blind, placebo-controlled trial",
      "authors": "Kronig MH, Apter J, Asnis G et al.",
      "journal": "J Clin Psychopharmacol. 1999;19(2):172-6.",
      "pmid": "10211919"
    },
    {
      "title": "Antidepressants and the risk of suicidal behaviors (FDA pediatric review)",
      "authors": "Hammad TA, Laughren T, Racoosin J.",
      "journal": "Arch Gen Psychiatry. 2006;63(3):332-9.",
      "pmid": "16520440"
    },
    {
      "title": "Discontinuation syndrome and SSRIs: a systematic review",
      "authors": "Fava GA, Gatti A, Belaise C et al.",
      "journal": "Psychother Psychosom. 2015;84(2):72-81.",
      "pmid": "25721705"
    }
  ],
  "faq": [
    {
      "q": "Miért tart 2-6 hetet az antidepresszáns hatás?",
      "a": "A SERT-blokk azonnal megemeli a synaptikus szerotonint, de a kezdeti 5-HT1A autoreceptor-aktiválás SUPRESSZÁLJA a poszt-szinaptikus szerotonin-felszabadulást. Csak amikor ezek az autoreceptorok 2-6 hét alatt de-szenzitizálódnak, válik a szerotonin-jelzés tartósan emelkedetté, ami az antidepresszáns klinikai hatás megjelenéséhez vezet. Ezért nem érdemes idő előtt feladni a kezelést."
    },
    {
      "q": "Mit jelent az FDA boxed warning < 25 év?",
      "a": "2004-es FDA-pediátriai meta-analízis (Hammad 2006 PMID 16520440) szerint az SSRI-kezelés első hetekben ~1,5x relatív kockázat-emelkedést okoz a placebo-feletti suicidal ideation/behavior-ra <25 éves betegen. Abszolút kockázat alacsony marad. Mitigáció: pszichiátriai szoros követés az első 4-6 hétben, családtagok bevonása, biztonsági terv. < 18 év esetén Sertralin EU-ban OCD-re engedélyezett, MDD-re csak Fluoxetin."
    },
    {
      "q": "Mi a discontinuation szindróma?",
      "a": "A Sertralin (és más SSRI) hirtelen elhagyásánál 24-72 órán belül megjelenő tünetcsoport: szédülés, hányinger, fejfájás, ingerlékenység, \"brain-zap\" érzés (elektromos lökés-szerű paresztézia), GI-zavar. Általában 1-2 hét alatt enyhül. Megelőzés: lassú leépítés 4-8 hét alatt (50 → 25 → 12,5 → 0 mg). Nem azonos dependenciával vagy függőséggel: pszichológiai kötődés nincs, csak farmakológiai re-adaptáció."
    },
    {
      "q": "Mit tehetek a szexuális mellékhatások ellen?",
      "a": "SSRI-indukált szexuális diszfunkció (libidó-csökkenés, ejakulációs késleltetés, anorgazmia) tartós lehet 15-30%-os incidenciával. Stratégiák: (1) Dóziscsökkentés, (2) Bupropion-augmentáció (NDRI mechanizmus ellensúlyozza az SSRI-szexuális hatást), (3) Szer-csere: Bupropion, Mirtazapin, Vortioxetin kevésbé szexuális-impaktoló, (4) Drug holiday (ne ajánljuk általában), (5) PDE5-inhibitor (Sildenafil, Tadalafil) férfi-ED-re kombinálható."
    },
    {
      "q": "Mennyi ideig kell szednem a Sertralint?",
      "a": "A APA és NICE iránymutatás szerint: első MDD-epizódnál legalább 6-12 hónap a remisszió elérése után. Rekurrens MDD (2+ epizód) vagy súlyos első epizód esetén 2-5 év vagy határozatlan idejű fenntartó kezelés. OCD/PTSD-nél hosszabb terápia szokványos. Discontinuáció orvossal egyeztetve, lassú leépítéssel. Hosszú-távú használat biztonságos a jelenleg ismert adatok alapján."
    }
  ],
  "related": [
    "bupropion",
    "modafinil"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1 (start)",
        "dose": "25"
      },
      {
        "phase": "Hét 2-3",
        "dose": "50"
      },
      {
        "phase": "Hét 4-6 (ha szükséges)",
        "dose": "100"
      },
      {
        "phase": "OCD/súlyos MDD cél",
        "dose": "150"
      },
      {
        "phase": "Max-dózis",
        "dose": "200"
      }
    ],
    "unit": "mg/nap",
    "note": "MDD/PTSD/PD: cél-dózis 50-100 mg/nap. OCD/súlyos MDD: 150-200 mg/nap. Lassú emelkedés a GI-tolerancia érdekében. Reggel vagy este (egyéni alvás-mintázat szerint). Hatás 2-6 hét. Soha ne hagyja abba hirtelen — lassú leépítés 4-8 hét alatt."
  }
}
