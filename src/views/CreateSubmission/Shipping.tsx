import { StepButtonGroup } from '@/components/Submission'
import { ActiveStepContext } from '@/pages'
import { Stack, Typography } from '@mui/material'
import { useContext } from 'react'

export const Shipping = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext)!

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <Stack>
      <Typography variant='h5'>Return Shipping</Typography>
      <StepButtonGroup onBack={handlePrev} nextTitle='Proceed to Checkout' onNext={handleNext} />
    </Stack>
  )
}
