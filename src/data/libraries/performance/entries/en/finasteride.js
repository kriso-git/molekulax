// Finasteride (Propecia / Proscar) — selective type-II 5α-reductase inhibitor.
// FDA Proscar 1992 BPH, Propecia 1997 AGA. AAS hair-loss prevention.
// Sources: FDA Propecia/Proscar SmPC, Kaufman 1998 PMID 9821414,
// Irwig 2012 PFS PMID 22366892, Mella 2010 PMID 20842055.

export default {
  "id": "finasteride",
  "sideEffects": [
    { "hu": "Szexuális diszfunkció: libidócsökkenés, erektilis diszfunkció, ejakulátum-volumen csökkenése (kb. 2–8%, dózisfüggő, leggyakoribb mellékhatás).", "en": "Sexual dysfunction: reduced libido, erectile dysfunction, decreased ejaculate volume (about 2–8%, dose-dependent, most common adverse effect).", "pl": "Dysfunkcja seksualna: spadek libido, zaburzenia erekcji, zmniejszona objętość ejakulatu (około 2–8%, zależne od dawki, najczęstsze działanie niepożądane)." },
    { "hu": "Post-finasteride szindróma (PFS): a leállítás után is perzisztáló szexuális, hangulati és kognitív tünetek (kb. 1–2%, neuroszteroid-mediált, kontroverziális, de növekvő evidencia).", "en": "Post-finasteride syndrome (PFS): sexual, mood and cognitive symptoms persisting even after discontinuation (about 1–2%, neurosteroid-mediated, controversial but growing evidence).", "pl": "Zespół po finasterydzie (PFS): objawy seksualne, nastroju i poznawcze utrzymujące się nawet po odstawieniu (około 1–2%, mediowane neurosteroidami, kontrowersyjne, ale rosnące dowody)." },
    { "hu": "Hangulati zavar: depresszió, szorongás, anhedónia, ritkán öngyilkossági gondolatok (FDA label-figyelmeztetés).", "en": "Mood disturbance: depression, anxiety, anhedonia, rarely suicidal ideation (FDA label warning).", "pl": "Zaburzenia nastroju: depresja, lęk, anhedonia, rzadko myśli samobójcze (ostrzeżenie na etykiecie FDA)." },
    { "hu": "Gynecomastia és emlőfeszülés: a DHT-blokád miatti tesztoszteron→ösztrogén-shift következtében (ritka, de dokumentált; minden új emlőcsomó kivizsgálandó az emlőrák kizárására).", "en": "Gynecomastia and breast tenderness: due to the testosterone→estrogen shift from DHT blockade (rare but documented; any new breast lump must be evaluated to rule out breast cancer).", "pl": "Ginekomastia i tkliwość piersi: w wyniku przesunięcia testosteron→estrogen przy blokadzie DHT (rzadkie, ale udokumentowane; każdy nowy guzek piersi wymaga oceny w celu wykluczenia raka piersi)." },
    { "hu": "PSA-szint kb. 50%-os csökkentése: elfedheti a prosztatarák szűrését, a PSA-érték klinikai értelmezése korrekciót igényel.", "en": "Roughly 50% reduction in PSA level: can mask prostate cancer screening, the PSA value requires correction in clinical interpretation.", "pl": "Obniżenie poziomu PSA o około 50%: może maskować badania przesiewowe raka prostaty, wartość PSA wymaga korekty w interpretacji klinicznej." },
    { "hu": "Kezdeti shedding (telogen-effluvium): a terápia első 4–8 hetében paradox átmeneti fokozott hajhullás jelentkezhet.", "en": "Initial shedding (telogen effluvium): a paradoxical transient increase in hair loss may occur in the first 4–8 weeks of therapy.", "pl": "Początkowe wypadanie (telogen effluvium): paradoksalne przejściowe nasilenie wypadania włosów może wystąpić w pierwszych 4–8 tygodniach terapii." },
    { "hu": "Ritka cholestasis / májenzim-emelkedés és túlérzékenységi reakciók (kiütés, viszketés, angioödéma) izolált esetekben jelentve.", "en": "Rare cholestasis / liver enzyme elevation and hypersensitivity reactions (rash, pruritus, angioedema) reported in isolated cases.", "pl": "Rzadka cholestaza / podwyższenie enzymów wątrobowych oraz reakcje nadwrażliwości (wysypka, świąd, obrzęk naczynioruchowy) zgłaszane w pojedynczych przypadkach." }
  ],
  "contraindications": [
    { "hu": "Terhesség és terhes (vagy potenciálisan teherbe eshető) partner: Pregnancy Category X – a DHT-szuppresszió a magzati férfi külső nemi szervek fejlődési rendellenességét okozhatja. Terhes nő a tablettát NE érintse (különösen törött/morzsolt formában).", "en": "Pregnancy and pregnant (or potentially pregnant) partner: Pregnancy Category X – DHT suppression can cause malformation of the fetal male external genitalia. A pregnant woman must NOT handle the tablets (especially broken/crushed ones).", "pl": "Ciąża i ciężarna (lub mogąca zajść w ciążę) partnerka: kategoria X – supresja DHT może powodować wady rozwojowe zewnętrznych narządów płciowych płodu męskiego. Kobieta w ciąży NIE może dotykać tabletek (zwłaszcza pokruszonych)." },
    { "hu": "Nők (fogamzóképes korú) és gyermekek: nem javallt; teratogén kockázat és hiányzó haszon-igazolás.", "en": "Women (of childbearing potential) and children: not indicated; teratogenic risk and no proven benefit.", "pl": "Kobiety (w wieku rozrodczym) i dzieci: niewskazane; ryzyko teratogenne i brak udowodnionych korzyści." },
    { "hu": "Depresszió vagy más hangulati zavar az anamnézisben: a hangulati mellékhatások és a PFS fokozott kockázata miatt relatív ellenjavallat.", "en": "History of depression or other mood disorder: relative contraindication due to increased risk of mood side effects and PFS.", "pl": "Depresja lub inne zaburzenia nastroju w wywiadzie: względne przeciwwskazanie z powodu zwiększonego ryzyka działań niepożądanych dotyczących nastroju i PFS." },
    { "hu": "Finasteridre vagy más 5α-reduktáz inhibitorra (pl. dutasteride) ismert túlérzékenység.", "en": "Known hypersensitivity to finasteride or other 5α-reductase inhibitors (e.g. dutasteride).", "pl": "Znana nadwrażliwość na finasteryd lub inne inhibitory 5α-reduktazy (np. dutasteryd)." },
    { "hu": "Serdülők (<18 év): a fejlődés alatti 5AR-blokád nem javallt.", "en": "Adolescents (<18 years): 5AR blockade during development is not indicated.", "pl": "Młodzież (<18 lat): blokada 5AR w okresie rozwoju nie jest wskazana." },
    { "hu": "Súlyos májkárosodás: a finasteride a májban (CYP3A4) metabolizálódik, csökkent funkció esetén óvatosság / kontroll szükséges.", "en": "Severe hepatic impairment: finasteride is metabolized in the liver (CYP3A4), caution / monitoring is required with reduced function.", "pl": "Ciężkie zaburzenia czynności wątroby: finasteryd jest metabolizowany w wątrobie (CYP3A4), przy obniżonej czynności wymagana jest ostrożność / monitorowanie." },
    { "hu": "Androgén-inszenzitivitás szindróma (AIS) vagy AR-mutáció családi anamnézise: az androgén-jelátvitel további csökkentése kerülendő.", "en": "Family history of androgen insensitivity syndrome (AIS) or AR mutation: further reduction of androgen signaling should be avoided.", "pl": "Rodzinny wywiad zespołu niewrażliwości na androgeny (AIS) lub mutacji AR: należy unikać dalszego osłabiania sygnalizacji androgenowej." }
  ],
  "name": "Finasteride (Propecia / Proscar)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Selective type-II 5α-reductase inhibitor. FDA-approved (Proscar 1992 BPH 5 mg, Propecia 1997 AGA 1 mg). In AAS: scalp DHT suppression to slow hair loss in genetically predisposed users. Type-I 5AR not inhibited.",
  "description": "Finasteride (Propecia 1 mg, Proscar 5 mg) is a 4-aza-steroid selective type-II 5α-reductase inhibitor developed by Merck and FDA-approved in 1992 as Proscar 5 mg for benign prostatic hyperplasia (BPH), then in 1997 as Propecia 1 mg for androgenetic alopecia (AGA, male-pattern hair loss). Kaufman 1998 (PMID 9821414) 5-year prospective trial documented that 1 mg/day finasteride slows male-pattern hair loss progression by ~83% and generates regrowth in ~48% (more effective on the vertex than on the frontal hairline). In AAS context, finasteride primarily inhibits the secondary DHT conversion from testosterone elevation (~70% scalp DHT suppression at 1 mg/day) — in genetically predisposed AGA-risk users, hair-loss acceleration can be mitigated. **DOES NOT** help with trenbolone-driven hair-loss acceleration (Tren is NOT a 5AR substrate) or with Anadrol (also not). Type-I 5AR (skin/sebum DHT) is **not** inhibited — dutasteride dual-inhibitor is needed for that. WADA listing: under S5 (hormone modulator) — competition-banned but TUE possible in clinical indications. Post-finasteride syndrome (PFS) is controversial at ~1-2% incidence (Irwig 2012, PMID 22366892).",
  "keyInfo": [
    {"label": "Mechanism", "value": "Selective type-II 5α-reductase inhibitor, ~70% scalp DHT suppression at 1 mg/day"},
    {"label": "Dosing (AAS hair-loss prevention)", "value": "1 mg/day (Propecia) continuous during cycle"},
    {"label": "Half-life", "value": "~6 h parent, pharmacodynamic effect 24+ h enzyme inhibition"},
    {"label": "Onset", "value": "DHT reduction measurable 24 h, hair stabilization 3-6 months"},
    {"label": "Legal status", "value": "FDA + EMA Rx, HU + PL approved, WADA allowed (not 5AR-banned)"}
  ],
  "mechanism": "Finasteride is a 4-aza-steroid compound that competitively inhibits the type-II 5α-reductase enzyme (Ki ~5 nM). 5α-reductase converts testosterone to dihydrotestosterone (DHT) — in DHT-sensitive tissues (prostate, scalp, sebum-producing sebaceous glands, libido circuit neurons), DHT activates AR (~10-30× binding affinity) more potently than testosterone. Two isoforms exist: type-I (skin/sebum production dominant) and type-II (prostate + scalp + hair-follicle dominant). Finasteride inhibits only type-II → ~70% scalp DHT suppression, ~85% prostate DHT suppression, but skin/sebum only ~30% (type-I dominant). At 5 mg/day, similar DHT suppression, used in BPH indication (vs 1 mg/day Propecia dose for AGA). Effect reversible after cessation: DHT returns to baseline in 2 weeks. WADA listing: S5 hormone modulator — competition-banned but allowed with clinical TUE.",
  "legalStatus": "USA: FDA-approved Proscar 1992 BPH (5 mg), Propecia 1997 AGA (1 mg). EU: EMA-approved. HU: registered (Propecia, Proscar Rx). PL: registered. WADA: S5 hormone modulator — banned in competition (TUE possible in clinical indications), out-of-competition allowed.",
  "onsetTime": "DHT reduction 24 h, hair stabilization 3-6 months",
  "halfLife": "~6 h parent, pharmacodynamic effect 24+ h",
  "halfLifeActive": "~6 h (parent), but 24+ h enzyme inhibition reversal depends on new synthesis",
  "interactionsWith": ["dutasteride", "ru58841", "testosterone-info", "anavar-info"],
  "aromatization": "Does not aromatize — competitive type-II 5α-reductase inhibitor; inhibits DHT conversion, does NOT directly affect the estrogen axis (but secondary E2 elevation may follow testosterone rise).",
  "hepatotoxicity": "Low — non-steroidal in mechanism but 4-aza-steroid structure. Rare cholestasis case reports (FDA Propecia label). Post-finasteride syndrome (PFS) — controversial neurosteroid-mediated mood/sexual dysfunction long-term sequela ~1-2% incidence (Irwig 2012 PMID 22366892).",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not AAS, 5AR inhibitor)",
  "bindingAffinity": "Type-II 5AR Ki ~5 nM (competitive), Type-I 5AR ~100× less potent. AR receptor minimal binding.",
  "detectionWindow": "Previously listed as 5AR masking agent; removed from WADA list 2009 — now allowed.",
  "benefits": [
    "AAS context: scalp DHT ~70% suppression → mitigation of genetically predisposed AGA acceleration",
    "Kaufman 1998 5-year trial: ~83% AGA progression slowing, ~48% vertex regrowth",
    "Reversible (DHT returns in 2 weeks)",
    "FDA + EMA Rx pharma-grade globally available",
    "Inexpensive (~€10-25/box generic Propecia 1 mg)"
  ],
  "quickStart": [
    "Pre-treatment baseline bloodwork: total/free Test, DHT serum, E2, lipid panel",
    "Start: 1 mg/day (Propecia) morning, food indifferent",
    "Standard cycle protocol: continuous 1 mg/day throughout entire AAS cycle + recovery",
    "BPH indication (NOT AAS hair loss): 5 mg/day Proscar, too high for AAS context",
    "Re-test bloodwork 4-6 weeks later: confirm DHT serum ~70% reduction",
    "Trenbolone-only stack: finasteride does NOT help (Tren is not a 5AR substrate) — Tren hair loss has a niche mechanism"
  ],
  "expectations": [
    {"label": "Week 1", "body": "DHT serum reduction measurable (~50-70%). Hair-loss acceleration eases over 1-2 weeks — but existing fallen hair does NOT regrow immediately."},
    {"label": "Months 1-3", "body": "Hair shedding stabilizes. 'Shedding phase' may occur in the first weeks (telogen effluvium release, paradoxical increased shedding initially — passes by weeks 4-8)."},
    {"label": "Months 3-6", "body": "Regrowth observable (vertex area dominantly). Stable hairline establishment. Test rise may lead to secondary serum E2 elevation (DHT blockade → conversion pathway shift)."},
    {"label": "Month 12", "body": "Maximum effect plateau. Kaufman 1998 5-year trial: ~80% sustained progression prevention. If stopped → DHT returns within 2 weeks, hair-loss acceleration returns quickly."}
  ],
  "quality": {
    "pure": [
      "Merck Propecia 1 mg blister, Rx pharma-grade (US + EU)",
      "Merck Proscar 5 mg (BPH indication, not AAS hair loss)",
      "Generic finasteride 1 mg / 5 mg (Sandoz, Teva, Ratiopharm — EU)",
      "Indian generic (Sun Pharma Finpecia 1 mg, Cipla Finax)",
      "UGL liquid finasteride: rare, pharma-grade Rx alternative recommended"
    ],
    "caution": [
      "Sexual side effects: libido drop, erectile dysfunction (~3-8% in Propecia users), reduced ejaculate volume — most common dose-related side effect",
      "Mood change: depressive symptom risk documented (Singh 2014); contraindicated in users with depression history",
      "PFS (post-finasteride syndrome): ~1-2% incidence long-term, persistent sexual + cognitive + mood dysfunction even after finasteride cessation — controversial, neurosteroid-mediated (Irwig 2012)",
      "PSA screening interpretation: finasteride lowers PSA by ~50%, a confounder in prostate cancer screening",
      "Cytochrome interactions: CYP3A4 metabolism, small interaction risk"
    ],
    "avoid": [
      "Pregnant partner / breastfeeding (Pregnancy Category X — fetal male development disturbance from testosterone-DHT deprivation; do not dose near pregnant women)",
      "Depression history (mood-dysfunction risk)",
      "AR mutation / AIS (Androgen Insensitivity Syndrome) family history",
      "Adolescent users (<18 years, do not initiate 5AR blockade during development)",
      "Tren-only stack (does not act on 5AR substrate)"
    ]
  },
  "interactions": [
    "Dutasteride: cannot be combined (overlapping mechanism, additive side effects)",
    "Testosterone-base AAS cycles: standard hair-loss prevention",
    "Trenbolone/Anadrol stack: finasteride does NOT help (not a 5AR substrate)",
    "Saw palmetto (herbal 5AR inhibitor): combinable for mild synergy, but PFS-like side effect risk accumulates",
    "PDE5 inhibitors (sildenafil, tadalafil): first-line adjunct for finasteride sexual side effects"
  ],
  "studies": [
    {"title": "Viable terminal scalp hair follicles constitute a necessary and sufficient biological end-organ that conditions clinical efficacy of finasteride 1mg.", "authors": "Van Neste D", "journal": "Skin Res Technol", "pmid": "31206839"},
    {"title": "Persistent Sexual and Psychological Symptoms After Finasteride Discontinuation: A Cross-Sectional Observational Study.", "authors": "Jędrzejczyk P, Ząbkowski T, Ratajski J", "journal": "J Clin Med", "pmid": "42074750"},
    {"title": "5-Alpha reductase inhibitors in androgenetic alopecia: Shifting paradigms, current concepts, comparative efficacy, and safety.", "authors": "Dhurat R, Sharma A, Rudnicka L, Kanti V, Vañó-Galván S, Pirmez R, Sinclair R, Doolan B, Tosti A", "journal": "Dermatol Ther", "pmid": "32279398"},
    {"title": "Long-term (5-year) multinational experience with finasteride 1 mg in the treatment of men with androgenetic alopecia", "authors": "Kaufman KD, Rotonda J, Shah AK, Meehan AG.", "journal": "Eur J Dermatol. 2008;18(4):400-406.", "pmid": "18573713"}
  ],
  "faq": [
    {"q": "What does finasteride protect alongside AAS?", "a": "Finasteride protects against genetically predisposed AGA (androgenetic alopecia) **acceleration mitigation**, NOT total prevention. Mechanism: an AAS cycle elevates exogenous testosterone → secondary scalp DHT elevation → AGA acceleration at susceptible hair-follicle receptors. Finasteride inhibits scalp DHT conversion by ~70% → AGA progression slows (Kaufman 1998: ~83% sustained progression prevention over 5 years). IMPORTANT: in genetically non-predisposed users (no family AGA, no baseline thinning), finasteride is NOT needed — there is nothing preventively to protect. A Norwood scale 1-2 baseline at age 25-30 requires pre-evaluation — if Norwood 3+ progression during the cycle, starting 1 mg/day finasteride is indicated."},
    {"q": "Trenbolone and Anadrol — does finasteride work?", "a": "**NO**. Finasteride only inhibits testosterone → DHT conversion (the 5AR substrate). Trenbolone is structurally NOT a 5AR substrate — it binds AR directly, and Tren-induced hair loss works through a different mechanism (direct AR stimulation + local inflammation pathway). Anadrol (oxymetholone) is also NOT a 5AR substrate — also direct AR affinity. On Tren/Anadrol-only stacks, finasteride **does NOT help** — hair-loss acceleration here is a niche mechanism. Topical minoxidil (5%) can be adjunct, or avoidance of Tren stacks in genetically predisposed users."},
    {"q": "Post-finasteride syndrome (PFS) — how real is it?", "a": "Controversial, BUT growing evidence. Irwig 2012 (PMID 22366892) prospective study in 71 young men documented finasteride-induced persistent sexual side effects — the first large clinical documentation of PFS. Mechanism: neurosteroid (allopregnanolone, 3α-androstanediol) pathway disruption — 5AR participates in brain steroid synthesis, and chronic inhibition can cause GABAergic and serotonin pathway changes. Incidence: ~1-2% in epidemiologic studies, but underreporting likely. Symptoms may persist 6-12 months after finasteride cessation — persistent sexual dysfunction, depression, anhedonia, cognitive 'fog'. **Risk mitigation**: pre-treatment depression history screen, low-dose start (0.5 mg every 2 days), baseline neurosteroid profile bloodwork (DHEA, allopregnanolone monitor); if symptom onset → IMMEDIATE cessation (NOT dose reduction)."},
    {"q": "Are sexual side effects reversible?", "a": "Generally YES — after finasteride cessation, libido and erectile quality return in ~95-98% of users within 6-12 weeks. Reversibility time frame: DHT to baseline in 2 weeks, neurosteroid effects ~6-12 weeks, brain-pathway recovery 3-6 months. In PFS-affected users (~1-2%), side effects are persistent — sexual + mood dysfunction continues after cessation, as the brain-neurosteroid-pathway disruption lacks rebound recovery. Risk mitigation: pre-treatment baseline assessment (libido baseline self-rating, IIEF-5 erectile-quality score), monthly self-monitor; if symptom onset → IMMEDIATE cessation, **NOT** dose reduction (brain-pathway stabilization does not respond to partial dose)."},
    {"q": "Topical finasteride — better choice?", "a": "Emerging research-emphasized alternative — topical finasteride 0.25%-1% solution daily applied to scalp, ~70% scalp DHT suppression similar to 1 mg oral, but significantly lower systemic exposure (~10-15% systemic absorption vs 100% oral). Prediction: PFS risk lower, sexual side effects rarer. Cons: compounded only (NO FDA approval), more expensive (~€100-200/month UGL/compounding pharmacy), application-compliance compromise (daily scalp application). Modern AGA clinics emerging trend recommends topical first. In AAS context: if a PFS risk-averse user (depression history, sexual emphasis), topical is worth exploring."}
  ],
  "related": ["dutasteride", "ru58841", "testosterone-info", "anavar-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.5, "medium": 1, "high": 1},
    "unit": "mg / day (oral, food indifferent)",
    "note": "Standard AAS hair-loss prevention: 1 mg/day (Propecia) continuous throughout cycle. PFS risk-averse user: 0.5 mg every 2 days (low-dose alternative). NOT on Tren-only / Anadrol-only stack (does not act). Topical 0.25-1% solution AAS-niche alternative (compounded, lower systemic side effects)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Before finasteride start",
      "timing": "AAS cycle start or AGA acceleration onset",
      "markers": "Total Testosterone, Free Testosterone, DHT serum (baseline confirm efficacy target), E2, SHBG, lipid panel, ALT/AST, depression screen (PHQ-9 baseline), IIEF-5 erectile quality baseline.",
      "purpose": "Baseline + side-effect risk stratification. Pre-treatment Norwood-scale photo + monthly photos for hair progression tracking."
    },
    "midCycle": {
      "label": "Finasteride weeks 4-6",
      "timing": "Finasteride start +4-6 weeks",
      "markers": "DHT serum (confirm ~70% reduction), Total Test (rise expected), E2 (secondary rise), IIEF-5 re-score (sexual monitor), PHQ-9 (mood monitor).",
      "purpose": "Efficacy + side effect monitor. If DHT reduction <50% → compliance check; if sexual/mood side effect → dose reduction (0.5 mg every 2 days) or cessation."
    },
    "postCycle": {
      "label": "Finasteride cessation",
      "timing": "Last dose +2-4 weeks (recovery monitor)",
      "markers": "DHT serum (baseline recovery), Total Test, E2, IIEF-5, PHQ-9.",
      "purpose": "Confirm: DHT returns to baseline in 2 weeks. Sexual + mood side effect recovery over 6-12 weeks — if persistent, PFS screen."
    },
    "cruise": {
      "label": "Chronic AAS cruise + finasteride continuous",
      "timing": "1 mg/day continuous",
      "markers": "Annually: DHT, Test, lipid panel, IIEF-5, PHQ-9. PSA screen (finasteride lowers PSA by 50% — prostate cancer screen interpretation differential).",
      "purpose": "Chronic AAS cruise hair-loss prevention monitor + PFS risk monitor."
    }
  }
}
