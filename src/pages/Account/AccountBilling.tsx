import { BillingItem } from '@/components/Account'
import { BILLING_ITEMS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { AddOutlined, CheckOutlined } from '@mui/icons-material'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export const AccountBillingPage = () => {
  const [editMode, setEditMode] = useState(false)
  const { isLargeScreen } = useDeviceType()

  return (
    <Stack gap={isLargeScreen ? 4 : 2}>
      <Stack gap={isLargeScreen ? 1.5 : 1}>
        <Typography variant='h4'>Billing</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Manage payment method
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Grid container spacing={isLargeScreen ? 2 : 1}>
          {BILLING_ITEMS.map((item, index) => (
            <Grid key={index} size={isLargeScreen ? 6 : 12}>
              <BillingItem {...item} />
            </Grid>
          ))}
        </Grid>
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
            {editMode ? 'Save changes' : 'Add New'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
