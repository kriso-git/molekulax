// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.625Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "tamoxifen",
  "name": "Tamoxifen",
  "image": null,
  "accentColor": "#ec4899",
  "tagColor": "rgba(236,72,153,0.18)",
  "shortDesc": "Selektywny modulator receptora estrogenowego (SERM). Leczenie uzupełniające i przerzutowe HR-dodatniego raka piersi (Nolvadex).",
  "description": "Tamoksyfen to pierwszy klinicznie znaczący SERM, opracowany przez AstraZeneca (Nolvadex, FDA 1977). W leczeniu uzupełniającym ER+ raka piersi z protokołem 5-10-letnim zmniejsza ryzyko nawrotu o 50% (EBCTCG 2011 Lancet PMID 21684593). U kobiet przedmenopauzalnych inhibitory aromatazy (anastrozol, letrozol) nieskuteczne, więc tamoksyfen jest pierwszą linią SERM. Profil działań: zakrzepica (DVT, PE 2-3x wzrost), ryzyko raka endometrium (~2x), objawy menopauzopodobne. Prewencja DCIS i pierwotna wysokiego ryzyka zatwierdzona FDA (NSABP-P1).",
  "mechanism": "Tkanowo-specyficzna modulacja: ANTAGONISTA w piersi, CZĘŚCIOWY AGONISTA w kościach + endometrium + wątrobie. Aktywne metabolity (4-hydroksytamoksyfen, endoksyfen) zależne od CYP2D6 — słabi metabolizatorzy mają zmniejszoną skuteczność.",
  "legalStatus": "UE/PL: na receptę (Nolvadex, Tamoxen, generyki). USA: FDA Rx.",
  "onsetTime": "Klinikai válasz hónapok-évek (adjuváns)",
  "halfLife": "~7 days (parent); 14 days (4-hydroxytamoxifen)",
  "atcCode": "L02BA01",
  "prescriptionStatus": "Na receptę (Rx), nadzór onkologa",
  "indications": [
    "ER+ rak piersi leczenie uzupełniające (przedmenopauzalne: 5-10 lat)",
    "Przerzutowy ER+ rak piersi",
    "Profilaktyka po-operacyjna DCIS",
    "Pierwotna prewencja u wysokiego ryzyka (NSABP-P1)"
  ],
  "contraindications": [
    "Ciąża (kategoria D, uszkodzenie płodu)",
    "Aktywna zakrzepica (DVT, PE) lub wywiad < 1 rok",
    "Nieleczona przerost endometrium"
  ],
  "commonSideEffects": [
    "Uderzenia gorąca, pocenie, chwiejność nastroju (40-60%)",
    "Wydzielina pochwowa, podrażnienie",
    "GI: nudności, dyskomfort",
    "Ciężkie: ZAKRZEPICA ŻYLNA (DVT/PE 2-3x), RAK ENDOMETRIUM (~2x), zaćma, stłuszczenie wątroby, udar"
  ],
  "cyp450": [
    "CYP2D6 substrate (CRITICAL for endoxifen formation)",
    "CYP3A4 substrate",
    "Poor CYP2D6 metabolizers have reduced efficacy"
  ],
  "crossMolInteractions": [
    "SILNE inhibitory CYP2D6 (fluoksetyna, paroksetyna, bupropion): zmniejszone tworzenie endoksyfenu, POGORSZA skuteczność — unikać, alternatywy (wenlafaksyna, citalopram)",
    "Warfaryna: wzrost INR, monitor",
    "Substytucja hormonalna (HRT) estrogen: unikać (konflikt mechanistyczny)"
  ],
  "benefits": [
    "Redukcja nawrotu ER+ raka piersi o 50%",
    "Ochrona kości (u kobiet przedmenopauzalnych)",
    "Pierwotna prewencja u wysokiego ryzyka (NSABP-P1)"
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
    "methotrexate"
  ],
  "doseCalc": {
    "type": "warning",
    "warning": "Tamoksyfen to filar HORMONALNEJ TERAPII ONKOLOGICZNEJ w ER+ raku piersi. NADZÓR SPECJALISTY (ONKOLOGA) OBOWIĄZKOWY. BRAK KALKULATORA DAWEK na tej stronie, ponieważ: (1) dawka (20 mg/dzień) i czas trwania (5-10 lat) to decyzje protokołu onkologicznego, specyficzne dla pacjenta; (2) ryzyko VTE (DVT/PE) i RAKA ENDOMETRIUM wymaga rzeczywistego monitorowania; (3) status genetyczny CYP2D6 znacząco wpływa na skuteczność; (4) SILNE inhibitory CYP2D6 (fluoksetyna, paroksetyna, bupropion) PRZECIWWSKAZANE. Porozmawiaj z onkologiem. Objawy nagłe (jednostronny obrzęk nogi, duszność-ból klatki, krwawienie pochwowe): NATYCHMIASTOWA opieka."
  }
}
