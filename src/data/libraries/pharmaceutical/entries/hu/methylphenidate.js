// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.576Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "methylphenidate",
  "name": "Methylphenidate",
  "image": "/pharmaceutical/blister-white-round.png",
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "DAT/NET-inhibitor stimuláns, ADHD első-vonal Rx (Novartis Ritalin, Janssen Concerta). DEA Schedule II, visszaélés-potenciál szignifikáns.",
  "description": "A Methylphenidate egy pszichostimuláns, amelyet 1944-ben szintetizáltak, 1954 óta engedélyezett gyermek-hyperaktivitásra, 1990-es évek óta az ADHD első-vonal kezelése. A DAT és NET reuptake gátlásával növeli a synaptikus dopamint és norepinefrint a prefrontalis kortexben, ami az exekutív funkció (figyelem, impulzus-kontroll, munkamemória) javulásához vezet ADHD-betegen. DEA Schedule II (USA), aminek megfelelően Rx-szigorítás. IR (Ritalin, 3-5 h) és ER/OROS (Concerta 10-12 h) formák. Az MTA-trial (1999 JAMA, 14 hónapos follow-up) szerint a stimuláns-terápia + viselkedés-terápia kombináció szuperior. Visszaélés-potenciál: szétmorzsolt-belélegezve vagy IV-be adva amfetamin-szerű euforikus hatás, ezért XR-formák preferáltak.",
  "mechanism": "DAT (dopamine transzporter) és NET (norepinefrin transzporter) reuptake gátlása. Eltér az amfetamintól: a Methylphenidate \"csak\" gátol, nem fordítja meg a transzportert (amfetamin VMAT2-szintű DA-felszabadulást is okoz, ami az erősebb euforikus hatás).",
  "legalStatus": "EU/HU: vényköteles, kábítószer-rendelet alá tartozó (Ritalin, Concerta, Medikinet). USA: DEA Schedule II.",
  "bioavailability": "22 ± 8% (d-methylphenidate), 5 ± 3% (l-methylphenidate) — orális, gyerekek; magas first-pass — FDA Ritalin label",
  "onsetTime": "IR: 30-45 min; ER/OROS: 1-2 h; effect lasts 3-5 h (IR), 10-12 h (Concerta OROS)",
  "halfLife": "IR: 3-5 h; ER/OROS: 6-8 h (effective duration 10-12 h via osmotic delivery)",
  "atcCode": "N06BA04",
  "prescriptionStatus": "Vényköteles (Rx), DEA Schedule II (USA), HU-ban kábítószer-receptre",
  "indications": [
    "ADHD (gyermek 6+ év, serdülő, felnőtt)",
    "Narkolepszia (második vonal a Modafinil mögött)"
  ],
  "contraindications": [
    "MAOi 14 napon belül (hipertenzív krízis)",
    "Súlyos kardiovaszkuláris betegség (LV-hipertrófia, súlyos hipertenzió, koszorúér-elégtelenség)",
    "Hyperthyreosis, glaukóma (szűk zugú)",
    "Aktív szubsztanciafüggőség, pszichotikus tünet anamnézis (relatív)"
  ],
  "commonSideEffects": [
    "Étvágycsökkenés (~30%), súlyveszteség, gyermek-növekedés enyhe lassulása",
    "Inszomnia (késő-napi adagolás kerülendő), szorongás-fokozódás, ingerlékenység",
    "Tachycardia, vérnyomás-emelkedés (mérsékelt)",
    "Súlyos, ritka: pszichotikus reakció (új-tünet), kardiális esemény (preexisztens szívbetegségben), Raynaud-szindróma (krónikus), priapizmus"
  ],
  "cyp450": [
    "Minimal CYP metabolism (de-esterification by CES1A1)",
    "No major CYP interactions"
  ],
  "crossMolInteractions": [
    "MAOi: ABSZOLÚT kontraindikált",
    "Béta-blokkoló: extrém hipertenzív reakció, kombináció kerülendő",
    "Antihipertenzív szerek hatása csökkenhet",
    "Alkohol: kardiovaszkuláris kockázat fokozása, kerülendő"
  ],
  "benefits": [
    "ADHD-tünetek (figyelem, impulzus-kontroll, munkamemória) szignifikáns javulása",
    "OROS-formuláció (Concerta) 12 órás hatás, gyermek-iskolanapra ideális",
    "MTA-trial: viselkedés-terápiával kombinálva szuperior"
  ],
  "studies": [
    {
      "title": "A 14-month randomized clinical trial of treatment strategies for ADHD (MTA Cooperative Group)",
      "authors": "MTA Cooperative Group.",
      "journal": "Arch Gen Psychiatry. 1999;56(12):1073-86.",
      "pmid": "10591283"
    },
    {
      "title": "Methylphenidate for attention deficit hyperactivity disorder (ADHD) in children and adolescents",
      "authors": "Storebø OJ, Pedersen N, Ramstad E et al.",
      "journal": "Cochrane Database Syst Rev. 2018;5:CD012069.",
      "pmid": "29744873"
    },
    {
      "title": "Long-term safety of methylphenidate in children with ADHD",
      "authors": "Vitiello B, Severe JB, Greenhill LL et al.",
      "journal": "J Am Acad Child Adolesc Psychiatry. 2008;47(8):860-9.",
      "pmid": "18596553"
    }
  ],
  "related": [
    "modafinil",
    "bupropion"
  ],
  "doseCalc": {
    "type": "titration",
    "titration": [
      {
        "phase": "Hét 1 (start, IR)",
        "dose": "5"
      },
      {
        "phase": "Hét 2 (IR 2-3x/nap)",
        "dose": "10"
      },
      {
        "phase": "Concerta XR (felnőtt cél)",
        "dose": "36"
      },
      {
        "phase": "Max-dózis (felnőtt)",
        "dose": "72"
      }
    ],
    "unit": "mg/nap",
    "note": "IR: 5-10 mg 2-3x/nap reggel-délben (NE adja 16 óra után, inszomnia-kockázat). Concerta OROS: napi egyszer reggel, 18-72 mg, max 72 mg/nap felnőttnél. Visszaélés-potenciál miatt szigorú Rx-monitoring. Gyermek-növekedés és vérnyomás évente."
  },
  "anecdote": "Anekdotikus beszámolók szerint a Metilfenidát egy tiszta, jól titrálható DAT/NET-gátló ADHD-ra, erős dopaminerg ébrenléti hatással, amely az elsővonalbeli stimulánsokhoz hasonlítható. Közösségi beszámolók szerint szubjektíven simább, fókuszáltabb profilú, mint sok off-label alternatíva, agresszív mentális nyomás nélkül. A perifériás stimuláns hatásokra érzékeny felhasználók gyakran jobb napközbeni stabilitást tapasztalnak nyújtott hatóanyag-leadású formulákon (Concerta, Ritalin LA). Az Rx-kontextus hangsúlyozza a Schedule II besorolást, a visszaélési potenciált, és a klinikus által felügyelt titrálás szükségességét. Az alvásarchitektúrára gyakorolt hatás enyhébbnek tűnik az amfetamin-osztályú stimulánsokénál, de a késő délutáni adagolás még mindig zavarhatja az elalvást."
}
