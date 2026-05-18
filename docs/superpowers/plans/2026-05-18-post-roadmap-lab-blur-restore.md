# Post-Roadmap Mega-PR Implementation Plan — Lab Terminal + Library Blur + EntryDetail State Restoration

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 3-task user-requested post-roadmap PR — (C) EntryDetail close→state restoration, (B) library blur audit + fix, (A) Lab Terminal library-aware data refresh. Mega-PR single session, sorrend C → B → A.

**Architecture:** sessionStorage snapshot/restore for C; targeted 4-point CSS/transform audit for B; library-aware `deriveMolecular(peptide, library)` branched mapper + 3 new optional Entry fields (`bioavailability`, `aromatization`, `hepatotoxicity`) filled via Node fs script (Edit tool tilos a [[feedback_edit_tool_quote_corruption]] miatt) for A.

**Tech Stack:** React 18.3 + Vite 5.4 + Tailwind 3.4 (no test infrastructure — "test" = `npm run build` green + `node scripts/validate-library-meta.mjs` + manual smoke + DevTools verify). 4 libraries × 3 lang × per-entry chunks (v0.12-perlang-stable architecture).

**Spec:** `docs/superpowers/specs/2026-05-18-post-roadmap-lab-blur-restore-design.md`

**Tag-jelölt:** `v0.13-lab-blur-restore`

---

## File Structure

**Files created:**
- `scripts/add-pharma-bioavailability.mjs` — Node fs-based per-entry bioavailability field injector (Task 11-12)
- `scripts/add-perf-aromatization-hepatotox.mjs` — Node fs-based perf field injector (Task 13-14)

**Files modified:**
- `src/components/LibraryGallery.jsx` — snapshot publisher + restore consumer useEffect (Tasks 1, 3)
- `src/components/library/EntryDetailRoute.jsx` — restore consumer + hashchange listener (Task 2)
- `src/index.css` — `.glass` blur-strength fix + image-rendering rule (Tasks 6-7)
- `src/components/library/cube-nav/LibraryCube.jsx` — transform stabilization (Task 8)
- `src/components/library/cube-nav/CubeFace.jsx` — backface-visibility / translateZ (Task 8)
- `src/components/library/adaptLibraryEntry.js` — `deriveMolecular(peptide, library)` library-aware refactor + allowlist (Task 10)
- `src/data/libraries/shape.js` — 3 új optional Entry mező typedef (Task 10)
- `scripts/validate-library-meta.mjs` — soft/hard-fail check pharma `bioavailability` + perf `aromatization` + `hepatotoxicity` (Task 10, 12, 14)
- `src/data/libraries/pharmaceutical/entries/{hu,en,pl}/*.js` — 40 × 3 = 120 file `bioavailability` injekció (Tasks 11-12)
- `src/data/libraries/performance/entries/{hu,en,pl}/*.js` — 17 × 3 = 51 file `aromatization` + `hepatotoxicity` injekció (Tasks 13-14)

---

## Task 0: Commit spec + plan docs

**Files:**
- Add: `docs/superpowers/specs/2026-05-18-post-roadmap-lab-blur-restore-design.md`
- Add: `docs/superpowers/plans/2026-05-18-post-roadmap-lab-blur-restore.md`

- [ ] **Step 1: Verify both files exist and are untracked**

Run: `cd "e:/Website Biz/molekulax" && git status docs/superpowers/`
Expected: both files listed as untracked

- [ ] **Step 2: Stage and commit**

```bash
cd "e:/Website Biz/molekulax"
git add docs/superpowers/specs/2026-05-18-post-roadmap-lab-blur-restore-design.md \
        docs/superpowers/plans/2026-05-18-post-roadmap-lab-blur-restore.md
git commit -m "postroadmap(docs): mega-PR design spec + implementation plan (C state-restore + B blur-fix + A lab-data)"
```

- [ ] **Step 3: Verify commit**

Run: `git log -1 --stat`
Expected: HEAD ahead of `v0.12-perlang-stable` by 1 commit

---

## Task 1: Task C.1 — LibraryGallery snapshot publisher

**Files:**
- Modify: `src/components/LibraryGallery.jsx`

- [ ] **Step 1: Add `useRef` import**

Edit line 1 from:
```js
import { useState, useRef, useMemo } from 'react'
```
To:
```js
import { useState, useRef, useMemo, useEffect } from 'react'
```

(`useEffect` will be used in Task 3 — adding now to avoid double-touch)

- [ ] **Step 2: Add stateRef + publish-effect inside `LibraryGallery` component**

After the existing useState declarations (line ~257), before `const allSectionRef = useRef(null)`, add:

```js
  // Snapshot publisher for Task C state-restoration. Publishes current state
  // into a ref (no re-render) so openEntry() can read it synchronously.
  const stateRef = useRef({})
  stateRef.current = {
    query, activeFilters, levelFilters, sortMode, expanded,
  }
```

- [ ] **Step 3: Replace `openEntry` to capture snapshot before hash transition**

Replace the existing `openEntry` function (lines 236-240):

```js
function openEntry(library, entry) {
 if (typeof window !== 'undefined') {
  window.location.hash = `entry/${library.id}/${entry.id}`
 }
}
```

With (moved INSIDE `LibraryGallery` since it now needs access to `stateRef` + `library`):

```js
// (delete the outer `function openEntry` block at lines 236-240)
```

Then inside `LibraryGallery` (around line 320, just before `return`), add:

```js
  const openEntry = (entry) => {
    if (typeof window === 'undefined') return
    try {
      const snapshot = {
        token: Date.now(),
        scrollY: window.scrollY,
        libraryId: library.id,
        query: stateRef.current.query || '',
        activeFilters: stateRef.current.activeFilters || [],
        levelFilters: stateRef.current.levelFilters || [],
        sortMode: stateRef.current.sortMode || 'az',
        expanded: stateRef.current.expanded || false,
      }
      sessionStorage.setItem('molekulax:returnState', JSON.stringify(snapshot))
    } catch (e) {
      // sessionStorage full / disabled — silently skip, falls back to fresh landing
    }
    window.location.hash = `entry/${library.id}/${entry.id}`
  }
```

- [ ] **Step 4: Update both PeptideTile `onSelect` call sites to use the new `openEntry`**

Find line 362 (top10 grid):
```jsx
                onSelect={(entry) => openEntry(library, entry)}
```
Replace with:
```jsx
                onSelect={openEntry}
```

Find line 615 (filteredAll grid):
```jsx
                  onSelect={(entry) => openEntry(library, entry)}
```
Replace with:
```jsx
                  onSelect={openEntry}
```

- [ ] **Step 5: Build green check**

Run: `cd "e:/Website Biz/molekulax" && npm run build`
Expected: validator green, vite build success, no error

- [ ] **Step 6: Manual smoke — snapshot writing**

Run: `npm run dev`
Open browser → DevTools Console → click any pharma tile
Verify in DevTools Application → Session Storage → `http://localhost:5173`:
```
Key: molekulax:returnState
Value: {"token":17...,"scrollY":...,"libraryId":"pharmaceutical","query":"","activeFilters":[],...}
```

- [ ] **Step 7: Commit**

```bash
git add src/components/LibraryGallery.jsx
git commit -m "postroadmap(C.1): LibraryGallery snapshot publisher into sessionStorage on tile-click"
```

---

## Task 2: Task C.2 — EntryDetailRoute restore consumer + hashchange listener

**Files:**
- Modify: `src/components/library/EntryDetailRoute.jsx`

- [ ] **Step 1: Replace `closeDetail` with restore-aware version**

Replace lines 96-106 (`const closeDetail = () => { ... }`):

```js
  const closeDetail = () => {
    if (typeof window === 'undefined') return
    // Restore-aware close: if a returnState snapshot exists from a fresh
    // tile-click in this session, restore the LibraryGallery state on
    // the way back to #library. Otherwise current behavior (scroll to
    // library or hash set to library).
    let restoreData = null
    try {
      const raw = sessionStorage.getItem('molekulax:returnState')
      if (raw) {
        const parsed = JSON.parse(raw)
        const ageMs = Date.now() - (parsed.token || 0)
        if (ageMs >= 0 && ageMs < 30 * 60 * 1000) {
          restoreData = parsed
        }
        sessionStorage.removeItem('molekulax:returnState')
      }
    } catch (e) { /* corrupted JSON → fresh landing */ }

    if (restoreData) {
      window.__libraryGalleryPendingRestore__ = restoreData
      if (restoreData.libraryId) setLibraryId(restoreData.libraryId)
      window.location.hash = 'library'
      return
    }

    // Original fallback behavior
    if (parsed?.library) setLibraryId(parsed.library)
    if (window.location.hash === '#library') {
      requestAnimationFrame(() => {
        document.getElementById('library')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.location.hash = 'library'
    }
  }
```

- [ ] **Step 2: Add hashchange listener for browser-back path**

After the existing useEffect blocks (after line 131 — the smooth-scroll-to-top useEffect), insert a NEW useEffect:

```js
  // Browser-back path: if hash transitions from #entry/... to #library or
  // empty (popstate), closeDetail() is NOT called automatically. We need
  // to consume sessionStorage on the same transition to ensure browser-back
  // also restores library state.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const onHashChange = () => {
      const newHash = window.location.hash
      if (newHash === '#library' || newHash === '' || newHash === '#') {
        // Same restore-consume logic as closeDetail, but only PUBLISHES
        // the pending-restore — does NOT re-set the hash (already on the
        // target).
        try {
          const raw = sessionStorage.getItem('molekulax:returnState')
          if (raw) {
            const parsed = JSON.parse(raw)
            const ageMs = Date.now() - (parsed.token || 0)
            if (ageMs >= 0 && ageMs < 30 * 60 * 1000) {
              window.__libraryGalleryPendingRestore__ = parsed
              if (parsed.libraryId) setLibraryId(parsed.libraryId)
            }
            sessionStorage.removeItem('molekulax:returnState')
          }
        } catch (e) { /* ignore */ }
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [setLibraryId])
```

- [ ] **Step 3: Build green check**

Run: `cd "e:/Website Biz/molekulax" && npm run build`
Expected: validator green, vite build success

- [ ] **Step 4: Manual smoke — restore-data publish**

Run: `npm run dev`
Open browser → click any pharma tile → wait for entry to load → click X (close)
Verify in DevTools Console: `window.__libraryGalleryPendingRestore__`
Expected: object with `{token, scrollY, libraryId: 'pharmaceutical', query, ...}`
Verify: `sessionStorage.getItem('molekulax:returnState')` → `null` (consumed)

Note: visual restore won't happen yet — LibraryGallery consumer effect is Task 3.

- [ ] **Step 5: Commit**

```bash
git add src/components/library/EntryDetailRoute.jsx
git commit -m "postroadmap(C.2): EntryDetailRoute restore consumer + hashchange listener for browser-back"
```

---

## Task 3: Task C.3 — LibraryGallery restore consumer useEffect

**Files:**
- Modify: `src/components/LibraryGallery.jsx`

- [ ] **Step 1: Add restore-consumer useEffect**

Inside `LibraryGallery`, after the existing useEffect/useMemo blocks (around line 290, after `filteredAll`), add:

```js
  // Restore consumer for Task C. Reads window.__libraryGalleryPendingRestore__
  // (set by EntryDetailRoute closeDetail or hashchange listener) and restores
  // state when the library.id matches the snapshot. Idempotent — clears the
  // pending object after consumption.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const pending = window.__libraryGalleryPendingRestore__
    if (!pending || pending.libraryId !== library.id) return
    setQuery(pending.query || '')
    setActiveFilters(Array.isArray(pending.activeFilters) ? pending.activeFilters : [])
    setLevelFilters(Array.isArray(pending.levelFilters) ? pending.levelFilters : [])
    setSortMode(pending.sortMode || 'az')
    if (pending.expanded) {
      setExpanded(true)
      setHasOpened(true)
    }
    // Wait two paints for accordion expansion + filter render, then scroll.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: pending.scrollY || 0, behavior: 'instant' })
      })
    })
    delete window.__libraryGalleryPendingRestore__
  }, [library.id])
```

- [ ] **Step 2: Build green check**

Run: `cd "e:/Website Biz/molekulax" && npm run build`
Expected: validator green, vite build success

- [ ] **Step 3: Manual smoke — full round-trip**

Run: `npm run dev`
Open browser → pharma library face → expand All-accordion → query "metf" → category-filter cardio (or any) → scroll mid-list → click metformin tile → wait for entry → click X (close)
Verify: pharma face active, All-accordion expanded, query="metf" visible, category-filter chip active, scroll-position restored (NOT at top of #library)

- [ ] **Step 4: Manual smoke — ESC path**

Run same flow but instead of X click → press ESC (mobile viewport). Same restoration.

- [ ] **Step 5: Manual smoke — browser back path**

Run same flow but instead of X click → press browser back button. Same restoration.

- [ ] **Step 6: Manual smoke — cross-library restore**

Run: pharma face → click tile → wait for entry → swipe to peptides face (in EntryDetail there's no swipe; this means: hash is `#entry/pharma/metformin` and now manually change to `#library` via address bar OR press X normally). The restore should bring back to **pharma** face, NOT peptides, because the snapshot remembers `libraryId: 'pharmaceutical'`.

- [ ] **Step 7: Manual smoke — direct deep-link (no restore)**

Open new browser tab → navigate to `http://localhost:5173/#entry/pharmaceutical/metformin` (no prior tile-click) → click X
Verify: fresh `#library` landing, scroll to top of library section, NO restore (sessionStorage was empty)

- [ ] **Step 8: Commit**

```bash
git add src/components/LibraryGallery.jsx
git commit -m "postroadmap(C.3): LibraryGallery restore consumer useEffect on library.id change"
```

---

## Task 4: Task C — Smoke checklist verification + commit

**Files:** none (verification only)

- [ ] **Step 1: 3-lang smoke**

Run: `npm run dev`
Per language (HU, EN, PL switched via UI):
1. Open pharma face → expand All → query "metf" → filter cardio → tile click → X close → verify restore
2. Open peptides face → expand All → query "bpc" → tile click → ESC → verify restore
3. Open performance face → tile click → browser-back → verify restore

Acceptance: 9 round-trips (3 lang × 3 library) all PASS.

- [ ] **Step 2: Edge-case smoke**

1. Stale token: manually `sessionStorage.setItem('molekulax:returnState', JSON.stringify({token: Date.now() - 31*60*1000, libraryId: 'peptides'}))` → hash to `#entry/peptides/bpc-157` → X close → verify fresh landing (NO restore, snapshot ignored)
2. Corrupted JSON: `sessionStorage.setItem('molekulax:returnState', 'not-json')` → hash to entry → X close → verify fresh landing
3. RelatedCard nav: open metformin → click a related card (entry/pharma/X) → ensure snapshot is NOT consumed mid-flight, then X close on second entry → verify restore back to ORIGINAL query/scroll (not the related-card mid-state)

- [ ] **Step 3: Document smoke results in commit (no code change)**

If all green:
```bash
git commit --allow-empty -m "postroadmap(C.smoke): 3-lang × 3-lib + edge-case smoke PASS (9 round-trips + 3 edge cases)"
```

If a regression found, debug + fix + recommit per Task 1-3 mintában.

---

## Task 5: Task B.1 — Blur audit + `.glass` strength fix

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Grep audit for all 4 blur kandidátok**

Run (sequential):
```
Grep: pattern="backdrop-filter|backdrop-blur" type="css" path="e:/Website Biz/molekulax/src"
Grep: pattern="backdrop-filter|backdrop-blur" type="jsx" path="e:/Website Biz/molekulax/src"
Grep: pattern="image-rendering" path="e:/Website Biz/molekulax/src"
Grep: pattern="class=\".*blur-" path="e:/Website Biz/molekulax/src"
Grep: pattern="transform: scale|translateZ|backface-visibility" path="e:/Website Biz/molekulax/src/components/library/cube-nav"
```

Note all findings — these inform Tasks 5-8.

- [ ] **Step 2: Read `.glass` definition in index.css**

Run: `Grep: pattern="\.glass" path="e:/Website Biz/molekulax/src/index.css" output_mode="content" -A=15`

Note the current `backdrop-filter` strength value.

- [ ] **Step 3: Reduce `.glass` blur-strength if > 8px**

If the current value is `backdrop-filter: blur(12px)` or higher, edit it to `blur(8px)`. If it's already ≤8px, ADD a comment `/* Blur strength audited 2026-05-18, kept at Npx */` so the audit is recorded.

Example edit if current is `blur(16px)`:
```css
.glass {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);   /* Reduced from 16px 2026-05-18 — sharper underlying tile content */
  -webkit-backdrop-filter: blur(8px);
}
```

- [ ] **Step 4: Build green check**

Run: `cd "e:/Website Biz/molekulax" && npm run build`
Expected: success

- [ ] **Step 5: Visual verification**

Run: `npm run dev`
Open browser → expand All-accordion in any library → DevTools Computed style pane on the `.glass` accordion button → verify `backdrop-filter: blur(8px)` (or whatever the new value is). Visually: the tiles BELOW the accordion button should look sharper (less smudging through the glass).

- [ ] **Step 6: Commit**

```bash
git add src/index.css
git commit -m "postroadmap(B.1): reduce .glass backdrop-filter strength from 16px to 8px for sharper tile content (audit 2026-05-18)"
```

(Adjust commit message numbers if current value was different.)

---

## Task 6: Task B.2 — image-rendering flag on EntryImage tiles

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add image-rendering CSS rule scoped to peptide-tile img elements**

Find the `.peptide-tile` selector in `src/index.css` (or any other selector that covers tile-images). If `.peptide-tile` exists, add to its block:

```css
.peptide-tile img {
  image-rendering: -webkit-optimize-contrast;  /* Chrome/Safari/Edge */
  image-rendering: crisp-edges;                /* Firefox */
}
```

If `.peptide-tile` selector does NOT exist (use grep to verify), add at end of file:

```css
/* Sharper tile images: crisp-edges on WebP/AVIF/PNG inside library tiles
   without affecting EffectsSection / Hero / Entry-body images. Added 2026-05-18. */
.peptide-tile img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
```

- [ ] **Step 2: Verify `.peptide-tile` class actually appears on tile elements**

Run: `Grep: pattern="peptide-tile" path="e:/Website Biz/molekulax/src/components/LibraryGallery.jsx"`
Expected: line 35 (`className="group peptide-tile relative flex flex-col gap-4 …"`)

If found, the CSS selector is correct.

- [ ] **Step 3: Build green check**

Run: `cd "e:/Website Biz/molekulax" && npm run build`
Expected: success

- [ ] **Step 4: Visual verification**

Run: `npm run dev`
Open browser → DevTools Elements pane → find a tile img → Computed style pane → verify `image-rendering` value. Visually zoom 200% (Ctrl/Cmd+) and verify tile vial images are crisper at edges (no bilinear blur).

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "postroadmap(B.2): add image-rendering crisp-edges on .peptide-tile img for sharper vial photos"
```

---

## Task 7: Task B.3 — LibraryCube transform stabilization

**Files:**
- Modify: `src/components/library/cube-nav/LibraryCube.jsx`
- Modify: `src/components/library/cube-nav/CubeFace.jsx`

- [ ] **Step 1: Read current cube + face transform setup**

Run:
- `Read: e:/Website Biz/molekulax/src/components/library/cube-nav/LibraryCube.jsx`
- `Read: e:/Website Biz/molekulax/src/components/library/cube-nav/CubeFace.jsx`

Identify where `rotateY` / `transform` styles are applied. Note presence/absence of:
- `transform-style: preserve-3d`
- `backface-visibility: hidden`
- `transform: translateZ(0)` GPU-layer hint

- [ ] **Step 2: Add `transform-style: preserve-3d` to cube container (if missing)**

In `LibraryCube.jsx`, find the inner rotating `<motion.div>` element. Ensure its style includes `transformStyle: 'preserve-3d'`. If missing, add it.

Example (depends on actual code):
```jsx
<motion.div
  style={{
    transformStyle: 'preserve-3d',   // <-- ADD if missing
    perspective: 1800,
    ...
  }}
  animate={{ rotateY: rotationDeg }}
  ...
>
```

- [ ] **Step 3: Add `backface-visibility: hidden` + `translateZ(0)` to CubeFace wrapper**

In `CubeFace.jsx`, find the outer wrapper div with the rotateY transform. Ensure its inline style includes:

```jsx
style={{
  ...existingStyle,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  transform: `rotateY(${faceDeg}deg) translateZ(50vw)`,  // adapt if existing uses translateX
}}
```

(Look at current `transform` value; the `translateZ(...)` should be appropriate per the cube geometry. If current is e.g. `rotateY(${deg}deg) translateZ(40vw)`, leave the translateZ value alone — just add `backfaceVisibility: 'hidden'` if missing.)

- [ ] **Step 4: Verify rotation degree values are integers**

In `LibraryCube.jsx`, find where `rotationDeg` is computed (likely `useCubeIndex.js`). Ensure all face angles are 0/90/180/270 (or 0/-90/-180/-270 monotonic). Non-integer degrees (e.g. 90.5) cause sub-pixel rounding blur on the face content.

If non-integer values are found, fix the math.

- [ ] **Step 5: Build green check**

Run: `cd "e:/Website Biz/molekulax" && npm run build`
Expected: success

- [ ] **Step 6: Visual verification**

Run: `npm run dev`
Open browser → use arrow keys or swipe to rotate between library faces → mid-rotation pause (right after click, before settle) → verify the tile text + image on the FRONT face is crisp throughout the rotation. Use DevTools Layers pane to confirm each face has its own GPU layer.

- [ ] **Step 7: Commit**

```bash
git add src/components/library/cube-nav/LibraryCube.jsx \
        src/components/library/cube-nav/CubeFace.jsx
git commit -m "postroadmap(B.3): LibraryCube transform GPU-layer + backface-visibility for crisp face rendering"
```

If `useCubeIndex.js` also modified for integer-degree math, include in same commit.

---

## Task 8: Task B.4 — Tailwind blur-* removal (conditional)

**Files:**
- Modify: any file where `blur-*` utility was found in Task 5 Step 1 audit

- [ ] **Step 1: Review Task 5 Step 1 audit results for `class=".*blur-` findings**

If grep found `blur-[number]` or `blur-sm/md/lg/xl/2xl/3xl` Tailwind utilities in `LibraryGallery.jsx`, `cube-nav/`, or `EntryImage.jsx`:
- Examine each finding. Is it decorative (halo, glow)? Keep.
- Is it on a wrapper around tile content? Remove.

If NO findings, skip to Step 3 (no-op commit).

- [ ] **Step 2: Remove non-decorative blur-* utilities**

Per finding, edit the className to remove `blur-*`. Build + visual verify per change.

- [ ] **Step 3: Build green check**

Run: `cd "e:/Website Biz/molekulax" && npm run build`
Expected: success

- [ ] **Step 4: Commit (only if changes made)**

```bash
git add <modified files>
git commit -m "postroadmap(B.4): remove non-decorative Tailwind blur-* utility from <component>"
```

If no changes, skip the commit entirely (don't create empty commit).

---

## Task 9: Task B — Smoke verification + commit

**Files:** none (verification only)

- [ ] **Step 1: Cross-task B-smoke**

Run: `npm run dev`
1. All 4 library faces (peptides/nootropics/performance/pharmaceutical) → tile text + image crisp ✓
2. All-accordion open per library → tiles below accordion crisp (no .glass smudge) ✓
3. Rotation between library faces 4×4 transitions → mid-rotation content stays crisp ✓
4. 3 lang switch (HU/EN/PL) per library → no blur-flicker on lang change ✓

- [ ] **Step 2: Document smoke results**

If all green, marker commit:
```bash
git commit --allow-empty -m "postroadmap(B.smoke): full blur-audit + fix verified across 4 lib × 4 transitions × 3 lang"
```

If regression found, debug + fix + recommit. Common pitfalls:
- `.glass` reduction broke design aesthetic → revert to original strength, OR find offending overlap and remove `.glass` from that specific element
- `image-rendering: crisp-edges` pixelated some specific image → narrow the selector

---

## Task 10: Task A.1 — `deriveMolecular` library-aware refactor + shape + allowlist + validator

**Files:**
- Modify: `src/components/library/adaptLibraryEntry.js`
- Modify: `src/data/libraries/shape.js`
- Modify: `scripts/validate-library-meta.mjs`

- [ ] **Step 1: Read current `deriveMolecular` + adapter return-object**

Run: `Read: e:/Website Biz/molekulax/src/components/library/adaptLibraryEntry.js` (focus lines 221-236 + line 907 area for return-object)

- [ ] **Step 2: Rename existing `deriveMolecular` to `derivePeptideMolecular`**

Edit `src/components/library/adaptLibraryEntry.js` line 221:

```js
// Molecular information, extracted from keyInfo + derived defaults.
function derivePeptideMolecular(peptide) {
```

(rest of function body unchanged through line 236)

- [ ] **Step 3: Add `derivePharmaMolecular` and `derivePerfMolecular` functions**

Immediately after `derivePeptideMolecular` (around line 237), add:

```js
// Pharmaceutical library molecular row-set. Reads top-level fields populated
// by per-entry data files; missing fields render as '-' / 'N/A' until A.2 fills.
function derivePharmaMolecular(peptide) {
  const truncate = (s, n = 60) => {
    if (!s) return null
    const str = typeof s === 'string' ? s : String(s)
    return str.length > n ? str.slice(0, n - 1) + '…' : str
  }
  return [
    { key: { hu: 'ATC kód', en: 'ATC code', pl: 'Kod ATC' },
      value: peptide.atcCode || { hu: '-', en: '-', pl: '-' } },
    { key: { hu: 'Vény-státusz', en: 'Prescription', pl: 'Recepta' },
      value: peptide.prescriptionStatus || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
    { key: { hu: 'Hatásmechanizmus', en: 'Mechanism', pl: 'Mechanizm' },
      value: truncate(peptide.mechanism) || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
    { key: { hu: 'Felezési idő', en: 'Half-life', pl: 'Okres półtrwania' },
      value: peptide.halfLife || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
    { key: { hu: 'Hatáskezdet', en: 'Onset', pl: 'Początek działania' },
      value: peptide.onsetTime || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
    { key: { hu: 'Biológiai hasznosulás', en: 'Bioavailability', pl: 'Biodostępność' },
      value: peptide.bioavailability || { hu: '-', en: '-', pl: '-' } },
  ]
}

// Performance library molecular row-set.
function derivePerfMolecular(peptide) {
  const truncate = (s, n = 60) => {
    if (!s) return null
    const str = typeof s === 'string' ? s : String(s)
    return str.length > n ? str.slice(0, n - 1) + '…' : str
  }
  return [
    { key: { hu: 'Androgenic:Anabolic', en: 'Androgenic:Anabolic', pl: 'Androgenny:Anaboliczny' },
      value: peptide.androgenicRatio || { hu: '-', en: '-', pl: '-' } },
    { key: { hu: 'AR-affinitás', en: 'AR binding', pl: 'Powinowactwo AR' },
      value: truncate(peptide.bindingAffinity) || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
    { key: { hu: 'Aktív felezési idő', en: 'Active half-life', pl: 'Aktywny okres półtrwania' },
      value: peptide.halfLifeActive || peptide.halfLife || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
    { key: { hu: 'Detection window', en: 'Detection window', pl: 'Okno wykrywania' },
      value: peptide.detectionWindow || { hu: 'N/A', en: 'N/A', pl: 'N/A' } },
    { key: { hu: 'Aromatizáció', en: 'Aromatization', pl: 'Aromatyzacja' },
      value: peptide.aromatization || { hu: '-', en: '-', pl: '-' } },
    { key: { hu: 'Hepatotoxicitás', en: 'Hepatotoxicity', pl: 'Hepatotoksyczność' },
      value: peptide.hepatotoxicity || { hu: '-', en: '-', pl: '-' } },
  ]
}

// Library-aware dispatcher. Branches on library.id to return the correct
// row-set. Falls back to peptide row-set for unknown libraries.
function deriveMolecular(peptide, library) {
  if (library?.id === 'pharmaceutical') return derivePharmaMolecular(peptide)
  if (library?.id === 'performance')    return derivePerfMolecular(peptide)
  return derivePeptideMolecular(peptide)
}
```

- [ ] **Step 4: Find existing `deriveMolecular(peptide)` call site and pass library**

Run: `Grep: pattern="deriveMolecular\(" path="e:/Website Biz/molekulax/src/components/library/adaptLibraryEntry.js" output_mode="content" -n=true`
Note all call sites (likely around the main `adaptLibraryEntry` body, ~line 900).

Edit each call from:
```js
molecular: deriveMolecular(peptide),
```
To:
```js
molecular: deriveMolecular(peptide, library),
```

- [ ] **Step 5: Add new fields to adapter return-object allowlist**

In the `adaptLibraryEntry` return-object (around line 905-940 area), find the alphabetized list of fields. Insert:

```js
    atcCode: peptide.atcCode,
    bioavailability: peptide.bioavailability,
    aromatization: peptide.aromatization,
    hepatotoxicity: peptide.hepatotoxicity,
    prescriptionStatus: peptide.prescriptionStatus,
```

(Some of these may ALREADY exist — check first via grep `atcCode\|prescriptionStatus` in the adapter file. Only add the missing ones. `bioavailability`, `aromatization`, `hepatotoxicity` ALL three will be new.)

⚠️ This is the [[feedback_adapter_passthrough]] critical step — every new entry field MUST appear in the return-object explicit allowlist, otherwise EntryDetail receives undefined and the new Lab Terminal rows silently render as '-'.

- [ ] **Step 6: Update `src/data/libraries/shape.js` Entry typedef**

Read shape.js. In the `Entry` JSDoc typedef, add (within the @typedef block):

```js
 * @property {I18nString} [bioavailability]  Pharma-only — biological availability
 * @property {I18nString} [aromatization]    Performance-only — aromatization profile
 * @property {'low'|'medium'|'high'|'severe'} [hepatotoxicity]  Performance-only — DILI tier
```

(If `atcCode` and `prescriptionStatus` are NOT already documented, add them too — they exist in pharma entries already.)

- [ ] **Step 7: Extend `scripts/validate-library-meta.mjs` with SOFT-FAIL checks**

Read the script. Find where per-library entries are iterated. Add:

```js
// Soft-fail checks (warning only, won't break build during A.2/A.3 rollout)
const SOFT_FAIL = true   // flip to false at end of Task 14
if (lib.id === 'pharmaceutical') {
  for (const entry of entries) {
    if (!entry.bioavailability) {
      const msg = `[pharma] ${entry.id} missing bioavailability`
      if (SOFT_FAIL) console.warn('⚠️  WARN:', msg)
      else { console.error('❌ ERR:', msg); process.exit(1) }
    }
  }
}
if (lib.id === 'performance') {
  for (const entry of entries) {
    if (!entry.aromatization) {
      const msg = `[perf] ${entry.id} missing aromatization`
      if (SOFT_FAIL) console.warn('⚠️  WARN:', msg)
      else { console.error('❌ ERR:', msg); process.exit(1) }
    }
    if (!entry.hepatotoxicity) {
      const msg = `[perf] ${entry.id} missing hepatotoxicity`
      if (SOFT_FAIL) console.warn('⚠️  WARN:', msg)
      else { console.error('❌ ERR:', msg); process.exit(1) }
    }
  }
}
```

Adapt to the actual script structure (likely loops over `lib.meta` + dynamic-imports per entry — match the existing per-entry pattern in the file).

- [ ] **Step 8: Build green check (expect ~57 SOFT warnings)**

Run: `cd "e:/Website Biz/molekulax" && npm run build`
Expected: build success; 40 `⚠️ pharma … missing bioavailability` warnings + 17×2 = 34 `⚠️ perf … missing aromatization/hepatotoxicity` warnings = ~74 total warnings. Build PASSES.

- [ ] **Step 9: Manual smoke — Lab Terminal renders 6 rows per library**

Run: `npm run dev`
1. Open pharma metformin (HU) → Lab Terminal renders 6 rows: ATC=A10BA02, Vény=Vényköteles (Rx), Hatásmech=AMPK-aktivátor…, Felezési=4-9h…, Hatáskezdet=1-3h…, Bioavail=`-` (placeholder)
2. Open perf testosterone-info → 6 rows: AndroAnab=100:100, AR=AR-affinitás referencia…, Aktív=~24h…, Detection=Injektált észter…, Aromatiz=`-`, Hepatotox=`-`
3. Open peptid bpc-157 → unchanged 6 rows (Típus/Szerkezet/MW/…)

- [ ] **Step 10: Commit**

```bash
git add src/components/library/adaptLibraryEntry.js \
        src/data/libraries/shape.js \
        scripts/validate-library-meta.mjs
git commit -m "postroadmap(A.1): library-aware deriveMolecular() + shape.js + adapter allowlist + validator soft-fail"
```

---

## Task 11: Task A.2 — Pharma `bioavailability` script + pilot 3 entries

**Files:**
- Create: `scripts/add-pharma-bioavailability.mjs`
- Modify: `src/data/libraries/pharmaceutical/entries/{hu,en,pl}/metformin.js`
- Modify: `src/data/libraries/pharmaceutical/entries/{hu,en,pl}/amlodipine.js`
- Modify: `src/data/libraries/pharmaceutical/entries/{hu,en,pl}/apixaban.js`

- [ ] **Step 1: Research bioavailability for pilot 3 entries via WebFetch**

Per entry, fetch the FDA SmPC or EMA EPAR + cross-check PubChem:

1. **Metformin**: target source = FDA Glucophage label Section 12.3 (`https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/020357s037s039,021202s021s023lbl.pdf`) → expected ~50-60% (oral)
2. **Amlodipine**: target source = FDA Norvasc label or EMA Pfizer EPAR → expected ~64-90% (oral, dose-dependent)
3. **Apixaban**: target source = FDA Eliquis label → expected ~50% (oral)

For each: use WebFetch with prompt "Extract the absolute bioavailability percentage (oral or otherwise) for [drug]. Provide just the number/range and the source citation."

Note the values + sources for commit-comment use.

- [ ] **Step 2: Write the script `scripts/add-pharma-bioavailability.mjs`**

```js
// Adds `bioavailability` field to pharma entry HU/EN/PL files using fs (not
// Edit tool) to avoid curly-quote corruption per
// [[feedback_edit_tool_quote_corruption]].
//
// Usage: node scripts/add-pharma-bioavailability.mjs
//
// Each PAYLOADS entry is { id, hu, en, pl } and the script inserts the field
// after the `onsetTime` field (or at end of object if onsetTime missing).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.join(__dirname, '..', 'src/data/libraries/pharmaceutical/entries')

const PAYLOADS = [
  {
    id: 'metformin',
    hu: '~50-60% (oral, FDA Glucophage label 2017)',
    en: '~50-60% (oral, FDA Glucophage label 2017)',
    pl: '~50-60% (doustnie, etykieta FDA Glucophage 2017)',
  },
  {
    id: 'amlodipine',
    hu: '64-90% (oral, dózisfüggő, FDA Norvasc)',
    en: '64-90% (oral, dose-dependent, FDA Norvasc)',
    pl: '64-90% (doustnie, zależne od dawki, FDA Norvasc)',
  },
  {
    id: 'apixaban',
    hu: '~50% (oral, FDA Eliquis label)',
    en: '~50% (oral, FDA Eliquis label)',
    pl: '~50% (doustnie, etykieta FDA Eliquis)',
  },
]

const LANGS = ['hu', 'en', 'pl']

function injectField(content, value) {
  // Insert "bioavailability": "value", BEFORE the "onsetTime" key if present,
  // otherwise before the first top-level key found. The file is a flat
  // JSON-style default export, so we use line-based string ops carefully.
  if (content.includes('"bioavailability"')) {
    // Already present — replace value
    return content.replace(
      /"bioavailability":\s*"[^"]*"/,
      `"bioavailability": ${JSON.stringify(value)}`
    )
  }
  // Insert before "onsetTime" — keep 2-space indentation consistent with file
  const indent = '  '   // match the file convention
  const inject = `${indent}"bioavailability": ${JSON.stringify(value)},\n`
  if (content.includes('"onsetTime"')) {
    return content.replace(
      /(\s*)"onsetTime"/,
      `$1"bioavailability": ${JSON.stringify(value)},\n$1"onsetTime"`
    )
  }
  // Fallback: insert before last "}\n" (end of object)
  const lastBrace = content.lastIndexOf('}')
  return content.slice(0, lastBrace) + `${indent}"bioavailability": ${JSON.stringify(value)}\n` + content.slice(lastBrace)
}

let count = 0
for (const payload of PAYLOADS) {
  for (const lang of LANGS) {
    const filepath = path.join(BASE, lang, `${payload.id}.js`)
    if (!fs.existsSync(filepath)) {
      console.warn(`SKIP (not found): ${filepath}`)
      continue
    }
    const original = fs.readFileSync(filepath, 'utf-8')
    const updated = injectField(original, payload[lang])
    if (original === updated) {
      console.log(`UNCHANGED: ${payload.id} (${lang})`)
      continue
    }
    fs.writeFileSync(filepath, updated, 'utf-8')
    console.log(`✓ ${payload.id} (${lang}) — ${payload[lang]}`)
    count++
  }
}
console.log(`\nDone. ${count} files updated.`)
```

- [ ] **Step 3: Run the script**

Run: `cd "e:/Website Biz/molekulax" && node scripts/add-pharma-bioavailability.mjs`
Expected output: 9 ✓ lines (3 entries × 3 langs).

- [ ] **Step 4: Sanity-check one modified file**

Run: `Read: e:/Website Biz/molekulax/src/data/libraries/pharmaceutical/entries/hu/metformin.js limit=20`
Expected: `"bioavailability": "~50-60% (oral, FDA Glucophage label 2017)",` line inserted before `"onsetTime"`.

- [ ] **Step 5: Build green check (expect 37 SOFT warnings — was 40, now 3 down)**

Run: `npm run build`
Expected: build PASS, warnings ~37 + 34 = ~71 (down from 74)

- [ ] **Step 6: Manual smoke — pilot 3 entries**

Run: `npm run dev`
- Metformin HU/EN/PL → Lab Terminal row 6: "Biológiai hasznosulás: ~50-60% (oral, FDA Glucophage label 2017)" / EN equivalent / PL equivalent
- Amlodipine 3 lang → similar
- Apixaban 3 lang → similar

- [ ] **Step 7: Commit pilot**

```bash
git add scripts/add-pharma-bioavailability.mjs \
        src/data/libraries/pharmaceutical/entries/hu/metformin.js \
        src/data/libraries/pharmaceutical/entries/en/metformin.js \
        src/data/libraries/pharmaceutical/entries/pl/metformin.js \
        src/data/libraries/pharmaceutical/entries/hu/amlodipine.js \
        src/data/libraries/pharmaceutical/entries/en/amlodipine.js \
        src/data/libraries/pharmaceutical/entries/pl/amlodipine.js \
        src/data/libraries/pharmaceutical/entries/hu/apixaban.js \
        src/data/libraries/pharmaceutical/entries/en/apixaban.js \
        src/data/libraries/pharmaceutical/entries/pl/apixaban.js
git commit -m "postroadmap(A.2-pilot): pharma bioavailability pilot 3 entries (metformin/amlodipine/apixaban) via fs script, sources FDA SmPC"
```

- [ ] **Step 8: USER-GATE — pause before proceeding to remaining 37 entries**

Ask user to verify the pilot 3 entries on dev-server before proceeding. Wait for explicit "ok / mehet" before Task 12.

---

## Task 12: Task A.2 batched — Pharma remaining 37 entries fill

**Files:**
- Modify: `scripts/add-pharma-bioavailability.mjs` (extend PAYLOADS)
- Modify: `src/data/libraries/pharmaceutical/entries/{hu,en,pl}/*.js` (37 × 3 = 111 files)

- [ ] **Step 1: List remaining pharma entries**

Run: `ls "e:/Website Biz/molekulax/src/data/libraries/pharmaceutical/entries/hu/" | sort`
Expected: 40 entries. Exclude pilot 3 (metformin, amlodipine, apixaban). Remaining 37.

- [ ] **Step 2: Research bioavailability for batch 1 of 4 (10 entries)**

For 10 entries (e.g. acarbose, amoxicillin, aripiprazole, atorvastatin, bisoprolol, candesartan, ciprofloxacin, clopidogrel, dabigatran, doxycycline — adjust based on actual file list), WebFetch FDA SmPC / EMA EPAR per entry. Capture HU/EN/PL value triples + source citation.

⚠️ [[feedback_plan_reference_accuracy]] — verify each value against the primary source (don't trust Wikipedia or Drugs.com summaries).

- [ ] **Step 3: Extend PAYLOADS array in `add-pharma-bioavailability.mjs` with batch 1**

Add 10 new `{ id, hu, en, pl }` objects to the existing PAYLOADS array. Save the script.

- [ ] **Step 4: Run the script**

Run: `node scripts/add-pharma-bioavailability.mjs`
Expected: 30 ✓ lines (10 new × 3 lang) + 9 "UNCHANGED" lines for pilot 3.

- [ ] **Step 5: Build green check (expect ~27 SOFT warnings — was 37, now 10 down)**

Run: `npm run build`
Expected: build PASS, warnings reduced.

- [ ] **Step 6: Spot-check 2 entries**

Run dev → pick 2 of the new 10 entries → verify Lab Terminal row 6 shows bioavailability HU/EN/PL.

- [ ] **Step 7: Commit batch 1**

```bash
git add scripts/add-pharma-bioavailability.mjs \
        src/data/libraries/pharmaceutical/entries/
git commit -m "postroadmap(A.2-batch1): pharma bioavailability 10 entries (acarbose..doxycycline) via fs script"
```

(Update the entry list in the commit message to match actual entries.)

- [ ] **Step 8: Repeat Steps 2-7 for batches 2, 3, 4** (each ~9-10 entries)

Continue until all 37 remaining entries filled. Each batch = separate commit. Total: pilot (1 commit) + 4 batches = 5 commits for A.2 stream.

- [ ] **Step 9: Final pharma verification**

Run: `npm run build`
Expected: ZERO `⚠️ pharma … missing bioavailability` warnings (40/40 filled).
Perf 17×2 = 34 warnings remain — those are A.3.

---

## Task 13: Task A.3 — Perf `aromatization` + `hepatotoxicity` script + pilot 2 entries

**Files:**
- Create: `scripts/add-perf-aromatization-hepatotox.mjs`
- Modify: `src/data/libraries/performance/entries/{hu,en,pl}/testosterone-info.js`
- Modify: `src/data/libraries/performance/entries/{hu,en,pl}/anavar-info.js`

- [ ] **Step 1: Research perf pilot 2 entries**

1. **Testosterone**: aromatization = "Yes (CYP19 → estradiol)" / hepatotoxicity = "low" (non-17α-alkylated). Source: PubMed Bhasin 1996 + Pope-Kanayama AAS review.
2. **Anavar (oxandrolone)**: aromatization = "No" (17α-alkylated, no aromatization) / hepatotoxicity = "high" (17α-alkyl hepatotoxicity profile). Source: PubMed Schänzer + Pope-Kanayama.

HU/EN/PL value triples per cell.

- [ ] **Step 2: Write the script `scripts/add-perf-aromatization-hepatotox.mjs`**

Mirror of pharma script, but injects TWO fields per entry. Key differences:
- PAYLOADS shape: `{ id, aromatization: {hu, en, pl}, hepatotoxicity }` (hepatotox is a single enum string, not lang-tagged)
- injectField runs TWICE per file (once per field)
- hepatotoxicity is plain string `"low"|"medium"|"high"|"severe"`, not i18n object

Code:
```js
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE = path.join(__dirname, '..', 'src/data/libraries/performance/entries')

const PAYLOADS = [
  {
    id: 'testosterone-info',
    aromatization: {
      hu: 'Igen (CYP19 → ösztradiol)',
      en: 'Yes (CYP19 → estradiol)',
      pl: 'Tak (CYP19 → estradiol)',
    },
    hepatotoxicity: 'low',
  },
  {
    id: 'anavar-info',
    aromatization: {
      hu: 'Nem (17α-alkilált)',
      en: 'No (17α-alkylated)',
      pl: 'Nie (17α-alkilowany)',
    },
    hepatotoxicity: 'high',
  },
]

const LANGS = ['hu', 'en', 'pl']

function injectI18nField(content, fieldName, value, anchorField = 'wadaStatus') {
  if (content.includes(`"${fieldName}"`)) {
    return content.replace(
      new RegExp(`"${fieldName}":\\s*"[^"]*"`),
      `"${fieldName}": ${JSON.stringify(value)}`
    )
  }
  const inject = `  "${fieldName}": ${JSON.stringify(value)},\n`
  if (content.includes(`"${anchorField}"`)) {
    return content.replace(
      new RegExp(`(\\s*)"${anchorField}"`),
      `$1"${fieldName}": ${JSON.stringify(value)},\n$1"${anchorField}"`
    )
  }
  const lastBrace = content.lastIndexOf('}')
  return content.slice(0, lastBrace) + `  "${fieldName}": ${JSON.stringify(value)}\n` + content.slice(lastBrace)
}

let count = 0
for (const payload of PAYLOADS) {
  for (const lang of LANGS) {
    const filepath = path.join(BASE, lang, `${payload.id}.js`)
    if (!fs.existsSync(filepath)) {
      console.warn(`SKIP (not found): ${filepath}`)
      continue
    }
    let content = fs.readFileSync(filepath, 'utf-8')
    content = injectI18nField(content, 'aromatization', payload.aromatization[lang])
    content = injectI18nField(content, 'hepatotoxicity', payload.hepatotoxicity)
    fs.writeFileSync(filepath, content, 'utf-8')
    console.log(`✓ ${payload.id} (${lang})`)
    count++
  }
}
console.log(`\nDone. ${count} files updated.`)
```

- [ ] **Step 3: Run the script**

Run: `node scripts/add-perf-aromatization-hepatotox.mjs`
Expected: 6 ✓ lines (2 entries × 3 langs).

- [ ] **Step 4: Sanity-check one modified file**

Run: `Read: e:/Website Biz/molekulax/src/data/libraries/performance/entries/hu/testosterone-info.js limit=80`
Expected: `"aromatization": "Igen (CYP19 → ösztradiol)",` and `"hepatotoxicity": "low",` lines inserted.

- [ ] **Step 5: Build green check**

Run: `npm run build`
Expected: PASS, warnings = `34 - 2*2 = 30` perf-warnings (testosterone-info aromatiz+hepatotox + anavar-info aromatiz+hepatotox cleared).

- [ ] **Step 6: Manual smoke**

Run: `npm run dev`
- Perf testosterone-info → Lab Terminal row 5 = "Aromatizáció: Igen (CYP19 → ösztradiol)" (HU); row 6 = "Hepatotoxicitás: low"
- Anavar-info → row 5 = "Nem (17α-alkilált)"; row 6 = "high"
- 3 lang verify

- [ ] **Step 7: Commit pilot**

```bash
git add scripts/add-perf-aromatization-hepatotox.mjs \
        src/data/libraries/performance/entries/hu/testosterone-info.js \
        src/data/libraries/performance/entries/en/testosterone-info.js \
        src/data/libraries/performance/entries/pl/testosterone-info.js \
        src/data/libraries/performance/entries/hu/anavar-info.js \
        src/data/libraries/performance/entries/en/anavar-info.js \
        src/data/libraries/performance/entries/pl/anavar-info.js
git commit -m "postroadmap(A.3-pilot): perf aromatization+hepatotoxicity pilot 2 entries (testosterone-info, anavar-info) via fs script"
```

- [ ] **Step 8: USER-GATE — pause before remaining 15 perf entries**

Ask user to verify pilot 2 on dev-server. Wait for explicit "ok / mehet" before Task 14.

---

## Task 14: Task A.3 batched — Perf remaining 15 entries fill + validator hard-fail flip

**Files:**
- Modify: `scripts/add-perf-aromatization-hepatotox.mjs` (extend PAYLOADS)
- Modify: `src/data/libraries/performance/entries/{hu,en,pl}/*.js` (15 × 3 = 45 files)
- Modify: `scripts/validate-library-meta.mjs` (flip `SOFT_FAIL = false`)

- [ ] **Step 1: List remaining perf entries**

Run: `ls "e:/Website Biz/molekulax/src/data/libraries/performance/entries/hu/" | sort`
Expected: 17 entries. Exclude pilot 2 (testosterone-info, anavar-info). Remaining 15.

- [ ] **Step 2: Research batch 1 of 2 (~8 entries)**

For 8 entries (1-andro, albuterol, clenbuterol, dianabol-info, dnp-info, ephedrine, epo-info, hgh-info), WebFetch sources per the spec's perf-source-list (PubMed Bhasin/Schänzer/Hartgens/Pope-Kanayama + WADA Prohibited List). Capture aromatization HU/EN/PL + hepatotoxicity enum per entry.

Examples:
- **Clenbuterol**: aromatization = "Not applicable (β2-agonist)" / hepatotox = "low"
- **DNP (2,4-dinitrophenol)**: aromatization = "Not applicable" / hepatotox = "severe" (mitochondrial uncoupler, lethal)
- **Dianabol (methandrostenolone)**: aromatization = "Yes (CYP19 → 17α-methylestradiol)" / hepatotox = "high"
- **EPO**: aromatization = "Not applicable (peptide)" / hepatotox = "low"
- **HGH**: aromatization = "Not applicable (peptide)" / hepatotox = "low"

⚠️ Each value WebFetch-verifier-checked per [[feedback_plan_reference_accuracy]].

- [ ] **Step 3: Extend PAYLOADS array**

Add 8 new objects to PAYLOADS array. Save.

- [ ] **Step 4: Run script + build + spot-check + commit batch 1**

Run: `node scripts/add-perf-aromatization-hepatotox.mjs`
Run: `npm run build` → warnings should drop by 8 × 2 = 16
Spot-check 2 entries on dev-server.

```bash
git add scripts/add-perf-aromatization-hepatotox.mjs \
        src/data/libraries/performance/entries/
git commit -m "postroadmap(A.3-batch1): perf aromatization+hepatotoxicity 8 entries (1-andro..hgh-info) via fs script"
```

- [ ] **Step 5: Repeat for batch 2 (~7 entries)**

Remaining: methylstenbolone, mk-677, nandrolone-info, superdrol, trenbolone-info, winstrol-info, yohimbine. Per entry research + extend PAYLOADS + run script + spot-check + commit.

```bash
git commit -m "postroadmap(A.3-batch2): perf aromatization+hepatotoxicity remaining 7 entries via fs script"
```

- [ ] **Step 6: Flip validator to HARD-FAIL**

Edit `scripts/validate-library-meta.mjs` line where `SOFT_FAIL = true`:

```js
const SOFT_FAIL = false   // flipped from true at end of A.3 — all 40 pharma + 17 perf populated
```

- [ ] **Step 7: Build green check (hard-fail mode)**

Run: `npm run build`
Expected: ZERO warnings, ZERO errors, build SUCCESS. If any missing entry surfaces as a hard-fail, fix that entry's data via the script + extend PAYLOADS + re-run.

- [ ] **Step 8: Commit validator flip**

```bash
git add scripts/validate-library-meta.mjs
git commit -m "postroadmap(A.3-validator): flip pharma bioavailability + perf aromatization/hepatotox to hard-fail (all 57 entries populated)"
```

---

## Task 15: Final live LH smoke + tag push

**Files:** none (verification + tag)

- [ ] **Step 1: Final build green check**

Run: `cd "e:/Website Biz/molekulax" && npm run build`
Expected: validator zero warnings, vite build success, dist/ generated.

- [ ] **Step 2: Push commits to origin master**

Run: `git push origin master`
Expected: 16-22 commits pushed (Step 0 docs + C × 3-4 + B × 3-5 + A × 9-12 + closing commits).

- [ ] **Step 3: Wait for Vercel deploy (5min)**

Monitor: `curl -sI https://molekulax.vercel.app/ | head -5` until `Age` is low + new deploy SHA visible.

Alternative: Vercel dashboard → Deployments → wait for latest "Ready" status.

- [ ] **Step 4: Live Lighthouse mobile 3-URL × 3-lang smoke**

Run 9 separate LH runs (each URL × HU/EN/PL lang via query-param or manual UI switch):
1. `https://molekulax.vercel.app/` — home (HU default load)
2. `https://molekulax.vercel.app/#entry/pharmaceutical/metformin` (HU + manual switch to EN + PL)
3. `https://molekulax.vercel.app/#entry/performance/testosterone-info` (HU + EN + PL)

Each LH run via Chrome DevTools → Lighthouse → Categories: Performance + Accessibility + Best-Practices + SEO. Mobile preset, slow 4G throttling default.

Acceptance per run: Perf ≥85, A11y ≥95, BP ≥96, SEO 100.

- [ ] **Step 5: Document LH results**

Capture results in a table (markdown). Format:

| URL | Lang | Perf | A11y | BP | SEO | TBT |
|---|---|---:|---:|---:|---:|---:|
| home | HU | … | … | … | … | … |
| metformin | HU | … | … | … | … | … |
| metformin | EN | … | … | … | … | … |
| (etc) |

If any URL fails acceptance, run a confirm-sweep (3-run median per Lighthouse-Single-Measurement-Variance lesson) before flagging regression.

- [ ] **Step 6: Tag `v0.13-lab-blur-restore`**

```bash
git tag -a v0.13-lab-blur-restore -m "Post-roadmap mega-PR: Task C state-restore + Task B blur-audit + Task A lab-data library-aware. 16-22 commits, 3 lang × 4 lib production. Live LH PASS."
git push origin v0.13-lab-blur-restore
```

- [ ] **Step 7: Memory + Obsidian sync**

Per CLAUDE.md global rule, run `/handoff` at session end. The handoff will:
- Update `project_molekulax.md` memory with v0.13-tag-szakasz bullet
- Update `MolekulaX_Roadmap_2026-05.md` "Post-roadmap items" — mark the 3-part PR as done
- Add new session-block to top of `MolekulaX_Statusz.md`
- Add any new feedback memo if a new pattern was learned (e.g. sessionStorage snapshot pattern generalization)

---

## Self-Review (run before handoff)

**Spec coverage:**
- Task C state-restore covered by Tasks 1-4 ✓
- Task B blur 4-point audit covered by Tasks 5-9 ✓
- Task A lab-data covered by Tasks 10-14 ✓
- Final smoke + tag covered by Task 15 ✓
- Docs commit covered by Task 0 ✓
- Memory/Obsidian sync covered by Task 15 Step 7 ✓
- Out-of-scope items (molekulax.com, SARMs) — explicitly noted in spec, plan does not touch ✓

**Placeholder scan:**
- No "TBD" / "fill in later" / "similar to" in any task ✓
- All code blocks contain actual code, not pseudocode ✓
- Exact file paths used throughout ✓
- One known unknown: Task 7 Step 2 cube-face transform values depend on actual file content (not yet read). Step 1 explicit READ command is included so the implementer has the data before editing ✓
- Tasks 11/12/13/14 batch entry lists are illustrative — actual entries from `ls` output guide implementation, no hardcoded placeholder list ✓

**Type/signature consistency:**
- `deriveMolecular(peptide, library)` 2-arg signature consistent across Task 10 declaration + call-site update ✓
- `derivePharmaMolecular(peptide)` / `derivePerfMolecular(peptide)` / `derivePeptideMolecular(peptide)` 1-arg helpers, all consistent ✓
- `bioavailability` / `aromatization` are `I18nString` (i18n object), `hepatotoxicity` is plain string enum — types match between shape.js + adapter + scripts ✓
- `window.__libraryGalleryPendingRestore__` global ref name consistent between EntryDetailRoute publish + LibraryGallery consume ✓
- `sessionStorage` key `molekulax:returnState` consistent across all 3 references (LibraryGallery openEntry + EntryDetailRoute closeDetail + hashchange listener) ✓
- `token` 30-min TTL consistent across 2 consume sites ✓

**Granularity check:**
- Each step is one focused action (read / write / run / commit) ~2-5min ✓
- No mega-step with 10 sub-actions hidden ✓
- Frequent commits at task boundaries ✓

**Risk-flag coverage:**
- [[feedback_adapter_passthrough]] — addressed in Task 10 Step 5 (explicit allowlist warning) ✓
- [[feedback_edit_tool_quote_corruption]] — addressed by Tasks 11-14 using fs-script not Edit ✓
- [[feedback_plan_reference_accuracy]] — explicit verifier-check note in Task 11 Step 2 + Task 14 Step 2 ✓
- [[feedback_forbidden_sources]] — HYBRID source policy embedded in spec, referenced in Task 11/13 research steps ✓

Plan complete.
