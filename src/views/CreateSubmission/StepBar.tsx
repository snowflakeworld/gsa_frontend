import { StepChip } from '@/components/Submission'
import { LANDING_FEATURE_GRID_MAX_WIDTH, STEPS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { ActiveStepContext } from '@/pages'
import { gsaColors } from '@/theme'
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material'
import { useContext } from 'react'

export const StepBar = () => {
  const { isMobile, isTablet } = useDeviceType()
  const { activeStep } = useContext(ActiveStepContext)!

  const isScreenSmall = isMobile || isTablet

  return (
    <>
      <Stack bgcolor='background.header' borderBottom='1px solid' borderColor='divider' position='sticky'>
        <Container sx={{ py: { xs: 2, md: 2.5 } }}>
          <Stack
            flexDirection={!isScreenSmall ? 'row' : 'column'}
            justifyContent='space-between'
            gap={2}
            alignItems='center'
            maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH}
            m='auto'
          >
            <Stack width={!isScreenSmall ? 700 : '100%'} flexDirection='row' alignItems='center'>
              {STEPS.map((value, index) => (
                <Box key={index}>
                  <StepChip
                    idx={index}
                    title={value}
                    status={index === activeStep ? 'active' : index < activeStep ? 'completed' : 'initial'}
                  />
                  {index < STEPS.length - 1 && (
                    <Divider
                      variant='fullWidth'
                      orientation='horizontal'
                      sx={{ flexGrow: 1, borderColor: index < activeStep ? gsaColors.chip.border.red : 'divider' }}
                    />
                  )}
                </Box>
              ))}
            </Stack>

            <Stack flexDirection='row' gap={2} alignItems='center'>
              {!isScreenSmall && (
                <Typography variant='body2' color='text.normal'>
                  Auto-saved
                </Typography>
              )}
              <Button
                variant='contained'
                sx={{ gap: 1, px: 2, width: 'fit-content', textWrap: 'nowrap', flexWrap: 'nowrap' }}
                className='button--small'
              >
                Save & Exit
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  )
}
