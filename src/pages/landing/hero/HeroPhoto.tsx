import { Box } from '@mui/material'

import { useDeviceType } from '@/hooks/useDeviceType'

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

export const HeroPhoto = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Box
      maxWidth={!isScreenSmall ? '500px' : '100%'}
      sx={{ aspectRatio: '6 / 5', width: '100%', backgroundColor: 'background.paper' }}
    ></Box>
  )
}
