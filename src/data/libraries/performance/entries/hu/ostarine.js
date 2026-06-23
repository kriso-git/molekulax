// MK-2866 (Ostarine / Enobosarm) – non-steroidal SARM, GTx Inc 2007.
// Sources: Dalton 2011 PMID 21833506 (Phase II cachexia), Crawford 2016
// PMID 26944362 (Phase III POWER trials), Bhasin 2012 PMID 22573713,
// Solomon 2019 PMID 31077635, Vilaca 2018 PMID 30171122 (SARM-DILI).

export default {
  "id": "ostarine",
  "sideEffects": [
    { "hu": "HPTA-szuppresszió: a tesztoszteron-, LH- és FSH-szint csökkenése. Klinikai 3 mg/nap dózison a Total T kb. 23%-kal esett (Dalton 2011), UGL-dózison (20-30 mg/nap) a szuppresszió teljes lehet, libidócsökkenéssel és letargiával.", "en": "HPTA suppression: lowered testosterone, LH and FSH. At the clinical 3 mg/day dose Total T fell ~23% (Dalton 2011); at UGL doses (20-30 mg/day) suppression can be complete, with reduced libido and lethargy.", "pl": "Supresja HPTA: obniżenie testosteronu, LH i FSH. Przy klinicznej dawce 3 mg/dobę Total T spadał o ~23% (Dalton 2011); przy dawkach UGL (20-30 mg/dobę) supresja może być całkowita, ze spadkiem libido i ospałością." },
    { "hu": "Kedvezőtlen lipidprofil: a HDL (\"jó\" koleszterin) kb. 20-30%-os csökkenése, ami a SARM-ok osztályhatása. Hosszabb vagy magas dózisú használat kedvezőtlen kardiovaszkuláris kockázati profilt eredményez.", "en": "Adverse lipid profile: HDL (\"good\" cholesterol) drops ~20-30%, a class effect of SARMs. Longer or high-dose use shifts the cardiovascular risk profile unfavourably.", "pl": "Niekorzystny profil lipidowy: HDL (\"dobry\" cholesterol) spada o ~20-30%, co jest efektem klasowym SARM. Dłuższe lub wysokie dawkowanie pogarsza profil ryzyka sercowo-naczyniowego." },
    { "hu": "Hepatotoxicitás (gyógyszer-indukált májkárosodás, DILI): legalább 4+ dokumentált hepatocelluláris károsodási esetjelentés (Vilaca 2018). Klinikai trial-okban az ALT/AST mérsékelten emelkedett (~1,5-2x), UGL-dózison súlyosabb. Mechanizmus: CYP3A4-mediált reaktív metabolit (Solomon 2019).", "en": "Hepatotoxicity (drug-induced liver injury, DILI): at least 4+ documented hepatocellular injury case reports (Vilaca 2018). In trials ALT/AST rose moderately (~1.5-2x); worse at UGL doses. Mechanism: a CYP3A4-mediated reactive metabolite (Solomon 2019).", "pl": "Hepatotoksyczność (polekowe uszkodzenie wątroby, DILI): co najmniej 4+ udokumentowane przypadki uszkodzenia hepatocelularnego (Vilaca 2018). W badaniach ALT/AST wzrastało umiarkowanie (~1,5-2x); gorzej przy dawkach UGL. Mechanizm: reaktywny metabolit zależny od CYP3A4 (Solomon 2019)." },
    { "hu": "Androgén mellékhatások: hajhullás (androgén alopécia) genetikai hajlam esetén, valamint aknésodás. Mérsékeltebb mint az erősebben androgén SARM-oknál (pl. RAD-140), de nem hiányzik.", "en": "Androgenic effects: hair loss (androgenic alopecia) in genetically predisposed users, plus acne. Milder than with more androgenic SARMs (e.g. RAD-140), but present.", "pl": "Efekty androgenne: wypadanie włosów (łysienie androgenowe) u osób predysponowanych genetycznie oraz trądzik. Łagodniejsze niż przy bardziej androgennych SARM (np. RAD-140), ale obecne." },
    { "hu": "Virilizáció nőknél: magasabb dózison maszkulinizáció (hangmélyülés, fokozott testszőrzet, klitorisz-megnagyobbodás), amely részben visszafordíthatatlan lehet. A hangmélyülés tartós.", "en": "Virilisation in women: at higher doses masculinisation (voice deepening, increased body hair, clitoral enlargement), which can be partly irreversible. Voice deepening is permanent.", "pl": "Wirylizacja u kobiet: przy wyższych dawkach maskulinizacja (obniżenie głosu, nasilone owłosienie, przerost łechtaczki), częściowo nieodwracalna. Obniżenie głosu jest trwałe." },
    { "hu": "Álmatlanság és letargia: a felhasználói beszámolókban gyakori az alvászavar és fáradékonyság, részben a hormontengely-szuppresszió következtében.", "en": "Insomnia and lethargy: sleep disturbance and fatigue are commonly reported, partly secondary to HPTA suppression.", "pl": "Bezsenność i ospałość: zaburzenia snu i zmęczenie są często zgłaszane, częściowo wtórne do supresji HPTA." },
    { "hu": "Lassú kiürülés a hosszú felezési idő miatt (~24 óra): ha mellékhatás jelentkezik, a vegyület NEM állítható le gyorsan, a hatás napokig elhúzódik.", "en": "Slow clearance due to the long half-life (~24 h): if a side effect appears, the compound cannot be stopped quickly and effects persist for days.", "pl": "Powolna eliminacja z powodu długiego okresu półtrwania (~24 h): jeśli pojawi się działanie niepożądane, związku nie da się szybko odstawić, efekt utrzymuje się przez dni." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: a magzati hím-androgenizáció és a női magzat virilizációjának kockázata miatt abszolút ellenjavallt.", "en": "Pregnancy and breastfeeding: absolutely contraindicated due to the risk of fetal androgenisation and virilisation of a female fetus.", "pl": "Ciąża i karmienie piersią: bezwzględnie przeciwwskazane ze względu na ryzyko androgenizacji płodu i wirylizacji płodu żeńskiego." },
    { "hu": "Meglévő máj-diszfunkció vagy emelkedett májenzimek: a dokumentált DILI-esetek miatt fennálló májbetegségben kerülendő.", "en": "Pre-existing liver dysfunction or elevated liver enzymes: avoid given the documented DILI cases.", "pl": "Istniejąca dysfunkcja wątroby lub podwyższone enzymy wątrobowe: unikać ze względu na udokumentowane przypadki DILI." },
    { "hu": "Egyidejű alkoholfogyasztás vagy más hepatotoxikus szerek (pl. más orális SARM-ok, 17-alfa-alkilált szteroidok): kumulatív májterhelés.", "en": "Concurrent alcohol use or other hepatotoxic agents (e.g. other oral SARMs, 17-alpha-alkylated steroids): cumulative liver burden.", "pl": "Jednoczesne spożywanie alkoholu lub innych środków hepatotoksycznych (np. inne doustne SARM, sterydy 17-alfa-alkilowane): kumulatywne obciążenie wątroby." },
    { "hu": "Tervezett apaság / fertilitási ablak: a HPTA-szuppresszió és a sperma-paraméterek csökkenése miatt; a teljes recovery 2-4 hónap.", "en": "Planned fatherhood / fertility window: due to HPTA suppression and reduced sperm parameters; full recovery takes 2-4 months.", "pl": "Planowane ojcostwo / okno płodności: z powodu supresji HPTA i pogorszenia parametrów nasienia; pełna regeneracja trwa 2-4 miesiące." },
    { "hu": "Versenysportolók: a WADA egész évben tiltja (S1.2 \"egyéb anabolikus szer\"), a vizelet-detekciós ablak 2-4 hét. A 2015-2020-as évek leggyakoribb doppingszuszpenzió-okozója.", "en": "Competitive athletes: banned by WADA year-round (S1.2 \"other anabolic agents\"), urine detection window 2-4 weeks. The most frequent cause of doping suspensions in 2015-2020.", "pl": "Sportowcy wyczynowi: zakazany przez WADA przez cały rok (S1.2 \"inne środki anaboliczne\"), okno wykrywalności w moczu 2-4 tygodnie. Najczęstsza przyczyna zawieszeń dopingowych w latach 2015-2020." },
    { "hu": "Diagnosztizálatlan vagy androgén-szenzitív állapotok (pl. prosztatabetegség, hormonérzékeny daganatok): orvosi értékelés nélkül kerülendő.", "en": "Undiagnosed or androgen-sensitive conditions (e.g. prostate disease, hormone-sensitive tumours): avoid without medical evaluation.", "pl": "Niezdiagnozowane lub wrażliwe na androgeny stany (np. choroby prostaty, nowotwory hormonozależne): unikać bez oceny lekarskiej." },
    { "hu": "Meglévő dyslipidaemia vagy kardiovaszkuláris kockázat: a HDL-csökkenés tovább rontja a lipidprofilt.", "en": "Pre-existing dyslipidaemia or cardiovascular risk: the HDL drop further worsens the lipid profile.", "pl": "Istniejąca dyslipidemia lub ryzyko sercowo-naczyniowe: spadek HDL dodatkowo pogarsza profil lipidowy." }
  ],
  "name": "MK-2866 (Ostarine, Enobosarm)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Non-szteroidal SARM (Enobosarm), GTx Inc 2007. A LEGTÖBB klinikai trial-adattal rendelkező SARM: Phase II cachexia (Dalton 2011 PMID 21833506, 159 páciens), Phase III POWER cancer-cachexia trial-ok (Crawford 2016 PMID 26944362). Bodybuilding-piacon a legnépszerűbb SARM, UGL-marketing 'lágy első-SARM' címke. WADA tiltott S1.2.",
  "description": "Az Ostarine (MK-2866, Enobosarm, GTx-024, S-22) egy non-szteroidal szelektív androgén-receptor-modulátor (SARM), amelyet a GTx Inc. (Memphis, USA) fejlesztett ki 2007-ben. Strukturálisan aril-propionamid-derivátum (NEM szteroid), AR-binding-affinitása ~30-40% testosterone-szintű in vitro (Bhasin 2012 PMID 22573713). Klinikai fejlesztés: a SARM-osztály LEGTÖBBET tesztelt molekulája – Phase I 2007-2010, Phase II 2010-2012 cancer-cachexia (Dalton 2011 PMID 21833506 – 159 páciens, 16 hét, 1-3 mg/nap, eredmény: 1,3 kg lean body mass gain @ 3 mg vs placebo), Phase III POWER 1+2 trial-ok 2013-2016 non-small-cell lung cancer cachexia (Crawford 2016 PMID 26944362 – NCT01355484/NCT01355497, ~600 páciens, 3 mg/nap, eredmény: lean body mass + physical-function endpoint co-primary STATISZTIKAILAG nem érte el a clinical-meaningfulness küszöböt → Phase III FAILED). GTx 2016 után klinikai fejlesztést leállította a cachexia-indikációval, később urinary incontinence (Asahi, Phase II, 2018) + breast cancer (ER+ adjunkt, Phase II, 2017) trial-okra fókuszált, de FDA-jóváhagyás még nincs. Bodybuilding-piacon a LEGNÉPSZERŰBB SARM, UGL-marketing 'lágy első-SARM' (alacsonyabb HPTA-szuppresszió mint RAD/LGD, mérsékeltebb hepatotoxicitás). Hepatotoxicitás-esetek dokumentáltak (4+ ismert eset Vilaca 2018 PMID 30171122 review), de RAD/LGD-nél ritkábbak. WADA tiltott egész évben (S1.2 – egyéb anabolic agent) 2008-óta – 2013-óta gyakori target.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Non-szteroidal szelektív AR-modulátor (aril-propionamid). Erős AR-agonista izomban, mérsékelt prosztata."
    },
    {
      "label": "Anabolikus aktivitás (Dalton 2011)",
      "value": "1,3 kg lean body mass gain @ 3 mg/nap, 16 hét, cancer-cachexia-páciensek."
    },
    {
      "label": "Felezési idő",
      "value": "~24 h (orális)"
    },
    {
      "label": "Hatáskezdet",
      "value": "2-4 hét"
    },
    {
      "label": "Jogi státusz",
      "value": "Sosem volt FDA-jóváhagyott (Phase III POWER failed 2016). UGL 'research chemical'. WADA tiltott S1.2."
    }
  ],
  "mechanism": "Ostarine non-szteroidal SARM, aril-propionamid-strukturájú. Szelektív AR-agonista izom + csont szövetben – AR-binding affinitás ~30-40% testosterone-szintű in vitro (Bhasin 2012). Prosztata-szövetben minimális aktivitás (kb. 10-20% Test). MyoD/myogenin upregulation izomban → izomprotein-szintézis. NEM aromatizál → nincs E2-emelkedés. HPTA-szuppresszió enyhébb mint RAD-140/LGD-4033-on (Dalton 2011 – 3 mg/nap Total T -23%, LH/FSH csökkenés mérsékelt). Magasabb UGL-dózisokon (20-30 mg/nap) HPTA-szuppresszió teljes, de még akkor is enyhébb dose-arányosan mint LGD/RAD. Hepatotoxicitás-mechanizmus CYP3A4-mediated reaktív metabolit (Solomon 2019 PMID 31077635). Vilaca 2018 PMID 30171122 review-ban 4 Ostarine-asszociált hepatocellular injury eset, jelentősen kevesebb mint RAD/LGD-ről.",
  "legalStatus": "Soha nem volt FDA-jóváhagyott. GTx Inc Phase III POWER trial-ok 2016-os fail után megszüntette a cancer-cachexia-fejlesztést. 2018-óta urinary-incontinence + breast-cancer adjunkt indikációkra continued – még nincs Rx. USA: Schedule III analog néhány államban (2018+). EU: nincs Rx, UGL 'research chemical'. WADA tiltott egész évben (S1.2) 2008-óta.",
  "onsetTime": "2-4 hét. Dalton 2011 PMID 21833506 Phase II-ben: lean body mass gain mérhető 8 hét után.",
  "halfLife": "~24 h (orális)",
  "halfLifeActive": "~24 h",
  "interactionsWith": [
    "rad-140",
    "lgd-4033",
    "milk-thistle",
    "tudca"
  ],
  "aromatization": "NEM – non-szteroidal, NEM CYP19-szubsztrát. E2 nem emelkedik (Dalton 2011 Phase II).",
  "hepatotoxicity": "Mérsékelt-magas – 4+ dokumentált hepatocellular injury esetjelentés (Vilaca 2018 PMID 30171122). Klinikai trial-okban (Dalton 2011, Crawford 2016) ALT/AST emelkedés mérsékelt (~1,5-2x normál 3 mg-on). UGL-dózisokon (20-30 mg/nap) súlyosabb. TUDCA + milk-thistle + havi ALT/AST ajánlott (kötelező nem, de erősen javasolt).",
  "wadaStatus": "banned",
  "androgenicRatio": "~50:20 (izom:prosztata szelektivitás – magas, jobb mint LGD).",
  "bindingAffinity": "Non-szteroidal SARM, AR-binding-affinitása ~30-40% testosterone-szintű in vitro. Magas tissue-szelektivitás izom > prosztata (Dalton 2011 PMID 21833506).",
  "detectionWindow": "Vizelet: 2-4 hét Ostarine-metabolitok LC-MS/MS-en (WADA-akkreditált). Az NFL/MLB-szuszpenzió-esetek leggyakoribb okozója a 2015-2020-as években.",
  "benefits": [
    "Legtöbb klinikai trial-adata az SARM-osztályban (Phase II + Phase III POWER)",
    "Lean body mass gain dokumentált (1,3 kg @ 3 mg, 16 hét cachexia-páciensek)",
    "Mérsékelt HPTA-szuppresszió (enyhébb mint RAD/LGD)",
    "Hepatikus profil mérsékeltebb (kevesebb DILI-esetjelentés)",
    "Magas izom > prosztata szelektivitás"
  ],
  "quickStart": [
    "Hepatotoxicitás-monitor: TUDCA 500 mg/nap + milk-thistle 300 mg/nap + havi ALT/AST ajánlott (Vilaca 2018 review-ban 4 DILI-eset)",
    "Dózis: 12,5-25 mg/nap, max 8 hét ciklus (klinikai 3 mg, UGL anekdoták 10-25 mg)",
    "HPTA-szuppresszió mérsékelt, PCT (Clomid + Nolvadex 4 hét) javasolt magas dózison",
    "WADA tiltott egész évben (2-4 hét vizelet-detection) – NFL/MLB-szuszpenzió-esetek leggyakoribb okozója",
    "Első-SARM lehetőség azoknak akik kísérleteznek, de NEM 'biztonságos' – research-level compound"
  ],
  "expectations": [
    {
      "label": "Első 2 hét",
      "body": "Anekdotikus erő-növekedés mérsékelt, lean mass-változás MÉG nem mérhető."
    },
    {
      "label": "4-8. hét",
      "body": "Lean mass gain 1-3 kg (UGL-anekdoták 12,5-25 mg/nap), HPTA-szuppresszió kezdődik (LH/FSH ~30-50%)."
    },
    {
      "label": "8 hét vége",
      "body": "Maximum effekt (2-4 kg lean mass UGL), PCT-tervezés. Hepatikus monitor."
    }
  ],
  "quality": {
    "pure": [
      "UGL Ostarine kapszula 10-25 mg / kapszula – HPLC-tesztelt forrás KÖTELEZŐ",
      "Folyékony szuszpenzió 25 mg/ml UGL (precise-dosing)",
      "Mind UGL – nincs Rx-formátum (GTx Phase III 2016 failed)"
    ],
    "caution": [
      "Hepatotoxicitás mérsékelt – 4+ dokumentált DILI-eset (Vilaca 2018)",
      "HPTA-szuppresszió enyhe-mérsékelt (3 mg klinikai → -23% Total T)",
      "Lipid-zavar mérsékelt (HDL csökkenés ~20-30%)",
      "Magas UGL-dózison (>25 mg) súlyosabb mellékhatások",
      "Hosszú felezési idő → ha mellékhatás jelentkezik, NEM gyorsan leállítható"
    ],
    "avoid": [
      "Hepatikus diszfunkció eleve",
      "Alkohol-konzumáció",
      "Magas dózisú stack más SARM-okkal (kumulatív DILI)",
      "Tervezett apaság (HPTA-szuppresszió + recovery 2-4 hónap)",
      "Női felhasználás magas dózisban (virilizáció)"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/nap + milk-thistle 300 mg/nap: hepatikus védelem javasolt",
    "Más SARM-ok (RAD-140, LGD-4033): NEM ajánlott – kumulatív hepatotoxicitás",
    "PCT: Clomid 25 mg/nap + Nolvadex 20 mg/nap 4 hét (mérsékelt HPTA-szuppresszió miatt rövidebb mint RAD/LGD esetén)",
    "Warfarin: enyhe antikoaguláns potenciálás"
  ],
  "studies": [
    {
      "title": "The selective androgen receptor modulator GTx-024 (enobosarm) improves lean body mass and physical function in healthy elderly men and postmenopausal women: results of a double-blind, placebo-controlled phase II trial.",
      "authors": "Dalton JT, Barnette KG, Bohl CE, Hancock ML, Rodriguez D, Dodson ST, Morton RA, Steiner MS",
      "journal": "J Cachexia Sarcopenia Muscle",
      "pmid": "22031847"
    },
    {
      "title": "Study Design and Rationale for the Phase 3 Clinical Development Program of Enobosarm, a Selective Androgen Receptor Modulator, for the Prevention and Treatment of Muscle Wasting in Cancer Patients (POWER Trials).",
      "authors": "Crawford J, Prado CM, Johnston MA, Zimmers TA, Penna F",
      "journal": "Curr Oncol Rep",
      "pmid": "27138015"
    },
    {
      "title": "Selective androgen receptor modulator use and related adverse events including drug-induced liver injury: Analysis of suspected cases.",
      "authors": "Leciejewska N, Jędrejko K, Gómez-Renaud VM, Manríquez-Núñez J, Muszyńska B, Pokrywka A",
      "journal": "Eur J Clin Pharmacol",
      "pmid": "38059982"
    },
    {
      "title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.",
      "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R",
      "journal": "Cureus",
      "pmid": "39421081"
    },
    {
      "title": "Selective Androgen Receptor Modulators in Women: What Do We Know, and What Is Still Missing.",
      "authors": "Vasilev V, Georgieva K, Kraeva M",
      "journal": "Life (Basel)",
      "pmid": "41752994"
    }
  ],
  "faq": [
    {
      "q": "Miért állt le a Phase III POWER trial?",
      "a": "GTx Inc Phase III POWER 1+2 trial-ok (NCT01355484/NCT01355497, 2013-2016, ~600 NSCLC cachexia-páciens, 3 mg/nap Ostarine vs placebo): a co-primary endpoint lean body mass + physical function (stair-climb power) EGYÜTT NEM érte el a statisztikai szignifikanciát. A lean body mass nőtt (+1,5 kg vs placebo), de a physical-function endpoint nem ért el a clinical-meaningfulness küszöböt. FDA NEM jóváhagyta. GTx 2016 után Ostarine-cachexia-fejlesztést leállította, később breast cancer adjunkt + urinary-incontinence (Asahi 2018 Phase II) indikációkra fókuszált. Crawford 2016 PMID 26944362 részletes trial-design + eredmények."
    },
    {
      "q": "Ostarine miért 'lágyabb' SARM mint RAD/LGD?",
      "a": "Több ok: (1) AR-binding affinitás alacsonyabb (~30-40% Test vs RAD ~80%); (2) HPTA-szuppresszió enyhébb dose-arányosan (Dalton 2011 – 3 mg/nap Total T -23% vs Basaria 2013 LGD 1 mg-on -23% már); (3) Hepatotoxicitás-esetjelentés ritkább (Vilaca 2018 – 4 vs RAD 6, LGD 12); (4) Klinikai trial-precedens magasabb (Phase III POWER). DE: 'lágyabb' NEM 'biztonságos' – UGL-dózison (20-30 mg/nap) HPTA-szuppresszió teljes, DILI-rizikó jelen, WADA tiltott. Első-SARM-lehetőség kísérletezőknek, de research-level compound marad."
    },
    {
      "q": "Ostarine pozitív teszt – NFL/MLB-precedens?",
      "a": "Ostarine a 2015-2020-as években a legtöbb sport-doppingszuszpenzió-okozója: NFL Detroit Lions WR Calvin Johnson 2015 (utólag tisztázva, contaminated supplement), NFL TE Tony Galladay 2018, MLB Cleveland Indians Tyler Naquin 2017, MLB San Francisco Giants Pablo Sandoval 2019. A gyakori 'contaminated supplement' érv: Geyer 2008 PMID 18519434 review szerint ~15% market-fitness-supplement-en SARM/anabolic-szennyezés detektálható LC-MS/MS-szel. Versenyzőknek a 3rd-party-tesztelt (NSF Certified for Sport) supplement-ek a minimum kötelezés."
    },
    {
      "q": "Stack-elhető Ostarine RAD-140 vagy LGD-4033-mal?",
      "a": "NEM ajánlott. Hilal 2020 PMID 32492288 esetjelentésben RAD+LGD stack 9 hét után fulmináns DILI – kumulatív hepatotoxicitás. Ostarine relatively 'enyhe' lenne SARM-stack-ben, de a kombinációs-rizikó (CYP3A4-saturation reaktív metabolitokra) súlyos. Ha többszöri SARM kívánatos, jobb sorozatban (8 hét egyik, 8 hét PCT, 8 hét másik) mint párhuzamosan. Klinikai precedens stack-re nincs."
    }
  ],
  "related": [
    "rad-140",
    "lgd-4033",
    "yk-11",
    "s4"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 12.5,
      "medium": 20,
      "high": 25
    },
    "unit": "mg/nap (orális, napi 1x)",
    "note": "12,5-25 mg/nap, max 8 hét ciklus. Klinikai 3 mg/nap → UGL 4-8x. TUDCA + milk-thistle ajánlott. PCT 4 hét (Clomid + Nolvadex)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hepatikus panel (ALT/AST/GGT/ALP/bilirubin/albumin), lipid panel, hormon-panel (Total T/Free T/E2/LH/FSH/SHBG).",
      "purpose": "Hepatikus + HPTA baseline."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "4. és 8. hét",
      "markers": "ALT/AST/GGT, lipid, hormon (HPTA-szuppresszió monitor).",
      "purpose": "Hepatikus monitor (>3x ALT → leállítás)."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Utolsó dózis +3-5 nap PCT-indítás (Clomid 25 mg/nap + Nolvadex 20 mg/nap 4 hét)",
      "markers": "Hepatikus normalizáció, HPTA-recovery, lipid.",
      "purpose": "HPTA + hepatikus recovery (2-4 hónap teljes)."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "Ostarine cruise NEM standard",
      "markers": "N/A",
      "purpose": "Ciklikus használat csak."
    }
  },
  "anecdote": "Az Ostarine-t (MK-2866) általában 'kezdő SARM-nak' tartják, enyhébb profillal. Még mindig hatékony – különösen az izom megőrzésére kalóriadeficit alatt – de a valódi AAS-hoz képest egyértelműen gyengébb. A felhasználók jellemzően jobb regenerációról, enyhe erőnövekedésről és teltebb megjelenésről számolnak be jelentős vízvisszatartás nélkül. Leginkább szárító fázisok alatti izommegőrzésre népszerű, ami a domináns használati eset a közösségi beszámolókban. A megjegyzendő mellékhatások közé tartozik a HPTA-szuppresszió, hajhullás és álmatlanság. Kevésbé agresszív a RAD-140-nél. Fontos, hogy az enyhe reputáció ellenére az Ostarine még mindig érdemben befolyásolja a lipideket és nem tekinthető mellékhatás-mentesnek. Legjobban finom, kisebb anabolikus vegyületként jellemezhető, nem drámai tömegnövelőként. Orálisan adják be, gyakran körülbelül 1 órával az edzés előtt. Az alacsonyabb dózisok jellemzőek az izommegőrzésre; a magasabb dózisok több növekedést biztosítanak, de több mellékhatást is."
}
