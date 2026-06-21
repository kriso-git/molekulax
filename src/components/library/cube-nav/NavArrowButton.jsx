import { ChevronLeft, ChevronRight } from 'lucide-react'

// Shared library prev/next chevron button – the brand chemical-green glow.
// Used by CubeNavControls (desktop absolute arrows flanking the grid) and by the
// mobile dots-row arrows in LibraryGallery (flanking the pager).
const ARROW_STYLE = {
  background: 'rgba(0,255,153,0.16)',
  border: '1.5px solid rgba(0,255,153,0.55)',
  color: '#00ff99',
  boxShadow: '0 0 26px rgba(0,255,153,0.28), inset 0 0 14px rgba(0,255,153,0.12)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
}

export default function NavArrowButton({ dir, onClick, ariaLabel, className = '', iconClassName = '', pulse = false }) {
  const Icon = dir === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${pulse ? 'cube-nav-arrow ' : ''}flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 ${className}`}
      style={ARROW_STYLE}
    >
      <Icon className={iconClassName} strokeWidth={2.5} />
    </button>
  )
}
