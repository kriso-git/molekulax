// SLU-PP-332 – ERRα synthetic-agonist, Salk 2024 preprint (Billon et al. bioRxiv).
// Exercise-mimetic preklinikai bizonyíték (csak egér), NEM humán-trial 2026 januárig.
// Sources: Billon 2024 bioRxiv preprint, Geng 2024 ERRα Nat Commun PMID 38233408,
// Misra 2017 ERR-pathway J Mol Endocrinol PMID 28381435, Audet-Walsh 2015
// Mol Endocrinol PMID 25587719.

export default {
  "id": "slu-pp-332",
  "sideEffects": [
    { "hu": "Ismeretlen humán mellékhatásprofil: nincs Phase 1 vagy bármilyen humán klinikai vizsgálat, így a humán toxicitás, mellékhatás-spektrum és tolerálhatóság teljesen feltérképezetlen (kizárólag preklinikai egéradat, Billon 2024 preprint).", "en": "Unknown human side-effect profile: no Phase 1 or any human clinical trial exists, so human toxicity, the side-effect spectrum and tolerability are entirely uncharacterized (preclinical mouse data only, Billon 2024 preprint).", "pl": "Nieznany profil działań niepożądanych u ludzi: brak badania fazy 1 i jakiegokolwiek badania klinicznego u ludzi, dlatego toksyczność, spektrum działań niepożądanych i tolerancja są całkowicie niezbadane (wyłącznie dane przedkliniczne z myszy, Billon 2024 preprint)." },
    { "hu": "Potenciális proliferatív/onkológiai kockázat: az ERRα tartós aktivációja több daganattípusban (emlő, prosztata) rossz prognózissal és proliferációval asszociált jelátviteli útvonal, a krónikus agonizmus elméleti tumor-promóló kockázata humán adat híján nem zárható ki (Audet-Walsh 2015, PMID 25587719).", "en": "Potential proliferative/oncologic risk: sustained ERRα activation is a signaling pathway associated with proliferation and poor prognosis in several cancers (breast, prostate); a theoretical tumor-promoting risk of chronic agonism cannot be excluded in the absence of human data (Audet-Walsh 2015, PMID 25587719).", "pl": "Potencjalne ryzyko proliferacyjne/onkologiczne: trwała aktywacja ERRα to szlak sygnałowy powiązany z proliferacją i złym rokowaniem w kilku nowotworach (pierś, prostata); teoretycznego ryzyka promowania nowotworu przy przewlekłym agonizmie nie można wykluczyć przy braku danych u ludzi (Audet-Walsh 2015, PMID 25587719)." },
    { "hu": "Lehetséges kardiális hatások: az ERRα a szívizom mitokondriális bioenergetikájának központi szabályozója, a farmakológiai agonizmus szívizom-energetikára gyakorolt hatása humánban dokumentálatlan, kardiotoxicitás vagy ritmuszavar nem zárható ki.", "en": "Possible cardiac effects: ERRα is a central regulator of myocardial mitochondrial bioenergetics; the impact of pharmacologic agonism on cardiac energetics is undocumented in humans, and cardiotoxicity or arrhythmia cannot be excluded.", "pl": "Możliwe działania kardiologiczne: ERRα jest centralnym regulatorem bioenergetyki mitochondrialnej mięśnia sercowego; wpływ agonizmu farmakologicznego na energetykę serca nie jest udokumentowany u ludzi, a kardiotoksyczności lub zaburzeń rytmu nie można wykluczyć." },
    { "hu": "Ismeretlen máj- és veseterhelés: bár az egér-trial 6 hét alatt nem dokumentált ALT/AST emelkedést (Billon 2024 preliminary), humán hepato- és nefrotoxicitási adat nincs, a krónikus orális adagolás biztonságossága feltérképezetlen.", "en": "Unknown hepatic and renal burden: although the mouse trial reported no ALT/AST elevation over 6 weeks (Billon 2024 preliminary), there is no human hepato- or nephrotoxicity data, and the safety of chronic oral dosing is uncharacterized.", "pl": "Nieznane obciążenie wątroby i nerek: chociaż w badaniu na myszach nie odnotowano wzrostu ALT/AST w ciągu 6 tygodni (Billon 2024 wstępne), brak danych o hepato- i nefrotoksyczności u ludzi, a bezpieczeństwo przewlekłego dawkowania doustnego jest niezbadane." },
    { "hu": "Feketepiaci (UGL) eredet veszélyei: legitim gyógyszerészeti forrás nem létezik, a 2024-2025-ös research-chemical kínálat hamisítási, alultesztelt tisztaság-, szennyeződés- és degradációs kockázattal jár (COA gyakran hiányos vagy fiktív).", "en": "Hazards of black-market (UGL) sourcing: no legitimate pharmaceutical source exists; the 2024-2025 research-chemical supply carries risks of counterfeiting, under-tested purity, contamination and degradation (the COA is often missing or fabricated).", "pl": "Zagrożenia związane z pochodzeniem z czarnego rynku (UGL): nie istnieje legalne źródło farmaceutyczne; podaż research chemical z lat 2024-2025 niesie ryzyko podrabiania, niezweryfikowanej czystości, zanieczyszczenia i degradacji (COA często brakuje lub jest sfałszowane)." },
    { "hu": "Nem validált adagolás: az 50 mg/kg/nap egér-dózis nem extrapolálható közvetlenül humán dózisra (testfelület-korrekció és fajkülönbség miatt), így a túladagolás és a terápiás ablak teljesen ismeretlen.", "en": "Non-validated dosing: the 50 mg/kg/day mouse dose cannot be extrapolated directly to a human dose (due to body-surface-area correction and species differences), so the risk of overdose and the therapeutic window are entirely unknown.", "pl": "Niezwalidowane dawkowanie: dawki myszy 50 mg/kg/dobę nie można bezpośrednio ekstrapolować na dawkę u człowieka (z powodu korekty na powierzchnię ciała i różnic gatunkowych), więc ryzyko przedawkowania i okno terapeutyczne są całkowicie nieznane." }
  ],
  "contraindications": [
    { "hu": "Bármilyen humán használat klinikai vizsgálaton kívül: 2026 januárjában nincs jóváhagyott indikáció, nincs aktív Phase 1 trial, így legitim humán alkalmazás nem létezik, az önkísérletezés nem javasolt.", "en": "Any human use outside a clinical trial: as of January 2026 there is no approved indication and no active Phase 1 trial, so no legitimate human use exists and self-experimentation is not advised.", "pl": "Jakiekolwiek użycie u ludzi poza badaniem klinicznym: na styczeń 2026 nie ma zatwierdzonego wskazania ani aktywnego badania fazy 1, więc nie istnieje legalne zastosowanie u ludzi, a samodzielne eksperymentowanie nie jest zalecane." },
    { "hu": "Aktív vagy korábbi malignitás, illetve hormonérzékeny daganat: az ERRα-agonizmus proliferatív jelátviteli útvonalat aktivál, ami daganatos kontextusban elméletileg kontraindikált (Audet-Walsh 2015, PMID 25587719).", "en": "Active or prior malignancy, or hormone-sensitive cancer: ERRα agonism activates a proliferative signaling pathway, which is theoretically contraindicated in an oncologic context (Audet-Walsh 2015, PMID 25587719).", "pl": "Czynny lub przebyty nowotwór złośliwy bądź nowotwór hormonozależny: agonizm ERRα aktywuje proliferacyjny szlak sygnałowy, co jest teoretycznie przeciwwskazane w kontekście onkologicznym (Audet-Walsh 2015, PMID 25587719)." },
    { "hu": "Terhesség és szoptatás: nincs reprodukciós toxicitási vagy teratogenitási adat, a magzati/csecsemő-expozíció kockázata ismeretlen, ezért kerülendő.", "en": "Pregnancy and breastfeeding: there is no reproductive toxicity or teratogenicity data, the risk of fetal/infant exposure is unknown, and it should therefore be avoided.", "pl": "Ciąża i karmienie piersią: brak danych o toksyczności reprodukcyjnej lub teratogenności, ryzyko ekspozycji płodu/niemowlęcia jest nieznane, dlatego należy unikać." },
    { "hu": "Gyermek- és serdülőkor: nincs Phase 1 indikáció, a fejlődő szervezetre gyakorolt hatás teljesen feltérképezetlen, ezért nem alkalmazható.", "en": "Children and adolescents: there is no Phase 1 indication and the effect on a developing organism is entirely uncharacterized, so it must not be used.", "pl": "Dzieci i młodzież: brak wskazania do fazy 1, a wpływ na rozwijający się organizm jest całkowicie niezbadany, więc nie wolno stosować." },
    { "hu": "Fennálló kardiovaszkuláris betegség: az ERRα a szívizom mitokondriális energetikájának szabályozója, a farmakológiai agonizmus kardiális hatása humánban dokumentálatlan, ezért szívbetegségben kerülendő.", "en": "Pre-existing cardiovascular disease: ERRα regulates myocardial mitochondrial energetics, the cardiac impact of pharmacologic agonism is undocumented in humans, and it should therefore be avoided in heart disease.", "pl": "Istniejąca choroba sercowo-naczyniowa: ERRα reguluje energetykę mitochondrialną mięśnia sercowego, kardiologiczny wpływ agonizmu farmakologicznego nie jest udokumentowany u ludzi, dlatego należy unikać w chorobie serca." },
    { "hu": "Versenysportolók (WADA): bár SLU-PP-332 nem szerepel explicit a tiltólistán, az S0 'nem jóváhagyott anyag' gyűjtőklauzula minden Phase 2 előtti research-chemicalt tilt, így de facto WADA-tiltott, versenyben kerülendő.", "en": "Competitive athletes (WADA): although SLU-PP-332 is not explicitly listed, the S0 'non-approved substance' catch-all clause prohibits any pre-Phase 2 research chemical, so it is de facto WADA-banned and should be avoided in competition.", "pl": "Sportowcy wyczynowi (WADA): chociaż SLU-PP-332 nie jest wyraźnie wymieniony, klauzula zbiorcza S0 'substancja niezatwierdzona' zakazuje każdego research chemical przed fazą 2, więc jest de facto zakazany przez WADA i należy go unikać w zawodach." }
  ],
  "name": "SLU-PP-332",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "ERRα (Estrogen-related receptor alpha) synthetic-agonist, Salk 2024 preprint (Billon et al. bioRxiv) – preclinical-only, egér-trial exercise-mimetic evidence. NINCS humán PK / safety data; \"exercise-mimetic\" myth-marketing 2024 óta.",
  "description": "Az SLU-PP-332 egy szintetikus ERRα (Estrogen-related receptor alpha) agonista, amelyet 2024-ben a Salk Institute kutatócsoportja (Billon et al.) preprint formában publikált a bioRxiv-on. \"Exercise-mimetic\" pozícionálással kapott figyelmet a popularizáló sajtótól (Nature News briefing 2024), de az evidence-base kizárólag preclinical egér-data: 6-hetes 50 mg/kg/nap oral dose-on +50% endurance-capacity + mitokondriális-biogenesis-emelés a vázizomszövetben (Billon 2024 preprint). Mechanizmusa: ERRα nukleáris receptor szintetikus-agonist-kötődés → PGC-1α + mitokondriális-biogenesis-gén-transzkripció upregulation → vázizom-mitokondriális-density emelkedés + endurance-aerobic-capacity emelés. Humán-trial Phase 1 NEM aktív 2026 januárban, humán PK / safety / efficacy data ZERO. A blackmarket research-chemical UGL-piaci megjelenése 2024-2025 (Salk-paper publikálása nyomán) tipikus designer-research-chemical pattern: marketing-driven hype, evidence-base preclinical-only. Klinikai exercise-induced PGC-1α upregulation (Holloszy 1967, Hoppeler 1985 PMID 4082137) régóta dokumentált fiziológiai effekt – SLU-PP-332 ezen pharmacological-mimetic; \"exercise-mimetic\" marketing-claim NEM jelenti azt, hogy az endurance-training-effekt teljes spektruma reprodukálható (cardiovascular adaptáció, neuromuscular efficiency stb. NEM ERRα-mediated). MolekulaX research-chemical-class designer-purple (#a78bfa) accent-color, ugyanaz mint a 5-Amino-1MQ + BAM15 kategória – preclinical-only research-target framing.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "ERRα (Estrogen-related receptor alpha) szintetikus-agonist, PGC-1α + mitokondriális-biogenesis upregulation"
    },
    {
      "label": "Adagolás (preklinikai)",
      "value": "50-100 mg/nap PO (egér-dose-extrapolation, NO humán-trial validated)"
    },
    {
      "label": "Felezési idő",
      "value": "~6-8 óra (egér extrapoláció, NINCS humán PK)"
    },
    {
      "label": "Hatáskezdet",
      "value": "Mitokondriális-biogenesis-marker 2-4 hét egér-on; humán NEM dokumentált"
    },
    {
      "label": "Jogi státusz",
      "value": "Research-only – NEM FDA / EMA Rx, NEM Phase 1 humán-trial aktív 2026 januárban. WADA NEM explicit-listed, S0 catch-all + monitoring concern."
    }
  ],
  "mechanism": "Az SLU-PP-332 az ERRα (Estrogen-related receptor alpha, NR3B1) nukleáris-receptor szintetikus agonistája. Az ERRα egy orphán nukleáris receptor (endogén-ligand-mentes klasszifikáció, koaktivátor-binding-mediated aktiváció), amely a sejt-energia-metabolic-axis központi szabályozója: PGC-1α (peroxisome proliferator-activated receptor gamma coactivator-1 alpha) koaktivátorral heterodimerizálva direkt génexpressziós aktivációt indít a mitokondriális-biogenesis kulcs-gén-családokon (TFAM, NRF1, NRF2, CytC, mitokondriális-electron-transport-chain alegységek). Az exercise-induced endogén ERRα-aktiváció (Holloszy 1967 endurance-training kísérletek-óta dokumentált) PGC-1α-koaktivátor-szintézis-emelés-vel kezdődik, ami ERRα-aktiváció-szintű mitokondriális-biogenesis-induction. Az SLU-PP-332 ezt a pathway-t pharmacologically by-pass-olja: PGC-1α-koaktivátor-szintézis-emelés nélkül direkt ERRα-agonist-aktiváció. Billon 2024 preprint preclinical egér-trial demonstrálta, hogy chronic oral dose 50 mg/kg/nap 6 hét vázizom-mitokondriális-density + endurance-capacity emelést okoz, hasonló nagyságrendben mint egy 4-hetes endurance-training-protokoll C57BL/6 egéren. Klinikai relevancia: humán-trial NEM dokumentált 2026 januárban, ezért humán-efficacy + safety-profile feltérképezetlen.",
  "legalStatus": "USA: NEM FDA-jóváhagyott, research-chemical-class (Schedule N/A, NEM forgalombahoz jogosult). EU: NEM EMA-jóváhagyott. HU + PL: NEM törzskönyvezett. Phase 1 humán-trial NEM aktív 2026 januárban (Salk Institute Billon-group preprint-state preclinical). WADA: NEM explicit-listed, DE S0 'non-approved substance' catch-all veszély + S4.5 exercise-mimetic-classification-concern (WADA 2025 monitoring program preliminary).",
  "onsetTime": "Mitokondriális-biogenesis-marker 2-4 hét egér-on; humán NEM dokumentált",
  "halfLife": "~6-8 óra (egér extrapoláció)",
  "interactionsWith": [
    "bam15",
    "mots-c",
    "gw-501516"
  ],
  "aromatization": "Nem aromatizál (nem szteroid hatóanyag – ERRα synthetic-agonist). Az ERRα NEM klasszikus-ösztrogén-receptor (ER-α/β), nincs estrogenic-binding-activity vagy CYP19-interakció.",
  "hepatotoxicity": "Ismeretlen – research-chemical / preclinical-only, hosszú-távú humán adat hiányzik. Egér-trial chronic 6-hét 50 mg/kg/nap dose-on ALT/AST emelkedés NEM dokumentált (Billon 2024 preprint preliminary), de humán-trial-data ZERO.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS, ERRα synthetic-agonist)",
  "bindingAffinity": "ERRα receptor Ki ~50-100 nM (Billon 2024 preprint preliminary). ERRβ + ERRγ szelektivitás ~10x preferenciálisan ERRα-irányba.",
  "detectionWindow": "NINCS humán-detection-validated assay 2026 januárban. WADA-akkreditált LC-MS/MS detection-method preclinical-only egér-plazma-baseline-on dolgozott (Billon 2024 preprint), humán-validation pending.",
  "benefits": [
    "ERRα synthetic-agonist mechanism – PGC-1α + mitokondriális-biogenesis-gén upregulation",
    "Exercise-mimetic preclinical evidence egér-on (Billon 2024 Salk preprint bioRxiv)",
    "Mitokondriális-density emelés vázizomszövetben preclinical egér-trial-on",
    "Endurance-aerobic-capacity emelés ~50% C57BL/6 egér-on 6-hét chronic dose-on",
    "PGC-1α-pathway pharmacologically mimicked endurance-training nélkül egér-modelben",
    "Salk Institute publication-quality preclinical mechanism-of-action data"
  ],
  "quickStart": [
    "Edukatív kontextus: research-chemical, preclinical-only, humán-trial NEM aktív 2026 januárban",
    "NEM Rx-jóváhagyott semelyik jurisdikcióban; legitim humán-use NEM létezik 2026 januárban",
    "\"Exercise-mimetic\" marketing-claim NEM jelenti azt, hogy az endurance-training-effekt teljes spektruma reprodukálható",
    "Egér-dose 50 mg/kg/nap NEM extrapolálható direkt humán-dose-ra (BSA-correction + species-difference)",
    "Storage: oral-research-chemical lyophilized powder room-temperature stable",
    "Blackmarket UGL-source 2024-2025 designer-research-chemical pattern – counterfeit-risk + safety-data hiányzik",
    "NEM ajánlott humán-experimentation Phase 1-trial-on kívül"
  ],
  "expectations": [
    {
      "label": "1-2. hét",
      "body": "NINCS humán-evidence 2026 januárban. Egér-modell-on (Billon 2024 preprint) mitokondriális-biogenesis-marker upregulation kezdődik 2 hét után. Humán-effekt-időzítés feltérképezetlen."
    },
    {
      "label": "3-4. hét",
      "body": "Egér-modelben endurance-capacity emelés mérhető (treadmill-test +25-30% baseline-on). Vázizom-mitokondriális-density emelkedés electron-microscopy-on dokumentált. Humán-trial NEM aktív, humán-effekt NEM jósolható."
    },
    {
      "label": "5-6. hét + cycle exit",
      "body": "Egér-trial steady-state endurance-capacity +50% baseline-on (Billon 2024 preprint preliminary). Mitokondriális-biogenesis-marker peak. Humán-cycle-exit-data NEM létezik – Phase 1 dose-finding trial Salk-pipeline 2026+ várható."
    }
  ],
  "quality": {
    "pure": [
      "Salk Institute Billon-lab research-batch – preclinical-only, NEM forgalombahoz jogosult",
      "Custom-synthesis specialized-chemistry vendor (Cayman Chemical, Sigma-Aldrich research-grade) – >95% HPLC purity",
      "Blackmarket UGL research-chemical-source 2024-2025: HPLC-tested COA hiányos, counterfeit + degradation-risk magas"
    ],
    "caution": [
      "Research-only status – NEM Rx-jóváhagyott humán-use semelyik jurisdikcióban",
      "Phase 1 humán-trial NEM aktív 2026 januárban – humán safety-profile ZERO",
      "Egér-dose 50 mg/kg/nap NEM extrapolálható direkt humán-dose-ra",
      "\"Exercise-mimetic\" marketing-claim túlhangsúlyozott, evidence preclinical-only",
      "Long-term ERRα-aktiváció proliferative-risk preclinical data inconclusive (Audet-Walsh 2015 ERR-cancer Mol Endocrinol PMID 25587719)",
      "Blackmarket UGL research-chemical counterfeit + endotoxin + degradation-risk"
    ],
    "avoid": [
      "Legitim humán-use NEM létezik 2026 januárban – Phase 1-trial-on kívül NEM ajánlott",
      "Aktív malignitás (ERRα + cancer-pathway preclinical-evidence Audet-Walsh 2015 PMID 25587719 inconclusive proliferative-risk)",
      "Pregnancy + szoptatás (preclinical-only, teratogenicity-data hiányzik)",
      "Pediatric use (NEM Phase 1 indikáció)",
      "Cardiovascular betegség (ERRα-mediated cardiac mitokondriális-biogenesis-effekt preclinical hatás, humán cardiotoxicity-data hiányzik)"
    ]
  },
  "interactions": [
    "Resveratrol + SIRT1-aktivátor – additív PGC-1α-pathway upregulation preclinical, humán-trial NEM dokumentált",
    "AICAR + AMPK-aktivátor – additív mitokondriális-biogenesis preclinical, humán NEM dokumentált",
    "GW-501516 (PPARδ-agonista) – szinergisztikus exercise-mimetic-mechanism preclinical, humán NEM dokumentált",
    "MOTS-c + mitochondrial-derived peptide – additív mitokondriális-pathway preclinical, humán NEM dokumentált",
    "Endurance-training – egér-modell synergistic, humán-trial NEM dokumentált",
    "Beta-blocker (propranolol) – cardiac mitokondriális-effekt preclinical-only modulation, humán NEM dokumentált"
  ],
  "studies": [
    {
      "title": "Synthetic ERRα agonist SLU-PP-332 enhances exercise-induced metabolic adaptations in mice",
      "authors": "Billon C, Sitaula S, Banerjee S et al.",
      "journal": "bioRxiv preprint 2024 (Salk Institute, peer-review pending)",
      "pmid": "n/a (preprint)"
    },
    {
      "title": "Synthetic ERRα/β/γ Agonist Induces an ERRα-Dependent Acute Aerobic Exercise Response and Enhances Exercise Capacity.",
      "authors": "Billon C, Sitaula S, Banerjee S, Welch R, Elgendy B, Hegazy L, Oh TG, Kazantzis M, Chatterjee A, Chrivia J, Hayes ME, Xu W, Hamilton A, Newman JD, Downes M, Evans RM, Burris TP",
      "journal": "ACS Chem Biol",
      "pmid": "36988910"
    },
    {
      "title": "Estrogen-related receptors regulate innate and adaptive muscle mitochondrial energetics through cooperative and distinct actions.",
      "authors": "Fan W, Oh TG, Wang HJ, Yu RT, Atkins AR, Downes M, Evans RM",
      "journal": "Proc Natl Acad Sci U S A",
      "pmid": "40354528"
    },
    {
      "title": "A Synthetic ERR Agonist Alleviates Metabolic Syndrome.",
      "authors": "Billon C, Schoepke E, Avdagic A, Chatterjee A, Butler AA, Elgendy B, Walker JK, Burris TP",
      "journal": "J Pharmacol Exp Ther",
      "pmid": "37739806"
    }
  ],
  "faq": [
    {
      "q": "Preclinical-only status – miért NEM aktív Phase 1 humán-trial 2026 januárban?",
      "a": "A Billon 2024 Salk-preprint bioRxiv preprint-stádiumú publication 2024 közepén megjelent, peer-review pending status. A Salk-pipeline preclinical egér-trial preliminary, IND (Investigational New Drug) FDA-submission NEM dokumentált 2026 januárig. Tipikus academic-preclinical → IND → Phase 1 időkeret 2-3 év (mechanism-toxicology-PK-Phase 1 dose-finding), tehát earliest Phase 1 humán-trial 2026-2027 várható. 2026 januárban legitim humán-use NEM létezik, blackmarket UGL research-chemical-piaci megjelenése designer-research-chemical pattern, marketing-driven hype evidence-base preclinical-only."
    },
    {
      "q": "ERRα-pathway biológiai szerepe – mit kódol az exercise-induced PGC-1α-axis?",
      "a": "Az ERRα (Estrogen-related receptor alpha) egy orphán nukleáris-receptor, ami a PGC-1α (peroxisome proliferator-activated receptor gamma coactivator-1 alpha) koaktivátorral direkt mitokondriális-biogenesis-gén-transzkripció-aktivációt indít. Exercise-induced endogén PGC-1α-emelkedés (Holloszy 1967 + Hoppeler 1985 PMID 4082137 dokumentált) → ERRα-aktiváció → mitokondriális-biogenesis-induction (TFAM, NRF1/2, electron-transport-chain alegységek upregulation). Vázizom-mitokondriális-density + endurance-aerobic-capacity emelkedés az endurance-training fő-mechanizmusa. SLU-PP-332 ezt a pathway-t pharmacologically by-pass-olja preclinical egér-modelben (Billon 2024)."
    },
    {
      "q": "\"Exercise-mimetic\" myth – reprodukálható-e a teljes endurance-training-effekt?",
      "a": "NEM. Az exercise-mimetic marketing-claim túlhangsúlyozott. Az endurance-training-effekt TÖBB pathway-eredő: PGC-1α/ERRα mitokondriális-biogenesis (csak ezt érinti az SLU-PP-332 preclinical-egéren), cardiovascular adaptáció (myocardial-hypertrophy, stroke-volume emelés, capillary-density emelés), neuromuscular efficiency (motor-unit-recruitment-pattern, fiber-type-shift), endokrin-axis adaptáció (cortisol-pattern, GH-pulsatility, IGF-1 emelés), connective-tissue remodeling. Az SLU-PP-332 pharmacological-mimetic csak az ELSŐ pathway-t fedi, a fennmaradó 4-5 pathway adaptáció NEM ERRα-mediated. Klinikai \"exercise-replacement\" claim hamis."
    },
    {
      "q": "WADA-monitoring nuance – miért nem explicit-banned 2026 januárban?",
      "a": "WADA 2025 prohibited list NEM tartalmaz explicit SLU-PP-332-bejegyzést, mert a hatóanyag research-chemical-stádiumban van, humán-trial NEM aktív, és az exercise-mimetic-classification (S4.5 hormone modulator vagy S2.1 peptide hormone NEM specifikusan SLU-PP-332-target) jelenleg nem-egyértelmű. WADA S0 'non-approved substance' catch-all clause MEGFOG: bármely Phase 2 előtti research-chemical klasszifikálva non-approved → tilos. Tehát SLU-PP-332 facto WADA-banned (S0-clause), de explicit-listed NEM. WADA 2025-2026 monitoring program preliminary."
    }
  ],
  "related": [
    "bam15",
    "mots-c",
    "gw-501516"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 50,
      "medium": 75,
      "high": 100
    },
    "unit": "mg/nap PO (egér-extrapoláció, NO humán-validated)",
    "note": "Egér-dose 50 mg/kg/nap PO (Billon 2024 Salk preprint). Humán-dose extrapoláció BSA-correction + species-difference figyelembevétellel 50-100 mg/nap PO (NO humán-Phase 1 dose-finding 2026 januárban). Cycle-length 4-6 hét egér-trial-on; humán-cycle-extrapolation feltérképezetlen. NEM ajánlott humán-experimentation Phase 1-trial-on kívül."
  },
  "anecdote": "A SLU-PP-332 iránti közösségi érdeklődés az \"edzés-mimetikum\" keretezésből ered: a beszámolók kézzelfogható zsírvesztési és inzulinérzékenység-javulási hatást írnak le, amit a fokozott mitokondriális légzésnek és az ERR-vezérelt transzkripciónak tulajdonítanak – ez a réteg adja az állóképesség-/edzésszerű hatásokat. Következetesen ismételt kikötés a gyenge orális felszívódás: az injektálható, gél vagy por beviteli út a beszámolók szerint lényegesen hatékonyabban emeli a szinteket, mint a szájon át adagolás.\n\nA beszámolók gyakran Cardarine-nal vagy injektálható L-karnitinnel kombinálják, mivel az útvonalakat egymást kiegészítőnek tartják (AMPK vs ERR). Kifejezetten nem tekintik \"varázs-edzéstablettának\", és a terület már egy utód-molekula (SLU-PP-915) felé mozdult, amely jobb biohasznosulást ígér – emlékeztetőül arra, mennyire kísérleti még ez a vegyület."
}
