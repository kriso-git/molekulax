// THROWAWAY: validate Comparison v2 candidates against real entry data.
// For each comparison member: does the HU entry file exist? what keyInfo labels does it have?
// Then report literal label overlap across members (the real basis for an aligned table).
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const data = JSON.parse(readFileSync(join(root, 'docs/superpowers/specs/2026-06-22-comparison-v2-candidates.json'), 'utf8'))

function labelsOf(lib, id) {
  const p = join(root, 'src/data/libraries', lib, 'entries/hu', `${id}.js`)
  let txt
  try { txt = readFileSync(p, 'utf8') } catch { return null } // null = file missing
  const labels = []
  const re = /"label"\s*:\s*"([^"]+)"/g
  let m
  while ((m = re.exec(txt)) !== null) labels.push(m[1])
  return labels
}

function report(list, header) {
  console.log(`\n===== ${header} =====`)
  for (const c of list) {
    const members = c.members
    const per = members.map((mb) => ({ mb, labels: labelsOf(mb.lib, mb.id) }))
    const missing = per.filter((x) => x.labels === null).map((x) => `${x.mb.lib}/${x.mb.id}`)
    const present = per.filter((x) => x.labels !== null)
    let shared = []
    if (present.length === members.length && present.length > 0) {
      shared = present[0].labels.filter((l) => present.every((x) => x.labels.includes(l)))
    }
    const flag = missing.length ? '❌MISSING' : shared.length >= 3 ? '✅' : shared.length >= 1 ? '⚠️THIN' : '🚫ZERO'
    console.log(`${flag} ${c.slug}${c.crossLib ? ' [cross]' : ''} — shared(${shared.length}): [${shared.join(', ')}]${missing.length ? ' MISSING: ' + missing.join(', ') : ''}`)
  }
}

report(data.existing, 'EXISTING (3)')
report(data.new, 'NEW (31)')
