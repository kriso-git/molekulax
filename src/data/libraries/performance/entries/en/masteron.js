// Phase C multi-variant entry (Propionate + Enanthate). Lab Terminal hard-fail
// sources: Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15248788,
// Schänzer 1996 PMID 8674183 (detection), Mottram 2008 doping handbook,
// Eli Lilly Drolban DESI review (FDA 1979, discontinued early 1990s).

export default {
  "id": "masteron",
  "sideEffects": [
    { "hu": "Androgenetikus hajhullás gyorsítása: a drostanolone strukturálisan 2α-metil-DHT, amely közvetlenül aktiválja a hajtüsző androgénreceptorát, genetikai prediszpozíció esetén irreverzibilis miniaturizációt indít (finaszterid NEM véd, mert a molekula már 5α-redukált).", "en": "Acceleration of androgenetic hair loss: drostanolone is structurally 2α-methyl-DHT and directly activates the hair-follicle androgen receptor, triggering irreversible miniaturization in genetically predisposed users (finasteride does NOT protect, as the molecule is already 5α-reduced).", "pl": "Przyspieszenie łysienia androgenowego: drostanolon to strukturalnie 2α-metylo-DHT, który bezpośrednio aktywuje receptor androgenowy mieszka włosowego, wywołując nieodwracalną miniaturyzację u osób predysponowanych genetycznie (finasteryd NIE chroni, ponieważ cząsteczka jest już 5α-zredukowana)." },
    { "hu": "Virilizáció nőknél: hangmélyülés, hirsutizmus, klitorisz-megnagyobbodás, menstruációs zavar – egyetlen ciklus után is IRREVERZIBILIS lehet, ezért nőknek szigorúan ellenjavallt.", "en": "Virilization in women: voice deepening, hirsutism, clitoral enlargement, menstrual disruption – may be IRREVERSIBLE even after a single cycle, hence strictly contraindicated in women.", "pl": "Wirylizacja u kobiet: obniżenie głosu, hirsutyzm, powiększenie łechtaczki, zaburzenia miesiączkowania – może być NIEODWRACALNA nawet po jednym cyklu, dlatego ściśle przeciwwskazana u kobiet." },
    { "hu": "Kedvezőtlen lipidprofil: HDL-koleszterin csökkenése (jellemzően 20-30%) és LDL emelkedése, ami tartós használat mellett fokozza az ateroszklerózis és kardiovaszkuláris esemény kockázatát.", "en": "Adverse lipid profile: drop in HDL cholesterol (typically 20-30%) and rise in LDL, increasing atherosclerosis and cardiovascular-event risk with prolonged use.", "pl": "Niekorzystny profil lipidowy: spadek cholesterolu HDL (zwykle 20-30%) i wzrost LDL, co przy długotrwałym stosowaniu zwiększa ryzyko miażdżycy i zdarzeń sercowo-naczyniowych." },
    { "hu": "HPTA-szuppresszió: az endogén tesztoszteron-termelés leállása, csökkent LH/FSH, here-atrófia és csökkent termékenység; tartós AAS-expozíció után elhúzódó szekunder hipogonadizmus alakulhat ki, PCT szükséges.", "en": "HPTA suppression: shutdown of endogenous testosterone production, reduced LH/FSH, testicular atrophy and impaired fertility; prolonged AAS exposure can cause persistent secondary hypogonadism, requiring PCT.", "pl": "Supresja HPTA: zahamowanie endogennej produkcji testosteronu, obniżone LH/FSH, atrofia jąder i upośledzona płodność; długotrwała ekspozycja na AAS może powodować przewlekły hipogonadyzm wtórny, wymagający PCT." },
    { "hu": "Prosztata-androgén stimuláció: DHT-analógként aktiválja a prosztata androgénreceptorait, ami prosztata-megnagyobbodást és vizelési tüneteket okozhat, illetve felgyorsíthatja egy meglévő androgénfüggő prosztatadaganat növekedését.", "en": "Prostate androgen stimulation: as a DHT analog it activates prostate androgen receptors, which can cause prostate enlargement and urinary symptoms, and may accelerate growth of a pre-existing androgen-dependent prostate tumor.", "pl": "Stymulacja androgenowa prostaty: jako analog DHT aktywuje receptory androgenowe prostaty, co może powodować powiększenie prostaty i objawy ze strony układu moczowego oraz przyspieszać wzrost istniejącego androgenozależnego guza prostaty." },
    { "hu": "Androgén bőrhatások és viselkedési tünetek: faggyútermelés-fokozódás, akne, valamint fokozott ingerlékenység/agresszió; krónikus AAS-használat pszichológiai függőséghez vezethet.", "en": "Androgenic skin effects and behavioral symptoms: increased sebum production, acne, plus heightened irritability/aggression; chronic AAS use can lead to psychological dependence.", "pl": "Androgenne działania skórne i objawy behawioralne: zwiększona produkcja sebum, trądzik oraz nasilona drażliwość/agresja; przewlekłe stosowanie AAS może prowadzić do uzależnienia psychicznego." },
    { "hu": "Injekciós helyi reakció (PIP): különösen a Propionate-variánsnál az alkohol-tartalmú olajos vehikulum gyakran fájdalmas, 24-48 órás duzzanatot, gyulladást okoz; nem steril technika tályogot/fertőzést eredményezhet.", "en": "Injection-site reaction (PIP): especially with the Propionate variant the alcohol-containing oil vehicle is often painful, causing 24-48 h swelling and inflammation; non-sterile technique can cause abscess/infection.", "pl": "Reakcja w miejscu wstrzyknięcia (PIP): szczególnie przy wariancie Propionianu olejowy wehikuł zawierający alkohol jest często bolesny, powodując 24-48 h obrzęk i stan zapalny; niesterylna technika może wywołać ropień/zakażenie." }
  ],
  "contraindications": [
    { "hu": "Női használat (különösen terhesség/szoptatás alatt): a virilizáció és a magzati maszkulinizáció kockázata miatt abszolút ellenjavallt.", "en": "Use in women (especially during pregnancy/breastfeeding): absolutely contraindicated due to the risk of virilization and fetal masculinization.", "pl": "Stosowanie u kobiet (zwłaszcza w ciąży/podczas karmienia): bezwzględnie przeciwwskazane z powodu ryzyka wirylizacji i maskulinizacji płodu." },
    { "hu": "Prosztatakarcinóma vagy emlőkarcinóma férfiaknál, valamint jelentős jóindulatú prosztata-megnagyobbodás (BPH) – az androgén stimuláció súlyosbíthatja a betegséget.", "en": "Prostate carcinoma or male breast carcinoma, and significant benign prostatic hyperplasia (BPH) – androgen stimulation can worsen the condition.", "pl": "Rak prostaty lub rak piersi u mężczyzn oraz znaczny łagodny rozrost prostaty (BPH) – stymulacja androgenowa może nasilić chorobę." },
    { "hu": "Androgenetikus alopecia családi anamnézise / DHT-érzékeny fejbőr: DHT-származékként gyorsítja a visszafordíthatatlan hajritkulást.", "en": "Family history of androgenetic alopecia / DHT-sensitive scalp: as a DHT derivative it accelerates irreversible hair thinning.", "pl": "Wywiad rodzinny łysienia androgenowego / skóra głowy wrażliwa na DHT: jako pochodna DHT przyspiesza nieodwracalne przerzedzenie włosów." },
    { "hu": "Fennálló kardiovaszkuláris betegség vagy magas rizikó (ateroszklerózis, kontrollálatlan magas vérnyomás, kedvezőtlen kiindulási lipidprofil – pl. LDL >130 mg/dL vagy HDL <40 mg/dL).", "en": "Existing cardiovascular disease or high risk (atherosclerosis, uncontrolled hypertension, adverse baseline lipids – e.g. LDL >130 mg/dL or HDL <40 mg/dL).", "pl": "Istniejąca choroba sercowo-naczyniowa lub wysokie ryzyko (miażdżyca, niekontrolowane nadciśnienie, niekorzystny wyjściowy profil lipidowy – np. LDL >130 mg/dL lub HDL <40 mg/dL)." },
    { "hu": "Aktív termékenységi szándék / kezelt férfi-infertilitás: az AAS elnyomja a spermatogenezist és a HPTA-tengelyt.", "en": "Active fertility plans / treated male infertility: AAS suppress spermatogenesis and the HPTA axis.", "pl": "Aktywne plany prokreacyjne / leczona niepłodność męska: AAS hamują spermatogenezę i oś HPTA." },
    { "hu": "Antikoaguláns kezelés (pl. warfarin): a Masteron fokozhatja az antikoaguláns hatást, szoros INR-monitorozás nélkül kontraindikált.", "en": "Anticoagulant therapy (e.g. warfarin): Masteron can potentiate the anticoagulant effect, contraindicated without close INR monitoring.", "pl": "Leczenie przeciwzakrzepowe (np. warfaryna): Masteron może nasilać działanie przeciwzakrzepowe, przeciwwskazany bez ścisłego monitorowania INR." },
    { "hu": "Serdülőkorúak / nem teljesen kifejlett csontváz: az androgének idő előtti epifízis-záródást és visszamaradt magasságnövekedést okozhatnak.", "en": "Adolescents / incompletely developed skeleton: androgens can cause premature epiphyseal closure and stunted height.", "pl": "Młodzież / niecałkowicie rozwinięty szkielet: androgeny mogą powodować przedwczesne zamknięcie nasad i zahamowanie wzrostu." }
  ],
  "name": "Masteron (Drostanolone)",
  "image": "/performance/oil-vial-yellow.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Drostanolone, 2α-methyl-DHT derivative injectable AAS. Originally FDA-approved (Drolban, Lilly 1959) for inoperable breast cancer in postmenopausal women; today underground market only. Classic \"hardening\" cutting steroid.",
  "description": "Masteron (Drostanolone) is a 2α-methyl-dihydrotestosterone derivative, jointly synthesized by Syntex and Eli Lilly in 1959 and FDA-approved in 1961 under the brand Drolban for palliative treatment of inoperable, postmenopausal breast cancer. Displaced by modern tamoxifen-based therapy; Lilly discontinued in 1993. Anabolic:androgenic ratio ~62:25 (low anabolic, moderate androgenic). The 2α-methyl group blocks both 5α-reductase and aromatase activity — does NOT convert to estrogen and exhibits unique mild aromatase-inhibitor effect (Bhasin 2018 reference AAS classification). NOT 17α-alkylated, so hepatotoxicity is minimal. In the bodybuilding context, the classic cutting steroid used to achieve \"hardness\" and vascular esthetics, often in the last 6-8 weeks of contest prep. WADA-banned year-round.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "AR agonist, 2α-methyl-DHT, NOT aromatized"
    },
    {
      "label": "Anabolic:Androgenic",
      "value": "62:25"
    },
    {
      "label": "Half-life",
      "value": "2-3 d (Prop), 7-10 d (Enan)"
    },
    {
      "label": "Onset",
      "value": "24-72 h (IM ester)"
    },
    {
      "label": "Legal status",
      "value": "Discontinued Rx, UGL only. WADA-banned."
    }
  ],
  "mechanism": "2α-methyl-dihydrotestosterone (5α-reduced) AR agonist. The 2α-methylation provides three metabolic blocks: (1) inhibits aromatase (CYP19), so the molecule does NOT convert to estradiol and clinically shows mild aromatase-inhibitor effect; (2) resists 17β-HSD oxidative breakdown (longer plasma half-life); (3) does not undergo direct 5α-reduction (already reduced). The 17β-OH-esterified form (Propionate or Enanthate) after IM injection slowly hydrolyzes in depot fat to free drostanolone, which has high SHBG affinity and reduces the SHBG-bound testosterone fraction → indirect free-T elevation.",
  "legalStatus": "USA: Schedule III controlled substance (DEA, discontinued Rx — Drolban not manufactured after 1993). EU: controlled anabolic steroid, illegal without prescription. HU/PL: possession and sale a criminal offense. WADA-banned year-round in competitive sport (S1.1.a anabolic androgenic steroids).",
  "onsetTime": "24-72 h (IM, ester-hydrolysis-dependent)",
  "halfLife": "2-3 d (Propionate), 7-10 d (Enanthate)",
  "halfLifeActive": "~1-2 d free drostanolone after ester hydrolysis",
  "interactionsWith": [
    "anastrozole",
    "finasteride",
    "testosterone",
    "warfarin"
  ],
  "aromatization": "No — 2α-methyl steric hindrance means NOT a CYP19 substrate; clinically exhibits mild aromatase-inhibitor effect (Pope-Kanayama 2014 PMID 24423981 designer AAS review)",
  "hepatotoxicity": "Low — parent steroid, NOT 17α-alkylated; injectable ester form bypasses hepatic first-pass. Moderate lipid disturbance (HDL drop, LDL rise) remains the main cardiovascular risk (Hartgens-Kuipers 2004 PMID 15248788)",
  "wadaStatus": "banned",
  "androgenicRatio": "62:25",
  "bindingAffinity": "Moderate AR affinity; high SHBG affinity (DHT structural analog) → outcompetes SHBG-bound testosterone, indirectly inducing free-T elevation.",
  "detectionWindow": "Drostanolone metabolites (2α-methyl-5α-androstan-3-one metabolite family) urinary 3 weeks (Prop) – 3 months (Enan). Schänzer 1996 (PMID 8674183) WADA-accredited GC-MS and LC-MS/MS.",
  "benefits": [
    "Vascular, hard \"esthetic\" look during contest prep (subjective bodybuilding experience)",
    "Indirect free-testosterone elevation via SHBG occupation (potentiates other AAS effects)",
    "Does NOT aromatize → no E2 side effects (gynecomastia, minimal water retention)",
    "Mild anti-aromatase effect → reduces adjunct-AI need during testosterone stacks",
    "Low hepatotoxicity (DHT structural analog, NOT 17α-alkylated)"
  ],
  "quickStart": [
    "Only for users with existing bodybuilding experience, NOT a first cycle",
    "Typically stacked with testosterone base (Test-Prop + Mast-Prop, Test-Enan + Mast-Enan for ester half-life matching)",
    "DHT structural analog → STRICT hair-loss risk: scalp-DHT conversion accelerates androgenic alopecia in genetic predisposition",
    "Baseline + 4-week + post-cycle lipid panel (HDL/LDL) MANDATORY",
    "PCT (Clomid + Nolvadex 4 weeks) timing depends on stack-partner AAS half-life"
  ],
  "expectations": [
    {
      "label": "First week",
      "body": "Acute effect minimal. Esthetic change not yet perceptible; ester hydrolysis takes 24-72 hours, plasma steady-state Prop 1 week, Enan 4-5 weeks."
    },
    {
      "label": "3-4 weeks",
      "body": "Steady-state Prop. Subjectively \"harder\" muscle tone, increased vascular venosity. SHBG drops (~30-50%), free-T rises alongside stack-partner AAS."
    },
    {
      "label": "6-8 weeks",
      "body": "Contest-prep \"peak\" — sub-cutaneous muscle contour maximally accentuated. Lipid panel HDL ~20-30% drop expected. Hair-loss-prone users may see accelerated miniaturization."
    }
  ],
  "quality": {
    "pure": [
      "Clear yellowish or pale-yellow oil (~#fef08a tone), sediment-free, 10ml vial",
      "UGL HPLC-tested source mandatory — Drostanolone Propionate and Enanthate have different PIP pain profile, counterfeiting (Test-Prop substitution) is common"
    ],
    "caution": [
      "Hair-loss acceleration in users with androgenic alopecia genetics (DHT structural analog)",
      "Lipid disturbance: HDL drop, LDL rise (moderate, NOT extreme)",
      "Injection site pain (Propionate especially, due to alcohol vehicle)",
      "Voice deepening and hirsutism in women (after 1 cycle may be IRREVERSIBLE — strictly contraindicated)"
    ],
    "avoid": [
      "Family history of androgenic alopecia (DHT-sensitive scalp)",
      "Prostate hypertrophy, prostate cancer (DHT analog → prostate AR activation)",
      "Female use (virilization risk extreme, esthetic benefit small due to low anabolic ratio)",
      "Cardiovascular risk (family history, high LDL, atherosclerosis) absolute contraindication",
      "Any \"first cycle\" — Masteron is always a stack-partner, never a standalone first AAS"
    ]
  },
  "interactions": [
    "Testosterone base (Prop+Prop or Enan+Enan match): standard stack, potentiates muscle protein synthesis",
    "Anastrozole (AI): NOT needed for Masteron-only cycle (mild self-AI); during Test-stack only if lab-confirmed high E2",
    "Finasteride: does NOT inhibit Masteron effect (already 5α-reduced), and does NOT protect against scalp-DHT — useless for hair-loss prevention",
    "Warfarin: anticoagulant effect may be potentiated, INR monitoring",
    "Combination with other AAS potentiates HPTA suppression, PCT becomes necessary"
  ],
  "studies": [
    {
      "title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement",
      "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.",
      "journal": "Endocr Rev. 2014;35(3):341-75.",
      "pmid": "24423981"
    },
    {
      "title": "Testosterone therapy in men with hypogonadism: an Endocrine Society clinical practice guideline",
      "authors": "Bhasin S, Brito JP, Cunningham GR et al.",
      "journal": "J Clin Endocrinol Metab. 2018;103(5):1715-1744.",
      "pmid": "29562364"
    },
    {
      "title": "Effects of androgenic-anabolic steroids in athletes",
      "authors": "Hartgens F, Kuipers H.",
      "journal": "Sports Med. 2004;34(8):513-554.",
      "pmid": "15248788"
    },
    {
      "title": "Metabolism of anabolic androgenic steroids",
      "authors": "Schänzer W.",
      "journal": "Clin Chem. 1996;42(7):1001-20.",
      "pmid": "8674183"
    },
    {
      "title": "Anabolic-androgenic steroid dependence: an emerging disorder",
      "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.",
      "journal": "Addiction. 2009;104(12):1966-78.",
      "pmid": "19922565"
    },
    {
      "title": "Long-term combined administration of dromostanolone propionate (Mastisol) and cyclophosphamide for advanced breast cancer",
      "authors": "Nomura Y, Hattori T, Abe Y.",
      "journal": "Gan no Rinsho. 1971;17(12):987-95.",
      "pmid": "5172404"
    }
  ],
  "faq": [
    {
      "q": "Why is it called a \"hardening\" steroid?",
      "a": "Masteron does NOT aromatize and reduces water retention via high SHBG affinity, so at low body fat percentage (<10-12%) the subcutaneous water layer shrinks to a minimum, producing a vascularly accentuated, \"hard\" appearance. At higher body fat (>15%) the esthetic effect is invisible — hence contest-prep specific."
    },
    {
      "q": "Is it true that it's also an aromatase inhibitor?",
      "a": "Partially. The 2α-methyl steric hindrance gives Masteron clinically mild aromatase-inhibitor effect — it can reduce adjunct Anastrozole need during Test stacks. BUT the effect is NOT strong (Letrozole/Anastrozole-grade complete block NOT expected), and at high Test doses (>500 mg/week) it alone is NOT enough for E2 control."
    },
    {
      "q": "Is hair-loss risk really this high?",
      "a": "Yes, if there is genetic predisposition for androgenic alopecia. Masteron is structurally a 2α-methyl-DHT, which bypasses scalp 5α-reductase and directly activates the hair follicle AR. Finasteride does NOT protect (Masteron is already reduced). The only protection: if you are genetically sensitive, DO NOT use DHT-derivative AAS."
    },
    {
      "q": "Why use it as an ester instead of free drostanolone?",
      "a": "Parent drostanolone is water-insoluble and clears rapidly (insoluble free steroid). The ester (Prop-propionate or Enan-enanthate) esterifies the 17β-OH group, making the molecule oil-soluble, depot-storable via IM injection, and endogenous esterases continuously hydrolyze free drostanolone, giving stable plasma levels."
    },
    {
      "q": "Long-term use dangers?",
      "a": "Chronic AAS use causes HPTA suppression (possibly prolonged secondary hypogonadism per Rasmussen-Christofferides 2016 PMID 27568523 cohort), cardiovascular risk (LDL rise, left-ventricular hypertrophy), psychological effects (Kanayama 2009 PMID 19922565 — AAS dependence). Masteron itself is not extremely hepatotoxic, BUT cumulative AAS exposure (Test+Mast+other stack) is significant."
    }
  ],
  "related": [
    "testosterone-info",
    "anavar-info",
    "winstrol-info",
    "trenbolone-info",
    "superdrol"
  ],
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "2-4 weeks before cycle start",
      "markers": "Hormone panel: Total T, Free T, E2 (ultrasensitive), LH, FSH, SHBG, Prolactin. Lipid panel (LDL/HDL/TG). Hepatic: ALT/AST/GGT/ALP. CBC + hematocrit. Kidney function (creatinine, eGFR). PSA (over 30).",
      "purpose": "Lipid baseline and SHBG baseline critical for Masteron's unique indirect mechanism (SHBG suppression). Any LDL >130 mg/dL or HDL <40 mg/dL is a relative contraindication."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Week 4-6, mid-cycle",
      "markers": "Lipid panel (HDL can drop drastically), E2 (if Test-stacked), SHBG (Masteron-driven drop expected), blood pressure log, hepatic panel (ALT/AST), hematocrit.",
      "purpose": "HDL <30 mg/dL is a cardiovascular alarm. SHBG drop (>50%) confirms Masteron activity. E2 (during Test-stack) if rising determines AI need — Masteron's mild self-AI is NOT enough at high Test doses."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "From last injection: Prop +3-5 days, Enan +14-21 days PCT start. PCT week 4 and 8-12 recovery checks.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG (recovery), lipid panel (HDL recovery), hepatic panel.",
      "purpose": "Verify HPTA recovery and SHBG recovery. If T does not return to baseline by 12 weeks, endocrinologist consultation. SHBG recovery typically within 4-6 weeks."
    },
    "cruise": {
      "label": "On cruise (Masteron-containing cruise NOT standard)",
      "timing": "Masteron-cruise atypical; if cruising, monitor every 6-8 weeks",
      "markers": "Lipid panel (HDL), SHBG, Total T, E2, blood pressure log, PSA (over 30).",
      "purpose": "Prolonged Masteron exposure accumulates lipid disturbance and prostate AR activation. On TRT-Test cruise Masteron is typically omitted — esthetic effect is only valuable during contest prep."
    }
  },
  "variants": [
    {
      "id": "prop",
      "routeId": "prop",
      "routeLabel": {
        "hu": "Drostanolone Propionate (Masteron-Prop, gyors észter)",
        "en": "Drostanolone Propionate (Masteron-Prop, fast ester)",
        "pl": "Drostanolon Propionian (Masteron-Prop, szybki ester)"
      },
      "routeNote": {
        "hu": "A klasszikus 'cutting' kozmetikai DHT-származék — szárazság, izom-keménység, enyhe AI-hatás. ~2-3 napos felezés ⇒ heti 3x EOD IM-injekció (Mon/Wed/Fri vagy E2D). NEM 17α-alkilált ⇒ alacsony hepatotoxicitás. PIP gyakran fájdalmas a propionát alkohol-tartalmú vehikulum miatt. Rövid detection window (~3 hét) ⇒ contest-prep preferált variánsa.",
        "en": "The classic 'cutting' cosmetic DHT-derivative — dryness, muscle hardness, mild AI effect. ~2-3 day half-life ⇒ 3× EOD IM injection weekly (Mon/Wed/Fri or E2D). NOT 17α-alkylated ⇒ low hepatotoxicity. PIP often painful due to propionate's alcohol-containing vehicle. Short detection window (~3 weeks) ⇒ preferred contest-prep variant.",
        "pl": "Klasyczna 'tnąca' kosmetyczna pochodna DHT — suchość, twardość mięśni, łagodne działanie AI. ~2-3-dniowy okres półtrwania ⇒ iniekcja IM 3× EOD tygodniowo (pon/śr/pt lub E2D). NIE 17α-alkilowany ⇒ niska hepatotoksyczność. PIP często bolesny z powodu wehikułu propionianu zawierającego alkohol. Krótkie okno detekcji (~3 tygodnie) ⇒ preferowany wariant contest-prep."
      },
      "image": "/performance/oil-vial-yellow.png",
      "halfLife": "2-3 d (Propionate ester; free drostanolone t½ ~1-2 d after hydrolysis)",
      "halfLifeActive": "1-2 d",
      "bioavailability": "~95-100% (IM injection bypasses first-pass; propionate ester fast hydrolysis ~2-3 days)",
      "onsetTime": {
        "hu": "24-48 óra (IM, propionát fast-acting észter)",
        "en": "24-48 h (IM, propionate fast-acting ester)",
        "pl": "24-48 h (IM, propionian szybko działający ester)"
      },
      "dosing": {
        "hu": "300-600 mg/hét IM, 3x EOD osztva (Mon/Wed/Fri). Tipikus cutting dózis 400 mg/hét. Max 8 hét ciklus. Test-Prop base + opcionális Tren-Ace stack. PCT 4 hét utolsó injekció +3-5 nap.",
        "en": "300-600 mg/week IM, split 3× EOD (Mon/Wed/Fri). Typical cutting dose 400 mg/week. Max 8 week cycle. Test-Prop base + optional Tren-Ace stack. PCT 4 weeks last injection +3-5 days.",
        "pl": "300-600 mg/tydzień IM, podzielone 3× EOD (pon/śr/pt). Typowa dawka cięcia 400 mg/tydzień. Maks 8 tygodni cyklu. Baza Test-Prop + opcjonalny stack Tren-Ace. PCT 4 tygodnie od ostatniej iniekcji +3-5 dni."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 400,
          "high": 600
        },
        "unit": "mg/week",
        "note": {
          "hu": "300-600 mg/hét, 3x EOD osztva IM (2-3 nap felezés). Max 8 hét. TUDCA NEM kötelező (alacsony hepatotox), DE lipid + vérnyomás monitor. PCT utolsó injekció +3-5 nap.",
          "en": "300-600 mg/week, 3× EOD split IM (2-3 day half-life). Max 8 weeks. TUDCA not required (low hepatotox), BUT lipid + BP monitor essential. PCT starts last injection +3-5 days.",
          "pl": "300-600 mg/tydzień, 3× EOD podzielone IM (2-3-dniowy okres półtrwania). Maks 8 tygodni. TUDCA niewymagana (niska hepatotoks), ALE monitor lipidów + ciśnienia konieczny. PCT od ostatniej iniekcji +3-5 dni."
        }
      },
      "defaultVialMg": 1000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 100000,
      "hepatotoxicity": "low",
      "aromatization": "none",
      "androgenicRatio": "62:25",
      "legalStatus": "Discontinued Rx (Drolban not manufactured after 1993), available only on UGL market. EU/HU/PL: illegal without prescription, WADA-banned.",
      "detectionWindow": "Urinary: 3 weeks (shorter than Enanthate due to short propionate ester). WADA-accredited GC-MS and LC-MS/MS.",
      "quality": {
        "pure": [
          "Clear pale-yellow or water-clear oil, 10ml vial, sterile filtered",
          "UGL HPLC-tested source mandatory — propionate ester characteristically painful PIP, distinguishably different from enanthate"
        ],
        "caution": [
          "Injection site pain (PIP): propionate in alcohol vehicle often painful, 24-48 h swelling",
          "Requires 3× EOD weekly injection due to short half-life (Mon/Wed/Fri or E2D)",
          "HDL drop, LDL rise (moderate)",
          "Hair-loss acceleration in androgenic alopecia (DHT derivative)"
        ],
        "avoid": [
          "Strong injection-site sensitivity (prefer Enanthate variant if every IM is severely painful)",
          "More than 8 weeks continuous cycle (HPTA suppression cumulative)",
          "Cardiovascular risk (family history, high LDL)",
          "Female use (extreme virilization risk)"
        ]
      },
      "interactions": [
        "Test-Propionate stack: ester half-life matching, EOD injection schedule",
        "Tren-Acetate stack: classic 'cutting stack', all three short esters",
        "PCT (Clomid 50mg/day + Nolvadex 20mg/day, 4 weeks) starts last Prop injection +3-5 days"
      ]
    },
    {
      "id": "enan",
      "routeId": "enan",
      "routeLabel": {
        "hu": "Drostanolone Enanthate (Masteron-E, lassú észter)",
        "en": "Drostanolone Enanthate (Masteron-E, slow ester)",
        "pl": "Drostanolon Enanthate (Masteron-E, wolny ester)"
      },
      "routeNote": {
        "hu": "Hosszabb felezés (~7-10 nap) ⇒ heti 1-2 IM-injekció elegendő, steady-state 4-5 hét. Sokkal kevésbé fáj mint a Propionát (nincs alkohol-vehikulum). Ugyanaz a parent drostanolone, így a cutting/cosmetic hatás azonos. Hátulütő: 2-3 hónapos detection window ⇒ contest-period <3 hónappal kerülendő. Bulking-cycle Mast-E-stack tipikus 10-12 hét.",
        "en": "Longer half-life (~7-10 days) ⇒ once/twice weekly IM injection sufficient, steady-state 4-5 weeks. Much less painful than Propionate (no alcohol vehicle). Same parent drostanolone, so cutting/cosmetic effects identical. Drawback: 2-3 month detection window ⇒ avoid <3 months before contest period. Bulking-cycle Mast-E stack typically 10-12 weeks.",
        "pl": "Dłuższy okres półtrwania (~7-10 dni) ⇒ iniekcja IM raz/dwa razy w tygodniu wystarcza, stan stacjonarny 4-5 tygodni. Znacznie mniej bolesny niż Propionian (brak wehikułu alkoholu). Ten sam macierzysty drostanolon, więc działanie cięcia/kosmetyczne identyczne. Wada: 2-3-miesięczne okno detekcji ⇒ unikać <3 miesięcy przed okresem zawodów. Cykl bulking ze stackiem Mast-E zazwyczaj 10-12 tygodni."
      },
      "image": "/performance/oil-vial-orange.png",
      "halfLife": "7-10 d (Enanthate ester; free drostanolone t½ ~1-2 d after hydrolysis)",
      "halfLifeActive": "1-2 d (depot absorption slow, plasma stabilizes after 1-2 weeks)",
      "bioavailability": "~95-100% (IM injection bypasses first-pass; enanthate ester slow hydrolysis ~7-10 days)",
      "onsetTime": {
        "hu": "48-72 óra (IM, enantát slow-acting; steady-state 4-5 hét)",
        "en": "48-72 h (IM, enanthate slow-acting; steady-state 4-5 weeks)",
        "pl": "48-72 h (IM, enantat wolno działający; stan stacjonarny 4-5 tygodni)"
      },
      "dosing": {
        "hu": "300-700 mg/hét IM, heti 1-2x. Tipikus cutting dózis 400-500 mg/hét. Minimum 8-10 hét ciklus a steady-state miatt. PCT utolsó injekció +14-21 nap.",
        "en": "300-700 mg/week IM, 1-2× weekly. Typical cutting dose 400-500 mg/week. Minimum 8-10 week cycle due to steady-state. PCT starts last injection +14-21 days.",
        "pl": "300-700 mg/tydzień IM, 1-2× w tygodniu. Typowa dawka cięcia 400-500 mg/tydzień. Minimum 8-10 tygodni cyklu z powodu stanu stacjonarnego. PCT od ostatniej iniekcji +14-21 dni."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 300,
          "medium": 500,
          "high": 700
        },
        "unit": "mg/week",
        "note": {
          "hu": "300-700 mg/hét, heti 1-2x IM (7-10 nap felezés). Minimum 8-10 hét. TUDCA NEM kötelező, DE lipid + vérnyomás monitor. PCT utolsó injekció +14-21 nap.",
          "en": "300-700 mg/week, 1-2× weekly IM (7-10 day half-life). Minimum 8-10 weeks. TUDCA not required, BUT lipid + BP monitor essential. PCT starts last injection +14-21 days.",
          "pl": "300-700 mg/tydzień, 1-2× w tygodniu IM (7-10-dniowy okres półtrwania). Minimum 8-10 tygodni. TUDCA niewymagana, ALE monitor lipidów + ciśnienia konieczny. PCT od ostatniej iniekcji +14-21 dni."
        }
      },
      "defaultVialMg": 2000,
      "defaultBacMl": 10,
      "defaultDoseMcg": 500000,
      "hepatotoxicity": "low",
      "aromatization": "none",
      "androgenicRatio": "62:25",
      "legalStatus": "Never licensed as human Rx — UGL market only. Illegal everywhere, WADA-banned.",
      "detectionWindow": "Urinary: 2-3 months (much longer than propionate due to long enanthate ester). WADA-accredited GC-MS and LC-MS/MS.",
      "quality": {
        "pure": [
          "Clear yellowish-brown oil (~#f59e0b tone), 10ml vial, sterile filtered",
          "UGL HPLC-tested source mandatory — enanthate ester much less painful than propionate"
        ],
        "caution": [
          "Slow onset: esthetic change perceptible only after 4-5 weeks (steady-state)",
          "Weekly 1-2× injection sufficient (Mon or Mon+Thu)",
          "HDL drop, LDL rise (moderate, more cumulative than Prop due to longer exposure)",
          "Long detection window: prefer Prop during contest period"
        ],
        "avoid": [
          "Short (4-6 week) cycle NOT effective — Enan steady-state only after 4-5 weeks",
          "More than 12 weeks continuous cycle (severe HPTA suppression)",
          "WADA-tested competition <3 months after planned end (detection window)",
          "Cardiovascular risk, female use (see Propionate)"
        ]
      },
      "interactions": [
        "Test-Enanthate stack: ester half-life matching, weekly 1-2× injection schedule",
        "Tren-Enanthate stack: 'long-ester cutting' 10-12 weeks",
        "PCT (Clomid + Nolvadex 4-6 weeks) starts last Enan injection +14-21 days"
      ]
    }
  ],
  "defaultVariant": "prop",
  "anecdote": "Anecdotal reports describe Masteron producing pronounced diuretic effects, with users frequently noting greatly increased urination. Community accounts also note reduced high-E2 symptoms even when running substantial testosterone doses, consistent with its known anti-estrogenic activity at the receptor level. However, Masteron is notorious for accelerating androgenic hair loss; users prone to male-pattern baldness commonly report immediate hairline thinning after starting it. It is generally viewed as a 'cosmetic anabolic' — useful for hardness, dryness, and physique refinement rather than meaningful muscle accretion. Overall, it is regarded as a solid DHT-derived anabolic with a clear niche when used appropriately, but the androgenic tradeoffs (particularly hair loss) are a serious consideration for genetically predisposed users."
}
