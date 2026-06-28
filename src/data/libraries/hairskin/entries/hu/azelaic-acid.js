// Hair & Skin library entry. Sources: FDA Finacea / Azelex labels, rosacea 15% gel
// phase III (PMID 12789172), rosacea 15% foam phase 3 (PMID 26244354), pharmacology
// review (PMID 1712709), 20% cream acne overview (PMID 8654128). Naturally occurring
// C9 dicarboxylic acid; antimicrobial + comedolytic + anti-inflammatory + tyrosinase
// inhibitor. Pregnancy category B (safe). HU body authored; EN/PL prose to backfill.

export default {
  "id": "azelaic-acid",
  "defaultVariant": "a20",
  "variants": [
    {
      "id": "a15", "routeId": "a15",
      "halfLife": "Topikális, lokális hatás",
      "bioavailability": "Topikális, minimális szisztémás felszívódás",
      "routeLabel": { "hu": "15% (rozácea)", "en": "15% (rosacea)", "pl": "15% (trądzik różowaty)" },
      "routeNote": { "hu": "A 15% gél/hab (Finacea) elsősorban ROZÁCEÁRA FDA-jóváhagyott: a gyulladásos papulákat és a pírt célozza. Kíméletes, terhességben is biztonságos.", "en": "The 15% gel/foam (Finacea) is FDA-approved mainly for ROSACEA: it targets inflammatory papules and redness. Gentle, safe in pregnancy.", "pl": "15% żel/pianka (Finacea) jest zatwierdzona przez FDA głównie na TRĄDZIK RÓŻOWATY: celuje w zapalne grudki i zaczerwienienie. Łagodna, bezpieczna w ciąży." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (rozácea pír/papulák)", "en": "4-8 weeks (rosacea redness/papules)", "pl": "4-8 tygodni (rumień/grudki różowate)" },
      "atcCode": "D10AX03", "prescriptionStatus": "Vényköteles (Rx)",
      "dosing": { "hu": "15% gél/hab, vékony réteg naponta 2× tiszta bőrre (rozácea-fenntartásra elég 1× is).", "en": "15% gel/foam, thin layer twice daily on clean skin (once daily may suffice for rosacea maintenance).", "pl": "15% żel/pianka, cienka warstwa 2× dziennie na czystą skórę (do podtrzymania może wystarczyć 1×)." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 15, "medium": 15, "high": 15 }, "unit": "%", "note": { "hu": "15% (Finacea) = rozácea. Naponta 2×, tiszta bőrre. Terhességben is biztonságos.", "en": "15% (Finacea) = rosacea. Twice daily on clean skin. Safe in pregnancy.", "pl": "15% (Finacea) = trądzik różowaty. 2× dziennie na czystą skórę. Bezpieczne w ciąży." } },
      "indications": [ "Papulopustulosus rozácea (pír, papulák)", "Érzékeny bőr, terhesség alatti akne/rozácea" ],
      "contraindications": [ "Túlérzékenység az azelainsavval/segédanyaggal", "Sérült bőr" ],
      "commonSideEffects": [ "Enyhe csípés, viszketés, bőrpír (átmeneti)", "Általában jól tolerálható", "Ritkán hipopigmentáció sötét bőrön" ]
    },
    {
      "id": "a20", "routeId": "a20",
      "halfLife": "Topikális, lokális hatás",
      "bioavailability": "Topikális, minimális szisztémás felszívódás",
      "routeLabel": { "hu": "20% (akne)", "en": "20% (acne)", "pl": "20% (trądzik)" },
      "routeNote": { "hu": "A 20% krém (Azelex/Skinoren) elsősorban AKNÉRA FDA-jóváhagyott: komedolitikus + antibakteriális + gyulladáscsökkentő, és halványítja a poszt-akne foltokat. Terhességben is biztonságos.", "en": "The 20% cream (Azelex/Skinoren) is FDA-approved mainly for ACNE: comedolytic + antibacterial + anti-inflammatory, and lightens post-acne marks. Safe in pregnancy.", "pl": "20% krem (Azelex/Skinoren) jest zatwierdzony przez FDA głównie na TRĄDZIK: komedolityczny + antybakteryjny + przeciwzapalny, rozjaśnia przebarwienia po trądziku. Bezpieczny w ciąży." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (akne); 8-12+ hét (pigmentfoltok)", "en": "4-8 weeks (acne); 8-12+ weeks (pigment marks)", "pl": "4-8 tygodni (trądzik); 8-12+ tygodni (przebarwienia)" },
      "atcCode": "D10AX03", "prescriptionStatus": "Vényköteles (Rx)",
      "dosing": { "hu": "20% krém, vékony réteg naponta 2× tiszta száraz bőrre.", "en": "20% cream, thin layer twice daily on clean dry skin.", "pl": "20% krem, cienka warstwa 2× dziennie na czystą suchą skórę." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 20, "medium": 20, "high": 20 }, "unit": "%", "note": { "hu": "20% (Azelex/Skinoren) = akne + poszt-akne foltok. Naponta 2×, tiszta bőrre. Terhességben is biztonságos.", "en": "20% (Azelex/Skinoren) = acne + post-acne marks. Twice daily on clean skin. Safe in pregnancy.", "pl": "20% (Azelex/Skinoren) = trądzik + przebarwienia. 2× dziennie na czystą skórę. Bezpieczne w ciąży." } },
      "indications": [ "Akne vulgaris", "Posztinflammatorikus hiperpigmentáció / melazma", "Terhesség alatti akne (biztonságos)" ],
      "contraindications": [ "Túlérzékenység az azelainsavval/segédanyaggal", "Sérült bőr" ],
      "commonSideEffects": [ "Enyhe csípés, viszketés, bőrszárazság (átmeneti)", "Lényegesen kíméletesebb a retinoidoknál", "Ritkán hipopigmentáció sötét bőrön" ]
    }
  ],
  "sideEffects": [
    { "hu": "Enyhe lokális irritáció (a leggyakoribb): átmeneti égő/csípő érzés, viszketés, bizsergés és bőrpír az alkalmazás után, főleg az első 1-2 hétben; jellemzően enyhe és a tretinoinnál/tazaroténnél jóval kíméletesebb, idővel csökken.", "en": "Mild local irritation (the most common): transient burning/stinging, itching, tingling and erythema after application, mainly in the first 1-2 weeks; typically mild and far gentler than tretinoin/tazarotene, easing over time.", "pl": "Łagodne miejscowe podrażnienie (najczęstsze): przejściowe pieczenie/szczypanie, świąd, mrowienie i rumień po aplikacji, głównie w pierwszych 1-2 tygodniach; zwykle łagodne i znacznie delikatniejsze niż tretynoina/tazaroten, słabnące z czasem." },
    { "hu": "Bőrszárazság és hámlás: enyhe kiszáradás és pikkelyesedés előfordulhat; hidratáló társításával jól kezelhető.", "en": "Skin dryness and scaling: mild dryness and flaking can occur; well managed by pairing with a moisturizer.", "pl": "Suchość i łuszczenie skóry: może wystąpić łagodna suchość i łuszczenie; dobrze kontrolowane przez połączenie z nawilżaczem." },
    { "hu": "Ritka hipopigmentáció sötétebb bőrtípuson: a tirozináz-gátlás miatt elvileg világosíthat, de a szer szelektíven a hiperaktív (rendellenes) melanocitákra hat, ezért az egészséges bőr depigmentációja ritka; sötét bőrön mégis figyelni kell rá.", "en": "Rare hypopigmentation in darker skin: via tyrosinase inhibition it could in theory lighten, but it acts selectively on hyperactive (abnormal) melanocytes, so depigmentation of normal skin is rare; still worth watching in darker skin.", "pl": "Rzadka hipopigmentacja w ciemniejszej skórze: poprzez hamowanie tyrozynazy teoretycznie może rozjaśniać, ale działa wybiórczo na nadaktywne (nieprawidłowe) melanocyty, więc depigmentacja zdrowej skóry jest rzadka; w ciemnej skórze warto jednak obserwować." },
    { "hu": "Túlérzékenységi reakció (ritka): kontakt dermatitis, kiütés vagy súlyosabb irritáció; allergiás reakció esetén a kezelést le kell állítani.", "en": "Hypersensitivity reaction (rare): contact dermatitis, rash or more severe irritation; discontinue if an allergic reaction occurs.", "pl": "Reakcja nadwrażliwości (rzadka): kontaktowe zapalenie skóry, wysypka lub silniejsze podrażnienie; przy reakcji alergicznej należy przerwać stosowanie." }
  ],
  "contraindications": [
    { "hu": "Ismert túlérzékenység az azelainsavval, propilén-glikollal (gélformulátum) vagy bármely segédanyaggal szemben.", "en": "Known hypersensitivity to azelaic acid, propylene glycol (gel formulation) or any excipient.", "pl": "Znana nadwrażliwość na kwas azelainowy, glikol propylenowy (postać żelowa) lub którąkolwiek substancję pomocniczą." },
    { "hu": "Sérült, mély sebes vagy erősen gyulladt bőr: a felszívódás megnő és az irritáció fokozódik; a gyógyulásig kihagyandó.", "en": "Broken, deeply wounded or severely inflamed skin: absorption increases and irritation worsens; withhold until it heals.", "pl": "Uszkodzona, głęboko zraniona lub silnie zapalna skóra: wchłanianie wzrasta, a podrażnienie się nasila; odstawić do czasu wygojenia." },
    { "hu": "Asztmás betegnél óvatosság: ritkán a lokális azelainsav súlyosbíthat asztmás tüneteket (címke-figyelmeztetés); panasz esetén leállítás.", "en": "Caution in asthmatic patients: rarely topical azelaic acid may worsen asthma symptoms (label warning); discontinue if symptoms occur.", "pl": "Ostrożność u pacjentów z astmą: rzadko miejscowy kwas azelainowy może nasilać objawy astmy (ostrzeżenie na etykiecie); przy objawach odstawić." },
    { "hu": "Friss borotválás vagy alkoholos/tonik-bőrtisztító után közvetlenül: a fokozott penetráció miatt erősebb csípés; várj néhány percet száradásra.", "en": "Right after fresh shaving or an alcohol-based toner/cleanser: stronger stinging due to increased penetration; wait a few minutes for the skin to settle.", "pl": "Bezpośrednio po świeżym goleniu lub toniku/oczyszczaniu na bazie alkoholu: silniejsze szczypanie z powodu zwiększonej penetracji; odczekaj kilka minut." }
  ],
  "name": "Azelaic acid",
  "image": "/pharmaceutical/cream-tube-white.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Természetes C9 dikarbonsav, négyes hatással: antimikrobiális + komedolitikus + gyulladáscsökkentő + tirozináz-gátló (halványítja a hiperpigmentációt). FDA-jóváhagyott aknéra (20%) és rozáceára (15%). Egyik nagy előnye: terhességben is biztonságos.",
  "description": "Az azelainsav egy természetben is előforduló, telített, kilenc szénatomos dikarbonsav (a bőr Malassezia-élesztője is termeli). A retinoidoktól eltérően nem receptoron, hanem több párhuzamos úton hat: gátolja a Cutibacterium acnes szaporodását (antimikrobiális), normalizálja a follikuláris keratinizációt (komedolitikus), semlegesíti a neutrofilek reaktív oxigéngyökeit (gyulladáscsökkentő – ez adja a rozácea-pír elleni hatást), és gátolja a tirozináz enzimet, ezzel halványítja a hiperpigmentációt – szelektíven a hiperaktív melanocitákra hatva. FDA-jóváhagyott aknéra (Azelex/Skinoren 20% krém) és papulopustulosus rozáceára (Finacea 15% gél és hab). A 15% gél a rozácea-vizsgálatban a gyulladt léziókat 51-58%-kal csökkentette a vehikulum 39-40%-ával szemben (PMID 12789172). Kulcsfontosságú gyakorlati előny: terhességi B kategória, vagyis a retinoidokkal ellentétben terhességben és szoptatás alatt is az egyik első választás.",
  "keyInfo": [
    { "label": "ATC kód", "value": "D10AX03 (anti-akne) / dermatológiai" },
    { "label": "Vény-státusz", "value": "Vényköteles (Rx) a 15%/20% töménység; gyengébb kozmetikai változatok OTC" },
    { "label": "Hatásmechanizmus", "value": "Antimikrobiális + komedolitikus + gyulladáscsökkentő + tirozináz-gátló" },
    { "label": "Erősségek", "value": "20% krém (akne) · 15% gél / 15% hab (rozácea)" },
    { "label": "Hatáskezdet", "value": "4-8 hét (akne/rozácea); 8-12+ hét (pigmentfoltok)" }
  ],
  "mechanism": "Az azelainsav négy egymást kiegészítő mechanizmuson keresztül hat: (1) antibakteriális – gátolja a C. acnes fehérjeszintézisét; (2) antikeratinizáló – csökkenti a follikuláris hiperkeratózist, így komedolitikus; (3) gyulladáscsökkentő – megköti a neutrofilek által termelt reaktív oxigéngyököket, ami a rozácea eritémáját és papuláit mérsékli; (4) tirozináz-gátló – csökkenti a melanin-szintézist a hiperaktív melanocitákban, ezért halványítja a posztinflammatorikus hiperpigmentációt és a melazmát, miközben az egészséges bőrt jellemzően nem világosítja.",
  "legalStatus": "EU/HU: vényköteles a terápiás töménység (Skinoren 20% krém és gél, Finacea). USA: FDA Rx (Azelex 20%, Finacea 15% gél/hab). Alacsonyabb (~10%) kozmetikai szérumok vény nélkül is kaphatók. Nem ütemezett.",
  "bioavailability": "Topikális; csekély szisztémás felszívódás (~3-8%), a felszívódott hányad gyorsan ürül (β-oxidáció + vesén át változatlanul)",
  "onsetTime": "4-8 hét (akne és rozácea gyulladt léziók); 8-12+ hét (hiperpigmentáció halványulás)",
  "halfLife": "Szisztémás plazma-felezési idő ~12 óra a kevés felszívódott hányadra",
  "atcCode": "D10AX03",
  "prescriptionStatus": "Vényköteles (Rx) terápiás töménységben; alacsonyabb kozmetikai % OTC",
  "indications": [
    "Akne vulgaris (Azelex/Skinoren 20% krém)",
    "Papulopustulosus rozácea (Finacea 15% gél és hab)",
    "Posztinflammatorikus hiperpigmentáció és melazma (off-label, tirozináz-gátlás révén)",
    "Terhesség/szoptatás alatti akne és rozácea (biztonságos első választás)"
  ],
  "commonSideEffects": [
    "Enyhe, átmeneti égés/csípés, viszketés, bizsergés az első hetekben",
    "Bőrpír és enyhe hámlás/szárazság",
    "Általában jól tolerálható – lényegesen kíméletesebb a retinoidoknál",
    "Ritkán hipopigmentáció sötét bőrtípuson",
    "Ritkán asztmás tünet-súlyosbodás (címke-figyelmeztetés)"
  ],
  "cyp450": [
    "Topikális, elhanyagolható szisztémás CYP-interakció",
    "A felszívódott hányad β-oxidációval és vesén át változatlanul ürül"
  ],
  "crossMolInteractions": [
    "Retinoidok (tretinoin, tazarotén): kombinálható – komplementer mechanizmus, de az additív irritáció miatt eltérő napszakban/váltogatva",
    "Benzoil-peroxid: kombinálható aknéban, additív antibakteriális hatás",
    "Hidrokinon, niacinamid, C-vitamin: hiperpigmentáció-kombinációban szinergisztikus világosítás",
    "Nincs jelentős szisztémás gyógyszer-interakció (terhességben is biztonságos)"
  ],
  "benefits": [
    "Négyes hatás: antibakteriális + komedolitikus + gyulladáscsökkentő + pigment-halványító",
    "Terhességi B kategória – biztonságos terhességben és szoptatás alatt (retinoid-alternatíva)",
    "Rozácea-pír és papulák ellen FDA-jóváhagyott (Finacea, PMID 12789172)",
    "Posztinflammatorikus hiperpigmentációt és melazmát halványít",
    "Jól tolerálható, nem fényérzékenyít úgy, mint a retinoidok"
  ],
  "quickStart": [
    "Tiszta, száraz bőrre, vékony rétegben, naponta 2× (reggel + este); rozácea-fenntartásra elég lehet 1×",
    "Borotválás vagy alkoholos tonik után várj pár percet a csípés elkerülésére",
    "Hidratáló társítása csökkenti az enyhe szárazságot/irritációt",
    "Türelem: akne/rozácea 4-8 hét, pigmentfolt-halványulás 8-12+ hét",
    "Terhességben/szoptatás alatt is használható – a retinoidok ilyenkor tiltottak"
  ],
  "expectations": [
    { "label": "1-2. hét", "body": "Enyhe csípés, bizsergés, esetleg bőrpír az alkalmazás után – általában gyorsan oldódó \"retinizáció\" nélkül. A tolerancia napok alatt javul." },
    { "label": "4-8. hét", "body": "Aknéban kevesebb gyulladt elem és komedó; rozáceában csökkenő pír és papulák. A bőrtextúra simul." },
    { "label": "8-12+. hét", "body": "A posztinflammatorikus hiperpigmentáció és a melazma fokozatosan halványul. A hatás a kezelés folytatásával tartható fenn; rozáceában fenntartó alkalmazás ajánlott." }
  ],
  "quality": {
    "pure": [
      "Skinoren (20% krém / 15% gél), Finacea (15% gél / 15% hab), Azelex (20%) az originator brandek",
      "Az erősség az indikációhoz: 20% akne, 15% rozácea; a kozmetikai ~10% szérumok gyengébbek"
    ],
    "caution": [
      "Az első 1-2 hét enyhe csípése normális; ha tartós erős irritáció, ritkítsd és hidratálj",
      "Sötét bőrtípuson figyelni a ritka hipopigmentációra",
      "Asztmás betegnél a ritka tünet-súlyosbodás lehetősége"
    ],
    "avoid": [
      "Ismert azelainsav- vagy segédanyag-túlérzékenység",
      "Sérült, mély sebes vagy napégett bőr (a gyógyulásig)",
      "Közvetlenül friss borotválás vagy tömény alkoholos tonik után (erősebb csípés)"
    ]
  },
  "interactions": [
    "Tretinoin / tazarotén: komplementer, de váltogatva vagy eltérő napszakban az additív irritáció miatt",
    "Benzoil-peroxid: aknéban kombinálható, additív antibakteriális hatás",
    "Niacinamid / C-vitamin / hidrokinon: pigment-halványításban szinergisztikus",
    "Hidratáló + (retinoid mellett) SPF: irritáció-csökkentés és bőrvédelem",
    "Nincs jelentős szisztémás gyógyszer-interakció"
  ],
  "studies": [
    {
      "title": "Efficacy and safety of azelaic acid (15%) gel as a new treatment for papulopustular rosacea: results from two vehicle-controlled, randomized phase III studies",
      "authors": "Thiboutot D, Thieroff-Ekerdt R, Graupe K.",
      "journal": "J Am Acad Dermatol. 2003;48(6):836-845.",
      "pmid": "12789172"
    },
    {
      "title": "A phase 3 randomized, double-blind, vehicle-controlled trial of azelaic acid foam 15% in the treatment of papulopustular rosacea",
      "authors": "Draelos ZD, Elewski BE, Harper JC, et al.",
      "journal": "Cutis. 2015;96(1):54-61.",
      "pmid": "26244354"
    },
    {
      "title": "Azelaic acid. A review of its pharmacological properties and therapeutic efficacy in acne and hyperpigmentary skin disorders",
      "authors": "Fitton A, Goa KL.",
      "journal": "Drugs. 1991;41(5):780-798.",
      "pmid": "1712709"
    },
    {
      "title": "Efficacy and safety of topical azelaic acid (20 percent cream): an overview of results from European clinical trials and experimental reports",
      "authors": "Graupe K, Cunliffe WJ, Gollnick HP, Zaumseil RP.",
      "journal": "Cutis. 1996;57(1 Suppl):20-35.",
      "pmid": "8654128"
    }
  ],
  "faq": [
    {
      "q": "Miért jó választás azelainsav terhesség alatt?",
      "a": "Mert terhességi B kategória: az állatkísérletek nem mutattak magzati kockázatot, és a szisztémás felszívódás minimális (~3-8%). A retinoidok (tretinoin, tazarotén) ezzel szemben terhességben tiltottak. Ezért a terhes vagy szoptató nőknél, akiknek aknéja vagy rozáceája van, az azelainsav az egyik első vonalbeli, biztonságos topikális választás. (A végső döntést mindig a kezelőorvossal egyeztetve.)"
    },
    {
      "q": "Halványítja a pigmentfoltokat? Hogyan?",
      "a": "Igen. Az azelainsav gátolja a tirozináz enzimet, amely a melanin-szintézis kulcslépését katalizálja, ezzel csökkenti a pigmenttermelést. Fontos, hogy SZELEKTÍVEN a hiperaktív (rendellenes) melanocitákra hat, ezért a posztinflammatorikus hiperpigmentációt és a melazmát halványítja, miközben az egészséges bőrt jellemzően nem világosítja ki. A hatás 8-12+ hét alatt mutatkozik, és gyakran kombinálják niacinamiddal vagy hidrokinonnal."
    },
    {
      "q": "Mi a különbség a 15% és a 20% között?",
      "a": "Az indikáció és a vehikulum dönt: a 20% krém (Azelex/Skinoren) elsősorban AKNÉRA FDA-jóváhagyott, a 15% gél és hab (Finacea) pedig ROZÁCEÁRA. A két töménység hatása átfedő (mindkettő multi-mechanizmusú), a választás a fő panasztól és a bőr toleranciájától függ. Aknéra a 20%, rozácea-pírra a 15% a tipikus."
    }
  ],
  "related": [
    "tretinoin",
    "tazarotene"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 15,
      "medium": 15,
      "high": 20
    },
    "unit": "% (topikális)",
    "note": "15% gél/hab (Finacea) rozáceára, 20% krém (Azelex/Skinoren) aknéra. Vékony réteg tiszta száraz bőrre, naponta 2× (rozácea-fenntartásra elég lehet 1×). NEM a mennyiséget, hanem a töménységet és a gyakoriságot kell az indikációhoz és a toleranciához igazítani. Terhességben is biztonságos."
  }
}
