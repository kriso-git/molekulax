// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.567Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "finasteride",
  "name": "Finasteride",
  "image": "/pharmaceutical/blister-blue-small.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "5α-reduktáz II-es típusú szelektív gátló. FDA-jóváhagyott androgenetikus alopeciára (Propecia 1 mg) és BPH-ra (Proscar 5 mg). A DHT képződés ~70%-kal csökkenti.",
  "description": "A Finasteride egy szintetikus 4-azaszteroid, amelyet a Merck fejlesztett ki (Proscar BPH-ra FDA 1992, Propecia alopeciára FDA 1997). A típus II 5α-reduktáz enzim szelektív gátlója, ami a tesztoszteron → dihidroxitesztoszteron (DHT) konverzióját blokkolja a prosztatában és hajhagymákban. A DHT a hajhagymák miniaturizációjának (androgén alopecia) és a prosztata-növekedésnek (BPH) elsődleges hajtóereje. A Kaufman 1998 RCT (PMID 9591820) szerint 24 hónap után az alopecia-betegek 48%-ánál hajnövekedés és 90%-ánál haj-stabilizálódás dokumentált. A Roehrborn 2002 MTOPS trial (NEJM PMID 12944571) szerint a BPH-progressziót 39%-kal csökkenti egyedüli kezelésben. Az ATC-kód D11AX10 (alopecia 1 mg) és G04CB01 (BPH 5 mg) közötti különbség csak a dózis és az indikáció.",
  "keyInfo": [
    {
      "label": "ATC kód",
      "value": "D11AX10 (1mg) / G04CB01 (5mg)"
    },
    {
      "label": "Vény-státusz",
      "value": "Vényköteles (Rx)"
    },
    {
      "label": "Hatásmechanizmus",
      "value": "5α-reduktáz II szelektív gátlása, ~70% DHT-csökkenés"
    },
    {
      "label": "Felezési idő",
      "value": "5-6 óra plazma, 96+ óra enzim-affinitás"
    },
    {
      "label": "Hatáskezdet",
      "value": "3-6 hónap (haj-stabilizáció), 6-12 hónap (visszanövekedés)"
    }
  ],
  "mechanism": "A típus II 5α-reduktáz (5AR2) szelektív, kompetitív gátlása ~70-90%-kal csökkenti a szérum DHT-szintet (Roberts 1999). A típus I 5AR (faggyúmirigy, bőr) viszonylag érintetlen, ezért a Finasteride enyhébb periphériás antiandrogén-hatása. A hajhagyma-szintű DHT csökkenése megfordítja a miniaturizációt: az anagén fázis meghosszabbodik, a hajszálak vastagsága visszatér. A prosztatában a DHT-csökkenés a hiperplázia progresszióját lassítja.",
  "legalStatus": "EU/HU: vényköteles (Propecia 1 mg, Proscar 5 mg, generikus). USA: FDA Rx, nem ütemezett. Generikus formák széles körben (originator patent 2013-ban lejárt). Telemedicine-szolgáltatások (Roman, Hims) USA-ban online Rx-szel hozzáférhető.",
  "bioavailability": "65% (orális, 1 mg tabletta, IV-referenciához viszonyított AUC; tartomány 26-170% — FDA Propecia label)",
  "onsetTime": "3-6 months (hair stabilization), 6-12 months (visible regrowth)",
  "halfLife": "5-6 h (plasma); 96+ h enzyme affinity (sustained DHT suppression with daily dosing)",
  "atcCode": "D11AX10 (1 mg alopecia) / G04CB01 (5 mg BPH)",
  "prescriptionStatus": "Vényköteles (Rx), bőrgyógyász vagy urológus felírható",
  "indications": [
    "Androgenetikus alopecia (férfi mintázatú hajhullás), 1 mg/nap (Propecia)",
    "Jóindulatú prosztata-hiperplázia (BPH), 5 mg/nap (Proscar)",
    "BPH + ED kombináció: kombinálható Tadalafil-lel",
    "Hirsutismus nőknél (off-label, óvatos transznem-szempontból)",
    "Transznem-hormon-terápia (MtF): off-label antiandrogén DHT-csökkentésre"
  ],
  "contraindications": [
    "Terhesség (FDA X kategória — Finasteride férfi-magzat genitális-fejlődési károsodás)",
    "Női páciensek (gyermekvállalási korban, fogamzásgátlás nélkül)",
    "Ismert hipersenzitivitás",
    "Gyermekek (< 18 év)"
  ],
  "commonSideEffects": [
    "Szexuális mellékhatás: libidó-csökkenés (1-2%), erektilis diszfunkció (1-2%), ejakuláció-zavar (1%)",
    "Gynaecomastia (mellnagyobbodás férfin, 0,5-1%)",
    "Hangulatzavar (depresszió-emelkedés, irodalom-vita)",
    "PSA-csökkenés ~50%-kal — prosztata-szűréskor figyelembe veendő (PSA × 2 korrigálva)",
    "Post-finasteride szindróma (PFS): vitatott, perzisztens szexuális/mentális tünet-cluster, FDA 2012 label-update"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary)",
    "No significant CYP inhibition or induction"
  ],
  "crossMolInteractions": [
    "Tesztoszteron-pótlás (TRT): kombinálható alopeciás férfin TRT-DHT-emelkedés mitigálására",
    "Saw palmetto (Serenoa repens): redundáns mechanizmus, NEM rec szignifikáns additivitás",
    "Minoxidil (topikális): KOMPLEMENTER mechanizmus, gyakori kombinált alopecia-terápia",
    "Dutasteride: erősebb 5AR-i (típus I + II), Finasteride alternatíva, off-label alopeciára",
    "Alkohol: szignifikáns interakció nincs"
  ],
  "benefits": [
    "Hajhullás 80-90%-ban stabilizálódik 12 hónap után (Kaufman 1998)",
    "Visszanövekedés 48% (vertex) - 30% (frontotemporal) 24 hónap után",
    "BPH-progresszió 39%-os relatív kockázat-csökkenése (Roehrborn 2002 MTOPS)",
    "BPH-műtét szükségessége ~50%-kal csökken hosszú-távon",
    "Generikus formák olcsók, hosszú-távú használat megfizethető"
  ],
  "quickStart": [
    "Alopeciás férfi: 1 mg/nap (Propecia), bármikor a nap során, étkezéstől függetlenül",
    "BPH: 5 mg/nap (Proscar), általában esti dózis",
    "Hajeredmény TÜRELMET igényel: 3 hónapnál korábban nincs lényeges változás, 6-12 hónap a megfelelő értékelési idő",
    "Minoxidil topikális 5%-kal kombinálható (komplementer mechanizmus)",
    "Női partner terhességénél: férjnek érintetnie nem szabad a törött Finasteride-tablettát (transzdermális abszorpció kockázat)"
  ],
  "expectations": [
    {
      "label": "1-3. hónap",
      "body": "Kezdeti hullás-fokozás (\"shedding\") lehet 1-2 hónap körül, ahogy az új ciklus indul. Visszanövekedés még nem látható. DHT-szint már 70-90%-kal csökkent."
    },
    {
      "label": "6-12. hónap",
      "body": "Hajhullás stabilizálódott. Visszanövekedés ~30-48% nyilvánvalóvá válik a vertex (korona) területen. BPH-tünetek (IPSS-score) javulnak. Trichoszkópia ajánlott objektív mérésre."
    },
    {
      "label": "24+ hónap",
      "body": "Maximális hatás kifejlődve. Stabilizáció hosszú-távon, ha a kezelést folytatja. Elhagyásnál hajhullás 6-12 hónap alatt visszatér az alaphelyzetbe. BPH-prevencióban indefinit kezelés."
    }
  ],
  "quality": {
    "pure": [
      "Merck Propecia (1 mg) és Proscar (5 mg) az originator brandek",
      "Generikus formák bioekvivalensek (Sandoz, Krka, Teva, Mylan)"
    ],
    "caution": [
      "Post-finasteride szindróma (PFS): bizonyított perzisztens szexuális/mentális tünet-cluster < 1%, de pszichológiailag jelentős aggály",
      "PSA-csökkenés ~50%-kal: prosztata-szűréskor mindig duplázni a PSA-eredményt",
      "Magas-rangú prosztata-karcinóma (Gleason ≥ 8) kockázat enyhe növekedése a PCPT-trial alapján (Thompson 2013)",
      "Hangulatzavar és depresszió-monitor a kezelés alatt"
    ],
    "avoid": [
      "Terhesség (FDA X kategória — férfi-magzat genitális-károsodás)",
      "Női gyermekvállalási korban fogamzásgátlás nélkül",
      "Pszichiátriai anamnézis (depresszió) — fokozott monitorozás vagy alternatív kezelés",
      "Gyermekek és serdülők (< 18 év)",
      "Tört vagy porított tabletta terhes (vagy potenciálisan terhes) nő általi megérintése — transzdermális felszívódás magzati hímivarszerv-fejlődési zavart okozhat",
      "Vér- vagy spermadonáció a kezelés alatt és 1 hónapig utána (másodlagos magzati expozíció megelőzése)",
      "Egyidejű dutasterid (másik 5α-reduktáz inhibitor) — redundáns kockázat, nem racionális"
    ]
  },
  "interactions": [
    "Minoxidil 5% topikális: komplementer mechanizmus, gyakori \"Big 3\" kombináció (Finasteride + Minoxidil + Ketoconazole-shampo)",
    "Testoszteron pótlás (TRT): TRT-pácienseknél prevenciós Finasteride alopecia ellen",
    "Tadalafil daily 5 mg: BPH + ED dual indikáció, kompatibilis kombináció",
    "Doxazosin, tamsulosin (alfa-blokkoló): BPH-kombinációban szinergisztikus (MTOPS-trial bizonyítja)",
    "Saw palmetto, Serenoa repens: redundáns mechanizmus, kombináció nem szignifikáns"
  ],
  "studies": [
    {
      "title": "Finasteride in the treatment of men with androgenetic alopecia (5-year results)",
      "authors": "Kaufman KD, Olsen EA, Whiting D et al.",
      "journal": "J Am Acad Dermatol. 1998;39(4 Pt 1):578-89.",
      "pmid": "9591820"
    },
    {
      "title": "The long-term effect of doxazosin, finasteride, and combination therapy on the clinical progression of BPH (MTOPS)",
      "authors": "McConnell JD, Roehrborn CG, Bautista OM et al.",
      "journal": "N Engl J Med. 2003;349(25):2387-98.",
      "pmid": "14681504"
    },
    {
      "title": "The influence of finasteride on the development of prostate cancer (PCPT)",
      "authors": "Thompson IM, Goodman PJ, Tangen CM et al.",
      "journal": "N Engl J Med. 2003;349(3):215-24.",
      "pmid": "12824459"
    },
    {
      "title": "Long-term (15-year) results after finasteride treatment in men with androgenetic alopecia",
      "authors": "Yanagisawa M, Fujimaki H, Takeda A et al.",
      "journal": "Clin Cosmet Investig Dermatol. 2019;12:139-147.",
      "pmid": "30863133"
    },
    {
      "title": "Hair growth assessment with finasteride 1 mg in male androgenetic alopecia",
      "authors": "Sato A, Takeda A.",
      "journal": "J Dermatol. 2012;39(1):27-32.",
      "pmid": "22243391"
    },
    {
      "title": "Adverse effects and safety of 5-alpha reductase inhibitors (finasteride, dutasteride)",
      "authors": "Hirshburg JM, Kelsey PA, Therrien CA et al.",
      "journal": "J Clin Aesthet Dermatol. 2016;9(7):56-62.",
      "pmid": "27672412"
    },
    {
      "title": "Persistent sexual side effects of finasteride (post-finasteride syndrome)",
      "authors": "Irwig MS, Kolukula S.",
      "journal": "J Sex Med. 2011;8(6):1747-53.",
      "pmid": "21418145"
    }
  ],
  "faq": [
    {
      "q": "Mit jelent a kezdeti \"shedding\" Finasteride-en?",
      "a": "A telogén effluvium (\"shedding\") az új hajciklus indulása miatt: a Finasteride a miniaturizált hagymákat erőteljesebb anagén fázisba lépteti, ami az eredeti vékony szálakat pushki ki, hogy helyt adjon a vastagabb új szálnak. Általában 1-2 hónap körül kezdődik, 4-8 hét alatt zajlik le. NEM betegség-jelzés, hanem a kezelés HATÉKONYSÁGÁNAK paradox jele. Folytatandó türelmesen."
    },
    {
      "q": "Mit jelent a post-finasteride szindróma (PFS)?",
      "a": "A PFS egy klinikailag vitatott tünet-cluster: a Finasteride elhagyása után perzisztáló szexuális (libidó-csökkenés, erektilis diszfunkció, anorgazmia), mentális (depresszió, anhedonia, \"agy-köd\"), és szomatikus (krónikus fáradtság, izom-gyengeség) tünetek hónapokig vagy évekig. Az Irwig 2011 (PMID 21418145) kérdőíves tanulmány dokumentálta, az FDA 2012-ben Propecia label-frissítéssel hivatalosan elismerte. Reálinciencia ~0,1-1% lehet. Bárkinek, aki Finasteride-et szed és pszichiátriai vagy szexuális tüneteket észlel, leállítani és orvos-konzultáció ajánlott."
    },
    {
      "q": "Hogyan kombinálható Minoxidil-lel?",
      "a": "A \"Big 3\" hagyományos alopecia-protokollja: Finasteride 1 mg/nap szisztémás + Minoxidil 5% topikális 2x/nap + Ketoconazole 2% shampo 2-3x/hét. A Finasteride a DHT-képződést gátolja (etiológiai szint), a Minoxidil ATP-érzékeny K-csatorna nyitásával vasodilátor és vér-keringés-fokozó (perfúziós szint), a Ketoconazole bőr-mikrobióm normalizál és gyenge antiandrogén-hatású. A három mechanizmus független, additívan jobb eredményt ad mint bármelyik egyedüli."
    },
    {
      "q": "Növeli a Finasteride a prosztata-karcinóma kockázatát?",
      "a": "A PCPT-trial (Thompson 2003 NEJM PMID 12824459) szerint a Finasteride 25%-kal CSÖKKENTI az általános prosztata-karcinóma kockázatát, de enyhén EMELI a magas-rangú (Gleason ≥ 7) tumor incidenciát. A 2013-as follow-up nem mutatott teljes túlélés-különbséget. Klinikai konszenzus: a Finasteride NEM oki tényező, hanem a low-grade tumor felismerését csökkenti, miközben a high-grade-eseteket relatíve láthatóbbá teszi. PSA × 2 korrekció szűrésnél kötelező."
    },
    {
      "q": "Mi a különbség a Finasteride és a Dutasteride között?",
      "a": "A Finasteride csak a típus II 5α-reduktázt gátolja (prosztata, hajhagyma), a Dutasteride mindkét típust (I + II). Eredmény: a Dutasteride ~93%-os szérum DHT-csökkenése vs Finasteride ~70%-os. Klinikailag a Dutasteride enyhén jobb haj-eredményt mutatott (Olsen 2006 head-to-head), de off-label alopeciára, csak BPH-ra FDA-jóváhagyott (Avodart). Mellékhatás-profil hasonló, esetleg enyhén magasabb a Dutasteride esetén a teljes androgén-blokk miatt. Választás egyéni mérlegelés alapján."
    }
  ],
  "related": [
    "tadalafil",
    "modafinil"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 1,
      "medium": 2.5,
      "high": 5
    },
    "unit": "mg/nap",
    "note": "Alacsony (1 mg, Propecia): androgenetikus alopecia standard dózis férfin. Mérsékelt (2,5 mg, off-label): néhány alopecia-protokoll fél-dózissal 5 mg-os Proscar-tablettát osztva, költségspóró. Magas (5 mg, Proscar): BPH standard dózis. NŐKNEK terhességi korban tilos, magzati genitális-károsodás kockázat (FDA X). Eredmény értékelése 6-12 hónap kezelés után."
  }
}
