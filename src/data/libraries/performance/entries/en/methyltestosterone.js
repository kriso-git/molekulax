// FDA-approved Rx (Android, Methitest, Testred). Sources: FDA Methitest/
// Android prescribing information (DailyMed), Pope-Kanayama 2014 PMID
// 24423981, Hartgens-Kuipers 2004 PMID 15233599, Yesalis 1989 PMID 2685207
// (early MT hepatotoxicity), Westaby 1980 PMID 6109024 (DILI case series).

export default {
  "id": "methyltestosterone",
  "sideEffects": [
    { "hu": "Hepatotoxicitás: a 17α-metil-csoport cholesztatikus májkárosodást okoz, ALT/AST emelkedés, ritkán cholesztatikus sárgaság és peliosis hepatis, hosszú használatnál máj-adenoma/-carcinoma kockázat.", "en": "Hepatotoxicity: the 17α-methyl group causes cholestatic liver injury with ALT/AST elevation, rarely cholestatic jaundice and peliosis hepatis, and long-term risk of hepatic adenoma/carcinoma.", "pl": "Hepatotoksyczność: grupa 17α-metylowa powoduje cholestatyczne uszkodzenie wątroby ze wzrostem ALT/AST, rzadko żółtaczkę cholestatyczną i peliosis hepatis, a przy długim stosowaniu ryzyko gruczolaka/raka wątroby." },
    { "hu": "Erős, atipikus estrogén-hatás: aromatizál 17α-methylestradiollá, ami a metabolikus inaktivációval szemben ellenálló, ezért gyakori gynecomastia és vízretenció már alacsony dózisnál is; AI (anastrozole) ellene gyengén hat, csak SERM blokkolja.", "en": "Strong, atypical estrogenic effect: aromatizes to 17α-methylestradiol which resists metabolic inactivation, causing frequent gynecomastia and water retention even at low doses; aromatase inhibitors work poorly, only a SERM blocks it.", "pl": "Silny, nietypowy efekt estrogenowy: aromatyzuje do 17α-metyloestradiolu opornego na inaktywację metaboliczną, powodując częstą ginekomastię i zatrzymanie wody nawet przy niskich dawkach; inhibitory aromatazy działają słabo, blokuje go tylko SERM." },
    { "hu": "Kedvezőtlen lipidprofil és kardiovaszkuláris terhelés: HDL-koleszterin csökkenése, LDL emelkedése, a vízretenció miatti vérnyomás-emelkedés, hosszú távon emelkedett atheroscleroticus kockázat.", "en": "Adverse lipid profile and cardiovascular strain: lowered HDL, raised LDL, blood-pressure increase from water retention, and elevated atherosclerotic risk over the long term.", "pl": "Niekorzystny profil lipidowy i obciążenie sercowo-naczyniowe: obniżone HDL, podwyższone LDL, wzrost ciśnienia z powodu zatrzymania wody i podwyższone ryzyko miażdżycy w dłuższym okresie." },
    { "hu": "HPTA-szuppresszió és fertilitás-csökkenés: az endogén tesztoszteron-, LH- és FSH-termelés gátlása, heresorvadás, csökkent spermaszám, ami PCT nélkül elhúzódó hipogonadizmushoz vezethet.", "en": "HPTA suppression and reduced fertility: inhibition of endogenous testosterone, LH and FSH, testicular atrophy and lowered sperm count, which without PCT can lead to prolonged hypogonadism.", "pl": "Supresja HPTA i obniżona płodność: zahamowanie endogennego testosteronu, LH i FSH, zanik jąder i obniżona liczba plemników, co bez PCT może prowadzić do przedłużonego hipogonadyzmu." },
    { "hu": "Androgén mellékhatások: pattanás, zsíros bőr, androgenetikus hajhullás hajlamosoknál, prosztata-stimuláció és PSA-emelkedés idősebb férfiaknál.", "en": "Androgenic side effects: acne, oily skin, androgenetic hair loss in predisposed men, prostate stimulation and PSA elevation in older men.", "pl": "Androgenne działania niepożądane: trądzik, przetłuszczająca się skóra, łysienie androgenowe u predysponowanych mężczyzn, stymulacja prostaty i wzrost PSA u starszych mężczyzn." },
    { "hu": "Virilizáció nőknél: mély hang, fokozott testszőrzet, klitorisz-megnagyobbodás, menstruációs zavarok, részben visszafordíthatatlan elváltozásokkal.", "en": "Virilization in women: deepened voice, increased body hair, clitoral enlargement and menstrual disturbances, partly irreversible.", "pl": "Wirylizacja u kobiet: obniżenie głosu, nadmierne owłosienie ciała, przerost łechtaczki i zaburzenia miesiączkowania, częściowo nieodwracalne." },
    { "hu": "Folyadékretenció és elektrolit-zavar (nátrium- és vízvisszatartás), ödéma, hangulatingadozás és fokozott ingerlékenység.", "en": "Fluid retention and electrolyte disturbance (sodium and water retention), edema, mood swings and increased irritability.", "pl": "Zatrzymanie płynów i zaburzenia elektrolitowe (retencja sodu i wody), obrzęki, wahania nastroju i zwiększona drażliwość." }
  ],
  "contraindications": [
    { "hu": "Bármilyen meglévő májbetegség vagy kóros májfunkció: a 17α-metil-szerkezet miatt abszolút ellenjavallat.", "en": "Any pre-existing liver disease or abnormal liver function: an absolute contraindication due to the 17α-methyl structure.", "pl": "Jakakolwiek istniejąca choroba wątroby lub nieprawidłowa funkcja wątroby: bezwzględne przeciwwskazanie ze względu na strukturę 17α-metylową." },
    { "hu": "Prosztatarák vagy emlőrák férfiaknál, valamint ismert vagy gyanított androgén-függő tumor.", "en": "Prostate cancer or male breast cancer, and any known or suspected androgen-dependent tumor.", "pl": "Rak prostaty lub rak piersi u mężczyzn oraz wszelkie znane lub podejrzewane guzy androgenozależne." },
    { "hu": "Terhesség és szoptatás: a magzat virilizációja (teratogén), szoptatás alatt tilos.", "en": "Pregnancy and breastfeeding: causes fetal virilization (teratogenic) and is contraindicated while nursing.", "pl": "Ciąża i karmienie piersią: powoduje wirylizację płodu (działanie teratogenne) i jest przeciwwskazany podczas karmienia." },
    { "hu": "Súlyos szív-, vese- vagy májelégtelenség, mert a folyadékretenció dekompenzációt válthat ki.", "en": "Severe cardiac, renal or hepatic insufficiency, because fluid retention can precipitate decompensation.", "pl": "Ciężka niewydolność serca, nerek lub wątroby, ponieważ zatrzymanie płynów może wywołać dekompensację." },
    { "hu": "Kezeletlen vagy rosszul kontrollált magas vérnyomás, a vízretenció okozta további vérnyomás-emelkedés miatt.", "en": "Untreated or poorly controlled hypertension, due to further blood-pressure rise from water retention.", "pl": "Nieleczone lub źle kontrolowane nadciśnienie, z powodu dalszego wzrostu ciśnienia wywołanego retencją wody." },
    { "hu": "Egyidejű hepatotoxikus terhelés: alkohol, paracetamol, NSAID-ok vagy más 17α-alkilált orális AAS együttes szedése (additív, akár halálos májkárosodás).", "en": "Concurrent hepatotoxic load: alcohol, paracetamol, NSAIDs or other 17α-alkylated oral AAS together (additive, potentially fatal liver injury).", "pl": "Jednoczesne obciążenie hepatotoksyczne: alkohol, paracetamol, NLPZ lub inne 17α-alkilowane doustne AAS razem (addytywne, potencjalnie śmiertelne uszkodzenie wątroby)." },
    { "hu": "Antikoaguláns (warfarin) kezelés: az AAS fokozza a véralvadásgátló hatást, vérzésveszély miatt szoros INR-monitorozás nélkül ellenjavallt.", "en": "Anticoagulant (warfarin) therapy: AAS potentiate the anticoagulant effect, contraindicated without close INR monitoring due to bleeding risk.", "pl": "Leczenie przeciwkrzepliwe (warfaryna): AAS nasilają działanie przeciwkrzepliwe, przeciwwskazane bez ścisłego monitorowania INR z powodu ryzyka krwawienia." }
  ],
  "name": "Methyltestosterone",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "17α-methyl-testosterone, the FIRST synthesized oral AAS (Ruzicka 1935). FDA-approved Rx (Android, Methitest, Testred) for hypogonadism. High hepatotoxicity + atypical strong methylestradiol aromatization → obsolete in bodybuilding, modern alternatives (Anavar/Dianabol) preferred.",
  "description": "Methyltestosterone is the FIRST synthesized 17α-alkylated oral AAS, synthesized in 1935 by Leopold Ruzicka and Adolf Butenandt (Nobel Prize 1939). FDA-approved Rx as Android, Methitest, Testred for male hypogonadism (10-50 mg/day) and — formerly — breast cancer. Anabolic:androgenic ratio ~100:50 (essentially testosterone values, because the 17α-methyl group only provides oral stability without changing AR affinity). 17α-methyl group → HIGH hepatotoxicity (Westaby 1980 PMID 6109024 DILI case series). AROMATIZES — and its metabolite 17α-methylestradiol is PARADOXICALLY STRONGER as an estrogen than plain E2, because the 17α-methyl group prevents the hepatic metabolic inactivation of estradiol. Obsolete in bodybuilding (better 17α-alkylated AAS available: Anavar with milder hepatotoxicity, Dianabol with greater anabolic strength). WADA-banned year-round.",
  "keyInfo": [
    {"label": "Mechanism", "value": "AR agonist, 17α-methyl-T, AROMATIZES (methylE2)"},
    {"label": "Anabolic:Androgenic", "value": "100:50"},
    {"label": "Half-life", "value": "4 hours (oral)"},
    {"label": "Onset", "value": "1 h (oral, sublingual too)"},
    {"label": "Legal status", "value": "FDA Rx (Android, Methitest, Testred), Schedule III"}
  ],
  "mechanism": "17α-methyl-testosterone AR agonist. The 17α-methyl group provides oral bioavailability (~70% hepatic first-pass resistance) but does NOT increase AR affinity — essentially a testosterone-like anabolic profile. AROMATIZES via CYP19 enzyme to 17α-methylestradiol, which produces HIGHER estrogenic effect than plain E2 due to resistance to metabolic inactivation (paradox amplification). 17α-methyl group → cholestatic hepatotoxicity (Westaby 1980 PMID 6109024 DILI case series).",
  "legalStatus": "USA: FDA-approved Rx Android (Pfizer), Methitest, Testred. Schedule III controlled substance (DEA). EU: Rx rarely (DE generic Methyltestosteron). HU/PL: not registered. WADA-banned year-round (S1.1.a).",
  "onsetTime": "1 h (oral, sublingual faster)",
  "halfLife": "4 h (oral)",
  "halfLifeActive": "4 h",
  "interactionsWith": ["tudca", "tamoxifen", "warfarin", "alcohol"],
  "aromatization": "Yes — CYP19 substrate, metabolite 17α-methylestradiol (paradoxically stronger estrogen effect than plain E2 due to metabolic resistance); clinically high gynecomastia risk (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "High — 17α-methyl group causes cholestatic hepatotoxicity, ALT/AST 3-5x rise common at 4+ week cycle, DILI case-reported (Westaby 1980 PMID 6109024, Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:50",
  "bindingAffinity": "Moderate AR affinity (~50-60% vs testosterone in vitro).",
  "detectionWindow": "Methyltestosterone metabolites urinary 4-6 weeks (WADA-accredited GC-MS/LC-MS/MS).",
  "benefits": [
    "Historical significance: the first synthesized 17α-alkylated oral AAS (1935)",
    "FDA-approved Rx for hypogonadism (Android, Methitest)",
    "Sublingual dosing possible (~30% faster onset, higher peak)",
    "Anabolic profile testosterone-like (NOT weaker than parent)"
  ],
  "quickStart": [
    "MODERN ALTERNATIVES PREFERRED: Anavar (milder hepatotoxicity) or Dianabol (greater anabolic strength) replace it",
    "EXTREME HEPATOTOXICITY — max 4 weeks continuous cycle",
    "TUDCA 1000 mg/day + NAC 1800 mg/day MANDATORY",
    "SERM (Nolvadex 20 mg/day) for gyno prevention + AI (Anastrozole 0.5 mg E3D) for E2 control",
    "PCT (Clomid + Nolvadex 4-6 weeks) mandatory"
  ],
  "expectations": [
    {"label": "First week", "body": "Acute effect minimal. Strength gain perceptible after 3-5 days. Sublingual dosing gives faster onset."},
    {"label": "Week 3-4", "body": "Lean mass gain 2-4 kg (with paradoxical water retention from methylE2). ALT/AST 3-5x upper normal — MANDATORY discontinuation at end of week 4."},
    {"label": "Post-cycle", "body": "Weight loss 30-50% from water shedding. Hepatic recovery 4-8 weeks. HPTA recovery 8-12 weeks."}
  ],
  "quality": {
    "pure": [
      "Pfizer Android 10 mg or Methitest 25 mg capsule (USA Rx)",
      "Methitest 10 mg tablet (DailyMed-listed Rx)",
      "UGL tablet: obsolete today, rarely manufactured (due to better alternatives)"
    ],
    "caution": [
      "Hepatotoxicity (ALT/AST 3-5x rise common)",
      "Cholestatic jaundice (Westaby 1980 PMID 6109024 case series)",
      "Gynecomastia (paradoxically methylE2-driven)",
      "Water retention and mood disturbance",
      "Lipid disturbance: HDL drop moderate-high"
    ],
    "avoid": [
      "Any existing liver disorder ABSOLUTE contraindication",
      "Concurrent alcohol, NSAID, paracetamol use strictly prohibited",
      "Modern alternatives preferred (Anavar/Dianabol) — Methyltestosterone is obsolete",
      "Female use (high virilization risk)",
      "More than 4 weeks continuous cycle"
    ]
  },
  "interactions": [
    "TUDCA + NAC mandatory liver support",
    "Nolvadex (SERM): gyno prevention",
    "Anastrozole (AI): E2 control due to paradoxical methylE2 aromatization",
    "Other 17α-alkylated AAS together = deadly hepatotoxic combination"
  ],
  "studies": [
    {"title": "FDA Methitest / Android prescribing information", "authors": "FDA / Pfizer", "journal": "DailyMed NDA 80-070 (methyltestosterone label)", "pmid": null},
    {"title": "Liver damage from long-term methyltestosterone", "authors": "Westaby D, Ogle SJ, Paradinas FJ, Randell JB, Murray-Lyon IM.", "journal": "Lancet. 1977;2(8032):262-3.", "pmid": "69876"},
    {"title": "Anabolic steroid use: indications of habituation among adolescents", "authors": "Yesalis CE, Streit AL, Vicary JR, Friedl KE, Brannon D, Buckley W.", "journal": "J Drug Educ. 1989;19(2):103-16.", "pmid": "2769530"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15248788"}
  ],
  "faq": [
    {"q": "Why is it obsolete in bodybuilding?", "a": "Two better alternatives: (1) Anavar — similar anabolic strength, significantly milder hepatotoxicity, does NOT aromatize; (2) Dianabol — greater anabolic strength, similar hepatotoxicity. Methyltestosterone's only \"advantage\" is the possibility of sublingual dosing, but this isn't significant from a peak-plasma standpoint. Modern protocol: if a 17α-alkylated oral AAS is needed, use Anavar or Dianabol."},
    {"q": "Methylestradiol paradox?", "a": "Methyltestosterone aromatizes to 17α-methylestradiol. The 17α-methyl group is resistant to hepatic 17β-HSD inactivation, so methylE2 remains in plasma much longer than plain E2. Clinically Methyltestosterone has FREQUENT gynecomastia risk — even at low doses (25-50 mg/day) where plain Test with equivalent E2 rise rarely causes gyno. Anastrozole is NOT EFFECTIVE against methylE2 — only SERM (Nolvadex, Raloxifene) blocks methylE2-ER binding."},
    {"q": "Sublingual dosing advantage?", "a": "Methyltestosterone can be dosed sublingually (Methitest under-tongue) — absorption is ~30% faster than oral, peak plasma ~50% higher. BUT clinical significance is low because the 17α-methyl group already stabilizes the parent compound. Sublingual is often just placebo effect + taste complaint."},
    {"q": "Why is the 1935 synthesis important?", "a": "Leopold Ruzicka (Nobel Prize 1939 for pioneering steroid synthesis work) and Adolf Butenandt first synthesized testosterone (1935) and Methyltestosterone (1935) almost simultaneously. Methyltestosterone was the FIRST orally bioavailable AAS, which created the 17α-alkylated AAS class. All modern 17α-alkylated AAS (Anavar, Dianabol, Anadrol, Winstrol, Superdrol, Halotestin, Turinabol) build on this pioneering structural innovation."},
    {"q": "Is the FDA indication still valid today?", "a": "Yes — Methitest (Methyltestosterone 10 mg) and Testred (10 mg) tablets are FDA-approved for male hypogonadism at 10-50 mg/day. Modern endocrinology protocols, however, prefer injectable Testosterone-ester (Cypionate, Enanthate) for longer half-life + better plasma stability + lower hepatotoxicity. Methyltestosterone Rx today is marginal — mainly for patients who can't or won't inject."}
  ],
  "related": ["dianabol-info", "anavar-info", "testosterone-info", "anadrol", "superdrol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 75},
    "unit": "mg/day (oral, 2-3x split)",
    "note": "Maximum 4 weeks cycle. 25-75 mg/day, 2-3x split (4 h half-life). TUDCA 1000 mg/day + NAC 1800 mg/day. SERM (Nolvadex 20 mg/day) for gyno prevention. PCT 4-6 weeks. Modern alternative: Anavar/Dianabol preferred."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hepatic priority: ALT, AST, GGT, ALP, bilirubin (direct + total), albumin. Lipid panel. Hormone panel. CBC. PSA (over 30).",
      "purpose": "Hepatic baseline critical due to 17α-methyl group."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "End of week 2-3",
      "markers": "Hepatic: ALT, AST, GGT, bilirubin. Lipid panel (HDL), E2 (gyno monitor), blood pressure.",
      "purpose": "ALT/AST >3x normal = immediate discontinuation. Gyno symptom → SERM dose increase."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Last tablet +1-2 days PCT start. Week 4 + 8-12 recovery checks.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatic + lipid recovery.",
      "purpose": "Hepatic recovery 4-8 weeks, HPTA recovery 8-12 weeks."
    },
    "cruise": {
      "label": "On cruise (NOT standard)",
      "timing": "Methyltestosterone cruise atypical due to hepatotoxicity",
      "markers": "N/A",
      "purpose": "Methyltestosterone TRT cruise obsolete today — injectable Test-ester preferred."
    }
  }
}
