// Levothyroxine (T4, Synthroid) — Knoll Pharmaceutical 1955 FDA-approved
// synthetic 3,5,3',5'-tetraiodothyronine, hypothyroidism Rx gold standard.
// Sources: FDA Synthroid SmPC (AbbVie), Stott 2017 TRUST NEJM PMID 28121505,
// Garber 2012 AACE/ATA PMID 22293194, Jonklaas 2014 ATA guidelines PMID 25266247,
// Wartofsky 2002 J Clin Endocrinol Metab PMID 12107201.

export default {
  "id": "levothyroxine",
  "sideEffects": [
    { "hu": "Iatrogén hyperthyreosis túladagoláskor: tachycardia, palpitáció, pitvarfibrilláció, hőtűrés-csökkenés, izzadás, fogyás, tremor (FDA Synthroid SmPC; szupraterápiás cutting-dózison a legsúlyosabb).", "en": "Iatrogenic hyperthyroidism on overdose: tachycardia, palpitations, atrial fibrillation, heat intolerance, sweating, weight loss, tremor (FDA Synthroid SmPC; most pronounced on supratherapeutic cutting doses).", "pl": "Jatrogenna nadczynnosc tarczycy przy przedawkowaniu: tachykardia, kolatanie serca, migotanie przedsionkow, nietolerancja ciepla, poty, utrata masy ciala, drzenie (FDA Synthroid SmPC; najsilniejsze przy dawkach nadfizjologicznych)." },
    { "hu": "Pitvarfibrilláció és kardiovaszkuláris esemény kockázata, főleg idős és előzetes szívbeteg esetén; szuppresszív (TSH <0,1) dózison az AF-incidencia 2–3x emelkedik (Sawin 1994 PMID 8302057).", "en": "Atrial fibrillation and cardiovascular event risk, especially in the elderly and those with pre-existing heart disease; suppressive (TSH <0.1) dosing raises AF incidence 2–3x (Sawin 1994 PMID 8302057).", "pl": "Ryzyko migotania przedsionkow i zdarzen sercowo-naczyniowych, zwlaszcza u osob starszych i z choroba serca; dawki supresyjne (TSH <0,1) zwiekszaja AF 2–3x (Sawin 1994 PMID 8302057)." },
    { "hu": "Csontsűrűség-csökkenés és osteoporosis-kockázat hosszú távú TSH-szuppresszív dózison (>200 µg/nap, TSH <0,1 mIU/L krónikusan), DEXA-monitorozás indokolt (Faber 1994 PMID 8112375).", "en": "Decreased bone density and osteoporosis risk on long-term TSH-suppressive dosing (>200 µg/day, chronic TSH <0.1 mIU/L); DEXA monitoring warranted (Faber 1994 PMID 8112375).", "pl": "Spadek gestosci kosci i ryzyko osteoporozy przy dlugotrwalym dawkowaniu supresyjnym TSH (>200 µg/dz., przewlekle TSH <0,1 mIU/L); wskazane monitorowanie DEXA (Faber 1994 PMID 8112375)." },
    { "hu": "Túladagolás központi/idegrendszeri tünetei: szorongás, ingerlékenység, álmatlanság, nyugtalanság, fejfájás (hyperthyreoid szindróma része).", "en": "Central/nervous overdose symptoms: anxiety, irritability, insomnia, restlessness, headache (part of the hyperthyroid syndrome).", "pl": "Objawy osrodkowe przedawkowania: lek, drazliwosc, bezsennosc, niepokoj, bole glowy (czesc zespolu nadczynnosci)." },
    { "hu": "Felszívódási csökkenés és dózis-instabilitás kalcium-, vas-, PPI- és szója-bevitel együtt szedésekor (~30–50% abszorpció-csökkenés), 4 óra szétválasztás szükséges.", "en": "Reduced absorption and dose instability when taken with calcium, iron, PPIs or soy (~30–50% absorption drop); 4-hour separation required.", "pl": "Zmniejszone wchlanianie i niestabilnosc dawki przy jednoczesnym przyjmowaniu wapnia, zelaza, IPP lub soi (~30–50% spadek); konieczny 4-godzinny odstep." },
    { "hu": "Warfarin-interakció: a T4 fokozza az antikoaguláns hatást, INR-emelkedés és vérzésveszély, INR-monitorozás kötelező.", "en": "Warfarin interaction: T4 potentiates the anticoagulant effect, raising INR and bleeding risk; INR monitoring mandatory.", "pl": "Interakcja z warfaryna: T4 nasila dzialanie przeciwkrzepliwe, podwyzsza INR i ryzyko krwawienia; obowiazkowe monitorowanie INR." },
    { "hu": "Diabéteszeseknél a fokozott metabolikus ráta megemelheti az inzulin- és antidiabetikum-igényt, glükóz-kontroll zavar lehetséges.", "en": "In diabetics, the increased metabolic rate can raise insulin and antidiabetic requirements, with possible loss of glucose control.", "pl": "U diabetykow zwiekszone tempo metaboliczne moze podniesc zapotrzebowanie na insuline i leki przeciwcukrzycowe, mozliwa utrata kontroli glikemii." },
    { "hu": "Ritka cholestasis és <1% ALT-emelkedés; a máj-stressz minimális, de túladagolás-okozta hyperthyreosis közvetve terhelő (FDA Synthroid SmPC).", "en": "Rare cholestasis and <1% ALT elevation; hepatic stress is minimal, though overdose-induced hyperthyroidism is indirectly burdensome (FDA Synthroid SmPC).", "pl": "Rzadka cholestaza i <1% wzrost ALT; obciazenie watroby minimalne, choc nadczynnosc z przedawkowania obciaza posrednio (FDA Synthroid SmPC)." }
  ],
  "contraindications": [
    { "hu": "Nem kompenzált mellékvesekéreg-elégtelenség: T4-pótlás mellékvese-krízist provokálhat, előbb glükokortikoid-pótlás kell (abszolút kontraindikáció).", "en": "Uncorrected adrenal insufficiency: T4 replacement can precipitate an adrenal crisis; glucocorticoid replacement must come first (absolute contraindication).", "pl": "Niewyrownana niewydolnosc nadnerczy: substytucja T4 moze wywolac przelom nadnerczowy; najpierw wymagana glikokortykosteroidoterapia (bezwzgledne przeciwwskazanie)." },
    { "hu": "Kezeletlen thyreotoxicosis / hyperthyreosis: a T4 tovább súlyosbítja a tireoid-hormontöbbletet (abszolút kontraindikáció).", "en": "Untreated thyrotoxicosis / hyperthyroidism: T4 further aggravates the thyroid hormone excess (absolute contraindication).", "pl": "Nieleczona tyreotoksykoza / nadczynnosc tarczycy: T4 dodatkowo nasila nadmiar hormonow (bezwzgledne przeciwwskazanie)." },
    { "hu": "Friss akut miokardiális infarktus (<6 hónap): a fokozott szívmunka kontraindikálja a dózistitrálást (abszolút kontraindikáció).", "en": "Recent acute myocardial infarction (<6 months): the increased cardiac workload contraindicates dose titration (absolute contraindication).", "pl": "Swiezy zawal serca (<6 miesiecy): zwiekszone obciazenie serca przeciwwskazuje titracje dawki (bezwzgledne przeciwwskazanie)." },
    { "hu": "Aktív tachiarrhythmia (pitvarfibrilláció, kamrai tachycardia): a T4 aritmogén, óvatos titrálás vagy halasztás indokolt.", "en": "Active tachyarrhythmia (atrial fibrillation, ventricular tachycardia): T4 is arrhythmogenic; cautious titration or deferral is warranted.", "pl": "Aktywna tachyarytmia (migotanie przedsionkow, czestoskurcz komorowy): T4 jest arytmogenny; ostrozna titracja lub odroczenie." },
    { "hu": "Sportoló cutting-cycle off-label használat dokumentált hypothyreosis-diagnózis nélkül: orvosilag nem legitim és potenciális WADA-szabályszegés.", "en": "Athlete cutting-cycle off-label use without a documented hypothyroidism diagnosis: medically illegitimate and a potential WADA violation.", "pl": "Stosowanie off-label w cyklu redukcyjnym sportowca bez udokumentowanej diagnozy niedoczynnosci: medycznie nieuzasadnione i potencjalne naruszenie WADA." },
    { "hu": "Idős (>65 év) és koszorúér-betegek: relatív óvatosság, alacsony kezdődózis és lassú (12,5 µg/2 hét) titrálás indokolt (Stott 2017 TRUST PMID 28121505).", "en": "Elderly (>65) and coronary artery disease patients: relative caution, low starting dose and slow (12.5 µg/2 weeks) titration warranted (Stott 2017 TRUST PMID 28121505).", "pl": "Osoby starsze (>65) i z choroba wiencowa: wzgledna ostroznosc, niska dawka poczatkowa i powolna (12,5 µg/2 tyg.) titracja (Stott 2017 TRUST PMID 28121505)." },
    { "hu": "Krónikus TSH-szuppresszív dózis (>200 µg/nap) osteoporosis vagy ismert csontritkulás mellett: relatív kontraindikáció a csontsűrűség-veszteség miatt.", "en": "Chronic TSH-suppressive dosing (>200 µg/day) with osteoporosis or known low bone density: relative contraindication due to bone density loss.", "pl": "Przewlekle dawkowanie supresyjne TSH (>200 µg/dz.) przy osteoporozie lub niskiej gestosci kosci: wzgledne przeciwwskazanie z powodu utraty masy kostnej." }
  ],
  "name": "Levothyroxine (T4, Synthroid)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Synthetic T4 (3,5,3',5'-tetraiodothyronine), Knoll/AbbVie 1955 FDA-approved hypothyroidism Rx gold standard (Synthroid). A prohormone — hepatic and renal 5'-deiodinase (D1/D2) convert it to active T3. Off-label cutting-cycle use is less common than T3 (slower 7-day t1/2, steady-state ~6 weeks). WADA: allowed with documented hypothyroidism diagnosis.",
  "description": "Levothyroxine (Synthroid) is the synthetic form of endogenous T4 (3,5,3',5'-tetraiodothyronine), the prohormone form of thyroid hormone. It received FDA approval in 1955 under the Knoll Pharmaceutical (now AbbVie) Synthroid brand and, with 70 years of clinical literature, has been a US top-5 prescribed drug for the past two decades. As a hypothyroidism Rx gold standard per the Garber 2012 AACE/ATA guideline (PMID 22293194) and Jonklaas 2014 ATA guideline (PMID 25266247): TSH target is 0.5-2.5 mIU/L, Rx dose 1.6 μg/kg/day (60-100 kg → 100-150 μg/day). In peripheral tissues (liver, kidney, muscle, central nervous system), T4 is converted to active T3 by the 5'-deiodinase D1/D2 enzymes (~80% peripheral T4 → T3 conversion), and only indirectly acts as a nuclear TR-α/β agonist because T4 itself has low receptor affinity (~10x weaker than T3). Off-label cutting-cycle use is less common than with T3: the slower on/off kinetics (7-day t1/2 vs T3's 24 hours) give a ~6-week steady state and a slower metabolic-rate increase. Stott 2017 TRUST NEJM (PMID 28121505), an older-adult subclinical-hypothyroidism RCT, found no symptomatic benefit from T4 substitution, yet the prescribing rate did not decline in the US. On the WADA list, T4 is in the 'allowed' category with documented hypothyroidism diagnosis — athletic cutting-cycle off-label use is NOT legitimate and constitutes a potential WADA violation.",
  "keyInfo": [
    {
      "label": "Mechanism of action",
      "value": "Thyroid prohormone, peripheral D1/D2 conversion to T3, indirect nuclear TR-α/β agonist"
    },
    {
      "label": "Dosing",
      "value": "Clinical 1.6 μg/kg/day (100-150 μg/day); off-label cutting 200-300 μg/day (NOT recommended)"
    },
    {
      "label": "Half-life",
      "value": "~7 days (steady-state ~6 weeks)"
    },
    {
      "label": "Onset",
      "value": "Metabolic-rate increase 1-2 weeks; steady-state 6 weeks"
    },
    {
      "label": "Legal status",
      "value": "FDA + EMA Rx (hypothyroidism), registered in HU + PL. WADA: allowed with documented hypothyroidism diagnosis, off-label cutting is NOT legitimate."
    }
  ],
  "mechanism": "Levothyroxine is the synthetic form of endogenous T4, the prohormone form of thyroid hormone. T4 by itself has low nuclear receptor affinity (~10x weaker than T3), so the bulk of its biological effect is generated by peripheral 5'-deiodinase D1 (liver, kidney, thyroid) + D2 (skeletal muscle, central nervous system, pituitary) enzymatic conversion: ~80% peripheral T4 → T3 conversion. The active T3 then binds nuclear TR-α (skeletal and cardiac muscle) and TR-β (liver and hypothalamus) receptors, heterodimerizes with retinoid-X-receptor (RXR), and acts as a transcription factor activating expression of UCP1/UCP3, β-oxidation key enzymes (CPT-1, ACOX) and the Na/K-ATPase α-subunit gene. Clinical dosing logic: the more stable T4 serum concentration (7-day t1/2) provides a more homogeneous tissue T3 level via peripheral conversion control, which is advantageous post-Rx in Hashimoto + congenital + surgical thyroidectomy. Hypothalamic-pituitary-thyroid (HPT) feedback: T4 directly suppresses TRH/TSH secretion via hypothalamic + pituitary D2 conversion — titration toward the 0.5-2.5 mIU/L TSH target keeps the endogenous axis partially active. Generic vs brand bioequivalence: the FDA 2019 study (PMID 31302949) confirmed bioequivalence of 12 FDA-approved generic preparations with Synthroid (AUC 0.95-1.05).",
  "legalStatus": "USA: FDA-approved 1955 (Synthroid, Knoll Pharmaceutical — now AbbVie) for hypothyroidism; Schedule N/A. US top-5 prescribed drug. EU: EMA-approved (Euthyrox, Eltroxin). HU: registered (Euthyrox, L-Thyroxin Henning Rx). PL: registered (Euthyrox, Letrox Rx). WADA: 'allowed' with documented hypothyroidism diagnosis (S0 hormone category not explicitly banned); athletic cutting-cycle off-label use is NOT legitimate and constitutes a potential WADA violation.",
  "onsetTime": "Metabolic-rate increase 1-2 weeks; fat-loss effect 2-4 weeks; steady-state 6 weeks",
  "halfLife": "~7 days",
  "interactionsWith": [
    "liothyronine",
    "clenbuterol",
    "mirabegron",
    "warfarin"
  ],
  "aromatization": "Does not aromatize (not a steroid — thyroid prohormone). No CYP19 interaction. The estrogen axis is directly unaffected, but indirect SHBG elevation has been documented on thyroid-hormone Rx (Klein 2001 PMID 11257082), causing a drop in free testosterone.",
  "hepatotoxicity": "Low — minimal hepatic stress, rare cholestasis (FDA Synthroid SmPC adverse events). Iatrogenic overdose produces hyperthyroid syndrome (cardiac arrhythmia, hyperthermia) but NOT direct hepatic toxicity. ALT elevation documented at <1% incidence in clinical trials.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not an AAS, thyroid prohormone)",
  "bindingAffinity": "TR-α + TR-β nuclear receptor Ki ~500-1000 pM (low affinity, ~10x weaker than T3). The biological effect is largely mediated by peripheral D1/D2 T3 conversion.",
  "detectionWindow": "WADA-accredited LC-MS/MS urine detection 4-6 weeks at chronic dose (T4 + endogenous TSH suppression pattern). Steady-state ~6 weeks.",
  "benefits": [
    "Clinical hypothyroidism Rx gold standard with 70-year evidence base",
    "More stable T4 serum concentration (7-day t1/2) gives a homogeneous tissue T3 level via peripheral conversion control",
    "TSH-target 0.5-2.5 mIU/L titration per Garber 2012 AACE/ATA + Jonklaas 2014 ATA guideline",
    "First-line Rx for Hashimoto, congenital and post-thyroidectomy hypothyroidism",
    "Off-label cutting cycles: slower on/off (7-day t1/2) → lower iatrogenic hyperthyroid risk than T3 (24-hour t1/2)",
    "FDA 2019 study (PMID 31302949) confirmed generic vs brand bioequivalence (12 generics AUC 0.95-1.05)"
  ],
  "quickStart": [
    "Clinical Rx start 25-50 μg/day AM, titration step 25 μg every 2 weeks",
    "Rx dose 1.6 μg/kg/day (60-100 kg → 100-150 μg/day), TSH target 0.5-2.5 mIU/L",
    "AM dosing on an empty stomach, 30-60 minutes before breakfast (food reduces absorption)",
    "Pre-cycle: TSH + free-T3 + free-T4 + anti-TPO + Tg-AB baseline",
    "Mid-cycle bloodwork: 6-week check TSH + free-T4 + reverse-T3",
    "Recommend 4-hour separation from calcium + iron + PPI + soy milk (absorption reduction)",
    "Off-label cutting cycle 200-300 μg/day (NOT recommended) — slower titration is safer than T3"
  ],
  "expectations": [
    {
      "label": "Weeks 1-2",
      "body": "Initial dose 50-100 μg AM. Mild symptomatic change, slight energy uplift. TSH levels not yet normalized (steady-state takes 6 weeks)."
    },
    {
      "label": "Weeks 3-4",
      "body": "Hypothyroidism symptoms (fatigue, weight gain, cold intolerance) ease. Subjective fat-loss pace on hypothyroidism Rx +0.2-0.4 kg/week in a steady deficit. Off-label cutting context: slower than T3."
    },
    {
      "label": "Weeks 6-8 + TSH titration",
      "body": "Steady-state TSH level measurable. If TSH >2.5 mIU/L → dose increase 25 μg every 2 weeks. If TSH <0.5 mIU/L → dose decrease 25 μg every 2 weeks. Clinical Rx target: TSH 0.5-2.5 mIU/L, free-T4 in upper-normal range."
    }
  ],
  "quality": {
    "pure": [
      "FDA-approved Synthroid tablet (AbbVie) or 12 FDA-approved generic Levothyroxine — pharmacy-sourced ensures actual active ingredient",
      "EU brands: Euthyrox (Merck), Eltroxin (GlaxoSmithKline), L-Thyroxin Henning (Sanofi)",
      "FDA 2019 study (PMID 31302949) confirmed generic vs brand bioequivalence (12 generics AUC 0.95-1.05)"
    ],
    "caution": [
      "Hyperthyroid syndrome on overdose: tachycardia, hyperthermia, anxiety, insomnia, extreme weight loss — discontinuation recommended",
      "4-hour separation from calcium + iron + PPI + soy milk (absorption reduction ~30-50%)",
      "Warfarin INR elevation — anticoagulant monitoring required",
      "Cardiovascular monitoring in elderly patients (>65 years), low-titration step 12.5 μg every 2 weeks recommended (Stott 2017 TRUST trial caution)",
      "Bone-density loss with long-term TSH-suppressive doses (>200 μg/day, TSH <0.1 mIU/L chronic) — osteoporosis risk",
      "Off-label cutting cycle dose instability → supraphysiological dose titration NOT recommended"
    ],
    "avoid": [
      "Pre-existing cardiac arrhythmia (atrial fibrillation, ventricular tachycardia) — absolute contraindication during dose titration",
      "Acute myocardial infarction (<6 months) — absolute contraindication",
      "Adrenal insufficiency without Rx compensation — absolute contraindication (T4 Rx may trigger adrenal crisis)",
      "Off-label cutting context — clinical Rx with legitimate hypothyroidism diagnosis is fine; athletic cutting-cycle off-label use is NOT legitimate and constitutes a potential WADA violation",
      "Pheochromocytoma — absolute contraindication",
      "Diabetes mellitus type 1 — relative contraindication (T4 Rx + insulin stack disrupts glucose management)"
    ]
  },
  "interactions": [
    "Liothyronine (T3) — T4+T3 combo therapy per Bunevicius 1999 PMID 9989958 cognitive-symptom relief, dose-adjust each separately",
    "Warfarin — T4 enhances anticoagulant effect, INR monitoring required",
    "Calcium + iron oral supplements — reduce T4 absorption by 30-50% (4-hour separation recommended)",
    "PPIs (omeprazole, pantoprazole) — elevated gastric pH reduces T4 absorption",
    "Soy milk + Wegovy + Mounjaro — absorption interference (4-hour separation)",
    "Beta-blocker (propranolol) — D1-conversion inhibitor slows T4 → T3, compensable with additional T3 doses",
    "SSRIs (sertraline, fluoxetine) — TSH-level regulatory feedback disturbance documented"
  ],
  "studies": [
    {
      "title": "Discontinuation of levothyroxine therapy in patients with subclinical hypothyroidism: a pilot randomized clinical trial.",
      "authors": "Maraka S, Owen RR, Singh Ospina NM",
      "journal": "Endocrine",
      "pmid": "40736623"
    },
    {
      "title": "A 2013 survey of clinical practice patterns in the management of primary hypothyroidism.",
      "authors": "Burch HB, Burman KD, Cooper DS",
      "journal": "J Clin Endocrinol Metab",
      "pmid": "24527720"
    },
    {
      "title": "Guidelines for the treatment of hypothyroidism (ATA)",
      "authors": "Jonklaas J, Bianco AC, Bauer AJ et al.",
      "journal": "Thyroid. 2014;24(12):1670-1751.",
      "pmid": "25266247"
    },
    {
      "title": "Combined levothyroxine plus liothyronine compared with levothyroxine alone in primary hypothyroidism: a randomized controlled trial",
      "authors": "Walsh JP, Shiels L, Lim EM et al.",
      "journal": "J Clin Endocrinol Metab. 2003;88(10):4543-4550.",
      "pmid": "14557420"
    },
    {
      "title": "Levothyroxine Formulations: Pharmacological and Clinical Implications of Generic Substitution.",
      "authors": "Benvenga S, Carlé A",
      "journal": "Adv Ther",
      "pmid": "31485974"
    }
  ],
  "faq": [
    {
      "q": "T4 monotherapy vs T4+T3 combination — what does the TRUST evidence say?",
      "a": "Bunevicius 1999 NEJM (PMID 9989958), the classic T3 add-on RCT, found cognitive-symptom relief on top of T4 monotherapy. Stott 2017 TRUST NEJM (PMID 28121505), an older-adult subclinical-hypothyroidism RCT, found NO symptomatic benefit from T4 substitution (placebo-controlled n=737). Walsh 2003 PMID 14557420 and most subsequent meta-analyses likewise show no consistent cognitive advantage of T4+T3 over T4 monotherapy. The 2024 clinical gold standard: T4 monotherapy first-line, T4+T3 combination only for persistent cognitive symptoms (Jonklaas 2014 ATA guideline)."
    },
    {
      "q": "Cutting cycle: T4 vs T3 — which to choose?",
      "a": "Neither is legitimate in a cutting cycle (off-label); but if forced to pick: T3 dominates in classic protocols because of faster metabolic-rate increase (24-hour t1/2 vs 7 days). T4 has slower steady-state (~6 weeks) and slower on/off kinetics → lower iatrogenic hyperthyroid risk, but a 4-6 week cutting cycle does NOT reach steady-state thermogenic effect on T4. WADA status: T4 'allowed' with documented hypothyroidism diagnosis; T3 in-competition banned for non-Rx athletes. Athletic cutting-cycle off-label use is NOT legitimate and constitutes a potential WADA violation."
    },
    {
      "q": "WADA TUE process with documented hypothyroidism?",
      "a": "Yes — T4 (Levothyroxine) is in the S0 'allowed' category for legitimate hypothyroidism Rx. Standard TUE (Therapeutic Use Exemption) process: endocrinologist diagnosis (TSH pattern, anti-TPO, Tg-AB lab confirmation) + sports federation TUE committee approval. WADA 2025 prohibited list is explicit: athletes with pre-existing Rx diagnosis are legitimate. Athletes with documented hypothyroidism + Levothyroxine combinations are common in top-level competition (US + EU). T3 (Liothyronine) is stricter: TUE only in exceptional circumstances when T4 monotherapy is ineffective."
    },
    {
      "q": "Side effects of excessive T4 doses?",
      "a": "TSH-suppressive doses (>200 μg/day chronic, TSH <0.1 mIU/L) produce hyperthyroid syndrome: tachycardia, palpitations, anxiety, insomnia, extreme weight loss, heat intolerance. Long-term (>1 year) TSH-suppressive dosing is associated with bone-density loss + osteoporosis risk (Faber 1994 PMID 8112375). Cardiovascular risk in elderly patients: atrial fibrillation incidence rises 2-3x on TSH-suppressive dose (Sawin 1994 PMID 8302057). Off-label cutting cycles at 200-300 μg/day super-dose within a 4-6 week window carry high acute hyperthyroid syndrome + cardiac-arrhythmia risk."
    },
    {
      "q": "Generic vs brand Synthroid — is there a bioequivalence difference?",
      "a": "The FDA 2019 study (Trapnell PMID 31302949) confirmed the bioequivalence of 12 FDA-approved generic Levothyroxine products with Synthroid (AUC 0.95-1.05 range). Clinical guideline (AACE 2012, Garber): switching between generic and brand should be avoided in patients already stable on Rx — inter-batch variability is minimal, but staying on one batch is recommended due to placebo effect + dose-stability perception. For new Rx, starting on either generic or brand is equivalent in bioequivalence terms."
    }
  ],
  "related": [
    "liothyronine"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 75,
      "medium": 125,
      "high": 200
    },
    "unit": "μg/day",
    "note": "Clinical hypothyroidism Rx 1.6 μg/kg/day (60-100 kg → 100-150 μg/day). AM dosing on an empty stomach, 30-60 minutes before breakfast. Titration step 25 μg every 2 weeks, TSH target 0.5-2.5 mIU/L. Off-label cutting cycle 200-300 μg/day (NOT recommended — slower titration is safer than T3). Pre-cycle TSH + free-T3 + free-T4 + anti-TPO + Tg-AB baseline; mid-cycle 6-week TSH check + post-cycle 4-week recovery confirm."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before cycle",
      "timing": "1-2 weeks before cycle start",
      "markers": "TSH, free-T3, free-T4, reverse-T3, anti-TPO + Tg-AB (Hashimoto screen), 12-lead ECG, BP + resting HR, lipid panel (TC/LDL/HDL/TG)",
      "purpose": "Screen for pre-existing hypothyroidism / Hashimoto contraindication, cardiovascular baseline, thyroid-axis function baseline"
    },
    "midCycle": {
      "label": "During cycle",
      "timing": "6 weeks after cycle start (steady-state confirm)",
      "markers": "TSH (Rx target 0.5-2.5 mIU/L), free-T4 (upper-normal range), reverse-T3, lipid panel, BP + HR home-tracking weekly",
      "purpose": "Verify TSH-target range; decide whether dose titration 25 μg every 2 weeks is needed. Lipid panel as cardiovascular signal (T4 lowers LDL on hypothyroidism Rx)"
    },
    "postCycle": {
      "label": "After cycle (cutting-cycle off-label context)",
      "timing": "2 + 4 weeks after cycle end",
      "markers": "TSH (return to baseline), free-T3, free-T4, reverse-T3, anti-TPO follow-up, BP + HR home-tracking",
      "purpose": "Verify endogenous thyroid-axis recovery. Off-label cutting cycles have a shorter window than clinical Rx, so faster recovery is expected (4-6 weeks)"
    },
    "cruise": {
      "label": "Long-term (clinical hypothyroidism Rx)",
      "timing": "Annually / semi-annually with clinical indication",
      "markers": "TSH (Rx target 0.5-2.5 mIU/L), free-T4, lipid panel, annual DEXA bone-density scan (osteoporosis risk on TSH-suppressive dose >200 μg/day chronic), ECG rhythm monitoring in elderly patients",
      "purpose": "Long-term clinical hypothyroidism Rx monitoring (Jonklaas 2014 ATA guideline), holding to TSH target is mandatory"
    }
  }
}
