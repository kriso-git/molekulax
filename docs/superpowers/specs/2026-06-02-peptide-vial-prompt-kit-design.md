# MolekulaX — Peptide Vial Prompt-Kit v2 + Integration (design)

**Date:** 2026-06-02
**Branch:** `feat/peptide-vial-prompt-kit`
**Status:** approved design → spec

## Motivation

40 of the 55 peptide entries still render the `VialFallback` SVG placeholder (`image: null`).
This delivers the **prompt-kit + integration pipeline** so the 40 can be filled with real
Molekulax-branded vial renders. Image generation itself is the user's manual Gemini
workflow (chosen 2026-06-02); this branch produces what's needed for it + the script that
binds delivered PNGs into the data.

## Key decisions (this session)

1. **Generation = manual Gemini 3 Pro Image ("Nano Banana Pro"), image-ref mode.** User
   generates; Claude reconciles + supplies prompts + runs integration.
2. **NEW reference image = the 2026-06-02 Tirzepatide vial** (replaces the old GHK-Cu ref).
   Cleaner holographic label, unbroken `MOLEKULAX` rounded-pill frame. Layout/label/glass/
   cap/foil/lighting all locked to this reference.
3. **Powder/liquid color = REAL appearance per substance** (overrides the old "all purple"
   brand rule). Most research peptides are white/off-white lyophilized cake; a few genuinely
   differ (see map). The reference's purple powder is overridden per entry.
4. **`Beim…` fragment excluded** — the reference still carries the lower-right `Beim…`
   artifact; the negative prompt hard-rejects it.
5. **Amounts** = the research-grade vial sizes from the original 50-table (unchanged).

## Scope: the 40 entries (reconciled 2026-06-02)

All 40 live `image: null` peptides map to the original 50-table with documented amounts.
Filename convention: **`<entryId>.png`** (lowercase), bound as `image: "/peptides/<id>.png"`.
(The existing 10 use legacy capitalized names — left as-is.)

## Per-peptide real-appearance map

**DEFAULT (unless listed below):** *fluffy white-to-off-white lyophilized powder cake,
~35% bottom fill, freeze-dried texture.* Applies to the large majority of research peptides.

| Entry id | Label name | Amount | Appearance (substance directive) |
|---|---|---|---|
| tirzepatide | Tirzepatide | 10 mg | white/off-white lyo powder |
| hgh | HGH | 10 IU | white lyo powder |
| cjc-1295-ipamorelin | CJC-1295 / Ipamorelin | 5 mg | white lyo powder |
| tesamorelin | Tesamorelin | 2 mg | white lyo powder |
| semaglutide | Semaglutide | 5 mg | white lyo powder |
| liraglutide | Liraglutide | 6 mg | white lyo powder |
| ghrp-2 | GHRP-2 | 5 mg | white lyo powder |
| ghrp-6 | GHRP-6 | 5 mg | white lyo powder |
| hexarelin | Hexarelin | 2 mg | white lyo powder |
| mk-677 | MK-677 | 25 mg | white powder |
| igf-1-lr3 | IGF-1 LR3 | 1 mg | white lyo powder |
| semax | Semax | 30 mg | white lyo powder |
| selank | Selank | 30 mg | white lyo powder |
| cerebrolysin | Cerebrolysin | 30 mg | **EXCEPTION — clear, very pale straw-yellow LIQUID ~80% fill** (sold as an aqueous ampoule solution, not a lyo cake) |
| melanotan-1 | Melanotan-1 | 10 mg | white/off-white lyo powder (the tan is the effect, not the powder) |
| kpv | KPV | 5 mg | white lyo powder |
| thymosin-alpha-1 | Thymosin Alpha-1 | 5 mg | white lyo powder |
| ll-37 | LL-37 | 5 mg | white lyo powder |
| humanin | Humanin | 5 mg | white lyo powder |
| mots-c | MOTS-c | 10 mg | white lyo powder |
| pinealon | Pinealon | 5 mg | white lyo powder |
| gonadorelin | Gonadorelin | 1 mg | white lyo powder |
| kisspeptin | Kisspeptin-10 | 5 mg | white lyo powder |
| oxytocin | Oxytocin | 5 mg | white lyo powder |
| aod-9604 | AOD-9604 | 5 mg | white lyo powder |
| 5-amino-1mq | 5-Amino-1MQ | 25 mg | off-white / very pale powder |
| nad-plus | NAD+ | 100 mg | **off-white with a faint tan/pink cast** (NAD+ powder is not pure white) |
| dsip | DSIP | 5 mg | white lyo powder |
| adipotide | Adipotide | 10 mg | white lyo powder |
| snap-8 | SNAP-8 | 10 mg | white lyo powder |
| matrixyl-3000 | Matrixyl 3000 | 5 mg | white/off-white lyo powder |
| ss-31 | SS-31 | 40 mg | white lyo powder |
| cagrilintide | Cagrilintide | 5 mg | white lyo powder |
| mazdutide | Mazdutide | 10 mg | white lyo powder |
| survodutide | Survodutide | 5 mg | white lyo powder |
| na-semax-amidate | NA Semax Amidate | 30 mg | white lyo powder |
| adalank | Adalank | 10 mg | white lyo powder |
| adamax | Adamax | 5 mg | white lyo powder |
| klow-protocol | KLOW Protocol | 10 mg | white/off-white lyo powder (multi-peptide blend) |
| lipo-c | Lipo-C | 100 mg | **EXCEPTION — pink/magenta** (lipotropic blend typically contains B12/cyanocobalamin → pink) |

**Appearance-call confidence:** the white-powder default is safe (research peptides are
overwhelmingly white lyophilized cake). The 3 flagged exceptions (Cerebrolysin liquid,
Lipo-C pink, NAD+ off-white) are stylized-realistic, not strict medical spec — **review
and adjust in spec review** if you'd prefer different.

## EDIT-PROMPT (image-ref mode — paste AFTER uploading the Tirzepatide reference)

```
You are looking at a reference image of a Molekulax peptide vial.

Generate a new image PIXEL-PERFECT identical to this reference EXCEPT for THREE changes:
  • Replace the peptide name "Tirzepatide" on the label with: {{NAME}}
  • Replace the amount "10 mg" on the label with: {{AMOUNT}}
  • Replace the purple powder with: {{APPEARANCE}}

EVERYTHING ELSE stays 100% identical to the reference:
  • Same 10ml clear glass vial, shape, proportions, height
  • Same dark gray rubber stopper + silver knurled aluminum crimp cap
  • Same holographic-iridescent silver-foil label (same size/position/edge bevel/rainbow shimmer)
  • Same "MOLEKULAX" rounded-pill frame at top, same ">99% Tisztaság" line, same
    "Kutatási célra ajánlott" line at the bottom
  • Same bold black sans-serif font family/weight/color, same centering
  • Same neutral pale-gray gradient background, same soft 3-point studio lighting,
    same camera angle, same 1:1 square aspect, same contact shadow

DO NOT add any text, batch/lot numbers, QR codes, expiry, barcodes, manufacturer info,
URLs, the "Beim" / "Beim..." fragment (it appears in the reference's lower-right — REMOVE it),
German/Polish/English word fragments, or any other element.
DO NOT change the glass, stopper, cap, label foil, layout, framing, or background.
DO NOT add Gemini/Google watermarks.

The name, the amount, and the substance appearance are the ONLY three things that change.
Aspect: 1:1 square, prefer 2048×2048.
```

`{{APPEARANCE}}` examples:
- default → *"a fluffy white-to-off-white lyophilized powder cake (~35% bottom fill, freeze-dried granular texture, subtle cracks)"*
- cerebrolysin → *"a clear, very pale straw-yellow transparent liquid filling ~80% of the vial (an aqueous solution, NOT a powder cake), subtle meniscus"*
- lipo-c → *"a soft pink/magenta lyophilized powder cake (~35% fill), the pink coming from a B12 lipotropic blend"*
- nad-plus → *"an off-white powder cake with a faint tan cast (~35% fill)"*

## Integration: `scripts/integrate-peptide-vials.mjs`

Runs when the user drops generated PNGs into `tmp/gemini-vials/<entryId>.png`. Behavior:
1. **Discover** — scan `tmp/gemini-vials/*.png`; for each, `entryId = basename`. Validate
   `entryId` is a real peptide entry with `image: null` (skip + warn otherwise). Partial
   batches OK (only present files are processed).
2. **Background removal** — `rembg i <src> <public/peptides/<id>.png>` (rembg 2.0.69 present).
   The pale-gray studio backdrop is stripped so the `EntryImage` PhotoFrame glow/shell reads
   through. Verify transparency via `sharp(...).stats().isOpaque === false` (per
   `feedback_read_tool_alpha_misleading`, NOT visual).
3. **Convert** — emit AVIF + WebP via the existing `convert-images.mjs` logic (or
   `npm run convert-images`).
4. **Bind image in 4 places per entry** (per `feedback_default_variant_image_sync`):
   - `LIBRARY_ENTRY_META` in `src/data/libraries/peptides/index.js` (`"image": null` → path)
   - `src/data/libraries/peptides/entries/{hu,en,pl}/<id>.js` top-level `"image": null` → path
   Use `fs.readFileSync/writeFileSync` regex-anchored by entry id (NOT the Edit tool — per
   `feedback_edit_tool_quote_corruption`). Idempotent (skip already-bound).
5. **Validate + build** — `npm run validate:meta` + `npm run build`; report bound count.
6. **Smoke** — note: after integration, `npm run smoke` still passes (new images are just
   `PhotoFrame` swaps; no render-path change).

The script is **dry-run-capable** (`--dry-run` lists what it WOULD bind without writing) so
it can be verified now, before any PNGs exist.

## Deliverables (this branch)

1. This spec.
2. `docs/superpowers/specs/...` prompt-kit reference (the EDIT-PROMPT + per-peptide table
   above is the canonical kit; optionally also mirror the EDIT-PROMPT into a top-level
   `docs/reference/` note for easy copy-paste during Gemini sessions).
3. `scripts/integrate-peptide-vials.mjs` + a small offline unit test for the pure parts
   (id-discovery + which-4-paths-to-bind), per repo `node --test` convention.
4. The user saves the Tirzepatide reference image to `docs/reference/` (their file; Claude
   cannot persist a chat-pasted image).

## Acceptance Criteria

1. Per-peptide table covers all 40 live `image: null` entries with name + amount + appearance.
2. `scripts/integrate-peptide-vials.mjs --dry-run` lists the correct 4 bind-targets per
   present PNG and skips non-peptide / already-bound ids; offline unit test green via
   `npm test`.
3. Integration (when PNGs arrive) binds 4 places/entry, `npm run build` PASS, transparency
   verified via sharp, `npm run smoke` still 7/7.
4. EDIT-PROMPT excludes the `Beim` fragment + supports the 3-variable swap.
5. No app/UX change until images are actually integrated (script is inert without PNGs).

## Out of scope

- The 2 magenta-residue polish images (`oral-syringe`, `topical-solution-clear`) — separate
  small follow-up (Gemini re-gen or color-correct); not blocking the vial batch.
- Re-generating the existing 10 vials (legacy capitalized filenames, already shipped).
