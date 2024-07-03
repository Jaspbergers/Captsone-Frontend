import React from 'react'

const UserProfile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  return (
    <section className="profile">
      <div className="container profile-container">
        <Link to={`/myposts/${id}`} className="btn">My Posts</Link>

        <div className="profile-details">
          {/* Not sure how to make this part draw from my database. */}
          <h1>{user}</h1>

          <form className="form profile-form">
            <p className="form-error-message">
              There was an error
            </p>
            <input type="text" placeholder="Full Name" value={name} onChange={event => setName(event.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
            <input type="password" placeholder="Current Password" value={currentPassword} onChange={event => setCurrentPassword(event.target.value)} />
            <input type="password" placeholder="New Password" value={newPassword} onChange={event => setNewPassword(event.target.value)} />
            <input type="password" placeholder="Confirm Password" value={confirmNewPassword} onChange={event => setConfirmNewPassword(event.target.value)} />
            <button type="submit" className="btn primary">Update Details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile