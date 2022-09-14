//These forms will be used to enter new entries, or update existing ones.
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Client from "../Services/api"

const LocalFareForm = ({ localFare }) => {
  const initialForm = localFare
  const [formBody, setFormBody] = useState(initialForm)
  const localFareObj = useSelector(state => state.localObj.localObj)
  let locationId = localFareObj?.location_id
  const navigate = useNavigate()

  const handleFormChange = (e) => {
    setFormBody({...formBody, [e.target.name]: e.target.value })
  }
  const formToDatabase = async (formBody) => {
    if (Object.keys(initialForm).length === 0) {
      await Client.post(`/api/localfare` , formBody)
      // Is the create form
    } else {
      await Client.put(`/api/localfare/${localFareObj.id}`, formBody)
      // Is the update form
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    formToDatabase(formBody)
    navigate(`/locations/}`) //Should only be comming from a location page
  }
  const handleReset = (e) => {
    e.preventDefault()
    setFormBody(initialForm)
  }
  return (
    <div>
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name: </label>
          <input
            className="form-input"
            name="name"
            type="text"
            required
            onChange={handleFormChange}
            defaultValue={formBody.name}
          />
        </div>
        <div className="form-field">
          <label htmlFor="establishment">Establishment: </label>
          <input
            className="form-input"
            name="establishment"
            type="text"
            required
            onChange={handleFormChange}
            defaultValue={formBody.establishment}
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description: </label>
          <textarea
            className="form-input"
            name="description"
            type="text"
            required
            onChange={handleFormChange}
            defaultValue={formBody.description}
          />
        </div>
        <div className="btn-holder">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default LocalFareForm