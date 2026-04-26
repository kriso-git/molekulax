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
import { LanguageProvider } from './i18n/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#07071e] overflow-x-hidden">
        <MoleculeBackground />
        <FloatingScientific />
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
  )
}
