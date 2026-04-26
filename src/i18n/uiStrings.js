// All UI text strings for MolekulaX, in Hungarian / English / Polish.
// Add a key here to make it translatable, then call t('key') in a component.

export const UI = {
  hu: {
    // Hero
    'hero.badge': 'Peptid edukáció',
    'hero.tagline': 'Megbízható forrás peptid adagolási protokollokról és kutatási információkról',
    'hero.subtitle': '— Peptidtudás és Edukáció',
    'hero.body.start': 'A peptidek biológiai hatásait tudományos alapokon vizsgáljuk. Kérdéseiddel fordulj ',
    'hero.body.bold': 'tanácsadónkhoz',
    'hero.body.end': ' — elérhető Telegramon.',
    'hero.cta.telegram': 'Kapcsolatfelvétel Telegramon',
    'hero.cta.tiktok': 'Kövess TikTokon',
    'hero.ticker': 'MolekulaX: Tudatosság  •  Tudomány  •  Közösség  •  Peptid Edukáció  •  Tudományalapú Útmutatás  •  ',

    // Education
    'edu.eyebrow': 'Tudásbázis',
    'edu.title': 'Miért a MolekulaX?',
    'edu.f1.title': 'Peptid farmakológia',
    'edu.f1.desc': 'Az endogén és szintetikus peptidek hatásmechanizmusainak tudományos áttekintése — receptorkötéstől a sejtes jelzési utakig.',
    'edu.f2.title': 'Klinikai kutatások',
    'edu.f2.desc': 'Peer-reviewed tanulmányok és PubMed hivatkozások alapján tájékozódj — nem marketing, hanem adat.',
    'edu.f3.title': 'Tanácsadó elérhetősége',
    'edu.f3.desc': 'Ha kérdésed van a témával kapcsolatban, tanácsadónk elérhető Telegramon — közvetlenül és egyszerűen.',

    // Peptide Gallery
    'gal.eyebrow': 'Peptid Könyvtár',
    'gal.title': 'Peptidek',
    'gal.subtitle': 'Kattints egy peptidre a részletes leírásért, releváns kutatásokért és a beépített kalkulátorért.',

    // Peptide Modal
    'modal.close': 'Bezár',
    'modal.description': 'Leírás',
    'modal.dosage': 'Adagolási információk',
    'modal.studies': 'Releváns Tanulmányok',
    'modal.calculator': 'Beépített Kalkulátor',

    // Calculator (Tools)
    'calc.eyebrow': 'Eszközök',
    'calc.title': 'Peptid Számológép',
    'calc.subtitle': 'Rekonstituálási arányok, ciklustervezés és referencia adatok — egy helyen.',
    'calc.tab.recon': 'Rekonstituálás',
    'calc.tab.cycle': 'Ciklustervező',
    'calc.tab.ref': 'Referencia',
    'calc.peptide': 'Peptid',
    'calc.vialSize': 'Injekciós üveg mérete',
    'calc.vialHint': 'Általában 2 mg, 5 mg vagy 10 mg',
    'calc.bac': 'Hozzáadott bakteriostatikus víz',
    'calc.bacHint': 'Jellemzően 1–2 mL',
    'calc.dose': 'Kívánt dózis',
    'calc.doseHint': 'Tipikus tartomány',
    'calc.result': 'Eredmény',
    'calc.empty': 'Add meg az adatokat az eredményhez.',
    'calc.conc': 'Koncentráció',
    'calc.volume': 'Felszívandó mennyiség',
    'calc.iu': 'Inzulinfecskendő egység',
    'calc.uNote.bold': 'U-100',
    'calc.uNote': 'Az inzulinfecskendő {U} skálán értendő (100 IU = 1 mL). Ha U-40 fecskendőt használsz, az eredményt osztd 2,5-tel.',
    'calc.cycleTitle': 'Ciklus összesítő',
    'calc.cycleEmpty': 'Add meg az adatokat az összesítőhöz.',
    'calc.cycleDose': 'Dózis / injekció',
    'calc.cycleInjectsPerDay': 'Injekció / nap',
    'calc.cycleActiveDays': 'Aktív nap / hét',
    'calc.cycleActiveHint': 'Max. 7',
    'calc.cycleLength': 'Ciklus hossza',
    'calc.weeks': 'hét',
    'calc.cycleVial': 'Üveg mérete',
    'calc.totalInj': 'Összes injekció',
    'calc.totalDose': 'Összes dózis',
    'calc.totalAmount': 'Összes mennyiség',
    'calc.vialsNeeded': 'Szükséges injekciós üveg',
    'calc.pcs': 'db',
    'calc.refCols': 'Peptid|Félelevidő|Tipikus dózis|Frekvencia|Üveg|Beadás',
    'calc.refFootnote': 'SC = szubkután · IM = intramuszkuláris · IN = intranazális · A fenti értékek tájékoztató jellegűek.',
    'calc.custom': 'Egyéni',

    // MiniCalc
    'mc.title': 'Peptid Kalkulátor',
    'mc.vial': 'Fiola',
    'mc.bac': 'BAC víz',
    'mc.dose': 'Adag',
    'mc.conc': 'Koncentráció',
    'mc.iu': 'Fecskendő (IU)',
    'mc.ml': 'Fecskendő (ml)',
    'mc.doses': 'Adagok száma',
    'mc.doseUnit': 'adag',
    'mc.empty': 'Add meg az adatokat a számításhoz.',
    'mc.note': 'Kizárólag tájékoztató — nem helyettesíti az orvosi tanácsadást.',

    // Telegram Section
    'tg.eyebrow': 'Kapcsolat',
    'tg.title': 'Van kérdésed a peptidekkel kapcsolatban?',
    'tg.body': 'Tanácsadónk elérhető Telegramon — egyszerűen írj, és segítünk eligazodni a témában.',
    'tg.cta': 'Írj a tanácsadónak',

    // FAQ
    'faq.eyebrow': 'Gyakori kérdések',
    'faq.title': 'FAQ',
    'faq.subtitle.suffix': 'kérdés — adagolástól a jogi státuszig.',
    'faq.footer': 'Minden válasz tájékoztató jellegű — nem helyettesíti az orvosi szakvéleményt.',

    // Disclaimer
    'dc.eyebrow': 'Fontos tájékoztatás',
    'dc.body': 'Ez a weboldal kizárólag edukatív és tájékoztatási céllal jött létre. Nem értékesítünk termékeket, nem nyújtunk orvosi tanácsadást, és nem üzemeltetünk csoportot. Az itt közölt tartalom tudományos forrásokra épül, azonban nem helyettesíti az orvosi szakvéleményt.',

    // Footer
    'footer.rights': '© 2026 MolekulaX. Minden jog fenntartva.',

    // Peptide Effects (Élettani hatások)
    'pe.title': 'Élettani hatások',
    'pe.subtitle': 'A peptidek nem egységes csoport — minden kategória más biológiai útvonalon fejti ki hatását.',
    'pe.hint': 'Kattints egy csempére a részletekért',
    'pe.details': 'Részletek',
    'pe.refs': 'Tudományos hivatkozások',
    'pe.relevant': 'Releváns peptidek',
    'pe.contactPrompt': 'Kérdésed van? Lépj kapcsolatba velünk',

    // Language switcher
    'lang.label': 'Nyelv',
  },

  en: {
    // Hero
    'hero.badge': 'Peptide education',
    'hero.tagline': 'Your trusted source for peptide dosage protocols & research information',
    'hero.subtitle': '— Peptide knowledge & education',
    'hero.body.start': 'We examine the biological effects of peptides on a scientific basis. With your questions reach out to ',
    'hero.body.bold': 'our advisor',
    'hero.body.end': ' — available on Telegram.',
    'hero.cta.telegram': 'Contact us on Telegram',
    'hero.cta.tiktok': 'Follow on TikTok',
    'hero.ticker': 'MolekulaX: Awareness  •  Science  •  Community  •  Peptide Education  •  Science-based guidance  •  ',

    // Education
    'edu.eyebrow': 'Knowledge base',
    'edu.title': 'Why MolekulaX?',
    'edu.f1.title': 'Peptide pharmacology',
    'edu.f1.desc': 'A scientific overview of the mechanisms of action of endogenous and synthetic peptides — from receptor binding to cellular signalling pathways.',
    'edu.f2.title': 'Clinical research',
    'edu.f2.desc': 'Stay informed using peer-reviewed studies and PubMed references — data, not marketing.',
    'edu.f3.title': 'Advisor availability',
    'edu.f3.desc': 'If you have a question on the topic, our advisor is available on Telegram — directly and simply.',

    // Peptide Gallery
    'gal.eyebrow': 'Peptide Library',
    'gal.title': 'Peptides',
    'gal.subtitle': 'Click on a peptide for the detailed description, relevant studies and built-in calculator.',

    // Peptide Modal
    'modal.close': 'Close',
    'modal.description': 'Description',
    'modal.dosage': 'Dosage information',
    'modal.studies': 'Relevant studies',
    'modal.calculator': 'Built-in calculator',

    // Calculator (Tools)
    'calc.eyebrow': 'Tools',
    'calc.title': 'Peptide Calculator',
    'calc.subtitle': 'Reconstitution ratios, cycle planning and reference data — in one place.',
    'calc.tab.recon': 'Reconstitution',
    'calc.tab.cycle': 'Cycle planner',
    'calc.tab.ref': 'Reference',
    'calc.peptide': 'Peptide',
    'calc.vialSize': 'Vial size',
    'calc.vialHint': 'Typically 2 mg, 5 mg or 10 mg',
    'calc.bac': 'Bacteriostatic water added',
    'calc.bacHint': 'Typically 1–2 mL',
    'calc.dose': 'Desired dose',
    'calc.doseHint': 'Typical range',
    'calc.result': 'Result',
    'calc.empty': 'Enter the values to see results.',
    'calc.conc': 'Concentration',
    'calc.volume': 'Draw volume',
    'calc.iu': 'Insulin syringe units',
    'calc.uNote.bold': 'U-100',
    'calc.uNote': 'The insulin syringe is on the {U} scale (100 IU = 1 mL). If using a U-40 syringe, divide the result by 2.5.',
    'calc.cycleTitle': 'Cycle summary',
    'calc.cycleEmpty': 'Enter the values to see the summary.',
    'calc.cycleDose': 'Dose / injection',
    'calc.cycleInjectsPerDay': 'Injections / day',
    'calc.cycleActiveDays': 'Active days / week',
    'calc.cycleActiveHint': 'Max. 7',
    'calc.cycleLength': 'Cycle length',
    'calc.weeks': 'weeks',
    'calc.cycleVial': 'Vial size',
    'calc.totalInj': 'Total injections',
    'calc.totalDose': 'Total dose',
    'calc.totalAmount': 'Total amount',
    'calc.vialsNeeded': 'Vials needed',
    'calc.pcs': 'pcs',
    'calc.refCols': 'Peptide|Half-life|Typical dose|Frequency|Vial|Route',
    'calc.refFootnote': 'SC = subcutaneous · IM = intramuscular · IN = intranasal · The values above are for guidance only.',
    'calc.custom': 'Custom',

    // MiniCalc
    'mc.title': 'Peptide Calculator',
    'mc.vial': 'Vial',
    'mc.bac': 'BAC water',
    'mc.dose': 'Dose',
    'mc.conc': 'Concentration',
    'mc.iu': 'Syringe (IU)',
    'mc.ml': 'Syringe (ml)',
    'mc.doses': 'Doses count',
    'mc.doseUnit': 'doses',
    'mc.empty': 'Enter the values to compute.',
    'mc.note': 'For information only — does not replace medical advice.',

    // Telegram Section
    'tg.eyebrow': 'Contact',
    'tg.title': 'Have a question about peptides?',
    'tg.body': 'Our advisor is available on Telegram — just write, and we will help you navigate the topic.',
    'tg.cta': 'Message the advisor',

    // FAQ
    'faq.eyebrow': 'Frequently asked questions',
    'faq.title': 'FAQ',
    'faq.subtitle.suffix': 'questions — from dosing to legal status.',
    'faq.footer': 'All answers are informational — they do not replace medical advice.',

    // Disclaimer
    'dc.eyebrow': 'Important notice',
    'dc.body': 'This website was created strictly for educational and informational purposes. We do not sell products, do not provide medical advice, and do not run a group. The content is based on scientific sources but does not replace medical advice.',

    // Footer
    'footer.rights': '© 2026 MolekulaX. All rights reserved.',

    // Peptide Effects
    'pe.title': 'Physiological effects',
    'pe.subtitle': 'Peptides are not a uniform group — each category acts on a different biological pathway.',
    'pe.hint': 'Click on a tile for details',
    'pe.details': 'Details',
    'pe.refs': 'Scientific references',
    'pe.relevant': 'Relevant peptides',
    'pe.contactPrompt': 'Have a question? Get in touch',

    // Language switcher
    'lang.label': 'Language',
  },

  pl: {
    // Hero
    'hero.badge': 'Edukacja peptydowa',
    'hero.tagline': 'Twoje zaufane źródło protokołów dawkowania peptydów i informacji badawczych',
    'hero.subtitle': '— Wiedza peptydowa i edukacja',
    'hero.body.start': 'Badamy biologiczne działanie peptydów na podstawie naukowej. Z pytaniami zwróć się do ',
    'hero.body.bold': 'naszego doradcy',
    'hero.body.end': ' — dostępny na Telegramie.',
    'hero.cta.telegram': 'Kontakt przez Telegram',
    'hero.cta.tiktok': 'Obserwuj na TikToku',
    'hero.ticker': 'MolekulaX: Świadomość  •  Nauka  •  Społeczność  •  Edukacja peptydowa  •  Wskazówki oparte na nauce  •  ',

    // Education
    'edu.eyebrow': 'Baza wiedzy',
    'edu.title': 'Dlaczego MolekulaX?',
    'edu.f1.title': 'Farmakologia peptydów',
    'edu.f1.desc': 'Naukowy przegląd mechanizmów działania peptydów endogennych i syntetycznych — od wiązania z receptorami po szlaki sygnałowe komórek.',
    'edu.f2.title': 'Badania kliniczne',
    'edu.f2.desc': 'Czerp wiedzę z recenzowanych badań i odniesień PubMed — dane, nie marketing.',
    'edu.f3.title': 'Dostępność doradcy',
    'edu.f3.desc': 'Jeśli masz pytanie, nasz doradca jest dostępny na Telegramie — bezpośrednio i prosto.',

    // Peptide Gallery
    'gal.eyebrow': 'Biblioteka peptydów',
    'gal.title': 'Peptydy',
    'gal.subtitle': 'Kliknij peptyd, aby zobaczyć szczegółowy opis, istotne badania i wbudowany kalkulator.',

    // Peptide Modal
    'modal.close': 'Zamknij',
    'modal.description': 'Opis',
    'modal.dosage': 'Informacje o dawkowaniu',
    'modal.studies': 'Istotne badania',
    'modal.calculator': 'Wbudowany kalkulator',

    // Calculator (Tools)
    'calc.eyebrow': 'Narzędzia',
    'calc.title': 'Kalkulator peptydów',
    'calc.subtitle': 'Proporcje rekonstytucji, planowanie cyklu i dane referencyjne — w jednym miejscu.',
    'calc.tab.recon': 'Rekonstytucja',
    'calc.tab.cycle': 'Planer cyklu',
    'calc.tab.ref': 'Referencja',
    'calc.peptide': 'Peptyd',
    'calc.vialSize': 'Rozmiar fiolki',
    'calc.vialHint': 'Zwykle 2 mg, 5 mg lub 10 mg',
    'calc.bac': 'Dodana woda bakteriostatyczna',
    'calc.bacHint': 'Zwykle 1–2 mL',
    'calc.dose': 'Pożądana dawka',
    'calc.doseHint': 'Typowy zakres',
    'calc.result': 'Wynik',
    'calc.empty': 'Podaj dane, aby zobaczyć wynik.',
    'calc.conc': 'Stężenie',
    'calc.volume': 'Objętość do pobrania',
    'calc.iu': 'Jednostki strzykawki insulinowej',
    'calc.uNote.bold': 'U-100',
    'calc.uNote': 'Strzykawka insulinowa w skali {U} (100 IU = 1 mL). Jeśli używasz strzykawki U-40, podziel wynik przez 2,5.',
    'calc.cycleTitle': 'Podsumowanie cyklu',
    'calc.cycleEmpty': 'Podaj dane do podsumowania.',
    'calc.cycleDose': 'Dawka / iniekcja',
    'calc.cycleInjectsPerDay': 'Iniekcji / dzień',
    'calc.cycleActiveDays': 'Dni aktywne / tydzień',
    'calc.cycleActiveHint': 'Maks. 7',
    'calc.cycleLength': 'Długość cyklu',
    'calc.weeks': 'tyg.',
    'calc.cycleVial': 'Rozmiar fiolki',
    'calc.totalInj': 'Łącznie iniekcji',
    'calc.totalDose': 'Łączna dawka',
    'calc.totalAmount': 'Łączna ilość',
    'calc.vialsNeeded': 'Wymaganych fiolek',
    'calc.pcs': 'szt.',
    'calc.refCols': 'Peptyd|Okres półtrwania|Typowa dawka|Częstotliwość|Fiolka|Podanie',
    'calc.refFootnote': 'SC = podskórnie · IM = domięśniowo · IN = donosowo · Wartości powyżej mają charakter informacyjny.',
    'calc.custom': 'Własny',

    // MiniCalc
    'mc.title': 'Kalkulator peptydów',
    'mc.vial': 'Fiolka',
    'mc.bac': 'Woda BAC',
    'mc.dose': 'Dawka',
    'mc.conc': 'Stężenie',
    'mc.iu': 'Strzykawka (IU)',
    'mc.ml': 'Strzykawka (ml)',
    'mc.doses': 'Liczba dawek',
    'mc.doseUnit': 'dawek',
    'mc.empty': 'Podaj dane do obliczeń.',
    'mc.note': 'Wyłącznie informacyjnie — nie zastępuje porady lekarskiej.',

    // Telegram Section
    'tg.eyebrow': 'Kontakt',
    'tg.title': 'Masz pytanie dotyczące peptydów?',
    'tg.body': 'Nasz doradca jest dostępny na Telegramie — po prostu napisz, a pomożemy Ci zorientować się w temacie.',
    'tg.cta': 'Napisz do doradcy',

    // FAQ
    'faq.eyebrow': 'Najczęstsze pytania',
    'faq.title': 'FAQ',
    'faq.subtitle.suffix': 'pytań — od dawkowania po status prawny.',
    'faq.footer': 'Wszystkie odpowiedzi mają charakter informacyjny — nie zastępują opinii medycznej.',

    // Disclaimer
    'dc.eyebrow': 'Ważna informacja',
    'dc.body': 'Ta strona powstała wyłącznie w celach edukacyjnych i informacyjnych. Nie sprzedajemy produktów, nie świadczymy porad medycznych ani nie prowadzimy grupy. Treści opierają się na źródłach naukowych, ale nie zastępują opinii lekarskiej.',

    // Footer
    'footer.rights': '© 2026 MolekulaX. Wszelkie prawa zastrzeżone.',

    // Peptide Effects
    'pe.title': 'Efekty fizjologiczne',
    'pe.subtitle': 'Peptydy nie są jednolitą grupą — każda kategoria działa innym szlakiem biologicznym.',
    'pe.hint': 'Kliknij kafelek, aby poznać szczegóły',
    'pe.details': 'Szczegóły',
    'pe.refs': 'Odniesienia naukowe',
    'pe.relevant': 'Istotne peptydy',
    'pe.contactPrompt': 'Masz pytanie? Skontaktuj się z nami',

    // Language switcher
    'lang.label': 'Język',
  },
}
