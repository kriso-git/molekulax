# MolekulaX — Anekdota szekció (Plan)

**Spec:** `2026-05-20-anecdote-section.md` · **Becsült task-szám:** 9 · **Becsült wall-time:** ~2-3 óra (subagent-tel parallel)

---

## Task 1 — Library Shape extension

**File:** `src/data/libraries/shape.js` (line ~112-ig az Entry typedef)

**Action:** új `@property {I18nString} [anecdote]` mező a typedef-be.

**Gate:** lint clean.

## Task 2 — Adapter passthrough

**File:** `src/components/library/adaptLibraryEntry.js` (line ~1056 körül a return blokkban)

**Action:** új sor `anecdote: peptide.anecdote || null,` a Phase 6 passthrough blokk után, `[[feedback_adapter_passthrough]]`-memóriának megfelelően.

**Gate:** lint clean + adapter unit-test ha létezik.

## Task 3 — uiStrings bővítés (3 file)

**Files:** `src/i18n/uiStrings-{hu,en,pl}.js`

**Action:** új 6 kulcs per file (lásd spec §3.5).

**Gate:** key-parity 211 + 6 = 217 per file.

## Task 4 — AnecdoteSection.jsx komponens

**File:** `src/components/library/AnecdoteSection.jsx` (új, ~120 sor)

**Action:** új React komponens. Props: `peptide`, `accent`, `library`. State: `isExpanded`. Render: section header + expand-button + (expanded: anecdote text VAGY placeholder) + disclaimer-footer.

**Gate:** komponens önállóan importálható, lint clean.

## Task 5 — EntryDetail.jsx integráció

**File:** `src/components/library/EntryDetail.jsx` (~1414-es sorba)

**Action:** új `<AnecdoteSection peptide={peptide} accent={accent} library={library} />` mount a Hero/Bento section (1259) lezárása UTÁN, "What is X?" section (1415) ELŐTT.

**Gate:** dev-build run + visual smoke 1 entry × 1 lang.

## Task 6 — Content extraction + tisztítás (EN)

**File:** `scripts/clean-sean-anecdotes.mjs` (új) + outputs `C:/Users/trolo/AppData/Local/Temp/sean-anecdotes-cleaned-en.json`

**Action:** read `sean-anecdote-mapping.json` + `sean-anecdote-bundles.json`. Minden matched bundle anecdoteText-ét tisztítjuk:
- Replace `\bRUO('s)?\b` → '' (vagy "this compound")
- Replace `\bKimera Chems?\b` → '' (és a környező sales-context)
- Replace `\bStrate Labs?\b` → ''
- Replace `Mog Labs?` → ''
- Replace `PCTZONE` → ''
- Replace `Code 'Sean'` / `Code "Sean"` / `Code 'Scientific'` → '' (és a parenthesist)
- Replace `\bRS\b` → 'users' (case-by-case)
- Replace `\bmy research subject\b` → 'users'
- Replace `\bmy RS\b` → 'users'
- Replace `\bresearchers (typically )?report\b` → 'anecdotal reports describe'
- Replace `\bI('ve)? (used|given|administered|seen)\b` → 'users have'
- Remove URLs (regex `https?://[^\s]+`)
- Trim sales-mentions (entire paragraphs about "RUO sells", "Kimera offers")
- Truncate if > 1200 chars per anecdote (keep first paragraph + last sentence)

**Manual review pass:** spot-check 10 random cleaned anecdotes manually before mass-output.

**Gate:** output JSON valid, 79 entries, average ~300-600 chars per anecdote.

## Task 7 — HU + PL fordítás (subagent-parallel)

**Action:** 2 párhuzamos subagent (general-purpose). Each gets:
- Input: cleaned EN JSON (79 entries)
- Target lang: HU vagy PL
- Output: `C:/Users/trolo/AppData/Local/Temp/sean-anecdotes-{hu,pl}.json`
- Prompt explicit: keep neutral "users report" tone, NO citation to Sean, preserve technical terms (LH, FSH, HPTA, BDNF, etc.) untranslated.
- Style sample: 1 reference entry teljesen lefordítva HU-ra a prompt-ban (Anaesthetic-tone példa).

**Gate:** mind 3 lang JSON kompatibilis (79 entries), spot-check 5 random fordítás minőség OK.

## Task 8 — Per-entry-file populáció

**File:** `scripts/populate-anecdotes.mjs` (új)

**Action:** read mind 3 lang JSON (cleaned EN + HU + PL). Minden matched entry-re:
1. `src/data/libraries/<lib>/entries/{hu,en,pl}/<entryId>.js` — load file, parse default-export object
2. Add `anecdote: "<localized-string>"` field (per-lang body file = per-lang flat string)
3. Write back

**Gate:** 79 × 3 = 237 file-frissítés successful + validator PASS.

## Task 9 — Validator + build + smoke + commit + push + tag

**Gates sequential:**
1. `node scripts/validate-library-meta.mjs` → PASS (4 lib × 182 entry × 3 lang parity)
2. `npm run build` → PASS, bundle size delta < +10 KiB
3. **Manual smoke** (5 min):
   - Home → BPC-157 entry → Anekdota collapse expand → HU/EN/PL switch → content shows
   - Home → Modafinil entry → Anekdota expand → content shows
   - Home → Tirzepatide entry → Anekdota → placeholder shows (Tirzepatide is matched, swap with truly unmatched entry like cortexin or p21)
   - 1 desktop + 1 mobil check
4. Commit-séma (spec §6):
   - `feat(libraries): Anekdota section infrastructure (shape + adapter + component + uiStrings + EntryDetail integration)`
   - `feat(libraries): Anekdota content populated (79 entries × 3 lang from Sean curated notes)`
5. Push `master`, tag `v0.21-anecdote-section`, push tag.
6. **Plan + spec MD copy → Obsidian** (`MolekulaX_AnecdoteSection_{Spec,Plan}.md`) per `[[feedback_phase_specs_obsidian]]`.
7. **Status update** `/handoff`-ready post-session.

## Risk fallbacks

- Ha validator FAIL post-populate: dump `validate-library-meta.mjs` output, fix-eljük ami diverged, re-run.
- Ha build fail (entry-data chunk size growth): a Phase 11 PWA-precache-split runtime cache még is lefedi, OK.
- Ha tone-drift egy subagent fordítás-output-on: manual fix-pass 10 perc max.
- Ha mapping medium-conf entry rossz UI-on: manual override via `sean-anecdote-mapping.json` edit + re-run populáció script.
