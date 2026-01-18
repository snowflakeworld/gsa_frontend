import { MenuRounded } from '@mui/icons-material'
import { AppBar, Box, Container, Toolbar, useColorScheme } from '@mui/material'
import Button from '@mui/material/Button'
import { FC, memo } from 'react'

import { CustomIcon } from '@/components'
import { routers } from '@/configs'
import { useDeviceType, useIsLoggedIn } from '@/hooks'
import { Logo } from '@/layout/Logo'
import { useNavigate } from 'react-router-dom'
import { ColorModeButton, NavList } from './header'

interface AccountHeaderProps {
  onMobileMenuClick: () => void
}

const HeaderComponent: FC<AccountHeaderProps> = ({ onMobileMenuClick }) => {
  const { mode, systemMode } = useColorScheme()
  const { isLargeScreen, isSmallScreen } = useDeviceType()
  const navigate = useNavigate()
  const isLoggedIn = useIsLoggedIn()

  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  const handleLogin = () => {
    if (!isLoggedIn) {
      navigate(routers.SignIn)
    } else {
      navigate(routers.Account.Home)
    }
  }

  const handleSubmit = () => {
    navigate(routers.Submission)
  }

  return (
    <>
      <AppBar elevation={0} sx={{ backgroundColor: 'background.header', zIndex: 2 }}>
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
                sx={{ gap: 1, px: isLargeScreen ? 2 : 1.25 }}
                className='button--small'
                onClick={() => handleSubmit()}
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

              {isSmallScreen && (
                <Button variant='contained' onClick={onMobileMenuClick} className='button--small'>
                  <MenuRounded fontSize='small' />
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export const AccountHeader = memo(HeaderComponent)
