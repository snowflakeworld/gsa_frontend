import { CustomIcon } from '@/components'
import { useDeviceType } from '@/hooks'
import { Button, InputBase, Paper, Stack, Typography } from '@mui/material'

export const AccountSecurityPage = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack gap={!isScreenSmall ? 4 : 2}>
      <Stack gap={!isScreenSmall ? 1.5 : 1}>
        <Typography variant='h4'>Security</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Secure your account
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Stack gap={1.5} py={1.5} width={!isScreenSmall ? '26.25rem' : '100%'}>
          <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
            Password
          </Typography>
          <Paper
            component='form'
            sx={{
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <InputBase
              sx={{ width: '100%', px: 2.5, py: 1.5, fontSize: '1rem', fontWeight: 500 }}
              placeholder='Password'
              value='12345678'
              type='password'
            />
          </Paper>
        </Stack>
        <Stack flexDirection='row' justifyContent='flex-end'>
          <Button
            variant='contained'
            sx={{ gap: 1, width: 'auto', px: 2 }}
            startIcon={
              <CustomIcon name='edit' color='secondary' width={12} height={12} viewBoxWidth={10} viewBoxHeight={12} />
            }
            className='button--red button--small'
          >
            Edit
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
