import { StepButtonGroup } from '@/components/Submission'
import { ROUTERS } from '@/configs'
import { useDeviceType } from '@/hooks'
import { ActiveStepContext } from '@/pages'
import { Stack } from '@mui/material'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkout, GradingDetails, ReviewOrders, ShippingBilling } from './ConfirmationView'

export const Confirmation = () => {
  const { isLargeScreen } = useDeviceType()
  const { activeStep, setActiveStep } = useContext(ActiveStepContext)!
  const navigate = useNavigate()

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const handleNext = () => {
    navigate(ROUTERS.Submission)
  }

  return (
    <Stack gap={3} width='100%'>
      <Stack direction={isLargeScreen ? 'row' : 'column'} gap={isLargeScreen ? 3 : 2} width='100%'>
        <ReviewOrders />
        <Stack gap={2}>
          <GradingDetails />
          <ShippingBilling />
          <Checkout />
        </Stack>
      </Stack>
      <StepButtonGroup onBack={handlePrev} nextTitle='Confirm Order' onNext={handleNext} />
    </Stack>
  )
}
