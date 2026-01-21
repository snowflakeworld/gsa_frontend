import { type FC, useState } from 'react'

import { AddOutlined, CheckOutlined } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'

import { useDeviceType } from '@/hooks'
import { AddressEdit, AddressList } from '@/views/Account'

const AccountAddressPage: FC = () => {
  const [editMode, setEditMode] = useState(false)
  const { isLargeScreen } = useDeviceType()

  return (
    <Stack gap={isLargeScreen ? 4 : 2}>
      <Stack gap={isLargeScreen ? 1.5 : 1}>
        <Typography variant='h4'>Address</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Set your address for delivery
        </Typography>
      </Stack>
      <Stack gap={1}>
        {editMode ? <AddressEdit /> : <AddressList />}
        <Stack direction='row' justifyContent={editMode ? 'space-between' : 'flex-end'} pt={1}>
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

export default AccountAddressPage
