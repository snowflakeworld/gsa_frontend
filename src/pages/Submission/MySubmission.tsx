import { CustomIcon } from '@/components'
import { routers } from '@/configs/navigation'
import { LANDING_FEATURE_GRID_MAX_WIDTH } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Progress, Recent } from '@/views/Submission'
import { Button, Container, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const MySubmissionPage = () => {
  const navigate = useNavigate()
  const { isMobile, isTablet } = useDeviceType()

  const handleCreate = () => {
    navigate(routers.CreateSubmission)
  }

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack sx={{ minHeight: !isScreenSmall ? 'calc(100vh - 125px)' : 'calc(100vh - 162px)' }} mt={{ xs: 9, md: 9 }}>
      <Container sx={{ py: !isScreenSmall ? 6.25 : 3 }}>
        <Stack gap={!isScreenSmall ? 4 : 3} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto'>
          <Stack flexDirection='row' gap={2} justifyContent='space-between' alignItems='center'>
            <Typography variant='h4'>My Submission</Typography>
            <Button
              variant='contained'
              sx={{ gap: 1, width: !isScreenSmall ? 'auto' : '2.5rem', px: !isScreenSmall ? 2 : 0 }}
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
              {!isScreenSmall ? 'Create New Submission' : ''}
            </Button>
          </Stack>
          <Stack gap={!isScreenSmall ? 3.75 : 3} flexDirection={!isScreenSmall ? 'row' : 'column'}>
            <Recent />
            <Progress />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
