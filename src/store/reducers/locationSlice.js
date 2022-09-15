import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const initialState = {
  location: []
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    getLocation(state, action) {
      state.location = action.payload
    }
  }
})

export const { getLocation } = locationSlice.actions

export default locationSlice.reducer