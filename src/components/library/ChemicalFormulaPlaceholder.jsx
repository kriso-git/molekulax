// Phase 10 — Doto neon chemical-structure placeholder.
// Renders when nootropic library is active and entry has no image.
//
// Render priority:
//   1. If /molecules/<entryId>.png exists → visualised 2D structure (PubChem,
//      post-processed to neon green on transparent). Highest fidelity.
//   2. Else if `formula` is a parseable ASCII formula → Doto text formula
//      with HTML subscripts (legacy fallback for entries without an image).
//   3. Else if `name` is provided → neon name display (mixtures, plant
//      extracts: Cerebrolysin, Cortexin, Lion's Mane, peptide cocktails).
//
// All three modes share the same HUD shell so the gallery reads consistently.

import { useMemo, useState } from 'react'
import { MOL_VIZ } from './molViz'
import MoleculeVideo from './MoleculeVideo'

const CHEMICAL_GREEN = '#00ff99'

// Container-relative sizing keeps the formula readable inside any tile width
// (gallery tile ~180px, hero ~420px). cqi = 1% of the container inline size.
const SIZE_LARGE  = 'text-[clamp(1.4rem,16cqi,2.6rem)]'  // short formulas, ≤8 visible chars
const SIZE_MEDIUM = 'text-[clamp(1.15rem,13cqi,2.1rem)]' // 9-11 chars
const SIZE_SMALL  = 'text-[clamp(0.95rem,10.5cqi,1.7rem)]' // 12+ chars
// Name-mode sizes (single token, no subscripts) — slightly tighter scaling.
const NAME_SIZE_LARGE  = 'text-[clamp(1.1rem,11cqi,2rem)]'
const NAME_SIZE_MEDIUM = 'text-[clamp(0.95rem,9cqi,1.6rem)]'

const CORNER_POSITIONS = {
  tl: { top: 14, left: 14, borderRight: 'none', borderBottom: 'none' },
  tr: { top: 14, right: 14, borderLeft: 'none', borderBottom: 'none' },
  bl: { bottom: 14, left: 14, borderRight: 'none', borderTop: 'none' },
  br: { bottom: 14, right: 14, borderLeft: 'none', borderTop: 'none' },
}

function parseFormula(input) {
  // Accept either a single string ('C15H15NO2S') or an explicit row array (['C14H26N4','O11P2']).
  const rows = Array.isArray(input) ? input : [input]
  return rows.map(row => {
    const blocks = []
    const re = /([A-Z][a-z]?)(\d*)/g
    let m
    while ((m = re.exec(row)) !== null) {
      if (m[1]) blocks.push({ symbol: m[1], count: m[2] || '' })
    }
    return blocks
  })
}

function pickSize(charCount) {
  if (charCount <= 8) return SIZE_LARGE
  if (charCount <= 11) return SIZE_MEDIUM
  return SIZE_SMALL
}

function splitToTwoRows(blocks) {
  const totalChars = blocks.reduce((sum, b) => sum + b.symbol.length + b.count.length, 0)
  if (blocks.length <= 2 || totalChars <= 8) return [blocks]
  let bestIdx = Math.ceil(blocks.length / 2)
  let bestDiff = Infinity
  for (let i = 1; i < blocks.length; i++) {
    const left = blocks.slice(0, i).reduce((s, b) => s + b.symbol.length + b.count.length, 0)
    const right = totalChars - left
    const diff = Math.abs(left - right)
    if (diff < bestDiff) {
      bestDiff = diff
      bestIdx = i
    }
  }
  return [blocks.slice(0, bestIdx), blocks.slice(bestIdx)]
}

function splitName(name) {
  const trimmed = (name || '').trim()
  if (!trimmed) return ['', '']
  if (trimmed.length <= 10) return [trimmed]
  // Only split at word boundaries — never inside a word. Apostrophes and
  // backticks are intra-word punctuation (Lion's) so we must NOT split there.
  const breakChars = new Set([' ', '-', '–'])
  const mid = Math.floor(trimmed.length / 2)
  let bestIdx = -1
  let bestDist = Infinity
  for (let i = 1; i < trimmed.length - 1; i++) {
    if (breakChars.has(trimmed[i])) {
      const d = Math.abs(i - mid)
      if (d < bestDist) {
        bestDist = d
        bestIdx = i
      }
    }
  }
  if (bestIdx > 0) {
    return [trimmed.slice(0, bestIdx), trimmed.slice(bestIdx).replace(/^[-– ]/, '')]
  }
  return [trimmed]
}

function Corner({ pos, color }) {
  return (
    <span
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        width: 22,
        height: 22,
        border: `1.5px solid ${color}`,
        opacity: 0.55,
        boxShadow: `0 0 6px ${color}33`,
        ...CORNER_POSITIONS[pos],
      }}
    />
  )
}

// Convert "#rrggbb" to "rgba(r,g,b,a)" for runtime tinting of the shell.
function tint(hex, alpha) {
  const h = (hex || '').replace('#', '')
  if (h.length !== 6) return `rgba(255,255,255,${alpha})`
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

function PlaceholderShell({ children, ariaLabel, className, cornerColor }) {
  // Corner brackets follow the entry's own accent (matches the tile vibe);
  // the radial glow + dotted grid stay chemical-green so the molecule reads
  // as "the lit element" against a colour-tinted frame.
  const cc = cornerColor || CHEMICAL_GREEN
  return (
    <div
      className={`cfp-root relative w-full h-full overflow-hidden rounded-2xl flex items-center justify-center ${className}`}
      style={{
        containerType: 'inline-size',
        // Contain the molecule video's mix-blend-mode:screen so it composites only
        // against the shell's own grid/glow layers, never leaking to the page.
        isolation: 'isolate',
        background:
          'radial-gradient(rgba(0,255,153,0.08) 1px, transparent 1.4px) 0 0 / 14px 14px, ' +
          'radial-gradient(circle at 50% 50%, rgba(0,255,153,0.10) 0%, transparent 65%), ' +
          `linear-gradient(135deg, ${tint(cc, 0.05)} 0%, transparent 50%, rgba(99,102,241,0.05) 100%), ` +
          // Always dark (NOT var(--bg-base)) so the glowing molecule / neon image
          // and the mix-blend-mode:screen video composite correctly in BOTH themes
          // — on a light --bg-base they wash out to nothing. A dark HUD tile in a
          // light card reads as an intentional "scope" display.
          '#0a0a16',
        border: `1px solid ${tint(cc, 0.22)}`,
        boxShadow: `inset 0 0 40px ${tint(cc, 0.05)}, inset 0 1px 0 rgba(255,255,255,0.04)`,
      }}
      role="img"
      aria-label={ariaLabel}
    >
      <span
        aria-hidden="true"
        className="cfp-pulse-glow-el absolute pointer-events-none"
        style={{
          inset: '18%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,153,0.20), transparent 70%)',
          animation: 'cfp-pulse-glow 3.5s ease-in-out infinite',
        }}
      />
      <Corner pos="tl" color={cc} />
      <Corner pos="tr" color={cc} />
      <Corner pos="bl" color={cc} />
      <Corner pos="br" color={cc} />
      {children}
    </div>
  )
}

function NeonText({ children, sizeClass, letterSpacing = '0.03em' }) {
  return (
    <div
      className={`cfp-pulse-text-el relative z-10 font-doto font-black text-center leading-tight flex flex-col gap-[0.05em] px-4 ${sizeClass}`}
      style={{
        color: CHEMICAL_GREEN,
        textShadow:
          '0 0 4px rgba(0,255,153,0.9), 0 0 12px rgba(0,255,153,0.7), 0 0 28px rgba(0,255,153,0.45), 0 0 56px rgba(0,255,153,0.25)',
        /* Static — pulse intentionally removed: animating filter brightness
           on an element with 3 stacked drop-shadow filters forced a paint
           every frame across 44 gallery tiles, blocking 60fps during cube
           rotation. The shell still pulses (opacity/transform, GPU-only). */
        letterSpacing,
      }}
    >
      {children}
    </div>
  )
}

function MoleculeImage({ entryId, name }) {
  // The image is already neon-green-on-transparent (preprocessed in
  // scripts/download-molecule-images.mjs). We add a multi-layer drop-shadow
  // glow + subtle pulse so it reads as a HUD readout rather than a flat icon.
  return (
    <img
      src={`/molecules/${entryId}.png`}
      alt={`${name} 2D structure`}
      className="cfp-pulse-text-el relative z-10 w-[78%] h-[78%] object-contain pointer-events-none select-none"
      style={{
        filter:
          'drop-shadow(0 0 6px rgba(0,255,153,0.85)) ' +
          'drop-shadow(0 0 14px rgba(0,255,153,0.55)) ' +
          'drop-shadow(0 0 28px rgba(0,255,153,0.30))',
        /* Static — pulse intentionally removed: animating filter brightness
           on an element with 3 stacked drop-shadow filters forced a paint
           every frame across 44 gallery tiles, blocking 60fps during cube
           rotation. The shell still pulses (opacity/transform, GPU-only). */
      }}
      draggable="false"
      loading="lazy"
      decoding="async"
    />
  )
}

export default function ChemicalFormulaPlaceholder({ formula, name, entryId, accent, className = '' }) {
  const [imgFailed, setImgFailed] = useState(false)
  const hasImage = !!entryId && !imgFailed

  // Always compute parsed-formula data for the text fallback (cheap, memo'd).
  const { rows, sizeClass } = useMemo(() => {
    if (!formula || formula === 'mixture') return { rows: [], sizeClass: SIZE_LARGE }
    const parsed = parseFormula(formula)
    const allBlocks = parsed.flat()
    const charCount = allBlocks.reduce((sum, b) => sum + b.symbol.length + b.count.length, 0)
    const sc = pickSize(charCount)
    const rs = parsed.length > 1 ? parsed : splitToTwoRows(parsed[0] || [])
    return { rows: rs, sizeClass: sc }
  }, [formula])

  // ── 1a. Rotating 3D structure loop (pre-rendered webm) ────────────
  // For nootropics with a pre-rendered molecule loop, the static 2D PNG is
  // replaced by an IO-gated, pre-rendered rotating ball-and-stick webm (its
  // own .jpg still is the poster, so no blank flash). Same perf-safe pattern
  // as the card motifs: nothing runs at runtime until it scrolls into view.
  if (hasImage && MOL_VIZ.has(entryId)) {
    return (
      <PlaceholderShell ariaLabel={`${name || entryId} forgó 3D kémiai szerkezet`} className={className} cornerColor={accent}>
        <MoleculeVideo
          entryId={entryId}
          name={name || entryId}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />
      </PlaceholderShell>
    )
  }

  // ── 1. Structural image (preferred) ──────────────────────────────
  if (hasImage) {
    return (
      <PlaceholderShell ariaLabel={`${name || entryId} 2D structure`} className={className} cornerColor={accent}>
        <img
          src={`/molecules/${entryId}.png`}
          alt={`${name || entryId} 2D structure`}
          className="cfp-pulse-text-el relative z-10 w-[78%] h-[78%] object-contain pointer-events-none select-none"
          style={{
            filter:
              'drop-shadow(0 0 6px rgba(0,255,153,0.85)) ' +
              'drop-shadow(0 0 14px rgba(0,255,153,0.55)) ' +
              'drop-shadow(0 0 28px rgba(0,255,153,0.30))',
            /* Static — pulse intentionally removed: animating filter brightness
           on an element with 3 stacked drop-shadow filters forced a paint
           every frame across 44 gallery tiles, blocking 60fps during cube
           rotation. The shell still pulses (opacity/transform, GPU-only). */
          }}
          draggable="false"
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      </PlaceholderShell>
    )
  }

  // ── 2. Text formula fallback ─────────────────────────────────────
  if (formula && formula !== 'mixture') {
    return (
      <PlaceholderShell
        ariaLabel={`Chemical formula ${Array.isArray(formula) ? formula.join(' ') : formula}`}
        className={className}
        cornerColor={accent}
      >
        <NeonText sizeClass={sizeClass}>
          {rows.map((row, i) => (
            <span key={i} className="whitespace-nowrap">
              {row.map((block, j) => (
                <span key={j}>
                  {block.symbol}
                  {block.count && <sub className="text-[0.7em] align-[-0.15em]">{block.count}</sub>}
                </span>
              ))}
            </span>
          ))}
        </NeonText>
      </PlaceholderShell>
    )
  }

  // ── 3. Name fallback (mixtures, plant extracts, peptide cocktails) ──
  if (name) {
    const nameLines = splitName(name)
    const longest = nameLines.reduce((m, l) => Math.max(m, l.length), 0)
    const nameSize = longest <= 9 ? NAME_SIZE_LARGE : NAME_SIZE_MEDIUM
    return (
      <PlaceholderShell ariaLabel={`${name}`} className={className} cornerColor={accent}>
        <NeonText sizeClass={nameSize} letterSpacing="0.05em">
          {nameLines.map((line, i) => (
            <span key={i} className="whitespace-nowrap uppercase">{line}</span>
          ))}
        </NeonText>
      </PlaceholderShell>
    )
  }

  return null
}
