// Kisspeptin-10 — 10-aminosav C-terminál kisspeptin-fragmens, hypothalamic
// GPR54 (KISS1R) agonista. Imperial College London Phase I-II trials 2020s.
// Research-emerging upstream HPG-tengely restart agent.
// Sources: Jayasena 2017 PMID 27959703, Dhillo 2007 PMID 17567849,
// George 2013 PMID 23390083.

export default {
  "id": "kisspeptin-10",
  "name": "Kisspeptin-10",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "10 aminosav C-terminál kisspeptin-fragmens — hypothalamic GPR54 → GnRH-pulse → LH/FSH. Legfelsőbb axis-restart pont a HPG-tengelyben. Imperial College London Phase I-II 2020-as években; research-emerging.",
  "description": "A Kisspeptin-10 a kisspeptin-család (KISS1 gene-product) 10-aminosav C-terminál bioaktív fragmense, amely a hypothalamus GPR54 (más néven KISS1R) receptorához kötődik, és az arcuate-nucleus GnRH-neuronokon GnRH-pulses-pattern-t indít — ezáltal a pituiter LH/FSH-release-t triggeríti, ami a Leydig-sejt testosterone-produkcióját aktiválja. **A Kisspeptin-10 az AAS-PCT-arzenál legfelsőbb upstream axis-restart agent-je**: a klasszikus PCT-eszközök (Nolvadex, Clomid SERM-ek) a pituitár ER-blokádon dolgoznak (1-szint downstream), a HCG közvetlenül a testikuláris Leydig-sejt LHCGR-receptort stimulál (3-szint downstream), DE a Kisspeptin-10 a hypothalamic GnRH-pulsatility-pattern-t restartolja — ami a teljes HPG-tengely élettani működésének alapja. Jayasena 2017 (PMID 27959703) Phase I-II trial dokumentálta, hogy SC-injekció után 1-2 órával jelentős LH/FSH-spike + Total-Test-emelkedés érhető el. Az Imperial College London (Waljit Dhillo lab) jelenleg is folyamatos Phase II-trial-eket végez hypogonadism + IVF-fertility-indikációkban. **Research-emerging** state: NINCS jóváhagyott commercial pharmaceutical (Adlumiz pipeline emerging 2025+); UGL-peptid-CDMO sourcing standard. Praktikus probléma: pulsatile-dosing impraktikus self-administration-context-en (90-min cycles pump-protokoll kell), bolus-dose limited efficacy.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Hypothalamic GPR54 (KISS1R) agonista → GnRH-pulse → LH/FSH → testicular Test"
    },
    {
      "label": "Adagolás",
      "value": "50-200 mcg SC every 90 min (pulse-pump) vagy 1-2 mg SC bolus daily (community-protokoll, limited efficacy)"
    },
    {
      "label": "Felezési idő",
      "value": "~28 perc (very short — pulsatility-pattern essentialis)"
    },
    {
      "label": "Hatáskezdet",
      "value": "LH/FSH-spike 1-2 óra SC után"
    },
    {
      "label": "Jogi státusz",
      "value": "NINCS FDA/EMA pharmaceutical-jóváhagyás; Imperial College London Phase II ongoing 2026, WADA S2 Peptide Hormones banned"
    }
  ],
  "mechanism": "A KISS1 (kisspeptin) gén-produktum egy ~145 aminosav prekurzor protein, amely proteolytic-cleavage-en megy keresztül, és a 10-aminosav C-terminál fragmens (Kisspeptin-10, KP-10) biológiailag a legaktívabb forma. Receptora a GPR54 (KISS1R) — G-protein-coupled receptor a hypothalamus arcuate-nucleus + AVPV (anteroventral periventricular nucleus) GnRH-neuronokon. Kötés → Gq-pathway → intracelluláris Ca²⁺-mobilizáció → membrane-depolarizáció → GnRH-vesicle-release a median eminence felé. A GnRH a portal-circuit-on a pituitár anterior-lobe-jához eljut, és a gonadotrop-sejteken LH + FSH szekréciót indít. **Kritikus pulsatility**: a természetes GnRH-pulse-pattern ~90-120 perces ciklusokban működik; chronic-elevated GnRH-szignál (vs pulsatile) a GnRH-receptort downregulálja → reverse effekt (prostate-cancer-GnRH-agonist-therapy mechanizmusa). Ezért a Kisspeptin-10 SC-bolus-dose limited-efficacy egyetlen LH-spike-ot okoz, és a pulse-pump-protokoll szükséges a chronic-axis-restart-hoz. Hepatikus stresszezés peptid-SC-injekció miatt nincs.",
  "legalStatus": "NINCS FDA/EMA pharmaceutical-jóváhagyás. Imperial College London Phase II-trials folyamatosak (Waljit Dhillo lab, 2017+). UGL-peptid-CDMO sourcing standard ($30-50/mg). Adlumiz Therapeutics 2024+ commercial pipeline emerging (Phase III-tervek). WADA: S2 Peptide Hormones — banned in/out-of-competition.",
  "onsetTime": "LH/FSH-spike 1-2 óra SC után",
  "halfLife": "~28 perc",
  "halfLifeActive": "~28 perc (parent fragmens aktív; metabolite-fragmensek inaktívak)",
  "interactionsWith": [
    "gonadorelin",
    "hcg-perf",
    "fsh-rec-perf"
  ],
  "aromatization": "Indirekt: hypothalamic GnRH-stimulus → LH/FSH → testicular Test → peripheral E2-konverzió. Magnitude moderate, similar to HCG-axis.",
  "hepatotoxicity": "Nincs hepatikus stressz — peptid SC injekció.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (hypothalamic peptid, NEM AAS)",
  "bindingAffinity": "GPR54 (KISS1R) Ki ~1-3 nM, high-affinity natural ligand-szerű kötés.",
  "detectionWindow": "WADA-akkreditált LC-MS/MS sparse — peptid-detection vizeletmintából 24-48 óra (research-context, limited data).",
  "benefits": [
    "Upstream HPG-tengely restart — Kisspeptin-Gonadorelin-HCG hierarchy legfelső pontján",
    "Imperial College London Phase II-trials evidence (Jayasena 2017): SC-bolus LH/FSH-spike + Test-emelkedés dokumentált",
    "Research-emerging — Adlumiz commercial pipeline 2025+",
    "Nincs hepatikus stressz — peptid"
  ],
  "quickStart": [
    "Beszerzés: research-chemical peptid-CDMO (USA: Bachem, Lipotec; EU: PolyPeptide Group); HPLC + mass-spec-tested forrás kötelező",
    "Reconstitution: 1 mg lyophilized → 2 mL bacteriostatic water (0.5 mg/mL koncentráció)",
    "Pulse-pump-protokoll (ideal): 50-200 mcg SC every 90 min, ~16 dose/24 óra — KIZÁRÓLAG research-setting",
    "Bolus-protokoll (community DIY-PCT): 1-2 mg SC napi 1x, limited efficacy — single LH-spike",
    "Bloodwork pre-treatment: Total Test, Free Test, LH, FSH, Estradiol, SHBG, Prolactin baseline",
    "Bloodwork mid + post: 24h post-injekció LH/FSH-spike confirm, 7-14 nap Total-Test-recovery"
  ],
  "expectations": [
    {
      "label": "1-2 óra SC után",
      "body": "LH-spike mérhető (~3-5x baseline emelkedés, Jayasena 2017 data). FSH-spike enyhébb (~2-3x). Test-emelkedés szérum-szinten ~6-12 óra delay-vel."
    },
    {
      "label": "24-48 óra",
      "body": "LH-szint visszaesik (rövid felezés). Test-emelkedés tartós ~2-3 napon át. Második dose-zal pulsatility-simulating effect kiterjedhet."
    },
    {
      "label": "Chronic-protokoll (pulse-pump, 1-2 hét)",
      "body": "HPG-tengely restart full physiological pattern. Endogén Test-recovery >50% baseline elérhető pituitár-szintű suppress-statusban."
    },
    {
      "label": "Bolus-DIY-protokoll",
      "body": "Limited efficacy — single LH-spike-onkénti dose, NEM chronic-axis-restart. SERM-PCT-replacement role NEM evidence-based jelenleg."
    }
  ],
  "quality": {
    "pure": [
      "USA peptid-CDMO: Bachem, Lipotec, AmbioPharm — HPLC + mass-spec-tested (>98% purity), R&D-grade vials",
      "EU peptid-CDMO: PolyPeptide Group (Belgium), Bachem Bubendorf (Svájc) — pharmaceutical-grade",
      "Adlumiz Therapeutics (USA) — commercial pipeline emerging 2025-2026 Phase III dataset",
      "UGL peptid-vendor (Asian sourcing): HPLC-cert kötelező — purity gyakran <90%, mass-spec-confirm nélkül elkerülni"
    ],
    "caution": [
      "Pulse-pump protokoll impraktikus self-administration (90-min cyclic injection 24/7) — research-setting only",
      "Bolus-dose limited efficacy — single-LH-spike vs chronic-HPG-tengely restart",
      "Beszerzés: peptid-CDMO drága (~€30-50/mg), Imperial-College-Phase-II material-source NEM elérhető publikusan",
      "Bacteriostatic-water tárolás: 4°C reconstituted-peptid 14-21 napig stabil; 25°C szobahő <7 nap",
      "Mass-spec-cert nélkül vásárolt UGL-forrás: pseudo-peptid + degradált-fragmensek frequent"
    ],
    "avoid": [
      "Self-administration pulse-pump-protokoll képzetlen-felhasználón (sterile-technique critical, infection risk)",
      "Research-novice user — peptid-handling + reconstitution-protokoll szakirányú-tudás szükséges",
      "Chronic high-dose (>10 mg/nap, >4 hét): GPR54-receptor-downregulation theoretical risk (Kisspeptin-LH-suppression paradox)",
      "Co-administration GnRH-agonist therapy (Lupron, Zoladex): theoretical receptor-interaction, NEM ajánlott",
      "Pregnant partner kontakt: theoretical fetal HPG-axis effect"
    ]
  },
  "interactions": [
    "HCG-perf: upstream vs downstream synergia — Kisspeptin pituitár-LH-stimulus + HCG testicular-LHCGR-stimulus combo",
    "Gonadorelin: NEM ajánlott együtt (overlap-mechanism, redundant GnRH-pathway stimulation)",
    "SERM (Nolvadex, Clomid): theoretical synergia (Kisspeptin upstream-pulse + SERM-pituitár-ER-blokád), DE clinical evidence sparse",
    "Pulse-pump protokoll + bolus + SC-injection-szerszám: peptid-stability-tárolás kritikus"
  ],
  "studies": [
    {
      "title": "Age-dependent changes in the reproductive axis responsiveness to kisspeptin-10 administration in healthy men.",
      "authors": "Ullah H, Nabi G, Zubair H, Shahab M",
      "journal": "Andrologia",
      "pmid": "30590872"
    },
    {
      "title": "Changes in the Responsiveness of the Hypothalamic-Pituitary-Gonadal Axis to Kisspeptin-10 Administration during Pubertal Transition in Boys.",
      "authors": "Nabi G, Ullah H, Khan S, Wahab F, Duan P, Ullah R, Shireen N, Shahab M",
      "journal": "Reprod Sci",
      "pmid": "30046307"
    },
    {
      "title": "Hypothalamic Response to Kisspeptin-54 and Pituitary Response to Gonadotropin-Releasing Hormone Are Preserved in Healthy Older Men.",
      "authors": "Abbara A, Narayanaswamy S, Izzi-Engbeaya C, Comninos AN, Clarke SA, Malik Z, Papadopoulou D, Modi M, Faruqi D, Mustafa R, Bassett P, Lavery S, Trew GH, Patel A, Hu M, Bloom SR, Dhillo WS",
      "journal": "Neuroendocrinology",
      "pmid": "29544222"
    }
  ],
  "faq": [
    {
      "q": "Kisspeptin-10 vs HCG vs Gonadorelin — mi a különbség?",
      "a": "Axis-level hierarchy különbség. (1) **Kisspeptin-10**: hypothalamic GPR54 → GnRH-pulse → LH/FSH (legfelső upstream point); (2) **Gonadorelin**: pituitár GnRH-receptor → LH/FSH (1-szint downstream Kisspeptintől, direct GnRH-analog); (3) **HCG**: testicular Leydig-sejt LHCGR-receptor → Test-produkció (3-szint downstream, pituitár teljes-bypass). Klinikai választás: Kisspeptin a legtermészetesebb-pattern (pulsatility-simulator), DE legimpraktikusabb (pump-protocol); HCG legpraktikusabb (heti 2x SC), DE pituitár-feedback-loop megkerüli. Gonadorelin köztes (pituitár-szintű direct, DE pulsatility kell)."
    },
    {
      "q": "Pulsatile-dosing impraktikus — mit ér a bolus dose?",
      "a": "Single-bolus 1-2 mg SC Jayasena 2017 trial-evidence: ~3-5x LH-spike + ~2-3x FSH-spike 1-2 órán belül, Test-emelkedés ~6-12 óra delay-vel, tartós ~2-3 napon át. **Limited efficacy chronic-axis-restart-hoz**: a HPG-tengely teljes physiological-recovery-hez pulsatile-pattern (90-min cycles) szükséges, single-bolus csak transient stimulus. Community DIY-PCT-protokollok napi 1-2 mg SC × 7-14 nap próbálnak — empirical evidence sparse, NEM SERM-PCT-replacement. Imperial College Phase II trials pulse-pump-protokollon dolgoznak."
    },
    {
      "q": "Beszerzhetőség?",
      "a": "Research-chemical peptid-CDMO standard sourcing. USA: Bachem, Lipotec, AmbioPharm (HPLC + mass-spec-tested, >98% purity, ~$30-50/mg). EU: PolyPeptide Group, Bachem Bubendorf (pharmaceutical-grade, hasonló ár). Asian UGL-vendor: HPLC-cert kötelező — purity gyakran <90%, mass-spec-confirm hiányos. Imperial College London Phase II-material NEM elérhető publikusan, kizárólag trial-participation-via. Adlumiz Therapeutics 2025-26 commercial pipeline-fókusz."
    },
    {
      "q": "Klinikai trial-státusz 2026?",
      "a": "Imperial College London (Waljit Dhillo lab) folyamatos Phase II trials hypogonadism + IVF-fertility-indikációkban (2017-2026). Adlumiz Therapeutics (USA) commercial pipeline emerging — Phase III-tervek 2025-2026 hypogonadism-indikáció. Európában nincs commercial pipeline. Kisspeptin-54 (a 54-aminosav variant) is parallel-research, hasonló mechanizmus. Modern clinical-decision-tree: Kisspeptin-PCT NEM evidence-based jelenleg, SERM (Nolvadex/Clomid) + HCG kombináció marad a klinikai standard."
    }
  ],
  "related": [
    "gonadorelin",
    "hcg-perf",
    "fsh-rec-perf"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 0.5,
      "medium": 1,
      "high": 2
    },
    "unit": "mg SC napi 1x (bolus-protokoll, limited efficacy)",
    "note": "Pulse-pump protokoll (research): 50-200 mcg SC every 90 min × 24h cycles. Bolus DIY-protokoll: 1-2 mg SC napi 1x reggel × 7-14 nap. Reconstitution: 1 mg lyophilized → 2 mL bacteriostatic water (0.5 mg/mL). Tárolás: 4°C reconstituted 14-21 nap stabil."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Kisspeptin-10-treatment indítása előtt",
      "timing": "PCT-fázis indítás vagy chronic hypogonadism-context",
      "markers": "Total Testosterone, Free Testosterone, LH, FSH, Estradiol, SHBG, Prolactin, inhibin-B (ha elérhető), lipid panel, ALT/AST, hemogram.",
      "purpose": "Baseline HPG-tengely status. Indikáció: pituitár-szintű suppression (LH/FSH <kor-specifikus baseline) + Test <300 ng/dL. SERM-PCT-failure case-en niche-option."
    },
    "midCycle": {
      "label": "Kisspeptin 24-48 óra post-injekció",
      "timing": "SC-bolus +1-2 óra (LH/FSH-spike) + 24h delayed (Test-emelkedés)",
      "markers": "LH (acute spike confirm), FSH, Total Test, Free Test, Estradiol (másodlagos emelkedés).",
      "purpose": "Acute-response confirm: LH ~3-5x baseline spike Jayasena 2017 elvárt. Ha NINCS LH-spike → peptid-quality-issue (degradált forrás) vagy pituitár-saturation."
    },
    "postCycle": {
      "label": "Kisspeptin-protokoll vége / recovery monitor",
      "timing": "Utolsó dose +7-14 nap",
      "markers": "Total Test, Free Test, LH, FSH, Estradiol, SHBG, lipid panel.",
      "purpose": "HPG-tengely sustained-restart confirm: LH/FSH ≥ kor-specifikus-baseline-low, Test ≥ pre-treatment +25%. Ha NINCS sustained-recovery → SERM-PCT (Nolvadex 4-6 hét) adjuváns indokolt."
    },
    "cruise": {
      "label": "Chronic AAS-cruise-on NEM ajánlott",
      "timing": "N/A",
      "markers": "N/A",
      "purpose": "Kisspeptin chronic-cruise NEM ajánlott (research-emerging, evidence sparse). Csak acute-PCT-fázis-bolus vagy pulse-pump research-protokoll setting-en."
    }
  },
  "anecdote": "A Kisspeptin az egyik érdekesebb opció a poszt-ciklus terápia / természetes tesztoszteron-emelő területen. A legtöbb felhasználó viszonylag gyorsan észleli a libidó- és hangulatjavulást, ha a HPG-tengelye jól reagál. Azonban AAS által szuppresszált felhasználóknál a válasz anekdotikusan gyengébb az erősebb alternatívákhoz, például a HCG-hez képest. A Kisspeptin termékenységi szempontból intenzíven kutatott, mivel képes az LH/FSH-t a szintetikus alternatíváknál fiziológiásabb módon stimulálni. A hatások finomak, de hasznosak, amikor a használati eset megfelelő.\n\nA Kisspeptint legjobb szubkután injekcióval adagolni a peptid jellege miatt. Az adagolás analógonként változik (pl. Kisspeptin-10), de általában naponta vagy hetente néhány alkalommal adagolják."
}
