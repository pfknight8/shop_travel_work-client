import { useState } from "react"
import { useSelector } from "react-redux"
import ItemForm from "../Components/ItemForm"

const ItemDetails = () => {
  let localItem = useSelector(state => state.localObj.localObj)
  const [itemEditBtn, toggleItemEditBtn] = useState(false)

  return localItem && (
    <div>
      <h2>{localItem.name}</h2>
      <p>{localItem.description}</p>
      <h3>{localItem.store}</h3>
      <p>{localItem?.store_url}</p>
      <p>Postetd by: {localItem.user}</p>
      <button className="edit-btn" onClick={() => toggleItemEditBtn(!itemEditBtn)}>{itemEditBtn ? 'Cancel' : 'Edit'}</button>
      {itemEditBtn && <ItemForm localItem={localItem} />}
    </div>
  )
}

export default ItemDetails