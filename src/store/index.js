// import { createStore, combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const store = createStore()

// export default store

import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './reducers/locationSlice'
import usersReducer from './reducers/usersSlice'
import blogPostsReducer from './reducers/blogPostsSlice'

const store = configureStore({
  reducer: {
    locations: locationReducer,
    users: usersReducer,
    blogPosts: blogPostsReducer
  }
})

export default store