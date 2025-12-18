import { Box, Stack } from '@mui/material'
import { FC, useEffect } from 'react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import { AppIcon, StyledImage } from '@/components/common'
import { useDeviceType } from '@/hooks/useDeviceType'

import { HERO_CARDS } from '@/constants'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

interface HeroSwiperProps {
  swiperRef: React.MutableRefObject<SwiperType | null>
  onSlideChange: (index: number) => void
}

export const HeroSwiper: FC<HeroSwiperProps> = ({ swiperRef, onSlideChange }) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType()
  const isScreenSmall = isMobile || isTablet

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', () => {
        onSlideChange(swiperRef.current!.realIndex)
      })
    }
  }, [swiperRef, onSlideChange])

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      maxWidth={isDesktop ? '500px' : '400px'}
      position='relative'
      sx={{ backgroundColor: 'background.paper', borderRadius: '24px', aspectRatio: '5 / 6' }}
    >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={isDesktop ? 60 : 40}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          modifier: 2,
          slideShadows: false
        }}
        onSwiper={swiper => (swiperRef.current = swiper)}
        modules={[EffectCoverflow, Autoplay]}
        autoplay={{ delay: 2500, waitForTransition: true }}
      >
        {HERO_CARDS.map((src, idx) => (
          <SwiperSlide key={idx}>
            <StyledImage
              src={`/assets/images/cards/${src}`}
              width={isDesktop ? '320px' : '230px'}
              height={isDesktop ? '450px' : '315px'}
              alt='Hero Card Image'
              loading='lazy'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box>
        <AppIcon
          name='starBig'
          color='customRed'
          width={!isScreenSmall ? 60 : 40}
          height={!isScreenSmall ? 60 : 40}
          viewBoxWidth={67}
          viewBoxHeight={67}
          position='absolute'
          top={!isScreenSmall ? -30 : -20}
          left={25}
        />
        <AppIcon
          name='starSmall'
          color='customRed'
          width={!isScreenSmall ? 20 : 15}
          height={!isScreenSmall ? 20 : 15}
          viewBoxWidth={18}
          viewBoxHeight={18}
          position='absolute'
          top={!isScreenSmall ? 16 : 12}
          left={!isScreenSmall ? 64 : 52}
        />
      </Box>
    </Stack>
  )
}
