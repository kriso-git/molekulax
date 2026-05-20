// Orforglipron (LY3502970) — doustny mało-cząsteczkowy agonista receptora
// GLP-1 firmy Eli Lilly. NIE peptyd — mała cząsteczka, dlatego należy do
// biblioteki pharmaceutical (NIE peptides). Fazy 3 obesity (ATTAIN) + T2DM
// (ACHIEVE) w toku 2026, zatwierdzenie FDA spodziewane 2026-2027.
// Źródła: Wharton 2023 NEJM Phase 2 obesity PMID 37356087, Frías 2023 NEJM
// Phase 2 T2DM PMID 37356866.

export default {
  "id": "orforglipron",
  "name": "Orforglipron (LY3502970)",
  "image": "/pharmaceutical/blister-white-oval.png",
  "accentColor": "#10b981",
  "tagColor": "rgba(16,185,129,0.18)",
  "shortDesc": "Doustny mało-cząsteczkowy agonista receptora GLP-1 Eli Lilly (LY3502970), raz dziennie. Fazy 3 obesity (ATTAIN) + T2DM (ACHIEVE) w toku. Zatwierdzenie FDA spodziewane 2026-2027. NIE peptyd — doustna alternatywa dla klasycznych iniekcyjnych GLP-1 RA (Semaglutid, Liraglutyd).",
  "description": "Orforglipron (LY3502970) to Eli Lilly raz dziennie, mało-cząsteczkowy doustny agonista receptora GLP-1. Strukturalnie NIE jest peptydem — mała cząsteczka organiczna, która aktywuje receptor GLP-1 w sposób biased-agonist, wyłącznie ścieżką Gs, z pominięciem ścieżki β-arrestyny. To tłumaczy profil kliniczny: skuteczność redukcji masy ciała + HbA1c, mniejsza częstość żołądkowo-jelitowych skutków ubocznych niż w iniekcyjnych peptydowych GLP-1 RA (Semaglutid, Liraglutyd). Badanie Phase 2 ATTAIN-1 (Wharton 2023 NEJM PMID 37356087) wykazało ~14,7% redukcji masy ciała w grupie wysokiej dawki w ciągu 36 tygodni u pacjentów z otyłością — porównywalnie z iniekcyjnym Semaglutidem 2,4 mg/tydzień STEP-1 (~14,9% w 68 tygodni). Phase 2 T2DM (Frías 2023 NEJM PMID 37356866) redukcja HbA1c ~2,0% w 26 tygodni. W 2026 trwają Phase 3 ATTAIN-1 (obesity) + ATTAIN-2 (obesity + T2DM) + ACHIEVE-1 (T2DM); złożenie NDA spodziewane w połowie 2026. Konkurenci: Pfizer Danuglipron (Phase 2-3, problemy z wątrobą), Roche CT-388 i Structure Therapeutics GSBR-1290 (oralne peptido-mimetyki).",
  "mechanism": "Mało-cząsteczkowy biased agonista receptora GLP-1 — selektywnie aktywuje ścieżkę Gs (wzrost cAMP → wydzielanie insuliny + zwolnienie opróżniania żołądka + uczucie sytości), minimalnie ścieżkę β-arrestyny (tłumaczy mniejszą częstość skutków ubocznych GI). Doustna biodostępność niska (~6-9%), ale długi okres półtrwania (~29-49 h) wspiera dawkowanie raz dziennie. NIE peptyd — nie podatny na żołądkową proteolizę, interakcja z jedzeniem minimalna.",
  "legalStatus": "Faza badań klinicznych (Phase 3, 2026). Złożenie NDA spodziewane w połowie 2026. Zatwierdzenie FDA spodziewane 2026-2027. UE/HU/PL: NIE zarejestrowany.",
  "bioavailability": "~6-9% (doustnie, niska — ale wystarczająca do dawkowania raz dziennie z uwagi na długi t1/2; Frías 2023 PMID 37356866 PK appendix)",
  "onsetTime": "Tmax 3-5 h (szczyt stężenia osoczowego), efekt kliniczny w 2-4 tygodnie w steady-state",
  "halfLife": "~29-49 godzin (dawkowanie raz dziennie osiąga steady-state w 7-10 dni)",
  "atcCode": "Jeszcze nie przypisany (Phase 3)",
  "prescriptionStatus": "Faza badań klinicznych (jeszcze NIE Rx)",
  "indications": [
    "Otyłość (Phase 3 ATTAIN-1/2 — spodziewane wskazanie 2026-2027)",
    "Cukrzyca typu 2 (Phase 3 ACHIEVE — spodziewane wskazanie)",
    "MASH (off-label kierunek badawczy)"
  ],
  "contraindications": [
    "Wywiad rdzeniastego raka tarczycy (zespół MEN-2) — efekt klasowy dla wszystkich GLP-1 RA",
    "Wywiad zapalenia trzustki (względne)",
    "Ciężka gastropareza"
  ],
  "commonSideEffects": [
    "Żołądkowo-jelitowe: nudności (~30-40% podczas titrowania, mniejsza częstość niż w iniekcyjnych GLP-1 RA)",
    "Biegunka, wymioty (~15-20%)",
    "Ból głowy",
    "Spadek apetytu (związany z mechanizmem, nie jest skutkiem ubocznym per se)",
    "Rzadko: zapalenie trzustki, cholecystitis"
  ],
  "cyp450": [
    "CYP3A4 metabolizm pierwotny — silne inhibitory CYP3A4 (ketokonazol, rytonawir) mogą zwiększyć ekspozycję",
    "P-gp substrat — minimalna kliniczna istotność"
  ],
  "crossMolInteractions": [
    "Silne inhibitory CYP3A4 (ketokonazol, rytonawir, klarytromycyna): wzrost ekspozycji, rozważyć redukcję dawki",
    "Insulina, sulfonylomoczniki: ryzyko hipoglikemii (efekt addytywny), redukcja dawki wymagana",
    "Inne leki przeciwcukrzycowe (Metformina, SGLT2-i): synergistyczne, można łączyć",
    "Doustne środki antykoncepcyjne: brak istotnej interakcji (niskie powinowactwo CYP3A4)"
  ],
  "benefits": [
    "DOUSTNY — nie iniekcja podskórna, lepsza compliance",
    "Phase 2 ATTAIN-1: ~14,7% redukcji masy ciała w 36 tygodni (~ na równi z Semaglutidem 2,4 mg/tydzień)",
    "Phase 2 T2DM: ~2,0% redukcji HbA1c w 26 tygodni",
    "Mniejsza częstość skutków ubocznych GI niż w iniekcyjnych peptydowych GLP-1 RA (biased agonist)",
    "Dawkowanie raz dziennie (długi t1/2)",
    "Spodziewana tańsza produkcja niż peptydów (synteza mało-cząsteczkowa)"
  ],
  "studies": [
    {"title": "Oral orforglipron for obesity: phase 2 RCT", "authors": "Wharton S, Blevins T, Connery L, et al.", "journal": "N Engl J Med. 2023;389(10):877-888.", "pmid": "37356087"},
    {"title": "Efficacy and safety of orforglipron, an oral small-molecule GLP-1 receptor agonist, in adults with type 2 diabetes: a phase 2, dose-finding, randomised, controlled trial", "authors": "Frías JP, Hsia S, Eyde S, et al.", "journal": "Lancet. 2023;402(10400):472-483.", "pmid": "37356866"},
    {"title": "GLP-1 receptor agonists: a review of head-to-head clinical studies", "authors": "Trujillo JM, Nuffer W, Smith BA.", "journal": "Ther Adv Endocrinol Metab. 2021;12:2042018821997320.", "pmid": "33854744"}
  ],
  "related": [
    "metformin",
    "empagliflozin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {"low": 3, "medium": 12, "high": 36},
    "unit": "mg/dzień (doustnie, raz dziennie)",
    "note": "Protokół kliniczny: start 3 mg, titracja co 4 tygodnie. Kroki: 3 → 6 → 12 → 24 → 36 mg/dzień. Max ~36 mg/dzień. NIGDY nie pomijać titrowania z powodu skutków GI. Niezależnie od posiłków, raz dziennie o dowolnej porze."
  }
}
