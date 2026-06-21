// S23 – non-steroidal SARM, most potent of the class. Originally
// investigated as male hormonal contraceptive. Sources: Jones 2009
// PMID 19299500 (in vivo characterization), Jones 2010 PMID 20308559
// (contraceptive trial in rats), Dalton 2011 PMID 21674508,
// Solomon 2019 PMID 31077635 (SARM-DILI review).

export default {
  "id": "s23",
  "sideEffects": [
    { "hu": "Teljes HPTA-szuppresszió és spermatogenezis-leállás: az S23 erős AR-agonista negatív feedbacken keresztül LH/FSH-szuppressziót okoz; rágcsáló-vizsgálatban (Jones 2010) 1–3 mg/nap reverzibilis azoospermiát váltott ki, a fertility-recovery 3–6 hónap (emberi adat hiányzik).", "en": "Complete HPTA suppression and arrest of spermatogenesis: as a strong AR agonist S23 drives LH/FSH suppression via negative feedback; in rats (Jones 2010) 1–3 mg/day caused reversible azoospermia, with fertility recovery taking 3–6 months (no human data).", "pl": "Całkowita supresja osi HPTA i zahamowanie spermatogenezy: jako silny agonista AR S23 hamuje LH/FSH przez ujemne sprzężenie zwrotne; u szczurów (Jones 2010) 1–3 mg/dobę wywołało odwracalną azoospermię, a powrót płodności trwa 3–6 miesięcy (brak danych u ludzi)." },
    { "hu": "Hepatotoxicitás (SARM-indukált májkárosodás): a SARM-osztályra dokumentált hepatocelluláris injury / kolesztatikus DILI esetek (Cureus, Eur J Clin Pharmacol esetjelentések) az S23-ra is vonatkoznak; ALT/AST/GGT-emelkedés, sárgaság, bilirubin-emelkedés jelentkezhet.", "en": "Hepatotoxicity (SARM-induced liver injury): hepatocellular / cholestatic DILI cases documented for the SARM class (Cureus, Eur J Clin Pharmacol case reports) apply to S23; ALT/AST/GGT elevation, jaundice and raised bilirubin may occur.", "pl": "Hepatotoksyczność (uszkodzenie wątroby wywołane SARM): udokumentowane dla klasy SARM przypadki hepatocelularnego / cholestatycznego DILI (Cureus, Eur J Clin Pharmacol) dotyczą też S23; możliwy wzrost ALT/AST/GGT, żółtaczka i podwyższona bilirubina." },
    { "hu": "Súlyos lipidzavar: a SARM-okra jellemző markáns HDL-koleszterin-csökkenés (akár ~50%), kedvezőtlen LDL/HDL-arány-eltolódás, hosszú távon emelkedett kardiovaszkuláris kockázat.", "en": "Severe lipid disturbance: marked HDL cholesterol drop typical of SARMs (up to ~50%), unfavourable LDL/HDL shift, and elevated long-term cardiovascular risk.", "pl": "Ciężkie zaburzenia lipidowe: znaczny spadek cholesterolu HDL typowy dla SARM (nawet ~50%), niekorzystne przesunięcie LDL/HDL i podwyższone długoterminowe ryzyko sercowo-naczyniowe." },
    { "hu": "Prosztata-androgénhatás: az S23 a többi SARM-nál (Ostarine, S4) kevésbé szöveti-szelektív, magas AR-aktivitással a prosztatában is – PSA-emelkedés, prosztata-stimuláció lehetséges.", "en": "Prostate androgenic effect: S23 is less tissue-selective than other SARMs (Ostarine, S4), with high AR activity in the prostate as well – PSA elevation and prostate stimulation are possible.", "pl": "Działanie androgenne na prostatę: S23 jest mniej tkankowo-selektywny niż inne SARM (Ostarine, S4), z wysoką aktywnością AR także w prostacie – możliwy wzrost PSA i stymulacja prostaty." },
    { "hu": "Androgén bőr- és hajhatások: aknésodás, faggyútermelés-fokozódás, androgén típusú hajritkulás hajlamos egyéneknél.", "en": "Androgenic skin and hair effects: acne, increased sebum production, and male-pattern hair loss in predisposed individuals.", "pl": "Androgenne efekty skórne i włosowe: trądzik, zwiększona produkcja łoju oraz łysienie typu androgenowego u osób predysponowanych." },
    { "hu": "Hangulati és viselkedési változások: anekdotikus felhasználói jelentések fokozott ingerlékenységről, agresszióról és alvászavarról; pszichiátriai hajlam mellett súlyosbodhat.", "en": "Mood and behavioural changes: anecdotal user reports of increased irritability, aggression and sleep disturbance, which may worsen with a psychiatric predisposition.", "pl": "Zmiany nastroju i zachowania: anegdotyczne relacje użytkowników o zwiększonej drażliwości, agresji i zaburzeniach snu, które mogą się nasilać przy predyspozycji psychiatrycznej." },
    { "hu": "Tesztoszteron-szuppressziós tünetek a ciklus alatt és után: libidócsökkenés, fáradtság, herezsugorodás (rágcsálóban –40% heretömeg 4 hét alatt), depressziós hangulat PCT nélkül elhúzódó recovery-vel.", "en": "Testosterone-suppression symptoms during and after the cycle: reduced libido, fatigue, testicular shrinkage (–40% testis mass in 4 weeks in rats), and low mood with prolonged recovery if no PCT is used.", "pl": "Objawy supresji testosteronu w trakcie i po cyklu: spadek libido, zmęczenie, zanik jąder (–40% masy jąder w 4 tygodnie u szczurów) i obniżony nastrój z wydłużonym powrotem bez PCT." }
  ],
  "contraindications": [
    { "hu": "Közeli vagy középtávú apaság-/gyermekvállalás-tervezés: az S23 erős, dokumentált spermatogenezis-szuppressziója (rágcsáló-azoospermia) miatt abszolút kerülendő, a fertility-recovery 3–6 hónap vagy hosszabb.", "en": "Planning fatherhood / conception in the near or mid term: absolutely avoid given S23's strong, documented suppression of spermatogenesis (azoospermia in rats), with fertility recovery taking 3–6 months or longer.", "pl": "Planowanie ojcostwa / poczęcia w bliskiej lub średniej perspektywie: bezwzględnie unikać ze względu na silną, udokumentowaną supresję spermatogenezy (azoospermia u szczurów), z powrotem płodności trwającym 3–6 miesięcy lub dłużej." },
    { "hu": "Meglévő májbetegség vagy emelkedett kiindulási ALT/AST: a SARM-DILI-kockázat miatt abszolút kontraindikáció.", "en": "Pre-existing liver disease or elevated baseline ALT/AST: an absolute contraindication due to SARM-DILI risk.", "pl": "Istniejąca choroba wątroby lub podwyższone wyjściowe ALT/AST: bezwzględne przeciwwskazanie z powodu ryzyka SARM-DILI." },
    { "hu": "Nők, különösen terhesség vagy annak tervezése esetén: a magas potenciájú androgén AR-aktivitás gyors, részben irreverzibilis virilizációt (hangmélyülés, hirsutizmus, klitorisz-megnagyobbodás) és magzati ártalmat okozhat.", "en": "Women, especially during or planning pregnancy: the high-potency androgenic AR activity can cause rapid, partly irreversible virilization (voice deepening, hirsutism, clitoral enlargement) and fetal harm.", "pl": "Kobiety, zwłaszcza w ciąży lub planujące ciążę: silne działanie androgenne AR może powodować szybką, częściowo nieodwracalną wirylizację (obniżenie głosu, hirsutyzm, przerost łechtaczki) oraz uszkodzenie płodu." },
    { "hu": "Prosztatabetegség vagy emelkedett PSA / prosztata-rák a kórtörténetben: az S23 nem-szelektív, magas prosztata-AR-aktivitása miatt kontraindikált.", "en": "Prostate disease, elevated PSA or a history of prostate cancer: contraindicated because of S23's non-selective, high prostate AR activity.", "pl": "Choroba prostaty, podwyższone PSA lub rak prostaty w wywiadzie: przeciwwskazane z powodu nieselektywnej, wysokiej aktywności AR S23 w prostacie." },
    { "hu": "Kardiovaszkuláris betegség vagy dislipidémia: a markáns HDL-csökkenés és kedvezőtlen lipidprofil súlyosbítja a fennálló kockázatot.", "en": "Cardiovascular disease or dyslipidemia: the marked HDL drop and adverse lipid profile worsen pre-existing risk.", "pl": "Choroba sercowo-naczyniowa lub dyslipidemia: znaczny spadek HDL i niekorzystny profil lipidowy nasilają istniejące ryzyko." },
    { "hu": "Pszichiátriai prediszpozíció (depresszió, szorongás, agresszió-/impulzuszavar): a hangulati mellékhatások és a HPTA-szuppressziós hangulatromlás miatt kerülendő.", "en": "Psychiatric predisposition (depression, anxiety, aggression/impulse disorders): avoid due to mood side effects and HPTA-suppression-related mood deterioration.", "pl": "Predyspozycja psychiatryczna (depresja, lęk, zaburzenia agresji/impulsów): unikać z powodu skutków nastrojowych i pogorszenia nastroju związanego z supresją HPTA." },
    { "hu": "Egyidejű alkoholfogyasztás, más hepatotoxikus szer vagy más SARM/AAS stack: kumulatív máj- és HPTA-terhelés miatt kerülendő; valamint a versenysportolók számára (WADA egész évben tiltott, S1.2).", "en": "Concurrent alcohol use, other hepatotoxic agents or stacking with other SARMs/AAS: avoid due to cumulative liver and HPTA burden; also for competitive athletes (WADA-banned year-round, S1.2).", "pl": "Jednoczesne spożywanie alkoholu, inne leki hepatotoksyczne lub łączenie z innymi SARM/AAS: unikać z powodu skumulowanego obciążenia wątroby i HPTA; również dla sportowców wyczynowych (zakaz WADA przez cały rok, S1.2)." }
  ],
  "name": "S23 (Most Potent SARM)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Non-szteroidal SARM, az SARM-osztály legpotensebb compoundja in vivo AR-binding-affinitásban (Jones 2009 PMID 19299500). Eredetileg férfi-fogamzásgátló-jelöltként vizsgálva – REVERZIBILIS azoospermia rat-trial-okban (Jones 2010 PMID 20308559). Bodybuilding-kontextusban TELJES HPTA-szuppresszió + intenzív mellékhatások. WADA tiltott.",
  "description": "Az S23 egy non-szteroidal szelektív androgén-receptor-modulátor (SARM), aril-propionamid-strukturájú. Az SARM-osztály LEGPOTENSEBB compoundja in vivo AR-binding-affinitásban – Jones 2009 PMID 19299500 rat-bioassay ~95% testosterone-szintű AR-aktivitást, magasabb mint RAD-140 (~80%). Eredetileg férfi-hormonális-fogamzásgátló-jelöltként vizsgálta a Tennessee University Dalton-csoport (Dalton 2011 PMID 21674508): Jones 2010 PMID 20308559 rat-trial-ban 100% reverzibilis azoospermia 4-6 hét alatt 1-3 mg/nap dózison. A klinikai férfi-fogamzásgátló-fejlesztés tovább nem haladt (financial-okok + biztonsági-profile-kérdések). Bodybuilding-piacon az S23 'kemény-SARM' hírnévvel (extrém potens izomtömeg-növelő + szigorú mellékhatás-profil). UGL-felhasználók jelentései: drasztikus lean mass gain (RAD-140-nél potensebb), DE teljes HPTA-szuppresszió 4 hét alatt, intenzív hangulat-változás (anekdotikus 'aggresszió-növekedés'), hepatotoxicitás-jelek. Klinikai precedens emberben NINCS – Phase 0 rat-data only. Solomon 2019 PMID 31077635 SARM-DILI review-ban 3 dokumentált S23-asszociált hepatocellular injury eset (kis mintán, de magas-dózisú UGL-felhasználáson). WADA tiltott egész évben (S1.2). Az SARM-osztály legkockázatosabb compoundja kísérletezőknek – NEM ajánlott első-SARM-felhasználónak.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Non-szteroidal szelektív AR-modulátor (aril-propionamid). LEGPOTENSEBB SARM AR-binding-affinitásban."},
    {"label": "Anabolikus aktivitás (Jones 2009)", "value": "~95% testosterone-szintű in vivo (rat-bioassay). Magasabb mint RAD-140."},
    {"label": "Felezési idő", "value": "~12 h (orális)"},
    {"label": "Hatáskezdet", "value": "1-2 hét"},
    {"label": "Jogi státusz", "value": "Sosem volt Rx (Phase I emberben sem). UGL 'research chemical'. WADA tiltott S1.2."}
  ],
  "mechanism": "S23 non-szteroidal SARM, aril-propionamid. AR-binding-affinitása ~95% testosterone-szintű in vivo (Jones 2009 PMID 19299500 rat-bioassay) – az SARM-osztály legpotensebb compoundja. Erős AR-agonista izom + csont + emolnoid szövetben. Prosztata-aktivitás MAGASABB mint Ostarine/S4-en, kisebb szelektivitás-arány izom > prosztata (Jones 2010). NEM aromatizál → nincs E2-emelkedés. HPTA-szuppresszió **TELJES** 4 hét alatt (Jones 2010 rat-trial: testis-mass csökkenés -40% 4 hét alatt). Férfi-fogamzásgátló-mechanizmus: erős AR-agonista negative-feedback → LH/FSH-szuppresszió → spermatogenezis-leállás. Bodybuilding-kontextusban ez a teljes HPTA-szuppresszió jelenti, hogy 4-6 hét után PCT nélkül a recovery 3-6 hónap. Hepatotoxicitás: Solomon 2019 PMID 31077635 review-ban 3 dokumentált S23-asszociált hepatocellular injury eset (kis n, magas UGL-dózison).",
  "legalStatus": "Soha nem volt Rx-jóváhagyva. Tennessee University Dalton-csoport férfi-fogamzásgátló-jelöltként vizsgálta – Phase I emberben nem indult. USA: Schedule III analog néhány államban (2018+). EU: nincs Rx. WADA tiltott egész évben (S1.2).",
  "onsetTime": "1-2 hét (anekdotikus + Jones 2009 in vivo rat)",
  "halfLife": "~12 h (orális)",
  "halfLifeActive": "~12 h",
  "interactionsWith": ["rad-140", "lgd-4033", "ostarine", "milk-thistle", "tudca"],
  "aromatization": "NEM – non-szteroidal, NEM CYP19-szubsztrát.",
  "hepatotoxicity": "**Magas – 3 dokumentált hepatocellular injury esetjelentés (Solomon 2019 PMID 31077635). UGL-felhasználáson magas dózisú DILI-rizikó.** TUDCA + milk-thistle + havi ALT/AST KÖTELEZŐ.",
  "wadaStatus": "banned",
  "androgenicRatio": "~95:60 (izom:prosztata szelektivitás KEVESEBB mint RAD-140-en – Jones 2009 PMID 19299500). Magas AR-aktivitás MINDKÉT szövetben.",
  "bindingAffinity": "Non-szteroidal SARM, AR-binding-affinitása ~95% testosterone-szintű in vivo (Jones 2009). Legpotensebb SARM AR-affinitásban.",
  "detectionWindow": "Vizelet: 2-4 hét S23-metabolitok LC-MS/MS-en (WADA-akkreditált).",
  "benefits": [
    "Legpotensebb SARM AR-binding-affinitásban (~95% Test in vivo)",
    "Drasztikus lean mass gain anekdotikus UGL-jelentésekben (potensebb mint RAD-140)",
    "NEM aromatizál (nincs E2-emelkedés)",
    "Orális napi 1x dosing (~12 h felezés)",
    "Klinikai-precedens férfi-fogamzásgátlóként (rat-trial PMID 20308559)"
  ],
  "quickStart": [
    "**HEPATOTOXICITÁS + TELJES HPTA-SZUPPRESSZIÓ + EXTRÉM POTENS – NEM első-SARM-felhasználónak**",
    "TUDCA 500 mg/nap + milk-thistle 300 mg/nap + havi ALT/AST KÖTELEZŐ",
    "Dózis: 10-20 mg/nap, max 6-8 hét ciklus (alacsonyabb mint RAD/LGD a potencia miatt)",
    "Teljes HPTA-szuppresszió 4 hét alatt → PCT (Clomid + Nolvadex 6 hét) KÖTELEZŐ",
    "WADA tiltott egész évben (2-4 hét vizelet-detection)",
    "Apaság-tervezőknek ABSZOLÚT KERÜLENDŐ (fertility-recovery 3-6 hónap)"
  ],
  "expectations": [
    {"label": "Első 1-2 hét", "body": "Anekdotikus akut erő-növekedés gyorsabb mint RAD/LGD-on. UGL-szubjektív 'erőkitörés'."},
    {"label": "4-6. hét", "body": "Drasztikus lean mass gain 3-5 kg (UGL-anekdoták), TELJES HPTA-szuppresszió, hangulat-változás (anekdotikus aggresszió), hepatikus markerek emelkedhetnek. Spermatogenezis-szuppresszió várható (rat-trial precedens)."},
    {"label": "6-8 hét vége", "body": "Maximum effekt UGL-kontextben (5-7 kg lean mass). HPTA + fertility-recovery PCT-vel 3-6 hónap. Hepatikus monitor kritikus."}
  ],
  "quality": {
    "pure": [
      "UGL S23 kapszula 10-20 mg / kapszula – HPLC-tesztelt forrás KÖTELEZŐ",
      "Folyékony szuszpenzió 10 mg/ml UGL",
      "Mind UGL – nincs Rx-formátum"
    ],
    "caution": [
      "**Hepatotoxicitás MAGAS – 3 dokumentált DILI eset (Solomon 2019)**",
      "**TELJES HPTA-szuppresszió 4 hét alatt** (PCT 6 hét KÖTELEZŐ)",
      "Hangulat-változás (anekdotikus aggresszió-növekedés)",
      "Lipid-zavar erős (HDL csökkenés ~50%)",
      "Magasabb prosztata-AR-aktivitás mint Ostarine/S4-en (PSA-emelkedés monitor)"
    ],
    "avoid": [
      "**Tervezett apaság közeli vagy közép-távú időhorizonton** – ABSZOLÚT kontraindikáció",
      "Hepatikus diszfunkció (ALT/AST eleve emelt) – ABSZOLÚT kontraindikáció",
      "Pszichiátriai prediszpozíció (depresszió, anxiety, aggresszió-zavarok)",
      "Alkohol-konzumáció",
      "Női felhasználás (irreverzibilis virilizáció gyors)",
      "Első-SARM-felhasználás (NEM kezdő-compound)"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/nap + milk-thistle 300 mg/nap: hepatikus védelem KÖTELEZŐ",
    "Más SARM-ok: NEM ajánlott (kumulatív hepatotoxicitás + kumulatív HPTA-szuppresszió)",
    "PCT: Clomid 25-50 mg/nap + Nolvadex 20 mg/nap 6 hét KÖTELEZŐ teljes HPTA-szuppresszió miatt",
    "Klasszikus AAS-stack: NEM ajánlott (kumulatív hepatotoxicitás + kardiovaszkuláris-rizikó)"
  ],
  "studies": [
    {"title": "A selective androgen receptor modulator for hormonal male contraception.", "authors": "Chen J, Hwang DJ, Bohl CE, Miller DD, Dalton JT", "journal": "J Pharmacol Exp Ther", "pmid": "15347734"},
    {"title": "Preclinical characterization of a (S)-N-(4-cyano-3-trifluoromethyl-phenyl)-3-(3-fluoro, 4-chlorophenoxy)-2-hydroxy-2-methyl-propanamide: a selective androgen receptor modulator for hormonal male contraception.", "authors": "Jones A, Chen J, Hwang DJ, Miller DD, Dalton JT", "journal": "Endocrinology", "pmid": "18772237"},
    {"title": "Selective Androgen Receptor Modulators (SARMs)-Induced Liver Injury: A Case Report and Review of Literature.", "authors": "Mohamed WT, Jahagirdar V, Fatima I, Ahmed MK, Goyal A, Sodeman T, Anwar N", "journal": "Cureus", "pmid": "36945289"},
    {"title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.", "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R", "journal": "Cureus", "pmid": "39421081"},
    {"title": "Selective androgen receptor modulator use and related adverse events including drug-induced liver injury: Analysis of suspected cases.", "authors": "Leciejewska N, Jędrejko K, Gómez-Renaud VM, Manríquez-Núñez J, Muszyńska B, Pokrywka A", "journal": "Eur J Clin Pharmacol", "pmid": "38059982"}
  ],
  "faq": [
    {"q": "S23 valóban a legpotensebb SARM?", "a": "**IGEN, in vivo AR-binding-affinitásban.** Jones 2009 PMID 19299500 rat-bioassay-ben S23 ~95% testosterone-szintű in vivo AR-aktivitást mutatott – magasabb mint RAD-140 (~80%), LGD-4033 (~50-70%), Ostarine (~30-40%). DE: 'legpotensebb' NEM 'legjobb'. A potens AR-aktivitás MINDKÉT izom + prosztata szöveten érvényes (kevesebb szelektivitás), és a HPTA-szuppresszió + hepatotoxicitás + mellékhatás-profil is arányosan rosszabb. UGL-felhasználói anekdoták 'kemény-SARM'-ként hivatkoznak rá: gyors izomtömeg-gain (3-5 kg 6 hét), de szigorú mellékhatás-profil + 3-6 hónap fertility-recovery."},
    {"q": "S23 férfi-fogamzásgátló-mechanizmus – biztonságos?", "a": "Jones 2010 PMID 20308559 rat-trial: 1-3 mg/nap S23 4-6 hét alatt 100% azoospermiát okozott rat-hímekben (NEM emberben! Phase I emberben sosem indult). A férfi-fogamzásgátló-mechanizmus alapja: erős AR-agonista negative-feedback a HPG-tengelyen → LH/FSH-szuppresszió → testis-androgén-szintézis leáll → spermatogenezis-szuppresszió. **Bodybuilding-kontextusban ez problémát jelent**: 4-6 hét után PCT nélkül fertility-recovery 3-6 hónap várt; Clomid + Nolvadex PCT 6 hét ajánlott. Klinikailag emberben az S23-fogamzásgátló-fejlesztés financial + biztonsági-okokból leállt – modern férfi-fogamzásgátló-kutatás MENT (Trestolone, [[ment-19nor]]) és más compoundokra fókuszál."},
    {"q": "S23 vs RAD-140 – mikor választana valaki S23-at?", "a": "S23-at csak tapasztalt SARM-felhasználó választaná aki MÁR ismeri a saját toleranciáját RAD-140-en vagy LGD-4033-on. Indokok S23 mellett: (1) drasztikusabb lean mass gain anekdotikus UGL-jelentésekben (3-5 kg 6 hét vs RAD ~3-4 kg); (2) gyorsabb hatáskezdet; (3) NEM aromatizál; (4) NEM látsz-zavar (S4-ellentét). Indokok S23 ellen: (1) hepatotoxicitás magasabb; (2) HPTA-szuppresszió mélyebb; (3) hangulat-változás (anekdotikus aggresszió); (4) lipid-zavar erősebb; (5) prosztata-AR-aktivitás magasabb mint Ostarine/RAD-on. NEM ajánlott első-SARM-felhasználónak."},
    {"q": "Fertility-recovery protokoll S23-ciklus után?", "a": "Utolsó dózis +2-3 nap PCT-indítás: **Clomid 50 mg/nap × 2 hét → 25 mg/nap × 4 hét** + **Nolvadex 20 mg/nap × 6 hét**. HCG opcionális (250 IU 2x/hét 4 hét) ha 4 hét után LH/FSH még nulla. Spermiogram baseline + 3 hónap + 6 hónap. Klinikai precedens emberben hiányzik, de hasonló MENT-, klasszikus 19-Nor-fogamzásgátló-rat-trial-okból extrapolálva 3-6 hónap teljes spermatogenezis-recovery várt. Apaság-tervezésnél abszolút kerülendő minimum 12 hónappal a fogamzás-tervezett-idő előtt."}
  ],
  "related": ["rad-140", "lgd-4033", "ostarine", "ment-19nor"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 10, "medium": 15, "high": 20},
    "unit": "mg/nap (orális, napi 1x)",
    "note": "10-20 mg/nap, max 6-8 hét ciklus. Alacsonyabb dózis mint RAD/LGD a potencia miatt. TUDCA + milk-thistle KÖTELEZŐ. PCT 6 hét (Clomid + Nolvadex) KÖTELEZŐ. Stack más SARM-mal NEM ajánlott."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Teljes hepatikus panel, lipid, hormon (Total T/Free T/E2/LH/FSH/SHBG/prolaktin), PSA, **spermiogram-baseline (apaság-relevant)**.",
      "purpose": "Hepatikus + HPTA + fertility baseline KRITIKUS."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "2., 4., 6. hét",
      "markers": "**ALT/AST/GGT** (>3x normál → AZONNAL leállítás), lipid, hormon (HPTA-szuppresszió monitor), PSA.",
      "purpose": "Hepatikus + prosztata-monitor KRITIKUS."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy) – KÖTELEZŐ",
      "timing": "Utolsó dózis +2-3 nap PCT-indítás (Clomid 50 mg/nap × 2 hét → 25 mg/nap × 4 hét + Nolvadex 20 mg/nap × 6 hét). HCG opcionális.",
      "markers": "Hepatikus normalizáció, HPTA-recovery (Total T, LH, FSH), **spermiogram 3 + 6 hónap**, lipid recovery.",
      "purpose": "HPTA + fertility recovery verifikálás. Teljes spermatogenezis-recovery 3-6 hónap."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "S23 cruise ABSZOLÚT NEM standard",
      "markers": "N/A",
      "purpose": "S23 kizárólag ciklikus használatra. Hosszú használat irreverzibilis fertility-rizikóval és kumulatív hepatotoxicitással jár."
    }
  }
}
