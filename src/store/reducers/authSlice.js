import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {}
})

export default authSlice.reducer