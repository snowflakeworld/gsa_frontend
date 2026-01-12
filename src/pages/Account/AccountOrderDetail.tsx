import { useDeviceType } from '@/hooks'
import { Checkout, GradingDetails, ReviewOrders, ShippingBilling } from '@/views/CreateSubmission/ConfirmationView'
import { Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export const AccountOrderDetailPage = () => {
  const { orderId } = useParams()
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack gap={!isScreenSmall ? 4 : 2}>
      <Typography variant='h4'>{`Order Id: ${orderId}`}</Typography>
      <Stack flexDirection={!isScreenSmall ? 'row' : 'column'} gap={!isScreenSmall ? 3 : 2} width='100%'>
        <ReviewOrders headerFlex={206} itemFlex={170} />
        <Stack gap={2} sx={{ maxWidth: !isScreenSmall ? '20rem' : '100%' }}>
          <GradingDetails canEdit={false} />
          <ShippingBilling canEdit={false} />
          <Checkout />
        </Stack>
      </Stack>
    </Stack>
  )
}
