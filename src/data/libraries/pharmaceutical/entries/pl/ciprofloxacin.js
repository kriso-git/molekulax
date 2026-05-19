// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.624Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "ciprofloxacin",
  "name": "Ciprofloxacin",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#06b6d4",
  "tagColor": "rgba(6,182,212,0.18)",
  "shortDesc": "Antybiotyk fluorochinolonowy (Bayer Cipro). UTI, GI + złożone infekcje Gram-ujemne. Ostrzeżenie FDA boxed: zerwania ścięgien + neuropatia obwodowa.",
  "description": "Cyprofloksacyna to prototyp klasy fluorochinolonów (Bayer Cipro, FDA 1987). Bakteriobójcza przez hamowanie gyrazy DNA i topoizomerazy IV. Silna aktywność Gram-ujemna (E. coli, Pseudomonas, Klebsiella), umiarkowana Gram-dodatnia. OSTRZEŻENIE FDA 2016/2018 BOXED: zerwania ścięgien, neuropatia obwodowa, działania mentalne (dezorientacja, delirium), tętniak aorty. Ze względu na stewardship antybiotykowy NIE pierwsza linia dla łagodnego UTI — typowe wskazania: powikłany UTI, zapalenie prostaty, niesilne ostre zapalenie zatok, infekcje GI (Salmonella, Shigella). Ponowna ocena FDA + EMA 2019 ściśle ogranicza stosowanie fluorochinolonów.",
  "mechanism": "Selektywne hamowanie gyrazy DNA (topoizomeraza II) i topoizomerazy IV → blok replikacji i transkrypcji DNA → bakteriobójcze.",
  "legalStatus": "UE/PL: na receptę (Ciprobay, Ciprinol, generyki). USA: FDA Rx (Cipro).",
  "bioavailability": "~70% (doustnie tabletka, niezależnie od pokarmu — etykieta FDA Cipro)",
  "onsetTime": "24-48 h (clinical response)",
  "halfLife": "~4 h (twice-daily dosing)",
  "atcCode": "J01MA02",
  "prescriptionStatus": "Na receptę (Rx), protokół stewardship",
  "indications": [
    "Powikłany UTI, odmiedniczkowe zapalenie nerek, prostaty",
    "Infekcje GI (Salmonella, Shigella, biegunka podróżnych)",
    "Infekcje kości i tkanek miękkich (Pseudomonas)",
    "Po-ekspozycyjne wąglik (protokół CDC)"
  ],
  "contraindications": [
    "Nadwrażliwość na fluorochinolony",
    "Dzieci/młodzież (ryzyko wzrostu kości, oprócz specyficznych wskazań)",
    "Miastenia gravis (względne)"
  ],
  "commonSideEffects": [
    "GI: nudności, biegunka, dyskomfort",
    "Ból głowy, zawroty głowy, bezsenność",
    "Ciężkie: ZERWANIE ŚCIĘGNA (Achillesa, FDA boxed, zwłaszcza 60+ + sterydy), NEUROPATIA OBWODOWA (nieodwracalna), DZIAŁANIA MENTALNE (dezorientacja, psychoza), TĘTNIAK AORTY, zapalenie C. diff, fotouczulenie"
  ],
  "cyp450": [
    "CYP1A2 INHIBITOR (significant)",
    "Caffeine, theophylline, tizanidine interactions"
  ],
  "crossMolInteractions": [
    "Tyzanidyna: BEZWZGLĘDNE przeciwwskazanie (blok CYP1A2 ekstremalna hipotensja + sedacja)",
    "Teofilina, kofeina: poziom może wzrosnąć, toksyczność",
    "Warfaryna: wzrost INR",
    "Antacyd (Al, Mg, Ca), żelazo: wymagany 2-godzinny odstęp (chelatacja)"
  ],
  "benefits": [
    "Silna aktywność Pseudomonas (powikłany UTI, infekcja kości)",
    "Biodostępność doustna ~70% (równoważna IV)",
    "Standard CDC po ekspozycji na wąglik"
  ],
  "studies": [
    {
      "title": "Fluoroquinolones and the risk of aortic aneurysm or aortic dissection",
      "authors": "Pasternak B, Inghammar M, Svanström H.",
      "journal": "BMJ. 2018;360:k678.",
      "pmid": "29519881"
    },
    {
      "title": "FDA boxed warnings for fluoroquinolones: safety review",
      "authors": "Tanne JH.",
      "journal": "BMJ. 2018;363:k4934.",
      "pmid": "30459112"
    },
    {
      "title": "Ciprofloxacin in complicated urinary tract infections",
      "authors": "Wagenlehner FM, Naber KG.",
      "journal": "Int J Antimicrob Agents. 2004;24 Suppl 1:S1-3.",
      "pmid": "15364298"
    }
  ],
  "related": [
    "amoxicillin",
    "doxycycline"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 250,
      "medium": 500,
      "high": 750
    },
    "unit": "mg 2x/nap",
    "note": "Łagodny UTI: 250 mg 2x/dzień 3 dni. Powikłany UTI: 500 mg 2x/dzień 7-14 dni. Infekcja kości/ciężka: 750 mg 2x/dzień 4-6 tygodni. Nawodnienie, unikać solarium. Objawy ostrzegawcze ścięgna (kostka/Achilles) NATYCHMIAST STOP."
  }
}
