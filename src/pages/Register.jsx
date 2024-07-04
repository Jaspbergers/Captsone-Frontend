import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const userData = [{
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }]

  const changeInputHandler = (event) => {
    userData(prevState => {
      return{...prevState, [event.target.name]: event.target.value}
    });
  }
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register-form">
          <p className="form-error-message">There was an error</p>
          <input type="text" placeholder="Full Name" name='name' value={userData.name} onChange=
          {changeInputHandler} autoFocus/>
          <input type="email" placeholder="Email" name='email' value={userData.email} onChange=
          {changeInputHandler} autoFocus/>
          <input type="password" placeholder="Password" name='password' value={userData.password} onChange=
          {changeInputHandler} autoFocus/>
          <input type="password" placeholder="Confirm Password" name='confirmPassword' value={userData.confirmPassword} onChange=
          {changeInputHandler} autoFocus/>

          <button type="submit" className="btn primary">Register</button>
        </form>
        <small>Already have an account? <Link to="/login">Sign In</Link></small>
      </div>
    </section>
  )
}

export default Register