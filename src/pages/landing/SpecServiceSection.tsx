import { Container, Grid, Stack, Typography } from '@mui/material'

import { SpecialServiceCard } from '@/components/cards/SpecialServiceCard'
import { RedChip } from '@/components/common/RedChip'
import { LANDING_FEATURE_GRID_MAX_WIDTH, SPECIAL_SERVICES } from '@/constants'
import { useDeviceType } from '@/hooks/useDeviceType'

const SpecServiceSection = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Container>
      <Stack gap={6.25} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto'>
        <Stack gap={1.5}>
          <RedChip>New Feature</RedChip>
          <Typography variant='h2' textAlign='left'>
            Specialized Grading Services
          </Typography>
          <Typography width={!isScreenSmall ? '60%' : '100%'} variant='subtitle2' textAlign='left'>
            Hobby love is won with each closing auction and final offer. Enlist free real-time pricing data to time the
            market and curate in-the-moment.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {SPECIAL_SERVICES.map((props, idx: number) => (
            <SpecialServiceCard key={idx} {...props} />
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export default SpecServiceSection
