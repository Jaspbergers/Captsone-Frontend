import React from 'react'
import { GiH2O } from 'react-icons/gi'

const Authors = () => {
  const[authors, setAuthors] = useState(authorsData)

  return (
    <section className="authors">
      {authors.length > 0 ? <div className="container authors-container">
        {
          authors.map((id, name, posts) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author-info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'>No users/authors found.</h2>}
    </section>
  )
}

export default Authors