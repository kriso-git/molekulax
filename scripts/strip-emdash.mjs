// One-off + re-runnable guard: replace every em-dash (U+2014 —) with an en-dash
// (U+2013 –, the Hungarian "gondolatjel") across the app source. The user wants ZERO
// em-dashes anywhere on the site (they read as AI-written). en-dash keeps the same
// spacing and is the correct HU dash; numeric ranges already use it. Scoped to src/
// only — scripts/ intentionally keeps em-dash inside hyphen-normalising char classes.
// Uses fs (not the Edit tool) to avoid ASCII->curly-quote corruption on the data files.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC = resolve(__dirname, '..', 'src')
const EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.css', '.json', '.md', '.html'])
const EM = '—', EN = '–'

let files = 0, hits = 0
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) { walk(p); continue }
    if (!EXTS.has(extname(p))) continue
    const before = readFileSync(p, 'utf8')
    if (!before.includes(EM)) continue
    const count = before.split(EM).length - 1
    writeFileSync(p, before.split(EM).join(EN))
    files++; hits += count
    console.log(`  ${count.toString().padStart(3)}  ${p.replace(SRC, 'src')}`)
  }
}
walk(SRC)
console.log(`\n[strip-emdash] replaced ${hits} em-dash -> en-dash across ${files} file(s)`)
