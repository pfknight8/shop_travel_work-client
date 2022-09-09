import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import Client, { BASE_URL } from '../../Services/api'

// const initialState = {
//   entities: [],
//   status: null
// }

const locationAdapter = createEntityAdapter()
const initialState = locationAdapter.getInitialState({status: 'idle'})

export const fetchLocations = createAsyncThunk('locations/fetchLocations', async () => {
  const res = await Client.get(`${BASE_URL}/api/locations`)
  console.log(res)
})

export const saveLocation = createAsyncThunk('locations/saveLocation', async (location) => {
  const initialLocation = { location }
  const res = await Client.post(`${BASE_URL}/api/locations`, { location: initialLocation })
  console.log(res)
})

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    locationAdded(state, action) {
      const location = action.payload
      state.entities[location.id] = location
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchLocations.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        // const newEntities = {}
        // action.payload.forEach(location => {
        //   newEntities[location.id] = location
        // })
        // state.entities = newEntities
        locationAdapter.setAll(state, action.payload)
        state.status = 'idle'
      })
      // .addCase(saveLocation.fulfilled, (state, action) => {
      //   const location = action.payload
      //   state.entities[location.id] = location
      // })
      .addCase(saveLocation.fulfilled, locationAdapter.addOne)
  }
})

export const { locationAdded } = locationSlice.actions

export const { selectAll: selectLocations, selectById: selectLocationById} = locationAdapter.getSelectors(state => state.locations)

export const selectLocationIds = createSelector(
  selectLocations,
  locations => locations.map(location => location.id)
)

export default locationSlice.reducer