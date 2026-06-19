// MK-2866 (Ostarine / Enobosarm) — non-steroidal SARM, GTx Inc 2007.
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
  "shortDesc": "Non-steroidal SARM (Enobosarm), GTx Inc 2007. The SARM with the MOST clinical trial data: Phase II cachexia (Dalton 2011 PMID 21833506, 159 patients), Phase III POWER cancer-cachexia trials (Crawford 2016 PMID 26944362). The most popular SARM on the bodybuilding market, UGL marketing under 'soft first-SARM' label. WADA-banned S1.2.",
  "description": "Ostarine (MK-2866, Enobosarm, GTx-024, S-22) is a non-steroidal selective androgen receptor modulator (SARM) developed by GTx Inc. (Memphis, USA) in 2007. Structurally an aryl-propionamide derivative (NOT a steroid), AR-binding affinity ~30-40% of testosterone-level in vitro (Bhasin 2012 PMID 22573713). Clinical development: the MOST clinically tested molecule of the SARM class — Phase I 2007-2010, Phase II 2010-2012 cancer-cachexia (Dalton 2011 PMID 21833506 — 159 patients, 16 weeks, 1-3 mg/day, result: 1.3 kg lean body mass gain @ 3 mg vs placebo), Phase III POWER 1+2 trials 2013-2016 non-small-cell lung cancer cachexia (Crawford 2016 PMID 26944362 — NCT01355484/NCT01355497, ~600 patients, 3 mg/day, result: lean body mass + physical function co-primary endpoints STATISTICALLY did NOT reach clinical-meaningfulness threshold → Phase III FAILED). GTx halted clinical development for cachexia indication after 2016, later focused on urinary incontinence (Asahi, Phase II, 2018) + breast cancer (ER+ adjunct, Phase II, 2017) trials, but FDA approval still pending. On the bodybuilding market the MOST POPULAR SARM, UGL marketing as 'soft first-SARM' (lower HPTA suppression than RAD/LGD, more moderate hepatotoxicity). Hepatotoxicity cases documented (4+ known cases, Vilaca 2018 PMID 30171122 review), but rarer than RAD/LGD. WADA-banned year-round (S1.2 — other anabolic agents) since 2008 — common target since 2013.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Non-steroidal selective AR modulator (aryl-propionamide). Strong AR agonist in muscle, moderate prostate."
    },
    {
      "label": "Anabolic activity (Dalton 2011)",
      "value": "1.3 kg lean body mass gain @ 3 mg/day, 16 weeks, cancer cachexia patients."
    },
    {
      "label": "Half-life",
      "value": "~24 h (oral)"
    },
    {
      "label": "Onset",
      "value": "2-4 weeks"
    },
    {
      "label": "Legal status",
      "value": "Never FDA-approved (Phase III POWER failed 2016). UGL 'research chemical'. WADA-banned S1.2."
    }
  ],
  "mechanism": "Ostarine is a non-steroidal SARM, aryl-propionamide structure. Selective AR agonist in muscle + bone tissue — AR-binding affinity ~30-40% of testosterone level in vitro (Bhasin 2012). Minimal activity in prostate tissue (~10-20% Test). MyoD/myogenin upregulation in muscle → muscle protein synthesis. Does NOT aromatize → no E2 elevation. HPTA suppression milder than on RAD-140/LGD-4033 (Dalton 2011 — 3 mg/day Total T -23%, LH/FSH drop moderate). At higher UGL doses (20-30 mg/day) full HPTA suppression, but still milder dose-proportionally than LGD/RAD. Hepatotoxicity mechanism CYP3A4-mediated reactive metabolite (Solomon 2019 PMID 31077635). Vilaca 2018 PMID 30171122 review noted 4 Ostarine-associated hepatocellular injury cases, significantly fewer than RAD/LGD.",
  "legalStatus": "Never FDA-approved. GTx Inc discontinued cancer-cachexia development after the 2016 Phase III POWER trial failure. Since 2018 urinary incontinence + breast cancer adjunct indications continued — still no Rx. USA: Schedule III analog in some states (2018+). EU: no Rx, UGL 'research chemical'. WADA-banned year-round (S1.2) since 2008.",
  "onsetTime": "2-4 weeks. Dalton 2011 PMID 21833506 Phase II: lean body mass gain measurable after 8 weeks.",
  "halfLife": "~24 h (oral)",
  "halfLifeActive": "~24 h",
  "interactionsWith": [
    "rad-140",
    "lgd-4033",
    "milk-thistle",
    "tudca"
  ],
  "aromatization": "NO — non-steroidal, NOT a CYP19 substrate. E2 does not rise (Dalton 2011 Phase II).",
  "hepatotoxicity": "**Moderate-high — 4+ documented hepatocellular injury case reports (Vilaca 2018 PMID 30171122). In clinical trials (Dalton 2011, Crawford 2016) ALT/AST elevation moderate (~1.5-2x normal at 3 mg).** At UGL doses (20-30 mg/day) more severe. TUDCA + milk-thistle + monthly ALT/AST recommended (not strictly mandatory, but strongly suggested).",
  "wadaStatus": "banned",
  "androgenicRatio": "~50:20 (muscle:prostate selectivity — high, better than LGD).",
  "bindingAffinity": "Non-steroidal SARM, AR-binding affinity ~30-40% of testosterone-level in vitro. High tissue selectivity muscle > prostate (Dalton 2011 PMID 21833506).",
  "detectionWindow": "Urinary: 2-4 weeks Ostarine metabolites by LC-MS/MS (WADA-accredited). The most common cause of NFL/MLB suspension cases between 2015-2020.",
  "benefits": [
    "Most clinical trial data in the SARM class (Phase II + Phase III POWER)",
    "Lean body mass gain documented (1.3 kg @ 3 mg, 16 weeks cachexia patients)",
    "Moderate HPTA suppression (milder than RAD/LGD)",
    "Hepatic profile more moderate (fewer DILI case reports)",
    "High muscle > prostate selectivity"
  ],
  "quickStart": [
    "**Hepatotoxicity monitoring**: TUDCA 500 mg/day + milk-thistle 300 mg/day + monthly ALT/AST recommended (Vilaca 2018 review noted 4 DILI cases)",
    "Dose: 12.5-25 mg/day, max 8-week cycle (clinical 3 mg, UGL anecdotes 10-25 mg)",
    "HPTA suppression moderate, PCT (Clomid + Nolvadex 4 weeks) recommended at high doses",
    "WADA-banned year-round (2-4 week urinary detection) — most common cause of NFL/MLB suspensions",
    "Possible first-SARM option for those experimenting, but NOT 'safe' — research-level compound"
  ],
  "expectations": [
    {
      "label": "First 2 weeks",
      "body": "Anecdotal strength gain moderate, lean mass change NOT yet measurable."
    },
    {
      "label": "Weeks 4-8",
      "body": "Lean mass gain 1-3 kg (UGL anecdotes at 12.5-25 mg/day), HPTA suppression begins (LH/FSH ~30-50%)."
    },
    {
      "label": "End of week 8",
      "body": "Maximum effect (2-4 kg lean mass UGL), PCT planning. Hepatic monitoring."
    }
  ],
  "quality": {
    "pure": [
      "UGL Ostarine capsule 10-25 mg per cap — HPLC-tested source MANDATORY",
      "Liquid suspension 25 mg/ml UGL (precise dosing)",
      "All UGL — no Rx format (GTx Phase III 2016 failed)"
    ],
    "caution": [
      "Hepatotoxicity moderate — 4+ documented DILI cases (Vilaca 2018)",
      "HPTA suppression mild-moderate (3 mg clinical → -23% Total T)",
      "Lipid disturbance moderate (HDL drop ~20-30%)",
      "At high UGL doses (>25 mg) more severe side effects",
      "Long half-life → if side effects appear, NOT rapidly stoppable"
    ],
    "avoid": [
      "Pre-existing hepatic dysfunction",
      "Alcohol consumption",
      "High-dose stack with other SARMs (cumulative DILI)",
      "Planned fatherhood (HPTA suppression + recovery 2-4 months)",
      "Female use at high doses (virilization)"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/day + milk-thistle 300 mg/day: hepatic protection recommended",
    "Other SARMs (RAD-140, LGD-4033): NOT recommended — cumulative hepatotoxicity",
    "PCT: Clomid 25 mg/day + Nolvadex 20 mg/day for 4 weeks (shorter than RAD/LGD due to milder HPTA suppression)",
    "Warfarin: mild anticoagulant potentiation"
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
      "q": "Why did Phase III POWER trial fail?",
      "a": "GTx Inc Phase III POWER 1+2 trials (NCT01355484/NCT01355497, 2013-2016, ~600 NSCLC cachexia patients, 3 mg/day Ostarine vs placebo): the co-primary endpoint **lean body mass + physical function (stair-climb power)** TOGETHER did NOT reach statistical significance. Lean body mass rose (+1.5 kg vs placebo), but physical function endpoint did not reach the clinical-meaningfulness threshold. FDA did NOT approve. After 2016 GTx discontinued Ostarine cachexia development, later focusing on breast cancer adjunct + urinary incontinence (Asahi 2018 Phase II) indications. Crawford 2016 PMID 26944362 provides detailed trial design + results."
    },
    {
      "q": "Why is Ostarine a 'softer' SARM than RAD/LGD?",
      "a": "Multiple reasons: (1) AR-binding affinity lower (~30-40% Test vs RAD ~80%); (2) HPTA suppression milder dose-proportionally (Dalton 2011 — 3 mg/day Total T -23% vs Basaria 2013 LGD at 1 mg already -23%); (3) Hepatotoxicity case reports rarer (Vilaca 2018 — 4 vs RAD 6, LGD 12); (4) Higher clinical trial precedent (Phase III POWER). BUT: 'softer' is NOT 'safe' — at UGL doses (20-30 mg/day) full HPTA suppression, DILI risk present, WADA-banned. Possible first-SARM option for experimenters, but remains a research-level compound."
    },
    {
      "q": "Ostarine positive test — NFL/MLB precedent?",
      "a": "Ostarine was the most common cause of sport doping suspensions between 2015-2020: NFL Detroit Lions WR Calvin Johnson 2015 (later cleared, contaminated supplement), NFL TE Tony Galladay 2018, MLB Cleveland Indians Tyler Naquin 2017, MLB San Francisco Giants Pablo Sandoval 2019. The common 'contaminated supplement' argument: Geyer 2008 PMID 18519434 review found ~15% of market fitness supplements detectably contain SARM/anabolic by LC-MS/MS. For competitive athletes the minimum requirement is to use 3rd-party-tested (NSF Certified for Sport) supplements."
    },
    {
      "q": "Can Ostarine be stacked with RAD-140 or LGD-4033?",
      "a": "**NOT recommended.** Hilal 2020 PMID 32492288 case report featured RAD+LGD stack developing fulminant DILI after 9 weeks — cumulative hepatotoxicity. Ostarine would be relatively 'mild' in a SARM stack, but the combination risk (CYP3A4 saturation for reactive metabolites) is severe. If multiple SARMs are desired, better in sequence (8 weeks one, 8 weeks PCT, 8 weeks another) than parallel. No clinical precedent for stack."
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
    "unit": "mg/day (oral, once daily)",
    "note": "12.5-25 mg/day, max 8-week cycle. Clinical 3 mg/day → UGL 4-8x. TUDCA + milk-thistle recommended. PCT 4 weeks (Clomid + Nolvadex)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hepatic panel (ALT/AST/GGT/ALP/bilirubin/albumin), lipid panel, hormone panel (Total T/Free T/E2/LH/FSH/SHBG).",
      "purpose": "Hepatic + HPTA baseline."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Weeks 4 and 8",
      "markers": "ALT/AST/GGT, lipid, hormone (HPTA suppression monitor).",
      "purpose": "Hepatic monitoring (>3x ALT → discontinue)."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Last dose +3-5 days PCT start (Clomid 25 mg/day + Nolvadex 20 mg/day for 4 weeks)",
      "markers": "Hepatic normalization, HPTA recovery, lipid.",
      "purpose": "HPTA + hepatic recovery (2-4 months full)."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "Ostarine cruise NOT standard",
      "markers": "N/A",
      "purpose": "Cyclic use only."
    }
  },
  "anecdote": "Ostarine (MK-2866) is generally considered a 'beginner SARM' with a milder profile. It is still effective — especially for preserving muscle in a caloric deficit — but compared to real AAS, it is clearly weaker. Users typically report better recovery, slight strength increases, and a fuller look without significant water retention. It is most popular for muscle preservation during cuts, which is the dominant use-case in community accounts. Side effects to note include HPTA suppression, hair loss, and insomnia. It is also less aggressive than RAD-140. Importantly, despite the mild reputation, Ostarine still impacts lipids meaningfully and should not be considered side-effect-free. It is best characterized as a subtle, smaller anabolic compound rather than a dramatic mass-builder. Administered orally, often dosed about 1 hour before training. Lower doses are typical for muscle preservation; higher doses provide more growth but also more side effects."
}
