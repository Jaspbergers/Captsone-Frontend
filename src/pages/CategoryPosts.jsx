import React from 'react'
import axios from 'axios'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(false)

    useEffect(() => {
        const getPosts = () => {
            axios.get("http://127.0.0.1:5000/blogposts")
            .then(response => {
                console.log("axios response: ", response)
                setPosts(response.data)
            })
        }
        getPosts()
    }, [])
    console.log("component state: ", posts)
    return (
        <section>
            <div className="container posts_container">
                {
                    posts ? 
                    posts.map(({ id, title, category, content, author, published }) =>
                            <PostItem key={id} title={title} category={category} content={content} author={author} published={published} />)
                    :
                    null

                }
            </div>
        </section>
    )
}

export default CategoryPosts