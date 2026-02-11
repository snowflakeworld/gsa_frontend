import { Stack } from '@mui/material'

import { useDeviceType } from '@/hooks'

const Shop = () => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Stack
      sx={{ minHeight: isLargeScreen ? 'calc(100vh - 125px)' : 'calc(100vh - 162px)' }}
      mt={{ xs: 9, md: 9 }}
    ></Stack>
  )
}

export default Shop
