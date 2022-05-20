import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props
  return (
    <div className="blog-list-container">
      {blogsData.map(item => (
        <BlogItem key={item.id} blog={item} />
      ))}
    </div>
  )
}

export default BlogList
