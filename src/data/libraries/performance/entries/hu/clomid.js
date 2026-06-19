// Clomid (Clomiphene-citrát) — non-szteroidal SERM, Merrell 1956 szintézis,
// FDA-jóváhagyott 1967 női infertilitásra. Racém keverék (zuclomiphene
// estrogenikus + enclomiphene antiestrogenikus). Sources: FDA Clomid SmPC,
// Tan 2013 PMID 23617589, Katz 2012 PMID 22500968, Wiehle 2014 PMID 24913480,
// Karavolos 2015 PMID 25778469.

export default {
  "id": "clomid",
  "sideEffects": [
    { "hu": "Hangulati zavar: érzelmi labilitás, depresszív hangulat, ingerlékenység, sírásra való hajlam (a zuclomiphene-izomer központi idegrendszeri ösztrogén-receptor-agonizmusa miatt, felhasználók 40-50%-án enyhe-közepes mértékben).", "en": "Mood disturbance: emotional lability, depressed mood, irritability, tearfulness (driven by the zuclomiphene isomer's central nervous-system estrogen-receptor agonism, mild-to-moderate in roughly 40-50% of users).", "pl": "Zaburzenia nastroju: chwiejność emocjonalna, obniżony nastrój, drażliwość, skłonność do płaczu (spowodowane agonizmem receptora estrogenowego w ośrodkowym układzie nerwowym przez izomer zuklomifen, łagodne do umiarkowanych u około 40-50% użytkowników)." },
    { "hu": "Látászavarok: villogó scotoma (scintillating scotoma), homályos látás, fényérzékenység, utóképek. Általában dózisfüggő (>100 mg/nap tartós) és leállításkor reverzibilis, de tartós látásromlás ritka esetekben leírt.", "en": "Visual disturbances: scintillating scotoma, blurred vision, light sensitivity, afterimages. Usually dose-dependent (chronic >100 mg/day) and reversible on discontinuation, but persistent visual impairment is reported in rare cases.", "pl": "Zaburzenia widzenia: migoczący mroczek (scintillating scotoma), nieostre widzenie, światłowstręt, powidoki. Zwykle zależne od dawki (przewlekle >100 mg/dobę) i odwracalne po odstawieniu, lecz w rzadkich przypadkach opisano trwałe pogorszenie wzroku." },
    { "hu": "Ösztradiol-emelkedés (E2-rebound): a megnőtt LH révén fokozott herei ösztradiol-termelés plusz a zuclomiphene gyenge belső ösztrogén-aktivitása. Vízvisszatartást, gynecomastia-fellángolást, fejfájást okozhat; Clomidon erősebb mint Nolvadexen.", "en": "Estradiol elevation (E2 rebound): increased testicular estradiol production via raised LH, plus the weak intrinsic estrogenic activity of zuclomiphene. Can cause water retention, gynecomastia flare-ups and headache; more pronounced than with Nolvadex.", "pl": "Wzrost estradiolu (efekt z odbicia E2): zwiększona produkcja estradiolu w jądrach przez podwyższone LH oraz słaba własna aktywność estrogenowa zuklomifenu. Może powodować zatrzymanie wody, nasilenie ginekomastii i bóle głowy; silniejszy niż przy Nolvadexie." },
    { "hu": "Fejfájás, hányinger, hőhullámok és szédülés: gyakori ösztrogén-receptor-modulátor mellékhatások, általában enyhék és dózisfüggőek.", "en": "Headache, nausea, hot flushes and dizziness: common estrogen-receptor-modulator side effects, generally mild and dose-dependent.", "pl": "Bóle głowy, nudności, uderzenia gorąca i zawroty głowy: częste działania niepożądane modulatora receptora estrogenowego, zwykle łagodne i zależne od dawki." },
    { "hu": "Enyhe vércukor-emelkedés (éhomi glükóz): a zuclomiphene közvetett anyagcsere-hatása révén; diabéteszben vagy prediabéteszben fokozott figyelmet igényel.", "en": "Mild rise in blood glucose (fasting glucose) via an indirect metabolic effect of zuclomiphene; warrants extra monitoring in diabetes or prediabetes.", "pl": "Łagodny wzrost glukozy we krwi (na czczo) przez pośredni efekt metaboliczny zuklomifenu; wymaga dodatkowej kontroli w cukrzycy lub stanie przedcukrzycowym." },
    { "hu": "Petefészek-hiperstimulációs szindróma (OHSS) és többes terhesség női ovuláció-indukciós használatkor: hasi feszülés, megnagyobbodott petefészkek, súlyos esetben folyadékfelhalmozódás (férfi PCT-használatkor nem releváns).", "en": "Ovarian hyperstimulation syndrome (OHSS) and multiple pregnancy with female ovulation-induction use: abdominal distension, enlarged ovaries and, in severe cases, fluid accumulation (not relevant to male PCT use).", "pl": "Zespół hiperstymulacji jajników (OHSS) i ciąża mnoga przy stosowaniu do indukcji owulacji u kobiet: wzdęcie brzucha, powiększone jajniki, a w ciężkich przypadkach gromadzenie się płynu (nieistotne przy stosowaniu jako PCT u mężczyzn)." },
    { "hu": "Ritka epeáramlási zavar (cholestasis) és máj-enzim emelkedés: fertilitási vizsgálatokban dokumentált ritka eset; nem 17-alfa-alkilált, ezért a hepatotoxicitás összességében alacsony.", "en": "Rare cholestasis and liver-enzyme elevation: documented as a rare event in fertility trials; it is not 17-alpha-alkylated, so overall hepatotoxicity is low.", "pl": "Rzadka cholestaza i podwyższenie enzymów wątrobowych: udokumentowane jako rzadkie zdarzenie w badaniach nad płodnością; nie jest 17-alfa-alkilowany, więc ogólna hepatotoksyczność jest niska." }
  ],
  "contraindications": [
    { "hu": "Terhesség (Pregnancy Category X): a clomiphene magzati károsodást okozhat, terhesség alatt szigorúan ellenjavallt; nőknél terhesség kizárása szükséges a kezelés előtt.", "en": "Pregnancy (Category X): clomiphene can cause fetal harm and is strictly contraindicated during pregnancy; pregnancy must be excluded before treatment in women.", "pl": "Ciąża (kategoria X): klomifen może powodować uszkodzenie płodu i jest bezwzględnie przeciwwskazany w ciąży; przed leczeniem należy wykluczyć ciążę u kobiet." },
    { "hu": "Pszichiátriai előzmény (major depresszió, bipoláris zavar, súlyos szorongás): a hangulati labilitás és depresszív hatás kiválthatja vagy súlyosbíthatja az állapotot, ezért ellenjavallt vagy fokozott pszichiátriai felügyeletet igényel.", "en": "Psychiatric history (major depression, bipolar disorder, severe anxiety): the mood lability and depressive effect can trigger or worsen the condition, so it is contraindicated or requires close psychiatric supervision.", "pl": "Wywiad psychiatryczny (duża depresja, choroba afektywna dwubiegunowa, ciężki lęk): chwiejność nastroju i działanie depresyjne mogą wywołać lub nasilić chorobę, dlatego jest przeciwwskazany lub wymaga ścisłego nadzoru psychiatrycznego." },
    { "hu": "Aktív máj-betegség vagy máj-működési zavar: a hepatikus metabolizmus és a ritka cholestasis-kockázat miatt relatív ellenjavallat; máj-betegségben kerülendő.", "en": "Active liver disease or hepatic dysfunction: a relative contraindication due to hepatic metabolism and the rare cholestasis risk; avoid in liver disease.", "pl": "Czynna choroba wątroby lub zaburzenie czynności wątroby: względne przeciwwskazanie ze względu na metabolizm wątrobowy i rzadkie ryzyko cholestazy; unikać w chorobach wątroby." },
    { "hu": "Meglévő vagy fennálló látászavar (kivéve fertilitásból eredő): a clomiphene látótér- és látáspanaszokat okozhat, ezért látászavar fennállásakor a kezelés tilos vagy szemészeti kontroll mellett indítható.", "en": "Pre-existing visual disturbance: clomiphene can cause visual-field and vision complaints, so treatment is contraindicated or should be started only under ophthalmologic monitoring if a visual disturbance is present.", "pl": "Istniejące zaburzenie widzenia: klomifen może powodować dolegliwości pola widzenia i wzroku, dlatego leczenie jest przeciwwskazane lub należy je rozpoczynać wyłącznie pod kontrolą okulistyczną przy obecnym zaburzeniu widzenia." },
    { "hu": "Nem diagnosztizált, kóros méhvérzés vagy ösztrogén-függő daganat (pl. petefészek-tumor anamnézisben): a kezelés előtt ki kell zárni, a hormonális stimuláció súlyosbíthatja.", "en": "Undiagnosed abnormal uterine bleeding or estrogen-dependent tumor (e.g. history of ovarian tumor): must be excluded before treatment, as hormonal stimulation may worsen it.", "pl": "Niezdiagnozowane nieprawidłowe krwawienie z macicy lub guz estrogenozależny (np. guz jajnika w wywiadzie): należy je wykluczyć przed leczeniem, ponieważ stymulacja hormonalna może go nasilić." },
    { "hu": "Kezeletlen pajzsmirigy- vagy mellékvese-működési zavar, illetve hypofízis-daganat: ezeket a kezelés előtt diagnosztizálni és kezelni kell, mert torzítják a HPTA-tengely választ.", "en": "Untreated thyroid or adrenal dysfunction, or pituitary tumor: these must be diagnosed and treated before starting, as they distort the HPTA-axis response.", "pl": "Nieleczone zaburzenia tarczycy lub nadnerczy albo guz przysadki: należy je zdiagnozować i leczyć przed rozpoczęciem, ponieważ zaburzają odpowiedź osi HPTA." },
    { "hu": "Versenysport: a WADA tiltólistáján szerepel (S4.3 ösztrogén-receptor-modulátor), versenyen és versenyen kívül egyaránt tilos férfi sportolóknak.", "en": "Competitive sport: listed on the WADA prohibited list (S4.3 estrogen-receptor modulator), banned both in- and out-of-competition for male athletes.", "pl": "Sport wyczynowy: znajduje się na liście zakazanej WADA (S4.3 modulator receptora estrogenowego), zabroniony zarówno w trakcie, jak i poza zawodami u sportowców płci męskiej." }
  ],
  "name": "Clomid (Clomiphene Citrate)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Clomiphene-citrát, Merrell 1956 szintézis, FDA-jóváhagyott (1967) női infertilitásra (ovulációs disfunkció). Racém keverék (~62% zuclomiphene estrogenikus + ~38% enclomiphene antiestrogenikus). Utóbbi a PCT-aktív fél. Off-label male hipogonadizmus + AAS-PCT secondary-standard SERM.",
  "description": "A Clomid (Clomiphene-citrát) egy non-szteroidal trifeniletilén-szerkezetű SERM, amelyet 1956-ban Frank Palopoli szintetizált a Merrell Dow Pharmaceuticals-nél. FDA-jóváhagyást 1967-ben kapott női anovulációs infertilitásra — ma az ovuláció-indukciós protokollok klasszikus első lépése. A molekula sajátos kettős szerkezete miatt mérföldkő a SERM-történelemben: racém keverékben szintetizálódik, mintegy 62% zuclomiphene (cisz-izomer, estrogenikus parciális agonist, hosszú felezésű ~5-7 hét akkumulációval) és 38% enclomiphene (transz-izomer, antiestrogenikus, ~5 nap felezés). A PCT-aktivitást elsősorban az enclomiphene fél hajtja: a pituiter ER-α kompetitív antagonizmusa szabaddá teszi a GnRH-szekréciót, így LH/FSH-emelkedés → endogén testosterone-recovery. A zuclomiphene-fél lassan akkumulálódik, és gyenge intrinsic estrogenikus aktivitást ad — ezzel a Clomid jellegzetes \"érzelmes\" hangulatprofilját okozza (depresszió, érzékenység, szemenkénti komikus könny). A Clomid ezért hatékony, de \"mocskos\" SERM: az enclomiphene-aktivitás miatt a HPTA-restart erősebb mint Nolvadex-en (különösen az FSH-hatás), de a hangulatzavar gyakoribb. Modern AAS-PCT golden-standard: Nolvadex elsőként választott, Clomid backup vagy stack (Karavolos 2015). WADA-tilos férfi versenyzőkre (S4).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Non-szteroidal SERM, racém keverék (62% zuclo + 38% enclo)"},
    {"label": "Adagolás (PCT)", "value": "50 mg/nap × 1-2 hét, majd 25 mg/nap × 2-4 hét"},
    {"label": "Felezési idő", "value": "Zuclomiphene ~5-7 hét akkumulálódó / enclomiphene ~5 nap"},
    {"label": "Hatáskezdet", "value": "LH-emelkedés 5-10 nap, Test-recovery 3-4 hét"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx (női indikáció), off-label férfi-hipogonadizmus, WADA S4 (banned)"}
  ],
  "mechanism": "A Clomid racém keverék két szerkezetileg eltérő izomerből: zuclomiphene (cisz-) és enclomiphene (transz-). A két fél ellentétes mechanikus profillal rendelkezik: zuclomiphene parciális ER-agonist (estrogenikus aktivitást ad endometriumon, csonton, központi idegrendszeren), enclomiphene tiszta ER-antagonist a pituiterben. A PCT-aktivitást az enclomiphene-fél hajtja: ER-α kompetitív antagonizmus → GnRH-disinhibíció → LH (különösen erős) és FSH-emelkedés → testicular testosterone-recovery + spermatogenezis-támogatás. A zuclomiphene-fél lassan akkumulálódik (terminál-akkumuláció 5-7 hét chronic use után), és parciálisan ellensúlyozza az enclomiphene-effektet — ezért egy hosszú Clomid-protokoll (>8 hét) gyengébb HPTA-restartot ad mint egy 4-6 hetes. A zuclomiphene központi idegrendszeri ER-α-agonizmusa magyarázza a Clomid jellegzetes hangulatzavarát (érzelmes labilitás, depressziv hangulat). Modern enclomiphene-only formuláció (Androxal) tisztább, de nem FDA-jóváhagyott (Repros Phase III 2014-2016, CRL 2016).",
  "legalStatus": "USA: FDA-jóváhagyott 1967 (Clomid, női ovulációs disfunkció), Schedule N/A (nem kontrollált). Off-label használat férfi-hipogonadizmusra + AAS-PCT 1980-as évektől széles körű. EU: EMA-jóváhagyott (Clomid, Pergotime, Clomifen Sandoz Rx). HU: törzskönyvezett (Clostilbegyt Rx). PL: törzskönyvezett (Clostilbegyt, Clomid Rx). WADA: S4.3 ösztrogén-receptor-modulátor (banned in-competition + out-of-competition férfiak).",
  "onsetTime": "LH-emelkedés 5-10 nap, Test-recovery 3-4 hét",
  "halfLife": "Zuclomiphene ~5-7 hét akkumulálódó / enclomiphene ~5 nap",
  "halfLifeActive": "Enclomiphene ~5 nap (PCT-aktív fél)",
  "interactionsWith": ["nolvadex", "enclomiphene", "hcg-perf", "anastrozol"],
  "aromatization": "Nem aromatizál — kompetitív ER-blokkolás, NEM aromatáz-gátlás. Klinikailag az E2 enyhén EMELKEDIK Clomidon (pituiter LH-disinhibíció → testicular E2-szintézis, zuclomiphene intrinsic ER-agonizmus további agonizmus). Magasabb mint Nolvadex-en az E2-rebound.",
  "hepatotoxicity": "Alacsony — non-steroidal, NEM 17α-alkilált. Hepatic stress minimális. Rendkívül ritka cholestasis-eset dokumentált fertility-trial-okon (FDA Clomid SmPC adverse reactions); AAS-PCT 4-6 hetes dose-on klinikailag nem jelent.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS, SERM)",
  "bindingAffinity": "ER-α kompetitív affinitás közepes-magas (enclomiphene Ki ~10 nM, zuclomiphene Ki ~50 nM). A zuclomiphene-akkumuláció miatt steady-state-en a két izomer egyensúlyi koncentrációja eltér a kezdeti racemáktól.",
  "detectionWindow": "WADA-akkreditált GC-MS/LC-MS/MS vizeletminta-detektálás 2-4 hónap a Clomid utolsó dózisa után (clomiphene + N-dezalkilozott metabolitok). Zuclomiphene-akkumuláció miatt hosszabb mint Nolvadex-detection.",
  "benefits": [
    "Erősebb LH/FSH-stimulus mint Nolvadex (különösen FSH-hatás, fertility-emphasis)",
    "Spermatogenesis-támogatás — fertility-restoration cél esetén előnyösebb mint Nolvadex",
    "Hatékony HPTA-restart hard-suppression után (deep-trough hosszú-ester ciklusok)",
    "Olcsó (~€5-10/box generic, Clostilbegyt EU)",
    "60+ év klinikai irodalom (1967 FDA-jóváhagyás, off-label male use 1980s-óta)",
    "Stackelhető Nolvadex-szel (klasszikus 'Clomid + Nolva' dual-SERM PCT)"
  ],
  "quickStart": [
    "Ester-timing: rövid-ester (Test-Prop, Tren-Ace) ciklus utolsó pin + 3-5 nap → Clomid indítás; hosszú-ester → 14-21 nap múlva",
    "Standard PCT: 50 mg/nap × 1-2 hét, majd 25 mg/nap × 2-4 hét (összesen 4-6 hét; NEM 8+ hét — zuclomiphene-akkumuláció gyengítené)",
    "Vízzel vegye, étkezés előtt vagy után indifferens (orális biodostupnošć magas ~85%)",
    "Hangulati zavar gyakori (40-50% felhasználón mild-moderate) — partner-monitor protokoll, mood-rating napló",
    "Dual-SERM 'Clomid + Nolva' protokoll: 50/50/25/25 Clomid + 20/20/20/20 Nolva (heti dose, 4 hét)",
    "Vision-side: scintillating scotoma > 100 mg/nap chronic, leállítás reverzibilis"
  ],
  "expectations": [
    {"label": "1-2. hét", "body": "LH/FSH emelkedés mérhető (vérvétel +7 nap). E2-rebound erős — gyno-flare lehetséges. Hangulat-disturbance kezd jelentkezni (érzelmes, sírós, depressziv pillanatok)."},
    {"label": "3-4. hét", "body": "Test-recovery folyamatban. Libido visszatér, energia-szint javul. Hangulati zavar enyhülni kezd ahogy a zuclomiphene-akkumuláció plateau-ba ér."},
    {"label": "5-6. hét", "body": "PCT vége. Test ≥ baseline 70-80%, LH/FSH visszaállt. Lipid-panel: HDL kissé emelkedik, TG-csökkenés."},
    {"label": "Post-PCT", "body": "Confirm bloodwork +6 hét után. Zuclomiphene-elszíkozás chronikus +8-10 hét. Ha LH/FSH < 50% baseline → szakorvos."}
  ],
  "quality": {
    "pure": [
      "Merrell Clomid 50 mg blister, Rx pharma-minőség (EU-pharmacy elérhető)",
      "Clostilbegyt 50 mg (Egis HU + Adamed PL) — pharma-minőség, törzskönyvezett",
      "Indiai generikum (Sunpharma Cipla Hi-Clom) — pharma-minőség, olcsó",
      "UGL liquid clomiphene: HPLC-tesztelt forrás kötelező — gyakran zuclo/enclo arány hibás"
    ],
    "caution": [
      "Hangulati zavar gyakori — pszichiátriai prediszpozíció (major depression, bipolar) esetén KONTRAINDIKÁLT",
      "Vision-side: scintillating scotoma 100+ mg/nap chronic, fundus-monitoring javasolt long-term",
      "OHSS-risk női fertility-protokolllokban (férfin nem releváns)",
      "Diabetes — fasting glucose enyhén emelkedhet (zuclomiphene indirekt cortisol-axis effect)"
    ],
    "avoid": [
      "Aktív máj-zavar (hepatic-disease relatív kontraindikáció)",
      "Pszichiátriai prediszpozíció (depresszió, bipolar, anxiety)",
      "Egyidejű terhesség (Pregnancy Category X)",
      "Anamnézisben ovariális tumor (női-paciens; férfi N/A)",
      "Magas-dose Clomid (>150 mg/nap) — extrém ritka indikáció, AAS-PCT-ben TILOS"
    ]
  },
  "interactions": [
    "SERM-stack (Clomid + Nolva): dose-csökkentés mindkettőn, klasszikus dual-PCT",
    "HCG-bridge: HCG → Clomid sequential-protocol AAS hard-suppression után",
    "AI co-administration: NEM ajánlott (mechanism-overlap, E2-crash rizikó)",
    "Alkohol: hangulati zavar fokozódhat, kerülendő PCT alatt",
    "Pszichoaktív szerek (SSRI, MAOI, antipszichotikum): mood-stabilizer-interakció, óvatos monitor",
    "Anabolikum/AAS: PCT alatti tervezett bridge → új ciklus 4-6 hét off-cycle után"
  ],
  "studies": [
    {"title": "Clomiphene Citrate Treatment as an Alternative Therapeutic Approach for Male Hypogonadism: Mechanisms and Clinical Implications.", "authors": "Wu YC, Sung WW", "journal": "Pharmaceuticals (Basel)", "pmid": "39338395"},
    {"title": "Outcomes of clomiphene citrate treatment in young hypogonadal men.", "authors": "Katz DJ, Nabulsi O, Tal R, Mulhall JP", "journal": "BJU Int", "pmid": "22044663"},
    {"title": "Enclomiphene citrate stimulates testosterone production while preventing oligospermia: a randomized phase II clinical trial comparing topical testosterone.", "authors": "Wiehle RD, Fontenot GK, Wike J, Hsu K, Nieschlag E, Saadabadi A", "journal": "Fertil Steril", "pmid": "25044085"},
    {"title": "Anabolic steroid-induced hypogonadism: diagnosis and treatment.", "authors": "Rahnema CD, Lipshultz LI, Crosnoe LE, Kovac JR, Kim ED", "journal": "Fertil Steril", "pmid": "24636400"},
    {"title": "Enclomiphene citrate: A treatment that maintains fertility in men with secondary hypogonadism.", "authors": "Earl JA, Kim ED", "journal": "Expert Rev Endocrinol Metab", "pmid": "31063005"}
  ],
  "faq": [
    {"q": "Clomid vs Nolvadex — mikor melyik?", "a": "Modern PCT-protokollokban Nolvadex elsőként választott (tisztább profil, kevesebb mellékhatás). Clomid akkor előny: (1) fertility-restoration cél (Clomid erősebb FSH-stimulus, jobb spermatogenezis-recovery); (2) hard-suppression hosszú-ester ciklusok után (deep-trough); (3) Nolvadex-intolerancia. Stackelhetők ('Clomid + Nolva' klasszikus dual-PCT, dose-csökkentés mindkettőn)."},
    {"q": "Vision side effects komolyak?", "a": "Ritka, dose-dependent. Klasszikus tünet: scintillating scotoma (villogó zigzag-mintázat látómezőben), >100 mg/nap chronic-on. AAS-PCT dose (25-50 mg × 4-6 hét) klinikailag elhanyagolható. Tünet esetén AZONNALI leállítás + ophthalmológus konzultáció. Reverzibilis általában 2-4 hét alatt."},
    {"q": "Miért érzik magukat sokan érzelmesnek Clomidon?", "a": "A zuclomiphene-fél (~62% a racém keverékben) parciális ER-agonist a központi idegrendszerben, és lassan akkumulálódik 5-7 hét chronic use során. A CNS-ER-agonizmus hangulati labilitást okoz: érzelmes pillanatok, könnyű sírás, depresszív hangulat-fluktuáció. Néhány felhasználó leírja \"mintha PMS-em lenne\" érzéssel. Mitigáció: Nolvadex switch vagy Androxal (enclomiphene-only) ha elérhető."},
    {"q": "Lehet együtt szedni Nolvadexszel?", "a": "Igen — \"Clomid + Nolva\" klasszikus AAS-PCT dual-SERM protokoll, mindkettő dose-csökkentett: 50/50/25/25 Clomid + 20/20/20/20 Nolva (heti dose). Indok: Clomid erősebb LH/FSH-stimulus + Nolvadex tisztább E2-blokád → szinergikus HPTA-restart, kevesebb mood-disturbance mint mono-Clomid. Karavolos 2015 (PMID 25778469) tárgyalja a kombinációt."},
    {"q": "HPTA recovery sebessége?", "a": "Test-recovery 3-4 hét alatt (Nolvadex-szel ~ ugyanazon idő), full HPG-axis recovery 8-12 hét. Spermatogenesis-recovery változó: rövid-ciklusok (4-8 hét) után 2-3 hónap, hosszú-ciklusok (12+ hét) vagy 'blast-and-cruise' után 6-12 hónap. Ha 12 hónap után sem helyreáll, szakorvos (urológus + endokrinológus) konzultáció."}
  ],
  "related": ["nolvadex", "enclomiphene", "raloxifene", "hcg-perf", "anastrozol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 37.5, "high": 50},
    "unit": "mg/nap (orális, 1-2x osztva)",
    "note": "Standard AAS-PCT: 50 mg/nap × 1-2 hét, majd 25 mg/nap × 2-4 hét (összesen 4-6 hét; NEM tovább 8 hét — zuclomiphene-akkumuláció ellenhatást ad). Dual-SERM protokoll: 50/50/25/25 + Nolva 20/20/20/20. Bloodwork pre-PCT, +14 nap, +PCT vége +6 hét."
  },
  "bloodwork": {
    "preCycle": {
      "label": "PCT előtt (utolsó AAS-dose + ester-clearance)",
      "timing": "Rövid-ester után 3-5 nap; hosszú-ester után 14-21 nap",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS sensitive-assay), LH, FSH, SHBG, Prolactin, lipid panel, ALT, AST, hemogram, fasting glucose.",
      "purpose": "Baseline a HPTA-restart trajectory-hez. Fasting glucose extra — Clomid enyhe glucose-emelkedést okozhat zuclomiphene-effekt révén."
    },
    "midCycle": {
      "label": "PCT közben (Clomid 2. hete)",
      "timing": "Clomid-indítás +14 nap",
      "markers": "LH, FSH (FSH-emelkedés Clomid-on erőteljesebb mint Nolvadex), Total Test, E2 (gyno-flare watch), Prolactin (Tren-ciklusok után), mood-rating napló, ALT/AST.",
      "purpose": "Az LH/FSH-rebound mérése. FSH-emelkedés erősebb Clomidon — fertility-restoration tracking. E2-rebound monitor. Mood-rating: ha súlyos depresszív hangulat → Nolvadex switch."
    },
    "postCycle": {
      "label": "PCT vége + recovery confirmation",
      "timing": "Clomid utolsó dose +2 hét és +6 hét",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, lipid panel, sperm-analysis (ha fertility-cél), ALT/AST.",
      "purpose": "Confirm: Test ≥ pre-cycle baseline 70-80%, LH/FSH ≥ kor-specifikus tartomány. Sperm-analysis 8-12 hét után fertility-emphasis cél esetén. Zuclomiphene-elszíkozás +8-10 hét tartós effect."
    },
    "cruise": {
      "label": "Hosszú távú használat — NEM AAS-PCT",
      "timing": "Női fertility-trial: 3-6 cycle; AAS-PCT: max 4-6 hét",
      "markers": "Cruise N/A — Clomid csak PCT-ben.",
      "purpose": "Chronic Clomid-use (>8 hét folyamatosan) gyengébb hatás zuclomiphene-akkumuláció miatt; kontraindikált AAS-PCT-ben."
    }
  }
}
