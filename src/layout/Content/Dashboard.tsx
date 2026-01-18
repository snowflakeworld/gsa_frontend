import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Box, CircularProgress } from '@mui/material'

import { Footer } from '../Footer'
import { MainHeader } from '../Header'

export const DashboardLayout = () => {
  return (
    <>
      <MainHeader />
      <Suspense fallback={<CircularProgress />}>
        <Box sx={{ backgroundColor: 'background.profile' }}>
          <Outlet />
        </Box>
      </Suspense>
      <Footer isLandingPage={false} />
    </>
  )
}
