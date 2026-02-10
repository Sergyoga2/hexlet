import { HeaderSection } from './components/HeaderSection'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { StatsSection } from './components/StatsSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { PricingSection } from './components/PricingSection'
import { FaqSection } from './components/FaqSection'
import { CtaSection } from './components/CtaSection'
import { FooterSection } from './components/FooterSection'

/*
 * Лендинг собирается из блоков ниже.
 * Чтобы убрать блок — закомментируйте соответствующую строку.
 * Чтобы поменять порядок — переставьте строки местами.
 */
function App() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </>
  )
}

export default App
