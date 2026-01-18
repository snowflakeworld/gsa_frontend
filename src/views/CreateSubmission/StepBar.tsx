import { StepChip } from '@/components/Submission'
import { LANDING_FEATURE_GRID_MAX_WIDTH, STEPS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { ActiveStepContext } from '@/pages'
import { gsaColors } from '@/theme'
import { Button, Container, Divider, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'

export const StepBar = () => {
  const { isLargeScreen } = useDeviceType()
  const { activeStep } = useContext(ActiveStepContext)!

  return (
    <>
      <Stack bgcolor='background.header' borderBottom='1px solid' borderColor='divider' position='sticky'>
        <Container sx={{ py: { xs: 2, md: 2.5 } }}>
          <Stack
            direction={isLargeScreen ? 'row' : 'column'}
            justifyContent='space-between'
            gap={2}
            alignItems='center'
            maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH}
            m='auto'
          >
            <Stack width={isLargeScreen ? 700 : '100%'} direction='row' alignItems='center'>
              {STEPS.map((value, index) => (
                <React.Fragment key={value}>
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
                </React.Fragment>
              ))}
            </Stack>

            <Stack direction='row' gap={2} alignItems='center'>
              {isLargeScreen && (
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
