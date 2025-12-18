import { Box } from '@mui/material'

import AdditionalFeatureSection from './landing/AdditionalFeatureSection'
import AuthServiceSection from './landing/AuthServiceSection'
import FeatureSection from './landing/FeatureSection'
import HeroSection from './landing/HeroSection'
import NewsSection from './landing/NewsSection'
import SpecServiceSection from './landing/SpecServiceSection'

import TrackingSection from './landing/TrackingSection'

export const LandingPage = () => {
  return (
    <Box>
      <HeroSection />
      <FeatureSection />
      <AuthServiceSection />
      <SpecServiceSection />
      <TrackingSection />
      <AdditionalFeatureSection />
      <NewsSection />
    </Box>
  )
}
