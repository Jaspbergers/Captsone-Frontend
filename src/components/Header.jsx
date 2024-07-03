import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../images/logo.jpg'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

const header = () => {
  return (
    
    <nav>
      <div className="container nav-container">
        <Link to="/" className='nav-logo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className="nav-menu">
          <li><Link to="/profile">Jasper Adams</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className="nav-toggle-btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>
  )
}

export default header