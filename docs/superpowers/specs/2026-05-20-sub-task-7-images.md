# Sub-Task 7 — Performance Library Restructure FINAL (Images + polish)

> **Status:** Spec v2 — revised 2026-05-20 evening (transparent-bg correction)
> **Roadmap:** 2026-06 Performance Library Restructure mega-phase Sub-Task 7/7 (~14% remaining → 100% close)
> **Ship-target:** `v0.25-perf-restructure-complete` (single megapush)
> **Predecessor:** `v0.22-perf-fat` (Sub-Task 6 SHIPPED 2026-05-20 14:45 CEST)

---

## 🚨 v2 revision note — what changed from v1

**v1 was wrong about backgrounds.** The original spec defined a "2-style-family rule" (Style A white-bg / Style B black-bg) based on visually inspecting 4 reference images. Re-verification on 2026-05-20 evening showed:

- `water-vial.png`, `oil-vial-yellow.png`, `oil-vial-orange.png`, `tablet-pile-yellow.png` → **TRANSPARENT PNG (alpha channel)** — the apparent "white background" was just the Read-tool image-viewer's default white render canvas
- `tablet-pile-white.png`, `blister-white-oval.png` → solid black bg (the only true-black-bg outliers)

**Site context:** the page background is `#07071e` (dark indigo, dark mode) / `#f4f6fb` (light mode). Images are rendered via `<PhotoFrame>` `object-contain` with no background mask. So **transparent PNG with alpha channel** is the only correct format — it cleanly blends into either theme. A white-bg PNG would render as a glaring white square on the dark page; a black-bg PNG would create a visible cutout edge.

**Corrected rule for all 6 new templates:** transparent PNG with alpha channel, 1024×1024, sRGB. The subject floats in alpha-space with a subtle soft drop-shadow baked into the render itself (acceptable, matches existing assets).

---

## 1. Goal & Scope

**Goal:** Close the Performance Library Restructure mega-phase by generating 6 new image-templates (transparent PNG), wiring 3 of them to live entries (Albuterol inhaled-variant, RU58841 default, L-Carnitine aq-variant), and leaving 3 as future-use assets for upcoming peptide nasal-spray batch + transdermal/syringe-form additions.

**In-scope:**
- 6 new Gemini-generated 1024×1024 **transparent-bg PNG** templates dropped into `public/performance/`
- AVIF + WebP conversion via existing `scripts/convert-images.mjs` (alpha-channel preserving)
- `scripts/update-library-images.mjs` extension (new mapping + variant-overrides)
- 3 live entry image-rebinds: Albuterol (variants[].inhaled.image), RU58841 (top-level + meta), L-Carnitine (variants[].aq.image)
- Validator PASS + build PASS gate
- Single megapush commit + tag `v0.25-perf-restructure-complete`

**Out-of-scope:**
- Per-entry dedicated images for the 14 v0.22 Sub-Task 6 entries
- Nootropic + peptide library image overhauls
- Lighthouse re-baseline
- Per-language image variants

---

## 2. Visual Style Guide (v2)

**Universal rule for all 6 templates:**

- **Background:** TRANSPARENT (alpha channel), NOT white, NOT black, NOT gradient. The subject must be cleanly isolated on alpha-space.
- **Lighting:** soft diffuse studio, gentle wraparound, realistic specular highlights
- **Shadow:** subtle soft drop-shadow baked-into the render directly beneath subject (medium opacity, soft edges) — acceptable and matches the existing transparent-PNG asset family
- **Rendering feel:** photorealistic 3D-render (Midjourney/Imagen aesthetic), high detail on glass/plastic specular highlights and transmission
- **Composition:** vertically-centered subject for upright items (~60-75% frame fill); diagonal three-quarter for elongated items (oral-syringe ~75%); slight tilt three-quarter for flat items (transdermal-patch ~70%)
- **Materials:** glass shows realistic refraction + transmission; metal caps are brushed/knurled with visible texture; plastic is smooth-matte
- **Color palette:** subject-natural colors only — NO brand colors, NO neon tints, NO oversaturation

**Universal NO-list:**

- NO text, labels, branding, logos, prescription info anywhere on the subject
- NO extra props in frame (single subject only, no scene-setting)
- NO photoreal humans, hands, body parts, no scene, no landscape
- NO oversaturation, neon, surreal lighting, glow effects
- NO plastic-fake reflection (must look physically plausible)
- The subject must look like a clean catalog product-shot indistinguishable from existing reference templates (`water-vial.png`, `oil-vial-yellow.png`)

**Reference templates for Gemini attachment:** the cleanest existing transparent-PNG references are `water-vial.png` (clear glass) and `oil-vial-yellow.png` (colored glass with the right rendering aesthetic). Attach one of these to every Gemini prompt to anchor the visual style.

---

## 3. Per-Template Gemini Prompts (v2 — single-block format)

Each prompt is a single copy-paste block. Negative instructions are integrated into the same prompt body as a "Do NOT render" tail (Gemini Imagen / 2.5 image-mode accepts this format natively).

### 3.1 `nasal-spray-clear.png` — FUTURE-USE (peptide nasal-spray backlog)

**Design note:** cone-shaped cap design (smooth white plastic cone narrowing to spray tip), NOT a protruding pump actuator with angled nozzle. Per 2026-05-20 user revision.

**Reference for Gemini:** `water-vial.png`

```
Product photography render of a single small clear glass nasal spray bottle, approximately 10ml capacity, with a smooth conical white plastic spray nozzle on top (no protruding pump actuator, no visible mechanism — just a clean tapered cone shape that narrows from the bottle neck up to a small rounded spray tip about 2cm tall, looking like a minimalist medical nasal-spray cone-cap design). Upright vertical orientation, three-quarter view, vertically centered subject filling about 70% of the frame. The bottle contains a small amount of clear transparent liquid filling roughly 1/3 of the volume. TRANSPARENT BACKGROUND with full alpha channel (the subject must be cleanly isolated on an empty transparent canvas — NO white background, NO black background, NO gradient, NO scene, just the bottle floating on alpha-transparent space). Soft diffuse studio lighting with gentle wraparound, creating realistic specular highlights on the glass curve. A subtle soft drop-shadow directly beneath the bottle (medium opacity, very soft edges) is acceptable as part of the rendered object. Photorealistic 3D-render style matching pharmaceutical catalog aesthetic. Sharp focus throughout. No label, no text, no branding, no logo on bottle or cap. Output as PNG 1024x1024 with transparent alpha channel, sRGB. Do NOT render: white background, black background, gradient background, text, labels, logos, brand markings, prescription info, multiple bottles, packaging boxes, blister packs, hands, people, scenes, landscapes, motion blur, surreal lighting, neon glow, oversaturation, amber glass, colored glass, protruding pump actuator, pump cap with angled nozzle, mechanical spray pump.
```

### 3.2 `inhaler-asthma.png` — LIVE-USE → Albuterol inhaled-variant

**Reference for Gemini:** `water-vial.png`

```
Product photography render of a single classic blue metered-dose-inhaler (MDI) — the standard rescue-inhaler design — with a glossy light-blue plastic L-shaped body, a white plastic actuator-mouthpiece protruding from the bottom-front, and the small silver metal medication canister visible inserted at the top opening. Upright vertical orientation, three-quarter view showing the curved plastic body and mouthpiece silhouette, vertically centered subject filling about 70% of the frame. TRANSPARENT BACKGROUND with full alpha channel (the subject must be cleanly isolated on an empty transparent canvas — NO white background, NO black background, NO gradient, NO scene). Soft diffuse studio lighting with gentle wraparound, creating subtle specular highlights on the glossy plastic body. A subtle soft drop-shadow directly beneath the inhaler (medium opacity, very soft edges) is acceptable as part of the rendered object. Photorealistic 3D-render style matching pharmaceutical catalog aesthetic. Sharp focus throughout. No label, no text, no branding, no logo, no dose counter window, no prescription info anywhere on the body. Output as PNG 1024x1024 with transparent alpha channel, sRGB. Do NOT render: white background, black background, gradient background, text, labels, logos, brand markings, prescriptions, stickers, dose counter numbers, multiple inhalers, packaging boxes, hands, people, scenes, landscapes, motion blur, surreal lighting, neon glow, oversaturation, dark blue, navy.
```

### 3.3 `oral-syringe.png` — FUTURE-USE

**Reference for Gemini:** `water-vial.png`

```
Product photography render of a single clear plastic oral medication syringe, approximately 5ml capacity, with a glossy white opaque plastic piston (visible thumb-flange and plunger rod) and a tapered tip at the front WITH NO NEEDLE (this is an oral dosing syringe, not a hypodermic). The barrel shows subtle small black tick-mark gradations along its length (no numerals, just minimalist measurement marks). The syringe is filled approximately halfway with clear transparent liquid. Diagonal three-quarter horizontal orientation, the syringe lying across the frame at roughly 30-degree angle, centered subject filling about 75% of the frame. TRANSPARENT BACKGROUND with full alpha channel (the subject must be cleanly isolated on an empty transparent canvas — NO white background, NO black background, NO gradient, NO scene). Soft diffuse studio lighting with gentle wraparound, creating subtle specular highlights along the clear plastic barrel. A subtle soft drop-shadow directly beneath the syringe (medium opacity, very soft edges) is acceptable as part of the rendered object. Photorealistic 3D-render style matching pharmaceutical catalog aesthetic. Sharp focus throughout. No label, no text, no branding, no logo, no numerals on the barrel. Output as PNG 1024x1024 with transparent alpha channel, sRGB. Do NOT render: needles, hypodermic needles, blood, syringes with needles, sharp needle tips, white background, black background, gradient background, text, labels, logos, brand markings, large numerals, dose numbers, multiple syringes, packaging, hands, people, scenes, landscapes, motion blur, surreal lighting, neon glow, oversaturation.
```

### 3.4 `transdermal-patch.png` — FUTURE-USE

**Reference for Gemini:** `oil-vial-yellow.png`

```
Product photography render of a single square transdermal medication patch, approximately 5cm by 5cm with rounded corners (about 3mm radius), beige-tan colored adhesive matrix-side facing up showing a uniform light-amber adhesive layer with a subtle fabric-backed texture suggesting the reservoir layer beneath. The patch is laid flat with a slight three-quarter tilt perspective (the patch tilted slightly toward camera, front edge closer than back edge — about 25-degree tilt angle). Centered subject filling about 70% of the frame. TRANSPARENT BACKGROUND with full alpha channel (the subject must be cleanly isolated on an empty transparent canvas — NO white background, NO black background, NO gradient, NO scene). Soft diffuse studio lighting from above-front creating an even matte finish on the patch surface and gentle definition of the rounded edges. A subtle soft drop-shadow directly beneath the patch (medium opacity, very soft edges) is acceptable as part of the rendered object. Photorealistic 3D-render style matching pharmaceutical catalog aesthetic. Sharp focus throughout. No label, no text, no branding, no logo on the patch surface. Output as PNG 1024x1024 with transparent alpha channel, sRGB. Do NOT render: white background, black background, gradient background, text, labels, logos, brand markings, prescriptions, multiple patches, packaging, blister packs, hands, people, scenes, landscapes, motion blur, surreal lighting, neon glow, oversaturation, peeling backing, removed liner showing, separated layers, pure overhead view.
```

### 3.5 `topical-solution-clear.png` — LIVE-USE → RU58841

**Reference for Gemini:** `water-vial.png`

```
Product photography render of a single clear glass dropper bottle, approximately 30ml capacity, with a glossy black plastic screw-cap that integrates a glass pipette dropper. The dropper rubber bulb at the top of the cap is also matte black (standard pharmacy dropper-cap design). The bottle stands upright with the dropper-cap fully screwed on, and the long glass pipette is visible suspended inside the clear bottle through the glass walls. Three-quarter view, vertically centered subject filling about 65% of the frame. The bottle contains clear transparent liquid filling about 2/3 of the volume. TRANSPARENT BACKGROUND with full alpha channel (the subject must be cleanly isolated on an empty transparent canvas — NO white background, NO black background, NO gradient, NO scene). Soft diffuse studio lighting with gentle wraparound, creating realistic specular highlights on the clear glass curve, and glass-transmission detail through the bottle showing the pipette inside. A subtle soft drop-shadow directly beneath the bottle (medium opacity, very soft edges) is acceptable as part of the rendered object. Photorealistic 3D-render style matching pharmaceutical catalog aesthetic. Sharp focus throughout. No label, no text, no branding, no logo. Output as PNG 1024x1024 with transparent alpha channel, sRGB. Do NOT render: amber glass, brown glass, colored glass, tinted glass, white background, black background, gradient background, text, labels, logos, brand markings, prescription information, multiple bottles, dropper-out-of-bottle, separate dropper beside bottle, hands, people, packaging boxes, scenes, landscapes, motion blur, surreal lighting, neon glow, oversaturation.
```

### 3.6 `ampoule-glass.png` — LIVE-USE → L-Carnitine aq-variant

**Reference for Gemini:** `water-vial.png`

```
Product photography render of a single clear glass medical ampoule, classic European pharmaceutical snap-neck design, approximately 2ml capacity, filled with clear transparent liquid. The ampoule has the characteristic narrow tapered top with a small thin colored break-ring around the neck (use neutral blue tone for the ring). The body is a small cylindrical clear-glass tube. Upright vertical orientation, three-quarter view, vertically centered subject filling about 60% of the frame (ampoule is naturally small, do not over-scale). TRANSPARENT BACKGROUND with full alpha channel (the subject must be cleanly isolated on an empty transparent canvas — NO white background, NO black background, NO gradient, NO scene). Soft diffuse studio lighting with gentle wraparound, creating realistic specular highlights on the clear glass body. A subtle soft drop-shadow directly beneath the ampoule (medium opacity, very soft edges) is acceptable as part of the rendered object. Photorealistic 3D-render style matching pharmaceutical catalog aesthetic. Sharp focus throughout. No label, no text, no branding, no logo, no dose-line markings on the glass. Output as PNG 1024x1024 with transparent alpha channel, sRGB. Do NOT render: amber glass, brown glass, colored glass, tinted glass, white background, black background, gradient background, text, labels, logos, brand markings, prescription, multiple ampoules, broken glass, opened ampoule, snapped-off top, ampoule lying on side, hands, people, packaging boxes, scenes, landscapes, motion blur, surreal lighting, neon glow, oversaturation.
```

---

## 4. Anti-AI-Slop Guard (per-template verification checklist)

After Gemini generates each PNG, **before dropping it into `public/performance/`**, visually verify:

- [ ] **Transparent background** (alpha channel preserved — when previewed against a dark surface or in an image viewer that shows alpha-checkerboard, the subject must be cleanly isolated)
- [ ] **NO white/black/gradient background** filling the canvas
- [ ] No text, label, or branding visible on the subject
- [ ] No extra props in frame (only the target object + soft drop-shadow)
- [ ] No hands, person, body parts, scene, landscape
- [ ] Colors natural (no neon, oversaturation, surreal hues)
- [ ] Sharp focus on the subject
- [ ] 1024×1024 square PNG dimensions
- [ ] **Side-by-side check:** drop the new PNG next to `water-vial.png` (or `oil-vial-yellow.png`) in an image viewer. The new render should match in style, lighting, shadow treatment, and transparent-isolation quality.

**If any check fails, regenerate with a refined prompt before delivering.** The #1 failure mode based on Gemini behavior is rendering a white or black square background instead of true alpha — explicitly state "TRANSPARENT BACKGROUND with full alpha channel" in the prompt and refuse outputs that arrive with a solid bg fill.

**PNG-format note:** if Gemini returns WebP or JPG (no alpha), Phase B's image-conversion script can re-export to PNG, but the alpha channel cannot be recovered if the original render baked a solid background. Always request PNG output explicitly in the prompt.

---

## 5. File-Naming Convention & Drop Location

**Drop location:** `public/performance/<template>.png`

**Naming:**
- `nasal-spray-clear.png`
- `inhaler-asthma.png`
- `oral-syringe.png`
- `transdermal-patch.png`
- `topical-solution-clear.png`
- `ampoule-glass.png`

**Post-drop pipeline:**
1. Run `node scripts/convert-images.mjs` → emits matching `.webp` (Q80, alpha-preserving) + `.avif` (Q60, effort=4, alpha-preserving) for each PNG
2. Verify all 18 files present (`*.png`, `*.webp`, `*.avif`) in `public/performance/`
3. PWA precache updated automatically by `vite-plugin-pwa` Workbox glob on next build

---

## 6. Script Changes — `scripts/update-library-images.mjs`

**Diff target:** extend existing one-shot script with 1 new mapping + 2 new variant-overrides.

**6.1 New `PERFORMANCE_IMAGES` entry (1 line):**
```js
'ru58841': '/performance/topical-solution-clear.png',
```

**6.2 New `VARIANT_IMAGE_OVERRIDES` map + helper:**

```js
const VARIANT_IMAGE_OVERRIDES = {
  'albuterol': {
    'inhaled': '/performance/inhaler-asthma.png',
  },
  'l-carnitine': {
    'aq': '/performance/ampoule-glass.png',
  },
}
```

Add `applyVariantImageOverrides(path, entryId, overrides)` that:
1. Reads the per-lang body file
2. For each `(variantId, newImagePath)` in `overrides`, finds the variant block by regex anchored on `"id": "<variantId>"` up to the next `},`
3. Replaces the `"image":` field within that block only
4. Writes back atomically

**6.3 Existing `VARIANT_REPLACEMENTS` const:** KEEP unchanged.

---

## 7. Acceptance Criteria

**Build-gate checks:**
- [ ] `node scripts/validate-library-meta.mjs` PASS (4 lib × 193 entries)
- [ ] `npm run build` PASS in <12s
- [ ] PWA precache total <5120 KiB (currently 2998 KiB; +6 PNG est. +250-400 KiB)
- [ ] All 18 new image files present in `public/performance/`
- [ ] Visual check on `npm run dev`: all 6 new images render with transparent isolation against `#07071e` page bg (no white/black square cutouts)

**Smoke verification:**
- [ ] `#entry/performance/albuterol` → switch to inhaled variant → image swaps to `inhaler-asthma`
- [ ] `#entry/performance/ru58841` → hero shows `topical-solution-clear`
- [ ] `#entry/performance/l-carnitine` → switch to aq variant → image swaps to `ampoule-glass`
- [ ] LibraryGallery tile for Albuterol uses oral-image (unchanged)
- [ ] LibraryGallery tile for RU58841 uses topical-solution-clear (new)
- [ ] LibraryGallery tile for L-Carnitine uses oral-image (unchanged)

**Performance non-regression:**
- [ ] Lighthouse Mobile Performance on RU58841 entry page ≥85
- [ ] No new Workbox precache warnings on build

---

## 8. Risk & Rollback

**Risk-vector 1 — Gemini-output quality variance / solid-bg fill instead of alpha.** Some prompts may need 2-3 regeneration cycles. Mitigation: anti-slop checklist (§4), regenerate before drop, explicit "TRANSPARENT BACKGROUND with full alpha channel" in prompt.

**Risk-vector 2 — PWA precache cap breach.** 6 new PNGs at full quality. Mitigation: AVIF + WebP are primary precache; PNG fallback. Convert-images.mjs configured for aggressive compression.

**Risk-vector 3 — Variant-image-override script edge case.** L-Carnitine has oral + aq variants; Albuterol has oral + inhaled. The override must NOT rebind the oral-variant. Mitigation: tight regex matching the `"id": "<variantId>"` block boundary.

**Risk-vector 4 — Alpha channel lost in conversion.** AVIF/WebP must preserve alpha; verify `convert-images.mjs` config does NOT flatten to bg.

**Rollback strategy:**
- Single commit `git revert <hash>` → entire ship reversed
- Tag delete: `git tag -d v0.25-perf-restructure-complete && git push origin :refs/tags/v0.25-perf-restructure-complete`
- Vercel auto-redeploys previous tag (`v0.24-cross-link-reciprocation`) within ~3 min
- Static assets remain in `public/performance/` after revert (no harm)

---

## 9. Out-of-Spec — Defer Note

- **Per-entry dedicated images for 14 v0.22 Sub-Task 6 entries** — stay on generic templates
- **Peptide library nasal-spray multi-variant addition** (8 peptides) — separate session uses `nasal-spray-clear.png` once entries written
- **Pharmaceutical library image quality upgrade** — separate session
- **Lighthouse 3-run median GH-Action** — pre-existing backlog
- **AVIF Q-tuning per asset-class** — pre-existing backlog

---

## 10. References

- **Predecessor spec:** `docs/superpowers/specs/2026-05-20-perf-restructure-sub-task-6-fat.md`
- **Existing image-update script:** `scripts/update-library-images.mjs`
- **AVIF/WebP converter:** `scripts/convert-images.mjs` (verify alpha-preserving config)
- **Library shape:** `src/data/libraries/shape.js`
- **Image-rendering component:** `src/components/EntryImage.jsx` (`PhotoFrame` `object-contain`, no bg mask, 3-source `<picture>` chain AVIF → WebP → PNG)
- **Site bg tokens:** `src/index.css` `--bg-base: #07071e` (dark) / `#f4f6fb` (light)
- **Library validator:** `scripts/validate-library-meta.mjs`

---

## 11. Lessons learned (revised 2026-05-20 evening)

- **`Read`-tool image rendering misleads on alpha-channel PNGs.** The viewer composites alpha-transparent PNG against its own white canvas, making it look like a white-bg image. Always verify transparency claim by also checking the file format / using `sharp metadata()` or by overlaying on a non-white surface.
- **`tablet-pile-white.png` and `blister-white-oval.png` are the only true-black-bg outliers** in the existing library. They predate the transparent-PNG convention. Future ship: consider re-rendering them transparent for consistency (out of Sub-Task 7 scope).
- **Single-block prompt format works better than separate negative-prompt field** for Gemini Imagen / 2.5 image-mode (no dedicated negative field in chat UX). Embed "Do NOT render: ..." tail in the same prompt body.
