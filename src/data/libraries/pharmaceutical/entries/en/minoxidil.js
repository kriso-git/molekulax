// v0.27 RICH multi-variant entry (oral + topical).
// Phase B Round 1 expansion — route-toggle-aware shape.
// Sources: FDA Loniten + Rogaine Drug Labels, Perera & Sinclair 2017 (PMID
// 29167734), Pirmez 2020 (PMID 31520662), Olsen 2002 (PMID 12196747),
// Suchonwanit 2019 (PMID 31496654), Vañó-Galván 2021 (PMID 33639244).

export default {
  "id": "minoxidil",
  "sideEffects": [
    { "hu": "Folyadékretenció és ödéma (orális): nátrium- és vízvisszatartás, boka- és arcduzzanat, testsúlynövekedés; gyakran diuretikum (pl. furoszemid) társítása szükséges.", "en": "Fluid retention and edema (oral): sodium and water retention, ankle and facial swelling, weight gain; often requires a co-administered diuretic (e.g. furosemide).", "pl": "Retencja płynów i obrzęki (doustnie): zatrzymanie sodu i wody, obrzęk kostek i twarzy, przyrost masy ciała; często wymaga dołączenia diuretyku (np. furosemidu)." },
    { "hu": "Reflex-tachycardia és palpitáció: a vazodilatáció kompenzációs pulzusgyorsulást vált ki (+10–20 ütés/perc), ami orális formánál anginát súlyosbíthat.", "en": "Reflex tachycardia and palpitations: vasodilation triggers a compensatory rise in heart rate (+10–20 bpm), which can worsen angina with the oral form.", "pl": "Tachykardia odruchowa i kołatanie serca: rozszerzenie naczyń wywołuje kompensacyjny wzrost tętna (+10–20 ud./min), co przy formie doustnej może nasilać dławicę." },
    { "hu": "Hipotenzió és posztúrális hipotenzió (orális): szisztémás vérnyomáscsökkenés, szédülés, ájulásérzés; antihipertenzívumokkal additív hatás.", "en": "Hypotension and postural hypotension (oral): systemic blood-pressure drop, dizziness, light-headedness; additive effect with antihypertensives.", "pl": "Hipotensja i hipotensja ortostatyczna (doustnie): systemowy spadek ciśnienia, zawroty głowy, uczucie omdlenia; działanie addytywne z lekami hipotensyjnymi." },
    { "hu": "Hipertrichózis és hirsutizmus: nem kívánt test- és arcszőrzet-növekedés, kifejezettebb szisztémás (orális) expozíciónál; nőknél a leggyakoribb kezelésleállási ok.", "en": "Hypertrichosis and hirsutism: unwanted body and facial hair growth, more pronounced with systemic (oral) exposure; the most common reason women discontinue treatment.", "pl": "Hipertrychoza i hirsutyzm: niepożądany wzrost owłosienia ciała i twarzy, bardziej nasilony przy ekspozycji systemowej (doustnej); najczęstsza przyczyna przerwania leczenia u kobiet." },
    { "hu": "Kezdeti paradox hajhullás (telogén-effluvium): a kezelés első 2–8 hetében átmeneti fokozott hajvesztés, mielőtt a növekedés beindul – nem a kezelés kudarca.", "en": "Initial paradoxical shedding (telogen effluvium): a transient increase in hair loss in the first 2–8 weeks before regrowth begins, not a treatment failure.", "pl": "Początkowe paradoksalne wypadanie włosów (telogen effluvium): przejściowe nasilenie utraty włosów w pierwszych 2–8 tygodniach, zanim rozpocznie się odrost, nie jest to niepowodzenie leczenia." },
    { "hu": "Lokális fejbőr-reakciók (topikális): viszketés, hámlás, bőrszárazság, pír; gyakran a propilén-glikol-vivőanyag okozta kontakt-dermatitis (a hab-formula PG-mentes).", "en": "Local scalp reactions (topical): itching, flaking, dryness, redness; often propylene-glycol-vehicle contact dermatitis (the foam formulation is PG-free).", "pl": "Miejscowe reakcje skóry głowy (miejscowo): świąd, łuszczenie, suchość, zaczerwienienie; często kontaktowe zapalenie skóry wywołane glikolem propylenowym (pianka jest bez PG)." },
    { "hu": "Nem kívánt arcszőrzet a lecsorgásból (topikális): a homlokra/halántékra/fülre kerülő oldat helyi szőrnövekedést okozhat, ha nem szárad fel megfelelően.", "en": "Unwanted facial hair from runoff (topical): solution reaching the forehead, temples or ears can cause local hair growth if it is not allowed to dry properly.", "pl": "Niepożądane owłosienie twarzy ze spływania (miejscowo): roztwór docierający na czoło, skronie lub uszy może powodować miejscowy wzrost włosów, jeśli nie wyschnie prawidłowo." }
  ],
  "contraindications": [
    { "hu": "FEKETE DOBOZOS FIGYELMEZTETÉS (orális Loniten): perikardiális effúzió ritkán szívtamponáddá progrediálhat, és súlyosbíthatja a meglévő anginát – orális forma csak szoros orvosi felügyelet mellett.", "en": "BLACK-BOX WARNING (oral Loniten): pericardial effusion may rarely progress to cardiac tamponade, and it can exacerbate existing angina – the oral form requires close medical supervision.", "pl": "OSTRZEŻENIE W RAMCE (doustny Loniten): wysięk osierdziowy może rzadko progresować do tamponady serca i może nasilać istniejącą dławicę – forma doustna wymaga ścisłego nadzoru lekarskiego." },
    { "hu": "Feokromocitóma: a minoxidil katecholamin-felszabadulást provokálhat, ezért ellenjavallt.", "en": "Pheochromocytoma: minoxidil may provoke catecholamine release and is therefore contraindicated.", "pl": "Guz chromochłonny (pheochromocytoma): minoksydyl może prowokować uwalnianie katecholamin i dlatego jest przeciwwskazany." },
    { "hu": "Akut miokardiális infarktus vagy aktív miokardiális iszkémia: a reflex-tachycardia és a megnövekedett szívmunka kontraindikálja az orális használatot.", "en": "Acute myocardial infarction or active myocardial ischemia: reflex tachycardia and increased cardiac workload contraindicate oral use.", "pl": "Ostry zawał mięśnia sercowego lub czynne niedokrwienie mięśnia sercowego: tachykardia odruchowa i zwiększone obciążenie serca stanowią przeciwwskazanie do stosowania doustnego." },
    { "hu": "Ismert túlérzékenység a minoxidilre vagy a készítmény bármely összetevőjére (pl. propilén-glikolra topikális oldatban).", "en": "Known hypersensitivity to minoxidil or any excipient of the product (e.g. propylene glycol in the topical solution).", "pl": "Znana nadwrażliwość na minoksydyl lub którąkolwiek substancję pomocniczą produktu (np. glikol propylenowy w roztworze miejscowym)." },
    { "hu": "Terhesség és szoptatás: a minoxidil nem ajánlott, mert kiválasztódik az anyatejbe és a magzati biztonsága nem igazolt; alopeciára nem indokolt.", "en": "Pregnancy and breastfeeding: minoxidil is not recommended, as it is excreted in breast milk and fetal safety is not established; not justified for alopecia.", "pl": "Ciąża i karmienie piersią: minoksydyl nie jest zalecany, ponieważ przenika do mleka i jego bezpieczeństwo dla płodu nie zostało ustalone; nieuzasadniony przy łysieniu." },
    { "hu": "Sérült, gyulladt vagy fertőzött fejbőr (topikális): a sérült bőrön a felszívódás megnő, ami fokozza a szisztémás mellékhatások kockázatát.", "en": "Damaged, inflamed or infected scalp (topical): absorption increases through compromised skin, raising the risk of systemic side effects.", "pl": "Uszkodzona, zapalna lub zakażona skóra głowy (miejscowo): przez uszkodzoną skórę wchłanianie wzrasta, zwiększając ryzyko ogólnoustrojowych działań niepożądanych." },
    { "hu": "Interakció guanetidinnel (orális): súlyos ortosztatikus hipotenzió kockázata; egyidejű antihipertenzívumok mellett szoros vérnyomás-monitorozás kell.", "en": "Interaction with guanethidine (oral): risk of severe orthostatic hypotension; close blood-pressure monitoring is required with concurrent antihypertensives.", "pl": "Interakcja z guanetydyną (doustnie): ryzyko ciężkiej hipotensji ortostatycznej; przy jednoczesnych lekach hipotensyjnych konieczne jest ścisłe monitorowanie ciśnienia." }
  ],
  "name": "Minoxidil",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "K-channel activator, topical or oral (Rogaine, Loniten + LDOM). Androgenetic alopecia treatment since 1988 — two administration routes with very different systemic exposure profiles.",
  "description": "Minoxidil was originally developed as an oral antihypertensive (Loniten, 1979). Hypertrichosis observed as a side effect led to topical formulations for alopecia (Upjohn Rogaine 2% 1988, 5% 1996). The two routes have fundamentally different pharmacokinetic profiles: topical systemic absorption is <2%, so blood-pressure impact is minimal; oral LDOM (0.25–5 mg/day) provides systemic exposure, more effective than topical (Perera & Sinclair 2017 PMID 29167734), but requires cardiovascular monitoring.",
  "mechanism": "ATP-sensitive K-channel opening → vasodilation + hair-follicle perfusion. Secondary: sulfotransferase (SULT1A1)-activated metabolite (minoxidil sulfate), prostaglandin-E2 elevation. SULT1A1 enzyme-activity variance produces ~40–50% non-responder rate at population level (Goren 2014).",
  "cyp450": [
    "Sulfotransferase activation (SULT1A1)",
    "Minimal CYP metabolism"
  ],
  "crossMolInteractions": [
    "Finasteride: COMPLEMENTARY mechanism, gold-standard combination (Big-3 protocol)",
    "Antihypertensive agents: additive hypotension with oral route"
  ],
  "benefits": [
    "OTC topical form — low barrier to entry",
    "Oral LDOM more effective than topical (Perera & Sinclair 2017)",
    "Complementary to Finasteride (Big-3 protocol: Minoxidil + Finasteride + Ketoconazole)"
  ],
  "studies": [
    {
      "title": "Treatment of chronic telogen effluvium with oral minoxidil: A retrospective study",
      "authors": "Perera E, Sinclair R.",
      "journal": "F1000Research. 2017;6:1650.",
      "pmid": "29167734"
    },
    {
      "title": "Topical minoxidil for androgenetic alopecia: meta-analysis",
      "authors": "Suchonwanit P, Thammarucha S, Leerunyakul K.",
      "journal": "Drug Des Devel Ther. 2019;13:2777-2786.",
      "pmid": "31496654"
    },
    {
      "title": "Very-low-dose oral minoxidil in male androgenetic alopecia: A study with quantitative trichoscopic documentation",
      "authors": "Pirmez R, Salas-Callo CI.",
      "journal": "J Am Acad Dermatol. 2020;82(1):e21-e22.",
      "pmid": "31520662"
    },
    {
      "title": "A double-blind, randomized clinical trial of 5% minoxidil vs 2% in men",
      "authors": "Olsen EA, Dunlap FE, Funicella T, et al.",
      "journal": "J Am Acad Dermatol. 2002;47(3):377-385.",
      "pmid": "12196747"
    },
    {
      "title": "Safety of low-dose oral minoxidil for hair loss: A multicenter study of 1404 patients",
      "authors": "Vañó-Galván S, Pirmez R, Hermosa-Gelbard A, et al.",
      "journal": "J Am Acad Dermatol. 2021;84(6):1644-1651.",
      "pmid": "33639244"
    }
  ],
  "related": [
    "finasteride"
  ],
  "defaultVariant": "topical",
  "variants": [
    {
      "id": "oral",
      "routeId": "oral",
      "routeLabel": {
        "hu": "Orális tabletta",
        "en": "Oral tablet",
        "pl": "Tabletka doustna"
      },
      "routeNote": {
        "hu": "Válaszd az orális formát, ha erősebb szisztémás hajnövekedési választ keresel, és vállalod az orvosi monitorozást. Az LDOM (kis dózisú orális minoxidil) hatékonyabb mint a topikális, de vérnyomás-csökkenés, pulzusgyorsulás és generalizált hirsutism (testszőrzet-növekedés) kockázatával jár.",
        "en": "Choose oral if you want a stronger systemic hair-regrowth response and are willing to accept medical monitoring. LDOM (low-dose oral minoxidil) is more effective than topical, but carries risks of hypotension, tachycardia, and generalized hirsutism (body hair growth).",
        "pl": "Wybierz formę doustną, jeśli szukasz silniejszej systemowej odpowiedzi wzrostu włosów i akceptujesz monitorowanie medyczne. LDOM (małodawkowy doustny minoksydyl) jest skuteczniejszy niż miejscowy, ale wiąże się z ryzykiem hipotensji, tachykardii i uogólnionej hipertrychozy."
      },
      "image": "/performance/tablet-pile-white.png",
      "halfLife": "~4.2 hours (plasma)",
      "bioavailability": "~90% (rapid GI absorption; Cmax ~1 hour)",
      "onsetTime": {
        "hu": "4–6 hét (korai válasz); látható hajnövekedés 3–6 hónap",
        "en": "4–6 weeks (early response); visible hair regrowth at 3–6 months",
        "pl": "4–6 tygodni (wczesna odpowiedź); widoczny odrost włosów po 3–6 miesiącach"
      },
      "dosing": {
        "hu": "Off-label LDOM: 1,25–5 mg/nap, egyszeri reggeli adag. Kezdés 0,625–1,25 mg-gal, fokozatos titrálás 2,5–5 mg-ig. Vérnyomás és pulzus monitorozása az első 4 hétben.",
        "en": "Off-label LDOM: 1.25–5 mg/day, single morning dose. Start at 0.625–1.25 mg, titrate gradually to 2.5–5 mg. Monitor blood pressure and heart rate during first 4 weeks.",
        "pl": "Off-label LDOM: 1,25–5 mg/dzień, jedna dawka rano. Zacznij od 0,625–1,25 mg, stopniowo titruj do 2,5–5 mg. Monitoruj ciśnienie krwi i tętno przez pierwsze 4 tygodnie."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 0.625,
          "medium": 1.25,
          "high": 2.5
        },
        "unit": "mg/day",
        "note": {
          "hu": "LDOM hajhullás-kezelés: 0,625–1,25 mg/nap kezdőadag, max 2,5–5 mg/nap. Egyszeri reggeli adag. Hatás 3–6 hónap alatt várható. Vérnyomás + pulzus monitorálandó az első hónapban. Orális Minoxidil kizárólag orvosi felügyelettel!",
          "en": "LDOM hair-loss dosing: 0.625–1.25 mg/day starting dose, max 2.5–5 mg/day. Single morning dose. Effect expected within 3–6 months. Monitor blood pressure + heart rate in the first month. Oral Minoxidil requires medical supervision!",
          "pl": "Dawkowanie LDOM na wypadanie włosów: dawka startowa 0,625–1,25 mg/dzień, maks. 2,5–5 mg/dzień. Jedna dawka rano. Efekt oczekiwany w ciągu 3–6 miesięcy. Monitoruj ciśnienie + tętno przez pierwszy miesiąc. Doustny Minoxidil wyłącznie pod nadzorem lekarza!"
        }
      },
      "legalStatus": "Prescription only (Loniten antihypertensive + off-label LDOM for alopecia).",
      "prescriptionStatus": "Rx",
      "atcCode": "C02DC01",
      "indications": [
        "Off-label androgenetic alopecia (LDOM 0.25–5 mg/day)",
        "Resistant hypertension (Loniten oral, rare indication)"
      ],
      "contraindications": [
        "Acute myocardial infarction or active ischemia",
        "Pheochromocytoma",
        "Active pericardial effusion"
      ],
      "commonSideEffects": [
        "HYPOTENSION — systemic vasodilation, increased risk with antihypertensives",
        "Reflex tachycardia, elevated heart rate (+10–20 bpm)",
        "Edema (ankle, localized; more common above 2.5 mg)",
        "Generalized hirsutism (body and facial hair growth — systemic exposure)",
        "Postural hypotension",
        "Initial shedding (telogen effluvium) around 1–2 months"
      ]
    },
    {
      "id": "topical",
      "routeId": "topical",
      "routeLabel": {
        "hu": "Topikális oldat/hab",
        "en": "Topical solution / foam",
        "pl": "Roztwór / pianka miejscowa"
      },
      "routeNote": {
        "hu": "A topikális forma az első választás hajhullásra: OTC elérhető, minimális szisztémás hatás (<2% abszorpció), kisebb mellékhatás-profil. Lassabb válasz mint az orális LDOM, de biztonságosabb és egyszerűbben bevezethető kezelés.",
        "en": "Topical is the first-choice route for hair loss: OTC available, minimal systemic exposure (<2% absorption), smaller side-effect profile. Slower response than oral LDOM but safer and easier to initiate — FDA OTC approved.",
        "pl": "Forma miejscowa jest pierwszym wyborem w leczeniu wypadania włosów: dostępna bez recepty, minimalna ekspozycja systemowa (<2% wchłaniania), mniejszy profil działań niepożądanych. Wolniejsza odpowiedź niż doustna LDOM, ale bezpieczniejsza i łatwiejsza do wdrożenia."
      },
      "image": "/performance/topical-solution-clear.png",
      "halfLife": "~22 hours (scalp retention; systemic minimal)",
      "bioavailability": "<2% (systemic absorption from scalp; SULT1A1 enzyme-activity non-responder ~40–50% of population)",
      "onsetTime": {
        "hu": "8–16 hét (korai hatás); mérhető denzitás-növekedés 24+ hét",
        "en": "8–16 weeks (early effect); measurable density growth at 24+ weeks",
        "pl": "8–16 tygodni (wczesny efekt); mierzalny wzrost gęstości po 24+ tygodniach"
      },
      "dosing": {
        "hu": "5% oldat vagy hab: 1 ml 2-szer naponta (reggel + este) száraz fejbőrre. Nőknél 2% kevésbé irritáló, vagy 5% hab (propilén-glikol-mentes). Bemasszírozás után 4 óra szárazon tartás.",
        "en": "5% solution or foam: 1 ml twice daily (morning + evening) to dry scalp. For women, 2% is less irritating, or use 5% foam (propylene glycol-free). Allow 4 hours to dry after application.",
        "pl": "Roztwór lub pianka 5%: 1 ml 2 razy dziennie (rano + wieczór) na suchą skórę głowy. U kobiet 2% mniej drażni, lub pianka 5% (bez glikolu propylenowego). Pozostawić do wyschnięcia przez 4 godziny po nałożeniu."
      },
      "doseCalc": {
        "type": "fixed",
        "fixed": {
          "low": 2,
          "medium": 5,
          "high": 5
        },
        "unit": "% solution, 2× daily 1 ml",
        "note": {
          "hu": "Standard protokoll: 5% oldat vagy hab, 1 ml 2× naponta száraz fejbőrre (reggel + este). Nőknél 2% kevésbé irritáló alternatíva, vagy 5% propilén-glikol-mentes hab. Hatás 3–6 hónap alatt várható. Elhagyás esetén 3–4 hónap alatt visszahúzódik a növekedés — a kezelés hosszú távú.",
          "en": "Standard protocol: 5% solution or foam, 1 ml 2× daily to dry scalp (morning + evening). For women, 2% is a less irritating alternative, or 5% propylene glycol-free foam. Effect expected within 3–6 months. After stopping, regrowth recedes over 3–4 months — treatment is long-term.",
          "pl": "Standardowy protokół: roztwór 5% lub pianka, 1 ml 2× dziennie na suchą skórę głowy (rano + wieczór). Dla kobiet 2% to mniej drażniąca alternatywa, lub pianka 5% bez glikolu propylenowego. Efekt oczekiwany w ciągu 3–6 miesięcy. Po odstawieniu odrost cofa się w ciągu 3–4 miesięcy — leczenie jest długoterminowe."
        }
      },
      "legalStatus": "OTC EU/USA (2% and 5% solution + 5% foam available without prescription).",
      "prescriptionStatus": "OTC",
      "atcCode": "D11AX01",
      "indications": [
        "Androgenetic alopecia (male pattern, primary indication — Rogaine 5%)",
        "Female androgenetic alopecia (2% Rogaine or 5% foam)"
      ],
      "contraindications": [
        "Active scalp dermatitis or infection",
        "Contact allergy to propylene glycol (foam formulation is PG-free alternative)"
      ],
      "commonSideEffects": [
        "Local scalp irritation, itching, flaking",
        "Contact dermatitis (propylene glycol-driven — avoidable with foam)",
        "Unwanted hair growth on forehead / ears from runoff",
        "Paradoxical shedding (telogen effluvium at 2–4 weeks)"
      ]
    }
  ]
}
