import { useSelector } from "react-redux"

const BlogPostDetails = () => {
  const blogPost = useSelector(state => state.localObj.localObj)

  return (
    <div>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.body}</p>
      <p>View the contents of a post here</p>
    </div>
  )
}

export default BlogPostDetails

// This may be more appropriately handled in a mix of ways...
// Posts can render on either a profile page (posts made by a user), or under their relevant location. As such, redux makes sense, but we shouldn't have ALL posts from the backend loaded into state at once...should have 'my posts' for the user, and 'location posts' that render for the location.
// This may actually be better done using normal react, but we shall see.
// A user's posts can be loaded into state on render of their profile page. This can be overwritten on load of a location's detail page, where posts will need to be loaded as relevant to a given location.
// This may still be a redux thing, tho, as one can use the same posts state, and have it change to hold the user's posts, or location's posts as needed (axios call).cod