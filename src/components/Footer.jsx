import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer-categories">
        <li><Link to="/posts/categories/Art">Art</Link></li>
        <li><Link to="/posts/categories/Games">Games</Link></li>
        <li><Link to="/posts/categories/Life">Life</Link></li>
        <li><Link to="/posts/categories/Music">Music</Link></li>
        <li><Link to="/posts/categories/Random">Random</Link></li>
        <li><Link to="/posts/categories/Science">Science</Link></li>
        <li><Link to="/posts/categories/Technology">Technology</Link></li>
        <li><Link to="/posts/categories/Writing">Writing</Link></li>
      </ul>
    </footer>
  )
}

export default Footer