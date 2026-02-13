import { useState } from 'react'

import { CheckOutlined, DriveFileRenameOutlineOutlined } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'

import { NormalPasswordInput, NormalTextInput } from '@/components'
import { useDeviceType, useDialogs } from '@/hooks'
import { changePassword } from '@/services'
import { hashPassword, showToast } from '@/utils'

const AccountSecurityPage = () => {
  const { isLargeScreen } = useDeviceType()
  const [editMode, setEditMode] = useState<boolean>(false)
  const dialogs = useDialogs()

  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const handleChangeNewPassword = (val: string) => {
    setNewPassword(val)
  }

  const handleChangeConfirmPassword = (val: string) => {
    setConfirmPassword(val)
  }

  const handleBack = () => {
    setNewPassword('')
    setConfirmPassword('')
    setEditMode(false)
  }

  const handleChangeMode = async () => {
    if (editMode) {
      if (newPassword.length < 8 || confirmPassword.length < 8) {
        await dialogs.alert('Password must be at least 8 characters long!')

        return
      }

      if (newPassword !== confirmPassword) {
        await dialogs.alert('Passwords do not match!')

        return
      }

      const resp = await changePassword({ newPassword: hashPassword(newPassword) })
      if (resp.status) {
        showToast('Password changed successfully!', 'success')
      } else {
        await dialogs.alert('Failed to change password. Please try again later.')
      }
    } else {
      setNewPassword('')
      setConfirmPassword('')
    }
    setEditMode(editMode => !editMode)
  }

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
        {editMode && (
          <Stack direction={isLargeScreen ? 'row' : 'column'} gap={isLargeScreen ? 5 : 0}>
            <NormalPasswordInput
              label='New Password'
              placeHolder='Password'
              defaultValue={newPassword}
              flex={1}
              listener={handleChangeNewPassword}
            />
            <NormalPasswordInput
              label='Confirm Password'
              placeHolder='Confirm'
              defaultValue={confirmPassword}
              flex={1}
              listener={handleChangeConfirmPassword}
            />
          </Stack>
        )}
        <Stack direction='row' justifyContent={editMode ? 'space-between' : 'flex-end'}>
          {editMode && (
            <Button
              variant='contained'
              sx={{ gap: 1, width: 'auto', px: 4 }}
              className='button--primary button--small'
              onClick={handleBack}
            >
              Back
            </Button>
          )}
          <Button
            variant='contained'
            sx={{ gap: 1, width: 'auto', px: 2 }}
            startIcon={
              editMode ? <CheckOutlined fontSize='small' /> : <DriveFileRenameOutlineOutlined fontSize='small' />
            }
            className='button--red button--small'
            onClick={handleChangeMode}
          >
            {editMode ? 'Save changes' : 'Edit'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AccountSecurityPage
