import { lazy } from 'react'

import { ROUTERS } from '@/configs'

// const LandingPage = import('@/pages/Landing')
import LandingPage from '@/pages/Landing'

const Sign = lazy(() => import('@/pages/Auth'))

export const MainRoutes = [
  {
    path: '/',
    element: <LandingPage />
  },
  { path: ROUTERS.SignIn, element: <Sign /> }
]
