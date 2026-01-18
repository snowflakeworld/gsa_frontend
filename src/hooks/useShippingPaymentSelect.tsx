import { createContext, FC, ReactNode, useContext } from 'react'

import { dispatch, updateShippingPayment, useSelector } from '@/store'

export const useShippingPaymentSelect = () => {
  const { shippingPaymentIdx } = useSelector(state => state.submission)

  const selectIdx = (idx: number) => {
    dispatch(updateShippingPayment({ shippingPaymentIdx: idx }))
  }

  return { shippingPaymentIdx, selectIdx }
}

const ShippingPaymentSelectContext = createContext<ReturnType<typeof useShippingPaymentSelect> | null>(null)

export const ShippingPaymentSelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useShippingPaymentSelect()

  return <ShippingPaymentSelectContext.Provider value={value}>{children}</ShippingPaymentSelectContext.Provider>
}

export const useShippingPaymentSelectContext = () => {
  const context = useContext(ShippingPaymentSelectContext)
  if (!context) throw new Error('useShippingPaymentSelectContext must be used within a ShippingPaymentSelectProvider')

  return context
}
