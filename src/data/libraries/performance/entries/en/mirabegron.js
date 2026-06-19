// Mirabegron (Myrbetriq) — Astellas Pharma 2012 FDA-approved selective β3-adrenoceptor
// agonist for OAB. BAT-tissue activation enables thermogenic off-label fat-loss use
// since Cypess 2015. Sources: FDA Myrbetriq SmPC, Khullar 2013 PMID 23537815,
// Cypess 2015 PMID 25437872, Loh 2019 PMID 31263458, Finlin 2020 PMID 32119651.

export default {
  "id": "mirabegron",
  "sideEffects": [
    { "hu": "Vérnyomás-emelkedés, hypertonia (dózisfüggő, az egyik leggyakoribb és klinikailag legfontosabb mellékhatás; pre-existing hypertonia súlyosbodhat)", "en": "Blood pressure elevation, hypertension (dose-dependent, one of the most common and clinically important effects; pre-existing hypertension can worsen)", "pl": "Wzrost ciśnienia krwi, nadciśnienie (zależne od dawki, jeden z najczęstszych i klinicznie najważniejszych efektów; istniejące nadciśnienie może się nasilić)" },
    { "hu": "Tachycardia, nyugalmi pulzus emelkedése, szívdobogásérzés (palpitatio)", "en": "Tachycardia, increased resting heart rate, palpitations", "pl": "Tachykardia, zwiększona spoczynkowa częstość akcji serca, kołatanie serca" },
    { "hu": "Húgyúti retenció, vizeletürítési nehézség, húgyúti infekció (a detrusor-relaxáció miatt, főleg hólyagkiáramlási obstrukcióval rendelkezőknél)", "en": "Urinary retention, difficulty voiding, urinary tract infection (from detrusor relaxation, especially with bladder outlet obstruction)", "pl": "Zatrzymanie moczu, trudności w oddawaniu moczu, zakażenie dróg moczowych (z relaksacji wypieracza, zwłaszcza przy przeszkodzie podpęcherzowej)" },
    { "hu": "Fejfájás, szédülés", "en": "Headache, dizziness", "pl": "Ból głowy, zawroty głowy" },
    { "hu": "Nasopharyngitis, fej- és felső légúti tünetek, szájszárazság", "en": "Nasopharyngitis, upper respiratory symptoms, dry mouth", "pl": "Zapalenie nosogardła, objawy górnych dróg oddechowych, suchość w ustach" },
    { "hu": "Székrekedés, hányinger, hasi diszkomfort", "en": "Constipation, nausea, abdominal discomfort", "pl": "Zaparcia, nudności, dyskomfort w jamie brzusznej" },
    { "hu": "QTc-megnyúlás magasabb dózisokon (EKG-monitorozás indokolt, főleg QT-nyújtó gyógyszerek mellett)", "en": "QTc prolongation at higher doses (ECG monitoring warranted, especially with other QT-prolonging drugs)", "pl": "Wydłużenie QTc przy wyższych dawkach (uzasadnione monitorowanie EKG, zwłaszcza z innymi lekami wydłużającymi QT)" },
    { "hu": "Ritka, de súlyos: angioödéma (arc, ajak, nyelv, gége duzzanata, légúti elzáródás veszélyével – azonnali leállítást igényel)", "en": "Rare but serious: angioedema (swelling of face, lips, tongue, larynx, with airway-obstruction risk – requires immediate discontinuation)", "pl": "Rzadki, ale poważny: obrzęk naczynioruchowy (obrzęk twarzy, warg, języka, krtani, z ryzykiem niedrożności dróg oddechowych – wymaga natychmiastowego odstawienia)" }
  ],
  "contraindications": [
    { "hu": "Súlyos, nem kontrollált hypertonia (>=180/110 mmHg) – abszolút kontraindikáció (FDA-figyelmeztetés; kontrollálatlan vérnyomás esetén ne kezdjék el)", "en": "Severe, uncontrolled hypertension (>=180/110 mmHg) – absolute contraindication (FDA warning; do not start if blood pressure is uncontrolled)", "pl": "Ciężkie, niekontrolowane nadciśnienie (>=180/110 mmHg) – bezwzględne przeciwwskazanie (ostrzeżenie FDA; nie rozpoczynać przy niekontrolowanym ciśnieniu)" },
    { "hu": "Súlyos vesekárosodás (ESRD/dialízis) és súlyos májkárosodás (Child-Pugh C) – ezekben nem ajánlott, illetve dóziscsökkentés kötelező közepes fokú érintettségnél", "en": "Severe renal impairment (ESRD/dialysis) and severe hepatic impairment (Child-Pugh C) – not recommended; dose reduction required in moderate impairment", "pl": "Ciężka niewydolność nerek (ESRD/dializa) i ciężka niewydolność wątroby (Child-Pugh C) – niezalecany; redukcja dawki wymagana przy umiarkowanym zaburzeniu" },
    { "hu": "Klinikailag jelentős hólyagkiáramlási obstrukció vagy antimuszkarinnal kezelt OAB – fokozott vizeletretenció kockázata", "en": "Clinically significant bladder outlet obstruction or OAB treated with antimuscarinics – increased urinary retention risk", "pl": "Klinicznie istotna przeszkoda podpęcherzowa lub OAB leczone antymuskarynowo – zwiększone ryzyko zatrzymania moczu" },
    { "hu": "Pre-existing tachyarrhythmia, instabil/jelentős szívbetegség, vagy ismert QT-megnyúlás / QT-nyújtó gyógyszerek – fokozott kardiális kockázat", "en": "Pre-existing tachyarrhythmia, unstable/significant cardiac disease, or known QT prolongation / QT-prolonging drugs – elevated cardiac risk", "pl": "Istniejąca tachyarytmia, niestabilna/istotna choroba serca lub znane wydłużenie QT / leki wydłużające QT – podwyższone ryzyko sercowe" },
    { "hu": "Terhesség és szoptatás – nem ajánlott (nincs elegendő humán biztonsági adat)", "en": "Pregnancy and breastfeeding – not recommended (insufficient human safety data)", "pl": "Ciąża i karmienie piersią – niezalecany (niewystarczające dane dotyczące bezpieczeństwa u ludzi)" },
    { "hu": "Mirabegronnal vagy segédanyaggal szembeni túlérzékenység, illetve korábbi angioödéma az anamnézisben", "en": "Hypersensitivity to mirabegron or excipients, or prior history of angioedema", "pl": "Nadwrażliwość na mirabegron lub substancje pomocnicze albo wcześniejszy obrzęk naczynioruchowy w wywiadzie" },
    { "hu": "Óvatosság erős CYP2D6-szubsztrátokkal (pl. metoprolol, dezipramin) és CYP2D6-gátló SSRI/TCA mellett – plazmaszint-emelkedés, dózismódosítás szükséges lehet", "en": "Caution with sensitive CYP2D6 substrates (e.g. metoprolol, desipramine) and CYP2D6-inhibiting SSRIs/TCAs – plasma-level increase, dose adjustment may be needed", "pl": "Ostrożność z wrażliwymi substratami CYP2D6 (np. metoprolol, dezypramina) oraz SSRI/TCA hamującymi CYP2D6 – wzrost stężenia w osoczu, może być potrzebna korekta dawki" }
  ],
  "name": "Mirabegron (Myrbetriq)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Astellas Pharma 2012 FDA-approved selective β3-adrenoceptor agonist (Myrbetriq), originally an overactive bladder (OAB) Rx. Since Cypess 2015 BAT-activation trial, used off-label as a thermogenic fat-loss tool: +5-10% BMR with active brown adipose tissue volume.",
  "description": "Mirabegron (Myrbetriq) is a first-in-class selective β3-adrenoceptor agonist developed by Astellas Pharma and FDA-approved in 2012 for symptomatic treatment of overactive bladder (OAB). The β3-receptor's specific tissue expression drives its clinical relevance: in detrusor smooth muscle it mediates bladder relaxation (clinical OAB indication), while in brown adipose tissue (BAT) it triggers UCP1-mediated thermogenic activation that enables its off-label fat-loss use. Cypess 2015 Cell Metabolism PMID 25437872 was the first human trial to demonstrate significant BAT activation following a single oral 200 mg dose in healthy adults (PET-CT 18F-FDG measurement). Loh 2019 PMID 31263458 and Finlin 2020 J Clin Invest PMID 32119651 further validated chronic-dose metabolic rate elevation + visceral adipose tissue browning-induction. Clinical OAB dosing is 25-50 mg/day; off-label fat-loss protocols typically use 75-100 mg/day. The FDA's 2018 black-box update warns pre-existing cardiovascular-disease patients after post-marketing severe hypertension + tachycardia case clusters. WADA does not list it as explicitly banned, but several national federations classify it as monitored.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Selective β3-adrenoceptor agonist (detrusor + BAT UCP1 induction)"
    },
    {
      "label": "Dosing",
      "value": "Clinical OAB 25-50 mg/day; off-label fat-loss 75-100 mg/day PO AM"
    },
    {
      "label": "Half-life",
      "value": "~50 hours (once-daily dosing optimal)"
    },
    {
      "label": "Onset time",
      "value": "Detrusor 2-4 h; BAT activation chronic dose 2-4 weeks"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA Rx (OAB), HU + PL registered. WADA: not explicitly banned, monitored by some national federations."
    }
  ],
  "mechanism": "Mirabegron is a selective agonist at the β3-adrenoceptor (β3-AR), a G-protein-coupled receptor whose tissue expression makes three sites pharmacologically relevant: detrusor smooth muscle (bladder relaxation), brown adipose tissue (UCP1-mediated thermogenic activation), and visceral white adipose tissue (browning-induction). The intracellular cascade is standard β-receptor: β3 → Gs-protein → adenylyl cyclase → cAMP → PKA → CREB phosphorylation → UCP1 gene transcription upregulation. BAT activation is directly thermogenic: UCP1, an inner mitochondrial membrane proton channel, dissipates the proton gradient as heat, bypassing ATP synthesis. An average adult male carries approximately 40-50 g of active BAT (lifestyle + age-dependent decline), cold-exposure inducible. Chronic Mirabegron dosing (>4 weeks, 50-100 mg/day) increases BAT volume by +30-50% as measured by 18F-FDG PET-CT (Loh 2019). β1/β2 receptor spillover is minimal (>50x selectivity for β3), so the cardiotoxic tachycardia risk is lower than with Clenbuterol; however, hypertension risk is DOMINANT, because the β3 receptor also participates in peripheral arterial vascular-tone regulation.",
  "legalStatus": "USA: FDA-approved 2012 (Myrbetriq, Astellas Pharma) for symptomatic OAB treatment; Schedule N/A (not controlled). 2018 FDA black-box update after severe hypertension + tachycardia case clusters. EU: EMA-approved (Betmiga). HU: registered (Betmiga Rx). PL: registered (Betmiga Rx). WADA: not explicitly banned (β3-agonist not listed in S6 stimulant or S3 β2-agonist categories), BUT national federations have placed it in the monitored category — TUE process recommended with pre-existing OAB-Rx diagnosis.",
  "onsetTime": "Detrusor 2-4 h; BAT activation chronic dose 2-4 weeks",
  "halfLife": "~50 hours",
  "interactionsWith": [
    "metoprolol",
    "desipramine",
    "albuterol",
    "clenbuterol"
  ],
  "aromatization": "Does not aromatize (not a steroid — selective β3-adrenoceptor agonist). No CYP19 interaction; the estrogen axis is unaffected.",
  "hepatotoxicity": "Low — DILI is rare, ALT elevation <2% incidence documented in clinical trials (Khullar 2013 OAB-RCT PMID 23537815). CYP2D6 + CYP3A4 metabolism creates drug-interaction risk with metoprolol and desipramine (Mirabegron is a CYP2D6 substrate-inhibitor, plasma-level elevator).",
  "wadaStatus": "restricted",
  "androgenicRatio": "N/A (not an AAS)",
  "bindingAffinity": "β3-adrenoceptor Ki ~5-10 nM; β1/β2-receptor >50x lower affinity (selectivity index per Astellas FDA-submission documentation).",
  "detectionWindow": "WADA-accredited LC-MS/MS urine detection ~3-5 days (Mirabegron + N-dealkyl-Mirabegron metabolite). National federation monitoring thresholds vary.",
  "benefits": [
    "BAT-tissue thermogenic activation (+5-10% BMR with active BAT volume, Cypess 2015 PMID 25437872)",
    "Visceral adipose tissue browning-induction (Finlin 2020 J Clin Invest PMID 32119651)",
    "Clinical OAB-Rx evidence-rich (13 years of PMID literature since 2012 FDA approval)",
    "β1/β2 receptor spillover minimal (>50x selectivity), cardiotoxic tachycardia risk lower than Clenbuterol",
    "Once-daily oral dosing (~50 h t1/2)",
    "Insulin sensitivity elevation alongside visceral BAT activation (Loh 2019 PMID 31263458)"
  ],
  "quickStart": [
    "Educational context: Mirabegron FDA-Rx OAB indication + off-label fat-loss thermogenic use",
    "Clinical OAB dosing 25-50 mg/day (low-titration); off-label fat-loss 75-100 mg/day PO AM",
    "BAT-activation chronic dose (4+ weeks) → +5-10% BMR with active BAT volume",
    "Pre-cycle BP home-tracking baseline (FDA 2018 black-box hypertension risk)",
    "EKG baseline + 4-week check (resting HR + QTc monitoring)",
    "Contraindicated alongside chronic β-blocker therapy (β3-selectivity disturbance)",
    "Cycle length 8-12 weeks MAX, then 2-4 weeks OFF (β3-receptor tachyphylaxis)"
  ],
  "expectations": [
    {
      "label": "Week 1-2",
      "body": "Detrusor relaxation effect perceptible (OAB symptom improvement where present). BAT activation begins at PET-CT-detectable level, but no perceptible BMR elevation yet."
    },
    {
      "label": "Week 3-4",
      "body": "BAT volume elevation measurable on PET-CT (+20-30%). Mild resting HR elevation (+3-7 bpm). Subjective fat-loss still only +0.1-0.3 kg/week above placebo."
    },
    {
      "label": "Week 8-12",
      "body": "Steady-state BAT activation. Fat-loss tempo +0.3-0.5 kg/week with active BAT volume (0-0.2 kg/week in low-BAT-baseline individuals). Cycle-end recommended with 2-4 weeks OFF due to β3-tachyphylaxis."
    }
  ],
  "quality": {
    "pure": [
      "FDA-approved Myrbetriq tablets (Astellas Pharma) or EMA Betmiga — pharmacy-sourcing guarantees active-ingredient content",
      "Generic Mirabegron substitute expected after 2027 patent expiry; currently brand-only globally"
    ],
    "caution": [
      "BP home-tracking 2x/day (FDA 2018 black-box hypertension risk, severe hypertension + tachycardia case clusters post-marketing)",
      "EKG baseline + 4-week check (resting HR + QTc-prolongation monitoring)",
      "CYP2D6 + CYP3A4 metabolism — SSRI fluoxetine / paroxetine interaction (plasma-level elevator)",
      "Metoprolol + desipramine plasma-level dose-adjust required alongside Mirabegron",
      "Tachyphylaxis after 8-12 weeks — 2-4 week cycle-off recommended",
      "Insomnia, anxiety low-incidence side effects"
    ],
    "avoid": [
      "Severe hypertension (>180/110 mmHg) — absolute contraindication",
      "Pre-existing tachyarrhythmia, cardiomyopathy — absolute contraindication",
      "Chronic β-blocker therapy (metoprolol, propranolol) — β3-selectivity disturbance documented in clinical trials",
      "Pregnancy and lactation (FDA pregnancy category C)",
      "Pheochromocytoma — absolute contraindication (catecholamine storm risk)",
      "Stroke history (relative contraindication, individual risk assessment)"
    ]
  },
  "interactions": [
    "Metoprolol + propranolol (β-blockers) — contraindicated, β3-selectivity disturbance documented in clinical trials",
    "Fluoxetine + paroxetine (SSRI CYP2D6-inhibitors) — Mirabegron plasma-level elevation 2-3x",
    "Desipramine + amitriptyline (TCA) — Mirabegron CYP2D6 substrate-inhibitor combination yields higher plasma levels and QTc-prolongation risk",
    "Albuterol + ephedrine + clenbuterol — additive cardio-stress, high HR + BP, avoidance recommended",
    "Caffeine + theobromine — synergistic sympathomimetic effect, higher BP elevation",
    "Digoxin — Mirabegron CYP3A4-mediated plasma-level elevation of digoxin, EKG monitoring required"
  ],
  "studies": [
    {
      "title": "Efficacy and Safety of Mirabegron in Males with Overactive Bladder and Lower Urinary Tract Symptoms: Analysis from an Integrated Clinical Trial Database.",
      "authors": "Hadi FA, Schild A, Hansen MK",
      "journal": "Eur Urol Open Sci",
      "pmid": "41246035"
    },
    {
      "title": "Activation of human brown adipose tissue by a β3-adrenergic receptor agonist.",
      "authors": "Cypess AM, Weiner LS, Roberts-Toler C, Franquet Elía E, Kessler SH, Kahn PA, English J, Chatman K, Trauger SA, Doria A, Kolodny GM",
      "journal": "Cell Metab",
      "pmid": "25565203"
    },
    {
      "title": "Acute metabolic and cardiovascular effects of mirabegron in healthy individuals.",
      "authors": "Loh RKC, Formosa MF, La Gerche A, Reutens AT, Kingwell BA, Carey AL",
      "journal": "Diabetes Obes Metab",
      "pmid": "30203462"
    },
    {
      "title": "Chronic mirabegron treatment increases human brown fat, HDL cholesterol, and insulin sensitivity.",
      "authors": "O'Mara AE, Johnson JW, Linderman JD, Brychta RJ, McGehee S, Fletcher LA, Fink YA, Kapuria D, Cassimatis TM, Kelsey N, Cero C, Sater ZA, Piccinini F, Baskin AS, Leitner BP, Cai H, Millo CM, Dieckmann W, Walter M, Javitt NB, Rotman Y, Walter PJ, Ader M, Bergman RN, Herscovitch P, Chen KY, Cypess AM",
      "journal": "J Clin Invest",
      "pmid": "31961826"
    },
    {
      "title": "Anatomical localization, gene expression profiling and functional characterization of adult human neck brown fat",
      "authors": "Cypess AM, White AP, Vernochet C et al.",
      "journal": "Nat Med. 2013;19(5):635-639.",
      "pmid": "23603815"
    },
    {
      "title": "Cardiovascular safety of mirabegron: analysis of an integrated clinical trial database of patients with overactive bladder syndrome.",
      "authors": "White WB, Siddiqui E, Tat T, Franks B, Schermer CR",
      "journal": "J Am Soc Hypertens",
      "pmid": "30181042"
    }
  ],
  "faq": [
    {
      "q": "Mirabegron vs Clenbuterol — which is safer for fat loss?",
      "a": "Mirabegron's β3-selectivity (>50x over β1/β2) minimizes cardio-receptor spillover, so the Clenbuterol-style chronic tachycardia + myocardial hypertrophy risk is lower. However, Mirabegron's hypertension risk is DOMINANT (FDA 2018 black-box update following post-marketing severe hypertension + tachycardia case clusters). Both require BP + EKG monitoring. Clenbuterol's accumulation (~35-40 h t1/2) is less predictable; Mirabegron's once-daily (~50 h t1/2) makes steady-state dose-titration easier."
    },
    {
      "q": "How much BMR elevation can be expected from BAT activation?",
      "a": "5-10% with average BAT volume (40-50 g active BAT, Cypess 2013 Nat Med PMID 23603815). In low-BAT-baseline individuals (cold-exposure non-induced, older, BMI>30 — all reduce BAT volume), 0-3%. Cypess 2015 Cell Metab PMID 25437872 demonstrated acute BAT activation at single-dose 200 mg; chronic dosing (4+ weeks) per Finlin 2020 PMID 32119651 yielded +30-50% BAT volume elevation on 18F-FDG PET-CT."
    },
    {
      "q": "Is hypertensive crisis risk real?",
      "a": "Yes — the FDA 2018 black-box update was a regulatory mandate following severe hypertension + tachycardia case clusters. Across clinical trials (Khullar 2013, ~13,000 patients), elevated BP incidence ~5%, severe events ~1%. Pre-existing hypertension (>140/90 mmHg) baseline is a contraindication on Mirabegron. Home BP tracking 2x/day (AM + evening) for the first 4 weeks + monthly checks on chronic dosing is the minimum protocol."
    },
    {
      "q": "Which drug interactions are dangerous?",
      "a": "CYP2D6 inhibitor SSRIs (fluoxetine, paroxetine) + TCAs (desipramine, amitriptyline) elevate plasma levels 2-3x. Chronic β-blocker therapy (metoprolol, propranolol) combined with Mirabegron has documented β3-selectivity disturbance. Albuterol + ephedrine + clenbuterol create additive cardio-stress. Digoxin sees CYP3A4-mediated plasma-level elevation (EKG monitoring required). Pheochromocytoma is an absolute contraindication."
    },
    {
      "q": "Cycle length + cycle-off recommendation?",
      "a": "8-12 weeks MAX cycle length, then 2-4 weeks OFF due to β3-receptor tachyphylaxis (chronic agonist exposure downregulates receptor density). On long-term continuous OAB Rx (>1 year), tachyphylaxis incidence is ~15-20%, prompting clinical dose-escalation. In a fat-loss context, an 8-12 week cycle is sufficient for the BAT-activation maximum effect; longer continuous use yields diminishing returns."
    }
  ],
  "related": [
    "albuterol",
    "clenbuterol",
    "l-carnitine"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 25,
      "medium": 50,
      "high": 100
    },
    "unit": "mg/day",
    "note": "Clinical OAB-Rx 25-50 mg/day (low-titration). Off-label fat-loss context uses 75-100 mg/day PO AM (BAT-activation dose-range per Cypess 2015 + Loh 2019 trials). Once-daily dosing optimal due to ~50 h t1/2. Cycle length 8-12 weeks MAX, then 2-4 weeks OFF due to β3-tachyphylaxis. BP home-tracking + EKG baseline + 4-week check mandatory since FDA 2018 black-box update."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "1-2 weeks before cycle start",
      "markers": "Blood pressure baseline (home-tracking AM+evening 7-day average), resting HR, 12-lead EKG (QTc + rhythm), lipid panel (TC/LDL/HDL/TG), CYP2D6 genotyping if SSRI/TCA combination",
      "purpose": "Assess cardiovascular baseline, screen for hypertension risk + QTc-prolongation (FDA 2018 black-box mandate)"
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "2 + 4 + 8 weeks after cycle start",
      "markers": "Blood pressure 2x/day home-tracking weekly average, resting HR weekly, EKG 4-week + 8-week check (QTc monitoring), lipid panel at 8 weeks",
      "purpose": "Early detection of emergent hypertension or QTc-prolongation signal; tachyphylaxis signal for dose-escalation requirement"
    },
    "postCycle": {
      "label": "Post-cycle",
      "timing": "2 + 4 weeks after cycle end",
      "markers": "BP + HR home-tracking, EKG (confirm QTc normalization), receptor-recovery signal (BAT volume optional PET-CT in research contexts)",
      "purpose": "Verify β3-receptor recovery + cardiovascular baseline restoration before starting a new cycle"
    }
  },
  "anecdote": "Mirabegron stands out in community reports as one of the few compounds with actual human evidence for brown adipose tissue (BAT) activation. Users describe it as well tolerated, with a real but mild \"background\" thermogenic effect that passively contributes to fat loss — notably without any stimulant-like feeling. Reports consistently frame it as a long-game compound rather than a rapid weight-shedding tool.\n\nAt higher doses, a noticeable rise in resting heart rate or blood pressure is reported, which is why some accounts mention co-administration with a selective beta-1 blocker; the more pronounced fat-loss effects also tend to appear only at those higher doses. Combining it with cold-exposure protocols is anecdotally said to amplify BAT activation, as both target similar thermogenic pathways."
}
