# MolekulaX — Performance + Pharmaceutical kép-prompt batch (v1)

**Date:** 2026-05-18
**Target model:** Gemini 3 Pro Image (a.k.a. "Nano Banana Pro") on https://gemini.google.com (Pro subscription manual chat workflow)
**Output:** 38 prompts → 36 unique entries (2 entries — Superdrol, Minoxidil — get 2 visual forms each)

---

## Workflow (manual chat)

1. Copy each prompt block (Subject → Aspect, the full structured text between the `---` markers) one at a time
2. Paste into the gemini.google.com Pro chat input
3. Generate → download the resulting PNG
4. Save as `e:/Website Biz/molekulax/public/<library>/<entry-id>.png` where library is `performance` or `pharmaceutical`
5. Run `node scripts/convert-images.mjs` to emit AVIF + WebP variants
6. Update the corresponding `entry.image` field from `null` → `/<library>/<entry-id>.png` (in `src/data/libraries/<library>/entries/<lang>/<entry-id>.js`, all 3 langs)
7. Re-test in the browser (`npm run dev`)

## Global style policy (applies to ALL prompts)

- **Performance lighting:** soft 3-point studio + very subtle warm amber edge-glow on silhouette (~20% intensity, NOT a halo, NOT dramatic). Dark gradient backdrop (NOT pitch-black void). Calm cinematic mood.
- **Pharmaceutical lighting:** soft 3-point clinical + very subtle cool cyan edge-glow (#0ea5e9 @ ~20%, NOT a halo). Dark navy gradient backdrop. Clean clinical mood.
- **All blisters (18 prompts):** ORIENTATION LOCK — long axis runs upper-left (near) → lower-right (far). Camera above-left, 12° down. Foil back peeks on LOWER-RIGHT. Mirror-flip explicitly forbidden in negative prompt.
- **All vials (6 prompts):** CLEAR colorless borosilicate glass (NOT amber, NOT tinted). Only the liquid color varies per entry.
- **All entries:** NO brand names, NO logos, NO text, NO embossing, NO packaging boxes, NO leaflets, NO hands, NO people, NO cartoon, NO 2D.
- **Aspect:** 1:1 square, 1024×1024 minimum, prefer 2048×2048.

## Data deletions (SEPARATE TASK, NOT covered by image generation)

These entries must be removed from `src/data/libraries/` data files + meta indexes + tests. Separate implementation plan needed.

**Performance — 2 entries to delete:**
- `1-andro` — HU/EN/PL entry files + `entries-meta.js` + `entries/index.js`
- `mk-677` — same

**Pharmaceutical — 19 entries to delete:**
- `tirzepatide`, `semaglutide`, `liraglutide`, `acarbose`, `glimepirid`, `berberin`, `amlodipine`, `bisoprolol`, `ramipril`, `apixaban`, `sertralin`, `venlafaxine`, `mirtazapine`, `aripiprazole`, `lamotrigine`, `azithromycin`, `metronidazole`, `methimazole`, `methotrexate`

After deletion: Performance = 15 entries, Pharmaceutical = 21 entries.

---

# 🔴 PERFORMANCE LIBRARY (16 prompts for 15 entries)

> Superdrol gets two prompts (vial form + tablet pile form). Decide later which becomes the canonical `image:` (or use one for tile + one for hero detail).

## 1. Testosterone — clear glass · yellowish pale-yellow oil

---

**Subject:** A single 10ml pharmaceutical-grade CLEAR COLORLESS glass vial standing upright, with a gray rubber stopper sealed by a knurled silver aluminum crimp cap. The vial contains a viscous oil-based liquid in a soft yellowish pale-yellow color (like very light olive oil, slightly warm-toned, hex around #fed35c with low saturation), filling about 80% of the bottle, with a subtle meniscus visible at the top. The glass itself is fully transparent and uncolored — you can see straight through it where there is air space at the top, and the oil color shows through cleanly at the bottom. The label area is COMPLETELY BLANK — no text, no logo, no brand, no markings of any kind.

**Material:** Thick clear borosilicate pharmaceutical glass (NOT amber, NOT tinted — fully transparent like a laboratory beaker), with realistic refraction, subtle vertical highlight along the curved sides showing the glass thickness, and clean light passing through the air-space portion at the top. The oil inside is mildly translucent — light passes through it with a soft pale-yellow tint, slight internal caustics from the meniscus. Aluminum crimp cap has fine knurled texture with soft brushed-metal sheen; gray rubber stopper has matte finish with a tiny puncture mark.

**Lighting:** Soft three-point cinematic studio lighting, gentle and refined — NOT dramatic. Primary key light from the upper-left at 45 degrees, large diffused softbox (very soft shadows). A very subtle warm amber edge-glow on the silhouette — not a rim halo, just a hint of warm illumination kissing the glass edges at low intensity (~20% of key brightness). Soft cool fill from below-front to lift shadows. Background is a clean dark gradient (NOT pure pitch black), smooth falloff from #1a1410 near the vial to #0a0807 at the edges of the frame. No volumetric haze, no dust particles, no atmospheric drama. Clean, calm, premium-product feel.

**Environment:** Smooth dark gradient studio backdrop, no visible surface seam, the vial sits on a barely-perceptible dark plane with a soft contact-shadow. No props, no needles, no boxes, no packaging.

**Camera:** Macro product photograph, 100mm macro lens, f/4 aperture (slightly deeper DoF for a calmer look), ISO 100. Camera at center-height with a subtle 5-degree tilt downward for elegance. Shallow but smooth depth of field — vial body razor-sharp, cap softens gradually, background dissolves into smooth dark gradient.

**Quality:** Hyperrealistic 3D product render, octane-render quality with denoiser, ray-traced clear-glass refractions, ray-traced reflections on the metal cap, sub-surface scattering through the pale yellow oil, sub-pixel sharpness, magazine-grade luxury product photography, calm cinematic color grade — soft yellow midtones, gentle dark shadows, NO crushed blacks, NO harsh contrast, looks like a Cinema 4D + Octane render at the highest possible quality with a refined editorial mood, 8K hyperdetail.

**Negative:** NO brand name, NO "Testosterone" text, NO "Sustanon" text, NO "Nebido" text, NO "Cypionate" text, NO "Enanthate" text, NO logo, NO text, NO label markings, NO packaging box, NO syringe, NO needle, NO people, NO hands, NO doctor, NO pharmacist, NO cartoon, NO flat 2D illustration, NO sketch, NO drawing, NO low quality, NO blurry, NO watermark, NO strong red rim light, NO dramatic glowing halo, NO neon edge glow, NO heavy contrast, NO pitch-black void background, NO crushed shadows, NO amber-colored glass, NO brown glass, NO tinted glass, NO dark glass bottle — the glass must be fully transparent and colorless.

**Aspect:** 1:1 square, 1024×1024 minimum, prefer 2048×2048 or higher if available.

---

## 2. Trenbolone — clear glass · darker golden-yellow oil with orange undertone

---

**Subject:** A single 10ml pharmaceutical-grade CLEAR COLORLESS glass vial standing upright, with a gray rubber stopper sealed by a knurled silver aluminum crimp cap. The vial contains a viscous oil-based liquid in a darker golden-yellow color with a subtle warm orange undertone (like aged sunflower oil or a touch warmer than pale honey, hex around #fba01e with moderate saturation — distinctly darker and warmer than Testosterone, but NOT amber-brown), filling about 80% of the bottle, with a subtle meniscus visible at the top. The glass itself is fully transparent and uncolored — you can see straight through it where there is air space at the top, and the warm golden-orange oil shows through cleanly at the bottom. The label area is COMPLETELY BLANK — no text, no logo, no brand, no markings of any kind.

**Material:** Thick clear borosilicate pharmaceutical glass (NOT amber, NOT tinted — fully transparent like a laboratory beaker), with realistic refraction, subtle vertical highlight along the curved sides showing the glass thickness, and clean light passing through the air-space portion at the top. The oil inside is mildly translucent — light passes through it with a warm golden-yellow tint with subtle orange undertone (darker and warmer than Testosterone's pale yellow, but still clearly a "yellow" color family — NOT amber-brown, NOT honey-amber, NOT red-orange). Slight internal caustics from the meniscus. Aluminum crimp cap has fine knurled texture with soft brushed-metal sheen; gray rubber stopper has matte finish with a tiny puncture mark.

**Lighting:** Soft three-point cinematic studio lighting, gentle and refined — NOT dramatic. Primary key light from the upper-left at 45 degrees, large diffused softbox (very soft shadows). A very subtle warm amber edge-glow on the silhouette — not a rim halo, just a hint of warm illumination kissing the glass edges at low intensity (~20% of key brightness). Soft cool fill from below-front to lift shadows. Background is a clean dark gradient (NOT pure pitch black), smooth falloff from #1a1410 near the vial to #0a0807 at the edges of the frame. No volumetric haze, no dust particles, no atmospheric drama. Clean, calm, premium-product feel.

**Environment:** Smooth dark gradient studio backdrop, no visible surface seam, the vial sits on a barely-perceptible dark plane with a soft contact-shadow. No props, no needles, no boxes, no packaging.

**Camera:** Macro product photograph, 100mm macro lens, f/4 aperture, ISO 100. Camera at center-height with a subtle 5-degree tilt downward. Shallow but smooth depth of field — vial body razor-sharp, cap softens gradually, background dissolves into smooth dark gradient.

**Quality:** Hyperrealistic 3D product render, octane-render quality with denoiser, ray-traced clear-glass refractions, ray-traced reflections on the metal cap, sub-surface scattering through the warm golden-yellow oil, sub-pixel sharpness, magazine-grade luxury product photography, calm cinematic color grade — warm golden-yellow midtones with subtle orange-touched highlights, gentle dark shadows, NO crushed blacks, NO harsh contrast, looks like a Cinema 4D + Octane render at the highest possible quality with a refined editorial mood, 8K hyperdetail.

**Negative:** NO brand name, NO "Trenbolone" text, NO "Tren" text, NO "Parabolan" text, NO logo, NO text, NO label markings, NO packaging box, NO syringe, NO needle, NO people, NO hands, NO doctor, NO pharmacist, NO cartoon, NO flat 2D illustration, NO sketch, NO drawing, NO low quality, NO blurry, NO watermark, NO strong red rim light, NO dramatic glowing halo, NO neon edge glow, NO heavy contrast, NO pitch-black void background, NO crushed shadows, NO amber-colored glass, NO brown glass, NO tinted glass, NO dark glass bottle, NO red-orange oil, NO neon-orange oil, NO honey-amber oil that looks brown, NO deep dark amber oil, NO pale lemon oil (too light), NO transparent water-clear oil — the glass must be fully transparent colorless, the oil must be a clearly visible warm golden-yellow with subtle orange undertone (darker than Testosterone but not amber-brown).

**Aspect:** 1:1 square, 1024×1024 minimum, prefer 2048×2048 or higher if available.

---

## 3. Nandrolone — clear glass · yellowish pale-yellow oil (matches Testosterone)

---

**Subject:** A single 10ml pharmaceutical-grade CLEAR COLORLESS glass vial standing upright, with a gray rubber stopper sealed by a knurled silver aluminum crimp cap. The vial contains a viscous oil-based liquid in a soft yellowish pale-yellow color (like very light olive oil, slightly warm-toned, hex around #fed35c with low saturation, same shade as Testosterone), filling about 80% of the bottle, with a subtle meniscus visible at the top. The glass itself is fully transparent and uncolored. The label area is COMPLETELY BLANK.

**Material:** Thick clear borosilicate pharmaceutical glass (NOT amber, NOT tinted — fully transparent), with realistic refraction, subtle vertical highlight along the curved sides. The oil inside is mildly translucent with a soft pale-yellow tint, slight internal caustics from the meniscus. Aluminum crimp cap has fine knurled texture; gray rubber stopper has matte finish with a tiny puncture mark.

**Lighting:** Soft three-point cinematic studio lighting, gentle and refined. Primary key light from upper-left at 45°, diffused softbox. Very subtle warm amber edge-glow on silhouette (~20% intensity, not a halo). Soft cool fill from below-front. Background is a clean dark gradient (NOT pitch black), smooth falloff from #1a1410 to #0a0807. Clean, calm, premium-product feel.

**Environment:** Smooth dark gradient studio backdrop, no surface seam, vial floats on a barely-perceptible dark plane with soft contact-shadow.

**Camera:** Macro product photograph, 100mm macro lens, f/4 aperture, ISO 100. Center-height, 5° downward tilt. Vial razor-sharp, cap soft, background gradient.

**Quality:** Hyperrealistic 3D product render, octane-render quality, ray-traced clear-glass refractions, sub-surface scattering through pale yellow oil, 8K hyperdetail, calm cinematic color grade with soft yellow midtones, magazine-grade luxury product photography.

**Negative:** NO brand name, NO "Nandrolone" text, NO "Deca-Durabolin" text, NO "Deca" text, NO "Decanoate" text, NO logo, NO text, NO label, NO packaging, NO syringe, NO needle, NO people, NO hands, NO cartoon, NO flat 2D, NO sketch, NO low quality, NO blurry, NO watermark, NO strong rim light, NO dramatic halo, NO pitch-black void, NO crushed shadows, NO amber-colored glass, NO brown glass, NO tinted glass — fully transparent colorless glass.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 4. Superdrol (vial form) — clear glass · pale lemon-yellow oil

---

**Subject:** A single 10ml pharmaceutical-grade CLEAR COLORLESS glass vial standing upright, with a gray rubber stopper sealed by a knurled silver aluminum crimp cap. The vial contains a viscous oil-based liquid in a clean light yellow color (like pale lemon, slightly cooler than warm amber, hex around #fef08a with low saturation), filling about 80% of the bottle, with a subtle meniscus visible at the top. The glass itself is fully transparent and uncolored. Label area COMPLETELY BLANK.

**Material:** Thick clear borosilicate pharmaceutical glass (NOT amber, NOT tinted — fully transparent). The oil inside is mildly translucent with a soft pale lemon-yellow tint (cooler/cleaner than Testosterone, NOT warm-orange). Aluminum crimp cap with fine knurled texture; gray rubber stopper with matte finish.

**Lighting:** Soft three-point cinematic studio lighting. Primary key from upper-left at 45°. Very subtle warm amber edge-glow on silhouette (~20%). Soft cool fill from below. Dark gradient backdrop (#1a1410 → #0a0807, NOT pitch black).

**Environment:** Smooth dark gradient backdrop, soft contact-shadow under vial.

**Camera:** Macro 100mm f/4 ISO100, center-height with 5° downward tilt, vial razor-sharp.

**Quality:** Hyperrealistic 3D, octane render, ray-traced clear-glass refractions, sub-surface scattering through pale lemon-yellow oil, 8K, calm cinematic with soft cool-yellow midtones (NOT warm-amber), magazine-grade.

**Negative:** NO brand, NO "Superdrol" text, NO "Methasterone" text, NO logo, NO text, NO label, NO packaging, NO syringe, NO needle, NO people, NO hands, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong rim, NO drama, NO pitch-black void, NO crushed shadows, NO amber glass, NO brown glass, NO tinted glass, NO warm-orange oil, NO golden-amber oil, NO honey oil.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 5. HGH — clear glass · bacteriostatic water (fully transparent liquid)

---

**Subject:** A single 10ml pharmaceutical-grade CLEAR COLORLESS glass vial standing upright, with a gray rubber stopper sealed by a knurled silver aluminum crimp cap. The vial contains a CRYSTAL CLEAR colorless transparent liquid (bacteriostatic water, no color, no tint, like distilled water), filling about 80% of the bottle, with a clean meniscus at the top. The glass and liquid are both fully transparent — you can see straight through the entire vial except for the cap area. Label area COMPLETELY BLANK.

**Material:** Thick clear borosilicate pharmaceutical glass with realistic refraction, subtle vertical highlight along curved sides. The liquid inside is FULLY clear and colorless (NOT yellow, NOT amber, NOT cloudy — perfectly transparent water-clear), with light passing through unchanged, subtle internal caustics from the meniscus showing the water surface. Aluminum crimp cap with fine knurled texture; gray rubber stopper with matte finish, tiny puncture mark.

**Lighting:** Soft three-point cinematic studio lighting. Primary key from upper-left at 45°, large diffused softbox. Very subtle warm amber edge-glow on silhouette (~20%, not a halo). Soft cool fill from below. Background dark gradient (#1a1410 → #0a0807, NOT pitch black).

**Environment:** Smooth dark gradient backdrop, no surface seam, vial floats on barely-perceptible dark plane with soft contact-shadow.

**Camera:** Macro 100mm f/4 ISO100, center-height with 5° downward tilt. Vial razor-sharp, cap softens, background gradient.

**Quality:** Hyperrealistic 3D product render, octane quality, ray-traced clear-glass refractions, ray-traced reflections on metal cap, accurate water transparency with subtle caustics, 8K hyperdetail, calm cinematic color grade with neutral cool midtones, magazine-grade pharmaceutical photography.

**Negative:** NO brand name, NO "HGH" text, NO "Humatrope" text, NO "Genotropin" text, NO "somatropin" text, NO logo, NO text, NO label, NO packaging, NO syringe, NO needle, NO people, NO hands, NO cartoon, NO 2D, NO low quality, NO blurry, NO watermark, NO strong rim light, NO dramatic halo, NO pitch-black void, NO crushed shadows, NO amber glass, NO brown glass, NO tinted glass, NO yellow liquid, NO amber liquid, NO cloudy suspension, NO white powder, NO lyophilized cake at the bottom — the liquid must be fully clear and colorless like distilled water.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 6. EPO — clear glass · bacteriostatic water (fully transparent liquid, same as HGH)

---

**Subject:** A single 10ml pharmaceutical-grade CLEAR COLORLESS glass vial standing upright, with a gray rubber stopper sealed by a knurled silver aluminum crimp cap. The vial contains a CRYSTAL CLEAR colorless transparent liquid (bacteriostatic water, identical visual to HGH vial), filling about 80% of the bottle. The glass and liquid are both fully transparent. Label area COMPLETELY BLANK.

**Material:** Same as HGH — thick clear borosilicate glass, fully transparent water-clear liquid, aluminum crimp cap, gray rubber stopper.

**Lighting:** Same soft 3-point as HGH — soft key upper-left, subtle warm edge-glow (~20%), dark gradient backdrop.

**Environment:** Same dark gradient backdrop with soft contact-shadow.

**Camera:** Macro 100mm f/4 ISO100, 5° downward tilt.

**Quality:** Hyperrealistic 3D octane-quality, ray-traced clear-glass refractions, water transparency with subtle caustics, 8K, calm cinematic neutral cool midtones.

**Negative:** NO brand name, NO "EPO" text, NO "Erythropoietin" text, NO "Epoetin" text, NO "Procrit" text, NO "Epogen" text, NO logo, NO text, NO label, NO packaging, NO syringe, NO needle, NO people, NO hands, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong rim, NO drama, NO pitch-black void, NO crushed shadows, NO amber glass, NO brown glass, NO tinted glass, NO yellow liquid, NO amber liquid, NO cloudy suspension, NO red liquid (despite EPO's medical association with red blood cells) — fully clear colorless water-like liquid only.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 7. Anavar — scored white tablet pile (Performance accent: soft warm edge-glow)

---

**Subject:** A pile of approximately fifteen small round white pharmaceutical tablets scattered and stacked in a loose dimensional heap. Each tablet is about 6mm in diameter, pure white pharmaceutical-grade compressed powder, with a single clean vertical score line bisecting the pill down the middle. The score line is crisp, centered, slightly recessed. Some tablets lie flat showing the score line, others stand on edge revealing their thin cylindrical profile, others overlap creating dimensional depth. The pile occupies the center of the frame with the topmost tablet slightly tilted toward the camera. NO text, NO numbers, NO logo, NO embossed markings of any kind on any tablet.

**Material:** Smooth pharmaceutical-grade compressed white powder with realistic micro-surface texture (slightly chalky, faint manufacturing tool-marks at the very edge bevel, sub-pixel grain). The score line is a clean precision-pressed groove ~0.3mm deep with sharp edges. Soft micro-reflection on each curved surface, subtle ambient occlusion in the contact points between stacked tablets, tiny shadow gaps revealing the stack depth.

**Lighting:** Soft three-point cinematic studio lighting — calm and refined, NOT dramatic. Primary key light from the upper-left at 45 degrees, diffused softbox. Very subtle warm amber edge-glow on silhouettes (~20% intensity, NOT a halo). Soft cool fill from below-front. Background dark gradient (NOT pitch black), smooth falloff from #1a1410 near the pile to #0a0807 at frame edges.

**Environment:** Smooth dark gradient studio surface, no visible horizon line, the tablet pile sits on a barely-perceptible dark plane with soft contact-shadow. No props, no other objects.

**Camera:** Macro product photograph, 100mm macro lens, f/2.8 aperture, ISO 100. Camera angle ~25° above horizontal so the pile reveals dimensional depth. Front tablets tack-sharp, mid tablets crisp, rear tablets softly defocused into bokeh.

**Quality:** Hyperrealistic 3D product render, octane-render quality with denoiser, ray-traced contact shadows, sub-surface scattering through the compressed powder, sub-pixel sharpness on the score lines, magazine-grade pharmaceutical product photography, calm cinematic color grade with soft warm-neutral midtones, 8K hyperdetail.

**Negative:** NO brand name, NO "Oxandrolone" text, NO "Anavar" text, NO logo, NO numbers or letters embossed, NO label, NO packaging box, NO blister pack, NO pill bottle, NO hands, NO fingers, NO people, NO pharmacist, NO doctor, NO syringe, NO needle, NO water glass, NO measuring spoon, NO cartoon, NO flat 2D illustration, NO sketch, NO low quality, NO blurry foreground, NO watermark, NO strong red rim, NO dramatic halo, NO pitch-black void, NO crushed shadows.

**Aspect:** 1:1 square, 1024×1024 minimum, prefer 2048×2048 or higher.

---

## 8. Dianabol — scored white tablet pile (same template as Anavar)

---

**Subject:** A pile of approximately fifteen small round white pharmaceutical tablets scattered and stacked in a loose dimensional heap. Each tablet is about 6mm in diameter, pure white pharmaceutical-grade compressed powder, with a single clean vertical score line bisecting the pill down the middle. Some tablets lie flat showing the score line, others stand on edge, others overlap creating dimensional depth. NO text, NO numbers, NO logo, NO embossed markings.

**Material:** Smooth pharmaceutical-grade compressed white powder, slightly chalky finish, precision-pressed score line groove, micro-reflection on curved surfaces, subtle ambient occlusion at contact points.

**Lighting:** Soft 3-point studio, key from upper-left at 45°, subtle warm amber edge-glow on silhouettes (~20%), cool fill from below, dark gradient backdrop (NOT pitch black).

**Environment:** Smooth dark gradient surface, soft contact-shadow under the pile.

**Camera:** Macro 100mm f/2.8 ISO100, ~25° above horizontal, front tablets sharp, rear defocused.

**Quality:** Hyperrealistic 3D octane render, ray-traced contact shadows, sub-surface scattering through compressed powder, 8K, calm cinematic with soft warm-neutral midtones.

**Negative:** NO brand, NO "Methandrostenolone" text, NO "Dianabol" text, NO "D-bol" text, NO "Methandienone" text, NO logo, NO embossing, NO numbers, NO blister, NO bottle, NO box, NO hands, NO people, NO cartoon, NO 2D, NO sketch, NO low quality, NO blurry, NO watermark, NO strong rim, NO drama, NO pitch-black void, NO pink pills, NO blue pills, NO colored coating — pure white scored tablets only.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 9. Superdrol (tablet pile form) — scored white tablet pile

---

**Subject:** Same as Anavar/Dianabol — pile of ~15 small round white scored tablets, ~6mm, no markings.

**Material:** Smooth white compressed powder, score line groove, micro-reflections.

**Lighting:** Soft 3-point + subtle warm edge-glow (~20%), dark gradient backdrop.

**Environment:** Dark gradient surface, soft contact-shadow.

**Camera:** Macro 100mm f/2.8 ISO100, ~25° above horizontal.

**Quality:** Hyperrealistic 3D octane render, ray-traced, 8K, calm cinematic.

**Negative:** NO brand, NO "Superdrol" text, NO "Methasterone" text, NO logo, NO embossing, NO numbers, NO blister, NO bottle, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong rim, NO pitch-black void, NO colored pills — pure white only.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 10. Methylstenbolone — scored white tablet pile

---

**Subject:** Same template — pile of ~15 small round white scored tablets, ~6mm.

**Material:** Smooth white compressed powder with score line.

**Lighting:** Soft 3-point + subtle warm edge-glow, dark gradient backdrop.

**Environment:** Dark gradient surface, soft contact-shadow.

**Camera:** Macro 100mm f/2.8 ISO100, ~25° above horizontal.

**Quality:** Hyperrealistic 3D octane, ray-traced, 8K, calm cinematic.

**Negative:** NO brand, NO "Methylstenbolone" text, NO "Methylsten" text, NO logo, NO embossing, NO numbers, NO blister, NO bottle, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong rim, NO pitch-black void, NO colored pills.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 11. Winstrol — scored white tablet pile

---

**Subject:** Same template — pile of ~15 small round white scored tablets, ~6mm.

**Material:** Smooth white compressed powder with score line.

**Lighting:** Soft 3-point + subtle warm edge-glow, dark gradient backdrop.

**Environment:** Dark gradient surface, soft contact-shadow.

**Camera:** Macro 100mm f/2.8 ISO100, ~25° above horizontal.

**Quality:** Hyperrealistic 3D octane, ray-traced, 8K, calm cinematic.

**Negative:** NO brand, NO "Winstrol" text, NO "Stanozolol" text, NO "Winny" text, NO logo, NO embossing, NO numbers, NO blister, NO bottle, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong rim, NO pitch-black void, NO colored pills.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 12. Ephedrine — scored white tablet pile

---

**Subject:** Same template — pile of ~15 small round white scored tablets, ~6mm.

**Material:** Smooth white compressed powder with score line.

**Lighting:** Soft 3-point + subtle warm edge-glow, dark gradient backdrop.

**Environment:** Dark gradient surface, soft contact-shadow.

**Camera:** Macro 100mm f/2.8 ISO100, ~25° above horizontal.

**Quality:** Hyperrealistic 3D octane, ray-traced, 8K, calm cinematic.

**Negative:** NO brand, NO "Ephedrine" text, NO "Ephedrine HCl" text, NO "Ephedra" text, NO logo, NO embossing, NO numbers, NO blister, NO bottle, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong rim, NO pitch-black void, NO colored pills.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 13. Yohimbine — scored white tablet pile

---

**Subject:** Same template — pile of ~15 small round white scored tablets, ~6mm.

**Material:** Smooth white compressed powder with score line.

**Lighting:** Soft 3-point + subtle warm edge-glow, dark gradient backdrop.

**Environment:** Dark gradient surface, soft contact-shadow.

**Camera:** Macro 100mm f/2.8 ISO100, ~25° above horizontal.

**Quality:** Hyperrealistic 3D octane, ray-traced, 8K, calm cinematic.

**Negative:** NO brand, NO "Yohimbine" text, NO "Yohimbe" text, NO "Yocon" text, NO logo, NO embossing, NO numbers, NO blister, NO bottle, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong rim, NO pitch-black void, NO colored pills, NO bark (despite the natural source).

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 14. Clenbuterol — scored white tablet pile

---

**Subject:** Same template — pile of ~15 small round white scored tablets, ~6mm.

**Material:** Smooth white compressed powder with score line.

**Lighting:** Soft 3-point + subtle warm edge-glow, dark gradient backdrop.

**Environment:** Dark gradient surface, soft contact-shadow.

**Camera:** Macro 100mm f/2.8 ISO100, ~25° above horizontal.

**Quality:** Hyperrealistic 3D octane, ray-traced, 8K, calm cinematic.

**Negative:** NO brand, NO "Clenbuterol" text, NO "Clen" text, NO "Ventipulmin" text, NO logo, NO embossing, NO numbers, NO inhaler (despite real-world dosage form), NO blister, NO bottle, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong rim, NO pitch-black void, NO colored pills.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 15. Albuterol — scored white tablet pile

---

**Subject:** Same template — pile of ~15 small round white scored tablets, ~6mm.

**Material:** Smooth white compressed powder with score line.

**Lighting:** Soft 3-point + subtle warm edge-glow, dark gradient backdrop.

**Environment:** Dark gradient surface, soft contact-shadow.

**Camera:** Macro 100mm f/2.8 ISO100, ~25° above horizontal.

**Quality:** Hyperrealistic 3D octane, ray-traced, 8K, calm cinematic.

**Negative:** NO brand, NO "Albuterol" text, NO "Salbutamol" text, NO "Ventolin" text, NO "ProAir" text, NO logo, NO embossing, NO numbers, NO inhaler (despite real-world dosage form), NO blister, NO bottle, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong rim, NO pitch-black void, NO colored pills.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 16. DNP — YELLOW scored tablet pile (warning color, danger framing)

---

**Subject:** A pile of approximately fifteen small round YELLOW pharmaceutical tablets scattered and stacked in a loose dimensional heap. Each tablet is about 6mm in diameter, a saturated warning-yellow color (like industrial chemical yellow, hex around #facc15 — distinctly NOT pale pastel yellow, NOT cream — a clear chemical-warning yellow), with a single clean vertical score line bisecting the pill. The yellow color signals chemical danger. NO text, NO numbers, NO logo, NO embossed markings.

**Material:** Smooth compressed powder dyed warning-yellow throughout, slightly chalky finish, precision-pressed score line groove. The yellow color is uniform and saturated — looks like industrial dye, NOT a natural food coloring.

**Lighting:** Soft 3-point studio + subtle warm amber edge-glow (~20%), dark gradient backdrop. The warm rim light interacts with the yellow pills to amplify their warning-color signal slightly.

**Environment:** Dark gradient surface, soft contact-shadow.

**Camera:** Macro 100mm f/2.8 ISO100, ~25° above horizontal.

**Quality:** Hyperrealistic 3D octane, ray-traced, 8K, calm cinematic with warm yellow midtones.

**Negative:** NO brand, NO "DNP" text, NO "2,4-Dinitrophenol" text, NO logo, NO embossing, NO numbers, NO chemical formula written, NO skull-and-crossbones icon, NO biohazard symbol, NO blister, NO bottle, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong rim, NO pitch-black void, NO white pills, NO pale yellow pills, NO cream pills — must be a saturated industrial warning-yellow.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

# 🔵 PHARMACEUTICAL LIBRARY (22 prompts for 21 entries)

> Minoxidil gets two prompts (blister oral form + amber dropper topical form). Decide later which becomes the canonical `image:`.

> **All 18 blister prompts use ORIENTATION LOCK:** long axis upper-left (near) → lower-right (far). Camera above-left, 12° down. Foil back peeks LOWER-RIGHT. Mirror-flip forbidden.

## 17. Metformin — blister pack · white oval tablets

---

**Subject:** A single pharmaceutical blister pack containing six oval white pills arranged in a 3×2 grid. Each pill is an oval white tablet about 8-10mm long (Metformin is one of the larger common pills), with a clean score line down the middle but NO text, NO numbers, NO logo embossed. The aluminum foil back is COMPLETELY BLANK.

**Material:** Glossy clear thermoformed PET plastic blisters showing precise mold detail, brushed silver-aluminum foil with subtle micro-grain texture, smooth pharmaceutical-grade compressed white tablets with realistic surface roughness and centered score line.

**Lighting:** Soft three-point clinical studio lighting — calm and refined. Primary key from upper-right at 30°. Very subtle cool cyan edge-glow on silhouette (#0ea5e9 @ ~20%). Soft cool fill from below. Background dark navy gradient (NOT pitch black), smooth falloff from #06080d to #02040a at frame edges.

**Environment:** Smooth dark navy gradient backdrop, no surface seam, blister floats on barely-perceptible dark plane with soft contact-shadow. ORIENTATION LOCK: long axis runs diagonally from UPPER-LEFT (nearer the camera) to LOWER-RIGHT (further). Upper-left corner closest, lower-right corner furthest. NEVER the reverse.

**Camera:** Macro 85mm f/4 ISO100. Camera positioned ABOVE-LEFT of the blister at 12° downward angle, looking toward the lower-right corner. Plastic dome bubbles face up-and-toward viewer; foil back edge visible peeking along the LOWER-RIGHT side (NOT lower-left). DoF: UPPER-LEFT pills tack-sharp, blister center crisp, LOWER-RIGHT pills softly defocused.

**Quality:** Hyperrealistic 3D product render, octane quality with denoiser, ray-traced foil reflections, accurate plastic refractions revealing the white pills, sub-pixel sharpness, magazine-grade clinical pharmaceutical photography, calm cinematic clean cool clarity, 8K hyperdetail.

**Negative:** NO brand, NO "Metformin" text, NO "Glucophage" text, NO "Glumetza" text, NO logo, NO text on foil, NO pill embossing, NO numbers, NO batch number, NO QR code, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO watermark, NO strong cyan rim, NO dramatic halo, NO pitch-black void, NO crushed shadows, NO white background, NO daylight, NO mirror-flipped blister orientation, NO blister tilted with UPPER-RIGHT closest (must be UPPER-LEFT closest), NO foil back visible on LEFT side (must be on RIGHT), NO upside-down blister.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 18. Empagliflozin — blister pack · yellow round tablets

---

**Subject:** Single blister pack with six small round YELLOW tablets in 3×2 grid. Tablets are ~6mm diameter, a clean medium yellow (like #facc15 with low saturation), round biconvex, NO markings. Clear thermoformed plastic dome + silver-aluminum foil. Foil COMPLETELY BLANK.

**Material:** Glossy clear PET plastic blisters, brushed silver foil with micro-grain, smooth pharmaceutical-grade yellow tablets with realistic compressed-powder texture.

**Lighting:** Soft 3-point clinical, key upper-right 30°, subtle cyan edge-glow (~20%, #0ea5e9), cool fill below, dark navy gradient (NOT pitch black).

**Environment:** Dark navy gradient backdrop, soft contact-shadow. ORIENTATION LOCK: upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 ISO100, above-left at 12° down, foil edge LOWER-RIGHT, DoF upper-left sharp / lower-right defocused.

**Quality:** Hyperrealistic 3D octane, ray-traced foil reflections, plastic refractions revealing yellow pills, 8K, calm clinical cinematic.

**Negative:** NO brand, NO "Empagliflozin" text, NO "Jardiance" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO drama, NO pitch-black void, NO white background, NO orange pills, NO gold pills — clean medium yellow only, NO mirror-flipped orientation, NO blister tilted right-to-left, NO foil back on LEFT side, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 19. Atorvastatin — blister pack · white oval tablets

---

**Subject:** Single blister with six oval white tablets in 3×2 grid. Tablets ~8mm long, white compressed pharmaceutical, biconvex oval, NO markings. Standard clear PET blister + silver-aluminum foil. Foil BLANK.

**Material:** Glossy clear PET plastic, brushed silver foil with micro-grain, smooth white compressed-powder tablets.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** Dark navy gradient backdrop. ORIENTATION LOCK: upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 ISO100, above-left 12° down, foil edge LOWER-RIGHT, DoF upper-left sharp / lower-right defocused.

**Quality:** Hyperrealistic 3D octane, ray-traced, 8K, calm clinical.

**Negative:** NO brand, NO "Atorvastatin" text, NO "Lipitor" text, NO "Sortis" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO white background, NO yellow pills, NO pink pills, NO blue pills — pure white only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 20. Rosuvastatin — blister pack · pale pink small tablets

---

**Subject:** Single blister with six small round PALE PINK tablets in 3×2 grid. Tablets ~5-6mm, pale-warm pink/rose (hex ~#f9a8d4, NOT magenta, NOT salmon, NOT red), round biconvex, NO markings. Standard blister. Foil BLANK.

**Material:** Clear PET blisters, brushed silver foil, smooth pale-pink compressed-powder tablets, uniform color.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%, intentional contrast with warm pink pills), dark navy gradient.

**Environment:** Dark navy gradient. ORIENTATION LOCK: upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 ISO100, above-left 12° down, foil edge LOWER-RIGHT, DoF upper-left sharp / lower-right defocused.

**Quality:** Hyperrealistic 3D octane, ray-traced foil and plastic, 8K, calm clinical with warm-pink pill highlights.

**Negative:** NO brand, NO "Rosuvastatin" text, NO "Crestor" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO white background, NO red pills, NO orange pills, NO magenta pills, NO saturated bright pink — pale-warm pink only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 21. Escitalopram — blister pack · white oval tablets

---

**Subject:** Single blister with six oval white tablets in 3×2 grid, ~6mm long, NO markings. Standard clear blister + silver foil. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK: upper-left near, lower-right far.

**Camera:** Macro 85mm f/4, above-left 12° down, foil LOWER-RIGHT, DoF locked.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Escitalopram" text, NO "Lexapro" text, NO "Cipralex" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills — pure white only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 22. Fluoxetine — blister pack · white round tablets

---

**Subject:** Single blister with six round white tablets in 3×2 grid, ~6mm diameter, NO markings. Standard clear blister + silver foil. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK: upper-left near, lower-right far.

**Camera:** Macro 85mm f/4, above-left 12° down, foil LOWER-RIGHT, DoF locked.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Fluoxetine" text, NO "Prozac" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO green pills, NO yellow pills, NO capsules — pure white tablets only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 23. Bupropion — blister pack · white round tablets

---

**Subject:** Single blister with six round white tablets in 3×2 grid, ~7mm diameter, NO markings. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT, DoF locked.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Bupropion" text, NO "Wellbutrin" text, NO "Zyban" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills — pure white only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 24. Methylphenidate — blister pack · white round tablets

---

**Subject:** Single blister with six round white tablets in 3×2 grid, ~6mm diameter, NO markings. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Methylphenidate" text, NO "Ritalin" text, NO "Concerta" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills, NO time-release capsule shape — pure white tablets only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 25. Modafinil — blister pack · white oval tablets

---

**Subject:** Single blister with six oval white tablets in 3×2 grid, ~9mm long (Modafinil is a larger pill), NO markings. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Modafinil" text, NO "Provigil" text, NO "Modalert" text, NO "Modvigil" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills — pure white only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 26. Amoxicillin — blister pack · white oval tablets

---

**Subject:** Single blister with six oval white tablets in 3×2 grid, ~10mm long, NO markings. Foil BLANK. (Note: Amoxicillin is commonly capsule-form in real life, but this MolekulaX library presents the tablet form for visual consistency across the blister set.)

**Material:** Clear PET, brushed silver foil, smooth white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Amoxicillin" text, NO "Amoxil" text, NO "Augmentin" text, NO logo, NO text on foil, NO embossing, NO numbers, NO capsules (must be tablets), NO blue-and-white capsule, NO pink-and-white capsule, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills — pure white tablets only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 27. Doxycycline — blister pack · white oval tablets

---

**Subject:** Single blister with six oval white tablets in 3×2 grid, ~8mm long, NO markings. Foil BLANK. (Real-world Doxycycline is often capsule-form; this library uses tablets for consistency.)

**Material:** Clear PET, brushed silver foil, smooth white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Doxycycline" text, NO "Vibramycin" text, NO "Doxylin" text, NO logo, NO text on foil, NO embossing, NO numbers, NO capsules (must be tablets), NO blue-and-white capsule, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills — pure white tablets only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 28. Ciprofloxacin — blister pack · white oval tablets

---

**Subject:** Single blister with six oval white tablets in 3×2 grid, ~10mm long, NO markings. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Ciprofloxacin" text, NO "Cipro" text, NO "Ciproxin" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills — pure white only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 29. Tadalafil — blister pack · yellow almond-shaped tablets

---

**Subject:** Single blister with six small almond-shaped (elongated oval, pointed at both ends) yellow tablets in 3×2 grid. Each tablet is ~8mm long, a soft warm yellow (hex ~#fde68a to slightly deeper), almond/elliptical shape (NOT round, NOT plain oval — distinctly almond-pointed), NO markings. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth pale-yellow compressed-powder, almond-shaped (a Tadalafil-iconic form).

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, ray-traced foil and plastic, 8K, calm clinical with warm-yellow pill highlights.

**Negative:** NO brand, NO "Tadalafil" text, NO "Cialis" text, NO "Adcirca" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO orange pills, NO white pills, NO round pills, NO triangular pills — soft yellow almond-shape only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 30. Finasteride — blister pack · small blue round tablets

---

**Subject:** Single blister with six small round PALE BLUE tablets in 3×2 grid. Each ~5mm diameter, pale-to-medium blue (hex ~#93c5fd, soft sky-blue, NOT navy, NOT cyan, NOT teal), round biconvex, NO markings. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth pale-blue compressed-powder tablets, uniform color.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%, harmonizes with blue pills), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, ray-traced, 8K, calm clinical clean cool clarity.

**Negative:** NO brand, NO "Finasteride" text, NO "Propecia" text, NO "Proscar" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO white background, NO daylight, NO bathroom counter, NO clinical office setting, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 31. Tamoxifen — blister pack · white round tablets

---

**Subject:** Single blister with six round white tablets in 3×2 grid, ~7mm diameter, NO markings. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Tamoxifen" text, NO "Nolvadex" text, NO "Soltamox" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills — pure white only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 32. Levothyroxin — blister pack · small white round tablets

---

**Subject:** Single blister with six small round white tablets in 3×2 grid, ~5mm diameter (Levothyroxin tablets are small), NO markings. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth small white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Levothyroxin" text, NO "Levothyroxine" text, NO "Synthroid" text, NO "Euthyrox" text, NO "Eltroxin" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills, NO dose-color-coding (real-world Levothyroxin varies by dose; here uniform white) — pure white only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 33. Liothyronine — blister pack · small white round tablets

---

**Subject:** Single blister with six small round white tablets in 3×2 grid, ~5mm diameter, NO markings. Foil BLANK.

**Material:** Clear PET, brushed silver foil, smooth small white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Liothyronine" text, NO "Cytomel" text, NO "T3" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills — pure white only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 34. Minoxidil (oral blister form) — blister pack · small white round tablets

---

**Subject:** Single blister with six small round white tablets in 3×2 grid, ~5mm diameter, NO markings. Foil BLANK. (Off-label oral form of Minoxidil for hair loss.)

**Material:** Clear PET, brushed silver foil, smooth small white compressed-powder.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** ORIENTATION LOCK upper-left near, lower-right far.

**Camera:** Macro 85mm f/4 above-left 12° down, foil LOWER-RIGHT.

**Quality:** Hyperrealistic 3D octane, 8K, calm clinical.

**Negative:** NO brand, NO "Minoxidil" text, NO "Loniten" text, NO "Rogaine" text, NO "Regaine" text, NO logo, NO text on foil, NO embossing, NO numbers, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO colored pills, NO dropper bottle, NO spray bottle, NO foam can — must be a blister pack only, NO mirror-flipped, NO right-to-left tilt, NO foil on LEFT, NO upside-down.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 35. Isotretinoin — orange soft gel capsule (NEW form factor)

---

**Subject:** A single soft gelatin pharmaceutical capsule, oval/elliptical shape, about 12mm long and 7mm wide, in a warm orange-amber translucent color (hex around #fb923c to #c2410c gradient — the iconic soft-gel orange seen in vitamin A derivatives). The capsule is glossy and slightly translucent, you can faintly see the oily liquid contents through the gelatin shell. A subtle highlight along the top curvature shows its rounded 3D form. The capsule rests slightly tilted toward the camera. NO printed text on the capsule, NO logo, NO dose markings.

**Material:** Smooth glossy gelatin shell with realistic translucent depth, sub-surface scattering through the orange gelatin revealing a slightly darker liquid interior, sharp highlight along the top curve, soft secondary highlight at the bottom edge from the fill light, fine surface micro-roughness barely visible.

**Lighting:** Soft three-point clinical studio lighting. Primary key from upper-right at 30°, large diffused softbox. Very subtle cool cyan edge-glow on silhouette (~20%, contrasts beautifully with the warm orange capsule). Soft cool fill from below. Background dark navy gradient (NOT pitch black), smooth falloff from #06080d to #02040a.

**Environment:** Smooth dark navy gradient backdrop, no surface seam, capsule floats slightly tilted on barely-perceptible dark plane with soft contact-shadow showing its rounded form.

**Camera:** Macro product photograph, 100mm macro lens, f/4 aperture, ISO 100. Camera at slight above-center angle (~15° elevation) so the capsule's full elliptical profile is visible plus a hint of the rounded ends. Shallow but smooth DoF — front of capsule tack-sharp, back end softly defocused.

**Quality:** Hyperrealistic 3D product render, octane-render quality, ray-traced translucent gelatin refractions, accurate sub-surface scattering through the orange shell, glossy surface reflections, 8K hyperdetail, magazine-grade pharmaceutical photography, calm cinematic with warm orange midtones contrasted by cool cyan edge.

**Negative:** NO brand, NO "Isotretinoin" text, NO "Accutane" text, NO "Roaccutane" text, NO "Claravis" text, NO logo, NO text printed, NO dose number, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO crushed shadows, NO white background, NO yellow capsule, NO red capsule, NO transparent capsule, NO clear capsule — must be a warm orange-amber soft gel.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 36. Tretinoin — topical cream tube (NEW form factor)

---

**Subject:** A single dermatological cream tube, cylindrical aluminum/laminate body about 9cm long, ~2cm diameter, with a black plastic screw-cap on top. The tube is mostly white (medical/cosmetic standard) with a slight metallic sheen at the crimped bottom seal. The tube label area is COMPLETELY BLANK — no brand name, no logo, no usage text, no warning text. The tube stands slightly tilted toward the camera, fresh and unused with no creases.

**Material:** Smooth white plastic-aluminum laminate tube body with a soft satin finish (slightly matte, not glossy), realistic crimped seam at the bottom showing fine ridge details, black plastic screw-cap with subtle texture, faint metallic shimmer where the crimp catches light.

**Lighting:** Soft three-point clinical studio lighting. Primary key from upper-right at 30°. Very subtle cool cyan edge-glow on silhouette (~20%). Soft cool fill from below. Background dark navy gradient (NOT pitch black).

**Environment:** Smooth dark navy gradient backdrop, no surface seam, tube floats on barely-perceptible dark plane with soft contact-shadow at the bottom.

**Camera:** Macro product photograph, 100mm macro lens, f/4 aperture, ISO 100. Camera at chest-height relative to the tube, slight 10° tilt from straight-on so the cap edge and the tube body both read clearly. DoF: tube body sharp, cap softens slightly.

**Quality:** Hyperrealistic 3D product render, octane-render quality, ray-traced metallic crimp reflections, accurate satin-plastic finish, sub-pixel sharpness on the cap edges, 8K hyperdetail, magazine-grade dermatological product photography, calm cinematic clean cool clarity.

**Negative:** NO brand, NO "Tretinoin" text, NO "Retin-A" text, NO "Renova" text, NO "Atralin" text, NO logo, NO text on tube, NO ingredient list, NO usage instructions, NO warning text, NO weight indicator, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO crushed shadows, NO white background, NO daylight, NO bathroom counter, NO cream squeezed onto a finger or surface — just the unopened sealed tube.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 37. Hydrocortisone — topical cream tube (same template as Tretinoin)

---

**Subject:** A single dermatological cream tube, same architecture as Tretinoin — cylindrical aluminum-laminate, ~9cm long, ~2cm diameter, black screw-cap, mostly white body, COMPLETELY BLANK label area.

**Material:** Same as Tretinoin — white satin laminate body, crimped bottom seam, black plastic cap.

**Lighting:** Soft 3-point clinical + subtle cyan edge-glow (~20%), dark navy gradient.

**Environment:** Dark navy gradient backdrop, soft contact-shadow.

**Camera:** Macro 100mm f/4 ISO100, slight 10° tilt from straight-on.

**Quality:** Hyperrealistic 3D octane, ray-traced, 8K, calm clinical.

**Negative:** NO brand, NO "Hydrocortisone" text, NO "Cortizone" text, NO "Cortaid" text, NO "Locoid" text, NO logo, NO text on tube, NO ingredient list, NO warning text, NO percentage strength written, NO box, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO white background, NO cream squeezed out — just unopened sealed tube.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

## 38. Minoxidil (topical dropper form) — amber glass dropper bottle (NEW form factor)

---

**Subject:** A single amber-glass pharmaceutical dropper bottle, ~30ml capacity, cylindrical with rounded shoulders. The glass is a warm AMBER color (hex around #b45309 to #92400e — distinctly amber-brown like a traditional apothecary bottle, NOT clear, NOT dark brown, NOT honey). The bottle has a black plastic screw-cap with an integrated glass pipette/dropper visible just below the cap (the dropper stem extends down into the bottle). The bottle contains a clear pale-yellow topical liquid solution visible through the amber glass. Bottle is upright, slightly tilted toward the camera. Label area COMPLETELY BLANK — no brand, no logo, no text.

**Material:** Thick amber-brown borosilicate apothecary glass with realistic refraction, subtle vertical highlight along the curved sides, glass thickness visible at the bottle's neck. The amber color filters light beautifully — light passing through reveals the pale-yellow solution inside as warmer-toned. Black plastic screw-cap with subtle matte texture, glass pipette/dropper stem visible inside with realistic translucent rod-shape.

**Lighting:** Soft three-point clinical studio lighting. Primary key from upper-right at 30°. Very subtle cool cyan edge-glow on silhouette (~20%, contrasts with the warm amber bottle). Soft cool fill from below. Background dark navy gradient (NOT pitch black).

**Environment:** Smooth dark navy gradient backdrop, no surface seam, bottle floats on barely-perceptible dark plane with soft contact-shadow.

**Camera:** Macro product photograph, 100mm macro lens, f/4 aperture, ISO 100. Camera at center-height with subtle 10° downward tilt revealing the cap area and the bottle's full body. DoF: bottle body sharp, cap and pipette stem softens slightly.

**Quality:** Hyperrealistic 3D product render, octane-render quality, ray-traced amber-glass refractions, accurate translucent depth showing the dropper stem and liquid inside, sub-pixel sharpness on the cap edges, 8K hyperdetail, magazine-grade apothecary/dermatological photography, calm cinematic with warm amber midtones contrasted by cool cyan edge.

**Negative:** NO brand, NO "Minoxidil" text, NO "Rogaine" text, NO "Regaine" text, NO "Loniten" text, NO logo, NO text on bottle, NO ingredient list, NO percentage strength (5%, 2%, etc.), NO usage instructions, NO box, NO outer carton, NO leaflet, NO hands, NO people, NO cartoon, NO 2D, NO low quality, NO blurry, NO strong cyan rim, NO pitch-black void, NO crushed shadows, NO white background, NO daylight, NO clear glass bottle (must be amber), NO dark brown bottle (must be amber-orange-brown), NO honey-colored bottle (must be deeper amber), NO blister pack, NO tablet, NO cream tube — must be an amber-glass dropper bottle only.

**Aspect:** 1:1 square, 1024×1024 minimum.

---

# Wrap-up notes

## Workflow tips
- Generate one prompt at a time, save with the exact filename `<entry-id>.png` to avoid confusion
- If the Gemini Pro chat-mode struggles with consistency (e.g., produces an amber-glass vial despite the negative prompt), regenerate with the same prompt — Gemini's image gen has variance, ~1 in 5 generations may need a retry
- For blisters, after generating each one, visually verify the orientation lock is respected (upper-left near, lower-right far). If a generation came out mirror-flipped, regenerate
- Total estimated active time: ~60-90 minutes for all 38 prompts (each generation ~30-60 seconds + download + verify)

## Next implementation step (post-image-generation)
After all 38 PNGs are saved:
1. `node scripts/convert-images.mjs` → emits AVIF + WebP variants
2. Update 36 entry data files (HU/EN/PL each, so ~108 file edits total) to change `"image": null` → `"image": "/<library>/<entry-id>.png"`
3. Run `npm run dev` and visually verify each entry detail hero
4. Separate task: delete the 19 pharmaceutical entries + 2 performance entries (1-Andro, MK-677, GLP-1 trio, etc.) — see top of file

## Cost / time estimate
- Gemini Pro chat subscription already paid → **0 incremental cost** for the 38 generations
- Time investment: ~1.5 hours of manual chat work
- File output: 38 × ~1-3 MB PNG = ~50-100 MB total before AVIF/WebP conversion
- After convert-images.mjs pipeline: ~5-10 MB total in `public/<library>/` folders

---

*Generated by Claude during brainstorming session 2026-05-18. Visual companion preview: `e:/Website Biz/molekulax/.superpowers/brainstorm/1348-1779134284/content/simplified-v3.html`*
