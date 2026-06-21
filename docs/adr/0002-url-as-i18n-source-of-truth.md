# ADR-0002: The URL is the single source of truth for language

**Status:** Accepted (2026-06, SEO Tier-1 Phase 3)

## Context
The site is trilingual (HU/EN/PL). Originally language came from a stored preference (localStorage), which is invisible to crawlers and produces no per-language URLs. For SEO each language needs its own crawlable URL with reciprocal `hreflang`. HU lives at the root; EN/PL are path-prefixed (`/en/...`, `/pl/...`) with localized slugs (e.g. `peptidek` / `peptides` / `peptydy`).

## Decision
**Language is derived from the URL prefix, not from storage.**
- `detectInitial()` (in `LanguageContext`) reads the `/en` or `/pl` prefix from `window.location.pathname`; no stored-preference fallback (it would disagree with a prefix-less HU URL and the prerendered HU HTML → first-paint flicker).
- `parsePath()` (`src/seo/urls.js`) maps a path → `{ ...route, lang }`.
- Every in-app `navigate(...)` MUST thread the current `lang` (via `entryPath(id, lang)` / `libraryPath(id, lang)` / `translatePath(route, code)`). A missing `lang` silently sends an `/en` page back to HU.
- Build-time: per-`<html lang>`, self-canonical, reciprocal `hreflang` + `x-default` → HU, `og:locale`, and JSON-LD `inLanguage` are localized in `prerender.mjs`.

## Consequences
- 588 crawlable, per-language URLs; correct `hreflang` graph; trilingual = ~3× pages (~29 min full Vercel build).
- New navigation code MUST pass `lang` or it regresses cross-language routing (the multi-variant variant-redirect was the canary). Verify language behavior in an **isolated** browser context — a shared localStorage masks it.
- The prerender name-guard needs the **localized** entry name per language (e.g. Letrozol/Letrozole) or its 60s wait times out.
