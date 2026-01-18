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
  const { isLargeScreen } = useDeviceType()

  const toggleDrawer = () => setDrawerOpen(state => !state)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <Box sx={{ maxHeight: '100vh', backgroundColor: 'background.profile' }}>
      <AccountHeader onMobileMenuClick={toggleDrawer} />
      <Suspense fallback={<CircularProgress />}>
        <Box
          sx={{
            height: isLargeScreen ? 'calc(100vh - 126px)' : 'calc(100vh - 72px)',
            mt: '72px',
            ml: isLargeScreen ? '320px' : 0
          }}
          onClick={closeDrawer}
        >
          <Box maxWidth={ACCOUNT_CONTENT_MAX_WIDTH} px={isLargeScreen ? 4 : 2.5} py={isLargeScreen ? 6.25 : 2.5}>
            <Outlet />
          </Box>
        </Box>
      </Suspense>
      {isLargeScreen && <Footer isLandingPage={false} />}
      {isLargeScreen ? (
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
        drawerOpen && (
          <>
            <Box
              sx={{
                width: '100vw',
                height: '100vh',
                top: 0,
                left: 0,
                backgroundColor: 'backdrop',
                position: 'fixed',
                backdropFilter: 'blur(2px)',
                zIndex: 1199
              }}
              onClick={() => closeDrawer()}
            />
            <Box
              component='nav'
              sx={{
                width: DRAWER_WIDTH,
                height: '100%',
                position: 'fixed',
                top: '0px',
                left: 'calc(100vw - 320px)',
                backgroundColor: 'background.header',
                borderLeft: '1px solid',
                borderColor: 'divider',
                zIndex: 1200
              }}
            >
              <Sidebar width={DRAWER_WIDTH} closeDrawer={closeDrawer} />
            </Box>
          </>
        )
      )}
    </Box>
  )
}
