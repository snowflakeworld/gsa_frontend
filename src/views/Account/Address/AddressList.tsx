import { Grid } from '@mui/material'

import { AddressItem } from '@/components/Account'
import { DELIVERY_ADDRESSES } from '@/constants'
import { useDeviceType } from '@/hooks'

export const AddressList = () => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Grid container spacing={isLargeScreen ? 2 : 1}>
      {DELIVERY_ADDRESSES.map((item, index) => (
        <Grid key={'address-' + index} size={{ xs: 12, md: 6 }}>
          <AddressItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}
