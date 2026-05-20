// Created 2026-05-20 for Phase-12 GLOW multi-peptide stack (Tier 3 community-protocol)
// Edit this file directly — no decompose script regeneration.

export default {
  "id": "glow",
  "name": "GLOW",
  "image": "/peptides/GLOW.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "tagText": "#a78bfa",
  "shortDesc": "Multi-peptid stack — GHK-Cu + BPC-157 + TB-500. Bőr- és szövetregeneráció szinergikus protokollja (T3 community-tier).",
  "description": "A GLOW egy közösségi-protokoll szintű multi-peptid stack három komponensből: **GHK-Cu** (réz-tripeptid, kozmetikus + epigenetikus aktiváció), **BPC-157** (gyomor-pentadekapeptid, szisztémás szöveti gyógyulás) és **TB-500** (thymosin β4 fragment, sejt-migráció + aktin-binding). A három peptid együtt két különálló regenerációs tengelyt céloz: a **felszíni / kozmetikus** axist (GHK-Cu kollagén-szintézis, melanin-modulalás, sebgyógyulás) és a **szisztémás / mély-szöveti** axist (BPC-157 + TB-500 angiogenezis, mioblaszt-migráció, ín- és izom-regeneráció).\n\n**Evidencia-szint**: a stack-specifikus RCT-evidencia gyakorlatilag NEM létezik — a tier-3 cap a stack szintű klinikai vizsgálatok hiányát tükrözi. Az egyéni komponensek külön-külön T4-evidence-tier-en mozognak (GHK-Cu Pickart 2018, BPC-157 Sikiric review-k, TB-500 Goldstein cardiac kutatások), de a GLOW kombináció maga community-tier — Sean-curated notes + dopamine.club user-feedback alapján szerveződő közösségi protokoll.\n\n**WADA-figyelmeztetés**: a BPC-157 (2022 óta) és a TB-500 (korábban) is a WADA tiltólistán szerepel (S0 osztály — Non-approved substances). Versenyző sportolók NEM használhatják a GLOW stack-et.",
  "composition": [
    {
      "id": "ghk-cu",
      "role": "Réz-tripeptid — kozmetikus bőr-axis (kollagén III, melanin, sebgyógyulás)",
      "typicalDose": "1-3 mg subQ naponta"
    },
    {
      "id": "bpc-157",
      "role": "Gyomor-pentadekapeptid — szisztémás szöveti gyógyulás (angiogenezis, GI, ín)",
      "typicalDose": "250-500 µg subQ naponta"
    },
    {
      "id": "tb-500",
      "role": "Thymosin β4 fragment — aktin-binding + sejt-migráció (egész-test regeneráció)",
      "typicalDose": "2-2,5 mg subQ 2× hetente"
    }
  ],
  "keyInfo": [
    {
      "label": "Típus",
      "value": "Multi-peptid stack (3 komponens)"
    },
    {
      "label": "Komponensek",
      "value": "GHK-Cu + BPC-157 + TB-500"
    },
    {
      "label": "Cél-axis",
      "value": "Bőr (kozmetikus) + szisztémás szöveti regeneráció"
    },
    {
      "label": "Evidencia-tier",
      "value": "T3 (community-protocol; stack-specifikus RCT nincs)"
    },
    {
      "label": "Ciklus",
      "value": "4-6 hét on / 2-4 hét off"
    },
    {
      "label": "Beadás",
      "value": "Szubkután (SC), forgatott injekciós helyek"
    }
  ],
  "mechanism": "A GLOW stack szinergiája három különböző molekuláris mechanizmuson alapul, amelyek két regenerációs tengelyen találkoznak.\n\n**1) GHK-Cu (felszíni / kozmetikus axis)**: a Gly-His-Lys tripeptid réz-ion komplex epigenetikusan modulál ~4000+ gén-expressziót (Pickart 2018 PMID 29986520), aktiválja a fibroblast-kollagén-III szintézist, modulálja a melanin-eloszlást és katalizálja az antioxidáns SOD/katalaz enzimeket. Lokálisan és szisztémásan is hat a bőrre, hajra, kötőszövetre.\n\n**2) BPC-157 (szisztémás gyógyulás)**: a 15-aminosav pentadekapeptid pleiotróp angiogenezis-induktor a VEGF-VEGFR2 + Akt-eNOS tengelyen (Sikiric review-k), valamint NO-szignáling-modulátor. Gyomor-bél, ín, izom, idegszöveti regenerációs hatása az állat-modellekben dokumentált.\n\n**3) TB-500 (szisztémás aktin-mobilizáció)**: a thymosin β4 N-terminális fragment a globuláris G-aktin-poolt szekvesztrálja, megkönnyíti a sejt-migrációt (mioblaszt, endotél), és az aktin-citoszkeleton remodellálásán keresztül támogatja a szövet-helyreállítást. Funkcionális t½ ~2-3 nap (a tényleges receptor-kötés ennél jóval rövidebb).\n\n**Szinergia-logika**: a GHK-Cu a bőr-kollagén-axison ad gyors, látható (2-4 hét) javulást; a BPC-157 + TB-500 párosa a mély-szöveti / szisztémás regenerációt céloz (4-6 hét). Együtt: két axis = teljesebb regeneratív profil mint bármelyik komponens önmagában.",
  "dosingInfo": "**Standard GLOW protokoll** (community-tier, NEM klinikai Rx):\n\n- **GHK-Cu**: 1-3 mg SC naponta, ugyanabban a napi időszakban (pl. reggel)\n- **BPC-157**: 250-500 µg SC naponta, lehetőleg minden komponenstől eltérő injekciós helyen\n- **TB-500**: 2-2,5 mg SC 2× hetente (pl. hétfő + csütörtök)\n\n**Ciklus**: 4-6 hét folyamatos on, majd 2-4 hét off mielőtt újraindul. A komponensek külön fiolákból, külön rekonstituálva (bact-water) — NEM keverve egy fecskendőben (eltérő stabilitás, pH-szenzitivitás). Forgatott injekciós helyek (has, comb, felkar) az SC-szövet-károsodás minimalizálására.",
  "studies": [
    {
      "tag": "GHK-Cu epigenetika",
      "tagColor": "rgba(167,139,250,0.16)",
      "tagText": "#a78bfa",
      "title": "Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data",
      "authors": "Pickart L, Margolina A.",
      "journal": "Int J Mol Sci",
      "year": "2018",
      "pmid": "29986520",
      "url": "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      "finding": "A GHK-Cu ~4000+ gén-expressziót modulál, kollagén-szintézis + antioxidáns enzim-aktiváció. Egyetlen komponens-tanulmány, NEM stack-szintű."
    },
    {
      "tag": "BPC-157 review",
      "tagColor": "rgba(14,165,233,0.16)",
      "tagText": "#7dd3fc",
      "title": "Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review",
      "authors": "Vasireddi N, Hahamyan H, Salata MJ, et al.",
      "journal": "HSS Journal",
      "year": "2025",
      "pmid": "40756949",
      "url": "https://pubmed.ncbi.nlm.nih.gov/40756949/",
      "finding": "36 állat-tanulmány: VEGF↑, IL-6↓, ín- és izom-gyógyulás gyorsult. Stack-szintű humán-vizsgálat NINCS."
    },
    {
      "tag": "TB-500 angiogenezis",
      "tagColor": "rgba(99,102,241,0.18)",
      "tagText": "#818cf8",
      "title": "Thymosin beta4 induces angiogenesis through Notch signaling in endothelial cells",
      "authors": "Lv S, Cheng G, Zhou Y, Xu G.",
      "journal": "Mol Cell Biochem",
      "year": "2013",
      "pmid": "23749167",
      "url": "https://pubmed.ncbi.nlm.nih.gov/23749167/",
      "finding": "Thymosin β4 (TB-500 forrás-molekula) endothél-sejtekben Notch-jelátvitelen keresztül indukál érképződést. Stack-szintű GLOW-evidencia hiányzik."
    }
  ],
  "legalStatus": "**Sourcing-kontextus**: a három komponens egyike sem szerepel HU vagy EU GMP-Rx törzskönyvön humán-indikációra (kivéve néhány országban a thymosin α1 — NEM β4 fragment). A felhasználók jellemzően RUO (Research Use Only) vendor-csatornákból szerzik be a peptideket, ami **szürke jogi zóna** — országonként eltérő (HU/EU: tipikusan személyes-import kis-mennyiségben tolerált, vendor-side szigorúbb).\n\n**WADA-státusz (KÖTELEZŐ figyelmeztetés)**:\n- **BPC-157**: 2022 óta a WADA tiltólistán szerepel az S0 (Non-approved substances) osztályban — egész évben tiltott (in + out-of-competition)\n- **TB-500 / Thymosin β4**: korábban tiltott (S2 osztály)\n- **GHK-Cu**: NEM szerepel a WADA tiltólistán külön\n\nKonklúzió: **versenyző sportolók NEM használhatják a GLOW stack-et** — a BPC-157 + TB-500 jelenléte a stack egészét versenytiltottá teszi. Doping-kontroll-mintában az immunoassay vagy LC-MS/MS detektálja a peptid-jelenlétet.",
  "onsetTime": "Bőr-visible benefits (GHK-Cu axis): 2-4 hét. Szisztémás regeneratív hatások (BPC-157 + TB-500 axis): 4-6 hét.",
  "halfLife": "Heterogén — BPC-157 ~30 perc plazmás t½ (akut hatás); TB-500 funkcionális t½ ~2-3 nap; GHK-Cu szisztémásan percek, de lokális / topikális hatás napokig perzisztál a kollagén-axison.",
  "interactionsWith": [
    "ghk-cu",
    "bpc-157",
    "tb-500",
    "cjc-1295-ipamorelin"
  ],
  "wadaStatus": null,
  "related": [
    "ghk-cu",
    "bpc-157",
    "tb-500",
    "cjc-1295-ipamorelin"
  ],
  "faq": [
    {
      "q": "Miért stack a GLOW, miért nem egyetlen peptid?",
      "a": "A GLOW logikája az, hogy a bőr- és kötőszöveti regeneráció **több molekuláris tengelyen** zajlik, és egyetlen peptid nem fed le mindent. A **GHK-Cu** a kozmetikus / felszíni bőr-axisra (kollagén III, melanin, antioxidáns enzimek) optimalizált, míg a **BPC-157 + TB-500** a szisztémás / mély-szöveti regenerációt célozza (angiogenezis, sejt-migráció, ín- + izom-gyógyulás). A stack-logika az, hogy a két axis együtt teljesebb regeneratív profilt ad. Fontos: ez community-protocol-rationale (Sean-curated notes + dopamine.club user-feedback), NEM RCT-bizonyított szinergia."
    },
    {
      "q": "Futhatom-e a komponenseket külön-külön?",
      "a": "Igen — minden komponens önállóan is működik a saját regenerációs niche-ében (lásd a GHK-Cu, BPC-157 és TB-500 entry-ket). Önálló alkalmazás ajánlott, ha (1) költség-korlát van, (2) specifikus indikáció (pl. csak ín-sérülés → BPC-157 önmagában; csak kozmetikus bőr-cél → GHK-Cu önmagában), vagy (3) szeretnéd izolálni, hogy melyik komponens ad neked tényleg eredményt. A GLOW stack-rationale akkor a leghasznosabb, ha a két axis (felszíni + szisztémás) együtt érdekel."
    },
    {
      "q": "Milyen WADA-rizikót hordoz a GLOW?",
      "a": "**Magasat.** A három komponensből kettő (BPC-157 + TB-500) a WADA tiltólistáján szerepel (S0 osztály egész évben tiltott). A GHK-Cu nem szerepel külön, de a stack egészét a tiltott komponensek versenytiltottá teszik. **Versenyző sportolóknak (NCAA, IOC, UCI, WADA-aláíró federations) NEM ajánlott a GLOW stack** — a doping-kontroll immunoassay / LC-MS/MS detektálja a peptid-jelenlétet."
    },
    {
      "q": "Milyen bloodwork szükséges?",
      "a": "T3 community-tier szinten **nincs kötelező bloodwork-protokoll** — a stack-specifikus klinikai trial-evidencia hiányzik, így targeted-biomarker nem létezik. **Opcionális baseline** (általános egészség-check long-term használat előtt): CBC, CMP (máj + vese), CRP, lipid panel. Ha 4-6 hetes ciklusnál hosszabb folyamatos használat, érdemes 8-12 hetente CRP + máj-enzim (ALT/AST) ellenőrzést végeztetni az általános biztonság érdekében."
    }
  ],
  "anecdote": null
}
