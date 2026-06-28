// Hair & Skin library entry. Sources: FDA Winlevi label, acne phase 3 (PMID 32320027),
// acne phase 2b dose-escalation (PMID 31251550), AR-antagonism in dermal papilla cells
// (PMID 30811143), clascoterone for AGA review (PMID 32421862). Clascoterone =
// cortexolone 17α-propionate (CB-03-01); first FDA-approved TOPICAL androgen-receptor
// antagonist (acne, Winlevi 1% cream); investigational for AGA (Breezula solution).
// HU body authored; EN/PL prose to backfill. Safety arrays trilingual.

export default {
  "id": "clascoterone",
  "sideEffects": [
    { "hu": "Lokális bőrreakciók: enyhe bőrpír, hámlás, szárazság, viszketés az alkalmazás helyén; a fázis-3 akne-vizsgálatokban a lokális reakciók aránya a vehikuluméhoz hasonló volt (jól tolerálható).", "en": "Local skin reactions: mild erythema, scaling, dryness, itching at the application site; in the phase 3 acne trials local reaction rates were similar to vehicle (well tolerated).", "pl": "Miejscowe reakcje skórne: łagodny rumień, łuszczenie, suchość, świąd w miejscu aplikacji; w badaniach fazy 3 nad trądzikiem częstość reakcji była podobna do podłoża (dobrze tolerowany)." },
    { "hu": "Átmeneti HPA-tengely-szuppresszió jelzése: egy dedikált farmakokinetikai/biztonsági vizsgálatban nagy felületű alkalmazásnál néhány betegnél átmeneti, a kezelés után visszaforduló mellékvesekéreg-tengely-elnyomást észleltek; klinikailag csekély, de a címke említi.", "en": "Signal of transient HPA-axis suppression: in a dedicated PK/safety study with large-area use a few patients showed transient, reversible adrenal-axis suppression; clinically minor but noted on the label.", "pl": "Sygnał przejściowej supresji osi HPA: w dedykowanym badaniu PK/bezpieczeństwa przy stosowaniu na dużej powierzchni u kilku pacjentów zaobserwowano przejściową, odwracalną supresję osi nadnerczy; klinicznie niewielka, ale wymieniona na etykiecie." },
    { "hu": "Hajas fejbőr-alkalmazásnál (vizsgálati AGA-oldat): lokális irritáció, viszketés, hámlás; a hosszú távú adatok még gyűlnek, mert az AGA-indikáció fázis-3-ban van.", "en": "With scalp application (investigational AGA solution): local irritation, itching, flaking; long-term data are still accruing as the AGA indication is in phase 3.", "pl": "Przy aplikacji na skórę głowy (badawczy roztwór na AGA): miejscowe podrażnienie, świąd, łuszczenie; dane długoterminowe wciąż się gromadzą, ponieważ wskazanie AGA jest w fazie 3." },
    { "hu": "Túlérzékenységi reakció (ritka): kontakt dermatitis vagy kifejezettebb irritáció; allergiás reakció esetén leállítás.", "en": "Hypersensitivity reaction (rare): contact dermatitis or more pronounced irritation; discontinue if an allergic reaction occurs.", "pl": "Reakcja nadwrażliwości (rzadka): kontaktowe zapalenie skóry lub silniejsze podrażnienie; przy reakcji alergicznej odstawić." }
  ],
  "contraindications": [
    { "hu": "Ismert túlérzékenység a klaszkoteronnal vagy bármely segédanyaggal szemben.", "en": "Known hypersensitivity to clascoterone or any excipient.", "pl": "Znana nadwrażliwość na klaskoteron lub którąkolwiek substancję pomocniczą." },
    { "hu": "Sérült, gyulladt vagy fertőzött bőrfelület: a felszívódás és az irritáció megnőhet; a gyógyulásig kihagyandó.", "en": "Broken, inflamed or infected skin: absorption and irritation may increase; withhold until it heals.", "pl": "Uszkodzona, zapalna lub zakażona skóra: wchłanianie i podrażnienie mogą wzrosnąć; odstawić do czasu wygojenia." },
    { "hu": "Nagy testfelületen, elhúzódó használat HPA-tengely-monitorozás nélkül: a (ritka, átmeneti) mellékvese-szuppresszió kockázata miatt kerülendő, főleg gyermeknél.", "en": "Large body-surface, prolonged use without HPA-axis monitoring: avoid due to the (rare, transient) adrenal-suppression risk, especially in children.", "pl": "Stosowanie na dużej powierzchni ciała przez dłuższy czas bez monitorowania osi HPA: należy unikać z powodu (rzadkiego, przejściowego) ryzyka supresji nadnerczy, zwłaszcza u dzieci." },
    { "hu": "Terhesség/szoptatás: bár a szisztémás expozíció minimális (gyors inaktiválás kortexolonná), elegendő adat híján csak az előny/kockázat mérlegelése után, orvosi felügyelettel.", "en": "Pregnancy/breastfeeding: although systemic exposure is minimal (rapid inactivation to cortexolone), use only after benefit/risk assessment and under medical supervision due to limited data.", "pl": "Ciąża/karmienie: choć ekspozycja ogólnoustrojowa jest minimalna (szybka inaktywacja do korteksolonu), stosować tylko po ocenie korzyści/ryzyka i pod nadzorem lekarza z powodu ograniczonych danych." }
  ],
  "name": "Clascoterone",
  "image": "/pharmaceutical/cream-tube-white.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Kortexolon-17α-propionát (CB-03-01): az első FDA-jóváhagyott TOPIKÁLIS androgén-receptor antagonista. Aknéra engedélyezett (Winlevi 1% krém, 2020); androgenetikus alopeciára vizsgálati fázisban (Breezula oldat). Helyileg hat, szisztémásan gyorsan inaktiválódik.",
  "description": "A klaszkoteron (kortexolon-17α-propionát, fejlesztési kód CB-03-01) az első és eddig egyetlen FDA-jóváhagyott TOPIKÁLIS androgén-receptor antagonista. A bőrben kompetitíven gátolja a dihidrotesztoszteron (DHT) kötődését az androgén-receptorhoz: a faggyúmirigy-sejtekben (sebocita) csökkenti a faggyútermelést és a gyulladásos citokineket (akne), a hajhagyma dermális papilla-sejtjeiben pedig az androgén-vezérelt miniaturizációt (hajhullás). Felszívódás után gyorsan a hatástalan kortexolonná hidrolizál, ezért a szisztémás antiandrogén hatás minimális. Aknéra a két fázis-3 vizsgálat (PMID 32320027, JAMA Dermatology, 1440 beteg) alapján 2020-ban FDA-jóváhagyást kapott (Winlevi 1% krém). Androgenetikus alopeciára az in vitro és fázis-2 adatok kedvezőek (a klaszkoteron a dermális papilla-sejtekben AR-antagonista, PMID 30811143; AGA-áttekintés PMID 32421862), és jelenleg fázis-3 vizsgálat (SCALP2) zajlik a férfi mintázatú hajhullásra (Breezula oldat) – ez az indikáció EGYELŐRE VIZSGÁLATI.",
  "keyInfo": [
    { "label": "Fejlesztési kód / név", "value": "CB-03-01 · kortexolon-17α-propionát" },
    { "label": "Státusz", "value": "Akne: FDA-jóváhagyott (Winlevi) · Haj (AGA): fázis-3 vizsgálati" },
    { "label": "Hatásmechanizmus", "value": "Topikális androgén-receptor antagonista (lokális anti-DHT)" },
    { "label": "Erősségek", "value": "1% krém (akne) · 5-7,5% oldat (vizsgálati AGA)" },
    { "label": "Hatáskezdet", "value": "4-12 hét (akne); haj: hónapok, fázis-3 alatt" }
  ],
  "mechanism": "A klaszkoteron a célsejtekben (sebocita, dermális papilla) kompetitíven kötődik az androgén-receptorhoz, kiszorítva a tesztoszteront/DHT-t, és gátolja az androgén-vezérelt génexpressziót. A bőrben emiatt csökken a faggyútermelés, a follikuláris gyulladás (akne) és elvileg a hajhagyma-miniaturizáció (AGA). Szerkezetileg a kortizol-prekurzor kortexolon észtere; felszívódás után az észteráz gyorsan kortexolonná hasítja, amely már nem antiandrogén – ez magyarázza a minimális szisztémás hormonhatást a szisztémás antiandrogénekkel (pl. szpironolakton) szemben.",
  "legalStatus": "USA: FDA-jóváhagyott aknéra (Winlevi 1% krém, 2020, ≥12 év). EU: aknés engedélyezettség országonként eltér/folyamatban. AGA-ra (Breezula oldat) MÉG NEM engedélyezett, fázis-3 (SCALP2) zajlik. Vényköteles.",
  "bioavailability": "Topikális; felszívódás után gyors észteráz-hidrolízis a hatástalan kortexolonná → minimális szisztémás antiandrogén expozíció",
  "onsetTime": "Akne: 4-12 hét; AGA: hónapok (a fázis-3 adatok még gyűlnek)",
  "halfLife": "Rövid – a felszívódott klaszkoteron gyorsan kortexolonná alakul",
  "atcCode": "D10AX (topikális anti-akne; AGA-ra még nincs külön kód)",
  "prescriptionStatus": "Vényköteles (Rx); akne engedélyezett, AGA vizsgálati",
  "indications": [
    "Akne vulgaris ≥12 év (FDA-jóváhagyott, Winlevi 1% krém)",
    "Androgenetikus alopecia / férfi mintázatú hajhullás (VIZSGÁLATI, Breezula oldat, fázis-3)",
    "Elvi előny: olyan eseteknél, ahol a szisztémás antiandrogén (pl. szpironolakton, finaszterid) nem kívánatos"
  ],
  "commonSideEffects": [
    "Enyhe lokális bőrpír, hámlás, szárazság, viszketés (a vehikuluméhoz hasonló arány)",
    "Ritka, átmeneti HPA-tengely-szuppresszió jelzése nagy felületű használatnál (címke említi)",
    "Hajas fejbőrön (AGA-oldat) lokális irritáció",
    "Általában jól tolerálható, alacsony mellékhatás-arány"
  ],
  "cyp450": [
    "Felszívódás után gyorsan kortexolonná hidrolizál (észteráz)",
    "Klinikailag jelentős szisztémás CYP-interakció nem ismert (minimális szisztémás expozíció)"
  ],
  "crossMolInteractions": [
    "Minoxidil: KOMPLEMENTER mechanizmus (perfúzió + lokális anti-androgén) – ígéretes AGA-kombináció",
    "Finaszterid/dutaszterid: más szinten hat (5AR-gátlás vs AR-antagonizmus) – elvi kombinálhatóság, klinikai adat még gyűlik",
    "Egyéb topikális aknészerek (benzoil-peroxid, retinoid): aknéban kombinálhatók, additív irritációra figyelve",
    "Szisztémás antiandrogének: a lokális klaszkoteron előnye éppen a szisztémás hatás kerülése"
  ],
  "benefits": [
    "Az ELSŐ FDA-jóváhagyott topikális antiandrogén – aknéban férfin is használható (a szisztémás antiandrogének ott problémásak)",
    "Két fázis-3 vizsgálat igazolta az akne-hatékonyságot (PMID 32320027)",
    "Minimális szisztémás hormonhatás (gyors inaktiválás kortexolonná)",
    "Haj (AGA): ígéretes új mechanizmus (lokális AR-antagonizmus), fázis-3-ban",
    "Jó tolerálhatóság, a lokális reakciók a vehikuluméhoz hasonlóak"
  ],
  "quickStart": [
    "Akne: 1% krém (Winlevi), vékony rétegben naponta 2× tiszta száraz bőrre",
    "AGA: a klaszkoteron-OLDAT egyelőre VIZSGÁLATI (fázis-3) – nem engedélyezett rutinkezelés",
    "Nagy felület / gyermek esetén orvosi felügyelet a (ritka) HPA-tengely-jelzés miatt",
    "Türelem: akne 4-12 hét; a hajeredmény a fázis-3 adatok függvénye",
    "Kombináció minoxidillel ígéretes AGA-irány (komplementer), de még vizsgálat alatt"
  ],
  "expectations": [
    { "label": "1-4. hét", "body": "Aknéban kezdődő javulás, enyhe lokális reakció lehet. Hajas fejbőrön (vizsgálati) még nincs látható változás." },
    { "label": "4-12. hét", "body": "Aknéban a gyulladt és nem-gyulladt léziók szignifikáns csökkenése (fázis-3 végpont, PMID 32320027). A bőr toleranciája jó." },
    { "label": "Hónapok (AGA)", "body": "A hajhullásra gyakorolt hatás a folyamatban lévő fázis-3 (SCALP2) eredményeitől függ; jelenleg nem rutinkezelés, hanem ígéretes vizsgálati irány." }
  ],
  "quality": {
    "pure": [
      "Winlevi (klaszkoteron 1% krém) az FDA-jóváhagyott akne-brand (Cassiopea/Sun Pharma)",
      "Breezula (klaszkoteron-oldat) az AGA vizsgálati készítmény – nem szabadpiaci termék"
    ],
    "caution": [
      "Az AGA-indikáció EGYELŐRE VIZSGÁLATI – ne tekintsd engedélyezett hajhullás-kezelésnek",
      "Nagy felület / gyermek: a ritka, átmeneti HPA-tengely-szuppresszió miatt felügyelet",
      "A hosszú távú haj-hatékonyság a fázis-3 adatokra vár"
    ],
    "avoid": [
      "Ismert klaszkoteron- vagy segédanyag-túlérzékenység",
      "Sérült, gyulladt vagy fertőzött bőr (a gyógyulásig)",
      "Nagy felületű, elhúzódó öncélú használat orvosi felügyelet nélkül"
    ]
  },
  "interactions": [
    "Minoxidil: komplementer AGA-kombináció (perfúzió + lokális anti-androgén)",
    "Benzoil-peroxid / retinoid (akne): kombinálhatók, additív irritációra figyelve",
    "Finaszterid/dutaszterid: eltérő szintű androgén-gátlás, elvi kombináció (adat gyűlik)",
    "Nincs ismert jelentős szisztémás gyógyszer-interakció (minimális felszívódás)"
  ],
  "studies": [
    {
      "title": "Efficacy and Safety of Topical Clascoterone Cream, 1%, for Treatment in Patients With Facial Acne: Two Phase 3 Randomized Clinical Trials",
      "authors": "Hebert A, Thiboutot D, Stein Gold L, et al.",
      "journal": "JAMA Dermatol. 2020;156(6):621-630.",
      "pmid": "32320027"
    },
    {
      "title": "A Phase 2b, Randomized, Double-Blind Vehicle Controlled, Dose Escalation Study Evaluating Clascoterone 0.1%, 0.5%, and 1% Topical Cream in Subjects With Facial Acne",
      "authors": "Eichenfield L, Hebert A, Gold LS, et al.",
      "journal": "J Drugs Dermatol. 2019;18(6):570-575.",
      "pmid": "31251550"
    },
    {
      "title": "Cortexolone 17α-Propionate (Clascoterone) is an Androgen Receptor Antagonist in Dermal Papilla Cells In Vitro",
      "authors": "Rosette C, Agan FJ, Mazzetti A, et al.",
      "journal": "J Drugs Dermatol. 2019;18(2):197-201.",
      "pmid": "30811143"
    },
    {
      "title": "Clascoterone as a novel treatment for androgenetic alopecia",
      "authors": "Dhillon S.",
      "journal": "Clin Exp Dermatol. 2020;45(8):1075-1076.",
      "pmid": "32421862"
    }
  ],
  "faq": [
    {
      "q": "Mitől más a klaszkoteron, mint a finaszterid?",
      "a": "A finaszterid a DHT KÉPZŐDÉSÉT gátolja (5α-reduktáz-gátló), és szisztémásan, tablettában hat. A klaszkoteron viszont a már megképződött androgén HATÁSÁT blokkolja a receptoron (AR-antagonista), és TOPIKÁLISAN, helyileg hat – felszívódás után gyorsan hatástalan kortexolonná alakul, ezért minimális a szisztémás hormonhatás. Ezért lehet vonzó azoknak, akik a finaszterid/dutaszterid szisztémás mellékhatásait (libidó, hangulat) el akarják kerülni. Fontos: aknéra már FDA-jóváhagyott, hajhullásra viszont MÉG vizsgálati (fázis-3)."
    },
    {
      "q": "Használhatom most hajhullásra?",
      "a": "Engedélyezett, rutinszerű hajhullás-kezelésként NEM – az AGA-indikáció (Breezula oldat) jelenleg fázis-3 vizsgálatban van (SCALP2). Az in vitro és fázis-2 adatok ígéretesek (PMID 30811143, 32421862), de a hatékonyság/biztonság végső igazolása a folyamatban lévő vizsgálatokra vár. Ami MA elérhető és engedélyezett: a klaszkoteron 1% krém (Winlevi) AKNÉRA."
    },
    {
      "q": "Biztonságos? Mi az a HPA-tengely-jelzés?",
      "a": "Általában jól tolerálható; a lokális reakciók a placebóéhoz hasonlóak. Egy dedikált biztonsági/PK-vizsgálatban, nagy felületű alkalmazásnál néhány betegnél átmeneti, a kezelés után visszaforduló mellékvesekéreg-tengely (HPA) elnyomást észleltek – ez klinikailag csekély, de a címke említi, ezért nagy felületen vagy gyermeknél orvosi felügyelet ajánlott. A szisztémás antiandrogén hatás a gyors inaktiválás miatt minimális."
    }
  ],
  "related": [
    "minoxidil",
    "finasteride",
    "azelaic-acid"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 1,
      "medium": 5,
      "high": 7.5
    },
    "unit": "% (topikális)",
    "note": "Akne: 1% krém (Winlevi), naponta 2× – ez az FDA-jóváhagyott, elérhető forma. AGA (vizsgálati): 5-7,5% oldat a fázis-3-ban – NEM rutinkezelés. Vékony réteg tiszta száraz bőrre/fejbőrre. Nagy felület/gyermek esetén HPA-felügyelet."
  }
}
