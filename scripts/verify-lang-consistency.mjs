// Cross-lang consistency guard. Offline (no network). For each entry, the
// `studies[]` {pmid, title} sequence must be identical across hu/en/pl —
// only tag/tagText/finding are translated. Exits 1 on any drift.
//
// Run: node scripts/verify-lang-consistency.mjs [--lib <id>] [--entry <slug>]

function toSeq(studies) {
  const arr = Array.isArray(studies) ? studies : []
  return arr.map(s => ({
    pmid: String(s?.pmid ?? '').trim(),
    title: String(s?.title ?? '').trim(),
  }))
}

// Compare en and pl against hu (reference). Returns { ok, diffs }.
// Diff: { lang, index, field: 'count'|'pmid'|'title', hu, other }.
// For 'count', index = -1 and hu/other are the array lengths.
export function compareEntryStudies({ hu, en, pl }) {
  const ref = toSeq(hu)
  const diffs = []
  for (const lang of ['en', 'pl']) {
    const other = toSeq(lang === 'en' ? en : pl)
    if (other.length !== ref.length) {
      diffs.push({ lang, index: -1, field: 'count', hu: ref.length, other: other.length })
    }
    const n = Math.min(ref.length, other.length)
    for (let i = 0; i < n; i++) {
      if (other[i].pmid !== ref[i].pmid) {
        diffs.push({ lang, index: i, field: 'pmid', hu: ref[i].pmid, other: other[i].pmid })
      }
      if (other[i].title !== ref[i].title) {
        diffs.push({ lang, index: i, field: 'title', hu: ref[i].title, other: other[i].title })
      }
    }
  }
  return { ok: diffs.length === 0, diffs }
}
