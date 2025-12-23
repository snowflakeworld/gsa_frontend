import { Box, Container, Stack, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ServiceCard } from '@/components'
import { LANDING_FEATURE_GRID_MAX_WIDTH, SERVICE_CONTENTS } from '@/constants'
import { useDeviceType } from '@/hooks/useDeviceType'

const AuthServiceSection = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Container>
      <Stack gap={!isScreenSmall ? 12.5 : 6.25} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto'>
        <Stack gap={1.5}>
          <Typography variant='h2' textAlign='center'>
            Authentication & Grading Services
          </Typography>
          <Typography
            width={!isScreenSmall ? '75%' : '100%'}
            variant='subtitle2'
            textAlign='center'
            alignSelf={'center'}
          >
            GSA is the industry standard for authentication and grading. Find us wherever collectibles are admired and
            acquired, and submit yours today.
          </Typography>
        </Stack>

        <Box maxWidth={'100%'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Swiper
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={'auto'}
            spaceBetween={!isScreenSmall ? 32 : 16}
          >
            {SERVICE_CONTENTS.map((val, idx: number) => (
              <SwiperSlide key={idx}>
                <Box sx={{ width: !isScreenSmall ? 320 : 280 }}>
                  <ServiceCard {...val} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>
    </Container>
  )
}

export default AuthServiceSection
