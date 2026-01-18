import { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTERS } from '@/configs'
import { useIsLoggedIn } from '@/hooks'

interface PrivateRouteProps {
  children: ReactNode
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useIsLoggedIn()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTERS.SignIn)
    }
  }, [isLoggedIn, navigate])

  return children
}

export default PrivateRoute
