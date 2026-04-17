import Hero from './components/Hero'
import Education from './components/Education'
import Calculator from './components/Calculator'
import PeptideGallery from './components/PeptideGallery'
import Tanulmanyok from './components/Tanulmanyok'
import WadaBox from './components/WadaBox'
import TelegramSection from './components/TelegramSection'
import Faq from './components/Faq'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import MoleculeBackground from './components/MoleculeBackground'
import FloatingScientific from './components/FloatingScientific'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07071e] overflow-x-hidden">
      <MoleculeBackground />
      <FloatingScientific />
      <div className="relative z-10">
        <Hero />
        <Education />
        <PeptideGallery />
        <Calculator />
        <Tanulmanyok />
        <WadaBox />
        <TelegramSection />
        <Faq />
        <Disclaimer />
        <Footer />
      </div>
    </div>
  )
}
