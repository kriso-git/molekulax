// Build a committed { entryId: 'YYYY-MM-DD' } map of each entry's last content-modified
// date from git history. The prerender emits this as JSON-LD dateModified + per-URL
// sitemap lastmod (a real freshness signal for YMYL). Vercel's shallow build clone can't
// run `git log` per file reliably, so we generate the map LOCALLY (full history) and
// commit src/data/entryDates.json. Re-run after a content edit: `node scripts/gen-entry-dates.mjs`.
import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical']
const LANGS = ['hu', 'en', 'pl']

function gitDate(relFile) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${relFile}"`, { cwd: repoRoot, encoding: 'utf8' }).trim()
    return out ? out.slice(0, 10) : null // YYYY-MM-DD
  } catch { return null }
}

const dates = {}
for (const libId of LIBS) {
  const mod = await import(`file://${resolve(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
  for (const e of mod.LIBRARY_ENTRY_META) {
    // The entry's date = the most recent last-commit across its 3 per-lang data files.
    let max = null
    for (const lang of LANGS) {
      const d = gitDate(`src/data/libraries/${libId}/entries/${lang}/${e.id}.js`)
      if (d && (!max || d > max)) max = d
    }
    if (max) dates[e.id] = max
  }
}

const out = {}
for (const k of Object.keys(dates).sort()) out[k] = dates[k]
writeFileSync(resolve(repoRoot, 'src/data/entryDates.json'), JSON.stringify(out, null, 0) + '\n')
console.log(`[entry-dates] wrote ${Object.keys(out).length} entry dates to src/data/entryDates.json`)
