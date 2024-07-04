import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const PostDetail = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  


  const handleDelete = (e) => {
    e.preventDefault()
    //axios.delete(`https://capstone-backend-ydz5.onrender.com/blogpost/delete/${postId}`)
    axios.delete(`http://localhost:5000/blogpost/delete/${id}`)
      .then(response => {
        console.log(`Deleted post ${id}`);
        navigate("/")
      })
      .catch(error => {
        console.error(error);
      })
    
  }

  return (
    <section className="post-detail">
      <div className="container post-detail-container">
        <div className="post-detail-header">
          <PostAuthor/>
          <div className="post-detail-buttons">
            <Link to={`posts//edit`} className="btn sm primary">Edit</Link>
            <button className="btn sm danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostDetail