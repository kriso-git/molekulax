// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.615Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "acarbose",
  "name": "Acarbose",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Inhibitor alfa-glukozydazy, Bayer Glucobay. Redukcja glukozy poposiłkowej, popularna głównie w populacjach azjatyckich T2DM.",
  "description": "Akarboza to pseudotetrasacharyd, który konkurencyjnie hamuje enzym alfa-glukozydazy na rąbku szczoteczkowym jelita cienkiego, spowalniając hydrolizę węglowodanów i wchłanianie glukozy. To zmniejsza piki glukozy poposiłkowej. Poza UKPDS kluczowe dowody to badanie STOP-NIDDM (Chiasson 2002 Lancet PMID 12086760) wykazujące 25% redukcję progresji prediabetes do T2DM. Akarboza nie jest ogólnoustrojowa (aktywna tylko jelitowo), więc ryzyko hipoglikemii w monoterapii jest praktycznie zerowe. Obecnie popularna głównie w Azji (Chiny, Japonia), gdzie dieta wysokowęglowodanowa czyni zarządzanie glukozą poposiłkową istotne klinicznie.",
  "mechanism": "Konkurencyjne hamowanie enzymu alfa-glukozydazy (sukraza, maltaza, glukoamylaza) na rąbku szczoteczkowym jelita. Rezultat: złożone węglowodany rozkładają się do glukozy wolniej, obniżając i opóźniając pik glukozy poposiłkowej.",
  "legalStatus": "UE/PL: na receptę (Glucobay). USA: FDA Rx (Precose).",
  "bioavailability": "<2% (doustnie, substancja czynna — etykieta FDA Precose; ~35% całkowitej radioaktywności)",
  "onsetTime": "Acute (per-meal effect), 4-8 weeks (HbA1c)",
  "halfLife": "~2 h (minimally absorbed, mostly bowel-active)",
  "atcCode": "A10BF01",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Cukrzyca typu 2, zarządzanie glukozą poposiłkową",
    "Stan przedcukrzycowy (redukcja progresji T2DM, dowody STOP-NIDDM)"
  ],
  "contraindications": [
    "Przewlekła choroba jelit (IBD, wrzodziejące zapalenie jelita)",
    "Dysfunkcja brzucha, predyspozycja do niedrożności jelit",
    "Ciężka niewydolność nerek (eGFR < 25)"
  ],
  "commonSideEffects": [
    "GI: wzdęcia (30-60%), uczucie pełności, biegunka (zalecana powolna eskalacja)",
    "Ciężkie, rzadkie: podwyższone enzymy wątrobowe (ALT > 3x ULN), pneumatosis intestinalis"
  ],
  "cyp450": [
    "Minimally absorbed (<2%)",
    "No CYP metabolism"
  ],
  "crossMolInteractions": [
    "Insulina, sulfonylomoczniki: w hipoglikemii TYLKO glukoza (NIE sacharoza/maltoza) daje szybki wzrost",
    "Digoksyna: poziom w osoczu może spaść, monitor"
  ],
  "benefits": [
    "Redukcja HbA1c 0,5-1,0% (umiarkowana, skoncentrowana na poposiłkowej)",
    "Neutralna dla wagi (vs przyrost masy przy sulfonylomocznikach)",
    "Zerowe ryzyko hipoglikemii w monoterapii",
    "STOP-NIDDM: prewencja T2DM w stanie przedcukrzycowym"
  ],
  "studies": [
    {
      "title": "Acarbose for prevention of type 2 diabetes mellitus (STOP-NIDDM)",
      "authors": "Chiasson JL, Josse RG, Gomis R et al.",
      "journal": "Lancet. 2002;359(9323):2072-7.",
      "pmid": "12086760"
    },
    {
      "title": "Acarbose vs metformin in newly-diagnosed T2DM Chinese patients (MARCH)",
      "authors": "Yang W, Liu J, Shan Z et al.",
      "journal": "Lancet Diabetes Endocrinol. 2014;2(1):46-55.",
      "pmid": "24622668"
    },
    {
      "title": "Acarbose cardiovascular evaluation (ACE) in patients with coronary heart disease",
      "authors": "Holman RR, Coleman RL, Chan JCN et al.",
      "journal": "Lancet Diabetes Endocrinol. 2017;5(11):877-886.",
      "pmid": "28917545"
    }
  ],
  "related": [
    "metformin"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Tygodnie 1-2 (start)",
        "dose": "25"
      },
      {
        "phase": "Tygodnie 3-4",
        "dose": "50"
      },
      {
        "phase": "Cel (3x/dzień)",
        "dose": "100"
      }
    ],
    "unit": "mg étkezésenként",
    "note": "Przyjmuj na POCZĄTKU posiłku (z pierwszym kęsem). Powolna titracja dla tolerancji GI. Leczenie hipoglikemii: TYLKO czysta glukoza (NIE sacharoza/maltoza) podnosi cukier pod akarbozą."
  }
}
