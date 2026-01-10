import { LANDING_FEATURE_GRID_MAX_WIDTH } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Button, Container, Stack, Typography } from '@mui/material'
import { createContext, FC, useState } from 'react'
import {
  AddItems,
  Billing,
  Confirmation,
  GradingType,
  ServiceLevel,
  Shipping,
  StepBar,
  Summary
} from '../views/CreateSubmission'

export interface ActiveStepContextProps {
  activeStep: number
  setActiveStep: (_: number) => void
}

export const ActiveStepContext = createContext<ActiveStepContextProps | null>(null)

interface ActiveStepComponentProps {
  step: number
}
const ActiveStepComponent: FC<ActiveStepComponentProps> = ({ step }) => {
  switch (step) {
    case 0:
      return <GradingType />
    case 1:
      return <AddItems />
    case 2:
      return <ServiceLevel />
    case 3:
      return <Shipping />
    case 4:
      return <Billing />
    case 5:
      return <Confirmation />
    default:
      return <AddItems />
  }
}

export const CreateSubmissionPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0)
  const { isMobile, isTablet } = useDeviceType()
  const isScreenSmall = isMobile || isTablet

  const handleNextStep = () => {
    if (activeStep < 5) {
      setActiveStep(prevStep => prevStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(prevStep => prevStep - 1)
    }
  }

  return (
    <ActiveStepContext.Provider value={{ activeStep, setActiveStep }}>
      <Stack sx={{ minHeight: !isScreenSmall ? 'calc(100vh - 125px)' : 'calc(100vh - 162px)' }} mt={{ xs: 9, md: 9 }}>
        <StepBar />
        <Container sx={{ py: { xs: 3, md: 3 } }}>
          <Stack
            flexDirection={!isScreenSmall ? 'row' : 'column'}
            gap={!isScreenSmall ? 4 : 3}
            maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH}
            m='auto'
          >
            <Stack flexGrow={1} gap={!isScreenSmall ? 4 : 3}>
              <Typography variant='h4'>Create Submission</Typography>
              <ActiveStepComponent step={activeStep} />
              <Stack gap={3}>
                <Stack flexDirection='row' justifyContent='space-between'>
                  <Button
                    variant='contained'
                    sx={{
                      height: 40,
                      gap: 1,
                      px: 2,
                      width: 'fit-content',
                      textWrap: 'nowrap',
                      flexWrap: 'nowrap',
                      minWidth: '6.875rem'
                    }}
                    className='button--secondary button--small'
                    onClick={handlePrevStep}
                  >
                    Back
                  </Button>
                  <Button
                    variant='contained'
                    sx={{
                      height: 40,
                      gap: 1,
                      px: 2,
                      width: 'fit-content',
                      textWrap: 'nowrap',
                      flexWrap: 'nowrap',
                      minWidth: '6.875rem'
                    }}
                    className='button--red button--small'
                    onClick={handleNextStep}
                  >
                    Continue
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Summary />
          </Stack>
        </Container>
      </Stack>
    </ActiveStepContext.Provider>
  )
}
