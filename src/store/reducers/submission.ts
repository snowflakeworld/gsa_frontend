import { SubmissionState } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: SubmissionState = {
  gradingIdx: -1,
  serviceLevelIdx: -1,
  membershipIdx: -1
}

const submissionSlice = createSlice({
  name: 'submission',
  initialState,
  reducers: {
    updateAll(state, action: PayloadAction<typeof initialState>) {
      state.gradingIdx = action.payload.gradingIdx
      state.serviceLevelIdx = action.payload.serviceLevelIdx
      state.membershipIdx = action.payload.membershipIdx
    },
    updateGrading(state, action: PayloadAction<Pick<typeof initialState, 'gradingIdx'>>) {
      state.gradingIdx = action.payload.gradingIdx
    },
    updateServiceLevel(state, action: PayloadAction<Pick<typeof initialState, 'serviceLevelIdx'>>) {
      state.serviceLevelIdx = action.payload.serviceLevelIdx
    },
    updateMembership(state, action: PayloadAction<Pick<typeof initialState, 'membershipIdx'>>) {
      state.membershipIdx = action.payload.membershipIdx
    }
  }
})

export default submissionSlice.reducer

export const { updateAll, updateGrading, updateServiceLevel, updateMembership } = submissionSlice.actions
