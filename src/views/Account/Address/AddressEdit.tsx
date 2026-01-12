import { NormalTextInput } from '@/components'
import { useDeviceType } from '@/hooks'
import { Grid } from '@mui/material'

export const AddressEdit = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Grid container spacing={!isScreenSmall ? 5 : 0}>
      <Grid size={!isScreenSmall ? 6 : 12}>
        <NormalTextInput label='Street address' placeHolder='Street Address' defaultValue='99 wall street' />
        <NormalTextInput label='State' placeHolder='State' defaultValue='New york' />
        <NormalTextInput label='Postal Code' placeHolder='Postal Code' defaultValue='4444-9' />
      </Grid>
      <Grid size={!isScreenSmall ? 6 : 12}>
        <NormalTextInput label='Country' placeHolder='Country' defaultValue='United States' />
        <NormalTextInput label='City' placeHolder='City' defaultValue='Texas' />
        <NormalTextInput label='Address type' placeHolder='Address type' defaultValue='Apartment' />
      </Grid>
    </Grid>
  )
}
