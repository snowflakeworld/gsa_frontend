import { useState } from 'react'

import { Box, Card, Container, Stack } from '@mui/material'

import { StepContext } from '@/context/SignStep'
import { useDeviceType } from '@/hooks'

import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

const Sign = () => {
  const [step, setStep] = useState<number>(0)
  const { isMobile } = useDeviceType()

  return (
    <Box
      sx={{
        backgroundColor: 'background.overlay',
        minHeight: '100vh'
      }}
    >
      <Container sx={{ height: '100vh', pt: 10, pb: 0 }}>
        <Stack width='100%' height='100%'>
          <Card
            sx={{
              minWidth: isMobile ? '100%' : '31.25rem',
              borderRadius: 3,
              border: 'none',
              backgroundColor: 'background.card',
              boxShadow: 'none',
              p: { xs: 3, md: 4 },
              m: 'auto'
            }}
          >
            <StepContext.Provider value={{ step, setStep }}>
              {step === 0 ? <SignIn /> : <SignUp />}
            </StepContext.Provider>
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}

export default Sign
