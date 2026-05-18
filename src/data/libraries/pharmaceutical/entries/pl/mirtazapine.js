// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.617Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "mirtazapine",
  "name": "Mirtazapine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Noradrenergiczny i specyficzny serotoninergiczny antydepresant (NaSSA, Organon Remeron). Sedujący + pobudzający apetyt, idealny dla MDD + bezsenność + utrata masy.",
  "description": "Mirtazapina to tetracykliczny antydepresant (klasa NaSSA, Organon Remeron FDA 1996). Mechanizm: antagonista receptora α2-adrenergicznego (zwiększa uwalnianie serotoniny i norepinefryny), oraz antagonista 5-HT2A/2C i 5-HT3. Blokada 5-HT2C wyjaśnia pobudzenie apetytu, blokada 5-HT3 efekt przeciwwymiotny, blokada α2 sedujący profil (szczególnie w niskiej dawce, 7,5-15 mg). Idealna dla MDD z utratą masy, bezsennością, nudnościami. Metaanaliza Cipriani 2018 stawia ją top-3 dla skuteczności-tolerancji.",
  "mechanism": "Antagonista receptora α2-adrenergicznego (podnosi uwalnianie NA + 5-HT), antagonista 5-HT2A/2C/3, antagonista H1 (sedacja). NIE jest inhibitorem SERT/NET.",
  "legalStatus": "UE/PL: na receptę (Remeron, Mirzaten, generyki). USA: FDA Rx.",
  "bioavailability": "~50% (doustnie — etykieta FDA Remeron)",
  "onsetTime": "1-2 weeks (alvás, étvágy), 2-4 weeks (full AD)",
  "halfLife": "20-40 h (once-nightly dosing)",
  "atcCode": "N06AX11",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Duża depresja, zwłaszcza z bezsennością + utratą masy + lękiem",
    "Off-label: augmentacja SSRI/SNRI dla dysfunkcji seksualnych + bezsenności"
  ],
  "contraindications": [
    "MAOi w ciągu 14 dni",
    "Ciężka niewydolność wątroby lub nerek"
  ],
  "commonSideEffects": [
    "Sedacja, senność (>50%, zwłaszcza przy 7,5-15 mg)",
    "Przyrost masy (średnio 2-4 kg, z powodu pobudzenia apetytu)",
    "Suchość w ustach, zaparcia, retencja moczu (łagodny efekt antycholinergiczny)",
    "Ciężkie, rzadkie: agranulocytoza (< 1/1000), Stevens-Johnson, myśli samobójcze < 25 lat"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary)",
    "CYP1A2, CYP2D6 (minor)",
    "Minimal CYP inhibitor"
  ],
  "crossMolInteractions": [
    "MAOi: BEZWZGLĘDNE przeciwwskazanie",
    "Alkohol, benzodiazepina: addytywna sedacja",
    "Silne inhibitory CYP3A4 (ketokonazol): poziom mirtazapiny może wzrosnąć"
  ],
  "benefits": [
    "Idealny wybór dla MDD z bezsennością + anoreksją",
    "Jako augmentacja SSRI/SNRI łagodzi dysfunkcje seksualne",
    "Nie jest inhibitorem SERT, brak klasycznego zespołu odstawiennego SSRI",
    "Cipriani 2018 top-3 skuteczność-tolerancja"
  ],
  "studies": [
    {
      "title": "Mirtazapine: a review of its use in major depression",
      "authors": "Anttila SA, Leinonen EV.",
      "journal": "CNS Drug Rev. 2001;7(3):249-64.",
      "pmid": "11607047"
    },
    {
      "title": "Comparative efficacy of 21 antidepressants for MDD",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Mirtazapine versus other antidepressive agents for depression",
      "authors": "Watanabe N, Omori IM, Nakagawa A et al.",
      "journal": "Cochrane Database Syst Rev. 2011;(12):CD006528.",
      "pmid": "22161405"
    }
  ],
  "related": [
    "sertralin",
    "bupropion",
    "venlafaxine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tydzień 1 (start)",
        "dose": "15"
      },
      {
        "phase": "Tydzień 2+ (cel)",
        "dose": "30"
      },
      {
        "phase": "Maks. dawka",
        "dose": "45"
      }
    ],
    "unit": "mg/nap (este)",
    "note": "Przyjmuj WIECZOREM (wykorzystaj efekt sedujący). Niska dawka (7,5-15 mg) PARADOKSALNIE bardziej sedująca (relatywnie silniejsza blokada H1); przy wyższej (30-45 mg) uwalnianie NA równoważy."
  }
}
