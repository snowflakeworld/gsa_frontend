import { useEffect, useState } from 'react'

import { Container, Grid, Stack, Typography } from '@mui/material'

import parse from 'html-react-parser'

import { RedChip, StyledToggleButton, StyledToggleButtonGroup } from '@/components'
import { MembershipPayDialog } from '@/components/Dialogs'
import { MembershipItem } from '@/components/Membership'
import { LANDING_FEATURE_GRID_MAX_WIDTH, MEMBERSHIP_PRICES, MEMBERSHIPS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { getCurrentMembership, updateMembership } from '@/services'
import { MembershipRes, MembershipType, MembershipTypes, PeriodType } from '@/types'
import { showToast } from '@/utils'

const Membership = () => {
  const { isLargeScreen } = useDeviceType()
  const [period, setPeriod] = useState<PeriodType>('year')
  const [membershipType, setMembershipType] = useState<MembershipType | null>(null)
  const [newMembershipType, setNewMembershipType] = useState<MembershipType | null>(null)
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data: MembershipRes = await getCurrentMembership()
    setMembershipType(data.type)
  }

  const handleChange = (_: React.MouseEvent<HTMLElement>, period: PeriodType) => {
    if (period !== null) {
      setPeriod(period)
    }
  }

  const handleSave = async (token: string) => {
    await updateMembership({
      type: newMembershipType!,
      period,
      amount: MEMBERSHIP_PRICES[period][newMembershipType!],
      token
    })

    showToast('Updated successfully.', 'success')
    window.location.reload()
  }

  const handlePay = (idx: number) => {
    setNewMembershipType(MembershipTypes[idx])
    setOpenDialog(true)
  }

  return (
    <Stack sx={{ minHeight: isLargeScreen ? 'calc(100vh - 125px)' : 'calc(100vh - 162px)' }} mt={{ xs: 9, md: 9 }}>
      <Container sx={{ py: isLargeScreen ? 6.25 : 3, my: 'auto' }}>
        <Stack gap={isLargeScreen ? 4 : 3} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto'>
          <Stack spacing={2} justifyContent='center' alignItems='center'>
            <Typography variant='h4'>Membership & Points Program</Typography>
            <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
              Get more benefits by joining membership & points program
            </Typography>
          </Stack>

          <StyledToggleButtonGroup
            value={period}
            exclusive
            onChange={handleChange}
            aria-label='Period'
            sx={{ alignSelf: 'center' }}
          >
            <StyledToggleButton value='year'>
              <Stack direction='row' spacing={1} alignItems='center'>
                <Typography variant='h6'>Yearly</Typography>
                <RedChip size='small'>-20%</RedChip>
              </Stack>
            </StyledToggleButton>
            <StyledToggleButton value='month'>Monthly</StyledToggleButton>
          </StyledToggleButtonGroup>

          <Grid container spacing={2}>
            {MEMBERSHIPS.map((item, index) => (
              <Grid key={'membership-' + index} size={isLargeScreen ? 4 : 12}>
                <MembershipItem
                  index={index}
                  {...item}
                  period={period}
                  isSelected={item.type.toLowerCase() === membershipType}
                  onPay={handlePay}
                />
              </Grid>
            ))}
          </Grid>
          <Stack gap={0.5}>
            <Typography variant='caption' fontSize='0.75rem' lineHeight='0.8rem' color='text.normal'>
              *Redeem points for free grading submissions or upgrades:
            </Typography>
            <Typography variant='caption' fontSize='0.75rem' lineHeight='0.8rem' color='text.normal'>
              {parse(
                '100 points = 1 free standard submission.<br/>200 points = 1 free Express submission.<br/>50 points = Upgrade from Standard to Express.'
              )}
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <MembershipPayDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSave={handleSave}
        type={newMembershipType}
      />
    </Stack>
  )
}

export default Membership
