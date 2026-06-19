// Dutasteride (Avodart) — dual 5α-reduktáz gátló (type-I + type-II).
// FDA 2001 GSK BPH. AAS: ~90% scalp DHT + acne-csökkentés.
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
  "shortDesc": "Dual 5α-reduktáz gátló (type-I + type-II). FDA-jóváhagyott (2001 GSK) BPH-ra. AAS-ban: ~90% scalp DHT + acne-csökkentés. Long t1/2 ~5 hét — washout ~6 hónap. PFS-rizikó magasabb mint Finasteride-on.",
  "description": "A Dutasteride (Avodart) egy dual 5α-reduktáz inhibitor, amely a type-I + type-II izoformokat egyaránt gátolja, és így a Finasteride-nál szignifikánsan szélesebb DHT-szuppressziós spektrumot ad. A GSK fejlesztette ki, és 2001-ben kapott FDA-jóváhagyást benign prostatic hyperplasia (BPH) kezelésére (Avodart 0.5 mg). Az Olsen 2006 (PMID 16782546) randomized head-to-head trial dokumentálta, hogy a Dutasteride 0.5 mg/nap-on **~90% scalp DHT** + ~95% prostate DHT szuppressziót ér el — vs Finasteride 1 mg/nap ~70% scalp DHT. Ez a magasabb szuppresszió + Type-I (skin/sebum) gátlás bonusz **acne-improvement** szekunder hatást ad AAS-felhasználón (a Test-emelkedés acne-tendenciát csökkenti). Off-label AGA-használata széles körű (Korea+Japán: AGA-Rx; US/EU: off-label). Long-felezés ~5 hét → washout ~6 hónap (Finasteride 2 hét vs Dutasteride 6 hónap — szignifikáns sexual-decision-implication a fertility-tervezésnél). Tier-4 — second-line a Finasteride után, vagy első-vonalbeli ha acne-emphasis. PFS-rizikó magasabb mint Finasteride-on (Trost 2017 PMID 28267184).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Dual 5α-reduktáz gátló (type-I + type-II), ~90% scalp DHT szuppresszió 0.5 mg/nap"},
    {"label": "Adagolás (AAS hair-loss + acne)", "value": "0.5 mg/nap continuous vagy minden 2. nap (cost-saving)"},
    {"label": "Felezési idő", "value": "~5 hét (very long, steady-state ~6 hónap, washout ~6 hónap)"},
    {"label": "Hatáskezdet", "value": "DHT-csökkenés mérhető 1 hét, hair-stabilization 3-6 hónap"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx (BPH), HU + PL törzskönyvezett, off-label AGA US/EU, WADA allowed"}
  ],
  "mechanism": "Dutasteride 4-aza-szteroid struktúrájú compound, dual 5α-reduktáz inhibitor — mindkét izoformot (type-I + type-II) kompetitíven gátolja: Type-I 5AR Ki ~6 nM, Type-II 5AR Ki ~7 nM (vs Finasteride Type-I ~300 nM = ~50x kevésbé hatékony). A dual-blokád → magasabb össz-szervezeti DHT-szuppresszió (~95% prostate, ~90% scalp, ~80% skin/sebum). Az enzim-kötés még a Finasteride-nál is erősebb és lassabban reverzibilis — innen jön a long felezés (~5 hét) és a washout-idő (~6 hónap teljes elimináció). Ez a long-pharmakokinetika a fő különbség Finasteride-tól: missed-dose-tolerance magasabb (jól adagolható minden 2. napon), DE leállítás után 6 hónap is kell DHT teljes recovery-hez (vs Finasteride 2 hét). Hepatikus CYP3A4 metabolizmus minimális.",
  "legalStatus": "USA: FDA-jóváhagyott Avodart 2001 BPH (0.5 mg, GSK), Jalyn 2010 (Dutasteride 0.5 + Tamsulosin 0.4 BPH-kombináció). AGA-Rx US/EU off-label, Korea/Japán Rx AGA-ra. EU: EMA-jóváhagyott BPH. HU: törzskönyvezett (Avodart Rx). PL: törzskönyvezett. WADA: S5 hormone modulator — banned in competition (TUE possible), out-of-competition allowed.",
  "onsetTime": "DHT-csökkenés 1 hét, hair-stabilization 3-6 hónap",
  "halfLife": "~5 hét (very long)",
  "halfLifeActive": "~5 hét (parent compound aktív), washout ~6 hónap teljes elimináció",
  "interactionsWith": ["finasteride", "ru58841", "testosterone-info"],
  "aromatization": "Nem aromatizál — kompetitív dual-5AR inhibitor; DHT-konverziót gátolja (type-I + type-II egyaránt), aromatázra nincs hatás.",
  "hepatotoxicity": "Alacsony; szteroid-szerű struktúra DE NEM 17α-alkilált. Hepatic AE <2% (FDA Avodart label). PFS-szerű szindróma dutasteride-on is dokumentált (Trost 2017 PMID 28267184), gyakoribb mint finasteride-on a stronger + longer effect miatt.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS, dual-5AR inhibitor)",
  "bindingAffinity": "Type-I 5AR Ki ~6 nM, Type-II 5AR Ki ~7 nM. Finasteride ~50x kevésbé hatékony Type-I-en (Ki ~300 nM).",
  "detectionWindow": "WADA-listáról 2009-ben levéve (5AR-masking-agent) — allowed competition kontextus.",
  "benefits": [
    "AAS hair-loss-prevention erősebb mint Finasteride (~90% vs ~70% scalp DHT)",
    "Acne-csökkentés bonus (Type-I 5AR blokád → sebum-csökkentés)",
    "Long felezés → missed-dose-tolerance magas (minden 2. napon dose acceptable, cost-saving)",
    "FDA + EMA Rx pharma-grade BPH-indikáció",
    "Olcsó (~€20-50/box generic 0.5 mg)"
  ],
  "quickStart": [
    "Pre-treatment baseline bloodwork: total/free Test, DHT serum, E2, lipid panel + IIEF-5 + PHQ-9",
    "Indítás: 0.5 mg/nap (Avodart) reggel vagy este, étkezés indifferens",
    "Cost-saving alternatíva: 0.5 mg minden 2. napon (long-felezés miatt elfogadható)",
    "Standard ciklus-protokoll: continuous a teljes AAS-ciklus + recovery alatt",
    "Re-test bloodwork 6-8 hét után: DHT serum ~90%-os csökkenés + acne-improvement assessment",
    "Fertility-tervezés: Dutasteride utolsó dose +6 hónap teljes washout SZÜKSÉGES gyermek-tervezés előtt"
  ],
  "expectations": [
    {"label": "1-2. hét", "body": "DHT serum csökkenés mérhető (~70-85%). Acne-improvement érzékelhető (skin-sebum-csökkenés)."},
    {"label": "1-3. hónap", "body": "Hair-shedding stabilizálódik. Steady-state plateau (steady-state ~6 hónap után). Vertex regrowth observable."},
    {"label": "3-6. hónap", "body": "Maximum effect plateau scalp DHT ~90% szuppresszió, hair-loss-progression sustained-prevention. Choi 2014 (PMID 24820896): Dutasteride vs Finasteride 6-hónapos trial-en ~21% nagyobb hair-count improvement."},
    {"label": "Leállítás után", "body": "DHT FOKOZATOSAN visszatér 3-6 hónap alatt (long felezés). Hair-loss-acceleráció lassabban tér vissza mint Finasteride leállítás után — DE long-term cycle-tervezés óvatosság (fertility-decision, sexual-side-effect-monitoring)."}
  ],
  "quality": {
    "pure": [
      "GSK Avodart 0.5 mg blister, Rx pharma-grade (US + EU)",
      "GSK Jalyn (Dutasteride 0.5 + Tamsulosin 0.4 BPH-kombináció)",
      "Generic dutasteride 0.5 mg (Sandoz, Teva, Ratiopharm — EU)",
      "Indiai generikum (Dr Reddy's Dutas, Cipla Veltride 0.5 mg)",
      "UGL liquid dutasteride: ritkán, pharma-grade Rx alternative ajánlott"
    ],
    "caution": [
      "Long washout-time (~6 hónap) → fertility-decision implications: gyermek-tervezés esetén 6 hónappal előbb leállítás KÖTELEZŐ",
      "PFS-rizikó magasabb mint Finasteride-on (Trost 2017): chronic-side-effect erőteljesebb és tartósabb",
      "Sexual side-effects ~5-10% (vs Finasteride ~3-8%): libidó-csökkenés, ED, ejakuláció-volume-csökkenés",
      "Hangulati változás: depresszió-rizikó dokumentált (Trost 2017)",
      "Long-term BMD impact (lágy bizonyíték): csontsűrűség-monitor évente long-term userön",
      "PSA-szint: Dutasteride a PSA-szintet ~50%-kal csökkenti (mint Finasteride), prostate-cancer-screen-interpretation differential"
    ],
    "avoid": [
      "Pregnant partner / breastfeeding (Pregnancy Category X — magzati férfi-fejlődés-zavar)",
      "Depresszió-history (mood-dysfunction-rizikó)",
      "Gyermek-tervezés-tervezés-akadály-mentesítés (6 hónap pre-pregnancy washout szükséges)",
      "Adolescent felhasználó (<18 év)",
      "Tren-only / Anadrol-only stack (NEM 5AR-szubsztrát-mechanismus)",
      "Liquid Dutasteride UGL forrás bizonytalan koncentrációval"
    ]
  },
  "interactions": [
    "Finasteride: NEM kombinálható (overlap-mechanism, additive-side-effect)",
    "Testosterone-base AAS-ciklusok: standard hair-loss-prevention + acne-control",
    "Trenbolone/Anadrol stack: Dutasteride NEM hat (NEM 5AR-szubsztrát)",
    "Saw palmetto / Tea-tree-oil: kombinálható mild-synergia",
    "PDE5-inhibitorok: ED-management Dutasteride-sexual-side-effect-en első-vonalbeli adjuváns",
    "Alkohol: hepatikus stressz mild, mértékletes OK"
  ],
  "studies": [
    {"title": "Long-term efficacy and safety of dutasteride 0.5 mg in Korean men with androgenetic alopecia: 5-year data demonstrating sustained effects.", "authors": "Choi S, Kwon SH, Sim WY", "journal": "J Dermatol", "pmid": "38321615"},
    {"title": "Evaluation of the therapeutic effects of AGA drugs by measuring finasteride, dutasteride, and dihydrotestosterone in hair.", "authors": "Hobo Y, Nishikawa J, Taniguchi Asai N", "journal": "Clin Chim Acta", "pmid": "37385468"},
    {"title": "Post-Finasteride Syndrome: Survey of Dermatologists From the Spanish Hair and Nail Disorders Group.", "authors": "Moreno-Arrones OM, Saceda-Corralo D, Gómez-Cano JL", "journal": "Actas Dermosifiliogr", "pmid": "41865985"},
    {"title": "Updates in Treatment for Androgenetic Alopecia.", "authors": "Shin JW, Huh CH", "journal": "Ann Dermatol", "pmid": "41331712"}
  ],
  "faq": [
    {"q": "Finasteride vs Dutasteride — mikor melyik?", "a": "Default első-vonalbeli: **FINASTERIDE** 1 mg/nap (kisebb side-effect, shorter washout, klinikai standard AGA-protokoll). Dutasteride **second-line** vagy **első-vonalbeli niche-szituációban**: (1) Finasteride inadequate response (3-6 hónap után <30% improvement, vagy continued progression); (2) Acne-emphasis (Type-I 5AR-blokád miatt sebum-csökkentés bonus); (3) Aggresszív AAS-stack (Test + Tren + Anadrol high-dose, ahol a maximum DHT-szuppresszió cél). Long-washout (~6 hónap vs Finasteride 2 hét) miatt **NEM** ajánlott rövid-távú vagy fertility-emphasizing felhasználón. PFS-rizikó magasabb (Trost 2017) — risk-averse user inkább Finasteride."},
    {"q": "Long washout-time (~6 hónap) — gond?", "a": "**Igen, szignifikáns sexual-decision-implication**. A Dutasteride felezési ideje ~5 hét → steady-state ~6 hónap, ÉS leállítás után ~6 hónap kell a teljes elimináció-szintű DHT-baseline-recoveryhez. Probléma: (1) Sexual-side-effect Finasteride-en 2 hét recovery, Dutasteride-on 3-6 hónap; (2) Fertility-decision: ha gyermek-tervezés cél, 6 hónappal pre-pregnancy leállítás szükséges (sperma-DHT-szubsztrát fertility-impact dokumentált); (3) Side-effect emergence months later harder to attribute. Long-term-decision-implication: a fertility-tervező felhasználón NEM Dutasteride első-vonalbeli, hanem Finasteride (shorter washout, könnyebben átszervezni)."},
    {"q": "PFS-rizikó magasabb?", "a": "Trost 2017 (PMID 28267184) systematic review-ban a Dutasteride-PFS-incidencia ~2-3% (vs Finasteride ~1-2%), és a side-effect erőteljesebb + tartósabb mint a Finasteride-PFS. Mechanizmus: dual-blokád (type-I + type-II) → szélesebb neurosteroid-pathway-disrupció — type-I 5AR a brain-szteroid-szintézisben is fontosabb, így a brain-szintű-changes nagyobb amplitudóval. Lower-doses safer: 0.5 mg minden 2. nap (cost-saving + alacsony-side-effect alternative) racionális risk-reduction. Risk-mitigation: pre-treatment depresszió-history-screen, IIEF-5 + PHQ-9 baseline, monthly self-monitor; symptom-onset → AZONNALI leállítás (DE long-washout miatt symptom-relief lassabb)."},
    {"q": "Topical dutasteride emerging?", "a": "Igen, emerging-trend dermatology-compounding pharmacies. Topical Dutasteride 0.1-0.5% solution daily applied scalp — scalp DHT-suppression hasonlóan az 0.5 mg orális-hez, DE ~10-20% systemic absorption (vs 100% orális) → drasztikusan alacsonyabb sysztemikus side-effect-rizikó (PFS-prone-felhasználón előny). Compounded only (NINCS FDA-jóváhagyás), drágább (~€150-300/hónap UGL/compounding). Modern AGA-clinics ajánlása PFS-risk-averse user-nek: topical Dutasteride > orális Finasteride > orális Dutasteride. AAS-kontextusban worth exploring (long-term cycle + side-effect-minimization cél)."}
  ],
  "related": ["finasteride", "ru58841", "testosterone-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.25, "medium": 0.5, "high": 0.5},
    "unit": "mg / nap vagy minden 2. nap (orális, étkezés indifferens)",
    "note": "Standard AAS hair-loss + acne: 0.5 mg/nap continuous. Cost-saving alternative: 0.5 mg minden 2. nap (long-felezés miatt elfogadható). Topical 0.1-0.5% solution alternative (compounded, alacsonyabb side-effect). Fertility-tervezés: 6 hónappal pre-pregnancy leállítás KÖTELEZŐ."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Dutasteride-indítás előtt",
      "timing": "AAS-ciklus indítás vagy Finasteride-inadequate response onset",
      "markers": "Total Testosterone, Free Testosterone, DHT serum (baseline confirm efficacy-target), E2, SHBG, lipid panel, ALT/AST, PHQ-9 baseline, IIEF-5 erectile-quality baseline, sperma-analysis ha fertility-emphasis.",
      "purpose": "Baseline + PFS-rizikó-stratification. Pre-treatment Norwood-scale photo + monthly photos hair-progression tracking. Fertility-tervezés-history kérdezni KÖTELEZŐ (long-washout-implication)."
    },
    "midCycle": {
      "label": "Dutasteride 6-8. hét",
      "timing": "Dutasteride-indítás +6-8 hét",
      "markers": "DHT serum (~90% csökkenés confirm), Total Test (emelkedés várt), E2 (szekunder rise), IIEF-5 re-score, PHQ-9, acne-improvement self-rating.",
      "purpose": "Efficacy + side-effect monitor. Ha sexual/mood-side effect → dose-csökkentés (0.5 mg minden 2. nap) vagy leállítás (de long-washout miatt symptom-recovery hetekig)."
    },
    "postCycle": {
      "label": "Dutasteride leállítás",
      "timing": "Utolsó dose +3-6 hónap (long-washout miatt EXTENDED monitor)",
      "markers": "DHT serum (gradient-recovery), Total Test, E2, IIEF-5, PHQ-9.",
      "purpose": "Confirm: DHT FOKOZATOSAN visszatér 3-6 hónap alatt (NEM 2 hét mint Finasteride). Sexual + mood-side-effect recovery extended; ha persistent >6 hónap → PFS-screen."
    },
    "cruise": {
      "label": "Chronic AAS-cruise + Dutasteride continuous",
      "timing": "0.5 mg/nap continuous vagy minden 2. nap",
      "markers": "Évente: DHT, Test, lipid panel, IIEF-5, PHQ-9, BMD (DEXA scan), PSA-screen (Dutasteride PSA-szintet 50%-kal csökkenti).",
      "purpose": "Chronic AAS-cruise hair-loss-prevention monitor + PFS-rizikó-monitor + BMD long-term tracking."
    }
  }
}
