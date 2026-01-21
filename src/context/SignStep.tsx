import { createContext } from 'react'

interface StepContextProps {
  step: number
  setStep: (_: number) => void
}

export const StepContext = createContext<StepContextProps | null>(null)
