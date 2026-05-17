// Phase 10 — Doto neon chemical-formula placeholder.
// Renders when nootropic library is active and entry has no image.
// Parses ASCII formula (e.g. "C15H15NO2S") into atom-blocks with HTML <sub>.

import { useMemo } from 'react'

const CHEMICAL_GREEN = '#00ff99'

const SIZE_LARGE  = 'text-[2.3rem]'   // ≤4 blocks single row
const SIZE_MEDIUM = 'text-[1.9rem]'   // 5-6 blocks 2 rows
const SIZE_SMALL  = 'text-[1.55rem]'  // 7+ blocks 2 rows

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

function pickSize(blockCount) {
  if (blockCount <= 4) return SIZE_LARGE
  if (blockCount <= 6) return SIZE_MEDIUM
  return SIZE_SMALL
}

function splitToTwoRows(blocks) {
  // Default auto-split: ≤4 = 1 row, 5+ = 2 rows breaking at midpoint.
  if (blocks.length <= 4) return [blocks]
  const mid = Math.ceil(blocks.length / 2)
  return [blocks.slice(0, mid), blocks.slice(mid)]
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

export default function ChemicalFormulaPlaceholder({ formula, className = '' }) {
  if (!formula || formula === 'mixture') {
    return null
  }

  const { rows, sizeClass } = useMemo(() => {
    const parsed = parseFormula(formula)
    const allBlocks = parsed.flat()
    const sizeClass = pickSize(allBlocks.length)
    const rows = parsed.length > 1 ? parsed : splitToTwoRows(parsed[0] || [])
    return { rows, sizeClass }
  }, [formula])

  return (
    <div
      className={`cfp-root relative w-full h-full overflow-hidden rounded-2xl flex items-center justify-center ${className}`}
      style={{
        background:
          'linear-gradient(90deg, rgba(0,255,153,0.025) 50%, transparent 50%) 0 0 / 4px 100%, ' +
          'radial-gradient(circle at 50% 50%, rgba(0,255,153,0.08) 0%, transparent 65%), ' +
          '#050505',
        border: '1px solid rgba(0,255,153,0.18)',
      }}
      role="img"
      aria-label={`Chemical formula ${Array.isArray(formula) ? formula.join(' ') : formula}`}
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
      {/* Formula */}
      <div
        className={`cfp-pulse-text-el relative z-10 font-doto font-black text-center leading-tight flex flex-col gap-[0.05em] px-4 ${sizeClass}`}
        style={{
          color: CHEMICAL_GREEN,
          textShadow:
            '0 0 4px rgba(0,255,153,0.9), 0 0 12px rgba(0,255,153,0.7), 0 0 28px rgba(0,255,153,0.45), 0 0 56px rgba(0,255,153,0.25)',
          animation: 'cfp-pulse-text 3.5s ease-in-out infinite',
          letterSpacing: '0.03em',
        }}
      >
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
      </div>
    </div>
  )
}
