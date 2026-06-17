import { lazy, Suspense, useEffect, useState } from 'react'
import Hero from './components/Hero'
import Education from './components/Education'
import TelegramSection from './components/TelegramSection'
import Faq from './components/Faq'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import MoleculeBackground from './components/MoleculeBackground'
import FloatingScientific from './components/FloatingScientific'
import LanguageSwitcher from './components/LanguageSwitcher'
import ThemeSwitcher from './components/ThemeSwitcher'
import SideLibrarySwitcher from './components/SideLibrarySwitcher'
import AffiliateButton from './components/AffiliateButton'
import EntryDetailRoute from './components/library/EntryDetailRoute'
import { isEntryDetailHash } from './components/library/entryHash'
import { useMediaQuery } from './hooks/useMediaQuery'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'
import { LibraryProvider } from './context/LibraryContext'

// LibraryCube + framer-motion are split into a separate chunk via React.lazy
// so the initial bundle doesn't carry ~80 KiB of animation runtime that
// isn't needed until the user scrolls past Hero + Education. Phase 7 perf
// audit (Home mobile Perf 65) tied directly to eager framer-motion load.
const LibraryCube = lazy(() => import('./components/library/cube-nav/LibraryCube'))

// Hidden preview route (#dna-preview) for the WIP 3D DNA background. Lazy so
// three.js only loads on this route, never in the main bundle. Not linked.
const DnaPreview = lazy(() => import('./components/DnaPreview'))

function readHash() {
  return typeof window === 'undefined' ? '' : window.location.hash.replace(/^#/, '')
}

function useHashRoute() {
  const [hash, setHash] = useState(readHash)
  useEffect(() => {
    const onChange = () => setHash(readHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()

  // Hidden preview route — works as a clean path (/dna-preview) OR hash
  // (#dna-preview). Fully isolated, no providers/landing mounted.
  const path = typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') : ''
  if (hash === 'dna-preview' || path === '/dna-preview') {
    return (
      <Suspense fallback={null}>
        <DnaPreview />
      </Suspense>
    )
  }

  const isEntryDetail = isEntryDetailHash(hash)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  // Phase 9 LCP fix: hide landing on ALL devices (not just desktop) when
  // entry-detail is active. The mobile modal is position:fixed and covers
  // the viewport, so the user never sees the landing — but Lighthouse was
  // mounting + parsing Hero/Education/LibraryCube/FAQ/Footer behind it,
  // tanking mobile Perf scores. Hash-change re-mounts landing on close.
  const hideLanding = isEntryDetail

  return (
    <ThemeProvider>
      <LanguageProvider>
        <LibraryProvider>
        <div className="relative min-h-screen page-root overflow-x-hidden">
          <MoleculeBackground />
          <FloatingScientific />
          <ThemeSwitcher />
          <LanguageSwitcher />
          <AffiliateButton />
          <div className="relative z-10">
            {!hideLanding && (
              <>
                <Hero />
                <Education />
                <Suspense fallback={<div style={{ minHeight: 600 }} />}>
                  <LibraryCube />
                </Suspense>
                <TelegramSection />
                <Faq />
                <Disclaimer />
                <Footer />
                <SideLibrarySwitcher />
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
