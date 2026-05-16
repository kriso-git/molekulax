// Per-entry WADA status chip.
// Renders nothing if status is missing or unknown.
// Two states: 'banned' (red) and 'monitored' (amber).
//
// Used both on LibraryGallery tiles (top-right corner overlay) and
// EntryDetail Hero (next to the research-tier chip).
//
// Note: the existing WadaBox.jsx (peptide-level shield card) is unchanged.
// This is the per-entry chip-level entity.

import { useLang } from '../../i18n/LanguageContext'

const STYLES = {
  banned:    { bg: 'rgba(220,38,38,0.18)',  border: '#dc2626', text: '#fca5a5' },
  monitored: { bg: 'rgba(251,191,36,0.18)', border: '#fbbf24', text: '#fcd34d' },
}

export default function WadaBadge({ status, size = 'sm' }) {
  const { t } = useLang()
  if (!status || !STYLES[status]) return null
  const style = STYLES[status]
  const padding = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full ${padding} font-semibold uppercase tracking-wider border`}
      style={{ background: style.bg, borderColor: style.border, color: style.text }}
    >
      <span aria-hidden>⚠</span>
      {t(`entry.wada.${status}`)}
    </span>
  )
}
