// Semi-transparent decorative scientific symbols layered between
// the canvas background (z:0) and page content (z:10)

function RodOfAsclepius() {
  return (
    <svg width="52" height="130" viewBox="0 0 52 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Staff */}
      <line x1="26" y1="8" x2="26" y2="122" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
      {/* Crosspiece at top */}
      <line x1="14" y1="14" x2="38" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      {/* Snake body — coiling sinusoidal path */}
      <path
        d="M26,24 C42,30 10,42 26,50 C42,58 10,70 26,78 C42,86 10,98 26,106"
        stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"
      />
      {/* Snake head */}
      <ellipse cx="36" cy="21" rx="8" ry="6" stroke="white" strokeWidth="1.6" transform="rotate(-18 36 21)"/>
      {/* Eye */}
      <circle cx="38" cy="19" r="1.2" fill="white"/>
      {/* Tongue */}
      <path d="M43,18 L49,15 M43,18 L49,21" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  )
}

function Atom() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Nucleus */}
      <circle cx="45" cy="45" r="5" fill="white" fillOpacity="0.85"/>
      {/* Orbit 1 */}
      <ellipse cx="45" cy="45" rx="38" ry="14" stroke="white" strokeWidth="1.2"/>
      {/* Orbit 2 — 60° */}
      <ellipse cx="45" cy="45" rx="38" ry="14" stroke="white" strokeWidth="1.2" transform="rotate(60 45 45)"/>
      {/* Orbit 3 — 120° */}
      <ellipse cx="45" cy="45" rx="38" ry="14" stroke="white" strokeWidth="1.2" transform="rotate(120 45 45)"/>
      {/* Electron dots */}
      <circle cx="83" cy="45" r="2.5" fill="white" fillOpacity="0.7"/>
      <circle cx="26" cy="20" r="2.5" fill="white" fillOpacity="0.7"/>
      <circle cx="26" cy="70" r="2.5" fill="white" fillOpacity="0.7"/>
    </svg>
  )
}

function TestTube() {
  return (
    <svg width="38" height="88" viewBox="0 0 38 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tube body */}
      <path
        d="M8,6 L8,60 Q8,80 19,80 Q30,80 30,60 L30,6"
        stroke="white" strokeWidth="1.8" strokeLinejoin="round"
        fill="rgba(255,255,255,0.05)"
      />
      {/* Rim cap */}
      <rect x="5" y="3" width="28" height="6" rx="2.5" stroke="white" strokeWidth="1.4"
        fill="rgba(255,255,255,0.08)"/>
      {/* Liquid fill */}
      <path d="M8,50 L8,60 Q8,80 19,80 Q30,80 30,60 L30,50 Z" fill="rgba(100,178,192,0.22)"/>
      {/* Bubble 1 */}
      <circle cx="15" cy="64" r="2.2" stroke="white" strokeWidth="1" fill="rgba(255,255,255,0.15)"/>
      {/* Bubble 2 */}
      <circle cx="23" cy="56" r="1.5" stroke="white" strokeWidth="0.8" fill="rgba(255,255,255,0.12)"/>
    </svg>
  )
}

function HexMolecule() {
  // Benzene-ring style hexagonal molecule with substituent bonds
  const cx = 55, cy = 55, r = 30
  const pts = Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 3) * k - Math.PI / 6
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
  })
  const hex = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + ' Z'
  const spokes = pts.map(p => {
    const dx = (p.x - cx) * 0.55, dy = (p.y - cy) * 0.55
    return `M${p.x.toFixed(1)},${p.y.toFixed(1)} L${(p.x + dx).toFixed(1)},${(p.y + dy).toFixed(1)}`
  }).join(' ')

  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Inner double-bond circle */}
      <circle cx={cx} cy={cy} r={r * 0.58} stroke="white" strokeWidth="1" strokeDasharray="5 4" opacity="0.6"/>
      {/* Hexagon ring */}
      <path d={hex} stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      {/* Substituent bonds */}
      <path d={spokes} stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      {/* Atom circles at ends */}
      {pts.map((p, i) => {
        const dx = (p.x - cx) * 0.55, dy = (p.y - cy) * 0.55
        return <circle key={i} cx={(p.x + dx).toFixed(1)} cy={(p.y + dy).toFixed(1)} r="3"
          fill="none" stroke="white" strokeWidth="1.2"/>
      })}
    </svg>
  )
}

function Microscope() {
  return (
    <svg width="70" height="90" viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base */}
      <path d="M15,82 Q15,87 35,87 Q55,87 55,82 L55,78 L15,78 Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/>
      {/* Stage arm */}
      <rect x="28" y="52" width="14" height="28" rx="2" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.04)"/>
      {/* Horizontal stage */}
      <rect x="18" y="48" width="34" height="7" rx="2" stroke="white" strokeWidth="1.4" fill="rgba(255,255,255,0.06)"/>
      {/* Vertical tube */}
      <rect x="30" y="16" width="10" height="36" rx="3" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/>
      {/* Eyepiece */}
      <path d="M26,16 Q35,10 44,16" stroke="white" strokeWidth="1.5" fill="none"/>
      <rect x="27" y="8" width="16" height="10" rx="4" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.07)"/>
      {/* Objective lens bottom */}
      <ellipse cx="35" cy="52" rx="5" ry="3" stroke="white" strokeWidth="1.3"/>
      {/* Light circle on stage */}
      <circle cx="35" cy="55" r="3" stroke="white" strokeWidth="1" strokeDasharray="2 2"/>
    </svg>
  )
}

const DECORATIONS = [
  // Rod of Asclepius — left, upper third
  { Component: RodOfAsclepius, style: { left: '4%',  top: '28%', opacity: 0.055, transform: 'rotate(-10deg) scale(1.3)' } },
  // Atom — right, upper area
  { Component: Atom,           style: { right: '6%', top: '10%', opacity: 0.050, transform: 'rotate(22deg) scale(1.5)'  } },
  // Test tube — right, lower
  { Component: TestTube,       style: { right: '3%', top: '58%', opacity: 0.060, transform: 'rotate(15deg) scale(1.4)'  } },
  // Hex molecule — left, lower
  { Component: HexMolecule,    style: { left: '2%',  top: '65%', opacity: 0.045, transform: 'rotate(-6deg) scale(1.3)'  } },
  // Microscope — center-right
  { Component: Microscope,     style: { left: '63%', top: '38%', opacity: 0.040, transform: 'rotate(8deg) scale(1.2)'   } },
  // Second atom — center-left, lower
  { Component: Atom,           style: { left: '18%', top: '52%', opacity: 0.035, transform: 'rotate(-30deg) scale(1.0)' } },
  // Second rod — far right, top
  { Component: RodOfAsclepius, style: { right: '12%',top: '42%', opacity: 0.040, transform: 'rotate(8deg) scale(1.1)'  } },
]

export default function FloatingScientific() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {DECORATIONS.map(({ Component, style }, i) => (
        <div key={i} style={{ position: 'absolute', ...style }}>
          <Component />
        </div>
      ))}
    </div>
  )
}
