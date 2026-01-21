import { Box, Button, Container, InputBase, Paper, Stack, Typography, useColorScheme } from '@mui/material'

import { CustomIcon } from '@/components'
import { LANDING_FEATURE_GRID_MAX_WIDTH } from '@/constants'
import { useDeviceType } from '@/hooks'

const CertSection = () => {
  const { isLargeScreen } = useDeviceType()
  const { mode } = useColorScheme()

  const inputStyle = {
    color: '#1D1F1F'
  }

  return (
    <Container>
      <Box gap={6.25} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto'>
        <Paper
          elevation={1}
          sx={{
            borderRadius: 3,
            padding: isLargeScreen ? 4 : 3,
            gap: isLargeScreen ? 3 : 2,
            backgroundColor: mode === 'dark' ? 'background.red' : 'background.deep'
          }}
        >
          <Stack direction={isLargeScreen ? 'row' : 'column'} alignItems='center' gap={isLargeScreen ? 3 : 2}>
            <CustomIcon
              name='smark'
              color={mode === 'dark' ? 'secondary' : 'customRed'}
              width={isLargeScreen ? '3.125rem' : '2.375rem'}
              height={isLargeScreen ? '4rem' : '3rem'}
              viewBoxWidth={56}
              viewBoxHeight={66}
            />
            <Stack direction='column' gap={0.5} flexGrow={1}>
              <Typography variant='subtitle1' color='white' textAlign={isLargeScreen ? 'inherit' : 'center'}>
                Cert Verification
              </Typography>
              <Typography
                variant='caption'
                color='#F1F1F1'
                textAlign={isLargeScreen ? 'inherit' : 'center'}
                lineHeight={isLargeScreen ? '1.5rem' : '1.25rem'}
              >
                Verify the validity of PSA & PSA/DNA certification numbers.
              </Typography>
            </Stack>

            <InputBase
              id='input-cert'
              placeholder='Enter 7 or 8 digit cert number'
              sx={{
                borderRadius: 1,
                border: '1px solid #D3D3D3',
                backgroundColor: 'input.white',
                width: isLargeScreen ? '18.75rem' : '100%',
                px: 2,
                py: 1
              }}
              style={inputStyle}
              inputProps={{ 'aria-label': 'search cert number' }}
            />

            <Button
              variant='contained'
              sx={{ gap: 1, px: 3, borderColor: 'transparent !important', width: 'fit-content', textWrap: 'nowrap' }}
              startIcon={
                <CustomIcon
                  name='verified'
                  color='secondary'
                  width={'1.25rem'}
                  height={'1.25rem'}
                  viewBoxWidth={18.5}
                  viewBoxHeight={20}
                />
              }
              className={mode === 'dark' ? 'button--black' : 'button--red'}
            >
              See Detail
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}

export default CertSection
