import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  const name = ['Test Name']
  const email = ['testemail@email.com']
  const currentPassword = ['mycurrentpassword']
  const newPassword = ['mynewpassword']
  const confirmedPassword = ['mynewpassword']
  return (
    <section className="profile">
      <div className="container profile-container">
        <Link to={`/myposts/`} className="btn">My Posts</Link>

        <div className="profile-details">
          {/* Not sure how to make this part draw from my database. */}
          <h1>{name}</h1>

          <form className="form profile-form">
            <p className="form-error-message">
              There was an error
            </p>
            <input type="text" placeholder="Full Name" value={name} onChange={event => name(event.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={event => email(event.target.value)} />
            <input type="password" placeholder="Current Password" value={currentPassword} onChange={event => currentPassword(event.target.value)} />
            <input type="password" placeholder="New Password" value={newPassword} onChange={event => newPassword(event.target.value)} />
            <input type="password" placeholder="Confirm Password" value={confirmedPassword} onChange={event => confirmedPassword(event.target.value)} />
            <button type="submit" className="btn primary">Update Details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile