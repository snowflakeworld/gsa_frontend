import { useContext } from 'react'

import { CreateSubmissionSelectContext } from '@/context'

export const useCreateSubmissionSelectContext = () => {
  const context = useContext(CreateSubmissionSelectContext)

  if (!context) throw new Error('useShippingAddressSelectContext must be used within a ShippingAddressSelectProvider')

  return context
}
