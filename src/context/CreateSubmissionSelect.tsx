import { createContext, FC, ReactNode } from 'react'

import {
  dispatch,
  updateGrading,
  updateMembership,
  updateServiceLevel,
  updateShippingAddress,
  updateShippingMethod,
  updateShippingPayment,
  useSelector
} from '@/store'

const selectCreateSubmissionValue = () => {
  const { shippingAddressIdx, shippingMethodIdx, shippingPaymentIdx, membershipIdx, serviceLevelIdx, gradingIdx } =
    useSelector(state => state.submission)

  const selectAddressIdx = (idx: number) => {
    dispatch(updateShippingAddress({ shippingAddressIdx: idx }))
  }

  const selectMethodIdx = (idx: number) => {
    dispatch(updateShippingMethod({ shippingMethodIdx: idx }))
  }

  const selectPaymentIdx = (idx: number) => {
    dispatch(updateShippingPayment({ shippingPaymentIdx: idx }))
  }

  const selectMembershipIdx = (idx: number) => {
    dispatch(updateMembership({ membershipIdx: idx }))
  }

  const selectServiceLevelIdx = (idx: number) => {
    dispatch(updateServiceLevel({ serviceLevelIdx: idx }))
  }

  const selectGradingIdx = (idx: number) => {
    dispatch(updateGrading({ gradingIdx: idx }))
  }

  return {
    shippingAddressIdx,
    shippingMethodIdx,
    shippingPaymentIdx,
    membershipIdx,
    serviceLevelIdx,
    gradingIdx,
    selectAddressIdx,
    selectMethodIdx,
    selectPaymentIdx,
    selectMembershipIdx,
    selectServiceLevelIdx,
    selectGradingIdx
  }
}

export const CreateSubmissionSelectContext = createContext<ReturnType<typeof selectCreateSubmissionValue> | null>(null)

export const CreateSubmissionSelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = selectCreateSubmissionValue()

  return <CreateSubmissionSelectContext.Provider value={value}>{children}</CreateSubmissionSelectContext.Provider>
}
