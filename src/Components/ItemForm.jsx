//These forms will be used to enter new entries, or update existing ones.
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ItemForm = ({ localItem, locationId }) => {
  const initialForm = localItem
  const [formBody, setFormBody] = useState(initialForm)
  const localItemObj = useSelector(state => state.localObj.localObj)
  const navigate = useNavigate()

  const handleFormChange = (e) => {
    setFormBody({...formBody, [e.target.name]: e.target.value })
  }
  const formToDatabase = async (formBody) => {
    if (Object.keys(initialForm).length === 0) {
      await Client.post(`/api/localitems` , formBody)
      // Is the create form
    } else {
      await Client.put(`/api/localitem/${localItemObj.id}`, formBody)
      // Is the update form
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    formToDatabase(formBody)
    navigate(`/locations/${locationId}`) //Should only be comming from a location page
  }
  const handleReset = (e) => {
    e.preventDefault()
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
          defaultValue={formBody.name}
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
          defaultValue={formBody.store}
        />
      </div>
      <div className="form-field">
        <label htmlFor="store-url">Store URL: </label>
        <input
          className="form-input"
          name="store-url"
          type="text"
          onChange={handleFormChange}
          defaultValue={formBody.store_url}
        />
      </div>
      <div className="form-field">
        <label htmlFor="image">Image: </label>
        <input
          className="form-input"
          name="image"
          type="text"
          onChange={handleFormChange}
          defaultValue={formBody.image}
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
  )

}

export default ItemForm