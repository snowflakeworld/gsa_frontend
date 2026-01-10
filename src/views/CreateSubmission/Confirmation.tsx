import { StepButtonGroup } from '@/components/Submission'
import { ActiveStepContext } from '@/pages'
import { Stack, Typography } from '@mui/material'
import { useContext } from 'react'

export const Confirmation = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext)!

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const handleNext = () => {
  }

  return (
    <Stack>
      <Typography variant='h5'>Review Order</Typography>
      <StepButtonGroup onBack={handlePrev} nextTitle='Confirm Order' onNext={handleNext} />
    </Stack>
  )
}
