// Pregnenolone – "master steroid" endogén szteroid-precursor (cholesterol → pregnenolone
// → összes downstream szteroid-hormon). OTC supplement, evidence quality LOW.
// Orális biodostupnošć gyenge (~5-10%), neurosztiered NMDA/GABA-hatás kis kognitív-előny.
// AAS-PCT niche-adjuvant role, weak evidence.
// Sources: Mosconi 2017 PMID 28259555, Roberts 1992 PMID 1610975,
// Marx 2009 PMID 19797577.

export default {
  "id": "pregnenolone",
  "sideEffects": [
    { "hu": "Neurosztereoid CNS-hatás: némelyeknél alvászavar / éberség-fokozódás (GABA-A negatív moduláció), ezért az esti adagolás egyeseknél rontja az alvást.", "en": "Neurosteroid CNS effect: insomnia / heightened alertness in some users (GABA-A negative modulation), so evening dosing can worsen sleep in certain individuals.", "pl": "Neurosteroidowy efekt OUN: bezsenność / wzmożona czujność u części osób (negatywna modulacja GABA-A), dlatego dawkowanie wieczorne może pogarszać sen u niektórych." },
    { "hu": "Fejfájás, ingerlékenység, szorongás vagy nyugtalanság – neurosztereoid-érzékeny egyéneknél, dózisfüggő.", "en": "Headache, irritability, anxiety or restlessness in neurosteroid-sensitive individuals, dose-dependent.", "pl": "Ból głowy, drażliwość, lęk lub niepokój u osób wrażliwych na neurosteroidy, zależne od dawki." },
    { "hu": "Hangulati ingadozás és nem kívánt downstream hormonális hatások (akne, fokozott faggyútermelés), mivel a pregnenolone androgén- és ösztrogén-prekurzor.", "en": "Mood swings and unwanted downstream hormonal effects (acne, increased sebum) since pregnenolone is a precursor to both androgens and estrogens.", "pl": "Wahania nastroju i niepożądane efekty hormonalne (trądzik, zwiększone wydzielanie łoju), ponieważ pregnenolon jest prekursorem androgenów i estrogenów." },
    { "hu": "Indirekt ösztrogén-konverzió (perifériás aromatizáció a downstream tesztoszteronon át): vízretenció, érzékeny mellbimbó – a magnitúdó kicsi, mert az orális first-pass progeszteron-konverzió dominál.", "en": "Indirect estrogen conversion (peripheral aromatization via downstream testosterone): water retention, nipple sensitivity. Magnitude is small as oral first-pass progesterone conversion dominates.", "pl": "Pośrednia konwersja do estrogenu (obwodowa aromatyzacja przez downstream testosteron): zatrzymanie wody, tkliwość sutków. Skala mała, bo dominuje doustna konwersja first-pass do progesteronu." },
    { "hu": "Ritka, de dokumentált májenzim-emelkedés (ALT/AST) tartós, magas dózisú (>50 mg/nap, 6+ hónap) használatnál.", "en": "Rare but documented liver enzyme elevation (ALT/AST) with chronic high-dose use (>50 mg/day for 6+ months).", "pl": "Rzadkie, ale udokumentowane podwyższenie enzymów wątrobowych (ALT/AST) przy przewlekłym stosowaniu wysokich dawek (>50 mg/dobę przez 6+ miesięcy)." },
    { "hu": "Erősen variábilis, gyakran elmaradó hatás: a gyenge orális biohasznosulás (~5-10%) miatt sok felhasználónál semmilyen mérhető hormonális vagy szubjektív hatás nincs.", "en": "Highly variable, often absent effect: due to poor oral bioavailability (~5-10%), many users see no measurable hormonal or subjective benefit.", "pl": "Silnie zmienny, często nieobecny efekt: z powodu słabej biodostępności doustnej (~5-10%) wielu użytkowników nie odczuwa żadnego mierzalnego efektu hormonalnego ani subiektywnego." }
  ],
  "contraindications": [
    { "hu": "Hormonérzékeny daganat anamnézisében vagy fennállásakor (prosztata-, emlőrák): a downstream szteroid-prekurzor-terhelés elméleti kockázatot jelent.", "en": "History or presence of hormone-sensitive cancer (prostate, breast): downstream steroid precursor loading poses a theoretical risk.", "pl": "Nowotwór hormonozależny w wywiadzie lub obecnie (prostata, pierś): obciążenie downstream prekursorami steroidów stanowi teoretyczne ryzyko." },
    { "hu": "Terhesség és szoptatás: a pregnenolone placenta-penetráns, elméleti hatás a magzati HPG-tengelyre; partnerre is átvihető elméleti kockázat.", "en": "Pregnancy and breastfeeding: pregnenolone crosses the placenta, theoretical effect on fetal HPG axis; theoretical risk also via partner contact.", "pl": "Ciąża i karmienie piersią: pregnenolon przenika przez łożysko, teoretyczny wpływ na płodową oś HPG; teoretyczne ryzyko także przez kontakt z partnerką." },
    { "hu": "NEM helyettesíti az evidence-alapú PCT-t: full-suppress státuszú post-cycle állapotban önálló PCT-ként (SERM/HCG helyett) használva nem dokumentált a tengely-helyreállás.", "en": "Does NOT replace evidence-based PCT: used as standalone PCT (instead of a SERM/HCG) in fully suppressed post-cycle state, axis recovery is undocumented.", "pl": "NIE zastępuje PCT opartego na dowodach: stosowany jako samodzielne PCT (zamiast SERM/HCG) przy pełnej supresji po cyklu, odbudowa osi jest nieudokumentowana." },
    { "hu": "Fennálló májbetegség vagy emelkedett ALT/AST baseline: tartós, magas dózis ronthatja a májfunkciót.", "en": "Pre-existing liver disease or elevated baseline ALT/AST: chronic high-dose use may worsen liver function.", "pl": "Istniejąca choroba wątroby lub podwyższone wyjściowe ALT/AST: przewlekłe stosowanie wysokich dawek może pogorszyć funkcję wątroby." },
    { "hu": "Egyidejű GABA-erg / szorongásoldó gyógyszerek (benzodiazepin, SSRI): elméleti GABA-A negatív-modulátor antagonizmus, klinikai relevanciája nem tisztázott, óvatosság indokolt.", "en": "Concurrent GABAergic / anxiolytic medications (benzodiazepines, SSRIs): theoretical GABA-A negative-modulator antagonism, clinical relevance unclear, caution warranted.", "pl": "Jednoczesne leki GABA-ergiczne / przeciwlękowe (benzodiazepiny, SSRI): teoretyczny antagonizm negatywnego modulatora GABA-A, znaczenie kliniczne niejasne, zalecana ostrożność." },
    { "hu": "Ismeretlen, kontrollálatlan hormonális rendellenesség: a széles downstream szteroid-spektrum (tesztoszteron, DHEA, kortizol, ösztrogén) miatt orvosi felügyelet nélkül nem ajánlott.", "en": "Unknown, uncontrolled hormonal disorder: due to the broad downstream steroid spectrum (testosterone, DHEA, cortisol, estrogen), not advised without medical supervision.", "pl": "Nieznane, niekontrolowane zaburzenie hormonalne: ze względu na szerokie downstream spektrum steroidów (testosteron, DHEA, kortyzol, estrogen) niezalecane bez nadzoru lekarskiego." }
  ],
  "name": "Pregnenolone",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "\"Master steroid\" – endogén szteroid-precursor (cholesterol → pregnenolone → összes szteroid-hormon). OTC supplement. Evidence quality LOW: orális biodostupnošć gyenge (~5-10%), neurosztiered NMDA/GABA hatás kis kognitív-előny. AAS-PCT niche.",
  "description": "A Pregnenolone az emberi szervezet \"master steroid\" precursor-molekulája – a cholesterol-ből származó első steroidogenic-intermediate (P450scc/CYP11A1 enzimaktivitás mitochondrium-ban), amelyből a teljes szteroid-hormon-spektrum (progesterone, 17-OH-pregnenolone, DHEA, androstenedione, testosterone, cortisol, aldosterone) szintetizálódik. Az OTC supplement-piacon \"natural hormone-precursor\" claim-mel forgalmazzák, az elmélet szerint az orális adagolás → systemic steroidogenesis substrate-loading → downstream hormon-emelkedés (Test, DHEA). Evidence quality LOW: az orális biodostupnošć extrém gyenge (Roberts 1992, PMID 1610975 – szérum-pregnenolone <10% bevitt dose 4 órás peak-en, többsége first-pass-hepatic progesterone-konverzión megy keresztül), a downstream Test-emelkedés szérum-mérés nem konzisztens. A valós dokumentált hatás neurosteroid-mediated: a pregnenolone közvetlenül a CNS-ben NMDA-receptor-positive-modulator + GABA-A-receptor-negative-modulator (Mosconi 2017, PMID 28259555 review) – ez magyarázza a user-reported \"mental clarity\" + \"brain fog reduction\" effekteket, FÜGGETLENÜL a hormon-axis-claim-től. AAS-PCT context: niche-adjuvant role mentális helyreállásra (post-cycle brain fog, kognitív köd) – DE NEM SERM-PCT-replacement, NEM HCG-replacement, NEM evidence-based axis-restart agent. Marx 2009 (PMID 19797577) Phase II schizophrenia trial 500 mg/nap dose mérsékelt kognitív-benefit, ami önmagában is dose-magnitude-warning AAS-PCT context-ben szokásos 25-100 mg-hoz képest.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Endogén szteroid-precursor (cholesterol → pregnenolone → összes downstream hormon) + CNS neurosteroid NMDA/GABA-A-modulator"},
    {"label": "Adagolás", "value": "25-100 mg orális napi 1x este (OTC range); AAS-PCT niche-protokoll 50 mg/nap × 4-8 hét"},
    {"label": "Felezési idő", "value": "~30-45 perc (parent; szérum-kinetika highly variable, gyors first-pass-konverzió)"},
    {"label": "Hatáskezdet", "value": "Neurosteroid CNS-effect 1-3 óra; downstream-hormon-effect (ha van) 2-7 nap chronic dosing"},
    {"label": "Jogi státusz", "value": "OTC dietary supplement (USA DSHEA-1994 schedule); EU országokban változó (food-supplement vagy unregulated); NEM WADA-banned"}
  ],
  "mechanism": "A pregnenolone bioszintézise a mitochondrium-ban indul: cholesterol → pregnenolone konverzió a P450scc (CYP11A1) enzim katalízisével – ez a rate-limiting step a teljes szteroidogenezisben. A pregnenolone két fő downstream-irányba haladhat: (1) Δ4-pathway: pregnenolone → progesterone (3β-HSD enzim) → 17-OH-progesterone → androstenedione → testosterone; (2) Δ5-pathway: pregnenolone → 17-OH-pregnenolone → DHEA → androstenedione → testosterone. Az adrenal-cortex + gonadok + brain (neurosteroid-synthesis) mindkét pathway-t kifejezik. Orális supplement evidence-LOW: Roberts 1992 (PMID 1610975) PK-vizsgálat – 175 mg orális dose után szérum-pregnenolone <10% bevitt mennyiség 4 órás peak-en, többsége first-pass-hepatic progesterone-konverzión esik át, így downstream Test-substrate-loading marginal. Neurosteroid action (FÜGGETLEN a hormon-axis-claim-től, Mosconi 2017 PMID 28259555 review): pregnenolone-sulfate forma BBB-átjutó, NMDA-receptor positive-modulator (cognitive-enhancement, memory-formation) + GABA-A-receptor negative-modulator (alertness, anti-sedative effect, cortisol-arousal-pattern szinkron – ezért este-dosing controversial, néhány user reggeli dose-zal jobb mental clarity). Hepatic terhelés alacsony endogén-precursor-státusz miatt.",
  "legalStatus": "OTC dietary supplement USA-ban DSHEA-1994 schedule alatt – szabadon árusítható supplement-store-okban + online. EU-ban változó: néhány tagország food-supplement-classification (Németország, Hollandia, Csehország), mások unregulated grey-zone (Magyarország jelenleg). UK MHRA unlicensed-medicine besorolás 2010+. NEM WADA-banned, NEM controlled-substance. AAS-PCT context-ben legal-friendly opció (Nolvadex/Clomid prescription-only, HCG prescription-only, peptid-szürkezónás), DE evidence-magnitude limited.",
  "onsetTime": "Neurosteroid CNS-effect 1-3 óra; downstream-hormon-effect (ha van) 2-7 nap chronic dosing",
  "halfLife": "~30-45 perc",
  "halfLifeActive": "~30-45 perc parent + szérum-kinetika highly variable (pregnenolone-sulfate metabolite hosszabb, ~4-6 óra, neurosteroid-active forma)",
  "interactionsWith": ["dhea", "kisspeptin-10"],
  "aromatization": "Indirekt: szteroid-precursor → Test → másodlagos peripheral E2-konverzió. Magnitude small (oral first-pass progesteron-konverzió dominál, downstream Test-substrate-loading marginal).",
  "hepatotoxicity": "Alacsony – endogén szteroid-precursor. Long-term high-dose (>50 mg/nap chronic 6+ hónap) hepatic enzyme rise rare-but-documented.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (precursor-molekula, NEM önálló androgén – downstream-konverzió-függő, Test-substrate-loading magnitude marginal)",
  "bindingAffinity": "Nincs primary-receptor – endogén szteroidogenezis-intermediate. Neurosteroid kontextusban: NMDA-receptor positive-allosteric-modulator (pregnenolone-sulfate forma, EC50 ~10-50 μM), GABA-A-receptor negative-allosteric-modulator (hasonló koncentráció-tartomány).",
  "detectionWindow": "Pregnenolone NEM WADA-banned; szérum-assay sensitive-LC-MS/MS-sel mérhető 24-48 óra dose-after. Endogén-baseline-variabilitás miatt detection-kritérium nem standardizált.",
  "benefits": [
    "Endogén szteroid-precursor – elméleti substrate-loading a teljes szteroidogenezis-rate-limiting-step-hez (cholesterol → pregnenolone)",
    "Neurosteroid CNS-effect: NMDA/GABA-A modulator → mental clarity, brain fog reduction, mild kognitív-enhancement (user-reported + Mosconi 2017 review-support)",
    "OTC dietary supplement – legal-friendly opció AAS-PCT niche-adjuvant role-ban (Nolvadex/HCG prescription-only-context-ben)",
    "Hepatic terhelés alacsony, alacsony toxicitási profil short-to-medium-term használatban"
  ],
  "quickStart": [
    "Beszerzés: USA major supplement-brand-ek (Pure Encapsulations, Life Extension, Thorne Research – micronized-formulation jobb biodostupnošć); EU: NOW Foods import standard",
    "Dose-protokoll AAS-PCT-adjuvant niche: 25-50 mg orális napi 1x este 4-8 hét (cortisol-pattern szinkron, néhány user reggeli dose-zal jobb mental clarity)",
    "OTC general-wellness-dose: 10-25 mg napi 1x – chronic-supplement (NEM PCT-specific)",
    "Bloodwork pre-protokoll: Pregnenolone-serum (sensitive-assay, baseline), DHEA-S, Total/Free Test, E2, cortisol AM-PM pattern",
    "Bloodwork mid + post: 4 hét után Pregnenolone-serum, Test, DHEA-S, cortisol-recheck – downstream-hormone-response confirm vagy elutasít",
    "Evidence-realistic-expectation: neurosteroid mental-clarity-benefit valószínű, downstream-Test-emelkedés LOW-evidence – NEM SERM-PCT-replacement"
  ],
  "expectations": [
    {"label": "Acute 1-3 óra post-dose", "body": "Neurosteroid CNS-effect: enyhe mental clarity-emelkedés, brain fog reduction (user-reported, Mosconi 2017 review-support). Némely user mild alertness-enhancement, mások semmilyen acute-effekt – szignifikáns inter-individuális variabilitás."},
    {"label": "1-2 hét chronic dosing", "body": "Stabil neurosteroid-szintű mental clarity (ha responder). Cortisol-pattern enyhe módosulás (17-OH-Preg branchpoint via). Downstream hormon-szérum-emelkedés még NEM mérhető – kinetika lassú substrate-loading miatt."},
    {"label": "4-8 hét chronic dosing (AAS-PCT niche)", "body": "Maximum substrate-loading potenciál. LOW-evidence Test-emelkedés: néhány user szérum-Test +5-15% baseline, mások nincs változás. Brain fog reduction post-PCT-context-ben legkonzisztensebb subjektív-benefit."},
    {"label": "Long-term (6+ hónap chronic)", "body": "Adat sparse. Hepatic enzyme-rise rare-but-documented (ALT/AST). Conservative cycling (4-8 hét on / 4 hét off) ajánlott chronic-supplement-risk-mitigation-ként."}
  ],
  "quality": {
    "pure": [
      "USA premium supplement-brand: Pure Encapsulations, Life Extension, Thorne Research, Designs for Health – micronized-formulation jobb biodostupnošć",
      "EU sourcing: NOW Foods import (CE-cert), Solgar – pharmaceutical-grade USP-spec",
      "Pharmaceutical-grade-bulk: Sigma-Aldrich (research-chemical, NEM dietary supplement-use)",
      "Micronized vs non-micronized: micronized ~2-3x jobb orális absorption, premium-brand standardpontja"
    ],
    "caution": [
      "Evidence quality LOW – OTC-claim-based hormone-axis-effekt NEM clinical-trial-validated; csak neurosteroid-CNS-effekt evidence-supported (Mosconi 2017 review)",
      "Orális biodostupnošć poor (~5-10%, Roberts 1992 PK) – sublingual + micronized-formulation marginal javít, IM/transdermal compound research-only",
      "Dose-magnitude warning: AAS-PCT context 25-100 mg, schizophrenia-trial (Marx 2009) 500 mg/nap – community OTC-dose mental-clarity-only-effective range",
      "Estradiol-konverzió monitor szükséges (peripheral aromatázon át), bár magnitude small",
      "Long-term high-dose (>50 mg/nap chronic 6+ hónap) hepatic enzyme rise rare-but-documented (ALT/AST baseline-check 12 hét chronic)"
    ],
    "avoid": [
      "Hormone-axis-claim alapján SERM-PCT-replacement-ként alkalmazás (Nolvadex/Clomid kihagyása) – NEM evidence-based, axis-restart NEM dokumentált",
      "Pregnenolone-only-PCT post-cycle full-suppress-status-ban – clinical evidence sparse, Test-recovery NEM garantált",
      "Hormone-sensitive cancer history (prostate, breast) – endogén-precursor-loading theoretical risk",
      "Concurrent oral SERM (Nolvadex) + Pregnenolone hepatic-load + 3β-HSD-pathway-overlap – clinical adat sparse",
      "Pregnant/lactating partner kontakt: theoretical fetal HPG-axis effect (pregnenolone placenta-penetráns)"
    ]
  },
  "interactions": [
    "DHEA: parallel-precursor (pregnenolone upstream, DHEA downstream Δ5-pathway-en); kombináció supplement-stack OTC-piacon standard, DE evidence-magnitude limited",
    "Kisspeptin-10 / HCG / SERM-PCT (Nolvadex, Clomid): Pregnenolone niche-adjuvant role brain-fog-reduction-ra; NEM helyettesíti az axis-restart-agent-eket",
    "Cortisol-pattern: Pregnenolone 17-OH-Preg branchpoint via mild cortisol-modulation – este-dose ajánlott (cortisol-AM-pattern-respect)",
    "Anti-anxiety meds (benzodiazepine, SSRI): GABA-A-receptor negative-modulator-action elméleti antagonizmus – clinical-relevans NEM dokumentált"
  ],
  "studies": [
    {"title": "Neurosteroids Progesterone and Dehydroepiandrosterone: Molecular Mechanisms of Action in Neuroprotection and Neuroinflammation.", "authors": "Fedotcheva TA, Shimanovsky NL", "journal": "Pharmaceuticals (Basel)", "pmid": "40732235"},
    {"title": "Therapeutic potential of enzymes, neurosteroids, and synthetic steroids in neurodegenerative disorders: A critical review.", "authors": "Servi R, Akkoç RF, Aksu F", "journal": "J Steroid Biochem Mol Biol", "pmid": "40288591"},
    {"title": "Advancements in Non-Dopaminergic Treatments for Schizophrenia: A Systematic Review of Pipeline Developments.", "authors": "Komatsu Y, Takehara M, Hart X", "journal": "Pharmacopsychiatry", "pmid": "38710208"}
  ],
  "faq": [
    {"q": "OTC supplement – működik valójában?", "a": "Részben – evidence-quality differencia jelentős. (1) Neurosteroid CNS-effekt (NMDA/GABA-A-modulator): mérsékelten evidence-supported (Mosconi 2017 review, Marx 2009 schizophrenia-trial) – mental clarity, brain fog reduction, mild kognitív-enhancement user-reported konzisztens responder-körben. (2) Hormone-axis substrate-loading-claim (Test/DHEA-emelkedés a teljes szteroidogenezis-pathway via): LOW-evidence – Roberts 1992 PK-vizsgálat orális biodostupnošć <10%, downstream szérum-Test-emelkedés szupervariábilis, NEM clinical-trial-validated AAS-PCT-context-en. Bottom line: brain-fog-reduction OK-claim, hormone-axis-restart NEM evidence-based, NEM SERM-PCT-replacement, NEM HCG-replacement."},
    {"q": "Long-term-safe?", "a": "Adat sparse – conservative cycling ajánlott. Short-to-medium-term (4-8 hét, 25-50 mg/nap) safety-profile alacsony – endogén szteroid-precursor-státusz miatt szerves-toxicitás minimal. Long-term high-dose (>50 mg/nap chronic 6+ hónap): hepatic enzyme rise (ALT/AST) rare-but-documented, theoretical hormone-sensitive cancer risk (prostate, breast – endogén-precursor-loading via). Praktikus protokoll: 4-8 hét on / 4 hét off-cycle, baseline + 12 hét bloodwork (Pregnenolone-serum, Test, E2, cortisol, ALT/AST, lipid panel). Chronic-supplement >12 hónap: medical-supervision-context ajánlott."},
    {"q": "Vs DHEA – mit válasszak?", "a": "Mindkettő poorly bioavailable orálisan, evidence-magnitude limited – válaszd az alacsonyabb-dose-szintet. (1) Pregnenolone: upstream-precursor (cholesterol → pregnenolone → összes szteroid), széles downstream-spektrum + neurosteroid CNS-effekt (NMDA/GABA-A); 25-50 mg napi dose. (2) DHEA: downstream-precursor (pregnenolone → DHEA → androstenedione → Test), szűkebb-spektrum + closer-to-androgen-conversion; 25-100 mg napi dose. Praktikus választás: AAS-PCT brain-fog-context Pregnenolone (neurosteroid-effect erősebb); Test-substrate-loading-direkt-claim DHEA (downstream short-path), DE mindkettő evidence-LOW vs SERM-PCT-standard. Kombináció OTC-stack standard, DE evidence-magnitude additív-effect NEM dokumentált."},
    {"q": "Brain fog post-PCT – Pregnenolone helps?", "a": "Igen, némely esetben – leginkább evidence-supported indikáció. Post-AAS-cycle + post-SERM-PCT-context-en a brain fog (kognitív köd, mental clarity-csökkenés, koncentrációs-zavar) gyakori subjektív-tünet, mechanism multifaktoriális (HPA-axis-rebound, estradiol-fluctuation, neurosteroid-imbalance). Pregnenolone NMDA-positive-modulator + GABA-A-negative-modulator (Mosconi 2017 review) – ez közvetlenül kognitív-enhancement irányba hat. Small RCT-data: Marx 2009 schizophrenia-trial 500 mg/nap (high-dose) mérsékelt kognitív-benefit, AAS-PCT context-ben szokásos 25-50 mg/nap dose-magnitude alacsonyabb, DE responder-arány anekdotikus-evidence alapján OK. Praktikus: 25-50 mg/nap × 4-8 hét próba-protokoll low-risk, csak ha brain-fog-tünet domináns; ha NINCS subjektív-benefit 2-3 hét után – discontinue."}
  ],
  "related": ["dhea", "kisspeptin-10"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 100},
    "unit": "mg/nap (orális, este; 25-100 mg OTC range)",
    "note": "AAS-PCT niche-adjuvant protokoll: 25-50 mg orális napi 1x este (cortisol-pattern szinkron) × 4-8 hét. OTC general-wellness: 10-25 mg napi 1x chronic-supplement. Magas-dose (100 mg+) clinical-trial-context, NEM community-standard. Micronized-formulation jobb biodostupnošć."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pregnenolone-protokoll indítása előtt",
      "timing": "AAS-PCT-fázis indítás vagy chronic brain-fog-context",
      "markers": "Pregnenolone-serum (sensitive-LC-MS/MS-assay), DHEA-S, Total Testosterone, Free Testosterone, Estradiol, cortisol AM + PM, SHBG, ALT/AST, lipid panel.",
      "purpose": "Baseline endogén-szteroidogenezis-status. Indikáció: post-PCT brain-fog-domináns tünet + Pregnenolone-serum alacsony-baseline + DHEA-S alacsony-baseline. Hormone-sensitive cancer-history exclusion."
    },
    "midCycle": {
      "label": "Pregnenolone 2-4 hét chronic dosing",
      "timing": "Protokoll-indítás +14-28 nap, AM-fasting",
      "markers": "Pregnenolone-serum, DHEA-S, Total Test, Estradiol, cortisol AM, subjektív-mental-clarity-questionnaire.",
      "purpose": "Substrate-loading-response confirm: Pregnenolone-serum ~2-5x baseline elvárt (orális bioavailability-limited). Ha NINCS subjektív brain-fog-reduction 4 hét után → discontinue, NEM responder."
    },
    "postCycle": {
      "label": "Pregnenolone-protokoll vége / recovery monitor",
      "timing": "Utolsó dose +7-14 nap",
      "markers": "Pregnenolone-serum, DHEA-S, Total Test, Free Test, Estradiol, cortisol, ALT/AST, lipid panel.",
      "purpose": "Endogén-baseline-recovery confirm: Pregnenolone-serum + DHEA-S vissza pre-protokoll-szintre 7-14 nap alatt. Hepatic-enzyme-elevation exclusion (ALT/AST baseline +20% feletti emelkedés = chronic-dose-reduction)."
    },
    "cruise": {
      "label": "Chronic-supplement-cruise (>12 hónap)",
      "timing": "Quarterly (3 havonta) bloodwork",
      "markers": "Pregnenolone-serum, DHEA-S, Test, Estradiol, cortisol, PSA (>40+ férfi), ALT/AST, lipid panel.",
      "purpose": "Long-term-monitoring: hepatic-enzyme-stability + hormone-sensitive-cancer-screen (PSA, breast-exam). Chronic-dose-reduction trigger: ALT/AST >40% baseline-emelkedés vagy PSA-trend-rise. Conservative cycling (4-8 hét on / 4 hét off) ajánlott chronic-supplement-risk-mitigation-ként."
    }
  }
}
