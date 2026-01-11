import { dispatch, updateServiceLevel, useSelector } from '@/store'
import { createContext, FC, ReactNode, useContext } from 'react'

export const useServiceLevelSelect = () => {
  const { serviceLevelIdx } = useSelector(state => state.submission)

  const selectIdx = (idx: number) => {
    dispatch(updateServiceLevel({ serviceLevelIdx: idx }))
  }

  return { serviceLevelIdx, selectIdx }
}

const ServiceLevelSelectContext = createContext<ReturnType<typeof useServiceLevelSelect> | null>(null)

export const ServiceLevelSelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useServiceLevelSelect()

  return <ServiceLevelSelectContext.Provider value={value}>{children}</ServiceLevelSelectContext.Provider>
}

export const useServiceLevelSelectContext = () => {
  const context = useContext(ServiceLevelSelectContext)
  if (!context) throw new Error('useServiceLevelSelectContext must be used within a ServiceLevelSelectProvider')

  return context
}
