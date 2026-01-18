import { Box, Container, Stack, useColorScheme } from '@mui/material'
import { useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper/types'

import { HERO_CARDS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { HeroDetails, HeroSwiper, PaginationBullets, ScrollButton } from './Hero'

const HeroSection = () => {
  const { mode } = useColorScheme()

  const { isLargeScreen } = useDeviceType()

  const swiperRef = useRef<SwiperType | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSelect = (index: number) => {
    swiperRef.current?.slideTo(index)
    setCurrentIndex(index)
  }

  return (
    <Box position='relative' sx={{ width: '100%', minHeight: '100vh', paddingTop: 10 }}>
      <Box
        component='img'
        src='/assets/images/decorator.svg'
        sx={{
          position: 'absolute',
          width: 'clamp(21.875rem, 15.2729rem + 28.169vw, 40.625rem)'
        }}
      />
      <Container>
        <Stack>
          <Stack
            width='100%'
            direction={{ xs: 'column-reverse', md: 'row' }}
            alignItems='center'
            justifyContent='center'
            gap={{ xs: 2, md: 12.5 }}
            py={{ xs: 3, lg: 0 }}
          >
            <Stack
              maxWidth={550}
              direction={{ xs: 'column-reverse', md: 'column' }}
              gap={{ xs: 3, md: 10 }}
              position='relative'
              paddingBottom={{ xs: 0, md: 13.75 }}
            >
              <HeroDetails currentIndex={currentIndex} />
              <PaginationBullets
                total={HERO_CARDS.length}
                currentIndex={currentIndex}
                onSelect={handleSelect}
                theme={mode as 'dark' | 'light'}
              />

              {isLargeScreen && <ScrollButton />}
            </Stack>
            <HeroSwiper swiperRef={swiperRef} onSlideChange={setCurrentIndex} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default HeroSection
