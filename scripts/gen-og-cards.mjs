// LOCAL generator for per-compound Open Graph / social cards (layout C: left accent
// band, big name + 2-line desc on the left, compound vial on the right, dark theme).
// One 1200x630 JPEG per compound -> public/og/<id>.jpg, committed (so the baked-in font
// renders identically everywhere and Vercel does no image work). The prerender wires
// og:image/twitter:image per entry. Re-run after content/vial changes:
//   node scripts/gen-og-cards.mjs
import sharp from 'sharp'
import { existsSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const PUB = resolve(repoRoot, 'public')
const OUT = resolve(PUB, 'og')
const W = 1200, H = 630, BG = '#0a0a1e'
const LIBS = ['peptides', 'nootropics', 'performance', 'pharmaceutical']

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
function wrap(s, n, max = 2) {
  const words = String(s).split(/\s+/)
  const lines = []
  let cur = ''
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > n) { if (cur) lines.push(cur.trim()); cur = w } else cur += ' ' + w
  }
  if (cur.trim()) lines.push(cur.trim())
  return lines.slice(0, max)
}
// Big name: scale font + wrap so long names (MENT (Trestolone) ...) stay on the card.
function nameLayout(name) {
  if (name.length <= 13) return { size: 92, lines: [name] }
  if (name.length <= 22) return { size: 60, lines: [name] }
  const lines = wrap(name, 22, 2)
  return { size: 52, lines }
}

function cardSvg({ name, accent, descLines, libUpper }) {
  const nl = nameLayout(name)
  const nameY = nl.lines.length > 1 ? 250 : 290
  const nameTspans = nl.lines.map((l, i) => `<tspan x="92" dy="${i === 0 ? 0 : nl.size + 6}">${esc(l)}</tspan>`).join('')
  const descY = nameY + (nl.lines.length > 1 ? nl.size + 40 : 56)
  const descTspans = descLines.map((l, i) => `<text x="92" y="${descY + i * 44}" font-family="Arial" font-size="32" fill="#9ca3af">${esc(l)}</text>`).join('')
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="g" cx="78%" cy="50%" r="42%"><stop offset="0%" stop-color="${accent}" stop-opacity="0.30"/><stop offset="100%" stop-color="${accent}" stop-opacity="0"/></radialGradient></defs>` +
    `<rect width="${W}" height="${H}" fill="${BG}"/><rect width="${W}" height="${H}" fill="url(#g)"/>` +
    `<rect x="0" y="0" width="46" height="${H}" fill="${accent}"/>` +
    `<text x="92" y="74" font-family="Arial" font-size="24" fill="#9ca3af">MolekulaX · Farmakológiai edukáció</text>` +
    `<text x="92" y="${nameY}" font-family="Arial" font-size="${nl.size}" font-weight="800" fill="#ffffff">${nameTspans}</text>` +
    descTspans +
    `<circle cx="100" cy="552" r="7" fill="${accent}"/><text x="118" y="560" font-family="Arial" font-size="24" font-weight="700" letter-spacing="3" fill="${accent}">${esc(libUpper)}</text>` +
    `</svg>`
}

function resolveVial(e) {
  // entry.image is like "/peptides/bpc-157.png"; fall back to the molecule render.
  if (e.image && existsSync(resolve(PUB, '.' + e.image))) return resolve(PUB, '.' + e.image)
  const mol = resolve(PUB, 'molecules', `${e.id}.png`)
  if (existsSync(mol)) return mol
  return null
}

mkdirSync(OUT, { recursive: true })
const topMod = await import(`file://${resolve(repoRoot, 'src/data/libraries/index.js').replace(/\\/g, '/')}`)
const libNames = Object.fromEntries(topMod.listLibraries().map((l) => [l.id, l.name.hu]))
let made = 0, noVial = 0
for (const libId of LIBS) {
  const mod = await import(`file://${resolve(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
  const libUpper = (libNames[libId] || libId).toUpperCase()
  for (const e of mod.LIBRARY_ENTRY_META) {
    const accent = e.accentColor || '#818cf8'
    const sd = typeof e.shortDesc === 'string' ? e.shortDesc : (e.shortDesc?.hu || '')
    const descLines = wrap(sd, 34, 2)
    const svg = cardSvg({ name: e.name, accent, descLines, libUpper })
    let base = sharp(Buffer.from(svg))
    const vialPath = resolveVial(e)
    if (vialPath) {
      const vial = await sharp(vialPath).resize({ height: 440, fit: 'inside' }).toBuffer()
      const vm = await sharp(vial).metadata()
      const left = Math.round(W - 70 - vm.width)
      const top = Math.round((H - vm.height) / 2)
      base = sharp(await base.png().toBuffer()).composite([{ input: vial, left, top }])
    } else { noVial++ }
    await base.jpeg({ quality: 82, mozjpeg: true }).toFile(resolve(OUT, `${e.id}.jpg`))
    made++
  }
}
console.log(`[og-cards] wrote ${made} cards to public/og/ (${noVial} text-only, no vial image)`)
