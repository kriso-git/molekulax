// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.620Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "bisoprolol",
  "name": "Bisoprolol",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Kardioselektywny bloker β1 (Merck Concor). Standard dla nadciśnienia + HFrEF + po MI. CIBIS-II redukcja śmiertelności.",
  "description": "Bisoprolol to wysoce selektywny antagonista β1-adrenergiczny (Merck Concor, FDA 1992). Selektywność β1/β2 ~75:1 znacznie zmniejsza działania pośredniczone przez β2 (skurcz oskrzeli, skurcz obwodowy) vs nieselektywne β-blokery (propranolol). Badanie CIBIS-II (CIBIS-II 1999 Lancet PMID 9988345) wykazało 34% redukcję względnej śmiertelności w HFrEF.",
  "mechanism": "Selektywny konkurencyjny antagonista β1. Ujemnie chronotropowy (spadek HR), inotropowy, dromotropowy. Redukcja reniny.",
  "legalStatus": "UE/PL: na receptę (Concor, Bisocard, generyki). USA: FDA Rx (Zebeta).",
  "onsetTime": "1-2 h (acute HR), 1-2 weeks (steady BP)",
  "halfLife": "10-12 h (once-daily)",
  "atcCode": "C07AB07",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Nadciśnienie, stabilna dławica",
    "HFrEF (dowody CIBIS-II)",
    "Wtórna prewencja po MI"
  ],
  "contraindications": [
    "Ciężka bradykardia (HR < 50), blok AV 2-3 st., bradykardia zatokowa",
    "Ciężka hipotensja, wstrząs kardiogenny",
    "Ciężka astma, POChP (względne ryzyko skurczu β2)",
    "Ostra zdekompensowana HFrEF (rozpoczynać tylko w stabilnym stanie)"
  ],
  "commonSideEffects": [
    "Bradykardia, hipotensja ortostatyczna, zmęczenie",
    "Zimne kończyny, objawy Raynauda",
    "Żywe sny, ryzyko depresji (umiarkowane)",
    "Ciężkie, rzadkie: skurcz oskrzeli przy utracie selektywności, maskowanie hipoglikemii u cukrzyków"
  ],
  "cyp450": [
    "CYP3A4, CYP2D6 substrate (mixed)",
    "No significant CYP inhibition"
  ],
  "crossMolInteractions": [
    "CCB non-DHP (werapamil, diltiazem): addytywność bradykardii + blok AV",
    "Klasyczne (digoksyna, amiodaron): addytywny efekt",
    "Insulina/doustny przeciwcukrzycowy: maskowanie objawów hipoglikemii"
  ],
  "benefits": [
    "Śmiertelność HFrEF 34% redukcja względna (CIBIS-II)",
    "Wysoka selektywność β1 → mało działań płucnych/obwodowych",
    "Raz dziennie (dobry compliance)"
  ],
  "studies": [
    {
      "title": "The Cardiac Insufficiency Bisoprolol Study II (CIBIS-II)",
      "authors": "CIBIS-II Investigators.",
      "journal": "Lancet. 1999;353(9146):9-13.",
      "pmid": "9988345"
    },
    {
      "title": "Effect of carvedilol versus bisoprolol on heart failure outcomes",
      "authors": "Frommeyer G, Eckardt L.",
      "journal": "Eur Heart J. 2017;38(33):2624-2627.",
      "pmid": "28645164"
    }
  ],
  "related": [
    "ramipril",
    "amlodipine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tygodnie 1-2 (start HFrEF)",
        "dose": "1.25"
      },
      {
        "phase": "Standard nadciśnienia",
        "dose": "5"
      },
      {
        "phase": "Maks. dawka",
        "dose": "10"
      }
    ],
    "unit": "mg/nap",
    "note": "Rano. W HFrEF titracja 2 tyg./poziom dawki. Domowy monitor HR + BP. NIE przerywaj nagle (tachykardia z odbicia, niedokrwienie)."
  }
}
