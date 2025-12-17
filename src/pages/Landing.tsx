import { Box } from '@mui/material'

import AdditionalFeatureSection from './landing/AdditionalFeatureSection'
import FeatureSection from './landing/FeatureSection'
import HeroSection from './landing/HeroSection'
import NewsSection from './landing/NewsSection'
import ServiceSection from './landing/ServiceSection'
import TrackingSection from './landing/TrackingSection'

export const LandingPage = () => {
  return (
    <Box>
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <TrackingSection />
      <AdditionalFeatureSection />
      <NewsSection />
    </Box>
  )
}
