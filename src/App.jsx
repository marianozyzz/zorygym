import HeroSection from './sections/HeroSection'
import ProblemSection from './sections/ProblemSection'
import ContentSection from './sections/ContentSection'
import OfferSection from './sections/OfferSection'
import Footer from './sections/Footer'

export default function App() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <ContentSection />
      <OfferSection />
      <Footer />
    </main>
  )
}
