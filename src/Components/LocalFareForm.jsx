//These forms will be used to enter new entries, or update existing ones.
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Client from "../Services/api"
import '../Styles/Form.css'

const LocalFareForm = ({ localFare }) => {
  const initialForm = localFare
  const [formBody, setFormBody] = useState(initialForm)
  const location = useSelector(state => state.locations.location)
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()

  
  const checkFormInfo = () => {    
    if (Object.keys(initialForm).length === 0) {
      setFormBody({...formBody, "user_id": user.id, "location_id": location.id})
    }
  }
  
  useEffect(() => {
    checkFormInfo()
  }, [])

  const handleFormChange = (e) => {
    setFormBody({...formBody, [e.target.name]: e.target.value })
  }
  const handleFormInts = (e) => {
    setFormBody({...formBody, [e.target.name]: parseInt(e.target.value)})
  }

  const formToDatabase = async (formBody) => {
    if (Object.keys(initialForm).length === 0) {
      console.log(formBody)
      try {
        await Client.post(`/localfare` , formBody)
        alert("submitted!")
        navigate(`/`)
      } catch (error) {
        alert('You must be signed in to do that!')
        throw error
      }
    } else {
      try {
        await Client.put(`/localfare/${localFare.id}`, formBody)
        navigate(`/locations/${location.id}`)
      } catch (error) {
        alert('You must be the content owner to do that!')
        throw error
      }
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    formToDatabase(formBody)
    setFormBody(initialForm)
  }
  const handleReset = () => {
    setFormBody(initialForm)
    checkFormInfo()
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
            defaultValue={initialForm?.name}
          />
        </div>
        <div className="form-field">
          <label htmlFor="establishment">Category: </label>
          <select
            className="form-select"
            name="category"
            required
            onChange={handleFormChange}
            defaultValue={initialForm?.category}
          >
            <option hidden>Select</option>
            <option value="Beverage" aria-label="Beverage">Beverage</option>
            <option value="Breakfast" aria-label="Breakfast">Breakfast</option>
            <option value="Lunch" aria-label="Lunch">Lunch</option>
            <option value="Tapas" aria-label="Tapas">Tapas</option>
            <option value="Dinner" aria-label="Dinner">Dinner</option>
            <option value="Dessert" aria-label="Dessert">Dessert</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="establishment">Establishment: </label>
          <input
            className="form-input"
            name="establishment"
            type="text"
            required
            onChange={handleFormChange}
            defaultValue={initialForm?.establishment}
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
            defaultValue={initialForm?.description}
          />
        </div>
        <div className="form-field">
          <label htmlFor="establishment">Recommend: </label>
          <select
            className="form-select"
            name="recommend"
            required
            onChange={handleFormInts}
            defaultValue={initialForm?.recommend}
          >
            <option hidden>Select</option>
            <option value={-1} aria-label="avoid">Avoid</option>
            <option value={0} aria-label="neutral">Hit or Miss</option>
            <option value={1} aria-label="recommend">Recommended</option>
          </select>
        </div>
        <div className="btn-holder">
          <button type="submit" disabled={!formBody.name}>Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default LocalFareForm