import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  localObj: []
}

const localObjSlice = createSlice({
  name: 'localObj',
  initialState,
  reducers: {
    getObj(state, action) {
      state.localObj = action.payload
    }
  }
})

export const { getObj } = localObjSlice.actions

export default localObjSlice.reducer