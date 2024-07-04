import React, { useEffect, useState } from 'react'
import axios from 'axios';

import PostItem from './PostItem'

const Posts = () => {
    const [posts, setPosts] = useState(false)

    useEffect(() => {
        const getPosts = () => {
            axios.get('https://capstone-backend-ydz5.onrender.com/blogposts')
            .then(response => {
                console.log("axios response: ", response)
                setPosts(response.data)
            })
        }
        getPosts()
    }, [])
    

    return (
        <section className="posts">
            <div className="container posts_container">
                {
                    posts ? 
                    posts.map(({ id, title, category, content, author, published }) =>
                            <PostItem key={id} postId={id} title={title} category={category} content={content} author={author} published={published} />)
                    :
                    null

                }
            </div>
        </section>
    )
}

export default Posts