// Phase 10 — Doto neon chemical-formula placeholder.
// Renders when nootropic library is active and entry has no image.
// Parses ASCII formula (e.g. "C15H15NO2S") into atom-blocks with HTML <sub>.
// For 'mixture' entries (peptide cocktails, plant extracts: Cerebrolysin,
// Cortexin, Lion's Mane) it falls back to a neon name display with the same
// HUD framing — so the gallery has a single consistent visual language.

import { useMemo } from 'react'

const CHEMICAL_GREEN = '#00ff99'

// Container-relative sizing keeps the formula readable inside any tile width
// (gallery tile ~180px, hero ~420px). cqi = 1% of the container inline size.
const SIZE_LARGE  = 'text-[clamp(1.4rem,16cqi,2.6rem)]'  // short formulas, ≤8 visible chars
const SIZE_MEDIUM = 'text-[clamp(1.15rem,13cqi,2.1rem)]' // 9-11 chars
const SIZE_SMALL  = 'text-[clamp(0.95rem,10.5cqi,1.7rem)]' // 12+ chars
// Name-mode sizes (single token, no subscripts) — slightly tighter scaling.
const NAME_SIZE_LARGE  = 'text-[clamp(1.1rem,11cqi,2rem)]'
const NAME_SIZE_MEDIUM = 'text-[clamp(0.95rem,9cqi,1.6rem)]'

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
  // Split into 2 rows when the formula renders wider than fits a tile cleanly.
  // We split by char-count (not block-count) so 4-block formulas with multi-digit
  // subscripts like C17H22N2O4 (10 chars) also break — otherwise they overflow
  // the corner-bracket frame at narrow tile widths.
  const totalChars = blocks.reduce((sum, b) => sum + b.symbol.length + b.count.length, 0)
  if (blocks.length <= 2 || totalChars <= 8) return [blocks]
  // Find a split point that balances char-counts between the two rows.
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

// Break a substance name into 1-2 lines for the name-fallback layout.
// Prefer a hyphen/space split near the middle; otherwise stay on one line.
function splitName(name) {
  const trimmed = (name || '').trim()
  if (!trimmed) return ['', '']
  if (trimmed.length <= 8) return [trimmed]
  const breakChars = [' ', '-', '–', "'", '`']
  // Find a break point closest to the middle.
  const mid = Math.floor(trimmed.length / 2)
  let bestIdx = -1
  let bestDist = Infinity
  for (let i = 1; i < trimmed.length - 1; i++) {
    if (breakChars.includes(trimmed[i])) {
      const d = Math.abs(i - mid)
      if (d < bestDist) {
        bestDist = d
        bestIdx = i
      }
    }
  }
  if (bestIdx > 0) {
    return [trimmed.slice(0, bestIdx), trimmed.slice(bestIdx).replace(/^[-–'` ]/, '')]
  }
  return [trimmed]
}

function Corner({ pos }) {
  const map = {
    tl: { top: 14, left: 14, borderRight: 'none', borderBottom: 'none' },
    tr: { top: 14, right: 14, borderLeft: 'none', borderBottom: 'none' },
    bl: { bottom: 14, left: 14, borderRight: 'none', borderTop: 'none' },
    br: { bottom: 14, right: 14, borderLeft: 'none', borderTop: 'none' },
  }
  return (
    <span
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        width: 22,
        height: 22,
        border: `1.5px solid ${CHEMICAL_GREEN}`,
        opacity: 0.6,
        ...map[pos],
      }}
    />
  )
}

// Shared shell — corner brackets, scanlines, radial glow, dotted-grid that
// echoes MoleculeBackground so the placeholder reads as "part of the page".
function PlaceholderShell({ children, ariaLabel, className }) {
  return (
    <div
      className={`cfp-root relative w-full h-full overflow-hidden rounded-2xl flex items-center justify-center ${className}`}
      style={{
        containerType: 'inline-size',
        // Site-vibe background: theme-aware base + dotted molecular grid +
        // soft chemical-green radial vignette. Reads as the page's own
        // canvas rather than a separate black box.
        background:
          'radial-gradient(rgba(0,255,153,0.08) 1px, transparent 1.4px) 0 0 / 14px 14px, ' +
          'radial-gradient(circle at 50% 50%, rgba(0,255,153,0.10) 0%, transparent 65%), ' +
          'linear-gradient(135deg, rgba(0,255,153,0.04) 0%, transparent 50%, rgba(99,102,241,0.05) 100%), ' +
          'var(--bg-base, #050505)',
        border: '1px solid rgba(0,255,153,0.18)',
        boxShadow: 'inset 0 0 40px rgba(0,255,153,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
      role="img"
      aria-label={ariaLabel}
    >
      {/* Pulsing radial glow */}
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
      {/* HUD corners */}
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />
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
        animation: 'cfp-pulse-text 3.5s ease-in-out infinite',
        letterSpacing,
      }}
    >
      {children}
    </div>
  )
}

export default function ChemicalFormulaPlaceholder({ formula, name, className = '' }) {
  const isMixture = !formula || formula === 'mixture'

  // ── Mixture fallback: show the substance name in the same neon HUD ──
  if (isMixture) {
    if (!name) return null
    const nameLines = splitName(name)
    const longest = nameLines.reduce((m, l) => Math.max(m, l.length), 0)
    const sizeClass = longest <= 9 ? NAME_SIZE_LARGE : NAME_SIZE_MEDIUM
    return (
      <PlaceholderShell ariaLabel={`${name} (mixture)`} className={className}>
        <NeonText sizeClass={sizeClass} letterSpacing="0.05em">
          {nameLines.map((line, i) => (
            <span key={i} className="whitespace-nowrap uppercase">{line}</span>
          ))}
        </NeonText>
      </PlaceholderShell>
    )
  }

  const { rows, sizeClass } = useMemo(() => {
    const parsed = parseFormula(formula)
    const allBlocks = parsed.flat()
    // Count actual visible chars (symbol + subscript-digits) so that long
    // 4-block formulas like C17H22N2O4 (10 chars) shrink instead of overflowing.
    const charCount = allBlocks.reduce((sum, b) => sum + b.symbol.length + b.count.length, 0)
    const sizeClass = pickSize(charCount)
    const rows = parsed.length > 1 ? parsed : splitToTwoRows(parsed[0] || [])
    return { rows, sizeClass }
  }, [formula])

  return (
    <PlaceholderShell
      ariaLabel={`Chemical formula ${Array.isArray(formula) ? formula.join(' ') : formula}`}
      className={className}
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
