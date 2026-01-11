import { MembershipItem } from '@/components/Submission/MembershipItem'
import { MEMBERSHIPS } from '@/constants'
import { List, Stack, Typography } from '@mui/material'
import parse from 'html-react-parser'

export const MemberShip = () => {
  return (
    <Stack gap={3}>
      <Stack gap={0.5}>
        <Typography variant='h5'>Membership & points program</Typography>
        <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
          Join the club to the best grading prices.
        </Typography>
      </Stack>

      <List sx={{ display: 'flex', flexDirection: 'column', gap: 3.5, py: 0 }}>
        {MEMBERSHIPS.map((item, index) => (
          <MembershipItem key={index} index={index} {...item} />
        ))}
      </List>

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
  )
}
