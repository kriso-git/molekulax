// Created 2026-05-20 for Phase-12 GLOW multi-peptide stack (Tier 3 community-protocol)
// Edit this file directly — no decompose script regeneration.

export default {
  "id": "glow",
  "name": "GLOW",
  "image": "/peptides/GLOW.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "tagText": "#a78bfa",
  "shortDesc": "Stack wielopeptydowy — GHK-Cu + BPC-157 + TB-500. Synergiczny protokół regeneracji skóry i tkanek (T3 poziom społecznościowy).",
  "description": "GLOW to stack wielopeptydowy na poziomie protokołu społecznościowego, zbudowany z trzech komponentów: **GHK-Cu** (tripeptyd miedziowy, aktywacja kosmetyczna + epigenetyczna), **BPC-157** (pentadekapeptyd żołądkowy, ogólnoustrojowe gojenie tkanek) oraz **TB-500** (fragment tymozyny β4, migracja komórek + wiązanie aktyny). Razem trzy peptydy adresują dwie odrębne osie regeneracji: **oś powierzchniową / kosmetyczną** (GHK-Cu — synteza kolagenu, modulacja melaniny, gojenie ran) oraz **oś ogólnoustrojową / głębokotkankową** (BPC-157 + TB-500 — angiogeneza, migracja mioblastów, regeneracja ścięgien i mięśni).\n\n**Poziom dowodów**: dowody RCT specyficzne dla stack-u praktycznie **nie istnieją** — cap tier-3 odzwierciedla brak klinicznych badań na poziomie stack-u. Pojedyncze komponenty osobno mają dowody T4 (GHK-Cu — Pickart 2018, BPC-157 — przeglądy Sikirica, TB-500 — literatura kardiologiczna Goldsteina), ale sama kombinacja GLOW pozostaje na poziomie społecznościowym — protokół zorganizowany wokół notatek kuratorowanych przez Seana i feedbacku użytkowników dopamine.club, nie randomizowanych badań.\n\n**Ostrzeżenie WADA**: BPC-157 (od 2022) i TB-500 (wcześniej) są oba na liście zakazanej WADA (klasa S0 — Substancje niezatwierdzone). Sportowcy startujący w zawodach NIE MOGĄ używać stack-u GLOW.",
  "composition": [
    {
      "id": "ghk-cu",
      "role": "Tripeptyd miedziowy — kosmetyczna oś skóry (kolagen III, melanina, gojenie ran)",
      "typicalDose": "1-3 mg subQ codziennie"
    },
    {
      "id": "bpc-157",
      "role": "Pentadekapeptyd żołądkowy — ogólnoustrojowe gojenie tkanek (angiogeneza, GI, ścięgna)",
      "typicalDose": "250-500 µg subQ codziennie"
    },
    {
      "id": "tb-500",
      "role": "Fragment tymozyny β4 — wiązanie aktyny + migracja komórek (regeneracja całego ciała)",
      "typicalDose": "2-2,5 mg subQ 2× w tygodniu"
    }
  ],
  "keyInfo": [
    {
      "label": "Typ",
      "value": "Stack wielopeptydowy (3 komponenty)"
    },
    {
      "label": "Komponenty",
      "value": "GHK-Cu + BPC-157 + TB-500"
    },
    {
      "label": "Oś docelowa",
      "value": "Skóra (kosmetyczna) + ogólnoustrojowa regeneracja tkanek"
    },
    {
      "label": "Poziom dowodów",
      "value": "T3 (protokół społecznościowy; brak RCT na poziomie stack-u)"
    },
    {
      "label": "Cykl",
      "value": "4-6 tygodni on / 2-4 tygodnie off"
    },
    {
      "label": "Podanie",
      "value": "Podskórnie (SC), rotacja miejsc iniekcji"
    }
  ],
  "mechanism": "Synergia stack-u GLOW opiera się na trzech różnych mechanizmach molekularnych, które zbiegają się na dwóch osiach regeneracji.\n\n**1) GHK-Cu (oś powierzchniowa / kosmetyczna)**: tripeptyd Gly-His-Lys z jonem miedzi epigenetycznie moduluje ekspresję ~4000+ genów (Pickart 2018, PMID 29371390), aktywuje syntezę kolagenu III w fibroblastach, moduluje dystrybucję melaniny i upreguluje antyoksydacyjne enzymy SOD / katalazę. Działa zarówno miejscowo, jak i ogólnoustrojowo na skórę, włosy i tkankę łączną.\n\n**2) BPC-157 (gojenie ogólnoustrojowe)**: pentadekapeptyd o 15 aminokwasach jest plejotropowym induktorem angiogenezy przez oś VEGF-VEGFR2 + Akt-eNOS (przeglądy Sikirica) oraz modulatorem sygnalizacji NO. Jego efekty regeneracji GI, ścięgien, mięśni i tkanki nerwowej są dobrze udokumentowane w modelach zwierzęcych.\n\n**3) TB-500 (ogólnoustrojowa mobilizacja aktyny)**: N-końcowy fragment tymozyny β4 sekwestruje pulę globularnej G-aktyny, ułatwia migrację komórek (mioblasty, komórki śródbłonka) i wspiera naprawę tkanek poprzez remodeling cytoszkieletu aktynowego. Funkcjonalny t½ ~2-3 dni (rzeczywiste wiązanie z receptorem jest znacznie krótsze).\n\n**Logika synergii**: GHK-Cu zapewnia szybkie, widoczne (2-4 tygodnie) ulepszenie na osi skórno-kolagenowej; para BPC-157 + TB-500 celuje w regenerację głębokotkankową / ogólnoustrojową (4-6 tygodni). Razem: dwie osie = pełniejszy profil regeneracyjny niż jakikolwiek pojedynczy komponent osobno.",
  "dosingInfo": "**Standardowy protokół GLOW** (poziom społecznościowy, NIE Rx kliniczne):\n\n- **GHK-Cu**: 1-3 mg SC codziennie, w tym samym oknie czasowym dnia (np. rano)\n- **BPC-157**: 250-500 µg SC codziennie, najlepiej w innym miejscu iniekcji niż pozostałe komponenty\n- **TB-500**: 2-2,5 mg SC 2× w tygodniu (np. poniedziałek + czwartek)\n\n**Cykl**: 4-6 tygodni ciągłego on, następnie 2-4 tygodnie off przed restartem. Komponenty rekonstytuowane (woda bakteriostatyczna) w **osobnych fiolkach** — NIE mieszane w jednej strzykawce (różna stabilność, wrażliwość na pH). Rotacja miejsc iniekcji (brzuch, udo, ramię) w celu minimalizacji podrażnień tkanki SC.",
  "studies": [
    {
      "tag": "GHK-Cu epigenetyka",
      "tagColor": "rgba(167,139,250,0.16)",
      "tagText": "#a78bfa",
      "title": "GHK Peptide as a Natural Modulator of Multiple Cellular Pathways",
      "authors": "Pickart L, Margolina A.",
      "journal": "Int J Mol Sci",
      "year": "2018",
      "pmid": "29371390",
      "url": "https://pubmed.ncbi.nlm.nih.gov/29371390/",
      "finding": "GHK-Cu moduluje ekspresję ~4000+ genów, synteza kolagenu + aktywacja enzymów antyoksydacyjnych. Badanie pojedynczego komponentu, NIE na poziomie stack-u."
    },
    {
      "tag": "BPC-157 przegląd",
      "tagColor": "rgba(14,165,233,0.16)",
      "tagText": "#7dd3fc",
      "title": "BPC-157 w ortopedycznej medycynie sportowej — przegląd systematyczny",
      "authors": "Vasireddi N, Hahamyan H, Salata MJ, et al.",
      "journal": "HSS Journal",
      "year": "2025",
      "pmid": "40756949",
      "url": "https://pubmed.ncbi.nlm.nih.gov/40756949/",
      "finding": "36 badań zwierzęcych: VEGF↑, IL-6↓, przyspieszone gojenie ścięgien i mięśni. Brak badania humanitarnego na poziomie stack-u."
    },
    {
      "tag": "TB-500 angiogeneza",
      "tagColor": "rgba(99,102,241,0.18)",
      "tagText": "#818cf8",
      "title": "Thymosin beta4 induces angiogenesis through Notch signaling",
      "authors": "Goldstein AL, Hannappel E, Kleinman HK.",
      "journal": "Ann N Y Acad Sci",
      "year": "2010",
      "pmid": "20536942",
      "url": "https://pubmed.ncbi.nlm.nih.gov/20536942/",
      "finding": "Tymozyna β4 (cząsteczka źródłowa dla TB-500) indukuje tworzenie naczyń przez sygnalizację Notch. Brak dowodów na poziomie stack-u GLOW."
    }
  ],
  "legalStatus": "**Kontekst zaopatrzenia**: żaden z trzech komponentów nie jest zarejestrowany jako GMP-Rx w HU ani UE dla wskazań ludzkich (z wyjątkiem tymozyny α1 w niektórych krajach — która NIE jest fragmentem β4). Użytkownicy zazwyczaj pozyskują peptydy przez kanały dostawców RUO (Research Use Only), co stanowi **szarą strefę prawną** różniącą się w zależności od kraju (HU/UE: małe ilości do użytku osobistego zwykle tolerowane; strona dostawcy jest bardziej rygorystyczna).\n\n**Status WADA (obowiązkowe ostrzeżenie)**:\n- **BPC-157**: na liście zakazanej WADA od 2022 w klasie S0 (Substancje niezatwierdzone) — zakaz całoroczny (in + out-of-competition)\n- **TB-500 / Tymozyna β4**: wcześniej zakazana (klasa S2)\n- **GHK-Cu**: NIE wymieniona osobno na liście zakazanej WADA\n\nWniosek: **sportowcy startujący w zawodach NIE MOGĄ używać stack-u GLOW** — obecność BPC-157 + TB-500 czyni stack jako całość zakazanym w zawodach. Kontrola dopingowa wykryje obecność peptydów immunoassayem lub LC-MS/MS.",
  "onsetTime": "Korzyści skórne / widoczne (oś GHK-Cu): 2-4 tygodnie. Efekty regeneracji ogólnoustrojowej (oś BPC-157 + TB-500): 4-6 tygodni.",
  "halfLife": "Heterogeniczny — BPC-157 ~30 min t½ w osoczu (efekt ostry); TB-500 funkcjonalny t½ ~2-3 dni; GHK-Cu ogólnoustrojowo minuty, ale efekty miejscowe / topikalne utrzymują się dni na osi kolagenu.",
  "interactionsWith": [
    "ghk-cu",
    "bpc-157",
    "tb-500",
    "cjc-1295-ipamorelin"
  ],
  "wadaStatus": null,
  "related": [
    "ghk-cu",
    "bpc-157",
    "tb-500",
    "cjc-1295-ipamorelin"
  ],
  "faq": [
    {
      "q": "Dlaczego GLOW to stack, a nie pojedynczy peptyd?",
      "a": "Logika GLOW polega na tym, że regeneracja skóry i tkanki łącznej odbywa się na **wielu osiach molekularnych**, a żaden pojedynczy peptyd nie pokrywa wszystkich. **GHK-Cu** jest zoptymalizowany pod oś kosmetyczno-powierzchniową skóry (kolagen III, melanina, enzymy antyoksydacyjne), podczas gdy **BPC-157 + TB-500** celują w regenerację ogólnoustrojową / głębokotkankową (angiogeneza, migracja komórek, gojenie ścięgien + mięśni). Logika stack-u polega na tym, że dwie osie razem dają pełniejszy profil regeneracyjny. Ważne: to uzasadnienie protokołu społecznościowego (notatki Seana + feedback użytkowników dopamine.club), NIE udowodniona synergia RCT."
    },
    {
      "q": "Czy mogę uruchamiać komponenty osobno?",
      "a": "Tak — każdy komponent działa samodzielnie w swojej natywnej niszy regeneracyjnej (zobacz wpisy GHK-Cu, BPC-157 i TB-500). Użycie solo ma sens, gdy (1) koszt jest ograniczeniem, (2) wskazanie jest wąskie (np. tylko kontuzja ścięgna → sam BPC-157; tylko kosmetyczny cel skórny → sam GHK-Cu), lub (3) chcesz wyizolować, który komponent rzeczywiście daje ci rezultat. Logika stack-u GLOW jest najbardziej użyteczna, gdy chcesz obie osie (powierzchniową + ogólnoustrojową) jednocześnie."
    },
    {
      "q": "Jakie ryzyko WADA niesie GLOW?",
      "a": "**Wysokie.** Dwa z trzech komponentów (BPC-157 + TB-500) są na liście zakazanej WADA (klasa S0, całoroczny zakaz). GHK-Cu nie jest wymieniony osobno, ale zakazane komponenty czynią stack jako całość zakazanym w zawodach. **Sportowcy startujący w zawodach (NCAA, IOC, UCI, federacje sygnatariusze WADA) NIE powinni używać stack-u GLOW** — kontrola dopingowa wykryje obecność peptydów immunoassayem lub LC-MS/MS."
    },
    {
      "q": "Jakie badania krwi są potrzebne?",
      "a": "Na poziomie T3 społecznościowym **nie ma obowiązkowego protokołu badań krwi** — dowody klinicznych badań specyficznych dla stack-u są nieobecne, więc nie istnieje ukierunkowany biomarker. **Opcjonalna podstawa** (ogólny check zdrowotny przed użyciem długoterminowym): CBC, CMP (wątroba + nerki), CRP, panel lipidowy. Przy ciągłym użyciu dłuższym niż cykl 4-6 tygodni, kontrola CRP + enzymów wątrobowych (ALT/AST) co 8-12 tygodni jest rozsądna dla ogólnego monitoringu bezpieczeństwa."
    }
  ],
  "anecdote": null
}
