import { createSlice } from "@reduxjs/toolkit";
// import Client, { BASE_URL } from '../../Services/api'

const initialState = {
  user: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state, action) {
      state.user = action.payload
    }
  }
})

export const { getUser } = userSlice.actions

export default userSlice.reducer