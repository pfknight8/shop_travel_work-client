import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import BlogPostForm from "../Components/BlogPostForm"
import Client from "../Services/api"

const BlogPostDetails = () => {
  const blogPost = useSelector(state => state.localObj.localObj)
  const [postEditBtn, togglePostEditBtn] = useState(false)
  const navigate = useNavigate()

  const deleteObj = async () => {
    try {
      await Client.delete(`/locations/posts/${blogPost.id}`)
      navigate(`/`)
    } catch (error) {
      alert("Unable to delete! Only content owners are able to delete.")
      throw error
    }
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteObj()
  }

  return (
    <div className="details-div">
      <h2>{blogPost.title}</h2>
      <p>{blogPost.body}</p>
      <p>View the contents of a post here</p>
      <div className="btn-holder">
        <button className="edit-btn" onClick={() => togglePostEditBtn(!postEditBtn)}>{postEditBtn ? 'Cancel' : 'Edit'}</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
      {postEditBtn && <BlogPostForm blogPost={blogPost} />}
    </div>
  )
}

export default BlogPostDetails

// This may be more appropriately handled in a mix of ways...
// Posts can render on either a profile page (posts made by a user), or under their relevant location. As such, redux makes sense, but we shouldn't have ALL posts from the backend loaded into state at once...should have 'my posts' for the user, and 'location posts' that render for the location.
// This may actually be better done using normal react, but we shall see.
// A user's posts can be loaded into state on render of their profile page. This can be overwritten on load of a location's detail page, where posts will need to be loaded as relevant to a given location.
// This may still be a redux thing, tho, as one can use the same posts state, and have it change to hold the user's posts, or location's posts as needed (axios call).cod