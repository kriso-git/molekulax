// Headless render-smoke: loads the BUILT app on representative routes and fails if the
// React app does not mount, the error-boundary fallback renders, or any non-benign
// console/page error occurs. Verdict logic lives in smoke-classify.mjs (unit-tested).
//
// Modes:
//   --serve            spawn `vite preview` on PORT, render against it, tear down (default)
//   --url <baseUrl>    render against an already-running server (skips spawning)
//
// Requires a prior `npm run build` (vite preview serves dist/). Exit 0 iff every route
// passes; exit 1 on any failure or any launch/navigation error (never a false green).

import puppeteer from 'puppeteer'
import { spawn, spawnSync } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'
import { classifySmokeResult } from './smoke-classify.mjs'

const PORT = 4317
const argv = process.argv.slice(2)
const urlIdx = argv.indexOf('--url')
const SERVE = urlIdx < 0
const BASE = urlIdx >= 0 ? argv[urlIdx + 1] : `http://127.0.0.1:${PORT}`

// Each route exercises a distinct surface / B6-touched component.
const ROUTES = [
  { label: 'home — peptides face / CubeNavControls', lib: null, path: '/' },
  { label: 'gallery — nootropics (ChemicalFormulaPlaceholder)', lib: 'nootropics', path: '/' },
  { label: 'gallery — performance (PerformanceCategoryCards)', lib: 'performance', path: '/' },
  { label: 'gallery — pharmaceutical', lib: 'pharmaceutical', path: '/' },
  { label: 'entry — peptides/retatrutide (QualityGrid)', lib: null, path: '/peptidek/retatrutide' },
  { label: 'entry — nootropics/semax', lib: null, path: '/nootropikumok/semax' },
  { label: 'entry — performance/testosterone-info', lib: null, path: '/teljesitmenyfokozok/testosterone-info' },
]

async function waitForServer(url, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return true
    } catch {
      // not up yet
    }
    await sleep(500)
  }
  return false
}

// Tear down the spawned preview. On Windows `child.kill()` does not reach the
// vite grandchild (shell -> npx -> node), leaving an orphan that holds the port and
// would make the NEXT run silently test a stale build — so kill the whole tree.
function stopPreview(child) {
  if (!child) return
  try {
    if (process.platform === 'win32' && child.pid) {
      // spawnSync so the tree is gone BEFORE we process.exit() — otherwise the orphaned
      // vite keeps the port and the next run is blocked by the stale-port guard.
      spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' })
    } else {
      child.kill('SIGTERM')
    }
  } catch {
    /* best-effort */
  }
}

async function renderRoute(browser, route) {
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`))
  page.on('console', (m) => {
    if (m.type() !== 'error') return
    const t = m.text()
    // The browser logs a generic, URL-less "Failed to load resource ... 404"
    // console error. We assess 404s via the response handler instead (so we can
    // tell the benign Vercel-edge scripts apart from a real missing asset).
    if (/Failed to load resource.*404 \(Not Found\)/.test(t)) return
    errors.push(`console.error: ${t}`)
  })
  // Vercel Analytics + Speed Insights load /_vercel/insights|speed-insights/
  // script.js, which only exist on the Vercel edge → they 404 on localhost
  // (harmless, production serves them). Any OTHER 404 is a real missing asset.
  page.on('response', (r) => {
    if (r.status() === 404 && !/\/_vercel\//.test(r.url())) errors.push(`404: ${r.url()}`)
  })
  if (route.lib) {
    await page.evaluateOnNewDocument((lib) => {
      try {
        sessionStorage.setItem('molekulax:libraryId', lib)
      } catch {
        /* ignore */
      }
    }, route.lib)
  }
  let navOk = true
  try {
    await page.goto(BASE + route.path, { waitUntil: 'networkidle2', timeout: 30000 })
    await page.waitForFunction(
      "document.querySelector('#root') && document.querySelector('#root').children.length > 0",
      { timeout: 20000 }
    )
  } catch (e) {
    navOk = false
    errors.push(`nav/hydrate failure: ${e.message}`)
  }
  await sleep(1500) // settle lazy chunks (LibraryCube etc.)
  const data = await page.evaluate(() => {
    const root = document.querySelector('#root')
    return {
      rootChildCount: root ? root.children.length : 0,
      rootHtmlLength: root ? root.innerHTML.length : 0,
      fallbackPresent: !!document.querySelector('[data-error-boundary]'),
    }
  })
  await page.close()
  const verdict = classifySmokeResult({ ...data, errors })
  if (!navOk) verdict.ok = false
  return { route, data, verdict }
}

async function main() {
  let preview = null
  if (SERVE) {
    // Guard: refuse to run against a pre-existing server on PORT (stale preview) — that
    // would silently test the wrong build and invalidate the gate (incl. regression proof).
    if (await waitForServer(`${BASE}/`, 1)) {
      console.error(`[smoke] something already serves ${BASE} — free port ${PORT} first (stale 'vite preview'?).`)
      process.exit(1)
    }
    preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], {
      stdio: 'ignore',
      shell: true,
    })
    const up = await waitForServer(`${BASE}/`, 60)
    if (!up) {
      console.error(`[smoke] vite preview did not become reachable on ${BASE} — did you run 'npm run build'?`)
      stopPreview(preview)
      process.exit(1)
    }
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  })

  let allOk = true
  console.log(`[smoke] rendering ${ROUTES.length} routes against ${BASE}\n`)
  for (const route of ROUTES) {
    const { verdict, data } = await renderRoute(browser, route)
    const tag = verdict.ok ? 'PASS' : 'FAIL'
    console.log(`[${tag}] ${route.label}  (#root: ${data.rootChildCount} kids / ${data.rootHtmlLength}b)`)
    if (!verdict.ok) {
      allOk = false
      for (const r of verdict.reasons) console.log(`         - ${r}`)
    }
  }

  await browser.close()
  if (preview) stopPreview(preview)
  console.log(`\n[smoke] ${allOk ? 'ALL ROUTES PASS' : 'FAILURES DETECTED'}`)
  process.exit(allOk ? 0 : 1)
}

main().catch((e) => {
  console.error('[smoke] fatal:', e)
  process.exit(1)
})
