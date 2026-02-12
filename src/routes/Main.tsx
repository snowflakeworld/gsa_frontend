import { lazy } from 'react'

import { ROUTERS } from '@/configs'
import LandingPage from '@/pages/Landing'

// const LandingPage = import('@/pages/Landing')
const ErrorPage = lazy(() => import('@/pages/Error'))
const MembershipPage = lazy(() => import('@/pages/Membership'))
const SearchPage = lazy(() => import('@/pages/Search'))
const ServicePage = lazy(() => import('@/pages/Service'))
const ShopPage = lazy(() => import('@/pages/Shop'))

const SignPage = lazy(() => import('@/pages/Auth'))

export const LandingRoutes = [
  {
    path: '/',
    element: <LandingPage />
  },
  { path: ROUTERS.SignIn, element: <SignPage /> }
]

export const MainRoutes = [
  { path: '*', element: <ErrorPage /> },
  {
    path: '/service',
    element: <ServicePage />
  },
  {
    path: '/shop',
    element: <ShopPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  }
]

export const MyRoutes = [
  {
    path: '/membership',
    element: <MembershipPage />
  }
]
