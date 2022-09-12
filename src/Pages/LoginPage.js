import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginUser } from "../Services/auth"

const LoginPage = () => {
  let initialFormState = {}
  const [formValues, setFormValues] = useState(initialFormState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formValues)
    const payload = await LoginUser(formValues)
    console.log(payload)
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