// Offline render of the per-category card-visual loops into seamless webm files
// (+ a still poster .jpg each). Serves scripts/card-recorder.html, drives it
// headless, captures each motif via MediaRecorder.
//
//   node scripts/render-card-motifs.mjs
//
// The job list is DERIVED from src/components/library/cardMotifMap.js (the single
// source of truth) — each `lib:cat -> motif` key, with the colour looked up from
// the library's effects data. Re-run whenever the map or a motif scene changes.

import { createServer } from 'node:http'
import { readFileSync, mkdirSync, writeFileSync, statSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imp = (rel) => import(pathToFileURL(join(__dirname, rel)).href)

const { CARD_MOTIFS } = await imp('../src/components/library/cardMotifMap.js')

// library id -> { id -> colour }. Most libraries key the motif by effect-category
// (effects.js EFFECT_CATEGORIES, `color`). Performance is special: its face renders
// the chemistry-class cards (categories.js CATEGORIES, `accent`), not the effect grid.
const byColor = (arr) => Object.fromEntries(arr.map((c) => [c.id, c.color]))
const byAccent = (arr) => Object.fromEntries(arr.map((c) => [c.id, c.accent]))
const COLOR_OF = {
  nootropics: byColor((await imp('../src/data/libraries/nootropics/effects.js')).EFFECT_CATEGORIES),
  peptides: byColor((await imp('../src/data/libraries/peptides/effects.js')).EFFECT_CATEGORIES),
  pharmaceutical: byColor((await imp('../src/data/libraries/pharmaceutical/effects.js')).EFFECT_CATEGORIES),
  performance: byAccent((await imp('../src/data/libraries/performance/categories.js')).CATEGORIES),
  hairskin: byAccent((await imp('../src/data/libraries/hairskin/categories.js')).SUBCATEGORIES),
}

// Build the job list from the map: { lib, id, motif, color }.
// ONLY=<lib> (env) restricts the render to one library (handy after a tweak).
const ONLY = process.env.ONLY
const JOBS = Object.entries(CARD_MOTIFS).map(([key, motif]) => {
  const [lib, id] = key.split(':')
  const color = COLOR_OF[lib] && COLOR_OF[lib][id]
  if (!color) throw new Error(`No colour for "${id}" in library "${lib}" (import/map missing?)`)
  return { lib, id, motif, color }
}).filter((j) => !ONLY || j.lib === ONLY)

const HTML = readFileSync(join(__dirname, 'card-recorder.html'), 'utf8')
const PORT = 4399
const LOOP = 6 // seconds, seamless
// Output resolution. Kept moderate so the headless SwiftShader render sustains
// ~30fps during MediaRecorder capture (1200x480 dropped the heavy scenes to
// ~17-22fps → choppy) and so runtime decode stays light. Override with W=/H=.
const OUT_W = parseInt(process.env.W || '900', 10)
const OUT_H = parseInt(process.env.H || '360', 10)
const OUT_FPS = parseInt(process.env.FPS_OUT || '60', 10) // deterministic encode → smooth at any fps

const server = createServer((req, res) => { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(HTML) })
await new Promise((r) => server.listen(PORT, '127.0.0.1', r))

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'],
})

let fail = 0
for (const job of JOBS) {
  const outDir = join(__dirname, '..', 'public', 'card-viz', job.lib)
  mkdirSync(outDir, { recursive: true })
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
  const url = `http://127.0.0.1:${PORT}/?motif=${job.motif}&color=${encodeURIComponent(job.color)}&loop=${LOOP}&secs=${LOOP}&w=${OUT_W}&h=${OUT_H}&fps=${OUT_FPS}`
  process.stdout.write(`render ${job.lib}/${job.id} (${job.motif}) ... `)
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
    await page.waitForFunction('window.__done === true || window.__err', { timeout: 90000 })
    const err = await page.evaluate(() => window.__err)
    if (err) throw new Error(err)
    const dataUrl = await page.evaluate(() => window.__webm)
    if (!dataUrl || !dataUrl.startsWith('data:video/webm')) throw new Error('no webm produced')
    const webmOut = join(outDir, `${job.id}.webm`)
    writeFileSync(webmOut, Buffer.from(dataUrl.split(',')[1], 'base64'))
    console.log(`OK (${(statSync(webmOut).size / 1024).toFixed(0)} KB)`)
  } catch (e) {
    console.log(`FAIL: ${e.message}${errors.length ? ' | ' + errors.slice(0, 2).join(' | ') : ''}`)
    fail++
  }
  await page.close()
}

server.close()

// --- poster pass: grab a still frame from each webm (no preserveDrawingBuffer
// needed, so the webm render above stays smooth) ---
const PUB = join(__dirname, '..', 'public')
const fileServer = createServer((req, res) => {
  try {
    const p = join(PUB, decodeURIComponent(req.url.split('?')[0]))
    res.setHeader('Access-Control-Allow-Origin', '*') // so the canvas isn't tainted
    res.writeHead(200, { 'Content-Type': p.endsWith('.webm') ? 'video/webm' : 'application/octet-stream' })
    res.end(readFileSync(p))
  } catch { res.writeHead(404); res.end() }
})
const FPORT = 4400
await new Promise((r) => fileServer.listen(FPORT, '127.0.0.1', r))
for (const job of JOBS) {
  const page = await browser.newPage()
  const src = `http://127.0.0.1:${FPORT}/card-viz/${job.lib}/${job.id}.webm`
  process.stdout.write(`poster ${job.lib}/${job.id} ... `)
  try {
    await page.setContent(`<body style="margin:0"><video id="v" src="${src}" muted crossorigin="anonymous"></video><canvas id="c" width="${OUT_W}" height="${OUT_H}"></canvas></body>`, { waitUntil: 'load' })
    const data = await page.evaluate(async (W, H) => {
      const v = document.getElementById('v'), c = document.getElementById('c')
      await new Promise((res, rej) => { v.addEventListener('loadeddata', res, { once: true }); v.addEventListener('error', () => rej(new Error('video load error')), { once: true }); v.load() })
      await new Promise((res) => { v.addEventListener('seeked', res, { once: true }); v.currentTime = 1.5 })
      c.getContext('2d').drawImage(v, 0, 0, W, H)
      return c.toDataURL('image/jpeg', 0.9)
    }, OUT_W, OUT_H)
    if (data && data.startsWith('data:image/jpeg')) { writeFileSync(join(PUB, 'card-viz', job.lib, `${job.id}.jpg`), Buffer.from(data.split(',')[1], 'base64')); console.log('OK') }
    else { console.log('FAIL: no poster'); fail++ }
  } catch (e) { console.log(`FAIL: ${e.message}`); fail++ }
  await page.close()
}
fileServer.close()

await browser.close()
console.log(fail ? `\n${fail} job(s) FAILED` : '\nALL RENDERS OK')
process.exit(fail ? 1 : 0)
