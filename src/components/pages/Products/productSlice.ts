import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FavouriteState {
  value: number[]
}

const initialState: FavouriteState = {
  value: [],
}

export const favouriteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<number>) => {
      const idx = state.value.findIndex(id => id === action.payload);
      if (idx !== -1) {
        state.value.splice(idx, 1);
      } else {
        state.value.push(action.payload);
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer