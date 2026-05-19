# Library Entry Deletion Plan — 21 entry eltávolítása

**Date:** 2026-05-18
**Trigger:** A 2026-05-18 brainstorming session-en a user szűkítette a Performance + Pharmaceutical library entry-listáit. A megmaradt entry-k képei a `2026-05-18-library-image-prompts.md` spec-ben dokumentáltak — ez a plan a NEM-megmaradt 21 entry adat-eltávolításáról szól.

**Scope:** Pure deletion task — semmi új feature, semmi vizuális, csak data + meta cleanup.

---

## Törlendő entry-k (21)

### Performance (2)
| ID | File path |
|---|---|
| `1-andro` | `src/data/libraries/performance/entries/{hu,en,pl}/1-andro.js` |
| `mk-677` | `src/data/libraries/performance/entries/{hu,en,pl}/mk-677.js` |

### Pharmaceutical (19)
`tirzepatide` · `semaglutide` · `liraglutide` · `acarbose` · `glimepirid` · `berberin` · `amlodipine` · `bisoprolol` · `ramipril` · `apixaban` · `sertralin` · `venlafaxine` · `mirtazapine` · `aripiprazole` · `lamotrigine` · `azithromycin` · `metronidazole` · `methimazole` · `methotrexate`

Mindegyik 3 lang-file × 19 = 57 file delete a `src/data/libraries/pharmaceutical/entries/{hu,en,pl}/`-ből.

**Total file delete:** 2 × 3 + 19 × 3 = **63 lang-file**.

---

## Per-entry deletion checklist

Minden entry-re az alábbi 7 pont fut le. Ahol "verify only" jelzés van, NEM kell szerkeszteni — csak ellenőrizni hogy nem törött el semmi.

### 1. Lang-file törlés (3 file per entry)
```
rm src/data/libraries/<library>/entries/hu/<id>.js
rm src/data/libraries/<library>/entries/en/<id>.js
rm src/data/libraries/<library>/entries/pl/<id>.js
```

### 2. `LIBRARY_ENTRY_META` array — remove object
`src/data/libraries/<library>/index.js` exportálja a `LIBRARY_ENTRY_META` array-t (~7-mezős objekt per entry: `id`, `name`, `image`, `accentColor`, `tagColor`, `shortDesc{hu,en,pl}`, `tier`, `wadaStatus`/`atcCode`). Az adott `id`-jű objektet törölni az array-ből.

### 3. `TOP_ENTRY_IDS` array — remove if present
Csak ha a Top 10 grid-ben szerepelt. Jelen szerint:
- `1-andro` BENNE van Performance `TOP_ENTRY_IDS`-ben (sor 257) → törölni
- `mk-677` BENNE van Performance `TOP_ENTRY_IDS`-ben (sor 262) → törölni
- A 19 pharma entry közül néhány valószínűleg benne van — ellenőrizni `src/data/libraries/pharmaceutical/index.js`-ben.

### 4. Category map — remove
`src/data/libraries/<library>/categories.js` exportál egy `<LIBRARY>_CATEGORIES` map-et (entry-id → kategória). Az adott `id` key-t törölni.

### 5. Research level map — remove
`src/data/libraries/<library>/researchLevel.js` exportál egy `getResearchLevel(entryId)` függvényt vagy `RESEARCH_LEVELS` map-et. Az adott entry research-level mapping-jét törölni.

### 6. Effects map (verify only)
`src/data/libraries/<library>/effects.js` az `EFFECT_CATEGORIES`-ban tartalmazhat entry-id referenciákat. Ha igen, törölni; ha az effects map kategória-szintű (NEM entry-szintű), átugorható.

### 7. Cross-entry references (verify only)
Ha az `interactionsWith` mezőben más entry-k hivatkoznak a törlendőre (pl. HGH `interactionsWith: ["mk-677"]`), törölni azt a referenciát is. Grep-pel keresni: `grep -rn "<id>" src/data/libraries/<library>/entries/`.

---

## Aggregate batch approach

**NEM** per-entry külön commit. **Egy commit** az egész 21-batch-re, mert:
- Validator + build csak egyszer fut
- A `LIBRARY_ENTRY_META` array egyetlen array, kevesebb merge-rizikó
- Cleaner git history

### Batch script (rough)
```bash
# 1. Delete lang-files
for id in 1-andro mk-677; do
  for lang in hu en pl; do
    rm "src/data/libraries/performance/entries/$lang/$id.js"
  done
done
for id in tirzepatide semaglutide liraglutide acarbose glimepirid berberin amlodipine bisoprolol ramipril apixaban sertralin venlafaxine mirtazapine aripiprazole lamotrigine azithromycin metronidazole methimazole methotrexate; do
  for lang in hu en pl; do
    rm "src/data/libraries/pharmaceutical/entries/$lang/$id.js"
  done
done

# 2. Edit performance/index.js, pharmaceutical/index.js, categories.js, researchLevel.js manually (Edit tool)

# 3. Validator
node scripts/validate-library-meta.mjs

# 4. Build
npm run build

# 5. Dev smoke test
npm run dev  # then cycle through both libraries in browser
```

---

## Verification gates (NEM skipelhető)

1. **`node scripts/validate-library-meta.mjs` PASS** — meta/files parity per lang directory
2. **`npm run build` PASS** — Vite build (`npm run build`) green; semmi broken import; vendor + entry chunks emittelve
3. **Manual smoke test `npm run dev`-en:**
   - Library Cube cycle: peptid → nootropic → performance → pharma → vissza
   - Mindkét érintett library tile-grid megjelenik (Performance most 15 tile, Pharmaceutical most 21 tile)
   - 1 surviving entry deep-link Performance-ből (pl. `#entry/performance/testosterone-info`) → EntryDetail renderel
   - 1 surviving entry deep-link Pharmaceutical-ből (pl. `#entry/pharmaceutical/metformin`) → EntryDetail renderel
   - 1 törölt entry deep-link (pl. `#entry/performance/mk-677`) → graceful fallback (404 page vagy library-grid redirect, NEM crash)
4. **Lighthouse spot-check** (opcionális, ha aggódunk a precache size-ra): 1 entry mobile sweep — Perf ≥85, A11y ≥95.

---

## Becsült munka

- **File deletion:** ~5 perc (script-tel)
- **`index.js` szerkesztések** (2 file × LIBRARY_ENTRY_META + TOP_ENTRY_IDS): ~20 perc
- **`categories.js` + `researchLevel.js` szerkesztések** (4 file): ~15 perc
- **Cross-reference grep + cleanup:** ~10 perc
- **Validator + build + smoke test:** ~10 perc
- **Total:** ~60 perc, 1 commit

---

## Acceptance criteria

- [ ] 63 lang-file törölve (6 perf + 57 pharma)
- [ ] `LIBRARY_ENTRY_META` mindkét library-ben tartalmazza a megmaradt entry-ket (15 perf, 21 pharma)
- [ ] `TOP_ENTRY_IDS` performance-ben már nem tartalmazza `1-andro` / `mk-677`-et
- [ ] `categories.js` + `researchLevel.js` mindkét library-ben tisztított
- [ ] Cross-entry `interactionsWith` referenciák átnézve, törölt entry-kre mutató ref-ek eltávolítva
- [ ] `validate-library-meta.mjs` PASS
- [ ] `npm run build` PASS
- [ ] Manual smoke test PASS (3 sub-pont)
- [ ] Single commit, opcionális tag `v0.14-library-trim`

---

## Sequencing relative to image generation

**Sorrend ajánlott:**
1. **ELŐSZÖR a deletion task** — 21 entry eltávolítva → tisztább library
2. **UTÁNA az image generation** — a 38 prompt (a `2026-05-18-library-image-prompts.md`-ben) csak a megmaradó 36 entry-re fut
3. **UTÁNA az image path update** — `image: null` → `image: "/<library>/<id>.png"` mind a 36 entry-n (3 lang × 36 = 108 file edit)

**Vagy fordítva**, ha a user már elkezdte a kép-gen-t a paid-Pro chat-en: akkor a deletion + image-path update PARALLEL, és csak ne generáljon képet a törlendő entry-khez (a prompt-spec a 36 megmaradó entry-re van írva, szóval erre vigyázni kell).

---

*Brainstorming session refs: `docs/superpowers/specs/2026-05-18-library-image-prompts.md` · Visual companion preview: `.superpowers/brainstorm/1348-1779134284/content/simplified-v3.html`*
