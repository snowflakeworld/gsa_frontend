import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

import LoadingScreen from '@/components/LoadingScreen'
import { Footer } from '../Footer'
import { MainHeader } from '../Header'

export const DashboardLayout = () => {
  return (
    <>
      <MainHeader />
      <Suspense fallback={<LoadingScreen />}>
        <Box sx={{ backgroundColor: 'background.profile' }}>
          <Outlet />
        </Box>
      </Suspense>
      <Footer isLandingPage={false} />
    </>
  )
}
