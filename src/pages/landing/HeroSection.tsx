import { useRef, useState } from 'react'
import { Box, Button, Container, Stack, Typography, useColorScheme } from '@mui/material'
import { Swiper as SwiperType } from 'swiper/types'

import { HeroDetails, HeroSwiper, PaginationBullets, ScrollButton } from './hero'
import { AppIcon } from '@/components/common'
import { useDeviceType } from '@/hooks/useDeviceType'
import { HERO_CARDS } from '@/constants'

const HeroSection = () => {
  const { mode } = useColorScheme()

  const { isMobile, isTablet } = useDeviceType()
  const isScreenSmall = isMobile || isTablet

  const swiperRef = useRef<SwiperType | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSelect = (index: number) => {
    swiperRef.current?.slideTo(index);
    setCurrentIndex(index)
  };

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
                <AppIcon name='starBig' color={mode === 'dark' ? 'starModeDark' : 'starModeLight'} width={90} height={90} viewBoxWidth={67} viewBoxHeight={67} position='absolute' rotate='40deg' top={'70%'} left={'50%'} />
                <AppIcon name='starSmall' color={mode === 'dark' ? 'starModeDark' : 'starModeLight'} width={24} height={24} viewBoxWidth={18} viewBoxHeight={18} position='absolute' rotate='40deg' top={'82%'} left={'50%'} />
              </Box>
            )
          }
          <Stack
            width='100%'
            direction={{ xs: 'column-reverse', md: 'row' }}
            alignItems='center'
            gap={{ xs: 2, md: 12.5 }}
            position='relative'
            py={{ xs: '24px', lg: '0px' }}
          >
            <Stack
              direction={{ xs: 'column-reverse', md: 'column' }}
              gap={{ xs: 3, md: 10 }}
              paddingBottom={{ xs: 0, md: 3.75 }}>
              <HeroDetails currentIndex={currentIndex} />
              <PaginationBullets total={HERO_CARDS.length} currentIndex={currentIndex} onSelect={handleSelect} theme={mode as 'dark' | 'light'} />
            </Stack>
            <HeroSwiper swiperRef={swiperRef} onSlideChange={setCurrentIndex} />
          </Stack>

          {
            !isScreenSmall && <ScrollButton />
          }
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
