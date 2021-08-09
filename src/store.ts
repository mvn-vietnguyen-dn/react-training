import { configureStore } from '@reduxjs/toolkit'
import favouriteSlice from '../src/components/pages/Products/productSlice';

export const store = configureStore({
  reducer: {
    favourite: favouriteSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
