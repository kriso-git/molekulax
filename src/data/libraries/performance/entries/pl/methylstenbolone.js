// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.967Z
// Edit this file directly to update the PL body; do not re-run the script.

export default {
  "id": "methylstenbolone",
  "name": "Methylstenbolone",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Designer prohormon. Silny agonista AR z wysoką hepatotoksycznością.",
  "description": "Methylstenbolone (M-Sten, Ultradrol, Methyl-D) to **designer prohormon o strukturze chemicznej 2β,17β-dimetylo-2,3α-epitio-5α-androstanu**. Grupa 2,3α-epitio zastępuje aromatyzowalny pierścień A → brak konwersji do E2, stąd czysty suchy/twardy profil. W USA sprzedawany 2008-2012 jako suplement diety pod markami Iron Mag Labs Ultradrol, Antaeus Labs Methyl-D i in. Listy ostrzegawcze FDA 2012-2013 do wielu producentów, następnie **DASCA 2014** zaklasyfikowała jako Schedule III. Analiza serii przypadków **Robles-Diaz 2015 (Liver Int, PMID 25867306)** udokumentowała piorunujące cholestatyczne zapalenie wątroby przy 5-15 mg/dzień w 3-6 tygodni u zdrowych młodych mężczyzn, z kilkoma przypadkami przeszczepu wątroby. Wysoka hepatotoksyczność, efekty prostaty bardziej wyraźne niż Superdrol.",
  "keyInfo": [
    {
      "label": "Mechanizm",
      "value": "Agonista AR (660/660)"
    },
    {
      "label": "Okres półtrwania",
      "value": "8-12 godzin"
    },
    {
      "label": "Status prawny",
      "value": "USA: kontrolowany od 2014."
    }
  ],
  "mechanism": "Silny agonista AR. **Selektywność AR**: grupa 2,3α-epitio blokuje powinowactwo do aromatazy ORAZ konwersję 5α-reduktazą, dając czysty profil agonisty AR (brak konwersji do E2 ani DHT). **SYMETRYCZNY stosunek 660:660 oznacza, że androgenność prostaty jest TAK SAMO SILNA jak efekt anaboliczny** — stąd efekty prostaty (trądzik, agresja, łysienie androgenne, przerost) bardziej wyraźne niż Superdrol (400:20). Grupa 17α-metylowa zapewnia biodostępność, ale powoduje hepatotoksyczność.",
  "legalStatus": "USA: kontrolowany od 2014. UE: nielegalny bez recepty. WADA: zakazany.",
  "onsetTime": "7-10 days",
  "halfLife": "8-12 h",
  "interactionsWith": [
    "alcohol",
    "NSAIDs",
    "liver hepatotoxins"
  ],
  "aromatization": "Nie — designerski steroid 2α,17α-dimetylowy, NIE substrat CYP19; typowe \"dry gains\" (Cohen 2014 NEJM list designer AAS)",
  "hepatotoxicity": "Bardzo wysoka — designerski 17α-alkilowany, udokumentowane ciężkie przypadki DILI (ostre zapalenie wątroby w ciągu 4-6 tygodni) (PubMed Robles-Diaz 2015)",
  "wadaStatus": "banned",
  "androgenicRatio": "660:660",
  "benefits": [
    "Silny przyrost masy z suchym, twardym, naczyniowym wyglądem (3-5 kg / 3-4 tyg, profil podobny do Superdrolu)",
    "Wyraźny wzrost siły: PR bench/martwego ciągu udokumentowane po 2-3 tygodniu",
    "Brak aromatyzacji ANI konwersji do DHT (czysty profil agonisty AR)"
  ],
  "studies": [
    {
      "title": "Designer steroid hepatotoxicity: acute liver failure from methylstenbolone",
      "authors": "Robles-Diaz M, Gonzalez-Jimenez A, Medina-Caliz I et al.",
      "journal": "Liver Int. 2015;35(11):2483-2493.",
      "pmid": "25867306"
    },
    {
      "title": "Designer steroids in dietary supplements",
      "authors": "Geyer H, Schänzer W, Thevis M.",
      "journal": "Mol Cell Endocrinol. 2014;464:99-108.",
      "pmid": "24882754"
    }
  ],
  "related": [
    "superdrol"
  ],
  "doseCalc": {
    "type": "fixed",
    "fixed": {
      "low": 4,
      "medium": 8,
      "high": 16
    },
    "unit": "mg/nap",
    "note": "Maks. 4 tygodnie. 2 dawki dziennie. ALT/AST >2x = natychmiast stop. TUDCA 750 mg/dzień."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Przed cyklem",
      "timing": "2 tygodnie przed",
      "markers": "Priorytet wątrobowy + reszta.",
      "purpose": "Baseline wątroby krytyczny."
    },
    "midCycle": {
      "label": "W trakcie",
      "timing": "Koniec tygodnia 2",
      "markers": "ALT, AST, GGT, bilirubina, lipidogram.",
      "purpose": "ALT/AST >2x = natychmiast przerwanie."
    },
    "postCycle": {
      "label": "PCT",
      "timing": "PCT tydzień 4 + 8-12",
      "markers": "Total T, LH, FSH, E2, recovery.",
      "purpose": "Weryfikacja recovery."
    },
    "cruise": null
  }
}
