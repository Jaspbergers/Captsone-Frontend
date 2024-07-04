import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import { PiDropSlashDuotone } from 'react-icons/pi'

const PostItem = (props) => {
    const {postId, title, category, content, author, published} = props


    const shortContent = content.length > 145 ? content.substr(0, 145) + '...': content;
    const postTitle = title.length > 30 ? title.substr(0, 30) + '...': title;
    
  return (
    <article className="post">
        <div className="post-content">
            <Link to={`/posts/${postId}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p>{shortContent}</p>
            <div className="post-footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`} className="btn category">{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem