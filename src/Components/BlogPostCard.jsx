// Used to display posts

const BlogPostCard = ({blogPost, handleSelection}) => {
  return (
    <div className="post-card">
      <h3 onClick={handleSelection}>{blogPost.title}</h3>
      <h4>{blogPost.user}</h4>
    </div>
  )
}

export default BlogPostCard