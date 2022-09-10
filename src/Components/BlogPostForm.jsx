//These forms will be used to enter new entries, or update existing ones.
import { useState } from "react";
import { useDispatch } from "react-redux";
import { blogPostAdded } from "../store/reducers/blogPostsSlice";

const BlogPostForm = () => {
  const [postValues, setPostValues] = useState({})

  const dispatch = useDispatch()

  const handlePostChange = (e) => {
    setPostValues({ ...postValues, [e.target.name]: e.target.value })
  }

  const handleSubmitPost = (e) => {
    e.preventDefault()
    console.log("Will post, eventually...")
    if (Object.keys(postValues).length > 0) {
      dispatch(blogPostAdded({ postValues }))
      setPostValues({})
    }
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