// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.619Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "methylphenidate",
  "name": "Methylphenidate",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Inhibitor DAT/NET stymulant, lek pierwszej linii ADHD Rx (Novartis Ritalin, Janssen Concerta). DEA Schedule II, znaczący potencjał nadużywania.",
  "description": "Metylofenidat to psychostymulant zsyntetyzowany w 1944, zatwierdzony w 1954 dla nadaktywności dziecięcej, od lat 90. lek pierwszej linii ADHD. Hamowanie wychwytu DAT i NET podnosi synaptyczną dopaminę i norepinefrynę w korze przedczołowej, poprawiając funkcję wykonawczą (uwaga, kontrola impulsów, pamięć robocza) w ADHD. DEA Schedule II (USA), odpowiednie zaostrzenie Rx. Formy IR (Ritalin, 3-5 h) i ER/OROS (Concerta 10-12 h). Badanie MTA (1999 JAMA, 14-miesięczna obserwacja) wykazało wyższość kombinacji stymulant + terapia behawioralna. Potencjał nadużywania: pokruszony-wdychany lub iv. daje euforię typu amfetaminowego, stąd preferowane formy XR.",
  "mechanism": "Hamowanie wychwytu DAT (transporter dopaminy) i NET (transporter norepinefryny). Różni się od amfetaminy: metylofenidat \"tylko\" hamuje, nie odwraca transportera (amfetamina powoduje uwolnienie DA na poziomie VMAT2, stąd silniejsza euforia).",
  "legalStatus": "UE/PL: na receptę, regulacja jako lek kontrolowany (Ritalin, Concerta, Medikinet). USA: DEA Schedule II.",
  "onsetTime": "IR: 30-45 min; ER/OROS: 1-2 h; effect lasts 3-5 h (IR), 10-12 h (Concerta OROS)",
  "halfLife": "IR: 3-5 h; ER/OROS: 6-8 h (effective duration 10-12 h via osmotic delivery)",
  "atcCode": "N06BA04",
  "prescriptionStatus": "Na receptę (Rx), DEA Schedule II (USA), PL recepta narkotyczna",
  "indications": [
    "ADHD (dziecko 6+ lat, młodzież, dorośli)",
    "Narkolepsja (druga linia po modafinilu)"
  ],
  "contraindications": [
    "MAOi w ciągu 14 dni (przełom nadciśnieniowy)",
    "Ciężka choroba CV (przerost LV, ciężkie nadciśnienie, niewydolność wieńcowa)",
    "Nadczynność tarczycy, jaskra z zamykającym się kątem",
    "Aktywne uzależnienie, wywiad objawów psychotycznych (względne)"
  ],
  "commonSideEffects": [
    "Zmniejszony apetyt (~30%), utrata wagi, łagodne spowolnienie wzrostu u dzieci",
    "Bezsenność (unikaj późnego dawkowania), wzrost lęku, drażliwość",
    "Tachykardia, wzrost BP (umiarkowane)",
    "Ciężkie, rzadkie: reakcja psychotyczna (nowa), zdarzenie kardiologiczne, zespół Raynauda (przewlekły), priapizm"
  ],
  "cyp450": [
    "Minimal CYP metabolism (de-esterification by CES1A1)",
    "No major CYP interactions"
  ],
  "crossMolInteractions": [
    "MAOi: BEZWZGLĘDNE przeciwwskazanie",
    "Beta-bloker: ekstremalna reakcja hipertenzyjna, unikać kombinacji",
    "Efekt leków przeciwnadciśnieniowych może spaść",
    "Alkohol: zwiększone ryzyko CV, unikać"
  ],
  "benefits": [
    "Objawy ADHD (uwaga, kontrola impulsów, pamięć robocza) znacznie się poprawiają",
    "Formuła OROS (Concerta) 12-godzinny efekt, idealna dla dnia szkolnego",
    "Badanie MTA: lepsza z kombinacją terapii behawioralnej"
  ],
  "studies": [
    {
      "title": "A 14-month randomized clinical trial of treatment strategies for ADHD (MTA Cooperative Group)",
      "authors": "MTA Cooperative Group.",
      "journal": "Arch Gen Psychiatry. 1999;56(12):1073-86.",
      "pmid": "10591283"
    },
    {
      "title": "Methylphenidate for attention deficit hyperactivity disorder (ADHD) in children and adolescents",
      "authors": "Storebø OJ, Pedersen N, Ramstad E et al.",
      "journal": "Cochrane Database Syst Rev. 2018;5:CD012069.",
      "pmid": "29744873"
    },
    {
      "title": "Long-term safety of methylphenidate in children with ADHD",
      "authors": "Vitiello B, Severe JB, Greenhill LL et al.",
      "journal": "J Am Acad Child Adolesc Psychiatry. 2008;47(8):860-9.",
      "pmid": "18596553"
    }
  ],
  "related": [
    "modafinil",
    "bupropion"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tydzień 1 (start, IR)",
        "dose": "5"
      },
      {
        "phase": "Tydzień 2 (IR 2-3x/dzień)",
        "dose": "10"
      },
      {
        "phase": "Concerta XR (cel dorosły)",
        "dose": "36"
      },
      {
        "phase": "Maks. dawka (dorosły)",
        "dose": "72"
      }
    ],
    "unit": "mg/nap",
    "note": "IR: 5-10 mg 2-3x/dzień rano-południe (NIE po 16:00, ryzyko bezsenności). Concerta OROS: raz dziennie rano, 18-72 mg, maks. 72 mg/dzień dorosły. Ścisły monitoring Rx z powodu potencjału nadużywania. Roczna kontrola wzrostu i BP."
  }
}
