// FSH-rec (Gonal-F / Puregon) — Recombinant FSH (CHO-expressed), selective
// Sertoli-FSHR stimulus. AAS-PCT niche: azoospermia recovery + Sertoli support
// alongside HCG LH. Cross-frame: future peptide library will add `fsh-rec-peptid`.
// Sources: EMA Gonal-F SPC (Merck Serono 1995), EMA Puregon SPC (Organon 1996),
// Burgues 1997 PMID 9176246, Liu 2009 PMID 19435775.

export default {
  "id": "fsh-rec-perf",
  "sideEffects": [
    { "hu": "Injekció helyi reakciói: bőrpír, fájdalom, viszketés, duzzanat, véraláfutás az SC beadás helyén (a leggyakoribb mellékhatás).", "en": "Injection-site reactions: redness, pain, itching, swelling and bruising at the SC injection site (the most common adverse effect).", "pl": "Reakcje w miejscu wstrzyknięcia: zaczerwienienie, ból, świąd, obrzęk i siniaki w miejscu podania podskórnego (najczęstsze działanie niepożądane)." },
    { "hu": "Fejfájás, ami a leggyakoribb szisztémás panasz a kezelés alatt.", "en": "Headache, the most common systemic complaint during treatment.", "pl": "Ból głowy, najczęstsza dolegliwość ogólnoustrojowa podczas leczenia." },
    { "hu": "Túlérzékenységi / allergiás reakciók: bőrkiütés, urticaria, a CHO-sejt-eredetű maradék fehérjékre adott válaszként, ritkán súlyos anafilaxiás reakció is előfordulhat.", "en": "Hypersensitivity / allergic reactions: rash, urticaria, as a response to residual CHO-cell-derived proteins; rarely severe anaphylactic reactions may occur.", "pl": "Reakcje nadwrażliwości / alergiczne: wysypka, pokrzywka, jako odpowiedź na resztkowe białka pochodzące z komórek CHO; rzadko mogą wystąpić ciężkie reakcje anafilaktyczne." },
    { "hu": "Gastrointestinalis tünetek: hányinger, hasi fájdalom, hasmenés, puffadás.", "en": "Gastrointestinal symptoms: nausea, abdominal pain, diarrhea and bloating.", "pl": "Objawy żołądkowo-jelitowe: nudności, ból brzucha, biegunka i wzdęcia." },
    { "hu": "Férfiaknál (hosszú HCG + FSH-rec protokollon) gynecomastia és aknét okozhat, főként a társított HCG által indukált tesztoszteron- és ösztrogénemelkedés következtében, nem önmagában az FSH-tól.", "en": "In men (on long HCG + FSH-rec protocols) gynecomastia and acne may occur, mainly due to the testosterone and estrogen rise driven by the co-administered HCG, not by FSH itself.", "pl": "U mężczyzn (przy długich protokołach HCG + FSH-rec) mogą wystąpić ginekomastia i trądzik, głównie z powodu wzrostu testosteronu i estrogenu wywołanego przez podawane jednocześnie HCG, a nie przez sam FSH." },
    { "hu": "Thromboembóliás események (mélyvénás trombózis, tüdőembólia) ritka, de súlyos kockázat, főként hajlamosító tényezők (trombofília, elhízás, korábbi trombózis) mellett.", "en": "Thromboembolic events (deep vein thrombosis, pulmonary embolism) are a rare but serious risk, mainly in the presence of predisposing factors (thrombophilia, obesity, prior thrombosis).", "pl": "Zdarzenia zakrzepowo-zatorowe (zakrzepica żył głębokich, zatorowość płucna) to rzadkie, lecz poważne ryzyko, głównie przy obecności czynników predysponujących (trombofilia, otyłość, wcześniejsza zakrzepica)." },
    { "hu": "Petefészek-hiperstimulációs szindróma (OHSS) – csak NŐI termékenységi indikációban releváns, hasi feszülés, petefészek-megnagyobbodás, súlyos esetben folyadékgyülem; férfi-protokollnál nem értelmezett.", "en": "Ovarian hyperstimulation syndrome (OHSS) – relevant only in female fertility use: abdominal distension, ovarian enlargement, in severe cases fluid accumulation; not applicable to male protocols.", "pl": "Zespół hiperstymulacji jajników (OHSS) – istotny tylko przy stosowaniu w leczeniu niepłodności u kobiet: rozdęcie brzucha, powiększenie jajników, w ciężkich przypadkach gromadzenie płynu; nie dotyczy protokołów u mężczyzn." }
  ],
  "contraindications": [
    { "hu": "Hipofízis- vagy hipotalamusz-daganat, illetve nem diagnosztizált, kezeletlen endokrin eltérés (pajzsmirigy, mellékvese).", "en": "Pituitary or hypothalamic tumor, or undiagnosed, untreated endocrine disorder (thyroid, adrenal).", "pl": "Guz przysadki lub podwzgórza, albo niezdiagnozowane, nieleczone zaburzenie endokrynologiczne (tarczyca, nadnercza)." },
    { "hu": "Túlérzékenység a follitropinra, a CHO-sejt-eredetű maradékfehérjékre vagy a készítmény bármely segédanyagára.", "en": "Hypersensitivity to follitropin, to CHO-cell-derived residual proteins, or to any excipient of the product.", "pl": "Nadwrażliwość na folitropinę, na resztkowe białka pochodzące z komórek CHO lub na którąkolwiek substancję pomocniczą preparatu." },
    { "hu": "A nemi szervek daganatai vagy a tesztiszek (illetve nőknél a petefészek/emlő/méh) hormonfüggő tumora.", "en": "Tumors of the reproductive organs, or a hormone-dependent tumor of the testes (or in women the ovary, breast, uterus).", "pl": "Nowotwory narządów rozrodczych lub hormonozależny guz jąder (lub u kobiet jajnika, piersi, macicy)." },
    { "hu": "Primér testicularis elégtelenség (pl. Klinefelter-szindróma, Y-kromoszóma AZF-mikrodeléció) – itt a Sertoli-defektus elsődleges, az FSH-rec hatástalan.", "en": "Primary testicular failure (e.g. Klinefelter syndrome, Y-chromosome AZF microdeletion) – here the Sertoli defect is primary and FSH-rec is ineffective.", "pl": "Pierwotna niewydolność jąder (np. zespół Klinefeltera, mikrodelecja AZF chromosomu Y) – tu defekt komórek Sertolego jest pierwotny i FSH-rec jest nieskuteczny." },
    { "hu": "Aktív thromboembóliás betegség vagy magas trombóziskockázat (súlyos trombofília, frissen lezajlott trombózis).", "en": "Active thromboembolic disease or high thrombotic risk (severe thrombophilia, recent thrombosis).", "pl": "Aktywna choroba zakrzepowo-zatorowa lub wysokie ryzyko zakrzepowe (ciężka trombofilia, niedawna zakrzepica)." },
    { "hu": "WADA S2.2 tiltott szer – versenyző sportolóknál egész évben tilos (verseny közben és kívül is).", "en": "WADA S2.2 prohibited substance – banned year-round for competing athletes (both in- and out-of-competition).", "pl": "Substancja zakazana wg WADA S2.2 – zakazana przez cały rok u zawodników startujących (w zawodach i poza nimi)." }
  ],
  "name": "FSH-rec (Gonal-F / Puregon)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Recombinant FSH (CHO-expressed) — selective Sertoli FSHR stimulus, NO LH activity. AAS-PCT niche: azoospermia recovery + Sertoli support alongside HCG LH. Expensive (€300+/75 IU vial EU). Cross-frame: future peptide library will add `fsh-rec-peptid`.",
  "description": "FSH-rec (recombinant follicle-stimulating hormone) is a biotechnologically manufactured glycoprotein expressed in Chinese Hamster Ovary (CHO) cell line. Two main brand names: Gonal-F (Merck Serono, EMA 1995, FDA 1997) and Puregon/Follistim (Organon, EMA 1996, FDA 1997). Recombinant production resolved the purification problems tied to urinary source (LH contamination in the Pergonal era, prion risk in the vCJD context) — Gonal-F + Puregon provide pure FSH activity with NO LH side-activity. **AAS-PCT context**: FSH-rec's niche position arises when Sertoli-selective stimulus is required. Typical indication: azoospermia recovery after a hard-suppression long cycle (>20 weeks) or 'blast-and-cruise', where Leydig functionality can be preserved (HCG mid-cycle protocol or endogenous low-LH restart) BUT Sertoli FSH-receptor activity doesn't return without a separate stimulus. FSH-rec then acts as a specific Sertoli-FSHR activator → spermatogenesis restart, inhibin-B rise. **Cross-frame note**: this is the `-perf` suffix entry; the future peptide library batch will add the `fsh-rec-peptid` entry (fertility-clinic framing — IVF male-factor + ICSI sperm-prep protocol). WADA-banned year-round (S2 Peptide Hormones).",
  "keyInfo": [
    {"label": "Mechanism", "value": "Recombinant FSH (CHO-expressed) — selective Sertoli FSHR agonist, NO LH activity"},
    {"label": "Dosing (PCT azoospermia recovery)", "value": "75-150 IU EOD × 4-12 weeks"},
    {"label": "Half-life", "value": "~24-36 hours (recombinant)"},
    {"label": "Onset", "value": "Inhibin-B rise 2-4 weeks, sperm count rise 3-9 months"},
    {"label": "Legal status", "value": "EMA Rx Gonal-F (1995) + Puregon (1996), FDA Rx (1997), WADA S2 (banned)"}
  ],
  "mechanism": "FSH-rec is a recombinant glycoprotein structurally identical to natural follicle-stimulating hormone (α + β subunit, glycosylation pattern similar to endogenous FSH). Biotechnological source: CHO cell line genetically modified to express human FSH-α + FSH-β genes (co-transfection of two plasmids). Activity: exclusively Sertoli-cell FSHR (FSH receptor) agonism; Leydig cells are NOT stimulated (since Leydig LHCGR is LH-specific). FSH effect: spermatogenesis regulation (Sertoli-cell-mediated maturation → spermatogonia counting), inhibin-B production (Sertoli marker), androgen-binding protein (ABP) synthesis. In AAS-PCT context, Sertoli stimulus does NOT replace Leydig stimulus (Test rise on FSH-rec not expected) — hence the classic protocol uses HCG + FSH-rec dual stimulus.",
  "legalStatus": "USA: FDA Rx Gonal-F (Merck Serono 1997 approval), Follistim (Organon 1997). EU: EMA Rx Gonal-F (1995), Puregon (1996). HU + PL: registered (Gonal-F, Puregon Rx). WADA: S2.2 Peptide Hormones (banned in-competition + out-of-competition).",
  "onsetTime": "Inhibin-B rise 2-4 weeks, sperm count rise 3-9 months",
  "halfLife": "~24-36 hours (recombinant FSH, SC injection)",
  "halfLifeActive": "Clinical effect 3-5 days (single dose)",
  "interactionsWith": ["hcg-perf", "hmg-perf", "gonadorelin", "kisspeptin-10"],
  "aromatization": "No direct aromatization — FSH does NOT stimulate Leydig Test production, so endogenous Test rise only happens when combined with HCG. FSH-rec monotherapy doesn't elevate E2 levels clinically.",
  "hepatotoxicity": "No hepatic stress — recombinant protein SC injection.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not an AAS; selective Sertoli stimulus)",
  "bindingAffinity": "FSH-FSHR Kd ~0.1 nM, receptor exclusively expressed on Sertoli cells. Higher purity than urinary-extracted HMG FSH effect.",
  "detectionWindow": "WADA-accredited immunoassay urinary FSH detection — recombinant FSH marker distinguishable from endogenous FSH by specific glycosylation pattern (Bidlingmaier 2010s publications).",
  "benefits": [
    "Selective Sertoli stimulus (spermatogenesis recovery emphasis)",
    "Higher purity than HMG (urinary-extracted FSH-LH mix)",
    "Broad clinical trial database (fertility-clinic 25+ years)",
    "Pre-filled pen-syringe convenient dosing (Gonal-F injection pen)",
    "Standardized activity (recombinant batch-consistent)"
  ],
  "quickStart": [
    "Sertoli-emphasis protocol: 75-150 IU EOD × 4-12 weeks + HCG mid-cycle (Leydig stimulus decoupled)",
    "Reconstitution: pre-filled pen (Gonal-F) or ampoule + bact water (Puregon ampoule)",
    "Pen dosing: in 12.5 IU calibrated steps (Gonal-F multi-dose pen 300/450/900 IU cartridge)",
    "SC injection (abdominal or thigh tissue, 27-30G syringe)",
    "Storage: pre-filled pen 2-8°C for 28 days (liquid solution), lyophilized ampoule room temperature",
    "Pricing: Gonal-F 75 IU pen ~€300-400 EU pharmacy; long-term cost adds up",
    "Bloodwork: inhibin-B (Sertoli marker, baseline + 4 weeks + 12 weeks), sperm analysis (3-9 months)"
  ],
  "expectations": [
    {"label": "Weeks 1-2", "body": "Sertoli restart begins, inhibin-B still low (measurable rise at weeks 3-4). Symptomatic change minimal."},
    {"label": "Week 4", "body": "Inhibin-B rises measurably (Sertoli activity restoration). Spermatogenesis cycle is 64-74 days, so visible sperm count rise occurs 8-12 weeks later."},
    {"label": "Months 3-9", "body": "Sperm count return measurable (varies by protocol). For long-term recovery, 3-6 months needed after HMG bridge."},
    {"label": "Post-protocol", "body": "Sperm analysis confirms count + motility. If fertility-success goal → IVF/ICSI sperm-prep context."}
  ],
  "quality": {
    "pure": [
      "Gonal-F 75 IU pre-filled pen (Merck Serono) — Rx pharma-grade (EU + USA)",
      "Gonal-F 300/450/900 IU multi-dose cartridge (Merck Serono) — Rx, more cost-effective on long protocols",
      "Puregon/Follistim 50/75/100/150 IU ampoule (Organon) — Rx pharma-grade",
      "UGL recombinant FSH — RARE (recombinant production complex, few UGL sources), HPLC + immunoassay-tested source mandatory",
      "Indian biosimilar (Folicare, Recagon) — available at some EU pharmacies, pharma-grade"
    ],
    "caution": [
      "High pricing — €300-400/75 IU vial vs Menopur €20-25/75 IU; for long-term recovery HMG is more cost-effective",
      "Sertoli-only emphasis — separate Leydig stimulus needed (HCG or endogenous LH recovery)",
      "OHSS risk (Ovarian Hyperstimulation Syndrome) in female indication — male patient N/A",
      "In Klinefelter syndrome FSH-rec ineffective (Sertoli defect primary origin)"
    ],
    "avoid": [
      "Klinefelter syndrome or other Y-chromosome deletion (Sertoli-primary defect)",
      "Active testicular tumor or past germ-cell tumor",
      "History of prostate carcinoma",
      "Hypersensitivity to FSH or CHO-cell-derived excipient"
    ]
  },
  "interactions": [
    "HCG combination: standard 'HCG + FSH-rec' dual-stimulus full-axis restart (LH-Leydig + FSH-Sertoli separately)",
    "HMG alternative: if cost-effectiveness matters and LH stimulus is also needed → HMG (mixed FSH+LH) can substitute",
    "SERM bridge (Nolvadex/Clomid): standard post-protocol PCT",
    "Gonadorelin: hypothalamic upstream stimulus, FSH-rec downstream — sequential protocol optionally",
    "TRT: NOT combinable (Sertoli FSHR downregulation under chronic Test exposure)"
  ],
  "studies": [
    {"title": "Fertility outcomes in male adults with congenital hypogonadotropic hypogonadism treated during puberty with human chorionic gonadotropin and recombinant follicle stimulating hormone.", "authors": "Grob F, Keshwani R, Angley E", "journal": "J Paediatr Child Health", "pmid": "38572627"},
    {"title": "Congenital combined pituitary hormone deficiency patients have better responses to gonadotrophin-induced spermatogenesis than idiopathic hypogonadotropic hypogonadism patients.", "authors": "Mao J, Xu H, Wang X, Wu X, Nie M, Zhang H, Han B, Liu Z, Zhang K, Lian S, Lu S, Wang X, Chen N, Sun B, Liu J, Cui Q", "journal": "Hum Reprod", "pmid": "26141714"},
    {"title": "Addition of recombinant follicle-stimulating hormone to human chorionic gonadotropin treatment in adolescents and young adults with hypogonadotropic hypogonadism promotes normal testicular growth and may promote early spermatogenesis.", "authors": "Zacharin M, Sabin MA, Nair VV, Nicolaides R", "journal": "Fertil Steril", "pmid": "22763096"}
  ],
  "faq": [
    {"q": "FSH-rec vs HMG — when is selective FSH needed?", "a": "Two scenarios: (1) cost-effectiveness: HMG (~€20-25/75 IU) much cheaper than FSH-rec (~€300-400/75 IU) — BUT HMG provides mixed FSH+LH, which is superfluous if HCG already provides separate LH stimulus. (2) Pure Sertoli emphasis goal: if LH is stabilized through another route (HCG bridge or endogenous low-LH restart), and only Sertoli stimulus is needed → FSH-rec selectivity is advantageous. In clinical practice HMG + HCG is often more cost-effective than FSH-rec + HCG."},
    {"q": "Speed of azoospermia recovery?", "a": "Slow process — spermatogenesis cycle is 64-74 days, so the first sperm count rise occurs in 8-12 weeks, full recovery in 3-9 months depending on the extent of hard suppression. Clinical practice per Liu 2002 PMID 11870114: FSH-rec 150 IU EOD × 12-24 weeks, combined with HCG 1000-2000 IU EOD. Spermatogenesis restoration in azoospermic men 60-80% (depending on hard-suppression extent and duration)."},
    {"q": "Cost?", "a": "High. Gonal-F 75 IU pre-filled pen €300-400, Puregon ampoule €280-350. On a long-term protocol (12-24 weeks) cumulative cost can reach €5000-15000. Cost-effective alternatives: (1) HMG (Menopur) ~€20-25/75 IU LH-FSH mixed; (2) Indian biosimilar (Folicare, Recagon) ~€100-150/75 IU. Clinically, all three are effective; only purity level and FSH selectivity differ."},
    {"q": "Can it be used for persistent sterility?", "a": "Yes — FSH-rec's primary clinical indication is male infertility associated with hypogonadotropic hypogonadism (Kallmann syndrome, idiopathic secondary hypogonadism, hypothalamic injury). AAS-mediated secondary hypogonadism (anabolic-steroid-induced hypogonadism, ASIH) is a similar mechanism, so the clinical protocol transfers. 6-12 months FSH-rec + HCG combination expects 60-80% sperm recovery, depending on hard-suppression extent."}
  ],
  "related": ["hcg-perf", "hmg-perf", "gonadorelin", "kisspeptin-10"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 75, "medium": 112.5, "high": 150},
    "unit": "IU/dose (SC, EOD frequency)",
    "note": "Azoospermia recovery protocol: 75-150 IU EOD × 4-12 weeks, combined with HCG (HCG 1000-2000 IU EOD). Single-protocol goal 12-24 weeks. SC injection (abdominal or thigh tissue, 27-30G syringe). Pen dosing more convenient on chronic protocols. NOT monotherapy (FSH-only Sertoli stimulus → Leydig functionality needed separately)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-protocol",
      "timing": "Post long-cycle 4-6 weeks rest, or hard-suppression documented azoospermia",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, Prolactin, inhibin-B (Sertoli baseline), sperm analysis (baseline azoospermia confirmation), ALT, AST.",
      "purpose": "Baseline for spermatogenesis recovery + Sertoli activity tracking. Exclude Klinefelter or Y-chromosome deletion via genetic test (karyotype + AZF microdeletion screening)."
    },
    "midCycle": {
      "label": "Mid-protocol (week 4)",
      "timing": "Start +4 weeks",
      "markers": "FSH (recombinant control), inhibin-B (Sertoli activity marker — MANDATORY), Total Test (HCG co-admin effect), E2.",
      "purpose": "Inhibin-B rise is the indicator of Sertoli restart. If inhibin-B does NOT rise within 4 weeks, consider dose increase (150 → 225 IU EOD)."
    },
    "postCycle": {
      "label": "Protocol end + spermatogenesis recovery confirmation",
      "timing": "Last dose +8 weeks and +12 weeks",
      "markers": "Sperm analysis (count + motility + morphology), inhibin-B, Total Test, LH, FSH.",
      "purpose": "Spermatogenesis recovery confirmation. If sperm count < 5 million/mL and inhibin-B < normal range → consider +12 weeks extension (Liu 2002 protocol allows up to 24 weeks)."
    },
    "cruise": {
      "label": "Long-term cycle-to-cycle fertility preservation",
      "timing": "Yearly sperm analysis + inhibin-B",
      "markers": "Sperm cryopreservation option (after single-cycle recovery, sperm-bank).",
      "purpose": "In multi-cycle AAS users, for fertility-preservation goal, yearly FSH-rec bridge protocol (4-6 weeks) can mitigate long-term azoospermia risk."
    }
  }
}
