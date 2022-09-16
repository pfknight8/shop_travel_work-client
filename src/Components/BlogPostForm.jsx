//These forms will be used to enter new entries, or update existing ones.
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import Client from "../Services/api";
import '../Styles/Form.css'

const BlogPostForm = ({ blogPost }) => {
  const initialForm = blogPost
  const [formBody, setFormBody] = useState(initialForm)
  const location = useSelector(state => state.locations.location)
  const user = useSelector(state => state.user.user)
  const localPostObj = useSelector(state => state.localObj.localObj)
  const navigate = useNavigate()
  
  const checkFormInfo = () => {
    if (Object.keys(initialForm).length === 0) {
      setFormBody({...formBody, "user_id": user.id, "location_id": location.id}) //"user": user.username, "location": location.name
    }
  }

  useEffect(() => {
    checkFormInfo()
  }, [])

  const handlePostChange = (e) => {
    setFormBody({ ...formBody, [e.target.name]: e.target.value })
  }

  const formToDatabase = async (formBody) => {
    if (Object.keys(initialForm).length === 0) {
      try {
        await Client.post(`/api/locations/posts` , formBody)
        navigate(`/`)
      } catch (error) {
        alert('You must be signed in to do that!')
        throw error
      }
      // Is the create form
    } else {
      try {
        await Client.put(`/api/locations/posts/${localPostObj.id}`, formBody)
        navigate(`/locations/${location.id}`)
      } catch (error) {
        alert('You must be the content owner to do that!')
        throw error
      }
      // Is the update form
    }
  }

  const handleSubmitPost = (e) => {
    e.preventDefault()
    formToDatabase(formBody)
    setFormBody(initialForm)
  }

  const handleReset = () => {
    setFormBody(initialForm)
    checkFormInfo()
  }

  return (
    <div id="post-div">
      <form id="post-form" onSubmit={handleSubmitPost} onReset={handleReset}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            className="form-input"
            type="text"
            name="title"
            required
            onChange={handlePostChange}
            defaultValue={initialForm?.title}
          />
        </div>
        <div className="form-field">
          <label htmlFor="body">Post Body: </label>
          <textarea
            className="form-input"
            type="text"
            name="body"
            required
            onChange={handlePostChange}
            defaultValue={initialForm?.body}
          />
        </div>
        <div className="btn-holder">
          <button className="post-btn" disabled={!formBody.title} type="submit">Submit</button>
          <button className="post-btn" type="submit">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default BlogPostForm