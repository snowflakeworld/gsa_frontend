import { Box, Container, Stack } from '@mui/material'

import { useDeviceType } from '@/hooks/useDeviceType'
import { HeroInfo, HeroPhoto } from './hero'

const HeroSection = () => {
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
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} width='100%'>
          <Stack
            direction={!isScreenSmall ? 'row' : 'column-reverse'}
            gap={!isScreenSmall ? 12.5 : 3}
            alignItems='center'
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
