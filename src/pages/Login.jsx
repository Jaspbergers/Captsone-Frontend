import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const userData = [{name: "", password: ""}]

  const changeInputHandler = (event) => {
    userData(prevState => {
      return{...prevState, [event.target.name]: event.target.value}
    });
  }
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login-form">
          <p className="form-error-message">There was an error</p>
          <input type="email" placeholder="Email" name='email' value={userData.email} onChange=
          {changeInputHandler} autoFocus/>
          <input type="password" placeholder="Password" name='password' value={userData.password} onChange=
          {changeInputHandler} autoFocus/>

          <button type="submit" className="btn primary">Login</button>
        </form>
        <small>Don't have an account? <Link to="/register">Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login