import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { SignUpUser } from "../Services/auth"
import '../Styles/Form.css'

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
      await SignUpUser(formClone)
      navigate('/')
    } catch (error) {
      throw error
    }
  }
  const handleReset = () => {
    setFormValues(initalFormState)
  }
  return (
    <div id="signup-page">
      <form id="signup-form" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="form-field">
          <label htmlFor="username">Username: </label>
          <input
            className="signup-input"
            name="username"
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email: </label>
          <input
            className="signup-input"
            name="email"
            type="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="first_name">First Name: </label>
          <input
            className="signup-input"
            name="first_name"
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="last_name">Last Name: </label>
          <input
            className="signup-input"
            name="last_name"
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password: </label>
          <input
            className="signup-input"
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password_conf">Confirm Password: </label>
          <input
            className="signup-input"
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
        <p className="signup-login-text">Already have an account? <a className="here" href="/login">Log In</a></p>
      </form>
    </div>
  )
}

export default SignUp