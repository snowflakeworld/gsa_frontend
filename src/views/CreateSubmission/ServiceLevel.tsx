import { StepButtonGroup } from '@/components/Submission'
import { MembershipSelectProvider, ServiceLevelSelectProvider, useDeviceType } from '@/hooks'
import { ActiveStepContext } from '@/pages'
import { Stack } from '@mui/material'
import { useContext } from 'react'
import { MemberShip, SelectLevel } from './ServiceLevelView'

export const ServiceLevel = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext)!
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <ServiceLevelSelectProvider>
      <MembershipSelectProvider>
        <Stack gap={!isScreenSmall ? 5 : 3}>
          <SelectLevel />
          <MemberShip />
          <StepButtonGroup onBack={handlePrev} onNext={handleNext} />
        </Stack>
      </MembershipSelectProvider>
    </ServiceLevelSelectProvider>
  )
}
