import { Box, Container, Stack, useColorScheme } from '@mui/material'

import { useDeviceType } from '@/hooks/useDeviceType'

import { HeroInfo, HeroPhoto } from './hero'
import { AppIcon } from '@/components/common'

const HeroSection = () => {
  const { mode, systemMode, setMode } = useColorScheme()
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Box position='relative' sx={{ width: '100%', minHeight: '100vh', paddingTop: '80px' }}>
      <Box
        component='img'
        src='/assets/images/decorator.svg'
        sx={{
          position: 'absolute',
          width: { xs: 350, md: 550 }
        }}
      />
      <Container
        sx={{ width: '100%', minHeight: '100vh', px: { xs: '20px', md: '150px' }, py: { xs: '24px', md: '100px' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} width='100%'>
          <Box>
            <AppIcon name='starBig' color={mode === 'dark' ? 'starModeDark' : 'starModeLight'} width={90} height={90} viewBoxWidth={67} viewBoxHeight={67} position='absolute' rotate='40deg' top={'calc(60%)'} left={'calc(50%)'}/>
            <AppIcon name='starSmall' color={mode === 'dark' ? 'starModeDark' : 'starModeLight'} width={24} height={24} viewBoxWidth={18} viewBoxHeight={18} position='absolute' rotate='40deg' top={'calc(60% + 80px)'} left={'calc(50%)'} />
          </Box>
          <Stack
            width='100%'
            direction={!isScreenSmall ? 'row' : 'column-reverse'}
            alignItems='center'
            gap={!isScreenSmall ? 12.5 : 3}
            position='relative'
          >
            <HeroInfo />
            <HeroPhoto />
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
