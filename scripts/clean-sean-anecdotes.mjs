import { readFileSync, writeFileSync } from 'fs'

const mappingPath = process.argv[2] || 'C:/Users/trolo/AppData/Local/Temp/sean-anecdote-mapping.json'
const bundlesPath = process.argv[3] || 'C:/Users/trolo/AppData/Local/Temp/sean-anecdote-bundles.json'
const outPath = process.argv[4] || 'C:/Users/trolo/AppData/Local/Temp/sean-anecdotes-cleaned-en.json'

const mapping = JSON.parse(readFileSync(mappingPath, 'utf8'))
const bundles = JSON.parse(readFileSync(bundlesPath, 'utf8'))

const bundleById = new Map()
for (const b of bundles) {
 bundleById.set(b.blockId, b)
}

// Sean-ism cleanup patterns. Order matters — apply most-specific first.
const CLEANUP_PATTERNS = [
 // Sales-mention sentences (whole sentences to drop)
 [/[^.!?]*\b(RUO|Kimera Chems?|Strate Labs?|Mog Labs?|PCTZONE|Exceed Enhancement|Code ['"](Sean|Scientific)['"])\b[^.!?]*[.!?]\s*/gi, ''],
 // Sales-mention paragraphs about sourcing
 [/^.*\b(RUO('s)?|Kimera Chems?|Strate Labs?|Mog Labs?) (offers|sells|stocks|provides|has).*$/gim, ''],
 // URL removal
 [/https?:\/\/[^\s)]+/g, ''],
 // Common Sean idioms → neutral tone
 [/\bmy research subject\b/gi, 'users'],
 [/\bmy RS\b/gi, 'users'],
 [/\bMy RS\b/g, 'Users'],
 [/\bMy research subject\b/g, 'Users'],
 [/\bMy research friends?\b/gi, 'others in the community'],
 [/\bRS('s)?\b/g, (match) => match.endsWith("'s") ? "users'" : 'users'],
 [/\bI('ve)? (used|given|administered|seen|noticed|found|tried|tested) it on (my )?(research )?subjects?\b/gi, 'anecdotal reports describe'],
 [/\bI('ve)? (used|given|administered|seen|noticed|found|tried|tested)\b/gi, 'users have'],
 [/\bI ?(am|m) (using|administering|running)\b/gi, 'users are using'],
 [/\bI personally\b/gi, 'community accounts'],
 [/\bI find\b/gi, 'users find'],
 [/\bI (recommend|advise|suggest)\b/gi, 'commonly recommended'],
 [/\bIn my experience\b/gi, 'In community experience'],
 [/\bIME\b/g, 'in community experience'],
 [/\bmy subject('s)?\b/gi, 'users'],
 [/\bmy friends? who('ve)? tried\b/gi, 'community accounts describe'],
 // "DYOR" idiom — keep but acknowledge
 [/\bDYOR\b!?/g, 'do your own research'],
 // "researchers report" stays neutral, no replacement
 // Specific compound advertising
 [/\b(Code ['"](Sean|Scientific)['"](?:\s+at\s+checkout!?)?)/g, ''],
 // Parenthetical sales notes
 [/\([^)]*(Code ['"](Sean|Scientific)['"]|RUO|Kimera|PCTZONE)[^)]*\)/gi, ''],
 // Discord/Patreon/personal calls
 [/\b(my Discord|join my Discord)[^.!?]*[.!?]\s*/gi, ''],
 // Strip leading/trailing whitespace within paragraph
]

function cleanText(text) {
 let s = text
 for (const [pat, repl] of CLEANUP_PATTERNS) {
 s = s.replace(pat, repl)
 }
 // Normalize whitespace
 s = s.replace(/\n{3,}/g, '\n\n').replace(/[ \t]+/g, ' ').replace(/ \n/g, '\n').replace(/\n /g, '\n')
 // Drop empty paragraphs (multi-newline → double-newline)
 s = s.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 20).join('\n\n')
 // Truncate at 1200 chars — keep first paragraph + last sentence cap
 if (s.length > 1200) {
 const paras = s.split(/\n\s*\n/)
 let truncated = ''
 for (const p of paras) {
 if ((truncated + '\n\n' + p).length > 1200) break
 truncated += (truncated ? '\n\n' : '') + p
 }
 s = truncated || s.slice(0, 1200)
 }
 return s.trim()
}

// Group by entryId — pick the longest cleaned anecdote per entry
const grouped = {}
for (const m of mapping.matched) {
 const bundle = bundleById.get(m.blockId)
 if (!bundle) continue
 const cleaned = cleanText(bundle.anecdoteText)
 if (cleaned.length < 80) continue // skip too-short
 const key = `${m.library}:${m.entryId}`
 if (!grouped[key] || cleaned.length > grouped[key].anecdote_en.length) {
 grouped[key] = {
 library: m.library,
 entryId: m.entryId,
 anecdote_en: cleaned,
 compoundFromSean: m.compoundFromSean,
 confidence: m.confidence,
 blockId: m.blockId,
 }
 }
}

const out = Object.values(grouped).sort((a, b) => a.library.localeCompare(b.library) || a.entryId.localeCompare(b.entryId))
writeFileSync(outPath, JSON.stringify(out, null, 2))
const totalChars = out.reduce((sum, e) => sum + e.anecdote_en.length, 0)
const byLib = {}
for (const e of out) byLib[e.library] = (byLib[e.library] || 0) + 1
console.log(`Cleaned ${out.length} unique entries -> ${outPath}`)
console.log(`Total cleaned content: ${(totalChars / 1024).toFixed(1)} KB (avg ${Math.round(totalChars / out.length)} chars/entry)`)
console.log(`Per library:`, byLib)
