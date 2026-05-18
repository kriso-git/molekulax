// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.962Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "ephedrine",
  "name": "Ephedrine",
  "image": null,
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Sympatomimetyczny alkaloid (Ephedra sinica), klasyczny termogenik i bronchodilator. Zakazany przez WADA w sporcie wyczynowym.",
  "description": "Efedryna to fenetyloaminowy alkaloid izolowany z Ephedra sinica (Ma Huang). Działa na receptory α- i β-adrenergiczne oraz wzmaga uwalnianie noradrenaliny z zakończeń presynaptycznych. W USA to OTC bronchodilator (astma) i lek udrażniający (poprzednik Sudafedu); w UE dostępny bez recepty w preparatach na alergię/przeziębienie. Badania Astrupa 1991-92 udokumentowały ostry ~10% i przewlekły ~5% wzrost podstawowej przemiany materii, a próby z placebo wykazały ~3-5 kg dodatkowej utraty tłuszczu w 12-24 tygodni u otyłych kobiet w stosie efedryna + kofeina.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista α/β-adrenergiczny + uwalnianie NE"
    },
    {
      "label": "Okres półtrwania",
      "value": "3-6 godzin"
    },
    {
      "label": "Czas wystąpienia",
      "value": "15-30 min"
    },
    {
      "label": "Status prawny",
      "value": "USA: OTC ograniczony. UE: OTC w preparatach."
    }
  ],
  "mechanism": "Klasyczny mechanizm **pośredniego sympatomimetyku**: efedryna działa jako substrat VMAT, podnosząc cytoplazmatyczne stężenie NE i odwracając transporter NE, dając pośrednią stymulację sympatyczną (w przeciwieństwie do bezpośredniego profilu agonisty Clenbuterolu). Wtórnie bezpośredni agonista α1 i β1/β2 (o słabszym powinowactwie). β2 daje rozszerzenie oskrzeli, β3 termogenezę brunatnej tkanki, α1 wazokonstrykcję.",
  "legalStatus": "USA: OTC z ograniczeniami (Combat Methamphetamine Epidemic Act, 2005), zakupy online wymagają rejestracji. UE: OTC lub na receptę zależnie od kraju. WADA: zakazany w zawodach powyżej 10 μg/mL moczu.",
  "onsetTime": "15-30 min",
  "halfLife": "3-6 h",
  "interactionsWith": [
    "caffeine",
    "aspirin",
    "MAOI",
    "SSRI",
    "TCA",
    "alcohol"
  ],
  "wadaStatus": "banned",
  "detectionWindow": "24-48 godzin mocz (próg WADA w zawodach: 10 μg/mL).",
  "benefits": [
    "Ostry wzrost podstawowej przemiany materii (~10% Astrup 1986)",
    "Przewlekła redukcja tkanki tłuszczowej w stosie EC (3-5 kg / 12-24 tyg)",
    "Rozszerzenie oskrzeli (dostęp astmatyczny w preparatach OTC)",
    "Działanie zmniejszające apetyt (efekt uboczny stymulanta CNS)"
  ],
  "quickStart": [
    "Kontekst edukacyjny: zakazany przez WADA w sporcie wyczynowym",
    "Klasyczny stos ECA: 20-25 mg efedryny + 200 mg kofeiny + 81-325 mg aspiryny, 3x/dziennie",
    "Maks. 6-8 tygodni ciągłego użycia z powodu tachyfilaksji",
    "Nie przyjmuj po 16:00 (powoduje bezsenność)"
  ],
  "expectations": [
    {
      "label": "Pierwsza dawka",
      "body": "Efekt ostry po 30-60 min: wzrost tętna (+10-20 bpm), lekkie drżenie, stymulacja, redukcja apetytu."
    },
    {
      "label": "Tydzień 1-2",
      "body": "Tolerancja rozwija się (efekt ostry maleje), ale przewlekły efekt termogeniczny utrzymuje się. Tempo redukcji +0.2-0.4 kg/tydzień powyżej placebo."
    },
    {
      "label": "Koniec tygodnia 6",
      "body": "Zalecana przerwa cyklu, 2 tygodnie OFF dla resensytyzacji receptorów. Obowiązkowy dziennik ciśnienia; przy utrzymującym się >140/90 zakończ."
    }
  ],
  "quality": {
    "pure": [
      "Czysta tabletka lub roztwór z preparatu OTC (Bronkaid, Primatene Tablets w USA)",
      "Niezależnie testowane źródło z ekstraktu Ma Huang (zmienna zawartość)"
    ],
    "caution": [
      "Monitoring sercowo-naczyniowy: dziennik ciśnienia w domu (cel: <140/90), tętno spoczynkowe <100",
      "EKG po 6-tygodniowym cyklu zalecane (szczególnie przy ECA)",
      "Bezsenność, lęk, drażliwość, tachykardia",
      "Tolerancja rozwija się szybko (1-2 tygodnie), przerwy obowiązkowe",
      "Asocjacja udar + MI (Haller 2000 NEJM PMID 11122465): analiza 140 przypadków z bazy FDA wykazała 47% sercowo-naczyniowe (MI, udar, nagła śmierć), 18% CNS (drgawki, psychoza). Aspiryna w stosie ECA częściowo łagodzi ryzyko zakrzepowe."
    ],
    "avoid": [
      "Nadciśnienie (>140/90 baseline) to bezwzględne przeciwwskazanie",
      "Przeciwwskazany z MAOI, SSRI, TCA (ryzyko zespołu serotoninowego)",
      "Nadczynność tarczycy, jaskra, przerost prostaty to przeciwwskazania",
      "Choroba wieńcowa, przebyty MI, ciężka arytmia to bezwzględne przeciwwskazanie",
      "Padaczka, drgawki w wywiadzie (stymulacja CNS obniża próg drgawkowy)",
      "Ciężki lęk lub zaburzenia paniczne (objawy sympatykomimetyczne się nasilają)",
      "Ciąża i karmienie piersią"
    ]
  },
  "interactions": [
    "Kofeina: synergiczna termogeneza (baza ECA), ale stres sercowo-naczyniowy wzrasta",
    "Aspiryna (81-325 mg): zmniejsza ryzyko zakrzepowe w stosie ECA",
    "Inhibitor MAO: zespół serotoninowy (przeciwwskazane)",
    "Yohimbine: skumulowany stres sympatomimetyczny, rzadko ciężkie nadciśnienie"
  ],
  "studies": [
    {
      "title": "Thermogenic synergism between ephedrine and caffeine in healthy volunteers",
      "authors": "Astrup A, Toubro S, Cannon S et al.",
      "journal": "Metabolism. 1991;40(3):323-329.",
      "pmid": "2000046"
    },
    {
      "title": "The effect of ephedrine/caffeine mixture on energy expenditure and body composition in obese women",
      "authors": "Astrup A, Buemann B, Christensen NJ et al.",
      "journal": "Metabolism. 1992;41(7):686-688.",
      "pmid": "1619987"
    },
    {
      "title": "Efficacy and safety of ephedra and ephedrine for weight loss and athletic performance: meta-analysis",
      "authors": "Shekelle PG, Hardy ML, Morton SC et al.",
      "journal": "JAMA. 2003;289(12):1537-1545.",
      "pmid": "12672771"
    },
    {
      "title": "Ephedrine, pseudoephedrine, and norpseudoephedrine: stimulant and weight loss effects",
      "authors": "Greenway FL.",
      "journal": "Obes Rev. 2001;2(3):199-211.",
      "pmid": "12120105"
    },
    {
      "title": "An herbal supplement containing Ma Huang-Guarana for weight loss: a randomized, double-blind trial",
      "authors": "Boozer CN, Daly PA, Homel P et al.",
      "journal": "Int J Obes Relat Metab Disord. 2002;26(5):593-604.",
      "pmid": "11796957"
    },
    {
      "title": "Adverse cardiovascular and central nervous system events associated with dietary supplements containing ephedra alkaloids",
      "authors": "Haller CA, Benowitz NL.",
      "journal": "N Engl J Med. 2000;343(25):1833-1838.",
      "pmid": "11122465"
    }
  ],
  "faq": [
    {
      "q": "Dlaczego WADA tego zakazuje?",
      "a": "WADA zakazuje w zawodach, jeśli stężenie w moczu >10 μg/mL (kategoria stymulantów CNS). Poza zawodami trening nie jest zakazany, ale stosowanie w tygodniu zawodów jest ryzykowne z powodu długiego okna wykrywalności."
    },
    {
      "q": "Czy można łączyć z GHB?",
      "a": "NIE. Efedryna + sedatywne (GHB, benzodiazepiny, alkohol w dużych ilościach) są przeciwwskazane: kombinacja sympatomimetyczna + sedatywna jest kardiotoksyczna. Plus GHB jest nielegalne."
    },
    {
      "q": "Jak szybko rozwija się tolerancja?",
      "a": "Ostry efekt stymulanta maleje w 1-2 tygodnie (down-regulacja receptorów). Termogenny efekt utrzymuje się (~5% BMR), ale pauzy co 2-4 tygodnie zalecane."
    },
    {
      "q": "Czy potrzebne badania krwi?",
      "a": "Strukturyzowany protokół badań krwi niepotrzebny jak przy AAS. Ale dziennik ciśnienia w domu (cel <140/90), tętno spoczynkowe <100, i 1 EKG po 6 tygodniach zalecane. Funkcja tarczycy (TSH, fT3, fT4) przed ECA."
    },
    {
      "q": "Dlaczego FDA zakazała suplementów ephedra w 2004 r.?",
      "a": "Badanie Haller & Benowitz 2000 NEJM (PMID 11122465) przeanalizowało 140 zdarzeń niepożądanych z bazy FDA: **47% sercowo-naczyniowe** (MI, udar, nagła śmierć) i **18% CNS** (drgawki, psychoza). Wraz z meta-analizą Shekelle 2003 JAMA (PMID 12672771) oceniającą bilans korzyść-ryzyko jako niekorzystny, FDA wprowadziła w 2004 r. zakaz suplementów ephedra na rynku OTC. Apteczne tabletki Bronkaid/Primatene jako Rx dla astmy pozostają dostępne ze ścisłymi limitami zakupu. W UE efedryna HCl pozostaje OTC w preparatach na przeziębienie/alergię."
    }
  ],
  "related": [
    "yohimbine",
    "clenbuterol",
    "albuterol"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 25,
      "medium": 50,
      "high": 75
    },
    "unit": "mg/nap",
    "note": "Klasyczny stos ECA: 25 mg efedryny + 200 mg kofeiny + 81-325 mg aspiryny, 2-3x/dziennie. Nie po 16:00. Maks. 6-8 tygodni. Dziennik ciśnienia obowiązkowy."
  }
}
