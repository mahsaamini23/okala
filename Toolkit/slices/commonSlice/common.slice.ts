import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface typeState {
  onModal: boolean,
}

const initialState: typeState = {
  onModal: false,
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setModal: (state,action) => {
      state.onModal = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setModal } = commonSlice.actions

export default commonSlice.reducer