import { useDeviceType } from '@/hooks'
import {
  CheckOutlined,
  DriveFileRenameOutlineOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined
} from '@mui/icons-material'
import { Button, IconButton, InputAdornment, InputBase, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export const AccountSecurityPage = () => {
  const { isMobile, isTablet } = useDeviceType()
  const [newPassword, setNewPassword] = useState('12345678')
  const [confirmPassword, setConfirmPassword] = useState('12345678')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [editMode, setEditMode] = useState(false)

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
        <Stack flexDirection={!isScreenSmall ? 'row' : 'column'} gap={!isScreenSmall ? 5 : 0}>
          <Stack gap={1.5} py={1.5} flex={1}>
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
          <Stack flex={1} visibility='hidden'></Stack>
        </Stack>
        {editMode ? (
          <Stack flexDirection={!isScreenSmall ? 'row' : 'column'} gap={!isScreenSmall ? 5 : 0}>
            <Stack gap={1.5} py={1.5} flex={1}>
              <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
                New Password
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
                  sx={{ width: '100%', paddingLeft: 2.5, paddingRight: 2, py: 1.5, fontSize: '1rem', fontWeight: 500 }}
                  placeholder='Password'
                  value={newPassword}
                  type={showNewPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton size='small' onClick={() => setShowNewPassword(state => !state)}>
                        {!showNewPassword ? (
                          <VisibilityOutlined fontSize='inherit' />
                        ) : (
                          <VisibilityOffOutlined fontSize='inherit' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  onChange={e => setNewPassword(e.target.value)}
                />
              </Paper>
            </Stack>
            <Stack gap={1.5} py={1.5} flex={1}>
              <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
                Confirm New Password
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
                  sx={{ width: '100%', paddingLeft: 2.5, paddingRight: 2, py: 1.5, fontSize: '1rem', fontWeight: 500 }}
                  placeholder='Password'
                  value={confirmPassword}
                  type={showConfirmPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton size='small' onClick={() => setShowConfirmPassword(state => !state)}>
                        {!showConfirmPassword ? (
                          <VisibilityOutlined fontSize='inherit' />
                        ) : (
                          <VisibilityOffOutlined fontSize='inherit' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </Paper>
            </Stack>
          </Stack>
        ) : (
          <></>
        )}
        <Stack flexDirection='row' justifyContent={editMode ? 'space-between' : 'flex-end'}>
          {editMode ? (
            <Button
              variant='contained'
              sx={{ gap: 1, width: 'auto', px: 4 }}
              className='button--primary button--small'
              onClick={() => setEditMode(false)}
            >
              Back
            </Button>
          ) : (
            <></>
          )}
          <Button
            variant='contained'
            sx={{ gap: 1, width: 'auto', px: 2 }}
            startIcon={
              editMode ? <CheckOutlined fontSize='small' /> : <DriveFileRenameOutlineOutlined fontSize='small' />
            }
            className='button--red button--small'
            onClick={() => setEditMode(state => !state)}
          >
            {editMode ? 'Save changes' : 'Edit'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
