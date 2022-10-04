import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getUser } from "../store/reducers/userSlice"
import { LoginUser } from "../Services/auth"
import Client from "../Services/api"
import '../Styles/Form.css'

const LoginPage = () => {
  let initialFormState = {}
  const [formValues, setFormValues] = useState(initialFormState)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await LoginUser(formValues)
    let userDetail = await Client.get(`/users/${formValues.username}`)
    dispatch(getUser(userDetail.data))
    try{
      localStorage.setItem('userLoggedIn', userDetail.data.username)
    } catch (error) {
      throw error
    }
    navigate('/')
  }

  return (
    <div id="login-page">
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username">Username: </label>
          <input
            className="login-input"
            type="text"
            name="username"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
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
        <p className="signup-login-text">Already have an account? <a className="here" href="/signup">Sign Up</a></p>
      </form>
    </div>
  )
}

export default LoginPage