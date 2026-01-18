import { createContext, FC, ReactNode, useContext } from 'react'

import { dispatch, updateShippingAddress, useSelector } from '@/store'

export const useShippingAddressSelect = () => {
  const { shippingAddressIdx } = useSelector(state => state.submission)

  const selectIdx = (idx: number) => {
    dispatch(updateShippingAddress({ shippingAddressIdx: idx }))
  }

  return { shippingAddressIdx, selectIdx }
}

const ShippingAddressSelectContext = createContext<ReturnType<typeof useShippingAddressSelect> | null>(null)

export const ShippingAddressSelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useShippingAddressSelect()

  return <ShippingAddressSelectContext.Provider value={value}>{children}</ShippingAddressSelectContext.Provider>
}

export const useShippingAddressSelectContext = () => {
  const context = useContext(ShippingAddressSelectContext)
  if (!context) throw new Error('useShippingAddressSelectContext must be used within a ShippingAddressSelectProvider')

  return context
}
