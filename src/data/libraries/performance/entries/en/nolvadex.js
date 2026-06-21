// Nolvadex (Tamoxifen citrate) – non-steroidal SERM, ICI Pharmaceuticals
// 1962 synthesis, FDA-approved 1977 for ER+ breast cancer (now AstraZeneca).
// AAS-PCT golden-standard. Sources: FDA Nolvadex SmPC, Fisher 1998 NSABP P-1
// PMID 9747868, Schäcke 2002 SERM PMID 12433722, Tan 2014 PMID 24716172,
// Karavolos 2015 PMID 25778469.

export default {
  "id": "nolvadex",
  "sideEffects": [
    { "hu": "Vénás thromboembolia (mélyvénás trombózis, tüdőembólia, stroke) – a tamoxifen legsúlyosabb, fekete-keretes (FDA boxed warning) kockázata; prokoaguláns hatás a parciális ösztrogén-agonizmus révén.", "en": "Venous thromboembolism (deep vein thrombosis, pulmonary embolism, stroke) – tamoxifen's most serious, FDA boxed-warning risk; prothrombotic via partial estrogen-agonist activity.", "pl": "Żylna choroba zakrzepowo-zatorowa (zakrzepica żył głębokich, zatorowość płucna, udar) – najpoważniejsze ryzyko tamoksyfenu z ostrzeżeniem w czarnej ramce FDA; działanie prozakrzepowe poprzez częściowy agonizm estrogenowy." },
    { "hu": "Látászavarok: villogó zigzag-mintázat (scintillating scotoma), retinopathia, corneális/retinális kristályos lerakódás és kataraktarizikó – dózisfüggő, magasabb dózison gyakoribb, leállításra általában reverzibilis.", "en": "Visual disturbances: scintillating scotoma, retinopathy, corneal/retinal crystalline deposits and cataract risk – dose-dependent, more common at higher doses, usually reversible on discontinuation.", "pl": "Zaburzenia widzenia: mroczek migocący (scintillating scotoma), retinopatia, krystaliczne złogi w rogówce/siatkówce i ryzyko zaćmy – zależne od dawki, częstsze przy wyższych dawkach, zwykle odwracalne po odstawieniu." },
    { "hu": "Hangulati ingadozás, hőhullámok, fejfájás és influenza-szerű érzés – az ösztrogén-receptor-modulációból és az E2-fluktuációból ered; PCT-ben a HPTA-restart velejárója.", "en": "Mood swings, hot flushes, headache and flu-like feelings – arising from estrogen-receptor modulation and E2 fluctuation; in PCT a by-product of the HPTA restart.", "pl": "Wahania nastroju, uderzenia gorąca, ból głowy i objawy grypopodobne – wynikają z modulacji receptora estrogenowego i wahań E2; w PCT efekt uboczny restartu osi HPTA." },
    { "hu": "Enyhe, általában tranziens májenzim-emelkedés (ALT/AST); ritka, krónikus nagy dózisú használatnál súlyos hepatotoxicitás, steatosis és cirrhosis dokumentált – PCT 4-6 hetes dózisán klinikailag ritka.", "en": "Mild, usually transient liver enzyme elevation (ALT/AST); with rare chronic high-dose use severe hepatotoxicity, steatosis and cirrhosis are documented – clinically rare at the 4-6 week PCT dose.", "pl": "Łagodny, zwykle przejściowy wzrost enzymów wątrobowych (ALT/AST); przy rzadkim przewlekłym stosowaniu dużych dawek opisano ciężką hepatotoksyczność, stłuszczenie i marskość – klinicznie rzadkie przy dawce PCT 4-6 tygodni." },
    { "hu": "Endometrium-hiperplázia, polip és endometrium-karcinóma rizikó (parciális agonista hatás a méhnyálkahártyán) – elsősorban nőknél, hosszú távú használatnál; szintén FDA boxed warning.", "en": "Endometrial hyperplasia, polyps and endometrial carcinoma risk (partial agonist effect on the uterine lining) – primarily in women on long-term use; also an FDA boxed warning.", "pl": "Ryzyko rozrostu endometrium, polipów i raka endometrium (działanie częściowo agonistyczne na błonę śluzową macicy) – głównie u kobiet przy długotrwałym stosowaniu; również ostrzeżenie w ramce FDA." },
    { "hu": "Csökkent terápiás hatás CYP2D6 poor-metabolizer fenotípusnál (kb. 7-10% kaukázusi populáció) és erős CYP2D6-gátló SSRI-k (paroxetin, fluoxetin) együttadásakor – az aktív endoxifen-szint drámaian csökken.", "en": "Reduced therapeutic effect in CYP2D6 poor-metabolizers (about 7-10% of Caucasians) and with strong CYP2D6-inhibitor SSRIs (paroxetine, fluoxetine) co-administered – active endoxifen levels drop dramatically.", "pl": "Zmniejszona skuteczność u osób wolno metabolizujących CYP2D6 (około 7-10% populacji kaukaskiej) oraz przy jednoczesnym stosowaniu silnych inhibitorów CYP2D6 SSRI (paroksetyna, fluoksetyna) – poziom aktywnego endoksyfenu drastycznie spada." },
    { "hu": "Csökkent IGF-1-szint (~10-15%), fáradtság és lassabb regeneráció – a hepatikus IGF-1-jelpálya parciális blokádja miatt; PCT befejezése után 4-6 héttel reverzibilis.", "en": "Reduced IGF-1 levels (~10-15%), fatigue and slower recovery – due to partial blockade of the hepatic IGF-1 signaling pathway; reversible 4-6 weeks after PCT ends.", "pl": "Obniżony poziom IGF-1 (~10-15%), zmęczenie i wolniejsza regeneracja – z powodu częściowej blokady wątrobowego szlaku sygnałowego IGF-1; odwracalne 4-6 tygodni po zakończeniu PCT." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás (Pregnancy Category D) – teratogén, magzati károsodás és vetélés kockázata; a kezelés alatt és után megbízható nem-hormonális fogamzásgátlás kötelező.", "en": "Pregnancy and breastfeeding (Pregnancy Category D) – teratogenic, risk of fetal harm and miscarriage; reliable non-hormonal contraception required during and after treatment.", "pl": "Ciąża i karmienie piersią (kategoria D) – teratogenny, ryzyko uszkodzenia płodu i poronienia; podczas i po leczeniu wymagana niezawodna antykoncepcja niehormonalna." },
    { "hu": "Aktív vagy lezajlott vénás thromboembolia (mélyvénás trombózis, tüdőembólia) az anamnézisben, valamint egyidejű kumarin-típusú antikoaguláns terápia – jelentősen fokozott alvadási kockázat.", "en": "Active or prior venous thromboembolism (deep vein thrombosis, pulmonary embolism) in history, and concurrent coumarin-type anticoagulant therapy – substantially increased clotting risk.", "pl": "Czynna lub przebyta żylna choroba zakrzepowo-zatorowa (zakrzepica żył głębokich, zatorowość płucna) w wywiadzie oraz jednoczesne leczenie antykoagulantami kumarynowymi – znacznie zwiększone ryzyko zakrzepicy." },
    { "hu": "Anamnézisben endometrium-hiperplázia vagy endometrium-karcinóma – a parciális agonista hatás 2-3-szoros relatív rizikó-emelkedést okoz.", "en": "History of endometrial hyperplasia or endometrial carcinoma – the partial agonist effect causes a 2-3 fold relative risk increase.", "pl": "Rozrost endometrium lub rak endometrium w wywiadzie – działanie częściowo agonistyczne powoduje 2-3-krotny wzrost ryzyka względnego." },
    { "hu": "Ismert túlérzékenység tamoxifenre vagy a készítmény bármely segédanyagára.", "en": "Known hypersensitivity to tamoxifen or any excipient of the product.", "pl": "Znana nadwrażliwość na tamoksyfen lub którąkolwiek substancję pomocniczą preparatu." },
    { "hu": "Súlyos májbetegség vagy kontrollálatlan hyperlipidaemia/hypertrigliceridaemia – tamoxifen ritkán súlyos hypertrigliceridaemiát és pancreatitist provokálhat.", "en": "Severe liver disease or uncontrolled hyperlipidemia/hypertriglyceridemia – tamoxifen can rarely provoke severe hypertriglyceridemia and pancreatitis.", "pl": "Ciężka choroba wątroby lub niekontrolowana hiperlipidemia/hipertriglicerydemia – tamoksyfen może rzadko wywołać ciężką hipertriglicerydemię i zapalenie trzustki." },
    { "hu": "Egyidejű erős CYP2D6-gátló SSRI-k (paroxetin, fluoxetin) – az aktív endoxifen-konverziót blokkolják, így a tamoxifen hatástalanná válhat; ha SSRI szükséges, válassz venlafaxint vagy citalopramot.", "en": "Concurrent strong CYP2D6-inhibitor SSRIs (paroxetine, fluoxetine) – they block active endoxifen conversion, potentially rendering tamoxifen ineffective; if an SSRI is needed, choose venlafaxine or citalopram.", "pl": "Jednoczesne stosowanie silnych inhibitorów CYP2D6 SSRI (paroksetyna, fluoksetyna) – blokują konwersję do aktywnego endoksyfenu, co może uczynić tamoksyfen nieskutecznym; jeśli SSRI jest konieczny, wybierz wenlafaksynę lub citalopram." },
    { "hu": "Versenysport WADA-tiltás alatt (S4.3 hormon- és metabolikus modulátor) – versenyen belül és kívül egyaránt tilos, 2-3 hónapos vizelet-detektálási ablakkal.", "en": "Competitive sport under WADA ban (S4.3 hormone and metabolic modulator) – prohibited both in- and out-of-competition, with a 2-3 month urine detection window.", "pl": "Sport wyczynowy objęty zakazem WADA (S4.3 modulator hormonalny i metaboliczny) – zabroniony zarówno w trakcie, jak i poza zawodami, z oknem wykrywalności w moczu 2-3 miesiące." }
  ],
  "name": "Nolvadex (Tamoxifen)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Tamoxifen citrate, 1962 ICI Pharmaceuticals synthesis, FDA-approved (1977) for ER+ breast cancer. The AAS-PCT golden-standard SERM: pituitary ER-α blockade → LH/FSH disinhibition → endogenous testosterone recovery. 60+ years of clinical literature.",
  "description": "Nolvadex (tamoxifen citrate) is a non-steroidal triphenylethylene-class selective estrogen receptor modulator (SERM), synthesized in 1962 by Arthur Walpole and Dora Richardson at the ICI Pharmaceuticals (now AstraZeneca) Macclesfield laboratory. Original target: post-coital contraceptive – paradoxically turned out to be an ovulation inducer, and gained FDA approval in 1977 for estrogen-receptor-positive (ER+) breast cancer. To date 30+ million female and male patients have been treated with it, the longest-running SERM in clinical literature. In the AAS-PCT (post-cycle therapy) context, Nolvadex is the classic first-line choice: due to competitive antagonism of ER-α at the pituitary level, the hypothalamic-pituitary (HP) axis is released from negative feedback, LH and FSH secretion is restored, and Leydig cells restart endogenous testosterone production. Nolvadex's selectivity is tissue-specific: antagonist in breast tissue, agonist in bone, liver, and endometrium (hence the endometrial cancer risk during long-term female use). Listed on the WADA list (S4 hormone modulator) – banned in competitive sport.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Non-steroidal SERM, ER-α competitive antagonist at pituitary + breast"
    },
    {
      "label": "Dosing (PCT)",
      "value": "20-40 mg/day, 4-6 weeks"
    },
    {
      "label": "Half-life",
      "value": "~5-7 days (parent) / ~14 days (4-OH-tamoxifen active metabolite)"
    },
    {
      "label": "Onset",
      "value": "LH rise within 24-72 h, Test recovery 2-3 weeks"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA Rx, registered in HU + PL, WADA S4 (banned in-competition)"
    }
  ],
  "mechanism": "Tamoxifen is a prodrug – hepatic CYP2D6 + CYP3A4 enzymes convert it to 4-hydroxy-tamoxifen (4-OH-tam) and endoxifen (N-desmethyl-4-OH-tam). The active metabolites have 30-100x stronger ER-α affinity than the parent compound. 4-OH-tam competitively binds the estrogen receptor, blocking its agonist conformational change – depending on tissue, it acts as antagonist (breast, pituitary) or partial agonist (bone, liver, endometrium). Pituitary ER-α blockade lifts the estrogen-mediated negative feedback on GnRH secretion, so LH and FSH secrete freely again. Elevated LH stimulates Leydig-cell LHCGR receptors → endogenous testosterone production restores. In CYP2D6 poor-metabolizer patients (~7-10% of Caucasian population) endoxifen levels are low and Nolvadex efficacy reduced – genetic testing is indicated if therapeutic response is absent.",
  "legalStatus": "USA: FDA-approved 1977 (ER+ breast cancer, ductal carcinoma in situ, prevention in high-risk women), Schedule N/A (not a controlled substance). EU: EMA-approved. HU: registered (Nolvadex, Tamoxifen-ratiopharm, Tamoxifen Sandoz Rx). PL: registered (Nolvadex Rx). WADA: S4.3 estrogen receptor modulator (banned in-competition + out-of-competition – prohibited for all male WADA competitors).",
  "onsetTime": "LH rise within 24-72 h, Test recovery 2-3 weeks",
  "halfLife": "~5-7 days (parent tamoxifen)",
  "halfLifeActive": "~14 days (4-OH-tamoxifen + endoxifen active metabolites)",
  "interactionsWith": [
    "clomid",
    "enclomiphene",
    "raloxifene",
    "hcg-perf",
    "anastrozol",
    "warfarin"
  ],
  "aromatization": "Does not aromatize – competitive estrogen receptor (ER-α) blockade, NOT CYP19 aromatase inhibition. E2 levels on Nolvadex often slightly RISE (due to pituitary LH-disinhibition → secondary testicular E2 synthesis). Nolvadex does NOT substitute for an aromatase inhibitor during cycle – distinct mechanism.",
  "hepatotoxicity": "Low – non-steroidal, NOT 17α-alkylated. Rare mild ALT/AST elevation <2% incidence at PCT-dose. Chronic high-dose (>40 mg/day, 6+ months) cirrhosis risk documented in FDA Nolvadex SmPC adverse-event list (female long-term prevention/breast-cancer adjuvant use); clinically not reported at AAS-PCT 4-6 week dosing.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not an AAS, SERM)",
  "bindingAffinity": "ER-α competitive affinity high (Ki ~3 nM 4-OH-tamoxifen), ER-β slightly lower. Tissue-specific conformational effect explains the agonist/antagonist switch (breast antagonist, bone agonist).",
  "detectionWindow": "WADA-accredited GC-MS/LC-MS/MS urine detection 2-3 months after last Nolvadex dose (tamoxifen + N-desmethyl-tamoxifen metabolite markers).",
  "benefits": [
    "AAS-PCT first-line HPTA-restart agent – 60+ years of clinical literature",
    "Pituitary ER-α blockade → LH/FSH disinhibition → endogenous Test recovery 2-3 weeks",
    "Gynecomastia prevention on-cycle (breast ER-α blockade)",
    "Bone-protective partial agonist effect (osteoporosis reduction as side benefit)",
    "HDL cholesterol elevation (secondary cardio-protective effect)",
    "Cheap (~€5-10/box generic) + globally available"
  ],
  "quickStart": [
    "Ester timing: short-ester (Test-Prop, Tren-Ace) last pin + 3-5 days → Nolvadex start; long-ester (Test-Enan/Cyp, Deca) → 14-21 days later",
    "Standard PCT: 40 mg/day × 1-2 weeks, then 20 mg/day × 2-4 weeks (total 4-6 weeks)",
    "Take with water, food-timing indifferent (oral bioavailability ~30-40%)",
    "Optional Clomid combination: 'Clomid 50/50/25/25 + Nolva 20/20/20/20' = classic dual-SERM PCT protocol (halved dose on both)",
    "Bloodwork: pre-PCT baseline + PCT end +2 weeks + PCT end +6 weeks confirm-recovery",
    "Visual disturbances (rare): scintillating scotoma >40 mg/day chronic, reversible on cessation"
  ],
  "expectations": [
    {
      "label": "Week 1",
      "body": "LH/FSH rise measurable (blood draw at +5 days), symptomatic change minimal. Some users feel mild flu-like sensation or headache due to E2 fluctuation."
    },
    {
      "label": "Weeks 2-3",
      "body": "Endogenous testosterone production begins returning – libido recovery, energy elevation noticeable. Mirror test: if gyno symptoms appeared at cycle end, they ease now."
    },
    {
      "label": "Weeks 4-6",
      "body": "Test recovery complete (baseline ±10%), HPTA axis functional. Lipid panel improves (HDL rise). PCT end: last dose, +2 weeks conservative rest before new cycle planning."
    },
    {
      "label": "Post-PCT",
      "body": "Confirmation bloodwork +6 weeks: Total/Free Test, LH, FSH, E2, SHBG. If LH/FSH < 50% of age-specific baseline → consult specialist (endocrinologist)."
    }
  ],
  "quality": {
    "pure": [
      "AstraZeneca Nolvadex 10 mg or 20 mg blister, Rx pharma-grade (EU pharmacy available)",
      "Tamoxifen-ratiopharm, Tamoxifen Sandoz, Tamoxifen Hexal generic equivalent (EU)",
      "Indian generics (Sunpharma, Cipla) – pharma-grade, cheap, common via ePharmacy",
      "UGL liquid tamoxifen: HPLC-tested source mandatory – often under-dosed concentration or hybridized with pre-broken 4-OH-tamoxifen"
    ],
    "caution": [
      "CYP2D6 poor-metabolizer phenotype (7-10% Caucasian) – Nolvadex efficacy reduced; without clinical response, consider genetic testing",
      "SSRI interaction: paroxetine + fluoxetine are strong CYP2D6 inhibitors → endoxifen levels drop dramatically (50%+ decrease, Stearns 2003 PMID 12832537); choose venlafaxine or citalopram if SSRI is needed",
      "Warfarin/Coumadin interaction: INR rise expected, strict monitoring",
      "Venous thromboembolism (VTE) risk: age-related risk (>50 years) + family history of VTE/PE → careful consideration",
      "Vision side effects: scintillating scotoma or retinal deposits rare, dose-dependent – immediate ophthalmologist consult on visual disturbance"
    ],
    "avoid": [
      "Concurrent pregnancy or lactation (Pregnancy Category D)",
      "History of malignant endometrial carcinoma (Nolvadex partial agonist on endometrium → 2-3x relative risk elevation)",
      "Active or recent deep-vein thrombosis / pulmonary embolism",
      "High-dose Nolvadex (>80 mg/day) – used in extreme rare indications, FORBIDDEN in AAS-PCT"
    ]
  },
  "interactions": [
    "SERM stack (Clomid + Nolva): classic dual-mechanism PCT, dose-reduce both",
    "AI co-administration (Anastrozol/Letrozol/Exemestane): NOT recommended together with Nolvadex in PCT – antagonist mechanism overlap, E2-crash risk",
    "HCG bridge: HCG → testicular Test restart first, Nolvadex after at the HPTA top – effective sequential protocol",
    "SSRI (paroxetine/fluoxetine): CYP2D6 inhibition → Nolvadex effect drops; switch to venlafaxine/citalopram",
    "Warfarin/anticoagulants: INR rise, dose reduction required, INR monitoring weekly",
    "Alcohol: hepatic stress increases, moderate consumption recommended"
  ],
  "studies": [
    {
      "title": "Tamoxifen for prevention of breast cancer: report of the National Surgical Adjuvant Breast and Bowel Project P-1 Study",
      "authors": "Fisher B, Costantino JP, Wickerham DL, et al.",
      "journal": "J Natl Cancer Inst. 1998;90(18):1371-88.",
      "pmid": "9747868"
    },
    {
      "title": "50th anniversary of the first clinical trial with ICI 46,474 (tamoxifen): then what happened?",
      "authors": "Jordan VC",
      "journal": "Endocr Relat Cancer",
      "pmid": "33151906"
    },
    {
      "title": "Anabolic steroid-induced hypogonadism: diagnosis and treatment.",
      "authors": "Rahnema CD, Lipshultz LI, Crosnoe LE, Kovac JR, Kim ED",
      "journal": "Fertil Steril",
      "pmid": "24636400"
    },
    {
      "title": "Enclomiphene citrate: A treatment that maintains fertility in men with secondary hypogonadism.",
      "authors": "Earl JA, Kim ED",
      "journal": "Expert Rev Endocrinol Metab",
      "pmid": "31063005"
    },
    {
      "title": "CYP2D6 genotype, antidepressant use, and tamoxifen metabolism during adjuvant breast cancer treatment.",
      "authors": "Jin Y, Desta Z, Stearns V, Ward B, Ho H, Lee KH, Skaar T, Storniolo AM, Li L, Araba A, Blanchard R, Nguyen A, Ullmer L, Hayden J, Lemler S, Weinshilboum RM, Rae JM, Hayes DF, Flockhart DA",
      "journal": "J Natl Cancer Inst",
      "pmid": "15632378"
    }
  ],
  "faq": [
    {
      "q": "How long after cycle should Nolvadex-PCT be started?",
      "a": "Ester-based timing: short-ester cycles (Test-Prop, Tren-Ace, Mast-Prop) last pin + 3-5 days; medium-ester (Test-Enan, Tren-Enan) + 7-10 days; long-ester (Test-Cyp, Deca, Eq) + 14-21 days. The goal: by PCT start, the exogenous androgen from ester-decay should fall below baseline, leaving HPTA feedback free. Too-early start → SERM effect lost; too-late start → unnecessary HPTA restart delay."
    },
    {
      "q": "Nolvadex vs Clomid – which is better for PCT?",
      "a": "Both are SERMs with similar mechanism (pituitary ER blockade), but different profiles. Nolvadex: cleaner mood profile, ER-selective, weaker fertility stimulus, bone-protective. Clomid: stronger LH stimulus, better fertility-emphasis (greater FSH effect), but zuclomiphene accumulation makes mood disturbance more common (emotional, depressive). Modern AAS-PCT golden-standard: Nolvadex first, Clomid as backup or stack (Karavolos 2015). Fertility restoration goal: Clomid preferable; clean HPTA restart goal: Nolvadex."
    },
    {
      "q": "Does it affect IGF-1?",
      "a": "Yes – moderate IGF-1 decrease documented (~10-15% from baseline). Mechanism: ER-α is a partial agonist on hepatocytes, but tamoxifen blocks the full IGF-1-stimulating pathway. Clinically transient – returns to baseline within 4-6 weeks after PCT end. If post-PCT IGF-1 deficit symptoms appear (fatigue, slower recovery), HGH bridge can be considered (off-label, expensive)."
    },
    {
      "q": "Are visual disturbances (scintillating scotoma) serious?",
      "a": "Rare side effect, dose-dependent. Chronic Nolvadex use >40 mg/day (6+ months) shows 1-3% incidence (FDA Nolvadex SmPC). At PCT dose (20-40 mg × 4-6 weeks) clinically negligible. Symptoms: scintillating scotoma (flickering zigzag pattern in visual field), retinal crystal deposit in chronic cases. Reversible after cessation. On symptoms – ophthalmologist consult, fundus exam indicated."
    },
    {
      "q": "Acne flare or mood swings during PCT – what to do?",
      "a": "Both are common transitions – NOT a direct Nolvadex side effect, but a natural consequence of HPTA restart. E2 rebound (testicular E2 synthesis suddenly resumes after LH disinhibition) → acne flare in weeks 2-4. Mood instability: psychological fluctuation during testosterone-restart is normal. Mitigations: omega-3 + zinc + low-E2-rebound diet; if severe, taper protocol (40 mg → 30 mg → 20 mg → 10 mg, 1 week per dose) can dampen fluctuations."
    }
  ],
  "related": [
    "clomid",
    "enclomiphene",
    "raloxifene",
    "hcg-perf",
    "anastrozol"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 20,
      "medium": 30,
      "high": 40
    },
    "unit": "mg/day (oral, split 1-2x)",
    "note": "Standard AAS-PCT: 40 mg/day × 1-2 weeks, then 20 mg/day × 2-4 weeks (total 4-6 weeks). High-tier cycle (Test+Tren+Anadrol stack) after taper protocol: 40/30/20/10 mg, 1 week per dose. Bloodwork pre-PCT, PCT-end +2 weeks, +6 weeks confirm-recovery."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-PCT (last AAS dose + ester clearance time)",
      "timing": "Short-ester cycle + 3-5 days; long-ester + 14-21 days",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS sensitive-assay), LH, FSH, SHBG, Prolactin, lipid panel (TC/LDL/HDL/TG), ALT, AST, GGT, hemogram.",
      "purpose": "Baseline for HPTA restart trajectory tracking. LH/FSH low (suppressed), Test low (post-suppression), E2 high or low (depends on cycle AI use) – recovery starts from here."
    },
    "midCycle": {
      "label": "Mid-PCT (Nolvadex week 2)",
      "timing": "Nolvadex start +14 days",
      "markers": "LH, FSH (recovery progress confirm), Total Test (early-restart confirm), E2 (rebound monitor – gyno-flare watch), Prolactin (post-Tren cycles), ALT/AST.",
      "purpose": "Intermediate measurement: LH/FSH rise measurable (typically +50-200% from baseline), Test rise begins (+30-100% post-suppression), E2 rebound monitor. If E2 >50 pg/mL with gyno symptoms → consider low-dose Anastrozol addition (NOT standard)."
    },
    "postCycle": {
      "label": "PCT end + recovery confirmation",
      "timing": "Nolvadex last dose +2 weeks and +6 weeks (two measurements)",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, lipid panel, ALT/AST, hemogram, blood pressure.",
      "purpose": "Confirm: Test ≥ 80% of pre-cycle baseline, LH/FSH ≥ lower end of age-specific range. Lipid panel improvement (HDL rise is part of Nolvadex-mediated bone-protective effect). If LH/FSH < 50% baseline → specialist consult (persistent secondary hypogonadism)."
    },
    "cruise": {
      "label": "Long-term use – NOT an AAS-PCT context",
      "timing": "Female breast-cancer prevention: 5-10 years chronic; AAS-PCT: max 4-6 weeks",
      "markers": "Cruise N/A in AAS-PCT – Nolvadex is used only in PCT, not during cruise.",
      "purpose": "Chronic SERM-use risks (endometrial cancer, VTE, vision) negligible within the AAS-PCT 4-6 week time frame."
    }
  },
  "anecdote": "Nolvadex (Tamoxifen) and Raloxifene are anecdotally the two most reliable compounds for gyno prevention, because tamoxifen directly blocks estrogen at the receptor level selectively in breast tissue – a highly targeted mechanism. Unlike Arimidex, it is not an aromatase inhibitor, so the benefits are receptor-targeted rather than system-wide. It is commonly used in PCT protocols because it stimulates LH/FSH more directly, which can be useful for HPTA recovery. Reported side effects include mild mood swings, rare vision disturbances, and long-term blood-clot risk – though most clotting case reports come from postmenopausal women using it for breast cancer prevention, so applicability to AAS users is less clear. Overall, community accounts regard Nolvadex as a solid tool for blocking estrogen in breast tissue and a strong gyno-prevention option. Administered orally, with dosing typically structured in multi-week cycles, especially during PCT."
}
