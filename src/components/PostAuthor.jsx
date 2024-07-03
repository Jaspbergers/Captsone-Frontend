import React from 'react'
import { Link } from 'react-router-dom'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/`} className="post-author">
        <div className="post-author-details">
            <h5>By Jasper Adams</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor