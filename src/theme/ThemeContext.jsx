import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
})

const SUPPORTED = ['dark', 'light']

function detectInitial() {
  // Dark is the design default. Honour an explicit prior choice from
  // localStorage, but never auto-pick light from the OS — the brand
  // identity is dark.
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = localStorage.getItem('molekulax-theme')
    if (stored && SUPPORTED.includes(stored)) return stored
  } catch {}
  return 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(detectInitial)

  useEffect(() => {
    try { localStorage.setItem('molekulax-theme', theme) } catch {}
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    // also expose a meta colour so mobile browser chrome matches
    let meta = document.querySelector('meta[name="theme-color"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'theme-color')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', theme === 'light' ? '#f4f6fb' : '#07071e')
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
