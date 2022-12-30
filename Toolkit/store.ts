import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './slices/exampleSlice/example.slice'
import commonSlice from './slices/commonSlice/common.slice'
import authSlice from './slices/authSlice/auth.slice'

export const store = configureStore({
  reducer: {
    exampe: exampleReducer,
    common: commonSlice,
    auth: authSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch