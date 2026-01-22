import { useState } from 'react'

import { CheckOutlined, DriveFileRenameOutlineOutlined } from '@mui/icons-material'
import { Button, InputAdornment, Stack, Typography } from '@mui/material'

import { NormalTextInput, StyledImage } from '@/components'
import { useDeviceType } from '@/hooks'

const AccountHomePage = () => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const { isLargeScreen } = useDeviceType()

  return (
    <Stack gap={isLargeScreen ? 4 : 2}>
      <Stack gap={isLargeScreen ? 1.5 : 1}>
        <Typography variant='h4'>My Account</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Personalize your account
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Stack>
          <Stack gap={1.5} py={isLargeScreen ? 1.5 : 0}>
            <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
              Profile picture
            </Typography>
            <StyledImage
              src={`/assets/images/avatar.png`}
              width='7.5rem'
              height='7.5rem'
              alt='Avatar Image'
              loading='lazy'
              margin='0'
              borderRadius='8px'
            />
          </Stack>
          <Stack direction={isLargeScreen ? 'row' : 'column'} gap={isLargeScreen ? 5 : 0}>
            <Stack flex={1}>
              <NormalTextInput label='Customer number' placeHolder='Customer number' defaultValue='12345678' />
              <NormalTextInput label='Name' placeHolder='Name' defaultValue='irvan Wibowo' flex={1} />
            </Stack>
            <Stack flex={1}>
              <NormalTextInput label='Email' placeHolder='Email' type='email' defaultValue='irvanwibowo@gmail.com' />
              <Stack direction='row' gap={1.25}>
                <NormalTextInput label='Phone number' placeHolder='Phone' defaultValue='769345180' flex={1}>
                  <InputAdornment position='start'>
                    <Typography variant='caption' fontSize='1rem' color='text.primary'>
                      +1
                    </Typography>
                  </InputAdornment>
                </NormalTextInput>
                <NormalTextInput
                  label='Country'
                  placeHolder='Country'
                  defaultValue='USA'
                  width={isLargeScreen ? '10rem' : '6.25rem'}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
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

export default AccountHomePage
