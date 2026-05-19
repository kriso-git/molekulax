// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.583Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "tamoxifen",
  "name": "Tamoxifen",
  "image": null,
  "accentColor": "#ec4899",
  "tagColor": "rgba(236,72,153,0.18)",
  "shortDesc": "Szelektív ösztrogén receptor modulátor (SERM). Hormonreceptor-pozitív emlőkarcinóma adjuváns és metastatikus kezelése (Nolvadex).",
  "description": "A Tamoxifen az első klinikailag jelentős SERM, amelyet az AstraZeneca fejlesztett ki (Nolvadex, FDA 1977). Az ER+ emlőkarcinóma adjuváns kezelésében 5-10 éves protokollal a relapszus-kockázatot 50%-kal csökkenti (EBCTCG 2011 Lancet PMID 21684593). Premenopausal nőknél az aromatáz-inhibítor (Anastrozole, Letrozole) nem hatékony, ezért a Tamoxifen az első-vonal SERM. Mellékhatás-profil: thromboembólia (DVT, PE 2-3x emelkedés), endometrium-karcinóma kockázat (~2x), menopausal-szerű tünetek (hőhullám). Az ER+ DCIS prevenció és magas-rizikójú primer prevenció FDA-jóváhagyott (NSABP-P1 trial).",
  "mechanism": "Tkivat-specifikus ösztrogén receptor moduláció: emlőszövetben ANTAGONISTA, csontban + endometriumban + májban PARCIÁLIS AGONISTA. Aktív metabolitok (4-hidroxitamoxifen, endoxifen) CYP2D6-tól függenek — gyenge metabolizálóknál csökkent hatékonyság.",
  "legalStatus": "EU/HU: vényköteles (Nolvadex, Tamoxen, generikus). USA: FDA Rx.",
  "bioavailability": "~100% (orális, \"well-absorbed\", Tmax ~5 óra — FDA Soltamox/Nolvadex label)",
  "onsetTime": "Klinikai válasz hónapok-évek (adjuváns)",
  "halfLife": "~7 days (parent); 14 days (4-hydroxytamoxifen)",
  "atcCode": "L02BA01",
  "prescriptionStatus": "Vényköteles (Rx), onkológus felügyelet",
  "indications": [
    "ER+ emlőkarcinóma adjuváns kezelés (premenopausal: 5-10 év)",
    "Metastatikus ER+ emlőkarcinóma",
    "DCIS post-műtéti prevenció",
    "Magas-rizikójú nők primer prevenció (NSABP-P1)"
  ],
  "contraindications": [
    "Terhesség (kategória D, fetális károsodás)",
    "Aktív thromboembólia (DVT, PE) vagy 1 éven belüli anamnézis",
    "Kezeletlen endometrium-hiperplázia"
  ],
  "commonSideEffects": [
    "Hőhullám, izzadás, hangulati labilis (menopausal-szerű tünetek 40-60%)",
    "Vaginalis kifolyás, irritáció",
    "GI: hányinger, hasi diszkomfort",
    "Súlyos: VENOSUS THROMBOEMBOLIZMUS (DVT/PE 2-3x), ENDOMETRIUM-KARCINÓMA (~2x), katarakta, hepatikus szteatózis, stroke"
  ],
  "cyp450": [
    "CYP2D6 substrate (CRITICAL for endoxifen formation)",
    "CYP3A4 substrate",
    "Poor CYP2D6 metabolizers have reduced efficacy"
  ],
  "crossMolInteractions": [
    "ERŐS CYP2D6-inhibitor (Fluoxetine, Paroxetine, Bupropion): endoxifen-képződés csökken, Tamoxifen-hatékonyság ROMLIK — kerülendő, alternatív AD (Venlafaxine, Citalopram)",
    "Warfarin: INR-emelkedés (interakció), monitor",
    "Hormon-pótlás (HRT) ösztrogén: kerülendő (mechanikai konfliktus)"
  ],
  "benefits": [
    "ER+ emlőkarcinóma relapszus-csökkentés 50%",
    "Csont-protektív (premenopausal nőkben)",
    "Primer prevenció magas-rizikójú nőkben (NSABP-P1)"
  ],
  "studies": [
    {
      "title": "Relevance of breast cancer hormone receptors and outcomes of 5 years of tamoxifen (EBCTCG)",
      "authors": "Early Breast Cancer Trialists' Collaborative Group.",
      "journal": "Lancet. 2011;378(9793):771-84.",
      "pmid": "21802721"
    },
    {
      "title": "Tamoxifen for prevention of breast cancer (NSABP-P1)",
      "authors": "Fisher B, Costantino JP, Wickerham DL et al.",
      "journal": "J Natl Cancer Inst. 1998;90(18):1371-88.",
      "pmid": "9747868"
    },
    {
      "title": "CYP2D6 genotype and tamoxifen efficacy",
      "authors": "Goetz MP, Sangkuhl K, Guchelaar HJ et al.",
      "journal": "Clin Pharmacol Ther. 2018;103(5):770-777.",
      "pmid": "29385237"
    }
  ],
  "related": [
  ],
  "doseCalc": {
    "type": "warning",
    "warning": "A Tamoxifen az ONKOLÓGIAI HORMONÁLIS TERÁPIA pillére ER+ emlőkarcinómában. SZAKORVOSI (ONKOLÓGUS) FELÜGYELET KÖTELEZŐ. NEM ÖNÁLLÓ DÓZIS-KALKULÁTOR ezen az oldalon, mert: (1) a dózis (20 mg/nap) és a kúra-időtartam (5-10 év) onkológiai protokoll-döntés, beteg-specifikus; (2) VTE (DVT/PE) és ENDOMETRIUM-KARCINÓMA kockázat fokozása érdemi monitorozást igényel; (3) CYP2D6-genetikai státusz a hatékonyságot szignifikánsan befolyásolja — egyes betegnél genotípus-tesztelés indokolt; (4) ERŐS CYP2D6-inhibitor (Fluoxetine, Paroxetine, Bupropion) ELLENJAVASOLT — Tamoxifen-hatékonyság veszélyeztetése. Beszélj az onkológusoddal. Sürgősségi tünet (egyoldalú láb-duzzanat, légszomj-mellkasi fájdalom, vaginalis vérzés): AZONNALI ellátás."
  }
}
