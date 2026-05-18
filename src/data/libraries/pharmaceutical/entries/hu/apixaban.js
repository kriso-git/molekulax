// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.578Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "apixaban",
  "name": "Apixaban",
  "image": null,
  "accentColor": "#dc2626",
  "tagColor": "rgba(220,38,38,0.18)",
  "shortDesc": "Direkt orális antikoaguláns (DOAC, BMS/Pfizer Eliquis). Faktor Xa-inhibitor. ARISTOTLE-trial szerint pitvarfibrillációban warfarin-szuperior.",
  "description": "Az Apixaban egy szelektív, reverzibilis Faktor Xa-inhibitor (BMS/Pfizer Eliquis, FDA 2012). A koagulációs kaszkád protrombin-aktiválás-szintjén beavatkozik, ami trombin-képződést csökkenti. Az ARISTOTLE-trial (Granger 2011 NEJM PMID 21870978) szerint pitvarfibrillációban Apixaban szuperior a Warfarinhoz: 21% stroke + szisztémás embólia, 31% major vérzés, és 11% all-cause mortality csökkenés. Más DOAC-kal (Rivaroxaban, Dabigatran, Edoxaban) szemben az Apixabannak van a legalacsonyabb GI-vérzés-kockázata.",
  "mechanism": "Reverzibilis Faktor Xa kompetitív inhibitor. Nem igényel antitrombin-III-at kofaktorként (vs LMWH).",
  "legalStatus": "EU/HU: vényköteles (Eliquis). USA: FDA Rx.",
  "onsetTime": "3-4 h (peak), 2-4 days (steady-state)",
  "halfLife": "~12 h (twice-daily dosing)",
  "atcCode": "B01AF02",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Pitvarfibrilláció (AF) stroke + szisztémás embólia prevenció",
    "Mélyvénás trombózis (DVT) + pulmonalis embólia (PE) kezelés + prevenció",
    "Csípő/térd protézis-műtét utáni VTE-prevenció"
  ],
  "contraindications": [
    "Aktív klinikailag jelentős vérzés",
    "Mechanikus szívbillentyű (csak warfarin engedélyezett)",
    "Súlyos máj-betegség (Child-Pugh C)"
  ],
  "commonSideEffects": [
    "Vérzés (legjelentősebb mellékhatás, 2-4%/év major)",
    "Hányinger, fejfájás",
    "Súlyos, ritka: intracerebrális vérzés (sürgősségi, Andexanet alfa reverzál)"
  ],
  "cyp450": [
    "CYP3A4 substrate",
    "P-gp substrate"
  ],
  "crossMolInteractions": [
    "Erős kettős CYP3A4 + P-gp inhibitor (Ketoconazole, Ritonavir): dóziscsökkentés vagy kerülendő",
    "Erős CYP3A4-induktor (Rifampicin, Phenytoin): hatás csökken, kerülendő",
    "NSAID, aszpirin, antitrombotikum: additív vérzés-kockázat"
  ],
  "benefits": [
    "Warfarin-szuperior AF-ben (ARISTOTLE)",
    "Alacsonyabb GI-vérzés mint más DOAC-okon",
    "NEM igényel INR-monitorozást",
    "Andexanet alfa reverzál szer vérzéskor"
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
    "note": "AF standard: 5 mg 2x/nap. Dóziscsökkentés 2,5 mg 2x/nap, ha 2/3 kritérium: életkor ≥ 80, testtömeg ≤ 60 kg, kreatinin ≥ 1,5 mg/dl. DVT/PE akut: 10 mg 2x/nap 7 napig, majd 5 mg 2x/nap. Étkezéstől függetlenül. NEM helyettesíthető más DOAC-kal egy az egyben."
  }
}
