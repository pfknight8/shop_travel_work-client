//These forms will be used to enter new entries, or update existing ones.
import { useState } from "react";
import { useDispatch } from "react-redux";
import { blogPostAdded } from "../store/reducers/blogPostsSlice";
import { useSelector } from "react-redux";
import Client from "../Services/api";

const BlogPostForm = () => {
  const initialForm = {}
  const [postValues, setPostValues] = useState({})
  const [formBody, setFormBody] = useState({})
  const location = useSelector(state => state.locations.location)
  const localPostObj = useSelector(state => state.localObj.localObj)
  

  const dispatch = useDispatch()

  const handlePostChange = (e) => {
    setPostValues({ ...postValues, [e.target.name]: e.target.value })
  }

  const formToDatabase = async (formBody) => {
    if (Object.keys(initialForm).length === 0) {
      await Client.post(`/api/locations/posts` , formBody)
      // Is the create form
    } else {
      await Client.put(`/api/locations/posts/${localPostObj.id}`, formBody)
      // Is the update form
    }
  }

  const handleSubmitPost = (e) => {
    e.preventDefault()
    console.log("Will post, eventually...")
    formToDatabase(formBody)
    // navigate to relevant location
  }

  return (
    <div className="post-form">
      <form onSubmit={handleSubmitPost}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            className="post-input"
            type="text"
            name="title"
            required
            onChange={handlePostChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="body">Post Body: </label>
          <textarea
            className="post-input"
            type="text"
            name="body"
            required
            onChange={handlePostChange}
          />
        </div>
        <div className="btn-holder">
          <button className="post-btn" disabled={!postValues.title} type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default BlogPostForm