// Wpis biblioteki Włosy i Skóra. Topilutamid (INN) = fluridyl; sprzedawany jako Eucapil
// (Czechy / część UE) jako kosmetyk/OTC do stosowania miejscowego w AGA. Źródło: Sovak,
// pierwsze doświadczenie kliniczne, kontrolowane podłożem (PMID 12174057). Miejscowy
// niesteroidowy antagonista AR, racjonalnie zaprojektowany do hydrolizy do nieaktywnych
// metabolitów (działanie tylko miejscowe). Ograniczone dowody kliniczne (jedno małe badanie u ludzi). Treść PL.

export default {
  "id": "topilutamide",
  "sideEffects": [
    { "hu": "Lokális fejbőr-reakciók: enyhe bőrpír, viszketés vagy szárazság az alkalmazás helyén; a (kis) klinikai vizsgálatban a tolerálhatóság jó volt, szisztémás antiandrogén tünet nélkül.", "en": "Local scalp reactions: mild redness, itching or dryness at the application site; in the (small) clinical study tolerability was good, with no systemic antiandrogen symptoms.", "pl": "Miejscowe reakcje skóry głowy: łagodne zaczerwienienie, świąd lub suchość w miejscu aplikacji; w (małym) badaniu klinicznym tolerancja była dobra, bez objawów ogólnoustrojowego antyandrogenu." },
    { "hu": "Korlátozott bizonyíték: a hatékonyság és a hosszú távú biztonság csak kisméretű, korai klinikai adatra és kozmetikai forgalmazási tapasztalatra épül; nincs nagy, megerősítő fázis-3 vizsgálat.", "en": "Limited evidence: efficacy and long-term safety rest on small, early clinical data and cosmetic-marketing experience; there is no large confirmatory phase 3 trial.", "pl": "Ograniczone dowody: skuteczność i bezpieczeństwo długoterminowe opierają się na małych, wczesnych danych klinicznych i doświadczeniu z obrotu kosmetycznego; brak dużego potwierdzającego badania fazy 3." },
    { "hu": "A lokális hatásra tervezve: a molekula szándékosan gyorsan inaktív metabolitokká hidrolizál, ezért a szisztémás antiandrogén hatás minimális – de a teljes humán biztonsági kép kis mintán alapul.", "en": "Designed for local action: the molecule deliberately hydrolyzes quickly to inactive metabolites, so systemic antiandrogen effect is minimal – but the full human safety picture rests on a small sample.", "pl": "Zaprojektowany do działania miejscowego: cząsteczka celowo szybko hydrolizuje do nieaktywnych metabolitów, więc efekt ogólnoustrojowy jest minimalny – ale pełny obraz bezpieczeństwa opiera się na małej próbie." }
  ],
  "contraindications": [
    { "hu": "Ismert túlérzékenység a topilutamiddal (fluridil) vagy a vivőanyaggal szemben.", "en": "Known hypersensitivity to topilutamide (fluridil) or the vehicle.", "pl": "Znana nadwrażliwość na topilutamid (fluridyl) lub podłoże." },
    { "hu": "Sérült, gyulladt vagy fertőzött fejbőr: a gyógyulásig kihagyandó.", "en": "Broken, inflamed or infected scalp: withhold until it heals.", "pl": "Uszkodzona, zapalna lub zakażona skóra głowy: odstawić do czasu wygojenia." },
    { "hu": "Terhesség és szoptatás: bár a szisztémás expozíció tervezetten minimális, elegendő adat híján kerülendő, illetve orvossal egyeztetendő.", "en": "Pregnancy and breastfeeding: although systemic exposure is minimal by design, avoid or discuss with a physician due to limited data.", "pl": "Ciąża i karmienie: choć ekspozycja ogólnoustrojowa jest z założenia minimalna, unikać lub skonsultować z lekarzem z powodu ograniczonych danych." }
  ],
  "name": "Topilutamide",
  "image": "/performance/topical-solution-clear.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Topilutamid (INN) = fluridyl: miejscowy niesteroidowy antagonista receptora androgenowego sprzedawany jako Eucapil (Czechy/UE) jako kosmetyk/OTC w łysieniu androgenowym. Działa miejscowo (jest szybko inaktywowany), ale dowody kliniczne są ograniczone (jedno małe badanie).",
  "description": "Topilutamid (międzynarodowa nazwa niezastrzeżona; lepiej znany jako fluridyl) to miejscowy, niesteroidowy antagonista receptora androgenowego, który Sovak i współpracownicy \"racjonalnie zaprojektowali\" do leczenia utraty włosów: cząsteczka działa na skórę głowy, ale po wchłonięciu szybko hydrolizuje do nieaktywnych metabolitów, więc w zasadzie nie ma działania antyandrogenowego ogólnoustrojowego. Pod nazwą handlową Eucapil jest sprzedawany w Czechach i na kilku rynkach UE jako kosmetyk/OTC w łysieniu androgenowym, więc w przeciwieństwie do klaskoteronu/pirylutamidu/RU58841 jest to faktycznie DOSTĘPNY produkt. Dowody kliniczne są jednak OGRANICZONE: główne opublikowane dane pochodzą z małego, kontrolowanego podłożem wczesnego badania klinicznego (Sovak, PMID 12174057), które opisało dobrą tolerancję, brak działania antyandrogenowego ogólnoustrojowego oraz korzystne oznaki w wynikach dotyczących włosów. Nie ma dużego potwierdzającego badania fazy 3, więc dowody są słabsze niż w przypadku minoksydylu/finasterydu.",
  "keyInfo": [
    { "label": "Inna nazwa / marka", "value": "Fluridyl · Eucapil (Czechy/UE)" },
    { "label": "Status", "value": "Sprzedawany kosmetyk/OTC (UE); nie jest lekiem zatwierdzonym przez FDA" },
    { "label": "Mechanizm działania", "value": "Miejscowy antagonista receptora androgenowego (szybka inaktywacja → działanie miejscowe)" },
    { "label": "Dowody", "value": "Ograniczone: jedno małe badanie kontrolowane podłożem (Sovak 2002)" },
    { "label": "Dawkowanie", "value": "Eucapil: zazwyczaj raz dziennie na skórę głowy (zgodnie z instrukcją produktu)" }
  ],
  "mechanism": "Topilutamid wiąże się z receptorem androgenowym mieszka włosowego i wypiera DHT, hamując napędzaną androgenami miniaturyzację mieszka. Istotą projektu jest \"labilność hydrolityczna\": substancja czynna wywiera miejscowe działanie na skórze głowy, ale po przedostaniu się do krwiobiegu jest szybko przekształcana w nieaktywne produkty rozpadu, dzięki czemu unika się ogólnoustrojowego działania antyandrogenowego (libido, hormonalne). Koncepcja jest podobna do klaskoteronu (miejscowy antagonizm AR), ale dowody kliniczne dla topilutamidu są skromniejsze.",
  "legalStatus": "Nie jest lekiem zatwierdzonym przez FDA. Pod nazwą Eucapil jest sprzedawany w Czechach i na niektórych rynkach UE jako kosmetyk/OTC w AGA. Dostępność i klasyfikacja regulacyjna różnią się w zależności od kraju; w USA nie jest zarejestrowany.",
  "bioavailability": "Miejscowo; celowa szybka hydroliza do nieaktywnych metabolitów → minimalna ogólnoustrojowa ekspozycja antyandrogenowa",
  "onsetTime": "Miesiące (jak typowo w leczeniu utraty włosów); małe badanie stosowało horyzont czasowy kilku miesięcy",
  "halfLife": "Substancja czynna jest szybko inaktywowana w krwiobiegu (krótki czas życia ogólnoustrojowego)",
  "atcCode": "Brak odrębnego kodu ATC leku (klasyfikacja kosmetyk/OTC)",
  "prescriptionStatus": "OTC/kosmetyk na niektórych rynkach UE (Eucapil); nie jest lekiem na receptę",
  "indications": [
    "Łysienie androgenowe (utrata włosów typu męskiego i żeńskiego) – wskazanie OTC/kosmetyczne Eucapil",
    "Koncepcyjna grupa docelowa: osoby szukające miejscowego, ogólnoustrojowo nieaktywnego antyandrogenu zamiast finasterydu",
    "WAŻNE: dowody na skuteczność są ograniczone (brak dużej fazy 3)"
  ],
  "commonSideEffects": [
    "Łagodna miejscowa reakcja skóry głowy (zaczerwienienie, świąd, suchość)",
    "Objawy antyandrogenowe ogólnoustrojowe NIE wystąpiły w badaniu (projekt miejscowy)",
    "Profil rzadkich/długoterminowych działań niepożądanych opiera się na małej próbie"
  ],
  "cyp450": [
    "Wchłonięta substancja czynna szybko hydrolizuje do nieaktywnych metabolitów",
    "Nie jest znana klinicznie istotna ogólnoustrojowa interakcja z CYP (minimalna ekspozycja)"
  ],
  "crossMolInteractions": [
    "Minoksydyl: koncepcyjne uzupełniające połączenie w AGA (perfuzja + miejscowy antyandrogen)",
    "Finasteryd: inny poziom hamowania androgenów; połączenie koncepcyjne",
    "Klaskoteron/pirylutamid: ta sama klasa (miejscowy antagonista AR) – łączenie nieuzasadnione"
  ],
  "benefits": [
    "Faktycznie DOSTĘPNY produkt (Eucapil, UE) – w przeciwieństwie do niesprzedawanego RU58841/pirylutamidu",
    "Zaprojektowany do działania miejscowego, z minimalnym ryzykiem antyandrogenowym ogólnoustrojowym",
    "Dobra tolerancja w małym badaniu klinicznym, bez działania ogólnoustrojowego (PMID 12174057)",
    "UWAGA: dowody na skuteczność są ograniczone, nie na poziomie minoksydylu/finasterydu"
  ],
  "quickStart": [
    "Jako Eucapil, zgodnie z instrukcją produktu, zazwyczaj raz dziennie na skórę głowy",
    "Realistyczne oczekiwanie: dowody są ograniczone; nie oczekuj potwierdzonej skuteczności na poziomie minoksydylu/finasterydu",
    "Sprawdzona podstawa: minoksydyl + finasteryd – warto zacząć od nich, z lekarzem",
    "Kierunek miejscowego antyandrogenu jest poważniej reprezentowany przez klaskoteron (zatwierdzony w trądziku, faza 3 w AGA)",
    "Ze zweryfikowanego, oryginalnego źródła UE (Eucapil), nie z niezweryfikowanego szarego rynku"
  ],
  "expectations": [
    { "label": "Ograniczenia", "body": "Skuteczność topilutamidu opiera się na małym, wczesnym badaniu i doświadczeniu z obrotu kosmetycznego; nie ma dużej potwierdzającej fazy 3, więc wynik jest bardziej niepewny." },
    { "label": "Tolerancja", "body": "Według opublikowanych danych jest dobrze tolerowany, bez ogólnoustrojowych objawów antyandrogenowych – to zaleta miejscowego, szybko inaktywowanego projektu." },
    { "label": "Gdzie pasuje", "body": "Dostępna, łagodna miejscowa opcja antyandrogenowa z ograniczonymi dowodami; nie zastępuje sprawdzonego trzonu (minoksydyl/finasteryd)." }
  ],
  "quality": {
    "pure": [
      "Oryginalny Eucapil (UE) to znana, sprzedawana postać",
      "Jakość niezweryfikowanych partii \"fluridylu\" z szarego rynku nie jest gwarantowana"
    ],
    "caution": [
      "Ograniczone dowody kliniczne: jedno małe badanie, brak dużej fazy 3",
      "Skuteczność zależy od osoby i jest bardziej niepewna niż w przypadku minoksydylu/finasterydu",
      "Dostępność i klasyfikacja prawna różnią się w zależności od kraju"
    ],
    "avoid": [
      "Znana nadwrażliwość na topilutamid/fluridyl",
      "Uszkodzona, zapalna skóra głowy (do czasu wygojenia)",
      "Ciąża/karmienie bez odpowiedniej konsultacji",
      "Niezweryfikowane źródła z szarego rynku zamiast oryginalnego produktu"
    ]
  },
  "interactions": [
    "Minoksydyl: koncepcyjne uzupełniające połączenie",
    "Finasteryd: inne hamowanie androgenów, koncepcyjne uzupełnienie",
    "Klaskoteron/pirylutamid: ta sama klasa – łączenie nieuzasadnione",
    "Minimalna interakcja ogólnoustrojowa z powodu szybkiej inaktywacji"
  ],
  "studies": [
    {
      "title": "Fluridil, a rationally designed topical agent for androgenetic alopecia: first clinical experience",
      "authors": "Sovak M, Seligson AL, Kucerova R, et al.",
      "journal": "Dermatol Surg. 2002;28(8):678-685.",
      "pmid": "12174057"
    }
  ],
  "faq": [
    {
      "q": "Czy mogę go kupić? Gdzie jest dostępny?",
      "a": "Tak, topilutamid jest dostępny pod nazwą fluridyl, jako marka Eucapil, w Czechach i na kilku rynkach UE jako kosmetyk/OTC w łysieniu androgenowym – więc w przeciwieństwie do niesprzedawanego RU58841/pirylutamidu jest naprawdę dostępny. W USA nie jest zarejestrowany. Najlepiej z oryginalnego źródła UE, nie z niezweryfikowanego szarego rynku."
    },
    {
      "q": "Jak skuteczny jest?",
      "a": "Dowody są OGRANICZONE. Główne opublikowane dane pochodzą z małego, kontrolowanego podłożem wczesnego badania (Sovak 2002, PMID 12174057), które opisało dobrą tolerancję, brak działania antyandrogenowego ogólnoustrojowego oraz zachęcające oznaki w wynikach dotyczących włosów. Nie ma jednak dużego potwierdzającego badania fazy 3, więc skuteczność jest bardziej niepewna niż minoksydylu czy finasterydu. Realistyczne ujęcie: dostępna, łagodna miejscowa opcja antyandrogenowa, ale nie zastępstwo sprawdzonego trzonu."
    }
  ],
  "related": [
    "clascoterone",
    "pyrilutamide",
    "minoxidil"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 2,
      "medium": 2,
      "high": 2
    },
    "unit": "% (Eucapil topical)",
    "note": "Eucapil (topilutamid/fluridyl) to zazwyczaj 2% roztwór do stosowania miejscowego, stosowany zgodnie z instrukcją produktu raz dziennie na skórę głowy. Z oryginalnego źródła UE. Dowody są ograniczone; sprawdzoną podstawą jest minoksydyl + finasteryd."
  }
}
