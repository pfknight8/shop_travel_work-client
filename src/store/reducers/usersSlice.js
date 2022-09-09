import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import Client, { BASE_URL } from '../../Services/api'

// Entity
const userAdapter = createEntityAdapter()
const initialState = userAdapter.getInitialState({})

// Thunk
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await Client.get(`${BASE_URL}/api/users`)
  console.log(res)
})

// Slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action) {
      //state.push(action.payload)
    }
  },
  extraReducers: builder => {}
})

export const { userAdded } = usersSlice.actions

// Selector
export const selectUserId = state => state.users.id

export default usersSlice.reducer