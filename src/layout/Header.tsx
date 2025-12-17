import { AccountCircleOutlined, BackupOutlined, CloseRounded, MenuRounded } from '@mui/icons-material'
import { AppBar, Box, Stack, Toolbar } from '@mui/material'
import Button from '@mui/material/Button'
import { useState } from 'react'

import Logo from '@/components/logo'
import { useDeviceType } from '@/hooks/useDeviceType'
import ColorModeButton from './header/ColorModeButton'
import { MobileNav } from './header/MobileNav'
import { NavList } from './header/NavList'

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <>
      <AppBar color='secondary' elevation={0}>
        <Toolbar sx={{ py: 2, px: { lg: 18.75, md: 2.5 }, gap: 2, justifyContent: 'space-between' }}>
          <Logo place='header' />

          {!isScreenSmall && <NavList />}

          <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
            <ColorModeButton />
            {!menuOpened && (
              <>
                <Button variant='contained' sx={{ gap: 1, px: isScreenSmall ? 1.25 : 2, py: 1.25 }}>
                  <BackupOutlined fontSize='small' />
                  {!isScreenSmall && <span>Submit</span>}
                </Button>
                <Button variant='contained' sx={{ gap: 0, px: 1.25, py: 1.25 }}>
                  <AccountCircleOutlined fontSize='small' />
                </Button>
              </>
            )}

            {isScreenSmall && (
              <Button variant='contained' sx={{ gap: 0, px: 1.25, py: 1.25 }} onClick={() => setMenuOpened(st => !st)}>
                {!menuOpened ? <MenuRounded fontSize='small' /> : <CloseRounded fontSize='small' />}
              </Button>
            )}
          </Box>
        </Toolbar>
        {isScreenSmall && menuOpened && (
          <Box>
            <MobileNav />
          </Box>
        )}
      </AppBar>
      {isScreenSmall && menuOpened && (
        <Stack
          width={'100vw'}
          height={'100vh'}
          sx={{ backgroundColor: 'backdrop', position: 'fixed', backdropFilter: 'blur(2px)' }}
        />
      )}
    </>
  )
}
