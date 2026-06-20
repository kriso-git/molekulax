// Visual identity gate. `--mode baseline` captures PNGs of the current site into
// scripts/.visual-baseline/. `--mode compare` re-captures and pixel-diffs against
// the baseline; exits 1 if any surface differs beyond THRESHOLD. Animation is
// neutralized (FREEZE_CSS + reduced-motion + hidden canvas/video) so only real
// content/layout changes register. Spawns its own `vite preview` (needs a prior build).
import puppeteer from 'puppeteer'
import { spawn, spawnSync } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'
import { PNG } from 'pngjs'
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const PORT = 4396
const BASE = `http://127.0.0.1:${PORT}`
const DIR = join(process.cwd(), 'scripts', '.visual-baseline')
const THRESHOLD = 0.006 // 0.6% — tolerate sub-pixel AA after neutralizing motion
const argv = process.argv.slice(2)
const mode = argv[argv.indexOf('--mode') + 1] || 'compare'
const SURFACES = [
  { label: 'home', before: '/', after: '/' },
  { label: 'entry-bpc157', before: '/#entry/peptides/bpc-157', after: '/peptidek/bpc-157' },
  { label: 'entry-semax', before: '/#entry/nootropics/semax', after: '/nootropikumok/semax' },
  { label: 'entry-testo', before: '/#entry/performance/testosterone-info', after: '/teljesitmenyfokozok/testosterone-info' },
]
const FREEZE_CSS = `*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}
canvas,video{visibility:hidden!important}`

function startPreview() { return spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], { stdio: 'ignore', shell: true }) }
function stopPreview(c) { if (!c) return; if (process.platform === 'win32' && c.pid) spawnSync('taskkill', ['/pid', String(c.pid), '/T', '/F'], { stdio: 'ignore' }); else c.kill('SIGTERM') }
async function waitForServer(url, tries = 60) { for (let i = 0; i < tries; i++) { try { if ((await fetch(url)).ok) return true } catch {} await sleep(500) } return false }
function diffRatio(aBuf, bBuf) { const a = PNG.sync.read(aBuf), b = PNG.sync.read(bBuf); if (a.width !== b.width || a.height !== b.height) return 1; let d = 0; for (let i = 0; i < a.data.length; i += 4) { if (Math.abs(a.data[i] - b.data[i]) > 16 || Math.abs(a.data[i + 1] - b.data[i + 1]) > 16 || Math.abs(a.data[i + 2] - b.data[i + 2]) > 16) d++ } return d / (a.width * a.height) }

mkdirSync(DIR, { recursive: true })
const preview = startPreview()
if (!(await waitForServer(`${BASE}/`, 60))) { console.error('[visual] preview not up (run npm run build first)'); stopPreview(preview); process.exit(1) }
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'] })
let worst = 0
for (const s of SURFACES) {
  for (const vp of [{ tag: 'desk', w: 1280, h: 1400 }, { tag: 'mob', w: 390, h: 1600 }]) {
    const page = await browser.newPage()
    await page.setViewport({ width: vp.w, height: vp.h })
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
    const url = `${BASE}${mode === 'baseline' ? s.before : s.after}`
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
    await sleep(2000)
    await page.addStyleTag({ content: FREEZE_CSS })
    await sleep(400)
    const shot = await page.screenshot({ fullPage: false })
    await page.close()
    const fp = join(DIR, `${s.label}-${vp.tag}.png`)
    if (mode === 'baseline') { writeFileSync(fp, shot); console.log(`baseline ${s.label}-${vp.tag}`) }
    else { if (!existsSync(fp)) { console.error(`[visual] missing baseline ${fp}`); worst = 1; continue } const r = diffRatio(readFileSync(fp), shot); worst = Math.max(worst, r); console.log(`[${r <= THRESHOLD ? 'OK' : 'DIFF'}] ${s.label}-${vp.tag}  ${(r * 100).toFixed(3)}%`) }
  }
}
await browser.close(); stopPreview(preview)
if (mode === 'compare') { console.log(worst <= THRESHOLD ? '[visual] IDENTICAL (within threshold)' : `[visual] CHANGED ${(worst * 100).toFixed(3)}%`); process.exit(worst <= THRESHOLD ? 0 : 1) }
process.exit(0)
