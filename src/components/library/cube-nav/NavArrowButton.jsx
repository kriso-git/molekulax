import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTheme } from '../../../theme/ThemeContext'

// Shared library prev/next chevron button. Theme-aware so it stays readable in
// BOTH themes: dark = the brand chemical-green glow; light = a frosted-white chip
// with a dark-emerald edge + chevron (the green-on-light glow was near-invisible).
// Used by CubeNavControls (desktop absolute arrows flanking the grid) and by the
// mobile dots-row arrows in LibraryGallery (flanking the pager).
const STYLE_DARK = {
  background: 'rgba(0,255,153,0.16)',
  border: '1.5px solid rgba(0,255,153,0.55)',
  color: '#00ff99',
  boxShadow: '0 0 26px rgba(0,255,153,0.28), inset 0 0 14px rgba(0,255,153,0.12)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
}
const STYLE_LIGHT = {
  background: 'rgba(255,255,255,0.86)',
  border: '1.6px solid rgba(10,125,84,0.82)',
  color: '#0a7d54',
  boxShadow: '0 6px 20px rgba(10,125,84,0.22), inset 0 0 0 1px rgba(255,255,255,0.55)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
}

export default function NavArrowButton({ dir, onClick, ariaLabel, className = '', iconClassName = '', pulse = false }) {
  const { theme } = useTheme()
  const Icon = dir === 'left' ? ChevronLeft : ChevronRight
  const style = theme === 'light' ? STYLE_LIGHT : STYLE_DARK
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${pulse ? 'cube-nav-arrow ' : ''}flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 ${className}`}
      style={style}
    >
      <Icon className={iconClassName} strokeWidth={2.5} />
    </button>
  )
}
