const ItemCard = ({localItem, handleSelection}) => {
  return (
    <div className="item-card">
      <h3 onClick={handleSelection}>{localItem.name}</h3>
    </div>
  )
}

export default ItemCard