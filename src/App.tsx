import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { BookSection } from './components/BookSection'
import { EducationalProjectSection } from './components/EducationalProjectSection'
import { TargetAudienceSection } from './components/TargetAudienceSection'
import { ObjectivesSection } from './components/ObjectivesSection'
import { MethodologySection } from './components/MethodologySection'
import { DifferentialSection } from './components/DifferentialSection'
import { BnccSection } from './components/BnccSection'
import { ImplementationSection } from './components/ImplementationSection'
import { ResultsSection } from './components/ResultsSection'
import { AuthorSection } from './components/AuthorSection'
import { CtaSection } from './components/CtaSection'
import { ContactSection } from './components/ContactSection'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-alf-black">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <BookSection />
        <EducationalProjectSection />
        <TargetAudienceSection />
        <ObjectivesSection />
        <MethodologySection />
        <DifferentialSection />
        <BnccSection />
        <ImplementationSection />
        <ResultsSection />
        <AuthorSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
