import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LogOut } from "../Services/auth"
import Client from "../Services/api"

const Profile = () => {
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()

  const deleteObj = async () => {
    try {
      await Client.delete(`/users/${user.username}`)
      LogOut()
      navigate(`/`)
    } catch (error) {
      alert("Unable to delete! Only the account owner is able to delete.")
      throw error
    }
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteObj()
  }

  return (
    <div>
      <h2>{user?.username}</h2>
      <p>Current email: {user?.email}</p>
      <p>First name: {user?.first_name}</p>
      <p>Last name: {user?.last_name}</p>
      <div className="btn-holder">
        <button id='delete-user' onClick={handleDelete}>Delete User</button>
      </div>
    </div>
  )
}

export default Profile

// This page will display user created content, and user control buttons eventually