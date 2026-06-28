// Hair & Skin library entry. Topilutamide (INN) = fluridil; marketed as Eucapil
// (Czech Republic / some EU) as an OTC/cosmetic topical for AGA. Source: Sovak first
// clinical experience, vehicle-controlled (PMID 12174057). Topical nonsteroidal AR
// antagonist, rationally designed to hydrolyze to inactive metabolites (local-only).
// Limited clinical evidence (one small human study). HU body authored; EN/PL to backfill.

export default {
  "id": "topilutamide",
  "sideEffects": [
    { "hu": "Lokális fejbőr-reakciók: enyhe bőrpír, viszketés vagy szárazság az alkalmazás helyén; a (kis) klinikai vizsgálatban a tolerálhatóság jó volt, szisztémás antiandrogén tünet nélkül.", "en": "Local scalp reactions: mild redness, itching or dryness at the application site; in the (small) clinical study tolerability was good, with no systemic antiandrogen symptoms.", "pl": "Miejscowe reakcje skóry głowy: łagodne zaczerwienienie, świąd lub suchość w miejscu aplikacji; w (małym) badaniu klinicznym tolerancja była dobra, bez objawów ogólnoustrojowego antyandrogenu." },
    { "hu": "Korlátozott bizonyíték: a hatékonyság és a hosszú távú biztonság csak kisméretű, korai klinikai adatra és kozmetikai forgalmazási tapasztalatra épül; nincs nagy, megerősítő fázis-3 vizsgálat.", "en": "Limited evidence: efficacy and long-term safety rest on small, early clinical data and cosmetic-marketing experience; there is no large confirmatory phase 3 trial.", "pl": "Ograniczone dowody: skuteczność i bezpieczeństwo długoterminowe opierają się na małych, wczesnych danych klinicznych i doświadczeniu z obrotu kosmetycznego; brak dużego potwierdzającego badania fazy 3." },
    { "hu": "A lokális hatásra tervezve: a molekula szándékosan gyorsan inaktív metabolitokká hidrolizál, ezért a szisztémás antiandrogén hatás minimális – de a teljes humán biztonsági kép kis mintán alapul.", "en": "Designed for local action: the molecule deliberately hydrolyzes quickly to inactive metabolites, so systemic antiandrogen effect is minimal – but the full human safety picture rests on a small sample.", "pl": "Zaprojektowany do działania miejscowego: cząsteczka celowo szybko hydrolizuje do nieaktywnych metabolitów, więc efekt ogólnoustrojowy jest minimalny – ale pełny obraz bezpieczeństwa opiera się na małej próbie." }
  ],
  "contraindications": [
    { "hu": "Ismert túlérzékenység a topilutamiddal (fluridil) vagy a vivőanyaggal szemben.", "en": "Known hypersensitivity to topilutamide (fluridil) or the vehicle.", "pl": "Znana nadwrażliwość na topilutamid (fluridyl) lub podłoże." },
    { "hu": "Sérült, gyulladt vagy fertőzött fejbőr: a gyógyulásig kihagyandó.", "en": "Broken, inflamed or infected scalp: withhold until it heals.", "pl": "Uszkodzona, zapalna lub zakażona skóra głowy: odstawić do czasu wygojenia." },
    { "hu": "Terhesség és szoptatás: bár a szisztémás expozíció tervezetten minimális, elegendő adat híján kerülendő, illetve orvossal egyeztetendő.", "en": "Pregnancy and breastfeeding: although systemic exposure is minimal by design, avoid or discuss with a physician due to limited data.", "pl": "Ciąża i karmienie: choć ekspozycja ogólnoustrojowa jest z założenia minimalna, unikać lub skonsultować z lekarzem z powodu ograniczonych danych." }
  ],
  "name": "Topilutamide",
  "image": "/performance/topical-solution-clear.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Topilutamide (INN) = fluridil: topikális nem-szteroid androgén-receptor antagonista, Eucapil néven forgalmazott (Csehország/EU) kozmetikum/OTC androgenetikus alopeciára. Lokálisan hat (gyorsan inaktiválódik), de a klinikai bizonyíték korlátozott (egy kis vizsgálat).",
  "description": "A topilutamide (nemzetközi szabadnév; közismertebb néven fluridil) egy topikális, nem-szteroid androgén-receptor antagonista, amelyet Sovak és munkatársai \"racionálisan terveztek\" hajhullásra: a molekula a fejbőrön hat, de felszívódáskor gyorsan inaktív metabolitokká hidrolizál, ezért elvileg nincs szisztémás antiandrogén hatása. Eucapil márkanéven Csehországban és néhány EU-piacon kozmetikumként/OTC-ként forgalmazzák androgenetikus alopeciára – tehát a clascoteronnal/pyrilutamide-dal/RU58841-gyel szemben ez ténylegesen ELÉRHETŐ termék. A klinikai bizonyíték azonban KORLÁTOZOTT: a fő publikált adat egy kisméretű, vehikulum-kontrollált korai klinikai vizsgálat (Sovak, PMID 12174057), amely jó tolerálhatóságot, szisztémás antiandrogén hatás hiányát és kedvező hajeredmény-jeleket írt le. Nagy, megerősítő fázis-3 vizsgálat nincs, ezért az evidencia gyengébb, mint a minoxidilé/finaszteridé.",
  "keyInfo": [
    { "label": "Másik név / márka", "value": "Fluridil · Eucapil (Csehország/EU)" },
    { "label": "Státusz", "value": "Forgalmazott kozmetikum/OTC (EU); nem FDA-jóváhagyott gyógyszer" },
    { "label": "Hatásmechanizmus", "value": "Topikális androgén-receptor antagonista (gyors inaktiválás → lokális hatás)" },
    { "label": "Bizonyíték", "value": "Korlátozott: egy kisméretű vehikulum-kontrollált vizsgálat (Sovak 2002)" },
    { "label": "Adagolás", "value": "Eucapil: jellemzően napi 1× a fejbőrre (a termék előírása szerint)" }
  ],
  "mechanism": "A topilutamide a hajhagyma androgén-receptorához kötődve kiszorítja a DHT-t, gátolva az androgén-vezérelt follikulus-miniaturizációt. A tervezés lényege a \"hidrolitikus labilitás\": a hatóanyag a fejbőrön kifejti a helyi hatást, de a keringésbe jutva gyorsan inaktív bomlástermékekké alakul, így a szisztémás antiandrogén hatás (libidó, hormonális) elkerülhető. A koncepció hasonló a clascoteronéhoz (lokális AR-antagonizmus), de a topilutamide klinikai bizonyítéka szerényebb.",
  "legalStatus": "Nem FDA-jóváhagyott gyógyszer. Eucapil néven Csehországban és egyes EU-piacokon kozmetikumként/OTC-ként forgalmazzák AGA-ra. Az elérhetőség és a szabályozási besorolás országonként eltér; az USA-ban nem regisztrált.",
  "bioavailability": "Topikális; szándékos gyors hidrolízis inaktív metabolitokká → minimális szisztémás antiandrogén expozíció",
  "onsetTime": "Hónapok (a hajhullás-kezelésekre jellemzően); a kis vizsgálat néhány hónapos időtávot használt",
  "halfLife": "A hatóanyag a keringésben gyorsan inaktiválódik (rövid szisztémás élettartam)",
  "atcCode": "Nincs külön gyógyszer-ATC (kozmetikum/OTC besorolás)",
  "prescriptionStatus": "OTC/kozmetikum az EU egyes piacain (Eucapil); nem vényköteles gyógyszer",
  "indications": [
    "Androgenetikus alopecia (férfi és női mintázatú hajhullás) – Eucapil OTC/kozmetikai indikáció",
    "Elvi célcsoport: akik lokális, szisztémásan inaktív antiandrogént keresnek a finaszterid helyett",
    "FONTOS: a hatékonyság-bizonyíték korlátozott (nincs nagy fázis-3)"
  ],
  "commonSideEffects": [
    "Enyhe lokális fejbőr-reakció (bőrpír, viszketés, szárazság)",
    "Szisztémás antiandrogén tünet a vizsgálatban NEM jelentkezett (lokális tervezés)",
    "A ritka/hosszú távú mellékhatások profilja kis mintán alapul"
  ],
  "cyp450": [
    "A felszívódott hatóanyag gyorsan inaktív metabolitokká hidrolizál",
    "Klinikailag jelentős szisztémás CYP-interakció nem ismert (minimális expozíció)"
  ],
  "crossMolInteractions": [
    "Minoxidil: elvi komplementer AGA-kombináció (perfúzió + lokális anti-androgén)",
    "Finaszterid: eltérő szintű androgén-gátlás; kombináció elvi",
    "Clascoterone/pyrilutamide: azonos osztály (topikális AR-antagonista) – párhuzam nem indokolt"
  ],
  "benefits": [
    "Ténylegesen ELÉRHETŐ termék (Eucapil, EU) – szemben a nem forgalmazott RU58841/pyrilutamide-dal",
    "Lokális hatásra tervezve, minimális szisztémás antiandrogén kockázattal",
    "A kis klinikai vizsgálatban jó tolerálhatóság, szisztémás hatás nélkül (PMID 12174057)",
    "FIGYELEM: a hatékonyság-bizonyíték korlátozott, nem minoxidil/finaszterid-szintű"
  ],
  "quickStart": [
    "Eucapil-ként a termék előírása szerint, jellemzően napi 1× a fejbőrre",
    "Reális elvárás: a bizonyíték korlátozott; ne várj minoxidil/finaszterid-szintű, megerősített hatást",
    "Bizonyított alap: minoxidil + finaszterid – ezeket érdemes először, orvossal",
    "A lokális antiandrogén irányt komolyabban a clascoteron (engedélyezett aknéra, AGA fázis-3) képviseli",
    "Ellenőrzött, eredeti EU-forrásból (Eucapil), ne ellenőrizetlen szürkepiacról"
  ],
  "expectations": [
    { "label": "Korlátok", "body": "A topilutamide hatékonysága egy kisméretű, korai vizsgálatra és kozmetikai forgalmazási tapasztalatra épül; nincs nagy megerősítő fázis-3, ezért az eredmény bizonytalanabb." },
    { "label": "Tolerálhatóság", "body": "A publikált adat szerint jól tolerálható, szisztémás antiandrogén tünet nélkül – ez a lokális, gyorsan inaktiválódó tervezés előnye." },
    { "label": "Hová illik", "body": "Egy elérhető, kíméletes lokális antiandrogén opció korlátozott bizonyítékkal; a bizonyított gerincet (minoxidil/finaszterid) nem helyettesíti." }
  ],
  "quality": {
    "pure": [
      "Eredeti Eucapil (EU) az ismert, forgalmazott forma",
      "Ellenőrizetlen \"fluridil\" szürkepiaci tételek minősége nem garantált"
    ],
    "caution": [
      "Korlátozott klinikai bizonyíték: egy kis vizsgálat, nincs nagy fázis-3",
      "A hatékonyság egyénfüggő és bizonytalanabb, mint a minoxidil/finaszterid esetén",
      "Az elérhetőség és a jogi besorolás országonként eltér"
    ],
    "avoid": [
      "Ismert topilutamide-/fluridil-túlérzékenység",
      "Sérült, gyulladt fejbőr (a gyógyulásig)",
      "Terhesség/szoptatás megfelelő egyeztetés nélkül",
      "Ellenőrizetlen szürkepiaci források az eredeti termék helyett"
    ]
  },
  "interactions": [
    "Minoxidil: elvi komplementer kombináció",
    "Finaszterid: eltérő androgén-gátlás, elvi kiegészítés",
    "Clascoterone/pyrilutamide: azonos osztály – párhuzam nem indokolt",
    "Minimális szisztémás interakció a gyors inaktiválás miatt"
  ],
  "studies": [
    {
      "title": "Fluridil, a rationally designed topical agent for androgenetic alopecia: first clinical experience",
      "authors": "Sovak M, Seligson AL, Kucerova R, et al.",
      "journal": "Dermatol Surg. 2002;28(8):678-685.",
      "pmid": "12174057"
    }
  ],
  "faq": [
    {
      "q": "Megvehetem? Hol kapható?",
      "a": "Igen, a topilutamide fluridil néven, Eucapil márkanéven Csehországban és néhány EU-piacon kozmetikumként/OTC-ként kapható androgenetikus alopeciára – ezért a nem forgalmazott RU58841/pyrilutamide-dal szemben ez tényleg elérhető. Az USA-ban nem regisztrált. Eredeti EU-forrásból érdemes, ne ellenőrizetlen szürkepiacról."
    },
    {
      "q": "Mennyire hatékony?",
      "a": "A bizonyíték KORLÁTOZOTT. A fő publikált adat egy kisméretű, vehikulum-kontrollált korai vizsgálat (Sovak 2002, PMID 12174057), amely jó tolerálhatóságot, szisztémás antiandrogén hatás hiányát és biztató hajeredmény-jeleket írt le. Nagy, megerősítő fázis-3 vizsgálat azonban nincs, ezért a hatékonyság bizonytalanabb, mint a minoxidilé vagy finaszteridé. Reális keret: egy elérhető, kíméletes lokális antiandrogén opció, de nem a bizonyított gerinc helyett."
    }
  ],
  "related": [
    "clascoterone",
    "pyrilutamide",
    "minoxidil"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 2,
      "medium": 2,
      "high": 2
    },
    "unit": "% (Eucapil topikális)",
    "note": "Az Eucapil (topilutamide/fluridil) jellemzően 2%-os topikális oldat, a termék előírása szerint napi 1× a fejbőrre. Eredeti EU-forrásból. A bizonyíték korlátozott; bizonyított alap a minoxidil + finaszterid."
  }
}
