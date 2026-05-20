import { readFileSync, writeFileSync } from 'fs'

const mappingPath = 'C:/Users/trolo/AppData/Local/Temp/sean-anecdote-mapping.json'
const bundlesPath = 'C:/Users/trolo/AppData/Local/Temp/sean-anecdote-bundles.json'
const inventoryPath = 'C:/Users/trolo/AppData/Local/Temp/molekulax-entry-inventory.json'

const mapping = JSON.parse(readFileSync(mappingPath, 'utf8'))
const bundles = JSON.parse(readFileSync(bundlesPath, 'utf8'))
const inventory = JSON.parse(readFileSync(inventoryPath, 'utf8'))

const bundleById = new Map()
for (const b of bundles) bundleById.set(b.blockId, b)

const batches = { peptides: [], nootropics: [], performance: [], pharmaceutical: [] }
const seenPerLib = { peptides: new Set(), nootropics: new Set(), performance: new Set(), pharmaceutical: new Set() }

for (const m of mapping.matched) {
 if (!batches[m.library]) continue
 if (seenPerLib[m.library].has(m.entryId)) continue
 // Pick the longest bundle if duplicate (Sean often updates)
 const dups = mapping.matched.filter(x => x.library === m.library && x.entryId === m.entryId)
 const best = dups
 .map(d => ({ d, bundle: bundleById.get(d.blockId) }))
 .filter(x => x.bundle)
 .sort((a, b) => b.bundle.anecdoteText.length - a.bundle.anecdoteText.length)[0]
 if (!best) continue
 const entryMeta = inventory[m.library]?.find(e => e.id === m.entryId)
 batches[m.library].push({
 entryId: m.entryId,
 name: entryMeta?.name || m.compoundFromSean,
 shortDescEn: entryMeta?.shortDescEn || '',
 compoundFromSean: m.compoundFromSean,
 confidence: m.confidence,
 rawAnecdote: best.bundle.anecdoteText,
 })
 seenPerLib[m.library].add(m.entryId)
}

for (const lib of Object.keys(batches)) {
 const outPath = `C:/Users/trolo/AppData/Local/Temp/sean-anecdote-batch-${lib}.json`
 writeFileSync(outPath, JSON.stringify(batches[lib], null, 2))
 const chars = batches[lib].reduce((sum, e) => sum + e.rawAnecdote.length, 0)
 console.log(`${lib}: ${batches[lib].length} entries, raw content ${(chars / 1024).toFixed(1)} KB -> ${outPath}`)
}
