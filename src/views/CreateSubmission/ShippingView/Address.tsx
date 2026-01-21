import { useState } from 'react'

import { Add } from '@mui/icons-material'
import { Button, List, Stack, Typography } from '@mui/material'

import { AddressData, AddressDialog } from '@/components/Dialogs'
import { AddressItem } from '@/components/Submission/ShippingItem'
import { SHIPPING_ADDRESSES } from '@/constants'

export const Address = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [savedAddress, setSavedAddress] = useState<AddressData | null>(null)

  const handleSave = (address: AddressData) => {
    setSavedAddress(address)
  }

  return (
    <>
      <Stack gap={2}>
        <Typography variant='h6'>Select Shipping Address</Typography>
        <Stack gap={1}>
          <List sx={{ display: 'flex', flexDirection: 'column', gap: 1, py: 0 }}>
            {SHIPPING_ADDRESSES.map((address, index) => (
              <AddressItem key={'address-' + index} index={index} {...address} />
            ))}
          </List>
          <Button
            variant='contained'
            sx={{
              gap: 1,
              px: 3
            }}
            className='button--small'
            startIcon={<Add fontSize='small' />}
            onClick={() => setOpenDialog(true)}
          >
            Add new shipping address
          </Button>
        </Stack>
      </Stack>
      <AddressDialog open={openDialog} onClose={() => setOpenDialog(false)} onSave={handleSave} />
    </>
  )
}
