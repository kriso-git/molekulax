// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:46.574Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "aripiprazole",
  "name": "Aripiprazole",
  "image": null,
  "accentColor": "#a78bfa",
  "tagColor": "rgba(167,139,250,0.18)",
  "shortDesc": "Atipikus antipszichotikum, parciális D2/5-HT1A agonista (Otsuka/BMS Abilify). Skizofrénia + bipoláris + MDD-augmentáció + Tourette + autism-irritabilitás indikációkkal.",
  "description": "Az Aripiprazole egy \"harmadik generációs\" atipikus antipszichotikum (Otsuka/Bristol-Myers Squibb Abilify, FDA 2002). Mechanizmus: D2-DOPAMIN parciális agonista (kb. 30%-os intrinsic aktivitással) + 5-HT1A parciális agonista + 5-HT2A antagonista. Ez egyedülálló farmakológiai profil: dopamin-túl-aktivációs területeken (pl. mezolimbikus, pozitív tünet) gátol, dopamin-hipoaktív területeken (pl. mezokortikális, negatív tünet, anhedonia) parciálisan stimulál. Klinikai eredmény: alacsonyabb metabolikus mellékhatás (vs Olanzapine), kevésbé szedáló, és kevesebb prolaktin-emelkedés. FDA-warning impulzuskontroll-zavarokra (kompulzív szerencsejáték, hypersexualitás) — ritka, de figyelmeztető a parciális D2-agonizmus miatt.",
  "mechanism": "D2-DA parciális agonista (~30% intrinsic) + 5-HT1A parciális agonista + 5-HT2A antagonista. Funkcionális dopamin-stabilizátor: hiperaktív területen gátol, hipoaktív területen stimulál.",
  "legalStatus": "EU/HU: vényköteles (Abilify, generikus). USA: FDA Rx.",
  "bioavailability": "87% (orális tabletta — FDA Abilify label, Section 12.3)",
  "onsetTime": "1-2 weeks (acute), 4-6 weeks (full response)",
  "halfLife": "~75 h (active metabolite dehydroaripiprazole 94 h)",
  "atcCode": "N05AX12",
  "prescriptionStatus": "Vényköteles (Rx)",
  "indications": [
    "Skizofrénia (felnőtt + 13+ év serdülő)",
    "Bipoláris I zavar, akut mánia + fenntartás (felnőtt + 10+ év)",
    "MDD-augmentáció (off-label gyakori, FDA-ra Abilify-ként)",
    "Tourette-szindróma, autizmus-asszociált irritabilitás (6+ év)"
  ],
  "contraindications": [
    "Ismert Aripiprazole-túlérzékenység, súlyos kardiovaszkuláris betegség",
    "Idős demens betegekben pszichózis-kezelésre (mortalitás-emelkedés, FDA boxed warning)"
  ],
  "commonSideEffects": [
    "Akathisia (motoros nyughatatlanság, 25%, gyakran dóziseffekt)",
    "Hányinger, fejfájás, álmatlanság vagy szedáció",
    "Súlyos, ritka: impulzuskontroll-zavar (szerencsejáték, hypersexualitás — FDA warning 2016), neuroleptikus malignus szindróma, tardív diszkinézis (krónikus)",
    "Metabolikus profil JOBB mint az Olanzapine/Quetiapine-é, de NEM teljesen neutrális (modeszt súlygyarapodás, glükóz-toleráns)"
  ],
  "cyp450": [
    "CYP3A4 substrate (primary)",
    "CYP2D6 substrate (significant in poor metabolizers)",
    "Mild CYP inhibitor"
  ],
  "crossMolInteractions": [
    "Erős CYP3A4-inhibitor (Ketoconazole, Clarithromycin): dóziscsökkentés 50%-kal",
    "CYP3A4 induktor (Carbamazepine, Rifampicin): dóziseszkaláció szükséges",
    "Erős CYP2D6-inhibitor (Fluoxetine, Paroxetine): dóziscsökkentés"
  ],
  "benefits": [
    "Alacsonyabb metabolikus mellékhatás (vs Olanzapine, Quetiapine)",
    "Kevesebb szedáció (megengedi nappali aktivitást)",
    "Kevés prolaktin-emelkedés (vs Risperidon)",
    "MDD-augmentációban FDA-jóváhagyott (treatment-resistant MDD)"
  ],
  "studies": [
    {
      "title": "Aripiprazole in patients with schizophrenia: a multicenter, randomized trial",
      "authors": "Kane JM, Carson WH, Saha AR et al.",
      "journal": "J Clin Psychiatry. 2002;63(9):763-71.",
      "pmid": "12363115"
    },
    {
      "title": "Aripiprazole augmentation for treatment-resistant depression",
      "authors": "Berman RM, Marcus RN, Swanink R et al.",
      "journal": "J Clin Psychiatry. 2007;68(6):843-53.",
      "pmid": "17592907"
    },
    {
      "title": "Impulse-control disorders associated with dopamine partial agonists",
      "authors": "Moore TJ, Glenmullen J, Mattison DR.",
      "journal": "JAMA Intern Med. 2014;174(12):1930-3.",
      "pmid": "25347404"
    }
  ],
  "related": [
    "lamotrigine",
    "sertralin"
  ],
  "doseCalc": {
    "type": "fixedDose",
    "fixedDose": {
      "low": 5,
      "medium": 15,
      "high": 30
    },
    "unit": "mg/nap",
    "note": "Alacsony (5 mg): MDD-augmentáció kezdés, idős vagy szenzitív páciens. Mérsékelt (10-15 mg): skizofrénia/bipoláris-mánia standard. Magas (20-30 mg): rezisztens akut mánia, max-dózis 30 mg/nap. Étkezéstől függetlenül."
  }
}
