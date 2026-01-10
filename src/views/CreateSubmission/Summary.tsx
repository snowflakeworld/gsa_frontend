import { useDeviceType } from '@/hooks'
import { Stack } from '@mui/material'

export const Summary = () => {
  const { isMobile, isTablet } = useDeviceType()
  const isScreenSmall = isMobile || isTablet

  return <Stack sx={{ width: !isScreenSmall ? 400 : '100%' }}></Stack>
}
