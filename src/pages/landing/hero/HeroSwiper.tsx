import { FC, useEffect } from 'react';
import { Box, Stack } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types'

import { useDeviceType } from '@/hooks/useDeviceType'
import { AppIcon, StyledImage } from '@/components/common';

import { HERO_CARDS } from '@/constants'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface HeroSwiperProps {
  swiperRef: React.MutableRefObject<SwiperType | null>
  onSlideChange: (index: number) => void
}

export const HeroSwiper: FC<HeroSwiperProps> = ({ swiperRef, onSlideChange }) => {
  const { isDesktop } = useDeviceType()

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
        freeMode={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[EffectCoverflow]}
      >

        {HERO_CARDS.map((src, idx) => (
          <SwiperSlide key={idx}>
            <StyledImage src={`/assets/images/cards/${src}`} width={isDesktop ? '320px' : '230px'} height={isDesktop ? '450px' : '315px'} alt='Hero Card Image' loading='lazy' />
          </SwiperSlide>
        ))}

      </Swiper>

      <Box>
        <AppIcon name='starBig' color='starRed' width={60} height={60} viewBoxWidth={67} viewBoxHeight={67} position='absolute' top={-30} left={25} />
        <AppIcon name='starSmall' color='starRed' width={20} height={20} viewBoxWidth={18} viewBoxHeight={18} position='absolute' top={16} left={64} />
      </Box>
    </Stack>
  )
}
