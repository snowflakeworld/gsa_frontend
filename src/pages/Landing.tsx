import AdditionalFeatureSection from './landing/AdditionalFeatureSection'
import AuthServiceSection from './landing/AuthServiceSection'
import CertSection from './landing/CertSection'
import FeatureSection from './landing/FeatureSection'
import HeroSection from './landing/HeroSection'
import NewsSection from './landing/NewsSection'
import SpecServiceSection from './landing/SpecServiceSection'

import TrackingSection from './landing/TrackingSection'

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
