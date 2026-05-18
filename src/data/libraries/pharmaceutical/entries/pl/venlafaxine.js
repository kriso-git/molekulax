// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.617Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "venlafaxine",
  "name": "Venlafaxine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Inhibitor wychwytu zwrotnego serotoniny-norepinefryny (SNRI, Wyeth Effexor). MDD + GAD + PD + SAD. Znany z ciężkiego zespołu odstawiennego.",
  "description": "Wenlafaksyna to pierwszy SNRI (Wyeth Effexor, FDA 1993), z farmakologią zależną od dawki: w niskiej dawce (≤ 150 mg) głównie SERT-selektywna (SSRI-podobna), w wyższej (> 150 mg) dochodzi aktywność NET (SNRI-podobna). Forma ER (przedłużone uwalnianie) standardowa dla stabilnego osocza i tolerancji GI. Aktywny metabolit deswenlafaksyna (Pristiq, sprzedawana osobno). Wenlafaksyna SŁYNNA z ciężkiego zespołu odstawiennego ze względu na krótki okres półtrwania (5 h) i podwójny efekt SERT/NET: powolne zmniejszanie przez 4-6 tygodni OBOWIĄZKOWE, często tylko przez most fluoksetynowy.",
  "mechanism": "Zależne od dawki: < 150 mg głównie inhibitor SERT (SSRI-podobne); > 150 mg dodaje się NET (SNRI-podobne). Minimalna aktywność DAT.",
  "legalStatus": "UE/PL: na receptę (Efectin, Velaxin, Velafax, generyki). USA: FDA Rx.",
  "onsetTime": "2-6 weeks (full antidepressant response)",
  "halfLife": "5 h (parent), 11 h (active O-desmethylvenlafaxine)",
  "atcCode": "N06AX16",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "MDD, GAD, zaburzenie paniki, lęk społeczny",
    "Off-label: ADHD, ból przewlekły, objawy waskomotorne u kobiet w menopauzie"
  ],
  "contraindications": [
    "MAOi w ciągu 14 dni",
    "Nieleczona jaskra z zamykającym się kątem",
    "Ciężkie nadciśnienie (oczekiwany wzrost BP > 150 mg/dzień)"
  ],
  "commonSideEffects": [
    "GI: nudności (35%, znaczne), suchość w ustach",
    "Wzrost BP (zależny od dawki, częstszy > 150 mg)",
    "Dysfunkcje seksualne (15-30%)",
    "Ciężkie, rzadkie: zespół serotoninowy, CIĘŻKI zespół odstawienny (brain-zap, zawroty, GI, powrót depresji)"
  ],
  "cyp450": [
    "CYP2D6 substrate (primary)",
    "CYP3A4 (minor)",
    "Minimal CYP inhibitor activity"
  ],
  "crossMolInteractions": [
    "MAOi: BEZWZGLĘDNE przeciwwskazanie",
    "Tramadol, MDMA, tryptany: zespół serotoninowy",
    "Silne inhibitory CYP2D6 (fluoksetyna, paroksetyna): poziom wenlafaksyny może wzrosnąć"
  ],
  "benefits": [
    "Wyższodawkowy efekt SERT+NET dla GAD/MDD opornego na leczenie",
    "Szczególnie skuteczna w GAD, top wybór wytycznych NICE",
    "Objawy waskomotorne menopauzy (off-label, alternatywa bez hormonów)"
  ],
  "studies": [
    {
      "title": "Venlafaxine extended release for the treatment of generalized anxiety disorder",
      "authors": "Davidson JR, DuPont RL, Hedges D et al.",
      "journal": "J Clin Psychiatry. 1999;60(8):528-35.",
      "pmid": "10485636"
    },
    {
      "title": "Comparative efficacy of 21 antidepressants for MDD",
      "authors": "Cipriani A, Furukawa TA, Salanti G et al.",
      "journal": "Lancet. 2018;391(10128):1357-1366.",
      "pmid": "29477251"
    },
    {
      "title": "Discontinuation symptoms after treatment with serotonin reuptake inhibitors",
      "authors": "Fava GA, Gatti A, Belaise C et al.",
      "journal": "Psychother Psychosom. 2015;84(2):72-81.",
      "pmid": "25721705"
    }
  ],
  "related": [
    "sertralin",
    "mirtazapine",
    "bupropion"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tydzień 1 (start, ER)",
        "dose": "37.5"
      },
      {
        "phase": "Tydzień 2+ (cel MDD/GAD)",
        "dose": "75"
      },
      {
        "phase": "Ciężki przypadek",
        "dose": "150"
      },
      {
        "phase": "Maks. dawka (monitor BP)",
        "dose": "225"
      }
    ],
    "unit": "mg/nap (ER)",
    "note": "Forma ER rano, z jedzeniem. > 150 mg/dzień wymaga monitorowania BP. PRZY ODSTAWIANIU powolne zmniejszanie przez 4-6 tygodni, często przez most fluoksetynowy by złagodzić zespół."
  }
}
