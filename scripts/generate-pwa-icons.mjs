// Phase 11 — Generate PWA icons (192, 512, maskable) from a single SVG source.
// Run once: `node scripts/generate-pwa-icons.mjs`.
//
// The maskable variant pads the source into a 320×320 inner area on a 512×512
// canvas, leaving a 20% safe-zone for Android's adaptive icon mask.

import sharp from 'sharp'
import { readFile } from 'node:fs/promises'

const svgPath = 'scripts/pwa-icon-source.svg'
const svg = await readFile(svgPath)

await sharp(svg).resize(192, 192).png().toFile('public/icon-192.png')
await sharp(svg).resize(512, 512).png().toFile('public/icon-512.png')

const innerBuf = await sharp(svg).resize(320, 320).png().toBuffer()
await sharp({
  create: { width: 512, height: 512, channels: 4, background: '#050505' },
})
  .composite([{ input: innerBuf, gravity: 'center' }])
  .png()
  .toFile('public/icon-maskable.png')

console.log('Generated: public/icon-192.png, public/icon-512.png, public/icon-maskable.png')
