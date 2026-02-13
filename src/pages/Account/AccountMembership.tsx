import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DriveFileRenameOutlineOutlined } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'

import { BillingItem, MyMembershipItem } from '@/components/Account'
import { ROUTERS } from '@/configs'
import { BILLING_ITEMS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { getCurrentMembership } from '@/services'
import { MembershipType } from '@/types'
import { capitalizeString, handleError } from '@/utils'

const AccountMembershipPage = () => {
  const { isLargeScreen } = useDeviceType()

  const [curType, setCurType] = useState<MembershipType | null>(null)

  const navigate = useNavigate()

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const resp = await getCurrentMembership()

      setCurType(resp.type)
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <Stack gap={isLargeScreen ? 4 : 2}>
      <Stack gap={isLargeScreen ? 1.5 : 1}>
        <Typography variant='h4'>Membership</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Check your membership information
        </Typography>
      </Stack>
      <Stack gap={3}>
        <Stack direction={isLargeScreen ? 'row' : 'column'} gap={3} alignItems={isLargeScreen ? 'center' : 'normal'}>
          <Stack flex={560} gap={1.5}>
            <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
              Membership information
            </Typography>
            {curType && (
              <MyMembershipItem
                title={`${capitalizeString(curType)} Membership`}
                status={curType === 'bronze' ? 'free' : 'paid'}
                duration='2 Month'
                nextPayment='9 January 2024'
                planStart='9 November 2024'
              />
            )}
          </Stack>
          <Stack flex={304} gap={1.5} sx={{ visibility: 'hidden' }}>
            <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
              Payment methods
            </Typography>

            <BillingItem
              {...BILLING_ITEMS[0]}
              flex={1}
              showMainSelect={false}
              minHeight={isLargeScreen ? '8.125rem' : '0'}
            />
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent='space-between' pt={1}>
          <Button
            variant='contained'
            sx={{ gap: 1, width: 'auto', px: 4, visibility: 'hidden' }}
            className='button--primary button--small'
          >
            Back
          </Button>
          <Button
            variant='contained'
            sx={{ gap: 1, width: 'auto', px: 2 }}
            startIcon={<DriveFileRenameOutlineOutlined fontSize='small' />}
            className='button--red button--small'
            onClick={() => navigate(ROUTERS.Membership)}
          >
            Change plans
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AccountMembershipPage
