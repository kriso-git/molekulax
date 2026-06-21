// Gonadorelin (Factrel / Lutrelef) – szintetikus 10-aminosav GnRH (gonadotropin-
// releasing hormone), endogén hypothalamic peptid replika. Direkt pituiter
// GnRH-receptor agonista. FDA Factrel 1982 Wyeth (US-discontinued 2008),
// EMA Lutrelef Ferring pulsatile-pump hypothalamic-hypogonadism Rx.
// Sources: FDA Factrel SmPC (Wyeth 1982), EMA Lutrelef SPC (Ferring),
// Smals 1986 PMID 3093469, Hayes 2000 PMID 10721060.

export default {
  "id": "gonadorelin",
  "sideEffects": [
    { "hu": "Túlérzékenységi reakciók, beleértve ritka anafilaxiát és antitest-képződést ismételt parenterális adagolásnál (FDA Factrel SmPC dokumentált, generalizált urtikária, bronchospasmus).", "en": "Hypersensitivity reactions, including rare anaphylaxis and antibody formation with repeated parenteral dosing (documented in FDA Factrel labeling: generalized urticaria, bronchospasm).", "pl": "Reakcje nadwrażliwości, w tym rzadka anafilaksja i tworzenie przeciwciał przy powtarzanym podawaniu pozajelitowym (udokumentowane w ulotce FDA Factrel: uogólniona pokrzywka, skurcz oskrzeli)." },
    { "hu": "Injekció helyén jelentkező reakciók: fájdalom, bőrpír, viszketés, duzzanat, ritkán flebitis; pulzatilis pumpa-protokollnál tartós kanül-helyi gyulladás és fertőzéskockázat.", "en": "Injection-site reactions: pain, redness, itching, swelling, rarely phlebitis; with pulsatile-pump protocols, ongoing cannula-site inflammation and infection risk.", "pl": "Reakcje w miejscu wstrzyknięcia: ból, zaczerwienienie, świąd, obrzęk, rzadko zapalenie żył; przy protokołach pompy pulsacyjnej przewlekły stan zapalny w miejscu kaniuli i ryzyko zakażenia." },
    { "hu": "Fejfájás, kipirulás (flushing), enyhe szédülés és hányinger, gyakran közvetlenül az injekció után, átmeneti.", "en": "Headache, flushing, mild dizziness and nausea, often immediately post-injection, transient.", "pl": "Ból głowy, zaczerwienienie twarzy (flushing), łagodne zawroty głowy i nudności, często bezpośrednio po wstrzyknięciu, przemijające." },
    { "hu": "Hasi fájdalom és kellemetlen érzés, ritkábban gyomorpanaszok (FDA Factrel-jelentésekben leírt).", "en": "Abdominal pain and discomfort, less commonly gastric complaints (reported in FDA Factrel labeling).", "pl": "Ból i dyskomfort w jamie brzusznej, rzadziej dolegliwości żołądkowe (opisane w ulotce FDA Factrel)." },
    { "hu": "Folyamatos (nem pulzatilis) vagy elhúzódó adagolásnál paradox GnRH-receptor downreguláció és deszenzitizáció: LH/FSH-szuppresszió, a testicularis tesztoszteron csökkenése (a GnRH-agonista terápia kémiai kasztrációs mechanizmusa).", "en": "With continuous (non-pulsatile) or prolonged dosing, paradoxical GnRH-receptor downregulation and desensitization: LH/FSH suppression and falling testicular testosterone (the chemical-castration mechanism of GnRH-agonist therapy).", "pl": "Przy podawaniu ciągłym (niepulsacyjnym) lub przedłużonym paradoksalna down-regulacja i desensytyzacja receptora GnRH: supresja LH/FSH i spadek testosteronu jądrowego (mechanizm kastracji chemicznej terapii agonistami GnRH)." },
    { "hu": "Pulzatilis pumpa-protokollnál fokozott gonadotropin-stimulus miatti túlstimuláció: nőknél többszörös tüszőérés, ováriális hiperstimuláció kockázata; férfiaknál átmeneti másodlagos ösztradiol-emelkedés.", "en": "With pulsatile-pump protocols, overstimulation from increased gonadotropin drive: multiple follicular development and risk of ovarian hyperstimulation in women; transient secondary estradiol rise in men.", "pl": "Przy protokołach pompy pulsacyjnej nadmierna stymulacja z powodu zwiększonego pobudzenia gonadotropin: rozwój wielu pęcherzyków i ryzyko hiperstymulacji jajników u kobiet; przemijający wtórny wzrost estradiolu u mężczyzn." }
  ],
  "contraindications": [
    { "hu": "Ismert túlérzékenység gonadorelinnel vagy GnRH-analógokkal szemben (korábbi anafilaxiás vagy súlyos allergiás reakció).", "en": "Known hypersensitivity to gonadorelin or GnRH analogues (prior anaphylactic or severe allergic reaction).", "pl": "Znana nadwrażliwość na gonadorelinę lub analogi GnRH (wcześniejsza reakcja anafilaktyczna lub ciężka alergiczna)." },
    { "hu": "Hormon-szenzitív daganat vagy annak gyanúja (gonadotropin- vagy nemi hormon-függő tumor), ahol az LH/FSH-stimulus kontraindikált.", "en": "Hormone-sensitive tumor or suspicion thereof (gonadotropin- or sex-hormone-dependent tumor) where LH/FSH stimulation is contraindicated.", "pl": "Nowotwór hormonozależny lub jego podejrzenie (guz zależny od gonadotropin lub hormonów płciowych), gdzie stymulacja LH/FSH jest przeciwwskazana." },
    { "hu": "Pituiter adenoma, különösen prolaktinoma vagy gonadotrop-tumor: GnRH-stimulus pituiter apoplexia és hirtelen hormon-túltermelés kockázatát hordozza.", "en": "Pituitary adenoma, especially prolactinoma or gonadotroph tumor: GnRH stimulation carries a risk of pituitary apoplexy and abrupt hormone surge.", "pl": "Gruczolak przysadki, zwłaszcza prolactinoma lub guz gonadotropowy: stymulacja GnRH niesie ryzyko udaru przysadki i nagłego wyrzutu hormonów." },
    { "hu": "Egyidejű GnRH-agonista terápia (leuprolid/Lupron, gosrelin/Zoladex): receptor-occupancy-átfedés és paradox receptor-downreguláció erősítése – nem ajánlott.", "en": "Concurrent GnRH-agonist therapy (leuprolide/Lupron, goserelin/Zoladex): receptor-occupancy overlap and amplification of paradoxical receptor downregulation – not recommended.", "pl": "Jednoczesna terapia agonistą GnRH (leuprolid/Lupron, goserelina/Zoladex): nakładanie się zajętości receptora i nasilenie paradoksalnej down-regulacji receptora – niezalecane." },
    { "hu": "Terhesség és szoptatás: nincs igazolt biztonságosság, az axis-stimulus nem indokolt; teherbe esni kívánó kezelésnél kizárólag endokrinológiai felügyelet mellett.", "en": "Pregnancy and breastfeeding: no established safety, axis stimulation not indicated; in fertility treatment only under endocrinologist supervision.", "pl": "Ciąża i karmienie piersią: brak ustalonego bezpieczeństwa, stymulacja osi niewskazana; w leczeniu niepłodności wyłącznie pod nadzorem endokrynologa." },
    { "hu": "Nem indikált öngyógyítás AAS-PCT céljára: a pulzatilis pumpa öninjekciózásra impraktikus, a bólus-protokoll evidencia-szegény, a steril technika hiánya fertőzéskockázat.", "en": "Not indicated for self-treatment as AAS-PCT: pulsatile pump is impractical for self-injection, bolus protocol is evidence-poor, and lack of sterile technique creates infection risk.", "pl": "Niewskazane do samoleczenia jako AAS-PCT: pompa pulsacyjna jest niepraktyczna do samodzielnego wstrzykiwania, protokół bolusowy ubogi w dowody, a brak techniki sterylnej stwarza ryzyko zakażenia." }
  ],
  "name": "Gonadorelin (Factrel / Lutrelef)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Szintetikus 10 aminosav GnRH – direkt pituiter GnRH-R stimulus, LH/FSH-release. FDA Factrel 1982 (kivonva US 2008); EMA Lutrelef pulsatile-pump hypothalamic-hipogonadism Rx. Continuous dose paradox-downregulation prostate-cancer kezelésben.",
  "description": "A Gonadorelin a 10-aminosav decapeptid GnRH (gonadotropin-releasing hormone, más néven LHRH) szintetikus replikája – szekvenciálisan IDENTIKUS az endogén hypothalamic GnRH-val (pyroGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH₂). A hypothalamus arcuate-nucleus + median eminence GnRH-neuronok természetes módon ~90-120 perces pulsatile-pattern-ben secretálnak GnRH-t a hypothalamo-pituitár portal-circuit-be; a Gonadorelin SC vagy IV injekciója ezt a pulse-jelet replikálja, és direkten kötődik a pituiter anterior-lobe gonadotrop-sejt GnRH-receptorához → LH + FSH-release. **Klinikai történet**: FDA Factrel jóváhagyás Wyeth 1982 – eredeti indikáció pituiter LH/FSH diagnostic stimulation-test (hypothalamic vs pituitár hypogonadism elkülönítés). US discontinued 2008 (commercial-viability ok, NEM safety). EMA Lutrelef (Ferring) folyamatosan elérhető EU-ban pulsatile-pump-protokollon hypothalamic-hypogonadism-Rx-ként (Kallmann-szindróma + acquired GnRH-deficiency). **Paradox-mechanizmus a continuous-dosing-vel**: chronic-elevated GnRH-szignál (vs pulsatile) downregulálja a GnRH-receptort → ez a GnRH-agonist-therapy mechanizmusa prostate-cancer-kezelésben (Lupron/Leuprolide, Zoladex/Goserelin) – IDENTIKUS molekuláris-családból ellentétes irányú effekt dosing-pattern alapján. **AAS-PCT-context**: a Gonadorelin a Kisspeptin-10 alatti 1 axis-szint (Kisspeptin upstream GPR54 → GnRH-stimulus; Gonadorelin direkt pituitár GnRH-R-stimulus). Praktikus probléma identikus: pulsatile-pump impraktikus self-administration-context-en, single-bolus limited efficacy. UGL-peptid sourcing standard, EU pharm Lutrelef-protokoll-via elérhető.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Pituiter anterior-lobe GnRH-receptor (LHRH-R) direkt agonista → LH + FSH release → testicular Test"},
    {"label": "Adagolás", "value": "100 mcg SC every 90-120 min (pulse-pump, impraktikus) vagy 100-500 mcg SC bolus pre-cycle (community-protokoll, limited efficacy)"},
    {"label": "Felezési idő", "value": "~10-40 perc (very short – pulsatility-pattern essentialis)"},
    {"label": "Hatáskezdet", "value": "LH/FSH-spike 15-60 perc SC után"},
    {"label": "Jogi státusz", "value": "FDA Factrel kivonva 2008; EMA Lutrelef Ferring Rx (pulsatile-pump hypothalamic-hypogonadism); WADA S2 Peptide Hormones banned"}
  ],
  "mechanism": "A GnRH (gonadotropin-releasing hormone, LHRH) egy 10-aminosav decapeptid hypothalamic hormon, amelyet az arcuate-nucleus + preoptic-area GnRH-neuronok pulsatile-pattern-ben (~90-120 perces ciklusok) secretálnak a hypothalamo-pituitár portal-circuit-be. A Gonadorelin EZ A 10-aminosav peptid szintetikus replikája – szekvencia (pyroGlu¹-His²-Trp³-Ser⁴-Tyr⁵-Gly⁶-Leu⁷-Arg⁸-Pro⁹-Gly¹⁰-NH₂) IDENTIKUS az endogén GnRH-val. Receptora a GnRH-R (LHRH-R) – G-protein-coupled receptor a pituitár anterior-lobe gonadotrop-sejteken. Kötés → Gq/11 pathway → PLC-aktiváció → IP3 + DAG → intracelluláris Ca²⁺-mobilizáció + PKC-aktiváció → LH-vesicle + FSH-vesicle exocytosis. **Pulsatility-paradox**: a pituitár gonadotrop-sejt GnRH-receptor sensitivity dosing-pattern-függő – pulsatile-stimulus (90-min cycles) fenntartja a receptor-density-t és LH/FSH-release-folytonosságot, MIG continuous-elevated GnRH-szignál (vagy long-acting GnRH-analog mint Leuprolide) → receptor-downregulation + desensitization → LH/FSH-suppression. EZ A mechanizmusa a GnRH-agonist therapy prostate-cancer-context-ben (chemical castration). Hepatikus stresszezés peptid-SC-injekció miatt nincs.",
  "legalStatus": "USA: FDA Factrel (Wyeth 1982) jóváhagyás diagnostic LH/FSH-stimulation-test indikációra; commercial-discontinued 2008 (NEM safety-ok, market-viability). Compounding pharmacy limited sourcing 2026-ban. EU: EMA Lutrelef (Ferring) Rx folyamatosan elérhető pulsatile-pump-protokollon hypothalamic-hypogonadism (Kallmann-szindróma) + acquired GnRH-deficiency-Rx-ként. HU + PL: Lutrelef speciális-import lehetséges endokrinológus-specialist-Rx-en. WADA: S2 Peptide Hormones – banned in-competition + out-of-competition year-round.",
  "onsetTime": "LH/FSH-spike 15-60 perc SC után",
  "halfLife": "~10-40 perc",
  "halfLifeActive": "~10-40 perc (parent peptid aktív; metabolite-fragmensek inaktívak)",
  "interactionsWith": ["kisspeptin-10", "hcg-perf", "hmg-perf", "fsh-rec-perf"],
  "aromatization": "Indirekt – GnRH → LH/FSH → testicular Test → másodlagos peripheral E2-konverzió (CYP19 aromatase). Magnitude similar to HCG-rebound, pulsatile-protokollon moderate.",
  "hepatotoxicity": "Nincs – peptid SC injekció.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (hypothalamic peptid-replika, NEM AAS)",
  "bindingAffinity": "Pituiter GnRH-R (LHRH-R) Kd ~1-5 nM, high-affinity natural-ligand-kötés.",
  "detectionWindow": "WADA-akkreditált LC-MS/MS sparse – peptid-detection vizeletmintából 12-24 óra (very short t1/2 miatt). Endogén GnRH-baseline mellett detection-confound lehetséges.",
  "benefits": [
    "Direkt pituitár GnRH-R stimulus – 1 axis-szinttel a Kisspeptin-10 alatt, közelebb a downstream LH/FSH-release-hez",
    "EMA Lutrelef pharmaceutical-grade pulsatile-pump-protokoll evidence (Kallmann-szindróma + hypothalamic-hypogonadism Rx)",
    "Identikus szekvencia az endogén GnRH-val – receptor-fit optimális",
    "Nincs hepatikus stressz – peptid SC"
  ],
  "quickStart": [
    "Beszerzés: EU Lutrelef-protokoll (Ferring pulsatile-pump) endokrinológus-Rx-en; UGL-peptid-CDMO (Bachem, Lipotec, AmbioPharm) HPLC + mass-spec-tested",
    "Reconstitution: 100 mcg/vial vagy 500 mcg/vial lyophilized → 1-2 mL bacteriostatic water; 100 mcg/mL vagy 500 mcg/mL koncentráció",
    "Pulse-pump-protokoll (research/clinical-Rx): 100 mcg SC every 90-120 min, ~12-16 dose/24 óra – KIZÁRÓLAG pump-protokoll",
    "Bolus-protokoll (community DIY-PCT): 100-500 mcg SC napi 1x reggel, limited efficacy – single LH-spike",
    "Bloodwork pre-treatment: Total Test, Free Test, LH, FSH, Estradiol, SHBG, Prolactin baseline",
    "Bloodwork mid + post: 30-60 perc post-injekció LH/FSH-spike confirm, 7-14 nap Total-Test-recovery"
  ],
  "expectations": [
    {"label": "15-60 perc SC után", "body": "LH-spike mérhető (~3-6x baseline emelkedés, Smals 1986 + Hayes 2000 data). FSH-spike enyhébb (~2-4x). Test-emelkedés szérum-szinten ~2-6 óra delay-vel."},
    {"label": "12-24 óra", "body": "LH/FSH-szint visszaesik (very short felezés). Test-emelkedés tartós ~1-2 napon át. Második dose-zal pulsatility-simulating effect kiterjedhet."},
    {"label": "Chronic pulse-pump-protokoll (Lutrelef, 1-2 hét)", "body": "HPG-tengely full physiological pulsatile-pattern restart. Hypothalamic-hypogonadism kontextusban LH/FSH endogén-szint elérhető."},
    {"label": "Bolus-DIY-protokoll AAS-PCT", "body": "Limited efficacy – single LH-spike-onkénti dose, NEM chronic-axis-restart. SERM-PCT-replacement role NEM evidence-based jelenleg."}
  ],
  "quality": {
    "pure": [
      "EU pharmaceutical-grade: Ferring Lutrelef pulsatile-pump-kit (speciális-import endokrinológus-Rx)",
      "USA peptid-CDMO: Bachem, Lipotec, AmbioPharm – HPLC + mass-spec-tested (>98% purity), R&D-grade vials",
      "EU peptid-CDMO: PolyPeptide Group (Belgium), Bachem Bubendorf (Svájc) – pharmaceutical-grade",
      "UGL peptid-vendor (Asian sourcing): HPLC-cert kötelező – purity gyakran <90%, mass-spec-confirm nélkül elkerülni"
    ],
    "caution": [
      "Pulse-pump protokoll impraktikus self-administration (90-120-min cyclic injection 24/7) – research/clinical-setting only",
      "Bolus-dose limited efficacy – single-LH-spike vs chronic-HPG-tengely restart",
      "Very short t1/2 (~10-40 min) – egyetlen-dose-window-effect, dosing-frequency-critical",
      "Bacteriostatic-water tárolás: 4°C reconstituted-peptid 14-21 napig stabil; 25°C szobahő <7 nap",
      "Mass-spec-cert nélkül vásárolt UGL-forrás: degradált-fragmensek + pseudo-peptid frequent"
    ],
    "avoid": [
      "Continuous-dosing protokoll (>30 nap chronic-elevated szignál): receptor-downregulation paradox → LH/FSH-suppression (GnRH-agonist-therapy mechanizmusa)",
      "Co-administration GnRH-agonist therapy (Lupron/Leuprolide, Zoladex/Goserelin): receptor-occupancy-overlap, NEM ajánlott",
      "Self-administration pulse-pump-protokoll képzetlen-felhasználón (sterile-technique critical, infection risk)",
      "Pituitár-tumor (prolaktinoma) gyanú: GnRH-stimulus-test kontraindikált",
      "Pregnant partner kontakt: theoretical fetal HPG-axis effect"
    ]
  },
  "interactions": [
    "Kisspeptin-10: NEM ajánlott együtt (overlap-mechanism, redundant GnRH-pathway stimulation – Kisspeptin upstream, Gonadorelin downstream same-pathway)",
    "HCG-perf: synergia lehetséges – Gonadorelin pituitár-LH-release + HCG testicular-LHCGR-stimulus combo (pituitár + testikuláris dual-stimulus)",
    "SERM (Nolvadex, Clomid): theoretical synergia (Gonadorelin pituitár-stimulus + SERM-ER-blokád), DE clinical evidence sparse",
    "GnRH-agonist-therapy (Lupron, Zoladex): KONTRAINDIKÁLT – receptor-occupancy-overlap + paradox-receptor-downregulation amplification"
  ],
  "studies": [
    {"title": "Factrel (gonadorelin hydrochloride) for injection – FDA Label", "authors": "Wyeth-Ayerst Laboratories", "journal": "FDA NDA 18123 (1982); US-discontinued 2008.", "pmid": "FDA-Factrel-SmPC"},
    {"title": "Lutrelef (gonadorelin acetate) – EMA Summary of Product Characteristics", "authors": "Ferring Pharmaceuticals", "journal": "EMA SPC, pulsatile-pump hypothalamic-hypogonadism indikáció.", "pmid": "EMA-Lutrelef-SPC"},
    {"title": "Therapeutic effects of a pulsatile GnRH pump on adult male patients with congenital hypogonadotropic hypogonadism (CHH): a retrospective study.", "authors": "Jiang H, Li BJ, Jin DC", "journal": "Transl Androl Urol", "pmid": "40800099"},
    {"title": "[Effect and safety of pulsatile GnRH therapy for male congenital hypogonadotropic hypogonadism].", "authors": "Niu YH, Xu H, Chen YW", "journal": "Zhonghua Nan Ke Xue", "pmid": "39210488"}
  ],
  "faq": [
    {"q": "Gonadorelin vs Kisspeptin-10 – különbség?", "a": "Axis-level hierarchy különbség: a **Gonadorelin** direkten a pituitár GnRH-R-en hat (1 axis-szint a Kisspeptin alatt) – közvetlen LH/FSH-release-stimulus; a **Kisspeptin-10** a hypothalamic GPR54-en hat → endogén GnRH-pulse-trigger → pituitár GnRH-R-stimulus (legfelső upstream point). Molekuláris-natúra: Gonadorelin SZEKVENCIÁLISAN IDENTIKUS az endogén GnRH-val (10-aminosav decapeptid); Kisspeptin-10 a 10-aminosav C-terminál fragmens egy 145-aminosav prekurzor proteinből (KISS1). Klinikai praxis: Gonadorelin EMA Lutrelef pharmaceutical-grade elérhető (pulsatile-pump-protokoll), Kisspeptin-10 még research-emerging (Imperial College Phase II). Magnitude: hasonló LH/FSH-spike-pattern."},
    {"q": "Continuous infusion vs pulse – opposite effect?", "a": "Igen, **paradox-mechanizmus** dosing-pattern-függő. Pulsatile-protokoll (90-120 perces cycles, mimicking natural hypothalamic GnRH-secretion): fenntartja a pituitár GnRH-R receptor-density-t és LH/FSH-release-folytonosságot → physiological-stimulation. Continuous-elevated szignál (long-acting GnRH-analog mint Leuprolide/Lupron vagy Goserelin/Zoladex chronic-infusion): receptor-downregulation + desensitization → LH/FSH-suppression → testicular Test-suppression → ez a **chemical castration** mechanizmusa prostate-cancer-kezelésben + endometriosis-Rx-en. IDENTIKUS molekuláris-családból ellentétes irányú effekt – ez a GnRH-pulsatility-paradoxon, gold-standard pituitár-pharmacology példa."},
    {"q": "Beszerzhetőség 2026-ban?", "a": "EU: **Lutrelef** (Ferring) elérhető pharmaceutical-grade pulsatile-pump-protokollon – endokrinológus-specialist-Rx-en speciális-import (Kallmann-szindróma + acquired GnRH-deficiency-Rx indikáció). HU + PL: rare-disease-protokoll-via lehetséges, NEM standard-pharmacy. USA: Factrel commercial-discontinued 2008 – compounding pharmacy limited sourcing (Wedgewood, Empower Pharmacy). Research-chemical: peptid-CDMO standard (Bachem, Lipotec, AmbioPharm USA; PolyPeptide Group EU) HPLC + mass-spec-tested ~$20-40/mg. UGL-peptid (Asian sourcing): frequent, DE HPLC-cert kötelező – purity gyakran <90%."},
    {"q": "Lehet jó AAS-PCT helyett SERM?", "a": "**Jelenleg evidence-base limited**, SERM-replacement NEM ajánlott. Praktikus problémák: (1) pulsatile-pump-protokoll impraktikus self-administration-context-en (90-120-min cycles 24/7); (2) bolus-dose limited efficacy (single LH-spike vs chronic axis-restart); (3) very short t1/2 (~10-40 min) – frequent dosing kell. Klinikai standard AAS-PCT 2026-ban: **SERM (Nolvadex 40/20/20/20 mg/day × 4 hét) ± HCG (1500-2500 IU EOD × 10-14 nap)** – jobb-dokumentált, praktikusabb, identikus end-result (HPG-tengely restart). Gonadorelin niche-option: SERM-PCT-failure case-en + experimental pulse-pump-protokoll research-setting-en. Imperial College Phase II + Hayes 2000 evidence-base mostly hypogonadism-Rx-context, NEM AAS-PCT."}
  ],
  "related": ["kisspeptin-10", "hcg-perf", "hmg-perf", "fsh-rec-perf"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 100, "medium": 250, "high": 500},
    "unit": "mcg SC napi 1x (bolus-protokoll, pulsatile-pump kivételével limited)",
    "note": "Pulse-pump protokoll (Lutrelef-clinical): 100 mcg SC every 90-120 min × 24h cycles. Bolus DIY-protokoll (AAS-PCT): 100-500 mcg SC napi 1x reggel × 7-14 nap. Reconstitution: 100 mcg/vial → 1 mL bacteriostatic water (100 mcg/mL). Tárolás: 4°C reconstituted 14-21 nap stabil."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Gonadorelin-treatment indítása előtt",
      "timing": "PCT-fázis indítás vagy hypothalamic/pituitár-hypogonadism-context",
      "markers": "Total Testosterone, Free Testosterone, LH, FSH, Estradiol, SHBG, Prolactin, inhibin-B (ha elérhető), lipid panel, ALT/AST, hemogram.",
      "purpose": "Baseline HPG-tengely status. Indikáció: hypothalamic vs pituitár-szintű suppression elkülönítés (Factrel original-diagnostic-indikáció), AAS-PCT-context post-cycle pituitár-restart. SERM-PCT-failure case-en niche-option."
    },
    "midCycle": {
      "label": "Gonadorelin 30-60 perc post-injekció",
      "timing": "SC-bolus +15-60 perc (LH/FSH-spike) + 2-6 óra delayed (Test-emelkedés)",
      "markers": "LH (acute spike confirm), FSH, Total Test, Free Test, Estradiol (másodlagos emelkedés).",
      "purpose": "Acute-response confirm: LH ~3-6x baseline spike Smals 1986 elvárt. Ha NINCS LH-spike → pituitár-szintű failure (nem hypothalamic) vagy peptid-quality-issue. Diagnostic-discriminatior hypothalamic vs pituitár hypogonadism elkülönítésre."
    },
    "postCycle": {
      "label": "Gonadorelin-protokoll vége / recovery monitor",
      "timing": "Utolsó dose +7-14 nap",
      "markers": "Total Test, Free Test, LH, FSH, Estradiol, SHBG, lipid panel.",
      "purpose": "HPG-tengely sustained-restart confirm: LH/FSH ≥ kor-specifikus-baseline-low, Test ≥ pre-treatment +25%. Ha NINCS sustained-recovery → SERM-PCT (Nolvadex 4-6 hét) adjuváns indokolt."
    },
    "cruise": {
      "label": "Chronic AAS-cruise-on NEM ajánlott",
      "timing": "N/A",
      "markers": "N/A",
      "purpose": "Gonadorelin chronic-cruise NEM ajánlott – continuous-dosing paradox-mechanizmus (receptor-downregulation → LH/FSH-suppression). Csak acute-PCT-fázis-bolus vagy pulse-pump clinical-Rx-protokoll setting-en."
    }
  }
}
