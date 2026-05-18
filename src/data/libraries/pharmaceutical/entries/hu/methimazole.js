// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.579Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "methimazole",
  "name": "Methimazole",
  "image": null,
  "accentColor": "#f59e0b",
  "tagColor": "rgba(245,158,11,0.18)",
  "shortDesc": "Antithyroid szer (Thiamazol, Merck), Graves-betegség és hipertireózis első-vonal kezelése. A pajzsmirigy peroxidáz-enzimet gátolja.",
  "description": "A Methimazole (USA-ban Tapazole, EU-ban Thiamazol) a hipertireózis első-vonal gyógyszere. A pajzsmirigy peroxidáz-enzim (TPO) szelektív gátlása révén csökkenti a T3/T4-szintézist. Cooper 2005 (NEJM review PMID 15703424) szerint Graves-betegségben a 18-24 hónapos kezelés ~50%-os remisszió-rátát ad. Mellékhatás-profil: enyhe gyakran (bőrkiütés, hányinger), súlyos ritka (agranulocitózis 0,2-0,5%, hepatotoxicitás). A Propylthiouracil (PTU) régebbi alternatíva, de hepatotoxicitás miatt csak terhesség első trimeszterében első választás (a Methimazole-aplázia kicsi, de létezik).",
  "mechanism": "Pajzsmirigy peroxidáz (TPO) szelektív gátlása → tirozin-jodinálás blokk → T3/T4-szintézis csökkenés. NEM gátolja a preformált hormon felszabadulását (késleltetett hatás 2-4 hét).",
  "legalStatus": "EU/HU: vényköteles (Thyrozol, Metizol). USA: FDA Rx (Tapazole).",
  "bioavailability": "~93% (orális, \"readily absorbed\" — FDA Tapazole label)",
  "onsetTime": "2-4 weeks (T3/T4 reduction, since preformed stores deplete)",
  "halfLife": "4-6 h (but pharmacodynamic effect longer due to thyroid concentration)",
  "atcCode": "H03BB02",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Graves-betegség (autoimmun hipertireózis) első-vonal",
    "Toxikus multinoduláris struma, toxikus adenoma",
    "Tireoid-műtét vagy radioiod-terápia előkészítése (eutireoiddá tétel)"
  ],
  "contraindications": [
    "Korábbi súlyos hematológiai vagy hepatikus mellékhatás",
    "Terhesség első trimeszter (PTU preferált, Methimazole-aplázia-kockázat)"
  ],
  "commonSideEffects": [
    "Bőrkiütés (3-5%, dóziseffekt)",
    "GI: hányinger, hányás, ízzavar",
    "Súlyos, ritka: agranulocitózis (0,2-0,5%, láz/torokgyulladás esetén AZONNAL CBC), hepatotoxicitás (ritkább mint PTU-nál), vasculitis (ANCA-pozitív)"
  ],
  "cyp450": [
    "Hepatic metabolism (multiple pathways)",
    "CYP-dependence minor"
  ],
  "crossMolInteractions": [
    "Warfarin: hatás csökkenése (a hipertireózis okozta felgyorsult metabolizmus eltűnik)",
    "Béta-blokkoló (Propranolol, Bisoprolol): hipertireózis-tüneti kontroll a Methimazole-hatás kifejlődéséig"
  ],
  "benefits": [
    "Graves-betegségben 50%-os remisszió 18-24 hónap után",
    "PTU-hoz képest hepatotoxicitás kisebb",
    "Napi egyszeri vagy kétszeri adagolás"
  ],
  "studies": [
    {
      "title": "Hyperthyroidism: a review (Cooper 2005)",
      "authors": "Cooper DS.",
      "journal": "N Engl J Med. 2005;352(9):905-17.",
      "pmid": "15745981"
    },
    {
      "title": "Methimazole vs propylthiouracil pregnancy outcomes",
      "authors": "Andersen SL, Olsen J, Wu CS et al.",
      "journal": "J Clin Endocrinol Metab. 2013;98(11):4373-81.",
      "pmid": "24151287"
    }
  ],
  "related": [
    "levothyroxin",
    "liothyronine"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Enyhe hipertireózis (start)",
        "dose": "5"
      },
      {
        "phase": "Mérsékelt eset",
        "dose": "15"
      },
      {
        "phase": "Súlyos eset (max)",
        "dose": "30"
      }
    ],
    "unit": "mg/nap",
    "note": "Indító dózis 10-30 mg/nap súlyosság szerint, 1-2x/nap. 4-6 hét után TSH + free T4 kontroll, ezután fenntartó dózis 5-10 mg/nap. Láz vagy torokgyulladás esetén AZONNAL CBC + abbahagyás (agranulocitózis)."
  }
}
