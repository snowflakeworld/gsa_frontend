import { createContext, FC, ReactNode, useContext } from 'react'

import { dispatch, updateShippingMethod, useSelector } from '@/store'

export const useShippingMethodSelect = () => {
  const { shippingMethodIdx } = useSelector(state => state.submission)

  const selectIdx = (idx: number) => {
    dispatch(updateShippingMethod({ shippingMethodIdx: idx }))
  }

  return { shippingMethodIdx, selectIdx }
}

const ShippingMethodSelectContext = createContext<ReturnType<typeof useShippingMethodSelect> | null>(null)

export const ShippingMethodSelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useShippingMethodSelect()

  return <ShippingMethodSelectContext.Provider value={value}>{children}</ShippingMethodSelectContext.Provider>
}

export const useShippingMethodSelectContext = () => {
  const context = useContext(ShippingMethodSelectContext)
  if (!context) throw new Error('useShippingMethodSelectContext must be used within a ShippingMethodSelectProvider')

  return context
}
