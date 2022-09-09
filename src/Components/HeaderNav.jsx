import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

const HeaderNav = ({user}) => {

  let userBtnOpt
  if (user) {
    userBtnOpt = (
      <NavLink to="/">Log Out</NavLink>
    )
  } else {
    userBtnOpt = (
      <NavLink to="/login">Log In</NavLink>
    )
  }

  return (
    <div>
      <p>Navigation & Header</p>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <p>Will wrap login/logout and profile/signup in ternaries to display depending on if a user is logged in or not</p>
      {userBtnOpt}
    </div>
  )
}

export default HeaderNav