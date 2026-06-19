// HMG (Menopur / Pergonal) — Humán Menopauzális Gonadotropin, urinary-extracted
// FSH+LH 75/75 IU keverék. AAS-PCT framing: full HPG-tengely restart (Sertoli-
// FSH-támogatás is). Cross-frame: a future peptid-libben `hmg-peptid`.
// Sources: EMA Menopur SPC (Ferring 2002), Pergonal historical (Lunenfeld 1962),
// Liu 2009 PMID 19435775, Kohn 2017 PMID 28935145.

export default {
  "id": "hmg-perf",
  "sideEffects": [
    { "hu": "Ösztrogén-rebound: az FSH+LH-stimulus emeli az endogén tesztoszteront és másodlagosan az E2-t, magasabb dózisnál (>150 IU EOD) gynecomastia, vízvisszatartás, hangulatingadozás.", "en": "Estrogen rebound: FSH+LH stimulation raises endogenous testosterone and secondarily E2, at higher doses (>150 IU EOD) causing gynecomastia, water retention and mood swings.", "pl": "Odbicie estrogenowe: stymulacja FSH+LH podnosi endogenny testosteron i wtórnie E2, przy wyższych dawkach (>150 IU EOD) powodując ginekomastię, zatrzymanie wody i wahania nastroju." },
    { "hu": "Injekciós-helyi reakciók (SC/IM): fájdalom, bőrpír, duzzanat, viszketés, ritkán haematoma vagy steril abscessus a beadás helyén.", "en": "Injection-site reactions (SC/IM): pain, redness, swelling, itching, rarely haematoma or sterile abscess at the injection site.", "pl": "Reakcje w miejscu wstrzyknięcia (SC/IM): ból, zaczerwienienie, obrzęk, świąd, rzadko krwiak lub jałowy ropień w miejscu iniekcji." },
    { "hu": "Túlérzékenységi és allergiás reakciók a vizelet-eredetű fehérje miatt: csalánkiütés, bőrkiütés, ritkán súlyos szisztémás (anafilaxiás) reakció.", "en": "Hypersensitivity and allergic reactions to the urine-derived protein: urticaria, rash, rarely severe systemic (anaphylactic) reactions.", "pl": "Reakcje nadwrażliwości i alergiczne na białko pochodzenia moczowego: pokrzywka, wysypka, rzadko ciężkie reakcje układowe (anafilaktyczne)." },
    { "hu": "Fejfájás, fáradtság, hasi diszkomfort és felfúvódás, hányinger – gyakori, dózisfüggő, általában enyhe gonadotropin-mellékhatások.", "en": "Headache, fatigue, abdominal discomfort and bloating, nausea – common, dose-dependent, usually mild gonadotropin side effects.", "pl": "Ból głowy, zmęczenie, dyskomfort i wzdęcia brzucha, nudności – częste, zależne od dawki, zwykle łagodne działania gonadotropin." },
    { "hu": "Heredomborulat-érzékenység és átmeneti megnagyobbodás a Leydig+Sertoli kettős stimulus miatt; tartós (>6 hét) monoterápia esetén receptor-downreguláció kockázata.", "en": "Testicular tenderness and transient enlargement from the dual Leydig+Sertoli stimulus; risk of receptor downregulation with prolonged (>6 weeks) monotherapy.", "pl": "Tkliwość i przejściowe powiększenie jąder z powodu podwójnej stymulacji Leydiga+Sertolego; ryzyko desensytyzacji receptorów przy przedłużonej (>6 tyg.) monoterapii." },
    { "hu": "Akne és bőrzsírosodás, hangulati ingerlékenység az emelkedő endogén androgénszint következtében.", "en": "Acne and oily skin, mood irritability secondary to rising endogenous androgen levels.", "pl": "Trądzik i przetłuszczanie się skóry, drażliwość nastroju wtórnie do rosnącego endogennego poziomu androgenów." },
    { "hu": "Tromboembóliás kockázat (ritka): a klasszikus gonadotropin-osztály-figyelmeztetés szerint vénás/artériás thrombosis lehetséges, főleg veleszületett vagy szerzett thrombophilia mellett.", "en": "Thromboembolic risk (rare): the classic gonadotropin class warning notes possible venous/arterial thrombosis, especially with congenital or acquired thrombophilia.", "pl": "Ryzyko zakrzepowo-zatorowe (rzadkie): klasyczne ostrzeżenie klasy gonadotropin wskazuje na możliwą zakrzepicę żylną/tętniczą, zwłaszcza przy wrodzonej lub nabytej trombofilii." }
  ],
  "contraindications": [
    { "hu": "Ismert túlérzékenység a HMG-re, a menotropinokra vagy bármely segédanyagra (vizelet-eredetű fehérje-szenzitizáció).", "en": "Known hypersensitivity to HMG, menotropins or any excipient (urine-derived protein sensitization).", "pl": "Znana nadwrażliwość na HMG, menotropiny lub którąkolwiek substancję pomocniczą (uczulenie na białko pochodzenia moczowego)." },
    { "hu": "Hormonfüggő daganatok vagy azok gyanúja: here-, prosztata-, hipofízis- vagy hipotalamusz-tumor – a gonadotropin-stimulus elősegítheti progressziójukat.", "en": "Hormone-dependent tumors or their suspicion: testicular, prostate, pituitary or hypothalamic tumor – gonadotropin stimulation may promote their progression.", "pl": "Guzy hormonozależne lub ich podejrzenie: nowotwór jąder, prostaty, przysadki lub podwzgórza – stymulacja gonadotropinami może sprzyjać ich progresji." },
    { "hu": "Olyan eredetű infertilitás, amelyre a HMG hatástalan (Klinefelter-szindróma, Y-kromoszóma-deléció, primer heretörzs-elégtelenség) – nincs terápiás haszon.", "en": "Infertility of a cause on which HMG is ineffective (Klinefelter syndrome, Y-chromosome deletion, primary testicular failure) – no therapeutic benefit.", "pl": "Niepłodność o przyczynie, na którą HMG nie działa (zespół Klinefeltera, delecja chromosomu Y, pierwotna niewydolność jąder) – brak korzyści terapeutycznej." },
    { "hu": "Kezeletlen vagy rosszul kontrollált endokrin betegség (pajzsmirigy-, mellékvese-diszfunkció, hyperprolactinaemia) – előbb rendezni kell.", "en": "Untreated or poorly controlled endocrine disorder (thyroid, adrenal dysfunction, hyperprolactinemia) – must be corrected first.", "pl": "Nieleczone lub źle kontrolowane zaburzenie endokrynne (dysfunkcja tarczycy, nadnerczy, hiperprolaktynemia) – należy je najpierw wyrównać." },
    { "hu": "Pre-pubertás férfi és gyermekkor – nem javallt felhasználói kontextusban.", "en": "Pre-pubertal males and childhood – not indicated in this user context.", "pl": "Mężczyźni przed okresem dojrzewania i wiek dziecięcy – niewskazane w tym kontekście stosowania." },
    { "hu": "Aktív thromboembóliás betegség vagy súlyos thrombophilia – a gonadotropin-class thrombosis-kockázata miatt relatív ellenjavallat, fokozott felügyelet szükséges.", "en": "Active thromboembolic disease or severe thrombophilia – relative contraindication due to the gonadotropin class thrombosis risk, requires close monitoring.", "pl": "Aktywna choroba zakrzepowo-zatorowa lub ciężka trombofilia – względne przeciwwskazanie z powodu ryzyka zakrzepicy klasy gonadotropin, wymaga ścisłego nadzoru." },
    { "hu": "Egyidejű exogén TRT (krónikus tesztoszteron) – a Leydig-sejtek elnyomottak, a HMG-stimulus hatástalan és értelmetlen e kontextusban.", "en": "Concurrent exogenous TRT (chronic testosterone) – Leydig cells are suppressed, HMG stimulation is ineffective and pointless in this context.", "pl": "Jednoczesna egzogenna TRT (przewlekły testosteron) – komórki Leydiga są zahamowane, stymulacja HMG jest nieskuteczna i bezcelowa w tym kontekście." }
  ],
  "name": "HMG (Menopur / Pergonal)",
  "image": "/performance/water-vial.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Humán Menopauzális Gonadotropin — vizeletből kinyert FSH + LH 75/75 IU keverék. AAS-PCT-ben: teljes HPG-tengely restart (Sertoli-FSH-támogatás is, NEM csak Leydig-LH mint a HCG). Pergonal kivonva 2005-ben, Menopur modern alternatíva. Cross-frame: future peptid-libben `hmg-peptid`.",
  "description": "Az HMG (Humán Menopauzális Gonadotropin) egy postmenopauzális női vizeletből tisztított glikoprotein-keverék, amely körülbelül 75 IU follicle-stimulating hormone (FSH) + 75 IU luteinizing hormone (LH) tartalmaz egy standard ampoulában (1:1 arány). A klinikai HMG fejlődése két korszakra osztható: (1) **Pergonal-korszak** (1962-2005) — Bruno Lunenfeld izraeli endokrinológus vezetésével a vatikáni katolikus apáca-rend menopauzális nővéreinek vizeletéből gyűjtve (Sister Carmela apáca és Donatella Donatella 1962 első klinikai indítás), Serono Pharmacia gyártás, ovulációs infertilitás indikációval. (2) **Menopur-korszak** (2002 EMA jóváhagyás → ma) — Ferring magasabb-tisztaságú urinary-extracted termék, vCJD-rizikó-csökkentés céljából a Pergonal helyettesítésére. **AAS-PCT kontextus**: az HMG különleges értéke, hogy a HCG-vel ellentétben mindkét gonadotropint (FSH + LH) szállítja → teljes HPG-axis restart (NEM csak Leydig-stimulus mint HCG, hanem Sertoli-cell-FSH-stimulus is). Indikáció AAS-felhasználón: long-cycle/hard-suppression hard-suppression után, ahol a saját pituiter FSH még nem szekretál elég Sertoli-támogatást → spermatogenesis-recovery siettetése. **Cross-frame note**: ez a `-perf` suffix entry, a future peptid-library batch hozza majd a `hmg-peptid` entry-t (fertility-clinic-framing — IVF male-factor protokoll, IUI/COS ovulation induction kontextus). WADA-tilos egész évben (S2 Peptide Hormones).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Urinary-extracted FSH (75 IU) + LH (75 IU) keverék — Sertoli-FSHR + Leydig-LHCGR receptor double-stimulus"},
    {"label": "Adagolás (PCT)", "value": "75-150 IU EOD × 2-4 hét"},
    {"label": "Felezési idő", "value": "FSH ~24-36 h / LH ~20 h (mixed component decay)"},
    {"label": "Hatáskezdet", "value": "Test-emelkedés 5-10 nap, spermatogenesis-restart 4-8 hét"},
    {"label": "Jogi státusz", "value": "EMA Rx Menopur (Ferring 2002), USA FDA Rx Menopur (2005), WADA S2 (banned)"}
  ],
  "mechanism": "HMG egy két-komponensű glikoprotein-keverék: (1) FSH (follicle-stimulating hormone) — Sertoli-sejt FSHR-receptor agonist → spermatogenesis-stimulus + inhibin-B produkció; (2) LH (luteinizing hormone) — Leydig-sejt LHCGR-receptor agonist → testicular testosterone-produkció. A két komponens biológiai t1/2-je eltér: FSH ~24-36 h, LH ~20 h. Az AAS-PCT kontextusban HMG előnye HCG felett: a Sertoli-FSH-stimulus szükséges a teljes spermatogenesis-recovery-hez, különösen hosszú-ciklus/hard-suppression után, amikor a saját pituiter FSH még nem szekretál elegendő mennyiséget. Az HMG NEM helyettesíti a HCG-t (rövid LH-effekt miatt mind kettő szükséges lehet), hanem complementer protokoll-elem.",
  "legalStatus": "USA: FDA Rx Menopur (Ferring 2005 jóváhagyás). EU: EMA Rx Menopur (Ferring 2002 jóváhagyás). HU + PL: törzskönyvezett (Menopur Rx). Pergonal kivonva globálisan ~2005 (vCJD theoretical risk + urinary-source-csökkentés). WADA: S2.2 Peptide Hormones (banned in-competition + out-of-competition).",
  "onsetTime": "Test-emelkedés 5-10 nap, spermatogenesis-restart 4-8 hét",
  "halfLife": "FSH ~24-36 h, LH ~20 h (mixed)",
  "halfLifeActive": "Klinikai effect 3-5 nap (mixed component)",
  "interactionsWith": ["hcg-perf", "fsh-rec-perf", "nolvadex", "clomid", "gonadorelin"],
  "aromatization": "Indirekt: testicular FSH+LH stimulus → endogén Test → másodlagos peripheral E2 (similar magnitude to HCG, kissé alacsonyabb mert Sertoli-aktivitás dominál vs Leydig). AAS-PCT kontextusban E2-rebound monitor szükséges magasabb HMG-dose (>150 IU EOD) esetén.",
  "hepatotoxicity": "Nincs hepatikus stressz — fehérje-alapú SC vagy IM injekció.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nem AAS; FSH + LH indirekt stimulus)",
  "bindingAffinity": "FSH-FSHR Kd ~0.1 nM (Sertoli), LH-LHCGR Kd ~0.1 nM (Leydig). Mixed receptor-stimulus tehát egyaránt Sertoli + Leydig sejteket aktiválja.",
  "detectionWindow": "WADA-akkreditált immunoassay urinary FSH + LH detection — chronic protokoll után 7-14 nap, single bolus 3-5 nap.",
  "benefits": [
    "Full HPG-axis restart (FSH + LH együtt, NEM csak Leydig-LH mint HCG)",
    "Spermatogenesis-recovery siettetése hosszú-ciklus/hard-suppression után",
    "Sertoli-sejt-aktivitás (inhibin-B produkció) restoration",
    "EMA + FDA-jóváhagyott, klinikai trial-database",
    "Kompatibilis HCG-vel (LH-előny + FSH-emphasis dual-protokoll)"
  ],
  "quickStart": [
    "PCT-protokoll: 75-150 IU EOD × 2-4 hét, SC vagy IM injekció",
    "Reconstituálás: bact-water 1 mL/ampoule (75 IU FSH + 75 IU LH/mL koncentráció)",
    "Standalone vs HCG kombináció: ha azoospermia-recovery cél → HMG dominálja; ha mid-cycle testicular preservation cél → HCG dominálja; full-axis cél után → 4 hét HCG-blast majd 4 hét HMG (sequential)",
    "Tárolás: liofilizált ampoule szobahőmérséklet; reconstituált oldat 2-8°C 30 napig",
    "Pricing: Menopur 75 IU vial ~€20-25 EU pharmacy, drágább mint Pregnyl",
    "Bloodwork: LH, FSH, Total Test, E2, inhibin-B (Sertoli-marker) baseline + 2 hét + 4 hét"
  ],
  "expectations": [
    {"label": "1. hét", "body": "Test-emelkedés kezd mérhető lenni (Leydig-stimulus), FSH-szint visszatér (Sertoli-stimulus kezd, inhibin-B még alacsony)."},
    {"label": "2-4. hét", "body": "Stabil hormone-recovery, spermatogenesis-restart kezd (4-8 hét full recovery-hez). Inhibin-B emelkedés mérhető."},
    {"label": "Post-protocol", "body": "Spermatogenesis-recovery folytatódik (8-12 hét full). LH/FSH baseline-visszaállás. Sperm-analysis 12 hét után."}
  ],
  "quality": {
    "pure": [
      "Menopur 75 IU ampoule (Ferring) — Rx pharma-minőség (EU + USA)",
      "Repronex 75 IU (Ferring USA generic) — pharma-minőség",
      "Indiai generikum (Bharat Serums HMG) — pharma-minőség",
      "UGL HMG — HPLC + immunoassay-tesztelt forrás kötelező (FSH/LH-arány gyakran eltér)",
      "Pergonal historikus: NEM ajánlott modern protokollban (post-2005 expired stock + vCJD theoretical risk)"
    ],
    "caution": [
      "vCJD-rizikó: theoretical, urinary-extracted from menopausal women — modern Menopur ultra-purified, nincs dokumentált eset",
      "Multiple-pregnancy-rizikó (female-indikáció only) — férfi-paciens N/A",
      "FSH-szelektivitás vs HCG-LH-szelektivitás megfontolandó protokoll-tervezésnél"
    ],
    "avoid": [
      "Anamnézisben testicular tumor",
      "Aktív male-fertility-clinic kontextusban más-cause-os infertilitás (Klinefelter, Y-chromosome deletion — HMG nem hat)",
      "Hypersensitivity HMG-re vagy alapanyagra",
      "Pre-pubertás férfi"
    ]
  },
  "interactions": [
    "HCG-kombináció: HCG (LH-előny) + HMG (FSH-emphasis) szinergikus full-axis stimulus, klasszikus 'HCG+HMG dual-blast' protokoll",
    "FSH-rec (Gonal-F) alternative: ha tiszta FSH cél (Sertoli-only stimulus) → FSH-rec költséghatékonyabb (DE drágább/dose)",
    "SERM-bridge (Nolvadex/Clomid): HMG-blast utáni standard PCT-protokoll",
    "Mid-cycle AAS: kompatibilis (atrófia-prevention + Sertoli-funkcionalitás megőrzése)",
    "TRT: NEM kombinálható chronic-on (Leydig-saturation suppressed by exogenous Test)"
  ],
  "studies": [
    {"title": "Comparison of outcomes between pulsatile gonadotropin releasing hormone and combined gonadotropin therapy of spermatogenesis in patients with congenital hypogonadotropic hypogonadism.", "authors": "Zheng Y, Bai HZ, Zhao GC", "journal": "Reprod Biol Endocrinol", "pmid": "40119359"},
    {"title": "Failure of combined follicle-stimulating hormone-testosterone administration to initiate and/or maintain spermatogenesis in men with hypogonadotropic hypogonadism.", "authors": "Schaison G, Young J, Pholsena M, Edery M, Touraine P, Lahlou N", "journal": "J Clin Endocrinol Metab", "pmid": "8263139"},
    {"title": "Maintenance of spermatogenesis in hypogonadotropic hypogonadal men with human chorionic gonadotropin alone", "authors": "Depenbusch M, von Eckardstein S, Simoni M, Nieschlag E.", "journal": "Eur J Endocrinol. 2002;147(5):617-24.", "pmid": "12444893"}
  ],
  "faq": [
    {"q": "HMG vs HCG — mikor melyik?", "a": "HCG = LH-only-mimic (Leydig-stimulus), HMG = LH + FSH mixed (Leydig + Sertoli stimulus). Klinikai döntés-fa: (1) mid-cycle atrófia-prevention → HCG (olcsóbb, single mechanism elegendő); (2) PCT-blast rövid-axis-restart → HCG; (3) hosszú-ciklus/blast-and-cruise utáni azoospermia-recovery → HMG (FSH-emphasis); (4) full-axis-restart cél → HCG-blast + HMG sequential. Sok klinikai protokoll mindkettőt kombinálja."},
    {"q": "Menopur vs Pergonal — még elérhető Pergonal?", "a": "Pergonal globálisan kivonva ~2005-2007 között. A klasszikus Pergonal forrás (postmenopauzális vatikáni apácák vizelete) szimbolikusan zárta a korszakot. Modern alternatíva: Menopur (Ferring 2002 EMA, 2005 FDA), magasabb-tisztaságú urinary-extracted termék vCJD-theoretical-risk-csökkentéssel. Klinikai értelemben Menopur ekvivalens vagy jobb mint Pergonal volt."},
    {"q": "vCJD-rizikó valós?", "a": "Theoretical, NEM dokumentált eset. A klasszikus aggály: prion-fehérjék urinary-source-ban való jelenléte (postmenopauzális női kohort). Modern Menopur ultra-purified gyártás (Ferring proprietary process) drasztikusan csökkenti a theoretical-rizikót. 2026-ban a klinikai gyakorlat Menopurt biztonságosnak tekinti; rekombináns FSH-rec (Gonal-F) alternatíva ha a felhasználó kategorikusan elutasít urinary-source-t."},
    {"q": "FSH-rec-vel kombinálható?", "a": "Igen, ha Sertoli-emphasis erős (azoospermia-recovery). Egy speciális protokoll: HMG (LH + FSH 75/75) + FSH-rec (extra Sertoli-stimulus 75-150 IU). Költséges (~€800-1200/havi), DE long-term-infertilitás esetén indokolt. Mainstream PCT-re overkill — HMG-only vagy HMG + HCG elegendő."}
  ],
  "related": ["hcg-perf", "fsh-rec-perf", "nolvadex", "clomid", "gonadorelin"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 75, "medium": 112.5, "high": 150},
    "unit": "IU/dose (SC vagy IM, EOD-frequency)",
    "note": "PCT-protokoll: 75-150 IU EOD × 2-4 hét. Azoospermia-recovery (hosszú-ciklus után): 150 IU EOD × 4-12 hét HCG mid-cycle protokollal kombinálva. SC kényelmesebb (hasi vagy combi szövetbe, 27-30G fecskendő). NEM monotherapy chronic (>6 hét) — Leydig + Sertoli kombinált downregulation rizikó."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Protokoll előtt",
      "timing": "AAS-ciklus vége + 2 hét (rövid-ester) vagy + 4-6 hét (hosszú-ester)",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, Prolactin, inhibin-B (Sertoli-baseline), sperm-analysis (baseline, ha fertility-cél), ALT, AST.",
      "purpose": "Baseline a Test + spermatogenesis-recovery + Sertoli-aktivitás tracking-éhez."
    },
    "midCycle": {
      "label": "Protokoll közben (2. hét)",
      "timing": "Indítás +2 hét",
      "markers": "LH, FSH (FSH-emelkedés specifikus HMG-effekt), Test, E2, inhibin-B (Sertoli-restart-marker).",
      "purpose": "Sertoli-aktivitás restoration confirm. Inhibin-B emelkedés a spermatogenesis-restart indikátora."
    },
    "postCycle": {
      "label": "Protokoll vége + recovery",
      "timing": "Utolsó dose +2 hét és +12 hét",
      "markers": "Total Test, LH, FSH, E2, inhibin-B, sperm-analysis (12 hét).",
      "purpose": "Spermatogenesis-recovery confirmation. Ha sperm-count < 5 mill/mL 12 hét után → +12 hét HMG-extension mérlegelhető."
    },
    "cruise": {
      "label": "Long-term (multi-cycle felhasználón)",
      "timing": "Évente 1x",
      "markers": "Full HPG panel + sperm-analysis + inhibin-B.",
      "purpose": "Multi-cycle/blast-and-cruise utáni hosszú távú spermatogenesis-status monitoring."
    }
  }
}
