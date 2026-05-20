// rFSH (Gonal-F / Puregon / Follistim / Bemfola) — Rekombinowany FSH, framing
// kliniczny Rx fertility. Cross-frame counterpart: `fsh-rec-perf` (odbudowa osi
// FSH po AAS-PCT). Źródła: EMA Gonal-F SPC (Merck Serono 1995), EMA Puregon SPC
// (Organon 1996), FDA Follistim label (MSD), Bouloux 2003 PMID 12826700,
// Liu 2009 PMID 19066302, Matorras 2009 (Reprod Biomed Online — no PMID).

export default {
  "id": "fsh-rec-peptid",
  "name": "rFSH (Płodność)",
  "image": "/peptides/rFSH.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.16)",
  "shortDesc": "Rekombinowany FSH — selektywna stymulacja komórek Sertolego (brak aktywności LH). Indukcja spermatogenezy, IVF kliniczne Rx.",
  "description": "rFSH (rekombinowany hormon folikulotropowy) to glikoproteina ekspresowana w komórkach CHO (Chinese Hamster Ovary), strukturalnie i funkcjonalnie identyczna z endogennym ludzkim FSH (podjednostka α + β, wzorzec glikozylacji klinicznie równoważny). Źródła markowe: Gonal-F (Merck-Serono, EMA 1995, FDA 1997), Puregon / Follistim (Organon → MSD, EMA 1996, FDA 1997), Bemfola (Gedeon Richter, EMA 2014 — biosimilar). Produkcja rekombinowana rozwiązała problemy zanieczyszczeń pochodnych FSH wyizolowanych z moczu (era Pergonal, Menopur): ZEROWA aktywność LH, wyższa spójność serii, ryzyko prionów wyeliminowane. Mechanizm: selektywny agonizm receptora FSHR komórek Sertolego → wspomaganie spermatogenezy, synteza inhibiny-B, produkcja białka wiążącego androgeny (ABP). **Kontekst kliniczny Rx płodności**: to jest wpis z sufiksem `-peptid` — narracja to indukcja spermatogenezy w męskim HypoH (hipogonadyzm hipogonadotropowy) + protokół IVF czynnik męski / czynnik żeński. Kluczowa różnica vs HCG: HCG napędza stronę Leydiga (produkcja testosteronu), rFSH napędza stronę Sertolego (spermatogeneza) — odbudowa płodności wymaga OBU; monoterapia jest nieadekwatna. **Uwaga cross-frame**: IDENTYCZNA cząsteczka występuje jako `fsh-rec-perf` w bibliotece performance w kontekście odbudowy osi FSH po AAS-PCT (odbudowa azoospermii po twardej supresji). Wybór apteczny identyczny, różni się tylko narracja. WADA-zakazany cały rok (S2.1 Hormony Peptydowe).",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Selektywny agonista receptora FSHR komórek Sertolego (rekombinowany, CHO-ekspresowany, BRAK aktywności LH)"
    },
    {
      "label": "Dawkowanie (męska spermatogeneza)",
      "value": "75-150 IU SC 3x/tydzień × 6-24 miesiące (w stacku z HCG)"
    },
    {
      "label": "Dawkowanie (kobieta IVF)",
      "value": "75-450 IU/dzień, indywidualizowane na podstawie odpowiedzi jajnikowej"
    },
    {
      "label": "Okres półtrwania",
      "value": "24-36 godzin SC (dłuższy niż FSH moczowy)"
    },
    {
      "label": "Status prawny",
      "value": "FDA + EMA Rx (Gonal-F, Puregon, Follistim, Bemfola), WADA S2 (zakazany)"
    }
  ],
  "mechanism": "rFSH to heterodimerowa glikoproteina: podjednostka α (wspólna z LH, HCG, TSH) + podjednostka β (specyficzna dla FSH). Źródło biotechnologiczne: linia komórkowa CHO poprzez ko-transfekcję dwoma plazmidami (gen FSH-α + FSH-β). Wzorzec glikozylacji klinicznie równoważny endogennemu ludzkiemu FSH, ale białko rekombinowane jest rozróżnialne analizą mass-spec — to podstawa detekcji WADA. Wiązanie z receptorem: wyłącznie agonista receptora FSHR komórek Sertolego (Kd ~0,1 nM). NIE aktywny na receptorze LHCGR komórek Leydiga (selektywność receptorowa FSH ↔ LH/HCG kompletna). Aktywacja Sertolego → ścieżka cAMP-PKA → funkcje wspomagania spermatogenezy: dojrzewanie spermatogoniów, produkcja inhibiny-B (marker Sertolego), synteza białka wiążącego androgeny (ABP) utrzymującego intratestikularne stężenie testosteronu. W kontekście płodności pełna odbudowa spermatogenezy wymaga PODWÓJNEGO protokołu HCG (stymulus Leydig-Test) + rFSH (stymulus Sertolego) — ponieważ produkcja spermy odbywa się pod kontrolą Test (intratestikularnie), ale wymaga osobnego stymulu Sertolego FSH.",
  "dosingInfo": "Indukcja spermatogenezy u mężczyzn (w stacku z HCG): 75-150 IU SC 3x/tydzień (np. pon/śr/pt) × 6-24 miesiące. Dawka tła HCG to 1500-3000 IU SC 2-3x/tydzień początkowo (stymulus Leydiga jako pierwszy → Test normalizuje się w 3-6 miesięcy), potem dodaje się rFSH. Stymulus IVF / jajnikowy u kobiet: 75-450 IU/dzień SC, indywidualizowany na podstawie odpowiedzi jajnikowej (monitoring pęcherzyków USG + miareczkowanie surowiczego E2). Rekonstytucja: Gonal-F pre-filled pen (kalibrowany w krokach 12,5 IU, kartridż wielodawkowy 300/450/900 IU); ampułka Puregon + woda bakteriostatyczna (formy dawkowe 50/75/100/150 IU); Bemfola pre-filled jednorazowy pen. Iniekcja SC (tkanka brzucha lub uda, strzykawka insulinowa 27-30G lub igła do pena). Sterylna praktyka: czyszczenie alkoholowe, NIE wstrząsać (denaturacja).",
  "studies": [
    {
      "title": "Induction of spermatogenesis by recombinant follicle-stimulating hormone (puregon) in hypogonadotropic azoospermic men who failed to respond to human chorionic gonadotropin alone",
      "authors": "Bouloux PM, Nieschlag E, Burger HG, Skakkebaek NE, Wu FC, Handelsman DJ, et al.",
      "journal": "J Androl. 2003;24(4):604-11.",
      "pmid": "12826700"
    },
    {
      "title": "Induction of spermatogenesis and fertility during gonadotropin treatment of gonadotropin-deficient infertile men: predictors of fertility outcome",
      "authors": "Liu PY, Baker HW, Jayadev V, Zacharin M, Conway AJ, Handelsman DJ.",
      "journal": "J Clin Endocrinol Metab. 2009;94(3):801-8.",
      "pmid": "19066302"
    },
    {
      "title": "Recombinant FSH versus highly purified urinary FSH: a randomized clinical trial in intrauterine insemination with husbands' sperm",
      "authors": "Matorras R, et al.",
      "journal": "Reprod Biomed Online. 2009;19(2):216-22."
    }
  ],
  "legalStatus": "USA: FDA Rx Gonal-F (Merck-Serono, zatwierdzenie 1997), Follistim (MSD, 1997). UE: EMA Rx Gonal-F (1995), Puregon (Organon → MSD, 1996), Bemfola (Gedeon Richter, 2014 — biosimilar z referencją Gonal-F). HU: zarejestrowane (Gonal-F, Puregon, Bemfola — przewaga węgierskiego producenta GR). PL: zarejestrowane (Gonal-F, Puregon, Bemfola). Wskazania: męski hipogonadyzm hipogonadotropowy (indukcja spermatogenezy), żeński stymulus jajnikowy IVF, anowulacja. Obowiązkowy Rx + specjalista (endokrynolog, medycyna reprodukcyjna, urologia). WADA: S2.1 Hormony Peptydowe (zakazane w zawodach + poza zawodami cały rok dla wszystkich męskich zawodników; bez wyjątków).",
  "onsetTime": "Odpowiedź hormonalna (aktywacja Sertolego, wzrost inhibiny-B) 24-72 godzin; kliniczny efekt spermatogenezy 3-6 miesięcy na kombinacji HCG (cykl spermatogenezy 64-74 dni)",
  "halfLife": "24-36 godzin po iniekcji SC (dłuższy niż FSH moczowy ~18-24 godzin)",
  "interactionsWith": [
    "hcg-peptid",
    "hmg-peptid",
    "anastrozol",
    "letrozol",
    "kisspeptin"
  ],
  "wadaStatus": "banned",
  "related": [
    "hcg-peptid",
    "hmg-peptid",
    "fsh-rec-perf",
    "kisspeptin"
  ],
  "faq": [
    {
      "q": "Dlaczego HCG sam nie wystarcza do odbudowy płodności u mężczyzn?",
      "a": "HCG aktywuje tylko receptor LHCGR komórek Leydiga → testikularna produkcja testosteronu zostaje odbudowana, libido + erekcja + tkanki kierowane przez Test wracają. ALE spermatogeneza odbywa się w komórkach Sertolego, które wymagają stymulu FSH. Na monoterapii HCG częsta jest sytuacja 'poziom Test odbudowany, ale azoospermia utrzymuje się' — szczególnie po cyklach long-cycle twardej supresji lub wieloletniego AAS, albo we wrodzonym HypoH. Bouloux 2003 (PMID 12826700) dokumentuje dokładnie to: u azoospermicznych mężczyzn nie-odpowiadających na HCG dodanie Puregonu daje odbudowę spermatogenezy w 60-80%. Klasyczny protokół: HCG przez 3-6 miesięcy (priming Leydiga), następnie HCG+rFSH podwójnie przez 6-24 miesięcy (pełny stymulus osi HPG)."
    },
    {
      "q": "rFSH vs HMG (Menopur) — kiedy który wybrać?",
      "a": "Dwa czynniki decydują. (1) **Potrzeba czystości**: rFSH to 100% FSH (BEZ zanieczyszczenia LH), HMG to mieszany FSH+LH ~1:1 (wyizolowany z moczu). Jeśli pacjent już jest na HCG (stymulus Leydiga pokryty), selektywność rFSH jest bardziej logiczna — nakładanie LH (HMG) jest zbędne. (2) **Koszt**: rFSH (Gonal-F) ~€300-400/75 IU w UE, HMG (Menopur) ~€20-25/75 IU — przez 12-24 miesięczny protokół różnica wynosi €5000-15000. Outcome kliniczny (Matorras 2009, Reprod Biomed Online, w kontekście inseminacji domacicznej) podobny; rFSH wygrywa tylko czystością + powtarzalnością dawkowania. Na rynku węgierskim Bemfola (biosimilar Gedeon Richter) plasuje się w średniej cenie, wybór kompromisowy."
    },
    {
      "q": "Dlaczego w żeńskim IVF wymagane jest monitorowanie odpowiedzi jajnikowej?",
      "a": "Międzyosobnicza odpowiedź jajnikowa na stymulus rFSH jest EKSTREMALNIE zmienna (spektrum poor responder vs hyper-responder). OHSS (Zespół Hiperstymulacji Jajników) może być powikłaniem zagrażającym życiu u hyper-responderów — bez odpowiedniego monitoringu. Standardowy protokół IVF: start 75-150 IU/dzień (225-300 IU przy podejrzeniu poor responder), USG jajnikowe z liczeniem pęcherzyków co 2-3 dni + miareczkowanie surowiczego E2. Jeśli E2 >4000 pmol/L lub liczba pęcherzyków >20 → ryzyko OHSS; trigger agonistą GnRH lub odwołanie cyklu zalecane. To obowiązkowo praca endokrynologa reprodukcyjnego + setting kliniki IVF, NIE protokół samodzielnie podawany."
    },
    {
      "q": "Czego mogę oczekiwać od protokołu rFSH+HCG w zespole Kallmanna?",
      "a": "Zespół Kallmanna (wrodzona deficyt GnRH + anosmia) to klasyczne wskazanie. Protokół Liu 2009 (PMID 19066302): HCG 1500-3000 IU 2-3x/tydzień × 3-6 miesięcy (priming Leydiga → endogenny cel Test 12-20 nmol/L), następnie rFSH 75-150 IU 3x/tydzień dodany. Outcome odbudowy spermatogenezy: 60-80% u pacjentów, oczekiwany przedział czasowy 12-24 miesięcy. Liczba spermy zwykle stabilizuje się przy dolnej granicy zakresu normalnego (5-20 milionów/mL), wystarczająca dla celów płodności IUI lub IVF-ICSI. Kriokonserwacja zalecana po udanym protokole (powtórzenie multi-cycle NIE gwarantuje stabilności odbudowy)."
    },
    {
      "q": "Cross-frame: czy to ta sama cząsteczka co `fsh-rec-perf`?",
      "a": "Tak, identyczna cząsteczka — ten sam produkt apteczny Gonal-F/Puregon/Bemfola, ta sama rekombinowana glikoproteina FSH CHO. RÓŻNICA to tylko framing: `fsh-rec-peptid` (ten wpis) w klinicznym kontekście Rx płodności (indukcja spermatogenezy HypoH, IVF czynnik męski/żeński), podczas gdy `fsh-rec-perf` w kontekście odbudowy osi FSH po AAS-PCT (odbudowa azoospermii po twardej supresji long-cycle, użytkownik performance). Użytkownik kupuje tę samą fiolkę — czyta ją tylko przez inną narrację. Droga kliniczna-Rx przechodzi przez endokrynologię + klinikę medycyny reprodukcyjnej, droga performance jako część samodzielnie podawanego protokołu AAS-PCT — prawnie OBA są Rx-only, użycie performance off-label."
    }
  ],
  "anecdote": null
}
