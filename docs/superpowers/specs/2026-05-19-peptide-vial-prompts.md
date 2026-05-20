# MolekulaX — Peptid vial-prompt batch (v1)

**Date:** 2026-05-19
**Target model:** Gemini 3 Pro Image (a.k.a. "Nano Banana Pro") on https://gemini.google.com (Pro subscription manual chat workflow)
**Output:** 1 master prompt × 50 peptide variants — Molekulax-branded holographic-foil vial, only the peptide name + amount changes per generation.

**Reference image:** The user-supplied GHK-Cu vial photograph (2026-05-19 chat upload). Visual anatomy:

| Element | Detail |
|---------|--------|
| Vessel | 10 ml clear borosilicate pharmaceutical vial, dark gray rubber stopper + silver knurled aluminum crimp cap |
| Label | Holographic-iridescent silver-foil (rainbow shimmer, wraps center ~60%) |
| Text-stack | "MOLEKULAX" in pill-frame → peptide name (big bold black) → "XX mg" in pill-frame → ">99% Tisztaság" → "Kutatási célra ajánlott" |
| Powder | Fluffy purple-violet lyophilized cake (~35% bottom fill) — keep this color across ALL peptides for brand consistency |
| Lighting | Soft 3-point studio, neutral pale-gray gradient backdrop (~#d1d3d4) |
| Aspect | 1:1 square, ~2048px |
| Known artifact in reference | A cropped "Be..." text fragment in lower-right of the reference label — explicitly excluded in the negative prompt |

---

## Workflow — IMAGE-REFERENCE MODE (recommended)

**Why image-ref over pure-text:** Test runs on 2026-05-19 showed pure-text prompting produces vials that *look like* the reference but with slightly off label-proportions, font-sizes, and text-positioning. Image-ref locks the layout pixel-perfectly so every vial across the 50-peptide batch is brand-consistent.

1. Open https://gemini.google.com (Pro subscription, 3 Pro Image model)
2. **Upload the GHK-Cu reference image** to the chat: drag-drop or paste `e:/Website Biz/molekulax/public/peptides/GHK-Cu.png` (or any other already-shipped Molekulax vial: `Retatrutide.png`, `BPC-157.png`, etc.)
3. Copy the EDIT-PROMPT below into the chat (after the image upload)
4. Replace `{{PEPTIDE_NAME}}` + `{{AMOUNT}}` with the values from the table
5. Generate → download the resulting PNG → save as `e:/Website Biz/molekulax/tmp/gemini-images/<filename>.png`
6. When the batch (5–10 at a time, or all 50 at once) is ready, tell Claude — the pipeline runs: `rembg` background removal → copy to `public/peptides/` → `convert-images.mjs` AVIF+WebP emit → mass-update of 50 entry × 3 lang `image:` fields → validator + build + commit + push

## Workflow — PURE-TEXT MODE (fallback if image-ref unavailable)

Use the **master prompt** further below. Tends to drift on label proportions; use only as backup.

## Global style policy

- **Brand consistency:** All vials look IDENTICAL except for the peptide name + amount on the label
- **Powder color:** Saturated purple-violet across every vial (regardless of the peptide's real-world powder color) — this is a Molekulax brand-visual choice, not pharmacological accuracy
- **Label font:** Bold black sans-serif, perfectly centered, accurately spelled, NO typos
- **No extraneous text on the label:** ONLY the 5 lines specified — anything else (batch, lot, expiry, QR, barcode, manufacturer, address, URL, language fragments, "Beim", German/English/Polish words) is hard-rejected in the negative prompt
- **Background:** Pale neutral gray gradient (`#d8dadd` top → `#c1c4c7` bottom), NOT pitch black, NOT pure white
- **Aspect:** 1:1 square, 1024×1024 minimum, prefer 2048×2048 or higher

---

# ⭐ EDIT-PROMPT (use this in IMAGE-REF mode — paste AFTER uploading the GHK-Cu reference image)

```
You are looking at a reference image of a Molekulax peptide vial.

Generate a new image that is PIXEL-PERFECT identical to this reference EXCEPT for TWO changes:

  • Replace the peptide name "GHK-Cu" on the label with: {{PEPTIDE_NAME}}
  • Replace the amount "100 mg" on the label with: {{AMOUNT}}

EVERYTHING ELSE must stay 100% identical to the reference:
  • Same 10ml clear glass vial, same height, same shape, same proportions
  • Same dark gray rubber stopper + silver knurled aluminum crimp cap
  • Same fluffy purple-violet lyophilized powder cake (~35% bottom fill, same texture, same color saturation)
  • Same holographic-iridescent silver-foil label with rainbow shimmer (same size, same position on the vial, same edge bevel)
  • Same "MOLEKULAX" brand name in the rounded-pill frame at the top of the label
  • Same ">99% Tisztaság" line below the amount
  • Same "Kutatási célra ajánlott" line at the very bottom of the label
  • Same font family, same font weight, same text color (bold black sans-serif)
  • Same neutral pale-gray gradient background
  • Same soft 3-point studio lighting with gentle warm rim
  • Same camera angle (center-height, subtle 5° downward tilt)
  • Same 1:1 square aspect ratio
  • Same contact-shadow under the vial

DO NOT add any new text, batch numbers, QR codes, lot numbers, expiry dates, barcodes, manufacturer info, addresses, URLs, "Beim" fragments, German words, or any other elements.
DO NOT change the powder color from purple-violet to anything else.
DO NOT change the glass, stopper, cap, label foil, or background.
DO NOT crop the vial, shift its position, or change the framing.
DO NOT add Gemini/Google watermarks.

The peptide name and the amount are the ONLY two things that change. Treat this as a label-text swap — keep every other pixel as faithful to the reference as you can.

Aspect: 1:1 square, 1024×1024 minimum, prefer 2048×2048.
```

---

# 🧪 MASTER PROMPT (pure-text fallback — paste into Gemini, then swap the two placeholders)

```
Subject: A single 10ml pharmaceutical-grade CLEAR COLORLESS glass vial standing upright, with a dark gray rubber stopper sealed by a knurled silver aluminum crimp cap. The vial contains a fluffy rich purple-violet lyophilized powder cake (saturated violet hue, like the iconic copper-peptide complex color) filling about 35% of the vial bottom, with subtle granular freeze-dried texture, tiny cracks and air-pockets in the powder cake, and a few free-floating particles drifting in the airspace above. The glass itself is fully transparent and uncolored — you can see straight through the airspace and the violet powder is clearly visible at the bottom.

Label: A premium holographic-iridescent silver-foil label wraps the center ~60% of the vial body. The label is a satin-silver base with subtle rainbow shimmer (pink, cyan, lime, and pale-blue micro-rainbows running diagonally across the foil surface, like a hologram security label). The label text content from top to bottom, all in black bold sans-serif type, precisely centered:

  1. "MOLEKULAX" — brand name at the top, inside a thin rounded-pill outline frame (capsule shape)
  2. "{{PEPTIDE_NAME}}" — the largest text element on the label, big bold black sans-serif, perfectly centered, accurately spelled
  3. "{{AMOUNT}}" — inside a thin rounded-pill outline frame (capsule shape), smaller than the peptide name, centered
  4. ">99% Tisztaság" — small black text, single line
  5. "Kutatási célra ajánlott" — smallest text at the very bottom, single line

NOTHING else on the label — no batch number, no QR code, no lot number, no expiry date, no barcode, no other words, no "Beim", no manufacturer info, no language fragments. The label edges are clean rounded corners with a subtle silver bevel.

Material: Thick clear borosilicate pharmaceutical glass with realistic refraction and subtle vertical highlights along the curved sides showing the glass thickness. The lyophilized powder has a soft fluffy granular freeze-dried surface with light bouncing off micro-crystals, slight cracks and air-pockets characteristic of pharmaceutical lyo-cakes. Aluminum crimp cap has fine knurled vertical texture with soft brushed-metal sheen. Dark gray rubber stopper has matte finish with a tiny visible puncture mark on top. The label has glossy satin-silver finish with realistic anisotropic holographic rainbow shimmer that catches the soft studio key-light.

Lighting: Soft three-point cinematic studio lighting, gentle and refined. Primary key light from upper-left at 45 degrees, large diffused softbox. Soft cool fill light from below-front lifting the lower shadows. Subtle warm rim-light kissing the right silhouette edge of the vial. Background is a clean neutral pale-gray gradient (NOT pitch black, NOT pure white — like a premium product-photography backdrop, around #d8dadd at top falling to #c1c4c7 at bottom). Calm premium pharmaceutical-brand mood.

Environment: Smooth neutral pale-gray gradient studio backdrop, no surface seam, vial sits on a barely-perceptible plane with a soft contact shadow underneath the base.

Camera: Macro product photograph, 100mm macro lens, f/4 aperture, ISO 100. Camera at center-height with a subtle 5-degree downward tilt for elegance. Shallow but smooth depth of field — the vial body and label text razor-sharp, the cap softens gradually, background dissolves into smooth gray gradient.

Quality: Hyperrealistic 3D product render, octane-render quality with denoiser, ray-traced clear-glass refractions, ray-traced metallic reflections on aluminum crimp cap, anisotropic holographic-foil iridescence on the label, sub-surface scattering through the fluffy violet powder cake, sub-pixel sharpness on label text and the rounded-pill frames, magazine-grade luxury supplement-brand product photography, 8K hyperdetail.

Negative: NO additional text on label beyond what's specified, NO "Beim" or "Beimisch" or "Beimpfung" or any German word, NO batch numbers, NO QR codes, NO lot numbers, NO expiry dates, NO barcodes, NO partial text bleeding off the side of the label, NO manufacturer name, NO address, NO website URL, NO Made-in text, NO syringe, NO needle, NO box, NO leaflet, NO hands, NO people, NO doctor, NO pharmacist, NO cartoon, NO flat 2D illustration, NO sketch, NO drawing, NO low quality, NO blurry text, NO watermark, NO Gemini watermark, NO Google watermark, NO pitch-black background, NO pure white sterile background, NO amber-colored glass, NO brown glass, NO tinted glass — fully transparent colorless glass, NO white powder, NO yellow powder, NO blue powder, NO red powder — the powder MUST be a saturated rich purple-violet color, NO misspelled peptide name, NO different brand name than MOLEKULAX, NO additional logos.

Aspect: 1:1 square, 1024×1024 minimum, prefer 2048×2048 or higher if available.
```

---

# 📋 50-peptid label-tábla

Amounts are research-grade standard vial sizes (PubMed / FDA SmPC / research-pharma market norms). Names are kept short for label-fit (e.g. `MK-677` without "(Ibutamoren)", `PDA` instead of "Pentadeca Arginate (PDA)").

## GLP-1 / metabolic family (8)

| # | Filename | `{{PEPTIDE_NAME}}` | `{{AMOUNT}}` |
|---|----------|--------------------|--------------|
| 1 | `tirzepatide.png` | Tirzepatide | 10 mg |
| 2 | `semaglutide.png` | Semaglutide | 5 mg |
| 3 | `liraglutide.png` | Liraglutide | 6 mg |
| 4 | `orforglipron.png` | Orforglipron | 10 mg |
| 5 | `mazdutide.png` | Mazdutide | 10 mg |
| 6 | `survodutide.png` | Survodutide | 5 mg |
| 7 | `pemvidutide.png` | Pemvidutide | 5 mg |
| 8 | `cagrilintide.png` | Cagrilintide | 5 mg |

## GH secretagogue / GH-axis (11)

| # | Filename | `{{PEPTIDE_NAME}}` | `{{AMOUNT}}` |
|---|----------|--------------------|--------------|
| 9 | `hgh.png` | HGH | 10 IU |
| 10 | `cjc-1295-ipamorelin.png` | CJC-1295 / Ipamorelin | 5 mg |
| 11 | `tesamorelin.png` | Tesamorelin | 2 mg |
| 12 | `mod-grf-1-29.png` | Mod GRF 1-29 | 2 mg |
| 13 | `ghrp-2.png` | GHRP-2 | 5 mg |
| 14 | `ghrp-6.png` | GHRP-6 | 5 mg |
| 15 | `hexarelin.png` | Hexarelin | 2 mg |
| 16 | `mk-677.png` | MK-677 | 25 mg |
| 17 | `igf-1-lr3.png` | IGF-1 LR3 | 1 mg |
| 18 | `mgf.png` | MGF | 2 mg |
| 19 | `aod-9604.png` | AOD-9604 | 5 mg |

## Nootropic / neurological (9)

| # | Filename | `{{PEPTIDE_NAME}}` | `{{AMOUNT}}` |
|---|----------|--------------------|--------------|
| 20 | `semax.png` | Semax | 30 mg |
| 21 | `selank.png` | Selank | 30 mg |
| 22 | `na-semax-amidate.png` | NA Semax Amidate | 30 mg |
| 23 | `cerebrolysin.png` | Cerebrolysin | 30 mg |
| 24 | `p21.png` | P21 | 10 mg |
| 25 | `fgl.png` | FGL | 10 mg |
| 26 | `dihexa.png` | Dihexa | 5 mg |
| 27 | `pinealon.png` | Pinealon | 5 mg |
| 28 | `dsip.png` | DSIP | 5 mg |

## Immune / healing (8)

| # | Filename | `{{PEPTIDE_NAME}}` | `{{AMOUNT}}` |
|---|----------|--------------------|--------------|
| 29 | `thymosin-alpha-1.png` | Thymosin Alpha-1 | 5 mg |
| 30 | `thymulin.png` | Thymulin | 1 mg |
| 31 | `ll-37.png` | LL-37 | 5 mg |
| 32 | `kpv.png` | KPV | 5 mg |
| 33 | `larazotide.png` | Larazotide | 5 mg |
| 34 | `pentadeca-arginate.png` | PDA | 5 mg |
| 35 | `humanin.png` | Humanin | 5 mg |
| 36 | `mots-c.png` | MOTS-c | 10 mg |

## Hormone / pigmentation / sexual (4)

| # | Filename | `{{PEPTIDE_NAME}}` | `{{AMOUNT}}` |
|---|----------|--------------------|--------------|
| 37 | `melanotan-1.png` | Melanotan-1 | 10 mg |
| 38 | `gonadorelin.png` | Gonadorelin | 1 mg |
| 39 | `kisspeptin.png` | Kisspeptin-10 | 5 mg |
| 40 | `oxytocin.png` | Oxytocin | 5 mg |

## Longevity / metabolism (4)

| # | Filename | `{{PEPTIDE_NAME}}` | `{{AMOUNT}}` |
|---|----------|--------------------|--------------|
| 41 | `5-amino-1mq.png` | 5-Amino-1MQ | 25 mg |
| 42 | `nad-plus.png` | NAD+ | 100 mg |
| 43 | `ss-31.png` | SS-31 | 40 mg |
| 44 | `adipotide.png` | Adipotide | 10 mg |

## Cosmetic (2)

| # | Filename | `{{PEPTIDE_NAME}}` | `{{AMOUNT}}` |
|---|----------|--------------------|--------------|
| 45 | `snap-8.png` | SNAP-8 | 10 mg |
| 46 | `matrixyl-3000.png` | Matrixyl 3000 | 5 mg |

## Cocktails / blends (4)

| # | Filename | `{{PEPTIDE_NAME}}` | `{{AMOUNT}}` |
|---|----------|--------------------|--------------|
| 47 | `adalank.png` | Adalank | 10 mg |
| 48 | `adamax.png` | Adamax | 5 mg |
| 49 | `klow-protocol.png` | KLOW Protocol | 10 mg |
| 50 | `lipo-c.png` | Lipo-C | 100 mg |

---

# 🔄 Already-shipped reference (10 peptides — DO NOT regenerate)

The following 10 peptides already have production images at `public/peptides/<id>.png` (real photos, not Gemini renders) and are out-of-scope for this batch:

`ghk-cu`, `retatrutide`, `bpc-157`, `tb-500`, `cjc-1295`, `ipamorelin`, `melanotan-2`, `pt-141`, `sermorelin`, `epithalon`.

---

# Wrap-up notes

- **Brand-consistency principle:** All 50 vials must look identical (same glass, stopper, cap, powder color, label dimensions, lighting, background). Only the peptide name + amount on the label changes. This is the same template-reuse approach used for the Performance + Pharmaceutical libraries on 2026-05-19 (`v0.15-library-images`), scaled up to per-entry uniqueness because peptides ARE the brand's hero category.
- **No `rembg` skip:** Like the Performance + Pharmaceutical batch, all 50 vials will pass through `rembg` background removal so the EntryImage shell's gradient + corner brackets read through. The pale-gray studio backdrop is intentional for the source image (gives the foil shimmer a calm context); it gets stripped at integration time.
- **Powder-color exception NOT taken:** Real-world powder colors vary (Melanotan tan-orange, B12-containing blends pink-red, etc.) but the user's brief was "TELJESEN UGYAN ÍGY KINÉZŐ" — visual brand consistency overrides pharmacological accuracy. Documented in this spec so future contributors don't "correct" it.
