//These forms will be used to enter new entries, or update existing ones.
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import Client from "../Services/api";

const BlogPostForm = ({ blogPost }) => {
  const initialForm = blogPost
  const [formBody, setFormBody] = useState(initialForm)
  const location = useSelector(state => state.locations.location)
  const user = useSelector(state => state.user.user)
  const localPostObj = useSelector(state => state.localObj.localObj)
  
  const navigate = useNavigate()
  
  useEffect(() => {
    if (Object.keys(initialForm).length === 0) {
      setFormBody({...formBody, "user_id": user.id, "location_id": location.id}) //"user": user.username, "location": location.name
    }
  }, [])

  const handlePostChange = (e) => {
    setFormBody({ ...formBody, [e.target.name]: e.target.value })
  }

  const formToDatabase = async (formBody) => {
    if (Object.keys(initialForm).length === 0) {
      try {
        let res = await Client.post(`/api/locations/posts` , formBody)
        console.log(res.data)
      } catch (error) {
        alert('You must be signed in to do that!')
        throw error
      }
      // Is the create form
    } else {
      await Client.put(`/api/locations/posts/${localPostObj.id}`, formBody)
      // Is the update form
    }
  }

  const handleSubmitPost = (e) => {
    e.preventDefault()
    console.log(formBody)
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
            defaultValue={formBody?.title}
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
          <button className="post-btn" disabled={!formBody.title} type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default BlogPostForm