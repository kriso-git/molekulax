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
]

const LANGS = ['hu', 'en', 'pl']

function injectField(content, value) {
  if (content.includes('"bioavailability"')) {
    return content.replace(
      /"bioavailability":\s*"[^"]*"/,
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
