import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import LocalFareForm from "../Components/LocalFareForm"
import Client from "../Services/api"

const LocalFareDetails = () => {
  const localFare = useSelector(state => state.localObj.localObj)
  const [fareEditBtn, toggleFareEditBtn] = useState(false)
  const navigate = useNavigate()

  const deleteObj = async () => {
    try {
      let res = await Client.delete(`/api/localfare/${localFare.id}`)
      navigate(`/`)
    } catch (error) {
      alert("Unable to delete! Only content owners are able to delete.")
      throw error
    }
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteObj()
  }

  return (
    <div>
      <h2>{localFare.name}</h2>
      <h4>{localFare.category}</h4>
      <p>{localFare.description}</p>
      <p>Posted by: {localFare.user}</p>
      <div className="btn-holder">
        <button className="edit-btn" onClick={() => toggleFareEditBtn(!fareEditBtn)}>{fareEditBtn ? 'Cancel' : 'Edit'}</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
      {fareEditBtn && <LocalFareForm localFare={localFare} />}
    </div>
  )
}

export default LocalFareDetails