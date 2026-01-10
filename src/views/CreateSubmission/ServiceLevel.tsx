import { StepButtonGroup } from '@/components/Submission'
import { ActiveStepContext } from '@/pages'
import { Stack, Typography } from '@mui/material'
import { useContext } from 'react'

export const ServiceLevel = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext)!

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <Stack>
      <Typography variant='h5'>Select Service Program</Typography>
      <StepButtonGroup onBack={handlePrev} onNext={handleNext} />
    </Stack>
  )
}
