const SignUp = () => {
  return (
    <div>
      <p>The signup page</p>
      <form id="signup-form">
        <div className="form-field">
          <label htmlFor="username">Username: </label>
          <input className="signup-field" name="username" type="text" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email: </label>
          <input className="signup-field" name="email" type="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="first-name">First Name: </label>
          <input className="signup-field" name="first-name" type="text" required />
        </div>
        <div className="form-field">
          <label htmlFor="last-name">Last Name: </label>
          <input className="signup-field" name="last-name" type="text" required />
        </div>
        <div className="btn-holder">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
        <p className="signup-login-text">Already have an account? Login{' '}<a className="here" href="/login">here</a></p>
      </form>
    </div>
  )
}

export default SignUp