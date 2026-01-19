import { dispatch, updateShippingAddress, updateShippingMethod, updateShippingPayment, useSelector } from '@/store'
import { createContext, FC, ReactNode } from 'react'

const selectShippingValue = () => {
  const { shippingAddressIdx, shippingMethodIdx, shippingPaymentIdx } = useSelector(state => state.submission)

  const selectAddressIdx = (idx: number) => {
    dispatch(updateShippingAddress({ shippingAddressIdx: idx }))
  }

  const selectMethodIdx = (idx: number) => {
    dispatch(updateShippingMethod({ shippingMethodIdx: idx }))
  }

  const selectPaymentIdx = (idx: number) => {
    dispatch(updateShippingPayment({ shippingPaymentIdx: idx }))
  }

  return {
    shippingAddressIdx,
    shippingMethodIdx,
    shippingPaymentIdx,
    selectAddressIdx,
    selectMethodIdx,
    selectPaymentIdx
  }
}

export const ShippingSelectContext = createContext<ReturnType<typeof selectShippingValue> | null>(null)

export const ShippingSelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = selectShippingValue()

  return <ShippingSelectContext.Provider value={value}>{children}</ShippingSelectContext.Provider>
}
