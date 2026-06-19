// HCG (Pregnyl / Novarel / Choragon) — Humán Chorionic Gonadotropin,
// AAS-PCT framing. Cross-frame entry: a future peptid-library batch
// fertility-clinic-framing-gel adja majd a `hcg-peptid` counterpart-et.
// Sources: FDA Pregnyl SmPC (Organon 1973), EMA Choragon SPC, Liu 2002
// HCG dose-response PMID 12424222, Coviello 2005 PMID 16204261, Hsieh 2013
// PMID 23316916.

export default {
  "id": "hcg-perf",
  "sideEffects": [
    { "hu": "Ösztrogén-emelkedés (Leydig-Test indirekt aromatizációja révén): víztartás, mellbimbó-érzékenység, gyno-flare, hangulati ingadozás; gyno-szenzitív felhasználón AI co-adminisztráció (anastrozol) szükséges lehet", "en": "Estrogen elevation (via indirect aromatization of Leydig-derived testosterone): water retention, nipple sensitivity, gynecomastia flare, mood swings; AI co-administration (anastrozole) may be needed in gyno-sensitive users", "pl": "Wzrost estrogenu (poprzez pośrednią aromatyzację testosteronu z komórek Leydiga): zatrzymanie wody, tkliwość brodawek, zaostrzenie ginekomastii, wahania nastroju; u osób wrażliwych może być potrzebny inhibitor aromatazy (anastrozol)" },
    { "hu": "Leydig-sejt LHCGR-receptor deszenzitizáció / downregulation tartós, magas dózisú használatkor (>2500 IU EOD, >4 hét) – paradox módon rontja a here-választ és a tesztoszteron-termelést", "en": "Leydig-cell LHCGR receptor desensitization / downregulation with prolonged high-dose use (>2500 IU EOD, >4 weeks) – paradoxically worsens testicular response and testosterone output", "pl": "Desensytyzacja / downregulacja receptora LHCGR komórek Leydiga przy długotrwałym stosowaniu wysokich dawek (>2500 IU EOD, >4 tygodnie) – paradoksalnie pogarsza odpowiedź jąder i produkcję testosteronu" },
    { "hu": "Injekciós helyi reakciók (SC/IM): fájdalom, bőrpír, duzzanat, viszketés, esetenként steril csomó a beadás helyén", "en": "Injection-site reactions (SC/IM): pain, redness, swelling, itching, occasionally a sterile lump at the injection site", "pl": "Reakcje w miejscu wstrzyknięcia (SC/IM): ból, zaczerwienienie, obrzęk, świąd, czasem jałowy guzek w miejscu iniekcji" },
    { "hu": "Androgén-eredetű mellékhatások a megnőtt tesztoszteron miatt: akne, fokozott faggyútermelés, hajritkulás (androgén-érzékeny felhasználón), libidó-fluktuáció", "en": "Androgenic side effects from elevated testosterone: acne, increased oiliness, hair thinning (in androgen-sensitive users), libido fluctuation", "pl": "Skutki androgenne wynikające z podwyższonego testosteronu: trądzik, przetłuszczanie się skóry, przerzedzenie włosów (u osób wrażliwych na androgeny), wahania libido" },
    { "hu": "Fejfájás, fáradtság, ingerlékenység, nyugtalanság – gyakori, általában enyhe és átmeneti panaszok", "en": "Headache, fatigue, irritability, restlessness – common, usually mild and transient complaints", "pl": "Ból głowy, zmęczenie, drażliwość, niepokój – częste, zwykle łagodne i przemijające dolegliwości" },
    { "hu": "Túlérzékenységi / allergiás reakciók: kiütés, urticaria, ritkán angioödéma vagy anafilaxia (különösen vizeletből tisztított uHCG készítményeknél)", "en": "Hypersensitivity / allergic reactions: rash, urticaria, rarely angioedema or anaphylaxis (especially with urine-derived uHCG products)", "pl": "Reakcje nadwrażliwości / alergiczne: wysypka, pokrzywka, rzadko obrzęk naczynioruchowy lub anafilaksja (zwłaszcza przy preparatach uHCG z moczu)" },
    { "hu": "Folyadékretenció és perifériás ödéma; nagyobb gyno-szenzitivitás esetén az ösztrogén-vezérelt vízmegtartás vérnyomás-emelkedést is okozhat", "en": "Fluid retention and peripheral edema; in gyno-sensitive individuals estrogen-driven water retention can also raise blood pressure", "pl": "Zatrzymanie płynów i obrzęki obwodowe; u osób wrażliwych zatrzymanie wody zależne od estrogenu może też podnosić ciśnienie krwi" }
  ],
  "contraindications": [
    { "hu": "Androgén-függő daganat vagy annak gyanúja – prosztata-karcinóma vagy korábbi/aktív hereráhttp (germ-sejtes tumor): a HCG stimulálja az androgén-termelést és egyben tumor-marker, ezért abszolút kontraindikáció", "en": "Androgen-dependent tumor or suspicion thereof – prostate carcinoma or prior/active testicular (germ-cell) cancer: HCG stimulates androgen production and is itself a tumor marker, hence absolutely contraindicated", "pl": "Nowotwór androgenozależny lub jego podejrzenie – rak prostaty lub przebyty/aktywny rak jądra (guz z komórek zarodkowych): HCG stymuluje produkcję androgenów i sam jest markerem nowotworowym, dlatego jest bezwzględnie przeciwwskazany" },
    { "hu": "Ismert túlérzékenység a HCG-re vagy a készítmény bármely összetevőjére (pl. benzil-alkohol tartósítószer)", "en": "Known hypersensitivity to HCG or any component of the preparation (e.g. benzyl-alcohol preservative)", "pl": "Znana nadwrażliwość na HCG lub którykolwiek składnik preparatu (np. konserwant alkohol benzylowy)" },
    { "hu": "Pubertás előtti (pre-pubertás) férfiak – a HCG idő előtti nemi érést (precocious puberty) és korai epifízis-záródást válthat ki", "en": "Pre-pubertal males – HCG can trigger precocious puberty and premature epiphyseal closure", "pl": "Mężczyźni przed okresem dojrzewania – HCG może wywołać przedwczesne dojrzewanie płciowe i przedwczesne zamknięcie nasad kostnych" },
    { "hu": "Magyarázat nélküli méhvérzés, illetve ösztrogén-/hormonérzékeny gyno-állapotok, ahol a további ösztrogén-emelkedés veszélyes", "en": "Unexplained vaginal/genital bleeding, or estrogen-/hormone-sensitive conditions where further estrogen elevation is hazardous", "pl": "Niewyjaśnione krwawienie z dróg rodnych lub stany estrogeno-/hormonozależne, w których dalszy wzrost estrogenu jest niebezpieczny" },
    { "hu": "Tartós, magas dózisú monoterápia (>4 hét folyamatosan) – Leydig-receptor downregulation és kontraproduktív here-deszenzitizáció miatt kerülendő", "en": "Prolonged high-dose monotherapy (>4 weeks continuously) – to be avoided due to Leydig receptor downregulation and counterproductive testicular desensitization", "pl": "Długotrwała monoterapia w wysokich dawkach (>4 tygodnie ciągle) – należy jej unikać z powodu downregulacji receptora Leydiga i przeciwskutecznej desensytyzacji jąder" },
    { "hu": "Aktív thromboembóliás betegség vagy magas trombózis-kockázat – az ösztrogén-emelkedés fokozhatja a vénás thromboembólia rizikóját", "en": "Active thromboembolic disease or high thrombotic risk – the estrogen rise can increase the risk of venous thromboembolism", "pl": "Aktywna choroba zakrzepowo-zatorowa lub wysokie ryzyko zakrzepicy – wzrost estrogenu może zwiększać ryzyko żylnej choroby zakrzepowo-zatorowej" },
    { "hu": "Kezeletlen vagy aktív endokrin betegség (pajzsmirigy- vagy mellékvese-elégtelenség, hyperprolactinaemia, kezeletlen ovariális ciszta) – stabilizálás előtt HCG nem javasolt", "en": "Untreated or active endocrine disease (thyroid or adrenal insufficiency, hyperprolactinemia, untreated ovarian cyst) – HCG not advised before stabilization", "pl": "Nieleczona lub aktywna choroba endokrynologiczna (niewydolność tarczycy lub nadnerczy, hiperprolaktynemia, nieleczona torbiel jajnika) – HCG niezalecany przed ustabilizowaniem" }
  ],
  "name": "HCG (Pregnyl / Novarel / Choragon)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Humán Chorionic Gonadotropin — LH-strukturális analóg, Leydig-sejt LHCGR-receptor stimulus. AAS-PCT bridge a testikulár-atrófia ellen és HPTA-restart-hoz. Cross-frame: a future peptid-libben `hcg-peptid` fertility-clinic-framing-gel jön.",
  "description": "A HCG (Humán Chorionic Gonadotropin) egy 244-aminosav-glikoprotein (α + β alegység), strukturálisan az LH analóg ~80% szekvencia-identitással a β-alegységen. Endogén forrás: terhességi placentális szincíciotrophoblast → vér + vizelet (terhesség 8-12. hét csúcs). Klinikai HCG-források: (1) urinary-extracted (uHCG) — terhes nők vizeletéből tisztítva (Pregnyl Organon 1973, Novarel Ferring 1973, Choragon Ferring EU); (2) rekombináns (rHCG / choriogonadotropin alfa) — Serono Ovidrel/Ovitrelle CHO-expresszált, magasabb-tisztaságú. Mechanizmus: Leydig-sejt LHCGR-receptor agonist → exogén LH-mimikry → testicular testosterone-produkció. **AAS-PCT kontextus**: a HCG bridgeli az LH-szuppresszió-ablakot, amikor a saját pituiter még nem szekretál elég LH-t. Két fő használati protokoll: **mid-cycle HCG** (250-500 IU 2-3x/hét a teljes AAS-ciklus alatt — testikulár-atrófia-prevention); **PCT-blast HCG** (1500-2500 IU EOD × 10-14 nap a ciklus utolsó pin után, majd SERM-PCT-re átkapcsolás). **Cross-frame note**: ez a `-perf` suffix entry, a future peptid-library batch hozza majd a `hcg-peptid` entry-t (fertility-clinic-framing — IVF male-factor + secondary hypogonadism Rx kontextus, AZONOS molekula, eltérő narratíva). WADA-tilos egész évben (S2 Peptide Hormones).",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Leydig-sejt LHCGR-receptor agonist (LH-strukturális analóg, ~80% β-alegység identitás)"
    },
    {
      "label": "Adagolás (PCT-blast)",
      "value": "1500-2500 IU EOD × 10-14 nap"
    },
    {
      "label": "Adagolás (mid-cycle)",
      "value": "250-500 IU 2-3x/hét"
    },
    {
      "label": "Felezési idő",
      "value": "uHCG: 24-36 h / rHCG (Ovidrel): 30-50 h"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA + EMA Rx (fertility-indikációk), WADA S2 (banned in+out-of-competition)"
    }
  ],
  "mechanism": "A HCG egy 244-aminosav heterodimer-glikoprotein: α-alegység (közös LH-val, FSH-val, TSH-val) + β-alegység (HCG-specifikus, ~80% LH-β-szekvencia-identitással). A β-alegység C-terminálisán egy extra ~24-aminosav-farok (CTP) található, ami a HCG hosszabb t1/2-jét adja (vs LH ~30 perc). Receptor-binding: Leydig-sejt LHCGR (lutealizáló hormon / chorionic gonadotropin receptor) agonist → cAMP-PKA pathway → szteroidogenezis-aktiváció (cholesterol → pregnenolone → progesterone → 17α-OH-progesterone → testosterone). AAS-PCT-kontextusban a kérdés: a HPTA-axis felülről (pituiter LH) szuppresszált, de a Leydig-sejtek funkcionalitása megőrződik HCG-mid-cycle-protokollon → post-cycle gyors recovery.",
  "legalStatus": "USA: FDA Rx Pregnyl (Organon 1973, ma Merck), Novarel (Ferring 1973), Ovidrel (Serono rekombináns 2000). Indikációk: female ovulation induction, male hypogonadism, cryptorchidism. EU: EMA Rx (Pregnyl, Choragon, Ovitrelle). HU + PL: törzskönyvezett (Pregnyl, Choragon Rx). WADA: S2.2 Peptide Hormones (banned in-competition + out-of-competition, minden férfi versenyző számára egész évben).",
  "onsetTime": "Leydig-stimulus 24-48 óra, Test-szint visible-rise 3-7 nap a kezdő dose után",
  "halfLife": "uHCG (Pregnyl/Choragon) ~24-36 óra; rHCG (Ovidrel/Ovitrelle) ~30-50 óra",
  "halfLifeActive": "uHCG ~24-36 h; klinikai effect 5-7 nap (single injection után)",
  "interactionsWith": [
    "nolvadex",
    "clomid",
    "enclomiphene",
    "anastrozol",
    "letrozol",
    "testosterone-info"
  ],
  "aromatization": "Indirekt: HCG → Leydig-Test → peripheral E2-emelkedés a testis + adipose CYP19-aromatáz révén. Magnitude moderate-to-high (Test-rise nagyobb mint TRT-en), magasabb HCG-dose-on (>2000 IU EOD) gyno-szenzitív felhasználón AI co-administration (Anastrozol 0.25-0.5 mg EOD) gyakran indokolt. PCT-blast protokollon az E2-rebound-watch kötelező.",
  "hepatotoxicity": "Nincs hepatikus stressz — fehérje-alapú szubkután (SC) vagy intramuszkuláris (IM) injekció, NEM oral, NEM 17α-alkilált. Hepatic enzyme rise nem dokumentált trial-database-en.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS; indirekt testicular Test-stimulus)",
  "bindingAffinity": "LHCGR receptor-affinitás Kd ~0.1 nM. Egyedi tulajdonság: a CTP-farok miatt a HCG lassabban disszociál a receptortól mint az LH → prolonged stimulation per molecule.",
  "detectionWindow": "WADA-akkreditált immunoassay (urinary β-HCG) detektálás: single bolus után 5-7 nap a vizeletben; chronic protokoll után 10-14 nap. Female-pregnancy-kontextusban a HCG bárhol detektálható (idiopátiás false-positive ritka, csak germ-cell tumor).",
  "benefits": [
    "Mid-cycle testikulár-atrófia prevention (250-500 IU 2-3x/hét, AAS-ciklus végén kis-méretű here-megtartás)",
    "PCT-blast HPTA-restart Leydig-bypass (1500-2500 IU EOD × 10-14 nap után SERM-PCT-re kapcsolás)",
    "Post-cycle gyors Test-recovery (Leydig-funkcionalitás megőrzött)",
    "Klinikai trial-database széles (60+ év fertility-clinic kontextusban)",
    "Endogén Test-szint emelése + intratesticular testosterone (ITT) preservation",
    "Olcsó (Pregnyl 5000 IU vial ~€20 EU pharmacy)"
  ],
  "quickStart": [
    "Mid-cycle protokoll: 250-500 IU 2-3x/hét (pl. Mon + Thu + Sat) a teljes AAS-ciklus alatt; gyno-szenzitív felhasználón Anastrozol 0.25 mg EOD co-admin",
    "PCT-blast protokoll: ciklus utolsó pin után 10-14 nap, 1500-2500 IU EOD × 10-14 nap; aztán SERM-PCT (Nolvadex 40/20/20/20 mg/nap)",
    "Reconstituálás: bact-water 1-2 mL/vial (5000 IU vial → 5000 IU/mL vagy 2500 IU/mL koncentráció); szúrás SC vagy IM (SC kényelmesebb)",
    "Tárolás: liofilizált vial szobahőmérséklet (long-term-tárolás 2-8°C); reconstituált oldat 2-8°C 30 napig",
    "Bloodwork pre-protocol baseline + protokoll 2. hét (Test + E2 + LH/FSH); post-protocol +2 hét confirm",
    "ITT-tracking indirekt: Test/E2-arány vagy testicular volumen (palpáció vagy ultrahang)"
  ],
  "expectations": [
    {
      "label": "Mid-cycle 1. hét",
      "body": "Testikulár fullness visszatér (visible-mérhető, ha atrófia már kialakult). Subjective: 'kissé jobb' érzet."
    },
    {
      "label": "Mid-cycle chronic",
      "body": "Testikulár-volumen stabilizálódik baseline-on (NEM teljes regrowth, csak prevention). E2-szint felmehet → AI co-admin szükséges lehet."
    },
    {
      "label": "PCT-blast 1-2. hét",
      "body": "Test-emelkedés mérhető (3-7 nap múlva), endogén Leydig-funkcionalitás aktiválódik. E2-rebound monitor."
    },
    {
      "label": "PCT-blast vége + SERM transition",
      "body": "HCG-stop, SERM-PCT (Nolvadex) indítás. HPTA recovery 4-6 hét."
    }
  ],
  "quality": {
    "pure": [
      "Pregnyl 5000 IU vial (Organon, ma Merck) — Rx pharma-minőség (EU + USA elérhető)",
      "Novarel 10000 IU vial (Ferring) — Rx pharma-minőség (USA)",
      "Choragon 5000 IU vial (Ferring EU) — Rx pharma-minőség",
      "Ovidrel/Ovitrelle 250 µg (rekombináns HCG, Serono) — magasabb-tisztaságú, drágább, pre-filled syringe",
      "UGL liquid HCG — HPLC + immunoassay-tesztelt forrás kötelező, gyakran alulkoncentrált (vagy hidegláncot eltört, klinikai aktivitás csökken)"
    ],
    "caution": [
      "Long-term high-dose (>2500 IU EOD chronic) → Leydig-receptor downregulation rizikó (>4 hét folyamatosan kontraindikált)",
      "E2-rebound erős: gyno-szenzitív felhasználón AI co-admin (Anastrozol 0.25-0.5 mg EOD) szükséges",
      "Anamnézisben germ-cell tumor (testikuláris) abszolút kontraindikáció (HCG-tumor-marker)",
      "Reconstituálás után 2-8°C tárolás 30 napig (egészségügyi steril gyakorlat kötelező)",
      "Pubertás előtti férfi → KONTRAINDIKÁLT (prematuré szexuális érés)"
    ],
    "avoid": [
      "Aktív testicular tumor / past testicular cancer",
      "Anamnézisben prosztata-karcinóma vagy magas-rizikójú prosztata-helyzet",
      "Hypersensitivity HCG-re vagy alapanyagra",
      "Long-term chronic monotherapy (>4 hét) → Leydig-downregulation",
      "Pre-pubertás férfi"
    ]
  },
  "interactions": [
    "AI co-administration (Anastrozol 0.25-0.5 mg EOD): E2-rebound mitigation — gyno-szenzitív felhasználón ajánlott",
    "SERM-bridge (Nolvadex 20-40 mg/nap, Clomid 25-50 mg/nap): PCT-protokoll, HCG-blast után indítás",
    "Mid-cycle AAS-co-admin: minden klasszikus AAS-szal kompatibilis (Test/Tren/Mast/Dianabol/Anavar — atrófia-prevention cél)",
    "Testosterone-replacement (TRT): co-administration nem standard (HCG-rescue csak abnormal-recovery-case-ben)",
    "FSH-rec (Gonal-F) co-admin: ha azoospermia-recovery cél, full HPG-axis stimulus",
    "Egyéb peptid (CJC-1295, Ipamorelin, BPC-157): nincs interakció, kompatibilis"
  ],
  "studies": [
    {
      "title": "Treatment of hypogonadotropic male hypogonadism: Case-based scenarios.",
      "authors": "Crosnoe-Shipley LE, Elkelany OO, Rahnema CD, Kim ED",
      "journal": "World J Nephrol",
      "pmid": "25949938"
    },
    {
      "title": "Low-dose human chorionic gonadotropin maintains intratesticular testosterone in normal men with testosterone-induced gonadotropin suppression.",
      "authors": "Coviello AD, Matsumoto AM, Bremner WJ, Lewis EW, Anawalt BD, Wang C, Yan X, Page ST, Leung A, Berman N, Swerdloff RS",
      "journal": "J Clin Endocrinol Metab",
      "pmid": "15713727"
    },
    {
      "title": "Concomitant intramuscular human chorionic gonadotropin preserves spermatogenesis in men undergoing testosterone replacement therapy.",
      "authors": "Hsieh TC, Pastuszak AW, Hwang K, Lipshultz LI",
      "journal": "J Urol",
      "pmid": "23260550"
    },
    {
      "title": "Maintenance of spermatogenesis in hypogonadotropic hypogonadal men with human chorionic gonadotropin alone",
      "authors": "Depenbusch M, von Eckardstein S, Simoni M, Nieschlag E.",
      "journal": "Eur J Endocrinol. 2002;147(5):617-24.",
      "pmid": "12444893"
    }
  ],
  "faq": [
    {
      "q": "Mid-cycle HCG vs PCT-blast HCG — melyik mit csinál?",
      "a": "Két különálló protokoll, eltérő céllal. **Mid-cycle**: 250-500 IU 2-3x/hét a teljes AAS-ciklus alatt — testicular ATRÓFIA-PREVENTION (here-állomány-megtartás, post-cycle gyorsabb recovery). **PCT-blast**: 1500-2500 IU EOD × 10-14 nap a ciklus utáni első 2 hétben — HPTA-RESTART Leydig-bypass-szal (a saját pituiter LH-szuppresszió-ablakot bridgeli). Mindkét protokoll után SERM-PCT (Nolvadex) ajánlott a HPTA teljes recovery-jéhez."
    },
    {
      "q": "HCG aromatizál-e? Mennyit?",
      "a": "Indirekt aromatizáció: HCG → Leydig-Test → peripheral E2-konverzió. Magnitude moderate-to-high (Test-rise nagyobb mint TRT-en, HCG mind herébb mind perifériás aromatizációt indukál). Tipikusan E2 +50-100% baseline-on, gyno-szenzitív felhasználón gyno-flare lehetséges. Mitigáció: Anastrozol 0.25-0.5 mg EOD co-administration, E2-titrálva 20-30 pg/mL target-re. PCT-blast magas-dose (>2000 IU EOD) különösen E2-watchot igényel."
    },
    {
      "q": "Lyophilized vial reconstituálás?",
      "a": "Standard protokoll: 5000 IU vial-hoz 1 mL vagy 2 mL bact-water (BAC, benzyl-alcohol-preserved sterile water). 1 mL → 5000 IU/mL koncentráció; 2 mL → 2500 IU/mL. Steril gyakorlat: alkoholos tisztítás, NEM rázni (denaturáció), gentle swirl. SC vagy IM injekció (SC kényelmesebb, hasi vagy combi szövetbe, 27-30G inzulin-fecskendő). Reconstituált oldat 2-8°C tárolás 30 napig (afterthat klinikai aktivitás drop)."
    },
    {
      "q": "Pregnyl vs Ovidrel vs UGL — melyiket válasszam?",
      "a": "**Pregnyl/Choragon (urinary)**: golden-standard, EU pharmacy hozzáférhető (~€20/5000 IU), 60+ év klinikai irodalom. **Ovidrel/Ovitrelle (rekombináns)**: magasabb tisztaság (pre-filled syringe 250 µg), drágább (~€40-60/dose), USA elérhető. **UGL**: HPLC + immunoassay-tesztelt forrás KÖTELEZŐ — UGL-HCG gyakran alulkoncentrált vagy hidegláncot eltört (aktivitás csökken). Klinikai értékben pharma > UGL >> bizonytalan-source."
    },
    {
      "q": "Cross-frame note: ugyanaz a HCG mint a fertility-clinic protokollokban?",
      "a": "Igen — identikus molekula. A `hcg-perf` és a future `hcg-peptid` entry-k ~80% content-overlap-pel rendelkeznek (azonos kémiai struktúra, farmakológia, beadás-mód). A KÜLÖNBSÉG a framing: `hcg-perf` AAS-PCT bridge-kontextusban (perifériás Test-stimulus, atrófia-prevention, doping), míg `hcg-peptid` (jön a future peptid-library batch-csel) fertility-clinic-framing-gel (IVF male-factor + secondary hypogonadism Rx, klinikai Rx-kontextus). A felhasználó ugyanazt a Pregnyl vial-t veheti meg, csak más narratívával fogja olvasni."
    }
  ],
  "related": [
    "hmg-perf",
    "fsh-rec-perf",
    "nolvadex",
    "clomid",
    "testosterone-info",
    "anastrozol"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 500,
      "medium": 1500,
      "high": 2500
    },
    "unit": "IU/dose (SC vagy IM, dose-frequency protokoll-specifikus)",
    "note": "**Mid-cycle**: 250-500 IU 2-3x/hét × ciklus-hossz (atrófia-prevention). **PCT-blast**: 1500-2500 IU EOD × 10-14 nap (HPTA-restart bridge). **Post-PCT rescue**: 1500 IU 2x/hét × 4 hét (ha LH/FSH NEM helyreáll SERM-alone). Long-term chronic monotherapy (>4 hét) KONTRAINDIKÁLT (Leydig-downregulation rizikó)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Protokoll előtt",
      "timing": "AAS-ciklus indítása előtt vagy PCT-blast előtt",
      "markers": "Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS sensitive-assay), LH, FSH, SHBG, Prolactin, testicular volumen (palpáció vagy ultrahang), lipid panel, ALT, AST.",
      "purpose": "Baseline a Test-trajectory + testicular volume + ITT (indirekt Test/E2-ratio-val) tracking-éhez."
    },
    "midCycle": {
      "label": "Mid-cycle / PCT-blast közben",
      "timing": "Protokoll 2. hete",
      "markers": "Total Test, E2 (gyno-flare-watch, ha >40 pg/mL → AI add), Prolactin (Tren-cikluson), testicular palpáció.",
      "purpose": "E2-rebound monitor + testicular-volume preservation confirm. ITT indirekt: Test/E2-arány stabilan magas → preservation."
    },
    "postCycle": {
      "label": "PCT-blast vége + SERM transition",
      "timing": "HCG-stop + Nolvadex/Clomid kezdés idejében",
      "markers": "Total Test, LH, FSH, E2, SHBG.",
      "purpose": "HCG-effekt elcsendesedik, endogén HPTA-restart kezdete mérhető. Ha LH/FSH NEM emelkedik 4 hét alatt SERM-alone → HCG-rescue (1500 IU 2x/hét × 4 hét) indítás."
    },
    "cruise": {
      "label": "Long-term mid-cycle (multi-cycle felhasználón)",
      "timing": "Minden 12 hét",
      "markers": "Full HPG panel + testicular ultrahang évente.",
      "purpose": "Multi-cycle/blast-and-cruise felhasználón a HCG mid-cycle protokoll long-term effect monitoring."
    }
  },
  "anecdote": "A HCG egy prominens peptid PCT célokra és a károsodott heréműködés helyreállítására. A felhasználók gyakran teltebb hereméretről és fenntartott libidóról számolnak be a használat során. Mivel azonban közvetlenül stimulálja a tesztoszteron-termelést, az aromatizáció révén ösztrogén-emelkedés várható, ezért az E2 monitorozása kulcsfontosságú. A túlhasználat idővel deszenzitizálhatja az LH-receptorokat, ezért a mérsékelt, ciklikus adagolás előnyösebb. A TRT vagy anabolikumokat használók számára a közösségi beszámolók szerint évente 1-2 alkalommal javasolt a HCG használata a hosszú távú heresorvadás csökkentésére. A tipikus anekdotikus protokollok 1-3 hónapos ciklusokat tartalmaznak, évente kétszer, körülbelül 25 000-50 000 NE összdózissal ezen időszak alatt. Általában a ciklus után használják, nem közben, mert a ciklus alatti használat csak növeli az E2-terhelést egyértelmű előny nélkül. A HCG-t szubkután injektálják, jellemzően heti 1-3 alkalommal, a szervezetben tapasztalható rövidebb funkcionális aktivitása miatt."
}
