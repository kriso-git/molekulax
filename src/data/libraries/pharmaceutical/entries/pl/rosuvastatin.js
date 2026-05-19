// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.619Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "rosuvastatin",
  "name": "Rosuvastatin",
  "image": "/pharmaceutical/blister-pink-small.png",
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Hydrofilna statyna o wysokiej intensywności (AstraZeneca Crestor). JUPITER ustanowił prewencję pierwotną ASCVD nawet przy podwyższonym CRP. Mało interakcji CYP.",
  "description": "Rozuwastatyna to hydrofilna inhibitor reduktazy HMG-CoA (AstraZeneca Crestor, FDA 2003). Najmocniejsza statyna pod względem intensywności — 40 mg/dzień daje ~60-63% redukcję LDL (vs atorwastatyna 80 mg ~55%). Badanie JUPITER (Ridker 2008 NEJM PMID 18997196) ustanowiło prewencję pierwotną ASCVD u pacjentów z podwyższonym CRP, normo-LDL. Mniej CYP-zaangażowana niż atorwastatyna (głównie CYP2C9, mały CYP3A4), mniej interakcji. Profil działań podobny do innych statyn.",
  "mechanism": "Hydrofilne konkurencyjne hamowanie reduktazy HMG-CoA. Wyższa potencja, mniej efektów plejotropowych. Redukcja CRP nawet przy normo-LDL.",
  "legalStatus": "UE/PL: na receptę (Crestor, Roswera, generyki). USA: FDA Rx.",
  "bioavailability": "~20% (doustnie — etykieta FDA Crestor)",
  "onsetTime": "1-2 weeks (lipid), 4 weeks (steady-state LDL)",
  "halfLife": "19 h (once-daily, any time)",
  "atcCode": "C10AA07",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Pierwotna hipercholesterolemia, FH",
    "Wtórna prewencja ASCVD",
    "Prewencja pierwotna z podwyższonym CRP (na podstawie JUPITER)"
  ],
  "contraindications": [
    "Aktywna choroba wątroby, ciąża, karmienie",
    "Ciężka niewydolność nerek (eGFR < 30 — dla dawki 40 mg)"
  ],
  "commonSideEffects": [
    "Ból mięśni (3-5%), wzrost ALT/AST (1-2%)",
    "Lekko zwiększone ryzyko nowej T2DM",
    "Ciężkie, rzadkie: rabdomioliza (proteinuria + krwiomocz przy 40 mg częstsze niż inne statyny)"
  ],
  "cyp450": [
    "CYP2C9 substrate (minor)",
    "OATP1B1 substrate (significant)",
    "Less CYP3A4-dependent than atorvastatin"
  ],
  "crossMolInteractions": [
    "Cyklosporyna: 7x wzrost AUC, przeciwwskazane powyżej 5 mg",
    "Gemfibrozyl: ryzyko rabdomiolizy, unikać",
    "Warfaryna: łagodny wzrost INR"
  ],
  "benefits": [
    "Najmocniejsza statyna (40 mg ~60-63% spadek LDL)",
    "Mniej interakcji CYP vs atorwastatyna",
    "JUPITER: prewencja ASCVD kierowana przez CRP"
  ],
  "studies": [
    {
      "title": "Rosuvastatin to prevent vascular events in men and women with elevated CRP (JUPITER)",
      "authors": "Ridker PM, Danielson E, Fonseca FA et al.",
      "journal": "N Engl J Med. 2008;359(21):2195-207.",
      "pmid": "18997196"
    },
    {
      "title": "Intensive lipid lowering with atorvastatin in coronary disease (TNT) reference",
      "authors": "LaRosa JC, Grundy SM, Waters DD et al.",
      "journal": "N Engl J Med. 2005;352(14):1425-35.",
      "pmid": "15755765"
    },
    {
      "title": "Efficacy and safety of cholesterol-lowering treatment (CTT)",
      "authors": "Baigent C, Blackwell L, Emberson J et al.",
      "journal": "Lancet. 2010;376(9753):1670-81.",
      "pmid": "21067804"
    }
  ],
  "related": [
    "atorvastatin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 5,
      "medium": 20,
      "high": 40
    },
    "unit": "mg/nap",
    "note": "Niska (5 mg ~38%): wrażliwy pacjent, start. Średnia (10-20 mg ~46-55%): standard. Wysoka (40 mg ~60-63%): FH lub wysokie ryzyko. Niezależnie od jedzenia."
  }
}
