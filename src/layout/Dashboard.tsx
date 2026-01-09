import { Box, CircularProgress } from '@mui/material'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Box bgcolor='background.profile'>
          <Outlet />
        </Box>
      </Suspense>
      <Footer isLandingPage={false} />
    </>
  )
}
