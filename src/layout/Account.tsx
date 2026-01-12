import { ACCOUNT_CONTENT_MAX_WIDTH } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Box, CircularProgress } from '@mui/material'
import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AccountHeader } from './AccountHeader'
import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

const DRAWER_WIDTH = 320

export const AccountLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  const toggleDrawer = () => setDrawerOpen(state => !state)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <Box sx={{ maxHeight: '100vh', backgroundColor: 'background.profile' }}>
      <AccountHeader onMobileMenuClick={toggleDrawer} />
      <Suspense fallback={<CircularProgress />}>
        <Box
          sx={{
            height: !isScreenSmall ? 'calc(100vh - 126px)' : 'calc(100vh - 72px)',
            mt: '72px',
            ml: !isScreenSmall ? '320px' : 0
          }}
          onClick={closeDrawer}
        >
          <Box maxWidth={ACCOUNT_CONTENT_MAX_WIDTH} px={!isScreenSmall ? 4 : 2.5} py={!isScreenSmall ? 6.25 : 2.5}>
            <Outlet />
          </Box>
        </Box>
      </Suspense>
      {!isScreenSmall ? <Footer isLandingPage={false} /> : <></>}
      {!isScreenSmall ? (
        <Box
          component='nav'
          sx={{
            width: DRAWER_WIDTH,
            height: 'calc(100vh - 126px)',
            position: 'fixed',
            top: '72px',
            left: 0,
            backgroundColor: 'background.header',
            borderRight: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Sidebar width={DRAWER_WIDTH} />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  )
}
