// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.583Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "methotrexate",
  "name": "Methotrexate",
  "image": null,
  "accentColor": "#ec4899",
  "tagColor": "rgba(236,72,153,0.18)",
  "shortDesc": "Dihidrofolát-reduktáz (DHFR) gátló antimetabolit. Alacsony-dózisú heti adagolás: rheumatoid arthritis, pszoriázis. Magas-dózisú: onko-kemoterápia.",
  "description": "A Methotrexate (MTX) folát-antagonista antimetabolit (FDA 1953). A dihidrofolát-reduktáz (DHFR) gátlása révén blokkolja a tetrahidrofolát képződését, ami a DNS-szintézist és sejt-proliferációt gátolja. Két nagyon különböző indikációs területe van: (1) ALACSONY-DÓZISÚ heti orális/SC 7,5-25 mg — rheumatoid arthritis (gold-standard DMARD), pszoriázis, IBD, ANCA-vasculitis; (2) MAGAS-DÓZISÚ IV/intratekális — leukémia, lymphoma, osteosarcoma, choriocarcinoma. A két kontextus farmakológiailag radikálisan különböző: az alacsony-dózisú heti MTX folát-folsavpótlással (1-5 mg/nap) jól tolerálható, míg a magas-dózisú onko-MTX KÖTELEZŐ Leucovorin-rescue-val, szintű-monitorozással és sürgősségi készenléttel jár. A WHO Essential Medicines listán mindkét kontextus szerepel.",
  "mechanism": "DHFR-gátlás → tetrahidrofolát-deficit → thymidylat-szintézis blokk → DNS-szintézis gátlás. Másodlagos: AICAR-szintézis-gátlás (adenosine-akkumuláció, anti-gyulladásos hatás MTX-alacsony dózison).",
  "legalStatus": "EU/HU: vényköteles (Trexan, Metoject SC, Methotrexat Lederle, generikus). USA: FDA Rx. Onkológiai magas-dózis kórházi adagolás.",
  "onsetTime": "6-12 weeks (RA clinical response)",
  "halfLife": "~3-10 h (highly variable)",
  "atcCode": "L01BA01 / L04AX03",
  "prescriptionStatus": "Vényköteles (Rx), szakorvosi felügyelet (reumatológus / onkológus)",
  "indications": [
    "Rheumatoid arthritis (RA, gold-standard DMARD)",
    "Pikkelysömör (pszoriázis), pszoriázis-arthritis",
    "IBD (Crohn), ANCA-vasculitis (alacsony dózis)",
    "Akut limfoblasztos leukémia (ALL), lymphoma, osteosarcoma, choriocarcinoma (magas-dózis kemoterápia)",
    "Méhen kívüli terhesség konzervatív kezelése"
  ],
  "contraindications": [
    "Terhesség és szoptatás (FDA X kategória, ABORTÁLÓ — abortifaciens-hatás)",
    "Súlyos máj- vagy vesefunkció-zavar",
    "Aktív hematológiai zavar (leukopenia, anémia, thrombocitopenia)",
    "Aktív szisztémás infekció",
    "Alkohol-abúzus (hepatotoxicitás-additivitás)"
  ],
  "commonSideEffects": [
    "GI: hányinger, sztomatitisz, hasmenés (gyakori; folát-pótlással mitigálható)",
    "Hepatotoxicitás (krónikus, alkohol-additív)",
    "Myelosuppresszió (csontvelő-szuppresszió: leukopenia, thrombocitopenia, anémia)",
    "Súlyos: pulmonális toxicitás (pneumonitis), infekció-suscibilitás, hepatikus fibrózis krónikus, akut vesekárosodás magas-dózison"
  ],
  "cyp450": [
    "Not CYP-metabolized (folate pathway antagonism)",
    "Renal excretion (90% unchanged)"
  ],
  "crossMolInteractions": [
    "NSAID (aspirin, ibuprofen): vese-clearance csökken, MTX-toxicitás fokozódik",
    "Trimethoprim/Sulfamethoxazole (Bactrim): pancytopenia kockázat (folát-blokk additivitás)",
    "Proton-pumpa inhibitor (PPI): MTX vese-clearance csökkenése, magas-dózisú onko-MTX-en TILOS",
    "Élő-vírusos vakcina: immunoszuppresszió alatt kontraindikált",
    "FOLÁT (folsav 5-10 mg/hét vagy folinic acid): KÖTELEZŐ az alacsony-dózisú MTX-toxicitás mitigálására"
  ],
  "benefits": [
    "RA gold-standard DMARD, hatékony és olcsó",
    "Onkológiai indikációkban élet-mentő (ALL gyermek, choriocarcinoma)",
    "Hosszú-távú adatok (70+ év)"
  ],
  "studies": [
    {
      "title": "EULAR recommendations for the management of rheumatoid arthritis",
      "authors": "Smolen JS, Landewé RBM, Bergstra SA et al.",
      "journal": "Ann Rheum Dis. 2023;82(1):3-18.",
      "pmid": "36357155"
    },
    {
      "title": "Methotrexate in cancer chemotherapy: clinical use and mechanism",
      "authors": "Tian H, Cronstein BN.",
      "journal": "Bull NYU Hosp Jt Dis. 2007;65(3):168-73.",
      "pmid": "17922666"
    },
    {
      "title": "Folate supplementation reduces methotrexate adverse effects",
      "authors": "Shea B, Swinden MV, Tanjong Ghogomu E et al.",
      "journal": "Cochrane Database Syst Rev. 2013;(5):CD000951.",
      "pmid": "23728635"
    }
  ],
  "related": [
    "tamoxifen",
    "hydrocortisone"
  ],
  "doseCalc": {
    "type": "warning",
    "warning": "A Methotrexate egy ONKO- ÉS AUTOIMMUN-GRÁDU gyógyszer, amely SZAKORVOSI (reumatológus vagy onkológus) FELÜGYELET nélkül NEM HASZNÁLHATÓ. NEM ÖNÁLLÓ DÓZIS-KALKULÁTOR ezen az oldalon, mert: (1) az alacsony-dózisú (heti 7,5-25 mg) és a magas-dózisú (onko-szintű 100-12000 mg/m²) tartomány közötti különbség 100-1000x — összekeverése HALÁLOS lehet; (2) FOLSAV (5-10 mg/hét) ELLENPÓTLÁS KÖTELEZŐ a heti MTX-en; (3) FDA X kategória (abortifaciens) — terhességben ABSZOLÚT tilos; (4) NSAID, Bactrim, PPI interakciók szignifikánsak. Beszélj a reumatológusoddal vagy az onkológusoddal. Sürgősségi tünet (láz, sztomatitisz, légszomj, vér a vizeletben, fekete-széklet): AZONNALI ellátás."
  }
}
