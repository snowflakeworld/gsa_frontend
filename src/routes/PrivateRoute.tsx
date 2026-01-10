import { routers } from '@/configs'
import { useIsLoggedIn } from '@/hooks'
import { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: ReactNode
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useIsLoggedIn()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(routers.SignIn)
    }
  }, [isLoggedIn, navigate])

  return children
}

export default PrivateRoute
