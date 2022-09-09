import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import Client, { BASE_URL } from '../../Services/api'

const blogPostAdapter = createEntityAdapter()
// const initialState = blogPostAdapter.getInitialState({ status: 'idle' })

const initialState = { ids: [1], entities: [{ id: '1', title: 'Test Post', body: 'abonthuntnoio', location: '1', user: '1'}], status: 'idle', error: null}

// Thunk
export const fetchBlogPosts = createAsyncThunk('blogPosts/fetchBlogPosts', async () => {
  const res = await Client.get(`${BASE_URL}/api/locations/posts`)
  console.log(res)
})

const blogPostsSlice = createSlice({
  name: 'blogPosts',
  initialState,
  reducers: {
    blogPostAdded: {
      reducer(state, action) {
        console.log(initialState)
        console.log(state.ids[0])
        state.entities.push(action.payload)
      },
      prepare(title, body, location, user) {
        return {
          payload: {
            title,
            body,
            location,
            user
          }
        }
      }
    },
    blogPostUpdated(state, action) {
      console.log(action.payload)
      // existing post state.find then apply edits
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBlogPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        blogPostAdapter.setAll(state, action.payload)
        state.status = 'idle'
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { blogPostAdded } = blogPostsSlice.actions

export const selectAllBlogPosts = state => state.blogPosts

export const selectBlogPostById = (state, blogPostId) => state.blogPosts.find(blogPost => blogPost.id === blogPostId)

export default blogPostsSlice.reducer