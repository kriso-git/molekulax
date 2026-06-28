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
      "halfLife": "Topical, local action",
      "bioavailability": "Topical, minimal systemic absorption",
      "routeLabel": { "hu": "15% (rozácea)", "en": "15% (rosacea)", "pl": "15% (trądzik różowaty)" },
      "routeNote": { "hu": "A 15% gél/hab (Finacea) elsősorban ROZÁCEÁRA FDA-jóváhagyott: a gyulladásos papulákat és a pírt célozza. Kíméletes, terhességben is biztonságos.", "en": "The 15% gel/foam (Finacea) is FDA-approved mainly for ROSACEA: it targets inflammatory papules and redness. Gentle, safe in pregnancy.", "pl": "15% żel/pianka (Finacea) jest zatwierdzona przez FDA głównie na TRĄDZIK RÓŻOWATY: celuje w zapalne grudki i zaczerwienienie. Łagodna, bezpieczna w ciąży." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (rozácea pír/papulák)", "en": "4-8 weeks (rosacea redness/papules)", "pl": "4-8 tygodni (rumień/grudki różowate)" },
      "atcCode": "D10AX03", "prescriptionStatus": "Prescription only (Rx)",
      "dosing": { "hu": "15% gél/hab, vékony réteg naponta 2× tiszta bőrre (rozácea-fenntartásra elég 1× is).", "en": "15% gel/foam, thin layer twice daily on clean skin (once daily may suffice for rosacea maintenance).", "pl": "15% żel/pianka, cienka warstwa 2× dziennie na czystą skórę (do podtrzymania może wystarczyć 1×)." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 15, "medium": 15, "high": 15 }, "unit": "%", "note": { "hu": "15% (Finacea) = rozácea. Naponta 2×, tiszta bőrre. Terhességben is biztonságos.", "en": "15% (Finacea) = rosacea. Twice daily on clean skin. Safe in pregnancy.", "pl": "15% (Finacea) = trądzik różowaty. 2× dziennie na czystą skórę. Bezpieczne w ciąży." } },
      "indications": [ "Papulopustular rosacea (redness, papules)", "Sensitive skin, acne/rosacea during pregnancy" ],
      "contraindications": [ "Hypersensitivity to azelaic acid/excipient", "Broken skin" ],
      "commonSideEffects": [ "Mild stinging, itching, erythema (transient)", "Generally well tolerated", "Rarely hypopigmentation on dark skin" ]
    },
    {
      "id": "a20", "routeId": "a20",
      "halfLife": "Topical, local action",
      "bioavailability": "Topical, minimal systemic absorption",
      "routeLabel": { "hu": "20% (akne)", "en": "20% (acne)", "pl": "20% (trądzik)" },
      "routeNote": { "hu": "A 20% krém (Azelex/Skinoren) elsősorban AKNÉRA FDA-jóváhagyott: komedolitikus + antibakteriális + gyulladáscsökkentő, és halványítja a poszt-akne foltokat. Terhességben is biztonságos.", "en": "The 20% cream (Azelex/Skinoren) is FDA-approved mainly for ACNE: comedolytic + antibacterial + anti-inflammatory, and lightens post-acne marks. Safe in pregnancy.", "pl": "20% krem (Azelex/Skinoren) jest zatwierdzony przez FDA głównie na TRĄDZIK: komedolityczny + antybakteryjny + przeciwzapalny, rozjaśnia przebarwienia po trądziku. Bezpieczny w ciąży." },
      "image": "/pharmaceutical/cream-tube-white.png",
      "onsetTime": { "hu": "4-8 hét (akne); 8-12+ hét (pigmentfoltok)", "en": "4-8 weeks (acne); 8-12+ weeks (pigment marks)", "pl": "4-8 tygodni (trądzik); 8-12+ tygodni (przebarwienia)" },
      "atcCode": "D10AX03", "prescriptionStatus": "Prescription only (Rx)",
      "dosing": { "hu": "20% krém, vékony réteg naponta 2× tiszta száraz bőrre.", "en": "20% cream, thin layer twice daily on clean dry skin.", "pl": "20% krem, cienka warstwa 2× dziennie na czystą suchą skórę." },
      "doseCalc": { "type": "fixed", "fixed": { "low": 20, "medium": 20, "high": 20 }, "unit": "%", "note": { "hu": "20% (Azelex/Skinoren) = akne + poszt-akne foltok. Naponta 2×, tiszta bőrre. Terhességben is biztonságos.", "en": "20% (Azelex/Skinoren) = acne + post-acne marks. Twice daily on clean skin. Safe in pregnancy.", "pl": "20% (Azelex/Skinoren) = trądzik + przebarwienia. 2× dziennie na czystą skórę. Bezpieczne w ciąży." } },
      "indications": [ "Acne vulgaris", "Post-inflammatory hyperpigmentation / melasma", "Acne during pregnancy (safe)" ],
      "contraindications": [ "Hypersensitivity to azelaic acid/excipient", "Broken skin" ],
      "commonSideEffects": [ "Mild stinging, itching, skin dryness (transient)", "Substantially gentler than retinoids", "Rarely hypopigmentation on dark skin" ]
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
  "shortDesc": "Naturally occurring C9 dicarboxylic acid with a fourfold action: antimicrobial + comedolytic + anti-inflammatory + tyrosinase inhibitor (it lightens hyperpigmentation). FDA-approved for acne (20%) and rosacea (15%). One major advantage: it is safe in pregnancy.",
  "description": "Azelaic acid is a naturally occurring, saturated, nine-carbon dicarboxylic acid (the skin's Malassezia yeast also produces it). Unlike retinoids, it does not act on a receptor but through several parallel pathways: it inhibits the proliferation of Cutibacterium acnes (antimicrobial), normalizes follicular keratinization (comedolytic), neutralizes the reactive oxygen species of neutrophils (anti-inflammatory – this is what gives it its action against rosacea redness), and inhibits the tyrosinase enzyme, thereby lightening hyperpigmentation – acting selectively on hyperactive melanocytes. It is FDA-approved for acne (Azelex/Skinoren 20% cream) and papulopustular rosacea (Finacea 15% gel and foam). In the rosacea study, the 15% gel reduced inflammatory lesions by 51-58% versus 39-40% for the vehicle (PMID 12789172). A key practical advantage: pregnancy category B, meaning that, unlike retinoids, it is one of the first choices during pregnancy and breastfeeding.",
  "keyInfo": [
    { "label": "ATC code", "value": "D10AX03 (anti-acne) / dermatological" },
    { "label": "Prescription status", "value": "Prescription only (Rx) at the 15%/20% concentration; weaker cosmetic versions are OTC" },
    { "label": "Mechanism of action", "value": "Antimicrobial + comedolytic + anti-inflammatory + tyrosinase inhibitor" },
    { "label": "Strengths", "value": "20% cream (acne) · 15% gel / 15% foam (rosacea)" },
    { "label": "Onset of action", "value": "4-8 weeks (acne/rosacea); 8-12+ weeks (pigment marks)" }
  ],
  "mechanism": "Azelaic acid acts through four complementary mechanisms: (1) antibacterial – it inhibits the protein synthesis of C. acnes; (2) antikeratinizing – it reduces follicular hyperkeratosis, making it comedolytic; (3) anti-inflammatory – it scavenges the reactive oxygen species produced by neutrophils, which mitigates the erythema and papules of rosacea; (4) tyrosinase inhibitor – it reduces melanin synthesis in hyperactive melanocytes, thereby lightening post-inflammatory hyperpigmentation and melasma while typically not lightening healthy skin.",
  "legalStatus": "EU/HU: the therapeutic concentration is prescription only (Skinoren 20% cream and gel, Finacea). USA: FDA Rx (Azelex 20%, Finacea 15% gel/foam). Lower (~10%) cosmetic serums are available over the counter. Not scheduled.",
  "bioavailability": "Topical; minimal systemic absorption (~3-8%), the absorbed fraction is rapidly eliminated (β-oxidation + unchanged via the kidneys)",
  "onsetTime": "4-8 weeks (acne and rosacea inflammatory lesions); 8-12+ weeks (hyperpigmentation lightening)",
  "halfLife": "Systemic plasma half-life ~12 hours for the small absorbed fraction",
  "atcCode": "D10AX03",
  "prescriptionStatus": "Prescription only (Rx) at therapeutic concentration; lower cosmetic % OTC",
  "indications": [
    "Acne vulgaris (Azelex/Skinoren 20% cream)",
    "Papulopustular rosacea (Finacea 15% gel and foam)",
    "Post-inflammatory hyperpigmentation and melasma (off-label, via tyrosinase inhibition)",
    "Acne and rosacea during pregnancy/breastfeeding (safe first choice)"
  ],
  "commonSideEffects": [
    "Mild, transient burning/stinging, itching, tingling in the first weeks",
    "Erythema and mild flaking/dryness",
    "Generally well tolerated – substantially gentler than retinoids",
    "Rarely hypopigmentation on dark skin types",
    "Rarely worsening of asthma symptoms (label warning)"
  ],
  "cyp450": [
    "Topical, negligible systemic CYP interaction",
    "The absorbed fraction is eliminated via β-oxidation and unchanged through the kidneys"
  ],
  "crossMolInteractions": [
    "Retinoids (tretinoin, tazarotene): can be combined – complementary mechanism, but use at a different time of day/alternating because of the additive irritation",
    "Benzoyl peroxide: can be combined for acne, additive antibacterial effect",
    "Hydroquinone, niacinamide, vitamin C: synergistic lightening in a hyperpigmentation combination",
    "No significant systemic drug interaction (safe in pregnancy as well)"
  ],
  "benefits": [
    "Fourfold action: antibacterial + comedolytic + anti-inflammatory + pigment-lightening",
    "Pregnancy category B – safe in pregnancy and breastfeeding (retinoid alternative)",
    "FDA-approved against rosacea redness and papules (Finacea, PMID 12789172)",
    "Lightens post-inflammatory hyperpigmentation and melasma",
    "Well tolerated, does not photosensitize the way retinoids do"
  ],
  "quickStart": [
    "On clean, dry skin, in a thin layer, twice daily (morning + evening); once daily may be enough for rosacea maintenance",
    "After shaving or an alcohol-based toner, wait a few minutes to avoid stinging",
    "Pairing with a moisturizer reduces the mild dryness/irritation",
    "Patience: acne/rosacea 4-8 weeks, pigment-mark lightening 8-12+ weeks",
    "Can be used during pregnancy/breastfeeding – retinoids are prohibited at these times"
  ],
  "expectations": [
    { "label": "Weeks 1-2", "body": "Mild stinging, tingling, possibly erythema after application – usually without a quickly resolving \"retinization\". Tolerance improves within days." },
    { "label": "Weeks 4-8", "body": "Fewer inflammatory lesions and comedones in acne; decreasing redness and papules in rosacea. Skin texture smooths out." },
    { "label": "Weeks 8-12+", "body": "Post-inflammatory hyperpigmentation and melasma gradually lighten. The effect can be maintained by continuing treatment; in rosacea, maintenance use is recommended." }
  ],
  "quality": {
    "pure": [
      "Skinoren (20% cream / 15% gel), Finacea (15% gel / 15% foam), Azelex (20%) are the originator brands",
      "Match the strength to the indication: 20% acne, 15% rosacea; the cosmetic ~10% serums are weaker"
    ],
    "caution": [
      "Mild stinging in the first 1-2 weeks is normal; if there is persistent strong irritation, reduce frequency and moisturize",
      "Watch for the rare hypopigmentation on dark skin types",
      "Possibility of the rare symptom worsening in asthmatic patients"
    ],
    "avoid": [
      "Known azelaic acid or excipient hypersensitivity",
      "Broken, deeply wounded or sunburned skin (until it heals)",
      "Immediately after fresh shaving or a strong alcohol-based toner (stronger stinging)"
    ]
  },
  "interactions": [
    "Tretinoin / tazarotene: complementary, but alternate or use at a different time of day because of the additive irritation",
    "Benzoyl peroxide: can be combined for acne, additive antibacterial effect",
    "Niacinamide / vitamin C / hydroquinone: synergistic in pigment lightening",
    "Moisturizer + (alongside a retinoid) SPF: irritation reduction and skin protection",
    "No significant systemic drug interaction"
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
      "q": "Why is azelaic acid a good choice during pregnancy?",
      "a": "Because it is pregnancy category B: animal studies showed no fetal risk, and systemic absorption is minimal (~3-8%). Retinoids (tretinoin, tazarotene), by contrast, are prohibited during pregnancy. That is why, for pregnant or breastfeeding women who have acne or rosacea, azelaic acid is one of the first-line, safe topical choices. (Always make the final decision in consultation with your treating physician.)"
    },
    {
      "q": "Does it lighten pigment marks? How?",
      "a": "Yes. Azelaic acid inhibits the tyrosinase enzyme, which catalyzes a key step of melanin synthesis, thereby reducing pigment production. Importantly, it acts SELECTIVELY on hyperactive (abnormal) melanocytes, so it lightens post-inflammatory hyperpigmentation and melasma while typically not lightening healthy skin. The effect appears over 8-12+ weeks and it is often combined with niacinamide or hydroquinone."
    },
    {
      "q": "What is the difference between the 15% and the 20%?",
      "a": "The indication and the vehicle decide it: the 20% cream (Azelex/Skinoren) is FDA-approved mainly for ACNE, and the 15% gel and foam (Finacea) for ROSACEA. The effects of the two concentrations overlap (both are multi-mechanism), and the choice depends on the main complaint and the skin's tolerance. The 20% is typical for acne, the 15% for rosacea redness."
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
    "unit": "% (topical)",
    "note": "15% gel/foam (Finacea) for rosacea, 20% cream (Azelex/Skinoren) for acne. Thin layer on clean dry skin, twice daily (once daily may be enough for rosacea maintenance). It is not the amount but the concentration and the frequency that must be matched to the indication and tolerance. Safe in pregnancy."
  }
}
