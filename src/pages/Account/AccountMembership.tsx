import { BillingItem, MyMembershipItem } from '@/components/Account'
import { BILLING_ITEMS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { DriveFileRenameOutlineOutlined } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'

export const AccountMembershipPage = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack gap={!isScreenSmall ? 4 : 2}>
      <Stack gap={!isScreenSmall ? 1.5 : 1}>
        <Typography variant='h4'>Membership</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Check your membership information
        </Typography>
      </Stack>
      <Stack gap={3}>
        <Stack flexDirection={!isScreenSmall ? 'row' : 'column'} gap={3}>
          <Stack flex={560} gap={1.5}>
            <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
              Membership information
            </Typography>
            <MyMembershipItem
              title='Bronze Membership'
              status='free'
              duration='2 Month'
              nextPayment='9 January 2024'
              planStart='9 November 2024'
            />
          </Stack>
          <Stack flex={304} gap={1.5}>
            <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
              Payment methods
            </Typography>

            <BillingItem {...BILLING_ITEMS[0]} flex={1} />
          </Stack>
        </Stack>
        <Stack flexDirection='row' justifyContent='space-between' paddingTop={1}>
          <Button variant='contained' sx={{ gap: 1, width: 'auto', px: 4 }} className='button--primary button--small'>
            Back
          </Button>
          <Button
            variant='contained'
            sx={{ gap: 1, width: 'auto', px: 2 }}
            startIcon={<DriveFileRenameOutlineOutlined fontSize='small' />}
            className='button--red button--small'
          >
            Change plans
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
