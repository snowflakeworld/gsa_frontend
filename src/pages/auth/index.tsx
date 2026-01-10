import { useDeviceType } from '@/hooks'
import { Box, Card, Container, Stack } from '@mui/material'
import { createContext, useState } from 'react'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export interface StepContextProps {
  step: number
  setStep: (_: number) => void
}

export const StepContext = createContext<StepContextProps | null>(null)

export const Sign = () => {
  const [step, setStep] = useState<number>(0)
  const { isMobile } = useDeviceType()

  return (
    <Box
      sx={{
        backgroundColor: 'background.overlay',
        minHeight: '100vh'
      }}
    >
      <Container sx={{ height: '100vh', paddingTop: 10, paddingBottom: 0 }}>
        <Stack width='100%' height='100%'>
          <Card
            sx={{
              minWidth: !isMobile ? '31.25rem' : '100%',
              borderRadius: 3,
              border: 'none',
              backgroundColor: 'background.card',
              boxShadow: 'none',
              padding: { xs: 3, md: 4 },
              margin: 'auto'
            }}
          >
            <StepContext.Provider value={{ step, setStep }}>
              {step === 0 && <SignIn />}
              {step === 1 && <SignUp />}
            </StepContext.Provider>
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}
