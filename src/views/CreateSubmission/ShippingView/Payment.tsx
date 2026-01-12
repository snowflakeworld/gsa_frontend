import { PaymentItem } from '@/components/Submission/ShippingItem'
import { SHIPPING_PAYMENTS } from '@/constants'
import { List, Stack, Typography } from '@mui/material'

export const Payment = () => {
  return (
    <Stack gap={2}>
      <Typography variant='h6'>Select Shipping Method</Typography>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1, py: 0 }}>
        {SHIPPING_PAYMENTS.map((payment, index) => (
          <PaymentItem key={index} index={index} {...payment} />
        ))}
      </List>
    </Stack>
  )
}
