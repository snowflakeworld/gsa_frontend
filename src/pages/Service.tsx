import { Box, Container, Grid, Stack, Typography } from '@mui/material'

import { ServiceItem } from '@/components/Service'
import { ROUTERS } from '@/configs'
import { LANDING_FEATURE_GRID_MAX_WIDTH, SERVICE_LEVELS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { gsaColors } from '@/theme'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const { isLargeScreen } = useDeviceType()
  const navigate = useNavigate()

  const handleSubmit = (index: number) => {
    console.log(index)
    navigate(ROUTERS.Membership)
  }

  return (
    <Stack sx={{ minHeight: isLargeScreen ? 'calc(100vh - 125px)' : 'calc(100vh - 162px)' }} mt={{ xs: 9, md: 9 }}>
      <Container sx={{ py: isLargeScreen ? 6.25 : 3, my: 'auto' }}>
        <Stack gap={isLargeScreen ? 4 : 3} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto'>
          <Stack spacing={2} justifyContent='center' alignItems='center'>
            <Typography variant='h4'>Grading Service Program</Typography>
            <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
              Select the service you want to take
            </Typography>
          </Stack>
          <Grid container spacing={isLargeScreen ? 2 : 1}>
            {SERVICE_LEVELS.map((item, index) => (
              <Grid key={'service-' + index} size={isLargeScreen ? 4 : 12}>
                <ServiceItem index={index} {...item} callback={handleSubmit} />
              </Grid>
            ))}
          </Grid>
          <Box component='span' onClick={() => handleSubmit}>
            <Typography variant='caption' color='text.normal' fontWeight={500} fontSize='0.75rem' lineHeight='1.125rem'>
              Join{' '}
              <Typography
                variant='caption'
                fontWeight={500}
                fontSize='0.75rem'
                lineHeight='1.125rem'
                sx={{
                  color: gsaColors.text.red,
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  '&:hover': { color: gsaColors.text.redAlpha }
                }}
              >
                membership & points program
              </Typography>{' '}
              for more benefits
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Service
