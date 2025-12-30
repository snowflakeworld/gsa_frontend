import { CircularProgress } from '@mui/material'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

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
