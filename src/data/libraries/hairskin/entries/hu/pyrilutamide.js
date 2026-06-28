// Hair & Skin library entry. INVESTIGATIONAL compound – thin peer-reviewed data.
// Sources: ClinicalTrials.gov registrations (NCT05218642 US phase 2 male AGA,
// NCT06126965 phase 3 male AGA, NCT06622824 China phase 2/3) + antiandrogen-class
// safety review (PMID 38892763). Pyrilutamide (KX-826, Kintor Pharmaceutical) is a
// TOPICAL androgen-receptor antagonist; NOT approved anywhere. Honest "experimental"
// framing, no overstated efficacy. HU body authored; EN/PL prose to backfill.

export default {
  "id": "pyrilutamide",
  "sideEffects": [
    { "hu": "Lokális fejbőr-reakciók: a vizsgálatokban a leggyakoribb az alkalmazás helyén jelentkező enyhe bőrpír, viszketés, hámlás vagy bőrszárazság; általában enyhe és átmeneti.", "en": "Local scalp reactions: in the trials the most common are mild application-site erythema, itching, flaking or dryness; usually mild and transient.", "pl": "Miejscowe reakcje skóry głowy: w badaniach najczęstsze to łagodny rumień, świąd, łuszczenie lub suchość w miejscu aplikacji; zwykle łagodne i przejściowe." },
    { "hu": "Korlátozott hosszú távú biztonsági adat: mivel a szer VIZSGÁLATI fázisban van (fázis-2/3), a hosszú távú biztonsági profil még nem teljes; a publikált, peer-reviewed adatok hiányosak.", "en": "Limited long-term safety data: as the compound is INVESTIGATIONAL (phase 2/3), the long-term safety profile is not yet complete; peer-reviewed published data are sparse.", "pl": "Ograniczone dane dotyczące bezpieczeństwa długoterminowego: ponieważ związek jest BADAWCZY (faza 2/3), profil bezpieczeństwa długoterminowego nie jest jeszcze pełny; recenzowane dane są skąpe." },
    { "hu": "Elvi szisztémás antiandrogén hatás minimalizálva: a tervezett előny a LOKÁLIS hatás (kis szisztémás felszívódás), de a teljes humán biztonsági kép a folyamatban lévő vizsgálatokra vár.", "en": "Systemic antiandrogen effect minimized by design: the intended advantage is LOCAL action (low systemic absorption), but the full human safety picture awaits ongoing trials.", "pl": "Ogólnoustrojowy efekt antyandrogenowy zminimalizowany z założenia: zamierzoną zaletą jest działanie MIEJSCOWE (niskie wchłanianie), ale pełny obraz bezpieczeństwa zależy od trwających badań." }
  ],
  "contraindications": [
    { "hu": "Nem engedélyezett, vizsgálati szer: rutinszerű, orvosi vizsgálaton kívüli használata nem javasolt – nincs jóváhagyott terápiás indikáció.", "en": "Not an approved drug, investigational: routine use outside a clinical trial is not advised – there is no approved therapeutic indication.", "pl": "Niezatwierdzony, badawczy lek: rutynowe stosowanie poza badaniem klinicznym nie jest zalecane – brak zatwierdzonego wskazania." },
    { "hu": "Terhesség és fogamzóképes kor megfelelő óvintézkedés nélkül: androgén-receptor antagonistaként a férfi magzat fejlődésére elvi kockázatot jelenthet; terhességben kerülendő.", "en": "Pregnancy and childbearing potential without precautions: as an androgen-receptor antagonist it may pose a theoretical risk to male fetal development; avoid in pregnancy.", "pl": "Ciąża i wiek rozrodczy bez środków ostrożności: jako antagonista receptora androgenowego może stanowić teoretyczne ryzyko dla rozwoju płodu męskiego; unikać w ciąży." },
    { "hu": "Sérült, gyulladt fejbőr; ismert túlérzékenység a hatóanyaggal vagy a vivőanyaggal szemben.", "en": "Broken, inflamed scalp; known hypersensitivity to the active or the vehicle.", "pl": "Uszkodzona, zapalna skóra głowy; znana nadwrażliwość na substancję czynną lub podłoże." }
  ],
  "name": "Pyrilutamide",
  "image": "/performance/topical-solution-clear.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Pyrilutamide (KX-826) – topikális androgén-receptor antagonista, a Kintor fejlesztése androgenetikus alopeciára (és aknéra). VIZSGÁLATI szer: fázis-2/3 vizsgálatokban (Kína/USA), sehol nem engedélyezett, peer-reviewed efficacy-adat egyelőre hiányos.",
  "description": "A pyrilutamide (fejlesztési kód KX-826, Kintor Pharmaceutical) egy TOPIKÁLIS androgén-receptor (AR) antagonista, amelyet androgenetikus alopeciára (és aknéra) fejlesztenek. A clascoteronhoz hasonló elven hat: a hajhagyma dermális papilla-sejtjeiben kompetitíven blokkolja a dihidrotesztoszteron (DHT) kötődését az androgén-receptorhoz, ezzel elvileg lassítja az androgén-vezérelt follikulus-miniaturizációt – LOKÁLISAN, kis szisztémás felszívódásra törekedve. FONTOS: ez egy VIZSGÁLATI szer, jelenleg fázis-2/3 klinikai vizsgálatokban (pl. NCT05218642 USA fázis-2 férfi AGA; NCT06126965 fázis-3 férfi AGA; kínai férfi és női vizsgálatok), és SEHOL NINCS törzskönyvezve. A peer-reviewed, publikált hatékonysági végeredmény egyelőre hiányos – az adat döntően vizsgálat-regiszterekből és cégbejelentésekből származik. Ezért a kártya tartalma a mechanizmusra és a vizsgálati státuszra fókuszál, nem bizonyított rutinkezelésre.",
  "keyInfo": [
    { "label": "Fejlesztési kód", "value": "KX-826 (Kintor Pharmaceutical)" },
    { "label": "Státusz", "value": "VIZSGÁLATI – fázis-2/3 (AGA); sehol nem engedélyezett" },
    { "label": "Hatásmechanizmus", "value": "Topikális androgén-receptor antagonista (lokális anti-DHT)" },
    { "label": "Vizsgált forma", "value": "Topikális oldat (pl. 0,5% / 1,0%, naponta 1-2×)" },
    { "label": "Bizonyíték", "value": "Korai/közép-fázisú; publikált efficacy egyelőre hiányos" }
  ],
  "mechanism": "A pyrilutamide a célsejtek (dermális papilla, sebocita) androgén-receptorához kötődve kiszorítja a tesztoszteront/DHT-t, és gátolja az androgén-vezérelt génexpressziót. Hajban ez elvileg csökkenti a follikulus-miniaturizációt; aknében a faggyútermelést és a gyulladást. A topikális forma célja a lokális hatás a szisztémás antiandrogén mellékhatások (libidó, hangulat) nélkül – hasonló koncepció, mint a clascoteron. A klinikai hatékonyság mértéke azonban EGYELŐRE nem bizonyított robusztusan; a vizsgálatok folyamatban.",
  "legalStatus": "Sehol nem törzskönyvezett. Vizsgálati szer (IND/CTA) fázis-2/3 vizsgálatokban Kínában és az USA-ban. Rutinszerű felírása/forgalmazása jóváhagyott gyógyszerként nem létezik; a szürkepiaci \"kutatóvegyszer\"-források minősége és tisztasága ellenőrizetlen.",
  "bioavailability": "Topikális; a fejlesztés célja a minimális szisztémás felszívódás (lokális AR-antagonizmus) – pontos humán adat a vizsgálatokból gyűlik",
  "onsetTime": "A vizsgálatok jellemzően 24 hetes végpontot használnak; valós rutin-hatáskezdet nem megállapított",
  "halfLife": "Humán farmakokinetikai részletek korlátozottan publikáltak",
  "atcCode": "Nincs (vizsgálati szer)",
  "prescriptionStatus": "Nem engedélyezett; kizárólag klinikai vizsgálat keretében",
  "indications": [
    "Androgenetikus alopecia (férfi és női mintázatú hajhullás) – VIZSGÁLATI, fázis-2/3",
    "Akne vulgaris – korábbi/párhuzamos vizsgálati irány (topikális antiandrogén)",
    "Elvi célcsoport: akik a szisztémás antiandrogén (finaszterid) mellékhatásait kerülnék – de EGYELŐRE nem bizonyított, nem elérhető kezelés"
  ],
  "commonSideEffects": [
    "Enyhe lokális fejbőr-reakció: bőrpír, viszketés, hámlás, szárazság",
    "A hosszú távú és ritka mellékhatások profilja még gyűlik (vizsgálati fázis)",
    "A tervezett előny a minimális szisztémás antiandrogén hatás (lokális szer)"
  ],
  "cyp450": [
    "Részletes humán metabolizmus/CYP-adat korlátozottan publikált (vizsgálati fázis)"
  ],
  "crossMolInteractions": [
    "Minoxidil: elvi komplementer AGA-kombináció (perfúzió + lokális anti-androgén) – vizsgálati",
    "Finaszterid/dutaszterid: eltérő szintű androgén-gátlás; kombináció elvi, klinikai adat nincs",
    "Clascoterone: ugyanaz a hatóanyag-osztály (topikális AR-antagonista) – nem kombinálandók párhuzamosan"
  ],
  "benefits": [
    "Ígéretes ÚJ mechanizmus: topikális androgén-receptor antagonizmus a hajhullásra",
    "Elvi előny: lokális hatás a szisztémás antiandrogén mellékhatások nélkül",
    "Aktív fázis-2/3 fejlesztés alatt áll (férfi és női AGA)",
    "FIGYELEM: a haszon EGYELŐRE elvi/vizsgálati, nem bizonyított rutinkezelés"
  ],
  "quickStart": [
    "Nincs jóváhagyott adagolási protokoll – a szer VIZSGÁLATI, nem rutinkezelés",
    "A vizsgálatokban topikális oldat (kb. 0,5-1,0%) naponta 1-2× a fejbőrre, 24 hetes végpontig",
    "Rutinszerű öncélú használat NEM javasolt: ismeretlen hosszú távú biztonság, ellenőrizetlen szürkepiaci források",
    "Megbízható alternatívák AGA-ra: minoxidil + finaszterid (bizonyított) – ezeket érdemes először",
    "Aki a fejlesztést követi: a fázis-3 (pl. NCT06126965) eredményeit érdemes figyelni"
  ],
  "expectations": [
    { "label": "Most (vizsgálati)", "body": "A pyrilutamide nem elérhető engedélyezett kezelésként. A vizsgálatok 24 hetes hajszám-végpontokat mérnek; a publikált, robusztus efficacy egyelőre hiányzik." },
    { "label": "Közeljövő", "body": "A fázis-3 (NCT06126965) és a kínai fázis-2/3 eredményei döntik el, hogy a topikális AR-antagonizmus klinikailag érdemi hajhullás-kezelés lesz-e." },
    { "label": "Ha engedélyezik", "body": "Akkor válhat a clascoteron melletti második topikális antiandrogén opcióvá; addig a státusza KÍSÉRLETI." }
  ],
  "quality": {
    "pure": [
      "Hiteles forma kizárólag a klinikai vizsgálatok keretében (Kintor) létezik",
      "A \"research chemical\" / szürkepiaci pyrilutamide-források tisztasága és dózisa ELLENŐRIZETLEN"
    ],
    "caution": [
      "VIZSGÁLATI szer – nincs jóváhagyott indikáció, hiányos hosszú távú biztonsági adat",
      "A publikált, peer-reviewed hatékonysági bizonyíték egyelőre korlátozott",
      "Ne tekintsd bizonyított hajhullás-kezelésnek a minoxidil/finaszterid helyett"
    ],
    "avoid": [
      "Terhesség és fogamzóképes kor megfelelő óvintézkedés nélkül (AR-antagonista)",
      "Ellenőrizetlen szürkepiaci/kutatóvegyszer-források",
      "Orvosi felügyelet nélküli, öncélú, tartós használat"
    ]
  },
  "interactions": [
    "Minoxidil: elvi komplementer kombináció (vizsgálati)",
    "Finaszterid/dutaszterid: eltérő androgén-gátlás, kombináció elvi",
    "Clascoterone: azonos osztály – párhuzamos használat nem indokolt",
    "Megbízható szisztémás interakciós adat a vizsgálatokból gyűlik"
  ],
  "studies": [
    {
      "title": "KX-826 (pyrilutamide) topikális oldat férfi androgenetikus alopeciában – fázis-2 vizsgálat (USA)",
      "authors": "Kintor Pharmaceutical",
      "journal": "ClinicalTrials.gov NCT05218642",
      "url": "https://clinicaltrials.gov/study/NCT05218642",
      "tag": "Klinikai vizsgálat (regiszter)",
      "tagColor": "rgba(168,85,247,0.16)",
      "tagText": "#c4b5fd"
    },
    {
      "title": "KX-826 (pyrilutamide) fázis-3 vizsgálat felnőtt férfi AGA-betegeken",
      "authors": "Kintor Pharmaceutical",
      "journal": "ClinicalTrials.gov NCT06126965",
      "url": "https://clinicaltrials.gov/study/NCT06126965",
      "tag": "Klinikai vizsgálat (regiszter)",
      "tagColor": "rgba(168,85,247,0.16)",
      "tagText": "#c4b5fd"
    },
    {
      "title": "Safety of Antiandrogens for the Treatment of Female Androgenetic Alopecia with Respect to Gynecologic Malignancies",
      "authors": "Maheld J, et al.",
      "journal": "J Clin Med. 2024. (osztály-kontextus: antiandrogének AGA-ban)",
      "pmid": "38892763"
    }
  ],
  "faq": [
    {
      "q": "Megvehetem és használhatom most hajhullásra?",
      "a": "Engedélyezett gyógyszerként NEM – a pyrilutamide (KX-826) vizsgálati szer, fázis-2/3 klinikai vizsgálatokban, sehol nincs törzskönyvezve. Amit a szürkepiacon \"kutatóvegyszerként\" árulnak, annak tisztasága, dózisa és biztonsága ELLENŐRIZETLEN. Ha hajhullásod van, a bizonyított, elérhető kezelések (minoxidil + finaszterid, esetleg a már engedélyezett clascoteron aknéra) az értelmes első lépés, orvossal egyeztetve."
    },
    {
      "q": "Miben más, mint a clascoteron?",
      "a": "Ugyanabba az osztályba tartoznak: mindkettő TOPIKÁLIS androgén-receptor antagonista, amely a hajhagyma szintjén blokkolja a DHT hatását, lokálisan. A különbség a fejlesztési státusz: a clascoteron AKNÉRA már FDA-jóváhagyott (Winlevi) és AGA-ra fázis-3-ban van, míg a pyrilutamide (KX-826) sehol nincs engedélyezve, és a publikált hatékonysági adatai is szűkösebbek. Tehát a pyrilutamide a kettő közül a kevésbé bizonyított, korábbi fázisú szer."
    }
  ],
  "related": [
    "clascoterone",
    "minoxidil",
    "finasteride"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 0.5,
      "medium": 1.0,
      "high": 1.0
    },
    "unit": "% (vizsgálati oldat)",
    "note": "A vizsgálatokban használt topikális oldat kb. 0,5-1,0%, naponta 1-2× a fejbőrre, 24 hetes végpontig. NINCS jóváhagyott rutin-adagolás – a szer VIZSGÁLATI. Öncélú használata ellenőrizetlen forrásból nem javasolt; bizonyított alternatíva a minoxidil + finaszterid."
  }
}
