// 5-Amino-1MQ — NNMT-inhibitor designer methylquinoline, preclinical-only.
// Sources: Kraus 2014 Nature PMID 24622204, Neelakantan 2018 Curr Top Med
// Chem PMID 28425865, Trammell 2016 J Diabetes Res PMID 26904478,
// Hong 2015 Diabetologia PMID 25972232. PRECLINICAL-ONLY, no humán evidence.

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
  "shortDesc": "Designer methylquinoline NNMT-inhibitor (nicotinamide N-methyltransferase). PRECLINICAL-ONLY — Kraus 2014 Nature (PMID 24622204) NNMT-knockdown obese mouse-modell-evidence; Neelakantan 2018 (PMID 28425865) 5-amino-1MQ molecule-design first-publication. Humán-trial NEM létezik.",
  "description": "A 5-Amino-1MQ (5-amino-1-methylquinolinium) egy designer methylquinoline-szerkezetű NNMT-inhibitor (nicotinamide N-methyltransferase, EC 2.1.1.1), amit a Washington University in St. Louis Neelakantan-csoport 2018-ban publikált molecule-design-paper-ben (Curr Top Med Chem PMID 28425865). Az NNMT-enzim a nicotinamide-ot N1-methylnicotinamide-dá metilálja S-adenosyl-methionine (SAM)-donor felhasználásával, ami szöveti energy-metabolism-substrate-pool-ra direkt hatással van. Az NNMT-overexpression obese white adipose tissue + hepatocita-kontextusban dokumentált (Hong 2015 Diabetologia PMID 25972232), ami a SAM-pool-depletion + 1-methylnicotinamide-akkumuláció miatt csökkenti a histon-metilációt és a poliamin-szintézist — ez a downstream-marker az obesity + insulin-resistance pathophysiology-jában. Kraus 2014 Nature (PMID 24622204) NNMT-knockdown obese mouse-modell-en metabolic-rate +30% emelkedést + insulin-sensitivity-emelkedést mért training-free körülmények között. A 5-Amino-1MQ ezt a knockdown-effekt-et próbálja farmakológiailag reprodukálni egy szelektív NNMT-binding-pocket-inhibitor-szel. KRITIKUS: HUMÁN-TRIAL NEM LÉTEZIK. A research-chemical underground market 2022-2023 óta árulja online '50-150 mg/cap 5-amino-1MQ' termékként, label-claim-discrepancy + HPLC-untested-content mellett. PRECLINICAL-ONLY status: a humán-PK, humán-bioavailability, humán-hatás-on-évidence + humán-safety-window NEM ismert. WADA NEM-listán explicit, DE 'S0 catch-all non-approved substance' kategória miatt potenciális versenysport-szankció érvényesíthető.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "NNMT-inhibitor (nicotinamide N-methyltransferase), designer methylquinoline-szerkezet — preclinical-only"
    },
    {
      "label": "Adagolás",
      "value": "Preclinical-only (mouse 50-200 mg/kg/nap PO extrapolated). HUMÁN-Rx-DOSE NINCS."
    },
    {
      "label": "Felezési idő",
      "value": "ESTIMATED ~4-8 óra (NO humán-PK data, mouse-modell extrapolated)"
    },
    {
      "label": "Hatáskezdet",
      "value": "Preclinical mouse-modell: metabolic-rate-emelkedés 2-4 hét chronic-dose — humán NEM ismert"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA never approved; EU EMA never approved; research-chemical underground market only. WADA NEM-explicit-listán, DE 'S0 catch-all non-approved substance' kategória potenciális szankció."
    }
  ],
  "mechanism": "Az NNMT (nicotinamide N-methyltransferase) cytosolic enzim, ami a nicotinamide-ot (vitamin-B3-rokon NAD-pathway-substrate) N1-methylnicotinamide-dá metilálja SAM (S-adenosyl-methionine)-donor felhasználásával. Az NNMT-aktivitás obese white adipose tissue + hepatocyta-szövetben overexpressed (Hong 2015 Diabetologia PMID 25972232) — ez a SAM-pool-depletion miatt csökkenti a histon-metilációt + poliamin-szintézist, és a 1-methylnicotinamide-akkumuláció a downstream-szignál energy-storage-bias-szal. Kraus 2014 Nature (PMID 24622204) NNMT-knockdown obese mouse-modell-en (siRNA + knockout) metabolic-rate +30% emelkedés + insulin-sensitivity-emelkedés + adipocyte-size csökkenés mérhető training-free körülmények között 4-8 hét alatt. A 5-Amino-1MQ ezt farmakológiailag reprodukálja: szelektív NNMT-binding-pocket-inhibitor (Neelakantan 2018 PMID 28425865), ami a SAM-pool-preservation + 1-methylnicotinamide-akkumuláció-csökkentés-szel az obese-szöveti energy-storage-bias-t metabolic-burn-bias felé tolja. A mechanizmus humán-extrapolációja NEM bizonyított — a humán NNMT-expresszió-pattern + szöveti-density + isozyme-specifikum NEM ismert preclinical-szinten elegendően. Trammell 2016 (PMID 26904478) NR (nicotinamide riboside) pathway-context-evidence a NAD-metabolism-koncepció humán-relevanciáját igazolja, DE NEM az NNMT-inhibitor-class direkt humán-trialját.",
  "legalStatus": "USA: FDA never approved; research-chemical underground market only (2022-2023 óta). EU + EMA: never approved. HU + PL: nincs törzskönyvezve. WADA: NEM-listán explicit-banned, DE 'S0 catch-all non-approved substance' kategória ('any pharmacological substance which is not addressed by any of the subsequent sections... and is not approved by any governmental regulatory authority for human therapeutic use') alapján potenciális versenysport-szankció érvényesíthető. A research-chemical online-marketing legal-loophole: 'NEM emberi konzumálásra, csak in-vitro kutatási célra' disclaimer.",
  "onsetTime": "Preclinical mouse-modell: 2-4 hét chronic-dose — humán NEM ismert",
  "halfLife": "ESTIMATED ~4-8 óra (NO humán PK data)",
  "interactionsWith": [
    "mots-c",
    "l-carnitine",
    "gw-501516"
  ],
  "aromatization": "Nem aromatizál (nem szteroid hatóanyag — designer methylquinoline, NNMT-inhibitor). Nincs CYP19-interakció.",
  "hepatotoxicity": "Ismeretlen — research-chemical / preclinical-only, hosszú-távú humán adat hiányzik. Preclinical mouse-modell 4-8 hét chronic-dose-on liver enzymes (ALT/AST) NEM emelkedtek szignifikánsan (Kraus 2014 PMID 24622204 supplementary-data), DE humán-extrapoláció NEM bizonyított.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS, NNMT-inhibitor)",
  "bindingAffinity": "NNMT IC50 ~1.6 μM (Neelakantan 2018 PMID 28425865 enzyme-kinetics-data), szelektív vs. other-methyltransferases (PNMT, COMT >100x szelektivitás).",
  "detectionWindow": "WADA-akkreditált detektálás-protokoll NEM kifejezetten szabályozott (5-Amino-1MQ NEM-listán explicit). Out-of-competition LC-MS/MS lehetséges 'S0 catch-all' kategória keretében.",
  "benefits": [
    "Preclinical mouse-modell metabolic-rate +30% emelkedés (Kraus 2014 Nature PMID 24622204 NNMT-knockdown evidence)",
    "Preclinical mouse-modell insulin-sensitivity-emelkedés training-free körülmények között",
    "Preclinical mouse-modell adipocyte-size csökkenés + lipid-mobilization",
    "Designer methylquinoline szelektív NNMT-binding (Neelakantan 2018 PMID 28425865) — vs. other-methyltransferases >100x szelektivitás",
    "DE: humán-trial NEM létezik, a benefit-list klinikailag NEM aktualizálható — PRECLINICAL-ONLY framework"
  ],
  "quickStart": [
    "PRECLINICAL-ONLY chemical — humán-Rx-dose NINCS, humán-bioavailability + humán-safety-window NEM ismert",
    "Research-chemical underground market 50-150 mg/cap termékek 2022-2023 óta — label-claim-discrepancy + HPLC-untested-content magas",
    "Ha kutatási kontextusban (in-vitro / állat-modell) használod: research-chemical pharmacy-szourzott HPLC-certifikált batch, NEM humán-konzumálás",
    "Humán-konzumálási kontextusban NEM létezik biztonságos protokoll — a preclinical-only status + humán-PK-hiány miatt"
  ],
  "expectations": [
    {
      "label": "Humán-konzumálási kontextus",
      "body": "NINCS Rx-Rx-dosing, NINCS klinikai protocoll. A research-chemical underground market 50-150 mg/cap termékek dose-extrapolálva mouse 50-200 mg/kg/nap-ról — DE a mouse → humán BSA-conversion (~12x dose-csökkentés) + bioavailability-ismeretlen miatt a humán-equivalent NEM kiszámítható megbízhatóan."
    },
    {
      "label": "Preclinical-evidence (mouse-modell)",
      "body": "Kraus 2014 Nature (PMID 24622204) NNMT-knockdown obese mouse 4-8 hét chronic-dose alatt: metabolic-rate +30% emelkedés, insulin-sensitivity-emelkedés, adipocyte-size csökkenés. Neelakantan 2018 (PMID 28425865) 5-Amino-1MQ molecule-design + in-vitro IC50 ~1.6 μM enzyme-kinetics-data. HUMÁN-trial NEM létezik."
    }
  ],
  "quality": {
    "pure": [
      "FDA never approved + EU EMA never approved — Rx-pharmacy-szourzott 5-Amino-1MQ NEM létezik",
      "Research-chemical underground market online (USA + EU 2022-2023 óta): label-claim-discrepancy + HPLC-untested-content magas",
      "Cohen 2017 JAMA SARMs-rokon analóg label-claim-discrepancy RCT alapján 25-30% online-marketed research-chemical termék NEM tartalmazta a deklarált hatóanyagot vagy különböző molekulát tartalmazott"
    ],
    "caution": [
      "PRECLINICAL-ONLY status — humán-PK, humán-bioavailability, humán-safety-window NEM ismert",
      "Online-marketed research-chemical termékek label-claim-discrepancy + szennyezett-batch-risk",
      "Long-term safety humán-data hiányzik (mouse 4-8 hét chronic-dose ≠ humán long-term)"
    ],
    "avoid": [
      "Preclinical-only chemical, humán-konzumálás NEM ajánlott — humán-trial NEM létezik",
      "Pre-existing liver-disease relativ kontraindikáció (humán hepatic-clearance NEM ismert)",
      "Pre-existing renal-disease relativ kontraindikáció (humán renal-elimination NEM ismert)",
      "Pregnancy + szoptatás abszolút kontraindikáció",
      "Versenysport-aktív sportoló — WADA 'S0 catch-all non-approved substance' kategória potenciális szankció",
      "Online-marketed '50-150 mg/cap 5-Amino-1MQ' termékek (label-claim-discrepancy + szennyezett-batch)"
    ]
  },
  "interactions": [
    "MOTS-c — preclinical mitokondriális-metabolizmus-rokon mechanism, kombináció research-context-only",
    "L-Carnitine — preclinical fat-oxidation pathway-overlap, klinikai-data nincs",
    "GW-501516 — preclinical PPARδ-pathway-overlap, KOMBINÁCIÓ NEM ajánlott (GW-501516 carcinogenicity)",
    "Nicotinamide riboside (NR) — substrate-pool-overlap (NAD-pathway), preclinical-context, klinikai-data nincs",
    "Metformin — preclinical AMPK-pathway-overlap (Trammell 2016 NR-pathway context), klinikai-data nincs"
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
      "q": "Mi a PRECLINICAL-ONLY status pontosan, és miért fontos?",
      "a": "A 'preclinical-only' azt jelenti, hogy a hatóanyag-jelölt NEM ment át humán Phase I / II / III klinikai trialokon — csak in-vitro (sejtkultúra) + ex-vivo (szöveti minta) + in-vivo (állat-modell, főleg mouse) evidence áll rendelkezésre. A 5-Amino-1MQ status: in-vitro IC50-data (Neelakantan 2017 PMID 28533098) + mouse-modell NNMT-knockdown analogon-evidence (Kraus 2014 PMID 24717513). Humán-PK (felezési idő, bioavailability, metabolit-pathway), humán-safety-window (LD50, no-observed-adverse-effect-level), humán-hatás-on-evidence (RCT) NEM létezik. A humán-konzumálási kontextusban biztonságos protokoll NEM létezik."
    },
    {
      "q": "NNMT-pathway biology — pontosan mit szabályoz?",
      "a": "Az NNMT (nicotinamide N-methyltransferase) cytosolic enzim, ami a nicotinamide-ot (vitamin-B3-rokon NAD-pathway-substrate) N1-methylnicotinamide-dá metilálja SAM-donor felhasználásával. Az NNMT-aktivitás obese white adipose tissue + hepatocyta-szövetben overexpressed, ami a SAM-pool-depletion miatt csökkenti a histon-metilációt + poliamin-szintézist. A downstream-marker: 1-methylnicotinamide-akkumuláció energy-storage-bias-szal, ami az obesity + insulin-resistance pathophysiology egyik proposed mechanism-pillérje. NNMT-knockdown obese mouse-modell-en metabolic-rate +30% emelkedés + insulin-sensitivity-emelkedés mérhető training-free körülmények között 4-8 hét alatt (Kraus 2014 Nature PMID 24717513)."
    },
    {
      "q": "WADA-status nuance — banned, allowed, vagy 'S0 catch-all'?",
      "a": "A 5-Amino-1MQ NEM-listán explicit-banned a WADA-prohibited-list-en, így technikailag 'allowed' kategória. DE a WADA 'S0 catch-all non-approved substance' clause potenciálisan érvényesíthető: 'any pharmacological substance which is not addressed by any of the subsequent sections of the list and with no current approval by any governmental regulatory authority for human therapeutic use'. A 5-Amino-1MQ FDA + EMA never approved + research-chemical-status alapján potenciálisan ide-eshet. Versenysport-aktív sportoló-on a kockázat-pontosítás NADA-konzultáció szakmai-érdek."
    },
    {
      "q": "Miért árulják online, ha preclinical-only?",
      "a": "A research-chemical underground market NEM FDA-Rx-pharmacy: a preclinical-only status ellenére sem blokkolja a synthesis + online-sale-t. A 2022-2023 óta online-marketed '50-150 mg/cap 5-Amino-1MQ' termékek a research-chemical-status legal-loophole-ban árulhatók: a 'NEM emberi konzumálásra, csak in-vitro kutatási célra' disclaimer-rel a vendor-ok elkerülik a Rx-pharmacy-szabályozást. Realisztikusan a fogyasztók 99%-a humán-konzumálási céllal vásárol, és a label-claim + HPLC-content-untested batch-risk magas. Cohen 2017 JAMA SARMs-rokon analóg-RCT 25-30% online-marketed research-chemical termék NEM tartalmazta a deklarált hatóanyagot vagy különböző molekulát tartalmazott."
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
    "unit": "RESEARCH-ONLY (humán-Rx-dose NINCS)",
    "note": "PRECLINICAL-ONLY chemical — humán-trial NEM létezik, humán-Rx-dose NINCS. Mouse-modell extrapoláció: 50-200 mg/kg/nap PO (Kraus 2014 NNMT-knockdown analogon-context). Humán-equivalent BSA-conversion (~12x dose-csökkentés) + bioavailability-ismeretlen miatt NEM kiszámítható megbízhatóan. Research-chemical underground market 50-150 mg/cap online-termékek label-claim-discrepancy + HPLC-untested-content. FDA never approved + EU EMA never approved. WADA 'S0 catch-all non-approved substance' kategória potenciális szankció versenysport-aktív sportoló-on. Humán-konzumálás NEM ajánlott — biztonságos protokoll NEM létezik."
  },
  "anecdote": "Közösségi beszámolók szerint az 5-Amino-1MQ-t nagyra értékelik zsírvesztéshez, a felhasználók finom, háttér-jellegű zsírvesztő hatást írnak le, ami idővel épül. A beszámolók gyakran tartalmaznak jobb napi energiát. Az NNMT-gátlás révén a vegyület csökkenti a keringő NAD+ szinteket azáltal, hogy több NAD+-t tart bent a sejtekben, ahol metabolikusan aktív. Jól párosítható olyan vegyületekkel, amelyek aktívan fokozzák az anyagcserét — Cardarine, injektálható L-karnitin vagy Retatrutid. Leginkább napi háttér-zsírvesztés-optimalizálónak tekinthető, nem pedig elsődleges hajtóerőnek.\n\nAz 5-Amino-1MQ szájon át (kapszulázott készítmények elérhetők) vagy szubkután adható. Ha az orális használat gyomorbántalmat okoz, étkezéssel vagy több vízzel való bevétel segíthet."
}
