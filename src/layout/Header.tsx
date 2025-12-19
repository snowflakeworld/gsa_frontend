import { AccountCircleOutlined, BackupOutlined, CloseRounded, MenuRounded } from '@mui/icons-material'
import { AppBar, Box, Container, Stack, Toolbar } from '@mui/material'
import Button from '@mui/material/Button'
import { memo, useState } from 'react'

import { useDeviceType } from '@/hooks/useDeviceType'
import { Logo } from '@/layout/Logo'
import ColorModeButton from './header/ColorModeButton'
import { MobileNav } from './header/MobileNav'
import { NavList } from './header/NavList'

const HeaderComponent = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <>
      <AppBar elevation={0} sx={{ backgroundColor: 'background.header' }}>
        <Container className='py-none' disableGutters>
          <Toolbar sx={{ px: { xs: 2.5, lg: 18.75 }, py: 2, gap: 2, justifyContent: 'space-between' }} disableGutters>
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
                <Button variant='contained' sx={{ gap: 0, p: 1.25 }} onClick={() => setMenuOpened(st => !st)}>
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
        </Container>
      </AppBar>
      {isScreenSmall && menuOpened && (
        <Stack
          width={'100vw'}
          height={'100vh'}
          zIndex={2}
          sx={{ backgroundColor: 'backdrop', position: 'fixed', backdropFilter: 'blur(2px)' }}
        />
      )}
    </>
  )
}

export const Header = memo(HeaderComponent)
