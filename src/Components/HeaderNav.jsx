import { NavLink } from "react-router-dom"
import { LogOut } from "../Services/auth"
import { useSelector } from "react-redux"

const HeaderNav = () => {
  // temporary**
  let user = useSelector(state => state.user.user)
  let userin=localStorage.getItem('token')
  // temporary**
  let userBtnOpt
  if (userin) {
    userBtnOpt = (
      <span>
        <NavLink className="nav-link" to={`/profile/${user.id}`}>Profile</NavLink>
        <NavLink className="nav-link" to="/" onClick={LogOut}>Log Out</NavLink>
      </span>
    )
  } else {
    userBtnOpt = (
      <span>
        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        <NavLink className="nav-link" to="/login">Log In</NavLink>
      </span>
      // signup included here temporarily, until appropriate to include the profile page.
    )
  }

  return (
    <div id="navHeader">
      <NavLink className="nav-link" to="/">SHOP . TRAVEL . WORK</NavLink>
      <div className="header-nav">
        <div className="left-header">
          {/* <NavLink className="nav-link" to="/profile">Profile</NavLink> */}
          {userBtnOpt}
        </div>
        <div className="right-header">
          {user?.username}
        </div>
      </div>
    </div>
  )
}

export default HeaderNav

//Will wrap login/logout and profile/signup in ternaries to display depending on if a user is logged in or not