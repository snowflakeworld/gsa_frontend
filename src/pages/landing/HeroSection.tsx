import { Box, Container, Stack, useColorScheme } from '@mui/material'

import { HeroInfo, HeroPhoto } from './hero'
import { AppIcon } from '@/components/common'
import { useDeviceType } from '@/hooks/useDeviceType'

const HeroSection = () => {
  const { mode } = useColorScheme()

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
        sx={{ width: '100%', px: { md: '20px', lg: '150px' }, py: { md: '24px', lg: '100px' } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} width='100%'>
          {
            !isScreenSmall && (
              <Box>
                <AppIcon name='starBig' color={mode === 'dark' ? 'starModeDark' : 'starModeLight'} width={90} height={90} viewBoxWidth={67} viewBoxHeight={67} position='absolute' rotate='40deg' top={'70%'} left={'46%'} />
                <AppIcon name='starSmall' color={mode === 'dark' ? 'starModeDark' : 'starModeLight'} width={24} height={24} viewBoxWidth={18} viewBoxHeight={18} position='absolute' rotate='40deg' top={'82%'} left={'46%'} />
              </Box>
            )
          }
          <Stack
            width='100%'
            direction={{ xs: 'column-reverse', md: 'row' }}
            alignItems='center'
            gap={{ xs: 3, md: 12.5 }}
            position='relative'
            py={{ xs: '24px', lg: '0px' }}
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
