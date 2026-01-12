import { CircularProgress } from '@mui/material'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './DefaultHeader'
import { Footer } from './Footer'

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}
