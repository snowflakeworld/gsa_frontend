import { Box, Container, Stack, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ServiceCard } from '@/components'
import { RedChip } from '@/components/common/RedChip'
import { LANDING_FEATURE_GRID_MAX_WIDTH, SERVICE_CONTENTS } from '@/constants'
import { useDeviceType } from '@/hooks/useDeviceType'

const SpecServiceSection = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Container>
      <Stack gap={!isScreenSmall ? 12.5 : 6.25} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto'>
        <Stack gap={1.5}>
          <RedChip>New Feature</RedChip>
          <Typography variant='h2' textAlign='left'>
            Specialized Grading Services
          </Typography>
          <Typography
            width={!isScreenSmall ? '60%' : '100%'}
            variant='subtitle2'
            textAlign='left'
          >
            Hobby love is won with each closing auction and final offer. Enlist free real-time pricing data to time the market and curate in-the-moment.
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
                <Box sx={{ width: !isScreenSmall ? 320 : 260 }}>
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

export default SpecServiceSection
