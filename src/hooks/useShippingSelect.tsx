import { ShippingSelectContext } from '@/context'
import { useContext } from 'react'

export const useShippingSelectContext = () => {
  const context = useContext(ShippingSelectContext)

  if (!context) throw new Error('useShippingAddressSelectContext must be used within a ShippingAddressSelectProvider')

  return context
}
