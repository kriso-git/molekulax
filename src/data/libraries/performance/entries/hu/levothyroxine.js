// Levothyroxine (T4, Synthroid) — Knoll Pharmaceutical 1955 FDA-jóváhagyott
// szintetikus 3,5,3',5'-tetraiodothyronine, hypothyroidism Rx gold-standard.
// Sources: FDA Synthroid SmPC (AbbVie), Stott 2017 TRUST NEJM PMID 28121505,
// Garber 2012 AACE/ATA PMID 22293194, Jonklaas 2014 ATA guidelines PMID 25266247,
// Wartofsky 2002 J Clin Endocrinol Metab PMID 12107201.

export default {
  "id": "levothyroxine",
  "name": "Levothyroxine (T4, Synthroid)",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Szintetikus T4 (3,5,3',5'-tetraiodothyronine), Knoll/AbbVie 1955 FDA-jóváhagyott hypothyroidism Rx gold-standard (Synthroid). Prohormon — hepatikus + renalis 5'-deiodinase (D1/D2) konvertálja aktív T3-má. Cutting-cycle off-label use kevésbé jellemző mint T3 (lassabb 7-nap t1/2, steady-state ~6 hét). WADA: allowed dokumentált hypothyroidism diagnózissal.",
  "description": "A Levothyroxine (Synthroid) az endogén T4 (3,5,3',5'-tetraiodothyronine), a tireoid-hormon prohormon-formájának szintetikus változata. 1955-ben kapott FDA-jóváhagyást a Knoll Pharmaceutical (ma AbbVie) Synthroid brandnév alatt, és 70 év klinikai irodalom mellett USA top-5 prescribed drug az utóbbi két évtizedben. Hypothyroidism Rx gold-standard a Garber 2012 AACE/ATA guideline (PMID 22293194) és Jonklaas 2014 ATA guideline (PMID 25266247) szerint: a célzott TSH-target 0.5-2.5 mIU/L, a Rx-dose 1.6 μg/kg/nap (60-100 kg → 100-150 μg/nap). A T4 a perifériás szövetekben (máj, vese, izom, központi idegrendszer) a 5'-deiodinase D1/D2 enzimekkel konvertálódik aktív T3-má (~80% T4 → T3 perifériás konverzió), és csak közvetve nukleáris TR-α/β agonist mert maga a T4 alacsony receptor-affinitású (~10x gyengébb mint T3). A cutting-cycle off-label use a T3-nál kevésbé jellemző: a lassabb on/off-kinetika (7-nap t1/2 vs T3 24 óra) miatt a steady-state ~6 hét, és a metabolic-rate emelés is lassabb. Stott 2017 TRUST NEJM (PMID 28121505) idős subclinical hypothyroidism RCT-je nem talált tüneti előnyt T4-substitúció mellett, de a Rx-felírás-tempó nem csökkent USA-ban. WADA-listán T4 'allowed' kategóriában szerepel dokumentált hypothyroidism diagnózissal — sportoló-cutting-cycle off-label NEM legitim + WADA-violation.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "Tireoid-hormon prohormon, perifériás D1/D2 konverzió T3-má, indirect nukleáris TR-α/β agonist"
    },
    {
      "label": "Adagolás",
      "value": "Klinikai 1.6 μg/kg/nap (100-150 μg/nap); off-label cutting 200-300 μg/nap (NEM ajánlott)"
    },
    {
      "label": "Felezési idő",
      "value": "~7 nap (steady-state ~6 hét)"
    },
    {
      "label": "Hatáskezdet",
      "value": "Metabolic-rate emelés 1-2 hét; steady-state 6 hét"
    },
    {
      "label": "Jogi státusz",
      "value": "FDA + EMA Rx (hypothyroidism), HU + PL törzskönyvezett. WADA: allowed dokumentált hypothyroidism diagnózissal, off-label cutting NEM legitim."
    }
  ],
  "mechanism": "A Levothyroxine az endogén T4 szintetikus változata, a tireoid-hormon prohormon-formája. A T4 önmagában alacsony nukleáris receptor-affinitású (~10x gyengébb mint T3), így a biológiai hatás döntő részét a perifériás 5'-deiodinase D1 (máj, vese, pajzsmirigy) + D2 (vázizom, központi idegrendszer, agyalapi mirigy) enzimes konverzió generálja: ~80% perifériás T4 → T3 konverzió. Az aktív T3 ezt követően a nukleáris TR-α (vázizom + szívizom) és TR-β (máj + hypothalamus) receptorokhoz kötődik, heterodimerizál a retinoid-X-receptor-rel (RXR), és transzkripciós faktorként aktiválja az UCP1/UCP3, β-oxidáció (CPT-1, ACOX) és Na/K-ATPase α-alegység-gén expresszióját. Klinikai dosing logika: a stabilabb T4-szérumkoncentráció (7-nap t1/2) homogénebb szöveti T3-szintet biztosít a perifériás konverzió-szabályozással, ami a Hashimoto + congenitalis + sebészi tireoidektómia post-Rx-on előnyös. Hypothalamic-pituitary-thyroid (HPT) feedback: a T4 a TRH/TSH szekréciót direkt szuprimálja a hypothalamus + agyalapi D2-konverzió révén — a TSH-target 0.5-2.5 mIU/L felé titrálás biztosítja, hogy az endogén axis részben aktív maradjon. Generic vs brand bioequivalence: az FDA 2019 study (PMID 31302949) megerősítette a 12 FDA-jóváhagyott generic preparátum bioequivalence-szintjét a Synthroid-dal (AUC 0.95-1.05).",
  "legalStatus": "USA: FDA-jóváhagyott 1955 (Synthroid, Knoll Pharmaceutical — ma AbbVie) hypothyroidism kezelésére; Schedule N/A. USA top-5 prescribed drug. EU: EMA-jóváhagyott (Euthyrox, Eltroxin). HU: törzskönyvezett (Euthyrox, L-Thyroxin Henning Rx). PL: törzskönyvezett (Euthyrox, Letrox Rx). WADA: 'allowed' dokumentált hypothyroidism diagnózissal (S0 hormonkategória nem-explicit-banned), sportoló-cutting-cycle off-label NEM legitim + WADA-violation potenciális.",
  "onsetTime": "Metabolic-rate emelés 1-2 hét; fat-loss-effekt 2-4 hét; steady-state 6 hét",
  "halfLife": "~7 nap",
  "interactionsWith": [
    "liothyronine",
    "clenbuterol",
    "mirabegron",
    "warfarin"
  ],
  "aromatization": "Nem aromatizál (nem szteroid hatóanyag — tireoid-prohormon). Nincs CYP19-interakció. Az ösztrogén-axis közvetlenül érintetlen, viszont indirect SHBG-emelkedés dokumentált tireoid-hormon-Rx-on (Klein 2001 PMID 11257082), ami free-Test-csökkenést okoz.",
  "hepatotoxicity": "Alacsony — minimális hepatikus stressz, ritka cholestasis (FDA Synthroid SmPC adverse events). Iatrogén-overdose hyperthyroid-szindrómát okoz (cardiac arrhythmia, hyperthermia), de NEM közvetlen hepatikus toxikus. ALT-emelkedés <1% incidenciával dokumentált klinikai trial-okon.",
  "wadaStatus": "allowed",
  "androgenicRatio": "N/A (nem AAS, tireoid-prohormon)",
  "bindingAffinity": "TR-α + TR-β nukleáris receptor Ki ~500-1000 pM (alacsony affinitás, T3-nél ~10x gyengébb). Biológiai hatás döntő részét a perifériás D1/D2 T3-konverzió mediálja.",
  "detectionWindow": "WADA-akkreditált LC-MS/MS vizeletminta-detektálás 4-6 hét chronic dose esetén (T4 + endogén TSH-suppression-pattern). Steady-state ~6 hét.",
  "benefits": [
    "Klinikai hypothyroidism Rx gold-standard 70-éves evidence-base",
    "Stabilabb T4-szérumkoncentráció (7-nap t1/2) homogén szöveti T3-szintet biztosít perifériás konverzió-szabályozással",
    "TSH-target 0.5-2.5 mIU/L titrálás Garber 2012 AACE/ATA + Jonklaas 2014 ATA guideline alapján",
    "Hashimoto + congenitalis + post-tireoidektómia first-line Rx",
    "Cycle-cutting-off-label-on lassabb on/off (7-nap t1/2) → kisebb iatrogén-hyperthyroid-risk mint T3 (24-óra t1/2)",
    "FDA 2019 study (PMID 31302949) generic vs brand bioequivalence megerősítette (12 generic AUC 0.95-1.05)"
  ],
  "quickStart": [
    "Klinikai Rx-start 25-50 μg/nap AM, titrálás 25 μg/2-hét step",
    "Rx-dose 1.6 μg/kg/nap (60-100 kg → 100-150 μg/nap), TSH-target 0.5-2.5 mIU/L",
    "AM dosing éhgyomorra, 30-60 perc reggeli előtt (ételszerinti abszorpció-csökkenés)",
    "Pre-cycle: TSH + free-T3 + free-T4 + anti-TPO + Tg-AB baseline",
    "Mid-cycle bloodwork: 6-week-check TSH + free-T4 + reverse-T3",
    "Calcium + iron + PPI + szója-tej 4-óra separation javasolt (abszorpció-csökkentés)",
    "Off-label cutting cycle 200-300 μg/nap (NEM ajánlott) — T3-helyett lassabb-titration biztonságosabb"
  ],
  "expectations": [
    {
      "label": "1-2. hét",
      "body": "Initial dose 50-100 μg AM. Mild tüneti változás, energy-szint enyhe emelkedés. TSH-szintek még nem normalizálódtak (steady-state 6 hét után)."
    },
    {
      "label": "3-4. hét",
      "body": "Hypothyroidism-symptómák (fáradtság, súlygyarapodás, cold-intolerance) enyhülnek. Subjective fat-loss tempó hypothyroidism-Rx-on +0.2-0.4 kg/hét steady-deficit mellett. Off-label cutting-context-on lassabb mint T3."
    },
    {
      "label": "6-8. hét + TSH-titration",
      "body": "Steady-state TSH-szint mérhető. Ha TSH >2.5 mIU/L → dose-emelés 25 μg/2-hét. Ha TSH <0.5 mIU/L → dose-csökkentés 25 μg/2-hét. Klinikai Rx-cél: TSH 0.5-2.5 mIU/L, free-T4 felső-normál-range."
    }
  ],
  "quality": {
    "pure": [
      "FDA-jóváhagyott Synthroid tabletta (AbbVie) vagy 12 FDA-jóváhagyott generic Levothyroxine — pharmacy-szourzott biztosítja a hatóanyag-tartalmat",
      "EU brand: Euthyrox (Merck), Eltroxin (GlaxoSmithKline), L-Thyroxin Henning (Sanofi)",
      "FDA 2019 study (PMID 31302949) generic vs brand bioequivalence megerősítette (12 generic AUC 0.95-1.05)"
    ],
    "caution": [
      "Hyperthyroid-szindróma overdose esetén: tachycardia, hyperthermia, anxietás, insomnia, weight-loss extrém — leállítás javasolt",
      "Calcium + iron + PPI + szója-tej 4-óra separation (abszorpció-csökkentés ~30-50%)",
      "Warfarin INR-emelkedés — anticoagulant-monitoring szükséges",
      "Cardiovascular monitoring idős betegnél (>65 év) low-titration step 12.5 μg/2-hét javasolt (Stott 2017 TRUST trial óvatossági ajánlás)",
      "Bone-density-loss long-term TSH-suppressive dose (>200 μg/nap, TSH <0.1 mIU/L chronic) — osteoporosis-risk",
      "Cycle-cutting-off-label-on dose-instabilitás → szuper-supraphysiological dose-titration NEM ajánlott"
    ],
    "avoid": [
      "Pre-existing cardiac arrhythmia (atrial fibrillation, ventricular tachycardia) — abszolút kontraindikáció dose-titration alatt",
      "Akut myocardial infarction (<6 hónap) — abszolút kontraindikáció",
      "Adrenal insufficiency Rx-kompetzáció nélkül — abszolút kontraindikáció (T4-Rx adrenal-crisis-induction risk)",
      "Cycle-cutting-off-label kontextus — klinikai-Rx legitim hypothyroidism diagnózissal, sportoló-cutting-cycle off-label NEM legitim + WADA-violation",
      "Pheochromocytoma — abszolút kontraindikáció",
      "Diabetes mellitus type 1 — relativ kontraindikáció (T4-Rx + insulin-stack glucose-management-zavar)"
    ]
  },
  "interactions": [
    "Liothyronine (T3) — T4+T3 combo therapy Bunevicius 1999 PMID 9989958 cognitive-szimptóma-relief, dose-adjust mindkettőhöz külön",
    "Warfarin — T4 enhances anticoagulant effect, INR-monitoring szükséges",
    "Calcium + iron oral supplement — T4-abszorpciót csökkentik 30-50% (4-óra separation javasolt)",
    "PPI (omeprazole, pantoprazole) — gastric pH-emelkedés T4-abszorpciót csökkenti",
    "Szója-tej + Wegovy + Mounjaro — abszorpció-zavar (4-óra separation)",
    "Beta-blocker (propranolol) — D1-konverzió-gátló T4 → T3 lassítja, additional T3-doses-szel kompenzálható",
    "SSRI (sertraline, fluoxetine) — TSH-szint-szabályozási feedback-zavar dokumentált"
  ],
  "studies": [
    {
      "title": "Discontinuation of levothyroxine therapy in patients with subclinical hypothyroidism: a pilot randomized clinical trial.",
      "authors": "Maraka S, Owen RR, Singh Ospina NM",
      "journal": "Endocrine",
      "pmid": "40736623"
    },
    {
      "title": "A 2013 survey of clinical practice patterns in the management of primary hypothyroidism.",
      "authors": "Burch HB, Burman KD, Cooper DS",
      "journal": "J Clin Endocrinol Metab",
      "pmid": "24527720"
    },
    {
      "title": "Guidelines for the treatment of hypothyroidism (ATA)",
      "authors": "Jonklaas J, Bianco AC, Bauer AJ et al.",
      "journal": "Thyroid. 2014;24(12):1670-1751.",
      "pmid": "25266247"
    },
    {
      "title": "Combined levothyroxine plus liothyronine compared with levothyroxine alone in primary hypothyroidism: a randomized controlled trial",
      "authors": "Walsh JP, Shiels L, Lim EM et al.",
      "journal": "J Clin Endocrinol Metab. 2003;88(10):4543-4550.",
      "pmid": "14557420"
    },
    {
      "title": "Levothyroxine Formulations: Pharmacological and Clinical Implications of Generic Substitution.",
      "authors": "Benvenga S, Carlé A",
      "journal": "Adv Ther",
      "pmid": "31485974"
    }
  ],
  "faq": [
    {
      "q": "T4-monotherapy vs T4+T3-kombináció — mit mond a TRUST-evidence?",
      "a": "A Bunevicius 1999 NEJM (PMID 9989958) klasszikus T3-add-on RCT cognitive-szimptóma-relief-et talált T4-monotherapy mellett. A Stott 2017 TRUST NEJM (PMID 28121505) idős subclinical hypothyroidism RCT-je viszont NEM talált tüneti előnyt T4-substitúció mellett (placebo-controlled n=737). Walsh 2003 PMID 14557420 + meta-analysis-ok többségében szintén nincs konzisztens cognitive-előny T4+T3-on a T4-monotherapy felett. Klinikai gold-standard 2024: T4-monotherapy first-line, T4+T3-kombináció csak persistent cognitive-szimptómák esetén (Jonklaas 2014 ATA guideline)."
    },
    {
      "q": "Cutting-cycle T4 vs T3 — melyiket válasszam?",
      "a": "Egyik cutting-cycle-on legitim sem (off-label), de ha mégis: T3 dominál a klasszikus protokollokon mert gyorsabb metabolic-rate emelés (24-óra t1/2 vs 7 nap). A T4 lassabb steady-state (~6 hét) + lassabb on/off-kinetika → kisebb iatrogén-hyperthyroid-risk, de cutting-cycle 4-6 hét time-frame-en belül NEM ér el steady-state thermogenic effekt. WADA-status: T4 'allowed' dokumentált hypothyroidism diagnózissal, T3 in-competition banned non-Rx. Sportoló-cutting-cycle off-label NEM legitim + WADA-violation."
    },
    {
      "q": "WADA TUE-process dokumentált hypothyroidism-mel?",
      "a": "Igen — T4 (Levothyroxine) S0 'allowed' kategóriában legitim hypothyroidism-Rx-on. TUE (Therapeutic Use Exemption) standard process: endokrinológus diagnózis (TSH-pattern, anti-TPO, Tg-AB labor-konfirmáció) + sportszövetség TUE-bizottság jóváhagyás. WADA 2025 prohibited list explicit: pre-existing-Rx-diagnózissal sportoló legitim. Athleta dokumentált hypothyroidism + Levothyroxine kombináció gyakori top-level kompetition-on (USA + EU). T3 (Liothyronine) szigorúbb: TUE rendkívüli helyzetben, csak ha T4-monotherapy nem hatékony."
    },
    {
      "q": "Túl-emelt T4-dose mellékhatások?",
      "a": "TSH-suppressive dose (>200 μg/nap chronic, TSH <0.1 mIU/L) hyperthyroid-szindrómát okoz: tachycardia, palpitacio, anxietás, insomnia, weight-loss extrém, hőtűrőképesség-csökkenés. Hosszú-távú (>1 év) TSH-suppressive dose bone-density-loss + osteoporosis-risk dokumentált (Faber 1994 PMID 8112375). Cardiovascular-risk idős betegnél: atrial fibrillation-incidence 2-3x emelkedés TSH-suppressive dose-on (Sawin 1994 PMID 8302057). Cycle-cutting-off-label 200-300 μg/nap-os super-dose 4-6 hét time-frame-en belül akut hyperthyroid-szindróma + cardiac-arrhythmia-risk magas."
    },
    {
      "q": "Generic vs brand Synthroid — van bioequivalence-különbség?",
      "a": "FDA 2019 study (Trapnell PMID 31302949) megerősítette a 12 FDA-jóváhagyott generic Levothyroxine bioequivalence-szintjét a Synthroid-dal (AUC 0.95-1.05 range). Klinikai-irányelv (AACE 2012, Garber): a generic vs brand váltást a Rx-on stabilan beállított pácienseknél kerülni érdemes, mert az inter-batch-variabilitás minimális, de a placebo-effect + dose-stabilitás-percepciós szempont miatt egy batchnél maradás javasolt. Új-indikáció Rx-on bárhol kezdhető (generic vagy brand) bioequivalence-okok miatt egyforma."
    }
  ],
  "related": [
    "liothyronine"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 75,
      "medium": 125,
      "high": 200
    },
    "unit": "μg/nap",
    "note": "Klinikai hypothyroidism-Rx 1.6 μg/kg/nap (60-100 kg → 100-150 μg/nap). AM dosing éhgyomorra, 30-60 perc reggeli előtt. Titrálás 25 μg/2-hét step, TSH-target 0.5-2.5 mIU/L. Off-label cutting-cycle 200-300 μg/nap (NEM ajánlott — T3-helyett lassabb-titration biztonságosabb). Pre-cycle TSH + free-T3 + free-T4 + anti-TPO + Tg-AB baseline; mid-cycle 6-week TSH-check + post-cycle 4-week recovery-confirm."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "Cycle-start előtt 1-2 hét",
      "markers": "TSH, free-T3, free-T4, reverse-T3, anti-TPO + Tg-AB (Hashimoto-screen), 12-lead EKG, BP + resting HR, lipid panel (TC/LDL/HDL/TG)",
      "purpose": "Pre-existing hypothyroidism / Hashimoto kontraindikáció-screen, cardiovascular baseline, tireoid-axis funkció baseline"
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "Cycle-start után 6 hét (steady-state confirm)",
      "markers": "TSH (Rx-target 0.5-2.5 mIU/L), free-T4 (felső-normál-range), reverse-T3, lipid panel, BP + HR home-tracking weekly",
      "purpose": "TSH-target-tartomány elérés ellenőrzése; dose-titration 25 μg/2-hét step szükséges-e? Lipid panel cardiovascular-szignál (T4 csökkenti az LDL-t hypothyroidism-Rx-on)"
    },
    "postCycle": {
      "label": "Ciklus után (cycling-cutting-off-label kontextus)",
      "timing": "Cycle-end után 2 + 4 hét",
      "markers": "TSH (visszatérés baseline-re), free-T3, free-T4, reverse-T3, anti-TPO follow-up, BP + HR home-tracking",
      "purpose": "Endogén tireoid-axis recovery verifikálása. Cycle-cutting-off-label kontextus rövidebb time-frame mint klinikai-Rx, ezért gyors-recovery várt (4-6 hét)"
    },
    "cruise": {
      "label": "Long-term (klinikai hypothyroidism Rx)",
      "timing": "Klinikai indikáció esetén évente / félévente",
      "markers": "TSH (Rx-target 0.5-2.5 mIU/L), free-T4, lipid panel, bone-density DEXA-scan évente (osteoporosis-risk TSH-suppressive dose >200 μg/nap chronic), EKG ritmus-monitoring idős betegnél",
      "purpose": "Klinikai hypothyroidism long-term Rx-monitoring (Jonklaas 2014 ATA guideline), TSH-target tartomány-tartás kötelező"
    }
  }
}
