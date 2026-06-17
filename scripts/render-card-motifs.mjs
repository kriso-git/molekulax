// Offline render of the per-category card-visual loops into seamless webm files.
// Serves scripts/card-recorder.html, drives it headless, captures each motif via
// MediaRecorder, writes public/card-viz/<library>/<categoryId>.webm.
//
//   node scripts/render-card-motifs.mjs
//
// Re-run whenever a motif or the category->motif/colour mapping changes.

import { createServer } from 'node:http'
import { readFileSync, mkdirSync, writeFileSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const HTML = readFileSync(join(__dirname, 'card-recorder.html'), 'utf8')
const PORT = 4399
const LOOP = 6 // seconds, seamless

// library -> [{ id, motif, color }]
const JOBS = {
  nootropics: [
    { id: 'racetams', motif: 'neural', color: '#fbbf24' },
    { id: 'modafinil-types', motif: 'plasma', color: '#7dd3fc' },
    { id: 'dopamine-motivation', motif: 'molecule', color: '#fb923c' },
    { id: 'bdnf-neuroplasticity', motif: 'dna', color: '#a78bfa' },
    { id: 'cholinergic-boosters', motif: 'atom', color: '#5eead4' },
  ],
}

const server = createServer((req, res) => { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(HTML) })
await new Promise((r) => server.listen(PORT, '127.0.0.1', r))

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'],
})

let fail = 0
for (const [lib, cats] of Object.entries(JOBS)) {
  const outDir = join(__dirname, '..', 'public', 'card-viz', lib)
  mkdirSync(outDir, { recursive: true })
  for (const c of cats) {
    const page = await browser.newPage()
    const errors = []
    page.on('pageerror', (e) => errors.push(String(e)))
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
    const url = `http://127.0.0.1:${PORT}/?motif=${c.motif}&color=${encodeURIComponent(c.color)}&loop=${LOOP}&secs=${LOOP}`
    process.stdout.write(`render ${lib}/${c.id} (${c.motif}) ... `)
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
      await page.waitForFunction('window.__done === true', { timeout: (LOOP + 25) * 1000 })
      const dataUrl = await page.evaluate(() => window.__webm)
      if (!dataUrl || !dataUrl.startsWith('data:video/webm')) throw new Error('no webm produced')
      const b64 = dataUrl.split(',')[1]
      const out = join(outDir, `${c.id}.webm`)
      writeFileSync(out, Buffer.from(b64, 'base64'))
      const kb = (statSync(out).size / 1024).toFixed(0)
      console.log(`OK (${kb} KB)`)
    } catch (e) {
      console.log(`FAIL: ${e.message}${errors.length ? ' | ' + errors.slice(0, 2).join(' | ') : ''}`)
      fail++
    }
    await page.close()
  }
}

await browser.close()
server.close()
console.log(fail ? `\n${fail} job(s) FAILED` : '\nALL RENDERS OK')
process.exit(fail ? 1 : 0)
