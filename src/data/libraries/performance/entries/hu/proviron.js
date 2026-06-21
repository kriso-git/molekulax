// Bayer Proviron-25 Rx (DE, AT, PL). Sources: Bayer Proviron SmPC (EMA),
// Nieschlag-Behre 2012 "Testosterone: Action, Deficiency, Substitution" (4th ed.),
// Pope-Kanayama 2014 PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599,
// Mauss 1984 PMID 6442150 (mesterolone monograph).

export default {
  "id": "proviron",
  "sideEffects": [
    { "hu": "Androgén mellékhatások: aknÉ, zsíros bőr, fokozott testszőrzet; mivel a mesterolon DHT-strukturális analóg, az androgén terhelés erős.", "en": "Androgenic effects: acne, oily skin, increased body hair; as mesterolone is a DHT-structural analog, the androgenic load is strong.", "pl": "Efekty androgenne: trądzik, przetłuszczająca się skóra, nadmierne owłosienie; mesterolon jako analog strukturalny DHT daje silne obciążenie androgenne." },
    { "hu": "Androgenetikus hajhullás gyorsulása genetikailag érzékenyeknél; a finaszterid NEM véd, mert a mesterolon már redukált DHT-analóg (nem 5α-reduktáz szubsztrát).", "en": "Acceleration of androgenetic hair loss in genetically predisposed users; finasteride does NOT protect, because mesterolone is an already-reduced DHT analog (not a 5α-reductase substrate).", "pl": "Przyspieszenie łysienia androgenowego u osób predysponowanych genetycznie; finasteryd NIE chroni, bo mesterolon to już zredukowany analog DHT (nie jest substratem 5α-reduktazy)." },
    { "hu": "Virilizáció nőknél: mély hang, hirsutizmus, klitorisz-megnagyobbodás, menstruációs zavar; az alacsony anabolikus/magas androgén arány miatt a virilizációs kockázat kis dózisnál is jelentős és részben visszafordíthatatlan.", "en": "Virilization in women: voice deepening, hirsutism, clitoral enlargement, menstrual disturbance; due to the low-anabolic/high-androgenic ratio the virilization risk is significant even at low doses and partly irreversible.", "pl": "Wirylizacja u kobiet: obniżenie głosu, hirsutyzm, przerost łechtaczki, zaburzenia miesiączki; przez niski stosunek anaboliczny/wysoki androgenny ryzyko wirylizacji jest istotne nawet przy małych dawkach i częściowo nieodwracalne." },
    { "hu": "Kedvezőtlen lipidprofil: HDL-koleszterin csökkenése (jellemzően ~10-15%), ami orális androgénként az ateroszklerózis-kockázatot emeli tartós használatnál.", "en": "Adverse lipid profile: drop in HDL cholesterol (typically ~10-15%), which as an oral androgen raises atherosclerosis risk with prolonged use.", "pl": "Niekorzystny profil lipidowy: spadek cholesterolu HDL (zwykle ~10-15%), co jako androgen doustny zwiększa ryzyko miażdżycy przy długotrwałym stosowaniu." },
    { "hu": "Prosztata-stimuláció: a DHT-analóg közvetlenül serkenti a prosztata szövetét, ami benignus prosztata-hiperplázia tüneteit (vizelési nehézség) súlyosbíthatja és a PSA-t emelheti, főleg 40 év felett.", "en": "Prostate stimulation: the DHT analog directly drives prostate tissue, which can worsen benign prostatic hyperplasia symptoms (urinary difficulty) and raise PSA, especially over age 40.", "pl": "Stymulacja prostaty: analog DHT bezpośrednio pobudza tkankę prostaty, co może nasilać objawy łagodnego rozrostu prostaty (trudności z oddawaniem moczu) i podnosić PSA, zwłaszcza po 40. roku życia." },
    { "hu": "HPTA-szuppresszió: önmagában enyhe-mérsékelt natív tesztoszteron- és spermatogenezis-gátlás; supraphysiológiás dózisnál vagy AAS-stack részeként a HPTA-szuppresszió kifejezett.", "en": "HPTA suppression: on its own a mild-to-moderate suppression of native testosterone and spermatogenesis; at supraphysiological doses or as part of an AAS stack the HPTA suppression is pronounced.", "pl": "Supresja HPTA: samodzielnie łagodne do umiarkowanego tłumienie własnego testosteronu i spermatogenezy; przy dawkach suprafizjologicznych lub w stosie AAS supresja HPTA jest wyraźna." },
    { "hu": "Tartós, kezelendő erekció (priapizmus) az androgén túlstimuláció jeleként előfordulhat; sürgős orvosi ellátást igényel.", "en": "Prolonged, painful erection (priapism) can occur as a sign of androgenic overstimulation; it requires urgent medical care.", "pl": "Przedłużony, bolesny wzwód (priapizm) może wystąpić jako objaw nadmiernej stymulacji androgennej; wymaga pilnej pomocy lekarskiej." },
    { "hu": "Antikoaguláns-interakció: a warfarin véralvadásgátló hatását fokozhatja, ami emelkedett vérzéskockázathoz vezethet (INR-monitorozás szükséges).", "en": "Anticoagulant interaction: it can potentiate the blood-thinning effect of warfarin, leading to increased bleeding risk (INR monitoring required).", "pl": "Interakcja z antykoagulantami: może nasilać działanie przeciwzakrzepowe warfaryny, zwiększając ryzyko krwawienia (konieczne monitorowanie INR)." }
  ],
  "contraindications": [
    { "hu": "Prosztatakarcinóma vagy igazolt/gyanított emlőkarcinóma férfiaknál: androgén-dependens daganatok, a mesterolon abszolút kontraindikált (Bayer SmPC).", "en": "Prostate carcinoma or known/suspected breast carcinoma in men: androgen-dependent tumors, mesterolone is absolutely contraindicated (Bayer SmPC).", "pl": "Rak prostaty lub potwierdzony/podejrzewany rak piersi u mężczyzn: nowotwory androgenozależne, mesterolon jest bezwzględnie przeciwwskazany (Bayer SmPC)." },
    { "hu": "Terhesség és szoptatás: androgén hatása a magzat virilizációját okozhatja (különösen leánymagzat külső nemi szerveinek maszkulinizációja); abszolút kontraindikáció.", "en": "Pregnancy and breastfeeding: the androgenic action can virilize the fetus (notably masculinization of a female fetus's external genitalia); absolute contraindication.", "pl": "Ciąża i karmienie piersią: działanie androgenne może wywołać wirylizację płodu (zwłaszcza maskulinizację zewnętrznych narządów płciowych płodu żeńskiego); bezwzględne przeciwwskazanie." },
    { "hu": "Nők, esztétikai/teljesítményfokozó céllal: az alacsony anabolikus/magas androgén arány miatt a virilizációs kockázat aránytalanul nagy a haszonhoz képest, részben visszafordíthatatlan.", "en": "Women using it for aesthetic/performance goals: the low-anabolic/high-androgenic ratio makes the virilization risk disproportionate to the benefit, and partly irreversible.", "pl": "Kobiety stosujące go w celach estetycznych/sportowych: niski stosunek anaboliczny/wysoki androgenny sprawia, że ryzyko wirylizacji jest nieproporcjonalne do korzyści i częściowo nieodwracalne." },
    { "hu": "Benignus prosztata-hiperplázia tüneteivel (vizelési obstrukció): a DHT-analóg androgén tovább stimulálja a prosztatát és súlyosbíthatja a tüneteket.", "en": "Symptomatic benign prostatic hyperplasia (urinary obstruction): the DHT-analog androgen further stimulates the prostate and can worsen symptoms.", "pl": "Objawowy łagodny rozrost prostaty (utrudnienie oddawania moczu): androgen będący analogiem DHT dodatkowo pobudza prostatę i może nasilać objawy." },
    { "hu": "Androgenetikus alopecia családi/egyéni anamnézise: a mesterolon közvetlenül gyorsítja a hajhullást és a finaszterid nem nyújt védelmet.", "en": "Personal/family history of androgenetic alopecia: mesterolone directly accelerates hair loss and finasteride offers no protection.", "pl": "Osobista/rodzinna historia łysienia androgenowego: mesterolon bezpośrednio przyspiesza wypadanie włosów, a finasteryd nie chroni." },
    { "hu": "Meglévő kedvezőtlen lipidprofil / kardiovaszkuláris kockázat (dyslipidaemia, koszorúér-betegség): az HDL-csökkenés tovább rontja a kockázatot, fokozott elővigyázatosság/ellenjavallat.", "en": "Pre-existing adverse lipids / cardiovascular risk (dyslipidemia, coronary disease): the HDL drop further worsens the risk, warranting caution/contraindication.", "pl": "Istniejący niekorzystny profil lipidowy / ryzyko sercowo-naczyniowe (dyslipidemia, choroba wieńcowa): spadek HDL dodatkowo pogarsza ryzyko, co uzasadnia ostrożność/przeciwwskazanie." },
    { "hu": "Súlyos máj- vagy vesekárosodás: bár a mesterolon nem 17α-alkilált és hepatotoxicitása alacsony, fennálló szervi elégtelenségnél a hormon-metabolizmus és folyadékretenció miatt kerülendő.", "en": "Severe hepatic or renal impairment: although mesterolone is not 17α-alkylated and has low hepatotoxicity, it should be avoided with existing organ failure due to altered hormone metabolism and fluid retention.", "pl": "Ciężka niewydolność wątroby lub nerek: choć mesterolon nie jest 17α-alkilowany i ma niską hepatotoksyczność, należy go unikać przy istniejącej niewydolności narządowej ze względu na zaburzony metabolizm hormonów i retencję płynów." }
  ],
  "name": "Proviron (Mesterolone)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Mesterolone, 1α-metil-DHT orális androgén Bayer Rx (Proviron-25, DE/AT/PL piacon törzskönyvezett). NEM 17α-alkilált → alacsony hepatotoxicitás. AAS-ciklus alatt SHBG-szuppresszor és \"AI-mimikker\" adjunkt; standalone bulker NEM.",
  "description": "A Proviron (Mesterolone) egy 1α-metil-dihydrotesztoszteron-származék orális androgén, Schering AG 1966-ban szintetizálta és Proviron márkanéven (Bayer 2006 óta) forgalmazza. Bayer-Rx Németországban, Ausztriában, Lengyelországban (Proviron-25, 25 mg tabletta) – eredeti klinikai indikációk: férfi szubfertilitás, késleltett pubertás, hipogonadizmus, libido-csökkenés idős férfiaknál. Anabolikus:androgén arány ~100:30-40 (gyenge anabolikus, mérsékelt androgén). NEM 17α-alkilált (csak 1α-metil) → alacsony hepatotoxicitás. NEM aromatizál (CYP19 NEM szubsztrát). MAGAS SHBG-affinitás → \"AI-mimikker\" effekt: a Proviron a SHBG-hez kötve csökkenti a SHBG-T fraction-t, így a szabad-T (és szabad-E2) emelkedik a stack-társ Test mellett. Bodybuilding kontextusban tipikusan AAS-ciklus adjunkt (25-50 mg/nap), NEM standalone bulker. WADA tiltott egész évben.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "AR-agonista (gyenge) + SHBG-szuppresszor + enyhe AI"},
    {"label": "Anabolikus:Androgén", "value": "100:30-40"},
    {"label": "Felezési idő", "value": "12-13 óra"},
    {"label": "Hatáskezdet", "value": "1-2 óra (orális)"},
    {"label": "Jogi státusz", "value": "Bayer Rx (DE/AT/PL), WADA tiltott"}
  ],
  "mechanism": "1α-metil-dihydrotesztoszteron AR-agonista. Az 1α-metil-csoport (Δ1, NEM 17α!) ad orális stabilitást a hepatikus first-pass-rezisztenciával – DE alacsonyabb mértékben mint a 17α-metil. NEM CYP19 szubsztrát → NEM aromatizál. NEM 5α-reduktáz szubsztrát (már redukált). HÁROM klinikailag releváns effekt: (1) gyenge direkt AR-agonista aktivitás (önmagában minimális izomtömeg-építő); (2) magas SHBG-affinitás → SHBG-kötött tesztoszteront verseng le, indirekt szabad-T-emelkedést indukál stack-társ Test mellett; (3) enyhe aromatáz-inhibitor aktivitás → csökkenti az E2-emelkedést Test-stack alatt. Ezért tipikusan 25-50 mg/nap dózisban AAS-ciklus adjunkt szerepre használt, NEM standalone bulker.",
  "legalStatus": "DE/AT/PL: Bayer Proviron-25 Rx-szer (25 mg tabletta). HU: nem törzskönyvezett (import-Rx ritkán). USA: nem FDA-jóváhagyott, csak underground. WADA tiltott egész évben (S1.1.a). Lengyel piacon Proviron-25 elérhető lengyel receptre.",
  "onsetTime": "1-2 h (orális)",
  "halfLife": "12-13 h",
  "halfLifeActive": "12-13 h",
  "interactionsWith": ["testosterone", "anastrozole", "tamoxifen", "warfarin"],
  "aromatization": "Nem – 1α-metil-DHT struktúra, NEM CYP19 szubsztrát; klinikailag enyhe AI-aktivitást is mutat magas SHBG-affinitása révén (Nieschlag-Behre 2012 testosterone monograph, Pope-Kanayama 2014 PMID 24423981)",
  "hepatotoxicity": "Alacsony – 1α-metil-csoport (NEM 17α!) gyenge hepatikus first-pass-stressz; klinikai ALT/AST emelkedés ritkán dokumentált, jóval enyhébb mint az Anavar vagy Dianabol. Hosszú távú használat (Bayer SmPC tartós Rx-indikáció) hepatikus profil viszonylag biztonságos (Hartgens-Kuipers 2004 PMID 15233599)",
  "wadaStatus": "banned",
  "androgenicRatio": "100:30-40",
  "bindingAffinity": "AR-affinitás gyenge (~10% testosterone-hoz képest). MAGAS SHBG-affinitás (DHT-strukturális analóg) → SHBG-kötött tesztoszteront indirekt módon szabaddá teszi.",
  "detectionWindow": "Mesterolone-metabolitok (1α-metil-5α-androsztán-3-on metabolitcsalád) vizeletből 4-5 hét (Schänzer 1996 GC-MS módszerek). WADA-akkreditált.",
  "benefits": [
    "Szabad-tesztoszteron indirekt emelkedés (SHBG-elfoglalás révén) AAS-ciklus alatt",
    "Enyhe AI-effekt → adjunkt-Anastrozol-igény csökkentés Test-stack mellett",
    "Libido és erektilis funkció javulása (klinikai Bayer SmPC indikáció)",
    "Alacsony hepatotoxicitás – hosszú távú alkalmazás biztonsági profilja kedvezőbb",
    "NEM aromatizál → nincs gynecomastia-kockázat önmagában"
  ],
  "quickStart": [
    "Standalone bulker NEM – Proviron mindig adjunkt szerepre stack-társ AAS mellett",
    "Tipikus dózis 25-50 mg/nap (1-2 tabletta), 6-12 hét",
    "DHT-strukturális analóg → hajhullás-acceleráció androgenetikus alopecia esetén",
    "Lipid panel monitor (HDL csökkenhet, mérsékelten)",
    "Klinikai libido-boost effekt – Bayer SmPC alapján TRT-adjunkt indikáció valós"
  ],
  "expectations": [
    {"label": "Első hét", "body": "Onset 1-2 h, akut hatás minimális. Subjektív libido-növekedés és szabad-T-érzés (\"jobb hangulat\") gyakori 3-5 nap után."},
    {"label": "3-4. hét", "body": "Stack-társ Test mellett szabad-T-emelkedés markáns, E2-emelkedés mérsékelt (Proviron-AI-effekt). Esztétikai \"hardening\" enyhe (Proviron önmagában NEM hardening szteroid)."},
    {"label": "8-12. hét vége", "body": "Maximum adjunkt effekt. Lipid panel HDL ~10-15% csökkenés várható. HPTA-szuppresszió mérsékelt, ha standalone (önmagában a Proviron NEM teljes HPTA-szuppresszor)."}
  ],
  "quality": {
    "pure": [
      "Bayer Proviron-25 oryginalna Rx tabletka, 25 mg (DE/AT/PL piacon törzskönyvezett)",
      "UGL tabletta: HPLC-tesztelt forrás kötelező, ritkábban hamisított mint az Anavar/Primobolan (alacsonyabb piaci érték)"
    ],
    "caution": [
      "Önmagában NEM bulker – felhasználói várakozás-realitás gap a leggyakoribb frusztráció-forrás",
      "Hajhullás-acceleráció androgenetikus alopecia esetén (DHT-strukturális analóg)",
      "Lipid-zavar: HDL csökkenés (mérsékelt)",
      "Hangmélyülés és hirsutizmus nőknél (alacsonyabb dózisnál is virilizációs kockázat)"
    ],
    "avoid": [
      "Androgenetikus alopecia családi anamnézis",
      "Prosztata-hipertrófia, prosztatakarcinóma (DHT-analóg)",
      "Női felhasználás (alacsony anabolikus, magas virilizáció-kockázat-arány esztétikailag nem éri meg)",
      "Bulking/tömegnövelő cél – Proviron NEM standalone bulker"
    ]
  },
  "interactions": [
    "Testosterone-base: standard stack-páros, indirekt szabad-T-emelkedés SHBG-elfoglalás révén",
    "Anastrozole (AI): kombinálható, Proviron enyhe AI-effektje miatt alacsonyabb Anastrozole-dózis elegendő",
    "Tamoxifen (SERM): kombinálható gyno-megelőzésre stack-társ Test-aromatizáló AAS mellett",
    "Warfarin: antikoaguláns hatás fokozódhat (mérsékelten), INR monitor"
  ],
  "studies": [
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15248788"},
    {"title": "Androgen treatment without inhibiting effect on hypophysis and male gonads. Biochemical and morphological studies after treatment with Mesterolone", "authors": "Petry R, Rausch-Stroomann JG, Hienz HA, Senge T, Mauss J.", "journal": "Acta Endocrinol (Copenh). 1968;59(3):497-507.", "pmid": "4880965"},
    {"title": "Double-blind cross over treatment with mesterolone and placebo of subfertile oligozoospermic men value of testicular biopsy", "authors": "Aafjes JH, van der Vijver JC, Brugman FW, Schenck PE.", "journal": "Andrologia. 1983;15 Spec No:531-5.", "pmid": "6364886"},
    {"title": "Bayer Proviron-25 SmPC (Summary of Product Characteristics)", "authors": "Bayer AG", "journal": "EMA / German Federal Institute for Drugs (BfArM)", "pmid": null}
  ],
  "faq": [
    {"q": "Igaz, hogy a Proviron \"AI-mimikker\"?", "a": "Részben. A magas SHBG-affinitása csökkenti a SHBG-kötött tesztoszteron-frakciót, ami közvetve csökkenti a SHBG-kötött ösztradiol-szintet is. PLUS direkt, gyenge aromatáz-gátló aktivitása is van. DE az effekt NEM olyan erős mint az Anastrozol vagy Letrozol – magas Test-dózis mellett (>500 mg/hét) a Proviron önmagában NEM elegendő E2-kontrollra, csak Anastrozole-dózis-csökkentésre."},
    {"q": "Miért NEM jó standalone bulker?", "a": "Az anabolikus aktivitás gyenge (~100 vs 320 Anavar vs 400 Superdrol). Standalone Proviron-ciklus után 25-50 mg/nap 8 héten át tipikusan 1-2 kg lean mass-gyarapodás várható (Anavar 4-5 kg, Dianabol 8-10 kg) – kifejezetten alacsony. Proviron mindig adjunkt szerepre, NEM bulker."},
    {"q": "Lengyel piacon legálisan elérhető?", "a": "Igen, Bayer Proviron-25 (25 mg tabletta) lengyel piacon Rx-szer, lengyel orvos által felírható male infertility, hipogonadizmus, libido-csökkenés indikációkra. HU-piacon nem törzskönyvezett, magyar receptre nem írható fel – de import-Rx ritkán beszerezhető."},
    {"q": "Hajhullás-kockázat?", "a": "Mérsékelt-magas, ha androgenetikus alopecia genetikai prediszpozíció van. A Proviron 1α-metil-DHT-strukturális analóg, ami a scalp 5α-reduktáz-bypass-szal közvetlenül aktiválja a hajtüsző AR-jét. Finasteride NEM véd (a Proviron már redukált). Egyetlen védelem: ha genetikailag érzékeny vagy, NE használj DHT-derivátum AAS-t."},
    {"q": "Bayer Proviron biztonságos hosszú távon?", "a": "Bayer SmPC alapján male infertility és hipogonadizmus indikációkra hosszú távú (12+ hónap) folyamatos használat dokumentáltan biztonságos megfelelő monitoringgal (lipid, ALT/AST, PSA). DE a bodybuilding off-label supraphysiológiás dózisok (100+ mg/nap) NEM tartoznak ide – a Bayer terápiás 25-75 mg/nap dózissávban értelmezhető a biztonság."}
  ],
  "related": ["masteron", "primobolan", "anavar-info", "testosterone-info", "winstrol-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 25, "medium": 50, "high": 75},
    "unit": "mg/nap (orális, 1-2x osztva)",
    "note": "Adjunkt-dózis 25-50 mg/nap, max 75 mg/nap. Tipikusan 6-12 hét stack-társ Test-szel. TUDCA NEM kötelező (alacsony hepatotoxicitás). Lipid monitor + PSA (30 év felett) ajánlott. PCT csak ha standalone használt (Test-stack PCT-je elegendő)."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hormon-panel: Total T, Free T, E2, LH, FSH, SHBG (baseline kritikus a Proviron-mechanizmus értékeléséhez), Prolaktin. Lipid panel (LDL/HDL/TG). Hepatikus: ALT/AST/GGT. PSA (30 év felett).",
      "purpose": "SHBG-baseline kritikus: a Proviron-effekt értékeléséhez 4-6 hét után újra mérni kell. Lipid-baseline a HDL-csökkenés trend-detektálásához."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "4-6. hetén, ciklus felénél",
      "markers": "Total T, Free T (a Proviron-effekt fő marker), SHBG (csökkenés várható), E2, lipid panel (HDL), hepatikus (ALT/AST <2x normál Proviron-only ciklusnál várható).",
      "purpose": "Free-T-emelkedés a Proviron-aktivitás indikátora (SHBG-csökkenés-driven). E2 a stack-társ Test alapján. ALT/AST emelkedés enyhe – ha >3x normál, gyanús más AAS additívan."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó tabletta +1-2 nap PCT-indítás (önmagában enyhe HPTA-szuppresszió). Stack-társ Test PCT-protokoll dominál.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG (recovery), lipid panel.",
      "purpose": "HPTA-helyreállítás Proviron-only ciklusnál tipikusan 4-6 hét, gyors. Stack-társ Test esetén a PCT a hosszabb Test-ester half-life-jától függ."
    },
    "cruise": {
      "label": "Cruise alatt",
      "timing": "TRT-Test cruise alatt Proviron adjunkt 25-50 mg/nap tipikusan elfogadott, 6-8 hetente monitoring",
      "markers": "Lipid panel, SHBG, Total T, Free T, E2, PSA (30 év felett).",
      "purpose": "TRT-cruise mellett a Proviron \"libido-boost\" adjunkt: free-T-emelkedés és enyhe AI-effekt. Hosszú távú folyamatos használat tolerálható (Bayer SmPC alapján), de lipid + PSA monitor 6-8 hetente."
    }
  }
}
