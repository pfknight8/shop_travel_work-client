import { useState } from "react"

const LoginPage = () => {
  let initialFormState = {}
  const [formValues, setFormValues] = useState(initialFormState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Will submit, eventually...")
  }

  return (
    <div>
      <p>The page for logging in</p>
      <form onSubmit={handleSubmit}>
        <div className="login-field">
          <label htmlFor="username">Username: </label>
          <input
            className="login-input"
            type="text"
            name="username"
            required
            onChange={handleChange}
          />
        </div>
        <div className="login-field">
          <label htmlFor="password">Password: </label>
          <input
            className="login-input"
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="btn-holder">
          <button className="user-btn" disabled={!formValues.username} type="submit">Submit</button>
        </div>
        <p className="signup-login-text">Already have an account? Sign Up{' '}<a className="here" href="/signup">here</a></p>
      </form>
    </div>
  )
}

export default LoginPage