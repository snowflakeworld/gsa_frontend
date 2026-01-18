import { CloseRounded, MenuRounded } from '@mui/icons-material'
import { AppBar, Box, Container, Stack, Toolbar, useColorScheme } from '@mui/material'
import Button from '@mui/material/Button'
import { memo, useState } from 'react'

import { CustomIcon } from '@/components'
import { ROUTERS } from '@/configs'
import { useDeviceType, useIsLoggedIn } from '@/hooks'
import { Logo } from '@/layout/Logo'
import { useNavigate } from 'react-router-dom'
import { ColorModeButton } from './header/ColorModeButton'
import { MobileNav } from './header/MobileNav'
import { NavList } from './header/NavList'

const HeaderComponent = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)
  const { mode, systemMode } = useColorScheme()
  const { isLargeScreen, isSmallScreen } = useDeviceType()
  const navigate = useNavigate()
  const isLoggedIn = useIsLoggedIn()

  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  const handleLogin = () => {
    if (!isLoggedIn) {
      navigate(ROUTERS.SignIn)
    } else {
      navigate(ROUTERS.Account.Home)
    }
  }

  const handleSubmit = () => {
    navigate(ROUTERS.Submission)
  }

  return (
    <>
      <AppBar elevation={0} sx={{ backgroundColor: 'background.header' }}>
        <Container className='py-none' sx={{ px: { xs: 2.5, lg: 18.75 } }}>
          <Toolbar
            sx={{ py: 2, gap: 6.25, justifyContent: isLargeScreen ? 'flex-start' : 'space-between' }}
            disableGutters
          >
            <Logo place='header' />

            {isLargeScreen && (
              <Box flexGrow={1}>
                <NavList />
              </Box>
            )}

            <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
              <ColorModeButton />
              {!menuOpened && (
                <>
                  <Button
                    variant='contained'
                    startIcon={
                      <CustomIcon
                        name='submit'
                        color={resolvedMode === 'dark' ? 'secondary' : 'prime'}
                        viewBoxWidth={14}
                        viewBoxHeight={14}
                      />
                    }
                    sx={{ gap: 1, px: isSmallScreen ? 1.25 : 2 }}
                    className='button--small'
                    onClick={handleSubmit}
                  >
                    {isLargeScreen && <span>Submit</span>}
                  </Button>
                  <Button
                    variant='contained'
                    startIcon={
                      <CustomIcon
                        name='personCircle'
                        color={resolvedMode === 'dark' ? 'secondary' : 'prime'}
                        viewBoxWidth={16.5}
                        viewBoxHeight={16.5}
                      />
                    }
                    className='button--small'
                    onClick={() => handleLogin()}
                  />
                </>
              )}

              {isSmallScreen && (
                <Button variant='contained' onClick={() => setMenuOpened(st => !st)} className='button--small'>
                  {!menuOpened ? <MenuRounded fontSize='small' /> : <CloseRounded fontSize='small' />}
                </Button>
              )}
            </Box>
          </Toolbar>
          {isSmallScreen && menuOpened && (
            <Box>
              <MobileNav />
            </Box>
          )}
        </Container>
      </AppBar>
      {isSmallScreen && menuOpened && (
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
