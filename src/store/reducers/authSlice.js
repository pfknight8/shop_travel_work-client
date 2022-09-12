import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import Client from "../../Services/api"

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false
}

export const loginUser = createAsyncThunk('auth/obtain', async() => {
  try {
    let res = await Client.post('/api/user')
  } catch (error) {
    throw error
  }
})

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {}
})

export default authSlice.reducer