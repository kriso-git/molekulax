import { useState, useRef, useEffect, useId } from 'react'
import { Info } from 'lucide-react'

// Accessible "i" affordance that explains a neutral technical term (Phase C). The definition
// lives in the DOM at all times (visibility-toggled, not conditionally rendered) so prerender /
// crawlers / screen readers get the text; sighted users open it on hover, click, or keyboard.
// CSP-safe (no external resource), reduced-motion-safe.
export default function InfoDot({ term, def, className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const popId = useId()

  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <span
      ref={ref}
      className={`relative inline-flex align-middle ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-label={term}
        aria-expanded={open}
        aria-describedby={popId}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen((o) => !o) }}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="inline-flex items-center justify-center w-4 h-4 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#818cf8]"
        style={{ color: '#818cf8' }}
      >
        <Info size={12} strokeWidth={2.5} />
      </button>
      <span
        id={popId}
        role="tooltip"
        className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+6px)] z-50 w-[min(18rem,78vw)] rounded-xl p-3 text-left normal-case tracking-normal shadow-xl transition-opacity duration-150 motion-reduce:transition-none ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ background: 'rgba(17,17,27,0.98)', border: '1px solid rgba(129,140,248,0.40)', backdropFilter: 'blur(8px)' }}
      >
        <span className="block text-xs font-bold mb-1" style={{ color: '#a5b4fc' }}>{term}</span>
        <span className="block text-[12px] font-normal leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{def}</span>
      </span>
    </span>
  )
}
