import { LANDING_FEATURE_GRID_MAX_WIDTH, STEPS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { dispatch, updateGrading } from '@/store'
import { Container, Stack, Typography } from '@mui/material'
import { createContext, FC, useEffect, useState } from 'react'
import {
  AddItems,
  Billing,
  Confirmation,
  GradingType,
  ServiceLevel,
  Shipping,
  StepBar,
  Summary
} from '../../views/CreateSubmission'

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
  const [activeStep, setActiveStep] = useState<number>(4)
  const { isMobile, isTablet } = useDeviceType()
  useEffect(() => {
    return () => {
      dispatch(updateGrading({ gradingIdx: -1 }))
    }
  }, [])

  const isScreenSmall = isMobile || isTablet

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
            alignItems='flex-start'
          >
            <Stack flexGrow={1} gap={!isScreenSmall ? 4 : 3}>
              <Typography variant='h4'>Create Submission</Typography>
              <ActiveStepComponent step={activeStep} />
            </Stack>
            {activeStep === STEPS.length - 1 ? <></> : <Summary />}
          </Stack>
        </Container>
      </Stack>
    </ActiveStepContext.Provider>
  )
}
