import { useParams } from 'react-router-dom'

import { Stack, Typography } from '@mui/material'

import { useDeviceType } from '@/hooks'
import { Checkout, GradingDetails, ReviewOrders, ShippingBilling } from '@/views/CreateSubmission/ConfirmationView'

export const AccountOrderDetailPage = () => {
  const { orderId } = useParams()
  const { isLargeScreen } = useDeviceType()

  return (
    <Stack gap={isLargeScreen ? 4 : 2}>
      <Typography variant='h4'>{`Order Id: ${orderId}`}</Typography>
      <Stack direction={isLargeScreen ? 'row' : 'column'} gap={isLargeScreen ? 3 : 2} width='100%'>
        <ReviewOrders headerFlex={206} itemFlex={170} />
        <Stack gap={2} sx={{ maxWidth: isLargeScreen ? '20rem' : '100%' }}>
          <GradingDetails canEdit={false} />
          <ShippingBilling canEdit={false} />
          <Checkout />
        </Stack>
      </Stack>
    </Stack>
  )
}
