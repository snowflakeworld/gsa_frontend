import { lazy } from 'react'

import { ROUTERS } from '@/configs'

// const LandingPage = import('@/pages/Landing')
import ErrorPage from '@/pages/Error'
import LandingPage from '@/pages/Landing'
import Membership from '@/pages/Membership'
import Search from '@/pages/Search'
import Service from '@/pages/Service'
import Shop from '@/pages/Shop'

const Sign = lazy(() => import('@/pages/Auth'))

export const LandingRoutes = [
  {
    path: '/',
    element: <LandingPage />
  },
  { path: ROUTERS.SignIn, element: <Sign /> }
]

export const MainRoutes = [
  { path: '*', element: <ErrorPage /> },
  {
    path: '/service',
    element: <Service />
  },
  {
    path: '/membership',
    element: <Membership />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/search',
    element: <Search />
  }
]
