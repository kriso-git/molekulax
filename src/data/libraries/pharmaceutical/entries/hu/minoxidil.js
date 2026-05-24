// v0.27 RICH multi-variant entry (oral + topical).
// Phase B Round 1 expansion — route-toggle-aware shape.
// Sources: FDA Loniten + Rogaine Drug Labels, Perera & Sinclair 2017 (PMID
// 29167734), Pirmez 2020 (PMID 31520662), Olsen 2002 (PMID 12196747),
// Suchonwanit 2019 (PMID 31496654), Vañó-Galván 2021 (PMID 33639244).

export default {
  "id": "minoxidil",
  "name": "Minoxidil",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "K-csatorna-aktivátor topikális vagy orális szer (Rogaine, Loniten + LDOM). Androgenetikus alopecia kezelés 1988 óta — két adagolási mód, eltérő szisztémás expozícióval.",
  "description": "A Minoxidil eredetileg orális antihipertenzív szerként (Loniten 1979) lett kifejlesztve, de a mellékhatásként megjelenő hipertrichózis miatt topikális formulációt fejlesztettek alopecia kezelésére (Upjohn Rogaine 2% 1988, 5% 1996). A két adagolási forma alapjaiban különböző farmakokinetikai profillal rendelkezik: a topikális szisztémás abszorpciója <2%, így a vérnyomás-hatás minimális; az orális LDOM (0,25–5 mg/nap) szisztémás expozíciót ad, hatékonyabb mint a topikális (Perera & Sinclair 2017 PMID 29167734), de monitorálandó kardiovaszkuláris profilt igényel.",
  "mechanism": "ATP-érzékeny K-csatorna nyitása → vazodilatáció + hajhagyma-perfúzió. Másodlagos: szulfo-transzferáz (SULT1A1) aktivált aktív metabolit (Minoxidil-szulfát), prosztaglandin-E2 emelkedés. A SULT1A1 enzim-aktivitás populáció-szintű variancia ~40–50% non-responder arányt eredményez (Goren 2014).",
  "cyp450": [
    "Sulfotransferase activation (SULT1A1)",
    "Minimal CYP metabolism"
  ],
  "crossMolInteractions": [
    "Finasteride: KOMPLEMENTER mechanizmus, gold-standard kombináció (Big-3 protokoll)",
    "Antihipertenzív szerek: orális esetén additív hipotenzió"
  ],
  "benefits": [
    "OTC elérhető topikális forma — alacsony belépési küszöb",
    "Orális LDOM hatékonyabb mint topikális (Perera & Sinclair 2017)",
    "Komplementer Finasteride-hez (Big-3 protokoll: Minoxidil + Finasteride + Ketoconazole)"
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
        "en": "Choose oral if you want a stronger systemic hair-regrowth response and are willing to accept medical monitoring. LDOM (low-dose oral minoxidil) is more effective than topical, but carries risks of hypotension, tachycardia, and generalized hirsutism.",
        "pl": "Wybierz formę doustną, jeśli szukasz silniejszej systemowej odpowiedzi wzrostu włosów i akceptujesz monitorowanie medyczne. LDOM (małodawkowy doustny minoksydyl) jest skuteczniejszy niż miejscowy, ale wiąże się z ryzykiem hipotensji, tachykardii i uogólnionej hipertrychozy."
      },
      "image": "/performance/tablet-pile-white.png",
      "halfLife": "~4,2 óra (plazma)",
      "bioavailability": "~90% (gyors GI abszorpció; Cmax ~1 óra)",
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
        "unit": "mg/nap",
        "note": {
          "hu": "LDOM hajhullás-kezelés: 0,625–1,25 mg/nap kezdőadag, max 2,5–5 mg/nap. Egyszeri reggeli adag. Hatás 3–6 hónap alatt várható. Vérnyomás + pulzus monitorálandó az első hónapban. Orális Minoxidil kizárólag orvosi felügyelettel!",
          "en": "LDOM hair-loss dosing: 0.625–1.25 mg/day starting dose, max 2.5–5 mg/day. Single morning dose. Effect expected within 3–6 months. Monitor blood pressure + heart rate in the first month. Oral Minoxidil requires medical supervision!",
          "pl": "Dawkowanie LDOM na wypadanie włosów: dawka startowa 0,625–1,25 mg/dzień, maks. 2,5–5 mg/dzień. Jedna dawka rano. Efekt oczekiwany w ciągu 3–6 miesięcy. Monitoruj ciśnienie + tętno przez pierwszy miesiąc. Doustny Minoxidil wyłącznie pod nadzorem lekarza!"
        }
      },
      "legalStatus": "Vényköteles (Loniten antihipertenzív + off-label LDOM alopeciára).",
      "prescriptionStatus": "Rx",
      "atcCode": "C02DC01",
      "indications": [
        "Off-label androgenetikus alopecia (LDOM 0,25–5 mg/nap)",
        "Rezisztens hipertenzió (Loniten oral, ritka indikáció)"
      ],
      "contraindications": [
        "Akut myocardialis infarctus vagy aktív iszkémia",
        "Pheochromocytoma",
        "Aktív perikardiális effúzió"
      ],
      "commonSideEffects": [
        "HIPOTENZIÓ — szisztémás vazodilatáció, fokozott kockázat antihipertenzívumok mellett",
        "Reflex-tachycardia, pulzusgyorsulás (+10–20 bpm)",
        "Ödéma (boka, lokális; gyakoribb 2,5 mg felett)",
        "Generalizált hirsutism (test- és arcszőrzet növekedés — szisztémás expozíció)",
        "Posturalis hipotenzió",
        "Kezdeti shedding (telogén-effluvium) 1–2 hónap körül"
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
        "en": "Topical is the first-choice route for hair loss: OTC available, minimal systemic exposure (<2% absorption), smaller side-effect profile. Slower response than oral LDOM, but safer and easier to start.",
        "pl": "Forma miejscowa jest pierwszym wyborem w leczeniu wypadania włosów: dostępna bez recepty, minimalna ekspozycja systemowa (<2% wchłaniania), mniejszy profil działań niepożądanych. Wolniejsza odpowiedź niż doustna LDOM, ale bezpieczniejsza i łatwiejsza do wdrożenia."
      },
      "image": "/performance/topical-solution-clear.png",
      "halfLife": "~22 óra (szkalp retenció; szisztémás minimális)",
      "bioavailability": "<2% (szisztémás abszorpció a fejbőrről; SULT1A1 enzim-aktivitás non-responder ~40–50% a populációban)",
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
        "unit": "% oldat, 2× napi 1 ml",
        "note": {
          "hu": "Standard protokoll: 5% oldat vagy hab, 1 ml 2× naponta száraz fejbőrre (reggel + este). Nőknél 2% kevésbé irritáló alternatíva, vagy 5% propilén-glikol-mentes hab. Hatás 3–6 hónap alatt várható. Elhagyás esetén 3–4 hónap alatt visszahúzódik a növekedés — a kezelés hosszú távú.",
          "en": "Standard protocol: 5% solution or foam, 1 ml 2× daily to dry scalp (morning + evening). For women, 2% is a less irritating alternative, or 5% propylene glycol-free foam. Effect expected within 3–6 months. After stopping, regrowth recedes over 3–4 months — treatment is long-term.",
          "pl": "Standardowy protokół: roztwór 5% lub pianka, 1 ml 2× dziennie na suchą skórę głowy (rano + wieczór). Dla kobiet 2% to mniej drażniąca alternatywa, lub pianka 5% bez glikolu propylenowego. Efekt oczekiwany w ciągu 3–6 miesięcy. Po odstawieniu odrost cofa się w ciągu 3–4 miesięcy — leczenie jest długoterminowe."
        }
      },
      "legalStatus": "OTC EU/USA/HU (2% és 5% oldat + 5% hab vény nélkül).",
      "prescriptionStatus": "OTC",
      "atcCode": "D11AX01",
      "indications": [
        "Androgenetikus alopecia (férfi mintázat, primer indikáció — Rogaine 5%)",
        "Női androgenetikus alopecia (2% Rogaine vagy 5% hab)"
      ],
      "contraindications": [
        "Aktív fejbőr-dermatitis vagy infekció",
        "Kontakt-allergia propilén-glikolra (habformulátum PG-mentes alternatíva)"
      ],
      "commonSideEffects": [
        "Lokális bőrirritáció, viszketés, hámlás a fejbőrön",
        "Kontakt-dermatitis (propilén-glikol miatt — hab alternatívával elkerülhető)",
        "Nem kívánt szőrnövekedés homlokon/fülön (lecsorgásból)",
        "Paradox shedding (telogén-effluvium 2–4 hét körül)"
      ]
    }
  ]
}
