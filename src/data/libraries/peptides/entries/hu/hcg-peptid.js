// HCG (Pregnyl / Ovidrel / Choragon) – Humán Chorionic Gonadotropin,
// fertilitás-klinikai (Rx) framing. Cross-frame entry: a `hcg-perf`
// counterpart-entry AAS-PCT framingben dolgozza fel ugyanezt a molekulát.
// Sources: FDA Pregnyl SmPC (Organon 1973), EMA Ovitrelle SPC, Crosnoe 2013
// (Transl Androl Urol – no PMID), Hill 2018 (Int J Impot Res – no PMID),
// Coviello 2005 PMID 15713727.

export default {
  "id": "hcg-peptid",
  "name": "HCG (fertilitás)",
  "image": "/peptides/hcg-peptid.png",
  "accentColor": "#fbbf24",
  "tagColor": "rgba(251,191,36,0.16)",
  "shortDesc": "Humán Chorionic Gonadotropin – LH-receptor agonist glycoprotein. Fertilitás-indukció (male hypogonadism + IVF), spermatogenezis-restauráció, HPTA-recovery klinikai Rx-keretben.",
  "description": "A HCG (Humán Chorionic Gonadotropin) egy 244-aminosav heterodimer-glikoprotein (α + β alegység), strukturálisan az LH analóg ~80% szekvencia-identitással a β-alegységen. Endogén forrás: terhességi placentális szincíciotrophoblast. Fertilitás-klinikai kontextusban a HCG exogén LH-pótlás: Leydig-sejt LHCGR-receptor agonisként aktiválja a tesztoszteron-szintézist és kritikus szerepet játszik az intratestikuláris testosterone (ITT) fenntartásában – az ITT-szint a szérum-testosterone 50-100-szorosa, és ez a Sertoli-sejt-támogatott spermatogenezis abszolút feltétele. Klinikai HCG-források: (1) urinary-extracted (uHCG) – terhes nők vizeletéből tisztítva (Pregnyl Organon 1973, Novarel Ferring, Choragon Ferring EU); (2) rekombináns (rHCG / choriogonadotropin alfa) – CHO-sejt-expresszált, magasabb tisztaság, alacsonyabb immunogenitás (Ovidrel Serono/Merck USA, Ovitrelle EMA). Klinikai indikációk: (a) férfi hypogonadotropikus hypogonadism (HH, Kallmann-szindróma, hypofízis-elégtelenség) – tesztoszteron-helyreállítás Leydig-cellular pályán; (b) spermatogenezis-indukció HH-betegekben (HCG-monoterápia gyakran nem elég, HMG vagy rFSH co-administration szükséges a komplett spermatogenezis-induláshoz); (c) HPTA-recovery klinikai protokoll endogén tesztoszteron-szuppresszió után (idiopátikus secondary hypogonadism, kortikoszteroid- vagy opioid-indukált HPTA-szuppresszió); (d) IVF male-factor – oligospermia / azoospermia esetén kombinált gonadotropin-protokoll. Cross-frame note: ez a `hcg-peptid` entry – fertilitás-klinikai Rx-framing-ben. A `hcg-perf` counterpart entry (performance-library) ugyanezt a molekulát AAS-PCT bridge-kontextusban tárgyalja (atrófia-prevention, doping-narratíva). AZONOS molekula, eltérő narratíva: a beteg/felhasználó ugyanazt a Pregnyl/Ovitrelle ampullát kapja, csak más céllal és más medikális keretben.",
  "keyInfo": [
    {
      "label": "Hatásmechanizmus",
      "value": "LHCGR-receptor agonist (Leydig-sejt) → ITT-emelés → Sertoli-támogatott spermatogenezis"
    },
    {
      "label": "Klinikai dózis (HH)",
      "value": "1500-2500 IU SC/IM 2-3x/hét × 6-24 hónap"
    },
    {
      "label": "HPTA-recovery dózis",
      "value": "500-1500 IU SC 2-3x/hét × 4-6 hét, majd SERM-átmenet"
    },
    {
      "label": "Felezési idő",
      "value": "uHCG ~24-36 óra; rHCG (Ovidrel/Ovitrelle) ~38 óra"
    },
    {
      "label": "Onset",
      "value": "Akut Test-emelkedés 24-48 óra; spermatogenezis-recovery 3-6 hónap"
    },
    {
      "label": "Tárolás",
      "value": "Liofilizált vial szobahő; reconstituált oldat 2-8°C max. 30 nap"
    }
  ],
  "mechanism": "A HCG egy 244-aminosav heterodimer-glikoprotein: α-alegység (közös LH/FSH/TSH-val) + β-alegység (HCG-specifikus, ~80% LH-β-identitás + extra C-terminális ~24-aminosav-farok, CTP). A CTP-farok adja a HCG hosszú t1/2-jét (~24-38 h) az LH ~30 perces felezési idejéhez képest. Receptor-binding: Leydig-sejt LHCGR (LH / chorionic gonadotropin receptor) agonist → Gs-cAMP-PKA pathway → szteroidogén enzimek (StAR, CYP11A1, CYP17A1, 3β-HSD) up-regulációja → cholesterol → pregnenolone → testosterone. Fertilitás-klinikai kulcs: a HCG-stimulus az intratestikuláris testosterone (ITT) koncentrációját emeli, ami a szérum-testosterone 50-100-szorosa (~600-1200 nmol/L vs. ~10-30 nmol/L szérumban). Ez a magas-ITT-környezet kritikus a Sertoli-sejtek és a germinális hám (spermatogonia → spermatocyta → spermatida → spermium) érésére. A komplett spermatogenezis-indukcióhoz azonban FSH-signál is szükséges (Sertoli-sejt-aktiváció), ezért HH-betegekben gyakran HCG + HMG vagy HCG + rFSH kombináció a standard.",
  "dosingInfo": "Férfi hypogonadotropikus hypogonadism (HH) Rx: 1500-2500 IU SC vagy IM 2-3x/hét × 6-24 hónap. Cél: szérum-testosterone 400-700 ng/dL + spermium-koncentráció ≥15 millió/mL. Fenntartó dose-titrálás vérvizsgálat alapján. – Spermatogenezis-indukció (HCG-monoterápia insufficient): HCG 1500-2500 IU 2-3x/hét + HMG (Menopur) 75-150 IU 3x/hét VAGY rFSH (Gonal-F, Puregon) 150 IU 3x/hét × 6-24 hónap. A teljes spermatogenezis-cyclus 72-74 nap, ezért minimum 3-6 hónap szükséges első eredményekhez. – HPTA-recovery klinikai Rx (NEM AAS-PCT): 500-1500 IU SC 2-3x/hét × 4-6 hét secondary hypogonadism vagy kortikoszteroid/opioid-indukált HPTA-szuppresszió esetén, ezt követően SERM-átmenet (Clomid 25-50 mg/nap × 4 hét vagy Tamoxifen 20 mg/nap × 4 hét) a teljes axis-restart-hoz. – IVF male-factor: HCG + HMG kombinált gonadotropin-protokoll, individualizált dose, reproduktív endokrinológus felügyelete mellett. – Pediátriai cryptorchidism (gyermek): külön pediátriai protokoll (1000-1500 IU 2x/hét × 4-5 hét), kizárólag pediátriai endokrinológusi indikációval.",
  "studies": [
    {
      "title": "Use of human chorionic gonadotropin in men",
      "authors": "Crosnoe LE, Grober E, Ohl D, Kim ED.",
      "journal": "Transl Androl Urol. 2013;2(3):195-202."
    },
    {
      "title": "Hypogonadism therapy and fertility outcomes",
      "authors": "Hill ED, Honig SC, Tabb KE, et al.",
      "journal": "Int J Impot Res. 2018;30(6):262-269."
    },
    {
      "title": "Low-dose human chorionic gonadotropin maintains intratesticular testosterone in normal men with testosterone-induced gonadotropin suppression",
      "authors": "Coviello AD, Matsumoto AM, Bremner WJ, et al.",
      "journal": "J Clin Endocrinol Metab. 2005;90(5):2595-2602.",
      "pmid": "15713727"
    },
    {
      "title": "Maintenance of spermatogenesis in hypogonadotropic hypogonadal men with human chorionic gonadotropin alone",
      "authors": "Depenbusch M, von Eckardstein S, Simoni M, Nieschlag E.",
      "journal": "Eur J Endocrinol. 2002;147(5):617-624.",
      "pmid": "12444893"
    }
  ],
  "legalStatus": "HU: Pregnyl 1500/5000 IU (Organon/Merck) + Choragon 5000 IU (Ferring) + Ovitrelle 250 µg (Merck Serono) – törzskönyvezett, Rx-kötelezett, andrológus/reproduktív-endokrinológus szakorvosi indikációval. EU (EMA): Pregnyl, Choragon, Ovitrelle – Rx, fertilitás-indikációkkal (male hypogonadism, anovuláció, IVF). USA (FDA): Pregnyl (Organon/Merck), Novarel (Ferring), Ovidrel (Serono) – Rx, indikációk female ovulation induction, male hypogonadism, prepubertás cryptorchidism. PL: Pregnyl, Choragon, Ovitrelle – zarejestrowane Rx (NFZ-refundáció részben elérhető fertilitás-indikációk esetén). WADA: S2.1 Peptide Hormones – banned in-competition + out-of-competition minden férfi versenyző számára egész évben. Fertilitás-betegek versenysport-engedélyhez Therapeutic Use Exemption (TUE) kell.",
  "onsetTime": "Akut Test-emelkedés 24-48 óra; spermatogenezis-recovery 3-6 hónap",
  "halfLife": "uHCG ~24-36 óra; rHCG ~38 óra",
  "interactionsWith": [
    "hmg-peptid",
    "hcg-perf",
    "gonadorelin"
  ],
  "wadaStatus": "banned",
  "related": [
    "hmg-peptid",
    "hcg-perf",
    "gonadorelin"
  ],
  "faq": [
    {
      "q": "Mi a különbség a `hcg-peptid` és a `hcg-perf` entry között?",
      "a": "Identikus molekula, eltérő framing. Mindkét entry ugyanazt a HCG-t (Pregnyl / Ovitrelle / Choragon) tárgyalja – azonos kémiai struktúra (244-AA heterodimer-glikoprotein), azonos farmakológia (LHCGR-agonist), azonos beadás-mód (SC vagy IM injekció). A KÜLÖNBSÉG csak narratív: `hcg-peptid` (ez az entry) – fertilitás-klinikai Rx-framing: male hypogonadotropikus hypogonadism, spermatogenezis-indukció IVF male-factor esetén, HPTA-recovery klinikai protokoll (kortikoszteroid- vagy opioid-indukált hypogonadism). `hcg-perf` – AAS-PCT bridge-kontextus: testikulár-atrófia-prevention mid-cycle, post-cycle HPTA-restart Leydig-bypass-szal, doping-narratíva. A beteg ugyanazt a Pregnyl ampullát kapja a patikában – csak más diagnózis-kóddal és más célsávval használja."
    },
    {
      "q": "Mennyi időbe telik a fertilitás-recovery?",
      "a": "A komplett spermatogenezis-cyclus 72-74 nap (germ-cell érés spermatogóniumtól érett spermiumig + epididymalis tranzit). Ezért HCG-terápia (vagy HCG+HMG/rFSH kombináció) megkezdése után minimum 3-6 hónap szükséges az első spermium-szám-emelkedés méréséhez. Teljes recovery (sperm-konc ≥15 millió/mL, ami a WHO 2010 normospermia-küszöb) 6-24 hónap lehet, a kiindulási súlyosságtól (azoospermia vs. severe oligospermia vs. mild oligospermia) és az indikációtól (congenitális HH gyakran lassabb mint szerzett szteroid-indukált HPTA-szuppresszió) függően. Monitoring: 3 havonta spermiogramm (WHO-protokoll), kvartális szérum-testosterone + LH/FSH, évente esetlegesen testikuláris ultrahang."
    },
    {
      "q": "Miért tilos WADA-listán, ha fertilitás-Rx-indikáció van?",
      "a": "A WADA S2.1 Peptide Hormones kategória minden férfi sportoló számára egész évben tiltja a HCG-t, mert exogén LH-mimikry-ként a férfi endogén tesztoszteron-szintézist növeli – ez teljesítményfokozó effektussal jár, függetlenül attól, hogy az indikáció fertilitás vagy szándékos doping. Fertilitás-betegségben szenvedő versenysportoló (HH, IVF male-factor) Therapeutic Use Exemption (TUE) engedélyt kell igényeljen a saját nemzeti antidoping-szervezeténél (HU: HUNADO; PL: POLADA), amihez szükséges: andrológus / reproduktív-endokrinológus szakorvosi diagnózis, laboratóriumi alátámasztás (LH/FSH/Test/sperm-conc baseline), és kezelési terv. A TUE-jóváhagyás után a versenysportoló jogszerűen használhatja a HCG-t. Női sportolóknál a HCG csak in-competition tiltott (S2.1 lábjegyzet), ami az IVF-protokollok kontextusában releváns."
    },
    {
      "q": "HCG-monoterápia elég a spermatogenezis-induláshoz?",
      "a": "Általában NEM. A komplett spermatogenezis két jelet igényel: (1) HCG/LH → Leydig-sejt → ITT (intratestikuláris testosterone) – ezt a HCG önmagában lefedi; (2) FSH → Sertoli-sejt → germ-cell-támogatás (androgen-binding protein, inhibin B, tubulus-microkörnyezet). HCG-monoterápia csak akkor elég, ha az endogén FSH-szekréció megőrzött (pl. enyhe / parciális HH, post-AAS recovery). Komplett HH (Kallmann-szindróma, pituiter-elégtelenség, post-pituitary-surgery) esetén HCG + HMG (humán menopauzális gonadotropin, FSH+LH-tartalmú) vagy HCG + rFSH (rekombináns FSH: Gonal-F, Puregon) kombináció szükséges 6-24 hónap időtartamra. A Depenbusch 2002 (PMID 12444893) study mutatja, hogy bizonyos HH-altípusokban HCG-monoterápia hosszú távon is fenntartja a spermatogenezist (különösen ha FSH-priming megelőzte), de a klinikai standard a kombinált protokoll."
    }
  ],
  "anecdote": null
}
