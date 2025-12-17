import { Box } from '@mui/material'

import { useDeviceType } from '@/hooks/useDeviceType'
import { AppIcon } from '@/components/common';

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
      position='relative'
      sx={{ aspectRatio: '5 / 6', width: '100%', backgroundColor: 'background.paper', borderRadius: '24px' }}
    >

      <Box>
        <AppIcon name='starBig' color='starRed' width={60} height={60} viewBoxWidth={67} viewBoxHeight={67} position='absolute' top={-30} left={25} />
        <AppIcon name='starSmall' color='starRed' width={20} height={20} viewBoxWidth={18} viewBoxHeight={18} position='absolute' top={16} left={64} />
      </Box>

    </Box>
  )
}
