import { Stack } from '@mui/material'

import { useDeviceType } from '@/hooks/useDeviceType'
import { Carousel, Details } from './info'

export const HeroInfo = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack
      direction={!isScreenSmall ? 'column' : 'column-reverse'}
      flexGrow={1}
      paddingBottom={!isScreenSmall ? '30px' : 0}
      gap={!isScreenSmall ? 10 : 0}
    >
      <Details />
      <Carousel />
    </Stack>
  )
}
