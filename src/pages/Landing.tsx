import AdditionalFeatureSection from '../views/Landing/AdditionalFeatureSection'
import AuthServiceSection from '../views/Landing/AuthServiceSection'
import CertSection from '../views/Landing/CertSection'
import FeatureSection from '../views/Landing/FeatureSection'
import HeroSection from '../views/Landing/HeroSection'
import NewsSection from '../views/Landing/NewsSection'
import SpecServiceSection from '../views/Landing/SpecServiceSection'

import TrackingSection from '../views/Landing/TrackingSection'

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AuthServiceSection />
      <SpecServiceSection />
      <CertSection />
      <TrackingSection />
      <AdditionalFeatureSection />
      <NewsSection />
    </>
  )
}
