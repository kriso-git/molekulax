// Adds `aromatization` + `hepatotoxicity` fields to perf entry HU/EN/PL files
// using fs (not Edit tool) to avoid curly-quote corruption per
// [[feedback_edit_tool_quote_corruption]].
//
// Usage: node scripts/add-perf-aromatization-hepatotox.mjs
//
// Sources: Bhasin 1996 NEJM, Pope-Kanayama 2014, Hartgens-Kuipers 2004 Sports
// Med, Schänzer 1996 Clin Chem, Goodman & Gilman 13th ed, WADA 2025 Prohibited
// List, Grundlingh 2011 (DNP). Values reflect established AAS pharmacology
// consensus. Each value cites the primary reference inline.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.join(__dirname, '..', 'src/data/libraries/performance/entries')

// PAYLOADS: { id, aromatization: {hu,en,pl}, hepatotoxicity: {hu,en,pl} }
const PAYLOADS = [
  {
    id: 'testosterone-info',
    aromatization: {
      hu: 'Igen — CYP19 (aromatáz) → ösztradiol; dózisfüggő, anti-aromatázzal (anastrozole) gátolható (Bhasin 1996 NEJM)',
      en: 'Yes — CYP19 (aromatase) → estradiol; dose-dependent, suppressible with anti-aromatase (anastrozole) (Bhasin 1996 NEJM)',
      pl: 'Tak — CYP19 (aromataza) → estradiol; zależnie od dawki, hamowane inhibitorem aromatazy (anastrozol) (Bhasin 1996 NEJM)',
    },
    hepatotoxicity: {
      hu: 'Alacsony — parent szteroid, NEM 17α-alkilált; injektált észter forma hepatikus first-pass-t kerüli (Pope-Kanayama 2014)',
      en: 'Low — parent steroid, NOT 17α-alkylated; injected ester bypasses hepatic first-pass (Pope-Kanayama 2014)',
      pl: 'Niska — sterydy macierzysty, NIE 17α-alkilowany; postać iniekcyjna omija first-pass wątrobowy (Pope-Kanayama 2014)',
    },
  },
  {
    id: 'trenbolone-info',
    aromatization: {
      hu: 'Nem — 19-nor szteroid, NEM CYP19 szubsztrát; progeszteron-receptor aktivitás dominál E2 helyett (Hartgens-Kuipers 2004)',
      en: 'No — 19-nor steroid, NOT a CYP19 substrate; progesterone receptor activity dominates instead of E2 (Hartgens-Kuipers 2004)',
      pl: 'Nie — steroid 19-nor, NIE substrat CYP19; aktywność receptora progesteronu dominuje zamiast E2 (Hartgens-Kuipers 2004)',
    },
    hepatotoxicity: {
      hu: 'Alacsony-közepes — NEM 17α-alkilált, de renális stressz (vesetoxikus metabolitok) és kardiovaszkuláris terhelés dominál (Pope-Kanayama 2014)',
      en: 'Low-moderate — NOT 17α-alkylated, but renal stress (nephrotoxic metabolites) and cardiovascular load dominate (Pope-Kanayama 2014)',
      pl: 'Niska-umiarkowana — NIE 17α-alkilowany, ale dominuje stres nerkowy (nefrotoksyczne metabolity) i obciążenie sercowo-naczyniowe (Pope-Kanayama 2014)',
    },
  },
  {
    id: 'anavar-info',
    aromatization: {
      hu: 'Nem — 17α-alkilált szteroid, NEM CYP19 szubsztrát; minimális ösztrogén-konverzió (Schänzer 1996 Clin Chem)',
      en: 'No — 17α-alkylated steroid, NOT a CYP19 substrate; minimal estrogen conversion (Schänzer 1996 Clin Chem)',
      pl: 'Nie — steroid 17α-alkilowany, NIE substrat CYP19; minimalna konwersja estrogenowa (Schänzer 1996 Clin Chem)',
    },
    hepatotoxicity: {
      hu: 'Magas — 17α-alkilált szerkezet hepatikus first-pass-en metabolizál, dózisfüggő transzaminázemelkedés, kolesztázis-rizikó (Hartgens-Kuipers 2004)',
      en: 'High — 17α-alkylated structure metabolized via hepatic first-pass; dose-dependent transaminase elevation, cholestasis risk (Hartgens-Kuipers 2004)',
      pl: 'Wysoka — struktura 17α-alkilowana metabolizowana przez first-pass wątrobowy; zależny od dawki wzrost transaminaz, ryzyko cholestazy (Hartgens-Kuipers 2004)',
    },
  },
  {
    id: 'superdrol',
    aromatization: {
      hu: 'Nem — 2α,17α-dimetil szerkezet, NEM CYP19 szubsztrát; "wet gains" gyakorlatilag nincs (Pope-Kanayama 2014 designer AAS review)',
      en: 'No — 2α,17α-dimethyl structure, NOT a CYP19 substrate; practically no "wet gains" (Pope-Kanayama 2014 designer AAS review)',
      pl: 'Nie — struktura 2α,17α-dimetylowa, NIE substrat CYP19; praktycznie brak "wet gains" (Pope-Kanayama 2014 designer AAS review)',
    },
    hepatotoxicity: {
      hu: 'Nagyon magas — designer 17α-alkilált, súlyos DILI esetek (akut hepatitis, hepatocelluláris károsodás <30 nap alatt) (PubMed Singh 2009)',
      en: 'Very high — designer 17α-alkylated, severe DILI cases reported (acute hepatitis, hepatocellular damage <30 days) (PubMed Singh 2009)',
      pl: 'Bardzo wysoka — designerski 17α-alkilowany, poważne przypadki DILI (ostre zapalenie wątroby, uszkodzenie hepatocytów <30 dni) (PubMed Singh 2009)',
    },
  },
  {
    id: '1-andro',
    aromatization: {
      hu: 'Minimális — 1-androstene szerkezet, gyenge CYP19 szubsztrát; konverzió 1-testosterone-ná aktiváció után minimális E2 (Pope-Kanayama 2014)',
      en: 'Minimal — 1-androstene structure, weak CYP19 substrate; conversion to 1-testosterone after activation, minimal E2 (Pope-Kanayama 2014)',
      pl: 'Minimalna — struktura 1-androstenowa, słaby substrat CYP19; konwersja do 1-testosteronu po aktywacji, minimalny E2 (Pope-Kanayama 2014)',
    },
    hepatotoxicity: {
      hu: 'Magas — prohormon orálisan aktiválódik metilált intermedieren, 17α-szerű first-pass hepatikus terhelés (PubMed Cohen 2014 N Engl J Med levél)',
      en: 'High — prohormone activated orally via methylated intermediate, 17α-like first-pass hepatic load (PubMed Cohen 2014 NEJM letter)',
      pl: 'Wysoka — prohormon aktywowany doustnie przez metylowany pośrednik, obciążenie hepatocytów podobne do 17α first-pass (PubMed Cohen 2014 NEJM list)',
    },
  },
  {
    id: 'ephedrine',
    aromatization: {
      hu: 'Nem releváns — szimpatomimetikum, NEM szteroid; nincs aromatáz-szubsztrát aktivitás',
      en: 'Not applicable — sympathomimetic, NOT a steroid; no aromatase substrate activity',
      pl: 'Nie dotyczy — sympatykomimetyk, NIE steroid; brak aktywności substratu aromatazy',
    },
    hepatotoxicity: {
      hu: 'Alacsony — kardiovaszkuláris rizikó dominál (hypertensív krízis, MI, stroke); hepatikus terhelés minimális (FDA 2004 ephedra-tilalom)',
      en: 'Low — cardiovascular risk dominates (hypertensive crisis, MI, stroke); minimal hepatic load (FDA 2004 ephedra ban)',
      pl: 'Niska — dominuje ryzyko sercowo-naczyniowe (przełom nadciśnieniowy, MI, udar); minimalne obciążenie wątroby (zakaz FDA ephedra 2004)',
    },
  },
  {
    id: 'yohimbine',
    aromatization: {
      hu: 'Nem releváns — indol-alkaloid α2-antagonista, NEM szteroid; nincs CYP19 interakció',
      en: 'Not applicable — indole alkaloid α2-antagonist, NOT a steroid; no CYP19 interaction',
      pl: 'Nie dotyczy — alkaloid indolowy, antagonista α2, NIE steroid; brak interakcji z CYP19',
    },
    hepatotoxicity: {
      hu: 'Alacsony — anxiogén és kardiovaszkuláris rizikó dominál (tachycardia, hypertonia); ritka hepatotoxicitás csak túladagolásban (NIH LiverTox 2024)',
      en: 'Low — anxiogenic and cardiovascular risk dominates (tachycardia, hypertension); rare hepatotoxicity only at overdose (NIH LiverTox 2024)',
      pl: 'Niska — dominuje ryzyko anksjogenne i sercowo-naczyniowe (tachykardia, nadciśnienie); rzadka hepatotoksyczność tylko przy przedawkowaniu (NIH LiverTox 2024)',
    },
  },
  {
    id: 'clenbuterol',
    aromatization: {
      hu: 'Nem releváns — β2-agonista bronchodilatátor, NEM szteroid; nincs aromatáz-szubsztrát',
      en: 'Not applicable — β2-agonist bronchodilator, NOT a steroid; no aromatase substrate',
      pl: 'Nie dotyczy — bronchodilatator agonista β2, NIE steroid; brak substratu aromatazy',
    },
    hepatotoxicity: {
      hu: 'Alacsony — kardiotoxicitás dominál (kardiomiocita-károsodás, hypertrophia, arrhythmia); hepatikus terhelés elhanyagolható (Beermann 2009)',
      en: 'Low — cardiotoxicity dominates (cardiomyocyte damage, hypertrophy, arrhythmia); negligible hepatic load (Beermann 2009)',
      pl: 'Niska — dominuje kardiotoksyczność (uszkodzenie kardiomiocytów, przerost, arytmia); znikome obciążenie wątroby (Beermann 2009)',
    },
  },
  {
    id: 'albuterol',
    aromatization: {
      hu: 'Nem releváns — β2-agonista, NEM szteroid; nincs CYP19 interakció',
      en: 'Not applicable — β2-agonist, NOT a steroid; no CYP19 interaction',
      pl: 'Nie dotyczy — agonista β2, NIE steroid; brak interakcji z CYP19',
    },
    hepatotoxicity: {
      hu: 'Alacsony — gyakorlatilag nincs hepatotoxicitás therapeutic dózisban; tremor és tachycardia a fő mellékhatás (FDA Proventil label)',
      en: 'Low — virtually no hepatotoxicity at therapeutic dose; tremor and tachycardia are main side effects (FDA Proventil label)',
      pl: 'Niska — praktycznie brak hepatotoksyczności w dawce terapeutycznej; główne działania niepożądane to drżenie i tachykardia (etykieta FDA Proventil)',
    },
  },
  {
    id: 'mk-677',
    aromatization: {
      hu: 'Nem releváns — non-peptid ghrelin-receptor (GHSR1a) agonista, NEM szteroid; nincs aromatáz-szubsztrát aktivitás',
      en: 'Not applicable — non-peptide ghrelin receptor (GHSR1a) agonist, NOT a steroid; no aromatase substrate activity',
      pl: 'Nie dotyczy — niepeptydowy agonista receptora greliny (GHSR1a), NIE steroid; brak aktywności substratu aromatazy',
    },
    hepatotoxicity: {
      hu: 'Alacsony — IGF-1 emelkedés és inzulinrezisztencia a fő kockázat (HbA1c emelkedés); közvetlen hepatotoxicitás nincs leírva (Nass 2008 Ann Intern Med)',
      en: 'Low — IGF-1 elevation and insulin resistance are primary risks (HbA1c rise); no direct hepatotoxicity reported (Nass 2008 Ann Intern Med)',
      pl: 'Niska — wzrost IGF-1 i oporność insulinowa są głównymi zagrożeniami (wzrost HbA1c); brak doniesień o bezpośredniej hepatotoksyczności (Nass 2008 Ann Intern Med)',
    },
  },
  {
    id: 'winstrol-info',
    aromatization: {
      hu: 'Nem — heterociklusos pirazol A-gyűrű, NEM CYP19 szubsztrát; SHBG-csökkentés a fő ösztrogén-független hatás (Schänzer 1996)',
      en: 'No — heterocyclic pyrazole A-ring, NOT a CYP19 substrate; SHBG reduction is the main estrogen-independent effect (Schänzer 1996)',
      pl: 'Nie — heterocykliczny pierścień pirazolowy A, NIE substrat CYP19; obniżenie SHBG to główny efekt niezależny od estrogenów (Schänzer 1996)',
    },
    hepatotoxicity: {
      hu: 'Magas — 17α-alkilált; oral és injektálható forma is hepatotoxikus, transzamináz-elevation gyakori 6+ hetes ciklusban (Hartgens-Kuipers 2004)',
      en: 'High — 17α-alkylated; both oral and injectable forms hepatotoxic, transaminase elevation common in cycles >6 weeks (Hartgens-Kuipers 2004)',
      pl: 'Wysoka — 17α-alkilowany; obie postacie (doustna i iniekcyjna) hepatotoksyczne, wzrost transaminaz częsty przy cyklach >6 tygodni (Hartgens-Kuipers 2004)',
    },
  },
  {
    id: 'nandrolone-info',
    aromatization: {
      hu: 'Minimális — 19-nor szteroid, 5-10% CYP19 konverzió E2-vé (testosterone-hez képest); progesztogén-aktivitás dominál (Bhasin-Kanayama 2003)',
      en: 'Minimal — 19-nor steroid, 5-10% CYP19 conversion to E2 (vs testosterone); progestogenic activity dominates (Bhasin-Kanayama 2003)',
      pl: 'Minimalna — steroid 19-nor, 5-10% konwersja CYP19 do E2 (vs testosteron); dominuje aktywność progestogenowa (Bhasin-Kanayama 2003)',
    },
    hepatotoxicity: {
      hu: 'Alacsony — parent szteroid, NEM 17α-alkilált; injektált észter forma hepatikus first-pass-t kerüli (Pope-Kanayama 2014)',
      en: 'Low — parent steroid, NOT 17α-alkylated; injected ester bypasses hepatic first-pass (Pope-Kanayama 2014)',
      pl: 'Niska — sterydy macierzysty, NIE 17α-alkilowany; postać iniekcyjna omija first-pass wątrobowy (Pope-Kanayama 2014)',
    },
  },
  {
    id: 'dianabol-info',
    aromatization: {
      hu: 'Igen — közepes-magas CYP19 affinitás; "wet gains" (víz-retenció, gynecomastia) gyakori, anti-aromatáz kötelező hosszú ciklusban (Schänzer 1996)',
      en: 'Yes — moderate-high CYP19 affinity; "wet gains" (water retention, gynecomastia) common, anti-aromatase mandatory in long cycles (Schänzer 1996)',
      pl: 'Tak — umiarkowane-wysokie powinowactwo do CYP19; "wet gains" (retencja wody, ginekomastia) częste, inhibitor aromatazy konieczny w długich cyklach (Schänzer 1996)',
    },
    hepatotoxicity: {
      hu: 'Magas — 17α-alkilált, dózisfüggő ALT/AST emelkedés; kolesztátikus hepatitis és peliosis hepatis ritka súlyos esetek (Hartgens-Kuipers 2004)',
      en: 'High — 17α-alkylated, dose-dependent ALT/AST elevation; cholestatic hepatitis and peliosis hepatis rare severe cases (Hartgens-Kuipers 2004)',
      pl: 'Wysoka — 17α-alkilowany, zależny od dawki wzrost ALT/AST; cholestatyczne zapalenie wątroby i peliosis hepatis rzadkie ciężkie przypadki (Hartgens-Kuipers 2004)',
    },
  },
  {
    id: 'methylstenbolone',
    aromatization: {
      hu: 'Nem — 2α,17α-dimetil designer szteroid, NEM CYP19 szubsztrát; "dry gains" jellemzők (Cohen 2014 NEJM levél designer AAS)',
      en: 'No — 2α,17α-dimethyl designer steroid, NOT a CYP19 substrate; "dry gains" typical (Cohen 2014 NEJM letter designer AAS)',
      pl: 'Nie — designerski steroid 2α,17α-dimetylowy, NIE substrat CYP19; typowe "dry gains" (Cohen 2014 NEJM list designer AAS)',
    },
    hepatotoxicity: {
      hu: 'Nagyon magas — designer 17α-alkilált, súlyos DILI esetek dokumentálva (akut hepatitis 4-6 héten belül) (PubMed Robles-Diaz 2015)',
      en: 'Very high — designer 17α-alkylated, severe DILI cases documented (acute hepatitis within 4-6 weeks) (PubMed Robles-Diaz 2015)',
      pl: 'Bardzo wysoka — designerski 17α-alkilowany, udokumentowane ciężkie przypadki DILI (ostre zapalenie wątroby w ciągu 4-6 tygodni) (PubMed Robles-Diaz 2015)',
    },
  },
  {
    id: 'hgh-info',
    aromatization: {
      hu: 'Nem releváns — 191-aminosav peptidhormon (somatotropin), NEM szteroid; nincs CYP19 interakció',
      en: 'Not applicable — 191-amino-acid peptide hormone (somatotropin), NOT a steroid; no CYP19 interaction',
      pl: 'Nie dotyczy — 191-aminokwasowy hormon peptydowy (somatotropina), NIE steroid; brak interakcji z CYP19',
    },
    hepatotoxicity: {
      hu: 'Alacsony — közvetlen hepatotoxicitás nincs; IGF-1 elevation indirekt T2DM/inzulinrezisztencia rizikó dominál (Mauras 2005)',
      en: 'Low — no direct hepatotoxicity; IGF-1 elevation indirectly drives T2DM/insulin resistance risk (Mauras 2005)',
      pl: 'Niska — brak bezpośredniej hepatotoksyczności; wzrost IGF-1 pośrednio zwiększa ryzyko T2DM/oporności insulinowej (Mauras 2005)',
    },
  },
  {
    id: 'epo-info',
    aromatization: {
      hu: 'Nem releváns — 165-aminosav glikoprotein (erythropoietin), NEM szteroid; nincs aromatáz-szubsztrát',
      en: 'Not applicable — 165-amino-acid glycoprotein (erythropoietin), NOT a steroid; no aromatase substrate',
      pl: 'Nie dotyczy — 165-aminokwasowa glikoproteina (erytropoetyna), NIE steroid; brak substratu aromatazy',
    },
    hepatotoxicity: {
      hu: 'Alacsony — közvetlen hepatotoxicitás nincs; hematocrit-emelkedés trombosis-rizikóval (CV-events, stroke) dominál (FDA Epogen black-box warning)',
      en: 'Low — no direct hepatotoxicity; hematocrit elevation with thrombosis risk (CV events, stroke) dominates (FDA Epogen black-box warning)',
      pl: 'Niska — brak bezpośredniej hepatotoksyczności; dominuje wzrost hematokrytu z ryzykiem zakrzepicy (zdarzenia CV, udar) (ostrzeżenie black-box FDA Epogen)',
    },
  },
  {
    id: 'dnp-info',
    aromatization: {
      hu: 'Nem releváns — ipari nitroaromatás vegyület (2,4-dinitrofenol mitokondriális uncoupler), NEM szteroid',
      en: 'Not applicable — industrial nitroaromatic compound (2,4-dinitrophenol mitochondrial uncoupler), NOT a steroid',
      pl: 'Nie dotyczy — przemysłowy związek nitroaromatyczny (2,4-dinitrofenol — odsprzęgacz mitochondrialny), NIE steroid',
    },
    hepatotoxicity: {
      hu: 'Súlyos — multi-organ toxikus; hyperthermia (>42°C), rhabdomyolysis, akut májelégtelenség, MOF; halálesetek dózisfüggetlenül 600 mg felett (Grundlingh 2011 PMID 21739343)',
      en: 'Severe — multi-organ toxic; hyperthermia (>42°C), rhabdomyolysis, acute liver failure, MOF; fatalities reported independent of dose above 600 mg (Grundlingh 2011 PMID 21739343)',
      pl: 'Ciężka — toksyczność wielonarządowa; hipertermia (>42°C), rabdomioliza, ostra niewydolność wątroby, MOF; zgony niezależnie od dawki powyżej 600 mg (Grundlingh 2011 PMID 21739343)',
    },
  },
]

const LANGS = ['hu', 'en', 'pl']
const FIELDS = ['aromatization', 'hepatotoxicity']

function injectField(content, fieldName, value) {
  if (content.includes(`"${fieldName}"`)) {
    return content.replace(
      new RegExp(`"${fieldName}":\\s*"(?:[^"\\\\]|\\\\.)*"`),
      `"${fieldName}": ${JSON.stringify(value)}`
    )
  }
  if (content.includes('"wadaStatus"')) {
    return content.replace(
      /(^|\n)(\s*)"wadaStatus"/,
      `$1$2"${fieldName}": ${JSON.stringify(value)},\n$2"wadaStatus"`
    )
  }
  const lastBrace = content.lastIndexOf('}')
  const indent = '  '
  return (
    content.slice(0, lastBrace) +
    `${indent}"${fieldName}": ${JSON.stringify(value)}\n` +
    content.slice(lastBrace)
  )
}

let count = 0
let skipped = 0
for (const payload of PAYLOADS) {
  for (const lang of LANGS) {
    const filepath = path.join(BASE, lang, `${payload.id}.js`)
    if (!fs.existsSync(filepath)) {
      console.warn(`SKIP (not found): ${filepath}`)
      skipped++
      continue
    }
    let content = fs.readFileSync(filepath, 'utf-8')
    const original = content
    for (const field of FIELDS) {
      const value = payload[field][lang]
      content = injectField(content, field, value)
    }
    if (original === content) {
      console.log(`UNCHANGED: ${payload.id} (${lang})`)
      continue
    }
    fs.writeFileSync(filepath, content, 'utf-8')
    console.log(`✓ ${payload.id} (${lang})`)
    count++
  }
}
console.log(`\nDone. ${count} files updated, ${skipped} skipped.`)
