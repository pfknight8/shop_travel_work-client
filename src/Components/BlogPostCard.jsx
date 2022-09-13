// Used to display posts

const BlogPostCard = ({blogPost}) => {
  return (
    <div className="post-card">
      <h3>{blogPost.title}</h3>
      <h4>{blogPost.user}</h4>
    </div>
  )
}

export default BlogPostCard