// Auto-decomposed by scripts/decompose-library.mjs --per-lang at 2026-05-18T08:12:21.941Z
// Edit this file directly to update the HU body; do not re-run the script.

export default {
  "id": "ephedrine",
  "name": "Ephedrine",
  "image": null,
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.18)",
  "shortDesc": "Sympathomimetic alkaloid (Ephedra sinica), klasszikus thermogenic és bronchodilator. WADA-tiltott versenysportban.",
  "description": "Az Ephedrine egy fenetilamin-alkaloid, amelyet eredetileg az Ephedra sinica (Ma Huang) növényből izoláltak. Mind az α-, mind a β-adrenoceptorokra hat, valamint elősegíti a noradrenalin felszabadulását a preszinaptikus terminálokból. Az USA-ban OTC bronchodilator (asztma) és nasal decongestant (Sudafed-előd), Magyarországon vény nélkül kapható készítményekben (allergia / nátha). Az Astrup-csoport 1991-92-es vizsgálatai dokumentálták, hogy az ephedrine + caffeine kombináció akut ~10% és krónikus ~5% bazális metabolizmus-emelést okoz, és placebo-kontrollált vizsgálatokban ~3-5 kg extra zsírvesztést támogat 12-24 hét alatt obéz nőknél.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "α/β-adrenoceptor agonista + NE-felszabadulás"
    },
    {
      "label": "Felezési idő",
      "value": "3-6 óra"
    },
    {
      "label": "Hatáskezdet",
      "value": "15-30 perc"
    },
    {
      "label": "Jogi státusz",
      "value": "USA: OTC korlátozott. HU/EU: vény nélkül OTC készítményekben."
    }
  ],
  "mechanism": "Klasszikus **indirect sympathomimetic** mechanizmus: az ephedrine VMAT-szubsztrátként a citoplazmatikus NE-koncentrációt emeli, és a NE-transporter reverse-mode-on dolgoztatva indirekt sympathetic stimulációt ad (eltérően a Clenbuterol direkt receptor-agonista profiljától). Másodlagosan közvetlen α1- és β1/β2-adrenoceptor agonista is (gyengébb affinitással). β2-aktiválás bronchodilatáció, β3-aktiválás barna zsír thermogenezis, α1 vazokonstrikció és vérnyomás-emelés.",
  "legalStatus": "USA: OTC korlátozással (Combat Methamphetamine Epidemic Act, 2005), online vásárlás regisztráció-köteles. HU: OTC allergia/nátha készítményekben (Solutan, Coldrex Junior). EU: OTC vagy receptre, országonként eltérő. WADA: tiltott versenyen >10 μg/mL vizelet.",
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
  "detectionWindow": "24-48 óra vizelet (WADA in-competition threshold: 10 μg/mL).",
  "benefits": [
    "Akut bazális metabolikus ráta emelés (~10% Astrup 1986)",
    "Krónikus zsírvesztés-emelés ephedrine + caffeine stack-en (3-5 kg / 12-24 hét)",
    "Bronchodilatáció (asztmás hozzáférés OTC készítményekben)",
    "Étvágy-csökkentő hatás (CNS-stimuláns mellékhatás)"
  ],
  "quickStart": [
    "Edukatív kontextus: WADA versenysportban tiltott",
    "ECA-stack klasszikus: 20-25 mg ephedrine + 200 mg caffeine + 81-325 mg aspirin, 3x/nap",
    "Maximum 6-8 hét folyamatos használat tachyphylaxis (toleráncia) miatt",
    "Délután 4 óra után NE szedd (insomniát okoz)"
  ],
  "expectations": [
    {
      "label": "Első bevétel",
      "body": "Akut hatás 30-60 perc múlva: szívverés-emelés (+10-20 bpm), enyhe remegés, mentális stimuláció, étvágy-csökkenés."
    },
    {
      "label": "1-2. hét",
      "body": "Toleráncia kialakulása (akut hatás csökken), de a krónikus thermogenikus hatás megmarad. Zsírvesztés tempó +0.2-0.4 kg/hét placebo felett."
    },
    {
      "label": "6. hét vége",
      "body": "Ciklus-megszakítás javasolt 2 hét OFF a receptor-resensitizációhoz. Vérnyomás napló kötelező, ha 140/90 felett tartós: leállítás."
    }
  ],
  "quality": {
    "pure": [
      "Tiszta tabletta vagy oldat OTC készítményből (Bronkaid, Primatene Tablets US-ben; HU-ban Solutan vagy ephedrine HCl-tabletta)",
      "Független HPLC-tesztelt forrás Ma Huang kivonatból (változó hatóanyagtartalom)"
    ],
    "caution": [
      "Kardio-monitoring szükséges: vérnyomás napló otthon (cél: <140/90), nyugalmi pulzus <100",
      "EKG referencia 6 hetes ciklus után ajánlott (különösen ECA-stack-en)",
      "Insomnia, anxietás, irritáció, tachykardia",
      "Toleráncia gyorsan kialakul (1-2 hét), pause ciklusok kötelezőek",
      "Stroke + MI asszociáció (Haller 2000 NEJM PMID 11122465): az FDA-ephedra-adverse-event-database 140 eset-elemzése szerint 47% kardiovaszkuláris (MI, stroke, hirtelen halál), 18% CNS (görcs, pszichózis). Aspirin az ECA-stack-ben részben mitigálja a thromboticus rizikót."
    ],
    "avoid": [
      "Magas vérnyomás (>140/90 baseline) abszolút kontraindikáció",
      "MAOI, SSRI, TCA antidepresszánssal kontraindikált (szerotonin-szindróma kockázat)",
      "Hyperthyreosis, glaukóma, prostata-megnagyobbodás kontraindikáció",
      "Koszorúér-betegség, korábbi MI, súlyos aritmia abszolút kontraindikáció",
      "Epilepszia, görcsroham-anamnézis (CNS-stimuláció görcsküszöböt csökkenti)",
      "Súlyos szorongás, pánikbetegség (sympathomimetic mellékhatások súlyosbodnak)",
      "Terhesség és szoptatás"
    ]
  },
  "interactions": [
    "Caffeine: szinergisztikus thermogenezis (ECA-stack alapja), de kardio-stressz fokozódik",
    "Aspirin (81-325 mg): csökkenti a thromboticus kockázatot az ECA-stack-en",
    "MAO-gátló: szerotonin-szindróma (kontraindikált)",
    "Yohimbine: kombinált sympathomimetic stressz, ritkán súlyos hypertenzió"
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
      "q": "Miért tiltja a WADA?",
      "a": "A WADA versenyen-belül tiltja, ha a vizelet-koncentráció >10 μg/mL (CNS-stimuláns kategória). Versenyen kívül edzésben nem tiltott, de a versenyhetén az alkalmazás kockázatos a hosszú detekciós ablak miatt."
    },
    {
      "q": "Lehet-e GHB-vel kombinálni?",
      "a": "NEM. Ephedrine + bármilyen szedatív szer (GHB, benzodiazepin, alkohol nagy mennyiségben) ellentmondásos: a sympathomimetic + szedatív kombináció kardiotoxikus. Plusz a GHB illegális."
    },
    {
      "q": "Mennyi idő alatt alakul ki tolerancia?",
      "a": "Az akut stimuláns hatás 1-2 hét alatt csökken (receptor down-regulation). A thermogenikus hatás tovább megmarad (~5% BMR krónikusan), de ciklus-pauseolás 2-4 hetente ajánlott."
    },
    {
      "q": "Szükséges-e bloodwork ehhez?",
      "a": "Strukturált bloodwork-protokoll nem szükséges, mint AAS-eknél. De vérnyomás napló otthon (cél: <140/90), nyugalmi pulzus <100, és 6 hetes ciklus után 1 EKG ajánlott. Pajzsmirigy-funkció (TSH, fT3, fT4) ellenőrzés ECA-stack előtt."
    },
    {
      "q": "Miért tiltotta meg az FDA az ephedra-supplementeket 2004-ben?",
      "a": "A Haller & Benowitz 2000 NEJM (PMID 11122465) tanulmány az FDA-bejelentett 140 ephedra-adverse-event-eset elemzése **47% kardiovaszkuláris esemény** (MI, stroke, hirtelen halál) és **18% CNS-esemény** (görcs, pszichózis) gyakoriságot mutatott. Ehhez társult Shekelle 2003 JAMA meta-elemzés (PMID 12672771), ami a kockázat-haszon arányt kedvezőtlennek minősítette. A 2004-es FDA-ephedra-supplement-ban OTC-piacra vonatkozik; gyógyszertári Bronkaid/Primatene tabletta mint asztma-Rx továbbra is elérhető szigorú vásárlási limittel (Combat Methamphetamine Epidemic Act 2005). EU-ban ephedrine HCl OTC nátha/allergia készítményekben elérhető (Solutan, Coldrex Junior)."
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
    "note": "ECA-stack klasszikus: 25 mg ephedrine + 200 mg caffeine + 81-325 mg aspirin, napi 2-3x. Délután 4 óra után NE szedd (insomnia). Maximum 6-8 hét folyamatos használat. Vérnyomás napló otthon kötelező."
  }
}
