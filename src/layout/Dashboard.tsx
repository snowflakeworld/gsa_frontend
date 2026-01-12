import { Box, CircularProgress } from '@mui/material'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './DefaultHeader'
import { Footer } from './Footer'

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Box sx={{ backgroundColor: 'background.profile' }}>
          <Outlet />
        </Box>
      </Suspense>
      <Footer isLandingPage={false} />
    </>
  )
}
