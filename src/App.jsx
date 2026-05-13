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
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen page-root overflow-x-hidden">
          <MoleculeBackground />
          <FloatingScientific />
          <ThemeSwitcher />
          <LanguageSwitcher />
          <div className="relative z-10">
            <Hero />
            <Education />
            <PeptideEffects />
            <PeptideGallery />
            <Calculator />
            <TelegramSection />
            <Faq />
            <Disclaimer />
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
