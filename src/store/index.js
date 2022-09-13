// import { createStore, combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const store = createStore()

// export default store

import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './reducers/locationSlice'
import userReducer from './reducers/userSlice'
import blogPostsReducer from './reducers/blogPostsSlice'
import authReducer from './reducers/authSlice'
import localObjReducer from './reducers/localObjSlice'

const store = configureStore({
  reducer: {
    locations: locationReducer,
    user: userReducer,
    auth: authReducer,
    localObj: localObjReducer,
    blogPosts: blogPostsReducer
  }
})

export default store