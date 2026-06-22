// Reusable mapping tool behind the Comparison "which compounds are worth comparing" (d) task.
// Reads each library's entries, groups by shared keyInfo-label overlap, and reports candidate
// clusters + an audit of the published COMPARISONS (member existence + shared-label count).
// Usage: node scripts/scan-comparison-candidates.mjs [--audit]
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { COMPARISONS } from '../src/seo/urls.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical']

function labelsOf(lib, id) {
  try {
    const txt = readFileSync(join(root, 'src/data/libraries', lib, 'entries/hu', `${id}.js`), 'utf8')
    const out = []; const re = /"label"\s*:\s*"([^"]+)"/g; let m
    while ((m = re.exec(txt))) out.push(m[1])
    return out
  } catch { return null }
}

function audit() {
  let bad = 0
  for (const c of COMPARISONS) {
    const per = c.members.map((m) => ({ m, labels: labelsOf(m.lib, m.id) }))
    const missing = per.filter((x) => x.labels === null).map((x) => `${x.m.lib}/${x.m.id}`)
    let shared = 0
    if (!missing.length) shared = per[0].labels.filter((l) => per.every((x) => x.labels.includes(l))).length
    const ok = !missing.length && (c.dimensions ? true : shared >= 3)
    if (!ok) bad++
    console.log(`${ok ? 'OK ' : 'BAD'} ${c.slug}${c.crossLib ? ' [cross]' : ''} shared=${shared}${missing.length ? ' MISSING ' + missing.join(',') : ''}`)
  }
  console.log(bad ? `\n${bad} comparison(s) need attention` : '\nAll published comparisons valid')
  return bad
}

function suggest() {
  for (const lib of LIBS) {
    const dir = join(root, 'src/data/libraries', lib, 'entries/hu')
    const ids = readdirSync(dir).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3))
    const byLabelSet = new Map()
    for (const id of ids) {
      const labels = labelsOf(lib, id) || []
      const key = labels.slice().sort().join('|')
      if (!byLabelSet.has(key)) byLabelSet.set(key, [])
      byLabelSet.get(key).push(id)
    }
    console.log(`\n[${lib}] entries grouped by identical keyInfo-label set (candidates share rows):`)
    for (const [, group] of byLabelSet) if (group.length > 1) console.log('  ', group.join(', '))
  }
}

if (process.argv.includes('--audit')) process.exit(audit() ? 1 : 0)
else suggest()
