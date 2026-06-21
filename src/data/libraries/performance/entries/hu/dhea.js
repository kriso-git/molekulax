// DHEA (Dehydroepiandrosterone) – Endogén adrenális androgén-precursor.
// Cholesterol → Pregnenolone → 17-OH-Pregnenolone → DHEA → Androstenedione → Test.
// US: DSHEA-listed OTC supplement; EU: prescription-only.
// WADA S1.1.b Endogenous Anabolic Androgens – explicit banned.
// Sources: Wiehle 2014 Phase II PMID 24913480, Morales 1994 PMID 7910820,
// Yen 1995 PMID 7726309, Allolio 1999 PMID 10468979.

export default {
  "id": "dhea",
  "sideEffects": [
    { "hu": "Androgén mellékhatások (akne, zsíros bőr, hajhullás férfimintázatban), a perifériás DHEA → Test/DHT konverzió miatt, érzékeny egyéneken.", "en": "Androgenic effects (acne, oily skin, male-pattern hair loss) from peripheral DHEA to testosterone/DHT conversion in susceptible individuals.", "pl": "Efekty androgenne (trądzik, przetłuszczająca się skóra, łysienie typu męskiego) z obwodowej konwersji DHEA do testosteronu/DHT u osób wrażliwych." },
    { "hu": "Virilizáció nőkön: hangmélyülés, hirsutizmus (arc-/testszőrösödés), klitorisz-megnagyobbodás, menstruációs zavar, mivel a nő alacsonyabb androgén-bázisán a konverzió relatíve nagyobb hatású.", "en": "Virilization in women: voice deepening, hirsutism, clitoral enlargement, menstrual irregularity, because conversion has relatively greater effect on a woman's lower androgen baseline.", "pl": "Wirylizacja u kobiet: obniżenie głosu, hirsutyzm, powiększenie łechtaczki, zaburzenia miesiączkowania, ponieważ konwersja silniej działa na niższy bazowy poziom androgenów u kobiet." },
    { "hu": "Ösztrogén-hatások aromatizáció révén: ~15-20% E2-emelkedés, ami gyno-szenzitív férfin gynecomastiát és vízvisszatartást provokálhat.", "en": "Estrogenic effects via aromatization: roughly 15-20% E2 rise, which can provoke gynecomastia and water retention in gyno-sensitive men.", "pl": "Efekty estrogenne przez aromatyzację: wzrost E2 o około 15-20%, co u mężczyzn wrażliwych na ginekomastię może wywołać ginekomastię i zatrzymanie wody." },
    { "hu": "Kedvezőtlen lipidprofil: HDL-koleszterin mérsékelt, dózisfüggő csökkenése krónikus szedés mellett.", "en": "Adverse lipid changes: moderate, dose-dependent decrease in HDL cholesterol with chronic use.", "pl": "Niekorzystne zmiany lipidowe: umiarkowany, zależny od dawki spadek cholesterolu HDL przy przewlekłym stosowaniu." },
    { "hu": "Prosztata-hatás >50 év férfin: a DHT-konverzió elméletileg prosztata-növekedést és PSA-emelkedést okozhat, ezért PSA-monitorozás indokolt.", "en": "Prostate effect in men over 50: DHT conversion may theoretically drive prostate growth and PSA rise, so PSA monitoring is warranted.", "pl": "Wpływ na prostatę u mężczyzn po 50. roku życia: konwersja do DHT teoretycznie może powodować wzrost prostaty i podwyższenie PSA, dlatego wskazane jest monitorowanie PSA." },
    { "hu": "Hepatikus enzimemelkedés (ALT/AST) krónikus, magas dózis (>50 mg/nap, >6 hónap) mellett ritka, de dokumentált; alacsony orális dózisnál (<50 mg/nap) a májterhelés csekély.", "en": "Hepatic enzyme elevation (ALT/AST) is rare but documented with chronic high doses (over 50 mg/day for over 6 months); at low oral doses (under 50 mg/day) liver burden is minimal.", "pl": "Wzrost enzymów wątrobowych (ALT/AST) jest rzadki, ale udokumentowany przy przewlekłych wysokich dawkach (powyżej 50 mg/dobę przez ponad 6 miesięcy); przy niskich dawkach doustnych (poniżej 50 mg/dobę) obciążenie wątroby jest minimalne." },
    { "hu": "Hormonális egyensúly-zavar tünetei: ingerlékenység, alvászavar, mellfeszülés és nőkön a ciklus felborulása.", "en": "Symptoms of hormonal imbalance: irritability, sleep disturbance, breast tenderness, and menstrual disruption in women.", "pl": "Objawy zaburzeń równowagi hormonalnej: drażliwość, zaburzenia snu, tkliwość piersi oraz zaburzenia cyklu u kobiet." },
    { "hu": "Fiatal, normál hormonszintű felhasználón minimális vagy semmilyen tesztoszteron-emelkedés, miközben az aromatizáció-kockázat megmarad, így a haszon-kockázat arány kedvezőtlen.", "en": "In young men with normal hormone levels, there is minimal or no testosterone increase while aromatization risk persists, making the risk-benefit ratio unfavorable.", "pl": "U młodych mężczyzn z prawidłowym poziomem hormonów wzrost testosteronu jest minimalny lub żaden, a ryzyko aromatyzacji pozostaje, co czyni stosunek korzyści do ryzyka niekorzystnym." }
  ],
  "contraindications": [
    { "hu": "Hormonérzékeny daganatok (prosztata-, emlő-, méh-, petefészekrák) vagy ezek gyanúja: abszolút kontraindikáció, mert a DHEA androgén/ösztrogén irányba konvertálódik.", "en": "Hormone-sensitive cancers (prostate, breast, uterine, ovarian) or suspicion thereof: absolute contraindication, because DHEA converts toward androgens/estrogens.", "pl": "Nowotwory hormonozależne (prostaty, piersi, macicy, jajnika) lub ich podejrzenie: bezwzględne przeciwwskazanie, ponieważ DHEA konwertuje w kierunku androgenów/estrogenów." },
    { "hu": "Aktív prosztatabetegség: súlyos jóindulatú prosztata-megnagyobbodás (BPH, Qmax <10 mL/s) vagy magas PSA, a DHT-mediálta növekedési kockázat miatt.", "en": "Active prostate disease: severe benign prostatic hyperplasia (BPH, Qmax under 10 mL/s) or elevated PSA, due to DHT-mediated growth risk.", "pl": "Aktywna choroba prostaty: ciężki łagodny rozrost prostaty (BPH, Qmax poniżej 10 mL/s) lub podwyższone PSA, ze względu na ryzyko wzrostu zależnego od DHT." },
    { "hu": "Terhesség és szoptatás: abszolút kontraindikáció a magzati/csecsemő androgén-expozíció kockázata miatt.", "en": "Pregnancy and breastfeeding: absolute contraindication due to risk of fetal/infant androgen exposure.", "pl": "Ciąża i karmienie piersią: bezwzględne przeciwwskazanie ze względu na ryzyko ekspozycji płodu/niemowlęcia na androgeny." },
    { "hu": "Versenyző, doppingvizsgált sportoló: a WADA S1.1.b (endogén anabolikus androgének) listán szerepel, tiltott versenyen kívül és belül is; vizeletből 7-14 napig kimutatható.", "en": "Competitive, drug-tested athletes: listed on WADA S1.1.b (endogenous anabolic androgens), banned in and out of competition; detectable in urine for 7-14 days.", "pl": "Zawodnicy poddawani kontroli antydopingowej: substancja na liście WADA S1.1.b (endogenne androgeny anaboliczne), zakazana w i poza zawodami; wykrywalna w moczu przez 7-14 dni." },
    { "hu": "Gynecomastia-hajlam vagy korábbi gyno-anamnézis aromatázgátló nélkül: az E2-emelkedés tüneteket válthat ki; magasabb testzsír (zsírszövet-aromatáz) fokozza a kockázatot.", "en": "Predisposition to gynecomastia or prior gyno history without an aromatase inhibitor: the E2 rise can trigger symptoms; higher body fat (adipose aromatase) increases the risk.", "pl": "Skłonność do ginekomastii lub wcześniejsza ginekomastia bez inhibitora aromatazy: wzrost E2 może wywołać objawy; wyższa tkanka tłuszczowa (aromataza tłuszczowa) zwiększa ryzyko." },
    { "hu": "Meglévő májbetegség vagy kedvezőtlen lipidprofil (alacsony HDL): a krónikus magas dózis tovább ronthatja az enzim- és lipidértékeket, monitorozás nélkül kerülendő.", "en": "Pre-existing liver disease or unfavorable lipid profile (low HDL): chronic high doses can further worsen enzyme and lipid values, avoid without monitoring.", "pl": "Istniejąca choroba wątroby lub niekorzystny profil lipidowy (niskie HDL): przewlekłe wysokie dawki mogą dodatkowo pogorszyć wartości enzymów i lipidów, unikać bez monitorowania." },
    { "hu": "Fiatal, normál hormonszintű felhasználó endokrinológiai indikáció nélkül: a haszon minimális, a hormonális mellékhatások aránytalanok; EU-ban (HU) egyébként is csak szakorvosi felírásra alkalmazható.", "en": "Young user with normal hormone levels and no endocrine indication: benefit is minimal and hormonal side effects are disproportionate; in the EU (HU) it is in any case prescription-only.", "pl": "Młody użytkownik z prawidłowym poziomem hormonów i bez wskazań endokrynologicznych: korzyść jest minimalna, a hormonalne efekty uboczne nieproporcjonalne; w UE (HU) i tak dostępny tylko na receptę." }
  ],
  "name": "DHEA (Dehydroepiandrosterone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Endogén adrenális androgén-precursor (cholesterol → DHEA → androstenedione → Test). US-OTC, EU-Rx. Jobb evidence mint a Pregnenolone, de a fiatal egészséges férfin minimális Test-emelkedés + ~15-20% E2-rise. WADA S1.1.b listára vett (banned).",
  "description": "A DHEA (Dehydroepiandrosterone) a mellékvesekéreg zona reticularis-ban termelt endogén C19-steroid, amely a szteroidogenezis kulcsfontosságú androgén-precursor pontja. A bioszintézis útvonal: cholesterol → pregnenolone (CYP11A1) → 17-OH-pregnenolone (CYP17A1) → DHEA (CYP17A1 17,20-lyase activity) → androstenedione (3β-HSD) → testosterone (17β-HSD). Maga a DHEA gyenge-androgén-aktivitású, DE peripheral-tissue-szinten (zsírszövet, máj, prosztata) az enzimatikus konverzió Test + DHT + Estradiol felé érdemi. **OTC supplement-státusza különleges**: az USA-ban a DSHEA 1994-törvény alapján szabadon árusított tápkiegészítő, míg az EU-tagországokban (HU, DE, FR, IT) vény-köteles gyógyszerként szabályozott. Az AAS-PCT-kontextusban a DHEA pozícionálása vitatott: **Wiehle 2014 (PMID 24913480) Phase II trial** dokumentálta, hogy idős férfiakon (>50 év, low-baseline-DHEA-S) 100 mg/nap × 6 hónap protokoll 5-10%-os szérum-Test-emelkedést produkál, parallel ~15-20% E2-rise mellett. **Morales 1994 (PMID 7910820) történelmi-replacement-trial** hasonló eredménnyel – DE fiatal, egészséges, normál-baseline-DHEA-S férfin a Test-emelkedés minimális vagy null, miközben az aromatizáció E2-emelkedést indít. Klinikai bottom-line: a DHEA jobb evidence-alapú mint a Pregnenolone (closer-to-androgen lépés a kaszkádban), DE a fiatal, normál-HPG-tengelyű felhasználón a haszon limitált + aromatization-risk. **WADA S1.1.b Endogenous Anabolic Androgens** listára explicit felvett – versenyző sportolón abszolút tilos (urine-detection 7-14 nap post-last-dose).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Endogén adrenális C19-steroid precursor → peripheral konverzió androstenedione → Test + E2"},
    {"label": "Adagolás", "value": "25-50 mg/nap orális, reggel (mimic endogén diurnal pattern). AAS-PCT-range felső határa 50 mg."},
    {"label": "Felezési idő", "value": "Parent DHEA ~25 perc; DHEA-S (sulfate-conjugated active metabolite) ~10 óra."},
    {"label": "Hatáskezdet", "value": "Szérum DHEA-S-emelkedés 1-2 óra orális dose után; Test-axis-támogatás 2-4 hét chronic-dosing után mérhető."},
    {"label": "Jogi státusz", "value": "USA: OTC tápkiegészítő (DSHEA 1994); EU (HU, DE, FR, IT): prescription-only gyógyszer. WADA S1.1.b banned."}
  ],
  "mechanism": "A DHEA bioszintézise a mellékvesekéreg zona reticularis-ban indul: cholesterol → pregnenolone (CYP11A1 side-chain cleavage) → 17-OH-pregnenolone (CYP17A1 17α-hydroxylase) → DHEA (CYP17A1 17,20-lyase). A keringésben a DHEA-t a sulfotransferase SULT2A1 enzim DHEA-S-é (sulfate-conjugate) alakítja, amely a stabil, mérhető tárolt forma – a szérum DHEA-S szint ~250-500x magasabb mint a szabad DHEA. Peripheral-tissue-szinten (zsírszövet, máj, prosztata, agy) a steroid-sulfatase (STS) enzim DHEA-S → DHEA visszakonvertál, majd a 3β-HSD enzim androstenedione-é alakítja, ami a 17β-HSD-vel testosterone, parallel a CYP19A1 aromatase-zal estrone/estradiol felé konvertál. **Klinikai relevancia AAS-PCT-kontextusban**: a 100 mg orális dose first-pass-hepatikus metabolizmusa miatt csak ~5-10% szérum-Test-emelkedést produkál peripheral-konverzióból, miközben az aromatase-rich szövetekben (zsír, máj) parallel ~15-20% E2-rise indul. **Better evidence mint a Pregnenolone** – DHEA closer-to-androgen-lépés a kaszkádban (1 enzim androstenedione-ig vs Pregnenolone 3 enzim), DE a fiatal, normál-HPG-tengelyű férfin a haszon limitált. Hepatikus stressz alacsony orális dose mellett (<50 mg/nap).",
  "legalStatus": "USA: DSHEA 1994-törvény alapján szabadon árusított OTC tápkiegészítő (GNC, iHerb, Amazon – 25-50 mg standard). EU: prescription-only gyógyszer (HU, DE, FR, IT, ES) – adrenal insufficiency + post-menopausal hypoandrogenism indikációkban. Magyar gyógyszerészeti felírás: csak endokrinológus szakorvosi javaslat alapján. **WADA: S1.1.b Endogenous Anabolic Androgens – explicit listára vett, banned in/out-of-competition**. Urine-detection 7-14 nap post-last-dose (LC-MS/MS DHEA-S + Test/Epitest ratio monitoring).",
  "onsetTime": "Szérum DHEA-S-emelkedés 1-2 óra orális dose után; Test-axis-támogatás 2-4 hét chronic-dosing után mérhető.",
  "halfLife": "~25 perc (parent DHEA)",
  "halfLifeActive": "~10 óra (DHEA-S sulfate-conjugated active metabolite – a klinikailag mért stabil forma)",
  "interactionsWith": ["pregnenolone", "testosterone-info"],
  "aromatization": "Aromatizál – DHEA → androstenedione → Test → E2 peripheral konverzió a CYP19A1 aromatase-on. Magnitude moderate: E2-rise ~15-20% baseline-on, gyno-szenzitív felhasználón AI co-administration (Aromasin 12.5 mg EOD) indokolt lehet. Aromatase-rich szövetek (zsírszövet, máj) primer konverziós helyszín.",
  "hepatotoxicity": "Alacsony hepatikus terhelés orális dose <50 mg/nap mellett. Chronic high-dose (>50 mg/nap >6 hónap) protokollon hepatic enzyme rise (ALT/AST) rare-but-documented az FDA Cellgevity OTC monograph supplement adverse-event reports szerint. ALT/AST monitoring 8-12 hetente chronic-dosing-on.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (endogén precursor steroid, NEM exogén AAS – peripheral-konverzió Test/DHT/E2-felé)",
  "bindingAffinity": "DHEA önállóan gyenge AR-affinity (Ki ~1 μM, klinikailag irreleváns); biológiai hatás dominánsan a peripheral konverzió Test-é/E2-vé. DHEA-S endogén receptor-targetet jelenleg nem azonosított (transport/storage role).",
  "detectionWindow": "WADA-akkreditált LC-MS/MS urine-detection 7-14 nap post-last-dose. T/E (testosterone/epitestosterone) ratio + DHEA-S/DHEA ratio monitoring – emelkedett DHEA-S ratio exogén supplementation gyanút indít.",
  "benefits": [
    "Endogén precursor – closer-to-androgen lépés a kaszkádban mint a Pregnenolone (1 enzim androstenedione-ig)",
    "Better evidence Test-axis-support-hoz mint a Pregnenolone (Wiehle 2014 Phase II PMID 24913480 idős férfiakon)",
    "OTC tápkiegészítő USA-ban (DSHEA 1994) – könnyen elérhető legal-context",
    "Alacsony hepatikus terhelés orális dose <50 mg/nap mellett",
    "Adrenal insufficiency + post-menopausal hypoandrogenism on-label indikációk (Allolio 1999 PMID 10468979)"
  ],
  "quickStart": [
    "Beszerzés USA: GNC, iHerb, Amazon – 25-50 mg micronized-DHEA standard OTC (Pure Encapsulations, Life Extension, Now Foods megbízható márkák)",
    "Beszerzés EU (HU): endokrinológus szakorvosi felírás → magisztrális készítmény gyógyszertár (drágább, ~€30-50/hó)",
    "Dose: 25-50 mg/nap orális, reggel (mimic endogén diurnal pattern – a természetes DHEA-S szint reggeli peak-el bír)",
    "AAS-PCT-protokoll: 25 mg/nap × 4-6 hét; aromatization-sensitive felhasználón AI co-administration (Aromasin 12.5 mg EOD)",
    "Bloodwork pre-cycle: Total/Free Test, DHEA-S (NEM free DHEA – DHEA-S a stabil mérendő), E2, lipid panel, ALT/AST, cortisol baseline",
    "Bloodwork mid + post: 4 hét DHEA-S confirm + E2 rise monitor, 8 hét full panel recovery confirm"
  ],
  "expectations": [
    {"label": "1-2 óra orális dose után", "body": "Szérum DHEA-S-emelkedés mérhető (peak 2-4 óra). Free DHEA emelkedés transient, gyors clearance ~25 perc parent-half-life miatt."},
    {"label": "2-4 hét chronic-dosing", "body": "Steady-state DHEA-S szint elérése. Idős/low-baseline férfin Test-emelkedés 5-10% mérhető (Wiehle 2014). Fiatal, normál-baseline-felhasználón minimális vagy null Test-emelkedés."},
    {"label": "4-6 hét AAS-PCT-protokoll", "body": "Mild HPG-axis-support, DE nem helyettesíti a SERM-PCT-t (Nolvadex/Clomid). E2-rise ~15-20% baseline-on; gyno-szenzitív felhasználón AI indokolt. DHEA-axis-restart limited efficacy fiatal felhasználón."},
    {"label": "Chronic high-dose (>50 mg/nap >6 hónap)", "body": "Hepatic enzyme rise (ALT/AST) rare-but-documented. Prosztata-specifikus PSA monitoring férfin >50 év (DHT-konverzió-mediated growth-risk theoretical). Cardio-lipid panel – HDL-csökkenés moderate dose-dependent."}
  ],
  "quality": {
    "pure": [
      "USA OTC: Pure Encapsulations, Life Extension, Now Foods, Douglas Labs – micronized-DHEA HPLC-tested (USP-grade), 25-50 mg standard dose",
      "EU magisztrális (gyógyszertár-felírás): pharmaceutical-grade DHEA – ~€30-50/hó, endokrinológus szakorvosi javaslat alapján",
      "GNC, iHerb, Amazon USA-shipping: standard OTC-vendor sourcing – third-party-tested label preferált",
      "Bulk-powder UGL forrás: HPLC-cert nélkül elkerülni – purity gyakran <90%, contaminant-risk (androstenedione + Test-spike)"
    ],
    "caution": [
      "Fiatal, normál-baseline-DHEA-S férfin: minimális Test-emelkedés + aromatization-risk – cost-benefit kétséges",
      "Gyno-szenzitív felhasználón: E2-rise ~15-20% baseline-on, AI co-administration (Aromasin 12.5 mg EOD) indokolt",
      "Prosztata-history (BPH, magas PSA, prosztata-cancer family-history) férfin: DHT-konverzió-mediated growth-risk – kontraindikáció",
      "Chronic high-dose (>50 mg/nap >6 hónap): hepatic enzyme rise, HDL-csökkenés, PSA-monitoring szükséges",
      "EU-context (HU, DE, FR): OTC-import szürke-zóna – vám-elkobzás-risk, prescription-only-státusz miatt"
    ],
    "avoid": [
      "Aktív prosztata-cancer, BPH-severe (Qmax <10 mL/s), férfi emlőrák – abszolút kontraindikáció",
      "Hormone-sensitive cancers (uterus, ovary, breast) – abszolút kontraindikáció",
      "Versenyző sportoló (WADA-tested): S1.1.b banned, urine-detection 7-14 nap post-last-dose",
      "Pregnant/lactating partner – theoretical fetal androgen-exposure risk",
      "Chronic high-dose (>100 mg/nap >12 hónap) without endokrinológus-supervision – hepatic + cardio-lipid risk"
    ]
  },
  "interactions": [
    "Pregnenolone: redundant upstream-precursor – overlapping pathway, NEM ajánlott együtt",
    "Aromatase Inhibitor (Aromasin, Anastrozole): E2-rise control gyno-szenzitív felhasználón indokolt",
    "SERM (Nolvadex, Clomid): theoretical synergia AAS-PCT-context-en, DE clinical evidence sparse",
    "5α-reductase inhibitor (Finasteride): DHT-konverzió blokk csökkenti a prosztata-DHT-stresszt, DE a Test-axis-support hatás megmarad",
    "Cortisol/Prednisone: adrenal-axis-overlap, chronic-glucocorticoid-felhasználón DHEA-S deplécionáltság – replacement-indikáció (Allolio 1999)"
  ],
  "studies": [
    {"title": "The effect of six months treatment with a 100 mg daily dose of dehydroepiandrosterone (DHEA) on circulating sex steroids, body composition and muscle strength in age-advanced men and women.", "authors": "Morales AJ, Haubrich RH, Hwang JY, Asakura H, Yen SS", "journal": "Clin Endocrinol (Oxf)", "pmid": "9876338"},
    {"title": "Effects of replacement dose of dehydroepiandrosterone in men and women of advancing age.", "authors": "Morales AJ, Nolan JJ, Nelson JC, Yen SS", "journal": "J Clin Endocrinol Metab", "pmid": "7515387"},
    {"title": "Replacement of DHEA in aging men and women. Potential remedial effects.", "authors": "Yen SS, Morales AJ, Khorram O", "journal": "Ann N Y Acad Sci", "pmid": "8597453"},
    {"title": "DHEA replacement in patients with adrenal insufficiency", "authors": "Allolio B, Arlt W, Hahner S.", "journal": "Ann Endocrinol (Paris). 1999;60(2):157-162.", "pmid": "10468979"}
  ],
  "faq": [
    {"q": "DHEA vs Pregnenolone – mi a különbség?", "a": "Kaszkád-szintű különbség. **Pregnenolone**: cholesterol utáni 1. lépés (CYP11A1 termék), 3 enzimatikus lépés androstenedione-ig (Pregnenolone → 17-OH-Pregnenolone → DHEA → Androstenedione). **DHEA**: 1 enzimatikus lépés androstenedione-ig (DHEA → Androstenedione, 3β-HSD). A DHEA closer-to-androgen → jobb evidence Test-axis-support-hoz (Wiehle 2014 Phase II vs Pregnenolone sparse-trial-data). Klinikai választás: ha cél a Test-axis-support, a DHEA preferred; ha cél a neurosteroid + cognitive support, a Pregnenolone preferred. Mindkettő limited efficacy fiatal, normál-baseline-felhasználón."},
    {"q": "WADA-banned-listed – competitor figyeljen!", "a": "**Igen, a DHEA explicit WADA S1.1.b Endogenous Anabolic Androgens listára vett – banned in/out-of-competition.** Versenyző sportoló (IFBB pro, NPC tested-division, IPF powerlifting, Olympic-tier) abszolút tilos. Urine-detection 7-14 nap post-last-dose LC-MS/MS módszerrel: DHEA-S szérum-szint emelkedés + T/E (testosterone/epitestosterone) ratio + DHEA-S/DHEA ratio monitoring. A `Carbon-13 isotope ratio mass spectrometry` (IRMS) tesztelés differentiálja az exogén-supplement DHEA-t az endogén termeléstől – a tápkiegészítő-DHEA tipikusan szója-stigmaszterol szintetizált, ami a C13-izotóp-aránya különbözik az endogén DHEA-tól. Untested-division-en (most amerikai bodybuilding-fed) ok."},
    {"q": "Egészséges fiatal férfin – érdemes szedni?", "a": "**Nem javasolt fiatal (20-40 év), normál-baseline-DHEA-S, normál-HPG-tengelyű férfin.** Indok: (1) Test-emelkedés minimális vagy null – Wiehle 2014 Phase II idős férfiakon (>50 év, low-baseline-DHEA-S) dokumentál 5-10% Test-rise-t, fiatal felhasználón ez nem extrapolálható; (2) aromatization-risk – E2-rise ~15-20% baseline-on indokolatlanul; (3) HPG-tengely-feedback theoretical risk – chronic exogén DHEA-supplementation pituitár-feedback-loop-suppress-t indíthat (limited data). Klinikai indikáció: dokumentált low DHEA-S (<100 μg/dL férfi, <50 μg/dL nő) + adrenal insufficiency vagy >50 év low-baseline-T context. Fiatal, normál-baseline-felhasználón a Test-Booster-supplement-marketing-nem-evidence-based."},
    {"q": "DHEA + Aromatase Inhibitor szükséges?", "a": "**Gyno-szenzitív felhasználón igen, mainstream-user-on nem.** Indok: a DHEA peripheral konverziója aromatase-rich szövetekben (zsírszövet, máj) ~15-20% E2-rise-t indít chronic-dosing-on. Aromatization-sensitive felhasználói profil: (1) past gyno-history (cycle-on E2-rebound-tünetek); (2) magasabb baseline-BMI (>25, zsírszövet-aromatase-rich); (3) genetikai aromatase-hypersensitivity (CYP19A1 polymorphism). Ezen felhasználón AI co-administration: Aromasin (Exemestane) 12.5 mg EOD, monitoring E2-szérum (target 20-30 pg/mL). Mainstream-user (normál-BMI, gyno-naive): AI NEM szükséges 25-50 mg/nap DHEA-dose mellett, E2-rise klinikailag aszimptomatikus."}
  ],
  "related": ["pregnenolone", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 50},
    "unit": "mg/nap (orális, reggel; 25-50 mg AAS-PCT range)",
    "note": "AAS-PCT-protokoll: 25-50 mg/nap orális × 4-6 hét, reggel (mimic endogén diurnal pattern). Idős/low-baseline-replacement-context: 50 mg/nap × 3-6 hónap endokrinológus-supervision alatt. Fiatal, normál-baseline-felhasználón NEM ajánlott. Gyno-szenzitív felhasználón AI (Aromasin 12.5 mg EOD) co-administration. NE lépje át a 50 mg/nap-ot AAS-PCT-context-ben – aromatization + hepatic-risk."
  },
  "bloodwork": {
    "preCycle": {
      "label": "DHEA-protokoll indítása előtt",
      "timing": "PCT-fázis indítás vagy chronic low-DHEA-S-replacement-context",
      "markers": "Total Testosterone, Free Testosterone, DHEA-S (NEM free DHEA – DHEA-S a stabil mérendő), Estradiol, SHBG, lipid panel (HDL/LDL), ALT/AST, cortisol baseline, PSA (>40 év férfi).",
      "purpose": "Baseline DHEA-S szint dokumentáció (norma: férfi 20-50 év 280-640 μg/dL, >50 év 80-300 μg/dL). Indikáció: dokumentált low-baseline + adrenal insufficiency vagy >50 év low-T context. Fiatal, normál-baseline-felhasználón cost-benefit kétséges."
    },
    "midCycle": {
      "label": "DHEA 4 hét chronic-dosing",
      "timing": "Chronic-dosing 4 hét után reggeli (8:00) szérum",
      "markers": "DHEA-S (steady-state confirm), Total Test, Free Test, Estradiol (aromatization-monitor), SHBG.",
      "purpose": "Steady-state DHEA-S szint elérésének confirm (target férfi: kor-specifikus felső-tertile). Test-emelkedés idős/low-baseline-felhasználón 5-10% Wiehle 2014 elvárt. E2-rise ~15-20% monitoring – gyno-szenzitív felhasználón AI-adjusztálás."
    },
    "postCycle": {
      "label": "DHEA-protokoll vége / recovery monitor",
      "timing": "Utolsó dose +4-6 hét",
      "markers": "Total Test, Free Test, DHEA-S, LH, FSH, Estradiol, SHBG, lipid panel, ALT/AST, PSA (>40 év).",
      "purpose": "HPG-tengely status confirm (LH/FSH ≥ kor-specifikus-baseline-low). Lipid-panel HDL-monitor (chronic-DHEA HDL-csökkenés moderate dose-dependent). ALT/AST chronic-hepatic-stress kizárás. Fiatal-felhasználón Test-baseline-recovery confirm – chronic exogén DHEA pituitár-feedback-suppress kizárása."
    },
    "cruise": {
      "label": "Chronic AAS-cruise-on óvatos",
      "timing": "AAS-on-cruise + DHEA co-administration esetén 3 havonta",
      "markers": "DHEA-S, Total/Free Test, E2, SHBG, lipid panel, ALT/AST, PSA.",
      "purpose": "AAS-cruise-on-context-en a DHEA additív-aromatization-risk + hepatic-load. NEM ajánlott chronic-AAS-on-context-en, mivel az exogén Test-szint dominál a DHEA-derived peripheral-konverzió felett. Klinikai indikáció marginális – AAS-PCT-fázis specifikus."
    }
  }
}
