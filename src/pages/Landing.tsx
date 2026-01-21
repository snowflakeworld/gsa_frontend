import { lazy } from 'react'

import HeroSection from '../views/Landing/HeroSection'

const AuthServiceSection = lazy(() => import('@/views/Landing/AuthServiceSection'))
const AdditionalFeatureSection = lazy(() => import('@/views/Landing/AdditionalFeatureSection'))
const CertSection = lazy(() => import('@/views/Landing/CertSection'))
const FeatureSection = lazy(() => import('@/views/Landing/FeatureSection'))
const NewsSection = lazy(() => import('@/views/Landing/NewsSection'))
const SpecServiceSection = lazy(() => import('@/views/Landing/SpecServiceSection'))
const TrackingSection = lazy(() => import('@/views/Landing/TrackingSection'))

const LandingPage = () => {
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

export default LandingPage
