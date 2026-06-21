// Letrozole (Femara) – non-steroidal triazole AI, stronger than anastrozole.
// FDA-approved 1997 Novartis. AAS-niche: hard-suppression Tren+Mast E2-control
// + gynecomastia reversal (2.5 mg/day × 2-3 weeks).
// Sources: FDA Femara SmPC, Coates 2007 BIG1-98 PMID 17582920,
// Bhatnagar 1996 PMID 8847500, Goss 2003 MA.17 PMID 14595025.

export default {
  "id": "letrozol",
  "sideEffects": [
    { "hu": "Túlszuppresszált (crashed) ösztradiol: a Letrozol erősebb az Anastrozolnál (~99% E2-szuppresszió), így könnyen a tünetes hypoösztrogenizmusba viszi az E2-t, ami libidó-zuhanást, erektilis diszfunkciót, fáradtságot és levertséget okoz.", "en": "Over-suppressed (crashed) estradiol: letrozole is more potent than anastrozole (~99% E2 suppression), so it easily drives E2 into symptomatic hypoestrogenism, causing low libido, erectile dysfunction, fatigue and low mood.", "pl": "Nadmiernie stłumiony (crashed) estradiol: letrozol jest silniejszy od anastrozolu (~99% supresji E2), więc łatwo wpędza E2 w objawowy hipoestrogenizm, powodując spadek libido, zaburzenia erekcji, zmęczenie i obniżony nastrój." },
    { "hu": "Ízületi és izomfájdalom (arthralgia, myalgia): az ösztrogénmegvonás jellegzetes mellékhatása, csukló-, térd- és kéztünetekkel, ízületi merevséggel; a klinikai vizsgálatokban a leggyakoribb panasz.", "en": "Joint and muscle pain (arthralgia, myalgia): a hallmark of estrogen deprivation, with wrist, knee and hand symptoms and joint stiffness; the most common complaint in clinical trials.", "pl": "Ból stawów i mięśni (arthralgia, myalgia): typowy skutek pozbawienia estrogenu, z objawami nadgarstka, kolan i dłoni oraz sztywnością stawów; najczęstsza skarga w badaniach klinicznych." },
    { "hu": "Romló lipidprofil: tartós használat mellett a HDL csökken (akár ~30%) és az LDL emelkedik (~15-25%), ami a kedvezőtlen kardiovaszkuláris kockázat felé tolja a profilt, kiváltképp aromatizáló szteroid-stacken.", "en": "Worsening lipid profile: with sustained use HDL falls (up to ~30%) and LDL rises (~15-25%), shifting the profile toward unfavourable cardiovascular risk, especially on an aromatizing steroid stack.", "pl": "Pogorszenie profilu lipidowego: przy długotrwałym stosowaniu HDL spada (nawet ~30%), a LDL rośnie (~15-25%), przesuwając profil w stronę niekorzystnego ryzyka sercowo-naczyniowego, zwłaszcza na stacku aromatyzujących sterydów." },
    { "hu": "Csontritkulás és csontvesztés: az ösztrogén kulcsfontosságú a csontsűrűség fenntartásában; tartós Letrozol-használat csökkenti a BMD-t és növeli az oszteoporózis és törések kockázatát (FDA Femara címke), ezért krónikus használatnál DEXA-monitorozás indokolt.", "en": "Bone loss and osteoporosis: estrogen is key to maintaining bone density, so prolonged letrozole use lowers BMD and raises the risk of osteoporosis and fractures (FDA Femara label); chronic use warrants DEXA monitoring.", "pl": "Utrata masy kostnej i osteoporoza: estrogen jest kluczowy dla utrzymania gęstości kości, więc długotrwałe stosowanie letrozolu obniża BMD i zwiększa ryzyko osteoporozy oraz złamań (etykieta FDA Femara); przewlekłe stosowanie wymaga monitorowania DEXA." },
    { "hu": "Hőhullámok és fokozott izzadás: az ösztrogénhiány vazomotoros tünete, a Letrozol egyik leggyakoribb, klinikailag dokumentált mellékhatása.", "en": "Hot flushes and increased sweating: a vasomotor symptom of estrogen deficiency and one of the most common clinically documented side effects of letrozole.", "pl": "Uderzenia gorąca i wzmożona potliwość: objaw naczynioruchowy niedoboru estrogenu i jeden z najczęstszych klinicznie udokumentowanych skutków ubocznych letrozolu." },
    { "hu": "Hangulati zavarok és fáradtság: az alacsony ösztrogénszint depresszív hangulatot, ingerlékenységet, alvászavart és kifejezett kimerültséget okozhat.", "en": "Mood disturbance and fatigue: low estrogen can cause depressed mood, irritability, sleep disturbance and marked tiredness.", "pl": "Zaburzenia nastroju i zmęczenie: niski poziom estrogenu może powodować obniżony nastrój, drażliwość, zaburzenia snu i wyraźne znużenie." },
    { "hu": "Fejfájás, szédülés és émelygés: gyakori, általában enyhe-közepes tünetek a kezelés alatt, főként a magasabb (2.5 mg/nap) gyno-reverzáló dózison.", "en": "Headache, dizziness and nausea: common, usually mild-to-moderate symptoms during treatment, more so at the higher (2.5 mg/day) gyno-reversal dose.", "pl": "Ból głowy, zawroty głowy i nudności: częste, zwykle łagodne do umiarkowanych objawy w trakcie leczenia, bardziej nasilone przy wyższej dawce (2,5 mg/dobę) do cofania ginekomastii." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás: Pregnancy Category X, az ösztrogénszintézis gátlása súlyos magzati károsodást és vetélést okozhat, ezért fogamzóképes/terhes nőnél abszolút ellenjavallt.", "en": "Pregnancy and breastfeeding: Pregnancy Category X, blocking estrogen synthesis can cause severe fetal harm and miscarriage, so it is absolutely contraindicated in pregnant women.", "pl": "Ciąża i karmienie piersią: Kategoria X w ciąży, blokowanie syntezy estrogenu może spowodować ciężkie uszkodzenie płodu i poronienie, więc jest bezwzględnie przeciwwskazany u kobiet w ciąży." },
    { "hu": "Premenopauzális nők (endokrin státusz): a reflexes gonadotropin-emelkedés és ovuláris diszfunkció miatt nem javallt premenopauzális női használat megfelelő endokrin felügyelet nélkül.", "en": "Premenopausal women (endocrine status): due to reflex gonadotropin rise and ovarian dysfunction, it is not indicated for premenopausal female use without proper endocrine supervision.", "pl": "Kobiety przed menopauzą (status endokrynny): z powodu odruchowego wzrostu gonadotropin i dysfunkcji jajników nie jest wskazany do stosowania u kobiet przed menopauzą bez odpowiedniego nadzoru endokrynologicznego." },
    { "hu": "Súlyos máj- vagy veseelégtelenség: a hepatikus CYP-metabolizmus és a renális ürülés miatt súlyos máj- vagy vesekárosodásnál a clearance romlik, így használata ellenjavallt vagy szoros felügyeletet igényel.", "en": "Severe hepatic or renal impairment: because of hepatic CYP metabolism and renal excretion, clearance is reduced in severe liver or kidney disease, so use is contraindicated or requires close supervision.", "pl": "Ciężka niewydolność wątroby lub nerek: ze względu na wątrobowy metabolizm CYP i wydalanie nerkowe klirens jest obniżony w ciężkiej chorobie wątroby lub nerek, więc stosowanie jest przeciwwskazane lub wymaga ścisłego nadzoru." },
    { "hu": "Meglévő oszteoporózis vagy alacsony csontsűrűség: a Letrozol tovább csökkenti a BMD-t, ezért igazolt oszteoporózis vagy törésrizikó esetén kerülendő, illetve csak csontvédelem és DEXA-monitor mellett mérlegelhető.", "en": "Pre-existing osteoporosis or low bone density: letrozole further lowers BMD, so it should be avoided with established osteoporosis or fracture risk, or used only with bone protection and DEXA monitoring.", "pl": "Istniejąca osteoporoza lub niska gęstość kości: letrozol dodatkowo obniża BMD, więc należy go unikać przy rozpoznanej osteoporozie lub ryzyku złamań, lub stosować tylko z ochroną kości i monitorowaniem DEXA." },
    { "hu": "Eleve alacsony vagy crashed ösztradiol: ha az E2 már alacsony vagy tünetes hypoösztrogenizmus áll fenn, a Letrozol indítása vagy folytatása ellenjavallt – baseline E2 (érzékeny LC-MS/MS) mérés nélkül ne induljon, főleg AI-naiv felhasználón.", "en": "Already low or crashed estradiol: if E2 is already low or symptomatic hypoestrogenism is present, starting or continuing letrozole is inadvisable – do not start without a baseline E2 (sensitive LC-MS/MS) measurement, especially in AI-naive users.", "pl": "Już niski lub crashed estradiol: jeśli E2 jest już niskie lub występuje objawowy hipoestrogenizm, rozpoczynanie lub kontynuowanie letrozolu jest niewskazane – nie zaczynać bez pomiaru wyjściowego E2 (czuły LC-MS/MS), zwłaszcza u osób bez doświadczenia z AI." },
    { "hu": "Tamoxifen (Nolvadex) egyidejű alkalmazása: farmakokinetikai interakció miatt a tamoxifen csökkenti a Letrozol plazmaszintjét, az együttes adás nem ajánlott (és AAS-PCT-ben az E2-crash kockázata is fokozódik).", "en": "Concurrent tamoxifen (Nolvadex): due to a pharmacokinetic interaction tamoxifen lowers letrozole plasma levels, so co-administration is not recommended (and in AAS-PCT it also increases the risk of crashing E2).", "pl": "Jednoczesne stosowanie tamoksyfenu (Nolvadex): z powodu interakcji farmakokinetycznej tamoksyfen obniża stężenie letrozolu w osoczu, więc łączne podawanie nie jest zalecane (a w AAS-PCT zwiększa też ryzyko crashed E2)." },
    { "hu": "Kifejezett, kezeletlen kedvezőtlen lipidprofil vagy kardiovaszkuláris betegség: a HDL-csökkentő hatás miatt fokozott figyelmet vagy ellenjavallatot jelent meglévő dyslipidaemia vagy szívbetegség mellett, lipidpanel-monitorozás nélkül.", "en": "Marked untreated adverse lipid profile or cardiovascular disease: because of the HDL-lowering effect it warrants caution or contraindication with existing dyslipidaemia or heart disease without lipid-panel monitoring.", "pl": "Wyraźnie niekorzystny, nieleczony profil lipidowy lub choroba sercowo-naczyniowa: ze względu na efekt obniżający HDL wymaga ostrożności lub jest przeciwwskazany przy istniejącej dyslipidemii lub chorobie serca bez monitorowania panelu lipidowego." }
  ],
  "name": "Letrozole (Femara)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Triazole-class non-steroidal AI, stronger than anastrozole (~99% E2 suppression at 2.5 mg/day). FDA-approved (1997 Novartis). AAS-niche: hard-suppression Tren+Mast E2-control + gynecomastia reversal (2.5 mg/day × 2-3 weeks).",
  "description": "Letrozole (Femara) is a third-generation non-steroidal triazole AI developed by Novartis and FDA-approved in 1997 for postmenopausal ER+ breast cancer. A stronger aromatase inhibitor than anastrozole (~97%): the BIG1-98 trial (Coates 2007, PMID 17582920) documented ~99% serum E2 suppression at 2.5 mg/day – the head-to-head trial of the two AIs (Geisler 2002) showed letrozole has greater intramuscular aromatase tissue penetration (stronger peripheral aromatase action). In the AAS world there are two main uses: (1) E2-control on hard-suppression stacks (Tren-Acetate + Mast-Prop + Test-Prop blast – on heavily aromatizing steroids like Dianabol or Anadrol combinations), and (2) gynecomastia reversal (ER-mediated breast gland tissue shrinkage, 2.5 mg/day × 14-21 days with taper protocol). Because it's stronger than anastrozole, AI-naive users should start at anastrozole-equivalent half-doses. WADA S4.1 – banned.",
  "keyInfo": [
    {"label": "Mechanism", "value": "Reversible non-steroidal CYP19 aromatase inhibitor, ~99% serum E2 suppression at 2.5 mg/day"},
    {"label": "Dosing (AAS)", "value": "0.25-1.25 mg EOD bloodwork-titrated; gyno reversal 2.5 mg/day × 14-21 days"},
    {"label": "Half-life", "value": "~42 hours"},
    {"label": "Onset", "value": "E2 reduction measurable 24-48 h, plateau 4-6 days"},
    {"label": "Legal status", "value": "FDA + EMA Rx, HU + PL approved, WADA S4.1 banned"}
  ],
  "mechanism": "Letrozole is also a competitive reversible triazole AI binding to the heme iron of CYP19 aromatase. Bhatnagar 1996 PMID 8847500 documented an aromatase IC50 of ~11 nM in vitro (human placental submicrosomal preparation), slightly lower than anastrozole's ~15 nM. In vivo tissue penetration and enzyme-level binding stability are higher – whole-body aromatase suppression at 2.5 mg/day is ~99% (vs. anastrozole 1 mg ~97%). Whole-body aromatase residual at this suppression level falls below detection limit. Hepatic CYP3A4 + CYP2A6 metabolize; ~60-90% renal excretion as glucuronide. NOT an AR/ER/PR agonist. WADA detection 1-2 months.",
  "legalStatus": "USA: FDA-approved 1997 (Femara 2.5 mg, Novartis; generic letrozole 2007). Indication: postmenopausal ER+ breast cancer adjuvant/metastatic + extended adjuvant therapy. EU: EMA-approved 1996. HU: registered (Femara, Letrozol-ratiopharm, Letrozol Teva Rx). PL: registered (Femara Rx). WADA: S4.1 aromatase inhibitor – banned in/out-of-competition.",
  "onsetTime": "E2 reduction 24-48 h, plateau 4-6 days",
  "halfLife": "~42 hours",
  "halfLifeActive": "N/A (parent compound active, metabolites inactive)",
  "interactionsWith": ["anastrozol", "exemestane", "nolvadex", "testosterone-info"],
  "aromatization": "Does not aromatize – non-steroidal triazole AI, ~99% serum E2 suppression at 2.5 mg/day (BIG2-98 trial).",
  "hepatotoxicity": "Low – non-steroidal, not 17α-alkylated. Hepatic adverse events <2% (FDA Femara label). Long-term female adjuvant 5-10 years: no significant DILI pattern.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not AAS, AI)",
  "bindingAffinity": "CYP19 aromatase active-site competitive binding, Ki ~5-10 nM. ER/AR/PR – minimal binding (<1%).",
  "detectionWindow": "WADA-accredited GC-MS/LC-MS/MS urine detection 1-2 months (parent + glucuronide metabolite).",
  "benefits": [
    "Stronger than anastrozole – hard-suppression Tren+Mast stack E2-control",
    "Gynecomastia reversal (existing gland tissue regression at 2.5 mg × 2-3 weeks)",
    "~99% serum E2 suppression at 2.5 mg/day (BIG1-98 trial)",
    "Reversible binding → titrable (but cautiously, easier to crash E2 than anastrozole)",
    "FDA + EMA Rx pharma-grade globally available",
    "Inexpensive (~€20-40/box generic 2.5 mg)"
  ],
  "quickStart": [
    "AI-naive: start at anastrozole-equivalent half-dose (anastrozole 0.5 mg ≈ letrozole 0.25 mg)",
    "Standard AAS E2-control: 0.25-1.25 mg EOD bloodwork-titrated",
    "Gynecomastia reversal protocol: 2.5 mg/day × 14-21 days, then taper (1.25 → 0.625 → 0.25 → 0)",
    "Pre-treatment baseline E2 LC-MS/MS, 10-14 days later re-test",
    "Letrozole crashes E2 more easily than anastrozole – start at lower dose",
    "Take with water + morning, food indifferent (oral bioavailability ~85%)"
  ],
  "expectations": [
    {"label": "Day 1-3", "body": "Drastic E2 reduction (~70-90%), gyno symptom relief noticeable. Some users see rapid water-retention drop → cleaner look."},
    {"label": "Week 1-2", "body": "Plateau serum E2 <5 pg/mL most often (crashed E2 risk high). Gyno tissue regression begins (if reversal is goal). Lipid panel monitor: HDL drop and LDL rise expected."},
    {"label": "Gyno reversal day 21+", "body": "Start taper protocol: 1.25 mg → 0.625 mg → 0.25 mg, 5-7 day steps. Gland tissue regression degree individual; if no change after 3 weeks, surgical removal (gynectomy) under specialist consultation."},
    {"label": "After cessation", "body": "E2 returns to baseline in 24-72 h (~42 h half-life). Mild rebound possible (gyno relapse risk if discontinued without taper)."}
  ],
  "quality": {
    "pure": [
      "Novartis Femara 2.5 mg blister, Rx pharma-grade (EU pharmacy available)",
      "Letrozol-ratiopharm, Letrozol Teva, Letrozol Sandoz generic (EU)",
      "Indian generic (Sun Pharma, Cipla Letroz 2.5 mg)",
      "UGL liquid letrozole: HPLC-tested source required – often 30 mg/mL and overdose risk"
    ],
    "caution": [
      "E2 crash easier than on anastrozole – extra caution in AI-naive users",
      "Lipid panel drastic deterioration at 2.5 mg/day chronic – HDL drop up to 30%, LDL rise 15-25%",
      "BMD long-term stressor – negligible during 3-week gyno reversal, chronic use needs DEXA monitor",
      "CYP3A4 inducer/inhibitor interactions (as anastrozole)",
      "Tamoxifen co-administration: contraindicated (overlapping mechanism + E2 crash)"
    ],
    "avoid": [
      "Premenopausal female AAS use (ovulatory dysfunction)",
      "Pregnancy / breastfeeding (Pregnancy Category X)",
      "Severe hepatic insufficiency",
      "Prophylactic AAS cycle-start letrozole without baseline (high crashed-E2 risk)",
      "Starting from full 2.5 mg/day in AI-naive users (start at 0.25 mg)"
    ]
  },
  "interactions": [
    "Tamoxifen (Nolvadex): NOT recommended together in PCT – overlapping mechanism, E2 crash risk",
    "Testosterone + Tren stack: standard hard-suppression E2-control",
    "Dianabol/Anadrol stack: letrozole strongly effective against strong aromatization",
    "Methylated 17α-alkylated oral steroids: hepatic stress double monitor",
    "Statins: lipid panel double monitor + statin dose reduction considered",
    "Alcohol: mild hepatic stress, moderate consumption OK"
  ],
  "studies": [
    {"title": "A comparison of letrozole and tamoxifen in postmenopausal women with early breast cancer.", "authors": "Breast International Group (BIG) 1-98 Collaborative Group, Thürlimann B, Keshaviah A, Coates AS, Mouridsen H, Mauriac L, Forbes JF, Paridaens R, Castiglione-Gertsch M, Gelber RD, Rabaglio M, Smith I, Wardley A, Price KN, Goldhirsch A", "journal": "N Engl J Med", "pmid": "16382061"},
    {"title": "The discovery and mechanism of action of letrozole.", "authors": "Bhatnagar AS", "journal": "Breast Cancer Res Treat", "pmid": "17912633"},
    {"title": "Longer-term outcomes of letrozole versus placebo after 5 years of tamoxifen in the NCIC CTG MA.17 trial: analyses adjusting for treatment crossover.", "authors": "Jin H, Tu D, Zhao N, Shepherd LE, Goss PE", "journal": "J Clin Oncol", "pmid": "22042967"},
    {"title": "Influence of letrozole and anastrozole on total body aromatization and plasma estrogen levels in postmenopausal breast cancer patients evaluated in a randomized, cross-over study.", "authors": "Geisler J, Haynes B, Anker G, Dowsett M, Lønning PE", "journal": "J Clin Oncol", "pmid": "11821457"}
  ],
  "faq": [
    {"q": "Letrozole vs. anastrozole – why stronger?", "a": "Two factors: (1) Higher penetration into intramuscular aromatase tissues – the Geisler 2002 head-to-head trial documented that letrozole's peripheral aromatase suppression is ~2-3× stronger than anastrozole's (in vivo measurement). (2) Greater enzyme-level binding stability (Ki ~5-10 nM vs. anastrozole ~15 nM). Practically: equivalent doses are anastrozole 1 mg ≈ letrozole 0.25-0.5 mg. AI-naive users should start letrozole at anastrozole-equivalent half-dose."},
    {"q": "Gynecomastia reversal protocol in detail?", "a": "Goal: existing gland tissue regression (NOT just E2 reduction). Protocol: letrozole 2.5 mg/day × 14-21 days (short hard hit), then taper 1.25 mg → 0.625 mg → 0.25 mg in 5-7 day steps. Adjunct: raloxifene 60 mg/day (breast-selective SERM, gyno gland antagonist) concurrently. Result: if gland tissue <6 months old → 60-80% regression; if >12 months → 20-40% regression (surgical gynectomy may be needed). Pre-treatment ultrasound is indicated – confirm gland-tissue presence (vs. fat-only pseudogynecomastia)."},
    {"q": "Crashed E2 mortality risk? Permanent?", "a": "Not mortality-level risk but significant quality-of-life degradation. Symptoms: joint pain (wrists + knees), libido crash, lipid disaster (HDL <30 mg/dL), depressive mood. Reversible 1-2 weeks after stopping. Without taper and <14 days → permanent effects extremely rare. Long-term use (3+ months chronic) causes BMD loss – DEXA monitor needed. Letrozole mortal risk: rare (FDA Femara label: cardiovascular events 5-7% in 5-year trial – but in 60+ y female population, not AAS-PCT males)."},
    {"q": "Tier 4 – why not tier 5?", "a": "Letrozole is slightly newer than anastrozole (1997 vs. 1995 FDA), with somewhat shorter clinical literature. Both are tier 4 – anastrozole is the default first-line AI (basis of tier 4), letrozole is the niche choice in hard-suppression or gyno-reversal situations. Tier 5 means Nolvadex-level 50+ years of maturity (letrozole is ~28 years, not yet enough)."}
  ],
  "related": ["anastrozol", "exemestane", "nolvadex", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.625, "high": 1.25},
    "unit": "mg / EOD (oral, bloodwork-titrated)",
    "note": "Standard AAS E2-control hard-suppression: 0.25-1.25 mg EOD bloodwork-titrated. Gyno reversal: 2.5 mg/day × 14-21 days, then taper protocol (1.25 → 0.625 → 0.25 → 0). Letrozole stronger than anastrozole – AI-naive users start at half-dose."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before letrozole start",
      "timing": "Cycle week 3-4 or gyno-symptom onset",
      "markers": "E2 LC-MS/MS sensitive assay (NOT ECL), Total/Free Testosterone, SHBG, lipid panel, ALT/AST, CBC, creatinine.",
      "purpose": "Baseline. Letrozole start indication: hard-suppression Tren+Mast stack or gyno reversal. AI-naive users start at half-dose."
    },
    "midCycle": {
      "label": "Letrozole day 10-14",
      "timing": "Letrozole start +10-14 days",
      "markers": "E2 LC-MS/MS (re-test), lipid panel, ALT/AST.",
      "purpose": "Titration confirm: E2 20-30 pg/mL target. Crashed E2 (<15 pg/mL) → pause immediately. Lipid panel monitor: noticeable HDL drop and LDL rise."
    },
    "postCycle": {
      "label": "Letrozole end / post-taper recovery",
      "timing": "Last dose +2 weeks",
      "markers": "E2, Total/Free Test, lipid panel, ALT/AST, BMD if chronic use.",
      "purpose": "Confirm: E2 returns to baseline (24-72 h, no rebound). Lipid panel recovery monitor (HDL rebound ~2-4 weeks)."
    },
    "cruise": {
      "label": "Long-term use – not AAS context",
      "timing": "Female adjuvant 5-10 years; AAS-PCT max 14-21 days gyno reversal",
      "markers": "Cruise N/A in AAS context.",
      "purpose": "In AAS-PCT cruise NOT recommended – letrozole is used for acute hard-hit indications, not long-term E2 control (BMD loss risk)."
    }
  }
}
