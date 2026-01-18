import { CustomIcon } from '@/components'
import { ROUTERS } from '@/configs/navigation'
import { LANDING_FEATURE_GRID_MAX_WIDTH } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Progress, Recent } from '@/views/Submission'
import { Button, Container, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const MySubmissionPage = () => {
  const navigate = useNavigate()
  const { isLargeScreen } = useDeviceType()

  const handleCreate = () => {
    navigate(ROUTERS.CreateSubmission)
  }

  return (
    <Stack sx={{ minHeight: isLargeScreen ? 'calc(100vh - 125px)' : 'calc(100vh - 162px)' }} mt={{ xs: 9, md: 9 }}>
      <Container sx={{ py: isLargeScreen ? 6.25 : 3 }}>
        <Stack gap={isLargeScreen ? 4 : 3} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto'>
          <Stack flexDirection='row' gap={2} justifyContent='space-between' alignItems='center'>
            <Typography variant='h4'>My Submission</Typography>
            <Button
              variant='contained'
              sx={{ gap: 1, width: isLargeScreen ? 'auto' : '2.5rem', px: isLargeScreen ? 2 : 0 }}
              startIcon={
                <CustomIcon
                  name='add'
                  color='secondary'
                  width='0.8rem'
                  height='0.8rem'
                  viewBoxWidth={10.67}
                  viewBoxHeight={10.67}
                />
              }
              className='button--red button--small'
              onClick={handleCreate}
            >
              {isLargeScreen ? 'Create New Submission' : ''}
            </Button>
          </Stack>
          <Stack gap={isLargeScreen ? 3.75 : 3} flexDirection={isLargeScreen ? 'row' : 'column'}>
            <Recent />
            <Progress />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
