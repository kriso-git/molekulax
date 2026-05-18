// Adds `bioavailability` field to pharma entry HU/EN/PL files using fs (not
// Edit tool) to avoid curly-quote corruption per
// [[feedback_edit_tool_quote_corruption]].
//
// Usage: node scripts/add-pharma-bioavailability.mjs
//
// Each PAYLOADS entry is { id, hu, en, pl, source } and the script inserts
// the field after the `onsetTime` field (or before the last `}` if missing).
// Values are derived from FDA SmPC labels accessed via DailyMed.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.join(__dirname, '..', 'src/data/libraries/pharmaceutical/entries')

const PAYLOADS = [
  // ── Pilot 3 (commit 1a23099) ─────────────────────────────────────────────
  {
    id: 'metformin',
    hu: '~50-60% (orális, éhgyomri, 500 mg tabletta — FDA Glucophage label)',
    en: '~50-60% (oral, fasted, 500 mg tablet — FDA Glucophage label)',
    pl: '~50-60% (doustnie, na czczo, tabletka 500 mg — etykieta FDA Glucophage)',
  },
  {
    id: 'amlodipine',
    hu: '64-90% (orális, terápiás dózis — FDA Norvasc label)',
    en: '64-90% (oral, therapeutic dose — FDA Norvasc label)',
    pl: '64-90% (doustnie, dawka terapeutyczna — etykieta FDA Norvasc)',
  },
  {
    id: 'apixaban',
    hu: '~50% (orális, ≤10 mg dózis — FDA Eliquis label)',
    en: '~50% (oral, doses up to 10 mg — FDA Eliquis label)',
    pl: '~50% (doustnie, dawki do 10 mg — etykieta FDA Eliquis)',
  },
  // ── Batch 1 (alphabetical, acarbose..doxycycline) ────────────────────────
  {
    id: 'acarbose',
    hu: '<2% (orális, aktív hatóanyag — FDA Precose label; ~35% összes radioaktivitás)',
    en: '<2% (oral, active drug — FDA Precose label; ~35% total radioactivity)',
    pl: '<2% (doustnie, substancja czynna — etykieta FDA Precose; ~35% całkowitej radioaktywności)',
  },
  {
    id: 'amoxicillin',
    hu: '~74-92% (orális, étkezéstől kis mértékben függő — FDA Amoxil label)',
    en: '~74-92% (oral, mildly food-affected — FDA Amoxil label)',
    pl: '~74-92% (doustnie, niewielki wpływ pokarmu — etykieta FDA Amoxil)',
  },
  {
    id: 'aripiprazole',
    hu: '87% (orális tabletta — FDA Abilify label, Section 12.3)',
    en: '87% (oral tablet — FDA Abilify label, Section 12.3)',
    pl: '87% (doustnie tabletka — etykieta FDA Abilify, sekcja 12.3)',
  },
  {
    id: 'atorvastatin',
    hu: '~14% (orális, presystemic clearance + first-pass metabolizmus — FDA Lipitor label)',
    en: '~14% (oral, presystemic clearance + first-pass metabolism — FDA Lipitor label)',
    pl: '~14% (doustnie, klirens presystemowy + metabolizm first-pass — etykieta FDA Lipitor)',
  },
  {
    id: 'azithromycin',
    hu: '38% (orális, 250 mg kapszula — FDA Zithromax label)',
    en: '38% (oral, 250 mg capsule — FDA Zithromax label)',
    pl: '38% (doustnie, kapsułka 250 mg — etykieta FDA Zithromax)',
  },
  {
    id: 'berberin',
    hu: '<1% (orális, P-gp efflux + extenzív first-pass — PubMed Liu 2010 Front Pharmacol)',
    en: '<1% (oral, P-gp efflux + extensive first-pass — PubMed Liu 2010 Front Pharmacol)',
    pl: '<1% (doustnie, efflux P-gp + intensywny first-pass — PubMed Liu 2010 Front Pharmacol)',
  },
  {
    id: 'bisoprolol',
    hu: '~80% (orális, 10 mg dózis — FDA Zebeta label)',
    en: '~80% (oral, 10 mg dose — FDA Zebeta label)',
    pl: '~80% (doustnie, dawka 10 mg — etykieta FDA Zebeta)',
  },
  {
    id: 'bupropion',
    hu: 'Abszolút értékben nem karakterizált (IV formula nincs); gyors orális felszívódás, Tmax ~3 h — FDA Wellbutrin label',
    en: 'Not characterized as absolute (no IV formulation exists); rapid oral absorption, Tmax ~3 h — FDA Wellbutrin label',
    pl: 'Nieokreślone bezwzględnie (brak postaci IV); szybkie wchłanianie doustne, Tmax ~3 h — etykieta FDA Wellbutrin',
  },
  {
    id: 'ciprofloxacin',
    hu: '~70% (orális tabletta, étkezéstől független — FDA Cipro label)',
    en: '~70% (oral tablet, food-independent — FDA Cipro label)',
    pl: '~70% (doustnie tabletka, niezależnie od pokarmu — etykieta FDA Cipro)',
  },
  {
    id: 'doxycycline',
    hu: '~95-100% (orális, "virtually completely absorbed" — FDA Vibramycin label)',
    en: '~95-100% (oral, "virtually completely absorbed" — FDA Vibramycin label)',
    pl: '~95-100% (doustnie, "praktycznie całkowicie wchłaniana" — etykieta FDA Vibramycin)',
  },
  // ── Batch 2 (empagliflozin..levothyroxin) ────────────────────────────────
  {
    id: 'empagliflozin',
    hu: '~78% (orális — FDA Jardiance label, Section 12.3)',
    en: '~78% (oral — FDA Jardiance label, Section 12.3)',
    pl: '~78% (doustnie — etykieta FDA Jardiance, sekcja 12.3)',
  },
  {
    id: 'escitalopram',
    hu: '~80% (orális, étkezéstől független — FDA Lexapro label)',
    en: '~80% (oral, food-independent — FDA Lexapro label)',
    pl: '~80% (doustnie, niezależnie od pokarmu — etykieta FDA Lexapro)',
  },
  {
    id: 'finasteride',
    hu: '65% (orális, 1 mg tabletta, IV-referenciához viszonyított AUC; tartomány 26-170% — FDA Propecia label)',
    en: '65% (oral, 1-mg tablet, AUC vs IV reference; range 26-170% — FDA Propecia label)',
    pl: '65% (doustnie, tabletka 1 mg, AUC vs IV; zakres 26-170% — etykieta FDA Propecia)',
  },
  {
    id: 'fluoxetine',
    hu: 'Abszolút értékben nem karakterizált (IV formula nincs); 60-80% relatív orális szuszpenzióhoz — FDA Prozac label',
    en: 'Not characterized as absolute (no IV formulation); 60-80% relative to oral solution — FDA Prozac label',
    pl: 'Nieokreślone bezwzględnie (brak postaci IV); 60-80% względem roztworu doustnego — etykieta FDA Prozac',
  },
  {
    id: 'glimepirid',
    hu: '~100% (orális, complete absorption — FDA Amaryl label)',
    en: '~100% (oral, complete absorption — FDA Amaryl label)',
    pl: '~100% (doustnie, całkowite wchłanianie — etykieta FDA Amaryl)',
  },
  {
    id: 'hydrocortisone',
    hu: '~96% (orális tabletta — FDA Cortef label; topikális vs orális forma eltérő)',
    en: '~96% (oral tablet — FDA Cortef label; topical vs oral form differs)',
    pl: '~96% (doustnie tabletka — etykieta FDA Cortef; forma miejscowa vs doustna różna)',
  },
  {
    id: 'isotretinoin',
    hu: '~25% (orális, éhgyomri; magas-zsírtartalmú étkezéssel >2× emelkedik — FDA Accutane label)',
    en: '~25% (oral, fasted; >2× higher with high-fat meal — FDA Accutane label)',
    pl: '~25% (doustnie, na czczo; >2× wyższa z posiłkiem wysokotłuszczowym — etykieta FDA Accutane)',
  },
  {
    id: 'lamotrigine',
    hu: '~98% (orális, "completely absorbed" — FDA Lamictal label)',
    en: '~98% (oral, "completely absorbed" — FDA Lamictal label)',
    pl: '~98% (doustnie, "całkowicie wchłaniana" — etykieta FDA Lamictal)',
  },
  {
    id: 'levothyroxin',
    hu: '40-80% (orális, éhgyomri; étkezés és kalcium/vas csökkenti — FDA Synthroid label)',
    en: '40-80% (oral, fasted; food and calcium/iron reduce — FDA Synthroid label)',
    pl: '40-80% (doustnie, na czczo; pokarm i wapń/żelazo zmniejszają — etykieta FDA Synthroid)',
  },
]

const LANGS = ['hu', 'en', 'pl']

function injectField(content, value) {
  if (content.includes('"bioavailability"')) {
    // Match value with escaped-quote awareness: (?:[^"\\]|\\.)* handles \" inside.
    // Plain [^"]* would stop at the first \" and corrupt values that contain
    // escaped quotes (e.g. doxycycline's "virtually completely absorbed").
    return content.replace(
      /"bioavailability":\s*"(?:[^"\\]|\\.)*"/,
      `"bioavailability": ${JSON.stringify(value)}`
    )
  }
  if (content.includes('"onsetTime"')) {
    return content.replace(
      /(^|\n)(\s*)"onsetTime"/,
      `$1$2"bioavailability": ${JSON.stringify(value)},\n$2"onsetTime"`
    )
  }
  const lastBrace = content.lastIndexOf('}')
  const indent = '  '
  return (
    content.slice(0, lastBrace) +
    `${indent}"bioavailability": ${JSON.stringify(value)}\n` +
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
    const original = fs.readFileSync(filepath, 'utf-8')
    const updated = injectField(original, payload[lang])
    if (original === updated) {
      console.log(`UNCHANGED: ${payload.id} (${lang})`)
      continue
    }
    fs.writeFileSync(filepath, updated, 'utf-8')
    console.log(`✓ ${payload.id} (${lang}) — ${payload[lang]}`)
    count++
  }
}
console.log(`\nDone. ${count} files updated, ${skipped} skipped.`)
