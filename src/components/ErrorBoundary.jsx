// Root-level error boundary: converts a render-path crash anywhere in the app into an
// on-brand fallback instead of a blank white page. The fallback is SELF-CONTAINED —
// inline styles + literal copy, NO context hooks (useTheme/useLang) — so it renders even
// when a provider is the thing that crashed. The data-error-boundary marker lets the
// render-smoke detect a caught crash as a failure; componentDidCatch logs to console.error
// so the smoke's console check also trips (production React does not auto-log caught errors).
import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info)
  }

  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <div
        data-error-boundary="true"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          background: '#050505',
          color: '#e5e7eb',
          textAlign: 'center',
          padding: '2rem',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <h1 style={{ color: '#00ff99', fontSize: '1.6rem', margin: 0, letterSpacing: '0.04em' }}>
          Hiba történt
        </h1>
        <p style={{ maxWidth: '34rem', lineHeight: 1.6, color: '#9ca3af', margin: 0 }}>
          Váratlan hiba lépett fel az oldal betöltésekor. Töltsd újra az oldalt — ha a hiba
          megmarad, próbáld meg később.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          style={{
            background: 'rgba(0,255,153,0.14)',
            border: '1px solid rgba(0,255,153,0.5)',
            color: '#00ff99',
            borderRadius: '9999px',
            padding: '0.7rem 1.6rem',
            fontSize: '0.95rem',
            cursor: 'pointer',
          }}
        >
          Újratöltés
        </button>
      </div>
    )
  }
}
