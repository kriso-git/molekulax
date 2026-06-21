# ADR-0003: The library adapter is an explicit allowlist with route-aware derived fields

**Status:** Accepted (evolved across v0.26–v0.31)

## Context
The four libraries share one render path (`EntryDetail` etc.), but their raw entry data differs in shape: flat strings vs `{hu,en,pl}` triplets, single-form vs multi-variant (form factors / esters), and per-library feature flags. `adaptLibraryEntry.js` normalizes a raw entry into the shape the components consume. It is the most-edited, most-regression-prone file in the codebase (multiple documented recurring breakages), so its contract is written down here.

## Decision
- `adaptLibraryEntry` returns an **explicit allowlist** of fields, NOT a spread of the raw entry. A new optional Entry field is invisible to the UI until it is added to the adapter's return — otherwise `EntryDetail` receives `undefined` and the conditional section silently never renders.
- **Localization:** values may be a flat string OR a `{hu,en,pl}` triplet; always resolve via a `flat(value, lang)` helper with HU fallback and thread `lang` through. A bare `typeof === 'string'` check breaks on triplets.
- **Variants (route-aware):** an entry may have `variants[]` (each with `routeId`, `routeLabel`, its own `image`, and overrides). Derived functions (`deriveQuickStart/Quality/Safety/Reconstitute/Dosing/WhatIs`, the Calculator) MUST branch on `_activeVariantId` rather than entry-level field presence — an entry-level early-return (`if (entry.quickStart) return ...`) blocks the variant switch (use a `hasFamilyDefault` flag before the switch).
- **Feature flags** (`features.calculator`, etc.) are library-level guards in `<lib>/index.js`; a library-spanning UI feature must flip the flag in **every** affected library before it ships.
- **Sync duplication:** fields used by cold deep-link logic must live in BOTH `LIBRARY_ENTRY_META` (sync) AND the full export; tile tags come from BOTH `LIBRARY_ENTRY_META.subCategory` AND `library.entryCategoryMap[id]` — a partial map silently breaks the tag render. New entries go in both.

## Consequences
- Adding a field is safe only when the adapter return + (where relevant) the meta sync are updated together.
- This file has no direct unit tests yet; changes are validated by `npm run smoke` (render crash) — but smoke covers only ~7 routes, so a conditional-section regression on one of ~180 other routes can pass unnoticed. A snapshot-test ring per shape (flat/triplet/variant/feature-flag) is the recommended next safeguard.
