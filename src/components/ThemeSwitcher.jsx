import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../theme/ThemeContext'
import { useLang } from '../i18n/LanguageContext'

// Placed by App.jsx next to the language switcher (fixed top-right).
// Tied to LanguageSwitcher's top-right anchor — sits to its immediate left.
export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLang()
  const isDark = theme === 'dark'
  const Icon = isDark ? Sun : Moon
  const next = isDark ? t('theme.light') : t('theme.dark')

  return (
    <div className="fixed top-3 right-[88px] z-[60]">
      <button
        onClick={toggleTheme}
        title={`${t('theme.toggle')} → ${next}`}
        aria-label={`${t('theme.toggle')} → ${next}`}
        className="inline-flex items-center gap-1.5 pl-2.5 pr-2.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200"
        style={{
          background: 'var(--surface-bubble)',
          border: '1px solid var(--border-accent)',
          backdropFilter: 'blur(10px)',
          color: 'var(--text-primary)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-accent-strong)'
          e.currentTarget.style.boxShadow = '0 0 18px var(--shadow-accent)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-accent)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <Icon size={12} className="text-[#818cf8]" />
        <span className="leading-none">{isDark ? 'L' : 'D'}</span>
      </button>
    </div>
  )
}
