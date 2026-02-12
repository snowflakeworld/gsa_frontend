import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import LoadingScreen from '@/components/LoadingScreen'
import { Footer } from '../Footer'
import { MainHeader } from '../Header'

export const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}
