// HMG (Menopur / Pergonal) – Human Menopausal Gonadotropin, urinary-extracted
// FSH+LH 75/75 IU mixture. AAS-PCT framing: full HPG axis restart (Sertoli FSH
// support too). Cross-frame: future peptide library will add `hmg-peptid`.
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
  "shortDesc": "Human Menopausal Gonadotropin – urinary-extracted FSH + LH 75/75 IU mixture. In AAS-PCT: full HPG axis restart (Sertoli FSH support too, not just Leydig LH like HCG). Pergonal withdrawn 2005, Menopur modern alternative. Cross-frame: future peptide library will add `hmg-peptid`.",
  "description": "HMG (Human Menopausal Gonadotropin) is a glycoprotein mixture purified from postmenopausal female urine, containing approximately 75 IU follicle-stimulating hormone (FSH) + 75 IU luteinizing hormone (LH) per standard ampoule (1:1 ratio). The clinical history of HMG can be divided into two eras: (1) **Pergonal era** (1962-2005) – led by Bruno Lunenfeld, an Israeli endocrinologist, urine collected from menopausal nuns of the Vatican Catholic order (the 1962 first clinical use traces to Sisters Carmela and Donatella), manufactured by Serono Pharmacia, indication ovulatory infertility. (2) **Menopur era** (2002 EMA approval → today) – Ferring higher-purity urinary-extracted product, replacing Pergonal due to vCJD risk reduction. **AAS-PCT context**: HMG's unique value is that, unlike HCG, it supplies BOTH gonadotropins (FSH + LH) → full HPG axis restart (not just Leydig stimulus like HCG, but also Sertoli-cell FSH stimulus). Indication in AAS users: after long-cycle/hard-suppression, when the user's own pituitary FSH still isn't secreting enough Sertoli support → accelerated spermatogenesis recovery. **Cross-frame note**: this is the `-perf` suffix entry; the future peptide library batch will add the `hmg-peptid` entry (fertility-clinic framing – IVF male-factor protocol, IUI/COS ovulation induction context). WADA-banned year-round (S2 Peptide Hormones).",
  "keyInfo": [
    {"label": "Mechanism", "value": "Urinary-extracted FSH (75 IU) + LH (75 IU) mixture – Sertoli-FSHR + Leydig-LHCGR receptor double-stimulus"},
    {"label": "Dosing (PCT)", "value": "75-150 IU EOD × 2-4 weeks"},
    {"label": "Half-life", "value": "FSH ~24-36 h / LH ~20 h (mixed component decay)"},
    {"label": "Onset", "value": "Test rise 5-10 days, spermatogenesis restart 4-8 weeks"},
    {"label": "Legal status", "value": "EMA Rx Menopur (Ferring 2002), USA FDA Rx Menopur (2005), WADA S2 (banned)"}
  ],
  "mechanism": "HMG is a two-component glycoprotein mixture: (1) FSH (follicle-stimulating hormone) – Sertoli-cell FSHR receptor agonist → spermatogenesis stimulus + inhibin-B production; (2) LH (luteinizing hormone) – Leydig-cell LHCGR receptor agonist → testicular testosterone production. The biological t1/2 of the two components differs: FSH ~24-36 h, LH ~20 h. In the AAS-PCT context HMG's advantage over HCG: Sertoli FSH stimulus is necessary for full spermatogenesis recovery, especially after long-cycle/hard-suppression when the user's own pituitary FSH still isn't secreting enough. HMG does NOT replace HCG (short LH effect may still need both), but is a complementary protocol element.",
  "legalStatus": "USA: FDA Rx Menopur (Ferring 2005 approval). EU: EMA Rx Menopur (Ferring 2002 approval). HU + PL: registered (Menopur Rx). Pergonal withdrawn globally ~2005 (vCJD theoretical risk + reduction of urinary source). WADA: S2.2 Peptide Hormones (banned in-competition + out-of-competition).",
  "onsetTime": "Test rise 5-10 days, spermatogenesis restart 4-8 weeks",
  "halfLife": "FSH ~24-36 h, LH ~20 h (mixed)",
  "halfLifeActive": "Clinical effect 3-5 days (mixed component)",
  "interactionsWith": ["hcg-perf", "fsh-rec-perf", "nolvadex", "clomid", "gonadorelin"],
  "aromatization": "Indirect: testicular FSH+LH stimulus → endogenous Test → secondary peripheral E2 (similar magnitude to HCG, slightly lower because Sertoli activity dominates vs Leydig). In AAS-PCT context, E2 rebound monitoring is needed at higher HMG doses (>150 IU EOD).",
  "hepatotoxicity": "No hepatic stress – protein-based SC or IM injection.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (not an AAS; FSH + LH indirect stimulus)",
  "bindingAffinity": "FSH-FSHR Kd ~0.1 nM (Sertoli), LH-LHCGR Kd ~0.1 nM (Leydig). Mixed receptor stimulus activates both Sertoli + Leydig cells.",
  "detectionWindow": "WADA-accredited immunoassay urinary FSH + LH detection – 7-14 days after chronic protocol, 3-5 days after single bolus.",
  "benefits": [
    "Full HPG axis restart (FSH + LH together, not just Leydig LH like HCG)",
    "Accelerated spermatogenesis recovery after long-cycle/hard-suppression",
    "Sertoli-cell activity (inhibin-B production) restoration",
    "EMA + FDA-approved, clinical trial database",
    "Compatible with HCG (LH-advantage + FSH-emphasis dual protocol)"
  ],
  "quickStart": [
    "PCT protocol: 75-150 IU EOD × 2-4 weeks, SC or IM injection",
    "Reconstitution: bact water 1 mL/ampoule (75 IU FSH + 75 IU LH/mL concentration)",
    "Standalone vs HCG combination: if azoospermia recovery is the goal → HMG dominates; mid-cycle testicular preservation goal → HCG dominates; full-axis goal → 4 weeks HCG blast then 4 weeks HMG (sequential)",
    "Storage: lyophilized ampoule room temperature; reconstituted solution 2-8°C for 30 days",
    "Pricing: Menopur 75 IU vial ~€20-25 EU pharmacy, pricier than Pregnyl",
    "Bloodwork: LH, FSH, Total Test, E2, inhibin-B (Sertoli marker) baseline + 2 weeks + 4 weeks"
  ],
  "expectations": [
    {"label": "Week 1", "body": "Test rise begins to be measurable (Leydig stimulus), FSH levels return (Sertoli stimulus starts, inhibin-B still low)."},
    {"label": "Weeks 2-4", "body": "Stable hormone recovery, spermatogenesis restart begins (4-8 weeks to full recovery). Inhibin-B rise measurable."},
    {"label": "Post-protocol", "body": "Spermatogenesis recovery continues (8-12 weeks full). LH/FSH return to baseline. Sperm analysis at 12 weeks."}
  ],
  "quality": {
    "pure": [
      "Menopur 75 IU ampoule (Ferring) – Rx pharma-grade (EU + USA)",
      "Repronex 75 IU (Ferring USA generic) – pharma-grade",
      "Indian generic (Bharat Serums HMG) – pharma-grade",
      "UGL HMG – HPLC + immunoassay-tested source mandatory (FSH/LH ratio often off)",
      "Pergonal historical: NOT recommended in modern protocol (post-2005 expired stock + vCJD theoretical risk)"
    ],
    "caution": [
      "vCJD risk: theoretical, no documented case. Modern Menopur ultra-purified, drastically reduces the theoretical risk",
      "Multiple-pregnancy risk (female indication only) – male patient N/A",
      "FSH selectivity vs HCG LH selectivity worth considering in protocol design"
    ],
    "avoid": [
      "History of testicular tumor",
      "Other-cause infertility in active male-fertility-clinic context (Klinefelter, Y-chromosome deletion – HMG ineffective)",
      "Hypersensitivity to HMG or excipient",
      "Pre-pubertal male"
    ]
  },
  "interactions": [
    "HCG combination: HCG (LH advantage) + HMG (FSH emphasis) synergistic full-axis stimulus, classic 'HCG+HMG dual blast' protocol",
    "FSH-rec (Gonal-F) alternative: if pure FSH goal (Sertoli-only stimulus) → FSH-rec more cost-effective per Sertoli unit (BUT pricier per dose)",
    "SERM bridge (Nolvadex/Clomid): standard PCT protocol after HMG blast",
    "Mid-cycle AAS: compatible (atrophy prevention + Sertoli functionality preserved)",
    "TRT: NOT combinable on chronic basis (Leydig saturation suppressed by exogenous Test)"
  ],
  "studies": [
    {"title": "Comparison of outcomes between pulsatile gonadotropin releasing hormone and combined gonadotropin therapy of spermatogenesis in patients with congenital hypogonadotropic hypogonadism.", "authors": "Zheng Y, Bai HZ, Zhao GC", "journal": "Reprod Biol Endocrinol", "pmid": "40119359"},
    {"title": "Failure of combined follicle-stimulating hormone-testosterone administration to initiate and/or maintain spermatogenesis in men with hypogonadotropic hypogonadism.", "authors": "Schaison G, Young J, Pholsena M, Edery M, Touraine P, Lahlou N", "journal": "J Clin Endocrinol Metab", "pmid": "8263139"},
    {"title": "Maintenance of spermatogenesis in hypogonadotropic hypogonadal men with human chorionic gonadotropin alone", "authors": "Depenbusch M, von Eckardstein S, Simoni M, Nieschlag E.", "journal": "Eur J Endocrinol. 2002;147(5):617-24.", "pmid": "12444893"}
  ],
  "faq": [
    {"q": "HMG vs HCG – which when?", "a": "HCG = LH-only mimic (Leydig stimulus), HMG = LH + FSH mixed (Leydig + Sertoli stimulus). Clinical decision tree: (1) mid-cycle atrophy prevention → HCG (cheaper, single mechanism enough); (2) PCT-blast short-axis restart → HCG; (3) azoospermia recovery after long-cycle/blast-and-cruise → HMG (FSH emphasis); (4) full-axis restart goal → HCG blast + HMG sequential. Many clinical protocols combine both."},
    {"q": "Menopur vs Pergonal – is Pergonal still available?", "a": "Pergonal withdrawn globally between ~2005-2007. The classic Pergonal source (urine of postmenopausal Vatican nuns) symbolically closed the era. Modern alternative: Menopur (Ferring 2002 EMA, 2005 FDA), higher-purity urinary-extracted product with vCJD-theoretical-risk reduction. Clinically, Menopur is equivalent to or better than Pergonal was."},
    {"q": "Is vCJD risk real?", "a": "Theoretical, no documented case. The classic concern: presence of prion proteins in urinary source (postmenopausal female cohort). Modern Menopur ultra-purified manufacturing (Ferring proprietary process) drastically reduces theoretical risk. In 2026 clinical practice considers Menopur safe; recombinant FSH-rec (Gonal-F) is an alternative if the user categorically rejects urinary source."},
    {"q": "Can it be combined with FSH-rec?", "a": "Yes, if Sertoli emphasis is strong (azoospermia recovery). One specialized protocol: HMG (LH + FSH 75/75) + FSH-rec (extra Sertoli stimulus 75-150 IU). Expensive (~€800-1200/month), BUT justified in long-term infertility. Overkill for mainstream PCT – HMG-only or HMG + HCG sufficient."}
  ],
  "related": ["hcg-perf", "fsh-rec-perf", "nolvadex", "clomid", "gonadorelin"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 75, "medium": 112.5, "high": 150},
    "unit": "IU/dose (SC or IM, EOD frequency)",
    "note": "PCT protocol: 75-150 IU EOD × 2-4 weeks. Azoospermia recovery (post long-cycle): 150 IU EOD × 4-12 weeks combined with HCG mid-cycle protocol. SC more comfortable (abdominal or thigh tissue, 27-30G syringe). NOT monotherapy chronic (>6 weeks) – Leydig + Sertoli combined downregulation risk."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-protocol",
      "timing": "End of AAS cycle + 2 weeks (short-ester) or + 4-6 weeks (long-ester)",
      "markers": "Total Test, Free Test, LH, FSH, E2, SHBG, Prolactin, inhibin-B (Sertoli baseline), sperm analysis (baseline if fertility goal), ALT, AST.",
      "purpose": "Baseline for Test + spermatogenesis recovery + Sertoli activity tracking."
    },
    "midCycle": {
      "label": "Mid-protocol (week 2)",
      "timing": "Start +2 weeks",
      "markers": "LH, FSH (FSH rise is HMG-specific effect), Test, E2, inhibin-B (Sertoli restart marker).",
      "purpose": "Sertoli activity restoration confirm. Inhibin-B rise is the indicator of spermatogenesis restart."
    },
    "postCycle": {
      "label": "Protocol end + recovery",
      "timing": "Last dose +2 weeks and +12 weeks",
      "markers": "Total Test, LH, FSH, E2, inhibin-B, sperm analysis (12 weeks).",
      "purpose": "Spermatogenesis recovery confirmation. If sperm count < 5 million/mL at 12 weeks → consider +12 weeks HMG extension."
    },
    "cruise": {
      "label": "Long-term (multi-cycle users)",
      "timing": "Yearly",
      "markers": "Full HPG panel + sperm analysis + inhibin-B.",
      "purpose": "Long-term spermatogenesis status monitoring in multi-cycle/blast-and-cruise users."
    }
  }
}
