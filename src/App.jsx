import { lazy, Suspense, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Hero from './components/Hero'
import Education from './components/Education'
import Sourcing from './components/Sourcing'
import TelegramSection from './components/TelegramSection'
import Faq from './components/Faq'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import LanguageSwitcher from './components/LanguageSwitcher'
import EntryDetailRoute from './components/library/EntryDetailRoute'
import { useLocationPath } from './router/location'
import { parsePath } from './seo/urls'
import { useDocumentHead } from './seo/useDocumentHead'
import { listLibraries } from './data/libraries'
import { useMediaQuery } from './hooks/useMediaQuery'
import { LanguageProvider, useLang } from './i18n/LanguageContext'
import { LibraryProvider, useLibrary } from './context/LibraryContext'

// LibraryCube + framer-motion are split into a separate chunk via React.lazy
// so the initial bundle doesn't carry ~80 KiB of animation runtime that
// isn't needed until the user scrolls past Hero + Education. Phase 7 perf
// audit (Home mobile Perf 65) tied directly to eager framer-motion load.
const LibraryCube = lazy(() => import('./components/library/cube-nav/LibraryCube'))

// Hidden preview route (#dna-preview) for tuning the 3D DNA background. Lazy.
const DnaPreview = lazy(() => import('./components/DnaPreview'))

// Hidden preview route (#card-preview) for the WIP per-category 3D card visuals.
const CardVizPreview = lazy(() => import('./components/CardVizPreview'))

// Live homepage background (replaces the old 2D MoleculeBackground). Lazy so
// three.js stays OUT of the initial bundle; gated to >=768px so mobile
// Lighthouse is untouched (the CSS .dna-backdrop covers mobile + the load gap).
const DnaBackground = lazy(() => import('./components/DnaBackground'))

// Background: always-on CSS backdrop (dark base + teal/violet glows) + the lazy
// 3D DNA layer on >=768px. Mobile falls back to the CSS backdrop (three.js never
// downloaded there).
function BackgroundLayer() {
  const showDnaBg = useMediaQuery('(min-width: 768px)')
  return (
    <>
      <div aria-hidden="true" className="dna-backdrop" />
      {showDnaBg && (
        <Suspense fallback={null}>
          <DnaBackground />
        </Suspense>
      )}
    </>
  )
}

function libraryNameFor(libId, lang = 'hu') {
  const lib = listLibraries().find((l) => l.id === libId)
  return lib ? (lib.name[lang] || lib.name.hu) : null
}

// On navigation TO a library landing (/peptidek …), make that library active so
// the cube opens on the matching gallery. Cold loads are already covered by
// LibraryContext.readInitialLibraryId; this hardens browser back/forward + in-app
// landing nav. LibraryCube owns the scroll-into-view.
//
// CRITICAL: keyed ONLY on the path (route.kind/route.library), NOT on libraryId.
// The cube switcher changes libraryId WITHOUT changing the URL (state-only by
// design); if libraryId were a dependency, every cube switch on a landing path
// would re-fire this effect and snap the library back to the path's – making it
// impossible to switch away. setLibraryId(same) is a no-op, so re-setting on an
// unchanged path is harmless.
function LibraryLandingSync({ route }) {
  const { setLibraryId } = useLibrary()
  useEffect(() => {
    if (route.kind === 'library') setLibraryId(route.library)
  }, [route.kind, route.library, setLibraryId])
  return null
}

// Keep the active language synced to the URL prefix (the URL is the source of truth,
// like LibraryLandingSync). Keyed ONLY on the path-derived lang: the switcher changes
// language by NAVIGATING to the translated URL, so route.lang is what drives setLang;
// depending on the `lang` state here would fight that. setLang(same) is a no-op.
function LanguageRouteSync({ lang }) {
  const { setLang } = useLang()
  useEffect(() => { setLang(lang) }, [lang, setLang])
  return null
}

export default function App() {
  const path = useLocationPath()
  const route = parsePath(path)
  useDocumentHead(route, route.kind === 'library' ? libraryNameFor(route.library, route.lang) : null, null)

  // Hidden preview routes (#dna-preview / #card-preview), DEV only.
  const rawPath = typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') : ''
  if (import.meta.env.DEV && rawPath === '/dna-preview') {
    return (<Suspense fallback={null}><DnaPreview /></Suspense>)
  }
  if (import.meta.env.DEV && rawPath === '/card-preview') {
    return (<Suspense fallback={null}><CardVizPreview /></Suspense>)
  }

  const isEntryDetail = route.kind === 'entry'
  const hideLanding = isEntryDetail

  return (
    <LanguageProvider>
        <LibraryProvider>
        <div className="relative min-h-screen page-root overflow-x-hidden">
          {/* Cookieless, GDPR-friendly measurement (enable in the Vercel dashboard). */}
          <Analytics />
          <SpeedInsights />
          <BackgroundLayer />
          <LanguageRouteSync lang={route.lang} />
          <LibraryLandingSync route={route} />
          <LanguageSwitcher />
          <div className="relative z-10">
            {!hideLanding && (
              <>
                <Hero />
                <Education />
                <Sourcing />
                <Suspense fallback={<div style={{ minHeight: 600 }} />}>
                  <LibraryCube />
                </Suspense>
                <TelegramSection />
                <Faq />
                <Disclaimer />
                <Footer />
              </>
            )}
            {isEntryDetail && <EntryDetailRoute route={route} />}
          </div>
        </div>
        </LibraryProvider>
    </LanguageProvider>
  )
}
