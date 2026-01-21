import { GradingTypeItem, StepButtonGroup } from '@/components/Submission'
import { GRADING_TYPES } from '@/constants'
import { ActiveStepContext } from '@/pages'
import { Stack, Typography } from '@mui/material'
import { useContext, useState } from 'react'

export const GradingType = () => {
  const [itemSelected, setItemSelected] = useState(false)
  const { activeStep, setActiveStep } = useContext(ActiveStepContext)!

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleItemSelect = () => {
    setItemSelected(true)
  }

  return (
    <Stack gap={3}>
      <Stack gap={0.5}>
        <Typography variant='h5'>Select Item Type</Typography>
        <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
          Select the item type that you are submitting to order
        </Typography>
      </Stack>
      <Stack gap={1}>
        {GRADING_TYPES.map((type, index) => (
          <GradingTypeItem key={type.title} index={index} onSelect={handleItemSelect} {...type} />
        ))}
      </Stack>
      <StepButtonGroup backVisible={false} nextEnabled={itemSelected} onNext={handleNext} />
    </Stack>
  )
}
