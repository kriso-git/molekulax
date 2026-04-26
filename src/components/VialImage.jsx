// Peptide vial visual.
// If `image` prop is provided, render the photo (with subtle accent glow + reflection).
// Otherwise fall back to the stylised SVG vial.

export default function VialImage({ accentColor = '#818cf8', name = '', uid = 'v', image }) {

  if (image) {
    return (
      <div
        className="relative w-full h-full flex items-center justify-center"
        aria-label={`${name} peptide vial`}
      >
        {/* Accent glow */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${accentColor}33 0%, transparent 65%)`,
            filter: 'blur(4px)',
          }}
        />
        <img
          src={image}
          alt={`${name} vial`}
          className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.6)]"
          loading="lazy"
          draggable="false"
        />
        {/* Soft floor reflection */}
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

  // ── Fallback: original stylised SVG vial ────────────────────────────────────
  const gGlass  = `${uid}-glass`
  const gLiquid = `${uid}-liq`
  const gShine  = `${uid}-shine`
  const clipId  = `${uid}-clip`
  const glowId  = `${uid}-glow`
  const labelName = name.length > 9 ? name.slice(0, 8) + '…' : name

  return (
    <svg
      viewBox="0 0 110 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${name} peptide vial`}
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
