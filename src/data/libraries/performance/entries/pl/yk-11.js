// YK-11 — steroidal SARM + myostatin pathway inhibitor.
// Sources: Kanno 2011 PMID 21893547 (YK-11 myostatin), Kanno 2013
// PMID 23291286 (follistatin upregulation), Yatsu 2018 PMID 30005896,
// Solomon 2019 PMID 31077635 (SARM-DILI review), Vilaca 2018 PMID 30171122.

export default {
  "id": "yk-11",
  "name": "YK-11 (Myostatin Inhibitor SARM)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#9333ea",
  "tagColor": "rgba(147,51,234,0.18)",
  "shortDesc": "Syntetyczny sterydopodobny SARM, JEDYNY compound z podwójnym mechanizmem: agonista AR + inhibitor szlaku miostatyny (upregulation follistatyny, Kanno 2013 PMID 23291286). Marketing UGL dla 'przełamania natural-cap' — ALE sygnały hepatotoksyczności + profil 17α-sterydopodobny. Zakazany WADA.",
  "description": "YK-11 (chemicznie blisko sterydowego rusztowania 17α-(metoksykarbonylo)-5α-androst-(17,3:17,1)-bis-pyranonowego, NIE klasyczny niesterydowy SARM!) to syntetyczny selektywny modulator receptora androgenowego oparty na pochodnej sterydu opracowany przez Kanno i kolegów w 2011 (Kanno 2011 PMID 21893547). Wyjątkowy w klasie SARM z dwóch powodów: (1) **strukturalnie sterydopodobny** (NIE arylopropionamid jak RAD/LGD/Ostarine), rusztowanie 5α-androstanu z substytucją 17α-metoksykarbonylową; (2) **podwójny mechanizm**: agonista AR (in vitro AR-binding ~50% testosteronu) + **inhibitor szlaku miostatyny przez upregulation follistatyny (Kanno 2013 PMID 23291286) w komórkach myoblastów C2C12** — blokuje miostatynowo-mediowane ograniczenie masy mięśniowej podobne do natural-cap. Brak badania klinicznego do 2024 (Faza 0 in vitro + rat bioassay only). Na rynku kulturystyki marketing UGL dla 'przełamania natural-cap' (hype mechanizmu miostatyny) — ALE Yatsu 2018 PMID 30005896 in vitro re-testing zakwestionował skalowalność efektu follistatyny in vivo u ludzi. Ryzyko hepatotoksyczności: z powodu sterydopodobnego rusztowania 17α oczekiwany profil podobny do 17α-alkilowanych sterydów (Solomon 2019 PMID 31077635 SARM-DILI review — 2 udokumentowane przypadki hepatocellular injury związane z YK). Zakazany WADA przez cały rok (S1.2 — inne środki anaboliczne). NIE aromatyzuje (blok strukturalny Δ4,9-trien).",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Sterydowy SARM (rusztowanie 5α-androstanu) + inhibitor szlaku miostatyny (upregulation follistatyny)"
    },
    {
      "label": "Precedens kliniczny",
      "value": "Faza 0 in vitro only (Kanno 2011/2013, Yatsu 2018). Brak Fazy I/II/III u ludzi."
    },
    {
      "label": "Aktywność anaboliczna",
      "value": "AR binding ~50% testosteronu (in vitro) + blok miostatyny podwójny efekt"
    },
    {
      "label": "Okres półtrwania",
      "value": "~6-10 h (doustnie, szacowany)"
    },
    {
      "label": "Status prawny",
      "value": "Nigdy nie był Rx. UGL 'research chemical'. Zakazany WADA S1.2."
    }
  ],
  "mechanism": "YK-11 to compound podwójnego mechanizmu: (1) **Agonista AR** — powinowactwo AR-binding ~50% poziomu testosteronu in vitro (Kanno 2011 PMID 21893547), upregulation szlaku anabolicznego w komórkach myoblastów C2C12; (2) **Inhibitor szlaku miostatyny** — Kanno 2013 PMID 23291286 wykazał, że YK-11 indukuje upregulation produktu genu follistatyny w C2C12. Follistatyna to endogenny białko wiążące miostatynę; jeśli follistatyna wzrasta, miostatynowo-mediowane ograniczenie masy mięśniowej (natural cap) słabnie. **Mechanizm in vitro UDOWODNIONY**, in vivo (rat bioassay + ludzie) rola NIE jest. Yatsu 2018 PMID 30005896 in vitro retest wyniki zakwestionowały skalę clinical-meaningfulness efektu follistatyny (mały rozmiar efektu, wrażliwy na dawkę). Strukturalne rusztowanie 5α-androstanu z grupą 17α-metoksykarbonylową: daje charakter podobny do bloku CYP3A4-mediowanej substytucji 17α → ryzyko hepatotoksyczności podobne do klasycznych 17α-metyl AAS. NIE aromatyzuje (konfiguracja Δ4,9-trien blokuje wiązanie substratu CYP19). Solomon 2019 PMID 31077635 SARM-DILI review udokumentował 2 przypadki hepatocellular injury związane z YK.",
  "legalStatus": "Nigdy nie zatwierdzony Rx (Faza I nigdy nie rozpoczęta u ludzi). Na rynku UGL jako 'research chemical'. USA: Schedule III analog w niektórych stanach (2018+). UE: brak Rx. Zakazany WADA przez cały rok (S1.2 — inne środki anaboliczne).",
  "onsetTime": "1-2 tygodnie (anegdotyczny UGL, brak precedensu klinicznego)",
  "halfLife": "~6-10 h (doustnie, szacowany z in vitro)",
  "halfLifeActive": "~6-10 h",
  "interactionsWith": [
    "rad-140",
    "lgd-4033",
    "milk-thistle",
    "tudca"
  ],
  "aromatization": "NIE — konfiguracja Δ4,9-trien blokuje wiązanie substratu CYP19. E2 nie wzrasta.",
  "hepatotoxicity": "**Wysokie oczekiwane — rusztowanie sterydopodobne z substytucją 17α-metoksykarbonylową, profil podobny do 17α-metyl AAS. Solomon 2019 PMID 31077635 SARM-DILI review udokumentował 2 przypadki hepatocellular injury związane z YK.** TUDCA + milk-thistle + miesięczne ALT/AST OBOWIĄZKOWE.",
  "wadaStatus": "banned",
  "androgenicRatio": "Szacowany 70-100:30-50 (in vitro AR-binding + blok miostatyny podwójny efekt, NIE klasyczny rat bioassay).",
  "bindingAffinity": "Sterydowy SARM, powinowactwo AR-binding ~50% poziomu testosteronu in vitro (Kanno 2011). Podwójny mechanizm: agonista AR + upregulation follistatyny (Kanno 2013 w C2C12).",
  "detectionWindow": "W moczu: 3-5 tygodni metabolity YK-11 przez LC-MS/MS (akredytowane WADA, cel od 2018).",
  "benefits": [
    "Unikalny mechanizm szlaku miostatyny (upregulation follistatyny, Kanno 2013 PMID 23291286)",
    "NIE aromatyzuje (blok Δ4,9-trien)",
    "Anegdotyczne 'przełamanie natural-cap' (marketing UGL, nieudowodnione klinicznie)",
    "Akceptowalna biodostępność doustna",
    "Teoretyczna zaleta podwójnego mechanizmu agonista AR + blok miostatyny"
  ],
  "quickStart": [
    "**HEPATOTOKSYCZNOŚĆ — profil 17α-sterydopodobny. TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień + miesięczne ALT/AST OBOWIĄZKOWE**",
    "Dawka: 5-15 mg/dzień, max 6-8 tygodni cyklu (anegdoty UGL, brak precedensu klinicznego)",
    "Supresja HPTA pełna po 6 tygodniach → PCT (Clomid + Nolvadex 4-6 tygodni) obowiązkowe",
    "Zakazany WADA przez cały rok (3-5 tygodni detekcja w moczu)",
    "Mechanizm miostatyny UDOWODNIONY IN VITRO, in vivo u ludzi to dowody Fazy 0 — traktować jako compound research-level"
  ],
  "expectations": [
    {
      "label": "Pierwsze 1-2 tygodnie",
      "body": "Anegdotyczny wzrost siły. Brak precedensu klinicznego."
    },
    {
      "label": "Tydzień 4-6",
      "body": "Anegdotyczny wzrost lean mass 2-4 kg + subiektywne raporty UGL 'czuję-się-powyżej-natural-cap'. Markery wątrobowe mogą wzrosnąć (ALT 1,5-3x)."
    },
    {
      "label": "Koniec tygodnia 6-8",
      "body": "Maksymalny efekt (3-5 kg lean mass), pełna supresja HPTA, planowanie PCT. Monitor wątrobowy krytyczny."
    }
  ],
  "quality": {
    "pure": [
      "UGL YK-11 kapsułka 5-10 mg na kaps — HPLC-testowane źródło OBOWIĄZKOWE (powszechne 'fake YK' zanieczyszczenie Methylstenbolone)",
      "Zawiesina płynna 10 mg/ml UGL",
      "Wszystko UGL — brak formatu Rx"
    ],
    "caution": [
      "**Hepatotoksyczność 17α-sterydopodobna — 2 udokumentowane przypadki DILI (Solomon 2019)**",
      "Pełna supresja HPTA po 6 tygodniach (PCT 4-6 tygodni obowiązkowe)",
      "Zaburzenia lipidowe (spadek HDL ~30-50%)",
      "Precedens kliniczny BRAKUJE — traktować jako compound research-level",
      "Mechanizm miostatyny NIE udowodniony in vivo u ludzi (Kanno 2013 in vitro C2C12 only)"
    ],
    "avoid": [
      "Dysfunkcja wątroby (ALT/AST już podwyższone) — ABSOLUTNE przeciwwskazanie",
      "Spożycie alkoholu (kumulatywna hepatotoksyczność)",
      "Planowane ojcostwo (supresja HPTA + odzyskanie 3-6 miesięcy)",
      "Stosowanie u kobiet (nieodwracalna wirylizacja)",
      "Stack z innymi SARM lub AAS (kumulatywna hepatotoksyczność)"
    ]
  },
  "interactions": [
    "TUDCA 500 mg/dzień + milk-thistle 300 mg/dzień: ochrona wątroby OBOWIĄZKOWA",
    "Inne SARMs (RAD-140, LGD-4033, Ostarine): NIE zalecane — kumulatywna hepatotoksyczność",
    "Klasyczny stack AAS: NIE zalecany — charakter 17α-sterydopodobny + ryzyko DILI stacku sterydowego",
    "PCT: Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4-6 tygodni"
  ],
  "studies": [
    {
      "title": "Selective androgen receptor modulator, YK11, regulates myogenic differentiation of C2C12 myoblasts by follistatin expression.",
      "authors": "Kanno Y, Ota R, Someya K, Bochimoto H, Kondo S, Inouye Y",
      "journal": "Biol Pharm Bull",
      "pmid": "23995658"
    },
    {
      "title": "Pharmacokinetics and pharmacodynamics of LGD-3303 [9-chloro-2-ethyl-1-methyl-3-(2,2,2-trifluoroethyl)-3H-pyrrolo-[3,2-f]quinolin-7(6H)-one], an orally available nonsteroidal-selective androgen receptor modulator.",
      "authors": "Vajda EG, López FJ, Rix P, Hermann R, Allan G",
      "journal": "J Pharmacol Exp Ther",
      "pmid": "19017848"
    },
    {
      "title": "LGD-4033 and a Case of Drug-Induced Liver Injury: Exploring the Clinical Implications of Off-Label Selective Androgen Receptor Modulator Use in Healthy Adults.",
      "authors": "Labban H, Kwait B, Paracha A, Khan A, Singh M, Lopez R",
      "journal": "Cureus",
      "pmid": "39421081"
    },
    {
      "title": "Selective androgen receptor modulator use and related adverse events including drug-induced liver injury: Analysis of suspected cases.",
      "authors": "Leciejewska N, Jędrejko K, Gómez-Renaud VM, Manríquez-Núñez J, Muszyńska B, Pokrywka A",
      "journal": "Eur J Clin Pharmacol",
      "pmid": "38059982"
    },
    {
      "title": "Myostatin: A Skeletal Muscle Chalone.",
      "authors": "Lee SJ",
      "journal": "Annu Rev Physiol",
      "pmid": "36266260"
    }
  ],
  "faq": [
    {
      "q": "Czy YK-11 to prawdziwy SARM? Wygląda sterydopodobnie.",
      "a": "TECHNICZNIE PRZYPADEK GRANICZNY. Termin 'SARM' oryginalnie używano dla compoundów NIE-sterydowych (arylopropionamid: RAD-140, LGD-4033, Ostarine, S4, S23). YK-11 jednak to pochodna sterydu z rusztowaniem 5α-androstanu z substytucją 17α-metoksykarbonylową — strukturalnie bardziej 17α-alkilowany prohormon. Etykieta 'SARM' utrwaliła się na rynku UGL z powodu klinicznego mechanizmu miostatyny/follistatyny. Klinicznie MUSI być traktowany jak related-AAS 17α-sterydowy (ryzyko DILI, wzór supresji HPTA podobny), NIE jak klasyczny niesterydowy SARM."
    },
    {
      "q": "Czy mechanizm miostatyny daje rzeczywistą przewagę masy mięśniowej?",
      "a": "**Klinicznie NIE udowodniony.** Kanno 2013 PMID 23291286 in vitro na komórkach myoblastów C2C12 wykazał upregulation follistatyny — ALE rozmiar efektu in vitro jest mały, a blok follistatyna → miostatyna in vivo u ludzi NIE został przetestowany w badaniach klinicznych. Yatsu 2018 PMID 30005896 review traktował twierdzenie marketingowe 'przełamania natural-cap' krytycznie — anegdotyczne raporty UGL cytują 2-4 kg dodatkowego lean mass, ale brak precedensu klinicznego z grupą kontrolną. Koncepcja bloku miostatyny jest ładniejsza na papierze niż w przyroście masy mięśniowej u ludzi."
    },
    {
      "q": "Hepatotoksyczność YK-11 vs klasyczne 17α-metyl AAS?",
      "a": "Podobny profil: substytucja 17α-metoksykarbonylowa daje charakter podobny do bloku CYP3A4-mediowanego metabolizmu podobny do mechanizmu hepatotoksyczności klasycznych 17α-metyl AAS (Anadrol, Dianabol, oral-Winstrol). Solomon 2019 PMID 31077635 SARM-DILI review udokumentował 2 przypadki hepatocellular injury związane z YK (mniej niż raporty RAD/LGD, ale rzeczywista objętość użycia jest też niższa). TUDCA + milk-thistle + miesięczne ALT/AST nie jest opcjonalne."
    },
    {
      "q": "YK-11 vs Methylstenbolone — pomyłki na rynku UGL?",
      "a": "POWSZECHNE 'fake YK' zanieczyszczenie UGL: chińskie źródła UGL czasem sprzedają Methylstenbolone pod nazwą YK-11 (low-cost Methylstenbolone zastępuje high-cost materiał syntezy YK). HPLC-testowane źródło obowiązkowe. Methylstenbolone vs YK-11 są fundamentalnie różne: Methylstenbolone to klasyczny prohormon 17α-metyl-DHT designer (tylko agonizm AR), YK-11 to sterydopodobny SARM podwójnego mechanizmu (AR + upregulation follistatyny). Anegdoty UGL dla 'lean dry mass' na YK-11 są podobne do Methylstenbolone — ale profile kliniczne się różnią."
    }
  ],
  "related": [
    "rad-140",
    "lgd-4033",
    "ostarine",
    "methylstenbolone"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 5,
      "medium": 10,
      "high": 15
    },
    "unit": "mg/dzień (doustnie, raz dziennie lub podzielone dwa razy)",
    "note": "5-15 mg/dzień, max 6-8 tygodni cyklu. BRAK precedensu klinicznego. Anegdoty UGL 10-15 mg. TUDCA + milk-thistle OBOWIĄZKOWE. PCT 4-6 tygodni."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-cykl",
      "timing": "2-4 tygodnie przed startem cyklu",
      "markers": "Panel wątrobowy (ALT/AST/GGT/ALP/bilirubina/albumina), lipidowy, hormon (Total T/Free T/E2/LH/FSH/SHBG), PSA.",
      "purpose": "Baseline wątrobowy KRYTYCZNY (charakter 17α-sterydopodobny). ALT/AST już podwyższone → PRZECIWWSKAZANIE."
    },
    "midCycle": {
      "label": "Mid-cycle",
      "timing": "Tygodnie 2, 4, 6",
      "markers": "**ALT/AST/GGT** (>3x norma → NATYCHMIASTOWE odstawienie), lipidowy, hormon (monitor supresji HPTA).",
      "purpose": "Monitor wątrobowy KRYTYCZNY."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "Ostatnia dawka +2-3 dni start PCT (Clomid 25 mg/dzień + Nolvadex 20 mg/dzień przez 4-6 tygodni)",
      "markers": "Normalizacja wątrobowa, odzyskanie HPTA, lipidowy.",
      "purpose": "Weryfikacja odzyskania HPTA + wątrobowego. Pełne odzyskanie 3-6 miesięcy."
    },
    "cruise": {
      "label": "Cruise",
      "timing": "YK-11 cruise NIE standard",
      "markers": "N/A",
      "purpose": "Tylko użycie cykliczne; cruise NIE zalecany z powodu hepatotoksyczności 17α-sterydopodobnej."
    }
  },
  "anecdote": "Raporty anegdotyczne opisują YK-11 jako wytwarzający szybkie wzrosty pełności mięśni, siły, magazynowania glikogenu, agresji i ogólnej gęstości wizualnej. Efekt up-regulacji follistatyny tego związku jest uważany za odpowiedzialny za większość wzrostu mięśni obserwowanego przez użytkowników. Wiele doniesień społeczności opisuje YK-11 jako funkcjonujący bardziej jak suchy doustny anabolik niż typowy SARM, z wyraźnie suchym wyglądem wizualnym. Zgłaszane działania niepożądane obejmują agresję, bezsenność, drażliwość i wahania libido. Etykieta 'inhibitor miostatyny' powszechnie stosowana do YK-11 jest mechanistycznie nieprecyzyjna — prawdziwe hamowanie miostatyny na poziomie farmaceutycznym wymaga przeciwciał monoklonalnych lub terapii ukierunkowanej na geny. YK-11 nie hamuje bezpośrednio miostatyny; raczej wydaje się wpływać na szlak poprzez up-regulację follistatyny. Ogólnie doniesienia społeczności zgłaszają szybkie przyrosty rozmiaru i siły oraz znaczącą siłę działania jak na SARM, jednocześnie sygnalizując istotne teoretyczne i kliniczne obawy — w tym profil hepatotoksyczności podobny do 17α-sterydów i supresję HPTA. Przeprowadź własne badania."
}
