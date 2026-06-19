// Raloxifene (Evista) — SERM klasy benzotiofenowej, zatwierdzony przez FDA
// w 1997 (Eli Lilly) dla osteoporozy pomenopauzalnej; aktualizacja 2007 dla
// chemoprewencji ER+ raka piersi. Niszowe użycie w kontekście AAS: COFANIE
// istniejącej ginekomastii (silniejsza selektywność piersi niż Nolvadex).
// Źródła: FDA Evista SmPC, Lawrence 2004 PMID 14744776, Cummings 1999 MORE
// PMID 10580020, Vogel 2006 STAR PMID 16754727, Khan 2002 ginekomastia
// męska PMID 11843724.

export default {
  "id": "raloxifene",
  "sideEffects": [
    { "hu": "Vénás thromboembolia (mélyvénás trombózis, tüdőembólia) – az FDA Evista label fekete-keretes (black-box) figyelmeztetése, kb. 3-szoros relatív rizikó a placebóhoz képest; az első 4 hónapban a legmagasabb.", "en": "Venous thromboembolism (deep vein thrombosis, pulmonary embolism) – FDA Evista black-box warning, roughly 3-fold increased relative risk vs placebo, highest during the first 4 months.", "pl": "Żylna choroba zakrzepowo-zatorowa (zakrzepica żył głębokich, zatorowość płucna) – ostrzeżenie w czarnej ramce na etykiecie FDA Evista, około 3-krotnie zwiększone ryzyko względne vs placebo, najwyższe w pierwszych 4 miesiącach." },
    { "hu": "Hőhullámok (hot flashes) – gyakori (kb. 25-30%), különösen a kezelés első hónapjaiban; a SERM ösztrogén-antagonista hatásának következménye.", "en": "Hot flashes – common (around 25-30%), especially in the first months of treatment, a consequence of the SERM estrogen-antagonist effect.", "pl": "Uderzenia gorąca – częste (około 25-30%), zwłaszcza w pierwszych miesiącach leczenia, wynik antagonistycznego wobec estrogenu działania SERM." },
    { "hu": "Lábikra-görcsök és izomgörcsök – jól dokumentált, gyakori mellékhatás az Evista vizsgálatokban.", "en": "Leg cramps and muscle spasms – well-documented, common adverse effect in the Evista trials.", "pl": "Skurcze łydek i skurcze mięśni – dobrze udokumentowany, częsty efekt uboczny w badaniach nad Evistą." },
    { "hu": "Perifériás ödéma (folyadékretenció, lábdagadás) – gyakori panasz.", "en": "Peripheral edema (fluid retention, leg swelling) – a common complaint.", "pl": "Obrzęki obwodowe (zatrzymanie płynów, obrzęk nóg) – częsta dolegliwość." },
    { "hu": "Influenzaszerű tünetek, ízületi fájdalom (arthralgia) és izzadás – az enyhébb, gyakran jelentett mellékhatások közé tartoznak.", "en": "Flu-like syndrome, joint pain (arthralgia) and sweating – among the milder, frequently reported side effects.", "pl": "Objawy grypopodobne, ból stawów (artralgia) i pocenie się – należą do łagodniejszych, często zgłaszanych efektów ubocznych." },
    { "hu": "Megnövekedett stroke-okozta halálozási rizikó dokumentált igazolt koszorúér-betegségben vagy magas kardiovaszkuláris kockázatú betegeknél (RUTH-vizsgálat) – maga a stroke incidenciája nem nőtt, de a fatális kimenetel igen.", "en": "Increased risk of fatal stroke documented in women with proven coronary heart disease or at high cardiovascular risk (RUTH trial) – overall stroke incidence was not raised, but fatal outcomes were.", "pl": "Zwiększone ryzyko zgonu z powodu udaru udokumentowane u kobiet z potwierdzoną chorobą wieńcową lub wysokim ryzykiem sercowo-naczyniowym (badanie RUTH) – ogólna częstość udarów nie wzrosła, ale zgony tak." }
  ],
  "contraindications": [
    { "hu": "Aktív vagy korábbi vénás thromboembóliás esemény (mélyvénás trombózis, tüdőembólia, retina-véna trombózis) – abszolút kontraindikáció az FDA Evista label szerint.", "en": "Active or past venous thromboembolic event (deep vein thrombosis, pulmonary embolism, retinal vein thrombosis) – absolute contraindication per FDA Evista label.", "pl": "Czynny lub przebyty epizod żylnej choroby zakrzepowo-zatorowej (zakrzepica żył głębokich, zatorowość płucna, zakrzepica żyły siatkówki) – bezwzględne przeciwwskazanie według etykiety FDA Evista." },
    { "hu": "Terhesség és terhességet tervező nők, valamint szoptatás – Pregnancy Category X, teratogén, fogamzóképes nőknél tilos.", "en": "Pregnancy and women who may become pregnant, plus breastfeeding – Pregnancy Category X, teratogenic, contraindicated in women of childbearing potential.", "pl": "Ciąża i kobiety mogące zajść w ciążę oraz karmienie piersią – kategoria ciążowa X, teratogenny, przeciwwskazany u kobiet w wieku rozrodczym." },
    { "hu": "Tartós immobilizáció (műtét utáni felépülés, hosszú utazás, ágyhoz kötöttség) – a VTE-rizikó miatt; immobilizáció előtt legalább 72 órával le kell állítani és mobilizációig nem folytatható.", "en": "Prolonged immobilization (post-surgical recovery, long travel, bed rest) – due to VTE risk; should be stopped at least 72 hours before immobilization and not resumed until full mobility returns.", "pl": "Przedłużone unieruchomienie (rekonwalescencja pooperacyjna, długa podróż, leżenie w łóżku) – ze względu na ryzyko ŻChZZ; należy odstawić co najmniej 72 godziny przed unieruchomieniem i nie wznawiać do pełnego odzyskania ruchomości." },
    { "hu": "Igazolt koszorúér-betegség, korábbi stroke vagy magas kardiovaszkuláris kockázat – a RUTH-vizsgálatban megnőtt a fatális stroke kockázata.", "en": "Established coronary heart disease, prior stroke or high cardiovascular risk – fatal stroke risk was increased in the RUTH trial.", "pl": "Rozpoznana choroba wieńcowa, przebyty udar lub wysokie ryzyko sercowo-naczyniowe – w badaniu RUTH wzrosło ryzyko zgonu z powodu udaru." },
    { "hu": "Súlyos májkárosodás (hepatikus elégtelenség) – nincs elegendő biztonságossági adat, óvatosság ill. kerülés javasolt.", "en": "Severe hepatic impairment (liver insufficiency) – insufficient safety data, caution or avoidance advised.", "pl": "Ciężka niewydolność wątroby – niewystarczające dane dotyczące bezpieczeństwa, zalecana ostrożność lub unikanie." },
    { "hu": "Súlyos vesekárosodás – korlátozott adat, óvatos alkalmazás szükséges.", "en": "Severe renal impairment – limited data, cautious use required.", "pl": "Ciężka niewydolność nerek – ograniczone dane, wymagane ostrożne stosowanie." },
    { "hu": "Kezeletlen ill. tisztázatlan eredetű méhvérzés vagy endometriális rendellenesség – ki kell vizsgálni a raloxifén megkezdése előtt.", "en": "Unexplained uterine bleeding or endometrial abnormality – must be investigated before starting raloxifene.", "pl": "Niewyjaśnione krwawienie z macicy lub nieprawidłowości endometrium – należy je zdiagnozować przed rozpoczęciem raloksyfenu." }
  ],
  "name": "Raloxifene (Evista)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#D4537E",
  "tagColor": "rgba(212,83,126,0.18)",
  "shortDesc": "SERM benzotiofenowy, zatwierdzony przez FDA (1997 Lilly) dla osteoporozy pomenopauzalnej + chemoprewencji ER+ raka piersi. Niszowe użycie w kontekście AAS: cofanie istniejącej ginekomastii z silniejszą selektywnością piersi niż Nolvadex. NIE pierwotny SERM restartu HPTA.",
  "description": "Raloxifene (Evista) jest selektywnym modulatorem receptora estrogenowego (SERM) klasy benzotiofenowej, strukturalnie odmiennym od trifenyloetylenowych Nolvadexu/Clomidu. Eli Lilly uzyskał zatwierdzenie FDA w 1997 dla osteoporozy pomenopauzalnej (badanie MORE Cummings 1999 PMID 10580020), a w 2007 wskazanie rozszerzono na chemoprewencję inwazyjnego ER+ raka piersi u kobiet pomenopauzalnych wysokiego ryzyka (badanie STAR Vogel 2006 PMID 16754727 — Raloxifene vs Tamoxifen porównanie bezpośrednie: podobna skuteczność prewencji, niższe ryzyko VTE). Profil tkankowo-specyficzny: antagonista ER-α w tkance piersi + endometrium, agonista w kości. W kontekście AAS Raloxifene zajmuje pozycję niszową: COFANIE istniejącej ginekomastii (NIE restart osi HPTA) — Lawrence 2004 PMID 14744776 wykazał 50%+ redukcję pubertalnej tkanki ginekomastycznej w 6 miesięcy. Daje silniejszą antyestrogenną selektywność piersi niż Nolvadex, co tłumaczy jego ukierunkowane zastosowanie na pierś. Glukuronizacja jest pierwotną drogą metabolizmu (NIE CYP2D6 jak Tamoxifen), unikając interakcji z SSRI — to jedna z praktycznych zalet. Etykieta FDA Evista: czarna ramka ostrzeżenia przed żylną chorobą zakrzepowo-zatorową (VTE), 3-krotny wzrost względnego ryzyka vs placebo (dane MORE trial).",
  "keyInfo": [
    {"label": "Mechanizm", "value": "SERM benzotiofenowy, antagonista ER-α w piersi+macicy, agonista w kości"},
    {"label": "Dawkowanie (cofanie ginekomastii AAS)", "value": "60 mg/dzień × 6-12 tygodni"},
    {"label": "Okres półtrwania", "value": "~27 h (dawka raz dziennie)"},
    {"label": "Początek działania", "value": "Regresja tkanki ginekomastii 6-12 tygodni"},
    {"label": "Status prawny", "value": "FDA + EMA Rx (osteo pomenopauzalna + prewencja raka piersi), WADA S4 (zabroniony)"}
  ],
  "mechanism": "Raloxifene to SERM o strukturze benzotiofenowej, chemicznie odmienny od trifenyloetylenowych Nolvadexu/Clomidu. Wiąże się kompetycyjnie z ER-α w piersi i endometrium z antagonistyczną zmianą konformacyjną, ale częściowy agonista w kości (stąd efekt osteo-protekcyjny). Selektywność ER-α tkanki piersi jest SILNIEJSZA niż Nolvadexu — dlatego bardziej skuteczna w regresji istniejącej tkanki ginekomastycznej (Lawrence 2004 PMID 14744776). Zapewnia również blokadę ER w przysadce, ale efekt mass-effect jest słabszy niż Nolvadex (Raloxifene NIE jest pierwotnym SERM restartu HPTA). Glukuronizacja jest pierwotną drogą metabolizmu (UGT1A1/1A8/1A10) — doskonała własność: BRAK interakcji z CYP2D6 (vs Tamoxifen), więc stack SSRI (paroksetyna, fluoksetyna) jest swobodnie łączony.",
  "legalStatus": "USA: zatwierdzony przez FDA 1997 (Evista, osteo pomenopauzalna), rozszerzenie wskazania 2007 (prewencja inwazyjnego ER+ raka piersi u kobiet wysokiego ryzyka). UE: zatwierdzony przez EMA (Evista, Optruma Rx). HU + PL: zarejestrowany (Evista Rx). WADA: S4.3 modulator receptora estrogenowego (zabroniony w zawodach i poza zawodami dla mężczyzn).",
  "onsetTime": "Regresja tkanki ginekomastii mierzalna 4-6 tygodni, klinicznie znacząca 6-12 tygodni",
  "halfLife": "~27 godzin (dawka raz dziennie)",
  "halfLifeActive": "~27 godzin (brak aktywnego metabolitu, parent compound jest głównym środkiem)",
  "interactionsWith": ["nolvadex", "clomid", "enclomiphene", "anastrozol", "letrozol"],
  "aromatization": "Nie aromatyzuje — selektywny antagonista ER-α (pierś + macica), częściowy agonista w kości. NIE inhibitor CYP19. Nie wpływa bezpośrednio na oś aromatazy.",
  "hepatotoxicity": "Niska — niesteroidowy, nie 17α-alkilowany. Etykieta FDA Evista: hepatic adverse events <2% częstość. Glukuronizacja pierwotny metabolizm (NIE pośredniczony przez CYP → mniej DDI).",
  "wadaStatus": "restricted",
  "androgenicRatio": "N/A (nie AAS, SERM)",
  "bindingAffinity": "Wysokie kompetycyjne powinowactwo do ER-α (Ki ~50 nM), niższe do ER-β. Tkankowo-specyficzny efekt konformacyjny tłumaczy selektywność tkankową (antagonista w piersi, agonista w kości).",
  "detectionWindow": "WADA-akredytowane wykrywanie GC-MS/LC-MS/MS w moczu ~1-2 miesiące (marker metabolitu raloxifenoglukuronidu).",
  "benefits": [
    "COFANIE istniejącej ginekomastii — silniejsza selektywność piersi niż Nolvadex (Lawrence 2004 PMID 14744776 50%+ regresja w 6 miesięcy)",
    "BRAK interakcji z CYP2D6 (vs Tamoxifen) → stack SSRI (paroksetyna/fluoksetyna) swobodnie łączony",
    "Działanie ochronne na kości jako częściowy agonista (redukcja osteoporozy jako efekt uboczny)",
    "Dane STAR trial Vogel 2006: podobna skuteczność prewencji jak Tamoxifen, niższe ryzyko VTE u pacjentek kobiet",
    "Tani, generic dostępny w całej Europie"
  ],
  "quickStart": [
    "Protokół cofania ginekomastii: 60 mg/dzień × 6-12 tygodni, niezależnie od posiłków",
    "Badania krwi pre-protokół: D-dimer + INR/PT baseline (screening VTE obowiązkowy), panel lipidowy, panel wątrobowy, Total/Free Test, E2, prolaktyna (po cyklach Tren)",
    "NIE zastępuje PCT z Nolvadexem — Raloxifene NIE jest restartem HPTA; jeśli PCT jest też celem, Nolvadex może być stackowany",
    "Ryzyko VTE: wywiad DVT/PE/zatorowości płucnej to bezwzględne przeciwwskazanie; wywiad rodzinny VTE wymaga ostrożności",
    "Utrzymanie masy podczas cyklu: kombinacja Raloxifene + Anastrozol (prewencja ginekomastii + supresja E2) niszowy protokół w kontekście siłowni"
  ],
  "expectations": [
    {"label": "Tygodnie 1-2", "body": "Wrażliwość tkanki ginekomastii zaczyna spadać. Mierzalne zmiany lustra testu minimalne, ALE subiektywne wrażenie kompresji łagodzi się."},
    {"label": "Tygodnie 3-6", "body": "Widoczna regresja tkanki ginekomastii zaczyna (Lawrence 2004 trial: 30-50% redukcja w 6 tygodni). Efekt ochronny dla kości jako efekt uboczny."},
    {"label": "Tygodnie 7-12", "body": "Maksymalna regresja ginekomastii (50%+ redukcja średnio). Zakończenie protokołu lub rozważenie dawki podtrzymującej."},
    {"label": "Post-protokół", "body": "Badania krwi potwierdzające (E2, panel lipidowy, D-dimer). Jeśli tkanka ginekomastii nadal obecna, dozwolone przedłużenie +6 tygodni. Uporczywa tkanka → konsultacja chirurgiczna (mastektomia)."}
  ],
  "quality": {
    "pure": [
      "Eli Lilly Evista 60 mg blister, jakość Rx farmaceutyczna (UE + USA dostępne)",
      "Optruma 60 mg (marka UE Eli Lilly) — jakość farmaceutyczna, zarejestrowana",
      "Raloxifene-Sandoz, Raloxifene-Teva generic odpowiednik (UE)",
      "Indyjski generic (Cipla Raloxa) — jakość farmaceutyczna, ePharmacy"
    ],
    "caution": [
      "Ryzyko VTE: 3-krotny wzrost względnego ryzyka vs placebo (etykieta FDA Evista czarna ramka ostrzeżenia) — wywiad obowiązkowy",
      "Uderzenia gorąca skutek uboczny powszechny (~25-30% użytkowników) — typowe u kobiet, łagodniejsze u mężczyzn",
      "Skurcze łydek, obrzęk rzadkie",
      "Raloxifene NIE jest SERM restartu HPTA — nie myl z PCT z Nolvadexem; różny przypadek użycia"
    ],
    "avoid": [
      "Wywiad DVT/PE/zatorowości płucnej (bezwzględne przeciwwskazanie etykiety FDA)",
      "Aktywne czynniki ryzyka VTE (pooperacyjne, immobilizacja, wysoki cholesterol + komorbidność sercowo-naczyniowa)",
      "Współczesna ciąża (Pregnancy Category X — partnerka)",
      "Aktywna choroba wątroby (względne przeciwwskazanie)"
    ]
  },
  "interactions": [
    "Stack z Nolvadex: NIE zalecane (pokrywający się mechanizm, mass-effect blokady ER nadmiarowy) — wybierz jeden",
    "Współpodanie z AI (Anastrozol/Letrozol/Exemestane): można łączyć w protokole masy (supresja E2 + ukierunkowanie na tkankę ginekomastii)",
    "SSRI (paroksetyna/fluoksetyna): SWOBODNIE łączone (metabolizm tylko glukuronidacji, BRAK interakcji z CYP2D6 — doskonała własność vs Tamoxifen)",
    "Warfaryna: minimalna interakcja (vs Tamoxifen z silną interakcją CYP)",
    "Cholestyramina: 40% spadek absorpcji — odstęp 4 godziny między dawkami",
    "Środki kardioprotekcyjne (statyna, aspiryna): dobrze łączone"
  ],
  "studies": [
    {"title": "The effect of raloxifene on risk of breast cancer in postmenopausal women: results from the MORE randomized trial. Multiple Outcomes of Raloxifene Evaluation.", "authors": "Cummings SR, Eckert S, Krueger KA, Grady D, Powles TJ, Cauley JA, Norton L, Nickelsen T, Bjarnason NH, Morrow M, Lippman ME, Black D, Glusman JE, Costa A, Jordan VC", "journal": "JAMA", "pmid": "10376571"},
    {"title": "Effects of tamoxifen vs raloxifene on the risk of developing invasive breast cancer and other disease outcomes: the NSABP Study of Tamoxifen and Raloxifene (STAR) P-2 trial", "authors": "Vogel VG, Costantino JP, Wickerham DL, et al.", "journal": "JAMA. 2006;295(23):2727-41.", "pmid": "16754727"},
    {"title": "Beneficial effects of raloxifene and tamoxifen in the treatment of pubertal gynecomastia.", "authors": "Lawrence SE, Faught KA, Vethamuthu J, Lawson ML", "journal": "J Pediatr", "pmid": "15238910"},
    {"title": "Treatment of adolescents with gynecomastia.", "authors": "Malozowski S, Stadel BV", "journal": "J Pediatr", "pmid": "15812473"}
  ],
  "faq": [
    {"q": "Cofanie ginekomastii: Nolvadex vs Raloxifene?", "a": "Nolvadex: prewencja + on-cycle prewencyjne (mechanizm blokady); Raloxifene: COFANIE istniejącej tkanki ginekomastii (silniejsza selektywność piersi). Drzewo decyzji klinicznych: prewencja ginekomastii w trakcie cyklu → Nolvadex; ratunek istniejącej ginekomastii po cyklu (protokół Lawrence 2004) → Raloxifene. Równie bezpieczne, NIE stackowalne (pokrywający się mechanizm)."},
    {"q": "Czy ryzyko VTE jest realne też u mężczyzn?", "a": "Brak danych (badania Evista zakończyły się u kobiet pomenopauzalnych). Teoretycznie: 3-krotny wzrost ryzyka VTE to efekt modulacji ER, prawdopodobnie obecny u mężczyzn w pewnym stopniu. Praktyczny protokół: wywiad (rodzinny DVT/PE), D-dimer baseline, mobilny tryb życia podczas cyklu; jeśli jakikolwiek czynnik ryzyka (pooperacyjny, immobilizacja, wysoki LDL + palenie), nie używaj."},
    {"q": "Czy można używać do restartu osi PCT?", "a": "Ograniczone dowody — przegląd Karavolos 2015 wspomina, ale NIE jest pierwotnie zaprojektowany do tego. Zapewnia blokadę ER w przysadce, ale mass-effect słabszy niż Nolvadex/Clomid → suboptymalny restart HPTA. Jeśli cofanie ginekomastii + PCT to oba cele, Nolvadex sam lub Nolvadex + Raloxifene NIE połączone (pokrywający się mechanizm), raczej Nolvadex sam + post-PCT bridge z Raloxifene na pozostałą tkankę ginekomastyczną."},
    {"q": "Efekt na kości u mężczyzn?", "a": "Udokumentowana pozytywna korzyść osteo — wzrost gęstości mineralnej kości (BMD) w kości beleczkowej (Cummings 1999 MORE trial). Może być korzyścią uboczną PCT po cyklu (ryzyko osteoporozy po cyklu nieznacznie się zmniejsza). Długoterminowe chroniczne użycie nie jest w pełni zbadane w kohortach męskich."}
  ],
  "related": ["nolvadex", "clomid", "enclomiphene", "anastrozol"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 60, "medium": 60, "high": 120},
    "unit": "mg/dzień (doustnie, raz dziennie)",
    "note": "Protokół cofania ginekomastii: 60 mg/dzień × 6-12 tygodni. Dla ciężkiej ginekomastii 120 mg/dzień × 4-6 tygodni off-label (Khan 2002 case-report dose), ALE obserwacja ryzyka VTE. Niezależnie od posiłków."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Pre-protokół",
      "timing": "2 tygodnie przed startem",
      "markers": "D-dimer + INR/PT (screening VTE), Total Testosterone, Free Testosterone, Estradiol (LC-MS/MS), LH, FSH, SHBG, Prolaktyna, panel lipidowy, ALT, AST, hemogram.",
      "purpose": "Baseline ryzyka VTE (OBOWIĄZKOWE z powodu czarnej ramki FDA). Baseline hormonalny dla kontekstu tkanki ginekomastii."
    },
    "midCycle": {
      "label": "Mid-protokół (tygodnie 4-6)",
      "timing": "Start +4-6 tygodni",
      "markers": "D-dimer (monitor VTE), Total Test, E2, panel lipidowy, dziennik częstości uderzeń gorąca.",
      "purpose": "Monitoring VTE + śledzenie regresji tkanki ginekomastii (test lustra + opcjonalne USG)."
    },
    "postCycle": {
      "label": "Koniec protokołu + odbudowa",
      "timing": "Ostatnia dawka +2 tygodnie i +6 tygodni",
      "markers": "D-dimer, Total Test, E2, panel lipidowy, potwierdzenie statusu tkanki ginekomastii (badanie kliniczne lub USG).",
      "purpose": "Ryzyko VTE wraca do baseline. Ostateczny pomiar regresji tkanki ginekomastii."
    },
    "cruise": {
      "label": "Długoterminowe — we wskazaniach kobiecych",
      "timing": "Osteo pomenopauzalna: 5-10 lat chronicznie; cofanie ginekomastii AAS: max 6-12 tygodni",
      "markers": "Cruise N/A w kontekście AAS.",
      "purpose": "Chroniczne użycie Raloxifene u mężczyzn nie jest istotne dla protokołu AAS; zatrzymanie po celu cofania ginekomastii."
    }
  }
}
