import MainLayout from 'layout/MainLayout'
import HowItWorks from 'components/HowItWorks'
import FAQ from 'components/FAQ'
import Reviews from 'components/Reviews'

import HeroCarousel from './components/HeroCarousel'
import HeroFunctions from './components/HeroFunctions'
import CertifiedCars from './components/CertifiedCars'

function Homepage() {
  return (
    <>
      <MainLayout>
        <HeroCarousel />
        <HeroFunctions />
        <CertifiedCars />
        <HowItWorks />
        <Reviews />
        <FAQ />
      </MainLayout>
    </>
  )
}

export default Homepage
