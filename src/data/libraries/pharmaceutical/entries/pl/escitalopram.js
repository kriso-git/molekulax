// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.616Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "escitalopram",
  "name": "Escitalopram",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "SSRI, S-enancjomer cytalopramu (Lundbeck Lexapro/Cipralex). Pierwsza linia Rx dla MDD + zaburzeń lękowych. Metaanaliza Cipriani 2018: top-3 skuteczność.",
  "description": "Escytalopram to aktywny S-enancjomer cytalopramu (R-enancjomer farmakologicznie nieaktywny, może lekko interferować). Opracowany przez Lundbeck (Lexapro FDA 2002), jeden z najczystszych SERT-selektywnych SSRI. Wg metaanalizy Cipriani 2018 Lancet (PMID 29477251) top-3 z 21 antydepresantów pod względem skuteczności-tolerancji (obok wortioksetyny, mirtazapiny). Badanie Lader 2004 (PMID 15125014) wykazało wyższość w MDD nad cytalopramem po 8 tygodniach. Generalnie lepsza tolerancja niż cytalopram, niższe ryzyko wydłużenia QTc (ostrzeżenie FDA 2011 dla cytalopramu > 40 mg/dzień, escytalopramu > 20 mg/dzień).",
  "mechanism": "Selektywny allosteryczny inhibitor SERT (transporter serotoniny). Wyższa selektywność SERT niż inne SSRI. Brak znaczącego powinowactwa do innych receptorów.",
  "legalStatus": "UE/PL: na receptę (Cipralex, Lexapro, generyki). USA: FDA Rx.",
  "onsetTime": "2-6 weeks (full antidepressant response)",
  "halfLife": "27-32 h (once-daily dosing)",
  "atcCode": "N06AB10",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Duża depresja (MDD)",
    "Uogólnione zaburzenie lękowe (GAD)",
    "Zaburzenie paniki, lęk społeczny (SAD), OCD"
  ],
  "contraindications": [
    "MAOi w ciągu 14 dni (zespół serotoninowy)",
    "Jednoczesny pimozyd (wydłużenie QT)",
    "Wrodzony zespół długiego QT"
  ],
  "commonSideEffects": [
    "GI: nudności (10-15%), biegunka, suchość w ustach",
    "Dysfunkcje seksualne (10-20%)",
    "Bezsenność lub sedacja, ból głowy, pocenie się",
    "Ciężkie, rzadkie: zespół serotoninowy, myśli samobójcze < 25 lat (FDA boxed), SIADH, wydłużenie QT > 20 mg/dzień"
  ],
  "cyp450": [
    "CYP2C19 substrate (primary)",
    "CYP3A4, CYP2D6 (minor)",
    "Mild CYP2D6 inhibitor (clinically less significant than fluoxetine/paroxetine)"
  ],
  "crossMolInteractions": [
    "MAOi: BEZWZGLĘDNE przeciwwskazanie",
    "Tramadol, MDMA, tryptany: ryzyko zespołu serotoninowego",
    "Leki wydłużające QT (azytromycyna, ondansetron): addytywne ryzyko > 20 mg/dzień",
    "Warfaryna: możliwy łagodny wzrost INR"
  ],
  "benefits": [
    "Cipriani 2018 meta top-3 skuteczność-tolerancja",
    "Wysoka selektywność SERT (mało receptorów off-target)",
    "Prosta eskalacja dawki (10 mg → 20 mg)"
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
    "sertralin",
    "fluoxetine",
    "venlafaxine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tydzień 1 (start)",
        "dose": "5"
      },
      {
        "phase": "Tydzień 2+ (cel MDD)",
        "dose": "10"
      },
      {
        "phase": "Maks. dawka (GAD/OCD)",
        "dose": "20"
      }
    ],
    "unit": "mg/nap",
    "note": "Rano lub wieczorem, niezależnie od jedzenia. Cel MDD 10 mg/dzień, GAD/OCD 10-20 mg/dzień. > 20 mg/dzień NIE zalecane z powodu wydłużenia QT. Powolne zmniejszanie by uniknąć zespołu odstawiennego."
  }
}
