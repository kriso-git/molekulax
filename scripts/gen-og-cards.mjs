// LOCAL generator for per-compound Open Graph / social cards (layout C: left accent
// band, big name + 2-line desc on the left, compound vial on the right, dark theme).
// One 1200x630 JPEG per compound -> public/og/<id>.jpg, committed (so the baked-in font
// renders identically everywhere and Vercel does no image work). PLUS one card per VARIANT
// (form factor / ester) -> public/og/<id>__<routeId>.jpg, using that variant's own image
// (inhaler / oil-vial / water-vial) + routeLabel, so a shared variant link shows the right
// thing. The prerender wires og:image/twitter:image per entry + per variant. Re-run after
// content/vial changes:  node scripts/gen-og-cards.mjs
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
// Big name: scale font + wrap so even long names (MK-2866 (Ostarine, Enobosarm), MENT
// (Trestolone) – szintetikus androgén frame) render FULLY — never truncated — inside the
// left text column and never reach the vial on the right. Up to 3 lines; the wrap width
// rises as the font shrinks so the longest real names fit in <= 3 lines without dropping
// any word.
function nameLayout(name) {
  const n = name.length
  if (n <= 13) return { size: 80, lines: [name] }
  if (n <= 18) return { size: 56, lines: [name] }
  if (n <= 26) return { size: 46, lines: wrap(name, 19, 3) }
  if (n <= 40) return { size: 40, lines: wrap(name, 22, 3) }
  return { size: 34, lines: wrap(name, 28, 3) }
}

function cardSvg({ name, accent, descLines, libUpper }) {
  const nl = nameLayout(name)
  const nLines = nl.lines.length
  // Start the name block higher when it has more lines so the whole block stays vertically
  // balanced and the description never collides with a 3-line name.
  const nameY = nLines >= 3 ? 212 : (nLines === 2 ? 250 : 290)
  const step = nl.size + 6
  const nameTspans = nl.lines.map((l, i) => `<tspan x="92" dy="${i === 0 ? 0 : step}">${esc(l)}</tspan>`).join('')
  const descY = nameY + (nLines - 1) * step + 52 // 52px below the ACTUAL last name line
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

// Resolve an "/performance/foo.png"-style public path to an absolute file (or null).
function resolveImagePath(image) {
  if (image && existsSync(resolve(PUB, '.' + image))) return resolve(PUB, '.' + image)
  return null
}
function resolveVial(e) {
  // entry.image is like "/peptides/bpc-157.png"; fall back to the molecule render.
  const direct = resolveImagePath(e.image)
  if (direct) return direct
  const mol = resolve(PUB, 'molecules', `${e.id}.png`)
  if (existsSync(mol)) return mol
  return null
}

// Render an SVG card + (optionally) composite the compound vial on the right. Cap BOTH
// width and height so a wide image (pill clusters) can't reach the left text column;
// right-aligned ending at x=1150, the text column ends ~700 -> safe gap.
async function composeCard(svg, vialPath) {
  let base = sharp(Buffer.from(svg))
  if (vialPath) {
    const vial = await sharp(vialPath).resize({ width: 380, height: 470, fit: 'inside' }).toBuffer()
    const vm = await sharp(vial).metadata()
    const left = Math.round(1150 - vm.width)
    const top = Math.round((H - vm.height) / 2)
    base = sharp(await base.png().toBuffer()).composite([{ input: vial, left, top }])
  }
  return base.jpeg({ quality: 82, mozjpeg: true })
}

mkdirSync(OUT, { recursive: true })
const topMod = await import(`file://${resolve(repoRoot, 'src/data/libraries/index.js').replace(/\\/g, '/')}`)
const libNames = Object.fromEntries(topMod.listLibraries().map((l) => [l.id, l.name.hu]))
let made = 0, variantCards = 0, noVial = 0
for (const libId of LIBS) {
  const mod = await import(`file://${resolve(repoRoot, 'src/data/libraries', libId, 'index.js').replace(/\\/g, '/')}`)
  const libUpper = (libNames[libId] || libId).toUpperCase()
  for (const e of mod.LIBRARY_ENTRY_META) {
    const accent = e.accentColor || '#818cf8'
    const sd = typeof e.shortDesc === 'string' ? e.shortDesc : (e.shortDesc?.hu || '')
    const descLines = wrap(sd, 34, 2)
    const svg = cardSvg({ name: e.name, accent, descLines, libUpper })
    const vialPath = resolveVial(e)
    if (!vialPath) noVial++
    await (await composeCard(svg, vialPath)).toFile(resolve(OUT, `${e.id}.jpg`))
    made++

    // Per-variant cards: each form factor / ester carries its own image + routeLabel, so a
    // shared /<lib>/<id>/<routeId> link gets a card that actually matches the variant.
    let variants = []
    try {
      const em = await import(`file://${resolve(repoRoot, 'src/data/libraries', libId, 'entries', 'hu', `${e.id}.js`).replace(/\\/g, '/')}`)
      if (Array.isArray(em.default?.variants)) variants = em.default.variants
    } catch { /* entry without a HU data file -> base card only */ }
    for (const v of variants) {
      if (!v || !v.routeId) continue
      const vAccent = v.accentColor || accent
      const label = v.routeLabel && (v.routeLabel.hu || (typeof v.routeLabel === 'string' ? v.routeLabel : '')) || v.id || v.routeId
      const vDescLines = wrap(label, 34, 2)
      const vSvg = cardSvg({ name: e.name, accent: vAccent, descLines: vDescLines, libUpper })
      const vVial = resolveImagePath(v.image) || vialPath
      await (await composeCard(vSvg, vVial)).toFile(resolve(OUT, `${e.id}__${v.routeId}.jpg`))
      variantCards++
    }
  }
}
console.log(`[og-cards] wrote ${made} base + ${variantCards} variant cards to public/og/ (${noVial} text-only, no vial image)`)
