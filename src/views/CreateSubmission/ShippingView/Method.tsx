import { MethodItem } from '@/components/Submission/ShippingItem'
import { SHIPPING_METHODS } from '@/constants'
import { List, Stack, Typography } from '@mui/material'

export const Method = () => {
  return (
    <Stack gap={2}>
      <Typography variant='h6'>Select Shipping Method</Typography>
      <List sx={{ display: 'flex', flexDirection: 'row', gap: 1, py: 0 }}>
        {SHIPPING_METHODS.map((method, index) => (
          <MethodItem key={index} index={index} {...method} />
        ))}
      </List>
    </Stack>
  )
}
