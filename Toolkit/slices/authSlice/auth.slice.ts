import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface auth {
  isLogin: boolean,
  info: {}
}

const initialState: auth = {
  isLogin: false,
  info:{}
}

export const exampleSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // set isLogin true | false
    setLogin: (state,action) => {
      state.isLogin = action.payload;
    },

    // set info user
    setInfo: (state,action) => {
      state.info = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLogin, setInfo } = exampleSlice.actions

export default exampleSlice.reducer