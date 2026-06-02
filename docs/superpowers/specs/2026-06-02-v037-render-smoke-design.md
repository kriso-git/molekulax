# MolekulaX — v0.37 Render-Smoke Guard + Error Boundary (design)

**Date:** 2026-06-02
**Branch:** `feat/v037-render-smoke`
**Status:** approved design → spec

## Motivation

On 2026-06-02 the live site (`molekulax.vercel.app`) went fully blank. Root cause: v0.36
B6 commit `092c220` ("hoist static literals to module scope") renamed a local
`arrowBase` → module-scope `ARROW_BASE_STYLE` in `CubeNavControls.jsx` but left **two of
four** references pointing at the now-deleted `arrowBase` → `ReferenceError: arrowBase is
not defined` on render → the whole React tree unmounted → white screen. (The same commit
also corrupted an `EntryDetail` Polish string; both fixed in hotfix `b65b984`.)

**The crash shipped through the entire pipeline undetected:** implementer + spec-review +
code-quality review + final-branch review + `npm run build` (PASS) + `npm test` (5/5) +
CI (`build-and-test` + `pmid-gate`) + manual smoke. **Reason: nothing actually renders the
built app in a browser.** `vite build` does not fail on runtime `ReferenceError`s, and the
test suite is offline Node script tests (verify-pmids / classifyOverlap / staged-entries /
lang-consistency) with zero React render coverage.

This is a **class of bug** (any uncaught error in a render path → blank site) that no
existing guard catches. v0.37 closes the gap with two complementary layers.

## Goals

1. **Render-smoke guard** — a headless-browser check that loads the *built* app on
   representative routes and fails if the React app does not mount (blank `#root`) or if
   any uncaught/console error occurs. Wired into CI so a blank-page regression **cannot
   merge or deploy**. Runnable locally via `npm run smoke`.
2. **Error Boundary** — a root-level React error boundary so a single component render
   crash degrades to an on-brand fallback (+ reload) instead of a blank white page.

## Non-Goals

- A full e2e suite, visual-regression, or interaction testing. (Single smoke only.)
- Pre-commit gating of the smoke (too slow per commit — CI-only).
- Any app/UX/feature/design change. The error boundary renders **only on crash**; the
  smoke is read-only. Zero visible change in the happy path.
- Lighthouse/perf work.

## Architecture

Three units, each independently understandable and testable:

1. `scripts/smoke-render.mjs` — the smoke runner (Puppeteer).
2. `scripts/smoke-classify.mjs` — a **pure** verdict function, offline-unit-tested.
3. `src/components/ErrorBoundary.jsx` — root error boundary + on-brand fallback.

Plus integration: `package.json` (devDep + scripts), `.github/workflows/ci.yml`
(smoke step in `build-and-test`), `src/main.jsx` (wrap `<App/>`).

### Tooling decision: Puppeteer

`npm i -D puppeteer` (single bundled Chromium, cached in CI). Chosen over (a) a
no-new-dep system-Chrome script — brittle: parsing Chrome's verbose stderr for console
errors + regex DOM scraping make a flaky gate, and a flaky gate is worse than none; and
(b) Playwright — heavier, multi-browser, overkill for one smoke. Puppeteer gives a clean,
reproducible API (`page.on('console'|'pageerror')`, `page.$eval`) identical local + CI.

## Unit 1 — `scripts/smoke-classify.mjs` (pure, TDD)

Export a pure function (no I/O, no browser) so the verdict logic is offline-unit-testable
per the repo's `node --test` convention:

```
classifySmokeResult({ rootChildCount, rootHtmlLength, errors, fallbackPresent })
  -> { ok: boolean, reasons: string[] }
```

A route render is **OK** iff ALL hold:
- `rootChildCount > 0` (app mounted something), AND
- `rootHtmlLength > 1000` (non-trivial render — empirically home ≈ 130 000), AND
- `fallbackPresent === false` (the error-boundary fallback did NOT render), AND
- `errors.length === 0` (no uncaught/console errors after benign filtering).

`reasons[]` lists every failed predicate (for a clear CI report). The function is the
single source of truth for pass/fail; the runner only gathers the inputs.

**Benign-error filtering** is also a pure helper here:
`isBenignError(text)` → true for a small allowlist (favicon 404, `manifest.webmanifest`,
service-worker registration logs, `workbox` info). Everything else counts.

### Tests (`scripts/test/smoke-classify.test.mjs`, offline)

≥8 cases: all-good; empty root (child 0); tiny html; fallback present; one console error;
benign-only errors (→ ok); multiple reasons aggregated; boundary case at threshold.

## Unit 2 — `scripts/smoke-render.mjs` (Puppeteer runner)

Self-contained, two modes:
- `--url <baseUrl>` — render against an already-running server.
- `--serve` (default for `npm run smoke` + CI) — spawn `vite preview` itself on a fixed
  port (4317), wait until reachable (poll `GET /`), render, then tear the child down.
  No extra dep (no `start-server-and-test`).

Launch: `puppeteer.launch({ headless: 'new', args: ['--no-sandbox',
'--disable-setuid-sandbox', '--disable-gpu'] })` (sandbox flags required on CI/root).

**Routes covered** (the union exercises every B6-touched component + the core surfaces):

| # | Setup | Route | Exercises |
|---|-------|-------|-----------|
| 1 | — | `/` | App shell, `useHashRoute`/`readHash`, LibraryCube + **CubeNavControls** (peptides face) |
| 2 | `sessionStorage molekulax:libraryId=nootropics` | `/` | nootropics gallery face + **ChemicalFormulaPlaceholder** tiles |
| 3 | `sessionStorage molekulax:libraryId=performance` | `/` | **PerformanceCategoryCards** + WadaBadge |
| 4 | `sessionStorage molekulax:libraryId=pharmaceutical` | `/` | pharmaceutical gallery face |
| 5 | — | `/#entry/peptides/retatrutide` | **EntryDetail** + **QualityGrid (GROUPS)** |
| 6 | — | `/#entry/nootropics/semax` | EntryDetail on a CFP-library entry |
| 7 | — | `/#entry/performance/testosterone-info` | EntryDetail + performance disclaimer |

sessionStorage is set **before app boot** via `page.evaluateOnNewDocument(() =>
sessionStorage.setItem('molekulax:libraryId', '<id>'))` so the initial cube face is the
target library (deterministic, no click/swipe needed).

**Per route:**
1. Register `page.on('pageerror', …)` and `page.on('console', m => m.type()==='error' …)`
   collectors (reset per route).
2. `page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })`.
3. `await page.waitForFunction("document.querySelector('#root')?.children.length > 0",
   { timeout: 20000 })` — if it times out the route is recorded as blank (a failure, not a
   thrown crash of the runner).
4. Small settle wait for lazy chunks (e.g. `waitForNetworkIdle` or 1500 ms).
5. Gather `{ rootChildCount, rootHtmlLength, fallbackPresent }` via `page.$eval` /
   `document.querySelector('[data-error-boundary]')`.
6. `classifySmokeResult(...)` → record verdict + reasons.

**Exit contract:** print a per-route table (route → OK/FAIL + reasons). Exit `0` iff every
route OK; exit `1` on any failure. A launch/navigation exception is itself a failure
(exit 1) with the error surfaced — never a false green.

`npm run smoke` = `node scripts/smoke-render.mjs --serve`. Assumes `dist/` is already
built (documented); CI runs it right after `npm run build`.

## Unit 3 — `src/components/ErrorBoundary.jsx` + wrap

Class component (boundaries must be classes):
- `static getDerivedStateFromError()` → `{ hasError: true }`.
- `componentDidCatch(error, info)` → `console.error('[ErrorBoundary]', error, info)`.
  **This explicit log is essential**: in production React does not auto-log
  boundary-caught errors, so without it the smoke's console-error check would miss a
  caught crash. With it, the smoke fails on a caught crash too.
- Fallback render: a full-viewport on-brand panel — bg `#050505`, Chemical Green `#00ff99`
  accent, HU copy ("Hiba történt", short subtext) + a reload button
  (`onClick={() => window.location.reload()}`). The fallback root carries
  **`data-error-boundary="true"`** so the smoke can detect "fallback rendered" as a
  failure even though `#root` is non-empty. The fallback MUST be **self-contained** —
  inline styles + literal copy, **no context hooks** (`useTheme`/`useLang`) — so it still
  renders even when a provider is the thing that crashed.
- Wrap in `src/main.jsx` as the **outermost** element (around the providers + `<App/>`),
  so a crash in any provider or in App itself is caught. Because the fallback is
  self-contained it does not depend on the providers it wraps.

Boundaries catch errors in the render/lifecycle of descendants. They do **not** catch
async/event-handler errors — acceptable; render-path crashes (the blank-screen class) are
the target.

## Integration — CI (`.github/workflows/ci.yml`)

In the existing `build-and-test` job, **after** `npm run build`:
- Puppeteer's Chromium is fetched at `npm ci` (its postinstall) — cached by the existing
  node-modules / npm cache. Confirm the runner has the few shared libs Chromium needs
  (ubuntu-latest does; `--no-sandbox` covers the sandbox).
- Step: `node scripts/smoke-render.mjs --serve` (self-spawns `vite preview` on 4317).
- The `pmid-gate` (network) job is unchanged.

Result: build + offline tests + **render-smoke** all gate `build-and-test`; a blank-page
crash fails CI → un-mergeable / un-deployable.

## package.json

- devDependencies: `puppeteer` — pin whatever `npm i -D puppeteer` resolves to (latest
  stable major).
- scripts: `"smoke": "node scripts/smoke-render.mjs --serve"`.
- `test` script unchanged (the new `smoke-classify.test.mjs` is auto-picked by the
  existing `node --test scripts/test/` directory glob).

## Acceptance Criteria

1. `scripts/smoke-classify.mjs` pure fn + `scripts/test/smoke-classify.test.mjs` ≥8 cases,
   all PASS via `npm test`; total suite now 6 files.
2. `npm run smoke` against the **current** (fixed) build → **all 7 routes OK, exit 0**.
3. **Regression proof:** temporarily reintroduce the `arrowBase` typo (or any throw in a
   covered component) → `npm run smoke` **exits 1** naming the offending route; revert.
4. Error boundary: forcing a child render-throw shows the on-brand fallback with
   `data-error-boundary` + reload button (not a blank page); `console.error` logged.
5. `npm run build` PASS; bundle delta = ErrorBoundary only (tiny); **zero change** to any
   existing rendered output on the happy path (smoke routes 1–7 visually unchanged).
6. CI: `build-and-test` runs the smoke step and is green on the branch PR; `pmid-gate`
   unchanged & green.
7. No new runtime dependency (puppeteer is devDependencies only; not shipped).

## Risks / Edge Cases

- **Puppeteer Chromium on CI:** download time (~cached) + sandbox → `--no-sandbox`. If the
  runner lacks a shared lib, add the minimal apt step; ubuntu-latest is expected to work.
- **Flake from lazy hydration:** `waitForFunction(#root children>0)` + a settle wait;
  generous 20–30 s timeouts. The cube is `React.lazy` — the settle wait must outlast the
  cube chunk load.
- **Error-boundary defeating the smoke:** mitigated by the `data-error-boundary` marker +
  the explicit `componentDidCatch` `console.error` (both make a caught crash a smoke
  failure). Documented as the key subtlety.
- **Benign console noise:** keep `isBenignError` allowlist minimal & explicit; review the
  real console output of a clean run when finalizing the allowlist.
- **Port 4317 busy locally:** fixed port; if taken, the `--serve` ready-poll fails fast
  with a clear message (acceptable; CI is clean).

## Out of Scope (future, optional)

- Lighthouse/perf budget in CI; visual-regression snapshots; multi-browser; pre-commit
  smoke; Dependabot moderate (esbuild/vite dev-only) — tracked separately.
