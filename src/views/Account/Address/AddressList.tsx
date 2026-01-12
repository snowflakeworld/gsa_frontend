import { AddressItem } from '@/components/Account'
import { DELIVERY_ADDRESSES } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Grid } from '@mui/material'

export const AddressList = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Grid container spacing={!isScreenSmall ? 2 : 1}>
      {DELIVERY_ADDRESSES.map((item, index) => (
        <Grid key={index} size={{ xs: 12, md: 6 }}>
          <AddressItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}
