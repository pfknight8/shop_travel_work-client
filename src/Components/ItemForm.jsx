//These forms will be used to enter new entries, or update existing ones.
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Client from "../Services/api"
import '../Styles/Form.css'

const ItemForm = ({ localItem }) => {
  const initialForm = localItem
  const [formBody, setFormBody] = useState(initialForm)
  const location = useSelector(state => state.locations.location)
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (Object.keys(initialForm).length === 0) {
      setFormBody({...formBody, "user_id": user.id, "location_id": location.id})
    }
  }, [])

  const handleFormChange = (e) => {
    setFormBody({...formBody, [e.target.name]: e.target.value })
  }

  const formToDatabase = async (formBody) => {
    if (Object.keys(initialForm).length === 0) {
      try {
        await Client.post(`/localitems` , formBody)
        navigate(`/`)
      } catch (error) {
        alert('You must be signed in to do that!')
        throw error
      }
      // Is the create form
    } else {
      try {
        await Client.put(`/localitems/${localItem.id}`, formBody)
        navigate(`/locations/${location.id}`)
      } catch (error) {
        alert('You must be the content owner to do that!')
        throw error
      }
      // Is the update form
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    formToDatabase(formBody)
  }
  const handleReset = () => {
    setFormBody(initialForm)
  }

  return (
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
        <label htmlFor="store">Store: </label>
        <input
          className="form-input"
          name="store"
          type="text"
          required
          onChange={handleFormChange}
          defaultValue={initialForm?.store}
        />
      </div>
      <div className="form-field">
        <label htmlFor="store-url">Store URL: </label>
        <input
          className="form-input"
          name="store-url"
          type="text"
          onChange={handleFormChange}
          defaultValue={initialForm?.store_url}
        />
      </div>
      <div className="form-field">
        <label htmlFor="image">Image: </label>
        <input
          className="form-input"
          name="image"
          type="text"
          onChange={handleFormChange}
          defaultValue={initialForm?.image}
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
      <div className="btn-holder">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  )

}

export default ItemForm