import { GradingTypeItem } from '@/components/Submission/GradingTypeItem'
import { GRADING_TYPES } from '@/constants/createSubmission'
import { SingleChoiceSelectProvider } from '@/hooks/useSingleChoiceSelect'
import { Stack, Typography } from '@mui/material'

export const GradingType = () => {
  return (
    <Stack gap={3}>
      <Stack gap={0.5}>
        <Typography variant='h5'>Select Item Type</Typography>
        <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
          Select the item type that you are submitting to order
        </Typography>
      </Stack>
      <SingleChoiceSelectProvider>
        <Stack gap={1}>
          {GRADING_TYPES.map((type, index) => (
            <GradingTypeItem key={type.title} index={index} {...type} />
          ))}
        </Stack>
      </SingleChoiceSelectProvider>
    </Stack>
  )
}
