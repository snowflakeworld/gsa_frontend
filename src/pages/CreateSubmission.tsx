import { StepChip } from '@/components/submission/StepChip'
import { Container, Stack, Typography } from '@mui/material'

export const CreateSubmissionPage = () => {
  return (
    <Container>
      <Typography variant='h1'>Submission Page</Typography>
      <Stack gap={2} alignItems='center'>
        <StepChip idx={0} title='Grading Type' status='initial' />
        <StepChip idx={1} title='Grading Type' status='active' />
        <StepChip idx={2} title='Grading Type' status='completed' />
      </Stack>
    </Container>
  )
}
