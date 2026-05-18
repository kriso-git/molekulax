// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.621Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "apixaban",
  "name": "Apixaban",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Doustny antykoagulant bezpośredni (DOAC, BMS/Pfizer Eliquis). Inhibitor czynnika Xa. ARISTOTLE wykazało wyższość nad warfaryną w migotaniu przedsionków.",
  "description": "Apiksaban to selektywny, odwracalny inhibitor czynnika Xa (BMS/Pfizer Eliquis, FDA 2012). Interweniuje na poziomie aktywacji protrombiny w kaskadzie krzepnięcia, redukując generację trombiny. Badanie ARISTOTLE (Granger 2011 NEJM PMID 21870978) wykazało wyższość apiksabanu nad warfaryną w AF: 21% redukcja udaru + embolii, 31% poważnych krwawień, 11% śmiertelności ogólnej. Wśród DOAC apiksaban ma najniższe ryzyko krwawienia GI.",
  "mechanism": "Odwracalny konkurencyjny inhibitor czynnika Xa. Nie wymaga antytrombiny III jako kofaktora (vs LMWH).",
  "legalStatus": "UE/PL: na receptę (Eliquis). USA: FDA Rx.",
  "onsetTime": "3-4 h (peak), 2-4 days (steady-state)",
  "halfLife": "~12 h (twice-daily dosing)",
  "atcCode": "B01AF02",
  "prescriptionStatus": "Na receptę (Rx)",
  "indications": [
    "Migotanie przedsionków (AF) prewencja udaru + embolii",
    "Zakrzepica żył głębokich (DVT) + zatorowość płucna (PE) leczenie + prewencja",
    "Prewencja VTE po wymianie biodra/kolana"
  ],
  "contraindications": [
    "Aktywne klinicznie istotne krwawienie",
    "Mechaniczna zastawka serca (tylko warfaryna)",
    "Ciężka choroba wątroby (Child-Pugh C)"
  ],
  "commonSideEffects": [
    "Krwawienie (najważniejsze działanie, 2-4%/rok poważne)",
    "Nudności, ból głowy",
    "Ciężkie, rzadkie: krwawienie wewnątrzczaszkowe (nagłe, andeksanet alfa odwraca)"
  ],
  "cyp450": [
    "CYP3A4 substrate",
    "P-gp substrate"
  ],
  "crossMolInteractions": [
    "Silne podwójne inhibitory CYP3A4 + P-gp (ketokonazol, rytonawir): redukcja lub unikać",
    "Silne induktory CYP3A4 (ryfampicyna, fenytoina): efekt spada, unikać",
    "NSAID, aspiryna, antytrombotyczne: addytywne ryzyko krwawienia"
  ],
  "benefits": [
    "Lepsza niż warfaryna w AF (ARISTOTLE)",
    "Niższe krwawienie GI niż inne DOAC",
    "Brak monitorowania INR",
    "Andeksanet alfa jako odwracający dostępny przy krwawieniu"
  ],
  "studies": [
    {
      "title": "Apixaban versus warfarin in patients with atrial fibrillation (ARISTOTLE)",
      "authors": "Granger CB, Alexander JH, McMurray JJ et al.",
      "journal": "N Engl J Med. 2011;365(11):981-92.",
      "pmid": "21870978"
    },
    {
      "title": "Apixaban for treatment of acute venous thromboembolism (AMPLIFY)",
      "authors": "Agnelli G, Buller HR, Cohen A et al.",
      "journal": "N Engl J Med. 2013;369(9):799-808.",
      "pmid": "23808982"
    }
  ],
  "related": [
    "ramipril",
    "bisoprolol"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 2.5,
      "medium": 5,
      "high": 10
    },
    "unit": "mg 2x/nap",
    "note": "Standard AF: 5 mg 2x/dzień. Redukcja do 2,5 mg 2x/dzień przy 2 z 3: wiek ≥ 80, masa ≤ 60 kg, kreatynina ≥ 1,5 mg/dl. Ostre DVT/PE: 10 mg 2x/dzień przez 7 dni, potem 5 mg 2x/dzień. Niezależnie od jedzenia. NIE substytuowalny 1:1 z innymi DOAC."
  }
}
