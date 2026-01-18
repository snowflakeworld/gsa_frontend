import { ROUTERS } from '@/configs'
import { LandingPage } from '@/pages'
import { Sign } from '@/pages/Auth'

export const MainRoutes = [
  {
    path: '/',
    element: <LandingPage />
  },
  { path: ROUTERS.SignIn, element: <Sign /> }
]
