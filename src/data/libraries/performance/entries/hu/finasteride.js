// Finasteride (Propecia / Proscar) – szelektív type-II 5α-reduktáz inhibitor.
// FDA Proscar 1992 BPH, Propecia 1997 AGA. AAS-hair-loss prevention.
// Sources: FDA Propecia/Proscar SmPC, Kaufman 1998 PMID 9821414,
// Irwig 2012 PFS PMID 22366892, Mella 2010 PMID 20842055.

export default {
  "id": "finasteride",
  "sideEffects": [
    { "hu": "Szexuális diszfunkció: libidócsökkenés, erektilis diszfunkció, ejakulátum-volumen csökkenése (kb. 2–8%, dózisfüggő, leggyakoribb mellékhatás).", "en": "Sexual dysfunction: reduced libido, erectile dysfunction, decreased ejaculate volume (about 2–8%, dose-dependent, most common adverse effect).", "pl": "Dysfunkcja seksualna: spadek libido, zaburzenia erekcji, zmniejszona objętość ejakulatu (około 2–8%, zależne od dawki, najczęstsze działanie niepożądane)." },
    { "hu": "Post-finasteride szindróma (PFS): a leállítás után is perzisztáló szexuális, hangulati és kognitív tünetek (kb. 1–2%, neuroszteroid-mediált, kontroverziális, de növekvő evidencia).", "en": "Post-finasteride syndrome (PFS): sexual, mood and cognitive symptoms persisting even after discontinuation (about 1–2%, neurosteroid-mediated, controversial but growing evidence).", "pl": "Zespół po finasterydzie (PFS): objawy seksualne, nastroju i poznawcze utrzymujące się nawet po odstawieniu (około 1–2%, mediowane neurosteroidami, kontrowersyjne, ale rosnące dowody)." },
    { "hu": "Hangulati zavar: depresszió, szorongás, anhedónia, ritkán öngyilkossági gondolatok (FDA label-figyelmeztetés).", "en": "Mood disturbance: depression, anxiety, anhedonia, rarely suicidal ideation (FDA label warning).", "pl": "Zaburzenia nastroju: depresja, lęk, anhedonia, rzadko myśli samobójcze (ostrzeżenie na etykiecie FDA)." },
    { "hu": "Gynecomastia és emlőfeszülés: a DHT-blokád miatti tesztoszteron→ösztrogén-shift következtében (ritka, de dokumentált; minden új emlőcsomó kivizsgálandó az emlőrák kizárására).", "en": "Gynecomastia and breast tenderness: due to the testosterone→estrogen shift from DHT blockade (rare but documented; any new breast lump must be evaluated to rule out breast cancer).", "pl": "Ginekomastia i tkliwość piersi: w wyniku przesunięcia testosteron→estrogen przy blokadzie DHT (rzadkie, ale udokumentowane; każdy nowy guzek piersi wymaga oceny w celu wykluczenia raka piersi)." },
    { "hu": "PSA-szint kb. 50%-os csökkentése: elfedheti a prosztatarák szűrését, a PSA-érték klinikai értelmezése korrekciót igényel.", "en": "Roughly 50% reduction in PSA level: can mask prostate cancer screening, the PSA value requires correction in clinical interpretation.", "pl": "Obniżenie poziomu PSA o około 50%: może maskować badania przesiewowe raka prostaty, wartość PSA wymaga korekty w interpretacji klinicznej." },
    { "hu": "Kezdeti shedding (telogen-effluvium): a terápia első 4–8 hetében paradox átmeneti fokozott hajhullás jelentkezhet.", "en": "Initial shedding (telogen effluvium): a paradoxical transient increase in hair loss may occur in the first 4–8 weeks of therapy.", "pl": "Początkowe wypadanie (telogen effluvium): paradoksalne przejściowe nasilenie wypadania włosów może wystąpić w pierwszych 4–8 tygodniach terapii." },
    { "hu": "Ritka cholestasis / májenzim-emelkedés és túlérzékenységi reakciók (kiütés, viszketés, angioödéma) izolált esetekben jelentve.", "en": "Rare cholestasis / liver enzyme elevation and hypersensitivity reactions (rash, pruritus, angioedema) reported in isolated cases.", "pl": "Rzadka cholestaza / podwyższenie enzymów wątrobowych oraz reakcje nadwrażliwości (wysypka, świąd, obrzęk naczynioruchowy) zgłaszane w pojedynczych przypadkach." }
  ],
  "contraindications": [
    { "hu": "Terhesség és terhes (vagy potenciálisan teherbe eshető) partner: Pregnancy Category X – a DHT-szuppresszió a magzati férfi külső nemi szervek fejlődési rendellenességét okozhatja. Terhes nő a tablettát NE érintse (különösen törött/morzsolt formában).", "en": "Pregnancy and pregnant (or potentially pregnant) partner: Pregnancy Category X – DHT suppression can cause malformation of the fetal male external genitalia. A pregnant woman must NOT handle the tablets (especially broken/crushed ones).", "pl": "Ciąża i ciężarna (lub mogąca zajść w ciążę) partnerka: kategoria X – supresja DHT może powodować wady rozwojowe zewnętrznych narządów płciowych płodu męskiego. Kobieta w ciąży NIE może dotykać tabletek (zwłaszcza pokruszonych)." },
    { "hu": "Nők (fogamzóképes korú) és gyermekek: nem javallt; teratogén kockázat és hiányzó haszon-igazolás.", "en": "Women (of childbearing potential) and children: not indicated; teratogenic risk and no proven benefit.", "pl": "Kobiety (w wieku rozrodczym) i dzieci: niewskazane; ryzyko teratogenne i brak udowodnionych korzyści." },
    { "hu": "Depresszió vagy más hangulati zavar az anamnézisben: a hangulati mellékhatások és a PFS fokozott kockázata miatt relatív ellenjavallat.", "en": "History of depression or other mood disorder: relative contraindication due to increased risk of mood side effects and PFS.", "pl": "Depresja lub inne zaburzenia nastroju w wywiadzie: względne przeciwwskazanie z powodu zwiększonego ryzyka działań niepożądanych dotyczących nastroju i PFS." },
    { "hu": "Finasteridre vagy más 5α-reduktáz inhibitorra (pl. dutasteride) ismert túlérzékenység.", "en": "Known hypersensitivity to finasteride or other 5α-reductase inhibitors (e.g. dutasteride).", "pl": "Znana nadwrażliwość na finasteryd lub inne inhibitory 5α-reduktazy (np. dutasteryd)." },
    { "hu": "Serdülők (<18 év): a fejlődés alatti 5AR-blokád nem javallt.", "en": "Adolescents (<18 years): 5AR blockade during development is not indicated.", "pl": "Młodzież (<18 lat): blokada 5AR w okresie rozwoju nie jest wskazana." },
    { "hu": "Súlyos májkárosodás: a finasteride a májban (CYP3A4) metabolizálódik, csökkent funkció esetén óvatosság / kontroll szükséges.", "en": "Severe hepatic impairment: finasteride is metabolized in the liver (CYP3A4), caution / monitoring is required with reduced function.", "pl": "Ciężkie zaburzenia czynności wątroby: finasteryd jest metabolizowany w wątrobie (CYP3A4), przy obniżonej czynności wymagana jest ostrożność / monitorowanie." },
    { "hu": "Androgén-inszenzitivitás szindróma (AIS) vagy AR-mutáció családi anamnézise: az androgén-jelátvitel további csökkentése kerülendő.", "en": "Family history of androgen insensitivity syndrome (AIS) or AR mutation: further reduction of androgen signaling should be avoided.", "pl": "Rodzinny wywiad zespołu niewrażliwości na androgeny (AIS) lub mutacji AR: należy unikać dalszego osłabiania sygnalizacji androgenowej." }
  ],
  "name": "Finasteride (Propecia / Proscar)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "Szelektív type-II 5α-reduktáz gátló. FDA-jóváhagyott (Proscar 1992 BPH 5 mg, Propecia 1997 AGA 1 mg). AAS-ban: scalp DHT-szuppresszió genetikailag prediszponált felhasználóknál a hajhullás lassítására. Type-I 5AR nem gátolt.",
  "description": "A Finasteride (Propecia 1 mg, Proscar 5 mg) egy 4-aza-szteroid struktúrájú szelektív type-II 5α-reduktáz inhibitor, amelyet a Merck fejlesztett ki, és 1992-ben kapott FDA-jóváhagyást Proscar 5 mg-ként benign prostatic hyperplasia (BPH) kezelésére, majd 1997-ben Propecia 1 mg-ként androgenetic alopecia (AGA, férfi-mintázatú hajhullás) kezelésére. A Kaufman 1998 (PMID 9821414) 5 éves prospective trial-je dokumentálta, hogy 1 mg/nap Finasteride a férfi-mintázatú hajhullás progresszióját ~83%-ban lassítja, és ~48%-ban regrowtht generál ('vertex' area-ban hatékonyabb mint frontális hairline-on). AAS-kontextusban a Finasteride elsősorban a Testosterone-emelkedés szekunder DHT-konverzióját gátolja (~70% scalp DHT-szuppresszió 1 mg/nap dózison) – genetikailag prediszponált AGA-rizikójú felhasználón a hajhullás-acceleráció mitigálható. **NEM** segít a Tren-aktivációs hajhullás-acceleráción (Trenbolone NEM 5AR-szubsztrát) vagy az Anadrol-on (szintén nem). Type-I 5AR (skin/sebum DHT) **nem** gátolt – itt szükséges Dutasteride dual-inhibitor. WADA listán szerepel a S5 (hormone modulator) kategória alatt – versenysport-rizikós DE klinikai indikációkban TUE (Therapeutic Use Exemption) lehetséges. Post-finasteride szindróma (PFS) kontroverziális ~1-2% incidencia (Irwig 2012, PMID 22366892).",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "Szelektív type-II 5α-reduktáz inhibitor, ~70% scalp DHT-szuppresszió 1 mg/nap"},
    {"label": "Adagolás (AAS hair-loss-prevention)", "value": "1 mg/nap (Propecia) continuous ciklus alatt"},
    {"label": "Felezési idő", "value": "~6 óra parent, pharmakodinamiás hatás 24+ h enzim-gátlás"},
    {"label": "Hatáskezdet", "value": "DHT-csökkenés mérhető 24 óra, hair-stabilization 3-6 hónap"},
    {"label": "Jogi státusz", "value": "FDA + EMA Rx, HU + PL törzskönyvezett, WADA allowed (NEM 5AR-tilalom)"}
  ],
  "mechanism": "A Finasteride 4-aza-szteroid struktúrájú compound, ami a type-II 5α-reduktáz enzimet kompetitíven gátolja (Ki ~5 nM). Az 5α-reduktáz a testosterone-t dihydrotestosterone-né (DHT) konvertálja – a DHT-érzékeny szövetekben (prosztata, scalp, sebumtermelő szebáceus mirigyek, libidó-circuit-neurok) a testosterone-t (~10-30x kötés-affinitással) az AR-nál erősebben aktiválja. Két izoform 5AR létezik: type-I (skin/sebumtermelés-domináns) és type-II (prosztata + scalp + hajhagyma-domináns). Finasteride csak type-II-t gátolja → scalp ~70% DHT-szuppresszió, prosztata ~85% DHT-szuppresszió, DE skin/sebum csak ~30% (Type-I-domináns). 5 mg/nap dose-on hasonló DHT-szuppresszió, BPH-indikációban használt (vs 1 mg/nap Propecia-dose AGA-ra). A hatás reverzibilis a leállítás után: DHT 2 hét alatt visszatér baseline-re. WADA-listán S5 hormone modulator – competition-tilos DE klinikai TUE-vel engedélyezett.",
  "legalStatus": "USA: FDA-jóváhagyott Proscar 1992 BPH (5 mg), Propecia 1997 AGA (1 mg). EU: EMA-jóváhagyott. HU: törzskönyvezett (Propecia, Proscar Rx). PL: törzskönyvezett. WADA: S5 hormone modulator – banned in competition (TUE lehetséges klinikai indikációkban), out-of-competition allowed.",
  "onsetTime": "DHT-csökkenés 24 óra, hair-stabilization 3-6 hónap",
  "halfLife": "~6 óra parent, pharmakodinamiás hatás 24+ h",
  "halfLifeActive": "~6 óra (parent), DE 24+ óra enzim-gátlás visszafordítása új-szintézistől függ",
  "interactionsWith": ["dutasteride", "ru58841", "testosterone-info", "anavar-info"],
  "aromatization": "Nem aromatizál – kompetitív type-II 5α-reduktáz inhibitor; a DHT-konverziót gátolja, az ösztrogén-axis-t NEM érinti direktely (de a Test-emelkedés szekunder E2-emelkedéshez vezethet).",
  "hepatotoxicity": "Alacsony – non-steroidal hat-szerkezet DE 4-aza-szteroid. Ritka cholestasis-case-reportált (FDA Propecia label). Post-finasteride szindróma (PFS) – kontroverziális neurosteroid-mediated mood/sexual-dysfunction long-term sequela ~1-2% incidencia (Irwig 2012 PMID 22366892).",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS, 5AR-inhibitor)",
  "bindingAffinity": "Type-II 5AR Ki ~5 nM (kompetitív), Type-I 5AR ~100x kevésbé hatékony. AR-receptor minimal binding.",
  "detectionWindow": "Korábban listán volt 5AR-masking-agent-ként; 2009 óta WADA-listáról levéve a kompetitív sportokban – ma allowed.",
  "benefits": [
    "AAS-kontextus: scalp DHT ~70%-os szuppresszió → genetikailag prediszponált AGA-acceleráció mitigation",
    "Kaufman 1998 5-éves trial: ~83% AGA-progresszió-lassulás, ~48% regrowth vertex",
    "Reverzibilis (DHT 2 hét alatt visszatér)",
    "FDA + EMA Rx pharma-grade globally available",
    "Olcsó (~€10-25/box generic Propecia 1 mg)"
  ],
  "quickStart": [
    "Pre-treatment baseline bloodwork: total/free Test, DHT serum, E2, lipid panel",
    "Indítás: 1 mg/nap (Propecia) reggel, étkezés indifferens",
    "Standard ciklus-protokoll: continuous 1 mg/nap a teljes AAS-ciklus + recovery alatt",
    "BPH-indikáció (NEM AAS hair-loss): 5 mg/nap Proscar, AAS-context-en ez túl magas",
    "Re-test bloodwork 4-6 hét után: DHT serum ~70%-os csökkenés confirmation",
    "Trenbolone-only stack: Finasteride NEM segít (Tren NEM 5AR-szubsztrát) – Tren-hair-loss niche-mechanismus"
  ],
  "expectations": [
    {"label": "1. hét", "body": "DHT serum csökkenés mérhető (~50-70%). Hair-loss-acceleráció mérséklődik 1-2 hét alatt – DE meglévő hullott haj NEM regrow azonnal."},
    {"label": "1-3. hónap", "body": "Hair-shedding stabilizálódik. 'Shedding-phase' lehet az első hetekben (telogen-effluvium release, paradox-növekvő hullás kezdetben – passes by hét 4-8)."},
    {"label": "3-6. hónap", "body": "Regrowth observable (vertex area dominánsan). Stable hair-line establishment. Test-emelkedés szekunder szérum-E2-emelkedéshez vezethet (DHT-blockad → konverziós pathway-shift)."},
    {"label": "12. hónap", "body": "Maximum effect plateau. Kaufman 1998 5-éves trial: ~80% sustained progression-prevention. Ha leállítás → DHT 2 hét alatt visszatér, hair-loss-acceleráció gyorsan visszatér."}
  ],
  "quality": {
    "pure": [
      "Merck Propecia 1 mg blister, Rx pharma-grade (US + EU)",
      "Merck Proscar 5 mg (BPH-indikáció, NEM AAS hair-loss)",
      "Generic finasteride 1 mg / 5 mg (Sandoz, Teva, Ratiopharm – EU)",
      "Indiai generikum (Sun Pharma Finpecia 1 mg, Cipla Finax)",
      "UGL liquid finasteride: ritka, pharma-grade Rx alternative ajánlott"
    ],
    "caution": [
      "Sexual side-effects: libidó-csökkenés, erectile dysfunction (~3-8% Propecia-felhasználón), ejakuláció-volume-csökkenés – leggyakoribb dose-related side-effect",
      "Hangulati változás: depressziós tüneti rizikó dokumentált (Singh 2014); kontraindikált depresszió-history-felhasználón",
      "PFS (post-finasteride szindróma): ~1-2% incidencia long-term, persistent sexual + cognitive + mood-dysfunction Finasteride-leállítás után is – kontroverziális, neurosteroid-mediated (Irwig 2012)",
      "PSA-screening interpretation: Finasteride a PSA-szintet ~50%-kal csökkenti, prostate cancer-screen-en confounder",
      "Cytochrome-interakciók: CYP3A4 metabolizmus, kis interakció-rizikó"
    ],
    "avoid": [
      "Pregnant partner / breastfeeding (Pregnancy Category X – magzati férfi-fejlődés-zavar testosteron-DHT-deprivation miatt, NE adagolja terhes nő közelében)",
      "Depresszió-history (mood-dysfunction-rizikó)",
      "AR-mutáció / AIS (Androgen Insensitivity Syndrome) családi anamnézis",
      "Adolescent felhasználó (<18 év, ne kezdje meg a 5AR-blokádot fejlődés alatt)",
      "Tren-only stack (NEM hat 5AR-szubsztrátra)"
    ]
  },
  "interactions": [
    "Dutasteride: NEM kombinálható (overlap-mechanism, additive-side-effect)",
    "Testosterone-base AAS-ciklusok: standard hair-loss-prevention",
    "Trenbolone/Anadrol stack: Finasteride NEM segít (NEM 5AR-szubsztrát)",
    "Saw palmetto (herbal 5AR-inhibitor): kombinálható mild-synergia, DE PFS-szerű side-effect-rizikó halmozódik",
    "PDE5-inhibitorok (sildenafil, tadalafil): ED-management Finasteride-sexual-side-effect-en első-vonalbeli adjuváns"
  ],
  "studies": [
    {"title": "Viable terminal scalp hair follicles constitute a necessary and sufficient biological end-organ that conditions clinical efficacy of finasteride 1mg.", "authors": "Van Neste D", "journal": "Skin Res Technol", "pmid": "31206839"},
    {"title": "Persistent Sexual and Psychological Symptoms After Finasteride Discontinuation: A Cross-Sectional Observational Study.", "authors": "Jędrzejczyk P, Ząbkowski T, Ratajski J", "journal": "J Clin Med", "pmid": "42074750"},
    {"title": "5-Alpha reductase inhibitors in androgenetic alopecia: Shifting paradigms, current concepts, comparative efficacy, and safety.", "authors": "Dhurat R, Sharma A, Rudnicka L, Kanti V, Vañó-Galván S, Pirmez R, Sinclair R, Doolan B, Tosti A", "journal": "Dermatol Ther", "pmid": "32279398"},
    {"title": "Long-term (5-year) multinational experience with finasteride 1 mg in the treatment of men with androgenetic alopecia", "authors": "Kaufman KD, Rotonda J, Shah AK, Meehan AG.", "journal": "Eur J Dermatol. 2008;18(4):400-406.", "pmid": "18573713"}
  ],
  "faq": [
    {"q": "Mit védi a Finasteride AAS-mellett?", "a": "A Finasteride a genetikailag prediszponált AGA (androgenetic alopecia) **acceleráció-mitigation**-jét védi, NEM teljes prevention. Mechanizmus: AAS-ciklus exogén testosterone-t emel → szekunder scalp-DHT-emelkedés → szuszceptibilis hairfollikulus-receptorokon AGA-acceleráció. Finasteride a scalp-DHT-konverziót ~70%-ban gátolja → AGA-progresszió lassul (Kaufman 1998: ~83% sustained progression-prevention 5 év alatt). FONTOS: genetikailag NEM prediszponált felhasználón (családi nincs AGA, no thinning baseline) Finasteride NEM szükséges – preventíven védeni nincs amit. Egy DUSI-Norwood scale 1-2 baseline a 25-30 év életkorban előzetes felmérést igényel – ha Norwood 3+ progresszió a ciklus alatt, Finasteride 1 mg/nap indítás indokolt."},
    {"q": "Trenbolone és Anadrol – Finasteride hat-e?", "a": "**NEM**. A Finasteride csak a testosterone → DHT konverziót gátolja (5AR-szubsztrát). A Trenbolone már strukturálisan **NEM** 5AR-szubsztrát – közvetlenül kötődik AR-hoz, és a Tren-induced hair-loss más mechanizmuson keresztül (direct AR-stimulation + lokális gyulladás-pathway). Anadrol (Oxymetholone) szintén **NEM** 5AR-szubsztrát – szintén közvetlen AR-affinity. Tren/Anadrol-only stack-en a Finasteride **NEM segít** – a hair-loss-acceleráció ezeken niche-mechanismus. Topikális minoxidil (5%) lehet adjuváns, vagy Tren-stack-elkerülés genetikailag prediszponált felhasználón."},
    {"q": "Post-finasteride szindróma (PFS) – mennyire valós?", "a": "Kontroverziális, DE növekvő evidence. Irwig 2012 (PMID 22366892) prospective study 71 fiatal férfin Finasteride-induced persistent sexual side effects-et dokumentált – a tanulmány a PFS első nagy klinikai dokumentációja. Mechanizmus: neurosteroid (allopregnanolone, 3α-androstanediol) pathway-disrupció – a 5AR a brain-szteroid-szintézisben is részt vesz, a chronic-gátlás GABAergic-és-serotonin-pathway-changes-eket okozhat. Incidencia: ~1-2% epidemiologic studies-ben, DE underreporting valószínű. Symptomák Finasteride-leállítás után 6-12 hónappal is megmaradhatnak – persistent sexual dysfunction, depresszió, anhedonia, cognitive 'fog'. **Risk-mitigation**: pre-treatment depresszió-history-screen, alacsony-dose start (0.5 mg minden 2. nap), bloodwork-baseline neurosteroid-profile (DHEA, allopregnanolone-monitor), ha symptom-onset → AZONNALI leállítás (NEM dose-csökkentés)."},
    {"q": "Sexual side effects reverzibilisek?", "a": "Általában IGEN – Finasteride-leállítás után 6-12 hét alatt a libidó és erectile-quality visszatér az emberek ~95-98%-ánál. A reverzibilitás time-frame: DHT 2 hét alatt baseline-re, neurosteroid-effects ~6-12 hét, brain-pathway-recovery 3-6 hónap. PFS-éretetelnél (~1-2% felhasználó) a side-effect persistent – sexual + mood-dysfunction Finasteride-leállítás után IS megmarad, a brain-neurosteroid-pathway-disrupció rebound-recovery hiányzik. Risk-mitigation: pre-treatment baseline-aldatozás (libido-baseline self-rating, erectile-quality IIEF-5-score), monthly self-monitor; ha symptom-onset → AZONNALI leállítás, **NEM** dose-csökkentés (a brain-pathway-stabilization NEM reagál part-dose-ra)."},
    {"q": "Topical finasteride - jobb választás?", "a": "Emerging research-emphasized alternative – topical Finasteride 0.25%-1% solution daily applied to scalp, ~70% scalp DHT-suppression hasonlóan az 1 mg orális-hez, DE szignifikánsan alacsonyabb sysztemikus exposure (~10-15% systemic absorption vs 100% orális). Predikció: PFS-rizikó alacsonyabb, sexual side-effects ritkábbak. Kontra: compounded only (NINCS FDA-jóváhagyás), drágább (~€100-200/hónap UGL/compounding pharmacy), application-compliance kompromisszum (napi scalp-application). Modern AGA-clinics emerging trend ajánlja topical-elsőre. AAS-kontextusban: ha PFS-rizikó-averse felhasználó (depresszió-history, sexual-emphasis), topical worth exploring."}
  ],
  "related": ["dutasteride", "ru58841", "testosterone-info", "anavar-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 0.5, "medium": 1, "high": 1},
    "unit": "mg / nap (orális, étkezés indifferens)",
    "note": "Standard AAS hair-loss-prevention: 1 mg/nap (Propecia) continuous a teljes ciklus alatt. PFS-rizikó-averse felhasználó: 0.5 mg minden 2. nap (alacsony-dose alternative). NEM Tren-only / Anadrol-only stack-en (NEM hat). Topical 0.25-1% solution AAS-niche alternative (compounded, sysztemikus side-effect alacsonyabb)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Finasteride-indítás előtt",
      "timing": "AAS-ciklus indítás vagy AGA-acceleráció-onset",
      "markers": "Total Testosterone, Free Testosterone, DHT serum (baseline confirm efficacy-target), E2, SHBG, lipid panel, ALT/AST, depresszió-screen (PHQ-9 baseline), IIEF-5 erectile-quality baseline.",
      "purpose": "Baseline + side-effect-rizikó-stratification. Pre-treatment Norwood-scale photo + monthly photos hair-progression tracking."
    },
    "midCycle": {
      "label": "Finasteride 4-6. hét",
      "timing": "Finasteride-indítás +4-6 hét",
      "markers": "DHT serum (~70% csökkenés confirm), Total Test (emelkedés várt), E2 (szekunder rise), IIEF-5 re-score (sexual-monitor), PHQ-9 (mood-monitor).",
      "purpose": "Efficacy + side-effect monitor. Ha DHT-csökkenés <50% → compliance check; ha sexual/mood-side effect → dose-csökkentés (0.5 mg minden 2. nap) vagy leállítás."
    },
    "postCycle": {
      "label": "Finasteride leállítás",
      "timing": "Utolsó dose +2-4 hét (recovery monitor)",
      "markers": "DHT serum (baseline-recovery), Total Test, E2, IIEF-5, PHQ-9.",
      "purpose": "Confirm: DHT visszatér baseline-re 2 hét alatt. Sexual + mood-side-effect recovery 6-12 hét alatt – ha persistent, PFS-screen."
    },
    "cruise": {
      "label": "Chronic AAS-cruise + Finasteride continuous",
      "timing": "1 mg/nap continuous",
      "markers": "Évente: DHT, Test, lipid panel, IIEF-5, PHQ-9. PSA-screen (Finasteride PSA-szintet 50%-kal csökkenti – prostate-cancer-screen-interpretation differential).",
      "purpose": "Chronic AAS-cruise hair-loss-prevention monitor + PFS-rizikó-monitor."
    }
  }
}
