import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { CircularProgress } from '@mui/material'

import { Footer } from '../Footer'
import { MainHeader } from '../Header'

export const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}
