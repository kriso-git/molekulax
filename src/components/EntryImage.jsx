// Library Entry visual.
// If `image` prop is provided, render the photo (with subtle accent glow + reflection).
// Otherwise fall back to a library-specific SVG illustration:
//   - peptid library → stylised vial
//   - nootropic library → stylised pill / molecule
// The fallback is selected via the optional `library` prop (`library.id`).

function PhotoFrame({ accentColor, image, name }) {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      aria-label={`${name} entry image`}
    >
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${accentColor}33 0%, transparent 65%)`,
          filter: 'blur(4px)',
        }}
      />
      <img
        src={image}
        alt={`${name}`}
        className="relative z-10 w-full h-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.6)]"
        loading="lazy"
        draggable="false"
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-2/3 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${accentColor}40 0%, transparent 70%)`,
          filter: 'blur(3px)',
        }}
      />
    </div>
  )
}

function VialFallback({ accentColor, name, uid }) {
  const gGlass  = `${uid}-glass`
  const gLiquid = `${uid}-liq`
  const gShine  = `${uid}-shine`
  const clipId  = `${uid}-clip`
  const glowId  = `${uid}-glow`
  const labelName = name.length > 9 ? name.slice(0, 8) + '…' : name

  return (
    <svg
      viewBox="0 0 110 200"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label={`${name} vial`}
    >
      <defs>
        <linearGradient id={gGlass} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.03)"/>
          <stop offset="25%"  stopColor="rgba(255,255,255,0.15)"/>
          <stop offset="55%"  stopColor="rgba(255,255,255,0.05)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.01)"/>
        </linearGradient>
        <linearGradient id={gLiquid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={accentColor} stopOpacity="0.55"/>
          <stop offset="100%" stopColor={accentColor} stopOpacity="0.15"/>
        </linearGradient>
        <linearGradient id={gShine} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(255,255,255,0)"/>
          <stop offset="35%"  stopColor="rgba(255,255,255,0.10)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
        <clipPath id={clipId}>
          <path d="M28 54 L28 158 Q28 178 55 178 Q82 178 82 158 L82 54 Z"/>
        </clipPath>
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <path d="M28 54 L28 158 Q28 178 55 178 Q82 178 82 158 L82 54 Z" fill={`url(#${gGlass})`} stroke="rgba(255,255,255,0.18)" strokeWidth="1.2"/>
      <rect x="28" y="108" width="54" height="72" fill={`url(#${gLiquid})`} clipPath={`url(#${clipId})`}/>
      <path d="M29 109 Q55 105 81 109" stroke={accentColor} strokeWidth="0.8" strokeOpacity="0.45" fill="none"/>
      <path d="M28 54 L28 175 Q28 178 30 178" stroke="rgba(255,255,255,0)" fill={`url(#${gShine})`} opacity="0.6"/>
      <line x1="34" y1="58" x2="34" y2="168" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="26" y="36" width="58" height="20" rx="4" fill="rgba(25,25,38,0.95)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      <rect x="34" y="40" width="42" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="30" y="52" width="50" height="6" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8"/>
      <rect x="30" y="16" width="50" height="22" rx="5" fill={accentColor} fillOpacity="0.75" filter={`url(#${glowId})`}/>
      <rect x="34" y="19" width="22" height="6" rx="2" fill="rgba(255,255,255,0.22)"/>
      <rect x="30" y="34" width="50" height="4" fill={accentColor} fillOpacity="0.45"/>
      <rect x="29" y="66" width="52" height="36" rx="3" fill="rgba(8,8,24,0.82)" stroke={accentColor} strokeWidth="0.7" strokeOpacity="0.55"/>
      <text x="55" y="79" textAnchor="middle" fill={accentColor} fontSize="5.2" fontFamily="'Courier New', monospace" letterSpacing="1.4" fontWeight="bold">MOLEKULAX</text>
      <line x1="34" y1="82" x2="76" y2="82" stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.4"/>
      <text x="55" y="93" textAnchor="middle" fill="rgba(255,255,255,0.92)" fontSize="7" fontFamily="'Arial', sans-serif" fontWeight="700" letterSpacing="0.3">{labelName}</text>
      <path d="M29 165 Q29 177 55 177 Q81 177 81 165" stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none"/>
    </svg>
  )
}

function MoleculeFallback({ accentColor, name, uid }) {
  const gPill = `${uid}-pill`
  const gShineId = `${uid}-pshine`
  const glowId = `${uid}-mglow`
  const labelName = name.length > 9 ? name.slice(0, 8) + '…' : name

  // Hexagonal benzene-ring molecule on top of a stylised capsule pill.
  const cx = 55, cy = 70, r = 28
  const angles = [0, 60, 120, 180, 240, 300]
  const points = angles.map(a => {
    const rad = ((a - 30) * Math.PI) / 180
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)]
  })
  const polyPoints = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')

  return (
    <svg
      viewBox="0 0 110 200"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label={`${name} molecule`}
    >
      <defs>
        <linearGradient id={gPill} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor={accentColor} stopOpacity="0.55"/>
          <stop offset="50%"  stopColor={accentColor} stopOpacity="0.30"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.06)"/>
        </linearGradient>
        <linearGradient id={gShineId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(255,255,255,0)"/>
          <stop offset="40%"  stopColor="rgba(255,255,255,0.15)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Hexagonal benzene-ring molecule */}
      <g opacity="0.85">
        <polygon
          points={polyPoints}
          fill={`${accentColor}22`}
          stroke={accentColor}
          strokeWidth="1.6"
          strokeLinejoin="round"
          filter={`url(#${glowId})`}
        />
        <polyline
          points={`${points[0][0]},${points[0][1]} ${points[2][0]},${points[2][1]} ${points[4][0]},${points[4][1]}`}
          stroke={accentColor}
          strokeWidth="0.8"
          strokeOpacity="0.55"
          fill="none"
          strokeLinejoin="round"
        />
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.2" fill={accentColor} opacity="0.85"/>
        ))}
      </g>

      {/* Connecting bond down to the pill */}
      <line x1="55" y1="98" x2="55" y2="118" stroke={accentColor} strokeWidth="1.4" strokeOpacity="0.55"/>

      {/* Capsule pill (two-tone) */}
      <g>
        <rect x="22" y="118" width="66" height="46" rx="23" fill={`url(#${gPill})`} stroke={`${accentColor}80`} strokeWidth="1.2"/>
        <rect x="22" y="118" width="33" height="46" rx="23" ry="23" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8"/>
        <rect x="26" y="124" width="58" height="6" rx="3" fill={`url(#${gShineId})`} opacity="0.85"/>
      </g>

      {/* Bottom label */}
      <rect x="20" y="170" width="70" height="22" rx="4" fill="rgba(8,8,24,0.82)" stroke={accentColor} strokeWidth="0.7" strokeOpacity="0.55"/>
      <text x="55" y="178" textAnchor="middle" fill={accentColor} fontSize="5.2" fontFamily="'Courier New', monospace" letterSpacing="1.4" fontWeight="bold">MOLEKULAX</text>
      <text x="55" y="187.5" textAnchor="middle" fill="rgba(255,255,255,0.92)" fontSize="7" fontFamily="'Arial', sans-serif" fontWeight="700" letterSpacing="0.3">{labelName}</text>
    </svg>
  )
}

export default function EntryImage({ accentColor = '#818cf8', name = '', uid = 'v', image, library }) {
  if (image) {
    return <PhotoFrame accentColor={accentColor} image={image} name={name} />
  }
  const isPeptide = !library || library.id === 'peptides'
  if (isPeptide) {
    return <VialFallback accentColor={accentColor} name={name} uid={uid} />
  }
  return <MoleculeFallback accentColor={accentColor} name={name} uid={uid} />
}
