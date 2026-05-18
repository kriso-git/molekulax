// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.613Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "empagliflozin",
  "name": "Empagliflozin",
  "image": null,
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Inhibitor SGLT2 (Jardiance), Boehringer Ingelheim/Eli Lilly. Lek kardio-renoprotekcyjny dla T2DM + HFrEF/HFpEF + CKD.",
  "description": "Empagliflozyna to selektywny inhibitor SGLT2 (kotransporter sodowo-glukozowy 2), blokujący reabsorpcję glukozy w proksymalnym kanaliku nerkowym, powodując utratę 60-90 g glukozy dziennie z moczem (glikozuria). Zatwierdzony przez FDA dla T2DM (2014), HFrEF (EMPEROR-Reduced 2020 PMID 32865377), HFpEF (EMPEROR-Preserved 2021 PMID 34449189) i CKD (EMPA-KIDNEY 2023 PMID 36331190). Badanie EMPA-REG OUTCOME (Zinman 2015 NEJM PMID 26378978) to pierwsze badanie SGLT2i z dodatnim MACE — wykazało 38% redukcję względnej śmiertelności CV w T2DM + ASCVD.",
  "mechanism": "Selektywne hamowanie SGLT2 (kotransporter sodowo-glukozowy 2) w proksymalnym kanaliku nerkowym. Rezultat: utrata 60-90 g glukozy/dzień z moczem, obniżając HbA1c mechanizmem niezależnym od insuliny. Efekty wtórne: diureza osmotyczna (redukcja BP), efekt na poziomie nefronu (spadek ciśnienia wewnątrzkłębuszkowego, ochrona CKD), łagodne podniesienie ketonów (kardioprotekcja).",
  "legalStatus": "UE/PL: na receptę (Jardiance, Synjardy = empagliflozyna + metformina). USA: FDA Rx.",
  "onsetTime": "1-2 weeks (BP, HbA1c)",
  "halfLife": "~12.4 h (once-daily dosing)",
  "atcCode": "A10BK03",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Cukrzyca typu 2, uzupełnienie metforminy lub samodzielnie",
    "Niewydolność serca (HFrEF + HFpEF, niezależnie od T2DM)",
    "Przewlekła choroba nerek (CKD, eGFR ≥ 20)"
  ],
  "contraindications": [
    "Ciężka niewydolność nerek (eGFR < 20 ml/min/1,73 m²)",
    "Wywiad cukrzycowej kwasicy ketonowej (ryzyko eu-DKA)",
    "Hipowolemia, sepsa"
  ],
  "commonSideEffects": [
    "Mikotyczne infekcje narządów płciowych (vulvovaginitis, balanitis, ~5-10%)",
    "Infekcje dróg moczowych (UTI, > 2-3% częstość)",
    "Hipowolemia, hipotensja (starsi, na diuretykach)",
    "Ciężkie, rzadkie: eu-DKA (glukoza może być < 250 mg/dl), zgorzel Fourniera (krocze, ostrzeżenie FDA)"
  ],
  "cyp450": [
    "Glucuronidation primary metabolism (UGT2B7, UGT1A3, UGT1A8, UGT1A9)",
    "No significant CYP interaction"
  ],
  "crossMolInteractions": [
    "Diuretyki (pętlowe, tiazydy): addytywna hipowolemia",
    "Insulina, sulfonylomoczniki: ryzyko hipoglikemii, redukcja dawki",
    "Metformina: synergistyczna (Synjardy stała kombinacja)"
  ],
  "benefits": [
    "Redukcja MACE 38% (EMPA-REG OUTCOME)",
    "Redukcja hospitalizacji i śmiertelności CV w HFrEF/HFpEF",
    "Redukcja progresji CKD (EMPA-KIDNEY)",
    "Utrata masy (~2-3 kg), redukcja BP (~3-5 mmHg)"
  ],
  "studies": [
    {
      "title": "Empagliflozin, cardiovascular outcomes, and mortality in T2DM (EMPA-REG OUTCOME)",
      "authors": "Zinman B, Wanner C, Lachin JM et al.",
      "journal": "N Engl J Med. 2015;373(22):2117-28.",
      "pmid": "26378978"
    },
    {
      "title": "Cardiovascular and renal outcomes with empagliflozin in heart failure (EMPEROR-Reduced)",
      "authors": "Packer M, Anker SD, Butler J et al.",
      "journal": "N Engl J Med. 2020;383(15):1413-1424.",
      "pmid": "32865377"
    },
    {
      "title": "Empagliflozin in heart failure with a preserved ejection fraction (EMPEROR-Preserved)",
      "authors": "Anker SD, Butler J, Filippatos G et al.",
      "journal": "N Engl J Med. 2021;385(16):1451-1461.",
      "pmid": "34449189"
    },
    {
      "title": "Empagliflozin in patients with chronic kidney disease (EMPA-KIDNEY)",
      "authors": "EMPA-KIDNEY Collaborative Group.",
      "journal": "N Engl J Med. 2023;388(2):117-127.",
      "pmid": "36331190"
    }
  ],
  "related": [
    "metformin",
    "semaglutide"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 10,
      "medium": 10,
      "high": 25
    },
    "unit": "mg/nap",
    "note": "Standard 10 mg/dzień rano, do 25 mg/dzień dla celu HbA1c. Wskazanie HFrEF/HFpEF stała 10 mg/dzień, brak eskalacji. eGFR < 30: redukcja dawki lub odstawienie. Niezależne od jedzenia."
  }
}
