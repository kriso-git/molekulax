// ECA-stack (Ephedrine + Caffeine + Aspirin) – klasyczny stack
// termogeniczny lat 90. Sources: Astrup 1992 PMID 1346830, Greenway 2001
// PMID 11707560, Boozer 2002 PMID 12122475, Daly 1993 PMID 8367356,
// FDA 2004 ephedra consumer update, Yokota 2013 acetaminophen-ephedra hepatic.

export default {
  "id": "eca-stack",
  "sideEffects": [
    { "hu": "Kardiovaszkuláris terhelés: tachycardia, vérnyomás-emelkedés (+10–20 mmHg szisztolés), palpitáció; súlyos esetben aritmia, miokardiális infarktus és stroke (FDA 2004 ephedra-ban: 100+ haláleset, 16 000+ adverse-event).", "en": "Cardiovascular strain: tachycardia, raised blood pressure (+10–20 mmHg systolic), palpitations; in severe cases arrhythmia, myocardial infarction and stroke (FDA 2004 ephedra ban: 100+ deaths, 16,000+ adverse events).", "pl": "Obciążenie sercowo-naczyniowe: tachykardia, wzrost ciśnienia (+10–20 mmHg skurczowe), kołatanie serca; w ciężkich przypadkach arytmia, zawał i udar (zakaz FDA z 2004: 100+ zgonów, 16 000+ zdarzeń niepożądanych)." },
    { "hu": "Központi idegrendszeri stimuláció: szorongás, idegesség, ingerlékenység, remegés (tremor) és nyugtalanság, dózisfüggő módon.", "en": "CNS stimulation: anxiety, nervousness, irritability, tremor and restlessness, dose-dependent.", "pl": "Stymulacja OUN: lęk, nerwowość, drażliwość, drżenie (tremor) i niepokój, zależnie od dawki." },
    { "hu": "Álmatlanság (insomnia): az ephedrine és koffein hosszú felezési ideje miatt, főleg ha a délutáni adag 16:00 után kerül bevételre.", "en": "Insomnia: due to the long half-lives of ephedrine and caffeine, especially if the afternoon dose is taken after 16:00.", "pl": "Bezsenność: z powodu długiego okresu półtrwania efedryny i kofeiny, zwłaszcza gdy popołudniowa dawka jest przyjmowana po 16:00." },
    { "hu": "Tachyphylaxis (toleranciakialakulás): a hatás 4–6 hét folyamatos használat után csökken a preszinaptikus noradrenalin-raktár kimerülése és a β-receptor-downreguláció miatt; dózisemelés NEM ajánlott, mert csak a kardiovaszkuláris kockázatot fokozza.", "en": "Tachyphylaxis (tolerance): effect declines after 4–6 weeks of continuous use due to depletion of presynaptic noradrenaline stores and β-receptor downregulation; dose escalation is NOT advised as it only increases cardiovascular risk.", "pl": "Tachyfilaksja (tolerancja): efekt słabnie po 4–6 tygodniach ciągłego stosowania z powodu wyczerpania presynaptycznych zapasów noradrenaliny i downregulacji receptorów β; zwiększanie dawki NIE jest zalecane, gdyż tylko podnosi ryzyko sercowo-naczyniowe." },
    { "hu": "Aspirin gasztrointesztinális irritáció és vérzéses kockázat: a COX-1-gátlás miatt gyomorirritáció, gastritis és GI-vérzés-hajlam, magasabb dózisnál (>325 mg/nap) fokozottan.", "en": "Aspirin gastrointestinal irritation and bleeding risk: COX-1 inhibition causes gastric irritation, gastritis and GI-bleed tendency, more pronounced at higher doses (>325 mg/day).", "pl": "Podrażnienie żołądkowo-jelitowe i ryzyko krwawienia od aspiryny: hamowanie COX-1 powoduje podrażnienie żołądka, zapalenie błony śluzowej i skłonność do krwawień z przewodu pokarmowego, nasilone przy wyższych dawkach (>325 mg/dobę)." },
    { "hu": "Sympathomimetikus mellékhatások: izzadás, szájszárazság, fejfájás, hányinger és étvágycsökkenés (az utóbbi a kívánt hatás része, de túlzott kalóriadeficitet okozhat).", "en": "Sympathomimetic effects: sweating, dry mouth, headache, nausea and appetite suppression (the latter is part of the intended effect but can cause excessive caloric deficit).", "pl": "Działania sympatykomimetyczne: pocenie się, suchość w ustach, ból głowy, nudności i zmniejszenie apetytu (to ostatnie jest częścią zamierzonego efektu, ale może powodować nadmierny deficyt kaloryczny)." },
    { "hu": "Vizeletürítési és vérnyomási hatás: az ephedrine vizeletretenciót okozhat (különösen prosztata-megnagyobbodásnál) és tartós szisztolés-diasztolés vérnyomás-emelkedést tarthat fenn.", "en": "Urinary and pressor effects: ephedrine can cause urinary retention (especially with prostate enlargement) and sustain elevated systolic-diastolic blood pressure.", "pl": "Efekty moczowe i presyjne: efedryna może powodować zatrzymanie moczu (zwłaszcza przy przeroście prostaty) i utrzymywać podwyższone ciśnienie skurczowo-rozkurczowe." },
    { "hu": "Rebound-fáradtság és rebound-étvágy: hirtelen leállításkor a stimuláns-megvonás miatt kifejezett fáradtság, levertség és visszacsapó étvágynövekedés jelentkezhet.", "en": "Rebound fatigue and rebound appetite: abrupt cessation can cause marked fatigue, low mood and rebound increase in appetite from stimulant withdrawal.", "pl": "Zmęczenie i apetyt z odbicia: nagłe odstawienie może powodować wyraźne zmęczenie, obniżenie nastroju i wzrost apetytu z odbicia w wyniku odstawienia stymulantu." }
  ],
  "contraindications": [
    { "hu": "Súlyos vagy kontrollálatlan magasvérnyomás (>140/90 mmHg) – abszolút kontraindikáció a sympathomimetikus vérnyomás-emelő hatás miatt (FDA 2004 ephedra-ban stroke + AMI-cluster).", "en": "Severe or uncontrolled hypertension (>140/90 mmHg) – absolute contraindication due to the sympathomimetic pressor effect (FDA 2004 ephedra ban: stroke + MI cluster).", "pl": "Ciężkie lub niekontrolowane nadciśnienie (>140/90 mmHg) – bezwzględne przeciwwskazanie z powodu sympatykomimetycznego działania presyjnego (zakaz FDA z 2004: udary + zawały)." },
    { "hu": "Meglévő szívbetegség: tachyarrhythmia, pitvarfibrilláció, koszorúér-betegség vagy cardiomyopathia – abszolút kontraindikáció.", "en": "Pre-existing heart disease: tachyarrhythmia, atrial fibrillation, coronary artery disease or cardiomyopathy – absolute contraindication.", "pl": "Istniejąca choroba serca: tachyarytmia, migotanie przedsionków, choroba wieńcowa lub kardiomiopatia – bezwzględne przeciwwskazanie." },
    { "hu": "MAO-gátló terápia (phenelzine, tranylcypromine) – hipertenzív krízis veszélye, abszolút kontraindikáció; az MAO-gátló leállítása után is 14 nap várakozás szükséges.", "en": "MAO-inhibitor therapy (phenelzine, tranylcypromine) – risk of hypertensive crisis, absolute contraindication; a 14-day washout after stopping the MAOI is required.", "pl": "Terapia inhibitorami MAO (fenelzyna, tranylcypromina) – ryzyko przełomu nadciśnieniowego, bezwzględne przeciwwskazanie; po odstawieniu MAOI konieczne 14 dni przerwy." },
    { "hu": "Hyperthyreosis / Graves-betegség és pheochromocytoma – abszolút kontraindikáció az additív sympathomimetikus katecholamin-túlsúly miatt.", "en": "Hyperthyroidism / Graves' disease and pheochromocytoma – absolute contraindication due to additive sympathomimetic catecholamine excess.", "pl": "Nadczynność tarczycy / choroba Gravesa-Basedowa i guz chromochłonny (pheochromocytoma) – bezwzględne przeciwwskazanie z powodu addytywnego nadmiaru katecholamin." },
    { "hu": "Terhesség és szoptatás (FDA Category C) – kerülendő a magzati és kardiovaszkuláris kockázat miatt.", "en": "Pregnancy and breastfeeding (FDA Category C) – avoid due to fetal and cardiovascular risk.", "pl": "Ciąża i karmienie piersią (FDA kategoria C) – unikać z powodu ryzyka dla płodu i sercowo-naczyniowego." },
    { "hu": "Gyermek- és serdülőkor (<16 év) – aspirin miatt Reye-szindróma veszélye, valamint a stimuláns terhelés kockázata.", "en": "Children and adolescents (<16 years) – risk of Reye's syndrome from aspirin plus the burden of stimulant load.", "pl": "Dzieci i młodzież (<16 lat) – ryzyko zespołu Reye'a od aspiryny oraz obciążenie stymulantem." },
    { "hu": "Relatív kontraindikációk: SSRI/SNRI együttadás (szerotonin-szindróma kockázat), krónikus β-blokkoló-terápia (α-receptor-túlsúlyos vasoconstrictio), aspirin-allergia / aktív peptikus fekély, és véralvadásgátló (warfarin) kezelés – fokozott vérzésveszély és INR-emelkedés.", "en": "Relative contraindications: SSRI/SNRI co-use (serotonin syndrome risk), chronic beta-blocker therapy (unopposed alpha vasoconstriction), aspirin allergy / active peptic ulcer, and anticoagulant (warfarin) therapy – increased bleeding risk and raised INR.", "pl": "Przeciwwskazania względne: jednoczesne stosowanie SSRI/SNRI (ryzyko zespołu serotoninowego), przewlekła terapia beta-blokerem (skurcz naczyń z przewagą alfa), alergia na aspirynę / czynna choroba wrzodowa oraz leczenie przeciwkrzepliwe (warfaryna) – zwiększone ryzyko krwawienia i wzrost INR." }
  ],
  "name": "ECA-stack (Ephedrine + Caffeine + Aspirin)",
  "image": "/performance/tablet-pile-white.png",
  "accentColor": "#f97316",
  "tagColor": "rgba(249,115,22,0.18)",
  "shortDesc": "Ephedryna 25 mg + Kofeina 200 mg + Aspiryna 81 mg – klasyczny stack termogeniczny lat 90. Według Astrup 1992 Lancet (PMID 1346830) ~3x bardziej potencjalny niż sama ephedryna; od bana FDA 2004 ephedrine jest w UE na Rx, blackmarket-protokół fat-burner.",
  "description": "ECA-stack (Ephedrine + Caffeine + Aspirin) to termogeniczny protokół utraty tłuszczu z lat 90., który po Astrup 1992 Lancet (PMID 1346830) eksplodował w bodybuildingowym undergroundzie. Mechanizm trzech komponentów jest synergiczny: ephedryna jest α/β-sympatykomimetycznym alkaloidem powodującym uwalnianie noradrenaliny z presynaptycznych pęcherzyków; kofeina jest inhibitorem PDE i antagonistą receptora adenozyny, hamując rozkład cAMP i przedłużając efekt ephedryny; aspiryna (81 mg low-dose) jako modulator endotelialnych prostaglandyn tłumi vasokonstrykcyjny rebound ephedryny. Daly 1993 Am J Clin Nutr (PMID 8367356) RCT-evidence: kombinacja 25/200 mg ephedryny+kofeiny wytwarza ~3x silniejszy wzrost tempa termogenicznego niż sama ephedryna. Boozer 2002 Int J Obes (PMID 12122475) 6-miesięczne RCT w kohorcie otyłej zmierzyło 7,2 kg utraty tłuszczu vs 2,4 kg placebo. FDA 2004 Consumer Update umieściło ephedrę na liście zakazanej po 100+ zgonach + 16 000+ raportach niepożądanych zdarzeń (klaster sercowo-naczyniowy: udar + AMI), więc UE R03CA02 (klasa ATC ephedryny) stała się Rx-only. Aspiryna OTC, kofeina OTC. WADA S6 stymulant – w zawodach zakazany.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Synergia: ephedryna α/β-sympatykomimetyk + kofeina PDE-inhibitor + aspiryna endotelial-protekcja"
    },
    {
      "label": "Dawkowanie",
      "value": "25/200/81 mg PO 2-3x/dziennie, cykl MAX 4-6 tygodni"
    },
    {
      "label": "Okres półtrwania",
      "value": "Ephedryna 3-6h; kofeina 5h; aspiryna 4-6h"
    },
    {
      "label": "Początek działania",
      "value": "30-60 minut, peak termogeniczny 1-2h"
    },
    {
      "label": "Status prawny",
      "value": "HU ephedryna ATC R03CA02 Rx; UE R03 Rx-only (od bana FDA 2004); aspiryna OTC; kofeina OTC. WADA S6 zakaz w zawodach."
    }
  ],
  "mechanism": "ECA-stack synergicznie aktywuje termogenezę przez trzy różne komponenty: sympatykomimetyk + ksantyna + salicylan. Ephedryna: mieszany agonista α1/α2 + β1/β2-adrenoceptora, częściowo również presynaptyczny noradrenaline-releasing agent (NRA) – pula pęcherzykowa noradrenaliny opróżnia się w 20-30 minut po jednorazowej dawce, dlatego dokumentowana jest tachyfilaksja po 4-6 tygodniach chronicznego użycia. Kofeina: nieselektywny antagonista receptora adenozyny (A1+A2A) + inhibitor PDE-3+PDE-4. Antagonizm adenozynowy znosi hamowanie zwrotne na poziomie podwzgórza + locus coeruleus, umożliwiając dodatkowe uwalnianie noradrenaliny; inhibicja PDE zmniejsza rozkład cAMP, przedłużając sygnał β-receptorowy mediowany ephedryną. Aspiryna (low-dose 81 mg): inhibitor COX-1 hamujący endotelialny szlak tromboksanu-A2, łagodzący vasokonstrykcyjny rebound + ryzyko agregacji płytek. Łączne podanie tych trzech związków daje ~3x silniejszy wzrost tempa termogenicznego z +250-300 kcal/dziennie wzrostem REE u zdrowego dorosłego mężczyzny (Astrup 1992, Daly 1993). Mechanizm powoduje też ZALEŻNY OD DAWKI wzrost ryzyka sercowo-naczyniowego: uwalnianie noradrenaliny plus efekt vasokonstrykcyjny daje synergiczny wzrost BP (+10-20 mmHg skurczowe, +5-10 mmHg rozkurczowe), wzrost HR (+15-25 bpm), potencjalne wydłużenie QTc mierzalne w 4-tygodniowym cyklu.",
  "legalStatus": "USA: ephedryna kontrolowana przez Combat Methamphetamine Epidemic Act 2005 (limit ≤3.6 g/30-dni OTC, rejestracja behind-counter); ephedrine-dietary supplements zakazane od 2004 (FDA Consumer Update). UE + EMA: ephedryna R03CA02 klasa ATC, Rx-only (astma + nasal decongestant) – formaty dietary-supplement zakazane od 2004. HU: ephedryna Rx (R03CA02), aspiryna OTC, kofeina OTC. PL: ephedryna Rx (R03CA02), aspiryna OTC, kofeina OTC. WADA: ephedryna S6 stymulant w zawodach zakazany (próg moczu 10 μg/mL); pseudoephedryna na liście WADA od 2010 (próg moczu 150 μg/mL). Kofeina od 2004 NIE zakazana (monitored). Aspiryna allowed.",
  "onsetTime": "30-60 minut, peak termogeniczny 1-2h",
  "halfLife": "Ephedryna 3-6h; kofeina 5h; aspiryna 4-6h (tylko parent)",
  "interactionsWith": [
    "clenbuterol",
    "albuterol",    "mirabegron",
    "liothyronine"
  ],
  "aromatization": "Nie aromatyzuje (nie jest sterydem – kombinacja sympatykomimetycznego alkaloidu + ksantyny + salicylanu). Brak interakcji z CYP19.",
  "hepatotoxicity": "Średnia – chroniczny stres sercowy ephedryny + kombinacja z acetaminofenem w ECA-blend ma udokumentowaną interakcję wątrobową (Yokota 2013 PMID 23545017). Chroniczna wysokodawkowa aspiryna niesie ryzyko zespołu Reye'a (przeciwwskazanie pediatryczne). Pre-2004 ephedra blackmarket blendy: klaster acute hepatitis (FDA Consumer Update 2004).",
  "wadaStatus": "banned",
  "androgenicRatio": "N/A (nie AAS, sympatykomimetyk + ksantyna + salicylan)",
  "bindingAffinity": "Ephedryna α1-AR Ki ~50 μM (niska afinitet, indirect NRA-dominant); β1/β2 Ki ~10 μM. Kofeina A1-receptor Ki ~12 μM, A2A-receptor Ki ~2.4 μM. Aspiryna COX-1 IC50 ~3.2 μM.",
  "detectionWindow": "Ephedryna WADA-akredytowane LC-MS/MS wykrywanie z moczu 1-3 dni (próg 10 μg/mL). Kofeina NIE zakazana (monitored). Aspiryna allowed.",
  "benefits": [
    "Klasyczny stack termogeniczny ~3x bardziej potencjalny niż sama ephedryna (Astrup 1992 Lancet PMID 1346830)",
    "+250-300 kcal/dziennie wzrost REE u zdrowych dorosłych (Daly 1993 Am J Clin Nutr PMID 8367356)",
    "Boozer 2002 RCT kohorta otyła 7,2 kg utraty tłuszczu / 6 miesięcy (placebo 2,4 kg, PMID 12122475)",
    "Greenway 2001 Obesity Research evidence dla mobilizacji lipidów (PMID 11707560)",
    "Tłumienie apetytu jako efekt wtórny (ephedryna + kofeina sympatykomimetycznie zmniejszają apetyt)",
    "Tanie komponenty, globalnie dostępne (ephedryna w systemie Rx + aspiryna/kofeina OTC)"
  ],
  "quickStart": [
    "Pre-cycle home-tracking BP 7-dniowa średnia (obowiązkowy monitoring sercowo-naczyniowy od bana FDA 2004)",
    "EKG baseline + check po 4 tygodniach (ryzyko wydłużenia QTc)",
    "Dawka standardowa: 25 mg ephedryny + 200 mg kofeiny + 81 mg aspiryny PO 2-3x/dziennie (rano + wczesne popołudnie)",
    "Ostatnia dawka przed 16:00 (prewencja bezsenności, t1/2 ephedryny + kofeiny 5-6h)",
    "Długość cyklu MAX 4-6 tygodni, potem 2-4 tygodnie OFF (tachyfilaksja ephedryny + regeneracja sercowo-naczyniowa)",
    "Mid-cycle badania: tygodniowa średnia BP + EKG po 4 tygodniach + enzymy wątrobowe (weryfikacja acetaminophen-blend-free)",
    "Panel lipidowy pre- i post-cycle (udokumentowany wzrost trójglicerydów mediowany ephedryną)"
  ],
  "expectations": [
    {
      "label": "1. tydzień",
      "body": "Dawka początkowa 25/200/81 mg AM. Subiektywny efekt termogeniczny zauważalny (lekkie pocenie, +15-25 bpm HR, +10-15 mmHg BP). Zmniejszenie apetytu i wzrost energii jasne. Wysokie ryzyko bezsenności jeśli druga dawka po 14:00."
    },
    {
      "label": "Tygodnie 2-3",
      "body": "Steady-state tempa termogenicznego. Tempo utraty tłuszczu +0,5-0,8 kg/tydzień przy adekwatnym deficycie kalorycznym (analogia Boozer 2002 6-miesięczna stopa). Pod koniec 3. tygodnia odczuwalna lekka tachyfilaksja – eskalacja dawki NIE zalecana (mnożnik ryzyka sercowo-naczyniowego)."
    },
    {
      "label": "Tygodnie 4-6 + cycle-off",
      "body": "Cycle-end stopniowy taper: 25/200/81 → 25/100/81 → 12,5/100/81 mg, 1 tydzień na krok. Nagłe zatrzymanie grozi rebound-zmęczeniem + rebound-apetytem. Obowiązkowo 2-4 tygodnie OFF dla regeneracji sercowo-naczyniowej. Dla nowego cyklu okno 8-12 tygodni OFF optymalne dla regeneracji receptorów ephedryny."
    }
  ],
  "quality": {
    "pure": [
      "Tabletki ephedryny HCl 25 mg ze źródła aptecznego (HU + UE Rx, klasa ATC R03CA02)",
      "Tabletki kofeiny OTC No-Doz / Vivarin lub kofeina pharmaceutical-grade 200 mg",
      "Aspiryna 81 mg low-dose cardio-protective OTC (Bayer Aspirin Cardio + generyki)",
      "Pre-formułowane ECA-blendy jako dietary supplement są FDA-banned od 2004 – NIE używaj blackmarket pre-blend (label-claim discrepancy + acetaminophen-blend risk Yokota 2013)"
    ],
    "caution": [
      "Home-tracking BP 2x/dziennie (rano + wieczorem), tygodniowa średnia w dzienniku (monitoring ryzyka sercowo-naczyniowego)",
      "EKG baseline + check po 4 tygodniach (QTc-prolongation + monitoring arytmii)",
      "Wysokie ryzyko bezsenności – ostatnia dawka przed 16:00 obowiązkowa",
      "Lęk + drażliwość: subiektywne side-effects zależne od dawki",
      "Chroniczna aspiryna: ryzyko krwawienia GI (low-dose 81 mg cardio-protective zakres bezpieczny z PPI; >325 mg/dziennie GI-ulcer-risk)",
      "Tachyfilaksja po 4-6 tygodniach – 2-4 tygodnie OFF zalecane, eskalacja dawki NIE"
    ],
    "avoid": [
      "Ciężkie nadciśnienie (>140/90 mmHg) – bezwzględne przeciwwskazanie (klaster udar + AMI z FDA 2004 ephedra ban)",
      "Pre-existing tachyarytmia, AF, kardiomiopatia – bezwzględne przeciwwskazanie",
      "Chroniczna terapia β-blokerem – ryzyko vasokonstrykcji unopposed-α-receptorowej",
      "Inhibitor MAO (phenelzine, tranylcypromine) – kryzys nadciśnieniowy, bezwzględne przeciwwskazanie",
      "SSRI/SNRI (sertraline, venlafaxine) – ryzyko zespołu serotoninowego, przeciwwskazanie względne",
      "Nadczynność tarczycy / choroba Gravesa – bezwzględne przeciwwskazanie (additive sympathomimetic-storm)",
      "Guz chromochłonny – bezwzględne przeciwwskazanie",
      "Ciąża + karmienie piersią (FDA Category C)",
      "Pre-formułowane ECA-blendy jako dietary supplements (label-claim discrepancy + hepatotoksyczność acetaminophen-blend)",
      "Dzieci (<16 lat) – ryzyko zespołu Reye'a od aspiryny"
    ]
  },
  "interactions": [
    "Clenbuterol + Albuterol – addytywny stres sercowy β2-sympatykomimetyczny, mnożnik tachykardii + nadciśnienia, PRZECIWWSKAZANE",
    "Mirabegron – addytywny stres sercowy β3 + β1/β2 spillover, unikać",
    "Inhibitor MAO (phenelzine) – kryzys nadciśnieniowy, PRZECIWWSKAZANE",
    "SSRI/SNRI – ryzyko zespołu serotoninowego, ostrożność przy low-dose-escalation",
    "Liothyronine (T3) – addytywne ryzyko tachyfilaksji sercowej, surowy monitoring obu cykli",
    "Acetaminofen (paracetamol) – Yokota 2013 udokumentowana interakcja wątrobowa (PMID 23545017), unikać",
    "Warfaryna – wzrost INR od aspiryny, wymaga adjustacji dawki + monitoringu INR"
  ],
  "studies": [
    {
      "title": "Safety and efficacy of long-term treatment with ephedrine, caffeine and an ephedrine/caffeine mixture.",
      "authors": "Toubro S, Astrup AV, Breum L, Quaade F",
      "journal": "Int J Obes Relat Metab Disord",
      "pmid": "8384186"
    },
    {
      "title": "Mechanistic pharmacokinetic modelling of ephedrine, norephedrine and caffeine in healthy subjects.",
      "authors": "Csajka C, Haller CA, Benowitz NL, Verotta D",
      "journal": "Br J Clin Pharmacol",
      "pmid": "15752380"
    },
    {
      "title": "An herbal supplement containing Ma Huang-Guarana for weight loss: a randomized, double-blind trial",
      "authors": "Boozer CN, Daly PA, Homel P, Solomon JL, Blanchard D, Nasser JA, et al.",
      "journal": "Int J Obes Relat Metab Disord. 2002;26(5):593-604.",
      "pmid": "12032741"
    },
    {
      "title": "Efficacy and safety of ephedra and ephedrine for weight loss and athletic performance: a meta-analysis.",
      "authors": "Shekelle PG, Hardy ML, Morton SC, Maglione M, Mojica WA, Suttorp MJ, Rhodes SL, Jungvig L, Gagné J",
      "journal": "JAMA",
      "pmid": "12672771"
    },
    {
      "title": "Ephedra-containing dietary supplements and cardiovascular adverse events",
      "authors": "Haller CA, Benowitz NL.",
      "journal": "N Engl J Med. 2000;343(25):1833-1838.",
      "pmid": "11117974"
    }
  ],
  "faq": [
    {
      "q": "Czy ECA-stack jest legalny na Węgrzech i w UE?",
      "a": "Częściowo. Ephedryna jest w HU + UE ATC R03CA02 Rx-only (wskazania astma + nasal decongestant), więc off-label bodybuilding-context wymaga recepty. Aspiryna OTC. Kofeina OTC. Od FDA 2004 ephedra ban formaty dietary-supplement są w całej UE zakazane. WADA S6 zakaz w zawodach. Aktywni sportowcy są ZAKAZANI (próg moczu 10 μg/mL ephedryny)."
    },
    {
      "q": "Dlaczego FDA zabroniło suplementów ephedry w 2004?",
      "a": "FDA 2004 Consumer Update umieściło suplementy ephedry na liście zakazanej po 100+ zgonach + 16 000+ raportach niepożądanych (klaster sercowo-naczyniowy: udar + AMI, przypadki nagłej śmierci sercowej). Driver wysokiej zachorowalności: pre-formułowane blendy z wariancją dawki (label claim 25 mg/kapsuła ephedryny vs rzeczywiste 30-50 mg) + nieudokumentowana synergia sercowo-naczyniowa kombinacji komponentów. Ephedryna farma-Rx NIE jest zakazana (R03CA02 Rx), tylko format dietary-supplement."
    },
    {
      "q": "Clenbuterol vs ECA-stack – co lepsze na utratę tłuszczu?",
      "a": "Oba to mechanizmy β-sympatykomimetyczne, ale różne profile. Clenbuterol to selektywny β2-agonist z długim t1/2 (~35-40h) → akumulacja + udokumentowane ryzyko przerostu serca przy 8-tygodniowym chronicznym użyciu. ECA-stack to mieszane α/β z krótkim t1/2 (3-6h ephedryny) → bardziej kontrolowalne dawkowanie, ale częstsze midday-fluktuacje. Clenbuterol cykliczny 2-on/2-off popularny, ECA-stack ciągły 4-6 tygodni standard. Oba niosą wysokie ryzyko sercowo-naczyniowe – monitoring BP + EKG obowiązkowy."
    },
    {
      "q": "Jakie przeciwwskazania sercowo-naczyniowe istnieją?",
      "a": "Bezwzględne przeciwwskazania: ciężkie nadciśnienie (>140/90 mmHg), pre-existing tachyarytmia/AF, kardiomiopatia, guz chromochłonny, nadczynność tarczycy/choroba Gravesa, jednoczesne MAO inhibitor. Względne: SSRI/SNRI (ryzyko zespołu serotoninowego), chroniczna terapia β-blokerem (vasokonstrykcja unopposed-α-receptorowa), ciąża/karmienie piersią (FDA Category C), dzieci <16 lat (zespół Reye'a od aspiryny). Pre-cycle 12-lead EKG + home-tracking BP 7-dniowy baseline to minimum protokolarne."
    },
    {
      "q": "Tolerancja + cycle-off – dlaczego obowiązkowe?",
      "a": "Tachyfilaksja ephedryny jest dokumentowana po 4-6 tygodniach chronicznego użycia: presynaptyczna pula pęcherzykowa noradrenaliny opróżnia się, a downregulacja gęstości receptorów β postsynaptycznych zmniejsza response aktywacyjny. Eskalacja dawki NIE pomaga (mnożnik ryzyka sercowo-naczyniowego), zamiast tego 2-4 tygodnie OFF są wymagane dla regeneracji receptorów + resyntezy pęcherzykowej noradrenaliny. Tachyfilaksja kofeiny krótsza (~7-10 dni), ale gęstość receptora adenozynowego odbija się w 4-7 dni caffeine-free. Pełne okno OFF ECA-stack 2-4 tygodnie po cyklu optimum."
    }
  ],
  "related": [    "albuterol",
    "clenbuterol"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 25,
      "medium": 50,
      "high": 75
    },
    "unit": "mg ephedryny/dziennie (z 200/81 mg kofeiny/aspiryny co-dose)",
    "note": "Standardowy ECA-stack: 25 mg ephedryny + 200 mg kofeiny + 81 mg aspiryny PO 2-3x/dziennie (rano + wczesne popołudnie). Długość cyklu MAX 4-6 tygodni, potem 2-4 tygodnie OFF (tachyfilaksja ephedryny + regeneracja sercowo-naczyniowa). Pre-cycle BP + EKG baseline; mid-cycle check po 4 tygodniach; post-cycle 2-tygodniowe BP + panel lipidowy + enzymy wątrobowe confirm-recovery. Ostatnia dawka przed 16:00 obowiązkowa (prewencja bezsenności). WADA S6 zakaz w zawodach – aktywni sportowcy ZAKAZANI."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "1-2 tygodnie przed startem cyklu",
      "markers": "Baseline ciśnienia krwi (home-tracking rano+wieczorem 7-dniowa średnia), HR spoczynkowy, 12-lead EKG (QTc + rytm), panel lipidowy (TC/LDL/HDL/TG), ALT/AST/GGT (acetaminophen-blend hepatic-interaction screen), pełna morfologia",
      "purpose": "Ocena baseline sercowo-naczyniowego; screening ryzyka nadciśnienia + QTc-prolongation (obowiązkowy monitoring sercowo-naczyniowy od bana FDA 2004 ephedra)"
    },
    "midCycle": {
      "label": "W trakcie cyklu",
      "timing": "2 + 4 tygodnie po starcie cyklu",
      "markers": "Ciśnienie krwi 2x/dziennie home-tracking tygodniowa średnia, HR spoczynkowy weekly, EKG check po 4 tygodniach (QTc monitoring), enzymy wątrobowe (ALT/AST), panel lipidowy po 4 tygodniach",
      "purpose": "Wczesna detekcja powstającego nadciśnienia lub sygnału QTc-prolongation; sygnał tachyfilaksji wskazujący, że eskalacja dawki NIE jest potrzebna (mnożnik ryzyka sercowo-naczyniowego)"
    },
    "postCycle": {
      "label": "Po cyklu",
      "timing": "2 + 4 tygodnie po końcu cyklu",
      "markers": "BP + HR home-tracking, EKG (potwierdzenie normalizacji QTc), panel lipidowy (regeneracja trójglicerydów), enzymy wątrobowe (regeneracja baseline wątroby po cyklu)",
      "purpose": "Weryfikacja regeneracji baseline sercowo-naczyniowego przed nowym cyklem. Regeneracja receptorów ephedryny: optymalne okno OFF 2-4 tygodnie."
    }
  }
}
