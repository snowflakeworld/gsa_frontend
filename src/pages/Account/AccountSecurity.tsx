import { useState } from 'react'

import { CheckOutlined, DriveFileRenameOutlineOutlined } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'

import { NormalPasswordInput, NormalTextInput } from '@/components'
import { useDeviceType } from '@/hooks'

const AccountSecurityPage = () => {
  const { isLargeScreen } = useDeviceType()
  const [editMode, setEditMode] = useState(false)

  return (
    <Stack gap={isLargeScreen ? 4 : 2}>
      <Stack gap={isLargeScreen ? 1.5 : 1}>
        <Typography variant='h4'>Security</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Secure your account
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Stack direction={isLargeScreen ? 'row' : 'column'} gap={isLargeScreen ? 5 : 0}>
          <NormalTextInput
            label='Password'
            placeHolder='Password'
            type='password'
            defaultValue={'1231231'}
            editable={false}
            flex={1}
          />
          <Stack flex={1} visibility='hidden'></Stack>
        </Stack>
        {editMode ? (
          <Stack direction={isLargeScreen ? 'row' : 'column'} gap={isLargeScreen ? 5 : 0}>
            <NormalPasswordInput label='New Password' placeHolder='Password' defaultValue={'1231231'} flex={1} />
            <NormalPasswordInput label='Confirm Password' placeHolder='Confirm' defaultValue={'1231231'} flex={1} />
          </Stack>
        ) : (
          <></>
        )}
        <Stack direction='row' justifyContent={editMode ? 'space-between' : 'flex-end'}>
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

export default AccountSecurityPage
