// Member avatar: the compound's image at full size on a soft accent glow (no hard circle/ring,
// like the entry hero) so the actual vial/blister is clearly visible. Falls back to the name's
// initial when an entry has no image. Decorative; the surrounding link carries the accessible name.
export default function MemberAvatar({ accent = '#818cf8', image, name, size }) {
  return (
    <span
      className="relative inline-flex items-center justify-center shrink-0"
      style={{ width: size, height: size, background: `radial-gradient(circle at 50% 48%, ${accent}26, transparent 70%)` }}
    >
      {image
        ? <img src={image} alt="" loading="lazy" className="object-contain" style={{ width: '100%', height: '100%' }} />
        : <span className="font-bold" style={{ color: accent, fontSize: size * 0.42 }}>{(name || '?').charAt(0)}</span>}
    </span>
  )
}
