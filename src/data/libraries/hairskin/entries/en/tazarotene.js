// Hair & Skin library entry. Sources: FDA Tazorac / Arazlo / Fabior labels,
// acne short-contact RCT (PMID 11939810), 0.045% lotion phase III (PMID 31985914),
// photodamage dose-comparison vs tretinoin (PMID 11735710), PIH + acne in darker
// skin (PMID 16475496). Acetylenic (3rd-gen) topical retinoid PRODRUG; RAR-β/γ
// selective. EN prose. Safety arrays trilingual.

export default {
  "id": "tazarotene",
  "defaultVariant": "t01",
  "variants": [
    {
      "id": "t005", "routeId": "t005",
      "halfLife": "Topical, local action",
      "bioavailability": "Topical, minimal systemic absorption",
      "routeLabel": { "hu": "0,05%", "en": "0.05%", "pl": "0,05%" },
      "routeNote": { "hu": "A kíméletesebb töménység: érzékenyebb bőrhöz, pszoriázishoz vagy a tazarotén bevezetéséhez. Kevésbé irritál, mint a 0,1%, de valamivel lassabb.", "en": "The gentler strength: for more sensitive skin, psoriasis or starting tazarotene. Less irritating than 0.1%, but a bit slower.", "pl": "Łagodniejsze stężenie: dla wrażliwszej skóry, łuszczycy lub wdrożenia tazarotenu. Mniej drażni niż 0,1%, ale nieco wolniejsze." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (akne); 12+ hét (pszoriázis/fotoöregedés)", "en": "4-8 weeks (acne); 12+ weeks (psoriasis/photoaging)", "pl": "4-8 tygodni (trądzik); 12+ tygodni (łuszczyca/fotostarzenie)" },
      "atcCode": "D05AX05", "prescriptionStatus": "Prescription-only (Rx)",
      "dosing": { "hu": "Vékony réteg este, tiszta száraz bőrre; kezdés alternáló napokon. Reggel SPF 30+.", "en": "Thin layer in the evening on clean dry skin; start on alternate days. SPF 30+ in the morning.", "pl": "Cienka warstwa wieczorem na czystą suchą skórę; zacznij co drugi dzień. Rano SPF 30+." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.05, "medium": 0.05, "high": 0.05 }, "unit": "%", "note": { "hu": "0,05% = kíméletesebb, érzékeny bőr/pszoriázis. Este, vékony réteg, reggel SPF 30+.", "en": "0.05% = gentler, sensitive skin/psoriasis. Evening, thin layer, SPF 30+ in the morning.", "pl": "0,05% = łagodniejsze, wrażliwa skóra/łuszczyca. Wieczorem, cienka warstwa, rano SPF 30+." } },
      "indications": [ "Plaque psoriasis", "More sensitive skin acne/photoaging (introductory strength)" ],
      "contraindications": [ "Pregnancy (former FDA X)", "Broken/sunburned skin", "Hypersensitivity" ],
      "commonSideEffects": [ "Moderate irritation (less than 0.1%)", "Peeling, dryness", "Photosensitivity (morning SPF mandatory)" ]
    },
    {
      "id": "t01", "routeId": "t01",
      "halfLife": "Topical, local action",
      "bioavailability": "Topical, minimal systemic absorption",
      "routeLabel": { "hu": "0,1%", "en": "0.1%", "pl": "0,1%" },
      "routeNote": { "hu": "Az erősebb töménység: aknéra és kifejezett fotoöregedésre, tapasztalt, toleráns bőrnek. A leghatékonyabb, de a legtöbb irritációval.", "en": "The stronger strength: for acne and pronounced photoaging, for experienced, tolerant skin. Most effective, but with the most irritation.", "pl": "Silniejsze stężenie: na trądzik i wyraźne fotostarzenie, dla doświadczonej, tolerancyjnej skóry. Najskuteczniejsze, ale z największym podrażnieniem." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (akne); 12+ hét (fotoöregedés)", "en": "4-8 weeks (acne); 12+ weeks (photoaging)", "pl": "4-8 tygodni (trądzik); 12+ tygodni (fotostarzenie)" },
      "atcCode": "D05AX05", "prescriptionStatus": "Prescription-only (Rx)",
      "dosing": { "hu": "Vékony réteg este; csak ha a 0,05%-ot jól tolerálta. Hidratálás + reggeli SPF 30+.", "en": "Thin layer in the evening; only if 0.05% was well tolerated. Moisturizing + morning SPF 30+.", "pl": "Cienka warstwa wieczorem; tylko jeśli 0,05% było dobrze tolerowane. Nawilżanie + poranny SPF 30+." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.1, "medium": 0.1, "high": 0.1 }, "unit": "%", "note": { "hu": "0,1% = erősebb, akne/fotoöregedés. Este, vékony réteg, reggel SPF 30+, hidratálás.", "en": "0.1% = stronger, acne/photoaging. Evening, thin layer, SPF 30+ in the morning, moisturizing.", "pl": "0,1% = silniejsze, trądzik/fotostarzenie. Wieczorem, cienka warstwa, rano SPF 30+, nawilżanie." } },
      "indications": [ "Acne vulgaris", "Pronounced photoaging (tolerant skin)" ],
      "contraindications": [ "Pregnancy (former FDA X)", "Broken/sunburned skin", "Retinoid-naive/sensitive skin (start with 0.05%)", "Hypersensitivity" ],
      "commonSideEffects": [ "The most irritation: burning, stinging, erythema, peeling", "Initial acne flare possible", "Increased photosensitivity (morning SPF mandatory)" ]
    }
  ],
  "sideEffects": [
    { "hu": "Lokális irritáció (a leggyakoribb): égő/csípő érzés, bőrpír, hámlás, szárazság és viszketés; a tazarotén a tretinoinnál erősebb és irritálóbb retinoid, ezért gyakran fokozatos bevezetés (alternáló napokon) és hidratáló társítása szükséges.", "en": "Local irritation (the most common): burning/stinging, erythema, peeling, dryness and itching; tazarotene is a more potent and more irritating retinoid than tretinoin, so gradual introduction (alternate days) and a moisturizer are often needed.", "pl": "Miejscowe podrażnienie (najczęstsze): pieczenie/szczypanie, rumień, łuszczenie, suchość i świąd; tazaroten jest silniejszym i bardziej drażniącym retinoidem niż tretynoina, dlatego często konieczne jest stopniowe wprowadzanie (co drugi dzień) i stosowanie nawilżacza." },
    { "hu": "Fokozott fényérzékenység: a retinoidok elvékonyítják a stratum corneumot, ezért a bőr érzékenyebb a napfényre; kötelező a napi fényvédelem (SPF 30+), és kerülni kell a túlzott UV-expozíciót, szoláriumot.", "en": "Increased photosensitivity: retinoids thin the stratum corneum, so the skin is more sensitive to sunlight; daily sun protection (SPF 30+) is mandatory and excessive UV exposure and tanning beds must be avoided.", "pl": "Zwiększona światłoczułość: retinoidy ścieńczają warstwę rogową, więc skóra jest bardziej wrażliwa na słońce; obowiązkowa codzienna ochrona przeciwsłoneczna (SPF 30+), należy unikać nadmiernej ekspozycji na UV i solarium." },
    { "hu": "Kezdeti aknefellángolás (\"purging\"): a kezelés első hetiben az akne átmenetileg súlyosbodhat, ahogy a mélyebb komedók a felszínre kerülnek; rendszerint néhány hét alatt rendeződik, nem a kezelés kudarca.", "en": "Initial acne flare (\"purging\"): in the first weeks acne may transiently worsen as deeper comedones surface; usually settles within a few weeks and is not a treatment failure.", "pl": "Początkowe zaostrzenie trądziku (\"purging\"): w pierwszych tygodniach trądzik może przejściowo się nasilić, gdy głębsze zaskórniki wychodzą na powierzchnię; zwykle ustępuje w ciągu kilku tygodni i nie jest niepowodzeniem leczenia." },
    { "hu": "Kontakt dermatitis és bőrelszíneződés: ritkán allergiás vagy irritatív kontakt dermatitis, valamint átmeneti hiper- vagy hipopigmentáció, főleg sötétebb bőrtípuson.", "en": "Contact dermatitis and skin discoloration: rarely allergic or irritant contact dermatitis, plus transient hyper- or hypopigmentation, especially in darker skin types.", "pl": "Kontaktowe zapalenie skóry i przebarwienia: rzadko alergiczne lub z podrażnienia kontaktowe zapalenie skóry oraz przejściowa hiper- lub hipopigmentacja, zwłaszcza w ciemniejszych typach skóry." }
  ],
  "contraindications": [
    { "hu": "TERHESSÉG (korábbi FDA X kategória): a tazarotén az egyetlen topikális retinoid, amelyet terhességben szigorúan ellenjavalltak, mert állatkísérletben és a szisztémás felszívódás miatt teratogén kockázatú; fogamzóképes nőnél a kezelés előtt negatív terhességi teszt és megbízható fogamzásgátlás kötelező.", "en": "PREGNANCY (former FDA category X): tazarotene is the one topical retinoid strictly contraindicated in pregnancy due to teratogenic risk shown in animals and via systemic absorption; in women of childbearing potential a negative pregnancy test and reliable contraception are mandatory before starting.", "pl": "CIĄŻA (dawna kategoria X FDA): tazaroten jest jedynym retinoidem miejscowym bezwzględnie przeciwwskazanym w ciąży z powodu ryzyka teratogennego wykazanego u zwierząt i poprzez wchłanianie systemowe; u kobiet w wieku rozrodczym przed rozpoczęciem obowiązkowy jest ujemny test ciążowy i skuteczna antykoncepcja." },
    { "hu": "Szoptatás: nem ajánlott, mert nem ismert, kiválasztódik-e jelentős mértékben az anyatejbe; ha mégis használják, kerülni kell a mellbimbó környékét.", "en": "Breastfeeding: not recommended as it is unknown whether it is excreted in significant amounts in breast milk; if used, the nipple area must be avoided.", "pl": "Karmienie piersią: niezalecane, ponieważ nie wiadomo, czy przenika w istotnych ilościach do mleka; jeśli jest stosowany, należy unikać okolicy brodawki." },
    { "hu": "Ekcéma, napégés vagy sérült/gyulladt bőr: a fokozott felszívódás és irritáció miatt nem szabad alkalmazni; az érintett bőr gyógyulásáig kihagyandó.", "en": "Eczema, sunburn or broken/inflamed skin: must not be applied due to increased absorption and irritation; withhold until the affected skin heals.", "pl": "Wyprysk, oparzenie słoneczne lub uszkodzona/zapalna skóra: nie wolno stosować z powodu zwiększonego wchłaniania i podrażnienia; odstawić do czasu wygojenia." },
    { "hu": "Ismert túlérzékenység a tazaroténnal vagy a készítmény bármely összetevőjével szemben; óvatosság más helyi irritánsokkal (benzoil-peroxid, alfa-hidroxisavak, gyanta) együtt.", "en": "Known hypersensitivity to tazarotene or any excipient; caution when combined with other local irritants (benzoyl peroxide, alpha-hydroxy acids, resorcinol).", "pl": "Znana nadwrażliwość na tazaroten lub którąkolwiek substancję pomocniczą; ostrożność przy łączeniu z innymi miejscowymi środkami drażniącymi (nadtlenek benzoilu, alfa-hydroksykwasy, rezorcyna)." }
  ],
  "name": "Tazarotene",
  "image": "/pharmaceutical/cream-tube-white.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Acetylenic (third-generation) topical retinoid prodrug. FDA-approved for acne, plaque psoriasis and photoaging (Tazorac, Arazlo 0.045% lotion, Fabior foam). More potent and more irritating than tretinoin; strictly prohibited in pregnancy.",
  "description": "Tazarotene is an acetylenic, third-generation topical retinoid that, as a prodrug, is rapidly hydrolyzed in the skin to tazarotenic acid. Unlike other retinoids, it binds selectively to the retinoic acid receptor β and γ (RAR-β/γ) subtypes, which normalizes keratinocyte differentiation, reduces hyperproliferation, and is comedolytic plus anti-inflammatory. The FDA approved it for three indications: acne (Tazorac 0.1% gel/cream, Arazlo 0.045% lotion, Fabior 0.1% foam), plaque psoriasis (0.05%/0.1%) and facial photoaging (0.1% cream). In a head-to-head trial, 0.1% tazarotene improved fine wrinkles and mottled hyperpigmentation at least as well as or better than 0.05% tretinoin (PMID 11735710), and in acne the short-contact 0.1% gel was significantly superior to vehicle (PMID 11939810). The modern 0.045% lotion (Arazlo) provides similar efficacy with less irritation.",
  "keyInfo": [
    { "label": "ATC code", "value": "D05AX05 (topical antipsoriatic / retinoid)" },
    { "label": "Prescription status", "value": "Prescription-only (Rx)" },
    { "label": "Mechanism of action", "value": "RAR-β/γ selective retinoid prodrug → tazarotenic acid; keratinization normalization" },
    { "label": "Strengths", "value": "0.045% lotion · 0.05% / 0.1% gel/cream · 0.1% foam" },
    { "label": "Onset of action", "value": "4-8 weeks (acne); 12+ weeks (photoaging, psoriasis)" }
  ],
  "mechanism": "Tazarotene is a prodrug that is rapidly converted in the skin to the active tazarotenic acid, which binds selectively to the RAR-β and RAR-γ receptors (not to RAR-α). This modifies gene transcription: it normalizes abnormal keratinocyte differentiation, reduces follicular hyperkeratosis (comedolytic effect), inhibits epidermal hyperproliferation (psoriasis), and stimulates dermal matrix renewal (photoaging). Because of its RAR selectivity it is potent, but more irritating than the pan-RAR tretinoin.",
  "legalStatus": "EU/HU: prescription-only (Zorac and generic forms; availability varies by country). USA: FDA Rx (Tazorac 0.05%/0.1%, Arazlo 0.045% lotion, Fabior 0.1% foam). Not scheduled, but in women of childbearing potential a pregnancy-prevention protocol per the label applies.",
  "bioavailability": "Topical; minimal but measurable systemic absorption (the basis of the teratogen classification) – increases over a larger area/higher strength",
  "onsetTime": "4-8 weeks (acne improvement); 12-24 weeks (photoaging, psoriasis)",
  "halfLife": "Tazarotenic acid plasma half-life ~18 hours (for the small absorbed fraction)",
  "atcCode": "D05AX05",
  "prescriptionStatus": "Prescription-only (Rx), dermatologist supervision; pregnancy prevention in women of childbearing potential",
  "indications": [
    "Acne vulgaris (Tazorac 0.1% gel/cream, Arazlo 0.045% lotion, Fabior 0.1% foam)",
    "Plaque psoriasis (0.05% and 0.1%, on a limited body surface)",
    "Facial photoaging: fine wrinkles and mottled hyperpigmentation (0.1% cream)",
    "Post-inflammatory hyperpigmentation (off-label, also studied in darker skin types)"
  ],
  "commonSideEffects": [
    "Local irritation: burning, stinging, erythema, peeling, dryness (more potent than tretinoin)",
    "Increased photosensitivity – daily SPF 30+ mandatory",
    "Initial acne flare (\"purging\") in the first weeks",
    "Itching, tightness at the application site",
    "Rarely contact dermatitis or transient pigment change"
  ],
  "cyp450": [
    "Topical, negligible systemic CYP interaction",
    "The small absorbed amount of tazarotenic acid is eliminated by esterase hydrolysis and oxidation"
  ],
  "crossMolInteractions": [
    "Benzoyl peroxide: in some formulations it may inactivate the retinoid – apply separated in time (morning/evening)",
    "Other local irritants (AHA, BHA, resorcinol, sulfur): additive irritation, use with caution",
    "Photosensitizing agents (certain antibiotics, thiazides): increased sun sensitivity",
    "Hydroquinone: studied in combination for photoaging/hyperpigmentation (additive lightening)",
    "Minoxidil/finasteride: no relevant interaction (separate indication)"
  ],
  "benefits": [
    "Three FDA indications: acne, psoriasis, photoaging",
    "In acne the 0.1% gel is significantly superior to vehicle (PMID 11939810)",
    "In photoaging at least as good as 0.05% tretinoin (PMID 11735710)",
    "Also fades mottled hyperpigmentation, studied in darker skin too (PMID 16475496)",
    "The 0.045% lotion (Arazlo) offers similar effect with less irritation"
  ],
  "quickStart": [
    "Thin layer on CLEAN, DRY skin, in the evening, before bed – irritation increases on damp skin",
    "Start on alternate days (every other day), then gradually increase to daily use as tolerated",
    "Pair with a moisturizer (retinoid sandwich) and MANDATORY morning SPF 30+",
    "A pea-sized amount is enough for the whole face; avoid the eye, nostril and lip area",
    "In women of childbearing potential a prior negative pregnancy test + contraception – PROHIBITED in pregnancy"
  ],
  "expectations": [
    { "label": "Weeks 1-4", "body": "Irritation, peeling, possibly transient acne flare (\"purging\"). Tolerance gradually improves; if it is too strong, reduce the frequency of application and moisturize." },
    { "label": "Weeks 6-12", "body": "Meaningful improvement in acne (fewer comedones and inflamed lesions). Skin texture smooths out. For photoaging, visible wrinkle improvement is still early." },
    { "label": "Weeks 12-24+", "body": "In photoaging, fine wrinkles and mottled hyperpigmentation measurably improve; in psoriasis the plaques flatten. The effect can be maintained by continuing treatment." }
  ],
  "quality": {
    "pure": [
      "Tazorac (0.05%/0.1% gel/cream), Arazlo (0.045% lotion), Fabior (0.1% foam) are the originator brands",
      "The strength and the vehicle should be matched to the indication and skin tolerance (lotion = gentler)"
    ],
    "caution": [
      "More irritation than tretinoin – gradual introduction and moisturizing are key",
      "Increased photosensitivity – not recommended without daily sun protection",
      "On a large area/high concentration systemic absorption increases (pregnancy risk)"
    ],
    "avoid": [
      "Pregnancy and childbearing age without reliable contraception (former FDA X)",
      "Breastfeeding (the nipple area must be avoided in any case)",
      "Eczematous, sunburned or broken/inflamed skin",
      "Careless combination with concurrent strong local irritants (sulfur, resorcinol, concentrated AHA)"
    ]
  },
  "interactions": [
    "Benzoyl peroxide: separated in time (BPO in the morning / tazarotene in the evening), risk of inactivation with some formulations",
    "Moisturizer / barrier cream: irritation-reducing, recommended pairing (retinoid sandwich)",
    "Morning SPF 30+: mandatory because of the increased photosensitivity",
    "Hydroquinone: additive lightening in hyperpigmentation combination (with dermatologist supervision)",
    "AHA/BHA exfoliants: only with caution, on alternating days, because of the additive irritation"
  ],
  "studies": [
    {
      "title": "Successful treatment of acne vulgaris using a new method: results of a randomized vehicle-controlled trial of short-contact therapy with 0.1% tazarotene gel",
      "authors": "Bershad S, Singer GK, Parente JE, et al.",
      "journal": "Arch Dermatol. 2002;138(4):481-489.",
      "pmid": "11939810"
    },
    {
      "title": "Tazarotene 0.045% Lotion for Once-Daily Treatment of Moderate-to-Severe Acne Vulgaris: Results from Two Phase 3 Trials",
      "authors": "Tanghetti EA, Werschler WP, Lain T, et al.",
      "journal": "J Drugs Dermatol. 2020;19(1):70-77.",
      "pmid": "31985914"
    },
    {
      "title": "Tazarotene cream for the treatment of facial photodamage: a multicenter, investigator-masked, randomized, vehicle-controlled, parallel comparison of 0.01%, 0.025%, 0.05%, and 0.1% tazarotene creams with 0.05% tretinoin emollient cream applied once daily for 24 weeks",
      "authors": "Kang S, Leyden JJ, Lowe NJ, et al.",
      "journal": "Arch Dermatol. 2001;137(12):1597-1604.",
      "pmid": "11735710"
    },
    {
      "title": "Tazarotene cream for postinflammatory hyperpigmentation and acne vulgaris in darker skin: a double-blind, randomized, vehicle-controlled study",
      "authors": "Grimes P, Callender V.",
      "journal": "Cutis. 2006;77(1):45-50.",
      "pmid": "16475496"
    }
  ],
  "faq": [
    {
      "q": "What is the difference between tazarotene and tretinoin?",
      "a": "Both are topical retinoids, but tazarotene is a third-generation, acetylenic prodrug that binds SELECTIVELY to the RAR-β/γ receptors (tretinoin is pan-RAR). Because of this tazarotene is more potent and more irritating, but in photoaging it is at least as good or better (PMID 11735710). The most important practical difference is PREGNANCY: tazarotene was formerly FDA category X (strictly prohibited), tretinoin is C. For someone who wants a stronger effect and faster acne/texture improvement and can tolerate the irritation, tazarotene is the choice; for someone looking for a gentler retinoid, tretinoin (or the 0.045% tazarotene lotion)."
    },
    {
      "q": "Why does it irritate more, and how can it be reduced?",
      "a": "Because of the RAR selectivity and greater potency, tazarotene triggers a stronger exfoliating and inflammatory response, especially in the first weeks (\"retinization\"). To reduce it: start every other day, thin layer on dry skin, pair with a moisturizer (retinoid sandwich: moisturizer → retinoid → moisturizer), and if needed choose the gentler 0.045% lotion or 0.05% strength. Morning SPF 30+ is mandatory because the thinner stratum corneum is more sun-sensitive."
    },
    {
      "q": "Can I use it against acne AND wrinkles at the same time?",
      "a": "Yes, tazarotene is at once comedolytic (acne) and stimulates dermal renewal (photoaging), so it has overlapping effects. For acne the 0.1% gel/foam or the 0.045% lotion is typically used, for photoaging the 0.1% cream. A single potent retinoid serves both goals; the chosen strength depends on the skin's tolerance. Patience is needed: acne shows improvement within 6-12 weeks, wrinkle/pigment improvement within 12-24+ weeks."
    }
  ],
  "related": [
    "tretinoin",
    "azelaic-acid"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 0.045,
      "medium": 0.05,
      "high": 0.1
    },
    "unit": "% (topical)",
    "note": "The strength depends on the vehicle and the indication: 0.045% lotion (Arazlo, gentler acne) · 0.05% gel/cream (sensitive skin, psoriasis) · 0.1% gel/cream/foam (acne, photoaging). In the evening, in a thin layer, on clean dry skin. It is not the amount but the concentration and frequency that should be matched to tolerance. PROHIBITED in pregnancy."
  }
}
