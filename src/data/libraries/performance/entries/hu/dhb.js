// Designer AAS — limited peer-reviewed evidence. Sources: Pope-Kanayama 2014
// PMID 24423981, Hartgens-Kuipers 2004 PMID 15233599, USADA designer steroid
// alerts 2018-2024, PubChem 1-Testosterone Cypionate (CID 16219612),
// Llewellyn 2017 "Anabolics" (UGL reference). Phenomenological + extrapolated
// from related compounds (Boldenone, Methenolone).

export default {
  "id": "dhb",
  "name": "DHB (Dihydroboldenone)",
  "image": "/performance/oil-vial-orange.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "1-Testosterone (Δ1-DHT) Cypionát, designer-AAS injektábilis. Boldenone 5α-redukált analógja. Sosem volt licencelt Rx, kizárólag UGL piacon. NEM aromatizál, NEM 17α-alkilált, alacsony hepatotoxicitás — DE notórius PIP (injection site pain) miatt.",
  "description": "A DHB (Dihydroboldenone, vagy 1-Testosterone) egy designer anabolikus szteroid: a Boldenone (Equipoise) 5α-redukált analógja, kémiailag 1-testosterone (17β-hidroxi-androst-1-en-3-on). Kizárólag UGL underground market formátumban elérhető, jellemzően cypionate-észteresített olajos IM-szuszpenzióban (DHB-Cyp 100 mg/ml). Sosem volt licencelt humán vagy állatorvosi Rx — semmilyen FDA/EMA-jóváhagyás. Anabolikus:androgén arány ~200:100 (magas anabolikus, magas androgén). NEM 17α-alkilált → alacsony hepatotoxicitás. NEM CYP19 szubsztrát → NEM aromatizál (a Boldenone aromatizál, a DHB már 5α-redukált, így nem). Notórius az extrém erős injection site pain (PIP) miatt — a magas kristályosság a klasszikus oka, gyakran 3-5 napos lokális duzzanat és fájdalom. Limited peer-reviewed evidence: a klinikai farmakológiai adatok többsége extrapolált a Boldenone és Methenolone osztály-adataiból (Pope-Kanayama 2014 designer-AAS review). WADA tiltott egész évben.",
  "keyInfo": [
    {"label": "Hatásmechanizmus", "value": "AR-agonista, 1-Testosterone (Δ1-DHT), NEM aromatizál"},
    {"label": "Anabolikus:Androgén", "value": "200:100"},
    {"label": "Felezési idő", "value": "8-10 nap (Cypionate ester)"},
    {"label": "Hatáskezdet", "value": "48-72 óra (IM)"},
    {"label": "Jogi státusz", "value": "UGL only, semmilyen Rx-jóváhagyás. WADA tiltott."}
  ],
  "mechanism": "1-Testosterone (Δ1-DHT) AR-agonista. A Δ1-kettős kötés a Boldenone-tól örökölte, az 5α-redukció pedig DHT-jellegű karaktert ad. Magas AR-affinitás (~200% testosterone-hoz képest in vitro). NEM CYP19 szubsztrát (a Boldenone aromatizál, a DHB már 5α-redukált) → NEM aromatizál ösztrogénné, nincs gynecomastia-kockázat. NEM 17α-alkilált → minimális hepatikus stressz. A 17β-OH-cypionát észter slow hidrolízist ad (~8-10 nap), depot-stable plasma szintet biztosít.",
  "legalStatus": "Sosem volt licencelt humán vagy állatorvosi Rx — kizárólag UGL underground market. USA: USADA designer steroid alert (Schedule III by analogue). EU/HU/PL: kontrollált AAS analóg, vény nélkül illegális, WADA tiltott egész évben (S1.1.a).",
  "onsetTime": "48-72 h (IM, Cypionate ester)",
  "halfLife": "8-10 d (Cypionate ester)",
  "halfLifeActive": "~24-36 h (depot-driven, szabad 1-testosterone hidrolízis után)",
  "interactionsWith": ["testosterone", "anastrozole", "finasteride", "warfarin"],
  "aromatization": "Nem — 5α-redukált struktúra, NEM CYP19 szubsztrát; a parent Boldenone aromatizál, a DHB már redukált → klinikailag E2-emelkedés nem várható (Pope-Kanayama 2014 PMID 24423981 designer-AAS review, extrapolált Boldenone-Methenolone adatok)",
  "hepatotoxicity": "Alacsony — parent szteroid, NEM 17α-alkilált; injektált forma bypass-olja a first-pass-t. Hepatikus profil hasonló a Masteron-Primobolan osztályhoz (extrapolált, peer-reviewed DHB-specifikus adat hiányzik; Hartgens-Kuipers 2004 PMID 15233599 c17-non-AA injektábilis AAS osztály-adat).",
  "wadaStatus": "banned",
  "androgenicRatio": "200:100",
  "bindingAffinity": "Magas AR-affinitás (~200% testosterone-hoz képest in vitro, extrapolált). SHBG-affinitás közepes-magas (DHT-strukturális karakter).",
  "detectionWindow": "DHB-metabolitok (1-androstén-3,17-dion + 1-testosterone metabolitcsalád) vizeletből 6-9 hónap (Cypionate ester miatt extra hosszú detection, USADA designer-steroid-alert adatok). WADA-akkreditált LC-MS/MS.",
  "benefits": [
    "Magas AR-affinitású direkt anabolikus hatás (lean mass gyarapodás)",
    "NEM aromatizál → nincs E2-mellékhatás (gynecomastia, vízretenció minimális)",
    "Alacsony hepatotoxicitás (NEM 17α-alkilált, IM forma)",
    "Esztétikai \"kemény\" megjelenés (Masteron-szerű hardening, kissé nedvesebb mint a Masteron a magasabb androgén-aktivitás miatt)"
  ],
  "quickStart": [
    "ELŐKÉSZÜLETT: a DHB extrém erős PIP (injection site pain) miatt notórius — 3-5 napos lokális duzzanat és fájdalom gyakori; helyezz HEAT-PAD-et a glute-ra injekció után",
    "Csak tapasztalt felhasználóknak — NEM első ciklus",
    "Tipikusan stack-elve testosterone-base-szel + harmadik AAS-szel (Test-Cyp + DHB-Cyp + Tren-E gyakori példa)",
    "DHT-strukturális analóg → SZIGORÚ hajhullás-kockázat genetikai prediszpozíció esetén",
    "PCT (Clomid + Nolvadex 4-6 hét) kötelező; utolsó DHB-injekció +14-21 nap után"
  ],
  "expectations": [
    {"label": "Első hét", "body": "Akut hatás minimális. Az első injekció gyakran erős PIP-pel jár, 3-5 napos lokális fájdalom. Esztétikai változás még nem érzékelhető."},
    {"label": "3-4. hét", "body": "Steady-state Cypionate. Subjektíven \"keményebb\" izom-tónus, vaszkuláris venosity. Lean mass-gyarapodás 1-2 kg, SHBG csökken."},
    {"label": "10-12. hét vége", "body": "Maximum esztétikai effekt. Lipid panel HDL ~20-30% csökkenés várható. Hajhullás-érzékenyek scalp-DHT esetén accelerált miniaturizáció."}
  ],
  "quality": {
    "pure": [
      "Tiszta sárgás-barnás vagy borostyán-szín olaj, 10ml fiola, sterilen szűrt (DHB-Cyp 100 mg/ml klasszikus UGL koncentráció)",
      "UGL HPLC-tesztelt forrás KÖTELEZŐ — DHB gyakran hamisított (Test-Cyp vagy Boldenone-Cyp helyettesítés)"
    ],
    "caution": [
      "PIP (injection site pain) extrém — a leggyakoribb felhasználói panasz, sokan 3-5 nap után nem tudják edzeni a target izmot",
      "Hajhullás-acceleráció androgenetikus alopecia esetén (DHT-strukturális analóg, magas androgén-aktivitással)",
      "Lipid-zavar: HDL csökkenés, LDL emelkedés (mérsékelt-magas, magas androgén-aktivitás miatt kumulatívabb mint a Masteron-Primobolan)",
      "Limited peer-reviewed evidence — long-term safety profil NEM ismert klinikai vizsgálatokból"
    ],
    "avoid": [
      "Bárki, aki nem tud erős PIP-pel megbirkózni (alternatíva: Masteron-Enan vagy Primobolan-Enan kevesebb PIP-pel)",
      "Androgenetikus alopecia családi anamnézis",
      "Prosztata-hipertrófia, prosztatakarcinóma (magas androgén-aktivitás)",
      "Női felhasználás (virilizáció kockázata extrém)",
      "Kardiovaszkuláris kockázat (családi anamnézis, magas LDL)",
      "Bármilyen \"első ciklus\" — DHB mindig stack-társ, sosem standalone első AAS"
    ]
  },
  "interactions": [
    "Testosterone-Cyp stack: ester-half-life matching, heti 1-2x injekció (ugyanazon ester)",
    "Trenbolone-E stack: \"hardcore cutting\" 10-12 hét, mindhárom NEM aromatizál",
    "Anastrozole (AI): NEM szükséges DHB-only ciklusnál (nem aromatizál); Test-stack mellett a stack-társ alapján",
    "Finasteride: NEM gátolja a DHB-hatást (DHB már 5α-redukált)",
    "Warfarin: antikoaguláns hatás fokozódhat, INR monitor"
  ],
  "studies": [
    {"title": "Adverse health consequences of performance-enhancing drugs: an Endocrine Society scientific statement", "authors": "Pope HG Jr, Wood RI, Rogol A, Nyberg F, Bowers L, Bhasin S.", "journal": "Endocr Rev. 2014;35(3):341-75.", "pmid": "24423981"},
    {"title": "Effects of androgenic-anabolic steroids in athletes", "authors": "Hartgens F, Kuipers H.", "journal": "Sports Med. 2004;34(8):513-554.", "pmid": "15233599"},
    {"title": "Metabolism of anabolic androgenic steroids", "authors": "Schänzer W.", "journal": "Clin Chem. 1996;42(7):1001-20.", "pmid": "8616181"},
    {"title": "Anabolic-androgenic steroid dependence: an emerging disorder", "authors": "Kanayama G, Brower KJ, Wood RI, Hudson JI, Pope HG Jr.", "journal": "Addiction. 2009;104(12):1966-78.", "pmid": "19922565"},
    {"title": "Designer steroids: over-the-counter supplements and their androgenic component", "authors": "Kazlauskas R.", "journal": "Mol Cell Endocrinol. 2010;316(1):2-7.", "pmid": "19772889"},
    {"title": "PubChem 1-Testosterone Cypionate CID 16219612 monograph", "authors": "NIH PubChem", "journal": "PubChem Open Chemistry Database", "pmid": null}
  ],
  "faq": [
    {"q": "Miért fáj annyira a DHB-injekció?",  "a": "A DHB magas kristályossága + relatíve alacsony oldhatósága ad jelentős PIP-et (injection site pain). A kristályok az izomszövetben aszeptikus gyulladást indítanak, ami 3-5 napos lokális duzzanat és fájdalom formájában jelentkezik. Megoldás: nagyobb térfogat (1 ml helyett 2 ml — több vehikulum hígítja a koncentrációt), gluteus medius vagy ventrogluteal injekció (nagyobb izom több space-szel), HEAT-PAD post-injekció + napi enyhe mozgás."},
    {"q": "DHB vs Boldenone (Equipoise) — mi a különbség?", "a": "A Boldenone aromatizál (kb. fél olyan erősen mint a testosterone, így E2-emelkedés várható), a DHB már 5α-redukált, így NEM aromatizál. A Boldenone Δ1-double-bond + nem-redukált forma; a DHB ugyanaz a Δ1-double-bond + 5α-redukált. Klinikailag a DHB \"keményebb és szárazabb\" effektet ad mint a Boldenone, viszont jóval nagyobb PIP-pel jár."},
    {"q": "Miért nincs Rx-jóváhagyás?", "a": "A DHB-t sosem fejlesztették humán vagy állatorvosi indikációra. Klasszikusan designer-AAS — a 1990-2000-es évek bodybuilding/UGL-piaca \"új AAS-t\" keresett az aromatizáló Boldenone alternatívájaként. Mivel sosem volt klinikai vizsgálat, a long-term safety adat hiányzik; minden farmakológiai adat extrapolált a Boldenone és Methenolone osztály-adataiból."},
    {"q": "Hajhullás-kockázat?", "a": "Magas, ha androgenetikus alopecia genetikai prediszpozíció van. A DHB magasabb androgén-aktivitással (100 vs Masteron 25, Primobolan 44) közvetlenül aktiválja a scalp hajtüsző AR-jét. Finasteride NEM véd (a DHB már redukált). Egyetlen védelem: ha genetikailag érzékeny vagy, NE használj DHT-derivátum AAS-t (és különösen NE DHB-t, ami a Masteron-Primobolan osztálynál is androgénebb)."},
    {"q": "Hosszú detection window — mennyi a vége tényleges fade-out?", "a": "DHB-Cyp 6-9 hónapos vizelet detection (USADA designer-steroid-alert) — a Cypionate hosszú észter + Δ1-1-testosterone metabolit-család miatt extra hosszú. WADA-tesztelt sportoló esetén: off-season alatt kerülendő, és minimum 9 hónap fade-out a tervezett verseny előtt. Boldenone-szerűen \"hosszú lemaradásra\" épülő tisztulás."}
  ],
  "related": ["masteron", "primobolan", "testosterone-info", "trenbolone-info", "anavar-info"],
  "doseCalc": {
    "type": "fixed",
    "fixed": {"low": 200, "medium": 400, "high": 600},
    "unit": "mg/hét (IM, 1-2x osztva)",
    "note": "Minimum 10-12 hét ciklus a Cypionate ester miatt. 200-600 mg/hét, heti 1-2x injekció (PIP miatt nagyobb térfogat preferált). TUDCA NEM kötelező (alacsony hepatotoxicitás). Lipid monitor + vérnyomás napló kötelező. PCT 4-6 hét (Clomid + Nolvadex) utolsó injekció +14-21 nap után."
  },
  "bloodwork": {
    "preCycle": {
      "label": "Ciklus előtt",
      "timing": "2-4 héttel ciklus indítás előtt",
      "markers": "Hormon-panel: Total T, Free T, E2, LH, FSH, SHBG, Prolaktin. Lipid panel (LDL/HDL/TG). Hepatikus: ALT/AST/GGT. CBC + hematokrit. PSA (30 év felett).",
      "purpose": "Lipid baseline kritikus (DHB magasabb androgén-aktivitása miatt HDL-csökkenés várható kumulatívabb mint a Masteron-Primo). Bármilyen LDL >130 mg/dL vagy HDL <40 mg/dL relatív kontraindikáció."
    },
    "midCycle": {
      "label": "Ciklus közben",
      "timing": "4-6. hetén, ciklus felénél",
      "markers": "Lipid panel (HDL drasztikusan csökkenhet), E2 (ha Test-stack), SHBG, vérnyomás napló, hepatikus panel.",
      "purpose": "HDL <30 mg/dL kardiovaszkuláris riasztó. ALT/AST <2x normál DHB-only ciklusnál várható (IM-bypass). Vérnyomás >150/95 dose-csökkentés vagy leállítás."
    },
    "postCycle": {
      "label": "PCT (Post-Cycle Therapy)",
      "timing": "Utolsó DHB-Cyp injekció +14-21 nap PCT-indítás (Cypionate slow clearance). PCT 4. hetén és 8-12. hetén recovery-check.",
      "markers": "Total T, Free T, LH, FSH, E2, SHBG (recovery), lipid panel (HDL recovery), hepatikus panel.",
      "purpose": "HPTA-helyreállítás verifikálása. Ha T nem tér vissza baseline-ra 12 hét után, endokrinológus konzultáció. SHBG-recovery típusosan 4-6 héten belül."
    },
    "cruise": {
      "label": "Cruise alatt (DHB-cruise NEM standard)",
      "timing": "DHB-cruise atipikus a hosszú detection + PIP miatt; ha cruise-on tartja, 6-8 hetente monitoring",
      "markers": "Lipid panel (HDL), SHBG, Total T, E2, vérnyomás napló, PSA.",
      "purpose": "Tartós DHB-expozíció lipid-zavart és prosztata-AR-aktivációt halmoz. TRT-Test cruise mellett a DHB tipikusan kihagyott — esztétikai hatása csak contest-prep alatt értékes, a PIP a heti-rendszeres injekciót terhelővé teszi."
    }
  }
}
