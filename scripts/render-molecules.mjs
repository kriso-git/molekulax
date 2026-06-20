// Offline render of the per-nootropic 3D chemical-structure loops into seamless
// webm files (+ a still poster .jpg each). Serves scripts/molecule-recorder.html,
// drives it headless, encodes via WebCodecs (deterministic, smooth at any fps).
//
//   node scripts/render-molecules.mjs            # all molecules in public/mol3d/
//   ONLY=modafinil node scripts/render-molecules.mjs   # one (pilot)
//
// Job list = every public/mol3d/<id>.json. Output → public/mol-viz/<id>.{webm,jpg}.

import { createServer } from 'node:http'
import { readFileSync, mkdirSync, writeFileSync, statSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import puppeteer from 'puppeteer'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUB = join(__dirname, '..', 'public')
const HTML = readFileSync(join(__dirname, 'molecule-recorder.html'), 'utf8')
const PORT = 4401
const LOOP = 6
const W = parseInt(process.env.W || '512', 10)
const H = parseInt(process.env.H || '512', 10)
const FPS = parseInt(process.env.FPS_OUT || '30', 10)
const ONLY = process.env.ONLY

const ids = readdirSync(join(PUB, 'mol3d'))
  .filter((f) => f.endsWith('.json'))
  .map((f) => f.replace(/\.json$/, ''))
  .filter((id) => !ONLY || id === ONLY)

const server = createServer((req, res) => {
  const path = decodeURIComponent(req.url.split('?')[0])
  if (path.startsWith('/mol3d/')) {
    try { const buf = readFileSync(join(PUB, path)); res.setHeader('Access-Control-Allow-Origin', '*'); res.writeHead(200, { 'Content-Type': 'application/json' }); res.end(buf) }
    catch { res.writeHead(404); res.end() }
    return
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(HTML)
})
await new Promise((r) => server.listen(PORT, '127.0.0.1', r))

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'],
})

const outDir = join(PUB, 'mol-viz')
mkdirSync(outDir, { recursive: true })
let fail = 0

for (const id of ids) {
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
  const url = `http://127.0.0.1:${PORT}/?mol=${encodeURIComponent(id)}&loop=${LOOP}&secs=${LOOP}&w=${W}&h=${H}&fps=${FPS}`
  process.stdout.write(`render ${id} ... `)
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
    await page.waitForFunction('window.__done === true || window.__err', { timeout: 90000 })
    const err = await page.evaluate(() => window.__err)
    if (err) throw new Error(err)
    const dataUrl = await page.evaluate(() => window.__webm)
    if (!dataUrl || !dataUrl.startsWith('data:video/webm')) throw new Error('no webm produced')
    const webmOut = join(outDir, `${id}.webm`)
    writeFileSync(webmOut, Buffer.from(dataUrl.split(',')[1], 'base64'))
    console.log(`OK (${(statSync(webmOut).size / 1024).toFixed(0)} KB)`)
  } catch (e) {
    console.log(`FAIL: ${e.message}${errors.length ? ' | ' + errors.slice(0, 2).join(' | ') : ''}`)
    fail++
  }
  await page.close()
}
server.close()

// poster pass
const FPORT = 4402
const fileServer = createServer((req, res) => {
  try {
    const p = join(PUB, decodeURIComponent(req.url.split('?')[0]))
    const buf = readFileSync(p)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.writeHead(200, { 'Content-Type': p.endsWith('.webm') ? 'video/webm' : 'application/octet-stream' })
    res.end(buf)
  } catch { res.writeHead(404); res.end() }
})
await new Promise((r) => fileServer.listen(FPORT, '127.0.0.1', r))
for (const id of ids) {
  const page = await browser.newPage()
  const src = `http://127.0.0.1:${FPORT}/mol-viz/${id}.webm`
  process.stdout.write(`poster ${id} ... `)
  try {
    await page.setContent(`<body style="margin:0"><video id="v" src="${src}" muted crossorigin="anonymous"></video><canvas id="c" width="${W}" height="${H}"></canvas></body>`, { waitUntil: 'load' })
    const data = await page.evaluate(async (WW, HH) => {
      const v = document.getElementById('v'), c = document.getElementById('c')
      await new Promise((res, rej) => { v.addEventListener('loadeddata', res, { once: true }); v.addEventListener('error', () => rej(new Error('video load error')), { once: true }); v.load() })
      await new Promise((res) => { v.addEventListener('seeked', res, { once: true }); v.currentTime = 1.5 })
      c.getContext('2d').drawImage(v, 0, 0, WW, HH)
      return c.toDataURL('image/jpeg', 0.88)
    }, W, H)
    if (data && data.startsWith('data:image/jpeg')) { writeFileSync(join(outDir, `${id}.jpg`), Buffer.from(data.split(',')[1], 'base64')); console.log('OK') }
    else { console.log('FAIL: no poster'); fail++ }
  } catch (e) { console.log(`FAIL: ${e.message}`); fail++ }
  await page.close()
}
fileServer.close()
await browser.close()
console.log(fail ? `\n${fail} job(s) FAILED` : '\nALL RENDERS OK')
process.exit(fail ? 1 : 0)
