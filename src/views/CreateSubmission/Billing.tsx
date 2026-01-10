import { StepButtonGroup } from '@/components/Submission'
import { ActiveStepContext } from '@/pages'
import { Stack, Typography } from '@mui/material'
import { useContext } from 'react'

export const Billing = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext)!

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <Stack>
      <Typography variant='h5'>Payment Method</ Typography>
      <StepButtonGroup onBack={handlePrev} nextTitle='Review Order' onNext={handleNext} />
    </Stack>
  )
}
