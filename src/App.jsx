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
import PepPediaMockupV2 from './mockup/v2/PepPediaMockupV2'
import EntryDetailRoute, { isEntryDetailHash } from './components/library/EntryDetailRoute'
import { useMediaQuery } from './hooks/useMediaQuery'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'

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
  const isMockupV2 = hash === 'mockup2' || hash.startsWith('mockup2/')
  const isMockup = !isMockupV2 && (hash === 'mockup' || hash.startsWith('mockup/'))
  const isEntryDetail = isEntryDetailHash(hash)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const hideLanding = isEntryDetail && isDesktop

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen page-root overflow-x-hidden">
          <MoleculeBackground />
          <FloatingScientific />
          <ThemeSwitcher />
          <LanguageSwitcher />
          <div className="relative z-10">
            {isMockupV2 ? (
              <PepPediaMockupV2 />
            ) : isMockup ? (
              <PepPediaMockup />
            ) : (
              <>
                {!hideLanding && (
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
                {isEntryDetail && <EntryDetailRoute hash={hash} />}
              </>
            )}
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
