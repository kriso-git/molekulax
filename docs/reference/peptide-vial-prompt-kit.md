# Peptide Vial Prompt-Kit (copy-paste for Gemini sessions)

**Model:** Gemini 3 Pro Image ("Nano Banana Pro"), image-ref mode.
**Reference image:** the 2026-06-02 **Tirzepatide** vial (clean MOLEKULAX pill-frame). Save it
here as `docs/reference/molekulax-vial-reference.png` and upload it to the Gemini chat first.

**Per vial:** upload the reference → paste the EDIT-PROMPT below → fill `{{NAME}}`,
`{{AMOUNT}}`, `{{APPEARANCE}}` from the table → generate → save as
`tmp/gemini-vials/<id>.png` (lowercase id, see table) → when a batch is ready, tell Claude:
`npm run vials:integrate` does rembg + binds it into the data.

> ⚠️ **Reject see-through labels.** Gemini sometimes renders the foil label as transparent
> (you can see the glass/powder through it). The label must be a **solid opaque sticker** —
> if a generation comes out with a see-through/translucent label, regenerate it.

---

## EDIT-PROMPT

```
You are looking at a reference image of a Molekulax peptide vial.

Generate a new image PIXEL-PERFECT identical to this reference EXCEPT for THREE changes:
  • Replace the peptide name "Tirzepatide" on the label with: {{NAME}}
  • Replace the amount "10 mg" on the label with: {{AMOUNT}}
  • Replace the purple powder with: {{APPEARANCE}}

EVERYTHING ELSE stays 100% identical: same 10ml clear glass vial, shape, proportions; same
dark gray rubber stopper + silver knurled aluminum crimp cap; same holographic-iridescent
silver-foil label — FULLY OPAQUE: a SOLID foil sticker you CANNOT see through (the rainbow
shimmer is a reflective surface effect, NOT transparency; the glass/powder behind the label
is completely hidden by it), same size/position/edge/shimmer; same "MOLEKULAX" rounded-pill
frame at top, same ">99% Tisztaság" line, same "Kutatási célra ajánlott" line at the bottom;
same bold black sans-serif font; same neutral pale-gray gradient background; same soft
3-point studio lighting; same camera angle; same 1:1 square aspect; same contact shadow.

DO NOT add any text, batch/lot numbers, QR codes, expiry, barcodes, manufacturer info, URLs,
the "Beim"/"Beim..." fragment (it appears in the reference's lower-right — REMOVE it), or any
foreign-word fragment. DO NOT change the glass, stopper, cap, foil, layout, framing, or
background. DO NOT make the label transparent, translucent, or see-through — it is a solid
opaque sticker; you must NOT see the glass or powder through the label area. DO NOT add
Gemini/Google watermarks.

The name, the amount, and the substance appearance are the ONLY three things that change.
Aspect: 1:1 square, prefer 2048×2048.
```

## `{{APPEARANCE}}` values

**DEFAULT (use for every row marked "—" below):**
> a fluffy white-to-off-white lyophilized powder cake filling ~35% of the vial bottom, with a freeze-dried granular texture and subtle cracks

**Exceptions:**
- **cerebrolysin:** *a clear, very pale straw-yellow transparent liquid filling ~80% of the vial (an aqueous solution, NOT a powder cake), with a subtle meniscus*
- **lipo-c:** *a soft pink/magenta lyophilized powder cake filling ~35% of the vial (pink from a B12 lipotropic blend)*
- **nad-plus:** *an off-white powder cake with a faint tan cast filling ~35% of the vial*

## 39-vial table

| # | save as `tmp/gemini-vials/…` | `{{NAME}}` | `{{AMOUNT}}` | `{{APPEARANCE}}` |
|---|---|---|---|---|
| 1 | tirzepatide.png | Tirzepatide | 10 mg | — |
| 2 | hgh.png | HGH | 10 IU | — |
| 3 | cjc-1295-ipamorelin.png | CJC-1295 / Ipamorelin | 5 mg | — |
| 4 | tesamorelin.png | Tesamorelin | 2 mg | — |
| 5 | semaglutide.png | Semaglutide | 5 mg | — |
| 6 | liraglutide.png | Liraglutide | 6 mg | — |
| 7 | ghrp-2.png | GHRP-2 | 5 mg | — |
| 8 | ghrp-6.png | GHRP-6 | 5 mg | — |
| 9 | hexarelin.png | Hexarelin | 2 mg | — |
| 10 | igf-1-lr3.png | IGF-1 LR3 | 1 mg | — |
| 11 | semax.png | Semax | 30 mg | — |
| 12 | selank.png | Selank | 30 mg | — |
| 13 | cerebrolysin.png | Cerebrolysin | 30 mg | **liquid (see exceptions)** |
| 14 | melanotan-1.png | Melanotan-1 | 10 mg | — |
| 15 | kpv.png | KPV | 5 mg | — |
| 16 | thymosin-alpha-1.png | Thymosin Alpha-1 | 5 mg | — |
| 17 | ll-37.png | LL-37 | 5 mg | — |
| 18 | humanin.png | Humanin | 5 mg | — |
| 19 | mots-c.png | MOTS-c | 10 mg | — |
| 20 | pinealon.png | Pinealon | 5 mg | — |
| 21 | gonadorelin.png | Gonadorelin | 1 mg | — |
| 22 | kisspeptin.png | Kisspeptin-10 | 5 mg | — |
| 23 | oxytocin.png | Oxytocin | 5 mg | — |
| 24 | aod-9604.png | AOD-9604 | 5 mg | — |
| 25 | 5-amino-1mq.png | 5-Amino-1MQ | 25 mg | — |
| 26 | nad-plus.png | NAD+ | 100 mg | **off-white+tan (see exceptions)** |
| 27 | dsip.png | DSIP | 5 mg | — |
| 28 | adipotide.png | Adipotide | 10 mg | — |
| 29 | snap-8.png | SNAP-8 | 10 mg | — |
| 30 | matrixyl-3000.png | Matrixyl 3000 | 5 mg | — |
| 31 | ss-31.png | SS-31 | 40 mg | — |
| 32 | cagrilintide.png | Cagrilintide | 5 mg | — |
| 33 | mazdutide.png | Mazdutide | 10 mg | — |
| 34 | survodutide.png | Survodutide | 5 mg | — |
| 35 | na-semax-amidate.png | NA Semax Amidate | 30 mg | — |
| 36 | adalank.png | Adalank | 10 mg | — |
| 37 | adamax.png | Adamax | 5 mg | — |
| 38 | klow-protocol.png | KLOW Protocol | 10 mg | — |
| 39 | lipo-c.png | Lipo-C | 100 mg | **pink/magenta (see exceptions)** |

---

## Regenerate — currently-imaged peptides (14)

These 14 already have a real image but in the OLD style (the original photos / GHK-Cu-era
renders), or the file is now missing. Regenerate them with the **same EDIT-PROMPT** (Tirzepatide
reference) so the whole gallery is one consistent style. Save as `tmp/gemini-vials/<id>.png`
(lowercase id). **`hcg-peptid` / `hmg-peptid` / `epo` / `glow` image files are currently MISSING
from the repo (broken on the live site) — regenerating these fixes them too.**

| # | save as `tmp/gemini-vials/…` | `{{NAME}}` | `{{AMOUNT}}` | `{{APPEARANCE}}` |
|---|---|---|---|---|
| 1 | ghk-cu.png | GHK-Cu | 100 mg | **light blue/teal (see below)** |
| 2 | retatrutide.png | Retatrutide | 10 mg | — |
| 3 | bpc-157.png | BPC-157 | 5 mg | — |
| 4 | tb-500.png | TB-500 | 5 mg | — |
| 5 | cjc-1295.png | CJC-1295 | 5 mg | — |
| 6 | ipamorelin.png | Ipamorelin | 5 mg | — |
| 7 | melanotan-2.png | Melanotan-2 | 10 mg | — |
| 8 | pt-141.png | PT-141 | 10 mg | — |
| 9 | sermorelin.png | Sermorelin | 5 mg | — |
| 10 | epithalon.png | Epithalon | 10 mg | — |
| 11 | hcg-peptid.png | HCG | 5000 IU | — |
| 12 | hmg-peptid.png | HMG | 75 IU | — |
| 13 | epo.png | EPO | 3000 IU | **clear liquid (see below)** |
| 14 | glow.png | GLOW | 70 mg | **off-white + faint blue (see below)** |

**Regenerate-table appearance exceptions:**
- **ghk-cu:** *a light blue / teal lyophilized powder cake filling ~35% of the vial (the copper-peptide complex colour — NOT white, NOT purple)*
- **epo:** *a clear, colourless transparent liquid filling ~80% of the vial (an aqueous solution, NOT a powder cake), with a subtle meniscus*
- **glow:** *an off-white lyophilized powder cake filling ~35% with a faint blue cast (the blend contains GHK-Cu)*

> Amounts are research-grade suggestions — adjust if you prefer. Filenames use the lowercase
> entry id (not the current capitalised `GHK-Cu.png` etc.); the integration step rebinds every
> peptide image to `/peptides/<id>.png` so the whole library uses one naming convention. (The
> integrate script needs a `--regenerate` mode to bind these already-imaged entries — ask Claude
> to add it when this batch is ready.)

---

Full rationale + integration details: `docs/superpowers/specs/2026-06-02-peptide-vial-prompt-kit-design.md`.
