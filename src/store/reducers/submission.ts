import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  curIdx: -1
}

const submissionSlice = createSlice({
  name: 'submission',
  initialState,
  reducers: {
    select(state, action: PayloadAction<{ idx: number }>) {
      state.curIdx = action.payload.idx
    }
  }
})

export default submissionSlice.reducer

export const { select } = submissionSlice.actions
