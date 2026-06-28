// Build-time llms.txt — a curated markdown map of the libraries + every compound (name,
// URL, one-line description) for AI answer engines (ChatGPT / Perplexity / Claude). Same
// enumeration as the sitemap; wired into `build` so it stays in sync. HU (primary audience);
// the per-page prerendered content already serves EN/PL to JS-free AI crawlers.
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { LIB_SLUGS } from '../src/seo/urls.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const ORIGIN = 'https://molekulax.hu'
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical', 'hairskin']

const oneLine = (s) => String(s).replace(/\s+/g, ' ').trim()

const topMod = await import(`file://${resolve(repoRoot, 'src/data/libraries/index.js').replace(/\\/g, '/')}`)
const libNames = Object.fromEntries(topMod.listLibraries().map((l) => [l.id, l.name.hu]))

export async function buildLlms() {
  let out = '# MolekulaX\n\n'
  out += '> Farmakológiai edukáció tudományos alapon: peptidek, nootropikumok, teljesítményfokozók és gyógyszerek hatásmechanizmusa, farmakokinetikája és kutatási háttere, forrás-igazolt (PubMed/FDA/EMA/PubChem) alapon. Edukatív tartalom, nem orvosi tanács. HU/EN/PL nyelven.\n\n'
  for (const libId of LIBS) {
    const mod = await import(`file://${resolve(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
    out += `## ${libNames[libId] || libId}\n\n`
    out += `${ORIGIN}/${LIB_SLUGS[libId].hu}\n\n`
    for (const e of mod.LIBRARY_ENTRY_META) {
      const desc = typeof e.shortDesc === 'string' ? e.shortDesc : (e.shortDesc?.hu || '')
      const url = `${ORIGIN}/${LIB_SLUGS[libId].hu}/${e.id}`
      out += `- [${oneLine(e.name)}](${url})${desc ? ': ' + oneLine(desc) : ''}\n`
    }
    out += '\n'
  }
  return out
}

const _argv1Url = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : null
if (_argv1Url && import.meta.url === _argv1Url) {
  const out = await buildLlms()
  writeFileSync(resolve(repoRoot, 'public/llms.txt'), out)
  const lines = out.split('\n').filter((l) => l.startsWith('- ')).length
  console.log(`[llms] wrote public/llms.txt (${lines} compounds)`)
}
