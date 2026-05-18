// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.625Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "methotrexate",
  "name": "Methotrexate",
  "image": null,
  "accentColor": "#ec4899",
  "tagColor": "rgba(236,72,153,0.18)",
  "shortDesc": "Antymetabolit, inhibitor reduktazy dihydrofolianowej (DHFR). Niska dawka tygodniowo: reumatoidalne zapalenie stawów, łuszczyca. Wysoka: chemioterapia.",
  "description": "Metotreksat (MTX) to antymetabolit antyfolianowy (FDA 1953). Hamuje reduktazę dihydrofolianową (DHFR), blokując tworzenie tetrahydrofolianu, a tym samym syntezę DNA i proliferację komórek. Dwa bardzo różne obszary: (1) NISKA dawka tygodniowo doustnie/SC 7,5-25 mg — RA (złoty standard DMARD), łuszczyca, IBD, zapalenie naczyń ANCA; (2) WYSOKA dawka IV/dooponowo — białaczka, chłoniak, osteosarkoma, kosmówczak. Niskodawkowa MTX z suplementacją folianów (1-5 mg/dzień) dobrze tolerowana; wysokodawkowa onko-MTX wymaga OBOWIĄZKOWO rescue Leukoworyną, monitorowania poziomu i pogotowia nagłego.",
  "mechanism": "Hamowanie DHFR → niedobór tetrahydrofolianu → blok syntezy tymidylanu → hamowanie syntezy DNA. Wtórnie: hamowanie syntezy AICAR (akumulacja adenozyny, działanie przeciwzapalne przy niskiej dawce).",
  "legalStatus": "UE/PL: na receptę (Trexan, Metoject SC, Methotrexat Lederle, generyki). USA: FDA Rx. Wysokodawkowa onko-MTX podawana w szpitalu.",
  "bioavailability": "~60% (doustnie, dawki ≤30 mg/m² — etykieta FDA Trexall; spada przy wyższych dawkach)",
  "onsetTime": "6-12 weeks (RA clinical response)",
  "halfLife": "~3-10 h (highly variable)",
  "atcCode": "L01BA01 / L04AX03",
  "prescriptionStatus": "Na receptę (Rx), nadzór specjalisty (reumatolog / onkolog)",
  "indications": [
    "Reumatoidalne zapalenie stawów (RA, złoty standard DMARD)",
    "Łuszczyca, łuszczycowe zapalenie stawów",
    "IBD (Crohn), zapalenie naczyń ANCA (niska dawka)",
    "Ostra białaczka limfoblastyczna (ALL), chłoniak, osteosarkoma, kosmówczak (wysoka dawka)",
    "Konserwatywne leczenie ciąży pozamacicznej"
  ],
  "contraindications": [
    "Ciąża i karmienie piersią (kategoria X FDA, abortifaciens)",
    "Ciężka niewydolność wątroby lub nerek",
    "Aktywne zaburzenie hematologiczne",
    "Aktywna infekcja układowa",
    "Nadużywanie alkoholu (addytywna hepatotoksyczność)"
  ],
  "commonSideEffects": [
    "GI: nudności, zapalenie jamy ustnej, biegunka (suplementacja folianami łagodzi)",
    "Hepatotoksyczność (przewlekła, addytywna z alkoholem)",
    "Mielosupresja (szpik: leukopenia, trombocytopenia, anemia)",
    "Ciężkie: toksyczność płucna (zapalenie płuc), podatność na infekcje, włóknienie wątroby, ostre uszkodzenie nerek przy wysokiej dawce"
  ],
  "cyp450": [
    "Not CYP-metabolized (folate pathway antagonism)",
    "Renal excretion (90% unchanged)"
  ],
  "crossMolInteractions": [
    "NSAID (aspiryna, ibuprofen): zmniejszony klirens nerkowy, wzrost toksyczności MTX",
    "Trymetoprym/sulfametoksazol (Bactrim): ryzyko pancytopenii (addytywność folianów)",
    "Inhibitor pompy protonowej (PPI): zmniejszony klirens MTX, ZAKAZANY przy wysokodawkowej",
    "Szczepionka żywa: przeciwwskazana podczas immunosupresji",
    "FOLIANY (kwas foliowy 5-10 mg/tydz lub folinowy): OBOWIĄZKOWE dla łagodzenia toksyczności niskodawkowej"
  ],
  "benefits": [
    "Złoty standard DMARD w RA, skuteczny i tani",
    "Ratuje życie w onkologii (ALL dziecięce, kosmówczak)",
    "Długoterminowe dane (70+ lat)"
  ],
  "studies": [
    {
      "title": "EULAR recommendations for the management of rheumatoid arthritis",
      "authors": "Smolen JS, Landewé RBM, Bergstra SA et al.",
      "journal": "Ann Rheum Dis. 2023;82(1):3-18.",
      "pmid": "36357155"
    },
    {
      "title": "Methotrexate in cancer chemotherapy: clinical use and mechanism",
      "authors": "Tian H, Cronstein BN.",
      "journal": "Bull NYU Hosp Jt Dis. 2007;65(3):168-73.",
      "pmid": "17922666"
    },
    {
      "title": "Folate supplementation reduces methotrexate adverse effects",
      "authors": "Shea B, Swinden MV, Tanjong Ghogomu E et al.",
      "journal": "Cochrane Database Syst Rev. 2013;(5):CD000951.",
      "pmid": "23728635"
    }
  ],
  "related": [
    "tamoxifen",
    "hydrocortisone"
  ],
  "doseCalc": {
    "type": "warning",
    "warning": "Metotreksat to lek poziomu ONKO- I AUTOIMMUNOLOGICZNEGO, którego NIE WOLNO STOSOWAĆ bez NADZORU specjalisty (reumatologa lub onkologa). BRAK KALKULATORA DAWEK na tej stronie, ponieważ: (1) niska dawka (tygodniowo 7,5-25 mg) i wysoka (onko 100-12000 mg/m²) różnią się 100-1000x — pomylenie może być ŚMIERTELNE; (2) SUPLEMENTACJA KWASEM FOLIOWYM (5-10 mg/tydz.) OBOWIĄZKOWA przy tygodniowej MTX; (3) kategoria X FDA (abortifaciens) — BEZWZGLĘDNIE zakazany w ciąży; (4) interakcje NSAID, Bactrim, PPI znaczące. Porozmawiaj z reumatologiem lub onkologiem. Objawy nagłe (gorączka, zapalenie jamy ustnej, duszność, krwiomocz, smolisty stolec): NATYCHMIASTOWA opieka."
  }
}
