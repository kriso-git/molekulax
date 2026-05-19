// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.616Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "fluoxetine",
  "name": "Fluoxetine",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Pierwszy SSRI (Eli Lilly Prozac, FDA 1987). Ultra-długi okres półtrwania (4-6 dni), zatwierdzony przez FDA dla pediatrycznego MDD.",
  "description": "Fluoksetyna to pionier klasy SSRI (Eli Lilly Prozac, FDA 1987), pierwszy klinicznie udany lek selektywny dla serotoniny. Ultra-długa farmakokinetyka (lek macierzysty 4-6 dni, aktywny metabolit norfluoksetyna 4-16 dni) oznacza powolny steady-state (4-5 tygodni), ale łagodniejszy zespół odstawienny (auto-taper). JEDYNY SSRI z zatwierdzeniem FDA dla PEDIATRYCZNEGO MDD (wiek 8+), plus OCD i bulimia. Badanie Stark 2003 (PMID 14692046) udokumentowało skuteczność w pediatrycznym MDD. Generyczny, przystępny cenowo. Silny inhibitor CYP2D6 powodujący klinicznie istotne interakcje.",
  "mechanism": "Selektywne hamowanie SERT. Umiarkowany antagonizm 5-HT2C (może przyczyniać się do łagodnego aktywująco-nastrojowego efektu). Metabolit NORFLUOKSETYNA jest podobnie aktywny i farmakologicznie identyczny.",
  "legalStatus": "UE/PL: na receptę (Prozac, Fluctin, Floxet, generyki). USA: FDA Rx.",
  "bioavailability": "Nieokreślone bezwzględnie (brak postaci IV); 60-80% względem roztworu doustnego — etykieta FDA Prozac",
  "onsetTime": "4-6 weeks (full antidepressant response)",
  "halfLife": "4-6 days (parent); norfluoxetine 4-16 days",
  "atcCode": "N06AB03",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Duża depresja (MDD), w tym pediatryczne (8+ lat, JEDYNY SSRI z tym wskazaniem)",
    "Zaburzenie obsesyjno-kompulsyjne (OCD)",
    "Bulimia psychiczna",
    "Zaburzenie paniki, PMDD (marka Sarafem)"
  ],
  "contraindications": [
    "MAOi w ciągu 14 dni (lub 5 tygodni po odstawieniu fluoksetyny — długi okres półtrwania)",
    "Jednoczesny pimozyd, tiorydazyna"
  ],
  "commonSideEffects": [
    "GI: nudności, biegunka, zmniejszony apetyt (sprzyja utracie wagi, vs mirtazapina/paroksetyna)",
    "Bezsenność (częstsza niż przy innych SSRI, dawka rano)",
    "Dysfunkcje seksualne (15-30%)",
    "Ciężkie, rzadkie: zespół serotoninowy, myśli samobójcze < 25 lat (FDA boxed), SIADH, indukcja manii w BD"
  ],
  "cyp450": [
    "CYP2D6 STRONG INHIBITOR (clinically significant)",
    "CYP2C9, CYP3A4 inhibitor (moderate)",
    "CYP2D6, CYP2C9 substrate"
  ],
  "crossMolInteractions": [
    "MAOi: wymagana 5-TYGODNIOWA przerwa po odstawieniu fluoksetyny (długi okres półtrwania)",
    "Substraty CYP2D6 (kodeina, tamoksyfen, risperidon, atomoksetyna): poziom w osoczu może wzrosnąć, skuteczność tamoksyfenu spaść",
    "Warfaryna: częsty wzrost INR, monitor",
    "NSAID, antytrombotyczne: zwiększone ryzyko krwawienia GI"
  ],
  "benefits": [
    "Pediatryczne MDD zatwierdzone przez FDA (8+ lat, jedyny SSRI)",
    "Ultra-długi okres półtrwania → łagodny zespół odstawienny",
    "Bulimia nervosa zatwierdzona przez FDA",
    "Aktywujący profil, redukcja apetytu (dla depresji anergicznej)"
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
        "phase": "Tygodnie 1-2 (start)",
        "dose": "10"
      },
      {
        "phase": "Cel MDD",
        "dose": "20"
      },
      {
        "phase": "Cel OCD/bulimia",
        "dose": "40"
      },
      {
        "phase": "Maks. dawka",
        "dose": "80"
      }
    ],
    "unit": "mg/nap",
    "note": "Przyjmuj RANO (aktywujący profil, łagodzi bezsenność). Cel MDD 20 mg/dzień, OCD/bulimia 40-60 mg/dzień. Z powodu ultra-długiego okresu półtrwania steady-state po 4-5 tygodniach, przy odstawieniu ~5-tygodniowy auto-taper."
  }
}
