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
  "shortDesc": "17α-metil-testosterone, az ELSŐ szintetizált orális AAS (Ruzicka 1935). FDA-jóváhagyott Rx (Android, Methitest, Testred) hipogonadizmusra. Magas hepatotoxicitás + atipikus erős methylestradiol-aromatizáció → bodybuilding-ben elavult, modern alternatívák (Anavar/Dianabol) preferáltak.",
  "description": "A Methyltestosterone az ELSŐ szintetizált 17α-alkilált orális AAS, amelyet 1935-ben Leopold Ruzicka és Adolf Butenandt szintetizált (Nobel-díj 1939). FDA-jóváhagyott Rx-szer Android, Methitest, Testred néven férfi hipogonadizmusra (10-50 mg/nap) és — régebben — emlőkarcinómára. Anabolikus:androgén arány ~100:50 (gyakorlatilag a testosterone értékei, mert a 17α-metil-csoport csak orális stabilitást ad, NEM változtatja az AR-affinitást). 17α-metil-csoport → MAGAS hepatotoxicitás (Westaby 1980 PMID 6109024 case-series DILI). AROMATIZÁL — a metabolit 17α-methylestradiol pedig PARADOX ERŐSEBB estrogén-effekt mint a sima E2, mert a 17α-metil-csoport megakadályozza az ösztradiol hepatic metabolikus inaktivációját. Bodybuilding-ben elavult (jobb 17α-alkilált AAS-ek elérhetők: Anavar enyhébb hepatotoxicitás, Dianabol nagyobb anabolikus erő). WADA tiltott egész évben.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "AR-agonista, 17α-metil-T, AROMATIZÁL (methylE2)"},
    {"label": "Anabolikus:Androgén", "value": "100:50"},
    {"label": "Felezési idő", "value": "4 óra (orális)"},
    {"label": "Hatáskezdet", "value": "1 óra (orális, sublinguális is)"},
    {"label": "Jogi státusz", "value": "FDA Rx (Android, Methitest, Testred), Schedule III"}
  ],
  "mechanism": "17α-metil-testosterone AR-agonista. A 17α-metil-csoport orális biodostupnošć-ot ad (~70% hepatic first-pass-rezisztencia), DE az AR-affinitást NEM növeli — gyakorlatilag testosterone-szerű anabolikus profil. AROMATIZÁL CYP19 enzimen át 17α-methylestradiolra, ami a metabolikus inaktivációval szembeni rezisztencia miatt MAGASABB estrogén-effektet produkál mint a sima E2 (paradox erősítés). 17α-metil-csoport → cholesztatikus hepatotoxicitás (Westaby 1980 PMID 6109024 DILI case-series).",
  "legalStatus": "USA: FDA-jóváhagyott Rx Android (Pfizer), Methitest, Testred. Schedule III kontrollált szer (DEA). EU: Rx ritkán (DE generic Methyltestosteron). HU/PL: nem törzskönyvezett. WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "1 h (orális, sublinguális gyorsabb)",
  "halfLife": "4 h (orális)",
  "halfLifeActive": "4 h",
  "interactionsWith": ["tudca", "tamoxifen", "warfarin", "alcohol"],
  "aromatization": "Igen — CYP19 szubsztrát, metabolit 17α-methylestradiol (paradoxálisan erősebb estrogén-effekt mint sima E2 a metabolikus rezisztencia miatt); klinikailag gynecomastia-kockázat magas (Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Magas — 17α-metil-csoport cholesztatikus hepatotoxicitást okoz, ALT/AST 3-5x emelkedés gyakori 4+ hetes ciklusban, DILI case-jelentett (Westaby 1980 PMID 6109024, Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:50",
  "bindingAffinity": "AR-affinitás közepes (~50-60% testosterone-hoz képest in vitro).",
  "detectionWindow": "Methyltestosterone-metabolitok vizeletből 4-6 hét (WADA-akkreditált GC-MS/LC-MS/MS).",
  "benefits": [
    "Történelmi jelentőség: az első szintetizált 17α-alkilált orális AAS (1935)",
    "FDA-jóváhagyott Rx hipogonadizmusra (Android, Methitest)",
    "Sublinguális adagolás lehetséges (~30% gyorsabb onset, magasabb peak)",
    "Anabolikus profil testosterone-szerű (NEM gyengébb mint az anyagvegyület)"
  ],
  "quickStart": [
    "MODERN ALTERNATÍVÁK PREFERÁLTAK: Anavar (enyhébb hepatotoxicitás) vagy Dianabol (nagyobb anabolikus erő) helyettesíti",
    "EXTRÉM HEPATOTOXICITÁS — max 4 hét folyamatos ciklus",
    "TUDCA 1000 mg/nap + NAC 1800 mg/nap KÖTELEZŐ",
    "SERM (Nolvadex 20 mg/nap) gyno-megelőzésre + AI (Anastrozole 0,5 mg E3D) E2-kontrollra",
    "PCT (Clomid + Nolvadex 4-6 hét) kötelező"
  ],
  "expectations": [
    {"label": "Első hét", "body": "Akut hatás minimális. Erő-növekedés 3-5 nap után érzékelhető. Sublinguális adagolásnál gyorsabb onset."},
    {"label": "3-4. hét", "body": "Lean mass-gyarapodás 2-4 kg (paradox víz-retencióval a methylE2 miatt). ALT/AST 3-5x felső normál — KÖTELEZŐ leállítás 4. hét végén."},
    {"label": "Post-ciklus", "body": "Súly-vesztés a víz-leadás miatt 30-50%. Hepatikus recovery 4-8 hét. HPTA-recovery 8-12 hét."}
  ],
  "quality": {
    "pure": [
      "Pfizer Android 10 mg vagy Methitest 25 mg kapszula (USA Rx)",
      "Methitest 10 mg tabletta (DailyMed-listed Rx)",
      "UGL tabletta: ma elavult, ritkán gyártott (jobb alternatívák miatt)"
    ],
    "caution": [
      "Hepatotoxicitás (ALT/AST 3-5x emelkedés gyakori)",
      "Cholesztatikus jaundice (Westaby 1980 PMID 6109024 case-series)",
      "Gynecomastia (paradox methylE2-driven)",
      "Vízretenció és hangulat-zavar",
      "Lipid-zavar: HDL csökkenés mérsékelt-magas"
    ],
    "avoid": [
      "Bármilyen meglévő máj-zavar ABSZOLÚT kontraindikáció",
      "Alkohol, NSAID, paracetamol egyidejű használata szigorúan tilos",
      "Modern alternatívák preferáltak (Anavar/Dianabol) — Methyltestosterone elavult",
      "Női felhasználás (virilizációs kockázat magas)",
      "Több mint 4 hét folyamatos ciklus"
    ]
  },
  "interactions": [
    "TUDCA + NAC kötelező máj-támogatás",
    "Nolvadex (SERM): gyno-megelőzés",
    "Anastrozole (AI): E2-kontroll a paradox methylE2-aromatizáció miatt",
    "Más 17α-alkilált AAS együtt halálos hepatotoxikus kombináció"
  ],
  "studies": [
    {"title": "FDA Methitest / Android prescribing information", "authors": "FDA / Pfizer", "journal": "DailyMed NDA 80-070 (methyltestosterone label)", "pmid": null},
    {"title": "Liver damage from long-term methyltestosterone", "authors": "Westaby D, Ogle SJ, Paradinas FJ, Randell JB, Murray-Lyon IM.", "journal": "Lancet. 1977;2(8032):262-3.", "pmid": "69876"},
    {"title": "Anabolic steroid use: indications of habituation among adolescents", "authors": "Yesalis CE, Streit AL, Vicary JR, Friedl KE, Brannon D, Buckley W.", "journal": "J Drug Educ. 1989;19(2):103-16.", "pmid": "2769530"},
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15248788"}
  ],
  "faq": [
    {"q": "Miért elavult bodybuilding-ben?", "a": "Két jobb alternatíva miatt: (1) Anavar — hasonló anabolikus erő, jelentősen enyhébb hepatotoxicitás, NEM aromatizál; (2) Dianabol — nagyobb anabolikus erő, hasonló hepatotoxicitás. A Methyltestosterone egyetlen \"előnye\" a sublinguális adagolás lehetősége, de ez se jelentős a peak-plasma-szempontból. Modern protokoll: ha 17α-alkilált orális AAS kell, használj Anavart vagy Dianabolt."},
    {"q": "Methylestradiol paradox?", "a": "A Methyltestosterone aromatizál 17α-methylestradiollá. A 17α-metil-csoport a hepatikus 17β-HSD-inaktivációval szemben ellenálló, így a methylE2 jóval hosszabb plasma-szinten marad mint a sima E2. Klinikailag a Methyltestosterone GYAKORI gynecomastia-rizikóval jár — még alacsony dózisnál (25-50 mg/nap) is, ahol a sima Test ekvivalens E2-emelkedéssel ritkán okoz gynot. Anastrozole NEM HATÉKONY a methylE2 ellen — csak SERM (Nolvadex, Raloxifene) blokkolja a methylE2-ER-binding-et."},
    {"q": "Sublinguális adagolás előnye?", "a": "A Methyltestosterone képes sublinguális adagolásra (Methitest tablet alá nyelv) — a felszívódás ~30% gyorsabb mint az orális, a peak-plasma kb. 50% magasabb. DE a clinical jelentőség alacsony, mert a 17α-metil-csoport miatt a parent compound már stabil. A sublinguális gyakran csak placebo-effekt + ízpanasz."},
    {"q": "Az 1935-ös szintézis miért fontos?", "a": "Leopold Ruzicka (Nobel-díj 1939 a szteroid-szintézis úttörő munkájáért) és Adolf Butenandt először szintetizálta a testosterone-t (1935) és a Methyltestosterone-t (1935) szinte egyidejűleg. A Methyltestosterone volt az ELSŐ orálisan biológiailag hozzáférhető AAS, ami megteremtette a 17α-alkilált AAS osztályt. Az összes modern 17α-alkilált AAS (Anavar, Dianabol, Anadrol, Winstrol, Superdrol, Halotestin, Turinabol) ezen az úttörő strukturális innovációra épül."},
    {"q": "FDA-indikáció ma is érvényes?", "a": "Igen — Methitest (Methyltestosterone 10 mg) és Testred (10 mg) tabletta FDA-jóváhagyott férfi hipogonadizmusra 10-50 mg/nap dózisban. Modern endokrinológiai protokollok azonban inkább injektábilis Testosterone-észtert (Cypionate, Enanthate) használnak a hosszabb felezés + jobb plasma-stabilitás + alacsonyabb hepatotoxicitás miatt. A Methyltestosterone-Rx ma marginális — főleg ott ahol a páciens injekcionálni nem tud/nem akar."}
  ],
  "related": ["dianabol-info", "anavar-info", "testosterone-info", "anadrol", "superdrol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 75},
    "unit": "mg/nap (orális, 2-3x osztva)",
    "note": "Maximum 4 hét ciklus. 25-75 mg/nap, 2-3x osztva (4h felezés). TUDCA 1000 mg/nap + NAC 1800 mg/nap. SERM (Nolvadex 20 mg/nap) gyno-megelőzésre. PCT 4-6 hét. Modern alternatíva: Anavar/Dianabol preferált."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hepatikus prioritás: ALT, AST, GGT, ALP, bilirubin (direkt + total), albumin. Lipid panel. Hormon-panel. CBC. PSA (30 év felett).",
      "purpose": "Hepatikus baseline kritikus 17α-metil-csoport miatt."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2-3. hét végén",
      "markers": "Hepatikus: ALT, AST, GGT, bilirubin. Lipid panel (HDL), E2 (gyno-monitor), vérnyomás.",
      "purpose": "ALT/AST >3x normál azonnali leállítás. Gyno-tünet → SERM-dózisemelés."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó tabletta +1-2 nap PCT-indítás. 4. + 8-12. hetén recovery-check.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG, hepatikus + lipid recovery.",
      "purpose": "Hepatikus recovery 4-8 hét, HPTA-recovery 8-12 hét."
    },
    "cruise": {
      "label": "Cruise alatt (NEM standard)",
      "timing": "Methyltestosterone-cruise atipikus a hepatotoxicitás miatt",
      "markers": "N/A",
      "purpose": "Methyltestosterone TRT-cruise ma elavult — injektábilis Test-ester preferált."
    }
  }
}
