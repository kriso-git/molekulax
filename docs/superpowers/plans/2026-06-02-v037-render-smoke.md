# v0.37 Render-Smoke Guard + Error Boundary — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a headless render-smoke CI guard (+ root error boundary) so a blank-page render crash can never silently ship again.

**Architecture:** A pure verdict function (`smoke-classify.mjs`, offline-unit-tested) decides pass/fail from inputs gathered by a Puppeteer runner (`smoke-render.mjs`) that loads the built app on 7 representative routes. A root `ErrorBoundary` degrades a render crash to an on-brand fallback. The smoke runs in CI's `build-and-test` job after build.

**Tech Stack:** Node 20 ESM, `node --test` (offline), Puppeteer (devDep, bundled Chromium), React 18, Vite 5, GitHub Actions.

Spec: `docs/superpowers/specs/2026-06-02-v037-render-smoke-design.md`

All work happens in worktree `e:/Website Biz/molekulax/.worktrees/feat-v037-render-smoke` on branch `feat/v037-render-smoke`. The husky pre-commit hook silent-skips for non-entry-data files (all files here qualify).

---

### Task 1: Add Puppeteer devDep + `smoke` npm script

**Files:**
- Modify: `package.json` (devDependencies + scripts)

- [ ] **Step 1: Install puppeteer as a devDependency**

Run (in the worktree root):
```bash
npm i -D puppeteer
```
Expected: `package.json` gains `"puppeteer": "^<resolved>"` under devDependencies; Chromium downloads to the puppeteer cache. Verify:
```bash
node -e "console.log(require('puppeteer/package.json').version)"
```
Expected: prints a version (e.g. `24.x.x`).

- [ ] **Step 2: Add the `smoke` script**

In `package.json`, add this line to the `"scripts"` block (after `"test": "node --test scripts/test/"` — add a comma to the `test` line):
```json
    "test": "node --test scripts/test/",
    "smoke": "node scripts/smoke-render.mjs --serve"
```

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "build: add puppeteer devDep + npm run smoke script"
```

---

### Task 2: Pure verdict function `smoke-classify.mjs` (TDD)

**Files:**
- Create: `scripts/smoke-classify.mjs`
- Test: `scripts/test/smoke-classify.test.mjs`

- [ ] **Step 1: Write the failing test**

Create `scripts/test/smoke-classify.test.mjs`:
```js
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { classifySmokeResult, isBenignError } from '../smoke-classify.mjs'

const good = { rootChildCount: 3, rootHtmlLength: 130000, errors: [], fallbackPresent: false }

test('all-good route passes with no reasons', () => {
  const r = classifySmokeResult(good)
  assert.equal(r.ok, true)
  assert.deepEqual(r.reasons, [])
})

test('empty #root fails', () => {
  const r = classifySmokeResult({ ...good, rootChildCount: 0, rootHtmlLength: 0 })
  assert.equal(r.ok, false)
  assert.ok(r.reasons.some((x) => /empty #root/.test(x)))
})

test('tiny #root html fails', () => {
  const r = classifySmokeResult({ ...good, rootHtmlLength: 200 })
  assert.equal(r.ok, false)
  assert.ok(r.reasons.some((x) => /too small/.test(x)))
})

test('fallback present fails (caught crash)', () => {
  const r = classifySmokeResult({ ...good, fallbackPresent: true })
  assert.equal(r.ok, false)
  assert.ok(r.reasons.some((x) => /fallback/.test(x)))
})

test('one real console error fails', () => {
  const r = classifySmokeResult({ ...good, errors: ['console.error: ReferenceError: arrowBase is not defined'] })
  assert.equal(r.ok, false)
  assert.ok(r.reasons.some((x) => /console\/page errors/.test(x)))
})

test('benign-only errors still pass', () => {
  const r = classifySmokeResult({ ...good, errors: ['GET /favicon.ico 404 (Not Found)', 'workbox precaching responses'] })
  assert.equal(r.ok, true)
})

test('multiple failures aggregate all reasons', () => {
  const r = classifySmokeResult({ rootChildCount: 0, rootHtmlLength: 0, errors: ['console.error: TypeError: x'], fallbackPresent: true })
  assert.equal(r.ok, false)
  assert.ok(r.reasons.length >= 3)
})

test('threshold boundary: exactly the minimum is a failure (strict <=)', () => {
  const r = classifySmokeResult({ ...good, rootHtmlLength: 1000 })
  assert.equal(r.ok, false)
})

test('isBenignError matches allowlist and rejects real errors', () => {
  assert.equal(isBenignError('GET /favicon.ico 404'), true)
  assert.equal(isBenignError('manifest.webmanifest failed'), true)
  assert.equal(isBenignError('Uncaught ReferenceError: arrowBase is not defined'), false)
})

test('empty input object fails safe', () => {
  const r = classifySmokeResult({})
  assert.equal(r.ok, false)
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run:
```bash
node --test scripts/test/smoke-classify.test.mjs
```
Expected: FAIL — cannot find module `../smoke-classify.mjs` (import error).

- [ ] **Step 3: Write the minimal implementation**

Create `scripts/smoke-classify.mjs`:
```js
// Pure verdict logic for the render-smoke guard. No I/O, no browser — offline-testable
// via node --test. The runner (scripts/smoke-render.mjs) gathers inputs from a real
// browser and delegates the pass/fail decision here so the logic has unit coverage.

const ROOT_HTML_MIN = 1000

// Console/page messages that must NOT count as smoke failures (benign noise).
const BENIGN_PATTERNS = [
  /favicon\.ico/i,
  /manifest\.webmanifest/i,
  /service ?worker/i,
  /\bworkbox\b/i,
  /registerSW/i,
]

export function isBenignError(text) {
  if (!text) return false
  return BENIGN_PATTERNS.some((re) => re.test(text))
}

// Inputs: rootChildCount (#root.children.length), rootHtmlLength (#root.innerHTML.length),
// errors (array of console.error/pageerror strings), fallbackPresent ([data-error-boundary]).
// Returns { ok, reasons } — reasons lists every failed predicate for a clear CI report.
export function classifySmokeResult({
  rootChildCount = 0,
  rootHtmlLength = 0,
  errors = [],
  fallbackPresent = false,
} = {}) {
  const reasons = []
  if (rootChildCount <= 0) reasons.push('empty #root (app did not mount)')
  if (rootHtmlLength <= ROOT_HTML_MIN) reasons.push(`#root html too small (${rootHtmlLength} <= ${ROOT_HTML_MIN})`)
  if (fallbackPresent) reasons.push('error-boundary fallback rendered ([data-error-boundary])')
  const realErrors = (errors || []).filter((e) => !isBenignError(e))
  if (realErrors.length > 0) {
    reasons.push(`console/page errors: ${realErrors.length} (${realErrors.slice(0, 3).join(' | ')})`)
  }
  return { ok: reasons.length === 0, reasons }
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run:
```bash
npm test
```
Expected: PASS — all suites green, now 6 test files (the 5 existing + smoke-classify), 10 new cases passing.

- [ ] **Step 5: Commit**

```bash
git add scripts/smoke-classify.mjs scripts/test/smoke-classify.test.mjs
git commit -m "test: add smoke-classify pure verdict fn + offline cases"
```

---

### Task 3: Puppeteer runner `smoke-render.mjs`

**Files:**
- Create: `scripts/smoke-render.mjs`

- [ ] **Step 1: Create the runner**

Create `scripts/smoke-render.mjs`:
```js
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
import { spawn } from 'node:child_process'
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
  { label: 'entry — peptides/retatrutide (QualityGrid)', lib: null, path: '/#entry/peptides/retatrutide' },
  { label: 'entry — nootropics/semax', lib: null, path: '/#entry/nootropics/semax' },
  { label: 'entry — performance/testosterone-info', lib: null, path: '/#entry/performance/testosterone-info' },
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

async function renderRoute(browser, route) {
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`))
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(`console.error: ${m.text()}`)
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
    preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], {
      stdio: 'ignore',
      shell: true,
    })
    const up = await waitForServer(`${BASE}/`, 60)
    if (!up) {
      console.error(`[smoke] vite preview did not become reachable on ${BASE} — did you run 'npm run build'?`)
      preview.kill()
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
  if (preview) preview.kill()
  console.log(`\n[smoke] ${allOk ? 'ALL ROUTES PASS' : 'FAILURES DETECTED'}`)
  process.exit(allOk ? 0 : 1)
}

main().catch((e) => {
  console.error('[smoke] fatal:', e)
  process.exit(1)
})
```

- [ ] **Step 2: Build, then run the smoke against the current (fixed) app**

Run:
```bash
npm run build && npm run smoke
```
Expected: build PASS, then `[PASS]` for all 7 routes and `ALL ROUTES PASS`, exit 0.

- [ ] **Step 3: Commit**

```bash
git add scripts/smoke-render.mjs
git commit -m "feat: puppeteer render-smoke runner (7 routes, --serve/--url)"
```

---

### Task 4: Root `ErrorBoundary` + wrap in `main.jsx`

**Files:**
- Create: `src/components/ErrorBoundary.jsx`
- Modify: `src/main.jsx`

- [ ] **Step 1: Create the ErrorBoundary**

Create `src/components/ErrorBoundary.jsx`:
```jsx
// Root-level error boundary: converts a render-path crash anywhere in the app into an
// on-brand fallback instead of a blank white page. The fallback is SELF-CONTAINED —
// inline styles + literal copy, NO context hooks (useTheme/useLang) — so it renders even
// when a provider is the thing that crashed. The data-error-boundary marker lets the
// render-smoke detect a caught crash as a failure; componentDidCatch logs to console.error
// so the smoke's console check also trips (production React does not auto-log caught errors).
import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info)
  }

  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <div
        data-error-boundary="true"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          background: '#050505',
          color: '#e5e7eb',
          textAlign: 'center',
          padding: '2rem',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <h1 style={{ color: '#00ff99', fontSize: '1.6rem', margin: 0, letterSpacing: '0.04em' }}>
          Hiba történt
        </h1>
        <p style={{ maxWidth: '34rem', lineHeight: 1.6, color: '#9ca3af', margin: 0 }}>
          Váratlan hiba lépett fel az oldal betöltésekor. Töltsd újra az oldalt — ha a hiba
          megmarad, próbáld meg később.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          style={{
            background: 'rgba(0,255,153,0.14)',
            border: '1px solid rgba(0,255,153,0.5)',
            color: '#00ff99',
            borderRadius: '9999px',
            padding: '0.7rem 1.6rem',
            fontSize: '0.95rem',
            cursor: 'pointer',
          }}
        >
          Újratöltés
        </button>
      </div>
    )
  }
}
```

- [ ] **Step 2: Wrap `<App/>` in `main.jsx`**

Replace the entire contents of `src/main.jsx` with:
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
```

- [ ] **Step 3: Build to verify it compiles**

Run:
```bash
npm run build
```
Expected: PASS (validator + vite build).

- [ ] **Step 4: Smoke to verify the happy path is unchanged**

Run:
```bash
npm run smoke
```
Expected: ALL 7 ROUTES PASS, exit 0 (the boundary is invisible when nothing throws; no `[data-error-boundary]` present).

- [ ] **Step 5: Commit**

```bash
git add src/components/ErrorBoundary.jsx src/main.jsx
git commit -m "feat: root ErrorBoundary with self-contained on-brand fallback"
```

---

### Task 5: Wire the smoke into CI

**Files:**
- Modify: `.github/workflows/ci.yml` (the `build-and-test` job)

- [ ] **Step 1: Add the browser-install + smoke steps after Build**

In `.github/workflows/ci.yml`, inside the `build-and-test` job's `steps:`, **after** the `- name: Build` step (currently the last step in that job), append:
```yaml
      - name: Install Puppeteer Chromium
        run: npx puppeteer browsers install chrome
      - name: Render smoke (headless)
        run: npm run smoke
```
Leave the `pmid-gate` job unchanged.

- [ ] **Step 2: Validate the YAML**

Run:
```bash
node -e "const fs=require('fs');const s=fs.readFileSync('.github/workflows/ci.yml','utf8');if(!/Render smoke \(headless\)/.test(s)||!/npm run smoke/.test(s))throw new Error('smoke step missing');console.log('ci.yml smoke step present')"
```
Expected: `ci.yml smoke step present`.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: run headless render-smoke in build-and-test job"
```

---

### Task 6: Acceptance verification (controller-run; no commits unless noted)

This task proves the guard works. Run inline — do NOT commit the temporary edits in steps 4–5.

- [ ] **Step 1: Unit suite green**

Run: `npm test`
Expected: all suites PASS, 6 test files (incl. smoke-classify with 10 cases).

- [ ] **Step 2: Build green**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: Smoke green on the fixed app**

Run: `npm run smoke`
Expected: ALL 7 ROUTES PASS, exit 0.

- [ ] **Step 4: REGRESSION PROOF — the guard catches the original crash**

Temporarily reintroduce the original bug: in `src/components/library/cube-nav/CubeNavControls.jsx`, change ONE `...ARROW_BASE_STYLE` at line ~69 back to `...arrowBase`. Then:
```bash
npm run build && npm run smoke
```
Expected: `[FAIL] home — peptides face / CubeNavControls` with reason `console/page errors: ... arrowBase is not defined` (and/or empty #root); exit 1.

Then REVERT the change (restore `...ARROW_BASE_STYLE`), and re-verify:
```bash
git checkout -- src/components/library/cube-nav/CubeNavControls.jsx
npm run build && npm run smoke
```
Expected: ALL 7 ROUTES PASS, exit 0.

- [ ] **Step 5: ERROR-BOUNDARY PROOF — caught crash shows fallback + is flagged**

Temporarily add `throw new Error('boundary-test')` at the top of the `App` function body in `src/App.jsx`. Then:
```bash
npm run build && npm run smoke
```
Expected: routes FAIL with reason `error-boundary fallback rendered ([data-error-boundary])` (the boundary caught the crash → fallback rendered, smoke still flags it). This proves the boundary works AND that it does not let a crash slip past the smoke.

Then REVERT:
```bash
git checkout -- src/App.jsx
npm run build && npm run smoke
```
Expected: ALL 7 ROUTES PASS, exit 0.

- [ ] **Step 6: Confirm working tree is clean of temp edits**

Run: `git status -sb`
Expected: no modified tracked files (only committed work remains; dist/ is gitignored).

---

## Done criteria

- `npm test` 6 files green; `npm run build` green; `npm run smoke` 7/7 PASS exit 0.
- Regression proof (Step 4) and error-boundary proof (Step 5) both demonstrated then reverted.
- CI `build-and-test` has the install-chromium + smoke steps; `pmid-gate` untouched.
- No new runtime dependency (puppeteer is devDependencies only).
- Then: finishing-a-development-branch (PR or merge to master per user choice).
