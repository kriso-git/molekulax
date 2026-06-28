// Pozycja biblioteki Włosy i Skóra. Źródła: etykiety FDA Finacea / Azelex, żel 15% na
// trądzik różowaty faza III (PMID 12789172), pianka 15% na trądzik różowaty faza 3
// (PMID 26244354), przegląd farmakologiczny (PMID 1712709), krem 20% przegląd trądziku
// (PMID 8654128). Naturalnie występujący kwas dikarboksylowy C9; przeciwbakteryjny +
// komedolityczny + przeciwzapalny + inhibitor tyrozynazy. Kategoria ciążowa B (bezpieczny).

export default {
  "id": "azelaic-acid",
  "defaultVariant": "a20",
  "variants": [
    {
      "id": "a15", "routeId": "a15",
      "halfLife": "Miejscowo, działanie miejscowe",
      "bioavailability": "Miejscowo, minimalne wchłanianie ogólnoustrojowe",
      "routeLabel": { "hu": "15% (rozácea)", "en": "15% (rosacea)", "pl": "15% (trądzik różowaty)" },
      "routeNote": { "hu": "A 15% gél/hab (Finacea) elsősorban ROZÁCEÁRA FDA-jóváhagyott: a gyulladásos papulákat és a pírt célozza. Kíméletes, terhességben is biztonságos.", "en": "The 15% gel/foam (Finacea) is FDA-approved mainly for ROSACEA: it targets inflammatory papules and redness. Gentle, safe in pregnancy.", "pl": "15% żel/pianka (Finacea) jest zatwierdzona przez FDA głównie na TRĄDZIK RÓŻOWATY: celuje w zapalne grudki i zaczerwienienie. Łagodna, bezpieczna w ciąży." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (rozácea pír/papulák)", "en": "4-8 weeks (rosacea redness/papules)", "pl": "4-8 tygodni (rumień/grudki różowate)" },
      "atcCode": "D10AX03", "prescriptionStatus": "Na receptę (Rx)",
      "dosing": { "hu": "15% gél/hab, vékony réteg naponta 2× tiszta bőrre (rozácea-fenntartásra elég 1× is).", "en": "15% gel/foam, thin layer twice daily on clean skin (once daily may suffice for rosacea maintenance).", "pl": "15% żel/pianka, cienka warstwa 2× dziennie na czystą skórę (do podtrzymania może wystarczyć 1×)." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 15, "medium": 15, "high": 15 }, "unit": "%", "note": { "hu": "15% (Finacea) = rozácea. Naponta 2×, tiszta bőrre. Terhességben is biztonságos.", "en": "15% (Finacea) = rosacea. Twice daily on clean skin. Safe in pregnancy.", "pl": "15% (Finacea) = trądzik różowaty. 2× dziennie na czystą skórę. Bezpieczne w ciąży." } },
      "indications": [ "Trądzik różowaty grudkowo-krostkowy (zaczerwienienie, grudki)", "Skóra wrażliwa, trądzik/trądzik różowaty w ciąży" ],
      "contraindications": [ "Nadwrażliwość na kwas azelainowy/substancję pomocniczą", "Uszkodzona skóra" ],
      "commonSideEffects": [ "Łagodne szczypanie, świąd, rumień (przejściowe)", "Zwykle dobrze tolerowany", "Rzadko hipopigmentacja na ciemnej skórze" ]
    },
    {
      "id": "a20", "routeId": "a20",
      "halfLife": "Miejscowo, działanie miejscowe",
      "bioavailability": "Miejscowo, minimalne wchłanianie ogólnoustrojowe",
      "routeLabel": { "hu": "20% (akne)", "en": "20% (acne)", "pl": "20% (trądzik)" },
      "routeNote": { "hu": "A 20% krém (Azelex/Skinoren) elsősorban AKNÉRA FDA-jóváhagyott: komedolitikus + antibakteriális + gyulladáscsökkentő, és halványítja a poszt-akne foltokat. Terhességben is biztonságos.", "en": "The 20% cream (Azelex/Skinoren) is FDA-approved mainly for ACNE: comedolytic + antibacterial + anti-inflammatory, and lightens post-acne marks. Safe in pregnancy.", "pl": "20% krem (Azelex/Skinoren) jest zatwierdzony przez FDA głównie na TRĄDZIK: komedolityczny + antybakteryjny + przeciwzapalny, rozjaśnia przebarwienia po trądziku. Bezpieczny w ciąży." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (akne); 8-12+ hét (pigmentfoltok)", "en": "4-8 weeks (acne); 8-12+ weeks (pigment marks)", "pl": "4-8 tygodni (trądzik); 8-12+ tygodni (przebarwienia)" },
      "atcCode": "D10AX03", "prescriptionStatus": "Na receptę (Rx)",
      "dosing": { "hu": "20% krém, vékony réteg naponta 2× tiszta száraz bőrre.", "en": "20% cream, thin layer twice daily on clean dry skin.", "pl": "20% krem, cienka warstwa 2× dziennie na czystą suchą skórę." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 20, "medium": 20, "high": 20 }, "unit": "%", "note": { "hu": "20% (Azelex/Skinoren) = akne + poszt-akne foltok. Naponta 2×, tiszta bőrre. Terhességben is biztonságos.", "en": "20% (Azelex/Skinoren) = acne + post-acne marks. Twice daily on clean skin. Safe in pregnancy.", "pl": "20% (Azelex/Skinoren) = trądzik + przebarwienia. 2× dziennie na czystą skórę. Bezpieczne w ciąży." } },
      "indications": [ "Trądzik pospolity", "Przebarwienia pozapalne / melasma", "Trądzik w ciąży (bezpieczny)" ],
      "contraindications": [ "Nadwrażliwość na kwas azelainowy/substancję pomocniczą", "Uszkodzona skóra" ],
      "commonSideEffects": [ "Łagodne szczypanie, świąd, suchość skóry (przejściowe)", "Znacznie delikatniejszy niż retinoidy", "Rzadko hipopigmentacja na ciemnej skórze" ]
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
  "shortDesc": "Naturalnie występujący kwas dikarboksylowy C9 o poczwórnym działaniu: przeciwbakteryjnym + komedolitycznym + przeciwzapalnym + jako inhibitor tyrozynazy (rozjaśnia przebarwienia). Zatwierdzony przez FDA na trądzik (20%) i trądzik różowaty (15%). Jedna z głównych zalet: jest bezpieczny w ciąży.",
  "description": "Kwas azelainowy to naturalnie występujący, nasycony, dziewięciowęglowy kwas dikarboksylowy (wytwarzają go także drożdżaki Malassezia bytujące na skórze). W przeciwieństwie do retinoidów nie działa przez receptor, lecz wieloma równoległymi szlakami: hamuje namnażanie Cutibacterium acnes (przeciwbakteryjnie), normalizuje keratynizację mieszków włosowych (komedolitycznie), neutralizuje reaktywne formy tlenu neutrofili (przeciwzapalnie – to daje działanie przeciw zaczerwienieniu w trądziku różowatym) i hamuje enzym tyrozynazę, rozjaśniając tym samym przebarwienia – działając wybiórczo na nadaktywne melanocyty. Jest zatwierdzony przez FDA na trądzik (Azelex/Skinoren krem 20%) i trądzik różowaty grudkowo-krostkowy (Finacea żel i pianka 15%). W badaniu nad trądzikiem różowatym żel 15% zmniejszył zmiany zapalne o 51-58% w porównaniu z 39-40% dla podłoża (PMID 12789172). Kluczowa zaleta praktyczna: kategoria ciążowa B, co oznacza, że w przeciwieństwie do retinoidów jest jednym z pierwszych wyborów w ciąży i podczas karmienia piersią.",
  "keyInfo": [
    { "label": "Kod ATC", "value": "D10AX03 (przeciwtrądzikowy) / dermatologiczny" },
    { "label": "Status recepturowy", "value": "Na receptę (Rx) w stężeniu 15%/20%; słabsze warianty kosmetyczne dostępne bez recepty (OTC)" },
    { "label": "Mechanizm działania", "value": "Przeciwbakteryjny + komedolityczny + przeciwzapalny + inhibitor tyrozynazy" },
    { "label": "Moce", "value": "krem 20% (trądzik) · żel 15% / pianka 15% (trądzik różowaty)" },
    { "label": "Początek działania", "value": "4-8 tygodni (trądzik/trądzik różowaty); 8-12+ tygodni (przebarwienia)" }
  ],
  "mechanism": "Kwas azelainowy działa poprzez cztery uzupełniające się mechanizmy: (1) przeciwbakteryjny – hamuje syntezę białek C. acnes; (2) antykeratynizujący – zmniejsza nadmierne rogowacenie mieszków włosowych, co czyni go komedolitycznym; (3) przeciwzapalny – wychwytuje reaktywne formy tlenu wytwarzane przez neutrofile, co łagodzi rumień i grudki w trądziku różowatym; (4) inhibitor tyrozynazy – zmniejsza syntezę melaniny w nadaktywnych melanocytach, dzięki czemu rozjaśnia przebarwienia pozapalne i melasmę, zwykle nie rozjaśniając zdrowej skóry.",
  "legalStatus": "UE/HU: stężenie terapeutyczne dostępne na receptę (Skinoren krem i żel 20%, Finacea). USA: FDA Rx (Azelex 20%, Finacea żel/pianka 15%). Niższe (~10%) serum kosmetyczne dostępne bez recepty. Niesklasyfikowany w wykazie środków kontrolowanych.",
  "bioavailability": "Miejscowo; znikome wchłanianie ogólnoustrojowe (~3-8%), wchłonięta frakcja jest szybko wydalana (β-oksydacja + w postaci niezmienionej przez nerki)",
  "onsetTime": "4-8 tygodni (zmiany zapalne w trądziku i trądziku różowatym); 8-12+ tygodni (rozjaśnianie przebarwień)",
  "halfLife": "Ogólnoustrojowy okres półtrwania w osoczu ~12 godzin dla niewielkiej wchłoniętej frakcji",
  "atcCode": "D10AX03",
  "prescriptionStatus": "Na receptę (Rx) w stężeniu terapeutycznym; niższy % kosmetyczny dostępny bez recepty (OTC)",
  "indications": [
    "Trądzik pospolity (Azelex/Skinoren krem 20%)",
    "Trądzik różowaty grudkowo-krostkowy (Finacea żel i pianka 15%)",
    "Przebarwienia pozapalne i melasma (poza wskazaniami, poprzez hamowanie tyrozynazy)",
    "Trądzik i trądzik różowaty w ciąży/podczas karmienia piersią (bezpieczny pierwszy wybór)"
  ],
  "commonSideEffects": [
    "Łagodne, przejściowe pieczenie/szczypanie, świąd, mrowienie w pierwszych tygodniach",
    "Rumień i łagodne łuszczenie/suchość",
    "Zwykle dobrze tolerowany – znacznie delikatniejszy niż retinoidy",
    "Rzadko hipopigmentacja na ciemnych typach skóry",
    "Rzadko nasilenie objawów astmy (ostrzeżenie na etykiecie)"
  ],
  "cyp450": [
    "Miejscowo, znikoma ogólnoustrojowa interakcja z CYP",
    "Wchłonięta frakcja jest wydalana w drodze β-oksydacji oraz w postaci niezmienionej przez nerki"
  ],
  "crossMolInteractions": [
    "Retinoidy (tretynoina, tazaroten): można łączyć – mechanizm komplementarny, ale o innej porze dnia/naprzemiennie ze względu na addytywne podrażnienie",
    "Nadtlenek benzoilu: można łączyć w trądziku, addytywne działanie przeciwbakteryjne",
    "Hydrochinon, niacynamid, witamina C: synergistyczne rozjaśnianie w połączeniu na przebarwienia",
    "Brak istotnych ogólnoustrojowych interakcji lekowych (bezpieczny także w ciąży)"
  ],
  "benefits": [
    "Poczwórne działanie: przeciwbakteryjne + komedolityczne + przeciwzapalne + rozjaśniające przebarwienia",
    "Kategoria ciążowa B – bezpieczny w ciąży i podczas karmienia piersią (alternatywa dla retinoidów)",
    "Zatwierdzony przez FDA przeciw zaczerwienieniu i grudkom w trądziku różowatym (Finacea, PMID 12789172)",
    "Rozjaśnia przebarwienia pozapalne i melasmę",
    "Dobrze tolerowany, nie uwrażliwia na światło tak jak retinoidy"
  ],
  "quickStart": [
    "Na czystą, suchą skórę, cienką warstwą, 2× dziennie (rano + wieczorem); do podtrzymania w trądziku różowatym może wystarczyć 1×",
    "Po goleniu lub toniku na bazie alkoholu odczekaj kilka minut, aby uniknąć szczypania",
    "Połączenie z nawilżaczem zmniejsza łagodną suchość/podrażnienie",
    "Cierpliwość: trądzik/trądzik różowaty 4-8 tygodni, rozjaśnianie przebarwień 8-12+ tygodni",
    "Można stosować w ciąży/podczas karmienia piersią – retinoidy są wtedy zabronione"
  ],
  "expectations": [
    { "label": "Tydzień 1-2", "body": "Łagodne szczypanie, mrowienie, ewentualnie rumień po aplikacji – zwykle bez szybko ustępującej \"retynizacji\". Tolerancja poprawia się w ciągu kilku dni." },
    { "label": "Tydzień 4-8", "body": "Mniej zmian zapalnych i zaskórników w trądziku; malejące zaczerwienienie i grudki w trądziku różowatym. Tekstura skóry się wygładza." },
    { "label": "Tydzień 8-12+", "body": "Przebarwienia pozapalne i melasma stopniowo się rozjaśniają. Efekt można utrzymać kontynuując leczenie; w trądziku różowatym zalecane jest stosowanie podtrzymujące." }
  ],
  "quality": {
    "pure": [
      "Skinoren (krem 20% / żel 15%), Finacea (żel 15% / pianka 15%), Azelex (20%) to marki oryginalne",
      "Dopasuj moc do wskazania: 20% trądzik, 15% trądzik różowaty; kosmetyczne serum ~10% są słabsze"
    ],
    "caution": [
      "Łagodne szczypanie w pierwszych 1-2 tygodniach jest normalne; przy utrzymującym się silnym podrażnieniu zmniejsz częstotliwość i nawilżaj",
      "Na ciemnych typach skóry obserwuj rzadką hipopigmentację",
      "Możliwość rzadkiego nasilenia objawów u pacjentów z astmą"
    ],
    "avoid": [
      "Znana nadwrażliwość na kwas azelainowy lub substancję pomocniczą",
      "Uszkodzona, głęboko zraniona lub poparzona słońcem skóra (do czasu wygojenia)",
      "Bezpośrednio po świeżym goleniu lub mocnym toniku na bazie alkoholu (silniejsze szczypanie)"
    ]
  },
  "interactions": [
    "Tretynoina / tazaroten: komplementarne, ale naprzemiennie lub o innej porze dnia ze względu na addytywne podrażnienie",
    "Nadtlenek benzoilu: można łączyć w trądziku, addytywne działanie przeciwbakteryjne",
    "Niacynamid / witamina C / hydrochinon: synergistyczne w rozjaśnianiu przebarwień",
    "Nawilżacz + (obok retinoidu) SPF: zmniejszenie podrażnienia i ochrona skóry",
    "Brak istotnych ogólnoustrojowych interakcji lekowych"
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
      "q": "Dlaczego kwas azelainowy to dobry wybór w ciąży?",
      "a": "Ponieważ należy do kategorii ciążowej B: badania na zwierzętach nie wykazały ryzyka dla płodu, a wchłanianie ogólnoustrojowe jest minimalne (~3-8%). Retinoidy (tretynoina, tazaroten) są natomiast zabronione w ciąży. Dlatego u kobiet w ciąży lub karmiących piersią, które mają trądzik lub trądzik różowaty, kwas azelainowy jest jednym z pierwszorzutowych, bezpiecznych wyborów miejscowych. (Ostateczną decyzję zawsze podejmuj w porozumieniu z lekarzem prowadzącym.)"
    },
    {
      "q": "Czy rozjaśnia przebarwienia? Jak?",
      "a": "Tak. Kwas azelainowy hamuje enzym tyrozynazę, który katalizuje kluczowy etap syntezy melaniny, zmniejszając w ten sposób produkcję pigmentu. Co istotne, działa WYBIÓRCZO na nadaktywne (nieprawidłowe) melanocyty, dlatego rozjaśnia przebarwienia pozapalne i melasmę, zwykle nie rozjaśniając zdrowej skóry. Efekt pojawia się w ciągu 8-12+ tygodni i często łączy się go z niacynamidem lub hydrochinonem."
    },
    {
      "q": "Jaka jest różnica między 15% a 20%?",
      "a": "Decyduje wskazanie i podłoże: krem 20% (Azelex/Skinoren) jest zatwierdzony przez FDA głównie na TRĄDZIK, a żel i pianka 15% (Finacea) na TRĄDZIK RÓŻOWATY. Działanie obu stężeń się pokrywa (oba są wielomechanizmowe), a wybór zależy od głównej dolegliwości i tolerancji skóry. Na trądzik typowe jest 20%, na zaczerwienienie w trądziku różowatym 15%."
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
    "unit": "% (miejscowo)",
    "note": "Żel/pianka 15% (Finacea) na trądzik różowaty, krem 20% (Azelex/Skinoren) na trądzik. Cienka warstwa na czystą suchą skórę, 2× dziennie (do podtrzymania w trądziku różowatym może wystarczyć 1×). Do wskazania i tolerancji należy dopasować nie ilość, lecz stężenie i częstotliwość. Bezpieczny w ciąży."
  }
}
