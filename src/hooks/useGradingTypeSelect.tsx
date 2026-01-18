import { createContext, FC, ReactNode, useContext } from 'react'

import { dispatch, updateGrading, useSelector } from '@/store'

export const useGradingTypeSelect = () => {
  const { gradingIdx } = useSelector(state => state.submission)

  const selectIdx = (idx: number) => {
    dispatch(updateGrading({ gradingIdx: idx }))
  }

  return { gradingIdx, selectIdx }
}

const GradingTypeSelectContext = createContext<ReturnType<typeof useGradingTypeSelect> | null>(null)

export const GradingTypeSelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useGradingTypeSelect()

  return <GradingTypeSelectContext.Provider value={value}>{children}</GradingTypeSelectContext.Provider>
}

export const useGradingTypeSelectContext = () => {
  const context = useContext(GradingTypeSelectContext)
  if (!context) throw new Error('useGradingTypeSelectContext must be used within a GradingTypeSelectProvider')

  return context
}
