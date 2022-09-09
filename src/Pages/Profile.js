import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import BlogPostCard from "../Components/BlogPostCard"
import { selectAllBlogPosts, fetchBlogPosts } from "../store/reducers/blogPostsSlice"

const Profile = () => {
  const dispatch = useDispatch()
  let blogPosts = useSelector(selectAllBlogPosts)
  let blogPostStatus = useSelector(state => state.blogPosts.status)

  useEffect(() => {
    if (blogPostStatus === 'idle') {
      dispatch(fetchBlogPosts())
    }
  }, [blogPostStatus])

  let renderedPosts = blogPosts.map(blogPost => (
    <BlogPostCard key={blogPost.id} blogPost={blogPost}/>
  ))
  return (
    <div>
      <p>The details page for profiles</p>
      <h2>Your Location Posts</h2>
      {renderedPosts}
    </div>
  )
}

export default Profile