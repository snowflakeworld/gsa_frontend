import { SubmissionState } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: SubmissionState = {
  gradingIdx: -1,
  serviceLevelIdx: -1,
  membershipIdx: -1,
  shippingAddressIdx: -1,
  shippingMethodIdx: -1,
  shippingPaymentIdx: -1
}

const submissionSlice = createSlice({
  name: 'submission',
  initialState,
  reducers: {
    updateAll(state, action: PayloadAction<typeof initialState>) {
      state.gradingIdx = action.payload.gradingIdx
      state.serviceLevelIdx = action.payload.serviceLevelIdx
      state.membershipIdx = action.payload.membershipIdx
      state.shippingAddressIdx = action.payload.shippingAddressIdx
      state.shippingMethodIdx = action.payload.shippingMethodIdx
      state.shippingPaymentIdx = action.payload.shippingPaymentIdx
    },
    updateGrading(state, action: PayloadAction<Pick<typeof initialState, 'gradingIdx'>>) {
      state.gradingIdx = action.payload.gradingIdx
    },
    updateServiceLevel(state, action: PayloadAction<Pick<typeof initialState, 'serviceLevelIdx'>>) {
      state.serviceLevelIdx = action.payload.serviceLevelIdx
    },
    updateMembership(state, action: PayloadAction<Pick<typeof initialState, 'membershipIdx'>>) {
      state.membershipIdx = action.payload.membershipIdx
    },
    updateShippingAddress(state, action: PayloadAction<Pick<typeof initialState, 'shippingAddressIdx'>>) {
      state.shippingAddressIdx = action.payload.shippingAddressIdx
    },
    updateShippingMethod(state, action: PayloadAction<Pick<typeof initialState, 'shippingMethodIdx'>>) {
      state.shippingMethodIdx = action.payload.shippingMethodIdx
    },
    updateShippingPayment(state, action: PayloadAction<Pick<typeof initialState, 'shippingPaymentIdx'>>) {
      state.shippingPaymentIdx = action.payload.shippingPaymentIdx
    }
  }
})

export default submissionSlice.reducer

export const {
  updateAll,
  updateGrading,
  updateServiceLevel,
  updateMembership,
  updateShippingAddress,
  updateShippingMethod,
  updateShippingPayment
} = submissionSlice.actions
