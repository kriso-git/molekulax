// Orforglipron (LY3502970) — Eli Lilly orális kis-molekulájú GLP-1 receptor
// agonist. NEM peptid — kis molekula, ezért a pharmaceutical libben (NEM peptid).
// Phase 3 obesity (ATTAIN) + T2DM (ACHIEVE) trial-ok 2026-ban folyamatban,
// FDA-jóváhagyás várt 2026-2027.
// Sources: Wharton 2023 NEJM Phase 2 obesity PMID 37356087, Frías 2023 NEJM
// Phase 2 T2DM PMID 37356866.

export default {
  "id": "orforglipron",
  "name": "Orforglipron (LY3502970)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Eli Lilly napi egyszer szedhető, KIS MOLEKULÁJÚ ORÁLIS GLP-1 receptor agonista (LY3502970). Phase 3 obesity (ATTAIN) + T2DM (ACHIEVE) folyamatban. Várt FDA-jóváhagyás 2026-2027. NEM peptid — a klasszikus injektábilis GLP-1 RA-k (Semaglutide, Liraglutide) orális alternatívája.",
  "description": "Az Orforglipron (LY3502970) az Eli Lilly napi egyszer szedhető, kis molekulájú orális GLP-1 receptor agonistája. Strukturálisan NEM peptid — egy kicsi szerves molekula, amely a GLP-1 receptort biased-agonist módon aktiválja, kizárólag a Gs-pathway-en, kihagyva a β-arrestin-pathway-t. Ez magyarázza a klinikai profilját: jó hatékonyság testtömeg-csökkentésre + HbA1c-re, kisebb gasztrointesztinális mellékhatás-incidencia mint az injektábilis peptid-GLP-1 RA-knál (Semaglutide, Liraglutide). A Phase 2 ATTAIN-1 trial (Wharton 2023 NEJM PMID 37356087) 36 hét alatt a magas-dóziscsoportban ~14,7% testtömegcsökkenést mutatott obesity-betegen — vetekszik az injektábilis Semaglutide 2.4 mg/hét STEP-1 trial eredményével (~14,9% 68 hét). Phase 2 T2DM (Frías 2023 NEJM PMID 37356866) HbA1c-csökkenés ~2.0%-os 26 hét alatt. 2026-ban a Phase 3 ATTAIN-1 (obesity) + ATTAIN-2 (obesity + T2DM) + ACHIEVE-1 (T2DM) trial-ok folyamatban, NDA-beadás várt 2026 közepén. Versenytárs: Pfizer Danuglipron (Phase 2-3, hepatic-stresszel terhelt), Roche CT-388 + Structure Therapeutics GSBR-1290 (peptid-csökkentő).",
  "mechanism": "Kis molekulájú GLP-1 receptor biased agonist — szelektíven aktiválja a Gs-pathway-t (cAMP-elevation → inzulin-szekréció + lassú gastric emptying + jóllakottság-érzés), és minimálisan a β-arrestin-pathway-t (ez magyarázza a kisebb GI mellékhatás-incidenciát). Orális biodostupnošć alacsony (~6-9%), DE a hosszú felezési idő (~29-49 h) napi egyszeri adagolást enged. NEM peptid — gastric proteolizishez NEM érzékeny, food-interakció minimális.",
  "legalStatus": "Klinikai vizsgálati fázis (Phase 3, 2026). NDA-beadás várt 2026 közepén. FDA-jóváhagyás várt 2026-2027. EU/HU/PL: NEM törzskönyvezett.",
  "bioavailability": "~6-9% (orális, low — DE elegendő a napi egyszeri adagoláshoz a hosszú t1/2 miatt; Frías 2023 PMID 37356866 PK appendix)",
  "onsetTime": "Tmax 3-5 óra (csúcsplazma-szint), klinikai hatás 2-4 hét alatt steady-state",
  "halfLife": "~29-49 óra (napi egyszeri dose-on steady-state 7-10 nap)",
  "atcCode": "Még nem assigned (Phase 3)",
  "prescriptionStatus": "Klinikai vizsgálati fázis (még NEM Rx)",
  "indications": [
    "Obesity (Phase 3 ATTAIN-1/2 — várt indikáció 2026-2027)",
    "2-es típusú cukorbetegség (Phase 3 ACHIEVE — várt indikáció)",
    "MASH (off-label kutatási irány)"
  ],
  "contraindications": [
    "Anamnézisben medulláris pajzsmirigy-karcinóma (MEN-2 szindróma) — class-effect minden GLP-1 RA-ra",
    "Anamnézisben pancreatitis (relatív)",
    "Súlyos gastroparesis"
  ],
  "commonSideEffects": [
    "Gasztrointesztinális: hányinger (~30-40% titrálás során, kisebb incidencia mint injektábilis GLP-1 RA-knál)",
    "Hasmenés, hányás (~15-20%)",
    "Fejfájás",
    "Étvágy-csökkenés (mechanism-related, nem mellékhatás per se)",
    "Ritka: pancreatitis, vesicula-cholezisztitis"
  ],
  "cyp450": [
    "CYP3A4 primary metabolism — strong CYP3A4 inhibitors (ketokonazol, ritonavir) növelhetik a koncentrációt",
    "P-gp substrate — minimális klinikai relevanciájú"
  ],
  "crossMolInteractions": [
    "CYP3A4 erős inhibitorok (ketokonazol, ritonavir, klaritromicin): koncentráció-emelkedés, dose-csökkentés mérlegelendő",
    "Insulin, sulfonylureák: hipoglikémia-kockázat (additív hatás), dose-csökkentés szükséges",
    "Egyéb antidiabetikum (Metformin, SGLT2-i): szinergikus, kombinálható",
    "Orális kontraceptívum: nincs jelentős interakció (low CYP3A4-affinitás)"
  ],
  "benefits": [
    "ORÁLIS — nem szubkután injekció, jobb compliance",
    "Phase 2 ATTAIN-1: ~14.7% testtömegcsökkenés 36 hét (~ Semaglutide 2.4 mg/hét vetélytárs)",
    "Phase 2 T2DM: ~2.0% HbA1c-csökkenés 26 hét",
    "Kisebb GI mellékhatás-incidencia mint injektábilis peptid GLP-1 RA-knál (biased agonist)",
    "Napi egyszeri adagolás (long t1/2)",
    "Olcsóbb gyártás várt mint a peptideknek (kis molekula szintézis)"
  ],
  "studies": [
    {"title": "Orforglipron, an Oral Small-Molecule GLP-1 Receptor Agonist for Obesity Treatment.", "authors": "Wharton S, Aronne LJ, Stefanski A", "journal": "N Engl J Med", "pmid": "40960239"},
    {"title": "Efficacy and safety of oral orforglipron in patients with type 2 diabetes: a multicentre, randomised, dose-response, phase 2 study.", "authors": "Frías JP, Hsia S, Eyde S, Liu R, Ma X, Konig M, Kazda C, Mather KJ, Haupt A, Pratt E, Dunn J, Robins D, Karanikas C, Thomas MK", "journal": "Lancet", "pmid": "37369232"},
    {"title": "Small-Molecule Oral Versus Injectable Glucagon-Like Peptide-1 (GLP-1) Receptor Agonists: Comparative Efficacy, Safety, and Cost.", "authors": "Patel D", "journal": "Cureus", "pmid": "42153087"}
  ],
  "related": [
    "metformin",
    "empagliflozin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {"low": 3, "medium": 12, "high": 36},
    "unit": "mg/nap (orális, napi 1x)",
    "note": "Klinikai protokoll: 3 mg-tól indul 4 hetes titrálással. Lépések: 3 → 6 → 12 → 24 → 36 mg/nap. Max ~36 mg/nap. GI-mellékhatás miatt SOSE skip-titration. Étkezéssel függetlenül, napi 1x bármikor."
  }
}
