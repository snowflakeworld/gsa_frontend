import { Container, Grid, Stack, Typography } from '@mui/material'

import parse from 'html-react-parser'

import { MembershipItem } from '@/components/Membership'
import { LANDING_FEATURE_GRID_MAX_WIDTH, MEMBERSHIPS } from '@/constants'
import { useDeviceType } from '@/hooks'

const Membership = () => {
  const { isLargeScreen } = useDeviceType()

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
          <Grid container spacing={2}>
            {MEMBERSHIPS.map((item, index) => (
              <Grid key={'membership-' + index} size={isLargeScreen ? 4 : 12}>
                <MembershipItem index={index} {...item} />
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
    </Stack>
  )
}

export default Membership
