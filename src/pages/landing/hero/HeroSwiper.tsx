import { Box, Stack, useColorScheme } from '@mui/material'
import { FC, useEffect } from 'react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import { CustomIcon, StyledImage } from '@/components'
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
  const { mode } = useColorScheme()
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
      maxWidth={isDesktop ? 500 : 400}
      position='relative'
      sx={{ backgroundColor: 'background.paper', borderRadius: 3, aspectRatio: '5 / 6' }}
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
              width={isDesktop ? 320 : 230}
              height={isDesktop ? 450 : 315}
              alt='Hero Card Image'
              loading='lazy'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box>
        <CustomIcon
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
        <CustomIcon
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

      {!isScreenSmall && (
        <Box>
          <CustomIcon
            name='starBig'
            color={mode === 'dark' ? 'starModeDark' : 'starModeLight'}
            width={90}
            height={90}
            viewBoxWidth={67}
            viewBoxHeight={67}
            position='absolute'
            rotate='50deg'
            top={400}
            left={-55}
          />
          <CustomIcon
            name='starSmall'
            color={mode === 'dark' ? 'starModeDark' : 'starModeLight'}
            width={24}
            height={24}
            viewBoxWidth={18}
            viewBoxHeight={18}
            position='absolute'
            rotate='50deg'
            top={470}
            left={-55}
          />
        </Box>
      )}
    </Stack>
  )
}
