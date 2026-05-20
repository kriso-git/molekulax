import { readFileSync, writeFileSync } from 'fs'

const src = process.argv[2] || 'C:/Users/trolo/AppData/Local/Temp/seansnotes.md'
const dst = process.argv[3] || 'C:/Users/trolo/AppData/Local/Temp/sean-anecdote-bundles.json'

const text = readFileSync(src, 'utf8')
const paragraphs = text.split('\n\n').map(p => p.trim()).filter(Boolean)

const isAnecdotes = (p) => /^Anecdotes\/Notes\?\s*$/i.test(p)
const isWhatHeader = (p) => /^What does it do\?\s*$/i.test(p)
const isUseCases = (p) => /^Use Cases\?\s*$/i.test(p)
const isAllForReports = (p) => /^For all researcher reports AND anecdotes\/what to expect:?\s*$/i.test(p)
const isCheckSite = (p) => /^Check this site:?\s/i.test(p)
const isMechanism = (p) => /^Mechanism\??\s*$/i.test(p)
const isStudies = (p) => /^Studies\??\s*$/i.test(p)
const isSourcing = (p) => /^Sourcing:?\s/i.test(p)
const isDecorative = (p) => /^[-—–_\s★☆⋆✦✶✴︎˚｡⋆.°✩✮ ⋆ ˚｡𖦹⊹꒰꒱ฺ̀̈̇⏤꒰ׄ ◕ ◞ ✦‧⁺໒꒳꒱⁺⊹⁺]+$/.test(p) || /^—+$/.test(p)

const bundles = []

for (let i = 0; i < paragraphs.length; i++) {
  if (!isAnecdotes(paragraphs[i])) continue

  // Forward-collect anecdote paragraphs
  const anecdotes = []
  for (let j = i + 1; j < paragraphs.length; j++) {
    const p = paragraphs[j]
    if (isAllForReports(p) || isCheckSite(p)) break
    if (isWhatHeader(p) || isUseCases(p) || isAnecdotes(p) || isMechanism(p) || isStudies(p)) break
    if (isSourcing(p)) break
    if (isDecorative(p)) continue
    anecdotes.push(p)
    if (anecdotes.length >= 6) break
  }
  if (anecdotes.length === 0) continue

  // Lookback 15 paragraphs to capture compound header + subtitle + sourcing
  const contextBefore = []
  for (let k = i - 1; k >= Math.max(0, i - 15); k--) {
    const p = paragraphs[k]
    if (isDecorative(p)) continue
    contextBefore.unshift(p)
    if (contextBefore.length >= 12) break
  }

  bundles.push({
    blockId: bundles.length,
    paraIdx: i,
    contextBefore,
    anecdoteText: anecdotes.join('\n\n'),
  })
}

writeFileSync(dst, JSON.stringify(bundles, null, 2))
const totalChars = bundles.reduce((sum, b) => sum + b.anecdoteText.length, 0)
console.log(`Extracted ${bundles.length} anecdote bundles -> ${dst}`)
console.log(`Total anecdote content: ${(totalChars / 1024).toFixed(1)} KB`)
console.log(`Total bundle file: ${(JSON.stringify(bundles).length / 1024).toFixed(1)} KB`)
