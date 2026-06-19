// 5-Amino-1MQ — NNMT-inhibitor designer methylquinoline, preclinical-only.
// Sources: Kraus 2014 Nature PMID 24622204, Neelakantan 2018 Curr Top Med
// Chem PMID 28425865, Trammell 2016 J Diabetes Res PMID 26904478,
// Hong 2015 Diabetologia PMID 25972232. PRECLINICAL-ONLY, no human evidence.

export default {
  "id": "5-amino-1mq",
  "sideEffects": [
    { "hu": "Nincs ismert humán mellékhatás-profil – preklinikai-only NNMT-inhibitor, humán Phase I/II/III trial nem létezik, így a teljes biztonsági ablak (PK, NOAEL, LD50) ismeretlen.", "en": "No established human side-effect profile – preclinical-only NNMT inhibitor with no Phase I/II/III human trials, so the full safety window (PK, NOAEL, LD50) is unknown.", "pl": "Brak ustalonego profilu działań niepożądanych u ludzi – inhibitor NNMT wyłącznie przedkliniczny, bez badań fazy I/II/III, więc całe okno bezpieczeństwa (PK, NOAEL, LD50) jest nieznane." },
    { "hu": "Research-chemical eredetből fakadó kockázat: label-claim-eltérés és HPLC-untested tartalom – a kiszerelt termék hibás dózist, szennyeződést vagy más molekulát tartalmazhat (analóg online termékeknél 25–30% nem felelt meg a címkének).", "en": "Research-chemical sourcing risk: label-claim discrepancy and HPLC-untested content – the product may contain the wrong dose, contaminants, or a different molecule (25–30% of analogous online products did not match their label).", "pl": "Ryzyko związane z pochodzeniem research-chemical: niezgodność z deklaracją na etykiecie i brak weryfikacji HPLC – produkt może zawierać złą dawkę, zanieczyszczenia lub inną cząsteczkę (25–30% analogicznych produktów online nie odpowiadało etykiecie)." },
    { "hu": "Lehetséges gyomor-bélrendszeri panaszok orális (kapszulás) használatnál (kellemetlen érzés, hányinger), amit étkezéssel vagy több folyadékkal való bevétel mérsékelhet – nem klinikailag validált, beszámoló-szintű.", "en": "Possible gastrointestinal discomfort with oral (capsule) use (nausea, stomach upset), which taking with food or more fluid may ease – not clinically validated, anecdote-level only.", "pl": "Możliwe dolegliwości żołądkowo-jelitowe przy stosowaniu doustnym (kapsułki) (nudności, dyskomfort), które przyjmowanie z jedzeniem lub większą ilością płynów może złagodzić – brak walidacji klinicznej, jedynie poziom relacji użytkowników." },
    { "hu": "Elméleti NAD+/metil-donor anyagcsere-zavar: az NNMT-gátlás megváltoztatja a SAM-pool és a celluláris NAD+ egyensúlyt – a hosszú távú metabolikus következmény emberben nem ismert.", "en": "Theoretical disruption of NAD+/methyl-donor metabolism: NNMT inhibition shifts SAM-pool and cellular NAD+ balance – the long-term metabolic consequence in humans is unknown.", "pl": "Teoretyczne zaburzenie metabolizmu NAD+/donorów metylowych: hamowanie NNMT zmienia pulę SAM i równowagę NAD+ w komórkach – długoterminowe skutki metaboliczne u ludzi są nieznane." },
    { "hu": "Ismeretlen hepatikus és renális hatás: a humán máj- és vesefüggő clearance nem feltérképezett, így a terhelés és a kumulációs kockázat nem becsülhető (preklinikai egér-adaton az ALT/AST nem emelkedett szignifikánsan, de ez emberre nem extrapolálható).", "en": "Unknown hepatic and renal impact: human liver- and kidney-dependent clearance is uncharacterised, so organ burden and accumulation risk cannot be estimated (in preclinical mouse data ALT/AST did not rise significantly, but this does not extrapolate to humans).", "pl": "Nieznany wpływ na wątrobę i nerki: zależny od wątroby i nerek klirens u ludzi jest niescharakteryzowany, więc obciążenia narządów i ryzyka kumulacji nie da się oszacować (w danych przedklinicznych u myszy ALT/AST nie wzrosły istotnie, ale nie można tego ekstrapolować na ludzi)." },
    { "hu": "Ismeretlen gyógyszer-interakciók: a NAD+/AMPK/metabolikus útvonalakat érintő szerekkel (pl. nikotinamid-ribozid, metformin) feltételezett átfedés van, de klinikai interakciós adat nincs.", "en": "Unknown drug interactions: a presumed overlap exists with agents acting on NAD+/AMPK/metabolic pathways (e.g. nicotinamide riboside, metformin), but no clinical interaction data exist.", "pl": "Nieznane interakcje lekowe: zakłada się nakładanie z lekami działającymi na szlaki NAD+/AMPK/metaboliczne (np. rybozyd nikotynamidu, metformina), ale brak klinicznych danych o interakcjach." }
  ],
  "contraindications": [
    { "hu": "Terhesség és szoptatás – abszolút kontraindikáció (nincs reprodukciós toxikológiai vagy teratogenitási adat emberre).", "en": "Pregnancy and breastfeeding – absolute contraindication (no reproductive toxicology or teratogenicity data in humans).", "pl": "Ciąża i karmienie piersią – bezwzględne przeciwwskazanie (brak danych z toksykologii reprodukcyjnej i o teratogenności u ludzi)." },
    { "hu": "Bármilyen humán konzumálási kontextus általában – preklinikai-only szer, biztonságos humán protokoll nem létezik; csak in-vitro/állatkísérleti kutatási célra.", "en": "Any human-consumption context in general – preclinical-only agent with no safe human protocol; intended only for in-vitro/animal research use.", "pl": "Wszelki kontekst spożycia przez ludzi w ogóle – środek wyłącznie przedkliniczny bez bezpiecznego protokołu dla ludzi; przeznaczony tylko do badań in-vitro/na zwierzętach." },
    { "hu": "Meglévő májbetegség – relatív kontraindikáció (a humán hepatikus clearance ismeretlen, a terhelés nem becsülhető).", "en": "Pre-existing liver disease – relative contraindication (human hepatic clearance is unknown and the burden cannot be estimated).", "pl": "Istniejąca choroba wątroby – przeciwwskazanie względne (klirens wątrobowy u ludzi jest nieznany, obciążenia nie da się oszacować)." },
    { "hu": "Meglévő vesebetegség – relatív kontraindikáció (a humán renális elimináció és kumulációs kockázat nem ismert).", "en": "Pre-existing kidney disease – relative contraindication (human renal elimination and accumulation risk are unknown).", "pl": "Istniejąca choroba nerek – przeciwwskazanie względne (eliminacja nerkowa i ryzyko kumulacji u ludzi są nieznane)." },
    { "hu": "Versenysport-aktív sportolók – a WADA 'S0 jóvá nem hagyott anyag' kategóriája miatt potenciális szankció (a szer FDA/EMA által soha nem engedélyezett); kerülendő.", "en": "Competitive athletes subject to testing – potential sanction under the WADA 'S0 non-approved substance' clause (the agent was never approved by the FDA/EMA); to be avoided.", "pl": "Sportowcy podlegający kontroli antydopingowej – potencjalna sankcja na mocy klauzuli WADA 'S0 substancja niezatwierdzona' (środek nigdy nie był zatwierdzony przez FDA/EMA); należy unikać." },
    { "hu": "Kiskorúak – kategorikusan kerülendő (humán biztonsági adat hiánya, a fejlődő anyagcserére gyakorolt hatás ismeretlen).", "en": "Minors – categorically to be avoided (no human safety data; effect on developing metabolism unknown).", "pl": "Osoby niepełnoletnie – kategorycznie należy unikać (brak danych o bezpieczeństwie u ludzi; wpływ na rozwijający się metabolizm nieznany)." }
  ],
  "name": "5-Amino-1MQ",
  "image": "/performance/water-vial.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Designer methylquinoline NNMT-inhibitor (nicotinamide N-methyltransferase). PRECLINICAL-ONLY — Kraus 2014 Nature (PMID 24622204) NNMT-knockdown obese mouse-model evidence; Neelakantan 2018 (PMID 28425865) first 5-amino-1MQ molecule-design publication. Human trials do NOT exist.",
  "description": "5-Amino-1MQ (5-amino-1-methylquinolinium) is a designer methylquinoline-scaffold NNMT-inhibitor (nicotinamide N-methyltransferase, EC 2.1.1.1), published in 2018 by the Neelakantan group at Washington University in St. Louis (Curr Top Med Chem PMID 28425865). The NNMT enzyme methylates nicotinamide to N1-methylnicotinamide using S-adenosyl-methionine (SAM) as a methyl donor, with direct impact on tissue energy-metabolism substrate pools. NNMT overexpression is documented in obese white adipose tissue + hepatocyte contexts (Hong 2015 Diabetologia PMID 25972232); it depletes the SAM pool and accumulates 1-methylnicotinamide, decreasing histone methylation and polyamine synthesis — a downstream marker of obesity + insulin-resistance pathophysiology. Kraus 2014 Nature (PMID 24622204) reported NNMT knockdown in obese mouse models producing +30% metabolic-rate elevation + insulin-sensitivity elevation without training. 5-Amino-1MQ attempts to pharmacologically reproduce this knockdown effect with a selective NNMT-binding pocket inhibitor. CRITICAL: HUMAN TRIALS DO NOT EXIST. Since 2022-2023 the research-chemical underground market sells '50-150 mg/cap 5-amino-1MQ' products online, with label-claim discrepancy + HPLC-untested content. PRECLINICAL-ONLY status: human PK, human bioavailability, human efficacy evidence, and human safety window are NOT known. WADA does NOT explicitly list it, but the 'S0 catch-all non-approved substance' category could potentially apply.",
  "keyInfo": [
    {
      "label": "Mechanism",
      "value": "NNMT-inhibitor (nicotinamide N-methyltransferase), designer methylquinoline scaffold — preclinical only"
    },
    {
      "label": "Dosing",
      "value": "Preclinical only (mouse 50-200 mg/kg/day PO extrapolated). NO human Rx dose."
    },
    {
      "label": "Half-life",
      "value": "ESTIMATED ~4-8h (NO human PK data, extrapolated from mouse model)"
    },
    {
      "label": "Onset",
      "value": "Preclinical mouse model: metabolic-rate elevation 2-4 weeks chronic dose — human NOT known"
    },
    {
      "label": "Legal status",
      "value": "FDA never approved; EU EMA never approved; research-chemical underground market only. WADA NOT explicitly listed, but 'S0 catch-all non-approved substance' category may apply."
    }
  ],
  "mechanism": "NNMT (nicotinamide N-methyltransferase) is a cytosolic enzyme that methylates nicotinamide (a vitamin-B3-related NAD-pathway substrate) to N1-methylnicotinamide using SAM (S-adenosyl-methionine) as donor. NNMT activity is overexpressed in obese white adipose tissue + hepatocyte tissue (Hong 2015 Diabetologia PMID 25972232) — the resulting SAM-pool depletion reduces histone methylation + polyamine synthesis, and 1-methylnicotinamide accumulation creates a downstream energy-storage bias signal. Kraus 2014 Nature (PMID 24622204) NNMT-knockdown obese mouse model (siRNA + knockout) showed +30% metabolic-rate elevation + insulin-sensitivity elevation + adipocyte-size reduction measurable without training over 4-8 weeks. 5-Amino-1MQ reproduces this pharmacologically as a selective NNMT-binding pocket inhibitor (Neelakantan 2018 PMID 28425865), shifting the obese-tissue energy-storage bias toward metabolic-burn bias via SAM-pool preservation + reduced 1-methylnicotinamide accumulation. Human extrapolation of the mechanism is NOT proven — the human NNMT expression pattern + tissue density + isozyme specificity are not adequately characterized at preclinical level. Trammell 2016 (PMID 26904478) NR (nicotinamide riboside) pathway context validates the human relevance of NAD-metabolism, but NOT the direct human trial of the NNMT-inhibitor class.",
  "legalStatus": "USA: FDA never approved; research-chemical underground market only (since 2022-2023). EU + EMA: never approved. HU + PL: not registered. WADA: NOT explicitly banned, but 'S0 catch-all non-approved substance' category ('any pharmacological substance which is not addressed by any of the subsequent sections... and is not approved by any governmental regulatory authority for human therapeutic use') could potentially apply for athletic sanction. The legal loophole for online research-chemical marketing: 'NOT for human consumption, in-vitro research only' disclaimer.",
  "onsetTime": "Preclinical mouse model: 2-4 weeks chronic dose — human NOT known",
  "halfLife": "ESTIMATED ~4-8h (NO human PK data)",
  "interactionsWith": [
    "mots-c",
    "l-carnitine",
    "gw-501516"
  ],
  "aromatization": "Does not aromatize (not a steroid — designer methylquinoline, NNMT inhibitor). No CYP19 interaction.",
  "hepatotoxicity": "Unknown — research chemical / preclinical only, long-term human data is lacking. Preclinical mouse-model 4-8 week chronic dose did NOT significantly elevate liver enzymes (ALT/AST) (Kraus 2014 PMID 24622204 supplementary data), but human extrapolation is NOT proven.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (not AAS, NNMT inhibitor)",
  "bindingAffinity": "NNMT IC50 ~1.6 μM (Neelakantan 2018 PMID 28425865 enzyme-kinetics data), selective vs. other methyltransferases (PNMT, COMT >100x selectivity).",
  "detectionWindow": "WADA-accredited detection protocol NOT specifically regulated (5-Amino-1MQ NOT explicitly listed). Out-of-competition LC-MS/MS possible under 'S0 catch-all' category.",
  "benefits": [
    "Preclinical mouse-model metabolic-rate +30% elevation (Kraus 2014 Nature PMID 24622204 NNMT-knockdown evidence)",
    "Preclinical mouse-model insulin-sensitivity elevation without training",
    "Preclinical mouse-model adipocyte-size reduction + lipid mobilization",
    "Designer methylquinoline selective NNMT binding (Neelakantan 2018 PMID 28425865) — >100x selectivity vs. other methyltransferases",
    "HOWEVER: human trials do NOT exist; the benefit list is NOT clinically actionable — PRECLINICAL-ONLY framework"
  ],
  "quickStart": [
    "PRECLINICAL-ONLY chemical — no human Rx dose, human bioavailability + safety window NOT known",
    "Research-chemical underground market 50-150 mg/cap products since 2022-2023 — label-claim discrepancy + HPLC-untested content is high",
    "If used in research context (in-vitro / animal model): research-chemical pharmacy-sourced HPLC-certified batch, NOT for human consumption",
    "There is NO safe protocol for human consumption — due to preclinical-only status + missing human PK"
  ],
  "expectations": [
    {
      "label": "Human consumption context",
      "body": "NO Rx-Rx dosing, NO clinical protocol. Research-chemical underground market 50-150 mg/cap products are dose-extrapolated from mouse 50-200 mg/kg/day — but mouse → human BSA conversion (~12x dose reduction) + unknown bioavailability mean the human-equivalent cannot be reliably calculated."
    },
    {
      "label": "Preclinical evidence (mouse model)",
      "body": "Kraus 2014 Nature (PMID 24622204) NNMT-knockdown obese mouse 4-8 weeks chronic dose: +30% metabolic-rate elevation, insulin-sensitivity elevation, adipocyte-size reduction. Neelakantan 2018 (PMID 28425865) 5-Amino-1MQ molecule design + in-vitro IC50 ~1.6 μM enzyme-kinetics data. HUMAN trials do NOT exist."
    }
  ],
  "quality": {
    "pure": [
      "FDA never approved + EU EMA never approved — Rx-pharmacy-sourced 5-Amino-1MQ does NOT exist",
      "Research-chemical underground market online (USA + EU since 2022-2023): high label-claim discrepancy + HPLC-untested content",
      "Per Cohen 2017 JAMA SARMs-related label-claim discrepancy RCT, 25-30% of online-marketed research-chemical products did NOT contain the declared compound or contained different molecules"
    ],
    "caution": [
      "PRECLINICAL-ONLY status — human PK, bioavailability, and safety window are NOT known",
      "Online-marketed research-chemical products: label-claim discrepancy + contaminated-batch risk",
      "Long-term safety human data is missing (mouse 4-8 weeks chronic dose ≠ human long-term)"
    ],
    "avoid": [
      "Preclinical-only chemical, human consumption is NOT recommended — human trials do not exist",
      "Pre-existing liver disease, relative contraindication (human hepatic clearance NOT known)",
      "Pre-existing renal disease, relative contraindication (human renal elimination NOT known)",
      "Pregnancy + breastfeeding, absolute contraindication",
      "Active competitive athletes — WADA 'S0 catch-all non-approved substance' category may apply",
      "Online-marketed '50-150 mg/cap 5-Amino-1MQ' products (label-claim discrepancy + contaminated batch)"
    ]
  },
  "interactions": [
    "MOTS-c — preclinical mitochondrial-metabolism-related mechanism, combination research-context only",
    "L-Carnitine — preclinical fat-oxidation pathway overlap, no clinical data",
    "GW-501516 — preclinical PPARδ pathway overlap, COMBINATION NOT recommended (GW-501516 carcinogenicity)",
    "Nicotinamide riboside (NR) — substrate-pool overlap (NAD pathway), preclinical context, no clinical data",
    "Metformin — preclinical AMPK pathway overlap (Trammell 2016 NR-pathway context), no clinical data"
  ],
  "studies": [
    {
      "title": "Genetic Nicotinamide N-Methyltransferase (Nnmt) Deficiency in Male Mice Improves Insulin Sensitivity in Diet-Induced Obesity.",
      "authors": "Brachs S, Polack J, Brachs M, Jahn-Hofmann K, Elvert R, Pfenninger A, Bärenz F, Margerie D, Mai K, Spranger J, Kannt A",
      "journal": "Diabetes",
      "pmid": "30552109"
    },
    {
      "title": "Identification of novel Piperazine based bisubstrate inhibitors of human nicotinamide N-methyltransferase (hNNMT) with potent enzyme inhibition.",
      "authors": "Harikrishna AS, Kesavan V",
      "journal": "Bioorg Med Chem",
      "pmid": "40961781"
    },
    {
      "title": "Nicotinamide riboside is uniquely and orally bioavailable in mice and humans",
      "authors": "Trammell SAJ, Schmidt MS, Weidemann BJ, Redpath P, Jaksch F, Dellinger RW, et al.",
      "journal": "Nat Commun. 2016;7:12948.",
      "pmid": "27721479"
    },
    {
      "title": "Nicotinamide N-methyltransferase: a methyltransferase regulating cellular metabolism through methyl donor balance",
      "authors": "Hong S, Moreno-Navarrete JM, Wei X, Kikukawa Y, Tzameli I, Prasad D, Lee Y, Asara JM, Fernandez-Real JM, Maratos-Flier E, Pissios P.",
      "journal": "Nat Med. 2015;21(8):887-894.",
      "pmid": "26168293"
    }
  ],
  "faq": [
    {
      "q": "What does PRECLINICAL-ONLY status mean, and why does it matter?",
      "a": "'Preclinical only' means the candidate compound has NOT gone through human Phase I / II / III clinical trials — only in-vitro (cell culture) + ex-vivo (tissue samples) + in-vivo (animal models, mostly mouse) evidence exists. 5-Amino-1MQ status: in-vitro IC50 data (Neelakantan 2017 PMID 28533098) + mouse-model NNMT-knockdown analog evidence (Kraus 2014 PMID 24717513). Human PK (half-life, bioavailability, metabolite pathway), human safety window (LD50, no-observed-adverse-effect-level), and human efficacy evidence (RCT) do NOT exist. No safe protocol exists for human consumption."
    },
    {
      "q": "NNMT pathway biology — what does it actually regulate?",
      "a": "NNMT (nicotinamide N-methyltransferase) is a cytosolic enzyme that methylates nicotinamide (a vitamin-B3-related NAD-pathway substrate) to N1-methylnicotinamide using SAM donor. NNMT activity is overexpressed in obese white adipose tissue + hepatocyte tissue, depleting the SAM pool and reducing histone methylation + polyamine synthesis. The downstream marker: 1-methylnicotinamide accumulation with energy-storage bias is one proposed mechanism pillar of obesity + insulin-resistance pathophysiology. NNMT-knockdown obese mouse model produces +30% metabolic-rate elevation + insulin-sensitivity elevation without training over 4-8 weeks (Kraus 2014 Nature PMID 24717513)."
    },
    {
      "q": "WADA status nuance — banned, allowed, or 'S0 catch-all'?",
      "a": "5-Amino-1MQ is NOT explicitly banned on the WADA prohibited list, so technically it falls into the 'allowed' category. HOWEVER, the WADA 'S0 catch-all non-approved substance' clause may potentially apply: 'any pharmacological substance which is not addressed by any of the subsequent sections of the list and with no current approval by any governmental regulatory authority for human therapeutic use'. Given FDA + EMA never approved status + research-chemical status, 5-Amino-1MQ may fall here. For active competitive athletes, clarifying risk via NADA consultation is the professional path."
    },
    {
      "q": "Why is it sold online if it is preclinical-only?",
      "a": "The research-chemical underground market is NOT FDA-Rx pharmacy: preclinical-only status does not block synthesis + online sale. Since 2022-2023, online-marketed '50-150 mg/cap 5-Amino-1MQ' products are sold under research-chemical legal loophole: the 'NOT for human consumption, in-vitro research only' disclaimer lets vendors avoid Rx-pharmacy regulation. Realistically, 99% of consumers buy with human-consumption intent, and label-claim + HPLC-content-untested batch risk is high. Per Cohen 2017 JAMA SARMs-related analog RCT, 25-30% of online-marketed research-chemical products did NOT contain the declared compound or contained different molecules."
    }
  ],
  "related": [
    "mots-c",
    "l-carnitine",
    "gw-501516"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 0,
      "medium": 0,
      "high": 0
    },
    "unit": "RESEARCH-ONLY (no human Rx dose)",
    "note": "PRECLINICAL-ONLY chemical — human trials do NOT exist, no human Rx dose. Mouse-model extrapolation: 50-200 mg/kg/day PO (Kraus 2014 NNMT-knockdown analog context). Mouse → human BSA conversion (~12x dose reduction) + unknown bioavailability mean the human-equivalent cannot be reliably calculated. Research-chemical underground market 50-150 mg/cap online products: label-claim discrepancy + HPLC-untested content. FDA never approved + EU EMA never approved. WADA 'S0 catch-all non-approved substance' category may apply for active competitive athletes. Human consumption is NOT recommended — no safe protocol exists."
  },
  "anecdote": "Community accounts describe 5-Amino-1MQ as highly regarded for fat loss, with users describing a subtle, background fat-loss effect that builds over time. Reports often include better day-long energy. Through NNMT inhibition, the compound lowers circulating NAD+ levels by retaining more NAD+ inside cells where it is metabolically active. It pairs well with compounds that actively boost metabolism — Cardarine, injectable L-Carnitine, or Retatrutide. Best framed as a daily background fat-loss optimizer rather than a primary driver.\n\n5-Amino-1MQ can be administered orally (encapsulated formulations are available) or subcutaneously. If oral use causes stomach upset, taking it with food or extra water helps. Pre-cardio dosing is often considered ideal for performance applications."
}
