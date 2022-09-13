import { useSelector } from "react-redux"

const ItemDetails = () => {
  let localItem = useSelector(state => state.localObj.localObj)
  return localItem && (
    <div>
      <h2>{localItem.name}</h2>
      <p>{localItem.description}</p>
      <h3>{localItem.store}</h3>
      <p>{localItem?.store_url}</p>
      <p>Postetd by: {localItem.user}</p>
    </div>
  )
}

export default ItemDetails