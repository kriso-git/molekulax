// ECA-stack (Ephedrine + Caffeine + Aspirin) – classic 1990s
// thermogenic-stack. Sources: Astrup 1992 PMID 1346830, Greenway 2001
// PMID 11707560, Boozer 2002 PMID 12122475, Daly 1993 PMID 8367356,
// FDA 2004 ephedra consumer update, Yokota 2013 acetaminophen-ephedra hepatic.

export default {
  "id": "eca-stack",
  "sideEffects": [
    { "hu": "Kardiovaszkuláris terhelés: tachycardia, vérnyomás-emelkedés (+10–20 mmHg szisztolés), palpitáció; súlyos esetben aritmia, miokardiális infarktus és stroke (FDA 2004 ephedra-ban: 100+ haláleset, 16 000+ adverse-event).", "en": "Cardiovascular strain: tachycardia, raised blood pressure (+10–20 mmHg systolic), palpitations; in severe cases arrhythmia, myocardial infarction and stroke (FDA 2004 ephedra ban: 100+ deaths, 16,000+ adverse events).", "pl": "Obciążenie sercowo-naczyniowe: tachykardia, wzrost ciśnienia (+10–20 mmHg skurczowe), kołatanie serca; w ciężkich przypadkach arytmia, zawał i udar (zakaz FDA z 2004: 100+ zgonów, 16 000+ zdarzeń niepożądanych)." },
    { "hu": "Központi idegrendszeri stimuláció: szorongás, idegesség, ingerlékenység, remegés (tremor) és nyugtalanság, dózisfüggő módon.", "en": "CNS stimulation: anxiety, nervousness, irritability, tremor and restlessness, dose-dependent.", "pl": "Stymulacja OUN: lęk, nerwowość, drażliwość, drżenie (tremor) i niepokój, zależnie od dawki." },
    { "hu": "Álmatlanság (insomnia): az ephedrine és koffein hosszú felezési ideje miatt, főleg ha a délutáni adag 16:00 után kerül bevételre.", "en": "Insomnia: due to the long half-lives of ephedrine and caffeine, especially if the afternoon dose is taken after 16:00.", "pl": "Bezsenność: z powodu długiego okresu półtrwania efedryny i kofeiny, zwłaszcza gdy popołudniowa dawka jest przyjmowana po 16:00." },
    { "hu": "Tachyphylaxis (toleranciakialakulás): a hatás 4–6 hét folyamatos használat után csökken a preszinaptikus noradrenalin-raktár kimerülése és a β-receptor-downreguláció miatt; dózisemelés NEM ajánlott, mert csak a kardiovaszkuláris kockázatot fokozza.", "en": "Tachyphylaxis (tolerance): effect declines after 4–6 weeks of continuous use due to depletion of presynaptic noradrenaline stores and β-receptor downregulation; dose escalation is NOT advised as it only increases cardiovascular risk.", "pl": "Tachyfilaksja (tolerancja): efekt słabnie po 4–6 tygodniach ciągłego stosowania z powodu wyczerpania presynaptycznych zapasów noradrenaliny i downregulacji receptorów β; zwiększanie dawki NIE jest zalecane, gdyż tylko podnosi ryzyko sercowo-naczyniowe." },
    { "hu": "Aspirin gasztrointesztinális irritáció és vérzéses kockázat: a COX-1-gátlás miatt gyomorirritáció, gastritis és GI-vérzés-hajlam, magasabb dózisnál (>325 mg/nap) fokozottan.", "en": "Aspirin gastrointestinal irritation and bleeding risk: COX-1 inhibition causes gastric irritation, gastritis and GI-bleed tendency, more pronounced at higher doses (>325 mg/day).", "pl": "Podrażnienie żołądkowo-jelitowe i ryzyko krwawienia od aspiryny: hamowanie COX-1 powoduje podrażnienie żołądka, zapalenie błony śluzowej i skłonność do krwawień z przewodu pokarmowego, nasilone przy wyższych dawkach (>325 mg/dobę)." },
    { "hu": "Sympathomimetikus mellékhatások: izzadás, szájszárazság, fejfájás, hányinger és étvágycsökkenés (az utóbbi a kívánt hatás része, de túlzott kalóriadeficitet okozhat).", "en": "Sympathomimetic effects: sweating, dry mouth, headache, nausea and appetite suppression (the latter is part of the intended effect but can cause excessive caloric deficit).", "pl": "Działania sympatykomimetyczne: pocenie się, suchość w ustach, ból głowy, nudności i zmniejszenie apetytu (to ostatnie jest częścią zamierzonego efektu, ale może powodować nadmierny deficyt kaloryczny)." },
    { "hu": "Vizeletürítési és vérnyomási hatás: az ephedrine vizeletretenciót okozhat (különösen prosztata-megnagyobbodásnál) és tartós szisztolés-diasztolés vérnyomás-emelkedést tarthat fenn.", "en": "Urinary and pressor effects: ephedrine can cause urinary retention (especially with prostate enlargement) and sustain elevated systolic-diastolic blood pressure.", "pl": "Efekty moczowe i presyjne: efedryna może powodować zatrzymanie moczu (zwłaszcza przy przeroście prostaty) i utrzymywać podwyższone ciśnienie skurczowo-rozkurczowe." },
    { "hu": "Rebound-fáradtság és rebound-étvágy: hirtelen leállításkor a stimuláns-megvonás miatt kifejezett fáradtság, levertség és visszacsapó étvágynövekedés jelentkezhet.", "en": "Rebound fatigue and rebound appetite: abrupt cessation can cause marked fatigue, low mood and rebound increase in appetite from stimulant withdrawal.", "pl": "Zmęczenie i apetyt z odbicia: nagłe odstawienie może powodować wyraźne zmęczenie, obniżenie nastroju i wzrost apetytu z odbicia w wyniku odstawienia stymulantu." }
  ],
  "contraindications": [
    { "hu": "Súlyos vagy kontrollálatlan magasvérnyomás (>140/90 mmHg) – abszolút kontraindikáció a sympathomimetikus vérnyomás-emelő hatás miatt (FDA 2004 ephedra-ban stroke + AMI-cluster).", "en": "Severe or uncontrolled hypertension (>140/90 mmHg) – absolute contraindication due to the sympathomimetic pressor effect (FDA 2004 ephedra ban: stroke + MI cluster).", "pl": "Ciężkie lub niekontrolowane nadciśnienie (>140/90 mmHg) – bezwzględne przeciwwskazanie z powodu sympatykomimetycznego działania presyjnego (zakaz FDA z 2004: udary + zawały)." },
    { "hu": "Meglévő szívbetegség: tachyarrhythmia, pitvarfibrilláció, koszorúér-betegség vagy cardiomyopathia – abszolút kontraindikáció.", "en": "Pre-existing heart disease: tachyarrhythmia, atrial fibrillation, coronary artery disease or cardiomyopathy – absolute contraindication.", "pl": "Istniejąca choroba serca: tachyarytmia, migotanie przedsionków, choroba wieńcowa lub kardiomiopatia – bezwzględne przeciwwskazanie." },
    { "hu": "MAO-gátló terápia (phenelzine, tranylcypromine) – hipertenzív krízis veszélye, abszolút kontraindikáció; az MAO-gátló leállítása után is 14 nap várakozás szükséges.", "en": "MAO-inhibitor therapy (phenelzine, tranylcypromine) – risk of hypertensive crisis, absolute contraindication; a 14-day washout after stopping the MAOI is required.", "pl": "Terapia inhibitorami MAO (fenelzyna, tranylcypromina) – ryzyko przełomu nadciśnieniowego, bezwzględne przeciwwskazanie; po odstawieniu MAOI konieczne 14 dni przerwy." },
    { "hu": "Hyperthyreosis / Graves-betegség és pheochromocytoma – abszolút kontraindikáció az additív sympathomimetikus katecholamin-túlsúly miatt.", "en": "Hyperthyroidism / Graves' disease and pheochromocytoma – absolute contraindication due to additive sympathomimetic catecholamine excess.", "pl": "Nadczynność tarczycy / choroba Gravesa-Basedowa i guz chromochłonny (pheochromocytoma) – bezwzględne przeciwwskazanie z powodu addytywnego nadmiaru katecholamin." },
    { "hu": "Terhesség és szoptatás (FDA Category C) – kerülendő a magzati és kardiovaszkuláris kockázat miatt.", "en": "Pregnancy and breastfeeding (FDA Category C) – avoid due to fetal and cardiovascular risk.", "pl": "Ciąża i karmienie piersią (FDA kategoria C) – unikać z powodu ryzyka dla płodu i sercowo-naczyniowego." },
    { "hu": "Gyermek- és serdülőkor (<16 év) – aspirin miatt Reye-szindróma veszélye, valamint a stimuláns terhelés kockázata.", "en": "Children and adolescents (<16 years) – risk of Reye's syndrome from aspirin plus the burden of stimulant load.", "pl": "Dzieci i młodzież (<16 lat) – ryzyko zespołu Reye'a od aspiryny oraz obciążenie stymulantem." },
    { "hu": "Relatív kontraindikációk: SSRI/SNRI együttadás (szerotonin-szindróma kockázat), krónikus β-blokkoló-terápia (α-receptor-túlsúlyos vasoconstrictio), aspirin-allergia / aktív peptikus fekély, és véralvadásgátló (warfarin) kezelés – fokozott vérzésveszély és INR-emelkedés.", "en": "Relative contraindications: SSRI/SNRI co-use (serotonin syndrome risk), chronic beta-blocker therapy (unopposed alpha vasoconstriction), aspirin allergy / active peptic ulcer, and anticoagulant (warfarin) therapy – increased bleeding risk and raised INR.", "pl": "Przeciwwskazania względne: jednoczesne stosowanie SSRI/SNRI (ryzyko zespołu serotoninowego), przewlekła terapia beta-blokerem (skurcz naczyń z przewagą alfa), alergia na aspirynę / czynna choroba wrzodowa oraz leczenie przeciwkrzepliwe (warfaryna) – zwiększone ryzyko krwawienia i wzrost INR." }
  ],
  "name": "ECA-stack (Ephedrine + Caffeine + Aspirin)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Ephedrine 25 mg + Caffeine 200 mg + Aspirin 81 mg classic 1990s thermogenic-stack. Astrup 1992 Lancet obesity-trial (PMID 1346830) reports ~3x more potent than ephedrine alone; since the FDA 2004 ephedra ban, ephedrine is Rx-only in the EU, blackmarket fat-burner protocol.",
  "description": "The ECA-stack (Ephedrine + Caffeine + Aspirin) is the 1990s thermogenic fat-loss protocol that exploded into the bodybuilding underground after Astrup 1992 Lancet obesity-trial (PMID 1346830). The three components have synergistic mechanisms: ephedrine is an α/β-sympathomimetic alkaloid that triggers noradrenaline release from presynaptic vesicles; caffeine is a PDE-inhibitor and adenosine-receptor antagonist that prevents cAMP degradation, prolonging ephedrine's effect; aspirin (81 mg low-dose) is an endothelial prostaglandin modulator that blunts ephedrine's vasoconstrictive rebound. Daly 1993 Am J Clin Nutr (PMID 8367356) RCT-evidence: the 25/200 mg ephedrine+caffeine combination produces ~3x more potent thermogenic-rate elevation than ephedrine alone. Boozer 2002 Int J Obes (PMID 12122475) 6-month obesity-cohort RCT measured 7.2 kg fat-loss vs. 2.4 kg placebo. The FDA 2004 Consumer Update placed ephedra on the banned-list after 100+ deaths + 16,000+ adverse-event reports (cardiovascular stroke + AMI cluster), so EU R03CA02 (ephedrine ATC-class) became Rx-only. Aspirin is OTC, caffeine is OTC. WADA S6 stimulant – in-competition banned.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "Ephedrine α/β-sympathomimetic + caffeine PDE-inhibitor + aspirin endothelial-protective synergy"
    },
    {
      "label": "Dosing",
      "value": "25/200/81 mg PO 2-3x/day, 4-6 week cycle MAX"
    },
    {
      "label": "Half-life",
      "value": "Ephedrine 3-6h; caffeine 5h; aspirin 4-6h"
    },
    {
      "label": "Onset",
      "value": "30-60 min, thermogenic-peak 1-2h"
    },
    {
      "label": "Legal status",
      "value": "HU ephedrine ATC R03CA02 Rx; EU R03 Rx-only (since FDA 2004 ban); aspirin OTC; caffeine OTC. WADA S6 in-competition banned."
    }
  ],
  "mechanism": "The ECA-stack synergistically activates thermogenesis through three different sympathomimetic + xanthine + salicylate components. Ephedrine: α1/α2 + β1/β2-adrenoceptor mixed-agonist, also partly a presynaptic noradrenaline-releasing agent (NRA) – the vesicular noradrenaline pool depletes in 20-30 minutes on a single dose, which is why 4-6 week chronic-use tachyphylaxis is documented. Caffeine: nonselective adenosine-receptor antagonist (A1+A2A) + PDE-3+PDE-4 inhibitor. Adenosine antagonism removes hypothalamic + locus-coeruleus feedback-suppression, allowing additional noradrenaline release; PDE inhibition decreases cAMP degradation, prolonging ephedrine-mediated β-receptor signaling. Aspirin (low-dose 81 mg): COX-1 inhibitor that blocks endothelial thromboxane-A2 synthesis, blunting ephedrine's vasoconstrictive rebound + platelet-aggregation risk. Co-administration of the three compounds produces ~3x more potent thermogenic rate elevation with +250-300 kcal/day REE increase in healthy adult males (Astrup 1992, Daly 1993). The mechanism causes DOSE-DEPENDENT cardiovascular-risk elevation: noradrenaline release plus vasoconstrictive effect causes synergistic BP elevation (+10-20 mmHg systolic, +5-10 mmHg diastolic), HR elevation (+15-25 bpm), QTc-prolongation potential measurable within a 4-week cycle.",
  "legalStatus": "USA: ephedrine controlled under the Combat Methamphetamine Epidemic Act 2005 (≤3.6 g/30-day OTC limit, behind-counter registration); ephedra dietary supplements banned since 2004 (FDA Consumer Update). EU + EMA: ephedrine R03CA02 ATC-class, Rx-only (asthma + nasal decongestant) – dietary-supplement formats banned since 2004. HU: ephedrine Rx (R03CA02), aspirin OTC, caffeine OTC. PL: ephedrine Rx (R03CA02), aspirin OTC, caffeine OTC. WADA: ephedrine S6 stimulant in-competition banned (urine threshold 10 μg/mL); pseudoephedrine on WADA list since 2010 (urine threshold 150 μg/mL). Caffeine NOT banned since 2004 (monitored). Aspirin allowed.",
  "onsetTime": "30-60 min, thermogenic-peak 1-2h",
  "halfLife": "Ephedrine 3-6h; caffeine 5h; aspirin 4-6h (parent only)",
  "interactionsWith": [
    "clenbuterol",
    "albuterol",    "mirabegron",
    "liothyronine"
  ],
  "aromatization": "Does not aromatize (not a steroid – sympathomimetic alkaloid + xanthine + salicylate combination). No CYP19 interaction.",
  "hepatotoxicity": "Moderate – chronic ephedrine cardio-stress + acetaminophen ECA-stack blend combination has documented hepatic interaction (Yokota 2013 PMID 23545017). Chronic high-dose aspirin carries Reye syndrome risk (pediatric contraindication). Pre-2004 ephedra blackmarket blends showed acute hepatitis case clusters (FDA Consumer Update 2004).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not AAS, sympathomimetic + xanthine + salicylate)",
  "bindingAffinity": "Ephedrine α1-AR Ki ~50 μM (low-affinity, indirect NRA-dominant); β1/β2 Ki ~10 μM. Caffeine A1-receptor Ki ~12 μM, A2A-receptor Ki ~2.4 μM. Aspirin COX-1 IC50 ~3.2 μM.",
  "detectionWindow": "Ephedrine WADA-accredited LC-MS/MS urine detection 1-3 days (urine threshold 10 μg/mL). Caffeine NOT banned (monitored). Aspirin allowed.",
  "benefits": [
    "Classic thermogenic-stack ~3x more potent than ephedrine alone (Astrup 1992 Lancet PMID 1346830)",
    "+250-300 kcal/day REE elevation in healthy adults (Daly 1993 Am J Clin Nutr PMID 8367356)",
    "Boozer 2002 RCT obesity-cohort 7.2 kg fat-loss / 6 months (placebo 2.4 kg, PMID 12122475)",
    "Greenway 2001 Obesity Research lipid-mobilization evidence (PMID 11707560)",
    "Appetite suppression as a secondary effect (ephedrine + caffeine sympathomimetic appetite reduction)",
    "Inexpensive components, globally accessible (ephedrine within Rx-system + aspirin/caffeine OTC)"
  ],
  "quickStart": [
    "Pre-cycle BP home-tracking 7-day baseline average (mandatory cardiovascular monitoring since FDA 2004 ban)",
    "EKG baseline + 4-week check (QTc-prolongation risk)",
    "Standard dose: 25 mg ephedrine + 200 mg caffeine + 81 mg aspirin PO 2-3x/day (AM + early afternoon)",
    "Last dose before 16:00 (insomnia prevention, 5-6h ephedrine + caffeine t1/2)",
    "Cycle length 4-6 weeks MAX, then 2-4 weeks OFF (ephedrine tachyphylaxis + cardiovascular recovery)",
    "Mid-cycle bloodwork: weekly average BP + 4-week EKG check + liver enzymes (acetaminophen-blend-free verification)",
    "Lipid panel pre- and post-cycle (ephedrine-mediated triglyceride elevation documented)"
  ],
  "expectations": [
    {
      "label": "Week 1",
      "body": "Initial dose 25/200/81 mg AM. Subjective thermogenic effect noticeable (mild sweating, +15-25 bpm HR, +10-15 mmHg BP). Appetite reduction and energy elevation clear. Insomnia risk high if the second dose is after 14:00."
    },
    {
      "label": "Weeks 2-3",
      "body": "Steady-state thermogenic rate. Fat-loss pace +0.5-0.8 kg/week with adequate caloric deficit (Boozer 2002 6-month rate analog). Mild tachyphylaxis felt by end of week 3 – dose escalation is NOT recommended (cardiovascular risk multiplier)."
    },
    {
      "label": "Weeks 4-6 + cycle-off",
      "body": "Cycle-end gradual taper: 25/200/81 → 25/100/81 → 12.5/100/81 mg, 1 week per step. Abrupt stop risks rebound fatigue + rebound appetite. 2-4 weeks OFF mandatory for cardiovascular baseline recovery. For a new cycle, 8-12 week OFF window is optimal for ephedrine receptor recovery."
    }
  ],
  "quality": {
    "pure": [
      "Ephedrine HCl 25 mg tablets pharmacy-sourced (HU + EU Rx, R03CA02 ATC-class)",
      "Caffeine OTC No-Doz / Vivarin tablets or pharmaceutical-grade caffeine 200 mg",
      "Aspirin 81 mg low-dose cardio-protective OTC (Bayer Aspirin Cardio + generics)",
      "Pre-formulated ECA-blend dietary supplements have been FDA-banned since 2004 – DO NOT use blackmarket pre-blends (label-claim discrepancy + acetaminophen-blend risk Yokota 2013)"
    ],
    "caution": [
      "BP home-tracking 2x/day (AM + evening), weekly average log (cardiovascular risk monitoring)",
      "EKG baseline + 4-week check (QTc-prolongation + arrhythmia monitoring)",
      "Insomnia risk high – last dose before 16:00 mandatory",
      "Anxiety + irritability subjective side-effect, dose-dependent",
      "Chronic aspirin GI-bleed risk (low-dose 81 mg cardio-protective range safe with PPI; >325 mg/day GI-ulcer risk)",
      "Tachyphylaxis after 4-6 weeks – 2-4 weeks OFF recommended, dose escalation NOT advised"
    ],
    "avoid": [
      "Severe hypertension (>140/90 mmHg) – absolute contraindication (FDA 2004 ephedra ban cardiovascular stroke + AMI cluster)",
      "Pre-existing tachyarrhythmia, AF, cardiomyopathy – absolute contraindication",
      "Chronic β-blocker therapy – α-receptor unopposed vasoconstriction risk",
      "MAO inhibitor (phenelzine, tranylcypromine) – hypertensive crisis risk, absolute contraindication",
      "SSRI/SNRI (sertraline, venlafaxine) – serotonin syndrome risk, relative contraindication",
      "Hyperthyroidism / Graves disease – absolute contraindication (additive sympathomimetic storm)",
      "Pheochromocytoma – absolute contraindication",
      "Pregnancy + breastfeeding (FDA Category C)",
      "Pre-formulated ECA-blend dietary supplements (label-claim discrepancy + acetaminophen-blend hepatotoxicity)",
      "Children (<16y) – Reye syndrome risk on aspirin"
    ]
  },
  "interactions": [
    "Clenbuterol + Albuterol – additive β2-sympathomimetic cardio-stress, tachycardia + hypertension multiplier, CONTRAINDICATED",
    "Mirabegron – β3 + β1/β2 spillover additive cardiac stress, avoid",
    "MAO inhibitor (phenelzine) – hypertensive crisis, CONTRAINDICATED",
    "SSRI/SNRI – serotonin syndrome risk, low-dose escalation caution",
    "Liothyronine (T3) – additive cardiac tachyphylaxis risk, strict monitoring of both cycles",
    "Acetaminophen (paracetamol) – Yokota 2013 documented hepatic interaction (PMID 23545017), avoid",
    "Warfarin – aspirin INR elevation, dose adjustment + INR monitoring required"
  ],
  "studies": [
    {
      "title": "Safety and efficacy of long-term treatment with ephedrine, caffeine and an ephedrine/caffeine mixture.",
      "authors": "Toubro S, Astrup AV, Breum L, Quaade F",
      "journal": "Int J Obes Relat Metab Disord",
      "pmid": "8384186"
    },
    {
      "title": "Mechanistic pharmacokinetic modelling of ephedrine, norephedrine and caffeine in healthy subjects.",
      "authors": "Csajka C, Haller CA, Benowitz NL, Verotta D",
      "journal": "Br J Clin Pharmacol",
      "pmid": "15752380"
    },
    {
      "title": "An herbal supplement containing Ma Huang-Guarana for weight loss: a randomized, double-blind trial",
      "authors": "Boozer CN, Daly PA, Homel P, Solomon JL, Blanchard D, Nasser JA, et al.",
      "journal": "Int J Obes Relat Metab Disord. 2002;26(5):593-604.",
      "pmid": "12032741"
    },
    {
      "title": "Efficacy and safety of ephedra and ephedrine for weight loss and athletic performance: a meta-analysis.",
      "authors": "Shekelle PG, Hardy ML, Morton SC, Maglione M, Mojica WA, Suttorp MJ, Rhodes SL, Jungvig L, Gagné J",
      "journal": "JAMA",
      "pmid": "12672771"
    },
    {
      "title": "Ephedra-containing dietary supplements and cardiovascular adverse events",
      "authors": "Haller CA, Benowitz NL.",
      "journal": "N Engl J Med. 2000;343(25):1833-1838.",
      "pmid": "11117974"
    }
  ],
  "faq": [
    {
      "q": "Is the ECA-stack legal in Hungary and the EU?",
      "a": "Partially. Ephedrine is HU + EU ATC R03CA02 Rx-only (asthma + nasal decongestant indication), so bodybuilding-context off-label use requires a prescription. Aspirin is OTC. Caffeine is OTC. Since the FDA 2004 ephedra ban, dietary-supplement formats are banned across the EU. WADA S6 in-competition banned. Active competitive athletes are FORBIDDEN from use (urine threshold 10 μg/mL for ephedrine)."
    },
    {
      "q": "Why did the FDA ban ephedra supplements in 2004?",
      "a": "The FDA 2004 Consumer Update placed ephedra dietary supplements on the banned-list after 100+ deaths + 16,000+ adverse-event reports (cardiovascular stroke + AMI cluster, sudden cardiac death cases). The high-incidence driver: pre-formulated blends with dose variance (label claim 25 mg/cap ephedrine vs. actual 30-50 mg) + undocumented cardiovascular synergy of component combinations. Pharma-Rx ephedrine is NOT banned (R03CA02 Rx), only the dietary-supplement format."
    },
    {
      "q": "Clenbuterol vs ECA-stack – which is better for fat-loss?",
      "a": "Both are β-sympathomimetic mechanisms but with different profiles. Clenbuterol is a selective β2-agonist with long t1/2 (~35-40h) → accumulation + cardiac hypertrophy risk documented at 8-week chronic use. The ECA-stack is mixed α/β with short t1/2 (3-6h ephedrine) → more controllable dosing, but more frequent mid-day fluctuations. Clenbuterol cyclic 2-on/2-off is popular, ECA-stack continuous 4-6 weeks is standard. Both carry high cardiovascular risk – BP + EKG monitoring mandatory."
    },
    {
      "q": "What cardiovascular contraindications exist?",
      "a": "Absolute contraindications: severe hypertension (>140/90 mmHg), pre-existing tachyarrhythmia/AF, cardiomyopathy, pheochromocytoma, hyperthyroidism/Graves disease, MAO inhibitor co-administration. Relative contraindications: SSRI/SNRI (serotonin syndrome risk), chronic β-blocker therapy (α-receptor unopposed vasoconstriction), pregnancy/breastfeeding (FDA Category C), children <16y (Reye syndrome on aspirin). Pre-cycle 12-lead EKG + BP home-tracking 7-day baseline is the minimum protocol."
    },
    {
      "q": "Tolerance + cycle-off – why mandatory?",
      "a": "Ephedrine tachyphylaxis is documented after 4-6 weeks of chronic use: the presynaptic noradrenaline vesicular pool depletes, and postsynaptic β-receptor density downregulation reduces activation response. Dose escalation does NOT help (cardiovascular risk multiplier); instead 2-4 weeks OFF is required for receptor recovery + vesicular noradrenaline resynthesis. Caffeine tachyphylaxis is shorter (~7-10 days), but adenosine-receptor density rebounds in 4-7 caffeine-free days. Full ECA-stack OFF-window of 2-4 weeks post-cycle is optimum."
    }
  ],
  "related": [    "albuterol",
    "clenbuterol"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 25,
      "medium": 50,
      "high": 75
    },
    "unit": "mg ephedrine/day (with 200/81 mg caffeine/aspirin co-dose)",
    "note": "Standard ECA-stack: 25 mg ephedrine + 200 mg caffeine + 81 mg aspirin PO 2-3x/day (AM + early afternoon). Cycle length 4-6 weeks MAX, then 2-4 weeks OFF (ephedrine tachyphylaxis + cardiovascular recovery). Pre-cycle BP + EKG baseline; mid-cycle 4-week check; post-cycle 2-week BP + lipid panel + liver enzymes confirm-recovery. Last dose before 16:00 mandatory (insomnia prevention). WADA S6 in-competition banned – active competitive athletes are FORBIDDEN."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cycle",
      "timing": "1-2 weeks before cycle start",
      "markers": "Blood pressure baseline (home-tracking AM+evening 7-day average), resting HR, 12-lead EKG (QTc + rhythm), lipid panel (TC/LDL/HDL/TG), ALT/AST/GGT (acetaminophen-blend hepatic-interaction screen), full CBC",
      "purpose": "Assess cardiovascular baseline status; hypertension risk + QTc-prolongation screening (mandatory cardiovascular monitoring since FDA 2004 ephedra ban)"
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "2 + 4 weeks after cycle start",
      "markers": "Blood pressure 2x/day home-tracking weekly average, resting HR weekly, EKG 4-week check (QTc monitoring), liver enzymes (ALT/AST), lipid panel at 4 weeks",
      "purpose": "Early detection of emergent hypertension or QTc-prolongation; tachyphylaxis signal indicating dose-escalation is NOT needed (cardiovascular risk multiplier)"
    },
    "postCycle": {
      "label": "Post-cycle",
      "timing": "2 + 4 weeks after cycle end",
      "markers": "BP + HR home-tracking, EKG (confirm QTc normalization), lipid panel (triglyceride recovery), liver enzymes (cycle-end hepatic baseline restoration)",
      "purpose": "Verify cardiovascular baseline restoration before a new cycle. Ephedrine receptor recovery 2-4 week OFF window optimum."
    }
  }
}
