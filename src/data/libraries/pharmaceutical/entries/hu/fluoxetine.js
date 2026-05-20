// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.572Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "fluoxetine",
  "name": "Fluoxetine",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Az első SSRI (Eli Lilly Prozac, FDA 1987). Ultra-hosszú felezési idő (4-6 nap), pediátriai MDD-re FDA-jóváhagyott.",
  "description": "A Fluoxetine az SSRI-osztály úttörője (Eli Lilly Prozac, FDA 1987), az első klinikailag sikeres szerotonin-szelektív gyógyszer. Ultra-hosszú farmakokinetikája (parent 4-6 nap, aktív metabolit norfluoxetin 4-16 nap) miatt steady-state lassan alakul ki (4-5 hét), de a discontinuation-syndrom is enyhébb (a hosszú \"auto-taper\" miatt). Az EGYETLEN SSRI, ami FDA-jóváhagyással rendelkezik PEDIÁTRIAI MDD-re (8 év fölött), valamint OCD-re és bulimia nervosa-ra. A Stark 2003 (PMID 14692046) trial dokumentálta a pediátriai MDD hatékonyságát. Generikus, megfizethető. Erős CYP2D6-inhibítor, ami klinikailag jelentős interakciókat okoz.",
  "mechanism": "SERT szelektív gátlása. Mérsékelt 5-HT2C antagonizmus (ami az enyhe stimuláló-hangulati effekthez járulhat). A NORFLUOXETIN metabolit hasonlóan aktív és farmakológiailag identikus.",
  "legalStatus": "EU/HU: vényköteles (Prozac, Fluctin, Floxet, generikus). USA: FDA Rx.",
  "bioavailability": "Abszolút értékben nem karakterizált (IV formula nincs); 60-80% relatív orális szuszpenzióhoz — FDA Prozac label",
  "onsetTime": "4-6 weeks (full antidepressant response)",
  "halfLife": "4-6 days (parent); norfluoxetine 4-16 days",
  "atcCode": "N06AB03",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Major depresszív zavar (MDD), beleértve pediátriai (8+ év, EGYEDÜLI SSRI ezzel)",
    "Obszesszív-kompulzív zavar (OCD)",
    "Bulimia nervosa",
    "Pánikbetegség, PMDD (Sarafem branding)"
  ],
  "contraindications": [
    "MAOi 14 napon belül (vagy 5 hét Fluoxetine elhagyás után — hosszú felezési idő miatt)",
    "Pimozide, Thioridazine egyidejű"
  ],
  "commonSideEffects": [
    "GI: hányinger, hasmenés, étvágytalanság (a fogyás-irányba húz, vs Mirtazapin/Paroxetin)",
    "Inszomnia (gyakoribb mint a többi SSRI-nál, reggel adni)",
    "Szexuális diszfunkció (15-30%)",
    "Súlyos, ritka: szerotonin szindróma, suicidal ideation < 25 év (FDA boxed), SIADH, mánia-indukció BD-betegen"
  ],
  "cyp450": [
    "CYP2D6 STRONG INHIBITOR (clinically significant)",
    "CYP2C9, CYP3A4 inhibitor (moderate)",
    "CYP2D6, CYP2C9 substrate"
  ],
  "crossMolInteractions": [
    "MAOi: 5-HETI mosási periódus szükséges Fluoxetine elhagyás után (hosszú felezési idő)",
    "CYP2D6-substrátum (Codein, Tamoxifen, Risperidon, Atomoxetine): plazma-szint emelkedhet, Tamoxifen-hatás csökkenhet",
    "Warfarin: INR-emelkedés gyakori, monitor",
    "NSAID, antitrombotikum: GI-vérzés kockázat fokozása"
  ],
  "benefits": [
    "Pediátriai MDD FDA-jóváhagyott (8+ év, egyedüli SSRI)",
    "Ultra-hosszú felezési idő → enyhe discontinuation syndrome",
    "Bulimia nervosa FDA-jóváhagyott",
    "Aktiváló profil, étvágycsökkentő (depressziós-anergiás profilra)"
  ],
  "studies": [
    {
      "title": "Fluoxetine for acute treatment of depression in children and adolescents",
      "authors": "Stark P, Hardison CD.",
      "journal": "J Clin Psychiatry. 1985;46(3 Pt 2):53-8.",
      "pmid": "3155758"
    },
    {
      "title": "Comparative efficacy of 21 antidepressants for MDD",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Fluoxetine in obsessive-compulsive disorder: pooled-trial efficacy and tolerability",
      "authors": "Tollefson GD, Rampey AH Jr, Potvin JH et al.",
      "journal": "Arch Gen Psychiatry. 1994;51(7):559-67.",
      "pmid": "8031229"
    }
  ],
  "related": [
    "escitalopram"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1-2 (start)",
        "dose": "10"
      },
      {
        "phase": "MDD cél",
        "dose": "20"
      },
      {
        "phase": "OCD/bulimia cél",
        "dose": "40"
      },
      {
        "phase": "Max-dózis",
        "dose": "80"
      }
    ],
    "unit": "mg/nap",
    "note": "REGGEL bevenni (aktiváló profil, inszomnia mitigálására). MDD cél-dózis 20 mg/nap, OCD/bulimia 40-60 mg/nap. Ultra-hosszú felezési idő miatt steady-state 4-5 hét, és elhagyásnál ~5 hét auto-taper."
  },
  "anecdote": "Anekdotikus beszámolók szerint a Fluoxetin (Prozac) az egyik legjobban tolerálható, hosszan ható SSRI, könnyebb, energizálóbb szubjektív profillal a szedatív alternatívákhoz képest. Ultra-hosszú felezési ideje (4-6 nap az aktív metabolitokra) megbocsátó a kihagyott adagokkal szemben, ezért gyakori Rx-választás az idős, gyógyszerkihagyásra hajlamos pácienseknél. Gyakori korai kezelési kompromisszumok közé tartozik az aktiváció, álmatlanság, érzelmi tompultság és az SSRI-osztály szexuális mellékhatásai. Közösségi beszámolók szerint prokognitív tulajdonságokkal rendelkezik — preklinikai és klinikai jelentések hosszú távú memória, végrehajtó funkció, figyelem és impulzivitás javulását mutatják, erősebb hatással neurodegeneratív kontextusokban. Figyelem: a megvonási szindróma enyhébb, mint a rövidebb hatású SSRI-knél az önelvonó hatás miatt, de MAOi-val való kombináció szigorúan ellenjavallt (szerotoninszindróma kockázata)."
}
