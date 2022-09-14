import { NavLink } from "react-router-dom"
// import { useSelector } from "react-redux"
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
      <NavLink to="/login">Log In</NavLink>
    )
  }

  return (
    <div className="header-nav">
      <NavLink to="/">SHOP . TRAVEL . WORK</NavLink>
      {/* <NavLink to="/profile">Profile</NavLink> */}
      {/* <NavLink to="/signup">Sign Up</NavLink> */}
      {/* {userBtnOpt} */}
    </div>
  )
}

export default HeaderNav

//Will wrap login/logout and profile/signup in ternaries to display depending on if a user is logged in or not