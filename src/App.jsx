import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Education from './components/Education'
import PeptideEffects from './components/PeptideEffects'
import Calculator from './components/Calculator'
import PeptideGallery from './components/PeptideGallery'
import TelegramSection from './components/TelegramSection'
import Faq from './components/Faq'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import MoleculeBackground from './components/MoleculeBackground'
import FloatingScientific from './components/FloatingScientific'
import LanguageSwitcher from './components/LanguageSwitcher'
import ThemeSwitcher from './components/ThemeSwitcher'
import PepPediaMockup from './mockup/PepPediaMockup'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'

// Hash-based router for the design-preview mockup. Active when the URL
// hash starts with `#mockup` (visit https://…/#mockup to view). Keeps
// the production site untouched and zero-cost when not used.
function useHashRoute() {
  const read = () => (typeof window === 'undefined' ? '' : window.location.hash.replace(/^#/, ''))
  const [hash, setHash] = useState(read)
  useEffect(() => {
    const onChange = () => setHash(read())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  const isMockup = hash === 'mockup' || hash.startsWith('mockup/')

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen page-root overflow-x-hidden">
          <MoleculeBackground />
          <FloatingScientific />
          <ThemeSwitcher />
          <LanguageSwitcher />
          <div className="relative z-10">
            {isMockup ? (
              <PepPediaMockup />
            ) : (
              <>
                <Hero />
                <Education />
                <PeptideEffects />
                <PeptideGallery />
                <Calculator />
                <TelegramSection />
                <Faq />
                <Disclaimer />
                <Footer />
              </>
            )}
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
