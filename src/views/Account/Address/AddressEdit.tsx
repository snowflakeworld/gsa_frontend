import { NormalTextInput } from '@/components'
import { useDeviceType } from '@/hooks'
import { Grid } from '@mui/material'

export const AddressEdit = () => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Grid container spacing={isLargeScreen ? 5 : 0}>
      <Grid size={isLargeScreen ? 6 : 12}>
        <NormalTextInput label='Street address' placeHolder='Street Address' defaultValue='99 wall street' />
        <NormalTextInput label='State' placeHolder='State' defaultValue='New york' />
        <NormalTextInput label='Postal Code' placeHolder='Postal Code' defaultValue='4444-9' />
      </Grid>
      <Grid size={isLargeScreen ? 6 : 12}>
        <NormalTextInput label='Country' placeHolder='Country' defaultValue='United States' />
        <NormalTextInput label='City' placeHolder='City' defaultValue='Texas' />
        <NormalTextInput label='Address type' placeHolder='Address type' defaultValue='Apartment' />
      </Grid>
    </Grid>
  )
}
