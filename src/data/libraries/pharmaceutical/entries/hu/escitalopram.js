// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.571Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "escitalopram",
  "name": "Escitalopram",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "SSRI, citalopram S-enantiomere (Lundbeck Lexapro/Cipralex). MDD + szorongásos zavarok első-vonal Rx. Cipriani 2018 meta szerint top-3 hatékonyság.",
  "description": "Az Escitalopram a citalopram aktív S-enantiomere (R-enantiomer farmakológiailag inaktív, sőt enyhén interferálhat). A Lundbeck fejlesztette ki (Lexapro FDA 2002), az SSRI-osztály egyik legtisztább SERT-szelektivitású gyógyszere. A Cipriani 2018 Lancet (PMID 29477251) Network Meta-Analízis szerint a 21 antidepresszáns közül a top-3 hatékonyság-tolerabilitás arányban (mellette Vortioxetin, Mirtazapin). Lader 2004 (PMID 15125014) trial szerint MDD-ben szuperior a citalopramhoz képest 8 hét után. Általában jobb tolerabilitás-profil, mint a citalopramnak, és QTc-prolongáció kockázat alacsonyabb (FDA 2011 figyelmeztetés citalopramra > 40 mg/nap, escitalopramra > 20 mg/nap).",
  "mechanism": "A SERT (szerotonin transzporter) szelektív, allosztérikus inhibitor. Magasabb SERT-szelektivitás, mint a többi SSRI-nak. Nincs jelentős affinitása más receptorokhoz.",
  "legalStatus": "EU/HU: vényköteles (Cipralex, Lexapro, generikus). USA: FDA Rx.",
  "bioavailability": "~80% (orális, étkezéstől független — FDA Lexapro label)",
  "onsetTime": "2-6 weeks (full antidepressant response)",
  "halfLife": "27-32 h (once-daily dosing)",
  "atcCode": "N06AB10",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Major depresszív zavar (MDD)",
    "Generalizált szorongás (GAD)",
    "Pánikbetegség, szociális szorongás (SAD), OCD"
  ],
  "contraindications": [
    "MAOi 14 napon belül (szerotonin szindróma)",
    "Pimozide egyidejű (QT-prolongáció)",
    "Veleszületett hosszú-QT szindróma"
  ],
  "commonSideEffects": [
    "GI: hányinger (10-15%), hasmenés, szájszárazság",
    "Szexuális diszfunkció (10-20%)",
    "Inszomnia vagy szedáció, fejfájás, izzadás",
    "Súlyos, ritka: szerotonin szindróma, suicidal ideation < 25 év (FDA boxed), SIADH, QT-prolongáció > 20 mg/nap"
  ],
  "cyp450": [
    "CYP2C19 substrate (primary)",
    "CYP3A4, CYP2D6 (minor)",
    "Mild CYP2D6 inhibitor (clinically less significant than fluoxetine/paroxetine)"
  ],
  "crossMolInteractions": [
    "MAOi: ABSZOLÚT kontraindikált",
    "Tramadol, MDMA, triptánok: szerotonin szindróma kockázat",
    "QT-prolongáló szerek (azitromicin, ondansetron): additív kockázat > 20 mg/nap",
    "Warfarin: enyhe INR-emelkedés lehetséges"
  ],
  "benefits": [
    "Cipriani 2018 meta top-3 hatékonyság-tolerabilitás",
    "Magas SERT-szelektivitás (kevés off-target receptor)",
    "Egyszerű dóziseszkaláció (10 mg → 20 mg)"
  ],
  "studies": [
    {
      "title": "Comparative efficacy of 21 antidepressants for MDD",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Escitalopram versus citalopram: the surprising role of the R-enantiomer",
      "authors": "Lader M, Andersen HF, Baekdal T.",
      "journal": "Psychopharmacology. 2005;179(2):461-8.",
      "pmid": "15692804"
    },
    {
      "title": "Efficacy of escitalopram in generalized anxiety disorder",
      "authors": "Davidson JR, Bose A, Korotzer A et al.",
      "journal": "J Clin Psychiatry. 2004;65(8):1059-66.",
      "pmid": "15323590"
    }
  ],
  "related": [
    "fluoxetine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1 (start)",
        "dose": "5"
      },
      {
        "phase": "Hét 2+ (MDD cél)",
        "dose": "10"
      },
      {
        "phase": "Max-dózis (GAD/OCD)",
        "dose": "20"
      }
    ],
    "unit": "mg/nap",
    "note": "Reggel vagy este, étkezéstől függetlenül. MDD cél-dózis 10 mg/nap, GAD/OCD 10-20 mg/nap. > 20 mg/nap QT-prolongáció miatt NEM ajánlott. Lassú leépítés a discontinuation szindróma elkerülésére."
  },
  "anecdote": "Közösségi beszámolók szerint az Escitalopram az egyik legtisztább tolerálhatósági és mellékhatás-profilú SSRI, amit a Cipriani 2018-as meta-analízis is alátámaszt, a hatékonyság szempontjából a legmagasabb kategóriába sorolva. A felhasználók csendes szubjektív profilként írják le — szorongáscsökkentő és hangulatjavító hatású, erős stimuláns vagy szedatív karakter nélkül. A teljes terápiás haszon jellemzően 4-8 hét alatt alakul ki, így türelem szükséges az indítás során. Szexuális diszfunkció (késleltetett orgazmus, csökkent libidó) gyakran jelentett, az SSRI-osztálynak megfelelően. A 27-32 órás felezési idő stabil plazmaszintet biztosít napi egyszeri adagolással. Figyelem: hirtelen abbahagyás esetén megvonási szindróma — klinikai felügyelet alatt csökkentsd. Magasabb dózisoknál QT-megnyúlás kockázata, ami EKG-monitorozást igényel."
}
