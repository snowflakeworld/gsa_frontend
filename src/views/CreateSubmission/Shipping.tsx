import { StepButtonGroup } from '@/components/Submission'
import { ShippingSelectProvider } from '@/context'
import {} from '@/hooks'
import { ActiveStepContext } from '@/pages'
import { Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { Address, Method, Payment } from './ShippingView'

export const Shipping = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext)!

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <ShippingSelectProvider>
      <Stack gap={3}>
        <Stack gap={0.5}>
          <Typography variant='h5'>Return Shipping</Typography>
          <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
            Complete your submission by providing shipment
          </Typography>
        </Stack>
        <Address />
        <Method />
        <Payment />
        <StepButtonGroup onBack={handlePrev} onNext={handleNext} nextTitle='Proceed to Checkout' />
      </Stack>
    </ShippingSelectProvider>
  )
}
