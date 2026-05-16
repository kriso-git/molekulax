import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Education from './components/Education'
import EffectsSection from './components/library/EffectsSection'
import Calculator from './components/Calculator'
import LibraryGallery from './components/LibraryGallery'
import TelegramSection from './components/TelegramSection'
import Faq from './components/Faq'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import MoleculeBackground from './components/MoleculeBackground'
import FloatingScientific from './components/FloatingScientific'
import LanguageSwitcher from './components/LanguageSwitcher'
import ThemeSwitcher from './components/ThemeSwitcher'
import EntryDetailRoute, { isEntryDetailHash } from './components/library/EntryDetailRoute'
import { useMediaQuery } from './hooks/useMediaQuery'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'
import { LibraryProvider, useLibrary } from './context/LibraryContext'

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

function CalculatorGate() {
  const { library } = useLibrary()
  if (library?.id !== 'peptides') return null
  return <Calculator />
}

export default function App() {
  const hash = useHashRoute()
  const isEntryDetail = isEntryDetailHash(hash)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const hideLanding = isEntryDetail && isDesktop

  return (
    <ThemeProvider>
      <LanguageProvider>
        <LibraryProvider>
        <div className="relative min-h-screen page-root overflow-x-hidden">
          <MoleculeBackground />
          <FloatingScientific />
          <ThemeSwitcher />
          <LanguageSwitcher />
          <div className="relative z-10">
            {!hideLanding && (
              <>
                <Hero />
                <Education />
                <LibraryGallery />
                <EffectsSection />
                <CalculatorGate />
                <TelegramSection />
                <Faq />
                <Disclaimer />
                <Footer />
              </>
            )}
            {isEntryDetail && <EntryDetailRoute hash={hash} />}
          </div>
        </div>
        </LibraryProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
