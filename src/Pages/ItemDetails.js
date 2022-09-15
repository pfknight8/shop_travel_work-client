import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ItemForm from "../Components/ItemForm"
import Client from "../Services/api"

const ItemDetails = () => {
  let localItem = useSelector(state => state.localObj.localObj)
  const [itemEditBtn, toggleItemEditBtn] = useState(false)
  const navigate = useNavigate()

  const deleteObj = async () => {
    try {
      let res = await Client.delete(`/api/localitems/${localItem.id}`)
      console.log(res.statusText)
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

  return localItem && (
    <div>
      <h2>{localItem.name}</h2>
      <p>{localItem.description}</p>
      <h3>{localItem.store}</h3>
      <p>{localItem?.store_url}</p>
      <p>Postetd by: {localItem.user}</p>
      <div className="btn-holder">
        <button className="edit-btn" onClick={() => toggleItemEditBtn(!itemEditBtn)}>{itemEditBtn ? 'Cancel' : 'Edit'}</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
      {itemEditBtn && <ItemForm localItem={localItem} />}
    </div>
  )
}

export default ItemDetails