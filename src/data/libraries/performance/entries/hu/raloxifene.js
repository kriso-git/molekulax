// Raloxifene (Evista) — benzothiophene-osztályos SERM, Eli Lilly 1997 FDA
// postmenopauzális osteoporózisra; 2007 update ER+ emlőkarcinóma chemoprevencióra.
// AAS-kontextus niche használat: létező gynecomastia REVERZÁLÁSA (stronger
// breast-szelektivitás mint Nolvadex). Sources: FDA Evista SmPC, Lawrence 2004
// PMID 14744776, Cummings 1999 MORE PMID 10580020, Vogel 2006 STAR PMID 16754727,
// Khan 2002 male gyno PMID 11843724.

export default {
  "id": "raloxifene",
  "sideEffects": [
    { "hu": "Vénás thromboembolia (mélyvénás trombózis, tüdőembólia) – az FDA Evista label fekete-keretes (black-box) figyelmeztetése, kb. 3-szoros relatív rizikó a placebóhoz képest; az első 4 hónapban a legmagasabb.", "en": "Venous thromboembolism (deep vein thrombosis, pulmonary embolism) – FDA Evista black-box warning, roughly 3-fold increased relative risk vs placebo, highest during the first 4 months.", "pl": "Żylna choroba zakrzepowo-zatorowa (zakrzepica żył głębokich, zatorowość płucna) – ostrzeżenie w czarnej ramce na etykiecie FDA Evista, około 3-krotnie zwiększone ryzyko względne vs placebo, najwyższe w pierwszych 4 miesiącach." },
    { "hu": "Hőhullámok (hot flashes) – gyakori (kb. 25-30%), különösen a kezelés első hónapjaiban; a SERM ösztrogén-antagonista hatásának következménye.", "en": "Hot flashes – common (around 25-30%), especially in the first months of treatment, a consequence of the SERM estrogen-antagonist effect.", "pl": "Uderzenia gorąca – częste (około 25-30%), zwłaszcza w pierwszych miesiącach leczenia, wynik antagonistycznego wobec estrogenu działania SERM." },
    { "hu": "Lábikra-görcsök és izomgörcsök – jól dokumentált, gyakori mellékhatás az Evista vizsgálatokban.", "en": "Leg cramps and muscle spasms – well-documented, common adverse effect in the Evista trials.", "pl": "Skurcze łydek i skurcze mięśni – dobrze udokumentowany, częsty efekt uboczny w badaniach nad Evistą." },
    { "hu": "Perifériás ödéma (folyadékretenció, lábdagadás) – gyakori panasz.", "en": "Peripheral edema (fluid retention, leg swelling) – a common complaint.", "pl": "Obrzęki obwodowe (zatrzymanie płynów, obrzęk nóg) – częsta dolegliwość." },
    { "hu": "Influenzaszerű tünetek, ízületi fájdalom (arthralgia) és izzadás – az enyhébb, gyakran jelentett mellékhatások közé tartoznak.", "en": "Flu-like syndrome, joint pain (arthralgia) and sweating – among the milder, frequently reported side effects.", "pl": "Objawy grypopodobne, ból stawów (artralgia) i pocenie się – należą do łagodniejszych, często zgłaszanych efektów ubocznych." },
    { "hu": "Megnövekedett stroke-okozta halálozási rizikó dokumentált igazolt koszorúér-betegségben vagy magas kardiovaszkuláris kockázatú betegeknél (RUTH-vizsgálat) – maga a stroke incidenciája nem nőtt, de a fatális kimenetel igen.", "en": "Increased risk of fatal stroke documented in women with proven coronary heart disease or at high cardiovascular risk (RUTH trial) – overall stroke incidence was not raised, but fatal outcomes were.", "pl": "Zwiększone ryzyko zgonu z powodu udaru udokumentowane u kobiet z potwierdzoną chorobą wieńcową lub wysokim ryzykiem sercowo-naczyniowym (badanie RUTH) – ogólna częstość udarów nie wzrosła, ale zgony tak." }
  ],
  "contraindications": [
    { "hu": "Aktív vagy korábbi vénás thromboembóliás esemény (mélyvénás trombózis, tüdőembólia, retina-véna trombózis) – abszolút kontraindikáció az FDA Evista label szerint.", "en": "Active or past venous thromboembolic event (deep vein thrombosis, pulmonary embolism, retinal vein thrombosis) – absolute contraindication per FDA Evista label.", "pl": "Czynny lub przebyty epizod żylnej choroby zakrzepowo-zatorowej (zakrzepica żył głębokich, zatorowość płucna, zakrzepica żyły siatkówki) – bezwzględne przeciwwskazanie według etykiety FDA Evista." },
    { "hu": "Terhesség és terhességet tervező nők, valamint szoptatás – Pregnancy Category X, teratogén, fogamzóképes nőknél tilos.", "en": "Pregnancy and women who may become pregnant, plus breastfeeding – Pregnancy Category X, teratogenic, contraindicated in women of childbearing potential.", "pl": "Ciąża i kobiety mogące zajść w ciążę oraz karmienie piersią – kategoria ciążowa X, teratogenny, przeciwwskazany u kobiet w wieku rozrodczym." },
    { "hu": "Tartós immobilizáció (műtét utáni felépülés, hosszú utazás, ágyhoz kötöttség) – a VTE-rizikó miatt; immobilizáció előtt legalább 72 órával le kell állítani és mobilizációig nem folytatható.", "en": "Prolonged immobilization (post-surgical recovery, long travel, bed rest) – due to VTE risk; should be stopped at least 72 hours before immobilization and not resumed until full mobility returns.", "pl": "Przedłużone unieruchomienie (rekonwalescencja pooperacyjna, długa podróż, leżenie w łóżku) – ze względu na ryzyko ŻChZZ; należy odstawić co najmniej 72 godziny przed unieruchomieniem i nie wznawiać do pełnego odzyskania ruchomości." },
    { "hu": "Igazolt koszorúér-betegség, korábbi stroke vagy magas kardiovaszkuláris kockázat – a RUTH-vizsgálatban megnőtt a fatális stroke kockázata.", "en": "Established coronary heart disease, prior stroke or high cardiovascular risk – fatal stroke risk was increased in the RUTH trial.", "pl": "Rozpoznana choroba wieńcowa, przebyty udar lub wysokie ryzyko sercowo-naczyniowe – w badaniu RUTH wzrosło ryzyko zgonu z powodu udaru." },
    { "hu": "Súlyos májkárosodás (hepatikus elégtelenség) – nincs elegendő biztonságossági adat, óvatosság ill. kerülés javasolt.", "en": "Severe hepatic impairment (liver insufficiency) – insufficient safety data, caution or avoidance advised.", "pl": "Ciężka niewydolność wątroby – niewystarczające dane dotyczące bezpieczeństwa, zalecana ostrożność lub unikanie." },
    { "hu": "Súlyos vesekárosodás – korlátozott adat, óvatos alkalmazás szükséges.", "en": "Severe renal impairment – limited data, cautious use required.", "pl": "Ciężka niewydolność nerek – ograniczone dane, wymagane ostrożne stosowanie." },
    { "hu": "Kezeletlen ill. tisztázatlan eredetű méhvérzés vagy endometriális rendellenesség – ki kell vizsgálni a raloxifén megkezdése előtt.", "en": "Unexplained uterine bleeding or endometrial abnormality – must be investigated before starting raloxifene.", "pl": "Niewyjaśnione krwawienie z macicy lub nieprawidłowości endometrium – należy je zdiagnozować przed rozpoczęciem raloksyfenu." }
  ],
  "name": "Raloxifene (Evista)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Benzothiophene-SERM, FDA-jóváhagyott (1997 Lilly) postmenopauzális osteoporózisra + ER+ emlőkarcinóma chemoprevencióra. AAS-kontextus niche használat: létező gynecomastia reverzálása erősebb mell-szelektivitással mint a Nolvadex. NEM primér HPTA-restart SERM.",
  "description": "A Raloxifene (Evista) egy benzothiophene-osztályú szelektív ösztrogén-receptor-modulátor (SERM), kémiailag eltérő a trifeniletilén-szerkezetű Nolvadex/Clomidtól. Eli Lilly 1997-ben FDA-jóváhagyást kapott postmenopauzális osteoporózisra (MORE trial Cummings 1999 PMID 10580020), és 2007-ben kibővítették az indikációt invazív ER+ emlőkarcinóma chemoprevencióra magas-rizikójú postmenopauzális nőkben (STAR trial Vogel 2006 PMID 16754727 — Raloxifene vs Tamoxifen head-to-head: hasonló prevenciós hatékonyság, alacsonyabb VTE-rizikó). Szövetspecifikus profil: ER-α antagonist a mell + méh szövetben, agonist a csontban. Az AAS-kontextusban a Raloxifene niche-pozíciót foglal el: létező gynecomastia REVERZÁLÁSÁRA (NEM HPTA-axis-restart) — Lawrence 2004 PMID 14744776 mutatott 50%+ csökkenést pubertás-kori gyno-szövetben 6 hónap alatt. A Nolvadexnél stronger anti-estrogenic mell-szövet-szelektivitást ad, ami magyarázza az emlőszövet-célzott alkalmazását. Glükuronizáció a primér metabolizmus (NEM CYP2D6, mint a Tamoxifené), ami elkerüli az SSRI-interakciót — ez az egyik gyakorlati előny. FDA Evista label: vénás thromboembolia (VTE) black-box warning, 3-fold relatív rizikó-emelkedés vs placebo (MORE-trial-adat).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Benzothiophene SERM, ER-α antagonist mell+méh, agonist csont"},
    {"label": "Adagolás (AAS gyno-reverzálás)", "value": "60 mg/nap × 6-12 hét"},
    {"label": "Felezési idő", "value": "~27 óra (napi 1x dose)"},
    {"label": "Hatáskezdet", "value": "Gyno-szövet-regresszió 6-12 hét"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx (postmenopauzális osteo + breast-cancer prevenció), WADA S4 (banned)"}
  ],
  "mechanism": "Raloxifene benzothiophene-szerkezetű SERM, kémiailag eltérő a trifeniletilén-szerkezetű Nolvadex/Clomidtól. Kompetitíven kötődik az ER-α-hoz a mellben és az endometriumban antagonist konformáció-változással, a csontban viszont parciális agonist (innen a osteo-protective hatás). Az emlőszövet ER-α-szelektivitása STRONGER mint Nolvadexé — ezért hatékonyabb létező gynecomastia szövet-regresszióban (Lawrence 2004 PMID 14744776). Pituiter ER-blokádot is ad, de mass-effect-szempontból gyengébb mint a Nolvadex (Raloxifene NEM primér HPTA-restart-SERM). Glükuronizáció a primér metabolizmus (UGT1A1/1A8/1A10) — KIVÁLÓ tulajdonság: NINCS CYP2D6-interakció (vs Tamoxifen), tehát SSRI-stack (paroxetin, fluoxetin) szabadon kombinálható.",
  "legalStatus": "USA: FDA-jóváhagyott 1997 (Evista, postmenopauzális osteo), 2007 indikációs kibővítés (invazív ER+ breast-cancer prevenció magas-rizikójú nők). EU: EMA-jóváhagyott (Evista, Optruma Rx). HU + PL: törzskönyvezett (Evista Rx). WADA: S4.3 ösztrogén-receptor-modulátor (banned in-competition + out-of-competition férfiak).",
  "onsetTime": "Gyno-szövet-regresszió mérhető 4-6 hét, klinikailag jelentős 6-12 hét",
  "halfLife": "~27 óra (napi 1x dose)",
  "halfLifeActive": "~27 óra (nincs aktív metabolit, parent compound a fő szer)",
  "interactionsWith": ["nolvadex", "clomid", "enclomiphene", "anastrozol", "letrozol"],
  "aromatization": "Nem aromatizál — szelektív ER-α antagonist (mell + méh), partial agonist csont. NEM CYP19-gátló. Nem érinti közvetlenül az aromatáz-axis-t.",
  "hepatotoxicity": "Alacsony — non-steroidal, nem 17α-alkilált. FDA Evista label hepatic adverse events <2% incidencia. Glükuronizáció primér metabolizmus (NEM CYP-mediated → kevesebb DDI).",
  "wadaStatus": "restricted",
  "androgenicRatio": "N/A (nem AAS, SERM)",
  "bindingAffinity": "ER-α kompetitív affinitás magas (Ki ~50 nM), ER-β alacsonyabb. Tissue-specific konformációs hatás magyarázza a tissue-szelektivitást (mell antagonist, csont agonist).",
  "detectionWindow": "WADA-akkreditált GC-MS/LC-MS/MS vizeletminta-detektálás ~1-2 hónap (raloxifene-glükuronid metabolit-jelölés).",
  "benefits": [
    "Létező gynecomastia REVERZÁLÁSA — stronger breast-szelektivitás mint Nolvadex (Lawrence 2004 PMID 14744776 50%+ regresszió 6 hónap)",
    "NINCS CYP2D6-interakció (vs Tamoxifen) → SSRI-stack (paroxetin/fluoxetin) szabadon kombinálható",
    "Csont-protective parciális agonist hatás (osteoporózis-csökkentés mellékelőny)",
    "STAR trial-adat Vogel 2006: hasonló prevenciós hatékonyság mint Tamoxifen, alacsonyabb VTE-rizikó női-paciens",
    "Olcsó, generic-elérhető Európa-szerte"
  ],
  "quickStart": [
    "Gyno-reverzálás protokoll: 60 mg/nap × 6-12 hét, étkezéstől függetlenül",
    "Bloodwork pre-protocol: D-dimer + INR/PT baseline (VTE-screening kötelező), lipid panel, hepatic panel, Total/Free Test, E2, prolactin (Tren-ciklus után)",
    "Nem helyettesíti a Nolvadex-PCT-t — Raloxifene NEM HPTA-restart-emphasized; ha PCT-cél is van, Nolvadex stack-elhető",
    "VTE-rizikó: anamnézisben DVT/PE/tüdőembólia abszolút kontraindikáció; családi VTE-anamnézis óvatos mérlegelés",
    "Mass-tartás ciklus alatt: Raloxifene + Anastrozol kombináció (gyno-prevenció + E2-szuppresszió) niche-protokoll edzőtermi-kontextusban"
  ],
  "expectations": [
    {"label": "1-2. hét", "body": "Gyno-szövet érzékenység csökkeni kezd. Mérhető tükör-teszt-változás minimális, DE szubjektív kompresszió-érzet enyhül."},
    {"label": "3-6. hét", "body": "Gyno-szövet visible regresszió kezd (Lawrence 2004 trial: 30-50% csökkenés 6 hét alatt). Csont-protektív hatás mellékelőnyként."},
    {"label": "7-12. hét", "body": "Maximum gyno-regresszió (50%+ csökkenés átlagosan). Protokoll lezárása vagy fenntartó-dose mérlegelése."},
    {"label": "Post-protocol", "body": "Confirm-bloodwork (E2, lipid panel, D-dimer). Ha gyno-szövet még jelen, +6 hetes meghosszabbítás megengedett. Tartós szövet → sebészeti konzultáció (mastectomia)."}
  ],
  "quality": {
    "pure": [
      "Eli Lilly Evista 60 mg blister, Rx pharma-minőség (EU + USA elérhető)",
      "Optruma 60 mg (Eli Lilly EU-brand) — pharma-minőség, törzskönyvezett",
      "Raloxifene-Sandoz, Raloxifene-Teva generic ekvivalens (EU)",
      "Indiai generikum (Cipla Raloxa) — pharma-minőség, ePharmacy"
    ],
    "caution": [
      "VTE-rizikó: 3-fold relatív rizikó-emelkedés vs placebo (FDA Evista label black-box warning) — anamnézis kötelező",
      "Hot flashes mellékhatás gyakori (~25-30% felhasználón) — nőknél tipikus, férfin enyhébb",
      "Lábikra-krampusz, ödéma ritka",
      "Raloxifene NEM HPTA-restart-SERM — ne keverd össze a Nolvadex-PCT-vel; eltérő use-case"
    ],
    "avoid": [
      "Anamnézisben DVT/PE/tüdőembólia (abszolút kontraindikáció FDA label)",
      "Aktív VTE-rizikó-tényezők (postoperatív, immobilizáció, magas-cholesterol + cardiovascular comorbidity)",
      "Egyidejű terhesség (Pregnancy Category X — női-partner)",
      "Aktív máj-zavar (relatív kontraindikáció)"
    ]
  },
  "interactions": [
    "Nolvadex stack: NEM ajánlott (mechanism-overlap, ER-blokád mass-effect redundáns) — válassz egyet",
    "AI co-administration (Anastrozol/Letrozol/Exemestane): kombinálható mass-protokollban (E2-szuppresszió + gyno-szövet-célzás)",
    "SSRI (paroxetin/fluoxetin): SZABADON kombinálható (glükuronizáció-only metabolizmus, NINCS CYP2D6-interakció — KIVÁLÓ tulajdonság vs Tamoxifen)",
    "Warfarin: minimális interakció (vs Tamoxifen, ahol erős CYP-interakció)",
    "Cholestyramin: 40%-os abszorpció-csökkenés — 4 órás távolság a dose-ok között",
    "Cardio-protective szerek (statin, aszpirin): jól kombinálható"
  ],
  "studies": [
    {"title": "The effect of raloxifene on risk of breast cancer in postmenopausal women: results from the MORE randomized trial. Multiple Outcomes of Raloxifene Evaluation.", "authors": "Cummings SR, Eckert S, Krueger KA, Grady D, Powles TJ, Cauley JA, Norton L, Nickelsen T, Bjarnason NH, Morrow M, Lippman ME, Black D, Glusman JE, Costa A, Jordan VC", "journal": "JAMA", "pmid": "10376571"},
    {"title": "Effects of tamoxifen vs raloxifene on the risk of developing invasive breast cancer and other disease outcomes: the NSABP Study of Tamoxifen and Raloxifene (STAR) P-2 trial", "authors": "Vogel VG, Costantino JP, Wickerham DL, et al.", "journal": "JAMA. 2006;295(23):2727-41.", "pmid": "16754727"},
    {"title": "Beneficial effects of raloxifene and tamoxifen in the treatment of pubertal gynecomastia.", "authors": "Lawrence SE, Faught KA, Vethamuthu J, Lawson ML", "journal": "J Pediatr", "pmid": "15238910"},
    {"title": "Treatment of adolescents with gynecomastia.", "authors": "Malozowski S, Stadel BV", "journal": "J Pediatr", "pmid": "15812473"}
  ],
  "faq": [
    {"q": "Gyno-reverzálás Nolvadex vs Raloxifene?", "a": "Nolvadex: prevention + ciklus alatti pre-emptive (block-mechanism); Raloxifene: REVERZÁLÁS létező gyno-szöveten (stronger breast-szelektivitás). Klinikai döntés-fa: ciklus alatti gyno-prevention → Nolvadex; ciklus utáni létező gyno-rescue (Lawrence 2004 protokoll) → Raloxifene. Egyaránt biztonságos, NEM stack-elhető (mechanism-overlap)."},
    {"q": "VTE-rizikó valós-e a férfiakon is?", "a": "Adat-hiányos (Evista trial-ek postmenopauzális nőkön végződtek). Theoretical: a 3-fold VTE-rizikó-emelkedés ER-modulation effect, valószínűleg férfin is jelentkezik valamilyen mértékben. Praktikus protokoll: anamnézis (családi DVT/PE), D-dimer baseline, mozgásos életmód a ciklus alatt; ha bármi rizikófaktor (postoperatív, immobilizáció, magas LDL + dohányzás), NE használj."},
    {"q": "Lehet PCT-axis-restart-ra használni?", "a": "Limited evidence — Karavolos 2015 review-ja említi, de NEM elsősorban erre tervezett. Pituiter ER-blokádot ad, de mass-effect gyengébb mint Nolvadex/Clomid → HPTA-restart suboptimal. Ha gyno-reverzálás + PCT egyszerre van cél, Nolvadex stand-alone vagy Nolvadex + Raloxifene NEM kombinálva (mechanism-overlap), inkább Nolvadex önmagában + post-PCT Raloxifene-bridge a maradék gyno-szövetre."},
    {"q": "Csont-hatás férfin?", "a": "Pozitív osteo-benefit dokumentált — bone-mineral-density (BMD) emelkedés trabecular bone-on (Cummings 1999 MORE trial). AAS-PCT post-ciklus mellékelőnye lehet (post-ciklus-oststeoporózis-rizikó kissé csökken). Long-term-use chronic-on nem teljesen ismert vizsgált férfi-cohortban."}
  ],
  "related": ["nolvadex", "clomid", "enclomiphene", "anastrozol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 60, "medium": 60, "high": 120},
    "unit": "mg/nap (orális, napi 1x)",
    "note": "Gyno-reverzálás protokoll: 60 mg/nap × 6-12 hét. Severe gyno esetén 120 mg/nap × 4-6 hét off-label (Khan 2002 case-report dose), DE VTE-rizikó figyelendő. Étkezéstől függetlenül."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Protokoll előtt",
      "timing": "2 héttel kezdés előtt",
      "markers": "D-dimer + INR/PT (VTE-screening), Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS), LH, FSH, SHBG, Prolactin, lipid panel, ALT, AST, hemogram.",
      "purpose": "VTE-rizikó-baseline (KÖTELEZŐ FDA black-box warning miatt). Hormon-baseline gyno-szövet-context-hez."
    },
    "midCycle": {
      "label": "Protokoll közben (4-6. hét)",
      "timing": "Indítás +4-6 hét",
      "markers": "D-dimer (VTE-monitor), Total Test, E2, lipid panel, hot-flashes-frequency-napló.",
      "purpose": "VTE-monitoring + gyno-szövet-regresszió követés (tükör-teszt + opcionális ultrahang)."
    },
    "postCycle": {
      "label": "Protokoll vége + recovery",
      "timing": "Utolsó dose +2 hét és +6 hét",
      "markers": "D-dimer, Total Test, E2, lipid panel, gyno-szövet-status-konfirm (klinikai vizsgálat vagy ultrahang).",
      "purpose": "VTE-rizikó visszaáll baseline-re. Gyno-szövet-regresszió végleges mérése."
    },
    "cruise": {
      "label": "Long-term — női indikációkban",
      "timing": "Postmenopauzális osteo: 5-10 év chronic; AAS gyno-reverzálás: max 6-12 hét",
      "markers": "AAS-kontextusban cruise N/A.",
      "purpose": "Chronic Raloxifene-use férfin nem releváns AAS-protokollra; gyno-reverzálás cél után stop."
    }
  }
}
