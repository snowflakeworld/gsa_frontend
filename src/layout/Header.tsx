import { CloseRounded, MenuRounded } from '@mui/icons-material'
import { AppBar, Box, Container, Stack, Toolbar, useColorScheme } from '@mui/material'
import Button from '@mui/material/Button'
import { memo, useState } from 'react'

import { CustomIcon } from '@/components'
import { useDeviceType } from '@/hooks/useDeviceType'
import { Logo } from '@/layout/Logo'
import { ColorModeButton } from './header/ColorModeButton'
import { MobileNav } from './header/MobileNav'
import { NavList } from './header/NavList'

const HeaderComponent = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)
  const { mode, systemMode } = useColorScheme()
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet
  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  return (
    <>
      <AppBar elevation={0} sx={{ backgroundColor: 'background.header' }}>
        <Container className='py-none' sx={{ px: { xs: 2.5, lg: 18.75 } }}>
          <Toolbar
            sx={{ py: 2, gap: 6.25, justifyContent: !isScreenSmall ? 'flex-start' : 'space-between' }}
            disableGutters
          >
            <Logo place='header' />

            {!isScreenSmall && (
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
                    sx={{ gap: 1, px: isScreenSmall ? 1.25 : 2 }}
                  >
                    {!isScreenSmall && <span>Submit</span>}
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
                  />
                </>
              )}

              {isScreenSmall && (
                <Button variant='contained' onClick={() => setMenuOpened(st => !st)} >
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
