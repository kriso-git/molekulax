// Hair & Skin library entry. Sources: FDA Tazorac / Arazlo / Fabior labels,
// acne short-contact RCT (PMID 11939810), 0.045% lotion phase III (PMID 31985914),
// photodamage dose-comparison vs tretinoin (PMID 11735710), PIH + acne in darker
// skin (PMID 16475496). Acetylenic (3rd-gen) topical retinoid PRODRUG; RAR-β/γ
// selective. HU body authored; EN/PL prose to be backfilled. Safety arrays trilingual.

export default {
  "id": "tazarotene",
  "defaultVariant": "t01",
  "variants": [
    {
      "id": "t005", "routeId": "t005",
      "halfLife": "Topikális, lokális hatás",
      "bioavailability": "Topikális, minimális szisztémás felszívódás",
      "routeLabel": { "hu": "0,05%", "en": "0.05%", "pl": "0,05%" },
      "routeNote": { "hu": "A kíméletesebb töménység: érzékenyebb bőrhöz, pszoriázishoz vagy a tazarotén bevezetéséhez. Kevésbé irritál, mint a 0,1%, de valamivel lassabb.", "en": "The gentler strength: for more sensitive skin, psoriasis or starting tazarotene. Less irritating than 0.1%, but a bit slower.", "pl": "Łagodniejsze stężenie: dla wrażliwszej skóry, łuszczycy lub wdrożenia tazarotenu. Mniej drażni niż 0,1%, ale nieco wolniejsze." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (akne); 12+ hét (pszoriázis/fotoöregedés)", "en": "4-8 weeks (acne); 12+ weeks (psoriasis/photoaging)", "pl": "4-8 tygodni (trądzik); 12+ tygodni (łuszczyca/fotostarzenie)" },
      "atcCode": "D05AX05", "prescriptionStatus": "Vényköteles (Rx)",
      "dosing": { "hu": "Vékony réteg este, tiszta száraz bőrre; kezdés alternáló napokon. Reggel SPF 30+.", "en": "Thin layer in the evening on clean dry skin; start on alternate days. SPF 30+ in the morning.", "pl": "Cienka warstwa wieczorem na czystą suchą skórę; zacznij co drugi dzień. Rano SPF 30+." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.05, "medium": 0.05, "high": 0.05 }, "unit": "%", "note": { "hu": "0,05% = kíméletesebb, érzékeny bőr/pszoriázis. Este, vékony réteg, reggel SPF 30+.", "en": "0.05% = gentler, sensitive skin/psoriasis. Evening, thin layer, SPF 30+ in the morning.", "pl": "0,05% = łagodniejsze, wrażliwa skóra/łuszczyca. Wieczorem, cienka warstwa, rano SPF 30+." } },
      "indications": [ "Plakkos pszoriázis", "Érzékenyebb bőr akne/fotoöregedés (bevezető erősség)" ],
      "contraindications": [ "Terhesség (korábbi FDA X)", "Sérült/napégett bőr", "Túlérzékenység" ],
      "commonSideEffects": [ "Mérsékelt irritáció (kevesebb, mint 0,1%)", "Hámlás, szárazság", "Fényérzékenység (reggeli SPF kötelező)" ]
    },
    {
      "id": "t01", "routeId": "t01",
      "halfLife": "Topikális, lokális hatás",
      "bioavailability": "Topikális, minimális szisztémás felszívódás",
      "routeLabel": { "hu": "0,1%", "en": "0.1%", "pl": "0,1%" },
      "routeNote": { "hu": "Az erősebb töménység: aknéra és kifejezett fotoöregedésre, tapasztalt, toleráns bőrnek. A leghatékonyabb, de a legtöbb irritációval.", "en": "The stronger strength: for acne and pronounced photoaging, for experienced, tolerant skin. Most effective, but with the most irritation.", "pl": "Silniejsze stężenie: na trądzik i wyraźne fotostarzenie, dla doświadczonej, tolerancyjnej skóry. Najskuteczniejsze, ale z największym podrażnieniem." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (akne); 12+ hét (fotoöregedés)", "en": "4-8 weeks (acne); 12+ weeks (photoaging)", "pl": "4-8 tygodni (trądzik); 12+ tygodni (fotostarzenie)" },
      "atcCode": "D05AX05", "prescriptionStatus": "Vényköteles (Rx)",
      "dosing": { "hu": "Vékony réteg este; csak ha a 0,05%-ot jól tolerálta. Hidratálás + reggeli SPF 30+.", "en": "Thin layer in the evening; only if 0.05% was well tolerated. Moisturizing + morning SPF 30+.", "pl": "Cienka warstwa wieczorem; tylko jeśli 0,05% było dobrze tolerowane. Nawilżanie + poranny SPF 30+." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.1, "medium": 0.1, "high": 0.1 }, "unit": "%", "note": { "hu": "0,1% = erősebb, akne/fotoöregedés. Este, vékony réteg, reggel SPF 30+, hidratálás.", "en": "0.1% = stronger, acne/photoaging. Evening, thin layer, SPF 30+ in the morning, moisturizing.", "pl": "0,1% = silniejsze, trądzik/fotostarzenie. Wieczorem, cienka warstwa, rano SPF 30+, nawilżanie." } },
      "indications": [ "Akne vulgaris", "Kifejezett fotoöregedés (toleráns bőr)" ],
      "contraindications": [ "Terhesség (korábbi FDA X)", "Sérült/napégett bőr", "Retinoid-naiv/érzékeny bőr (kezdj 0,05%-kal)", "Túlérzékenység" ],
      "commonSideEffects": [ "A legtöbb irritáció: égés, csípés, bőrpír, hámlás", "Kezdeti aknefellángolás lehet", "Fokozott fényérzékenység (reggeli SPF kötelező)" ]
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
  "shortDesc": "Acetilénes (harmadik generációs) topikális retinoid prodrug. FDA-jóváhagyott aknéra, plakkos pszoriázisra és fotoöregedésre (Tazorac, Arazlo 0,045% lotion, Fabior hab). A tretinoinnál erősebb és irritálóbb; terhességben szigorúan tilos.",
  "description": "A Tazarotén egy acetilénes, harmadik generációs topikális retinoid, amely prodrugként a bőrben gyorsan tazaroténsavvá hidrolizál. A többi retinoiddal szemben szelektíven a retinsav-receptor β és γ (RAR-β/γ) altípusokhoz kötődik, ami normalizálja a keratinocita-differenciálódást, csökkenti a hiperproliferációt, és komedolitikus + gyulladáscsökkentő hatású. Az FDA három indikációra hagyta jóvá: akne (Tazorac 0,1% gél/krém, Arazlo 0,045% lotion, Fabior 0,1% hab), plakkos pszoriázis (0,05%/0,1%) és arc-fotoöregedés (0,1% krém). Fej-fej melletti vizsgálatban a 0,1% tazarotén legalább olyan jól vagy jobban javította a finom ráncokat és a foltos hiperpigmentációt, mint a 0,05% tretinoin (PMID 11735710), aknéban pedig a rövid-kontakt 0,1% gél szignifikánsan jobb volt a vehikulumnál (PMID 11939810). A modern 0,045% lotion (Arazlo) hasonló hatékonyság mellett kisebb irritációt ad.",
  "keyInfo": [
    { "label": "ATC kód", "value": "D05AX05 (topikális antipszoriatikum / retinoid)" },
    { "label": "Vény-státusz", "value": "Vényköteles (Rx)" },
    { "label": "Hatásmechanizmus", "value": "RAR-β/γ szelektív retinoid prodrug → tazaroténsav; keratinizáció-normalizálás" },
    { "label": "Erősségek", "value": "0,045% lotion · 0,05% / 0,1% gél/krém · 0,1% hab" },
    { "label": "Hatáskezdet", "value": "4-8 hét (akne); 12+ hét (fotoöregedés, pszoriázis)" }
  ],
  "mechanism": "A tazarotén prodrug, a bőrben gyorsan aktív tazaroténsavvá alakul, amely szelektíven a RAR-β és RAR-γ receptorokhoz kötődik (a RAR-α-hoz nem). Ez módosítja a gén-transzkripciót: normalizálja a kóros keratinocita-differenciálódást, csökkenti a follikuláris hiperkeratózist (komedolitikus hatás), gátolja az epidermális hiperproliferációt (pszoriázis), és serkenti a dermális mátrix-megújulást (fotoöregedés). A RAR-szelektivitás miatt potens, de irritálóbb, mint a pan-RAR tretinoin.",
  "legalStatus": "EU/HU: vényköteles (Zorac és generikus formák; az elérhetőség országonként eltér). USA: FDA Rx (Tazorac 0,05%/0,1%, Arazlo 0,045% lotion, Fabior 0,1% hab). Nem ütemezett, de fogamzóképes nőnél terhességi-prevenciós protokoll a címke szerint.",
  "bioavailability": "Topikális; minimális, de mérhető szisztémás felszívódás (a teratogén-besorolás alapja) – nagyobb felületen/erősségen nő",
  "onsetTime": "4-8 hét (akne-javulás); 12-24 hét (fotoöregedés, pszoriázis)",
  "halfLife": "Tazaroténsav plazma-felezési idő ~18 óra (a kevés felszívódott hányadra)",
  "atcCode": "D05AX05",
  "prescriptionStatus": "Vényköteles (Rx), bőrgyógyász felügyelet; terhességi-prevenció fogamzóképes nőnél",
  "indications": [
    "Akne vulgaris (Tazorac 0,1% gél/krém, Arazlo 0,045% lotion, Fabior 0,1% hab)",
    "Plakkos pszoriázis (0,05% és 0,1%, korlátozott testfelületen)",
    "Arc-fotoöregedés: finom ráncok és foltos hiperpigmentáció (0,1% krém)",
    "Posztinflammatorikus hiperpigmentáció (off-label, sötétebb bőrtípuson is vizsgált)"
  ],
  "commonSideEffects": [
    "Lokális irritáció: égés, csípés, bőrpír, hámlás, szárazság (a tretinoinnál erősebb)",
    "Fokozott fényérzékenység – kötelező napi SPF 30+",
    "Kezdeti aknefellángolás (\"purging\") az első hetekben",
    "Viszketés, feszülő érzés az alkalmazás helyén",
    "Ritkán kontakt dermatitis vagy átmeneti pigment-eltérés"
  ],
  "cyp450": [
    "Topikális, elhanyagolható szisztémás CYP-interakció",
    "A kevés felszívódott tazaroténsav eszteráz-hidrolízissel és oxidációval ürül"
  ],
  "crossMolInteractions": [
    "Benzoil-peroxid: egyes formulákban inaktiválhatja a retinoidot – időben elkülönítve (reggel/este) alkalmazandó",
    "Más helyi irritánsok (AHA, BHA, gyanta, kén): additív irritáció, óvatosan",
    "Fotoszenzibilizáló szerek (egyes antibiotikumok, tiazidok): fokozott napérzékenység",
    "Hidrokinon: fotoöregedés/hiperpigmentáció kombinációban vizsgálva (additív világosítás)",
    "Minoxidil/finasteride: nincs releváns interakció (külön indikáció)"
  ],
  "benefits": [
    "Három FDA-indikáció: akne, pszoriázis, fotoöregedés",
    "Aknéban a 0,1% gél szignifikánsan jobb a vehikulumnál (PMID 11939810)",
    "Fotoöregedésben legalább olyan jó, mint a 0,05% tretinoin (PMID 11735710)",
    "Foltos hiperpigmentációt is halványítja, sötétebb bőrön is vizsgált (PMID 16475496)",
    "A 0,045% lotion (Arazlo) hasonló hatás mellett kisebb irritáció"
  ],
  "quickStart": [
    "Vékony réteg TISZTA, SZÁRAZ bőrre, este, lefekvés előtt – nedves bőrön nő az irritáció",
    "Kezdés alternáló napokon (másnaponta), majd fokozatos napi alkalmazásra emelés tolerancia szerint",
    "Hidratáló társítása (retinoid-szendvics) és KÖTELEZŐ reggeli SPF 30+",
    "Borsónyi mennyiség elég az egész archoz; kerüld a szem, orrnyílás, ajak környékét",
    "Fogamzóképes nőnél előzetes negatív terhességi teszt + fogamzásgátlás – terhességben TILOS"
  ],
  "expectations": [
    { "label": "1-4. hét", "body": "Irritáció, hámlás, esetleg átmeneti aknefellángolás (\"purging\"). A tolerancia fokozatosan javul; ha túl erős, ritkítsd az alkalmazást és hidratálj." },
    { "label": "6-12. hét", "body": "Aknéban érdemi javulás (kevesebb komedó és gyulladt elem). A bőrtextúra simul. Fotoöregedésnél még korai a látható ránc-javulás." },
    { "label": "12-24+. hét", "body": "Fotoöregedésben a finom ráncok és a foltos hiperpigmentáció mérhetően javulnak; pszoriázisban a plakkok lapulnak. A hatás a kezelés folytatásával tartható fenn." }
  ],
  "quality": {
    "pure": [
      "Tazorac (0,05%/0,1% gél/krém), Arazlo (0,045% lotion), Fabior (0,1% hab) az originator brandek",
      "Az erősség és a vehikulum az indikációhoz és a bőrtoleranciához igazítandó (lotion = kíméletesebb)"
    ],
    "caution": [
      "A tretinoinnál erősebb irritáció – fokozatos bevezetés és hidratálás kulcsfontosságú",
      "Fokozott fényérzékenység – napi fényvédelem nélkül nem javasolt",
      "Nagy felületen/erős koncentrációban nő a szisztémás felszívódás (terhességi kockázat)"
    ],
    "avoid": [
      "Terhesség és fogamzóképes kor megbízható fogamzásgátlás nélkül (korábbi FDA X)",
      "Szoptatás (mellbimbó környéke mindenképp kerülendő)",
      "Ekcémás, napégett vagy sérült/gyulladt bőr",
      "Egyidejű erős helyi irritánsok (kén, gyanta, tömény AHA) óvatlan kombinációja"
    ]
  },
  "interactions": [
    "Benzoil-peroxid: időben elkülönítve (reggel BPO / este tazarotén), egyes formuláknál inaktiválás-kockázat",
    "Hidratáló / barrier-krém: irritáció-csökkentő, ajánlott társítás (retinoid-szendvics)",
    "Reggeli SPF 30+: kötelező a fokozott fényérzékenység miatt",
    "Hidrokinon: hiperpigmentáció-kombinációban additív világosítás (bőrgyógyász felügyelettel)",
    "AHA/BHA hámlasztók: csak óvatosan, váltakozó napokon, az additív irritáció miatt"
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
      "q": "Mi a különbség a tazarotén és a tretinoin között?",
      "a": "Mindkettő topikális retinoid, de a tazarotén harmadik generációs, acetilénes prodrug, amely SZELEKTÍVEN a RAR-β/γ receptorokhoz kötődik (a tretinoin pan-RAR). Emiatt a tazarotén potensebb és irritálóbb, viszont fotoöregedésben legalább olyan jó vagy jobb (PMID 11735710). A legfontosabb gyakorlati különbség a TERHESSÉG: a tazarotén korábban FDA X kategóriás (szigorúan tilos), a tretinoin C. Aki erősebb hatást és gyorsabb akne-/textúra-javulást szeretne és bírja az irritációt, annak a tazarotén; aki kíméletesebb retinoidot keres, annak a tretinoin (vagy a 0,045% tazarotén lotion)."
    },
    {
      "q": "Miért irritál jobban, és hogyan csökkenthető?",
      "a": "A RAR-szelektivitás és a nagyobb potencia miatt a tazarotén erősebb hámlasztó és gyulladásos választ vált ki, főleg az első hetekben (\"retinizáció\"). Csökkentés: kezdés másnaponta, vékony réteg száraz bőrre, hidratáló társítása (retinoid-szendvics: hidratáló → retinoid → hidratáló), és ha kell, a kíméletesebb 0,045% lotion vagy 0,05% erősség választása. A reggeli SPF 30+ kötelező, mert a vékonyabb stratum corneum napérzékenyebb."
    },
    {
      "q": "Használhatom akne ÉS ránc ellen egyszerre?",
      "a": "Igen, a tazarotén egyszerre komedolitikus (akne) és serkenti a dermális megújulást (fotoöregedés), ezért átfedő hatású. Aknéra jellemzően a 0,1% gél/hab vagy a 0,045% lotion, fotoöregedésre a 0,1% krém használatos. Egy potens retinoid mindkét célt szolgálja; a választott erősség a bőr toleranciájától függ. Türelem kell: az akne 6-12 hét, a ránc-/pigment-javulás 12-24+ hét alatt mutatkozik."
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
    "unit": "% (topikális)",
    "note": "Az erősség a vehikulumtól és az indikációtól függ: 0,045% lotion (Arazlo, kíméletesebb akne) · 0,05% gél/krém (érzékeny bőr, pszoriázis) · 0,1% gél/krém/hab (akne, fotoöregedés). Este, vékony rétegben, tiszta száraz bőrre. NEM a mennyiséget, hanem a koncentrációt és a gyakoriságot kell a toleranciához igazítani. Terhességben TILOS."
  }
}
