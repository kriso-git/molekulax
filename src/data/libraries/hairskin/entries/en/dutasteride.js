// Hair & Skin library entry. Sources: FDA Avodart label (GSK), Gubelin Harcha
// phase III AGA dose-ranging (PMID 24411083), Shanshanwal 2017 dutasteride>finasteride
// (PMID 27549867), long-term AGA safety (PMID 26893187), Hirshburg 5ARI safety review
// (PMID 27672412). Dual 5-alpha-reductase inhibitor (type I + II), ~90-95% DHT suppression.
// EN prose. Safety arrays are trilingual.

export default {
  "id": "dutasteride",
  "defaultVariant": "oral",
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": { "hu": "Orális kapszula", "en": "Oral capsule", "pl": "Kapsułka doustna" },
      "routeNote": {
        "hu": "A standard, bizonyítékkal bíró forma: napi 0,5 mg (Avodart) szisztémásan ~90-95%-kal csökkenti a DHT-t (erősebben, mint a finaszterid). Nagyon hosszú felezési idő; szisztémás mellékhatás- és hosszú (6 hónap) washout-kockázattal.",
        "en": "The standard, evidence-backed form: 0.5 mg/day (Avodart) systemically reduces DHT by ~90-95% (stronger than finasteride). Very long half-life; systemic side-effect and long (6-month) washout risk.",
        "pl": "Standardowa, poparta dowodami forma: 0,5 mg/dzień (Avodart) ogólnoustrojowo redukuje DHT o ~90-95% (silniej niż finasteryd). Bardzo długi okres półtrwania; ryzyko działań ogólnoustrojowych i długi (6 mies.) washout."
      },
      "image": "/pharmaceutical/softgel-orange.png",
      "halfLife": "~5 weeks (terminal)",
      "bioavailability": "~60% (oral)",
      "onsetTime": { "hu": "3-6 hónap (stabilizáció), 6-12 hónap (visszanövekedés)", "en": "3-6 months (stabilization), 6-12 months (regrowth)", "pl": "3-6 miesięcy (stabilizacja), 6-12 miesięcy (odrost)" },
      "dosing": { "hu": "0,5 mg/nap (Avodart), AGA-ra off-label vagy engedélyezett (KR/JP). BPH-ra 0,5 mg/nap.", "en": "0.5 mg/day (Avodart), off-label or approved (KR/JP) for AGA. For BPH 0.5 mg/day.", "pl": "0,5 mg/dzień (Avodart), off-label lub zatwierdzony (KR/JP) na AGA. Na BPH 0,5 mg/dzień." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.5, "medium": 0.5, "high": 0.5 }, "unit": "mg/day", "note": { "hu": "Standard 0,5 mg/nap. A hosszú felezési idő miatt egyes AGA-protokollok ritkábban adagolnak (nem hivatalos). NŐKNEK terhességi korban tilos.", "en": "Standard 0.5 mg/day. Due to the long half-life some AGA protocols dose less often (unofficial). Forbidden for women of childbearing potential.", "pl": "Standard 0,5 mg/dzień. Z powodu długiego półtrwania niektóre protokoły AGA dawkują rzadziej (nieoficjalnie). Zakazane dla kobiet w wieku rozrodczym." } },
      "legalStatus": "EU/HU/USA: prescription for BPH (Avodart). For AGA off-label in EU/USA, approved in KR/JP (0.5 mg).",
      "prescriptionStatus": "Prescription (Rx)",
      "atcCode": "G04CB02",
      "indications": [ "Benign prostatic hyperplasia (0.5 mg)", "Androgenetic alopecia (off-label EU/USA; approved KR/JP)" ],
      "contraindications": [ "Pregnancy", "Women of childbearing potential", "Severe hepatic impairment", "Hypersensitivity" ],
      "commonSideEffects": [ "Sexual: libido, erection, ejaculation (1-4%, slightly more frequent than with finasteride)", "Gynaecomastia", "Mood disturbance (class warning)", "PSA decrease ~50% (double it at screening)", "Long washout: 6-month donation ban" ]
    },
    {
      "id": "topical",
      "routeId": "topical",
      "routeLabel": { "hu": "Topikális oldat", "en": "Topical solution", "pl": "Roztwór miejscowy" },
      "routeNote": {
        "hu": "Fejlődő, fejbőrre vitt forma (oldat vagy mezoterápia): a cél a lokális erős DHT-gátlás kisebb szisztémás expozícióval. ÚJABB, fázis-2 szintű irány; a dutaszterid nagyon hosszú felezési ideje miatt a szisztémás biztonság külön mérlegelendő.",
        "en": "Emerging scalp-applied form (solution or mesotherapy): aiming for strong local DHT inhibition with lower systemic exposure. A NEWER, phase-2-level direction; due to dutasteride's very long half-life, systemic safety needs separate consideration.",
        "pl": "Rozwijająca się forma na skórę głowy (roztwór lub mezoterapia): silne miejscowe hamowanie DHT przy mniejszej ekspozycji ogólnoustrojowej. NOWSZY kierunek (faza 2); z powodu bardzo długiego półtrwania bezpieczeństwo ogólnoustrojowe wymaga osobnej oceny."
      },
      "image": "/performance/topical-solution-clear.png",
      "halfLife": "Scalp retention; the systemic fraction remains very long half-life",
      "bioavailability": "Reduced systemic (vs oral ~60%), but caution due to the long half-life",
      "onsetTime": { "hu": "Hónapok; a topikális forma evidenciája korlátozottabb", "en": "Months; the topical form has more limited evidence", "pl": "Miesiące; forma miejscowa ma bardziej ograniczone dowody" },
      "dosing": { "hu": "Vizsgálati topikális dutaszterid-oldat (kb. 0,01-0,05%), illetve mezoterápia; nem standardizált, magisztrális/vizsgálati.", "en": "Investigational topical dutasteride solution (~0.01-0.05%), or mesotherapy; not standardized, compounded/investigational.", "pl": "Badawczy roztwór dutasterydu (~0,01-0,05%), lub mezoterapia; niestandaryzowany, recepturowy/badawczy." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.01, "medium": 0.02, "high": 0.05 }, "unit": "% (topical)", "note": { "hu": "Vizsgálati topikális dutaszterid jellemzően 0,01-0,05%. Nem standardizált, magisztrális/vizsgálati; a hosszú felezési idő miatt szisztémás biztonság külön mérlegelendő.", "en": "Investigational topical dutasteride is typically 0.01-0.05%. Not standardized, compounded/investigational; long half-life means systemic safety needs separate consideration.", "pl": "Badawczy dutasteryd miejscowy zwykle 0,01-0,05%. Niestandaryzowany, recepturowy/badawczy; długi półtrwania wymaga oceny bezpieczeństwa." } },
      "legalStatus": "Compounded/investigational topical form; not a standard approved product. The evidence is more limited than for the oral form.",
      "prescriptionStatus": "Compounded / investigational",
      "atcCode": "G04CB02 (active substance)",
      "indications": [ "Androgenetic alopecia (scalp-applied, emerging direction)", "Strong local DHT inhibition aiming for lower systemic exposure" ],
      "contraindications": [ "Pregnancy (also due to transdermal absorption)", "Caution in women of childbearing potential", "Hypersensitivity" ],
      "commonSideEffects": [ "Goal: fewer systemic side effects (lower absorption)", "Local scalp irritation", "Due to the long half-life, a systemic effect cannot be excluded", "More limited long-term safety data" ]
    }
  ],
  "sideEffects": [
    { "hu": "Szexuális mellékhatások: libidócsökkenés, erektilis diszfunkció és ejakulációs zavar (egyenként kb. 1-4%); a teljesebb androgén-blokk miatt esetenként valamivel gyakoribb, mint finaszteridnél, többségében reverzibilis a leállítás után.", "en": "Sexual side effects: decreased libido, erectile dysfunction and ejaculation disorder (~1-4% each); sometimes slightly more frequent than with finasteride due to the fuller androgen blockade, mostly reversible after discontinuation.", "pl": "Działania seksualne: obniżenie libido, zaburzenia erekcji i ejakulacji (po ~1-4%); czasem nieco częstsze niż przy finasterydzie z powodu pełniejszej blokady androgenowej, w większości odwracalne po odstawieniu." },
    { "hu": "Emlőelváltozások: gynaecomastia, emlőfeszülés és érzékenység; ritkán emlőcsomó vagy mellbimbóváladék, amit ki kell vizsgálni.", "en": "Breast changes: gynaecomastia, breast tenderness and pain; rarely a breast lump or nipple discharge that must be evaluated.", "pl": "Zmiany w piersiach: ginekomastia, tkliwość i ból piersi; rzadko guzek lub wyciek z brodawki wymagający diagnostyki." },
    { "hu": "Hangulati zavarok: depresszió és csökkent libido jelentve; a 5α-reduktáz-gátlók osztály-figyelmeztetése, pszichiátriai tünet esetén leállítás és orvosi konzultáció.", "en": "Mood disorders: depression and decreased libido reported; a class warning for 5-alpha-reductase inhibitors, discontinue and seek medical advice if psychiatric symptoms occur.", "pl": "Zaburzenia nastroju: zgłaszano depresję i obniżone libido; ostrzeżenie klasowe dla inhibitorów 5-alfa-reduktazy, przy objawach psychiatrycznych odstawić i skonsultować się z lekarzem." },
    { "hu": "PSA-szint kb. 50%-os csökkenése: a prosztataspecifikus antigén álságosan alacsony lesz, ezért prosztatarák-szűréskor a mért PSA-értéket kétszeresére kell korrigálni a téves negatív elkerülésére.", "en": "PSA decreases by ~50%: prostate-specific antigen becomes falsely low, so during prostate cancer screening the measured PSA must be doubled to avoid a false negative.", "pl": "Spadek PSA o ~50%: PSA staje się fałszywie niski, dlatego przy badaniach przesiewowych raka prostaty zmierzone PSA należy podwoić, aby uniknąć wyniku fałszywie ujemnego." },
    { "hu": "Túlérzékenységi és bőrreakciók: kiütés, viszketés, urticaria, lokalizált ödéma és (ritkán) angioödéma; allergiás reakció esetén azonnali leállítás.", "en": "Hypersensitivity and skin reactions: rash, pruritus, urticaria, localized edema and (rarely) angioedema; immediate discontinuation if an allergic reaction occurs.", "pl": "Reakcje nadwrażliwości i skórne: wysypka, świąd, pokrzywka, miejscowy obrzęk i (rzadko) obrzęk naczynioruchowy; przy reakcji alergicznej natychmiastowe odstawienie." },
    { "hu": "Magas malignitási fokú prosztatarák enyhén emelkedett incidenciája (Gleason 8-10) a REDUCE-vizsgálatban, miközben az összes prosztatarák kockázata csökkent; teljes túlélésbeli különbség nélkül.", "en": "Slightly increased incidence of high-grade prostate cancer (Gleason 8-10) in the REDUCE trial, while overall prostate cancer risk fell; with no difference in overall survival.", "pl": "Nieznacznie zwiększona częstość raka prostaty o wysokim stopniu złośliwości (Gleason 8-10) w badaniu REDUCE, przy spadku ogólnego ryzyka raka prostaty; bez różnicy w przeżyciu całkowitym." }
  ],
  "contraindications": [
    { "hu": "Terhesség és fogamzóképes korú nő: a dutaszterid a férfi magzat külső nemi szervének fejlődési rendellenességét okozhatja, ezért nőknek szigorúan ellenjavallt.", "en": "Pregnancy and women of childbearing potential: dutasteride can cause malformation of the external genitalia of a male fetus, so it is strictly contraindicated in women.", "pl": "Ciąża i kobiety w wieku rozrodczym: dutasteryd może powodować wady zewnętrznych narządów płciowych płodu męskiego, dlatego jest bezwzględnie przeciwwskazany u kobiet." },
    { "hu": "A lágyzselatin-kapszula megérintése terhes nő által, ha az szivárog: a dutaszterid a bőrön át felszívódhat; az ép kapszulát biztonságos kezelni, a sérültet nem.", "en": "Handling of the soft-gelatin capsule by a pregnant woman if it is leaking: dutasteride can be absorbed through the skin; an intact capsule is safe to handle, a damaged one is not.", "pl": "Dotykanie kapsułki żelatynowej przez kobietę w ciąży, jeśli przecieka: dutasteryd może wchłaniać się przez skórę; nieuszkodzoną kapsułkę można bezpiecznie dotykać, uszkodzonej nie." },
    { "hu": "Vér- vagy spermadonáció a kezelés alatt és legalább 6 hónapig az utolsó adag után: a nagyon hosszú felezési idő miatt a tilalom jóval hosszabb, mint finaszteridnél (1 hónap).", "en": "Blood or sperm donation during treatment and for at least 6 months after the last dose: because of the very long half-life, the deferral is far longer than for finasteride (1 month).", "pl": "Oddawanie krwi lub nasienia w trakcie leczenia i przez co najmniej 6 miesięcy po ostatniej dawce: ze względu na bardzo długi okres półtrwania zakaz jest znacznie dłuższy niż przy finasterydzie (1 miesiąc)." },
    { "hu": "Súlyos májkárosodás: a dutaszterid nagymértékben a májban metabolizálódik (CYP3A4), súlyos elégtelenségben óvatosság szükséges, mert nincs rá vizsgálat.", "en": "Severe hepatic impairment: dutasteride is extensively metabolized in the liver (CYP3A4); caution is required in severe insufficiency as it has not been studied.", "pl": "Ciężkie zaburzenia czynności wątroby: dutasteryd jest w znacznym stopniu metabolizowany w wątrobie (CYP3A4); w ciężkiej niewydolności wymagana ostrożność, ponieważ nie był badany." },
    { "hu": "Ismert túlérzékenység a dutaszteriddel, más 5α-reduktáz-gátlóval vagy bármely segédanyaggal szemben.", "en": "Known hypersensitivity to dutasteride, another 5-alpha-reductase inhibitor, or any excipient.", "pl": "Znana nadwrażliwość na dutasteryd, inny inhibitor 5-alfa-reduktazy lub którąkolwiek substancję pomocniczą." },
    { "hu": "Gyermekek és serdülők (18 év alatt): biztonságosság és hatékonyság nem igazolt, nem javallott.", "en": "Children and adolescents (under 18 years): safety and efficacy not established, not indicated.", "pl": "Dzieci i młodzież (poniżej 18 lat): bezpieczeństwo i skuteczność nie zostały ustalone, nie zaleca się." }
  ],
  "name": "Dutasteride",
  "image": "/pharmaceutical/softgel-orange.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Dual 5-alpha-reductase inhibitor (type I + II). FDA-approved for BPH (Avodart 0.5 mg), off-label for androgenetic alopecia (approved in South Korea/Japan). Reduces serum DHT by ~90-95%, more strongly than finasteride.",
  "description": "Dutasteride is a synthetic 4-azasteroid developed by GSK (Avodart, FDA approval for BPH in 2001). Unlike finasteride, it inhibits BOTH 5-alpha-reductase isoenzymes (type I + II), thereby reducing serum DHT levels by ~90-95% (vs finasteride ~70%). For androgenetic alopecia it is OFF-LABEL in the USA and the EU, but in South Korea (2009) and Japan (2015) it is officially approved for hair loss at the 0.5 mg dose. According to the phase III dose-ranging study (Gubelin Harcha 2014, PMID 24411083, 917 men), 0.5 mg dutasteride increased hair count and thickness significantly more than finasteride 1 mg or placebo. Due to the exceptionally long ~5-week half-life, the active substance is eliminated slowly and steady state is reached over several months.",
  "keyInfo": [
    { "label": "ATC code", "value": "G04CB02" },
    { "label": "Prescription status", "value": "Prescription (Rx); off-label for AGA" },
    { "label": "Mechanism of action", "value": "Dual 5-alpha-reductase (I + II) inhibition, ~90-95% DHT reduction" },
    { "label": "Half-life", "value": "~5 weeks (terminal) – far longer than finasteride" },
    { "label": "Onset of action", "value": "3-6 months (hair stabilization), 6-12 months (regrowth)" }
  ],
  "mechanism": "Dutasteride competitively and almost irreversibly inhibits both 5-alpha-reductase isoenzymes (type I – sebaceous glands, liver, skin; type II – prostate, hair follicle), so the serum DHT reduction (~90-95%) is stronger and more complete than that of finasteride, which inhibits only type II (~70%). At the hair follicle, the fall in DHT reverses androgenic miniaturization: the anagen phase is prolonged and hair-shaft diameter increases. Because of the very long half-life the effect is steady, missed doses matter less, and after discontinuation the drug is eliminated slowly.",
  "legalStatus": "EU/HU: prescription for BPH (Avodart 0.5 mg, generic; Jalyn = dutasteride + tamsulosin). For AGA off-label in EU/USA. South Korea (2009) and Japan (2015): 0.5 mg officially approved for androgenetic alopecia. USA: FDA Rx, not scheduled.",
  "bioavailability": "~60% (oral, soft-gelatin capsule); highly plasma-protein-bound (>99%), large volume of distribution",
  "onsetTime": "3-6 months (hair stabilization), 6-12 months (visible regrowth)",
  "halfLife": "~5-week terminal half-life; steady state reached over 3-6 months (with daily dosing)",
  "atcCode": "G04CB02",
  "prescriptionStatus": "Prescription (Rx), dermatologist or urologist; for AGA off-label in EU/USA",
  "indications": [
    "Benign prostatic hyperplasia (BPH), 0.5 mg/day (Avodart)",
    "BPH + LUTS combination: dutasteride + tamsulosin (Jalyn, CombAT protocol)",
    "Androgenetic alopecia (off-label EU/USA; approved in South Korea/Japan), 0.5 mg/day",
    "Finasteride non-responder men with alopecia: a stronger DHT-blockade alternative"
  ],
  "commonSideEffects": [
    "Sexual side effects: decreased libido, erectile dysfunction, ejaculation disorder (1-4%)",
    "Gynaecomastia (breast enlargement, tenderness)",
    "Mood disturbance (depression – class warning)",
    "PSA decrease ~50% – PSA × 2 correction at prostate screening",
    "Long washout: blood/sperm donation banned for 6 months after the last dose"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary metabolism)",
    "Long half-life may increase further with strong CYP3A4 inhibitors (e.g. ritonavir, ketoconazole)"
  ],
  "crossMolInteractions": [
    "Finasteride: do not combine – redundant, irrational dual 5AR inhibition, increased side effects",
    "Minoxidil (topical): COMPLEMENTARY mechanism, a common combined alopecia therapy",
    "Tamsulosin (alpha-blocker): synergistic in the BPH combination (Jalyn / CombAT)",
    "Strong CYP3A4 inhibitors (ritonavir, ketoconazole, verapamil): dutasteride exposure increases",
    "Testosterone replacement (TRT): can be used to mitigate the DHT rise on TRT (off-label)"
  ],
  "benefits": [
    "Stronger DHT suppression (~90-95%) than finasteride (~70%)",
    "In phase III, 0.5 mg gave better hair-count growth than finasteride 1 mg (Gubelin Harcha 2014)",
    "Long half-life: missed doses impair the effect less",
    "An option for finasteride non-responders",
    "In BPH it also reduces prostate volume and lowers the need for surgery"
  ],
  "quickStart": [
    "Alopecia (off-label): 0.5 mg/day, independent of meals; some protocols dose less often due to the long half-life",
    "BPH: 0.5 mg/day (Avodart), often combined with tamsulosin (Jalyn)",
    "Patience: meaningful hair results at 6-12 months; a baseline trichoscopy image is recommended",
    "Can be combined with topical minoxidil 5% (complementary mechanism)",
    "Consistent use matters more than timing; a 6-month donation ban after discontinuation"
  ],
  "expectations": [
    { "label": "Months 1-3", "body": "Initial increased shedding (\"shedding\") is possible as the hair cycle resets. Serum DHT is already deeply (~90%+) suppressed. No visible regrowth yet." },
    { "label": "Months 6-12", "body": "Hair loss has stabilized, with meaningful thickening at the vertex (crown) area. In BPH the IPSS score and urinary flow improve. Trichoscopy is recommended for objective measurement." },
    { "label": "24+ months", "body": "Maximal effect developed. Because of the very long half-life, DHT returns more slowly after discontinuation than with finasteride, but maintaining the hair result requires continuing treatment." }
  ],
  "quality": {
    "pure": [
      "GSK Avodart (0.5 mg) is the originator brand; generic forms are bioequivalent",
      "Jalyn = fixed combination of dutasteride 0.5 mg + tamsulosin 0.4 mg for BPH"
    ],
    "caution": [
      "PSA decrease ~50%: always double the PSA result at prostate screening",
      "Slight increase in high-grade prostate carcinoma (Gleason 8-10) incidence based on the REDUCE trial",
      "Monitor for mood disturbance / depression during treatment",
      "Due to the long half-life, side effects may persist after discontinuation"
    ],
    "avoid": [
      "Pregnancy (risk of genital damage to a male fetus)",
      "Women of childbearing potential without contraception",
      "Concurrent finasteride (redundant dual 5AR inhibition)",
      "Blood or sperm donation during treatment and for 6 months after",
      "Touching a leaking capsule by a pregnant woman (transdermal absorption)"
    ]
  },
  "interactions": [
    "Topical minoxidil 5%: complementary mechanism, a common alopecia combination",
    "Tamsulosin: fixed combination in BPH (Jalyn) – additive symptomatic improvement (CombAT)",
    "Strong CYP3A4 inhibitors (ritonavir, ketoconazole): dutasteride levels may rise, monitor",
    "Finasteride: do NOT combine – redundant, irrational dual androgen blockade",
    "Alcohol: no significant interaction"
  ],
  "studies": [
    {
      "title": "A randomized, active- and placebo-controlled study of the efficacy and safety of different doses of dutasteride versus placebo and finasteride in the treatment of male subjects with androgenetic alopecia",
      "authors": "Gubelin Harcha W, Barboza Martínez J, Tsai TF, et al.",
      "journal": "J Am Acad Dermatol. 2014;70(3):489-498.",
      "pmid": "24411083"
    },
    {
      "title": "Superiority of dutasteride over finasteride in hair regrowth and reversal of miniaturization in men with androgenetic alopecia: A randomized controlled open-label, evaluator-blinded study",
      "authors": "Shanshanwal SJ, Dhurat RS.",
      "journal": "Indian J Dermatol Venereol Leprol. 2017;83(1):47-54.",
      "pmid": "27549867"
    },
    {
      "title": "Adverse effects and safety of 5-alpha reductase inhibitors (finasteride, dutasteride): a systematic review",
      "authors": "Hirshburg JM, Kelsey PA, Therrien CA, et al.",
      "journal": "J Clin Aesthet Dermatol. 2016;9(7):56-62.",
      "pmid": "27672412"
    }
  ],
  "faq": [
    {
      "q": "What is the difference between dutasteride and finasteride?",
      "a": "Finasteride inhibits only type II 5-alpha-reductase, dutasteride inhibits BOTH (I + II). Therefore dutasteride reduces serum DHT by ~90-95% and finasteride by ~70%. In the phase III head-to-head study (Gubelin Harcha 2014, PMID 24411083), 0.5 mg dutasteride produced better hair-count growth than finasteride 1 mg. In exchange, dutasteride is off-label for AGA in the EU/USA (only FDA-approved for BPH), and its half-life is much longer (~5 weeks vs 5-6 hours), so it is eliminated more slowly after discontinuation."
    },
    {
      "q": "Why does the long, ~5-week half-life matter?",
      "a": "Dutasteride's terminal half-life is about 5 weeks, versus 5-6 hours for finasteride. Advantage: an occasional missed dose barely reduces the effect, and DHT suppression is steady. Disadvantage: steady state is only reached over months, and a possible side effect may persist for weeks after discontinuation because the drug is eliminated slowly. For this reason the blood/sperm donation ban is also longer: 6 months after the last dose (1 month for finasteride)."
    },
    {
      "q": "Is dutasteride approved for hair loss?",
      "a": "It is region-dependent. In the USA and the EU dutasteride has FDA/EMA approval only for BPH (benign prostatic enlargement), and for hair loss it is prescribed OFF-LABEL. In South Korea (since 2009) and Japan (since 2015), however, it is officially approved for androgenetic alopecia at the 0.5 mg dose. The evidence base (several phase III RCTs) is strong, but the regulatory status differs by country."
    },
    {
      "q": "Does dutasteride increase the risk of prostate cancer?",
      "a": "In the REDUCE trial, dutasteride reduced the risk of overall (low-grade) prostate carcinoma but slightly increased the incidence of high-grade (Gleason 8-10) tumors, with no difference in overall survival – the same pattern seen with finasteride in the PCPT. The consensus is that it is not a causal factor but reduces detection of low-grade tumors. PSA × 2 correction at screening is mandatory."
    }
  ],
  "related": [
    "finasteride",
    "minoxidil"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 0.5,
      "medium": 0.5,
      "high": 0.5
    },
    "unit": "mg/day",
    "note": "Standard dose 0.5 mg/day (both for BPH Avodart and off-label AGA). Due to the very long half-life, some alopecia protocols dose less often (e.g. 2-3× per week); this is unofficial. Forbidden for women of childbearing potential (fetal genital damage). Evaluate results after 6-12 months."
  }
}
