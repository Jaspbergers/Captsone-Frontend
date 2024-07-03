import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail-container">
        <div className="post-detail-header">
          <PostAuthor/>
          <div className="post-detail-buttons">
            <Link to={`posts/${id}/edit`} className="btn sm primary">Edit</Link>
            <Link to={`posts/${id}/edit`} className="btn sm danger">Delete</Link>
          </div>
        </div>
        <h1>This is the Post Title</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint illo, rerum laborum iure nesciunt hic commodi officiis ut repellendus voluptatem omnis illum eius, totam labore! Similique corrupti, illum doloribus velit debitis, assumenda obcaecati non laboriosam possimus molestias impedit maxime.</p>
      </div>
    </section>
  )
}

export default PostDetail