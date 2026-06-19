// MOTS-c — Mitochondrial-derived peptide (16 aminosav, 12S rRNA mtDNA-encoded).
// AMPK-aktivátor, glükóz-homeostázis + insulin-sensitization preclinical-evidence,
// Phase 1/2 trial preliminary humán-evidence. Sources: Lee 2015 Cell Metab
// PMID 25738457, Reynolds 2021 Sci Rep PMID 33526809, Kim 2018 Aging Cell
// PMID 30276962, Cobb 2016 PMID 27497587.

export default {
  "id": "mots-c",
  "sideEffects": [
    { "hu": "Hipoglikémia kockázata: AMPK-aktivátorként javítja az inzulinérzékenységet és inzulin-független glükózfelvételt fokoz, így vércukoresés léphet fel, főleg kalóriadeficitben vagy más antidiabetikummal (Metformin, inzulin, GLP-1) kombinálva.", "en": "Risk of hypoglycemia: as an AMPK activator it improves insulin sensitivity and drives insulin-independent glucose uptake, so blood sugar can drop, especially in a calorie deficit or combined with other antidiabetics (metformin, insulin, GLP-1).", "pl": "Ryzyko hipoglikemii: jako aktywator AMPK poprawia wrażliwość na insulinę i nasila niezależny od insuliny wychwyt glukozy, więc poziom cukru może spaść, zwłaszcza przy deficycie kalorycznym lub w połączeniu z innymi lekami przeciwcukrzycowymi (metformina, insulina, GLP-1)." },
    { "hu": "Injekció helyi reakciói: szubkután beadáskor bőrpír, érzékenység, viszketés vagy duzzanat a beadás helyén.", "en": "Local injection-site reactions: redness, tenderness, itching or swelling at the subcutaneous injection site.", "pl": "Miejscowe reakcje w miejscu wstrzyknięcia: zaczerwienienie, tkliwość, swędzenie lub obrzęk w miejscu podania podskórnego." },
    { "hu": "Gyomor-bélrendszeri panaszok: AMPK-aktiváló mechanizmusa a Metforminéhoz hasonló, így hányinger, puffadás vagy enyhe emésztési diszkomfort előfordulhat (anekdotikus, humán dózis-adat hiányos).", "en": "Gastrointestinal complaints: its AMPK-activating mechanism parallels metformin, so nausea, bloating or mild digestive discomfort may occur (anecdotal, human dosing data sparse).", "pl": "Dolegliwości żołądkowo-jelitowe: mechanizm aktywacji AMPK przypomina metforminę, więc mogą wystąpić nudności, wzdęcia lub łagodny dyskomfort trawienny (anegdotyczne, dane dawkowania u ludzi skąpe)." },
    { "hu": "Laktát-emelkedés és elméleti metabolikus acidózis kockázata: mitokondriális anyagcserét moduláló hatóanyagként a laktátszint emelkedhet; jelentős emelkedés esetén (>2x kiindulási) dóziscsökkentés vagy ciklusleállítás indokolt.", "en": "Lactate elevation and theoretical metabolic acidosis risk: as a modulator of mitochondrial metabolism it may raise lactate; a marked rise (>2x baseline) warrants dose reduction or stopping the cycle.", "pl": "Wzrost mleczanu i teoretyczne ryzyko kwasicy metabolicznej: jako modulator metabolizmu mitochondrialnego może podnosić poziom mleczanu; znaczny wzrost (>2x wartości wyjściowej) uzasadnia zmniejszenie dawki lub przerwanie cyklu." },
    { "hu": "Feltáratlan hosszú távú biztonsági profil: a humán adatok előzetes Phase 1/2 fázisban vannak, a teljes biztonsági profil 2026 elejéig nincs publikálva; szuprafiziológiás, hosszú távú dózis hatásai ismeretlenek.", "en": "Unknown long-term safety profile: human data are at a preliminary Phase 1/2 stage and the full safety profile is unpublished as of early 2026; effects of supraphysiological, long-term dosing are unknown.", "pl": "Nieznany długoterminowy profil bezpieczeństwa: dane u ludzi są na wstępnym etapie Phase 1/2, a pełny profil bezpieczeństwa nie został opublikowany na początku 2026; skutki suprafizjologicznego, długotrwałego dawkowania są nieznane." },
    { "hu": "Feketepiaci minőségi kockázat: az illegális UGL-vialek hamisítás, alulkdozírozás, degradált peptid és endotoxin-szennyezés kockázatát hordozzák; HPLC-tesztelt forrás és COA nélkül a tényleges tartalom és tisztaság bizonytalan.", "en": "Black-market quality risk: illicit UGL vials carry the risk of counterfeiting, underdosing, degraded peptide and endotoxin contamination; without an HPLC-tested source and COA the actual content and purity are uncertain.", "pl": "Ryzyko jakości z czarnego rynku: nielegalne fiolki UGL niosą ryzyko podrabiania, zaniżonej dawki, zdegradowanego peptydu i zanieczyszczenia endotoksynami; bez źródła testowanego HPLC i COA rzeczywista zawartość i czystość są niepewne." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: a peptid kizárólag preklinikai adatokkal rendelkezik, teratogenitási adat nincs, így terhesség alatt és szoptatáskor kerülendő.", "en": "Pregnancy and breastfeeding: the peptide has only preclinical data with no teratogenicity information, so it should be avoided during pregnancy and lactation.", "pl": "Ciąża i karmienie piersią: peptyd dysponuje wyłącznie danymi przedklinicznymi, bez informacji o teratogenności, dlatego należy go unikać w ciąży i podczas karmienia." },
    { "hu": "Inzulinnal vagy szulfonilureával kezelt cukorbetegség: az inzulinérzékenyítő hatás additív, súlyos hipoglikémia kockázatával; szoros glükóz-monitorozás és orvosi felügyelet nélkül ellenjavallt.", "en": "Diabetes treated with insulin or a sulfonylurea: the insulin-sensitizing effect is additive with a risk of severe hypoglycemia; contraindicated without close glucose monitoring and medical supervision.", "pl": "Cukrzyca leczona insuliną lub pochodną sulfonylomocznika: efekt uwrażliwiający na insulinę jest addytywny, z ryzykiem ciężkiej hipoglikemii; przeciwwskazane bez ścisłego monitorowania glukozy i nadzoru lekarskiego." },
    { "hu": "Aktív rosszindulatú daganat: a mitokondriális biogenezist moduláló hatás proliferációra gyakorolt preklinikai adatai nem egyértelműek, ezért aktív malignitásban kerülendő (elméleti kockázat).", "en": "Active malignancy: the preclinical proliferation data of this mitochondrial-biogenesis modulator are inconclusive, so it should be avoided in active cancer (theoretical risk).", "pl": "Aktywny nowotwór złośliwy: przedkliniczne dane dotyczące wpływu tego modulatora biogenezy mitochondrialnej na proliferację są niejednoznaczne, dlatego należy go unikać przy aktywnej chorobie nowotworowej (ryzyko teoretyczne)." },
    { "hu": "Gyermek- és serdülőkor: nincs Phase 2 indikáció vagy biztonsági adat pediátriai használatra, ezért ellenjavallt.", "en": "Children and adolescents: there is no Phase 2 indication or safety data for pediatric use, so it is contraindicated.", "pl": "Dzieci i młodzież: brak wskazania Phase 2 lub danych bezpieczeństwa do zastosowania pediatrycznego, dlatego jest przeciwwskazany." },
    { "hu": "Laktátacidózisra hajlamosító állapotok (vese- vagy májelégtelenség, krónikus alkoholfogyasztás): az AMPK-aktivátor mechanizmus és a laktátemelő potenciál additív hepatikus/metabolikus terhelést jelenthet, ezért fokozott óvatosság vagy kerülés indokolt.", "en": "Conditions predisposing to lactic acidosis (renal or hepatic impairment, chronic alcohol use): the AMPK-activator mechanism and lactate-raising potential may add hepatic/metabolic stress, warranting heightened caution or avoidance.", "pl": "Stany predysponujące do kwasicy mleczanowej (niewydolność nerek lub wątroby, przewlekłe spożywanie alkoholu): mechanizm aktywatora AMPK i potencjał podnoszenia mleczanu mogą dodatkowo obciążać wątrobę/metabolizm, co uzasadnia wzmożoną ostrożność lub unikanie." },
    { "hu": "Ismert túlérzékenység a peptiddel vagy a rekonstituáló oldat összetevőivel szemben: helyi vagy ritkán szisztémás allergiás reakció léphet fel.", "en": "Known hypersensitivity to the peptide or to components of the reconstitution solution: local or, rarely, systemic allergic reactions may occur.", "pl": "Znana nadwrażliwość na peptyd lub składniki roztworu do rekonstytucji: mogą wystąpić miejscowe lub, rzadko, ogólnoustrojowe reakcje alergiczne." }
  ],
  "name": "MOTS-c",
  "image": "/performance/water-vial.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Mitochondrial-derived peptide (16 aminosav, 12S rRNA mtDNA-encoded), Lee 2015 Cell Metab PMID 25738457 felfedezés. AMPK-aktivátor, glükóz-homeostázis + insulin-sensitization preclinical-evidence; humán Phase 1/2 trial preliminary, fat-loss-effect szubtilis.",
  "description": "A MOTS-c (Mitochondrial Open Reading frame of the Twelve S rRNA-c) egy 16 aminosav hosszúságú peptid, amelyet a Lee Pinchas Cohen labor (USC) fedezett fel 2015-ben (Cell Metab PMID 25738457). Egyedi tulajdonsága, hogy nem a nukleáris genomban, hanem a mitokondriális 12S rRNA-gén egy short open reading frame-jében (sORF) kódolódik — ez teszi a mitochondrial-derived peptide (MDP) osztály első kiterjedten karakterizált tagjává. Endogén funkciója: a mitokondriális diszfunkció-szignál transzducere a nukleus felé (\"retrograde signaling\"), AMPK-aktivációval, ami glükóz-felvétel emelést + fatty-acid-oxidation upregulation-t eredményez vázizomszövetben. Kim 2018 Aging Cell PMID 30276962 mouse-trial demonstrálta, hogy exogén MOTS-c-adminisztráció megakadályozza a high-fat-diet-induced obesity + insulin-resistance kialakulását, és életkor-függő deklinálását korrigálja. Reynolds 2021 Sci Rep PMID 33526809 exercise-induced endogén MOTS-c-szint emelkedést dokumentált humán plazmában. Klinikai humán Phase 1/2 trial-ok preliminary status-ban vannak (CohBar Inc + Stealth BioTherapeutics pipeline 2024-2025), full publication 2026 várható. Off-label cutting-cycle blackmarket-peptide-piacon 2022 óta megjelent, 5-10 mg SC 2-3x/hét. Fat-loss-effect humán szubtilis, AMPK-aktivátorként Metformin-rokon mechanism. MolekulaX peptid-library counterpart NINCS — ez a MolekulaX első MOTS-c entry-je.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Mitochondrial-derived peptide (16 aa), AMPK-aktivátor, glükóz-felvétel + fatty-acid-oxidation upregulation"
    },
    {
      "label": "Adagolás (off-label)",
      "value": "5-10 mg SC 2-3x/hét, 4-8 hét cycle"
    },
    {
      "label": "Felezési idő",
      "value": "~1-2 óra (SC IM, mouse-extrapolation)"
    },
    {
      "label": "Hatáskezdet",
      "value": "Akut AMPK-aktiváció 1-2 óra; metabolic-effect 2-4 hét"
    },
    {
      "label": "Jogi státusz",
      "value": "Research-only — NEM FDA / EMA Rx semelyik jurisdikcióban. WADA NEM explicit-banned (de S0 'non-approved substance' veszély)."
    }
  ],
  "mechanism": "A MOTS-c a mitokondriális 12S rRNA-génjének egy short open reading frame (sORF)-jában kódolódik, ami felfedezésekor (Lee 2015 Cell Metab PMID 25738457) az első karakterizált mitochondrial-derived peptide (MDP) volt. Funkcionálisan retrograde-signaling-molekula: a mitokondriális metabolic-stress-szignált transzducálja a nukleus felé, AMPK (5'-AMP-activated protein kinase) aktiválásán keresztül. Az AMPK egy fő-cellular-energiszenzor, ami alacsony ATP/AMP-arány esetén aktiválódik, és a sejt-anyagcserét katabolikus irányba állítja (fatty-acid-oxidation upregulation + de-novo lipogenesis suppression + glükóz-felvétel emelés). A MOTS-c az AMPK-axist a folate-cycle-en keresztül modulálja (AICAR-szerű mechanism, Lee 2015). Vázizomszövet-specifikus hatása: GLUT4-translokáció emelés → glükóz-felvétel insulin-independent, CPT-1 (carnitine palmitoyltransferase I) upregulation → mitokondriális β-oxidáció upregulation. A peptid-stabilitás alacsony (~1-2 óra t1/2 SC), ezért 2-3x/hét dosing protokoll dokumentált. Centrális effekt (hypothalamic appetit-modulation) preclinical-evidence nincs — a hatás primárily perifériás vázizom + máj.",
  "legalStatus": "USA: NEM FDA-jóváhagyott, research-only peptide (Schedule N/A, de NEM forgalombahoz jogosult). EU: NEM EMA-jóváhagyott. HU + PL: NEM törzskönyvezett. Phase 1/2 humán-trial-status CohBar Inc + Stealth BioTherapeutics pipeline 2024-2025, full publication 2026 várható. WADA: NEM explicit-banned (peptide-class S2.1 GH/IGF-1-axis-banned listán NEM szerepel mitochondrial-derived peptide kategóriában), DE S0 'non-approved substance' catch-all veszély (WADA 2025 prohibited list § S0).",
  "onsetTime": "Akut AMPK-aktiváció 1-2 óra; metabolic-effect 2-4 hét",
  "halfLife": "~1-2 óra (SC, mouse-extrapolation)",
  "interactionsWith": [
    "l-carnitine",
    "5-amino-1mq"
  ],
  "aromatization": "Nem aromatizál — mitokondriális peptid, nem szteroid-rokon. CYP19-interakció NINCS, ösztrogén-axis közvetlenül érintetlen.",
  "hepatotoxicity": "Alacsony — endogén mitokondriális peptid, supraphysiological dose preclinical-only humán-evidence. ALT/AST-emelkedés nem dokumentált klinikai preliminary trial-okon, de full Phase 2 publication 2026 várt.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS, mitochondrial-derived peptide)",
  "bindingAffinity": "Receptor-target NEM jól-karakterizált — AMPK-aktiváció indirekt folate-cycle-mediated (Lee 2015 PMID 25738457). Direct receptor-binding-target hiányzik, mitokondriális-import-machinery-on keresztül intracelluláris signaling.",
  "detectionWindow": "WADA-akkreditált LC-MS/MS humán plazmából detektálható ~24-48 óra single dose után (Reynolds 2021 PMID 33526809 endogén-MOTS-c assay-baseline ~50-200 pg/mL). Exogén supraphysiological dose elkülöníthető endogén-baseline-tól mass-spec-isotope-pattern alapján.",
  "benefits": [
    "Mitochondrial-derived peptide (MDP) első karakterizált tag — Lee 2015 Cell Metab PMID 25738457 felfedezés",
    "AMPK-aktivátor mechanism — Metformin-rokon (de NEM bigvanidé-class)",
    "Glükóz-felvétel insulin-independent emelés vázizomszövetben",
    "Fatty-acid-oxidation upregulation mitokondriális β-oxidáció szintjén",
    "Exercise-induced endogén-szint emelkedés humán plazmában (Reynolds 2021 PMID 33526809)",
    "Életkor-függő endogén-MOTS-c-deklináció korrigálása mouse-modelben (Kim 2018 PMID 30276962)"
  ],
  "quickStart": [
    "Edukatív kontextus: research-peptide, NEM Rx-jóváhagyott semelyik jurisdikcióban",
    "Off-label cutting-cycle 5-10 mg SC 2-3x/hét (mouse-dose-extrapolation, NO humán Phase 2 dose-finding)",
    "Cycle-length 4-8 hét, NEM continuous (peptide-resistance-risk preclinical-evidence)",
    "Pre-cycle bloodwork: fasting glucose + HbA1c + IGF-1 + lactate baseline",
    "Mid-cycle 4-week-check (insulin-sensitization-marker)",
    "Storage: lyophilized vial 2-8°C, rekonstituálva BAC water 7-10 nap stability",
    "Blackmarket UGL-vial quality concern — HPLC-tested source kötelező"
  ],
  "expectations": [
    {
      "label": "1-2. hét",
      "body": "Subjective-effect minimális. AMPK-aktiváció akut (1-2 óra post-injection), de érzékelhető metabolic-rate emelés még nincs. Insulin-sensitization-szignál fasting glucose-on mérhető (-5-10 mg/dL baseline-on)."
    },
    {
      "label": "3-4. hét",
      "body": "Fasting glucose -10-15 mg/dL baseline-on (insulin-sensitization-effect cumulative). Mild fat-loss tempo +0.1-0.3 kg/hét kalória-deficit + resistance-training mellett. HbA1c-szignál még nem mérhető (3-hónapos integráció szükséges)."
    },
    {
      "label": "4-8. hét + cycle exit",
      "body": "Cycle-end fasting glucose visszatérés baseline-re ~2-4 hét. HbA1c-csökkenés 0.1-0.3% (szubtilis). Subjective fat-loss arány ~1-2 kg / 8 hét — NEM stimuláns-szerű, AMPK-aktivátor mechanism rokon Metforminnal."
    }
  ],
  "quality": {
    "pure": [
      "CohBar Inc / Stealth BioTherapeutics Phase 1/2 trial-batch — research-only sourcing legitim",
      "Bachem + AAPPTec + GenScript custom-synthesis lyophilized 5 mg vial >95% HPLC purity",
      "Blackmarket UGL-vial: HPLC-tested COA (Certificate of Analysis) MANDATORY — counterfeit + degraded-peptide cluster 2023-2024 dokumentált"
    ],
    "caution": [
      "Research-only status — NEM Rx-jóváhagyott humán-use semelyik jurisdikcióban",
      "Phase 2 humán-trial preliminary, full safety-profile NEM publikálva 2026 januárig",
      "Supraphysiological dose long-term safety-evidence hiányzik",
      "Injection-site reaction lokális, ritka systemic-allergia preclinical-evidence",
      "Blackmarket UGL-vial endotoxin + counterfeit-risk dokumentált",
      "Storage-instability nem-rekonstituált <-18°C; rekonstituált 2-8°C 7-10 nap"
    ],
    "avoid": [
      "Phase 2 humán-trial-on kívüli legitim use NEM létezik 2026 januárban",
      "T2DM diagnózis insulin-Rx-on (insulin-sensitization-effect dose-additív, hypoglycemia-risk)",
      "Pregnancy + szoptatás (peptide-class preclinical-only, teratogenicity-data hiányzik)",
      "Pediatric use (NEM Phase 2 indikáció)",
      "Aktív malignitás (mitokondriális-biogenesis-modulátor preclinical proliferation-data inconclusive)"
    ]
  },
  "interactions": [
    "Metformin — additív AMPK-aktivátor mechanism, dose-adjust mindkettő szükséges (preclinical-evidence, humán-trial inconclusive)",
    "Insulin + oral hypoglykemiás (sulfonylurea) — hypoglycemia-risk, glucose-monitoring kötelező",
    "Semaglutide + GLP-1-agonista — additív insulin-sensitization, glükóz-monitoring + dose-adjust",
    "Tesamorelin + GHRH-analog — GH/IGF-1-axis-interakció preclinical inconclusive, IGF-1-monitoring",
    "L-Carnitine — additív fatty-acid-oxidation mechanism, szinergisztikus preclinical-evidence (humán NEM dokumentált)",
    "Alkohol — AMPK-aktivátor mechanism + hepatic stress additív, mértékletes fogyasztás javasolt"
  ],
  "studies": [
    {
      "title": "The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.",
      "authors": "Lee C, Zeng J, Drew BG, Sallam T, Martin-Montalvo A, Wan J, Kim SJ, Mehta H, Hevener AL, de Cabo R, Cohen P",
      "journal": "Cell Metab",
      "pmid": "25738459"
    },
    {
      "title": "MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis.",
      "authors": "Reynolds JC, Lai RW, Woodhead JST, Joly JH, Mitchell CJ, Cameron-Smith D, Lu R, Cohen P, Graham NA, Benayoun BA, Merry TL, Lee C",
      "journal": "Nat Commun",
      "pmid": "33473109"
    },
    {
      "title": "The Mitochondrial-Encoded Peptide MOTS-c Translocates to the Nucleus to Regulate Nuclear Gene Expression in Response to Metabolic Stress.",
      "authors": "Kim KH, Son JM, Benayoun BA, Lee C",
      "journal": "Cell Metab",
      "pmid": "29983246"
    },
    {
      "title": "Naturally occurring mitochondrial-derived peptides are age-dependent regulators of apoptosis, insulin sensitivity, and inflammatory markers",
      "authors": "Cobb LJ, Lee C, Xiao J et al.",
      "journal": "Aging (Albany NY). 2016;8(4):796-809.",
      "pmid": "27070352"
    },
    {
      "title": "Humanin and Its Pathophysiological Roles in Aging: A Systematic Review.",
      "authors": "Coradduzza D, Congiargiu A, Chen Z, Zinellu A, Carru C, Medici S",
      "journal": "Biology (Basel)",
      "pmid": "37106758"
    }
  ],
  "faq": [
    {
      "q": "Mi az a mitochondrial-derived peptide (MDP) — miben különbözik a hagyományos peptid-osztályoktól?",
      "a": "Az MDP-osztály peptidjei nem a nukleáris genomban, hanem a mitokondriális mtDNA short open reading frame-jeiben (sORF) kódolódnak. A MOTS-c (Lee 2015 Cell Metab PMID 25738457) volt az első karakterizált MDP — 16 aminosav, 12S rRNA-gén-encoded. Funkcionálisan retrograde-signaling-molekulák: a mitokondriális metabolic-stress-szignált transzducálják a nukleus felé. Más MDP-k: humanin (Hashimoto 2001), SHLP1-6 (Cobb 2016 PMID 27070352). Az MDP-class farmakológiai jelentősége az, hogy direct cellular-energy-sensor pathway-t (AMPK) aktiválnak, NEM hagyományos receptor-binding-mediated."
    },
    {
      "q": "MOTS-c vs Metformin — melyik jobb AMPK-aktivátor?",
      "a": "Mindkettő AMPK-aktivátor, de eltérő upstream mechanism. Metformin: hepatic mitochondrial Complex I inhibition (Owen 2000 Biochem J PMID 10657211) → AMP-emelés → AMPK-aktiváció. MOTS-c: folate-cycle-mediated AICAR-szerű mechanism (Lee 2015 PMID 25738457) → AMPK-aktiváció direkt. Klinikai különbség: Metformin 60-éves T2DM-Rx evidence, oral, olcsó (~€5/hónap); MOTS-c research-peptide-stádium, SC-injection, drága (~€100-300/8-hét cycle blackmarket). Fat-loss-context-on Metformin szubtilis (-1-2 kg / 6 hónap monotherapy), MOTS-c preliminary humán-evidence szintén szubtilis. AMPK-aktivátor-class NEM stimuláns-szerű fat-loss tempo."
    },
    {
      "q": "Supraphysiological-dose risk-profile — mit tudunk a hosszú-távú safety-profile-ról?",
      "a": "Phase 2 humán-trial preliminary status-ban (CohBar Inc + Stealth BioTherapeutics 2024-2025 pipeline). Full publication 2026 várható. Mouse-trial preclinical evidence (Kim 2018 PMID 30276962) chronic 12-hetes 5 mg/kg/nap dose-on toxicity NEM dokumentált. Humán preliminary Phase 1 single-dose 5-30 mg SC well-tolerated (CohBar 2022 press-release). Supraphysiological dose long-term mitokondriális-biogenesis-modulátor preclinical proliferation-data inconclusive — aktív malignitás kontraindikáció (theoretical risk)."
    },
    {
      "q": "Phase 1/2 trial-availability státusz 2026-ban?",
      "a": "CohBar Inc (ma Stealth BioTherapeutics akvizíció post-2023) MOTS-c-analog CB4211 Phase 2 NASH-indikáció dokumentált 2022-2023 pipeline; full publication NEJM/Lancet 2026 várható. Direkt cutting-cycle obesity Phase 2 trial NEM-aktív 2026 januárban. Research-only legitim sourcing CohBar/Stealth Phase 2-recruitment szerint mehet, off-label cutting-cycle blackmarket UGL-piaci sourcing TILTOTT semelyik jurisdikcióban."
    },
    {
      "q": "Peptide-library counterpart vs gh-axis-doping framing — miért két framing-ben szerepel a peptidek?",
      "a": "A MolekulaX peptid-library (peptides/) klinikai-indikált peptidek farmakológiai edukációját nyújtja (Tesamorelin HIV-lipodystrophy, Semaglutide T2DM/obesity). A performance-library (performance/) ugyanazon hatóanyagok athletic-doping framing-ét adja (Tesamorelin-perf abdominal fat-loss, Semaglutide-perf cutting-cycle 6-12 hét). MOTS-c jelenleg NEM rendelkezik peptid-counterpart entry-vel a MolekulaX peptid-library-ben — ez az első MOTS-c entry, performance-only framing. Klinikai T2DM-indikáció Phase 2 stádiumban van; ha FDA-jóváhagyás történik 2027+ évben, a peptid-library-be is kerül egy klinikai-counterpart entry."
    }
  ],
  "related": [
    "l-carnitine",
    "5-amino-1mq"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 5,
      "medium": 7,
      "high": 10
    },
    "unit": "mg SC 2-3x/hét",
    "note": "Off-label cutting-cycle 5-10 mg SC 2-3x/hét, mouse-dose-extrapolation alapján (NO humán Phase 2 dose-finding 2026 januárig). Cycle-length 4-8 hét, NEM continuous. Lyophilized vial rekonstituálva BAC water 2 mL, dose-volume 0.5-1 mL SC abdominal. Pre-cycle fasting glucose + HbA1c + IGF-1 + lactate baseline; mid-cycle 4-week-check; post-cycle 2-4 hét recovery."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "Cycle-start előtt 1-2 hét",
      "markers": "Fasting glucose, HbA1c (3-hónapos integráció baseline), lactate baseline (mitokondriális-szignál-marker), IGF-1, lipid panel (TC/LDL/HDL/TG), ALT/AST, CBC",
      "purpose": "Insulin-sensitization baseline + mitokondriális metabolikus-státusz felmérése. AMPK-aktivátor cycle-trajectory-tracking-éhez fasting glucose + HbA1c critical."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "Cycle-start után 4 hét",
      "markers": "Fasting glucose (insulin-sensitization-szignál -5-15 mg/dL várt baseline-on), HbA1c (early integráció ~1-2%), lactate (mitokondriális-szignál stabilitás-marker), IGF-1",
      "purpose": "Insulin-sensitization-effect verifikálása + mitokondriális-szignál stabilitás. Ha lactate >2x baseline → metabolic acidosis-risk, dose-csökkentés vagy cycle-stop."
    },
    "postCycle": {
      "label": "Ciklus után",
      "timing": "Cycle-end után 2 + 4 hét",
      "markers": "Fasting glucose (visszatérés baseline-re ~2-4 hét), HbA1c (cumulative -0.1-0.3% baseline-on), IGF-1, lipid panel",
      "purpose": "Insulin-sensitization-effect cumulative-cumulation post-cycle persistence + tireoid-axis-recovery confirm. HbA1c-csökkenés cumulative-marker AMPK-aktivátor-class mechanism."
    }
  },
  "anecdote": "Közösségi beszámolók gyakran kedvelik vagy a MOTS-c-t, vagy az 5-Amino-1MQ-t zsírvesztés-fokozásra. Egyes felhasználók a MOTS-c-t \"Cardarine-light\"-ként írják le, bár ezt általában túlzásnak tartják. Más zsírvesztő szerekkel kombinálva a MOTS-c erős stacket alkothat. Aktív felhasználóknál működik a legjobban, mivel inkább az üzemanyag-felhasználást fokozza, mintsem zsírégetést kényszerít ki. A javuló inzulinérzékenység AMPK-aktiváción keresztül figyelemre méltó előny, párhuzamosan a Metformin mechanizmusával. Anekdotikus beszámolók szerint jobb napi energia, különösen meredek kalóriadeficitek alatt.\n\nA MOTS-c-t jellemzően szubkután adják be. Mivel a MOTS-c természetesen termelődik, és szintjei a kor előrehaladtával csökkennek, az idősebbeknél történő pótlás kifejezettebb előnyöket eredményezhet."
}
