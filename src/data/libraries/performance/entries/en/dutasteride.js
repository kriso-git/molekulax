// Dutasteride (Avodart) – dual 5α-reductase inhibitor (type-I + type-II).
// FDA 2001 GSK BPH. AAS: ~90% scalp DHT + acne reduction.
// Sources: FDA Avodart SmPC, Olsen 2006 PMID 16782546,
// Choi 2014 PMID 24820896, Trost 2017 PFS PMID 28267184.

export default {
  "id": "dutasteride",
  "sideEffects": [
    { "hu": "Szexuális mellékhatások: libidócsökkenés, erektilis diszfunkció, ejakulátum-volumen csökkenése, és ritkábban orgazmus-zavar (gyakoribb és tartósabb, mint finasteride mellett).", "en": "Sexual side effects: reduced libido, erectile dysfunction, decreased ejaculate volume, and less commonly orgasmic dysfunction (more frequent and more persistent than with finasteride).", "pl": "Działania seksualne: spadek libido, zaburzenia erekcji, zmniejszona objętość ejakulatu i rzadziej zaburzenia orgazmu (częstsze i bardziej uporczywe niż przy finasterydzie)." },
    { "hu": "Tartós poszt-5AR-gátló szindróma (PFS-szerű): leállítás után is fennmaradó szexuális, neurológiai és hangulati tünetek; a hosszú felezési idő miatt a tünetek lassabban oldódnak, mint finasteride mellett.", "en": "Persistent post-5AR-inhibitor syndrome (PFS-like): sexual, neurological and mood symptoms that may persist after discontinuation; symptoms resolve more slowly than with finasteride due to the long half-life.", "pl": "Uporczywy zespół po inhibitorze 5AR (typu PFS): objawy seksualne, neurologiczne i nastroju utrzymujące się po odstawieniu; ze względu na długi okres półtrwania ustępują wolniej niż przy finasterydzie." },
    { "hu": "Hangulati zavarok: depresszió, szorongás és ritkán öngyilkossági gondolatok; depresszió-anamnézis fokozott kockázat (Trost 2017 dokumentált).", "en": "Mood disturbances: depression, anxiety and rarely suicidal ideation; history of depression increases the risk (documented by Trost 2017).", "pl": "Zaburzenia nastroju: depresja, lęk i rzadko myśli samobójcze; wywiad depresyjny zwiększa ryzyko (udokumentowane przez Trost 2017)." },
    { "hu": "Gynecomastia és emlőérzékenység: a DHT/ösztrogén-arány eltolódása miatt emlőduzzanat, érzékenység jelentkezhet (ritka, az FDA-jelölésen szereplő mellékhatás).", "en": "Gynecomastia and breast tenderness: breast swelling or tenderness due to the shifted DHT/estrogen ratio (uncommon, listed in the FDA label).", "pl": "Ginekomastia i tkliwość piersi: obrzęk lub tkliwość piersi z powodu zmienionego stosunku DHT/estrogen (rzadkie, wymienione na etykiecie FDA)." },
    { "hu": "Csökkent spermaszám, motilitás és ejakulátum-volumen, átmeneti fertilitásromlással; a ~6 hónapos washout miatt a gyermekvállalás tervezésekor időben le kell állítani.", "en": "Reduced sperm count, motility and ejaculate volume with transient impaired fertility; due to the ~6-month washout, it must be stopped well ahead of planning conception.", "pl": "Zmniejszona liczba i ruchliwość plemników oraz objętość ejakulatu z przejściową obniżoną płodnością; z powodu ~6-miesięcznego wymywania trzeba odstawić z wyprzedzeniem przy planowaniu poczęcia." },
    { "hu": "A PSA-szérumszintet kb. 50%-kal csökkenti, ami elfedheti a prosztatarák szűrési jelét; a PSA-eredményt 5AR-gátló mellett duplázva kell értelmezni.", "en": "Lowers serum PSA by roughly 50%, which can mask a prostate cancer screening signal; PSA results on a 5AR inhibitor must be interpreted as doubled.", "pl": "Obniża stężenie PSA w surowicy o około 50%, co może maskować sygnał przesiewowy raka prostaty; wynik PSA przy inhibitorze 5AR należy interpretować jako podwojony." },
    { "hu": "Allergiás reakciók: bőrkiütés, viszketés, csalánkiütés, lokalizált ödéma és ritkán angioödéma jelentkezhet.", "en": "Allergic reactions: rash, pruritus, urticaria, localized edema and rarely angioedema may occur.", "pl": "Reakcje alergiczne: wysypka, świąd, pokrzywka, miejscowy obrzęk i rzadko obrzęk naczynioruchowy." }
  ],
  "contraindications": [
    { "hu": "Terhes vagy potenciálisan teherbe eshető nő nem érintheti a szivárgó/tört kapszulát és nem szedheti (Terhességi X kategória): a DHT-gátlás zavarja a férfi magzat nemi fejlődését.", "en": "Pregnant or potentially pregnant women must not handle leaking/broken capsules or take it (Pregnancy Category X): DHT suppression disrupts male fetal genital development.", "pl": "Kobiety w ciąży lub mogące zajść w ciążę nie mogą dotykać przeciekających/uszkodzonych kapsułek ani przyjmować leku (kategoria X): hamowanie DHT zaburza rozwój narządów płciowych płodu męskiego." },
    { "hu": "Aktív gyermekvállalási terv: a ~6 hónapos washout miatt fogamzás előtt jóval le kell állítani; a szer kiválasztódik a spermába.", "en": "Active plans to conceive: due to the ~6-month washout it must be stopped well before conception; the drug is excreted into semen.", "pl": "Aktywne plany poczęcia: ze względu na ~6-miesięczne wymywanie trzeba odstawić długo przed poczęciem; lek przenika do nasienia." },
    { "hu": "Dutasteride vagy más 5α-reduktáz-gátló iránti túlérzékenység.", "en": "Hypersensitivity to dutasteride or other 5-alpha-reductase inhibitors.", "pl": "Nadwrażliwość na dutasteryd lub inne inhibitory 5-alfa-reduktazy." },
    { "hu": "18 év alatti életkor és nők (különösen fogamzóképes korúak): nem javallt felhasználói csoport.", "en": "Age under 18 and women (especially those of childbearing potential): not an indicated population.", "pl": "Wiek poniżej 18 lat oraz kobiety (zwłaszcza w wieku rozrodczym): grupa niezalecana." },
    { "hu": "Aktív depresszió vagy öngyilkossági kockázat, illetve PFS-szerű tünetek anamnézise: a hangulati és tartós mellékhatások kockázata fokozott.", "en": "Active depression or suicide risk, or a history of PFS-like symptoms: increased risk of mood and persistent side effects.", "pl": "Czynna depresja lub ryzyko samobójcze albo wywiad objawów typu PFS: zwiększone ryzyko działań na nastrój i uporczywych." },
    { "hu": "Súlyos májkárosodás: a metabolizmus túlnyomórészt hepatikus, óvatosság szükséges (a vesén keresztüli kiválasztás minimális).", "en": "Severe hepatic impairment: metabolism is predominantly hepatic, caution is required (renal excretion is minimal).", "pl": "Ciężkie zaburzenia czynności wątroby: metabolizm jest głównie wątrobowy, wymagana ostrożność (wydalanie nerkowe jest minimalne)." },
    { "hu": "Vér- és véradás-tilalom: a kezelés alatt és az utolsó dózist követő legalább 6 hónapig nem szabad vért adni a terhes recipiens veszélye miatt.", "en": "Blood donation prohibition: must not donate blood during treatment and for at least 6 months after the last dose, to avoid exposure of a pregnant recipient.", "pl": "Zakaz oddawania krwi: nie wolno oddawać krwi podczas leczenia i przez co najmniej 6 miesięcy po ostatniej dawce, aby uniknąć narażenia ciężarnej biorczyni." }
  ],
  "name": "Dutasteride (Avodart)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Dual 5α-reductase inhibitor (type-I + type-II). FDA-approved (2001 GSK) for BPH. In AAS: ~90% scalp DHT + acne reduction. Long t1/2 ~5 weeks – washout ~6 months. Higher PFS risk vs finasteride.",
  "description": "Dutasteride (Avodart) is a dual 5α-reductase inhibitor that blocks both the type-I and type-II isoforms, giving a significantly broader DHT suppression spectrum than finasteride. Developed by GSK and FDA-approved in 2001 for benign prostatic hyperplasia (BPH) (Avodart 0.5 mg). The Olsen 2006 (PMID 16782546) randomized head-to-head trial documented that dutasteride at 0.5 mg/day achieves **~90% scalp DHT** + ~95% prostate DHT suppression – vs finasteride 1 mg/day ~70% scalp DHT. This higher suppression + type-I (skin/sebum) inhibition provides a bonus **acne improvement** secondary effect in AAS users (reducing acne tendency from testosterone elevation). Off-label AGA use is widespread (Korea + Japan: AGA Rx; US/EU: off-label). Long half-life ~5 weeks → washout ~6 months (finasteride 2 weeks vs dutasteride 6 months – significant sexual/decision implication in fertility planning). Tier 4 – second-line after finasteride, or first-line if acne emphasis. Higher PFS risk than finasteride (Trost 2017 PMID 28267184).",
  "keyInfo": [
    {"label": "Mechanism", "value": "Dual 5α-reductase inhibitor (type-I + type-II), ~90% scalp DHT suppression at 0.5 mg/day"},
    {"label": "Dosing (AAS hair-loss + acne)", "value": "0.5 mg/day continuous or every other day (cost-saving)"},
    {"label": "Half-life", "value": "~5 weeks (very long, steady-state ~6 months, washout ~6 months)"},
    {"label": "Onset", "value": "DHT reduction measurable 1 week, hair stabilization 3-6 months"},
    {"label": "Legal status", "value": "FDA + EMA Rx (BPH), HU + PL approved, off-label AGA US/EU, WADA allowed"}
  ],
  "mechanism": "Dutasteride is a 4-aza-steroid compound and dual 5α-reductase inhibitor – competitively blocking both isoforms (type-I + type-II): Type-I 5AR Ki ~6 nM, Type-II 5AR Ki ~7 nM (vs finasteride Type-I ~300 nM = ~50× less potent). The dual blockade → higher whole-body DHT suppression (~95% prostate, ~90% scalp, ~80% skin/sebum). The enzyme binding is even stronger and slower-reversible than finasteride – hence the long half-life (~5 weeks) and washout time (~6 months full elimination). This long pharmacokinetic is the main difference from finasteride: missed-dose tolerance is higher (every-other-day dosing acceptable), BUT after cessation 6 months are needed for full DHT recovery (vs finasteride 2 weeks). Hepatic CYP3A4 metabolism minimal.",
  "legalStatus": "USA: FDA-approved Avodart 2001 BPH (0.5 mg, GSK), Jalyn 2010 (dutasteride 0.5 + tamsulosin 0.4 BPH combo). AGA-Rx US/EU off-label, Korea/Japan Rx for AGA. EU: EMA-approved BPH. HU: registered (Avodart Rx). PL: registered. WADA: S5 hormone modulator – banned in competition (TUE possible), out-of-competition allowed.",
  "onsetTime": "DHT reduction 1 week, hair stabilization 3-6 months",
  "halfLife": "~5 weeks (very long)",
  "halfLifeActive": "~5 weeks (parent compound active), washout ~6 months full elimination",
  "interactionsWith": ["finasteride", "ru58841", "testosterone-info"],
  "aromatization": "Does not aromatize – competitive dual 5AR inhibitor; blocks DHT conversion (type-I + type-II), no effect on aromatase.",
  "hepatotoxicity": "Low; steroid-like structure BUT NOT 17α-alkylated. Hepatic AE <2% (FDA Avodart label). PFS-like syndrome documented on dutasteride too (Trost 2017 PMID 28267184), more frequent than on finasteride due to stronger + longer effect.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not AAS, dual-5AR inhibitor)",
  "bindingAffinity": "Type-I 5AR Ki ~6 nM, Type-II 5AR Ki ~7 nM. Finasteride ~50× less potent on Type-I (Ki ~300 nM).",
  "detectionWindow": "Removed from WADA list 2009 (5AR masking agent) – competition-context allowed.",
  "benefits": [
    "AAS hair-loss prevention stronger than finasteride (~90% vs ~70% scalp DHT)",
    "Acne reduction bonus (Type-I 5AR blockade → sebum reduction)",
    "Long half-life → high missed-dose tolerance (every-other-day dosing acceptable, cost-saving)",
    "FDA + EMA Rx pharma-grade BPH indication",
    "Inexpensive (~€20-50/box generic 0.5 mg)"
  ],
  "quickStart": [
    "Pre-treatment baseline bloodwork: total/free Test, DHT serum, E2, lipid panel + IIEF-5 + PHQ-9",
    "Start: 0.5 mg/day (Avodart) morning or evening, food indifferent",
    "Cost-saving alternative: 0.5 mg every 2 days (acceptable due to long half-life)",
    "Standard cycle protocol: continuous throughout entire AAS cycle + recovery",
    "Re-test bloodwork 6-8 weeks later: confirm ~90% DHT serum reduction + acne improvement assessment",
    "Fertility planning: dutasteride last dose +6 months full washout MANDATORY before conception planning"
  ],
  "expectations": [
    {"label": "Weeks 1-2", "body": "DHT serum reduction measurable (~70-85%). Acne improvement perceptible (skin-sebum reduction)."},
    {"label": "Months 1-3", "body": "Hair shedding stabilizes. Steady-state plateau (steady-state after ~6 months). Vertex regrowth observable."},
    {"label": "Months 3-6", "body": "Maximum effect plateau ~90% scalp DHT suppression, sustained hair-loss-progression prevention. Choi 2014 (PMID 24820896): dutasteride vs finasteride 6-month trial showed ~21% greater hair-count improvement."},
    {"label": "After cessation", "body": "DHT GRADUALLY returns over 3-6 months (long half-life). Hair-loss acceleration returns more slowly than after finasteride cessation – BUT long-term cycle planning needs caution (fertility decision, sexual side effect monitoring)."}
  ],
  "quality": {
    "pure": [
      "GSK Avodart 0.5 mg blister, Rx pharma-grade (US + EU)",
      "GSK Jalyn (dutasteride 0.5 + tamsulosin 0.4 BPH combo)",
      "Generic dutasteride 0.5 mg (Sandoz, Teva, Ratiopharm – EU)",
      "Indian generic (Dr Reddy's Dutas, Cipla Veltride 0.5 mg)",
      "UGL liquid dutasteride: rare, pharma-grade Rx alternative recommended"
    ],
    "caution": [
      "Long washout time (~6 months) → fertility decision implications: 6 months before conception planning MANDATORY cessation",
      "Higher PFS risk than finasteride (Trost 2017): chronic side effects stronger and more persistent",
      "Sexual side effects ~5-10% (vs finasteride ~3-8%): libido drop, ED, reduced ejaculate volume",
      "Mood change: depression risk documented (Trost 2017)",
      "Long-term BMD impact (soft evidence): annual bone density monitor for long-term users",
      "PSA level: dutasteride reduces PSA by ~50% (like finasteride), prostate cancer screening interpretation differential"
    ],
    "avoid": [
      "Pregnant partner / breastfeeding (Pregnancy Category X – fetal male development disturbance)",
      "Depression history (mood-dysfunction risk)",
      "Pre-conception planning (6 months pre-pregnancy washout required)",
      "Adolescent users (<18 years)",
      "Tren-only / Anadrol-only stack (not a 5AR substrate mechanism)",
      "Liquid dutasteride UGL source with uncertain concentration"
    ]
  },
  "interactions": [
    "Finasteride: cannot be combined (overlapping mechanism, additive side effects)",
    "Testosterone-base AAS cycles: standard hair-loss prevention + acne control",
    "Trenbolone/Anadrol stack: dutasteride does NOT work (not a 5AR substrate)",
    "Saw palmetto / tea tree oil: combinable for mild synergy",
    "PDE5 inhibitors: first-line adjunct for dutasteride sexual side effects",
    "Alcohol: mild hepatic stress, moderate OK"
  ],
  "studies": [
    {"title": "Long-term efficacy and safety of dutasteride 0.5 mg in Korean men with androgenetic alopecia: 5-year data demonstrating sustained effects.", "authors": "Choi S, Kwon SH, Sim WY", "journal": "J Dermatol", "pmid": "38321615"},
    {"title": "Evaluation of the therapeutic effects of AGA drugs by measuring finasteride, dutasteride, and dihydrotestosterone in hair.", "authors": "Hobo Y, Nishikawa J, Taniguchi Asai N", "journal": "Clin Chim Acta", "pmid": "37385468"},
    {"title": "Post-Finasteride Syndrome: Survey of Dermatologists From the Spanish Hair and Nail Disorders Group.", "authors": "Moreno-Arrones OM, Saceda-Corralo D, Gómez-Cano JL", "journal": "Actas Dermosifiliogr", "pmid": "41865985"},
    {"title": "Updates in Treatment for Androgenetic Alopecia.", "authors": "Shin JW, Huh CH", "journal": "Ann Dermatol", "pmid": "41331712"}
  ],
  "faq": [
    {"q": "Finasteride vs dutasteride – when which?", "a": "Default first-line: **FINASTERIDE** 1 mg/day (smaller side effects, shorter washout, clinical standard AGA protocol). Dutasteride is **second-line** or **first-line in niche situations**: (1) Inadequate finasteride response (<30% improvement after 3-6 months, or continued progression); (2) Acne emphasis (Type-I 5AR blockade for sebum reduction bonus); (3) Aggressive AAS stack (Test + Tren + Anadrol high-dose, where maximum DHT suppression is the goal). Due to long washout (~6 months vs finasteride 2 weeks), **NOT** recommended in short-term or fertility-emphasizing users. PFS risk is higher (Trost 2017) – risk-averse users prefer finasteride."},
    {"q": "Long washout time (~6 months) – issue?", "a": "**Yes, a significant sexual/decision implication**. Dutasteride's half-life is ~5 weeks → steady-state ~6 months, AND after cessation ~6 months are needed for complete elimination-level DHT baseline recovery. Issues: (1) Sexual side effect recovery is 2 weeks on finasteride vs 3-6 months on dutasteride; (2) Fertility decision: if conception planning, cessation 6 months pre-pregnancy is required (sperm-DHT substrate fertility impact documented); (3) Side effects emerging months later are harder to attribute. Long-term decision implication: fertility-planning user should NOT take dutasteride first-line, but finasteride (shorter washout, easier to reorganize)."},
    {"q": "Is PFS risk higher?", "a": "Trost 2017 systematic review (PMID 28267184) found dutasteride PFS incidence ~2-3% (vs finasteride ~1-2%), and side effects are stronger + more persistent than finasteride PFS. Mechanism: dual blockade (type-I + type-II) → broader neurosteroid pathway disruption – type-I 5AR is more important in brain steroid synthesis, so brain-level changes have greater amplitude. Lower doses are safer: 0.5 mg every 2 days (cost-saving + low-side-effect alternative) is a rational risk reduction. Risk mitigation: pre-treatment depression history screen, baseline IIEF-5 + PHQ-9, monthly self-monitor; symptom onset → IMMEDIATE cessation (BUT due to long washout, symptom relief is slower)."},
    {"q": "Topical dutasteride emerging?", "a": "Yes, emerging trend in dermatology compounding pharmacies. Topical dutasteride 0.1-0.5% solution daily applied to scalp – scalp DHT suppression similar to 0.5 mg oral, but ~10-20% systemic absorption (vs 100% oral) → drastically lower systemic side effect risk (advantage in PFS-prone users). Compounded only (NO FDA approval), more expensive (~€150-300/month UGL/compounding). Modern AGA clinics recommend for PFS-risk-averse user: topical dutasteride > oral finasteride > oral dutasteride. In AAS context worth exploring (long-term cycle + side-effect minimization goal)."}
  ],
  "related": ["finasteride", "ru58841", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.5, "high": 0.5},
    "unit": "mg / day or every 2 days (oral, food indifferent)",
    "note": "Standard AAS hair-loss + acne: 0.5 mg/day continuous. Cost-saving alternative: 0.5 mg every 2 days (acceptable due to long half-life). Topical 0.1-0.5% solution alternative (compounded, lower side effects). Fertility planning: cessation 6 months pre-pregnancy MANDATORY."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before dutasteride start",
      "timing": "AAS cycle start or finasteride-inadequate-response onset",
      "markers": "Total Testosterone, Free Testosterone, DHT serum (baseline confirm efficacy target), E2, SHBG, lipid panel, ALT/AST, PHQ-9 baseline, IIEF-5 erectile quality baseline, semen analysis if fertility emphasis.",
      "purpose": "Baseline + PFS risk stratification. Pre-treatment Norwood-scale photo + monthly photos hair progression tracking. Fertility planning history MUST be discussed (long-washout implication)."
    },
    "midCycle": {
      "label": "Dutasteride weeks 6-8",
      "timing": "Dutasteride start +6-8 weeks",
      "markers": "DHT serum (confirm ~90% reduction), Total Test (rise expected), E2 (secondary rise), IIEF-5 re-score, PHQ-9, acne improvement self-rating.",
      "purpose": "Efficacy + side effect monitor. If sexual/mood side effect → dose reduction (0.5 mg every 2 days) or cessation (but due to long washout, symptom recovery takes weeks)."
    },
    "postCycle": {
      "label": "Dutasteride cessation",
      "timing": "Last dose +3-6 months (EXTENDED monitor due to long washout)",
      "markers": "DHT serum (gradient recovery), Total Test, E2, IIEF-5, PHQ-9.",
      "purpose": "Confirm: DHT returns GRADUALLY over 3-6 months (NOT 2 weeks like finasteride). Sexual + mood side effect recovery extended; if persistent >6 months → PFS screen."
    },
    "cruise": {
      "label": "Chronic AAS cruise + dutasteride continuous",
      "timing": "0.5 mg/day continuous or every 2 days",
      "markers": "Annually: DHT, Test, lipid panel, IIEF-5, PHQ-9, BMD (DEXA scan), PSA screen (dutasteride lowers PSA by 50%).",
      "purpose": "Chronic AAS cruise hair-loss prevention monitor + PFS risk monitor + long-term BMD tracking."
    }
  }
}
