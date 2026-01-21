import { CreateSubmissionSelectContext } from '@/context'
import { useContext } from 'react'

export const useCreateSubmissionSelectContext = () => {
  const context = useContext(CreateSubmissionSelectContext)

  if (!context) throw new Error('useShippingAddressSelectContext must be used within a ShippingAddressSelectProvider')

  return context
}
