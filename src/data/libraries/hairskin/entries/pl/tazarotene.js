// Wpis biblioteki Włosy i Skóra. Źródła: etykiety FDA Tazorac / Arazlo / Fabior,
// RCT trądziku short-contact (PMID 11939810), faza III lotionu 0,045% (PMID 31985914),
// porównanie dawek vs tretynoina w fotouszkodzeniu (PMID 11735710), PIH + trądzik w
// ciemniejszej skórze (PMID 16475496). Acetylenowy (3. generacji) miejscowy retinoid PROLEK;
// selektywny RAR-β/γ. Proza PL. Tablice bezpieczeństwa trójjęzyczne.

export default {
  "id": "tazarotene",
  "defaultVariant": "t01",
  "variants": [
    {
      "id": "t005", "routeId": "t005",
      "halfLife": "Miejscowo, działanie miejscowe",
      "bioavailability": "Miejscowo, minimalne wchłanianie ogólnoustrojowe",
      "routeLabel": { "hu": "0,05%", "en": "0.05%", "pl": "0,05%" },
      "routeNote": { "hu": "A kíméletesebb töménység: érzékenyebb bőrhöz, pszoriázishoz vagy a tazarotén bevezetéséhez. Kevésbé irritál, mint a 0,1%, de valamivel lassabb.", "en": "The gentler strength: for more sensitive skin, psoriasis or starting tazarotene. Less irritating than 0.1%, but a bit slower.", "pl": "Łagodniejsze stężenie: dla wrażliwszej skóry, łuszczycy lub wdrożenia tazarotenu. Mniej drażni niż 0,1%, ale nieco wolniejsze." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (akne); 12+ hét (pszoriázis/fotoöregedés)", "en": "4-8 weeks (acne); 12+ weeks (psoriasis/photoaging)", "pl": "4-8 tygodni (trądzik); 12+ tygodni (łuszczyca/fotostarzenie)" },
      "atcCode": "D05AX05", "prescriptionStatus": "Na receptę (Rx)",
      "dosing": { "hu": "Vékony réteg este, tiszta száraz bőrre; kezdés alternáló napokon. Reggel SPF 30+.", "en": "Thin layer in the evening on clean dry skin; start on alternate days. SPF 30+ in the morning.", "pl": "Cienka warstwa wieczorem na czystą suchą skórę; zacznij co drugi dzień. Rano SPF 30+." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.05, "medium": 0.05, "high": 0.05 }, "unit": "%", "note": { "hu": "0,05% = kíméletesebb, érzékeny bőr/pszoriázis. Este, vékony réteg, reggel SPF 30+.", "en": "0.05% = gentler, sensitive skin/psoriasis. Evening, thin layer, SPF 30+ in the morning.", "pl": "0,05% = łagodniejsze, wrażliwa skóra/łuszczyca. Wieczorem, cienka warstwa, rano SPF 30+." } },
      "indications": [ "Łuszczyca plackowata", "Trądzik/fotostarzenie wrażliwszej skóry (stężenie wprowadzające)" ],
      "contraindications": [ "Ciąża (dawna kategoria X FDA)", "Uszkodzona/oparzona słońcem skóra", "Nadwrażliwość" ],
      "commonSideEffects": [ "Umiarkowane podrażnienie (mniejsze niż 0,1%)", "Łuszczenie, suchość", "Światłoczułość (poranny SPF obowiązkowy)" ]
    },
    {
      "id": "t01", "routeId": "t01",
      "halfLife": "Miejscowo, działanie miejscowe",
      "bioavailability": "Miejscowo, minimalne wchłanianie ogólnoustrojowe",
      "routeLabel": { "hu": "0,1%", "en": "0.1%", "pl": "0,1%" },
      "routeNote": { "hu": "Az erősebb töménység: aknéra és kifejezett fotoöregedésre, tapasztalt, toleráns bőrnek. A leghatékonyabb, de a legtöbb irritációval.", "en": "The stronger strength: for acne and pronounced photoaging, for experienced, tolerant skin. Most effective, but with the most irritation.", "pl": "Silniejsze stężenie: na trądzik i wyraźne fotostarzenie, dla doświadczonej, tolerancyjnej skóry. Najskuteczniejsze, ale z największym podrażnieniem." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (akne); 12+ hét (fotoöregedés)", "en": "4-8 weeks (acne); 12+ weeks (photoaging)", "pl": "4-8 tygodni (trądzik); 12+ tygodni (fotostarzenie)" },
      "atcCode": "D05AX05", "prescriptionStatus": "Na receptę (Rx)",
      "dosing": { "hu": "Vékony réteg este; csak ha a 0,05%-ot jól tolerálta. Hidratálás + reggeli SPF 30+.", "en": "Thin layer in the evening; only if 0.05% was well tolerated. Moisturizing + morning SPF 30+.", "pl": "Cienka warstwa wieczorem; tylko jeśli 0,05% było dobrze tolerowane. Nawilżanie + poranny SPF 30+." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 0.1, "medium": 0.1, "high": 0.1 }, "unit": "%", "note": { "hu": "0,1% = erősebb, akne/fotoöregedés. Este, vékony réteg, reggel SPF 30+, hidratálás.", "en": "0.1% = stronger, acne/photoaging. Evening, thin layer, SPF 30+ in the morning, moisturizing.", "pl": "0,1% = silniejsze, trądzik/fotostarzenie. Wieczorem, cienka warstwa, rano SPF 30+, nawilżanie." } },
      "indications": [ "Trądzik pospolity", "Wyraźne fotostarzenie (skóra tolerancyjna)" ],
      "contraindications": [ "Ciąża (dawna kategoria X FDA)", "Uszkodzona/oparzona słońcem skóra", "Skóra retinoido-naiwna/wrażliwa (zacznij od 0,05%)", "Nadwrażliwość" ],
      "commonSideEffects": [ "Największe podrażnienie: pieczenie, szczypanie, rumień, łuszczenie", "Możliwe początkowe zaostrzenie trądziku", "Zwiększona światłoczułość (poranny SPF obowiązkowy)" ]
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
  "shortDesc": "Acetylenowy (trzeciej generacji) miejscowy retinoid prolek. Zatwierdzony przez FDA na trądzik, łuszczycę plackowatą i fotostarzenie (Tazorac, Arazlo lotion 0,045%, Fabior pianka). Silniejszy i bardziej drażniący niż tretynoina; ściśle zakazany w ciąży.",
  "description": "Tazaroten to acetylenowy, miejscowy retinoid trzeciej generacji, który jako prolek jest w skórze szybko hydrolizowany do kwasu tazarotenowego. W przeciwieństwie do innych retinoidów wiąże się selektywnie z podtypami receptora kwasu retinowego β i γ (RAR-β/γ), co normalizuje różnicowanie keratynocytów, zmniejsza hiperproliferację oraz działa komedolitycznie i przeciwzapalnie. FDA zatwierdziła go do trzech wskazań: trądzik (Tazorac żel/krem 0,1%, Arazlo lotion 0,045%, Fabior pianka 0,1%), łuszczyca plackowata (0,05%/0,1%) i fotostarzenie twarzy (krem 0,1%). W badaniu head-to-head tazaroten 0,1% poprawiał drobne zmarszczki i plamiste przebarwienia co najmniej tak samo lub lepiej niż tretynoina 0,05% (PMID 11735710), a w trądziku żel 0,1% short-contact był istotnie lepszy od podłoża (PMID 11939810). Nowoczesny lotion 0,045% (Arazlo) zapewnia podobną skuteczność przy mniejszym podrażnieniu.",
  "keyInfo": [
    { "label": "Kod ATC", "value": "D05AX05 (miejscowy lek przeciwłuszczycowy / retinoid)" },
    { "label": "Status recepty", "value": "Na receptę (Rx)" },
    { "label": "Mechanizm działania", "value": "Selektywny wobec RAR-β/γ retinoid prolek → kwas tazarotenowy; normalizacja keratynizacji" },
    { "label": "Stężenia", "value": "lotion 0,045% · żel/krem 0,05% / 0,1% · pianka 0,1%" },
    { "label": "Początek działania", "value": "4-8 tygodni (trądzik); 12+ tygodni (fotostarzenie, łuszczyca)" }
  ],
  "mechanism": "Tazaroten jest prolekiem, który w skórze jest szybko przekształcany w aktywny kwas tazarotenowy, wiążący się selektywnie z receptorami RAR-β i RAR-γ (nie z RAR-α). Modyfikuje to transkrypcję genów: normalizuje nieprawidłowe różnicowanie keratynocytów, zmniejsza hiperkeratozę mieszkową (działanie komedolityczne), hamuje hiperproliferację naskórka (łuszczyca) i pobudza odnowę macierzy skóry właściwej (fotostarzenie). Ze względu na selektywność wobec RAR jest silny, ale bardziej drażniący niż pan-RAR tretynoina.",
  "legalStatus": "UE/HU: na receptę (Zorac i postacie generyczne; dostępność różni się w zależności od kraju). USA: FDA Rx (Tazorac 0,05%/0,1%, Arazlo lotion 0,045%, Fabior pianka 0,1%). Niesklasyfikowany, ale u kobiet w wieku rozrodczym obowiązuje protokół zapobiegania ciąży zgodnie z etykietą.",
  "bioavailability": "Miejscowo; minimalne, ale mierzalne wchłanianie systemowe (podstawa klasyfikacji teratogennej) – rośnie przy większej powierzchni/wyższym stężeniu",
  "onsetTime": "4-8 tygodni (poprawa trądziku); 12-24 tygodnie (fotostarzenie, łuszczyca)",
  "halfLife": "Okres półtrwania kwasu tazarotenowego w osoczu ~18 godzin (dla niewielkiej wchłoniętej frakcji)",
  "atcCode": "D05AX05",
  "prescriptionStatus": "Na receptę (Rx), nadzór dermatologa; zapobieganie ciąży u kobiet w wieku rozrodczym",
  "indications": [
    "Trądzik pospolity (Tazorac żel/krem 0,1%, Arazlo lotion 0,045%, Fabior pianka 0,1%)",
    "Łuszczyca plackowata (0,05% i 0,1%, na ograniczonej powierzchni ciała)",
    "Fotostarzenie twarzy: drobne zmarszczki i plamiste przebarwienia (krem 0,1%)",
    "Przebarwienia pozapalne (off-label, badane również w ciemniejszych typach skóry)"
  ],
  "commonSideEffects": [
    "Miejscowe podrażnienie: pieczenie, szczypanie, rumień, łuszczenie, suchość (silniejsze niż tretynoina)",
    "Zwiększona światłoczułość – codzienny SPF 30+ obowiązkowy",
    "Początkowe zaostrzenie trądziku (\"purging\") w pierwszych tygodniach",
    "Świąd, uczucie napięcia w miejscu aplikacji",
    "Rzadko kontaktowe zapalenie skóry lub przejściowa zmiana pigmentacji"
  ],
  "cyp450": [
    "Miejscowo, znikoma interakcja systemowa z CYP",
    "Niewielka wchłonięta ilość kwasu tazarotenowego jest eliminowana przez hydrolizę esterazową i utlenianie"
  ],
  "crossMolInteractions": [
    "Nadtlenek benzoilu: w niektórych formulacjach może inaktywować retinoid – stosować rozdzielnie w czasie (rano/wieczorem)",
    "Inne miejscowe środki drażniące (AHA, BHA, rezorcyna, siarka): addytywne podrażnienie, ostrożnie",
    "Środki fotouczulające (niektóre antybiotyki, tiazydy): zwiększona wrażliwość na słońce",
    "Hydrochinon: badany w połączeniu w fotostarzeniu/przebarwieniach (addytywne rozjaśnianie)",
    "Minoksydyl/finasteryd: brak istotnej interakcji (osobne wskazanie)"
  ],
  "benefits": [
    "Trzy wskazania FDA: trądzik, łuszczyca, fotostarzenie",
    "W trądziku żel 0,1% jest istotnie lepszy od podłoża (PMID 11939810)",
    "W fotostarzeniu co najmniej tak dobry jak tretynoina 0,05% (PMID 11735710)",
    "Rozjaśnia również plamiste przebarwienia, badany także w ciemniejszej skórze (PMID 16475496)",
    "Lotion 0,045% (Arazlo) daje podobny efekt przy mniejszym podrażnieniu"
  ],
  "quickStart": [
    "Cienka warstwa na CZYSTĄ, SUCHĄ skórę, wieczorem, przed snem – na wilgotnej skórze podrażnienie rośnie",
    "Zacznij co drugi dzień, potem stopniowo zwiększaj do codziennego stosowania zależnie od tolerancji",
    "Połączenie z nawilżaczem (kanapka retinoidowa) i OBOWIĄZKOWY poranny SPF 30+",
    "Ilość wielkości groszku wystarcza na całą twarz; unikaj okolic oczu, nozdrzy i ust",
    "U kobiet w wieku rozrodczym uprzedni ujemny test ciążowy + antykoncepcja – w ciąży ZAKAZANY"
  ],
  "expectations": [
    { "label": "Tygodnie 1-4", "body": "Podrażnienie, łuszczenie, możliwe przejściowe zaostrzenie trądziku (\"purging\"). Tolerancja stopniowo się poprawia; jeśli jest zbyt silne, zmniejsz częstotliwość aplikacji i nawilżaj." },
    { "label": "Tygodnie 6-12", "body": "Wyraźna poprawa trądziku (mniej zaskórników i zmian zapalnych). Tekstura skóry się wygładza. W fotostarzeniu na widoczną poprawę zmarszczek jeszcze za wcześnie." },
    { "label": "Tygodnie 12-24+", "body": "W fotostarzeniu drobne zmarszczki i plamiste przebarwienia mierzalnie się poprawiają; w łuszczycy blaszki spłaszczają się. Efekt można utrzymać kontynuując leczenie." }
  ],
  "quality": {
    "pure": [
      "Tazorac (żel/krem 0,05%/0,1%), Arazlo (lotion 0,045%), Fabior (pianka 0,1%) to marki oryginalne",
      "Stężenie i podłoże należy dopasować do wskazania i tolerancji skóry (lotion = łagodniejszy)"
    ],
    "caution": [
      "Większe podrażnienie niż tretynoina – stopniowe wprowadzanie i nawilżanie są kluczowe",
      "Zwiększona światłoczułość – niezalecany bez codziennej ochrony przeciwsłonecznej",
      "Na dużej powierzchni/wysokim stężeniu rośnie wchłanianie systemowe (ryzyko ciążowe)"
    ],
    "avoid": [
      "Ciąża i wiek rozrodczy bez skutecznej antykoncepcji (dawna kategoria X FDA)",
      "Karmienie piersią (okolicy brodawki należy w każdym przypadku unikać)",
      "Skóra z wypryskiem, oparzona słońcem lub uszkodzona/zapalna",
      "Nieostrożne łączenie z jednoczesnymi silnymi miejscowymi środkami drażniącymi (siarka, rezorcyna, stężone AHA)"
    ]
  },
  "interactions": [
    "Nadtlenek benzoilu: rozdzielnie w czasie (BPO rano / tazaroten wieczorem), ryzyko inaktywacji przy niektórych formulacjach",
    "Nawilżacz / krem barierowy: zmniejsza podrażnienie, zalecane połączenie (kanapka retinoidowa)",
    "Poranny SPF 30+: obowiązkowy z powodu zwiększonej światłoczułości",
    "Hydrochinon: addytywne rozjaśnianie w połączeniu na przebarwienia (pod nadzorem dermatologa)",
    "Eksfolianty AHA/BHA: tylko ostrożnie, w naprzemienne dni, z powodu addytywnego podrażnienia"
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
      "q": "Jaka jest różnica między tazarotenem a tretynoiną?",
      "a": "Oba są retinoidami miejscowymi, ale tazaroten to acetylenowy prolek trzeciej generacji, który wiąże się SELEKTYWNIE z receptorami RAR-β/γ (tretynoina jest pan-RAR). Dlatego tazaroten jest silniejszy i bardziej drażniący, ale w fotostarzeniu jest co najmniej tak dobry lub lepszy (PMID 11735710). Najważniejsza praktyczna różnica to CIĄŻA: tazaroten był wcześniej w kategorii X FDA (ściśle zakazany), tretynoina w kategorii C. Dla kogoś, kto chce silniejszego efektu i szybszej poprawy trądziku/tekstury i znosi podrażnienie, wyborem jest tazaroten; dla kogoś szukającego łagodniejszego retinoidu – tretynoina (lub lotion tazarotenowy 0,045%)."
    },
    {
      "q": "Dlaczego drażni bardziej i jak to zmniejszyć?",
      "a": "Z powodu selektywności wobec RAR i większej siły działania tazaroten wywołuje silniejszą odpowiedź złuszczającą i zapalną, zwłaszcza w pierwszych tygodniach (\"retynizacja\"). Aby ją zmniejszyć: zacznij co drugi dzień, cienka warstwa na suchą skórę, połączenie z nawilżaczem (kanapka retinoidowa: nawilżacz → retinoid → nawilżacz), a w razie potrzeby wybierz łagodniejszy lotion 0,045% lub stężenie 0,05%. Poranny SPF 30+ jest obowiązkowy, ponieważ cieńsza warstwa rogowa jest bardziej wrażliwa na słońce."
    },
    {
      "q": "Czy mogę stosować go jednocześnie na trądzik I zmarszczki?",
      "a": "Tak, tazaroten działa jednocześnie komedolitycznie (trądzik) i pobudza odnowę skóry właściwej (fotostarzenie), więc ma nakładające się działanie. Na trądzik zwykle stosuje się żel/piankę 0,1% lub lotion 0,045%, na fotostarzenie krem 0,1%. Jeden silny retinoid służy obu celom; wybrane stężenie zależy od tolerancji skóry. Potrzebna jest cierpliwość: trądzik pokazuje poprawę w ciągu 6-12 tygodni, poprawa zmarszczek/pigmentacji w ciągu 12-24+ tygodni."
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
    "unit": "% (miejscowo)",
    "note": "Stężenie zależy od podłoża i wskazania: lotion 0,045% (Arazlo, łagodniejszy trądzik) · żel/krem 0,05% (skóra wrażliwa, łuszczyca) · żel/krem/pianka 0,1% (trądzik, fotostarzenie). Wieczorem, cienką warstwą, na czystą suchą skórę. Do tolerancji należy dopasować NIE ilość, lecz stężenie i częstotliwość. W ciąży ZAKAZANY."
  }
}
