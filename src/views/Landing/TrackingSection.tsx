import { LANDING_FEATURE_GRID_MAX_WIDTH, TRACKING_VALUES } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Box, Container, Stack, Typography } from '@mui/material'
import { TrackingCard } from './Tracking'

const TrackingSection = () => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Box position='relative'>
      {isLargeScreen && (
        <Box
          component='img'
          src='/assets/images/decorator1.svg'
          sx={{
            position: 'absolute',
            width: 'clamp(21.875rem, 15.2729rem + 30vw, 40.625rem)',
            top: 400,
            opacity: 0.3
          }}
        />
      )}
      <Container>
        <Stack gap={6.25} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto' direction={{ xs: 'column', md: 'row' }}>
          <Stack gap={1.5} maxWidth='25rem'>
            <Typography variant='h2'>Tracking Value</Typography>
            <Typography variant='subtitle2' lineHeight={isLargeScreen ? '2rem' : '1.75rem'}>
              Hobby love is won with each closing auction and final offer. Enlist free real-time pricing data to time
              the market and curate in-the-moment.
            </Typography>
          </Stack>
          <Stack gap={{ xs: 2, md: 3 }} flexGrow={1}>
            {TRACKING_VALUES.map((item, index) => (
              <TrackingCard key={'tracking-card-' + index} {...item} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default TrackingSection
