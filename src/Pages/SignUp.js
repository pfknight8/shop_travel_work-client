import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { SignUpUser } from "../Services/auth"

const SignUp = () => {
  const initalFormState = {}
  const [formValues, setFormValues] = useState(initalFormState)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formClone = Object.assign({}, formValues)
    delete formClone.password_conf
    try{
      let res = await SignUpUser(formClone)
    } catch (error) {
      throw error
    }
    // Need to write navigate logic; only if succeeded to create a new user.
  }
  const handleReset = () => {
    setFormValues(initalFormState)
  }
  return (
    <div>
      <p>The signup page</p>
      <form id="signup-form" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="form-field">
          <label htmlFor="username">Username: </label>
          <input
            className="signup-field"
            name="username"
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email: </label>
          <input
            className="signup-field"
            name="email"
            type="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="first_name">First Name: </label>
          <input
            className="signup-field"
            name="first_name"
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="last_name">Last Name: </label>
          <input
            className="signup-field"
            name="last_name"
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password: </label>
          <input
            className="signup-field"
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password_conf">Confirm Password: </label>
          <input
            className="signup-field"
            name="password_conf"
            type="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="btn-holder">
          <button
            className="form-btn"
            type="submit"
            disabled={!formValues.password || (formValues.password !== formValues.password_conf)}
          >Submit</button>
          <button className="form-btn" type="reset">Reset</button>
        </div>
        <p className="signup-login-text">Already have an account? Log in{' '}<a className="here" href="/login">here</a></p>
      </form>
    </div>
  )
}

export default SignUp