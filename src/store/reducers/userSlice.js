import { createSlice } from "@reduxjs/toolkit";
// import Client, { BASE_URL } from '../../Services/api'

// Entity
const initialState = {
  user: []
}
// const userAdapter = createEntityAdapter()
// const initialState = userAdapter.getInitialState({})

// Thunk
// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//   const res = await Client.get(`${BASE_URL}/api/users`)
//   console.log(res)
// })

// Slice
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

// Selector

export default userSlice.reducer