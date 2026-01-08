import { routers } from '@/configs'
import { LandingPage } from '@/pages'
import { Sign } from '@/pages/auth'

export const MainRoutes = [
  {
    path: '/',
    element: <LandingPage />
  },
  { path: routers.SignIn, element: <Sign /> }
]
