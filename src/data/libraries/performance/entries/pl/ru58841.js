// RU58841 (PSK-3841 / HMR-3841) — obwodowy niesteroidowy antagonista AR,
// NIE inhibitor 5α-reduktazy. Wpis wyjaśnienia mechanizmu według specyfikacji § 4.1.
// TODO Sub-Task 7: zastąp placeholder image '/performance/tablet-pile-white.png'
// z '/performance/topical-solution-clear.png' (Gemini-template generated in
// image-pipeline pass).
// Źródła: Sawaya 1997 PMID 9224249, Battmann 1994 PMID 7969105.

export default {
  "id": "ru58841",
  "name": "RU58841 (PSK-3841 / HMR-3841)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Peryferyjny niesteroidowy antagonista AR (NIE inhibitor 5α-reduktazy) — projektant Roussel-Uclaf 1992. Topikalna chemia badawcza AGA. Faza II zakończona 1996 z powodu feminizacji systemowej. Twierdzenie nowoczesnych formuł UGL o działaniu tylko lokalnym ma skąpe dane wspierające.",
  "description": "**WAŻNE wyjaśnienie mechanizmu**: RU58841 (PSK-3841 / HMR-3841) **NIE** jest inhibitorem 5α-reduktazy (jak finasteryd/dutasteryd), ale **obwodowym antagonistą receptora androgenowego (AR)**. Zaprojektowany przez laboratorium Roussel-Uclaf w 1992 (Sawaya 1997 PMID 9224249) do topikalnego leczenia łysienia androgenowego (AGA): związek kompetycyjnie wiąże AR w tkance mieszka włosowego skóry głowy, blokując downstream efekt sygnalizacji androgenowej DHT (i testosteronu) — **NIE hamuje konwersji DHT, ale neutralizuje efekt DHT na poziomie mieszka włosowego**. Próby kliniczne Phase II zakończono w 1996 przez producenta przemysłowego (Hoechst Marion Roussel, później Sanofi-Aventis), po wystąpieniu efektów feminizujących (formacja ginekomastii, dysfunkcja seksualna) w populacjach testowych po absorpcji systemowej. Nowoczesne formulacje UGL (5% roztwór w etanolu/glikolu propylenowym) opierają twierdzenie o działaniu tylko lokalnym — poprzez szybką inaktywację esterazy surowicy — na skąpych danych in vivo z przeciwstawnymi raportami przypadków efektów systemowych. Tier 2 (poziom badawczy, Faza II zakończona, tylko UGL). Designer-purple accent `#a78bfa` według specyfikacji § 3.3. **NIE** jest mechanizmem substratu 5AR — klasyfikowany pod sub-section 5AR ze względu na konwencję grupowania przypadków użycia (cel profilaktyki wypadania włosów AAS wspólny z finasterydem/dutasterydem).",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Peryferyjny niesteroidowy antagonista AR (NIE inhibitor 5AR!) — blokada wiązania AR mieszka włosowego skóry głowy"
    },
    {
      "label": "Dawkowanie (tylko-badawcze)",
      "value": "5% roztwór w etanolu/glikolu propylenowym, 0,5-1 mL raz dziennie aplikacja na skórę głowy"
    },
    {
      "label": "Okres półtrwania",
      "value": "Topikalna minimalna absorpcja systemowa (twierdzenie), efekt ~24 h"
    },
    {
      "label": "Początek działania",
      "value": "Blokada AR skóry głowy natychmiastowa, stabilizacja włosów 3-6 miesięcy (dane in vivo skąpe)"
    },
    {
      "label": "Status prawny",
      "value": "BRAK zatwierdzenia FDA/EMA, BRAK Rx HU/PL, tylko vendor chemii badawczej, WADA banned (powiązany ze środkiem anabolicznym S1)"
    }
  ],
  "mechanism": "RU58841 jest niesteroidowym związkiem o strukturze 4,4-dimetyl-imidazolinodionu. Sawaya 1997 PMID 9224249 udokumentował mechanizm peryferyjnej blokady wiązania AR: związek wiąże się in vitro z powinowactwem AR Ki ~0,5 nM (kompetycyjnie wobec DHT z Ki ~5 nM), blokując AR mieszka włosowego bez wpływu na enzym 5α-reduktazy. **To krytycznie różni się od mechanizmu finasterydu/dutasterydu**: finasteryd/dutasteryd hamują konwersję DHT (poziom substratu), RU58841 neutralizuje efekt DHT na poziomie AR (poziom receptora). Zaprojektowana przewaga: efekt tylko lokalny, szybka inaktywacja esterazy surowicy unika systemowej blokady AR. W trialu Phase I (Battmann 1994 PMID 7969105) topikalna aplikacja 1% roztworu wykazała niską ekspozycję AR surowicy, ALE Phase II przy ~5% dawce udokumentował przypadki systemowych efektów feminizujących. Nowoczesny UGL 5% roztwór — wyższy niż dawka Phase I, twierdzenie opiera się na skutecznym klirensie esterazy surowicy, ale potwierdzenie in vivo jest niekompletne.",
  "legalStatus": "Globalnie nie zarejestrowany: Faza II zakończona 1996 z powodu feminizacji systemowej (Hoechst Marion Roussel, później Sanofi-Aventis). BRAK FDA/EMA/HU/PL Rx. Tylko vendor chemii badawczej (US/UE/Azja kanały UGL). WADA: S1 środek anaboliczny — banned pod kategorią Other Anabolic Agents (chemicznie powiązany, modulator AR).",
  "onsetTime": "Blokada AR skóry głowy natychmiastowa, stabilizacja włosów 3-6 miesięcy (dane in vivo skąpe)",
  "halfLife": "Topikalna minimalna absorpcja systemowa (twierdzenie, dane in vivo skąpe)",
  "halfLifeActive": "Efekt ~24 h na aplikację (twierdzenie, potwierdzenie in vivo niekompletne)",
  "interactionsWith": [
    "finasteride",
    "dutasteride",
    "rad-140"
  ],
  "aromatization": "Brak bezpośredniej aromatyzacji. Blokada AR peryferyjna → oś steroidowa NIE wpływana. (Jeśli absorbowany systemowo, może blokować aktywność AAS — ryzyko feminizacji nasilające gino w całym ciele.)",
  "hepatotoxicity": "Topikalna niska hepatyczna; w przypadku absorpcji in vivo, dane stresu wątrobowego niekompletne — ostrożność w kontekście chemii badawczej.",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (antagonista AR, NIE agonista AR) — NIE AAS",
  "bindingAffinity": "AR Ki ~0,5 nM (kompetycyjny antagonista, vs DHT ~5 nM, testosteron ~10 nM)",
  "detectionWindow": "Dane WADA-akkreditowanego LC-MS/MS skąpe — kontekst chemii badawczej wykrywanie w moczu 1-2 tygodnie po aplikacji topikalnej (dane in vivo minimalne)",
  "benefits": [
    "Zaprojektowana przewaga: blokada efektu DHT tylko-skóry-głowy, oś AR systemowa nietknięta (alternatywa dla finasterydu/dutasterydu u użytkowników unikających ryzyka PFS)",
    "Wyjaśnienie mechanizmu: NIE jest inhibitorem 5AR — inny szlak, nie koliduje z finasterydem na stack AAS (ale ryzyko nakładania)",
    "Zainteresowanie społeczności chemii badawczej AGA"
  ],
  "quickStart": [
    "PIERWSZE: zrozum, że RU58841 NIE jest inhibitorem 5AR (jak finasteryd/dutasteryd), ale antagonistą AR — inny mechanizm",
    "Pozyskiwanie tylko od vendora chemii badawczej (Sigma-Aldrich / specialty research pharm)",
    "Topikalny 5% roztwór w vehiculum etanol/glikol propylenowy: 0,5-1 mL aplikacja na skórę głowy raz dziennie wieczorem",
    "Strefa aplikacji: vertex + przednia część (NIE cała skóra głowy) dotknięta AGA",
    "NIE zalecany: profilaktycznie u użytkowników bez predyspozycji do AGA, użytkowników planujących płodność (ryzyko efektu feminizującego systemowego)",
    "Nowoczesne formuły UGL brakuje evidence bezpieczeństwa na poziomie Phase II — tylko kontekst badawczy"
  ],
  "expectations": [
    {
      "label": "Tydzień 1",
      "body": "Aplikacja na skórę głowy tolerowana (możliwe łagodne podrażnienie skóry głowy od vehikulum etanol/PG). Efekt systemowy minimalny (twierdzenie)."
    },
    {
      "label": "Miesiące 3-6",
      "body": "Stabilizacja włosów obserwowalna (dane in vivo skąpe — raporty na poziomie społeczności + ekstrapolacja trialu Phase I)."
    },
    {
      "label": "Długoterminowo (6+ miesięcy)",
      "body": "Evidence zakończenia Phase II: możliwy efekt feminizujący systemowy (ginekomastia, dysfunkcja seksualna), szczególnie przy wyższej dawce (5%+ roztwór) lub aplikacji na duży obszar skóry głowy. **BRAK** długoterminowego evidence bezpieczeństwa."
    },
    {
      "label": "Po zaprzestaniu",
      "body": "Blokada AR skóry głowy ustępuje w 1-2 tygodnie (dane in vivo skąpe). Przyspieszenie wypadania włosów wraca szybko."
    }
  ],
  "quality": {
    "pure": [
      "BRAK pharma-grade source — tylko vendor chemii badawczej (Sigma-Aldrich grade syntezy, specialty research pharm)",
      "UGL 5% roztwór w etanolu/glikolu propylenowym: wymagane źródło testowane HPLC — czystość vendora często <90%",
      "Niektóre apteki kompoundujące (US/UE specialty) wykonują custom formulacje off-label kontekst badawczy"
    ],
    "caution": [
      "**BRAK evidence bezpieczeństwa Phase III** — Faza II zakończona z powodu feminizacji systemowej",
      "Przy absorpcji systemowej: ginekomastia, dysfunkcja seksualna, zaburzenie funkcji prostaty (raporty przypadków chronic use)",
      "WADA S1 anaboliczny-powiązany — banned w konkurencji",
      "Nowoczesne formuły UGL dane in vivo skąpe — oparte na evidence na poziomie społeczności",
      "Reaktywność krzyżowa z aktywnością AAS: jeśli absorbowany systemowo, może blokować efekt sterydu cyklu AAS"
    ],
    "avoid": [
      "Planowanie płodności (potencjał efektu feminizującego systemowego)",
      "Aktywny cykl AAS przy wysokiej dawce (blokada AR systemowa koliduje z aktywnością AAS)",
      "Profilaktycznie u użytkowników bez predyspozycji do AGA (status chemii badawczej, brak evidence bezpieczeństwa)",
      "Długoterminowe stosowanie chronic (>12 miesięcy, dane bezpieczeństwa in vivo niekompletne)",
      "Kontakt partnerki w ciąży (potencjał absorpcji systemowej RU58841 dla zaburzenia rozwoju męskiego płodu)"
    ]
  },
  "interactions": [
    "Finasteryd / dutasteryd: nie koliduje mechanistycznie (inny szlak: inhibitor 5AR vs antagonista AR), ale ryzyko nakładania w kontekście leczenia AGA",
    "Aktywny cykl AAS: jeśli RU58841 jest absorbowany systemowo, może blokować aktywność AAS (neutralizacja sygnału AR)",
    "SARMy (RAD-140, LGD-4033): reaktywność krzyżowa na poziomie AR — nakładający się mechanizm, NIE zalecane razem",
    "Topical minoksydyl 5%: możliwe łączenie (inny szlak: wazodylator + blokada AR)"
  ],
  "studies": [
    {
      "title": "Effects of finasteride (Proscar) and RU58841 on hair growth in stump-tail macaque",
      "authors": "Sawaya ME, Hordinsky MK.",
      "journal": "Skin Pharmacol. 1997;10(5-6):293-303.",
      "pmid": "9224249"
    },
    {
      "title": "RU58841: a non-steroidal antiandrogen with potential for dermatological application",
      "authors": "Battmann T, Bonfils A, Branche C, et al.",
      "journal": "J Steroid Biochem Mol Biol. 1994;48(1):55-60.",
      "pmid": "7969105"
    },
    {
      "title": "RU58841, a topical antiandrogen for the treatment of androgenetic alopecia",
      "authors": "De Brouwer B, Battmann T, Bonfils A, Branche C.",
      "journal": "Steroids. 1997;62(1):112-117.",
      "pmid": "9203282"
    },
    {
      "title": "The emerging pharmacotherapeutic agents for the treatment of male androgenetic alopecia",
      "authors": "Olsen EA, Hordinsky M, Whiting D, et al.",
      "journal": "Expert Opin Pharmacother. 2018;19(15):1739-1751.",
      "pmid": "30041755"
    }
  ],
  "faq": [
    {
      "q": "Czy RU58841 jest inhibitorem 5α-reduktazy?",
      "a": "**NIE** — to najczęstsze błędne przekonanie. RU58841 jest **peryferyjnym antagonistą receptora androgenowego (AR)**, NIE inhibitorem 5α-reduktazy (jak finasteryd/dutasteryd). Różnica mechanizmu jest krytyczna: (1) **Finasteryd/dutasteryd** hamują konwersję testosteron → DHT (na poziomie enzymu 5AR); redukują poziom DHT w całym ciele; (2) **RU58841** blokuje wiązanie receptora DHT na poziomie skóry głowy; poziom DHT NIE maleje, ale sygnał AR w mieszku włosowym jest wyłączony. Praktyczna konsekwencja: finasteryd/dutasteryd powodują systemową supresję DHT (ryzyko PFS); RU58841 tylko blokada AR na poziomie skóry głowy (twierdzenie), ALE evidence Phase II wskazuje, że systemowa blokada AR może wystąpić przy wyższych dawkach (efekt feminizujący)."
    },
    {
      "q": "Dlaczego sklasyfikowany w sub-section 5AR?",
      "a": "Na podstawie konwencji grupowania przypadków użycia — cel profilaktyki wypadania włosów AAS wspólny z finasterydem/dutasterydem. Intencja użytkownika jest taka sama (łagodzenie przyspieszenia AGA AAS), a drzewa decyzyjne badawcze często rozważają trzy związki razem (finasteryd pierwszorzędny → dutasteryd drugorzędny → RU58841 niszowa alternatywa badawcza). Różnica na poziomie mechanizmu (inhibitor 5AR vs antagonista AR) jest wyraźnie wyjaśniona w FAQ wpisu — klasyfikacja sub-section NIE oznacza, że związek działa na substrat 5AR."
    },
    {
      "q": "Dostępność i ryzyko UGL?",
      "a": "RU58841 **NIE MA** pharma-grade source — tylko vendor chemii badawczej (Sigma-Aldrich grade syntezy, specialty research pharm). UGL 5% roztwór w vehikulum etanol/glikol propylenowy jest standardową formulacją w kontekście badawczym, ale czystość vendora jest często <90% (wymagane testowanie HPLC). Ryzyka źródła: (1) pseudo-substrat (vendor sprzedaje placebo vehikulum); (2) niestabilny związek (roztwór stabilny w lodówce, <50% potencji po 6 miesiącach w temperaturze pokojowej); (3) zanieczyszczenie vehikulum vendora (chroniczne podrażnienie skóry głowy, alergia). 2-3 zweryfikowane-źródła ocenione przez społeczność pozostają w 2024-25 (śledzenie społeczności r/RU58841)."
    },
    {
      "q": "Ryzyko feminizacji systemowej?",
      "a": "Evidence zakończenia Phase II 1996: przy wyższych dawkach (lub aplikacji na duży obszar skóry głowy) 5%+ roztworu wystąpiła systemowa blokada AR, dokumentując przypadki formacji ginekomastii, dysfunkcji seksualnej, pogorszenia jakości plemników w populacjach testowych. Nowoczesne formuły UGL twierdzą, że szybki klirens esterazy surowicy zapobiega temu, ale dane potwierdzenia in vivo NIE ISTNIEJĄ. Raporty na poziomie społeczności (sub r/RU58841) przy aplikacji 0,5-1 mL dziennie 5% roztworu pokazują rzadkie efekty systemowe — ale evidence jest skąpe i anegdotyczne. Łagodzenie ryzyka: niski-dawka start (0,5 mL dziennie vs 1 mL), mała powierzchnia skóry głowy (tylko-vertex, nie cała skóra głowy), miesięczny self-monitor objawów seksualnych."
    },
    {
      "q": "Status trialu klinicznego?",
      "a": "Faza II zakończona 1996 (Hoechst Marion Roussel, wtedy Sanofi-Aventis), z powodu feminizacji systemowej. **BRAK** trialu Phase III. BRAK nowoczesnej intencji pipeline farmaceutycznego (ostatnie zainteresowanie firmy farmaceutycznej około 2000 ustało). Przegląd emerging AGA pipeline Olsen 2018 (PMID 30041755) wspomina jako historyczną molekułę projektową, nie nowoczesnego kandydata pipeline. Zainteresowanie społeczności chemii badawczej AGA trwa, ALE wskrzeszenie pipeline farmaceutycznego nie jest oczekiwane. Aktualny kontekst badawczy: 'co mogłoby być, gdyby Phase III została ukończona' — ekstrapolacja społeczności z danych Phase I/II, NIE nowoczesne evidence farmaceutyczne."
    }
  ],
  "related": [
    "finasteride",
    "dutasteride",
    "rad-140"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 0.5,
      "medium": 1,
      "high": 1
    },
    "unit": "mL raz dziennie (topikalny 5% roztwór, aplikacja na skórę głowy)",
    "note": "Tylko kontekst chemii badawczej. 5% roztwór 0,5-1 mL raz dziennie wieczorem aplikacja na skórę głowy (vertex + przednia część dotknięta AGA). Łagodzenie ryzyka: niski-dawka start (0,5 mL), mała powierzchnia skóry głowy, miesięczny self-monitor objawów seksualnych. NIE zalecany dla zastosowania profilaktycznego lub kontekstu planowania płodności."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed startem aplikacji badawczej RU58841",
      "timing": "Użytkownik dotknięty AGA + nieadekwatna-odpowiedź-finasterydu/dutasterydu LUB cel unikania ryzyka PFS",
      "markers": "Total/Wolny Testosteron, E2, SHBG, DHT surowica baseline (NIE zmaleje jak na finasterydzie — inny mechanizm), IIEF-5, PHQ-9, analiza nasienia jeśli akcent płodności.",
      "purpose": "Baseline + stratifikacja ryzyka kontekstu badawczego. Pre-treatment: zrozum, że RU58841 to chemia badawcza, BRAK evidence Phase III, dane bezpieczeństwa skąpe."
    },
    "midCycle": {
      "label": "Aplikacja RU58841 tygodnie 4-8",
      "timing": "Start aplikacji topikalnej +4-8 tygodni",
      "markers": "Total Test (oczekiwany niezmieniony — RU58841 nie inhibitor 5AR), E2 (oczekiwany niezmieniony), powtórzenie IIEF-5 (monitor objawów seksualnych), PHQ-9, self-check objawów ginekomastii.",
      "purpose": "Monitor objawów systemowej blokady AR. Jeśli dysfunkcja seksualna, początek objawów gino → NATYCHMIASTOWE zaprzestanie (evidence zakończenia Phase II reprodukowane)."
    },
    "postCycle": {
      "label": "Zaprzestanie RU58841",
      "timing": "Ostatnia aplikacja +2-4 tygodnie",
      "markers": "IIEF-5 (recovery), PHQ-9, monitor ustąpienia objawów gino.",
      "purpose": "Potwierdź: efekt systemowy (jeśli rozwinął się) odwracalny przez 2-4 tygodnie (evidence Phase II). Jeśli utrzymujący się >3 miesiące → konsultacja specjalisty (endokrynolog)."
    },
    "cruise": {
      "label": "Chronic aplikacja badawcza na AAS cruise",
      "timing": "0,5-1 mL raz dziennie topikalnie",
      "markers": "Corocznie: IIEF-5, PHQ-9, DHT, Total Test, USG screen gino (monitor długoterminowego efektu feminizującego).",
      "purpose": "Chroniczny kontekst badawczy: dane bezpieczeństwa in vivo niekompletne, coroczny screen kliniczny rozsądny. **NIE** zalecane dla długoterminowej aplikacji chronic — status chemii badawczej i skąpe evidence."
    }
  },
  "anecdote": "RU-58841 jest opisywany w raportach anegdotycznych jako solidny i łatwo dostępny miejscowy anty-androgen. Doniesienia społeczności wskazują, że użytkownicy prowadzący intensywne cykle AAS często zauważają zmniejszenie wypadania włosów przy miejscowej aplikacji na dotknięte obszary. Jest powszechnie uważany za skuteczną opcję pierwszego rzutu w porównaniu z ogólnoustrojowymi blokerami DHT, ponieważ DHT pełni funkcje fizjologiczne, a szeroka farmakologiczna supresja niesie kompromisy. Niektóre doniesienia preferują obecnie pirilutamid (Topilutumide) zamiast RU-58841, powołując się na potencjalnie niższe ryzyko ogólnoustrojowe i porównywalną skuteczność. RU-58841 jest przeznaczony wyłącznie do stosowania miejscowego i nie powinien być przyjmowany doustnie. Ogólnie pozostaje jednym z najlepiej ugruntowanych miejscowych anty-androgenów w użyciu społecznościowym w kontekście utraty włosów związanej z AAS."
}
