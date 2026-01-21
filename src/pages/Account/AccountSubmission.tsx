import { useNavigate } from 'react-router-dom'

import { Button, Stack, Typography } from '@mui/material'

import { CustomIcon } from '@/components'
import { ROUTERS } from '@/configs'
import { useDeviceType } from '@/hooks'

import { Progress, Recent } from '@/views/Submission'

const AccountSubmissionPage = () => {
  const navigate = useNavigate()
  const { isLargeScreen } = useDeviceType()

  const handleCreate = () => {
    navigate(ROUTERS.CreateSubmission)
  }

  return (
    <Stack gap={isLargeScreen ? 4 : 3}>
      <Stack direction='row' gap={2} justifyContent='space-between' alignItems='center'>
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
      <Stack gap={isLargeScreen ? 3.75 : 3} direction={isLargeScreen ? 'row' : 'column'}>
        <Recent />
        <Progress />
      </Stack>
    </Stack>
  )
}

export default AccountSubmissionPage
