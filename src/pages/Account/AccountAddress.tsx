import { type FC, useState } from 'react'

import { useDeviceType } from '@/hooks'
import { AddressEdit, AddressList } from '@/views/Account'
import { AddOutlined, CheckOutlined } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'

export const AccountAddressPage: FC = () => {
  const [editMode, setEditMode] = useState(false)
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack gap={!isScreenSmall ? 4 : 2}>
      <Stack gap={!isScreenSmall ? 1.5 : 1}>
        <Typography variant='h4'>Address</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Set your address for delivery
        </Typography>
      </Stack>
      <Stack gap={1}>
        {editMode ? <AddressEdit /> : <AddressList />}
        <Stack flexDirection='row' justifyContent={editMode ? 'space-between' : 'flex-end'} paddingTop={1}>
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
            startIcon={editMode ? <CheckOutlined fontSize='small' /> : <AddOutlined fontSize='small' />}
            className='button--red button--small'
            onClick={() => setEditMode(state => !state)}
          >
            {editMode ? 'Save changes' : 'Add New Address'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
