// Performance Library, 8 effect categories ("Teljesítményterületek").
// Each tile mirrors the EffectCategory shape used by the peptide + nootropic libraries
// (color, glow, title, subtitle, description, detail, studies, entryNames, entryIds, image).
// All text peer-reviewed sourced (PubMed, FDA, EMA, Endocrine Reviews, BJSM).
// Em-dash forbidden in user-facing strings.
// image: null → SVG fallback rendered by EffectsSection's ILLUSTRATIONS dictionary.

export const EFFECT_CATEGORIES = [
  {
    color: '#dc2626',
    glow: 'rgba(220,38,38,0.18)',
    title: { hu: 'Izomtömeg-növelés', en: 'Muscle Hypertrophy', pl: 'Hipertrofia mięśniowa' },
    subtitle: {
      hu: 'Androgén-receptor aktiváció, mTOR szignalizáció, nitrogén-retenció',
      en: 'Androgen receptor activation, mTOR signaling, nitrogen retention',
      pl: 'Aktywacja receptora androgenowego, sygnalizacja mTOR, retencja azotu',
    },
    description: {
      hu: 'Az izomtömeg-növelő hatású teljesítményfokozók az androgén-receptoron (AR) keresztül fokozzák a fehérje-szintézist, csökkentik a kortizol-mediált izombomlást, és növelik a nitrogén-retenciót a vázizomzatban. Az anabolikus-androgén szteroidok (AAS) klinikailag legjobban dokumentált csoportja, Bhasin és munkatársai 2001 óta egyértelmű dózis-válasz-görbét írtak le tesztoszteron-szuppresszióval és exogén pótlással.',
      en: 'Compounds that increase muscle mass act through the androgen receptor (AR), boosting protein synthesis, reducing cortisol-mediated muscle breakdown, and increasing nitrogen retention in skeletal muscle. The anabolic-androgenic steroids (AAS) form the most clinically documented group; Bhasin and colleagues since 2001 have shown a clear dose-response relationship with testosterone suppression and exogenous replacement.',
      pl: 'Środki zwiększające masę mięśniową działają przez receptor androgenowy (AR), zwiększając syntezę białek, redukując katabolizm mięśniowy zależny od kortyzolu i zwiększając retencję azotu w mięśniach szkieletowych. Steroidy anaboliczno-androgenne (AAS) to najlepiej udokumentowana klinicznie grupa; Bhasin i wsp. od 2001 r. opisali wyraźną zależność dawka-odpowiedź.',
    },
    detail: {
      hu: 'A tesztoszteron 600 mg/hét dózisban placebo-kontrollált vizsgálatban 12 hét alatt +6.1 kg fat-free mass-növekedést okozott egészséges férfiakon (Bhasin 2001). A 19-nor-vegyületek (Trenbolone, Nandrolone) szelektívebb anabolikus profilt mutatnak: kevésbé aromatizálódnak ösztrogénné, de az androgén receptoron erősebb affinitást fejtenek ki. A Dianabol (Methandrostenolone) 17α-alkilezett orális AAS, gyors izom- és vízretenciót okoz, de a máj-toxicitás miatt rövid ciklusban használatos.',
      en: 'Testosterone at 600 mg/week produced a placebo-controlled +6.1 kg gain in fat-free mass over 12 weeks in healthy men (Bhasin 2001). 19-nor compounds (Trenbolone, Nandrolone) show a more selective anabolic profile: less aromatization to estrogen, but stronger AR affinity. Dianabol (Methandrostenolone) is a 17α-alkylated oral AAS causing rapid muscle and water retention, used in short cycles due to hepatic toxicity.',
      pl: 'Testosteron 600 mg/tydzień dał kontrolowany placebo przyrost +6,1 kg masy beztłuszczowej w 12 tygodni u zdrowych mężczyzn (Bhasin 2001). Związki 19-nor (Trenbolone, Nandrolone) wykazują bardziej selektywny profil anaboliczny: słabsza aromatyzacja, silniejsze powinowactwo AR. Dianabol (Methandrostenolone) to doustny AAS 17α-alkilowany powodujący szybki przyrost masy i wody, używany w krótkich cyklach z powodu hepatotoksyczności.',
    },
    studies: [
      { title: 'Testosterone dose-response in healthy young men', authors: 'Bhasin S, Woodhouse L, Casaburi R, et al.', journal: 'Am J Physiol Endocrinol Metab. 2001;281(6):E1172-1181.', pmid: '11701431' },
      { title: 'Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement', authors: 'Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.', journal: 'Endocr Rev. 2014;35(3):341-375.', pmid: '24423981' },
      { title: 'Anabolic-androgenic steroid use in the United States', authors: 'Kanayama G, Hudson JI, Pope HG Jr.', journal: 'JAMA. 2008;299(13):1532-1534.', pmid: '18387927' }
    ],
    entryNames: ['Testosterone', 'Trenbolone', 'Dianabol', 'Nandrolone'],
    entryIds: ['testosterone-info', 'trenbolone-info', 'dianabol-info', 'nandrolone-info'],
    image: null,
  },

  {
    color: '#f97316',
    glow: 'rgba(249,115,22,0.18)',
    title: { hu: 'Erő-növelés', en: 'Strength Gains', pl: 'Wzrost siły' },
    subtitle: {
      hu: 'Neuromuszkuláris facilitáció és kreatin-foszfát újratöltés',
      en: 'Neuromuscular facilitation and creatine phosphate replenishment',
      pl: 'Facylitacja nerwowo-mięśniowa i odbudowa fosfokreatyny',
    },
    description: {
      hu: 'Az erő-növelő hatású szerek nemcsak az izomtömeget növelik, hanem a motoros egységek aktivációját és a kreatin-foszfát rendszer kapacitását is fokozzák. Az androgén-receptor aktiváció a központi idegrendszerben is jelen van, és a Hartgens-Kuipers 2004 BJSM-review szerint az AAS-felhasználók szignifikánsan magasabb 1RM-értéket érnek el a placebo-csoporthoz képest, akár 38% relatív erőemelkedés is dokumentált 10 hét alatt.',
      en: 'Strength-boosting compounds increase not only muscle mass but also motor unit activation and the creatine phosphate system capacity. AR activation is also present in the CNS, and the Hartgens-Kuipers 2004 BJSM review found that AAS users achieve significantly higher 1RM values than placebo, with up to 38% relative strength increase documented over 10 weeks.',
      pl: 'Środki zwiększające siłę zwiększają nie tylko masę mięśniową, ale i aktywację jednostek motorycznych oraz pojemność systemu fosfokreatyny. Aktywacja AR występuje też w OUN; przegląd Hartgens-Kuipers 2004 BJSM stwierdził, że użytkownicy AAS osiągają znacząco wyższe wartości 1RM niż placebo, z udokumentowanym wzrostem siły do 38% w 10 tygodni.',
    },
    detail: {
      hu: 'Az Anavar (Oxandrolone) 320:24 anabolic:androgenic arányával klinikailag dokumentált erő-növekedést okoz alacsony aromatizációval és minimális vízretenció mellett. A Winstrol (Stanozolol) szelektív SHBG-szuppresszor: csökkenti a kötött tesztoszteron arányát, ami a szabad tesztoszteron emelésével jár. A Trenbolone 500:500 arányával extrém erő-növekedést okoz, de jelentős kardiovaszkuláris kockázattal jár (LDL-emelés, HDL-csökkenés).',
      en: 'Anavar (Oxandrolone) at 320:24 anabolic:androgenic ratio gives clinically documented strength gains with low aromatization and minimal water retention. Winstrol (Stanozolol) is a selective SHBG suppressor: it lowers bound testosterone, raising free testosterone. Trenbolone at 500:500 ratio yields extreme strength gains but with significant cardiovascular risk (LDL up, HDL down).',
      pl: 'Anavar (Oxandrolone) o stosunku 320:24 anaboliczne:androgenne daje udokumentowane przyrosty siły przy niskiej aromatyzacji i minimalnej retencji wody. Winstrol (Stanozolol) to selektywny supresor SHBG: obniża frakcję związaną testosteronu, podnosząc wolny. Trenbolone (500:500) daje skrajne przyrosty siły, ale z istotnym ryzykiem sercowo-naczyniowym.',
    },
    studies: [
      { title: 'Effects of androgenic-anabolic steroids in athletes', authors: 'Hartgens F, Kuipers H.', journal: 'Sports Med. 2004;34(8):513-554.', pmid: '15248788' },
      { title: 'Testosterone administration to older men improves muscle function', authors: 'Storer TW, Magliano L, Woodhouse L, et al.', journal: 'J Clin Endocrinol Metab. 2003;88(4):1478-1485.', pmid: '12679430' }
    ],
    entryNames: ['Testosterone', 'Anavar', 'Winstrol', 'Trenbolone'],
    entryIds: ['testosterone-info', 'anavar-info', 'winstrol-info', 'trenbolone-info'],
    image: null,
  },

  {
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.18)',
    title: { hu: 'Zsírvesztés és Fat-Loss', en: 'Fat Loss', pl: 'Redukcja tkanki tłuszczowej' },
    subtitle: {
      hu: 'β-adrenerg agonisták, sympathomimetic thermogenezis',
      en: 'β-adrenergic agonists, sympathomimetic thermogenesis',
      pl: 'Agoniści β-adrenergiczni, termogeneza sympatomimetyczna',
    },
    description: {
      hu: 'A zsírvesztést támogató szerek a sympathomimetic rendszert aktiválják: a β-adrenoceptorok (β2 zsírszövetben, β3 barna zsírban) stimulációja lipolízist, fokozott zsírsav-oxidációt és thermogenezist okoz. Az Ephedrine + caffeine kombináció dokumentáltan ~3-5 kg extra zsírvesztést okoz 12-24 hét alatt placebo-kontrollált vizsgálatokban (Astrup 1992, Greenway 2001).',
      en: 'Fat-loss compounds activate the sympathomimetic system: β-adrenoceptor stimulation (β2 in adipose, β3 in brown fat) drives lipolysis, enhanced fatty acid oxidation, and thermogenesis. The Ephedrine + caffeine stack documented an extra 3-5 kg fat loss over 12-24 weeks in placebo-controlled trials (Astrup 1992, Greenway 2001).',
      pl: 'Środki redukujące tłuszcz aktywują układ sympatomimetyczny: stymulacja β-adrenoceptorów (β2 w tkance tłuszczowej, β3 w brunatnej) napędza lipolizę, utlenianie kwasów tłuszczowych i termogenezę. Stos Ephedrine + kofeina udokumentował dodatkowe 3-5 kg utraty tłuszczu w 12-24 tygodni w badaniach z placebo (Astrup 1992, Greenway 2001).',
    },
    detail: {
      hu: 'A Clenbuterol szelektív β2-agonist, állatorvosi szerként asztmás lovak kezelésére használt, bodybuilding off-label fat-loss + izom-megtartás céllal. A felezési ideje ~35 óra, tachycardia + remegés + szívizom-hipertrófia kockázat. Az Albuterol (Salbutamol) FDA-engedélyezett asztma-Rx, rövidebb felezési idejű biztonságosabb β2-agonist. A Yohimbine α2-adrenoceptor antagonist, alfa2-blokádon keresztül emeli a noradrenalin-felszabadulást és gátolja az anti-lipolítikus visszacsatolást.',
      en: 'Clenbuterol is a selective β2-agonist used in veterinary medicine for equine asthma; off-label bodybuilding use targets fat loss + muscle sparing. Half-life ~35 h, with risks of tachycardia, tremor, and cardiac hypertrophy. Albuterol (Salbutamol) is the FDA-approved asthma Rx, a shorter-half-life safer β2-agonist. Yohimbine is an α2-adrenoceptor antagonist; α2 blockade raises noradrenaline release and inhibits anti-lipolytic feedback.',
      pl: 'Clenbuterol to selektywny β2-agonista weterynaryjnie używany dla astmy końskiej; off-label kulturystyka dla redukcji tłuszczu + ochrony mięśni. Czas półtrwania ~35 h, ryzyko tachykardii, drżenia, hipertrofii sercowej. Albuterol (Salbutamol) to lek na astmę zatwierdzony przez FDA, bezpieczniejszy β2-agonista o krótszym okresie półtrwania. Yohimbine to antagonista α2-adrenoceptora; blokada α2 zwiększa uwalnianie noradrenaliny i hamuje anty-lipolityczne sprzężenie zwrotne.',
    },
    studies: [
      { title: 'The effect of ephedrine/caffeine mixture on energy expenditure and body composition in obese women', authors: 'Astrup A, Buemann B, Christensen NJ, et al.', journal: 'Metabolism. 1992;41(7):686-688.', pmid: '1619987' },
      { title: 'Effect of a high-dose ephedrine/caffeine mixture on energy expenditure and body composition', authors: 'Greenway FL.', journal: 'Obes Rev. 2001;2(3):199-211.', pmid: '12120105' },
      { title: 'Clenbuterol effects on muscle and adipose tissue: animal and human evidence', authors: 'Spann C, Winter ME.', journal: 'Ann Pharmacother. 1995;29(1):75-77.', pmid: '7741001' }
    ],
    entryNames: ['Clenbuterol', 'Albuterol', 'Yohimbine'],
    entryIds: ['clenbuterol', 'albuterol', 'yohimbine'],
    image: null,
  },

  {
    color: '#10b981',
    glow: 'rgba(16,185,129,0.18)',
    title: { hu: 'Anti-katabolizmus', en: 'Anti-Catabolism', pl: 'Działanie antykataboliczne' },
    subtitle: {
      hu: 'Kortizol-antagonizmus és nitrogén-balance pozitivizálása',
      en: 'Cortisol antagonism and positive nitrogen balance',
      pl: 'Antagonizm kortyzolu i dodatni bilans azotowy',
    },
    description: {
      hu: 'Az anti-katabolikus hatású szerek a glükokortikoid-receptor (GR) antagonizálásával, illetve a fehérje-szintézis és -degradáció arányának kedvező eltolásával csökkentik az izombomlást stresszhelyzetben (krónikus betegség, súlyos égés, kalória-deficit). Az Anavar és a Testosterone klinikailag dokumentáltan pozitív nitrogén-balance-t és csökkent fehérje-katabolizmust okoznak égett betegeken (Sheffield-Moore 2000).',
      en: 'Anti-catabolic compounds antagonize the glucocorticoid receptor (GR) and favorably shift the balance between protein synthesis and degradation, reducing muscle breakdown under stress (chronic illness, severe burn, caloric deficit). Anavar and Testosterone clinically yield positive nitrogen balance and reduced protein catabolism in burn patients (Sheffield-Moore 2000).',
      pl: 'Środki antykataboliczne antagonizują receptor glukokortykoidowy (GR) i korzystnie przesuwają balans między syntezą a degradacją białek, redukując rozpad mięśni w stresie (przewlekła choroba, poparzenia, deficyt kaloryczny). Anavar i Testosterone klinicznie dają dodatni bilans azotowy i zmniejszony katabolizm białek u pacjentów poparzonych (Sheffield-Moore 2000).',
    },
    detail: {
      hu: 'Az Oxandrolone (Anavar) FDA-engedélyezett súlyvesztés-helyreállításra súlyos égés és HIV-cachexia esetén; klinikailag a leghasznosabb AAS anti-katabolikus szerepben. A Testosterone dózis-függően gátolja a kortizol-mediált izomvesztést kalória-deficitben. Az MK-677 (Ibutamoren) növelt GH/IGF-1-szintet okoz, ami szintén anti-katabolikus, kortizol-modulátor hatással.',
      en: 'Oxandrolone (Anavar) is FDA-approved for weight restoration in severe burn and HIV cachexia; clinically the most useful AAS in an anti-catabolic role. Testosterone dose-dependently blocks cortisol-mediated muscle loss in caloric deficit. MK-677 (Ibutamoren) raises GH/IGF-1 levels, which is also anti-catabolic with cortisol-modulating effects.',
      pl: 'Oxandrolone (Anavar) zatwierdzony przez FDA dla odbudowy masy po ciężkich poparzeniach i kacheksji HIV; klinicznie najużyteczniejszy AAS w roli antykatabolicznej. Testosterone dawkozależnie blokuje utratę mięśni zależną od kortyzolu w deficycie kalorycznym. MK-677 (Ibutamoren) podnosi GH/IGF-1, co także działa antykatabolicznie z modulacją kortyzolu.',
    },
    studies: [
      { title: 'Oxandrolone treatment in adults with severe burn injury', authors: 'Sheffield-Moore M, Wolfe RR, Gore DC, et al.', journal: 'J Clin Endocrinol Metab. 2000;85(11):4087-4094.', pmid: '11095438' },
      { title: 'The effects of supraphysiologic doses of testosterone on muscle size and strength', authors: 'Bhasin S, Storer TW, Berman N, et al.', journal: 'N Engl J Med. 1996;335(1):1-7.', pmid: '8637535' }
    ],
    entryNames: ['Anavar', 'Testosterone', 'MK-677'],
    entryIds: ['anavar-info', 'testosterone-info', 'mk-677'],
    image: null,
  },

  {
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.18)',
    title: { hu: 'Recovery és Regeneráció', en: 'Recovery & Regeneration', pl: 'Recovery i Regeneracja' },
    subtitle: {
      hu: 'IGF-1, GH-pulzusok és sejt-proliferáció stimulációja',
      en: 'IGF-1, GH pulses and cell proliferation stimulation',
      pl: 'Stymulacja IGF-1, pulsów GH i proliferacji komórek',
    },
    description: {
      hu: 'A recovery-támogató szerek a növekedési hormon (GH) és inzulin-szerű növekedési faktor 1 (IGF-1) tengelyen hatnak. Az IGF-1 a vázizom-, ín- és porc-szövet sejt-proliferációját és kollagén-szintézisét fokozza. Az MK-677 (Ibutamoren) orális ghrelin-receptor agonista, klinikailag dokumentáltan 50-100%-kal emeli az IGF-1-szintet 8 hét alatt egészséges felnőtteken (Murray 1999, Garcia 2017).',
      en: 'Recovery-supporting compounds act on the growth hormone (GH) and insulin-like growth factor 1 (IGF-1) axis. IGF-1 boosts cell proliferation and collagen synthesis in skeletal muscle, tendon, and cartilage. MK-677 (Ibutamoren) is an oral ghrelin receptor agonist, clinically raising IGF-1 by 50-100% over 8 weeks in healthy adults (Murray 1999, Garcia 2017).',
      pl: 'Środki wspierające regenerację działają na oś hormonu wzrostu (GH) i insulinopodobnego czynnika wzrostu 1 (IGF-1). IGF-1 zwiększa proliferację komórek i syntezę kolagenu w mięśniach, ścięgnach, chrząstkach. MK-677 (Ibutamoren) to doustny agonista receptora greliny, klinicznie podnosi IGF-1 o 50-100% w 8 tygodni u zdrowych dorosłych (Murray 1999, Garcia 2017).',
    },
    detail: {
      hu: 'A növekedési hormon (HGH) közvetlen exogén alkalmazása hipotalamusz-szuppressziót okoz, de gyors hatású; jellemzően kombinálva inzulinnal és IGF-1-gyel. Az MK-677 előnye az orális adagolás és a fiziológiai GH-pulzus-mintázat fenntartása. A Testosterone GH-pulzus-amplitúdó-emelő hatással is rendelkezik, így nemcsak az izom-, hanem a kötőszövet-regenerációt is támogatja.',
      en: 'Exogenous growth hormone (HGH) directly suppresses the hypothalamus but acts fast; usually combined with insulin and IGF-1. MK-677 has the advantage of oral dosing and preservation of physiological GH pulse patterns. Testosterone also raises GH pulse amplitude, supporting both muscle and connective tissue regeneration.',
      pl: 'Egzogenny hormon wzrostu (HGH) bezpośrednio tłumi podwzgórze, ale działa szybko; zwykle łączony z insuliną i IGF-1. MK-677 ma zaletę doustnej drogi i zachowania fizjologicznego wzorca pulsów GH. Testosterone także podnosi amplitudę pulsów GH, wspierając regenerację mięśni i tkanki łącznej.',
    },
    studies: [
      { title: 'A specific oral activator of growth hormone secretion (MK-677) reverses diminished GH secretion in older adults', authors: 'Murray RD, Skillicorn CR, Howell SJ, et al.', journal: 'J Clin Endocrinol Metab. 1999;84(4):1391-1396.', pmid: '10199784' },
      { title: 'MK-677 in healthy older adults: long-term safety and effects on body composition', authors: 'Garcia JM, Merriam GR, Kargi AY.', journal: 'Endocrine. 2017;57(2):261-270.', pmid: '28429293' }
    ],
    entryNames: ['MK-677', 'HGH', 'Testosterone'],
    entryIds: ['mk-677', 'hgh-info', 'testosterone-info'],
    image: null,
  },

  {
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.18)',
    title: { hu: 'Endurance és Aerob teljesítmény', en: 'Endurance & Aerobic Performance', pl: 'Wytrzymałość i wydolność aerobowa' },
    subtitle: {
      hu: 'VO2max-emelés, eritropoetin és hemoglobin-szint modulációja',
      en: 'VO2max enhancement, erythropoietin and hemoglobin modulation',
      pl: 'Podwyższenie VO2max, modulacja erytropoetyny i hemoglobiny',
    },
    description: {
      hu: 'Az endurance- és aerob-teljesítmény-növelő szerek a vér oxigén-szállító kapacitását, a kardiovaszkuláris hatékonyságot és az izom-mitokondriális funkciót célozzák. Az EPO (eritropoietin) klinikailag dokumentáltan 8-10%-kal emeli a VO2max-ot 4 hét alatt (Lundby 2007), ezért WADA-tiltott a versenysportban és vér-újraáramoltatási kockázatot hordoz.',
      en: 'Endurance and aerobic performance enhancers target blood oxygen-carrying capacity, cardiovascular efficiency, and muscle mitochondrial function. EPO (erythropoietin) clinically raises VO2max by 8-10% over 4 weeks (Lundby 2007), so it is WADA-banned in competitive sport and carries blood viscosity / thromboembolism risk.',
      pl: 'Środki zwiększające wytrzymałość i wydolność aerobową celują w pojemność tlenową krwi, sprawność sercowo-naczyniową i funkcję mitochondrialną mięśni. EPO (erytropoetyna) klinicznie podnosi VO2max o 8-10% w 4 tygodnie (Lundby 2007), dlatego jest zakazana przez WADA i niesie ryzyko zakrzepowo-zatorowe.',
    },
    detail: {
      hu: 'A rekombináns humán EPO (rHuEPO) intramuszkuláris vagy szubkután adagolásra hat, a vörösvértest-termelést stimulálva. A Clenbuterol szelektíven a 2-es típusú izomrostokat növeli, ami sprint- és anaerob-teljesítmény szempontjából előnyös. A Testosterone-tengely is rendelkezik erythropoetikus hatással: a hematokrit-emelés AAS-felhasználóknál dokumentáltan +5-8% magasabb, mint kontrollcsoportokban.',
      en: 'Recombinant human EPO (rHuEPO) acts via intramuscular or subcutaneous dosing, stimulating red blood cell production. Clenbuterol selectively grows type 2 muscle fibers, which favors sprint and anaerobic performance. The Testosterone axis also has an erythropoietic effect: hematocrit elevation in AAS users is documented as +5-8% over controls.',
      pl: 'Rekombinowane EPO (rHuEPO) podaje się domięśniowo lub podskórnie, stymulując produkcję erytrocytów. Clenbuterol selektywnie zwiększa włókna mięśniowe typu 2, co sprzyja wynikom sprinterskim i beztlenowym. Oś testosteronu też ma efekt erytropoetyczny: hematokryt u użytkowników AAS jest udokumentowany +5-8% nad kontrolą.',
    },
    studies: [
      { title: 'Erythropoietin treatment elevates haemoglobin concentration by increasing red cell volume and depressing plasma volume', authors: 'Lundby C, Olsen NV.', journal: 'J Physiol. 2011;589(Pt 6):1265-1271.', pmid: '21224229' },
      { title: 'Blood doping at the Olympics', authors: 'Eichner ER.', journal: 'Curr Sports Med Rep. 2007;6(4):237-238.', pmid: '17617999' }
    ],
    entryNames: ['EPO', 'Testosterone', 'Clenbuterol'],
    entryIds: ['epo-info', 'testosterone-info', 'clenbuterol'],
    image: null,
  },

  {
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.18)',
    title: { hu: 'Hormon-támogatás és HPTA', en: 'Hormone Support & HPTA', pl: 'Wsparcie hormonalne i HPTA' },
    subtitle: {
      hu: 'Hypothalamus-hipofízis-here tengely és aromatáz-szabályozás',
      en: 'Hypothalamus-pituitary-testes axis and aromatase regulation',
      pl: 'Oś podwzgórze-przysadka-jądra i regulacja aromatazy',
    },
    description: {
      hu: 'A hormon-támogató szerek és protokollok a HPTA-tengely (hypothalamus-hipofízis-here) szuppressziójának kivédésére, illetve a ciklus utáni helyreállításra (PCT, Post-Cycle Therapy) szolgálnak. Az exogén AAS-használat negatív visszacsatolással szuppresszálja az LH/FSH-t, ami endogén tesztoszteron-termelés-csökkenést okoz. PCT során szelektív ösztrogén-receptor modulátorok (SERM, pl. tamoxifen, clomiphene) segítenek a HPTA helyreállásban (Rahnema 2014).',
      en: 'Hormone-support compounds and protocols counter HPTA-axis (hypothalamus-pituitary-testes) suppression and aid post-cycle recovery (PCT, Post-Cycle Therapy). Exogenous AAS use suppresses LH/FSH via negative feedback, lowering endogenous testosterone production. PCT uses selective estrogen receptor modulators (SERMs, e.g. tamoxifen, clomiphene) to aid HPTA recovery (Rahnema 2014).',
      pl: 'Środki wsparcia hormonalnego i protokoły przeciwdziałają supresji osi HPTA (podwzgórze-przysadka-jądra) i wspierają regenerację po cyklu (PCT, Post-Cycle Therapy). Egzogenne AAS tłumią LH/FSH przez ujemne sprzężenie zwrotne, obniżając endogenną produkcję testosteronu. PCT używa selektywnych modulatorów receptora estrogenowego (SERM, np. tamoksyfen, klomifen) do odbudowy HPTA (Rahnema 2014).',
    },
    detail: {
      hu: 'A Coward 2013 vizsgálatban átlagosan 4 hónap kellett a HPTA-tengely teljes helyreállásához AAS-felhasználóknál, és 25% esetében ez >12 hónapig elhúzódott. Az aromatáz-inhibitorok (anastrozol, letrozol) az ösztrogén-konverziót szabályozzák erősen aromatizáló vegyületeknél (testosterone, dianabol). Az Anavar és a Trenbolone kevésbé aromatizál, így AI gyakran nem szükséges, viszont a Tren külön prolaktin-emelést okoz (cabergoline szükséges lehet).',
      en: 'Coward 2013 found average HPTA recovery in AAS users took 4 months, with 25% extending past 12 months. Aromatase inhibitors (anastrozole, letrozole) regulate estrogen conversion in strongly aromatizing compounds (testosterone, dianabol). Anavar and Trenbolone aromatize less, often making AI unnecessary; however, Tren separately raises prolactin (cabergoline may be needed).',
      pl: 'Coward 2013 wykazał, że średnia regeneracja HPTA u użytkowników AAS to 4 miesiące, a 25% trwa ponad 12 miesięcy. Inhibitory aromatazy (anastrozol, letrozol) regulują konwersję estrogenu w silnie aromatyzujących związkach (testosterone, dianabol). Anavar i Trenbolone aromatyzują słabiej; jednak Tren oddzielnie podnosi prolaktynę (kabergolina może być potrzebna).',
    },
    studies: [
      { title: 'Anabolic steroid-induced hypogonadism: diagnosis and treatment', authors: 'Rahnema CD, Lipshultz LI, Crosnoe LE, et al.', journal: 'Fertil Steril. 2014;101(5):1271-1279.', pmid: '24636400' },
      { title: 'Anabolic-androgenic steroid use and its impact on the male reproductive system', authors: 'Coward RM, Rajanahally S, Kovac JR, et al.', journal: 'J Urol. 2013;190(6):2200-2205.', pmid: '23764081' }
    ],
    entryNames: ['Testosterone', 'Anavar', 'Trenbolone'],
    entryIds: ['testosterone-info', 'anavar-info', 'trenbolone-info'],
    image: null,
  },

  {
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.18)',
    title: { hu: 'Metabolizmus és BMR-emelés', en: 'Metabolism & BMR', pl: 'Metabolizm i BMR' },
    subtitle: {
      hu: 'Energia-felhasználás növelése sympathomimetic és termogén úton',
      en: 'Increased energy expenditure via sympathomimetic and thermogenic pathways',
      pl: 'Zwiększenie wydatku energetycznego drogą sympatomimetyczną i termogeniczną',
    },
    description: {
      hu: 'A bazális metabolikus ráta (BMR) növelése a sympathomimetic stimulánsokkal (Ephedrine, Yohimbine) és a β-agonist bronchodilatátorokkal (Clenbuterol, Albuterol) történik. Az Astrup 1986-os vizsgálata szerint 20 mg ephedrin akut hatásra ~10%-kal emeli a nyugalmi anyagcsere-rátát. Klinikai pajzsmirigy-hormonok (T3, T4) szintén modulátorként szerepelnek a metabolizmus-területen, de ezek a Phase 5 könyvtárban külön entry-ként nem szerepelnek.',
      en: 'Basal metabolic rate (BMR) is raised via sympathomimetic stimulants (Ephedrine, Yohimbine) and β-agonist bronchodilators (Clenbuterol, Albuterol). Astrup 1986 found 20 mg ephedrine acutely raises resting metabolic rate by ~10%. Clinical thyroid hormones (T3, T4) also modulate metabolism, but they are not separate entries in this Phase 5 library.',
      pl: 'Podstawowy metabolizm (BMR) podnoszą stymulanty sympatomimetyczne (Ephedrine, Yohimbine) i β-agoniści bronchodilatacyjni (Clenbuterol, Albuterol). Astrup 1986 wykazał, że 20 mg efedryny ostro podnosi spoczynkowy metabolizm o ~10%. Hormony tarczycy (T3, T4) także modulują metabolizm, ale nie są osobnymi pozycjami w tej bibliotece Phase 5.',
    },
    detail: {
      hu: 'Az Ephedrine + caffeine kombinációja krónikus alkalmazás esetén ~5%-os BMR-emelést tart fenn 8 héten át (Astrup 1992). A Clenbuterol β2-mediált thermogenezist okoz, részben a barna zsírszövet UCP1-aktiválásával. A Yohimbine alfa2-blokádon keresztül a noradrenalin-felszabadulást emeli, ami szelektíven a hasi és combi zsírdepóknál hatékonyabb (stubborn fat hipotézis). Klinikai T3 (liothyronine) használat erős BMR-emelést okoz, de szigorú orvosi felügyeletet igényel.',
      en: 'Ephedrine + caffeine chronically sustains a ~5% BMR elevation over 8 weeks (Astrup 1992). Clenbuterol drives β2-mediated thermogenesis partly via UCP1 activation in brown fat. Yohimbine raises noradrenaline release via α2 blockade, more efficient at abdominal and femoral fat depots (stubborn fat hypothesis). Clinical T3 (liothyronine) use sharply raises BMR but requires strict medical supervision.',
      pl: 'Ephedrine + kofeina przewlekle podtrzymują ~5% wzrostu BMR przez 8 tygodni (Astrup 1992). Clenbuterol napędza β2-zależną termogenezę częściowo przez aktywację UCP1 w brunatnej tkance tłuszczowej. Yohimbine podnosi uwalnianie noradrenaliny przez blokadę α2, skuteczniej w brzusznych i udowych depozytach (hipoteza stubborn fat). Kliniczne T3 (liothyronine) silnie podnosi BMR, ale wymaga ścisłego nadzoru medycznego.',
    },
    studies: [
      { title: 'Thermogenic synergism between ephedrine and caffeine in healthy volunteers', authors: 'Astrup A, Toubro S, Cannon S, et al.', journal: 'Metabolism. 1991;40(3):323-329.', pmid: '2000046' },
      { title: 'Effect of yohimbine on body composition and exercise performance', authors: 'Ostojic SM.', journal: 'Res Sports Med. 2006;14(4):289-299.', pmid: '17214405' }
    ],
    entryNames: ['Clenbuterol', 'Yohimbine', 'DNP'],
    entryIds: ['clenbuterol', 'yohimbine', 'dnp-info'],
    image: null,
  }
]
