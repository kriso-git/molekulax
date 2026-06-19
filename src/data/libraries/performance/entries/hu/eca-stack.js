// ECA-stack (Ephedrine + Caffeine + Aspirin) — klasszikus 1990-es évek
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
  "shortDesc": "Ephedrine 25 mg + Caffeine 200 mg + Aspirin 81 mg klasszikus 1990-es évek thermogenic-stack. Astrup 1992 Lancet obesity-trial (PMID 1346830) szerint ~3x potenseebb mint ephedrine önállóan; FDA 2004 ephedra-ban óta EU Rx-only, blackmarket fat-burner-protokoll.",
  "description": "Az ECA-stack (Ephedrine + Caffeine + Aspirin) az 1990-es évek thermogenic fat-loss-protokollja, ami Astrup 1992 Lancet obesity-trial (PMID 1346830) után robbant be a bodybuilding underground-ba. A három komponens szinergisztikus mechanizmusa: az ephedrine α/β-sympathomimetikus alkaloid noradrenerg-szabadulást indít a presynaptic-vezikulumokból; a caffeine PDE-inhibitor és adenosine-receptor-antagonist a cAMP-degradációt gátolja, így az ephedrine-effekt prolongál; az aspirin (81 mg low-dose) endothelial prostaglandin-modulációval az ephedrine-vasoconstrictive-rebound-ot tompítja. Daly 1993 Am J Clin Nutr (PMID 8367356) RCT-evidence: a 25/200 mg-os ephedrine+caffeine kombináció ~3x potenseebb thermogenic-rate-elevation-t okoz, mint ephedrine önállóan. Boozer 2002 Int J Obes (PMID 12122475) 6-hónapos RCT obesity-cohort-on 7.2 kg fat-loss-t mért placebo-2.4 kg-mal szemben. FDA 2004 Consumer Update az ephedra-banned ban-listára helyezte 100+ halál + 16 000+ adverse-event-report után (kardiovaszkuláris stroke + AMI-cluster), így az EU R03CA02 (ephedrine ATC-class) vény-köteles lett. Aspirin OTC, caffeine OTC. WADA S6 stimulant — in-competition banned.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Ephedrine α/β-sympathomimetic + caffeine PDE-inhibitor + aspirin endothelial-protektív szinergizmus"
    },
    {
      "label": "Adagolás",
      "value": "25/200/81 mg PO 2-3x/nap, 4-6 hét cycle MAX"
    },
    {
      "label": "Felezési idő",
      "value": "Ephedrine 3-6 óra; caffeine 5 óra; aspirin 4-6 óra"
    },
    {
      "label": "Hatáskezdet",
      "value": "30-60 perc, thermogenic-peak 1-2 óra"
    },
    {
      "label": "Jogi státusz",
      "value": "HU ephedrine ATC R03CA02 Rx; EU R03 Rx-only (FDA 2004 ban óta); aspirin OTC; caffeine OTC. WADA S6 in-competition banned."
    }
  ],
  "mechanism": "Az ECA-stack három különböző sympathomimetic + xantin + szalicilát komponens szinergisztikus thermogenic-aktivációja. Ephedrine: α1/α2 + β1/β2-adrenoceptor mixed-agonist, részben presynaptic noradrenaline-releasing agent (NRA) is — a vezikuláris noradrenaline-pool depletes 20-30 perc alatt single-dose-on, ezért a tachyphylaxis 4-6 hét chronic-use-on dokumentált. Caffeine: nem-szelektív adenosine-receptor-antagonist (A1+A2A) + PDE-3+PDE-4 inhibitor. Az adenosine-antagonizmus a hypothalamic + locus-coeruleus-feedback-suppression-t megszünteti, ami további noradrenaline-release-t enged; a PDE-gátlás a cAMP-degradációt csökkenti, így az ephedrine-mediated β-receptor-signaling prolongál. Aspirin (low-dose 81 mg): COX-1 inhibitor, az endothelial thromboxane-A2-szintézist gátolja, ami az ephedrine-vasoconstrictive-rebound + platelet-aggregation-risk-et tompítja. A három hatóanyag együttes adagolása ~3x potenseebb thermogenic-rate-emelést okoz +250-300 kcal/nap REE-növekedéssel egészséges felnőtt férfin (Astrup 1992, Daly 1993). A mechanizmus DOSE-DEPENDENT cardiovascular-risk-emelést is okoz: a noradrenaline-release plus vasoconstrictive-effekt synergikus BP-emelkedést okoz (+10-20 mmHg sysztolés, +5-10 mmHg diasztolés), HR-emelkedés (+15-25 bpm), QTc-prolongation potential 4-week-cikluson belül mérhető.",
  "legalStatus": "USA: ephedrine kontrollált a Combat Methamphetamine Epidemic Act 2005 alatt (≤3.6 g/30-nap OTC limit, behind-counter regisztráció); ephedra-dietary supplements 2004 óta tilosak (FDA Consumer Update). EU + EMA: ephedrine R03CA02 ATC-class, vény-köteles Rx (asthma + nasal decongestant) — 2004 óta dietary-supplement-formátum tilos. HU: ephedrine vény-köteles (R03CA02), aspirin OTC, caffeine OTC. PL: ephedrine vény-köteles (R03CA02), aspirin OTC, caffeine OTC. WADA: ephedrine S6 stimulant in-competition banned (vizelet-küszöb 10 μg/mL); pseudoephedrine 2010 óta WADA-listán (vizelet-küszöb 150 μg/mL). Caffeine 2004 óta NEM banned (monitored). Aspirin allowed.",
  "onsetTime": "30-60 perc, thermogenic-peak 1-2 óra",
  "halfLife": "Ephedrine 3-6 óra; caffeine 5 óra; aspirin 4-6 óra (parent-only)",
  "interactionsWith": [
    "clenbuterol",
    "albuterol",    "mirabegron",
    "liothyronine"
  ],
  "aromatization": "Nem aromatizál (nem szteroid hatóanyag — sympathomimetikus alkaloid + xantin + szalicilát kombináció). Nincs CYP19-interakció.",
  "hepatotoxicity": "Közepes — ephedrine krónikus cardio-stress + acetaminophen ECA-stack-blend kombináció esetén hepatikus interakció dokumentált (Yokota 2013 PMID 23545017). Aspirin chronic high-dose Reye-szindróma-risk (gyermek-kontraindikáció). Ephedra-blackmarket-blendek 2004 előtt acute hepatitis-case-cluster (FDA Consumer Update 2004).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS, sympathomimetic + xantin + szalicilát)",
  "bindingAffinity": "Ephedrine α1-AR Ki ~50 μM (low-affinity, indirect NRA-dominant); β1/β2 Ki ~10 μM. Caffeine A1-receptor Ki ~12 μM, A2A-receptor Ki ~2.4 μM. Aspirin COX-1 IC50 ~3.2 μM.",
  "detectionWindow": "Ephedrine WADA-akkreditált LC-MS/MS vizelet-detektálás 1-3 nap (vizelet-küszöb 10 μg/mL). Caffeine NEM banned (monitored). Aspirin allowed.",
  "benefits": [
    "Klasszikus thermogenic-stack ~3x potenseebb mint ephedrine önállóan (Astrup 1992 Lancet PMID 1346830)",
    "+250-300 kcal/nap REE-emelkedés egészséges felnőttön (Daly 1993 Am J Clin Nutr PMID 8367356)",
    "Boozer 2002 RCT obesity-cohort 7.2 kg fat-loss / 6 hónap (placebo 2.4 kg, PMID 12122475)",
    "Greenway 2001 Obesity Research lipid-mobilization-evidence (PMID 11707560)",
    "Iztáplálkozás-suppression sekundér effekt (ephedrine + caffeine sympathomimetic appetit-csökkentés)",
    "Olcsó komponensek, globálisan elérhető (ephedrine Rx-on belül + aspirin/caffeine OTC)"
  ],
  "quickStart": [
    "Pre-cycle BP home-tracking baseline 7-nap átlag (FDA 2004 ban óta kardiovaszkuláris monitoring kötelező)",
    "EKG-baseline + 4-week-check (QTc-prolongation-risk)",
    "Standard dose: 25 mg ephedrine + 200 mg caffeine + 81 mg aspirin PO 2-3x/nap (AM + early-afternoon)",
    "Last dose 16:00 előtt (insomnia-prevention, 5-6 óra ephedrine + caffeine t1/2)",
    "Cycle-length 4-6 hét MAX, majd 2-4 hét OFF (ephedrine-tachyphylaxis + cardiovascular-recovery)",
    "Bloodwork mid-cycle: BP heti átlag + EKG 4-week-check + liver-enzymes (acetaminophen-blend-mentes verifikáció)",
    "Lipid panel pre- és post-cycle (ephedrine-mediated triglyceride-emelkedés dokumentált)"
  ],
  "expectations": [
    {
      "label": "1. hét",
      "body": "Initial dose 25/200/81 mg AM. Subjektív thermogenic-effekt érezhető (enyhe izzadás, +15-25 bpm HR, +10-15 mmHg BP). Étvágy-csökkenés és energia-emelkedés egyértelmű. Insomnia-risk magas ha second-dose 14:00 után."
    },
    {
      "label": "2-3. hét",
      "body": "Steady-state thermogenic-rate. Fat-loss tempó +0.5-0.8 kg/hét adekvát kalória-deficitben (Boozer 2002 6-hónap-rate analóg). Mild tachyphylaxis a 3. hét vége felé érezhető — dose-escalation NEM ajánlott (cardiovascular-risk-multiplier)."
    },
    {
      "label": "4-6. hét + cycle-off",
      "body": "Cycle-end gradual taper: 25/200/81 → 25/100/81 → 12.5/100/81 mg, 1-1 hét per step. Hirtelen leállítás rebound-fatigue + rebound-appetite-risk. 2-4 hét OFF kötelező cardiovascular-baseline-helyreállítás miatt. Új cycle-on belül 8-12 hét OFF-window az ephedrine-receptor-recovery optimumhoz."
    }
  ],
  "quality": {
    "pure": [
      "Ephedrine HCl 25 mg tabletta pharmacy-szourzott (HU + EU Rx, R03CA02 ATC-class)",
      "Caffeine OTC No-Doz / Vivarin tablet vagy pharmaceutical-grade caffeine 200 mg",
      "Aspirin 81 mg low-dose cardio-protective OTC (Bayer Aspirin Cardio + generic)",
      "Pre-formulated ECA-blend dietary supplements 2004 óta FDA-tilosak — DO NOT use blackmarket pre-blends (label-claim discrepancy + acetaminophen-blend-risk Yokota 2013)"
    ],
    "caution": [
      "BP home-tracking 2x/nap (AM + estére), heti átlag napló (cardiovascular-risk-monitoring)",
      "EKG-baseline + 4-week-check (QTc-prolongation + arrhythmia-monitoring)",
      "Insomnia-risk magas — last dose 16:00 előtt mandatory",
      "Anxietás + irritability subjektív side-effect dose-dependent",
      "Krónikus aspirin GI-bleed-risk (low-dose 81 mg cardio-protective tartomány biztonságos PPI-szel; >325 mg/nap GI-ulcer-risk)",
      "Tachyphylaxis 4-6 hét után — cycle-off 2-4 hét javasolt, dose-escalation NEM"
    ],
    "avoid": [
      "Súlyos hypertonia (>140/90 mmHg) — abszolút kontraindikáció (FDA 2004 ephedra ban kardiovaszkuláris stroke + AMI-cluster)",
      "Pre-existing tachyarrhythmia, AF, cardiomyopathy — abszolút kontraindikáció",
      "Krónikus β-blokkoló-terápia — α-receptor-unopposed vasoconstriction-risk",
      "MAO-inhibitor (phenelzine, tranylcypromine) — hypertensiv-krízis-risk abszolút kontraindikáció",
      "SSRI/SNRI (sertraline, venlafaxine) — serotonin-szindróma-risk relativ kontraindikáció",
      "Hyperthyroidism / Graves-betegség — abszolút kontraindikáció (additív sympathomimetic-storm)",
      "Pheochromocytoma — abszolút kontraindikáció",
      "Pregnancy + szoptatás (FDA Category C)",
      "Pre-formulated ECA-blend dietary supplements (label-claim discrepancy + acetaminophen-blend hepatotoxicity)",
      "Gyermek (<16 év) — Reye-szindróma-risk aspirin-on"
    ]
  },
  "interactions": [
    "Clenbuterol + Albuterol — additív β2-sympathomimetic kardio-stressz, tachycardia + hypertonia-multiplier, KONTRAINDIKÁLT",
    "Mirabegron — β3 + β1/β2 spillover additív cardiac-stress, kerülni javasolt",
    "MAO-inhibitor (phenelzine) — hypertensiv-krízis, KONTRAINDIKÁLT",
    "SSRI/SNRI — serotonin-szindróma-risk, low-dose-escalation óvatosság",
    "Liothyronine (T3) — additív cardiac-tachyphylaxis-risk, mindkét cycle-monitoring szigorú",
    "Acetaminophen (paracetamol) — Yokota 2013 dokumentált hepatic-interaction (PMID 23545017), kerülni",
    "Warfarin — aspirin INR-emelkedés, dose-adjust + INR-monitoring szükséges"
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
      "q": "Legális az ECA-stack Magyarországon és az EU-ban?",
      "a": "Részlegesen. Az ephedrine HU + EU ATC R03CA02 vény-köteles Rx (asztma + nasal decongestant Rx-indikáció), így bodybuilding-context off-label use prescription-need. Aspirin OTC. Caffeine OTC. Az FDA 2004 ephedra-ban óta dietary-supplement formátum mindenhol EU-ban tilos. WADA S6 in-competition banned. Versenysport-aktív sportoló-on TILOS (vizelet-küszöb 10 μg/mL ephedrine-on)."
    },
    {
      "q": "Miért tiltotta be az FDA 2004-ben az ephedra-supplementeket?",
      "a": "Az FDA 2004 Consumer Update az ephedra-dietary-supplements-eket banned-listára helyezte 100+ halál + 16 000+ adverse-event-report után (kardiovaszkuláris stroke + AMI-cluster, sudden cardiac death case-szerű). A magas-incidence-faktor: pre-formulated blendek dose-variance (label-claim 25 mg/cap ephedrine vs actual 30-50 mg) + komponens-kombinációk dokumentálatlan kardiovaszkuláris szinergizmusa. Pharma-Rx ephedrine NEM banned (R03CA02 vény-köteles), csak a dietary-supplement-formátum."
    },
    {
      "q": "Clenbuterol vs ECA-stack — melyik jobb fat-loss-ra?",
      "a": "Mindkettő β-sympathomimetic mechanism, de eltérő profil. Clenbuterol szelektív β2-agonist + hosszú t1/2 (~35-40 óra) → akkumuláció + szívizom-hipertrófia-risk dokumentált 8-hét chronic. ECA-stack mixed α/β + rövid t1/2 (3-6 óra ephedrine) → kontrollálhatóbb dosing, de gyakoribb cycle-mid-day-fluktuáció. Clenbuterol cyclic 2-on/2-off népszerű, ECA-stack continuous 4-6 hét standard. Mindkettő kardiovaszkuláris-risk magas — BP + EKG monitoring kötelező."
    },
    {
      "q": "Milyen kardiovaszkuláris kontraindikációk?",
      "a": "Abszolút kontraindikációk: súlyos hypertonia (>140/90 mmHg), pre-existing tachyarrhythmia/AF, cardiomyopathy, pheochromocytoma, hyperthyroidism/Graves-betegség, MAO-inhibitor-co-administration. Relativ kontraindikációk: SSRI/SNRI (serotonin-szindróma-risk), krónikus β-blokkoló-terápia (α-receptor-unopposed vasoconstriction), pregnancy/szoptatás (FDA Category C), gyermek <16 év (Reye-szindróma aspirin-on). Pre-cycle 12-lead EKG + BP home-tracking 7-nap baseline minimum protokoll."
    },
    {
      "q": "Tolerance + cycle-off — miért kötelező?",
      "a": "Az ephedrine-on tachyphylaxis 4-6 hét chronic-use-on dokumentált: a presynaptic noradrenaline-vesicular-pool depletálódik, és a postsynaptic β-receptor-density downregulation csökkenti az aktivációs response-t. Dose-escalation NEM segít (cardiovascular-risk-multiplier), helyette 2-4 hét OFF receptor-recovery + vesicular-noradrenaline-resynthesis kötelező. Caffeine-on rövidebb tachyphylaxis (~7-10 nap), de adenosine-receptor-density rebound 4-7 nap caffeine-free után. Full ECA-stack OFF-window 2-4 hét cycle-után optimum."
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
    "unit": "mg ephedrine/nap (200/81 mg caffeine/aspirin co-dose)",
    "note": "Standard ECA-stack: 25 mg ephedrine + 200 mg caffeine + 81 mg aspirin PO 2-3x/nap (AM + early-afternoon). Cycle-length 4-6 hét MAX, majd 2-4 hét OFF (ephedrine-tachyphylaxis + cardiovascular-recovery). Pre-cycle BP + EKG baseline; mid-cycle 4-week-check; post-cycle 2-week BP + lipid panel + liver-enzymes confirm-recovery. Last dose 16:00 előtt mandatory (insomnia-prevention). WADA S6 in-competition banned — versenysport-aktív TILOS."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "Cycle-start előtt 1-2 hét",
      "markers": "Blood pressure baseline (home-tracking AM+estére 7 nap átlag), resting HR, 12-lead EKG (QTc + ritmus), lipid panel (TC/LDL/HDL/TG), ALT/AST/GGT (acetaminophen-blend hepatic-interaction-screen), full CBC",
      "purpose": "Cardiovascular baseline-status felmérése, hypertonia-risk + QTc-prolongation-screening (FDA 2004 ephedra ban óta kardiovaszkuláris monitoring kötelező)"
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "Cycle-start után 2 + 4 hét",
      "markers": "Blood pressure 2x/nap home-tracking heti átlag, resting HR weekly, EKG 4-week-check (QTc-monitoring), liver enzymes (ALT/AST), lipid panel 4 hét",
      "purpose": "Hypertonia-emergens vagy QTc-prolongation-szignál korai detektálás; tachyphylaxis-szignál dose-escalation-NEM-szükséglet (cardiovascular-risk-multiplier)"
    },
    "postCycle": {
      "label": "Ciklus után",
      "timing": "Cycle-end után 2 + 4 hét",
      "markers": "BP + HR home-tracking, EKG (QTc-normalizáció confirm), lipid panel (triglyceride-recovery), liver enzymes (cycle-vége hepatic-baseline-helyreállítás)",
      "purpose": "Cardiovascular-baseline-helyreállítás verifikálása cycle-off előtt új cycle-ra. Ephedrine-receptor recovery 2-4 hét OFF-window optimum."
    }
  }
}
