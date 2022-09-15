import { NavLink } from "react-router-dom"
import { LogOut } from "../Services/auth"

const HeaderNav = ({user}) => {
  // temporary**
  let userin=localStorage.getItem('token')
  // temporary**
  let userBtnOpt
  if (userin) {
    userBtnOpt = (
      <NavLink to="/" onClick={LogOut}>Log Out</NavLink>
    )
  } else {
    userBtnOpt = (
      <span>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </span>
      // signup included here temporarily, until appropriate to include the profile page.
    )
  }

  return (
    <div className="header-nav">
      <NavLink to="/">SHOP . TRAVEL . WORK</NavLink>
      {/* <NavLink to="/profile">Profile</NavLink> */}
      {userBtnOpt}
    </div>
  )
}

export default HeaderNav

//Will wrap login/logout and profile/signup in ternaries to display depending on if a user is logged in or not