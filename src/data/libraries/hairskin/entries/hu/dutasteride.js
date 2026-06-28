// Hair & Skin library entry. Sources: FDA Avodart label (GSK), Gubelin Harcha
// phase III AGA dose-ranging (PMID 24411083), Shanshanwal 2017 dutasteride>finasteride
// (PMID 27549867), long-term AGA safety (PMID 26893187), Hirshburg 5ARI safety review
// (PMID 27672412). Dual 5-alpha-reductase inhibitor (type I + II), ~90-95% DHT suppression.
// HU body authored; EN/PL prose to be backfilled. Safety arrays are trilingual.

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
      "halfLife": "~5 hét (terminális)",
      "bioavailability": "~60% (orális)",
      "onsetTime": { "hu": "3-6 hónap (stabilizáció), 6-12 hónap (visszanövekedés)", "en": "3-6 months (stabilization), 6-12 months (regrowth)", "pl": "3-6 miesięcy (stabilizacja), 6-12 miesięcy (odrost)" },
      "dosing": { "hu": "0,5 mg/nap (Avodart), AGA-ra off-label vagy engedélyezett (KR/JP). BPH-ra 0,5 mg/nap.", "en": "0.5 mg/day (Avodart), off-label or approved (KR/JP) for AGA. For BPH 0.5 mg/day.", "pl": "0,5 mg/dzień (Avodart), off-label lub zatwierdzony (KR/JP) na AGA. Na BPH 0,5 mg/dzień." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.5, "medium": 0.5, "high": 0.5 }, "unit": "mg/nap", "note": { "hu": "Standard 0,5 mg/nap. A hosszú felezési idő miatt egyes AGA-protokollok ritkábban adagolnak (nem hivatalos). NŐKNEK terhességi korban tilos.", "en": "Standard 0.5 mg/day. Due to the long half-life some AGA protocols dose less often (unofficial). Forbidden for women of childbearing potential.", "pl": "Standard 0,5 mg/dzień. Z powodu długiego półtrwania niektóre protokoły AGA dawkują rzadziej (nieoficjalnie). Zakazane dla kobiet w wieku rozrodczym." } },
      "legalStatus": "EU/HU/USA: vényköteles BPH-ra (Avodart). AGA-ra EU/USA off-label, KR/JP engedélyezett (0,5 mg).",
      "prescriptionStatus": "Vényköteles (Rx)",
      "atcCode": "G04CB02",
      "indications": [ "Jóindulatú prosztata-hiperplázia (0,5 mg)", "Androgenetikus alopecia (off-label EU/USA; engedélyezett KR/JP)" ],
      "contraindications": [ "Terhesség", "Női gyermekvállalási korban", "Súlyos májkárosodás", "Túlérzékenység" ],
      "commonSideEffects": [ "Szexuális: libidó, erekció, ejakuláció (1-4%, finaszteridnél kissé gyakoribb)", "Gynaecomastia", "Hangulatzavar (osztály-figyelmeztetés)", "PSA-csökkenés ~50% (szűrésnél × 2)", "Hosszú washout: 6 hónap donáció-tilalom" ]
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
      "halfLife": "Fejbőri retenció; a szisztémás hányad nagyon hosszú felezésű marad",
      "bioavailability": "Csökkentett szisztémás (vs orális ~60%), de a hosszú felezési idő miatt óvatosság",
      "onsetTime": { "hu": "Hónapok; a topikális forma evidenciája korlátozottabb", "en": "Months; the topical form has more limited evidence", "pl": "Miesiące; forma miejscowa ma bardziej ograniczone dowody" },
      "dosing": { "hu": "Vizsgálati topikális dutaszterid-oldat (kb. 0,01-0,05%), illetve mezoterápia; nem standardizált, magisztrális/vizsgálati.", "en": "Investigational topical dutasteride solution (~0.01-0.05%), or mesotherapy; not standardized, compounded/investigational.", "pl": "Badawczy roztwór dutasterydu (~0,01-0,05%), lub mezoterapia; niestandaryzowany, recepturowy/badawczy." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.01, "medium": 0.02, "high": 0.05 }, "unit": "% (topikális)", "note": { "hu": "Vizsgálati topikális dutaszterid jellemzően 0,01-0,05%. Nem standardizált, magisztrális/vizsgálati; a hosszú felezési idő miatt szisztémás biztonság külön mérlegelendő.", "en": "Investigational topical dutasteride is typically 0.01-0.05%. Not standardized, compounded/investigational; long half-life means systemic safety needs separate consideration.", "pl": "Badawczy dutasteryd miejscowy zwykle 0,01-0,05%. Niestandaryzowany, recepturowy/badawczy; długi półtrwania wymaga oceny bezpieczeństwa." } },
      "legalStatus": "Magisztrális/vizsgálati topikális forma; nem standard engedélyezett készítmény. Az evidencia korlátozottabb, mint az orálisé.",
      "prescriptionStatus": "Magisztrális / vizsgálati",
      "atcCode": "G04CB02 (hatóanyag)",
      "indications": [ "Androgenetikus alopecia (fejbőri, fejlődő irány)", "Erős lokális DHT-gátlás kisebb szisztémás expozícióra törekedve" ],
      "contraindications": [ "Terhesség (transzdermális felszívódás miatt is)", "Női gyermekvállalási korban óvatosság", "Túlérzékenység" ],
      "commonSideEffects": [ "Cél: kevesebb szisztémás mellékhatás (kisebb felszívódás)", "Lokális fejbőr-irritáció", "A hosszú felezési idő miatt a szisztémás hatás nem zárható ki", "Korlátozottabb hosszú távú biztonsági adat" ]
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
  "shortDesc": "Duális 5α-reduktáz-gátló (típus I + II). FDA-jóváhagyott BPH-ra (Avodart 0,5 mg), androgenetikus alopeciára off-label (Dél-Koreában/Japánban engedélyezett). A szérum DHT-t ~90-95%-kal csökkenti, erősebben mint a finaszterid.",
  "description": "A Dutasteride egy szintetikus 4-azaszteroid, a GSK fejlesztette ki (Avodart, FDA-jóváhagyás BPH-ra 2001). A finaszteriddel szemben MINDKÉT 5α-reduktáz izoenzimet gátolja (típus I + II), így a szérum DHT-szintet ~90-95%-kal csökkenti (vs finaszterid ~70%). Androgenetikus alopeciára az USA-ban és az EU-ban OFF-LABEL, de Dél-Koreában (2009) és Japánban (2015) 0,5 mg-os dózisban hivatalosan engedélyezett hajhullásra. A fázis-III dose-ranging vizsgálat (Gubelin Harcha 2014, PMID 24411083, 917 férfi) szerint a 0,5 mg dutaszterid szignifikánsan jobban növelte a hajszámot és -vastagságot, mint a finaszterid 1 mg vagy a placebo. A kiemelkedően hosszú, ~5 hetes felezési idő miatt a hatóanyag lassan ürül, és a steady-state több hónap alatt áll be.",
  "keyInfo": [
    { "label": "ATC kód", "value": "G04CB02" },
    { "label": "Vény-státusz", "value": "Vényköteles (Rx); AGA-ra off-label" },
    { "label": "Hatásmechanizmus", "value": "Duális 5α-reduktáz (I + II) gátlás, ~90-95% DHT-csökkenés" },
    { "label": "Felezési idő", "value": "~5 hét (terminális) – jóval hosszabb, mint a finaszterid" },
    { "label": "Hatáskezdet", "value": "3-6 hónap (haj-stabilizáció), 6-12 hónap (visszanövekedés)" }
  ],
  "mechanism": "A dutaszterid mindkét 5α-reduktáz izoenzimet (típus I – faggyúmirigy, máj, bőr; típus II – prosztata, hajhagyma) kompetitíven, csaknem irreverzibilisen gátolja, ezért a szérum DHT-csökkenés (~90-95%) erősebb és teljesebb, mint a csak típus-II-t gátló finaszteridé (~70%). A hajhagyma szintjén a DHT csökkenése megfordítja az androgén miniaturizációt: az anagén fázis meghosszabbodik, a hajszálak átmérője nő. A nagyon hosszú felezési idő miatt a hatás kiegyenlített, de a kihagyott adagok kevésbé számítanak, a leállítás után pedig lassan ürül.",
  "legalStatus": "EU/HU: vényköteles BPH-ra (Avodart 0,5 mg, generikus; Jalyn = dutaszterid + tamszulozin). AGA-ra EU/USA off-label. Dél-Korea (2009) és Japán (2015): 0,5 mg hivatalosan engedélyezett androgenetikus alopeciára. USA: FDA Rx, nem ütemezett.",
  "bioavailability": "~60% (orális, lágyzselatin-kapszula); erősen plazmafehérje-kötött (>99%), nagy eloszlási térfogat",
  "onsetTime": "3-6 hónap (haj-stabilizáció), 6-12 hónap (látható visszanövekedés)",
  "halfLife": "~5 hét terminális felezési idő; steady-state 3-6 hónap alatt áll be (napi adagolással)",
  "atcCode": "G04CB02",
  "prescriptionStatus": "Vényköteles (Rx), bőrgyógyász vagy urológus; AGA-ra EU/USA-ban off-label",
  "indications": [
    "Jóindulatú prosztata-hiperplázia (BPH), 0,5 mg/nap (Avodart)",
    "BPH + LUTS kombináció: dutaszterid + tamszulozin (Jalyn, CombAT-protokoll)",
    "Androgenetikus alopecia (off-label EU/USA; engedélyezett Dél-Koreában/Japánban), 0,5 mg/nap",
    "Finaszterid-non-responder alopeciás férfi: erősebb DHT-blokk alternatívája"
  ],
  "commonSideEffects": [
    "Szexuális mellékhatás: libidó-csökkenés, erektilis diszfunkció, ejakuláció-zavar (1-4%)",
    "Gynaecomastia (mellnagyobbodás, érzékenység)",
    "Hangulatzavar (depresszió – osztály-figyelmeztetés)",
    "PSA-csökkenés ~50%-kal – prosztata-szűréskor PSA × 2 korrekció",
    "Hosszú washout: vér-/spermadonáció 6 hónapig tilos az utolsó adag után"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary metabolism)",
    "Hosszú felezési idő erős CYP3A4-gátlókkal (pl. ritonavir, ketokonazol) tovább nőhet"
  ],
  "crossMolInteractions": [
    "Finaszterid: ne kombináld – redundáns, nem racionális kettős 5AR-gátlás, fokozott mellékhatás",
    "Minoxidil (topikális): KOMPLEMENTER mechanizmus, gyakori kombinált alopecia-terápia",
    "Tamszulozin (alfa-blokkoló): BPH-kombinációban szinergisztikus (Jalyn / CombAT)",
    "Erős CYP3A4-gátlók (ritonavir, ketokonazol, verapamil): a dutaszterid expozíciója nő",
    "Tesztoszteron-pótlás (TRT): TRT melletti DHT-emelkedés mérséklésére használható (off-label)"
  ],
  "benefits": [
    "Erősebb DHT-szuppresszió (~90-95%) mint a finaszterid (~70%)",
    "Fázis-III-ban a 0,5 mg jobb hajszám-növekedés, mint a finaszterid 1 mg (Gubelin Harcha 2014)",
    "Hosszú felezési idő: a kihagyott adagok kevésbé rontják a hatást",
    "Opció finaszterid-non-respondereknek",
    "BPH-ban a prosztata térfogatát is csökkenti, a műtét szükségességét mérsékli"
  ],
  "quickStart": [
    "Alopecia (off-label): 0,5 mg/nap, étkezéstől függetlenül; egyes protokollok a hosszú felezési idő miatt ritkábban adagolnak",
    "BPH: 0,5 mg/nap (Avodart), gyakran tamszulozinnal kombinálva (Jalyn)",
    "Türelem: érdemi hajeredmény 6-12 hónap; trichoszkópiás kiindulási kép ajánlott",
    "Minoxidil 5% topikálissal kombinálható (komplementer mechanizmus)",
    "Fontosabb a következetes szedés, mint az időzítés; a leállítás után 6 hónap donáció-tilalom"
  ],
  "expectations": [
    { "label": "1-3. hónap", "body": "Kezdeti hullás-fokozás (\"shedding\") lehet, ahogy a hajciklus átáll. A szérum DHT már mélyen (~90%+) elnyomva. Látható visszanövekedés még nincs." },
    { "label": "6-12. hónap", "body": "Hajhullás stabilizálódott, a vertex (korona) területen érdemi sűrűsödés. BPH-ban az IPSS-score és a vizeletáramlás javul. Objektív méréshez trichoszkópia ajánlott." },
    { "label": "24+ hónap", "body": "Maximális hatás kifejlődve. A nagyon hosszú felezési idő miatt a leállítás után a DHT lassabban tér vissza, mint finaszteridnél, de a hajeredmény fenntartásához a kezelés folytatása kell." }
  ],
  "quality": {
    "pure": [
      "GSK Avodart (0,5 mg) az originator brand; generikus formák bioekvivalensek",
      "Jalyn = fix dutaszterid 0,5 mg + tamszulozin 0,4 mg kombináció BPH-ra"
    ],
    "caution": [
      "PSA-csökkenés ~50%-kal: prosztata-szűréskor mindig duplázni a PSA-eredményt",
      "Magas-grádusú prosztata-karcinóma (Gleason 8-10) enyhe incidencia-emelkedése a REDUCE-trial alapján",
      "Hangulatzavar / depresszió monitorozása a kezelés alatt",
      "A hosszú felezési idő miatt a mellékhatások a leállítás után tovább elhúzódhatnak"
    ],
    "avoid": [
      "Terhesség (férfi-magzat genitális-károsodás kockázata)",
      "Női gyermekvállalási korban fogamzásgátlás nélkül",
      "Egyidejű finaszterid (redundáns kettős 5AR-gátlás)",
      "Vér- vagy spermadonáció a kezelés alatt és 6 hónapig utána",
      "Szivárgó kapszula megérintése terhes nő által (transzdermális felszívódás)"
    ]
  },
  "interactions": [
    "Minoxidil 5% topikális: komplementer mechanizmus, gyakori alopecia-kombináció",
    "Tamszulozin: BPH-ban fix kombináció (Jalyn) – additív tüneti javulás (CombAT)",
    "Erős CYP3A4-gátlók (ritonavir, ketokonazol): a dutaszterid-szint emelkedhet, monitorozás",
    "Finaszterid: NE kombináld – redundáns, irracionális kettős androgénblokk",
    "Alkohol: szignifikáns interakció nincs"
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
      "q": "Mi a különbség a dutaszterid és a finaszterid között?",
      "a": "A finaszterid csak a típus II 5α-reduktázt gátolja, a dutaszterid MINDKETTŐT (I + II). Ezért a dutaszterid ~90-95%-kal, a finaszterid ~70%-kal csökkenti a szérum DHT-t. A fázis-III fej-fej melletti vizsgálatban (Gubelin Harcha 2014, PMID 24411083) a 0,5 mg dutaszterid jobb hajszám-növekedést adott, mint a finaszterid 1 mg. Cserébe a dutaszterid AGA-ra EU/USA-ban off-label (csak BPH-ra FDA-jóváhagyott), a felezési ideje pedig sokkal hosszabb (~5 hét vs 5-6 óra), így a leállítás után lassabban ürül."
    },
    {
      "q": "Miért fontos a hosszú, ~5 hetes felezési idő?",
      "a": "A dutaszterid terminális felezési ideje kb. 5 hét, szemben a finaszterid 5-6 órájával. Előny: egy-egy kihagyott adag alig rontja a hatást, a DHT-szuppresszió kiegyenlített. Hátrány: a steady-state csak hónapok alatt áll be, és egy esetleges mellékhatás a leállítás után is hetekig elhúzódhat, mert a szer lassan ürül. Emiatt a vér-/spermadonáció tilalma is hosszabb: 6 hónap az utolsó adag után (finaszteridnél 1 hónap)."
    },
    {
      "q": "Engedélyezett a dutaszterid hajhullásra?",
      "a": "Régiófüggő. Az USA-ban és az EU-ban a dutaszterid kizárólag BPH-ra (jóindulatú prosztata-megnagyobbodás) van FDA/EMA-engedéllyel, hajhullásra OFF-LABEL írják fel. Dél-Koreában (2009 óta) és Japánban (2015 óta) viszont 0,5 mg-os dózisban hivatalosan engedélyezett androgenetikus alopeciára. A bizonyítékbázis (több fázis-III RCT) erős, de a regulatorikus státusz országonként eltér."
    },
    {
      "q": "Növeli a dutaszterid a prosztatarák kockázatát?",
      "a": "A REDUCE-vizsgálatban a dutaszterid csökkentette az általános (alacsony grádusú) prosztata-karcinóma kockázatát, de enyhén emelte a magas-grádusú (Gleason 8-10) tumorok incidenciáját, teljes túlélésbeli különbség nélkül – ugyanaz a mintázat, mint a finaszteridnél a PCPT-ben. A konszenzus szerint nem oki tényező, hanem a kis grádusú tumorok felismerését csökkenti. PSA × 2 korrekció szűrésnél kötelező."
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
    "unit": "mg/nap",
    "note": "Standard dózis 0,5 mg/nap (BPH Avodart és off-label AGA egyaránt). A nagyon hosszú felezési idő miatt egyes alopecia-protokollok ritkábban (pl. heti 2-3×) adagolnak; ez nem hivatalos. NŐKNEK terhességi korban tilos (magzati genitális-károsodás). Eredmény értékelése 6-12 hónap után."
  }
}
